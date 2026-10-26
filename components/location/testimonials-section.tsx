import type { Testimonial } from "@/types/testimonial";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { TestimonialsMarquee } from "@/components/marketing/testimonials-marquee";

/**
 * Renders real testimonials only. With an empty array this returns null, never
 * placeholder/fake review cards (spec 11/42).
 */
export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <Section>
      <Heading as="h2" size="md" className="mb-8">
        Opinie klientów
      </Heading>
      <TestimonialsMarquee items={items} />
    </Section>
  );
}
