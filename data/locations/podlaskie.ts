import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo podlaskie — szóste z siedmiu ostatnich (wrzesień 2026).
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH.
 *
 * PO PIERWSZE: to jedyne województwo w Polsce, w którym różnorodność
 * wyznaniowa i kulturowa jest zjawiskiem ciągłym, a nie historycznym.
 * I właśnie dlatego OBOWIĄZUJE TU NAJOSTRZEJSZA WERSJA ZASADY, którą
 * przyjęliśmy w Cieszynie i Strzelcach Opolskich: NIE PISZEMY O TOŻSAMOŚCI,
 * WYZNANIU ANI HISTORII MIESZKAŃCÓW. Ani jednego zdania. Jeżeli ktoś kiedyś
 * zechce „wzbogacić" te strony wywodem o wielokulturowości Podlasia —
 * nie należy tego robić. To jest strona o gotowaniu, prowadzona przez
 * osobę spoza regionu, i jedyne, co jej wolno, to zapytać, jak się tu
 * gotuje, a potem słuchać.
 *
 * PO DRUGIE, i to jest fakt czysto praktyczny: post. W wielu domach
 * na Podlasiu obowiązują okresy postne w innych terminach niż w reszcie
 * kraju. Wolno mi napisać dokładnie tyle, że PYTAM O TO PRZY UMAWIANIU,
 * żeby nie przyjechać z niewłaściwymi składnikami — i ani słowa więcej.
 *
 * PO TRZECIE: Puszcza Białowieska, Biebrza i Narew. Duża część regionu
 * to obszary chronione, gdzie rolnictwo jest drobne i ekstensywne, a domy
 * rozrzucone. Odległości są tu realne i nie udajemy, że jest inaczej.
 *
 * PO CZWARTE: to region odpływu ludności — bardzo wiele domów, w których
 * dzieci mieszkają gdzie indziej i przyjeżdżają na święta.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoPodlaskie(input: {
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
    wojewodztwoSlug: "podlaskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Podlasie",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: 34,
    tier: "B",
    seo: maTresc
      ? { indexable: true, inSitemap: true, contentStatus: "published" as const }
      : { indexable: false, inSitemap: false, contentStatus: "draft" as const },
    urlPath: `/thermomix/${input.slug}`,
    createdAt: now,
    updatedAt: now,
  };
}

