import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * FROMBORK — gmina miejsko-wiejska w powiecie braniewskim.
 * MIASTO 1 993, GMINA 3 040 (GUS 31.12.2024). 11 SOŁECTW.
 * ⚠ Notatka projektowa podawała 2 300 — ZAWYŻONE.
 *
 * PRAWA MIEJSKIE 8 LIPCA 1310 r., nadał BISKUP WARMIŃSKI
 * EBERHARD Z NYSY, na PRAWIE LUBECKIM.
 * PRAWA UTRACONE w 1945 r., PRZYWRÓCONE w 1959 r.
 * PRZYNALEŻNOŚĆ: WARMIA.
 *
 * KATEDRA — 1329–1388. WZGÓRZE KATEDRALNE UZNANE ZA
 * POMNIK HISTORII 8 WRZEŚNIA 1994 r.
 * WIEŻA WODNA — 1571–1572, zbudował ją RURMISTRZ
 * VALENTIN HENDELL, podnosiła wodę na ok. 25 m,
 * działała do 1911 r.
 * ⚠⚠ NIE ZBUDOWAŁ JEJ KOPERNIK. Mit powstał w latach
 * 1664–1680, blisko sto pięćdziesiąt lat po jego śmierci.
 * TO JEST PODSTAWA KĄTA — rzecz działająca, opisana
 * pod złym nazwiskiem.
 * KANAŁ KOPERNIKA — z rzeki Baudy, ok. 5,9 km, kopany
 * w XIV w. (nazwa późniejsza — o autorstwie nie piszę).
 * WIEŻA RADZIEJOWSKIEGO — 1685, dziś planetarium.
 * ⚠ Taras wieży bywa „tymczasowo nieczynny” — NIE OBIECUJĘ
 * wejścia ani widoku.
 * ZALEW WIŚLANY — 860 km², głębokość tylko 3–5 m.
 * FROMBORK NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: PRZENOSZENIE I PRZELEWANIE GORĄCEGO.
 * Kąt od wieży wodnej: urządzenia, którego jedynym zadaniem
 * było podnieść i przenieść wodę tam, gdzie jest potrzebna.
 * Najczęstsza, najbardziej lekceważona i najgroźniejsza
 * czynność w kuchni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przenoszenie gorącego to czynność, o której nie pisze
 *   żaden przepis, a to przy niej dochodzi do wypadków,
 * — konkretne zasady: naczynie na blat, a nie w powietrzu;
 *   nigdy nad sobą ani nad dzieckiem; garnek do miski,
 *   a nie miska do garnka,
 * — że gorący płyn w blenderze kielichowym rozpręża się
 *   i potrafi wypchnąć pokrywkę — najczęstsze poparzenie
 *   w domowej kuchni,
 * — że mokra ścierka przewodzi ciepło i to jest częsty błąd,
 * — że najbezpieczniejsza droga to ŻADNA droga: zupa zmiksowana
 *   w tym samym naczyniu, w którym się gotowała,
 * — UCZCIWIE: naczynie tego urządzenia po gotowaniu też jest
 *   gorące, ma masę i trzeba je nosić dwiema rękami,
 * — i że dzbanek nalewa się lepiej niż garnek — geometria,
 *   nie technologia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI PORAD MEDYCZNYCH
 *   — o oparzeniach piszę wyłącznie jako o rzeczy, której
 *   się unika, NIGDY jak je leczyć.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta (Frauenburg).
 * — ZERO roku 1945 i zniszczeń katedry. Utratę praw miejskich
 *   podaję jako fakt administracyjny, bez przyczyny.
 * — ZERO wysiedleń.
 * — ZERO Przekopu Mierzei Wiślanej — temat politycznie
 *   obciążony, silnie kojarzony z okolicą. POMIJAM CAŁKOWICIE.
 * — ZERO poszukiwań i badań szczątków Kopernika — temat
 *   grobowy, niepotrzebny.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Garnki i naczynia
 * odziedziczone” (Krośniewice) dotyczą sprzętu. „Ciepło, które
 * zostaje” (Błaszki) dotyczy stygnięcia. „Różnica temperatur”
 * (Miłomłyn) dotyczy dodawania zimnego do gorącego. Tutaj
 * chodzi o SAM RUCH: przeniesienie gorącej rzeczy z miejsca
 * na miejsce.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że wieżę wodną zbudował Kopernik — nie zbudował.
 * — NIE PRZYPISUJĘ Kopernikowi autorstwa kanału.
 * — NIE OBIECUJĘ wejścia na taras wieży Radziejowskiego.
 * — NIE PODAJĘ godzin otwarcia ani cen biletów muzeum.
 * — NIE PRZYPISUJĘ Fromborkowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow — nie należy.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 993, gmina 3 040 mieszkańców, 11 sołectw,
 * — prawa miejskie nadane 8 lipca 1310 r. przez biskupa
 *   warmińskiego Eberharda z Nysy na prawie lubeckim,
 *   przywrócone w 1959 r.,
 * — katedra wznoszona w latach 1329–1388,
 * — Wzgórze Katedralne uznane za Pomnik Historii
 *   8 września 1994 r.,
 * — wieża wodna z lat 1571–1572, dzieło rurmistrza Valentina
 *   Hendella, podnosiła wodę na około 25 m i działała do
 *   1911 r.; przypisywanie jej Kopernikowi to legenda
 *   z lat 1664–1680,
 * — kanał z rzeki Baudy o długości około 5,9 km, kopany
 *   w XIV w.,
 * — wieża Radziejowskiego z 1685 r., dziś mieści planetarium,
 * — Zalew Wiślany ma 860 km² powierzchni przy głębokości
 *   zaledwie 3–5 m.
 */
