"use client";

import { useMemo, useState } from "react";
import { RecipeCard } from "@/components/diets/recipe-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  GRUPY_DAN,
  PROGI_CZASU,
  czasSlownie,
  filtrujPrzepisy,
  wszystkiePrzepisy,
} from "@/lib/przepisy/grupy";

/**
 * OŚ PLIKU
 * „Co ugotować dzisiaj?" — trzy pytania nad bazą 252 przepisów z Cookidoo:
 * ile masz czasu, dla ilu osób gotujesz, na co masz ochotę.
 *
 * DLACZEGO POWSTAŁO (1.09.2026). Pomysł Agi nr 2 z listy modułów Aga Klubu,
 * razem z nr 12 („mam tylko 20 minut") i nr 19 („baza podstaw") — to nie są
 * trzy moduły, tylko trzy ustawienia tych samych filtrów. Do niedawna nie
 * dało się tego zrobić, bo rejestr przepisów znał wyłącznie nazwę, link
 * i kalorie. Czasy i kategorie doszły dopiero z zaciągu z Cookidoo
 * (patrz data/diets/przepisy-meta.ts).
 *
 * DLACZEGO BEZ SZTUCZNEJ INTELIGENCJI. Aga pytała, co da się zrobić bez AI.
 * Tutaj AI nie jest do niczego potrzebne: klikanie gotowych opcji daje ten
 * sam wynik, działa natychmiast, nic nie kosztuje przy każdym użyciu i —
 * co najważniejsze — nie może wymyślić dania, którego nie ma. Każdy kafelek
 * prowadzi do istniejącego przepisu na cookidoo.pl.
 *
 * FILTROWANIE PO STRONIE PRZEGLĄDARKI, ŚWIADOMIE. 252 przepisy to około
 * 30 kB danych — mniej niż jedno zdjęcie. Wysyłamy je razem ze stroną
 * i filtrujemy na miejscu, dzięki czemu klikanie jest natychmiastowe i nie
 * ma żadnego zapytania do serwera. Gdyby baza urosła do kilku tysięcy dań,
 * trzeba to przenieść na serwer — wtedy zmienia się `filtrujPrzepisy`,
 * a nie ten komponent.
 *
 * LIMIT WIDOCZNYCH WYNIKÓW. Pokazujemy 24 kafelki i przycisk „pokaż więcej".
 * Wyrzucenie 250 kart naraz nikomu nie pomaga w wyborze obiadu.
 */

const OSOBY = [2, 4, 6] as const;
const KROK = 24;

export function WyszukiwarkaPrzepisow({ startowaGrupa }: { startowaGrupa?: string }) {
  const [doMinut, setDoMinut] = useState<number | null>(null);
  const [odOsob, setOdOsob] = useState<number | null>(null);
  const [grupy, setGrupy] = useState<string[]>(startowaGrupa ? [startowaGrupa] : []);
  const [ile, setIle] = useState(KROK);

  const wyniki = useMemo(() => filtrujPrzepisy({ doMinut, odOsob, grupy }), [doMinut, odOsob, grupy]);
  const wszystkich = wszystkiePrzepisy().length;

  function przelaczGrupe(id: string) {
    setIle(KROK);
    setGrupy((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  const pigulka = (aktywna: boolean) =>
    cn(
      "rounded-md border px-3.5 py-2 text-sm font-medium transition-colors",
      aktywna
        ? "border-brand-600 bg-brand-600 text-neutral-0"
        : "border-neutral-300 text-neutral-700 hover:border-brand-400",
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-7">
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-neutral-700">1. Ile masz czasu?</p>
            <div className="flex flex-wrap gap-2">
              {PROGI_CZASU.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setIle(KROK);
                    setDoMinut(doMinut === m ? null : m);
                  }}
                  className={pigulka(doMinut === m)}
                >
                  do {m} minut
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIle(KROK);
                  setDoMinut(null);
                }}
                className={pigulka(doMinut === null)}
              >
                Bez znaczenia
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-neutral-700">2. Dla ilu osób?</p>
            <div className="flex flex-wrap gap-2">
              {OSOBY.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setIle(KROK);
                    setOdOsob(odOsob === n ? null : n);
                  }}
                  className={pigulka(odOsob === n)}
                >
                  {n === 6 ? "6 i więcej" : n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIle(KROK);
                  setOdOsob(null);
                }}
                className={pigulka(odOsob === null)}
              >
                Bez znaczenia
              </button>
            </div>
            <p className="mt-2 text-xs text-muted">
              Bierzemy pod uwagę liczbę porcji podaną w przepisie. Dania opisane wydajnością
              („650 g pasty”) nie wchodzą do tego filtru, bo nie wiadomo, ile osób z nich najedzie.
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-neutral-700">3. Na co masz ochotę?</p>
            <div className="flex flex-wrap gap-2">
              {GRUPY_DAN.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => przelaczGrupe(g.id)}
                  className={pigulka(grupy.includes(g.id))}
                >
                  {g.nazwa}
                </button>
              ))}
            </div>
            {grupy.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setIle(KROK);
                  setGrupy([]);
                }}
                className="mt-3 text-sm text-brand-700 underline underline-offset-2"
              >
                Wyczyść wybrane rodzaje dań
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-xl text-neutral-900">
            {wyniki.length === 0
              ? "Nic nie pasuje do tych ustawień"
              : `Pasujące przepisy: ${wyniki.length}`}
          </h2>
          <p className="text-sm text-muted">z {wszystkich} dań w bazie</p>
        </div>

        {wyniki.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-neutral-300 bg-surface p-6 text-sm text-neutral-700">
            Poluzuj jeden z warunków — najczęściej pomaga wydłużenie czasu albo odznaczenie
            liczby osób.
          </p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {wyniki.slice(0, ile).map((w) => (
                <RecipeCard
                  key={w.przepis.id}
                  recipe={w.przepis}
                  compact
                  placeholderLabel={czasSlownie(w.meta.czasMin)}
                  dopisek={w.porcje ? `${w.porcje} porcji` : w.meta.wydajnosc}
                />
              ))}
            </div>
            {ile < wyniki.length && (
              <div className="flex justify-center">
                <Button type="button" variant="secondary" onClick={() => setIle((i) => i + KROK)}>
                  Pokaż kolejne {Math.min(KROK, wyniki.length - ile)}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
