import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * USTKA — miasto w powiecie słupskim, 13 574 mieszkańców
 * (31.12.2024, GUS). To jest liczba SPRAWDZONA — w briefie było
 * 15 000, czyli o ponad tysiąc za dużo. Wszystkie liczby ludności
 * w tej fali okazały się zawyżone.
 *
 * STATUS UZDROWISKA od 1 stycznia 1988 r. — nadany rozporządzeniem,
 * obowiązuje do dziś.
 *
 * CIEKAWOSTKA UDOKUMENTOWANA: Ustka bywa nazywana „miastem bez
 * dokumentów potwierdzających, że jest miastem". Prawa miejskie
 * miała otrzymać w 1935 r., ale dokumenty nigdy nie zostały
 * ogłoszone w dzienniku urzędowym. Piszę o tym OSTROŻNIE i jako
 * o rzeczy opowiadanej w mieście, nie jako o rozstrzygnięciu
 * prawnym — bo nim nie jest.
 *
 * STRUKTURA GOSPODARKI: ok. 33% firm zarejestrowanych w mieście
 * działa w zakwaterowaniu i gastronomii. W porcie powstaje
 * terminal instalacyjny morskiej energetyki wiatrowej (inwestycja
 * ok. 111 mln zł, ok. 100 miejsc pracy, planowane zakończenie
 * na koniec 2026 r.).
 *
 * KĄT: POZA SEZONEM. Dziewięć i pół miesiąca w roku, kiedy nie ma
 * turystów i gotuje się wyłącznie dla siebie. To jest jedyne
 * miejsce w całym serwisie na ten temat i jest dla Ustki
 * naturalne — miasto, w którym co trzecia firma żyje z lipca
 * i sierpnia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w sezonie ludzie tu nie gotują, tylko pracują, i że to
 *   normalne,
 * — że urządzenie kupione „na sezon" jest kupione źle, bo w lipcu
 *   i tak nikt nie ma na nie czasu,
 * — że jego sens zaczyna się we wrześniu i trwa do czerwca,
 * — że gotowanie dla dwóch osób poza sezonem to inny problem niż
 *   gotowanie dla tłumu — problem NUDY i braku motywacji, nie
 *   braku czasu,
 * — i że nie sprzedam urządzenia komuś, kto prowadzi kwaterę
 *   i myśli, że nakarmi nim gości.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — Ustka jest uzdrowiskiem
 *   i pokusa napisania czegoś o „leczniczym" jedzeniu jest tu
 *   duża. Odmowa stoi w tekście.
 * — ŻADNYCH PORAD O ŻYWIENIU ZBIOROWYM ani o gotowaniu dla gości
 *   w kwaterze. To działalność gospodarcza i ma własne przepisy
 *   sanitarne.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH PORAD O RYBACH — temat ryb ma w serwisie własną
 *   stronę i tutaj go nie powtarzam.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sezon turystyczny" w górach
 * dotyczy sezonu PODWÓJNEGO i pracy w gastronomii. Tutaj chodzi
 * o odwrotność: o dziewięć miesięcy CISZY po jednym krótkim
 * sezonie. „Gotowanie dla dwóch osób" — jeśli gdzieś padło —
 * dotyczy skali porcji; tutaj chodzi o rytm roku.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Ustka nie jest miastem. Jest, i funkcjonuje jako
 *   miasto od dziesięcioleci. Opowieść o niedokończonych papierach
 *   podaję jako miejscową anegdotę.
 * — NIE PODAJĘ liczby kuracjuszy ani nazw sanatoriów.
 * — NIE PISZĘ, że terminal już działa. Termin to koniec 2026 r.
 *   i piszę o nim jako o budowie.
 * — NIE PODAJĘ nazwy spółki budującej terminal.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych. Dla
 *   samej Ustki nie znalazłam takiego, którego mogłabym być pewna.
 * — districts: Ustka nie ma statutowych osiedli. districts to
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 13 574 mieszkańców (31.12.2024, GUS),
 * — status uzdrowiska od 1 stycznia 1988 r.,
 * — ok. 33% firm w mieście to zakwaterowanie i gastronomia,
 * — w porcie budowany terminal instalacyjny morskich farm
 *   wiatrowych, termin: koniec 2026 r.,
 * — opowieść o prawach miejskich z 1935 r., których dokumentów
 *   nie ogłoszono.
 */
