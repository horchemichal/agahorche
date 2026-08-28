import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { getDietPlan, DIET_CATEGORIES } from "@/data/diets/categories";
import { DietPlanPreview } from "@/components/diets/diet-plan-preview";
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
        <DietPlanPreview plan={plan} forceUnlocked />
      </Section>
    </>
  );
}
