import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Photo, StepsRow, Prose, CtaBand, LocalBand } from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix dla początkujących w kuchni",
  description:
    "Nie umiesz gotować albo tego nie lubisz? Thermomix prowadzi przez przepis krok po kroku. Pięć dań na start i czego naprawdę trzeba się nauczyć.",
  path: "/thermomix/dla-poczatkujacych",
  keywords: ["thermomix dla początkujących", "nie umiem gotować", "thermomix pierwsze kroki"],
});

const NA_START = [
  { t: "Zupa krem", o: "Warzywa, bulion, przycisk. Trudno to zepsuć, a wychodzi jak z restauracji." },
  { t: "Sos do makaronu", o: "Cebula i pomidory siekane i duszone w tym samym naczyniu." },
  { t: "Bułki", o: "Ciasto wyrabia urządzenie — Ty tylko formujesz i wkładasz do piekarnika." },
  { t: "Obiad z Varomą", o: "Ryba i warzywa na parze, a pod spodem gotuje się kasza." },
  { t: "Deser lodowy", o: "Mrożone owoce plus jogurt — gotowe w minutę, bez cukru." },
];

const FAQ = [
  {
    question: "Naprawdę poradzę sobie, jeśli nigdy nie gotowałam?",
    answer:
      "Tak. Przepis prowadzi krok po kroku: urządzenie ustawia czas, temperaturę i obroty, a na ekranie widzisz, co i kiedy dodać. Twoim zadaniem jest odważyć składniki — waga jest wbudowana w naczynie.",
  },
  {
    question: "Co, jeśli nie mam pomysłu, co ugotować?",
    answer:
      "Cookidoo ma ponad 100 tysięcy przepisów, w tym ponad 6 tysięcy polskich, z filtrowaniem po czasie, składnikach i diecie. Możesz też ułożyć plan tygodnia i wygenerować listę zakupów.",
  },
  {
    question: "Ile trwa nauczenie się obsługi?",
    answer:
      "Pierwsze danie robisz zwykle jeszcze tego samego dnia, w którym urządzenie przyjedzie. Po zakupie pokazuję pierwsze uruchomienie, zakładamy konto Cookidoo i gotujemy razem pierwszy przepis.",
  },
  {
    question: "Czy coś mogę zepsuć?",
    answer:
      "Przy przepisie prowadzonym krok po kroku — bardzo trudno. Najczęstsze potknięcia to za mało płynu przy miksowaniu i zapomniana miarka na pokrywie; jedno i drugie pokazuję na prezentacji.",
  },
];

export default function DlaPoczatkujacychPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "Dla początkujących", path: "/thermomix/dla-poczatkujacych" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Dla początkujących</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Nie umiesz gotować? Tym bardziej się sprawdzi
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Thermomix nie zakłada, że wiesz, ile to „szczypta” i jak wygląda „zeszklona cebula”.
              Mówi wprost: dodaj, ustaw, poczekaj. Resztę robi za Ciebie.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Ugotuj ze mną pierwszy obiad</ButtonLink>
              <ButtonLink href="/thermomix/funkcje" variant="secondary">
                Zobacz funkcje
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/prezentacja-thermomix-3.webp"
            alt="Paluchy drożdżowe z czarnuszką upieczone na prezentacji, w tle Thermomix TM7"
            caption="Pierwsze wypieki wychodzą nawet osobom, które twierdzą, że „nie mają ręki do ciasta”."
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Jak wygląda gotowanie krok po kroku
        </Heading>
        <div className="mt-8">
          <StepsRow
            steps={[
              { title: "Wybierasz przepis", text: "Na telefonie albo na ekranie urządzenia — z filtrem na czas i składniki." },
              { title: "Ważysz w naczyniu", text: "Waga jest w środku, więc nie potrzebujesz miski ani szklanki." },
              { title: "Urządzenie gotuje", text: "Samo ustawia czas, temperaturę i obroty na każdym etapie." },
              { title: "Dodajesz, gdy prosi", text: "Na ekranie widzisz dokładnie co, kiedy i ile." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Pięć dań na pierwszy tydzień
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Od tych zaczyna większość osób, które wcześniej omijały kuchnię szerokim łukiem.
        </Lead>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NA_START.map((d) => (
            <Card as="li" key={d.t}>
              <h3 className="text-base font-semibold text-neutral-900">{d.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.o}</p>
            </Card>
          ))}
        </ul>
        <Prose className="mt-8">
          <p>
            Po zakupie nie zostawiam Cię z pudełkiem i instrukcją. Pokazuję pierwsze uruchomienie,
            zakładamy konto Cookidoo, wysyłam sprawdzone przepisy na start i odpowiadam na pytania,
            gdy coś nie wyjdzie za pierwszym razem. Więcej o samym spotkaniu przeczytasz na stronie{" "}
            <Link
              href="/prezentacja/jak-wyglada"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              jak wygląda prezentacja
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <FaqSection items={FAQ} title="Dla początkujących — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Sprawdź, czy dasz radę — na moim urządzeniu"
        text="Na prezentacji to Ty obsługujesz Thermomixa. Bez oceniania i bez pośpiechu."
      />
    </>
  );
}
