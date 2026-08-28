import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getFaqRepository } from "@/lib/database/repositories/faq-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { FaqForm } from "../faq-form";

export const metadata: Metadata = {
  title: "Edytuj pytanie FAQ — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditFaqPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const entry = await getFaqRepository().get(id);
  if (!entry) notFound();

  return (
    <>
      <PanelHeader title="Edytuj pytanie FAQ" />
      <FaqForm entry={entry} />
    </>
  );
}
