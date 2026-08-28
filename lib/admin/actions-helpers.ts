import "server-only";
import { getAuditLogRepository } from "@/lib/database/repositories/audit-log-repository";
import type { AuditLogEntry } from "@/types/admin";

/**
 * Every admin Server Action that mutates data calls this after a
 * successful write (spec §22: audit trail groundwork). Best-effort by
 * design — a logging failure must never roll back or block the actual
 * mutation the admin just made; it only gets a console warning.
 */
export async function recordAuditEvent(entry: Omit<AuditLogEntry, "id" | "createdAt">): Promise<void> {
  try {
    await getAuditLogRepository().record(entry);
  } catch (error) {
    console.error("[audit-log] failed to record event", error);
  }
}

export type FormActionState = { error: string | null };

export const OK_STATE: FormActionState = { error: null };
