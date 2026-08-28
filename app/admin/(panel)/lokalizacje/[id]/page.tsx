import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getLocationsRepository } from "@/lib/database/repositories/locations-repository";
import { getAllWojewodztwa } from "@/lib/locations";
import { PanelHeader } from "@/components/admin/panel-states";
import { LocationForm } from "../location-form";

export const metadata: Metadata = {
  title: "Edytuj lokalizację — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditLocationPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const [location, wojewodztwa] = await Promise.all([getLocationsRepository().get(id), getAllWojewodztwa()]);
  if (!location) notFound();

  return (
    <>
      <PanelHeader title={`Edytuj: ${location.name}`} />
      <LocationForm location={location} wojewodztwaOptions={wojewodztwa.map((w) => ({ slug: w.slug, name: w.name }))} />
    </>
  );
}
