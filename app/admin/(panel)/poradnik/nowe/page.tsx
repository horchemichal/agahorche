import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { PanelHeader } from "@/components/admin/panel-states";
import { PoradnikForm } from "../poradnik-form";

export const metadata: Metadata = {
  title: "Nowy wpis poradnika — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewPoradnikPage() {
  await requireAdmin();
  return (
    <>
      <PanelHeader title="Nowy wpis poradnika" />
      <PoradnikForm />
    </>
  );
}
