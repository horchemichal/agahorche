import Link from "next/link";
import { AUDIENCE_SEGMENTS } from "@/data/content/presentation-explainer";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

export function AudienceSection() {
  return (
    <Section>
      <Heading as="h2" size="md" className="mb-8">
        Dla kogo jest Thermomix?
      </Heading>
      <div className="grid gap-5 md:grid-cols-3">
        {AUDIENCE_SEGMENTS.map((segment) => (
          <Link key={segment.href} href={segment.href} className="block">
            <Card className="h-full transition-shadow hover:shadow-none">
              <h3 className="mb-1.5 font-semibold text-neutral-900">{segment.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{segment.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
