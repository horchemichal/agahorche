import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPromotionsRepository } from "@/lib/database/repositories/promotions-repository";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card } from "@/components/ui/card";
import { PublishButton } from "./publish-button";

export const metadata: Metadata = {
  title: "Do akceptacji — Aga Admin",
  robots: { index: false, follow: false },
};

function dataPl(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * Ekran dla Agi, obslugiwany z telefonu.
 *
 * Codzienne zadanie sprawdza oferte u Vorwerka i zapisuje nowa jako wersje
 * robocza. Tutaj Aga widzi, co czeka, moze podmienic zdjecie i jednym duzym
 * przyciskiem wypuscic to na strone. Dopoki nie klinie - na stronie nic sie
 * nie zmienia.
 */
export default async function DoAkceptacjiPage() {
  await requireAdmin();
  const wszystkie = await getPromotionsRepository().list();
  const czekajace = wszystkie.filter((p) => p.isDraft);
  // 6.11.2026: wpisy na blog przygotowane przez zaplanowane zadania czekają tu obok ofert.
  const wpisy = (await getBlogRepository().list())
    .filter((w) => w.status === "draft")
    .sort((a, b) => (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""));

  return (
    <>
      <PanelHeader
        title="Do akceptacji"
        description="Oferty i wpisy na blog przygotowane automatycznie. Nic nie trafia na stronę, dopóki nie klikniesz „Opublikuj”."
      />

      {wpisy.length > 0 && (
        <div className="mb-8 grid gap-5">
          {wpisy.map((w) => (
            <Card key={w.id}>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                Wpis na blog · czeka na Ciebie
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-neutral-900">{w.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{w.excerpt}</p>
              <p className="mt-2 text-xs text-muted">
                {w.content.split(/\s+/).filter(Boolean).length} słów · adres: /blog/{w.slug}
              </p>
              <div className="mt-5 grid gap-3">
                <Link
                  href={`/admin/blog/${w.id}`}
                  className="block w-full rounded-xl border border-border px-5 py-4 text-center text-base font-medium text-neutral-800 hover:bg-surface"
                >
                  Przeczytaj i popraw
                </Link>
                <PublishButton id={w.id} title={w.title} rodzaj="wpis" />
              </div>
            </Card>
          ))}
        </div>
      )}

      {czekajace.length === 0 ? (
        wpisy.length > 0 ? null : (
          <EmptyState
            title="Nic nie czeka"
            description="Kiedy pojawi się nowa oferta Vorwerka albo nowy wpis na blog, znajdziesz je tutaj do zatwierdzenia."
          />
        )
      ) : (
        <div className="grid gap-5">
          {czekajace.map((p) => (
            <Card key={p.id}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                  Czeka na Ciebie
                </span>
                {!p.imageMediaId && (
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                    Brak zdjęcia
                  </span>
                )}
              </div>

              <h2 className="mt-3 font-display text-xl font-semibold text-neutral-900">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {p.shortDescription}
              </p>
              {p.fullDescription && (
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {p.fullDescription}
                </p>
              )}

              <dl className="mt-4 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Od</dt>
                  <dd>{dataPl(p.startsAt)}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Do</dt>
                  <dd>{dataPl(p.endsAt)}</dd>
                </div>
              </dl>

              <div className="mt-5 grid gap-3">
                <Link
                  href={`/admin/promocje/${p.id}`}
                  className="block w-full rounded-xl border border-border px-5 py-4 text-center text-base font-medium text-neutral-800 hover:bg-surface"
                >
                  {p.imageMediaId ? "Zmień zdjęcie lub treść" : "Dodaj zdjęcie"}
                </Link>
                <PublishButton id={p.id} title={p.title} />
              </div>
            </Card>
          ))}
        </div>
      )}

      <p className="mt-8 text-xs leading-relaxed text-muted">
        Oferta po kliknięciu „Opublikuj” trafia do „Oferty Thermomix” — wycofasz ją tam, odznaczając „Aktywna”.
        Wpis trafia na blog — wycofasz go w zakładce „Blog”, zmieniając status na wersję roboczą.
        </p>
    </>
  );
}
