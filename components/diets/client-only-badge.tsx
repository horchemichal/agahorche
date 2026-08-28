import { Badge } from "@/components/ui/card";

/** "Dostępne w Strefie Klienta" (spec §21/§3) — used on gated days/plans. */
export function ClientOnlyBadge({ className }: { className?: string }) {
  return (
    <Badge tone="neutral" className={className}>
      Strefa Klienta
    </Badge>
  );
}
