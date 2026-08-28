import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { PanelHeader } from "@/components/admin/panel-states";
import { FaqForm } from "../faq-form";

export const metadata: Metadata = {
  title: "Nowe pytanie FAQ — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewFaqPage() {
  await requireAdmin();
  return (
    <>
      <PanelHeader title="Nowe pytanie FAQ" />
      <FaqForm />
    </>
  );
}
