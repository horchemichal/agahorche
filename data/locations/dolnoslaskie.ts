import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo dolnośląskie — szósty region poza Małopolską (wrzesień 2026,
 * polecenie Michała: „dolnoslaskie i wielkopolskie", po zamknięciu piątki
 * śląskie–podkarpackie–świętokrzyskie–lubelskie–opolskie+łódzkie).
 *
 * DLACZEGO DOLNOŚLĄSKIE. Bo przylega bezpośrednio do opolskiego, które
 * właśnie domknęliśmy, i cała oś A4 z Opola do Wrocławia jest już po naszej
 * stronie mapy. To pierwszy region, w którym rozszerzamy się dalej na zachód,
 * a nie w bok.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH — i dlaczego treści nie mogą być
 * kopią opolskich. Dolny Śląsk ma trzy cechy, których nie ma żadne
 * z wcześniejszych województw.
 *
 * PO PIERWSZE: to region po całkowitej wymianie ludności po 1945 roku.
 * W praktyce oznacza to domy, w których przepisy przyjechały z bardzo
 * różnych stron — kresowe, poznańskie, góralskie, greckie — i nie ma tu
 * jednej „kuchni regionalnej", pod którą dałoby się cokolwiek podpiąć.
 * To jest kąt, który wolno wykorzystać TYLKO ostrożnie i tylko kuchennie:
 * nie opowiadamy ludziom ich historii, pytamy, skąd jest przepis.
 *
 * PO DRUGIE: gęsta sieć uzdrowisk (Kotlina Kłodzka, Kowary, Świeradów)
 * i miejscowości turystycznych w Karkonoszach. To znaczy domy z gośćmi
 * przez większość roku i kuchnie pracujące w rytmie sezonu, a nie tygodnia.
 *
 * PO TRZECIE: zagłębie miedziowe (Lubin, Polkowice, Głogów) i przemysł
 * w Legnicy — praca zmianowa na dużą skalę, ale w innych realiach niż
 * na Śląsku: to są miasta stosunkowo zamożne i młode demograficznie.
 *
 * CZEGO W TREŚCIACH NIE ROBIMY. Nie piszemy o wysiedleniach, o granicach
 * ani o historii 1945 roku inaczej niż jednym rzeczowym zdaniem, gdy jest
 * naprawdę potrzebne. To jest strona o gotowaniu. Nie mam kompetencji,
 * żeby opowiadać ludziom o nich samych — mam tylko prawo zapytać, jak
 * u nich się gotuje.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną. Flaga `indexable` wynika z tego,
 * czy dla sluga istnieje wpis w `city-content`.
 */
