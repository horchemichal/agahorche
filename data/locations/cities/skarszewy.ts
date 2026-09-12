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
 * SKARSZEWY — miasto w powiecie starogardzkim, 6 587
 * mieszkańców (31.12.2024, GUS). Brief mówił 6 800.
 *
 * JOANNICI od ok. 1198 r. PRAWA MIEJSKIE 1320 r. — nadane
 * przez zakon joannitów, nie przez księcia. Mury miejskie
 * uchodzą za jedne z najlepiej zachowanych na Pomorzu
 * Gdańskim (tak podaje jedno źródło — zapisuję to jako
 * OPINIĘ ŹRÓDŁA, nie jako fakt bezsporny).
 *
 * JÓZEF WYBICKI praktykował prawo w tutejszym zamku
 * w latach 1762–1765.
 *
 * PRZEMYSŁ: zakład produkujący papę, inwestycja rzędu 130 mln
 * zł; decyzja o wsparciu wydana przez pomorską strefę
 * ekonomiczną w październiku 2025 r. była jej 500. decyzją.
 * NAZWY FIRMY NIE PODAJĘ.
 *
 * KĄT: SKROPLINY I WYKIPIENIE — woda, która zbiera się pod
 * pokrywką i na blacie, oraz to, co się dzieje, gdy naczynie
 * przepełnisz. Kąt „para" jest ZAJĘTY, więc tekst mówi
 * o SKROPLINACH i o WYKIPIENIU, nie o gotowaniu na parze.
 * Kąt bierze się z murów miejskich i z zamku: budowli, przy
 * których o wodzie i o tym, gdzie ona spływa, myślano od
 * ośmiuset lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pod pokrywką i pod nasadką zbiera się woda i to jest
 *   normalne, nie usterka,
 * — że przy zdejmowaniu pokrywki ta woda leci na blat i na
 *   rękę — konkretna, drobna rzecz, której nikt nie mówi przed
 *   zakupem,
 * — że mokry blat pod urządzeniem to najczęstsza „awaria",
 *   jaką zgłaszają klientki, i że to nie jest awaria,
 * — że przy przepełnionym naczyniu treść wychodzi górą przez
 *   otwór w pokrywce i to jest wykipienie — dokładnie takie
 *   samo jak w garnku,
 * — że mleko, kasza, groch i wszystko, co się pieni, są tu
 *   tak samo niebezpieczne jak na kuchence,
 * — że ODMAWIAM podawania maksymalnych poziomów napełnienia
 *   z pamięci — od tego jest oznaczenie na naczyniu
 *   i instrukcja producenta.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH POJEMNOŚCI W LITRACH ANI POZIOMÓW MAKSYMALNYCH
 *   z pamięci. ODSYŁAM DO INSTRUKCJI.
 * — ŻADNYCH INSTRUKCJI ROZBIERANIA I MYCIA URZĄDZENIA —
 *   to temat instrukcji producenta i ma własną stronę.
 * — ŻADNYCH ŚRODKÓW CHEMICZNYCH z nazwy.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czyszczenie urządzenia"
 * (Krapkowice) dotyczy uszczelki, noża i mycia. „Gotowanie na
 * parze" i „para" są zajęte gdzie indziej. „Mała kuchnia
 * i blat" (Zawichost) dotyczy miejsca. Tutaj chodzi o WODĘ,
 * KTÓRA POJAWIA SIĘ TAM, GDZIE JEJ NIE CHCESZ — skropliny
 * i wykipienie — czyli o dwa drobiazgi, które w recenzjach
 * są najczęstszym rozczarowaniem.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że mury Skarszew są najlepiej zachowane
 *   na Pomorzu Gdańskim jako fakt. Piszę, że tak się uważa.
 * — NIE PODAJĘ nazwy zakładu ani liczby zatrudnionych.
 * — NIE PISZĘ, że zamek jest udostępniony do zwiedzania.
 * — NIE PODAJĘ żadnych liczb dotyczących pojemności.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 6 587 mieszkańców (31.12.2024, GUS),
 * — joannici w Skarszewach od ok. 1198 r.; prawa miejskie
 *   nadane przez zakon w 1320 r.,
 * — zachowane mury miejskie, uważane za jedne z najlepiej
 *   zachowanych na Pomorzu Gdańskim,
 * — Józef Wybicki praktykował prawo w tutejszym zamku
 *   w latach 1762–1765,
 * — powstający zakład produkcji papy, inwestycja rzędu
 *   130 mln zł, wsparcie przyznane w październiku 2025 r.
 */
