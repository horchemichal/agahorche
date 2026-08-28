import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getHomepageContentRepository } from "@/lib/database/repositories/homepage-content-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { HomepageContentForm } from "./homepage-content-form";

export const metadata: Metadata = {
  title: "Strona główna — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminStronaGlownaPage() {
  await requireAdmin();
  const [content, mediaAssets] = await Promise.all([
    getHomepageContentRepository().get(),
    getMediaRepository().list(),
  ]);
  const imageAssets = mediaAssets.filter((asset) => asset.mimeType.startsWith("image/"));

  return (
    <>
      <PanelHeader
        title="Strona główna"
        description="Zdjęcia i teksty sekcji hero oraz „Gdzie pracuje Aga” na stronie głównej — zmiany są widoczne od razu po zapisaniu."
      />
      <HomepageContentForm content={content} mediaAssets={imageAssets} />
    </>
  );
}
