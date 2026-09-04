import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { DIET_CATEGORIES } from "@/data/diets/categories";
import { CategoryIcon } from "@/components/diets/category-icon";
import { ClientDietList, type PozycjaDiety } from "@/components/diets/client-diet-list";
import { pozycjeMoichDiet } from "@/lib/diets/pozycje-pulpitu";
import { DietConfigurator } from "@/components/diets/diet-configurator";
import { MenuKlubu } from "@/components/aga-club/menu-klubu";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { Button, ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Strefa Klienta | Aga Horche",
  robots: { index: false, follow: false },
};

/**
 * Pulpit Strefy Klienta (ETAP 8). Kafelki prowadzą do odblokowanego planu
 * każdej kategorii, która ma realną treść.
 *
 * 4.09.2026 — opis poprawiony. Mówił „currently keto + wegetariańska" i „the
 * remaining 8 categories", co przestało być prawdą 1.09, gdy pełny tydzień
 * dostała KAŻDA kategoria (patrz `withoutFullPlan` niżej — dziś zawsze puste).
 * Komentarz opisujący nieistniejący już stan myli bardziej niż jego brak.
 */
export default async function ClientDashboardPage() {
  const client = await getCurrentClient();
  if (!client) {
    redirect("/strefa-klienta/logowanie");
  }

  /**
   * Kafelki diet trafiają do komponentu klienckiego, bo od 31.08.2026 każdy
   * z nich można ukryć na własnym pulpicie (`ClientDietList`). Sama lista
   * nadal powstaje po stronie serwera — do przeglądarki idą wyłącznie pola,
   * które kafelek naprawdę wyświetla.
   *
   * 4.09.2026: budowanie listy wyprowadzone do lib/diets/pozycje-pulpitu.ts,
   * bo od dziś czyta ją też /diety po zalogowaniu.
   */
  const pozycje: PozycjaDiety[] = pozycjeMoichDiet();
  const withoutFullPlan = DIET_CATEGORIES.filter((c) => !pozycje.some((p) => p.id === c.id));

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

      {/*
        MINI-MENU KLUBU (prośba Michała, 4.09.2026). Stoi zaraz pod
        powitaniem, PRZED dietami, bo to jest odpowiedź na pytanie „co ja
        tu właściwie mam". Wcześniej pulpit zaczynał się od diet i klientka
        nie miała skąd wiedzieć, że dostaje też przepisy, lodówkę, poradnik
        i wyzwanie — te siedziały wyłącznie w górnym menu serwisu.
      */}
      <Section className="!pt-8">
        <Heading as="h2" size="md" className="mb-4">
          Co masz w klubie
        </Heading>
        <MenuKlubu />
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md" className="mb-2">
          Twoje pełne plany
        </Heading>
        <p className="mb-6 max-w-xl text-sm text-muted">
          Wszystkie dni odblokowane, w wariantach 7 i 14 dni oraz 1500 i 2000 kcal. Dietę, której
          nie używasz, usuwasz krzyżykiem; żeby wróciła, otwórz ją w konfiguratorze i kliknij
          „Dodaj do moich diet”.
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
        Od 1.09.2026 pełny tydzień ma KAŻDA kategoria — rozszerzanie diety
        niemowląt dostało cztery plany etapowe (patrz NIEMOWLETA_ETAP1…4
        w data/diets/categories.ts), więc `withoutFullPlan` jest dziś puste
        i ta sekcja po prostu się nie renderuje. Warunek zostaje: jeśli
        kiedyś dojdzie kategoria bez treści, wróci sama.
      */}
      {withoutFullPlan.length > 0 && (
      <Section tone="surface">
        <Heading as="h2" size="md" className="mb-6">
          Pozostałe kategorie
        </Heading>
        <p className="mb-6 max-w-xl text-sm text-muted">
          Te kategorie nie mają jeszcze gotowego jadłospisu. Strona kategorii i konfigurator
          działają normalnie.
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
