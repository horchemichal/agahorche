import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { AgaClubComingSoon } from "@/components/aga-club/coming-soon";
import { AGA_CLUB_FEATURES } from "@/data/aga-club/features";

const feature = AGA_CLUB_FEATURES.find((f) => f.key === "coDzisUgotowac")!;

export const metadata: Metadata = buildMetadata({
  title: feature.title,
  description: feature.description,
  path: feature.href,
});

export default function CoDzisUgotowacPage() {
  return <AgaClubComingSoon feature={feature} />;
}
