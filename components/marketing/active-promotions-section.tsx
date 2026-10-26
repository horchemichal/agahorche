import { getPromotionsRepository } from "@/lib/database/repositories/promotions-repository";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { obrazResponsywny } from "@/lib/obrazy";

/**
 * Lists only promotions the repository computes as ACTIVE right now (spec
 * §6/§21) — status is date-derived, never a stale stored flag. Renders
 * nothing when there are no active promotions.
 */
export async function ActivePromotionsSection() {
  const promotions = await getPromotionsRepository().listActive();
  if (promotions.length === 0) return null;
  const media = getMediaRepository();
  const obrazy = await Promise.all(promotions.map((p) => (p.imageMediaId ? media.get(p.imageMediaId) : Promise.resolve(null))));

  return (
    <Section>
      <Heading as="h2" size="md" className="mb-8">
        Aktualne promocje
      </Heading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo, i) => (
          <Card key={promo.id} className="flex h-full flex-col">
              {obrazy[i] && (
                // eslint-disable-next-line @next/next/no-img-element -- zdjęcie z biblioteki mediów (/media/...)
                <img
                  {...obrazResponsywny(obrazy[i]!.url, "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw")}
                  alt={obrazy[i]!.altText || promo.title}
                  loading="lazy"
                  className="mb-4 aspect-[4/3] w-full rounded-lg object-cover"
                />
              )}
            <h3 className="mb-1.5 font-semibold text-neutral-900">{promo.title}</h3>
            <p className="mb-4 flex-1 text-sm text-muted leading-relaxed">{promo.shortDescription}</p>
            <ButtonLink href={promo.ctaHref} variant="outline" size="md">
              {promo.ctaLabel}
            </ButtonLink>
          </Card>
        ))}
      </div>
    </Section>
  );
}
