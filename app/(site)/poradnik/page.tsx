import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { DZIALY_PORADNIKA } from "@/types/poradnik";
import { pobierzWpisyPoradnika } from "@/lib/database/repositories/poradnik-repository";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { TylkoDlaKlubu } from "@/components/przepisy/tylko-dla-klubu";

export const metadata: Metadata = buildMetadata({
  title: "Poradnik kuchenny — triki i kuchenne wpadki",
  description:
    "Co można zamrozić, jak uratować za słoną zupę, dlaczego ciasto nie wyrosło i co znaczy blanszowanie. Praktyczny poradnik dla osób gotujących z Thermomixem.",
  path: "/poradnik",
});

/**
 * OŚ STRONY
 * Rozdroże poradnika: kafelki działów z liczbą wpisów.
 *
 * DZIAŁY PUSTE SIĘ NIE POKAZUJĄ. Kafelek „Czyszczenie Thermomixa (0)"
 * byłby obietnicą bez pokrycia — dwa działy czekają na treść Agi
 * (patrz data/poradnik/seed.ts) i do tego czasu po prostu ich tu nie ma.
 * Pojawią się same, gdy tylko dodasz pierwszy wpis.
 *
 * TA STRONA JEST KOŃCEM DROGI DLA GOŚCIA (decyzja Agi, 4.09.2026:
 * „poradnik też jest tylko dla zalogowanych, więc zmień, żeby dalej niż
 * tu nie można było wejść"). Niezalogowany widzi nazwy działów, opisy
 * i liczby wpisów — czyli wie dokładnie, co jest w środku — ale kafelki
 * nie są linkami. Same działy i wpisy też sprawdzają sesję, żeby nie dało
 * się ominąć kafelków, wpisując adres ręcznie.
 */
export default async function PoradnikPage() {
  const [wpisy, client] = await Promise.all([pobierzWpisyPoradnika(), getCurrentClient()]);
  const zalogowany = client !== null;
  const licznik = new Map<string, number>();
  for (const w of wpisy) licznik.set(w.dzial, (licznik.get(w.dzial) ?? 0) + 1);

  const dzialy = DZIALY_PORADNIKA.filter((d) => (licznik.get(d.slug) ?? 0) > 0);

  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Poradnik", path: "/poradnik" }]} />
        <div className="mt-6 max-w-2xl">
          <Eyebrow>Poradnik kuchenny</Eyebrow>
          <Heading as="h1" size="xl" className="mt-2">
            Kuchenne pytania i odpowiedzi
          </Heading>
          <Lead className="mt-4">
            Rzeczy, o które klientki pytają najczęściej: co da się zamrozić, jak uratować
            przesoloną zupę, dlaczego ciasto drożdżowe nie wyrosło i co właściwie znaczy
            „zblanszować”. Krótko, konkretnie, bez teorii.
          </Lead>
        </div>
      </Section>

      <Section tone="surface">
        {dzialy.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-0 p-6 text-center text-sm text-neutral-700">
            Poradnik jest w przygotowaniu. Zajrzyj za kilka dni.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dzialy.map((d) => {
              const tresc = (
                <>
                  <p className="font-display text-lg text-neutral-900">{d.nazwa}</p>
                  <p className="text-sm text-muted">{d.opis}</p>
                  <p className="mt-auto pt-2 text-xs font-medium uppercase tracking-wide text-brand-700">
                    {licznik.get(d.slug)}{" "}
                    {licznik.get(d.slug) === 1 ? "wpis" : (licznik.get(d.slug) ?? 0) < 5 ? "wpisy" : "wpisów"}
                  </p>
                </>
              );

              return zalogowany ? (
                <Link
                  key={d.slug}
                  href={`/poradnik/${d.slug}`}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-neutral-0 p-5 transition-colors hover:border-brand-400"
                >
                  {tresc}
                </Link>
              ) : (
                <div
                  key={d.slug}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-neutral-0 p-5"
                >
                  {tresc}
                </div>
              );
            })}
          </div>
        )}

        {!zalogowany && dzialy.length > 0 && (
          <div className="mt-6">
            <TylkoDlaKlubu coBySie="Wpisy poradnika są w Aga Club" />
          </div>
        )}
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
          <Heading as="h2" size="md">
            Szukasz konkretnego dania, a nie porady?
          </Heading>
          <p className="max-w-2xl text-neutral-700">
            Wyszukiwarka „Co ugotować dzisiaj?” pyta o czas, liczbę osób i rodzaj dania.
            A jeśli chcesz ugotować z tego, co już masz — sprawdź „Co mam w lodówce?”.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="/przepisy">Co ugotować dzisiaj? →</ButtonLink>
            <ButtonLink href="/przepisy/co-mam-w-lodowce" variant="outline" className="bg-neutral-0">
              Co mam w lodówce?
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
