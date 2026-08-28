/**
 * SEO domain types shared by the metadata engine, scoring engine and
 * schema.org component library.
 */

export interface SeoInput {
  /** Page title WITHOUT the site suffix — the metadata builder appends it. */
  title: string;
  description: string;
  path: string; // e.g. "/thermomix/krakow"
  /** Override robots directive; defaults to "index,follow". */
  robots?: "index,follow" | "noindex,follow" | "noindex,nofollow";
  /** Explicit canonical path override; defaults to `path`. */
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  /**
   * Nagłówek i opis dla Open Graph / Twittera, gdy mają się różnić od
   * `title`/`description`. Tytuł w SERP-ie i tytuł na kaflu udostępnionym
   * w Messengerze mają dwa różne zadania: pierwszy walczy o frazę i musi
   * zmieścić się w ~60 znakach, drugi ma zachęcić człowieka do kliknięcia
   * i nie ma po co powtarzać „| Aga Horche”. Bez tych pól OG dziedziczy
   * `title`/`description` — co dla większości podstron jest w porządku.
   */
  ogTitle?: string;
  ogDescription?: string;
  /** ISO date strings, only relevant for article-type content. */
  publishedAt?: string;
  updatedAt?: string;
  keywords?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Inputs to the 0-100 SEO scoring model (spec §26).
 * Every field is optional because most of it only becomes available once
 * Search Console / Analytics integrations are wired up (see /lib/seo/scoring.ts
 * for how missing data is handled).
 */
export interface SeoScoreInputs {
  population?: number;
  tier: "A" | "B" | "C" | "long-tail";
  hasDedicatedContent: boolean;
  internalLinksCount?: number;
  searchConsole?: {
    clicks: number;
    impressions: number;
    ctr: number; // 0-1
    avgPosition: number;
  };
  organicSessions?: number;
  /** Rough manual competition estimate 0 (none) - 100 (very competitive). */
  competitionEstimate?: number;
}

export interface SeoScoreResult {
  score: number; // 0-100
  breakdown: Record<string, number>;
  recommendation: "build" | "optimize" | "expand" | "hold";
}

export type InternalLinkGroup =
  | "primary-nav"
  | "hierarchy-up"
  | "hierarchy-down"
  | "nearby"
  | "related-content"
  | "conversion";

export interface InternalLink {
  href: string;
  label: string;
  group: InternalLinkGroup;
  /** rel="nofollow" almost never needed internally; kept for completeness. */
  rel?: string;
}
