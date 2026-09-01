import type { Meal } from "@/types/diet";

/**
 * OŚ PLIKU
 * Fabryka pozycji jadłospisu. Mieszkała w data/diets/categories.ts, ale
 * od 1.09.2026 potrzebują jej dwa pliki — categories.ts (tygodnie 1)
 * i plany-14-dni.ts (dni 8–14) — a licznik `mealCounter` musi być JEDEN
 * na całą aplikację, żeby `Meal.id` nie zaczął się powtarzać między
 * plikami. Moduł ESM jest singletonem, więc wystarczy trzymać licznik tu.
 *
 * `portions` to krotność porcji: Cookidoo podaje wartości odżywcze na
 * porcję, a porcja bywa mała — 1,5 porcji to nie błąd, tylko realny
 * posiłek. Patrz komentarz przy `Meal.portions` w types/diet.ts.
 */
let mealCounter = 0;

export function meal(type: Meal["type"], recipeId: string, alt?: string, portions?: number): Meal {
  mealCounter += 1;
  return {
    id: `m${mealCounter}-${recipeId}`,
    type,
    recipeId,
    alternativeRecipeIds: alt ? [alt] : undefined,
    portions,
  };
}
