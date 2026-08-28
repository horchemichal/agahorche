import type { Location } from "@/types/location";

/**
 * Demonstrates the deeper powiat → miejscowość layers from spec §7's own
 * example (Małopolskie → powiat krakowski → Wieliczka) using real,
 * verifiable entities. This is NOT the full 380-powiat dataset — it exists
 * so the location engine, nested routing and breadcrumb logic are proven
 * against a real 4-level path before the dataset is scaled out.
 *
 * These deeper layers use a nested URL (/thermomix/[woj]/[powiat]/[miasto])
 * rather than the flat pattern used for major cities in miasta.ts, since
 * smaller localities are more likely to have ambiguous/shared names and
 * benefit from the disambiguating path.
 */
const now = "2026-01-01T00:00:00.000Z";

export const POWIATY_DEMO: Location[] = [
  {
    locationId: "powiat-krakowski",
    name: "powiat krakowski",
    slug: "krakowski",
    unitType: "powiat",
    wojewodztwoSlug: "malopolskie",
    powiatSlug: null,
    gminaSlug: null,
    region: "Małopolska",
    neighborSlugs: [],
    agaServesLocation: true,
    seoPriority: 60,
    tier: "long-tail",
    seo: { indexable: false, inSitemap: false, contentStatus: "draft" },
    urlPath: "/thermomix/malopolskie/krakowski",
    createdAt: now,
    updatedAt: now,
  },
];

/**
 * SIERPIEŃ 2026 — pusta celowo.
 *
 * Był tu jeden wpis (Wieliczka pod /thermomix/malopolskie/krakowski/wieliczka),
 * który powstał, żeby pokazać, że routing hierarchiczny działa. Wieliczka
 * dostała własną treść i trafiła do MALOPOLSKA_AGI pod /thermomix/wieliczka —
 * krótszy adres, spójny z /thermomix/krakow.
 *
 * Tablica zostaje, bo resolver i tak ją czyta, a hierarchiczny routing dalej
 * jest obsługiwany (dowodzi tego kod w lib/locations, nie obecność danych).
 * Gdyby kiedyś pojawiła się miejscowość, którą naprawdę warto zagnieździć
 * pod powiatem — jest gdzie ją dopisać.
 */
export const MIEJSCOWOSCI_DEMO: Location[] = [];
