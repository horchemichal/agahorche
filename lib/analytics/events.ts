export {
  type AnalyticsEventName,
  type AnalyticsEvent,
  type AnalyticsEventPayloadMap,
} from "@/types/analytics";

/**
 * Central place documenting what each event means and when it fires.
 * Purely descriptive — used for onboarding/QA, not read by code.
 */
export const EVENT_CATALOG: Record<string, string> = {
  page_view: "Fires once per route render (handled by GA4 automatically + custom for SPA nav).",
  city_page_view: "Fires on mount of a /thermomix/[location] page — carries tier + hierarchy.",
  click_phone: "User taps/clicks a phone CTA.",
  click_presentation: "User clicks any 'Umów prezentację' CTA (before form submit).",
  submit_lead: "Lead form successfully submitted.",
  signup: "Aga Club account created.",
  login: "Aga Club login.",
  aga_club_open: "User opens the Aga Club hub or one of its tools.",
  use_ai: "Any Aga AI interaction.",
  use_fridge: "'Moja lodówka' tool used.",
  use_meal_planner: "Weekly/day meal planner generated.",
  start_30_days: "User starts the 30 dni z Agą challenge.",
  complete_30_days: "User completes the challenge.",
  click_recipe: "User opens a recipe.",
  click_tm7: "User engages with TM7 content/CTA.",
  click_tm6: "User engages with TM6 content/CTA.",
};
