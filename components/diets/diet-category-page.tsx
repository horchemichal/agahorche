import Link from "next/link";
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
          {hasExample ? "Jadłospis dostępny w Aga Club" : "Konfigurator dostępny — jadłospis wkrótce"}
        </Badge>
        <Heading as="h1" size="lg" className="mt-3 max-w-2xl">
          {category.name} z Thermomixem®
        </Heading>
        <Lead className="mt-4 max-w-xl">{category.description}</Lead>
        {category.medicalDisclaimer && (
          <p className="mt-4 max-w-xl text-sm text-muted">{category.medicalDisclaimer}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/prezentacja" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
          <ButtonLink href="/diety" variant="outline" size="lg">
            Wszystkie diety Thermomix
          </ButtonLink>
        </div>
        {/*
          31.08.2026: przycisk „Pobierz jadłospis w PDF" usunięty na prośbę Agi.
          Jadłospisy przestają być darmową próbką do pobrania — cała baza jest
          dla uczestniczek i uczestników Aga Club, czyli osób, które kupiły
          Thermomix u Agi. Trasa /api/diety/jadlospis-pdf zostaje w kodzie,
          bo przyda się do generowania PDF-ów wewnątrz Strefy Klienta.
        */}
        {/*
          1.09.2026 (prośba Agi): zalogowana klientka nie widzi zaproszenia do
          Aga Club — ona już w nim jest, więc „są dostępne dla uczestniczek
          Aga Club" brzmiałoby, jakby czegoś jej brakowało. Zamiast tego dostaje
          skrót do miejsca, w którym leży jej pełny plan.
        */}
        {client ? (
          <p className="mt-3 max-w-xl text-sm text-muted">
            Pełny plan — siedem dni, oba warianty kaloryczne i lista zakupów — czeka w{" "}
            <Link href="/strefa-klienta" className="font-medium text-brand-700 underline underline-offset-2">
              Twojej Strefie Klienta
            </Link>
            .
          </p>
        ) : (
          <p className="mt-3 max-w-xl text-sm text-muted">
            Wszystkie jadłospisy — pełne siedem dni, każda dieta, w wariantach 1500 i 2000 kcal —
            są dostępne dla uczestniczek i uczestników <strong className="font-medium text-neutral-800">Aga Club</strong>,
            czyli osób, które kupiły Thermomix u Agi.
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

      {/* Sekcja „Zaloguj się do Strefy Klienta" jest zaproszeniem dla osób
          spoza Aga Club — zalogowanej klientce proponowałaby zalogowanie się
          po raz drugi (prośba Agi, 1.09.2026). */}
      {!client && <ClientZoneTeaser />}
      <FaqSection items={DIETY_FAQ} />
    </>
  );
}
