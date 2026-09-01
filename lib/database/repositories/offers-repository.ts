import { randomUUID } from "node:crypto";
import type { Offer, OfferInput } from "@/types/offer";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";
import { SEED_OFFERS } from "@/data/offers/seed";
import { ofertaObowiazuje } from "@/lib/offers/window";

/**
 * Offers repository (spec §5, §21: "jedno źródło prawdy"). Every public
 * component that shows a price/CTA calls `getActiveOffer()` from here —
 * never a hardcoded value. `/admin/oferta` is the only writer.
 */
export interface OffersRepository {
  list(): Promise<Offer[]>;
  get(id: string): Promise<Offer | null>;
  /** The one offer flagged `isPrimary` and currently within its date window, if any. */
  getActiveOffer(): Promise<Offer | null>;
  create(input: OfferInput, actorEmail: string | null): Promise<Offer>;
  update(id: string, input: OfferInput, actorEmail: string | null): Promise<Offer>;
  remove(id: string): Promise<void>;
}

function withinWindow(offer: Offer, now: Date): boolean {
  return ofertaObowiazuje(offer.startsAt, offer.endsAt, now);
}

function rowToOffer(row: Record<string, unknown>): Offer {
  return {
    id: row.id as string,
    productName: row.product_name as string,
    model: row.model as string,
    priceCents: (row.price_cents as number | null) ?? null,
    installmentCents: (row.installment_cents as number | null) ?? null,
    installmentMonths: (row.installment_months as number | null) ?? null,
    description: (row.description as string) ?? "",
    imageMediaId: (row.image_media_id as string | null) ?? null,
    ctaLabel: row.cta_label as string,
    ctaHref: row.cta_href as string,
    bonuses: (row.bonuses as string[]) ?? [],
    conditions: (row.conditions as string) ?? "",
    startsAt: (row.starts_at as string | null) ?? null,
    endsAt: (row.ends_at as string | null) ?? null,
    isActive: Boolean(row.is_active),
    isPrimary: Boolean(row.is_primary),
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    updatedBy: (row.updated_by as string | null) ?? null,
  };
}

function offerToRow(input: OfferInput) {
  return {
    product_name: input.productName,
    model: input.model,
    price_cents: input.priceCents,
    installment_cents: input.installmentCents,
    installment_months: input.installmentMonths,
    description: input.description,
    image_media_id: input.imageMediaId,
    cta_label: input.ctaLabel,
    cta_href: input.ctaHref,
    bonuses: input.bonuses,
    conditions: input.conditions,
    starts_at: input.startsAt,
    ends_at: input.endsAt,
    is_active: input.isActive,
    is_primary: input.isPrimary,
  };
}

class PostgresOffersRepository implements OffersRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<Offer[]> {
    const result = await this.pool.query("select * from offers order by created_at desc");
    return result.rows.map(rowToOffer);
  }

  async get(id: string): Promise<Offer | null> {
    const result = await this.pool.query("select * from offers where id = $1", [id]);
    return result.rows[0] ? rowToOffer(result.rows[0]) : null;
  }

  async getActiveOffer(): Promise<Offer | null> {
    const result = await this.pool.query(
      "select * from offers where is_primary = true and is_active = true limit 1",
    );
    if (!result.rows[0]) return null;
    const offer = rowToOffer(result.rows[0]);
    return withinWindow(offer, new Date()) ? offer : null;
  }

  async create(input: OfferInput, actorEmail: string | null): Promise<Offer> {
    if (input.isPrimary) await this.clearOtherPrimaries(null);
    const row = await pgInsert(this.pool, "offers", { ...offerToRow(input), updated_by: actorEmail });
    return rowToOffer(row as Record<string, unknown>);
  }

  async update(id: string, input: OfferInput, actorEmail: string | null): Promise<Offer> {
    if (input.isPrimary) await this.clearOtherPrimaries(id);
    const row = await pgUpdate(this.pool, "offers", "id", id, {
      ...offerToRow(input),
      updated_by: actorEmail,
      updated_at: new Date().toISOString(),
    });
    if (!row) throw new Error("Offer not found");
    return rowToOffer(row as Record<string, unknown>);
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from offers where id = $1", [id]);
  }

  private async clearOtherPrimaries(exceptId: string | null) {
    if (exceptId) {
      await this.pool.query("update offers set is_primary = false where is_primary = true and id != $1", [exceptId]);
    } else {
      await this.pool.query("update offers set is_primary = false where is_primary = true");
    }
  }
}

class InMemoryOffersRepository implements OffersRepository {
  private store = new MemoryStore<Offer>((o) => o.id, SEED_OFFERS);

  async list(): Promise<Offer[]> {
    return this.store.list().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  async get(id: string): Promise<Offer | null> {
    return this.store.get(id) ?? null;
  }

  async getActiveOffer(): Promise<Offer | null> {
    const now = new Date();
    const primary = this.store.list().find((o) => o.isPrimary && o.isActive);
    if (!primary) return null;
    return withinWindow(primary, now) ? primary : null;
  }

  async create(input: OfferInput, actorEmail: string | null): Promise<Offer> {
    if (input.isPrimary) this.clearOtherPrimaries(null);
    const now = new Date().toISOString();
    const offer: Offer = { ...input, id: randomUUID(), createdAt: now, updatedAt: now, updatedBy: actorEmail };
    return this.store.set(offer);
  }

  async update(id: string, input: OfferInput, actorEmail: string | null): Promise<Offer> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("Offer not found");
    if (input.isPrimary) this.clearOtherPrimaries(id);
    const updated: Offer = { ...existing, ...input, updatedAt: new Date().toISOString(), updatedBy: actorEmail };
    return this.store.set(updated);
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }

  private clearOtherPrimaries(exceptId: string | null) {
    for (const offer of this.store.list()) {
      if (offer.isPrimary && offer.id !== exceptId) {
        this.store.set({ ...offer, isPrimary: false });
      }
    }
  }
}

export function getOffersRepository(): OffersRepository {
  return getGlobalSingleton("offersRepository", () =>
    isPostgresConfigured()
      ? new PostgresOffersRepository()
      : new InMemoryOffersRepository(),
  );
}
