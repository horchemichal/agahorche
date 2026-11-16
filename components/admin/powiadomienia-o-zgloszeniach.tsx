"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/admin/toast";
import { sprawdzStan, wlacz, wylacz, type StanPowiadomien } from "@/lib/klub/push-przegladarka";

/**
 * OŚ PLIKU
 * Przełącznik „daj znać o nowym zgłoszeniu” w aplikacji Aga Panel.
 *
 * Prośba Michała, 16.11.2026: powiadomienia push, gdy ktoś napisze przez
 * formularz. Wysyłka i jej zasady siedzą na serwerze
 * (lib/admin/powiadomienia-zgloszenia.ts); tu jest tylko zgoda tego
 * jednego urządzenia.
 *
 * ZGODA JEST PER URZĄDZENIE. Telefon Agi i komputer Michała to dwie osobne
 * zgody — każde urządzenie włącza się samo, tym przyciskiem.
 *
 * `tylkoGdyWylaczone` — na ekranie startowym aplikacji (Do akceptacji)
 * pokazujemy ten blok wyłącznie wtedy, gdy jest coś do zrobienia. Gdy
 * powiadomienia działają, nie ma powodu zajmować miejsca nad ofertami;
 * pełny przełącznik (z wyłączeniem i próbą) jest zawsze w zakładce Leady.
 */

const API = "/api/admin/push";

async function adresTegoUrzadzenia(): Promise<string | null> {
  try {
    const rejestracja = await navigator.serviceWorker.ready;
    const subskrypcja = await rejestracja.pushManager.getSubscription();
    return subskrypcja?.endpoint ?? null;
  } catch {
    return null;
  }
}

export function PowiadomieniaOZgloszeniach({ tylkoGdyWylaczone = false }: { tylkoGdyWylaczone?: boolean }) {
  const [stan, setStan] = useState<StanPowiadomien>("sprawdzam");
  const [pracuje, setPracuje] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    let aktualne = true;
    void sprawdzStan(API).then((wynik) => {
      if (aktualne) setStan(wynik);
    });
    return () => {
      aktualne = false;
    };
  }, []);

  async function wyslijProbne(): Promise<boolean> {
    const endpoint = await adresTegoUrzadzenia();
    if (!endpoint) return false;
    try {
      const odp = await fetch(API, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint }),
      });
      const wynik = (await odp.json()) as { ok?: boolean };
      return Boolean(wynik.ok);
    } catch {
      return false;
    }
  }

  async function onWlacz() {
    setPracuje(true);
    const wynik = await wlacz(API);
    setStan(wynik);
    if (wynik === "wlaczone") {
      // Od razu próba: jedyny uczciwy dowód, że telefon naprawdę brzęczy.
      const poszlo = await wyslijProbne();
      showToast(
        poszlo
          ? "Powiadomienia włączone — za chwilę przyjdzie próbne."
          : "Powiadomienia włączone, ale próbne nie wyszło. Spróbuj „Wyślij próbne”.",
        poszlo ? "success" : "info",
      );
    } else if (wynik === "zablokowane") {
      showToast("Przeglądarka zablokowała powiadomienia dla agahorche.pl.", "error");
    } else if (wynik === "brak") {
      showToast("Na tym serwerze powiadomienia nie są skonfigurowane.", "error");
    } else {
      showToast("Nie udało się włączyć powiadomień. Spróbuj jeszcze raz.", "error");
    }
    setPracuje(false);
  }

  async function onWylacz() {
    setPracuje(true);
    // Bez odpinania w przeglądarce — patrz komentarz przy `wylacz()`.
    setStan(await wylacz(API, { odepnijPrzegladarke: false }));
    showToast("Powiadomienia o zgłoszeniach wyłączone na tym urządzeniu.", "info");
    setPracuje(false);
  }

  async function onProba() {
    setPracuje(true);
    const poszlo = await wyslijProbne();
    showToast(
      poszlo ? "Wysłane — powiadomienie powinno przyjść w ciągu kilku sekund." : "Nie udało się wysłać próbnego powiadomienia.",
      poszlo ? "success" : "error",
    );
    setPracuje(false);
  }

  if (stan === "sprawdzam") return null;
  if (tylkoGdyWylaczone && (stan === "wlaczone" || stan === "brak")) return null;

  return (
    <div className="mb-5 rounded-lg border border-border bg-neutral-0 p-4 shadow-[var(--shadow-card)]">
      <p className="text-sm font-medium text-neutral-900">Powiadomienia o nowych zgłoszeniach</p>

      {stan === "wlaczone" && (
        <>
          <p className="mt-1 text-sm text-muted">
            Włączone na tym urządzeniu. Gdy ktoś wyśle formularz ze strony, telefon da znać od razu.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button type="button" variant="outline" onClick={() => void onProba()} disabled={pracuje}>
              Wyślij próbne
            </Button>
            <Button type="button" variant="ghost" onClick={() => void onWylacz()} disabled={pracuje}>
              Wyłącz
            </Button>
          </div>
        </>
      )}

      {stan === "wylaczone" && (
        <>
          <p className="mt-1 text-sm text-muted">
            Wyłączone na tym urządzeniu. Włącz, żeby telefon dał znać, gdy ktoś wyśle formularz ze strony.
          </p>
          <div className="mt-3">
            <Button type="button" onClick={() => void onWlacz()} disabled={pracuje}>
              Włącz powiadomienia
            </Button>
          </div>
        </>
      )}

      {stan === "tylko-apka" && (
        <p className="mt-1 text-sm leading-relaxed text-muted">
          Na iPhonie powiadomienia działają dopiero w aplikacji dodanej do ekranu głównego. Otwórz
          agahorche.pl/admin w Safari, wybierz „Udostępnij” → „Do ekranu początkowego”, uruchom Aga Panel
          z ikony i włącz powiadomienia tutaj.
        </p>
      )}

      {stan === "zablokowane" && (
        <p className="mt-1 text-sm leading-relaxed text-muted">
          Powiadomienia są zablokowane w ustawieniach tej przeglądarki dla agahorche.pl. Odblokuj je tam
          (ikona kłódki przy adresie albo ustawienia aplikacji w telefonie) i wróć na tę stronę.
        </p>
      )}

      {stan === "brak" && (
        <p className="mt-1 text-sm text-muted">Ta przeglądarka nie obsługuje powiadomień.</p>
      )}
    </div>
  );
}
