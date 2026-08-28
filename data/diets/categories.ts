import type { DietCategory, DietDay, DietPlan, Meal } from "@/types/diet";
import { THERMOMIX_MODELS } from "@/types/diet";

let mealCounter = 0;
function meal(type: Meal["type"], recipeId: string, alt?: string): Meal {
  mealCounter += 1;
  return {
    id: `m${mealCounter}-${recipeId}`,
    type,
    recipeId,
    alternativeRecipeIds: alt ? [alt] : undefined,
  };
}

/**
 * Builds a 7-day plan with day 1 fully populated and days 2–7 marked
 * `locked: true` for PUBLIC rendering (spec §13: "Nie blokuj całkowicie
 * pierwszego dnia" — the visitor sees one complete, real day, then the
 * rest gate behind the client zone CTA).
 *
 * ETAP 8 (2026-08-19): `days2to7` lets a plan carry REAL meals for those
 * locked days too — `locked` now means "requires Strefa Klienta login",
 * not "no data exists". components/diets/diet-plan-preview.tsx renders
 * the exact same DietDay objects in both places: the public page always
 * respects `locked` (days 2-7 stay gated), while the client dashboard
 * passes `forceUnlocked` to reveal them for logged-in accounts. Categories
 * without full-week content yet just omit `days2to7` (defaults to empty,
 * unchanged from ETAP 3/4 behavior).
 */
function weekPlan(opts: {
  id: string;
  categoryId: DietPlan["categoryId"];
  label: string;
  /** `null` for categories whose configurator has no calorie dimension (children/breastfeeding/weaning — spec §6). */
  caloriesTarget: number | null;
  day1: Meal[];
  days2to7?: Meal[][];
}): DietPlan {
  const days: DietDay[] = [{ dayNumber: 1, meals: opts.day1 }];
  for (let d = 2; d <= 7; d += 1) {
    days.push({ dayNumber: d, meals: opts.days2to7?.[d - 2] ?? [], locked: true });
  }
  return {
    id: opts.id,
    categoryId: opts.categoryId,
    label: opts.label,
    durationDays: 7,
    caloriesTarget: opts.caloriesTarget,
    thermomixModels: THERMOMIX_MODELS,
    visibility: "PUBLIC",
    days,
    isExampleData: true,
  };
}

/** Builds one day's 5 meals from a category's `d{day}-{slot}` recipe id convention. */
function fullDay(prefix: string, day: number): Meal[] {
  return [
    meal("sniadanie", `${prefix}-d${day}-sniadanie`),
    meal("drugie-sniadanie", `${prefix}-d${day}-drugie-sniadanie`),
    meal("obiad", `${prefix}-d${day}-obiad`),
    meal("podwieczorek", `${prefix}-d${day}-podwieczorek`),
    meal("kolacja", `${prefix}-d${day}-kolacja`),
  ];
}

const KETO_1500 = weekPlan({
  id: "keto-7d-1500",
  categoryId: "keto",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "keto-d1-sniadanie", "keto-d1-sniadanie-alt"),
    meal("drugie-sniadanie", "keto-d1-drugie-sniadanie", "keto-d1-drugie-sniadanie-alt"),
    meal("obiad", "keto-d1-obiad", "keto-d1-obiad-alt"),
    meal("podwieczorek", "keto-d1-podwieczorek", "keto-d1-podwieczorek-alt"),
    meal("kolacja", "keto-d1-kolacja", "keto-d1-kolacja-alt"),
  ],
  // ETAP 8 — dni 2-7, odblokowywane wyłącznie w Strefie Klienta (recipe ids: data/diets/recipes.ts).
  days2to7: [2, 3, 4, 5, 6, 7].map((d) => fullDay("keto", d)),
});

const WEGE_1500 = weekPlan({
  id: "wegetarianska-7d-1500",
  categoryId: "wegetarianska",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "wege-d1-sniadanie", "wege-d1-sniadanie-alt"),
    meal("drugie-sniadanie", "wege-d1-drugie-sniadanie", "wege-d1-drugie-sniadanie-alt"),
    meal("obiad", "wege-d1-obiad", "wege-d1-obiad-alt"),
    meal("podwieczorek", "wege-d1-podwieczorek", "wege-d1-podwieczorek-alt"),
    meal("kolacja", "wege-d1-kolacja", "wege-d1-kolacja-alt"),
  ],
  days2to7: [2, 3, 4, 5, 6, 7].map((d) => fullDay("wege", d)),
});

