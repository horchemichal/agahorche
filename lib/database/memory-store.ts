/**
 * Tiny generic in-memory store shared by every repository's dev fallback
 * (used whenever Supabase env vars aren't set — see each
 * repository's `isSupabaseReady()` check). Not exported outside
 * /lib/database/repositories; keeps the fallback boilerplate in one place
 * instead of repeated per entity.
 *
 * IMPORTANT: this is per-process memory. It resets on server restart and
 * is NOT shared across serverless instances — fine for local development
 * and for verifying this CMS's logic, wrong for production. Production
 * must configure Supabase (see .env.example).
 */
export class MemoryStore<T> {
  private items = new Map<string, T>();

  constructor(
    private getId: (item: T) => string,
    seed: T[] = [],
  ) {
    for (const item of seed) this.items.set(this.getId(item), item);
  }

  list(): T[] {
    return Array.from(this.items.values());
  }

  get(id: string): T | undefined {
    return this.items.get(id);
  }

  set(item: T): T {
    this.items.set(this.getId(item), item);
    return item;
  }

  delete(id: string): boolean {
    return this.items.delete(id);
  }

  clear(): void {
    this.items.clear();
  }
}
