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
 * MYŚLIBÓRZ — powiat myśliborski,
 * woj. zachodniopomorskie, Pojezierze Myśliborskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ, siedziba powiatu.
 * MIASTO: 10 328 mieszkańców (GUS 31.12.2024), 15,0 km²,
 * gęstość 686,7 os./km².
 * CAŁA GMINA: 18 474 osoby, 328,8 km²,
 * 75 WSI I OSAD — jedna z najwyższych liczb w serwisie.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 52,9237 / 14,8679.
 * ⚠ en.wikipedia podaje 11 867 za 2006 r. — różnica
 *   wynika z DATY (18 lat), nie z metody.
 *
 * ⚠ ODMIANA: D. MYŚLIBORZA, przym. MYŚLIBORSKI —
 *   potwierdzone w PWN. Ms. W MYŚLIBORZU wynika
 *   z reguł odmiany, ⚠ nie jest wprost zacytowany w haśle.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠⚠ PUŁAPKA WEWNĘTRZNA: w tej samej gminie leżą wsie
 *   MYŚLIBÓRZ WIELKI i MYŚLIBÓRZ MAŁY — nie mylić
 *   z miastem.
 * ⚠⚠ HISTORYCZNEJ NAZWY NIEMIECKIEJ NIE UŻYWAM WCALE,
 *   nawet w kontekście historycznym.
 *
 * ⚠⚠⚠ DATA LOKACJI — TRZY RÓŻNE WERSJE, NIEROZSTRZYGNIĘTE:
 *   muzeum podaje okres 1262–1270, en.wikipedia rok 1253,
 *   a polskawliczbach rok 1270.
 *   ⚠⚠ W TREŚCI PISZĘ WYŁĄCZNIE „W DRUGIEJ POŁOWIE
 *   XIII WIEKU". NIE WYBIERAM ŻADNEJ Z TRZECH DAT.
 *   TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1238 — pierwsza wzmianka o Myśliborzu.
 *   ⚠ NADANIA TERENÓW ZAKONOWI NIE UŻYWAM — wyznaniowe.
 * — 1317 — przywilej margrabiego Waldemara: Myślibórz
 *   staje się wyższą instancją sądową DLA SIEDMIU
 *   GŁÓWNYCH MIAST regionu.
 * — do 1335 — w mieście działa mennica.
 * — 1352 — przywilej przymusu drogowego.
 * — 1511 — statut Joachima I: RADA MIEJSKA TO CZTERECH
 *   BURMISTRZÓW I OŚMIU RAJCÓW.
 * — ⚠⚠⚠ RDZEŃ KĄTA: 1539 — WIELKI POŻAR MIASTA.
 *   ODBUDOWANO JE WEDŁUG NOWEGO PLANU, a nie przez
 *   odtworzenie dawnego układu. To była świadoma decyzja
 *   urbanistyczna, nie konieczność.
 * — 1848 — pierwsza droga bita do Kostrzyna.
 * — 1880–1882 — linia kolejowa Stargard–Myślibórz
 *   –Kostrzyn.
 * — przemysł: mleczarnia, fabryka łańcuchów, elektrownia,
 *   wodociągi, młyn elektryczny.
 *   ⚠ FILII BROWARÓW NIE WYMIENIAM.
 *
 * MURY MIEJSKIE — DANE UŻYTE:
 * — obwód ok. 1900 m, zachowane ok. 300 m,
 * — baszty łupinowe co 24–30 metrów, trzykondygnacyjne,
 *   czworoboczne. ⚠⚠ NIEREGULARNEGO ROZSTAWU NIE ROBIĘ
 *   KĄTEM — „odstęp" zajęty (Kowalewo Pomorskie),
 *   a nieregularność czatowni opisano już przy Choszcznie
 *   (ta sama fala). Podaję liczby bez morału,
 * — TRZY BASZTY CYLINDRYCZNE, ZACHOWANA JEDNA
 *   (Baszta Prochowa),
 * — trzy główne bramy, wał ziemny i podwójna fosa;
 *   miasto chronione jeziorem od zachodu.
 *
 * ⚠⚠ JEZIORO MYŚLIBORSKIE: PARAMETRÓW NIE POTWIERDZONO.
 *   NIE PODAJĘ ŻADNEJ LICZBY — wymieniam opisowo.
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: GDZIE CO STOI — układ kuchni i to, że „zawsze tak
 * stało" nie jest powodem.
 * Kąt od 1539 r.: po wielkim pożarze Myślibórz odbudowano
 * według nowego planu, a nie przez odtworzenie dawnego
 * układu ulic. Ktoś uznał, że skoro i tak trzeba budować,
 * to nie ma obowiązku budować tak samo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że po pożarze w 1539 r. miasto odbudowano według
 *   nowego planu, nie odtwarzając dawnego układu,
 * — ŻE UKŁAD KUCHNI W WIĘKSZOŚCI DOMÓW NIE ZOSTAŁ
 *   ZAPROJEKTOWANY, TYLKO SIĘ ZASTAŁ — to jest rdzeń.
 *   Rzeczy stoją tam, gdzie je postawiono pierwszego dnia
 *   po przeprowadzce albo gdzie akurat było miejsce,
 * — ⚠⚠ ŻE JEST NA TO PROSTY TEST, BEZ ŻADNEJ TABELKI:
 *   przez trzy dni zauważać wyłącznie momenty, w których
 *   trzeba się po coś SCHYLIĆ, SIĘGNĄĆ WYSOKO albo
 *   PRZEJŚĆ PRZEZ KUCHNIĘ. To są jedyne trzy sygnały,
 *   których trzeba szukać,
 * — ⚠⚠ ŻE ZASADA PORZĄDKOWANIA JEST JEDNA I BRZMI:
 *   BLISKO TEGO, GDZIE SIĘ TEGO UŻYWA — nie tam, gdzie
 *   pasuje rozmiarem i nie tam, gdzie „jest miejsce
 *   na garnki",
 * — ⚠⚠ ŻE TO SIĘ ROBI PO JEDNEJ PÓŁCE, NIE W JEDEN
 *   WEEKEND. Przestawienie całej kuchni naraz kończy się
 *   tym, że przez miesiąc nikt nie wie, gdzie co jest,
 *   i wszystko wraca na stare miejsca,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CZĘŚĆ UKŁADU JEST
 *   NARZUCONA I NIE DA SIĘ JEJ ZMIENIĆ. Zlew i kuchenka
 *   stoją tam, gdzie doprowadzono instalacje. Wtedy
 *   przestawia się to, co da się przestawić, i tyle,
 * — ⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE ZAJMUJE MIEJSCE
 *   NA BLACIE I TO JEST JEGO REALNY KOSZT. Mówię o tym
 *   wprost przed zakupem. Warto wskazać mu miejsce
 *   PRZED, a nie po — takie, gdzie jest gniazdko i gdzie
 *   nie trzeba go co chwila przestawiać, bo sprzęt
 *   chowany do szafki bywa sprzętem nieużywanym.
 *   ⚠⚠ TO JEDNO ZDANIE — rzeczy nieużywane to kąt
 *   zajęty (Nowogard, ta sama fala). NIE ROZWIJAM.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO WYSOKOŚCI BLATU — kąt zajęty (Piotrków
 *   Kujawski). Piszę o TYM, GDZIE COŚ STOI, nigdy o TYM,
 *   NA JAKIEJ WYSOKOŚCI SIĘ PRACUJE.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO MAŁEJ KUCHNI I BRAKU MIEJSCA NA BLACIE —
 *   kąt zajęty (Zawichost). Tam chodzi o CIASNOTĘ;
 *   TUTAJ o UKŁAD, niezależnie od metrażu.
 * — ⚠⚠ ZERO KUCHNI NA WYMIAR — kąt zajęty (Dobrodzień).
 *   Nie piszę o meblach ani o zabudowie.
 * — ⚠⚠ ZERO PRZECHOWYWANIA I SUCHEGO ZAPASU — kąt zajęty
 *   (Dobiegniew), ZERO PROPORCJI ZAPASU — kąt zajęty
 *   (Górzno). Piszę o MIEJSCU, nigdy o TYM, CO I JAK
 *   DŁUGO TRZYMAĆ.
 * — ⚠⚠ ZERO RZECZY NIEUŻYWANYCH — kąt zajęty (Nowogard,
 *   ta sama fala). Jedno zdanie przy sprzęcie i koniec.
 * — ⚠ ZERO ŚWIATŁA PRZY BLACIE — kąt zajęty (Zbąszynek).
 * — ⚠ ZERO ODSTĘPU MIĘDZY — kąt zajęty (Kowalewo
 *   Pomorskie).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH WYMIARÓW MEBLI I ODLEGŁOŚCI W CENTYMETRACH.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ przy schylaniu
 *   się i sięganiu wysoko to realne ryzyko. Piszę
 *   o WYGODZIE I LICZBIE RUCHÓW, nigdy o kręgosłupie,
 *   plecach ani o czymkolwiek zdrowotnym.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO STYCZNIA I LUTEGO 1945 R. Źródła podają
 *   przy tej dacie egzekucję cywilów. NIE WSPOMINAM
 *   ANI DATY, ANI ZDARZENIA. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO KATASTROFY LOTNICZEJ Z 17 LIPCA 1933 R.
 *   pod miastem — zginęły w niej dwie osoby. To jest
 *   ważne miejsce pamięci, ale nie jest to materiał
 *   na stronę o gotowaniu. NIE WSPOMINAM.
 * — ⚠⚠ ZERO SPALENIA MIASTA W 1433 R. — wątek przemocy.
 * — ⚠⚠ ZERO BILANSU POŻARU Z 1655 R. (dziewięćdziesiąt
 *   domów i siedemnaście stodół) — to opis strat.
 *   Z pożarów używam WYŁĄCZNIE roku 1539 i wyłącznie
 *   po to, żeby powiedzieć, że odbudowano według nowego
 *   planu.
 * — ⚠⚠ ZERO OSIEDLENIA ZAKONÓW I FUNDACJI KOŚCIELNYCH —
 *   wątki wyznaniowe.
 * — ⚠⚠ ZERO NAZWY NIEMIECKIEJ MIASTA.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI I JEGO PRZYCZYN.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — ⚠⚠ NIE PODAJĘ DATY LOKACJI — trzy źródła, trzy daty.
 * — NIE PODAJĘ parametrów Jeziora Myśliborskiego.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PRZYPISUJĘ Myśliborzowi produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE PISZĘ ANI SŁOWA O ZDROWIU PRZY SCHYLANIU SIĘ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Myślibórz leży na Pojezierzu Myśliborskim, jest
 *   siedzibą powiatu i miastem w gminie miejsko-wiejskiej;
 *   liczy 10 328 mieszkańców (GUS, 31.12.2024) na 15 km²,
 *   a cała gmina 18 474 osoby na 328,8 km², obejmując
 *   75 wsi i osad,
 * — pierwsza wzmianka o mieście pochodzi z 1238 r.,
 *   a lokacja z drugiej połowy XIII wieku,
 * — w 1317 r. margrabia Waldemar uczynił Myślibórz wyższą
 *   instancją sądową dla siedmiu głównych miast regionu;
 *   do 1335 r. działała tu mennica, a w 1352 miasto
 *   dostało przywilej przymusu drogowego,
 * — statut Joachima I z 1511 r. ustalił skład rady
 *   miejskiej na czterech burmistrzów i ośmiu rajców,
 * — mury miejskie miały około 1900 m obwodu, z czego
 *   zachowało się około 300 m; baszty łupinowe
 *   rozmieszczono co 24 do 30 metrów, a z trzech baszt
 *   cylindrycznych została jedna — Baszta Prochowa;
 *   miasto miało trzy główne bramy, wał ziemny i podwójną
 *   fosę, a od zachodu chroniło je jezioro,
 * — po pożarze w 1539 r. miasto odbudowano według nowego
 *   planu, nie odtwarzając dawnego układu,
 * — pierwsza droga bita do Kostrzyna powstała w 1848 r.,
 *   a linia kolejowa Stargard–Myślibórz–Kostrzyn
 *   w latach 1880–1882; działały tu mleczarnia, fabryka
 *   łańcuchów, elektrownia, wodociągi i młyn elektryczny.
 */
