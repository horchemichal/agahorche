/**
 * Data model for the "Diety na Thermomix" module (spec §20, delivered
 * 2026-08-19). Nothing diet/recipe-related lives inline in a component —
 * everything is typed here and sourced from /data/diets/*, exactly like
 * the location engine (types/location.ts) and SEO engine (types/seo.ts)
 * already do for their domains.
 *
 * IMPORTANT — spec §23/§42 ("nie wymyślaj danych"): example plan content
 * (data/diets/recipes.ts, data/diets/categories.ts) is Aga-brand
 * illustrative content — plausible dish names/macros authored to
 * demonstrate the system, NOT lab-verified nutrition facts or Aga's real,
 * reviewed recipes yet. Every plan built from it carries
 * `isExampleData: true` and every public surface renders a visible
 * disclaimer (see components/diets/example-data-notice.tsx) — the same
 * "orientacyjny" idiom already used by the installment calculator
 * (components/marketing/installment-calculator.tsx) for its computed
 * numbers. No calorie/macro is presented as medically verified. Cookidoo
 * links are `null` (component renders "wkrótce", never a fabricated URL —
 * see components/diets/cookidoo-button.tsx). No recipe is marked
 * `glutenFree` here — that requires real ingredient verification (spec
 * §10) that hasn't happened yet.
 */

export type ThermomixModel = "TM31" | "TM5" | "TM6" | "TM7";

export const THERMOMIX_MODELS: ThermomixModel[] = ["TM31", "TM5", "TM6", "TM7"];

export type MealType = "sniadanie" | "drugie-sniadanie" | "obiad" | "podwieczorek" | "kolacja";

export const MEAL_TYPE_LABELS: Record<MealType, string> = {
  sniadanie: "Śniadanie",
  "drugie-sniadanie": "II śniadanie",
  obiad: "Obiad",
  podwieczorek: "Podwieczorek",
  kolacja: "Kolacja",
};

export const MEAL_TYPE_ORDER: MealType[] = [
  "sniadanie",
  "drugie-sniadanie",
  "obiad",
  "podwieczorek",
  "kolacja",
];

/**
 * Every category needs a different configurator (spec §6) — this picks
 * which step-2/3 controls DietConfigurator renders for a given category.
 * "calories" = dorośli (1500/2000 kcal). "children"/"breastfeeding"/
 * "weaning" deliberately never show a calorie control.
 */
export type ConfiguratorMode = "calories" | "children" | "breastfeeding" | "weaning";

export type PlanVisibility = "PUBLIC" | "CLIENT_ONLY" | "COMING_SOON";

export interface Recipe {
  id: string;
  name: string;
  cookidooUrl: string | null;
  compatibleModels: ThermomixModel[];
  calories: number | null;
  proteinG: number | null;
  fatG: number | null;
  carbsG: number | null;
  vegetarian?: boolean;
  keto?: boolean;
  /** Only ever `true` once ingredients are actually verified (spec §10). */
  glutenFree?: boolean;
  childFriendly?: boolean;
}

export interface Meal {
  id: string;
  type: MealType;
  recipeId: string;
  /** "Zamień danie" (spec §16) — ids into the same recipe registry. */
  alternativeRecipeIds?: string[];

  /**
   * Ile porcji przepisu składa się na ten posiłek. Domyślnie 1.
   *
   * DLACZEGO TO ISTNIEJE. Cookidoo podaje wartości odżywcze NA PORCJĘ,
   * a porcje bywają małe — „Jajecznica na parze" to 169 kcal, „Zupa krem
   * z cukinii" 96 kcal. Pięć takich pozycji wygląda jak sensowny jadłospis,
   * ale daje ~830 kcal, nie 1500. Dopóki wartości były wymyślone, problem
   * był niewidoczny: liczby dobierano tak, żeby suma się zgadzała.
   *
   * Krotność porcji jest drugim regulatorem obok wyboru dania i pozwala
   * trafić w cel kaloryczny bez zmyślania. Tak działają prawdziwe
   * jadłospisy — półtorej porcji zupy to normalna rzecz.
   *
   * Wartości odżywcze mnożymy przez tę liczbę wszędzie, gdzie się je
   * sumuje albo pokazuje.
   */
  portions?: number;
}

export interface DietDay {
  dayNumber: number;
  /** Empty + `locked: true` for days gated behind the client zone (spec §13). */
  meals: Meal[];
  locked?: boolean;
}

export interface DietPlan {
  id: string;
  categoryId: DietCategoryId;
  /** e.g. "7 dni / 1500 kcal" — shown in the configurator summary. */
  label: string;
  durationDays: number;
  caloriesTarget: number | null;
  thermomixModels: ThermomixModel[];
  visibility: PlanVisibility;
  days: DietDay[];
  isExampleData: boolean;
}

export type DietCategoryId =
  | "keto"
  | "wegetarianska"
  | "odchudzajaca"
  | "niski-ig"
  | "hashimoto"
  | "zamienniki"
  | "bezglutenowa"
  | "dla-dzieci"
  | "kobiety-karmiace"
  | "niemowleta";

/** Icon key resolved to a component in components/diets/category-icon.tsx. */
export type DietCategoryIconKey =
  | "keto"
  | "leaf"
  | "scale"
  | "lightning"
  | "check"
  | "swap"
  | "badge"
  | "users"
  | "heart"
  | "sprout";

export interface DietCategory {
  id: DietCategoryId;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  configuratorMode: ConfiguratorMode;
  icon: DietCategoryIconKey;
  /** Extra caution copy (spec §24) — rendered under the category hero when set. */
  medicalDisclaimer?: string;
  /** Public example plans only — the full library is CLIENT_ONLY (spec §3). */
  plans: DietPlan[];
}
