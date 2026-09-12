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
 * KOLUSZKI — gmina miejsko-wiejska w powiecie łódzkim wschodnim.
 * MIASTO 11 961 mieszkańców, CAŁA GMINA 22 239 (31.12.2024, GUS).
 * Brief mówił 13 000 — zawyżone dla miasta.
 *
 * PRAWA MIEJSKIE 1 KWIETNIA 1949 r., zarządzeniem Ministra
 * Administracji Publicznej. UWAGA: w 1940 r. status miasta nadali
 * okupanci — NIE BYŁ UZNAWANY I NIE PISZĘ O NIM.
 *
 * WĘZEŁ KOLEJOWY — OŚ MIASTA. 1846 Kolej Warszawsko-Wiedeńska;
 * 1866 Droga Żelazna Fabryczno-Łódzka — to dało Koluszkom status
 * pierwszego węzła kolejowego w Królestwie Polskim; 1885 odnoga
 * Kolei Iwangorodzko-Dąbrowskiej.
 * OBALONE: węzeł NIE PODUPADŁ. Liczba pasażerów wzrosła z 767
 * tys. (2017) do 1,76 MLN (2024); w 2025 r. zatrzymywało się tu
 * 180 POCIĄGÓW DZIENNIE. Nowy dworzec udostępniono podróżnym
 * 24 stycznia — ROKU NIE PODAJĘ, bo źródła wskazują 2024 albo
 * 2025.
 * LICZBY LINII NIE PODAJĘ — źródła podają 4 albo 5 przy różnej
 * numeracji. Piszę opisowo: magistrala Warszawa–Katowice spotyka
 * się tu z linią do Łodzi Fabrycznej i z kierunkiem na Tomaszów.
 *
 * JEDNOSTKI POMOCNICZE — jedne z niewielu potwierdzonych
 * pełnych wykazów w całym serwisie: 9 OSIEDLI MIEJSKICH
 * (11 Listopada, Czarnieckiego, Głowackiego, Łódzkie, Łódzkie II,
 * Natolin, Staromiejskie, Warszawskie, Zieleń Południe)
 * i 24 SOŁECTWA.
 *
 * OBALONE: „Koluszki-Wieś" NIE ISTNIEJE jako miejscowość.
 * Jednostka statystyczna nazywa się „gmina Koluszki — obszar
 * wiejski" i to jest prawdopodobne źródło mitu.
 * NIE PISZĘ, że działa tu jakikolwiek konkretny zakład —
 * jednego z dawniej wymienianych nie ma już na liście firm
 * strefy w raporcie gminy za 2024 r., a zatrudnienia
 * w pozostałych nie ustalono.
 *
 * KĄT: BLAT I ŚCIERECZKA — czyli ile miejsca zajmuje bałagan
 * wokół urządzenia i ile trzeba posprzątać po każdym gotowaniu.
 * Kąt pasuje do miasta, w którym wszystko musi być gotowe
 * na czas i uprzątnięte między jednym a drugim.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie zajmuje na blacie więcej miejsca, niż
 *   wygląda na zdjęciach — bo do jego bryły trzeba doliczyć
 *   miejsce OBOK, na odkładanie pokrywki i nasadki,
 * — że pokrywka i Varoma muszą mieć gdzie stanąć, i to jest
 *   najczęściej pomijany warunek przy planowaniu kuchni,
 * — że nad urządzeniem musi być wolna przestrzeń — pod szafką
 *   wiszącą nisko nie zdejmie się nasadki,
 * — że po pracy zostaje mokry ślad i okruchy wokół podstawy,
 *   niezależnie od tego, jak się gotuje,
 * — że dobra ściereczka i wolne trzydzieści centymetrów obok
 *   zmieniają w tym więcej niż jakakolwiek funkcja,
 * — i że to wszystko trzeba sprawdzić PRZED zakupem, a nie po.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH WYMIARÓW W CENTYMETRACH z pamięci. Ani urządzenia,
 *   ani nasadki, ani wysokości pod szafką. Odsyłam do sprawdzenia
 *   na miejscu i do instrukcji producenta.
 * — ŻADNYCH INSTRUKCJI CZYSZCZENIA URZĄDZENIA — to temat
 *   instrukcji producenta i ma w serwisie własną stronę.
 * — ŻADNYCH ŚRODKÓW CHEMICZNYCH z nazwy.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ o zadłużeniu gminy ani o ubytku ludności.
 * — NIE DOTYKAM okresu okupacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU JEST WAŻNE.
 * „Zmywanie" (inne miasto) dotyczy naczyń i zmywarki.
 * „Czyszczenie urządzenia" (Krapkowice) dotyczy uszczelki, noża
 * i tego, co się rozkręca. „Mała kuchnia i blat" (Zawichost)
 * dotyczy metrażu kuchni jako całości i tego, gdzie sprzęt
 * w ogóle postawić. „Skropliny i wykipienie" (Skarszewy)
 * dotyczą wody spod pokrywki. Tutaj chodzi o STREFĘ WOKÓŁ
 * URZĄDZENIA: o miejsce na odkładanie pokrywki i nasadki,
 * o wolną przestrzeń nad nim i o ślad, który zostaje po pracy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby linii kolejowych ani roku otwarcia
 *   nowego dworca.
 * — NIE PISZĘ o żadnym zakładzie z nazwy i nie twierdzę,
 *   że którykolwiek jest największym pracodawcą.
 * — NIE PISZĘ o „Koluszkach-Wsi".
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych —
 *   dla tej gminy nie ma żadnego i tego nie zmyślam.
 * — NIE PODAJĘ żadnych wymiarów.
 * — districts: wpisuję POTWIERDZONE dziewięć osiedli
 *   statutowych miasta.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 11 961, gmina 22 239 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 1 kwietnia 1949 r.,
 * — historia węzła: 1846 Kolej Warszawsko-Wiedeńska, 1866 Droga
 *   Żelazna Fabryczno-Łódzka (status pierwszego węzła kolejowego
 *   w Królestwie Polskim), 1885 odnoga kolei
 *   iwangorodzko-dąbrowskiej,
 * — liczba pasażerów wzrosła z 767 tys. w 2017 r. do 1,76 mln
 *   w 2024 r.; w 2025 r. 180 pociągów dziennie; nowy dworzec
 *   udostępniony podróżnym,
 * — miasto dzieli się na dziewięć osiedli, gmina ma 24 sołectwa,
 * — ponad 2000 zarejestrowanych podmiotów w gminie,
 * — 5 szkół podstawowych, 1890 uczniów.
 */
