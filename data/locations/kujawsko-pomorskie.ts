import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo kujawsko-pomorskie — trzecie z siedmiu ostatnich
 * (wrzesień 2026).
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH.
 *
 * PO PIERWSZE, i to jest cecha unikalna w skali kraju: DWIE STOLICE.
 * Bydgoszcz i Toruń dzielą się funkcjami wojewódzkimi i rywalizują
 * ze sobą od dziesięcioleci. Dla nas znaczy to jedno praktyczne: nie ma
 * tu jednego naturalnego centrum, do którego wszyscy jeżdżą, więc
 * nie budujemy treści na schemacie „dojazd do stolicy regionu".
 *
 * PO DRUGIE: Kujawy to ziemia bardzo dobra i bardzo intensywnie uprawiana
 * — burak, zboże, cukrownie. Podobnie jak w Wielkopolsce produkt bywa
 * własny, a nie kupiony.
 *
 * PO TRZECIE: uzdrowiska Ciechocinek i Inowrocław, oraz pas nadwiślański
 * z Toruniem, Chełmnem i Świeciem — miasta zabytkowe, żyjące częściowo
 * z ruchu turystycznego, ale bez sezonu tak ostrego jak nad morzem.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoKujawskoPomorskie(input: {
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
    wojewodztwoSlug: "kujawsko-pomorskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Kujawy i Pomorze",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: 31,
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
 * BYDGOSZCZY I TORUNIA TU NIE MA — oba siedzą już w `miasta.ts`.
 *
 * OSIEK (w powiecie brodnickim) NIE MA TU WIERSZA — slug `osiek` jest
 * zajęty przez wdrożoną gminę Osiek w powiecie oświęcimskim. Ta sama
 * historia co ze świętokrzyskim Osiekiem, opolskim Olesnem i turecką Dobrą.
 */
export const KUJAWSKO_POMORSKIE_AGI: Location[] = [
  // ——— Największe miasta ———
  miastoKujawskoPomorskie({ name: "Włocławek", slug: "wloclawek", population: 106_000, neighborSlugs: ["kowal", "brzesc-kujawski", "lubraniec", "chodecz"] }),
  miastoKujawskoPomorskie({ name: "Grudziądz", slug: "grudziadz", population: 92_000, neighborSlugs: ["radzyn-chelminski", "lasin", "chelmno", "jablonowo-pomorskie"] }),
  miastoKujawskoPomorskie({ name: "Inowrocław", slug: "inowroclaw", population: 71_000, neighborSlugs: ["kruszwica", "janikowo", "pakosc", "gniewkowo"] }),
  miastoKujawskoPomorskie({ name: "Brodnica", slug: "brodnica", population: 28_000, neighborSlugs: ["jablonowo-pomorskie", "gorzno", "golub-dobrzyn"] }),
  miastoKujawskoPomorskie({ name: "Świecie", slug: "swiecie", population: 25_000, neighborSlugs: ["chelmno", "nowe", "koronowo"] }),
  miastoKujawskoPomorskie({ name: "Chełmno", slug: "chelmno", population: 19_000, neighborSlugs: ["swiecie", "grudziadz", "chelmza", "unislaw"] }),
  miastoKujawskoPomorskie({ name: "Nakło nad Notecią", slug: "naklo-nad-notecia", population: 18_000, neighborSlugs: ["szubin", "kcynia", "mrocza", "wiecbork"] }),
  miastoKujawskoPomorskie({ name: "Solec Kujawski", slug: "solec-kujawski", population: 15_000, neighborSlugs: ["gniewkowo", "koronowo"], largerCitySlug: "bydgoszcz" }),
  miastoKujawskoPomorskie({ name: "Chełmża", slug: "chelmza", population: 14_000, neighborSlugs: ["chelmno", "kowalewo-pomorskie", "unislaw"], largerCitySlug: "torun" }),
  miastoKujawskoPomorskie({ name: "Rypin", slug: "rypin", population: 16_000, neighborSlugs: ["golub-dobrzyn", "skepe", "lipno"] }),
  miastoKujawskoPomorskie({ name: "Aleksandrów Kujawski", slug: "aleksandrow-kujawski", population: 12_000, neighborSlugs: ["ciechocinek", "nieszawa", "radziejow"], largerCitySlug: "torun" }),
  miastoKujawskoPomorskie({ name: "Lipno", slug: "lipno", population: 14_000, neighborSlugs: ["skepe", "dobrzyn-nad-wisla", "rypin", "lubien-kujawski"] }),
  miastoKujawskoPomorskie({ name: "Koronowo", slug: "koronowo", population: 11_000, neighborSlugs: ["swiecie", "mrocza", "solec-kujawski"], largerCitySlug: "bydgoszcz" }),
  miastoKujawskoPomorskie({ name: "Żnin", slug: "znin", population: 14_000, neighborSlugs: ["barcin", "szubin", "labiszyn", "kcynia"] }),
  miastoKujawskoPomorskie({ name: "Mogilno", slug: "mogilno", population: 12_000, neighborSlugs: ["strzelno", "barcin", "janikowo"] }),
  miastoKujawskoPomorskie({ name: "Tuchola", slug: "tuchola", population: 13_000, neighborSlugs: ["wiecbork", "sepolno-krajenskie", "swiecie"] }),
  miastoKujawskoPomorskie({ name: "Wąbrzeźno", slug: "wabrzezno", population: 13_000, neighborSlugs: ["kowalewo-pomorskie", "chelmza", "jablonowo-pomorskie"] }),
  miastoKujawskoPomorskie({ name: "Szubin", slug: "szubin", population: 9_500, neighborSlugs: ["naklo-nad-notecia", "znin", "labiszyn"] }),
  miastoKujawskoPomorskie({ name: "Golub-Dobrzyń", slug: "golub-dobrzyn", population: 12_000, neighborSlugs: ["kowalewo-pomorskie", "rypin", "brodnica"] }),
  miastoKujawskoPomorskie({ name: "Ciechocinek", slug: "ciechocinek", population: 10_000, neighborSlugs: ["aleksandrow-kujawski", "nieszawa"] }),
  miastoKujawskoPomorskie({ name: "Kruszwica", slug: "kruszwica", population: 9_000, neighborSlugs: ["inowroclaw", "strzelno", "radziejow"] }),
  miastoKujawskoPomorskie({ name: "Sępólno Krajeńskie", slug: "sepolno-krajenskie", population: 9_000, neighborSlugs: ["wiecbork", "tuchola", "kamien-krajenski"] }),
  miastoKujawskoPomorskie({ name: "Janikowo", slug: "janikowo", population: 9_000, neighborSlugs: ["inowroclaw", "pakosc", "mogilno"] }),
  miastoKujawskoPomorskie({ name: "Barcin", slug: "barcin", population: 7_500, neighborSlugs: ["znin", "pakosc", "mogilno"] }),
  miastoKujawskoPomorskie({ name: "Brześć Kujawski", slug: "brzesc-kujawski", population: 4_600, neighborSlugs: ["wloclawek", "lubraniec", "radziejow"] }),
  miastoKujawskoPomorskie({ name: "Gniewkowo", slug: "gniewkowo", population: 7_200, neighborSlugs: ["inowroclaw", "solec-kujawski", "aleksandrow-kujawski"] }),
  miastoKujawskoPomorskie({ name: "Radziejów", slug: "radziejow", population: 5_600, neighborSlugs: ["piotrkow-kujawski", "kruszwica", "aleksandrow-kujawski", "brzesc-kujawski"] }),
  miastoKujawskoPomorskie({ name: "Więcbork", slug: "wiecbork", population: 5_900, neighborSlugs: ["sepolno-krajenskie", "naklo-nad-notecia", "tuchola"] }),
  miastoKujawskoPomorskie({ name: "Strzelno", slug: "strzelno", population: 5_800, neighborSlugs: ["mogilno", "kruszwica", "piotrkow-kujawski"] }),
  miastoKujawskoPomorskie({ name: "Kcynia", slug: "kcynia", population: 4_600, neighborSlugs: ["naklo-nad-notecia", "znin", "szubin"] }),
  miastoKujawskoPomorskie({ name: "Pakość", slug: "pakosc", population: 5_600, neighborSlugs: ["inowroclaw", "janikowo", "barcin"] }),
  miastoKujawskoPomorskie({ name: "Kowalewo Pomorskie", slug: "kowalewo-pomorskie", population: 4_100, neighborSlugs: ["golub-dobrzyn", "chelmza", "wabrzezno"] }),
  miastoKujawskoPomorskie({ name: "Nowe", slug: "nowe", population: 6_000, neighborSlugs: ["swiecie", "gniew"] }),
  miastoKujawskoPomorskie({ name: "Łabiszyn", slug: "labiszyn", population: 4_400, neighborSlugs: ["szubin", "znin", "barcin"] }),
  miastoKujawskoPomorskie({ name: "Jabłonowo Pomorskie", slug: "jablonowo-pomorskie", population: 3_800, neighborSlugs: ["brodnica", "wabrzezno", "grudziadz"] }),
  miastoKujawskoPomorskie({ name: "Lubraniec", slug: "lubraniec", population: 3_000, neighborSlugs: ["wloclawek", "brzesc-kujawski", "izbica-kujawska"] }),
  miastoKujawskoPomorskie({ name: "Skępe", slug: "skepe", population: 3_400, neighborSlugs: ["lipno", "rypin"] }),
  miastoKujawskoPomorskie({ name: "Piotrków Kujawski", slug: "piotrkow-kujawski", population: 4_500, neighborSlugs: ["radziejow", "strzelno", "izbica-kujawska"] }),
  miastoKujawskoPomorskie({ name: "Izbica Kujawska", slug: "izbica-kujawska", population: 2_700, neighborSlugs: ["lubraniec", "piotrkow-kujawski", "chodecz"] }),
  miastoKujawskoPomorskie({ name: "Kowal", slug: "kowal", population: 3_400, neighborSlugs: ["wloclawek", "chodecz", "lubien-kujawski"] }),
  miastoKujawskoPomorskie({ name: "Chodecz", slug: "chodecz", population: 1_900, neighborSlugs: ["kowal", "izbica-kujawska", "lubraniec"] }),
  miastoKujawskoPomorskie({ name: "Lubień Kujawski", slug: "lubien-kujawski", population: 1_400, neighborSlugs: ["kowal", "lipno"] }),
  miastoKujawskoPomorskie({ name: "Dobrzyń nad Wisłą", slug: "dobrzyn-nad-wisla", population: 2_100, neighborSlugs: ["lipno", "skepe"] }),
  miastoKujawskoPomorskie({ name: "Nieszawa", slug: "nieszawa", population: 1_800, neighborSlugs: ["aleksandrow-kujawski", "ciechocinek"] }),
  miastoKujawskoPomorskie({ name: "Radzyń Chełmiński", slug: "radzyn-chelminski", population: 1_800, neighborSlugs: ["grudziadz", "lasin", "wabrzezno"] }),
  miastoKujawskoPomorskie({ name: "Łasin", slug: "lasin", population: 3_300, neighborSlugs: ["grudziadz", "radzyn-chelminski"] }),
  miastoKujawskoPomorskie({ name: "Górzno", slug: "gorzno", population: 1_400, neighborSlugs: ["brodnica"] }),
  miastoKujawskoPomorskie({ name: "Mrocza", slug: "mrocza", population: 4_300, neighborSlugs: ["naklo-nad-notecia", "koronowo"] }),
  miastoKujawskoPomorskie({ name: "Kamień Krajeński", slug: "kamien-krajenski", population: 2_300, neighborSlugs: ["sepolno-krajenskie", "tuchola"] }),
  miastoKujawskoPomorskie({ name: "Unisław", slug: "unislaw", population: 2_500, neighborSlugs: ["chelmno", "chelmza"] }),
];
