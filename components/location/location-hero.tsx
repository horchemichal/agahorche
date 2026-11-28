import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Photo } from "@/components/marketing/content-blocks";
import type { Location } from "@/types/location";

const ZDJECIE_AGI = "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp";

/* 28.11.2026 (prośba Agi): strona lokalna zaczyna się od zdjęcia Agi —
   na telefonie zdjęcie jest nad nagłówkiem, na komputerze obok. */
export function LocationHero({ location, intro }: { location: Location; intro: string }) {
  return (
    <Section className="!pt-3 !pb-0 md:!pt-8 md:!pb-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-center lg:text-left">
          <Eyebrow>Bezpłatna prezentacja Thermomix</Eyebrow>
          <Heading as="h1" size="xl" className="mx-auto max-w-3xl lg:mx-0">
            Thermomix {location.name} – bezpłatna prezentacja z Agą
          </Heading>
          <Lead className="mx-auto mt-5 max-w-2xl lg:mx-0">{intro}</Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href="/prezentacja" size="lg">
              Umów bezpłatną prezentację
            </ButtonLink>
            <ButtonLink href="/thermomix/tm7" variant="outline" size="lg">
              Zobacz, co potrafi TM7
            </ButtonLink>
          </div>
        </div>
        <Photo
          priority
          className="order-first mx-auto w-full max-w-sm lg:order-none lg:max-w-none"
          src={ZDJECIE_AGI}
          alt={`Aga Horche — przedstawiciel Thermomix ${location.name}, z Thermomixem TM7`}
        />
      </div>
    </Section>
  );
}
