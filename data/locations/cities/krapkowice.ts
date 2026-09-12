import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * KRAPKOWICE — miasto w powiecie krapkowickim, 15 199 mieszkańców
 * (31.12.2024, GUS); cała gmina 21 433. Miasto leży po obu
 * brzegach Odry: Krapkowice właściwe na lewym, OTMĘT na prawym.
 * Otmęt jest DZIELNICĄ od 1 stycznia 1962 r., nie osobną
 * miejscowością. Działa tu duży zakład produkujący PAPIER
 * HIGIENICZNY I RĘCZNIKI PAPIEROWE, a w dawnej fabryce obuwia
 * Tomáša Bati mieści się dziś park przemysłowy.
 *
 * KĄT: czyszczenie samego urządzenia — co się w nim naprawdę
 * brudzi i czego program mycia nie załatwi. Miasto, które od
 * ponad stu lat produkuje papier do wycierania, jest jedynym
 * właściwym miejscem na stronę o sprzątaniu po gotowaniu —
 * ale nie po naczyniach, tylko po samym sprzęcie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że program mycia jest wygodny, ale to płukanie, nie mycie
 *   i nie zastępuje umycia po tłustym albo lepkim daniu,
 * — co się realnie brudzi i o czym ludzie zapominają: uszczelka
 *   pokrywy, spód pokrywy, miarka, koszyk,
 * — że nóż wyjmuje się ostrożnie, bo jest ostry z obu stron,
 * — że podstawy z elektroniką nie zanurza się w wodzie NIGDY,
 * — i uczciwie: to jest kilka minut dziennie, nie zero minut.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI NAZW PROGRAMÓW.
 *   Piszę opisowo: „program mycia", „krótkie płukanie".
 * — ŻADNYCH ŚRODKÓW CHEMICZNYCH Z NAZWY ani porad, czym szorować.
 *   Nie będę doradzać środków do sprzętu, którego nie
 *   serwisuję — od tego jest instrukcja producenta i to mówię
 *   wprost.
 * — ŻADNYCH PORAD, JAK ROZKRĘCAĆ URZĄDZENIE ani jak je naprawiać.
 * — ŻADNEJ OBIETNICY, że „myje się samo". To nieprawda i strona
 *   to prostuje.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zmywanie" (miasto porcelany)
 * dotyczy NACZYŃ — talerzy, garnków, tego, ile ich zostaje
 * po obiedzie. Tutaj chodzi wyłącznie o SAMO URZĄDZENIE i jego
 * części. „Cmentarzysko sprzętów kuchennych" dotyczy sprzętów
 * nieużywanych. „Trwałość" (inne miasto) dotyczy tego, jak długo
 * urządzenie posłuży.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZW FIRM. Papiernia, park przemysłowy i zakłady
 *   obuwnicze są ustalone, ale nie reklamuję cudzych działalności.
 * — NIE PISZĘ, że prawa miejskie nadano w 1275 r. jako pewnik.
 *   Oficjalna strona gminy sama zaznacza, że dokument się
 *   NIE ZACHOWAŁ. Pewne jest tylko, że w 1294 r. źródła mówią
 *   o mieszczanach Krapkowic. Piszę: „w drugiej połowie XIII w.".
 * — NIE PISZĘ o Otmęcie jako o osobnej miejscowości. Jest
 *   dzielnicą od 1 stycznia 1962 r.
 * — NIE PISZĘ, że fabryka obuwia działa. Zakład zamknięto
 *   w 1999 r.; dziś na jego terenie działa park przemysłowy.
 * — NIE PODAJĘ liczby zatrudnionych w papierni. Jedyna znaleziona
 *   liczba pochodzi ze strony bez daty aktualizacji.
 * — NIE PISZĘ, że Krapkowice mają dwujęzyczne tablice. NIE MAJĄ —
 *   wniosek odrzucono w głosowaniu radnych w 2009 r.
 * — NIE UŻYWAM PRODUKTU Z LISTY PRODUKTÓW TRADYCYJNYCH jako
 *   kątu. „Kraple" są wpisane na listę (2 września 2021),
 *   ale zgłosiła je konkretna cukiernia i nie będę jej reklamować
 *   ani podrabiać jej wyrobu. Wspominam o wpisie neutralnie.
 * — NIE wymyślam osiedli. Brak wykazu jednostek pomocniczych
 *   dla miasta — gmina ma tylko 11 sołectw. districts to PUSTA
 *   TABLICA; Otmęt jest opisany jako dzielnica zwyczajowa,
 *   bo nią faktycznie jest.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto leży po obu brzegach Odry; Otmęt to prawy brzeg,
 *   przyłączony 1 stycznia 1962 r., wzmiankowany już w 1223 r.,
 * — pierwsza wzmianka o mieszczanach Krapkowic: 1294 r.;
 *   31 maja 1357 r. cesarz Karol IV potwierdził przywileje,
 * — w mieście działa duży zakład papieru higienicznego
 *   (produkcja papiernicza w Krapkowicach od początku XX w.),
 * — w latach trzydziestych Tomáš Baťa zbudował tu jedną
 *   z największych fabryk obuwia w Niemczech; zakład zamknięto
 *   w 1999 r., dziś działa tam park przemysłowy,
 * — miasto ma własny „Obuwniczy Szlak" z oznaczeniami
 *   w kształcie bucików,
 * — zamek w Krapkowicach mieści dziś szkołę, nie muzeum,
 * — „kraple" (pączki, od niemieckiego Krapfen) trafiły na Listę
 *   Produktów Tradycyjnych 2 września 2021 r.,
 * — 15 199 mieszkańców (31.12.2024).
 */
