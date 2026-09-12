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
 * UNIEJÓW — gmina miejsko-wiejska w powiecie poddębickim.
 * MIASTO 2 988 mieszkańców, GMINA 6 724.
 *
 * STATUS UZDROWISKA — rozporządzenie Rady Ministrów
 * z 27 CZERWCA 2012 r. (Dz.U. 2012 poz. 782). NIE 2011.
 * Obejmuje MIASTO plus sołectwa Spycimierz, Spycimierz-Kolonia,
 * Zieleń i Człopy. Uniejów to pierwsze w Polsce uzdrowisko
 * termalne.
 * ZAMEK arcybiskupów gnieźnieńskich — 1360–1365.
 * SPYCIMIERSKIE DYWANY KWIATOWE — wpis na Listę
 * reprezentatywną UNESCO 16 GRUDNIA 2021 r. Dywan ma ok. 1 km
 * długości, układany od ok. 9:00 do 14–15:00 w Boże Ciało.
 * TERMY otwarto w 2008 r. (NIE 2007). Przebudowana strefa
 * otwarta 16 MAJA 2026 r.
 *
 * ⚠ ZAKAZ BEZWZGLĘDNY — TWIERDZENIA ZDROWOTNE.
 * Researcher przekazał listę dziesięciu sformułowań ze strony
 * gminy o właściwościach leczniczych wody termalnej. NIE UŻYWAM
 * ŻADNEGO z nich ani parafrazy. Nie piszę „lecznicza",
 * „kuracja", „solanka lecznicza", nie wymieniam wskazań,
 * schorzeń ani skutków zdrowotnych. Piszę wyłącznie o STATUSIE
 * PRAWNYM uzdrowiska (data rozporządzenia) i o tym, że są
 * baseny termalne. Nic więcej.
 *
 * KĄT: GOTOWANIE W KILKA OSÓB — kuchnia, w której przy jednym
 * daniu pracuje więcej niż jedna para rąk. Kąt wprost ze
 * Spycimierza, gdzie cała wieś układa kilometrowy dywan
 * w jeden poranek — i z miasta, które przyjmuje gości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gotowanie we dwie–trzy osoby ma inną logikę niż
 *   gotowanie samemu i że urządzenie zmienia w niej podział
 *   pracy,
 * — że urządzenie ZABIERA etap, który zwykle dostawał
 *   „pomocnik": tarcie, siekanie, mieszanie przy garnku —
 *   i że trzeba się z tym liczyć, bo ktoś może poczuć się
 *   niepotrzebny,
 * — że dobry podział jest odwrotny: urządzenie robi jedno danie
 *   bez nadzoru, a ludzie w tym czasie robią wszystko, czego
 *   ono nie robi — kroją, pieką, nakrywają, smażą,
 * — że to jest realna zmiana przy większym gotowaniu:
 *   na święta, na odpust, na przyjazd rodziny,
 * — że przy kilku osobach BLAT jest wąskim gardłem, nie
 *   urządzenie,
 * — i ODMOWA: nie doradzę nic o dzieciach obsługujących
 *   urządzenie samodzielnie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — patrz zakaz wyżej.
 *   Woda termalna: tylko status prawny, zero właściwości.
 * — ŻADNYCH PORAD o samodzielnej obsłudze urządzenia przez
 *   dzieci. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM ani obiektów komercyjnych.
 * — NIE ROBIĘ TŁA z turystyki jako „szansy zarobkowej".
 * — Dywany kwiatowe opisuję z szacunkiem — to praktyka
 *   religijna, nie atrakcja.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie dla jednej
 * osoby" to kąt zajęty i tutaj mam jego odwrotność.
 * „Nawyk" (Żukowo) dotyczy powtarzalności. „Wszystko
 * przygotowane przed startem" (Sulejów) dotyczy organizacji
 * jednej osoby. „Święta" i „gotowanie na dużą liczbę osób"
 * dotyczą SKALI. Tutaj chodzi o LICZBĘ RĄK: kto co robi, gdy
 * przy jednym obiedzie stoi kilka osób.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o właściwościach wody termalnej. W ogóle.
 * — NIE PODAJĘ temperatury wody ani głębokości odwiertu —
 *   prowadzi to prosto do twierdzeń zdrowotnych.
 * — NIE PODAJĘ liczby sołectw gminy — źródła rozbieżne;
 *   wymieniam tylko cztery objęte statusem uzdrowiska.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Uniejów nie znalazłam żadnego.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 988, gmina 6 724 mieszkańców,
 * — status uzdrowiska nadany rozporządzeniem Rady Ministrów
 *   z 27 czerwca 2012 r.; obejmuje miasto oraz sołectwa
 *   Spycimierz, Spycimierz-Kolonia, Zieleń i Człopy;
 *   pierwsze w Polsce uzdrowisko termalne,
 * — zamek arcybiskupów gnieźnieńskich z lat 1360–1365,
 * — spycimierskie dywany kwiatowe wpisane na Listę
 *   reprezentatywną UNESCO 16 grudnia 2021 r.,
 * — dywan ma ok. kilometra długości i powstaje w jeden
 *   poranek, od około dziewiątej do wczesnego popołudnia,
 * — baseny termalne działają od 2008 r., przebudowaną strefę
 *   otwarto 16 maja 2026 r.
 */
