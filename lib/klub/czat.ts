import "server-only";
import path from "node:path";
import { unlink } from "node:fs/promises";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { MEDIA_STORAGE_DIR } from "@/lib/admin/media-upload";

/**
 * OŚ MODUŁU
 * Czat Aga Club — jeden wspólny pokój dla klubowiczek („co dziś gotujecie").
 *
 * Prośba Michała, 5.09.2026: „rób ten chat. Niech pomniejsza zdjęcia.
 * Automatycznie kasuje wiadomości po 2 tygodniach".
 *
 * DWA TYGODNIE TO CECHA, NIE OGRANICZENIE. Rozmowa o tym, co kto dziś
 * ugotował, po dwóch tygodniach nie jest już nikomu potrzebna, a każda
 * zapisana wiadomość to dane osobowe klientek Agi, które trzeba by chronić
 * i kiedyś usunąć na żądanie. Krótkie życie wiadomości załatwia oba
 * problemy naraz i sprawia, że czat wygląda na żywy, a nie na archiwum.
 *
 * SPRZĄTANIE IDZIE PRZY ODCZYCIE, ale najwyżej raz na godzinę na kontener
 * (patrz `ostatnieSprzatanie`). Osobny cron na serwerze byłby czystszy
 * architektonicznie, ale wymagałby konfiguracji poza repozytorium — a to
 * znaczy, że przy następnym przeniesieniu serwera ktoś o nim zapomni
 * i wiadomości zostaną na zawsze. Sprzątanie w kodzie jedzie razem
 * z aplikacją i nie da się go zgubić.
 *
 * RAZEM Z WIADOMOŚCIĄ ZNIKA PLIK ZDJĘCIA. Bez tego wolumen z mediami
 * rósłby w nieskończoność — wiersze by znikały, a zdjęcia zostawały na
 * dysku bez niczego, co by o nich pamiętało.
 */

/** Po tylu dniach wiadomość znika razem ze zdjęciem. */
export const DNI_ZYCIA_WIADOMOSCI = 14;

/** Ile wiadomości pokazujemy naraz. */
const LIMIT_WIADOMOSCI = 200;

/** Najdłuższa wiadomość. Czat, nie blog. */
export const MAX_ZNAKOW = 1000;

/**
 * Zapora na zalew wiadomości: tyle sztuk w ciągu minuty z jednego konta.
 * Nie chodzi o złośliwość, tylko o zaciętą klawiaturę i podwójne
 * kliknięcia — próg jest wysoki jak na zwykłą rozmowę.
 */
const MAX_NA_MINUTE = 10;

export interface WiadomoscCzatu {
  id: string;
  imie: string;
  /** Czy to wiadomość osoby, która właśnie patrzy — do ustawienia dymka po prawej. */
  moja: boolean;
  tresc: string | null;
  obrazUrl: string | null;
  kiedy: string;
}

export type WynikWyslania = { ok: true } | { ok: false; blad: string };

function pula() {
  if (!isPostgresConfigured()) return null;
  return getPostgresPool();
}

/*
 * Znacznik ostatniego sprzątania — trzymany w pamięci procesu, nie w bazie.
 * Świadomie: to tylko zapobieganie zbyt częstemu DELETE, a nie stan, który
 * musi przetrwać restart. Po restarcie kontenera sprzątanie po prostu
 * wykona się raz od razu i tyle.
 */
let ostatnieSprzatanie = 0;
const ODSTEP_SPRZATANIA_MS = 60 * 60 * 1000;

/**
 * Kasuje wiadomości starsze niż {@link DNI_ZYCIA_WIADOMOSCI} razem z ich
 * zdjęciami. Bezpieczne do wywołania w kółko — sam się ogranicza.
 */
