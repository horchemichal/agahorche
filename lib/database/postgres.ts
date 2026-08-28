import "server-only";
import { Pool, types as pgTypes } from "pg";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * Self-hosted Postgres client (Zadanie 4 — migracja z Supabase; Krok 7
 * extends this from just admin-login/media to every repository in
 * /lib/database/repositories).
 *
 * Deliberately separate from lib/database/supabase.ts rather than folded
 * into it: this connects to the `agahorche-postgres` container added in
 * Krok 1, over the internal Docker network (`postgres:5432`, never
 * published to a host port) — a different database from Supabase's,
 * reachable only from other containers on `n8n_default`.
 *
 * Every repository's `rowToX()` mapper was written against Supabase/
 * PostgREST's JSON shape, where `timestamp`/`timestamptz` columns arrive as
 * ISO 8601 strings. node-postgres' own default instead parses those into JS
 * `Date` objects, which would silently break every mapper (e.g.
 * `row.created_at as string` becoming a `Date` at runtime, then
 * `.localeCompare()` calls on it throwing). Rather than touching every
 * mapper, the two OID type parsers are overridden once here, at module
 * load, reusing pg's own (non-naive) parser internally and just
 * re-serializing its result to `.toISOString()`. `date` columns
 * (offers/promotions `starts_at`/`ends_at`) are left as pg's raw
 * `"YYYY-MM-DD"` wire text — same plain-string shape Supabase already
 * returns for those, no Date round-trip needed.
 */
const parseTimestamptz = pgTypes.getTypeParser(1184); // timestamptz -> Date (pg default)
pgTypes.setTypeParser(1184, (value: string) => {
  const parsed = parseTimestamptz(value);
  return parsed instanceof Date ? parsed.toISOString() : value;
});
const parseTimestamp = pgTypes.getTypeParser(1114); // timestamp without tz -> Date (pg default)
pgTypes.setTypeParser(1114, (value: string) => {
  const parsed = parseTimestamp(value);
  return parsed instanceof Date ? parsed.toISOString() : value;
});
pgTypes.setTypeParser(1082, (value: string) => value); // date -> keep raw "YYYY-MM-DD"

/** True once DATABASE_URL is present — same "unset = feature off" pattern as MEDIA_STORAGE_PROVIDER (Krok 3). */
export function isPostgresConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

/**
 * Lazily-created pool, cached on globalThis (see global-singleton.ts) so
 * Server Components/Actions/Route Handlers — separate module layers in
 * Next.js — share one connection pool instead of each opening their own.
 */
export function getPostgresPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;

  return getGlobalSingleton("pg_pool", () => new Pool({ connectionString, max: 5 }));
}

/**
 * Small insert/update helpers used by every Krok 7 `PostgresXRepository`
 * class (lib/database/repositories/*), built once here instead of
 * hand-writing a positional `$1, $2, ...` column list per table (fragile —
 * one column/value pair out of order silently corrupts the wrong field).
 * `table`/`whereColumn` are always static string literals from call sites
 * in this codebase, never user input, and the object keys come from each
 * repository's own `xToRow()` mapper (also static) — safe to interpolate.
 */
export async function pgInsert<T = Record<string, unknown>>(
  pool: Pool,
  table: string,
  row: Record<string, unknown>,
): Promise<T> {
  const keys = Object.keys(row);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const values = keys.map((key) => row[key]);
  const result = await pool.query(`insert into ${table} (${columns}) values (${placeholders}) returning *`, values);
  return result.rows[0] as T;
}

export async function pgUpdate<T = Record<string, unknown>>(
  pool: Pool,
  table: string,
  whereColumn: string,
  whereValue: unknown,
  row: Record<string, unknown>,
): Promise<T | null> {
  const keys = Object.keys(row);
  const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const values = keys.map((key) => row[key]);
  const result = await pool.query(
    `update ${table} set ${setClause} where ${whereColumn} = $${keys.length + 1} returning *`,
    [...values, whereValue],
  );
  return (result.rows[0] as T) ?? null;
}

/** Upsert-by-conflict-column variant — used only by aga_club_challenge_days (day 1-30, fixed row set). */
export async function pgUpsert<T = Record<string, unknown>>(
  pool: Pool,
  table: string,
  conflictColumn: string,
  row: Record<string, unknown>,
): Promise<T> {
  const keys = Object.keys(row);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const updateClause = keys.filter((k) => k !== conflictColumn).map((key) => `${key} = excluded.${key}`).join(", ");
  const values = keys.map((key) => row[key]);
  const result = await pool.query(
    `insert into ${table} (${columns}) values (${placeholders})
     on conflict (${conflictColumn}) do update set ${updateClause}
     returning *`,
    values,
  );
  return result.rows[0] as T;
}