export const UNIEJOW: CityContent = {
  slug: "uniejow",
  h1: "Thermomix Uniejów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Uniejów (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Uniejowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Uniejów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Uniejowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Uniejowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Uniejów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gdy przy obiedzie stoją trzy osoby, zmienia się nie tempo, tylko podział pracy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Uniejowie – jak wygląda prezentacja?",
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
      id: "w-kilka-osob",
      heading: "Kilometr dywanu w jeden poranek — czyli o gotowaniu w kilka osób",
      paragraphs: [
        "W Spycimierzu w gminie Uniejów co roku, na Boże Ciało, powstaje kwiatowy dywan długi na około kilometr. Układa go cała wieś w jeden poranek — praca zaczyna się mniej więcej o dziewiątej i kończy wczesnym popołudniem, tuż przed procesją. Zwyczaj trafił 16 grudnia 2021 roku na Listę reprezentatywną niematerialnego dziedzictwa kulturowego UNESCO. Nie piszę o nim jako o atrakcji, bo nią nie jest — to praktyka religijna. Przywołuję go z jednego konkretnego powodu: bo pokazuje, co się dzieje, gdy przy jednej robocie staje wiele rąk naraz.",
        "W kuchni jest z tym trudniej, niż się wydaje, i o tym chciałam napisać. Gotowanie we dwie, trzy osoby ma zupełnie inną logikę niż gotowanie samemu i nikt tego nie tłumaczy, bo wszystkie poradniki zakładają jedną osobę przy blacie.",
        "Zacznę od rzeczy niewygodnej. To urządzenie zabiera dokładnie ten etap, który zwykle dostawał ktoś do pomocy: tarcie, siekanie, mieszanie w garnku, żeby się nie przypaliło. Mamie, mężowi, dziecku, teściowej. Jeśli w Waszym domu ktoś przez lata dostawał tarkę i marchewkę, to po zakupie może poczuć się niepotrzebny — i lepiej o tym wiedzieć wcześniej, niż się zdziwić w Wigilię.",
        "Dobry podział pracy jest odwrotny do tego, co ludzie robią odruchowo. Odruchowo wszyscy stają wokół urządzenia i patrzą. A sens jest taki: urządzenie prowadzi jedno danie samo, bez nadzoru, i przez ten czas ludzie robią wszystko, czego ono nie robi. Ktoś kroi na deskę to, co ma być równe. Ktoś pilnuje piekarnika. Ktoś smaży. Ktoś nakrywa i zmywa na bieżąco. Dwa dania powstają równolegle zamiast po kolei — i to jest cała różnica.",
        "Widać ją naprawdę dopiero przy większym gotowaniu: na święta, na odpust, na przyjazd rodziny, na komunię. Przy codziennym obiedzie dla dwojga to drobiazg. Przy dwunastu osobach przy stole to jest kilka godzin.",
        "I jedna obserwacja praktyczna, którą powtarzam każdemu, kto gotuje z kimś: wąskim gardłem nie jest urządzenie ani liczba rąk, tylko blat. Trzy osoby w małej kuchni wchodzą sobie w drogę bardziej, niż pomagają. Zanim dołożycie kolejną osobę do pracy, sprawdźcie, czy ma gdzie stanąć i gdzie postawić deskę. Czasem lepiej dwie osoby na zmianę niż trzy naraz.",
        "Granica, przy której nie ustąpię: nie doradzę Wam, od jakiego wieku i w jakim zakresie dziecko może obsługiwać to urządzenie samodzielnie. Dziecko może i powinno w kuchni pomagać, ale to, co wolno mu robić przy pracującym sprzęcie z gorącą zawartością, to nie jest rzecz do zgadywania — o tym mówi instrukcja i Wasza własna ocena.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Uniejowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli w Waszej kuchni gotuje więcej niż jedna osoba — zaproście je wszystkie na prezentację. Wolę pokazywać przy komplecie, bo to zwykle nie jedna osoba decyduje o tym, jak wygląda obiad.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Uniejowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla uniejowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe trzy tysiące mieszkańców, a cała gmina niespełna siedem. Uniejów jest pierwszym w Polsce uzdrowiskiem termalnym — status uzdrowiska nadano mu rozporządzeniem Rady Ministrów z 27 czerwca 2012 roku, a objęto nim miasto oraz sołectwa Spycimierz, Spycimierz-Kolonia, Zieleń i Człopy. Baseny termalne działają tu od 2008 roku, a przebudowaną strefę otwarto 16 maja 2026. Nad miastem stoi zamek arcybiskupów gnieźnieńskich z lat 1360–1365, a w Spycimierzu od pokoleń układa się na Boże Ciało kwiatowe dywany, wpisane w grudniu 2021 roku na listę UNESCO.",
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

  districtsHeading: "Do których części gminy Uniejów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — w tym do Spycimierza, Spycimierza-Kolonii, Zieleni i Człop. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Uniejów też przyjadę",
  nearbyParagraphs: [
    "Poddębice, Turek, Dąbie, Koło i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Poddębice", "Łęczyca", "Ozorków", "Warta"],

  about: blokOMnie("do Uniejowa", "w Uniejowie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Uniejowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy, w tym do Spycimierza, Spycimierza-Kolonii, Zieleni i Człop. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Uniejowie"),
    {
      question: "Gotujemy w kuchni we dwie osoby — czy Thermomix ma sens?",
      answer:
        "Ma, ale zmienia podział pracy. Urządzenie zabiera etap, który zwykle dostawała osoba pomagająca: tarcie, siekanie, mieszanie przy garnku. Sens jest taki, żeby prowadziło jedno danie bez nadzoru, a w tym czasie ludzie robili to, czego ono nie robi — kroili równo, pilnowali piekarnika, smażyli, nakrywali. Wtedy dwa dania powstają równolegle zamiast po kolei.",
    },
    {
      question: "Kiedy widać różnicę przy gotowaniu w kilka osób?",
      answer:
        "Przy większym gotowaniu: na święta, na odpust, na przyjazd rodziny. Przy codziennym obiedzie dla dwojga to drobiazg, przy dwunastu osobach przy stole — kilka godzin. I jedna uwaga: wąskim gardłem jest zwykle blat, nie liczba rąk. Trzy osoby w małej kuchni wchodzą sobie w drogę.",
    },
    {
      question: "Czy dziecko może obsługiwać Thermomix samo?",
      answer:
        "Tego Wam nie rozstrzygnę. Dziecko może i powinno w kuchni pomagać, ale zakres samodzielnej obsługi pracującego urządzenia z gorącą zawartością to sprawa instrukcji i Waszej własnej oceny, nie mojego domysłu.",
    },
  ],

  geo: { lat: 51.9722, lng: 18.7897 },
};
