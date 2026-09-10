import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * ZAGÓRZ — miasto w powiecie sanockim, 4 880 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 599. PRAWA MIEJSKIE DOPIERO
 * OD 1 LUTEGO 1977 r. — Zagórz nigdy wcześniej nie było miastem,
 * wyrosło jako osada kolejowa (linie 1872 i 1884, produkcja wagonów
 * od 1891). Ma barokowy klasztor starszy od siebie o 250 lat.
 *
 * KĄT: goście, którzy przyjeżdżają bez zapowiedzi. Miasto leżące
 * na styku Pogórza i Bieszczadów, przez które ludzie przejeżdżają
 * w drodze gdzie indziej, jest właściwym miejscem na jedyną
 * w serwisie stronę o tym, co postawić na stole, gdy ktoś staje
 * w drzwiach bez uprzedzenia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że sedno nie jest w przepisie, tylko w tym, co się MA w domu,
 * — że pomoc urządzenia polega na skróceniu drogi od „nic nie mam"
 *   do „coś stoi na stole", a nie na efektownym daniu,
 * — że coś ciepłego bije wszystko inne i dlaczego,
 * — i uczciwie: że nie każdy dzień jest na goszczenie i że nie ma
 *   w tym niczego złego.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH KONKRETNYCH RECEPTUR. Ta strona jest o SYTUACJI,
 *   nie o przepisie.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU zapasów i o tym, co „można
 *   trzymać w lodówce na wszelki wypadek" — bezpieczeństwo
 *   żywności to nie moja dziedzina.
 * — ŻADNEGO ROBIENIA Z GOSZCZENIA OBOWIĄZKU. Strona ma zdjąć
 *   presję, a nie ją dołożyć. To jest tu ważniejsze niż sprzedaż.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Duża uroczystość rodzinna
 * w domu" dotyczy wydarzeń PLANOWANYCH z wyprzedzeniem. „Gość,
 * który zostaje na trzy tygodnie" — długiego pobytu. „Prezentacja
 * dla kilku osób naraz" i „wpuszczenie obcej osoby do domu"
 * dotyczą MOJEJ wizyty, nie ich gości. „Wstyd przed pokazaniem
 * własnej kuchni" to bariera przy zakupie. „Co mam w lodówce"
 * jest osobnym modułem serwisu i tu tylko do niego linkuję.
 * Tu chodzi o KONKRETNĄ SYTUACJĘ: ktoś dzwoni domofonem
 * albo staje w drzwiach, a obiad był dwie godziny temu.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — Pożar klasztoru 29 listopada 1772 r. wiąże się z ostrzelaniem
 *   przez artylerię rosyjską konfederatów barskich, którzy się
 *   w nim schronili. Podaję sam fakt pożarów i dat, ale NIE
 *   rozwijam wątku walk — na stronie o sprzęcie AGD byłoby to
 *   użycie dekoracyjne.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ o klasztorze ani „ruina", ani „odbudowany zabytek".
 *   To JEDNOCZEŚNIE jedno i drugie: budynek foresterium został
 *   w całości odbudowany do 2022 r. i działa jako centrum kultury
 *   z wieżą widokową, a SAM KOŚCIÓŁ pozostaje bez dachu. W tekście
 *   jest to rozróżnione,
 * — NIE PISZĘ, że Zagórz to „ważny węzeł kolejowy". Historycznie
 *   był, ale dziś ruch pasażerski jest skromny — sprawdzony rozkład
 *   pokazuje 4 odjazdy dziennie. Piszę o kolei w czasie przeszłym,
 * — NIE UŻYWAM FRAZY „brama w Bieszczady" JAKO FAKTU. Jest żywa
 *   i używana, ale to fraza turystyczna bez pokrycia w liczbach;
 *   do tego istnieje osobny projekt markowy „Brama Bieszczad"
 *   obejmujący kilka gmin, nie tylko Zagórz. Opisuję położenie
 *   miasta własnymi słowami,
 * — NIE PISZĘ, że w Zagórzu działa największa fabryka przyczep
 *   w Polsce. Nazwa „Zasław" wiąże się z dzielnicą miasta, ale
 *   obecna spółka o tej nazwie MA SIEDZIBĘ W ANDRYCHOWIE
 *   (małopolskie). Czy produkcja została tu w jakiejkolwiek
 *   części — nie potwierdzono,
 * — NIE WSKAZUJĘ NAJWIĘKSZEGO PRACODAWCY. Nie ustalono,
 * — NIE PODAJĘ liczby turystów w klasztorze (krąży 50 000 rocznie,
 *   ale z jednego źródła, niepotwierdzone),
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Zagórza nie znaleziono wpisu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1 lutego 1977 r.; wcześniej Zagórz nigdy nie
 *   było miastem,
 * — rozwój dzięki liniom kolejowym z 1872 i 1884 r.; produkcja
 *   wagonów od 1891 r.,
 * — klasztor Karmelitów Bosych budowany 1700–1730, fundator Jan
 *   Franciszek Stadnicki; pożary w 1772 i 1822 r.,
 * — foresterium odbudowane do 2022 r., działa jako centrum kultury
 *   z wieżą widokową; sam kościół pozostaje bez dachu,
 * — oficjalny wykaz 8 osiedli miasta,
 * — 4 880 mieszkańców miasta, 12 599 cała gmina (31.12.2024).
 */
