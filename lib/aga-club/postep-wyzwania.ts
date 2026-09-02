"use client";

/**
 * OŚ PLIKU
 * Postęp w wyzwaniu „30 dni z Thermomixem" — które dni klientka odhaczyła.
 *
 * DLACZEGO localStorage, A NIE BAZA. Wyzwanie ma trzydzieści pól do
 * zaznaczenia i zero konsekwencji poza satysfakcją — to nie są dane, które
 * warto przechowywać po stronie serwera. Tabela postępu oznaczałaby
 * migrację, endpoint zapisu i pytanie „co się dzieje, gdy ktoś nie jest
 * zalogowany" dla funkcji, która ma działać od pierwszego kliknięcia.
 *
 * CENA, O KTÓREJ TRZEBA WIEDZIEĆ: postęp jest per przeglądarka. Odhaczone
 * na laptopie dni nie pojawią się na telefonie. Piszemy o tym wprost pod
 * paskiem postępu, zamiast udawać, że to konto.
 *
 * Gdyby kiedyś miało to jeździć między urządzeniami, wystarczy podmienić
 * te trzy funkcje na wywołania do bazy — reszta komponentu ich nie widzi.
 */

const KLUCZ = "agaclub-wyzwanie-30-dni";
/** Zmiana w jednym miejscu odświeża każdy komponent czytający postęp. */
export const ZDARZENIE_POSTEPU = "agaclub:postep-wyzwania";

export function wczytajPostep(): number[] {
  try {
    const zapis = window.localStorage.getItem(KLUCZ);
    if (!zapis) return [];
    const dane = JSON.parse(zapis) as unknown;
    // Ufamy tylko liczbom z zakresu 1-30 — reszta to śmieć po zmianie formatu.
    return Array.isArray(dane)
      ? dane.filter((d): d is number => typeof d === "number" && d >= 1 && d <= 30)
      : [];
  } catch {
    // Prywatne okno albo zablokowane dane witryny — postęp po prostu pusty.
    return [];
  }
}

function zapisz(dni: number[]) {
  try {
    window.localStorage.setItem(KLUCZ, JSON.stringify(dni.sort((a, b) => a - b)));
  } catch {
    /* jw. — brak zapisu nie może wywrócić strony */
  }
  window.dispatchEvent(new Event(ZDARZENIE_POSTEPU));
}

export function przelaczDzien(dzien: number) {
  const dni = wczytajPostep();
  zapisz(dni.includes(dzien) ? dni.filter((d) => d !== dzien) : [...dni, dzien]);
}

export function wyzerujPostep() {
  zapisz([]);
}
