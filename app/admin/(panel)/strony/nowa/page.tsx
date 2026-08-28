import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { PanelHeader } from "@/components/admin/panel-states";
import { PageForm } from "../page-form";

export const metadata: Metadata = {
  title: "Nowa strona — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewCmsPagePage() {
  await requireAdmin();
  return (
    <>
      <PanelHeader title="Nowa strona" />
      <PageForm />
    </>
  );
}
