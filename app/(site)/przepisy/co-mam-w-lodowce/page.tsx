import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { CoMamWLodowce } from "@/components/przepisy/lodowka";
import { PRODUKTY } from "@/lib/przepisy/produkty";
import { wszystkiePrzepisy } from "@/lib/przepisy/grupy";
import { getCurrentClient } from "@/lib/auth/client-auth";

export const metadata: Metadata = buildMetadata({
  title: "Co mam w lodówce? Przepisy z tego, co masz w domu",
  description:
    "Zaznacz produkty, które masz, a pokażę dania z Thermomixa, które da się z nich zrobić — razem z listą tego, czego brakuje. Bez wpisywania, bez zgadywania.",
  path: "/przepisy/co-mam-w-lodowce",
});

/**
 * OŚ STRONY
 * Pomysł nr 1 z listy modułów Aga Klubu — i od razu nr 10 („co zrobić
 * z resztek"), nr 11 („nie marnuję jedzenia") i nr 15 („co zrobić
 * z jajek"). To nie są cztery moduły: to jedno pytanie zadane z czterech
 * stron, więc jedna strona na nie odpowiada.
 *
 * WYNIKI TYLKO DLA ZALOGOWANYCH (decyzja Agi, 4.09.2026) — tak samo jak
 * w /przepisy. Zaznaczanie produktów działa i widać, ile dań wychodzi;
 * lista dań i to, czego brakuje, jest za logowaniem.
 */
export default async function LodowkaPage() {
  const ileProduktow = PRODUKTY.length;
  const ileDan = wszystkiePrzepisy().length;
  const zalogowany = (await getCurrentClient()) !== null;

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Przepisy", path: "/przepisy" },
            { name: "Co mam w lodówce", path: "/przepisy/co-mam-w-lodowce" },
          ]}
        />
        <div className="mt-6 max-w-2xl">
          <Eyebrow>Gotowanie z tego, co jest</Eyebrow>
          <Heading as="h1" size="xl" className="mt-2">
            Co mam w lodówce?
          </Heading>
          <Lead className="mt-4">
            Zaznacz produkty, które masz pod ręką — pokażę dania z {ileDan} przepisów na
            Thermomixa, które da się z nich zrobić, i napiszę wprost, czego brakuje.
            Do wyboru {ileProduktow} produktów; niczego nie trzeba wpisywać.
          </Lead>
        </div>
      </Section>

      <Section tone="surface">
        <CoMamWLodowce zalogowany={zalogowany} />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
          <Heading as="h2" size="md">
            Wolisz zacząć od drugiej strony?
          </Heading>
          <p className="max-w-2xl text-neutral-700">
            Jeśli masz konkretną ochotę albo mało czasu, wyszukiwarka „Co ugotować dzisiaj?"
            pyta o czas, liczbę osób i rodzaj dania. A w Aga Club czekają gotowe jadłospisy
            na 7 i 14 dni razem z listą zakupów.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="/przepisy">Co ugotować dzisiaj? →</ButtonLink>
            <ButtonLink href="/diety" variant="outline" className="bg-neutral-0">
              Diety z Thermomixem
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
