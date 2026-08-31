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
 * IGOŁOMIA-WAWRZEŃCZYCE — GMINA WIEJSKA w powiecie krakowskim.
 * 7 851 mieszkańców (GUS, 31.12.2024), 62,8 km². NAJMNIEJSZA LUDNOŚCIOWO
 * gmina z tej fali i jedyna z niemal zerowym przyrostem (+2,6% od 2002).
 * 15 SOŁECTW (Wawrzeńczyce dzielą się na Wawrzeńczyce I i II).
 * ⚠️ SIEDZIBA URZĘDU JEST W WAWRZEŃCZYCACH, nie w Igołomi.
 *
 * OŚ STRONY: „IGOŁOMKA” — GMINA, KTÓRA DAŁA NAZWĘ TUNELOWI FOLIOWEMU.
 * Sezon warzywny zaczyna się tu ok. 20 GRUDNIA (rozsada), sadzi się
 * w ostatnim tygodniu lutego, zbiera od kwietnia. 674,7 ha kapusty
 * (ARiMR 2021) — 2. miejsce w Polsce. „Co szósty hektar użytków rolnych
 * to kapusta”.
 * ⚠️⚠️ CZOSNEK I OCHRONA UNIJNA NALEŻĄ DO SŁOMNIK (czosnek galicyjski,
 * ChOG). NIE WSPOMINAĆ CZOSNKU W OGÓLE. Tutaj oś to TECHNOLOGIA UPRAWY
 * POD OSŁONAMI I WCZESNOŚĆ ZBIORÓW, nie jeden chroniony gatunek.
 * ⚠️ GARNCARSTWO NALEŻY DO OLKUSZA. Zofipole = MAKSYMALNIE JEDNO ZDANIE.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KAPUSTA: 674,7 ha w gminie (ARiMR, wnioski o dopłaty, 2021);
 *   2. miejsce w Polsce pod względem areału kapusty (2024), po Koniuszy,
 *   przed Charsznicą; powiat krakowski to 3. powiat w kraju; w Polsce
 *   ogółem 13 292 ha kapusty (2024). „Co 6. hektar użytków rolnych to
 *   kapusta” — e-warzywnictwo.pl,
 * — „IGOŁOMKA” — nazwa typu tunelu foliowego pochodząca od tej gminy,
 *   używana w całej polskiej branży ogrodniczej: konstrukcja stalowa
 *   nieogrzewana, folia PE czterosezonowa; szerokość 3,3 m (łuk 6 m,
 *   wys. 1,6 m) lub 5,5 m (łuk 8 m, wys. 1,9 m); STANDARDOWA DŁUGOŚĆ
 *   33 m; łuki co 1,5 m; rozstaw 1,3 m między tunelami; orientacja
 *   północ–południe; potoczne nazwy „szóstka” i „ósemka”
 *   (ogrodinfo.pl — „Uprawa papryki w igołomkach”),
 * — CYKL PRODUKCYJNY (podoslonami.pl, przykładowe gospodarstwo 10 ha,
 *   35 tuneli): rozsada od ok. 20 grudnia; przygotowanie stanowisk
 *   wrzesień–październik; sadzenie w ostatnim tygodniu lutego; zbiory
 *   wiosenne od kwietnia; gatunki — wczesna kapusta i kalafior, potem
 *   papryka, jesienią kapusta pekińska na przechowanie. Inne uprawy:
 *   por, seler korzeniowy, kalarepa,
 * — WISŁA: płynie przez gminę na 16 km — NAJDŁUŻSZY ODCINEK W CAŁYM
 *   POWIECIE KRAKOWSKIM (Dziennik Polski, 1.12.2019). Ponad 60 km rowów
 *   melioracyjnych, 3 przepompownie przy wałach. Powodzie 1997, 2010, 2011;
 *   w 2010 woda przyszła cztery razy, dotknięte Tropiszów, Wawrzeńczyce
 *   i Wygnanów, w rolnictwie stracono co najmniej połowę zbiorów,
 *   na niżej położonych polach osiemdziesiąt do dziewięćdziesięciu procent,
 * — PAŁAC W IGOŁOMI: przełom XVIII i XIX w., Franciszek i Zofia Wodziccy,
 *   architekt CHRYSTIAN PIOTR AIGNER, styl klasycystyczny, park
 *   krajobrazowy 8 ha. Od 1778 własność Akademii Krakowskiej, potem
 *   Skorupkowie i Morsztynowie. Dziś siedziba Instytutu Archeologii
 *   i Etnologii PAN,
 * — HISTORIA: 1229 pierwsza wzmianka o Igołomi, wieś podzielona na
 *   Igołomię Mniejszą (kolegiata św. Floriana) i Większą (opactwo
 *   w Tyńcu); 1245 Wawrzeńczyce jako Laurinceviz, 1281 Wawrzynczicze,
 *   pierwotna nazwa DŁUGA WIEŚ, własność biskupów krakowskich, targ przy
 *   przeprawie przez Wisłę,
 * — ZOFIPOLE (JEDNO ZDANIE): 57 pieców garncarskich kultury przeworskiej
 *   z II–IV w. n.e. Rezerwat NIE JEST udostępniony do zwiedzania,
 * — KGW: 14 zarejestrowanych kół w gminie. KGW Zofipole zał. 25.10.2007,
 *   25 członkiń, specjalność: barszcz czerwony z krokietami,
 * — MAŁOPOLSKIE ŚWIĘTO WARZYW: coroczne, XIV edycja 1.09.2024, na terenie
 *   lotniska Aeroklubu Krakowskiego w POBIEDNIKU WIELKIM; patronaty
 *   ministra rolnictwa, wojewody i marszałka,
 * — JARMARK DYNIOWY / FESTIWAL DYNI — jesienny, V edycja w 2025 (CKiP),
 * — „WYŻYNEK” — lokalna nazwa dożynek; msza, poświęcenie wieńców, stroje
 *   ludowe, przyśpiewki komentujące sprawy lokalne, konkurs wieńców,
 *   dzielenie chleba,
 * — DOJAZD: DK79 Kraków–Sandomierz przez gminę (w Krakowie to ul.
 *   Igołomska); gmina w Stowarzyszeniu Metropolia Krakowska; lotnisko
 *   Aeroklubu Krakowskiego w Pobiedniku Wielkim; ok. 29 km na wschód
 *   od Krakowa,
 * — DEMOGRAFIA: +2,6% od 2002; średni wiek 41,4; saldo migracji +27;
 *   794 podmioty REGON, w tym 622 osoby fizyczne,
 * — WSPÓŁRZĘDNE (Wawrzeńczyce): 50,11278 / 20,32528.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — CZOSNKU. W ŻADNEJ FORMIE. To oś Słomnik (czosnek galicyjski, ChOG),
 *   a Słomniki leżą niedaleko. Świadome pominięcie,
 * — GARNCARSTWA JAKO WĄTKU. Oś Olkusza. Zofipole = jedno zdanie,
 * — RODZAJU GLEB. Czarnoziemy czy mady — NIE POTWIERDZONO. Strona gminy
 *   blokuje roboty. Użyta formuła „żyzne gleby doliny Wisły”,
 * — POWIERZCHNI UPRAW POD OSŁONAMI W HEKTARACH. Takiej statystyki dla
 *   gminy nie ma w publicznych źródłach. NIE ZMYŚLAĆ,
 * — UDZIAŁU GMINY W PRODUKCJI WARZYW REGIONU W PROCENTACH. Brak danych,
 * — „ZAGŁĘBIA WARZYWNEGO CAŁEJ EUROPY”. To marketing ze strony
 *   Metropolii Krakowskiej, nie dane. Nie powtarzać,
 * — MIEJSCA URODZENIA ŚW. BRATA ALBERTA. Powszechnie znane, ale
 *   niepotwierdzone w sprawdzonych źródłach. Pominięte,
 * — NAZWANYCH PRACODAWCÓW. Brak. 794 podmioty, z czego 622 to osoby
 *   fizyczne — gospodarka drobna, gospodarstwa rodzinne,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — URZĄD JEST W WAWRZEŃCZYCACH, nie w Igołomi,
 * — 15 SOŁECTW, ale 13 OBRĘBÓW EWIDENCYJNYCH. polskawliczbach podaje 13
 *   „miejscowości” — to obręby. Wawrzeńczyce to dwa sołectwa,
 * — KONIUSZA (1. miejsce w Polsce w areale kapusty) to SĄSIEDNIA GMINA
 *   w powiecie proszowickim, nie ta,
 * — DANE ARiMR to powierzchnia z WNIOSKÓW O DOPŁATY, nie spis rolny.
 */

