import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo łódzkie — szósty region poza Małopolską (wrzesień 2026,
 * polecenie Michała: „teraz opolskie i łódzkie").
 *
 * DLACZEGO ŁÓDZKIE. Bo leży dokładnie na środku kraju i graniczy zarówno
 * ze śląskim, jak ze świętokrzyskim — czyli z dwoma regionami, dla których
 * strony już mamy. Radomsko jest bliżej Częstochowy niż Łodzi,
 * a Przedbórz i Kamieńsk leżą praktycznie na granicy świętokrzyskiego.
 * Wejście tutaj nie jest skokiem na drugi koniec Polski, tylko domknięciem
 * tego, co już obsługujemy od południa.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD PIĘCIU POPRZEDNICH. Ma jedną cechę,
 * której nie ma nigdzie indziej: TU PRACA NA ZMIANY JEST STARSZA
 * OD PRZEMYSŁU CIĘŻKIEGO i nigdy nie przestała istnieć — najpierw
 * przędzalnie i tkalnie, potem odzieżówka, dziś magazyny przy autostradach,
 * centra usług i zakłady przy węźle A1/A2. Zmieniło się miejsce, nie rytm.
 * To jest inna rozmowa niż na Śląsku, gdzie zmiana kojarzy się z kopalnią
 * i hutą, i inna niż na Podkarpaciu, gdzie rytm wyznacza rolnictwo.
 *
 * DRUGA RZECZ: skala. Łódzkie ma bardzo dużo miast średniej wielkości —
 * osiem powyżej czterdziestu tysięcy — i żadne z nich nie jest sypialnią
 * Łodzi. Piotrków, Bełchatów, Sieradz i Kutno mają własne rynki pracy
 * i własne historie. Strony nie mogą więc pisać o nich jako o okolicy
 * Łodzi, bo to byłaby nieprawda.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoLodzkie(input: {
  name: string;
  slug: string;
  population: number;
  neighborSlugs?: string[];
  largerCitySlug?: string;
}): Location {
  const now = "2026-09-06T00:00:00.000Z";
  const maTresc = CITIES_WITH_CONTENT.includes(input.slug);
  return {
    locationId: `miasto-${input.slug}`,
    name: input.name,
    slug: input.slug,
    unitType: "miasto",
    wojewodztwoSlug: "lodzkie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Polska Centralna",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Przed opolskim (26), za lubelskim (24). Rynek jest tu wyraźnie
     * większy niż w opolskiem — po Łodzi jest jeszcze osiem miast powyżej
     * czterdziestu tysięcy — ale odległość od Małopolski większa, więc
     * priorytet wypada pomiędzy.
     */
    seoPriority: 25,
    tier: "B",
    seo: maTresc
      ? { indexable: true, inSitemap: true, contentStatus: "published" as const }
      : { indexable: false, inSitemap: false, contentStatus: "draft" as const },
    urlPath: `/thermomix/${input.slug}`,
    createdAt: now,
    updatedAt: now,
  };
}

/*
 * ŁODZI TU NIE MA — szósty raz ta sama zasada.
 * Łódź siedzi w `miasta.ts` jako część ogólnopolskiej próbki Tier A i ma tam
 * dokładnie tę samą regułę indeksowania. Treść dla Łodzi piszemy normalnie,
 * tylko wiersz w danych ma gdzie indziej.
 */
export const LODZKIE_AGI: Location[] = [
  // ——— Miasta powyżej czterdziestu tysięcy ———
  miastoLodzkie({
    name: "Piotrków Trybunalski",
    slug: "piotrkow-trybunalski",
    population: 70_000,
    neighborSlugs: ["sulejow", "wolborz", "belchatow", "tomaszow-mazowiecki"],
  }),
  miastoLodzkie({
    name: "Pabianice",
    slug: "pabianice",
    population: 61_000,
    neighborSlugs: ["konstantynow-lodzki", "lask", "rzgow", "tuszyn"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Tomaszów Mazowiecki",
    slug: "tomaszow-mazowiecki",
    population: 60_000,
    neighborSlugs: ["opoczno", "piotrkow-trybunalski", "rawa-mazowiecka", "koluszki"],
  }),
  miastoLodzkie({
    name: "Bełchatów",
    slug: "belchatow",
    population: 54_000,
    neighborSlugs: ["kamiensk", "zelow", "piotrkow-trybunalski", "radomsko"],
  }),
  miastoLodzkie({
    name: "Zgierz",
    slug: "zgierz",
    population: 54_000,
    neighborSlugs: ["ozorkow", "aleksandrow-lodzki", "glowno", "strykow"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Skierniewice",
    slug: "skierniewice",
    population: 47_000,
    neighborSlugs: ["lowicz", "rawa-mazowiecka", "glowno", "biala-rawska"],
  }),
  miastoLodzkie({
    name: "Radomsko",
    slug: "radomsko",
    population: 44_000,
    neighborSlugs: ["kamiensk", "przedborz", "belchatow", "pajeczno"],
  }),
  miastoLodzkie({
    name: "Kutno",
    slug: "kutno",
    population: 42_000,
    neighborSlugs: ["krosniewice", "zychlin", "leczyca", "ozorkow"],
  }),
  miastoLodzkie({
    name: "Sieradz",
    slug: "sieradz",
    population: 40_000,
    neighborSlugs: ["zdunska-wola", "warta", "zloczew", "blaszki", "szadek"],
  }),
  miastoLodzkie({
    name: "Zduńska Wola",
    slug: "zdunska-wola",
    population: 40_000,
    neighborSlugs: ["sieradz", "lask", "szadek", "zelow"],
  }),

  // ——— Miasta powiatowe i mniejsze ośrodki ———
  miastoLodzkie({
    name: "Łowicz",
    slug: "lowicz",
    population: 27_000,
    neighborSlugs: ["skierniewice", "glowno", "zychlin", "kutno"],
  }),
  miastoLodzkie({
    name: "Aleksandrów Łódzki",
    slug: "aleksandrow-lodzki",
    population: 21_000,
    neighborSlugs: ["zgierz", "konstantynow-lodzki", "ozorkow"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Wieluń",
    slug: "wielun",
    population: 21_000,
    neighborSlugs: ["wieruszow", "dzialoszyn", "praszka", "zloczew"],
  }),
  miastoLodzkie({
    name: "Opoczno",
    slug: "opoczno",
    population: 20_000,
    neighborSlugs: ["drzewica", "tomaszow-mazowiecki", "przedborz"],
  }),
  miastoLodzkie({
    name: "Ozorków",
    slug: "ozorkow",
    population: 19_000,
    neighborSlugs: ["zgierz", "aleksandrow-lodzki", "leczyca", "kutno"],
  }),
  miastoLodzkie({
    name: "Konstantynów Łódzki",
    slug: "konstantynow-lodzki",
    population: 18_000,
    neighborSlugs: ["pabianice", "aleksandrow-lodzki", "zgierz"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Rawa Mazowiecka",
    slug: "rawa-mazowiecka",
    population: 17_000,
    neighborSlugs: ["skierniewice", "biala-rawska", "tomaszow-mazowiecki"],
  }),
  miastoLodzkie({
    name: "Łask",
    slug: "lask",
    population: 17_000,
    neighborSlugs: ["pabianice", "zdunska-wola", "zelow"],
  }),
  miastoLodzkie({
    name: "Łęczyca",
    slug: "leczyca",
    population: 14_000,
    neighborSlugs: ["ozorkow", "kutno", "poddebice"],
  }),
  miastoLodzkie({
    name: "Głowno",
    slug: "glowno",
    population: 14_000,
    neighborSlugs: ["zgierz", "strykow", "lowicz", "skierniewice"],
  }),
  miastoLodzkie({
    name: "Koluszki",
    slug: "koluszki",
    population: 13_000,
    neighborSlugs: ["brzeziny", "tomaszow-mazowiecki", "rzgow"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Brzeziny",
    slug: "brzeziny",
    population: 12_000,
    neighborSlugs: ["koluszki", "strykow", "rawa-mazowiecka"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Wieruszów",
    slug: "wieruszow",
    population: 8_500,
    neighborSlugs: ["wielun", "praszka"],
  }),
  miastoLodzkie({
    name: "Żychlin",
    slug: "zychlin",
    population: 8_000,
    neighborSlugs: ["kutno", "lowicz", "krosniewice"],
  }),
  miastoLodzkie({
    name: "Poddębice",
    slug: "poddebice",
    population: 7_500,
    neighborSlugs: ["leczyca", "uniejow", "warta", "szadek"],
  }),
  miastoLodzkie({
    name: "Zelów",
    slug: "zelow",
    population: 7_500,
    neighborSlugs: ["belchatow", "lask", "zdunska-wola"],
  }),
  miastoLodzkie({
    name: "Tuszyn",
    slug: "tuszyn",
    population: 7_300,
    neighborSlugs: ["rzgow", "pabianice", "piotrkow-trybunalski"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Pajęczno",
    slug: "pajeczno",
    population: 6_500,
    neighborSlugs: ["radomsko", "dzialoszyn", "belchatow"],
  }),
  miastoLodzkie({
    name: "Sulejów",
    slug: "sulejow",
    population: 6_300,
    neighborSlugs: ["piotrkow-trybunalski", "przedborz", "wolborz"],
  }),
  miastoLodzkie({
    name: "Działoszyn",
    slug: "dzialoszyn",
    population: 6_000,
    neighborSlugs: ["pajeczno", "wielun"],
  }),
  miastoLodzkie({
    name: "Krośniewice",
    slug: "krosniewice",
    population: 4_300,
    neighborSlugs: ["kutno", "zychlin"],
  }),
  miastoLodzkie({
    name: "Drzewica",
    slug: "drzewica",
    population: 3_800,
    neighborSlugs: ["opoczno", "tomaszow-mazowiecki"],
  }),
  miastoLodzkie({
    name: "Przedbórz",
    slug: "przedborz",
    population: 3_500,
    neighborSlugs: ["radomsko", "sulejow", "opoczno"],
  }),
  miastoLodzkie({
    name: "Stryków",
    slug: "strykow",
    population: 3_500,
    neighborSlugs: ["zgierz", "glowno", "brzeziny"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Rzgów",
    slug: "rzgow",
    population: 3_400,
    neighborSlugs: ["tuszyn", "pabianice", "koluszki"],
    largerCitySlug: "lodz",
  }),
  miastoLodzkie({
    name: "Warta",
    slug: "warta",
    population: 3_200,
    neighborSlugs: ["sieradz", "poddebice", "uniejow"],
  }),
  miastoLodzkie({
    name: "Złoczew",
    slug: "zloczew",
    population: 3_200,
    neighborSlugs: ["sieradz", "wielun", "blaszki"],
  }),
  miastoLodzkie({
    name: "Biała Rawska",
    slug: "biala-rawska",
    population: 3_100,
    neighborSlugs: ["rawa-mazowiecka", "skierniewice"],
  }),
  miastoLodzkie({
    name: "Uniejów",
    slug: "uniejow",
    population: 3_000,
    neighborSlugs: ["poddebice", "warta"],
  }),
  miastoLodzkie({
    name: "Kamieńsk",
    slug: "kamiensk",
    population: 2_800,
    neighborSlugs: ["belchatow", "radomsko", "piotrkow-trybunalski"],
  }),
  miastoLodzkie({
    name: "Wolbórz",
    slug: "wolborz",
    population: 2_300,
    neighborSlugs: ["piotrkow-trybunalski", "sulejow", "tomaszow-mazowiecki"],
  }),
  miastoLodzkie({
    name: "Błaszki",
    slug: "blaszki",
    population: 2_100,
    neighborSlugs: ["sieradz", "zloczew"],
  }),
  miastoLodzkie({
    name: "Szadek",
    slug: "szadek",
    population: 1_900,
    neighborSlugs: ["zdunska-wola", "poddebice", "sieradz"],
  }),
];
