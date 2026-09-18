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
 * KAMIEŃ POMORSKI — powiat kamieński,
 * woj. zachodniopomorskie, nad Zalewem Kamieńskim.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ, siedziba powiatu.
 * MIASTO: 8 213 mieszkańców (GUS 31.12.2024), 10,7 km²,
 * gęstość 764,7 os./km², 10 m n.p.m.
 * CAŁA GMINA: 13 387 osób, 208,5 km², 42 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,9673 / 14,7714.
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA KAMIEŃ POMORSKI.
 *
 * ⚠ ODMIANA: ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   D. KAMIENIA POMORSKIEGO, Ms. W KAMIENIU POMORSKIM,
 *   przym. KAMIEŃSKI (jak powiat kamieński).
 *   ⚠⚠ NIE POTWIERDZONE BEZPOŚREDNIO W PWN w sesji
 *   researchu, ale wzór jest regularny, a przymiotnik
 *   przesądza urzędowa nazwa powiatu.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — źródła podają
 *   dwie sprzeczne formy, żadnej nie potwierdzono.
 * ⚠⚠⚠ HOMONIM KRYTYCZNY: KAMIEŃ POMORSKI
 *   ≠ KAMIEŃ KRAJEŃSKI (woj. kujawsko-pomorskie, powiat
 *   sępoleński — MA WŁASNĄ STRONĘ W SERWISIE).
 *   Istnieją też liczne wsie o nazwie „Kamień".
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — IX w. — gród plemienia Wolinian; X w. — podgrodzie.
 * — 5 STYCZNIA 1274 — PRAWA MIEJSKIE (prawo lubeckie)
 *   od księcia Barnima I. ⚠ DATA DZIENNA, PEWNA.
 * — OSIEM BASZT OBRONNYCH z początku XIV w., w tym TRZY
 *   ZWRÓCONE W STRONĘ ZALEWU, o nazwach funkcyjnych:
 *   RYBACKA, MIEJSKA, MAŚLANA.
 * — 1842 — połączenie żeglugowe ze Szczecinem;
 *   1892 — połączenie kolejowe.
 * — ⚠⚠⚠ RDZEŃ KĄTA — ORGANY W KONKATEDRZE:
 *   — zbudowane przez Michaela Berigela ze Szczecina,
 *     UKOŃCZONE 29 LISTOPADA 1672 R.,
 *   — wymiary: 13 m i 9 m. ⚠⚠ ŹRÓDŁA ZAMIENIAJĄ
 *     WYSOKOŚĆ Z SZEROKOŚCIĄ — PISZĘ „trzynaście
 *     na dziewięć metrów", BEZ PRZYPISYWANIA, KTÓRY
 *     WYMIAR JEST KTÓRY,
 *   — przy budowie wykorzystano ze starego instrumentu
 *     163 PISZCZAŁKI, 57 FUNTÓW CYNY I 3 SZNURY DREWNA,
 *   — CZTERY PRZEBUDOWY: 1888 (brzmienie romantyczne),
 *     1941–1945 (barokizująca, NIEDOKOŃCZONA),
 *     1962–1965, 2003–2007 (PEŁNA REKONSTRUKCJA
 *     BRZMIENIA BAROKOWEGO, mechaniczna traktura),
 *   — DZIŚ 44 GŁOSY (13 + 9 + 12 + 10).
 *   ⚠⚠ LICZBY GŁOSÓW PIERWOTNYCH (39) ANI LICZBY
 *   PISZCZAŁEK (3 300 wg jednego źródła) NIE PODAJĘ —
 *   źródła się rozchodzą (39 / 44 / 47 głosów).
 *   PODAJĘ WYŁĄCZNIE 44 GŁOSY DZIŚ, bo ta liczba zgadza
 *   się z rozbiciem na sekcje w źródle parafialnym.
 *   ⚠⚠ ORGANY OPISUJĘ JAKO OBIEKT TECHNICZNY.
 *   ZERO WĄTKU WYZNANIOWEGO.
 * — ZESPÓŁ KATEDRALNY: ok. 2,8 ha, pomnik historii
 *   od 2005 r. ⚠ PŁYT NAGROBNYCH NIE WYMIENIAM —
 *   wątek grobowy.
 * — TOR WODNY KAMIEŃ POMORSKI–DZIWNÓW: prace pogłębiające
 *   do 2,7 m i poszerzające do 150–250 m.
 *   ⚠⚠ NIE UŻYWAM — „najwęższe miejsce decyduje" to kąt
 *   zajęty (Darłowo, ta sama fala). NAWET NIE WYMIENIAM
 *   W BLOKU FAKTOGRAFICZNYM, żeby nie kusiło.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu dla Kamienia Pomorskiego ani gminy. Strona
 *   gminy odsyła do listy MRiRW, ale nie wymienia
 *   produktów. NIE TWIERDZĘ ANI ŻE JEST, ANI ŻE NIE MA.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: WRACANIE DO PROSTSZEJ WERSJI — o tym, że przepisy
 * i nawyki przez lata obrastają dodatkami, i o tym,
 * jak wrócić do rdzenia, nie niszcząc tego, co dobre.
 * Kąt od organów z 1672 r.: instrument przebudowywano
 * cztery razy, a ostatnia przebudowa, w latach 2003–2007,
 * miała jeden cel — przywrócić brzmienie, jakie miał
 * na początku. Nic w nim po drodze nie było zepsute.
 * Po prostu narosło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że organy ukończono 29 listopada 1672 r., mają
 *   trzynaście na dziewięć metrów i czterdzieści cztery
 *   głosy, a przebudowywano je w 1888, w latach 1941–1945
 *   (nie dokończono), 1962–1965 i 2003–2007,
 * — ŻE OSTATNIA PRZEBUDOWA MIAŁA PRZYWRÓCIĆ BRZMIENIE
 *   PIERWOTNE — to jest rdzeń. Nie naprawić błąd,
 *   tylko zdjąć to, co narosło,
 * — ⚠⚠ ŻE PRZEPISY W DOMU ROSNĄ TAK SAMO: przy każdym
 *   wykonaniu ktoś coś dodaje, bo „będzie lepiej",
 *   i żaden pojedynczy dodatek nie jest błędem —
 *   ale po dziesięciu latach danie ma z pierwotnym
 *   wspólną głównie nazwę,
 * — ⚠⚠ ŻE TO NIE JEST ZARZUT: część tych dodatków to
 *   właśnie jest to, co czyni danie Waszym. Rzecz
 *   w tym, żeby WIEDZIEĆ, które to,
 * — ⚠⚠ ŻE SPOSÓB SPRAWDZENIA JEST JEDEN I PROSTY:
 *   zrobić raz wersję najkrótszą, jaką się pamięta,
 *   i porównać. Nie po to, żeby do niej wracać na stałe
 *   — po to, żeby wiedzieć, które dodatki naprawdę coś
 *   wnoszą, a które są tylko przyzwyczajeniem,
 * — ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO KONKRETNEGO PRZYKŁADU
 *   DANIA ANI DODATKU. To byłaby instrukcja kulinarna,
 *   a od tego nie jestem,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: PROSTSZE NIE ZNACZY
 *   LEPSZE. Rekonstrukcja brzmienia barokowego nie
 *   oznacza, że romantyczne było złe — oznacza tylko,
 *   że ktoś świadomie wybrał jedno z dwóch. Skracanie
 *   przepisu dla samego skracania to ta sama pomyłka,
 *   co dokładanie dla samego dokładania,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie rozstrzyga,
 *   co jest rdzeniem dania. Pomaga w jednym: obie wersje
 *   wykonuje tak samo, więc porównanie dotyczy naprawdę
 *   różnicy w przepisie, a nie różnicy w dniu.
 *   ⚠⚠ TO JEST BLISKIE DRAWSKU POMORSKIEMU —
 *   patrz TWARDE GRANICE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KROKU, KTÓRY ROBIMY BEZ POWODU — kąt zajęty
 *   (Drawsko Pomorskie, ta sama fala). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT I RÓŻNICA MUSI BYĆ WIDOCZNA:
 *   tam chodzi o KROK ODZIEDZICZONY Z BŁĘDU ALBO
 *   Z NIEISTNIEJĄCYCH JUŻ WARUNKÓW, czyli o coś,
 *   co NIGDY nie było potrzebne w tej kuchni;
 *   TUTAJ o DODATKI, KTÓRE KTOŚ ŚWIADOMIE DOŁOŻYŁ
 *   I KTÓRE MOGŁY BYĆ DOBRE, a tylko narosły w liczbie.
 *   Ani jednego zdania o błędzie ani o przepisywaniu.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO ODTWARZANIA PRZEPISU I ZAPISYWANIA WŁASNEJ
 *   WERSJI — kąty zajęte (Golub-Dobrzyń, Kamień
 *   Krajeński, Puck).
 * — ⚠⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn).
 * — ⚠⚠ ZERO WYBORU MIĘDZY METODAMI — kąt zajęty
 *   (Łobez, ta sama fala).
 * — ⚠ ZERO PRZYPRAW I ICH LICZBY W SZAFCE — kąty zajęte
 *   (Górzno, Pieniężno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEGO KONKRETNEGO DANIA ANI DODATKU
 *   Z NAZWY. Piszę WYŁĄCZNIE o sposobie sprawdzenia.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ „prostsze
 *   znaczy lepsze" to zdanie, które błyskawicznie staje
 *   się twierdzeniem zdrowotnym. NIE PISZĘ GO
 *   W ŻADNEJ POSTACI. TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU WYZNANIOWEGO I ZAKONNEGO: zero misji
 *   chrystianizacyjnej z 1124 r., zero przeniesienia
 *   siedziby biskupiej z 1175 r., zero osiedlenia
 *   dominikanów z 1228 r. Katedrę i organy opisuję
 *   WYŁĄCZNIE jako obiekt techniczny z wymiarami.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO PŁYT NAGROBNYCH.
 * — ⚠⚠ ZERO ROKU 1945 I PRZESIEDLEŃ.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI (−10,6 % w latach
 *   2002–2024) I ZERO ŚREDNIEGO WIEKU MIESZKAŃCA
 *   (46,6 lat) — obie liczby prowadzą do wątku starzenia
 *   się miasta.
 * — ⚠ ZERO TORU WODNEGO — kąt portowy zajęty (Darłowo).
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ pierwotnej liczby głosów organów
 *   ani liczby piszczałek — źródła podają 39, 44 i 47.
 * — NIE ROZSTRZYGAM, który wymiar organów jest
 *   wysokością, a który szerokością.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że gmina ma albo nie ma wpisu na Liście
 *   Produktów Tradycyjnych.
 * — NIE PODAJĘ ŻADNEGO DANIA ANI DODATKU Z NAZWY.
 * — NIE TWIERDZĘ, że prostsza wersja jest lepsza.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kamień Pomorski leży nad Zalewem Kamieńskim, jest
 *   siedzibą powiatu kamieńskiego i miastem w gminie
 *   miejsko-wiejskiej; liczy 8 213 mieszkańców
 *   (GUS, 31.12.2024) na 10,7 km², dziesięć metrów nad
 *   poziomem morza, a cała gmina 13 387 osób na 208,5 km²
 *   w 42 miejscowościach,
 * — w IX w. stał tu gród plemienia Wolinian, a prawa
 *   miejskie na prawie lubeckim nadał miastu 5 stycznia
 *   1274 r. książę Barnim I,
 * — na początku XIV w. miasto otoczono ośmioma basztami,
 *   z których trzy zwrócone w stronę zalewu noszą nazwy
 *   Rybacka, Miejska i Maślana,
 * — organy w konkatedrze zbudował Michael Berigel
 *   ze Szczecina i ukończył je 29 listopada 1672 r.;
 *   instrument ma trzynaście na dziewięć metrów,
 *   a przy budowie wykorzystano ze starego instrumentu
 *   163 piszczałki, 57 funtów cyny i trzy sznury drewna,
 * — organy przebudowywano czterokrotnie: w 1888 r.,
 *   w latach 1941–1945 (przebudowy nie dokończono),
 *   1962–1965 oraz 2003–2007, kiedy zrekonstruowano
 *   brzmienie barokowe i mechaniczną trakturę; dziś mają
 *   czterdzieści cztery głosy,
 * — zespół katedralny zajmuje około 2,8 ha i od 2005 r.
 *   jest pomnikiem historii,
 * — połączenie żeglugowe ze Szczecinem powstało
 *   w 1842 r., a kolejowe w 1892 r.
 */
export const KAMIEN_POMORSKI: CityContent = {
  slug: "kamien-pomorski",
  h1: "Thermomix Kamień Pomorski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kamień Pomorski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kamieniu Pomorskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kamień Pomorski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kamieniu Pomorskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kamienia Pomorskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kamień Pomorski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nic nie było zepsute. Po prostu przez trzysta lat narosło.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kamieniu Pomorskim – jak wygląda prezentacja?",
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
      id: "prostsza-wersja",
      heading: "Organy z 1672 roku i wracanie do prostszej wersji",
      paragraphs: [
        "Organy w kamieńskiej konkatedrze zbudował Michael Berigel ze Szczecina i ukończył je dwudziestego dziewiątego listopada 1672 roku. Instrument ma trzynaście na dziewięć metrów i czterdzieści cztery głosy. Rachunki z budowy wymieniają rzeczy zaskakująco konkretne: ze starego instrumentu wykorzystano sto sześćdziesiąt trzy piszczałki, pięćdziesiąt siedem funtów cyny i trzy sznury drewna.",
        "Przez następne trzysta lat przebudowywano go cztery razy. W 1888 roku nadano mu brzmienie romantyczne. W latach 1941–1945 zaczęto przebudowę odwrotną, której nie dokończono. Kolejna przyszła w latach 1962–1965.",
        "A ostatnia, w latach 2003–2007, miała jeden cel: przywrócić brzmienie, jakie instrument miał na początku.",
        "Zwróćcie uwagę na to, czego w tej historii nie ma. Nie ma awarii. Nie ma błędu, który trzeba było naprawić. Po prostu przez trzysta lat coś narosło — warstwa po warstwie, każda dodana w dobrej wierze — aż w pewnym momencie ktoś uznał, że warto zobaczyć, co było pod spodem.",
        "Przepisy w domu rosną dokładnie tak samo i to jest cała rzecz, o którą tu chodzi.",
        "Przy każdym wykonaniu ktoś coś dodaje, bo „będzie lepiej”. Raz jedno, raz drugie. Żaden pojedynczy dodatek nie jest błędem i prawie każdy w swoim momencie miał sens. Tylko że po dziesięciu latach danie ma z tym pierwotnym wspólną głównie nazwę.",
        "To nie jest zarzut. Część tych warstw to właśnie jest to, co czyni danie Waszym i nie ma powodu ich ruszać. Rzecz w tym, żeby wiedzieć, które to są — a tego nie da się wiedzieć, dopóki się nie sprawdzi.",
        "Sposób sprawdzenia jest jeden i jest prosty. Zrobić raz wersję najkrótszą, jaką się pamięta, i porównać z tą dzisiejszą. Nie po to, żeby do niej wracać na stałe. Po to, żeby się dowiedzieć, które dodatki naprawdę coś wnoszą, a które są już tylko przyzwyczajeniem ręki.",
        "Nie napiszę Wam, o które dania ani o które dodatki chodzi — nie jestem od dawania instrukcji kulinarnych i w każdym domu narosło co innego. Napiszę tylko, jak to sprawdzić.",
        "I od razu druga strona, bo bez niej byłoby to mylące: prostsze nie znaczy lepsze. Rekonstrukcja brzmienia barokowego nie oznacza, że romantyczne było złe — oznacza tylko, że ktoś świadomie wybrał jedno z dwóch, wiedząc, jak brzmi każde. Skracanie przepisu dla samego skracania to dokładnie ta sama pomyłka co dokładanie dla samego dokładania.",
        "O urządzeniu krótko i uczciwie. Ono nie rozstrzygnie, co jest rdzeniem Waszego dania — nie ma na to żadnego czujnika.",
        "Pomaga w czym innym, ale realnie: obie wersje wykona tak samo. A to znaczy, że porównujecie różnicę w przepisie, a nie różnicę między czwartkiem a niedzielą, między pośpiechem a spokojem i między jednym a drugim dniem przy garnku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kamieniu Pomorskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, które danie robicie u siebie od lat — takie, które po drodze zdążyło już trochę obrosnąć. To dobry materiał na wspólne gotowanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kamieniu Pomorskim"),
    sekcjaRaty("w Kamieniu Pomorskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla kamieńskiej rodziny",
      paragraphs: [
        "Kamień Pomorski leży nad Zalewem Kamieńskim, jest siedzibą powiatu kamieńskiego i miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad osiem tysięcy mieszkańców na dziesięciu i siedmiu dziesiątych kilometra kwadratowego, dziesięć metrów nad poziomem morza, a cała gmina ponad trzynaście tysięcy osób na dwustu ośmiu kilometrach kwadratowych, w czterdziestu dwóch miejscowościach. W dziewiątym wieku stał tu gród plemienia Wolinian, a prawa miejskie na prawie lubeckim nadał miastu piątego stycznia 1274 roku książę Barnim I. Na początku czternastego wieku miasto otoczono ośmioma basztami — trzy zwrócone w stronę zalewu noszą nazwy Rybacka, Miejska i Maślana. Organy w konkatedrze zbudował Michael Berigel ze Szczecina i ukończył je dwudziestego dziewiątego listopada 1672 roku; instrument ma trzynaście na dziewięć metrów, a przy budowie wykorzystano ze starego sto sześćdziesiąt trzy piszczałki, pięćdziesiąt siedem funtów cyny i trzy sznury drewna. Przebudowywano go czterokrotnie: w 1888 roku, w latach 1941–1945 — tej przebudowy nie dokończono — w latach 1962–1965 oraz 2003–2007, kiedy zrekonstruowano brzmienie barokowe i mechaniczną trakturę; dziś organy mają czterdzieści cztery głosy. Zespół katedralny zajmuje około dwóch i ośmiu dziesiątych hektara i od 2005 roku jest pomnikiem historii. Połączenie żeglugowe ze Szczecinem powstało w 1842 roku, a kolejowe w 1892.",
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

  districtsHeading: "Do których części Kamienia Pomorskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — także do części nad zalewem — i do wszystkich czterdziestu dwóch miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kamień Pomorski też przyjadę",
  nearbyParagraphs: [
    "Świnoujście, Goleniów, Trzebiatów i Szczecin mieszczą się w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świnoujście", "Goleniów", "Trzebiatów", "Szczecin"],

  about: blokOMnie("do Kamienia Pomorskiego", "w Kamieniu Pomorskim", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kamienia Pomorskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu dwóch miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłka jest bardzo częsta: Kamień Pomorski leży nad Zalewem Kamieńskim w województwie zachodniopomorskim — a Kamień Krajeński to zupełnie inne miasto, w kujawsko-pomorskiem.",
    },
    ...faqWspolne("w Kamieniu Pomorskim"),
    {
      question: "Jak sprawdzić, które dodatki w domowym przepisie naprawdę coś wnoszą?",
      answer:
        "Zrobić raz wersję najkrótszą, jaką się pamięta, i porównać z dzisiejszą. Nie po to, żeby do niej wracać na stałe — po to, żeby wiedzieć, co jest rdzeniem, a co przyzwyczajeniem ręki. I od razu zastrzeżenie: prostsze nie znaczy lepsze. Skracanie przepisu dla samego skracania to ta sama pomyłka co dokładanie dla samego dokładania.",
    },
    {
      question: "Czy Thermomix pomoże w takim porównaniu?",
      answer:
        "Nie rozstrzygnie, co jest rdzeniem Waszego dania — nie ma na to żadnego czujnika. Pomaga w czym innym: obie wersje wykona tak samo, więc porównujecie różnicę w przepisie, a nie różnicę między czwartkiem a niedzielą i między pośpiechem a spokojem.",
    },
  ],

  geo: { lat: 53.9673, lng: 14.7714 },
};
