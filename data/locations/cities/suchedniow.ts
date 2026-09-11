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
 * SUCHEDNIÓW — miasto w powiecie skarżyskim, 7 400 mieszkańców
 * (31.12.2024, GUS), spadek o 18,6% od 2002 r. Prawa miejskie
 * PO RAZ PIERWSZY w 1962 r. — wcześniej Suchedniów nigdy nie było
 * miastem. Leży w Suchedniowsko-Oblęgorskim Parku Krajobrazowym.
 *
 * KĄT: orzechy. Jedyne miejsce w serwisie, gdzie ten surowiec jest
 * tematem. Miasto leżące w parku krajobrazowym, z działającymi
 * tartakami, jest dobrym miejscem na składnik, który przychodzi
 * w łupinie i wymaga rozdrobnienia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że mielenie orzechów to jedna z rzeczy, w których różnica jest
 *   od razu widoczna: od grubej posypki po mąkę orzechową,
 * — że masło orzechowe robi się tu naprawdę i bez dodatków,
 * — że urządzenie NIE UPRAŻY orzechów — a prażenie zmienia smak
 *   bardziej niż cokolwiek innego, więc to jest realne ograniczenie,
 * — że nie wyłuska ich z łupiny,
 * — i uczciwie: przy garści orzechów do ciasta nóż jest szybszy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI OBROTÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (tłuszcze, białko, „zdrowa
 *   przekąska"). Orzechy są drugą po koktajlach kategorią obrośniętą
 *   poradnictwem żywieniowym i dlatego zakaz stoi tu wprost.
 * — ANI SŁOWA O ALERGIACH. To jest dziedzina medyczna i najostrzejsza
 *   granica na tej stronie. Nie doradzam, nie uspokajam, nie
 *   sugeruję nic o zanieczyszczeniach krzyżowych w naczyniu —
 *   to pytanie do lekarza, nie do przedstawicielki handlowej.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU orzechów i masła orzechowego
 *   (jełczenie, trwałość) — bezpieczeństwo żywności to nie moja
 *   dziedzina.
 * — ŻADNEJ KRYTYKI masła orzechowego ze sklepu ani producentów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mąka i mielenie" (miasto
 * z młynem) dotyczy ZBOŻA. „Kasza" (Dukla) — ziarna gotowanego.
 * „Mak" — nadzienia do wypieków. „Mielenie mięsa" (Modliborzyce) —
 * innego surowca i innego problemu (wielkość partii). Tutaj chodzi
 * o surowiec TŁUSTY, który przy dłuższym mieleniu zmienia stan
 * skupienia — i to jest cecha, której żaden z tamtych nie ma.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — MICHNIÓW, sołectwo gminy Suchedniów — miejsce pacyfikacji
 *   z 1943 r. i Mauzoleum Martyrologii Wsi Polskich. Fakt
 *   sprawdzony i ważny. NIE UŻYWAM GO — to nie jest ozdobnik
 *   do strony o sprzęcie AGD. Wspominam Michniów WYŁĄCZNIE jako
 *   nazwę miejscowości w zasięgu dojazdu, bez żadnego kontekstu.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że Suchedniów leży w Świętokrzyskim Parku Narodowym
 *   ani w jego otulinie. Sprawdzone: leży w SUCHEDNIOWSKO-
 *   -OBLĘGORSKIM PARKU KRAJOBRAZOWYM. To co innego,
 * — NIE PISZĘ O TRADYCJI ODLEWNICZEJ W CZASIE TERAŹNIEJSZYM.
 *   Suchedniowska Fabryka Odlewów Ludwika Starke działała w latach
 *   1895–1939 i DZIŚ NIE ISTNIEJE. To dziedzictwo, nie biznes,
 * — NIE PISZĘ, że miasto jest sypialnią Skarżyska-Kamiennej ani
 *   Kielc. Brak jakichkolwiek danych o dojazdach do pracy. To była
 *   hipoteza i została odrzucona przez brak dowodów,
 * — NIE PODAJĘ dziennej daty nadania praw miejskich w 1962 r. —
 *   nie ustalono. Podaję tylko rok i to, że było to PIERWSZE
 *   nadanie, nie odzyskanie,
 * — NIE PODAJĘ nazwy zakładu prefabrykacji betonowej otwartego
 *   w październiku 2023 r. Piszę o nim opisowo — nie reklamuję
 *   cudzych działalności,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Suchedniowa nic nie znaleziono,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie po raz pierwszy w 1962 r.; wcześniej Suchedniów
 *   nie był miastem,
 * — Suchedniowska Fabryka Odlewów Ludwika Starke działała
 *   w latach 1895–1939,
 * — miasto leży w Suchedniowsko-Oblęgorskim Parku Krajobrazowym,
 * — działają tu tartaki; w październiku 2023 r. uruchomiono zakład
 *   prefabrykacji betonowej,
 * — 7 400 mieszkańców (31.12.2024), spadek o 18,6% od 2002 r.
 */
