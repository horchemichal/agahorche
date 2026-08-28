import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { getIndexableLocations } from "@/lib/locations";
import { DISTRICT_CONTENT } from "@/data/locations/districts";
import { getBlogRepository } from "@/lib/database/repositories/blog-repository";
import { getPagesRepository } from "@/lib/database/repositories/pages-repository";
import { getSeoSettingsRepository } from "@/lib/database/repositories/seo-settings-repository";

/**
 * Dynamic sitemap (spec §27, Aga Admin §12). Composed from four sources —
 * static routes, the location engine, the blog repository, and CMS pages —
 * and filters strictly on `indexable`/`status` flags so nothing noindex,
 * unbuilt, or thin ever lands in the sitemap. As locations/posts/pages are
 * promoted to indexable/published in Aga Admin, they appear here
 * automatically. Respects the global "Wyłącz sitemapę" kill switch in
 * /admin/seo.
 */

/**
 * Generowana przy żądaniu, nie w trakcie builda — z tego samego powodu co
 * `force-dynamic` w app/(site)/layout.tsx: obraz Dockera budowany bez
 * dostępu do bazy zamroziłby tu nieaktualną listę adresów.
 */
export const dynamic = "force-dynamic";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/thermomix", priority: 0.9, changeFrequency: "weekly" },
  { path: "/thermomix/tm7", priority: 0.8, changeFrequency: "monthly" },
  { path: "/thermomix/tm6", priority: 0.65, changeFrequency: "monthly" },
  { path: "/thermomix/tm7-vs-tm6", priority: 0.8, changeFrequency: "monthly" },
  { path: "/thermomix/wady-i-zalety", priority: 0.7, changeFrequency: "monthly" },
  { path: "/thermomix/funkcje", priority: 0.7, changeFrequency: "monthly" },
  { path: "/thermomix/dla-rodziny", priority: 0.6, changeFrequency: "monthly" },
  { path: "/thermomix/dla-mamy", priority: 0.6, changeFrequency: "monthly" },
  { path: "/thermomix/dla-poczatkujacych", priority: 0.6, changeFrequency: "monthly" },
  { path: "/diety", priority: 0.8, changeFrequency: "weekly" },
  { path: "/diety/keto", priority: 0.6, changeFrequency: "monthly" },
  { path: "/diety/wegetarianska", priority: 0.6, changeFrequency: "monthly" },
  { path: "/diety/odchudzajaca", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/niski-ig", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/hashimoto", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/zamienniki", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/bezglutenowa", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/dla-dzieci", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/kobiety-karmiace", priority: 0.45, changeFrequency: "monthly" },
  { path: "/diety/niemowleta", priority: 0.45, changeFrequency: "monthly" },
  { path: "/prezentacja", priority: 0.9, changeFrequency: "weekly" },
  { path: "/prezentacja/jak-wyglada", priority: 0.75, changeFrequency: "monthly" },
  { path: "/prezentacja/w-domu", priority: 0.7, changeFrequency: "monthly" },
  { path: "/jak-kupic-thermomix", priority: 0.7, changeFrequency: "monthly" },
  { path: "/finansowanie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/akcesoria", priority: 0.6, changeFrequency: "monthly" },
  { path: "/o-mnie", priority: 0.6, changeFrequency: "monthly" },
  { path: "/opinie", priority: 0.5, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.5, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/aga-club", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/miasta", priority: 0.6, changeFrequency: "weekly" },
  { path: "/wojewodztwa", priority: 0.6, changeFrequency: "weekly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const settings = await getSeoSettingsRepository().get();
  if (!settings.sitemapEnabled) return [];

  const now = new Date();

  const [indexableLocations, publishedPosts, publishedPages] = await Promise.all([
    getIndexableLocations(),
    getBlogRepository().listPublished(),
    getPagesRepository().list(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationEntries: MetadataRoute.Sitemap = indexableLocations.map((location) => ({
    url: `${SITE.url}${location.urlPath}`,
    lastModified: location.updatedAt,
    changeFrequency: "monthly",
    priority: location.tier === "A" ? 0.7 : location.tier === "B" ? 0.55 : 0.4,
  }));

  /**
   * Dzielnice nie przechodzą przez `getIndexableLocations()`, bo nie mają
   * wierszy w tabeli lokalizacji (patrz komentarz w routingu). Każda ma
   * ręcznie napisaną treść — inaczej nie trafiłaby do `DISTRICT_CONTENT` —
   * więc wszystkie wchodzą do sitemapy. Priorytet niższy niż miasta:
   * to strony wspierające, a nie docelowe.
   */
  const districtEntries: MetadataRoute.Sitemap = DISTRICT_CONTENT.map((district) => ({
    url: `${SITE.url}${district.urlPath}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const blogEntries: MetadataRoute.Sitemap = publishedPosts
    .filter((p) => p.indexable)
    .map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  const pageEntries: MetadataRoute.Sitemap = publishedPages
    .filter((p) => p.status === "published" && p.indexable)
    .map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: "monthly",
      priority: 0.4,
    }));

  return [...staticEntries, ...locationEntries, ...districtEntries, ...blogEntries, ...pageEntries];
}
