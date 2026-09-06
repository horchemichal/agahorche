import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo podkarpackie — drugi region poza Małopolską (wrzesień 2026,
 * decyzja Michała: „robimy strony lokalne dla śląskiego, podkarpackiego,
 * świętokrzyskiego i lubelskiego, wszystkie miasta"; Aga potwierdziła, że
 * dojeżdża z prezentacją do wszystkich czterech).
 *
 * DLACZEGO PODKARPACKIE JAKO DRUGIE. Bo graniczy z Małopolską i to nie jest
 * granica na papierze: Dębica leży bliżej Tarnowa niż Tarnów Krakowa,
 * a Jasło i Gorlice dzieli pół godziny. Aga ma już napisane strony dla
 * powiatu gorlickiego i dąbrowskiego, więc wjazd na Podkarpacie jest
 * naturalnym przedłużeniem tras, którymi i tak jeździ — a nie skokiem
 * na drugi koniec Polski.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD ŚLĄSKIEGO — i dlaczego strony muszą
 * wyglądać inaczej. Śląskie to konurbacja: kilkanaście miast po sto tysięcy
 * w promieniu trzydziestu kilometrów, jedna trasa obsługuje kilka spotkań.
 * Podkarpackie jest odwrotnością: poza Rzeszowem nie ma tu ani jednego
 * miasta powyżej sześćdziesięciu tysięcy, a odległości są duże i realne.
 * Z Sanoka do Stalowej Woli jedzie się dłużej niż z Katowic do Krakowa.
 * Strony miast podkarpackich nie mogą więc obiecywać „wpadnę wieczorem" —
 * muszą uczciwie mówić o terminach umawianych z wyprzedzeniem.
 *
 * ZASADA POZOSTAJE TA SAMA CO PRZY MAŁOPOLSCE I ŚLĄSKU: strona miasta idzie
 * do Google dopiero wtedy, gdy ma własną, napisaną treść lokalną. Flaga
 * `indexable` nie jest wpisywana ręcznie — wynika z tego, czy dla sluga
 * istnieje wpis w `city-content`. Miasto bez treści zostaje w danych (żeby
 * działały linki i sąsiedztwa), ale nie trafia do indeksu.
 *
 * LUDNOŚĆ jest zaokrąglona i oznaczona jako do weryfikacji, tak samo jak
 * w pozostałych plikach lokalizacji. Nie jest nigdzie pokazywana
 * użytkownikowi — służy wyłącznie do porządkowania listy.
 */
