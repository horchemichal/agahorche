import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/auth/require-admin";
import { AdminShell } from "@/components/admin/admin-shell";
import { ToastProvider } from "@/components/admin/toast";
import { logoutAction } from "../actions";

/**
 * Shell for every authenticated /admin/* page (spec §16 ETAP 4: sidebar on
 * desktop, hamburger+drawer on mobile, shared toast system). /admin/login
 * lives outside this route group deliberately, so it never gets the
 * sidebar chrome — see app/admin/login/page.tsx.
 */
export default async function AdminPanelLayout({ children }: { children: ReactNode }) {
  const admin = await requireAdmin();

  return (
    <ToastProvider>
      <AdminShell admin={admin} logoutAction={logoutAction}>
        {children}
      </AdminShell>
    </ToastProvider>
  );
}
