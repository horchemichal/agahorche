import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function Tm7Teaser() {
  return (
    <Section tone="surface">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <Eyebrow>Najnowszy model</Eyebrow>
          <Heading as="h2" size="md" className="mb-4">
            Poznaj TM7
          </Heading>
          <Lead className="mb-6">
            Zobacz, co zmieniło się w najnowszym Thermomiksie i jak może ułatwić codzienne
            gotowanie — od śniadania po obiad dla całej rodziny.
          </Lead>
          <ButtonLink href="/thermomix/tm7" variant="outline">
            Zobacz, co potrafi TM7
          </ButtonLink>
        </div>
        {/* TODO: prawdziwe zdjęcie TM7, gdy zostanie dostarczone przez Agę. */}
        <div className="aspect-[4/3] rounded-lg bg-neutral-100" aria-hidden />
      </div>
    </Section>
  );
}
