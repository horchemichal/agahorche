"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/types/seo";
import { faqPageSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ChevronDownIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

/**
 * Homepage FAQ accordion (mockup: 2-column grid, collapsed by default).
 * Separate component from components/seo/faq-section.tsx (used on /faq and
 * location pages, which stays as the always-expanded, more SEO-literal
 * layout) — same underlying data and same FAQPage JSON-LD either way, just
 * a different homepage presentation.
 */
export function FaqAccordionSection({ items, title = "Najczęściej zadawane pytania" }: { items: FaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <Section>
      <Heading as="h2" size="md" align="center" className="mb-10 text-brand-700">
        {title}
      </Heading>

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.question} className="rounded-lg border border-border bg-neutral-0">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-neutral-900">{item.question}</span>
                <ChevronDownIcon width={18} height={18} className={cn("shrink-0 text-muted transition-transform", open && "rotate-180")} />
              </button>
              {open && <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.answer}</p>}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="/faq" className="text-sm font-semibold text-brand-700 hover:underline">
          Zobacz wszystkie pytania →
        </Link>
      </div>

      <JsonLdScript data={faqPageSchema(items)} />
    </Section>
  );
}
