import type { AgaClubFeatureFlags } from "@/types/aga-club";

/**
 * Feature flags for Aga Club (spec §16). Every module described in the
 * spec exists as a routed, designed placeholder (see
 * /components/aga-club) but ships DISABLED — no fake AI responses, no
 * fabricated recipe data — until each is built with real logic in its own
 * scoped task (spec §48: "Zbuduj AI Meal Planner." etc.).
 */
export const AGA_CLUB_FEATURE_FLAGS: AgaClubFeatureFlags = {
  // 4.09.2026: obie funkcje ISTNIEJĄ i działają od 1.09 — tylko pod innymi
  // adresami (/przepisy i /przepisy/co-mam-w-lodowce). Klub pokazywał je
  // jako „Wkrótce", choć wystarczyło wskazać właściwy adres.
  coDzisUgotowac: true,
  mojaLodowka: true,
  trybMama: false,
  planTygodnia: false,
  // 1.09.2026: moduł ma treść (30 dni) i działa — patrz
  // app/(site)/aga-club/30-dni-z-aga/page.tsx.
  trzydziesciDniZAga: true,
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
    title: "Co ugotować dzisiaj?",
    description: "Powiedz, ile masz czasu, dla ilu osób gotujesz i na co masz ochotę — pokażę pasujące dania z Cookidoo.",
    href: "/przepisy",
  },
  {
    key: "mojaLodowka",
    title: "Co mam w lodówce?",
    // Opis mówił „a AI zaproponuje". Narzędzie nie używa AI: dopasowuje
    // zaznaczone produkty do listy składników 252 przepisów. Obiecywanie
    // AI tam, gdzie jej nie ma, to obietnica, której strona nie dotrzyma.
    description: "Zaznacz produkty, które masz pod ręką — pokażę dania, które da się z nich zrobić, i czego brakuje.",
    href: "/przepisy/co-mam-w-lodowce",
  },
  {
    key: null,
    title: "Poradnik kuchenny",
    description: "Co można zamrozić, jak uratować za słoną zupę, co znaczy blanszowanie — 123 wpisy na kuchenne pytania.",
    href: "/poradnik",
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
    title: "30 dni z Thermomixem",
    // Opis poprawiony 1.09.2026: wcześniej obiecywał „odznaki za postępy”,
    // których moduł nie ma i mieć nie będzie. Jest pasek postępu i odhaczanie.
    description: "Trzydzieści dni, trzydzieści zadań — od pierwszego koktajlu po własny repertuar dań.",
    href: "/aga-club/30-dni-z-aga",
  },
  {
    key: "agaAi",
    title: "Aga AI",
    description: "Zadaj pytanie o gotowanie z Thermomixem i dostań odpowiedź od razu.",
    href: "/aga-club/aga-ai",
  },
];
