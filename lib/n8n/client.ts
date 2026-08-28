import type { LeadRecord } from "@/types/lead";

/**
 * n8n integration layer (spec §35). Every function here posts to a
 * webhook URL read from env vars — nothing is hardcoded, and every call
 * is a no-op (logged, not thrown) when the corresponding env var is unset,
 * so local/dev/staging environments never accidentally hit production
 * automations.
 *
 * Workflow this maps to: Lead → n8n → CRM/Airtable → Aga.
 */
async function postToWebhook(envVar: string, payload: unknown): Promise<void> {
  const url = process.env[envVar];
  if (!url) {
    console.log(`[n8n] ${envVar} not configured — skipping forward (dev no-op).`);
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`n8n webhook ${envVar} responded ${res.status}`);
  }
}

/**
 * `notifyEmail` is the real inbox Aga wants lead notifications routed to —
 * it travels only in this server-to-server payload (n8n reads it and sends
 * the actual notification email) and must never be rendered in any
 * component or API response the browser can see.
 */
export function forwardLeadToN8n(lead: LeadRecord, notifyEmail?: string): Promise<void> {
  return postToWebhook("N8N_LEAD_WEBHOOK_URL", {
    event: "lead.created",
    lead,
    notifyEmail,
  });
}

/** Search Console → n8n → AI → SEO recommendation workflow entry point. */
export function forwardSeoSignalToN8n(payload: unknown): Promise<void> {
  return postToWebhook("N8N_SEO_WEBHOOK_URL", { event: "seo.signal", payload });
}

/** Social media → n8n → AI → blog/SEO workflow entry point. */
export function forwardSocialContentToN8n(payload: unknown): Promise<void> {
  return postToWebhook("N8N_SOCIAL_WEBHOOK_URL", { event: "social.content", payload });
}
