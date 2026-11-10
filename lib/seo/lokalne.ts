import type { Offer } from "@/types/offer";
import { formatPln } from "@/lib/format";

/**
 * Wspolne kawalki tekstu dla stron miast (21.10.2026):
 * - blok „W skrocie" na gorze strony miasta (konkretna odpowiedz dla
 *   czytelnika i dla podsumowan AI Google, ktore cytuja zwiezle fakty),
 * - TEST TYTULOW na stronach, ktore stoja wysoko, a nie maja klikniec.
 *
 * Cena zawsze z aktywnej oferty w panelu, wiec nic tu sie nie zestarzeje.
 */

/** „w Wieliczce", ale „we Wroclawiu" / „we Wloclawku". */
export function wMiejscowniku(forma: string | null, zapas = ""): string {
  const f = forma ?? zapas;
  return /^[wWfF][^aąeęioóuyAĄEĘIOÓUY]/.test(f) ? `we ${f}` : `w ${f}`;
}

const MIESIACE = [
  "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
  "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień",
];

export function biezacyMiesiac(teraz = new Date()): string {
  const d = new Date(teraz.toLocaleString("en-US", { timeZone: "Europe/Warsaw" }));
  return `${MIESIACE[d.getMonth()]} ${d.getFullYear()}`;
}

function krotkaNazwaOferty(offer: Offer): string {
  return offer.productName.replace(/^Thermomix®?\s+/i, "");
}

/** Zdanie o cenie z aktywnej oferty albo null, gdy oferty/ceny nie ma. */
export function zdanieOCenie(offer: Offer | null): string | null {
  if (!offer?.priceCents) return null;
  const cena = formatPln(offer.priceCents);
  const rata =
    offer.installmentCents && offer.installmentMonths
      ? ` albo ${formatPln(offer.installmentCents)} miesięcznie przez ${offer.installmentMonths} mies.`
      : "";
  return `Aktualna oferta: ${krotkaNazwaOferty(offer)} za ${cena}${rata}.`;
}

/**
 * TEST TYTULOW — start 21.10.2026, ocena po 4 tygodniach (od 18.11.2026)
 * w Search Console: CTR i klikniecia tej grupy vs pozostale strony miast.
 * Wybor: strony z pozycja 4–8 i zerem (albo prawie zerem) klikniec w GSC
 * za lipiec–pazdziernik 2026. Wariant: swiezosc (miesiac) + konkret w opisie,
 * zamiast wspolnego dla ~940 stron „— prezentacja i cena".
 */
export const TEST_TYTULOW = new Set([
  "zakopane", "dobra", "laskowa", "oswiecim", "dobczyce",
  "kety", "libiaz", "bukowina-tatrzanska", "olkusz", "nowy-sacz",
]);

export function metaTestowe(
  nazwaMiasta: string | null,
  formaMiejscownika: string | null,
  offer: Offer | null,
): { title: string; description: string } {
  const nazwa = nazwaMiasta ?? "";
  const miesiac = biezacyMiesiac();
  // Bez „na": „oferta pazdziernik 2026" miesci sie z fraza „Przedstawiciel
  // Thermomix <miasto>" w ~60 znakach dla wiekszosci nazw.
  let title = `Przedstawiciel Thermomix ${nazwa} — oferta ${miesiac}`;
  if (title.length > 62) title = `Thermomix ${nazwa} — oferta ${miesiac}`;
  const cena = zdanieOCenie(offer);
  const description =
    `Bezpłatna prezentacja Thermomix TM7 u Ciebie w domu ${wMiejscowniku(formaMiejscownika, nazwa)}, bez dopłaty za dojazd. ` +
    (cena ? `${cena} ` : "") +
    `Zadzwoń: 517 185 691.`;
  return { title, description };
}

/**
 * 6.11.2026 (Michał: „zmień wszystkie strony lokalne, żebym był pierwszy”).
 *
 * Na frazę „przedstawiciel thermomix <miasto>” Google i Przegląd od AI
 * wymieniają przedstawicieli Z NAZWISKA — wygrywająca konkurentka ma tytuł
 * „Przedstawiciel Thermomix Niepołomice - Justyna Polak”. Dlatego tytuł,
 * H1 i pierwsze pytanie FAQ każdej strony lokalnej mówią wprost, kto
 * przyjeżdża: Aga Horche. Zastępuje test tytułów z 21.10 (zakończony
 * decyzją Michała 6.11).
 */
export function tytulLokalny(nazwa: string): string {
  const pelny = `Przedstawiciel Thermomix ${nazwa} — Aga Horche`;
  if (pelny.length <= 60) return pelny;
  const krotszy = `Thermomix ${nazwa} — Aga Horche`;
  return krotszy.length <= 60 ? krotszy : `Przedstawiciel Thermomix ${nazwa}`;
}

export function pytanieKtoPrzedstawicielem(
  nazwa: string,
  wMiejscu: string,
): { question: string; answer: string } {
  return {
    question: `Kto jest przedstawicielem Thermomix ${wMiejscu}?`,
    answer:
      `Prezentacje Thermomix ${wMiejscu} i okolicy prowadzi kilka osób współpracujących z Vorwerk. ` +
      `Ja — Aga Horche, oficjalny przedstawiciel Thermomix — przyjeżdżam do klientów ${wMiejscu} bez dopłaty za dojazd. ` +
      `Prezentację umówisz telefonicznie: 517 185 691.`,
  };
}
