import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getSeoSettingsRepository } from "@/lib/database/repositories/seo-settings-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { SeoForm } from "./seo-form";

export const metadata: Metadata = {
  title: "SEO — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminSeoPage() {
  await requireAdmin();
  const [settings, mediaAssets] = await Promise.all([
    getSeoSettingsRepository().get(),
    getMediaRepository().list(),
  ]);
  const imageAssets = mediaAssets.filter((asset) => asset.mimeType.startsWith("image/"));

  return (
    <>
      <PanelHeader
        title="SEO"
        description="Globalne ustawienia SEO — domyślny tytuł, opis, favicon, obraz OG i przełącznik indeksowania/sitemapy dla całej strony (spec §10/§12)."
      />
      <SeoForm settings={settings} mediaAssets={imageAssets} />
    </>
  );
}
