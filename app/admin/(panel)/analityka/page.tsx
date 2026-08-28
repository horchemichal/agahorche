import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { AdminComingSoon } from "@/components/admin/panel-states";

export const metadata: Metadata = {
  title: "Analityka — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminAnalitykaPage() {
  await requireAdmin();
  return <AdminComingSoon title="Analityka" note="Podgląd zdarzeń analitycznych i danych z Search Console pojawi się w kolejnym etapie." />;
}
