import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { DZIALY_PORADNIKA, dzialPoradnika } from "@/types/poradnik";
import { pobierzWpisyPoradnika } from "@/lib/database/repositories/poradnik-repository";

interface Props {
  params: Promise<{ dzial: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dzial } = await params;
  const d = dzialPoradnika(dzial);
  if (!d) return buildMetadata({ title: "Poradnik", description: "", path: `/poradnik/${dzial}` });
  return buildMetadata({
    title: `${d.nazwa} — poradnik kuchenny`,
    description: d.opis,
    path: `/poradnik/${d.slug}`,
  });
}

export function generateStaticParams() {
  return DZIALY_PORADNIKA.map((d) => ({ dzial: d.slug }));
}

/**
 * Lista wpisów jednego działu. Dział bez ani jednego opublikowanego wpisu
 * zwraca 404 zamiast pustej strony — pusty ekran z nagłówkiem to obietnica
 * treści, której nie ma (patrz komentarz w app/(site)/poradnik/page.tsx).
 */
export default async function DzialPage({ params }: Props) {
  const { dzial } = await params;
  const d = dzialPoradnika(dzial);
  if (!d) notFound();

  const wpisy = (await pobierzWpisyPoradnika()).filter((w) => w.dzial === d.slug);
  if (wpisy.length === 0) notFound();

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Poradnik", path: "/poradnik" },
            { name: d.nazwa, path: `/poradnik/${d.slug}` },
          ]}
        />
        <div className="mt-6 max-w-2xl">
          <Eyebrow>Poradnik kuchenny</Eyebrow>
          <Heading as="h1" size="xl" className="mt-2">
            {d.nazwa}
          </Heading>
          <Lead className="mt-4">{d.opis}</Lead>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wpisy.map((w) => (
            <Link
              key={w.id}
              href={`/poradnik/${d.slug}/${w.slug}`}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-neutral-0 p-5 transition-colors hover:border-brand-400"
            >
              <p className="font-display text-base leading-snug text-neutral-900">{w.tytul}</p>
              <p className="text-sm text-muted">{w.lead}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-2.5">
          <ButtonLink href="/poradnik" variant="outline">
            ← Wszystkie działy poradnika
          </ButtonLink>
          <ButtonLink href="/przepisy" variant="ghost">
            Co ugotować dzisiaj?
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
