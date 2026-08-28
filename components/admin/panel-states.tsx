import type { ReactNode } from "react";
import { AlertIcon } from "@/components/admin/icons";
import { cn } from "@/lib/utils";

/** Shared "nothing here yet" state for CRUD list views (spec §16: empty states). */
export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border bg-neutral-50 px-6 py-14 text-center">
      <p className="font-medium text-neutral-800">{title}</p>
      <p className="max-w-sm text-sm text-muted">{description}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

/** Shared error banner for failed loads/mutations (spec §16: error states). */
export function ErrorState({ title = "Coś poszło nie tak", description }: { title?: string; description: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-danger/30 bg-red-50 px-5 py-4 text-sm text-danger">
      <AlertIcon className="mt-0.5 shrink-0" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-0.5 text-danger/90">{description}</p>
      </div>
    </div>
  );
}

/** Simple pulsing skeleton rows for client-side refresh states. */
export function LoadingRows({ rows = 4, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn("space-y-2.5", className)} aria-busy="true" aria-label="Ładowanie…">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-14 animate-pulse rounded-md bg-neutral-100" />
      ))}
    </div>
  );
}

/** Section heading used consistently across every /admin/* list page. */
export function PanelHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl text-neutral-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}

/**
 * Shared "not built yet" body for /admin/* sections whose CRUD UI is a
 * later, scoped task (spec §45/§48: build the engine first, ship each
 * screen as its own step). Keeps every sidebar link live — no 404s —
 * while making it obvious what's still pending.
 */
export function AdminComingSoon({ title, note }: { title: string; note: string }) {
  return (
    <>
      <PanelHeader title={title} />
      <EmptyState title="Ten moduł zostanie zbudowany w kolejnym etapie" description={note} />
    </>
  );
}
