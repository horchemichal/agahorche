import "server-only";
import { getLeadsRepository } from "@/lib/database/leads-repository";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { getPromotionsRepository } from "@/lib/database/repositories/promotions-repository";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getSeoSettingsRepository } from "@/lib/database/repositories/seo-settings-repository";
import { isPostgresConfigured } from "@/lib/database/postgres";
import type { LeadRecord } from "@/types/lead";
import type { Offer } from "@/types/offer";
import type { Promotion } from "@/types/promotion";
import type { BlogPostRecord } from "@/lib/database/repositories/blog-repository";
import type { SeoSettings } from "@/types/seo-settings";

export interface DailyCount {
  date: string; // YYYY-MM-DD
  count: number;
}

export interface DashboardStats {
  leads: {
    total: number;
    new: number;
    presentationRequests: number;
    last14Days: DailyCount[];
  };
  activeOffer: Offer | null;
  activePromotions: Promotion[];
  recentPosts: BlogPostRecord[];
  seo: SeoSettings;
  integrations: {
    database: boolean;
    n8nLead: boolean;
    n8nSeo: boolean;
    n8nSocial: boolean;
    ai: boolean;
    gtm: boolean;
  };
}

function toDateKey(iso: string, now: Date): string | null {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  // Only bucket real values — an unparsable createdAt is skipped rather
  // than silently attributed to "today".
  void now;
  return d.toISOString().slice(0, 10);
}

function buildLast14Days(leads: LeadRecord[], now: Date): DailyCount[] {
  const buckets = new Map<string, number>();
  const days: string[] = [];
  for (let i = 13; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push(key);
    buckets.set(key, 0);
  }

  for (const lead of leads) {
    const key = toDateKey(lead.createdAt, now);
    if (key && buckets.has(key)) {
      buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }
  }

  return days.map((date) => ({ date, count: buckets.get(date) ?? 0 }));
}

/**
 * Aggregates everything the dashboard shows (spec §16 ETAP 5) from the
 * real repositories — no invented numbers. Anything without a real data
 * source yet (popular cities/pages need Search Console/Analytics, wired
 * in a later stage) is deliberately left out rather than faked; the page
 * shows an explicit "not connected yet" note for those instead.
 */
export async function getDashboardStats(now: Date = new Date()): Promise<DashboardStats> {
  const [leads, activeOffer, activePromotions, allPosts, seo] = await Promise.all([
    getLeadsRepository().list(),
    getOffersRepository().getActiveOffer(),
    getPromotionsRepository().listActive(),
    getBlogRepository().list(),
    getSeoSettingsRepository().get(),
  ]);

  const recentPosts = [...allPosts]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return {
    leads: {
      total: leads.length,
      new: leads.filter((l) => l.status === "NEW").length,
      presentationRequests: leads.filter((l) => Boolean(l.values.presentationType)).length,
      last14Days: buildLast14Days(leads, now),
    },
    activeOffer,
    activePromotions,
    recentPosts,
    seo,
    integrations: {
      database: isPostgresConfigured(),
      n8nLead: Boolean(process.env.N8N_LEAD_WEBHOOK_URL),
      n8nSeo: Boolean(process.env.N8N_SEO_WEBHOOK_URL),
      n8nSocial: Boolean(process.env.N8N_SOCIAL_WEBHOOK_URL),
      ai: Boolean(process.env.AI_API_KEY),
      gtm: Boolean(process.env.NEXT_PUBLIC_GTM_ID),
    },
  };
}
