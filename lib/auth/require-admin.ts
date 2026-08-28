/**
 * Defense-in-depth companion to proxy.ts (see that file's comment): every
 * Server Action or Server Component under /admin that mutates or reads
 * privileged data should call this rather than trusting the route was
 * reached through proxy.ts. Server Functions are invoked as POSTs to
 * their originating route and proxy matcher mistakes are easy to make
 * silently, so each entry point re-checks for itself.
 */
import "server-only";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth/admin-auth";
import type { AdminProfile } from "@/types/admin";

/** Returns the current admin or redirects to /admin/login. Use in Server Components/Actions. */
export async function requireAdmin(): Promise<AdminProfile> {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect("/admin/login");
  }
  return admin;
}
