import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { listaKont } from "@/lib/admin/konta-klientow";
import { getAgaClubChallengeRepository } from "@/lib/database/repositories/aga-club-challenge-repository";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { MemberForm, ResetHaslaForm } from "./member-form";
import { MemberDeleteButton } from "./member-delete-button";

export const metadata: Metadata = {
  title: "Aga Club — Aga Admin",
  robots: { index: false, follow: false },
};

/**
 * OŚ STRONY
 * Konta Strefy Klienta — kto ma dostęp do Aga Club.
 *
 * DLACZEGO TA STRONA SIĘ ZMIENIŁA (zgłoszenie Michała, 4.09.2026: „pisze
 * brak członków, a ja jestem zalogowany"). Panel wypisywał tabelę
 * `aga_club_members`, która nie dawała nikomu dostępu, podczas gdy
 * logowanie opiera się na `client_users`. Stąd „Brak członków (0)" przy
 * działającym koncie — i stąd też to, że dodanie kogoś w panelu nie
 * otwierało mu niczego. Pełne wyjaśnienie: lib/admin/konta-klientow.ts.
 */
export default async function AdminAgaClubPage() {
  await requireAdmin();
  const [konta, challengeDays] = await Promise.all([
    listaKont(),
    getAgaClubChallengeRepository().listDays(),
  ]);
  const activeDays = challengeDays.filter((d) => d.active).length;

  return (
    <>
      <PanelHeader
        title="Aga Club"
        description="Konta do Strefy Klienta — kto może się zalogować i zobaczyć zamkniętą część serwisu."
        action={
          <ButtonLink href="/admin/aga-club/wyzwanie" variant="outline">
            Wyzwanie 30 dni ({activeDays}/30 opublikowanych)
          </ButtonLink>
        }
      />

      <div className="mb-6">
        <MemberForm />
      </div>

      <h2 className="mb-3 font-medium text-neutral-900">Konta ({konta.length})</h2>
      {konta.length === 0 ? (
        <EmptyState
          title="Nie ma jeszcze żadnego konta"
          description="Załóż pierwsze powyżej — osoba dostanie e-mail i hasło do logowania w Strefie Klienta."
        />
      ) : (
        <div className="space-y-2.5">
          {konta.map((konto) => (
            <Card key={konto.id} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="font-medium text-neutral-900">{konto.displayName}</span>
                  {/*
                    Konto bez hasła nie pozwala się zalogować. Nie powinno
                    powstać przez panel, ale gdyby kiedykolwiek się trafiło,
                    lepiej to widzieć niż zgadywać, czemu ktoś nie wchodzi.
                  */}
                  {!konto.maHaslo && <Badge tone="neutral">bez hasła</Badge>}
                </div>
                <p className="truncate text-sm text-muted">
                  {konto.email} · konto od {new Date(konto.createdAt).toLocaleDateString("pl-PL")}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ResetHaslaForm id={konto.id} email={konto.email} />
                <MemberDeleteButton id={konto.id} displayName={konto.displayName} />
              </div>
            </Card>
          ))}
        </div>
      )}

      <Card className="mt-6">
        <h3 className="font-semibold text-neutral-900">Jak działa odzyskiwanie hasła</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Nie ma linku „nie pamiętam hasła", który klientka klika sama — wymagałby wysyłki e-maili do
          klientek, a tego jeszcze nie ma. Zamiast tego: gdy ktoś zapomni hasła, znajdź go na liście
          wyżej, kliknij <strong className="text-neutral-900">„Ustaw nowe hasło"</strong> i przekaż mu
          to, które się pokaże.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Hasło widać <strong className="text-neutral-900">tylko raz</strong>, zaraz po ustawieniu.
          W bazie zapisany jest wyłącznie jego zaszyfrowany skrót, więc nikt — łącznie z Tobą — nie
          odczyta go później. Jeśli przepadnie, po prostu ustaw kolejne.
        </p>
      </Card>
    </>
  );
}
