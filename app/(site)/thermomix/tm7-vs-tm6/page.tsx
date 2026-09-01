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
  CompareTable,
  CheckList,
  FactsTable,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { formatPln } from "@/lib/format";
import { RATY_ZERO_DOSTEPNE } from "@/data/finansowanie/dostepnosc";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix TM7 vs TM6 — porównanie modeli",
  description:
    "Czym różni się Thermomix TM7 od TM6: ekran, Varoma, otwarte gotowanie, głośność, przepisy. Zdjęcie obu modeli obok siebie i szczera odpowiedź, kiedy przesiadka ma sens.",
  path: "/thermomix/tm7-vs-tm6",
  keywords: ["thermomix tm7 vs tm6", "różnice tm6 tm7", "czy warto zmienić tm6 na tm7"],
  ogImage: "/zdjecia/thermomix-tm7-vs-tm6.webp",
});

const FAQ = [
  {
    question: "Czy warto zmieniać TM6 na TM7?",
    answer:
      "Jeśli TM6 działa i wystarcza Ci na co dzień — nie ma przymusu. Przesiadka ma sens, gdy dużo gotujesz na parze (większa Varoma), często pilnujesz garnka i brakuje Ci otwartego gotowania albo męczy Cię mniejszy ekran przy przepisach krok po kroku. Najuczciwiej sprawdzić to na żywo: pokazuję oba modele podczas prezentacji.",
  },
  {
    question: "Czy moje przepisy z Cookidoo będą działać na TM7?",
    answer:
      "Tak. Cookidoo jest wspólne dla modeli, a przepisy przygotowane dla TM6 uruchamiają się na TM7 — nie tracisz swojej kolekcji ani list zakupów.",
  },
  {
    question: "Czy akcesoria z TM6 pasują do TM7?",
    answer:
      "Część akcesoriów jest wspólna (m.in. nakładka krojąca 2.0 i osłona noża 2.0 opisywane przez Vorwerk jako pasujące do TM5, TM6 i TM7), ale naczynie miksujące i Varoma to elementy dopasowane do konkretnego modelu. Kompatybilność konkretnego akcesorium potwierdzam przed zakupem — nie zgaduję.",
  },
  {
    question: "Czy TM6 nadal można kupić?",
    answer:
      "W oficjalnej ofercie Vorwerk aktualnym modelem jest TM7 i to on jest w regularnej sprzedaży. TM6 spotkasz dziś głównie z drugiej ręki — wtedy nie obejmuje go gwarancja producenta ani promocje przedstawiciela.",
  },
  {
    question: "Ile kosztuje TM7 i czy da się na raty?",
    answer:
      "Aktualną cenę i dostępne raty pokazuję na stronie oferty — zmieniają się razem z promocjami Vorwerk. Raty 0% wracają okresowo; aktualny stan zawsze jest podany na stronie o finansowaniu.",
  },
];

