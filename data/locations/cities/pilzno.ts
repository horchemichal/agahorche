import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * PILZNO — miasto w powiecie dębickim, 4 997 mieszkańców
 * (31.12.2024, GUS). Prawa miejskie 3 PAŹDZIERNIKA 1354 r. od
 * Kazimierza Wielkiego; brak potwierdzonej utraty praw. Działa tu
 * zakład metalowy produkujący armaturę przemysłową od ponad
 * sześćdziesięciu lat.
 *
 * KĄT: szatkowanie warzyw na surowo — surówki i sałatki. Jedyne
 * miejsce w serwisie, gdzie tematem jest CIĘCIE NA SUROWO,
 * a nie gotowanie. Miasto, w którym od dekad robi się armaturę
 * przemysłową (wyroby, w których równość i pasowanie decydują
 * o wszystkim), jest właściwym miejscem na tekst o tym, że
 * urządzenie tnie SZYBKO, ale NIERÓWNO.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to jest najczęściej przeceniana funkcja przy sprzedaży
 *   takich urządzeń i chcę ją zaniżyć, a nie podbić,
 * — że nóż w naczyniu daje ROZDROBNIENIE, a nie plastry ani
 *   słupki — kto chce równych plastrów, potrzebuje szatkownicy
 *   albo noża,
 * — gdzie to naprawdę pomaga: surówki, w których równość nie ma
 *   znaczenia, pasty, dipy, bazy do sosów,
 * — i uczciwie: przy dwóch marchewkach tarka jest szybsza,
 *   bo nie ma czego myć.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI OBROTÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o surowych warzywach.
 * — ŻADNYCH PORAD O MYCIU I PRZECHOWYWANIU warzyw — to dziedzina
 *   bezpieczeństwa żywności.
 * — ŻADNEGO OBIECYWANIA równych plastrów. To jest sedno strony
 *   i nie wolno go rozmiękczyć.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mielenie mięsa"
 * (Modliborzyce) dotyczy INNEGO SUROWCA i tam problemem jest
 * WIELKOŚĆ PARTII; tutaj problemem jest RÓWNOŚĆ CIĘCIA i chodzi
 * o warzywa na surowo. „Mieszanie" (Opole Lubelskie) to czynność
 * ciągła w gotowaniu. „Mąka i mielenie" dotyczy ziarna. „Precyzja
 * i to, gdzie NIE jest potrzebna" (Tomaszów Lubelski) dotyczy
 * WAŻENIA składników, nie cięcia.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE ŁĄCZĘ NAZWY MIASTA Z CZESKĄ PLZNÍ ANI Z PIWEM. To
 *   skojarzenie krąży, ale NIE ZNALAZŁEM ŹRÓDŁA, które by je
 *   rozstrzygało. Wspominam w tekście, że takiego potwierdzenia
 *   nie ma — i na tym poprzestaję,
 * — NIE PISZĘ, że Pilzno leży przy autostradzie A4. NIE LEŻY.
 *   Miasto leży przy DRODZE KRAJOWEJ NR 73. Łącznik do A4
 *   (ok. 10 km) został zatwierdzony 12 września 2022 r., ale
 *   na 2026 r. jest w fazie dokumentacji — czyli go NIE MA.
 *   To jest dokładnie ten rodzaj „faktu z internetu", który
 *   wyprzedza rzeczywistość o kilka lat,
 * — NIE PISZĘ, że zakład metalowy jest największym pracodawcą
 *   miasta. Żadne źródło tego nie stwierdza. Nie podaję też jego
 *   pełnej nazwy — nie reklamuję cudzych firm,
 * — NIE OPISUJĘ AKTUALNEGO STANU KLASZTORU. Potwierdzone jest
 *   założenie w 1403 r. (augustianie), przejęcie przez karmelitów
 *   w 1840 r. i status sanktuarium od 2006 r.; stanu obiektu
 *   po 2024 r. nie zweryfikowałem, więc piszę tylko o historii,
 * — NIE PODAJĘ ROKU UTRATY PRAW MIEJSKICH, bo takiej utraty nie
 *   potwierdzono — w odróżnieniu od większości okolicznych miast,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Pilzna nie znaleziono wpisu,
 * — NIE UŻYWAM liczby „ok. 4300 mieszkańców", która krąży
 *   w materiałach. GUS na 31.12.2024: 4 997,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 3 października 1354 r. od Kazimierza Wielkiego,
 * — miasto leży przy drodze krajowej nr 73; łącznik do A4
 *   zatwierdzony w 2022 r., na 2026 r. w fazie dokumentacji,
 * — klasztor założony w 1403 r., karmelici od 1840 r., sanktuarium
 *   od 2006 r.,
 * — w mieście od ponad sześćdziesięciu lat działa zakład metalowy
 *   produkujący armaturę przemysłową,
 * — 4 997 mieszkańców (31.12.2024).
 */
