import type { Location, LocationResolution } from "@/types/location";
import type { FaqItem } from "@/types/seo";
import { miejscownik, dopelniacz, miejscownikWojewodztwa } from "@/data/locations/odmiana";

/**
 * Generates the structural, honest parts of a location page's copy —
 * the parts that can be derived purely from real hierarchy data (spec §9:
 * unikalność treści musi wynikać z lokalnych informacji, struktury
 * administracyjnej, sąsiednich miejscowości, regionu — NOT from swapping
 * a city name into a template sentence about the city itself).
 *
 * This deliberately does NOT generate marketing copy, testimonials,
 * pricing, or claims about how many clients Aga has in a given city — §42
 * forbids inventing any of that. What it produces is scaffolding text a
 * human editor reviews and extends with real local knowledge before a page
 * is flipped to indexable.
 *
 * Odmiana przez przypadki (sierpień 2026): wcześniej szablon wstawiał nazwę
 * w mianowniku po przyimku, przez co powstawały zdania „Thermomix w Kraków”,
 * „w województwie małopolskie” i „Czy Aga dojeżdża do Kraków?”. Formy biorą
 * się teraz z `data/locations/odmiana.ts`; jeśli miejscowości tam nie ma,
 * `wMiejscu()` i `doMiejsca()` przełączają zdanie na konstrukcję bez
 * przyimka („na terenie: Nazwa”), zamiast produkować błąd gramatyczny.
 */

/** „w Krakowie” / „na terenie: Nowe Miasto” dla nazw spoza tabeli odmiany. */
function wMiejscu(location: Location): string {
  const forma = location.nameLocative ?? miejscownik(location.slug);
  return forma ? `w ${forma}` : `na terenie: ${location.name}`;
}

/** „do Krakowa” / „na teren: Nowe Miasto” dla nazw spoza tabeli odmiany. */
function doMiejsca(location: Location): string {
  const forma = dopelniacz(location.slug);
  return forma ? `do ${forma}` : `na teren: ${location.name}`;
}

/**
 * Województwo rządzi się inną gramatyką niż miasto („w województwie
 * małopolskim”, nie „w Małopolskie”), a jego sąsiedzi to inne województwa,
 * nie miejscowości. Bez tego rozgałęzienia strony regionów czytały się
 * „Thermomix w Małopolskie … sąsiednich miejscowości: Śląskie”.
 */
function introWojewodztwa(resolution: LocationResolution): string {
  const { location, neighbors } = resolution;
  const msc = miejscownikWojewodztwa(location.slug);
  const gdzie = msc ? `w województwie ${msc}` : `w regionie ${location.region ?? location.name}`;

  const sasiedzi =
    neighbors.length > 0
      ? ` Sąsiednie województwa: ${neighbors.map((n) => n.name.toLowerCase()).join(", ")}.`
      : "";

  return `Thermomix ${gdzie}. Agnieszka Horche organizuje bezpłatne prezentacje Thermomix TM7 ${gdzie} — stacjonarnie, u Ciebie w domu, w dogodnym dla Ciebie terminie. Najczęściej pracuje w Małopolsce, w okolicach Bochni, Brzeska i Krakowa.${sasiedzi}`;
}

export function buildLocationIntro(resolution: LocationResolution): string {
  const { location, wojewodztwo, neighbors } = resolution;

  if (location.unitType === "wojewodztwo") return introWojewodztwa(resolution);

  const wojewodztwoMsc = wojewodztwo ? miejscownikWojewodztwa(wojewodztwo.slug) : null;
  const regionPart = wojewodztwoMsc
    ? ` w województwie ${wojewodztwoMsc}`
    : location.region
      ? ` w regionie ${location.region}`
      : "";

  const neighborPart =
    neighbors.length > 0
      ? ` Aga dojeżdża również do sąsiednich miejscowości: ${neighbors
          .map((n) => dopelniacz(n.slug) ?? n.name)
          .join(", ")}.`
      : "";

  return `Thermomix ${location.name}${regionPart}. Agnieszka Horche organizuje bezpłatne prezentacje Thermomix TM7 ${wMiejscu(
    location,
  )} — stacjonarnie, w dogodnym dla Ciebie terminie.${neighborPart}`;
}

/**
 * A small set of genuinely location-relevant FAQ questions. Answers reuse
 * only structural facts; anything requiring a real commitment (exact
 * response time, specific days available) is marked TODO for Aga to fill
 * in rather than guessed.
 */
export function buildLocationFaq(resolution: LocationResolution): FaqItem[] {
  const { location } = resolution;
  const wojewodztwoMsc =
    location.unitType === "wojewodztwo" ? miejscownikWojewodztwa(location.slug) : null;
  const gdzie = wojewodztwoMsc ? `w województwie ${wojewodztwoMsc}` : wMiejscu(location);
  // Dla województwa świadomie zostaje miejscownik („dojeżdża … w województwie
  // małopolskim”) — dopełniacz wymagałby drugiej tabeli odmiany dla przymiotników
  // („do województwa małopolskiego”), a zdanie i tak jest poprawne.
  const dokad = wojewodztwoMsc ? gdzie : doMiejsca(location);

  return [
    {
      question: `Czy prezentacja Thermomix ${gdzie} jest bezpłatna?`,
      answer: `Tak — prezentacja Thermomix TM7 ${gdzie} jest zawsze bezpłatna i niezobowiązująca.`,
    },
    {
      question: `Czy Aga dojeżdża z prezentacją ${dokad}?`,
      answer: `Tak — Aga organizuje stacjonarne prezentacje Thermomix w całej Polsce, a najczęściej w Małopolsce, w tym ${gdzie}.`,
    },
    {
      question: "Ile trwa prezentacja Thermomix?",
      answer: "TODO: Aga uzupełni dokładny, rzeczywisty czas trwania prezentacji.",
    },
  ];
}
