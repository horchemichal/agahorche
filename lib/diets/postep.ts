import "server-only";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";

/**
 * OŚ MODUŁU
 * „Na którym dniu diety jestem" — zapamiętane na koncie, nie w przeglądarce.
 *
 * PO CO (prośba Michała, 4.09.2026: „jeśli ktoś w Aga Club kliknie w diecie
 * na kolejny dzień, to niech to będzie zapamiętane, tak że jak się zaloguje
 * kolejny raz albo za chwilę wróci do diety, to jest zapamiętane, że jest
 * np. na 5 dniu"). Do tej pory plan zawsze otwierał się na Dniu 1 —
 * klientka w środku tygodnia za każdym wejściem musiała sama sobie
 * przypomnieć, gdzie skończyła, i doklikać się z powrotem.
 *
 * DLACZEGO BAZA, A NIE localStorage — inaczej niż przy „moich dietach"
 * (lib/diets/moje-diety.ts, gdzie localStorage w zupełności wystarcza).
 * Michał napisał wprost: „jak się zaloguje kolejny raz". localStorage żyje
 * w jednej przeglądarce: dieta zaczęta na telefonie nie przeniosłaby się na
 * laptopa, a wyczyszczenie danych witryny kasowałoby postęp. To jest stan
 * KONTA, a nie ustawienie widoku, więc mieszka przy koncie.
 *
 * JEDEN WIERSZ NA PARĘ (KONTO, PLAN). Klientka może mieć w toku keto na
 * 14 dni i osobno dietę dla dzieci — każdy plan pamięta swój dzień. Klucz
 * główny na (user_id, plan_id) załatwia to bez dodatkowej logiki: zapis
 * jest zawsze `insert ... on conflict do update`.
 */

/** Ile dni ma najdłuższy plan w serwisie. Zabezpieczenie przed śmieciami w zapisie. */
const MAX_DZIEN = 14;

export async function pobierzDzienPlanu(userId: string, planId: string): Promise<number | null> {
  if (!isPostgresConfigured()) return null;
  const p = getPostgresPool();
  if (!p) return null;

  const wynik = await p.query<{ day_number: number }>(
    "select day_number from client_diet_progress where user_id = $1 and plan_id = $2 limit 1",
    [userId, planId],
  );

  return wynik.rows[0]?.day_number ?? null;
}

export async function zapiszDzienPlanu(userId: string, planId: string, dzien: number): Promise<boolean> {
  // Dzień przychodzi z przeglądarki, więc nie ufamy mu na słowo. Liczba
  // całkowita z zakresu planu albo nic — bez tego ktoś mógłby wpisać tu
  // dowolną wartość i strona otwierałaby się na nieistniejącym dniu.
  if (!Number.isInteger(dzien) || dzien < 1 || dzien > MAX_DZIEN) return false;
  if (!planId || planId.length > 100) return false;

  if (!isPostgresConfigured()) return false;
  const p = getPostgresPool();
  if (!p) return false;

  await p.query(
    `insert into client_diet_progress (user_id, plan_id, day_number, updated_at)
     values ($1, $2, $3, now())
     on conflict (user_id, plan_id)
     do update set day_number = excluded.day_number, updated_at = now()`,
    [userId, planId, dzien],
  );

  return true;
}
