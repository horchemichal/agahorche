import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { OfferForm } from "../offer-form";

export const metadata: Metadata = {
  title: "Nowa oferta — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewOfferPage() {
  await requireAdmin();
  const mediaAssets = (await getMediaRepository().list()).filter((asset) => asset.mimeType.startsWith("image/"));
  return (
    <>
      <PanelHeader title="Nowa oferta" />
      <OfferForm mediaAssets={mediaAssets} />
    </>
  );
}
