/**
 * OŚ PLIKU
 * Jedno miejsce, które odpowiada na pytanie „czy ta oferta obowiązuje
 * dzisiaj?". Wcześniej ta sama funkcja `withinWindow` żyła w czterech
 * kopiach — w repozytorium ofert, na /oferta, na /oferta/[id] i w sekcji
 * „Aktualna oferta" na stronie głównej — i wszystkie cztery miały ten sam
 * błąd.
 *
 * BŁĄD, KTÓRY TO NAPRAWIA (znaleziony 1.09.2026, zgłoszony przez Agę:
 * „zniknęła mi ze strony oferta").
 *
 * Kolumny `starts_at` i `ends_at` w tabeli `offers` są typu `date`, więc
 * Postgres oddaje je jako sam dzień: "2026-08-31". Stary warunek robił
 * `new Date(endsAt) < now`, a `new Date("2026-08-31")` to PÓŁNOC 31 sierpnia
 * czasu UTC. Efekt: oferta z datą „do 31 sierpnia" znikała ze strony
 * w nocy WCHODZĄC w 31 sierpnia — czyli cały ostatni dzień promocji, ten
 * najbardziej handlowo wartościowy, strona milczała. Analogicznie
 * `starts_at` działał poprawnie tylko przypadkiem.
 *
 * Data w panelu znaczy dla człowieka „ten dzień włącznie". Tak samo czyta ją
 * klientka, która widzi „oferta ważna do 31 sierpnia". Kod ma mówić to samo.
 *
 * DLACZEGO PORÓWNUJEMY NAPISY, A NIE OBIEKTY `Date`. Bo tu nie ma żadnej
 * godziny — jest dzień. Zamiana dnia na `Date` wciąga strefę czasową
 * (serwer stoi w UTC, Aga i jej klientki w Europe/Warsaw), a wtedy „do 31
 * sierpnia" oznacza coś innego o 23:00 niż o 01:00. Porównanie
 * "2026-08-31" <= "2026-09-01" jako tekstu jest dokładne i nudne, a format
 * ISO gwarantuje, że kolejność alfabetyczna to kolejność kalendarzowa.
 *
 * CZEGO TU NIE MA: żadnej logiki „przedłuż automatycznie". Oferta, która
 * się skończyła, ma zniknąć — to warunki handlowe, o dacie decyduje Aga
 * w /admin/oferta, nie kod.
 *
 * PUŁAPKA: `dzisiajWWarszawie()` liczy dzień w strefie Agi, nie serwera.
 * Między północą a 02:00 czasu polskiego to są dwie różne daty i bez tego
 * oferta kończyłaby się dwie godziny za późno.
 */

/** Dzisiejsza data (YYYY-MM-DD) w strefie, w której żyją Aga i jej klientki. */
export function dzisiajWWarszawie(now: Date = new Date()): string {
  // en-CA daje format ISO (2026-09-01) — jedyne locale, które robi to
  // bez ręcznego sklejania części z formatToParts.
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw" }).format(now);
}

/** Z "2026-08-31" albo "2026-08-31T00:00:00.000Z" robi "2026-08-31". */
function samDzien(value: string): string {
  return value.slice(0, 10);
}

/**
 * Czy oferta obowiązuje danego dnia. Obie daty są WŁĄCZNIE: oferta
 * „od 1 do 31 sierpnia" jest widoczna zarówno 1, jak i 31 sierpnia.
 * Brak daty = brak ograniczenia z tej strony.
 */
export function ofertaObowiazuje(
  startsAt: string | null | undefined,
  endsAt: string | null | undefined,
  now: Date = new Date(),
): boolean {
  const dzis = dzisiajWWarszawie(now);
  if (startsAt && samDzien(startsAt) > dzis) return false;
  if (endsAt && samDzien(endsAt) < dzis) return false;
  return true;
}
