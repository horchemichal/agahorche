import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { OfferForm } from "../offer-form";

export const metadata: Metadata = {
  title: "Edytuj ofertę — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditOfferPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const [offer, mediaAssets] = await Promise.all([
    getOffersRepository().get(id),
    getMediaRepository().list(),
  ]);
  if (!offer) notFound();
  const imageAssets = mediaAssets.filter((asset) => asset.mimeType.startsWith("image/"));

  return (
    <>
      <PanelHeader title={`Edytuj: ${offer.productName}`} />
      <OfferForm offer={offer} mediaAssets={imageAssets} />
    </>
  );
}
