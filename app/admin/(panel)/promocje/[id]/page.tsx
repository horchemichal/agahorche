import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPromotionsRepository } from "@/lib/database/repositories/promotions-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { PromotionForm } from "../promotion-form";

export const metadata: Metadata = {
  title: "Edytuj promocję — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPromotionPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const promotion = await getPromotionsRepository().get(id);
  if (!promotion) notFound();

  return (
    <>
      <PanelHeader title={`Edytuj: ${promotion.title}`} />
      <PromotionForm promotion={promotion} />
    </>
  );
}
