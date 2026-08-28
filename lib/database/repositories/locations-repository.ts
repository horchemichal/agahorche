import type { Location } from "@/types/location";
import { isPostgresConfigured, getPostgresPool, pgInsert, pgUpdate } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { WOJEWODZTWA } from "@/data/locations/wojewodztwa";
import { MIASTA } from "@/data/locations/miasta";
import { MALOPOLSKA_AGI } from "@/data/locations/malopolska";
import { POWIATY_DEMO, MIEJSCOWOSCI_DEMO } from "@/data/locations/hierarchy-demo";
import { getGlobalSingleton } from "@/lib/database/global-singleton";
import { miejscownik, miejscownikWojewodztwa } from "@/data/locations/odmiana";

/**
 * Locations repository — backs both `/admin/lokalizacje` (CRUD) and the
 * public location engine (`/lib/locations/index.ts`, which is now async
 * and reads through this repository instead of importing the static data
 * files directly).
 *
 * The in-memory fallback is SEEDED from the exact same data reviewed in
 * the first build (`/data/locations/*`), so running without Supabase
 * configured changes nothing about what's public — it's the same 16
 * voivodeships + ~20 Tier A/B cities + the powiat/miejscowość hierarchy
 * demo, just served through the repository interface instead of a direct
 * import.
 */
export type LocationInput = Omit<Location, "locationId" | "createdAt" | "updatedAt"> & {
  locationId?: string;
};

export interface LocationsRepository {
  list(): Promise<Location[]>;
  get(locationId: string): Promise<Location | null>;
  create(input: LocationInput, actorEmail: string | null): Promise<Location>;
  update(locationId: string, input: LocationInput, actorEmail: string | null): Promise<Location>;
  remove(locationId: string): Promise<void>;
}

