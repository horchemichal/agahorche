import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo warmińsko-mazurskie — piąte z siedmiu ostatnich
 * (wrzesień 2026).
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH.
 *
 * PO PIERWSZE: to najrzadziej zaludnione województwo w Polsce, z bardzo
 * dużymi odległościami i słabą komunikacją publiczną. Obietnica częstych,
 * krótkich wizyt byłaby tu nieuczciwa i tego nie piszemy.
 *
 * PO DRUGIE: sezon mazurski. Giżycko, Mikołajki, Węgorzewo i Ryn żyją
 * przez dwa miesiące, ale inaczej niż nad morzem — tutaj gość przyjeżdża
 * na dłużej, często do własnego domku, i sam gotuje. To ważna różnica.
 *
 * PO TRZECIE: dwie odrębne krainy w jednym województwie. Warmia (Olsztyn,
 * Lidzbark Warmiński, Dobre Miasto, Orneta) i Mazury (Ełk, Giżycko, Pisz)
 * mają inną historię i inną kuchnię. Nie mieszamy tego i nie tłumaczymy
 * mieszkańcom, gdzie mieszkają — obowiązuje zasada z Cieszyna i Strzelec
 * Opolskich: pytamy, zamiast zakładać.
 *
 * PO CZWARTE: to również region po wymianie ludności po 1945 roku, z tą
 * samą konsekwencją co na Dolnym Śląsku i Pomorzu Zachodnim.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoWarminskoMazurskie(input: {
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
    wojewodztwoSlug: "warminsko-mazurskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Warmia i Mazury",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: 33,
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
 * OLSZTYNA TU NIE MA — siedzi już w `miasta.ts`.
 *
 * UWAGA NA DWA LIDZBARKI: `lidzbark` to Lidzbark w powiecie działdowskim,
 * a `lidzbark-warminski` to miasto powiatowe na Warmii. To dwie różne
 * miejscowości i nie wolno ich scalić.
 */
export const WARMINSKO_MAZURSKIE_AGI: Location[] = [
  // ——— Największe miasta ———
  miastoWarminskoMazurskie({ name: "Elbląg", slug: "elblag", population: 116_000, neighborSlugs: ["paslek", "tolkmicko", "mlynary", "braniewo"] }),
  miastoWarminskoMazurskie({ name: "Ełk", slug: "elk", population: 61_000, neighborSlugs: ["olecko", "goldap", "orzysz", "grajewo"] }),
  miastoWarminskoMazurskie({ name: "Ostróda", slug: "ostroda", population: 32_000, neighborSlugs: ["morag", "milomlyn", "olsztynek", "ilawa"] }),
  miastoWarminskoMazurskie({ name: "Iława", slug: "ilawa", population: 32_000, neighborSlugs: ["susz", "lubawa", "zalewo", "ostroda"] }),
  miastoWarminskoMazurskie({ name: "Giżycko", slug: "gizycko", population: 29_000, neighborSlugs: ["wegorzewo", "ryn", "mikolajki", "ketrzyn"] }),
  miastoWarminskoMazurskie({ name: "Szczytno", slug: "szczytno", population: 23_000, neighborSlugs: ["pasym", "biskupiec", "nidzica"] }),
  miastoWarminskoMazurskie({ name: "Kętrzyn", slug: "ketrzyn", population: 27_000, neighborSlugs: ["reszel", "korsze", "gizycko", "wegorzewo"] }),
  miastoWarminskoMazurskie({ name: "Bartoszyce", slug: "bartoszyce", population: 23_000, neighborSlugs: ["sepopol", "gorowo-ilaweckie", "bisztynek", "lidzbark-warminski"] }),
  miastoWarminskoMazurskie({ name: "Mrągowo", slug: "mragowo", population: 21_000, neighborSlugs: ["mikolajki", "ryn", "biskupiec", "reszel"] }),
  miastoWarminskoMazurskie({ name: "Działdowo", slug: "dzialdowo", population: 21_000, neighborSlugs: ["lidzbark", "nidzica", "mlawa"] }),
  miastoWarminskoMazurskie({ name: "Pisz", slug: "pisz", population: 19_000, neighborSlugs: ["orzysz", "ruciane-nida", "biala-piska"] }),
  miastoWarminskoMazurskie({ name: "Braniewo", slug: "braniewo", population: 17_000, neighborSlugs: ["frombork", "pieniezno", "elblag", "mlynary"] }),
  miastoWarminskoMazurskie({ name: "Lidzbark Warmiński", slug: "lidzbark-warminski", population: 16_000, neighborSlugs: ["dobre-miasto", "orneta", "bartoszyce", "bisztynek"] }),
  miastoWarminskoMazurskie({ name: "Morąg", slug: "morag", population: 14_000, neighborSlugs: ["ostroda", "paslek", "milomlyn", "milakowo"] }),
  miastoWarminskoMazurskie({ name: "Nidzica", slug: "nidzica", population: 13_000, neighborSlugs: ["dzialdowo", "szczytno", "olsztynek"] }),
  miastoWarminskoMazurskie({ name: "Węgorzewo", slug: "wegorzewo", population: 11_000, neighborSlugs: ["gizycko", "ketrzyn", "goldap"] }),
  miastoWarminskoMazurskie({ name: "Olecko", slug: "olecko", population: 16_000, neighborSlugs: ["elk", "goldap", "suwalki"] }),
  miastoWarminskoMazurskie({ name: "Pasłęk", slug: "paslek", population: 12_000, neighborSlugs: ["elblag", "morag", "mlynary"] }),
  miastoWarminskoMazurskie({ name: "Gołdap", slug: "goldap", population: 13_000, neighborSlugs: ["olecko", "wegorzewo", "elk"] }),
  miastoWarminskoMazurskie({ name: "Nowe Miasto Lubawskie", slug: "nowe-miasto-lubawskie", population: 11_000, neighborSlugs: ["lubawa", "ilawa", "brodnica"] }),
  miastoWarminskoMazurskie({ name: "Lubawa", slug: "lubawa", population: 10_000, neighborSlugs: ["nowe-miasto-lubawskie", "ilawa", "ostroda"] }),
  miastoWarminskoMazurskie({ name: "Dobre Miasto", slug: "dobre-miasto", population: 10_000, neighborSlugs: ["lidzbark-warminski", "jeziorany", "barczewo"] }),
  miastoWarminskoMazurskie({ name: "Olsztynek", slug: "olsztynek", population: 8_000, neighborSlugs: ["ostroda", "nidzica", "pasym"], largerCitySlug: "olsztyn" }),
  miastoWarminskoMazurskie({ name: "Barczewo", slug: "barczewo", population: 7_500, neighborSlugs: ["biskupiec", "dobre-miasto", "jeziorany"], largerCitySlug: "olsztyn" }),
  miastoWarminskoMazurskie({ name: "Biskupiec", slug: "biskupiec", population: 10_000, neighborSlugs: ["barczewo", "mragowo", "szczytno", "reszel"] }),
  miastoWarminskoMazurskie({ name: "Orneta", slug: "orneta", population: 8_500, neighborSlugs: ["lidzbark-warminski", "pieniezno", "milakowo"] }),
  miastoWarminskoMazurskie({ name: "Lidzbark", slug: "lidzbark", population: 8_000, neighborSlugs: ["dzialdowo", "gorzno"] }),
  miastoWarminskoMazurskie({ name: "Susz", slug: "susz", population: 5_500, neighborSlugs: ["ilawa", "zalewo", "prabuty"] }),
  miastoWarminskoMazurskie({ name: "Mikołajki", slug: "mikolajki", population: 3_800, neighborSlugs: ["mragowo", "ryn", "gizycko", "ruciane-nida"] }),
  miastoWarminskoMazurskie({ name: "Ryn", slug: "ryn", population: 3_000, neighborSlugs: ["gizycko", "mikolajki", "mragowo"] }),
  miastoWarminskoMazurskie({ name: "Ruciane-Nida", slug: "ruciane-nida", population: 4_400, neighborSlugs: ["pisz", "mikolajki"] }),
  miastoWarminskoMazurskie({ name: "Orzysz", slug: "orzysz", population: 5_600, neighborSlugs: ["pisz", "elk", "biala-piska"] }),
  miastoWarminskoMazurskie({ name: "Biała Piska", slug: "biala-piska", population: 4_000, neighborSlugs: ["pisz", "orzysz", "grajewo"] }),
  miastoWarminskoMazurskie({ name: "Reszel", slug: "reszel", population: 4_400, neighborSlugs: ["ketrzyn", "biskupiec", "bisztynek", "mragowo"] }),
  miastoWarminskoMazurskie({ name: "Korsze", slug: "korsze", population: 4_200, neighborSlugs: ["ketrzyn", "bartoszyce", "sepopol"] }),
  miastoWarminskoMazurskie({ name: "Bisztynek", slug: "bisztynek", population: 2_400, neighborSlugs: ["bartoszyce", "reszel", "lidzbark-warminski"] }),
  miastoWarminskoMazurskie({ name: "Sępopol", slug: "sepopol", population: 1_900, neighborSlugs: ["bartoszyce", "korsze"] }),
  miastoWarminskoMazurskie({ name: "Górowo Iławeckie", slug: "gorowo-ilaweckie", population: 4_000, neighborSlugs: ["bartoszyce", "pieniezno"] }),
  miastoWarminskoMazurskie({ name: "Pieniężno", slug: "pieniezno", population: 2_600, neighborSlugs: ["braniewo", "orneta", "gorowo-ilaweckie"] }),
  miastoWarminskoMazurskie({ name: "Frombork", slug: "frombork", population: 2_300, neighborSlugs: ["braniewo", "tolkmicko"] }),
  miastoWarminskoMazurskie({ name: "Tolkmicko", slug: "tolkmicko", population: 2_600, neighborSlugs: ["elblag", "frombork"] }),
  miastoWarminskoMazurskie({ name: "Młynary", slug: "mlynary", population: 1_800, neighborSlugs: ["elblag", "paslek", "braniewo"] }),
  miastoWarminskoMazurskie({ name: "Miłakowo", slug: "milakowo", population: 2_400, neighborSlugs: ["morag", "orneta"] }),
  miastoWarminskoMazurskie({ name: "Miłomłyn", slug: "milomlyn", population: 2_300, neighborSlugs: ["ostroda", "morag", "zalewo"] }),
  miastoWarminskoMazurskie({ name: "Zalewo", slug: "zalewo", population: 2_100, neighborSlugs: ["susz", "ilawa", "milomlyn"] }),
  miastoWarminskoMazurskie({ name: "Jeziorany", slug: "jeziorany", population: 3_100, neighborSlugs: ["dobre-miasto", "barczewo", "biskupiec"] }),
  miastoWarminskoMazurskie({ name: "Pasym", slug: "pasym", population: 2_500, neighborSlugs: ["szczytno", "olsztynek", "biskupiec"] }),
];
