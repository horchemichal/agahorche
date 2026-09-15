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
 * NOWOGRÓD BOBRZAŃSKI — gmina miejsko-wiejska w powiecie
 * zielonogórskim.
 * MIASTO 4 736, GMINA 8 950 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 14,6 km², GMINY 259,7 km².
 * ⚠ W ROLNICTWIE PRACUJE 12,2% ZATRUDNIONYCH.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — dostępne dane („28 wsi"
 *   po reformie 1975 r., „około 30 osad") nie są aktualnym
 *   wykazem urzędowym.
 *
 * ⚠⚠ HOMONIM KRYTYCZNY: NOWOGRÓD BOBRZAŃSKI (lubuskie,
 * powiat zielonogórski, NAD BOBREM) ≠ NOWOGRÓD (podlaskie,
 * powiat łomżyński, NAD NARWIĄ, ze Skansenem Kurpiowskim).
 * ⚠⚠ SERWIS MA JUŻ OSOBNĄ STRONĘ NOWOGRODU PODLASKIEGO
 * (slug „nowogrod", kąt: ile pracy jest w składniku).
 * TE DWIE STRONY MUSZĄ SIĘ RÓŻNIĆ WSZYSTKIM. FAQ to rozróżnia.
 * „Nowogród Wielki" w Polsce nie istnieje.
 *
 * ⚠⚠ MIASTO POWSTAŁO 1 STYCZNIA 1988 r. Z POŁĄCZENIA DWÓCH
 * WSI: NOWOGRODU BOBRZAŃSKIEGO I KRZYSTKOWIC. To rzadkość
 * i podaję to wprost.
 * NOWOGRÓD BOBRZAŃSKI: pierwsza wzmianka 1202 r. jako gród
 * kasztelański, na stromym prawym brzegu Bobru, przy drodze
 * Żagań–Zielona Góra będącej częścią SZLAKU SOLNEGO.
 * ⚠ PRAW MIEJSKICH „ok. XII w." NIE PODAJĘ — jedno źródło,
 *   bez dokumentu.
 * KRZYSTKOWICE: prawa miejskie 1659 r.
 * ⚠⚠ DATY ZAŁOŻENIA KRZYSTKOWIC NIE PODAJĘ — źródło gminne
 *   jest wewnętrznie sprzeczne (założenie 1664 przy prawach
 *   miejskich z 1659). Podaję TYLKO rok praw miejskich.
 * Układ urbanistyczny Krzystkowic ma charakterystyczny
 * PLAN W KSZTAŁCIE LITERY C z nieregularnym rynkiem.
 * ⚠⚠ PRZYNALEŻNOŚCI HISTORYCZNEJ (Śląsk kontra Dolne Łużyce)
 * NIE PODAJĘ — jedyne źródło zawiera oczywisty błąd
 * („Cesarstwo Austriackie"). LUKA ŚWIADOMA.
 *
 * GEOGRAFIA: nad BOBREM, ok. 25 km na zachód od Zielonej Góry.
 * Kajaki i wędkarstwo, kąpielisko z wypożyczalnią sprzętu,
 * dwie pętle rowerowe 26 km i 17,5 km.
 *
 * ⚠⚠ GOSPODARSTWO W DRĄGOWINIE — PODSTAWA KĄTA:
 * Gospodarstwo naturalne prowadzi pasiekę metodą minimalnej
 * ingerencji, hoduje OWCE, wypieka CHLEB, wyrabia SERY,
 * a poza miodem produkuje KISZONKI, OCTY, SYROPY ZIOŁOWE,
 * KONFITURY I MUSZTARDY. Robi napój z kwiatów czarnego bzu.
 * Prowadzi WARSZTATY FERMENTACJI I ZIELARSTWA oraz
 * pszczelarskie; należy do Ogólnopolskiej Sieci Zagród
 * Edukacyjnych.
 * ⚠⚠ „CHLEB ŻYTNI NA ZAKWASIE" — WPIS NA MINISTERIALNĄ LISTĘ
 * PRODUKTÓW TRADYCYJNYCH 12 CZERWCA 2019 r. Karta opisuje
 * bochenek ok. 1 kg z charakterystycznym pęknięciem wzdłuż,
 * z samej mąki żytniej, zakwasu i soli — BEZ DROŻDŻY.
 * Receptura pochodzi z Wołynia i trafiła do gospodarstwa
 * w latach 40. XX w.
 * ⚠ NAZW WŁASNYCH I NAZWISK NIE PODAJĘ.
 * ⚠ KĄTÓW CHLEBOWEGO, KISZONKOWEGO, MIODOWEGO I SEROWEGO
 *   NIE UŻYWAM — wszystkie ZAJĘTE. Podaję jako fakty.
 * WINNICA w Sterkowie założona w 2009 r., 2 ha, pięć odmian,
 * fermentacja spontaniczna, sala degustacyjna w odrestaurowanej
 * zabytkowej stodole.
 * ⚠ WINNICĘ WYMIENIAM JEDNYM ZDANIEM, BEZ ZACHĘTY
 *   DO ALKOHOLU. ⚠ KĄT „winiarski" ZAJĘTY.
 *
 * ZABYTKI: kościół św. Bartłomieja Apostoła, którego budowę
 * rozpoczęli augustianie w XIII w.; kościół Wniebowzięcia NMP
 * z 1227 r.; ZAMKOWA GÓRA — pozostałość po zamku; zabudowa
 * XVIII–XX w. wokół rynku. PAŁAC W BOGACZOWIE (XVI w.).
 * DNI NOWOGRODU BOBRZAŃSKIEGO — impreza cykliczna.
 * ⚠ NUMERU EDYCJI ANI ROKU POWSTANIA NIE PODAJĘ.
 *
 * KĄT: GOTOWANIE NA PARZE — CO ZYSKUJE, A CO TRACI.
 * Kąt od gospodarstwa, które robi wszystko po kolei samo
 * i uczy fermentacji oraz zielarstwa — czyli od miejsca,
 * w którym obróbka jest świadomym wyborem, a nie odruchem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że para ma w Polsce opinię „dietetycznej" i przez to jest
 *   niesprawiedliwie traktowana jako obróbka gorszego sortu,
 * — ŻE TO JEST PO PROSTU INNA OBRÓBKA, z własnymi zaletami
 *   i własnymi ograniczeniami,
 * — CO PARA ROBI LEPIEJ OD GOTOWANIA W WODZIE: nie wypłukuje
 *   smaku, bo produkt nie leży w płynie — a to jest cała
 *   różnica, którą naprawdę czuć,
 * — ŻE WARZYWA ZOSTAJĄ WYRAŹNE W SMAKU I NIE ROZPADAJĄ SIĘ
 *   W WODZIE,
 * — CZEGO PARA NIE ZROBI NIGDY: nie zrumieni, nie da skórki
 *   i nie da smaku przypieczenia — a to jest połowa tego,
 *   za co lubimy jedzenie,
 * — WNIOSEK: para jest dobra dla produktów, które mają
 *   pozostać sobą, a zła dla tych, które mają zmienić
 *   charakter,
 * — CO NA PARZE WYCHODZI ZNAKOMICIE: ryba, warzywa,
 *   ziemniaki, pierogi i kluski, jajka, delikatne mięso,
 * — CO WYCHODZI ŹLE: wszystko, co ma chrupać, i wszystko,
 *   co potrzebuje wysokiej temperatury,
 * — ŻE NA PARZE MOŻNA GOTOWAĆ DWIE RZECZY NARAZ NA DWÓCH
 *   POZIOMACH, i to jest największa praktyczna zaleta,
 * — ŻE PRODUKTY O RÓŻNEJ TWARDOŚCI TRZEBA DODAWAĆ
 *   W RÓŻNYCH MOMENTACH, bo inaczej jedno jest gotowe,
 *   a drugie nie,
 * — ŻE PARA NIE JEST SZYBSZA i nie należy jej wybierać
 *   dla oszczędności czasu,
 * — UCZCIWIE: to nie jest funkcja, dla której warto kupić
 *   urządzenie, i nie będę tego twierdzić,
 * — ale w tym urządzeniu para ma jedną realną przewagę:
 *   powstaje z tego samego naczynia, w którym gotuje się
 *   zupa albo sos — więc dwa elementy obiadu robią się
 *   jednocześnie, bez drugiego garnka i drugiego palnika.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I DIETETYCZNYCH.
 *   ZERO witamin, ZERO „lżejsze", ZERO kalorii, ZERO diety.
 *   ⚠ To jest przy tym temacie NAJWIĘKSZE RYZYKO — cała
 *   popularna narracja o parze jest zdrowotna. Piszę
 *   WYŁĄCZNIE o smaku, teksturze i organizacji pracy.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI NAZWISK.
 * — ZERO ZACHĘTY DO ALKOHOLU przy wątku winnicy.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Knedle — kuchnia
 * morawska i czeska na parze" dotyczą JEDNEJ POTRAWY.
 * „Surowe kontra gotowane" dotyczą tego, co daje obróbka
 * cieplna w ogóle. „Smażyć czy piec" dotyczy wyboru między
 * dwiema obróbkami suchymi. „Duszenie" dotyczy wolnego
 * gotowania pod przykryciem w płynie. „Woda po gotowaniu"
 * dotyczy wywaru. „Warzywa liściaste" (Drezdenko) dotyczą
 * jednej grupy warzyw. Tutaj chodzi o PARĘ JAKO OBRÓBKĘ
 * — co przez nią zyskujemy i co bezpowrotnie tracimy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ praw miejskich Nowogrodu Bobrzańskiego
 *   ani daty założenia Krzystkowic.
 * — NIE PODAJĘ przynależności historycznej.
 * — NIE PODAJĘ nazw gospodarstwa ani winnicy.
 * — NIE PODAJĘ numeru edycji Dni Nowogrodu Bobrzańskiego.
 * — NIE MYLĘ TEGO MIASTA z NOWOGRODEM nad Narwią
 *   w podlaskiem, który ma w serwisie własną stronę.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko pięć tysięcy mieszkańców na 14,6 km²,
 *   cała gmina blisko dziewięć tysięcy na 259,7 km²;
 *   w rolnictwie pracuje tu 12,2% zatrudnionych,
 * — miasto w obecnym kształcie powstało 1 stycznia 1988 r.
 *   z połączenia dwóch wsi: Nowogrodu Bobrzańskiego
 *   i Krzystkowic; pierwsza wzmianka o Nowogrodzie pochodzi
 *   z 1202 r. i dotyczy grodu kasztelańskiego na stromym
 *   prawym brzegu Bobru, przy drodze Żagań–Zielona Góra,
 *   będącej częścią szlaku solnego; Krzystkowice otrzymały
 *   prawa miejskie w 1659 r., a ich układ urbanistyczny
 *   ma charakterystyczny plan w kształcie litery C
 *   z nieregularnym rynkiem,
 * — miasto leży nad Bobrem, około dwudziestu pięciu
 *   kilometrów na zachód od Zielonej Góry; są tu kajaki,
 *   wędkarstwo, kąpielisko z wypożyczalnią sprzętu wodnego
 *   i dwie pętle rowerowe — dwudziestosześcio-
 *   i siedemnastokilometrowa,
 * — w Drągowinie działa gospodarstwo naturalne: pasieka
 *   prowadzona metodą minimalnej ingerencji, hodowla owiec,
 *   własny wypiek chleba i wyrób serów, a poza miodem także
 *   kiszonki, octy, syropy ziołowe, konfitury i musztardy;
 *   gospodarstwo prowadzi warsztaty pszczelarskie oraz
 *   fermentacji i zielarstwa i należy do Ogólnopolskiej Sieci
 *   Zagród Edukacyjnych. Jego chleb żytni na zakwasie wpisano
 *   12 czerwca 2019 r. na ministerialną Listę Produktów
 *   Tradycyjnych — bochenek waży około kilograma, ma
 *   charakterystyczne pęknięcie wzdłuż i powstaje wyłącznie
 *   z mąki żytniej, zakwasu i soli, bez drożdży; recepturę
 *   przywieziono z Wołynia w latach czterdziestych,
 * — w Sterkowie działa od 2009 r. dwuhektarowa winnica
 *   z pięcioma odmianami i salą degustacyjną urządzoną
 *   w odrestaurowanej zabytkowej stodole,
 * — budowę kościoła świętego Bartłomieja Apostoła rozpoczęli
 *   augustianie w XIII w., kościół Wniebowzięcia NMP pochodzi
 *   z 1227 r., a po dawnym zamku została Zamkowa Góra;
 *   wokół rynku stoi zabudowa z XVIII–XX w., a w Bogaczowie
 *   szesnastowieczny pałac.
 */
export const NOWOGROD_BOBRZANSKI: CityContent = {
  slug: "nowogrod-bobrzanski",
  h1: "Thermomix Nowogród Bobrzański – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowogród Bobrzański — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowogrodzie Bobrzańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowogród Bobrzański — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowogrodzie Bobrzańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowogrodu Bobrzańskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Nowogród Bobrzański i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Para nie wypłukuje smaku — ale niczego nie zrumieni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowogrodzie Bobrzańskim – jak wygląda prezentacja?",
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
      id: "para",
      heading: "Gospodarstwo, które uczy fermentacji — czyli o gotowaniu na parze",
      paragraphs: [
        "W Drągowinie działa gospodarstwo, które robi po kolei prawie wszystko samo: pasiekę prowadzoną metodą minimalnej ingerencji, owce, własny chleb i sery, a obok kiszonki, octy, syropy ziołowe, konfitury i musztardy. Jego chleb żytni na zakwasie — z samej mąki, zakwasu i soli, bez drożdży, według receptury przywiezionej z Wołynia w latach czterdziestych — trafił 12 czerwca 2019 roku na ministerialną Listę Produktów Tradycyjnych.",
        "W takim miejscu obróbka jest wyborem, a nie odruchem. I właśnie o wyborze obróbki chcę napisać — o parze, która w Polsce ma opinię „dietetycznej” i przez to jest traktowana jak gotowanie gorszego sortu, dla kogoś, kto musi, a nie kto chce.",
        "Tymczasem para to po prostu inna obróbka. Ma własne zalety i własne ograniczenia, dokładnie tak jak pieczenie czy duszenie, i warto je znać, zamiast przypisywać jej cnoty albo wady.",
        "Największa zaleta jest jedna i naprawdę ją czuć: para nie wypłukuje smaku. Produkt nie leży w płynie, więc nic z niego nie wychodzi do wody, którą potem się wylewa. Ta sama marchewka ugotowana w wodzie i na parze to dwa różne warzywa.",
        "Z tego wynika, że warzywa zostają wyraziste, trzymają kształt i nie rozpadają się w bulgoczącym garnku. Dla kogoś, kto zna warzywa wyłącznie jako coś miękkiego i bez smaku, to bywa zaskoczenie.",
        "Jest jednak rzecz, której para nie zrobi nigdy: nie zrumieni. Nie da skórki, nie da przypieczenia, nie da tej ciemnej, słodkawej warstwy, za którą tak naprawdę lubimy większość pieczonego jedzenia. I tu żadna sztuczka nie pomoże.",
        "Stąd bierze się prosta reguła, która porządkuje wszystko. Para jest dobra dla produktów, które mają pozostać sobą, i zła dla tych, które mają zmienić charakter.",
        "Znakomicie wychodzą więc: ryba, warzywa, ziemniaki, pierogi i kluski, jajka, delikatne mięso. Źle wychodzi wszystko, co ma chrupać, i wszystko, co potrzebuje wysokiej temperatury, żeby w ogóle zacząć być sobą.",
        "Największą praktyczną zaletą pary jest jednak co innego, o czym mówi się rzadko: można gotować dwie rzeczy naraz, na dwóch poziomach. Ziemniaki pod spodem, ryba nad nimi — i to bez dokładania garnków.",
        "Trzeba tylko pamiętać, że produkty o różnej twardości dodaje się w różnych momentach. Wrzucenie wszystkiego naraz kończy się tym, że jedno jest gotowe, a drugie twarde — i to nie jest wina metody, tylko kolejności.",
        "Jedno zastrzeżenie, bo lubię je stawiać wprost: para nie jest szybsza. Nie warto jej wybierać dla oszczędności czasu, bo jej przewaga leży zupełnie gdzie indziej.",
        "Teraz uczciwie o sprzęcie. Gotowanie na parze nie jest funkcją, dla której warto kupić to urządzenie, i nie będę tak twierdzić — zwykły wkład do garnka kosztuje kilkanaście złotych i działa.",
        "Realna przewaga jest tu inna i całkiem konkretna: para powstaje z tego samego naczynia, w którym gotuje się zupa albo sos. Czyli dwa elementy obiadu robią się jednocześnie, bez drugiego garnka, bez drugiego palnika i bez pilnowania dwóch rzeczy naraz. W kuchni z małym blatem to znaczy więcej niż niejedna funkcja z listy.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowogrodzie Bobrzańskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu jada się ryby. Jeśli tak, pokażę rybę z dodatkiem robionym równocześnie — to najlepiej widać na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowogrodzie Bobrzańskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowogrodzkiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko pięć tysięcy mieszkańców na czternastu kilometrach kwadratowych, a cała gmina blisko dziewięć tysięcy na dwustu sześćdziesięciu; w rolnictwie pracuje tu ponad dwanaście procent zatrudnionych. Miasto w obecnym kształcie powstało 1 stycznia 1988 roku z połączenia dwóch wsi — Nowogrodu Bobrzańskiego i Krzystkowic. Pierwsza wzmianka o Nowogrodzie pochodzi z 1202 roku i dotyczy grodu kasztelańskiego na stromym prawym brzegu Bobru, przy drodze z Żagania do Zielonej Góry, będącej częścią szlaku solnego; Krzystkowice otrzymały prawa miejskie w 1659 roku, a ich układ urbanistyczny ma charakterystyczny plan w kształcie litery C z nieregularnym rynkiem. Miasto leży nad Bobrem, około dwudziestu pięciu kilometrów na zachód od Zielonej Góry — są tu kajaki, wędkarstwo, kąpielisko z wypożyczalnią sprzętu i dwie pętle rowerowe. W Drągowinie działa gospodarstwo naturalne: pasieka prowadzona metodą minimalnej ingerencji, hodowla owiec, własny wypiek chleba i wyrób serów, a poza miodem kiszonki, octy, syropy ziołowe, konfitury i musztardy; gospodarstwo prowadzi warsztaty pszczelarskie oraz fermentacji i zielarstwa i należy do Ogólnopolskiej Sieci Zagród Edukacyjnych, a jego chleb żytni na zakwasie wpisano 12 czerwca 2019 roku na ministerialną Listę Produktów Tradycyjnych. W Sterkowie od 2009 roku działa dwuhektarowa winnica z salą degustacyjną w odrestaurowanej zabytkowej stodole. Budowę kościoła świętego Bartłomieja Apostoła rozpoczęli augustianie w XIII wieku, kościół Wniebowzięcia NMP pochodzi z 1227 roku, a po dawnym zamku została Zamkowa Góra; w Bogaczowie stoi szesnastowieczny pałac.",
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

  districtsHeading: "Do których części gminy Nowogród Bobrzański dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowogród Bobrzański też przyjadę",
  nearbyParagraphs: [
    "Zielona Góra, Żagań, Kożuchów, Szprotawa i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zielona Góra", "Żagań", "Kożuchów", "Szprotawa"],

  about: blokOMnie("do Nowogrodu Bobrzańskiego", "w Nowogrodzie Bobrzańskim i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowogrodu Bobrzańskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te nazwy mylą się często: chodzi o Nowogród Bobrzański nad Bobrem w lubuskiem, a nie o Nowogród nad Narwią w podlaskiem.",
    },
    ...faqWspolne("w Nowogrodzie Bobrzańskim"),
    {
      question: "Co zyskuje się, gotując na parze?",
      answer:
        "Smak, którego nie wypłukuje woda — produkt nie leży w płynie, więc nic z niego nie ucieka do wywaru, który potem się wylewa. Warzywa zostają wyraziste i trzymają kształt. Ta sama marchewka z wody i z pary to dwa różne warzywa.",
    },
    {
      question: "Czego para nie zrobi?",
      answer:
        "Nie zrumieni. Nie ma skórki, nie ma przypieczenia, nie ma tej ciemnej, słodkawej warstwy, za którą lubimy pieczone jedzenie. Dlatego para jest dobra dla produktów, które mają pozostać sobą, a zła dla tych, które mają zmienić charakter.",
    },
    {
      question: "Czy gotowanie na parze jest szybsze?",
      answer:
        "Nie i nie warto jej wybierać dla oszczędności czasu. Największa praktyczna zaleta jest inna: można gotować dwie rzeczy naraz na dwóch poziomach — pamiętając, żeby produkty o różnej twardości dodawać w różnych momentach.",
    },
  ],

  geo: { lat: 51.8028, lng: 15.2381 },
};
