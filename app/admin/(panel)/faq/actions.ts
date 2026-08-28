"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getFaqRepository } from "@/lib/database/repositories/faq-repository";
import { faqFormSchema } from "@/lib/validation/faq";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { CmsFaqEntryInput } from "@/types/faq";
import type { FormActionState } from "@/lib/admin/actions-helpers";

function revalidateFaqSurfaces() {
  revalidatePath("/admin/faq");
  revalidatePath("/faq");
  revalidatePath("/");
}

export async function saveFaqAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const parsed = faqFormSchema.safeParse({
    question: formData.get("question"),
    answer: formData.get("answer"),
    priority: formData.get("priority"),
    active: formData.get("active") ?? undefined,
    entityType: formData.get("entityType"),
    entityId: formData.get("entityId"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const d = parsed.data;
  const input: CmsFaqEntryInput = {
    question: d.question,
    answer: d.answer,
    priority: d.priority,
    active: d.active,
    entityType: d.entityType,
    entityId: d.entityType === "global" ? null : d.entityId,
  };

  const repo = getFaqRepository();

  try {
    if (id) {
      await repo.update(id, input);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "faq",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano pytanie FAQ „${input.question}”`,
      });
    } else {
      const created = await repo.create(input);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "faq",
        entityId: created.id,
        action: "create",
        summary: `Utworzono pytanie FAQ „${input.question}”`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać pytania." };
  }

  revalidateFaqSurfaces();
  redirect("/admin/faq");
}

export async function deleteFaqAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const entry = await getFaqRepository().get(id);
  await getFaqRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "faq",
    entityId: id,
    action: "delete",
    summary: `Usunięto pytanie FAQ „${entry?.question ?? id}”`,
  });
  revalidateFaqSurfaces();
}
