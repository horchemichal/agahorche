"use client";

import { useRef } from "react";
import type { Testimonial } from "@/types/testimonial";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-600" aria-label={`Ocena: ${rating} na 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7z"
          />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Sliding testimonials module (mockup: "Dlaczego warto wybrać Agę?" as a
 * horizontally-scrollable review carousel). Real testimonials only — same
 * rule as components/location/testimonials-section.tsx and
 * data/testimonials.ts (spec §11/§42: never fabricate opinions). Renders
 * nothing until Aga supplies real, attributable reviews there. Avatars are
 * plain initials circles, not stock photos (spec §31).
 */
export function TestimonialsCarousel({ items, title = "Dlaczego warto wybrać Agę?" }: { items: Testimonial[]; title?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return null;

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const step = (card?.offsetWidth ?? 280) + 20;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <Section>
      <div className="mb-8 flex items-center justify-between gap-4">
        <Heading as="h2" size="md" className="text-brand-700">
          {title}
        </Heading>
        {items.length > 1 && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Poprzednia opinia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-neutral-700 hover:bg-surface"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Następna opinia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-neutral-700 hover:bg-surface"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <div ref={trackRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none]">
        {items.map((t) => (
          <div
            key={t.id}
            data-testimonial-card
            className="w-[260px] shrink-0 snap-start rounded-xl border border-border bg-neutral-0 p-5 md:w-[280px]"
          >
            {t.ratingOutOf5 && <StarRating rating={t.ratingOutOf5} />}
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                {initials(t.authorName)}
              </span>
              <p className="text-sm font-medium text-neutral-900">
                {t.authorName}
                {t.authorCityLabel ? `, ${t.authorCityLabel}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
