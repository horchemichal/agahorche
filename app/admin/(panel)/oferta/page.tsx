import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { formatPln } from "@/lib/format";
import { OfferDeleteButton } from "./offer-delete-button";

export const metadata: Metadata = {
  title: "Oferta — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminOfertaPage() {
  await requireAdmin();
  const offers = await getOffersRepository().list();

  return (
    <>
      <PanelHeader
        title="Oferta"
        description="Jedno źródło prawdy dla cen na całej stronie — zmiana tutaj aktualizuje wszystkie miejsca, które ją pokazują."
        action={<ButtonLink href="/admin/oferta/nowa">Dodaj ofertę</ButtonLink>}
      />

      {offers.length === 0 ? (
        <EmptyState
          title="Brak ofert"
          description="Dodaj pierwszą ofertę, aby cena i CTA pojawiły się na stronie głównej."
          action={<ButtonLink href="/admin/oferta/nowa">Dodaj ofertę</ButtonLink>}
        />
      ) : (
        <div className="space-y-3">
          {offers.map((offer) => (
            <Card key={offer.id} className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Link href={`/admin/oferta/${offer.id}`} className="font-medium text-neutral-900 hover:underline">
                    {offer.productName}
                  </Link>
                  {offer.isPrimary && <Badge>Główna</Badge>}
                  {!offer.isActive && <Badge tone="neutral">Nieaktywna</Badge>}
                </div>
                <p className="text-sm text-muted">
                  {formatPln(offer.priceCents) ?? "cena do ustalenia"} · model {offer.model}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <ButtonLink href={`/admin/oferta/${offer.id}`} variant="outline" size="md" className="h-9 px-3.5 text-sm">
                  Edytuj
                </ButtonLink>
                <OfferDeleteButton id={offer.id} productName={offer.productName} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
