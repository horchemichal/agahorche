/**
 * "Strefa Klienta" account types (ETAP 7, spec §16 CLIENT_ONLY visibility).
 * Deliberately separate from types/admin.ts — a client account and an
 * admin account are different identity spaces end to end (see
 * lib/auth/client-auth.ts vs lib/auth/admin-auth.ts).
 */
export interface ClientAccount {
  id: string;
  email: string;
  displayName: string;
  phone: string | null;
  createdAt: string;
}
