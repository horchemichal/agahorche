import { randomUUID } from "node:crypto";
import type { BlogPostMeta } from "@/types/blog";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

export interface BlogPostRecord extends BlogPostMeta {
  content: string;
  scheduledFor: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
}

export type BlogPostInput = Omit<BlogPostRecord, "id" | "createdAt" | "updatedAt" | "publishedAt"> & {
  publishedAt?: string | null;
};

export interface BlogRepository {
  list(): Promise<BlogPostRecord[]>;
  get(id: string): Promise<BlogPostRecord | null>;
  getBySlug(slug: string): Promise<BlogPostRecord | null>;
  listPublished(): Promise<BlogPostRecord[]>;
  create(input: BlogPostInput, actorEmail: string | null): Promise<BlogPostRecord>;
  update(id: string, input: BlogPostInput, actorEmail: string | null): Promise<BlogPostRecord>;
  remove(id: string): Promise<void>;
}

function rowToPost(row: Record<string, unknown>): BlogPostRecord {
  return {
    id: row.id as string,
    slug: row.slug as string,
    title: row.title as string,
    excerpt: (row.excerpt as string) ?? "",
    content: (row.content as string) ?? "",
    category: row.category as BlogPostMeta["category"],
    cluster: row.cluster as BlogPostMeta["cluster"],
    relatedLocationSlug: (row.related_location_slug as string | null) ?? undefined,
    coverImage: (row.cover_image_media_id as string | null) ?? undefined,
    author: (row.author as BlogPostMeta["author"]) ?? "aga-horche",
    status: row.status as BlogPostMeta["status"],
    indexable: Boolean(row.indexable),
    seoTitle: (row.seo_title as string | null) ?? null,
    seoDescription: (row.seo_description as string | null) ?? null,
    scheduledFor: (row.scheduled_for as string | null) ?? null,
    publishedAt: (row.published_at as string | null) ?? (row.created_at as string),
    updatedAt: row.updated_at as string,
  };
}

function postToRow(input: BlogPostInput) {
  return {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    category: input.category,
    cluster: input.cluster,
    related_location_slug: input.relatedLocationSlug ?? null,
    cover_image_media_id: input.coverImage ?? null,
    author: input.author,
    status: input.status,
    indexable: input.indexable,
    seo_title: input.seoTitle,
    seo_description: input.seoDescription,
    scheduled_for: input.scheduledFor,
    published_at: input.publishedAt ?? null,
  };
}

class PostgresBlogRepository implements BlogRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<BlogPostRecord[]> {
    const result = await this.pool.query("select * from blog_posts order by updated_at desc");
    return result.rows.map(rowToPost);
  }

  async get(id: string): Promise<BlogPostRecord | null> {
    const result = await this.pool.query("select * from blog_posts where id = $1", [id]);
    return result.rows[0] ? rowToPost(result.rows[0]) : null;
  }

  async getBySlug(slug: string): Promise<BlogPostRecord | null> {
    const result = await this.pool.query("select * from blog_posts where slug = $1", [slug]);
    return result.rows[0] ? rowToPost(result.rows[0]) : null;
  }

  async listPublished(): Promise<BlogPostRecord[]> {
    const all = await this.list();
    const now = new Date();
    return all.filter((p) => p.status === "published" && (!p.publishedAt || new Date(p.publishedAt) <= now));
  }

  async create(input: BlogPostInput, actorEmail: string | null): Promise<BlogPostRecord> {
    try {
      const row = await pgInsert(this.pool, "blog_posts", { ...postToRow(input), updated_by: actorEmail });
      return rowToPost(row as Record<string, unknown>);
    } catch (error) {
      if (error instanceof Error && /unique/i.test(error.message)) {
        throw new Error("Artykuł z tym slugiem już istnieje.");
      }
      throw error;
    }
  }

  async update(id: string, input: BlogPostInput, actorEmail: string | null): Promise<BlogPostRecord> {
    try {
      const row = await pgUpdate(this.pool, "blog_posts", "id", id, {
        ...postToRow(input),
        updated_by: actorEmail,
        updated_at: new Date().toISOString(),
      });
      if (!row) throw new Error("Post not found");
      return rowToPost(row as Record<string, unknown>);
    } catch (error) {
      if (error instanceof Error && /unique/i.test(error.message)) {
        throw new Error("Artykuł z tym slugiem już istnieje.");
      }
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from blog_posts where id = $1", [id]);
  }
}

class InMemoryBlogRepository implements BlogRepository {
  private store = new MemoryStore<BlogPostRecord>((p) => p.id);

  async list(): Promise<BlogPostRecord[]> {
    return this.store.list().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }

  async get(id: string): Promise<BlogPostRecord | null> {
    return this.store.get(id) ?? null;
  }

  async getBySlug(slug: string): Promise<BlogPostRecord | null> {
    return this.store.list().find((p) => p.slug === slug) ?? null;
  }

  async listPublished(): Promise<BlogPostRecord[]> {
    const now = new Date();
    return this.store
      .list()
      .filter((p) => p.status === "published" && (!p.publishedAt || new Date(p.publishedAt) <= now));
  }

  async create(input: BlogPostInput, actorEmail: string | null): Promise<BlogPostRecord> {
    void actorEmail; // in-memory records don't track updated_by (see BlogPostRecord)
    if (this.store.list().some((p) => p.slug === input.slug)) {
      throw new Error("Artykuł z tym slugiem już istnieje.");
    }
    const now = new Date().toISOString();
    const record: BlogPostRecord = {
      ...input,
      id: randomUUID(),
      publishedAt: input.publishedAt ?? now,
      updatedAt: now,
    };
    return this.store.set(record);
  }

  async update(id: string, input: BlogPostInput, actorEmail: string | null): Promise<BlogPostRecord> {
    void actorEmail;
    const existing = this.store.get(id);
    if (!existing) throw new Error("Post not found");
    if (this.store.list().some((p) => p.slug === input.slug && p.id !== id)) {
      throw new Error("Artykuł z tym slugiem już istnieje.");
    }
    const updated: BlogPostRecord = {
      ...existing,
      ...input,
      publishedAt: input.publishedAt ?? existing.publishedAt,
      updatedAt: new Date().toISOString(),
    };
    return this.store.set(updated);
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getBlogRepository(): BlogRepository {
  return getGlobalSingleton("blogRepository", () =>
    isPostgresConfigured()
      ? new PostgresBlogRepository()
      : new InMemoryBlogRepository(),
  );
}
