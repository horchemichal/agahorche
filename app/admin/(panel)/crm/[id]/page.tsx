import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getCrmRepository } from "@/lib/database/repositories/crm-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { CrmForm } from "../crm-form";
import { CrmDeleteButton } from "../crm-delete-button";

export const metadata: Metadata = {
  title: "Klient — CRM — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EdytujKlientaPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();
  const klient = await getCrmRepository().get(id);
  if (!klient) notFound();

  return (
    <>
      <PanelHeader
        title={klient.imieNazwisko}
        description={`Dodany ${new Date(klient.createdAt).toLocaleDateString("pl-PL", { dateStyle: "long" })}`}
      />
      <CrmForm klient={klient} />
      <div className="mt-10 max-w-xl border-t border-border pt-6">
        <CrmDeleteButton id={klient.id} name={klient.imieNazwisko} />
      </div>
    </>
  );
}
