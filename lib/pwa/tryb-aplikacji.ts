"use client";

import { useSyncExternalStore } from "react";

/**
 * OŚ PLIKU
 * Dwa pytania o środowisko, które zadają sobie komponenty aplikacji Aga
 * Club: „czy chodzimy już jako zainstalowana aplikacja" i „czy to iPhone".
 *
 * DLACZEGO `useSyncExternalStore`, A NIE `useEffect` + `useState`.
 * Pierwsza wersja robiła to efektem i ESLint słusznie ją odrzucił
 * („Calling setState synchronously within an effect"): to nie jest stan
 * Reacta, tylko odczyt stanu przeglądarki. `useSyncExternalStore` jest do
 * tego zrobiony — sam pilnuje, żeby render na serwerze i w przeglądarce
 * się zgadzały (od tego jest trzeci argument), więc nie ma ani migotania,
 * ani ostrzeżenia o niezgodności hydratacji.
 *
 * Na serwerze obie odpowiedzi brzmią „nie". To bezpieczna strona pomyłki:
 * przy pierwszym renderze pokazujemy wersję dla zwykłej przeglądarki, a po
 * uruchomieniu w przeglądarce podmienia się na właściwą.
 */

function pustaSubskrypcja() {
  return () => undefined;
}

/**
 * Czy serwis jest uruchomiony jako zainstalowana aplikacja (z ikony na
 * pulpicie), a nie jako karta przeglądarki.
 */
export function useZainstalowanaAplikacja(): boolean {
  return useSyncExternalStore(
    (przyZmianie) => {
      const zapytanie = window.matchMedia("(display-mode: standalone)");
      // Ktoś może zainstalować aplikację przy otwartej karcie.
      zapytanie.addEventListener("change", przyZmianie);
      return () => zapytanie.removeEventListener("change", przyZmianie);
    },
    () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      // Safari na iOS nie wspiera `display-mode` — ma własną flagę.
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true,
    () => false,
  );
}

/**
 * Czy to iPhone albo iPad. Potrzebne, bo Safari nie udostępnia ŻADNEGO API
 * do instalacji aplikacji — na iOS nie da się zrobić przycisku, można tylko
 * napisać, gdzie użytkownik ma kliknąć w menu systemowym.
 */
export function useIOS(): boolean {
  return useSyncExternalStore(
    pustaSubskrypcja,
    () =>
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      // iPad od iPadOS 13 podaje się za Maca — poznajemy go po dotyku.
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
    () => false,
  );
}
