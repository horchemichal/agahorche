"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { POLA, OKRES_PRZECHOWYWANIA_GODZ, poleWidoczne, type DaneRaty, type Pole } from "@/lib/raty/pola";

const KLASA_POLA =
  "w-full rounded-lg border px-3 py-2.5 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20";

export function FormularzRaty() {
  const [dane, setDane] = useState<DaneRaty>({});
  const [bledy, setBledy] = useState<Record<string, string>>({});
  const [komunikat, setKomunikat] = useState("");
  const [trwa, setTrwa] = useState(false);
  const [wyslano, setWyslano] = useState(false);

  const ustaw = (klucz: string, v: string) => setDane((d) => ({ ...d, [klucz]: v }));

  async function wyslij(e: FormEvent) {
    e.preventDefault();
    setTrwa(true);
    setKomunikat("");
    try {
      const r = await fetch("/api/raty/zgloszenie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dane),
      });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; blad?: string; bledy?: Record<string, string> };
      if (r.ok && j.ok) {
        setWyslano(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setBledy(j.bledy ?? {});
        setKomunikat(j.blad || "Nie udało się wysłać.");
      }
    } catch {
      setKomunikat("Brak połączenia. Spróbuj ponownie.");
    } finally {
      setTrwa(false);
    }
  }

  if (wyslano) {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-white px-5 py-6 text-center">
        <p className="text-xl font-semibold text-emerald-800 sm:text-2xl">
          Jesteś o krok od posiadania tego cudownego urządzenia 😄
        </p>
        <Image
          src="/zdjecia/thermomix-tm7-varoma.webp"
          alt="Thermomix TM7 z Varomą"
          width={1000}
          height={1000}
          sizes="(max-width: 640px) 90vw, 560px"
          className="mx-auto mt-5 h-auto w-full max-w-md rounded-2xl"
        />
        <h2 className="mt-6 text-lg font-semibold text-neutral-900">Dziękujemy, dane zostały wysłane.</h2>
        <p className="mt-2 text-neutral-700">
          Zadzwonimy, żeby dokończyć wniosek – proszę mieć pod ręką dowód osobisty, zapytamy o jego numer. Dane zostaną usunięte
          z bazy po {OKRES_PRZECHOWYWANIA_GODZ} godzinach.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={wyslij} noValidate className="space-y-5">
      {POLA.filter((p) => poleWidoczne(p, dane)).map((pole) => (
        <PoleFormularza
          key={pole.klucz}
          pole={pole}
          wartosc={dane[pole.klucz] ?? ""}
          blad={bledy[pole.klucz]}
          onChange={(v) => ustaw(pole.klucz, v)}
        />
      ))}

      {komunikat && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">{komunikat}</p>}

      <button
        type="submit"
        disabled={trwa}
        className="w-full rounded-lg bg-emerald-700 px-5 py-3 text-base font-medium text-white hover:bg-emerald-800 disabled:opacity-60 sm:w-auto"
      >
        {trwa ? "Wysyłam…" : "Wyślij dane"}
      </button>
      <p className="text-xs text-neutral-500">
        Dane są usuwane z naszej bazy danych automatycznie po {OKRES_PRZECHOWYWANIA_GODZ} godzinach.
      </p>
    </form>
  );
}

function PoleFormularza({
  pole,
  wartosc,
  blad,
  onChange,
}: {
  pole: Pole;
  wartosc: string;
  blad?: string;
  onChange: (v: string) => void;
}) {
  if (pole.typ === "info") {
    return (
      <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
        <p className="text-sm font-medium text-amber-900">{pole.etykieta}</p>
        <p className="mt-1 text-sm text-amber-900">{pole.podpowiedz}</p>
      </div>
    );
  }

  const id = `raty-${pole.klucz}`;
  const klasa = `${KLASA_POLA} ${blad ? "border-red-500" : "border-neutral-300"}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-800">
        {pole.etykieta}
        {pole.opcjonalne && <span className="font-normal text-neutral-500"> (opcjonalnie)</span>}
        {pole.wymaganeGdy && <span className="font-normal text-neutral-500"> (jeśli dotyczy)</span>}
      </label>
      {pole.ostrzezenie && <p className="mt-0.5 text-sm font-medium text-red-700">{pole.ostrzezenie}</p>}
      {pole.podpowiedz && <p className="mt-0.5 text-xs text-neutral-500">{pole.podpowiedz}</p>}
      <div className="mt-1.5">
        {pole.typ === "select" ? (
          <select id={id} value={wartosc} onChange={(e) => onChange(e.target.value)} className={klasa}>
            <option value="">— wybierz —</option>
            {pole.opcje?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : pole.typ === "textarea" ? (
          <textarea id={id} rows={2} value={wartosc} onChange={(e) => onChange(e.target.value)} className={klasa} />
        ) : (
          <input
            id={id}
            type={pole.typ}
            inputMode={pole.klucz === "pesel" ? "numeric" : undefined}
            maxLength={pole.klucz === "pesel" ? 11 : undefined}
            autoComplete="off"
            value={wartosc}
            onChange={(e) => onChange(e.target.value)}
            className={klasa}
          />
        )}
      </div>
      {blad && <p className="mt-1 text-sm text-red-700">{blad}</p>}
    </div>
  );
}
