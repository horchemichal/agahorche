import type { Metadata } from "next";
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
/**
 * Panel ma WLASNY manifest, inny niz Aga Club.
 *
 * Root manifest (app/manifest.ts) opisuje aplikacje dla klientek i ma
 * start_url "/strefa-klienta". Bez tego nadpisania Aga, dodajac panel do ekranu
 * glownego, dostawala ikone podpisana "Aga Club", ktora otwierala strefe klienta
 * zamiast ekranu akceptacji. Tutaj manifest kieruje prosto na /admin/do-akceptacji.
 */
export const metadata: Metadata = {
  manifest: "/panel.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Aga Panel",
    statusBarStyle: "black-translucent",
  },
  icons: {
    apple: "/ikony/panel-apple-touch-icon.png",
  },
  robots: { index: false, follow: false },
};

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
