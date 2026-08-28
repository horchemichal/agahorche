import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Minimal, self-contained deployment bundle for self-hosted Node servers
  // (spec §1: ready to deploy without a platform-specific build step) — see
  // .next/standalone/server.js after `next build`.
  output: "standalone",
  // bcryptjs's dual ESM/CJS "exports" map confuses Next's standalone file
  // tracer (unlike `pg`, which traces fine on its own) — without this the
  // package silently gets dropped from .next/standalone/node_modules and
  // any server code importing it (lib/auth/admin-auth.ts, Zadanie 4 Krok 4)
  // throws ERR_MODULE_NOT_FOUND at runtime. `serverExternalPackages` alone
  // only got index.js + package.json copied — the exports map's "require"
  // condition actually resolves to ./umd/index.js, which the tracer missed.
  // outputFileTracingIncludes forces the WHOLE package folder into the
  // standalone bundle regardless of which exports branch the tracer thinks
  // is reachable.
  serverExternalPackages: ["bcryptjs"],
  outputFileTracingIncludes: {
    "*": ["./node_modules/bcryptjs/**"],
  },
  experimental: {
    // Default 1MB is too small for admin media uploads (spec §11).
    serverActions: {
      bodySizeLimit: "8mb",
    },
  },
};

export default nextConfig;
