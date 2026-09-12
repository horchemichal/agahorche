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
 * WOŁCZYN — miasto w powiecie kluczborskim, 5 300 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 112. Prawa miejskie
 * w STYCZNIU 1261 r., przywilej księcia wrocławskiego HENRYKA III
 * BIAŁEGO, na prawie średzkim; miasto lokowano na surowym korzeniu
 * pod nazwą FÜRSTENTHAL („Książęca Dolina"). Od 1893 r. działa tu
 * FABRYKA DROŻDŻY — dziś należąca do francuskiej grupy.
 *
 * UWAGA — HOMONIM: istnieje WOŁCZYN NA BIAŁORUSI (obwód brzeski),
 * rezydencja Czartoryskich i miejsce urodzenia Stanisława Augusta
 * Poniatowskiego. To ZUPEŁNIE INNA miejscowość — Wołczyn opolski
 * nie ma z królem żadnego związku.
 *
 * KĄT: ciasto drożdżowe — wyrabianie i rozczyn. Miasto, w którym
 * od 1893 r. produkuje się drożdże, jest właściwym miejscem
 * na stronę o tym, co urządzenie w cieście drożdżowym robi
 * naprawdę dobrze — i o tym, czego nie przyspieszy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wyrabianie ciasta to jedna z tych rzeczy, w których
 *   maszyna bije człowieka bezdyskusyjnie: dziesięć minut
 *   ciężkiej pracy rąk zamienia się w kilka minut bez udziału,
 * — że rozczyn i wyrastanie to czas, którego NIC nie skróci,
 * — że urządzenie nie upiecze — piekarnik zostaje,
 * — i że przy dużej ilości mąki naczynie ma swoją granicę.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI TRYBÓW. Nie podaję
 *   też temperatury wyrastania: producent ma to w instrukcji,
 *   a ja nie zgaduję.
 * — ŻADNYCH PROPORCJI ANI PRZEPISÓW NA CIASTO.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o drożdżach.
 * — ŻADNEGO OBIECYWANIA, że urządzenie zastąpi piekarnik.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Pieczenie własnego chleba"
 * (Grudziądz) dotyczy CHLEBA jako całego projektu i rozczarowania
 * po zakupie. „Czerstwy chleb" (Bodzentyn) dotyczy końca życia
 * bochenka. „Brak piekarnika" (Zdzieszowice) to ogólna strona
 * o tym, czego urządzenie nie upiecze. „Czego nie da się
 * przyspieszyć" (miasto browaru) dotyczy warzenia i fermentacji
 * jako procesów przemysłowych. Tutaj chodzi wyłącznie o CIASTO
 * DROŻDŻOWE W DOMU — bułki, drożdżówki, placek, pizzę — i o dwa
 * etapy: wyrabianie i wyrastanie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ NAZWY FABRYKI ani liczby zatrudnionych.
 * — NIE PISZĘ, że wytwarza się tu jedna czwarta krajowej
 *   produkcji drożdży. Ta liczba krąży w sieci i NIE JEST
 *   POTWIERDZONA.
 * — NIE PODAJĘ dziennej daty przywileju z 1261 r. (znany jest
 *   tylko miesiąc).
 * — NIE PISZĘ o skali historycznej tutejszej roszarni lnu —
 *   źródła podają sprzeczne superlatywy.
 * — NIE PISZĘ, że Wołczyn ma dwujęzyczne tablice. NIE MA.
 * — „Miody wołczyńskie" są na Liście Produktów Tradycyjnych
 *   od 11 kwietnia 2014 r. i wspominam o tym neutralnie,
 *   ale NIE robię z miodu kątu — temat miodu należy do innego
 *   miasta w serwisie.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie w styczniu 1261 r., przywilej Henryka III
 *   Białego, prawo średzkie, pierwotna nazwa Fürstenthal,
 *   potem Kunzenstadt od zasadźcy Kunzona Wilrycha, wreszcie
 *   Konstadt; polska nazwa od 1845 r.,
 * — fabryka drożdży działa w Wołczynie od 1893 r.,
 * — działały tu też parowa mleczarnia (1891) i roszarnia lnu
 *   (1894); kolej dotarła w 1868 r.,
 * — „miody wołczyńskie" na Liście Produktów Tradycyjnych
 *   od 11 kwietnia 2014 r.,
 * — prezbiterium tutejszego kościoła przebudował w 1901 r.
 *   Hans Pölzig, jeden z czołowych architektów niemieckiego
 *   modernizmu,
 * — w XVII w. miasto przyjęło uchodźców ariańskich,
 * — 5 300 mieszkańców miasta, 12 112 gminy (31.12.2024).
 */
export const WOLCZYN: CityContent = {
  slug: "wolczyn",
  h1: "Thermomix Wołczyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wołczyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wołczynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wołczyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wołczynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wołczyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Wołczyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wyrobi za Was. Poczekać musicie sami.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wołczynie – jak wygląda prezentacja?",
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
      id: "ciasto-drozdzowe",
      heading: "Miasto, w którym od 1893 roku robi się drożdże",
      paragraphs: [
        "Fabryka drożdży stoi w Wołczynie od 1893 roku — to jedna z niewielu rzeczy w tym mieście, która przetrwała wszystkie zmiany granic i ustrojów bez przerwy. Trudno o lepsze miejsce, żeby napisać o cieście drożdżowym uczciwie: gdzie urządzenie naprawdę pomaga, a gdzie nie pomoże nikt i nic.",
        "Zacznę od tego, co robi bezdyskusyjnie dobrze, bo takich rzeczy nie ma wiele. Wyrabianie ciasta drożdżowego to dziesięć minut ciężkiej pracy rękami — ciasto jest kleiste, opiera się, trzeba je bić o blat, a pod koniec bolą przedramiona. Urządzenie robi to samo w kilka minut i bez Waszego udziału. Wkładacie składniki, zamykacie, odchodzicie. To jest ta jedna czynność, przy której nikt rozsądny nie tęskni za robieniem po staremu.",
        "Do tego drobiazgi, które przy cieście mają znaczenie: podgrzeje mleko dokładnie tyle, ile trzeba, żeby nie zabić drożdży, i zważy mąkę bez wyciągania wagi.",
        "A teraz część, której sprzedawcy nie mówią.",
        "Rozczyn i wyrastanie to jest czas — i tego czasu nie skróci nic. Ciasto drożdżowe potrzebuje swoich kilkudziesięciu minut i to jest właściwość drożdży, nie sprzętu. Urządzenie potrafi utrzymać ciepło w naczyniu, więc ciasto może w nim wyrastać zamiast na kaloryferze, ale samego czekania nie da się kupić za żadne pieniądze. Kto liczy, że drożdżówki będą gotowe w dwadzieścia minut, będzie rozczarowany — i to nie sprzętem, tylko biologią.",
        "Druga rzecz: to urządzenie nie piecze. Wyrobi, pomoże wyrosnąć, ale blachę wstawia się do piekarnika. Piszę o tym szerzej przy innym mieście, ale tutaj powtórzę, bo przy cieście drożdżowym pomyłka jest najczęstsza.",
        "Trzecia, praktyczna: naczynie ma swoją pojemność. Przy dużej ilości mąki — takiej na placek dla całej rodziny albo na dwie blachy bułek — ciasto trzeba wyrobić w dwóch turach. Zmierzymy to na spotkaniu, żebyście wiedzieli, gdzie u Was jest granica.",
        "Nie podam Wam za to proporcji ani przepisu. W każdym domu jest inny, a przepis na ciasto drożdżowe to zwykle przepis czyjejś babci — nie moja własność i nie moja rola, żeby go rozstrzygać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wołczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu piecze się drożdżowe, powiedzcie to przy umawianiu — wyrobimy ciasto na miejscu, żebyście zobaczyli, ile to trwa i jak wygląda po wyjęciu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wołczynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wołczyńskiej rodziny",
      paragraphs: [
        "Wołczyn liczy pięć tysięcy trzysta mieszkańców, a cała gmina ponad dwanaście tysięcy. Prawa miejskie dostał w styczniu 1261 roku od księcia wrocławskiego Henryka III Białego — miasto lokowano na surowym korzeniu przy trakcie z Krakowa przez Kluczbork do Wrocławia, pod nazwą Fürstenthal, czyli Książęca Dolina. Oprócz fabryki drożdży działały tu kiedyś parowa mleczarnia i roszarnia lnu, a kolej dotarła w 1868 roku. Dwie rzeczy nieoczywiste: prezbiterium tutejszego kościoła przebudował w 1901 roku Hans Pölzig, jeden z czołowych architektów niemieckiego modernizmu, a w XVII wieku miasto przyjęło uchodźców ariańskich. „Miody wołczyńskie” są od 2014 roku wpisane na ministerialną Listę Produktów Tradycyjnych.",
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

  districtsHeading: "Do których części Wołczyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — w tym Gierałcic i Ligoty Wołczyńskiej — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Wołczyn też przyjadę",
  nearbyParagraphs: [
    "Kluczbork, Byczyna, Namysłów, Olesno, Opole i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kluczbork", "Byczyna", "Namysłów", "Olesno", "Opole", "Praszka"],

  about: blokOMnie("do Wołczyna", "w Wołczynie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wołczyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Wołczyn w powiecie kluczborskim, nie o Wołczyn na Białorusi.",
    },
    ...faqWspolne("w Wołczynie"),
    {
      question: "Czy Thermomix wyrobi ciasto drożdżowe?",
      answer:
        "Tak i to jest jedna z niewielu czynności, w których maszyna bije człowieka bezdyskusyjnie: dziesięć minut ciężkiej pracy rękami zamienia się w kilka minut bez Waszego udziału. Podgrzeje też mleko tak, żeby nie zabić drożdży, i zważy mąkę.",
    },
    {
      question: "Czy ciasto wyrośnie szybciej?",
      answer:
        "Nie. Rozczyn i wyrastanie to czas, którego nie skróci żadne urządzenie — to właściwość drożdży, nie sprzętu. Ciasto może wyrastać w naczyniu zamiast na kaloryferze, ale samego czekania kupić się nie da.",
    },
    {
      question: "Czy upiekę w nim drożdżówki?",
      answer:
        "Nie — urządzenie nie ma piekarnika. Wyrobi ciasto i pomoże mu wyrosnąć, ale blachę wstawia się do piekarnika. Przy dużej ilości mąki dochodzi jeszcze pojemność naczynia: na placek dla całej rodziny ciasto trzeba wyrobić w dwóch turach.",
    },
  ],

  geo: { lat: 51.0185, lng: 18.0515 },
};
