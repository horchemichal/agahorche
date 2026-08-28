import { connect as tlsConnect, type TLSSocket } from "node:tls";

/**
 * Minimal hand-rolled SMTP client (implicit TLS only, e.g. port 465) —
 * deliberately not the `nodemailer` package. Adding it would have pulled a
 * ~240KB package-lock.json diff through this project's manual VPS deploy
 * path (chunked base64 paste into a web terminal, no git/SSH on the box —
 * see AGENTS.md), which isn't practical. SMTP's wire protocol is simple
 * enough to implement directly with node:tls and zero dependencies, matching
 * the rest of this codebase's plain-fetch integration style (lib/n8n/client.ts).
 *
 * Supports exactly what lib/email/client.ts needs: AUTH PLAIN, a single
 * HTML body, one recipient. Not a general-purpose mail library.
 */

interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
}

interface SmtpMessage {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
}

const RESPONSE_TIMEOUT_MS = 15_000;

function readResponse(socket: TLSSocket): Promise<{ code: number; text: string }> {
  return new Promise((resolve, reject) => {
    let buffer = "";
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`SMTP response timed out after ${RESPONSE_TIMEOUT_MS}ms`));
    }, RESPONSE_TIMEOUT_MS);

    function cleanup() {
      clearTimeout(timer);
      socket.off("data", onData);
      socket.off("error", onError);
    }

    function onData(chunk: Buffer) {
      buffer += chunk.toString("utf8");
      if (!buffer.endsWith("\r\n")) return; // partial line — wait for the rest

      const lines = buffer.split("\r\n").filter(Boolean);
      const last = lines[lines.length - 1];
      // Multi-line SMTP responses use "CODE-" on all but the final line,
      // which uses "CODE " (space). Only resolve once we've seen the final one.
      if (last && /^\d{3} /.test(last)) {
        cleanup();
        resolve({ code: Number(last.slice(0, 3)), text: buffer });
      }
    }

    function onError(err: Error) {
      cleanup();
      reject(err);
    }

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function sendCommand(socket: TLSSocket, command: string): Promise<{ code: number; text: string }> {
  socket.write(`${command}\r\n`);
  return readResponse(socket);
}

function encodeSubject(subject: string): string {
  // RFC 2047 encoded-word — required since subjects here contain Polish diacritics.
  return `=?UTF-8?B?${Buffer.from(subject, "utf8").toString("base64")}?=`;
}

function buildMessage(message: SmtpMessage): string {
  const headers = [
    `From: ${message.from}`,
    `To: ${message.to}`,
    message.replyTo ? `Reply-To: ${message.replyTo}` : null,
    `Subject: ${encodeSubject(message.subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
  ]
    .filter(Boolean)
    .join("\r\n");

  // Dot-stuffing per RFC 5321 §4.5.2 — a line starting with "." inside the
  // body must be escaped, since a lone "." on a line ends the DATA command.
  const body = message.html.replace(/^\./gm, "..");

  return `${headers}\r\n\r\n${body}\r\n.`;
}

export async function sendSmtpMail(config: SmtpConfig, message: SmtpMessage): Promise<void> {
  const socket = tlsConnect({ host: config.host, port: config.port, servername: config.host });

  try {
    await new Promise<void>((resolve, reject) => {
      socket.once("secureConnect", resolve);
      socket.once("error", reject);
    });

    const greeting = await readResponse(socket);
    if (greeting.code !== 220) throw new Error(`SMTP greeting failed: ${greeting.text}`);

    const ehlo = await sendCommand(socket, "EHLO agahorche.pl");
    if (ehlo.code !== 250) throw new Error(`EHLO failed: ${ehlo.text}`);

    const authToken = Buffer.from(`\0${config.user}\0${config.pass}`).toString("base64");
    const auth = await sendCommand(socket, `AUTH PLAIN ${authToken}`);
    if (auth.code !== 235) throw new Error(`SMTP auth failed: ${auth.text}`);

    const mailFrom = await sendCommand(socket, `MAIL FROM:<${message.from}>`);
    if (mailFrom.code !== 250) throw new Error(`MAIL FROM failed: ${mailFrom.text}`);

    const rcptTo = await sendCommand(socket, `RCPT TO:<${message.to}>`);
    if (rcptTo.code !== 250 && rcptTo.code !== 251) throw new Error(`RCPT TO failed: ${rcptTo.text}`);

    const data = await sendCommand(socket, "DATA");
    if (data.code !== 354) throw new Error(`DATA failed: ${data.text}`);

    const sent = await sendCommand(socket, buildMessage(message));
    if (sent.code !== 250) throw new Error(`Message send failed: ${sent.text}`);

    await sendCommand(socket, "QUIT").catch(() => undefined);
  } finally {
    socket.end();
  }
}
