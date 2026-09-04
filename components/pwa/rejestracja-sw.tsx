"use client";

import { useEffect } from "react";

/**
 * Rejestracja service workera aplikacji Aga Club (public/sw.js).
 *
 * Bez tego telefon nie uzna serwisu za instalowalny — sam manifest nie
 * wystarcza, przeglądarki wymagają też czynnego service workera.
 *
 * SPRAWDZANIE AKTUALIZACJI PRZY KAŻDYM URUCHOMIENIU. `registration.update()`
 * pyta serwer, czy sw.js się zmienił. Bez tego przeglądarka sprawdza to
 * z własnej inicjatywy dość rzadko, a aplikacja dodana na pulpit bywa
 * miesiącami nieodświeżana. Sam plik sw.js nie zawiera treści serwisu, więc
 * to zapytanie jest tanie — a razem ze `skipWaiting` w środku daje
 * automatyczną aktualizację, o którą chodziło.
 *
 * DLACZEGO `load`, A NIE OD RAZU. Rejestracja konkuruje o łącze z tym, co
 * strona i tak musi pobrać. Po `load` nie opóźnia pierwszego wyświetlenia.
 */
export function RejestracjaServiceWorkera() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    function zarejestruj() {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((rejestracja) => {
          // Odpytanie o nowszą wersję przy każdym otwarciu aplikacji.
          rejestracja.update().catch(() => undefined);
        })
        .catch(() => {
          /*
           * Błąd rejestracji nie może wywrócić strony. Service worker jest
           * dodatkiem — serwis ma działać tak samo dobrze bez niego, a np.
           * w trybie prywatnym przeglądarki rejestracja bywa zablokowana.
           */
        });
    }

    if (document.readyState === "complete") zarejestruj();
    else {
      window.addEventListener("load", zarejestruj);
      return () => window.removeEventListener("load", zarejestruj);
    }
  }, []);

  return null;
}