export async function posprzatajStareWiadomosci(wymus = false): Promise<number> {
  const teraz = Date.now();
  if (!wymus && teraz - ostatnieSprzatanie < ODSTEP_SPRZATANIA_MS) return 0;
  ostatnieSprzatanie = teraz;

  const p = pula();
  if (!p) return 0;

  /*
   * `returning obraz_plik` — kasujemy wiersz i w tej samej operacji
   * dostajemy nazwy plików do usunięcia z dysku. Gdyby to były dwa
   * zapytania (najpierw select, potem delete), między nimi mogłoby się
   * coś zmienić i zostałyby pliki-sieroty.
   */
  const wynik = await p.query<{ obraz_plik: string | null }>(
    `delete from club_chat_messages
      where created_at < now() - ($1 || ' days')::interval
      returning obraz_plik`,
    [String(DNI_ZYCIA_WIADOMOSCI)],
  );

  for (const wiersz of wynik.rows) {
    if (!wiersz.obraz_plik) continue;
    try {
      await unlink(path.join(MEDIA_STORAGE_DIR, wiersz.obraz_plik));
    } catch {
      // Pliku już nie ma albo katalog jest tylko do odczytu — sprzątanie
      // dysku jest miłym dodatkiem, nie warunkiem poprawności.
    }
  }

  return wynik.rowCount ?? 0;
}

export async function pobierzWiadomosci(idPatrzacego: string): Promise<WiadomoscCzatu[]> {
  const p = pula();
  if (!p) return [];

  // Przy okazji odczytu — patrz opis modułu.
  await posprzatajStareWiadomosci().catch(() => undefined);

  const wynik = await p.query<{
    id: string;
    display_name: string;
    user_id: string;
    tresc: string | null;
    obraz_url: string | null;
    created_at: string;
    usunieta_at: string | null;
  }>(
    `select m.id, u.display_name, m.user_id, m.tresc, m.obraz_url, m.created_at, m.usunieta_at
       from club_chat_messages m
       join client_users u on u.id = m.user_id
      order by m.created_at desc
      limit $1`,
    [LIMIT_WIADOMOSCI],
  );

  return wynik.rows.reverse().map((w) => {
    // najstarsze u góry, jak w każdej rozmowie
    const usunieta = Boolean(w.usunieta_at);

    return {
      id: w.id,
      // Samo imię, bez nazwiska — czat widzą wszystkie klubowiczki,
      // a nazwisko nie jest im do niczego potrzebne.
      imie: w.display_name.split(" ")[0],
      moja: w.user_id === idPatrzacego,
      /*
       * Usunięta wiadomość zostaje w rozmowie jako ślad, ale bez treści
       * i bez zdjęcia. Gdyby znikała bez śladu, rozmowa zaczynałaby się
       * w połowie zdania i nikt by nie wiedział dlaczego.
       */
      tresc: usunieta ? "Wiadomość usunięta" : w.tresc,
      obrazUrl: usunieta ? null : w.obraz_url,
      kiedy: naISO(w.created_at),
    };
  });
}

/**
 * Postgres oddaje znacznik czasu jako „2026-09-05 08:00:05.013+00" —
 * ze spacją zamiast „T". Chrome to zrozumie, ale Safari na iPhonie
 * potrafi zwrócić Invalid Date i pod wiadomością wyświetliłoby się
 * „Invalid Date" zamiast godziny. Klubowiczki siedzą na telefonach,
 * więc zamieniamy to na ISO po stronie serwera, raz.
 */
function naISO(znacznik: string): string {
  const data = new Date(znacznik);
  return Number.isNaN(data.getTime()) ? znacznik : data.toISOString();
}

export async function wyslijWiadomosc(input: {
  userId: string;
  tresc: string;
  obrazUrl?: string;
  obrazPlik?: string;
}): Promise<WynikWyslania> {
  const tresc = input.tresc.trim();

  if (!tresc && !input.obrazPlik) {
    return { ok: false, blad: "Napisz coś albo dodaj zdjęcie." };
  }
  if (tresc.length > MAX_ZNAKOW) {
    return { ok: false, blad: `Wiadomość może mieć najwyżej ${MAX_ZNAKOW} znaków.` };
  }

  const p = pula();
  if (!p) return { ok: false, blad: "Czat jest chwilowo niedostępny. Spróbuj za moment." };

  const ostatnie = await p.query<{ ile: string }>(
    "select count(*)::text as ile from club_chat_messages where user_id = $1 and created_at > now() - interval '1 minute'",
    [input.userId],
  );
  if (Number(ostatnie.rows[0]?.ile ?? 0) >= MAX_NA_MINUTE) {
    return { ok: false, blad: "Chwilkę — wysyłasz wiadomości szybciej, niż ktokolwiek zdąży przeczytać." };
  }

  await p.query(
    `insert into club_chat_messages (user_id, tresc, obraz_url, obraz_plik)
     values ($1, $2, $3, $4)`,
    [input.userId, tresc || null, input.obrazUrl ?? null, input.obrazPlik ?? null],
  );

  return { ok: true };
}

