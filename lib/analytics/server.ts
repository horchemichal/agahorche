import type { AnalyticsEventName, AnalyticsEventPayloadMap } from "@/types/analytics";

/**
 * Server-side event logging, used by API routes (e.g. /api/leads after a
 * successful insert). Currently just structured console logging; swap the
 * body of `trackServerEvent` for a real sink (GA4 Measurement Protocol,
 * PostHog, a Supabase table, etc.) without touching call sites.
 */
export function trackServerEvent<K extends AnalyticsEventName>(
  name: K,
  payload: AnalyticsEventPayloadMap[K],
): void {
  console.log(
    JSON.stringify({
      type: "server_event",
      name,
      payload,
      ts: new Date().toISOString(),
    }),
  );
}
