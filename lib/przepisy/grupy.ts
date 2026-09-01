import { RECIPES } from "@/data/diets/recipes";
import { PRZEPISY_META } from "@/data/diets/przepisy-meta";
import type { Recipe } from "@/types/diet";
import type { PrzepisMeta } from "@/types/przepis-meta";

/**
 * OŚ PLIKU
 * Logika wyszukiwarki „Co ugotować dzisiaj": grupy tematyczne, progi czasowe
 * i samo filtrowanie. Komponent (components/przepisy/wyszukiwarka.tsx) tylko
 * to wywołuje — dzięki temu ta sama funkcja obsłuży kiedyś stronę
 * „mam 20 minut" czy „baza podstaw" bez kopiowania warunków.
 *
 * DLACZEGO WŁASNE GRUPY, A NIE KATEGORIE Z COOKIDOO. Cookidoo ma osiemnaście
 * kategorii i nazwy w rodzaju „Dania główne - potrawy z mięsa i drobiu".
 * Nikt tak nie myśli, stojąc przed lodówką o 17:00 — myśli „mięso", „zupa",
 * „coś lekkiego". Mapujemy więc na dziewięć grup w języku klientki. Kilka
 * kategorii wpada do tej samej grupy (oba rodzaje wypieków), a jedna
 * kategoria może trafić do dwóch grup — to nie pomyłka, tylko sposób, w jaki
 * ludzie szukają.
 *
 * CZEGO TU NIE MA: oceny, czy danie jest „zdrowe", „lekkie" czy „tanie".
 * Takich etykiet Cookidoo nie podaje, a dorabianie ich samemu byłoby
 * zgadywaniem podanym jako fakt.
 */

export interface GrupaDania {
  id: string;
  nazwa: string;
  /** Indeksy KATEGORIE_COOKIDOO należące do tej grupy. */
  kategorie: number[];
}

export const GRUPY_DAN: GrupaDania[] = [
  { id: "zupa", nazwa: "Zupa", kategorie: [2] },
  { id: "mieso", nazwa: "Mięso i drób", kategorie: [7] },
  { id: "ryby", nazwa: "Ryby i owoce morza", kategorie: [4] },
  { id: "makaron", nazwa: "Makaron i ryż", kategorie: [3] },
  { id: "wege", nazwa: "Bez mięsa", kategorie: [6] },
  { id: "salatki", nazwa: "Sałatki i przystawki", kategorie: [5] },
  { id: "sniadanie", nazwa: "Śniadanie", kategorie: [1] },
  { id: "dla-dzieci", nazwa: "Dla dzieci", kategorie: [17] },
  { id: "slodkie", nazwa: "Słodkie", kategorie: [8, 9] },
  { id: "napoje", nazwa: "Napoje i koktajle", kategorie: [0] },
  { id: "przekaski", nazwa: "Przekąski", kategorie: [11, 16] },
  /**
   * „Podstawy" to pomysł nr 19 z listy Agi („baza podstaw" — bulion, sos
   * pomidorowy, pesto, majonez). Cookidoo trzyma je w osobnej kategorii,
   * więc ta pozycja nie wymagała ani jednego nowego przepisu: te dania
   * były w bazie od początku, tylko nie było jak ich wskazać.
   */
  { id: "podstawy", nazwa: "Podstawy i dodatki", kategorie: [10, 13, 14] },
];

/** Progi z listy Agi („15 / 30 / 60 minut"). `null` = bez ograniczenia. */
export const PROGI_CZASU = [15, 30, 60] as const;

export type ProgCzasu = (typeof PROGI_CZASU)[number];

export interface WynikPrzepisu {
  przepis: Recipe;
  meta: PrzepisMeta;
  /** Liczba porcji, gdy Cookidoo podaje ją jako porcje; inaczej `null`. */
  porcje: number | null;
}

const WSZYSTKIE: WynikPrzepisu[] = Object.entries(PRZEPISY_META)
  .map(([id, meta]) => {
    const przepis = RECIPES[id];
    if (!przepis) return null;
    const liczba = /^\d+$/.test(meta.wydajnosc) ? Number(meta.wydajnosc) : null;
    return { przepis, meta, porcje: liczba };
  })
  .filter((x): x is WynikPrzepisu => x !== null)
  .sort((a, b) => a.meta.czasMin - b.meta.czasMin);

export function wszystkiePrzepisy(): WynikPrzepisu[] {
  return WSZYSTKIE;
}

export interface FiltryPrzepisow {
  /** Maksymalny czas w minutach; `null` = bez ograniczenia. */
  doMinut: number | null;
  /** Minimalna liczba porcji; `null` = bez znaczenia. */
  odOsob: number | null;
  /** Id grup z GRUPY_DAN; pusta tablica = wszystkie. */
  grupy: string[];
}

export function filtrujPrzepisy(f: FiltryPrzepisow): WynikPrzepisu[] {
  const kategorie = new Set(
    GRUPY_DAN.filter((g) => f.grupy.includes(g.id)).flatMap((g) => g.kategorie),
  );
  return WSZYSTKIE.filter((w) => {
    if (f.doMinut !== null && w.meta.czasMin > f.doMinut) return false;
    /**
     * Przepis bez liczby porcji (wydajność „650 g") NIE przechodzi filtru
     * liczby osób. Alternatywą byłoby przepuszczanie go zawsze, ale wtedy
     * „gotuję dla sześciu osób" pokazywałoby pastę na jeden słoik.
     */
    if (f.odOsob !== null && (w.porcje === null || w.porcje < f.odOsob)) return false;
    if (kategorie.size > 0 && !w.meta.kategorie.some((k) => kategorie.has(k))) return false;
    return true;
  });
}

/** „1 h 25 min" czyta się lepiej niż „85 min" — a „960 min" niż nic. */
export function czasSlownie(minuty: number): string {
  if (minuty < 60) return `${minuty} min`;
  const h = Math.floor(minuty / 60);
  const m = minuty % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}
