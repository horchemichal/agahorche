import type { Location } from "@/types/location";

/**
 * The 16 Polish voivodeships. Names, slugs and regional groupings are
 * public administrative facts. Population figures are well-known rounded
 * approximations (GUS-order-of-magnitude) — flagged via `populationSource`
 * for verification against exact current GUS data before being surfaced
 * anywhere as a precise statistic (spec §42).
 *
 * Sierpień 2026 — zmiana decyzji o indeksowaniu. Wcześniej wszystkie 16
 * województw było `indexable: true`. Problem: każda z tych stron dostaje tę
 * samą wygenerowaną treść szkieletową, więc do indeksu trafiłoby 16 niemal
 * identycznych stron o regionach, w których Aga nie pracuje — czyli dokładnie
 * ten rodzaj duplikatu, na którym wykłada się konkurencja. Indeksowane
 * zostaje tylko Małopolskie: to jedyny region, w którym Aga realnie jeździ
 * z prezentacją, i jedyna fraza regionalna, o którą tu walczymy. Pozostałe
 * strony nadal działają i są dostępne z /wojewodztwa — po prostu nie
 * konkurują same ze sobą w wyszukiwarce. Promocja kolejnego województwa to
 * jedna flaga, po napisaniu dla niego prawdziwej treści.
 */
function base(
  input: Pick<Location, "name" | "slug" | "region" | "population"> & {
    neighborSlugs?: string[];
    indexable?: boolean;
  },
): Location {
  const now = "2026-01-01T00:00:00.000Z";
  return {
    locationId: `woj-${input.slug}`,
    name: input.name,
    slug: input.slug,
    unitType: "wojewodztwo",
    wojewodztwoSlug: null,
    powiatSlug: null,
    gminaSlug: null,
    region: input.region,
    population: input.population,
    populationSource: "GUS — wartość przybliżona, TODO: zweryfikować dokładne dane",
    neighborSlugs: input.neighborSlugs ?? [],
    agaServesLocation: true,
    seoPriority: 5,
    tier: "A",
    seo: {
      indexable: input.indexable ?? false,
      inSitemap: input.indexable ?? false,
      contentStatus: "draft",
    },
    urlPath: `/thermomix/${input.slug}`,
    createdAt: now,
    updatedAt: now,
  };
}

export const WOJEWODZTWA: Location[] = [
  base({ name: "Mazowieckie", slug: "mazowieckie", region: "Mazowsze", population: 5_423_000, neighborSlugs: ["lodzkie", "podlaskie", "lubelskie", "swietokrzyskie", "kujawsko-pomorskie", "warminsko-mazurskie"] }),
  base({ name: "Śląskie", slug: "slaskie", region: "Śląsk", population: 4_370_000, neighborSlugs: ["malopolskie", "opolskie", "swietokrzyskie", "lodzkie"] }),
  base({ name: "Wielkopolskie", slug: "wielkopolskie", region: "Wielkopolska", population: 3_500_000, neighborSlugs: ["lubuskie", "zachodniopomorskie", "kujawsko-pomorskie", "lodzkie", "opolskie", "dolnoslaskie"] }),
  // Jedyne indeksowane województwo — obszar, w którym Aga faktycznie pracuje.
  base({ name: "Małopolskie", slug: "malopolskie", region: "Małopolska", population: 3_400_000, neighborSlugs: ["slaskie", "swietokrzyskie", "podkarpackie"], indexable: true }),
  base({ name: "Dolnośląskie", slug: "dolnoslaskie", region: "Dolny Śląsk", population: 2_900_000, neighborSlugs: ["lubuskie", "wielkopolskie", "opolskie"] }),
  base({ name: "Łódzkie", slug: "lodzkie", region: "Polska Centralna", population: 2_400_000, neighborSlugs: ["mazowieckie", "wielkopolskie", "slaskie", "swietokrzyskie", "kujawsko-pomorskie"] }),
  base({ name: "Pomorskie", slug: "pomorskie", region: "Pomorze", population: 2_340_000, neighborSlugs: ["zachodniopomorskie", "kujawsko-pomorskie", "warminsko-mazurskie"] }),
  base({ name: "Podkarpackie", slug: "podkarpackie", region: "Podkarpacie", population: 2_100_000, neighborSlugs: ["malopolskie", "swietokrzyskie", "lubelskie"] }),
  base({ name: "Kujawsko-Pomorskie", slug: "kujawsko-pomorskie", region: "Kujawy i Pomorze", population: 2_050_000, neighborSlugs: ["pomorskie", "wielkopolskie", "lodzkie", "mazowieckie", "warminsko-mazurskie"] }),
  base({ name: "Lubelskie", slug: "lubelskie", region: "Lubelszczyzna", population: 2_050_000, neighborSlugs: ["mazowieckie", "podkarpackie", "swietokrzyskie", "podlaskie"] }),
  base({ name: "Zachodniopomorskie", slug: "zachodniopomorskie", region: "Pomorze Zachodnie", population: 1_670_000, neighborSlugs: ["pomorskie", "wielkopolskie", "lubuskie"] }),
  base({ name: "Warmińsko-Mazurskie", slug: "warminsko-mazurskie", region: "Warmia i Mazury", population: 1_370_000, neighborSlugs: ["pomorskie", "kujawsko-pomorskie", "mazowieckie", "podlaskie"] }),
  base({ name: "Świętokrzyskie", slug: "swietokrzyskie", region: "Ziemia Świętokrzyska", population: 1_200_000, neighborSlugs: ["mazowieckie", "lodzkie", "slaskie", "malopolskie", "podkarpackie", "lubelskie"] }),
  base({ name: "Podlaskie", slug: "podlaskie", region: "Podlasie", population: 1_140_000, neighborSlugs: ["mazowieckie", "warminsko-mazurskie", "lubelskie"] }),
  base({ name: "Lubuskie", slug: "lubuskie", region: "Ziemia Lubuska", population: 1_000_000, neighborSlugs: ["wielkopolskie", "zachodniopomorskie", "dolnoslaskie"] }),
  base({ name: "Opolskie", slug: "opolskie", region: "Śląsk Opolski", population: 950_000, neighborSlugs: ["dolnoslaskie", "wielkopolskie", "slaskie"] }),
];
