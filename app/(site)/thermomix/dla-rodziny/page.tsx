import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Photo, CheckList, StepsRow, Prose, CtaBand, LocalBand } from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix dla rodziny — obiady bez pilnowania",
  description:
    "Thermomix w domu z dziećmi: obiad dla czterech osób z jednego naczynia, gotowanie na parze równolegle, plan tygodnia i mniej zmywania. Konkretnie, na przykładach.",
  path: "/thermomix/dla-rodziny",
  keywords: ["thermomix dla rodziny", "obiady dla dzieci thermomix", "gotowanie dla rodziny"],
});

const FAQ = [
  {
    question: "Czy w Thermomixie ugotuję obiad dla całej rodziny naraz?",
    answer:
      "Tak. Naczynie ma pojemność wystarczającą na zupę czy danie jednogarnkowe dla czterech–pięciu osób, a w Varomie w tym samym czasie gotują się na parze ziemniaki, warzywa albo mięso. Przy większych porcjach albo wieloetapowych obiadach pomaga drugie naczynie.",
  },
  {
    question: "Czy dzieci mogą pomagać przy gotowaniu?",
    answer:
      "Tak, przy dorosłym — naczynie jest zamknięte podczas pracy, a przepis prowadzi krok po kroku, więc dziecko może odmierzać i dosypywać składniki. To najczęstszy powód, dla którego dzieci nagle chcą jeść to, co same „ugotowały”.",
  },
  {
    question: "Ile czasu realnie oszczędzam?",
    answer:
      "Najwięcej nie na samym gotowaniu, tylko na pilnowaniu i myciu. Obiad powstaje w jednym naczyniu, a Ty w tym czasie odbierasz dziecko ze szkoły albo kończysz pracę.",
  },
  {
    question: "Co z alergiami i różnymi dietami w jednym domu?",
    answer:
      "Gotujesz z własnych składników, więc kontrolujesz skład w stu procentach — bezglutenowo, bez laktozy, mniej soli dla malucha. Menu prezentacji też dopasowuję do tego, co jecie na co dzień.",
  },
];

export default function DlaRodzinyPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "Dla rodziny", path: "/thermomix/dla-rodziny" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Dla rodziny</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Thermomix dla rodziny
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Obiad dla czterech osób, który gotuje się sam, gdy Ty robisz z dzieckiem lekcje. Bez
              stania przy garnkach i bez zlewu pełnego naczyń.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Umów prezentację</ButtonLink>
              <ButtonLink href="/finansowanie" variant="secondary">
                Policz ratę
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/prezentacja-thermomix-4.webp"
            alt="Trzy talerze z kurczakiem w sosie paprykowym i paluchami drożdżowymi na rodzinnym stole"
            caption="Rodzinny obiad z prezentacji: kurczak w sosie, kluski na parze, paluchy drożdżowe."
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Jak wygląda zwykły wtorek
        </Heading>
        <div className="mt-8">
          <StepsRow
            steps={[
              { title: "17:05", text: "Wrzucasz warzywa i mięso do naczynia, wybierasz przepis." },
              { title: "17:10", text: "Do Varomy trafiają ziemniaki i brokuł — wszystko gotuje się razem." },
              { title: "17:35", text: "Urządzenie kończy pracę, Ty w tym czasie byłaś przy dzieciach." },
              { title: "17:40", text: "Obiad na stole, do umycia jedno naczynie." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Co realnie zmienia się w domu z dziećmi
            </Heading>
            <div className="mt-6">
              <CheckList
                items={[
                  "obiad z jednego naczynia zamiast trzech garnków i patelni",
                  "gotowanie na parze równolegle z resztą dania (Varoma)",
                  "plan tygodnia i lista zakupów z Cookidoo — koniec z „co dziś ugotować”",
                  "domowe przetwory: bulion, przyprawa warzywna, dżemy bez cukru w składzie",
                  "ciasto na bułki i pizzę wyrabiane bez brudzenia blatu",
                  "dzieci mogą dosypywać składniki i czuć się częścią gotowania",
                ]}
              />
            </div>
            <Prose className="mt-6">
              <p>
                Jeśli w domu jest maluch i dopiero rozszerzacie dietę, zajrzyj też do{" "}
                <Link
                  href="/thermomix/dla-mamy"
                  className="font-medium text-brand-700 underline underline-offset-4"
                >
                  Thermomix dla mamy
                </Link>{" "}
                — tam piszę o przecierach, gotowaniu na parze i porcjowaniu.
              </p>
            </Prose>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/zdjecia/prezentacja-thermomix-6.webp"
              alt="Bułki upieczone z ciasta wyrobionego w Thermomixie"
              imgClassName="aspect-[3/4]"
            />
            <Photo
              src="/zdjecia/prezentacja-thermomix-1.webp"
              alt="Domowa lemoniada w karafce przygotowana w Thermomixie"
              imgClassName="aspect-[3/4]"
            />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Trzy rzeczy, które słyszę od rodziców najczęściej
        </Heading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "„Wreszcie jem ciepły obiad”", o: "Bo nie stoisz przy garnku, gdy reszta je." },
            { t: "„Mniej wyrzucamy”", o: "Zupa krem z warzyw, które inaczej poszłyby do kosza." },
            { t: "„Dziecko je warzywa”", o: "Bo samo je wsypało i pilnowało czasu na ekranie." },
          ].map((k) => (
            <Card key={k.t}>
              <h3 className="text-base font-semibold text-neutral-900">{k.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{k.o}</p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection items={FAQ} title="Dla rodziny — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Ugotujmy razem obiad u Ciebie"
        text="Prezentacja jest bezpłatna, trwa około dwóch godzin i kończy się wspólnym posiłkiem — dzieci mile widziane."
      />
    </>
  );
}
