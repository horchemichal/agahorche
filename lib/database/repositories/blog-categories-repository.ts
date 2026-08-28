import type { BlogCategory } from "@/types/blog";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { BLOG_CATEGORIES as SEED_CATEGORIES } from "@/data/blog/categories";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * Category labels are editable; the set of category slugs is intentionally
 * fixed (it's a TypeScript union — `BlogCategory` — used across the blog
 * repository and public routing). Admin can rename how a category
 * displays, not invent new slugs, without a much bigger type-system change.
 */
export interface BlogCategoryRecord {
  slug: BlogCategory;
  label: string;
}

export interface BlogCategoriesRepository {
  list(): Promise<BlogCategoryRecord[]>;
  updateLabel(slug: BlogCategory, label: string): Promise<BlogCategoryRecord>;
}

class PostgresBlogCategoriesRepository implements BlogCategoriesRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<BlogCategoryRecord[]> {
    const result = await this.pool.query("select * from blog_categories order by slug");
    return result.rows as BlogCategoryRecord[];
  }

  async updateLabel(slug: BlogCategory, label: string): Promise<BlogCategoryRecord> {
    const result = await this.pool.query(
      "update blog_categories set label = $1 where slug = $2 returning *",
      [label, slug],
    );
    if (!result.rows[0]) throw new Error("Category not found");
    return result.rows[0] as BlogCategoryRecord;
  }
}

class InMemoryBlogCategoriesRepository implements BlogCategoriesRepository {
  private store = new MemoryStore<BlogCategoryRecord>((c) => c.slug, SEED_CATEGORIES);

  async list(): Promise<BlogCategoryRecord[]> {
    return this.store.list();
  }

  async updateLabel(slug: BlogCategory, label: string): Promise<BlogCategoryRecord> {
    const existing = this.store.get(slug);
    if (!existing) throw new Error("Category not found");
    return this.store.set({ ...existing, label });
  }
}

export function getBlogCategoriesRepository(): BlogCategoriesRepository {
  return getGlobalSingleton("blogCategoriesRepository", () =>
    isPostgresConfigured()
      ? new PostgresBlogCategoriesRepository()
      : new InMemoryBlogCategoriesRepository(),
  );
}
