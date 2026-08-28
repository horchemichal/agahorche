"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPromotionsRepository } from "@/lib/database/repositories/promotions-repository";
import { promotionFormSchema } from "@/lib/validation/promotion";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { PromotionInput } from "@/types/promotion";
import type { FormActionState } from "@/lib/admin/actions-helpers";

function revalidatePublicPromotionSurfaces() {
  revalidatePath("/");
  revalidatePath("/admin/promocje");
}

export async function savePromotionAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const parsed = promotionFormSchema.safeParse({
    title: formData.get("title"),
    shortDescription: formData.get("shortDescription"),
    fullDescription: formData.get("fullDescription"),
    ctaLabel: formData.get("ctaLabel"),
    ctaHref: formData.get("ctaHref"),
    startsAt: formData.get("startsAt"),
    endsAt: formData.get("endsAt"),
    priority: formData.get("priority"),
    isDraft: formData.get("isDraft") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  if (new Date(parsed.data.endsAt) < new Date(parsed.data.startsAt)) {
    return { error: "Data zakończenia nie może być wcześniejsza niż data rozpoczęcia." };
  }

  const input: PromotionInput = {
    title: parsed.data.title,
    shortDescription: parsed.data.shortDescription,
    fullDescription: parsed.data.fullDescription,
    imageMediaId: null,
    ctaLabel: parsed.data.ctaLabel,
    ctaHref: parsed.data.ctaHref,
    startsAt: parsed.data.startsAt,
    endsAt: parsed.data.endsAt,
    priority: parsed.data.priority,
    isDraft: parsed.data.isDraft,
  };

  const repo = getPromotionsRepository();

  try {
    if (id) {
      await repo.update(id, input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "promotion",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano promocję „${input.title}”`,
      });
    } else {
      const created = await repo.create(input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "promotion",
        entityId: created.id,
        action: "create",
        summary: `Utworzono promocję „${input.title}”`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać promocji." };
  }

  revalidatePublicPromotionSurfaces();
  redirect("/admin/promocje");
}

export async function deletePromotionAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const promo = await getPromotionsRepository().get(id);
  await getPromotionsRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "promotion",
    entityId: id,
    action: "delete",
    summary: `Usunięto promocję „${promo?.title ?? id}”`,
  });
  revalidatePublicPromotionSurfaces();
}
