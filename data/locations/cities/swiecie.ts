import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * ŚWIECIE — miasto u ujścia Wdy do Wisły, z dużą papiernią; jedno
 * z miejsc, w których papier jest wyrobem, a nie oczywistością.
 *
 * KĄT: instrukcja, której nikt nie czyta. Miasto papieru jest jedynym
 * właściwym miejscem na sekcję o tym, CZEGO LUDZIE NIE WIEDZĄ O WŁASNYM
 * URZĄDZENIU PO ROKU UŻYWANIA — bo dokumentacja poszła do szuflady
 * pierwszego dnia i nikt do niej nie wrócił.
 *
 * SEKCJA MA BYĆ LISTĄ KONKRETÓW, a nie wyrzutem. Rzeczy, które wracają
 * do mnie najczęściej w rozmowach po roku: nieużywana waga do
 * dosypywania w trakcie, brak wiedzy o możliwości zapisania własnych
 * ustawień, mycie na pełnych obrotach zamiast programem, nieużywanie
 * funkcji podgrzewania do stałej temperatury i nieznajomość tego,
 * że kolejność wkładania składników ma znaczenie.
 *
 * TON: to nie jest pretensja do klientek, tylko przyznanie, że TO JEST
 * BŁĄD SPRZEDAŻY — moja robota kończy się nie w dniu dostawy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Świeciu działa duża papiernia, a miasto leży u ujścia Wdy do Wisły.
 *
 * CZEGO NIE MA: nazw firm, opisu procesu produkcji, danych o zakładzie.
 */
export const SWIECIE: CityContent = {
  slug: "swiecie",
  h1: "Thermomix Świecie – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Świecie — prezentacja i cena",
  seoDescription:
    "Thermomix w Świeciu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Świecie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Świeciu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Świecia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Świecie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Świeciu – jak wygląda prezentacja?",
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
      id: "czego-nie-wiecie-po-roku",
      heading: "Miasto papieru — i instrukcja, która poszła do szuflady",
      paragraphs: [
        "W Świeciu robi się papier, a papier ma tę właściwość, że wszyscy go używają i nikt się nad nim nie zastanawia. Dokładnie tak samo dzieje się z dokumentacją dołączoną do urządzenia: idzie do szuflady pierwszego dnia i nikt do niej nie wraca.",
        "Piszę o tym, bo z rozmów po roku wynika, że większość osób używa może połowy tego, co ma — i uważam, że to jest błąd sprzedaży, a nie klientek. Skoro moja robota nie kończy się w dniu dostawy, to wypada spisać, o co ludzie pytają po roku, i podać to od razu.",
        "Rzecz pierwsza, najczęstsza: waga działa także w trakcie gotowania. Można dosypywać do naczynia, które już pracuje, i patrzeć, ile weszło — bez wyjmowania, bez osobnej miski. Bardzo wiele osób odmierza obok w miseczkach, tak jak przy zwykłym garnku, i myje potem trzy naczynia zamiast jednego.",
        "Rzecz druga: własne ustawienia i własne przepisy da się zapisać. Ulubione danie, robione co tydzień, nie musi być za każdym razem szukane od nowa.",
        "Rzecz trzecia: mycie ma swój sposób i nie polega na włączeniu pełnych obrotów. Woda z kroplą płynu i krótki cykl załatwiają dziewięć przypadków na dziesięć — a rozpędzanie do maksimum z wodą kończy się tym, że pół kuchni jest mokre.",
        "Rzecz czwarta, moim zdaniem najbardziej niedoceniana: podgrzewanie do stałej, niskiej temperatury i trzymanie jej. To jest funkcja, o której mało kto pamięta, a robi różnicę wszędzie tam, gdzie coś nie może się zagotować — przy mleku, kremach, masach, roztapianiu czekolady.",
        "I rzecz piąta: kolejność wkładania składników ma znaczenie. Twarde na dół, delikatne na wierzch, tłuszcz zwykle na końcu. To brzmi jak drobiazg, dopóki nie zobaczy się różnicy w tym samym daniu zrobionym dwa razy.",
        "Jeśli macie już to urządzenie i któraś z tych rzeczy jest dla Was nowa — zadzwońcie. Nie musicie u mnie niczego kupować, żeby o coś zapytać.",
      ],
      links: [{ href: "/thermomix/funkcje", label: "Funkcje TM7 po kolei" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Świeciu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Świeciu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla świeckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Świecie",
    "Przechowo",
    "Marianki",
    "Głogówko Królewskie",
    "Sulnowo",
    "Terespol Pomorski",
    "Gruczno",
    "Wiąg",
    "Dworzysko",
    "Czaple",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Chełmno, Nowe, Koronowo i Tuchola są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chełmno", "Nowe", "Koronowo", "Tuchola", "Grudziądz"],

  about: blokOMnie("do Świecia", "w gminie Świecie i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Świecia bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Świeciu"),
    {
      question: "Mam już Thermomix od roku. Czego pewnie nie wiem?",
      answer:
        "Najczęściej pięciu rzeczy: że waga działa też w trakcie gotowania i można dosypywać wprost do naczynia; że własne przepisy i ustawienia da się zapisać; że mycie ma swój krótki cykl i nie polega na pełnych obrotach; że jest podgrzewanie do stałej, niskiej temperatury; i że kolejność wkładania składników ma znaczenie — twarde na dół, delikatne na wierzch.",
    },
    {
      question: "Kupiłam u kogoś innego. Mogę zapytać Cię o obsługę?",
      answer:
        "Możesz i nie musisz niczego u mnie kupować, żeby zadzwonić. Uważam, że to, że ludzie używają połowy możliwości swojego sprzętu, jest błędem sprzedaży, a nie ich winą — a moja robota nie kończy się w dniu dostawy.",
    },
  ],

  geo: { lat: 53.4103, lng: 18.4472 },
};