export const MYSLIBORZ: CityContent = {
  slug: "mysliborz",
  h1: "Thermomix Myślibórz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Myślibórz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Myśliborzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Myślibórz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Myśliborzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Myśliborza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Myślibórz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Większość kuchni nie została zaprojektowana. Po prostu się zastała.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Myśliborzu – jak wygląda prezentacja?",
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
      id: "gdzie-co-stoi",
      heading: "Rok 1539, czyli gdzie co stoi",
      paragraphs: [
        "W 1539 roku Myślibórz strawił wielki pożar. Miasto odbudowano — ale nie według dawnego układu ulic, tylko według nowego planu.",
        "To nie było konieczne. Nikt nie kazał zmieniać planu i prościej byłoby odtworzyć to, co było. Ktoś jednak uznał, że skoro i tak trzeba budować, to nie ma obowiązku budować tak samo.",
        "Zaczynam od tego, bo w kuchni prawie nikt tak nie myśli — a powinien.",
        "Układ większości kuchni nie został zaprojektowany. On się zastał. Rzeczy stoją tam, gdzie postawiono je pierwszego dnia po przeprowadzce, albo tam, gdzie akurat było wolne miejsce, albo tam, gdzie pasowały rozmiarem do półki. I zostają tam latami, bo nikt nigdy nie zadaje pytania, czy to ma sens.",
        "Jest na to test i nie wymaga żadnej tabelki ani planu kuchni na kartce. Przez trzy dni zauważaj tylko trzy rzeczy: kiedy musisz się po coś schylić, kiedy musisz sięgnąć wysoko i kiedy musisz przejść przez kuchnię na drugą stronę. Nic więcej nie trzeba notować, bo te trzy sygnały wystarczą.",
        "Po trzech dniach zwykle okazuje się, że kilka rzeczy używanych codziennie stoi najdalej, a to, po co sięgacie dwa razy w roku, zajmuje najwygodniejszą półkę na wysokości ręki.",
        "Zasada porządkowania jest jedna i mieści się w czterech słowach: blisko tego, gdzie się tego używa. Nie tam, gdzie pasuje rozmiarem. Nie tam, gdzie „jest miejsce na garnki”. Blisko miejsca, w którym ta rzecz jest potrzebna.",
        "Tylko że robi się to po jednej półce, a nie w jeden weekend. Przestawienie całej kuchni naraz kończy się zawsze tak samo: przez miesiąc nikt w domu nie wie, gdzie co jest, wszyscy się irytują i po kolei wszystko wraca na stare miejsca. Jedna półka na tydzień wygląda niepozornie, ale zostaje.",
        "Uczciwie o drugiej stronie: część układu jest narzucona i nie da się jej zmienić. Zlew stoi tam, gdzie doprowadzono wodę, kuchenka tam, gdzie jest przyłącze. Z tym się nie dyskutuje — przestawia się to, co da się przestawić, i na tym koniec. To zresztą i tak jest większość zawartości kuchni.",
        "Na koniec o urządzeniu i o rzeczy, której sprzedawcy raczej nie mówią: ono zajmuje miejsce na blacie i to jest jego realny koszt, niezależny od ceny.",
        "Dlatego warto wskazać mu miejsce przed zakupem, a nie po. Takie, gdzie jest gniazdko i gdzie nie trzeba go co chwila przestawiać — bo sprzęt, który za każdym razem trzeba wyjąć z szafki i po wszystkim schować, bardzo szybko staje się sprzętem używanym od święta.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Myśliborzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, gdzie w Waszej kuchni byłoby miejsce na takie urządzenie — przy prezentacji od razu zobaczycie, czy to miejsce się sprawdza.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Myśliborzu"),
    sekcjaRaty("w Myśliborzu"),
    {
      id: "rodzina",
      heading: "Thermomix dla myśliborskiej rodziny",
      paragraphs: [
        "Myślibórz leży na Pojezierzu Myśliborskim, jest siedzibą powiatu i miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad dziesięć tysięcy mieszkańców na piętnastu kilometrach kwadratowych, a cała gmina ponad osiemnaście tysięcy osób na trzystu dwudziestu ośmiu kilometrach kwadratowych i obejmuje siedemdziesiąt pięć wsi i osad. Pierwsza wzmianka o mieście pochodzi z 1238 roku, a lokacja z drugiej połowy trzynastego wieku — źródła podają trzy różne daty i żadna nie jest rozstrzygająca. W 1317 roku margrabia Waldemar uczynił Myślibórz wyższą instancją sądową dla siedmiu głównych miast regionu; do 1335 działała tu mennica, a w 1352 miasto dostało przywilej przymusu drogowego. Statut Joachima I z 1511 roku ustalił skład rady miejskiej na czterech burmistrzów i ośmiu rajców. Mury miejskie miały około tysiąca dziewięciuset metrów obwodu, z czego zachowało się około trzystu; baszty łupinowe rozmieszczono co dwadzieścia cztery do trzydziestu metrów, a z trzech baszt cylindrycznych została jedna — Baszta Prochowa. Miasto miało trzy główne bramy, wał ziemny i podwójną fosę, a od zachodu chroniło je jezioro. Po pożarze w 1539 roku odbudowano je według nowego planu, nie odtwarzając dawnego układu. Pierwsza droga bita do Kostrzyna powstała w 1848 roku, a linia kolejowa ze Stargardu przez Myślibórz do Kostrzyna w latach 1880–1882; działały tu mleczarnia, fabryka łańcuchów, elektrownia, wodociągi i młyn elektryczny.",
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

  districtsHeading: "Do których części Myśliborza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemdziesięciu pięciu wsi i osad w gminie — to jedna z najliczniejszych gmin w całym serwisie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Myślibórz też przyjadę",
  nearbyParagraphs: [
    "Gorzów Wielkopolski jest około czterdziestu kilometrów stąd, Szczecin niewiele ponad siedemdziesiąt, a Barlinek i Pyrzyce mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gorzów Wielkopolski", "Szczecin", "Barlinek", "Pyrzyce"],

  about: blokOMnie("do Myśliborza", "w Myśliborzu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Myśliborza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemdziesięciu pięciu wsi i osad w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto Myślibórz, siedzibę powiatu — nie o wsie Myślibórz Wielki i Myślibórz Mały, które leżą w tej samej gminie. Do nich zresztą też przyjeżdżam.",
    },
    ...faqWspolne("w Myśliborzu"),
    {
      question: "Jak sprawdzić, czy układ kuchni ma sens?",
      answer:
        "Przez trzy dni zauważaj tylko trzy rzeczy: kiedy musisz się po coś schylić, kiedy sięgnąć wysoko i kiedy przejść przez kuchnię na drugą stronę. Nic więcej nie trzeba notować. Zwykle okazuje się, że rzeczy używane codziennie stoją najdalej, a te, po które sięgacie dwa razy w roku, zajmują najwygodniejszą półkę. Zasada porządkowania jest jedna: blisko tego, gdzie się tego używa — a nie tam, gdzie pasuje rozmiarem.",
    },
    {
      question: "Gdzie postawić Thermomix w kuchni?",
      answer:
        "Warto to ustalić przed zakupem, a nie po. Urządzenie zajmuje miejsce na blacie i to jest jego realny koszt, niezależny od ceny. Najlepsze miejsce to takie, gdzie jest gniazdko i skąd nie trzeba go co chwila przestawiać — sprzęt, który za każdym razem trzeba wyjąć z szafki i po wszystkim schować, bardzo szybko staje się sprzętem używanym od święta.",
    },
  ],

  geo: { lat: 52.9237, lng: 14.8679 },
};
