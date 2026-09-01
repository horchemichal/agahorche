import { randomUUID } from "node:crypto";
import type { PoradnikWpis, PoradnikWpisInput } from "@/types/poradnik";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";
import { PORADNIK_SEED } from "@/data/poradnik/seed";

/**
 * OŚ PLIKU
 * Wpisy poradnika Aga Club. Czytają stąd strony /poradnik, pisze panel
 * /admin/poradnik.
 *
 * ZASIEW TREŚCI STARTOWEJ. Poradnik z pustymi działami nie ma sensu, więc
 * przy PIERWSZYM odczycie z pustej tabeli wgrywamy 123 wpisy wiedzy ogólnej
 * (data/poradnik/seed.ts). Kluczowe słowo: pierwszym. Zasiew sprawdza, czy
 * tabela jest pusta — jeśli Aga cokolwiek już dodała albo poprawiła, nie
 * dotykamy niczego. Późniejsze zmiany w pliku z treścią startową NIE
 * nadpisują tego, co jest w bazie; gdyby kiedyś trzeba było wgrać nową
 * partię, robi się to świadomie, przez panel albo migrację.
 *
 * DLACZEGO ZASIEW W REPOZYTORIUM, A NIE W schema.sql. Bo schema.sql na tym
 * serwerze nie wykonuje się automatycznie przy wdrożeniu (przekonaliśmy się
 * o tym przy tabeli financing_settings) — tabelę i tak trzeba założyć
 * ręcznie, ale treść ma się pojawić sama, bez wklejania 123 insertów
 * w terminal.
 */

