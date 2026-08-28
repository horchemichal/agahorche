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
  PhotoPlaceholder,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Akcesoria do Thermomix TM7 — co warto dokupić",
  description:
    "Akcesoria do Thermomixa TM7: nakładka krojąca, osłona noża, silikonowa forma do Varomy, Thermomix Sensor, motylek i Varoma. Co jest w zestawie, co warto dokupić i do czego naprawdę się przyda.",
  path: "/akcesoria",
  keywords: ["akcesoria thermomix tm7", "nakładka krojąca thermomix", "thermomix sensor", "osłona noża thermomix"],
});

/**
 * Akcesoria opisane funkcją, nie ceną — cennik Vorwerk zmienia się razem z
 * promocjami, a wymyślona kwota na stronie jest gorsza niż jej brak
 * (spec §42).
 *
 * Zdjęcia dochodzą stopniowo, dlatego pozycja ma albo `foto` (prawdziwe
 * zdjęcie produktu), albo `zdjecie` (opis ramki `PhotoPlaceholder`). Gdy Aga
 * przyśle kolejne zdjęcie, wystarczy zamienić jedno pole na drugie —
 * mechanizm zostaje, mimo że dziś każda pozycja ma już własne zdjęcie.
 *
 * Sierpień 2026: doszły zdjęcia nakładki krojącej, osłony noża, formy
 * silikonowej do Varomy i Sensora. Wtedy też Aga kazała zdjąć z listy
 * „drugie naczynie miksujące” — nie chce go promować, więc znikło również
 * z opisu SEO, FAQ i akapitu zamykającego tej strony (wzmianki na
 * /thermomix/wady-i-zalety, /thermomix/dla-mamy i /thermomix/dla-rodziny
 * zostały świadomie, bo tam pada jako uwaga o gotowaniu, nie jako oferta).
 */
const W_ZESTAWIE = [
  {
    nazwa: "Naczynie miksujące z nożem",
    opis: "Serce urządzenia — miksuje, sieka, miele i gotuje. W TM7 z zewnętrzną izolacją.",
  },
  {
    nazwa: "Varoma",
    opis: "Dwupoziomowy pojemnik do gotowania na parze — mięso, ryba i warzywa na górze, obiad na dole.",
  },
  {
    nazwa: "Koszyczek",
    opis: "Do gotowania ryżu i ziemniaków oraz odcedzania — pełni też rolę „sitka” przy sokach.",
  },
  {
    nazwa: "Motylek",
    opis: "Do ubijania piany, śmietany i delikatnego mieszania, gdy nóż byłby za ostry.",
  },
  {
    nazwa: "Kopystka i miarka",
    opis: "Do mieszania i wyjmowania potraw oraz zamykania pokrywy podczas pracy.",
  },
];

const DO_DOKUPIENIA: {
  nazwa: string;
  opis: string;
  /** Prawdziwe zdjęcie produktu. */
  foto?: { src: string; alt: string };
  /** Opis ramki, gdy zdjęcia jeszcze nie ma. */
  zdjecie?: string;
}[] = [
  {
    nazwa: "Nakładka krojąca 2.0 ze spiralizerem",
    opis:
      "Kroi w plastry, trze, szatkuje i robi makaron warzywny. Najczęściej dokupowane akcesorium — zwłaszcza przy surówkach i zapiekankach.",
    foto: {
      src: "/zdjecia/akcesoria-nakladka-krojaca.webp",
      alt: "Nakładka krojąca 2.0 do Thermomixa ze spiralizerem, tarczami i popychaczem",
    },
  },
  {
    nazwa: "Osłona noża miksującego 2.0",
    opis:
      "Zakłada się na nóż, żeby ugotować delikatne składniki w całości — ziemniaki, jajka, owoce — bez rozdrabniania.",
    foto: {
      src: "/zdjecia/akcesoria-oslona-noza.webp",
      alt: "Osłona noża miksującego 2.0 do Thermomixa",
    },
  },
  {
    nazwa: "Silikonowa forma do Varomy",
    opis:
      "Wkładka z okrągłymi wgłębieniami i otworami na parę — porcjowane dania i wypieki gotowane w Varomie, bez pilnowania i bez przywierania.",
    foto: {
      src: "/zdjecia/akcesoria-nester.webp",
      alt: "Zielona silikonowa forma z dziewięcioma okrągłymi wgłębieniami, wkładana do Varomy",
    },
  },
  {
    nazwa: "Thermomix Sensor",
    opis:
      "Bezprzewodowy termometr do kontroli temperatury wewnątrz potrawy — przydaje się przy pieczeni, kaczce i mięsie w niskich temperaturach. W zestawie z etui ładującym.",
    foto: {
      src: "/zdjecia/akcesoria-sensor.webp",
      alt: "Thermomix Sensor — bezprzewodowa sonda temperatury obok białego etui ładującego",
    },
  },
];

