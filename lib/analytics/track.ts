"use client";

import type { AnalyticsEventName, AnalyticsEventPayloadMap } from "@/types/analytics";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Single entry point for all client-side analytics events. Pushes to the
 * GTM dataLayer (spec §23/§24) — GTM is responsible for fanning out to
 * GA4 and any other destination, so this file never talks to GA4 directly.
 *
 * Server-side event capture (e.g. submit_lead confirmed server-side) should
 * go through /app/api/analytics instead of this module.
 */
export function track<K extends AnalyticsEventName>(
  name: K,
  payload: AnalyticsEventPayloadMap[K],
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: name,
    ...payload,
  });

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", name, payload);
  }
}
