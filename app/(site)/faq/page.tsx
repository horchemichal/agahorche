import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { FaqSection } from "@/components/seo/faq-section";
import { getGlobalFaq } from "@/lib/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — najczęstsze pytania o Thermomix",
  description:
    "Odpowiedzi na najczęstsze pytania o Thermomixa: cena, raty 0%, przebieg prezentacji, dojazd i to, czy trzeba decydować tego samego dnia.",
  path: "/faq",
});

export default async function FaqPage() {
  const faq = await getGlobalFaq();

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      </Section>
      <Section className="pt-6 pb-0">
        <Heading as="h1" size="lg">
          Najczęściej zadawane pytania
        </Heading>
      </Section>
      <FaqSection items={faq} title="" />
    </>
  );
}
