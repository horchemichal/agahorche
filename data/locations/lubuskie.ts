import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo lubuskie — siódme i ostatnie (wrzesień 2026). Tym plikiem
 * domykamy mapę Polski: szesnaście województw, każde z własnym zbiorem
 * miast i własną regułą indeksowania.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH.
 *
 * PO PIERWSZE, i to jest cecha unikalna: DWIE STOLICE, ale inaczej niż
 * w kujawsko-pomorskim. Gorzów i Zielona Góra są nie tylko osobne — one
 * są od siebie oddalone o ponad sto kilometrów i praktycznie nie mają
 * wspólnego życia codziennego. Północ województwa ciąży ku Szczecinowi,
 * południe ku Wrocławiowi i Poznaniowi.
 *
 * PO DRUGIE: to najbardziej zalesione województwo w Polsce i jedno
 * z najmniej ludnych. Miasta są małe i rozrzucone.
 *
 * PO TRZECIE: winiarstwo. Zielona Góra i okolice to jedyny w Polsce region
 * z ciągłą, wielowiekową tradycją uprawy winorośli, dziś odbudowywaną.
 * To kąt do wykorzystania ostrożnie i wyłącznie kuchennie — nie robimy
 * z tej strony poradnika o winie i nie zachęcamy do alkoholu.
 *
 * PO CZWARTE: podobnie jak Dolny Śląsk i Pomorze Zachodnie, to region
 * po wymianie ludności po 1945 roku. Ta sama ostrożność: pytamy, skąd
 * jest przepis, i nie opowiadamy ludziom ich historii.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną.
 */
