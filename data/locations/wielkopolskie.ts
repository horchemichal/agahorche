import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo wielkopolskie — siódmy region poza Małopolską (wrzesień 2026,
 * polecenie Michała: „dolnoslaskie i wielkopolskie").
 *
 * DLACZEGO WIELKOPOLSKIE. Bo to drugie co do powierzchni województwo
 * w Polsce i jedno z najludniejszych, a przy tym region o bardzo gęstej
 * sieci małych i średnich miast. Nie ma tu jednej aglomeracji z pustką
 * dookoła — jest kilkadziesiąt kilkunastotysięcznych miast, z których
 * każde ma własny rynek, własny szpital i własne liceum. Dla stron
 * lokalnych to jest najlepszy możliwy układ.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH — i dlaczego treści nie mogą
 * być kopią dolnośląskich.
 *
 * PO PIERWSZE, i to jest cecha najsilniejsza: gospodarność. Wielkopolska
 * ma zasłużoną, długą reputację miejsca, w którym liczy się porządek,
 * planowanie i to, żeby nic się nie zmarnowało. To jest dla nas trudny
 * i ciekawy teren, bo TU ARGUMENT „KUPUJ, BO WYGODNIE" NIE DZIAŁA.
 * Działa policzenie, co się realnie zwraca, i uczciwe powiedzenie,
 * kiedy się nie zwraca.
 *
 * PO DRUGIE: rolnictwo o skali, jakiej nie ma w Małopolsce — hodowla,
 * mleczarstwo i wielkie gospodarstwa towarowe. Kuchnia domowa jest tu
 * często kuchnią, w której produkt jest własny, a nie kupiony.
 *
 * PO TRZECIE: bardzo silna ciągłość rodzinnych firm i warsztatów.
 * Dużo domów, w których praca i mieszkanie są pod jednym adresem.
 *
 * CZEGO W TREŚCIACH NIE ROBIMY. Nie żartujemy z „poznańskiej oszczędności"
 * i nie budujemy na stereotypie — nawet życzliwym. Gospodarność opisujemy
 * jako zaletę i jako powód, dla którego mam się przygotować lepiej,
 * a nie jako zaczepkę. Nie udajemy też, że znam tutejszą gwarę.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną. Flaga `indexable` wynika z tego,
 * czy dla sluga istnieje wpis w `city-content`.
 */
function miastoWielkopolskie(input: {
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
    wojewodztwoSlug: "wielkopolskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Wielkopolska",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Za dolnośląskim (27). Rynek jest większy niż dolnośląski, ale leży
     * jeszcze dalej — i tak jak tam, o kolejności decyduje odległość,
     * a nie liczba mieszkańców.
     */
    seoPriority: 28,
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
 * POZNANIA TU NIE MA i powód jest wyłącznie techniczny: siedzi już
 * w `miasta.ts` jako część ogólnopolskiej próbki i ma tam tę samą regułę
 * indeksowania. To już siódmy raz ta sama historia — po Katowicach,
 * Rzeszowie, Kielcach, Lublinie, Opolu, Łodzi i Wrocławiu.
 *
 * WIERUSZOWA TU NIE MA, choć bywa kojarzony z pograniczem: leży
 * w województwie łódzkim i ma tam już swój wiersz w `lodzkie.ts`.
 *
 * DOBREJ (w powiecie tureckim) tu nie ma, bo slug `dobra` zajmuje wdrożona
 * już gmina Dobra w powiecie limanowskim, w Małopolsce. Dokładnie ten sam
 * problem co ze świętokrzyskim Osiekiem i opolskim Olesnem. Gdyby turecka
 * Dobra miała kiedyś dostać stronę, musi wejść pod innym slugiem — i wtedy
 * trzeba świadomie zdecydować, jak to pogodzić z tym, co ludzie wpisują
 * w wyszukiwarkę.
 */
export const WIELKOPOLSKIE_AGI: Location[] = [
  // ——— Największe miasta regionu ———
  miastoWielkopolskie({
    name: "Kalisz",
    slug: "kalisz",
    population: 100_000,
    neighborSlugs: ["ostrow-wielkopolski", "nowe-skalmierzyce", "stawiszyn"],
  }),
  miastoWielkopolskie({
    name: "Konin",
    slug: "konin",
    population: 72_000,
    neighborSlugs: ["golina", "slupca", "kleczew", "slesin", "rychwal"],
  }),
  miastoWielkopolskie({
    name: "Piła",
    slug: "pila",
    population: 72_000,
    neighborSlugs: ["trzcianka", "chodziez", "zlotow", "wyrzysk", "ujscie"],
  }),
  miastoWielkopolskie({
    name: "Ostrów Wielkopolski",
    slug: "ostrow-wielkopolski",
    population: 71_000,
    neighborSlugs: ["kalisz", "odolanow", "nowe-skalmierzyce", "raszkow", "pleszew"],
  }),
  miastoWielkopolskie({
    name: "Gniezno",
    slug: "gniezno",
    population: 67_000,
    neighborSlugs: ["wrzesnia", "czerniejewo", "trzemeszno", "klecko", "witkowo"],
  }),
  miastoWielkopolskie({
    name: "Leszno",
    slug: "leszno",
    population: 62_000,
    neighborSlugs: ["rydzyna", "osieczna", "koscian", "smigiel", "rawicz"],
  }),

  // ——— Miasta średnie i powiatowe ———
  miastoWielkopolskie({
    name: "Luboń",
    slug: "lubon",
    population: 32_000,
    neighborSlugs: ["puszczykowo", "mosina"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Swarzędz",
    slug: "swarzedz",
    population: 31_000,
    neighborSlugs: ["kostrzyn", "kornik", "pobiedziska"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Września",
    slug: "wrzesnia",
    population: 30_000,
    neighborSlugs: ["gniezno", "miloslaw", "nekla", "sroda-wielkopolska"],
  }),
  miastoWielkopolskie({
    name: "Śrem",
    slug: "srem",
    population: 29_000,
    neighborSlugs: ["kornik", "dolsk", "ksiaz-wielkopolski", "czempin"],
  }),
  miastoWielkopolskie({
    name: "Krotoszyn",
    slug: "krotoszyn",
    population: 29_000,
    neighborSlugs: ["kobylin", "zduny", "sulmierzyce", "kozmin-wielkopolski", "gostyn"],
  }),
  miastoWielkopolskie({
    name: "Turek",
    slug: "turek",
    population: 26_000,
    neighborSlugs: ["tuliszkow", "kolo", "konin"],
  }),
  miastoWielkopolskie({
    name: "Jarocin",
    slug: "jarocin",
    population: 25_000,
    neighborSlugs: ["pleszew", "zerkow", "kozmin-wielkopolski"],
  }),
  miastoWielkopolskie({
    name: "Wągrowiec",
    slug: "wagrowiec",
    population: 25_000,
    neighborSlugs: ["rogozno", "skoki", "golancz", "chodziez"],
  }),
  miastoWielkopolskie({
    name: "Kościan",
    slug: "koscian",
    population: 24_000,
    neighborSlugs: ["smigiel", "czempin", "krzywin", "leszno", "grodzisk-wielkopolski"],
  }),
  miastoWielkopolskie({
    name: "Koło",
    slug: "kolo",
    population: 22_000,
    neighborSlugs: ["klodawa", "dabie", "turek", "sompolno"],
  }),
  miastoWielkopolskie({
    name: "Środa Wielkopolska",
    slug: "sroda-wielkopolska",
    population: 22_000,
    neighborSlugs: ["kornik", "wrzesnia"],
  }),
  miastoWielkopolskie({
    name: "Rawicz",
    slug: "rawicz",
    population: 21_000,
    neighborSlugs: ["miejska-gorka", "bojanowo", "jutrosin", "gora", "leszno"],
  }),
  miastoWielkopolskie({
    name: "Gostyń",
    slug: "gostyn",
    population: 20_000,
    neighborSlugs: ["krobia", "poniec", "krotoszyn", "borek-wielkopolski"],
  }),
  miastoWielkopolskie({
    name: "Szamotuły",
    slug: "szamotuly",
    population: 19_000,
    neighborSlugs: ["pniewy", "wronki", "oborniki", "obrzycko"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Oborniki",
    slug: "oborniki",
    population: 18_000,
    neighborSlugs: ["rogozno", "szamotuly", "murowana-goslina", "obrzycko"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Chodzież",
    slug: "chodziez",
    population: 18_000,
    neighborSlugs: ["pila", "wagrowiec", "szamocin", "margonin", "ujscie"],
  }),
  miastoWielkopolskie({
    name: "Złotów",
    slug: "zlotow",
    population: 18_000,
    neighborSlugs: ["krajenka", "jastrowie", "okonek", "pila"],
  }),
  miastoWielkopolskie({
    name: "Trzcianka",
    slug: "trzcianka",
    population: 17_000,
    neighborSlugs: ["pila", "czarnkow", "krzyz-wielkopolski", "wielen"],
  }),
  miastoWielkopolskie({
    name: "Pleszew",
    slug: "pleszew",
    population: 17_000,
    neighborSlugs: ["jarocin", "ostrow-wielkopolski", "chocz", "dobrzyca"],
  }),
  miastoWielkopolskie({
    name: "Nowy Tomyśl",
    slug: "nowy-tomysl",
    population: 15_000,
    neighborSlugs: ["opalenica", "zbaszyn", "grodzisk-wielkopolski", "lwowek"],
  }),
  miastoWielkopolskie({
    name: "Kępno",
    slug: "kepno",
    population: 14_000,
    neighborSlugs: ["ostrzeszow", "sycow", "wieruszow"],
  }),
  miastoWielkopolskie({
    name: "Ostrzeszów",
    slug: "ostrzeszow",
    population: 14_000,
    neighborSlugs: ["kepno", "grabow-nad-prosna", "mikstat", "ostrow-wielkopolski"],
  }),
  miastoWielkopolskie({
    name: "Grodzisk Wielkopolski",
    slug: "grodzisk-wielkopolski",
    population: 14_000,
    neighborSlugs: ["opalenica", "rakoniewice", "wolsztyn", "koscian", "buk"],
  }),
  miastoWielkopolskie({
    name: "Mosina",
    slug: "mosina",
    population: 14_000,
    neighborSlugs: ["puszczykowo", "kornik", "steszew", "lubon"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Słupca",
    slug: "slupca",
    population: 14_000,
    neighborSlugs: ["konin", "zagorow", "pyzdry", "wrzesnia"],
  }),
  miastoWielkopolskie({
    name: "Wolsztyn",
    slug: "wolsztyn",
    population: 13_000,
    neighborSlugs: ["rakoniewice", "grodzisk-wielkopolski", "zbaszyn"],
  }),
  miastoWielkopolskie({
    name: "Wronki",
    slug: "wronki",
    population: 11_000,
    neighborSlugs: ["szamotuly", "sierakow", "obrzycko", "czarnkow"],
  }),
  miastoWielkopolskie({
    name: "Czarnków",
    slug: "czarnkow",
    population: 11_000,
    neighborSlugs: ["trzcianka", "wronki", "ujscie", "wielen"],
  }),
  miastoWielkopolskie({
    name: "Rogoźno",
    slug: "rogozno",
    population: 11_000,
    neighborSlugs: ["oborniki", "wagrowiec", "murowana-goslina"],
  }),
  miastoWielkopolskie({
    name: "Międzychód",
    slug: "miedzychod",
    population: 10_000,
    neighborSlugs: ["sierakow", "pniewy", "lwowek"],
  }),
  miastoWielkopolskie({
    name: "Murowana Goślina",
    slug: "murowana-goslina",
    population: 10_000,
    neighborSlugs: ["oborniki", "rogozno", "pobiedziska", "skoki"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Puszczykowo",
    slug: "puszczykowo",
    population: 9_600,
    neighborSlugs: ["mosina", "lubon"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Kostrzyn",
    slug: "kostrzyn",
    population: 9_600,
    neighborSlugs: ["swarzedz", "pobiedziska", "nekla"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Opalenica",
    slug: "opalenica",
    population: 9_500,
    neighborSlugs: ["nowy-tomysl", "grodzisk-wielkopolski", "buk"],
  }),
  miastoWielkopolskie({
    name: "Kórnik",
    slug: "kornik",
    population: 8_500,
    neighborSlugs: ["srem", "mosina", "swarzedz", "sroda-wielkopolska"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Pobiedziska",
    slug: "pobiedziska",
    population: 9_500,
    neighborSlugs: ["swarzedz", "kostrzyn", "murowana-goslina", "gniezno"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Pniewy",
    slug: "pniewy",
    population: 7_600,
    neighborSlugs: ["szamotuly", "miedzychod", "lwowek", "buk"],
  }),
  miastoWielkopolskie({
    name: "Kłodawa",
    slug: "klodawa",
    population: 6_400,
    neighborSlugs: ["kolo", "dabie", "przedecz"],
  }),
  miastoWielkopolskie({
    name: "Buk",
    slug: "buk",
    population: 6_200,
    neighborSlugs: ["opalenica", "steszew", "pniewy", "grodzisk-wielkopolski"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Stęszew",
    slug: "steszew",
    population: 6_000,
    neighborSlugs: ["mosina", "buk", "koscian"],
    largerCitySlug: "poznan",
  }),
  miastoWielkopolskie({
    name: "Sieraków",
    slug: "sierakow",
    population: 6_000,
    neighborSlugs: ["miedzychod", "wronki", "obrzycko"],
  }),
  miastoWielkopolskie({
    name: "Śmigiel",
    slug: "smigiel",
    population: 5_600,
    neighborSlugs: ["koscian", "leszno", "osieczna", "krzywin"],
  }),
  miastoWielkopolskie({
    name: "Czempiń",
    slug: "czempin",
    population: 5_300,
    neighborSlugs: ["koscian", "srem", "krzywin"],
  }),
  miastoWielkopolskie({
    name: "Odolanów",
    slug: "odolanow",
    population: 5_100,
    neighborSlugs: ["ostrow-wielkopolski", "sulmierzyce", "raszkow"],
  }),
  miastoWielkopolskie({
    name: "Zbąszyń",
    slug: "zbaszyn",
    population: 7_000,
    neighborSlugs: ["nowy-tomysl", "wolsztyn", "rakoniewice"],
  }),
  miastoWielkopolskie({
    name: "Koźmin Wielkopolski",
    slug: "kozmin-wielkopolski",
    population: 6_500,
    neighborSlugs: ["krotoszyn", "jarocin", "borek-wielkopolski", "dobrzyca"],
  }),
  miastoWielkopolskie({
    name: "Krzyż Wielkopolski",
    slug: "krzyz-wielkopolski",
    population: 6_000,
    neighborSlugs: ["trzcianka", "wielen", "czarnkow"],
  }),
  miastoWielkopolskie({
    name: "Wieleń",
    slug: "wielen",
    population: 5_800,
    neighborSlugs: ["krzyz-wielkopolski", "czarnkow", "trzcianka"],
  }),
  miastoWielkopolskie({
    name: "Ujście",
    slug: "ujscie",
    population: 3_700,
    neighborSlugs: ["pila", "chodziez", "czarnkow"],
  }),
  miastoWielkopolskie({
    name: "Zduny",
    slug: "zduny",
    population: 4_400,
    neighborSlugs: ["krotoszyn", "sulmierzyce", "milicz"],
  }),
  miastoWielkopolskie({
    name: "Nowe Skalmierzyce",
    slug: "nowe-skalmierzyce",
    population: 4_400,
    neighborSlugs: ["ostrow-wielkopolski", "kalisz", "raszkow"],
  }),
  miastoWielkopolskie({
    name: "Golina",
    slug: "golina",
    population: 4_400,
    neighborSlugs: ["konin", "slupca", "rychwal"],
  }),
  miastoWielkopolskie({
    name: "Kleczew",
    slug: "kleczew",
    population: 4_200,
    neighborSlugs: ["konin", "slesin", "witkowo"],
  }),
  miastoWielkopolskie({
    name: "Krobia",
    slug: "krobia",
    population: 4_200,
    neighborSlugs: ["gostyn", "poniec", "miejska-gorka", "jutrosin"],
  }),
  miastoWielkopolskie({
    name: "Miłosław",
    slug: "miloslaw",
    population: 3_500,
    neighborSlugs: ["wrzesnia", "zerkow", "pyzdry"],
  }),
  miastoWielkopolskie({
    name: "Sompolno",
    slug: "sompolno",
    population: 3_500,
    neighborSlugs: ["slesin", "kolo", "dabie"],
  }),
  miastoWielkopolskie({
    name: "Tuliszków",
    slug: "tuliszkow",
    population: 3_300,
    neighborSlugs: ["turek", "konin", "rychwal"],
  }),
  miastoWielkopolskie({
    name: "Ślesin",
    slug: "slesin",
    population: 3_200,
    neighborSlugs: ["konin", "kleczew", "sompolno"],
  }),
  miastoWielkopolskie({
    name: "Nekla",
    slug: "nekla",
    population: 3_200,
    neighborSlugs: ["wrzesnia", "kostrzyn", "sroda-wielkopolska"],
  }),
  miastoWielkopolskie({
    name: "Miejska Górka",
    slug: "miejska-gorka",
    population: 3_200,
    neighborSlugs: ["rawicz", "krobia", "jutrosin", "poniec"],
  }),
  miastoWielkopolskie({
    name: "Pyzdry",
    slug: "pyzdry",
    population: 3_100,
    neighborSlugs: ["slupca", "miloslaw", "zagorow"],
  }),
  miastoWielkopolskie({
    name: "Zagórów",
    slug: "zagorow",
    population: 2_900,
    neighborSlugs: ["slupca", "pyzdry", "rychwal"],
  }),
  miastoWielkopolskie({
    name: "Sulmierzyce",
    slug: "sulmierzyce",
    population: 2_900,
    neighborSlugs: ["krotoszyn", "zduny", "odolanow", "milicz"],
  }),
  miastoWielkopolskie({
    name: "Rychwał",
    slug: "rychwal",
    population: 2_400,
    neighborSlugs: ["konin", "golina", "tuliszkow", "zagorow"],
  }),
  miastoWielkopolskie({
    name: "Książ Wielkopolski",
    slug: "ksiaz-wielkopolski",
    population: 2_700,
    neighborSlugs: ["srem", "dolsk"],
  }),
  miastoWielkopolskie({
    name: "Dolsk",
    slug: "dolsk",
    population: 1_500,
    neighborSlugs: ["srem", "ksiaz-wielkopolski", "gostyn"],
  }),
  miastoWielkopolskie({
    name: "Jutrosin",
    slug: "jutrosin",
    population: 1_900,
    neighborSlugs: ["rawicz", "miejska-gorka", "krobia", "milicz"],
  }),
  miastoWielkopolskie({
    name: "Mikstat",
    slug: "mikstat",
    population: 1_900,
    neighborSlugs: ["ostrzeszow", "grabow-nad-prosna", "ostrow-wielkopolski"],
  }),
  miastoWielkopolskie({
    name: "Grabów nad Prosną",
    slug: "grabow-nad-prosna",
    population: 2_000,
    neighborSlugs: ["ostrzeszow", "mikstat", "wieruszow"],
  }),
  miastoWielkopolskie({
    name: "Przedecz",
    slug: "przedecz",
    population: 1_700,
    neighborSlugs: ["klodawa", "kolo"],
  }),
  miastoWielkopolskie({
    name: "Stawiszyn",
    slug: "stawiszyn",
    population: 1_500,
    neighborSlugs: ["kalisz", "rychwal", "golina"],
  }),

  // ——— Małe miasta: Krajna, Pałuki, ziemia kaliska i pogranicze lubuskie ———
  miastoWielkopolskie({
    name: "Trzemeszno",
    slug: "trzemeszno",
    population: 7_500,
    neighborSlugs: ["gniezno", "witkowo", "klecko"],
  }),
  miastoWielkopolskie({
    name: "Witkowo",
    slug: "witkowo",
    population: 7_800,
    neighborSlugs: ["gniezno", "trzemeszno", "kleczew"],
  }),
  miastoWielkopolskie({
    name: "Kłecko",
    slug: "klecko",
    population: 2_700,
    neighborSlugs: ["gniezno", "trzemeszno", "skoki"],
  }),
  miastoWielkopolskie({
    name: "Czerniejewo",
    slug: "czerniejewo",
    population: 2_500,
    neighborSlugs: ["gniezno", "wrzesnia", "nekla"],
  }),
  miastoWielkopolskie({
    name: "Skoki",
    slug: "skoki",
    population: 4_200,
    neighborSlugs: ["wagrowiec", "murowana-goslina", "rogozno", "klecko"],
  }),
  miastoWielkopolskie({
    name: "Gołańcz",
    slug: "golancz",
    population: 3_300,
    neighborSlugs: ["wagrowiec", "margonin", "chodziez"],
  }),
  miastoWielkopolskie({
    name: "Margonin",
    slug: "margonin",
    population: 3_000,
    neighborSlugs: ["chodziez", "golancz", "szamocin"],
  }),
  miastoWielkopolskie({
    name: "Szamocin",
    slug: "szamocin",
    population: 4_200,
    neighborSlugs: ["chodziez", "margonin", "wyrzysk"],
  }),
  miastoWielkopolskie({
    name: "Wyrzysk",
    slug: "wyrzysk",
    population: 5_100,
    neighborSlugs: ["pila", "szamocin", "krajenka"],
  }),
  miastoWielkopolskie({
    name: "Krajenka",
    slug: "krajenka",
    population: 3_600,
    neighborSlugs: ["zlotow", "wyrzysk", "jastrowie"],
  }),
  miastoWielkopolskie({
    name: "Jastrowie",
    slug: "jastrowie",
    population: 8_300,
    neighborSlugs: ["zlotow", "okonek", "krajenka"],
  }),
  miastoWielkopolskie({
    name: "Okonek",
    slug: "okonek",
    population: 3_900,
    neighborSlugs: ["jastrowie", "zlotow"],
  }),
  miastoWielkopolskie({
    name: "Obrzycko",
    slug: "obrzycko",
    population: 2_400,
    neighborSlugs: ["szamotuly", "wronki", "oborniki", "sierakow"],
  }),
  miastoWielkopolskie({
    name: "Lwówek",
    slug: "lwowek",
    population: 3_000,
    neighborSlugs: ["pniewy", "nowy-tomysl", "miedzychod"],
  }),
  miastoWielkopolskie({
    name: "Rakoniewice",
    slug: "rakoniewice",
    population: 3_600,
    neighborSlugs: ["grodzisk-wielkopolski", "wolsztyn", "zbaszyn"],
  }),
  miastoWielkopolskie({
    name: "Osieczna",
    slug: "osieczna",
    population: 2_400,
    neighborSlugs: ["leszno", "smigiel", "krzywin"],
  }),
  miastoWielkopolskie({
    name: "Rydzyna",
    slug: "rydzyna",
    population: 2_800,
    neighborSlugs: ["leszno", "poniec", "bojanowo"],
  }),
  miastoWielkopolskie({
    name: "Krzywiń",
    slug: "krzywin",
    population: 1_700,
    neighborSlugs: ["koscian", "smigiel", "czempin", "osieczna"],
  }),
  miastoWielkopolskie({
    name: "Poniec",
    slug: "poniec",
    population: 2_800,
    neighborSlugs: ["gostyn", "krobia", "rydzyna", "miejska-gorka"],
  }),
  miastoWielkopolskie({
    name: "Bojanowo",
    slug: "bojanowo",
    population: 3_000,
    neighborSlugs: ["rawicz", "rydzyna", "miejska-gorka"],
  }),
  miastoWielkopolskie({
    name: "Kobylin",
    slug: "kobylin",
    population: 3_100,
    neighborSlugs: ["krotoszyn", "jutrosin", "krobia", "zduny"],
  }),
  miastoWielkopolskie({
    name: "Borek Wielkopolski",
    slug: "borek-wielkopolski",
    population: 2_600,
    neighborSlugs: ["gostyn", "kozmin-wielkopolski", "jarocin"],
  }),
  miastoWielkopolskie({
    name: "Dobrzyca",
    slug: "dobrzyca",
    population: 2_500,
    neighborSlugs: ["pleszew", "kozmin-wielkopolski", "raszkow"],
  }),
  miastoWielkopolskie({
    name: "Raszków",
    slug: "raszkow",
    population: 2_100,
    neighborSlugs: ["ostrow-wielkopolski", "odolanow", "nowe-skalmierzyce", "dobrzyca"],
  }),
  miastoWielkopolskie({
    name: "Żerków",
    slug: "zerkow",
    population: 2_100,
    neighborSlugs: ["jarocin", "miloslaw", "pyzdry"],
  }),
  miastoWielkopolskie({
    name: "Chocz",
    slug: "chocz",
    population: 1_700,
    neighborSlugs: ["pleszew", "stawiszyn", "zagorow"],
  }),
  miastoWielkopolskie({
    name: "Dąbie",
    slug: "dabie",
    population: 2_000,
    neighborSlugs: ["kolo", "klodawa", "sompolno"],
  }),
];
