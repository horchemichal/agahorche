import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/require-admin";
import { wiadomosciDlaPanelu, DNI_ZYCIA_WIADOMOSCI } from "@/lib/klub/czat";
import { usunWiadomoscCzatuAction } from "./actions";
import { PanelHeader } from "@/components/admin/panel-states";
import { Card, Badge } from "@/components/ui/card";
import { ButtonLink, Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Czat klubu — Aga Admin",
  robots: { index: false, follow: false },
};

/**
 * OŚ STRONY
 * Moderacja czatu Aga Club.
 *
 * DLACZEGO MODERACJA JEST W PANELU, A NIE W SAMYM CZACIE. Aga loguje się
 * do panelu innym kontem niż klubowiczki do Strefy Klienta — to dwie
 * osobne tożsamości, osobne ciasteczka i osobne sekrety (patrz
 * lib/auth/client-auth.ts). Aga nie ma konta w klubie, więc nie mogłaby
 * kliknąć „usuń" wewnątrz czatu, nawet gdyby przycisk tam był.
 *
 * TO NIE JEST FUNKCJA NA ZAPAS. Czat bez możliwości skasowania cudzej
 * wiadomości znaczy, że jedna złośliwość albo pomyłka wisi tam, aż sama
 * wygaśnie. Przy dwóch tygodniach życia wiadomości to dwa tygodnie za
 * długo — i to Aga odpowiada za to, co piszą jej klientki.
 *
 * Widok pokazuje PEŁNE imię i adres e-mail autorki, w odróżnieniu od
 * samego czatu, gdzie widać tylko imię. Aga musi wiedzieć, z kim
 * rozmawiać, jeśli trzeba będzie porozmawiać.
 */
/*
 * CZAS PO POLSKU, NIE PO SERWEROWEMU. Ta strona renderuje się na
 * serwerze, a kontener chodzi na UTC — bez wymuszenia strefy Aga
 * widziałaby godziny o dwie mniejsze niż klientki w czacie
 * (5.09.2026, 08:02 zamiast 10:02) i przy każdej rozmowie o „tej
 * wiadomości sprzed chwili" mijałaby się z nimi o dwie godziny.
 */
export default async function AdminCzatKlubuPage() {
  await requireAdmin();
  const wiadomosci = await wiadomosciDlaPanelu();

  const czynne = wiadomosci.filter((w) => !w.usunieta);

  return (
    <>
      <PanelHeader
        title="Czat klubu"
        description={`Rozmowa klubowiczek. Wiadomości znikają same po ${DNI_ZYCIA_WIADOMOSCI} dniach — tutaj możesz usunąć każdą wcześniej.`}
        action={
          <ButtonLink href="/admin/aga-club" variant="ghost">
            ← Aga Club
          </ButtonLink>
        }
      />

      <Card className="!p-4">
        <p className="text-sm text-muted">
          Widocznych wiadomości: <strong className="text-neutral-900">{czynne.length}</strong>
          {wiadomosci.length > czynne.length && (
            <> · usuniętych: {wiadomosci.length - czynne.length}</>
          )}
        </p>
      </Card>

      {wiadomosci.length === 0 && (
        <Card className="mt-4">
          <p className="text-sm text-muted">
            W czacie nie ma jeszcze żadnej wiadomości.
          </p>
        </Card>
      )}

      <div className="mt-4 flex flex-col gap-2.5">
        {wiadomosci.map((w) => (
          <Card key={w.id} className="!p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-neutral-900">
                  {w.autor}{" "}
                  <span className="font-normal text-muted">· {w.email}</span>
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {new Date(w.kiedy).toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })}
                  {w.usunieta && w.usunietaPrzez && <> · usunęła: {w.usunietaPrzez}</>}
                </p>

                {w.usunieta ? (
                  <p className="mt-2 text-sm italic text-muted">Wiadomość usunięta</p>
                ) : (
                  <>
                    {w.tresc && (
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-neutral-700">
                        {w.tresc}
                      </p>
                    )}
                    {w.obrazUrl && (
                      <a
                        href={w.obrazUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-brand-700 underline underline-offset-2"
                      >
                        Zobacz zdjęcie →
                      </a>
                    )}
                  </>
                )}
              </div>

              <div className="shrink-0">
                {w.usunieta ? (
                  <Badge tone="neutral">usunięta</Badge>
                ) : (
                  /*
                   * Zwykły formularz, bez okienka „na pewno?". Okienko
                   * `confirm()` blokuje stronę, a pomyłka jest tu tania:
                   * wiadomość i tak zniknie sama za dwa tygodnie, a ślad
                   * po usunięciu zostaje widoczny w tej liście.
                   */
                  <form action={usunWiadomoscCzatuAction}>
                    <input type="hidden" name="id" value={w.id} />
                    <Button type="submit" variant="outline">
                      Usuń
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
