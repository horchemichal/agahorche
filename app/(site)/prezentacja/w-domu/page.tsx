import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead/lead-form";

export const metadata: Metadata = buildMetadata({
  title: "Prezentacja Thermomix w domu",
  description: "Umów bezpłatną prezentację Thermomix u siebie w domu.",
  path: "/prezentacja/w-domu",
});

export default function PrezentacjaWDomuPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Prezentacja", path: "/prezentacja" },
            { name: "W domu", path: "/prezentacja/w-domu" },
          ]}
        />
      </Section>
      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Heading as="h1" size="lg" className="max-w-xl">
              Prezentacja Thermomix w domu
            </Heading>
            <Lead className="mt-4 max-w-xl">
              Aga przyjeżdża do Ciebie i pokazuje Thermomixa na żywo, na przykładzie Twojej
              własnej kuchni.
            </Lead>
          </div>
          <Card className="h-fit">
            <LeadForm source="presentation-page" />
          </Card>
        </div>
      </Section>
    </>
  );
}
