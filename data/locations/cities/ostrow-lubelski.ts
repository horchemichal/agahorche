import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * OSTRÓW LUBELSKI — 1 942 mieszkańców (31.12.2024), spadek o 9,5%
 * od 2002 r. Miasto z DWOMA wpisami na Liście Produktów Tradycyjnych,
 * oba słodkie i oba naprawdę stąd.
 *
 * KĄT: beza, czyli ubijanie piany. „Bezy z Ostrowa Lubelskiego" są
 * na Liście Produktów Tradycyjnych od 7 grudnia 2020 r. i — co po
 * kilkunastu takich sprawdzeniach jest rzadkością — region
 * pochodzenia to naprawdę Ostrów Lubelski.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ubijanie białek to jedna z rzeczy, które urządzenie robi
 *   dobrze i przewidywalnie, bo nie męczy go monotonia,
 * — ale że beza w dziewięćdziesięciu procentach dzieje się
 *   w PIEKARNIKU, którego to urządzenie nie ma i nie zastąpi,
 * — więc obietnica jest wąska: pomaga w jednym etapie z kilku,
 * — i że przepisu bez ostrowskich nie podam.
 *
 * TWARDE GRANICE:
 * — ŻADNEJ RECEPTURY „bez z Ostrowa Lubelskiego" ani „lodów
 *   lubartowskich". To wyroby konkretnych ludzi z Listy Produktów
 *   Tradycyjnych, nie moja własność. Zasada z Lubartowa (makowiec)
 *   i Zambrowa (kumpia).
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW — przy bezie kusi
 *   szczególnie, bo to danie „na temperaturę". Nie podaję żadnej.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani nic o cukrze w diecie.
 * — ŻADNYCH PORAD O SUROWYCH JAJKACH, ich świeżości ani
 *   przechowywaniu — to bezpieczeństwo żywności, czyli nie moja
 *   dziedzina.
 * — ŻADNEJ KRYTYKI bez kupnych ani konkretnych cukierni.
 *
 * ROZGRANICZENIE. Bełżyce mają kąt „lody i sorbety" — i dlatego
 * mimo że „lody lubartowskie" są wpisem z TEGO miasta, w tekście
 * są tylko JEDNYM zdaniem jako ciekawostka nazewnicza, bez rozwijania
 * tematu lodów. Kąt „wypieki" jest zajęty — ta strona jest o JEDNEJ
 * czynności (ubijanie piany), nie o pieczeniu w ogóle.
 *
 * CIEKAWOSTKA NAZEWNICZA, KTÓRA DZIAŁA ODWROTNIE NIŻ ZWYKLE.
 * Przy poprzednich stronach nazwa wpisu myliła, bo produkt pochodził
 * z innej gminy, niż sugerowała („hrubieszowska" z gminy wiejskiej,
 * „rawickie" nieistniejące, „zawijaki wygnanowskie" z Kąkolewnicy).
 * Tutaj jest na odwrót: „LODY LUBARTOWSKIE" brzmią jak produkt
 * Lubartowa, a oficjalny opis mówi, że recepturę opracowali
 * miejscowi producenci W OSTROWIE LUBELSKIM, z tradycją od 1956 r.
 * Wpis z 15 czerwca 2016 r.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — „PĄCZKI STAROPOLSKIE Z OSTROWA LUBELSKIEGO" NIE ISTNIEJĄ na
 *   Liście Produktów Tradycyjnych. Nazwa krąży w materiałach
 *   o produktach regionalnych, ale nie ma jej ani na gov.pl, ani
 *   w wykazach wojewódzkich. Prawdopodobnie pomyłka z „pączkiem
 *   opatowskim" ze świętokrzyskiego. W tekście nie ma o nich słowa —
 *   i to jest dokładnie ten rodzaj wpisu, który wcześniej dwa razy
 *   omal nie trafił mi na stronę,
 * — NIE podaję roku utraty praw miejskich. Strona gminy podaje
 *   1884 r., angielska Wikipedia 1864 — bez rozstrzygnięcia. Podaję
 *   pewne: nadanie 25 stycznia 1548 r. przez Zygmunta Starego
 *   i ponowne nadanie 22 lipca 1919 r. uchwałą Sejmu
 *   Ustawodawczego,
 * — NIE podaję, kto zgłosił wpisy na listę — źródła tego nie mówią,
 * — miasto NIE publikuje wykazu osiedli (gmina ma 15 sołectw,
 *   to co innego), więc districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — „Bezy z Ostrowa Lubelskiego", wpis 7 grudnia 2020 r., kategoria
 *   wyroby piekarnicze i cukiernicze; receptura używana od ponad
 *   sześćdziesięciu lat,
 * — „Lody lubartowskie", wpis 15 czerwca 2016 r., receptura
 *   miejscowych producentów w Ostrowie Lubelskim od 1956 r.,
 * — prawa miejskie 25 stycznia 1548 r. (Zygmunt Stary), ponownie
 *   22 lipca 1919 r.,
 * — 1 942 mieszkańców na 31.12.2024,
 * — do Lublina ok. 40 km,
 * — działa tu zakład produkujący proszki mleczne, rozbudowywany
 *   od 2024 r.
 */