function miastoPodkarpackie(input: {
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
    wojewodztwoSlug: "podkarpackie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Podkarpacie",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Za śląskim (18). Podkarpackie jest realnym rynkiem i sąsiaduje
     * z obszarem, w którym Aga pracuje na co dzień, ale rynek jest tu
     * mniejszy i rozproszony — więc przy wyborze, co linkować najpierw,
     * ustępuje i Małopolsce, i konurbacji.
     */
    seoPriority: 20,
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
 * RZESZOWA TU NIE MA — I TO NIE JEST PRZEOCZENIE.
 * Rzeszów siedzi już w `miasta.ts` jako część ogólnopolskiej próbki Tier A/B
 * i ma tam dokładnie tę samą regułę indeksowania (flaga wynika z istnienia
 * treści). Dopisanie go drugi raz tutaj dałoby dwa wiersze o tym samym
 * `locationId` — czyli miasto pojawiające się dwa razy na listach i dwa razy
 * w sitemapie. Treść dla Rzeszowa piszemy normalnie, tylko wiersz ma gdzie
 * indziej. Ten sam błąd złapaliśmy przy Katowicach, Częstochowie
 * i Gliwicach w `slaskie.ts`.
 */
export const PODKARPACKIE_AGI: Location[] = [
  // ——— Największe miasta regionu ———
  miastoPodkarpackie({
    name: "Przemyśl",
    slug: "przemysl",
    population: 58_000,
    neighborSlugs: ["jaroslaw", "radymno"],
  }),
  miastoPodkarpackie({
    name: "Mielec",
    slug: "mielec",
    population: 59_000,
    neighborSlugs: ["debica", "tarnobrzeg", "kolbuszowa", "nowa-deba"],
  }),
  miastoPodkarpackie({
    name: "Stalowa Wola",
    slug: "stalowa-wola",
    population: 57_000,
    neighborSlugs: ["nisko", "tarnobrzeg", "nowa-deba"],
  }),
  miastoPodkarpackie({
    name: "Tarnobrzeg",
    slug: "tarnobrzeg",
    population: 46_000,
    neighborSlugs: ["stalowa-wola", "nowa-deba", "mielec"],
  }),
  miastoPodkarpackie({
    name: "Krosno",
    slug: "krosno",
    population: 45_000,
    neighborSlugs: ["jaslo", "sanok", "brzozow", "rymanow", "dukla"],
  }),
  miastoPodkarpackie({
    name: "Dębica",
    slug: "debica",
    population: 44_000,
    neighborSlugs: ["ropczyce", "mielec", "pilzno", "tarnow"],
  }),
  miastoPodkarpackie({
    name: "Jarosław",
    slug: "jaroslaw",
    population: 37_000,
    neighborSlugs: ["przemysl", "przeworsk", "radymno", "lubaczow"],
  }),
  miastoPodkarpackie({
    name: "Sanok",
    slug: "sanok",
    population: 36_000,
    neighborSlugs: ["krosno", "lesko", "zagorz", "brzozow"],
  }),
  miastoPodkarpackie({
    name: "Jasło",
    slug: "jaslo",
    population: 33_000,
    neighborSlugs: ["krosno", "gorlice", "debica", "pilzno"],
  }),

  // ——— Miasta powiatowe i mniejsze ośrodki ———
  miastoPodkarpackie({
    name: "Łańcut",
    slug: "lancut",
    population: 17_000,
    neighborSlugs: ["rzeszow", "przeworsk", "sokolow-malopolski"],
    largerCitySlug: "rzeszow",
  }),
  miastoPodkarpackie({
    name: "Przeworsk",
    slug: "przeworsk",
    population: 15_000,
    neighborSlugs: ["jaroslaw", "lancut", "lezajsk"],
  }),
  miastoPodkarpackie({
    name: "Nisko",
    slug: "nisko",
    population: 15_000,
    neighborSlugs: ["stalowa-wola", "lezajsk", "rudnik-nad-sanem"],
  }),
  miastoPodkarpackie({
    name: "Ropczyce",
    slug: "ropczyce",
    population: 15_000,
    neighborSlugs: ["debica", "sedziszow-malopolski", "rzeszow"],
  }),
  miastoPodkarpackie({
    name: "Leżajsk",
    slug: "lezajsk",
    population: 13_000,
    neighborSlugs: ["nisko", "przeworsk", "nowa-sarzyna", "rudnik-nad-sanem"],
  }),
  miastoPodkarpackie({
    name: "Sędziszów Małopolski",
    slug: "sedziszow-malopolski",
    population: 12_000,
    neighborSlugs: ["ropczyce", "rzeszow", "debica"],
  }),
  miastoPodkarpackie({
    name: "Lubaczów",
    slug: "lubaczow",
    population: 12_000,
    neighborSlugs: ["jaroslaw", "cieszanow", "oleszyce"],
  }),
  miastoPodkarpackie({
    name: "Nowa Dęba",
    slug: "nowa-deba",
    population: 11_000,
    neighborSlugs: ["tarnobrzeg", "stalowa-wola", "mielec", "kolbuszowa"],
  }),
  miastoPodkarpackie({
    name: "Kolbuszowa",
    slug: "kolbuszowa",
    population: 9_000,
    neighborSlugs: ["mielec", "nowa-deba", "sokolow-malopolski", "rzeszow"],
  }),
  miastoPodkarpackie({
    name: "Ustrzyki Dolne",
    slug: "ustrzyki-dolne",
    population: 9_000,
    neighborSlugs: ["lesko", "sanok"],
  }),
  miastoPodkarpackie({
    name: "Strzyżów",
    slug: "strzyzow",
    population: 8_000,
    neighborSlugs: ["rzeszow", "brzozow", "jaslo"],
  }),
  miastoPodkarpackie({
    name: "Brzozów",
    slug: "brzozow",
    population: 7_500,
    neighborSlugs: ["sanok", "krosno", "strzyzow", "dynow"],
  }),
  miastoPodkarpackie({
    name: "Boguchwała",
    slug: "boguchwala",
    population: 6_500,
    neighborSlugs: ["rzeszow", "strzyzow"],
    largerCitySlug: "rzeszow",
  }),
  miastoPodkarpackie({
    name: "Lesko",
    slug: "lesko",
    population: 5_500,
    neighborSlugs: ["sanok", "ustrzyki-dolne", "zagorz"],
  }),
  miastoPodkarpackie({
    name: "Głogów Małopolski",
    slug: "glogow-malopolski",
    population: 6_000,
    neighborSlugs: ["rzeszow", "sokolow-malopolski", "kolbuszowa"],
    largerCitySlug: "rzeszow",
  }),
  miastoPodkarpackie({
    name: "Sokołów Małopolski",
    slug: "sokolow-malopolski",
    population: 4_200,
    neighborSlugs: ["rzeszow", "glogow-malopolski", "lancut", "kolbuszowa"],
  }),
  miastoPodkarpackie({
    name: "Zagórz",
    slug: "zagorz",
    population: 5_000,
    neighborSlugs: ["sanok", "lesko"],
  }),
  miastoPodkarpackie({
    name: "Nowa Sarzyna",
    slug: "nowa-sarzyna",
    population: 6_000,
    neighborSlugs: ["lezajsk", "nisko"],
  }),
  miastoPodkarpackie({
    name: "Rudnik nad Sanem",
    slug: "rudnik-nad-sanem",
    population: 6_500,
    neighborSlugs: ["nisko", "lezajsk"],
  }),
  miastoPodkarpackie({
    name: "Dynów",
    slug: "dynow",
    population: 6_000,
    neighborSlugs: ["brzozow", "przeworsk", "strzyzow"],
  }),
  miastoPodkarpackie({
    name: "Radymno",
    slug: "radymno",
    population: 5_400,
    neighborSlugs: ["jaroslaw", "przemysl"],
  }),
  miastoPodkarpackie({
    name: "Pilzno",
    slug: "pilzno",
    population: 4_300,
    neighborSlugs: ["debica", "jaslo", "tarnow"],
  }),
  miastoPodkarpackie({
    name: "Rymanów",
    slug: "rymanow",
    population: 3_600,
    neighborSlugs: ["krosno", "sanok", "dukla"],
  }),
  miastoPodkarpackie({
    name: "Dukla",
    slug: "dukla",
    population: 2_200,
    neighborSlugs: ["krosno", "rymanow", "jaslo"],
  }),
  miastoPodkarpackie({
    name: "Cieszanów",
    slug: "cieszanow",
    population: 2_000,
    neighborSlugs: ["lubaczow", "oleszyce"],
  }),
  miastoPodkarpackie({
    name: "Oleszyce",
    slug: "oleszyce",
    population: 3_000,
    neighborSlugs: ["lubaczow", "cieszanow", "jaroslaw"],
  }),
];
