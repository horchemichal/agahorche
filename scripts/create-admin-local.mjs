#!/usr/bin/env node
/**
 * Bootstraps (or updates) an Aga Admin login against the self-hosted
 * Postgres database (Zadanie 4, Krok 4 — zamiennik dla Supabase Auth).
 * Hashes the password with bcrypt and upserts the `admin_users` row that
 * signInViaLocalPostgres() checks (see lib/auth/admin-auth.ts).
 *
 * Po odcięciu Supabase (sierpień 2026) to jedyny sposób zakładania i
 * zmiany kont do panelu — dawny scripts/create-admin.mjs (Supabase Auth)
 * został usunięty. Konto działa od razu: signInAdmin() sprawdza hasło w
 * Postgresie zawsze, gdy ustawione jest DATABASE_URL.
 *
 * Usage:
 *   node scripts/create-admin-local.mjs --email aga@example.com --password "…" --name "Agnieszka Horche"
 *
 * Requires DATABASE_URL in the environment (same var the app itself uses
 * — see .env.example), pointing at the agahorche-postgres container.
 */
import { Pool } from "pg";
import bcrypt from "bcryptjs";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = argv[i + 1];
      out[key] = value;
      i += 1;
    }
  }
  return out;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const email = args.email?.trim().toLowerCase();
  const password = args.password;
  const displayName = args.name ?? email;
  const role = args.role === "editor" ? "editor" : "admin";

  if (!email || !password) {
    console.error('Usage: node scripts/create-admin-local.mjs --email you@example.com --password "…" [--name "Twoje imię"] [--role admin|editor]');
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("Hasło musi mieć co najmniej 8 znaków.");
    process.exit(1);
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("Missing DATABASE_URL in the environment.");
    process.exit(1);
  }

  const pool = new Pool({ connectionString });

  console.log(`Hashing password and upserting admin_users row for ${email} (role: ${role})…`);
  const passwordHash = await bcrypt.hash(password, 12);

  try {
    await pool.query(
      `insert into admin_users (email, display_name, role, password_hash)
       values ($1, $2, $3, $4)
       on conflict (email) do update
         set display_name = excluded.display_name,
             role = excluded.role,
             password_hash = excluded.password_hash`,
      [email, displayName, role, passwordHash],
    );
  } finally {
    await pool.end();
  }

  console.log(`Gotowe. ${email} może się teraz zalogować na /admin/login.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
