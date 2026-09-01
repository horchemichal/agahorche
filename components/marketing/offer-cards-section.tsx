import Link from "next/link";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { formatPln } from "@/lib/format";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ChefHatIcon } from "@/components/marketing/icons";
import { ofertaObowiazuje } from "@/lib/offers/window";


/**
 * "Aktualna oferta" grid (spec §5/§21 — single source of truth for
 * pricing). Reads every active offer from /admin/oferta and renders up to 3
 * cards. Used to exclude the offer flagged "primary" (that one also drives
 * the hero badge and the installment calculator price elsewhere on the
 * homepage) so it wouldn't appear twice — but Aga confirmed 2026-08-16 she
 * wants all 3 active offers visible in this grid regardless of which one is
 * primary, even though that means the primary offer's card shows here too.
 * Renders nothing if no active offers are configured, never a placeholder
 * card.
 *
 * SIERPIEŃ 2026 — głównym przyciskiem na karcie jest „Umów prezentację”
 * (→ /prezentacja), nie „Sprawdź szczegóły”. Prośba Agi: karta ma prowadzić
 * do rozmowy, a nie do kolejnej strony do czytania. To też jedyna akcja,
 * która cokolwiek dla niej zarabia.
 *
 * Pod przyciskiem został dyskretny link tekstowy „Szczegóły oferty”
 * → /oferta/[id]. Bez niego te podstrony zrobiłyby się osieroconymi adresami
 * (istnieją, są w sitemapie, ale nie prowadzi do nich ani jeden link
 * z serwisu) — dokładnie ten problem naprawialiśmy w sierpniu przy
 * podstronach /thermomix/*. Gdyby Aga chciała się pozbyć samych stron
 * szczegółów, trzeba je usunąć razem z wpisami w sitemapie, a nie zostawiać
 * bez linków.
 *
 * ctaLabel/ctaHref z panelu są renderowane jako finalne CTA NA stronie
 * szczegółów (patrz app/(site)/oferta/[id]/page.tsx), nie tutaj.
 */
export async function OfferCardsSection() {
  const now = new Date();
  const offers = (await getOffersRepository().list())
    .filter((o) => o.isActive && ofertaObowiazuje(o.startsAt, o.endsAt, now))
    .slice(0, 3);

  if (offers.length === 0) return null;

  const mediaRepository = getMediaRepository();
  const images = await Promise.all(
    offers.map((offer) => (offer.imageMediaId ? mediaRepository.get(offer.imageMediaId) : Promise.resolve(null))),
  );

  return (
    <Section tone="surface" className="pt-14 pb-6 md:pt-20 md:pb-8">
      <div className="mb-8">
        <Heading as="h2" size="md" className="text-brand-700">
          Aktualna oferta
        </Heading>
      </div>

      {/* Mobile: horizontal scroller showing 1 full card at a time (with a
          peek of the next one to hint it's swipeable), rest reachable by
          swipe. sm+: reverts to the static 3-column grid. */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none]">
        {offers.map((offer, index) => {
          const price = formatPln(offer.priceCents);
          const image = images[index];
          return (
            <Card
              key={offer.id}
              className="flex h-full w-[85%] flex-none flex-col snap-start !p-0 overflow-hidden sm:w-auto"
            >
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
                <img
                  src={image.url}
                  alt={image.altText || offer.productName}
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
                  ) : (
                    <p className="mb-2 text-xs text-muted sm:mb-3 sm:text-sm">Cena ustalana indywidualnie</p>
                  )}
                  <ButtonLink
                    href="/prezentacja"
                    size="md"
                    className="w-full justify-center text-sm sm:text-[0.95rem]"
                  >
                    Umów prezentację
                  </ButtonLink>
                  <Link
                    href={`/oferta/${offer.id}`}
                    className="mt-2 block text-center text-xs text-muted underline underline-offset-4 hover:text-brand-700 sm:mt-2.5 sm:text-sm"
                  >
                    Szczegóły oferty
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
