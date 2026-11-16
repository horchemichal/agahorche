import "server-only";
import webpush from "web-push";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { przygotujWysylke } from "@/lib/klub/powiadomienia";
import type { LeadRecord } from "@/types/lead";

/**
 * OŚ MODUŁU
 * Powiadomienia push w aplikacji „Aga Panel” — „ktoś wysłał zgłoszenie”.
 *
 * Prośba Michała, 16.11.2026: „zrób mi powiadomienia push na aplikacji,
 * żeby były powiadomienia, jak ktoś pisze, tzn. leady”.
 *
 * CZYM TO SIĘ RÓŻNI OD CZATU KLUBU (lib/klub/powiadomienia.ts)
 *
 * 1. BEZ DŁAWIENIA. Na czacie jedno powiadomienie na pół godziny wystarcza,
 *    bo ma tylko zaprosić do rozmowy. Tutaj każde zgłoszenie to osobna
 *    osoba, która czeka na telefon — drugie zgłoszenie w tym samym
 *    kwadransie jest tak samo ważne jak pierwsze. Dlatego każde zgłoszenie
 *    wysyła własne powiadomienie i ma własny `tag` (nie podmieniają się).
 *
 * 2. BEZ CISZY NOCNEJ. Zgłoszenie wysłane o 23:10 ma być widoczne rano na
 *    ekranie telefonu, a nie zniknąć. Od wyciszania nocą jest tryb „Nie
 *    przeszkadzać” w telefonie — on powiadomienie zatrzyma i pokaże rano,
 *    my byśmy je po prostu zgubili.
 *
 * 3. OSOBNA TABELA. Zgody klientek (`club_push_subscriptions`) są przypięte
 *    do kont klientek; tu odbiorcą jest wyłącznie osoba zalogowana do
 *    panelu. Trzymanie tego razem oznaczałoby, że błąd w jednym zapytaniu
 *    wysyła dane zgłoszenia (imię, telefon) na telefon klientki.
 *
 * KLUCZE VAPID SĄ TE SAME co dla klubu — to jedna para na cały serwis
 * i nie wolno jej zmieniać (patrz .env.example).
 *
 * Tabelę moduł zakłada sam przy pierwszym użyciu (tak jak CRM), żeby
 * wdrożenie nie wymagało ręcznego SQL na produkcji.
 */

/** Ile znaków wiadomości z formularza wchodzi do treści powiadomienia. */
const DLUGOSC_ZAPOWIEDZI = 90;

function pula() {
  return isPostgresConfigured() ? getPostgresPool() : null;
}

let tabelaGotowa: Promise<void> | null = null;

function przygotujTabele(): Promise<void> {
  const p = pula();
  if (!p) return Promise.resolve();
  if (!tabelaGotowa) {
    tabelaGotowa = p
      .query(
        `create table if not exists admin_push_subscriptions (
           id uuid primary key default gen_random_uuid(),
           admin_email text not null,
           endpoint text not null unique,
           p256dh text not null,
           auth text not null,
           created_at timestamptz not null default now(),
           odswiezona_at timestamptz not null default now()
         )`,
      )
      .then(() => undefined)
      .catch((blad) => {
        // Następne wywołanie spróbuje jeszcze raz — chwilowy błąd bazy nie
        // może wyłączyć powiadomień do restartu kontenera.
        tabelaGotowa = null;
        throw blad;
      });
  }
  return tabelaGotowa;
}

export interface SubskrypcjaPanelu {
  endpoint: string;
  p256dh: string;
  auth: string;
}

/** Zapisuje zgodę urządzenia. Powtórzenie tego samego adresu tylko odświeża wiersz. */
export async function zapiszSubskrypcjePanelu(adminEmail: string, s: SubskrypcjaPanelu): Promise<boolean> {
  const p = pula();
  if (!p) return false;
  await przygotujTabele();

  await p.query(
    `insert into admin_push_subscriptions (admin_email, endpoint, p256dh, auth)
     values ($1, $2, $3, $4)
     on conflict (endpoint) do update
        set admin_email = excluded.admin_email,
            p256dh = excluded.p256dh,
            auth = excluded.auth,
            odswiezona_at = now()`,
    [adminEmail, s.endpoint, s.p256dh, s.auth],
  );
  return true;
}

/** Cofnięcie zgody — wiersz znika w całości. */
export async function usunSubskrypcjePanelu(endpoint: string): Promise<void> {
  const p = pula();
  if (!p) return;
  await przygotujTabele();
  await p.query("delete from admin_push_subscriptions where endpoint = $1", [endpoint]);
}

/** Czy to urządzenie ma już zapisaną zgodę. */
export async function czyZapisanaWPanelu(endpoint: string): Promise<boolean> {
  const p = pula();
  if (!p) return false;
  await przygotujTabele();
  const w = await p.query("select 1 from admin_push_subscriptions where endpoint = $1", [endpoint]);
  return (w.rowCount ?? 0) > 0;
}

interface Ladunek {
  tytul: string;
  tresc: string;
  adres: string;
  tag: string;
  ikona: string;
}

const IKONA_PANELU = "/ikony/panel-192.png";

