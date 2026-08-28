import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { DIET_CATEGORIES } from "@/data/diets/categories";
import { DietCategoryCard } from "@/components/diets/diet-category-card";
import { DietConfigurator } from "@/components/diets/diet-configurator";
import { ClientZoneTeaser } from "@/components/diets/client-zone-teaser";
import { FaqSection } from "@/components/seo/faq-section";
import { DIETY_FAQ } from "@/data/diets/faq";
import { TargetIcon, ChefHatIcon, CheckCircleIcon, CalendarIcon, CartIcon } from "@/components/marketing/icons";
import { getCurrentClient } from "@/lib/auth/client-auth";

export const metadata: Metadata = buildMetadata({
  title: "Diety na Thermomix — konfigurator, przykładowe plany, przepisy",
  description:
    "Skonfiguruj dietę dopasowaną do siebie: keto, wegetariańska, bezglutenowa i inne. Z każdej diety pobierzesz bezpłatny jadłospis na jeden dzień w PDF.",
  path: "/diety",
});

const HERO_FEATURES = [
  { icon: TargetIcon, title: "Dopasowana", description: "Wybierz dietę, kaloryczność i liczbę dni — resztą zajmiemy się my." },
  { icon: ChefHatIcon, title: "Na Twój Thermomix", description: "Plany kompatybilne z TM31, TM5, TM6 i TM7." },
  { icon: CheckCircleIcon, title: "Jadłospis w PDF", description: "Z każdej diety pobierzesz bezpłatny jadłospis na jeden dzień — bez zakładania konta." },
  { icon: CalendarIcon, title: "7–14 dni", description: "Wybierz plan na 7 lub 14 dni i ciesz się różnorodnością." },
];

/**
 * Sierpień 2026 — kafelek „Linki do Cookidoo” zdjęty na prośbę Agi (był też
 * w HERO_FEATURES, w opisie SEO i w leadzie hero, więc znikł ze wszystkich
 * czterech miejsc naraz — obiecywał „potwierdzony link do przepisu”, którego
 * dziś nie ma: każdy przepis ma `cookidooUrl: null`, patrz
 * data/diets/recipes.ts). Sam przycisk Cookidoo przy planie zostaje — mówi
 * uczciwie „Szukaj w Cookidoo”, nie obiecuje konkretnego przepisu (patrz
 * components/diets/cookidoo-button.tsx). Siatka niżej ma teraz 4 kolumny.
 */
const PLAN_INCLUDES = [
  { icon: CartIcon, title: "Gotowy plan wszystkich posiłków", description: "Śniadanie, II śniadanie, obiad, podwieczorek i kolacja — każdego dnia." },
  { icon: TargetIcon, title: "Dopasowanie do urządzenia", description: "Plany uwzględniają, jaki model Thermomix masz w domu." },
  { icon: ChefHatIcon, title: "Zdrowo i smacznie", description: "Zbilansowane, różnorodne posiłki, łatwe do przygotowania." },
  { icon: CalendarIcon, title: "Oszczędność czasu", description: "Gotowy plan i lista zakupów pozwalają zaoszczędzić czas i uniknąć stresu." },
];

/**
 * "Diety na Thermomix" hub (spec §1-31, delivered 2026-08-19). Section order
 * follows spec §26: hero → kategorie → konfigurator (przykładowy plan
 * pojawia się w nim samym po kliknięciu) → co zawiera plan → Strefa
 * Klienta → FAQ → CTA. ETAP 1-4 (spec §29): UI/layout, konfigurator, i dwie
 * w pełni zbudowane przykładowe diety (Keto, Vege) — pozostałe 8 kategorii
 * mają już gotowy, dopasowany konfigurator, ale plan czeka na treść
 * (ETAP 5+), więc nic tu nie jest zmyślone na zapas.
 *
 * ETAP 11: async — the configurator is gated to signed-in Aga Club members
 * (see diet-configurator.tsx), so this resolves the session once here.
 */
export default async function DietyHubPage() {
  const client = await getCurrentClient();
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Diety Thermomix", path: "/diety" }]} />
      </Section>

      <Section className="pt-6">
        <Eyebrow>Diety dla Ciebie</Eyebrow>
        <Heading as="h1" size="xl" className="max-w-2xl">
          Twoja dieta na Thermomix, dopasowana do Ciebie
        </Heading>
        <Lead className="mt-5 max-w-xl">
          Wybierz rodzaj diety, liczbę dni i kaloryczność. Z każdej diety pobierzesz bezpłatny
          jadłospis na jeden dzień w PDF.
        </Lead>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#konfigurator" size="lg">
            Skonfiguruj swoją dietę
          </ButtonLink>
          <ButtonLink href="/prezentacja" variant="outline" size="lg">
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_FEATURES.map((f) => (
            <div key={f.title}>
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <f.icon width={22} height={22} />
              </span>
              <h2 className="mb-1 font-semibold text-neutral-900">{f.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Eyebrow>Znajdź dietę dla siebie</Eyebrow>
        <Heading as="h2" size="md" className="mb-8 max-w-xl">
          Rodzaje diet
        </Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIET_CATEGORIES.map((category) => (
            <DietCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <Section id="konfigurator" className="scroll-mt-24">
        <DietConfigurator isLoggedIn={Boolean(client)} />
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md" className="mb-8 max-w-xl">
          Co zawiera Twój plan diety?
        </Heading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLAN_INCLUDES.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-neutral-0 p-5">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <item.icon width={18} height={18} />
              </span>
              <h3 className="mb-1 font-semibold text-neutral-900">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <ClientZoneTeaser />
      <FaqSection items={DIETY_FAQ} />

      <Section>
        <div className="rounded-xl bg-brand-900 px-6 py-12 text-center text-neutral-0 md:px-16 md:py-16">
          <Heading as="h2" size="md" align="center" className="mb-4 text-neutral-0">
            Nie wiesz, od czego zacząć?
          </Heading>
          <Lead className="mx-auto mb-8 max-w-xl text-brand-100">
            Umów się na bezpłatną prezentację z Agą — pomoże Ci wybrać najlepszy plan i pokaże, jak
            gotuje się z Thermomixem na żywo.
          </Lead>
          <ButtonLink href="/prezentacja" variant="secondary" size="lg">
            Umów konsultację →
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
