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
 * PRÓSZKÓW — miasto w powiecie opolskim, 2 553 mieszkańców
 * (31.12.2024, GUS); cała gmina 8 995. Prawa miejskie nadane
 * 24 KWIETNIA 1560 r. przez cesarza Ferdynanda I, utracone
 * (data sporna) i ODZYSKANE W 2004 r. Gmina jest DWUJĘZYCZNA:
 * urzędowa nazwa niemiecka PROSKAU wpisana 30 kwietnia 2010 r.,
 * język pomocniczy od 2006 r.; mniejszość niemiecka w spisie
 * 2021 r. — 17,96%.
 *
 * PRÓSZKÓW TO NIE PRASZKA. Praszka leży w powiecie oleskim
 * na północy województwa i ma własną stronę w tym serwisie.
 * Wyszukiwarki mylą te nazwy nagminnie.
 *
 * KĄT: upał — gotowanie, kiedy w kuchni jest trzydzieści pięć
 * stopni. Miasto, które przez 105 lat trzymało polski rekord
 * ciepła, jest jedynym właściwym miejscem na tę stronę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 29 lipca 1921 r. zmierzono tu 40,2 stopnia i że przez
 *   ponad sto lat był to polski rekord — ALE ŻE ZOSTAŁ POBITY
 *   28 CZERWCA 2026 R. (Słubice 40,5°C). Każdy tekst napisany
 *   wcześniej nazywa Prószków „biegunem ciepła" i od tej daty
 *   jest to nieprawda,
 * — że urządzenie gotuje pod zamkniętą pokrywą, więc oddaje
 *   do kuchni znacznie mniej ciepła i pary niż odkryty garnek
 *   i piekarnik,
 * — że to nie jest klimatyzacja i różnicy nie należy wyolbrzymiać,
 * — co realnie się latem robi: chłodniki, zimne zupy, sorbety
 *   i lody z mrożonych owoców, kremy na zimno, koktajle.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD ZDROWOTNYCH DOTYCZĄCYCH UPAŁÓW — nawadniania,
 *   przegrzania, samopoczucia. To jest dziedzina medyczna
 *   i odmowa stoi w tekście wprost.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU JEDZENIA W UPAŁ. Bezpieczeństwo
 *   żywności.
 * — ŻADNYCH TWIERDZEŃ o zużyciu energii ani o klimatyzacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zapach i para w mieszkaniu
 * w bloku" (inne miasto) dotyczy ZAPACHU i wentylacji przez cały
 * rok. „Zima i dojazd" dotyczy pory roku po stronie mojej trasy.
 * „Koktajle i smoothie" mają własne miasto — tutaj są tylko
 * wymienione. „Pora roku" dotyczy sezonowości warzyw. Tutaj
 * chodzi o TEMPERATURĘ W POMIESZCZENIU i o to, że w lipcu nikt
 * nie chce włączać piekarnika.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Prószków jest polskim biegunem ciepła.
 *   JUŻ NIE JEST — rekord padł 28 czerwca 2026 r.
 * — NIE PODAJĘ roku utraty praw miejskich. Źródła podają cztery
 *   różne daty (1809, 1863, 1915, 1945) i żadnej nie da się
 *   rozstrzygnąć. Piszę: „w czasach pruskich".
 * — NIE PODAJĘ daty dziennej odzyskania praw w 2004 r.
 * — NIE PODAJĘ liczby pracowników domu pomocy społecznej
 *   mieszczącego się w zamku; nie jest ujawniona.
 * — NIE PISZĘ o mieszkańcach tej placówki. To ludzie pod opieką,
 *   a nie materiał na tło strony handlowej.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — districts: miasto Prószków stanowi JEDNĄ jednostkę pomocniczą
 *   z własnym Zarządem Miasta i nie dzieli się na osiedla.
 *   districts to PUSTA TABLICA i jest to powiedziane w tekście.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 24 kwietnia 1560 r. (cesarz Ferdynand I,
 *   na wniosek Jerzego Prószkowskiego), odzyskane w 2004 r.,
 * — 29 lipca 1921 r. zmierzono tu 40,2°C — przez 105 lat
 *   najwyższą temperaturę na dzisiejszych ziemiach polskich;
 *   rekord pobity 28 czerwca 2026 r. (Słubice 40,5°C),
 * — manufaktura fajansu działała w latach 1763–1853, założona
 *   przez hrabiego Leopolda Prószkowskiego, w 1783 r. wykupiona
 *   przez skarb pruski; nie wytrzymała konkurencji porcelany
 *   z Miśni i Berlina,
 * — w 1847 r. w zamku powstała Królewska Akademia Rolnicza,
 *   a w latach 1866–1867 Królewski Instytut Pomologiczny;
 *   siedemnastohektarowe arboretum założono w 1878 r.,
 *   a szkoła działa do dziś,
 * — zamek Prószkowskich budowano od 1563 r.; dziś mieści dom
 *   pomocy społecznej,
 * — gmina jest dwujęzyczna, nazwa Proskau od 30 kwietnia 2010 r.,
 * — 2 553 mieszkańców miasta, 8 995 gminy (31.12.2024).
 */