export const OSTROW_LUBELSKI: CityContent = {
  slug: "ostrow-lubelski",
  h1: "Thermomix Ostrów Lubelski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ostrów Lubelski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ostrowie Lubelskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostrów Lubelski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostrowie Lubelskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ostrowa Lubelskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Ostrów Lubelski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pianę ubije. Ale beza dzieje się w piekarniku, a piekarnika tu nie ma.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostrowie Lubelskim – jak wygląda prezentacja?",
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
      id: "beza",
      heading: "Miasto, które ma własne bezy na ministerialnej liście",
      paragraphs: [
        "„Bezy z Ostrowa Lubelskiego” są wpisane na ministerialną Listę Produktów Tradycyjnych od grudnia 2020 roku, a recepturę stosuje się tu od ponad sześćdziesięciu lat. Piszę o tym z ulgą, bo przy tych stronach mam z takimi wpisami stały kłopot: nazwa mówi „z Hrubieszowa”, „z Rawicza”, „wygnanowskie” — a produkt okazuje się pochodzić z sąsiedniej wsi albo nie istnieć wcale. Tutaj się zgadza.",
        "Ciekawostka na marginesie, bo działa dokładnie odwrotnie niż zwykle. Na tej samej liście są „lody lubartowskie” — nazwa wskazuje Lubartów, a oficjalny opis mówi, że recepturę opracowali miejscowi producenci właśnie tutaj, w Ostrowie, i robi się je od 1956 roku. Zwykle nazwa zabiera produkt sąsiadom; tu go oddaje.",
        "Skoro więc jesteśmy w mieście bez, porozmawiajmy o tym, co przy nich naprawdę robi to urządzenie — i czego nie robi. Bo to jest dobry przykład na obietnicę, którą trzeba przyciąć do rozmiaru.",
        "Ubijanie białek na sztywną pianę: tak, i to jest jedna z rzeczy, które wychodzą tu dobrze i przewidywalnie. Nie dlatego, że maszyna jest mądrzejsza od człowieka, tylko dlatego, że nie nudzi jej powtarzalność — miesza równo tyle, ile trzeba, i nie przerywa po dwóch minutach, kiedy ręka zaczyna boleć. Tego samego dotyczy ucieranie i wszystko, co polega na długim, jednostajnym ruchu.",
        "A teraz uczciwie: beza to nie jest danie o ubijaniu. Beza to danie o piekarniku. To tam decyduje się, czy wyjdzie sucha i krucha, czy ciągnąca i szara — i to tam spędza kilka godzin. Tego urządzenie nie zrobi, bo nie jest piekarnikiem i nigdy nim nie będzie. Pomaga w jednym etapie z kilku i tak trzeba to sprzedawać, a nie inaczej.",
        "Nie podam Wam też przepisu na bezy ostrowskie. To wyrób konkretnych ludzi z tego miasta, wpisany na listę ministerialną — nie moja własność i nie moja rzecz, żeby go rozdawać. Tak samo jak nie podaję receptury lodów.",
        "I granica, przy której nie ustąpię: nie doradzam nic o surowych jajkach — ani jak sprawdzać świeżość, ani jak przechowywać, ani co jest bezpieczne. To jest dziedzina, w której zła podpowiedź komuś realnie szkodzi, a ja jestem przedstawicielką handlową, nie technologiem żywności.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostrowie Lubelskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu piecze się dużo, powiedzcie o tym przy umawianiu. Pokażę wtedy te etapy, które realnie schodzą z rąk — ubijanie, ucieranie, wyrabianie — i powiem wprost, gdzie kończy się to, w czym urządzenie pomaga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostrowie Lubelskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ostrowskiej rodziny",
      paragraphs: [
        "Ostrów Lubelski liczy niecałe dwa tysiące mieszkańców i od dwóch dekad ich ubywa. Prawa miejskie dostał od Zygmunta Starego w styczniu 1548 roku, stracił je w czasach zaborów i odzyskał uchwałą Sejmu w lipcu 1919. Do Lublina jest stąd czterdzieści kilometrów, a w mieście działa zakład produkujący proszki mleczne.",
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

  districtsHeading: "Do których części Ostrowa Lubelskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Ostrów Lubelski też przyjadę",
  nearbyParagraphs: [
    "Parczew, Uścimów, Ludwin, Spiczyn, Serniki i Niedźwiada są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Parczew", "Lubartów", "Ludwin", "Łęczna", "Kock", "Lublin"],

  about: blokOMnie("do Ostrowa Lubelskiego", "w Ostrowie Lubelskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostrowa Lubelskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ostrowie Lubelskim"),
    {
      question: "Ubije białka na sztywną pianę?",
      answer:
        "Tak i robi to dobrze — nie dlatego, że jest mądrzejsze od człowieka, tylko dlatego, że nie nudzi go powtarzalność i nie przerywa, kiedy ręka zaczyna boleć. To samo dotyczy ucierania i wyrabiania. Ale beza to danie o piekarniku, nie o ubijaniu — a piekarnika to urządzenie nie zastąpi.",
    },
    {
      question: "Dacie przepis na bezy ostrowskie?",
      answer:
        "Nie. To wyrób konkretnych ludzi z tego miasta, wpisany na ministerialną Listę Produktów Tradycyjnych — nie moja własność i nie moja rzecz, żeby go rozdawać. Nie doradzam też nic o surowych jajkach: ani jak sprawdzać świeżość, ani jak przechowywać. To dziedzina, w której zła podpowiedź komuś szkodzi.",
    },
  ],

  geo: { lat: 51.4881, lng: 22.8506 },
};
