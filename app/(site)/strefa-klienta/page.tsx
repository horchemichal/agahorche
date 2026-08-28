import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { DIET_CATEGORIES } from "@/data/diets/categories";
import { CategoryIcon } from "@/components/diets/category-icon";
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
              Tu znajdziesz pełne, 7-dniowe plany diet, listy zakupów i eksport do PDF.
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
        <Heading as="h2" size="md" className="mb-6">
          Twoje pełne plany
        </Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {withFullPlan.map((category) => {
            const plan = category.plans[0];
            return (
              <Link
                key={category.id}
                href={`/strefa-klienta/plan/${plan.id}`}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-neutral-0 p-5 transition-colors hover:border-brand-400"
              >
                <div className="flex items-center gap-2.5">
                  <CategoryIcon icon={category.icon} width={22} height={22} className="text-brand-600" />
                  <p className="font-display text-lg text-neutral-900">{category.name}</p>
                </div>
                <Badge tone="brand">Pełny plan — {plan.durationDays} dni odblokowane</Badge>
                <p className="text-sm text-muted">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md" className="mb-6">
          Pozostałe diety
        </Heading>
        <p className="mb-6 max-w-xl text-sm text-muted">
          Dla tych kategorii pełny 7-dniowy plan jest jeszcze w przygotowaniu — zobacz dostępny
          przykład Dnia 1 i konfigurator na stronie publicznej.
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
    </>
  );
}
