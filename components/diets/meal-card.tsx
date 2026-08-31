import type { Meal } from "@/types/diet";
import { MEAL_TYPE_LABELS } from "@/types/diet";
import { getRecipe } from "@/data/diets/recipes";
import { RecipeCard } from "./recipe-card";
import { SwapIcon } from "@/components/marketing/icons";

/**
 * Renders one meal slot, optionally swapped to its alternative recipe
 * (spec §16, "Zamień danie"). Swap state is lifted to the parent
 * (DietPlanPreview) so the day's macro totals can recalculate — this
 * component is presentational; it just reflects `isAlt`.
 */
export function MealCard({
  meal,
  isAlt,
  onToggleAlt,
}: {
  meal: Meal;
  isAlt: boolean;
  onToggleAlt?: () => void;
}) {
  const altId = meal.alternativeRecipeIds?.[0];
  const activeId = isAlt && altId ? altId : meal.recipeId;
  const recipe = getRecipe(activeId);
  if (!recipe) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {MEAL_TYPE_LABELS[meal.type]}
        </p>
        {altId && onToggleAlt && (
          <button
            type="button"
            onClick={onToggleAlt}
            className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-brand-700"
          >
            <SwapIcon width={13} height={13} />
            {isAlt ? "Wróć do dania" : "Zamień danie"}
          </button>
        )}
      </div>
      <RecipeCard recipe={recipe} compact portions={meal.portions ?? 1} />
    </div>
  );
}
