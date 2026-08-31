"use client";

import { useMemo, useState } from "react";
import type { DietPlan } from "@/types/diet";
import { getRecipe } from "@/data/diets/recipes";
import { DayNavigation } from "./day-navigation";
import { MealCard } from "./meal-card";
import { ClientOnlyBadge } from "./client-only-badge";
import { ExampleDataNotice } from "./example-data-notice";
import { ShoppingList } from "./shopping-list";
import { CookidooButton } from "./cookidoo-button";
import { ButtonLink } from "@/components/ui/button";
import { CalendarIcon } from "@/components/marketing/icons";

/**
 * Interactive plan preview (spec §13, §30 "DietPlanPreview" + "DayNavigation").
 * Only day 1 has real meals in a PUBLIC plan — days 2+ are `locked` and
 * clicking one shows the "pełny plan w Strefie Klienta" gate instead of
 * content (spec §13: never blank-block day 1 itself, always show real value
 * first). Swap ("Zamień danie") state is lifted here so the day's macro
 * totals recompute live from the two recipes' own known numbers.
 *
 * `forceUnlocked` (ETAP 8, Strefa Klienta): renders every day's real meals
 * regardless of `day.locked`, for plans that actually carry full-week
 * content (see days2to7 in data/diets/categories.ts). A day that's
 * `locked` but still has no meals (categories without full-week content
 * yet) falls back to an honest "plan się przygotowuje" state instead of
 * either the public gate or a blank screen.
 *
 * ETAP 11: a single CookidooButton now sits below the whole meal grid
 * instead of one under every dish (see recipe-card.tsx) — it's a generic
 * Cookidoo search, not a per-recipe match, so showing it once per day
 * rather than once per meal is the honest framing.
 */
export function DietPlanPreview({ plan, forceUnlocked = false }: { plan: DietPlan; forceUnlocked?: boolean }) {
  const [activeDay, setActiveDay] = useState(1);
  const [altMealIds, setAltMealIds] = useState<Set<string>>(new Set());

  const day = plan.days.find((d) => d.dayNumber === activeDay) ?? plan.days[0];
  const hasContent = Boolean(day?.meals.length);
  const isLocked = forceUnlocked ? false : Boolean(day?.locked);
  const isPreparing = forceUnlocked && Boolean(day?.locked) && !hasContent;

  const totals = useMemo(() => {
    if (!day) return { calories: 0, protein: 0, fat: 0, carbs: 0 };
    return day.meals.reduce(
      (acc, m) => {
        const recipeId = altMealIds.has(m.id) && m.alternativeRecipeIds?.[0] ? m.alternativeRecipeIds[0] : m.recipeId;
        const recipe = getRecipe(recipeId);
        // Krotność porcji — patrz komentarz przy `Meal.portions` w types/diet.ts.
        const n = m.portions ?? 1;
        return {
          calories: acc.calories + (recipe?.calories ?? 0) * n,
          protein: acc.protein + (recipe?.proteinG ?? 0) * n,
          fat: acc.fat + (recipe?.fatG ?? 0) * n,
          carbs: acc.carbs + (recipe?.carbsG ?? 0) * n,
        };
      },
      { calories: 0, protein: 0, fat: 0, carbs: 0 },
    );
  }, [day, altMealIds]);

  function toggleAlt(mealId: string) {
    setAltMealIds((prev) => {
      const next = new Set(prev);
      if (next.has(mealId)) next.delete(mealId);
      else next.add(mealId);
      return next;
    });
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
      <div className="rounded-2xl bg-surface p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-display text-lg text-neutral-900">Twój plan dietetyczny</h3>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <CalendarIcon width={14} height={14} />
            {plan.durationDays} dni
          </span>
        </div>

        <DayNavigation days={plan.days} activeDay={activeDay} onSelect={setActiveDay} forceUnlocked={forceUnlocked} />

        {!isLocked && hasContent && (
          <div className="mt-5 grid grid-cols-4 gap-2 text-center">
            <div className="rounded-lg border border-border bg-neutral-0 p-2.5">
              <p className="font-display text-lg text-neutral-900">{Math.round(totals.calories)}</p>
              <p className="text-[0.65rem] text-muted">kcal</p>
            </div>
            <div className="rounded-lg border border-border bg-neutral-0 p-2.5">
              <p className="font-display text-lg text-neutral-900">{Math.round(totals.protein)} g</p>
              <p className="text-[0.65rem] text-muted">białko</p>
            </div>
            <div className="rounded-lg border border-border bg-neutral-0 p-2.5">
              <p className="font-display text-lg text-neutral-900">{Math.round(totals.fat)} g</p>
              <p className="text-[0.65rem] text-muted">tłuszcze</p>
            </div>
            <div className="rounded-lg border border-border bg-neutral-0 p-2.5">
              <p className="font-display text-lg text-neutral-900">{Math.round(totals.carbs)} g</p>
              <p className="text-[0.65rem] text-muted">węglowodany</p>
            </div>
          </div>
        )}

        {!isLocked && hasContent && (
          <ul className="mt-5 flex flex-col gap-3">
            {day?.meals.map((m) => (
              <li key={m.id} className="flex items-center justify-between gap-2 text-sm">
                <span className="text-neutral-700">
                  {getRecipe(altMealIds.has(m.id) && m.alternativeRecipeIds?.[0] ? m.alternativeRecipeIds[0] : m.recipeId)?.name}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5">
          <ExampleDataNotice />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-6">
        {isLocked ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
            <ClientOnlyBadge />
            <p className="max-w-sm text-balance font-display text-xl text-neutral-900">
              Chcesz zobaczyć pozostałe dni?
            </p>
            <p className="max-w-sm text-sm text-muted">
              Dzień {activeDay} tego planu, wraz z pozostałymi wariantami kalorycznymi i modelami
              Thermomix, jest dostępny w Strefie Klienta — dla klientek i klientów, którzy kupili
              Thermomixa u Agi.
            </p>
            {/* Sierpień 2026: bez „Załóż konto” — konta zakłada Aga (patrz client-zone-teaser.tsx). */}
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
          <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
            <p className="max-w-sm text-balance font-display text-xl text-neutral-900">
              Ten dzień jest w przygotowaniu
            </p>
            <p className="max-w-sm text-sm text-muted">
              Ta kategoria diety ma na razie gotowy tylko Dzień 1 — pozostałe dni dodajemy stopniowo.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm font-semibold text-neutral-900">Podgląd planu — Dzień {activeDay}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {day?.meals.map((m) => (
                <MealCard key={m.id} meal={m} isAlt={altMealIds.has(m.id)} onToggleAlt={() => toggleAlt(m.id)} />
              ))}
            </div>
            <div className="mt-5 flex justify-center border-t border-border pt-5">
              <CookidooButton url={null} />
            </div>
          </>
        )}
      </div>

      {!isLocked && hasContent && (
        <div className="lg:col-span-2">
          <ShoppingList planId={plan.id} />
        </div>
      )}
    </div>
  );
}
