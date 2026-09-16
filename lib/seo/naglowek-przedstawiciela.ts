/**
 * NAGŁÓWEK H1 STRON LOKALNYCH — jedno miejsce, w którym ustala się jego brzmienie.
 *
 * Powód istnienia tego pliku:
 * Google w wynikach wyszukiwania często ignoruje `seoTitle` i bierze na tytuł
 * treść H1 strony. Dla Krakowa wyświetlał „Thermomix Kraków – prezentacja,
 * zakup i doradztwo”. Michał poprosił (16.09.2026), żeby w tytule stało
 * wprost „Przedstawiciel Thermomix <miasto>”, a zamiast „doradztwo” — „opieka
 * posprzedażowa”.
 *
 * Zmiana jest czysto mechaniczna i dotyczy ~760 stron miast i ~30 stron
 * dzielnic. Gdyby wpisać ją do plików danych, każde wdrożenie oznaczałoby
 * przesłanie ośmiuset plików przez formularz uploadu na GitHubie — a push
 * przez proxy jest zablokowany. Dlatego przekształcenie robi się przy
 * renderowaniu: zmienia się jeden plik, a efekt widać na wszystkich stronach.
 *
 * Pola `h1` w data/locations/** zostają nietknięte i dalej są źródłem prawdy
 * dla części po myślniku. Jeśli kiedyś będzie trzeba wrócić do dawnego
 * brzmienia, wystarczy usunąć wywołania tej funkcji z dwóch szablonów.
 */

/**
 * Doprowadza nagłówek do postaci „Przedstawiciel Thermomix <miejsce> — <reszta>”.
 *
 * - dopisuje „Przedstawiciel ” przed „Thermomix”, jeśli go jeszcze nie ma;
 * - „Thermomix gmina Bochnia” zamienia na „Thermomix w gminie Bochnia”,
 *   bo „Przedstawiciel Thermomix gmina Bochnia” to niepoprawna polszczyzna;
 * - „doradztwo” w końcówce nagłówka zamienia na „opieka posprzedażowa”.
 *
 * Nagłówki, które nie zaczynają się od „Thermomix”, zwraca bez zmian —
 * funkcja nie zgaduje, co z nimi zrobić.
 */
export function naglowekPrzedstawiciela(h1: string): string {
  if (!h1) return h1;

  let wynik = h1;

  // „…zakup i doradztwo” → „…zakup i opieka posprzedażowa”
  wynik = wynik.replace(/\bi doradztwo\b/u, "i opieka posprzedażowa");

  if (!wynik.startsWith("Thermomix ")) return wynik;

  // „Thermomix gmina X” → „Thermomix w gminie X”
  wynik = wynik.replace(/^Thermomix gmina /u, "Thermomix w gminie ");

  return `Przedstawiciel ${wynik}`;
}
