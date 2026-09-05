"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/components/marketing/icons";
import { zmniejszObraz } from "@/lib/klub/zmniejsz-obraz";
import { cn } from "@/lib/utils";

/**
 * OŚ PLIKU
 * Czat Aga Club — jeden wspólny pokój dla klubowiczek.
 *
 * DLACZEGO ODPYTYWANIE, A NIE WEBSOCKETY. Serwis stoi na jednym kontenerze
 * na małym VPS-ie. WebSockety wymagałyby osobnego procesu albo usługi
 * zewnętrznej, a dla rozmowy, w której ktoś pisze co kilka minut, różnica
 * między „natychmiast" a „w ciągu pięciu sekund" jest żadna. Odpytywanie
 * co 5 sekund to kilkanaście bajtów na zapytanie i zero nowej infrastruktury
 * do utrzymania.
 *
 * ODPYTYWANIE STOI, GDY KARTA JEST SCHOWANA. Bez tego telefon w kieszeni
 * odpytywałby serwer całą noc, zjadając baterię i pakiet. `visibilitychange`
 * wznawia je z powrotem i od razu dociąga to, co przyszło w międzyczasie.
 *
 * PRZEWIJANIE NA DÓŁ TYLKO WTEDY, GDY KTOŚ JUŻ JEST NA DOLE. Jeśli klientka
 * przewinęła w górę, żeby coś przeczytać, a w tym momencie przyjdzie nowa
 * wiadomość — szarpnięcie na dół byłoby wrogie. Wtedy zamiast tego pokazuje
 * się przycisk „Nowe wiadomości".
 */

interface Wiadomosc {
  id: string;
  imie: string;
  moja: boolean;
  tresc: string | null;
  obrazUrl: string | null;
  kiedy: string;
}

const CO_ILE_MS = 5000;
/** Ile pikseli od dołu jeszcze liczy się jako „jestem na dole". */
const MARGINES_DOLU = 120;

