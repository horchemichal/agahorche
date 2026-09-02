"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { AgaClubChallengeDay } from "@/types/aga-club";
import type { Recipe } from "@/types/diet";
import type { PrzepisMeta } from "@/types/przepis-meta";
import { TrescWpisu } from "@/components/poradnik/tresc-wpisu";
import { CookidooButton } from "@/components/diets/cookidoo-button";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { czasSlownie } from "@/lib/przepisy/grupy";
import { przelaczDzien, wczytajPostep, wyzerujPostep, ZDARZENIE_POSTEPU } from "@/lib/aga-club/postep-wyzwania";

/**
 * OŚ PLIKU
 * „30 dni z Thermomixem" — lista dni z odhaczaniem i rozwijaną treścią.
 *
 * KOGO CO WIDZI. Dzień 1 jest otwarty dla wszystkich — to ta sama zasada
 * co przy dietach: gość widzi jeden pełny dzień i wie, co dostaje. Dni
 * 2–30 pokazują tytuł zadania (żeby było widać plan całego miesiąca), ale
 * treść otwiera się dopiero po zalogowaniu do Aga Club. Ukrycie także
 * tytułów zamieniłoby stronę w pustą obietnicę.
 *
 * DLACZEGO WSZYSTKO NA JEDNEJ STRONIE, A NIE /dzien/1…30. Bo wyzwanie
 * czyta się jak listę zadań, a nie jak trzydzieści artykułów: chcesz
 * widzieć, ile zostało, i odhaczyć dzisiejszy dzień bez przeładowania.
 * Trzydzieści osobnych adresów dałoby trzydzieści cienkich stron, których
 * i tak nikt nie linkuje.
 *
 * POSTĘP siedzi w przeglądarce (lib/aga-club/postep-wyzwania.ts). Piszemy
 * o tym wprost pod paskiem, bo per-przeglądarka to realne ograniczenie.
 */

export interface DzienZPrzepisem extends AgaClubChallengeDay {
  przepis: Recipe | null;
  meta: PrzepisMeta | null;
}

export function Wyzwanie30Dni({ dni, zalogowany }: { dni: DzienZPrzepisem[]; zalogowany: boolean }) {
  const [zrobione, setZrobione] = useState<number[]>([]);
  const [gotowe, setGotowe] = useState(false);
  const [otwarty, setOtwarty] = useState<number | null>(dni[0]?.day ?? null);

  const odswiez = useCallback(() => setZrobione(wczytajPostep()), []);

  useEffect(() => {
    odswiez();
    setGotowe(true);
    window.addEventListener(ZDARZENIE_POSTEPU, odswiez);
    window.addEventListener("storage", odswiez);
    return () => {
      window.removeEventListener(ZDARZENIE_POSTEPU, odswiez);
      window.removeEventListener("storage", odswiez);
    };
  }, [odswiez]);

  const ile = gotowe ? zrobione.length : 0;
  const procent = dni.length > 0 ? Math.round((ile / dni.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-6">
      {/* --- pasek postępu --- */}
      <div className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-display text-lg text-neutral-900">
            Zrobione: {ile} z {dni.length}
          </p>
          {ile > 0 && (
            <button
              type="button"
              onClick={wyzerujPostep}
              className="text-sm text-brand-700 underline underline-offset-2"
            >
              Zacznij od nowa
            </button>
          )}
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface" aria-hidden>
          <div
            className="h-full rounded-full bg-brand-600 transition-all duration-300"
            style={{ width: `${procent}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-muted">
          Postęp zapisuje się w tej przeglądarce — na telefonie zaczniesz od zera.
        </p>
      </div>

      {/* --- dni --- */}
      <ol className="flex flex-col gap-2.5">
        {dni.map((d) => {
          const odhaczony = gotowe && zrobione.includes(d.day);
          const zamkniety = !zalogowany && d.day !== 1;
          const rozwiniety = otwarty === d.day && !zamkniety;

          return (
            <li
              key={d.day}
              className={cn(
                "overflow-hidden rounded-2xl border bg-neutral-0 transition-colors",
                odhaczony ? "border-brand-300 bg-brand-50/40" : "border-border",
              )}
            >
              <div className="flex items-start gap-3 p-4 md:p-5">
                <button
                  type="button"
                  onClick={() => przelaczDzien(d.day)}
                  aria-pressed={odhaczony}
                  aria-label={`Oznacz dzień ${d.day} jako zrobiony`}
                  className={cn(
                    "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-sm font-medium transition-colors",
                    odhaczony
                      ? "border-brand-600 bg-brand-600 text-neutral-0"
                      : "border-neutral-300 text-neutral-500 hover:border-brand-400",
                  )}
                >
                  {odhaczony ? "✓" : d.day}
                </button>

                <div className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => !zamkniety && setOtwarty(rozwiniety ? null : d.day)}
                    disabled={zamkniety}
                    className={cn(
                      "block w-full text-left",
                      zamkniety ? "cursor-default" : "cursor-pointer",
                    )}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      Dzień {d.day}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block font-display text-base leading-snug",
                        odhaczony ? "text-neutral-500 line-through" : "text-neutral-900",
                      )}
                    >
                      {d.task}
                    </span>
                  </button>

                  {zamkniety && (
                    <p className="mt-2 text-sm text-muted">
                      Treść tego dnia otwiera się po zalogowaniu do Aga Club.
                    </p>
                  )}

                  {rozwiniety && (
                    <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4">
                      <TrescWpisu tresc={d.tip} />

                      {d.przepis && (
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                            Przepis na dziś
                          </p>
                          <p className="mt-1 font-medium text-neutral-900">{d.przepis.name}</p>
                          {d.meta && (
                            <p className="mt-0.5 text-sm text-muted">
                              {czasSlownie(d.meta.czasMin)} · {d.meta.wydajnosc}
                              {/^\d+$/.test(d.meta.wydajnosc) ? " porcji" : ""}
                            </p>
                          )}
                          <div className="mt-3">
                            <CookidooButton url={d.przepis.cookidooUrl} />
                          </div>
                        </div>
                      )}

                      <div>
                        <Button
                          type="button"
                          variant={odhaczony ? "secondary" : "primary"}
                          onClick={() => przelaczDzien(d.day)}
                        >
                          {odhaczony ? "Cofnij odhaczenie" : "Zrobione ✓"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {!zalogowany && (
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-5 md:p-6">
          <p className="font-display text-lg text-neutral-900">Pozostałe 29 dni są w Aga Club</p>
          <p className="max-w-2xl text-neutral-700">
            Aga Club to bezpłatna strefa dla osób, które kupiły Thermomix u Agi — oficjalnej
            przedstawicielki Thermomix. Czekają w niej pełne jadłospisy, listy zakupów i to
            wyzwanie w całości.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="/prezentacja">Umów bezpłatną prezentację →</ButtonLink>
            <Link
              href="/strefa-klienta/logowanie"
              className="inline-flex items-center px-2 py-2 text-sm font-medium text-brand-700 underline underline-offset-2"
            >
              Mam już konto
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