export const IGOLOMIA_WAWRZENCZYCE: CityContent = {
  slug: "igolomia-wawrzenczyce",
  h1: "Thermomix Igołomia-Wawrzeńczyce – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Igołomia-Wawrzeńczyce — prezentacja",
  seoDescription:
    "Thermomix w gminie Igołomia-Wawrzeńczyce: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Igołomia-Wawrzeńczyce — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Igołomia-Wawrzeńczyce. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Wawrzeńczyc, Igołomi, Tropiszowa, Zofipola i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa gminy, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Igołomia-Wawrzeńczyce – jak wygląda prezentacja?",
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
      heading: "Gmina, która dała nazwę tunelowi foliowemu",
      paragraphs: [
        "W polskim ogrodnictwie istnieje typ tunelu foliowego, który nazywa się igołomką. Nie od producenta, nie od patentu — od tej gminy. Konstrukcja jest ściśle określona: stalowe łuki co półtora metra, szerokość trzy i trzy dziesiąte metra albo pięć i pół, wysokość odpowiednio metr sześćdziesiąt lub metr dziewięćdziesiąt, długość standardowo trzydzieści trzy metry, ustawienie z północy na południe. W gospodarstwach mówi się na nie po prostu szóstka i ósemka.",
        "Nazwa nie wzięła się z niczego. W dwa tysiące dwudziestym pierwszym roku w tej gminie uprawiano sześćset siedemdziesiąt cztery i siedem dziesiątych hektara kapusty. To drugi wynik w całej Polsce — więcej ma tylko sąsiednia Koniusza. Branżowa prasa pisze o tym tak: co szósty hektar użytków rolnych w tej gminie to kapusta.",
        "Najciekawszy jest jednak nie areał, tylko kalendarz. W gminie warzywnej rok zaczyna się mniej więcej dwudziestego grudnia — wtedy rusza rozsada. Stanowiska pod tunelami przygotowuje się już we wrześniu i październiku, sadzi w ostatnim tygodniu lutego, a pierwsze zbiory idą w kwietniu. Kiedy reszta kraju dopiero myśli o wiośnie, tutaj wczesna kapusta i kalafior są już w połowie drogi.",
        "Potem, przez lato, wchodzi papryka — ta uprawiana pod osłonami nazywana bywa igołomską. Jesienią kapusta pekińska na przechowanie. Do tego por, seler korzeniowy i kalarepa.",
        "Jest jeszcze druga rzecz, która organizuje tu życie, i nie jest równie miła. Wisła płynie przez tę gminę przez szesnaście kilometrów — to najdłuższy odcinek w całym powiecie krakowskim. Rowów melioracyjnych jest ponad sześćdziesiąt kilometrów, przy wałach stoją trzy przepompownie. W dwa tysiące dziesiątym roku woda przyszła cztery razy; najbardziej ucierpiały Tropiszów, Wawrzeńczyce i Wygnanów, a na niżej położonych polach przepadło osiemdziesiąt do dziewięćdziesięciu procent zbiorów.",
        "Historia jest tu za to bardzo stara. Igołomia pojawia się w dokumentach w tysiąc dwieście dwudziestym dziewiątym roku, podzielona wówczas między kolegiatę świętego Floriana a opactwo w Tyńcu. Wawrzeńczyce, wzmiankowane w tysiąc dwieście czterdziestym piątym, nazywały się pierwotnie Długą Wsią i należały do biskupów krakowskich; przy przeprawie przez Wisłę stał tu targ.",
        "W Igołomi stoi klasycystyczny pałac Wodzickich z przełomu osiemnastego i dziewiętnastego wieku, zaprojektowany przez Chrystiana Piotra Aignera, z ośmiohektarowym parkiem krajobrazowym; dziś mieści się w nim Instytut Archeologii i Etnologii Polskiej Akademii Nauk. A w Zofipolu archeolodzy odkryli pięćdziesiąt siedem antycznych pieców z drugiego do czwartego wieku naszej ery.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Igołomia-Wawrzeńczyce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj nazwę wsi. Sołectw jest piętnaście, a urząd gminy mieści się w Wawrzeńczycach, nie w Igołomi — to pierwsza rzecz, która myli przyjezdnych i nawigację.",
        "Jeśli macie gospodarstwo, powiedzcie od razu, w jakim jesteście momencie sezonu. Od lutego do maja i we wrześniu nie ma sensu umawiać się na środek dnia. Wieczór albo niedziela sprawdzają się lepiej i po prostu tak to zaplanuję.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Igołomia-Wawrzeńczyce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy warzywa są za darmo, ale czasu nie ma",
      paragraphs: [
        "W domu, w którym uprawia się warzywa, sytuacja przy stole jest specyficzna: surowca jest pod dostatkiem i praktycznie za darmo, a brakuje tego jednego, czego kupić się nie da — kilkudziesięciu minut wieczorem.",
        "Najostrzej widać to od lutego do maja i we wrześniu. Wtedy dzień zaczyna się przed świtem i kończy po zmroku, a obiad musi jakoś powstać po drodze. To jest dokładnie ten moment, w którym danie jednogarnkowe nastawione przed wyjściem i wyłączające się samo przestaje być wygodą, a zaczyna być warunkiem, żeby ktokolwiek zjadł ciepłe.",
        "Druga rzecz to przerabianie nadwyżek, których w takim gospodarstwie zawsze jest za dużo. Kapusta, która nie poszła w sprzedaż, papryka drugiego wyboru, pekińska z końcówki sezonu. Zupa krem, przecier, mrożone porcje albo sos gotują się bez pilnowania, więc da się przerobić skrzynkę czegoś w trakcie robienia czegoś innego.",
        "Trzecia dotyczy kiszenia i to jest tu chyba najbardziej naturalne zastosowanie. Kapusta kiszona, ogórki, kimchi z pekińskiej — zalewa i pasta przyprawowa robią się w kilka minut, a poszatkowanie kilku główek to jedna z tych czynności, które przy większych ilościach zjadają całe popołudnie.",
        "Czwarta jest o smaku. Papryka pieczona i zmiksowana na pastę, krem z pora, surówka z kalarepy — to są rzeczy, które w sklepie kosztują absurdalnie dużo jak na to, z czego się składają, a tutaj rosną za oknem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami — a warzywa na pierwsze posiłki dziecka są tu akurat pod ręką.",
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
    heading: "Igołomia-Wawrzeńczyce i gotowanie — kapusta, papryka i wyżynek",
    paragraphs: [
      "Trudno o gminę, w której związek między tym, co rośnie, a tym, co stoi na stole, byłby bardziej bezpośredni. Sześćset siedemdziesiąt cztery hektary kapusty, drugi wynik w Polsce, do tego papryka spod osłon, por, seler korzeniowy, kalarepa i pekińska na przechowanie.",
      "Raz w roku wszystko to zjeżdża się w jedno miejsce. Małopolskie Święto Warzyw odbywa się na terenie lotniska Aeroklubu Krakowskiego w Pobiedniku Wielkim — czternasta edycja wypadła pierwszego września dwa tysiące dwudziestego czwartego roku, pod patronatem ministra rolnictwa, wojewody i marszałka. Jesienią jest jeszcze Jarmark Dyniowy, w dwa tysiące dwudziestym piątym po raz piąty.",
      "Dożynki nazywa się tu wyżynkiem. Jest msza, poświęcenie wieńców, korowód w strojach ludowych i konkurs na wieniec, ale najlepsza część to przyśpiewki — układane co roku od nowa i komentujące, dość bezlitośnie, bieżące sprawy w gminie.",
      "Kół gospodyń wiejskich działa tu czternaście. Koło z Zofipola, założone w dwa tysiące siódmym roku i liczące dwadzieścia pięć członkiń, ma nawet swoją firmową potrawę: barszcz czerwony z krokietami.",
      "Dla urządzenia najsensowniejsze jest tu wszystko, co dotyczy przerabiania warzyw w większych ilościach: kremy, przeciery, sosy, zalewy do kiszonek, pasty z pieczonej papryki, mrożone porcje na zimę. Czego nie zrobi, mówię wprost: nie poszatkuje kapusty na całą beczkę i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i staniem nad garnkiem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Igołomia-Wawrzeńczyce dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy blisko osiem tysięcy mieszkańców na sześćdziesięciu trzech kilometrach kwadratowych i leży około dwudziestu dziewięciu kilometrów na wschód od Krakowa, wzdłuż Wisły.",
    "Sołectw jest piętnaście: Dobranowice, Igołomia, Koźlica, Odwiśle, Pobiednik Mały, Pobiednik Wielki, Rudno Górne, Stręgoborzyce, Tropiszów, Wawrzeńczyce pierwsze i drugie, Wygnanów, Złotniki, Zofipole i Żydów. Wawrzeńczyce dzielą się na dwa sołectwa, choć w ewidencji figurują jako jeden obręb.",
    "Urząd gminy mieści się w Wawrzeńczycach, a nie w Igołomi — mimo że nazwa gminy zaczyna się od tej drugiej miejscowości. Warto o tym wiedzieć, zanim się wyjedzie.",
    "W Igołomi stoi klasycystyczny pałac Wodzickich projektu Chrystiana Piotra Aignera, z parkiem krajobrazowym; mieści się w nim dziś Instytut Archeologii i Etnologii Polskiej Akademii Nauk. W Pobiedniku Wielkim jest lotnisko Aeroklubu Krakowskiego, na którym co roku odbywa się Małopolskie Święto Warzyw.",
    "Dojazd: kolei pasażerskiej w gminie nie ma. Główną osią jest droga krajowa siedemdziesiąt dziewięć z Krakowa do Sandomierza, która w samym Krakowie nazywa się ulicą Igołomską. Gmina należy do Stowarzyszenia Metropolia Krakowska.",
  ],
  districts: [
    "Wawrzeńczyce",
    "Igołomia",
    "Tropiszów",
    "Zofipole",
    "Pobiednik Wielki",
    "Pobiednik Mały",
    "Złotniki",
    "Stręgoborzyce",
    "Dobranowice",
    "Rudno Górne",
    "Wygnanów",
    "Koźlica",
    "Odwiśle",
    "Żydów",
  ],

  nearbyHeading: "Kocmyrzów-Luborzyca, Nowe Brzesko i Niepołomice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Kocmyrzowem-Luborzycą, Koniuszą, Nowym Brzeskiem, Drwinią i Niepołomicami, a od zachodu z samym Krakowem. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie dla porządku: pierwsze miejsce w Polsce pod względem areału kapusty należy do sąsiedniej Koniuszy w powiecie proszowickim. Ta gmina jest druga — co i tak jest wynikiem, jakiego nie ma żadna inna gmina w Małopolsce.",
  ],
  nearbyTowns: [
    "Kocmyrzów-Luborzyca",
    "Nowe Brzesko",
    "Niepołomice",
    "Drwinia",
    "Kraków",
    "Proszowice",
  ],

  about: blokOMnie("do gminy Igołomia-Wawrzeńczyce", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Tropiszowie albo w Zofipolu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Igołomia-Wawrzeńczyce"),
    {
      question: "Mamy gospodarstwo i w sezonie nie mamy czasu w ciągu dnia. Da się umówić inaczej?",
      answer:
        "Da się i tak to zwykle wygląda w tej gminie. Od lutego do maja i we wrześniu proponuję wieczory albo niedziele — spotkanie trwa około dwóch godzin i nie musi wypaść w środku dnia roboczego. Jeśli w domu jest kilka osób, które chciałyby przy tym być, powiedzcie od razu, ile, żebym przywiozła odpowiednią ilość produktów.",
    },
  ],

  geo: { lat: 50.11278, lng: 20.32528 },
};
