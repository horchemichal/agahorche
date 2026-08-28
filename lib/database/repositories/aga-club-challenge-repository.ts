import type { AgaClubChallengeDay, AgaClubChallengeDayInput } from "@/types/aga-club";
import { isPostgresConfigured, getPostgresPool, pgUpsert } from "@/lib/database/postgres";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

const TOTAL_DAYS = 30;

function emptyDay(day: number): AgaClubChallengeDay {
  return { day, task: "", tip: "", videoUrl: null, active: false, updatedAt: "2026-01-01T00:00:00.000Z" };
}

/**
 * "30 dni z Agą" challenge content (spec §21, Aga Admin §15). The row set
 * is fixed (days 1-30, `day` is the primary key) — there's no create/delete,
 * only editing each day's content and its `active` (published) flag.
 * `listDays()` always returns exactly 30 entries, synthesizing an empty
 * placeholder for any day that hasn't been written yet, so the admin UI
 * never has to special-case "row doesn't exist".
 */
export interface AgaClubChallengeRepository {
  listDays(): Promise<AgaClubChallengeDay[]>;
  getDay(day: number): Promise<AgaClubChallengeDay>;
  updateDay(day: number, input: Omit<AgaClubChallengeDayInput, "day">): Promise<AgaClubChallengeDay>;
}

function rowToDay(row: Record<string, unknown>): AgaClubChallengeDay {
  return {
    day: row.day as number,
    task: (row.task as string) ?? "",
    tip: (row.tip as string) ?? "",
    videoUrl: (row.video_url as string | null) ?? null,
    active: Boolean(row.active),
    updatedAt: row.updated_at as string,
  };
}

class PostgresAgaClubChallengeRepository implements AgaClubChallengeRepository {
  private pool = getPostgresPool()!;

  async listDays(): Promise<AgaClubChallengeDay[]> {
    const result = await this.pool.query("select * from aga_club_challenge_days order by day asc");
    const byDay = new Map(result.rows.map((row) => [row.day as number, rowToDay(row)]));
    return Array.from({ length: TOTAL_DAYS }, (_, i) => byDay.get(i + 1) ?? emptyDay(i + 1));
  }

  async getDay(day: number): Promise<AgaClubChallengeDay> {
    const result = await this.pool.query("select * from aga_club_challenge_days where day = $1", [day]);
    return result.rows[0] ? rowToDay(result.rows[0]) : emptyDay(day);
  }

  async updateDay(day: number, input: Omit<AgaClubChallengeDayInput, "day">): Promise<AgaClubChallengeDay> {
    const row = await pgUpsert(this.pool, "aga_club_challenge_days", "day", {
      day,
      task: input.task,
      tip: input.tip,
      video_url: input.videoUrl,
      active: input.active,
      updated_at: new Date().toISOString(),
    });
    return rowToDay(row as Record<string, unknown>);
  }
}

class InMemoryAgaClubChallengeRepository implements AgaClubChallengeRepository {
  private days = new Map<number, AgaClubChallengeDay>();

  async listDays(): Promise<AgaClubChallengeDay[]> {
    return Array.from({ length: TOTAL_DAYS }, (_, i) => this.days.get(i + 1) ?? emptyDay(i + 1));
  }

  async getDay(day: number): Promise<AgaClubChallengeDay> {
    return this.days.get(day) ?? emptyDay(day);
  }

  async updateDay(day: number, input: Omit<AgaClubChallengeDayInput, "day">): Promise<AgaClubChallengeDay> {
    const updated: AgaClubChallengeDay = { day, ...input, updatedAt: new Date().toISOString() };
    this.days.set(day, updated);
    return updated;
  }
}

export function getAgaClubChallengeRepository(): AgaClubChallengeRepository {
  return getGlobalSingleton("agaClubChallengeRepository", () =>
    isPostgresConfigured()
      ? new PostgresAgaClubChallengeRepository()
      : new InMemoryAgaClubChallengeRepository(),
  );
}
