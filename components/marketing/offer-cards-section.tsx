import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, Badge } from "@/components/ui/card";
import { ChefHatIcon, PhoneIcon } from "@/components/marketing/icons";
import { OfferCarousel } from "@/components/marketing/offer-carousel";
import { formatPln } from "@/lib/format";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { obrazResponsywny } from "@/lib/obrazy";
import { ofertaObowiazuje } from "@/lib/offers/window";
import { SITE } from "@/lib/utils";

/**
 * „Aktualna oferta” — wszystkie aktywne oferty z /admin/oferta (te w swoim
 * oknie dat) jako karuzela przewijana automatycznie (28.10.2026, prośba
 * Michała: klient ma widzieć wszystkie oferty, nie tylko 3). Karuzela
 * zatrzymuje się po najechaniu myszką / dotknięciu, ma strzałki i kropki.
 *
 * Przycisk na karcie: „Zadzwoń do Agi” (tel:) zamiast „Umów prezentację”
 * (28.10.2026). Pod nim numer i link „Szczegóły oferty” → /oferta/[id],
 * żeby podstrony ofert nie zostały bez linków (patrz sierpień 2026).
 *
 * ctaLabel/ctaHref z panelu są renderowane jako finalne CTA NA stronie
 * szczegółów (app/(site)/oferta/[id]/page.tsx), nie tutaj.
 */
export async function OfferCardsSection() {
  const now = new Date();
  const offers = (await getOffersRepository().list()).filter(
    (o) => o.isActive && ofertaObowiazuje(o.startsAt, o.endsAt, now),
  );
  if (offers.length === 0) return null;
  const mediaRepository = getMediaRepository();
  const images = await Promise.all(
    offers.map((offer) => (offer.imageMediaId ? mediaRepository.get(offer.imageMediaId) : Promise.resolve(null))),
  );

  const karty = offers.map((offer, index) => {
    const price = formatPln(offer.priceCents);
    const image = images[index];
    return (
      <Card key={offer.id} className="flex h-full flex-col !p-0 overflow-hidden">
        {image ? (
          <img
            {...obrazResponsywny(image.url, "(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw")}
            alt={image.altText || offer.productName}
            loading={index < 3 ? "eager" : "lazy"}
            className="aspect-square w-full object-cover"
          />
        ) : (
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-50 to-neutral-100 text-brand-600">
            <ChefHatIcon width={40} height={40} strokeWidth={1.3} />
          </div>
        )}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="text-sm font-semibold leading-snug text-neutral-900 sm:text-base">{offer.productName}</h3>
          {offer.bonuses.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {offer.bonuses.map((bonus) => (
                <Badge key={bonus}>{bonus}</Badge>
              ))}
            </div>
          )}
          <div className="mt-auto pt-3 sm:pt-4">
            {price ? (
              <p className="mb-2 font-display text-lg text-neutral-900 sm:mb-3 sm:text-xl">{price}</p>
            ) : offer.installmentCents ? (
              <p className="mb-2 font-display text-lg text-neutral-900 sm:mb-3 sm:text-xl">
                {formatPln(offer.installmentCents)}
                <span className="font-sans text-sm text-muted">
                  {" "}
                  / mies.{offer.installmentMonths ? " · " + offer.installmentMonths + " rat" : ""}
                </span>
              </p>
            ) : (
              <p className="mb-2 text-xs text-muted sm:mb-3 sm:text-sm">Cena ustalana indywidualnie</p>
            )}
            <a
              href={SITE.phoneHref}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-medium text-neutral-0 shadow-[var(--shadow-cta)] transition-colors hover:bg-brand-700 sm:text-[0.95rem]"
            >
              <PhoneIcon width={18} height={18} />
              Zadzwoń do Agi
            </a>
            <p className="mt-2 text-center text-xs text-muted sm:mt-2.5 sm:text-sm">
              <a href={SITE.phoneHref} className="font-medium text-neutral-800 hover:text-brand-700">
                {SITE.phone}
              </a>
              {" · "}
              <Link href={"/oferta/" + offer.id} className="underline underline-offset-4 hover:text-brand-700">
                Szczegóły oferty
              </Link>
            </p>
          </div>
        </div>
      </Card>
    );
  });

  return (
    <Section tone="surface" className="pt-14 pb-6 md:pt-20 md:pb-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <Heading as="h2" size="md" className="text-brand-700">
          Aktualna oferta
        </Heading>
        {offers.length > 1 && (
          <p className="text-sm text-muted">
            {offers.length} {offers.length < 5 ? "oferty" : "ofert"}
          </p>
        )}
      </div>
      <OfferCarousel>{karty}</OfferCarousel>
    </Section>
  );
}