/**
 * ETAP 9 (2026-08-19): Day-1 example plans for the remaining categories.
 * Only Dzień 1 — no days2to7 — matching the original ETAP 3/4 scope for
 * keto/wege before their ETAP 8 client-zone expansion; these can get the
 * same days2to7 treatment in a later, separately-evaluated step (spec
 * §43/§47: stage rollout, don't build everything at once). Three meal
 * slots (śniadanie/obiad/kolacja) instead of five, to keep this batch of
 * new example content proportionate.
 *
 * `niemowleta` (infant weaning) deliberately still ships with NO example
 * plan at all — seeing specific quantities/ages/textures for infant
 * feeding carries real safety considerations (choking hazards, allergen
 * introduction timing, honey/salt/sugar limits) that a generic
 * "illustrative" example can't responsibly wave off with a disclaimer the
 * way an adult meal's calorie count can. The category page still works —
 * configurator, FAQ, CTA — it just doesn't invent a meal-by-meal plan.
 */
const ODCHUDZAJACA_1500 = weekPlan({
  id: "odchudzajaca-7d-1500",
  categoryId: "odchudzajaca",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "odchudz-d1-sniadanie", "odchudz-d1-sniadanie-alt"),
    meal("obiad", "odchudz-d1-obiad", "odchudz-d1-obiad-alt"),
    meal("kolacja", "odchudz-d1-kolacja", "odchudz-d1-kolacja-alt"),
  ],
});

const NISKI_IG_1500 = weekPlan({
  id: "niski-ig-7d-1500",
  categoryId: "niski-ig",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "nig-d1-sniadanie", "nig-d1-sniadanie-alt"),
    meal("obiad", "nig-d1-obiad", "nig-d1-obiad-alt"),
    meal("kolacja", "nig-d1-kolacja", "nig-d1-kolacja-alt"),
  ],
});

const HASHIMOTO_1500 = weekPlan({
  id: "hashimoto-7d-1500",
  categoryId: "hashimoto",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "hashi-d1-sniadanie", "hashi-d1-sniadanie-alt"),
    meal("obiad", "hashi-d1-obiad", "hashi-d1-obiad-alt"),
    meal("kolacja", "hashi-d1-kolacja", "hashi-d1-kolacja-alt"),
  ],
});

const ZAMIENNIKI_1500 = weekPlan({
  id: "zamienniki-7d-1500",
  categoryId: "zamienniki",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "zamien-d1-sniadanie", "zamien-d1-sniadanie-alt"),
    meal("obiad", "zamien-d1-obiad", "zamien-d1-obiad-alt"),
    meal("kolacja", "zamien-d1-kolacja", "zamien-d1-kolacja-alt"),
  ],
});

const BEZGLUTENOWA_1500 = weekPlan({
  id: "bezglutenowa-7d-1500",
  categoryId: "bezglutenowa",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "bezglut-d1-sniadanie", "bezglut-d1-sniadanie-alt"),
    meal("obiad", "bezglut-d1-obiad", "bezglut-d1-obiad-alt"),
    meal("kolacja", "bezglut-d1-kolacja", "bezglut-d1-kolacja-alt"),
  ],
});

const DLA_DZIECI_PLAN = weekPlan({
  id: "dla-dzieci-7d",
  categoryId: "dla-dzieci",
  label: "7 dni — plan rodzinny",
  caloriesTarget: null,
  day1: [
    meal("sniadanie", "dzieci-d1-sniadanie", "dzieci-d1-sniadanie-alt"),
    meal("obiad", "dzieci-d1-obiad", "dzieci-d1-obiad-alt"),
    meal("kolacja", "dzieci-d1-kolacja", "dzieci-d1-kolacja-alt"),
  ],
});

const KOBIETY_KARMIACE_PLAN = weekPlan({
  id: "kobiety-karmiace-7d",
  categoryId: "kobiety-karmiace",
  label: "7 dni — zbilansowany jadłospis",
  caloriesTarget: null,
  day1: [
    meal("sniadanie", "karm-d1-sniadanie", "karm-d1-sniadanie-alt"),
    meal("obiad", "karm-d1-obiad", "karm-d1-obiad-alt"),
    meal("kolacja", "karm-d1-kolacja", "karm-d1-kolacja-alt"),
  ],
});

