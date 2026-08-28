import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { isAiConfigured } from "@/lib/ai/client";
import { PanelHeader } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI — Aga Admin",
  robots: { index: false, follow: false },
};

const ENDPOINTS = [
  {
    path: "/api/ai/chat",
    label: "Aga AI (czat)",
    description: "Zadaj pytanie o gotowanie z Thermomixem i dostań odpowiedź od razu (spec §16, §34).",
  },
  {
    path: "/api/ai/meal-suggest",
    label: "Co dziś ugotować? / Moja lodówka",
    description: "Podpowiedź dania na podstawie posiadanych składników (spec §17, §18).",
  },
];

const ROADMAP = [
  "Analiza zapytań użytkowników",
  "Generowanie treści (content)",
  "Analiza danych z Google Search Console",
  "Propozycje pytań FAQ",
  "Propozycje linkowania wewnętrznego",
  "Analiza CTR",
  "Propozycje poprawek SEO",
];

function StatusBadge({ ok, okLabel, notOkLabel }: { ok: boolean; okLabel: string; notOkLabel: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        ok ? "bg-brand-50 text-brand-700" : "bg-neutral-100 text-neutral-500",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", ok ? "bg-brand-500" : "bg-neutral-400")} />
      {ok ? okLabel : notOkLabel}
    </span>
  );
}

export default async function AdminAIPage() {
  await requireAdmin();
  const configured = isAiConfigured();
  const model = process.env.AI_MODEL || null;

  return (
    <>
      <PanelHeader
        title="AI"
        description="Architektura pod funkcje AI (spec §34) — bez kosztownej pełnej implementacji na tym etapie. Żaden endpoint nie generuje jeszcze prawdziwych odpowiedzi."
      />

      <div className="max-w-2xl space-y-5">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-medium text-neutral-900">Dostawca AI</h2>
            <StatusBadge ok={configured} okLabel="Klucz ustawiony" notOkLabel="Nieskonfigurowano" />
          </div>
          <p className="text-sm text-muted">
            {configured
              ? `Zmienna AI_API_KEY jest ustawiona${model ? ` (model: ${model})` : ""}. Samo wywołanie modelu (lib/ai/client.ts#requestAiCompletion) nie jest jeszcze zaimplementowane — celowo, żeby nie wiązać się z konkretnym dostawcą przedwcześnie.`
              : "Ustaw AI_API_KEY (i opcjonalnie AI_MODEL) w zmiennych środowiskowych, aby przejść do wdrożenia realnego dostawcy (Anthropic/OpenAI/inny)."}
          </p>
        </Card>

        <Card>
          <h2 className="mb-4 font-medium text-neutral-900">Endpointy</h2>
          <div className="space-y-4">
            {ENDPOINTS.map((endpoint) => (
              <div key={endpoint.path} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="mb-1 flex items-center justify-between gap-3">
                  <span className="font-medium text-neutral-900">{endpoint.label}</span>
                  <Badge tone="neutral">{endpoint.path}</Badge>
                </div>
                <p className="text-sm text-muted">{endpoint.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Oba endpointy zwracają dziś jasny komunikat „niedostępne” zamiast zmyślonej odpowiedzi — zgodnie z zasadą
            §42 (nigdy nie wymyślaj danych) i §17 (nie linkuj do przepisu bez praw).
          </p>
        </Card>

        <Card>
          <h2 className="mb-1 font-medium text-neutral-900">Plan rozwoju AI</h2>
          <p className="mb-4 text-sm text-muted">
            Etapy, które AI ma docelowo wspierać (spec §34) — każdy trafi tu jako osobne, kontrolowane zadanie. AI nigdy
            nie publikuje treści automatycznie i masowo bez nadzoru (spec §34/§43).
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            {ROADMAP.map((item) => (
              <li key={item} className="flex items-center justify-between gap-3">
                <span>{item}</span>
                <Badge tone="neutral">Planowane</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
