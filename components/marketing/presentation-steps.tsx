import { PRESENTATION_STEPS, WHY_LIVE_DEMO_POINTS } from "@/data/content/presentation-explainer";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

export function PresentationStepsSection() {
  return (
    <Section>
      <Heading as="h2" size="md" className="mb-8">
        Jak wygląda prezentacja?
      </Heading>
      <div className="grid gap-5 md:grid-cols-3">
        {PRESENTATION_STEPS.map((step, i) => (
          <Card key={step.title}>
            <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 font-display text-brand-700">
              {i + 1}
            </span>
            <h3 className="mb-1.5 font-semibold text-neutral-900">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function WhyLiveDemoSection() {
  return (
    <Section tone="surface">
      <Heading as="h2" size="md" className="mb-6">
        Dlaczego warto zobaczyć Thermomixa na żywo?
      </Heading>
      <ul className="grid gap-3 md:grid-cols-3">
        {WHY_LIVE_DEMO_POINTS.map((point) => (
          <li key={point} className="rounded-lg border border-border bg-neutral-0 p-5 text-sm text-neutral-700">
            {point}
          </li>
        ))}
      </ul>
    </Section>
  );
}
