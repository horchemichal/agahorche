import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * MORYŃ — powiat gryfiński,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 618 mieszkańców (GUS 31.12.2024), 5,5 km²,
 *   gęstość 292,1 os./km².
 * CAŁA GMINA: 4 079 osób, 124,6 km² (12 457 ha —
 *   dwa źródła zgodne), gęstość 33 os./km²,
 *   18 miejscowości, 9 sołectw.
 * ⚠⚠ RÓŻNICA 2,52×. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 52,8577 / 14,3930.
 * ⚠ LICZBA LUDNOŚCI MIASTA JEST STABILNA OD KILKUNASTU
 *   LAT (2008–2012: między 1 609 a 1 648).
 *   ⚠⚠ TEGO PORÓWNANIA NIE UŻYWAM — demografia.
 *
 * ⚠⚠ HOMONIM: MORYŃ ≠ MORYŃ-DWÓR — osobna miejscowość
 *   W TEJ SAMEJ GMINIE. Realna pułapka adresowa.
 *   ≠ MIESZKOWICE ≠ MARYŃ ≠ MORZYCKO (jezioro,
 *   nie miejscowość).
 *   ⚠ W gminie są też pary NOWE OBJEZIERZE / STARE
 *   OBJEZIERZE oraz WITNICA / WITNICZKA.
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠ ODMIANA: „w MORYNIU", „do MORYNIA" — końcowe „-ń"
 *   przechodzi w „-ni-". NIGDY „w Moryńu".
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Morynia".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁO PODAJE WPROST
 *   „NA PRZEŁOMIE XIII I XIV WIEKU — DOKŁADNA DATA
 *   NIE JEST ZNANA". PISZĘ TAK SAMO.
 *   NIGDY KONKRETNEGO ROKU.
 * — ⚠⚠ OKRESU 1402–1454 (władztwo zakonu krzyżackiego)
 *   NIE UŻYWAM — wątek militarno-zakonny. POMIJAM.
 * — 1816–1818 — reformy administracyjne, utworzenie
 *   powiatu.
 * — ⚠⚠⚠ RDZEŃ KĄTA — MURY MIEJSKIE:
 *   „ZACHOWANE NA CAŁEJ DŁUGOŚCI FORTYFIKACJE
 *   ŚREDNIOWIECZNE (BEZ BRAM I STRAŻNIC)".
 *   ⚠⚠ OBWÓD PRZETRWAŁ W CAŁOŚCI, WEJŚCIA ZNIKNĘŁY.
 *   To jest cały kąt.
 *   ⚠⚠⚠ DŁUGOŚCI, GRUBOŚCI ANI WYSOKOŚCI MURU
 *   ŹRÓDŁO NIE PODAJE. NIE PODAJĘ ŻADNEJ LICZBY.
 *   Piszę wyłącznie „na całej długości".
 * — Kościół Ducha Świętego — „romańska świątynia
 *   z XIII wieku". ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 *   Wymieniam co najwyżej jako budowlę z datą.
 *   ⚠⚠ WYMIARÓW, DZWONÓW I ORGANÓW BRAK.
 * — Ruiny zamku brandenburskiego.
 *   ⚠ WYMIENIAM WYŁĄCZNIE JAKO RUINY, bez wątku
 *   obronnego i własnościowego.
 * — Ratusz z XIX w.; Dom Opieki Społecznej — 1874.
 *   ⚠⚠ DOMU OPIEKI NIE WYMIENIAM — instytucja opieki,
 *   temat nie na stronę o gotowaniu.
 * — Fontanna Wielkiego Raka — odsłonięta 20 września
 *   2008 r. ⚠ ŁADNY, KONKRETNY DETAL Z DATĄ DZIENNĄ.
 * — ⚠⚠⚠ POZOSTAŁOŚCI CMENTARZA ŻYDOWSKIEGO —
 *   NIE WYMIENIAM. Temat wykluczony bezwzględnie.
 *
 * GEOGRAFIA — FAKTY UŻYTE:
 * — Jezioro Morzycko — 342,7 ha, największe w gminie.
 *   ⚠⚠⚠ GŁĘBOKOŚCI, DŁUGOŚCI I SZEROKOŚCI ŹRÓDŁO
 *   NIE PODAJE. ⚠⚠ Morzycko uchodzi za jedno
 *   z najgłębszych jezior Pomorza Zachodniego —
 *   NIEPOTWIERDZONE, NIE PISZĘ TEGO.
 * — Około 30 jezior na terenie gminy.
 * — Lasy i grunty zadrzewione ok. 27,3 %.
 * — OKRES WEGETACYJNY: OD OK. 3 KWIETNIA,
 *   TRWA 215–220 DNI.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — podaję jako fakt
 *   w sekcji rodzinnej. ⚠ Wątek sezonowości prowadzi
 *   blisko porad o przechowywaniu, a tych nie daję.
 * — Gmina leży w zasięgu Cedyńskiego Parku
 *   Krajobrazowego (30 850 ha, utworzony 1.04.1993).
 * — Sąsiednie gminy (odległości w linii prostej):
 *   Mieszkowice 10,3 km, Chojna 12,1, Cedynia 13,0,
 *   Boleszkowice 18,9, Trzcińsko-Zdrój 20,1,
 *   Dębno 24,4. ⚠ PODAJĘ „OKOŁO".
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ BRAK DOWODU, NIE DOWÓD BRAKU. TEMAT NIE POJAWIA
 *   SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: PUNKTY WEJŚCIA — o tym, że o porządku w kuchni
 * decyduje nie to, ile rzeczy stoi na półkach, tylko
 * którędy rzeczy do niej wchodzą.
 * Kąt od murów Morynia: obwód zachował się na całej
 * długości, a bramy i strażnice zniknęły. Zostało
 * dokładnie to, co pilnowało linii — a nie to, co
 * pilnowało wejść.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że średniowieczne fortyfikacje Morynia zachowały
 *   się na całej długości, ale bez bram i bez strażnic,
 * — ŻE ZOSTAŁA LINIA, A ZNIKNĘŁY PUNKTY, W KTÓRYCH COŚ
 *   DO MIASTA WCHODZIŁO — to jest rdzeń,
 * — ⚠⚠ ŻE W KUCHNI PRACUJEMY WYŁĄCZNIE NAD LINIĄ:
 *   układamy półki, przekładamy słoiki, kupujemy
 *   pojemniki. Czyli robimy mur. A nie robimy bram,
 * — ⚠⚠ ŻE BRAM W KAŻDEJ KUCHNI JEST KILKA I DAJĄ SIĘ
 *   WYMIENIĆ: zakupy, rzeczy przyniesione przez
 *   kogoś, resztki po spotkaniu, produkty kupione
 *   „bo była okazja", prezenty żywnościowe.
 *   Tędy wchodzi wszystko, co potem nie ma gdzie stać,
 * — ⚠⚠ ŻE PORZĄDEK ROBIONY NA PÓŁKACH ROZPADA SIĘ
 *   W TYDZIEŃ, BO PRZEZ BRAMY DALEJ WCHODZI TYLE SAMO.
 *   Półka jest skutkiem, brama przyczyną,
 * — ⚠⚠ ŻE NAJPROSTSZE, CO DA SIĘ ZROBIĆ, TO WYMIENIĆ
 *   SWOJE BRAMY Z NAZWY. Nie zamykać ich — policzyć.
 *   Zwykle wychodzą trzy albo cztery i jedna z nich
 *   odpowiada za większość,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: BRAM NIE ZAMYKA SIĘ
 *   NA STAŁE I NIE O TO CHODZI. Miasto bez bram
 *   przestaje być miastem. Chodzi o to, żeby wiedzieć,
 *   gdzie są — bo teraz większość ludzi nie wie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie jest bramą
 *   ani murem i nie ma z tym nic wspólnego. Wpływa
 *   za to pośrednio na jedną z bram: gdy ugotowanie
 *   czegoś kosztuje mniej wysiłku, mniej rzeczy
 *   wchodzi do domu gotowych i na zapas. MÓWIĘ TO
 *   OSTROŻNIE, bo to zależy od domu, a nie od sprzętu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GRANICY WIĘKSZEJ NIŻ TO, CO OGRADZA —
 *   kąt zajęty (Recz). ⚠⚠ TO JEST NAJBLIŻSZY KĄT,
 *   bo tam też chodzi o mury miejskie. Tam chodzi
 *   o TO, ŻE SYSTEM WOKÓŁ CZYNNOŚCI ROŚNIE PONAD NIĄ;
 *   TUTAJ o TO, ŻE LICZĄ SIĘ PUNKTY WEJŚCIA, A NIE
 *   OBWÓD. ⚠⚠⚠ NIE PODAJĘ ŻADNEJ DŁUGOŚCI ANI
 *   GRUBOŚCI MURU, nie porównuję muru z tym,
 *   co ogradza, i nie piszę ani słowa o rozroście
 *   systemu. ROZGRANICZAM WPROST. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO MURU NA PLANIE KOŁA I CYKLU BEZ KOŃCA —
 *   kąt zajęty (Maszewo).
 * — ⚠⚠ ZERO GRUBOŚCI MURÓW I DNA — kąt zajęty (Resko).
 * — ⚠⚠ ZERO ODSTĘPU MIĘDZY BASZTAMI — kąt zajęty
 *   (Kowalewo Pomorskie).
 * — ⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty (Płoty).
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo). ⚠ Nie piszę, co gdzie
 *   powinno stać.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów).
 * — ⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt
 *   zajęty (Dobrzany). ⚠ Nie piszę o zapasach jako
 *   o czymś niepoliczalnym; piszę o tym, którędy
 *   wchodzą.
 * — ⚠⚠ ZERO BAŁAGANU I SPRZĄTANIA — kąt zajęty
 *   (Koluszki).
 * — ⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia,
 *   ta sama fala, gmina sąsiednia).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO SYSTEMU — podaję WYŁĄCZNIE
 *   polecenie „wymień swoje bramy z nazwy".
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠⚠ W SZCZEGÓLNOŚCI: pisząc o resztkach
 *   po spotkaniu NIE MÓWIĘ NIC o przechowywaniu,
 *   terminach ani psuciu się. Wymieniam je wyłącznie
 *   jako drogę wejścia.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO CMENTARZA ŻYDOWSKIEGO.
 * — ⚠⚠⚠ ZERO OKRESU KRZYŻACKIEGO 1402–1454.
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO — opisuję je
 *   jako budowlę i jako linię z wejściami.
 *   Ani słowa o obronie, wrogu czy oblężeniu.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 *   ⚠ Zmiany nazwy z 29 maja 1946 r. NIE PODAJĘ.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła nie opisuję.
 * — ⚠ ZERO DOMU OPIEKI SPOŁECZNEJ.
 * — ⚠ ZERO DEMOGRAFII I PORÓWNAŃ LUDNOŚCI W CZASIE.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich — źródło
 *   wprost mówi, że data nie jest znana.
 * — NIE PODAJĘ długości, grubości ani wysokości murów —
 *   źródło ich nie podaje.
 * — NIE PISZĘ, że Morzycko jest jednym z najgłębszych
 *   jezior Pomorza Zachodniego — niepotwierdzone.
 * — NIE PODAJĘ głębokości, długości ani szerokości
 *   Morzycka.
 * — NIE OPISUJĘ kościoła ani herbu.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO SYSTEMU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Moryń leży w powiecie gryfińskim; miasto liczy
 *   1 618 mieszkańców (GUS, 31.12.2024) na 5,5 km²,
 *   a cała gmina 4 079 osób na 124,6 km², czyli
 *   12 457 ha — trzydzieści trzy osoby na kilometr
 *   kwadratowy — z osiemnastoma miejscowościami
 *   i dziewięcioma sołectwami,
 * — prawa miejskie miasto otrzymało na przełomie XIII
 *   i XIV w., a dokładna data nie jest znana; w latach
 *   1816–1818 reformy administracyjne utworzyły tu
 *   powiat,
 * — średniowieczne fortyfikacje zachowały się na całej
 *   długości, ale bez bram i bez strażnic; w mieście
 *   stoi też kościół z XIII w., ruiny zamku
 *   brandenburskiego i ratusz z XIX w., a 20 września
 *   2008 r. odsłonięto Fontannę Wielkiego Raka,
 * — jezioro Morzycko ma 342,7 ha i jest największe
 *   w gminie, w której jest około trzydziestu jezior;
 *   lasy i grunty zadrzewione zajmują około 27 %
 *   powierzchni,
 * — okres wegetacyjny zaczyna się tu około 3 kwietnia
 *   i trwa od 215 do 220 dni,
 * — gmina leży w zasięgu Cedyńskiego Parku
 *   Krajobrazowego, utworzonego 1 kwietnia 1993 r.
 */
