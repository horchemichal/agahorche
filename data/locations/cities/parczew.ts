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
 * PARCZEW — ok. dziesięciu tysięcy mieszkańców, prawa miejskie 1401
 * (Władysław Jagiełło). Miasto sejmów walnych I Rzeczypospolitej,
 * bo leżało tam, gdzie schodziły się Korona i Litwa. Dziś: Fabryka
 * Kabli ELPAR, oddział mleczarni SPOMLEK, huta szkła.
 *
 * KĄT: dwie kuchnie w jednym domu. Miasto, w którym zjeżdżały się
 * dwie strony, żeby się dogadać, jest właściwym miejscem na sytuację,
 * o której nikt nie mówi na pokazach: dwoje ludzi wychowanych
 * w różnych kuchniach, którzy mają teraz gotować razem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że spór o to, „jak się robi” żurek, rosół czy bigos, jest
 *   normalny i nie ma w nim wersji poprawnej,
 * — że urządzenie NIE rozstrzyga takich sporów i nie jest arbitrem —
 *   przepis z ekranu to jedna z wersji, nie wyrocznia,
 * — co realnie pomaga: że da się zrobić dwie wersje bez podwójnej
 *   roboty i porównać je tego samego dnia,
 * — i że wygrywa zwykle nie „poprawna" wersja, tylko ta, którą oboje
 *   chcą jeść.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO ROZSTRZYGANIA, czyja wersja jest właściwa — ani między
 *   regionami, ani między rodzinami. Strona wprost mówi, że tego
 *   nie zrobi.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEJ HISTORII WOJENNEJ ANI OKUPACYJNEJ — nie zbierałam nawet
 *   materiału.
 * — ŻADNEGO KOMENTARZA RELIGIJNEGO. Bazylika i koronowany obraz
 *   pojawiają się wyłącznie jako fakt o mieście, z datami — tak samo
 *   jak figura w Świebodzinie występuje wyłącznie jako rekord.
 *
 * ROZGRANICZENIE. Kąt „trzy pokolenia pod jednym dachem" jest ZAJĘTY
 * przez inne miasto i ta strona się z nim nie pokrywa: tam chodzi
 * o wiek i o to, że pod jednym dachem mieszka kilka pokoleń, tu
 * o DWIE RÓWNORZĘDNE TRADYCJE KUCHENNE u dwojga dorosłych. W tekście
 * nie ma ani słowa o pokoleniach, teściowych ani o tym, kto komu
 * ustępuje. Zajęty jest też kąt „kupno urządzenia komuś innemu" —
 * tu nikt nikomu niczego nie kupuje.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję liczby zjazdów ani sejmów w Parczewie. Żadne źródło
 *   jej nie podaje — i co ważne, nie krążą tu konkurencyjne liczby,
 *   po prostu nikt konkretu nie ma. W tekście jest „miejsce sejmów
 *   walnych, m.in. tego z 1564 roku", bo TEN jest udokumentowany
 *   (24 czerwca – 12 sierpnia 1564, marszałek izby poselskiej
 *   Mikołaj Sienicki; zachowany mandat królewski z 31 lipca),
 * — NIE piszę, że miasto żyje Lasami Parczewskimi. Kompleks jest
 *   duży (ok. 136 km², rezerwat od 1984 r.), ale to fakt REGIONALNY.
 *   Danych o ruchu turystycznym w SAMYM MIEŚCIE nie ma żadnych.
 *   W tekście lasy są tłem w jednym zdaniu, nie argumentem,
 * — NIE mylę huty szkła w Parczewie z hutą w DUBECZNIE (powiat
 *   włodawski), którą zlikwidowano w 2025 r. ze zwolnieniem 250 osób.
 *   To dwa różne zakłady w tym samym regionie i branży — bardzo łatwo
 *   je pomylić. Parczewskiej huty NIE wymieniam w tekście, bo jej
 *   dzisiejszego statusu nie potwierdziłam świeżym źródłem,
 * — NIE ma tu zakładu odzieżowego ani obuwniczego z PRL — sprawdzone,
 *   nie znaleziono śladu. Nie zgaduję,
 * — NIE przypisuję powiatowi parczewskiemu produktów „z Wisznic".
 *   Ich obszar zaopatrzenia w surowiec obejmuje Podedwórze
 *   i Sosnowicę, ale GMINĄ POCHODZENIA wpisu jest Wisznice, powiat
 *   bialski. Dla powiatu parczewskiego nie znalazłam ŻADNEGO wpisu
 *   i dlatego w tekście nie ma o produktach tradycyjnych ani słowa,
 * — liczba mieszkańców: źródła podają 10 085 (koniec 2023)
 *   i 10 118 (koniec 2024), a jeden artykuł prognozował spadek
 *   poniżej dziesięciu tysięcy. W tekście jest „około dziesięciu
 *   tysięcy" i trend, bez ostrej liczby granicznej,
 * — pełnej listy nazw osiedli NIE udało się ustalić (miasto ma wykaz
 *   jednostek pomocniczych w BIP, ale bez dostępnej listy), więc
 *   districts to PUSTA TABLICA.
 *
 * FAKT UŻYTY OSTROŻNIE: bazylika mniejsza — tytuł nadany przez Jana
 * Pawła II 24 kwietnia 1989 r., ogłoszony 24 czerwca 1990 r.; obraz
 * Matki Bożej z Gruszką koronowany 6 maja 2001 r. To rzadkie
 * w mieście dziesięciotysięcznym i sprawdzalne co do dat — ale
 * w tekście jest jednym zdaniem, bez komentarza.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — prawa miejskie 1401 od Władysława Jagiełły,
 * — sejm walny 1564 r. jako ostatni sejm koronny w tym mieście,
 * — Fabryka Kabli ELPAR (ponad 250 osób) i oddział produkcyjny
 *   mleczarni SPOMLEK — oba działają i rekrutują,
 * — z Lublina 57 km, około godziny,
 * — powiat parczewski to siedem gmin.
 */
