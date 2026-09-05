import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { listaKopii, ladnyRozmiar } from "@/lib/admin/kopie";
import { PanelHeader, EmptyState } from "@/components/admin/panel-states";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kopie zapasowe — Aga Admin",
  robots: { index: false, follow: false },
};

/**
 * OŚ STRONY
 * Kopie zapasowe do pobrania na własny komputer.
 *
 * CO JEST W ARCHIWUM: zrzut całej bazy (konta, jadłospisy, poradnik,
 * wyzwanie, zgłoszenia z formularza), wszystkie wgrane zdjęcia, kod strony
 * i plik `.env` z sekretami. Z tego jednego pliku da się postawić serwis od
 * zera na pustym serwerze.
 *
 * DLATEGO TEŻ TO NIE JEST ZWYKŁY PLIK. Kto ma to archiwum, ma dostęp do
 * wszystkiego: sesji, poczty, bazy. Strona mówi to wprost, bo inaczej
 * skończy się w załączniku do maila albo na pulpicie komputera, z którego
 * korzysta ktoś jeszcze.
 */
export default async function AdminKopiePage() {
  await requireAdmin();
  const kopie = await listaKopii();

  return (
    <>
      <PanelHeader
        title="Kopie zapasowe"
        description="Pełne archiwum serwisu do pobrania — baza, zdjęcia, kod i ustawienia."
      />

      <Card className="!p-4">
        <p className="text-sm leading-relaxed text-neutral-700">
          <strong>To jest klucz do całego serwisu.</strong> W środku są hasła i dane klientek —
          trzymaj te pliki na swoim komputerze, nie wysyłaj ich mailem i nie zostawiaj
          w folderze współdzielonym z kimkolwiek.
        </p>
      </Card>

      {kopie.length === 0 ? (
        <div className="mt-4">
          <EmptyState
            title="Nie ma jeszcze żadnej kopii"
            description="Nową kopię robi się na serwerze poleceniem: bash /root/agahorche/scripts/zrob-kopie.sh"
          />
        </div>
      ) : (
        <div className="mt-4 space-y-2.5">
          {kopie.map((k) => (
            <Card key={k.nazwa} className="flex flex-wrap items-center justify-between gap-4 !p-4">
              <div className="min-w-0">
                <p className="font-medium text-neutral-900">{k.nazwa}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {new Date(k.kiedy).toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })} ·{" "}
                  {ladnyRozmiar(k.bajty)}
                </p>
              </div>
              <ButtonLink href={`/admin/kopia?plik=${encodeURIComponent(k.nazwa)}`} download>
                Pobierz
              </ButtonLink>
            </Card>
          ))}
        </div>
      )}

      <Card className="mt-4 !p-4">
        <h2 className="font-medium text-neutral-900">Jak zrobić świeżą kopię</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Na serwerze, w konsoli internetowej Hostingera:
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg bg-neutral-900 px-3 py-2 text-xs text-neutral-0">
          bash /root/agahorche/scripts/zrob-kopie.sh
        </pre>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Po chwili nowe archiwum pojawi się na tej liście. Stare kopie kasują się same — zostaje
          pięć najnowszych.
        </p>
      </Card>
    </>
  );
}
