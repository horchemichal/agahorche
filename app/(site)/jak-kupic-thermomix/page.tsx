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
  StepsRow,
  CheckList,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { formatPln } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: "Jak kupić Thermomix TM7 — krok po kroku",
  description:
    "Gdzie i jak kupić Thermomixa TM7: dlaczego tylko u przedstawiciela, jak wygląda zamówienie, formy płatności, dostawa, gwarancja i co dzieje się po zakupie.",
  path: "/jak-kupic-thermomix",
  keywords: ["jak kupić thermomix", "gdzie kupić thermomix", "thermomix zakup", "thermomix dostawa"],
});

const FAQ = [
  {
    question: "Czy Thermomixa można kupić w sklepie ze sprzętem AGD?",
    answer:
      "Nie. Vorwerk sprzedaje wyłącznie przez własną sieć przedstawicieli — to jedyna droga do nowego urządzenia z gwarancją producenta i z aktualnymi promocjami.",
  },
  {
    question: "Czy muszę zorganizować prezentację, żeby kupić?",
    answer:
      "Nie musisz. Jeśli wiesz, czego chcesz, składamy zamówienie od razu — telefonicznie albo przy krótkim spotkaniu. Prezentacja jest po to, żeby zobaczyć urządzenie w działaniu, a nie warunkiem zakupu.",
  },
  {
    question: "Jak długo czeka się na dostawę?",
    answer:
      "Zwykle kilka dni roboczych od zamówienia, kurierem pod wskazany adres. Dokładny termin potwierdzam przy składaniu zamówienia, bo zależy od dostępności modelu.",
  },
  {
    question: "Jaka jest gwarancja?",
    answer:
      "Urządzenie kupione u przedstawiciela objęte jest gwarancją producenta Vorwerk. Zakres i czas trwania potwierdzam przy zamówieniu — nie podaję tego „z pamięci”, bo warunki bywają aktualizowane.",
  },
  {
    question: "Czy mogę kupić Thermomixa w prezencie?",
    answer:
      "Tak, to częsty scenariusz — zamówienie składasz Ty, a dostawa i szkolenie odbywają się u osoby obdarowanej. Pomagam też dobrać termin tak, żeby niespodzianka się udała.",
  },
];

export default async function JakKupicPage() {
  const oferta = await getOffersRepository().getActiveOffer();

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Jak kupić Thermomix", path: "/jak-kupic-thermomix" }]} />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Zakup krok po kroku</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Jak kupić Thermomixa TM7
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Cały proces w czterech krokach — od telefonu do pierwszego obiadu. Bez ukrytych
              kosztów i bez presji na decyzję tego samego dnia.
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
            src="/zdjecia/thermomix-tm7-varoma.webp"
            alt="Thermomix TM7 z Varomą gotowy do pracy na blacie kuchennym"
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Cztery kroki
        </Heading>
        <div className="mt-8">
          <StepsRow
            steps={[
              { title: "Kontakt", text: "Dzwonisz albo piszesz. Ustalamy, czego potrzebujesz i czy chcesz prezentację." },
              { title: "Oferta", text: "Pokazuję aktualną cenę, promocje i warianty rat — bez zobowiązania." },
              { title: "Zamówienie", text: "Składamy je razem; przy ratach wniosek podpisujesz na miejscu." },
              { title: "Dostawa i start", text: "Kurier przywozi urządzenie, ja pomagam przy pierwszym uruchomieniu." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Co dostajesz kupując u przedstawiciela
            </Heading>
            <div className="mt-6">
              <CheckList
                items={[
                  "aktualne promocje Vorwerk — dostępne tylko tą drogą",
                  "gwarancję producenta na nowe urządzenie",
                  "pomoc w wyborze wariantu i formy płatności",
                  "pierwsze uruchomienie i konfigurację konta Cookidoo",
                  "sprawdzone przepisy na start i kontakt, gdy coś nie wyjdzie",
                  "wsparcie przy zgłoszeniu serwisowym, gdyby było potrzebne",
                ]}
              />
            </div>
            <Prose className="mt-6">
              <p>
                Cena urządzenia jest taka sama w całej Polsce — ustala ją Vorwerk. U przedstawiciela
                nie zapłacisz więcej niż gdzie indziej, a dostajesz opiekę po zakupie w cenie.
                Szczegóły dotyczące samego finansowania opisałam w{" "}
                <Link
                  href="/finansowanie"
                  className="font-medium text-brand-700 underline underline-offset-4"
                >
                  kalkulatorze rat
                </Link>
                .
              </p>
            </Prose>
          </div>
          <FactsTable
            title="Zakup w skrócie"
            rows={[
              { label: "Gdzie kupisz", value: "wyłącznie u oficjalnego przedstawiciela Vorwerk" },
              {
                label: "Cena TM7",
                value: formatPln(oferta?.priceCents) ?? "sprawdź na stronie oferty",
              },
              { label: "Płatność", value: "gotówka, przelew, karta, BLIK lub raty 0%" },
              { label: "Wkład własny", value: "niewymagany" },
              { label: "Dostawa", value: "kurierem, zwykle kilka dni roboczych" },
              { label: "Gwarancja", value: "producenta Vorwerk" },
              { label: "Po zakupie", value: "uruchomienie, Cookidoo, przepisy na start" },
            ]}
            footnote="Aktualną cenę i promocje potwierdzam przed złożeniem zamówienia — zmieniają się w cyklach miesięcznych."
          />
        </div>
      </Section>

      <FaqSection items={FAQ} title="Zakup — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Zacznijmy od rozmowy"
        text="Zadzwoń albo napisz — powiem wprost, ile to kosztuje dziś i czy warto poczekać na kolejną promocję."
      />
    </>
  );
}
