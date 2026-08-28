import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead/lead-form";
import { PresentationStepsSection, WhyLiveDemoSection } from "@/components/marketing/presentation-steps";
import { FaqSection } from "@/components/seo/faq-section";
import { GLOBAL_FAQ } from "@/data/faq/global";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Umów bezpłatną prezentację Thermomix",
  description:
    "Umów bezpłatną, niezobowiązującą prezentację Thermomix TM7 z Agą — u Ciebie w domu, w całej Polsce.",
  path: "/prezentacja",
});

export default function PrezentacjaPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Prezentacja", path: "/prezentacja" }]} />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Heading as="h1" size="xl" className="max-w-xl">
              Umów bezpłatną prezentację Thermomix
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Aga przyjeżdża do Ciebie i pokazuje Thermomixa na żywo — w całej Polsce, bez presji,
              bez zobowiązań.
            </Lead>
            <div className="mt-6">
              <Link href="/prezentacja/w-domu">
                <Card className="h-full max-w-sm transition-shadow hover:shadow-none">
                  <h2 className="mb-1.5 font-semibold text-neutral-900">Prezentacja w domu</h2>
                  <p className="text-sm text-muted">Aga przyjeżdża do Ciebie i pokazuje Thermomixa na żywo.</p>
                </Card>
              </Link>
            </div>
          </div>

          <Card className="h-fit">
            <Heading as="h2" size="sm" className="mb-5">
              Zostaw kontakt, oddzwonimy
            </Heading>
            <LeadForm source="presentation-page" />
          </Card>
        </div>
      </Section>

      <PresentationStepsSection />
      <WhyLiveDemoSection />
      <FaqSection items={GLOBAL_FAQ} />
    </>
  );
}
