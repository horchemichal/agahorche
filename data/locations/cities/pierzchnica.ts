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
 * PIERZCHNICA — miasto w powiecie kieleckim, 1 255 mieszkańców
 * (31.12.2024, GUS); cała gmina 4 675. Lokacja MIĘDZY 1359
 * A 1397 r. (spór historiograficzny: Kazimierz Wielki albo
 * Władysław Jagiełło), prawo magdeburskie nadane/potwierdzone
 * przez Zygmunta Starego w 1512 r. Prawa miejskie utracone
 * w 1869 r. i ODZYSKANE 1 STYCZNIA 2019 r. na mocy
 * rozporządzenia Rady Ministrów z 25 lipca 2018 r.
 * (Dz.U. 2018 poz. 1456).
 *
 * KĄT: bigos i kapusta — czyli danie, które robi się długo
 * i je się kilka dni. Miasto, które do 1780 r. miało dwanaście
 * jarmarków rocznie, a potem przez sto pięćdziesiąt lat czekało
 * na powrót praw miejskich, jest właściwym miejscem na stronę
 * o potrawie, przy której nic nie da się przyspieszyć poza
 * pilnowaniem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w bigosie urządzenie odbiera dokładnie jedną rzecz:
 *   konieczność stania i mieszania, żeby nie przywarło,
 * — że kapustę poszatkuje, ale mięsa nie podsmaży,
 * — że pod zamkniętą pokrywą nic nie odparowuje, więc bigos
 *   wychodzi wodnisty, jeśli wlejecie tyle, co do garnka,
 * — i uczciwie: że bigos i tak wymaga kilku dni i kilku
 *   odgrzań, a tego żadne urządzenie nie skróci.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O KISZENIU KAPUSTY ani o tym, jak długo bigos
 *   może stać. Kiszenie to fermentacja, przechowywanie to
 *   bezpieczeństwo żywności — jedno i drugie poza moją działką.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o kapuście ani o kiszonkach.
 * — ŻADNEGO ROZSTRZYGANIA, JAKI BIGOS JEST WŁAŚCIWY. Nie ma
 *   jednego przepisu i nie będę udawać, że znam ten prawdziwy.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czego nie da się
 * przyspieszyć" (miasto browaru) dotyczy WARZENIA I FERMENTACJI
 * jako procesów przemysłowych. „Duszenie" (Łagów) dotyczy
 * techniki w ogóle. „Szatkowanie warzyw na surowo" (Pilzno)
 * dotyczy surówek. Tutaj chodzi o JEDNO KONKRETNE DANIE
 * i o to, co się w nim dzieje przez trzy dni.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ ROKU LOKACJI. Źródła dają przedział 1359–1397
 *   i spór o to, czy lokował Kazimierz Wielki czy Jagiełło.
 *   Piszę „w drugiej połowie XIV wieku".
 * — NIE PISZĘ, że Pierzchnica jest najmniejszym miastem
 *   województwa. NIE JEST — najmniejszy jest Opatowiec
 *   (307 mieszkańców), zarazem najmniejsze miasto w Polsce.
 * — NIE PODAJĘ największego pracodawcy. Nie ma takiego;
 *   w gminie nie znaleziono żadnego dużego zakładu.
 * — NIE UŻYWAM BEZROBOCIA ANI NISKICH ZAROBKÓW JAKO ARGUMENTU.
 *   Gmina ma najwyższe bezrobocie z okolicy i to jest fakt,
 *   ale przedstawicielka handlowa, która przy sprzedaży drogiego
 *   sprzętu przypomina ludziom, że mało zarabiają, robi rzecz
 *   nieprzyzwoitą. Tego wątku w treści NIE MA.
 * — NIE PISZĘ o piwnicach na Górze Piwnicznej jako o zabytku.
 *   Nie potwierdzono wpisu do rejestru ani datacji. Piszę o nich
 *   ostrożnie, jako o miejscowym zwyczaju budowlanym.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Pierzchnicy nic nie potwierdzono.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja w drugiej połowie XIV w., prawo magdeburskie
 *   potwierdzone przez Zygmunta Starego w 1512 r., utrata praw
 *   miejskich 1869 r., odzyskanie 1.01.2019 (Dz.U. 2018
 *   poz. 1456),
 * — ostatni burmistrz przed degradacją: Andrzej Klejn
 *   (1846–1869),
 * — targ tygodniowy we wtorki, a do 1780 r. dwanaście jarmarków
 *   rocznie,
 * — miasto leżało na szlaku Lwów–Wrocław; w XVIII w. trakt
 *   przeniósł się przez Daleszyce i to jest udokumentowana
 *   przyczyna upadku miasteczka,
 * — piwnice zbudowane wspólnie przez mieszkańców na osobnym
 *   wzgórzu, poza zabudową, z powodu podmokłego terenu,
 * — ruiny zamku Krasińskich w Maleszowie, w tej gminie —
 *   miejsce urodzenia Franciszki Krasińskiej,
 * — część gminy leży w Cisowsko-Orłowińskim Parku Krajobrazowym,
 * — 1 255 mieszkańców miasta, 4 675 gminy (31.12.2024).
 */
