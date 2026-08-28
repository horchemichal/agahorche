import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { formatPln } from "@/lib/format";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ChefHatIcon } from "@/components/marketing/icons";

function withinWindow(startsAt: string | null, endsAt: string | null, now: Date): boolean {
  if (startsAt && new Date(startsAt) > now) return false;
  if (endsAt && new Date(endsAt) < now) return false;
  return true;
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const offer = await getOffersRepository().get(id);
  if (!offer) return buildMetadata({ title: "Oferta", description: "Aktualna oferta Thermomix.", path: "/oferta" });

  return buildMetadata({
    title: offer.productName,
    description: offer.description || `Szczegóły oferty: ${offer.productName}.`,
    path: `/oferta/${offer.id}`,
  });
}

/**
 * Individual offer detail page (fixes the "Sprawdź szczegóły" dead end —
 * previously the homepage grid's button used the admin-editable ctaHref
 * directly, so it could land on an unrelated stub page instead of showing
 * the offer's own description). This page is the single place that shows
 * one offer's full copy: image, description, bonuses, price/installment,
 * conditions. The admin's ctaLabel/ctaHref fields (spec §5/§21 — configured
 * per offer in /admin/oferta) now drive the final CTA button here, since
 * that's what they were always meant to be: the action Aga wants for THAT
 * specific offer, not the "read more" link itself.
 *
 * SIERPIEŃ 2026 — `offerCta()` niżej. Aga zgłosiła, że na dole szczegółów
 * oferty widnieje „Sprawdź szczegóły” prowadzące donikąd: rekord w bazie ma
 * w `cta_label`/`cta_href` etykietę z KARTY oferty (kafelek na /oferta linkuje
 * „Sprawdź szczegóły” → /oferta/[id], patrz components/marketing/offer-cards-section.tsx),
 * więc na stronie szczegółów przycisk zapraszał do obejrzenia strony, na
 * której użytkownik już jest.
 *
 * Zamiast poprawić jeden wiersz w bazie (i czekać, aż wróci przy kolejnej
 * ofercie) blokujemy to w kodzie: jeśli CTA prowadzi z powrotem do oferty
 * albo do listy ofert, pokazujemy „Umów prezentację” → /prezentacja. To
 * jedyne sensowne działanie na tej stronie. Własne CTA z panelu nadal działa,
 * o ile prowadzi gdzie indziej.
 */
function offerCta(ctaHref: string, ctaLabel: string, offerId: string) {
  const href = (ctaHref ?? "").trim();
  const deadEnd =
    href === "" ||
    href === "/oferta" ||
    href === `/oferta/${offerId}` ||
    href.startsWith(`/oferta/${offerId}?`) ||
    href.startsWith(`/oferta/${offerId}#`);
  if (deadEnd) return { href: "/prezentacja", label: "Umów prezentację" };
  return { href, label: ctaLabel?.trim() || "Umów prezentację" };
}
export default async function OfferDetailPage({ params }: Props) {
  const { id } = await params;
  const now = new Date();
  const offer = await getOffersRepository().get(id);
  if (!offer || !offer.isActive || !withinWindow(offer.startsAt, offer.endsAt, now)) notFound();

  const image = offer.imageMediaId ? await getMediaRepository().get(offer.imageMediaId) : null;
  const price = formatPln(offer.priceCents);
  const installment = formatPln(offer.installmentCents);
  const cta = offerCta(offer.ctaHref, offer.ctaLabel, offer.id);

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Oferta", path: "/oferta" },
            { name: offer.productName, path: `/oferta/${offer.id}` },
          ]}
        />
      </Section>

      <Section tone="surface" className="pt-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="aspect-square overflow-hidden rounded-lg border border-border bg-neutral-0">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
              <img src={image.url} alt={image.altText || offer.productName} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-50 to-neutral-100 text-brand-600">
                <ChefHatIcon width={48} height={48} strokeWidth={1.3} />
              </div>
            )}
          </div>

          <div>
            <Heading as="h1" size="lg">
              {offer.productName}
            </Heading>

            {offer.description && (
              <p className="mt-4 whitespace-pre-line text-neutral-700">{offer.description}</p>
            )}

            {offer.bonuses.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {offer.bonuses.map((bonus) => (
                  <Badge key={bonus}>{bonus}</Badge>
                ))}
              </div>
            )}

            <div className="mt-6">
              {price ? (
                <p className="font-display text-2xl text-neutral-900">{price}</p>
              ) : (
                <p className="text-muted">Cena ustalana indywidualnie</p>
              )}
              {installment && offer.installmentMonths && (
                <p className="mt-1 text-sm text-muted">
                  lub {installment}/mies. przez {offer.installmentMonths} mies.
                </p>
              )}
            </div>

            {offer.conditions && <p className="mt-3 text-sm text-muted">{offer.conditions}</p>}

            <ButtonLink href={cta.href} size="lg" className="mt-6 w-full justify-center sm:w-auto">
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
