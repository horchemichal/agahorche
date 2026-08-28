/**
 * CMS-managed FAQ model (spec §10). Distinct from `FaqItem` in
 * `types/seo.ts`, which is the minimal question/answer shape the
 * rendering components (`FaqSection`, `faqPageSchema`) accept — a
 * `CmsFaqEntry` is converted to a `FaqItem` at read time
 * (`lib/database/repositories/faq-repository.ts#toFaqItem`). Keeping the
 * two separate means the render/schema layer doesn't need to know
 * anything about entity linking or CMS bookkeeping.
 */
export type FaqEntityType = "page" | "product" | "city" | "article" | "aga-club" | "global";

export interface CmsFaqEntry {
  id: string;
  question: string;
  answer: string;
  priority: number; // lower = shown first
  active: boolean;
  entityType: FaqEntityType;
  /** e.g. a location slug, blog post slug, or offer id — null for entityType "global". */
  entityId: string | null;
  createdAt: string;
  updatedAt: string;
}

export type CmsFaqEntryInput = Omit<CmsFaqEntry, "id" | "createdAt" | "updatedAt">;
