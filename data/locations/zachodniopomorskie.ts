import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo zachodniopomorskie — czwarte z siedmiu ostatnich
 * (wrzesień 2026).
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH.
 *
 * PO PIERWSZE: to najrzadziej zaludniony pas Polski po Warmii i Mazurach,
 * z ogromnymi odległościami między miastami. Ze Szczecina do Koszalina
 * jedzie się dłużej niż z Krakowa do Rzeszowa. Dla treści oznacza to,
 * że OBIETNICA „JESTEM TU PO DRODZE" BYŁABY TU KŁAMSTWEM — i tak jak
 * w Białej Podlaskiej trzeba to powiedzieć wprost.
 *
 * PO DRUGIE: dwa zupełnie różne bieguny. Szczecin ze swoim obszarem
 * podmiejskim patrzy na zachód i żyje inaczej niż Koszalin, Wałcz
 * czy Szczecinek.
 *
 * PO TRZECIE: pas nadmorski od Świnoujścia po Darłowo — sezon jeszcze
 * krótszy i bardziej skoncentrowany niż na Pomorzu, bo bez zaplecza
 * dużego miasta poza sezonem.
 *
 * PO CZWARTE: to region po całkowitej wymianie ludności po 1945 roku,
 * z tą samą konsekwencją co na Dolnym Śląsku — nie ma tu jednej kuchni
 * regionalnej. Obowiązuje ta sama ostrożność: pytamy, skąd jest przepis,
 * i nie opowiadamy ludziom ich historii.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoZachodniopomorskie(input: {
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
    wojewodztwoSlug: "zachodniopomorskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Pomorze Zachodnie",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: 32,
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
 * SZCZECINA TU NIE MA — siedzi już w `miasta.ts`.
 *
 * DOBREJ (Nowogardzkiej) tu nie ma, bo slug `dobra` zajmuje wdrożona
 * gmina Dobra w powiecie limanowskim. DĘBNA również nie ma, bo `debno`
 * zajmuje wdrożona gmina Dębno w powiecie brzeskim, w Małopolsce.
 * Obie musiałyby wejść pod innym slugiem i wtedy trzeba świadomie
 * zdecydować, jak pogodzić to z tym, co ludzie wpisują w wyszukiwarkę.
 */
export const ZACHODNIOPOMORSKIE_AGI: Location[] = [
  // ——— Największe miasta ———
  miastoZachodniopomorskie({ name: "Koszalin", slug: "koszalin", population: 105_000, neighborSlugs: ["sianow", "mielno", "polanow", "bobolice"] }),
  miastoZachodniopomorskie({ name: "Stargard", slug: "stargard", population: 66_000, neighborSlugs: ["pyrzyce", "chociwel", "suchan", "goleniow"], largerCitySlug: "szczecin" }),
  miastoZachodniopomorskie({ name: "Kołobrzeg", slug: "kolobrzeg", population: 46_000, neighborSlugs: ["gryfice", "karlino", "bialogard", "trzebiatow"] }),
  miastoZachodniopomorskie({ name: "Świnoujście", slug: "swinoujscie", population: 41_000, neighborSlugs: ["miedzyzdroje", "wolin"] }),
  miastoZachodniopomorskie({ name: "Szczecinek", slug: "szczecinek", population: 39_000, neighborSlugs: ["borne-sulinowo", "czaplinek", "bialy-bor", "polczyn-zdroj"] }),
  miastoZachodniopomorskie({ name: "Police", slug: "police", population: 31_000, neighborSlugs: ["goleniow", "nowe-warpno"], largerCitySlug: "szczecin" }),
  miastoZachodniopomorskie({ name: "Wałcz", slug: "walcz", population: 24_000, neighborSlugs: ["tuczno", "czlopa", "miroslawiec", "kalisz-pomorski"] }),
  miastoZachodniopomorskie({ name: "Goleniów", slug: "goleniow", population: 22_000, neighborSlugs: ["police", "nowogard", "stargard", "maszewo"], largerCitySlug: "szczecin" }),
  miastoZachodniopomorskie({ name: "Białogard", slug: "bialogard", population: 23_000, neighborSlugs: ["karlino", "tychowo", "polczyn-zdroj", "kolobrzeg"] }),
  miastoZachodniopomorskie({ name: "Gryfino", slug: "gryfino", population: 21_000, neighborSlugs: ["chojna", "moryn", "pyrzyce"], largerCitySlug: "szczecin" }),
  miastoZachodniopomorskie({ name: "Nowogard", slug: "nowogard", population: 16_000, neighborSlugs: ["goleniow", "golczewo", "maszewo", "ploty"] }),
  miastoZachodniopomorskie({ name: "Choszczno", slug: "choszczno", population: 15_000, neighborSlugs: ["recz", "drawno", "pelczyce"] }),
  miastoZachodniopomorskie({ name: "Gryfice", slug: "gryfice", population: 16_000, neighborSlugs: ["trzebiatow", "ploty", "kolobrzeg"] }),
  miastoZachodniopomorskie({ name: "Świdwin", slug: "swidwin", population: 15_000, neighborSlugs: ["polczyn-zdroj", "bialogard", "lobez"] }),
  miastoZachodniopomorskie({ name: "Drawsko Pomorskie", slug: "drawsko-pomorskie", population: 11_000, neighborSlugs: ["zlocieniec", "czaplinek", "kalisz-pomorski"] }),
  miastoZachodniopomorskie({ name: "Myślibórz", slug: "mysliborz", population: 11_000, neighborSlugs: ["barlinek", "chojna", "mieszkowice"] }),
  miastoZachodniopomorskie({ name: "Barlinek", slug: "barlinek", population: 13_000, neighborSlugs: ["mysliborz", "pelczyce", "choszczno"] }),
  miastoZachodniopomorskie({ name: "Złocieniec", slug: "zlocieniec", population: 13_000, neighborSlugs: ["drawsko-pomorskie", "czaplinek", "polczyn-zdroj"] }),
  miastoZachodniopomorskie({ name: "Darłowo", slug: "darlowo", population: 13_000, neighborSlugs: ["slawno", "mielno", "sianow"] }),
  miastoZachodniopomorskie({ name: "Sławno", slug: "slawno", population: 12_000, neighborSlugs: ["darlowo", "polanow", "sianow"] }),
  miastoZachodniopomorskie({ name: "Trzebiatów", slug: "trzebiatow", population: 10_000, neighborSlugs: ["gryfice", "kolobrzeg", "dziwnow"] }),
  miastoZachodniopomorskie({ name: "Pyrzyce", slug: "pyrzyce", population: 12_000, neighborSlugs: ["stargard", "gryfino", "lipiany"] }),
  miastoZachodniopomorskie({ name: "Sianów", slug: "sianow", population: 6_600, neighborSlugs: ["koszalin", "darlowo", "slawno", "mielno"] }),
  miastoZachodniopomorskie({ name: "Chojna", slug: "chojna", population: 7_200, neighborSlugs: ["gryfino", "mieszkowice", "moryn", "cedynia"] }),
  miastoZachodniopomorskie({ name: "Kamień Pomorski", slug: "kamien-pomorski", population: 8_800, neighborSlugs: ["wolin", "golczewo", "dziwnow"] }),
  miastoZachodniopomorskie({ name: "Wolin", slug: "wolin", population: 4_800, neighborSlugs: ["kamien-pomorski", "miedzyzdroje", "swinoujscie"] }),
  miastoZachodniopomorskie({ name: "Międzyzdroje", slug: "miedzyzdroje", population: 5_400, neighborSlugs: ["swinoujscie", "wolin", "dziwnow"] }),
  miastoZachodniopomorskie({ name: "Dziwnów", slug: "dziwnow", population: 3_900, neighborSlugs: ["kamien-pomorski", "miedzyzdroje", "trzebiatow"] }),
  miastoZachodniopomorskie({ name: "Mielno", slug: "mielno", population: 3_000, neighborSlugs: ["koszalin", "sianow", "darlowo"] }),
  miastoZachodniopomorskie({ name: "Połczyn-Zdrój", slug: "polczyn-zdroj", population: 8_000, neighborSlugs: ["swidwin", "zlocieniec", "bialogard", "szczecinek"] }),
  miastoZachodniopomorskie({ name: "Czaplinek", slug: "czaplinek", population: 6_500, neighborSlugs: ["drawsko-pomorskie", "zlocieniec", "szczecinek", "borne-sulinowo"] }),
  miastoZachodniopomorskie({ name: "Borne Sulinowo", slug: "borne-sulinowo", population: 4_500, neighborSlugs: ["szczecinek", "czaplinek"] }),
  miastoZachodniopomorskie({ name: "Karlino", slug: "karlino", population: 6_000, neighborSlugs: ["bialogard", "kolobrzeg", "tychowo"] }),
  miastoZachodniopomorskie({ name: "Bobolice", slug: "bobolice", population: 4_100, neighborSlugs: ["koszalin", "polanow", "tychowo"] }),
  miastoZachodniopomorskie({ name: "Polanów", slug: "polanow", population: 2_900, neighborSlugs: ["bobolice", "slawno", "koszalin"] }),
  miastoZachodniopomorskie({ name: "Tychowo", slug: "tychowo", population: 2_500, neighborSlugs: ["bialogard", "karlino", "bobolice"] }),
  miastoZachodniopomorskie({ name: "Łobez", slug: "lobez", population: 10_000, neighborSlugs: ["swidwin", "wegorzyno", "resko"] }),
  miastoZachodniopomorskie({ name: "Resko", slug: "resko", population: 4_100, neighborSlugs: ["lobez", "ploty", "wegorzyno"] }),
  miastoZachodniopomorskie({ name: "Płoty", slug: "ploty", population: 4_000, neighborSlugs: ["gryfice", "nowogard", "resko"] }),
  miastoZachodniopomorskie({ name: "Węgorzyno", slug: "wegorzyno", population: 2_800, neighborSlugs: ["lobez", "resko", "dobrzany"] }),
  miastoZachodniopomorskie({ name: "Golczewo", slug: "golczewo", population: 2_600, neighborSlugs: ["kamien-pomorski", "nowogard"] }),
  miastoZachodniopomorskie({ name: "Maszewo", slug: "maszewo", population: 3_100, neighborSlugs: ["goleniow", "nowogard", "stargard"] }),
  miastoZachodniopomorskie({ name: "Chociwel", slug: "chociwel", population: 3_100, neighborSlugs: ["stargard", "dobrzany", "suchan"] }),
  miastoZachodniopomorskie({ name: "Dobrzany", slug: "dobrzany", population: 2_300, neighborSlugs: ["chociwel", "wegorzyno", "suchan"] }),
  miastoZachodniopomorskie({ name: "Suchań", slug: "suchan", population: 1_400, neighborSlugs: ["stargard", "chociwel", "dobrzany", "recz"] }),
  miastoZachodniopomorskie({ name: "Recz", slug: "recz", population: 2_900, neighborSlugs: ["choszczno", "suchan"] }),
  miastoZachodniopomorskie({ name: "Pełczyce", slug: "pelczyce", population: 2_500, neighborSlugs: ["choszczno", "barlinek"] }),
  miastoZachodniopomorskie({ name: "Drawno", slug: "drawno", population: 2_200, neighborSlugs: ["choszczno", "kalisz-pomorski"] }),
  miastoZachodniopomorskie({ name: "Kalisz Pomorski", slug: "kalisz-pomorski", population: 4_200, neighborSlugs: ["drawsko-pomorskie", "drawno", "miroslawiec"] }),
  miastoZachodniopomorskie({ name: "Mirosławiec", slug: "miroslawiec", population: 2_900, neighborSlugs: ["walcz", "kalisz-pomorski", "tuczno"] }),
  miastoZachodniopomorskie({ name: "Tuczno", slug: "tuczno", population: 1_900, neighborSlugs: ["walcz", "miroslawiec", "czlopa"] }),
  miastoZachodniopomorskie({ name: "Człopa", slug: "czlopa", population: 2_300, neighborSlugs: ["walcz", "tuczno"] }),
  miastoZachodniopomorskie({ name: "Biały Bór", slug: "bialy-bor", population: 2_100, neighborSlugs: ["szczecinek", "polanow"] }),
  miastoZachodniopomorskie({ name: "Lipiany", slug: "lipiany", population: 4_000, neighborSlugs: ["pyrzyce", "mysliborz"] }),
  miastoZachodniopomorskie({ name: "Mieszkowice", slug: "mieszkowice", population: 3_400, neighborSlugs: ["chojna", "mysliborz", "cedynia"] }),
  miastoZachodniopomorskie({ name: "Moryń", slug: "moryn", population: 1_500, neighborSlugs: ["chojna", "gryfino", "cedynia"] }),
  miastoZachodniopomorskie({ name: "Cedynia", slug: "cedynia", population: 1_600, neighborSlugs: ["chojna", "moryn", "mieszkowice"] }),
  miastoZachodniopomorskie({ name: "Nowe Warpno", slug: "nowe-warpno", population: 1_100, neighborSlugs: ["police"] }),
];
