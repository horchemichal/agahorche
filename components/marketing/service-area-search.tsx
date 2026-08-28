"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/marketing/icons";
import { Button, ButtonLink } from "@/components/ui/button";
import { SITE } from "@/lib/utils";

interface CityOption {
  name: string;
  urlPath: string;
}

/**
 * Client-side "sprawdź swoje miasto" search (mockup's map search box).
 * Matches against the real location engine's city list passed in from the
 * server. Aga serves all of Poland (spec §3/§43) — a typed place that
 * doesn't have its own dedicated page yet still gets an honest, positive
 * "Aga works here too, get in touch" message rather than a dead end that
 * reads like the area isn't served at all.
 */
export function ServiceAreaSearch({ cities }: { cities: CityOption[] }) {
  const [query, setQuery] = useState("");
  const [notFoundQuery, setNotFoundQuery] = useState<string | null>(null);
  const router = useRouter();

  const normalizedCities = useMemo(
    () => cities.map((c) => ({ ...c, normalized: c.name.toLowerCase() })),
    [cities],
  );

  function handleSearch() {
    const raw = query.trim();
    if (!raw) return;
    const q = raw.toLowerCase();
    const match = normalizedCities.find((c) => c.normalized === q || c.normalized.startsWith(q));
    if (match) {
      setNotFoundQuery(null);
      router.push(match.urlPath);
      return;
    }
    setNotFoundQuery(raw);
  }

  return (
    <div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon width={18} height={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setNotFoundQuery(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Wpisz swoje miasto"
            className="w-full rounded-md border border-neutral-300 bg-neutral-0 py-2.5 pl-10 pr-3 text-sm text-neutral-900"
          />
        </div>
        <Button type="button" onClick={handleSearch}>
          Sprawdź
        </Button>
      </div>
      {notFoundQuery && (
        <div className="mt-3 rounded-lg border border-brand-200 bg-brand-50 p-3.5">
          <p className="text-sm text-neutral-800">
            Aga obsługuje całą Polskę — działa też na terenie <strong>„{notFoundQuery}”</strong>, mimo że ta
            miejscowość nie ma jeszcze własnej strony. Napisz lub zadzwoń, żeby sprawdzić dostępny termin
            prezentacji.
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            <ButtonLink href="/kontakt" className="h-9 px-4 text-sm">
              Skontaktuj się
            </ButtonLink>
            <ButtonLink href={SITE.messengerHref} external variant="outline" className="h-9 px-4 text-sm">
              Napisz na Messengerze
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
