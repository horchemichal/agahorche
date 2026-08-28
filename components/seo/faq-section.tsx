import type { FaqItem } from "@/types/seo";
import { faqPageSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "./json-ld";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";

/**
 * Renders an accordion-free (SEO-friendly, always-in-DOM) FAQ block plus
 * matching FAQPage JSON-LD. Answers stay short and direct per spec §38
 * (AEO/AI search: krótkie, konkretne, jasne odpowiedzi).
 */
export function FaqSection({
  items,
  title = "Najczęściej zadawane pytania",
}: {
  items: FaqItem[];
  title?: string;
}) {
  if (items.length === 0) return null;

  return (
    <Section tone="surface">
      <Heading as="h2" size="md" className="mb-8">
        {title}
      </Heading>
      <dl className="flex flex-col divide-y divide-border">
        {items.map((item) => (
          <div key={item.question} className="py-5">
            <dt className="mb-2 font-semibold text-neutral-900">{item.question}</dt>
            <dd className="text-muted leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <JsonLdScript data={faqPageSchema(items)} />
    </Section>
  );
}
