/**
 * CMS-managed generic page model (spec §7). These are pages an admin
 * creates ad hoc at a custom slug — distinct from the hand-built route
 * files under /app (homepage, /thermomix/tm7, etc.), which stay as they
 * are. Rendered by the root catch-all `app/[...slug]/page.tsx`, which only
 * matches when no more specific static route exists.
 */
export type PageStatus = "draft" | "published";

export interface CmsPage {
  id: string;
  slug: string; // without leading slash, e.g. "regulamin-promocji"
  title: string;
  /** Simple content model: an ordered list of paragraph/heading blocks — see lib/content/blocks.ts. */
  content: string;
  status: PageStatus;
  seoTitle: string | null;
  seoDescription: string | null;
  ogImageMediaId: string | null;
  canonicalPath: string | null;
  indexable: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy: string | null;
}

export type CmsPageInput = Omit<CmsPage, "id" | "createdAt" | "updatedAt" | "updatedBy">;
