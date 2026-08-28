import { randomUUID } from "node:crypto";
import type { CmsFaqEntry, CmsFaqEntryInput, FaqEntityType } from "@/types/faq";
import type { FaqItem } from "@/types/seo";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { GLOBAL_FAQ } from "@/data/faq/global";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

const SEED_ENTRIES: CmsFaqEntry[] = GLOBAL_FAQ.map((item, index) => ({
  id: `seed-global-${index}`,
  question: item.question,
  answer: item.answer,
  priority: index,
  active: true,
  entityType: "global",
  entityId: null,
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
}));

export interface FaqRepository {
  list(): Promise<CmsFaqEntry[]>;
  get(id: string): Promise<CmsFaqEntry | null>;
  listForEntity(entityType: FaqEntityType, entityId: string | null): Promise<CmsFaqEntry[]>;
  create(input: CmsFaqEntryInput): Promise<CmsFaqEntry>;
  update(id: string, input: CmsFaqEntryInput): Promise<CmsFaqEntry>;
  remove(id: string): Promise<void>;
}

/** Adapts a CMS entry to the minimal shape the render/schema layer expects. */
export function toFaqItem(entry: CmsFaqEntry): FaqItem {
  return { question: entry.question, answer: entry.answer };
}

function rowToFaq(row: Record<string, unknown>): CmsFaqEntry {
  return {
    id: row.id as string,
    question: row.question as string,
    answer: row.answer as string,
    priority: (row.priority as number) ?? 0,
    active: Boolean(row.active),
    entityType: row.entity_type as FaqEntityType,
    entityId: (row.entity_id as string | null) ?? null,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

function faqToRow(input: CmsFaqEntryInput) {
  return {
    question: input.question,
    answer: input.answer,
    priority: input.priority,
    active: input.active,
    entity_type: input.entityType,
    entity_id: input.entityId,
  };
}

class PostgresFaqRepository implements FaqRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<CmsFaqEntry[]> {
    const result = await this.pool.query("select * from faqs order by priority asc");
    return result.rows.map(rowToFaq);
  }

  async get(id: string): Promise<CmsFaqEntry | null> {
    const result = await this.pool.query("select * from faqs where id = $1", [id]);
    return result.rows[0] ? rowToFaq(result.rows[0]) : null;
  }

  async listForEntity(entityType: FaqEntityType, entityId: string | null): Promise<CmsFaqEntry[]> {
    const result = entityId
      ? await this.pool.query(
          "select * from faqs where entity_type = $1 and active = true and entity_id = $2 order by priority asc",
          [entityType, entityId],
        )
      : await this.pool.query(
          "select * from faqs where entity_type = $1 and active = true and entity_id is null order by priority asc",
          [entityType],
        );
    return result.rows.map(rowToFaq);
  }

  async create(input: CmsFaqEntryInput): Promise<CmsFaqEntry> {
    const row = await pgInsert(this.pool, "faqs", faqToRow(input));
    return rowToFaq(row as Record<string, unknown>);
  }

  async update(id: string, input: CmsFaqEntryInput): Promise<CmsFaqEntry> {
    const row = await pgUpdate(this.pool, "faqs", "id", id, {
      ...faqToRow(input),
      updated_at: new Date().toISOString(),
    });
    if (!row) throw new Error("FAQ not found");
    return rowToFaq(row as Record<string, unknown>);
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from faqs where id = $1", [id]);
  }
}

class InMemoryFaqRepository implements FaqRepository {
  private store = new MemoryStore<CmsFaqEntry>((f) => f.id, SEED_ENTRIES);

  async list(): Promise<CmsFaqEntry[]> {
    return this.store.list().sort((a, b) => a.priority - b.priority);
  }

  async get(id: string): Promise<CmsFaqEntry | null> {
    return this.store.get(id) ?? null;
  }

  async listForEntity(entityType: FaqEntityType, entityId: string | null): Promise<CmsFaqEntry[]> {
    return this.store
      .list()
      .filter((f) => f.entityType === entityType && f.entityId === entityId && f.active)
      .sort((a, b) => a.priority - b.priority);
  }

  async create(input: CmsFaqEntryInput): Promise<CmsFaqEntry> {
    const now = new Date().toISOString();
    return this.store.set({ ...input, id: randomUUID(), createdAt: now, updatedAt: now });
  }

  async update(id: string, input: CmsFaqEntryInput): Promise<CmsFaqEntry> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("FAQ not found");
    return this.store.set({ ...existing, ...input, updatedAt: new Date().toISOString() });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getFaqRepository(): FaqRepository {
  return getGlobalSingleton("faqRepository", () =>
    isPostgresConfigured()
      ? new PostgresFaqRepository()
      : new InMemoryFaqRepository(),
  );
}