export const ZAGORZ: CityContent = {
  slug: "zagorz",
  h1: "Thermomix Zagórz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zagórz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zagórzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zagórz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zagórzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zagórza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Zagórz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dzwonek. Obiad był dwie godziny temu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zagórzu – jak wygląda prezentacja?",
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
      id: "goscie",
      heading: "Miasto, przez które się przejeżdża — czyli o gościach bez zapowiedzi",
      paragraphs: [
        "Zagórz leży tam, gdzie pogórze przechodzi w Bieszczady, i wiele osób zna to miejsce z przejazdu. To miasto młodsze, niż większość ludzi zakłada — prawa miejskie dostało dopiero pierwszego lutego 1977 roku i nigdy wcześniej miastem nie było. Wyrosło jako osada kolejowa: linie z 1872 i 1884 roku, produkcja wagonów od 1891. Barokowy klasztor Karmelitów, który tu stoi, jest od samego miasta starszy o dwa i pół wieku.",
        "W miejscu, przez które ludzie przejeżdżają, dzieje się rzecz, o której w kuchennych poradnikach prawie się nie pisze: ktoś staje w drzwiach bez zapowiedzi. Rodzina jadąca dalej, znajomi, którzy „byli w okolicy”, ktoś, kto miał zadzwonić i nie zadzwonił. A obiad był dwie godziny temu i w garnku nie ma nic.",
        "Powiem od razu, gdzie naprawdę leży problem, bo to nie jest problem kulinarny. Nie chodzi o to, że nie umiecie nic ugotować. Chodzi o to, że w tym momencie liczy się wyłącznie to, co macie w domu, a nie to, co umiecie. Najlepszy przepis świata jest bezużyteczny, jeśli brakuje trzeciego składnika, a najbliższy sklep jest zamknięty.",
        "Co w tej sytuacji zmienia urządzenie? Rzecz węższą, niż wygląda w reklamie, ale realną: skraca drogę od „nic nie mam” do „coś stoi na stole”. Zupa krem z tego, co jest w lodówce. Sos do makaronu. Ciepłe coś słodkiego. To wszystko powstaje w jednym naczyniu, bez stania nad garnkiem — a stanie nad garnkiem jest akurat tym, czego przy gościach się nie da, bo trzeba z nimi być w pokoju.",
        "I rzecz, którą uważam za ważniejszą niż wszystko powyżej: coś ciepłego bije wszystko inne. Nie musi być wyszukane, nie musi ładnie wyglądać, nie musi być tego dużo. Ciepły talerz postawiony przed kimś, kto właśnie wysiadł z auta, robi więcej niż półmisek przygotowywany przez godzinę, przez którą gospodarz jest w kuchni, a gość sam w salonie.",
        "Na koniec rzecz, której nie usłyszycie na żadnym pokazie sprzętu: nie każdy dzień jest na goszczenie. Bywają dni, kiedy jedyną uczciwą odpowiedzią jest herbata i szczere „nie gotowałam dzisiaj” — i nie ma w tym absolutnie nic złego. Nie zamierzam sprzedawać urządzenia jako lekarstwa na poczucie, że powinno się zawsze mieć coś na stole. Nie powinno się.",
        "Czego nie doradzę: niczego o tym, co „warto trzymać w lodówce na wszelki wypadek” pod kątem trwałości. Przechowywanie żywności to dziedzina bezpieczeństwa, nie moja.",
      ],
      links: [
        { href: "/co-mam-w-lodowce", label: "Co mam w lodówce" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zagórzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was często ktoś wpada bez zapowiedzi, powiedzcie mi to przy umawianiu. Zrobimy wtedy dokładnie taką rzecz — szybką, z tego, co jest — zamiast dania pokazowego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zagórzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zagórskiej rodziny",
      paragraphs: [
        "Zagórz liczy niecałe cztery tysiące dziewięćset mieszkańców, a cała gmina ponad dwanaście i pół tysiąca. Klasztor Karmelitów Bosych, budowany w latach 1700–1730 i dwukrotnie strawiony przez pożar — w 1772 i 1822 roku — jest dziś w dwóch stanach naraz: budynek foresterium został w całości odbudowany i działa jako centrum kultury z wieżą widokową, a sam kościół stoi bez dachu.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym — albo kimś innym — a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których części Zagórza dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich osiedli miasta i do sołectw gminy — Porażu, Czaszyna, Tarnawy, Olchowej, Łukowego, Zahutynia i pozostałych — bez dopłaty za dojazd.",
    "Miasto ma oficjalny wykaz osiedli, więc podaję je poniżej dokładnie tak, jak brzmią.",
  ],
  districts: [
    "Dolina",
    "Leska Góra-Żabnik",
    "Nowy Zagórz",
    "Osiedle Domów Jednorodzinnych",
    "Pod Klasztorem-Skowronówka",
    "Stary Zagórz",
    "Wielopole",
    "Zasław",
  ],

  nearbyHeading: "Poza Zagórz też przyjadę",
  nearbyParagraphs: [
    "Sanok, Lesko, Ustrzyki Dolne, Rymanów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sanok", "Lesko", "Ustrzyki Dolne", "Rymanów", "Brzozów", "Krosno"],

  about: blokOMnie("do Zagórza", "w Zagórzu i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zagórza bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich osiedli miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zagórzu"),
    {
      question: "Często wpadają do nas goście bez zapowiedzi. Czy to urządzenie w tym pomaga?",
      answer:
        "Pomaga, ale węziej, niż mówi reklama. Skraca drogę od „nic nie mam” do „coś ciepłego stoi na stole”: zupa krem z tego, co jest w lodówce, sos do makaronu, ciepły deser — wszystko w jednym naczyniu i bez stania nad garnkiem, czyli bez znikania z pokoju na pół godziny. Nie rozwiąże natomiast sytuacji, w której w domu naprawdę nic nie ma — tu decyduje zawartość lodówki, nie sprzęt.",
    },
    {
      question: "Co postawić na stole, gdy ktoś przyjdzie niespodziewanie?",
      answer:
        "Cokolwiek ciepłego. Naprawdę — ciepły talerz robi więcej niż wystawny półmisek, przy którym gospodarz siedzi godzinę w kuchni, a gość sam w salonie. I dodam rzecz, której nie usłyszycie na pokazie sprzętu: nie każdy dzień jest na goszczenie. Czasem uczciwą odpowiedzią jest herbata i „nie gotowałam dzisiaj”, i nie ma w tym nic złego.",
    },
  ],

  geo: { lat: 49.5108, lng: 22.2703 },
};
