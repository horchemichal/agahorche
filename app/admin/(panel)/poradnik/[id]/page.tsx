import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPoradnikRepository } from "@/lib/database/repositories/poradnik-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { PoradnikForm } from "../poradnik-form";

export const metadata: Metadata = {
  title: "Edytuj wpis poradnika — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPoradnikPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const wpis = await getPoradnikRepository().get(id);
  if (!wpis) notFound();

  return (
    <>
      <PanelHeader title="Edytuj wpis poradnika" />
      <PoradnikForm wpis={wpis} />
    </>
  );
}
