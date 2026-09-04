import "server-only";
import { createHash, randomBytes } from "node:crypto";
import bcrypt from "bcryptjs";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { wyslijMailResetuHasla } from "@/lib/email/client";
import { SITE } from "@/lib/utils";

/**
 * OŚ MODUŁU
 * Samodzielny reset hasła w Strefie Klienta — klientka podaje e-mail,
 * dostaje link, ustawia nowe hasło.
 *
 * DLACZEGO DOPIERO TERAZ (prośba Michała, 4.09.2026: „zrób reset hasła dla
 * klienta jeśli ma konto, bo już pocztę skonfigurowałem"). Do dziś reset
 * przez e-mail był niemożliwy nie z braku kodu, tylko dlatego, że serwis
 * nie mógł wysłać ani jednego maila — skrzynka Interii odrzucała logowanie
 * z zewnątrz (błąd 535 przy każdym zgłoszeniu). Zamiast martwego linku
 * „nie pamiętam hasła" strona mówiła wprost: napisz do Agi, ustawi Ci nowe.
 * Teraz poczta działa, więc uczciwa ścieżka to ta samoobsługowa.
 *
 * BEZPIECZEŃSTWO — trzy rzeczy, które łatwo zrobić źle:
 *
 * 1. NIE MÓWIMY, CZY KONTO ISTNIEJE. Michał napisał: „jeśli maila nie ma
 *    w bazie to reset nie działa" — i tak jest, mail po prostu nie wychodzi.
 *    Ale KOMUNIKAT dla użytkownika jest ten sam w obu przypadkach. Gdyby
 *    formularz odpowiadał „nie ma takiego konta", stałby się darmową
 *    wyszukiwarką: ktoś obcy wpisywałby adresy i dowiadywał się, które
 *    klientki mają konto u Agi. To dane osobowe jej klientek.
 *
 * 2. W BAZIE LEŻY SKRÓT TOKENA, NIE TOKEN. Gdyby kiedyś ktoś zobaczył
 *    zawartość tabeli (kopia zapasowa, wyciek), mając same skróty nie
 *    ustawi nikomu hasła. Dokładnie ten sam powód, dla którego hasła są
 *    trzymane jako bcrypt, a nie tekstem.
 *
 * 3. TOKEN DZIAŁA RAZ I WYGASA PO GODZINIE. Link wędruje mailem, a maile
 *    zostają w skrzynkach, w historii przeglądarki i w logach serwerów
 *    pocztowych. Godzina wystarczy, żeby kliknąć, i jest za krótka, żeby
 *    link znaleziony za pół roku do czegokolwiek się przydał.
 *
 * Wysłanie nowego linku unieważnia poprzednie — inaczej klientka, która
 * kliknęła „wyślij ponownie" trzy razy, miałaby trzy czynne klucze do
 * swojego konta krążące po poczcie.
 */

/** Ile żyje link. Patrz punkt 3 w opisie modułu. */
const WAZNOSC_MINUT = 60;

/**
 * Ten sam tekst niezależnie od tego, czy konto istnieje. Patrz punkt 1.
 * Mówi, co się stanie, jeśli konto JEST — bez potwierdzania, że jest.
 */
export const KOMUNIKAT_WYSLANO =
  "Jeśli na ten adres jest założone konto w Strefie Klienta, wysłaliśmy na niego link do ustawienia nowego hasła. Sprawdź skrzynkę — także folder ze spamem. Link działa przez godzinę.";

export type WynikResetu = { ok: true } | { ok: false; blad: string };

