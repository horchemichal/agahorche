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
 * BŁASZKI — gmina miejsko-wiejska w powiecie sieradzkim.
 * MIASTO 1 975, GMINA 13 880 (GUS 31.12.2024). Miasto ma
 * 1,6 km² — najmniejsze obszarowo w całej fali, a gmina jest
 * od niego siedmiokrotnie ludniejsza.
 * LICZBY SOŁECTW NIE PODAJĘ — jedno źródło mówi 55,
 * nie potwierdzone urzędowo.
 *
 * PRAWA MIEJSKIE — NAJSŁABIEJ UDOKUMENTOWANE W FALI.
 * Pierwsza wzmianka 1386 r. (pleban „z Blascowicz").
 * 1 marca 1652 r. — przywilej Jana Kazimierza na targi.
 * 1729 r. — PIERWSZY RAZ NAZWANE MIASTEM.
 * 1926 r. — rozszerzenie granic miasta.
 * ⚠ UTRATY I ODZYSKANIA PRAW NIE POTWIERDZONO ŻADNYM
 * ŹRÓDŁEM. NIE TWIERDZĘ, że straciły je w 1870 r.
 *
 * ZABYTKI z numerami rejestru (dane urzędu):
 * kościół św. Anny 1770 r., nr rej. 415/A z 3.06.1954
 * (Wikipedia podaje 1779–1789 — biorę wersję urzędową);
 * dom społeczny „Błaszkowianka" przeł. XIX/XX w.;
 * ŁAŹNIA MIEJSKA pocz. XX w.; dworzec PKP pocz. XX w.;
 * kościół w Kalinowej 1465 r. (najstarszy w gminie);
 * drewniany kościół w Gruszczycach 1750 r.;
 * drewniany kościół w Kamiennej 1595 r.;
 * wiatrak we Włocinie ok. 1920 r.
 * PARAFIA NALEŻY DO DIECEZJI KALISKIEJ, nie łódzkiej.
 *
 * OBALONE: legenda o rycerzu Blasko to podanie, nie historia.
 * OBALONE: kościół św. Anny — data urzędowa 1770.
 *
 * ⚠ MIASTO NAJWRAŻLIWSZE W CAŁEJ FALI. Przed wojną blisko
 * połowa z 5 700 mieszkańców to byli Żydzi. ZERO tematu
 * II wojny, getta, cmentarza żydowskiego (wymieniany jako
 * „atrakcja" na en.wikipedii — NIE UMIESZCZAM). Nie robię
 * TŁA ze spadku ludności — bo jego przyczyna prowadzi wprost
 * do Zagłady. Liczby ludności podaję wyłącznie sucho, jako
 * zasięg dojazdu.
 *
 * KĄT: CIEPŁO, KTÓRE ZOSTAJE — danie dochodzi po wyłączeniu.
 * Kąt z miasta, które ma zabytkową łaźnię miejską i dom
 * społeczny: budynki od trzymania ciepła i od tego, co dzieje
 * się po godzinach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że garnek i to urządzenie mają zupełnie inną bezwładność
 *   cieplną i że to zmienia moment, w którym się kończy,
 * — że masa jedzenia trzyma ciepło dłużej niż naczynie
 *   i że danie realnie dochodzi po wyłączeniu,
 * — że najczęstszy błąd to przegotowanie „na wszelki wypadek",
 *   czyli dodanie czasu do przepisu, który był dobry,
 * — które dania dochodzą po wyłączeniu (kasze, ryż, warzywa,
 *   jajka, wszystko na parze), a które nie (sosy z zawiesiną,
 *   dania ze skrobią, wypieki),
 * — że przy dużej porcji efekt jest większy niż przy małej —
 *   i że to jest powód, dla którego ten sam przepis wychodzi
 *   inaczej w podwojonej ilości,
 * — że przy podawaniu warto to policzyć w drugą stronę:
 *   zdjąć wcześniej, bo droga na stół to też czas,
 * — i ODMOWA: nie podaję czasów ani „ile odjąć".
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — także żadnego
 *   „odejmij pięć minut".
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD o studzeniu i przechowywaniu ze względów
 *   bezpieczeństwa. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO tematu II wojny i społeczności żydowskiej.
 * — NIE ROBIĘ TŁA ze spadku liczby mieszkańców.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Urządzenie grzeje, nie
 * chłodzi" (Władysławowo) dotyczy tego, czego sprzęt NIE
 * potrafi. „Odgrzewanie" (Człuchów) dotyczy dania zimnego.
 * „Danie, które może poczekać" (Kamieńsk) dotyczy godzin.
 * „Czas" ma własne miasto i dotyczy oszczędności czasu.
 * Tutaj chodzi o MINUTY PO WYŁĄCZENIU: o to, że gotowanie
 * nie kończy się w momencie, w którym kończy się program.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o utracie ani odzyskaniu praw miejskich.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ nazwy rzeki — źródła mówią tylko o „strumieniu".
 * — NIE PRZYPISUJĘ Błaszkom produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ legendy o rycerzu Blasko jako faktu.
 * — NIE MYLĘ Błaszek z BŁAŻOWĄ w podkarpackim.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 975, gmina 13 880 mieszkańców; miasto zajmuje
 *   1,6 km², gmina 201,4 km²,
 * — pierwsza wzmianka z 1386 r.; 1 marca 1652 r. Jan Kazimierz
 *   nadał przywilej na targi; miastem nazwane w 1729 r.,
 * — kościół świętego Anny z 1770 r., nr rej. 415/A,
 * — zabytkowa łaźnia miejska i dom społeczny „Błaszkowianka"
 *   z początku XX w., dworzec kolejowy z tego samego okresu,
 * — kościół w Kalinowej z 1465 r. — najstarszy w gminie,
 * — drewniane kościoły w Gruszczycach (1750) i Kamiennej
 *   (1595), wiatrak we Włocinie z ok. 1920 r.,
 * — parafia należy do diecezji kaliskiej.
 */
export const BLASZKI: CityContent = {
  slug: "blaszki",
  h1: "Thermomix Błaszki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Błaszki (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Błaszkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Błaszki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Błaszkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Błaszek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Błaszki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gotowanie nie kończy się w chwili, w której kończy się program.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Błaszkach – jak wygląda prezentacja?",
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
      id: "cieplo-ktore-zostaje",
      heading: "Zabytkowa łaźnia miejska — czyli o cieple, które zostaje po wyłączeniu",
      paragraphs: [
        "Błaszki są miastem, w którym do rejestru zabytków wpisano rzeczy, jakich gdzie indziej się nie wpisuje: obok kościoła świętej Anny z 1770 roku figurują tam łaźnia miejska i dom społeczny „Błaszkowianka”, oba z początku dwudziestego wieku, oraz dworzec kolejowy. Budynki, które grzały i zbierały ludzi. Miasto jest maleńkie — mniej niż dwa tysiące mieszkańców na półtora kilometra kwadratowego — a gmina wokół niego siedmiokrotnie większa, z drewnianymi kościołami w Kamiennej z 1595 roku i w Gruszczycach z 1750, murowanym w Kalinowej z 1465 i wiatrakiem we Włocinie.",
        "Skoro więc jestem w mieście z zabytkową łaźnią, napiszę o rzeczy, którą pomija każda instrukcja: o tym, że gotowanie nie kończy się w chwili, w której kończy się program.",
        "Garnek i to urządzenie mają zupełnie inną bezwładność cieplną. W garnku zdejmujecie go z palnika, wylewacie wodę i temat jest zamknięty. Tutaj w naczyniu zostaje masa jedzenia, która jest gorąca i która trzyma to ciepło jeszcze przez dobrych kilka minut. To nie jest drobiazg — danie w tym czasie realnie dochodzi.",
        "I z tego bierze się chyba najczęstszy błąd, jaki widzę u ludzi po pierwszym miesiącu: przegotowanie na wszelki wypadek. Człowiek zagląda, ocenia, że jeszcze twarde, dokłada czasu — i dostaje rozgotowane. A ono nie było za twarde. Ono po prostu jeszcze nie skończyło, bo miało skończyć poza urządzeniem.",
        "Które dania dochodzą po wyłączeniu: kasze i ryż, warzywa gotowane w kawałkach, jajka, wszystko robione na parze, ziemniaki. Te rzeczy warto zdejmować odrobinę wcześniej, niż podpowiada oko. A które nie dochodzą: sosy z zawiesiną i dania zagęszczane skrobią zachowują się odwrotnie — one po wyłączeniu tężeją, więc to, co w naczyniu wygląda na w sam raz, na talerzu bywa za gęste.",
        "Jest jeszcze rzecz, która tłumaczy pozorną zagadkę: dlaczego ten sam przepis w podwojonej ilości wychodzi inaczej. Bo im większa masa, tym dłużej trzyma ciepło i tym więcej dochodzi po wyłączeniu. Podwojona porcja to nie jest ten sam przepis razy dwa — to jest przepis o innej bezwładności.",
        "Warto to też policzyć w drugą stronę, przy podawaniu. Droga z kuchni na stół, nakładanie, czekanie aż wszyscy usiądą — to też są minuty, w których danie pracuje. Dlatego przy gościach lepiej zdjąć wcześniej niż później.",
        "I granica: nie podam Wam żadnych liczb — ani ile minut to trwa, ani ile odjąć od przepisu. Zależy to od ilości, od składników i od tego, co dokładnie robicie. Chcę, żebyście wiedzieli, że to zjawisko istnieje i żebyście zaglądali wcześniej. Nie doradzę też, jak szybko studzić gotowe danie ani jak je potem trzymać — to jest bezpieczeństwo żywności, a nie kuchenna technika.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Błaszkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli gotujecie duże porcje — powiedzcie przy umawianiu. Przy dużej ilości wszystko, o czym tu napisałam, jest wyraźniejsze i lepiej to pokazać na Waszej skali niż na modelowej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Błaszkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla błaszkowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa tysiące mieszkańców i zajmuje półtora kilometra kwadratowego, a cała gmina blisko czternaście tysięcy na ponad dwustu kilometrach — to jedna z tych gmin, w których miasto jest najmniejszą częścią całości. Pierwsza wzmianka o Błaszkach pochodzi z 1386 roku, w 1652 Jan Kazimierz nadał im przywilej na targi, a miastem nazwano je po raz pierwszy w 1729. Zachowały się kościół świętej Anny z 1770 roku, zabytkowa łaźnia miejska, dom społeczny i dworzec z początku dwudziestego wieku, a w gminie drewniane kościoły w Kamiennej z 1595 i w Gruszczycach z 1750 roku, murowany w Kalinowej z 1465 oraz wiatrak we Włocinie. Parafia należy do diecezji kaliskiej, co bywa źródłem pomyłek co do położenia miasta.",
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

  districtsHeading: "Do których części gminy Błaszki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — Kalinowej, Gruszczyc, Kamiennej, Włocina, Wojkowa i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Błaszki też przyjadę",
  nearbyParagraphs: [
    "Sieradz, Kalisz, Złoczew, Warta i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sieradz", "Złoczew", "Warta", "Wieruszów"],

  about: blokOMnie("do Błaszek", "w Błaszkach i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Błaszek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Błaszki leżą w powiecie sieradzkim w województwie łódzkim, choć parafia należy do diecezji kaliskiej i bywa to mylące.",
    },
    ...faqWspolne("w Błaszkach"),
    {
      question: "Dlaczego kasza wychodzi mi rozgotowana, chociaż trzymam się przepisu?",
      answer:
        "Bo prawdopodobnie dodajecie czasu, gdy zaglądacie i wydaje się jeszcze twarda. Masa jedzenia trzyma ciepło po wyłączeniu i danie realnie dochodzi poza programem. Kasze, ryż, ziemniaki, jajka i wszystko z pary warto zdejmować odrobinę wcześniej, niż podpowiada oko.",
    },
    {
      question: "Dlaczego podwojony przepis wychodzi inaczej?",
      answer:
        "Bo im większa masa, tym dłużej trzyma ciepło i tym więcej dochodzi po wyłączeniu. Podwojona porcja to nie jest ten sam przepis razy dwa — to przepis o innej bezwładności cieplnej.",
    },
    {
      question: "Dlaczego sos gęstnieje mi po nałożeniu na talerz?",
      answer:
        "Bo dania zagęszczane skrobią zachowują się odwrotnie niż kasze: nie dochodzą, tylko tężeją przy stygnięciu. To, co w naczyniu wygląda na w sam raz, na stole bywa za gęste — warto zostawić je odrobinę rzadsze.",
    },
  ],

  geo: { lat: 51.6516, lng: 18.4344 },
};