export const PARCZEW: CityContent = {
  slug: "parczew",
  h1: "Thermomix Parczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Parczew — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Parczewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Parczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Parczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Parczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Parczew i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie rozstrzygnę, czyja wersja żurku jest właściwa. I nie zamierzam.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Parczewie – jak wygląda prezentacja?",
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
      id: "dwie-kuchnie",
      heading: "Miasto, w którym zjeżdżały się dwie strony — i dom, w którym spotkały się dwie kuchnie",
      paragraphs: [
        "Parczew dostał prawa miejskie w 1401 roku od Władysława Jagiełły i przez półtora wieku bywał miejscem sejmów walnych — dlatego, że leżał tam, gdzie schodziły się Korona i Litwa. Najlepiej udokumentowany jest ten z 1564 roku, obradujący od czerwca do sierpnia; był ostatnim sejmem koronnym w tym mieście. Nie napiszę Wam, ile ich było łącznie, bo takiej liczby po prostu nikt nie podaje — a wymyślanie jej byłoby robieniem z Was durniów.",
        "Zjeżdżano się tu więc po to, żeby dwie strony się dogadały. I to jest dokładnie sytuacja, o której nikt nie mówi na pokazach kuchennych, a która zdarza się w co drugim domu: dwoje ludzi wychowanych w dwóch różnych kuchniach, którzy mają teraz gotować razem.",
        "Wygląda to zawsze tak samo. Żurek na zakwasie z chleba czy z żytniej mąki. Rosół z kurczaka czy z wołowiną. Bigos, do którego dodaje się śliwek albo się ich nie dodaje pod żadnym pozorem. Pierogi zawijane inaczej. I obie osoby mają rację, bo obie jadły to tak przez całe dzieciństwo.",
        "Powiem wprost: tego sporu nie rozstrzygnę i nie zamierzam. Nie ma poprawnej wersji żurku. Nie ma regionu, który robi go „właściwie”. A przepis wyświetlony na ekranie urządzenia to jest jedna z wersji — czyjaś, spisana i sprawdzona, ale nie wyrocznia. Traktowanie go jako rozstrzygnięcia byłoby nieporozumieniem, a mnie zrobiłoby sędzią w cudzej rodzinie.",
        "Co natomiast realnie się zmienia, i to jest jedyna rzecz, jaką tu obiecuję: przestaje boleć zrobienie dwóch wersji. Dotąd sprawdzenie obu było pół dnia przy garnkach, więc się tego nie robiło i ktoś po prostu ustępował. Kiedy większość roboty to odmierzenie i wrzucenie do jednego naczynia, dwie wersje tego samego dania w jedno popołudnie przestają być wyprawą. Można je porównać na świeżo, przy jednym stole.",
        "I zwykle okazuje się coś przewidywalnego: wygrywa nie ta „poprawna”, tylko ta, którą oboje chcą jeść — albo trzecia, która wychodzi po drodze i nie jest już niczyja. To jest, moim zdaniem, najlepsze, co można zrobić z takim sporem, i akurat w tym urządzenie pomaga bardziej niż w czymkolwiek innym.",
        "A skoro już o Parczewie: stoi tu bazylika mniejsza — tytuł nadany w 1989 roku — z obrazem koronowanym w 2001. W mieście dziesięciotysięcznym to rzadkość. Wokół zaczynają się Lasy Parczewskie, ale to już temat na inny dzień niż obiad.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Parczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest jedno danie, o które od lat się spieracie — powiedzcie mi o nim przy umawianiu. Zrobimy obie wersje przy jednym spotkaniu i zobaczycie je obok siebie. Werdyktu nie wydam, ale materiał do rozmowy będzie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Parczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla parczewskiej rodziny",
      paragraphs: [
        "Parczew ma około dziesięciu tysięcy mieszkańców i powoli ich ubywa. Pracuje tu Fabryka Kabli ELPAR i oddział mleczarni Spomlek, a do Lublina jedzie się pięćdziesiąt siedem kilometrów, czyli mniej więcej godzinę.",
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

  districtsHeading: "Do których części Parczewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości w gminie, bez dopłaty za dojazd.",
    "Nie dotarłam do oficjalnej listy nazw osiedli, więc nie będę ich wymyślać — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Parczew też przyjadę",
  nearbyParagraphs: [
    "Siemień, Milanów, Jabłoń, Dębowa Kłoda, Podedwórze, Sosnowica i Ostrów Lubelski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Siemień", "Milanów", "Jabłoń", "Ostrów Lubelski", "Radzyń Podlaski", "Lubartów"],

  about: blokOMnie("do Parczewa", "w Parczewie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Parczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Parczewie"),
    {
      question: "U nas w domu każde robi żurek inaczej. Który przepis jest właściwy?",
      answer:
        "Żaden i oba. Nie ma poprawnej wersji żurku ani regionu, który robi go „właściwie”, a przepis na ekranie to jedna z wersji, nie wyrocznia. To, co się realnie zmienia, jest inne: zrobienie dwóch wersji tego samego dania w jedno popołudnie przestaje być wyprawą, więc można je porównać na świeżo zamiast się o nie spierać.",
    },
    {
      question: "Czy urządzenie narzuca swoje przepisy?",
      answer:
        "Nie — przepisy prowadzą krok po kroku, ale nic nie stoi na przeszkodzie, żeby gotować po swojemu i zmieniać składniki pod siebie. Jeśli macie w domu wersję rodzinną, którą chcecie zachować, powiedzcie o niej przy umawianiu i zrobimy właśnie ją.",
    },
  ],

  geo: { lat: 51.6403, lng: 22.9028 },
};
