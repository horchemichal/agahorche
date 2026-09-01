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
 * OSIEK — GMINA WIEJSKA w powiecie oświęcimskim, województwo małopolskie.
 * ⚠️⚠️ W Polsce jest wiele Osieków (świętokrzyskie, mazowieckie,
 * pomorskie, kujawsko-pomorskie, Osiek Jasielski). TERYT tej gminy:
 * 1213052, kod 32-608.
 * 8 112 mieszkańców (GUS, 31.12.2024), 40,9 km², 199 os./km²,
 * +4,9% od 2002, średni wiek 40,5, REGON 613 (535 osób fizycznych),
 * lesistość 9,3%.
 * TYLKO 2 SOŁECTWA: Osiek i Głębowice.
 *
 * OŚ STRONY: GMINA Z DWÓCH WSI, W KTÓREJ NAJWIĘKSZYM GOSPODARSTWEM
 * JEST PAŃSTWO. Ośrodek Hodowli Zarodowej w Osieku działa od 1953 r.,
 * od 1995 jako spółka, w której 100% udziałów ma Krajowy Ośrodek
 * Wsparcia Rolnictwa. Ma 1 144 ha użytków rolnych, ok. 1 800 sztuk
 * bydła (w tym 800 krów mlecznych) i 290 ha stawów.
 * ⚠️ KARP NIE MOŻE BYĆ OSIĄ — to oś ZATORA. „Karp osiecki” to osobny
 * wpis na LPT i wchodzi wyłącznie jako element treści.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — OHZ OSIEK SP. Z O.O. (ohzosiek.pl): od 1953 r., od 1995 jako
 *   spółka, 100% udziałów KOWR (Skarb Państwa); 1 144 ha użytków
 *   rolnych (zboża, rzepak); ok. 1 800 sztuk bydła mlecznego,
 *   w tym 800 KRÓW MLECZNYCH; 290 ha stawów (własność Skarbu
 *   Państwa), pełny cykl hodowli karpia; działa też w Nidku.
 *   ⚠️ LICZBY ZATRUDNIENIA NIE PODAJE — NIE ZGADYWAĆ,
 * — 2 SOŁECTWA (osiek.pl/solectwa): Osiek (sołtys Stanisław
 *   Gąsiorek) i Głębowice (sołtys Edyta Matyjasik-Kulig), każde
 *   z ośmioosobową radą sołecką. GUS wymienia dodatkowo Karolinę
 *   i Rzepowskie jako miejscowości, ale SOŁECTWA SĄ DWA,
 * — PAŁAC W OSIEKU, STYL MAURETAŃSKI. ⚠️ ŹRÓDŁA RÓŻNIĄ SIĘ CO DO
 *   DATOWANIA: osiek.pl — 2. poł. XVIII w., późnobarokowy,
 *   przebudowany ok. 100 lat później przez Larischów w stylu
 *   orientalnym; Starostwo — drewniana warownia 1672, dwór barokowy
 *   w 2. poł. XVIII w. wzniesiony przez hrabinę Branicką NA
 *   15-METROWYCH DĘBOWYCH PALACH (grunt bagnisty), ok. 1845 baron
 *   Karol Larysz zleca przebudowę architektowi F.M. Lancia w stylu
 *   mauretańskim; Niezwykła Małopolska — pierwsze wzmianki 1653,
 *   Larisch kupił 1784. SALA MAURETAŃSKA opisywana przez Starostwo
 *   jako „najpiękniej udekorowana w Polsce na styl wschodni”.
 *   Dwie wieże z cebulastymi hełmami, mozaiki, kaligrafia arabska;
 *   neogotycka wieża 1843. Właściciele: Larischowie 1784–1835,
 *   baron Oskar von Rudziński 1885–1945, państwo 1945–2009,
 *   od 2009 Maciej Rudziński, małe prywatne muzeum rodziny.
 *   ⚠️⚠️ STRONA GMINY MA LITERÓWKĘ: „pałac z drugiej połowy XIV
 *   wieku” — to XVIII w. NIE KOPIOWAĆ. W treści formuła
 *   „osiemnastowieczny dwór przebudowany w połowie XIX w. w stylu
 *   mauretańskim”, BEZ konkretnego roku budowy,
 * — INNE ZABYTKI: drewniany kościół św. Andrzeja Apostoła w Osieku
 *   (późnogotycki, jeden z najcenniejszych drewnianych zabytków
 *   sakralnych pogranicza śląsko-małopolskiego); drewniany kościół
 *   MB Szkaplerznej w Głębowicach (nawa 1518, zakrystia 1325–27);
 *   Kopiec Grunwaldzki usypany w 1910,
 * — KARP OSIECKI: Lista Produktów Tradycyjnych, wpis w 2014 r.
 *   (Rada ds. Produktów Tradycyjnych zaopiniowała pozytywnie
 *   w marcu 2014). ⚠️ TO OSOBNY WPIS niż karp zatorski,
 * — HISTORIA STAWÓW (ohzosiek.pl): gospodarka stawowa od XII–XIII w.;
 *   w latach 1719–1776 dwunastu hodowców dostarczało 50 tys. narybku
 *   rocznie, majątek miał 98 stawów i 4 sadzawki, łącznie 100 ha;
 *   Oskar de Rudno Rudziński kupił majątek w 1885 ze 140 ha stawów,
 *   skrzyżował karpia czeskiego z tarlakami Rudolfa Gascha;
 *   W 1912 KARP OSIECKI DOSTAŁ NAJWYŻSZĄ OCENĘ NA WYSTAWIE LWOWSKIEJ,
 * — STAWY W GMINIE: 315 ha wg gminy, 307 ha wg materiału Doliny
 *   Karpia; największy staw Bonar Duży ok. 25 ha,
 * — DOLINA KARPIA: Stowarzyszenie liczy 11 GMIN, założone 2006;
 *   Osiek należy. Marka lokalna w gminie: Restauracja Tarniówka,
 *   MOLO Resort, plantacja Borówki z Zatorskiej (zał. 2016),
 * — INNE FIRMY: Rolnicza Spółdzielnia Produkcyjna „Przyszłość”,
 *   ul. Słoneczna 54; MOLO Resort — hotel nad zbiornikiem.
 *   ⚠️ Szczegółów MOLO (rok otwarcia, liczba pokoi, zatrudnienie)
 *   NIE POTWIERDZONO — strona blokuje roboty,
 * — SĄSIEDZI: Przeciszów, Kęty, Polanka Wielka, Wieprz, Oświęcim,
 * — WSPÓŁRZĘDNE (UG, ul. Główna 125): 49,9508924 / 19,2639933.
 *   Wójt: Marek Jasiński.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KARPIA JAKO OSI. To oś ZATORA. Karp osiecki wchodzi jako
 *   element treści, z własną nazwą i własną datą wpisu,
 * — LICZB ZATRUDNIENIA w OHZ, MOLO Resort i RSP „Przyszłość”.
 *   Żadne wiarygodne źródło ich nie podaje. NIE PODAWAĆ,
 * — KONKRETNEGO ROKU BUDOWY PAŁACU. Trzy źródła podają 1653 / 1672 /
 *   2. poł. XVIII w. Użyta formuła bez roku,
 * — NUMERU I DATY WPISU pałacu do rejestru zabytków,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 7 492,22 zł
 *   i 4,7% IDENTYCZNIE dla wszystkich gmin powiatu oświęcimskiego.
 *   Tak samo powiatowa jest struktura zatrudnienia 6,2 / 43,0 /
 *   18,0 / 1,4. NIE UŻYWAĆ jako gminnych.
 *
 * PUŁAPKI:
 * — ⚠️⚠️ WIELE OSIEKÓW W POLSCE. Zawsze sprawdzać TERYT 1213052
 *   i kod 32-608. Istnieje też domena gminaosiek.pl odrębna
 *   od osiek.pl; oficjalna strona urzędu to OSIEK.PL,
 * — polskawliczbach: właściwy adres to gmina_Osiek_malopolskie,
 *   NIE gmina_Osiek_oswiecimski (taki nie istnieje),
 * — GŁĘBOWICE mają starszy kościół (zakrystia 1325–27) niż sam Osiek
 *   — nie zakładać, że siedziba gminy ma najstarsze zabytki.
 */

