import { randomUUID } from "node:crypto";
import type { AuditLogEntry } from "@/types/admin";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * Append-only audit log (spec §22). Deliberately minimal — one insert
 * function, one list function. Every admin Server Action that mutates data
 * calls `recordAuditEvent()` after a successful write; see
 * `lib/admin/actions-helpers.ts`.
 */
export interface AuditLogRepository {
  record(entry: Omit<AuditLogEntry, "id" | "createdAt">): Promise<void>;
  list(limit?: number): Promise<AuditLogEntry[]>;
}

class PostgresAuditLogRepository implements AuditLogRepository {
  private pool = getPostgresPool()!;

  async record(entry: Omit<AuditLogEntry, "id" | "createdAt">): Promise<void> {
    await this.pool.query(
      "insert into audit_log (actor_email, entity_type, entity_id, action, summary) values ($1, $2, $3, $4, $5)",
      [entry.actorEmail, entry.entityType, entry.entityId, entry.action, entry.summary],
    );
  }

  async list(limit = 50): Promise<AuditLogEntry[]> {
    const result = await this.pool.query("select * from audit_log order by created_at desc limit $1", [limit]);
    return result.rows.map((row) => ({
      id: row.id,
      actorEmail: row.actor_email,
      entityType: row.entity_type,
      entityId: row.entity_id,
      action: row.action,
      summary: row.summary,
      createdAt: row.created_at,
    }));
  }
}

class InMemoryAuditLogRepository implements AuditLogRepository {
  private store = new MemoryStore<AuditLogEntry>((e) => e.id);

  async record(entry: Omit<AuditLogEntry, "id" | "createdAt">): Promise<void> {
    this.store.set({ ...entry, id: randomUUID(), createdAt: new Date().toISOString() });
  }

  async list(limit = 50): Promise<AuditLogEntry[]> {
    return this.store
      .list()
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .slice(0, limit);
  }
}

export function getAuditLogRepository(): AuditLogRepository {
  return getGlobalSingleton("auditLogRepository", () =>
    isPostgresConfigured()
      ? new PostgresAuditLogRepository()
      : new InMemoryAuditLogRepository(),
  );
}
