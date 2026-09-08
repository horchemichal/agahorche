import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
  blokOMnie,
  faqWspolne,
  highlightyStandardowe,
  sekcjaCena,
  sekcjaCoUgotujesz,
  sekcjaRaty,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * GOLENIÓW — miasto nad Iną, w środku Puszczy Goleniowskiej, jednego
 * z większych kompleksów leśnych Pomorza Zachodniego.
 *
 * KĄT: grzyby. Co urządzenie zrobi z grzybami, które JUŻ macie —
 * i najostrzejsza odmowa na całej stronie: żadnego doradzania,
 * które grzyby są jadalne.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — zaczyna się od odmowy, nie od porady: nie rozpoznaję grzybów,
 *   nie oceniam ich ze zdjęcia i nie odpowiadam na takie pytania,
 *   nawet gdy wydają się oczywiste. Od tego są atlas, doświadczony
 *   grzybiarz i punkt skupu,
 * — dopiero potem, o grzybach już sprawdzonych: zupa grzybowa,
 *   pasta, farsz, susz zmielony na proszek — wszystko w jednym naczyniu,
 * — czego NIE zrobi: nie ususzy i nie usmaży,
 * — i nic o przechowywaniu ani o tym, co jeszcze nadaje się do zjedzenia.
 *
 * TWARDE GRANICE — NAJOSTRZEJSZE Z CAŁEGO SERWISU:
 * — ABSOLUTNIE ŻADNEGO ROZPOZNAWANIA GRZYBÓW, ich cech, podobieństw
 *   ani „bezpiecznych" gatunków. Pomyłka w tej dziedzinie zabija.
 *   Odmowa ma być postawiona NA POCZĄTKU sekcji, nie na końcu.
 * — ŻADNYCH PORAD O SUSZENIU, MROŻENIU, PRZECHOWYWANIU I OBRÓBCE
 *   pod kątem bezpieczeństwa (zasada ze Skierniewic).
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o grzybach.
 *
 * ROZGRANICZENIE. Sulechów mówi o przerobie owoców z własnego ogrodu,
 * Płońsk o mrożonkach, Białogard o rybie, Marki o resztkach. Tutaj
 * chodzi o GRZYBY i o granicę kompetencji sprzedawcy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Goleniów leży nad Iną, w środku Puszczy Goleniowskiej,
 * — był miastem hanzeatyckim z portem rzecznym na Inie,
 * — zachowały się mury miejskie budowane z głazów granitowych oraz
 *   Brama Wolińska.
 */
export const GOLENIOW: CityContent = {
  slug: "goleniow",
  h1: "Thermomix Goleniów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Goleniów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Goleniowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Goleniów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Goleniowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Goleniowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Goleniów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Grzybów nie rozpoznaję i nie oceniam. Zaczynam od tego, a nie kończę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Goleniowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "grzyby",
      heading: "Miasto w środku puszczy — i grzyby, o których nie doradzam",
      paragraphs: [
        "Goleniów leży nad Iną, w środku Puszczy Goleniowskiej. Grzyby są tu tematem sezonowym, który wraca sam, więc napiszę o nich — ale zacznę od odmowy, a nie od porady, bo w tej jednej sprawie kolejność ma znaczenie.",
        "Nie rozpoznaję grzybów. Nie oceniam ich ze zdjęcia, nie odpowiadam na pytania w stylu „czy ten jest dobry” i nie potwierdzam czyichś przypuszczeń, nawet gdy wydają się oczywiste, nawet dla żartu i nawet gdy ktoś bardzo nalega. Pomyłka w tej dziedzinie kończy się inaczej niż pomyłka w kuchni, a ja jestem przedstawicielką handlową, nie mykologiem. Od tego są atlas, doświadczony grzybiarz, punkt skupu i osoba, która zna się na tym naprawdę.",
        "Teraz część, o której mogę mówić: co da się zrobić z grzybami, które macie już sprawdzone i przygotowane do garnka. Zupa grzybowa — rozdrobnienie i gotowanie w jednym naczyniu, bez przelewania i bez stania nad garnkiem. Pasta grzybowa do chleba i farsz do pierogów albo do naleśników — to jest czynność, w której urządzenie jest naprawdę dobre, bo cała robota polega na rozdrobnieniu i wymieszaniu.",
        "Osobno warto wspomnieć o suszu. Suszone grzyby da się zmielić na proszek, który potem trafia do sosów i zup — to jest jedna z tych drobnych rzeczy, do których normalnie nie chce się nic wyciągać, a robi się je w dwie minuty. Uprzedzam jednak od razu: urządzenie nie suszy. Susz musi już być, a jak go zrobić, nie doradzę.",
        "Nie usmaży też grzybów. Smażone kurki na maśle to patelnia i tak zostanie — jeśli w Waszym domu grzyby to głównie smażenie, ten sprzęt niewiele w tej sprawie zmieni.",
        "I domknięcie tej samej granicy, od której zaczęłam: nie doradzam nic o suszeniu, mrożeniu, przechowywaniu ani o tym, co jeszcze nadaje się do zjedzenia. Nie podam też żadnych czasów ani temperatur. Mówię wyłącznie o tym, co robi urządzenie z produktem, który ktoś kompetentny uznał już za dobry.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Goleniowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "W sezonie chętnie zrobimy na spotkaniu zupę z Waszych grzybów — pod warunkiem, że to Wy odpowiadacie za to, co trafia do garnka.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Goleniowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla goleniowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie ze Szczecina.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Goleniowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle albo ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: ["Centrum", "Helenów", "Zielone Wzgórze"],

  nearbyHeading: "Poza Goleniów też przyjadę",
  nearbyParagraphs: [
    "Maszewo, Stepnica, Przybiernów i Nowogard są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Maszewo", "Stepnica", "Nowogard", "Szczecin", "Stargard", "Police"],

  about: blokOMnie("do Goleniowa", "w Goleniowie i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Goleniowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Goleniowie"),
    {
      question: "Doradzisz, czy ten grzyb jest jadalny?",
      answer:
        "Nie. Nie rozpoznaję grzybów, nie oceniam ich ze zdjęcia i nie potwierdzam czyichś przypuszczeń — nawet gdy wydają się oczywiste i nawet gdy ktoś nalega. Pomyłka w tej dziedzinie kończy się inaczej niż pomyłka w kuchni. Od tego są atlas, doświadczony grzybiarz i punkt skupu.",
    },
    {
      question: "Co zrobię w tym z grzybów, które mam już sprawdzone?",
      answer:
        "Zupę grzybową — rozdrobnienie i gotowanie w jednym naczyniu. Pastę do chleba i farsz do pierogów, bo cała robota polega tam na rozdrobnieniu i wymieszaniu. Suszone grzyby da się zmielić na proszek do sosów i zup. Urządzenie nie suszy i nie smaży, a o przechowywaniu nie doradzam.",
    },
  ],

  geo: { lat: 53.5657, lng: 14.8281 },
};
