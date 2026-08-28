import type { Location, LocationBreadcrumb, LocationResolution } from "@/types/location";
import { getLocationsRepository } from "@/lib/database/repositories/locations-repository";

/**
 * Location engine — the single read API every route/component uses to
 * reach location data. Nothing outside `/lib/database/repositories`
 * touches the raw data source; everything else calls these functions.
 *
 * Now backed by `locations-repository.ts` (Supabase, falling back to an
 * in-memory store seeded from the original `/data/locations/*` files) so
 * `/admin/lokalizacje` edits are immediately visible to every public page
 * — spec §21's "jedno źródło prawdy" applied to locations. Every function
 * here is now async as a result; callers were updated accordingly (the
 * data shape and the functions' names/behavior are unchanged).
 */

async function getAllLocations(): Promise<Location[]> {
  return getLocationsRepository().list();
}

/** Resolve a /thermomix/[...slug] segment array against known locations. */
export async function getLocationBySlugPath(segments: string[]): Promise<Location | undefined> {
  const key = segments.join("/");
  const all = await getAllLocations();
  return all.find((l) => l.urlPath.replace(/^\/thermomix\//, "") === key);
}

export async function getWojewodztwoBySlug(slug: string): Promise<Location | undefined> {
  const all = await getAllLocations();
  return all.find((w) => w.unitType === "wojewodztwo" && w.slug === slug);
}

export async function getWojewodztwoForLocation(location: Location): Promise<Location | null> {
  if (!location.wojewodztwoSlug) return null;
  return (await getWojewodztwoBySlug(location.wojewodztwoSlug)) ?? null;
}

export async function getPowiatForLocation(location: Location): Promise<Location | null> {
  if (!location.powiatSlug) return null;
  const all = await getAllLocations();
  return all.find((p) => p.unitType === "powiat" && p.slug === location.powiatSlug) ?? null;
}

export async function getNeighbors(location: Location): Promise<Location[]> {
  const all = await getAllLocations();
  return location.neighborSlugs
    .map((slug) => all.find((l) => l.slug === slug && l.unitType === location.unitType))
    .filter((l): l is Location => Boolean(l));
}

export async function getCitiesInWojewodztwo(wojewodztwoSlug: string): Promise<Location[]> {
  const all = await getAllLocations();
  return all.filter((m) => m.unitType === "miasto" && m.wojewodztwoSlug === wojewodztwoSlug);
}

export async function getAllCities(): Promise<Location[]> {
  const all = await getAllLocations();
  return all.filter((l) => l.unitType === "miasto");
}

export async function getAllWojewodztwa(): Promise<Location[]> {
  const all = await getAllLocations();
  return all.filter((l) => l.unitType === "wojewodztwo").sort((a, b) => a.name.localeCompare(b.name, "pl"));
}

/** All locations currently eligible for indexing/sitemap inclusion. */
export async function getIndexableLocations(): Promise<Location[]> {
  const all = await getAllLocations();
  return all.filter((l) => l.seo.indexable);
}

export async function getLocationsByTier(tier: Location["tier"]): Promise<Location[]> {
  const all = await getAllLocations();
  return all.filter((l) => l.tier === tier);
}

export async function buildLocationBreadcrumbs(location: Location): Promise<LocationBreadcrumb[]> {
  const crumbs: LocationBreadcrumb[] = [{ label: "Thermomix", href: "/thermomix" }];

  if (location.unitType === "wojewodztwo") {
    crumbs.push({ label: location.name, href: location.urlPath });
    return crumbs;
  }

  const wojewodztwo = await getWojewodztwoForLocation(location);
  if (wojewodztwo) {
    crumbs.push({ label: wojewodztwo.name, href: wojewodztwo.urlPath });
  }

  const powiat = await getPowiatForLocation(location);
  if (powiat) {
    crumbs.push({ label: powiat.name, href: powiat.urlPath });
  }

  crumbs.push({ label: location.name, href: location.urlPath });
  return crumbs;
}

export async function resolveLocation(segments: string[]): Promise<LocationResolution | null> {
  const location = await getLocationBySlugPath(segments);
  if (!location) return null;

  const [wojewodztwo, powiat, breadcrumbs, neighbors] = await Promise.all([
    getWojewodztwoForLocation(location),
    getPowiatForLocation(location),
    buildLocationBreadcrumbs(location),
    getNeighbors(location),
  ]);

  return {
    location,
    wojewodztwo,
    powiat,
    breadcrumbs: breadcrumbs.map((c) => ({ label: c.label, href: c.href })),
    neighbors,
  };
}

export async function getLocationById(locationId: string): Promise<Location | undefined> {
  return (await getLocationsRepository().get(locationId)) ?? undefined;
}
