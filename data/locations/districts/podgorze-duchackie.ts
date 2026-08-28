import type { DistrictContent } from "./typy";

/**
 * PODGÓRZE DUCHACKIE (XI) — jedna z największych sypialni Krakowa,
 * ok. 54,5 tys. mieszkańców przy gęstości ok. 5 400 os./km².
 *
 * Fakty potwierdzone i użyte:
 * — Kurdwanów Nowy budowany 1979–1989, urbanistka Anna Sierosławska;
 *   dominują bloki 11- i 5-piętrowe, ok. 95 ha, ok. 20 tys. mieszkańców,
 * — Piaski Nowe: 17 budynków dziesięciopiętrowych, 1859 mieszkań,
 * — Wola Duchacka: bloki z lat 70. i 80. nałożone na dawną wieś,
 * — Piaski Wielkie i Podlesie: zabudowa jednorodzinna,
 * — Bonarka City Center jako punkt orientacyjny całej południowej części
 *   miasta,
 * — brak strefy płatnego parkowania, ale realny deficyt miejsc wieczorem,
 * — Trasa Łagiewnicka odciążyła część ruchu.
 *
 * Metraże mieszkań na Kurdwanowie są NIEPOTWIERDZONE — mówię o ciasnocie
 * jakościowo, przez okres i technologię budowy, nie przez liczby.
 */
export const KRAKOW_PODGORZE_DUCHACKIE: DistrictContent = {
  slug: "krakow-podgorze-duchackie",
  urlPath: "/thermomix/krakow/podgorze-duchackie",
  nazwa: "Podgórze Duchackie",
  miejscownik: "Podgórzu Duchackim",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Kurdwanów i Wola Duchacka — prezentacja u Ciebie",
  seoTitle: "Thermomix Podgórze Duchackie — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Kurdwanowie, Woli Duchackiej i Piaskach Nowych: bezpłatna prezentacja TM7 u Ciebie w kuchni. Bez dopłat za dojazd. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Kurdwanów, Wolę Duchacką, Piaski Nowe i Piaski Wielkie oraz do Podlesia. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Kurdwanów",
    "Kurdwanów Nowy",
    "Wola Duchacka Wschód",
    "Wola Duchacka Zachód",
    "Piaski Nowe",
    "Piaski Wielkie",
    "os. Podlesie",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Kuchnia z końca lat osiemdziesiątych — wąska, ale przewidywalna",
      paragraphs: [
        "Kurdwanów Nowy powstawał od tysiąc dziewięćset siedemdziesiątego dziewiątego do osiemdziesiątego dziewiątego roku i to jeden z najbardziej jednorodnych zasobów w Krakowie: bloki pięcio- i jedenastopiętrowe, budowane w tej samej technologii, z tym samym układem mieszkań. Piaski Nowe to siedemnaście budynków dziesięciopiętrowych i blisko dwa tysiące mieszkań.",
        "W praktyce znaczy to, że wiem, do czego jadę, zanim wejdę: kuchnia będzie osobna, wąska, z krótkim blatem i grzejnikiem pod oknem. To nie jest zły warunek — po prostu inny niż aneks w nowym budownictwie, i planuję pod niego spotkanie.",
        "Wyjątkiem są Piaski Wielkie i Podlesie, gdzie przeważa zabudowa jednorodzinna, oraz nowsze bloki dostawiane w ostatnich latach w okolicach Bonarki. Tam miejsca jest znacznie więcej.",
      ],
    },
    {
      id: "parkowanie",
      heading: "Parkowanie darmowe, ale wieczorem zajęte",
      paragraphs: [
        "Strefy płatnego parkowania tu nie ma i nie zanosi się na nią. Problem jest inny i bardzo konkretny: to gęste blokowisko projektowane w czasach, gdy samochodów było kilka razy mniej. Wieczorami i w weekendy wolne miejsce potrafi być trudne do znalezienia.",
        "Dlatego jeśli masz elastyczność, terminy między dziewiątą a piętnastą są dla mnie znacznie prostsze — część aut jest wtedy w pracy. Jeśli pasuje Ci tylko wieczór, umówimy się bez problemu; po prostu wyjeżdżam wcześniej.",
        "Do centrum jest stąd kwadrans, może dwadzieścia minut autem, a Trasa Łagiewnicka zdjęła część ruchu z Witosa i Sławka. Tramwajem dwadzieścia pięć do trzydziestu pięciu minut.",
      ],
    },
    {
      id: "rytm",
      heading: "Sypialnia znaczy: obiad po siedemnastej",
      paragraphs: [
        "Kurdwanów i Piaski Nowe bywają nazywane jedną z największych sypialni Krakowa i to nie jest złośliwość, tylko opis. Rano wszyscy wyjeżdżają, wieczorem wracają, a obiad wypada w tej gorszej części dnia — po dojeździe, przed resztą obowiązków.",
        "To jest dokładnie ten moment, w którym urządzenie zmienia najwięcej. Nie dlatego, że gotuje szybciej, tylko dlatego, że nie wymaga, żeby ktoś przy nim stał. Można nastawić i pójść zrobić coś innego, a danie samo pilnuje temperatury i miesza.",
        "Blisko jest też Bonarka, czyli miejsce, w którym łatwo skończyć z jedzeniem na mieście zamiast obiadu w domu. Nie namawiam, żeby przestać tam chodzić — mówię tylko, że po zakupie zwykle chodzi się rzadziej, bo obiad przestaje być wysiłkiem.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na Kurdwanów i Wolę Duchacką?",
      answer:
        "Tak, na oba, a także na Piaski Nowe i Wielkie oraz do Podlesia. Dojazd jest bezpłatny, a strefy płatnego parkowania w tej dzielnicy nie ma.",
    },
    {
      question: "Która godzina jest najlepsza na spotkanie?",
      answer:
        "Dla mnie prościej przed piętnastą, bo wtedy łatwiej o miejsce postojowe. Ale terminy wieczorne są tu najczęściej wybierane i nie ma z nimi żadnego problemu — po prostu wyjeżdżam z większym zapasem.",
    },
    {
      question: "Mam ciasną kuchnię w bloku. Czy zmieścimy się we dwie?",
      answer:
        "Czasem tak, czasem nie — i wtedy przenosimy się do stołu w pokoju. Urządzenie potrzebuje wyłącznie gniazdka, więc nic na tym nie tracimy, a siedzi się wygodniej.",
    },
  ],

  geo: { lat: 50.0139, lng: 19.9469 },
};
