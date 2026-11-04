import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { PanelHeader } from "@/components/admin/panel-states";
import { CrmForm } from "../crm-form";

export const metadata: Metadata = {
  title: "Nowy klient — CRM — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NowyKlientPage() {
  await requireAdmin();
  return (
    <>
      <PanelHeader title="Nowy klient" />
      <CrmForm />
    </>
  );
}
