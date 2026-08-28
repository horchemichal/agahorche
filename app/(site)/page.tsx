import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { TrustBar } from "@/components/marketing/trust-bar";
import { OfferCardsSection } from "@/components/marketing/offer-cards-section";
import { SocialFollowSection } from "@/components/marketing/social-follow-section";
import { InstallmentCalculatorSection } from "@/components/marketing/installment-calculator-section";
import { PresentationBand } from "@/components/marketing/presentation-band";
import { TestimonialsCarousel } from "@/components/marketing/testimonials-carousel";
import { ServiceAreaSection } from "@/components/marketing/service-area-section";
import { ExploreLinksSection } from "@/components/marketing/explore-links";
import { FaqAccordionSection } from "@/components/marketing/faq-accordion-section";
import { ContactBand } from "@/components/marketing/contact-band";
import { JsonLdScript } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";
import { personSchema, serviceSchema } from "@/lib/seo/schema";
import { getGlobalFaq } from "@/lib/faq";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Aga Horche — Oficjalna Przedstawicielka Thermomix®",
  description:
    "Bezpłatne prezentacje Thermomix® TM7 z Agą Horche — u Ciebie w domu, w całej Polsce. Umów spotkanie i sprawdź, jak Thermomix może ułatwić gotowanie.",
  path: "/",
  ogType: "website",
});

/**
 * Homepage (spec §3 / full 1:1 replacement per mockup — user-confirmed).
 * Section order mirrors the approved screenshot exactly: Hero → trust bar →
 * offer grid → social follow module (Instagram reels + follow buttons,
 * inserted here per Aga's explicit placement request — see
 * social-follow-section.tsx) → installment calculator → presentation band →
 * sliding testimonials ("Dlaczego warto wybrać Agę?", replacing the
 * icon-based version per Aga's request — real Google reviews, see
 * data/testimonials.ts) → service area → FAQ accordion → dark contact band.
 * Sections that were on the previous homepage but aren't in the mockup
 * (value prop, TM7 teaser, audience, Aga Club teaser) stay live on their
 * own pages (/thermomix/tm7, /aga-club, etc.) rather than being deleted.
 * The icon-based WhyChooseAgaSection component still exists
 * (components/marketing/why-choose-aga.tsx) if it's needed elsewhere later.
 */
export default async function HomePage() {
  const faq = await getGlobalFaq();

  return (
    <>
      <Hero />
      <TrustBar />
      <OfferCardsSection />
      <SocialFollowSection />
      <InstallmentCalculatorSection />
      <PresentationBand />
      <TestimonialsCarousel items={TESTIMONIALS} />
      <ServiceAreaSection />
      {/*
        Rozdroże linków do podstron tematycznych — dodane nisko na stronie,
        żeby nie ruszać zatwierdzonej góry (hero → oferta → kalkulator).
        Bez tego bloku strony /thermomix/funkcje, /thermomix/tm6,
        /jak-kupic-thermomix i trzy strony „dla kogo” nie miały ani jednego
        linku ze strony głównej.
      */}
      <ExploreLinksSection />
      <FaqAccordionSection items={faq} />
      <ContactBand />

      <JsonLdScript
        data={[
          personSchema(),
          serviceSchema({
            path: "/",
            name: "Bezpłatna prezentacja Thermomix",
            description: "Prezentacja Thermomix TM7 prowadzona przez Agnieszkę Horche, stacjonarnie u Ciebie w domu.",
          }),
        ]}
      />
    </>
  );
}