export const MORYN: CityContent = {
  slug: "moryn",
  h1: "Thermomix Moryń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Moryń — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Moryniu (powiat gryfiński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Moryń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Moryniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Morynia w powiecie gryfińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Moryń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mur przetrwał na całej długości. Bramy nie. A to one decydowały, co wchodzi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Moryniu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "punkty-wejscia",
      heading: "Mur został, bramy nie",
      paragraphs: [
        "Moryń ma rzecz, jakiej niewiele miast w tej okolicy zachowało: średniowieczne fortyfikacje na całej długości. Nie fragment, nie odcinek — obwód w całości.",
        "Tylko że bez bram i bez strażnic. Została linia. Zniknęły punkty, w których cokolwiek do miasta wchodziło.",
        "W kuchni robimy dokładnie to samo, i to z ogromnym zaangażowaniem.",
        "Pracujemy wyłącznie nad linią. Układamy półki, przekładamy słoiki, kupujemy pojemniki, ustalamy, gdzie co stoi. Czyli budujemy mur. Bram nie buduje nikt.",
        "A bramy w każdej kuchni są i da się je wymienić z nazwy. Zakupy — te planowane i te przy okazji. Rzeczy przyniesione przez kogoś. Resztki po spotkaniu, które zostają na blacie. Produkty kupione, bo była okazja albo bo było tanio. Prezenty żywnościowe, których nikt nie zamawiał.",
        "Tędy wchodzi wszystko, co potem nie ma gdzie stać.",
        "I dlatego porządek robiony wyłącznie na półkach rozpada się w tydzień. Nie dlatego, że był zły ani że ktoś się nie postarał. Po prostu przez bramy dalej wchodzi tyle samo, co przed sprzątaniem. Półka jest skutkiem. Brama jest przyczyną.",
        "Najprostsze, co da się z tym zrobić, nie zajmuje nawet kwadransa: wymienić swoje bramy z nazwy. Nie zamykać ich — policzyć. Zwykle wychodzą trzy albo cztery, i prawie zawsze jedna z nich odpowiada za większość tego, co wchodzi. Sama świadomość, która to, zmienia więcej niż nowy komplet pojemników.",
        "Uczciwie o drugiej stronie: bram nie zamyka się na stałe i absolutnie nie o to chodzi. Miasto bez bram przestaje być miastem, a dom, do którego nic nie wchodzi, przestaje być domem. Chodzi wyłącznie o to, żeby wiedzieć, gdzie one są — bo teraz większość z nas po prostu nie wie.",
        "Na koniec o urządzeniu, ostrożnie, bo tu łatwo obiecać za dużo.",
        "Thermomix nie jest ani bramą, ani murem, i z porządkiem nie ma bezpośrednio nic wspólnego. Wpływa natomiast pośrednio na jedną z bram: kiedy ugotowanie czegoś kosztuje mniej wysiłku, mniej rzeczy wchodzi do domu gotowych i kupionych na zapas. Ale to zależy od domu, nie od sprzętu — i dlatego nie stawiam tego jako argumentu, tylko jako obserwację.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Moryniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co najczęściej wchodzi Wam do domu gotowe. Pod to dobiorę dania — bo to zwykle najlepsze porównanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Moryniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Morynia",
      paragraphs: [
        "Moryń leży w powiecie gryfińskim: samo miasto liczy ponad tysiąc sześciuset mieszkańców (GUS, 31.12.2024) na pięciu i pięciu dziesiątych kilometra kwadratowego, a cała gmina ponad cztery tysiące osób na stu dwudziestu czterech — trzydzieści trzy osoby na kilometr — z osiemnastoma miejscowościami i dziewięcioma sołectwami. Prawa miejskie miasto otrzymało na przełomie trzynastego i czternastego wieku, a dokładna data nie jest znana; w latach 1816–1818 reformy administracyjne utworzyły tu powiat. Średniowieczne fortyfikacje zachowały się na całej długości, choć bez bram i strażnic. Stoi tu też kościół z trzynastego wieku, ruiny zamku brandenburskiego i ratusz z dziewiętnastego, a 20 września 2008 roku odsłonięto Fontannę Wielkiego Raka. Jezioro Morzycko ma trzysta czterdzieści dwa hektary i jest największe w gminie, w której jest około trzydziestu jezior; lasy i grunty zadrzewione zajmują mniej więcej dwadzieścia siedem procent powierzchni. Okres wegetacyjny zaczyna się tu około trzeciego kwietnia i trwa od dwustu piętnastu do dwustu dwudziestu dni. Cała gmina leży w zasięgu Cedyńskiego Parku Krajobrazowego, utworzonego 1 kwietnia 1993 roku.",
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

  districtsHeading: "Do których części Morynia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w obrębie dawnego okręgu fortyfikacji i poza nim — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Moryń też przyjadę",
  nearbyParagraphs: [
    "Mieszkowice są około dziesięciu kilometrów stąd, Chojna dwanaście, Cedynia trzynaście. Do Trzcińska-Zdroju i Dębna też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Mieszkowice", "Chojna", "Cedynia", "Trzcińsko-Zdrój", "Dębno"],

  about: blokOMnie("do Morynia", "w Moryniu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Morynia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto uważać na nazwy: w tej samej gminie leży osobna miejscowość Moryń-Dwór, a także pary Nowe Objezierze i Stare Objezierze oraz Witnica i Witniczka. Wystarczy podać pełną nazwę.",
    },
    ...faqWspolne("w Moryniu"),
    {
      question: "Dlaczego porządek w kuchni rozpada się po tygodniu?",
      answer:
        "Bo robi się go na półkach, a rzeczy wchodzą bramami. Mury Morynia zachowały się na całej długości, ale bez bram — i w kuchni jest odwrotnie: pilnujemy linii, a wejść nie liczy nikt. Bramy to zakupy, rzeczy przyniesione przez kogoś, resztki po spotkaniu, produkty kupione przy okazji. Warto je raz wymienić z nazwy; zwykle wychodzą trzy albo cztery i jedna odpowiada za większość.",
    },
    {
      question: "Czy Thermomix pomaga ograniczyć to, co wchodzi do domu gotowe?",
      answer:
        "Pośrednio i zależy to od domu, nie od sprzętu — dlatego nie stawiam tego jako argumentu. Kiedy ugotowanie czegoś kosztuje mniej wysiłku, mniej rzeczy kupuje się gotowych i na zapas. Ale samo urządzenie nie jest ani bramą, ani murem i nie zrobi porządku za nikogo.",
    },
  ],

  geo: { lat: 52.8577, lng: 14.393 },
};
