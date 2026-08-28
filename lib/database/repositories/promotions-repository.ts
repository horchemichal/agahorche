import { randomUUID } from "node:crypto";
import type { Promotion, PromotionInput, PromotionStatus } from "@/types/promotion";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/** Computed status (spec §6) — never trust a stored "ACTIVE" field alone. */
export function computePromotionStatus(promo: Promotion, now: Date = new Date()): PromotionStatus {
  if (promo.isDraft) return "DRAFT";
  const starts = new Date(promo.startsAt);
  const ends = new Date(promo.endsAt);
  if (now < starts) return "SCHEDULED";
  if (now > ends) return "EXPIRED";
  return "ACTIVE";
}

export interface PromotionsRepository {
  list(): Promise<Promotion[]>;
  get(id: string): Promise<Promotion | null>;
  listActive(): Promise<Promotion[]>;
  create(input: PromotionInput, actorEmail: string | null): Promise<Promotion>;
  update(id: string, input: PromotionInput, actorEmail: string | null): Promise<Promotion>;
  remove(id: string): Promise<void>;
}

function rowToPromotion(row: Record<string, unknown>): Promotion {
  return {
    id: row.id as string,
    title: row.title as string,
    shortDescription: (row.short_description as string) ?? "",
    fullDescription: (row.full_description as string) ?? "",
    imageMediaId: (row.image_media_id as string | null) ?? null,
    ctaLabel: row.cta_label as string,
    ctaHref: row.cta_href as string,
    startsAt: row.starts_at as string,
    endsAt: row.ends_at as string,
    priority: (row.priority as number) ?? 0,
    isDraft: Boolean(row.is_draft),
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    updatedBy: (row.updated_by as string | null) ?? null,
  };
}

function promotionToRow(input: PromotionInput) {
  return {
    title: input.title,
    short_description: input.shortDescription,
    full_description: input.fullDescription,
    image_media_id: input.imageMediaId,
    cta_label: input.ctaLabel,
    cta_href: input.ctaHref,
    starts_at: input.startsAt,
    ends_at: input.endsAt,
    priority: input.priority,
    is_draft: input.isDraft,
  };
}

class PostgresPromotionsRepository implements PromotionsRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<Promotion[]> {
    const result = await this.pool.query("select * from promotions order by priority desc");
    return result.rows.map(rowToPromotion);
  }

  async get(id: string): Promise<Promotion | null> {
    const result = await this.pool.query("select * from promotions where id = $1", [id]);
    return result.rows[0] ? rowToPromotion(result.rows[0]) : null;
  }

  async listActive(): Promise<Promotion[]> {
    const all = await this.list();
    const now = new Date();
    return all.filter((p) => computePromotionStatus(p, now) === "ACTIVE").sort((a, b) => b.priority - a.priority);
  }

  async create(input: PromotionInput, actorEmail: string | null): Promise<Promotion> {
    const row = await pgInsert(this.pool, "promotions", { ...promotionToRow(input), updated_by: actorEmail });
    return rowToPromotion(row as Record<string, unknown>);
  }

  async update(id: string, input: PromotionInput, actorEmail: string | null): Promise<Promotion> {
    const row = await pgUpdate(this.pool, "promotions", "id", id, {
      ...promotionToRow(input),
      updated_by: actorEmail,
      updated_at: new Date().toISOString(),
    });
    if (!row) throw new Error("Promotion not found");
    return rowToPromotion(row as Record<string, unknown>);
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from promotions where id = $1", [id]);
  }
}

class InMemoryPromotionsRepository implements PromotionsRepository {
  private store = new MemoryStore<Promotion>((p) => p.id);

  async list(): Promise<Promotion[]> {
    return this.store.list().sort((a, b) => b.priority - a.priority);
  }

  async get(id: string): Promise<Promotion | null> {
    return this.store.get(id) ?? null;
  }

  async listActive(): Promise<Promotion[]> {
    const now = new Date();
    return this.store
      .list()
      .filter((p) => computePromotionStatus(p, now) === "ACTIVE")
      .sort((a, b) => b.priority - a.priority);
  }

  async create(input: PromotionInput, actorEmail: string | null): Promise<Promotion> {
    const now = new Date().toISOString();
    return this.store.set({ ...input, id: randomUUID(), createdAt: now, updatedAt: now, updatedBy: actorEmail });
  }

  async update(id: string, input: PromotionInput, actorEmail: string | null): Promise<Promotion> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("Promotion not found");
    return this.store.set({ ...existing, ...input, updatedAt: new Date().toISOString(), updatedBy: actorEmail });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getPromotionsRepository(): PromotionsRepository {
  return getGlobalSingleton("promotionsRepository", () =>
    isPostgresConfigured()
      ? new PostgresPromotionsRepository()
      : new InMemoryPromotionsRepository(),
  );
}