const FAQ = [
  {
    question: "Które akcesorium kupić jako pierwsze?",
    answer:
      "Najczęściej nakładkę krojącą — daje najwięcej nowych zastosowań na co dzień (surówki, zapiekanki, frytki warzywne). Jeśli często pieczesz mięso albo gotujesz w niskich temperaturach, więcej zmieni Sensor.",
  },
  {
    question: "Czy akcesoria z TM6 pasują do TM7?",
    answer:
      "Część tak — nakładka krojąca 2.0 i osłona noża 2.0 są opisywane przez Vorwerk jako pasujące do TM5, TM6 i TM7. Naczynie miksujące i Varoma są dopasowane do konkretnego modelu. Konkretne akcesorium zawsze potwierdzam przed zakupem.",
  },
  {
    question: "Ile kosztują akcesoria?",
    answer:
      "Ceny ustala Vorwerk i zmieniają się razem z promocjami, dlatego nie podaję ich na stronie „na sztywno”. Aktualną kwotę podam Ci przez telefon albo podczas prezentacji — razem z informacją, czy dane akcesorium jest akurat w promocji.",
  },
  {
    question: "Czy muszę kupować akcesoria od razu?",
    answer:
      "Nie. Thermomix w zestawie podstawowym gotuje wszystko, co pokazuję na prezentacji. Akcesoria dokupuje się później, gdy wiesz już, jak gotujesz na co dzień.",
  },
];

export default function AkcesoriaPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Akcesoria", path: "/akcesoria" }]} />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Akcesoria</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Akcesoria do Thermomixa TM7
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Co dostajesz w zestawie, co warto dokupić i — co ważniejsze — czego naprawdę
              potrzebujesz przy swoim sposobie gotowania.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Zapytaj o akcesoria</ButtonLink>
              <ButtonLink href="/thermomix/tm7" variant="secondary">
                Wróć do TM7
              </ButtonLink>
            </div>
          </div>
          <Photo
            src="/zdjecia/thermomix-tm7-varoma.webp"
            alt="Thermomix TM7 z Varomą — naczynie, pokrywa i Varoma z zestawu podstawowego"
            caption="Varoma i naczynie miksujące są w zestawie podstawowym TM7."
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          W zestawie z TM7
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Tym gotujemy na prezentacji — obiad, ciasto i deser powstają bez żadnego dodatkowego
          wyposażenia.
        </Lead>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {W_ZESTAWIE.map((item) => (
            <Card as="li" key={item.nazwa}>
              <h3 className="text-base font-semibold text-neutral-900">{item.nazwa}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.opis}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Warto dokupić
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Akcesoria, o które pytacie najczęściej. Ceny zmieniają się razem z promocjami
          Vorwerk, więc podaję je indywidualnie — zawsze aktualne, nigdy „mniej więcej”.
        </Lead>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {DO_DOKUPIENIA.map((item) => (
            <Card as="li" key={item.nazwa} className="flex flex-col gap-4">
              {item.foto ? (
                <Photo
                  src={item.foto.src}
                  alt={item.foto.alt}
                  imgClassName="aspect-square bg-neutral-0 object-contain"
                />
              ) : (
                <PhotoPlaceholder label={item.zdjecie ?? item.nazwa} />
              )}
              <div>
                <h3 className="text-base font-semibold text-neutral-900">{item.nazwa}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.opis}</p>
              </div>
            </Card>
          ))}
        </ul>
        <Prose className="mt-8">
          <p>
            Nie namawiam na komplet od razu. Po prezentacji zwykle wiadomo, czy w Twojej kuchni
            częściej przyda się nakładka krojąca, czy Sensor — i wtedy kupujesz to jedno, które
            faktycznie będzie pracować.
          </p>
        </Prose>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Cookidoo — to, co daje urządzeniu przepisy
        </Heading>
        <Prose className="mt-4">
          <p>
            Cookidoo to platforma z przepisami prowadzącymi krok po kroku: ponad 100 tysięcy
            przepisów, w tym ponad 6 tysięcy polskich, listy zakupów i planowanie tygodnia. Abonament
            jest dostępny miesięcznie i rocznie — w rozliczeniu rocznym wychodzi taniej.
          </p>
          <p>
            Po zakupie pomagam założyć konto i pokazuję, jak wysyłać przepis prosto na urządzenie.
            Więcej o samym gotowaniu znajdziesz na stronie{" "}
            <Link href="/thermomix/tm7" className="font-medium text-brand-700 underline underline-offset-4">
              Thermomix TM7
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <FaqSection items={FAQ} title="Akcesoria — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Nie wiesz, co Ci się przyda?"
        text="Powiedz mi, jak gotujesz na co dzień — podpowiem, które akcesorium ma u Ciebie sens, a które będzie leżeć w szufladzie."
      />
    </>
  );
}
