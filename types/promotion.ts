/**
 * Promotion model (spec §6). Status is a COMPUTED value derived from dates
 * + `isDraft`, not a field an admin sets directly for the time-based
 * states — see `lib/promotions/status.ts#computePromotionStatus()`. This
 * avoids the classic CMS bug where "ACTIVE" is stored but the end date has
 * already passed.
 */
export type PromotionStatus = "DRAFT" | "SCHEDULED" | "ACTIVE" | "EXPIRED";

export interface Promotion {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageMediaId: string | null;
  ctaLabel: string;
  ctaHref: string;
  startsAt: string; // ISO date
  endsAt: string; // ISO date
  priority: number; // higher = shown first among concurrently active promos
  /** Explicit editorial draft flag — independent of the date-derived status. */
  isDraft: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy: string | null;
}

export type PromotionInput = Omit<Promotion, "id" | "createdAt" | "updatedAt" | "updatedBy">;
