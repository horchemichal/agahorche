"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useZainstalowanaAplikacja, useIOS } from "@/lib/pwa/tryb-aplikacji";

/**
 * OŚ PLIKU
 * Sekcja „Zainstaluj aplikację Aga Club" — stoi na stronie /aga-club i widzą
 * ją wyłącznie osoby zalogowane (prośba Michała, 4.09.2026: „aplikacja niech
 * będzie do pobrania na stronie aga klub po zalogowaniu").
 *
 * TRZY RÓŻNE ŚWIATY, TRZY RÓŻNE TEKSTY — i to jest cała złożoność tego pliku:
 *
 * 1. ANDROID / CHROME: przeglądarka sama zgłasza `beforeinstallprompt`.
 *    Przechwytujemy to zdarzenie i pokazujemy własny przycisk, zamiast
 *    czekać, aż przeglądarka pokaże swój (robi to rzadko i w swoim czasie).
 *
 * 2. iPHONE / SAFARI: Apple NIE udostępnia żadnego API do instalacji.
 *    Przycisku nie da się zrobić — fizycznie. Jedyne, co można, to napisać,
 *    gdzie kliknąć: Udostępnij → Dodaj do ekranu głównego. Dlatego na iOS
 *    pokazujemy instrukcję, a nie martwy guzik, który nic nie robi.
 *
 * 3. JUŻ ZAINSTALOWANA: aplikacja uruchomiona z pulpitu chodzi w trybie
 *    `standalone`. Namawianie do instalacji kogoś, kto już zainstalował,
 *    wygląda jak usterka, więc wtedy mówimy po prostu, że wszystko gra.
 *
 * CZEGO TU NIE MA: wyskakującego okienka. Sekcja siedzi w treści strony
 * i czeka. Baner zasłaniający ekran przy pierwszym wejściu jest dokładnie
 * tym, czego ludzie nie znoszą w cudzych stronach.
 */

/** Zdarzenie Chrome'a, którego nie ma w typach DOM. */
interface ZdarzenieInstalacji extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstalacjaAplikacji() {
  const [zdarzenie, setZdarzenie] = useState<ZdarzenieInstalacji | null>(null);
  /*
   * `zainstalowanaTeraz` łapie moment instalacji przy otwartej stronie —
   * zdarzenie `appinstalled` przychodzi, zanim `display-mode` się zmieni
   * (a w karcie przeglądarki nie zmieni się wcale, bo aplikacja startuje
   * w osobnym oknie). Bez tego po instalacji dalej widniałby przycisk
   * „Zainstaluj aplikację".
   */
  const [zainstalowanaTeraz, setZainstalowanaTeraz] = useState(false);
  const uruchomionaJakoAplikacja = useZainstalowanaAplikacja();
  const ios = useIOS();
  const zainstalowana = uruchomionaJakoAplikacja || zainstalowanaTeraz;

  useEffect(() => {
    function przechwyc(e: Event) {
      // Bez tego Chrome pokaże własny pasek u dołu ekranu, w swoim momencie.
      e.preventDefault();
      setZdarzenie(e as ZdarzenieInstalacji);
    }
    function poInstalacji() {
      setZainstalowanaTeraz(true);
      setZdarzenie(null);
    }

    window.addEventListener("beforeinstallprompt", przechwyc);
    window.addEventListener("appinstalled", poInstalacji);
    return () => {
      window.removeEventListener("beforeinstallprompt", przechwyc);
      window.removeEventListener("appinstalled", poInstalacji);
    };
  }, []);

  async function zainstaluj() {
    if (!zdarzenie) return;
    await zdarzenie.prompt();
    const { outcome } = await zdarzenie.userChoice;
    // Zdarzenia można użyć tylko raz — po odmowie Chrome przyśle nowe,
    // gdy uzna, że warto zapytać ponownie.
    setZdarzenie(null);
    if (outcome === "accepted") setZainstalowanaTeraz(true);
  }

  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
      <div className="flex flex-wrap items-start gap-5">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 font-display text-3xl font-bold text-neutral-0">
          A
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl text-neutral-900">Aga Club na telefonie</h3>

          {zainstalowana ? (
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Aplikacja jest już zainstalowana — właśnie z niej korzystasz. Wszystko, co zmieni się
              na stronie, pojawia się tu od razu; nie musisz niczego aktualizować.
            </p>
          ) : (
            <>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-700">
                Dodaj Aga Club na ekran główny telefonu. Otwiera się jak zwykła aplikacja — bez
                paska adresu — a Twoje diety, przepisy i poradnik masz jednym kliknięciem. To nie
                jest osobny program do pobrania ze sklepu: to ta sama strona, więc nowe treści
                pojawiają się w niej same, bez aktualizowania czegokolwiek.
              </p>

              {zdarzenie && (
                <Button type="button" onClick={zainstaluj} className="mt-5">
                  Zainstaluj aplikację
                </Button>
              )}

              {!zdarzenie && ios && (
                <ol className="mt-5 flex flex-col gap-2 text-sm text-neutral-700">
                  <li>
                    <strong>1.</strong> Dotknij ikony <strong>Udostępnij</strong> na dole Safari —
                    kwadrat ze strzałką w górę.
                  </li>
                  <li>
                    <strong>2.</strong> Przewiń listę i wybierz{" "}
                    <strong>Dodaj do ekranu początkowego</strong>.
                  </li>
                  <li>
                    <strong>3.</strong> Potwierdź <strong>Dodaj</strong>. Ikona pojawi się między
                    pozostałymi aplikacjami.
                  </li>
                </ol>
              )}

              {!zdarzenie && !ios && (
                <p className="mt-5 text-sm leading-relaxed text-neutral-700">
                  Otwórz tę stronę na telefonie w Chrome, a zobaczysz tu przycisk instalacji.
                  Możesz też skorzystać z menu przeglądarki (trzy kropki) i wybrać{" "}
                  <strong>Zainstaluj aplikację</strong> albo{" "}
                  <strong>Dodaj do ekranu głównego</strong>.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
