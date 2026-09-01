import type { Recipe } from "@/types/diet";
import { ChefHatIcon } from "@/components/marketing/icons";
import { CookidooButton } from "./cookidoo-button";

/**
 * No real recipe photography exists yet — per spec §31 ("Nie używaj
 * przypadkowych stockowych zdjęć") we don't hotlink stock photos. Same
 * gradient + ChefHatIcon placeholder pattern already used in
 * components/marketing/hero.tsx for the "no photo picked yet" state.
 *
 * 1.09.2026 (prośba Agi: „w miejscu czapki niech będą napisy typu
 * śniadanie, drugie śniadanie, obiad"): jeśli karta dostanie
 * `placeholderLabel`, w pasku zdjęcia pojawia się nazwa posiłku zamiast
 * czapki. Pięć identycznych czapek obok siebie nic nie wnosiło — ta sama
 * przestrzeń mówi teraz, o którą porę dnia chodzi, i pozwala usunąć
 * osobny podpis nad kartą (patrz components/diets/meal-card.tsx).
 * Czapka zostaje jako wariant domyślny dla kart bez etykiety.
 *
 * ETAP 11: link do Cookidoo został stąd usunięty, bo prowadził do ogólnej
 * wyszukiwarki, a nie do tego konkretnego dania — i słusznie uznano to za
 * mylące.
 *
 * 31.08.2026: wraca, bo powód zniknął. Przepisy w rejestrze mają teraz
 * prawdziwe, sprawdzone adresy konkretnych dań na Cookidoo, więc link pod
 * daniem otwiera dokładnie to danie. `CookidooButton` sam rozróżnia oba
 * przypadki: przy `null` nadal pokazuje „Szukaj w Cookidoo".
 *
 * `portions` mnoży wartości odżywcze — Cookidoo podaje je na porcję,
 * a posiłek może składać się z półtorej. Patrz `Meal.portions`.
 */
export function RecipeCard({
  recipe,
  compact = false,
  portions = 1,
  placeholderLabel,
  dopisek,
}: {
  recipe: Recipe;
  compact?: boolean;
  portions?: number;
  /** Napis w pasku zdjęcia zamiast czapki — np. „Śniadanie”, „Obiad”. */
  placeholderLabel?: string;
  /** Linijka pod nazwą dania — wyszukiwarka wpisuje tu czas i wydajność. */
  dopisek?: string;
}) {
  const x = (v: number | null | undefined) =>
    v == null ? null : Math.round(v * portions * 10) / 10;
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-neutral-0">
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-brand-50 via-neutral-50 to-brand-100 px-3 text-center text-brand-700 ${compact ? "h-24" : "h-32"}`}
        aria-hidden={placeholderLabel ? undefined : true}
      >
        {placeholderLabel ? (
          <span
            className={`font-display uppercase leading-tight tracking-[0.12em] ${compact ? "text-sm" : "text-base"}`}
          >
            {placeholderLabel}
          </span>
        ) : (
          <ChefHatIcon width={compact ? 26 : 32} height={compact ? 26 : 32} strokeWidth={1.4} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <p className="text-sm font-medium leading-snug text-neutral-900">{recipe.name}</p>
        {dopisek && <p className="text-xs text-neutral-600">{dopisek}</p>}
        {portions !== 1 && (
          <p className="text-xs font-medium text-brand-700">
            {String(portions).replace(".", ",")} porcji
          </p>
        )}
        {recipe.calories != null && (
          <p className="text-xs text-muted">
            {Math.round(recipe.calories * portions)} kcal
            {recipe.proteinG != null && ` · B: ${x(recipe.proteinG)} g`}
            {recipe.fatG != null && ` · T: ${x(recipe.fatG)} g`}
            {recipe.carbsG != null && ` · W: ${x(recipe.carbsG)} g`}
          </p>
        )}
        <div className="mt-auto pt-1">
          <CookidooButton url={recipe.cookidooUrl} />
        </div>
      </div>
    </div>
  );
}
