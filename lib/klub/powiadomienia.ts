import "server-only";
import webpush from "web-push";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";

/**
 * OŚ MODUŁU
 * Powiadomienia push do aplikacji Aga Club — „ktoś napisał na czacie".
 *
 * Prośba Michała, 5.09.2026: „aplikacja też będzie na Androida i dziś
 * będzie więcej użytkowników". Bez powiadomień czat umiera po dwóch
 * dniach: kobiety zaglądają, nic nowego nie widzą i przestają zaglądać.
 *
 * TRZY RZECZY, KTÓRE DECYDUJĄ, CZY TO POMOŻE, CZY ZASZKODZI
 *
 * 1. DŁAWIENIE. Powiadomienie przy każdej wiadomości to najkrótsza droga
 *    do tego, żeby wszystkie wyłączyły aplikację. Przy dziesięciu
 *    kobietach piszących rano to kilkanaście brzęknięć w kwadrans.
 *    Dlatego: najwyżej JEDNO powiadomienie na urządzenie na
 *    {@link ODSTEP_MINUT} minut. Reszta wiadomości i tak tam jest —
 *    powiadomienie ma zaprosić do rozmowy, a nie ją streszczać.
 *
 * 2. CISZA NOCNA. Między {@link CISZA_OD} a {@link CISZA_DO} czasu
 *    polskiego nie wysyłamy nic. Jedno powiadomienie o 23:40 kosztuje
 *    więcej zaufania, niż dziesięć w ciągu dnia jest w stanie zbudować.
 *
 * 3. SPRZĄTANIE MARTWYCH SUBSKRYPCJI. Gdy klientka odinstaluje aplikację
 *    albo wyczyści dane przeglądarki, jej adres push przestaje istnieć —
 *    Google i Apple odpowiadają wtedy 404 albo 410. Taki wiersz kasujemy
 *    od razu, bo inaczej po roku wysyłalibyśmy w większości donikąd.
 *
 * ZGODA JEST PER URZĄDZENIE, NIE PER KONTO. Ta sama kobieta może mieć
 * telefon i laptopa; każde ma własny adres push i własny wiersz. Dlatego
 * kluczem jest `endpoint`, a nie `user_id`.
 *
 * NA IPHONIE TO DZIAŁA WYŁĄCZNIE PO DODANIU APLIKACJI NA EKRAN GŁÓWNY —
 * Safari w zwykłej karcie nie ma prawa prosić o zgodę. Nie da się tego
 * obejść po naszej stronie; interfejs mówi o tym wprost zamiast udawać,
 * że przycisk nie zadziałał.
 */

/** Najwyżej jedno powiadomienie na urządzenie w tym czasie. */
const ODSTEP_MINUT = 30;

/** Godziny ciszy nocnej, czas polski. Od 22:00 do 6:59 nie wysyłamy nic. */
const CISZA_OD = 22;
const CISZA_DO = 7;

/** Ile znaków wiadomości wchodzi do treści powiadomienia. */
const DLUGOSC_ZAPOWIEDZI = 80;

function pula() {
  return isPostgresConfigured() ? getPostgresPool() : null;
}

/**
 * Klucz publiczny VAPID. Jest publiczny z natury — przeglądarka musi go
 * dostać, żeby założyć subskrypcję. Trzymamy go w środowisku, a nie
 * w kodzie, żeby na wszystkich środowiskach szedł w parze z prywatnym.
 */
export function kluczPubliczny(): string | null {
  return process.env.VAPID_PUBLIC_KEY?.trim() || null;
}

let skonfigurowane = false;

/**
 * Zwraca true, gdy wysyłka jest możliwa. Brak kluczy nie jest awarią —
 * na środowisku bez skonfigurowanych VAPID czat ma działać normalnie,
 * tyle że po cichu.
 */
function przygotujWysylke(): boolean {
  const publiczny = kluczPubliczny();
  const prywatny = process.env.VAPID_PRIVATE_KEY?.trim();
  if (!publiczny || !prywatny) return false;

  if (!skonfigurowane) {
    // `subject` musi być adresem mailto: albo URL-em — to kontakt do
    // właściciela serwisu, na wypadek gdyby dostawca push miał problem.
    webpush.setVapidDetails(
      process.env.VAPID_SUBJECT?.trim() || "https://agahorche.pl",
      publiczny,
      prywatny,
    );
    skonfigurowane = true;
  }
  return true;
}

export interface Subskrypcja {
  endpoint: string;
  p256dh: string;
  auth: string;
}

/** Zapisuje zgodę urządzenia. Powtórzenie tego samego adresu tylko odświeża wiersz. */
export async function zapiszSubskrypcje(userId: string, s: Subskrypcja): Promise<boolean> {
  const p = pula();
  if (!p) return false;

  await p.query(
    `insert into club_push_subscriptions (user_id, endpoint, p256dh, auth)
     values ($1, $2, $3, $4)
     on conflict (endpoint) do update
        set user_id = excluded.user_id,
            p256dh = excluded.p256dh,
            auth = excluded.auth,
            odswiezona_at = now()`,
    [userId, s.endpoint, s.p256dh, s.auth],
  );
  return true;
}