/**
 * All 10 diet categories (spec §1). ETAP 3/4 shipped `keto` and
 * `wegetarianska` with a real example plan; ETAP 9 (2026-08-19) added a
 * Day-1 example plan to every other category EXCEPT `niemowleta`, which
 * deliberately still has an empty `plans` array (see the comment above
 * ODCHUDZAJACA_1500 — infant weaning content isn't invented for safety
 * reasons). Its configurator still adapts its steps like every other
 * category (spec §6); it just resolves to the "ten wariant pojawi się
 * wkrótce" state instead of a fabricated plan.
 *
 * `dla-dzieci` and `kobiety-karmiace` use non-"calories" configurator
 * modes (spec §6) — see ConfiguratorMode in types/diet.ts — and now have
 * real plans too (DLA_DZIECI_PLAN / KOBIETY_KARMIACE_PLAN above), so the
 * adaptive step UI and the plan preview both work end to end for them.
 */
export const DIET_CATEGORIES: DietCategory[] = [
  {
    id: "keto",
    slug: "keto",
    name: "Dieta keto",
    shortName: "Keto",
    description: "Niskowęglowodanowe dania z Thermomixem — więcej tłuszczu i białka, mniej węglowodanów.",
    configuratorMode: "calories",
    icon: "keto",
    plans: [KETO_1500],
  },
  {
    id: "wegetarianska",
    slug: "wegetarianska",
    name: "Dieta wegetariańska",
    shortName: "Vege",
    description: "Roślinne dania na Thermomixie — pełnowartościowe posiłki bez mięsa i ryb.",
    configuratorMode: "calories",
    icon: "leaf",
    plans: [WEGE_1500],
  },
  {
    id: "odchudzajaca",
    slug: "odchudzajaca",
    name: "Dieta odchudzająca",
    shortName: "Odchudzająca",
    description: "Sycące, niżej kaloryczne posiłki ułatwiające utrzymanie deficytu kalorycznego.",
    configuratorMode: "calories",
    icon: "scale",
    medicalDisclaimer:
      "Materiał ma charakter edukacyjny i nie zastępuje indywidualnej konsultacji z lekarzem lub dietetykiem.",
    plans: [ODCHUDZAJACA_1500],
  },
  {
    id: "niski-ig",
    slug: "niski-ig",
    name: "Dieta z niskim indeksem glikemicznym",
    shortName: "Niski IG",
    description: "Posiłki komponowane tak, by ograniczać gwałtowne wahania poziomu cukru we krwi.",
    configuratorMode: "calories",
    icon: "lightning",
    medicalDisclaimer:
      "Materiał ma charakter edukacyjny i nie zastępuje indywidualnej konsultacji z lekarzem lub dietetykiem.",
    plans: [NISKI_IG_1500],
  },
  {
    id: "hashimoto",
    slug: "hashimoto",
    name: "Dieta przy Hashimoto",
    shortName: "Hashimoto",
    description: "Posiłki uwzględniające ogólne zasady żywienia pomocne przy Hashimoto.",
    configuratorMode: "calories",
    icon: "check",
    medicalDisclaimer:
      "Materiał ma charakter edukacyjny i nie zastępuje indywidualnej konsultacji z lekarzem lub dietetykiem. Dieta nie zastępuje leczenia.",
    plans: [HASHIMOTO_1500],
  },
  {
    id: "zamienniki",
    slug: "zamienniki",
    name: "Dieta z zamiennikami dań",
    shortName: "Z zamiennikami",
    description: "Elastyczny plan z gotowymi zamiennikami dań i składników, dopasowany do Twoich upodobań.",
    configuratorMode: "calories",
    icon: "swap",
    plans: [ZAMIENNIKI_1500],
  },
  {
    id: "bezglutenowa",
    slug: "bezglutenowa",
    name: "Dieta bezglutenowa",
    shortName: "Bezglutenowa",
    description:
      "Śniadania, II śniadania, obiady, podwieczorki i kolacje — z realnie zweryfikowanymi składnikami, nie tylko z założenia bezglutenowe.",
    configuratorMode: "calories",
    icon: "badge",
    // ETAP 9: dania dobrane pod kątem naturalnie bezglutenowych składników,
    // ale BEZ weryfikacji konkretnych produktów/etykiet (spec §10/§42) —
    // dlatego żaden przepis nie ma tu ustawionej flagi `glutenFree` (patrz
    // types/diet.ts). Ten disclaimer mówi to wprost, zamiast milcząco
    // sugerować certyfikację, której jeszcze nie ma.
    medicalDisclaimer:
      "Przykładowe dania dobrane są pod kątem naturalnie bezglutenowych składników, ale konkretne produkty i ich etykiety nie zostały jeszcze zweryfikowane pod kątem faktycznej zawartości glutenu — przed zakupem zawsze sprawdź etykiety lub skonsultuj się z Agą.",
    plans: [BEZGLUTENOWA_1500],
  },
  {
    id: "dla-dzieci",
    slug: "dla-dzieci",
    name: "Pomysły na rodzinne posiłki dla dzieci",
    shortName: "Dla dzieci",
    description: "Proste, różnorodne posiłki, które ugotujesz raz dla całej rodziny — z osobną porcją dla dziecka.",
    configuratorMode: "children",
    icon: "users",
    plans: [DLA_DZIECI_PLAN],
  },
  {
    id: "kobiety-karmiace",
    slug: "kobiety-karmiace",
    name: "Zbilansowane posiłki dla kobiet karmiących",
    shortName: "Kobiety karmiące",
    description: "Różnorodne, regularne i wygodne posiłki — bez nastawienia na odchudzanie.",
    configuratorMode: "breastfeeding",
    icon: "heart",
    medicalDisclaimer:
      "Jeśli masz indywidualne zalecenia żywieniowe, alergie lub problemy zdrowotne, skonsultuj dietę z lekarzem lub dietetykiem.",
    plans: [KOBIETY_KARMIACE_PLAN],
  },
  {
    id: "niemowleta",
    slug: "niemowleta",
    name: "Rozszerzanie diety niemowląt z Thermomixem",
    shortName: "Rozszerzanie diety niemowląt",
    description: "Pomysły na proste posiłki i przygotowanie produktów odpowiednio do etapu rozszerzania diety.",
    configuratorMode: "weaning",
    icon: "sprout",
    medicalDisclaimer:
      "Materiały mają charakter edukacyjny i nie zastępują indywidualnych zaleceń pediatry lub dietetyka. Przed wprowadzeniem nowych produktów do diety dziecka warto skonsultować sposób żywienia ze specjalistą.",
    plans: [],
  },
];

