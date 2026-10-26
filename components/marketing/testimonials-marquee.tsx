import type { Testimonial } from "@/types/testimonial";

const MARQUEE_CSS = `
.tmx-marquee { overflow: hidden; }
.tmx-marquee__track { display: flex; gap: 1.25rem; width: max-content; animation: tmx-scroll 60s linear infinite; }
.tmx-marquee__group { display: flex; gap: 1.25rem; }
.tmx-marquee[data-dir="rev"] .tmx-marquee__track { animation-direction: reverse; }
.tmx-marquee:hover .tmx-marquee__track,
.tmx-marquee:focus-within .tmx-marquee__track { animation-play-state: paused; }
@keyframes tmx-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 0.625rem)); }
}
@media (prefers-reduced-motion: reduce) {
  .tmx-marquee { overflow-x: auto; }
  .tmx-marquee__track { animation: none; }
}
`;

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-600" aria-label={`Ocena: ${rating} na 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
        >
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

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[260px] shrink-0 flex-col rounded-xl border border-border bg-neutral-0 p-5 md:w-[300px]">
      {t.ratingOutOf5 ? <StarRating rating={t.ratingOutOf5} /> : null}
      <blockquote className="mt-3 text-sm leading-relaxed text-neutral-700">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
          {initials(t.authorName)}
        </span>
        <span className="text-sm font-medium text-neutral-900">
          {t.authorName}
          {t.authorCityLabel ? `, ${t.authorCityLabel}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}

function fillRow(row: Testimonial[]): Testimonial[] {
  const out: Testimonial[] = [];
  while (out.length < 6) out.push(...row);
  return out;
}

export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  if (items.length < 4) {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <QuoteCard key={t.id} t={t} />
        ))}
      </div>
    );
  }

  const mid = Math.ceil(items.length / 2);
  const rows = [items.slice(0, mid), items.slice(mid)].filter((row) => row.length > 0);

  return (
    <div className="space-y-5">
      <style>{MARQUEE_CSS}</style>
      {rows.map((row, rowIndex) => {
        const group = fillRow(row);
        return (
          <div
            key={rowIndex}
            className="tmx-marquee"
            data-dir={rowIndex % 2 === 1 ? "rev" : "fwd"}
          >
            <div className="tmx-marquee__track">
              <div className="tmx-marquee__group">
                {group.map((t, i) => (
                  <QuoteCard key={`a-${t.id}-${i}`} t={t} />
                ))}
              </div>
              <div className="tmx-marquee__group" aria-hidden="true">
                {group.map((t, i) => (
                  <QuoteCard key={`b-${t.id}-${i}`} t={t} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
