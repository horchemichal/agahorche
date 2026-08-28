import type { FaqItem } from "@/types/seo";

/**
 * Shared FAQ for the Diety module (hub + category pages). Kept honest per
 * spec §23/§42 — no claims about dietitian involvement, certifications or
 * accuracy guarantees we can't back up.
 */
export const DIETY_FAQ: FaqItem[] = [
  {
    question: "Czym różni się przykładowy plan od pełnej diety w Strefie Klienta?",
    answer:
      "Na stronie publicznej pokazujemy 1–2 przykładowe plany z pierwszym dniem w pełni widocznym. Pełna baza — więcej wariantów, 14 dni, różne kaloryczności, zamienniki i lista zakupów na cały tydzień — dostępna jest po zostaniu klientką/klientem Agi.",
  },
  {
    question: "Czy mogę zamienić danie w planie?",
    answer:
      "Tak, przy wybranych daniach w przykładowym planie znajdziesz opcję „Zamień danie”. Pełny system zamienników posiłków i składników rozwijamy w Strefie Klienta.",
  },
  {
    question: "Jakie modele Thermomix obsługuje konfigurator?",
    answer: "TM31, TM5, TM6 i TM7 — wybierasz swój model w kroku 4 konfiguratora.",
  },
  {
    question: "Czy przepisy mają linki do Cookidoo?",
    answer:
      "Tam, gdzie link do Cookidoo jest potwierdzony, znajdziesz przycisk „Zobacz przepis w Cookidoo”. Przy pozostałych przepisach link pojawi się, gdy zostanie dodany.",
  },
  {
    question: "Czy plany są dopasowane indywidualnie do mnie?",
    answer:
      "Publiczne przykładowe plany mają charakter poglądowy. Dopasowanie diety do Twoich potrzeb, produktów, których nie lubisz, i celów omawiamy indywidualnie — umów bezpłatną prezentację lub zapytaj o Strefę Klienta.",
  },
];
