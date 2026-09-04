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
      "Na stronie publicznej pokazujemy 1–2 przykładowe plany z pierwszym dniem w pełni widocznym. Pełna baza — wszystkie dni odblokowane, warianty 7 i 14 dni, kaloryczności 1500 i 2000 kcal oraz lista zakupów na cały tydzień — dostępna jest po zostaniu klientką/klientem Agi.",
  },
  {
    /*
     * 4.09.2026: poprzednia odpowiedź brzmiała „Tak, przy wybranych daniach
     * znajdziesz opcję »Zamień danie«". To była nieprawda — ani jeden posiłek
     * w bazie nie ma przypisanego zamiennika, więc ten przycisk nigdy się nie
     * pojawiał. Mówimy więc, jak jest, i wskazujemy narzędzie, które naprawdę
     * działa (/przepisy).
     */
    question: "Czy mogę zamienić danie w planie?",
    answer:
      "Jadłospisy są ułożone na sztywno — nie ma przycisku, który podmienia jedno danie na drugie. Jeśli coś Ci nie pasuje, w Aga Club masz wyszukiwarkę „Co ugotować dzisiaj?”: podajesz czas i ochotę, a dostajesz dania z Cookidoo, którymi możesz zastąpić ten posiłek.",
  },
  {
    question: "Pod jaki model Thermomixa są te przepisy?",
    answer:
      "Pod TM7. Każdy przepis w jadłospisach prowadzi do konkretnej pozycji w Cookidoo dostępnej na TM7 — dlatego konfigurator nie pyta już o model.",
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
