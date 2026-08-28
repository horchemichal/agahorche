import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { PresentationStepsSection } from "@/components/marketing/presentation-steps";
import {
  Photo,
  FactsTable,
  CheckList,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Jak wygląda prezentacja Thermomix TM7",
  description:
    "Prezentacja Thermomix TM7 krok po kroku: ile trwa, co gotujemy, kto może być obecny i czy trzeba coś przygotować. Zdjęcia z prawdziwych spotkań w Małopolsce.",
  path: "/prezentacja/jak-wyglada",
  keywords: ["prezentacja thermomix", "jak wygląda prezentacja thermomix", "pokaz thermomix w domu"],
  ogImage: "/zdjecia/prezentacja-thermomix-4.webp",
});

const FAQ = [
  {
    question: "Ile trwa prezentacja Thermomixa?",
    answer:
      "Około dwóch godzin — tyle, żeby spokojnie ugotować kilka potraw, wszystko wytłumaczyć i odpowiedzieć na pytania. Jeśli masz mniej czasu, powiedz od razu, dopasuję program.",
  },
  {
    question: "Czy muszę coś kupić albo przygotować?",
    answer:
      "Nie musisz nic kupować. Większość składników przywożę ze sobą; jeśli coś ma być pod ręką, uprzedzam wcześniej. Potrzebne są tylko blat, gniazdko i chęć spróbowania.",
  },
  {
    question: "Czy prezentacja jest płatna?",
    answer:
      "Nie. Jest bezpłatna i niezobowiązująca — nie ma opłaty za dojazd ani za składniki, a „nie” po prezentacji jest pełnoprawną odpowiedzią.",
  },
  {
    question: "Ile osób może być na prezentacji?",
    answer:
      "Ile chcesz — od spotkania w cztery oczy po całą rodzinę czy koleżanki. Przy większej grupie po prostu planuję nieco więcej porcji.",
  },
  {
    question: "Czy dopasujesz menu do diety?",
    answer:
      "Tak. Bezglutenowo, bez laktozy, wegetariańsko, wegańsko, przy alergiach albo diecie lekkostrawnej — powiedz przy umawianiu, a ułożę menu pod Ciebie.",
  },
  {
    question: "Co, jeśli nie mogę zorganizować prezentacji u siebie?",
    answer:
      "Umawiamy się u kogoś z rodziny albo znajomych — albo omawiamy wszystko na rozmowie wideo. Napisz, a znajdziemy wygodne rozwiązanie.",
  },
];

export default function JakWygladaPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Prezentacja", path: "/prezentacja" },
            { name: "Jak wygląda", path: "/prezentacja/jak-wyglada" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Bezpłatnie i bez zobowiązań</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Jak wygląda prezentacja Thermomixa
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Przyjeżdżam do Ciebie z Thermomixem TM7 i razem gotujemy obiad. Bez prezentacji ze
              slajdów, bez presji i bez opłat — po prostu zwykłe gotowanie w Twojej kuchni.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Umów termin</ButtonLink>
              <ButtonLink href="/thermomix/wady-i-zalety" variant="secondary">
                Wady i zalety
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/prezentacja-thermomix-3.webp"
            alt="Paluchy drożdżowe z czarnuszką upieczone podczas prezentacji, w tle Thermomix TM7"
            caption="Paluchy drożdżowe z prezentacji — ciasto wyrobione w TM7."
          />
        </div>
      </Section>

      <PresentationStepsSection />

      <Section tone="surface">
        <Heading as="h2" size="md">
          Co zwykle gotujemy
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Menu dobieram do tego, jak jecie na co dzień. Najczęściej wychodzi z tego pełny obiad, coś
          słodkiego i napój — wszystko z jednego urządzenia.
        </Lead>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Photo
            src="/zdjecia/prezentacja-thermomix-2.webp"
            alt="Kurczak w sosie paprykowym z kluskami na parze i paluchem drożdżowym na talerzu"
            imgClassName="aspect-[3/4]"
            caption="Danie główne z sosem"
          />
          <Photo
            src="/zdjecia/prezentacja-thermomix-6.webp"
            alt="Świeże bułki na blasze obok Thermomixa TM7 z przepisem na ekranie"
            imgClassName="aspect-[3/4]"
            caption="Pieczywo z własnego ciasta"
          />
          <Photo
            src="/zdjecia/prezentacja-thermomix-1.webp"
            alt="Karafka z domową lemoniadą obok Thermomixa TM7 z przepisem na ekranie"
            imgClassName="aspect-[3/4]"
            caption="Napój na świeżo"
          />
          <Photo
            src="/zdjecia/prezentacja-thermomix-5.webp"
            alt="Warkocz drożdżowy z kruszonką przed pieczeniem, ciasto wyrobione w Thermomixie"
            imgClassName="aspect-[3/4]"
            caption="Coś słodkiego"
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          To zdjęcia z prawdziwych spotkań u klientów w Małopolsce — nie zdjęcia katalogowe.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Czego potrzebujesz u siebie
            </Heading>
            <div className="mt-6">
              <CheckList
                items={[
                  "wolny kawałek blatu i gniazdko",
                  "około dwóch godzin spokoju",
                  "chęć spróbowania tego, co ugotujemy",
                  "pytania — im więcej, tym lepiej",
                ]}
              />
            </div>
            <Prose className="mt-6">
              <p>
                Resztę przywożę: urządzenie, składniki i przepisy. Jeśli masz w domu alergie albo
                dietę, napisz o tym przy umawianiu terminu — ułożę menu tak, żeby każdy mógł
                spróbować.
              </p>
              <p>
                Po spotkaniu nie znikam. Pomagam przy pierwszym uruchomieniu, koncie Cookidoo i
                pierwszych przepisach — także wtedy, gdy zakup nastąpi dopiero za kilka tygodni.
                Więcej o mnie znajdziesz na stronie{" "}
                <Link href="/o-mnie" className="font-medium text-brand-700 underline underline-offset-4">
                  o mnie
                </Link>
                .
              </p>
            </Prose>
          </div>
          <FactsTable
            title="Prezentacja w skrócie"
            rows={[
              { label: "Koszt", value: "bezpłatna, bez zobowiązań" },
              { label: "Czas trwania", value: "około 2 godzin" },
              { label: "Miejsce", value: "u Ciebie w domu" },
              { label: "Liczba osób", value: "dowolna — od jednej osoby po całą rodzinę" },
              { label: "Menu", value: "dopasowane do diety i alergii" },
              { label: "Składniki", value: "przywożę ze sobą" },
              { label: "Obszar", value: "Bochnia, Brzesko, Kraków, Wieliczka, Tarnów i okolice" },
            ]}
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Co Ci to daje
        </Heading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Sprawdzasz na sobie",
              text: "Nie czytasz o funkcjach — obsługujesz urządzenie sama i widzisz, czy leży Ci w ręce.",
            },
            {
              title: "Poznajesz realny koszt",
              text: "Aktualna cena, promocje i wyliczenie raty na Twój budżet, bez ukrytych dopłat.",
            },
            {
              title: "Zero presji",
              text: "Decyzję podejmujesz kiedy chcesz. „Muszę to przemyśleć” jest w porządku.",
            },
          ].map((karta) => (
            <Card key={karta.title}>
              <h3 className="text-base font-semibold text-neutral-900">{karta.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{karta.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection items={FAQ} title="Prezentacja — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Umów prezentację w swojej kuchni"
        text="Wybierz termin, który Ci pasuje — także wieczorem albo w weekend."
      />
    </>
  );
}
