import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPagesRepository } from "@/lib/database/repositories/pages-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { PageForm } from "../page-form";

export const metadata: Metadata = {
  title: "Edytuj stronę — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditCmsPagePage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const page = await getPagesRepository().get(id);
  if (!page) notFound();

  return (
    <>
      <PanelHeader title={`Edytuj: ${page.title}`} />
      <PageForm page={page} />
    </>
  );
}
