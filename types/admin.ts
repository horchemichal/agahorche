/**
 * Admin identity + audit models (spec §16/§17/§22).
 */
export type AdminRole = "admin" | "editor";

export interface AdminProfile {
  id: string;
  email: string;
  displayName: string;
  role: AdminRole;
  createdAt: string;
}

export interface AuditLogEntry {
  id: string;
  actorEmail: string;
  entityType: string; // e.g. "offer", "location", "page"
  entityId: string;
  action: "create" | "update" | "delete" | "publish" | "unpublish";
  summary: string;
  createdAt: string;
}
