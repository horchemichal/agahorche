"use client";

/**
 * OŚ PLIKU
 * Strona przeglądarkowa powiadomień push — zgoda, subskrypcja, cofnięcie.
 *
 * TU NIE MA ŻADNEJ POLITYKI. Kiedy wysyłać, jak często i czy w nocy —
 * to wszystko siedzi na serwerze (lib/klub/powiadomienia.ts). Tutaj jest
 * wyłącznie mechanika: zapytaj przeglądarkę, przekaż serwerowi adres.
 *
 * DLACZEGO STAN JEST OPISANY SŁOWAMI, A NIE `boolean`. Bo „nie ma
 * powiadomień" ma cztery zupełnie różne przyczyny i każda wymaga innego
 * zdania do klientki:
 *   - `brak`         — ta przeglądarka w ogóle tego nie umie,
 *   - `tylko-apka`   — iPhone w Safari: zadziała PO dodaniu na ekran główny,
 *   - `zablokowane`  — kiedyś kliknęła „Blokuj" i przeglądarka nas już
 *                      nie zapyta; trzeba to cofnąć w ustawieniach strony,
 *   - `wylaczone` / `wlaczone` — normalny przełącznik.
 * Sprowadzenie tego do „włącz/wyłącz" kończy się przyciskiem, który
 * u części kobiet nie robi nic i nikt nie wie dlaczego.
 */

export type StanPowiadomien = "sprawdzam" | "brak" | "tylko-apka" | "zablokowane" | "wylaczone" | "wlaczone";

/** Klucz VAPID przychodzi jako base64url — Web Push API chce bajtów. */
function naBajty(base64url: string): ArrayBuffer {
  const uzupelnienie = "=".repeat((4 - (base64url.length % 4)) % 4);
  const base64 = (base64url + uzupelnienie).replace(/-/g, "+").replace(/_/g, "/");
  const surowe = atob(base64);
  const bufor = new ArrayBuffer(surowe.length);
  const bajty = new Uint8Array(bufor);
  for (let i = 0; i < surowe.length; i += 1) bajty[i] = surowe.charCodeAt(i);
  return bufor;
}

function kluczeZSubskrypcji(s: PushSubscription): { p256dh: string; auth: string } | null {
  const dane = s.toJSON().keys;
  if (!dane?.p256dh || !dane?.auth) return null;
  return { p256dh: dane.p256dh, auth: dane.auth };
}

function czyWAplikacji(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // Safari na iOS nie wspiera `display-mode`, ma własną flagę.
    (window.navigator as { standalone?: boolean }).standalone === true
  );
}

function czyIOS(): boolean {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

/** Co pokazać w przełączniku przy wejściu na czat. */
export async function sprawdzStan(): Promise<StanPowiadomien> {
  if (typeof window === "undefined") return "sprawdzam";

  const umie = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  if (!umie) {
    // Na iPhonie brak PushManager w karcie Safari to nie „ta przeglądarka
    // nie umie", tylko „umie dopiero po zainstalowaniu aplikacji".
    return czyIOS() && !czyWAplikacji() ? "tylko-apka" : "brak";
  }

  if (Notification.permission === "denied") return "zablokowane";

  try {
    const rejestracja = await navigator.serviceWorker.ready;
    const subskrypcja = await rejestracja.pushManager.getSubscription();
    if (!subskrypcja) return "wylaczone";

    /*
     * Subskrypcja w przeglądarce to za mało — liczy się to, czy serwer
     * o niej wie. Po odtworzeniu bazy albo zmianie kluczy VAPID
     * przeglądarka nadal ma swoją, a wysyłać nie ma dokąd; wtedy
     * przełącznik ma pokazać „wyłączone", żeby dało się kliknąć od nowa.
     */
    const odp = await fetch(`/api/klub/push?endpoint=${encodeURIComponent(subskrypcja.endpoint)}`, {
      cache: "no-store",
    });
    if (!odp.ok) return "wylaczone";
    const wynik = (await odp.json()) as { zapisana?: boolean };
    return wynik.zapisana ? "wlaczone" : "wylaczone";
  } catch {
    return "wylaczone";
  }
}

/**
 * Włącza powiadomienia. Zwraca stan końcowy — w tym „zablokowane", gdy
 * klientka kliknęła w okienku przeglądarki „Blokuj".
 */
export async function wlacz(): Promise<StanPowiadomien> {
  try {
    const odp = await fetch("/api/klub/push", { cache: "no-store" });
    const dane = (await odp.json()) as { klucz?: string | null };
    if (!dane.klucz) return "brak";

    const zgoda = await Notification.requestPermission();
    if (zgoda !== "granted") return zgoda === "denied" ? "zablokowane" : "wylaczone";

    const rejestracja = await navigator.serviceWorker.ready;
    const subskrypcja =
      (await rejestracja.pushManager.getSubscription()) ??
      (await rejestracja.pushManager.subscribe({
        // Wymagane przez przeglądarki: każde powiadomienie musi być
        // widoczne dla użytkownika. Nie da się tego użyć po cichu.
        userVisibleOnly: true,
        applicationServerKey: naBajty(dane.klucz),
      }));

    const klucze = kluczeZSubskrypcji(subskrypcja);
    if (!klucze) return "wylaczone";

    const zapis = await fetch("/api/klub/push", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endpoint: subskrypcja.endpoint, ...klucze }),
    });
    return zapis.ok ? "wlaczone" : "wylaczone";
  } catch {
    return "wylaczone";
  }
}

/** Wyłącza powiadomienia na tym urządzeniu — i w przeglądarce, i na serwerze. */
export async function wylacz(): Promise<StanPowiadomien> {
  try {
    const rejestracja = await navigator.serviceWorker.ready;
    const subskrypcja = await rejestracja.pushManager.getSubscription();
    if (subskrypcja) {
      await fetch("/api/klub/push", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: subskrypcja.endpoint }),
      });
      await subskrypcja.unsubscribe();
    }
  } catch {
    // Nawet gdy odpięcie w przeglądarce się nie uda, wpis po stronie
    // serwera już zniknął — czyli wysyłać i tak nie będziemy.
  }
  return "wylaczone";
}