/* BIAŁEGOSTOKU TU NIE MA — siedzi już w `miasta.ts`. */
export const PODLASKIE_AGI: Location[] = [
  // ——— Największe miasta ———
  miastoPodlaskie({ name: "Suwałki", slug: "suwalki", population: 69_000, neighborSlugs: ["augustow", "sejny", "olecko", "raczki"] }),
  miastoPodlaskie({ name: "Łomża", slug: "lomza", population: 62_000, neighborSlugs: ["zambrow", "kolno", "nowogrod", "jedwabne"] }),
  miastoPodlaskie({ name: "Augustów", slug: "augustow", population: 30_000, neighborSlugs: ["suwalki", "sztabin", "lipsk", "raczki"] }),
  miastoPodlaskie({ name: "Bielsk Podlaski", slug: "bielsk-podlaski", population: 25_000, neighborSlugs: ["hajnowka", "bransk", "siemiatycze", "orla"] }),
  miastoPodlaskie({ name: "Zambrów", slug: "zambrow", population: 21_000, neighborSlugs: ["lomza", "czyzew", "szepietowo", "wysokie-mazowieckie"] }),
  miastoPodlaskie({ name: "Grajewo", slug: "grajewo", population: 21_000, neighborSlugs: ["rajgrod", "szczuczyn", "monki", "elk"] }),
  miastoPodlaskie({ name: "Hajnówka", slug: "hajnowka", population: 20_000, neighborSlugs: ["bielsk-podlaski", "kleszczele", "narewka"] }),
  miastoPodlaskie({ name: "Sokółka", slug: "sokolka", population: 18_000, neighborSlugs: ["dabrowa-bialostocka", "krynki", "czarna-bialostocka", "suchowola"] }),
  miastoPodlaskie({ name: "Siemiatycze", slug: "siemiatycze", population: 14_000, neighborSlugs: ["drohiczyn", "bielsk-podlaski", "ciechanowiec"] }),
  miastoPodlaskie({ name: "Łapy", slug: "lapy", population: 15_000, neighborSlugs: ["suraz", "choroszcz", "wysokie-mazowieckie"], largerCitySlug: "bialystok" }),
  miastoPodlaskie({ name: "Mońki", slug: "monki", population: 10_000, neighborSlugs: ["knyszyn", "goniadz", "grajewo"] }),
  miastoPodlaskie({ name: "Kolno", slug: "kolno", population: 10_000, neighborSlugs: ["lomza", "stawiski", "szczuczyn"] }),
  miastoPodlaskie({ name: "Wysokie Mazowieckie", slug: "wysokie-mazowieckie", population: 9_500, neighborSlugs: ["szepietowo", "zambrow", "lapy", "ciechanowiec"] }),
  miastoPodlaskie({ name: "Czarna Białostocka", slug: "czarna-bialostocka", population: 9_000, neighborSlugs: ["wasilkow", "sokolka", "suprasl"], largerCitySlug: "bialystok" }),
  miastoPodlaskie({ name: "Wasilków", slug: "wasilkow", population: 12_000, neighborSlugs: ["czarna-bialostocka", "suprasl", "choroszcz"], largerCitySlug: "bialystok" }),
  miastoPodlaskie({ name: "Choroszcz", slug: "choroszcz", population: 6_000, neighborSlugs: ["wasilkow", "lapy", "zabludow"], largerCitySlug: "bialystok" }),
  miastoPodlaskie({ name: "Supraśl", slug: "suprasl", population: 4_800, neighborSlugs: ["wasilkow", "czarna-bialostocka", "zabludow"], largerCitySlug: "bialystok" }),
  miastoPodlaskie({ name: "Zabłudów", slug: "zabludow", population: 2_400, neighborSlugs: ["choroszcz", "suprasl", "michalowo"], largerCitySlug: "bialystok" }),
  miastoPodlaskie({ name: "Michałowo", slug: "michalowo", population: 3_000, neighborSlugs: ["zabludow", "narewka", "bielsk-podlaski"] }),
  miastoPodlaskie({ name: "Dąbrowa Białostocka", slug: "dabrowa-bialostocka", population: 5_500, neighborSlugs: ["sokolka", "suchowola", "lipsk"] }),
  miastoPodlaskie({ name: "Suchowola", slug: "suchowola", population: 2_200, neighborSlugs: ["dabrowa-bialostocka", "sokolka", "sztabin"] }),
  miastoPodlaskie({ name: "Sejny", slug: "sejny", population: 5_000, neighborSlugs: ["suwalki"] }),
  miastoPodlaskie({ name: "Lipsk", slug: "lipsk", population: 2_400, neighborSlugs: ["dabrowa-bialostocka", "augustow", "sztabin"] }),
  miastoPodlaskie({ name: "Sztabin", slug: "sztabin", population: 1_200, neighborSlugs: ["augustow", "suchowola", "lipsk"] }),
  miastoPodlaskie({ name: "Rączki", slug: "raczki", population: 1_300, neighborSlugs: ["suwalki", "augustow"] }),
  miastoPodlaskie({ name: "Szczuczyn", slug: "szczuczyn", population: 3_400, neighborSlugs: ["grajewo", "kolno", "stawiski"] }),
  miastoPodlaskie({ name: "Stawiski", slug: "stawiski", population: 2_200, neighborSlugs: ["kolno", "szczuczyn", "jedwabne"] }),
  miastoPodlaskie({ name: "Jedwabne", slug: "jedwabne", population: 1_600, neighborSlugs: ["lomza", "stawiski"] }),
  miastoPodlaskie({ name: "Nowogród", slug: "nowogrod", population: 2_000, neighborSlugs: ["lomza", "kolno"] }),
  miastoPodlaskie({ name: "Rajgród", slug: "rajgrod", population: 1_600, neighborSlugs: ["grajewo", "goniadz"] }),
  miastoPodlaskie({ name: "Goniądz", slug: "goniadz", population: 1_800, neighborSlugs: ["monki", "rajgrod", "knyszyn"] }),
  miastoPodlaskie({ name: "Knyszyn", slug: "knyszyn", population: 2_800, neighborSlugs: ["monki", "goniadz", "wasilkow"] }),
  miastoPodlaskie({ name: "Tykocin", slug: "tykocin", population: 1_900, neighborSlugs: ["choroszcz", "knyszyn"] }),
  miastoPodlaskie({ name: "Suraż", slug: "suraz", population: 1_000, neighborSlugs: ["lapy", "zabludow"] }),
  miastoPodlaskie({ name: "Szepietowo", slug: "szepietowo", population: 2_200, neighborSlugs: ["wysokie-mazowieckie", "zambrow", "czyzew"] }),
  miastoPodlaskie({ name: "Czyżew", slug: "czyzew", population: 2_700, neighborSlugs: ["zambrow", "szepietowo", "ciechanowiec"] }),
  miastoPodlaskie({ name: "Ciechanowiec", slug: "ciechanowiec", population: 4_600, neighborSlugs: ["czyzew", "wysokie-mazowieckie", "siemiatycze", "bransk"] }),
  miastoPodlaskie({ name: "Brańsk", slug: "bransk", population: 3_700, neighborSlugs: ["bielsk-podlaski", "ciechanowiec", "siemiatycze"] }),
  miastoPodlaskie({ name: "Drohiczyn", slug: "drohiczyn", population: 2_000, neighborSlugs: ["siemiatycze"] }),
  miastoPodlaskie({ name: "Kleszczele", slug: "kleszczele", population: 1_300, neighborSlugs: ["hajnowka", "bielsk-podlaski"] }),
  miastoPodlaskie({ name: "Krynki", slug: "krynki", population: 2_400, neighborSlugs: ["sokolka"] }),
  miastoPodlaskie({ name: "Narewka", slug: "narewka", population: 1_400, neighborSlugs: ["hajnowka", "michalowo"] }),
  miastoPodlaskie({ name: "Orla", slug: "orla", population: 1_200, neighborSlugs: ["bielsk-podlaski"] }),
];
