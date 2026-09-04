import { sendSmtpMail } from "@/lib/email/smtp";
import type { LeadRecord } from "@/types/lead";

/**
 * Direct transactional email — the simple alternative to the n8n webhook
 * path (spec §35 originally routed lead notifications through n8n, but
 * that automation was never actually connected: N8N_LEAD_WEBHOOK_URL was
 * left unset, so forwardLeadToN8n() in lib/n8n/client.ts silently no-oped
 * on every submission and Aga never received a single notification email).
 *
 * Sends over plain SMTP (lib/email/smtp.ts), authenticating as Aga's own
 * existing mailbox (SMTP_USER/SMTP_PASSWORD) — deliberately NOT a
 * third-party email API (Resend, SendGrid, …), because Aga doesn't want to
 * create a new account anywhere. Email fundamentally requires the sender
 * to authenticate as *some* real mailbox (that's what stops anyone from
 * sending as anyone); reusing a mailbox she already owns avoids signing up
 * for anything new. Defaults target interia.pl's SMTP server since that's
 * the mailbox in use today (gunia663@interia.pl) — override via env if
 * that ever changes.
 *
 * Same no-op-when-unconfigured pattern as postToWebhook() in
 * lib/n8n/client.ts: a missing password logs and skips rather than throws,
 * so local/dev never accidentally sends real email.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const PRESENTATION_LABELS: Record<string, string> = {
  "w-domu": "W domu",
  online: "Online",
  "nie-wiem": "Nie wiem jeszcze",
};

/**
 * Sends Aga a plain-language notification for a new lead. Best-effort —
 * callers must treat a rejected promise as non-fatal to the user's
 * submission (see app/api/leads/route.ts).
 */
export async function sendLeadNotificationEmail(lead: LeadRecord, notifyEmail: string): Promise<void> {
  const host = process.env.SMTP_HOST || "smtp.interia.pl";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.log("[email] SMTP_USER or SMTP_PASSWORD not configured — skipping lead email (dev no-op).");
    return;
  }

  const { values } = lead;
  const rows: Array<[string, string | undefined]> = [
    ["Imię i nazwisko", values.name],
    ["Telefon", values.phone],
    ["E-mail", values.email],
    ["Miasto", values.city],
    ["Preferowany termin", values.preferredDate],
    ["Forma prezentacji", values.presentationType ? PRESENTATION_LABELS[values.presentationType] : undefined],
    ["Wiadomość", values.message],
    ["Źródło", lead.sourcePath],
  ];

  const htmlRows = rows
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#635c4e;">${escapeHtml(label)}</td><td>${escapeHtml(value!)}</td></tr>`)
    .join("");

  const html = `
    <div style="font-family:sans-serif;color:#201e19;">
      <h2 style="margin-bottom:4px;">Nowe zgłoszenie ze strony</h2>
      <p style="color:#635c4e;margin-top:0;">agahorche.pl — ${escapeHtml(lead.sourcePath)}</p>
      <table style="border-collapse:collapse;">${htmlRows}</table>
    </div>
  `.trim();

  await sendSmtpMail(
    { host, port, user, pass },
    {
      from: user,
      to: notifyEmail,
      replyTo: values.email || undefined,
      subject: `Nowe zgłoszenie: ${values.name} (${values.city})`,
      html,
    },
  );
}

/**
 * List z linkiem do ustawienia nowego hasła w Strefie Klienta
 * (patrz lib/auth/reset-hasla.ts).
 *
 * CO ŚWIADOMIE NIE TRAFIA DO TEGO MAILA:
 *
 * - hasło, ani stare, ani nowe — hasła w bazie są zahaszowane bcryptem
 *   i nikt, łącznie z Agą, nie umie ich odczytać; wysyłanie hasła mailem
 *   znaczyłoby, że gdzieś leży czytelne
 * - imię w temacie — temat maila widać na ekranie blokady telefonu
 *
 * Zdanie „jeśli to nie Ty" jest tu naprawdę potrzebne: link do resetu może
 * zamówić ktokolwiek, kto zna adres. Bez tego zdania mail wygląda jak
 * włamanie; z nim — jak pomyłka, którą wystarczy zignorować.
 */
export async function wyslijMailResetuHasla(
  doKogo: string,
  imie: string,
  link: string,
  waznoscMinut: number,
): Promise<void> {
  const host = process.env.SMTP_HOST || "smtp.interia.pl";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.log("[email] Brak SMTP_USER/SMTP_PASSWORD — pomijam mail resetu hasla (tryb lokalny).");
    return;
  }

  const imieBezpieczne = escapeHtml(imie.split(" ")[0] || "");
  const linkBezpieczny = escapeHtml(link);

  const html = `
    <div style="font-family:sans-serif;color:#201e19;line-height:1.6;">
      <p>Cześć${imieBezpieczne ? ` ${imieBezpieczne}` : ""},</p>
      <p>ktoś (mam nadzieję, że Ty) poprosił o ustawienie nowego hasła do Strefy Klienta na agahorche.pl.</p>
      <p style="margin:24px 0;">
        <a href="${linkBezpieczny}" style="display:inline-block;background:#00973d;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:9999px;font-weight:600;">
          Ustaw nowe hasło
        </a>
      </p>
      <p style="color:#635c4e;font-size:14px;">
        Link działa przez ${waznoscMinut} minut i tylko raz. Jeśli przycisk nie działa, wklej ten adres w przeglądarkę:<br>
        <span style="word-break:break-all;">${linkBezpieczny}</span>
      </p>
      <p style="color:#635c4e;font-size:14px;">
        Jeśli to nie Ty prosiłaś o zmianę — po prostu zignoruj tę wiadomość. Twoje hasło pozostaje bez zmian.
      </p>
      <p style="color:#635c4e;font-size:14px;margin-top:24px;">Aga Horche · oficjalna przedstawicielka Thermomix</p>
    </div>
  `.trim();

  await sendSmtpMail(
    { host, port, user, pass },
    { from: user, to: doKogo, subject: "Nowe hasło do Strefy Klienta — agahorche.pl", html },
  );
}
