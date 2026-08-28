import type { HomepageContent, HomepageContentInput } from "@/types/homepage-content";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * Defaults mirror the copy that was previously hardcoded directly in
 * components/marketing/hero.tsx and service-area-section.tsx — moving them
 * here doesn't change what visitors see until Aga actually edits something
 * in /admin/strona-glowna.
 */
const DEFAULT_CONTENT: HomepageContent = {
  id: "global",
  heroHeadline: "Przedstawiciel Thermomix® w Bochni i Małopolsce – Thermomix TM7",
  heroDescription:
    "Aga Horche – oficjalna przedstawicielka Thermomix®. Umów bezpłatną i niezobowiązującą prezentację Thermomix TM7 w Bochni, Krakowie, Brzesku, Wieliczce, Niepołomicach i okolicy. Zobacz urządzenie na żywo, poznaj jego możliwości, aktualną cenę i dostępne formy finansowania.",
  heroImageMediaId: null,
  serviceAreaIntro: "Obsługuję klientów w całej Polsce — na miejscu jestem najczęściej w Małopolsce.",
  serviceAreaImageMediaId: null,
  serviceAreaCities: ["Kraków", "Bochnia", "Brzesko", "Tarnów", "Wieliczka", "Niepołomice", "Dobczyce", "Limanowa"],
  instagramReelUrls: [],
  updatedAt: new Date(0).toISOString(),
  updatedBy: null,
};

export interface HomepageContentRepository {
  get(): Promise<HomepageContent>;
  update(input: HomepageContentInput, actorEmail: string | null): Promise<HomepageContent>;
}

function rowToContent(row: Record<string, unknown>): HomepageContent {
  return {
    id: "global",
    heroHeadline: row.hero_headline as string,
    heroDescription: row.hero_description as string,
    heroImageMediaId: (row.hero_image_media_id as string | null) ?? null,
    serviceAreaIntro: row.service_area_intro as string,
    serviceAreaImageMediaId: (row.service_area_image_media_id as string | null) ?? null,
    serviceAreaCities: (row.service_area_cities as string[] | null) ?? [],
    instagramReelUrls: (row.instagram_reel_urls as string[] | null) ?? [],
    updatedAt: row.updated_at as string,
    updatedBy: (row.updated_by as string | null) ?? null,
  };
}

class PostgresHomepageContentRepository implements HomepageContentRepository {
  private pool = getPostgresPool()!;

  async get(): Promise<HomepageContent> {
    const result = await this.pool.query("select * from homepage_content where id = 'global'");
    return result.rows[0] ? rowToContent(result.rows[0]) : DEFAULT_CONTENT;
  }

  async update(input: HomepageContentInput, actorEmail: string | null): Promise<HomepageContent> {
    const result = await this.pool.query(
      `update homepage_content set
        hero_headline = $1, hero_description = $2, hero_image_media_id = $3,
        service_area_intro = $4, service_area_image_media_id = $5, service_area_cities = $6,
        instagram_reel_urls = $7, updated_by = $8, updated_at = now()
       where id = 'global'
       returning *`,
      [
        input.heroHeadline,
        input.heroDescription,
        input.heroImageMediaId,
        input.serviceAreaIntro,
        input.serviceAreaImageMediaId,
        input.serviceAreaCities,
        input.instagramReelUrls,
        actorEmail,
      ],
    );
    return rowToContent(result.rows[0]);
  }
}

class InMemoryHomepageContentRepository implements HomepageContentRepository {
  private current: HomepageContent = { ...DEFAULT_CONTENT };

  async get(): Promise<HomepageContent> {
    return this.current;
  }

  async update(input: HomepageContentInput, actorEmail: string | null): Promise<HomepageContent> {
    this.current = {
      ...this.current,
      ...input,
      updatedAt: new Date().toISOString(),
      updatedBy: actorEmail,
    };
    return this.current;
  }
}

export function getHomepageContentRepository(): HomepageContentRepository {
  return getGlobalSingleton("homepageContentRepository", () =>
    isPostgresConfigured()
      ? new PostgresHomepageContentRepository()
      : new InMemoryHomepageContentRepository(),
  );
}
