import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { DIET_CATEGORIES } from "@/data/diets/categories";

/**
 * Krótka zajawka planów żywieniowych pod kalkulatorem rat na stronach
 * lokalnych (28.11.2026, prośba Agi). Lista bierze się z DIET_CATEGORIES,
 * więc nowa dieta pojawia się tu sama.
 */
export function DietyZajawka() {
  return (
    <Section className="!py-8">
      <div className="text-center">
        <Heading as="h2" size="md" align="center">
          Chcesz zmienić swoje nawyki żywieniowe?
        </Heading>
        <p className="mx-auto mt-3 max-w-xl text-muted">Mam tu dla Ciebie plany żywieniowe:</p>
        <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
          {DIET_CATEGORIES.map((dieta) => (
            <li key={dieta.slug}>
              <Link
                href={`/diety/${dieta.slug}`}
                className="inline-flex items-center rounded-full border border-border bg-neutral-0 px-3.5 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:border-brand-500 hover:text-brand-700"
              >
                {dieta.shortName}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm">
          <Link href="/diety" className="font-medium text-brand-700 underline underline-offset-4">
            Zobacz wszystkie plany żywieniowe
          </Link>
        </p>
      </div>
    </Section>
  );
}
