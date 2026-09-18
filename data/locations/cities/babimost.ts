import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * BABIMOST — gmina miejsko-wiejska w powiecie zielonogórskim.
 * MIASTO 3 805, GMINA 6 057 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 3,7 km², GMINY 92,8 km², 6 SOŁECTW:
 * Kolesin, Laski, Podmokle Wielkie, Podmokle Małe,
 * Nowe Kramsko, Stare Kramsko.
 * ⚠ Liczba MIEJSCOWOŚCI jest inna (7 albo 11 zależnie
 *   od źródła) — to nie sprzeczność, tylko różnica pojęć.
 *   Podaję TYLKO liczbę sołectw.
 * ⚠ Strona gminy podaje 3 761 mieszkańców miasta bez daty
 *   — NIE CYTUJĘ, trzymam się GUS.
 *
 * ⚠ HOMONIMY: BABIMOST (miasto) ≠ BABIMOJSZCZYZNA (nazwa
 * regionu, nie jednostki administracyjnej). FAQ to wyjaśnia.
 *
 * PIERWSZA WZMIANKA: dokument Przemysła II z 22 LUTEGO 1257 r.
 * — wówczas jeszcze jako WIEŚ.
 * ⚠⚠ PRAW MIEJSKICH NIE DATUJĘ ROKIEM. Jedno źródło mówi
 * o uzyskaniu praw pod koniec XIII w. i formalnym uznaniu
 * za miasto w 1329 r.; brak drugiego źródła. HIPOTEZA „1397"
 * ZOSTAŁA SPRAWDZONA I OBALONA. Piszę „prawa miejskie
 * w XIII/XIV wieku".
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW NIE PODAJĘ — brak wzmianek;
 *   NIE zakładam, że ich nie było.
 *
 * ⚠⚠ LOTNISKO — PODSTAWA KĄTA:
 * PORT LOTNICZY ZIELONA GÓRA-BABIMOST LEŻY W NOWEM KRAMSKU,
 * sołectwie gminy — OK. 4 km OD BABIMOSTU i 34 km od Zielonej
 * Góry. Gmina nazywa je jedynym międzynarodowym lotniskiem
 * w województwie lubuskim. Powierzchnia 450 ha; od 2011 r.
 * bezpośrednie połączenie z Warszawą.
 * ⚠ LOTNISKO LEŻY W GMINIE, ALE NIE W MIEŚCIE — piszę
 *   to precyzyjnie. ⚠ KODÓW LOTNISKA NIE PODAJĘ.
 * ⚠ ROKU OTWARCIA DLA RUCHU CYWILNEGO NIE PODAJĘ.
 *
 * GEOGRAFIA: miasto historycznie leżało NA WYSPIE utworzonej
 * przez rzekę GNIŁĄ OBRĘ. Część JEZIORA WOJNOWSKIEGO leży
 * w granicach gminy; gmina graniczy też z JEZIOREM LINY.
 * LASY ok. 3 526 ha, czyli 38% powierzchni, przeważnie sosnowe.
 * REZERWAT LASKI — utworzony w 1977 r., 42,31 ha, chroni
 * gatunki liściaste, w tym dąb liczący blisko 200 lat.
 * Połączenie kolejowe od 1870 r.
 * ⚠ DANYCH ROLNICZYCH (3 944 ha gruntów ornych, 448
 *   gospodarstw, 82% zbóż) NIE PODAJĘ — źródło archiwalne
 *   bez daty stanu.
 *
 * REGION KOZŁA: gmina jest jedną z sześciu gmin członkowskich
 * stowarzyszenia zawiązanego w 1995 r.; nazwa od kozła,
 * instrumentu typu dudy, granego na tym terenie od średniowiecza.
 * ⚠⚠ CENTRUM IMPREZOWYM REGIONU JEST ZBĄSZYŃ w wielkopolskiem,
 *   NIE BABIMOST. Biesiady Koźlarskiej NIE PRZYPISUJĘ
 *   Babimostowi. ⚠ Region Kozła opisany już przy Zbąszynku
 *   — tu jedno zdanie.
 * ⚠ WINNIC CYSTERSKICH OD 1307 r. NIE PODAJĘ — jedno źródło,
 *   brak potwierdzenia.
 *
 * ⚠⚠ STOŁY WIELKANOCNE — impreza stricte kulinarna,
 * organizowana przez Urząd Miejski w ramach współpracy
 * transgranicznej; SIEDEM KÓŁ GOSPODYŃ WIEJSKICH przygotowuje
 * tradycyjne potrawy i prezentuje ozdobione stoły, jest
 * degustacja; uczestniczą też goście z Niemiec.
 * ⚠⚠ ŹRÓDŁO NIE WYMIENIA ANI JEDNEJ NAZWY POTRAWY
 *   — NIE WYMYŚLAM ŻADNEJ.
 * DNI BABIMOSTU — jeden dzień na lotnisku, drugi w mieście;
 * w niedzielę STOISKA GASTRONOMICZNE KÓŁ GOSPODYŃ WIEJSKICH.
 * ⚠ ŻADNEGO ZAKŁADU PRZETWÓRSTWA SPOŻYWCZEGO W GMINIE
 *   NIE ZNALEZIONO. ⚠ NAZW FIRM MEBLARSKICH NIE PODAJĘ.
 *
 * ZABYTKI: KOŚCIÓŁ ŚW. WAWRZYŃCA zbudowany 1734–1740,
 * fundator ADAM PONIŃSKI, kasztelan poznański i starosta
 * babimojski; późny barok, bazylika trójnawowa. Wcześniejszy
 * kościół drewniany wzmiankowany w 1334 r. Przebudowa
 * po pożarze w 1832 r.; restauracje w 1888, 1939 i 1963.
 * PÓŹNOGOTYCKI POLIPTYK Z 1499 r. Kościół jest sanktuarium
 * maryjnym. RATUSZ z połowy XIX w., klasycystyczny.
 * Zabudowa eklektyczna i secesyjna z XIX w.
 *
 * KĄT: JEDZENIE PRZED WYJAZDEM I PO POWROCIE.
 * Kąt od gminy, w której leży jedyne międzynarodowe lotnisko
 * województwa — czyli od miejsca, z którego się wyjeżdża
 * i do którego się wraca.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wyjazd ma w kuchni dwa końce i oba są zaniedbane:
 *   dzień przed i dzień po,
 * — PRZED WYJAZDEM: że lodówki nie da się „domknąć"
 *   idealnie i nie warto próbować — celem jest zużyć to,
 *   co się zepsuje, a nie wszystko,
 * — ŻE ZASADA JEST PROSTA: co miękkie i mokre — zjeść;
 *   co suche i zamknięte — zostawić,
 * — ŻE JEDNO DANIE Z RESZTEK NA DZIEŃ PRZED WYJAZDEM
 *   rozwiązuje problem lepiej niż planowanie tygodnia
 *   wstecz — zupa, placki, frittata, wszystko, co przyjmuje
 *   przypadkowy zestaw,
 * — ŻE TO, CZEGO NIE DA SIĘ ZJEŚĆ, LEPIEJ ZAMROZIĆ NIŻ
 *   WYRZUCIĆ, a chleb znosi to najlepiej ze wszystkiego,
 * — PO POWROCIE: że to jest moment, w którym ludzie zamawiają
 *   jedzenie, i nie ma w tym nic złego — ale da się
 *   przygotować lepiej,
 * — ŻE NAJLEPSZĄ RZECZĄ, JAKĄ MOŻNA ZROBIĆ DLA SIEBIE,
 *   JEST ZOSTAWIENIE SOBIE JEDNEGO DANIA W ZAMRAŻARCE
 *   PRZED WYJAZDEM — to jest prezent dla samego siebie
 *   sprzed dwóch tygodni,
 * — ŻE PIERWSZE ZAKUPY PO POWROCIE WARTO ZROBIĆ MAŁE:
 *   pieczywo, jajka, coś kwaśnego i jedno warzywo,
 * — ŻE PIERWSZY OBIAD PO POWROCIE POWINIEN BYĆ PROSTY
 *   I ZNAJOMY, a nie ambitny — po podróży nikt nie ma
 *   głowy do nowego przepisu,
 * — ŻE PO DŁUŻSZYM WYJEŹDZIE WARTO PRZEJRZEĆ SZAFKĘ
 *   Z PRZYPRAWAMI, bo to tam najczęściej coś cicho traci
 *   zapach,
 * — UCZCIWIE: urządzenie nie pilnuje niczego pod nieobecność
 *   i nie ma z wyjazdem nic wspólnego,
 * — ale jedna rzecz jest praktyczna: danie zrobione
 *   i zamrożone przed wyjazdem powstaje w jednym naczyniu
 *   i w tle — czyli dokładnie w dniu, w którym nikt nie ma
 *   ochoty gotować.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ZERO TEMATÓW BEZPIECZEŃSTWA ŻYWNOŚCI I ZDROWIA.
 *   ZERO „ile dni można trzymać", ZERO dat przydatności,
 *   ZERO bakterii i zatruć. Piszę o SMAKU, ORGANIZACJI
 *   I MARNOWANIU. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM, LINII LOTNICZYCH ANI KIERUNKÓW.
 * — ZERO tematów granicznych przy wątku lotniska.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czy zabrać na wakacje"
 * dotyczy przewożenia urządzenia. „Jedzenie zabrane w drogę"
 * dotyczy prowiantu na podróż. „Spiżarnia" dotyczy codziennego
 * gotowania z tego, co jest. „Marnowanie jedzenia" dotyczy
 * tego, co ląduje w koszu. „Lodówka" (Witnica) dotyczy stref
 * i rozmieszczenia produktów na co dzień. „Gotowanie na zapas
 * i odkładanie porcji do zamrażarki" dotyczy stałego nawyku.
 * „Przerwa w używaniu" dotyczy urządzenia. Tutaj chodzi
 * o DWA KONKRETNE DNI: przed wyjazdem i po powrocie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE DATUJĘ praw miejskich rokiem.
 * — NIE PODAJĘ liczby miejscowości.
 * — NIE PODAJĘ danych rolniczych ze źródła archiwalnego.
 * — NIE PRZYPISUJĘ Babimostowi Biesiady Koźlarskiej.
 * — NIE WYMYŚLAM nazw potraw babimojskich — źródła ich
 *   nie podają.
 * — NIE PISZĘ o winnicach cysterskich.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko cztery tysiące mieszkańców na 3,7 km²,
 *   cała gmina ponad sześć tysięcy na 92,8 km², z sześcioma
 *   sołectwami,
 * — pierwsza wzmianka o Babimoście pochodzi z dokumentu
 *   Przemysła II z 22 lutego 1257 r. i dotyczy jeszcze wsi;
 *   prawa miejskie miejscowość uzyskała na przełomie XIII
 *   i XIV wieku,
 * — w Nowem Kramsku, jednym z sołectw gminy, leży port
 *   lotniczy Zielona Góra-Babimost — jedyne międzynarodowe
 *   lotnisko w województwie lubuskim, oddalone o cztery
 *   kilometry od miasta i trzydzieści cztery od Zielonej Góry,
 *   zajmujące 450 ha; od 2011 r. ma bezpośrednie połączenie
 *   z Warszawą,
 * — miasto leżało historycznie na wyspie utworzonej przez
 *   Gniłą Obrę; część Jeziora Wojnowskiego leży w granicach
 *   gminy, a lasy — przeważnie sosnowe — zajmują trzydzieści
 *   osiem procent jej powierzchni; w 1977 r. utworzono rezerwat
 *   Laski o powierzchni ponad czterdziestu dwóch hektarów,
 *   chroniący drzewostany liściaste, w tym dąb liczący blisko
 *   dwieście lat. Kolej dotarła tu w 1870 r.,
 * — gmina należy do Regionu Kozła — stowarzyszenia sześciu
 *   gmin zawiązanego w 1995 r., którego nazwa pochodzi
 *   od kozła, instrumentu typu dudy granego tu od średniowiecza,
 * — Urząd Miejski organizuje Stoły Wielkanocne: siedem kół
 *   gospodyń wiejskich przygotowuje tradycyjne potrawy
 *   i prezentuje ozdobione stoły, jest degustacja, a udział
 *   biorą też goście z Niemiec; podczas Dni Babimostu, z których
 *   jeden dzień odbywa się na lotnisku, koła gospodyń prowadzą
 *   stoiska gastronomiczne,
 * — kościół świętego Wawrzyńca wzniesiono w latach 1734–1740
 *   z fundacji Adama Ponińskiego, kasztelana poznańskiego
 *   i starosty babimojskiego; wcześniejszy, drewniany
 *   wzmiankowano w 1334 r., a po pożarze z 1832 kościół
 *   przebudowano i restaurowano w 1888, 1939 i 1963 r.
 *   Zachował się w nim późnogotycki poliptyk z 1499 r.
 *   Klasycystyczny ratusz pochodzi z połowy XIX w., a wokół
 *   stoi zabudowa eklektyczna i secesyjna.
 */