function rowToWpis(row: Record<string, unknown>): PoradnikWpis {
  return {
    id: row.id as string,
    dzial: row.dzial as string,
    slug: row.slug as string,
    tytul: row.tytul as string,
    lead: (row.lead as string) ?? "",
    tresc: (row.tresc as string) ?? "",
    przepisId: (row.przepis_id as string | null) ?? null,
    wlasne: Boolean(row.wlasne),
    opublikowany: Boolean(row.opublikowany),
    kolejnosc: (row.kolejnosc as number) ?? 0,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

function wpisToRow(input: PoradnikWpisInput) {
  return {
    dzial: input.dzial,
    slug: input.slug,
    tytul: input.tytul,
    lead: input.lead,
    tresc: input.tresc,
    przepis_id: input.przepisId,
    wlasne: input.wlasne,
    opublikowany: input.opublikowany,
    kolejnosc: input.kolejnosc,
  };
}

export interface PoradnikRepository {
  list(): Promise<PoradnikWpis[]>;
  listOpublikowane(): Promise<PoradnikWpis[]>;
  get(id: string): Promise<PoradnikWpis | null>;
  getBySlug(slug: string): Promise<PoradnikWpis | null>;
  create(input: PoradnikWpisInput): Promise<PoradnikWpis>;
  update(id: string, input: PoradnikWpisInput): Promise<PoradnikWpis>;
  remove(id: string): Promise<void>;
}

class PostgresPoradnikRepository implements PoradnikRepository {
  private pool = getPostgresPool()!;
  private zasiewSprawdzony = false;

  /**
   * Wgrywa treść startową, ale wyłącznie do pustej tabeli. Wywoływane
   * leniwie przy pierwszym odczycie — nie w konstruktorze, bo ten
   * wykonuje się także w trakcie budowania obrazu, gdy bazy nie ma.
   */
  private async zasiejJesliPusto(): Promise<void> {
    if (this.zasiewSprawdzony) return;
    this.zasiewSprawdzony = true;
    try {
      const { rows } = await this.pool.query("select count(*)::int as n from poradnik_wpisy");
      if ((rows[0]?.n ?? 0) > 0) return;
      for (const wpis of PORADNIK_SEED) {
        await pgInsert(this.pool, "poradnik_wpisy", wpisToRow(wpis));
      }
      console.info(`[poradnik] wgrano treść startową: ${PORADNIK_SEED.length} wpisów`);
    } catch (error) {
      // Brak tabeli albo niedostępna baza — strona ma działać dalej.
      console.error("[poradnik] nie udało się wgrać treści startowej", error);
    }
  }

  async list(): Promise<PoradnikWpis[]> {
    await this.zasiejJesliPusto();
    const result = await this.pool.query(
      "select * from poradnik_wpisy order by dzial asc, kolejnosc asc, tytul asc",
    );
    return result.rows.map(rowToWpis);
  }

  async listOpublikowane(): Promise<PoradnikWpis[]> {
    await this.zasiejJesliPusto();
    const result = await this.pool.query(
      "select * from poradnik_wpisy where opublikowany = true order by dzial asc, kolejnosc asc, tytul asc",
    );
    return result.rows.map(rowToWpis);
  }

  async get(id: string): Promise<PoradnikWpis | null> {
    const result = await this.pool.query("select * from poradnik_wpisy where id = $1", [id]);
    return result.rows[0] ? rowToWpis(result.rows[0]) : null;
  }

  async getBySlug(slug: string): Promise<PoradnikWpis | null> {
    await this.zasiejJesliPusto();
    const result = await this.pool.query("select * from poradnik_wpisy where slug = $1", [slug]);
    return result.rows[0] ? rowToWpis(result.rows[0]) : null;
  }

  async create(input: PoradnikWpisInput): Promise<PoradnikWpis> {
    const row = await pgInsert(this.pool, "poradnik_wpisy", wpisToRow(input));
    return rowToWpis(row as Record<string, unknown>);
  }

  async update(id: string, input: PoradnikWpisInput): Promise<PoradnikWpis> {
    const row = await pgUpdate(this.pool, "poradnik_wpisy", "id", id, {
      ...wpisToRow(input),
      updated_at: new Date().toISOString(),
    });
    if (!row) throw new Error("Nie znaleziono wpisu poradnika");
    return rowToWpis(row as Record<string, unknown>);
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from poradnik_wpisy where id = $1", [id]);
  }
}

const SEED_WPISY: PoradnikWpis[] = PORADNIK_SEED.map((w, i) => ({
  ...w,
  id: `seed-poradnik-${i}`,
  createdAt: "2026-09-01T00:00:00.000Z",
  updatedAt: "2026-09-01T00:00:00.000Z",
}));

class InMemoryPoradnikRepository implements PoradnikRepository {
  private store = new MemoryStore<PoradnikWpis>((w) => w.id, SEED_WPISY);

  private posortowane(): PoradnikWpis[] {
    return this.store
      .list()
      .sort((a, b) => a.dzial.localeCompare(b.dzial) || a.kolejnosc - b.kolejnosc || a.tytul.localeCompare(b.tytul));
  }

  async list(): Promise<PoradnikWpis[]> {
    return this.posortowane();
  }

  async listOpublikowane(): Promise<PoradnikWpis[]> {
    return this.posortowane().filter((w) => w.opublikowany);
  }

  async get(id: string): Promise<PoradnikWpis | null> {
    return this.store.get(id) ?? null;
  }

  async getBySlug(slug: string): Promise<PoradnikWpis | null> {
    return this.store.list().find((w) => w.slug === slug) ?? null;
  }

  async create(input: PoradnikWpisInput): Promise<PoradnikWpis> {
    const now = new Date().toISOString();
    return this.store.set({ ...input, id: randomUUID(), createdAt: now, updatedAt: now });
  }

  async update(id: string, input: PoradnikWpisInput): Promise<PoradnikWpis> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("Nie znaleziono wpisu poradnika");
    return this.store.set({ ...existing, ...input, updatedAt: new Date().toISOString() });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getPoradnikRepository(): PoradnikRepository {
  return getGlobalSingleton("poradnikRepository", () =>
    isPostgresConfigured() ? new PostgresPoradnikRepository() : new InMemoryPoradnikRepository(),
  );
}

/**
 * Skrót dla stron publicznych — nigdy nie rzuca. Poradnik to dodatek,
 * a nie powód, żeby cała strona pokazała błąd.
 */
export async function pobierzWpisyPoradnika(): Promise<PoradnikWpis[]> {
  try {
    return await getPoradnikRepository().listOpublikowane();
  } catch (error) {
    console.error("[poradnik] nie udało się odczytać wpisów", error);
    return [];
  }
}