function miastoLubuskie(input: {
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
    wojewodztwoSlug: "lubuskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Ziemia Lubuska",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: 35,
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
 * ZIELONEJ GÓRY TU NIE MA — siedzi już w `miasta.ts`.
 *
 * TRZY SLUGI MUSIAŁY DOSTAĆ PEŁNĄ NAZWĘ, bo krótsza wersja jest zajęta
 * przez wdrożone już miejscowości:
 * — `kostrzyn-nad-odra`, bo `kostrzyn` to Kostrzyn w Wielkopolsce,
 * — `krosno-odrzanskie`, bo `krosno` to Krosno na Podkarpaciu,
 * — `bytom-odrzanski`, bo `bytom` to Bytom na Śląsku.
 * To nie jest obejście problemu, tylko poprawna nazwa — wszystkie trzy
 * miasta noszą pełny człon w nazwie urzędowej.
 */
export const LUBUSKIE_AGI: Location[] = [
  // ——— Największe miasta ———
  miastoLubuskie({ name: "Gorzów Wielkopolski", slug: "gorzow-wielkopolski", population: 121_000, neighborSlugs: ["witnica", "skwierzyna", "strzelce-krajenskie", "kostrzyn-nad-odra"] }),
  miastoLubuskie({ name: "Nowa Sól", slug: "nowa-sol", population: 38_000, neighborSlugs: ["kozuchow", "bytom-odrzanski", "sulechow", "szprotawa"] }),
  miastoLubuskie({ name: "Żary", slug: "zary", population: 37_000, neighborSlugs: ["zagan", "lubsko", "jasien", "leknica"] }),
  miastoLubuskie({ name: "Żagań", slug: "zagan", population: 25_000, neighborSlugs: ["zary", "szprotawa", "ilowa", "malomice"] }),
  miastoLubuskie({ name: "Świebodzin", slug: "swiebodzin", population: 21_000, neighborSlugs: ["sulechow", "miedzyrzecz", "zbaszynek", "torzym"] }),
  miastoLubuskie({ name: "Międzyrzecz", slug: "miedzyrzecz", population: 18_000, neighborSlugs: ["skwierzyna", "swiebodzin", "trzciel", "pszczew"] }),
  miastoLubuskie({ name: "Sulechów", slug: "sulechow", population: 17_000, neighborSlugs: ["swiebodzin", "nowa-sol", "czerwiensk", "kargowa"] }),
  miastoLubuskie({ name: "Kostrzyn nad Odrą", slug: "kostrzyn-nad-odra", population: 17_000, neighborSlugs: ["witnica", "gorzow-wielkopolski", "slubice"] }),
  miastoLubuskie({ name: "Słubice", slug: "slubice", population: 16_000, neighborSlugs: ["rzepin", "cybinka", "kostrzyn-nad-odra", "osno-lubuskie"] }),
  miastoLubuskie({ name: "Krosno Odrzańskie", slug: "krosno-odrzanskie", population: 11_000, neighborSlugs: ["gubin", "cybinka", "czerwiensk", "nowogrod-bobrzanski"] }),
  miastoLubuskie({ name: "Gubin", slug: "gubin", population: 16_000, neighborSlugs: ["krosno-odrzanskie", "lubsko", "cybinka"] }),
  miastoLubuskie({ name: "Lubsko", slug: "lubsko", population: 14_000, neighborSlugs: ["zary", "gubin", "jasien", "brody"] }),
  miastoLubuskie({ name: "Wschowa", slug: "wschowa", population: 14_000, neighborSlugs: ["szlichtyngowa", "slawa", "leszno"] }),
  miastoLubuskie({ name: "Szprotawa", slug: "szprotawa", population: 11_000, neighborSlugs: ["zagan", "nowa-sol", "kozuchow", "malomice"] }),
  miastoLubuskie({ name: "Drezdenko", slug: "drezdenko", population: 10_000, neighborSlugs: ["strzelce-krajenskie", "dobiegniew", "skwierzyna", "krzyz-wielkopolski"] }),
  miastoLubuskie({ name: "Kożuchów", slug: "kozuchow", population: 9_500, neighborSlugs: ["nowa-sol", "szprotawa", "nowogrod-bobrzanski"] }),
  miastoLubuskie({ name: "Skwierzyna", slug: "skwierzyna", population: 9_500, neighborSlugs: ["miedzyrzecz", "gorzow-wielkopolski", "drezdenko", "bledzew"] }),
  miastoLubuskie({ name: "Strzelce Krajeńskie", slug: "strzelce-krajenskie", population: 9_500, neighborSlugs: ["drezdenko", "dobiegniew", "gorzow-wielkopolski"] }),
  miastoLubuskie({ name: "Nowogród Bobrzański", slug: "nowogrod-bobrzanski", population: 5_000, neighborSlugs: ["kozuchow", "krosno-odrzanskie", "czerwiensk"] }),
  miastoLubuskie({ name: "Rzepin", slug: "rzepin", population: 6_500, neighborSlugs: ["slubice", "osno-lubuskie", "torzym", "cybinka"] }),
  miastoLubuskie({ name: "Witnica", slug: "witnica", population: 6_600, neighborSlugs: ["kostrzyn-nad-odra", "gorzow-wielkopolski"] }),
  miastoLubuskie({ name: "Czerwieńsk", slug: "czerwiensk", population: 4_200, neighborSlugs: ["sulechow", "krosno-odrzanskie", "nowogrod-bobrzanski"] }),
  miastoLubuskie({ name: "Sława", slug: "slawa", population: 4_300, neighborSlugs: ["wschowa", "bytom-odrzanski", "kargowa"] }),
  miastoLubuskie({ name: "Bytom Odrzański", slug: "bytom-odrzanski", population: 4_400, neighborSlugs: ["nowa-sol", "slawa", "glogow"] }),
  miastoLubuskie({ name: "Dobiegniew", slug: "dobiegniew", population: 3_000, neighborSlugs: ["strzelce-krajenskie", "drezdenko"] }),
  miastoLubuskie({ name: "Ośno Lubuskie", slug: "osno-lubuskie", population: 3_800, neighborSlugs: ["slubice", "rzepin", "torzym"] }),
  miastoLubuskie({ name: "Torzym", slug: "torzym", population: 2_500, neighborSlugs: ["rzepin", "osno-lubuskie", "swiebodzin"] }),
  miastoLubuskie({ name: "Cybinka", slug: "cybinka", population: 3_000, neighborSlugs: ["slubice", "rzepin", "gubin", "krosno-odrzanskie"] }),
  miastoLubuskie({ name: "Jasień", slug: "jasien", population: 4_300, neighborSlugs: ["zary", "lubsko"] }),
  miastoLubuskie({ name: "Iłowa", slug: "ilowa", population: 4_000, neighborSlugs: ["zagan", "gozdnica"] }),
  miastoLubuskie({ name: "Małomice", slug: "malomice", population: 3_500, neighborSlugs: ["zagan", "szprotawa"] }),
  miastoLubuskie({ name: "Gozdnica", slug: "gozdnica", population: 3_100, neighborSlugs: ["ilowa", "zagan"] }),
  miastoLubuskie({ name: "Łęknica", slug: "leknica", population: 2_400, neighborSlugs: ["zary", "lubsko"] }),
  miastoLubuskie({ name: "Zbąszynek", slug: "zbaszynek", population: 4_800, neighborSlugs: ["swiebodzin", "trzciel", "zbaszyn"] }),
  miastoLubuskie({ name: "Trzciel", slug: "trzciel", population: 2_400, neighborSlugs: ["miedzyrzecz", "zbaszynek", "pszczew"] }),
  miastoLubuskie({ name: "Kargowa", slug: "kargowa", population: 3_700, neighborSlugs: ["sulechow", "slawa", "babimost"] }),
  miastoLubuskie({ name: "Babimost", slug: "babimost", population: 3_900, neighborSlugs: ["kargowa", "sulechow", "zbaszyn"] }),
  miastoLubuskie({ name: "Szlichtyngowa", slug: "szlichtyngowa", population: 1_300, neighborSlugs: ["wschowa", "gora"] }),
  miastoLubuskie({ name: "Lubniewice", slug: "lubniewice", population: 2_000, neighborSlugs: ["osno-lubuskie", "bledzew", "skwierzyna"] }),
  miastoLubuskie({ name: "Sulęcin", slug: "sulecin", population: 10_000, neighborSlugs: ["torzym", "lubniewice", "osno-lubuskie", "bledzew"] }),
  miastoLubuskie({ name: "Bledzew", slug: "bledzew", population: 1_500, neighborSlugs: ["skwierzyna", "sulecin", "lubniewice"] }),
  miastoLubuskie({ name: "Pszczew", slug: "pszczew", population: 1_400, neighborSlugs: ["miedzyrzecz", "trzciel"] }),
  miastoLubuskie({ name: "Brody", slug: "brody", population: 1_100, neighborSlugs: ["lubsko", "leknica"] }),
];
