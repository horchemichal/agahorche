import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo śląskie — pierwszy region poza Małopolską (wrzesień 2026,
 * decyzja Michała: „robimy strony lokalne dla śląskiego, podkarpackiego,
 * świętokrzyskiego i lubelskiego, wszystkie miasta"; Aga potwierdziła, że
 * dojeżdża z prezentacją do wszystkich czterech).
 *
 * DLACZEGO ŚLĄSKIE JAKO PIERWSZE. Z czterech nowych regionów ten jest
 * największym rynkiem i najbliższym: z Nowego Wiśnicza do Katowic jest
 * mniej niż do Zakopanego. Konurbacja to kilkanaście miast po sto tysięcy
 * mieszkańców w promieniu trzydziestu kilometrów — jedna trasa obsługuje
 * kilka spotkań, czego nie da się powiedzieć o Lublinie.
 *
 * ZASADA POZOSTAJE TA SAMA CO PRZY MAŁOPOLSCE: strona miasta idzie do
 * Google dopiero wtedy, gdy ma własną, napisaną treść lokalną. Flaga
 * `indexable` nie jest wpisywana ręcznie — wynika z tego, czy dla sluga
 * istnieje wpis w `city-content`. Miasto bez treści zostaje w danych
 * (żeby działały linki i sąsiedztwa), ale nie trafia do indeksu.
 *
 * CZEGO TU NIE MA. Powiatów i gmin śląskich — na razie tylko miasta.
 * Śląskie ma 71 miast i 167 gmin; dokładanie pustych wierszy gminnych,
 * zanim powstanie treść choćby dla największych miast, dałoby setki
 * adresów bez zawartości. Kolejność jest odwrotna: najpierw treść, potem
 * wiersz.
 *
 * LUDNOŚĆ jest zaokrąglona i oznaczona jako do weryfikacji, tak samo jak
 * w pozostałych plikach lokalizacji. Nie jest nigdzie pokazywana
 * użytkownikowi — służy wyłącznie do porządkowania listy.
 */
