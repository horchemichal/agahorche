import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { getDietPlan, DIET_CATEGORIES } from "@/data/diets/categories";
import { DietPlanPreview } from "@/components/diets/diet-plan-preview";
import { pobierzDzienPlanu } from "@/lib/diets/postep";
import { Section } from "@/components/ui/section";
import { Heading, Eyebrow } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Twój plan | Strefa Klienta | Aga Horche",
  robots: { index: false, follow: false },
};

/** Full, unlocked plan view (ETAP 8) — the only place forceUnlocked is ever passed to DietPlanPreview. */
export default async function ClientPlanPage({ params }: PageProps<"/strefa-klienta/plan/[planId]">) {
  const client = await getCurrentClient();
  if (!client) {
    redirect("/strefa-klienta/logowanie");
  }

  const { planId } = await params;
  const plan = getDietPlan(planId);
  if (!plan) notFound();

  const category = DIET_CATEGORIES.find((c) => c.id === plan.categoryId);

  /*
   * Dzień, na którym klientka skończyła ostatnim razem (prośba Michała,
   * 4.09.2026). Czytamy go TUTAJ, na serwerze, a nie w komponencie po
   * zamontowaniu — inaczej plan mrugnąłby Dniem 1, zanim przeskoczyłby na
   * piąty. Gdy nic nie zapisano albo zapisany dzień wypadł z planu (np.
   * ktoś miał 12. dzień planu 14-dniowego, a otwiera wariant 7-dniowy),
   * zostaje Dzień 1.
   */
  const zapisanyDzien = await pobierzDzienPlanu(client.id, plan.id);
  const poczatkowyDzien =
    zapisanyDzien && plan.days.some((d) => d.dayNumber === zapisanyDzien) ? zapisanyDzien : 1;

  return (
    <>
      <Section className="!pb-0">
        <Link href="/strefa-klienta" className="text-sm text-muted hover:text-brand-700">
          ← Strefa Klienta
        </Link>
        <Eyebrow className="mt-4">Pełny plan</Eyebrow>
        <Heading as="h1" size="lg" className="mt-2">
          {category?.name ?? plan.label} — {plan.label}
        </Heading>
      </Section>
      <Section>
        <DietPlanPreview plan={plan} forceUnlocked poczatkowyDzien={poczatkowyDzien} zapamietujDzien />
      </Section>
    </>
  );
}
