import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { Section } from "@/components/ui/section";
import { InstallmentCalculator } from "./installment-calculator";

/**
 * Seeds the calculator with the real primary offer's price (spec §5:
 * single source of truth) — falls back to hiding the section entirely if
 * no offer has a price set, never a fabricated default.
 */
export async function InstallmentCalculatorSection() {
  const offer = await getOffersRepository().getActiveOffer();
  if (!offer?.priceCents) return null;

  return (
    // scroll-mt accounts for the sticky header so the "Raty" nav link
    // (data/nav.ts → /#kalkulator-rat) doesn't land the section under it.
    <Section id="kalkulator-rat" className="scroll-mt-28 pt-0">
      <InstallmentCalculator initialPriceZl={Math.round(offer.priceCents / 100)} />
    </Section>
  );
}
