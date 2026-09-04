import { DIET_CATEGORIES } from "@/data/diets/categories";
import type { PozycjaDiety } from "@/components/diets/client-diet-list";

/**
 * OŚ PLIKU
 * Kafelki „moje diety" — te same na pulpicie Strefy Klienta i na /diety
 * po zalogowaniu.
 *
 * DLACZEGO OSOBNY PLIK (4.09.2026). Ta lista powstawała dotąd wewnątrz
 * app/(site)/strefa-klienta/page.tsx. Gdy Michał poprosił, żeby po
 * zalogowaniu /diety pokazywało „moje diety, a pod tym konfigurator",
 * dokładnie ten sam kod musiałby stać w dwóch stronach — a dwie kopie
 * rozjeżdżają się przy pierwszej zmianie etykiety albo warunku.
 *
 * `import type` z komponentu klienckiego jest bezpieczny: typ znika przy
 * kompilacji, więc ten moduł nie wciąga do serwera niczego z "use client".
 */
export function pozycjeMoichDiet(): PozycjaDiety[] {
  // Kategoria trafia na pulpit tylko wtedy, gdy ma realnie odblokowany dzień
  // z posiłkami. Kafelek prowadzący do pustego planu byłby gorszy niż jego brak.
  const zPelnymPlanem = DIET_CATEGORIES.filter((c) =>
    c.plans.some((p) => p.days.some((d) => d.locked && d.meals.length > 0)),
  );

  return zPelnymPlanem.map((c) => {
    const plan = c.plans[0];
    return {
      id: c.id,
      slug: c.slug,
      name: c.name,
      shortName: c.shortName,
      description: c.description,
      icon: c.icon,
      href: `/strefa-klienta/plan/${plan.id}`,
      /**
       * Rozszerzanie diety niemowląt ma cztery plany etapowe zamiast jednego
       * wariantu kalorycznego, więc kafelek prowadzi do Etapu 1 i mówi wprost,
       * ile etapów czeka dalej — inaczej „Pełny plan — 7 dni" sugerowałoby,
       * że to wszystko, co jest w tej kategorii.
       */
      etykieta:
        c.plans.length > 1 && c.configuratorMode === "weaning"
          ? `${c.plans.length} etapy po 7 dni`
          : `Pełny plan — ${plan.durationDays} dni odblokowane`,
    };
  });
}
