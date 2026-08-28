import { NextResponse } from "next/server";
import { signOutClient } from "@/lib/auth/client-auth";
import { absoluteUrl } from "@/lib/utils";

/**
 * POST-only sign-out (mirrors the shape of admin sign-out, kept as a route
 * handler rather than a bare server action so the dashboard's "Wyloguj"
 * button can be a plain <form method="post"> with zero client JS).
 *
 * Builds the redirect from `absoluteUrl()` (SITE.url env-configured origin)
 * rather than `new URL(path, request.url)` — behind the Traefik/Docker
 * proxy, `request.url` can resolve to the container's internal bind
 * address (e.g. http://0.0.0.0:3000/...) instead of the public origin,
 * sending the browser to an unreachable URL after logout.
 */
export async function POST() {
  await signOutClient();
  return NextResponse.redirect(absoluteUrl("/strefa-klienta/logowanie"));
}
