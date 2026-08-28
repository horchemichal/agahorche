/**
 * Minimal in-memory rate limiter (spec §39: "Rate limiting tam, gdzie
 * potrzebne"). Good enough for a single-instance deployment; if the app
 * moves to a multi-instance/edge deployment, swap the Map for a shared
 * store (Upstash Redis, Supabase) behind this same function signature.
 */
const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (bucket.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  bucket.count += 1;
  return { allowed: true, remaining: limit - bucket.count };
}

/** Best-effort client identifier from request headers (no auth yet). */
export function getClientKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "unknown";
}
