/*
 * SERVICE WORKER APLIKACJI AGA CLUB
 * =================================
 *
 * Po co: żeby telefon uznał serwis za instalowalną aplikację i żeby po
 * dodaniu na pulpit działał jak aplikacja, a nie jak zakładka.
 *
 * ZASADA NADRZĘDNA — TREŚĆ NIGDY NIE JEST ZE SKRZYNKI (prośba Michała,
 * 4.09.2026: „tylko tak, żeby zmiany na stronie zmieniały się też
 * w aplikacji automatycznie"). Ten warunek decyduje o całej konstrukcji
 * niżej, dlatego jest na górze pliku.
 *
 * Najczęstszy sposób, w jaki service worker psuje stronę, to zapisanie
 * HTML-a do pamięci i podawanie go w kółko. Aga zmienia cenę w panelu,
 * strona pokazuje nową, a aplikacja na telefonie tygodniami starą — i nikt
 * nie wie dlaczego, bo „przecież odświeżałem". Dlatego TU NIE MA ŻADNEGO
 * ZAPISYWANIA STRON. Każde wejście idzie do sieci. Z pamięci podajemy
 * wyłącznie planszę „brak połączenia", i tylko wtedy, gdy sieci naprawdę
 * nie ma.
 *
 * CO WOLNO TRZYMAĆ: pliki spod /_next/static/ oraz ikony. Adresy tych
 * pierwszych zawierają skrót zawartości, więc każda nowa wersja strony to
 * nowy adres — stara wersja nie ma jak się podać zamiast nowej. To jedyny
 * bezpieczny rodzaj pamięci podręcznej przy takim wymaganiu.
 *
 * CZEGO NIE TRZYMAMY NIGDY: /api/* — tam idą zgłoszenia z formularza,
 * logowanie i postęp w diecie. Odpowiedź z pamięci znaczyłaby tu „zapisano",
 * kiedy nic się nie zapisało.
 */

const WERSJA = "aga-club-v1";
const PLIKI_STATYCZNE = `${WERSJA}-statyczne`;
const STRONA_OFFLINE = "/offline";

self.addEventListener("install", (zdarzenie) => {
  zdarzenie.waitUntil(
    caches
      .open(PLIKI_STATYCZNE)
      .then((pamiec) => pamiec.addAll([STRONA_OFFLINE, "/ikony/aga-club-192.png"]))
      /*
       * `skipWaiting` — nowa wersja przejmuje robotę od razu, bez czekania,
       * aż klientka zamknie wszystkie karty aplikacji. Bez tego aktualizacja
       * potrafi wisieć w zawieszeniu tygodniami, bo aplikacji dodanej na
       * pulpit praktycznie nikt nie zamyka.
       */
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (zdarzenie) => {
  zdarzenie.waitUntil(
    caches
      .keys()
      .then((klucze) =>
        Promise.all(klucze.filter((k) => !k.startsWith(WERSJA)).map((k) => caches.delete(k))),
      )
      // Przejmujemy otwarte karty natychmiast, bez przeładowania przez użytkownika.
      .then(() => self.clients.claim()),
  );
});

function czyStatyczny(url) {
  return url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/ikony/");
}

self.addEventListener("fetch", (zdarzenie) => {
  const zadanie = zdarzenie.request;

  // Tylko GET. POST-y (formularz, logowanie, wylogowanie, zapis postępu)
  // przepuszczamy nietknięte — service worker nie ma prawa ich dotykać.
  if (zadanie.method !== "GET") return;

  const url = new URL(zadanie.url);

  // Cudze domeny (np. obrazki z zewnątrz) nas nie dotyczą.
  if (url.origin !== self.location.origin) return;

  // API zawsze prosto do serwera — patrz nagłówek pliku.
  if (url.pathname.startsWith("/api/")) return;

  // Pliki z odciskiem zawartości w adresie: najpierw pamięć, potem sieć.
  if (czyStatyczny(url)) {
    zdarzenie.respondWith(
      caches.match(zadanie).then(
        (zapisane) =>
          zapisane ||
          fetch(zadanie).then((odpowiedz) => {
            if (odpowiedz.ok) {
              const kopia = odpowiedz.clone();
              caches.open(PLIKI_STATYCZNE).then((pamiec) => pamiec.put(zadanie, kopia));
            }
            return odpowiedz;
          }),
      ),
    );
    return;
  }

  /*
   * Wejścia na strony. Zawsze sieć — i to jest cała odpowiedź na „ma się
   * aktualizować automatycznie". Plansza offline pojawia się wyłącznie
   * wtedy, gdy `fetch` się wywali, czyli gdy telefon naprawdę nie ma
   * połączenia.
   */
  if (zadanie.mode === "navigate") {
    zdarzenie.respondWith(
      fetch(zadanie).catch(() =>
        caches.match(STRONA_OFFLINE).then((zapisana) => zapisana || Response.error()),
      ),
    );
  }

  // Reszta (zdjęcia, czcionki z /fonts) — domyślne zachowanie przeglądarki,
  // czyli zwykła sieć i jej własna pamięć podręczna. Nie ma powodu, żeby
  // service worker się w to wtrącał.
});
