"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPromotionsRepository } from "@/lib/database/repositories/promotions-repository";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";

/**
 * Publikacja oferty z ekranu „Do akceptacji".
 *
 * Codzienne zadanie sprawdza ofertę u Vorwerka i zapisuje ją jako wersję roboczą
 * promocji (isDraft). Nic nie idzie na stronę, dopóki Aga nie kliknie „Opublikuj".
 *
 * 22.10.2026: „Opublikuj" PRZENOSI wpis do „Oferty Thermomix" (tabela offers),
 * bo oferta producenta to oferta zakupu TM7, a nie promocja. Wersja robocza
 * promocji jest po przeniesieniu usuwana, żeby nic się nie dublowało.
 * Ceny całkowitej nie zgadujemy — przenosimy tylko ratę i liczbę rat, jeśli są w tekście.
 */
function liczba(tekst: string, wzor: RegExp): number | null {
  const m = tekst.match(wzor);
  if (!m) return null;
  const n = Number(m[1].replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : null;
}

export async function publishPromotionAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const promo = await getPromotionsRepository().get(id);
  if (!promo) return;
  const tekst = promo.shortDescription + " " + (promo.fullDescription ?? "");
  const rata = liczba(tekst, /(\d[\d\s]*(?:,\d{1,2})?)\s*zł\s*(?:miesięcznie|\/\s*mies)/i);
  const raty = liczba(tekst, /(\d{1,3})\s*(?:ratach|rat\b|raty)/i);
  const oferta = await getOffersRepository().create(
    {
      productName: promo.title,
      model: /TM6/i.test(promo.title) ? "TM6" : "TM7",
      priceCents: null,
      installmentCents: rata !== null ? Math.round(rata * 100) : null,
      installmentMonths: raty !== null ? Math.round(raty) : null,
      description: promo.fullDescription || promo.shortDescription,
      imageMediaId: promo.imageMediaId,
      ctaLabel: promo.ctaLabel,
      ctaHref: promo.ctaHref,
      bonuses: [],
      conditions: promo.shortDescription,
      startsAt: promo.startsAt,
      endsAt: promo.endsAt,
      isActive: true,
      isPrimary: false,
    },
    admin.email,
  );
  await getPromotionsRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "offer",
    entityId: oferta.id,
    action: "create",
    summary: "Opublikowano ofertę „" + promo.title + "” z ekranu Do akceptacji (przeniesiona z wersji roboczej)",
  });
  revalidatePath("/");
  revalidatePath("/oferta");
  revalidatePath("/admin/oferta");
  revalidatePath("/admin/promocje");
  revalidatePath("/admin/do-akceptacji");
}

/**
 * Publikacja wpisu na blog z ekranu „Do akceptacji" (6.11.2026).
 *
 * Zaplanowane zadania (promocje 1. i 15. dnia miesiąca, poradnik co tydzień)
 * zapisują wpis jako wersję roboczą w /admin/blog. Na stronę trafia dopiero po
 * kliknięciu tutaj: status „opublikowany", data publikacji = teraz,
 * indeksowanie włączone, więc wpis od razu wchodzi do sitemapy.
 */
export async function publishBlogDraftAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const repo = getBlogRepository();
  const post = await repo.get(id);
  if (!post || post.status !== "draft") return;
  await repo.update(
    id,
    {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      cluster: post.cluster,
      relatedLocationSlug: post.relatedLocationSlug,
      coverImage: post.coverImage,
      author: post.author,
      status: "published",
      indexable: true,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      scheduledFor: null,
      publishedAt: new Date().toISOString(),
    },
    admin.email,
  );
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "blog",
    entityId: id,
    action: "publish",
    summary: "Opublikowano wpis „" + post.title + "” z ekranu Do akceptacji",
  });
  revalidatePath("/blog");
  revalidatePath("/blog/" + post.slug);
  revalidatePath("/sitemap.xml");
  revalidatePath("/admin/blog");
  revalidatePath("/admin/do-akceptacji");
}
