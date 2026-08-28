/**
 * Analytics event catalog (spec §23). Kept as a discriminated union so
 * `track()` calls are type-checked end to end — no magic strings at call
 * sites.
 */

export type AnalyticsEventName =
  | "page_view"
  | "city_page_view"
  | "click_phone"
  | "click_presentation"
  | "submit_lead"
  | "signup"
  | "login"
  | "aga_club_open"
  | "use_ai"
  | "use_fridge"
  | "use_meal_planner"
  | "start_30_days"
  | "complete_30_days"
  | "click_recipe"
  | "click_tm7"
  | "click_tm6";

export interface AnalyticsEventPayloadMap {
  page_view: { path: string };
  city_page_view: { citySlug: string; wojewodztwoSlug: string | null; tier: string };
  click_phone: { path: string; placement: string };
  click_presentation: { path: string; placement: string };
  submit_lead: { source: string; sourcePath: string; city?: string };
  signup: { method: "email" };
  login: { method: "email" };
  aga_club_open: { feature?: string };
  use_ai: { feature: string };
  use_fridge: { ingredientCount: number };
  use_meal_planner: { type: "week" | "day" };
  start_30_days: { day: 1 };
  complete_30_days: Record<string, never>;
  click_recipe: { recipeSlug: string };
  click_tm7: { path: string };
  click_tm6: { path: string };
}

export type AnalyticsEvent<K extends AnalyticsEventName = AnalyticsEventName> = {
  name: K;
  payload: AnalyticsEventPayloadMap[K];
};
