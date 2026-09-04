import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { WyszukiwarkaPrzepisow } from "@/components/przepisy/wyszukiwarka";
import { wszystkiePrzepisy } from "@/lib/przepisy/grupy";
import { getCurrentClient } from "@/lib/auth/client-auth";

export const metadata: Metadata = buildMetadata({
  title: "Co ugotować dzisiaj? Wyszukiwarka przepisów na Thermomix",
  description:
    "Wybierz, ile masz czasu, dla ilu osób gotujesz i na co masz ochotę — pokażę dania z Thermomixa, które się w to wpisują. Każde z linkiem do Cookidoo.",
  path: "/przepisy",
});

/**
 * OŚ STRONY
 * „Co ugotować dzisiaj?" — publiczna wyszukiwarka nad bazą przepisów.
 *
 * WYNIKI TYLKO DLA ZALOGOWANYCH (decyzja Agi, 4.09.2026). Strona i samo
 * narzędzie zostają publiczne — filtry działają, widać liczbę pasujących
 * dań — ale listy przepisów nie widzi nikt spoza klubu. Nie zamykamy całej
 * strony za logowaniem świadomie: osoba z Google trafiłaby wtedy na sam
 * formularz logowania i nie miałaby skąd wiedzieć, co tu jest.
 *
 * CZEGO TO KOSZTUJE. Wcześniej ta strona była publiczna, żeby odpowiadać
 * na zapytania w rodzaju „co ugotować w 20 minut". Karty przepisów znikają
 * z kodu strony, więc Google przestaje je widzieć — zostaje nagłówek,
 * wstęp i opis narzędzia. To świadomy wybór Agi, nie przeoczenie.
 *
 * BEZ SZTUCZNEJ INTELIGENCJI I BEZ CEN — świadomie, patrz komentarz
 * w components/przepisy/wyszukiwarka.tsx.
 */
export default async function PrzepisyPage() {
  const ile = wszystkiePrzepisy().length;
  const zalogowany = (await getCurrentClient()) !== null;

  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Przepisy", path: "/przepisy" }]} />
        <div className="mt-6 max-w-2xl">
          <Eyebrow>Przepisy na Thermomix</Eyebrow>
          <Heading as="h1" size="xl" className="mt-2">
            Co ugotować dzisiaj?
          </Heading>
          <Lead className="mt-4">
            Trzy pytania zamiast przewijania. Powiedz, ile masz czasu, dla ilu osób gotujesz
            i na co masz ochotę — pokażę dania z {ile} przepisów, które się w to wpisują.
            Każde prowadzi do konkretnego przepisu na Cookidoo.
          </Lead>
        </div>
      </Section>

      <Section tone="surface">
        <WyszukiwarkaPrzepisow zalogowany={zalogowany} />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
          <Heading as="h2" size="md">
            Szukasz nie jednego dania, tylko całego tygodnia?
          </Heading>
          <p className="max-w-2xl text-neutral-700">
            W Aga Club czekają gotowe jadłospisy na 7 i 14 dni — keto, wegetariańska,
            bezglutenowa, dla dzieci i sześć innych — razem z listą zakupów i możliwością
            zamiany dania na inne.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="/diety">Zobacz diety z Thermomixem</ButtonLink>
            <ButtonLink href="/prezentacja" variant="outline" className="bg-neutral-0">
              Umów bezpłatną prezentację →
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
