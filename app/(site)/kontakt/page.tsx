import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead/lead-form";
import { FaqAccordionSection } from "@/components/marketing/faq-accordion-section";
import { PhoneIcon, MessengerIcon, MailIcon } from "@/components/marketing/icons";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt — umów prezentację Thermomixa w całej Polsce",
  description:
    "Telefon, SMS, Messenger albo formularz — odezwij się, jak Ci wygodnie. Bochnia, Małopolska i cała Polska, codziennie 7:00–22:00. Umówimy bezpłatną prezentację Thermomixa u Ciebie w kuchni.",
  path: "/kontakt",
});

const OBSZAR: { name: string; slug: string }[] = [
  { name: "Bochnia", slug: "bochnia" },
  { name: "Nowy Wiśnicz", slug: "nowy-wisnicz" },
  { name: "Rzezawa", slug: "rzezawa" },
  { name: "Łapanów", slug: "lapanow" },
  { name: "Trzciana", slug: "trzciana" },
  { name: "Żegocina", slug: "zegocina" },
  { name: "Lipnica Murowana", slug: "lipnica-murowana" },
  { name: "Drwinia", slug: "drwinia" },
  { name: "Kłaj", slug: "klaj" },
  { name: "Gdów", slug: "gdow" },
  { name: "Niepołomice", slug: "niepolomice" },
  { name: "Wieliczka", slug: "wieliczka" },
  { name: "Kraków", slug: "krakow" },
  { name: "Skawina", slug: "skawina" },
  { name: "Brzesko", slug: "brzesko" },
  { name: "Dębno", slug: "debno" },
  { name: "Borzęcin", slug: "borzecin" },
  { name: "Szczurowa", slug: "szczurowa" },
  { name: "Czchów", slug: "czchow" },
  { name: "Zakliczyn", slug: "zakliczyn" },
  { name: "Dobczyce", slug: "dobczyce" },
  { name: "Myślenice", slug: "myslenice" },
  { name: "Wiśniowa", slug: "wisniowa" },
  { name: "Proszowice", slug: "proszowice" },
  { name: "Tarnów", slug: "tarnow" },
  { name: "Dąbrowa Tarnowska", slug: "dabrowa-tarnowska" },
  { name: "Limanowa", slug: "limanowa" },
  { name: "Nowy Sącz", slug: "nowy-sacz" },
  { name: "Chrzanów", slug: "chrzanow" },
];

