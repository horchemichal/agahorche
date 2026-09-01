import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import {
  Photo,
  ProsCons,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix — wady i zalety. Czy warto?",
  description:
    "Szczera lista wad i zalet Thermomixa TM7 od przedstawicielki: co realnie zmienia w kuchni, komu się nie opłaci i na co uważać przed zakupem.",
  path: "/thermomix/wady-i-zalety",
  keywords: ["thermomix wady i zalety", "czy warto kupić thermomix", "thermomix opinie", "thermomix wady"],
});

const FAQ = [
  {
    question: "Czy Thermomix naprawdę oszczędza czas?",
    answer:
      "Tak, ale nie dlatego, że gotuje szybciej niż garnek. Oszczędność bierze się z tego, że nie musisz stać przy kuchence, nie brudzisz kilku naczyń i nie zastanawiasz się, co ugotować — przepis prowadzi krok po kroku.",
  },
  {
    question: "Komu Thermomix się nie opłaci?",
    answer:
      "Osobie, która gotuje raz w tygodniu i lubi to robić tradycyjnie. Urządzenie zwraca się wygodą, a nie oszczędnością na jedzeniu — przy sporadycznym gotowaniu ta wygoda nie zdąży się „odbić”.",
  },
  {
    question: "Czy Thermomix zastępuje wszystkie sprzęty w kuchni?",
    answer:
      "Zastępuje kilka: blender, mikser, wagę, parowar, maszynkę do mielenia, częściowo robot planetarny. Nie zastąpi piekarnika ani patelni do smażenia na dużej powierzchni.",
  },
  {
    question: "Ile miejsca zajmuje na blacie?",
    answer:
      "Tyle co spory czajnik z podstawą — z założoną Varomą jest wyższy, więc warto sprawdzić prześwit pod szafkami. Na prezentacji przywożę urządzenie i ustawiamy je u Ciebie na blacie, więc od razu widzisz, jak leży w kuchni.",
  },
  {
    question: "Czy trudno się go myje?",
    answer:
      "Naczynie myje się samo w trybie mycia wstępnego (woda z kroplą płynu, chwila pracy noża), a części można myć w zmywarce. Najbardziej „upierdliwe” bywa mycie Varomy po tłustym mięsie — tak jak każdego innego parowaru.",
  },
];

export default function WadyIZaletyPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "Wady i zalety", path: "/thermomix/wady-i-zalety" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Bez lukru</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Thermomix — wady i zalety
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Sprzedaję Thermomixy i nadal uważam, że nie każdemu się przydadzą. Poniżej obie strony
              — żebyś podjęła decyzję świadomie, a nie pod wpływem prezentacji.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Sprawdź na żywo u siebie</ButtonLink>
              <ButtonLink href="/finansowanie" variant="secondary">
                Policz ratę
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/prezentacja-thermomix-4.webp"
            alt="Trzy talerze z kurczakiem w sosie paprykowym i paluchami drożdżowymi, obok Thermomix TM7 z przepisem na ekranie"
            caption="Obiad z prezentacji: kurczak w sosie paprykowym, kluski na parze i paluchy drożdżowe — wszystko z jednego urządzenia."
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Uczciwy bilans
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Zalety z codziennego używania i wady, o których mówię klientom sama, zanim zapytają.
        </Lead>
        <div className="mt-8">
          <ProsCons
            pros={[
              "Gotowanie bez pilnowania — urządzenie trzyma czas, temperaturę i obroty za Ciebie.",
              "Koniec z „co dziś ugotować” — przepis prowadzi krok po kroku, także osobę, która nie lubi gotować.",
              "Mniej naczyń do zmywania: zupa, sos i danie główne powstają w jednym naczyniu.",
              "Gotowanie na parze równolegle z resztą obiadu (Varoma) — pełny obiad w jednym cyklu.",
              "Pełna kontrola składu: bezglutenowo, bez laktozy, mniej cukru i soli niż w gotowym daniu.",
              "Domowe podstawy taniej niż w sklepie — bulion, przyprawa warzywna, dżemy, masło orzechowe.",
              "Zastępuje kilka sprzętów naraz, więc blat robi się wolniejszy, nie bardziej zastawiony.",
              "Wsparcie po zakupie — pierwsze uruchomienie, Cookidoo i przepisy na start dostajesz ode mnie.",
            ]}
            cons={[
              "Wysoka cena jednorazowa — nawet rozłożona na raty 0,6% to konkretna decyzja budżetowa.",
              "Cookidoo to abonament: bez niego urządzenie działa, ale tracisz prowadzenie krok po kroku.",
              "Zajmuje stałe miejsce na blacie i z Varomą jest wysoki — warto sprawdzić prześwit pod szafką.",
              "Nie zastąpi piekarnika ani patelni do smażenia na dużej powierzchni.",
              "Jedno naczynie potrafi być wąskim gardłem przy wieloetapowym gotowaniu (stąd drugie naczynie).",
              "Kupisz go tylko u przedstawiciela — nie porównasz cen w sklepach ani nie odbierzesz „od ręki” z półki.",
              "Przy gotowaniu raz na jakiś czas wygoda nie zdąży się zwrócić.",
            ]}
          />
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Dla kogo to dobry zakup, a dla kogo nie
        </Heading>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-brand-700">Sprawdzi się, jeśli…</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-neutral-800">
              {[
                "gotujesz dla rodziny kilka razy w tygodniu",
                "wracasz późno i obiad musi „zrobić się sam”",
                "masz w domu dietę wymagającą kontroli składników",
                "nie czujesz się pewnie w kuchni i potrzebujesz prowadzenia",
                "męczy Cię planowanie posiłków bardziej niż samo gotowanie",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">Odpuść, jeśli…</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-neutral-800">
              {[
                "gotujesz sporadycznie i głównie proste rzeczy",
                "gotowanie jest dla Ciebie hobby, a nie obowiązkiem do skrócenia",
                "jadasz na mieście albo zamawiasz większość posiłków",
                "nie masz stałego miejsca na blacie i nie chcesz go zwalniać",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </div>
        <Prose className="mt-8">
          <p>
            Prezentacja jest właśnie po to, żeby to sprawdzić bez ryzyka. Przyjeżdżam, gotujemy
            razem u Ciebie w kuchni i po dwóch godzinach wiesz, po której stronie tej listy jesteś.
            Nie ma opłaty i nie ma zobowiązania — a jeśli powiesz „to nie dla mnie”, to jest zupełnie
            w porządku odpowiedź.
          </p>
          <p>
            Jeśli zastanawiasz się nad konkretnym modelem, zajrzyj do{" "}
            <Link
              href="/thermomix/tm7-vs-tm6"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              porównania TM7 i TM6
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <FaqSection items={FAQ} title="Wady i zalety — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Sprawdź, zanim zdecydujesz"
        text="Bezpłatna prezentacja u Ciebie w domu — w Bochni, Brzesku, Krakowie, Wieliczce, Tarnowie i okolicach."
      />
    </>
  );
}
