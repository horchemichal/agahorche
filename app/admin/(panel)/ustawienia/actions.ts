"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getFinancingSettingsRepository } from "@/lib/database/repositories/financing-settings-repository";
import { financingSettingsFormSchema } from "@/lib/validation/financing-settings";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";

export async function saveFinancingSettingsAction(
  _prevState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const admin = await requireAdmin();

  const parsed = financingSettingsFormSchema.safeParse({
    ratyZeroDostepne: formData.get("ratyZeroDostepne") ?? undefined,
    ratyZeroKomunikat: formData.get("ratyZeroKomunikat"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  try {
    await getFinancingSettingsRepository().update(parsed.data, admin.email);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "financing-settings",
      entityId: "global",
      action: "update",
      summary: parsed.data.ratyZeroDostepne
        ? "Włączono raty 0% na stronie"
        : "Wyłączono raty 0% na stronie",
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać ustawień." };
  }

  /**
   * Ustawienie zmienia treść na stronie głównej, /finansowanie, stronach
   * TM7 i porównania oraz w kalkulatorze osadzonym na stronach miast —
   * czyli praktycznie wszędzie. Unieważniamy całe drzewo, nie pojedynczą
   * ścieżkę.
   */
  revalidatePath("/", "layout");
  revalidatePath("/admin/ustawienia");

  return { error: null };
}