const KONTAKT_FAQ = [
  {
    question: "Ile kosztuje dojazd na prezentację?",
    answer:
      "Nic. Dojazd i prezentacja są bezpłatne — również wtedy, gdy po spotkaniu nie zdecydujesz się na zakup. Najczęściej jeżdżę w okolice Bochni, Brzeska, Krakowa, Wieliczki i Niepołomic, ale umawiam się w całej Małopolsce.",
  },
  {
    question: "Jak szybko odpowiadasz?",
    answer:
      "Zwykle tego samego dnia. Odbieram telefon i odpisuję codziennie między 7:00 a 22:00, także w soboty i niedziele.",
  },
  {
    question: "Wolę nie dzwonić. Da się inaczej?",
    answer:
      "Tak. Napisz SMS-a, wiadomość na Messengerze albo wypełnij formularz na tej stronie — odezwę się tą samą drogą, którą wybierzesz.",
  },
  {
    question: "Czy prezentacja musi być u mnie w domu?",
    answer:
      "Nie musi, choć najczęściej tak właśnie jest — gotujemy w Twojej kuchni i od razu widzisz, jak Thermomix wpisuje się w Twoje zwyczaje. Równie dobrze możemy spotkać się u kogoś z rodziny albo u znajomych.",
  },
  {
    question: "Czy mogę umówić prezentację dla kilku osób naraz?",
    answer:
      "Tak, to częsty wariant. Zbierz koleżanki albo rodzinę — gotujemy razem, a każdy może zadać swoje pytania. Daj tylko znać wcześniej, ile osób będzie, żebym przygotowała odpowiednio dużo składników.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />
      </Section>
      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Heading as="h1" size="lg">
              Kontakt
            </Heading>
            <Lead className="mt-4 max-w-md">
              Masz pytanie o Thermomixa albo chcesz od razu umówić prezentację? Napisz — Aga
              odpowie osobiście.
            </Lead>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 font-medium text-neutral-800 hover:text-brand-700">
                <PhoneIcon width={17} height={17} /> {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-2.5 text-neutral-700 hover:text-brand-700"
              >
                <MailIcon width={17} height={17} /> {SITE.email}
              </a>
              <a
                href={SITE.messengerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-700 hover:text-brand-700"
              >
                <MessengerIcon width={17} height={17} /> Napisz do Agi przez Messenger
              </a>
            </div>
          </div>
          <Card>
            <LeadForm source="other" />
          </Card>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md" className="mb-6">
          Dane kontaktowe i godziny
        </Heading>
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <p className="text-sm font-semibold text-neutral-900">Aga Horche</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Oficjalny Przedstawiciel Thermomix®
              <br />
              Bochnia, województwo małopolskie
            </p>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-neutral-900">Telefon i wiadomości</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              <a href={SITE.phoneHref} className="hover:text-brand-700">
                {SITE.phone}
              </a>
              <br />
              Telefon, SMS albo Messenger — jak wolisz.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-neutral-900">Godziny</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Codziennie 7:00–22:00, także w weekendy.
              <br />
              Zwykle odpowiadam tego samego dnia.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md" className="mb-4">
          Gdzie dojeżdżam na prezentacje
        </Heading>
        <p className="max-w-2xl text-neutral-700">
          Mieszkam w Bochni, więc najbliżej mam do okolicznych gmin — Rzezawy, Łapanowa,
          Trzciany, Żegociny, Lipnicy Murowanej, Drwini i Kłaja. Regularnie jeżdżę też do
          Krakowa, Wieliczki, Niepołomic, Brzeska i Tarnowa. Dojazd i prezentacja są bezpłatne.
            Wszystko o prezentacjach w samym mieście znajdziesz na stronie{" "}
            <Link href="/thermomix/bochnia" className="font-medium text-brand-700 underline underline-offset-4">
              przedstawiciel Thermomix Bochnia
            </Link>
            .
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {OBSZAR.map((m) => (
            <Link
              key={m.slug}
              href={`/thermomix/${m.slug}`}
              className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-100"
            >
              {m.name}
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-neutral-600">
          Nie ma tu Twojej miejscowości?{" "}
          <Link href="/miasta" className="font-medium text-brand-700 underline-offset-2 hover:underline">
            Zobacz pełną listę miejscowości
          </Link>{" "}
          albo po prostu napisz — umawiam się w całej Polsce.
        </p>
      </Section>

      <Section>
        <Heading as="h2" size="md" className="mb-6">
          Co się dzieje po tym, jak się odezwiesz
        </Heading>
        <ol className="grid gap-5 md:grid-cols-4">
          <li className="rounded-xl border border-border bg-neutral-0 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Krok 1</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Odzywam się i pytam o kilka rzeczy — ile osób gotuje, co najczęściej jecie,
              czego dziś brakuje Ci w kuchni.
            </p>
          </li>
          <li className="rounded-xl border border-border bg-neutral-0 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Krok 2</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Ustalamy termin, który Ci pasuje. Również wieczorem albo w weekend.
            </p>
          </li>
          <li className="rounded-xl border border-border bg-neutral-0 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Krok 3</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Przyjeżdżam z Thermomixem, gotujemy i próbujemy. Zwykle zajmuje to około dwóch
              godzin.
            </p>
          </li>
          <li className="rounded-xl border border-border bg-neutral-0 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Krok 4</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Jeśli chcesz, liczymy ratę i załatwiamy formalności. Jeśli nie — rozstajemy się
              bez żadnych zobowiązań.
            </p>
          </li>
        </ol>
      </Section>

      <FaqAccordionSection items={KONTAKT_FAQ} title="Pytania o kontakt i dojazd" />
    </>
  );
}
