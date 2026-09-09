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
 * GRYFINO — miasto nad Odrą, dwadzieścia kilometrów od Szczecina,
 * z jednym z większych ogrodów działkowych w regionie: sam ROD
 * „Zielone Tarasy" ma tysiąc sto trzydzieści cztery działki.
 *
 * KĄT: działka. Nie ogród przy domu — działka, czyli kawałek ziemi
 * KILKA KILOMETRÓW OD KUCHNI, z którego wraca się z siatką tego, co
 * akurat dojrzało. To jedyne miejsce w serwisie, gdzie ten temat jest.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — działka rządzi się inaczej niż ogród: trzeba tam dojechać, a plony
 *   przychodzą falami i nie da się ich zaplanować,
 * — czego urządzenie NIE zrobi: nie pojedzie z Wami na działkę.
 *   Stoi w kuchni i tam zostaje — a na wielu działkach i tak nie ma
 *   gniazdka,
 * — co realnie pomaga: to, co przyjeżdża w siatce, zwykle trzeba
 *   przerobić tego samego wieczoru, a nie w weekend. Zupa, przecier,
 *   pasta — w jednym naczyniu, bez stania obok,
 * — i granica: nie doradzam nic o przechowywaniu ani weckowaniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PASTERYZACJI, WECKOWANIU, KISZENIU ANI
 *   PRZECHOWYWANIU PRZETWORÓW (zasada ze Skierniewic). Źle zrobiony
 *   słoik to nie jest kwestia smaku.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań „z działki kontra
 *   ze sklepu".
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI (zasada z Jarocina).
 *
 * ROZGRANICZENIE. Sulechów mówi o przerobie owoców z WŁASNEGO OGRODU
 * przy domu we wrześniu, Płońsk o mrożonkach, Goleniów o grzybach.
 * Tutaj chodzi o DZIAŁKĘ — czyli o to, że uprawa jest gdzie indziej
 * niż kuchnia i że plon przyjeżdża, kiedy chce.
 *
 * ŚWIADOMIE POMINIĘTE — ELEKTROWNIA DOLNA ODRA. Bloki węglowe
 * wygaszono 1 stycznia 2026 r., a ze zwolnieniami wiąże się ponad
 * sześćset miejsc pracy. To jest świeża strata konkretnych ludzi
 * i NIE ROBIĘ z niej tła dla sprzedaży sprzętu za kilka tysięcy
 * złotych. Nie ma o tym w treści ani jednego zdania — także w sekcji
 * o rodzinie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy około dziewiętnastu i pół tysiąca mieszkańców
 *   na 11,8 km²; leży około dwudziestu kilometrów od Szczecina,
 * — ROD „Zielone Tarasy" (dawniej im. Aleksandra Zawadzkiego) ma
 *   1 134 działki i około tysiąca dziewięciuset działkowców; powstał
 *   około 1981 r. i dzieli się na pięć rejonów,
 * — drugi ogród w mieście, Vista Bella, ma kilkaset działek —
 *   dokładnej liczby NIE ZNALAZŁAM i dlatego jej nie podaję,
 * — maksymalna powierzchnia jednej działki to 500 m²,
 * — nowych działek się nie tworzy: grunt należy do gminy, więc wejść
 *   można tylko przez rynek wtórny,
 * — ROD „Zielone Tarasy" wygrał wojewódzki konkurs „Przyjazne ogrody”
 *   w 2023 r.,
 * — lokacja miasta w 1254 r. przez księcia Barnima I (to LOKACJA —
 *   słowiańska osada istniała tu wcześniej, od dwunastego wieku);
 *   w 2024 r. miasto obchodziło 770-lecie,
 * — potocznie miasto dzieli się na Górny i Dolny Taras; to nazwy
 *   zwyczajowe, urzędowego podziału na osiedla NIE ZNALAZŁAM,
 * — bezrobocie 6,6% to wskaźnik POWIATU — w tekście go nie ma,
 * — NIE ZNALAZŁAM produktu z miasta ani powiatu na ministerialnej
 *   Liście Produktów Tradycyjnych.
 */
