import type { LocationResolution } from "@/types/location";
import { LocationHero } from "./location-hero";
import { NearbyLocations } from "./nearby-locations";
import { TestimonialsSection } from "./testimonials-section";
import { PresentationStepsSection, WhyLiveDemoSection } from "@/components/marketing/presentation-steps";
import { AudienceSection } from "@/components/marketing/audience-section";
import { Tm7Teaser } from "@/components/marketing/tm7-teaser";
import { AgaClubTeaser } from "@/components/marketing/aga-club-teaser";
import { FaqSection } from "@/components/seo/faq-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { JsonLdScript } from "@/components/seo/json-ld";
import { buildLocationIntro, buildLocationFaq } from "@/lib/locations/content";
import { serviceSchema, webPageSchema } from "@/lib/seo/schema";
import { TESTIMONIALS } from "@/data/testimonials";

/**
 * The full location page template (spec §8). One component renders every
 * /thermomix/[...slug] page — cities, voivodeships, and the deeper demo
 * hierarchy all share this shell. Per-location uniqueness comes entirely
 * from the data passed in (`resolution`), never from hand-authored per-page
 * JSX, which is what keeps this scalable to hundreds of locations without
 * hundreds of near-duplicate files.
 */
export function LocationPageTemplate({ resolution }: { resolution: LocationResolution }) {
  const { location, wojewodztwo, neighbors, breadcrumbs } = resolution;
  const intro = buildLocationIntro(resolution);
  const faq = buildLocationFaq(resolution);

  const relevantTestimonials = TESTIMONIALS.filter(
    (t) => t.authorCityLabel?.toLowerCase() === location.name.toLowerCase(),
  );

  return (
    <>
      <Section className="!py-0">
        <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.label, path: b.href }))} />
      </Section>

      <LocationHero location={location} intro={intro} />

      <Section tone="surface">
        <Heading as="h2" size="md" className="mb-4">
          Thermomix w {location.nameLocative ?? location.name}
        </Heading>
        <p className="max-w-2xl text-muted leading-relaxed">{intro}</p>
        {location.localFacts && location.localFacts.length > 0 && (
          <ul className="mt-4 flex flex-col gap-1.5 text-sm text-muted">
            {location.localFacts.map((fact) => (
              <li key={fact}>• {fact}</li>
            ))}
          </ul>
        )}
      </Section>

      <PresentationStepsSection />
      <WhyLiveDemoSection />
      <AudienceSection />
      <Tm7Teaser />
      <TestimonialsSection items={relevantTestimonials} />
      <AgaClubTeaser />
      <FaqSection items={faq} />
      <NearbyLocations wojewodztwo={wojewodztwo} neighbors={neighbors} />

      <Section>
        <div className="flex flex-col items-center gap-4 text-center">
          <Heading as="h2" size="md" align="center">
            Umów bezpłatną prezentację Thermomix w {location.nameLocative ?? location.name}
          </Heading>
          <ButtonLink href="/prezentacja" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>
      </Section>

      <JsonLdScript
        data={[
          webPageSchema({
            path: location.urlPath,
            name: `Thermomix ${location.name} – bezpłatna prezentacja z Agą`,
            description: intro,
          }),
          serviceSchema({
            path: location.urlPath,
            name: `Prezentacja Thermomix — ${location.name}`,
            description: intro,
            areaServed: location.name,
          }),
        ]}
      />
    </>
  );
}