function rowToLocation(row: Record<string, unknown>): Location {
  return {
    locationId: row.location_id as string,
    name: row.name as string,
    nameLocative: (row.name_locative as string | null) ?? undefined,
    slug: row.slug as string,
    unitType: row.unit_type as Location["unitType"],
    wojewodztwoSlug: (row.wojewodztwo_slug as string | null) ?? null,
    powiatSlug: (row.powiat_slug as string | null) ?? null,
    gminaSlug: (row.gmina_slug as string | null) ?? null,
    region: (row.region as string | null) ?? null,
    population: (row.population as number | null) ?? undefined,
    populationSource: (row.population_source as string | null) ?? undefined,
    coordinates:
      row.lat != null && row.lng != null
        ? { lat: row.lat as number, lng: row.lng as number }
        : undefined,
    neighborSlugs: (row.neighbor_slugs as string[]) ?? [],
    largerCitySlug: (row.larger_city_slug as string | null) ?? undefined,
    agaServesLocation: Boolean(row.aga_serves_location),
    seoPriority: (row.seo_priority as number) ?? 50,
    tier: row.tier as Location["tier"],
    seo: {
      indexable: Boolean(row.indexable),
      robots: (row.robots as Location["seo"]["robots"]) ?? undefined,
      canonicalPath: (row.canonical_path as string | null) ?? undefined,
      inSitemap: Boolean(row.in_sitemap),
      contentStatus: row.content_status as Location["seo"]["contentStatus"],
    },
    urlPath: row.url_path as string,
    localFacts: (row.local_facts as string[]) ?? [],
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

function locationToRow(input: LocationInput) {
  return {
    name: input.name,
    name_locative: input.nameLocative ?? null,
    slug: input.slug,
    unit_type: input.unitType,
    wojewodztwo_slug: input.wojewodztwoSlug,
    powiat_slug: input.powiatSlug,
    gmina_slug: input.gminaSlug,
    region: input.region,
    population: input.population ?? null,
    population_source: input.populationSource ?? null,
    lat: input.coordinates?.lat ?? null,
    lng: input.coordinates?.lng ?? null,
    neighbor_slugs: input.neighborSlugs,
    larger_city_slug: input.largerCitySlug ?? null,
    aga_serves_location: input.agaServesLocation,
    seo_priority: input.seoPriority,
    tier: input.tier,
    indexable: input.seo.indexable,
    robots: input.seo.robots ?? null,
    canonical_path: input.seo.canonicalPath ?? null,
    in_sitemap: input.seo.inSitemap,
    content_status: input.seo.contentStatus,
    url_path: input.urlPath,
    local_facts: input.localFacts ?? [],
  };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Zbiór startowy — dokładnie ten sam, którym karmiony jest wariant
 * in-memory. Miejscownik dopisywany jest tu, a nie w plikach z danymi, żeby
 * tabela odmiany była jedynym miejscem, w którym trzyma się formy gramatyczne.
 */
function seedLocations(): Location[] {
  return [...WOJEWODZTWA, ...MIASTA, ...MALOPOLSKA_AGI, ...POWIATY_DEMO, ...MIEJSCOWOSCI_DEMO].map(
    (l) => {
      const msc =
        l.unitType === "wojewodztwo"
          ? miejscownikWojewodztwa(l.slug) && `województwie ${miejscownikWojewodztwa(l.slug)}`
          : miejscownik(l.slug);
      return { ...l, nameLocative: l.nameLocative ?? msc ?? undefined };
    },
  );
}

class PostgresLocationsRepository implements LocationsRepository {
  private pool = getPostgresPool()!;
  private seedChecked = false;

  /**
   * Zasianie tabeli lokalizacji — najpierw całościowe, potem różnicowe.
   *
   * HISTORIA. Pierwsza wersja siała tabelę TYLKO wtedy, gdy była zupełnie
   * pusta (`count = 0`). Powód był dobry: usunięcie miasta w
   * /admin/lokalizacje ma zostać usunięte, a nie wracać przy następnym
   * wdrożeniu. Skutek uboczny okazał się jednak kosztowny — dopisanie NOWEGO
   * miasta do `data/locations/malopolska.ts` nie robiło na produkcji nic.
   * Kod się wdrażał, strona wyglądała na gotową i zwracała 404, bo brakowało
   * wiersza w bazie. Trafiliśmy na to dwa razy: przy Chrzanowie (26.08)
   * i przy sześciu gminach pierścienia krakowskiego (27.08), za każdym razem
   * dopisując wiersze ręcznie SQL-em przez terminal.
   *
   * ROZWIĄZANIE. Tabela pomocnicza `location_seeds` pamięta KAŻDY
   * `location_id`, który kiedykolwiek został zasiany. Przy starcie procesu
   * dosiewamy tylko te lokalizacje z kodu, których w tej tabeli jeszcze nie
   * ma. Dzięki temu jednocześnie:
   *
   * — nowe miasto dopisane w kodzie pojawia się samo po wdrożeniu,
   * — miasto skasowane w panelu NIE wraca (jego id zostaje w `location_seeds`),
   * — restart kontenera niczego nie duplikuje ani nie nadpisuje.
   *
   * Ręczne zmiany wprowadzone w /admin/lokalizacje są nietykalne — dosiewamy
   * wyłącznie wiersze, których nigdy nie było.
   */
  private async ensureSeeded(): Promise<void> {
    if (this.seedChecked) return;
    this.seedChecked = true;

    await this.pool.query(
      `create table if not exists location_seeds (
         location_id text primary key,
         seeded_at timestamptz not null default now()
       )`,
    );

    // Migracja z poprzedniego schematu: jeśli tabela lokalizacji jest już
    // wypełniona, a rejestru zasiewów jeszcze nie ma, przyjmujemy, że
    // wszystko, co stoi w `locations`, zostało kiedyś zasiane. Bez tego
    // pierwsze uruchomienie po tej zmianie próbowałoby dosiać wszystko od
    // nowa — łącznie z miastami, które ktoś świadomie usunął.
    await this.pool.query(
      `insert into location_seeds (location_id)
       select location_id from locations
       on conflict (location_id) do nothing`,
    );

    const { rows: znane } = await this.pool.query("select location_id from location_seeds");
    const zasiane = new Set(znane.map((r) => r.location_id as string));

    // DRUGI FILTR — PO ADRESIE, NIE TYLKO PO IDENTYFIKATORZE.
    //
    // `locations.url_path` ma własny UNIQUE. Bywa, że ta sama miejscowość
    // stoi w bazie pod INNYM `location_id` niż w seedzie: tak jest
    // z Wieliczką, która wjechała kiedyś z `hierarchy-demo.ts` pod adresem
    // hierarchicznym, a potem dostała `/thermomix/wieliczka` ręcznym UPDATE-em
    // (patrz komentarz w data/locations/malopolska.ts). Dla rejestru zasiewów
    // jej seedowe `miasto-wieliczka` wygląda więc na nowe miasto — i przy
    // dosiewaniu leciał błąd `locations_url_path_key`.
    //
    // To nie był drobiazg: wyjątek przerywał CAŁE dosiewanie, więc żadne
    // z sześciu nowych miast nie trafiało do bazy i wszystkie zwracały 404.
    // Objaw wyglądał identycznie jak stara pułapka („kod wdrożony, strona
    // 404”), a przyczyna była zupełnie inna.
    const { rows: adresy } = await this.pool.query("select url_path from locations");
    const zajete = new Set(adresy.map((r) => r.url_path as string));

    const doDosiania = seedLocations().filter(
      (l) => !zasiane.has(l.locationId) && !zajete.has(l.urlPath),
    );

    // Miasta odfiltrowane po adresie zapisujemy jako zasiane, żeby nie
    // sprawdzać ich przy każdym starcie kontenera. Fizycznie są w bazie,
    // tylko pod innym identyfikatorem.
    const juzPodInnymId = seedLocations().filter(
      (l) => !zasiane.has(l.locationId) && zajete.has(l.urlPath),
    );
    for (const location of juzPodInnymId) {
      await this.pool.query(
        "insert into location_seeds (location_id) values ($1) on conflict (location_id) do nothing",
        [location.locationId],
      );
    }

    if (doDosiania.length === 0) return;

    for (const location of doDosiania) {
      const row = locationToRow(location);
      const columns = ["location_id", ...Object.keys(row)];
      const values = [location.locationId, ...Object.values(row)];
      const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");
      try {
        await this.pool.query(
          `insert into locations (${columns.join(", ")}) values (${placeholders}) on conflict (location_id) do nothing`,
          values,
        );
        await this.pool.query(
          "insert into location_seeds (location_id) values ($1) on conflict (location_id) do nothing",
          [location.locationId],
        );
      } catch (blad) {
        // Jedno miasto nie może zablokować pozostałych. Wpisu do rejestru
        // świadomie NIE robimy — przy następnym starcie spróbujemy jeszcze
        // raz, a w logu zostaje ślad, którego miasta dotyczy problem.
        console.error(
          `[locations] nie udalo sie dosiac ${location.locationId} (${location.urlPath}):`,
          blad instanceof Error ? blad.message : blad,
        );
      }
    }
  }

  async list(): Promise<Location[]> {
    await this.ensureSeeded();
    const result = await this.pool.query("select * from locations order by seo_priority asc");
    return result.rows.map(rowToLocation);
  }

  async get(locationId: string): Promise<Location | null> {
    await this.ensureSeeded();
    const result = await this.pool.query("select * from locations where location_id = $1", [locationId]);
    return result.rows[0] ? rowToLocation(result.rows[0]) : null;
  }

  async create(input: LocationInput, actorEmail: string | null): Promise<Location> {
    const locationId = input.locationId ?? `${input.unitType}-${slugify(input.slug)}`;
    const row = await pgInsert(this.pool, "locations", {
      ...locationToRow(input),
      location_id: locationId,
      updated_by: actorEmail,
    });
    return rowToLocation(row as Record<string, unknown>);
  }

  async update(locationId: string, input: LocationInput, actorEmail: string | null): Promise<Location> {
    const row = await pgUpdate(this.pool, "locations", "location_id", locationId, {
      ...locationToRow(input),
      updated_by: actorEmail,
      updated_at: new Date().toISOString(),
    });
    if (!row) throw new Error("Location not found");
    return rowToLocation(row as Record<string, unknown>);
  }

  async remove(locationId: string): Promise<void> {
    await this.pool.query("delete from locations where location_id = $1", [locationId]);
  }
}

class InMemoryLocationsRepository implements LocationsRepository {
  private store = new MemoryStore<Location>(
    (l) => l.locationId,
    seedLocations(),
  );

  async list(): Promise<Location[]> {
    return this.store.list().sort((a, b) => a.seoPriority - b.seoPriority);
  }

  async get(locationId: string): Promise<Location | null> {
    return this.store.get(locationId) ?? null;
  }

  async create(input: LocationInput, _actorEmail: string | null): Promise<Location> {
    void _actorEmail;
    const locationId = input.locationId ?? `${input.unitType}-${slugify(input.slug)}`;
    if (this.store.get(locationId)) throw new Error("Lokalizacja o tym identyfikatorze już istnieje.");
    const now = new Date().toISOString();
    const location: Location = { ...input, locationId, createdAt: now, updatedAt: now };
    return this.store.set(location);
  }

  async update(locationId: string, input: LocationInput, _actorEmail: string | null): Promise<Location> {
    void _actorEmail;
    const existing = this.store.get(locationId);
    if (!existing) throw new Error("Location not found");
    const updated: Location = { ...existing, ...input, locationId, updatedAt: new Date().toISOString() };
    return this.store.set(updated);
  }

  async remove(locationId: string): Promise<void> {
    this.store.delete(locationId);
  }
}

export function getLocationsRepository(): LocationsRepository {
  return getGlobalSingleton("locationsRepository", () =>
    isPostgresConfigured()
      ? new PostgresLocationsRepository()
      : new InMemoryLocationsRepository(),
  );
}
