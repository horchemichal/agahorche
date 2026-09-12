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
 * BIAŁA PISKA — gmina miejsko-wiejska w powiecie piskim.
 * MIASTO 3 658, GMINA 10 336 (GUS 31.12.2024). 48 SOŁECTW
 * plus dwa zarządy osiedli w mieście. Gmina 420,4 km² —
 * największa obszarowo i ludnościowo w tej fali.
 * ⚠ Wcześniejsza notatka projektowa podawała 4 000 dla
 * miasta — ZAWYŻONE.
 *
 * OSADA LOKOWANA 1428 r. PRAWA MIEJSKIE 26 MARCA 1722 r.,
 * nadał FRYDERYK WILHELM I.
 * ⚠ OBALONE: „prawa miejskie z 1428 r." — to lokacja osady.
 * ⚠ OBALONE: „prawa nadał zakon krzyżacki" — nadał je król
 * pruski, 291 lat później.
 * PRZYNALEŻNOŚĆ: MAZURY (Prusy Książęce → Królestwo Prus).
 *
 * „MIASTO TRZECH WIEŻ" — określenie używane przez miejscowy
 * ośrodek kultury. Wieże: WIEŻA CIŚNIEŃ (1928, 34 m) — dziś
 * atrakcja z ekspozycją i tarasem widokowym; RATUSZ
 * z ośmioboczną wieżą ok. 30 m; KOŚCIÓŁ BAROKOWY z wieżą.
 * ⚠ DAT RATUSZA I KOŚCIOŁA NIE PODAJĘ — źródła są sprzeczne
 * (kościół 1756–1793 vs 1756–1763; wieża 1932 vs 1832;
 * ratusz 1772–1777 vs początek XX w.). Podaję tylko datę
 * wieży ciśnień i „osiemnastowieczny kościół barokowy".
 * KOŚCIÓŁ pw. ŚW. ANDRZEJA BOBOLI — ołtarz główny z XVII w.
 * BIAŁA PISKA NALEŻY DO SIECI CITTASLOW.
 * RZEKA BIAŁKA. Nazwa „Biała" od pruskiego słowa oznaczającego
 * biały.
 * MIASTECZKO SŁYNĘŁO Z JARMARKÓW HANDLU BYDŁEM.
 * KOLEJ dotarła w 1885 r.; sąd i wodociągi 1927–1928.
 * ZNANE OSOBY: Krzysztof Liebruder (1592–1659), królewiecki
 * duszpasterz polski; Jan Szamborski (1780–1832), autor
 * podręczników do nauki języka polskiego.
 *
 * KĄT: SYNCHRONIZACJA — żeby wszystko było gotowe naraz.
 * Kąt od trzech wież, które w tym mieście widać jednocześnie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najtrudniejsza rzecz w niedzielnym obiedzie to nie
 *   żadne danie, tylko doprowadzenie wszystkiego do gotowości
 *   w tej samej chwili,
 * — że kluczem jest liczenie OD TYŁU: od godziny podania,
 *   a nie od momentu wejścia do kuchni,
 * — że najpierw ustala się, co jest NAJMNIEJ ELASTYCZNE —
 *   zwykle pieczeń albo coś w piekarniku — i wszystko inne
 *   układa się wokół tego,
 * — że urządzenie zmienia tu jedną rzecz zasadniczo: gotuje
 *   bez nadzoru, więc uwalnia uwagę, a nie tylko czas,
 * — że najczęstszy błąd to zaczynanie od tego, co najłatwiejsze,
 *   zamiast od tego, co trwa najdłużej,
 * — że rzeczy nieelastyczne (kluski, panierowane, purée)
 *   planuje się na sam koniec, a bazy z wyprzedzeniem,
 * — i ODMOWA: nie podaję gotowych harmonogramów z minutami.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — także żadnego
 *   przykładowego harmonogramu z konkretnymi minutami.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ dat ratusza ani kościoła.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM żadnej z niemieckich nazw miasta; jedna z nich
 *   pochodzi z 1938 r. i jest politycznie obciążona.
 * — ZERO roku 1945 i wysiedleń ludności mazurskiej.
 * — ZERO wątku wojskowego: w gminie jest duży garnizon
 *   i poligon — NIE WSPOMINAM O TYM ANI SŁOWEM, także przy
 *   wyliczaniu sołectw.
 * — ZERO września 1939.
 * — ZERO plebiscytu 1920.
 * — NIE ROBIĘ TŁA z demografii.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Wszystko przygotowane
 * przed startem" (Sulejów) dotyczy przygotowania składników
 * PRZED gotowaniem. „Danie, które może poczekać" (Kamieńsk)
 * dotyczy potrawy czekającej na ludzi. „Dwa dania z jednego
 * przebiegu" (Łask) dotyczą jednego uruchomienia urządzenia.
 * „Przerwa w środku gotowania" (Pasłęk) dotyczy przerwania.
 * Tutaj chodzi o JEDNOCZESNOŚĆ: o to, żeby kilka potraw
 * skończyło w tym samym momencie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dat budowy ratusza i kościoła.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie potwierdzono.
 * — NIE PISZĘ o jeziorach w granicach miasta.
 * — NIE PRZYPISUJĘ Białej Piskiej produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PISZĘ, czy „Miasto Trzech Wież" to zarejestrowana
 *   marka — podaję to jako określenie używane lokalnie.
 * — NIE MYLĘ Białej Piskiej z Białą Podlaską, Białą Rawską
 *   ani Białą w opolskiem. FAQ to rozróżnia.
 * — districts: brak potwierdzonych nazw osiedli.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 658, gmina 10 336 mieszkańców; 48 sołectw;
 *   gmina ma ponad 420 km²,
 * — osadę lokowano w 1428 r., prawa miejskie nadał
 *   26 marca 1722 r. król pruski Fryderyk Wilhelm I;
 *   Biała Piska leży na Mazurach,
 * — miasto bywa nazywane Miastem Trzech Wież: wieży ciśnień
 *   z 1928 r. o wysokości 34 m, z tarasem widokowym,
 *   ośmiobocznej wieży ratusza i wieży barokowego kościoła,
 * — kościół nosi wezwanie świętego Andrzeja Boboli i ma
 *   ołtarz główny z XVII w.,
 * — miasto należy do sieci Cittaslow,
 * — przez gminę płynie Białka,
 * — miasteczko słynęło z jarmarków handlu bydłem,
 * — kolej dotarła tu w 1885 r., a sąd i wodociągi powstały
 *   w latach 1927–1928,
 * — z Białą Piską związani są Krzysztof Liebruder
 *   i Jan Szamborski, autor podręczników do nauki polskiego.
 */
