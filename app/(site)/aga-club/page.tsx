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
    "Aga Club dla klientów Agi Horche: diety, pomysły na obiad, gotowanie z tego, co jest w lodówce, poradnik kuchenny i wyzwanie 30 dni z Thermomixem.",
  path: "/aga-club",
});

/**
 * Aga Club landing (spec §16). Architecturally this page is the shell for
 * a future PWA — feature cards route to real /aga-club/* pages once each
 * module ships, gated by AGA_CLUB_FEATURE_FLAGS so nothing here fakes
 * functionality that doesn't exist yet (§34: AI features especially must
 * not be simulated).
 *
 * 4.09.2026 — zapowiedzi zniknęły, więc zniknęły też z nagłówka i z opisu
 * SEO. Lead obiecywał „plan tygodnia i wsparcie AI w kuchni", czyli
 * dokładnie te dwie rzeczy, których na stronie nie ma. Teraz wymienia to,
 * co da się kliknąć.
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
          obiad, diety, gotowanie z tego, co akurat jest w lodówce, i poradnik na kuchenne
          pytania.
        </Lead>
        <div className="mt-6 max-w-xl rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
          <p className="text-sm font-semibold text-neutral-900">Dla kogo jest Aga Club</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Klub jest dostępny dla moich klientów, czyli osób, które kupiły u mnie Thermomix,
            oraz dla osób, które poleciły mi sprzedaż.
          </p>
        </div>
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
        {/*
          4.09.2026 — usunięty akapit „Funkcje Aga Club wdrażamy etapami.
          Architektura… przygotowana pod PWA i aplikację mobilną — patrz
          raport architektury". Trzy powody: mówił o zapowiedziach, których
          już nie ma; „patrz raport architektury" odsyłał donikąd, bo nie
          był linkiem i klientka nie ma dostępu do żadnego raportu; a PWA
          i aplikacja mobilna to plan techniczny, nie coś, co obiecuje się
          osobie wchodzącej na stronę.
        */}
      </Section>
    </>
  );
}
