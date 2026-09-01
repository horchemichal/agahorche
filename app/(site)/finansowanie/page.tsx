import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { InstallmentCalculator } from "@/components/marketing/installment-calculator";
import {
  FactsTable,
  CheckList,
  StepsRow,
  Prose,
  CtaBand,
  LocalBand,
} from "@/components/marketing/content-blocks";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { formatPln } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix na raty 0,6% — kalkulator rat",
  description:
    "Policz ratę Thermomixa TM7 w kalkulatorze: raty 0,6% miesięcznie, do 36 rat. Formalności załatwiamy podczas prezentacji w Małopolsce.",
  path: "/finansowanie",
  keywords: ["thermomix raty 0", "thermomix na raty", "kalkulator rat thermomix", "thermomix tm7 raty"],
});

const FAQ = [
  {
    question: "Ile kosztuje rozłożenie zakupu na raty?",
    answer:
      "Oprocentowanie wynosi 0,6% miesięcznie, więc rozłożenie zakupu na raty kosztuje więcej niż zapłata z góry — kalkulator powyżej pokazuje zarówno miesięczną ratę, jak i łączną kwotę do spłaty. RRSO i pozostałe warunki podaje instytucja finansująca przy podpisaniu umowy.",
  },
  {
    question: "Czy muszę mieć wkład własny?",
    answer:
      "Nie. Wkład własny nie jest wymagany — możesz go wpłacić, żeby obniżyć miesięczną ratę, ale nie musisz.",
  },
  {
    question: "Na ile rat mogę rozłożyć zakup?",
    answer:
      "Przy promocji ratalnej najczęściej do 36 miesięcy. Dostępne warianty widzisz w kalkulatorze powyżej i potwierdzam je przy zamówieniu.",
  },
  {
    question: "Ile trwa decyzja?",
    answer:
      "Wniosek składamy podczas spotkania, a decyzja zwykle jest tego samego dnia. Potrzebny jest dowód osobisty i podstawowe dane o dochodzie.",
  },
  {
    question: "Czy mogę zapłacić inaczej niż ratami?",
    answer:
      "Tak — gotówką, przelewem, kartą lub BLIK-iem. Raty są opcją, nie warunkiem zakupu.",
  },
  {
    question: "Czy rata z kalkulatora jest wiążąca?",
    answer:
      "Kalkulator ma charakter orientacyjny — pokazuje wyliczenie na podstawie aktualnej ceny i wybranego wariantu. Ostateczne warunki zależą od oferty obowiązującej w dniu zakupu i decyzji instytucji finansującej.",
  },
];

export default async function FinansowaniePage() {
  const oferta = await getOffersRepository().getActiveOffer();
  const cena = oferta?.priceCents ? Math.round(oferta.priceCents / 100) : null;

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Raty i finansowanie", path: "/finansowanie" }]} />
      </Section>

      <Section className="pt-6">
        <Badge>Raty 0,6%</Badge>
        <Heading as="h1" size="xl" className="mt-4 max-w-2xl">
          Thermomix na raty — policz swoją ratę
        </Heading>
        <Lead className="mt-5 max-w-2xl">
          Bez wypełniania formularza i bez podawania danych. Ustaw cenę, wpłatę własną i liczbę rat, a
          zobaczysz kwotę, którą realnie zapłacisz co miesiąc.
        </Lead>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/prezentacja">Umów prezentację</ButtonLink>
          <ButtonLink href="/oferta" variant="secondary">
            Zobacz aktualną ofertę
          </ButtonLink>
        </div>
      </Section>

      {cena ? (
        <Section id="kalkulator-rat" className="scroll-mt-28 pt-0">
          <InstallmentCalculator initialPriceZl={cena} />
        </Section>
      ) : null}

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Co warto wiedzieć przed decyzją
            </Heading>
            <div className="mt-6">
              <CheckList
                items={[
                  "Wkład własny nie jest wymagany — wpłacasz go tylko, jeśli chcesz obniżyć ratę.",
                  "Cena urządzenia jest taka sama w całej Polsce, ustala ją Vorwerk.",
                  "Promocje (w tym raty 0,6%) dostępne są wyłącznie przy zakupie u przedstawiciela.",
                  "Formalności załatwiamy na miejscu, podczas spotkania — nie musisz nigdzie jechać.",
                  "Możesz też zapłacić gotówką, przelewem, kartą lub BLIK-iem.",
                ]}
              />
            </div>
            <Prose className="mt-6">
              <p>
                Jeśli wolisz policzyć wszystko na spokojnie, zadzwoń albo napisz — przejdę z Tobą
                przez warianty i powiem wprost, który wychodzi najkorzystniej przy Twoim budżecie.
                Bez naciskania na decyzję tego samego dnia.
              </p>
            </Prose>
          </div>
          <FactsTable
            title="Finansowanie w skrócie"
            rows={[
              {
                label: "Cena urządzenia",
                value: formatPln(oferta?.priceCents) ?? "sprawdź na stronie oferty",
              },
              { label: "Raty 0,6%", value: "0,6% miesięcznie, do 36 rat" },
              { label: "Wkład własny", value: "niewymagany" },
              { label: "Inne formy płatności", value: "gotówka, przelew, karta, BLIK" },
              { label: "Gdzie podpisujemy", value: "u Ciebie, po prezentacji" },
              { label: "Obszar", value: "Małopolska — Bochnia, Brzesko, Kraków, Wieliczka, Tarnów i okolice" },
            ]}
            footnote="Warunki finansowania zależą od aktualnej promocji Vorwerk i decyzji instytucji finansującej. Kalkulator służy do orientacyjnego wyliczenia raty."
          />
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Jak wygląda zakup na raty
        </Heading>
        <div className="mt-8">
          <StepsRow
            steps={[
              { title: "Prezentacja", text: "Poznajesz urządzenie i decydujesz bez pośpiechu." },
              { title: "Wybór wariantu", text: "Ustalamy liczbę rat i ewentualną wpłatę własną." },
              { title: "Wniosek", text: "Składamy go na miejscu — potrzebny dowód osobisty." },
              { title: "Dostawa", text: "Thermomix jedzie do Ciebie, a ja pomagam przy pierwszym uruchomieniu." },
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          Zastanawiasz się, czy w ogóle warto?{" "}
          <Link href="/thermomix/wady-i-zalety" className="font-medium text-brand-700 underline underline-offset-4">
            Zobacz szczerą listę wad i zalet Thermomixa
          </Link>
          .
        </p>
      </Section>

      <FaqSection items={FAQ} title="Raty i płatności — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Policzmy to razem"
        text="Zadzwoń albo umów prezentację — przejdziemy przez warianty rat i wybierzesz ten, który pasuje do Twojego budżetu."
      />
    </>
  );
}
