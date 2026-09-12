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
 * LEŚNICA — miasto w powiecie strzeleckim, 2 517 mieszkańców
 * (31.12.2024, GUS); cała gmina 7 351. Pierwsza wzmianka 1217 r.
 * (dokument księcia opolskiego Kazimierza I); w tym samym roku
 * miasto otrzymało prawo targowe. W GRANICACH GMINY LEŻY GÓRA
 * ŚWIĘTEJ ANNY — od 14 kwietnia 2004 r. POMNIK HISTORII.
 * Gmina jest DWUJĘZYCZNA: urzędowa nazwa niemiecka LESCHNITZ
 * wpisana 11 kwietnia 2008 r., język pomocniczy od 2006 r.
 *
 * UWAGA — HOMONIM: nie mylić z Leśnicą, osiedlem Wrocławia,
 * ani z wsiami o tej nazwie w innych województwach.
 *
 * KĄT: niedzielne popołudnie — kawa, ciasto i goście, którzy
 * przyjeżdżają na kilka godzin. Miasto u stóp Góry Świętej Anny,
 * w którym niedziela jest najbardziej ruchliwym dniem tygodnia,
 * jest właściwym miejscem na stronę o posiłku, który nie jest
 * ani obiadem, ani kolacją.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że podwieczorek rządzi się inną logiką niż obiad: musi być
 *   gotowy ZANIM ktoś przyjedzie, i musi znieść czekanie,
 * — co się do tego nadaje, a co nie,
 * — że urządzenie realnie pomaga w robieniu rzeczy dzień
 *   wcześniej, a nie w improwizacji na ostatnią chwilę,
 * — i uczciwie: przy niespodziewanych gościach nie ma cudów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TREŚCI RELIGIJNYCH ANI INSTRUMENTALIZOWANIA
 *   PIELGRZYMEK. Góra Świętej Anny jest tu wymieniona jako
 *   fakt geograficzny i Pomnik Historii, a nie jako element
 *   argumentacji sprzedażowej.
 * — ŻADNEGO WCHODZENIA W PAMIĘĆ POWSTAŃ ŚLĄSKICH. W 1921 r.
 *   rozegrała się tu bitwa o Górę Świętej Anny, a dziś blisko
 *   jedna piąta mieszkańców gminy to mniejszość niemiecka.
 *   To jest teren pamięci podwójnej i strona handlowa o sprzęcie
 *   kuchennym nie ma tam czego szukać. W treści NIE MA o tym
 *   ani słowa.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ciast z kremem.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Goście, którzy przyjeżdżają
 * bez zapowiedzi" (Zagórz) dotyczą improwizacji. „Gość, który
 * zostaje na trzy tygodnie" dotyczy długiego pobytu. „Tort
 * na okazję" (Byczyna) dotyczy jednej uroczystości. „Kołocz
 * śląski" (Głogówek) dotyczy konkretnego ciasta. Tutaj chodzi
 * o POWTARZALNY RYTM NIEDZIELI — o kilka godzin między obiadem
 * a wyjazdem gości.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Leśnica utraciła i odzyskała prawa miejskie.
 *   Żadne ze sprawdzonych źródeł o tym nie wspomina; piszę
 *   o prawie targowym z 1217 r. i o tym, że miasto ma prawa
 *   miejskie od średniowiecza.
 * — NIE PISZĘ, że mniejszość niemiecka przekracza tu 20%.
 *   W spisie 2021 r. było to 18,04% — poniżej progu; tablice
 *   dwujęzyczne zostają jako prawo nabyte.
 * — NIE PODAJĘ NAZWY nowej fabryki w gminie ani nie nazywam jej
 *   „dużym pracodawcą": inwestycja jest duża kapitałowo,
 *   ale docelowo ma dać około 55 miejsc pracy.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka 1217 r. w dokumencie księcia Kazimierza I
 *   opolskiego; wtedy też prawo targowe,
 * — Góra Świętej Anny leży w gminie Leśnica i od 14 kwietnia
 *   2004 r. jest Pomnikiem Historii; ochroną objęto ok. 80 ha,
 * — gmina dwujęzyczna, nazwa Leschnitz od 11 kwietnia 2008 r.,
 *   język pomocniczy od 2006 r.; w 1936 r. naziści zmienili
 *   urzędową nazwę na Bergstadt, by usunąć słowiański źródłosłów,
 * — w 1798 r. działała tu fabryka tabaki; w 1845 r. miasto
 *   specjalizowało się w handlu, ogrodnictwie i warzywnictwie,
 *   a kolej dotarła w tym samym roku,
 * — 76% powierzchni gminy to użytki rolne,
 * — 2 517 mieszkańców miasta, 7 351 gminy (31.12.2024).
 */
