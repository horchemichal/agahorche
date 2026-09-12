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
 * BISZTYNEK — gmina miejsko-wiejska w powiecie bartoszyckim.
 * MIASTO 2 127, GMINA 5 601 (GUS 31.12.2024). 20 SOŁECTW
 * — jedyna gmina tej dziesiątki z potwierdzoną urzędowo
 * liczbą sołectw.
 * ⚠ Notatka projektowa podawała 2 400 — ZAWYŻONE o 11,4%,
 * najbardziej ze wszystkich.
 * NIE MA osobnej gminy wiejskiej.
 *
 * PRAWA MIEJSKIE 30 KWIETNIA 1385 r., nadał BISKUP WARMIŃSKI
 * HENRYK III SORBOM. DOKŁADNA DATA DZIENNA — rzadkość
 * w tej dziesiątce i podstawa kąta.
 * PRZYNALEŻNOŚĆ: WARMIA, domena BISKUPA (nie kapituły,
 * w odróżnieniu od Pieniężna).
 * PRAWA MIEJSKIE NIEPRZERWANE.
 *
 * KOŚCIÓŁ FARNY pw. ŚW. MACIEJA APOSTOŁA I PRZENAJDROŻSZEJ
 * KRWI PANA JEZUSA — gotyk, koniec XIV w.; wieża XVI w.;
 * rozbudowa 1739; rekonsekracja 4 sierpnia 1748; pożar 1770;
 * odbudowa późnobarokowa; rekonsekracja 5 sierpnia 1781.
 * Pełni funkcję sanktuarium.
 * ⚠ FORMALNEJ DATY USTANOWIENIA SANKTUARIUM NIE PODAJĘ —
 * nie potwierdzono. Wezwanie wiąże się z tradycją cudu
 * eucharystycznego — opisuję to WYŁĄCZNIE jako genezę
 * wezwania, nigdy jako fakt ani jako źródło uzdrowień.
 * MURY OBRONNE — ukończone przed 1510 r., trzy bramy:
 * Lidzbarska, Reszelska i Warszawska. ZACHOWAŁA SIĘ TYLKO
 * BRAMA LIDZBARSKA (1481–1547, obniżona i przebudowana
 * barokowo ok. 1780).
 * KOŚCIÓŁ ŚW. MICHAŁA — barokowy, 1632 r.
 * KAPLICA ŚW. MARTY — gotycka.
 * TARGI W PIĄTKI NIEPRZERWANIE OD 1579 r.
 * KOLEJ — 1905 r.
 * BISZTYNEK NALEŻY DO SIECI CITTASLOW. ROKU NIE PODAJĘ.
 *
 * KĄT: KIEDY LICZBY W PRZEPISIE MAJĄ ZNACZENIE, A KIEDY NIE.
 * Kąt od miasta, którego data lokacji jest znana co do dnia —
 * 30 kwietnia 1385 — podczas gdy przy większości sąsiadów
 * wiadomo tylko „gdzieś w tym wieku".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepisy udają, iż wszystkie liczby są równie ważne,
 *   a to nieprawda i to jest źródło niepotrzebnego stresu,
 * — gdzie liczby są WIĄŻĄCE: wypieki, wszystko z drożdżami
 *   i proszkiem do pieczenia, karmel, bezy, ciasta parzone
 *   — bo tam działa chemia i proporcja,
 * — gdzie liczby są WSKAZÓWKĄ: zupy, gulasze, sosy, farsze,
 *   sałatki, dania duszone — tam decyduje smak, nie waga,
 * — że rozpoznaje się to po jednym pytaniu: czy danie
 *   da się poprawić po fakcie,
 * — że w zamkniętym naczyniu granica przesuwa się w stronę
 *   liczb, bo nie da się doprawiać w trakcie,
 * — że liczba porcji jest najmniej wiarygodną liczbą
 *   w przepisie, i o tym pisałam osobno,
 * — i ODMOWA: nie podaję żadnych liczb, także tu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych
 *   o uzdrowieniach związanych z sanktuarium.
 * — ŻADNYCH NAZW FIRM.
 * — CUD EUCHARYSTYCZNY: tylko jako geneza wezwania kościoła.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i wysiedleń.
 * — ZERO granicy — powiat bartoszycki graniczy z obwodem
 *   kaliningradzkim.
 * — ZERO historii kościoła ewangelickiego spalonego w PRL.
 * — ZERO pomnika z usuniętą głową — temat obciążony.
 * — Obrzędy wielkanocne „od 1589 r." wymieniam BEZ wątku
 *   zarazy, który im towarzyszy w źródłach.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Przepisy w cudzych
 * miarach" dotyczą jednostek (szklanki, uncje). „Nieprecyzyjny
 * język przepisów" (Pelplin) dotyczy sformułowań w rodzaju
 * „szczypta". „Przepis, który sam sobie przeczy" (Morąg)
 * dotyczy wewnętrznych sprzeczności. „Kilogramy zamiast
 * porcji" dotyczą skalowania. Tutaj chodzi o HIERARCHIĘ:
 * które liczby trzeba uszanować, a które są sugestią.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty ustanowienia sanktuarium ani roku cudu.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PISZĘ o ratuszu ani wieży ciśnień — nie potwierdzono,
 *   że istnieją.
 * — NIE PODAJĘ jezior ani rzek w gminie — żadnych nie
 *   potwierdzono.
 * — NIE PRZYPISUJĘ Bisztynkowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Bisztynka z BISKUPCEM (dwa warmińskie miasta
 *   o nazwach od biskupa) ani z Bisztynkiem-Kolonią.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 127, gmina 5 601 mieszkańców, 20 sołectw,
 * — prawa miejskie nadane 30 kwietnia 1385 r. przez biskupa
 *   warmińskiego Henryka III Sorboma; Bisztynek leży na Warmii
 *   i był miastem biskupim,
 * — kościół farny świętego Macieja Apostoła i Przenajdroższej
 *   Krwi Pana Jezusa: gotycki z końca XIV w., wieża z XVI w.,
 *   rozbudowa w 1739 r., rekonsekracja 4 sierpnia 1748 r.,
 *   po pożarze z 1770 r. odbudowany w stylu późnobarokowym
 *   i ponownie konsekrowany 5 sierpnia 1781 r.,
 * — mury obronne ukończono przed 1510 r.; z trzech bram
 *   zachowała się tylko Lidzbarska, wzniesiona w latach
 *   1481–1547 i przebudowana barokowo około 1780 r.,
 * — barokowy kościół świętego Michała z 1632 r.,
 * — targi odbywają się w piątki nieprzerwanie od 1579 r.,
 * — kolej dotarła tu w 1905 r.,
 * — Bisztynek należy do sieci Cittaslow.
 */
