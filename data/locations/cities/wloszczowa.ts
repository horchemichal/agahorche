import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * WŁOSZCZOWA — miasto w powiecie włoszczowskim, 9 467 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie 21 lipca 1539 r. od Zygmunta I
 * Starego, za sprawą Hieronima Szafrańca. DWA PEŁNE CYKLE utraty
 * i odzyskania praw: utrata po insurekcji kościuszkowskiej
 * (po 1794 r.) i odzyskanie w 1815 r., potem ponowna utrata
 * w 1869 r. i ponowne odzyskanie w 1915 r. To rzadkie — większość
 * miasteczek regionu ma najwyżej jeden taki cykl.
 *
 * KĄT: sernik i masy na ciasto — czyli gdzie kończy się urządzenie,
 * a zaczyna piekarnik. Miasto, w którym jeden zakład wyrósł
 * od 1988 r. z jednoosobowego warsztatu do ponad dwóch tysięcy
 * czterystu zatrudnionych, jest dobrym miejscem na rzecz, w której
 * widać różnicę między przygotowaniem a wykonaniem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że masa serowa z tego urządzenia jest wyraźnie gładsza
 *   i jednolita — nie ma grudek, nie ma nieprzetartego twarogu,
 * — że to samo dotyczy mas ucieranych i kremów do przełożenia,
 * — że PIECZENIE zostaje po stronie piekarnika i że pękanie
 *   sernika jest sprawą pieczenia, NIE masy,
 * — i uczciwie: jeśli ktoś piecze sernik dwa razy w roku, to nie
 *   jest powód do zakupu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI PROPORCJI.
 * — ŻADNEJ RECEPTURY na sernik. Każdy dom ma swoją i nie moja rzecz
 *   ją zastępować.
 * — ŻADNYCH PORAD O SUROWYCH JAJKACH — odmowa postawiona wprost
 *   przy Dynowie.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (twaróg, cukier, tłuszcz).
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ciast z nabiałem — to dziedzina
 *   bezpieczeństwa żywności.
 * — ŻADNEJ KRYTYKI twarogów sklepowych ani producentów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Beza / ubijanie piany"
 * (Ostrów Lubelski) dotyczy NAPOWIETRZANIA BIAŁKA. „Sosy, które się
 * warzą" (Sędziszów Małopolski) dotyczy EMULSJI podgrzewanych
 * na miejscu. „Ciasto naleśnikowe" (Cieszanów) to ciasto LANE
 * i tam osią jest patelnia. „Mak" i „chleb" to inne wypieki i inne
 * miasta. Tutaj chodzi o MASĘ, która powstaje na zimno, a potem
 * idzie do piekarnika — i o granicę między tymi dwoma etapami.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że przez Włoszczowę jeździ Pendolino. TO JUŻ
 *   NIEPRAWDA. PKP Intercity wycofało zatrzymania Pendolino
 *   na stacji Włoszczowa Północ od 15 grudnia 2024 r. z powodu
 *   niskiej frekwencji (średnio siedmiu pasażerów na kurs).
 *   To jest dokładnie ten typ „faktu z internetu", który zestarzał
 *   się półtora roku temu, a wciąż krąży. W tekście podaję stan
 *   po zmianie: dwadzieścia pięć par pociągów dziennie,
 * — NIE POWTARZAM LEGENDY, że stację zbudowano z powodu obietnic
 *   wyborczych. To anegdota bez potwierdzenia,
 * — NIE ROZSTRZYGAM roku drugiej utraty praw miejskich. Oficjalna
 *   strona gminy podaje 1869, inne źródło 1870. W tekście piszę
 *   „po powstaniu styczniowym",
 * — NIE PODAJĘ liczby zatrudnionych w ZPUE jako danych bieżących.
 *   Liczba „ponad 2 400 w grupie kapitałowej" pochodzi z lat
 *   2017–2021 i nowszej nie znalazłem — w tekście zaznaczam,
 *   że to rząd wielkości, nie stan na dziś,
 * — NIE PISZĘ o żadnym dużym zakładzie drzewnym ani metalowym poza
 *   ZPUE. Sprawdzone: są tylko małe, lokalne tartaki,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla powiatu włoszczowskiego nic nie potwierdzono,
 * — NIE wymyślam osiedli. Brak wykazu dla samego miasta; gmina ma
 *   sołectwa. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 21 lipca 1539 r. (Zygmunt I Stary, Hieronim
 *   Szafraniec); utrata po 1794 r., odzyskanie 1815 r., ponowna
 *   utrata po powstaniu styczniowym, ponowne odzyskanie 1915 r.,
 * — stacja Włoszczowa Północ otwarta w 2006 r. na Centralnej
 *   Magistrali Kolejowej, ok. 1,5 km od rynku; od 15 grudnia 2024 r.
 *   bez zatrzymań Pendolino; dwadzieścia pięć par pociągów dziennie,
 * — ZPUE S.A. założone w 1988 r. jako jednoosobowy zakład
 *   instalatorstwa elektrycznego, dziś spółka giełdowa; rząd
 *   wielkości zatrudnienia w grupie: ponad dwa tysiące czterysta osób,
 * — rynek (Plac Wolności) odrestaurowany w 2020 r.,
 * — 9 467 mieszkańców (31.12.2024).
 */