function miastoDolnoslaskie(input: {
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
    wojewodztwoSlug: "dolnoslaskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Dolny Śląsk",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Za opolskim (26). Region jest duży i zamożny, ale leży wyraźnie dalej
     * niż wszystko, co robiliśmy do tej pory — i to odległość, a nie
     * wielkość rynku, ustawia go w kolejce niżej.
     */
    seoPriority: 27,
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
 * WROCŁAWIA TU NIE MA i powód jest wyłącznie techniczny: siedzi już
 * w `miasta.ts` jako część ogólnopolskiej próbki i ma tam tę samą regułę
 * indeksowania. Drugi wiersz o tym samym `locationId` oznaczałby miasto
 * pokazujące się dwa razy na listach i w sitemapie. To już szósty raz ta
 * sama historia — po Katowicach, Rzeszowie, Kielcach, Lublinie i Opolu.
 */
export const DOLNOSLASKIE_AGI: Location[] = [
  // ——— Największe miasta regionu ———
  miastoDolnoslaskie({
    name: "Wałbrzych",
    slug: "walbrzych",
    population: 106_000,
    neighborSlugs: ["swidnica", "swiebodzice", "boguszow-gorce", "szczawno-zdroj", "jedlina-zdroj"],
  }),
  miastoDolnoslaskie({
    name: "Legnica",
    slug: "legnica",
    population: 97_000,
    neighborSlugs: ["lubin", "jawor", "chojnow", "zlotoryja", "prochowice"],
  }),
  miastoDolnoslaskie({
    name: "Jelenia Góra",
    slug: "jelenia-gora",
    population: 77_000,
    neighborSlugs: ["kowary", "karpacz", "szklarska-poreba", "piechowice", "lwowek-slaski"],
  }),
  miastoDolnoslaskie({
    name: "Lubin",
    slug: "lubin",
    population: 70_000,
    neighborSlugs: ["polkowice", "legnica", "glogow", "scinawa", "chocianow"],
  }),
  miastoDolnoslaskie({
    name: "Głogów",
    slug: "glogow",
    population: 65_000,
    neighborSlugs: ["polkowice", "lubin", "gora"],
  }),
  miastoDolnoslaskie({
    name: "Świdnica",
    slug: "swidnica",
    population: 55_000,
    neighborSlugs: ["walbrzych", "swiebodzice", "strzegom", "jaworzyna-slaska", "dzierzoniow"],
  }),

  // ——— Miasta powiatowe i średnie ———
  miastoDolnoslaskie({
    name: "Bolesławiec",
    slug: "boleslawiec",
    population: 38_000,
    neighborSlugs: ["nowogrodziec", "chojnow", "zlotoryja", "luban"],
  }),
  miastoDolnoslaskie({
    name: "Oleśnica",
    slug: "olesnica",
    population: 36_000,
    neighborSlugs: ["bierutow", "twardogora", "sycow", "trzebnica"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Dzierżoniów",
    slug: "dzierzoniow",
    population: 33_000,
    neighborSlugs: ["bielawa", "pieszyce", "pilawa-gorna", "niemcza", "swidnica"],
  }),
  miastoDolnoslaskie({
    name: "Oława",
    slug: "olawa",
    population: 33_000,
    neighborSlugs: ["jelcz-laskowice", "strzelin", "brzeg"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Zgorzelec",
    slug: "zgorzelec",
    population: 30_000,
    neighborSlugs: ["bogatynia", "piensk", "zawidow", "luban"],
  }),
  miastoDolnoslaskie({
    name: "Bielawa",
    slug: "bielawa",
    population: 29_000,
    neighborSlugs: ["dzierzoniow", "pieszyce", "nowa-ruda"],
  }),
  miastoDolnoslaskie({
    name: "Kłodzko",
    slug: "klodzko",
    population: 26_000,
    neighborSlugs: ["polanica-zdroj", "bystrzyca-klodzka", "nowa-ruda", "duszniki-zdroj"],
  }),
  miastoDolnoslaskie({
    name: "Świebodzice",
    slug: "swiebodzice",
    population: 22_000,
    neighborSlugs: ["walbrzych", "swidnica", "strzegom"],
  }),
  miastoDolnoslaskie({
    name: "Jawor",
    slug: "jawor",
    population: 22_000,
    neighborSlugs: ["legnica", "zlotoryja", "strzegom", "swierzawa"],
  }),
  miastoDolnoslaskie({
    name: "Polkowice",
    slug: "polkowice",
    population: 22_000,
    neighborSlugs: ["lubin", "glogow", "chocianow"],
  }),
  miastoDolnoslaskie({
    name: "Nowa Ruda",
    slug: "nowa-ruda",
    population: 21_000,
    neighborSlugs: ["klodzko", "bielawa", "gluszyca", "radkow"],
  }),
  miastoDolnoslaskie({
    name: "Lubań",
    slug: "luban",
    population: 21_000,
    neighborSlugs: ["zgorzelec", "gryfow-slaski", "lesna", "olszyna", "boleslawiec"],
  }),
  miastoDolnoslaskie({
    name: "Bogatynia",
    slug: "bogatynia",
    population: 17_000,
    neighborSlugs: ["zgorzelec", "zawidow"],
  }),
  miastoDolnoslaskie({
    name: "Kamienna Góra",
    slug: "kamienna-gora",
    population: 18_000,
    neighborSlugs: ["lubawka", "kowary", "mieroszow", "swierzawa"],
  }),
  miastoDolnoslaskie({
    name: "Strzegom",
    slug: "strzegom",
    population: 16_000,
    neighborSlugs: ["swidnica", "swiebodzice", "jaworzyna-slaska", "jawor", "zarow"],
  }),
  miastoDolnoslaskie({
    name: "Boguszów-Gorce",
    slug: "boguszow-gorce",
    population: 15_000,
    neighborSlugs: ["walbrzych", "mieroszow", "szczawno-zdroj"],
  }),
  miastoDolnoslaskie({
    name: "Jelcz-Laskowice",
    slug: "jelcz-laskowice",
    population: 15_000,
    neighborSlugs: ["olawa", "siechnice"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Ząbkowice Śląskie",
    slug: "zabkowice-slaskie",
    population: 15_000,
    neighborSlugs: ["ziebice", "niemcza", "klodzko", "strzelin"],
  }),
  miastoDolnoslaskie({
    name: "Złotoryja",
    slug: "zlotoryja",
    population: 15_000,
    neighborSlugs: ["legnica", "jawor", "chojnow", "swierzawa", "wojcieszow"],
  }),
  miastoDolnoslaskie({
    name: "Chojnów",
    slug: "chojnow",
    population: 13_000,
    neighborSlugs: ["legnica", "zlotoryja", "boleslawiec"],
  }),
  miastoDolnoslaskie({
    name: "Trzebnica",
    slug: "trzebnica",
    population: 13_000,
    neighborSlugs: ["oborniki-slaskie", "zmigrod", "prusice", "olesnica"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Brzeg Dolny",
    slug: "brzeg-dolny",
    population: 12_000,
    neighborSlugs: ["wolow", "oborniki-slaskie", "sroda-slaska"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Wołów",
    slug: "wolow",
    population: 12_000,
    neighborSlugs: ["brzeg-dolny", "scinawa", "sroda-slaska"],
  }),
  miastoDolnoslaskie({
    name: "Góra",
    slug: "gora",
    population: 12_000,
    neighborSlugs: ["wasosz", "glogow", "rawicz"],
  }),
  miastoDolnoslaskie({
    name: "Strzelin",
    slug: "strzelin",
    population: 12_000,
    neighborSlugs: ["olawa", "zabkowice-slaskie", "ziebice", "sobotka"],
  }),
  miastoDolnoslaskie({
    name: "Bystrzyca Kłodzka",
    slug: "bystrzyca-klodzka",
    population: 10_000,
    neighborSlugs: ["klodzko", "miedzylesie", "ladek-zdroj", "stronie-slaskie"],
  }),
  miastoDolnoslaskie({
    name: "Kowary",
    slug: "kowary",
    population: 10_000,
    neighborSlugs: ["jelenia-gora", "karpacz", "kamienna-gora"],
  }),
  miastoDolnoslaskie({
    name: "Syców",
    slug: "sycow",
    population: 10_000,
    neighborSlugs: ["olesnica", "twardogora", "miedzyborz", "kepno"],
  }),
  miastoDolnoslaskie({
    name: "Milicz",
    slug: "milicz",
    population: 11_000,
    neighborSlugs: ["zmigrod", "twardogora", "rawicz", "gora"],
  }),
  miastoDolnoslaskie({
    name: "Kudowa-Zdrój",
    slug: "kudowa-zdroj",
    population: 9_000,
    neighborSlugs: ["duszniki-zdroj", "polanica-zdroj", "radkow"],
  }),
  miastoDolnoslaskie({
    name: "Pieszyce",
    slug: "pieszyce",
    population: 9_000,
    neighborSlugs: ["dzierzoniow", "bielawa", "walbrzych"],
  }),
  miastoDolnoslaskie({
    name: "Oborniki Śląskie",
    slug: "oborniki-slaskie",
    population: 9_000,
    neighborSlugs: ["trzebnica", "brzeg-dolny", "wolow"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Środa Śląska",
    slug: "sroda-slaska",
    population: 9_000,
    neighborSlugs: ["brzeg-dolny", "wolow", "katy-wroclawskie", "prochowice"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Ziębice",
    slug: "ziebice",
    population: 9_000,
    neighborSlugs: ["zabkowice-slaskie", "strzelin", "niemcza"],
  }),
  miastoDolnoslaskie({
    name: "Lwówek Śląski",
    slug: "lwowek-slaski",
    population: 9_000,
    neighborSlugs: ["gryfow-slaski", "zlotoryja", "jelenia-gora", "swierzawa"],
  }),
  miastoDolnoslaskie({
    name: "Siechnice",
    slug: "siechnice",
    population: 8_000,
    neighborSlugs: ["olawa", "jelcz-laskowice", "katy-wroclawskie"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Chocianów",
    slug: "chocianow",
    population: 8_000,
    neighborSlugs: ["polkowice", "lubin", "boleslawiec"],
  }),
  miastoDolnoslaskie({
    name: "Kąty Wrocławskie",
    slug: "katy-wroclawskie",
    population: 7_000,
    neighborSlugs: ["sobotka", "sroda-slaska", "siechnice"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Sobótka",
    slug: "sobotka",
    population: 7_000,
    neighborSlugs: ["katy-wroclawskie", "strzelin", "swidnica"],
    largerCitySlug: "wroclaw",
  }),
  miastoDolnoslaskie({
    name: "Żarów",
    slug: "zarow",
    population: 7_000,
    neighborSlugs: ["strzegom", "jaworzyna-slaska", "swidnica"],
  }),
  miastoDolnoslaskie({
    name: "Twardogóra",
    slug: "twardogora",
    population: 7_000,
    neighborSlugs: ["olesnica", "sycow", "milicz", "miedzyborz"],
  }),
  miastoDolnoslaskie({
    name: "Gryfów Śląski",
    slug: "gryfow-slaski",
    population: 7_000,
    neighborSlugs: ["luban", "lwowek-slaski", "mirsk", "swieradow-zdroj"],
  }),
  miastoDolnoslaskie({
    name: "Żmigród",
    slug: "zmigrod",
    population: 7_000,
    neighborSlugs: ["trzebnica", "milicz", "prusice", "gora"],
  }),
  miastoDolnoslaskie({
    name: "Szklarska Poręba",
    slug: "szklarska-poreba",
    population: 6_000,
    neighborSlugs: ["jelenia-gora", "piechowice", "swieradow-zdroj"],
  }),
  miastoDolnoslaskie({
    name: "Polanica-Zdrój",
    slug: "polanica-zdroj",
    population: 6_000,
    neighborSlugs: ["klodzko", "duszniki-zdroj", "kudowa-zdroj", "szczytna"],
  }),
  miastoDolnoslaskie({
    name: "Piława Górna",
    slug: "pilawa-gorna",
    population: 6_000,
    neighborSlugs: ["dzierzoniow", "niemcza", "bielawa"],
  }),
  miastoDolnoslaskie({
    name: "Głuszyca",
    slug: "gluszyca",
    population: 6_000,
    neighborSlugs: ["walbrzych", "nowa-ruda", "jedlina-zdroj"],
  }),
  miastoDolnoslaskie({
    name: "Piechowice",
    slug: "piechowice",
    population: 6_000,
    neighborSlugs: ["jelenia-gora", "szklarska-poreba", "kowary"],
  }),
  miastoDolnoslaskie({
    name: "Karpacz",
    slug: "karpacz",
    population: 5_000,
    neighborSlugs: ["kowary", "jelenia-gora", "szklarska-poreba"],
  }),
  miastoDolnoslaskie({
    name: "Szczawno-Zdrój",
    slug: "szczawno-zdroj",
    population: 5_000,
    neighborSlugs: ["walbrzych", "boguszow-gorce", "swidnica"],
  }),
  miastoDolnoslaskie({
    name: "Ścinawa",
    slug: "scinawa",
    population: 5_000,
    neighborSlugs: ["lubin", "wolow", "prochowice"],
  }),
  miastoDolnoslaskie({
    name: "Duszniki-Zdrój",
    slug: "duszniki-zdroj",
    population: 4_500,
    neighborSlugs: ["polanica-zdroj", "kudowa-zdroj", "klodzko"],
  }),
  miastoDolnoslaskie({
    name: "Bierutów",
    slug: "bierutow",
    population: 5_000,
    neighborSlugs: ["olesnica", "olawa", "namyslow"],
  }),
  miastoDolnoslaskie({
    name: "Jedlina-Zdrój",
    slug: "jedlina-zdroj",
    population: 5_000,
    neighborSlugs: ["walbrzych", "gluszyca", "nowa-ruda"],
  }),
  miastoDolnoslaskie({
    name: "Świeradów-Zdrój",
    slug: "swieradow-zdroj",
    population: 4_000,
    neighborSlugs: ["mirsk", "gryfow-slaski", "szklarska-poreba"],
  }),
  miastoDolnoslaskie({
    name: "Mieroszów",
    slug: "mieroszow",
    population: 4_000,
    neighborSlugs: ["boguszow-gorce", "kamienna-gora", "walbrzych"],
  }),
  miastoDolnoslaskie({
    name: "Mirsk",
    slug: "mirsk",
    population: 4_000,
    neighborSlugs: ["swieradow-zdroj", "gryfow-slaski", "lwowek-slaski"],
  }),
  miastoDolnoslaskie({
    name: "Prochowice",
    slug: "prochowice",
    population: 3_500,
    neighborSlugs: ["legnica", "sroda-slaska", "scinawa"],
  }),
  miastoDolnoslaskie({
    name: "Niemcza",
    slug: "niemcza",
    population: 3_000,
    neighborSlugs: ["dzierzoniow", "pilawa-gorna", "ziebice", "zabkowice-slaskie"],
  }),
  miastoDolnoslaskie({
    name: "Świerzawa",
    slug: "swierzawa",
    population: 2_300,
    neighborSlugs: ["zlotoryja", "jawor", "lwowek-slaski", "wojcieszow"],
  }),
  miastoDolnoslaskie({
    name: "Międzybórz",
    slug: "miedzyborz",
    population: 2_300,
    neighborSlugs: ["sycow", "twardogora", "milicz"],
  }),

  // ——— Mniejsze miasta: Pogórze, Kotlina Kłodzka i pas przygraniczny ———
  miastoDolnoslaskie({
    name: "Jaworzyna Śląska",
    slug: "jaworzyna-slaska",
    population: 5_000,
    neighborSlugs: ["swidnica", "strzegom", "zarow"],
  }),
  miastoDolnoslaskie({
    name: "Lądek-Zdrój",
    slug: "ladek-zdroj",
    population: 5_500,
    neighborSlugs: ["stronie-slaskie", "bystrzyca-klodzka", "klodzko"],
  }),
  miastoDolnoslaskie({
    name: "Lubawka",
    slug: "lubawka",
    population: 6_000,
    neighborSlugs: ["kamienna-gora", "mieroszow", "kowary"],
  }),
  miastoDolnoslaskie({
    name: "Radków",
    slug: "radkow",
    population: 2_500,
    neighborSlugs: ["nowa-ruda", "kudowa-zdroj", "szczytna"],
  }),
  miastoDolnoslaskie({
    name: "Szczytna",
    slug: "szczytna",
    population: 5_000,
    neighborSlugs: ["polanica-zdroj", "duszniki-zdroj", "radkow"],
  }),
  miastoDolnoslaskie({
    name: "Stronie Śląskie",
    slug: "stronie-slaskie",
    population: 5_500,
    neighborSlugs: ["ladek-zdroj", "bystrzyca-klodzka"],
  }),
  miastoDolnoslaskie({
    name: "Międzylesie",
    slug: "miedzylesie",
    population: 2_500,
    neighborSlugs: ["bystrzyca-klodzka", "stronie-slaskie"],
  }),
  miastoDolnoslaskie({
    name: "Nowogrodziec",
    slug: "nowogrodziec",
    population: 4_200,
    neighborSlugs: ["boleslawiec", "luban", "olszyna"],
  }),
  miastoDolnoslaskie({
    name: "Leśna",
    slug: "lesna",
    population: 4_500,
    neighborSlugs: ["luban", "olszyna", "gryfow-slaski"],
  }),
  miastoDolnoslaskie({
    name: "Olszyna",
    slug: "olszyna",
    population: 4_300,
    neighborSlugs: ["luban", "lesna", "nowogrodziec"],
  }),
  miastoDolnoslaskie({
    name: "Pieńsk",
    slug: "piensk",
    population: 5_700,
    neighborSlugs: ["zgorzelec", "wegliniec", "boleslawiec"],
  }),
  miastoDolnoslaskie({
    name: "Węgliniec",
    slug: "wegliniec",
    population: 2_800,
    neighborSlugs: ["piensk", "zgorzelec", "boleslawiec"],
  }),
  miastoDolnoslaskie({
    name: "Zawidów",
    slug: "zawidow",
    population: 4_200,
    neighborSlugs: ["zgorzelec", "bogatynia", "luban"],
  }),
  miastoDolnoslaskie({
    name: "Wojcieszów",
    slug: "wojcieszow",
    population: 3_600,
    neighborSlugs: ["swierzawa", "zlotoryja", "jelenia-gora"],
  }),
  miastoDolnoslaskie({
    name: "Prusice",
    slug: "prusice",
    population: 2_200,
    neighborSlugs: ["trzebnica", "zmigrod", "wolow"],
  }),
  miastoDolnoslaskie({
    name: "Wąsosz",
    slug: "wasosz",
    population: 2_600,
    neighborSlugs: ["gora", "zmigrod", "milicz"],
  }),
];
