import Link from "next/link";
import type { Testimonial } from "@/types/testimonial";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { TestimonialsMarquee } from "@/components/marketing/testimonials-marquee";

/**
 * Renders real testimonials only. With an empty array this returns null, never
 * placeholder/fake review cards (spec 11/42).
 *
 * 16.11.2026 — strony lokalne: zamiast pełnej karuzeli (12 opinii, ~660
 * jednakowych słów na KAŻDEJ z ~1000 stron miast, zaraz pod hero) pokazujemy
 * `max` opinii (zwykle 3) + link do /opinie. Pomiar: strony miast miały
 * ~56–61% wspólnego tekstu, strony konkurentki ~12% — karuzela była
 * największym pojedynczym blokiem powtórzonym 1:1. `seed` (slug miasta) dobiera
 * inną trójkę dla różnych miast; opinie z miejscowością tego miasta (wpisaną za
 * zgodą klientki) zawsze idą pierwsze. Same opinie się nie zmieniają.
 */
export function TestimonialsSection({
  items,
  max,
  seed,
  miasto,
  wszystkieHref,
  kompakt,
}: {
  /** Mniejsze karty, tekst opinii przycięty do 5 linii (strony lokalne). Na /opinie pełne. */
  kompakt?: boolean;
  items: Testimonial[];
  max?: number;
  seed?: string;
  /** Nazwa miasta strony — opinie z tą miejscowością idą pierwsze. */
  miasto?: string;
  wszystkieHref?: string;
}) {
  if (items.length === 0) return null;

  const pokazane = max ? wybierz(items, max, seed ?? "", miasto) : items;

  return (
    <Section>
      <Heading as="h2" size="md" className={kompakt ? "mb-5" : "mb-8"}>
        Opinie klientów
      </Heading>
      <TestimonialsMarquee items={pokazane} kompakt={kompakt} />
      {wszystkieHref && max && items.length > pokazane.length ? (
        <p className="mt-6 text-sm">
          <Link href={wszystkieHref} className="font-medium text-brand-700 underline underline-offset-4">
            Zobacz wszystkie opinie klientów
          </Link>
        </p>
      ) : null}
    </Section>
  );
}

/** Opinie z miejscowością tej strony idą zawsze pierwsze; resztę obracamy wg `seed`. */
function wybierz(items: Testimonial[], max: number, seed: string, miasto?: string): Testimonial[] {
  if (items.length <= max) return items;
  const m = miasto?.toLowerCase();
  const czyLokalna = (t: Testimonial) => !!m && t.authorCityLabel?.toLowerCase() === m;
  const lokalne = items.filter(czyLokalna);
  const reszta = items.filter((t) => !czyLokalna(t));
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const start = reszta.length ? h % reszta.length : 0;
  const obrocone = [...reszta.slice(start), ...reszta.slice(0, start)];
  return [...lokalne, ...obrocone].slice(0, max);
}
