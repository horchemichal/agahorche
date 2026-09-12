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
 * KONSTANTYNÓW ŁÓDZKI — gmina miejska w powiecie pabianickim,
 * 19 305 mieszkańców (31.12.2024, GUS). Brief mówił 18 000 —
 * ZANIŻONE, i to rzadki przypadek.
 *
 * OBALONE, WAŻNE: Konstantynów NIE WYLUDNIA SIĘ. UROSŁ
 * O 10,2% od 2002 r. — przybyło 1 684 mieszkańców. Jest
 * w pierwszej piątce najszybciej rosnących gmin regionu
 * łódzkiego. To suburbanizacja, głównie z Łodzi, przywożąca
 * młodszą ludność.
 *
 * OBALONE: miasto NIE powstało w 1821 r. W 1821 r. Mikołaj
 * Krzywiec-Okołowicz założył OSIEDLE FABRYCZNE sukienników
 * i płócienników na gruntach wsi Żabice Wielkie; nazwę
 * Konstantynów osada dostała w 1824 r., a PRAWA MIEJSKIE
 * DOPIERO W 1830 r., postanowieniem Rady Administracyjnej
 * Królestwa Polskiego.
 * OBALONE: miasto NIE było miastem przez 54 lata — prawa
 * utracone w 1869 albo 1870 r. (źródła podają różnie, więc
 * ROKU NIE PODAJĘ), przywrócone w 1924 r.
 * OBALONE: tramwaj do Konstantynowa DZIAŁA — linia 43 wróciła
 * 1 LIPCA 2024 r. po pięcioletniej przerwie. Tramwaj kursuje
 * do Łodzi od 1910 r.
 *
 * FAKT OSIOWY DLA KĄTA: w mieście działa duży producent
 * BARWNIKÓW, a historia osady zaczyna się od sukienników
 * i FARBIARZY. Miasto barwników.
 *
 * KĄT: KOLOR JEDZENIA. Dlaczego warzywa szarzeją, co robi
 * z kolorem gotowanie w wodzie, a co gotowanie na parze.
 * Temat czysto techniczny, wizualny i nigdzie indziej
 * w serwisie nietknięty.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zieleń warzyw ginie od DŁUGIEGO gotowania i od wody,
 *   a nie od sprzętu,
 * — że gotowanie na parze w Varomie zachowuje kolor lepiej niż
 *   gotowanie w garnku, bo warzywo nie leży w wodzie,
 * — że NIE JEST TO twierdzenie o wartościach odżywczych —
 *   piszę o kolorze i o teksturze, nie o witaminach,
 * — że urządzenie potrafi też kolor ZEPSUĆ: zmiksowana
 *   na długo zielenina brązowieje, bo nóż ją miażdży
 *   i napowietrza,
 * — że barwniki naturalne — burak, kurkuma, szpinak, sok
 *   z marchwi — barwią też uszczelkę i tworzywo, i mówię
 *   o tym przed zakupem,
 * — i że o barwnikach spożywczych z torebki nie doradzam.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI O WITAMINACH.
 *   „Gotowanie na parze zachowuje witaminy" to zdanie,
 *   którego NIE NAPISZĘ. Piszę wyłącznie o kolorze i teksturze.
 * — ŻADNYCH BARWNIKÓW SPOŻYWCZYCH z nazwy ani porad o nich.
 * — ŻADNYCH INSTRUKCJI CZYSZCZENIA — odsyłam do instrukcji
 *   producenta.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEGO ROKU UTRATY PRAW MIEJSKICH (1869 vs 1870).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Buraki" (Nowy Staw)
 * dotyczą jednego warzywa i pracy z nim; barwienie uszczelki
 * jest tam wspomniane jako ostrzeżenie przy buraku, a tutaj
 * jako element szerszego tematu — i tak to zaznaczam.
 * „Gotowanie na parze" i „para" mają własne strony i tu chodzi
 * wyłącznie o SKUTEK WIZUALNY, nie o technikę. „Czyszczenie
 * urządzenia" (Krapkowice) dotyczy uszczelki i noża.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Konstantynów jest miastem od 1821 r.
 * — NIE PODAJĘ roku utraty praw miejskich.
 * — NIE NAZYWAM miasta „sypialnią Łodzi" — to protekcjonalne
 *   wobec mieszkańców, a poza tym danych o dojazdach do pracy
 *   nie potwierdziłam.
 * — NIE PODAJĘ nazwy żadnego pracodawcy ani liczby zatrudnionych.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla tego miasta nie ma żadnego.
 * — NIE DOTYKAM historii miasta z lat 1939–1945. Działał tu
 *   obóz i to nie jest tło dla strony o sprzęcie kuchennym.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 19 305 mieszkańców (31.12.2024, GUS), wzrost o 10,2%
 *   od 2002 r.,
 * — osiedle fabryczne sukienników i płócienników założone
 *   w 1821 r. przez Mikołaja Krzywca-Okołowicza na gruntach
 *   wsi Żabice Wielkie; nazwa Konstantynów od 1824 r.; prawa
 *   miejskie 1830 r.,
 * — prawa utracone w XIX w. i przywrócone w 1924 r.,
 * — tramwaj do Łodzi od 1910 r.; linia 43 wróciła 1 lipca
 *   2024 r. po pięcioletniej przerwie,
 * — kościół Narodzenia NMP, neogotycki, 1826–1832; zachowane
 *   domy tkaczy z początku XIX w.,
 * — w mieście działa m.in. duży producent barwników.
 */
