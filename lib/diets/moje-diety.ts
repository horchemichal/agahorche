"use client";

/**
 * OŚ PLIKU
 * „Moje diety" — lista diet, które klientka trzyma na swoim pulpicie
 * w Aga Club. Czytają i piszą stąd dwa komponenty:
 *   · components/diets/client-diet-list.tsx — kafelki na pulpicie (usuwanie),
 *   · components/diets/diet-configurator.tsx — przycisk „Dodaj do moich diet".
 *
 * DLACZEGO PRZECHOWUJEMY USUNIĘTE, A NIE WYBRANE. W klubie odblokowane są
 * WSZYSTKIE diety — pulpit pokazuje więc pełen zestaw, dopóki ktoś czegoś
 * z niego nie wyrzuci. Gdybyśmy zapisywali listę wybranych, nowa dieta
 * dodana na stronie nigdy nie pojawiłaby się u osób, które już raz
 * cokolwiek kliknęły. Przy liście usuniętych każda nowa dieta pokazuje się
 * u wszystkich sama.
 *
 * DLACZEGO localStorage, A NIE BAZA. To preferencja widoku, nie dane
 * klienta — nic nie kasuje po stronie serwisu, sama dieta zostaje dostępna
 * z /diety i z konfiguratora. Cena: ustawienie działa per przeglądarka
 * (na telefonie pulpit będzie znów pełny). Gdyby to kiedyś zaczęło
 * przeszkadzać, przenosi się do tabeli `clients` bez zmiany tego API.
 *
 * 1.09.2026 (prośba Agi: „niech diety da się usuwać bez przywracania,
 * i w konfiguratorze przycisk dodaj do moich diet"): zniknął pasek
 * „Ukryte diety: N · Przywróć wszystkie". Usunięcie ma być usunięciem —
 * powrót odbywa się świadomie, przyciskiem w konfiguratorze tej konkretnej
 * diety, a nie hurtowym „przywróć wszystko".
 */

const KLUCZ = "agaclub-ukryte-diety";
/** Zmiana w jednej karcie/komponencie musi odświeżyć drugi na tej samej stronie. */
export const ZDARZENIE = "agaclub:moje-diety";

function emituj() {
  window.dispatchEvent(new Event(ZDARZENIE));
}

export function wczytajUsuniete(): string[] {
  try {
    const zapis = window.localStorage.getItem(KLUCZ);
    return zapis ? (JSON.parse(zapis) as string[]) : [];
  } catch {
    // Prywatne okno albo zablokowane dane witryny — pulpit zostaje pełny.
    return [];
  }
}

function zapisz(lista: string[]) {
  try {
    window.localStorage.setItem(KLUCZ, JSON.stringify(lista));
  } catch {
    /* jw. — brak zapisu nie może wywrócić strony */
  }
  emituj();
}

/** Usuwa dietę z pulpitu. */
export function usunZMoichDiet(id: string) {
  const lista = wczytajUsuniete();
  if (!lista.includes(id)) zapisz([...lista, id]);
}

/** Przywraca jedną dietę na pulpit. Zwraca `false`, gdy już tam była. */
export function dodajDoMoichDiet(id: string): boolean {
  const lista = wczytajUsuniete();
  if (!lista.includes(id)) return false;
  zapisz(lista.filter((x) => x !== id));
  return true;
}

export function czyNaPulpicie(id: string): boolean {
  return !wczytajUsuniete().includes(id);
}
