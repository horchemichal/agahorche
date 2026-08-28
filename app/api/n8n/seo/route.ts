import { NextResponse } from "next/server";
import { computeSeoScore } from "@/lib/seo/scoring";
import { getLocationsRepository } from "@/lib/database/repositories/locations-repository";

/**
 * Inbound webhook FROM n8n carrying Search Console data per location
 * (spec §24/§25/§35): "Search Console → n8n → analiza → AI → rekomendacje
 * SEO". Recomputes the SEO score for the referenced location using
 * /lib/seo/scoring.ts and returns the recommendation. The score itself is
 * intentionally NOT persisted — it's always computed live from current
 * location data, so it can never go stale in storage.
 */
export async function POST(request: Request) {
  const secret = request.headers.get("x-n8n-secret");
  if (!process.env.N8N_INBOUND_SECRET || secret !== process.env.N8N_INBOUND_SECRET) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const location = await getLocationsRepository().get(body?.locationId ?? "");
  if (!location) {
    return NextResponse.json({ success: false, error: "Unknown locationId" }, { status: 404 });
  }

  const result = computeSeoScore({
    population: location.population,
    tier: location.tier,
    hasDedicatedContent: location.seo.contentStatus === "published",
    searchConsole: body.searchConsole,
    organicSessions: body.organicSessions,
  });

  return NextResponse.json({ success: true, locationId: location.locationId, ...result });
}
