import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getLeadsRepository } from "@/lib/database/leads-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { Input } from "@/components/ui/form-fields";
import { cn } from "@/lib/utils";
import { StatusSelect, LEAD_STATUS_LABEL } from "./status-select";
import { LeadDeleteButton } from "./lead-delete-button";
import type { LeadStatus, LeadSource } from "@/types/lead";

export const metadata: Metadata = {
  title: "Leady — Aga Admin",
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
  searchParams: Promise<{ status?: string; q?: string }>;
}

export default async function AdminLeadyPage({ searchParams }: Props) {
  await requireAdmin();
  const { status, q } = await searchParams;
  const all = await getLeadsRepository().list();

  const query = (q ?? "").trim().toLowerCase();
  const filtered = all
    .filter((lead) => !status || lead.status === status)
    .filter((lead) => {
      if (!query) return true;
      const haystack = `${lead.values.name} ${lead.values.phone} ${lead.values.email} ${lead.values.city}`.toLowerCase();
      return haystack.includes(query);
    });

  const filterLink = (nextStatus?: string) => {
    const qs = new URLSearchParams();
    if (nextStatus) qs.set("status", nextStatus);
    if (query) qs.set("q", query);
    const query2 = qs.toString();
    return `/admin/leady${query2 ? `?${query2}` : ""}`;
  };

  const counts = new Map<LeadStatus, number>();
  for (const lead of all) counts.set(lead.status, (counts.get(lead.status) ?? 0) + 1);

  return (
    <>
      <PanelHeader
        title="Leady"
        description={`${all.length} zgłoszeń — najważniejszy KPI całego projektu (spec §44). Zmiana statusu zapisuje się natychmiast.`}
      />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <FilterPill href={filterLink(undefined)} active={!status} label={`Wszystkie (${all.length})`} />
          {(Object.keys(LEAD_STATUS_LABEL) as LeadStatus[]).map((s) => (
            <FilterPill key={s} href={filterLink(s)} active={status === s} label={`${LEAD_STATUS_LABEL[s]} (${counts.get(s) ?? 0})`} />
          ))}
        </div>
        <form className="min-w-[220px]" action="/admin/leady" method="get">
          {status && <input type="hidden" name="status" value={status} />}
          <Input name="q" defaultValue={q ?? ""} placeholder="Szukaj: imię, telefon, e-mail, miasto…" className="h-10 py-2 text-sm" />
        </form>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="Brak leadów spełniających filtr"
          description={all.length === 0 ? "Gdy ktoś umówi prezentację przez formularz na stronie, pojawi się tutaj." : "Zmień filtry albo wyszukiwanie powyżej."}
        />
      ) : (
        <div className="space-y-2.5">
          {filtered.map((lead) => (
            <Card key={lead.id} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Link href={`/admin/leady/${lead.id}`} className="font-medium text-neutral-900 hover:underline">
                    {lead.values.name}
                  </Link>
                  <Badge tone="neutral">{SOURCE_LABEL[lead.source]}</Badge>
                  {lead.values.presentationType && (
                    <Badge tone="neutral">
                      {lead.values.presentationType === "w-domu" ? "W domu" : lead.values.presentationType === "online" ? "Online" : "Nie wiem"}
                    </Badge>
                  )}
                </div>
                <p className="truncate text-sm text-muted">
                  {lead.values.phone} · {lead.values.email} · {lead.values.city} ·{" "}
                  {new Date(lead.createdAt).toLocaleString("pl-PL", { dateStyle: "medium", timeStyle: "short" })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <StatusSelect id={lead.id} status={lead.status} />
                <LeadDeleteButton id={lead.id} name={lead.values.name} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function FilterPill({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
        active ? "bg-brand-600 text-neutral-0" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
      )}
    >
      {label}
    </Link>
  );
}
