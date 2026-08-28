import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { UploadForm } from "./upload-form";
import { AssetCard } from "./asset-card";

export const metadata: Metadata = {
  title: "Media — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminMediaPage() {
  await requireAdmin();
  const assets = await getMediaRepository().list();

  return (
    <>
      <PanelHeader
        title="Media"
        description="Biblioteka zdjęć — użyj jako źródło dla zdjęć Agi, Thermomixa i realnych materiałów (spec §31: bez losowych stockowych zdjęć)."
      />

      <div className="mb-6">
        <UploadForm />
      </div>

      {assets.length === 0 ? (
        <EmptyState title="Biblioteka mediów jest pusta" description="Prześlij pierwszy plik powyżej." />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      )}
    </>
  );
}
