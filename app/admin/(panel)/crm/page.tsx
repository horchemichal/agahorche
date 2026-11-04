import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getCrmRepository } from "@/lib/database/repositories/crm-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { StatCard } from "@/components/admin/stat-card";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KupilSelect } from "./kupil-select";

export const metadata: Metadata = {
  title: "CRM — Aga Admin",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ status?: string }>;
}

function procent(czesc: number, calosc: number): string {
  return calosc === 0 ? "—" : `${Math.round((czesc / calosc) * 100)}%`;
}

export default async function CrmPage({ searchParams }: Props) {
  await requireAdmin();
  const { status } = await searchParams;
  const wszyscy = await getCrmRepository().list();

  const kupili = wszyscy.filter((k) => k.kupil).length;
  const nieKupili = wszyscy.length - kupili;
  const zPolecenia = wszyscy.filter((k) => k.polecenie === "osoba").length;
  const zeStrony = wszyscy.length - zPolecenia;

  const widoczni =
    status === "nie-kupil" ? wszyscy.filter((k) => !k.kupil) : status === "kupil" ? wszyscy.filter((k) => k.kupil) : wszyscy;

  return (
    <>
      <PanelHeader
        title="CRM"
        description="Klienci dodani ręcznie. Status zmienisz prosto z listy, resztę po kliknięciu w nazwisko."
        action={<ButtonLink href="/admin/crm/nowy">+ Dodaj klienta</ButtonLink>}
      />

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatCard label="Wszyscy klienci" value={wszyscy.length} tone="brand" />
        <StatCard label="Kupili" value={kupili} hint={procent(kupili, wszyscy.length)} />
        <StatCard label="Nie kupili" value={nieKupili} hint={procent(nieKupili, wszyscy.length)} />
        <StatCard label="Z polecenia" value={zPolecenia} hint={procent(zPolecenia, wszyscy.length)} />
        <StatCard label="Ze strony www" value={zeStrony} hint={procent(zeStrony, wszyscy.length)} />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Zakladka href="/admin/crm" active={!status} label={`Wszyscy (${wszyscy.length})`} />
        <Zakladka href="/admin/crm?status=nie-kupil" active={status === "nie-kupil"} label={`Nie kupili (${nieKupili})`} />
        <Zakladka href="/admin/crm?status=kupil" active={status === "kupil"} label={`Kupili (${kupili})`} />
      </div>

      {widoczni.length === 0 ? (
        <EmptyState
          title={wszyscy.length === 0 ? "Nie ma jeszcze klientów" : "Nikogo w tej zakładce"}
          description={wszyscy.length === 0 ? "Kliknij „Dodaj klienta”, żeby wpisać pierwszą osobę." : "Wybierz inną zakładkę powyżej."}
        />
      ) : (
        <div className="space-y-2.5">
          {widoczni.map((k) => (
            <Card key={k.id} className="flex flex-wrap items-center justify-between gap-3 !p-4">
              <div className="min-w-0 flex-1">
                <Link href={`/admin/crm/${k.id}`} className="font-medium text-neutral-900 hover:underline">
                  {k.imieNazwisko}
                </Link>
                <p className="text-sm text-muted">
                  {k.telefon && (
                    <>
                      <a href={`tel:${k.telefon.replace(/[^\d+]/g, "")}`} className="font-medium text-brand-700 underline underline-offset-2">
                        {k.telefon}
                      </a>{" "}
                      ·{" "}
                    </>
                  )}
                  {k.miejscowosc} · {k.polecenie === "osoba" ? `polecił(a): ${k.polecil}` : "strona www"} ·{" "}
                  {new Date(k.createdAt).toLocaleDateString("pl-PL")}
                </p>
              </div>
              <KupilSelect id={k.id} kupil={k.kupil} />
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

function Zakladka({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active ? "bg-brand-600 text-neutral-0" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
      )}
    >
      {label}
    </Link>
  );
}
