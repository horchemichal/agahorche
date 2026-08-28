import { randomUUID } from "node:crypto";
import type { CmsPage, CmsPageInput } from "@/types/page";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

export interface PagesRepository {
  list(): Promise<CmsPage[]>;
  get(id: string): Promise<CmsPage | null>;
  getBySlug(slug: string): Promise<CmsPage | null>;
  create(input: CmsPageInput, actorEmail: string | null): Promise<CmsPage>;
  update(id: string, input: CmsPageInput, actorEmail: string | null): Promise<CmsPage>;
  remove(id: string): Promise<void>;
}

function rowToPage(row: Record<string, unknown>): CmsPage {
  return {
    id: row.id as string,
    slug: row.slug as string,
    title: row.title as string,
    content: (row.content as string) ?? "",
    status: row.status as CmsPage["status"],
    seoTitle: (row.seo_title as string | null) ?? null,
    seoDescription: (row.seo_description as string | null) ?? null,
    ogImageMediaId: (row.og_image_media_id as string | null) ?? null,
    canonicalPath: (row.canonical_path as string | null) ?? null,
    indexable: Boolean(row.indexable),
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    updatedBy: (row.updated_by as string | null) ?? null,
  };
}

function pageToRow(input: CmsPageInput) {
  return {
    slug: input.slug,
    title: input.title,
    content: input.content,
    status: input.status,
    seo_title: input.seoTitle,
    seo_description: input.seoDescription,
    og_image_media_id: input.ogImageMediaId,
    canonical_path: input.canonicalPath,
    indexable: input.indexable,
  };
}

class PostgresPagesRepository implements PagesRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<CmsPage[]> {
    const result = await this.pool.query("select * from cms_pages order by updated_at desc");
    return result.rows.map(rowToPage);
  }

  async get(id: string): Promise<CmsPage | null> {
    const result = await this.pool.query("select * from cms_pages where id = $1", [id]);
    return result.rows[0] ? rowToPage(result.rows[0]) : null;
  }

  async getBySlug(slug: string): Promise<CmsPage | null> {
    const result = await this.pool.query(
      "select * from cms_pages where slug = $1 and status = 'published'",
      [slug],
    );
    return result.rows[0] ? rowToPage(result.rows[0]) : null;
  }

  async create(input: CmsPageInput, actorEmail: string | null): Promise<CmsPage> {
    try {
      const row = await pgInsert(this.pool, "cms_pages", { ...pageToRow(input), updated_by: actorEmail });
      return rowToPage(row as Record<string, unknown>);
    } catch (error) {
      if (error instanceof Error && /unique/i.test(error.message)) {
        throw new Error("Strona z tym slugiem już istnieje.");
      }
      throw error;
    }
  }

  async update(id: string, input: CmsPageInput, actorEmail: string | null): Promise<CmsPage> {
    try {
      const row = await pgUpdate(this.pool, "cms_pages", "id", id, {
        ...pageToRow(input),
        updated_by: actorEmail,
        updated_at: new Date().toISOString(),
      });
      if (!row) throw new Error("Page not found");
      return rowToPage(row as Record<string, unknown>);
    } catch (error) {
      if (error instanceof Error && /unique/i.test(error.message)) {
        throw new Error("Strona z tym slugiem już istnieje.");
      }
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from cms_pages where id = $1", [id]);
  }
}

class InMemoryPagesRepository implements PagesRepository {
  private store = new MemoryStore<CmsPage>((p) => p.id);

  async list(): Promise<CmsPage[]> {
    return this.store.list().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }

  async get(id: string): Promise<CmsPage | null> {
    return this.store.get(id) ?? null;
  }

  async getBySlug(slug: string): Promise<CmsPage | null> {
    return this.store.list().find((p) => p.slug === slug && p.status === "published") ?? null;
  }

  async create(input: CmsPageInput, actorEmail: string | null): Promise<CmsPage> {
    if (this.store.list().some((p) => p.slug === input.slug)) {
      throw new Error("Strona z tym slugiem już istnieje.");
    }
    const now = new Date().toISOString();
    return this.store.set({ ...input, id: randomUUID(), createdAt: now, updatedAt: now, updatedBy: actorEmail });
  }

  async update(id: string, input: CmsPageInput, actorEmail: string | null): Promise<CmsPage> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("Page not found");
    if (this.store.list().some((p) => p.slug === input.slug && p.id !== id)) {
      throw new Error("Strona z tym slugiem już istnieje.");
    }
    return this.store.set({ ...existing, ...input, updatedAt: new Date().toISOString(), updatedBy: actorEmail });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getPagesRepository(): PagesRepository {
  return getGlobalSingleton("pagesRepository", () =>
    isPostgresConfigured()
      ? new PostgresPagesRepository()
      : new InMemoryPagesRepository(),
  );
}