export const FROMBORK: CityContent = {
  slug: "frombork",
  h1: "Thermomix Frombork – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Frombork na Warmii — przedstawiciel i cena",
  seoDescription:
    "Thermomix we Fromborku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Frombork — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Fromborku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Fromborka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Frombork i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najbezpieczniejsza droga gorącego garnka to żadna droga.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Fromborku – jak wygląda prezentacja?",
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
      id: "przenoszenie-goracego",
      heading: "Wieża, która podnosiła wodę — czyli o przenoszeniu gorącego",
      paragraphs: [
        "We Fromborku stoi wieża wodna z lat 1571–1572. Zbudował ją rurmistrz Valentin Hendell, podnosiła wodę na jakieś dwadzieścia pięć metrów i pracowała do 1911 roku — ponad trzysta lat. Przez wieki opowiadano, że postawił ją Kopernik; ta wersja pojawiła się dopiero między 1664 a 1680 rokiem, ponad sto lat po jego śmierci, i nie ma z prawdą nic wspólnego. Urządzenie działało bez zarzutu, tylko było podpisane cudzym nazwiskiem.",
        "Cała funkcja tej wieży sprowadzała się do jednego: przenieść wodę tam, gdzie jest potrzebna. I to jest w kuchni czynność, o której nie pisze żaden przepis, a przy której dochodzi do większości wypadków.",
        "Przepisy kończą zdanie na „zmiksuj” albo „przelej do miski”. Nie piszą, jak przenieść trzy litry wrzącej zupy przez kuchnię, w której na podłodze leży dywanik, a pod nogami kręci się dziecko. A to jest ten moment.",
        "Kilka zasad, których trzymam się bez wyjątku. Naczynie stawia się na blacie i dopiero potem nalewa — nigdy nie trzyma się garnka w powietrzu jedną ręką, a chochli w drugiej. Nigdy nie przenosi się gorącego nad sobą ani nad kimkolwiek, kto jest niżej. I zawsze garnek idzie do miski, a nie miska do garnka: to, co cięższe i gorętsze, powinno się ruszać jak najmniej.",
        "Osobna sprawa: gorący płyn w kielichowym blenderze. Para rozpręża się w zamkniętym kielichu i potrafi wypchnąć pokrywkę razem z zawartością. To jedna z najczęstszych przyczyn poparzeń w domowej kuchni i praktycznie nikt o tym nie uprzedza. Jeśli ktoś w ten sposób miksuje zupę, powinien to robić partiami i nie do pełna.",
        "Drobiazg, który kosztuje najwięcej: mokra ścierka. Wilgoć przewodzi ciepło znacznie lepiej niż suchy materiał, więc chwyt mokrą ścierką parzy natychmiast, choć wygląda tak samo jak suchą. Warto mieć na to jedną suchą, odłożoną osobno.",
        "A najlepsze rozwiązanie problemu przenoszenia jest takie, że się nie przenosi. Zupa zmiksowana w tym samym naczyniu, w którym się gotowała, nie odbywa żadnej drogi. Sos zagęszczony na miejscu też nie. To jest realna korzyść z gotowania w jednym naczyniu i ona nie ma nic wspólnego ze zmywaniem — ma związek z tym, ile razy podnosicie coś wrzącego.",
        "Uczciwie druga strona: naczynie tego urządzenia po gotowaniu jest gorące, ma swoją masę i nosi się je dwiema rękami. Nie jest lekkie i nie udaję, że jest. Ale nalewa się z niego wyraźnie lepiej niż z garnka — bo ma dziobek i uchwyt ustawiony pod sensownym kątem. To geometria, nie technologia, i tyle warto o tym powiedzieć.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Fromborku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w kuchni kręcą Wam się dzieci i przenoszenie garnków jest realnym problemem, powiedzcie o tym przy umawianiu — pokażę wtedy dania, przy których nic nigdzie nie trzeba przelewać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Fromborku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla fromborskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa tysiące mieszkańców, a cała gmina nieco ponad trzy tysiące, w jedenastu sołectwach. Frombork leży na Warmii — prawa miejskie na prawie lubeckim nadał mu 8 lipca 1310 roku biskup warmiński Eberhard z Nysy, a po przerwie odzyskał je w 1959 roku. Katedrę wznoszono w latach 1329–1388, a całe Wzgórze Katedralne uznano 8 września 1994 roku za Pomnik Historii. Stoi tu też wieża Radziejowskiego z 1685 roku, dziś z planetarium, i wieża wodna z lat 1571–1572. Miasto leży nad Zalewem Wiślanym, który ma osiemset sześćdziesiąt kilometrów kwadratowych powierzchni przy głębokości zaledwie trzech do pięciu metrów.",
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

  districtsHeading: "Do których części gminy Frombork dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich jedenastu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Frombork też przyjadę",
  nearbyParagraphs: [
    "Braniewo, Pieniężno, Młynary, Tolkmicko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Braniewo", "Pieniężno", "Młynary", "Tolkmicko"],

  about: blokOMnie("do Fromborka", "we Fromborku i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Fromborka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich jedenastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Fromborku"),
    {
      question: "Czy w Thermomixie da się uniknąć przelewania gorącej zupy?",
      answer:
        "W dużej mierze tak i to jest jego niedoceniana zaleta. Zupa gotuje się i miksuje w tym samym naczyniu, więc nie odbywa żadnej drogi przez kuchnię. Trzeba jednak wiedzieć, że samo naczynie po gotowaniu jest gorące i ma swoją masę — nosi się je dwiema rękami.",
    },
    {
      question: "Dlaczego nie należy miksować gorącej zupy w zwykłym blenderze kielichowym?",
      answer:
        "Bo para rozpręża się w zamkniętym kielichu i potrafi wypchnąć pokrywkę razem z zawartością. To jedna z najczęstszych przyczyn poparzeń w domowych kuchniach. Jeśli już, to partiami i nigdy do pełna.",
    },
    {
      question: "Czy wieżę wodną we Fromborku zbudował Kopernik?",
      answer:
        "Nie. Wieżę wzniósł w latach 1571–1572 rurmistrz Valentin Hendell, blisko trzydzieści lat po śmierci Kopernika. Przypisywanie jej astronomowi to legenda, która pojawiła się dopiero między 1664 a 1680 rokiem.",
    },
  ],

  geo: { lat: 54.3583, lng: 19.6789 },
};
