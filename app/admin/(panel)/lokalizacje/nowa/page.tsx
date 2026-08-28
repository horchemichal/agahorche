import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAllWojewodztwa } from "@/lib/locations";
import { PanelHeader } from "@/components/admin/panel-states";
import { LocationForm } from "../location-form";

export const metadata: Metadata = {
  title: "Nowa lokalizacja — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function NewLocationPage() {
  await requireAdmin();
  const wojewodztwa = await getAllWojewodztwa();
  return (
    <>
      <PanelHeader title="Nowa lokalizacja" />
      <LocationForm wojewodztwaOptions={wojewodztwa.map((w) => ({ slug: w.slug, name: w.name }))} />
    </>
  );
}
