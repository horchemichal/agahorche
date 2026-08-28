/**
 * Admin authentication (spec §16/§17: "Aga Admin" access control).
 *
 * Wyłącznie własny serwer — Postgres w kontenerze `agahorche-postgres`
 * (Zadanie 4, Krok 4). Ścieżka przez Supabase Auth została usunięta przy
 * odcięciu Supabase (sierpień 2026): hasła sprawdzamy wyłącznie względem
 * `admin_users.password_hash` (bcrypt) we własnej bazie.
 *
 * Dwa tryby, sprawdzane w tej kolejności:
 *
 * 1. Własny Postgres — aktywny zawsze, gdy ustawione jest `DATABASE_URL`
 *    (czyli na produkcji zawsze). Konta zakłada scripts/create-admin-local.mjs.
 *    Zmienna `ADMIN_AUTH_PROVIDER=local-vps` nie jest już wymagana —
 *    zostawiona w .env nikomu nie przeszkadza, ale jej brak nie wyłącza
 *    już logowania (wcześniej wyłączał, co potrafiło zablokować panel).
 *
 * 2. Dev fallback (`ADMIN_DEV_EMAIL` / `ADMIN_DEV_PASSWORD`) — TYLKO gdy
 *    nie ma bazy ORAZ `NODE_ENV !== "production"`. W produkcji odmawia
 *    zawsze, więc źle skonfigurowany deploy nie wpuszcza nikogo na
 *    zaszytym haśle.
 *
 * Sesja to niezależnie od trybu nasze własne ciasteczko podpisane HMAC
 * (lib/auth/session-token.ts) — jeden mechanizm sesji dla Server
 * Components, Server Actions i proxy.ts.
 */
import "server-only";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { createSessionToken, verifySessionToken, type SessionPayload } from "@/lib/auth/session-token";
import type { AdminProfile } from "@/types/admin";

export const SESSION_COOKIE_NAME = "aga_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8; // 8h — admin re-authenticates daily-ish, not "forever"

function getAuthSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    // Fail loud rather than silently signing tokens with a guessable
    // fallback — an admin panel is exactly the wrong place for "works
    // by accident because the secret happened to be empty everywhere".
    throw new Error(
      "AUTH_SECRET is not set. Generate one (e.g. `openssl rand -base64 32`) and add it to your environment before using /admin.",
    );
  }
  return secret;
}

export type SignInResult = { ok: true } | { ok: false; error: string };

/** Verifies credentials and, on success, sets the signed session cookie. */
export async function signInAdmin(email: string, password: string): Promise<SignInResult> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) {
    return { ok: false, error: "Podaj adres e-mail i hasło." };
  }

  const payload = isPostgresConfigured()
    ? await signInViaLocalPostgres(normalizedEmail, password)
    : await signInViaDevFallback(normalizedEmail, password);

  if (!payload) {
    return { ok: false, error: "Nieprawidłowy e-mail lub hasło." };
  }

  const token = await createSessionToken(payload, getAuthSecret());
  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });

  return { ok: true };
}

async function signInViaLocalPostgres(email: string, password: string): Promise<SessionPayload | null> {
  if (!isPostgresConfigured()) return null;
  const pool = getPostgresPool();
  if (!pool) return null;

  const result = await pool.query<{ id: string; email: string; display_name: string; role: string; password_hash: string | null }>(
    "select id, email, display_name, role, password_hash from admin_users where email = $1 limit 1",
    [email],
  );
  const row = result.rows[0];
  // No row, or password_hash still NULL (account not yet migrated to this
  // login method — see scripts/create-admin-local.mjs) — same "invalid
  // credentials" outcome as any other failed check, no distinct error
  // message (don't leak which emails exist).
  if (!row || !row.password_hash) return null;

  const matches = await bcrypt.compare(password, row.password_hash);
  if (!matches) return null;

  const now = Math.floor(Date.now() / 1000);
  return {
    sub: row.id,
    email: row.email,
    displayName: row.display_name,
    role: row.role === "editor" ? "editor" : "admin",
    iat: now,
    exp: now + SESSION_DURATION_SECONDS,
  };
}

async function signInViaDevFallback(email: string, password: string): Promise<SessionPayload | null> {
  if (process.env.NODE_ENV === "production") return null; // fail closed, always

  const devEmail = process.env.ADMIN_DEV_EMAIL?.trim().toLowerCase();
  const devPassword = process.env.ADMIN_DEV_PASSWORD;
  if (!devEmail || !devPassword) return null;
  if (email !== devEmail || password !== devPassword) return null;

  const now = Math.floor(Date.now() / 1000);
  return {
    sub: "dev-admin",
    email: devEmail,
    displayName: "Admin (dev)",
    role: "admin",
    iat: now,
    exp: now + SESSION_DURATION_SECONDS,
  };
}

/** Reads + verifies the session cookie. Returns null when absent/invalid/expired. */
export async function getCurrentAdmin(): Promise<AdminProfile | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  let secret: string;
  try {
    secret = getAuthSecret();
  } catch {
    return null;
  }

  const payload = await verifySessionToken(token, secret);
  if (!payload) return null;

  return {
    id: payload.sub,
    email: payload.email,
    displayName: payload.displayName,
    role: payload.role,
    createdAt: new Date(payload.iat * 1000).toISOString(),
  };
}

export async function signOutAdmin(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}
