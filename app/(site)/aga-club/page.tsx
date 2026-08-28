import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { FeatureCard } from "@/components/aga-club/feature-card";
import { AGA_CLUB_FEATURES, AGA_CLUB_FEATURE_FLAGS } from "@/data/aga-club/features";

export const metadata: Metadata = buildMetadata({
  title: "Aga Club — społeczność wokół gotowania z Thermomixem",
  description:
    "Aga Club: pomysły na obiad, plan tygodnia, wyzwanie 30 dni z Agą i Aga AI — architektura gotowa, funkcje wdrażane etapami.",
  path: "/aga-club",
});

/**
 * Aga Club landing (spec §16). Architecturally this page is the shell for
 * a future PWA — feature cards route to real /aga-club/* pages once each
 * module ships, gated by AGA_CLUB_FEATURE_FLAGS so nothing here fakes
 * functionality that doesn't exist yet (§34: AI features especially must
 * not be simulated).
 */
export default function AgaClubPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Aga Club", path: "/aga-club" }]} />
      </Section>

      <Section className="pt-6">
        <Eyebrow>Społeczność</Eyebrow>
        <Heading as="h1" size="xl" className="max-w-2xl">
          Aga Club
        </Heading>
        <Lead className="mt-5 max-w-xl">
          Miejsce, w którym gotowanie z Thermomixem staje się prostsze na co dzień — pomysły na
          posiłki, plan tygodnia i wsparcie AI w kuchni.
        </Lead>
        <div className="mt-8">
          <ButtonLink href="/prezentacja" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          {AGA_CLUB_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.href}
              feature={feature}
              enabled={feature.key === null ? true : AGA_CLUB_FEATURE_FLAGS[feature.key]}
            />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Funkcje Aga Club wdrażamy etapami. Architektura (profil, ulubione przepisy, historia,
          logowanie) jest już przygotowana pod PWA i aplikację mobilną — patrz raport
          architektury.
        </p>
      </Section>
    </>
  );
}
