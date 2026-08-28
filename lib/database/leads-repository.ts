import type { LeadRecord, LeadStatus } from "@/types/lead";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * Repository interface for lead storage (spec §13/§22). Used by
 * /api/leads (create) and /admin/leady (list/update/get). Supabase-backed
 * when configured, falling back to an in-memory store for local dev —
 * same pattern as every other repository in /lib/database/repositories.
 */
export interface LeadsRepository {
  create(record: LeadRecord): Promise<LeadRecord>;
  list(): Promise<LeadRecord[]>;
  get(id: string): Promise<LeadRecord | null>;
  updateStatus(id: string, status: LeadStatus): Promise<LeadRecord>;
  /**
   * Trwałe usunięcie zgłoszenia. Potrzebne nie tylko do porządków w panelu —
   * lead to dane osobowe (imię, telefon, e-mail), więc gdy ktoś poprosi
   * o usunięcie swoich danych, musi istnieć sposób, żeby to zrobić.
   */
  remove(id: string): Promise<void>;
}

function rowToLead(row: Record<string, unknown>): LeadRecord {
  return {
    id: row.id as string,
    createdAt: row.created_at as string,
    values: {
      name: row.name as string,
      phone: row.phone as string,
      email: row.email as string,
      city: row.city as string,
      preferredDate: (row.preferred_date as string | null) ?? undefined,
      message: (row.message as string | null) ?? undefined,
      presentationType: (row.presentation_type as LeadRecord["values"]["presentationType"]) ?? undefined,
      consentProcessing: Boolean(row.consent_processing),
      consentMarketing: Boolean(row.consent_marketing),
    },
    source: row.source as LeadRecord["source"],
    sourcePath: row.source_path as string,
    utm: (row.utm as Record<string, string> | null) ?? undefined,
    status: row.status as LeadStatus,
  };
}

class PostgresLeadsRepository implements LeadsRepository {
  private pool = getPostgresPool()!;

  async create(record: LeadRecord): Promise<LeadRecord> {
    const result = await this.pool.query(
      `insert into leads
        (id, name, phone, email, city, preferred_date, message, presentation_type,
         consent_processing, consent_marketing, source, source_path, utm, status)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
       returning *`,
      [
        record.id,
        record.values.name,
        record.values.phone,
        record.values.email,
        record.values.city,
        record.values.preferredDate,
        record.values.message,
        record.values.presentationType,
        record.values.consentProcessing,
        record.values.consentMarketing ?? false,
        record.source,
        record.sourcePath,
        record.utm ?? null,
        record.status,
      ],
    );
    return rowToLead(result.rows[0]);
  }

  async list(): Promise<LeadRecord[]> {
    const result = await this.pool.query("select * from leads order by created_at desc");
    return result.rows.map(rowToLead);
  }

  async get(id: string): Promise<LeadRecord | null> {
    const result = await this.pool.query("select * from leads where id = $1", [id]);
    return result.rows[0] ? rowToLead(result.rows[0]) : null;
  }

  async updateStatus(id: string, status: LeadStatus): Promise<LeadRecord> {
    const result = await this.pool.query("update leads set status = $1 where id = $2 returning *", [status, id]);
    if (!result.rows[0]) throw new Error("Lead not found");
    return rowToLead(result.rows[0]);
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from leads where id = $1", [id]);
  }
}

class InMemoryLeadsRepository implements LeadsRepository {
  private store = new MemoryStore<LeadRecord>((l) => l.id);

  async create(record: LeadRecord): Promise<LeadRecord> {
    return this.store.set(record);
  }

  async list(): Promise<LeadRecord[]> {
    return this.store.list().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  async get(id: string): Promise<LeadRecord | null> {
    return this.store.get(id) ?? null;
  }

  async updateStatus(id: string, status: LeadStatus): Promise<LeadRecord> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("Lead not found");
    return this.store.set({ ...existing, status });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getLeadsRepository(): LeadsRepository {
  return getGlobalSingleton("leadsRepository", () =>
    isPostgresConfigured()
      ? new PostgresLeadsRepository()
      : new InMemoryLeadsRepository(),
  );
}
