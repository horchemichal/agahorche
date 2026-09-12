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
 * PAJĘCZNO — gmina miejsko-wiejska, siedziba powiatu
 * pajęczańskiego. MIASTO 6 337 mieszkańców, GMINA 11 025
 * (31.12.2024, GUS). Brief mówił 6 500 — niemal trafione.
 *
 * PRAWA MIEJSKIE: przywilej lokacyjny 1265 r. od księcia
 * sieradzkiego LESZKA CZARNEGO; pierwsza wzmianka o Pajęcznie
 * jako mieście 1276 r.; utrata 1870; przywrócenie 1958 r.
 * (aktu nie ustalono). W 2026 r. miasto obchodziło 750-LECIE,
 * licząc od 1276 r. Pierwsza wzmianka o samej miejscowości:
 * 1140 r.
 *
 * FAKT OSIOWY DLA KĄTA: w Pajęcznie działa OKRĘGOWA
 * SPÓŁDZIELNIA MLECZARSKA — czynna, potwierdzona w KRS
 * wpisem z sierpnia 2026 r. NAZWY NIE PODAJĘ. UWAGA: spółdzielnia
 * wykazała stratę netto za 2025 r., więc NIE KOMENTUJĘ jej
 * kondycji ani wyników — ani dobrze, ani źle. Gmina jest
 * wyraźnie rolnicza: 68% powierzchni to użytki rolne,
 * 28,7% pracujących w mieście to rolnictwo.
 *
 * OBALONE / NIEROZSTRZYGNIĘTE: NIE POTWIERDZONO, żeby gmina
 * Pajęczno leżała w zasięgu oddziaływania kopalni odkrywkowej
 * — proces odszkodowawczy dotyczy sąsiedniej gminy Rząśnia.
 * NIE PISZĘ O TYM NIC W ŻADNĄ STRONĘ.
 * OBALONE: strona powiatu podaje dane z 2008 r. (nazwiska,
 * firmy, liczby) — NIE KORZYSTAM Z NICH.
 * OBALONE: powiat sam opisuje swoje położenie jako „północny
 * skraj Jury Krakowsko-Częstochowskiej", a nie Wyżyna
 * Wieluńska — NIE UŻYWAM tej drugiej nazwy.
 *
 * KĄT: SER, KTÓRY SIĘ TOPI — sos serowy, ser na gorąco
 * i to, co topiony ser robi z nożem. Kąt bierze się z czynnej
 * mleczarni w mieście rolniczym.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że topiony ser to jeden z najgorszych przeciwników tego
 *   urządzenia: oblepia nóż i ścianki, a zdejmuje się go
 *   szpatułką, nie palcem,
 * — że sos serowy MOŻNA w nim zrobić i wychodzi gładki, bo
 *   grzeje i miesza jednocześnie — ale kolejność ma znaczenie:
 *   ser wchodzi na końcu, do gotowej bazy,
 * — że ser wrzucony na początku do zimnego naczynia sklei się
 *   w bryłę,
 * — że twardy ser lepiej zetrzeć w urządzeniu na sucho i dopiero
 *   potem użyć — nie wrzucać w kawałkach do gorącego płynu,
 * — że ser żółty i twaróg zachowują się zupełnie inaczej i nie
 *   są wymienne,
 * — i ODMOWA: nic o rodzajach sera pod kątem diety ani
 *   nietolerancji laktozy, nic o przechowywaniu nabiału.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O NIETOLERANCJI LAKTOZY, ALERGII NA BIAŁKA
 *   MLEKA ANI DIETACH. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU NABIAŁU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (wapń, białko, tłuszcz).
 * — ŻADNYCH NAZW FIRM ani marek serów.
 * — NIE KOMENTUJĘ kondycji spółdzielni mleczarskiej.
 * — NIE PISZĘ NIC o kopalni odkrywkowej i jej oddziaływaniu.
 * — NIE ROBIĘ TŁA z bezrobocia (8,0%) ani z wynagrodzeń
 *   na poziomie 83% średniej krajowej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU JEST WAŻNE.
 * „Mleko i nabiał. Co urządzenie robi z mlekiem i nabiałem"
 * (inne miasto) to strona SZEROKA, o całej kategorii.
 * „Twaróg" (Nowy Dwór Gdański) dotyczy sera białego i pracy
 * z nim. „Bita śmietana" (Kietrz) dotyczy ubijania.
 * „Sosy, które się warzą" dotyczy ścinania się nabiału
 * od temperatury. Tutaj chodzi WYŁĄCZNIE o SER, KTÓRY SIĘ TOPI:
 * o mechanikę oblepiania noża i o kolejność dodawania.
 * Zakres jest wąski i techniczny.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ aktu przywracającego prawa miejskie w 1958 r.
 * — NIE PODAJĘ nazwy spółdzielni ani liczby zatrudnionych.
 * — NIE PISZĘ o firmach z listy powiatowej — dane z 2008 r.
 * — NIE PISZĘ o kopalni.
 * — NIE UŻYWAM nazwy „Wyżyna Wieluńska".
 * — NIE PODAJĘ listy sołectw jako urzędowej — mam wykaz wsi,
 *   nie wykaz sołectw, i tak je nazywam.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Pajęczno nie znalazłam żadnego.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 6 337, gmina 11 025 mieszkańców (31.12.2024, GUS),
 * — przywilej lokacyjny 1265 r. od księcia sieradzkiego Leszka
 *   Czarnego; pierwsza wzmianka o mieście 1276 r.; utrata praw
 *   1870, przywrócenie 1958; w 2026 r. 750-lecie,
 * — pierwsza wzmianka o miejscowości 1140 r.,
 * — barokowy kościół parafialny z XVII w.; sanktuarium
 *   Matki Bożej Pajęczańskiej,
 * — 68% powierzchni gminy to użytki rolne, 27,4% lasy;
 *   28,7% pracujących w mieście to rolnictwo,
 * — w mieście działa okręgowa spółdzielnia mleczarska,
 * — Pajęczno leży ok. 40 km na północ od Częstochowy,
 *   na północnym skraju Jury Krakowsko-Częstochowskiej.
 */