export const LESNICA: CityContent = {
  slug: "lesnica",
  h1: "Thermomix Leśnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Leśnica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Leśnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Leśnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Leśnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Leśnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Leśnica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Podwieczorek musi być gotowy, zanim ktoś zapuka.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Leśnicy – jak wygląda prezentacja?",
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
      id: "podwieczorek",
      heading: "Miasto u stóp Góry Świętej Anny — czyli o niedzielnym popołudniu",
      paragraphs: [
        "Leśnica leży u podnóża Góry Świętej Anny, która od 2004 roku jest Pomnikiem Historii. W praktyce znaczy to tyle, że w tej gminie niedziela wygląda inaczej niż gdzie indziej: ludzie przyjeżdżają, są przez kilka godzin i wyjeżdżają. A jeżeli mieszkacie tutaj, to wiecie, jak często kończy się to u Was przy stole.",
        "I dlatego napiszę o posiłku, o którym nie pisze się nigdzie: o podwieczorku. Nie o obiedzie i nie o kolacji, tylko o tych kilku godzinach pomiędzy, kiedy ludzie już zjedli, jeszcze nie wyjeżdżają, i coś na stole być musi.",
        "Podwieczorek rządzi się zupełnie inną logiką niż obiad, a ludzie próbują robić go tak samo — i stąd bierze się cała nerwowość. Obiad ma być gorący na konkretną godzinę. Podwieczorek ma być gotowy, zanim ktokolwiek zapuka, i musi wytrzymać dwie godziny na stole, bo nikt nie siada do niego naraz.",
        "Z tego wynika prosta zasada doboru. Dobrze znoszą czekanie: ciasta ucierane i drożdżowe, sernik na zimno, tarta owocowa, mus w pucharkach, pasty i dipy do warzyw, coś słonego pieczonego wcześniej. Znoszą źle: wszystko z bitą śmietaną na wierzchu, wszystko chrupiące, wszystko, co po pół godzinie zaczyna wyglądać źle.",
        "Gdzie w tym wszystkim jest urządzenie? Nie tam, gdzie się je zwykle pokazuje. Nie w improwizacji na ostatnią chwilę — tylko w sobotnim wieczorze. Masa serowa, ciasto ucierane, krem, mus, pasta, mielone orzechy, kruszonka: to wszystko można zrobić dzień wcześniej w jednym naczyniu, po kolei, a w niedzielę tylko wyjąć z lodówki.",
        "I to jest cała prawda o tej stronie. Urządzenie nie sprawia, że jest się dobrym gospodarzem. Sprawia, że w niedzielę o piętnastej nie stoicie w kuchni, kiedy wszyscy siedzą w pokoju — bo robota jest zrobiona wczoraj.",
        "Uczciwie o granicy: przy gościach, którzy dzwonią z drogi i są za dwadzieścia minut, żadne urządzenie nie zrobi cudu. Piszę o tym zresztą przy innym mieście. Tutaj chodzi o niedzielę, o której wiadomo z góry.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Leśnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was w niedziele bywają goście, powiedzcie to przy umawianiu — zrobimy coś, co da się przygotować dzień wcześniej i co wytrzyma dwie godziny na stole.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Leśnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla leśnickiej rodziny",
      paragraphs: [
        "Leśnica liczy nieco ponad dwa i pół tysiąca mieszkańców, a cała gmina ponad siedem tysięcy. Pierwsza wzmianka o mieście pochodzi z 1217 roku, z dokumentu księcia opolskiego Kazimierza I — i w tym samym roku Leśnica dostała prawo targowe. W granicach gminy leży Góra Świętej Anny, od 14 kwietnia 2004 roku Pomnik Historii, którym objęto około osiemdziesięciu hektarów. Gmina jest dwujęzyczna: urzędowa nazwa niemiecka Leschnitz została wpisana 11 kwietnia 2008 roku, a język niemiecki ma tu status pomocniczego od 2006. Nieoczywisty szczegół z historii nazwy: w 1936 roku naziści zmienili ją urzędowo na Bergstadt, żeby usunąć słowiański źródłosłów — po 1945 wróciła dawna forma, i to ona jest dziś nazwą dodatkową. Z rzeczy dawnych: w 1798 roku działała tu fabryka tabaki, a w połowie XIX wieku miasto żyło z handlu, ogrodnictwa i warzywnictwa.",
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

  districtsHeading: "Do których części Leśnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — w tym do Góry Świętej Anny, Zalesia Śląskiego i Krasowej — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Leśnicę też przyjadę",
  nearbyParagraphs: [
    "Strzelce Opolskie, Zdzieszowice, Ujazd, Kędzierzyn-Koźle, Gogolin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Strzelce Opolskie", "Zdzieszowice", "Ujazd", "Kędzierzyn-Koźle", "Gogolin", "Krapkowice"],

  about: blokOMnie("do Leśnicy", "w Leśnicy i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Leśnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy, w tym do Góry Świętej Anny. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Leśnicę w powiecie strzeleckim, nie o wrocławskie osiedle o tej nazwie.",
    },
    ...faqWspolne("w Leśnicy"),
    {
      question: "Co najlepiej sprawdza się na podwieczorek?",
      answer:
        "To, co znosi czekanie: ciasta ucierane i drożdżowe, sernik na zimno, tarta owocowa, mus w pucharkach, pasty i dipy do warzyw, coś słonego upieczonego wcześniej. Źle znoszą wszystko z bitą śmietaną na wierzchu i wszystko, co miało zostać chrupiące.",
    },
    {
      question: "Kiedy urządzenie realnie pomaga przy gościach?",
      answer:
        "W sobotni wieczór, nie w niedzielne popołudnie. Masa serowa, ciasto ucierane, krem, mus, pasta, kruszonka — wszystko można zrobić dzień wcześniej w jednym naczyniu i w niedzielę tylko wyjąć z lodówki. Chodzi o to, żeby o piętnastej nie stać w kuchni, gdy wszyscy siedzą w pokoju.",
    },
    {
      question: "A jeśli goście dzwonią z drogi i są za dwadzieścia minut?",
      answer:
        "Wtedy żadne urządzenie nie zrobi cudu i nie będę tego obiecywać. Ta strona jest o niedzieli, o której wiadomo z góry — improwizacji przy niespodziewanych gościach poświęciłam osobne miejsce w serwisie.",
    },
  ],

  geo: { lat: 50.4292, lng: 18.1811 },
};
