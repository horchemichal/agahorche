import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo świętokrzyskie — trzeci region poza Małopolską (wrzesień 2026,
 * decyzja Michała: „robimy strony lokalne dla śląskiego, podkarpackiego,
 * świętokrzyskiego i lubelskiego, wszystkie miasta"; Aga potwierdziła, że
 * dojeżdża z prezentacją do wszystkich czterech).
 *
 * DLACZEGO ŚWIĘTOKRZYSKIE JAKO TRZECIE. Bo zamyka pierścień wokół tego, co
 * już mamy: graniczy i z Małopolską, i ze śląskim, i z podkarpackim. Z Miechowa
 * do Jędrzejowa jedzie się krócej niż z Krakowa do Nowego Sącza, a Kazimierza
 * Wielka i Działoszyce leżą praktycznie na granicy powiatu miechowskiego,
 * o którym strony już istnieją.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD DWÓCH POPRZEDNICH — i dlaczego strony muszą
 * wyglądać inaczej. Śląskie to konurbacja, podkarpackie to duże odległości
 * przy jednym dużym mieście. Świętokrzyskie ma trzecią strukturę: pas miast
 * przemysłowych nad Kamienną (Skarżysko, Starachowice, Ostrowiec), ciągnący
 * się jeden za drugim jak paciorki, i całą resztę województwa złożoną
 * z małych miasteczek rolniczych, uzdrowiskowych i sadowniczych. To dwa
 * osobne światy w jednym województwie i strony muszą je rozróżniać —
 * argument, który działa w Ostrowcu, w Sandomierzu brzmi obco.
 *
 * DRUGA RZECZ, KTÓREJ NIE MA W POPRZEDNICH REGIONACH: sezonowość rolnicza
 * jest tu realną częścią życia domowego, nie folklorem. Sady sandomierskie,
 * Ponidzie, śliwka szydłowska, przetwory robione we wrześniu na cały rok.
 * Tego nie da się napisać raz i skopiować — w każdym z tych miejsc uprawia
 * się co innego i w innym miesiącu.
 *
 * ZASADA POZOSTAJE TA SAMA CO WSZĘDZIE: strona miasta idzie do Google dopiero
 * wtedy, gdy ma własną, napisaną treść lokalną. Flaga `indexable` nie jest
 * wpisywana ręcznie — wynika z tego, czy dla sluga istnieje wpis
 * w `city-content`. Miasto bez treści zostaje w danych (żeby działały linki
 * i sąsiedztwa), ale nie trafia do indeksu.
 *
 * LUDNOŚĆ jest zaokrąglona i oznaczona jako do weryfikacji, tak samo jak
 * w pozostałych plikach lokalizacji. Nie jest nigdzie pokazywana
 * użytkownikowi — służy wyłącznie do porządkowania listy.
 */
