import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo pomorskie — drugie z siedmiu ostatnich (wrzesień 2026).
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH.
 *
 * PO PIERWSZE: morze i sezon. Pas nadmorski od Łeby po Hel żyje przez
 * dwa i pół miesiąca, a przez resztę roku jest zupełnie innym miejscem.
 * To NIE jest ten sam sezon co w Karkonoszach — tam sezon jest podwójny,
 * zimowy i letni, a tutaj jeden i bardzo krótki. Kto zarabia w lipcu,
 * przez dziewięć miesięcy gotuje dla siebie.
 *
 * PO DRUGIE: Kaszuby. Środek województwa to region z żywym językiem
 * i własną, odrębną kuchnią. Obowiązuje ta sama zasada, którą przyjęliśmy
 * w Strzelcach Opolskich i w Cieszynie: PYTAM, ZAMIAST ZAKŁADAĆ. Nie
 * opowiadamy Kaszubom o Kaszubach.
 *
 * PO TRZECIE: Żuławy i Powiśle — depresja, ziemia uprawna odzyskana
 * z wody, gospodarstwa o skali podobnej do wielkopolskiej.
 *
 * TRÓJMIASTA W TREŚCIACH NIE ROBIMY tłem dla całego regionu. Bytów,
 * Człuchów i Miastko to trzy godziny drogi od Gdańska i zupełnie inne
 * życie.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoPomorskie(input: {
  name: string;
  slug: string;
  population: number;
  neighborSlugs?: string[];
  largerCitySlug?: string;
}): Location {
  const now = "2026-09-07T00:00:00.000Z";
  const maTresc = CITIES_WITH_CONTENT.includes(input.slug);
  return {
    locationId: `miasto-${input.slug}`,
    name: input.name,
    slug: input.slug,
    unitType: "miasto",
    wojewodztwoSlug: "pomorskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Pomorze",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: 30,
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
 * GDAŃSKA I GDYNI TU NIE MA — oba siedzą już w `miasta.ts`. Sopot ma
 * własny wiersz tutaj, bo w tamtej próbce go nie było.
 */
export const POMORSKIE_AGI: Location[] = [
  // ——— Trójmiasto i okolice ———
  miastoPomorskie({ name: "Słupsk", slug: "slupsk", population: 88_000, neighborSlugs: ["ustka", "kepice", "sianow", "lebork"] }),
  miastoPomorskie({ name: "Tczew", slug: "tczew", population: 59_000, neighborSlugs: ["pelplin", "gniew", "pruszcz-gdanski", "starogard-gdanski"] }),
  miastoPomorskie({ name: "Starogard Gdański", slug: "starogard-gdanski", population: 47_000, neighborSlugs: ["skarszewy", "skorcz", "pelplin", "tczew"] }),
  miastoPomorskie({ name: "Wejherowo", slug: "wejherowo", population: 49_000, neighborSlugs: ["reda", "rumia", "puck", "zukowo"], largerCitySlug: "gdynia" }),
  miastoPomorskie({ name: "Rumia", slug: "rumia", population: 50_000, neighborSlugs: ["reda", "wejherowo", "puck"], largerCitySlug: "gdynia" }),
  miastoPomorskie({ name: "Chojnice", slug: "chojnice", population: 39_000, neighborSlugs: ["czluchow", "brusy", "czersk", "debrzno"] }),
  miastoPomorskie({ name: "Malbork", slug: "malbork", population: 38_000, neighborSlugs: ["sztum", "nowy-staw", "dzierzgon", "tczew"] }),
  miastoPomorskie({ name: "Sopot", slug: "sopot", population: 33_000, neighborSlugs: ["zukowo", "pruszcz-gdanski"], largerCitySlug: "gdansk" }),
  miastoPomorskie({ name: "Pruszcz Gdański", slug: "pruszcz-gdanski", population: 32_000, neighborSlugs: ["tczew", "zukowo", "sopot"], largerCitySlug: "gdansk" }),
  miastoPomorskie({ name: "Lębork", slug: "lebork", population: 34_000, neighborSlugs: ["leba", "bytow", "wejherowo", "slupsk"] }),
  miastoPomorskie({ name: "Reda", slug: "reda", population: 27_000, neighborSlugs: ["rumia", "wejherowo", "puck"], largerCitySlug: "gdynia" }),
  miastoPomorskie({ name: "Kwidzyn", slug: "kwidzyn", population: 37_000, neighborSlugs: ["sztum", "prabuty", "gniew"] }),
  miastoPomorskie({ name: "Kościerzyna", slug: "koscierzyna", population: 23_000, neighborSlugs: ["kartuzy", "brusy", "skarszewy", "bytow"] }),
  miastoPomorskie({ name: "Kartuzy", slug: "kartuzy", population: 15_000, neighborSlugs: ["zukowo", "koscierzyna", "bytow"] }),
  miastoPomorskie({ name: "Żukowo", slug: "zukowo", population: 7_000, neighborSlugs: ["kartuzy", "pruszcz-gdanski", "wejherowo", "sopot"], largerCitySlug: "gdansk" }),

  // ——— Pas nadmorski ———
  miastoPomorskie({ name: "Puck", slug: "puck", population: 11_000, neighborSlugs: ["wladyslawowo", "reda", "wejherowo"] }),
  miastoPomorskie({ name: "Władysławowo", slug: "wladyslawowo", population: 10_000, neighborSlugs: ["puck", "jastarnia", "hel"] }),
  miastoPomorskie({ name: "Ustka", slug: "ustka", population: 15_000, neighborSlugs: ["slupsk", "leba"] }),
  miastoPomorskie({ name: "Łeba", slug: "leba", population: 3_500, neighborSlugs: ["lebork", "ustka"] }),
  miastoPomorskie({ name: "Jastarnia", slug: "jastarnia", population: 3_500, neighborSlugs: ["wladyslawowo", "hel"] }),
  miastoPomorskie({ name: "Hel", slug: "hel", population: 3_000, neighborSlugs: ["jastarnia", "wladyslawowo"] }),
  miastoPomorskie({ name: "Krynica Morska", slug: "krynica-morska", population: 1_300, neighborSlugs: ["nowy-dwor-gdanski", "sztutowo"] }),
  miastoPomorskie({ name: "Sztutowo", slug: "sztutowo", population: 2_000, neighborSlugs: ["krynica-morska", "nowy-dwor-gdanski"] }),

  // ——— Kaszuby i Bory Tucholskie ———
  miastoPomorskie({ name: "Bytów", slug: "bytow", population: 17_000, neighborSlugs: ["miastko", "koscierzyna", "kartuzy", "lebork"] }),
  miastoPomorskie({ name: "Człuchów", slug: "czluchow", population: 14_000, neighborSlugs: ["chojnice", "debrzno", "miastko"] }),
  miastoPomorskie({ name: "Miastko", slug: "miastko", population: 10_000, neighborSlugs: ["bytow", "czluchow", "kepice"] }),
  miastoPomorskie({ name: "Czersk", slug: "czersk", population: 10_000, neighborSlugs: ["chojnice", "brusy", "skorcz"] }),
  miastoPomorskie({ name: "Brusy", slug: "brusy", population: 5_000, neighborSlugs: ["chojnice", "czersk", "koscierzyna"] }),
  miastoPomorskie({ name: "Kępice", slug: "kepice", population: 3_600, neighborSlugs: ["slupsk", "miastko"] }),
  miastoPomorskie({ name: "Debrzno", slug: "debrzno", population: 4_500, neighborSlugs: ["czluchow", "chojnice"] }),
  miastoPomorskie({ name: "Skarszewy", slug: "skarszewy", population: 6_800, neighborSlugs: ["starogard-gdanski", "koscierzyna", "pruszcz-gdanski"] }),
  miastoPomorskie({ name: "Skórcz", slug: "skorcz", population: 3_400, neighborSlugs: ["starogard-gdanski", "czersk", "gniew"] }),
  miastoPomorskie({ name: "Czarna Woda", slug: "czarna-woda", population: 3_000, neighborSlugs: ["czersk", "starogard-gdanski"] }),

  // ——— Żuławy i Powiśle ———
  miastoPomorskie({ name: "Nowy Dwór Gdański", slug: "nowy-dwor-gdanski", population: 10_000, neighborSlugs: ["nowy-staw", "krynica-morska", "sztutowo", "malbork"] }),
  miastoPomorskie({ name: "Sztum", slug: "sztum", population: 10_000, neighborSlugs: ["malbork", "kwidzyn", "dzierzgon"] }),
  miastoPomorskie({ name: "Pelplin", slug: "pelplin", population: 8_000, neighborSlugs: ["tczew", "gniew", "starogard-gdanski"] }),
  miastoPomorskie({ name: "Gniew", slug: "gniew", population: 6_800, neighborSlugs: ["pelplin", "kwidzyn", "skorcz", "tczew"] }),
  miastoPomorskie({ name: "Prabuty", slug: "prabuty", population: 8_500, neighborSlugs: ["kwidzyn", "sztum"] }),
  miastoPomorskie({ name: "Dzierzgoń", slug: "dzierzgon", population: 5_300, neighborSlugs: ["sztum", "malbork"] }),
  miastoPomorskie({ name: "Nowy Staw", slug: "nowy-staw", population: 4_300, neighborSlugs: ["malbork", "nowy-dwor-gdanski"] }),
];