export const KOLUSZKI: CityContent = {
  slug: "koluszki",
  h1: "Thermomix Koluszki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Koluszki (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Koluszkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i sołectwa gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Koluszki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Koluszkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Koluszek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich osiedli i do sołectw gminy.",

  highlights: highlightyStandardowe("Koluszki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sprawdźcie miejsce OBOK. Nie tylko pod spodem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koluszkach – jak wygląda prezentacja?",
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
      id: "blat",
      heading: "Sto osiemdziesiąt pociągów dziennie — czyli o blacie i o ściereczce",
      paragraphs: [
        "Koluszki są węzłem od 1846 roku, gdy przyszła tu Kolej Warszawsko-Wiedeńska, a status pierwszego węzła kolejowego w Królestwie Polskim dała im Droga Żelazna Fabryczno-Łódzka w 1866. Wbrew temu, co się o małych miastach zwykle pisze, ten węzeł nie podupadł: liczba pasażerów wzrosła z siedmiuset sześćdziesięciu siedmiu tysięcy w 2017 roku do miliona siedmiuset sześćdziesięciu tysięcy w 2024, zatrzymuje się tu około stu osiemdziesięciu pociągów dziennie, a dworzec jest nowy. Miejsce, w którym wszystko musi być gotowe na czas i uprzątnięte, zanim przyjedzie następny.",
        "Napiszę więc o rzeczy, której nie ma w żadnej broszurze: o miejscu wokół urządzenia i o tym, co po nim zostaje na blacie.",
        "Pierwsza rzecz, na której ludzie się przeliczają: to urządzenie zajmuje więcej miejsca, niż wynika z jego wymiarów. Nie dlatego, że jest duże, tylko dlatego, że do jego bryły trzeba doliczyć strefę obok. Zdejmowaną pokrywkę trzeba gdzieś położyć — mokrą od skroplin. Nasadkę do gotowania na parze też, a ona jest spora i gorąca. Miskę, do której się przekłada. Deskę. W praktyce potrzebne jest wolne miejsce z boku, i to jest warunek, o którym nikt nie mówi przed zakupem, a który decyduje o tym, czy sprzęt zostanie na blacie, czy wyląduje w szafce.",
        "Druga rzecz, jeszcze częściej pomijana: przestrzeń NAD urządzeniem. Jeżeli szafka wisi nisko, nie zdejmiecie nasadki — a nasadka jest wysoka. Zanim kupicie, stańcie w swojej kuchni i sprawdźcie to ręką. Nie podam Wam żadnych centymetrów z pamięci, bo podawanie wymiarów na wyczucie jest właśnie tym, przez co potem coś nie wchodzi; wymiary są w instrukcji producenta, a naczynie i nasadkę pokażę na spotkaniu i przymierzymy je u Was na miejscu.",
        "Trzecia rzecz, prozaiczna: po każdym gotowaniu zostaje ślad. Wilgoć wokół podstawy od pary, okruchy, kropla oleju, mąka. Nie dlatego, że coś jest nie tak — po prostu tak działa gotowanie. Różnicę robi tu jedna ściereczka trzymana pod ręką, a nie w drugim końcu kuchni. Brzmi jak porada dla dzieci, a jest to rzecz, która realnie decyduje o tym, czy po obiedzie kuchnia wygląda jak kuchnia.",
        "Czego tu nie znajdziecie: instrukcji, jak samo urządzenie rozebrać i umyć. To jest temat instrukcji producenta i pisałam o nim osobno, przy innym mieście. Nie podam też żadnego środka z nazwy.",
        "I wniosek, który kosztuje mnie sprzedaż, więc tym bardziej go napiszę: jeżeli w Waszej kuchni nie ma wolnego miejsca obok i nad blatem, to jest realny argument, żeby się wstrzymać albo najpierw przestawić kuchnię. Sprzęt bez swojego miejsca jest sprzętem chowanym, a sprzęt chowany przestaje być używany po miesiącu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Koluszkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu przymierzymy urządzenie w Waszej kuchni: gdzie stanie, gdzie odłożycie pokrywkę i czy nasadka zmieści się pod szafką. To zajmuje dwie minuty i bywa ważniejsze niż połowa funkcji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Koluszkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla koluszkowskiej rodziny",
      paragraphs: [
        "Samo miasto Koluszki liczy blisko dwanaście tysięcy mieszkańców, a cała gmina ponad dwadzieścia dwa tysiące. Prawa miejskie miasto otrzymało 1 kwietnia 1949 roku, ale jego historia zaczyna się sto lat wcześniej, od kolei: w 1846 przyszła tu Kolej Warszawsko-Wiedeńska, w 1866 Droga Żelazna Fabryczno-Łódzka, a w 1885 odnoga kolei iwangorodzko-dąbrowskiej. Dziś magistrala Warszawa–Katowice spotyka się tu z linią do Łodzi Fabrycznej i z kierunkiem na Tomaszów. Miasto dzieli się na dziewięć osiedli, a gmina ma dwadzieścia cztery sołectwa; działa w niej ponad dwa tysiące zarejestrowanych firm i pięć szkół podstawowych, do których chodzi blisko tysiąc dziewięćset dzieci.",
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

  districtsHeading: "Do których osiedli i sołectw gminy Koluszki dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewięciu osiedli miasta i do wszystkich dwudziestu czterech sołectw gminy — Będzelina, Gałkowa Dużego i Małego, Różycy, Żakowic, Przanowic, Regien i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać osiedle albo miejscowość i ulicę.",
  ],
  districts: [
    "Staromiejskie",
    "Łódzkie",
    "Łódzkie II",
    "Warszawskie",
    "Natolin",
    "Zieleń Południe",
    "11 Listopada",
    "Czarnieckiego",
    "Głowackiego",
  ],

  nearbyHeading: "Poza Koluszki też przyjadę",
  nearbyParagraphs: [
    "Łódź, Brzeziny, Tomaszów Mazowiecki, Rzgów, Stryków, Rawa Mazowiecka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łódź", "Brzeziny", "Tomaszów Mazowiecki", "Rzgów", "Stryków"],

  about: blokOMnie("do Koluszek", "w Koluszkach i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do sołectw gminy Koluszki?",
      answer:
        "Tak, do wszystkich dwudziestu czterech — Będzelina, Gałkowa Dużego i Małego, Różycy, Żakowic i pozostałych — oraz do wszystkich dziewięciu osiedli miasta. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w Koluszkach"),
    {
      question: "Ile miejsca zajmuje to urządzenie na blacie?",
      answer:
        "Więcej, niż wynika z jego wymiarów — bo do bryły trzeba doliczyć wolne miejsce obok. Zdejmowaną pokrywkę, mokrą od skroplin, trzeba gdzieś położyć; nasadkę do gotowania na parze też, a jest spora i gorąca. Wymiarów nie podam z pamięci: są w instrukcji producenta, a na spotkaniu przymierzymy naczynie u Was na miejscu.",
    },
    {
      question: "Czy zmieści się pod szafką wiszącą?",
      answer:
        "To trzeba sprawdzić przed zakupem, w swojej kuchni, ręką. Samo urządzenie zwykle się mieści, ale przy niskiej szafce nie zdejmiecie nasadki do gotowania na parze — a ona jest wysoka. To jeden z najczęściej pomijanych warunków.",
    },
    {
      question: "Czy po gotowaniu zostaje bałagan?",
      answer:
        "Zostaje ślad: wilgoć wokół podstawy od pary, okruchy, kropla oleju. Tak działa gotowanie i żaden sprzęt tego nie zmieni. Różnicę robi ściereczka trzymana pod ręką. A jeżeli w kuchni nie ma wolnego miejsca obok i nad blatem, to realny argument, żeby się wstrzymać — sprzęt chowany do szafki przestaje być używany po miesiącu.",
    },
  ],

  geo: { lat: 51.7383, lng: 19.8196 },
};
