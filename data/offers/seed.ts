import type { Offer } from "@/types/offer";

/**
 * Real, Aga-confirmed launch offers (2026-08-14) — seeded here so the CMS
 * ships with correct live pricing instead of an empty state, exactly the
 * same pattern as data/faq/global.ts. This is NOT fabricated placeholder
 * data (spec §42) — every price/condition here was explicitly confirmed
 * by Aga. Editable going forward at /admin/oferta; this file only sets
 * the starting values for local dev (in-memory) and the matching
 * Supabase seed (see supabase/migrations/20260114000000_seed_offers.sql).
 */
const now = "2026-08-14T00:00:00.000Z";

export const SEED_OFFERS: Offer[] = [
  {
    id: "seed-tm7-base",
    productName: "Thermomix TM7",
    model: "TM7",
    priceCents: 666_900,
    installmentCents: null,
    installmentMonths: null,
    description: "Podstawowy zestaw Thermomix TM7 — zobacz na bezpłatnej prezentacji, jak działa na żywo.",
    imageMediaId: null,
    ctaLabel: "Umów bezpłatną prezentację",
    ctaHref: "/prezentacja",
    bonuses: [],
    conditions: "Cena orientacyjna — dokładne warunki i dostępne bonusy Aga potwierdza podczas prezentacji.",
    startsAt: null,
    endsAt: null,
    isActive: true,
    isPrimary: true,
    createdAt: now,
    updatedAt: now,
    updatedBy: null,
  },
  {
    id: "seed-tm7-nester",
    productName: "Thermomix TM7 z Nester",
    model: "TM7",
    priceCents: 671_500,
    installmentCents: null,
    installmentMonths: null,
    description: "Thermomix TM7 w zestawie z Nester — dodatkowym akcesorium do przygotowywania potraw.",
    imageMediaId: null,
    ctaLabel: "Sprawdź szczegóły",
    ctaHref: "/prezentacja",
    bonuses: ["Nester w zestawie"],
    conditions: "Cena orientacyjna — dokładne warunki i dostępne bonusy Aga potwierdza podczas prezentacji.",
    startsAt: null,
    endsAt: null,
    isActive: true,
    isPrimary: false,
    createdAt: now,
    updatedAt: now,
    updatedBy: null,
  },
  {
    id: "seed-tm7-akcesoria",
    productName: "Thermomix TM7 + Akcesoria",
    model: "TM7",
    priceCents: null,
    installmentCents: null,
    installmentMonths: null,
    description: "Thermomix TM7 rozszerzony o pakiet dodatkowych akcesoriów — zestaw dopasowany podczas prezentacji.",
    imageMediaId: null,
    ctaLabel: "Sprawdź szczegóły",
    ctaHref: "/prezentacja",
    bonuses: [],
    conditions: "Skład zestawu i cena ustalane indywidualnie z Agą.",
    startsAt: null,
    endsAt: null,
    isActive: true,
    isPrimary: false,
    createdAt: now,
    updatedAt: now,
    updatedBy: null,
  },
  {
    id: "seed-tm7-raty",
    productName: "Thermomix TM7 w 36 ratach 0%",
    model: "TM7",
    priceCents: 666_900,
    installmentCents: 15_747,
    installmentMonths: 36,
    description: "Thermomix TM7 rozłożony na 36 rat 0% — RRSO 0%, bez dodatkowych kosztów finansowania.",
    imageMediaId: null,
    ctaLabel: "Sprawdź szczegóły",
    ctaHref: "/finansowanie",
    bonuses: ["RATY 0%", "RRSO 0%"],
    conditions: "Rata orientacyjna przy wpłacie własnej 1000 zł — szczegółowe warunki finansowania zależą od aktualnej oferty oraz decyzji instytucji finansującej.",
    startsAt: null,
    endsAt: null,
    isActive: true,
    isPrimary: false,
    createdAt: now,
    updatedAt: now,
    updatedBy: null,
  },
];
