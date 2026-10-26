import type { Testimonial } from "@/types/testimonial";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { TestimonialsMarquee } from "@/components/marketing/testimonials-marquee";

/**
 * Sliding testimonials module. Two rows scrolling on their own, opposite
 * directions, no repeated quote between rows. Real testimonials only — same
 * rule as components/location/testimonials-section.tsx and data/testimonials.ts
 * (spec 11/42: never fabricate opinions).
 */
export function TestimonialsCarousel({
  items,
  title = "Dlaczego warto wybrać Agę?",
}: {
  items: Testimonial[];
  title?: string;
}) {
  if (items.length === 0) return null;

  return (
    <Section>
      <div className="mb-8 flex items-center justify-between gap-4">
        <Heading as="h2" size="md" className="text-brand-700">
          {title}
        </Heading>
      </div>
      <TestimonialsMarquee items={items} />
    </Section>
  );
}
