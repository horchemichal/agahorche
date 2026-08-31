import type { CityContent } from "../city-content";
import {
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
 * BUKOWINA TATRZAŃSKA — gmina wiejska, powiat tatrzański.
 * Osiem sołectw, 13 568 mieszkańców (31.12.2024) na 131,84 km².
 * Największa ludnościowo gmina powiatu poza Zakopanem.
 *
 * OŚ STRONY: DOM LUDOWY I FOLKLOR JAKO KONKURS, NIE SCENA.
 * Bukowina jest miejscem, w którym folklor się OCENIA i UCZY,
 * a nie pokazuje turystom — to jest różnica, która całkowicie
 * odróżnia ją od Zakopanego. Drewniany Dom Ludowy z lat 1928–1932
 * wyprodukował dwa ogólnopolskie festiwale i szkołę rzemiosł.
 *
 * Druga oś: TERMY JAKO SPÓŁKA MIESZKAŃCÓW — Bukowiańskie
 * Towarzystwo Geotermalne zawiązali w 2001 r. sami mieszkańcy.
 * ⚠️ To ma być opisane jako przedsięwzięcie WSPÓLNOTOWE,
 * a nie jako geologia — geologia należy do Szaflar (`szaflary.ts`).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DOM LUDOWY: budowa 1928–1932, powierzchnia 1 458 m²,
 *   opisywany jako największy drewniany obiekt w Polsce,
 * — SABAŁOWE BAJANIA: od 1967 r., założyciel Józef Pitorak.
 *   Kategorie dokładane etapami: gawędziarze (1967), instrumentaliści
 *   (1969), śpiewacy (1974), mowy weselne i starostowie (1984).
 *   60. EDYCJA: 8–12 lipca 2026 r. Uczestnicy z Podhala, Orawy,
 *   Beskidu Śląskiego, Żywiecczyzny, Kurpi i Kaszub; ok. 200 twórców
 *   w wystawie towarzyszącej,
 * — GÓRALSKI KARNAWAŁ: od 1973 r., 54. edycja w 2026 r.
 *   ⚠️ Raport gminy podaje 49. edycję w 2021 r. — numeracja się nie
 *   zgadza. Podaję rok założenia, nie numer,
 * — SZKOŁA GINĄCYCH ZAWODÓW od 1999 r.,
 * — BUKOWIAŃSKIE TOWARZYSTWO GEOTERMALNE sp. z o.o., KRS 0000133262,
 *   zawiązane w 2001 r. Z INICJATYWY MIESZKAŃCÓW. Termy BUKOVINA
 *   otwarte w 2008 r., hotel Bukovina 2010, Harnaś 2016. Woda
 *   z 2 400 m, odwiert Bukowina Tatrzańska PIG-PNiG 1, 67°C
 *   na wypływie, siarczanowo-sodowo-wapniowa, mineralizacja
 *   1,7 g/dm³. Deklarowane zatrudnienie „ponad 300 osób” —
 *   data pomiaru niepewna, traktować ostrożnie,
 * — TERMA BANIA w Białce Tatrzańskiej: woda z 2 500 m, 72°C.
 *   To INNY obiekt niż BUKOVINA — nie mieszać parametrów,
 * — SOŁECTWA (8): Białka Tatrzańska, Brzegi, Bukowina Tatrzańska
 *   (siedziba, 3 179 mieszk. = 23,5% gminy wg NSP 2021), Czarna Góra,
 *   Groń, Jurgów, Leśnica, Rzepiska. Ludność pozostałych sołectw
 *   NIEPOTWIERDZONA — nie wiadomo, czy Białka nie jest większa,
 * — LUDNOŚĆ ROŚNIE: +11,4% w latach 2002–2024. To rzadkość
 *   w tym powiecie,
 * — POWIERZCHNIA 131,84 km², w tym 4 434 ha w Tatrzańskim Parku
 *   Narodowym,
 * — GOSPODARKA: 1 859 podmiotów REGON (2024), 1 548 osób fizycznych.
 *   Zakwaterowanie i gastronomia 35,4%, budownictwo 15,9%.
 *   Bezrobocie 5,5%, wynagrodzenie 7 423 zł brutto,
 * — NARCIARSTWO: 5 stacji (Kotelnica Białczańska, Rusiń-Ski,
 *   Jurgów Ski, Koziniec, Grapa Ski) i 2 kompleksy termalne.
 *   Białka: 9 kolei krzesełkowych, 12 wyciągów orczykowych,
 *   24 trasy, 16,7 km; Kotelnica–Bania–Kaniówka spięte od sezonu
 *   2017/18,
 * — SPISZ: Rzepiska, Jurgów i Czarna Góra to wsie spiskie.
 *   Jurgów — zagroda Sołtysów z 1861 r. (filia Muzeum Tatrzańskiego),
 *   kościół św. Sebastiana z 1650 r. ⚠️ TEMAT SPISZA NALEŻY
 *   DO ŁAPSZ NIŻNYCH — tutaj tylko JEDEN akapit, bez rozwijania,
 * — 6 KGW: Bukowina Tatrzańska, Brzegi, Czarna Góra, Rzepiska,
 *   Groń, Jurgów.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY MIEJSC NOCLEGOWYCH. Niepotwierdzona,
 * — NUMERU EDYCJI GÓRALSKIEGO KARNAWAŁU (patrz wyżej),
 * — NUMERÓW DRÓG I CZASU PRZEJAZDU DO KRAKOWA. Niepotwierdzone —
 *   piszę opisowo,
 * — LUDNOŚCI SOŁECTW poza siedzibą,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanego tej gminie.
 *   Na LPT figuruje „grulownik – twaroźnik spiski”, ale dla REGIONU
 *   Spisz, nie dla gminy. Tak to formułuję,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ.
 *
 * PUŁAPKI:
 * — TERMA BANIA I STACJE KOTELNICA/BANIA/KANIÓWKA LEŻĄ W BIAŁCE
 *   TATRZAŃSKIEJ, KTÓRA JEST SOŁECTWEM TEJ GMINY, nie osobną gminą.
 *   Bardzo częsty błąd,
 * — MORSKIE OKO I ŁYSA POLANA leżą w tej gminie (Brzegi), nie
 *   w Zakopanem. Też częsty błąd,
 * — SABAŁA (Jan Krzeptowski) pochodził z KOŚCIELISKA, nie stąd —
 *   jest patronem festiwalu, nie krajanem,
 * — SABAŁOWE BAJANIA: 2021 w sierpniu, 2026 w lipcu. Nie podawać
 *   stałego miesiąca,
 * — OSCYPEK, BRYNDZA I REDYKOŁKA są podhalańskie, nie bukowiańskie,
 * — W GMINIE NIE MA STACJI KOLEJOWEJ.
 */

export const BUKOWINA_TATRZANSKA: CityContent = {
  slug: "bukowina-tatrzanska",
  h1: "Thermomix Bukowina Tatrzańska – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Bukowina Tatrzańska — cena",
  seoDescription:
    "Thermomix w gminie Bukowina Tatrzańska: bezpłatna prezentacja TM7 u Ciebie w kuchni — Bukowina, Białka Tatrzańska, Jurgów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bukowina Tatrzańska — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Bukowina Tatrzańska. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Bukowina Tatrzańska przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich ośmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie osiem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Bukowina Tatrzańska – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Bukowinie, jak w Białce Tatrzańskiej, Jurgowie czy na Rzepiskach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Miejsce, w którym folklor się ocenia, a nie pokazuje",
      paragraphs: [
        "W Bukowinie stoi drewniany Dom Ludowy, budowany w latach tysiąc dziewięćset dwadzieścia osiem–trzydzieści dwa, o powierzchni tysiąca czterystu pięćdziesięciu ośmiu metrów kwadratowych. Bywa opisywany jako największy drewniany obiekt w Polsce. Ale nie o rozmiar tu chodzi, tylko o to, co się w nim od stu lat dzieje.",
        "Od tysiąc dziewięćset sześćdziesiątego siódmego roku odbywają się tu Sabałowe Bajania, założone przez Józefa Pitoraka. W dwa tysiące dwudziestym szóstym przypada sześćdziesiąta edycja. Kategorie dokładano stopniowo: najpierw gawędziarze, dwa lata później instrumentaliści, w siedemdziesiątym czwartym śpiewacy, w osiemdziesiątym czwartym mowy weselne i starostowie. Przyjeżdżają wykonawcy z Podhala, Orawy, Beskidu Śląskiego, Żywiecczyzny, a także z Kurpi i Kaszub.",
        "I to jest właśnie różnica, o której chcę napisać. W Zakopanem folklor jest sceną — pokazuje się go przyjezdnym. Tutaj jest konkursem: ktoś staje przed komisją, ktoś dostaje miejsce, ktoś nie dostaje. Do tego dochodzi Góralski Karnawał, organizowany od siedemdziesiątego trzeciego roku, i Szkoła Ginących Zawodów, działająca od tysiąc dziewięćset dziewięćdziesiątego dziewiątego. Czyli nie tylko ocenianie, ale i uczenie rzemiosła.",
        "Drugą rzecz, którą ta gmina zrobiła, warto opowiedzieć osobno, bo jest nietypowa. W dwa tysiące pierwszym roku sami mieszkańcy zawiązali spółkę geotermalną. Siedem lat później otwarto Termy Bukovina — woda z dwóch tysięcy czterystu metrów, sześćdziesiąt siedem stopni na wypływie. Potem doszły hotele. To nie był inwestor z zewnątrz, który kupił grunt; to była spółka ludzi stąd.",
        "Efekt widać w liczbach, które w tym powiecie wyglądają nietypowo. Ludność gminy wzrosła o ponad jedenaście procent od dwa tysiące drugiego roku — podczas gdy Zakopane w tym samym czasie się kurczyło. Bezrobocie wynosi pięć i pół procenta, wyraźnie mniej niż w mieście. Trzydzieści pięć procent tutejszych przedsiębiorców działa w zakwaterowaniu i gastronomii.",
        "Warto też wiedzieć, że ta gmina jest etnograficznie podwójna. Białka, Brzegi i sama Bukowina to Podhale, ale Jurgów, Czarna Góra i Rzepiska leżą już na Spiszu — z inną gwarą, innym strojem i inną kuchnią. O samym Spiszu piszę szerzej na stronie gminy Łapsze Niżne, bo tam jest jego środek.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Bukowina Tatrzańska?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa. Gmina jest rozległa — sto trzydzieści dwa kilometry kwadratowe — i rozciąga się od Białki po Rzepiska przy granicy ze Słowacją. Dojazd wszędzie jest bez dopłaty, ale trasę planuję inaczej.",
        "Jeśli prowadzisz noclegi albo pracujesz w gastronomii, powiedz to od razu. Tu sezon rządzi wszystkim: zima z pięcioma stacjami narciarskimi, lato z termami. Listopad i kwiecień bywają najlepszym terminem na spokojną prezentację.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Bukowina Tatrzańska"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, która rośnie",
      paragraphs: [
        "Ludność tej gminy wzrosła o ponad jedenaście procent w latach dwa tysiące dwa–dwadzieścia cztery. To w powiecie tatrzańskim rzadkość: Zakopane w tym samym czasie straciło kilka tysięcy mieszkańców. Tutaj przybywa ludzi, przybywa domów i przybywa dzieci.",
        "Za tym stoi bardzo konkretna gospodarka: pięć stacji narciarskich, dwa kompleksy termalne, a w Białce Tatrzańskiej dziewięć kolei krzesełkowych i dwanaście wyciągów orczykowych na dwudziestu czterech trasach. Trzydzieści pięć procent przedsiębiorców działa w zakwaterowaniu i gastronomii, szesnaście w budownictwie. To znaczy: praca jest na miejscu i nie trzeba stąd wyjeżdżać.",
        "Dla kuchni oznacza to sytuację, którą spotykam tu częściej niż gdziekolwiek indziej: dom, w którym mieszka młoda rodzina, a jednocześnie działa pensjonat albo wynajem. Śniadanie dla gości i obiad dla swoich, w tej samej kuchni, tego samego dnia.",
        "Praktycznie najbardziej przydaje się to, że danie można wstawić i wyjść. Zupa gotuje się sama i sama się wyłącza, kiedy Ty ścielisz pokoje, odbierasz kogoś z parkingu albo odwozisz dziecko. Nie trzeba wracać co dziesięć minut zamieszać.",
        "Druga rzecz to skala, która zmienia się w ciągu tygodnia. W sezonie gotuje się dwa razy więcej niż poza nim. Powtarzalność — to samo ciasto, ten sam sos, ta sama zupa, zawsze tak samo — przestaje być wygodą, a staje się warunkiem, żeby dało się to utrzymać przez cały sezon bez wykończenia.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a w gminie, która rośnie i się odmładza, to całkiem realny scenariusz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Dwie kuchnie w jednej gminie — i szkoła, która ich uczy",
    paragraphs: [
      "Ta gmina ma dwie kuchnie naraz, bo leży na granicy dwóch regionów. Białka, Brzegi i Bukowina to Podhale. Jurgów, Czarna Góra i Rzepiska to Spisz — inna gwara, inny strój, inne dania. Na ministerialnej Liście Produktów Tradycyjnych figuruje spiski grulownik, czyli twaroźnik, ale wpisany jest dla regionu Spisz, a nie dla tej gminy. Wpisu przypisanego wprost Bukowinie nie znalazłam.",
      "Powtórzę też zastrzeżenie, które powtarzam na każdej podhalańskiej stronie: oscypek, bryndza podhalańska i redykołka mają unijną ochronę nazwy, ale obszar tej ochrony obejmuje całe Podhale i część Śląska. To nie są produkty tej gminy.",
      "Za to jest tu coś, czego nie ma nigdzie indziej: Szkoła Ginących Zawodów, działająca przy Domu Ludowym od tysiąc dziewięćset dziewięćdziesiątego dziewiątego roku, oraz sześć kół gospodyń — w Bukowinie, Brzegach, Czarnej Górze, na Rzepiskach, w Groniu i Jurgowie. To jest infrastruktura przekazywania umiejętności, a nie folder.",
      "Co z tego wynika dla urządzenia? Zacznę od tego, czego nie zrobi, bo w gminie uczącej ginących zawodów byłoby nieuczciwie zacząć inaczej. Sera nie zrobi. Moskola trzeba upiec na blasze. Placka po zbójnicku nie usmaży. Wprawy nie zastąpi i nie ma takiego zamiaru.",
      "Robi natomiast wszystko to, co przy tej kuchni zabiera najwięcej czasu, a najmniej wymaga umiejętności: wyrabia ciasto na kluski i na chleb, miele farsz bez maszynki, gotuje kwaśnicę i zupy bez pilnowania, uciera masy i pasty. W domu, w którym gotuje się i dla rodziny, i dla gości, to nie jest kwestia wygody, tylko tego, czy w ogóle starczy sił na sezon.",
    ],
  },

  districtsHeading: "Gdzie w gminie Bukowina Tatrzańska dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu sołectw, bez żadnej dopłaty za odległość: Bukowiny Tatrzańskiej, Białki Tatrzańskiej, Brzegów, Czarnej Góry, Gronia, Jurgowa, Leśnicy i Rzepisk.",
    "Warto wiedzieć, co do tej gminy należy, bo pomyłki są nagminne. Białka Tatrzańska ze stacjami Kotelnica, Bania i Kaniówka oraz z Termą Bania to sołectwo tej gminy, a nie osobna gmina. Morskie Oko i Łysa Polana też leżą w tych granicach, w sołectwie Brzegi — nie w Zakopanem, jak się często pisze.",
    "Gmina zajmuje blisko sto trzydzieści dwa kilometry kwadratowe, z czego ponad cztery tysiące hektarów leży w Tatrzańskim Parku Narodowym. Sama Bukowina liczy około trzech tysięcy stu mieszkańców, czyli niecałą czwartą część gminy. W Jurgowie warto zobaczyć zagrodę Sołtysów z tysiąc osiemset sześćdziesiątego pierwszego roku, filię Muzeum Tatrzańskiego, i kościół świętego Sebastiana z tysiąc sześćset pięćdziesiątego.",
    "O dojeździe uczciwie: w gminie nie ma stacji kolejowej — linia z Krakowa do Zakopanego omija ją, zatrzymując się w Nowym Targu, Szaflarach, Poroninie i Białym Dunajcu. Dojechać można wyłącznie drogą, zjazdem z zakopianki. Czasu przejazdu nie podaję, bo nie mam go z wiarygodnego źródła.",
  ],
  districts: [
    "Bukowina Tatrzańska",
    "Białka Tatrzańska",
    "Brzegi",
    "Czarna Góra",
    "Groń",
    "Jurgów",
    "Leśnica",
    "Rzepiska",
  ],

  nearbyHeading: "Poronin, Biały Dunajec i Łapsze Niżne też są na mojej trasie",
  nearbyParagraphs: [
    "Do Poronina, Białego Dunajca i Zakopanego mam stąd po kilkanaście minut, a przez Spisz jest blisko do Łapsz Niżnych. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Jurgowie, Czarnej Górze albo na Rzepiskach, to formalnie jesteś w gminie Bukowina Tatrzańska, ale etnograficznie na Spiszu — o samym Spiszu piszę szerzej przy Łapszach Niżnych. Dla umówienia prezentacji nie ma to oczywiście żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Poronin",
    "Biały Dunajec",
    "Zakopane",
    "Łapsze Niżne",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do gminy Bukowina Tatrzańska", "w powiecie tatrzańskim"),

  faq: [
    {
      question: "Mieszkam w Białce Tatrzańskiej. To osobna gmina?",
      answer:
        "Nie, Białka Tatrzańska jest sołectwem gminy Bukowina Tatrzańska — razem ze stacjami Kotelnica, Bania i Kaniówka oraz Termą Bania. To bardzo częsta pomyłka, bo Białka funkcjonuje w reklamach jak osobna marka. Dojeżdżam tam tak samo jak do Bukowiny i bez dopłaty.",
    },
    ...faqWspolne("w gminie Bukowina Tatrzańska"),
    {
      question: "Prowadzę pensjonat. Czy to się nada do śniadań dla gości?",
      answer:
        "Do śniadań, wypieków, past, zup i sosów tak, i w tej gminie to najczęstszy scenariusz. Powiem jednak uczciwie: to nie jest urządzenie gastronomiczne i przy większej liczbie gości gotuje się partiami. Na prezentacji policzę to na Waszych realnych ilościach, a nie na przepisie dla czterech osób.",
    },
    {
      question: "Czy Morskie Oko jest w Zakopanem?",
      answer:
        "Nie, leży w granicach gminy Bukowina Tatrzańska, w sołectwie Brzegi — podobnie jak Łysa Polana i przejście na Słowację. To jedna z częstszych pomyłek przy tej okolicy, bo dojazd kojarzy się z Zakopanem. Dla umówienia prezentacji bez znaczenia, ale skoro prostuję inne rzeczy, to i tę.",
    },
  ],

  geo: { lat: 49.3167, lng: 20.1083 },
};
