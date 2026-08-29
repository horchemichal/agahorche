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
 * RACŁAWICE — gmina wiejska, powiat miechowski. Jedna z najmniej
 * ludnych gmin Małopolski: 2 426 mieszkańców na 59,1 km²,
 * gęstość 41 os./km².
 *
 * OŚ STRONY: BITWA Z 4 KWIETNIA 1794 R. — ale ujęta od strony
 * KOSYNIERÓW, czyli chłopów, którzy poszli do boju z kosami.
 * To daje naturalne przejście do dzisiejszej gminy, w której
 * 44,4% pracujących wciąż pracuje w rolnictwie, oraz do konkursu
 * „Chłop Roku”, odbywającego się tu co roku.
 *
 * ⚠️ NAJWAŻNIEJSZE SPROSTOWANIE: PANORAMA RACŁAWICKA JEST
 * WE WROCŁAWIU (Muzeum Narodowe, od 14 czerwca 1985 r.).
 * W Janowiczkach stoi od 31 sierpnia 2023 r. plenerowa,
 * POMNIEJSZONA KOPIA. Strona mówi o tym wprost — to najczęstsze
 * nieporozumienie przy tej gminie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — BITWA 4 kwietnia 1794 r. Dowodzili: Tadeusz Kościuszko
 *   (przy nim gen. Józef Zajączek, gen. Antoni Madaliński)
 *   przeciw gen. Aleksandrowi Tormasowowi. Oddział 320 kosynierów
 *   przeprowadził decydujący szturm na baterię rosyjską,
 * — WOJCIECH BARTOS, chłop pańszczyźniany z Rzędowic, miał czapką
 *   zatkać otwór zapałowy rosyjskiej armaty. Kościuszko przepasał go
 *   szarfą oficerską, mianował chorążym i nadał nazwisko GŁOWACKI,
 * — KOPIEC KOŚCIUSZKI w JANOWICZKACH (nie w samych Racławicach),
 *   na wzgórzu Zamczysko, usypany 1926–1934, wysokość ok. 14 m,
 *   podstawa 28,6 × 27 m. Inicjatywa z wiecu 15 października 1917 r.,
 * — POMNIK BARTOSZA GŁOWACKIEGO odsłonięty w 1994 r.,
 *   proj. Marian Konieczny,
 * — POMNIK HISTORII „Racławice – teren historycznej Bitwy
 *   Racławickiej”, rozporządzenie Prezydenta RP z 14 kwietnia 2004 r.,
 *   obszar 520 ha,
 * — PLENEROWA KOPIA PANORAMY w Janowiczkach, otwarta 31 sierpnia
 *   2023 r., w formie półkola na stalowej konstrukcji, dostępna
 *   bez ograniczeń, iluminowana nocą. Koszt ponad 370 tys. zł,
 * — OGÓLNOPOLSKI KONKURS „CHŁOP ROKU”: XXIX edycja 24 maja 2026 r.,
 *   pod pomnikiem Bartosza Głowackiego w Janowiczkach. Organizatorzy:
 *   MODR i Małopolska Izba Rolnicza. W programie inscenizacja bitwy,
 *   konkurencje praktyczne i konkurs na najlepsze koło gospodyń,
 * — DEMOGRAFIA (31.12.2024): 2 426 mieszkańców, 59,1 km²,
 *   41 os./km². Spadek o 6,1% w latach 2002–2024. W 2024:
 *   17 urodzeń, 37 zgonów, przyrost naturalny −20; saldo migracji
 *   wewnętrznych +1. Wyludnianie ma charakter NATURALNY, nie migracyjny,
 * — MIEJSCOWOŚCI (11 wg GUS): Racławice, Dosłońce, Dziemięrzyce,
 *   Górka Kościejowska, Góry Miechowskie, Głupczów, Janowiczki,
 *   Klonów, Kościejów, Marchocice, Miroszów,
 * — GOSPODARKA: 241 podmiotów REGON, w tym 188 osób fizycznych.
 *   44,4% pracujących w rolnictwie. 91 osób wyjeżdża do pracy,
 *   21 przyjeżdża. Użytki rolne 77% powierzchni, lasy 16%.
 *   Wysokość 270–380 m n.p.m. Pięć rezerwatów z roślinnością stepową,
 * — KOLEI W GMINIE NIE MA. Najbliższa stacja Miechów (ok. 15 km),
 *   skąd Koleje Małopolskie do Krakowa w ok. 40–50 min.
 *   Przez teren gminy DW 794.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZEBNOŚCI WOJSK ROSYJSKICH. Źródła podają 2 800 i ok. 5 000.
 *   Nie podaję żadnej,
 * — LICZBY ZDOBYTYCH ARMAT. Nie potwierdzona,
 * — TWIERDZENIA, ŻE BITWA „ZMIENIŁA LOSY INSURKCJI”. Jej znaczenie
 *   jest wśród historyków sporne: sukces taktyczny i propagandowy,
 *   nie przełomowy strategicznie. Piszę o znaczeniu symbolicznym,
 * — MUZEUM BITWY. Nie ma go w gminie. Nie sugerować zwiedzania
 *   ekspozycji,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak,
 * — NAZW PRACODAWCÓW. Starostwo pisze wprost: „brak zakładów
 *   przemysłowych”. Nie wymieniam żadnej firmy,
 * — NAZW I DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Wiadomo, że istnieją
 *   (jest konkurs na najlepsze KGW), ale nazw nie potwierdzono,
 * — POZYCJI W RANKINGU NAJMNIEJSZYCH GMIN. Piszę „jedna
 *   z najmniej ludnych”, bez numeru miejsca.
 *
 * PUŁAPKI:
 * — PANORAMA RACŁAWICKA JEST WE WROCŁAWIU (patrz wyżej).
 *   Autorzy Jan Styka i Wojciech Kossak, płótno 15 × 114 m,
 *   pierwsze otwarcie 5 czerwca 1894 we Lwowie,
 * — KOPIEC I POMNIK SĄ W JANOWICZKACH, nie w Racławicach.
 *   To osobne sołectwo tej samej gminy,
 * — INSCENIZACJA BITWY odbywa się w MAJU, w ramach „Chłopa Roku”,
 *   a nie 4 kwietnia,
 * — „CHŁOP ROKU” TO KONKURS OGÓLNOPOLSKI goszczony w Racławicach,
 *   nie lokalne święto gminne. Zwycięzcy pochodzą z całej Polski,
 * — SPRZECZNE DANE GMINNE: 11 miejscowości (GUS) vs 12 sołectw
 *   (starostwo); 2 426 (GUS 2024) vs 2 389 (starostwo),
 * — RACŁAWIC W POLSCE JEST WIELE (podkarpackie, wielkopolskie,
 *   opolskie „Racławice Wielkie”).
 */

