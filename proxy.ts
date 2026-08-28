/**
 * Route protection for /admin (spec §16: "authoryzacja jest obowiązkowa")
 * and, since ETAP 7, for /strefa-klienta (real client accounts, spec §16
 * CLIENT_ONLY visibility). Two completely separate checks — different
 * cookie, different secret, different token module (see
 * lib/auth/client-session-token.ts vs lib/auth/session-token.ts) — so a
 * client session can never satisfy the /admin check or vice versa.
 *
 * Verifies the signed session cookie directly against the request — no
 * network/database call, so this is cheap to run on every request. This is
 * defense-in-depth, not the only check: Server Actions under app/admin and
 * app/(site)/strefa-klienta also call their own requireAdmin()/
 * getCurrentClient() (per Next.js's own guidance that a proxy matcher
 * change should never be the sole thing standing between a Server Function
 * and an unauthenticated caller).
 *
 * Next.js 16: proxy runs in the Node.js runtime by default, so this could
 * use node:crypto — it deliberately still uses the Web Crypto build in
 * both token modules so the exact same code path is exercised here and in
 * Server Components/Actions.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/auth/session-token";
import { verifyClientSessionToken } from "@/lib/auth/client-session-token";

const ADMIN_SESSION_COOKIE_NAME = "aga_admin_session";
const CLIENT_SESSION_COOKIE_NAME = "aga_client_session";
const CLIENT_ZONE_PUBLIC_PATHS = ["/strefa-klienta/logowanie", "/strefa-klienta/rejestracja"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/strefa-klienta")) {
    if (CLIENT_ZONE_PUBLIC_PATHS.includes(pathname)) {
      return NextResponse.next();
    }

    const token = request.cookies.get(CLIENT_SESSION_COOKIE_NAME)?.value;
    const secret = process.env.CLIENT_AUTH_SECRET;
    const payload = token && secret ? await verifyClientSessionToken(token, secret) : null;

    if (!payload) {
      const loginUrl = new URL("/strefa-klienta/logowanie", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE_NAME)?.value;
  const secret = process.env.AUTH_SECRET;

  const payload = token && secret ? await verifySessionToken(token, secret) : null;

  if (!payload) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/strefa-klienta/:path*"],
};