export const BISZTYNEK: CityContent = {
  slug: "bisztynek",
  h1: "Thermomix Bisztynek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bisztynek na Warmii — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bisztynku na Warmii: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bisztynek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bisztynku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bisztynka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Bisztynek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepisy udają, że wszystkie liczby są równie ważne. Nie są.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bisztynku – jak wygląda prezentacja?",
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
      id: "kiedy-liczby",
      heading: "Miasto z datą co do dnia — czyli kiedy liczby w przepisie naprawdę mają znaczenie",
      paragraphs: [
        "O większości warmińskich miasteczek wiadomo mniej więcej, kiedy powstały: „w połowie czternastego wieku”, „przed 1367 rokiem”. O Bisztynku wiadomo dokładnie: prawa miejskie nadał mu biskup warmiński Henryk III Sorbom 30 kwietnia 1385 roku. Data dzienna, bez zastrzeżeń. Zachowała się też Brama Lidzbarska z lat 1481–1547 — jedyna z trzech, jakie miały tutejsze mury — a targi odbywają się tu w piątki nieprzerwanie od 1579 roku.",
        "Miasto, o którym akurat wiadomo co do dnia, jest dobrym miejscem na pytanie, które w kuchni powoduje więcej stresu niż jakiekolwiek inne: czy trzeba trzymać się liczb z przepisu.",
        "Odpowiedź brzmi: czasem tak, a czasem w ogóle. I to, że przepisy udają, iż wszystkie liczby są równie ważne, jest jedną z najbardziej szkodliwych konwencji w pisaniu o gotowaniu.",
        "Są dania, w których liczby są wiążące i nie ma z nimi dyskusji. Wszystkie wypieki. Wszystko, co rośnie — z drożdżami, z proszkiem do pieczenia, z sodą. Karmel. Bezy. Ciasto parzone. Tam działa chemia i proporcja: za dużo mąki i ciasto nie wyrośnie, za mało tłuszczu i nie będzie kruche. Nie da się tego poprawić po upieczeniu, bo reakcja już zaszła.",
        "I są dania, w których liczby są wyłącznie wskazówką. Zupy, gulasze, sosy, farsze, dania duszone, sałatki, pasty. Tam nikt nie zauważy pół marchewki różnicy, a o wyniku decyduje próbowanie, a nie waga. Kto waży cebulę do zupy, marnuje życie.",
        "Rozróżnienie robi się jednym pytaniem, które warto sobie zadawać nad każdym przepisem: czy to danie da się poprawić po fakcie? Jeśli tak — liczby są sugestią. Jeśli nie — są instrukcją.",
        "W tym urządzeniu granica przesuwa się jednak w stronę liczb i to trzeba powiedzieć uczciwie. W garnku poprawiacie w trakcie: próbujecie, dosypujecie, dolewacie. W zamkniętym naczyniu wszystko rozstrzyga się na wejściu, a próbować można dopiero na końcu. Dlatego przy sprzęcie warto ważyć nawet te rzeczy, które w garnku szło się „na oko” — nie dlatego, że przepis tego wymaga, tylko dlatego, że nie ma jak skorygować.",
        "Jedna liczba jest przy tym najmniej wiarygodna ze wszystkich i pisałam o niej osobno: liczba porcji. To zwykle nagłówek dopisany na końcu, nie wynik obliczenia.",
        "I granica: nie podam Wam żadnych liczb, także na tej stronie. Nie z przekory — po prostu każda proporcja, którą bym tu wpisała, byłaby oderwana od tego, co konkretnie gotujecie. Wolę, żebyście wiedzieli, kiedy liczbę trzeba uszanować, a kiedy można ją zignorować bez żadnej szkody.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bisztynku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli gotujecie „na oko” i zastanawiacie się, czy przy tym urządzeniu da się tak dalej — powiedzcie przy umawianiu. Odpowiedź brzmi: przy części dań tak, przy części nie, i chętnie pokażę, gdzie przebiega granica.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bisztynku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bisztyneckiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwa tysiące stu mieszkańców, a cała gmina blisko pięć tysięcy sześćset, w dwudziestu sołectwach. Bisztynek leży na Warmii i był miastem biskupim — prawa miejskie nadał mu 30 kwietnia 1385 roku biskup warmiński Henryk III Sorbom. Najważniejszy zabytek to kościół farny świętego Macieja Apostoła i Przenajdroższej Krwi Pana Jezusa: gotycki z końca czternastego wieku, z wieżą z szesnastego, rozbudowany w 1739 roku i po pożarze z 1770 odbudowany w stylu późnobarokowym; ponownie konsekrowano go 5 sierpnia 1781 roku. Z murów obronnych ukończonych przed 1510 rokiem została jedna z trzech bram — Lidzbarska. Stoi tu też barokowy kościół świętego Michała z 1632 roku. Targi odbywają się w piątki nieprzerwanie od 1579 roku, a miasto należy do sieci Cittaslow.",
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

  districtsHeading: "Do których części gminy Bisztynek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Bisztynek też przyjadę",
  nearbyParagraphs: [
    "Reszel, Lidzbark Warmiński, Jeziorany, Korsze i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Reszel", "Lidzbark Warmiński", "Jeziorany", "Korsze"],

  about: blokOMnie("do Bisztynka", "w Bisztynku i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Bisztynka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo obie nazwy pochodzą od biskupa i stale się mylą: Bisztynek to nie Biskupiec. To dwa różne warmińskie miasta, w dwóch różnych powiatach.",
    },
    ...faqWspolne("w Bisztynku"),
    {
      question: "Czy trzeba dokładnie trzymać się liczb z przepisu?",
      answer:
        "Zależy od dania. Przy wypiekach, wszystkim, co rośnie, karmelu, bezach i cieście parzonym liczby są wiążące, bo tam działa chemia i nie da się tego poprawić po upieczeniu. Przy zupach, gulaszach, sosach i farszach są wyłącznie wskazówką — decyduje próbowanie, nie waga.",
    },
    {
      question: "Jak rozpoznać, do której grupy należy danie?",
      answer:
        "Jednym pytaniem: czy da się je poprawić po fakcie. Jeśli tak — liczby są sugestią. Jeśli nie — są instrukcją. To rozróżnienie oszczędza więcej nerwów niż jakakolwiek technika.",
    },
    {
      question: "Czy w Thermomixie można gotować „na oko”?",
      answer:
        "Trudniej niż w garnku i warto to wiedzieć. W garnku poprawiacie w trakcie: próbujecie, dosypujecie, dolewacie. W zamkniętym naczyniu wszystko rozstrzyga się na wejściu, więc opłaca się ważyć nawet to, co dawniej szło na oko — nie dlatego, że przepis tego wymaga, tylko dlatego, że nie ma jak skorygować.",
    },
  ],

  geo: { lat: 54.0858, lng: 20.904 },
};
