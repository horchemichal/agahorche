import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Internal, secret-protected on-demand revalidation endpoint.
 *
 * Why this exists: every public route (homepage included) is fully static
 * (prerendered at `next build`, which has NO access to DATABASE_URL — see
 * RAPORT_AGA_ADMIN.md §9 Krok 7). The only thing that ever refreshes a
 * cached page at runtime is an explicit `revalidatePath` call from *inside*
 * a running request in this Next.js server process — normally triggered by
 * an admin panel save action (see e.g.
 * app/admin/(panel)/strona-glowna/actions.ts). A one-off content fix made
 * directly in Postgres (bypassing the admin panel, e.g. for a quick
 * migration-verification edit) never triggers that call, so the cached
 * page keeps serving stale content until someone opens the admin form and
 * saves it.
 *
 * This route exists so a trusted operator (or a script run with the
 * shared secret) can trigger the exact same revalidation on demand,
 * without needing an admin login/password. It changes nothing in the
 * database — it only clears Next.js's route cache so the next request
 * regenerates the page from current data.
 *
 * Deliberately NOT under /api/n8n/* or exposed to any public form — this
 * is an operator/deploy-time tool, not a public or n8n-facing endpoint.
 * Like the rest of /api/*, robots.txt already blocks it from crawlers
 * (spec §28), so no separate noindex handling is needed here.
 */
export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}) as Record<string, unknown>);

  const rawPaths: unknown[] = Array.isArray(body.paths)
    ? body.paths
    : typeof body.path === "string"
      ? [body.path]
      : ["/"];

  const paths = rawPaths.filter(
    (p: unknown): p is string => typeof p === "string" && p.startsWith("/") && !p.includes(".."),
  );

  if (paths.length === 0) {
    return NextResponse.json({ success: false, error: "No valid paths provided" }, { status: 422 });
  }

  for (const path of paths) {
    revalidatePath(path, "layout");
  }

  return NextResponse.json({ success: true, revalidated: { paths } });
}
