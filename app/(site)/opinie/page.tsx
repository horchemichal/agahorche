import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { TestimonialsSection } from "@/components/location/testimonials-section";
import { ButtonLink } from "@/components/ui/button";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Opinie klientów",
  description: "Prawdziwe opinie klientów o współpracy z Agą Horche i prezentacjach Thermomix.",
  path: "/opinie",
});

export default function OpiniePage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Opinie", path: "/opinie" }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          Opinie klientów
        </Heading>
        <Lead className="mt-4 max-w-xl">
          Publikujemy wyłącznie prawdziwe opinie klientów, którzy wyrazili na to zgodę.
        </Lead>
        {TESTIMONIALS.length === 0 && (
          <p className="mt-6 text-sm text-muted">
            Sekcja opinii zostanie uzupełniona, gdy Aga potwierdzi pierwsze publikowalne opinie.
          </p>
        )}
        <div className="mt-8">
          <ButtonLink href="/prezentacja" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>
      </Section>
      <TestimonialsSection items={TESTIMONIALS} />
    </>
  );
}
