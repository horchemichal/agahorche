import type { Testimonial } from "@/types/testimonial";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

/**
 * Renders real testimonials only. With an empty array (the current state
 * everywhere — see data/testimonials.ts) this returns null, never
 * placeholder/fake review cards (spec §11/§42).
 */
export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <Section>
      <Heading as="h2" size="md" className="mb-8">
        Opinie klientów
      </Heading>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <Card key={t.id}>
            <p className="text-neutral-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-medium text-neutral-900">
              {t.authorName}
              {t.authorCityLabel ? `, ${t.authorCityLabel}` : ""}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
