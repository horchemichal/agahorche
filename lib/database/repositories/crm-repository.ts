import { randomUUID } from "node:crypto";
import type { CrmKlient, CrmKlientInput, CrmPolecenie } from "@/types/crm";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

export interface CrmRepository {
  list(): Promise<CrmKlient[]>;
  get(id: string): Promise<CrmKlient | null>;
  create(input: CrmKlientInput): Promise<CrmKlient>;
  update(id: string, input: CrmKlientInput): Promise<CrmKlient>;
  setKupil(id: string, kupil: boolean): Promise<CrmKlient>;
  remove(id: string): Promise<void>;
}

function rowToKlient(row: Record<string, unknown>): CrmKlient {
  return {
    id: row.id as string,
    imieNazwisko: row.imie_nazwisko as string,
    miejscowosc: row.miejscowosc as string,
    polecenie: row.polecenie as CrmPolecenie,
    polecil: (row.polecil as string | null) ?? null,
    kupil: Boolean(row.kupil),
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

function klientToRow(input: CrmKlientInput) {
  return {
    imie_nazwisko: input.imieNazwisko,
    miejscowosc: input.miejscowosc,
    polecenie: input.polecenie,
    polecil: input.polecil,
    kupil: input.kupil,
  };
}

/**
 * Ta sama definicja co w db/postgres/schema.sql. Repozytorium zakłada tabelę
 * samo przy pierwszym użyciu, bo schema.sql na działającym serwerze nie jest
 * odpalany przy wdrożeniu — bez tego pierwszy zapis z telefonu skończyłby się
 * błędem „relation does not exist".
 */
const CREATE_TABLE = `
create table if not exists crm_klienci (
  id uuid primary key default gen_random_uuid(),
  imie_nazwisko text not null,
  miejscowosc text not null,
  polecenie text not null check (polecenie in ('osoba', 'strona-www')),
  polecil text,
  kupil boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists crm_klienci_created_idx on crm_klienci (created_at desc);
`;

class PostgresCrmRepository implements CrmRepository {
  private pool = getPostgresPool()!;
  private ready: Promise<void> | null = null;

  private ensureTable(): Promise<void> {
    if (!this.ready) {
      this.ready = this.pool.query(CREATE_TABLE).then(
        () => undefined,
        (error) => {
          this.ready = null; // spróbuj ponownie przy następnym wywołaniu
          throw error;
        },
      );
    }
    return this.ready;
  }

  async list(): Promise<CrmKlient[]> {
    await this.ensureTable();
    const result = await this.pool.query("select * from crm_klienci order by created_at desc");
    return result.rows.map(rowToKlient);
  }

  async get(id: string): Promise<CrmKlient | null> {
    await this.ensureTable();
    const result = await this.pool.query("select * from crm_klienci where id = $1", [id]);
    return result.rows[0] ? rowToKlient(result.rows[0]) : null;
  }

  async create(input: CrmKlientInput): Promise<CrmKlient> {
    await this.ensureTable();
    const row = await pgInsert(this.pool, "crm_klienci", klientToRow(input));
    return rowToKlient(row as Record<string, unknown>);
  }

  async update(id: string, input: CrmKlientInput): Promise<CrmKlient> {
    await this.ensureTable();
    const row = await pgUpdate(this.pool, "crm_klienci", "id", id, {
      ...klientToRow(input),
      updated_at: new Date().toISOString(),
    });
    if (!row) throw new Error("Nie znaleziono klienta.");
    return rowToKlient(row as Record<string, unknown>);
  }

  async setKupil(id: string, kupil: boolean): Promise<CrmKlient> {
    await this.ensureTable();
    const row = await pgUpdate(this.pool, "crm_klienci", "id", id, { kupil, updated_at: new Date().toISOString() });
    if (!row) throw new Error("Nie znaleziono klienta.");
    return rowToKlient(row as Record<string, unknown>);
  }

  async remove(id: string): Promise<void> {
    await this.ensureTable();
    await this.pool.query("delete from crm_klienci where id = $1", [id]);
  }
}

class InMemoryCrmRepository implements CrmRepository {
  private store = new MemoryStore<CrmKlient>((k) => k.id);

  async list(): Promise<CrmKlient[]> {
    return this.store.list().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  async get(id: string): Promise<CrmKlient | null> {
    return this.store.get(id) ?? null;
  }

  async create(input: CrmKlientInput): Promise<CrmKlient> {
    const now = new Date().toISOString();
    return this.store.set({ ...input, id: randomUUID(), createdAt: now, updatedAt: now });
  }

  async update(id: string, input: CrmKlientInput): Promise<CrmKlient> {
    const current = this.store.get(id);
    if (!current) throw new Error("Nie znaleziono klienta.");
    return this.store.set({ ...current, ...input, updatedAt: new Date().toISOString() });
  }

  async setKupil(id: string, kupil: boolean): Promise<CrmKlient> {
    const current = this.store.get(id);
    if (!current) throw new Error("Nie znaleziono klienta.");
    return this.store.set({ ...current, kupil, updatedAt: new Date().toISOString() });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getCrmRepository(): CrmRepository {
  return getGlobalSingleton("crmRepository", () =>
    isPostgresConfigured() ? new PostgresCrmRepository() : new InMemoryCrmRepository(),
  );
}
