import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead/lead-form";
import { PhoneIcon, MessengerIcon } from "@/components/marketing/icons";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description: "Skontaktuj się z Agą Horche — umów prezentację lub zadaj pytanie o Thermomix.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />
      </Section>
      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Heading as="h1" size="lg">
              Kontakt
            </Heading>
            <Lead className="mt-4 max-w-md">
              Masz pytanie o Thermomixa albo chcesz od razu umówić prezentację? Napisz — Aga
              odpowie osobiście.
            </Lead>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 font-medium text-neutral-800 hover:text-brand-700">
                <PhoneIcon width={17} height={17} /> {SITE.phone}
              </a>
              <a
                href={SITE.messengerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-700 hover:text-brand-700"
              >
                <MessengerIcon width={17} height={17} /> Napisz do Agi przez Messenger
              </a>
            </div>
          </div>
          <Card>
            <LeadForm source="other" />
          </Card>
        </div>
      </Section>
    </>
  );
}