export const PILZNO: CityContent = {
  slug: "pilzno",
  h1: "Thermomix Pilzno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pilzno — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pilźnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pilzno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pilźnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pilzna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Pilzno i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pokrojone szybko. Nie pokrojone równo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pilźnie – jak wygląda prezentacja?",
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
      id: "szatkowanie",
      heading: "Miasto armatury przemysłowej — czyli o cięciu warzyw i o tym, czego nie obiecam",
      paragraphs: [
        "Pilzno ma prawa miejskie od trzeciego października 1354 roku, od Kazimierza Wielkiego, i — w odróżnieniu od większości miasteczek w tej okolicy — nigdy ich nie straciło. Od ponad sześćdziesięciu lat działa tu zakład produkujący armaturę przemysłową, czyli wyroby, w których równość i pasowanie decydują o wszystkim.",
        "Dlatego napiszę tu o funkcji, która na pokazach jest najczęściej przereklamowana, a którą chcę zaniżyć, a nie podbić: o krojeniu warzyw na surowo.",
        "Rzecz podstawowa, którą wolę powiedzieć na początku: to urządzenie ma nóż obracający się w naczyniu. Taki nóż daje rozdrobnienie, a nie plastry. Nie zrobi równych krążków ogórka, nie zrobi słupków marchewki, nie zrobi cienkich talarków ziemniaka jeden w drugi. Kawałki będą różnej wielkości — część drobniejsza, część większa — i to nie jest wada egzemplarza, tylko sposób działania.",
        "Kto potrzebuje równych plastrów, potrzebuje szatkownicy albo noża i wprawy. Nie będę tego owijać, bo to jest dokładnie ten punkt, w którym ludzie czują się potem oszukani.",
        "A teraz to, gdzie ta funkcja jest naprawdę dobra — i jest tego sporo. Surówki, w których równość nie ma znaczenia: z białej kapusty, z marchewki, z selera, z pora. Pasty i dipy. Baza do sosu albo do zupy, czyli cebula, marchew i seler, które i tak potem będą się dusić i rozpadną. Wszędzie tam liczy się tempo, a nie estetyka cięcia — i tempo jest tu naprawdę duże.",
        "I skala, uczciwie: przy dwóch marchewkach zwykła tarka wygrywa. Nie dlatego, że jest szybsza w samym tarciu, tylko dlatego, że nie ma czego myć. Sens pojawia się przy większej ilości albo wtedy, gdy warzywa są etapem czegoś, co i tak w tym naczyniu powstanie.",
        "Czego nie doradzę: niczego o myciu i przechowywaniu warzyw. To jest dziedzina bezpieczeństwa żywności, nie moja.",
        "I drobiazg, żeby zamknąć jedno pytanie, które pada tu chyba przy każdej wizycie: nie, nie znalazłam potwierdzenia, że nazwa Pilzna ma cokolwiek wspólnego z czeską Pilznem ani z piwem. Krąży takie skojarzenie, ale nie natrafiłam na źródło, które by je rozstrzygało — więc nie będę powtarzać czegoś, czego nie sprawdziłam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pilźnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli zależy Wam akurat na krojeniu warzyw, powiedzcie to przy umawianiu. Pokażę, jak to naprawdę wygląda — łącznie z tym, że kawałki nie są równe — zamiast pokazywać sam efekt końcowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pilźnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pilźnieńskiej rodziny",
      paragraphs: [
        "Pilzno liczy blisko pięć tysięcy mieszkańców i leży przy drodze krajowej numer 73 — nie przy autostradzie, wbrew temu, co czasem można wyczytać. Łącznik do A4 zatwierdzono w 2022 roku, ale na dziś jest dopiero w dokumentacji. Klasztor stoi tu od 1403 roku; karmelici przejęli go w 1840, a od 2006 roku jest sanktuarium.",
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

  districtsHeading: "Do których części Pilzna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Pilzno też przyjadę",
  nearbyParagraphs: [
    "Dębica, Tarnów, Brzostek, Jasło i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Dębica", "Tarnów", "Brzostek", "Jasło", "Ropczyce", "Żabno"],

  about: blokOMnie("do Pilzna", "w Pilźnie i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pilzna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pilźnie"),
    {
      question: "Czy pokroi warzywa w równe plastry albo słupki?",
      answer:
        "Nie i nie będę tego obiecywać. To jest nóż obracający się w naczyniu, więc daje rozdrobnienie: kawałki różnej wielkości, część drobniejsza, część większa. Do surówek, past, dipów i bazy do sosu jest to zupełnie wystarczające i bardzo szybkie. Jeśli natomiast potrzebujecie równych krążków czy talarków, potrzebna jest szatkownica albo nóż.",
    },
    {
      question: "Czy to szybsze niż tarka?",
      answer:
        "Przy dwóch marchewkach — nie, bo tarki nie trzeba potem myć. Sens pojawia się przy większej ilości warzyw albo wtedy, gdy i tak w tym samym naczyniu powstanie z nich zupa, sos albo pasta. Wtedy oszczędzacie nie tylko czas krojenia, ale całe przekładanie i zmywanie.",
    },
  ],

  geo: { lat: 49.9781, lng: 21.2919 },
};
