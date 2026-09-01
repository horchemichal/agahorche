"use client";

import { useMemo, useState } from "react";
import type { DietDay, DietPlan } from "@/types/diet";
import { getRecipe } from "@/data/diets/recipes";
import { DayNavigation } from "./day-navigation";
import { MealCard } from "./meal-card";
import { ClientOnlyBadge } from "./client-only-badge";
import { ExampleDataNotice } from "./example-data-notice";
import { ShoppingList } from "./shopping-list";
import { ButtonLink, Button } from "@/components/ui/button";
import { CalendarIcon } from "@/components/marketing/icons";

/**
 * Podgląd jadłospisu (spec §13, §30).
 *
 * `forceUnlocked` (Strefa Klienta): pokazuje dni 2–7 mimo `locked`.
 * Dzień `locked` bez posiłków to uczciwy stan „w przygotowaniu", a nie
 * pusty ekran.
 *
 * 31.08.2026, trzy zmiany po uwagach Agi:
 *
 * 1. UKŁAD PIONOWY. Podsumowanie stało wcześniej OBOK kart dań w siatce
 *    `[1fr_1.6fr]`, przez co karty robiły się wąskie i nazwy dań łamały się
 *    na pięć linii. Teraz podsumowanie jest na górze, karty pod spodem na
 *    pełnej szerokości.
 *
 * 2. WIDOK CAŁEGO TYGODNIA. Przełącznik „Dzień po dniu / Cały tydzień".
 *    Wcześniej dało się oglądać wyłącznie jeden dzień naraz, co przy pełnym
 *    planie w Strefie Klienta oznaczało siedem kliknięć, żeby zobaczyć,
 *    co się w ogóle je w tym tygodniu.
 *
 * 3. BEZ PRZYCISKU „Szukaj w Cookidoo" pod siatką dań. Każde danie ma
 *    teraz własny link do konkretnego przepisu (patrz cookidoo-button.tsx),
 *    więc zbiorczy link do całej platformy był powtórzeniem.
 */

const PUSTE = { calories: 0, protein: 0, fat: 0, carbs: 0 };

/** Sumy dnia z uwzględnieniem krotności porcji i podmienionych dań. */
function sumyDnia(day: DietDay | undefined, altMealIds: Set<string>) {
  if (!day) return PUSTE;
  return day.meals.reduce((acc, m) => {
    const recipeId =
      altMealIds.has(m.id) && m.alternativeRecipeIds?.[0] ? m.alternativeRecipeIds[0] : m.recipeId;
    const recipe = getRecipe(recipeId);
    const n = m.portions ?? 1;
    return {
      calories: acc.calories + (recipe?.calories ?? 0) * n,
      protein: acc.protein + (recipe?.proteinG ?? 0) * n,
      fat: acc.fat + (recipe?.fatG ?? 0) * n,
      carbs: acc.carbs + (recipe?.carbsG ?? 0) * n,
    };
  }, { ...PUSTE });
}

