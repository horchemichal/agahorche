import { NextResponse } from "next/server";
import { trackServerEvent } from "@/lib/analytics/server";
import type { AnalyticsEventName } from "@/types/analytics";

/**
 * Server-side event capture endpoint (spec §23/§35). Used for events that
 * must be recorded even if the client-side GTM dataLayer push fails or is
 * blocked (ad blockers, etc.) — e.g. a confirmed lead submission is
 * already tracked server-side directly in /api/leads; this generic
 * endpoint exists for any future event that needs the same guarantee
 * without duplicating that logic per route.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = body?.name as AnalyticsEventName | undefined;

  if (!name) {
    return NextResponse.json({ success: false, error: "Missing event name" }, { status: 400 });
  }

  trackServerEvent(name, body.payload ?? {});
  return NextResponse.json({ success: true });
}
