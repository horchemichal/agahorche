import type { Recipe } from "@/types/diet";
import { ChefHatIcon } from "@/components/marketing/icons";

/**
 * No real recipe photography exists yet — per spec §31 ("Nie używaj
 * przypadkowych stockowych zdjęć") we don't hotlink stock photos. Same
 * gradient + ChefHatIcon placeholder pattern already used in
 * components/marketing/hero.tsx for the "no photo picked yet" state.
 *
 * ETAP 11: no longer renders its own CookidooButton — a per-dish "Szukaj w
 * Cookidoo" link under every single meal card was reported as confusing
 * (it always opened the same generic search, not a match for that dish).
 * DietPlanPreview now shows one CookidooButton below the whole day's meals
 * instead — see diet-plan-preview.tsx.
 */
export function RecipeCard({ recipe, compact = false }: { recipe: Recipe; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-neutral-0">
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-brand-50 via-neutral-50 to-brand-100 text-brand-600 ${compact ? "h-24" : "h-32"}`}
        aria-hidden
      >
        <ChefHatIcon width={compact ? 26 : 32} height={compact ? 26 : 32} strokeWidth={1.4} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <p className="text-sm font-medium leading-snug text-neutral-900">{recipe.name}</p>
        {recipe.calories != null && (
          <p className="text-xs text-muted">
            {recipe.calories} kcal
            {recipe.proteinG != null && ` · B: ${recipe.proteinG} g`}
            {recipe.fatG != null && ` · T: ${recipe.fatG} g`}
            {recipe.carbsG != null && ` · W: ${recipe.carbsG} g`}
          </p>
        )}
      </div>
    </div>
  );
}