function Kafelki({ t }: { t: typeof PUSTE }) {
  const pola: [number, string][] = [
    [Math.round(t.calories), "kcal"],
    [Math.round(t.protein), "białko (g)"],
    [Math.round(t.fat), "tłuszcze (g)"],
    [Math.round(t.carbs), "węglowodany (g)"],
  ];
  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      {pola.map(([v, label]) => (
        <div key={label} className="rounded-lg border border-border bg-neutral-0 p-2.5">
          <p className="font-display text-lg text-neutral-900">{v}</p>
          <p className="text-[0.65rem] text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}

export function DietPlanPreview({ plan, forceUnlocked = false }: { plan: DietPlan; forceUnlocked?: boolean }) {
  const [activeDay, setActiveDay] = useState(1);
  const [altMealIds, setAltMealIds] = useState<Set<string>>(new Set());
  const [tydzien, setTydzien] = useState(false);

  const day = plan.days.find((d) => d.dayNumber === activeDay) ?? plan.days[0];
  const hasContent = Boolean(day?.meals.length);
  const isLocked = forceUnlocked ? false : Boolean(day?.locked);
  const isPreparing = forceUnlocked && Boolean(day?.locked) && !hasContent;

  const totals = useMemo(() => sumyDnia(day, altMealIds), [day, altMealIds]);

  /** Dni, które realnie da się pokazać w widoku tygodnia. */
  const dniTygodnia = useMemo(
    () => plan.days.filter((d) => d.meals.length > 0 && (forceUnlocked || !d.locked)),
    [plan.days, forceUnlocked],
  );
  const tydzienMozliwy = dniTygodnia.length > 1;

  function toggleAlt(mealId: string) {
    setAltMealIds((prev) => {
      const next = new Set(prev);
      if (next.has(mealId)) next.delete(mealId);
      else next.add(mealId);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-5">
      {/* --- podsumowanie: pas na całą szerokość, nad kartami dań --- */}
      <div className="rounded-2xl bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-lg text-neutral-900">Twój plan dietetyczny</h3>
          <div className="flex items-center gap-3">
            {tydzienMozliwy && (
              <div className="flex rounded-full border border-border bg-neutral-0 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setTydzien(false)}
                  className={`rounded-full px-3 py-1.5 font-medium transition-colors ${!tydzien ? "bg-brand-600 text-neutral-0" : "text-neutral-600 hover:text-brand-700"}`}
                >
                  Dzień po dniu
                </button>
                <button
                  type="button"
                  onClick={() => setTydzien(true)}
                  className={`rounded-full px-3 py-1.5 font-medium transition-colors ${tydzien ? "bg-brand-600 text-neutral-0" : "text-neutral-600 hover:text-brand-700"}`}
                >
                  Cały tydzień
                </button>
              </div>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <CalendarIcon width={14} height={14} />
              {plan.durationDays} dni
            </span>
          </div>
        </div>

        {!tydzien && (
          <>
            <div className="mt-4">
              <DayNavigation days={plan.days} activeDay={activeDay} onSelect={setActiveDay} forceUnlocked={forceUnlocked} />
            </div>
            {!isLocked && hasContent && (
              <div className="mt-5">
                <Kafelki t={totals} />
              </div>
            )}
          </>
        )}

        <div className="mt-5">
          <ExampleDataNotice />
        </div>
      </div>

      {/* --- widok tygodnia --- */}
      {tydzien ? (
        <div className="flex flex-col gap-5">
          {dniTygodnia.map((d) => {
            const t = sumyDnia(d, altMealIds);
            return (
              <div key={d.dayNumber} className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-6">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-lg text-neutral-900">Dzień {d.dayNumber}</p>
                  <p className="text-sm text-muted">
                    {Math.round(t.calories)} kcal · B {Math.round(t.protein)} g · T {Math.round(t.fat)} g · W{" "}
                    {Math.round(t.carbs)} g
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {d.meals.map((m) => (
                    <MealCard key={m.id} meal={m} isAlt={altMealIds.has(m.id)} onToggleAlt={() => toggleAlt(m.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* --- widok jednego dnia --- */
        <div className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-6">
          {isLocked ? (
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
              <ClientOnlyBadge />
              <p className="max-w-sm text-balance font-display text-xl text-neutral-900">
                Chcesz zobaczyć pozostałe dni?
              </p>
              <p className="max-w-sm text-sm text-muted">
                Dzień {activeDay} tego planu, wraz z pozostałymi wariantami kalorycznymi i modelami
                Thermomix, jest dostępny w Aga Club — dla klientek i klientów, którzy kupili
                Thermomixa u Agi.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                <ButtonLink href="/strefa-klienta/logowanie" size="lg">
                  Zaloguj się →
                </ButtonLink>
                <ButtonLink href="/prezentacja" variant="outline" size="lg">
                  Umów prezentację
                </ButtonLink>
              </div>
            </div>
          ) : isPreparing ? (
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
              <p className="max-w-sm text-balance font-display text-xl text-neutral-900">
                Ten dzień jest w przygotowaniu
              </p>
              <p className="max-w-sm text-sm text-muted">
                Ta kategoria diety ma na razie gotowy tylko Dzień 1 — pozostałe dni dodajemy stopniowo.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-neutral-900">Podgląd planu — Dzień {activeDay}</p>
                {tydzienMozliwy && (
                  <Button type="button" variant="ghost" onClick={() => setTydzien(true)} className="!px-2 !py-1 text-xs">
                    Zobacz cały tydzień →
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {day?.meals.map((m) => (
                  <MealCard key={m.id} meal={m} isAlt={altMealIds.has(m.id)} onToggleAlt={() => toggleAlt(m.id)} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {!isLocked && hasContent && <ShoppingList planId={plan.id} />}
    </div>
  );
}
