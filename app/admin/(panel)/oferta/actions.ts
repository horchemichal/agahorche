"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { offerFormSchema } from "@/lib/validation/offer";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { storeUploadedFile, MediaUploadError } from "@/lib/admin/media-upload";
import type { OfferInput } from "@/types/offer";
import type { FormActionState } from "@/lib/admin/actions-helpers";

function revalidatePublicOfferSurfaces() {
  // The offer is shown on the homepage today (ActiveOfferSection); add
  // more paths here as it gets wired into other pages (spec §21 example:
  // TM7 page, city pages) so a price edit propagates everywhere at once.
  revalidatePath("/");
  revalidatePath("/admin/oferta");
}

export async function saveOfferAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const parsed = offerFormSchema.safeParse({
    productName: formData.get("productName"),
    model: formData.get("model"),
    price: formData.get("price"),
    installmentPrice: formData.get("installmentPrice"),
    installmentMonths: formData.get("installmentMonths"),
    description: formData.get("description"),
    imageMediaId: formData.get("imageMediaId"),
    ctaLabel: formData.get("ctaLabel"),
    ctaHref: formData.get("ctaHref"),
    bonuses: formData.get("bonuses"),
    conditions: formData.get("conditions"),
    startsAt: formData.get("startsAt"),
    endsAt: formData.get("endsAt"),
    isActive: formData.get("isActive") ?? undefined,
    isPrimary: formData.get("isPrimary") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  // Zdjęcie wgrane prosto w formularzu (np. z telefonu) ma pierwszeństwo przed wybranym z biblioteki.
  let wgraneZdjecie: string | null = null;
  const plik = formData.get("imageFile");
  if (plik instanceof File && plik.size > 0) {
    try {
      const stored = await storeUploadedFile(plik);
      const asset = await getMediaRepository().create({
        fileName: stored.fileName,
        url: stored.url,
        altText: parsed.data.productName,
        storageProvider: stored.storageProvider,
        sizeBytes: stored.sizeBytes,
        mimeType: stored.mimeType,
        uploadedBy: admin.email,
      });
      wgraneZdjecie = asset.id;
    } catch (error) {
      if (error instanceof MediaUploadError) return { error: error.message };
      return { error: error instanceof Error ? error.message : "Nie udało się przesłać zdjęcia." };
    }
  }

  const input: OfferInput = {
    productName: parsed.data.productName,
    model: parsed.data.model,
    priceCents: parsed.data.price,
    installmentCents: parsed.data.installmentPrice,
    installmentMonths: parsed.data.installmentMonths,
    description: parsed.data.description,
    imageMediaId: wgraneZdjecie ?? parsed.data.imageMediaId,
    ctaLabel: parsed.data.ctaLabel,
    ctaHref: parsed.data.ctaHref,
    bonuses: parsed.data.bonuses,
    conditions: parsed.data.conditions,
    startsAt: parsed.data.startsAt,
    endsAt: parsed.data.endsAt,
    isActive: parsed.data.isActive,
    isPrimary: parsed.data.isPrimary,
  };

  const repo = getOffersRepository();

  try {
    if (id) {
      await repo.update(id, input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "offer",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano ofertę „${input.productName}”`,
      });
    } else {
      const created = await repo.create(input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "offer",
        entityId: created.id,
        action: "create",
        summary: `Utworzono ofertę „${input.productName}”`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać oferty." };
  }

  revalidatePublicOfferSurfaces();
  redirect("/admin/oferta");
}

export async function deleteOfferAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const offer = await getOffersRepository().get(id);
  await getOffersRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "offer",
    entityId: id,
    action: "delete",
    summary: `Usunięto ofertę „${offer?.productName ?? id}”`,
  });
  revalidatePublicOfferSurfaces();
}
