import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Photo, CheckList, Prose, CtaBand, LocalBand } from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix dla mamy — gotowanie z małym dzieckiem",
  description:
    "Thermomix przy małym dziecku: przeciery i dania na parze, porcjowanie na kilka dni, gotowanie jedną ręką i zawsze ciepły posiłek dla siebie. Bez cudownych obietnic.",
  path: "/thermomix/dla-mamy",
  keywords: ["thermomix dla mamy", "thermomix rozszerzanie diety", "przeciery dla niemowlaka thermomix"],
});

const FAQ = [
  {
    question: "Czy Thermomix przyda się przy rozszerzaniu diety?",
    answer:
      "Tak — gotuje na parze i miksuje w jednym naczyniu, więc warzywo z Varomy trafia od razu do przecieru o wybranej konsystencji, bez przekładania i bez dodatków. O tym, co i kiedy podawać dziecku, decyduje jednak Twój pediatra albo dietetyk, nie urządzenie.",
  },
  {
    question: "Czy da się przygotować zapas na kilka dni?",
    answer:
      "Tak. Wiele mam gotuje raz większą porcję i porcjuje ją do słoiczków lub pojemników na kilka dni albo do zamrażarki. Przy takim trybie szybko przydaje się drugie naczynie.",
  },
  {
    question: "Czy urządzenie jest głośne, gdy dziecko śpi?",
    answer:
      "TM7 pracuje ciszej niż poprzedni model, ale przy najwyższych obrotach nadal słychać miksowanie. Samo gotowanie i gotowanie na parze jest praktycznie bezgłośne.",
  },
  {
    question: "Czy jest bezpieczne, gdy maluch kręci się po kuchni?",
    answer:
      "Naczynie pracuje zamknięte, a pokrywa jest blokowana podczas pracy. Mimo to gorące naczynie i Varoma to elementy, które — jak każdy garnek — trzymamy poza zasięgiem dziecka.",
  },
];

export default function DlaMamyPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "Dla mamy", path: "/thermomix/dla-mamy" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Dla mamy</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Thermomix dla mamy
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Nie obieca Ci przespanej nocy. Ale sprawi, że posiłek dla dziecka i ciepły obiad dla
              Ciebie powstaną w czasie jednej drzemki — i bez stania nad garnkiem.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Umów prezentację</ButtonLink>
              <ButtonLink href="/diety/niemowleta" variant="secondary">
                Rozszerzanie diety
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/prezentacja-thermomix-2.webp"
            alt="Kurczak w sosie paprykowym z kluskami na parze — obiad przygotowany w Thermomixie"
            caption="Jedno naczynie, pełny obiad — reszta czasu zostaje dla dziecka."
          />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Co pomaga najbardziej w pierwszych latach
            </Heading>
            <div className="mt-6">
              <CheckList
                items={[
                  "gotowanie na parze i miksowanie w jednym naczyniu — przecier o wybranej konsystencji",
                  "porcjowanie na kilka dni albo do zamrażarki, bez konserwantów",
                  "obiad, który gotuje się sam, gdy nosisz dziecko na rękach",
                  "domowy bulion i przyprawa warzywna bez soli i wzmacniaczy",
                  "mleko roślinne, budyń, musy owocowe i chleb bez listy „E” w składzie",
                  "wszystko z timerem — nie musisz pamiętać, kiedy zdjąć garnek",
                ]}
              />
            </div>
            <Prose className="mt-6">
              <p>
                Piszę to jako przedstawicielka, ale bez owijania: urządzenie nie zastąpi wsparcia
                bliskich ani nie sprawi, że dziecko zacznie jeść wszystko. Daje za to jedną
                konkretną rzecz — czas, którego przy małym dziecku brakuje najbardziej.
              </p>
              <p>
                Konkretne przepisy i schematy znajdziesz w dziale{" "}
                <Link href="/diety" className="font-medium text-brand-700 underline underline-offset-4">
                  diety
                </Link>
                , w tym{" "}
                <Link
                  href="/diety/kobiety-karmiace"
                  className="font-medium text-brand-700 underline underline-offset-4"
                >
                  dla kobiet karmiących
                </Link>
                .
              </p>
            </Prose>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/zdjecia/prezentacja-thermomix-7.webp"
              alt="Domowy dżem, bulion warzywny i przyprawa warzywna w słoikach"
              imgClassName="aspect-[3/4]"
            />
            <Photo
              src="/zdjecia/prezentacja-thermomix-5.webp"
              alt="Warkocz drożdżowy z kruszonką z ciasta wyrobionego w Thermomixie"
              imgClassName="aspect-[3/4]"
            />
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Trzy sytuacje, w których to widać
        </Heading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Drzemka",
              o: "Wsypujesz składniki, urządzenie gotuje, Ty siadasz z kawą albo kładziesz się obok.",
            },
            {
              t: "Wieczór",
              o: "Zupa krem i przecier na jutro powstają z tych samych warzyw, w jednym cyklu.",
            },
            {
              t: "Wyjazd",
              o: "Porcje w słoiczkach zamiast kupowania gotowców po drodze.",
            },
          ].map((k) => (
            <Card key={k.t}>
              <h3 className="text-base font-semibold text-neutral-900">{k.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{k.o}</p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection items={FAQ} title="Dla mamy — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Prezentacja z dzieckiem w tle? Żaden problem"
        text="Umawiamy się na porę, która Ci pasuje — także w trakcie drzemki albo wieczorem, gdy maluch już śpi."
      />
    </>
  );
}
