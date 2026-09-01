import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPoradnikRepository } from "@/lib/database/repositories/poradnik-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { DZIALY_PORADNIKA } from "@/types/poradnik";
import { PoradnikDeleteButton } from "./poradnik-delete-button";

export const metadata: Metadata = {
  title: "Poradnik — Aga Admin",
  robots: { index: false, follow: false },
};

/**
 * Lista wpisów poradnika, pogrupowana po działach — łącznie z działami
 * PUSTYMI, które dostają swoją podpowiedź i przycisk „napisz pierwszy wpis".
 * To celowe: publiczna strona pustych działów nie pokazuje, ale panel musi,
 * bo inaczej Aga nigdy nie zobaczy, że czekają na jej treść.
 *
 * Znacznik „do przepisania" przy wpisach z `wlasne: false` odróżnia wgraną
 * wiedzę ogólną od tego, co napisała sama.
 */
export default async function AdminPoradnikPage() {
  await requireAdmin();
  const wpisy = await getPoradnikRepository().list();

  return (
    <>
      <PanelHeader
        title="Poradnik"
        description="Osiem działów wiedzy kuchennej. Wpisy oznaczone „do przepisania” to treść wgrana na start — warto zastąpić je własnymi słowami."
        action={<ButtonLink href="/admin/poradnik/nowe">Dodaj wpis</ButtonLink>}
      />

      {wpisy.length === 0 ? (
        <EmptyState
          title="Poradnik jest pusty"
          description="Dodaj pierwszy wpis — wybierz dział, a formularz podpowie, co powinno się w nim znaleźć."
          action={<ButtonLink href="/admin/poradnik/nowe">Dodaj wpis</ButtonLink>}
        />
      ) : (
        <div className="space-y-8">
          {DZIALY_PORADNIKA.map((dzial) => {
            const wDziale = wpisy.filter((w) => w.dzial === dzial.slug);
            const doPrzepisania = wDziale.filter((w) => !w.wlasne).length;

            return (
              <section key={dzial.slug}>
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-lg text-neutral-900">
                    {dzial.nazwa}{" "}
                    <span className="font-sans text-sm font-normal text-muted">
                      ({wDziale.length})
                    </span>
                  </h2>
                  {doPrzepisania > 0 && (
                    <p className="text-sm text-muted">{doPrzepisania} do przepisania własnymi słowami</p>
                  )}
                </div>

                {wDziale.length === 0 ? (
                  <Card className="!p-5">
                    <p className="mb-3 text-sm leading-relaxed text-neutral-700">{dzial.podpowiedz}</p>
                    <ButtonLink href="/admin/poradnik/nowe" variant="outline" size="md" className="h-9 px-3.5 text-sm">
                      Napisz pierwszy wpis
                    </ButtonLink>
                  </Card>
                ) : (
                  <div className="space-y-2.5">
                    {wDziale.map((w) => (
                      <Card key={w.id} className="flex flex-wrap items-center justify-between gap-4 !p-4">
                        <div className="min-w-0">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <Link
                              href={`/admin/poradnik/${w.id}`}
                              className="font-medium text-neutral-900 hover:underline"
                            >
                              {w.tytul}
                            </Link>
                            {!w.wlasne && <Badge tone="neutral">do przepisania</Badge>}
                            {!w.opublikowany && <Badge tone="neutral">nieopublikowany</Badge>}
                          </div>
                          <p className="truncate text-sm text-muted">{w.lead || w.tresc.slice(0, 120)}</p>
                        </div>
                        <div className="flex shrink-0 gap-2">
                          <ButtonLink
                            href={`/admin/poradnik/${w.id}`}
                            variant="outline"
                            size="md"
                            className="h-9 px-3.5 text-sm"
                          >
                            Edytuj
                          </ButtonLink>
                          <PoradnikDeleteButton id={w.id} tytul={w.tytul} />
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
