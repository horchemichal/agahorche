import type { MetadataRoute } from "next";

/**
 * OŚ PLIKU
 * Manifest aplikacji Aga Club — plik, dzięki któremu telefon w ogóle
 * proponuje „Dodaj do ekranu głównego" i po instalacji uruchamia to jako
 * osobną aplikację, a nie kartę przeglądarki.
 *
 * PO CO (prośba Michała, 4.09.2026: „stwórz aplikację na telefon Aga Klub,
 * tylko tak żeby zmiany na stronie zmieniały się też w aplikacji
 * automatycznie; niech to będzie ta aplikacja web, którą się pobiera
 * i dodaje na pulpit telefonu, a nie z App Store").
 *
 * Wcześniej ten plik istniał jako zaczątek z `icons: []` i komentarzem
 * „dodać gdy powstanie finalne logo". Bez ikon telefon NIE proponuje
 * instalacji — manifest bez ikon jest manifestem, którego nikt nie użyje.
 *
 * `display: "standalone"` to sedno prośby „ma się otwierać aplikacja Aga
 * Klub, a nie strona Aga Klub": po instalacji nie ma paska adresu ani
 * przycisków przeglądarki. Marketingowy nagłówek i stopka też znikają —
 * patrz `.tryb-aplikacji` w app/globals.css.
 *
 * `start_url: "/strefa-klienta"` — aplikacja otwiera się od razu u siebie.
 * Osoba niezalogowana wpadnie stąd na ekran logowania (pilnuje tego
 * proxy.ts), czyli dokładnie tam, gdzie powinna.
 *
 * DLACZEGO `scope: "/"`, A NIE `/strefa-klienta`. Klub jest rozsypany po
 * serwisie: diety pod /diety, przepisy pod /przepisy, poradnik pod
 * /poradnik. Przy węższym `scope` pierwsze kliknięcie w „Diety" wyrzucałoby
 * klientkę z aplikacji do przeglądarki.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aga Club — Thermomix z Agą",
    short_name: "Aga Club",
    // Opis bez „wsparcia AI", które stało tu do 4.09.2026 — takiej funkcji
    // w serwisie nie ma i została usunięta ze wszystkich innych miejsc.
    description:
      "Twoje jadłospisy, przepisy na Thermomix, poradnik kuchenny i wyzwanie 30 dni — w jednym miejscu.",
    lang: "pl",
    dir: "ltr",
    start_url: "/strefa-klienta",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    // Ten sam zielony co przyciski w serwisie (--color-brand-600).
    theme_color: "#00973d",
    categories: ["food", "lifestyle", "health"],
    icons: [
      { src: "/ikony/aga-club-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/ikony/aga-club-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      /*
       * „maskable" to osobne pliki, nie te same co wyżej. Android przycina
       * ikonę do kształtu wybranego przez producenta (koło, kwadrat, kropla)
       * i obcina około 20% brzegu — litera musi być mniejsza, a tło pełne,
       * inaczej ikona wyjdzie z odciętym rogiem.
       */
      { src: "/ikony/aga-club-maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/ikony/aga-club-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    /*
     * Skróty pod długim przytrzymaniem ikony na pulpicie. Prowadzą tam,
     * gdzie klientka i tak idzie najczęściej — bez klikania przez menu.
     */
    shortcuts: [
      { name: "Moje diety", short_name: "Diety", url: "/diety" },
      { name: "Co ugotować dzisiaj?", short_name: "Co ugotować?", url: "/przepisy" },
      { name: "Co mam w lodówce?", short_name: "Lodówka", url: "/przepisy/co-mam-w-lodowce" },
    ],
  };
}