/**
 * Cofnięcie zgody. Kasujemy wiersz, a nie oznaczamy go jako wyłączony —
 * to jest zgoda na kontakt, więc po jej cofnięciu nie powinno po niej
 * zostać nic poza brakiem.
 */
export async function usunSubskrypcje(endpoint: string): Promise<void> {
  const p = pula();
  if (!p) return;
  await p.query("delete from club_push_subscriptions where endpoint = $1", [endpoint]);
}

/** Czy to urządzenie ma już zapisaną zgodę. */
export async function czyZapisana(endpoint: string): Promise<boolean> {
  const p = pula();
  if (!p) return false;
  const w = await p.query("select 1 from club_push_subscriptions where endpoint = $1", [endpoint]);
  return (w.rowCount ?? 0) > 0;
}

/** Godzina w Polsce, niezależnie od strefy kontenera (ten chodzi na UTC). */
function godzinaWPolsce(): number {
  const tekst = new Intl.DateTimeFormat("pl-PL", {
    timeZone: "Europe/Warsaw",
    hour: "2-digit",
    hour12: false,
  }).format(new Date());
  return Number.parseInt(tekst, 10);
}

function cisza(): boolean {
  const g = godzinaWPolsce();
  return g >= CISZA_OD || g < CISZA_DO;
}

function zapowiedz(tresc: string | null, zeZdjeciem: boolean): string {
  const czysta = (tresc ?? "").replace(/\s+/g, " ").trim();
  if (!czysta) return zeZdjeciem ? "Wrzuciła zdjęcie" : "Napisała coś nowego";
  if (czysta.length <= DLUGOSC_ZAPOWIEDZI) return czysta;
  return `${czysta.slice(0, DLUGOSC_ZAPOWIEDZI).trimEnd()}…`;
}

/**
 * Rozsyła powiadomienie o nowej wiadomości do wszystkich urządzeń poza
 * urządzeniami autorki — nikt nie chce dostać brzęknięcia o tym, co sam
 * przed chwilą napisał.
 *
 * Funkcja NIGDY nie rzuca wyjątkiem. Wywołuje ją ścieżka wysyłania
 * wiadomości i nieudane powiadomienie nie ma prawa zepsuć wysłania
 * wiadomości — wiadomość jest ważna, powiadomienie jest miłym dodatkiem.
 */
export async function powiadomONowejWiadomosci(input: {
  autorId: string;
  autorImie: string;
  tresc: string | null;
  zeZdjeciem: boolean;
}): Promise<number> {
  try {
    if (cisza()) return 0;
    if (!przygotujWysylke()) return 0;

    const p = pula();
    if (!p) return 0;

    /*
     * Warunek na `powiadomiona_at` jest CZĘŚCIĄ ZAPYTANIA, a nie filtrem
     * w kodzie — i od razu ustawiamy nowy czas. Dzięki temu dwie
     * wiadomości wysłane w tej samej sekundzie nie wyślą dwóch
     * powiadomień: druga po prostu nie znajdzie już żadnego wiersza.
     */
    const odbiorcy = await p.query<{ endpoint: string; p256dh: string; auth: string }>(
      `update club_push_subscriptions
          set powiadomiona_at = now()
        where user_id <> $1
          and (powiadomiona_at is null or powiadomiona_at < now() - ($2 || ' minutes')::interval)
      returning endpoint, p256dh, auth`,
      [input.autorId, String(ODSTEP_MINUT)],
    );

    const ilu = odbiorcy.rowCount ?? 0;
    if (ilu === 0) return 0;

    const ladunek = JSON.stringify({
      tytul: `${input.autorImie} pisze na czacie klubu`,
      tresc: zapowiedz(input.tresc, input.zeZdjeciem),
      adres: "/aga-club/czat",
    });

    const martwe: string[] = [];

    await Promise.all(
      odbiorcy.rows.map(async (w) => {
        try {
          await webpush.sendNotification(
            { endpoint: w.endpoint, keys: { p256dh: w.p256dh, auth: w.auth } },
            ladunek,
            { TTL: 60 * 60 * 4 },
          );
        } catch (blad) {
          /*
           * 404/410 znaczy „tego urządzenia już nie ma" — klientka
           * odinstalowała aplikację albo wyczyściła dane. Inne błędy
           * (chwilowa awaria dostawcy) zostawiamy w spokoju: kasowanie
           * przy każdym potknięciu sieci wyczyściłoby całą tabelę.
           */
          const kod = (blad as { statusCode?: number })?.statusCode;
          if (kod === 404 || kod === 410) martwe.push(w.endpoint);
        }
      }),
    );

    if (martwe.length > 0) {
      await p.query("delete from club_push_subscriptions where endpoint = any($1)", [martwe]);
    }

    return ilu - martwe.length;
  } catch {
    // Powiadomienia są dodatkiem. Cokolwiek się stanie, wiadomość
    // w czacie już jest i to jest to, co się liczy.
    return 0;
  }
}