export const BIALA_PISKA: CityContent = {
  slug: "biala-piska",
  h1: "Thermomix Biała Piska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Biała Piska (Mazury) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Białej Piskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biała Piska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białej Piskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białej Piskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Biała Piska i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najtrudniejsze w niedzielnym obiedzie nie jest żadne danie. Tylko żeby skończyły razem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białej Piskiej – jak wygląda prezentacja?",
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
      id: "synchronizacja",
      heading: "Miasto Trzech Wież — czyli żeby wszystko było gotowe naraz",
      paragraphs: [
        "Biała Piska bywa nazywana Miastem Trzech Wież i nie jest to przechwałka: nad niewielkim miasteczkiem stoją obok siebie wieża ciśnień z 1928 roku, wysoka na trzydzieści cztery metry i dziś udostępniona jako punkt widokowy, ośmioboczna wieża ratusza i wieża barokowego kościoła świętego Andrzeja Boboli. Widać je jednocześnie. Samo miasto zaczynało jako osada lokowana w 1428 roku, a prawa miejskie dostało dopiero 26 marca 1722 od króla pruskiego Fryderyka Wilhelma I — nie od Krzyżaków, jak się często pisze, bo to Mazury i inna epoka. Dawniej słynęło z jarmarków handlu bydłem.",
        "Trzy wieże widoczne w jednej chwili to dobry obraz dla rzeczy, która w domowym gotowaniu jest najtrudniejsza, a prawie nigdy nie zostaje nazwana: nie chodzi o to, żeby ugotować dobrze każde danie. Chodzi o to, żeby były gotowe w tym samym momencie.",
        "Bo to jest prawdziwy problem niedzielnego obiadu. Zupa stygnie, zanim mięso dojdzie. Ziemniaki są gotowe kwadrans za wcześnie i rozpadają się w garnku. Surówka stoi od godziny i puściła wodę. Każde danie z osobna wyszło, a obiad i tak jest nierówny.",
        "Sposób jest jeden i polega na odwróceniu myślenia: liczy się od tyłu. Nie od momentu, w którym wchodzicie do kuchni, tylko od godziny, o której ludzie mają usiąść. Od tej godziny cofa się każde danie o tyle, ile potrzebuje — i wtedy wychodzi, o której trzeba zacząć co.",
        "Najpierw ustala się, co jest najmniej elastyczne. Zwykle jest to jedna rzecz: pieczeń, coś w piekarniku, coś, czego nie da się przyspieszyć ani opóźnić bez straty. To ona wyznacza godzinę, a cała reszta układa się wokół niej. Nie odwrotnie.",
        "I tu urządzenie zmienia coś naprawdę istotnego, tylko nie to, o czym mówią foldery. Nie chodzi o oszczędność czasu. Chodzi o to, że jedno danie gotuje się samo, bez nadzoru — więc uwalnia nie minuty, tylko uwagę. Przy synchronizowaniu czterech potraw uwaga jest zasobem rzadszym niż czas, bo to ona kończy się pierwsza.",
        "Najczęstszy błąd jest banalny i popełniam go sama, kiedy się śpieszę: zaczynanie od tego, co najłatwiejsze. Człowiek robi surówkę, bo szybko idzie, i dopiero potem zabiera się za to, co trwa dwie godziny. Kolejność powinna być odwrotna — najpierw najdłuższe, choćby dlatego, że potem można o nim zapomnieć.",
        "Na sam koniec zostawia się rzeczy nieelastyczne: kluski, makaron, purée, wszystko panierowane i chrupiące. One nie znoszą czekania nawet kilkunastu minut. Bazy — sos, wywar, farsz, ciasto — robi się natomiast z wyprzedzeniem, choćby dzień wcześniej.",
        "I granica: nie napiszę Wam gotowego harmonogramu z minutami. Zależy od liczby dań, od piekarnika i od tego, ile osób jest w kuchni. Chcę, żebyście liczyli od tyłu i wiedzieli, co jest u Was tą jedną nieelastyczną rzeczą — reszta z tego wynika.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białej Piskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Gmina jest rozległa, więc przy umawianiu podajcie miejscowość — ułożę trasę tak, żeby przyjechać o porze, która Wam pasuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białej Piskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Białej Piskiej",
      paragraphs: [
        "Samo miasto liczy ponad trzy i pół tysiąca mieszkańców, a cała gmina ponad dziesięć tysięcy, w czterdziestu ośmiu sołectwach — to jedna z największych obszarowo gmin w regionie, ponad czterysta dwadzieścia kilometrów kwadratowych. Osadę lokowano w 1428 roku, ale prawa miejskie Biała Piska dostała dopiero 26 marca 1722 od króla pruskiego Fryderyka Wilhelma I. Nazywa się ją Miastem Trzech Wież: stoją tu obok siebie wieża ciśnień z 1928 roku z tarasem widokowym, ośmioboczna wieża ratusza i wieża barokowego kościoła świętego Andrzeja Boboli, w którym zachował się siedemnastowieczny ołtarz główny. Przez gminę płynie Białka, kolej dotarła tu w 1885 roku, a miasto należy do sieci Cittaslow.",
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

  districtsHeading: "Do których części gminy Biała Piska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu ośmiu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Białą Piską też przyjadę",
  nearbyParagraphs: [
    "Pisz, Orzysz, Ełk, Grajewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pisz", "Orzysz", "Ełk", "Ruciane-Nida"],

  about: blokOMnie("do Białej Piskiej", "w Białej Piskiej i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Białej Piskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu ośmiu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo „Biał” w Polsce jest kilka: chodzi o Białą Piską na Mazurach, w powiecie piskim — nie o Białą Podlaską, Białą Rawską ani Białą w opolskiem.",
    },
    ...faqWspolne("w Białej Piskiej"),
    {
      question: "Jak zrobić, żeby cały obiad był gotowy naraz?",
      answer:
        "Liczyć od tyłu — od godziny, o której ludzie mają usiąść, a nie od momentu wejścia do kuchni. Najpierw ustalić, co jest najmniej elastyczne, zwykle pieczeń albo coś w piekarniku; to ona wyznacza godzinę, a reszta układa się wokół niej.",
    },
    {
      question: "Od czego zacząć przy kilku daniach?",
      answer:
        "Od najdłuższego, a nie od najłatwiejszego — to najczęstszy błąd. Kluski, makaron, purée i wszystko panierowane zostawia się na sam koniec, bo nie znoszą czekania nawet kilkunastu minut. Bazy, czyli sos, wywar, farsz czy ciasto, można zrobić dzień wcześniej.",
    },
    {
      question: "Czy Thermomix pomaga przy gotowaniu kilku dań?",
      answer:
        "Pomaga, ale nie tym, czym się chwali. Nie chodzi o oszczędność minut, tylko o to, że jedno danie gotuje się bez nadzoru — czyli uwalnia uwagę. Przy synchronizowaniu czterech potraw uwaga kończy się szybciej niż czas. Gotowego harmonogramu z minutami nie podam, bo zależy od liczby dań i od Waszego piekarnika.",
    },
  ],

  geo: { lat: 53.6115, lng: 22.0631 },
};
