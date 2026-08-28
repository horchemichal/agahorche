import type { Testimonial } from "@/types/testimonial";

/**
 * Real customer reviews (spec §11/§42: never fabricate opinions) — transcribed
 * verbatim from Aga's public Google Business reviews (screenshots provided
 * directly by Aga). No city is set per review: Google reviews don't surface
 * one, and none is invented here. Justyna R.'s review is Google's own
 * truncated preview text ("Wyświetl całą opinię" cuts it off) — kept as
 * shown rather than guessing the rest.
 */
export const TESTIMONIALS: Testimonial[] = [
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
