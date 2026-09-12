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
 * PRZEDBÓRZ — gmina miejsko-wiejska w powiecie radomszczańskim.
 * MIASTO 3 157, GMINA 6 506 (GUS 31.12.2024).
 * Strona urzędu podaje ok. 4 000 / 8 200 — NIEAKTUALNE.
 *
 * KUGIEL Z PRZEDBORZA — Lista Produktów Tradycyjnych MRiRW,
 * kategoria „gotowe dania i potrawy", woj. łódzkie. Tarte
 * ziemniaki z mięsem, pieczone. To jedyny wpis LPT tej fali
 * przypisany wprost do miasta. DATY WPISU NIE PODAJĘ — nie
 * udało się potwierdzić.
 *
 * PRAWA MIEJSKIE — SPORNE: XIV w. (Kazimierz Wielki, 1370)
 * albo lokacja 1405. NIE ROZSTRZYGAM, piszę „XIV/XV w.".
 * UTRATY I PRZYWRÓCENIA NIE POTWIERDZONO — nie piszę o ukazie.
 *
 * NAJMOCNIEJSZY FAKT: 29 LIPCA 1423 r. Władysław Jagieł­ło,
 * przebywając w Przedborzu, nadał prawa miejskie ŁODZI.
 * Nie piszę „Łódź powstała w Przedborzu" — chodzi o przywilej
 * lokacyjny wsi Łodzia wystawiony w tym mieście.
 *
 * PRZYRODA: Przedborski Park Krajobrazowy, uchwały WRN
 * z 27 maja i 10 czerwca 1988 r., 16 553 ha + otulina 18 466 ha
 * (dane zarządcy — Zespół Parków Krajobrazowych Woj. Łódzkiego;
 * strona gminy podaje inne, nie używam). Lesistość gminy ok. 54%.
 * Miasto leży nad PILICĄ.
 * ZABYTKI: kościół św. Aleksego, wieża z 1341 r.; ruiny zamku
 * Kazimierza Wielkiego; ratusz — DATA ROZBIEŻNA, piszę
 * „pierwsza połowa XIX w."
 *
 * KĄT: PRZEPIS, KTÓRY MA URZĘDOWĄ DEFINICJĘ — co wolno w nim
 * zmienić, zanim przestanie być tą potrawą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że istnieje państwowy rejestr, w którym potrawa ma spisaną
 *   definicję, i że kugiel z Przedborza jest w nim,
 * — że to rzadka sytuacja: zwykle przepis jest umową rodzinną,
 *   a tu jest zapisem,
 * — że urządzenie nie zmienia definicji potrawy, tylko sposób
 *   dojścia do niej — i że warto wiedzieć, gdzie przebiega
 *   granica między „inaczej zrobione" a „inne danie",
 * — że przy tartych ziemniakach urządzenie zabiera tarkę,
 *   ale NIE zabiera piekarnika — pieczenie zostaje,
 * — że opis w rejestrze mówi CO, a nie ILE i JAK DŁUGO,
 * — i ODMOWA: nie podaję przepisu na kugiel i nie będę
 *   rozstrzygać, czyja wersja jest właściwa.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — NIE PODAJĘ przepisu na kugiel ani proporcji.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ daty wpisu na LPT ani liczby sołectw.
 * — NIE ROBIĘ TŁA ze spadku liczby mieszkańców (−19,4%).
 * — MUZEUM LUDOWE opisuję wyłącznie jako etnograficzne
 *   w dawnej karczmie. ZERO wątku znachorstwa
 *   i bioenergoterapii — to pseudonauka i twierdzenia zdrowotne.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ziemniaki" (osobne
 * miasto) dotyczą surowca. „Pyzy i kluski ziemniaczane"
 * dotyczą ciasta z ziemniaków. „Odtwarzanie przepisu, którego
 * nikt nie zapisał" (Puck) dotyczy przepisu utraconego.
 * „Zapisywanie" (Chmielnik) dotyczy własnego archiwum.
 * Tutaj chodzi o coś odwrotnego: przepis, który MA zapis
 * urzędowy, i o to, co z tego wynika w kuchni.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku praw miejskich jako pewnika.
 * — NIE PISZĘ o utracie i odzyskaniu praw miejskich.
 * — NIE PODAJĘ daty budowy ratusza (trzy różne wersje).
 * — NIE PODAJĘ liczby sołectw gminy.
 * — NIE PODAJĘ nazw festiwali — brak potwierdzonych.
 * — NIE MYLĘ Przedborza z PRZEDECZEM ani z wsiami o tej samej
 *   nazwie w kujawsko-pomorskim, mazowieckim i podkarpackim.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 157, gmina 6 506 mieszkańców (GUS 31.12.2024),
 * — 29 lipca 1423 r. w Przedborzu Władysław Jagiełło wystawił
 *   przywilej lokacyjny dla Łodzi,
 * — kugiel z Przedborza figuruje na Liście Produktów
 *   Tradycyjnych Ministerstwa Rolnictwa; to tarte ziemniaki
 *   z mięsem, pieczone,
 * — kościół św. Aleksego — wieża z 1341 r.,
 * — ruiny zamku Kazimierza Wielkiego; gród wzmiankowany 1239 r.,
 * — Przedborski Park Krajobrazowy utworzony w 1988 r.,
 *   16 553 ha plus otulina 18 466 ha,
 * — lesistość gminy ok. 54%; miasto leży nad Pilicą,
 * — Muzeum Ludowe Ziemi Przedborskiej mieści się w XVII-wiecznym
 *   budynku dawnej karczmy.
 */
