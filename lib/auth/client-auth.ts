/**
 * "Strefa Klienta" authentication (ETAP 7). Mirrors the shape of
 * lib/auth/admin-auth.ts (bcrypt + HMAC-signed cookie) but is entirely its
 * own code path: own table (`client_users`), own cookie
 * (`aga_client_session`), own secret (`CLIENT_AUTH_SECRET`), own token
 * module (client-session-token.ts). A registered client can never sign
 * into /admin and an admin session can never unlock /strefa-klienta.
 *
 * Self-hosted Postgres only — there is no Supabase table for client
 * accounts (this is new functionality, not a migrated one) and no
 * in-memory dev fallback: exactly like /api/ai/* before AI_API_KEY is set
 * (lib/ai/client.ts), registration/login honestly refuse with a clear
 * message when DATABASE_URL isn't configured, rather than pretending to
 * work with data that vanishes on restart. Production has DATABASE_URL set
 * since Zadanie 4, so this works there immediately.
 */
import "server-only";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import {
  createClientSessionToken,
  verifyClientSessionToken,
  type ClientSessionPayload,
} from "@/lib/auth/client-session-token";
import type { ClientAccount } from "@/types/client";

export const CLIENT_SESSION_COOKIE_NAME = "aga_client_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 30; // 30 dni — a returning client shouldn't need to log in every visit

function getClientAuthSecret(): string {
  const secret = process.env.CLIENT_AUTH_SECRET;
  if (!secret) {
    throw new Error(
      "CLIENT_AUTH_SECRET is not set. Generate one (e.g. `openssl rand -base64 32`) and add it to your environment before using /strefa-klienta.",
    );
  }
  return secret;
}

export type ClientAuthResult = { ok: true } | { ok: false; error: string };

async function setSessionCookie(payload: ClientSessionPayload): Promise<void> {
  const token = await createClientSessionToken(payload, getClientAuthSecret());
  const store = await cookies();
  store.set(CLIENT_SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

/** Registers a new client account and immediately signs them in. */
export async function registerClient(input: {
  email: string;
  password: string;
  displayName: string;
  phone?: string;
  consentProcessing: boolean;
  consentMarketing: boolean;
}): Promise<ClientAuthResult> {
  const email = input.email.trim().toLowerCase();
  if (!email || !input.password || !input.displayName.trim()) {
    return { ok: false, error: "Uzupełnij wymagane pola." };
  }
  if (input.password.length < 8) {
    return { ok: false, error: "Hasło musi mieć co najmniej 8 znaków." };
  }
  if (!input.consentProcessing) {
    return { ok: false, error: "Zgoda na przetwarzanie danych jest wymagana." };
  }
  if (!isPostgresConfigured()) {
    return { ok: false, error: "Rejestracja jest chwilowo niedostępna. Spróbuj ponownie później." };
  }
  const pool = getPostgresPool();
  if (!pool) {
    return { ok: false, error: "Rejestracja jest chwilowo niedostępna. Spróbuj ponownie później." };
  }

  const existing = await pool.query("select id from client_users where lower(email) = $1 limit 1", [email]);
  if (existing.rows.length > 0) {
    return { ok: false, error: "Konto z tym adresem e-mail już istnieje." };
  }

  const passwordHash = await bcrypt.hash(input.password, 10);
  const result = await pool.query<{ id: string; email: string; display_name: string }>(
    `insert into client_users (email, password_hash, display_name, phone, consent_processing, consent_marketing)
     values ($1, $2, $3, $4, $5, $6)
     returning id, email, display_name`,
    [email, passwordHash, input.displayName.trim(), input.phone?.trim() || null, input.consentProcessing, input.consentMarketing],
  );
  const row = result.rows[0];

  const now = Math.floor(Date.now() / 1000);
  await setSessionCookie({
    sub: row.id,
    email: row.email,
    displayName: row.display_name,
    iat: now,
    exp: now + SESSION_DURATION_SECONDS,
  });

  return { ok: true };
}

/** Verifies credentials and, on success, sets the signed session cookie. */
export async function signInClient(email: string, password: string): Promise<ClientAuthResult> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) {
    return { ok: false, error: "Podaj adres e-mail i hasło." };
  }
  if (!isPostgresConfigured()) {
    return { ok: false, error: "Logowanie jest chwilowo niedostępne. Spróbuj ponownie później." };
  }
  const pool = getPostgresPool();
  if (!pool) {
    return { ok: false, error: "Logowanie jest chwilowo niedostępne. Spróbuj ponownie później." };
  }

  const result = await pool.query<{ id: string; email: string; display_name: string; password_hash: string }>(
    "select id, email, display_name, password_hash from client_users where lower(email) = $1 limit 1",
    [normalizedEmail],
  );
  const row = result.rows[0];
  if (!row) return { ok: false, error: "Nieprawidłowy e-mail lub hasło." };

  const matches = await bcrypt.compare(password, row.password_hash);
  if (!matches) return { ok: false, error: "Nieprawidłowy e-mail lub hasło." };

  const now = Math.floor(Date.now() / 1000);
  await setSessionCookie({
    sub: row.id,
    email: row.email,
    displayName: row.display_name,
    iat: now,
    exp: now + SESSION_DURATION_SECONDS,
  });

  return { ok: true };
}

/** Reads + verifies the session cookie. Returns null when absent/invalid/expired. */
export async function getCurrentClient(): Promise<ClientAccount | null> {
  const store = await cookies();
  const token = store.get(CLIENT_SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  let secret: string;
  try {
    secret = getClientAuthSecret();
  } catch {
    return null;
  }

  const payload = await verifyClientSessionToken(token, secret);
  if (!payload) return null;

  return {
    id: payload.sub,
    email: payload.email,
    displayName: payload.displayName,
    phone: null,
    createdAt: new Date(payload.iat * 1000).toISOString(),
  };
}

export async function signOutClient(): Promise<void> {
  const store = await cookies();
  store.delete(CLIENT_SESSION_COOKIE_NAME);
}
