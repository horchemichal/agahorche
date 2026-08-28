import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getDashboardStats } from "@/lib/admin/dashboard-stats";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { StatCard } from "@/components/admin/stat-card";
import { LeadsChart } from "@/components/admin/leads-chart";
import { IntegrationStatus } from "@/components/admin/integration-status";
import { Card } from "@/components/ui/card";
import { formatPln } from "@/lib/format";

export const metadata: Metadata = {
  title: "Panel — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const admin = await requireAdmin();
  const stats = await getDashboardStats();

  return (
    <>
      <PanelHeader
        title="Dashboard"
        description={`Zalogowano jako ${admin.email} (${admin.role === "admin" ? "administrator" : "edytor"}).`}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Leady łącznie" value={stats.leads.total} tone="brand" />
        <StatCard label="Nowe leady" value={stats.leads.new} hint="status: NEW" />
        <StatCard
          label="Prośby o prezentację"
          value={stats.leads.presentationRequests}
          hint="leady z wybranym typem prezentacji"
        />
        <StatCard
          label="Aktywne promocje"
          value={stats.activePromotions.length}
          hint={stats.activeOffer ? `Oferta: ${stats.activeOffer.productName}` : "Brak aktywnej oferty"}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="mb-4 font-medium text-neutral-900">Leady — ostatnie 14 dni</h2>
          {stats.leads.total > 0 ? (
            <LeadsChart data={stats.leads.last14Days} />
          ) : (
            <EmptyState
              title="Brak leadów"
              description="Gdy pojawią się pierwsze zgłoszenia z formularza, zobaczysz tu ich rozkład dzień po dniu."
            />
          )}
        </Card>

        <Card>
          <h2 className="mb-4 font-medium text-neutral-900">Status integracji</h2>
          <IntegrationStatus integrations={stats.integrations} />
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <h2 className="mb-1 font-medium text-neutral-900">SEO — podstawy</h2>
          <p className="mb-4 text-xs text-muted">
            Pełne globalne ustawienia SEO trafią do{" "}
            <Link href="/admin/seo" className="underline">
              /admin/seo
            </Link>{" "}
            w kolejnym etapie.
          </p>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Domyślne roboty</dt>
              <dd className="font-medium text-neutral-900">{stats.seo.robotsDefault}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Sitemap</dt>
              <dd className="font-medium text-neutral-900">
                {stats.seo.sitemapEnabled ? "włączona" : "wyłączona"}
              </dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="mb-4 font-medium text-neutral-900">Ostatnie artykuły</h2>
          {stats.recentPosts.length > 0 ? (
            <ul className="space-y-2.5 text-sm">
              {stats.recentPosts.map((post) => (
                <li key={post.id} className="flex items-center justify-between gap-3">
                  <span className="truncate text-neutral-800">{post.title}</span>
                  <span className="shrink-0 text-xs text-muted">{post.status}</span>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Brak artykułów" description="Artykuły dodane w /admin/blog pojawią się tutaj." />
          )}
        </Card>

        <Card>
          <h2 className="mb-1 font-medium text-neutral-900">Popularne miasta i strony</h2>
          <p className="text-xs text-muted">
            Te dane wymagają połączenia z Google Search Console / Google Analytics — architektura jest
            gotowa (spec §24), integracja jeszcze nie jest podłączona, więc celowo nie pokazujemy tu
            wymyślonych liczb.
          </p>
        </Card>
      </div>

      {stats.activeOffer && (
        <p className="mt-6 text-xs text-muted">
          Aktualna cena w ofercie „{stats.activeOffer.productName}”:{" "}
          <strong className="text-neutral-800">{formatPln(stats.activeOffer.priceCents) ?? "—"}</strong>{" "}
          — zmień ją w{" "}
          <Link href="/admin/oferta" className="underline">
            /admin/oferta
          </Link>
          , a zaktualizuje się wszędzie na stronie.
        </p>
      )}
    </>
  );
}
