import Link from "next/link";
import type { LocationResolution } from "@/types/location";
import type { CityContent, CitySection } from "@/data/locations/city-content";
import { CITIES_WITH_CONTENT } from "@/data/locations/city-content";
import { miejscownik } from "@/data/locations/odmiana";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/marketing/content-blocks";
import { OfferCardsSection } from "@/components/marketing/offer-cards-section";
import { cn } from "@/lib/utils";
import { InstallmentCalculator } from "@/components/marketing/installment-calculator";
import { pobierzUstawieniaFinansowania } from "@/lib/database/repositories/financing-settings-repository";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { TestimonialsSection } from "./testimonials-section";
import { LeadForm } from "@/components/lead/lead-form";
import { TrackedPhoneLink } from "@/components/marketing/tracked-phone-link";
import { CheckCircleIcon } from "@/components/marketing/icons";
import { webPageSchema, personSchema } from "@/lib/seo/schema";
import { absoluteUrl, SITE } from "@/lib/utils";
import { TESTIMONIALS } from "@/data/testimonials";
import { getDistrictsForCity } from "@/data/locations/districts";

/**
 * Zamienia nazwę miejscowości na slug używany w adresach: „Nowy Wiśnicz”
 * → „nowy-wisnicz”. Polskie znaki rozkładamy przez NFD i wycinamy znaki
 * diakrytyczne; „ł” trzeba obsłużyć osobno, bo NFD go nie rozkłada.
 */
