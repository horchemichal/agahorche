import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { RecipeCard } from "@/components/diets/recipe-card";
import { TrescWpisu } from "@/components/poradnik/tresc-wpisu";
import { dzialPoradnika } from "@/types/poradnik";
import { pobierzWpisyPoradnika } from "@/lib/database/repositories/poradnik-repository";
import { getRecipe } from "@/data/diets/recipes";
import { PRZEPISY_META } from "@/data/diets/przepisy-meta";
import { czasSlownie } from "@/lib/przepisy/grupy";
import { articleSchema, webPageSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld";
import { getCurrentClient } from "@/lib/auth/client-auth";

interface Props {
  params: Promise<{ dzial: string; slug: string }>;
}

async function znajdz(dzial: string, slug: string) {
  const wpisy = await pobierzWpisyPoradnika();
  return wpisy.find((w) => w.slug === slug && w.dzial === dzial) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dzial, slug } = await params;
  const wpis = await znajdz(dzial, slug);
  if (!wpis) return buildMetadata({ title: "Poradnik", description: "", path: `/poradnik/${dzial}/${slug}` });
  return buildMetadata({
    title: wpis.tytul,
    description: wpis.lead,
    path: `/poradnik/${dzial}/${slug}`,
  });
}

/**
 * Pojedynczy wpis poradnika.
 *
 * `przepisId` — jeśli wpis prowadzi do konkretnego dania (dział „Baza
 * podstaw"), pod treścią pojawia się karta przepisu z linkiem do Cookidoo.
 * Bez przepisu karty po prostu nie ma; nie pokazujemy pustego miejsca.
 *
 * Sąsiednie wpisy z tego samego działu na dole: poradnik czyta się
 * przeskokami, a nie od góry do dołu, więc następny krok ma być pod ręką.
 */

/*
 * TYLKO DLA ZALOGOWANYCH (decyzja Agi, 4.09.2026: „poradnik też jest tylko
 * dla zalogowanych, więc zmień, żeby dalej niż tu nie można było wejść").
 *
 * Gość zostaje na /poradnik — widzi tam nazwy działów, opisy i liczby
 * wpisów, więc wie, co jest w środku. Sprawdzenie siedzi TUTAJ, a nie
 * tylko w kafelkach na /poradnik, bo inaczej wystarczyłoby wpisać adres
 * ręcznie albo kliknąć stary link z Google.
 *
 * Przekierowanie, a nie 404: adres jest poprawny, po prostu wymaga konta.
 */
export default async function WpisPage({ params }: Props) {
  if ((await getCurrentClient()) === null) redirect("/poradnik");

  const { dzial, slug } = await params;
  const d = dzialPoradnika(dzial);
  if (!d) notFound();

  const wszystkie = (await pobierzWpisyPoradnika()).filter((w) => w.dzial === d.slug);
  const wpis = wszystkie.find((w) => w.slug === slug);
  if (!wpis) notFound();

  const przepis = wpis.przepisId ? getRecipe(wpis.przepisId) : undefined;
  const meta = wpis.przepisId ? PRZEPISY_META[wpis.przepisId] : undefined;
  const pozostale = wszystkie.filter((w) => w.slug !== wpis.slug).slice(0, 6);

  return (
    <>
      {/*
        Dane strukturalne wpisu. Do 4.09.2026 wpisy poradnika miały wyłącznie
        BreadcrumbList (doklejany przez <Breadcrumbs>) — czyli 123 strony
        z realnym tekstem nie mówiły Google'owi, że są artykułami, kto jest
        autorem ani kiedy powstały.

        Daty idą z bazy przez `articleSchema`, które normalizuje je do ISO
        8601 — surowy string z Postgresa nie jest poprawną datą i wywalał
        już raz sitemapę (patrz lib/utils.ts).
      */}
      <JsonLdScript
        data={[
          webPageSchema({
            path: `/poradnik/${d.slug}/${wpis.slug}`,
            name: wpis.tytul,
            description: wpis.lead,
          }),
          articleSchema({
            path: `/poradnik/${d.slug}/${wpis.slug}`,
            title: wpis.tytul,
            description: wpis.lead,
            publishedAt: wpis.createdAt,
            updatedAt: wpis.updatedAt,
          }),
        ]}
      />
      <Section>
        <Breadcrumbs
          items={[
            { name: "Poradnik", path: "/poradnik" },
            { name: d.nazwa, path: `/poradnik/${d.slug}` },
            { name: wpis.tytul, path: `/poradnik/${d.slug}/${wpis.slug}` },
          ]}
        />
        <article className="mt-6 max-w-2xl">
          <Eyebrow>{d.nazwa}</Eyebrow>
          <Heading as="h1" size="lg" className="mt-2">
            {wpis.tytul}
          </Heading>
          {wpis.lead && <Lead className="mt-4">{wpis.lead}</Lead>}

          <div className="mt-8">
            <TrescWpisu tresc={wpis.tresc} />
          </div>

          {przepis && (
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-neutral-700">Przepis w Cookidoo</p>
              <div className="max-w-xs">
                <RecipeCard
                  recipe={przepis}
                  compact
                  placeholderLabel={meta ? czasSlownie(meta.czasMin) : undefined}
                  dopisek={meta?.wydajnosc}
                />
              </div>
            </div>
          )}
        </article>
      </Section>

      {pozostale.length > 0 && (
        <Section tone="surface">
          <Heading as="h2" size="md" className="mb-5">
            Więcej z działu „{d.nazwa}”
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pozostale.map((w) => (
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
          <div className="mt-6">
            <ButtonLink href={`/poradnik/${d.slug}`} variant="outline" className="bg-neutral-0">
              Zobacz cały dział →
            </ButtonLink>
          </div>
        </Section>
      )}
    </>
  );
}