export const KRAPKOWICE: CityContent = {
  slug: "krapkowice",
  h1: "Thermomix Krapkowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krapkowice — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Krapkowicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i Otmęt. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krapkowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krapkowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krapkowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — na oba brzegi Odry i do miejscowości gminy.",

  highlights: highlightyStandardowe("Krapkowice, Otmęt i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie myje się samo. Ale myje się szybciej, niż myślicie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krapkowicach – jak wygląda prezentacja?",
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
      id: "czyszczenie",
      heading: "Miasto papieru do wycierania — czyli o tym, co trzeba w tym urządzeniu umyć",
      paragraphs: [
        "W Krapkowicach od ponad stu lat robi się papier — dziś przede wszystkim higieniczny i ręczniki papierowe, czyli dokładnie to, czym pół Polski wyciera blaty. Trudno o lepsze miasto, żeby powiedzieć prawdę o sprzątaniu po tym urządzeniu.",
        "Zacznę od prostowania obietnicy, którą słyszy się przy sprzedaży: nie, ono nie myje się samo. Ma program, który po nalaniu wody z odrobiną płynu przepłukuje naczynie w kilkadziesiąt sekund — i to jest naprawdę wygodne, bo po zupie czy po cieście nie trzeba nic więcej. Ale to jest płukanie, nie mycie. Po czymś bardzo tłustym albo bardzo lepkim — po smażeniu, po karmelu, po gęstym sosie mięsnym — i tak sięgacie po gąbkę.",
        "Teraz rzecz najważniejsza, o której ludzie zapominają przez pierwsze pół roku, a potem dziwią się zapachowi: brudzi się nie tylko naczynie. Brudzi się uszczelka w pokrywie i spód samej pokrywy. Tam wchodzi para z każdego gotowania i tam zostaje. Uszczelkę się wyjmuje, myje osobno i wkłada z powrotem — to jest kwestia kilkunastu sekund, tylko trzeba o tym wiedzieć. To samo dotyczy miarki i koszyczka, które wędrują do zlewu jak zwykłe naczynia.",
        "Nóż. Wyjmuje się go, żeby umyć dno porządnie, i tu jedno zdanie ostrzeżenia, bo nikt go nie mówi wprost: on jest ostry z obu stron i nie widać tego, gdy jest mokry i w pianie. Chwytacie za trzon, nie za ostrza, i nie zostawiacie go w zlewie pod wodą, gdzie ktoś sięgnie ręką po talerz.",
        "I granica twarda: podstawy z elektroniką nie zanurza się w wodzie nigdy. Przeciera się ją wilgotną szmatką. Tyle.",
        "Czego Wam nie doradzę: czym konkretnie szorować i jakich środków używać. Nie serwisuję tego sprzętu i nie będę zgadywać, co mu zaszkodzi — od tego jest instrukcja producenta i naprawdę warto ją przy tym jednym przeczytać.",
        "Uczciwe podsumowanie: to jest kilka minut dziennie, nie zero minut. Mniej niż po gotowaniu w trzech garnkach, ale nie zero. Kto Wam mówi, że sprzątanie znika, ten sprzedaje, a nie opowiada.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7", label: "Co potrafi TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krapkowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokażę czyszczenie na końcu, po ugotowaniu czegoś tłustego — a nie po samej zupie. Tak jest uczciwiej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krapkowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krapkowickiej rodziny",
      paragraphs: [
        "Krapkowice liczą nieco ponad piętnaście tysięcy mieszkańców i leżą po obu stronach Odry: miasto właściwe na lewym brzegu, Otmęt na prawym. Otmęt jest dzielnicą dopiero od 1 stycznia 1962 roku, choć jako wieś wzmiankowano go już w 1223 — czyli jest starszy od pierwszego zapisu o krapkowickich mieszczanach z 1294 roku. W latach trzydziestych Tomáš Baťa zbudował tam jedną z największych fabryk obuwia w ówczesnych Niemczech; zakład zamknięto w 1999 roku, a dziś na jego terenie działa park przemysłowy. Miasto upamiętniło to własnym Obuwniczym Szlakiem z oznaczeniami w kształcie bucików. Z rzeczy kuchennych: miejscowe „kraple”, czyli pączki, których nazwa pochodzi od niemieckiego Krapfen, trafiły we wrześniu 2021 roku na ministerialną Listę Produktów Tradycyjnych.",
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

  districtsHeading: "Do których części Krapkowic dojeżdżam?",
  districtsParagraphs: [
    "Na oba brzegi Odry — do Krapkowic właściwych i do Otmętu — oraz do sołectw gminy, bez dopłaty za dojazd.",
    "Poza podziałem na dwa brzegi miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Krapkowice też przyjadę",
  nearbyParagraphs: [
    "Opole, Gogolin, Zdzieszowice, Prószków, Strzelce Opolskie i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opole", "Gogolin", "Zdzieszowice", "Strzelce Opolskie", "Kędzierzyn-Koźle", "Prudnik"],

  about: blokOMnie("do Krapkowic", "w Krapkowicach i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krapkowic bez dodatkowej opłaty?",
      answer:
        "Tak, na oba brzegi Odry — do Krapkowic i do Otmętu — oraz do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Krapkowicach"),
    {
      question: "Czy Thermomix naprawdę myje się sam?",
      answer:
        "Nie. Ma program, który po nalaniu wody z odrobiną płynu przepłukuje naczynie w kilkadziesiąt sekund — i po zupie czy cieście to wystarcza. Ale po czymś bardzo tłustym albo lepkim i tak sięgniecie po gąbkę. To płukanie, nie mycie.",
    },
    {
      question: "O czym najczęściej się zapomina przy czyszczeniu?",
      answer:
        "O uszczelce w pokrywie i o spodzie pokrywy — tam wchodzi para z każdego gotowania i tam zostaje. Uszczelkę wyjmuje się, myje osobno i wkłada z powrotem; to kilkanaście sekund, tylko trzeba o tym wiedzieć. Do zlewu wędrują też miarka i koszyczek.",
    },
    {
      question: "Czy podstawę można myć pod wodą?",
      answer:
        "Nigdy. W podstawie jest elektronika — przeciera się ją wilgotną szmatką i tyle. Nie doradzę też, jakich środków używać do reszty: nie serwisuję tego sprzętu, więc przy tym jednym warto sięgnąć do instrukcji producenta.",
    },
  ],

  geo: { lat: 50.4745, lng: 17.965 },
};
