import { NextResponse, type NextRequest } from "next/server";
import { randomUUID } from "node:crypto";
import { leadFormSchema } from "@/lib/validation/lead";
import { getLeadsRepository } from "@/lib/database/leads-repository";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";
import { trackServerEvent } from "@/lib/analytics/server";
import { forwardLeadToN8n } from "@/lib/n8n/client";
import { sendLeadNotificationEmail } from "@/lib/email/client";
import type { LeadRecord } from "@/types/lead";

/**
 * Real inbox Aga provided for lead notifications (server-side only — never
 * rendered in any page/component; the public contact block intentionally
 * doesn't show an email address). Forwarded to n8n alongside the lead so
 * the notification workflow knows where to send it.
 */
const LEAD_NOTIFICATION_EMAIL = "gunia663@interia.pl";

/**
 * Primary conversion endpoint (spec §22). Flow: validate → rate-limit →
 * persist → fire analytics → forward to n8n (best-effort, non-blocking).
 * Every step is server-side; the client never talks to n8n or the
 * repository directly.
 */
export async function POST(request: NextRequest) {
  const clientKey = getClientKey(request.headers);
  const { allowed } = checkRateLimit(`lead:${clientKey}`, { limit: 5, windowMs: 10 * 60 * 1000 });

  if (!allowed) {
    return NextResponse.json(
      { success: false, error: "Zbyt wiele prób. Spróbuj ponownie za kilka minut." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ success: false, error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Formularz zawiera błędy.", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  // Honeypot tripped — pretend success so bots don't learn anything, but
  // never persist or forward the submission.
  if (parsed.data.website) {
    return NextResponse.json({ success: true, leadId: "discarded" });
  }

  const { source, sourcePath, website: _website, ...values } = parsed.data;
  void _website;

  const record: LeadRecord = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    values,
    source,
    sourcePath,
    status: "NEW",
  };

  await getLeadsRepository().create(record);

  trackServerEvent("submit_lead", { source, sourcePath, city: values.city });

  // Best-effort — a failed n8n forward or email send must never fail the
  // user's submission. n8n stays wired up for when that automation is
  // actually connected (N8N_LEAD_WEBHOOK_URL); the direct email send below
  // is the real notification path today (RESEND_API_KEY / see lib/email/client.ts).
  forwardLeadToN8n(record, LEAD_NOTIFICATION_EMAIL).catch((error) => {
    console.error("[api/leads] n8n forward failed", error);
  });

  sendLeadNotificationEmail(record, LEAD_NOTIFICATION_EMAIL).catch((error) => {
    console.error("[api/leads] lead notification email failed", error);
  });

  return NextResponse.json({ success: true, leadId: record.id });
}
