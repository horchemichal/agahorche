import { cn } from "@/lib/utils";
import type { DashboardStats } from "@/lib/admin/dashboard-stats";

const ROWS: { key: keyof DashboardStats["integrations"]; label: string }[] = [
  { key: "database", label: "Baza danych (własny serwer)" },
  { key: "n8nLead", label: "n8n — webhook leadów" },
  { key: "n8nSeo", label: "n8n — webhook SEO" },
  { key: "n8nSocial", label: "n8n — webhook social media" },
  { key: "ai", label: "Dostawca AI" },
  { key: "gtm", label: "Google Tag Manager" },
];

/** Reads only boolean "is an env var set" flags — never renders secret values. */
export function IntegrationStatus({ integrations }: { integrations: DashboardStats["integrations"] }) {
  return (
    <ul className="space-y-2.5">
      {ROWS.map((row) => {
        const ok = integrations[row.key];
        return (
          <li key={row.key} className="flex items-center justify-between text-sm">
            <span className="text-neutral-700">{row.label}</span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                ok ? "bg-brand-50 text-brand-700" : "bg-neutral-100 text-neutral-500",
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", ok ? "bg-brand-500" : "bg-neutral-400")} />
              {ok ? "Skonfigurowano" : "Nieskonfigurowano"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
