import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * CIECHOCINEK — powiat aleksandrowski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * GMINA MIEJSKA. 10 113 mieszkańców (GUS 31.12.2024),
 * 15,3 km², 46 m n.p.m.
 * ⚠⚠ GMINA OBEJMUJE WYŁĄCZNIE MIASTO — NIE MA W NIEJ
 *   ŻADNEJ WSI. Dlatego żaden produkt z nazwą wsi
 *   NIE MOŻE pochodzić z gminy Ciechocinek.
 *   ⚠ TO KORYGUJE WCZEŚNIEJSZY ZAPIS O „maśle wiejskim
 *   z Wołuszewa" — NIE PRZYPISUJĘ GO CIECHOCINKOWI.
 * ⚠ ODMIANA: D. CIECHOCINKA, Ms. W CIECHOCINKU,
 *   przym. CIECHOCIŃSKI — poświadczony urzędowo
 *   w nazwie produktu „ciechocińska sól".
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *
 * ⚠⚠ PUŁAPKI NAZEWNICZE:
 * — CIECHOCIN to osobna gmina wiejska w powiecie
 *   golubsko-dobrzyńskim. RÓŻNICA JEDNEJ SYLABY.
 * — CIECHOCINEK ≠ CIECHANÓW ≠ CIECHANOWIEC.
 * — CIECHOCINEK ≠ ALEKSANDRÓW KUJAWSKI — dwa osobne
 *   miasta w jednym powiecie, 6,8 km od siebie.
 *   ⚠ ALEKSANDRÓW MA JUŻ SWOJĄ STRONĘ — NIE MIESZAM.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — prawa osady 1908, PRAWA MIEJSKIE 1916,
 * — ⚠⚠ TĘŻNIE — konstruktor inżynier JAKUB GRAFF.
 *   Tężnie I i II budowane od 1824 r.; tężnia III
 *   z 1859 r.
 *   ⚠ ŹRÓDŁA PODAJĄ RÓŻNE DATY UKOŃCZENIA (1828, 1833)
 *   — PODAJĘ PRZEDZIAŁ 1824–1833. TWARDA GRANICA.
 *   ŁĄCZNA DŁUGOŚĆ ok. 1 741,5 m, WYSOKOŚĆ 15,8 m,
 *   SZEROKOŚĆ 9–10 m. PONAD 19 000 M³ DREWNA,
 *   7 000 DĘBOWYCH PALI. Konstrukcja świerkowo-sosnowa
 *   wypełniona TARNINĄ, WYMIENIANĄ CO OK. 30 LAT.
 *   Stężenie solanki rośnie 5,5% → 9% → 16% → 29%,
 *   a kolejność przepływu to I → III → II.
 *   ⚠ CZĘŚĆ ŹRÓDEŁ PODAJE INNE LICZBY — ZAZNACZAM,
 *   ŻE WYMIARY BYWAJĄ PODAWANE RÓŻNIE.
 *   ⚠⚠⚠ TĘŻNIE OPISUJĘ WYŁĄCZNIE JAKO KONSTRUKCJĘ
 *   DREWNIANĄ DO ZATĘŻANIA SOLANKI. ZERO INHALACJI,
 *   ZERO UZDROWISKA, ZERO ZDROWIA.
 * — ⚠ 62 WIERCENIA badawcze i eksploatacyjne,
 *   najgłębsze (nr 18) 1 450 m. Źródło nr 11 —
 *   fontanna „Grzybek", odwiert prawie 415 m,
 *   czynne od 1911 r., fontanna zaprojektowana w 1926 r.
 * — Park Zdrojowy założony 1872–1875, ponad 16 hektarów;
 *   dąb „Konstanty": wysokość ponad 22 m, obwód 547 cm;
 *   zegar kwiatowy.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — TRAFIENIE
 *   I PODSTAWA KĄTA:
 *   „CIECHOCIŃSKA SÓL", wpis 3 LISTOPADA 2011 R.,
 *   kategoria: Inne. Gmina pochodzenia: Ciechocinek —
 *   bez ryzyka pomyłki, bo gmina to samo miasto.
 *   ⚠ ZBIORCZA STRONA KATEGORII POKAZUJE DATĘ
 *   2018-06-03 — WIĄŻĄCA JEST KARTA PRODUKTU: 2011-11-03.
 *   Z KARTY — TECHNOLOGIA:
 *   — nazwa technologiczna „WARZONKA",
 *   — solanka ze źródła nr 11 („Grzybek"),
 *   — zatężanie przez trzy tężnie do 30% gęstości,
 *   — PANEW: płaskie stalowe naczynie; solankę podgrzewa
 *     się najpierw do 45°C, potem do ok. 106°C, przy
 *     której wytrąca się sól,
 *   — ⚠⚠⚠ RDZEŃ KĄTA — NARZĘDZIA:
 *     „KASIORY" — zgarniacze na drewnianych żerdziach
 *     OK. 3-METROWYCH; „DZIAD" — zgarniacz 4-METROWY;
 *     SZUFLE Z OTWORAMI do wybierania soli.
 *     Pracownicy nazywani WARZELNIKAMI.
 *   — produkt: krystaliczne sypkie ziarna 0–2,5 mm,
 *     barwa biało-szara, smak słony, bez wyraźnego
 *     zapachu,
 *   — pierwsza próbna produkcja soli: 1830 r.
 *   ⚠⚠ PODAJĘ 45°C I 106°C WYŁĄCZNIE JAKO CYTAT
 *   Z KARTY PRODUKTU O PROCESIE PRZEMYSŁOWYM.
 *   TO NIE SĄ USTAWIENIA URZĄDZENIA I MÓWIĘ TO WPROST.
 *   ⚠ ŻADNYCH PROPORCJI I ŻADNEGO PRZEPISU.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: DŁUGOŚĆ TRZONKA — dlaczego niektóre narzędzia
 * muszą być długie.
 * Kąt od karty ciechocińskiej soli: kasiory na trzech
 * metrach żerdzi i czterometrowy „dziad". Nikt nie robi
 * czterometrowego narzędzia dla wygody — robi się je
 * dlatego, że do naczynia nie da się podejść bliżej.
 * Ta sama zasada obowiązuje przy domowym garnku, tylko
 * w mniejszej skali i prawie nikt jej nie nazywa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że karta ciechocińskiej soli, wpisanej na listę
 *   3 listopada 2011 roku, wymienia narzędzia z nazwy:
 *   „kasiory" na żerdziach około trzymetrowych
 *   i czterometrowego „dziada", a także szufle z otworami;
 *   solankę odparowuje się na płaskiej stalowej panwi,
 * — ŻE DŁUGOŚĆ TYCH NARZĘDZI NIE JEST OZDOBĄ — jest
 *   odpowiedzią na gorące naczynie, do którego nie da się
 *   podejść bliżej,
 * — ⚠⚠ ŻE W DOMOWEJ KUCHNI DZIAŁA TA SAMA ZASADA
 *   I ŻE PRAWIE NIKT NIE DOBIERA NARZĘDZI POD TYM KĄTEM
 *   — TO JEST RDZEŃ TEKSTU,
 * — GDZIE TO REALNIE BOLI:
 *   — KRÓTKA ŁYŻKA DO GŁĘBOKIEGO GARNKA — ręka wchodzi
 *     nad parę, a para parzy mocniej niż sam garnek,
 *   — KRÓTKIE SZCZYPCE DO PATELNI, na której coś pryska,
 *   — ŁYŻKA, KTÓRA WPADA DO ŚRODKA, bo trzonek jest
 *     krótszy niż naczynie jest głębokie — i wtedy trzeba
 *     po nią sięgnąć,
 * — ŻE DRUGA CECHA JEST RÓWNIE WAŻNA: TRZONEK NIE MOŻE
 *   PRZEWODZIĆ CIEPŁA. Metalowa łyżka zostawiona w garnku
 *   robi się gorąca na całej długości i wtedy nawet długa
 *   nie pomoże,
 * — ⚠ ŻE SZUFLE Z OTWORAMI TO DOKŁADNIE TO SAMO, CO
 *   ŁYŻKA CEDZAKOWA — narzędzie, które ma wyjąć rzecz
 *   i zostawić płyn. Ta konstrukcja nie zmieniła się
 *   od dwustu lat,
 * — ⚠⚠ UCZCIWIE O SPRZĘCIE — NAJWAŻNIEJSZE ZDANIE
 *   TEJ STRONY: Thermomix zdejmuje większość tych
 *   sytuacji, bo gotuje w zamkniętym naczyniu i miesza
 *   sam — ręka nie wchodzi nad parę, bo nie ma potrzeby.
 *   ALE MOMENT OTWARCIA POKRYWY JEST DOKŁADNIE TAKI SAM
 *   JAK PRZY KAŻDYM INNYM GARNKU i para jest wtedy
 *   gorąca. To jest rzecz, o której trzeba powiedzieć
 *   na prezentacji, a nie w instrukcji.
 *   ⚠ ORAZ: SPATUŁKA DO TEGO URZĄDZENIA MA SWOJĄ DŁUGOŚĆ
 *   NIE PRZYPADKIEM — jest dobrana do naczynia,
 *   dokładnie jak kasiory do panwi.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TWIERDZEŃ ZDROWOTNYCH. ZERO „lecznicza",
 *   „zdrowa", „wspomaga", „oczyszcza", ZERO INHALACJI,
 *   ZERO UZDROWISKA, ZERO SANATORIÓW, ZERO BOROWINY,
 *   ZERO KĄPIELI, ZERO JODU.
 *   ⚠⚠ DOTYCZY TO TEŻ SOLI JAKO TAKIEJ — NIE SUGERUJĘ,
 *   ŻE KTÓRAŚ SÓL JEST ZDROWSZA OD INNEJ.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO SOLI JAKO PRZYPRAWY I ZERO SOLENIA JAKO
 *   TEMATU — kąt zajęty. Sól występuje WYŁĄCZNIE jako
 *   produkt, który się wytwarza. TWARDA GRANICA.
 * — ⚠⚠ ZERO DREWNA JAKO MATERIAŁU I ZERO DESKI —
 *   kąt zajęty (Czersk). Piszę o DŁUGOŚCI TRZONKA,
 *   nie o tym, z czego jest zrobiony. TWARDA GRANICA.
 * — ⚠⚠ ZERO ODPAROWANIA I ZATĘŻANIA JAKO TECHNIKI
 *   KUCHENNEJ — kąt zajęty. Tężnie WYŁĄCZNIE jako fakt.
 * — ŻADNYCH USTAWIEŃ URZĄDZENIA, CZASÓW ANI TEMPERATUR
 *   GOTOWANIA. 45°C i 106°C to WYŁĄCZNIE opis procesu
 *   przemysłowego z karty produktu i tak to zaznaczam.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO DEMOGRAFII TEGO MIASTA W OGÓLE.
 *   Wiek średni 48,3 lat, przyrost naturalny −115 —
 *   Ciechocinek należy do miast o najstarszej ludności
 *   w Polsce, a powód prowadzi wprost do tematu starości
 *   i chorób. NIE DOTYKAM. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO UZALEŻNIENIA MIASTA OD JEDNEJ FUNKCJI.
 * — ZERO bezrobocia.
 * — ZERO kontekstu politycznego genezy warzelni —
 *   inżynier Graff i technika są bezpieczni, reszta nie.
 * — ZERO wątków wojennych i wyznaniowych.
 * — ZERO historii kolei do Ciechocinka.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „DREWNO W KUCHNI — DESKA I DREWNIANA ŁYŻKA"
 *   (Czersk) dotyczy DREWNA JAKO MATERIAŁU.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi wyłącznie
 *   o DŁUGOŚĆ I O DYSTANS OD GORĄCA — z czego narzędzie
 *   jest zrobione, nie jest tematem. Odsyłam tam wprost.
 * — „SÓL" dotyczy SOLENIA POTRAW.
 * — „ODPAROWANIE" (Przysucha) dotyczy REDUKCJI PŁYNU.
 * — „SZUFLADA" (Lipno) dotyczy LICZBY NARZĘDZI.
 *   ⚠ TAM chodzi o to, ile ich mieć; TUTAJ o to,
 *   jak długie mają być.
 * TUTAJ chodzi o DŁUGOŚĆ TRZONKA I O ODLEGŁOŚĆ
 * OD GORĄCA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PRZYPISUJĘ Ciechocinkowi produktów z nazwą wsi.
 * — NIE MYLĘ Ciechocinka z Ciechocinem ani z Aleksandrowem
 *   Kujawskim.
 * — NIE ROZSTRZYGAM dat budowy tężni — podaję przedział.
 * — NIE ORZEKAM niczego o zdrowiu, soli ani tężniach.
 * — NIE PODAJĘ ustawień urządzenia.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Ciechocinek jest gminą miejską na Kujawach — gmina
 *   obejmuje wyłącznie miasto — i liczy 10 113
 *   mieszkańców (GUS, 31.12.2024) na piętnastu i trzech
 *   dziesiątych kilometra kwadratowego, czterdzieści sześć
 *   metrów nad poziomem morza; prawa osady otrzymał
 *   w 1908, prawa miejskie w 1916 roku,
 * — tężnie zaprojektował inżynier Jakub Graff; dwie
 *   pierwsze powstawały od 1824 roku, trzecią zbudowano
 *   w 1859; łącznie mają około 1 741,5 metra długości
 *   i 15,8 metra wysokości, zużyto na nie ponad 19 tysięcy
 *   metrów sześciennych drewna i 7 tysięcy dębowych pali,
 *   a wypełniającą je tarninę wymienia się co około
 *   trzydzieści lat; wymiary bywają w źródłach podawane
 *   różnie,
 * — 3 listopada 2011 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano ciechocińską sól w kategorii
 *   „Inne"; z karty produktu wynika, że solankę ze źródła
 *   nr 11 zatęża się przez trzy tężnie, a następnie
 *   odparowuje na płaskiej stalowej panwi, podgrzewając ją
 *   najpierw do 45, a potem do około 106 stopni; sól
 *   zgarnia się „kasiorami" osadzonymi na żerdziach
 *   około trzymetrowych i czterometrowym „dziadem",
 *   a wybiera szuflami z otworami; pracowników nazywa się
 *   warzelnikami, a pierwszą próbną produkcję soli
 *   przeprowadzono w 1830 roku,
 * — na terenie miasta wykonano 62 wiercenia, a najgłębsze
 *   sięgnęło 1 450 metrów,
 * — Park Zdrojowy założono w latach 1872–1875 i zajmuje
 *   ponad szesnaście hektarów; rosnący w nim dąb
 *   „Konstanty" ma ponad dwadzieścia dwa metry wysokości
 *   i 547 centymetrów obwodu.
 */
export const CIECHOCINEK: CityContent = {
  slug: "ciechocinek",
  h1: "Thermomix Ciechocinek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ciechocinek — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ciechocinku: bezpłatna prezentacja TM7 u Ciebie w domu i bezpłatny dojazd do całego miasta. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ciechocinek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ciechocinku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ciechocinka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Ciechocinek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nikt nie robi czterometrowego narzędzia dla wygody.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ciechocinku – jak wygląda prezentacja?",
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
      id: "dlugosc-trzonka",
      heading: "Trzy metry żerdzi i czterometrowy „dziad”",
      paragraphs: [
        "3 listopada 2011 roku na ministerialną Listę Produktów Tradycyjnych wpisano ciechocińską sól. Karta produktu jest niezwykle konkretna i najciekawsze w niej są narzędzia — wymienione z nazwy.",
        "Solankę odparowuje się na płaskiej stalowej panwi, podgrzewając ją najpierw do czterdziestu pięciu, a potem do około stu sześciu stopni, przy których wytrąca się sól. Wytrąconą sól zgarnia się „kasiorami” — zgarniaczami osadzonymi na żerdziach mniej więcej trzymetrowych — oraz czterometrowym narzędziem zwanym „dziadem”. Wybiera się ją szuflami z otworami. Ludzi, którzy to robią, nazywa się warzelnikami, a pierwszą próbną produkcję przeprowadzono tu w 1830 roku.",
        "Od razu zaznaczę, żeby nie było nieporozumienia: te stopnie to opis procesu przemysłowego z karty produktu, a nie żadne ustawienie urządzenia. Nic z tego nie przenosi się na domową kuchnię jako przepis.",
        "Przenosi się co innego. Długość.",
        "Nikt nie robi czterometrowego narzędzia dla wygody — czterometrowe narzędzie jest niewygodne. Robi się je dlatego, że do naczynia nie da się podejść bliżej. Długość trzonka jest odpowiedzią na gorąco, nic więcej.",
        "W domowej kuchni działa dokładnie ta sama zasada, tylko w mniejszej skali — i prawie nikt nie dobiera narzędzi pod tym kątem. Kupujemy łyżkę, bo ładna albo bo pasuje kolorem.",
        "A to boli w trzech konkretnych miejscach. Krótka łyżka do głębokiego garnka oznacza, że ręka wchodzi nad parę — a para parzy mocniej i szybciej niż samo naczynie, bo oddaje ciepło od razu i na całej powierzchni skóry. Krótkie szczypce do patelni, na której coś pryska, to ta sama historia. I trzecia, najgłupsza: łyżka, której trzonek jest krótszy, niż naczynie jest głębokie — wpada do środka i trzeba po nią sięgnąć palcami.",
        "Druga cecha jest równie ważna i jeszcze rzadziej brana pod uwagę: trzonek nie powinien przewodzić ciepła. Metalowa łyżka zostawiona w gotującym się garnku robi się gorąca na całej długości i wtedy nawet długi trzonek nie pomaga, bo problem jest w dłoni, a nie w odległości.",
        "Przy okazji drobiazg, który mnie rozbraja: szufle z otworami z ciechocińskiej warzelni to dokładnie to samo, co domowa łyżka cedzakowa. Narzędzie, które ma wyjąć rzecz, a zostawić płyn. Ta konstrukcja nie zmieniła się od dwustu lat, bo nie miała powodu.",
        "I uczciwie o sprzęcie, bo tu jest zdanie, które uważam za najważniejsze na tej stronie. Thermomix zdejmuje większość tych sytuacji — gotuje w zamkniętym naczyniu i miesza sam, więc ręka po prostu nie wchodzi nad parę, bo nie ma po co.",
        "Ale moment otwarcia pokrywy jest dokładnie taki sam jak przy każdym innym garnku. Para jest wtedy gorąca i nie robi wyjątków. To jest rzecz, którą mówię na prezentacji, a nie zostawiam na instrukcję. A spatułka do tego urządzenia ma swoją długość nie przypadkiem — jest dobrana do naczynia, dokładnie tak jak kasiory do panwi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ciechocinku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokazuję też rzeczy, o których zwykle się nie mówi — jak choćby to, co dzieje się w momencie otwarcia pokrywy. Wolę, żeby to padło przy mnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ciechocinku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ciechocińskiej rodziny",
      paragraphs: [
        "Ciechocinek jest gminą miejską na Kujawach — gmina obejmuje wyłącznie miasto — i liczy ponad dziesięć tysięcy mieszkańców na piętnastu i trzech dziesiątych kilometra kwadratowego, czterdzieści sześć metrów nad poziomem morza; prawa osady otrzymał w 1908, a prawa miejskie w 1916 roku. Tężnie zaprojektował inżynier Jakub Graff: dwie pierwsze powstawały od 1824 roku, trzecią zbudowano w 1859. Łącznie mają około tysiąca siedmiuset czterdziestu metrów długości i niecałe szesnaście metrów wysokości; zużyto na nie ponad dziewiętnaście tysięcy metrów sześciennych drewna i siedem tysięcy dębowych pali, a wypełniającą je tarninę wymienia się co około trzydzieści lat — przy czym wymiary bywają w źródłach podawane różnie. Na terenie miasta wykonano sześćdziesiąt dwa wiercenia, a najgłębsze sięgnęło tysiąca czterystu pięćdziesięciu metrów. Park Zdrojowy założono w latach 1872–1875 i zajmuje ponad szesnaście hektarów; rosnący w nim dąb „Konstanty” ma ponad dwadzieścia dwa metry wysokości i pięćset czterdzieści siedem centymetrów obwodu. 3 listopada 2011 roku na ministerialną Listę Produktów Tradycyjnych wpisano ciechocińską sól.",
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

  districtsHeading: "Do których części Ciechocinka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od centrum i okolic parku po osiedla przy wylotach dróg i tereny nad Wisłą.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Ciechocinek też przyjadę",
  nearbyParagraphs: [
    "Aleksandrów Kujawski, Nieszawa, Toruń, Włocławek, Radziejów, Brześć Kujawski i Gniewkowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Aleksandrów Kujawski", "Nieszawa", "Toruń", "Włocławek"],

  about: blokOMnie("do Ciechocinka", "w Ciechocinku", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ciechocinka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Ciechocinek to gmina miejska, która obejmuje wyłącznie miasto — nie ma tu odrębnej gminy wiejskiej.",
    },
    ...faqWspolne("w Ciechocinku"),
    {
      question: "Jak długa powinna być łyżka do gotowania?",
      answer:
        "Dłuższa, niż naczynie jest głębokie — inaczej wpada do środka i trzeba po nią sięgać. Druga sprawa to para: krótki trzonek oznacza, że ręka wchodzi nad garnek, a para oddaje ciepło od razu i na całej powierzchni skóry. I trzecia: trzonek nie powinien przewodzić ciepła, bo wtedy nawet długi nie pomoże.",
    },
    {
      question: "Czy przy Thermomixie trzeba uważać na parę?",
      answer:
        "Przy samym gotowaniu nie, bo urządzenie pracuje w zamkniętym naczyniu i miesza samo — ręka nie wchodzi nad garnek, bo nie ma po co. Ale moment otwarcia pokrywy jest dokładnie taki sam jak przy każdym innym naczyniu i para jest wtedy gorąca. Mówię o tym na prezentacji, a nie zostawiam na instrukcję.",
    },
  ],

  geo: { lat: 52.879, lng: 18.7948 },
};
