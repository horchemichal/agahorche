import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { formatPln } from "@/lib/format";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ChefHatIcon } from "@/components/marketing/icons";
import type { Offer } from "@/types/offer";
import type { MediaAsset } from "@/types/media";
import { ofertaObowiazuje } from "@/lib/offers/window";

export const metadata: Metadata = buildMetadata({
  title: "Oferta",
  description: "Aktualna oferta Thermomix TM7 — ceny, zestawy i możliwości finansowania.",
  path: "/oferta",
});

/**
 * Full offer list (spec §5/§21 — single source of truth). Everything here
 * comes straight from /admin/oferta; nothing is hardcoded.
 */
/** Loads the picked media asset for offers that have one — offers without an image simply get `null`. */
async function loadOfferImages(offers: Offer[]): Promise<Map<string, MediaAsset>> {
  const mediaRepo = getMediaRepository();
  const entries = await Promise.all(
    offers
      .filter((o) => o.imageMediaId)
      .map(async (o) => [o.id, await mediaRepo.get(o.imageMediaId!)] as const),
  );
  return new Map(entries.filter((e): e is [string, MediaAsset] => e[1] !== null));
}

export default async function OfertaPage() {
  const now = new Date();
  const offers = (await getOffersRepository().list()).filter((o) => o.isActive && ofertaObowiazuje(o.startsAt, o.endsAt, now));
  const offerImages = await loadOfferImages(offers);

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Oferta", path: "/oferta" }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          Aktualna oferta
        </Heading>
        <Lead className="mt-4 max-w-xl">
          Ceny i warunki potwierdzane są indywidualnie podczas bezpłatnej prezentacji.
        </Lead>
      </Section>

      <Section tone="surface" className="pt-0">
        {offers.length === 0 ? (
          <p className="text-muted">Aktualnie brak aktywnych ofert — napisz do Agi, żeby zapytać o dostępność.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {offers.map((offer) => {
              const price = formatPln(offer.priceCents);
              const installment = formatPln(offer.installmentCents);
              const image = offerImages.get(offer.id);
              return (
                <Card key={offer.id} className="flex h-full flex-col !p-0 overflow-hidden">
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-50 to-neutral-100 text-brand-600">
                    {image ? (
                      // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
                      <img src={image.url} alt={image.altText} className="h-full w-full object-cover" />
                    ) : (
                      <ChefHatIcon width={40} height={40} strokeWidth={1.3} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-semibold text-neutral-900">{offer.productName}</h2>
                    {offer.description && <p className="mt-1.5 text-sm text-muted">{offer.description}</p>}
                    {offer.bonuses.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {offer.bonuses.map((bonus) => (
                          <Badge key={bonus}>{bonus}</Badge>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-4">
                      {price ? (
                        <p className="mb-1 font-display text-xl text-neutral-900">{price}</p>
                      ) : (
                        <p className="mb-1 text-sm text-muted">Cena ustalana indywidualnie</p>
                      )}
                      {installment && offer.installmentMonths && (
                        <p className="mb-3 text-xs text-muted">
                          lub {installment}/mies. przez {offer.installmentMonths} mies.
                        </p>
                      )}
                      {offer.conditions && <p className="mb-3 text-xs text-muted">{offer.conditions}</p>}
                      {/*
                        Sierpień 2026 — na prośbę Agi każda karta oferty kończy się
                        „Umów prezentację” → /prezentacja, zamiast etykiety z panelu
                        (`ctaLabel`/`ctaHref`). W bazie było tam „Sprawdź szczegóły”
                        prowadzące raz na /prezentacja, raz na /finansowanie — czyli
                        napis nie zgadzał się z tym, dokąd przycisk faktycznie wiódł.
                        Karta i tak pokazuje pełny opis, cenę i ratę, więc jedyne, co
                        zostaje do zrobienia, to rozmowa.

                        Link „Szczegóły oferty” pod spodem trzyma /oferta/[id] przy
                        życiu — bez niego te podstrony nie miałyby ani jednego linku
                        z serwisu (patrz też components/marketing/offer-cards-section.tsx).
                      */}
                      <ButtonLink href="/prezentacja" size="md" className="w-full justify-center">
                        Umów prezentację
                      </ButtonLink>
                      <Link
                        href={`/oferta/${offer.id}`}
                        className="mt-2.5 block text-center text-sm text-muted underline underline-offset-4 hover:text-brand-700"
                      >
                        Szczegóły oferty
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </Section>
    </>
  );
}
