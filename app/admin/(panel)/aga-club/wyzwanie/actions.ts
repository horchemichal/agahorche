"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAgaClubChallengeRepository } from "@/lib/database/repositories/aga-club-challenge-repository";
import { agaClubChallengeDayFormSchema } from "@/lib/validation/aga-club";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";

export async function saveChallengeDayAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const day = Number(formData.get("day"));
  if (!Number.isInteger(day) || day < 1 || day > 30) {
    return { error: "Nieprawidłowy numer dnia." };
  }

  const parsed = agaClubChallengeDayFormSchema.safeParse({
    task: formData.get("task"),
    tip: formData.get("tip"),
    videoUrl: formData.get("videoUrl"),
    active: formData.get("active") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  try {
    await getAgaClubChallengeRepository().updateDay(day, parsed.data);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "aga-club-challenge-day",
      entityId: String(day),
      action: "update",
      summary: `Zaktualizowano dzień ${day} wyzwania „30 dni z Agą”`,
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać dnia." };
  }

  revalidatePath("/admin/aga-club");
  revalidatePath("/admin/aga-club/wyzwanie");
  revalidatePath(`/admin/aga-club/wyzwanie/${day}`);
  return { error: null };
}
