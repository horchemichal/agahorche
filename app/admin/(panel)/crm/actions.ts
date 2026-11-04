"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getCrmRepository } from "@/lib/database/repositories/crm-repository";
import { crmKlientFormSchema } from "@/lib/validation/crm";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";

/*
 * W dzienniku zdarzeń zapisujemy samo imię i nazwisko klienta — tak samo jak
 * przy leadach. Bez miejscowości i bez osoby polecającej.
 */

export async function saveCrmKlientAction(_prev: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();
  const id = String(formData.get("id") ?? "");

  const parsed = crmKlientFormSchema.safeParse({
    imieNazwisko: formData.get("imieNazwisko") ?? "",
    miejscowosc: formData.get("miejscowosc") ?? "",
    polecenie: formData.get("polecenie") ?? undefined,
    polecil: formData.get("polecil") ?? "",
    kupil: formData.get("kupil") ?? undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const repo = getCrmRepository();
  try {
    if (id) {
      await repo.update(id, parsed.data);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "crm",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano klienta CRM „${parsed.data.imieNazwisko}”`,
      });
    } else {
      const created = await repo.create(parsed.data);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "crm",
        entityId: created.id,
        action: "create",
        summary: `Dodano klienta CRM „${parsed.data.imieNazwisko}”`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać klienta." };
  }

  revalidatePath("/admin/crm");
  redirect("/admin/crm");
}

export async function setCrmKupilAction(id: string, kupil: boolean): Promise<{ error: string | null }> {
  const admin = await requireAdmin();
  try {
    const klient = await getCrmRepository().setKupil(id, kupil);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "crm",
      entityId: id,
      action: "update",
      summary: `Klient CRM „${klient.imieNazwisko}”: ${kupil ? "kupił" : "nie kupił"}`,
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zmienić statusu." };
  }
  revalidatePath("/admin/crm");
  return { error: null };
}

/** Usunięcie na twardo — to dane osobowe, „ukryty" wpis dalej by w bazie leżał. */
export async function deleteCrmKlientAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const klient = await getCrmRepository().get(id);
  await getCrmRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "crm",
    entityId: id,
    action: "delete",
    summary: `Usunięto klienta CRM „${klient?.imieNazwisko ?? id}”`,
  });
  revalidatePath("/admin/crm");
}
