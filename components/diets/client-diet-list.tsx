"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CategoryIcon } from "./category-icon";
import type { DietCategory } from "@/types/diet";
import { Badge } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/components/marketing/icons";

/**
 * Lista diet w Aga Club z możliwością ukrycia tych, których ktoś nie używa
 * (prośba Agi, 31.08.2026).
 *
 * DLACZEGO localStorage, A NIE BAZA. To jest preferencja widoku, a nie dane
 * klienta: nic nie kasuje, niczego nie traci i w każdej chwili da się
 * cofnąć jednym kliknięciem. Trzymanie tego w bazie wymagałoby migracji
 * i endpointu do zapisu dla rzeczy, która nie jest warta ani jednego, ani
 * drugiego. Konsekwencja, o której trzeba wiedzieć: ustawienie jest per
 * przeglądarka — na telefonie lista będzie znowu pełna.
 *
 * Ukrycie NIE usuwa diety z serwisu; to filtr na własnym pulpicie.
 * Dlatego przycisk mówi „Ukryj", a nie „Usuń", i dlatego zawsze widać,
 * ile pozycji jest schowanych.
 */

const KLUCZ = "agaclub-ukryte-diety";

export type PozycjaDiety = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: DietCategory["icon"];
  /** Adres pełnego planu albo strony publicznej, gdy planu jeszcze nie ma. */
  href: string;
  /** Etykieta na kafelku — np. „Pełny plan — 7 dni odblokowane". */
  etykieta?: string;
};

export function ClientDietList({ pozycje }: { pozycje: PozycjaDiety[] }) {
  const [ukryte, setUkryte] = useState<string[]>([]);
  // Odczyt dopiero po zamontowaniu — inaczej serwer i klient wyrenderowałyby
  // różne listy i React zgłosiłby niezgodność hydratacji.
  const [gotowe, setGotowe] = useState(false);

  useEffect(() => {
    try {
      const zapis = window.localStorage.getItem(KLUCZ);
      if (zapis) setUkryte(JSON.parse(zapis) as string[]);
    } catch {
      // Prywatne okno albo zablokowane dane witryny — lista po prostu
      // zostaje pełna. Nie ma tu nic, co warto ratować komunikatem.
    }
    setGotowe(true);
  }, []);

  function zapisz(next: string[]) {
    setUkryte(next);
    try {
      window.localStorage.setItem(KLUCZ, JSON.stringify(next));
    } catch {
      /* jw. */
    }
  }

  const widoczne = gotowe ? pozycje.filter((p) => !ukryte.includes(p.id)) : pozycje;
  const ileUkrytych = gotowe ? pozycje.length - widoczne.length : 0;

  return (
    <div className="flex flex-col gap-4">
      {widoczne.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-neutral-300 bg-surface p-6 text-center text-sm text-neutral-700">
          Ukryłaś wszystkie diety. Kliknij „Przywróć wszystkie", żeby wróciły na pulpit.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {widoczne.map((p) => (
            <div
              key={p.id}
              className="relative flex flex-col gap-3 rounded-2xl border border-border bg-neutral-0 p-5 transition-colors hover:border-brand-400"
            >
              <button
                type="button"
                onClick={() => zapisz([...ukryte, p.id])}
                aria-label={`Ukryj dietę ${p.name}`}
                title="Ukryj tę dietę na moim pulpicie"
                className="absolute right-3 top-3 rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
              >
                <CloseIcon width={14} height={14} />
              </button>
              <Link href={p.href} className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 pr-6">
                  <CategoryIcon icon={p.icon} width={22} height={22} className="text-brand-600" />
                  <p className="font-display text-lg text-neutral-900">{p.name}</p>
                </div>
                {p.etykieta && <Badge tone="brand">{p.etykieta}</Badge>}
                <p className="text-sm text-muted">{p.description}</p>
              </Link>
            </div>
          ))}
        </div>
      )}

      {ileUkrytych > 0 && (
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
          <p className="text-sm text-neutral-700">
            Ukryte diety: <strong className="font-medium">{ileUkrytych}</strong>
          </p>
          <Button type="button" variant="ghost" onClick={() => zapisz([])} className="!px-2 !py-1 text-xs">
            Przywróć wszystkie
          </Button>
        </div>
      )}
    </div>
  );
}