export function getDietCategory(slug: string): DietCategory | undefined {
  return DIET_CATEGORIES.find((c) => c.slug === slug);
}

/**
 * Publiczny plan kategorii, który faktycznie ma treść (dzień 1 z posiłkami).
 * Jedno źródło prawdy dla dwóch miejsc: generatora bezpłatnego jadłospisu
 * PDF (lib/diets/jadlospis-pdf.ts) i konfiguratora, który na tej podstawie
 * decyduje, czy w ogóle pokazać przycisk pobierania
 * (components/diets/diet-configurator.tsx). Dzięki temu `niemowleta` —
 * jedyna kategoria bez planu, celowo (patrz komentarz nad
 * ODCHUDZAJACA_1500) — nigdy nie dostanie przycisku prowadzącego do 404.
 */
export function getPublicDietPlan(category: DietCategory): DietPlan | undefined {
  return category.plans.find((p) => p.visibility === "PUBLIC" && p.days.some((d) => d.meals.length > 0));
}

/**
 * Finds a plan by id across every category (spec §17/§30 — the shopping
 * list and PDF export routes only have a `planId`, not a category slug).
 */
export function getDietPlan(planId: string): DietPlan | undefined {
  for (const category of DIET_CATEGORIES) {
    const plan = category.plans.find((p) => p.id === planId);
    if (plan) return plan;
  }
  return undefined;
}

/**
 * Categories with at least a Day-1 example plan. Updated in ETAP 9 — every
 * category now has one EXCEPT `niemowleta` (deliberately, see the comment
 * above ODCHUDZAJACA_1500 — infant weaning content isn't invented). `keto`
 * and `wegetarianska` are still the only two with the FULL 7-day content
 * unlocked in Strefa Klienta (ETAP 8, see days2to7 usage above).
 */
export const LIVE_EXAMPLE_CATEGORY_IDS = [
  "keto",
  "wegetarianska",
  "odchudzajaca",
  "niski-ig",
  "hashimoto",
  "zamienniki",
  "bezglutenowa",
  "dla-dzieci",
  "kobiety-karmiace",
] as const;