function miastoSlaskie(input: {
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
    wojewodztwoSlug: "slaskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Śląsk",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Tuż za Małopolską (15). Śląskie jest realnym rynkiem, ale strona
     * broni się dziś frazami małopolskimi i to one mają pierwszeństwo,
     * gdy trzeba wybrać, co linkować w pierwszej kolejności.
     */
    seoPriority: 18,
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
 * KATOWIC, CZĘSTOCHOWY I GLIWIC TU NIE MA — I TO NIE JEST PRZEOCZENIE.
 * Te trzy siedzą już w `miasta.ts` jako część ogólnopolskiej próbki Tier A/B
 * i mają tam dokładnie tę samą regułę indeksowania (flaga wynika z istnienia
 * treści). Dopisanie ich drugi raz tutaj dałoby dwa wiersze o tym samym
 * `locationId` — czyli miasto pojawiające się dwa razy na listach i dwa razy
 * w sitemapie. Treść dla nich piszemy normalnie, tylko wiersz mają gdzie
 * indziej.
 */
export const SLASKIE_AGI: Location[] = [
  // ——— Konurbacja katowicka ———
  miastoSlaskie({
    name: "Sosnowiec",
    slug: "sosnowiec",
    population: 185_000,
    neighborSlugs: ["katowice", "bedzin", "dabrowa-gornicza", "czeladz", "myslowice"],
  }),
  miastoSlaskie({
    name: "Zabrze",
    slug: "zabrze",
    population: 155_000,
    neighborSlugs: ["gliwice", "bytom", "ruda-slaska"],
  }),
  miastoSlaskie({
    name: "Bytom",
    slug: "bytom",
    population: 150_000,
    neighborSlugs: ["zabrze", "chorzow", "piekary-slaskie", "ruda-slaska", "tarnowskie-gory"],
  }),
  miastoSlaskie({
    name: "Ruda Śląska",
    slug: "ruda-slaska",
    population: 132_000,
    neighborSlugs: ["zabrze", "bytom", "chorzow", "swietochlowice"],
  }),
  miastoSlaskie({
    name: "Tychy",
    slug: "tychy",
    population: 125_000,
    neighborSlugs: ["katowice", "myslowice", "mikolow", "pszczyna"],
  }),
  miastoSlaskie({
    name: "Dąbrowa Górnicza",
    slug: "dabrowa-gornicza",
    population: 115_000,
    neighborSlugs: ["sosnowiec", "bedzin"],
  }),
  miastoSlaskie({
    name: "Chorzów",
    slug: "chorzow",
    population: 103_000,
    neighborSlugs: ["katowice", "bytom", "ruda-slaska", "swietochlowice", "siemianowice-slaskie"],
  }),
  miastoSlaskie({
    name: "Mysłowice",
    slug: "myslowice",
    population: 73_000,
    neighborSlugs: ["katowice", "sosnowiec", "tychy"],
    largerCitySlug: "katowice",
  }),
  miastoSlaskie({
    name: "Siemianowice Śląskie",
    slug: "siemianowice-slaskie",
    population: 65_000,
    neighborSlugs: ["katowice", "chorzow", "piekary-slaskie"],
    largerCitySlug: "katowice",
  }),
  miastoSlaskie({
    name: "Będzin",
    slug: "bedzin",
    population: 55_000,
    neighborSlugs: ["sosnowiec", "dabrowa-gornicza", "czeladz"],
    largerCitySlug: "sosnowiec",
  }),
  miastoSlaskie({
    name: "Piekary Śląskie",
    slug: "piekary-slaskie",
    population: 54_000,
    neighborSlugs: ["bytom", "chorzow", "siemianowice-slaskie", "tarnowskie-gory"],
  }),
  miastoSlaskie({
    name: "Świętochłowice",
    slug: "swietochlowice",
    population: 48_000,
    neighborSlugs: ["chorzow", "ruda-slaska", "bytom"],
    largerCitySlug: "chorzow",
  }),
  miastoSlaskie({
    name: "Tarnowskie Góry",
    slug: "tarnowskie-gory",
    population: 60_000,
    neighborSlugs: ["bytom", "piekary-slaskie"],
  }),
  miastoSlaskie({
    name: "Czeladź",
    slug: "czeladz",
    population: 30_000,
    neighborSlugs: ["sosnowiec", "bedzin"],
    largerCitySlug: "sosnowiec",
  }),
  miastoSlaskie({
    name: "Knurów",
    slug: "knurow",
    population: 37_000,
    neighborSlugs: ["gliwice", "rybnik"],
    largerCitySlug: "gliwice",
  }),

  // ——— Poza konurbacją ———
  miastoSlaskie({
    name: "Bielsko-Biała",
    slug: "bielsko-biala",
    population: 166_000,
    neighborSlugs: ["czechowice-dziedzice", "zywiec", "cieszyn"],
  }),
  miastoSlaskie({
    name: "Rybnik",
    slug: "rybnik",
    population: 135_000,
    neighborSlugs: ["zory", "jastrzebie-zdroj", "wodzislaw-slaski", "knurow"],
  }),
  miastoSlaskie({
    name: "Jastrzębie-Zdrój",
    slug: "jastrzebie-zdroj",
    population: 84_000,
    neighborSlugs: ["rybnik", "wodzislaw-slaski", "zory"],
    largerCitySlug: "rybnik",
  }),
  miastoSlaskie({
    name: "Żory",
    slug: "zory",
    population: 60_000,
    neighborSlugs: ["rybnik", "jastrzebie-zdroj"],
    largerCitySlug: "rybnik",
  }),
  miastoSlaskie({
    name: "Wodzisław Śląski",
    slug: "wodzislaw-slaski",
    population: 47_000,
    neighborSlugs: ["rybnik", "jastrzebie-zdroj", "raciborz"],
    largerCitySlug: "rybnik",
  }),
  miastoSlaskie({
    name: "Racibórz",
    slug: "raciborz",
    population: 54_000,
    neighborSlugs: ["wodzislaw-slaski"],
  }),
  miastoSlaskie({
    name: "Żywiec",
    slug: "zywiec",
    population: 31_000,
    neighborSlugs: ["bielsko-biala"],
    largerCitySlug: "bielsko-biala",
  }),
  miastoSlaskie({
    name: "Cieszyn",
    slug: "cieszyn",
    population: 33_000,
    neighborSlugs: ["bielsko-biala"],
    largerCitySlug: "bielsko-biala",
  }),
  miastoSlaskie({
    name: "Czechowice-Dziedzice",
    slug: "czechowice-dziedzice",
    population: 35_000,
    neighborSlugs: ["bielsko-biala", "tychy"],
    largerCitySlug: "bielsko-biala",
  }),
  miastoSlaskie({
    name: "Zawiercie",
    slug: "zawiercie",
    population: 48_000,
    neighborSlugs: ["myszkow", "dabrowa-gornicza"],
  }),
  miastoSlaskie({
    name: "Myszków",
    slug: "myszkow",
    population: 31_000,
    neighborSlugs: ["czestochowa", "zawiercie"],
    largerCitySlug: "czestochowa",
  }),
  miastoSlaskie({
    name: "Lubliniec",
    slug: "lubliniec",
    population: 23_000,
    neighborSlugs: ["czestochowa", "tarnowskie-gory"],
  }),
  miastoSlaskie({
    name: "Pszczyna",
    slug: "pszczyna",
    population: 25_000,
    neighborSlugs: ["tychy", "czechowice-dziedzice"],
    largerCitySlug: "tychy",
  }),
  miastoSlaskie({
    name: "Mikołów",
    slug: "mikolow",
    population: 40_000,
    neighborSlugs: ["katowice", "tychy", "ruda-slaska"],
    largerCitySlug: "katowice",
  }),
];