export const PIERZCHNICA: CityContent = {
  slug: "pierzchnica",
  h1: "Thermomix Pierzchnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pierzchnica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pierzchnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pierzchnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pierzchnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pierzchnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Pierzchnica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Bigos i tak potrwa trzy dni. Tylko nie musicie przy nim stać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pierzchnicy – jak wygląda prezentacja?",
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
      id: "bigos",
      heading: "Miasto dwunastu jarmarków — czyli o bigosie",
      paragraphs: [
        "Pierzchnica leżała kiedyś na szlaku ze Lwowa do Wrocławia i do 1780 roku miała dwanaście jarmarków rocznie, nie licząc wtorkowego targu. Potem trakt przeniesiono przez Daleszyce, miasteczko zeszło z drogi i już nigdy nie wróciło na dawne miejsce. Prawa miejskie straciło w 1869 roku i odzyskało dopiero 1 stycznia 2019 — po stu pięćdziesięciu latach. Miejsce, które umie tak długo czekać, jest właściwym miejscem na stronę o daniu, którego nie da się zrobić szybciej.",
        "Bigos jest nietypowy, bo prawie cała praca przy nim to nie gotowanie, tylko pilnowanie. Kapusta lubi przywrzeć do dna, więc trzeba wracać i mieszać, przez godziny, przez trzy dni. I dokładnie to jedno urządzenie zabiera: gotuje z ustawioną temperaturą i miesza samo, więc garnek nie wymaga Waszej obecności. Nastawiacie i idziecie robić swoje.",
        "Poszatkuje też kapustę i pokroi cebulę — to kilkanaście sekund zamiast kwadransa przy desce.",
        "Ale trzy rzeczy trzeba wiedzieć, bo inaczej wyjdzie rozczarowanie.",
        "Mięsa nie podsmaży. Boczek, kiełbasa, karkówka — jeżeli chcecie je mieć przyrumienione, robicie to na patelni i dokładacie. To akurat w bigosie słychać.",
        "Pod zamkniętą pokrywą prawie nic nie odparowuje. W wielkim garnku bigos przez trzy dni odparowuje i gęstnieje sam; tutaj nie odparuje prawie wcale. Płynu wlewa się więc wyraźnie mniej niż do garnka, inaczej wyjdzie zupa z kapusty.",
        "I najważniejsze, powiedziane wprost: bigos i tak potrzebuje kilku dni i kilku odgrzań. Tego żadne urządzenie nie skróci i nikt, kto Wam mówi inaczej, nie mówi prawdy. Urządzenie odbiera stanie przy garnku, nie czas.",
        "Czego tu nie znajdziecie: mojej wersji jedynie słusznego bigosu. W każdym domu jest inny i nie mam zamiaru rozstrzygać, który jest prawdziwy. Nie doradzę też nic w sprawie kiszenia kapusty ani tego, jak długo gotowy bigos może stać — to są dwie różne dziedziny, obie poza moją.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pierzchnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Bigosu na prezentacji nie zrobimy — na to trzeba trzech dni. Ale pokażę szatkowanie kapusty i to, jak wygląda gotowanie bez mieszania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pierzchnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pierzchnickiej rodziny",
      paragraphs: [
        "Pierzchnica liczy nieco ponad tysiąc dwieście mieszkańców, cała gmina — niecałe pięć tysięcy. Miasto lokowano w drugiej połowie XIV wieku; historycy do dziś spierają się, czy zrobił to Kazimierz Wielki, czy Władysław Jagiełło. Prawo magdeburskie potwierdził Zygmunt Stary w 1512 roku, a ostatnim burmistrzem przed degradacją był Andrzej Klejn, urzędujący od 1846 do 1869. Ciekawostka, której nie ma nigdzie indziej w okolicy: miejscowe piwnice zbudowano wspólnie, na osobnym wzgórzu poza zabudową, bo w samym miasteczku jest zbyt mokro. W granicach gminy stoją też ruiny zamku Krasińskich w Maleszowie — miejsca urodzenia Franciszki Krasińskiej — a część gminy leży w Cisowsko-Orłowińskim Parku Krajobrazowym.",
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

  districtsHeading: "Do których części Pierzchnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Drugni, Skrzelczyc, Maleszowej, Pierzchnianki i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Pierzchnicę też przyjadę",
  nearbyParagraphs: [
    "Chmielnik, Morawica, Daleszyce, Kielce, Staszów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chmielnik", "Morawica", "Daleszyce", "Kielce", "Staszów", "Busko-Zdrój"],

  about: blokOMnie("do Pierzchnicy", "w Pierzchnicy i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pierzchnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pierzchnicy"),
    {
      question: "Czy Thermomix zrobi bigos?",
      answer:
        "Ugotuje go bez Waszej obecności — trzyma temperaturę i miesza sam, więc kapusta nie przywrze do dna. Poszatkuje też kapustę i cebulę. Ale mięsa nie podsmaży, a pod zamkniętą pokrywą prawie nic nie odparowuje, więc płynu wlewa się wyraźnie mniej niż do garnka.",
    },
    {
      question: "Czy dzięki temu bigos będzie gotowy szybciej?",
      answer:
        "Nie. Bigos i tak potrzebuje kilku dni i kilku odgrzań — tego żadne urządzenie nie skróci. Ono odbiera stanie przy garnku, a nie czas, którego danie wymaga.",
    },
    {
      question: "Czy pokażesz, jak ukisić kapustę?",
      answer:
        "Nie doradzam w sprawie kiszenia ani tego, jak długo gotowy bigos może stać. To dwie różne dziedziny — fermentacja i bezpieczeństwo żywności — i obie są poza kompetencjami przedstawicielki handlowej.",
    },
  ],

  geo: { lat: 50.6981, lng: 20.7539 },
};
