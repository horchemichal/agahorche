import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ALEKSANDRÓW ŁÓDZKI — dwudziestodwutysięczne miasto pod Łodzią,
 * dawne „Skarpetkowo", w którym co roku odbywa się jeden z większych
 * w Polsce festiwali metalowych, organizowany osobiście przez burmistrza.
 *
 * KĄT: weekend, którego nie ma w kuchni. Gotowanie PRZED trzema dniami,
 * w czasie których nikt nie będzie gotował — bo festiwal, bo wyjazd,
 * bo cokolwiek innego zajmuje cały weekend. Odwrotność zwykłego
 * schematu, w którym weekend jest tym momentem, kiedy się gotuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — w większości domów weekend to czas na porządne gotowanie; tu bywa
 *   odwrotnie — weekend wypada z kuchni całkowicie,
 * — co się wtedy robi: przygotowuje w czwartek albo piątek to, co ma
 *   przetrwać trzy dni, i to jest realne zastosowanie tego urządzenia,
 * — konkretnie: zupa, sos, pasta kanapkowa, ciasto — jedno naczynie,
 *   seriami, bez stania obok,
 * — czego NIE zrobi: nie jest to gotowanie „na miesiąc" i nie doradzam,
 *   co i jak długo można trzymać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PRZECHOWYWANIU, TERMINACH PRZYDATNOŚCI, MROŻENIU
 *   I BEZPIECZEŃSTWIE ŻYWNOŚCI (zasada ze Skierniewic).
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH OCEN CZYICHŚ WEEKENDÓW ani muzyki, której ktoś słucha.
 *
 * ROZGRANICZENIE. Kazimierz mówi o weekendzie jako strefie wyłączonej
 * z perspektywy przyjezdnego, kilka stron o pracy zmianowej. Tutaj chodzi
 * o PRZYGOTOWANIE PRZED WEEKENDEM, KTÓRY WYPADA Z KUCHNI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy ok. dwudziestu dwóch tysięcy mieszkańców, gmina ponad
 *   trzydzieści pięć tysięcy (GUS, 31.12.2024),
 * — gmina ma 22 sołectwa; miasto dzieli się na trzy osiedla bez nazw
 *   własnych (Osiedle Nr 1, Nr 2 i Nr 3),
 * — do Łodzi jest 14 km, do Zgierza 10 km,
 * — saldo migracji gminy w 2024 r. wyniosło +475 przy ujemnym przyroście
 *   naturalnym −125 — miasto rośnie wyłącznie napływem,
 * — festiwal Summer Dying Loud odbywa się od siedemnastu edycji;
 *   trzy dni, dwie sceny, około pięćdziesięciu wykonawców, a organizatorem
 *   od pierwszej edycji jest burmistrz miasta,
 * — osadę założył około 1816 r. Rafał Bratoszewski; prawa miejskie
 *   22 marca 1822 r., nazwa na cześć cara Aleksandra I,
 * — trzy cmentarze wyznaniowe założono w trzech kolejnych latach:
 *   katolicki 1820, ewangelicki 1821, żydowski 1822,
 * — pierwsza mechaniczna fabryka pończoch powstała w 1888 r.; w szczycie
 *   w mieście i okolicy działało około czterystu zakładów pończoszniczych,
 * — tramwaj do Łodzi zniknął w latach dziewięćdziesiątych,
 * — NIE POTWIERDZIŁAM żadnego wpisu z gminy ani powiatu zgierskiego
 *   na ministerialnej Liście Produktów Tradycyjnych.
 */
