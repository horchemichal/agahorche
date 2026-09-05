"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { zalozKonto, ustawHaslo, usunKonto, listaKont } from "@/lib/admin/konta-klientow";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";

/**
 * OŚ PLIKU
 * Akcje panelu dla kont Strefy Klienta — patrz lib/admin/konta-klientow.ts,
 * gdzie opisane jest, dlaczego panel przestał obsługiwać `aga_club_members`
 * i przeszedł na `client_users`.
 *
 * STAN FORMULARZA MA WŁASNY KSZTAŁT, nie `FormActionState` z reszty panelu.
 * Powód: po udanym dodaniu konta musimy oddać do widoku HASŁO, żeby Aga
 * mogła je przekazać klientce. `FormActionState` niesie wyłącznie błąd,
 * więc tutaj by nie wystarczył.
 *
 * HASŁO W DZIENNIKU ZDARZEŃ NIE LĄDUJE. `recordAuditEvent` zapisuje sam
 * fakt („ustawiono nowe hasło"), nigdy jego treść — dziennik czyta się
 * później i nie jest miejscem na hasła.
 */
export interface StanKonta {
  blad: string | null;
  /** Hasło do jednorazowego pokazania — po odświeżeniu strony znika. */
  haslo?: string;
  /** Do czyjego konta odnosi się `haslo` — żeby widok wiedział, gdzie je pokazać. */
  dlaEmail?: string;
}

/*
 * TU NIE MOŻE STAĆ ŻADNA STAŁA. Do 5.09.2026 leżał tutaj
 * `export const PUSTY_STAN: StanKonta = { blad: null }` — i to wywracało
 * CAŁĄ stronę /admin/aga-club błędem 500:
 *
 *   Error: A "use server" file can only export async functions, found object.
 *
 * Plik z „use server" jest dla Next.js zbiorem akcji serwerowych i wolno mu
 * eksportować wyłącznie funkcje async. Eksport obiektu wywala moduł już przy
 * ładowaniu, więc padała nie tylko akcja, ale i sama strona.
 *
 * `export interface` i `export type` są bezpieczne — znikają przy kompilacji
 * i nie ma ich w gotowym pliku. Stała zostaje, więc musi mieszkać gdzie
 * indziej: przeniesiona do member-form.tsx, czyli tam, gdzie jest używana.
 */

export async function dodajKontoAction(_prev: StanKonta, formData: FormData): Promise<StanKonta> {
  const admin = await requireAdmin();

  const displayName = String(formData.get("displayName") ?? "");
  const email = String(formData.get("email") ?? "");
  const haslo = String(formData.get("haslo") ?? "");

  const wynik = await zalozKonto({ displayName, email, haslo });
  if (!wynik.ok) return { blad: wynik.blad };

  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "client-account",
    entityId: email.trim().toLowerCase(),
    action: "create",
    summary: `Założono konto Strefy Klienta dla „${displayName.trim()}”`,
  });

  revalidatePath("/admin/aga-club");
  return { blad: null, haslo: wynik.haslo, dlaEmail: email.trim().toLowerCase() };
}

export async function ustawHasloAction(_prev: StanKonta, formData: FormData): Promise<StanKonta> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const haslo = String(formData.get("haslo") ?? "");
  const email = String(formData.get("email") ?? "");

  const wynik = await ustawHaslo(id, haslo);
  if (!wynik.ok) return { blad: wynik.blad };

  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "client-account",
    entityId: id,
    action: "update",
    summary: `Ustawiono nowe hasło do Strefy Klienta dla ${email}`,
  });

  revalidatePath("/admin/aga-club");
  return { blad: null, haslo: wynik.haslo, dlaEmail: email };
}

export async function usunKontoAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const konto = (await listaKont()).find((k) => k.id === id);
  await usunKonto(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "client-account",
    entityId: id,
    action: "delete",
    summary: `Usunięto konto Strefy Klienta ${konto?.email ?? id}`,
  });
  revalidatePath("/admin/aga-club");
}
