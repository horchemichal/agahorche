import type { AgaClubFeatureCopy } from "@/data/aga-club/features";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

/**
 * Shared "coming soon" body for Aga Club sub-feature pages (spec §16/§34).
 * These routes exist so nav/footer links resolve and the URL structure is
 * final ahead of time, but each module ships disabled (AGA_CLUB_FEATURE_FLAGS)
 * until it's built with real logic in its own scoped task — no simulated AI
 * output, no fake data here.
 */
export function AgaClubComingSoon({ feature }: { feature: AgaClubFeatureCopy }) {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Aga Club", path: "/aga-club" }, { name: feature.title, path: feature.href }]} />
      </Section>
      <Section className="pt-6">
        <Badge tone="neutral">Wkrótce</Badge>
        <Heading as="h1" size="lg" className="mt-3 max-w-xl">
          {feature.title}
        </Heading>
        <Lead className="mt-4 max-w-lg">{feature.description}</Lead>
        <p className="mt-4 max-w-lg text-sm text-muted">
          Ta funkcja Aga Club jest w przygotowaniu. Wróć tu wkrótce — a tymczasem umów bezpłatną
          prezentację i poznaj Thermomixa® na żywo z Agą.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/prezentacja" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
          <ButtonLink href="/aga-club" variant="outline" size="lg">
            Wróć do Aga Club
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
