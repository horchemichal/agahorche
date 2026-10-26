import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { ofertaObowiazuje } from "@/lib/offers/window";
import type { Offer } from "@/types/offer";

/**
 * Akcja wymiany starego Thermomixa na TM7 (23.10.2026).
 * Źródło prawdy: oferty w panelu. Akcja „trwa”, gdy istnieje aktywna oferta w swoim oknie dat,
 * której nazwa mówi o wymianie (np. „Wymień starego Thermomixa…”, „Wymiana TM6 na TM7”).
 * Codzienne zadanie zapisuje nowe akcje Vorwerka jako wersję roboczą, Aga klika „Opublikuj”
 * i strona /thermomix/wymiana oraz strony miast od razu pokazują kwoty i daty.
 */
const NAZWA = /wymie[nń]|wymian/i;

export async function aktywnaWymiana(now: Date = new Date()): Promise<Offer | null> {
  try {
    const oferty = await getOffersRepository().list();
    return (
      oferty.find(
        (o) => o.isActive && ofertaObowiazuje(o.startsAt, o.endsAt, now) && NAZWA.test(o.productName),
      ) ?? null
    );
  } catch {
    return null;
  }
}

export function dataPl(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const [y, m, d] = iso.slice(0, 10).split("-");
  return d + "." + m + "." + y;
}

/** Ostatnia znana akcja (regulamin Vorwerk „Wymień, zyskaj, odkryj”). */
export const OSTATNIA_WYMIANA = {
  nazwa: "Wymień, zyskaj, odkryj",
  od: "23.10.2025",
  do: "23.12.2025",
  znizki: [
    ["TM31", "645 zł"],
    ["TM5", "1 075 zł"],
    ["TM6", "1 935 zł"],
  ] as const,
};