export const PAJECZNO: CityContent = {
  slug: "pajeczno",
  h1: "Thermomix Pajęczno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pajęczno (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pajęcznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pajęczno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pajęcznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pajęczna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Pajęczno i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ser wchodzi na końcu. Nigdy na początku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pajęcznie – jak wygląda prezentacja?",
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
      id: "ser",
      heading: "Miasto z mleczarnią, które kończy siedemset pięćdziesiąt lat — czyli o serze, który się topi",
      paragraphs: [
        "Pajęczno obchodziło w 2026 roku siedemset pięćdziesiąt lat od pierwszej wzmianki o sobie jako o mieście; przywilej lokacyjny dostało jeszcze wcześniej, w 1265 roku, od księcia sieradzkiego Leszka Czarnego. Sześćdziesiąt osiem procent powierzchni gminy to użytki rolne, a w mieście działa okręgowa spółdzielnia mleczarska. To dobre miejsce, żeby napisać o serze — ale o jednej konkretnej jego postaci: takiej, która się topi.",
        "Bo topiony ser to jeden z najbardziej kłopotliwych składników, jakie można wrzucić do tego urządzenia. Rozgrzany ser żółty staje się ciągnący i lepki, oblepia nóż od spodu i przywiera do ścianek. Zdejmuje się go szpatułką, którą urządzenie ma na wyposażeniu — nie palcem, nigdy przy nożu, i nie w trakcie pracy.",
        "Nie znaczy to jednak, że sosu serowego nie da się w nim zrobić. Da się i wychodzi bardzo dobrze — pod jednym warunkiem, o którym nikt nie uprzedza: liczy się kolejność.",
        "Ser wchodzi na końcu, do gotowej, ciepłej bazy. Najpierw robi się to, co ma być pod spodem: podgrzane mleko albo śmietanę, zasmażkę, warzywa, przyprawy. Dopiero potem, przy delikatnym mieszaniu, dodaje się starty ser i on się rozpuszcza równomiernie. Efekt jest gładki, bo urządzenie grzeje i miesza w tej samej chwili — a to przy serze ma większe znaczenie niż przy czymkolwiek innym, bo ser zostawiony bez ruchu ścina się w kluchę.",
        "Odwrotna kolejność kończy się zawsze tak samo: kawałki sera wrzucone do zimnego naczynia i podgrzewane od zera zbijają się w jedną bryłę, która blokuje nóż. To najczęstszy błąd przy sosach serowych i zdarza się każdemu raz.",
        "Praktyczna wskazówka, która wynika z powyższego: twardy ser lepiej najpierw zetrzeć w urządzeniu na sucho, przełożyć, a dopiero potem dodawać do ciepłego. Tarcie na sucho urządzenie robi znakomicie i bez oblepiania.",
        "I jeszcze jedno rozróżnienie, bo bywa mylone: ser żółty i twaróg to dwa zupełnie różne składniki, które zachowują się inaczej i nie są wymienne. Twaróg rozbija się na gładko i nie ciągnie; żółty topi się i ciągnie. O twarogu pisałam osobno, przy innym mieście.",
        "Granica: nie doradzę Wam nic o serach pod kątem nietolerancji laktozy, alergii ani jakiejkolwiek diety, i nic o przechowywaniu nabiału. To nie jest moja dziedzina — od tego są lekarz i dietetyk, a przy przechowywaniu bezpieczeństwo żywności.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pajęcznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć sos serowy zrobiony we właściwej kolejności — powiedzcie przy umawianiu. To dobra rzecz do pokazania, bo różnica jest widoczna od razu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pajęcznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pajęczańskiej rodziny",
      paragraphs: [
        "Samo miasto Pajęczno liczy ponad sześć tysięcy mieszkańców, a cała gmina jedenaście. Pierwsza wzmianka o miejscowości pochodzi z 1140 roku, przywilej lokacyjny dał jej w 1265 roku książę sieradzki Leszek Czarny, a jako miasto Pajęczno wzmiankowane jest od 1276 — dlatego w 2026 roku obchodzono tu siedemset pięćdziesiąt lat. Prawa miejskie utracone w 1870 roku wróciły w 1958. Miasto leży około czterdziestu kilometrów na północ od Częstochowy, na północnym skraju Jury Krakowsko-Częstochowskiej. Sześćdziesiąt osiem procent powierzchni gminy to użytki rolne, a niemal trzydzieści procent pracujących w mieście pracuje na roli. Z zabytków: barokowy kościół parafialny z siedemnastego wieku i sanktuarium Matki Bożej Pajęczańskiej.",
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

  districtsHeading: "Do których części gminy Pajęczno dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — Makowisk, Siedlca, Patrzykowa, Ładzina, Dylowa, Nowych i Starych Gajęcic i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Pajęczno też przyjadę",
  nearbyParagraphs: [
    "Działoszyn, Bełchatów, Wieluń, Radomsko, Kłobuck i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Działoszyn", "Bełchatów", "Wieluń", "Radomsko", "Zelów"],

  about: blokOMnie("do Pajęczna", "w Pajęcznie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pajęczna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto Pajęczno, siedzibę powiatu — dane powiatowe obejmują też Działoszyn, Rząśnię i kilka innych gmin i nie dotyczą samego Pajęczna.",
    },
    ...faqWspolne("w Pajęcznie"),
    {
      question: "Czy zrobię w nim sos serowy?",
      answer:
        "Tak i wychodzi gładki, ale kolejność ma znaczenie. Najpierw robi się bazę — podgrzane mleko albo śmietanę, zasmażkę, przyprawy — a starty ser dodaje się na końcu, do ciepłego, przy delikatnym mieszaniu.",
    },
    {
      question: "Dlaczego ser zbił mi się w bryłę?",
      answer:
        "Bo trafił do zimnego naczynia i był podgrzewany od zera. Kawałki sera zbijają się wtedy w jedną masę i blokują nóż. To najczęstszy błąd przy sosach serowych i zdarza się każdemu raz. Twardy ser najlepiej najpierw zetrzeć na sucho, przełożyć i dopiero potem dodawać do ciepłego.",
    },
    {
      question: "Czy ser żółty i twaróg można stosować zamiennie?",
      answer:
        "Nie — zachowują się zupełnie inaczej. Twaróg rozbija się na gładko i nie ciągnie, żółty topi się i oblepia nóż. I nie doradzę nic o serach pod kątem nietolerancji laktozy, alergii ani diety, ani o przechowywaniu nabiału: od tego są lekarz, dietetyk i bezpieczeństwo żywności.",
    },
  ],

  geo: { lat: 51.1449, lng: 18.9992 },
};
