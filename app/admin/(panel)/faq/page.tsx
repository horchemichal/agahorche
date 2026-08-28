import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getFaqRepository } from "@/lib/database/repositories/faq-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { FaqDeleteButton } from "./faq-delete-button";

export const metadata: Metadata = {
  title: "FAQ — Aga Admin",
  robots: { index: false, follow: false },
};

const ENTITY_LABEL: Record<string, string> = {
  global: "Globalnie",
  page: "Strona",
  product: "Produkt",
  city: "Miasto",
  article: "Artykuł",
  "aga-club": "Aga Club",
};

export default async function AdminFaqPage() {
  await requireAdmin();
  const entries = await getFaqRepository().list();

  return (
    <>
      <PanelHeader
        title="FAQ"
        description="Centralne pytania i odpowiedzi — zasilają FAQPage schema.org i sekcje FAQ na całej stronie."
        action={<ButtonLink href="/admin/faq/nowe">Dodaj pytanie</ButtonLink>}
      />

      {entries.length === 0 ? (
        <EmptyState
          title="Brak pytań FAQ"
          description="Dodaj pierwsze pytanie — globalne albo przypisane do konkretnej strony/miasta."
          action={<ButtonLink href="/admin/faq/nowe">Dodaj pytanie</ButtonLink>}
        />
      ) : (
        <div className="space-y-2.5">
          {entries.map((entry) => (
            <Card key={entry.id} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Link href={`/admin/faq/${entry.id}`} className="font-medium text-neutral-900 hover:underline">
                    {entry.question}
                  </Link>
                  <Badge tone="neutral">{ENTITY_LABEL[entry.entityType]}</Badge>
                  {!entry.active && <Badge tone="neutral">nieaktywne</Badge>}
                </div>
                <p className="truncate text-sm text-muted">{entry.answer}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <ButtonLink href={`/admin/faq/${entry.id}`} variant="outline" size="md" className="h-9 px-3.5 text-sm">
                  Edytuj
                </ButtonLink>
                <FaqDeleteButton id={entry.id} question={entry.question} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
