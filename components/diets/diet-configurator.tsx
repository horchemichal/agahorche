"use client";

import { useMemo, useState } from "react";
import type { DietCategory, ThermomixModel } from "@/types/diet";
import { THERMOMIX_MODELS } from "@/types/diet";
import { DIET_CATEGORIES, getPublicDietPlan } from "@/data/diets/categories";
import { CategoryIcon } from "./category-icon";
import { DietSummary, type ConfiguratorSelection } from "./diet-summary";
import { DietPlanPreview } from "./diet-plan-preview";
import { ClientOnlyBadge } from "./client-only-badge";
import { ButtonLink, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CHILD_AGE_OPTIONS = ["1–3 lata", "4–6 lat", "7–12 lat"];
const BREASTFEEDING_VARIANTS = ["Zbilansowany jadłospis", "Wariant rodzinny"];
const WEANING_STAGES = ["Etap 1 — pierwsze produkty", "Etap 2 — większa różnorodność", "Etap 3 — łączenie produktów", "Etap 4 — więcej posiłków rodzinnych"];

/**
 * "Skonfiguruj swoją dietę" — the module's centerpiece (spec §5), built in the
 * same visual language as InstallmentCalculator
 * (components/marketing/installment-calculator.tsx): a white bordered card,
 * numbered steps on the left, a live summary + CTAs on the right.
 *
 * Step 2/3 adapt per category (spec §6) via `configuratorMode` — this is
 * the one place that logic lives, so adding a real plan to e.g. "dla-dzieci"
 * later needs zero changes here.
 *
 * SIERPIEŃ 2026 — na prośbę Agi konfigurator nie kończy się już bramką
 * „Dołącz do Aga Club”. Każda dieta ma teraz JEDEN bezpłatny jadłospis na
 * dzień do pobrania w PDF od razu po wybraniu
 * (/api/diety/jadlospis-pdf?dieta=…, treść z lib/diets/jadlospis-pdf.ts),
 * a ograniczenie mówimy wprost zamiast je egzekwować: pełne jadłospisy
 * dostają klientki i klienci, którzy kupili Thermomix u Agi. To lepszy
 * handlowo układ niż rejestracja przed jakąkolwiek wartością — odwiedzający
 * wychodzi z realnym plikiem i powodem, żeby zadzwonić.
 *
 * `niemowleta` nie ma planu (celowo, patrz data/diets/categories.ts), więc
 * `getPublicDietPlan` zwraca dla niej `undefined` i zamiast przycisku
 * pokazujemy uczciwy komunikat — nigdy linku prowadzącego do 404.
 *
 * `isLoggedIn` (z `getCurrentClient()`, patrz diet-category-page.tsx /
 * app/(site)/diety/page.tsx) dokłada członkom Aga Club interaktywny podgląd
 * planu. Podgląd renderuje się pełną szerokością pod całą kartą (nie
 * zagnieżdżony w wąskiej kolumnie), zgodnie z wcześniejszą uwagą Agi, że
 * węższy układ był nieczytelny.
 */
export function DietConfigurator({
  initialCategorySlug,
  isLoggedIn = false,
}: {
  initialCategorySlug?: string;
  isLoggedIn?: boolean;
}) {
  const initialCategory = DIET_CATEGORIES.find((c) => c.slug === initialCategorySlug) ?? DIET_CATEGORIES[0];
  const [category, setCategory] = useState<DietCategory>(initialCategory);
  const [days, setDays] = useState<7 | 14>(7);
  const [calories, setCalories] = useState<1500 | 2000>(1500);
  const [childAgeLabel, setChildAgeLabel] = useState(CHILD_AGE_OPTIONS[0]);
  const [mealsPerDay, setMealsPerDay] = useState(4);
  const [breastfeedingVariant, setBreastfeedingVariant] = useState(BREASTFEEDING_VARIANTS[0]);
  const [weaningStage, setWeaningStage] = useState(WEANING_STAGES[0]);
  const [model, setModel] = useState<ThermomixModel>("TM7");
  const [showPreview, setShowPreview] = useState(false);

  const selection: ConfiguratorSelection = {
    category,
    days,
    calories,
    childAgeLabel,
    mealsPerDay,
    breastfeedingVariant,
    weaningStage,
    model,
  };

  const matchedPlan = useMemo(() => {
    if (category.configuratorMode !== "calories") {
      // ETAP 9: children/breastfeeding/weaning categories have no calorie
      // dimension in their configurator, so match on the category's one
      // public plan directly rather than the calories/days combo used
      // below — see DLA_DZIECI_PLAN / KOBIETY_KARMIACE_PLAN in
      // data/diets/categories.ts (caloriesTarget is `null` for both).
      return category.plans.find((p) => p.visibility === "PUBLIC" && p.thermomixModels.includes(model));
    }
    return category.plans.find(
      (p) => p.visibility === "PUBLIC" && p.durationDays === days && p.caloriesTarget === calories && p.thermomixModels.includes(model),
    );
  }, [category, days, calories, model]);

  /**
   * Link do bezpłatnego PDF-a — `null` dla kategorii bez publicznego planu
   * (dziś tylko `niemowleta`), żeby nie pokazywać przycisku prowadzącego do
   * 404 z /api/diety/jadlospis-pdf.
   */
  const pdfHref = useMemo(
    () => (getPublicDietPlan(category) ? `/api/diety/jadlospis-pdf?dieta=${category.slug}` : null),
    [category],
  );

  function selectCategory(next: DietCategory) {
    setCategory(next);
    setShowPreview(false);
  }

  return (
    <>
    <div className="rounded-2xl border border-border bg-neutral-0 p-6 shadow-[var(--shadow-card)] md:p-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">Konfigurator diet</p>
      <h3 className="mb-6 font-display text-xl text-neutral-900 md:text-2xl">Skonfiguruj swoją dietę</h3>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium text-neutral-700">1. Wybierz rodzaj diety</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {DIET_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectCategory(c)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors",
                    category.id === c.id ? "border-brand-600 bg-brand-50 text-brand-700" : "border-neutral-300 text-neutral-700 hover:border-brand-300",
                  )}
                >
                  <CategoryIcon icon={c.icon} width={16} height={16} className="shrink-0" />
                  <span className="truncate">{c.shortName}</span>
                </button>
              ))}
            </div>
          </div>

          {category.configuratorMode === "calories" && (
            <>
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-neutral-700">2. Wybierz liczbę dni</p>
                <div className="flex gap-2">
                  {([7, 14] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={cn(
                        "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                        days === d ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                      )}
                    >
                      {d} dni
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-neutral-700">3. Wybierz kaloryczność</p>
                <div className="flex gap-2">
                  {([1500, 2000] as const).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setCalories(k)}
                      className={cn(
                        "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                        calories === k ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                      )}
                    >
                      {k} kcal
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {category.configuratorMode === "children" && (
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-neutral-700">2. Wiek dziecka i liczba posiłków</p>
              <div className="mb-3 flex flex-wrap gap-2">
                {CHILD_AGE_OPTIONS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setChildAgeLabel(a)}
                    className={cn(
                      "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                      childAgeLabel === a ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                    )}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {[3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setMealsPerDay(n)}
                    className={cn(
                      "h-9 w-11 rounded-md border text-sm font-medium transition-colors",
                      mealsPerDay === n ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted">
                Bez sztywnych norm kalorycznych — porcje dopasowujemy do dziecka, nie odwrotnie.
              </p>
            </div>
          )}

          {category.configuratorMode === "breastfeeding" && (
            <>
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-neutral-700">2. Wariant planu</p>
                <div className="flex flex-wrap gap-2">
                  {BREASTFEEDING_VARIANTS.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setBreastfeedingVariant(v)}
                      className={cn(
                        "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                        breastfeedingVariant === v ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-neutral-700">3. Liczba dni</p>
                <div className="flex gap-2">
                  {([7, 14] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={cn(
                        "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                        days === d ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                      )}
                    >
                      {d} dni
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {category.configuratorMode === "weaning" && (
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-neutral-700">2. Etap rozszerzania diety</p>
              <div className="flex flex-col gap-2">
                {WEANING_STAGES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setWeaningStage(s)}
                    className={cn(
                      "rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors",
                      weaningStage === s ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="mb-2 text-sm font-medium text-neutral-700">
              {category.configuratorMode === "calories" ? "4" : category.configuratorMode === "breastfeeding" ? "4" : "3"}. Wybierz swój Thermomix
            </p>
            <div className="flex flex-wrap gap-2">
              {THERMOMIX_MODELS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setModel(m)}
                  className={cn(
                    "h-9 rounded-md border px-4 text-sm font-medium transition-colors",
                    model === m ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {category.medicalDisclaimer && (
            <p className="mt-6 border-t border-border pt-4 text-xs text-muted">{category.medicalDisclaimer}</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <DietSummary selection={selection} />

          <div className="flex flex-col gap-2.5">
            {pdfHref ? (
              <>
                <ButtonLink href={pdfHref} download className="justify-center">
                  Pobierz jadłospis w PDF
                </ButtonLink>
                <p className="text-xs text-muted">
                  Bezpłatny jadłospis na jeden dzień — {category.name.toLowerCase()}. Pobierasz od
                  razu, bez zakładania konta.
                </p>
              </>
            ) : (
              <p className="rounded-lg border border-dashed border-neutral-300 bg-surface p-4 text-sm text-neutral-700">
                Dla tej diety przygotowuję jadłospis do pobrania — daj mi znać, a wyślę Ci go, gdy
                tylko będzie gotowy.
              </p>
            )}
            {isLoggedIn && (
              <Button type="button" variant="secondary" onClick={() => setShowPreview(true)} className="justify-center">
                Zobacz przykładowy plan
              </Button>
            )}
          </div>

          <div className="flex flex-col items-start gap-2 rounded-lg border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm font-semibold text-brand-800">Więcej diet i pełne 7 dni</p>
            <p className="text-sm leading-relaxed text-neutral-700">
              Każda dieta ma tu jeden bezpłatny jadłospis. Pełne 7-dniowe jadłospisy ze wszystkich
              diet, listy zakupów i gotowe zamienniki dań przekazuję wyłącznie moim klientkom i
              klientom — osobom, które kupiły Thermomix u mnie, oficjalnej przedstawicielki
              Thermomix.
            </p>
            <ButtonLink href="/prezentacja" variant="outline" className="justify-center bg-neutral-0">
              Umów bezpłatną prezentację →
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>

    {isLoggedIn && showPreview && (
      <div className="mt-8">
        {matchedPlan ? (
          <DietPlanPreview plan={matchedPlan} />
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-surface p-8 text-center">
            <ClientOnlyBadge />
            <p className="max-w-md text-balance font-display text-xl text-neutral-900">
              Ten wariant diety pojawi się wkrótce
            </p>
            <p className="max-w-md text-sm text-muted">
              Publiczne przykładowe plany dodajemy stopniowo. Zobacz gotowy przykład dla diety
              keto lub wegetariańskiej, albo zapytaj Agę o pełną bazę w Strefie Klienta.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              <ButtonLink href="/diety/keto" variant="outline">
                Zobacz przykład: Keto
              </ButtonLink>
              <ButtonLink href="/prezentacja">Umów bezpłatną prezentację →</ButtonLink>
            </div>
          </div>
        )}
      </div>
    )}
    </>
  );
}
