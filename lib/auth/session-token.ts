/**
 * Signed session tokens using the Web Crypto API (`crypto.subtle`) rather
 * than `node:crypto` — Web Crypto is available both in normal server
 * code AND in the Edge runtime that `proxy.ts` runs in, so this one
 * implementation works everywhere without a runtime-specific branch.
 *
 * Token shape: `${base64url(json payload)}.${base64url(HMAC-SHA256 signature)}`.
 * This is deliberately NOT a full JWT implementation — just enough to
 * prevent forgery and tampering for our own admin session, signed with a
 * server-only secret (`AUTH_SECRET`) that never reaches the client.
 */

export interface SessionPayload {
  sub: string; // admin id (Supabase auth user id, or "dev-admin" in fallback mode)
  email: string;
  displayName: string;
  role: "admin" | "editor";
  iat: number; // issued-at, unix seconds
  exp: number; // expiry, unix seconds
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

export async function createSessionToken(payload: SessionPayload, secret: string): Promise<string> {
  const json = JSON.stringify(payload);
  const jsonBytes = new TextEncoder().encode(json);
  const key = await getHmacKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, jsonBytes);
  return `${base64UrlEncode(jsonBytes)}.${base64UrlEncode(new Uint8Array(signature))}`;
}

/** Returns the payload if the token is well-formed, correctly signed, and not expired — otherwise null. */
export async function verifySessionToken(token: string, secret: string): Promise<SessionPayload | null> {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadPart, signaturePart] = parts;

  try {
    const jsonBytes = base64UrlDecode(payloadPart);
    const key = await getHmacKey(secret);
    const valid = await crypto.subtle.verify("HMAC", key, base64UrlDecode(signaturePart), jsonBytes);
    if (!valid) return null;

    const payload = JSON.parse(new TextDecoder().decode(jsonBytes)) as SessionPayload;
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
