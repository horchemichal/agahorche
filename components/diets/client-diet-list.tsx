"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { CategoryIcon } from "./category-icon";
import type { DietCategory } from "@/types/diet";
import { Badge } from "@/components/ui/card";
import { CloseIcon } from "@/components/marketing/icons";
import { wczytajUsuniete, usunZMoichDiet, ZDARZENIE } from "@/lib/diets/moje-diety";

/**
 * Kafelki diet na pulpicie Aga Club, z możliwością usunięcia tych,
 * z których klientka nie korzysta (prośba Agi, 31.08.2026).
 *
 * 1.09.2026: krzyżyk USUWA, a nie ukrywa. Zniknął pasek „Ukryte diety: N ·
 * Przywróć wszystkie" — Aga poprosiła wprost: „niech diety da się usuwać
 * bez przywracania". Powrót diety na pulpit odbywa się teraz świadomie,
 * przyciskiem „Dodaj do moich diet" w konfiguratorze tej konkretnej diety
 * (patrz components/diets/diet-configurator.tsx), więc nic nie ginie
 * bezpowrotnie — po prostu wraca się po jedną rzecz, a nie po wszystkie
 * naraz.
 *
 * Stan mieszka w lib/diets/moje-diety.ts (localStorage). Nasłuchujemy
 * zdarzenia, bo konfigurator może dopisać dietę bez przeładowania strony.
 */

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
  const [usuniete, setUsuniete] = useState<string[]>([]);
  // Odczyt dopiero po zamontowaniu — inaczej serwer i klient wyrenderowałyby
  // różne listy i React zgłosiłby niezgodność hydratacji.
  const [gotowe, setGotowe] = useState(false);

  const odswiez = useCallback(() => setUsuniete(wczytajUsuniete()), []);

  useEffect(() => {
    odswiez();
    setGotowe(true);
    window.addEventListener(ZDARZENIE, odswiez);
    // `storage` łapie zmianę zrobioną w innej karcie tej samej przeglądarki.
    window.addEventListener("storage", odswiez);
    return () => {
      window.removeEventListener(ZDARZENIE, odswiez);
      window.removeEventListener("storage", odswiez);
    };
  }, [odswiez]);

  const widoczne = gotowe ? pozycje.filter((p) => !usuniete.includes(p.id)) : pozycje;

  if (widoczne.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-neutral-300 bg-surface p-6 text-center text-sm text-neutral-700">
        Nie masz teraz żadnej diety na pulpicie.{" "}
        <Link href="/diety" className="font-medium text-brand-700 underline underline-offset-2">
          Wybierz dietę
        </Link>{" "}
        i kliknij „Dodaj do moich diet".
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {widoczne.map((p) => (
        <div
          key={p.id}
          className="relative flex flex-col gap-3 rounded-2xl border border-border bg-neutral-0 p-5 transition-colors hover:border-brand-400"
        >
          <button
            type="button"
            onClick={() => usunZMoichDiet(p.id)}
            aria-label={`Usuń dietę ${p.name} z pulpitu`}
            title="Usuń tę dietę z mojego pulpitu"
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
  );
}
