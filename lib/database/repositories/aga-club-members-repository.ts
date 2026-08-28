import { randomUUID } from "node:crypto";
import type { AgaClubMember, AgaClubMemberInput } from "@/types/aga-club";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * Aga Club member roster (spec §16, Aga Admin §15 "light admin"). There is
 * no public sign-up flow yet (spec §16: logowanie/personalizacja are
 * future work), so this is currently the only way a member record gets
 * created — an admin manually onboarding someone. No fake seed data.
 */
export interface AgaClubMembersRepository {
  list(): Promise<AgaClubMember[]>;
  create(input: AgaClubMemberInput): Promise<AgaClubMember>;
  remove(id: string): Promise<void>;
}

function rowToMember(row: Record<string, unknown>): AgaClubMember {
  return {
    id: row.id as string,
    displayName: row.display_name as string,
    email: row.email as string,
    tier: (row.tier as AgaClubMember["tier"]) ?? "free",
    createdAt: row.created_at as string,
  };
}

class PostgresAgaClubMembersRepository implements AgaClubMembersRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<AgaClubMember[]> {
    const result = await this.pool.query("select * from aga_club_members order by created_at desc");
    return result.rows.map(rowToMember);
  }

  async create(input: AgaClubMemberInput): Promise<AgaClubMember> {
    try {
      const result = await this.pool.query(
        "insert into aga_club_members (display_name, email, tier) values ($1, $2, $3) returning *",
        [input.displayName, input.email, input.tier ?? "free"],
      );
      return rowToMember(result.rows[0]);
    } catch (error) {
      if (error instanceof Error && /unique/i.test(error.message)) {
        throw new Error("Ten adres e-mail jest już zarejestrowany w Aga Club.");
      }
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from aga_club_members where id = $1", [id]);
  }
}

class InMemoryAgaClubMembersRepository implements AgaClubMembersRepository {
  private store = new MemoryStore<AgaClubMember>((m) => m.id);

  async list(): Promise<AgaClubMember[]> {
    return this.store.list().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  async create(input: AgaClubMemberInput): Promise<AgaClubMember> {
    // Mirror the DB's `unique(email)` constraint so behavior doesn't
    // silently differ between the Supabase and in-memory backends.
    const emailTaken = this.store.list().some((m) => m.email.toLowerCase() === input.email.toLowerCase());
    if (emailTaken) throw new Error("Ten adres e-mail jest już zarejestrowany w Aga Club.");
    return this.store.set({ ...input, id: randomUUID(), createdAt: new Date().toISOString() });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getAgaClubMembersRepository(): AgaClubMembersRepository {
  return getGlobalSingleton("agaClubMembersRepository", () =>
    isPostgresConfigured()
      ? new PostgresAgaClubMembersRepository()
      : new InMemoryAgaClubMembersRepository(),
  );
}
