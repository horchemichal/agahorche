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
 * GŁOWNO — gmina miejska w powiecie zgierskim, 13 022
 * mieszkańców (31.12.2024, GUS). Brief mówił 14 000 — zawyżone;
 * ta liczba krąży w tekstach popularnych. Osobno istnieje gmina
 * wiejska Głowno.
 *
 * PRAWA MIEJSKIE — WAŻNA KOREKTA: aktualny stan badań
 * (monografia „Głowno. Dzieje miasta", 2010) to **1425 r.**,
 * a NIE obiegowe 1427 — dlatego 600-lecie obchodzono w 2025 r.
 * Nadawcy NIE PODAJĘ: po korekcie daty źródła go nie wskazują.
 * Utrata praw miejskich 1870. PRZYWRÓCENIE: rozporządzenie
 * z 30 GRUDNIA 1924 r., podpisane przez ministra spraw
 * wewnętrznych Cyryla Ratajskiego; weszło w życie w 1925 r.
 * — i stąd rozpowszechniona, ale nieścisła data „1925".
 * Pierwsza wzmianka pisemna: 1419 r.
 *
 * OBALONE: Głowno NIE JEST miastem dziewiarskim. Nie znalazłam
 * żadnego działającego zakładu dziewiarskiego; oficjalna strona
 * miasta wymienia dziewiarstwo wyłącznie historycznie.
 * OBALONE: miejscowa mleczarnia jest w bazie firm
 * zlikwidowanych.
 * NAZW ZAKŁADÓW NIE PODAJĘ i nie robię z ich upadku scenografii.
 *
 * FAKT OSIOWY DLA KĄTA: w Głownie działa producent GRANULATU
 * I PŁATKÓW ZIEMNIACZANYCH, deklarujący się jako JEDYNY
 * PRODUCENT GRANULATU ZIEMNIACZANEGO W POLSCE. Tradycja
 * przetwórstwa ziemniaka sięga tu ponad stu lat: fabryka
 * krochmalu założona w latach 1922–1923 przez hr. Kazimierza
 * Rzewuskiego, produkcja granulatów od lat 1978–1979, nowy
 * oddział wybudowany w 2022 r. NAZWY FIRMY NIE PODAJĘ.
 *
 * ZALEW MROŻYCZKA — utworzony 1975 r., ponad 30 ha na rzece
 * Mrodze, w centralnej części miasta; kąpielisko czynne
 * 13.06–31.08.2026. Rezerwat ZABRZEŹNIA (1984, ponad 27 ha).
 * Kościół św. Jakuba 1922–1930 w formie rotundy. Drewniana
 * karczma z 1740 r. HERB: głowa św. Jana Chrzciciela na złotej
 * misie.
 *
 * PRODUKTY Z LISTY PRODUKTÓW TRADYCYJNYCH: pasztety z Głowna
 * i pierogi z Głowna. DAT WPISU NIE PODAJĘ — nieustalone.
 * NIE ROBIĘ Z NICH KĄTA: pasztet i pierogi mają w serwisie
 * własne strony. Wymieniam je jednym zdaniem.
 *
 * KĄT: PŁATKI ZIEMNIACZANE I PUREE Z PROSZKU — czyli jedzenie
 * instant i pytanie, kiedy warto je robić samemu. Kąt bierze
 * się wprost z tego, że to miasto od stu lat przerabia
 * ziemniaka na proszek.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że purée z torebki nie jest niczym wstydliwym i że nie
 *   zamierzam z tego robić zarzutu,
 * — że różnica między purée z proszku a z ziemniaków jest
 *   realna, ale mierzy się ją w smaku i teksturze, NIE
 *   w zdrowiu,
 * — co urządzenie robi dobrze: gotuje ziemniaki i od razu
 *   rozdrabnia je w tym samym naczyniu, bez tłuczka i bez
 *   przelewania,
 * — CZEGO ROBIĆ NIE WOLNO, i to jest sedno: ZIEMNIAKÓW NIE
 *   MIKSUJE SIĘ DŁUGO NA WYSOKICH OBROTACH — robi się z nich
 *   klej. To najczęstszy błąd przy tym sprzęcie,
 * — że purée robi się krótko, na wolnych obrotach, mieszadłem,
 *   a nie nożem na pełnej mocy,
 * — że proszek ma jedną przewagę, której nie da się podważyć:
 *   nie psuje się i leży w szafce,
 * — i ODMOWA: żadnych porad żywieniowych ani składu produktów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. Piszę „krótko
 *   i na wolnych obrotach" jakościowo, bez liczb.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — „instant jest gorszy",
 *   skrobia, indeks glikemiczny, dodatki do żywności.
 *   MÓWIĘ NIE, i to wyraźnie, bo to jest przy tym temacie
 *   największa pokusa.
 * — ŻADNEJ OCENY SKŁADU produktów przemysłowych.
 * — ŻADNYCH NAZW FIRM ani marek.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ugotowanych ziemniaków.
 * — NIE ROBIĘ TŁA z upadku dziewiarstwa i mleczarni.
 * — NIE UŻYWAM nazwy dawnego letniska, na którego terenie
 *   Niemcy utworzyli w 1940 r. getto. Tematu wojny nie dotykam
 *   w ogóle.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ziemniaki — najzwyklejszy
 * składnik" (inne miasto) dotyczą warzywa jako takiego.
 * „Pyzy i kluski ziemniaczane" (Praszka) dotyczą ciasta
 * z ziemniaków. „Gotowe danie ze słoika" dotyczy produktów
 * przemysłowych w słoiku. Tutaj chodzi o JEDNĄ KONKRETNĄ
 * POSTAĆ: ziemniaka wysuszonego na proszek i o purée — oraz
 * o najczęstszy błąd, czyli zmiksowanie ziemniaków na klej.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku 1427 jako praw miejskich. To 1425.
 * — NIE PISZĘ, że prawa przywrócono w 1925 r. — rozporządzenie
 *   ma datę 30 grudnia 1924.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE PISZĘ, że Głowno jest miastem dziewiarskim.
 * — NIE PODAJĘ nazwy zakładu przetwórstwa ziemniaka ani liczby
 *   zatrudnionych; nie twierdzę, że to największy pracodawca.
 * — NIE PODAJĘ dat wpisu pasztetów i pierogów z Głowna.
 * — NIE PISZĘ, czy pałacyk Jabłońskich nadal mieści muzeum —
 *   źródło używa formy „dawniej".
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 13 022 mieszkańców (31.12.2024, GUS),
 * — pierwsza wzmianka 1419 r.; prawa miejskie 1425 r., utracone
 *   w 1870, przywrócone rozporządzeniem z 30 grudnia 1924 r.;
 *   600-lecie obchodzono w 2025 r.,
 * — przetwórstwo ziemniaka od ponad stu lat: fabryka krochmalu
 *   z lat 1922–1923, produkcja granulatów od lat 1978–1979,
 *   nowy oddział w 2022 r.; działa tu jedyny w Polsce producent
 *   granulatu ziemniaczanego,
 * — zalew Mrożyczka na Mrodze, utworzony w 1975 r., ponad 30 ha;
 *   kąpielisko czynne latem 2026 r.,
 * — rezerwat Zabrzeźnia z 1984 r., ponad 27 ha,
 * — kościół św. Jakuba z lat 1922–1930 w formie rotundy;
 *   drewniana karczma z 1740 r.,
 * — herb: głowa św. Jana Chrzciciela na złotej misie,
 * — pasztety z Głowna i pierogi z Głowna na Liście Produktów
 *   Tradycyjnych.
 */
export const GLOWNO: CityContent = {
  slug: "glowno",
  h1: "Thermomix Głowno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Głowno (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Głownie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Głowno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głownie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Głowna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicy.",

  highlights: highlightyStandardowe("Głowno i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ziemniaków nie miksuje się długo. Wychodzi klej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głownie – jak wygląda prezentacja?",
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
      id: "platki",
      heading: "Sto lat przerabiania ziemniaka na proszek — czyli o purée z torebki",
      paragraphs: [
        "W Głownie przerabia się ziemniaka na proszek od ponad stu lat. Fabrykę krochmalu założył tu w latach 1922–1923 hrabia Kazimierz Rzewuski, produkcja granulatów ruszyła pod koniec lat siedemdziesiątych, a nowy oddział stanął w 2022 roku. Działa tu jedyny w Polsce producent granulatu ziemniaczanego. Dodam przy okazji dwa sprostowania, bo o tym mieście krążą nieaktualne informacje: prawa miejskie Głowno ma od 1425, a nie 1427 roku — dlatego 600-lecie wypadło w 2025 — a rozporządzenie przywracające je po latach ma datę 30 grudnia 1924, nie 1925.",
        "Skoro więc jesteśmy w mieście płatków ziemniaczanych, napiszę o purée z torebki. I zacznę od zdania, którego nie usłyszycie od sprzedawcy sprzętu: purée z proszku to nie jest nic wstydliwego i nie zamierzam robić z tego zarzutu.",
        "Ma ono jedną przewagę, której nie da się podważyć: nie psuje się i leży w szafce. W czwartek o dziewiętnastej, kiedy nie ma nic, jest lepsze niż brak obiadu. Kto twierdzi inaczej, ma prawdopodobnie więcej czasu niż Wy.",
        "Różnica jest natomiast realna i chcę być precyzyjna, na czym polega: na smaku i na strukturze. Purée z prawdziwych ziemniaków ma inny ciężar i inny zapach. To wszystko. Nie napiszę Wam, że jedno jest zdrowsze od drugiego, nie będę oceniać składu produktów z torebki i nie mam o tym nic mądrego do powiedzenia — nie jestem od tego.",
        "A teraz to, co przy ziemniakach robi to urządzenie, i najważniejsze ostrzeżenie na tej stronie.",
        "Robi dobrze jedno: gotuje ziemniaki i rozdrabnia je w tym samym naczyniu. Nie ma odlewania, nie ma tłuczka, nie ma przekładania do miski, nie ma trzeciego garnka na mleko z masłem — to wchodzi do środka na końcu.",
        "A teraz uwaga, bo to jest najczęstszy błąd przy tym sprzęcie i popełnia go prawie każdy raz: ZIEMNIAKÓW NIE MIKSUJE SIĘ DŁUGO ANI NA WYSOKICH OBROTACH. Wychodzi z nich klej. Dosłownie — gluty, które ciągną się za łyżką i których nie da się już uratować. Bierze się to ze skrobi: im mocniej i dłużej się ją rozbija, tym bardziej się uwalnia i skleja. Purée robi się krótko i wolno, mieszadłem, a nie nożem na pełnej mocy. Kto raz zrobił ziemniaczany klej, ten pamięta do końca życia — a nikt o tym nie uprzedza przed zakupem.",
        "Na marginesie, skoro Głowno: pasztety i pierogi z Głowna są na Liście Produktów Tradycyjnych. O obu pisałam osobno, przy innych miastach.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głownie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokażę purée zrobione tak, jak trzeba — i powiem, w którym momencie robi się z niego klej. To jedna z tych rzeczy, które lepiej zobaczyć raz, niż przeczytać dziesięć razy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Głownie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla głowieńskiej rodziny",
      paragraphs: [
        "Głowno liczy ponad trzynaście tysięcy mieszkańców. Pierwsza wzmianka pochodzi z 1419 roku, prawa miejskie miasto otrzymało w 1425, straciło je w 1870 i odzyskało rozporządzeniem z 30 grudnia 1924 roku. W herbie ma głowę świętego Jana Chrzciciela na złotej misie. W centrum leży zalew Mrożyczka — ponad trzydzieści hektarów na rzece Mrodze, utworzony w 1975 roku, z kąpieliskiem czynnym latem — a w północnej części miasta rezerwat Zabrzeźnia z 1984 roku. Stoi tu kościół świętego Jakuba z lat 1922–1930, zbudowany w formie rotundy, i drewniana karczma z 1740 roku. Głowno przerabia ziemniaka od ponad stu lat: od fabryki krochmalu z lat dwudziestych po dzisiejszą produkcję płatków i granulatu.",
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

  districtsHeading: "Do których części Głowna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum, nad Mrożyczkę i do zabudowy po obu stronach Mrogi — a także do wsi gminy wiejskiej Głowno. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Głowno też przyjadę",
  nearbyParagraphs: [
    "Stryków, Brzeziny, Zgierz, Łowicz, Ozorków, Łódź i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Stryków", "Brzeziny", "Zgierz", "Łowicz", "Łódź"],

  about: blokOMnie("do Głowna", "w Głownie i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głowna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy wiejskiej Głowno — to dwie odrębne gminy o tej samej nazwie, ale przyjeżdżam do obu. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Głownie"),
    {
      question: "Dlaczego moje purée wyszło jak klej?",
      answer:
        "Bo ziemniaki były miksowane za długo albo na zbyt wysokich obrotach. To najczęstszy błąd przy tym sprzęcie: im mocniej rozbija się skrobię, tym bardziej się uwalnia i skleja. Purée robi się krótko i wolno, mieszadłem, a nie nożem na pełnej mocy — i tego nikt nie mówi przed zakupem.",
    },
    {
      question: "To w czym pomaga przy ziemniakach?",
      answer:
        "Gotuje je i rozdrabnia w tym samym naczyniu. Nie ma odlewania, tłuczka, przekładania do miski ani osobnego garnka na mleko z masłem — to wchodzi do środka na końcu.",
    },
    {
      question: "Czy purée z torebki jest gorsze?",
      answer:
        "Inne — w smaku i w strukturze. Ma za to przewagę, której nie da się podważyć: nie psuje się i leży w szafce, a w czwartek o dziewiętnastej jest lepsze niż brak obiadu. Nie napiszę Ci, że jedno jest zdrowsze od drugiego, i nie oceniam składu produktów z torebki — nie jestem od tego.",
    },
  ],

  geo: { lat: 51.9643, lng: 19.7157 },
};
