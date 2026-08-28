import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPagesRepository } from "@/lib/database/repositories/pages-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { PageDeleteButton } from "./page-delete-button";

export const metadata: Metadata = {
  title: "Strony — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminStronyPage() {
  await requireAdmin();
  const pages = await getPagesRepository().list();

  return (
    <>
      <PanelHeader
        title="Strony"
        description="Proste strony CMS (np. regulaminy) — dostępne pod /[slug], gdy nie istnieje bardziej szczegółowa trasa."
        action={<ButtonLink href="/admin/strony/nowa">Dodaj stronę</ButtonLink>}
      />

      {pages.length === 0 ? (
        <EmptyState
          title="Brak stron"
          description="Dodaj pierwszą stronę CMS — np. regulamin promocji lub politykę prywatności."
          action={<ButtonLink href="/admin/strony/nowa">Dodaj stronę</ButtonLink>}
        />
      ) : (
        <div className="space-y-3">
          {pages.map((page) => (
            <Card key={page.id} className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Link href={`/admin/strony/${page.id}`} className="font-medium text-neutral-900 hover:underline">
                    {page.title}
                  </Link>
                  <Badge tone={page.status === "published" ? "brand" : "neutral"}>
                    {page.status === "published" ? "Opublikowana" : "Szkic"}
                  </Badge>
                  {!page.indexable && <Badge tone="neutral">noindex</Badge>}
                </div>
                <p className="text-sm text-muted">/{page.slug}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                {page.status === "published" && (
                  <ButtonLink href={`/${page.slug}`} variant="ghost" size="md" className="h-9 px-3.5 text-sm">
                    Podgląd
                  </ButtonLink>
                )}
                <ButtonLink href={`/admin/strony/${page.id}`} variant="outline" size="md" className="h-9 px-3.5 text-sm">
                  Edytuj
                </ButtonLink>
                <PageDeleteButton id={page.id} title={page.title} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
