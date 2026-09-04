import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LejekEtap, PozycjaRankingu, TydzienZgloszen } from "@/lib/admin/analityka";

/**
 * OŚ PLIKU
 * Wykresy analityki rysowane czystym HTML-em i CSS-em, bez biblioteki.
 *
 * DLACZEGO BEZ BIBLIOTEKI. Cały ekran to trzy kształty: słupek poziomy,
 * słupek pionowy i lejek. Dociągnięcie Rechartsa czy Chart.js kosztowałoby
 * kilkadziesiąt kilobajtów JS-u i zamieniło serwerowy komponent w kliencki
 * — w panelu, w którym nikt niczego nie najeżdża myszą i nie zoomuje.
 * Szerokość słupka to `width` w procentach; tyle wystarczy.
 *
 * DOSTĘPNOŚĆ. Każdy wykres ma pod spodem albo obok liczbę zapisaną
 * tekstem. Wykres jest ozdobą liczby, a nie jedynym jej nośnikiem —
 * inaczej czytnik ekranu nie odczytałby nic.
 */

/** Poziomy ranking: strona, miasto, źródło. */
export function RankingPoziomy({
  tytul,
  opis,
  pozycje,
  pusteGdy,
  formatujKlucz,
}: {
  tytul: string;
  opis?: string;
  pozycje: PozycjaRankingu[];
  pusteGdy: string;
  formatujKlucz?: (k: string) => string;
}) {
  return (
    <Card className="h-full">
      <h3 className="font-semibold text-neutral-900">{tytul}</h3>
      {opis && <p className="mt-1 text-xs text-muted">{opis}</p>}

      {pozycje.length === 0 ? (
        <p className="mt-4 text-sm text-muted">{pusteGdy}</p>
      ) : (
        <ol className="mt-4 flex flex-col gap-3">
          {pozycje.map((p) => (
            <li key={p.klucz}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="min-w-0 truncate text-sm text-neutral-900" title={p.klucz}>
                  {formatujKlucz ? formatujKlucz(p.klucz) : p.klucz}
                </span>
                <span className="shrink-0 text-sm tabular-nums text-muted">
                  {p.ile} · {p.procent}%
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface" aria-hidden>
                <div className="h-full rounded-full bg-brand-500" style={{ width: `${Math.max(p.procent, 2)}%` }} />
              </div>
            </li>
          ))}
        </ol>
      )}
    </Card>
  );
}

/** Słupki tygodniowe — 12 tygodni zgłoszeń. */
export function WykresTygodni({ tygodnie }: { tygodnie: TydzienZgloszen[] }) {
  const max = Math.max(1, ...tygodnie.map((t) => t.ile));
  const suma = tygodnie.reduce((s, t) => s + t.ile, 0);

  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-neutral-900">Zgłoszenia tydzień po tygodniu</h3>
        <span className="text-sm text-muted">ostatnie 12 tygodni: {suma}</span>
      </div>

      {suma === 0 ? (
        <p className="mt-4 text-sm text-muted">
          W ostatnich dwunastu tygodniach nie przyszło żadne zgłoszenie z formularza.
        </p>
      ) : (
        <div className="mt-5 flex items-end gap-1.5" style={{ height: 120 }}>
          {tygodnie.map((t) => {
            const [, m, d] = t.od.split("-");
            return (
              <div key={t.od} className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
                <span className="text-xs tabular-nums text-muted">{t.ile > 0 ? t.ile : ""}</span>
                <div
                  className={cn("w-full rounded-t", t.ile > 0 ? "bg-brand-500" : "bg-surface")}
                  style={{ height: `${Math.max((t.ile / max) * 90, 3)}px` }}
                  title={`Tydzień od ${t.od}: ${t.ile}`}
                />
                <span className="text-[10px] tabular-nums text-muted">
                  {d}.{m}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}

/** Lejek statusów — od zgłoszenia do sprzedaży. */
export function Lejek({ etapy, skutecznosc }: { etapy: LejekEtap[]; skutecznosc: number | null }) {
  const max = Math.max(1, ...etapy.map((e) => e.ile));
  const razem = etapy.reduce((s, e) => s + e.ile, 0);

  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-neutral-900">Co się dzieje ze zgłoszeniami</h3>
        {skutecznosc !== null && (
          <span className="text-sm text-muted">
            skuteczność: <strong className="text-neutral-900">{skutecznosc}%</strong>
          </span>
        )}
      </div>

      {razem === 0 ? (
        <p className="mt-4 text-sm text-muted">Nie ma jeszcze żadnego zgłoszenia.</p>
      ) : (
        <>
          <ol className="mt-4 flex flex-col gap-3">
            {etapy.map((e) => (
              <li key={e.status} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-neutral-900">{e.etykieta}</span>
                <div className="h-6 min-w-0 flex-1 overflow-hidden rounded bg-surface" aria-hidden>
                  <div
                    className={cn(
                      "h-full rounded",
                      e.status === "SOLD" ? "bg-brand-600" : e.status === "LOST" ? "bg-neutral-300" : "bg-brand-300",
                    )}
                    style={{ width: `${Math.max((e.ile / max) * 100, e.ile > 0 ? 4 : 0)}%` }}
                  />
                </div>
                <span className="w-10 shrink-0 text-right text-sm tabular-nums text-neutral-900">{e.ile}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-muted">
            {skutecznosc === null
              ? "Skuteczność policzę, gdy pierwsze zgłoszenie dostanie status „Sprzedaż” albo „Nie doszło do skutku”."
              : "Skuteczność to udział sprzedaży wśród spraw zamkniętych — zgłoszenia czekające na kontakt nie są wliczane."}
          </p>
        </>
      )}
    </Card>
  );
}
