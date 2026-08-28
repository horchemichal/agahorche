import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getLocationsRepository } from "@/lib/database/repositories/locations-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AdministrativeUnitType, SeoTier } from "@/types/location";
import { LocationDeleteButton } from "./location-delete-button";

export const metadata: Metadata = {
  title: "Lokalizacje — Aga Admin",
  robots: { index: false, follow: false },
};

const UNIT_LABEL: Record<AdministrativeUnitType, string> = {
  wojewodztwo: "Województwo",
  powiat: "Powiat",
  gmina: "Gmina",
  miasto: "Miasto",
  miejscowosc: "Miejscowość",
};

interface Props {
  searchParams: Promise<{ unitType?: string; tier?: string }>;
}

export default async function AdminLokalizacjePage({ searchParams }: Props) {
  await requireAdmin();
  const { unitType, tier } = await searchParams;
  const all = await getLocationsRepository().list();

  const filtered = all
    .filter((l) => !unitType || l.unitType === unitType)
    .filter((l) => !tier || l.tier === tier)
    .sort((a, b) => a.seoPriority - b.seoPriority || a.name.localeCompare(b.name, "pl"));

  const filterLink = (params: { unitType?: string; tier?: string }) => {
    const merged = { unitType, tier, ...params };
    const qs = new URLSearchParams();
    if (merged.unitType) qs.set("unitType", merged.unitType);
    if (merged.tier) qs.set("tier", merged.tier);
    const query = qs.toString();
    return `/admin/lokalizacje${query ? `?${query}` : ""}`;
  };

  return (
    <>
      <PanelHeader
        title="Lokalizacje"
        description={`${all.length} lokalizacji w bazie — hierarchia województwo → powiat → gmina → miasto → miejscowość.`}
        action={<ButtonLink href="/admin/lokalizacje/nowa">Dodaj lokalizację</ButtonLink>}
      />

      <div className="mb-5 flex flex-wrap gap-2">
        <FilterPill href={filterLink({ unitType: undefined })} active={!unitType} label="Wszystkie typy" />
        {(Object.keys(UNIT_LABEL) as AdministrativeUnitType[]).map((u) => (
          <FilterPill key={u} href={filterLink({ unitType: u })} active={unitType === u} label={UNIT_LABEL[u]} />
        ))}
        <span className="mx-1 self-center text-neutral-300">|</span>
        <FilterPill href={filterLink({ tier: undefined })} active={!tier} label="Wszystkie tiery" />
        {(["A", "B", "C", "long-tail"] as SeoTier[]).map((t) => (
          <FilterPill key={t} href={filterLink({ tier: t })} active={tier === t} label={`Tier ${t}`} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="Brak lokalizacji spełniających filtr"
          description="Zmień filtry powyżej albo dodaj nową lokalizację."
        />
      ) : (
        <div className="space-y-2.5">
          {filtered.map((loc) => (
            <Card key={loc.locationId} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Link href={`/admin/lokalizacje/${loc.locationId}`} className="font-medium text-neutral-900 hover:underline">
                    {loc.name}
                  </Link>
                  <Badge tone="neutral">{UNIT_LABEL[loc.unitType]}</Badge>
                  <Badge tone="neutral">Tier {loc.tier}</Badge>
                  {loc.seo.indexable ? <Badge>Indeksowana</Badge> : <Badge tone="neutral">noindex</Badge>}
                  {loc.agaServesLocation && <Badge>Obsługiwana</Badge>}
                </div>
                <p className="text-sm text-muted">
                  {loc.urlPath} · priorytet {loc.seoPriority}
                  {loc.region ? ` · ${loc.region}` : ""}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                {loc.seo.indexable && (
                  <ButtonLink href={loc.urlPath} variant="ghost" size="md" className="h-9 px-3.5 text-sm">
                    Podgląd
                  </ButtonLink>
                )}
                <ButtonLink href={`/admin/lokalizacje/${loc.locationId}`} variant="outline" size="md" className="h-9 px-3.5 text-sm">
                  Edytuj
                </ButtonLink>
                <LocationDeleteButton id={loc.locationId} name={loc.name} />
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
