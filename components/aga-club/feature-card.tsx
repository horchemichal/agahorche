import Link from "next/link";
import type { AgaClubFeatureCopy } from "@/data/aga-club/features";
import { Card, Badge } from "@/components/ui/card";

export function FeatureCard({ feature, enabled }: { feature: AgaClubFeatureCopy; enabled: boolean }) {
  const content = (
    <Card className={`h-full ${enabled ? "transition-shadow hover:shadow-none" : "opacity-70"}`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-neutral-900">{feature.title}</h3>
        {!enabled && <Badge tone="neutral">Wkrótce</Badge>}
      </div>
      <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
    </Card>
  );

  if (!enabled) return content;

  return <Link href={feature.href}>{content}</Link>;
}
