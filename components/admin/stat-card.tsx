import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  tone?: "neutral" | "brand";
}) {
  return (
    <div className="rounded-lg border border-border bg-neutral-0 p-5 shadow-[var(--shadow-card)]">
      <p className="text-sm text-muted">{label}</p>
      <p
        className={cn(
          "mt-2 font-display text-3xl",
          tone === "brand" ? "text-brand-700" : "text-neutral-900",
        )}
      >
        {value}
      </p>
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}