export const WLOSZCZOWA: CityContent = {
  slug: "wloszczowa",
  h1: "Thermomix Włoszczowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Włoszczowa — przedstawiciel i cena",
  seoDescription:
    "Thermomix we Włoszczowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Włoszczowa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Włoszczowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Włoszczowy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Włoszczowa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Masa — moja. Pieczenie — piekarnika. Pęknięcie — też jego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Włoszczowie – jak wygląda prezentacja?",
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
      id: "sernik",
      heading: "Miasto, które dwa razy przestało być miastem — czyli o serniku i o piekarniku",
      paragraphs: [
        "Włoszczowa dostała prawa miejskie dwudziestego pierwszego lipca 1539 roku i straciła je dwa razy: pierwszy po insurekcji kościuszkowskiej, drugi po powstaniu styczniowym. Odzyskiwała je w 1815 i w 1915 roku. Dwa pełne cykle to w tym regionie rzadkość — większość miasteczek ma najwyżej jeden. A w 1988 roku powstał tu jednoosobowy zakład instalatorstwa elektrycznego, z którego wyrosła spółka giełdowa zatrudniająca w grupie rzędu dwóch i pół tysiąca osób — w mieście liczącym niecałe dziewięć i pół tysiąca mieszkańców.",
        "Napiszę tu o rzeczy, w której najwyraźniej widać granicę między przygotowaniem a wykonaniem: o serniku.",
        "Masa serowa to jedno z tych zastosowań, przy których urządzenie robi realną i od razu widoczną różnicę. Twaróg zostaje przetarty do końca — bez grudek, bez nieprzetartych kawałków, bez tego, że na dole miski zostaje coś, czego mikser nie dosięgnął. Wszystko idzie w jednym naczyniu i w jednej konsystencji. To samo dotyczy mas ucieranych na babkę i kremów do przełożenia tortu.",
        "Kto ucierał sernik ręcznie albo mikserem, ten wie, ile to trwa i jak łatwo zostawić grudkę, która potem wyjdzie na przekroju. Tu ten problem znika.",
        "A teraz granica, i jest ostra: pieczenie zostaje po stronie piekarnika. Urządzenie przygotuje masę i na tym jego rola się kończy. Nie upiecze, nie przypilnuje, nie wystudzi.",
        "Z tego wynika rzecz, którą warto wiedzieć, zanim ktoś obwini sprzęt: pękanie sernika jest sprawą pieczenia i studzenia, a nie masy. Za szybkie nagrzanie, za gwałtowne wyjęcie, przeciąg — to wszystko dzieje się w piekarniku i po nim. Żadne urządzenie do przygotowania masy tego nie naprawi i nie spotkacie mnie twierdzącej inaczej.",
        "I skala: kto piecze sernik dwa razy w roku, na święta, nie kupi dla niego sprzętu tej klasy. Sens pojawia się, gdy ciasta są u Was co tydzień albo gdy pieczecie dużo naraz.",
        "Czego nie doradzę: receptury na sernik — każdy dom ma swoją; niczego o surowych jajkach; i niczego o przechowywaniu ciast z nabiałem. To ostatnie to dziedzina bezpieczeństwa żywności, nie moja.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Włoszczowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczecie regularnie, powiedzcie to przy umawianiu. Zrobimy masę — to trwa moment, a różnicę widać w misce, jeszcze zanim cokolwiek trafi do piekarnika.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Włoszczowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla włoszczowskiej rodziny",
      paragraphs: [
        "Włoszczowa liczy blisko dziewięć i pół tysiąca mieszkańców. Stacja Włoszczowa Północ, otwarta w 2006 roku na Centralnej Magistrali Kolejowej półtora kilometra od rynku, obsługuje dziś dwadzieścia pięć par pociągów dziennie — choć Pendolino przestało się tu zatrzymywać w grudniu 2024 roku, o czym internet wciąż nie wie. Rynek, czyli Plac Wolności, odrestaurowano w 2020 roku.",
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

  districtsHeading: "Do których części Włoszczowy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Włoszczowę też przyjadę",
  nearbyParagraphs: [
    "Jędrzejów, Koniecpol, Szczekociny, Kielce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jędrzejów", "Koniecpol", "Szczekociny", "Kielce", "Sędziszów", "Małogoszcz"],

  about: blokOMnie("do Włoszczowy", "we Włoszczowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Włoszczowy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Włoszczowie"),
    {
      question: "Czy to urządzenie upiecze sernik?",
      answer:
        "Nie — przygotuje masę, i to jest jego cała rola. Masa wychodzi za to wyraźnie gładsza niż z miksera: twaróg zostaje przetarty do końca, bez grudek i bez nieprzetartych kawałków. Pieczenie, pilnowanie i studzenie zostają po stronie piekarnika.",
    },
    {
      question: "Dlaczego sernik mi pęka?",
      answer:
        "To jest sprawa pieczenia i studzenia, nie masy — za szybkie nagrzanie, gwałtowne wyjęcie, przeciąg. Żadne urządzenie do przygotowania masy tego nie naprawi i nie będę twierdzić inaczej. Jeśli natomiast na przekroju widać grudki twarogu, to akurat jest problem masy i tu sprzęt pomaga.",
    },
  ],

  geo: { lat: 50.8531, lng: 19.9656 },
};
