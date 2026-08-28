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
  FactsTable,
  CheckList,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { InstallmentCalculator } from "@/components/marketing/installment-calculator";
import { formatPln } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix TM7 — cena, funkcje, dla kogo",
  description:
    "Thermomix® TM7 u przedstawicielki z Małopolski: co realnie robi w kuchni, ile kosztuje, jak wygląda zakup na raty 0% i co dostajesz w zestawie.",
  path: "/thermomix/tm7",
  keywords: ["thermomix tm7", "thermomix tm7 cena", "thermomix tm7 funkcje", "thermomix małopolska"],
  ogImage: "/zdjecia/thermomix-tm7-varoma.webp",
});

const FAQ = [
  {
    question: "Co Thermomix TM7 robi w kuchni?",
    answer:
      "Waży, sieka, miksuje, miele, uciera, ubija, gotuje, gotuje na parze, smaży, wyrabia ciasto i prowadzi przez przepis krok po kroku. W praktyce zastępuje na blacie kilka urządzeń i sporo pilnowania garnka.",
  },
  {
    question: "Czy TM7 jest trudny w obsłudze?",
    answer:
      "Nie. Przepis prowadzi krok po kroku: urządzenie samo ustawia czas, temperaturę i obroty, a Ty dodajesz składniki, gdy o to poprosi. Po prezentacji pokazuję pierwsze uruchomienie i konfigurację konta Cookidoo.",
  },
  {
    question: "Ile przepisów jest w Cookidoo?",
    answer:
      "Ponad 100 tysięcy przepisów, w tym ponad 6 tysięcy polskich — z listami zakupów i planowaniem tygodnia. Abonament jest dostępny w wariancie miesięcznym i rocznym; w rozliczeniu rocznym wychodzi taniej.",
  },
  {
    question: "Gdzie kupię Thermomix TM7?",
    answer:
      "Wyłącznie u oficjalnego przedstawiciela Vorwerk — nie ma go w sklepach ze sprzętem AGD. Ja obsługuję Małopolskę (Bochnia, Brzesko, Kraków, Wieliczka, Tarnów i okolice), a po ustaleniu terminu dojeżdżam też dalej.",
  },
  {
    question: "Czy dostanę pomoc po zakupie?",
    answer:
      "Tak. Zostaję w kontakcie: pierwsze uruchomienie, konto Cookidoo, sprawdzone przepisy na start i pomoc, gdyby coś wymagało zgłoszenia do serwisu.",
  },
];

