import { SKLADNIKI } from "@/data/diets/skladniki";
import { PRODUKTY, PODSTAWY } from "./produkty";
import { wszystkiePrzepisy, type WynikPrzepisu } from "./grupy";

/**
 * OŚ PLIKU
 * Dopasowanie przepisów do tego, co klientka ma w domu — moduł
 * „Co mam w lodówce?" (pomysł nr 1 z listy Agi, razem z nr 10
 * „co zrobić z resztek", nr 11 „nie marnuję jedzenia" i nr 15
 * „co zrobić z jajek": to jedno pytanie zadane z czterech stron).
 *
 * BEZ SZTUCZNEJ INTELIGENCJI, ŚWIADOMIE. Pierwotny pomysł zakładał
 * wpisywanie zdania („mam kurczaka, 2 papryki, cebulę"). Zrobiliśmy
 * klikanie gotowych produktów, bo daje ten sam wynik, jest natychmiastowe,
 * nic nie kosztuje przy każdym użyciu i — najważniejsze — nie potrafi
 * wymyślić dania. Każdy wynik to przepis, który naprawdę istnieje
 * na Cookidoo. Zrozumienie zdania da się dołożyć później, na tej samej
 * bazie, jeśli okaże się potrzebne.
 *
 * ZASADA SORTOWANIA. Najpierw dania, które zużywają NAJWIĘCEJ zaznaczonych
 * produktów, dopiero potem te, którym najmniej brakuje. Odwrotna kolejność
 * wydawała się naturalna, ale dawała wyniki bez sensu: na górze lądowały
 * dania dwuskładnikowe („ryż z mlekiem"), bo łatwo im o zero braków,
 * a danie zużywające cztery z pięciu rzeczy z lodówki spadało niżej.
 * Pytanie brzmi „co zrobię z tego, co mi leży", więc wygrywa zużycie.
 * Ile braków wolno mieć, decyduje klientka suwakiem — przy zerze i tak
 * zostaną wyłącznie komplety.
 *
 * CZEGO NIE ROBIMY: nie proponujemy zamienników („nie masz śmietany,
 * daj jogurt"). To byłaby porada kulinarna wystawiona jako fakt
 * z przepisu. Pokazujemy, czego brakuje, i tyle — decyzja należy
 * do gotującej.
 */

const WARIANT_DO_PRODUKTU = new Map<string, string>();
for (const p of PRODUKTY) for (const w of p.warianty) WARIANT_DO_PRODUKTU.set(w, p.id);

const ZBIOR_PODSTAW = new Set(PODSTAWY);

export interface WynikLodowki extends WynikPrzepisu {
  /** Składniki przepisu pokryte przez zaznaczone produkty. */
  masz: string[];
  /** Składniki, których zaznaczenie nie pokrywa — w brzmieniu z przepisu. */
  brakuje: string[];
}

export interface OpcjeLodowki {
  /** Identyfikatory produktów z PRODUKTY. */
  wybrane: string[];
  /** Czy uznajemy sól, pieprz, olej, mąkę i przyprawy za dostępne. */
  zPodstawami: boolean;
  /** Ile brakujących składników wolno mieć daniu, żeby trafiło na listę. */
  ileBrakow: number;
}

export function dopasujZLodowki({ wybrane, zPodstawami, ileBrakow }: OpcjeLodowki): WynikLodowki[] {
  if (wybrane.length === 0) return [];
  const zbior = new Set(wybrane);

  const wyniki: WynikLodowki[] = [];
  for (const w of wszystkiePrzepisy()) {
    const skladniki = SKLADNIKI[w.przepis.id];
    if (!skladniki) continue;

    const masz: string[] = [];
    const brakuje: string[] = [];
    for (const s of skladniki) {
      const produkt = WARIANT_DO_PRODUKTU.get(s);
      if (produkt && zbior.has(produkt)) masz.push(s);
      else if (zPodstawami && ZBIOR_PODSTAW.has(s)) continue; // ani „mam", ani „brakuje"
      else brakuje.push(s);
    }

    /**
     * Danie, które nie zużywa NICZEGO z zaznaczonych rzeczy, nie jest
     * odpowiedzią na pytanie „co mam w lodówce" — nawet gdyby dało się je
     * zrobić z samych podstaw.
     */
    if (masz.length === 0) continue;
    if (brakuje.length > ileBrakow) continue;
    wyniki.push({ ...w, masz, brakuje });
  }

  return wyniki.sort(
    (a, b) =>
      b.masz.length - a.masz.length ||
      a.brakuje.length - b.brakuje.length ||
      a.meta.czasMin - b.meta.czasMin,
  );
}

/** Produkty pogrupowane w kolejności, w jakiej mają stać na ekranie. */
export function produktyWgGrup(): { grupa: string; produkty: typeof PRODUKTY }[] {
  const kolejnosc: string[] = [];
  const mapa = new Map<string, typeof PRODUKTY>();
  for (const p of PRODUKTY) {
    if (!mapa.has(p.grupa)) {
      mapa.set(p.grupa, []);
      kolejnosc.push(p.grupa);
    }
    mapa.get(p.grupa)!.push(p);
  }
  return kolejnosc.map((grupa) => ({ grupa, produkty: mapa.get(grupa)! }));
}
