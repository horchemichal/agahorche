/**
 * Signed session tokens for "Strefa Klienta" (ETAP 7). Intentionally a
 * separate, near-identical twin of lib/auth/session-token.ts rather than a
 * shared generic — the admin session mechanism is production-critical and
 * this project's own convention (see admin-auth.ts's own header comment)
 * is to isolate each auth concern into its own file so changing one can
 * never accidentally affect the other. Same Web Crypto HMAC-SHA256
 * approach, signed with a DIFFERENT secret (`CLIENT_AUTH_SECRET`) and a
 * different payload shape, so an admin token and a client token are never
 * interchangeable even if someone tried.
 */

export interface ClientSessionPayload {
  sub: string; // client_users.id
  email: string;
  displayName: string;
  iat: number;
  exp: number;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function getHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createClientSessionToken(payload: ClientSessionPayload, secret: string): Promise<string> {
  const jsonBytes = new TextEncoder().encode(JSON.stringify(payload));
  const key = await getHmacKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, jsonBytes);
  return `${base64UrlEncode(jsonBytes)}.${base64UrlEncode(new Uint8Array(signature))}`;
}

export async function verifyClientSessionToken(token: string, secret: string): Promise<ClientSessionPayload | null> {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadPart, signaturePart] = parts;

  try {
    const jsonBytes = base64UrlDecode(payloadPart);
    const key = await getHmacKey(secret);
    const valid = await crypto.subtle.verify("HMAC", key, base64UrlDecode(signaturePart), jsonBytes);
    if (!valid) return null;

    const payload = JSON.parse(new TextDecoder().decode(jsonBytes)) as ClientSessionPayload;
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
