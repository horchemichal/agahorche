import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * KOCK — miasto w powiecie lubartowskim, 2 860 mieszkańców
 * (31.12.2024, GUS), spadek o 19,4% od 2002 r. Prawa miejskie
 * nadał Władysław Jagiełło w 1417 r., a przywilej ustanawiał
 * dwa jarmarki i COTYGODNIOWY TARG SOBOTNI.
 *
 * KĄT: najpierw zakupy, potem przepis — odwrócona kolejność.
 * Miasto, którego akt lokacyjny mówi wprost o dniu targowym,
 * jest właściwym miejscem na pytanie, od czego się w ogóle
 * zaczyna obiad: od przepisu czy od tego, co się przyniosło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że większość poradników zakłada kolejność „wybieram przepis,
 *   robię listę, kupuję" — a bardzo wielu ludzi ma odwrotnie,
 * — że w odwróconej kolejności najtrudniejszy jest MOMENT DECYZJI:
 *   stoisz nad tym, co przywiozłaś, i nie wiesz, co z tego zrobić,
 * — że urządzenie w tej kolejności pomaga inaczej niż się reklamuje:
 *   nie tym, że „ma tysiąc przepisów", tylko tym, że pozwala
 *   ugotować coś z jednego naczynia bez planu z wczoraj,
 * — i uczciwie: że to NIE jest tańszy sposób gotowania. Kupowanie
 *   bez listy bywa droższe i nie będę twierdzić inaczej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I PSUCIU SIĘ ŻYWNOŚCI — to jest
 *   dziedzina bezpieczeństwa żywności, nie moja.
 * — ŻADNYCH TWIERDZEŃ, ILE KTOŚ ZAOSZCZĘDZI. Nie mam na to danych.
 * — ŻADNEJ KRYTYKI ludzi, którzy planują tydzień z góry. Strona
 *   ma opisać drugą kolejność, a nie wyśmiać pierwszą.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Planowanie tygodnia" (miasto
 * rozkładów jazdy) to DOKŁADNIE ODWROTNA sytuacja i tam została
 * opisana. „Małe zakupy, częściej" (Opole) dotyczy CZĘSTOTLIWOŚCI,
 * nie kolejności. „Co się zmienia na liście zakupów po takim
 * zakupie" dotyczy zmiany PO zakupie urządzenia. „Zakupy z dowozem"
 * dotyczą kanału, nie momentu decyzji. „Co mam w lodówce" jest
 * osobnym modułem serwisu i tu do niego tylko linkuję.
 *
 * ŚWIADOME POMINIĘCIA — ODNOTOWANE, NIEUŻYTE:
 * — BITWA POD KOCKIEM (2–6 października 1939, gen. Kleeberg,
 *   ostatnia bitwa kampanii wrześniowej). Fakt sprawdzony i pewny.
 *   NIE UŻYWAM GO. To nie jest ozdobnik do strony o sprzęcie AGD,
 *   a każde zdanie w tym tekście byłoby użyciem dekoracyjnym.
 * — CADYKOWIE Z KOCKA i dynastia chasydzka od 1829 r. (Menachem
 *   Mendel Morgenstern), a także Zagłada społeczności żydowskiej
 *   miasta. Fakty sprawdzone. NIE UŻYWAM ICH z tego samego powodu.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję roku utraty ani odzyskania praw miejskich. Utrata:
 *   źródła mówią ogólnie „po powstaniu styczniowym", bez roku.
 *   Odzyskanie: strona gminy i shtetlroutes podają 1919, angielska
 *   Wikipedia 1915. Rozbieżności nie rozstrzygnąłem, więc podaję
 *   tylko datę pewną — 1417,
 * — NIE piszę, że Kock leży nad Wieprzem. Strona gminy tak pisze,
 *   ale inne źródło lokalizuje miasto „kilka km na północ od
 *   Wieprza", a oferta inwestycyjna mówi o dolinie Wieprza
 *   I Tyśmienicy. Której rzeki dotyczy samo miasto — nie ustalone,
 * — NIE nazywam pałacu atrakcją turystyczną. Mieści się w nim
 *   DOM POMOCY SPOŁECZNEJ i tak jest w tekście napisane,
 * — NIE podaję żadnego produktu z Listy Produktów Tradycyjnych.
 *   Sprawdzone: dla Kocka i gminy Kock NIE MA ANI JEDNEGO wpisu,
 * — NIE piszę o żadnym czynnym zakładzie rolno-spożywczym.
 *   Sprawdzone: nie ma potwierdzenia dla mleczarni, chmielu ani
 *   przetwórni. Gminna oferta inwestycyjna wymienia branżę
 *   rolno-spożywczą jako POŻĄDANY KIERUNEK dla inwestorów,
 *   czyli czegoś, czego jeszcze nie ma,
 * — NIE wymyślam osiedli. Gmina publikuje wykaz SOŁECTW (są wśród
 *   nich Kock Wschód, Kock Zachód i Kock Kolonia), ale to jednostki
 *   pomocnicze gminy, a nie dzielnice miasta. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1417 r., Władysław Jagiełło; przywilej
 *   ustanawiał dwa jarmarki i cotygodniowy targ sobotni,
 * — Anna Jabłonowska nabyła Kock w 1753 r. i przebudowała układ
 *   miasta: wytyczyła nowy rynek i wychodzące z niego ulice,
 * — pałac wzniesiony wg projektu Szymona Bogumiła Zuga; kościół
 *   parafialny 1779–1782, fasadą zwrócony na rynek; park
 *   z ok. 590 gatunkami roślin,
 * — w pałacu mieści się dziś Dom Pomocy Społecznej,
 * — w czerwcu 2026 zakończono prace konserwatorskie elewacji
 *   i galerii zespołu pałacowo-parkowego,
 * — 2 860 mieszkańców (31.12.2024), 26,7% w wieku 65+.
 */
