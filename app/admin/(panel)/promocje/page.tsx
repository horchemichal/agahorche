import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPromotionsRepository, computePromotionStatus } from "@/lib/database/repositories/promotions-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PromotionStatus } from "@/types/promotion";
import { PromotionDeleteButton } from "./promotion-delete-button";

export const metadata: Metadata = {
  title: "Promocje — Aga Admin",
  robots: { index: false, follow: false },
};

const STATUS_LABEL: Record<PromotionStatus, string> = {
  DRAFT: "Szkic",
  SCHEDULED: "Zaplanowana",
  ACTIVE: "Aktywna",
  EXPIRED: "Wygasła",
};

const STATUS_TONE: Record<PromotionStatus, string> = {
  DRAFT: "bg-neutral-100 text-neutral-600",
  SCHEDULED: "bg-brand-50 text-brand-700",
  ACTIVE: "bg-brand-100 text-brand-800",
  EXPIRED: "bg-neutral-100 text-neutral-500",
};

export default async function AdminPromocjePage() {
  await requireAdmin();
  const promotions = await getPromotionsRepository().list();
  const now = new Date();

  return (
    <>
      <PanelHeader
        title="Promocje"
        description="Status liczony automatycznie z dat rozpoczęcia/zakończenia — nie ustawiasz go ręcznie."
        action={<ButtonLink href="/admin/promocje/nowa">Dodaj promocję</ButtonLink>}
      />

      {promotions.length === 0 ? (
        <EmptyState
          title="Brak promocji"
          description="Dodaj pierwszą promocję, aby pojawiła się na stronie głównej w oknie dat, które ustawisz."
          action={<ButtonLink href="/admin/promocje/nowa">Dodaj promocję</ButtonLink>}
        />
      ) : (
        <div className="space-y-3">
          {promotions.map((promo) => {
            const status = computePromotionStatus(promo, now);
            return (
              <Card key={promo.id} className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <Link href={`/admin/promocje/${promo.id}`} className="font-medium text-neutral-900 hover:underline">
                      {promo.title}
                    </Link>
                    <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium", STATUS_TONE[status])}>
                      {STATUS_LABEL[status]}
                    </span>
                  </div>
                  <p className="text-sm text-muted">
                    {new Date(promo.startsAt).toLocaleDateString("pl-PL")} –{" "}
                    {new Date(promo.endsAt).toLocaleDateString("pl-PL")} · priorytet {promo.priority}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <ButtonLink href={`/admin/promocje/${promo.id}`} variant="outline" size="md" className="h-9 px-3.5 text-sm">
                    Edytuj
                  </ButtonLink>
                  <PromotionDeleteButton id={promo.id} title={promo.title} />
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
