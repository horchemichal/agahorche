import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import type { Location } from "@/types/location";

export function LocationHero({ location, intro }: { location: Location; intro: string }) {
  return (
    <Section className="pt-10 md:pt-16">
      <Eyebrow>Bezpłatna prezentacja Thermomix</Eyebrow>
      <Heading as="h1" size="xl" className="max-w-3xl">
        Thermomix {location.name} – bezpłatna prezentacja z Agą
      </Heading>
      <Lead className="mt-5 max-w-2xl">{intro}</Lead>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/prezentacja" size="lg">
          Umów bezpłatną prezentację
        </ButtonLink>
        <ButtonLink href="/thermomix/tm7" variant="outline" size="lg">
          Zobacz, co potrafi TM7
        </ButtonLink>
      </div>
    </Section>
  );
}
