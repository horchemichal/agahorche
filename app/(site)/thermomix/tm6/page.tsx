import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import {
  Photo,
  FactsTable,
  CheckList,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix TM6 — czy nadal warto",
  description:
    "Thermomix TM6: co potrafi, czym różni się od TM7, czy opłaca się kupować używany i jak dbać o niego dalej. Bez namawiania na wymianę na siłę.",
  path: "/thermomix/tm6",
  keywords: ["thermomix tm6", "tm6 czy warto", "thermomix tm6 używany", "tm6 vs tm7"],
});

const FAQ = [
  {
    question: "Czy Thermomix TM6 jest jeszcze w sprzedaży?",
    answer:
      "W oficjalnej ofercie Vorwerk aktualnym modelem jest TM7 i to jego kupisz u przedstawiciela. TM6 spotkasz dziś głównie z drugiej ręki.",
  },
  {
    question: "Czy warto kupić używany TM6?",
    answer:
      "Może się opłacać, ale bez gwarancji producenta i bez promocji przedstawiciela. Sprawdź numer seryjny, historię serwisu i stan naczynia — najdroższa część to właśnie naczynie z nożem. Przy większej różnicy w cenie policz też ratę 0% na nowy TM7; bywa, że wychodzi podobnie.",
  },
  {
    question: "Czy TM6 dostaje jeszcze aktualizacje i przepisy?",
    answer:
      "Cookidoo działa wspólnie dla modeli, a przepisy przygotowane dla TM6 są nadal dostępne. Sam sprzęt gotuje dokładnie tak, jak gotował — nowszy model tego nie zmienia.",
  },
  {
    question: "Czy mogę oddać TM6 w rozliczeniu?",
    answer:
      "Vorwerk okresowo prowadzi promocje wymiany starszego modelu na nowy. Nie są dostępne cały czas — zapytaj mnie o aktualną ofertę, sprawdzę, czy akurat obowiązuje.",
  },
];

export default function Tm6Page() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "TM6", path: "/thermomix/tm6" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge tone="neutral">Poprzedni model</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Thermomix TM6
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Model poprzedniej generacji. Nie ma go już w regularnej sprzedaży — kupisz go tylko
              z drugiej ręki, bez gwarancji producenta i bez promocji. Aktualnym modelem jest TM7
              i to na nim gotujemy na prezentacji.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Zobacz TM7 na żywo</ButtonLink>
              <ButtonLink href="/thermomix/tm7-vs-tm6" variant="secondary">
                Porównaj TM7 i TM6
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/thermomix-tm7-vs-tm6.webp"
            alt="Thermomix TM6 w białej obudowie obok czarnego TM7, oba z Varomą"
            caption="Po prawej TM6, po lewej TM7 — zdjęcie z mojej kuchni."
          />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            {/*
              Sierpień 2026: sekcja „Co TM6 robi tak samo dobrze” zastąpiona listą
              przewag TM7 — strona ma prowadzić do aktualnego modelu, a nie
              utwierdzać w wyborze poprzedniego (decyzja Agi).
              Każdy punkt pokrywa się z tabelą różnic na /thermomix/tm7-vs-tm6,
              żeby obie strony nie mówiły czego innego.
            */}
            <Heading as="h2" size="md">
              Co TM7 ma, czego TM6 nie ma
            </Heading>
            <Lead className="mt-3">
              Gotować da się na obu. Różnica jest w tym, ile Cię to kosztuje czasu i nerwów przy
              codziennym obiedzie.
            </Lead>
            <div className="mt-6">
              <CheckList
                items={[
                  "otwarte gotowanie — doprawiasz i próbujesz jak w garnku, TM6 tego nie potrafi",
                  "większa Varoma, czyli więcej miejsca na gotowanie na parze dla całej rodziny",
                  "duży ekran dotykowy — więcej kroków przepisu widocznych bez przewijania",
                  "cichsza praca, co widać zwłaszcza wieczorem, gdy dzieci już śpią",
                  "naczynie z zewnętrzną izolacją",
                  "nowe urządzenie z gwarancją producenta, aktualną promocją i ratami 0%",
                ]}
              />
            </div>
          </div>
          <FactsTable
            title="Thermomix TM6 — w skrócie"
            rows={[
              { label: "Status", value: "poprzedni model, poza regularną sprzedażą" },
              { label: "Obudowa", value: "biała" },
              { label: "Sterowanie", value: "ekran + fizyczne pokrętło" },
              { label: "Otwarte gotowanie", value: "brak (jest dopiero w TM7)" },
              { label: "Przepisy", value: "Cookidoo — wspólne z TM7" },
              { label: "Gdzie kupisz", value: "rynek wtórny, bez gwarancji producenta" },
              { label: "Serwis", value: "nadal prowadzony przez Vorwerk" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Masz TM6 i myślisz o przesiadce?
        </Heading>
        <Prose className="mt-4">
          <p>
            To najlepszy moment, żeby zobaczyć różnicę na własne oczy, a nie w tabelce. Vorwerk
            okresowo prowadzi promocje wymiany starszego modelu na nowy — nie są dostępne cały czas,
            więc zapytaj mnie, czy akurat obowiązuje. Do tego raty 0% bez wkładu własnego, więc
            przesiadka nie musi oznaczać jednorazowego wydatku.
          </p>
          <p>
            Wszystkie różnice zebrałam w{" "}
            <Link
              href="/thermomix/tm7-vs-tm6"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              porównaniu TM7 i TM6
            </Link>
            , a na prezentacji w Bochni, Brzesku, Krakowie i okolicach stawiam oba modele obok
            siebie i gotujemy na TM7 — po pierwszym obiedzie sama ocenisz, czy warto.
          </p>
        </Prose>
      </Section>

      <FaqSection items={FAQ} title="TM6 — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Porównaj oba modele u siebie w kuchni"
        text="Przywożę TM7, a jeśli masz TM6 — stawiamy je obok siebie i gotujemy na obu."
      />
    </>
  );
}
