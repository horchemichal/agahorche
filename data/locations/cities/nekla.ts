import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * NEKLA — powiat wrzesiński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NEKLA NIE MA.
 * MIASTO: 3 856 mieszkańców (GUS 31.12.2024), 19,8 km²,
 *   gęstość 194,8 os./km².
 *   ⚠ [ZW — 3 856 / 19,8 = 194,7 wobec 194,8. Różnica
 *   0,1. PODAJĘ OBIE LICZBY.]
 *   ⚠⚠ NAJWIĘKSZE OBSZAROWO I NAJRZADZIEJ ZALUDNIONE
 *   MIASTO TEJ FALI. MOGĘ POWIEDZIEĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 7 969 osób, 95,9 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 82,
 *   iloraz daje 83,1. ROZBIEŻNOŚĆ 1,1. NIE PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ LESISTOŚĆ: 26,9% — NAJWYŻSZA W TEJ FALI.
 *   PODAJĘ.
 * SOŁECTWA: 15 SOŁECTW i 18 MIEJSCOWOŚCI —
 *   POTWIERDZONE DWOMA ŹRÓDŁAMI (GUS Vademecum
 *   i BIP gminy). PODAJĘ OBIE LICZBY.
 *   ⚠⚠ TEJ PARY NIE ROBIĘ KĄTEM — figura „prawie
 *   każda miejscowość ma swój głos" ZAJĘTA (Gołańcz,
 *   ta sama fala). PODAJĘ LICZBY I NIC Z NICH
 *   NIE WYCIĄGAM.
 *   MIEJSCOWOŚCI: Barczyzna, Chwałszyce, Gąsiorowo,
 *   Gierłatowo, Kokoszki, Mała Górka, Milkarowo,
 *   Mystki, Nekielka, Opatówko, Podstolice, Racławki,
 *   Starczanowo, Stępocin, Stroszki, Targowa Górka,
 *   Zasutowo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠ NEKIELKA: 485 mieszkańców (NSP 2021), ok. 4,6 km
 *   od miasta. PODAJĘ.
 * ⚠ GEO: 52,3649 / 17,4133 (miasto; punkt gminy
 *   praktycznie identyczny). Nekielka: 52,3969 /
 *   17,3711 — NIE MYLIĆ.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ ŻEŃSKI, DOPEŁNIACZ
 *   I MIEJSCOWNIK BRZMIĄ TAK SAMO:
 *   M. NEKLA · D. NEKLI · Ms. w NEKLI ·
 *   N. Neklą · C. Nekli.
 *   ⚠ POTWIERDZENIA: „Nekla ODZYSKAŁA prawa miejskie",
 *   „do Nekli", „na Rynku w Nekli", „w samej Nekli".
 *   Przymiotnik: NEKIELSKI — potwierdzony
 *   („Nekielski Ośrodek Kultury", „Nekielski Bieg
 *   do Lata").
 *   ⚠⚠⚠ BŁĄD 1: „Nekly" albo „w Nekle".
 *   ⚠⚠⚠ BŁĄD 2: przymiotnik „neklański" albo „neklski"
 *   — poprawnie NEKIELSKI, z „-iel-" w środku,
 *   jak w nazwie NEKIELKA.
 *   ⚠⚠⚠ TO WŁAŚNIE ŹRÓDŁO POMYŁKI: przymiotnik brzmi
 *   bliżej „Nekielki" niż „Nekli". WSPOMINAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ NEKIELKA — odrębna wieś w tej samej gminie,
 *     ok. 4,6 km od miasta, 485 mieszkańców.
 *     WSPOMINAM OBOWIĄZKOWO.
 *   — MAŁA GÓRKA / TARGOWA GÓRKA — para nazw
 *     ze wspólnym członem.
 *   — Innych Nekli w Polsce NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SZEŚĆ LAT STARAŃ O JEDNĄ ZMIANĘ:
 *   NEKLA BYŁA MIASTEM W LATACH 1725–1793, czyli
 *   68 LAT. ⚠⚠ DATA 1725 POCHODZI Z JEDNEGO ŹRÓDŁA
 *   LOKALNEGO — MÓWIĘ TO W TEKŚCIE.
 *   POTEM NIE BYŁA MIASTEM PRZEZ 207 LAT.
 *   PRAWA WRÓCIŁY 1 STYCZNIA 2000 R.
 *   DROGA DO TEGO:
 *     STARANIA OD 1994 R.
 *     REFERENDUM 21 WRZEŚNIA 1997 R.
 *     FREKWENCJA: 51,8% w gminie, PONAD 65%
 *       w samej Nekli.
 *     JEDNO SOŁECTWO — TARGOWA GÓRKA — BYŁO PRZECIW.
 *     ZMIANA WESZŁA W ŻYCIE 1 STYCZNIA 2000 R.
 *   CZYLI: SZEŚĆ LAT OD PIERWSZYCH STARAŃ
 *   DO SKUTKU — przy zmianie, która na papierze jest
 *   jednym zdaniem.
 *   ⚠⚠⚠ REFERENDUM OPISUJĘ WYŁĄCZNIE JAKO PROCEDURĘ
 *   SAMORZĄDOWĄ. ANI SŁOWA O WYBORACH, PARTIACH
 *   I POLITYCE KRAJOWEJ — data referendum zbiegła się
 *   z wyborami, ALE TEGO NIE WYMIENIAM.
 *   ⚠⚠ „TARGOWA GÓRKA" TO NAZWA WŁASNA — nie robię
 *   z jej członu „targowa" żadnej figury (kąt
 *   „obietnica w nazwie" zajęty — Międzychód).
 *   ⚠⚠⚠ NIE OCENIAM SOŁECTWA, KTÓRE BYŁO PRZECIW.
 *   Podaję to jako fakt o tym, że zgoda nie była pełna.
 *
 * KĄT: SZEŚĆ LAT STARAŃ O JEDNĄ ZMIANĘ
 * — o tym, ile naprawdę trwa jedna zmiana i że to nie
 * jest dowód, że się nie uda. Kąt z Nekli: starania
 * od 1994 r., referendum w 1997, prawa miejskie
 * od 1 stycznia 2000.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Nekla była miastem przez 68 lat, potem nie była
 *   nim przez 207, a prawa wróciły 1 stycznia 2000 r.,
 * — że droga do tego zajęła sześć lat: starania
 *   od 1994, referendum 21 września 1997 przy
 *   frekwencji 51,8% w gminie i ponad 65% w samej
 *   Nekli, skutek od 2000. TO JEST RDZEŃ,
 * — że jedno sołectwo było przeciw i zmiana i tak
 *   weszła,
 * — ⚠⚠ że datę 1725 mam z jednego źródła,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: zmiana jednego
 *   nawyku domowego trwa miesiącami, a nie tydzień,
 * — ⚠⚠ ŻE PO TYGODNIU UZNAJEMY, ŻE „NIE WYSZŁO",
 *   CHOCIAŻ TO DOPIERO POCZĄTEK,
 * — ⚠⚠ ŻE PEŁNA ZGODA DOMOWNIKÓW NIE JEST WARUNKIEM
 *   — wystarczy większość i konsekwencja,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: dajcie zmianie kwartał,
 *   nie tydzień, i nie oceniajcie jej wcześniej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest zachęta
 *   do ciągnięcia w nieskończoność czegoś, co nie
 *   działa. Różnica: zmiana, która idzie wolno,
 *   ma widoczne małe skutki; zmiana, która nie działa,
 *   nie ma żadnych,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie skraca tego
 *   czasu. Zakup jest jednym dniem, a zmiana nawyku
 *   trwa dalej tyle, ile trwa. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NADANEGO DWA RAZY — kąt zajęty (Wyrzysk).
 *   ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tam rdzeniem był SAM FAKT dwukrotnego
 *   nadania; TU rdzeniem jest DŁUGOŚĆ DROGI do jednej
 *   zmiany. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU —
 *   kąt zajęty (Trzcianka). DLATEGO 207 LAT PODAJĘ
 *   JAKO TŁO, A NIE JAKO FIGURĘ.
 * — ⚠⚠⚠ ZERO PRZERW, KTÓRE ROSNĄ — kąt zajęty
 *   (Węgliniec).
 * — ⚠⚠⚠ ZERO ROCZNICY LICZONEJ OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów).
 * — ⚠⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz, ta sama fala). DLATEGO PARY
 *   15/18 NIE ROZWIJAM, a o sołectwie przeciwnym piszę
 *   jako o fakcie, nie jako o figurze decyzyjnej.
 * — ⚠⚠ ZERO NAZWY NADANEJ, KTÓRA PRZEGRAŁA Z UŻYWANĄ
 *   — kąt zajęty (Sompolno, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O ZMIANIE NAWYKÓW ŻYWIENIOWYCH JAKO
 *   DIECIE, O ODCHUDZANIU I O SILNEJ WOLI JAKO CESZE
 *   CHARAKTERU.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO TONU MOTYWACYJNEGO. Sekcja podaje
 *   realny czas, nie zachęca do wytrwałości.
 * — ⚠⚠⚠ ZERO POLITYKI KRAJOWEJ, PARTII I WYBORÓW.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO (rok 1793 PODAJĘ BEZ KONTEKSTU
 *   POLITYCZNEGO) · ZERO WĄTKU WYZNANIOWEGO · ZERO
 *   WĄTKU MILITARNEGO · ZERO POSTACI POLITYCZNYCH ·
 *   ZERO ALKOHOLU · ZERO POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ przyczyny utraty praw w 1793 r.
 * — NIE OPISUJĘ kontekstu politycznego referendum.
 * — NIE OCENIAM sołectwa, które było przeciw.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że data 1725 jest pewna.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nekla leży w powiecie wrzesińskim i liczy 3 856
 *   mieszkańców (GUS, 31.12.2024) na 19,8 km², czyli
 *   194,8 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 7 969 osób
 *   na 95,9 km² i obejmuje 15 sołectw oraz 18
 *   miejscowości; lasy zajmują 26,9% jej terenu,
 * — Nekla była miastem w latach 1725–1793 — tę
 *   pierwszą datę podaje jedno źródło lokalne —
 *   a potem nie była nim przez 207 lat,
 * — starania o przywrócenie praw miejskich trwały
 *   od 1994 r.; referendum odbyło się 21 września
 *   1997 r. przy frekwencji 51,8% w gminie i ponad 65%
 *   w samej Nekli; jedno sołectwo, Targowa Górka, było
 *   przeciw, a prawa miejskie wróciły 1 stycznia
 *   2000 r.,
 * — nazwa jest rodzaju żeńskiego, dopełniacz
 *   i miejscownik brzmią tak samo — „do Nekli",
 *   „w Nekli" — a przymiotnik to „nekielski",
 * — w gminie leży odrębna wieś Nekielka, około 4,6 km
 *   od miasta, licząca 485 mieszkańców (NSP 2021),
 * — w gminie leżą też m.in. Targowa Górka, Mała Górka,
 *   Zasutowo, Gierłatowo, Opatówko, Podstolice,
 *   Stroszki, Barczyzna i Starczanowo.
 */
export const NEKLA: CityContent = {
  slug: "nekla",
  h1: "Thermomix Nekla – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nekla — cena i prezentacja",
  seoDescription:
    "Thermomix w Nekli w powiecie wrzesińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nekla — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nekli. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nekli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich piętnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Nekla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Od pierwszych starań do skutku minęło sześć lat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nekli – jak wygląda prezentacja?",
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
      id: "szesc-lat",
      heading: "Sześć lat starań o jedną zmianę",
      paragraphs: [
        "Nekla była miastem w latach 1725–1793 — tę pierwszą datę podaje jedno źródło lokalne, więc traktuję ją ostrożnie. Potem nie była miastem przez dwieście siedem lat.",
        "Prawa miejskie wróciły 1 stycznia 2000 roku. I to jest jedno zdanie, które łatwo przeczytać w dwie sekundy. Droga do niego wyglądała tak: starania zaczęto w 1994 roku. Referendum odbyło się 21 września 1997 — frekwencja wyniosła pięćdziesiąt jeden i osiem dziesiątych procent w całej gminie, a w samej Nekli ponad sześćdziesiąt pięć. Zmiana weszła w życie dopiero z początkiem 2000 roku.",
        "Sześć lat. Na jedną zmianę, która na papierze jest jednym zdaniem. I jeszcze jedno: jedno sołectwo w gminie było zdecydowanie przeciw, a zmiana i tak weszła.",
        "Piszę o tym, bo w kuchni oceniamy własne zmiany po tygodniu — i prawie zawsze wychodzi nam, że się nie udało.",
        "„Próbowałam gotować na zapas, ale to nie dla mnie.” Po dwóch tygodniach. „Chcieliśmy jeść razem o jednej porze, nie wyszło.” Po dziesięciu dniach. „Miałam robić listę zakupów, ale przestałam.” Po trzech razach. Zmiana jednego domowego nawyku to sprawa na miesiące, a nie na tydzień, i to nie dlatego, że ktoś jest niekonsekwentny — tylko dlatego, że nawyk domowy dotyczy kilku osób naraz i każda z nich musi się do niego dopasować we własnym tempie.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, któremu prawa miejskie nadano dwa razy. Tam rdzeniem był sam fakt powtórzenia. Tu chodzi o coś innego — o to, jak długa jest droga do jednej zmiany, nawet gdy wszyscy wiedzą, czego chcą.",
        "Drugie zdanie z tej historii jest równie ważne: pełna zgoda nie jest warunkiem. Jedno sołectwo było przeciw i nic to nie zmieniło. W domu bywa podobnie — nie trzeba czekać, aż wszyscy się ucieszą, wystarczy większość i konsekwencja.",
        "Ruch jest jeden i polega na przesunięciu terminu oceny. Dajcie zmianie kwartał, nie tydzień, i nie oceniajcie jej wcześniej. Trzy miesiące to uczciwy czas na to, żeby nowy układ w domu miał prawo się przyjąć albo nie.",
        "Uczciwie o drugiej stronie, bo to nie jest zachęta do ciągnięcia w nieskończoność czegoś, co nie działa. Różnica jest widoczna i prosta: zmiana, która idzie wolno, ma małe, ale realne skutki — raz w tygodniu wychodzi, ktoś sam sięga po to, co przygotowane, robi się o kwadrans mniej wieczornego chaosu. Zmiana, która po prostu nie działa, nie ma żadnych skutków, tylko coraz większe poczucie winy. Tę drugą trzeba porzucić i to też jest dobra decyzja.",
        "I uczciwie o sprzęcie. Thermomix nie skraca tego czasu i nie zamierzam twierdzić inaczej. Zakup jest jednym dniem; zmiana nawyku trwa dalej tyle, ile trwa. Urządzenie ułatwia jedną rzecz — nie trzeba stać przy garnku — a to bywa dokładnie tą przeszkodą, o którą rozbijały się poprzednie próby. Ale samo nie przyśpieszy niczego.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nekli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co próbowaliście już zmienić w kuchni i po jakim czasie odpuściliście. To najbardziej przydatna informacja, jaką mogę dostać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nekli"),
    sekcjaRaty("w Nekli"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nekli",
      paragraphs: [
        "Nekla leży w powiecie wrzesińskim i liczy 3 856 mieszkańców (GUS, 31.12.2024) na 19,8 kilometra kwadratowego, czyli stu dziewięćdziesięciu pięciu na kilometr — to największe obszarowo i najrzadziej zaludnione miasto, o jakim pisałam w tej okolicy, a obie liczby zgadzają się z ilorazem, więc podaję je bez zastrzeżeń. Cała gmina miejsko-wiejska to 7 969 osób na 95,9 kilometra kwadratowego i obejmuje piętnaście sołectw oraz osiemnaście miejscowości; gęstości dla gminy nie podaję, bo liczba ze źródła nie domyka się z ilorazem. Lasy zajmują niemal dwadzieścia siedem procent jej terenu — najwięcej w okolicy. Nekla była miastem w latach 1725–1793, a prawa miejskie odzyskała 1 stycznia 2000 roku. W gminie leży odrębna wieś Nekielka, około czterech i pół kilometra od miasta, licząca czterystu osiemdziesięciu pięciu mieszkańców, a także między innymi Targowa Górka, Mała Górka, Zasutowo, Gierłatowo, Opatówko i Podstolice.",
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

  districtsHeading: "Do których części Nekli dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich piętnastu sołectw w gminie: Nekielki, Targowej Górki, Małej Górki, Zasutowa, Gierłatowa, Opatówka, Podstolic, Stroszek, Barczyzny, Starczanowa, Mystek, Kokoszek, Chwałszyc, Gąsiorowa i Racławek. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: Nekla jest rodzaju żeńskiego, a dopełniacz i miejscownik brzmią tak samo — „do Nekli” i „w Nekli”, nigdy „do Nekly” ani „w Nekle”. Przymiotnik to „nekielski”, z „-iel-” w środku, i właśnie stąd bierze się najczęstsza pomyłka: brzmi bliżej nazwy Nekielka niż nazwy miasta. I praktyczna: Nekielka to odrębna wieś w tej samej gminie, około czterech i pół kilometra od Nekli, więc przy umawianiu warto powiedzieć, o którą chodzi.",
  ],
  districts: [],

  nearbyHeading: "Poza Neklę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wrześni, Miłosławia, Kostrzyna, Pobiedzisk, Środy Wielkopolskiej i Swarzędza — wszędzie bezpłatnie, tak samo jak w samej Nekli.",
  ],
  nearbyTowns: ["Września", "Miłosław", "Kostrzyn", "Pobiedziska", "Środa Wielkopolska", "Swarzędz"],

  about: blokOMnie("do Nekli", "w Nekli i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nekli bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich piętnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa jest rodzaju żeńskiego, a dopełniacz i miejscownik brzmią identycznie — „do Nekli” i „w Nekli”, a nie „do Nekly” ani „w Nekle”; przymiotnik to „nekielski”, nie „neklański”. I praktyczna: w tej samej gminie leży odrębna wieś Nekielka, około czterech i pół kilometra od miasta — a ponieważ przymiotnik od Nekli brzmi bliżej „Nekielki” niż samej Nekli, łatwo o pomyłkę.",
    },
    ...faqWspolne("w Nekli"),
    {
      question: "Ile czasu trzeba dać nowemu nawykowi w kuchni, zanim uznam, że nie działa?",
      answer:
        "Znacznie więcej niż tydzień — i Nekla daje tu dobrą miarę. Miasto odzyskało prawa miejskie 1 stycznia 2000 roku, a droga do tej jednej zmiany zajęła sześć lat: starania od 1994, referendum 21 września 1997 przy frekwencji pięćdziesięciu jeden i ośmiu dziesiątych procent w gminie i ponad sześćdziesięciu pięciu w samej Nekli. Jedno sołectwo było przeciw i zmiana i tak weszła. W domu jest podobnie: nawyk dotyczy kilku osób naraz i każda dopasowuje się we własnym tempie, a pełna zgoda nie jest warunkiem. Dajcie zmianie kwartał i nie oceniajcie jej wcześniej. Z jednym rozróżnieniem: zmiana, która idzie wolno, ma małe, ale widoczne skutki; ta, która nie działa, nie ma żadnych — i wtedy warto ją porzucić.",
    },
    {
      question: "Czy po zakupie od razu wszystko się zmieni?",
      answer:
        "Nie, i lepiej to wiedzieć od razu. Zakup jest jednym dniem, a zmiana sposobu gotowania w domu trwa tyle, ile trwa — zwykle kilka tygodni do kilku miesięcy, zanim nowy układ się ułoży. Urządzenie ułatwia jedną konkretną rzecz: nie trzeba stać przy garnku i pilnować, bo temperaturę i mieszanie prowadzi samo. Jeśli to była przeszkoda, o którą rozbijały się poprzednie próby, ma szansę zadziałać. Ale samo z siebie niczego nie przyśpieszy i nie zrobi za Was pierwszych kilku tygodni.",
    },
  ],

  geo: { lat: 52.3649, lng: 17.4133 },
};
