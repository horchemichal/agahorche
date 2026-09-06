import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo lubelskie — czwarte i ostatnie z decyzji Michała z września
 * 2026 („robimy strony lokalne dla śląskiego, podkarpackiego,
 * świętokrzyskiego i lubelskiego, wszystkie miasta”; Aga potwierdziła,
 * że dojeżdża do wszystkich czterech).
 *
 * DLACZEGO NA KOŃCU. Bo jest najdalej. Śląskie i świętokrzyskie graniczą
 * z Małopolską bezpośrednio, podkarpackie jest przedłużeniem tras, którymi
 * Aga i tak jeździ — a Lubelszczyzna zaczyna się tam, gdzie kończy się
 * Sandomierz, i ciągnie przez trzysta kilometrów aż do granicy państwa.
 * Strony miast lubelskich muszą to uwzględniać w jednym konkretnym miejscu:
 * NIE WOLNO TU OBIECYWAĆ, ŻE „WPADNĘ WIECZOREM”. Wyjazd na Podlasie
 * albo w Bieszczady lubelskie planuje się osobno i mówi o tym wprost.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD TRZECH POPRZEDNICH. Jest największy
 * z całej czwórki powierzchniowo i najbardziej rozstrzelony: dwa duże
 * ośrodki na północy (Biała Podlaska, Międzyrzec), Lublin z pierścieniem
 * miast w środku, Roztocze i Zamojszczyzna na południu, i pas przygraniczny
 * na wschodzie, gdzie granica państwa jest częścią codzienności, a nie
 * abstrakcją. Cztery różne światy — i cztery różne rozmowy o kuchni.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną. Flaga `indexable` nie jest
 * wpisywana ręcznie — wynika z tego, czy dla sluga istnieje wpis
 * w `city-content`.
 *
 * LUDNOŚĆ jest zaokrąglona i oznaczona jako do weryfikacji. Nie jest nigdzie
 * pokazywana użytkownikowi — służy wyłącznie do porządkowania listy.
 */
