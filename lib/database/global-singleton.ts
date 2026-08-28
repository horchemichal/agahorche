/**
 * Cross-module-layer singleton cache, keyed on `globalThis`.
 *
 * Next.js compiles Route Handlers (app/api/*), Server Components/pages,
 * and Server Actions into SEPARATE module graphs ("layers"), even though
 * they all run in the same Node.js process. A plain `let cached = null`
 * at module scope therefore does NOT reliably share state across those
 * layers — each layer gets its own instantiation of the module. This bit
 * us concretely: a lead created via POST /api/leads (a Route Handler)
 * was invisible to the /admin dashboard (a Server Component) in the very
 * same running dev server, because each had its own `repository` variable.
 *
 * Storing the singleton on `globalThis` sidesteps this — `globalThis` is
 * the one JS global object shared by the whole process regardless of
 * which layer a module was compiled into. This is the same fix Next.js's
 * own docs recommend for the Prisma Client singleton, for the identical
 * reason (plus surviving dev-mode Fast Refresh module reloads).
 *
 * Only meaningful for the in-memory fallback (a real Supabase-backed
 * repository has no in-process state to lose either way) — but the cache
 * itself doesn't know which mode it's in, so every repository factory
 * uses this uniformly.
 */
export function getGlobalSingleton<T>(key: string, factory: () => T): T {
  const registry = globalThis as unknown as Record<string, unknown>;
  const cacheKey = `__aga_${key}`;
  if (!registry[cacheKey]) {
    registry[cacheKey] = factory();
  }
  return registry[cacheKey] as T;
}