export const OSIEK: CityContent = {
  slug: "osiek",
  h1: "Thermomix Osiek – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Osiek — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Osiek pod Oświęcimiem: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0,6%. Dojazd do Osieka i Głębowic bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Osiek — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Osiek. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Osieka i Głębowic przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, obie wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Osieku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Dwie wsie i osiemset krów",
      paragraphs: [
        "Gmina Osiek składa się z dwóch sołectw: Osieka i Głębowic. Mieszka w nich razem ponad osiem tysięcy osób na czterdziestu jeden kilometrach kwadratowych. Dwie wsie, dwóch sołtysów, dwie rady sołeckie po osiem osób.",
        "A jej gospodarczym rdzeniem jest przedsiębiorstwo, którego jedynym właścicielem jest Skarb Państwa. Ośrodek Hodowli Zarodowej w Osieku działa od tysiąc dziewięćset pięćdziesiątego trzeciego roku, od tysiąc dziewięćset dziewięćdziesiątego piątego jako spółka, w której sto procent udziałów należy do Krajowego Ośrodka Wsparcia Rolnictwa.",
        "Skala jest jak na dwie wsie duża: tysiąc sto czterdzieści cztery hektary użytków rolnych pod zboża i rzepak, około tysiąca ośmiuset sztuk bydła mlecznego, w tym osiemset krów, i dwieście dziewięćdziesiąt hektarów stawów. Uczciwie dodam, że liczby zatrudnienia ośrodek nie podaje i nie będę jej zgadywać.",
        "Stawy w tej okolicy są zresztą znacznie starsze niż państwowa własność. Gospodarka stawowa istnieje tu od dwunastego albo trzynastego wieku, a w latach tysiąc siedemset dziewiętnaście do tysiąc siedemset siedemdziesiąt sześć dwunastu hodowców dostarczało pięćdziesiąt tysięcy sztuk narybku rocznie; majątek miał wtedy dziewięćdziesiąt osiem stawów i cztery sadzawki.",
        "W tysiąc osiemset osiemdziesiątym piątym roku majątek kupił Oskar de Rudno Rudziński i skrzyżował karpia czeskiego z tarlakami sprowadzonymi od Rudolfa Gascha. Efekt oceniono najwyżej na wystawie we Lwowie w tysiąc dziewięćset dwunastym roku. Dziś karp osiecki jest na ministerialnej Liście Produktów Tradycyjnych, wpisany w dwa tysiące czternastym.",
        "Ale najbardziej zaskakującą rzeczą w tej gminie jest budynek. W Osieku stoi dwór przebudowany w połowie dziewiętnastego wieku w stylu mauretańskim: dwie wieże z cebulastymi hełmami, mozaiki, kaligrafia arabska na ścianach i sala, którą Starostwo Powiatowe opisuje jako najpiękniej udekorowaną w Polsce na styl wschodni. Zlecił to baron Karol Larysz, wykonał architekt Franciszek Maria Lancia.",
        "Datowania samego dworu nie podam, bo źródła podają trzy różne wersje — od siedemnastego do drugiej połowy osiemnastego wieku. Wiadomo za to, że postawiono go na piętnastometrowych dębowych palach, bo grunt jest tu bagnisty. Właścicielami byli kolejno Larischowie, potem od tysiąc osiemset osiemdziesiątego piątego baronowie von Rudzińscy, po wojnie państwo, a od dwa tysiące dziewiątego roku znów rodzina Rudzińskich, która prowadzi w nim niewielkie prywatne muzeum.",
        "W Głębowicach jest z kolei drewniany kościół Matki Bożej Szkaplerznej, którego zakrystia pochodzi z lat dwudziestych czternastego wieku, a nawa z tysiąc pięćset osiemnastego — czyli starszy niż cokolwiek w samej siedzibie gminy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Osiek?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj wieś: Osiek albo Głębowice. To wszystko, czego potrzebuję — gmina ma tylko dwa sołectwa, więc trasa jest prosta.",
        "Warto tylko podać numer domu, bo obie wsie są rozciągnięte. Przy okazji: to Osiek w powiecie oświęcimskim, a nie któryś z kilku innych Osieków w Polsce — nawigacja lubi je mylić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Osiek"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Osiemset krów za oknem",
      paragraphs: [
        "W gminie, w której stoi obora na osiemset krów mlecznych, mleko nie jest produktem ze sklepu. Jest czymś, co się bierze, wozi i przerabia — a przy okazji czymś, z czego w domu da się zrobić o wiele więcej, niż większość ludzi próbuje.",
        "Domowy nabiał ma bowiem jedną trudność i tylko jedną: temperaturę. Za gorąco i twaróg wyjdzie gumowaty, za zimno i się nie zetnie; jogurt potrzebuje czterdziestu stopni utrzymanych przez kilka godzin, a nie na oko. To jest dokładnie ta część roboty, którą urządzenie robi lepiej od człowieka, bo trzyma ustawioną temperaturę bez pilnowania.",
        "Pierwsza rzecz to jogurt. Z litra mleka i dwóch łyżek gotowego jogurtu powstaje kilka słoików, których skład zna się w całości. To zwykle pierwsza rzecz, którą klientki zaczynają robić same, kiedy przeczytają etykietę kubka ze sklepu.",
        "Druga to twaróg i serek. Podgrzanie do właściwej temperatury, dodanie zakwaszacza, odcedzenie — i wychodzi ser o konsystencji, jaką się lubi, a nie jaką akurat mają w sklepie. Z serwatki, która zostaje, robi się chleb albo naleśniki.",
        "Trzecia to masło i maślanka. Śmietanę ubija się tu w kilka minut, aż się rozdzieli; zostaje masło i maślanka, obie rzeczy do użycia od razu.",
        "Czwarta jest o rybie, bo trudno o niej nie wspomnieć w gminie z dwustoma dziewięćdziesięcioma hektarami stawów. Karpia urządzenie nie oprawi ani nie usmaży — ale ugotuje go na parze bez zapachu smażenia, a z resztek zrobi pastę na kanapki w kilkadziesiąt sekund.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Osiek i gotowanie — karp osiecki, mleko i Dolina Karpia",
    paragraphs: [
      "Gmina Osiek ma własny wpis na ministerialnej Liście Produktów Tradycyjnych: karp osiecki, zarejestrowany w dwa tysiące czternastym roku. To osobna pozycja niż karp zatorski z sąsiedniej gminy — inna nazwa, inny wpis, inna historia.",
      "A historia jest tu długa. Stawy istnieją w okolicy od dwunastego albo trzynastego wieku; w osiemnastym majątek miał ich dziewięćdziesiąt osiem, a dwunastu hodowców dostarczało pięćdziesiąt tysięcy sztuk narybku rocznie. W tysiąc osiemset osiemdziesiątym piątym Oskar de Rudno Rudziński skrzyżował tutejszego karpia z czeskim i z tarlakami Rudolfa Gascha, a wynik zdobył najwyższą ocenę na wystawie lwowskiej w tysiąc dziewięćset dwunastym roku.",
      "Dziś stawy w gminie zajmują ponad trzysta hektarów, a największy z nich, Bonar Duży, około dwudziestu pięciu. Gmina należy do Stowarzyszenia Dolina Karpia, obejmującego jedenaście gmin.",
      "Drugim filarem jest mleko. Ośrodek Hodowli Zarodowej trzyma tu około tysiąca ośmiuset sztuk bydła, w tym osiemset krów mlecznych, na tysiącu stu czterdziestu czterech hektarach — to jedno z większych gospodarstw mlecznych w tej części Małopolski, w całości państwowe.",
      "Markę Doliny Karpia noszą w gminie trzy podmioty: restauracja Tarniówka, MOLO Resort i plantacja borówek założona w dwa tysiące szesnastym roku.",
      "Dla urządzenia najsensowniejszy jest tu domowy nabiał — jogurt, twaróg, masło i maślanka, przy których wszystko zależy od utrzymania temperatury — oraz ryba na parze i pasty z resztek. Czego nie zrobi, mówię wprost: nie oprawi karpia i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i pilnowaniem.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Osiek dojeżdżam?",
  districtsParagraphs: [
    "Do obu, bez żadnej dopłaty za odległość. Gmina liczy ponad osiem tysięcy mieszkańców na czterdziestu jeden kilometrach kwadratowych i ma tylko dwa sołectwa: Osiek i Głębowice.",
    "W Osieku stoi dwór przebudowany w połowie dziewiętnastego wieku w stylu mauretańskim, z dwiema wieżami zwieńczonymi cebulastymi hełmami, mozaikami i arabską kaligrafią. Postawiono go na piętnastometrowych dębowych palach, bo grunt jest tu bagnisty. Od dwa tysiące dziewiątego roku należy znów do rodziny Rudzińskich i mieści niewielkie prywatne muzeum.",
    "W Osieku jest też drewniany, późnogotycki kościół świętego Andrzeja Apostoła — jeden z najcenniejszych drewnianych zabytków sakralnych pogranicza śląsko-małopolskiego. W Głębowicach drewniany kościół Matki Bożej Szkaplerznej, którego zakrystia pochodzi z lat dwudziestych czternastego wieku, a nawa z tysiąc pięćset osiemnastego.",
    "W tysiąc dziewięćset dziesiątym roku usypano tu Kopiec Grunwaldzki, na pięćsetlecie bitwy.",
    "Gospodarczym rdzeniem gminy jest Ośrodek Hodowli Zarodowej, działający od tysiąc dziewięćset pięćdziesiątego trzeciego roku i w całości należący do Skarbu Państwa: tysiąc sto czterdzieści cztery hektary pól, osiemset krów mlecznych i dwieście dziewięćdziesiąt hektarów stawów.",
    "Dojazd: kolei w gminie nie ma. Sąsiedzi to Przeciszów, Kęty, Polanka Wielka, Wieprz i gmina wiejska Oświęcim.",
  ],
  districts: ["Osiek", "Głębowice"],

  nearbyHeading: "Przeciszów, Polanka Wielka i Kęty też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Przeciszowem, Kętami, Polanką Wielką, Wieprzem i gminą wiejską Oświęcim. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: to Osiek w powiecie oświęcimskim, w województwie małopolskim. Osieków jest w Polsce kilka — w świętokrzyskim, na Mazowszu, na Pomorzu i na Kujawach — a wyszukiwarki nagminnie je mylą.",
  ],
  nearbyTowns: [
    "Przeciszów",
    "Kęty",
    "Polanka Wielka",
    "Wieprz",
    "Oświęcim gmina",
    "Zator",
  ],

  about: blokOMnie("do gminy Osiek", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Mieszkam w Głębowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Gmina ma tylko dwa sołectwa, więc trasa jest prosta — wystarczy nazwa wsi i numer domu.",
    },
    ...faqWspolne("w gminie Osiek"),
    {
      question: "Czy da się zrobić w tym domowy jogurt i twaróg?",
      answer:
        "Da się i w tej gminie to akurat ma szczególny sens, bo mleka jest tu pod dostatkiem. Cała trudność przy nabiale polega na temperaturze: jogurt potrzebuje około czterdziestu stopni utrzymanych przez kilka godzin, a twaróg ścina się w wąskim zakresie — za gorąco wychodzi gumowaty, za zimno się nie zetnie. Urządzenie trzyma ustawioną temperaturę bez pilnowania, więc wynik jest powtarzalny. Masło ubija się ze śmietany w kilka minut, a maślanka zostaje przy okazji.",
    },
  ],

  geo: { lat: 49.9508924, lng: 19.2639933 },
};