function miastoLubelskie(input: {
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
    wojewodztwoSlug: "lubelskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Lubelszczyzna",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /*
     * Za świętokrzyskim (22). Rynek jest tu większy niż w świętokrzyskiem,
     * ale odległość największa z całej czwórki — więc przy wyborze,
     * co linkować najpierw, lubelskie idzie na koniec kolejki.
     */
    seoPriority: 24,
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
 * LUBLINA TU NIE MA — czwarty raz ta sama historia.
 * Lublin siedzi w `miasta.ts` jako część ogólnopolskiej próbki Tier A i ma
 * tam tę samą regułę indeksowania. Dopisanie go tutaj dałoby dwa wiersze
 * o tym samym `locationId`. Treść dla Lublina piszemy normalnie, tylko
 * wiersz ma gdzie indziej — jak przy Katowicach, Rzeszowie i Kielcach.
 */
export const LUBELSKIE_AGI: Location[] = [
  // ——— Największe miasta regionu ———
  miastoLubelskie({
    name: "Zamość",
    slug: "zamosc",
    population: 62_000,
    neighborSlugs: ["szczebrzeszyn", "krasnystaw", "tomaszow-lubelski", "zwierzyniec", "hrubieszow"],
  }),
  miastoLubelskie({
    name: "Chełm",
    slug: "chelm",
    population: 60_000,
    neighborSlugs: ["krasnystaw", "wlodawa", "hrubieszow", "rejowiec-fabryczny"],
  }),
  miastoLubelskie({
    name: "Biała Podlaska",
    slug: "biala-podlaska",
    population: 56_000,
    neighborSlugs: ["miedzyrzec-podlaski", "terespol", "parczew", "radzyn-podlaski"],
  }),
  miastoLubelskie({
    name: "Puławy",
    slug: "pulawy",
    population: 46_000,
    neighborSlugs: ["naleczow", "kazimierz-dolny", "ryki", "deblin", "opole-lubelskie"],
  }),
  miastoLubelskie({
    name: "Świdnik",
    slug: "swidnik",
    population: 38_000,
    neighborSlugs: ["leczna", "piaski", "lubartow"],
    largerCitySlug: "lublin",
  }),
  miastoLubelskie({
    name: "Kraśnik",
    slug: "krasnik",
    population: 34_000,
    neighborSlugs: ["janow-lubelski", "urzedow", "annopol", "belzyce"],
  }),
  miastoLubelskie({
    name: "Łuków",
    slug: "lukow",
    population: 29_000,
    neighborSlugs: ["radzyn-podlaski", "stoczek-lukowski", "miedzyrzec-podlaski", "ryki"],
  }),
  miastoLubelskie({
    name: "Biłgoraj",
    slug: "bilgoraj",
    population: 26_000,
    neighborSlugs: ["tarnogrod", "frampol", "jozefow", "zwierzyniec", "janow-lubelski"],
  }),
  miastoLubelskie({
    name: "Lubartów",
    slug: "lubartow",
    population: 21_000,
    neighborSlugs: ["leczna", "ostrow-lubelski", "kock", "swidnik"],
  }),
  miastoLubelskie({
    name: "Łęczna",
    slug: "leczna",
    population: 19_000,
    neighborSlugs: ["swidnik", "lubartow", "chelm", "ostrow-lubelski"],
  }),
  miastoLubelskie({
    name: "Tomaszów Lubelski",
    slug: "tomaszow-lubelski",
    population: 19_000,
    neighborSlugs: ["zamosc", "jozefow", "krasnobrod", "hrubieszow"],
  }),
  miastoLubelskie({
    name: "Krasnystaw",
    slug: "krasnystaw",
    population: 18_000,
    neighborSlugs: ["chelm", "zamosc", "rejowiec-fabryczny", "piaski"],
  }),
  miastoLubelskie({
    name: "Hrubieszów",
    slug: "hrubieszow",
    population: 17_000,
    neighborSlugs: ["zamosc", "chelm", "tomaszow-lubelski"],
  }),
  miastoLubelskie({
    name: "Międzyrzec Podlaski",
    slug: "miedzyrzec-podlaski",
    population: 16_000,
    neighborSlugs: ["biala-podlaska", "radzyn-podlaski", "lukow"],
  }),
  miastoLubelskie({
    name: "Dęblin",
    slug: "deblin",
    population: 15_000,
    neighborSlugs: ["ryki", "pulawy", "stoczek-lukowski"],
  }),
  miastoLubelskie({
    name: "Radzyń Podlaski",
    slug: "radzyn-podlaski",
    population: 15_000,
    neighborSlugs: ["miedzyrzec-podlaski", "lukow", "parczew", "kock"],
  }),
  miastoLubelskie({
    name: "Włodawa",
    slug: "wlodawa",
    population: 13_000,
    neighborSlugs: ["chelm", "parczew"],
  }),

  // ——— Miasta powiatowe i mniejsze ośrodki ———
  miastoLubelskie({
    name: "Janów Lubelski",
    slug: "janow-lubelski",
    population: 11_000,
    neighborSlugs: ["krasnik", "bilgoraj", "modliborzyce", "frampol"],
  }),
  miastoLubelskie({
    name: "Parczew",
    slug: "parczew",
    population: 10_000,
    neighborSlugs: ["radzyn-podlaski", "wlodawa", "ostrow-lubelski", "biala-podlaska"],
  }),
  miastoLubelskie({
    name: "Ryki",
    slug: "ryki",
    population: 9_500,
    neighborSlugs: ["deblin", "pulawy", "lukow", "stoczek-lukowski"],
  }),
  miastoLubelskie({
    name: "Poniatowa",
    slug: "poniatowa",
    population: 9_000,
    neighborSlugs: ["opole-lubelskie", "belzyce", "naleczow"],
  }),
  miastoLubelskie({
    name: "Opole Lubelskie",
    slug: "opole-lubelskie",
    population: 8_500,
    neighborSlugs: ["poniatowa", "pulawy", "jozefow-nad-wisla", "belzyce"],
  }),
  miastoLubelskie({
    name: "Bełżyce",
    slug: "belzyce",
    population: 6_500,
    neighborSlugs: ["poniatowa", "bychawa", "krasnik", "opole-lubelskie"],
    largerCitySlug: "lublin",
  }),
  miastoLubelskie({
    name: "Terespol",
    slug: "terespol",
    population: 5_500,
    neighborSlugs: ["biala-podlaska"],
  }),
  miastoLubelskie({
    name: "Szczebrzeszyn",
    slug: "szczebrzeszyn",
    population: 5_000,
    neighborSlugs: ["zamosc", "zwierzyniec", "bilgoraj", "frampol"],
  }),
  miastoLubelskie({
    name: "Bychawa",
    slug: "bychawa",
    population: 5_000,
    neighborSlugs: ["belzyce", "piaski", "krasnik"],
    largerCitySlug: "lublin",
  }),
  miastoLubelskie({
    name: "Rejowiec Fabryczny",
    slug: "rejowiec-fabryczny",
    population: 4_400,
    neighborSlugs: ["chelm", "krasnystaw"],
  }),
  miastoLubelskie({
    name: "Nałęczów",
    slug: "naleczow",
    population: 3_800,
    neighborSlugs: ["pulawy", "kazimierz-dolny", "poniatowa", "belzyce"],
  }),
  miastoLubelskie({
    name: "Kazimierz Dolny",
    slug: "kazimierz-dolny",
    population: 3_400,
    neighborSlugs: ["pulawy", "naleczow", "opole-lubelskie"],
  }),
  miastoLubelskie({
    name: "Kock",
    slug: "kock",
    population: 3_300,
    neighborSlugs: ["lubartow", "radzyn-podlaski", "ostrow-lubelski"],
  }),
  miastoLubelskie({
    name: "Zwierzyniec",
    slug: "zwierzyniec",
    population: 3_200,
    neighborSlugs: ["szczebrzeszyn", "bilgoraj", "jozefow", "zamosc"],
  }),
  miastoLubelskie({
    name: "Tarnogród",
    slug: "tarnogrod",
    population: 3_200,
    neighborSlugs: ["bilgoraj", "frampol"],
  }),
  miastoLubelskie({
    name: "Krasnobród",
    slug: "krasnobrod",
    population: 3_200,
    neighborSlugs: ["tomaszow-lubelski", "zwierzyniec", "jozefow"],
  }),
  miastoLubelskie({
    name: "Annopol",
    slug: "annopol",
    population: 2_600,
    neighborSlugs: ["krasnik", "jozefow-nad-wisla", "zawichost"],
  }),
  miastoLubelskie({
    name: "Józefów",
    slug: "jozefow",
    population: 2_500,
    neighborSlugs: ["zwierzyniec", "krasnobrod", "bilgoraj", "tomaszow-lubelski"],
  }),
  miastoLubelskie({
    name: "Stoczek Łukowski",
    slug: "stoczek-lukowski",
    population: 2_500,
    neighborSlugs: ["lukow", "ryki", "deblin"],
  }),
  miastoLubelskie({
    name: "Piaski",
    slug: "piaski",
    population: 2_500,
    neighborSlugs: ["swidnik", "krasnystaw", "bychawa"],
    largerCitySlug: "lublin",
  }),
  miastoLubelskie({
    name: "Ostrów Lubelski",
    slug: "ostrow-lubelski",
    population: 2_000,
    neighborSlugs: ["lubartow", "parczew", "leczna", "kock"],
  }),
  miastoLubelskie({
    name: "Urzędów",
    slug: "urzedow",
    population: 1_600,
    neighborSlugs: ["krasnik", "annopol"],
  }),
  miastoLubelskie({
    name: "Modliborzyce",
    slug: "modliborzyce",
    population: 1_500,
    neighborSlugs: ["janow-lubelski", "krasnik"],
  }),
  miastoLubelskie({
    name: "Frampol",
    slug: "frampol",
    population: 1_400,
    neighborSlugs: ["bilgoraj", "szczebrzeszyn", "janow-lubelski", "tarnogrod"],
  }),
  miastoLubelskie({
    name: "Józefów nad Wisłą",
    slug: "jozefow-nad-wisla",
    population: 1_000,
    neighborSlugs: ["opole-lubelskie", "annopol"],
  }),
];
