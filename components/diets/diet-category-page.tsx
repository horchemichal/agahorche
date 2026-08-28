import type { DietCategory } from "@/types/diet";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { DietConfigurator } from "./diet-configurator";
import { ClientZoneTeaser } from "./client-zone-teaser";
import { FaqSection } from "@/components/seo/faq-section";
import { DIETY_FAQ } from "@/data/diets/faq";
import { getPublicDietPlan } from "@/data/diets/categories";
import { getCurrentClient } from "@/lib/auth/client-auth";

/**
 * Shared template for every /diety/[category] route (spec §18). Each route
 * file is a thin wrapper passing its DietCategory — see
 * app/(site)/diety/keto/page.tsx for the pattern. Async, bo serwerowo
 * rozwiązujemy sesję raz i przekazujemy `isLoggedIn` w dół (podgląd planu
 * dla Strefy Klienta) zamiast sięgać po auth z komponentu klienckiego.
 *
 * Sierpień 2026: bezpłatny jadłospis PDF jest głównym CTA już w hero —
 * odwiedzający nie musi scrollować do konfiguratora, żeby dostać coś
 * realnego. Ten sam plik generuje /api/diety/jadlospis-pdf.
 */
export async function DietCategoryPage({ category }: { category: DietCategory }) {
  const hasExample = Boolean(getPublicDietPlan(category));
  const client = await getCurrentClient();

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Diety Thermomix", path: "/diety" }, { name: category.shortName, path: `/diety/${category.slug}` }]} />
      </Section>
      <Section className="pt-6">
        <Badge tone={hasExample ? "brand" : "neutral"}>
          {hasExample ? "Bezpłatny jadłospis w PDF" : "Konfigurator dostępny — jadłospis wkrótce"}
        </Badge>
        <Heading as="h1" size="lg" className="mt-3 max-w-2xl">
          {category.name} z Thermomixem®
        </Heading>
        <Lead className="mt-4 max-w-xl">{category.description}</Lead>
        {category.medicalDisclaimer && (
          <p className="mt-4 max-w-xl text-sm text-muted">{category.medicalDisclaimer}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          {hasExample && (
            <ButtonLink href={`/api/diety/jadlospis-pdf?dieta=${category.slug}`} download size="lg">
              Pobierz jadłospis w PDF
            </ButtonLink>
          )}
          <ButtonLink href="/prezentacja" variant={hasExample ? "outline" : "primary"} size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
          <ButtonLink href="/diety" variant="outline" size="lg">
            Wszystkie diety Thermomix
          </ButtonLink>
        </div>
        {hasExample && (
          <p className="mt-3 max-w-xl text-sm text-muted">
            Jadłospis na jeden dzień — za darmo, bez zakładania konta. Pełne 7-dniowe jadłospisy
            ze wszystkich diet przekazuję klientkom i klientom, którzy kupili Thermomix u mnie.
          </p>
        )}
      </Section>

      <Section tone="surface" id="konfigurator" className="scroll-mt-24">
        <Eyebrow>Konfigurator</Eyebrow>
        <Heading as="h2" size="md" className="mb-8 max-w-xl">
          Zobacz, jak wygląda plan {category.shortName.toLowerCase()}
        </Heading>
        <DietConfigurator initialCategorySlug={category.slug} isLoggedIn={Boolean(client)} />
      </Section>

      <ClientZoneTeaser />
      <FaqSection items={DIETY_FAQ} />
    </>
  );
}
