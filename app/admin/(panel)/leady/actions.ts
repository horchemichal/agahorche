"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getLeadsRepository } from "@/lib/database/leads-repository";
import { leadStatusUpdateSchema } from "@/lib/validation/lead";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { LeadStatus } from "@/types/lead";

const STATUS_LABEL: Record<LeadStatus, string> = {
  NEW: "Nowy",
  CONTACTED: "Skontaktowano",
  PRESENTATION_BOOKED: "Prezentacja umówiona",
  SOLD: "Sprzedano",
  LOST: "Utracony",
};

export async function updateLeadStatusAction(id: string, status: string): Promise<{ error: string | null }> {
  const admin = await requireAdmin();

  const parsed = leadStatusUpdateSchema.safeParse({ status });
  if (!parsed.success) {
    return { error: "Nieprawidłowy status." };
  }

  try {
    const lead = await getLeadsRepository().updateStatus(id, parsed.data.status);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "lead",
      entityId: id,
      action: "update",
      summary: `Zmieniono status leadu „${lead.values.name}” na „${STATUS_LABEL[parsed.data.status]}”`,
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zmienić statusu." };
  }

  revalidatePath("/admin/leady");
  revalidatePath(`/admin/leady/${id}`);
  revalidatePath("/admin");
  return { error: null };
}

/**
 * Trwałe usunięcie zgłoszenia.
 *
 * Dlaczego to w ogóle jest: lead zawiera dane osobowe — imię, telefon,
 * e-mail i miejscowość. Do tej pory nie było żadnego sposobu, żeby je
 * usunąć z panelu, a przy prośbie „proszę usunąć moje dane” trzeba mieć
 * jak to zrobić. Przy okazji pozwala wyczyścić testowe i spamowe wpisy.
 *
 * Świadomie usuwamy NA TWARDO, a nie flagą „ukryty”: przy danych osobowych
 * miękkie usuwanie znaczy tyle, że dane dalej leżą w bazie, tylko ich nie
 * widać — czyli nie jest to usunięcie.
 *
 * W dzienniku zdarzeń zostaje ślad, że usunięcia dokonano, ale BEZ danych
 * kontaktowych — samo imię, żeby dało się powiązać zdarzenie ze zgłoszeniem,
 * gdyby ktoś pytał. Przepisywanie telefonu i e-maila do audytu przy okazji
 * kasowania byłoby wyjmowaniem danych tylnymi drzwiami.
 */
export async function deleteLeadAction(id: string): Promise<void> {
  const admin = await requireAdmin();

  const lead = await getLeadsRepository().get(id);
  await getLeadsRepository().remove(id);

  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "lead",
    entityId: id,
    action: "delete",
    summary: `Usunięto zgłoszenie „${lead?.values.name ?? id}”`,
  });

  revalidatePath("/admin/leady");
  revalidatePath("/admin");
}
