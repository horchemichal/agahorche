/**
 * Global SEO defaults (spec §12). A singleton row — always id "global".
 * `lib/seo/metadata.ts#buildMetadata()` merges these as the fallback
 * layer under whatever a specific page passes in; per-page values always
 * win. This does not duplicate the SEO logic already in lib/seo — it's
 * the one new input source that logic reads from.
 */
export interface SeoSettings {
  id: "global";
  siteTitle: string;
  siteDescription: string;
  ogImageMediaId: string | null;
  faviconMediaId: string | null;
  robotsDefault: "index,follow" | "noindex,follow";
  sitemapEnabled: boolean;
  updatedAt: string;
  updatedBy: string | null;
}

export type SeoSettingsInput = Omit<SeoSettings, "id" | "updatedAt" | "updatedBy">;
