/**
 * Metadane jednego przepisu z Cookidoo — patrz data/diets/przepisy-meta.ts
 * po opis, skąd te wartości pochodzą i czego NIE oznaczają.
 */
export interface PrzepisMeta {
  /** `totalTime` z Cookidoo, w minutach. Bywa liczony z wyrastaniem ciasta. */
  czasMin: number;
  /** `recipeYield`. Sama liczba = porcje; z jednostką = wydajność („650 g"). */
  wydajnosc: string;
  /** Indeksy w KATEGORIE_COOKIDOO. */
  kategorie: number[];
}
