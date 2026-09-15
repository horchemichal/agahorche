/**
 * Aga Club domain types — architecture only (spec §16-21).
 * None of these features are implemented with real logic yet; these types
 * exist so the routes/components built now have a stable contract that
 * later feature work (meal planner, fridge AI...) can
 * fill in without reshaping the app.
 */

export interface AgaClubMember {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
  /** Free-tier vs future paid tier; not decided yet, kept optional. */
  tier?: "free" | "premium";
}

export type AgaClubMemberInput = Omit<AgaClubMember, "id" | "createdAt">;

export type DietaryPreference =
  | "brak-preferencji"
  | "wegetarianskie"
  | "bez-glutenu"
  | "bez-laktozy"
  | "fit";

export interface FridgeQuery {
  ingredients: string[];
  maxTimeMinutes?: number;
  servings?: number;
}

export interface MealSuggestion {
  title: string;
  estimatedTimeMinutes: number;
  servings: number;
  difficulty: "latwe" | "srednie" | "trudne";
  /** Only set when a matching, rights-cleared recipe exists internally. */
  recipeHref?: string;
}

export interface MamaModeInput {
  people: number;
  children: number;
  timeMinutes: number;
  budgetPln?: number;
  likedIngredients?: string[];
  dislikedIngredients?: string[];
}

export interface WeeklyPlanInput {
  people: number;
  budgetPln?: number;
  timeMinutes?: number;
  dietary?: DietaryPreference[];
  excluded?: string[];
}

export interface WeeklyPlanDay {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  breakfast?: MealSuggestion;
  lunch?: MealSuggestion;
  dinner?: MealSuggestion;
}

export interface ThirtyDaysProgress {
  memberId: string;
  currentDay: number; // 1-30
  completedDays: number[];
  badges: string[];
}

export interface ThirtyDaysDay {
  day: number; // 1-30
  task: string;
  videoUrl?: string;
  tip: string;
  dish?: MealSuggestion;
  checklist: string[];
}

/** Feature flags so unfinished Aga Club modules can ship disabled. */
export interface AgaClubFeatureFlags {
  coDzisUgotowac: boolean;
  mojaLodowka: boolean;
}