function naSlug(nazwa: string): string {
  return nazwa
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * „w Bochni”, a nie „w Bochnia”.
 *
 * `nameLocative` jest polem OPCJONALNYM i seed miast Małopolski
 * (`miastoAgi()` w data/locations/malopolska.ts) w ogóle go nie ustawia.
 * Dopóki wiersze wjeżdżały do bazy ręcznym SQL-em, formę miejscownikową
 * dopisywało się przy okazji i nikt tego nie zauważył. Od kiedy
 * repozytorium dosiewa nowe miasta samo, `nameLocative` bywa puste —
 * a `?? location.name` dawało wtedy „prezentację Thermomixa w Rzezawa”.
 *
 * Dlatego fallbackiem jest tabela odmiany, dokładnie jak w
 * `lib/locations/content.ts`. Jeśli miasta nie ma i tam, zdanie
 * przełącza się na konstrukcję bez przyimka zamiast psuć gramatykę.
 */
function wMiejscu(location: LocationResolution["location"]): string {
  const forma = location.nameLocative ?? miejscownik(location.slug);
  return forma ? `w ${forma}` : `na terenie: ${location.name}`;
}

/**
 * Lokalny hub miasta. Renderuje się TYLKO dla lokalizacji, która ma ręcznie
 * napisaną treść w data/locations/city-content.ts — reszta miast dostaje
 * generyczny LocationPageTemplate i zostaje noindex.
 *
 * WERSJA 2 (sierpień 2026) — przebudowa pod brief Agi. Kolejność sekcji jest
 * podporządkowana intencji wyszukiwania, nie encyklopedii: kto tu trafia
 * z frazy „thermomix kraków”, chce wiedzieć (1) czy da się zobaczyć na żywo,
 * (2) ile to kosztuje, (3) czy na raty, (4) czy dojedzie do niego. Dlatego
 * oferta i kalkulator idą wysoko, a długie teksty i FAQ — niżej, gdzie
 * pracują na SEO, nie blokując konwersji.
 *
 * Czego ta strona ma, a czego nie ma konkurencja (thermoprzedstawiciel.pl,
 * sprawdzone 2026-08-25):
 * — ŻYWA oferta z panelu: Aga zmienia cenę w /admin/oferta i strona miasta
 *   zmienia się sama. U konkurencji cena jest wpisana w tekst na sztywno.
 * — KALKULATOR RAT zasilany tą samą ceną — konkurencja nie ma żadnego.
 * — FORMULARZ z `cityLabel` — konkurencja podaje tylko telefon.
 * — 20 dzielnic Krakowa zamiast mieszania w jednym tekście Krakowa
 *   z Katowicami, Warszawą i Wrocławiem (to rozmywa trafność lokalną).
 * — sekcja kosztowa i kulinarna: treść, po którą ktoś wraca, a nie ściana
 *   fraz kluczowych.
 *
 * JSON-LD: WebPage + BreadcrumbList + Person (Aga — bo blok „Kto poprowadzi
 * Twoją prezentację” jest FAKTYCZNIE na stronie) + FAQPage. Celowo NIE
 * dodajemy LocalBusiness ani Product: LocalBusiness wymaga adresu i godzin
 * otwarcia, których Aga nie podaje, a Product — ceny wpisanej w schemat,
 * podczas gdy nasza cena jest dynamiczna i pochodzi z panelu. Schemat bez
 * pokrycia w treści to prosta droga do ręcznej kary.
 */
export async function CityLandingTemplate({
  resolution,
  content,
}: {
  resolution: LocationResolution;
  content: CityContent;
}) {
  const { location, breadcrumbs } = resolution;

  // Kalkulator renderujemy tutaj, a nie przez InstallmentCalculatorSection:
  // ten komponent ma własną <Section>, więc nagłówek i kalkulator wypadały
  // w dwóch osobnych sekcjach i rozjeżdżały się o dwa pełne paddingi.
  const offer = await getOffersRepository().getActiveOffer();
  const calculatorPriceZl = offer?.priceCents
    ? Math.round(offer.priceCents / 100)
    : null;
  const finansowanie = await pobierzUstawieniaFinansowania();

  // Dzielnice z własną podstroną — po to, żeby lista dzielnic niżej była
  // realnym linkowaniem w dół, a nie samą wyliczanką nazw.
  const districtPages = getDistrictsForCity(content.slug);

  const section = (id: string) => content.sections.find((s) => s.id === id);

  /**
   * Sama TREŚĆ sekcji, bez ramki <Section>. Wydzielona, żeby dało się wstawić
   * dwie sekcje obok siebie w jednym pasie tła (patrz ProseSectionPair) —
   * inaczej każda ciągnęłaby własne tło i własny pionowy padding.
   */
  function SectionBody({ data }: { data: CitySection }) {
    return (
      <>
        <Heading as="h2" size="md" className="max-w-2xl">
          {data.heading}
        </Heading>
        <div className="mt-4 flex max-w-2xl flex-col gap-4">
          {data.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {data.bullets && data.bullets.length > 0 && (
          <ul className="mt-6 flex max-w-2xl flex-col gap-2.5">
            {data.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 text-sm text-neutral-700"
              >
                <CheckCircleIcon
                  width={16}
                  height={16}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {data.links && data.links.length > 0 && (
          <p className="mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-sm">
            {data.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                {link.label} →
              </Link>
            ))}
          </p>
        )}
      </>
    );
  }

  /** Jeden wzorzec dla wszystkich sekcji tekstowych — H2, akapity, punkty, linki. */
  function ProseSection({
    data,
    tone,
  }: {
    data: CitySection | undefined;
    tone?: "surface";
  }) {
    if (!data) return null;
    // Sekcja ze zdjęciem układa się w dwie kolumny na desktopie; bez zdjęcia
    // zostaje dokładnie tak, jak była — jedna kolumna ograniczona do max-w-2xl.
    const body = <SectionBody data={data} />;

    return (
      <Section id={data.id} tone={tone} className="scroll-mt-28">
        {data.photo ? (
          <div
            className={cn(
              "grid gap-8 lg:items-start lg:gap-12",
              data.photoSide === "left"
                ? "lg:grid-cols-[0.85fr_1.15fr]"
                : "lg:grid-cols-[1.15fr_0.85fr]",
            )}
          >
            {/* Kolejność w DOM zawsze: tekst, potem zdjęcie — czytnik ekranu
                i Google dostają nagłówek przed obrazkiem. To, co widać, ustawia
                `order-*`, i przy photoSide="left" działa na KAŻDEJ szerokości,
                nie tylko od `lg:`. Wcześniej było `lg:order-*`, więc na telefonie
                zdjęcie lądowało pod tekstem — a przy sekcji o funkcjach TM7 to
                znaczyło, że czytasz o urządzeniu, którego jeszcze nie widziałaś
                (Aga: „na telefonie przed tym punktem daj zdjęcie thermomixa, nie
                pod tym”). Sekcje z photoSide="right" zostają bez zmian: tam
                zdjęcie i tak jest drugie w kolejności, więc na telefonie
                naturalnie ląduje pod tekstem. */}
            <div className={data.photoSide === "left" ? "order-2" : undefined}>
              {body}
            </div>
            <Photo
              src={data.photo.src}
              alt={data.photo.alt}
              caption={data.photo.caption}
              className={cn(
                "lg:sticky lg:top-28",
                data.photoSide === "left" && "order-1",
              )}
            />
          </div>
        ) : (
          body
        )}
      </Section>
    );
  }

  /**
   * Dwie krótkie sekcje obok siebie. Obie są czystym tekstem i każda z osobna
   * zajmowała pełną szerokość, zostawiając pół ekranu pustki — a jednocześnie
   * odpowiadają na dwa pytania, które padają razem: „po co mi to oglądać”
   * i „jak to umówić”. Na telefonie wracają jedna pod drugą.
   */
  function ProseSectionPair({
    left,
    right,
    tone,
  }: {
    left: CitySection | undefined;
    right: CitySection | undefined;
    tone?: "surface";
  }) {
    if (!left && !right) return null;
    if (!left || !right)
      return <ProseSection data={left ?? right} tone={tone} />;
    return (
      <Section tone={tone}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div id={left.id} className="scroll-mt-28">
            <SectionBody data={left} />
          </div>
          <div id={right.id} className="scroll-mt-28">
            <SectionBody data={right} />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={breadcrumbs.map((b) => ({ name: b.label, path: b.href }))}
        />
      </Section>

      {/* HERO */}
      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Thermomix {location.name}</Eyebrow>
            <Heading as="h1" size="xl" className="mt-3 max-w-2xl">
              {content.h1}
            </Heading>
            <Lead className="mt-5 max-w-xl">{content.lead}</Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="#umow" size="lg">
                Umów bezpłatną prezentację
              </ButtonLink>
              {/*
                Dwa skróty do sekcji, o które ludzie pytają najczęściej, zanim
                w ogóle zaczną czytać: „ile to kosztuje” i „ile wyjdzie rata”.
                Prowadzą w dół TEJ SAMEJ strony (kotwice), nie wyrzucają
                z niej — wyjście na /oferta na tym etapie zwykle kończy się
                tym, że człowiek nie wraca.
              */}
              <ButtonLink href="#oferta" size="lg" variant="outline">
                Aktualna oferta
              </ButtonLink>
              <ButtonLink href="#kalkulator-rat" size="lg" variant="outline">
                Kalkulator rat
              </ButtonLink>
              <TrackedPhoneLink
                placement="city-hero"
                label={`Aga: ${SITE.phone}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 text-[0.95rem] font-medium text-neutral-900 transition-colors hover:border-brand-500 hover:text-brand-700"
              />
            </div>
          </div>
          <Photo
            priority
            src={content.heroPhoto.src}
            alt={content.heroPhoto.alt}
            caption={content.heroPhoto.caption}
          />
        </div>

        <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-neutral-0 p-4"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-neutral-800">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <ProseSection data={section("prezentacja")} tone="surface" />
      <ProseSectionPair
        left={section("na-zywo")}
        right={section("jak-umowic")}
      />
      <ProseSection data={section("tm7")} />

      {/* ŻYWA OFERTA — jedno źródło prawdy: /admin/oferta */}
      <div id="oferta" className="scroll-mt-28">
        <OfferCardsSection />
      </div>
      <ProseSectionPair left={section("cena")} right={section("raty")} />

      {/* KALKULATOR — ta sama cena co w ofercie wyżej */}
      {calculatorPriceZl && (
        <Section id="kalkulator-rat" tone="surface" className="scroll-mt-28">
          <Heading as="h2" size="md">
            Kalkulator rat — ile wyjdzie miesięcznie
          </Heading>
          <Lead className="mt-3 mb-7 max-w-2xl">
            Policz sama, zanim zadzwonisz. Kalkulator startuje z aktualnej ceny
            z oferty powyżej — zmień okres spłaty albo wkład własny i zobacz,
            jak zmienia się rata.
          </Lead>
          <InstallmentCalculator
            initialPriceZl={calculatorPriceZl}
            ratyZeroDostepne={finansowanie.ratyZeroDostepne}
            ratyZeroKomunikat={finansowanie.ratyZeroKomunikat}
          />
        </Section>
      )}

      <ProseSection data={section("rodzina")} tone="surface" />

      {/*
        Sekcje istniejace dzis tylko na stronie Krakowa: warunki lokalowe
        (kamienica bez windy, obwod kuchenny, miejsce na blacie) i gotowanie
        dla jednej-dwoch osob. Oba `section()` zwracaja undefined dla
        pozostalych miast, a ProseSectionPair renderuje wtedy null - wiec
        ten blok nie zmienia zadnej innej strony.
      */}
      <ProseSectionPair
        left={section("krakowskie-mieszkanie")}
        right={section("jedna-osoba")}
      />

      <ProseSectionPair
        left={section("co-ugotujesz")}
        right={section("tradycyjne-gotowanie")}
        tone="surface"
      />

      {/* KOSZTY: dom vs miasto — tylko tam, gdzie ten wybór realnie istnieje */}
      {content.costs && (
        <Section id="koszty" className="scroll-mt-28">
          <Heading as="h2" size="md" className="max-w-2xl">
            {content.costs.heading}
          </Heading>
          <div className="mt-4 flex max-w-2xl flex-col gap-4">
            {content.costs.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 font-semibold text-neutral-900">
                    Co liczymy
                  </th>
                  <th className="py-3 pr-4 font-semibold text-brand-700">
                    W domu
                  </th>
                  <th className="py-3 font-semibold text-neutral-700">
                    Na mieście
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.costs.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border/70 align-top"
                  >
                    <td className="py-3 pr-4 text-neutral-800">{row.label}</td>
                    <td className="py-3 pr-4 text-muted">{row.home}</td>
                    <td className="py-3 text-muted">{row.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-2xl text-sm text-muted">
            {content.costs.note}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {content.costs.closing}
          </p>
        </Section>
      )}

      {/* MIASTO I GOTOWANIE — tylko tam, gdzie jest o czym pisać prawdziwie */}
      {content.culinary && (
        <Section tone="surface">
          <Heading as="h2" size="md" className="max-w-2xl">
            {content.culinary.heading}
          </Heading>
          <div className="mt-4 flex max-w-2xl flex-col gap-4">
            {content.culinary.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Section>
      )}

      {/* DZIELNICE */}
      <Section id="dzielnice" className="scroll-mt-28">
        <Heading as="h2" size="md" className="max-w-2xl">
          {content.districtsHeading}
        </Heading>
        <div className="mt-4 flex max-w-2xl flex-col gap-4">
          {content.districtsParagraphs.map((p) => (
            <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {content.districts.map((district) => {
            // Dzielnica, która ma własną stronę, staje się linkiem. Reszta
            // zostaje zwykłym tekstem — nie tworzymy pustych linków tylko po
            // to, żeby lista wyglądała jednolicie.
            //
            // Dopasowanie po nazwie, a jesli nie trafi - po aliasach, a na
            // koncu po liscie osiedli. Nazwy nie zawsze sa identyczne: strona
            // "Debniki i Ruczaj" obsluguje pozycje "Debniki" ORAZ "Ruczaj"
            // z listy obok. "Ruczaj" lapie sie przez osiedla, "Debniki" - nie
            // (w osiedlach stoi "Stare Debniki"), wiec potrzebne sa aliasy.
            const page =
              districtPages.find((d) => d.nazwa === district) ??
              districtPages.find((d) => (d.aliasy ?? []).includes(district)) ??
              districtPages.find((d) => d.osiedla.includes(district));
            return (
              <li
                key={district}
                className="flex items-start gap-2 text-sm text-neutral-700"
              >
                <CheckCircleIcon
                  width={15}
                  height={15}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                {page ? (
                  <Link
                    href={page.urlPath}
                    className="underline decoration-neutral-300 underline-offset-4 hover:text-brand-700"
                  >
                    {district}
                  </Link>
                ) : (
                  district
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* OBSZAR DZIAŁANIA */}
      <Section tone="surface">
        <Heading as="h2" size="md" className="max-w-2xl">
          {content.nearbyHeading}
        </Heading>
        <div className="mt-4 flex max-w-2xl flex-col gap-4">
          {content.nearbyParagraphs.map((p) => (
            <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        {/*
          Miejscowość, która ma u nas własną, ręcznie napisaną stronę, staje się
          linkiem. Reszta zostaje zwykłym tekstem — nie prowadzimy ludzi na
          generyczny szablon, a Google nie dostaje linku do strony noindex.

          To jest realne linkowanie wewnętrzne między stronami miast: Bochnia
          linkuje do Wieliczki i Niepołomic, Brzesko do Bochni i tak dalej.
          Wcześniej wszystkie te nazwy były martwym tekstem, więc szesnaście
          stron lokalnych nie przekazywało sobie nic.
        */}
        <ul className="mt-7 flex flex-wrap gap-2">
          {content.nearbyTowns.map((town) => {
            const slug = naSlug(town);
            const maStrone =
              slug !== content.slug && CITIES_WITH_CONTENT.includes(slug);
            const klasa =
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors " +
              (maStrone
                ? "border-neutral-300 bg-neutral-0 text-brand-700 hover:border-brand-500 hover:text-brand-800"
                : "border-neutral-300 bg-neutral-0 text-neutral-700");
            return (
              <li key={town}>
                {maStrone ? (
                  <Link
                    href={`/thermomix/${slug}`}
                    className={`${klasa} inline-block`}
                  >
                    Thermomix {town}
                  </Link>
                ) : (
                  <span className={`${klasa} inline-block`}>{town}</span>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Pełną listę miejscowości znajdziesz na stronie{" "}
          <Link
            href="/miasta"
            className="font-medium text-brand-700 underline underline-offset-4"
          >
            gdzie dojeżdżam
          </Link>
          .
        </p>
      </Section>

      {/* E-E-A-T: kto to prowadzi */}
      <Section id="o-mnie" className="scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Photo
            src={content.about.photo.src}
            alt={content.about.photo.alt}
            caption={content.about.photo.caption}
          />
          <div>
            <Heading as="h2" size="md">
              {content.about.heading}
            </Heading>
            <div className="mt-4 flex flex-col gap-4">
              {content.about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-6 flex flex-col gap-2.5">
              {content.about.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-sm text-neutral-700"
                >
                  <CheckCircleIcon
                    width={16}
                    height={16}
                    className="mt-0.5 shrink-0 text-brand-600"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/o-mnie"
                className="font-medium text-brand-700 underline underline-offset-4"
              >
                Więcej o mnie →
              </Link>
              <Link
                href="/opinie"
                className="font-medium text-brand-700 underline underline-offset-4"
              >
                Opinie klientów →
              </Link>
              <Link
                href="/kontakt"
                className="font-medium text-brand-700 underline underline-offset-4"
              >
                Kontakt →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/*
        Opinie: prawdziwe recenzje Google Agi (data/testimonials.ts), BEZ
        przypisywania ich do miasta. Google nie podaje miasta autora, więc
        nagłówek mówi po prostu „Opinie klientów” — dopisanie „z Krakowa”
        byłoby zmyśleniem, a to jedyna rzecz, której na stronie lokalnej
        robić nie wolno.
      */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* LINKOWANIE WEWNĘTRZNE */}
      <Section tone="surface">
        <Heading as="h2" size="md">
          Zanim się zdecydujesz
        </Heading>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/thermomix/tm7",
              title: "Thermomix TM7",
              text: "Co potrafi aktualny model i dla kogo ma sens.",
            },
            {
              href: "/thermomix/tm7-vs-tm6",
              title: "TM7 czy TM6",
              text: "Porównanie cecha po cesze, ze zdjęciem obu urządzeń.",
            },
            {
              href: "/akcesoria",
              title: "Akcesoria",
              text: "Co jest w zestawie, a co naprawdę warto dokupić.",
            },
            {
              href: "/blog",
              title: "Blog",
              text: "Przepisy, porady i odpowiedzi na pytania sprzed zakupu.",
            },
          ].map((item) => (
            <Card as="article" key={item.href}>
              <h3 className="text-base font-semibold text-neutral-900">
                <Link href={item.href} className="hover:text-brand-700">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection
        items={content.faq}
        title={`Thermomix ${location.name} — najczęściej zadawane pytania`}
      />

      {/* FORMULARZ */}
      <Section id="umow" tone="surface" className="scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Umów bezpłatną prezentację Thermomixa {wMiejscu(location)}
            </Heading>
            <Lead className="mt-4">
              Zostaw kontakt, a oddzwonię i ustalimy termin. Możesz też po
              prostu zadzwonić — zwykle to szybsze.
            </Lead>
            <p className="mt-6 text-sm text-muted">
              Wolisz porozmawiać od razu? Aga:{" "}
              <TrackedPhoneLink
                placement="city-form"
                label={SITE.phone}
                className="inline-flex items-center gap-1.5 font-medium text-brand-700 underline underline-offset-4"
              />
            </p>
          </div>
          <LeadForm source="city-page" cityLabel={location.name} />
        </div>
      </Section>

      <JsonLdScript
        data={[
          webPageSchema({
            path: location.urlPath,
            name: content.seoTitle,
            description: content.seoDescription,
          }),
          // BreadcrumbList NIE jest tu emitowany — robi to już
          // <Breadcrumbs> na górze strony (components/seo/breadcrumbs.tsx),
          // a dwa bloki BreadcrumbList na jednej stronie to nie „mocniejszy
          // sygnał”, tylko duplikat, który Google i tak zredukuje do jednego.
          // Ten sam powód dotyczy FAQPage: emituje go <FaqSection>.
          // Person zamiast LocalBusiness: mamy na stronie realny blok o Adze
          // (imię, rola, obszar, telefon), a nie mamy adresu ani godzin
          // otwarcia, których LocalBusiness oczekuje.
          {
            ...personSchema(),
            areaServed: [
              {
                "@type": "City",
                name: location.name,
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: content.geo.lat,
                  longitude: content.geo.lng,
                },
              },
              ...content.nearbyTowns.map((town) => ({
                "@type": "City",
                name: town,
              })),
            ],
            mainEntityOfPage: absoluteUrl(location.urlPath),
          },
        ].filter(Boolean)}
      />
    </>
  );
}