function godzina(iso: string): string {
  const data = new Date(iso);
  const dzis = new Date();
  const tenSamDzien = data.toDateString() === dzis.toDateString();
  return tenSamDzien
    ? data.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })
    : data.toLocaleString("pl-PL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

export function CzatKlubu({ dniZycia }: { dniZycia: number }) {
  const [wiadomosci, setWiadomosci] = useState<Wiadomosc[]>([]);
  const [wczytane, setWczytane] = useState(false);
  const [tekst, setTekst] = useState("");
  const [zdjecie, setZdjecie] = useState<File | null>(null);
  const [podglad, setPodglad] = useState<string | null>(null);
  const [wysylanie, setWysylanie] = useState(false);
  const [blad, setBlad] = useState<string | null>(null);
  const [saNowe, setSaNowe] = useState(false);

  const przewijane = useRef<HTMLDivElement>(null);
  const wyborPliku = useRef<HTMLInputElement>(null);

  const czyNaDole = useCallback(() => {
    const el = przewijane.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight < MARGINES_DOLU;
  }, []);

  const naDol = useCallback((gladko = true) => {
    const el = przewijane.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: gladko ? "smooth" : "auto" });
    setSaNowe(false);
  }, []);

  const pobierz = useCallback(async () => {
    try {
      const odp = await fetch("/api/klub/czat", { cache: "no-store" });
      if (!odp.ok) return;
      const dane = (await odp.json()) as { wiadomosci: Wiadomosc[] };

      const bylNaDole = czyNaDole();
      setWiadomosci((poprzednie) => {
        if (dane.wiadomosci.length > poprzednie.length && !bylNaDole && poprzednie.length > 0) {
          setSaNowe(true);
        }
        return dane.wiadomosci;
      });
      setWczytane(true);
      if (bylNaDole) requestAnimationFrame(() => naDol(false));
    } catch {
      // Sieć mogła mrugnąć — następne odpytanie za pięć sekund i tyle.
      // Wyrzucanie komunikatu o błędzie przy każdym mrugnięciu Wi-Fi
      // byłoby gorsze niż samo mrugnięcie.
    }
  }, [czyNaDole, naDol]);

  useEffect(() => {
    /*
     * Pierwsze pobranie idzie przez `setTimeout(…, 0)`, a nie wprost.
     * Nie jest to sztuczka pod lintera: reguła react-hooks/set-state-in-effect
     * słusznie zabrania ustawiania stanu synchronicznie w ciele efektu,
     * bo to kaskadowe przerysowanie. Odłożenie o jeden takt sprawia, że
     * pierwszy render czatu kończy się (i klientka widzi „Wczytuję
     * rozmowę…”), zanim ruszy zapytanie.
     */
    const pierwsze = setTimeout(() => void pobierz(), 0);

    let stoper: ReturnType<typeof setInterval> | null = null;

    function wznow() {
      if (stoper) return;
      stoper = setInterval(() => void pobierz(), CO_ILE_MS);
    }
    function zatrzymaj() {
      if (!stoper) return;
      clearInterval(stoper);
      stoper = null;
    }
    function przyWidocznosci() {
      if (document.hidden) zatrzymaj();
      else {
        void pobierz();
        wznow();
      }
    }

    if (!document.hidden) wznow();
    document.addEventListener("visibilitychange", przyWidocznosci);

    return () => {
      clearTimeout(pierwsze);
      zatrzymaj();
      document.removeEventListener("visibilitychange", przyWidocznosci);
    };
  }, [pobierz]);

  async function wybierzZdjecie(event: React.ChangeEvent<HTMLInputElement>) {
    const plik = event.target.files?.[0];
    if (!plik) return;
    setBlad(null);

    // Zmniejszamy od razu przy wyborze, a nie przy wysyłce — dzięki temu
    // czekanie dzieje się, gdy klientka i tak pisze wiadomość, a nie po
    // kliknięciu „Wyślij".
    const mniejsze = await zmniejszObraz(plik);
    setZdjecie(mniejsze);
    setPodglad(URL.createObjectURL(mniejsze));
  }

  function usunZdjecie() {
    if (podglad) URL.revokeObjectURL(podglad);
    setZdjecie(null);
    setPodglad(null);
    if (wyborPliku.current) wyborPliku.current.value = "";
  }

  async function wyslij(event: React.FormEvent) {
    event.preventDefault();
    if (wysylanie) return;
    if (!tekst.trim() && !zdjecie) return;

    setWysylanie(true);
    setBlad(null);

    const dane = new FormData();
    dane.append("tresc", tekst);
    if (zdjecie) dane.append("obraz", zdjecie);

    try {
      const odp = await fetch("/api/klub/czat", { method: "POST", body: dane });
      const wynik = (await odp.json()) as { ok: boolean; blad?: string };
      if (!wynik.ok) {
        setBlad(wynik.blad ?? "Nie udało się wysłać wiadomości.");
        return;
      }
      setTekst("");
      usunZdjecie();
      await pobierz();
      naDol();
    } catch {
      setBlad("Brak połączenia. Spróbuj jeszcze raz.");
    } finally {
      setWysylanie(false);
    }
  }

  async function usunSwoja(id: string) {
    // Bez okienka `confirm()` — blokuje ono całą stronę, a pomyłkę i tak
    // widać od razu: wiadomość zamienia się w „Wiadomość usunięta".
    try {
      await fetch(`/api/klub/czat/${id}`, { method: "DELETE" });
      await pobierz();
    } catch {
      setBlad("Nie udało się usunąć wiadomości.");
    }
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-neutral-0">
      <div
        ref={przewijane}
        className="relative flex h-[60vh] min-h-80 flex-col gap-3 overflow-y-auto bg-surface p-4"
      >
        {!wczytane && <p className="m-auto text-sm text-muted">Wczytuję rozmowę…</p>}

        {wczytane && wiadomosci.length === 0 && (
          <div className="m-auto max-w-sm text-center">
            <p className="font-display text-lg text-neutral-900">Jeszcze nikt nic nie napisał</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Zacznij pierwsza — napisz, co dziś gotujesz. Wiadomości znikają po {dniZycia} dniach,
              więc to miejsce na codzienne rozmowy, a nie na archiwum.
            </p>
          </div>
        )}

        {wiadomosci.map((w) => (
          <div key={w.id} className={cn("flex", w.moja ? "justify-end" : "justify-start")}>
            <div className={cn("group max-w-[80%] sm:max-w-[70%]", w.moja && "text-right")}>
              {!w.moja && (
                <p className="mb-1 px-1 text-xs font-medium text-brand-700">{w.imie}</p>
              )}
              <div
                className={cn(
                  "inline-block overflow-hidden rounded-2xl text-left",
                  w.moja ? "bg-brand-600 text-neutral-0" : "bg-neutral-0 text-neutral-900",
                  !w.moja && "border border-border",
                )}
              >
                {w.obrazUrl && (
                  <a href={w.obrazUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={w.obrazUrl}
                      alt={`Zdjęcie od ${w.imie}`}
                      width={480}
                      height={480}
                      className="h-auto w-full max-w-72 object-cover"
                      unoptimized
                    />
                  </a>
                )}
                {w.tresc && (
                  <p className="whitespace-pre-wrap px-3.5 py-2 text-sm leading-relaxed">{w.tresc}</p>
                )}
              </div>
              <p className="mt-1 px-1 text-[0.7rem] text-muted">
                {godzina(w.kiedy)}
                {w.moja && w.tresc !== "Wiadomość usunięta" && (
                  <>
                    {" · "}
                    <button
                      type="button"
                      onClick={() => usunSwoja(w.id)}
                      className="underline underline-offset-2 hover:text-danger"
                    >
                      usuń
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {saNowe && (
        <button
          type="button"
          onClick={() => naDol()}
          className="border-t border-border bg-brand-600 py-2 text-sm font-medium text-neutral-0"
        >
          Nowe wiadomości — przewiń na dół ↓
        </button>
      )}

      <form onSubmit={wyslij} className="border-t border-border p-3">
        {podglad && (
          <div className="relative mb-3 inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element -- podgląd z blob:, poza obsługą next/image */}
            <img src={podglad} alt="Wybrane zdjęcie" className="h-24 w-auto rounded-lg" />
            <button
              type="button"
              onClick={usunZdjecie}
              aria-label="Usuń wybrane zdjęcie"
              className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-neutral-900 text-neutral-0"
            >
              <CloseIcon width={12} height={12} />
            </button>
          </div>
        )}

        {blad && <p className="mb-2 text-sm text-danger">{blad}</p>}

        <div className="flex items-end gap-2">
          <input
            ref={wyborPliku}
            type="file"
            accept="image/*"
            onChange={wybierzZdjecie}
            className="hidden"
            id="czat-zdjecie"
          />
          <label
            htmlFor="czat-zdjecie"
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-border text-neutral-600 hover:border-brand-400 hover:text-brand-700"
            title="Dodaj zdjęcie"
          >
            <span aria-hidden>+</span>
            <span className="sr-only">Dodaj zdjęcie</span>
          </label>

          <textarea
            value={tekst}
            onChange={(e) => setTekst(e.target.value)}
            onKeyDown={(e) => {
              // Enter wysyła, Shift+Enter robi nową linię — jak w każdym czacie.
              // Na telefonie klawiatura i tak daje własny Enter nowej linii.
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void wyslij(e);
              }
            }}
            rows={1}
            placeholder="Co dziś gotujesz?"
            className="max-h-32 min-h-11 flex-1 resize-y rounded-2xl border border-border px-4 py-2.5 text-sm outline-none focus:border-brand-400"
          />

          <Button type="submit" disabled={wysylanie || (!tekst.trim() && !zdjecie)} className="shrink-0">
            {wysylanie ? "…" : "Wyślij"}
          </Button>
        </div>
      </form>
    </div>
  );
}