export const GRYFINO: CityContent = {
  slug: "gryfino",
  h1: "Thermomix Gryfino – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gryfino — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Gryfinie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i wsie gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gryfino — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gryfinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gryfina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Gryfino i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na działkę z Wami nie pojedzie. Robota zaczyna się dopiero po powrocie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gryfinie – jak wygląda prezentacja?",
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
      id: "dzialka",
      heading: "Miasto, w którym uprawa jest kilka kilometrów od kuchni",
      paragraphs: [
        "Sam ogród „Zielone Tarasy” w Gryfinie ma tysiąc sto trzydzieści cztery działki i około tysiąca dziewięciuset działkowców, a drugi, Vista Bella, kolejnych kilkaset — przy mieście liczącym niecałe dwadzieścia tysięcy mieszkańców. Nowych działek się tu nie tworzy, bo grunt należy do gminy, więc wejść można wyłącznie przez rynek wtórny. To znaczy, że działka jest tu rzeczą, którą się dziedziczy albo kupuje od kogoś, kto rezygnuje.",
        "Piszę o tym, bo działka to zupełnie co innego niż ogród przy domu — a materiały sprzedażowe traktują to jak jedno i to samo. Różnice są trzy i wszystkie mają kuchenne konsekwencje.",
        "Pierwsza: uprawa jest gdzie indziej niż kuchnia. Trzeba tam dojechać, a potem wrócić z tym, co się zebrało. Nie ma opcji „wyjdę i urwę dwa pomidory do kolacji”.",
        "Druga: plon przychodzi falami i nie pyta o kalendarz. Przez trzy tygodnie nie ma nic, a potem w jeden weekend przyjeżdża siatka cukinii, druga fasolki i skrzynka jabłek. Zwykle w niedzielę wieczorem, kiedy w poniedziałek trzeba wstać do pracy.",
        "Trzecia, najbardziej praktyczna: to, co przyjechało, trzeba przerobić w kilka wieczorów, a nie „kiedyś”. I tu urządzenie faktycznie coś zmienia — nie dlatego, że jest sprytne, tylko dlatego, że zdejmuje z tego dokładnie tę część, która najbardziej zniechęca po całym dniu. Zupa krem z tego, co przyjechało, przecier, pasta warzywna, mus — wszystko to jest rozdrabnianie i mieszanie, a przy nich nie trzeba stać.",
        "Powiem od razu rzecz oczywistą, ale wartą powiedzenia: na działkę to nie pojedzie. Stoi w kuchni i tam zostaje. Na wielu działkach zresztą i tak nie ma gniazdka, a na tych, gdzie jest, wożenie tam kilkukilogramowego urządzenia to zły pomysł. Cała robota zaczyna się dopiero po powrocie do domu.",
        "I granica, przy której jestem stanowcza. Nie doradzam nic o weckowaniu, pasteryzacji, kiszeniu ani o tym, jak długo coś postoi w piwnicy. Źle zrobiony słoik to nie jest kwestia smaku, tylko zdrowia, a ja nie jestem od tego. Mówię wyłącznie o tym, co urządzenie robi z warzywami, zanim trafią do słoika — a co się z nimi dzieje potem, to pytanie do kogoś, kto się na tym zna.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gryfinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie działkę, przynieście na spotkanie to, co akurat z niej przyjechało. Zrobimy z tego zupę i będzie widać różnicę na Waszych warzywach, a nie na moich.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gryfinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla gryfińskiej rodziny",
      paragraphs: [
        "Do Szczecina jest stąd około dwudziestu kilometrów i wiele osób tam pracuje, więc obiad powstaje po powrocie, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Gryfina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy, bez dopłaty za dojazd.",
    "Górny i Dolny Taras to nazwy zwyczajowe, a nie urzędowe — nie znalazłam wykazu osiedli. Przy umawianiu najprościej podać ulicę albo nazwę wsi.",
  ],
  districts: [],

  nearbyHeading: "Poza Gryfino też przyjadę",
  nearbyParagraphs: [
    "Wełtyń, Gardno, Pniewo, Chwarstnica i pozostałe wsie gminy są w zasięgu jednej trasy, podobnie Banie i Widuchowa — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wełtyń", "Gardno", "Banie", "Widuchowa", "Stare Czarnowo", "Szczecin"],

  about: blokOMnie("do Gryfina", "w Gryfinie i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gryfina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Gryfinie"),
    {
      question: "Mam działkę i co roku przyjeżdża z niej za dużo warzyw. Co to daje?",
      answer:
        "Zdejmuje tę część roboty, która po całym dniu najbardziej zniechęca — rozdrabnianie i mieszanie. Zupa krem, przecier, pasta czy mus powstają w jednym naczyniu i nie trzeba przy nich stać. To nie jest magia, tylko usunięcie najbardziej odpychającego etapu.",
    },
    {
      question: "Czy da się to zabrać na działkę?",
      answer:
        "Nie polecam. Urządzenie waży swoje, potrzebuje gniazdka, a na wielu działkach go po prostu nie ma. Stoi w kuchni i tam zostaje — robota zaczyna się po powrocie.",
    },
    {
      question: "Doradzisz, jak zrobić przetwory na zimę?",
      answer:
        "Nie doradzam nic o weckowaniu, pasteryzacji ani o tym, jak długo słoik postoi w piwnicy. Źle zrobiony przetwór to nie jest kwestia smaku, tylko zdrowia, a ja jestem przedstawicielką handlową, nie technologiem żywności. Mówię wyłącznie o tym, co urządzenie robi z warzywami, zanim trafią do słoika.",
    },
  ],

  geo: { lat: 53.2531, lng: 14.4894 },
};
