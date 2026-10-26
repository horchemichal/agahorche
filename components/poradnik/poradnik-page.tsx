import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getPoradnik, poradnikiZPrefiksem, wypelnij } from "@/lib/poradniki";
import { zdanieOCenie } from "@/lib/seo/lokalne";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { SimpleContent, kotwica } from "@/components/ui/simple-content";
import { Photo, CtaBand } from "@/components/marketing/content-blocks";

/**
 * Szablon poradników produktowych (22.10.2026). Jedna treść = jeden plik
 * content/poradniki/<slug>.md. Układ: okruszki, H1, lead, data aktualizacji
 * i autor, „W skrócie", zdjęcie, treść ze spisem treści (boczna kolumna),
 * FAQ, „Zobacz też", CTA, JSON-LD Article. Cena z panelu przez {{cena}}/{{oferta}}.
 */
function dataPl(iso: string): string {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Warsaw",
  });
}

export async function poradnikMetadata(slug: string): Promise<Metadata> {
  const p = getPoradnik(slug);
  if (!p) return {};
  const offer = await getOffersRepository().getActiveOffer();
  return buildMetadata({
    title: wypelnij(p.seoTitle, offer),
    description: wypelnij(p.seoDescription, offer),
    path: p.path,
    ogType: "article",
    ogImage: p.image,
    keywords: p.keywords,
  });
}

export async function PoradnikPage({ slug, wstep, zakonczenie }: { slug: string; wstep?: React.ReactNode; zakonczenie?: React.ReactNode }) {
  const p = getPoradnik(slug);
  if (!p) notFound();
  const offer = await getOffersRepository().getActiveOffer();
  const w = (t: string) => wypelnij(t, offer);
  const spis = [...p.body.matchAll(/^## (.+)$/gm)].map((m) => w(m[1]));
  const rodzenstwo = p.path.startsWith("/akcesoria/")
    ? poradnikiZPrefiksem("/akcesoria/").filter((x) => x.slug !== p.slug)
    : [];

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={p.breadcrumbs.map(([name, path]) => ({ name, path }))} />
      </Section>
      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <Heading as="h1" size="lg">
              {w(p.h1)}
            </Heading>
            <Lead className="mt-4 max-w-2xl">{w(p.lead)}</Lead>
            <p className="mt-3 text-sm text-muted">
              Aktualizacja: <time dateTime={p.updated}>{dataPl(p.updated)}</time> · Aga Horche, oficjalny
              przedstawiciel Thermomix®
            </p>
            {p.skrot && p.skrot.length > 0 ? (
              <div className="mt-6 max-w-2xl rounded-lg border-l-4 border-brand-500 bg-brand-50/60 px-5 py-4">
                <p className="font-semibold text-neutral-900">W skrócie</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-neutral-800">
                  {p.skrot.map((s, i) => (
                    <li key={i}>{w(s)}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {p.image ? (
              <Photo src={p.image} alt={p.imageAlt ?? w(p.h1)} className="mt-8 max-w-2xl" priority />
            ) : null}
            {wstep}
            <div className="mt-8 max-w-2xl">
              <SimpleContent content={w(p.body)} />
            </div>
            {zakonczenie}
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {spis.length > 2 ? (
                <nav aria-label="Spis treści" className="rounded-xl border border-border p-5">
                  <p className="mb-3 text-sm font-semibold text-neutral-900">Spis treści</p>
                  <ol className="space-y-2 text-sm">
                    {spis.map((s) => (
                      <li key={s}>
                        <a href={"#" + kotwica(s)} className="text-neutral-700 hover:text-brand-700">
                          {s}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
              <div className="rounded-xl bg-neutral-900 p-5 text-neutral-0">
                <p className="font-semibold">Bezpłatna prezentacja Thermomix TM7</p>
                <p className="mt-2 text-sm text-neutral-300">
                  U Ciebie w kuchni, w całej Polsce, bez dopłaty za dojazd. {zdanieOCenie(offer) ?? ""}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <ButtonLink href="/prezentacja">Umów prezentację</ButtonLink>
                  <a href="tel:+48517185691" className="text-sm text-neutral-0 underline underline-offset-4">
                    Zadzwoń: 517 185 691
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
      {rodzenstwo.length > 0 ? (
        <Section tone="surface">
          <Heading as="h2" size="sm">
            Inne akcesoria do Thermomixa
          </Heading>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rodzenstwo.map((x) => (
              <li key={x.slug}>
                <Link
                  href={x.path}
                  className="block rounded-xl border border-border bg-neutral-0 p-4 text-sm font-medium text-neutral-900 hover:border-brand-500"
                >
                  {x.breadcrumbs[x.breadcrumbs.length - 1][0]}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
      {p.faq && p.faq.length > 0 ? (
        <FaqSection
          items={p.faq.map(([question, answer]) => ({ question: w(question), answer: w(answer) }))}
          title="Najczęściej zadawane pytania"
        />
      ) : null}
      {p.related && p.related.length > 0 ? (
        <Section>
          <Heading as="h2" size="sm">
            Zobacz też
          </Heading>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.related.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-border px-4 py-2 text-sm text-neutral-700 hover:border-brand-500"
              >
                {label}
              </Link>
            ))}
          </div>
        </Section>
      ) : null}
      <CtaBand />
      <JsonLdScript
        data={articleSchema({
          path: p.path,
          title: w(p.h1),
          description: w(p.seoDescription),
          publishedAt: p.published,
          updatedAt: p.updated,
          image: p.image,
        })}
      />
    </>
  );
}