export const KONSTANTYNOW_LODZKI: CityContent = {
  slug: "konstantynow-lodzki",
  h1: "Thermomix Konstantynów Łódzki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Konstantynów Łódzki — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Konstantynowie Łódzkim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Konstantynów Łódzki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Konstantynowie Łódzkim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Konstantynowa Łódzkiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Konstantynów Łódzki i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zielona fasolka szarzeje od wody, nie od sprzętu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Konstantynowie Łódzkim – jak wygląda prezentacja?",
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
      id: "kolor",
      heading: "Miasto sukienników, farbiarzy i barwników — czyli o kolorze jedzenia",
      paragraphs: [
        "Konstantynów zaczął się w 1821 roku od osiedla fabrycznego sukienników i płócienników, które Mikołaj Krzywiec-Okołowicz założył na gruntach wsi Żabice Wielkie. Nazwę dostał w 1824, a prawa miejskie dopiero w 1830 roku. Farbiarnie były tu od początku, a dziś w mieście działa duży producent barwników. I jeszcze jedno, co warto powiedzieć, bo o miastach w tej okolicy pisze się zwykle odwrotnie: Konstantynów nie wyludnia się. Od 2002 roku przybyło mu ponad tysiąc sześćset osób.",
        "Skoro barwniki i farbiarnie — napiszę o kolorze jedzenia. To temat, o którym w kuchni myśli się dopiero wtedy, gdy coś wyjdzie szare.",
        "Zacznę od rzeczy najczęściej mylonej. Zielona fasolka, brokuł czy szpinak nie szarzeją od sprzętu ani od pokrywki. Szarzeją od dwóch rzeczy: od zbyt długiego gotowania i od leżenia w wodzie. Im dłużej warzywo siedzi w gorącej wodzie, tym więcej z niego wychodzi, a to, co zostaje, ma kolor spranego zielonego swetra.",
        "I tu jest przewaga Varomy, która nie jest ani magiczna, ani tajemnicza: warzywo gotowane na parze nie leży w wodzie. Nie oddaje jej koloru, bo nie ma dokąd. Zielone zostaje zielone, marchewka pomarańczowa, kalafior biały zamiast żółtawego, a burak nie zabarwia wszystkiego dookoła. Do tego pod Varomą gotuje się jednocześnie coś innego, więc kolor nie kosztuje osobnego garnka.",
        "Zaznaczę wyraźnie, bo tu przebiega granica, której nie przekroczę: mówię o kolorze i o teksturze. Nie napiszę Wam, że gotowanie na parze „zachowuje witaminy” ani nic o wartościach odżywczych. To zdanie powtarza cała branża i ja go nie powtórzę — nie jestem od zdrowia.",
        "Teraz rzecz odwrotna, o której nikt nie uprzedza: to urządzenie potrafi kolor również zepsuć. Zielenina miksowana zbyt długo brązowieje, bo nóż ją miażdży i napowietrza. Pesto, zielony sos, koktajl ze szpinakiem — im dłużej pracuje, tym ciemniejsze. Krótko i patrząc, a nie na czas.",
        "I ostatnie, praktyczne: naturalne barwniki są w kuchni agresywne. Burak, kurkuma, sok z marchwi, koncentrat pomidorowy — potrafią zabarwić silikonową uszczelkę i elementy z tworzywa. Nie zawsze i nie od razu, ale potrafią, i wolę powiedzieć to przed zakupem niż po. Nie psuje to urządzenia ani jedzenia; ślad bywa trwały. Jak o sprzęt dbać, mówi instrukcja producenta i tam odsyłam. O barwnikach spożywczych z torebki nie doradzam w ogóle.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Konstantynowie Łódzkim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Dla porządku przy umawianiu: chodzi o Konstantynów Łódzki w powiecie pabianickim, a nie o inne miejscowości o tej nazwie. Do sąsiednich — Lutomierska, Aleksandrowa, Pabianic — też przyjeżdżam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Konstantynowie Łódzkim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla konstantynowskiej rodziny",
      paragraphs: [
        "Konstantynów Łódzki liczy ponad dziewiętnaście tysięcy mieszkańców i jest jednym z niewielu miast w regionie, które rośnie — od 2002 roku przybyło mu ponad dziesięć procent ludności. Zaczął się w 1821 roku jako osiedle fabryczne sukienników i płócienników założone przez Mikołaja Krzywca-Okołowicza; nazwę nosi od 1824 roku, a prawa miejskie otrzymał w 1830. W dziewiętnastym wieku je stracił i odzyskał dopiero w 1924. Do Łodzi jeździ stąd tramwaj od 1910 roku, a linia 43 wróciła 1 lipca 2024 po pięcioletniej przerwie. Z dawnej osady zostały domy tkaczy z początku dziewiętnastego wieku i neogotycki kościół Narodzenia Najświętszej Maryi Panny z lat 1826–1832.",
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

  districtsHeading: "Do których części Konstantynowa Łódzkiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do starej części z domami tkaczy, do osiedli i do nowej zabudowy jednorodzinnej, której tu z roku na rok przybywa. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Konstantynów Łódzki też przyjadę",
  nearbyParagraphs: [
    "Łódź, Pabianice, Aleksandrów Łódzki, Lutomiersk, Zgierz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łódź", "Pabianice", "Aleksandrów Łódzki", "Zgierz", "Ozorków"],

  about: blokOMnie("do Konstantynowa Łódzkiego", "w Konstantynowie Łódzkim i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Konstantynowa Łódzkiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Konstantynów Łódzki w powiecie pabianickim, a nie o inne miejscowości o nazwie Konstantynów, i nie o Konstancin-Jeziornę.",
    },
    ...faqWspolne("w Konstantynowie Łódzkim"),
    {
      question: "Dlaczego warzywa szarzeją po ugotowaniu?",
      answer:
        "Od dwóch rzeczy: od zbyt długiego gotowania i od leżenia w wodzie — nie od sprzętu ani od pokrywki. Warzywo gotowane na parze nie leży w wodzie, więc nie ma dokąd oddać koloru. Zielone zostaje zielone, kalafior biały zamiast żółtawego. Mówię o kolorze i teksturze, a nie o witaminach — tego zdania nie powtórzę.",
    },
    {
      question: "Czy urządzenie może kolor zepsuć?",
      answer:
        "Może. Zielenina miksowana zbyt długo brązowieje, bo nóż ją miażdży i napowietrza — pesto, zielony sos i koktajl ze szpinakiem robi się krótko i patrząc, a nie na czas.",
    },
    {
      question: "Czy burak albo kurkuma zabarwią urządzenie?",
      answer:
        "Mogą zabarwić silikonową uszczelkę i elementy z tworzywa — nie zawsze i nie od razu, ale potrafią. Nie psuje to sprzętu ani jedzenia, natomiast ślad bywa trwały; wolę uprzedzić przed zakupem. Jak o urządzenie dbać, mówi instrukcja producenta.",
    },
  ],

  geo: { lat: 51.7476, lng: 19.3255 },
};