export const SKARSZEWY: CityContent = {
  slug: "skarszewy",
  h1: "Thermomix Skarszewy – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skarszewy (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Skarszewach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skarszewy — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skarszewach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skarszew z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Skarszewy i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mokry blat pod urządzeniem to nie awaria. To skropliny.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skarszewach – jak wygląda prezentacja?",
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
      id: "skropliny",
      heading: "Osiemset lat myślenia o wodzie — czyli o skroplinach i wykipieniu",
      paragraphs: [
        "Skarszewy mają mury miejskie uchodzące za jedne z najlepiej zachowanych na Pomorzu Gdańskim, zamek, w którym młody Józef Wybicki praktykował prawo w latach 1762–1765, i historię sięgającą joannitów, którzy siedzieli tu już około 1198 roku. Przy takich budowlach od zawsze najważniejsze pytanie brzmiało: gdzie spłynie woda. Więc napiszę o wodzie w kuchni — o tej, która pojawia się tam, gdzie jej nie chcesz. To są dwa drobiazgi, których nikt nie mówi przed zakupem, a które w opiniach użytkowników wracają najczęściej.",
        "Pierwszy: skropliny. Kiedy w naczyniu robi się gorąco, para skrapla się na spodzie pokrywki i pod nasadką. To jest fizyka i nie da się tego wyłączyć — to nie jest usterka, mimo że wygląda jak przeciek. Praktyczna konsekwencja jest taka: kiedy zdejmujesz pokrywkę, ta zebrana woda spływa. Na blat, na rękę, czasem na podłogę. Nauczysz się tego po trzech razach — zdejmuje się ją ruchem lekko do siebie i od razu odkłada na talerz albo na ściereczkę — ale przez te trzy razy będziesz przecierać blat i się złościć.",
        "Powiem to wprost, bo to jest najczęstsze zgłoszenie, jakie dostaję od klientek w pierwszym miesiącu: „mokro pod urządzeniem, chyba mi cieknie”. Nie cieknie. To skropliny i tyle.",
        "Drugi drobiazg: wykipienie. W pokrywce jest otwór, w otworze siedzi miarka, a to znaczy, że przy zbyt pełnym naczyniu treść po prostu wyjdzie górą. Dokładnie tak samo, jak wykipiałoby z garnka. Mleko, kasza, groch, ryż, wszystko, co się pieni i rośnie — zachowuje się tu tak samo jak na kuchence, a nie inaczej. Kto myśli, że kupuje sprzęt, w którym nic nigdy nie wykipi, kupuje wyobrażenie.",
        "Nie podam Wam żadnych liczb: ani pojemności, ani maksymalnego poziomu, ani tego, ile mleka „można”. Na naczyniu jest oznaczenie i jest instrukcja producenta — i to są jedyne miejsca, z których warto brać takie dane. Podawanie ich z pamięci przez sprzedawcę to jest dokładnie ten rodzaj usługi, przez który potem coś się wylewa.",
        "Nie będę też tutaj tłumaczyć, jak urządzenie rozebrać i umyć — to jest osobny temat i należy do instrukcji, nie do mnie.",
        "Po co więc o tym w ogóle piszę, skoro to same wady? Bo wolę, żebyście usłyszeli o mokrym blacie ode mnie przed zakupem niż od siebie samych po tygodniu. Sprzęt, którego wad ktoś Wam nie powiedział, zawsze rozczarowuje bardziej niż ten, o którym wiedzieliście wszystko.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skarszewach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokażę Wam skropliny na własne oczy — razem ze sposobem zdejmowania pokrywki, żeby nie lały się na blat. To zajmuje pół minuty i oszczędza miesiąc irytacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skarszewach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skarszewskiej rodziny",
      paragraphs: [
        "Skarszewy liczą nieco ponad sześć i pół tysiąca mieszkańców, a ich historia zaczyna się od joannitów, którzy byli tu już około 1198 roku; to właśnie zakon nadał miastu prawa miejskie w 1320 roku. Zachowały się mury miejskie, uważane za jedne z najlepiej zachowanych na Pomorzu Gdańskim, i zamek, w którym w latach 1762–1765 praktykował prawo młody Józef Wybicki. W ostatnich latach doszło coś nowego: powstaje tu zakład produkcji papy, inwestycja rzędu stu trzydziestu milionów złotych, wsparta decyzją pomorskiej strefy ekonomicznej z października 2025 roku.",
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

  districtsHeading: "Do których części Skarszew dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Godziszewa, Pogódek, Bolesławowa, Więckowów, Demlina i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Skarszewy też przyjadę",
  nearbyParagraphs: [
    "Starogard Gdański, Kościerzyna, Pelplin, Tczew, Pruszcz Gdański i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Starogard Gdański", "Kościerzyna", "Pelplin", "Tczew", "Pruszcz Gdański"],

  about: blokOMnie("do Skarszew", "w Skarszewach i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Skarszew bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Skarszewach"),
    {
      question: "Pod urządzeniem robi mi się mokro. Czy to awaria?",
      answer:
        "Prawie na pewno nie. To skropliny: para skrapla się pod pokrywką i pod nasadką, a przy zdejmowaniu pokrywki ta woda spływa na blat. Pokrywkę zdejmuje się ruchem lekko do siebie i od razu odkłada na talerz. To najczęstsze zgłoszenie, jakie dostaję w pierwszym miesiącu — i najczęściej nie jest usterką.",
    },
    {
      question: "Czy coś może w nim wykipieć?",
      answer:
        "Tak. W pokrywce jest otwór z miarką, więc przy zbyt pełnym naczyniu treść wyjdzie górą — tak samo jak z garnka. Mleko, kasza, groch i ryż zachowują się tu jak na kuchence.",
    },
    {
      question: "Ile maksymalnie mogę wlać?",
      answer:
        "Nie podam Ci liczby z pamięci i uważam, że żaden sprzedawca nie powinien. Na naczyniu jest oznaczenie poziomu, a w instrukcji producenta konkretne dane — i to są jedyne miejsca, z których warto to brać.",
    },
  ],

  geo: { lat: 54.0783, lng: 18.4353 },
};
