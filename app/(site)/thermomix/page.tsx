import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Tm7Teaser } from "@/components/marketing/tm7-teaser";
import { AudienceSection } from "@/components/marketing/audience-section";
import { FaqSection } from "@/components/seo/faq-section";
import { GLOBAL_FAQ } from "@/data/faq/global";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix — poznaj urządzenie",
  description:
    "Poznaj Thermomix TM7 i TM6 — funkcje, różnice między modelami oraz dla kogo sprawdzi się najlepiej.",
  path: "/thermomix",
});

const SUBPAGES = [
  { href: "/thermomix/tm7", label: "TM7", description: "Najnowszy model — co potrafi i dla kogo jest." },
  { href: "/thermomix/tm6", label: "TM6", description: "Poprzedni model: czy nadal warto i czy kupować używany." },
  { href: "/thermomix/tm7-vs-tm6", label: "TM7 vs TM6", description: "Dziewięć różnic i kiedy przesiadka ma sens." },
  { href: "/thermomix/funkcje", label: "Funkcje", description: "Dwanaście funkcji opisanych tym, co z nich wychodzi." },
  { href: "/thermomix/wady-i-zalety", label: "Wady i zalety", description: "Uczciwa lista — także to, czego nie mówi się na prezentacji." },
  { href: "/jak-kupic-thermomix", label: "Jak kupić", description: "Cztery kroki, płatności, dostawa i gwarancja." },
  { href: "/thermomix/dla-rodziny", label: "Dla rodziny", description: "Obiad dla czterech osób, który gotuje się sam." },
  { href: "/thermomix/dla-mamy", label: "Dla mamy", description: "Przeciery, porcjowanie i ciepły obiad dla siebie." },
  { href: "/thermomix/dla-poczatkujacych", label: "Dla początkujących", description: "Gotowanie bez doświadczenia, krok po kroku." },
];

export default function ThermomixHubPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Thermomix", path: "/thermomix" }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="xl" className="max-w-3xl">
          Thermomix — jedno urządzenie, cała kuchnia
        </Heading>
        <Lead className="mt-5 max-w-2xl">
          Poznaj możliwości Thermomixa TM7 i TM6 oraz sprawdź, który model i który sposób
          gotowania pasuje do Twojego domu.
        </Lead>
      </Section>

      <Section tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          {SUBPAGES.map((page) => (
            <Link key={page.href} href={page.href}>
              <Card className="h-full transition-shadow hover:shadow-none">
                <h2 className="mb-1.5 font-semibold text-neutral-900">{page.label}</h2>
                <p className="text-sm text-muted leading-relaxed">{page.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Tm7Teaser />
      <AudienceSection />
      <FaqSection items={GLOBAL_FAQ} />
    </>
  );
}
