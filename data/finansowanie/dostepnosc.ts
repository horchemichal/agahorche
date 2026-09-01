/**
 * OŚ PLIKU
 * Jedno miejsce, które mówi, czy raty 0% akurat obowiązują.
 *
 * DLACZEGO ISTNIEJE (prośba Agi, 1.09.2026). Raty 0% to promocja Vorwerk,
 * która wraca i znika. Na stronie zostają — bo wracają i bo ludzie właśnie
 * tego hasła szukają — ale muszą mieć przy sobie uczciwą informację, czy
 * obowiązują TERAZ. Bez tego kalkulator i podstrony obiecywałyby coś,
 * czego dzisiaj nie da się dostać.
 *
 * JEDNA STAŁA, NIE DWIE. Ten sam komunikat pokazuje kalkulator (przy
 * kafelku „RATY 0%") i strona /finansowanie. Gdyby był wpisany w dwóch
 * miejscach, przy najbliższej zmianie promocji jedno by się zaktualizowało,
 * a drugie zostało — i strona sama by sobie zaprzeczyła.
 *
 * JAK TO PRZEŁĄCZYĆ, GDY RATY 0% WRÓCĄ:
 *   `RATY_ZERO_DOSTEPNE = true`
 * i tyle. Kalkulator przestaje oznaczać kafelek jako niedostępny, ustawia
 * 0% jako wariant domyślny, a komunikat znika ze strony finansowania.
 * Nie trzeba dotykać żadnego tekstu w treściach miast ani podstron.
 *
 * PUŁAPKA: to jest flaga w kodzie, a nie pole w panelu admina. Zmiana
 * wymaga wgrania pliku i przebudowania obrazu — świadomie, bo warunki
 * finansowania to nie jest rzecz, którą powinno dać się przestawić
 * przypadkiem jednym kliknięciem.
 */

/** Czy promocja „raty 0%" obowiązuje w tej chwili. */
export const RATY_ZERO_DOSTEPNE = false;

/** Krótki komunikat pokazywany, gdy rat 0% akurat nie ma. */
export const RATY_ZERO_KOMUNIKAT =
  "W tej chwili raty 0% nie obowiązują — dostępne jest finansowanie z ratą 0,6% miesięcznie. Promocje 0% wracają okresowo: zajrzyj tu za jakiś czas albo napisz do mnie, a dam znać, kiedy będą.";
