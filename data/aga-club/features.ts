import type { AgaClubFeatureFlags } from "@/types/aga-club";

/**
 * Feature flags for Aga Club (spec §16). Mechanizm istnieje po to, żeby
 * moduł mógł trafić na produkcję wyłączony, zamiast udawać, że działa
 * (spec §34: funkcji AI nie wolno symulować).
 *
 * 4.09.2026 — na prośbę Agi zniknęły trzy kafelki „Wkrótce": Tryb Mama,
 * Plan tygodnia i Aga AI. Powód jest prosty: zapowiedź, pod którą nic nie
 * ma, przez pół roku wygląda tak samo jak zapowiedź, o której zapomniano.
 * Klub pokazuje teraz tylko to, co da się kliknąć i użyć. Gdy któryś
 * z tych modułów naprawdę powstanie, wraca tu jako wpis z flagą — razem
 * ze swoją stroną.
 *
 * Usunięte razem z kafelkami:
 * - /aga-club/plan-tygodnia i /aga-club/aga-ai — puste strony „Wkrótce",
 *   nigdy nie było ich w mapie strony, więc Google ich nie zna
 * - /aga-club/tryb-mama — kafelek prowadził pod ten adres, ale strony
 *   pod nim nigdy nie było; link dawał 404
 */
export const AGA_CLUB_FEATURE_FLAGS: AgaClubFeatureFlags = {
  // 4.09.2026: obie funkcje ISTNIEJĄ i działają od 1.09 — tylko pod innymi
  // adresami (/przepisy i /przepisy/co-mam-w-lodowce). Klub pokazywał je
  // jako „Wkrótce", choć wystarczyło wskazać właściwy adres.
  coDzisUgotowac: true,
  mojaLodowka: true,
  // 1.09.2026: moduł ma treść (30 dni) i działa — patrz
  // app/(site)/aga-club/30-dni-z-aga/page.tsx.
  trzydziesciDniZAga: true,
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
    key: "trzydziesciDniZAga",
    title: "30 dni z Thermomixem",
    // Opis poprawiony 1.09.2026: wcześniej obiecywał „odznaki za postępy”,
    // których moduł nie ma i mieć nie będzie. Jest pasek postępu i odhaczanie.
    description: "Trzydzieści dni, trzydzieści zadań — od pierwszego koktajlu po własny repertuar dań.",
    href: "/aga-club/30-dni-z-aga",
  },
];
