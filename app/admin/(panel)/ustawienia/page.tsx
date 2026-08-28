import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { AdminComingSoon } from "@/components/admin/panel-states";

export const metadata: Metadata = {
  title: "Ustawienia — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminUstawieniaPage() {
  await requireAdmin();
  return <AdminComingSoon title="Ustawienia" note="Ustawienia ogólne panelu pojawią się w kolejnym etapie." />;
}
