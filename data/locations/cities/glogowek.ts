import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * GŁOGÓWEK — miasto w powiecie prudnickim, 5 426 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 498. Prawa miejskie 1275 r.
 * Gmina jest DWUJĘZYCZNA od 2009 r. — urzędowa niemiecka nazwa
 * dodatkowa brzmi OBERGLOGAU, a tablice dwujęzyczne ma
 * 20 MIEJSCOWOŚCI. W spisie 2002 r. narodowość niemiecką
 * zadeklarowało 24,8% mieszkańców gminy.
 *
 * UWAGA — HOMONIMY: GŁOGÓWEK to NIE GŁOGÓW (woj. dolnośląskie,
 * huta miedzi) ani GŁOGÓW MAŁOPOLSKI (podkarpackie). „Kiełbasa
 * głogowska" z Listy Produktów Tradycyjnych pochodzi z Głogowa
 * Małopolskiego, NIE stąd.
 *
 * KĄT: kołocz śląski — ciasto, które piecze się na wesele
 * i na stypę. Miasto z urzędową niemiecką nazwą i najsilniejszą
 * w okolicy ciągłością śląskiej tożsamości jest właściwym
 * miejscem na jedyne w serwisie ciasto objęte unijnym
 * Chronionym Oznaczeniem Geograficznym.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — czym jest ChOG kołocza śląskiego (rejestracja 22 lipca
 *   2011 r.) i że obszar chroniony obejmuje całe województwo
 *   opolskie oraz wskazane powiaty śląskiego,
 * — że urządzenie NIE UPIECZE kołocza — piekarnik zostaje,
 * — że robi za to trzy rzeczy, które przy nim zabierają
 *   najwięcej czasu: kruszonkę, masę serową i masę makową,
 * — i że nie podam „przepisu na kołocz", bo to cudza receptura
 *   z rodzinną historią, a nie moja własność.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEGO PRZEPISU NA KOŁOCZ ani proporcji.
 * — ŻADNYCH TWIERDZEŃ, że domowy jest lepszy od piekarniczego.
 * — ŻADNEGO ROZSTRZYGANIA, jak „powinien" wyglądać prawdziwy
 *   kołocz. Każdy dom ma swój i nie jest moją rolą orzekać.
 * — ŻADNEGO WCHODZENIA W POLITYKĘ PAMIĘCI. Dwujęzyczność
 *   i mniejszość niemiecka są tu faktem administracyjnym
 *   i statystycznym — podaję je jako fakty i nie komentuję.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Produkt chroniony prawem"
 * (Nowy Korczyn) to strona o SAMYM MECHANIZMIE ChOG i o uczciwości
 * w mówieniu o cudzym produkcie — tu tego wywodu NIE powtarzam,
 * tylko wspominam podstawę prawną jednym akapitem. „Pieczenie
 * własnego chleba" (Grudziądz), „czerstwy chleb" (Bodzentyn),
 * „ciasto drożdżowe" (Wołczyn) i „brak piekarnika" (Zdzieszowice)
 * dotyczą innych rzeczy. Tutaj chodzi o JEDNO KONKRETNE CIASTO
 * i o trzy masy, które się do niego robi. „Mak" jako składnik ma
 * własną stronę w innym mieście — tutaj jest tylko wymieniony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Beethoven skomponował w Głogówku IV Symfonię.
 *   Potwierdzony jest jego POBYT u hrabiego Oppersdorffa w 1806 r.
 *   i DEDYKACJA symfonii dla gospodarza. Twierdzenie, że partytura
 *   powstała tutaj, jest lokalną koloryzacją.
 * — NIE PISZĘ, że zamek Oppersdorffów jest udostępniony
 *   do zwiedzania na stałe. Był zamknięty od 2010 r.; w lipcu
 *   2026 r. zorganizowano cztery wejścia z przewodnikiem.
 * — NIE PODAJĘ NAZW FIRM ani liczby zatrudnionych.
 * — NIE PODAJĘ daty pierwszej wzmianki (źródła: 1076, 1212, 1223).
 * — NIE PISZĘ, że w Głogówku jest wpis na Listę Produktów
 *   Tradycyjnych. NIE MA — kołocz jest chroniony inaczej, unijnym
 *   oznaczeniem obejmującym cały region.
 * — districts: w granicach miasta funkcjonują TRZY SOŁECTWA
 *   (Głogowiec, Winiary, Oracze), wcielone do miasta 1 sierpnia
 *   1904 r. To nie są osiedla, tylko sołectwa — i tak są opisane.
 *   districts zostaje PUSTE, bo to nie jest podział na dzielnice.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1275 r.; w latach 1420–1460 stolica księstwa
 *   głogówecko-prudnickiego; klasztor franciszkanów z 1264 r.,
 *   czyli starszy od praw miejskich,
 * — Jan II Kazimierz przebywał na tutejszym zamku od 17 października
 *   do 18 grudnia 1655 r.,
 * — Beethoven przebywał w Głogówku u hr. Franza von Oppersdorffa
 *   w 1806 r.; IV Symfonię, ukończoną tego samego roku,
 *   zadedykował swojemu gospodarzowi; w mieście stoi upamiętniający
 *   to głaz, a co roku odbywa się Śląski Festiwal im. Beethovena,
 * — gmina jest dwujęzyczna od 2009 r., niemiecka nazwa Oberglogau,
 *   20 miejscowości z tablicami,
 * — kołocz śląski ma unijne Chronione Oznaczenie Geograficzne
 *   zarejestrowane 22 lipca 2011 r.; obszar chroniony obejmuje
 *   całe województwo opolskie,
 * — w granicach miasta funkcjonują trzy sołectwa, wcielone
 *   1 sierpnia 1904 r.,
 * — 5 426 mieszkańców miasta, 12 498 gminy (31.12.2024).
 */