export const RACLAWICE: CityContent = {
  slug: "raclawice",
  h1: "Thermomix Racławice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Racławice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Racławice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Racławice, Janowiczki, Marchocice, Kościejów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Racławice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Racławice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Racławice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. To niewielka gmina i dojeżdżam do każdej wsi, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina, każda wieś, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Racławice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Racławicach, jak w Janowiczkach, Marchocicach czy Kościejowie.",
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
      heading: "Gmina, w której chłopi poszli na armaty z kosami",
      paragraphs: [
        "Czwartego kwietnia tysiąc siedemset dziewięćdziesiątego czwartego roku Tadeusz Kościuszko stoczył tu bitwę z korpusem generała Tormasowa. O jej przebiegu zdecydował oddział trzystu dwudziestu kosynierów — chłopów uzbrojonych w kosy osadzone na sztorc — którzy przeprowadzili szturm na rosyjską baterię artylerii i ją zdobyli.",
        "Jeden z nich, Wojciech Bartos z Rzędowic, chłop pańszczyźniany, miał zatkać czapką otwór zapałowy armaty. Kościuszko przepasał go szarfą oficerską, mianował chorążym i nadał nazwisko Głowacki. Trzeba to nazwać po imieniu: pańszczyźniany chłop został tego dnia oficerem, i to jest powód, dla którego o Racławicach pamięta się do dziś.",
        "Historycy spierają się o wagę militarną tej bitwy i uczciwość każe dodać, że sukces był raczej taktyczny i propagandowy niż strategiczny. Ale znaczenie symboliczne jest bezsporne, bo pierwszy raz w polskiej wojnie chłopi wystąpili jako podmiot, a nie jako tło.",
        "Muszę tu od razu wyjaśnić najczęstsze nieporozumienie. Panorama Racławicka nie jest w Racławicach — stoi we Wrocławiu, w Muzeum Narodowym, i wisi tam od tysiąc dziewięćset osiemdziesiątego piątego roku. W Janowiczkach, jednej ze wsi tej gminy, od sierpnia dwa tysiące dwudziestego trzeciego roku stoi jej plenerowa, pomniejszona kopia: półkole na stalowej konstrukcji, dostępne bez biletu, nocą podświetlone.",
        "W Janowiczkach jest też kopiec Kościuszki, usypany w latach tysiąc dziewięćset dwadzieścia sześć–trzydzieści cztery, i pomnik Bartosza Głowackiego z tysiąc dziewięćset dziewięćdziesiątego czwartego roku. Cały teren bitwy, pięćset dwadzieścia hektarów, ma od dwa tysiące czwartego roku status Pomnika Historii. Muzeum natomiast nie ma i nie będę udawać, że jest.",
        "Ciągłość tej historii jest tu zresztą całkiem dosłowna. Co roku, pod pomnikiem Głowackiego, odbywa się ogólnopolski konkurs „Chłop Roku” — w dwa tysiące dwudziestym szóstym roku dwudziesta dziewiąta edycja. Konkurencje są praktyczne: montaż opryskiwacza, szacowanie plonu, slalom ciągnikiem. Jest też konkurs na najlepsze koło gospodyń wiejskich.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Racławice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę wsi. Gmina jest mała — niecałe dwa i pół tysiąca mieszkańców na jedenaście miejscowości — więc dojazd wszędzie zajmuje kilka minut i nigdzie nie ma dopłaty.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do obrządku i do prac polowych, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Racławice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której prawie połowa pracujących pracuje w polu",
      paragraphs: [
        "W gminie Racławice czterdzieści cztery procent pracujących pracuje w rolnictwie. To bardzo dużo — w większości gmin, o których pisałam na tych stronach, rolnictwo dawno zeszło do kilku procent. Tutaj użytki rolne zajmują siedemdziesiąt siedem procent powierzchni, zakładów przemysłowych nie ma żadnego, a z gminy wyjeżdża do pracy dziewięćdziesiąt jeden osób przy dwudziestu jeden przyjeżdżających.",
        "Za tym stoi bardzo konkretny sposób życia. Dzień zaczyna się wcześnie i nie ma w nim wyraźnej pory obiadowej — jest przerwa wtedy, kiedy da się ją zrobić. W żniwa albo przy zbiorze nie ma jej wcale. Gotowanie musi się do tego dopasować, a nie odwrotnie.",
        "Praktyczna korzyść jest tu bardzo prosta i nie ma w niej nic z folderu. Wstawiasz danie jednogarnkowe i wychodzisz. Gotuje się bez nikogo, samo się wyłącza, nie przypala i czeka. Wracasz o dowolnej porze i jest ciepły obiad. To nie jest oszczędność czasu — to jest różnica między obiadem ugotowanym a obiadem odpuszczonym.",
        "Druga rzecz to gotowanie z zapasem i przetwory. Zupy do zamrożenia, sosy, pasty kanapkowe, powidła, ciasto na pierogi robione seriami. W domu z gospodarstwem to i tak się dzieje — chodzi tylko o to, żeby zajmowało pół dnia zamiast całego.",
        "Trzeba też powiedzieć rzecz mniej wesołą, bo ona kształtuje tutejsze domy. Gmina się wyludnia, ale nie dlatego, że ludzie wyjeżdżają — saldo migracji jest praktycznie zerowe. Wyludnia się dlatego, że rodzi się siedemnaścioro dzieci rocznie, a umiera trzydzieści siedem osób. To znaczy, że jeżdżę tu do domów, w których często mieszkają dwie osoby po sześćdziesiątce, a dzieci przyjeżdżają na niedzielę.",
        "Dla takiego domu argument brzmi inaczej i wolę go powiedzieć wprost. Przy gotowaniu dla dwojga nie zaoszczędzisz godziny dziennie. Zmienia się co innego: przy mniejszym wysiłku łatwiej ugotować porządnie, a na niedzielę, kiedy zjeżdża się rodzina, da się zrobić duży obiad bez spędzenia przy nim całego przedpołudnia.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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
    heading: "Racławice i gotowanie — konkurs, którego nikt się nie spodziewa",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu z gminy Racławice na ministerialnej Liście Produktów Tradycyjnych ani żadnej udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce coś ogólnie małopolskiego i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Jest za to coś, czego się w tak małej gminie nie spodziewałam. Przy dorocznym konkursie „Chłop Roku”, który odbywa się tu pod pomnikiem Bartosza Głowackiego i ma zasięg ogólnopolski, rozgrywany jest osobny konkurs na najlepsze koło gospodyń wiejskich. Czyli: w gminie liczącej niecałe dwa i pół tysiąca ludzi raz do roku zjeżdżają się gospodynie i rolnicy z całej Polski.",
      "To jest zresztą ładne domknięcie tej historii. Bitwę wygrali tu chłopi z kosami, a dwieście trzydzieści lat później rozgrywa się w tym samym miejscu konkurs, w którym trzeba umieć zmontować opryskiwacz, oszacować plon i przejechać slalom ciągnikiem. Ciągłość jest zupełnie dosłowna.",
      "Co z tego wynika dla urządzenia? Tyle, co zawsze przy gotowaniu na konkurs albo na większą okazję: różnica nie leży w trudności, tylko w liczbie godzin przy blacie. Ciasto trzeba wyrobić, farsz posiekać, masę utrzeć — po wielokroć. Urządzenie zabiera dokładnie tę część roboty. Przepisu ani wprawy nie zabiera, bo nie ma jak.",
    ],
  },

  districtsHeading: "Gdzie w gminie Racławice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich miejscowości gminy, bez żadnej dopłaty za odległość: Racławic, Janowiczek, Dosłońców, Dziemięrzyc, Górki Kościejowskiej, Gór Miechowskich, Głupczowa, Klonowa, Kościejowa, Marchocic i Miroszowa.",
    "To jedna z najmniej ludnych gmin w Małopolsce — niecałe dwa i pół tysiąca osób na pięćdziesięciu dziewięciu kilometrach kwadratowych, czyli czterdziestu jeden mieszkańców na kilometr. Przejechanie jej z jednego końca na drugi zajmuje kilkanaście minut.",
    "Warto wiedzieć, że to, co uchodzi za atrakcje Racławic, znajduje się w Janowiczkach: kopiec Kościuszki na wzgórzu Zamczysko, pomnik Bartosza Głowackiego i plenerowa kopia Panoramy. Sama Panorama Racławicka wisi we Wrocławiu i to warto powtórzyć, bo pomyłka jest bardzo częsta. Cały teren dawnego pola bitwy, pięćset dwadzieścia hektarów, jest Pomnikiem Historii.",
    "O dojeździe uczciwie: w gminie Racławice nie ma kolei. Najbliższa stacja to Miechów, około piętnastu kilometrów stąd, skąd Koleje Małopolskie dowożą do Krakowa Głównego w czterdzieści do pięćdziesięciu minut. Drogą prowadzi tędy wojewódzka numer siedemset dziewięćdziesiąt cztery, ta sama, która biegnie z Krakowa przez Skałę i Wolbrom. Ja przyjeżdżam samochodem i nie doliczam za to ani złotówki.",
  ],
  districts: [
    "Racławice",
    "Janowiczki",
    "Dosłońce",
    "Dziemięrzyce",
    "Górka Kościejowska",
    "Góry Miechowskie",
    "Głupczów",
    "Klonów",
    "Kościejów",
    "Marchocice",
    "Miroszów",
  ],

  nearbyHeading: "Miechów, Słaboszów i Charsznica też są na mojej trasie",
  nearbyParagraphs: [
    "Do Miechowa mam stąd kilkanaście kilometrów, do Słaboszowa i Charsznicy podobnie. Dalej są Książ Wielki i Gołcza. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Miechów jest dla tej gminy naturalnym punktem przesiadkowym — jeśli jedziesz stąd pociągiem do Krakowa, to właśnie tam wsiadasz.",
  ],
  nearbyTowns: [
    "Miechów",
    "Słaboszów",
    "Charsznica",
    "Książ Wielki",
    "Gołcza",
    "Kraków",
  ],

  about: blokOMnie("do gminy Racławice", "w powiecie miechowskim"),

  faq: [
    {
      question: "Czy Panorama Racławicka jest w Racławicach?",
      answer:
        "Nie i to najczęstsze nieporozumienie przy tej gminie. Panorama Racławicka Jana Styki i Wojciecha Kossaka znajduje się we Wrocławiu, w Muzeum Narodowym, i wisi tam od tysiąc dziewięćset osiemdziesiątego piątego roku. W Janowiczkach, jednej ze wsi tej gminy, od sierpnia dwa tysiące dwudziestego trzeciego roku stoi jej plenerowa, pomniejszona kopia — dostępna bez biletu, nocą podświetlona.",
    },
    ...faqWspolne("w gminie Racławice"),
    {
      question: "Gotujemy we dwoje, dzieci przyjeżdżają na niedzielę. Ma to sens?",
      answer:
        "Ma, ale argument jest inny niż przy domu pełnym dzieci i wolę to powiedzieć wprost. Przy dwóch porcjach nie zaoszczędzisz godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego: łatwiej ugotować porządnie, kiedy nie chce się stać w kuchni, a na niedzielę da się zrobić duży obiad dla całej rodziny bez spędzenia przy nim całego przedpołudnia.",
    },
    {
      question: "Mieszkam w Janowiczkach. To osobna wieś — dojedziesz?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Racławic. Cała gmina ma jedenaście miejscowości i mieści się w promieniu kilkunastu minut jazdy, więc odległość naprawdę nie ma tu znaczenia. Proszę tylko o punkt orientacyjny przy umawianiu.",
    },
  ],

  geo: { lat: 50.2947, lng: 20.1544 },
};