export const SUCHEDNIOW: CityContent = {
  slug: "suchedniow",
  h1: "Thermomix Suchedniów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Suchedniów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Suchedniowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Suchedniów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Suchedniowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Suchedniowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Suchedniów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zmieli na mąkę. Nie upraży. To jest cała prawda.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Suchedniowie – jak wygląda prezentacja?",
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
      id: "orzechy",
      heading: "Miasto w parku krajobrazowym — czyli o orzechach",
      paragraphs: [
        "Suchedniów jest miastem od 1962 roku i wcześniej miastem nigdy nie był. Leży w Suchedniowsko-Oblęgorskim Parku Krajobrazowym — nie w Świętokrzyskim Parku Narodowym, co bywa mylone. Fabryka odlewów, która działała tu od 1895 do 1939 roku, dawno nie istnieje; dziś pracują tartaki, a w październiku 2023 roku ruszył zakład prefabrykacji betonowej.",
        "Napiszę tu o składniku, którego nie ma nigdzie indziej w tym serwisie: o orzechach.",
        "To jedna z tych rzeczy, w których różnicę widać od pierwszego użycia, i to z konkretnego powodu: orzechy można zmielić na kilka zupełnie różnych sposobów, a ręcznie da się właściwie tylko na jeden. Grubo posiekane na wierzch ciasta. Drobniej, do masy. Jeszcze drobniej — i robi się mąka orzechowa, której w sklepie trzeba szukać i która kosztuje swoje. To wszystko jest kwestią tego, jak długo trzymacie palec na przycisku.",
        "A jeśli mielić dalej, dzieje się rzecz, która ludzi zwykle zaskakuje: orzechy zmieniają stan skupienia. Z proszku robi się gęsta, lejąca masa — masło orzechowe, bez cukru, bez oleju palmowego, bez niczego, bo z samych orzechów. To jest ta jedna rzecz z tej strony, którą warto zobaczyć na żywo, bo opisana brzmi jak reklama, a na miejscu jest po prostu oczywista.",
        "Teraz granice, bo są dwie i obie twarde. Pierwsza: urządzenie nie upraży orzechów. A prażenie zmienia ich smak bardziej niż cokolwiek innego — surowy migdał i uprażony migdał to praktycznie dwa różne składniki. Kto chce tego drugiego, musi wziąć patelnię albo piekarnik, i nie ma od tego odstępstwa.",
        "Druga: nie wyłuska ich z łupiny. Orzechy włoskie i laskowe trzeba rozłupać samemu, tak jak zawsze.",
        "I skala: przy garści orzechów na wierzch ciasta nóż i deska są szybsze, bo nie ma czego myć. Sens zaczyna się przy większej ilości albo wtedy, gdy chcecie stopnia rozdrobnienia, którego ręcznie po prostu nie osiągniecie.",
        "Dwie rzeczy, o których nie powiem ani słowa. Nic o zdrowiu — orzechy są obrośnięte poradnictwem żywieniowym prawie tak gęsto jak koktajle, a ja sprzedaję sprzęt kuchenny. I nic o alergiach: ani czy coś jest bezpieczne, ani jak umyć naczynie, ani jak uniknąć kontaktu. To jest pytanie do lekarza i nie zamierzam się w nim wypowiadać nawet uspokajająco.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Suchedniowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć masło orzechowe, powiedzcie przy umawianiu — przywiozę orzechy. To trwa kilka minut i jest to rzecz, którą trzeba zobaczyć, a nie przeczytać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Suchedniowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla suchedniowskiej rodziny",
      paragraphs: [
        "Suchedniów liczy około siedmiu tysięcy czterystu mieszkańców i od dwóch dekad wyraźnie ich ubywa — od 2002 roku spadek sięgnął blisko jednej piątej. Prawa miejskie miasto dostało w 1962 roku, po raz pierwszy w swojej historii.",
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

  districtsHeading: "Do których części Suchedniowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Michniowa, Ostojowa, Mostków i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Suchedniów też przyjadę",
  nearbyParagraphs: [
    "Skarżysko-Kamienna, Kielce, Bodzentyn, Zagnańsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Skarżysko-Kamienna", "Kielce", "Bodzentyn", "Starachowice", "Stąporków", "Końskie"],

  about: blokOMnie("do Suchedniowa", "w Suchedniowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Suchedniowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Suchedniowie"),
    {
      question: "Czy zrobię w tym masło orzechowe?",
      answer:
        "Tak i to jest jedna z niewielu rzeczy, które naprawdę warto zobaczyć na żywo. Przy dłuższym mieleniu orzechy zmieniają stan skupienia — z proszku robi się gęsta masa, z samych orzechów, bez cukru i bez dodatków. Po drodze możecie się zatrzymać na dowolnym stopniu rozdrobnienia, aż po mąkę orzechową.",
    },
    {
      question: "Czy upraży orzechy?",
      answer:
        "Nie. Urządzenie nie rumieni i nie praży — a prażenie zmienia smak orzechów bardziej niż cokolwiek innego, więc to jest realne ograniczenie, nie drobiazg. Zostaje patelnia albo piekarnik. Nie wyłuska ich też z łupiny.",
    },
  ],

  geo: { lat: 51.0472, lng: 20.8231 },
};
