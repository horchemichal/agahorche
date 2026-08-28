import type { AgaClubFeatureFlags } from "@/types/aga-club";

/**
 * Feature flags for Aga Club (spec §16). Every module described in the
 * spec exists as a routed, designed placeholder (see
 * /components/aga-club) but ships DISABLED — no fake AI responses, no
 * fabricated recipe data — until each is built with real logic in its own
 * scoped task (spec §48: "Zbuduj AI Meal Planner." etc.).
 */
export const AGA_CLUB_FEATURE_FLAGS: AgaClubFeatureFlags = {
  coDzisUgotowac: false,
  mojaLodowka: false,
  trybMama: false,
  planTygodnia: false,
  trzydziesciDniZAga: false,
  agaAi: false,
};

export interface AgaClubFeatureCopy {
  /** `null` for features that live outside AgaClubFeatureFlags (e.g. "diety" — see below). */
  key: keyof AgaClubFeatureFlags | null;
  title: string;
  description: string;
  href: string;
}

/**
 * "Diety" is real, shipped content (see /diety and data/diets/*), not a
 * flagged placeholder — it doesn't get an AgaClubFeatureFlags entry
 * because there's nothing to gate; it's listed first per spec §15
 * ("AGA CLUB ├── Diety").
 */
export const AGA_CLUB_FEATURES: AgaClubFeatureCopy[] = [
  {
    key: null,
    title: "Diety",
    description: "Skonfiguruj dietę na Thermomix, zobacz przykładowy plan i przepisy z Cookidoo.",
    href: "/diety",
  },
  {
    key: "coDzisUgotowac",
    title: "Co dziś ugotować?",
    description: "Wpisz, co masz w domu i ile masz czasu — podpowiemy pomysł na danie.",
    href: "/aga-club/co-dzis-ugotowac",
  },
  {
    key: "mojaLodowka",
    title: "Moja lodówka",
    description: "Wskaż produkty, które masz pod ręką, a AI zaproponuje, co z nich przygotować.",
    href: "/aga-club/moja-lodowka",
  },
  {
    key: "trybMama",
    title: "Tryb Mama",
    description: "Plan śniadania, obiadu i kolacji dopasowany do rodziny, czasu i budżetu.",
    href: "/aga-club/tryb-mama",
  },
  {
    key: "planTygodnia",
    title: "Plan tygodnia",
    description: "Cały tydzień posiłków i lista zakupów wygenerowana w kilka chwil.",
    href: "/aga-club/plan-tygodnia",
  },
  {
    key: "trzydziesciDniZAga",
    title: "30 dni z Agą",
    description: "Codzienne wyzwanie z zadaniami, poradami i odznakami za postępy.",
    href: "/aga-club/30-dni-z-aga",
  },
  {
    key: "agaAi",
    title: "Aga AI",
    description: "Zadaj pytanie o gotowanie z Thermomixem i dostań odpowiedź od razu.",
    href: "/aga-club/aga-ai",
  },
];