/**
 * Usunięcie wiadomości. `kto` trafia do `usunieta_przez` — dzięki temu
 * widać później, czy skasowała ją autorka, czy Aga.
 *
 * Gdy `wlascicielId` jest podany, wolno usunąć wyłącznie własną wiadomość
 * (tak działa czat dla klubowiczek). Bez niego — moderacja z panelu Agi,
 * która może usunąć każdą.
 */
export async function usunWiadomosc(id: string, kto: string, wlascicielId?: string): Promise<boolean> {
  const p = pula();
  if (!p) return false;

  const warunek = wlascicielId ? "and m.user_id = $3" : "";
  const parametry: string[] = wlascicielId ? [id, kto, wlascicielId] : [id, kto];

  /*
   * Nazwę pliku wyciągamy CTE (`stara`), bo `returning` po `set ... = null`
   * oddałoby już nową wartość. Zdjęcie kasujemy z dysku OD RAZU, a nie
   * dopiero przy czternastodniowym sprzątaniu. To jest cały sens
   * moderacji: jeśli Aga usuwa fotkę, bo nie powinno jej tu być, to
   * plik nie może jeszcze przez dwa tygodnie wisieć pod swoim adresem
   * i być otwierany przez każdego, kto ten adres zna. Sama wiadomość
   * zostaje jako ślad „Wiadomość usunięta" — znika treść i obraz, nie
   * fakt, że coś tu było.
   */
  const wynik = await p.query<{ obraz_plik: string | null }>(
    `with stara as (
       select obraz_plik from club_chat_messages where id = $1
     )
     update club_chat_messages m
        set usunieta_at = now(), usunieta_przez = $2, obraz_url = null, obraz_plik = null
       from stara
      where m.id = $1 and m.usunieta_at is null ${warunek}
     returning stara.obraz_plik`,
    parametry,
  );

  const plik = wynik.rows[0]?.obraz_plik;
  if (plik) {
    try {
      await unlink(path.join(MEDIA_STORAGE_DIR, plik));
    } catch {
      // Plik mógł już zniknąć. Wiadomość i tak jest oznaczona jako
      // usunięta, więc nikt go nie zobaczy w czacie.
    }
  }

  return (wynik.rowCount ?? 0) > 0;
}

/** Lista dla panelu Agi — z pełnym imieniem i informacją o moderacji. */
export interface WiadomoscDlaPanelu {
  id: string;
  autor: string;
  email: string;
  tresc: string | null;
  obrazUrl: string | null;
  kiedy: string;
  usunieta: boolean;
  usunietaPrzez: string | null;
}

export async function wiadomosciDlaPanelu(): Promise<WiadomoscDlaPanelu[]> {
  const p = pula();
  if (!p) return [];

  const wynik = await p.query<{
    id: string;
    display_name: string;
    email: string;
    tresc: string | null;
    obraz_url: string | null;
    created_at: string;
    usunieta_at: string | null;
    usunieta_przez: string | null;
  }>(
    `select m.id, u.display_name, u.email, m.tresc, m.obraz_url, m.created_at,
            m.usunieta_at, m.usunieta_przez
       from club_chat_messages m
       join client_users u on u.id = m.user_id
      order by m.created_at desc
      limit $1`,
    [LIMIT_WIADOMOSCI],
  );

  return wynik.rows.map((w) => ({
    id: w.id,
    autor: w.display_name,
    email: w.email,
    tresc: w.tresc,
    obrazUrl: w.obraz_url,
    kiedy: naISO(w.created_at),
    usunieta: Boolean(w.usunieta_at),
    usunietaPrzez: w.usunieta_przez,
  }));
}
