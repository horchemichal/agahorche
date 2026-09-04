import "server-only";
import bcrypt from "bcryptjs";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import type { ClientAccount } from "@/types/client";

/**
 * OŚ MODUŁU
 * Konta Strefy Klienta widziane od strony panelu Agi — lista, zakładanie
 * konta i ustawianie nowego hasła.
 *
 * PO CO TO POWSTAŁO (zgłoszenie Michała, 4.09.2026: „pisze brak członków,
 * a ja jestem zalogowany", „nie ma opcji, żeby komuś hasło wymyślić",
 * „w panelu nie ma opcji przypomnij hasło").
 *
 * Wszystkie trzy problemy miały jedną przyczynę: w bazie były DWIE różne
 * listy ludzi i panel pokazywał tę niewłaściwą.
 *
 *   `client_users`      — prawdziwe konta z hasłem. Tym się ludzie logują.
 *   `aga_club_members`  — osobna lista „członków klubu", która NIE dawała
 *                         żadnego dostępu. Panel wypisywał właśnie ją.
 *
 * Dlatego Michał widział „Brak członków (0)", mimo że jego konto istniało
 * i działało: siedziało w `client_users`, a panel patrzył w
 * `aga_club_members`. Dodanie kogoś w panelu też nie dawało mu wejścia —
 * powstawał wiersz w tabeli, która niczego nie otwiera.
 *
 * Panel czyta teraz i zapisuje wyłącznie `client_users`, czyli to, co
 * faktycznie decyduje o dostępie. Stara tabela zostaje nietknięta (jest
 * pusta), żeby nic nie skasować przy okazji.
 *
 * HASŁA. Nie ma tu samoobsługowego resetu przez e-mail — wymagałby tokenów
 * i skrzynki nadawczej dla klientek, a tego jeszcze nie ma. Jest za to
 * rzecz, która działa od razu i pasuje do sposobu, w jaki Aga pracuje:
 * konta zakłada ona sama, więc ona też ustawia hasło i przekazuje je
 * klientce. Hasło pokazujemy JEDEN RAZ, zaraz po ustawieniu — potem
 * w bazie jest już tylko jego skrót (bcrypt) i nikt, łącznie z Agą, nie
 * odczyta go z powrotem.
 */

export interface KontoKlienta extends ClientAccount {
  /** Czy konto ma ustawione hasło — bez tego zalogowanie się jest niemożliwe. */
  maHaslo: boolean;
}

export type WynikKonta =
  | { ok: true; haslo?: string }
  | { ok: false; blad: string };

const BRAK_BAZY = "Baza jest chwilowo niedostępna — spróbuj za moment.";

function pula() {
  if (!isPostgresConfigured()) return null;
  return getPostgresPool();
}

/**
 * Hasło do przekazania klientce. Bez znaków, które mylą się przy
 * przepisywaniu z kartki albo dyktowaniu przez telefon: 0/O, 1/l/I.
 */
export function wygenerujHaslo(): string {
  const znaki = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bufor = new Uint32Array(14);
  crypto.getRandomValues(bufor);
  return Array.from(bufor, (n) => znaki[n % znaki.length]).join("");
}

export async function listaKont(): Promise<KontoKlienta[]> {
  const p = pula();
  if (!p) return [];
  const wynik = await p.query<{
    id: string;
    email: string;
    display_name: string;
    phone: string | null;
    created_at: string;
    password_hash: string | null;
  }>(
    `select id, email, display_name, phone, created_at, password_hash
     from client_users
     order by created_at desc`,
  );
  return wynik.rows.map((r) => ({
    id: r.id,
    email: r.email,
    displayName: r.display_name,
    phone: r.phone,
    createdAt: r.created_at,
    maHaslo: Boolean(r.password_hash),
  }));
}

export async function zalozKonto(input: {
  displayName: string;
  email: string;
  haslo?: string;
}): Promise<WynikKonta> {
  const email = input.email.trim().toLowerCase();
  const imie = input.displayName.trim();
  if (!email || !imie) return { ok: false, blad: "Podaj imię i adres e-mail." };

  // Puste pole hasła = wygeneruj. Wpisane własne musi mieć min. 8 znaków,
  // dokładnie tak jak przy rejestracji (lib/auth/client-auth.ts) — inaczej
  // panel wpuszczałby hasła, których formularz logowania by nie przyjął.
  const haslo = input.haslo?.trim() ? input.haslo.trim() : wygenerujHaslo();
  if (haslo.length < 8) return { ok: false, blad: "Hasło musi mieć co najmniej 8 znaków." };

  const p = pula();
  if (!p) return { ok: false, blad: BRAK_BAZY };

  const istnieje = await p.query("select id from client_users where lower(email) = $1 limit 1", [email]);
  if (istnieje.rows.length > 0) {
    return { ok: false, blad: "Konto z tym adresem już istnieje. Użyj „Ustaw nowe hasło” przy tej osobie." };
  }

  const skrot = await bcrypt.hash(haslo, 10);
  await p.query(
    `insert into client_users (email, password_hash, display_name, consent_processing, consent_marketing)
     values ($1, $2, $3, true, false)`,
    [email, skrot, imie],
  );

  return { ok: true, haslo };
}

export async function ustawHaslo(id: string, haslo?: string): Promise<WynikKonta> {
  const nowe = haslo?.trim() ? haslo.trim() : wygenerujHaslo();
  if (nowe.length < 8) return { ok: false, blad: "Hasło musi mieć co najmniej 8 znaków." };

  const p = pula();
  if (!p) return { ok: false, blad: BRAK_BAZY };

  const skrot = await bcrypt.hash(nowe, 10);
  const wynik = await p.query("update client_users set password_hash = $1 where id = $2", [skrot, id]);
  if (wynik.rowCount === 0) return { ok: false, blad: "Nie ma takiego konta." };

  return { ok: true, haslo: nowe };
}

export async function usunKonto(id: string): Promise<void> {
  const p = pula();
  if (!p) throw new Error(BRAK_BAZY);
  await p.query("delete from client_users where id = $1", [id]);
}