function miastoSwietokrzyskie(input: {
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
    wojewodztwoSlug: "swietokrzyskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Ziemia Świętokrzyska",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Za podkarpackim (20). Najmniejsze z czterech województw objętych
     * decyzją — 1,2 mln mieszkańców i tylko jedno miasto powyżej stu tysięcy.
     * Przy wyborze, co linkować najpierw, ustępuje Małopolsce, konurbacji
     * i Podkarpaciu, ale wyprzedza wszystko, czego jeszcze nie robimy.
     */
    seoPriority: 22,
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
 * KIELC TU NIE MA — I TO NIE JEST PRZEOCZENIE.
 * Kielce siedzą już w `miasta.ts` jako część ogólnopolskiej próbki Tier A/B
 * i mają tam dokładnie tę samą regułę indeksowania (flaga wynika z istnienia
 * treści). Dopisanie ich drugi raz tutaj dałoby dwa wiersze o tym samym
 * `locationId` — czyli miasto pojawiające się dwa razy na listach i dwa razy
 * w sitemapie. Treść dla Kielc piszemy normalnie, tylko wiersz ma gdzie
 * indziej. Ten sam błąd złapaliśmy przy Katowicach, Częstochowie i Gliwicach
 * w `slaskie.ts` oraz przy Rzeszowie w `podkarpackie.ts`.
 */
export const SWIETOKRZYSKIE_AGI: Location[] = [
  // ——— Pas przemysłowy nad Kamienną ———
  miastoSwietokrzyskie({
    name: "Ostrowiec Świętokrzyski",
    slug: "ostrowiec-swietokrzyski",
    population: 63_000,
    neighborSlugs: ["opatow", "cmielow", "kunow", "starachowice", "ozarow"],
  }),
  miastoSwietokrzyskie({
    name: "Starachowice",
    slug: "starachowice",
    population: 46_000,
    neighborSlugs: ["skarzysko-kamienna", "ostrowiec-swietokrzyski", "wachock", "kunow"],
  }),
  miastoSwietokrzyskie({
    name: "Skarżysko-Kamienna",
    slug: "skarzysko-kamienna",
    population: 42_000,
    neighborSlugs: ["starachowice", "suchedniow", "staporkow", "konskie"],
  }),
  miastoSwietokrzyskie({
    name: "Suchedniów",
    slug: "suchedniow",
    population: 8_000,
    neighborSlugs: ["skarzysko-kamienna", "bodzentyn"],
    largerCitySlug: "kielce",
  }),
  miastoSwietokrzyskie({
    name: "Wąchock",
    slug: "wachock",
    population: 2_700,
    neighborSlugs: ["starachowice", "skarzysko-kamienna", "suchedniow"],
  }),
  miastoSwietokrzyskie({
    name: "Stąporków",
    slug: "staporkow",
    population: 5_500,
    neighborSlugs: ["konskie", "skarzysko-kamienna"],
  }),
  miastoSwietokrzyskie({
    name: "Kunów",
    slug: "kunow",
    population: 3_000,
    neighborSlugs: ["ostrowiec-swietokrzyski", "starachowice", "cmielow"],
  }),

  // ——— Północ i zachód ———
  miastoSwietokrzyskie({
    name: "Końskie",
    slug: "konskie",
    population: 19_000,
    neighborSlugs: ["staporkow", "skarzysko-kamienna", "wloszczowa"],
  }),
  miastoSwietokrzyskie({
    name: "Włoszczowa",
    slug: "wloszczowa",
    population: 9_000,
    neighborSlugs: ["konskie", "jedrzejow", "malogoszcz"],
  }),
  miastoSwietokrzyskie({
    name: "Jędrzejów",
    slug: "jedrzejow",
    population: 15_000,
    neighborSlugs: ["sedziszow", "malogoszcz", "wloszczowa", "checiny", "pinczow"],
  }),
  miastoSwietokrzyskie({
    name: "Sędziszów",
    slug: "sedziszow",
    population: 6_500,
    neighborSlugs: ["jedrzejow", "wloszczowa"],
  }),
  miastoSwietokrzyskie({
    name: "Małogoszcz",
    slug: "malogoszcz",
    population: 3_800,
    neighborSlugs: ["jedrzejow", "wloszczowa", "checiny"],
  }),

  // ——— Wokół Kielc ———
  miastoSwietokrzyskie({
    name: "Chęciny",
    slug: "checiny",
    population: 4_300,
    neighborSlugs: ["jedrzejow", "morawica", "malogoszcz"],
    largerCitySlug: "kielce",
  }),
  miastoSwietokrzyskie({
    name: "Morawica",
    slug: "morawica",
    population: 1_800,
    neighborSlugs: ["checiny", "daleszyce", "chmielnik"],
    largerCitySlug: "kielce",
  }),
  miastoSwietokrzyskie({
    name: "Daleszyce",
    slug: "daleszyce",
    population: 3_000,
    neighborSlugs: ["morawica", "chmielnik", "bodzentyn"],
    largerCitySlug: "kielce",
  }),
  miastoSwietokrzyskie({
    name: "Bodzentyn",
    slug: "bodzentyn",
    population: 2_300,
    neighborSlugs: ["suchedniow", "daleszyce", "nowa-slupia"],
    largerCitySlug: "kielce",
  }),
  miastoSwietokrzyskie({
    name: "Nowa Słupia",
    slug: "nowa-slupia",
    population: 1_400,
    neighborSlugs: ["bodzentyn", "opatow", "lagow"],
  }),
  miastoSwietokrzyskie({
    name: "Chmielnik",
    slug: "chmielnik",
    population: 3_700,
    neighborSlugs: ["morawica", "busko-zdroj", "pierzchnica", "staszow"],
  }),
  miastoSwietokrzyskie({
    name: "Pierzchnica",
    slug: "pierzchnica",
    population: 1_100,
    neighborSlugs: ["chmielnik", "daleszyce", "staszow"],
  }),
  miastoSwietokrzyskie({
    name: "Łagów",
    slug: "lagow",
    population: 1_500,
    neighborSlugs: ["nowa-slupia", "opatow", "staszow"],
  }),

  // ——— Sandomierszczyzna i wschód ———
  miastoSwietokrzyskie({
    name: "Sandomierz",
    slug: "sandomierz",
    population: 22_000,
    neighborSlugs: ["opatow", "koprzywnica", "zawichost", "klimontow", "ozarow"],
  }),
  miastoSwietokrzyskie({
    name: "Opatów",
    slug: "opatow",
    population: 6_000,
    neighborSlugs: ["ostrowiec-swietokrzyski", "sandomierz", "ozarow", "lagow", "klimontow"],
  }),
  miastoSwietokrzyskie({
    name: "Ożarów",
    slug: "ozarow",
    population: 4_500,
    neighborSlugs: ["opatow", "sandomierz", "cmielow", "zawichost"],
  }),
  miastoSwietokrzyskie({
    name: "Ćmielów",
    slug: "cmielow",
    population: 3_000,
    neighborSlugs: ["ostrowiec-swietokrzyski", "ozarow", "kunow", "opatow"],
  }),
  miastoSwietokrzyskie({
    name: "Zawichost",
    slug: "zawichost",
    population: 1_700,
    neighborSlugs: ["sandomierz", "ozarow"],
  }),
  miastoSwietokrzyskie({
    name: "Koprzywnica",
    slug: "koprzywnica",
    population: 2_500,
    neighborSlugs: ["sandomierz", "klimontow", "polaniec"],
  }),
  miastoSwietokrzyskie({
    name: "Klimontów",
    slug: "klimontow",
    population: 2_000,
    neighborSlugs: ["sandomierz", "opatow", "koprzywnica", "staszow"],
  }),
  /*
   * OSIEK (powiat staszowski) NIE MA TU WIERSZA — slug `osiek` jest już zajęty
   * przez gminę Osiek w powiecie oświęcimskim, dla której istnieje wdrożona
   * strona z treścią. Dwa wiersze o tym samym slugu dałyby jedną stronę
   * i dwa różne miasta walczące o nią. Gdyby świętokrzyski Osiek miał kiedyś
   * dostać własną stronę, musi wejść pod innym slugiem (np. `osiek-staszowski`)
   * — i wtedy trzeba pamiętać, żeby URL nie kłócił się z tym, jak ludzie
   * to miasto wpisują w wyszukiwarkę.
   */
  miastoSwietokrzyskie({
    name: "Połaniec",
    slug: "polaniec",
    population: 8_000,
    neighborSlugs: ["staszow", "koprzywnica"],
  }),
  miastoSwietokrzyskie({
    name: "Staszów",
    slug: "staszow",
    population: 14_000,
    neighborSlugs: ["polaniec", "chmielnik", "klimontow", "szydlow"],
  }),
  miastoSwietokrzyskie({
    name: "Szydłów",
    slug: "szydlow",
    population: 1_000,
    neighborSlugs: ["staszow", "chmielnik", "busko-zdroj"],
  }),

  // ——— Ponidzie ———
  miastoSwietokrzyskie({
    name: "Busko-Zdrój",
    slug: "busko-zdroj",
    population: 15_000,
    neighborSlugs: ["pinczow", "chmielnik", "stopnica", "wislica", "szydlow"],
  }),
  miastoSwietokrzyskie({
    name: "Stopnica",
    slug: "stopnica",
    population: 1_500,
    neighborSlugs: ["busko-zdroj", "staszow"],
  }),
  miastoSwietokrzyskie({
    name: "Pińczów",
    slug: "pinczow",
    population: 10_000,
    neighborSlugs: ["busko-zdroj", "jedrzejow", "wislica", "kazimierza-wielka"],
  }),
  miastoSwietokrzyskie({
    name: "Wiślica",
    slug: "wislica",
    population: 500,
    neighborSlugs: ["busko-zdroj", "pinczow", "nowy-korczyn"],
  }),
  miastoSwietokrzyskie({
    name: "Nowy Korczyn",
    slug: "nowy-korczyn",
    population: 1_000,
    neighborSlugs: ["wislica", "busko-zdroj"],
  }),
  miastoSwietokrzyskie({
    name: "Kazimierza Wielka",
    slug: "kazimierza-wielka",
    population: 5_500,
    neighborSlugs: ["pinczow", "skalbmierz", "dzialoszyce", "proszowice"],
  }),
  miastoSwietokrzyskie({
    name: "Skalbmierz",
    slug: "skalbmierz",
    population: 1_300,
    neighborSlugs: ["kazimierza-wielka", "dzialoszyce"],
  }),
  miastoSwietokrzyskie({
    name: "Działoszyce",
    slug: "dzialoszyce",
    population: 900,
    neighborSlugs: ["kazimierza-wielka", "skalbmierz", "pinczow", "miechow"],
  }),
];
