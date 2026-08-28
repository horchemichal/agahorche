import { NextResponse } from "next/server";
import { getLocationsRepository } from "@/lib/database/repositories/locations-repository";
import { computeSeoScore } from "@/lib/seo/scoring";

/**
 * Read-only locations API (spec §35: n8n endpoints for "locations"; also
 * doubles as the data source for a future admin dashboard, spec §41).
 * Returns the full location dataset with live-computed SEO scores —
 * useful for n8n/AI workflows deciding which location to build/optimize
 * next (spec §26).
 *
 * GET /api/locations            -> all locations
 * GET /api/locations?tier=A     -> filter by tier
 * GET /api/locations?indexable=true
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tier = searchParams.get("tier");
  const indexable = searchParams.get("indexable");

  let locations = await getLocationsRepository().list();
  if (tier) locations = locations.filter((l) => l.tier === tier);
  if (indexable !== null) {
    const want = indexable === "true";
    locations = locations.filter((l) => l.seo.indexable === want);
  }

  const withScores = locations.map((location) => ({
    ...location,
    seoScore: computeSeoScore({
      population: location.population,
      tier: location.tier,
      hasDedicatedContent: location.seo.contentStatus === "published",
    }),
  }));

  return NextResponse.json({ count: withScores.length, locations: withScores });
}
