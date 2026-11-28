import type { ReactNode } from "react";
import type { LeadSource } from "@/types/lead";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/marketing/content-blocks";
import { OfferCardsSection } from "@/components/marketing/offer-cards-section";
import { InstallmentCalculator } from "@/components/marketing/installment-calculator";
import { TrackedPhoneLink } from "@/components/marketing/tracked-phone-link";
import { LeadForm } from "@/components/lead/lead-form";
import { DietyZajawka } from "@/components/diets/diety-zajawka";
import { TestimonialsSection } from "./testimonials-section";
import { TESTIMONIALS } from "@/data/testimonials";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { pobierzUstawieniaFinansowania } from "@/lib/database/repositories/financing-settings-repository";
import { SITE } from "@/lib/utils";

const ZDJECIE_AGI = "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp";

/**
 * Wspólna górna część KAŻDEJ strony lokalnej — od okruszków do formularza
 * włącznie (28.11.2026, prośba Agi: „każda strona lokalna ma mieć taki układ
 * jak Tarnów”). Miasta z opisem, miasta bez opisu, województwa i dzielnice
 * używają tego samego komponentu, więc układ nie może się już rozjechać.
 *
 * Kolejność: zdjęcie Agi → nagłówek + krótki wstęp + przycisk → opinie →
 * oferta → kalkulator rat → plany żywieniowe → formularz. Własne teksty
 * strony idą dopiero pod tym blokiem.
 */
export async function LokalnaGora({
  okruszki,
  eyebrow,
  h1,
  gdzie,
  nazwa,
  miastoOpinii,
  zrodlo,
  etykietaFormularza,
  miejsce,
}: {
  okruszki: { name: string; path: string }[];
  eyebrow: string;
  h1: ReactNode;
  /** Np. „w Tarnowie”, „w Nowej Hucie” albo „TM7”, gdy nie ma formy miejscownika. */
  gdzie: string;
  /** Nazwa do opisu zdjęcia (alt). */
  nazwa: string;
  /** Opinie z tą miejscowością idą pierwsze. */
  miastoOpinii?: string;
  zrodlo: LeadSource;
  etykietaFormularza?: string;
  /** Prefiks do pomiaru kliknięć w telefon („city”, „district”, „location”). */
  miejsce: string;
}) {
  const offer = await getOffersRepository().getActiveOffer();
  const cenaZl = offer?.priceCents ? Math.round(offer.priceCents / 100) : null;
  const finansowanie = await pobierzUstawieniaFinansowania();
  const m = miastoOpinii?.toLowerCase();
  const opinie = m
    ? [
        ...TESTIMONIALS.filter((t) => t.authorCityLabel?.toLowerCase() === m),
        ...TESTIMONIALS.filter((t) => t.authorCityLabel?.toLowerCase() !== m),
      ]
    : TESTIMONIALS;

  return (
    <>
      <Section className="!pt-4 !pb-0">
        <Breadcrumbs items={okruszki} />
      </Section>

      <Section className="!pt-3 !pb-0 md:!pt-6 md:!pb-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="text-center lg:text-left">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading as="h1" size="xl" className="mx-auto mt-3 max-w-2xl lg:mx-0">
              {h1}
            </Heading>
            <Lead className="mx-auto mt-5 max-w-xl lg:mx-0">
              Od 2021 roku pomagam wybrać i kupić Thermomix {gdzie}. Ponad 500 prezentacji i opieka po
              zakupie. Zamów już dziś.
            </Lead>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <ButtonLink href="#umow" size="lg">
                Umów bezpłatną prezentację
              </ButtonLink>
              <TrackedPhoneLink
                placement={`${miejsce}-hero`}
                label={`Aga: ${SITE.phone}`}
                className="hidden md:inline-flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 text-[0.95rem] font-medium text-neutral-900 transition-colors hover:border-brand-500 hover:text-brand-700"
              />
            </div>
          </div>
          <Photo
            priority
            className="order-first mx-auto w-full max-w-sm lg:order-none lg:max-w-none"
            src={ZDJECIE_AGI}
            alt={`Aga Horche — przedstawiciel Thermomix ${nazwa}, z Thermomixem TM7`}
          />
        </div>
      </Section>

      <TestimonialsSection kompakt items={opinie} />

      {/* ŻYWA OFERTA — jedno źródło prawdy: /admin/oferta */}
      <div id="oferta" className="scroll-mt-28">
        <OfferCardsSection />
      </div>

      {cenaZl && (
        <Section id="kalkulator-rat" tone="surface" className="scroll-mt-28">
          <InstallmentCalculator
            initialPriceZl={cenaZl}
            ratyZeroDostepne={finansowanie.ratyZeroDostepne}
            ratyZeroKomunikat={finansowanie.ratyZeroKomunikat}
          />
        </Section>
      )}

      <DietyZajawka />

      <Section id="umow" className="scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Heading as="h2" size="md">
              Masz pytania? Napisz do mnie!
            </Heading>
            <p className="mt-6 hidden text-sm text-muted lg:block">
              Wolisz porozmawiać od razu? Aga:{" "}
              <TrackedPhoneLink
                placement={`${miejsce}-form`}
                label={SITE.phone}
                className="inline-flex items-center gap-1.5 font-medium text-brand-700 underline underline-offset-4"
              />
            </p>
          </div>
          <LeadForm source={zrodlo} cityLabel={etykietaFormularza} />
        </div>
      </Section>
    </>
  );
}