export const BABIMOST: CityContent = {
  slug: "babimost",
  h1: "Thermomix Babimost – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Babimost — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Babimoście: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Babimost — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Babimoście. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Babimostu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Babimost i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Danie zamrożone przed wyjazdem to prezent dla siebie sprzed dwóch tygodni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Babimoście – jak wygląda prezentacja?",
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
      id: "wyjazd",
      heading: "Gmina z jedynym lotniskiem w województwie — czyli o kuchni przed wyjazdem i po powrocie",
      paragraphs: [
        "W Nowem Kramsku, jednym z sołectw gminy, leży port lotniczy Zielona Góra-Babimost — jedyne międzynarodowe lotnisko w województwie lubuskim, cztery kilometry od miasta i trzydzieści cztery od Zielonej Góry. To dobry pretekst, żeby napisać o czymś, o czym nie pisze nikt: o kuchni po obu stronach wyjazdu.",
        "Bo wyjazd ma w kuchni dwa końce i oba są zaniedbane. Dzień przed i dzień po. Cała uwaga idzie na walizki i bilety, a te dwa dni potrafią kosztować więcej wyrzuconego jedzenia niż cały pozostały miesiąc.",
        "Zacznijmy od dnia przed. Pierwsza rzecz, jaką warto sobie powiedzieć: lodówki nie da się domknąć idealnie i nie warto próbować. Celem nie jest zużycie wszystkiego, tylko zużycie tego, co się zepsuje.",
        "Zasada jest prosta jak drut: co miękkie i mokre — zjeść, co suche i zamknięte — zostawić. Warzywa, nabiał, otwarte rzeczy w lodówce idą na stół. Makaron, ryż, konserwy, mąka i przyprawy nie wymagają żadnej uwagi i mogą spokojnie poczekać.",
        "Najlepszym narzędziem jest jedno danie z resztek na dzień przed wyjazdem. Zupa, placki, frittata, zapiekanka — cokolwiek, co przyjmuje przypadkowy zestaw składników i nie pyta o proporcje. To rozwiązuje problem lepiej niż planowanie zakupów tydzień wstecz, którego i tak nikt nie robi.",
        "A to, czego nie da się zjeść, lepiej zamrozić niż wyrzucić. Chleb znosi mrożenie najlepiej ze wszystkiego i po powrocie jest dokładnie taki, jaki był — to jedna z najbardziej niedocenianych rzeczy w domowej kuchni.",
        "Teraz druga strona, czyli powrót. To jest moment, w którym prawie wszyscy zamawiają jedzenie, i nie widzę w tym nic złego — po dwunastu godzinach podróży nikt nie powinien stać przy garnku. Da się jednak przygotować lepiej.",
        "Najlepszą rzeczą, jaką można zrobić dla siebie, jest zostawienie sobie jednego dania w zamrażarce przed wyjazdem. To jest prezent od siebie sprzed dwóch tygodni i naprawdę nie ma nic lepszego niż wrócić do domu, w którym obiad już jest.",
        "Pierwsze zakupy po powrocie warto zrobić małe. Pieczywo, jajka, coś kwaśnego i jedno warzywo — tyle wystarczy na dwa dni. Wielkie zakupy zrobione zaraz po podróży kończą się zwykle drugą turą wyrzucania, bo kupuje się wtedy głodnym i bez planu.",
        "Pierwszy obiad po powrocie powinien być prosty i znajomy, nigdy ambitny. Nie jest to dobry moment na nowy przepis — jest to dobry moment na to jedno danie, które umiesz robić bez zastanowienia.",
        "I rzecz, o której się zapomina: po dłuższym wyjeździe warto przejrzeć szafkę z przyprawami. To tam najczęściej coś po cichu traci zapach, a że nic nie wygląda na zepsute, człowiek przez pół roku przyprawia dania czymś, co już nic nie daje.",
        "Teraz uczciwie o sprzęcie. Thermomix nie pilnuje niczego pod Twoją nieobecność i z wyjazdem nie ma nic wspólnego — to nie jest urządzenie, które cokolwiek tu zmienia.",
        "Jedna rzecz jest jednak praktyczna. Danie robione i mrożone przed wyjazdem powstaje w jednym naczyniu i w tle, gdy Ty pakujesz walizki — a to jest dokładnie ten dzień, w którym nikt nie ma ochoty gotować, a właśnie wtedy warto.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Babimoście?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy często wyjeżdżacie. Wtedy pokażę dania, które dobrze znoszą mrożenie i odgrzewanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Babimoście"),
    sekcjaRaty("w Babimoście"),
    {
      id: "rodzina",
      heading: "Thermomix dla babimojskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców na niecałych czterech kilometrach kwadratowych, a cała gmina ponad sześć tysięcy na dziewięćdziesięciu trzech, z sześcioma sołectwami. Pierwsza wzmianka o Babimoście pochodzi z dokumentu Przemysła II z 22 lutego 1257 roku i dotyczy jeszcze wsi; prawa miejskie miejscowość uzyskała na przełomie XIII i XIV wieku. W Nowem Kramsku, jednym z sołectw gminy, leży port lotniczy Zielona Góra-Babimost — jedyne międzynarodowe lotnisko w województwie, cztery kilometry od miasta, zajmujące czterysta pięćdziesiąt hektarów; od 2011 roku ma bezpośrednie połączenie z Warszawą. Miasto leżało historycznie na wyspie utworzonej przez Gniłą Obrę; część Jeziora Wojnowskiego mieści się w granicach gminy, a lasy — przeważnie sosnowe — zajmują trzydzieści osiem procent jej powierzchni. W 1977 roku utworzono rezerwat Laski o powierzchni ponad czterdziestu dwóch hektarów, chroniący drzewostany liściaste, w tym dąb liczący blisko dwieście lat; kolej dotarła tu w 1870. Gmina należy do Regionu Kozła — stowarzyszenia sześciu gmin zawiązanego w 1995 roku, którego nazwa pochodzi od kozła, instrumentu typu dudy granego tu od średniowiecza. Urząd Miejski organizuje Stoły Wielkanocne, na których siedem kół gospodyń wiejskich prezentuje tradycyjne potrawy i ozdobione stoły, a podczas Dni Babimostu — z jednym dniem na lotnisku — koła prowadzą stoiska gastronomiczne. Kościół świętego Wawrzyńca wzniesiono w latach 1734–1740 z fundacji Adama Ponińskiego, kasztelana poznańskiego i starosty babimojskiego; wcześniejszy, drewniany wzmiankowano w 1334 roku, a w kościele zachował się późnogotycki poliptyk z 1499. Klasycystyczny ratusz pochodzi z połowy XIX wieku.",
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

  districtsHeading: "Do których części gminy Babimost dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sześciu sołectw, w tym do Nowego i Starego Kramska oraz Podmokli. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Babimost też przyjadę",
  nearbyParagraphs: [
    "Kargowa, Zbąszynek, Sulechów, Zbąszyń i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kargowa", "Zbąszynek", "Sulechów", "Zbąszyń"],

  about: blokOMnie("do Babimostu", "w Babimoście i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Babimostu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sześciu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Babimojszczyzna to nazwa regionu, a nie jednostki administracyjnej — przyjeżdżam do gminy Babimost i okolic.",
    },
    ...faqWspolne("w Babimoście"),
    {
      question: "Co zrobić z jedzeniem przed wyjazdem?",
      answer:
        "Nie próbować domknąć lodówki idealnie. Celem jest zużyć to, co się zepsuje, a nie wszystko: co miękkie i mokre — zjeść, co suche i zamknięte — zostawić. Najlepiej działa jedno danie z resztek na dzień przed wyjazdem, a to, czego nie da się zjeść, lepiej zamrozić niż wyrzucić.",
    },
    {
      question: "Jak przygotować się na powrót?",
      answer:
        "Zostawiając sobie jedno danie w zamrażarce przed wyjazdem — to prezent od siebie sprzed dwóch tygodni. Pierwsze zakupy po powrocie warto zrobić małe: pieczywo, jajka, coś kwaśnego i jedno warzywo. A pierwszy obiad powinien być prosty i znajomy, nigdy ambitny.",
    },
    {
      question: "Czy chleb można mrozić?",
      answer:
        "Tak i znosi to najlepiej ze wszystkiego — po rozmrożeniu jest praktycznie taki sam. To jedna z najbardziej niedocenianych rzeczy w domowej kuchni, zwłaszcza przed wyjazdem.",
    },
  ],

  geo: { lat: 52.1683, lng: 15.8256 },
};
