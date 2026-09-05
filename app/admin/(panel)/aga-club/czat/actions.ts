"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { usunWiadomosc } from "@/lib/klub/czat";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";

/*
 * UWAGA NA PRZYSZŁOŚĆ: w pliku z „use server" wolno eksportować WYŁĄCZNIE
 * funkcje async. Eksport stałej albo obiektu wywala cały moduł przy
 * ładowaniu i strona oddaje 500 — dokładnie to zdarzyło się 4.09.2026
 * w app/admin/(panel)/aga-club/actions.ts. `export type` jest bezpieczny,
 * bo znika przy kompilacji.
 */

/** Moderacja: Aga usuwa cudzą wiadomość z czatu klubu. */
export async function usunWiadomoscCzatuAction(formData: FormData): Promise<void> {
  const admin = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  // Bez `wlascicielId` — panel może usunąć każdą wiadomość, w odróżnieniu
  // od klubowiczki, która usuwa tylko swoje (app/api/klub/czat/[id]).
  const usunieto = await usunWiadomosc(id, admin.email);
  if (!usunieto) return;

  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "club-chat",
    entityId: id,
    action: "delete",
    summary: "Usunięto wiadomość z czatu Aga Club",
  });

  revalidatePath("/admin/aga-club/czat");
}