export default async function Tm7VsTm6Page() {
  const oferta = await getOffersRepository().getActiveOffer();

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "TM7 vs TM6", path: "/thermomix/tm7-vs-tm6" },
          ]}
        />
      </Section>

      {/* HERO — własne zdjęcie obu modeli obok siebie. Tego zdjęcia nie ma
          żadna konkurencyjna strona; to jest tu główny wyróżnik. */}
      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge>Porównanie modeli</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Thermomix TM7 vs TM6
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Oba urządzenia stoją u mnie obok siebie, więc porównanie poniżej nie jest przepisane z
              folderu — to różnice, które widać w praktyce podczas gotowania.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Zobacz oba modele na żywo</ButtonLink>
              <ButtonLink href="/oferta" variant="secondary">
                Aktualna cena TM7
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/thermomix-tm7-vs-tm6.webp"
            alt="Thermomix TM7 w czarnej obudowie obok białego Thermomixa TM6, oba z Varomą na naczyniu"
            caption="Po lewej TM7, po prawej TM6 — zdjęcie z mojej kuchni, nie z materiałów prasowych."
          />
        </div>
      </Section>

      {/* TABELA RÓŻNIC */}
      <Section tone="surface">
        <Heading as="h2" size="md">
          Różnice cecha po cesze
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Najkrótsza odpowiedź: TM7 to ten sam sposób gotowania co w TM6, tylko wygodniejszy w
          obsłudze i pojemniejszy tam, gdzie to widać na co dzień.
        </Lead>
        <div className="mt-8">
          <CompareTable
            headers={["Cecha", "Thermomix TM7", "Thermomix TM6"]}
            rows={[
              {
                feature: "Obudowa",
                a: "Czarna, matowa",
                b: "Biała",
              },
              {
                feature: "Sterowanie",
                a: "Duży ekran dotykowy, bez pokrętła",
                b: "Mniejszy ekran + fizyczne pokrętło",
              },
              {
                feature: "Przepisy krok po kroku",
                a: "Więcej widocznych kroków bez przewijania",
                b: "Ten sam Cookidoo, mniej treści na ekranie",
              },
              {
                feature: "Varoma",
                a: "Większa — więcej miejsca na gotowanie na parze",
                b: "Mniejsza",
              },
              {
                feature: "Naczynie miksujące",
                a: "Z zewnętrzną izolacją",
                b: "Bez zewnętrznej izolacji",
              },
              {
                feature: "Otwarte gotowanie",
                a: "Tak — możesz gotować i doprawiać jak w garnku",
                b: "Nie",
              },
              {
                feature: "Głośność pracy",
                a: "Cichszy",
                b: "Głośniejszy",
              },
              {
                feature: "Przepisy z Cookidoo",
                a: "Działają, także te przygotowane dla TM6",
                b: "Działają",
              },
              {
                feature: "Dostępność",
                a: "Aktualny model w sprzedaży u przedstawiciela",
                b: "Poza regularną ofertą, głównie rynek wtórny",
              },
            ]}
          />
        </div>
      </Section>

      {/* DLA KOGO KTÓRY */}
      <Section>
        {/*
          Sierpień 2026: kolumna „Zostań przy TM6, jeśli…” usunięta na prośbę Agi
          — strona ma prowadzić do TM7, nie utwierdzać w poprzednim modelu.
          Tabela różnic wyżej nadal podaje obie kolumny, więc czytelnik ma
          komplet faktów; zmienia się rekomendacja, nie dane.
        */}
        <Heading as="h2" size="md">
          Kiedy przesiadka na TM7 ma sens
        </Heading>
        <Lead className="mt-3 max-w-2xl">
          Nie każdemu TM7 zmieni gotowanie tak samo. Poniżej sytuacje, w których różnicę widać
          od pierwszego dnia.
        </Lead>
        <div className="mt-8">
          <CheckList
            columns={2}
            items={[
              "gotujesz na parze dla całej rodziny i brakuje Ci miejsca w Varomie",
              "lubisz mieć kontrolę nad potrawą — doprawiać, próbować, odparować sos",
              "czytasz przepisy z ekranu i męczy Cię przewijanie na małym wyświetlaczu",
              "gotujesz wieczorem, gdy dzieci już śpią i zależy Ci na cichszej pracy",
              "kupujesz pierwsze urządzenie i chcesz najnowszy model z pełną gwarancją",
              "Twój obecny sprzęt ma już swoje lata i myślisz o wymianie",
            ]}
          />
        </div>
        <Prose className="mt-8">
          <p>
            Mówię to samo klientom w Bochni, Krakowie i Tarnowie: różnicy między modelami nie widać
            w tabelce, tylko przy obiedzie. Otwarte gotowanie, większa Varoma i ekran, na którym
            mieści się cały przepis, to rzeczy, z których korzysta się codziennie — i po tygodniu
            trudno z nich zrezygnować. Najprościej po prostu zobaczyć TM7 w działaniu: przywożę go
            do Ciebie i gotujemy razem, bez zobowiązań.
          </p>
        </Prose>
      </Section>

      {/* FAKTY */}
      <Section tone="surface">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Fakty w skrócie
            </Heading>
            <Lead className="mt-3">
              Dane, o które pytacie najczęściej — aktualizowane razem z ofertą Vorwerk.
            </Lead>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Więcej o samym urządzeniu znajdziesz na stronie{" "}
              <Link href="/thermomix/tm7" className="font-medium text-brand-700 underline underline-offset-4">
                Thermomix TM7
              </Link>
              , a o kosztach — w{" "}
              <Link href="/finansowanie" className="font-medium text-brand-700 underline underline-offset-4">
                kalkulatorze rat 0%
              </Link>
              .
            </p>
          </div>
          <FactsTable
            title="Thermomix TM7 — stan na dziś"
            rows={[
              { label: "Aktualny model", value: "Thermomix® TM7" },
              {
                label: "Cena urządzenia",
                value: formatPln(oferta?.priceCents) ?? "sprawdź na stronie oferty",
              },
              {
                label: "Raty",
                // Patrz komentarz w app/(site)/thermomix/tm7/page.tsx.
                value: RATY_ZERO_DOSTEPNE ? "0% — bez wymaganego wkładu własnego" : "0,6% miesięcznie (raty 0% wracają okresowo)",
              },
              { label: "Zakup", value: "wyłącznie u oficjalnego przedstawiciela Vorwerk" },
              { label: "Prezentacja", value: "bezpłatna i niezobowiązująca" },
              { label: "Obszar", value: "Małopolska i cała Polska po ustaleniu terminu" },
            ]}
            footnote="Ceny i promocje ustala Vorwerk i zmieniają się w cyklach miesięcznych — na tej stronie pokazuję zawsze aktualną ofertę, a szczegóły potwierdzam przed zamówieniem."
          />
        </div>
      </Section>

      <FaqSection items={FAQ} title="TM7 vs TM6 — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Zobacz różnicę na własne oczy"
        text="Na prezentacji pokazuję oba modele i gotujemy na tym, który Cię interesuje. Bez opłat, bez zobowiązań."
      />
    </>
  );
}