export const ALEKSANDROW_LODZKI: CityContent = {
  slug: "aleksandrow-lodzki",
  h1: "Thermomix Aleksandrów Łódzki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Aleksandrów Łódzki — cena i przedstawiciel",
  seoDescription:
    "Thermomix w Aleksandrowie Łódzkim: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i sołectwa. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Aleksandrów Łódzki — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Aleksandrowie Łódzkim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Aleksandrowa Łódzkiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich dwudziestu dwóch sołectw gminy.",

  highlights: highlightyStandardowe("Aleksandrów Łódzki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czwartek wieczorem, żeby sobota i niedziela w ogóle nie musiały być w kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Aleksandrowie Łódzkim – jak wygląda prezentacja?",
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
      id: "weekend",
      heading: "Weekend, który w ogóle nie wchodzi do kuchni",
      paragraphs: [
        "W dwudziestodwutysięcznym Aleksandrowie od siedemnastu lat odbywa się jeden z większych festiwali metalowych w Polsce: trzy dni, dwie sceny, około pięćdziesięciu wykonawców, publiczność z całego kraju. Organizatorem od pierwszej edycji jest burmistrz miasta. To dobry pretekst, żeby napisać o czymś, o czym w tej branży nie mówi się prawie wcale.",
        "Bo cała reklama sprzętu kuchennego opiera się na jednym założeniu: że weekend jest tym momentem, kiedy wreszcie można porządnie ugotować. Niedzielny obiad, rosół, ciasto. W bardzo wielu domach jest dokładnie odwrotnie — to weekend wypada z kuchni całkowicie. Trzy dni na festiwalu, wyjazd, mecz, remont, dyżur, wesele. Cokolwiek. Nie ma nikogo w domu albo są wszyscy, ale nikt nie ma czasu.",
        "Wtedy sensowne jest coś, o czym rzadko się mówi: gotowanie w czwartek albo piątek wieczorem tego, co ma przetrwać do poniedziałku. Nie „na zapas na miesiąc”, tylko na te trzy konkretne dni.",
        "Praktycznie działa to tak. Duża porcja zupy, sos do makaronu, pasta kanapkowa, ciasto — cztery rzeczy, jedna po drugiej, w jednym naczyniu. Między nimi płucze się je i robi kolejną. Nie trzeba przy tym stać, więc te cztery rzeczy powstają w czasie, w którym normalnie zrobiłoby się jedną, a resztę wieczoru i tak spędza się w domu.",
        "Najlepiej wychodzą tu rzeczy, w których cała praca polega na rozdrabnianiu i mieszaniu: kremy, sosy, pasty, farsze. Najgorzej — wszystko, co wymaga patelni albo pieca, bo tego urządzenie nie robi i nie będę udawać, że robi.",
        "I granica, przy której jestem stanowcza. Nie doradzam, co i jak długo można trzymać, jak przechowywać ani co jeszcze nadaje się do zjedzenia po trzech dniach. To jest dziedzina, w której zła podpowiedź komuś realnie szkodzi. Od tego są opakowania produktów i ludzie, którzy się na tym znają — ja mówię wyłącznie o tym, ile pracy zabiera samo ugotowanie.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Aleksandrowie Łódzkim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Mam też terminy w tygodniu wieczorem, jeśli weekendy macie zajęte. Do sołectw gminy dojeżdżam tak samo jak do miasta.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Aleksandrowie Łódzkim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla aleksandrowskiej rodziny",
      paragraphs: [
        "Do Łodzi jest stąd czternaście kilometrów, do Zgierza dziesięć, a gmina rośnie prawie wyłącznie napływem — w dwa tysiące dwudziestym czwartym roku saldo migracji wyniosło plus czterysta siedemdziesiąt pięć osób. To znaczy, że w bardzo wielu domach ktoś codziennie dojeżdża, a obiad powstaje po powrocie.",
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

  districtsHeading: "Do których części Aleksandrowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw, bez dopłaty za dojazd.",
    "Osiedla w mieście są numerowane i nie mają nazw własnych, więc przy umawianiu najprościej podać ulicę albo nazwę wsi.",
  ],
  districts: [],

  nearbyHeading: "Poza Aleksandrów też przyjadę",
  nearbyParagraphs: [
    "Bełdów, Rąbień, Ruda-Bugaj i Nakielnica są w zasięgu jednej trasy, podobnie Konstantynów Łódzki i Lutomiersk — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Konstantynów Łódzki", "Zgierz", "Lutomiersk", "Parzęczew", "Łódź", "Dalików"],

  about: blokOMnie("do Aleksandrowa Łódzkiego", "w Aleksandrowie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Aleksandrowa Łódzkiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Aleksandrowie Łódzkim"),
    {
      question: "Da się w tym przygotować jedzenie na kilka dni z góry?",
      answer:
        "Tak i to jedno z sensowniejszych zastosowań, gdy weekend jest zajęty. Zupa, sos, pasta kanapkowa i ciasto powstają jedno po drugim w tym samym naczyniu, bez stania obok. Nie doradzam natomiast, co i jak długo można trzymać — to dziedzina, w której zła podpowiedź realnie szkodzi, a ja nie jestem od tego.",
    },
    {
      question: "Macie terminy poza weekendem?",
      answer:
        "Tak, także wieczorami w tygodniu. Jeśli weekendy macie zajęte na stałe, powiedzcie to przy umawianiu i dobiorę porę pod Was — spotkanie trwa około dwóch godzin.",
    },
  ],

  geo: { lat: 51.8186, lng: 19.3053 },
};
