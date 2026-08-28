import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <As
      className={cn(
        "rounded-lg border border-border bg-neutral-0 p-6 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "neutral";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "brand" && "bg-brand-50 text-brand-700",
        tone === "neutral" && "bg-neutral-100 text-neutral-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