/**
 * Wysyła jeden ładunek na podane urządzenia i kasuje te, których już nie
 * ma (404/410 — aplikacja odinstalowana albo dane przeglądarki wyczyszczone).
 * Zwraca liczbę urządzeń, do których dostawca push przyjął powiadomienie.
 */
async function rozeslij(
  odbiorcy: Array<{ endpoint: string; p256dh: string; auth: string }>,
  ladunek: Ladunek,
): Promise<number> {
  const p = pula();
  const tresc = JSON.stringify(ladunek);
  const martwe: string[] = [];
  let przyjete = 0;

  await Promise.all(
    odbiorcy.map(async (w) => {
      try {
        await webpush.sendNotification(
          { endpoint: w.endpoint, keys: { p256dh: w.p256dh, auth: w.auth } },
          tresc,
          // Doba: telefon wyłączony na noc ma dostać zgłoszenie rano.
          { TTL: 60 * 60 * 24, urgency: "high" },
        );
        przyjete += 1;
      } catch (blad) {
        const kod = (blad as { statusCode?: number })?.statusCode;
        if (kod === 404 || kod === 410) martwe.push(w.endpoint);
        else console.error("[panel/push] wysyłka nieudana", kod ?? blad);
      }
    }),
  );

  if (p && martwe.length > 0) {
    await p.query("delete from admin_push_subscriptions where endpoint = any($1)", [martwe]);
  }
  return przyjete;
}

function skroc(tekst: string | undefined): string {
  const czysty = (tekst ?? "").replace(/\s+/g, " ").trim();
  if (czysty.length <= DLUGOSC_ZAPOWIEDZI) return czysty;
  return `${czysty.slice(0, DLUGOSC_ZAPOWIEDZI).trimEnd()}…`;
}

/** Treść powiadomienia o zgłoszeniu — osobno, żeby dało się ją sprawdzić bez wysyłki. */
export function ladunekZgloszenia(lead: LeadRecord): Ladunek {
  const { values } = lead;
  const pierwszaLinia = [values.city, values.phone ? `tel. ${values.phone}` : ""].filter(Boolean).join(" · ");
  const wiadomosc = skroc(values.message);

  return {
    tytul: `Nowe zgłoszenie: ${skroc(values.name) || "bez imienia"}`,
    tresc: [pierwszaLinia, wiadomosc].filter(Boolean).join("\n") || "Otwórz, żeby zobaczyć szczegóły.",
    adres: `/admin/leady/${lead.id}`,
    // Własny tag na zgłoszenie: dwa zgłoszenia to dwa powiadomienia, a nie
    // jedno podmienione.
    tag: `zgloszenie-${lead.id}`,
    ikona: IKONA_PANELU,
  };
}

/**
 * Daje znać o nowym zgłoszeniu wszystkim urządzeniom z włączonymi
 * powiadomieniami panelu.
 *
 * Funkcja NIGDY nie rzuca wyjątkiem. Wywołuje ją /api/leads i nieudane
 * powiadomienie nie ma prawa zepsuć zapisania zgłoszenia.
 */
export async function powiadomONowymZgloszeniu(lead: LeadRecord): Promise<number> {
  try {
    if (!przygotujWysylke()) return 0;
    const p = pula();
    if (!p) return 0;
    await przygotujTabele();

    const odbiorcy = await p.query<{ endpoint: string; p256dh: string; auth: string }>(
      "select endpoint, p256dh, auth from admin_push_subscriptions",
    );
    if ((odbiorcy.rowCount ?? 0) === 0) return 0;

    return await rozeslij(odbiorcy.rows, ladunekZgloszenia(lead));
  } catch (blad) {
    console.error("[panel/push] powiadomienie o zgłoszeniu nieudane", blad);
    return 0;
  }
}

export type WynikTestu = "wyslane" | "brak-kluczy" | "brak-zgody" | "blad";

/**
 * Powiadomienie próbne na JEDNO urządzenie — to, z którego kliknięto
 * „Wyślij próbne”. Bez tego jedynym sposobem sprawdzenia, czy telefon
 * w ogóle brzęczy, byłoby wysłanie fałszywego zgłoszenia z formularza.
 */
export async function wyslijProbnePowiadomienie(endpoint: string): Promise<WynikTestu> {
  try {
    if (!przygotujWysylke()) return "brak-kluczy";
    const p = pula();
    if (!p) return "blad";
    await przygotujTabele();

    const w = await p.query<{ endpoint: string; p256dh: string; auth: string }>(
      "select endpoint, p256dh, auth from admin_push_subscriptions where endpoint = $1",
      [endpoint],
    );
    if ((w.rowCount ?? 0) === 0) return "brak-zgody";

    const przyjete = await rozeslij(w.rows, {
      tytul: "Powiadomienia działają",
      tresc: "Tak będzie wyglądać informacja o nowym zgłoszeniu ze strony.",
      adres: "/admin/leady",
      tag: "zgloszenie-proba",
      ikona: IKONA_PANELU,
    });
    return przyjete > 0 ? "wyslane" : "blad";
  } catch (blad) {
    console.error("[panel/push] powiadomienie próbne nieudane", blad);
    return "blad";
  }
}
