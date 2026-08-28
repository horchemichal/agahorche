/**
 * Shared explainer copy used by the homepage, /prezentacja and every
 * location page's "how it works" sections (spec §8). This content is
 * deliberately centralized: it describes Aga's actual process, which is
 * the same everywhere, so per-city uniqueness comes from the location
 * data (intro, FAQ, neighbors, breadcrumbs) layered around it — not from
 * rewriting this block per city (see /lib/locations/content.ts for the
 * part that IS generated per location).
 *
 * Every value here is either generic product/process framing or explicitly
 * marked TODO where it depends on facts only Aga can confirm.
 */

export const PRESENTATION_STEPS = [
  {
    title: "Umawiamy dogodny termin",
    description:
      "Piszesz lub dzwonisz, wybieramy termin, który Ci pasuje — spotykamy się stacjonarnie, u Ciebie w domu.",
  },
  {
    title: "Poznajesz Thermomix na żywo",
    description:
      "Aga pokazuje, jak działa TM7 na przykładzie prostych, codziennych dań — pytaj o wszystko, na co masz ochotę.",
  },
  {
    title: "Decydujesz bez presji",
    description:
      "Prezentacja niczego nie zobowiązuje. Dostajesz komplet informacji i czas na spokojną decyzję.",
  },
];

/**
 * Same real process as PRESENTATION_STEPS above, broken into 5 finer
 * steps for the homepage's horizontal step band (mockup layout). Kept as
 * a separate export rather than replacing PRESENTATION_STEPS so the
 * existing 3-step usages (location pages, /prezentacja) are untouched.
 */
export const PRESENTATION_STEPS_DETAILED = [
  { icon: "phone" as const, title: "Kontakt", description: "Wybierasz wygodny sposób kontaktu." },
  { icon: "calendar" as const, title: "Ustalenie terminu", description: "Dopasowujemy najlepszy termin dla Ciebie." },
  { icon: "laptop" as const, title: "Prezentacja", description: "Poznajesz wszystkie funkcje Thermomixa." },
  { icon: "chefHat" as const, title: "Gotowanie", description: "Zobaczysz przygotowanie pysznych potraw." },
  { icon: "cart" as const, title: "Zakup", description: "Decydujesz i zamawiasz Thermomix®." },
];

export const WHY_CHOOSE_AGA_POINTS = [
  { title: "Indywidualne podejście", description: "Prezentacja dopasowana do Twoich potrzeb i pytań." },
  { title: "Prezentacja na żywo", description: "Zobaczysz realne działanie TM7, nie efekt montażu." },
  { title: "Pomoc po zakupie", description: "Zostaję z Tobą także po prezentacji i zakupie." },
  { title: "Aga Club — przepisy i plany", description: "Wsparcie w codziennym gotowaniu z Thermomixem." },
  { title: "Szybki kontakt i wsparcie", description: "Odpowiadam szybko — telefonicznie lub na Messengerze." },
];

export const WHY_LIVE_DEMO_POINTS = [
  "Zobaczysz realny czas przygotowania dania, nie efekt montażu.",
  "Możesz zadać pytania dotyczące dokładnie Twojej sytuacji (rodzina, czas, budżet).",
  "Sprawdzisz na żywo głośność, wagę i obsługę urządzenia.",
];

export const AUDIENCE_SEGMENTS = [
  {
    title: "Dla rodzin",
    description: "Szybsze, prostsze gotowanie codziennych posiłków dla całej rodziny.",
    href: "/thermomix/dla-rodziny",
  },
  {
    title: "Dla mam",
    description: "Więcej czasu, mniej naczyń do zmywania, posiłki dopasowane do dzieci.",
    href: "/thermomix/dla-mamy",
  },
  {
    title: "Dla początkujących w kuchni",
    description: "Prowadzone przepisy krok po kroku — bez wcześniejszego doświadczenia.",
    href: "/thermomix/dla-poczatkujacych",
  },
];
