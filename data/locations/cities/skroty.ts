import type { CitySection } from "../city-content";
import {
  faqWspolne,
  sekcjaCoUgotujesz,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * SKRÓTY WSPÓLNYCH TEKSTÓW NA STRONACH MIAST — 24.11.2026.
 *
 * Pomiar 16.11: strony miast miały 48–69% tekstu wspólnego z innymi stronami
 * miast (konkurentka thermoprzedstawiciel.pl ok. 12%). Google traktuje takie
 * strony jako wymienne. Opinie zostają w całości (decyzja Michała), więc
 * skracamy to, co jest o URZĄDZENIU, a nie o miejscowości — te same informacje
 * są w pełnej wersji na /thermomix/tm7, /thermomix/funkcje i
 * /thermomix/wady-i-zalety, a link do każdej z tych stron zostaje.
 *
 * Działa tylko na sekcjach IDENTYCZNYCH z wersją z wspolne.ts. Jeśli plik
 * miasta ma własny, przepisany tekst sekcji „tm7”, „co-ugotujesz” albo
 * „tradycyjne-gotowanie” — zostaje nietknięty.
 */
const TM7 = sekcjaTm7();
const CO_UGOTUJESZ = sekcjaCoUgotujesz();
const TRADYCYJNE = sekcjaTradycyjneGotowanie();

function takaSama(a: CitySection | undefined, wzor: CitySection): boolean {
  return !!a && a.paragraphs.join("\n") === wzor.paragraphs.join("\n");
}

export function skrocSekcjeWspolne(sekcje: CitySection[]): CitySection[] {
  const tm7 = sekcje.find((s) => s.id === "tm7");
  const co = sekcje.find((s) => s.id === "co-ugotujesz");
  const trad = sekcje.find((s) => s.id === "tradycyjne-gotowanie");
  if (!takaSama(tm7, TM7) || !takaSama(co, CO_UGOTUJESZ) || !takaSama(trad, TRADYCYJNE)) {
    return sekcje;
  }
  const skrot: CitySection = {
    ...tm7!,
    heading: "Thermomix TM7 w skrócie — co zobaczysz na spotkaniu",
    paragraphs: [
      "Najnowszy model: duży ekran dotykowy, izolowane naczynie, cichsza praca, większa Varoma i gotowanie bez pokrywki. Pokazuję funkcje, z których faktycznie będziesz korzystać — a jeśli wahasz się przy TM6, porównamy oba modele obok siebie.",
    ],
    bullets: [
      "zupy, sosy, ciasta, przetwory, mleka roślinne, jedzenie dla niemowlaka — Cookidoo prowadzi krok po kroku",
      "nie zastępuje patelni przy naleśnikach i smażeniu; zabiera siekanie, ucieranie i pilnowanie garnka",
    ],
    links: [
      ...(TM7.links ?? []),
      ...(CO_UGOTUJESZ.links ?? []),
      ...(TRADYCYJNE.links ?? []),
    ],
  };
  return sekcje
    .filter((s) => s.id !== "co-ugotujesz" && s.id !== "tradycyjne-gotowanie")
    .map((s) => (s.id === "tm7" ? skrot : s));
}

/**
 * FAQ: pytania z faqWspolne() (poza pierwszym — „Gdzie kupić Thermomix
 * w <miejscowości>?”, które zawiera nazwę miejsca) są identyczne na każdej
 * stronie. Zostawiamy zawsze „Czy prezentacja jest bezpłatna…” i JEDNO z
 * pozostałych, różne dla różnych miast (wg slugu). Pytania lokalne miasta
 * zostają wszystkie, w oryginalnej kolejności.
 */
const WSPOLNE = faqWspolne("").slice(1).map((q) => q.question);
const ZAWSZE = "Czy prezentacja jest bezpłatna i do czegoś zobowiązuje?";

export function wybierzPytaniaWspolne<T extends { question: string }>(faq: T[], seed: string): T[] {
  const rotowane = WSPOLNE.filter((q) => q !== ZAWSZE);
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const wybrane = rotowane[h % rotowane.length];
  return faq.filter((f) => !WSPOLNE.includes(f.question) || f.question === ZAWSZE || f.question === wybrane);
}