export const USTKA: CityContent = {
  slug: "ustka",
  h1: "Thermomix Ustka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ustka (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ustce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ustka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ustce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ustki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ustka i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie na lipiec. Na wrzesień, listopad i luty.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ustce – jak wygląda prezentacja?",
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
      id: "poza-sezonem",
      heading: "Dziewięć miesięcy po sezonie — czyli o gotowaniu, kiedy już nikogo nie ma",
      paragraphs: [
        "W Ustce co trzecia zarejestrowana firma to zakwaterowanie albo gastronomia. To znaczy, że przez lipiec i sierpień pół miasta pracuje po czternaście godzin, a przez pozostałe dziesięć miesięcy żyje zupełnie inaczej. I to o tych dziesięciu miesiącach chcę napisać, bo o nich nikt nie pisze — wszystkie teksty o nadmorskich miastach kończą się na wrześniu.",
        "Zacznę od zdania, którego sprzedawca zwykle nie mówi: jeżeli myślisz o tym urządzeniu jako o pomocy na sezon, to kupujesz je źle. W lipcu nie będziesz miała czasu ani go włączyć, ani nauczyć się go używać, ani zmyć. W sezonie człowiek nie gotuje — człowiek pracuje i je to, co da się zjeść na stojąco. To normalne i nie ma się czego wstydzić.",
        "Jego sens zaczyna się we wrześniu.",
        "Bo poza sezonem gotowanie w Ustce ma zupełnie inny problem niż w dużym mieście. Tam problemem jest brak czasu. Tutaj czasu bywa aż za dużo — a problemem jest to, że gotuje się dla dwóch osób, w listopadzie, kiedy o szesnastej jest ciemno, wieje i nic się nie chce. To nie jest kwestia organizacji. To kwestia tego, że po prostu nie chce się stać przy garnku.",
        "I tutaj urządzenie robi rzecz, której nie umiem dobrze sprzedać hasłem, bo brzmi banalnie: obniża próg. Kiedy obiad znaczy „wsypać, zamknąć, wrócić za chwilę”, a nie „stać i pilnować”, to ten obiad częściej w ogóle powstaje. Zupa w środę, pieczywo w sobotę, coś ciepłego, kiedy wracasz przemarznięta. Nie dlatego, że sprzęt jest magiczny — dlatego, że łatwiej zacząć.",
        "Druga rzecz, dużo bardziej wymierna: poza sezonem opłaca się gotować większą porcją i chować. Jeden wieczór, dwie–trzy rzeczy, i przez tydzień jest z czego jeść. Przy dwóch osobach to realnie zmienia tydzień.",
        "Dwie rzeczy, których nie zrobię. Nie doradzę nic osobie, która prowadzi kwaterę i chce nim karmić gości — gotowanie dla gości to działalność gospodarcza, ma własne przepisy sanitarne i sprzęt domowy nie jest tu odpowiedzią. I nie napiszę ani słowa o tym, że jakiekolwiek jedzenie na cokolwiek pomaga. Ustka jest uzdrowiskiem od 1988 roku i pokusa jest duża, ale ja sprzedaję urządzenie kuchenne, nie zdrowie. Po takie rady trzeba iść do lekarza albo dietetyka.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ustce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pracujesz w sezonie, umówmy się poza nim. Serio — w lipcu nie mamy o czym rozmawiać, a we wrześniu mamy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ustce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla usteckiej rodziny",
      paragraphs: [
        "Ustka liczy nieco ponad trzynaście i pół tysiąca mieszkańców i od 1 stycznia 1988 roku ma status uzdrowiska. Miejscowi lubią opowiadać, że jest to miasto bez papierów na miasto: prawa miejskie miały tu zostać nadane w 1935 roku, ale dokumentów nigdy nie ogłoszono w dzienniku urzędowym — traktuję to jako miejscową anegdotę, nie jako rozstrzygnięcie prawne, bo miastem Ustka jest i funkcjonuje nim od dziesięcioleci. Dziś w porcie trwa budowa terminalu instalacyjnego dla morskich farm wiatrowych; zakończenie planowane jest na koniec 2026 roku i ma to być dla miasta pierwsza od dawna praca niezwiązana z latem.",
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

  districtsHeading: "Do których części Ustki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na stronę wschodnią i zachodnią, do osiedli przy porcie i do zabudowy dalej od morza — oraz do miejscowości gminy wiejskiej Ustka. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Ustkę też przyjadę",
  nearbyParagraphs: [
    "Słupsk, Sławno, Kępice, Damnica i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Słupsk", "Sławno", "Kępice", "Lębork", "Darłowo"],

  about: blokOMnie("do Ustki", "w Ustce i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ustki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy wiejskiej Ustka. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ustce"),
    {
      question: "Czy warto kupić Thermomix przed sezonem?",
      answer:
        "Moim zdaniem nie — i mówię to jako sprzedawczyni. W lipcu i sierpniu nie będziesz mieć czasu ani go włączyć, ani się go nauczyć. Jego sens zaczyna się we wrześniu i trwa do czerwca.",
    },
    {
      question: "Prowadzę kwaterę. Nakarmię nim gości?",
      answer:
        "Nie doradzę tego. Gotowanie dla gości to działalność gospodarcza i podlega osobnym przepisom sanitarnym — sprzęt domowy nie jest tu odpowiedzią i nie będę udawać, że jest.",
    },
    {
      question: "Ustka jest uzdrowiskiem. Pomoże mi gotować zdrowiej?",
      answer:
        "Nie napiszę Ci, że jakiekolwiek jedzenie na cokolwiek pomaga — sprzedaję urządzenie kuchenne, nie zdrowie. Po rady żywieniowe trzeba pójść do lekarza albo dietetyka. To, co urządzenie realnie robi, to gotuje w jednym naczyniu i bez stania nad garnkiem.",
    },
  ],

  geo: { lat: 54.5806, lng: 16.8617 },
};
