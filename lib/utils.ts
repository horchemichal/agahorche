import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, resolving Tailwind conflicts sanely. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Site-wide constants that don't belong to any single domain module. */
export const SITE = {
  name: "Aga Horche",
  /*
   * Dane firmy podane przez Michała 4.09.2026 — potrzebne do klauzuli RODO
   * i polityki prywatności (art. 13 RODO wymaga, żeby administratora dało
   * się zidentyfikować i żeby dało się z nim skontaktować).
   *
   * „Aga Horche" to nazwa, pod którą Aga występuje na stronie i w social
   * mediach; „Agnieszka Piech XD" to firma, na którą prowadzi działalność.
   * W polityce prywatności musi stać ta druga — dokument prawny wskazuje
   * przedsiębiorcę, a nie markę.
   */
  legalName: "Agnieszka Piech XD",
  address: "Olchawa 170, 32-720 Nowy Wiśnicz",
  nip: "868-195-12-31",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agahorche.pl",
  defaultLocale: "pl_PL",
  phone: "517 185 691",
  phoneHref: "tel:+48517185691",
  // m.me deep link uses the same profile name as the confirmed Facebook
  // page below (spec §42: never invent a link — this reuses one we already have).
  messengerHref: "https://m.me/agulabuu",
  // null = no confirmed public inbox (spec §42: never invent contact
  // details). Previously held a made-up address; Aga confirmed she has no
  // public email, so components must not render a mailto link here.
  email: null as string | null,
  // null = not confirmed yet (spec §42: never invent a link). Components
  // should only render an icon when the value is set — see components
  // that map over Object.entries(SITE.social).
  social: {
    facebook: "https://www.facebook.com/agulabuu" as string | null,
    instagram: "https://www.instagram.com/agahorche_thermomix" as string | null,
    tiktok: "https://www.tiktok.com/@agahorche_thermomix" as string | null,
    // 4.09.2026: adres kanału podany przez Agę (wcześniej @agahorche).
    // Ten jeden wpis zasila ikonę YouTube wszędzie — w górnej belce,
    // w stopce i w sekcji „Znajdź mnie w social mediach" — bo komponenty
    // czytają go stąd (components/layout/social-icons.tsx oraz
    // components/marketing/social-follow-section.tsx).
    youtube: "https://www.youtube.com/@thermomixprzedstawiciel" as string | null,
  },
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

/**
 * NORMALIZACJA DAT Z BAZY — wspólna dla sitemapy i danych strukturalnych.
 *
 * Repozytoria zwracają `updatedAt` jako `string`, dokładnie tak, jak wypluwa
 * go sterownik Postgresa:
 *
 *     2026-08-25 15:51:41.548993+00
 *
 * To nie jest ISO 8601 — spacja zamiast „T” i offset „+00” zamiast „+00:00”.
 * W sierpniu 2026 taki string szedł wprost do <lastmod> i Search Console
 * zaraportowało „Nieprawidłowa data” dla 43 z 96 adresów. Poprawka wylądowała
 * wtedy w app/sitemap.ts jako funkcja prywatna dla tego jednego pliku.
 *
 * 4.09.2026 okazało się, że ta sama surowa wartość leci też do
 * `datePublished`/`dateModified` w schemacie Article na wpisach bloga —
 * błąd żył dalej, tylko w innym miejscu. Dlatego normalizacja stoi tutaj,
 * w module bazowym, i jest wspólna dla wszystkiego, co podaje daty na zewnątrz.
 *
 * Dlaczego nie w repozytoriach: `updatedAt: string` jest publiczną częścią
 * typów, a panel admina wyświetla te wartości jako tekst.
 */
/**
 * Zamienia wartość dowolnego pochodzenia na `Date`, albo `null`, gdy nie da
 * się jej sensownie odczytać. Nigdy nie rzuca.
 */
export function normalizujDate(value: unknown): Date | null {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  // "2026-08-25 15:51:41…" → "2026-08-25T15:51:41…"
  let normalized = trimmed.replace(/^(\d{4}-\d{2}-\d{2}) /, "$1T");
  // "…+00" → "…+00:00", ale tylko gdy jest część czasowa — inaczej samo
  // "2026-08-25" zamieniłoby się w "2026-08-25:00" i przestałoby się parsować.
  if (normalized.includes("T")) {
    normalized = normalized.replace(/([+-]\d{2})$/, "$1:00");
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Data w ISO 8601 do JSON-LD, albo `undefined` — pole, którego nie da się
 * odczytać, ma zniknąć ze schematu, a nie pojawić się w nim jako śmieć.
 * Schema.org traktuje brak pola jako brak informacji; nieparsowalną wartość
 * traktuje jako błąd struktury.
 */
export function doIso8601(value: unknown): string | undefined {
  return normalizujDate(value)?.toISOString();
}