export const GLOGOWEK: CityContent = {
  slug: "glogowek",
  h1: "Thermomix Głogówek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Głogówek — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Głogówku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Głogówek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głogówku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Głogówka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Głogówek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kołocza nie upiecze. Ale trzy masy do niego zrobi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głogówku – jak wygląda prezentacja?",
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
      id: "kolocz",
      heading: "Oberglogau — czyli o cieście, które piecze się na wesele i na stypę",
      paragraphs: [
        "Głogówek jest gminą dwujęzyczną od 2009 roku: urzędowa niemiecka nazwa dodatkowa brzmi Oberglogau, a tablice z podwójnymi nazwami stoją przy dwudziestu miejscowościach. W spisie z 2002 roku niemal co czwarty mieszkaniec gminy zadeklarował narodowość niemiecką. To nie jest folklor na pokaz — to po prostu tutejsza ciągłość, która przetrwała dwudziesty wiek.",
        "I dlatego to jest właściwe miejsce na kołocz śląski.",
        "Rzecz, o której warto wiedzieć: kołocz jest chroniony prawem Unii Europejskiej. Chronione Oznaczenie Geograficzne zarejestrowano 22 lipca 2011 roku, a obszar objęty ochroną to całe województwo opolskie i wskazane powiaty śląskiego. Nazwy nie wolno użyć dowolnie — i dobrze, bo to ciasto ma tu konkretne miejsce w życiu, nie tylko na półce.",
        "Kołocz piecze się bowiem na wesele i na stypę. Na te dwie okazje, w których w domu jest najwięcej ludzi i najmniej czasu, a upiec trzeba blachami. Kto się z tym mierzył, ten wie, że problemem nie jest samo ciasto, tylko to, co się na nim kładzie.",
        "I dokładnie tu jest miejsce mojego urządzenia — z bardzo wyraźną granicą.",
        "Nie upiecze. Nie ma piekarnika, blacha idzie do piekarnika i to się nie zmieni.",
        "Robi natomiast trzy rzeczy, które przy kołoczu zabierają najwięcej czasu i najbardziej męczą.",
        "Kruszonkę — w kilkanaście sekund, bez zagniatania palcami i bez tego, że masło rozmięknie za bardzo, zanim skończycie.",
        "Masę serową — twaróg zmiksowany na gładko, bez grudek, bez przeciskania przez sitko, bez maszynki.",
        "Masę makową — mak zmielony i podgrzany z mieszaniem, czyli bez przypalenia na dnie, przy którym przepada cała porcja.",
        "Do tego wyrabia samo ciasto drożdżowe, o czym piszę szerzej przy innym mieście.",
        "Czego tu nie znajdziecie: mojego przepisu na kołocz. Nie podam proporcji i nie będę rozstrzygać, jak ma wyglądać ten prawdziwy. W każdym domu jest inny, a receptury na kołocz to zwykle receptury czyichś matek i babć — nie moja własność i nie moja rola.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głogówku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was piecze się kołocz, powiedzcie to przy umawianiu — zrobimy kruszonkę i masę serową, czyli tę część, która zabiera najwięcej czasu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Głogówku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla głogóweckiej rodziny",
      paragraphs: [
        "Głogówek liczy nieco ponad pięć tysięcy czterysta mieszkańców, a cała gmina blisko dwanaście i pół tysiąca. Prawa miejskie ma od 1275 roku, a w latach 1420–1460 był stolicą księstwa głogówecko-prudnickiego; tutejszy klasztor franciszkanów, z 1264 roku, jest starszy od samych praw miejskich. Miasto ma w swojej historii dwa epizody, jakich nie ma prawie nikt: od 17 października do 18 grudnia 1655 roku mieszkał na tutejszym zamku Jan Kazimierz, a w 1806 przebywał tu Ludwig van Beethoven, gość hrabiego Oppersdorffa — i to właśnie swojemu głogóweckiemu gospodarzowi zadedykował ukończoną w tym samym roku IV Symfonię. W mieście stoi upamiętniający to głaz, a co roku odbywa się Śląski Festiwal imienia Beethovena. Ciekawostka administracyjna: w granicach miasta działają trzy sołectwa, wcielone tu 1 sierpnia 1904 roku.",
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

  districtsHeading: "Do których części Głogówka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z Głogowcem, Winiarami i Oraczami, które leżą w jego granicach, choć formalnie są sołectwami — oraz do pozostałych miejscowości gminy.",
    "Miasto nie ma podziału na osiedla, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Głogówek też przyjadę",
  nearbyParagraphs: [
    "Prudnik, Biała, Kędzierzyn-Koźle, Krapkowice, Głubczyce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Prudnik", "Biała", "Kędzierzyn-Koźle", "Krapkowice", "Głubczyce", "Opole"],

  about: blokOMnie("do Głogówka", "w Głogówku i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głogówka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Głogówek w opolskim, nie o Głogów ani Głogów Małopolski.",
    },
    ...faqWspolne("w Głogówku"),
    {
      question: "Czy Thermomix upiecze kołocz śląski?",
      answer:
        "Nie — nie ma piekarnika, więc blacha i tak do niego wędruje. Robi natomiast trzy rzeczy, które przy kołoczu zabierają najwięcej czasu: kruszonkę w kilkanaście sekund, masę serową bez grudek i masę makową podgrzewaną z mieszaniem, czyli bez przypalenia na dnie.",
    },
    {
      question: "Podasz przepis na kołocz?",
      answer:
        "Nie podam i nie będę rozstrzygać, jak wygląda ten prawdziwy. W każdym domu jest inny, a receptury na kołocz to zwykle receptury czyichś matek i babć. Kołocz śląski ma zresztą unijne Chronione Oznaczenie Geograficzne zarejestrowane w 2011 roku, obejmujące całe województwo opolskie.",
    },
    {
      question: "Czy Beethoven naprawdę tu mieszkał?",
      answer:
        "Przebywał w Głogówku w 1806 roku jako gość hrabiego Oppersdorffa i to jest dobrze udokumentowane — podobnie jak dedykacja IV Symfonii dla gospodarza. Twierdzenie, że napisał ją tutaj, jest już lokalną koloryzacją i nie będę go powtarzać.",
    },
  ],

  geo: { lat: 50.3439, lng: 17.8672 },
};
