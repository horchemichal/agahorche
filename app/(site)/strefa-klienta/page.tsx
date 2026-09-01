import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { DIET_CATEGORIES } from "@/data/diets/categories";
import { CategoryIcon } from "@/components/diets/category-icon";
import { ClientDietList, type PozycjaDiety } from "@/components/diets/client-diet-list";
import { DietConfigurator } from "@/components/diets/diet-configurator";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { Badge } from "@/components/ui/card";
import { Button, ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Strefa Klienta | Aga Horche",
  robots: { index: false, follow: false },
};

/**
 * Client dashboard (ETAP 8). Categories with real full-week content
 * (currently keto + wegetariańska, see days2to7 in data/diets/categories.ts)
 * link to the unlocked plan view; the remaining 8 categories link back to
 * their public configurator page with an honest "pełny plan w przygotowaniu"
 * note rather than a broken/empty client-only page.
 */
export default async function ClientDashboardPage() {
  const client = await getCurrentClient();
  if (!client) {
    redirect("/strefa-klienta/logowanie");
  }

  const withFullPlan = DIET_CATEGORIES.filter((c) => c.plans.some((p) => p.days.some((d) => d.locked && d.meals.length > 0)));
  const withoutFullPlan = DIET_CATEGORIES.filter((c) => !withFullPlan.includes(c));

  /**
   * Kafelki diet trafiają do komponentu klienckiego, bo od 31.08.2026 każdy
   * z nich można ukryć na własnym pulpicie (`ClientDietList`). Sama lista
   * nadal powstaje po stronie serwera — do przeglądarki idą wyłącznie pola,
   * które kafelek naprawdę wyświetla.
   */
  const pozycje: PozycjaDiety[] = withFullPlan.map((c) => {
    const plan = c.plans[0];
    return {
      id: c.id,
      slug: c.slug,
      name: c.name,
      shortName: c.shortName,
      description: c.description,
      icon: c.icon,
      href: `/strefa-klienta/plan/${plan.id}`,
      etykieta: `Pełny plan — ${plan.durationDays} dni odblokowane`,
    };
  });

  return (
    <>
      <Section className="!pb-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Eyebrow>Strefa Klienta</Eyebrow>
            <Heading as="h1" size="lg" className="mt-2">
              Cześć, {client.displayName.split(" ")[0]}!
            </Heading>
            <Lead className="mt-3 max-w-xl">
              Tu znajdziesz pełne, 7-dniowe jadłospisy wszystkich diet — w wariantach 1500
              i 2000 kcal, z linkiem do każdego przepisu na Cookidoo i listą zakupów.
            </Lead>
          </div>
          <form action="/strefa-klienta/wyloguj" method="post">
            <Button type="submit" variant="outline">
              Wyloguj się
            </Button>
          </form>
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md" className="mb-2">
          Twoje pełne plany
        </Heading>
        <p className="mb-6 max-w-xl text-sm text-muted">
          Wszystkie dni odblokowane, w wariantach 1500 i 2000 kcal. Diety, których nie używasz,
          możesz ukryć krzyżykiem — w każdej chwili je przywrócisz.
        </p>
        <ClientDietList pozycje={pozycje} />
      </Section>

      {/*
        31.08.2026: konfigurator diet trafia też tutaj. Do tej pory żył
        wyłącznie na stronach publicznych, więc zalogowana klientka musiała
        wychodzić ze swojego pulpitu, żeby dobrać wariant kaloryczny albo
        model. `isLoggedIn` odsłania podgląd planu od razu.
      */}
      <Section>
        <Eyebrow>Dobierz plan</Eyebrow>
        <Heading as="h2" size="md" className="mb-2 mt-2">
          Konfigurator diet
        </Heading>
        <p className="mb-8 max-w-xl text-sm text-muted">
          Wybierz dietę, długość, kaloryczność i swój model Thermomixa — podgląd planu masz od
          razu, bez wychodzenia ze Strefy Klienta.
        </p>
        <DietConfigurator isLoggedIn />
      </Section>

      {/*
        Po przebudowie z 31.08.2026 pełny tydzień ma KAŻDA dieta poza
        rozszerzaniem diety niemowląt, które świadomie nie dostaje planu
        (patrz komentarz w data/diets/categories.ts). Sekcja renderuje się
        więc tylko wtedy, gdy naprawdę jest co w niej pokazać.
      */}
      {withoutFullPlan.length > 0 && (
      <Section tone="surface">
        <Heading as="h2" size="md" className="mb-6">
          Pozostałe kategorie
        </Heading>
        <p className="mb-6 max-w-xl text-sm text-muted">
          Te kategorie nie mają gotowego jadłospisu — przy rozszerzaniu diety niemowląt świadomie
          nie podajemy gotowych ilości ani konsystencji. Strona kategorii i konfigurator działają
          normalnie.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {withoutFullPlan.map((category) => (
            <ButtonLink key={category.id} href={`/diety/${category.slug}`} variant="outline" className="justify-start">
              <CategoryIcon icon={category.icon} width={16} height={16} className="shrink-0" />
              {category.shortName}
            </ButtonLink>
          ))}
        </div>
      </Section>
      )}
    </>
  );
}
