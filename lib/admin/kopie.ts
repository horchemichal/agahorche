import "server-only";
import path from "node:path";
import { readdir, stat } from "node:fs/promises";

/**
 * OŚ MODUŁU
 * Kopie zapasowe serwisu — odczyt katalogu z gotowymi archiwami.
 *
 * PO CO (prośba Michała, 5.09.2026: „zrób mi kopię zapasową całej strony
 * razem z aplikacją, żebym mógł z tej kopii w kilka minut odtworzyć stronę,
 * jakby się coś wydarzyło").
 *
 * DLACZEGO POBIERANIE IDZIE PRZEZ PANEL, A NIE PRZEZ ZWYKŁY ADRES.
 * W archiwum jest plik `.env` z sekretami (klucze podpisujące sesje, hasło
 * do bazy, hasło do poczty, klucze powiadomień) oraz zrzut bazy z adresami
 * e-mail klientek i skrótami ich haseł. Taki plik nie ma prawa wisieć pod
 * publicznym adresem ANI PRZEZ MINUTĘ — wystarczy, że ktoś zgadnie nazwę.
 * Dlatego strumień idzie przez trasę pod `/admin`, która sprawdza sesję Agi,
 * i tylko przez nią.
 *
 * DLACZEGO ARCHIWA POWSTAJĄ NA SERWERZE, A NIE TUTAJ. Zrzut bazy robi
 * `pg_dump`, który mieszka w kontenerze Postgresa, a nie w kontenerze
 * aplikacji. Aplikacja tylko UDOSTĘPNIA gotowe pliki z katalogu
 * podmontowanego tylko do odczytu (patrz docker-compose.yml) — nie ma
 * możliwości niczego tam nadpisać ani wykonać.
 *
 * Archiwum robi `/root/zrob-kopie.sh` na serwerze.
 */

/** Katalog z archiwami — montowany do kontenera tylko do odczytu. */
export const KATALOG_KOPII = process.env.BACKUP_STORAGE_DIR || "/app/storage/kopie";

/**
 * Nazwa pliku musi pasować DOKŁADNIE do tego wzorca. To jest jedyna
 * ochrona przed wyjściem poza katalog (`../`), więc jest wąska celowo:
 * kopia-2026-09-05-1032.tar.gz i nic innego.
 */
const BEZPIECZNA_NAZWA = /^kopia-\d{4}-\d{2}-\d{2}-\d{4}\.tar\.gz$/;

export interface Kopia {
  nazwa: string;
  bajty: number;
  kiedy: string;
}

/** Lista dostępnych archiwów, najnowsze u góry. */
export async function listaKopii(): Promise<Kopia[]> {
  let pliki: string[];
  try {
    pliki = await readdir(KATALOG_KOPII);
  } catch {
    // Katalogu nie ma (np. lokalnie albo przed pierwszą kopią) — to nie
    // jest awaria, po prostu nie ma czego pokazać.
    return [];
  }

  const kopie: Kopia[] = [];
  for (const nazwa of pliki) {
    if (!BEZPIECZNA_NAZWA.test(nazwa)) continue;
    try {
      const info = await stat(path.join(KATALOG_KOPII, nazwa));
      if (!info.isFile()) continue;
      kopie.push({ nazwa, bajty: info.size, kiedy: info.mtime.toISOString() });
    } catch {
      // Plik zniknął między listowaniem a sprawdzeniem — pomijamy.
    }
  }

  return kopie.sort((a, b) => b.nazwa.localeCompare(a.nazwa));
}

/**
 * Zamienia nazwę z żądania na bezpieczną ścieżkę albo `null`.
 * Sprawdzenie jest podwójne: wzorzec nazwy ORAZ potwierdzenie, że
 * wynikowa ścieżka nadal leży w katalogu kopii.
 */
export function sciezkaKopii(nazwa: string): string | null {
  if (!BEZPIECZNA_NAZWA.test(nazwa)) return null;
  const pelna = path.join(KATALOG_KOPII, nazwa);
  if (!pelna.startsWith(path.join(KATALOG_KOPII, path.sep))) return null;
  return pelna;
}

export function ladnyRozmiar(bajty: number): string {
  if (bajty < 1024) return `${bajty} B`;
  if (bajty < 1024 * 1024) return `${Math.round(bajty / 1024)} kB`;
  return `${(bajty / (1024 * 1024)).toFixed(1)} MB`;
}
