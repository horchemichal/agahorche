import type { Location } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * OŚ PLIKU
 * Województwo mazowieckie — pierwsze z siedmiu ostatnich (wrzesień 2026,
 * polecenie Michała: „teraz reszta: lubuskie, kujawsko pomorskie
 * mazowieckie podlaskie warmińsko mazurskie pomorskie i zachodnio
 * pomorskie"). Po tej fali mapa Polski jest domknięta.
 *
 * O KOLEJNOŚCI W TEJ SIÓDEMCE. Do tej pory o miejscu w kolejce decydowała
 * przede wszystkim odległość od Małopolski. Od tego miejsca odległość
 * przestaje różnicować — wszystkie siedem leży daleko i żadne nie jest
 * „po drodze". Dlatego kolejność ustala teraz wielkość rynku, a mazowieckie
 * jest największym rynkiem w kraju.
 *
 * CZYM TEN REGION RÓŻNI SIĘ OD POZOSTAŁYCH — i dlaczego treści muszą to
 * uwzględniać. Mazowieckie jest województwem najsilniej rozwarstwionym
 * w Polsce i to jest jego cecha najważniejsza dla nas.
 *
 * PO PIERWSZE: obwarzanek warszawski. Pas gmin wokół stolicy — Piaseczno,
 * Pruszków, Marki, Ząbki, Legionowo — to domy ludzi, którzy w Warszawie
 * pracują, ale w niej nie mieszkają. Kuchnia jest tam podporządkowana
 * dojazdowi, a nie porze dnia.
 *
 * PO DRUGIE, i to jest ważniejsze: reszta Mazowsza to zupełnie inny świat.
 * Kurpie, Podlasie mazowieckie, ziemia radomska, płocka i sierpecka to
 * regiony rolnicze, w części należące do najuboższych w kraju. Pisanie
 * do nich językiem podwarszawskim byłoby fałszem i od razu byłoby słychać.
 *
 * WARSZAWY W TREŚCIACH NIE OBSŁUGUJEMY inaczej niż każde inne miasto
 * i nie budujemy wokół niej narracji „stolica". Aga jeździ tak samo
 * do Ostrołęki, jak do Pruszkowa.
 *
 * ZASADA POZOSTAJE TA SAMA: strona miasta idzie do Google dopiero wtedy,
 * gdy ma własną, napisaną treść lokalną. Flaga `indexable` wynika z tego,
 * czy dla sluga istnieje wpis w `city-content`.
 */
function miastoMazowieckie(input: {
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
    wojewodztwoSlug: "mazowieckie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Mazowsze",
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    /* Największy rynek w kraju — i pierwsze z siedmiu ostatnich województw. */
    seoPriority: 29,
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
 * WARSZAWY I RADOMIA TU NIE MA — oba siedzą już w `miasta.ts` jako część
 * ogólnopolskiej próbki i mają tam tę samą regułę indeksowania. To już
 * ósmy raz ta sama historia.
 *
 * JÓZEFÓW MA SLUG `jozefow-mazowiecki` i to jest decyzja, nie pomyłka.
 * Oficjalna nazwa miasta to samo „Józefów", ale slug `jozefow` zajmuje
 * wdrożony już Józefów w powiecie biłgorajskim, na Roztoczu. Tym razem
 * NIE wykluczyliśmy miasta tak, jak zrobiliśmy to z Osiekiem, Olesnem,
 * Dobrą i Dębnem — bo tamte były małymi gminami, a to jest miasto
 * dwudziestotysięczne pod Warszawą, którego strata byłaby realna.
 * Zastosowaliśmy więc rozwiązanie z Białej Opolskiej: doprecyzowanie
 * w slugu. Gdyby kiedyś powstawała treść dla obu Józefowów, trzeba
 * świadomie zdecydować, co robić z frazą, którą ludzie faktycznie
 * wpisują w wyszukiwarkę.
 */
export const MAZOWIECKIE_AGI: Location[] = [
  // ——— Duże miasta poza aglomeracją ———
  miastoMazowieckie({ name: "Płock", slug: "plock", population: 116_000, neighborSlugs: ["gostynin", "sierpc", "plonsk", "wyszogrod"] }),
  miastoMazowieckie({ name: "Siedlce", slug: "siedlce", population: 77_000, neighborSlugs: ["sokolow-podlaski", "wegrow", "losice", "mordy"] }),
  miastoMazowieckie({ name: "Ostrołęka", slug: "ostroleka", population: 51_000, neighborSlugs: ["makow-mazowiecki", "przasnysz", "ostrow-mazowiecka", "myszyniec"] }),
  miastoMazowieckie({ name: "Ciechanów", slug: "ciechanow", population: 43_000, neighborSlugs: ["mlawa", "plonsk", "przasnysz", "raciaz"] }),
  miastoMazowieckie({ name: "Mława", slug: "mlawa", population: 31_000, neighborSlugs: ["ciechanow", "zuromin", "przasnysz"] }),

  // ——— Obwarzanek warszawski ———
  miastoMazowieckie({ name: "Pruszków", slug: "pruszkow", population: 63_000, neighborSlugs: ["piastow", "brwinow", "grodzisk-mazowiecki", "milanowek"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Legionowo", slug: "legionowo", population: 54_000, neighborSlugs: ["nowy-dwor-mazowiecki", "lomianki", "zielonka"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Piaseczno", slug: "piaseczno", population: 48_000, neighborSlugs: ["konstancin-jeziorna", "gora-kalwaria", "tarczyn", "jozefow-mazowiecki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Otwock", slug: "otwock", population: 45_000, neighborSlugs: ["jozefow-mazowiecki", "karczew", "celestynow"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Marki", slug: "marki", population: 40_000, neighborSlugs: ["zabki", "kobylka", "zielonka", "wolomin"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Ząbki", slug: "zabki", population: 40_000, neighborSlugs: ["marki", "zielonka", "kobylka"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Mińsk Mazowiecki", slug: "minsk-mazowiecki", population: 40_000, neighborSlugs: ["sulejowek", "halinow", "kaluszyn"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Żyrardów", slug: "zyrardow", population: 39_000, neighborSlugs: ["mszczonow", "grodzisk-mazowiecki", "sochaczew"] }),
  miastoMazowieckie({ name: "Wołomin", slug: "wolomin", population: 37_000, neighborSlugs: ["kobylka", "marki", "radzymin", "zielonka"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Sochaczew", slug: "sochaczew", population: 36_000, neighborSlugs: ["zyrardow", "wyszogrod", "mszczonow"] }),
  miastoMazowieckie({ name: "Grodzisk Mazowiecki", slug: "grodzisk-mazowiecki", population: 32_000, neighborSlugs: ["milanowek", "brwinow", "pruszkow", "zyrardow", "podkowa-lesna"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Nowy Dwór Mazowiecki", slug: "nowy-dwor-mazowiecki", population: 28_000, neighborSlugs: ["legionowo", "plonsk", "zakroczym"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Wyszków", slug: "wyszkow", population: 27_000, neighborSlugs: ["radzymin", "ostrow-mazowiecka", "pultusk"] }),
  miastoMazowieckie({ name: "Kobyłka", slug: "kobylka", population: 25_000, neighborSlugs: ["wolomin", "marki", "zabki", "zielonka"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Piastów", slug: "piastow", population: 23_000, neighborSlugs: ["pruszkow", "brwinow"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Józefów", slug: "jozefow-mazowiecki", population: 21_000, neighborSlugs: ["otwock", "karczew", "piaseczno"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Sulejówek", slug: "sulejowek", population: 20_000, neighborSlugs: ["minsk-mazowiecki", "halinow"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Konstancin-Jeziorna", slug: "konstancin-jeziorna", population: 17_000, neighborSlugs: ["piaseczno", "gora-kalwaria", "jozefow-mazowiecki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Łomianki", slug: "lomianki", population: 17_000, neighborSlugs: ["legionowo", "nowy-dwor-mazowiecki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Zielonka", slug: "zielonka", population: 17_000, neighborSlugs: ["marki", "kobylka", "wolomin", "zabki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Milanówek", slug: "milanowek", population: 16_000, neighborSlugs: ["grodzisk-mazowiecki", "brwinow", "podkowa-lesna"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Brwinów", slug: "brwinow", population: 12_000, neighborSlugs: ["pruszkow", "milanowek", "grodzisk-mazowiecki", "podkowa-lesna"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Radzymin", slug: "radzymin", population: 12_000, neighborSlugs: ["wolomin", "wyszkow", "marki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Góra Kalwaria", slug: "gora-kalwaria", population: 12_000, neighborSlugs: ["piaseczno", "konstancin-jeziorna", "warka", "grojec"] }),
  miastoMazowieckie({ name: "Karczew", slug: "karczew", population: 10_000, neighborSlugs: ["otwock", "jozefow-mazowiecki", "celestynow"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Halinów", slug: "halinow", population: 3_300, neighborSlugs: ["sulejowek", "minsk-mazowiecki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Podkowa Leśna", slug: "podkowa-lesna", population: 3_800, neighborSlugs: ["milanowek", "brwinow", "grodzisk-mazowiecki"], largerCitySlug: "warszawa" }),
  miastoMazowieckie({ name: "Mszczonów", slug: "mszczonow", population: 6_400, neighborSlugs: ["zyrardow", "grodzisk-mazowiecki", "tarczyn"] }),
  miastoMazowieckie({ name: "Tarczyn", slug: "tarczyn", population: 4_400, neighborSlugs: ["piaseczno", "grojec", "mszczonow"] }),
  miastoMazowieckie({ name: "Celestynów", slug: "celestynow", population: 3_400, neighborSlugs: ["otwock", "karczew"] }),
  miastoMazowieckie({ name: "Zakroczym", slug: "zakroczym", population: 3_300, neighborSlugs: ["nowy-dwor-mazowiecki", "plonsk"] }),

  // ——— Mazowsze północne i wschodnie ———
  miastoMazowieckie({ name: "Ostrów Mazowiecka", slug: "ostrow-mazowiecka", population: 22_000, neighborSlugs: ["wyszkow", "ostroleka", "sokolow-podlaski"] }),
  miastoMazowieckie({ name: "Płońsk", slug: "plonsk", population: 22_000, neighborSlugs: ["ciechanow", "plock", "nowy-dwor-mazowiecki", "raciaz"] }),
  miastoMazowieckie({ name: "Pułtusk", slug: "pultusk", population: 19_000, neighborSlugs: ["wyszkow", "makow-mazowiecki", "nasielsk"] }),
  miastoMazowieckie({ name: "Sokołów Podlaski", slug: "sokolow-podlaski", population: 18_000, neighborSlugs: ["siedlce", "wegrow", "ostrow-mazowiecka"] }),
  miastoMazowieckie({ name: "Sierpc", slug: "sierpc", population: 18_000, neighborSlugs: ["plock", "zuromin", "raciaz"] }),
  miastoMazowieckie({ name: "Gostynin", slug: "gostynin", population: 18_000, neighborSlugs: ["plock", "sierpc"] }),
  miastoMazowieckie({ name: "Przasnysz", slug: "przasnysz", population: 17_000, neighborSlugs: ["ciechanow", "mlawa", "makow-mazowiecki", "ostroleka"] }),
  miastoMazowieckie({ name: "Nasielsk", slug: "nasielsk", population: 7_500, neighborSlugs: ["pultusk", "nowy-dwor-mazowiecki", "plonsk"] }),
  miastoMazowieckie({ name: "Węgrów", slug: "wegrow", population: 12_000, neighborSlugs: ["siedlce", "sokolow-podlaski", "kaluszyn"] }),
  miastoMazowieckie({ name: "Maków Mazowiecki", slug: "makow-mazowiecki", population: 10_000, neighborSlugs: ["przasnysz", "ostroleka", "pultusk"] }),
  miastoMazowieckie({ name: "Żuromin", slug: "zuromin", population: 8_500, neighborSlugs: ["mlawa", "sierpc"] }),
  miastoMazowieckie({ name: "Łosice", slug: "losice", population: 7_000, neighborSlugs: ["siedlce", "mordy"] }),
  miastoMazowieckie({ name: "Raciąż", slug: "raciaz", population: 4_400, neighborSlugs: ["plonsk", "sierpc", "ciechanow"] }),
  miastoMazowieckie({ name: "Kałuszyn", slug: "kaluszyn", population: 2_900, neighborSlugs: ["minsk-mazowiecki", "wegrow"] }),
  miastoMazowieckie({ name: "Mordy", slug: "mordy", population: 1_800, neighborSlugs: ["siedlce", "losice"] }),
  miastoMazowieckie({ name: "Myszyniec", slug: "myszyniec", population: 3_000, neighborSlugs: ["ostroleka"] }),
  miastoMazowieckie({ name: "Wyszogród", slug: "wyszogrod", population: 2_600, neighborSlugs: ["plock", "sochaczew"] }),

  // ——— Ziemia radomska i południe ———
  miastoMazowieckie({ name: "Pionki", slug: "pionki", population: 18_000, neighborSlugs: ["kozienice", "zwolen"] }),
  miastoMazowieckie({ name: "Kozienice", slug: "kozienice", population: 17_000, neighborSlugs: ["pionki", "zwolen", "warka"] }),
  miastoMazowieckie({ name: "Garwolin", slug: "garwolin", population: 17_000, neighborSlugs: ["pilawa", "zelechow", "otwock"] }),
  miastoMazowieckie({ name: "Grójec", slug: "grojec", population: 16_000, neighborSlugs: ["warka", "tarczyn", "mogielnica", "gora-kalwaria"] }),
  miastoMazowieckie({ name: "Szydłowiec", slug: "szydlowiec", population: 11_000, neighborSlugs: ["przysucha", "ilza"] }),
  miastoMazowieckie({ name: "Warka", slug: "warka", population: 11_000, neighborSlugs: ["grojec", "gora-kalwaria", "kozienice", "mogielnica"] }),
  miastoMazowieckie({ name: "Przysucha", slug: "przysucha", population: 6_000, neighborSlugs: ["szydlowiec", "nowe-miasto-nad-pilica"] }),
  miastoMazowieckie({ name: "Zwoleń", slug: "zwolen", population: 8_000, neighborSlugs: ["pionki", "kozienice", "lipsko"] }),
  miastoMazowieckie({ name: "Białobrzegi", slug: "bialobrzegi", population: 7_000, neighborSlugs: ["warka", "grojec", "kozienice"] }),
  miastoMazowieckie({ name: "Żelechów", slug: "zelechow", population: 4_000, neighborSlugs: ["garwolin", "pilawa"] }),
  miastoMazowieckie({ name: "Pilawa", slug: "pilawa", population: 4_000, neighborSlugs: ["garwolin", "zelechow", "otwock"] }),
  miastoMazowieckie({ name: "Lipsko", slug: "lipsko", population: 5_500, neighborSlugs: ["zwolen", "ilza"] }),
  miastoMazowieckie({ name: "Iłża", slug: "ilza", population: 5_000, neighborSlugs: ["lipsko", "szydlowiec"] }),
  miastoMazowieckie({ name: "Nowe Miasto nad Pilicą", slug: "nowe-miasto-nad-pilica", population: 3_700, neighborSlugs: ["mogielnica", "przysucha"] }),
  miastoMazowieckie({ name: "Mogielnica", slug: "mogielnica", population: 2_400, neighborSlugs: ["grojec", "warka", "nowe-miasto-nad-pilica"] }),
];
