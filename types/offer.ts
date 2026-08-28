/**
 * Central offer model (spec: "Aga Admin" §5). This is the single source of
 * truth for pricing/product copy shown anywhere on the public site — no
 * component should ever hardcode a price. Read via
 * `lib/database/repositories/offers-repository.ts#getActiveOffer()`.
 *
 * Real prices are only ever entered by Aga through /admin/oferta — nothing
 * here is pre-filled with invented numbers (repo project rule: never
 * fabricate prices).
 */
export interface Offer {
  id: string;
  productName: string; // e.g. "Thermomix TM7"
  model: string; // e.g. "TM7"
  priceCents: number | null; // null = "cena do ustalenia podczas prezentacji"
  installmentCents: number | null; // rata miesięczna, null = brak informacji
  installmentMonths: number | null;
  description: string;
  imageMediaId: string | null;
  ctaLabel: string;
  ctaHref: string;
  bonuses: string[];
  conditions: string; // warunki oferty (tekst)
  startsAt: string | null; // ISO date, null = od razu
  endsAt: string | null; // ISO date, null = bezterminowo
  isActive: boolean;
  /** Only one offer should be primary/featured at a time; enforced in the repository layer. */
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy: string | null;
}

export type OfferInput = Omit<Offer, "id" | "createdAt" | "updatedAt" | "updatedBy">;
