import type { FinancingSettings, FinancingSettingsInput } from "@/types/financing-settings";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

/**
 * OŚ PLIKU
 * Jedno źródło prawdy o tym, czy raty 0% akurat obowiązują. Czytają stąd:
 * kalkulator rat, strona /finansowanie, tabele „w skrócie" na stronach
 * TM7 i porównania. Pisze wyłącznie /admin/ustawienia.
 *
 * DLACZEGO W BAZIE, A NIE W KODZIE. Do 1.09.2026 była to stała
 * w data/finansowanie/dostepnosc.ts. Działało, ale każdy powrót promocji
 * oznaczał wgranie pliku i przebudowanie obrazu Dockera — czyli Aga nie
 * mogła zmienić tego sama. Promocja 0% wraca kilka razy w roku, więc to
 * jest dokładnie ta rzecz, która powinna być przełącznikiem w panelu.
 *
 * DOMYŚLNIE `false`, ŚWIADOMIE. Gdyby baza była nieosiągalna albo wiersz
 * nie istniał, strona powie „rat 0% teraz nie ma" zamiast obiecywać
 * promocję, której może nie być. Przy warunkach handlowych bezpieczniejszy
 * błąd to ten w stronę ostrożności.
 */

const DOMYSLNY_KOMUNIKAT =
  "W tej chwili raty 0% nie obowiązują — dostępne jest finansowanie z ratą 0,6% miesięcznie. Promocje 0% wracają okresowo: zajrzyj tu za jakiś czas albo napisz do mnie, a dam znać, kiedy będą.";

const DEFAULT_SETTINGS: FinancingSettings = {
  id: "global",
  ratyZeroDostepne: false,
  ratyZeroKomunikat: DOMYSLNY_KOMUNIKAT,
  updatedAt: new Date(0).toISOString(),
  updatedBy: null,
};

export interface FinancingSettingsRepository {
  get(): Promise<FinancingSettings>;
  update(input: FinancingSettingsInput, actorEmail: string | null): Promise<FinancingSettings>;
}

function rowToSettings(row: Record<string, unknown>): FinancingSettings {
  return {
    id: "global",
    ratyZeroDostepne: Boolean(row.raty_zero_dostepne),
    ratyZeroKomunikat: (row.raty_zero_komunikat as string) || DOMYSLNY_KOMUNIKAT,
    updatedAt: row.updated_at as string,
    updatedBy: (row.updated_by as string | null) ?? null,
  };
}

class PostgresFinancingSettingsRepository implements FinancingSettingsRepository {
  private pool = getPostgresPool()!;

  async get(): Promise<FinancingSettings> {
    const result = await this.pool.query("select * from financing_settings where id = 'global'");
    return result.rows[0] ? rowToSettings(result.rows[0]) : DEFAULT_SETTINGS;
  }

  async update(input: FinancingSettingsInput, actorEmail: string | null): Promise<FinancingSettings> {
    /**
     * `insert … on conflict do update` zamiast samego `update`: wiersz
     * zakłada schema.sql, ale gdyby baza była starsza od tego kodu,
     * zapis z panelu i tak zadziała zamiast po cichu nie zrobić nic.
     */
    const result = await this.pool.query(
      `insert into financing_settings (id, raty_zero_dostepne, raty_zero_komunikat, updated_by, updated_at)
       values ('global', $1, $2, $3, now())
       on conflict (id) do update set
         raty_zero_dostepne = excluded.raty_zero_dostepne,
         raty_zero_komunikat = excluded.raty_zero_komunikat,
         updated_by = excluded.updated_by,
         updated_at = now()
       returning *`,
      [input.ratyZeroDostepne, input.ratyZeroKomunikat, actorEmail],
    );
    return rowToSettings(result.rows[0]);
  }
}

class InMemoryFinancingSettingsRepository implements FinancingSettingsRepository {
  private current: FinancingSettings = { ...DEFAULT_SETTINGS };

  async get(): Promise<FinancingSettings> {
    return this.current;
  }

  async update(input: FinancingSettingsInput, actorEmail: string | null): Promise<FinancingSettings> {
    this.current = {
      ...this.current,
      ...input,
      updatedAt: new Date().toISOString(),
      updatedBy: actorEmail,
    };
    return this.current;
  }
}

export function getFinancingSettingsRepository(): FinancingSettingsRepository {
  return getGlobalSingleton("financingSettingsRepository", () =>
    isPostgresConfigured()
      ? new PostgresFinancingSettingsRepository()
      : new InMemoryFinancingSettingsRepository(),
  );
}

/**
 * Skrót dla stron publicznych. Nigdy nie rzuca — jeśli baza nie
 * odpowiada, zwraca wartości domyślne (raty 0% NIEdostępne), bo strona
 * marketingowa nie może się wywalić przez ustawienie promocji.
 */
export async function pobierzUstawieniaFinansowania(): Promise<FinancingSettings> {
  try {
    return await getFinancingSettingsRepository().get();
  } catch (error) {
    console.error("[finansowanie] nie udało się odczytać ustawień, używam domyślnych", error);
    return DEFAULT_SETTINGS;
  }
}
