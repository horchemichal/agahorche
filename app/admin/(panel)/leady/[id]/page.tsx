import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getLeadsRepository } from "@/lib/database/leads-repository";
import { PanelHeader } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { StatusSelect } from "../status-select";
import { LeadDeleteButton } from "../lead-delete-button";
import type { LeadSource } from "@/types/lead";

export const metadata: Metadata = {
  title: "Szczegóły leadu — Aga Admin",
  robots: { index: false, follow: false },
};

const SOURCE_LABEL: Record<LeadSource, string> = {
  homepage: "Strona główna",
  "thermomix-page": "Strona Thermomix",
  "city-page": "Strona miasta",
  "district-page": "Strona dzielnicy",
  "voivodeship-page": "Strona województwa",
  "presentation-page": "Strona prezentacji",
  blog: "Blog",
  "aga-club": "Aga Club",
  other: "Inne",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function LeadDetailPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const lead = await getLeadsRepository().get(id);
  if (!lead) notFound();

  const rows: [string, string][] = [
    ["Telefon", lead.values.phone],
    ["E-mail", lead.values.email],
    ["Miasto", lead.values.city],
  ];
  if (lead.values.preferredDate) rows.push(["Preferowany termin", lead.values.preferredDate]);
  if (lead.values.presentationType) {
    rows.push([
      "Typ prezentacji",
      lead.values.presentationType === "w-domu" ? "W domu" : lead.values.presentationType === "online" ? "Online" : "Nie wiadomo",
    ]);
  }

  return (
    <>
      <PanelHeader
        title={lead.values.name}
        description={`Zgłoszenie z ${new Date(lead.createdAt).toLocaleString("pl-PL", { dateStyle: "long", timeStyle: "short" })}`}
        action={
          <div className="flex items-center gap-2">
            <StatusSelect id={lead.id} status={lead.status} />
            <LeadDeleteButton id={lead.id} name={lead.values.name} afterDelete="list" />
          </div>
        }
      />

      <div className="max-w-2xl space-y-5">
        <Card>
          <h2 className="mb-4 font-medium text-neutral-900">Dane kontaktowe</h2>
          <dl className="space-y-2.5 text-sm">
            {rows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4">
                <dt className="text-muted">{label}</dt>
                <dd className="text-right font-medium text-neutral-900">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        {lead.values.message && (
          <Card>
            <h2 className="mb-2 font-medium text-neutral-900">Wiadomość</h2>
            <p className="whitespace-pre-wrap text-sm text-neutral-700">{lead.values.message}</p>
          </Card>
        )}

        <Card>
          <h2 className="mb-4 font-medium text-neutral-900">Źródło zgłoszenia</h2>
          <dl className="space-y-2.5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Źródło</dt>
              <dd className="font-medium text-neutral-900">{SOURCE_LABEL[lead.source]}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Ścieżka URL</dt>
              <dd className="font-medium text-neutral-900">{lead.sourcePath}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Zgoda marketingowa</dt>
              <dd>
                <Badge tone={lead.values.consentMarketing ? "brand" : "neutral"}>
                  {lead.values.consentMarketing ? "tak" : "nie"}
                </Badge>
              </dd>
            </div>
          </dl>
          {lead.utm && Object.keys(lead.utm).length > 0 && (
            <div className="mt-4 border-t border-border pt-4">
              <p className="mb-2 text-xs font-medium text-neutral-600">UTM</p>
              <dl className="space-y-1.5 text-xs">
                {Object.entries(lead.utm).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4">
                    <dt className="text-muted">{key}</dt>
                    <dd className="font-medium text-neutral-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </Card>

        <ButtonLink href="/admin/leady" variant="ghost">
          ← Wróć do listy leadów
        </ButtonLink>
      </div>
    </>
  );
}