export const PRZEDBORZ: CityContent = {
  slug: "przedborz",
  h1: "Thermomix Przedbórz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Przedbórz (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Przedborzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przedbórz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Przedborzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Przedborza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Przedbórz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kugiel z Przedborza ma spisaną definicję. Niewiele potraw ją ma.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przedborzu – jak wygląda prezentacja?",
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
      id: "urzedowa-definicja",
      heading: "Kugiel jest w państwowym rejestrze — czyli o przepisie, który ma urzędową definicję",
      paragraphs: [
        "Przedbórz to małe miasto nad Pilicą, w którym w lipcu 1423 roku Władysław Jagiełło wystawił przywilej lokacyjny dla Łodzi — dziś półtoramilionowej, wtedy wsi. Ale najbardziej interesuje mnie w nim co innego: kugiel z Przedborza figuruje na Liście Produktów Tradycyjnych Ministerstwa Rolnictwa. Tarte ziemniaki z mięsem, pieczone. Nie „danie z okolic”, tylko wpis z nazwą miasta.",
        "To rzadka sytuacja i warto rozumieć, co ona naprawdę oznacza. W ogromnej większości przypadków przepis jest umową rodzinną: babcia robiła tak, ciotka inaczej, i obie mają rację. Tutaj gdzieś istnieje spisany opis, do którego można się odwołać. Przepis przestaje być tylko pamięcią, a staje się dokumentem.",
        "I stąd pytanie, które w kuchni pada częściej, niż się wydaje: co wolno w przepisie zmienić, zanim przestanie być tą potrawą? Bo granica gdzieś jest. Inne przyprawy — nadal to samo danie. Inny sposób rozdrobnienia ziemniaków — nadal. Zamiana pieczenia na gotowanie — już nie, bo pieczenie jest w tej potrawie istotą, a nie szczegółem.",
        "Do tego właśnie potrzebne jest to rozróżnienie przy urządzeniu. Ono nie zmienia definicji potrawy. Zmienia drogę dojścia do niej. Tarte ziemniaki będą tarte, cebula posiekana, mięso rozdrobnione, wszystko w jednym naczyniu, bez tarki i bez trzech misek. Ale to, co dzieje się potem — czyli pieczenie — dzieje się w piekarniku, tak jak dziesięć lat temu i tak jak sto. Piszę o tym wprost, bo obietnica „urządzenie zrobi wszystko” jest po prostu nieprawdziwa i pisałam o niej osobno.",
        "Warto też zauważyć, czego w takim urzędowym opisie nie ma. Jest w nim, z czego się potrawę robi i mniej więcej jak. Nie ma dokładnych gramatur, minut ani stopni — bo tego nikt nie kodyfikuje. Czyli nawet potrawa z rejestru zostawia kucharzowi tyle miejsca, ile potrzebuje.",
        "I granica, przy której nie ustąpię: nie podam Wam przepisu na kugiel i nie będę rozstrzygać, czyja wersja jest właściwa. W mieście, w którym tę potrawę robi się od pokoleń, byłoby to zwyczajnie bezczelne z mojej strony. Przyjeżdżam pokazać urządzenie, a nie uczyć kogokolwiek jego własnej kuchni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Przedborzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć konkretnie tarcie i rozdrabnianie, a nie efektowne dania z ulotki — powiedzcie przy umawianiu. Chętnie pokażę tę część, bo to ona zajmuje najwięcej czasu przy prawdziwym gotowaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Przedborzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla przedborskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad trzy tysiące mieszkańców, a cała gmina blisko sześć i pół tysiąca — dane ze strony urzędu są mocno zawyżone, więc podaję te z GUS-u za koniec 2024 roku. Przedbórz ma prawa miejskie od XIV albo XV wieku, bo źródła podają dwie różne wersje i nie będę udawać, że wiem którą. Nad miastem stoją ruiny zamku Kazimierza Wielkiego, a wieża kościoła świętego Aleksego pochodzi z 1341 roku. Ponad połowa gminy to lasy: Przedbórz leży nad Pilicą, w Przedborskim Parku Krajobrazowym utworzonym w 1988 roku, obejmującym ponad szesnaście i pół tysiąca hektarów. W dawnej siedemnastowiecznej karczmie mieści się Muzeum Ludowe Ziemi Przedborskiej.",
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

  districtsHeading: "Do których części gminy Przedbórz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy, także tych położonych w granicach Przedborskiego Parku Krajobrazowego. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Przedbórz też przyjadę",
  nearbyParagraphs: [
    "Radomsko, Włoszczowa, Końskie, Kamieńsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radomsko", "Kamieńsk", "Sulejów", "Wolbórz"],

  about: blokOMnie("do Przedborza", "w Przedborzu i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Przedborza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Przedbórz nad Pilicą w powiecie radomszczańskim — nie o Przedecz w wielkopolskim ani o wsie o tej samej nazwie w kujawsko-pomorskim, mazowieckim i podkarpackim.",
    },
    ...faqWspolne("w Przedborzu"),
    {
      question: "Czy w Thermomixie zrobię kugla?",
      answer:
        "Część roboty tak: tarte ziemniaki, posiekaną cebulę i rozdrobnione mięso w jednym naczyniu, bez tarki i bez trzech misek. Ale pieczenie zostaje w piekarniku i to się nie zmienia. Przepisu Wam nie podam — w mieście, w którym robi się go od pokoleń, byłoby to z mojej strony bezczelne.",
    },
    {
      question: "Czy danie zrobione w urządzeniu to jeszcze ta sama potrawa?",
      answer:
        "Zależy, co zmieniacie. Inny sposób rozdrobnienia składników — tak, to nadal to samo danie. Zamiana istotnego etapu, na przykład pieczenia na gotowanie — już nie. Urządzenie zmienia drogę dojścia do potrawy, a nie jej definicję.",
    },
    {
      question: "Czy Thermomix zastąpi piekarnik?",
      answer:
        "Nie. Wszystko, co ma się zapiec i mieć wierzch, robi piekarnik — i tak zostanie. Urządzenie przejmuje etap przygotowania: tarcie, siekanie, rozdrabnianie, mieszanie. Pisałam o tym osobno, bo obietnica, że zastąpi wszystko, jest po prostu nieprawdziwa.",
    },
  ],

  geo: { lat: 51.088, lng: 19.8737 },
};