export const PROSZKOW: CityContent = {
  slug: "proszkow",
  h1: "Thermomix Prószków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Prószków — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Prószkowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Prószków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Prószkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Prószkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Prószków i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W lipcu nikt nie chce włączać piekarnika. I nie musi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Prószkowie – jak wygląda prezentacja?",
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
      id: "upal",
      heading: "Miasto, które przez sto pięć lat trzymało polski rekord ciepła",
      paragraphs: [
        "29 lipca 1921 roku w Prószkowie zmierzono czterdzieści stopni i dwie dziesiąte. Przez ponad sto lat była to najwyższa temperatura zanotowana na dzisiejszych ziemiach polskich — i przez ponad sto lat Prószków nazywano polskim biegunem ciepła.",
        "Od 28 czerwca 2026 roku to już nieprawda. Tego dnia w Słubicach zmierzono czterdzieści i pół stopnia, a Instytut Meteorologii ogłosił, że rekord z 1921 roku przeszedł do historii. Piszę o tym wprost, bo w internecie stoją tysiące tekstów napisanych wcześniej i wszystkie mówią co innego. Prószków jest byłym rekordzistą — i nadal jest to niezła historia.",
        "A skoro tak, to jest to właściwe miejsce na temat, o którym nikt nie pisze przy sprzedaży sprzętu: co robić w kuchni, kiedy jest naprawdę gorąco.",
        "Bo latem problemem nie jest gotowanie. Problemem jest to, że gotowanie ogrzewa mieszkanie. Piekarnik włączony na godzinę podnosi temperaturę w małej kuchni odczuwalnie i trzyma ją tak do wieczora. Odkryty garnek oddaje ciepło i parę wprost do pomieszczenia. W lipcu ludzie po prostu przestają gotować i przechodzą na kanapki — nie z lenistwa, tylko dlatego, że nie da się wytrzymać.",
        "Co tu zmienia to urządzenie? Jedną rzecz, konkretną i ograniczoną: gotuje w zamkniętym naczyniu. Para nie idzie do kuchni, tylko zostaje pod pokrywą, a rozgrzana powierzchnia jest wielokrotnie mniejsza niż płyta z garnkiem albo wnętrze piekarnika. W upale jest to różnica odczuwalna.",
        "I od razu granica, żeby nikt nie kupował złudzenia: to nie jest klimatyzacja. Urządzenie też grzeje, tylko mniej i w mniejszym stopniu na zewnątrz. Kto liczy, że w kuchni zrobi się chłodno, będzie rozczarowany.",
        "Druga rzecz jest ciekawsza: latem połowa tego, co się robi, w ogóle nie wymaga gotowania. Chłodniki i zimne zupy — ogórkowa, botwinkowa, pomidorowa. Sorbety i lody z mrożonych owoców, zrobione w kilkadziesiąt sekund bez cukru w syropie i bez maszyny do lodów. Kremy i musy na zimno. Pesto, dipy, zimne sosy. To jest cała rodzina dań, w których nic się nie podgrzewa, a urządzenie i tak wykonuje całą pracę.",
        "Czego nie doradzę: niczego, co dotyczy zdrowia w upale — nawadniania, przegrzania, samopoczucia. To jest sprawa lekarza, nie przedstawicielki handlowej. Nie będę też pisać, jak długo jedzenie może stać na blacie w trzydziestostopniowy dzień; to bezpieczeństwo żywności i akurat latem naprawdę nie błahe.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Prószkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Latem chętnie umawiam się na wcześniejsze godziny i robię coś zimnego — chłodnik albo sorbet. W lipcowe popołudnie nikt nie chce oglądać gotowania na gorąco.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Prószkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla prószkowskiej rodziny",
      paragraphs: [
        "Prószków liczy nieco ponad dwa i pół tysiąca mieszkańców, a cała gmina blisko dziewięć tysięcy — leży dziesięć kilometrów od Opola i mocno korzysta z tego sąsiedztwa. Prawa miejskie nadał mu 24 kwietnia 1560 roku cesarz Ferdynand I; miasto straciło je w czasach pruskich i odzyskało dopiero w 2004. Przez dziewięćdziesiąt lat, od 1763 do 1853 roku, działała tu manufaktura fajansu założona przez hrabiego Leopolda Prószkowskiego — nie wytrzymała konkurencji porcelany z Miśni i Berlina. Za to szkoła przetrwała: w 1847 roku w zamku powstała Królewska Akademia Rolnicza, w latach sześćdziesiątych XIX wieku Królewski Instytut Pomologiczny, a siedemnastohektarowe arboretum założono w 1878 roku. Gmina jest dwujęzyczna — urzędowa nazwa niemiecka Proskau została wpisana 30 kwietnia 2010 roku.",
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

  districtsHeading: "Do których części Prószkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Chrząszczyc, Zimnic Wielkich i Małych, Złotnik, Przysieczy i pozostałych — bez dopłaty za dojazd.",
    "Miasto stanowi jedną jednostkę pomocniczą i nie dzieli się na osiedla, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Prószków też przyjadę",
  nearbyParagraphs: [
    "Opole, Krapkowice, Niemodlin, Tułowice, Gogolin i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opole", "Krapkowice", "Niemodlin", "Tułowice", "Gogolin", "Ozimek"],

  about: blokOMnie("do Prószkowa", "w Prószkowie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Prószkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Prószków pod Opolem, nie o Praszkę w powiecie oleskim — to dwa różne miasta w tym samym województwie.",
    },
    ...faqWspolne("w Prószkowie"),
    {
      question: "Czy gotowanie w Thermomiksie mniej nagrzewa kuchnię?",
      answer:
        "Tak, i to jest odczuwalne w upał: gotuje w zamkniętym naczyniu, więc para zostaje pod pokrywą, a rozgrzana powierzchnia jest wielokrotnie mniejsza niż płyta z garnkiem czy wnętrze piekarnika. Ale to nie jest klimatyzacja — urządzenie też grzeje, tylko mniej.",
    },
    {
      question: "Co warto robić w upalne dni?",
      answer:
        "Głównie rzeczy, które w ogóle nie wymagają podgrzewania: chłodniki i zimne zupy, sorbety i lody z mrożonych owoców w kilkadziesiąt sekund, kremy i musy na zimno, pesto, dipy i zimne sosy. Praca się wykonuje, a nic się nie grzeje.",
    },
    {
      question: "Czy Prószków to nadal polski biegun ciepła?",
      answer:
        "Już nie. Zmierzone tu 29 lipca 1921 roku 40,2 stopnia było rekordem przez 105 lat, ale 28 czerwca 2026 roku padło w Słubicach 40,5 stopnia. Większość tekstów w sieci jest starsza i wciąż podaje starą wersję.",
    },
  ],

  geo: { lat: 50.5764, lng: 17.8714 },
};