export const KOCK: CityContent = {
  slug: "kock",
  h1: "Thermomix Kock – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kock — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kocku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kock — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kocku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kocka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Kock i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czasem najpierw jest torba z zakupami, a dopiero potem pomysł.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kocku – jak wygląda prezentacja?",
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
      id: "kolejnosc",
      heading: "Miasto z targiem w akcie lokacyjnym — czyli o odwróconej kolejności",
      paragraphs: [
        "Kock dostał prawa miejskie w 1417 roku od Władysława Jagiełły, a przywilej wymieniał konkretnie: dwa jarmarki w roku i cotygodniowy targ sobotni. To znaczy, że miasto zostało od początku pomyślane wokół dnia, w którym coś się przywozi i sprzedaje. Nie wokół tego, co ktoś zaplanował w środę.",
        "Piszę o tym, bo w kuchni istnieją dwie kolejności i tylko o jednej się mówi. Ta oficjalna brzmi tak: wybieram przepisy na tydzień, robię listę, jadę na zakupy, gotuję według listy. Jest logiczna, tańsza i naprawdę działa u wielu osób — pisałam o niej osobno, przy innym mieście, i nie mam do niej żadnych zastrzeżeń.",
        "Tylko że bardzo wiele osób ma odwrotnie. Najpierw jest to, co było w sklepie albo co ktoś przywiózł ze wsi. Potem — dopiero potem — trzeba wymyślić, co z tego będzie na obiad. I ta druga kolejność ma jeden konkretny trudny moment: stoisz nad blatem, patrzysz na to, co leży, i po prostu nie wiesz.",
        "Powiem, co w tej sytuacji naprawdę zmienia urządzenie, a co jest reklamą. Reklamą jest zdanie „ma tysiąc przepisów”. Prawdą jest coś węższego: gdy gotujesz bez planu z wczoraj, największą przeszkodą nie jest pomysł, tylko sprzątanie po eksperymencie i to, że nie ma siły stać nad garnkiem, bo się nie wie, ile to potrwa. Jedno naczynie i gotowanie, które nie wymaga obecności, zdejmują akurat te dwie rzeczy.",
        "I rzecz, której nie usłyszycie na pokazie: to nie jest tańszy sposób gotowania. Kupowanie bez listy zwykle wychodzi drożej, niezależnie od tego, co potem stoi na blacie. Nie będę twierdzić, że urządzenie to odwraca, bo nie odwraca.",
        "Jeśli Wasza kuchnia działa w tej odwróconej kolejności, powiedzcie mi to przy umawianiu. Ugotujemy wtedy z tego, co akurat macie, a nie z tego, co ja przywiozłam — i to będzie uczciwsza próba niż każde przygotowane danie pokazowe.",
      ],
      links: [
        { href: "/co-mam-w-lodowce", label: "Co mam w lodówce" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kocku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu coś, czego nie wiecie, jak wykorzystać — zostawcie to na prezentację. Serio, to jest najlepszy możliwy test.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kocku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kockiej rodziny",
      paragraphs: [
        "Kock liczy niecałe dwa tysiące dziewięćset mieszkańców i od dwóch dekad ich ubywa — dziś ponad jedna czwarta to osoby po sześćdziesiątym piątym roku życia. To miasto, w którym w wielu domach do stołu siadają dwie osoby, a nie pięć.",
        "Dla takiej kuchni najważniejsze jest to, że urządzenie nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu — jednym do umycia.",
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

  districtsHeading: "Do których części Kocka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli — gmina dzieli się na sołectwa, ale to co innego. Nie będę wymyślać nazw dzielnic; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Kock też przyjadę",
  nearbyParagraphs: [
    "Lubartów, Radzyń Podlaski, Łuków, Ryki i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubartów", "Radzyń Podlaski", "Łuków", "Ryki", "Dęblin", "Lublin"],

  about: blokOMnie("do Kocka", "w Kocku i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Kocka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kocku"),
    {
      question: "Gotuję bez planowania — z tego, co akurat kupię. Czy to urządzenie ma wtedy sens?",
      answer:
        "Ma, ale z innego powodu, niż mówi reklama. Nie chodzi o liczbę przepisów, tylko o to, że przy gotowaniu bez planu odpadają dwie rzeczy, które najbardziej zniechęcają: mycie kilku naczyń po eksperymencie i stanie nad garnkiem, gdy się nie wie, ile to potrwa. Wszystko dzieje się w jednym naczyniu i nie wymaga obecności. Nie obiecam natomiast, że będzie taniej — kupowanie bez listy zwykle wychodzi drożej i urządzenie tego nie zmienia.",
    },
    {
      question: "Możemy ugotować na prezentacji coś z moich składników?",
      answer:
        "Tak, i przy takim sposobie gotowania to najlepszy pomysł. Zostawcie w lodówce to, z czym nie wiecie, co zrobić, i powiedzcie mi o tym przy umawianiu. Ugotujemy z tego, zamiast z gotowego dania pokazowego.",
    },
  ],

  geo: { lat: 51.6408, lng: 22.4472 },
};
