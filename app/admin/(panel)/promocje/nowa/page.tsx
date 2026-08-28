import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { PanelHeader } from "@/components/admin/panel-states";
import { PromotionForm } from "../promotion-form";

export const metadata: Metadata = {
  title: "Nowa promocja — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewPromotionPage() {
  await requireAdmin();
  return (
    <>
      <PanelHeader title="Nowa promocja" />
      <PromotionForm />
    </>
  );
}
