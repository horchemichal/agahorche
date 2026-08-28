import type { Location, SeoTier } from "@/types/location";
import { CITIES_WITH_CONTENT } from "./city-content";

/**
 * Seed of real Polish cities — intentionally NOT all 380+ units (spec §43/§47:
 * roll out by tier, never publish everything at once). This is Tier A (major
 * cities, highest population/search-volume) plus a Tier B sample, enough to
 * exercise the whole location engine (hierarchy, neighbors, sitemap,
 * scoring) end to end before the dataset is expanded city by city.
 *
 * `seo.indexable` is `false` for every single one of these right now. That
 * is deliberate: no location page has real, unique, reviewed content yet
 * (spec §9/§47). Flipping a location to indexable is a one-line, per-city
 * editorial decision once its page has been built with genuine local
 * content — see /lib/locations/README in the engine module for the
 * promotion checklist.
 *
 * `neighborSlugs` only reference cities that exist in this seed file, so
 * the "nearby locations" component never links to a location that doesn't
 * exist yet. Expand alongside the dataset.
 */
function city(input: {
  name: string;
  slug: string;
  wojewodztwoSlug: string;
  population: number;
  tier: SeoTier;
  region: string;
  neighborSlugs?: string[];
  largerCitySlug?: string;
}): Location {
  const now = "2026-01-01T00:00:00.000Z";
  const maTresc = CITIES_WITH_CONTENT.includes(input.slug);
  return {
    locationId: `miasto-${input.slug}`,
    name: input.name,
    slug: input.slug,
    unitType: "miasto",
    wojewodztwoSlug: input.wojewodztwoSlug,
    powiatSlug: null, // TODO: uzupełnić powiat, gdy warstwa powiatowa zostanie w pełni wypełniona
    gminaSlug: null,
    region: input.region,
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    largerCitySlug: input.largerCitySlug,
    agaServesLocation: true,
    seoPriority: input.tier === "A" ? 10 : 30,
    tier: input.tier,
    // Ta sama reguła co w malopolska.ts: do indeksu trafia tylko miasto,
    // które ma napisaną treść lokalną. Dla całej tej listy oznacza to
    // `false` — z jednym wyjątkiem, którym jest Kraków. Wcześniej flaga była
    // tu wpisana na sztywno, przez co kod twierdził, że nasza najważniejsza
    // strona jest noindex, podczas gdy na produkcji od dawna była
    // indeksowana (poprawiona ręcznie w bazie). Teraz jedno i drugie wynika
    // z tego samego źródła.
    seo: maTresc
      ? { indexable: true, inSitemap: true, contentStatus: "published" as const }
      : { indexable: false, inSitemap: false, contentStatus: "draft" as const },
    // Flat URL for established cities — matches spec §8's own example
    // (/thermomix/krakow) rather than the nested §7 example, which this
    // codebase reserves for disambiguating smaller localities. Documented
    // in the architecture report.
    urlPath: `/thermomix/${input.slug}`,
    createdAt: now,
    updatedAt: now,
  };
}

export const MIASTA: Location[] = [
  // Tier A — largest cities, highest search volume.
  city({ name: "Warszawa", slug: "warszawa", wojewodztwoSlug: "mazowieckie", population: 1_860_000, tier: "A", region: "Mazowsze", neighborSlugs: ["radom"] }),
  city({ name: "Kraków", slug: "krakow", wojewodztwoSlug: "malopolskie", population: 800_000, tier: "A", region: "Małopolska" }),
  city({ name: "Łódź", slug: "lodz", wojewodztwoSlug: "lodzkie", population: 650_000, tier: "A", region: "Polska Centralna" }),
  city({ name: "Wrocław", slug: "wroclaw", wojewodztwoSlug: "dolnoslaskie", population: 670_000, tier: "A", region: "Dolny Śląsk" }),
  city({ name: "Poznań", slug: "poznan", wojewodztwoSlug: "wielkopolskie", population: 540_000, tier: "A", region: "Wielkopolska" }),
  city({ name: "Gdańsk", slug: "gdansk", wojewodztwoSlug: "pomorskie", population: 470_000, tier: "A", region: "Pomorze", neighborSlugs: ["gdynia"] }),
  city({ name: "Szczecin", slug: "szczecin", wojewodztwoSlug: "zachodniopomorskie", population: 390_000, tier: "A", region: "Pomorze Zachodnie" }),
  city({ name: "Bydgoszcz", slug: "bydgoszcz", wojewodztwoSlug: "kujawsko-pomorskie", population: 340_000, tier: "A", region: "Kujawy i Pomorze", neighborSlugs: ["torun"] }),
  city({ name: "Lublin", slug: "lublin", wojewodztwoSlug: "lubelskie", population: 330_000, tier: "A", region: "Lubelszczyzna" }),
  city({ name: "Białystok", slug: "bialystok", wojewodztwoSlug: "podlaskie", population: 295_000, tier: "A", region: "Podlasie" }),
  city({ name: "Katowice", slug: "katowice", wojewodztwoSlug: "slaskie", population: 280_000, tier: "A", region: "Śląsk", neighborSlugs: ["gliwice", "czestochowa"] }),

  // Tier B — strong secondary cities.
  city({ name: "Gdynia", slug: "gdynia", wojewodztwoSlug: "pomorskie", population: 245_000, tier: "B", region: "Pomorze", neighborSlugs: ["gdansk"], largerCitySlug: "gdansk" }),
  city({ name: "Częstochowa", slug: "czestochowa", wojewodztwoSlug: "slaskie", population: 200_000, tier: "B", region: "Śląsk", neighborSlugs: ["katowice"], largerCitySlug: "katowice" }),
  city({ name: "Radom", slug: "radom", wojewodztwoSlug: "mazowieckie", population: 200_000, tier: "B", region: "Mazowsze", neighborSlugs: ["warszawa"], largerCitySlug: "warszawa" }),
  city({ name: "Rzeszów", slug: "rzeszow", wojewodztwoSlug: "podkarpackie", population: 195_000, tier: "B", region: "Podkarpacie" }),
  city({ name: "Toruń", slug: "torun", wojewodztwoSlug: "kujawsko-pomorskie", population: 195_000, tier: "B", region: "Kujawy i Pomorze", neighborSlugs: ["bydgoszcz"], largerCitySlug: "bydgoszcz" }),
  city({ name: "Kielce", slug: "kielce", wojewodztwoSlug: "swietokrzyskie", population: 185_000, tier: "B", region: "Ziemia Świętokrzyska" }),
  city({ name: "Gliwice", slug: "gliwice", wojewodztwoSlug: "slaskie", population: 170_000, tier: "B", region: "Śląsk", neighborSlugs: ["katowice"], largerCitySlug: "katowice" }),
  city({ name: "Olsztyn", slug: "olsztyn", wojewodztwoSlug: "warminsko-mazurskie", population: 170_000, tier: "B", region: "Warmia i Mazury" }),
  city({ name: "Zielona Góra", slug: "zielona-gora", wojewodztwoSlug: "lubuskie", population: 140_000, tier: "B", region: "Ziemia Lubuska" }),
  city({ name: "Opole", slug: "opole", wojewodztwoSlug: "opolskie", population: 125_000, tier: "B", region: "Śląsk Opolski" }),
];