export default async function Tm7Page() {
  const oferta = await getOffersRepository().getActiveOffer();
  const calculatorPriceZl = oferta?.priceCents ? Math.round(oferta.priceCents / 100) : null;

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "TM7", path: "/thermomix/tm7" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Aktualny model</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Thermomix® TM7
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Najnowszy model Vorwerk: duży ekran dotykowy, większa Varoma, otwarte gotowanie i ten
              sam Cookidoo, który prowadzi przez przepis krok po kroku.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Umów bezpłatną prezentację</ButtonLink>
              <ButtonLink href="/thermomix/tm7-vs-tm6" variant="secondary">
                Porównaj z TM6
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/thermomix-tm7-varoma.webp"
            alt="Thermomix TM7 z założoną Varomą, widok z boku na blacie kuchennym"
            caption="Thermomix TM7 z Varomą — zdjęcie z prezentacji u klientki."
          />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Co robi na co dzień
            </Heading>
            <Lead className="mt-3">
              Nie lista funkcji z folderu, tylko to, co realnie dzieje się w kuchni w tygodniu.
            </Lead>
            <div className="mt-6">
              <CheckList
                items={[
                  "obiad z jednego naczynia — zupa, sos, mięso i kasza bez pilnowania garnków",
                  "gotowanie na parze w Varomie, gdy na dole gotuje się reszta obiadu",
                  "ciasto na chleb, bułki i pizzę wyrabiane bez brudzenia blatu",
                  "przetwory: dżemy, bulion warzywny, domowa przyprawa do potraw",
                  "desery, lody, kremy, masło orzechowe i mleko roślinne",
                  "ważenie składników bezpośrednio w naczyniu, bez osobnej wagi",
                ]}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/zdjecia/prezentacja-thermomix-6.webp"
              alt="Świeżo upieczone bułki na blasze obok Thermomixa TM7 z przepisem na ekranie"
              imgClassName="aspect-[3/4]"
            />
            <Photo
              src="/zdjecia/prezentacja-thermomix-2.webp"
              alt="Kurczak w sosie paprykowym z kluskami i paluchami drożdżowymi na talerzach"
              imgClassName="aspect-[3/4]"
            />
            <Photo
              src="/zdjecia/prezentacja-thermomix-5.webp"
              alt="Warkocz drożdżowy z kruszonką przygotowany z ciasta wyrobionego w Thermomixie"
              imgClassName="aspect-[3/4]"
            />
            <Photo
              src="/zdjecia/prezentacja-thermomix-7.webp"
              alt="Domowy dżem borówkowy, bulion warzywny i przyprawa warzywna w słoikach"
              imgClassName="aspect-[3/4]"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Cena i zakup
            </Heading>
            <Prose className="mt-4">
              <p>
                Cenę Thermomixa ustala Vorwerk i jest taka sama w całej Polsce — u przedstawiciela nie
                zapłacisz więcej niż gdzie indziej, a promocje dostępne są wyłącznie przy zakupie od
                przedstawiciela.
              </p>
              <p>
                Rozłożenie na raty 0% policzysz{" "}
                <Link href="#kalkulator-rat" className="font-medium text-brand-700 underline underline-offset-4">
                  w kalkulatorze poniżej
                </Link>{" "}
                — bez podawania danych i bez zapisów. Wkład własny nie jest wymagany, ale możesz go
                wpisać i zobaczyć, jak zbija ratę. Szersze omówienie warunków jest{" "}
                <Link href="/finansowanie" className="font-medium text-brand-700 underline underline-offset-4">
                  na stronie o finansowaniu
                </Link>.
              </p>
            </Prose>
          </div>
          <FactsTable
            title="Thermomix TM7 — najważniejsze dane"
            rows={[
              { label: "Model", value: "Thermomix® TM7 (aktualny)" },
              {
                label: "Cena urządzenia",
                value: formatPln(oferta?.priceCents) ?? "sprawdź na stronie oferty",
              },
              { label: "Raty", value: "0%, bez wymaganego wkładu własnego" },
              { label: "Przepisy", value: "Cookidoo — ponad 100 tys., w tym ponad 6 tys. polskich" },
              { label: "Gdzie kupisz", value: "u oficjalnego przedstawiciela Vorwerk" },
              { label: "Prezentacja", value: "bezpłatna, u Ciebie w domu" },
              { label: "Po zakupie", value: "pierwsze uruchomienie, Cookidoo, przepisy na start" },
            ]}
            footnote="Aktualna oferta i promocje zmieniają się co miesiąc — dane na tej stronie pochodzą wprost z mojej oferty i są aktualizowane razem z nią."
          />
        </div>
      </Section>

      {/*
        Kalkulator rat na stronie produktu (prośba Agi, sierpień 2026).
        Ta sama zasada co na stronach miast: startuje z ceny z AKTUALNEJ oferty
        w panelu, nie z liczby wpisanej w kod — inaczej po pierwszej zmianie
        ceny strona kłamałaby, a nikt by tego nie zauważył. Bez aktywnej oferty
        sekcja po prostu się nie renderuje.
      */}
      {calculatorPriceZl && (
        <Section id="kalkulator-rat" tone="surface" className="scroll-mt-28">
          <Heading as="h2" size="md">
            Kalkulator rat — ile wyjdzie miesięcznie
          </Heading>
          <Lead className="mt-3 mb-7 max-w-2xl">
            Policz sam, zanim zadzwonisz. Kalkulator startuje z aktualnej ceny TM7 — zmień okres
            spłaty albo wkład własny i zobacz, jak zmienia się rata. Wynik jest orientacyjny.
          </Lead>
          <InstallmentCalculator initialPriceZl={calculatorPriceZl} />
        </Section>
      )}

      <Section tone="surface">
        <Heading as="h2" size="md">
          Dla kogo TM7 sprawdza się najlepiej
        </Heading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Dla rodzin",
              text: "Obiad dla czterech osób bez stania nad garnkami, większe porcje i gotowanie na parze w Varomie.",
            },
            {
              title: "Dla zabieganych",
              text: "Przepis prowadzi krok po kroku, więc gotowanie nie wymaga pomysłu ani wolnej głowy po pracy.",
            },
            {
              title: "Dla osób na diecie",
              text: "Pełna kontrola składu — bezglutenowo, wege, lekko, z policzonymi składnikami.",
            },
          ].map((karta) => (
            <Card key={karta.title}>
              <h3 className="text-base font-semibold text-neutral-900">{karta.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{karta.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection items={FAQ} title="Thermomix TM7 — najczęstsze pytania" />

      <LocalBand />
      <CtaBand />
    </>
  );
}
