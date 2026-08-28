import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function AgaClubTeaser() {
  return (
    <Section>
      <div className="rounded-xl bg-brand-900 px-6 py-12 text-center text-neutral-0 md:px-16 md:py-16">
        <Eyebrow className="text-brand-200">Społeczność</Eyebrow>
        <Heading as="h2" size="md" align="center" className="mb-4 text-neutral-0">
          Aga Club
        </Heading>
        <Lead className="mx-auto mb-8 max-w-xl text-brand-100">
          Pomysły na obiad, plan tygodnia, wyzwanie 30 dni z Agą i wsparcie AI w kuchni — wszystko
          w jednym miejscu.
        </Lead>
        <ButtonLink href="/aga-club" variant="secondary" size="lg">
          Wejdź do Aga Club
        </ButtonLink>
      </div>
    </Section>
  );
}
