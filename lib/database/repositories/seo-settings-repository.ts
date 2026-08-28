import type { SeoSettings, SeoSettingsInput } from "@/types/seo-settings";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { SITE } from "@/lib/utils";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

const DEFAULT_SETTINGS: SeoSettings = {
  id: "global",
  siteTitle: `${SITE.name} — Przedstawicielka Thermomix`,
  siteDescription:
    "Bezpłatne prezentacje Thermomix z Agą Horche. Umów spotkanie u siebie w domu i poznaj TM7.",
  ogImageMediaId: null,
  faviconMediaId: null,
  robotsDefault: "index,follow",
  sitemapEnabled: true,
  updatedAt: new Date(0).toISOString(),
  updatedBy: null,
};

export interface SeoSettingsRepository {
  get(): Promise<SeoSettings>;
  update(input: SeoSettingsInput, actorEmail: string | null): Promise<SeoSettings>;
}

function rowToSettings(row: Record<string, unknown>): SeoSettings {
  return {
    id: "global",
    siteTitle: row.site_title as string,
    siteDescription: row.site_description as string,
    ogImageMediaId: (row.og_image_media_id as string | null) ?? null,
    faviconMediaId: (row.favicon_media_id as string | null) ?? null,
    robotsDefault: row.robots_default as SeoSettings["robotsDefault"],
    sitemapEnabled: Boolean(row.sitemap_enabled),
    updatedAt: row.updated_at as string,
    updatedBy: (row.updated_by as string | null) ?? null,
  };
}

class PostgresSeoSettingsRepository implements SeoSettingsRepository {
  private pool = getPostgresPool()!;

  async get(): Promise<SeoSettings> {
    const result = await this.pool.query("select * from seo_settings where id = 'global'");
    return result.rows[0] ? rowToSettings(result.rows[0]) : DEFAULT_SETTINGS;
  }

  async update(input: SeoSettingsInput, actorEmail: string | null): Promise<SeoSettings> {
    const result = await this.pool.query(
      `update seo_settings set
        site_title = $1, site_description = $2, og_image_media_id = $3, favicon_media_id = $4,
        robots_default = $5, sitemap_enabled = $6, updated_by = $7, updated_at = now()
       where id = 'global'
       returning *`,
      [
        input.siteTitle,
        input.siteDescription,
        input.ogImageMediaId,
        input.faviconMediaId,
        input.robotsDefault,
        input.sitemapEnabled,
        actorEmail,
      ],
    );
    return rowToSettings(result.rows[0]);
  }
}

class InMemorySeoSettingsRepository implements SeoSettingsRepository {
  private current: SeoSettings = { ...DEFAULT_SETTINGS };

  async get(): Promise<SeoSettings> {
    return this.current;
  }

  async update(input: SeoSettingsInput, actorEmail: string | null): Promise<SeoSettings> {
    this.current = {
      ...this.current,
      ...input,
      updatedAt: new Date().toISOString(),
      updatedBy: actorEmail,
    };
    return this.current;
  }
}

export function getSeoSettingsRepository(): SeoSettingsRepository {
  return getGlobalSingleton("seoSettingsRepository", () =>
    isPostgresConfigured()
      ? new PostgresSeoSettingsRepository()
      : new InMemorySeoSettingsRepository(),
  );
}