function skrot(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function pula() {
  if (!isPostgresConfigured()) return null;
  return getPostgresPool();
}

/**
 * Krok 1 — klientka podaje e-mail.
 *
 * Zwraca `ok` również wtedy, gdy takiego konta nie ma. To nie jest
 * przeoczenie, tylko punkt 1 z opisu modułu.
 */
export async function poprosOResetHasla(email: string): Promise<WynikResetu> {
  const adres = email.trim().toLowerCase();
  if (!adres || !adres.includes("@")) {
    return { ok: false, blad: "Podaj poprawny adres e-mail." };
  }

  const p = pula();
  if (!p) return { ok: false, blad: "Ta funkcja jest chwilowo niedostępna. Spróbuj za moment." };

  const konto = await p.query<{ id: string; email: string; display_name: string }>(
    "select id, email, display_name from client_users where lower(email) = $1 limit 1",
    [adres],
  );

  const uzytkownik = konto.rows[0];
  if (!uzytkownik) return { ok: true }; // cicho, ale zwyczajnie — patrz punkt 1

  // Poprzednie, jeszcze niewykorzystane linki przestają działać.
  await p.query(
    "update client_password_resets set used_at = now() where user_id = $1 and used_at is null",
    [uzytkownik.id],
  );

  const token = randomBytes(32).toString("hex");
  await p.query(
    `insert into client_password_resets (user_id, token_hash, expires_at)
     values ($1, $2, now() + ($3 || ' minutes')::interval)`,
    [uzytkownik.id, skrot(token), String(WAZNOSC_MINUT)],
  );

  const link = `${SITE.url.replace(/\/$/, "")}/strefa-klienta/reset-hasla/${token}`;

  /*
   * Błąd wysyłki NIE leci do użytkownika. Gdyby leciał, formularz znowu
   * zdradzałby istnienie konta: „nie udało się wysłać" pada tylko wtedy,
   * gdy adres był w bazie. Zapisujemy więc do logu kontenera (tam Michał
   * i tak zagląda) i pokazujemy ten sam komunikat co zawsze.
   */
  try {
    await wyslijMailResetuHasla(uzytkownik.email, uzytkownik.display_name, link, WAZNOSC_MINUT);
  } catch (blad) {
    console.error("[reset-hasla] nie udalo sie wyslac maila:", blad);
  }

  return { ok: true };
}

export interface KontoDoResetu {
  id: string;
  email: string;
  displayName: string;
}

/**
 * Krok 2 — sprawdzenie linku, zanim pokażemy formularz nowego hasła.
 * Zwraca `null` dla tokena nieznanego, wygasłego albo już użytego.
 */
export async function kontoZTokenu(token: string): Promise<KontoDoResetu | null> {
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;

  const p = pula();
  if (!p) return null;

  const wynik = await p.query<{ id: string; email: string; display_name: string }>(
    `select u.id, u.email, u.display_name
       from client_password_resets r
       join client_users u on u.id = r.user_id
      where r.token_hash = $1
        and r.used_at is null
        and r.expires_at > now()
      limit 1`,
    [skrot(token)],
  );

  const w = wynik.rows[0];
  return w ? { id: w.id, email: w.email, displayName: w.display_name } : null;
}

/**
 * Krok 3 — zapis nowego hasła.
 *
 * Token jest sprawdzany PONOWNIE, w jednej transakcji ze zmianą hasła.
 * Sprawdzenie z kroku 2 działo się przy wyświetlaniu formularza i mogło
 * być kilka minut wcześniej — w międzyczasie link mógł wygasnąć albo
 * zostać użyty w innej karcie.
 */
export async function ustawNoweHasloZTokenu(token: string, haslo: string, powtorzone: string): Promise<WynikResetu> {
  if (haslo !== powtorzone) return { ok: false, blad: "Hasła nie są takie same." };
  // Ten sam próg co przy rejestracji (lib/auth/client-auth.ts) i przy
  // ustawianiu hasła z panelu (lib/admin/konta-klientow.ts).
  if (haslo.length < 8) return { ok: false, blad: "Hasło musi mieć co najmniej 8 znaków." };
  if (!/^[a-f0-9]{64}$/.test(token)) return { ok: false, blad: "Ten link jest nieprawidłowy." };

  const p = pula();
  if (!p) return { ok: false, blad: "Ta funkcja jest chwilowo niedostępna. Spróbuj za moment." };

  const polaczenie = await p.connect();
  try {
    await polaczenie.query("begin");

    /*
     * `for update` blokuje wiersz do końca transakcji. Bez tego dwa
     * równoczesne wysłania formularza (dwie karty, dwuklik) mogłyby oba
     * przejść walidację, zanim którekolwiek oznaczy token jako zużyty.
     */
    const wynik = await polaczenie.query<{ id: string; user_id: string }>(
      `select id, user_id
         from client_password_resets
        where token_hash = $1 and used_at is null and expires_at > now()
        for update`,
      [skrot(token)],
    );

    const wiersz = wynik.rows[0];
    if (!wiersz) {
      await polaczenie.query("rollback");
      return {
        ok: false,
        blad: "Ten link wygasł albo został już użyty. Poproś o nowy na stronie logowania.",
      };
    }

    await polaczenie.query("update client_users set password_hash = $1 where id = $2", [
      await bcrypt.hash(haslo, 10),
      wiersz.user_id,
    ]);
    await polaczenie.query("update client_password_resets set used_at = now() where id = $1", [wiersz.id]);

    await polaczenie.query("commit");
    return { ok: true };
  } catch (blad) {
    await polaczenie.query("rollback").catch(() => undefined);
    throw blad;
  } finally {
    polaczenie.release();
  }
}
