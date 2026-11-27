"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export function BramkaHasla() {
  const router = useRouter();
  const [haslo, setHaslo] = useState("");
  const [blad, setBlad] = useState("");
  const [trwa, setTrwa] = useState(false);

  async function wyslij(e: FormEvent) {
    e.preventDefault();
    setTrwa(true);
    setBlad("");
    try {
      const r = await fetch("/api/raty/odblokuj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ haslo }),
      });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; blad?: string };
      if (r.ok && j.ok) router.refresh();
      else setBlad(j.blad || "Nieprawidłowe hasło.");
    } catch {
      setBlad("Brak połączenia. Spróbuj ponownie.");
    } finally {
      setTrwa(false);
    }
  }

  return (
    <form onSubmit={wyslij} className="max-w-sm space-y-3">
      <label htmlFor="haslo-raty" className="block text-sm font-medium text-neutral-800">
        Wpisz hasło otrzymane od przedstawiciela Thermomix
      </label>
      <input
        id="haslo-raty"
        type="password"
        autoComplete="off"
        value={haslo}
        onChange={(e) => setHaslo(e.target.value)}
        className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
        required
      />
      {blad && <p className="text-sm text-red-700">{blad}</p>}
      <button
        type="submit"
        disabled={trwa}
        className="rounded-lg bg-emerald-700 px-5 py-2.5 font-medium text-white hover:bg-emerald-800 disabled:opacity-60"
      >
        {trwa ? "Sprawdzam…" : "Dalej"}
      </button>
    </form>
  );
}
