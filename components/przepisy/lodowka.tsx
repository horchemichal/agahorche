"use client";

import { useMemo, useState } from "react";
import { RecipeCard } from "@/components/diets/recipe-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { czasSlownie } from "@/lib/przepisy/grupy";
import { dopasujZLodowki, produktyWgGrup } from "@/lib/przepisy/lodowka";
import { TylkoDlaKlubu } from "@/components/przepisy/tylko-dla-klubu";

/**
 * OŚ PLIKU
 * „Co mam w lodówce?" — klikasz produkty, dostajesz dania, które da się
 * z nich zrobić, i widzisz, czego brakuje.
 *
 * DLACZEGO KLIKANIE, A NIE WPISYWANIE. Patrz komentarz w lib/przepisy/lodowka.ts:
 * ta wersja nie potrafi wymyślić dania, którego nie ma, i nie kosztuje
 * ani grosza przy każdym użyciu.
 *
 * DWIE RZECZY, KTÓRE ROBIĄ TU RÓŻNICĘ:
 *
 * 1. „Brakuje mi najwyżej N rzeczy". Sam zestaw z lodówki rzadko wystarcza
 *    na całe danie — realne pytanie brzmi „co dokupić, żeby to ugotować".
 *    Zaczyna od 5, bo przepisy mają średnio dziesięć składników: przy
 *    niższym progu z listy wypadały dania zużywające NAJWIĘCEJ rzeczy
 *    z lodówki, a zostawały dwuskładnikowe drobiazgi. Kto chce wyłącznie
 *    komplety, klika zero i dostaje wyłącznie je.
 *
 * 2. Podstawy (sól, pieprz, olej, mąka, przyprawy) są domyślnie uznane
 *    za dostępne — inaczej przy każdym daniu widniałoby „brakuje: woda,
 *    sól". Można je odznaczyć i wtedy liczymy dosłownie wszystko.
 *
 * FILTR TEKSTOWY nad listą produktów: 133 pozycji to dużo do przewijania
 * na telefonie, a każdy wie, jak nazywa się to, czego szuka.
 */

export function CoMamWLodowce({ zalogowany = true }: { zalogowany?: boolean }) {
  const [wybrane, setWybrane] = useState<string[]>([]);
  const [zPodstawami, setZPodstawami] = useState(true);
  const [ileBrakow, setIleBrakow] = useState(5);
  const [szukaj, setSzukaj] = useState("");
  const [ile, setIle] = useState(18);

  const grupy = useMemo(() => produktyWgGrup(), []);
  const fraza = szukaj.trim().toLowerCase();

  const wyniki = useMemo(
    () => dopasujZLodowki({ wybrane, zPodstawami, ileBrakow }),
    [wybrane, zPodstawami, ileBrakow],
  );

  function przelacz(id: string) {
    setIle(18);
    setWybrane((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  const bezBrakow = wyniki.filter((w) => w.brakuje.length === 0).length;

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-neutral-700">
            Zaznacz, co masz{" "}
            {wybrane.length > 0 && (
              <span className="text-brand-700">— wybrano {wybrane.length}</span>
            )}
          </p>
          <div className="flex items-center gap-3">
            {wybrane.length > 0 && (
              <button
                type="button"
                onClick={() => setWybrane([])}
                className="text-sm text-brand-700 underline underline-offset-2"
              >
                Wyczyść
              </button>
            )}
            <input
              type="search"
              value={szukaj}
              onChange={(e) => setSzukaj(e.currentTarget.value)}
              placeholder="Szukaj produktu…"
              aria-label="Szukaj produktu"
              className="w-44 rounded-md border border-neutral-300 px-3 py-1.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {grupy.map(({ grupa, produkty }) => {
            const widoczne = fraza
              ? produkty.filter((p) => p.nazwa.toLowerCase().includes(fraza))
              : produkty;
            if (widoczne.length === 0) return null;
            return (
              <div key={grupa}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {grupa}
                </p>
                <div className="flex flex-wrap gap-2">
                  {widoczne.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => przelacz(p.id)}
                      aria-pressed={wybrane.includes(p.id)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm transition-colors",
                        wybrane.includes(p.id)
                          ? "border-brand-600 bg-brand-600 font-medium text-neutral-0"
                          : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                      )}
                    >
                      {p.nazwa}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-2.5 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={zPodstawami}
              onChange={(e) => setZPodstawami(e.currentTarget.checked)}
              className="h-4 w-4 accent-brand-600"
            />
            Mam podstawy: sól, pieprz, olej, mąkę, cukier i suszone przyprawy
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-700">Mogę dokupić najwyżej</span>
            {[0, 1, 2, 3, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setIle(18);
                  setIleBrakow(n);
                }}
                className={cn(
                  "h-8 w-8 rounded-md border text-sm font-medium transition-colors",
                  ileBrakow === n
                    ? "border-brand-600 bg-brand-600 text-neutral-0"
                    : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {wybrane.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-neutral-300 bg-surface p-6 text-center text-sm text-neutral-700">
          Zaznacz przynajmniej jeden produkt, a pokażę dania, które da się z niego zrobić.
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl text-neutral-900">
              {wyniki.length === 0
                ? "Nic nie pasuje do tego zestawu"
                : `Możesz zrobić: ${wyniki.length}`}
            </h2>
            {bezBrakow > 0 && (
              <p className="text-sm text-brand-700">
                {bezBrakow} {bezBrakow === 1 ? "danie" : "dań"} bez dokupywania czegokolwiek
              </p>
            )}
          </div>

          {/* Liczbę dań podaje nagłówek wyżej — kafel jej nie powtarza. */}
          {!zalogowany ? (
            <TylkoDlaKlubu coBySie="Lista dań jest w Aga Club" />
          ) : wyniki.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-neutral-300 bg-surface p-6 text-sm text-neutral-700">
              Zaznacz więcej produktów albo pozwól dokupić jedną rzecz więcej.
            </p>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {wyniki.slice(0, ile).map((w) => (
                  <div key={w.przepis.id} className="flex flex-col gap-2">
                    <RecipeCard
                      recipe={w.przepis}
                      compact
                      placeholderLabel={czasSlownie(w.meta.czasMin)}
                      dopisek={w.porcje ? `${w.porcje} porcji` : w.meta.wydajnosc}
                    />
                    <p className="text-xs leading-relaxed text-neutral-600">
                      {w.brakuje.length === 0 ? (
                        <span className="font-medium text-brand-700">Masz wszystko</span>
                      ) : (
                        <>
                          <span className="font-medium text-neutral-800">Brakuje:</span>{" "}
                          {w.brakuje.join(", ")}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              {ile < wyniki.length && (
                <div className="flex justify-center">
                  <Button type="button" variant="secondary" onClick={() => setIle((i) => i + 18)}>
                    Pokaż kolejne {Math.min(18, wyniki.length - ile)}
                  </Button>
                </div>
              )}
            </>
          )}

          <p className="text-xs text-muted">
            Lista składników pochodzi z przepisów na Cookidoo i służy do dopasowania, a nie do
            gotowania — dokładne ilości i kolejność znajdziesz w samym przepisie.
          </p>
        </div>
      )}
    </div>
  );
}
