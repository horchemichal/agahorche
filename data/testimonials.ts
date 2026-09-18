import type { Testimonial } from "@/types/testimonial";

/**
 * Real customer reviews (spec §11/§42: never fabricate opinions) — transcribed
 * verbatim from Aga's public Google Business reviews (screenshots provided
 * directly by Aga). No city is set per review: Google reviews don't surface
 * one, and none is invented here. Justyna R.'s review is Google's own
 * truncated preview text ("Wyświetl całą opinię" cuts it off) — kept as
 * shown rather than guessing the rest.
 *
 * AKTUALIZACJA 18.09.2026 — dopisane sześć nowszych opinii.
 *
 * SKĄD POCHODZĄ: odczytane wprost z panelu opinii Profilu Firmy w Google
 * (Michał zalogowany, profil zarządzany), a nie ze screenshotów. Profil miał
 * tego dnia 12 opinii, wszystkie 5/5; w pliku było sześć, brakowało sześciu
 * najnowszych. Kolejność w tablicy: od najnowszej.
 *
 * KONWENCJA PRZEPISYWANIA — ta sama, którą stosowała Aga przy pierwszej
 * szóstce: przepisujemy SŁOWA dosłownie, łącznie z literówkami i
 * interpunkcją autora, natomiast emoji dekoracyjne zastępujemy kropką albo
 * pomijamy (porównaj opinię „Bellcia XxX”: w Google ma ❤️😊🔥, tutaj ich nie
 * ma). Nie poprawiamy stylu ani ortografii — to są cudze wypowiedzi.
 *
 * DWIE UWAGI DLA AGI:
 * — „Justyna” (2 tygodnie) i „Justyna R.” (starsza, ucięta) to w Google dwa
 *   osobne wpisy. Jeśli to ta sama osoba, starszy wpis warto usunąć stąd.
 * — W opinii „Justyny” pada potoczne słowo („pierdołą”). Zostawione
 *   dosłownie, bo to cytat. Do decyzji Agi, czy ma wisieć na stronie.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "natalia-wojtowicz",
    authorName: "Natalia Wójtowicz",
    quote:
      "Z całego serca polecam Agnieszkę!!! Super prezentacja , wytłumaczy i nauczy obsługi, a dania kosztowanie na prezentacji petarda . Polecam !!",
    ratingOutOf5: 5,
  },
  {
    id: "sylwia-slaweta",
    authorName: "Sylwia Sławęta",
    quote: "Serdecznie polecam! Super kontakt przed zakupem i po.",
    ratingOutOf5: 5,
  },
  {
    id: "marcin-pinkowski",
    authorName: "Marcin Pińkowski",
    quote:
      "Jedna z lepszych przedstawicielek Thermomixa, która doradzi krok po kroku, poświęci czas niezależnie od dnia i pory wieczorowej. Dzięki niej zobaczyłem świat gotowania na innym poziomie. polecam Agę całym sercem.",
    ratingOutOf5: 5,
  },
  {
    id: "justyna-2",
    authorName: "Justyna",
    quote:
      "Najlepszy wybór przedstawiciela ever! Posiadam termo od dwóch lat. Trafiłam z polecenia od koleżanki z pracy. Zostałam przeprowadzona przez cały proces zamawiania jak dzidzia ;) Potem pomoc z każdą nawet najmniejszą pierdołą. Czuję się zaopiekowania i spokojna. Dzięki temu pokochałam tą maszynę jeszcze bardziej ;)",
    ratingOutOf5: 5,
  },
  {
    id: "natalia",
    authorName: "Natalia",
    quote:
      "Agnieszka od samego początku dba o klienta, zawsze można na nią liczyć kiedy jest jakiś problem, we wszystkim pomoże. Polecam, bo jest naprawdę zaangażowana w to co robi :)",
    ratingOutOf5: 5,
  },
  {
    id: "agnieszka",
    authorName: "Agnieszka",
    quote:
      "Bardzo polecam Agnieszkę. Super zarówno na prezentacji jak i opiekę po sprzedaży na każdym etapie. Polecam.",
    ratingOutOf5: 5,
  },
  {
    id: "anna-guzik",
    authorName: "Anna Guzik",
    quote:
      "Z całego serca polecam Panią Agnieszkę! Profesjonalna obsługa, dokładnie wszystko wytłumaczyła. Prezentacja Thermomixa przebiegła w bardzo miłej i przyjaznej atmosferze. Pozdrawiam Serdecznie.",
    ratingOutOf5: 5,
  },
  {
    id: "adriana-wolak",
    authorName: "Adriana Wolak",
    quote:
      "Profesjonalizm na najwyższym poziomie a do tego ogrom cierpliwości, życzliwa, pomocna w każdej sprawie, polecam z całego serca!!",
    ratingOutOf5: 5,
  },
  {
    id: "natalia-dobranowska",
    authorName: "Natalia Dobranowska",
    quote:
      "Świetna i fachowa pomoc przy zakupie. Cieszę się że trafiłam na Agnieszkę zawsze służy pomocą, jesteśmy w stałym kontakcie. Pyszna prezentacja, na pewno będę polecać dalej.",
    ratingOutOf5: 5,
  },
  {
    id: "bellcia-xxx",
    authorName: "Bellcia XxX",
    quote:
      "Przecudowna osoba, wszystko świetnie wyjaśnione w każdym szczególe. W razie jakich kolejek pytań pozostaje w ciągłym kontakcie z klientem. POLECAM!",
    ratingOutOf5: 5,
  },
  {
    id: "justyna-r",
    authorName: "Justyna R.",
    quote: "Z pełnym przekonaniem polecam współpracę z przedstawicielką Thermomix. Profesjonalne podejście, ogromna wiedza o…",
    ratingOutOf5: 5,
  },
  {
    id: "paulina-szwider",
    authorName: "Paulina Szwider",
    quote:
      "Najlepsza przedstawiciel! Zawsze dostępna kiedy tego potrzebuje. Podpowie, doradzi i zawsze ma najlepsze pomysły. Polecam z całego i oby więcej takich osób jak ona!",
    ratingOutOf5: 5,
  },
];
