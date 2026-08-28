import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { formatPln } from "@/lib/format";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/card";

/**
 * Reads the single active/primary offer set in /admin/oferta (spec §5/§21:
 * "jedno źródło prawdy"). Renders nothing when no offer is configured —
 * never a placeholder price. Reused wherever the site needs to show
 * current pricing; changing the price in Aga Admin updates every one of
 * these instances on next render, with no code change.
 */
export async function ActiveOfferSection() {
  const offer = await getOffersRepository().getActiveOffer();
  if (!offer) return null;

  const image = offer.imageMediaId ? await getMediaRepository().get(offer.imageMediaId) : null;
  const price = formatPln(offer.priceCents);
  const installment = formatPln(offer.installmentCents);

  return (
    <Section tone="surface">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>Aktualna oferta</Eyebrow>
          <Heading as="h2" size="md" className="mb-3">
            {offer.productName}
          </Heading>
          <Lead className="mb-5">{offer.description}</Lead>

          <div className="mb-5 flex flex-wrap items-baseline gap-3">
            {price && <span className="font-display text-3xl text-neutral-900">{price}</span>}
            {installment && offer.installmentMonths && (
              <span className="text-sm text-muted">
                lub {installment}/mies. przez {offer.installmentMonths} mies.
              </span>
            )}
          </div>

          {offer.bonuses.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {offer.bonuses.map((bonus) => (
                <Badge key={bonus}>{bonus}</Badge>
              ))}
            </div>
          )}

          <ButtonLink href={offer.ctaHref} size="lg">
            {offer.ctaLabel}
          </ButtonLink>
        </div>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
          <img
            src={image.url}
            alt={image.altText}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        ) : (
          <div className="aspect-[4/3] rounded-lg bg-neutral-100" aria-hidden />
        )}
      </div>
    </Section>
  );
}
