import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * LIPSKO — powiat lipski, woj. mazowieckie.
 * MIASTO 4 914 (GUS 31.12.2024), 15,7 km².
 * Gmina: 9 978 osób, 135,3 km². Leży nad Krępianką,
 * na dwóch wzgórzach rozdzielonych jej doliną.
 * ⚠⚠ STRONA GMINY NA GOV.PL PODAJE 12 008 / 6 132 —
 *   DANE ZAWYŻONE O OKOŁO 20%. NIE UŻYWAĆ.
 *   Obowiązuje GUS 31.12.2024. TWARDA GRANICA.
 *
 * ⚠⚠ HOMONIMY — NAJGROŹNIEJSZE W CAŁYM SERWISIE:
 * — LIPSKO ≠ LIPSK. „Lipsk" to (a) miasto w podlaskiem,
 *   powiat augustowski, (b) polska nazwa Lipska w Niemczech.
 * — ⚠ MIEJSCOWNIK „W LIPSKU" JEST IDENTYCZNY dla Lipska
 *   mazowieckiego i dla Lipska w Niemczech. Dlatego
 *   W TEKŚCIE PISZĘ „w Lipsku nad Krępianką" albo
 *   „w Lipsku w powiecie lipskim" wszędzie tam, gdzie
 *   mogłoby być niejasne. FAQ ROZRÓŻNIA TO WPROST.
 *   TWARDA GRANICA.
 * — wsie LIPSKO są też w podkarpackiem (gm. Narol)
 *   i w lubelskiem.
 * — ⚠ W POWIECIE LIPSKIM, w gminie CHOTCZA, leży wieś
 *   BIAŁOBRZEGI — nie mylić z miastem Białobrzegi
 *   z tej samej fali.
 * Odmiana: „do Lipska", „w Lipsku", „lipski".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1589 — Katarzyna Wolska z Krępskich, właścicielka wsi
 *   LIPA, uzyskuje od Zygmunta III Wazy przywilej na DWA
 *   JARMARKI ROCZNIE (25 stycznia i 13 sierpnia)
 *   oraz COTYGODNIOWE TARGI W SOBOTY,
 * — 1591 — wieś Lipę kupuje Mikołaj Oleśnicki,
 * — 18 MARCA 1613 — dokument Oleśnickiego określa granice
 *   i powinności mieszczan: podatki od ziemi, domów
 *   i rzemieślników, obowiązek prac przy żniwach, naprawy
 *   grobli i gaszenia pożarów,
 *   ⚠ ŹRÓDŁO WYMIENIA TEŻ GORZELNIKÓW — NIE WYMIENIAM ICH.
 *   ZERO TEMATU ALKOHOLU. TWARDA GRANICA.
 * — 1599–1614 budowa kamiennego kościoła; herb fundatora
 *   DĘBNO stał się herbem miasta,
 * — Lipsko leżało na SZLAKU WOŁOWYM z Rusi Czerwonej
 *   do Wielkopolski i na Śląsk.
 * ⚠ PRAWA MIEJSKIE — ROZBIEŻNOŚĆ: jedne źródła podają
 *   nadanie 1613 i przywrócenie 1958, inne mówią wyłącznie
 *   o 1958. ⚠ NIE PODAJĘ ŻADNEJ Z TYCH DAT ANI UTRATY.
 *   TWARDA GRANICA.
 *
 * DZIŚ — GOSPODARKA NAJBARDZIEJ „KUCHENNA" Z CAŁEJ FALI:
 * struktura zasiewów gminy — zboża 75,2%, ziemniaki 11,8%,
 * rośliny pastewne; sady (truskawki i wiśnie); warzywa
 * (kapusta i ogórki); w gminie działa przetwórstwo
 * owocowo-warzywne, mleczarnia, zakład mięsny, SZEŚĆ
 * PIEKARNI i TRZY KASZARNIE. Miasto pełni funkcję ośrodka
 * obsługi rolnictwa.
 * ⚠ KĄTY „KASZA" (Dukla), „TRUSKAWKI I MALINY" (Urzędów),
 *   „WIŚNIE" (Ożarów), „KAPUSTA/BIGOS" (Pierzchnica)
 *   SĄ ZAJĘTE — PODAJĘ TO JAKO FAKTY, NIE JAKO TEMAT.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — WPIS POTWIERDZONY:
 *   „KIEŁBASA WIEJSKA Z LIPSKA", kategoria produkty mięsne,
 *   WPIS 18 MAJA 2015, województwo mazowieckie,
 *   POCHODZENIE: GMINA LIPSKO — potwierdzone w karcie
 *   produktu, nie tylko w nazwie. Sprawdzone pod kątem
 *   obalenia: NIE chodzi o Lipsk podlaski.
 *   Z karty produktu: kiełbasa cienka w jelicie wieprzowym
 *   o pomarszczonej powierzchni; wędzenie DWUETAPOWE —
 *   najpierw drewnem dębowo-bukowym lub olchowym
 *   w 40–60°C, potem gorącym dymem około 80°C przez
 *   90 minut, na końcu pieczenie dla kruchości;
 *   charakterystyczne „szare oczko" w przekroju jako dowód
 *   tradycyjnej metody; przyprawy: czarny pieprz i czosnek.
 *   ⚠⚠ TEMPERATURY I CZASY PODAJĘ WYŁĄCZNIE JAKO CYTAT
 *   Z OPISU PRODUKTU TRADYCYJNEGO. NIE PRZEKŁADAM ICH
 *   NA ŻADNĄ INSTRUKCJĘ DLA CZYTELNICZKI ANI NA USTAWIENIA
 *   URZĄDZENIA. TWARDA GRANICA — NAJWAŻNIEJSZA NA STRONIE.
 * ⚠ PUŁAPKI: „truskawka zwoleńska" (20.04.2021) — powiat
 *   ZWOLEŃSKI; „lipówka kornicka" (14.05.2013) — Kornica
 *   w powiecie ŁOSICKIM, nazwa od lipy, nie od Lipska.
 *   NIE WYMIENIAM ICH.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: DWA CIEPŁA W JEDNYM DANIU — najpierw łagodne,
 * potem mocne.
 * Kąt od opisu kiełbasy wiejskiej z Lipska, w którym
 * wędzenie jest wyraźnie dwuetapowe, a na końcu dochodzi
 * jeszcze pieczenie. To samo rozwiązanie wraca w kuchni
 * domowej wszędzie, choć prawie nikt go tak nie nazywa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w opisie lipskiej kiełbasy uderza jedna rzecz:
 *   nie ma tam JEDNEJ temperatury. Najpierw łagodne ciepło,
 *   potem mocniejsze, na końcu jeszcze pieczenie,
 * — ŻE TO NIE JEST KAPRYS TRADYCJI, TYLKO ZASADA, KTÓRA
 *   WRACA W CAŁEJ KUCHNI: łagodne ciepło ROBI RZECZ
 *   W ŚRODKU, mocne ROBI RZECZ NA POWIERZCHNI,
 * — PRZYKŁADY, KTÓRE ZNA KAŻDY: mięso wyjęte wcześniej
 *   z lodówki, obsmażone i dopiero potem duszone; warzywa
 *   podsmażone na początek dania; ciasto pieczone najpierw
 *   mocniej, potem łagodniej; zupa doprowadzona do wrzenia
 *   i przestawiona na mały ogień
 *   ⚠ BEZ ŻADNYCH TEMPERATUR I CZASÓW,
 * — ⚠⚠ ŻE NAJCZĘSTSZY BŁĄD TO PRÓBA ZAŁATWIENIA OBU RZECZY
 *   NARAZ — jednym mocnym ogniem przez cały czas. Wtedy
 *   powierzchnia jest gotowa, zanim środek zdąży się zrobić,
 *   i danie wygląda dobrze, a w środku nie jest tym,
 *   czym miało być. TO JEST NAJUŻYTECZNIEJSZA RZECZ
 *   W CAŁYM TEKŚCIE,
 * — ŻE KOLEJNOŚĆ BYWA ODWROTNA I TO TEŻ JEST REGUŁA:
 *   czasem najpierw mocno (żeby się zamknęło), potem łagodnie
 *   (żeby doszło), a czasem odwrotnie — decyduje to,
 *   czy zależy nam na wnętrzu, czy na skórce,
 * — ŻE MIĘDZY ETAPAMI ZWYKLE COŚ TRZEBA ZROBIĆ i to jest
 *   ta część, której ludzie nie lubią: przełożyć, zmniejszyć,
 *   odkryć, poczekać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: TO JEST DOKŁADNIE TEN PRZYPADEK,
 *   W KTÓRYM URZĄDZENIE MA REALNĄ PRZEWAGĘ — zmiana
 *   temperatury w trakcie nie wymaga stania przy garnku
 *   ani pilnowania momentu. Człowiek zapomina zmniejszyć
 *   ogień; ustawiony program nie zapomina,
 * — ⚠ ALE OD RAZU GRANICA: mocnego przypieczenia
 *   powierzchni urządzenie nie zrobi tak jak patelnia.
 *   Pierwszy etap „na ostro" często i tak robi się osobno.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH WŁASNYCH TEMPERATUR, CZASÓW I USTAWIEŃ.
 *   Liczby z karty produktu tradycyjnego podaję WYŁĄCZNIE
 *   jako opis tego wyrobu i NIGDY jako instrukcję.
 *   TWARDA GRANICA.
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI,
 *   W SZCZEGÓLNOŚCI O OBRÓBCE MIĘSA I O TYM, CZY COŚ JEST
 *   „DOŚĆ ZROBIONE". To jest dziedzina, w której zła
 *   podpowiedź szkodzi. TWARDA GRANICA.
 * — ŻADNYCH PRZEPISÓW NA WYRÓB WĘDLIN W DOMU.
 * — ⚠ ZERO TEMATU WĘDZENIA JAKO PORADY — kąt „WĘDZENIE
 *   I PEKLOWANIE" jest ZAJĘTY (zambrow.ts, wprost „jedyne
 *   miejsce w serwisie"). Wędzenie pojawia się WYŁĄCZNIE
 *   w opisie produktu z listy. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO TEMATU ALKOHOLU I GORZELNICTWA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO odebrania praw miejskich i jego przyczyn.
 * — ZERO tematów powstańczych i wojennych.
 * — ZERO historii społeczności żydowskiej Lipska
 *   i domu modlitwy.
 * — ZERO bezrobocia, ujemnego przyrostu naturalnego,
 *   wyludniania i starzenia się populacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „RÓŻNICA TEMPERATUR — ZIMNE DO GORĄCEGO" (Miłomłyn)
 *   dotyczy SZOKU TERMICZNEGO i tego, co pęka.
 * — „HERBATY I NAPARY" (Głuchołazy) dotyczy TEMPERATURY
 *   WODY DO ZALANIA.
 * — „RYŻ" (Małogoszcz) dotyczy PROPORCJI.
 * — „CZY MYĆ NACZYNIE MIĘDZY ETAPAMI" (Susz) dotyczy MYCIA.
 * — „WĘDZENIE I PEKLOWANIE" (Zambrów) dotyczy WĘDZENIA.
 * — „WIEPRZOWINA" (Żuromin) dotyczy JEDNEGO MIĘSA
 *   i grubości kawałka.
 * TUTAJ chodzi o to, że JEDNO DANIE POTRZEBUJE DWÓCH
 * RÓŻNYCH CIEPŁ PO KOLEI — i co się dzieje, gdy próbuje
 * się załatwić je jednym.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MYLĘ Lipska nad Krępianką z Lipskiem podlaskim
 *   ani z niemieckim.
 * — NIE PODAJĘ dat nadania, utraty ani odzyskania praw
 *   miejskich.
 * — NIE UŻYWAM liczby ludności ze strony gminy.
 * — NIE PRZEKŁADAM temperatur z karty produktu na porady.
 * — NIE PISZĘ o gorzelnikach.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Lipsko liczy 4 914 mieszkańców (GUS, 31.12.2024)
 *   na 15,7 km², a cała gmina 9 978 osób na 135,3 km²;
 *   miasto leży nad Krępianką, na dwóch wzgórzach
 *   rozdzielonych jej doliną, i jest siedzibą powiatu,
 * — w 1589 roku Katarzyna Wolska z Krępskich, właścicielka
 *   wsi Lipa, uzyskała od Zygmunta III Wazy przywilej
 *   na dwa jarmarki rocznie — 25 stycznia i 13 sierpnia —
 *   oraz cotygodniowe targi w soboty; w 1591 roku wieś
 *   kupił Mikołaj Oleśnicki, a 18 marca 1613 roku jego
 *   dokument określił granice i powinności mieszczan:
 *   podatki od ziemi, domów i rzemieślników oraz obowiązek
 *   prac przy żniwach, naprawy grobli i gaszenia pożarów,
 * — w latach 1599–1614 zbudowano tu kamienny kościół,
 *   a herb fundatora, Dębno, stał się herbem miasta;
 *   Lipsko leżało na szlaku wołowym prowadzącym z Rusi
 *   Czerwonej do Wielkopolski i na Śląsk,
 * — w strukturze zasiewów gminy zboża zajmują 75,2%,
 *   a ziemniaki 11,8%; są tu sady truskawkowe i wiśniowe
 *   oraz uprawy kapusty i ogórków, a w gminie działają
 *   przetwórstwo owocowo-warzywne, mleczarnia, zakład
 *   mięsny, sześć piekarni i trzy kaszarnie,
 * — 18 maja 2015 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano „kiełbasę wiejską z Lipska" —
 *   cienką kiełbasę w jelicie wieprzowym, o pomarszczonej
 *   powierzchni, wędzoną dwuetapowo drewnem dębowo-bukowym
 *   lub olchowym i na końcu pieczoną, doprawianą czarnym
 *   pieprzem i czosnkiem, rozpoznawaną po „szarym oczku"
 *   w przekroju.
 */
export const LIPSKO: CityContent = {
  slug: "lipsko",
  h1: "Thermomix Lipsko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lipsko — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Lipsku nad Krępianką: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lipsko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lipsku w powiecie lipskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lipska nad Krępianką z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Lipsko"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Łagodne ciepło robi rzecz w środku, mocne — na powierzchni. Rzadko jedno załatwia oba.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lipsku – jak wygląda prezentacja?",
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
      id: "dwa-cieple",
      heading: "Dwa ciepła w jednym daniu",
      paragraphs: [
        "18 maja 2015 roku na ministerialną Listę Produktów Tradycyjnych wpisano kiełbasę wiejską z Lipska — cienką, w jelicie wieprzowym, o pomarszczonej powierzchni, doprawianą czarnym pieprzem i czosnkiem, rozpoznawaną po szarym oczku w przekroju.",
        "W jej opisie uderza jedna rzecz, na którą normalnie nikt nie zwraca uwagi. Nie ma tam jednej temperatury. Najpierw wędzenie w łagodnym cieple drewnem dębowo-bukowym lub olchowym, potem gorącym dymem, a na końcu jeszcze pieczenie. Trzy etapy, trzy różne ciepła, jeden wyrób.",
        "Zaznaczam od razu: to jest opis tego konkretnego produktu, a nie przepis ani instrukcja dla nikogo. Nie zamierzam nikomu podpowiadać, jak robić wędliny w domu, bo to nie jest moja dziedzina i nie udaję, że jest.",
        "Interesuje mnie sama zasada, bo ona wraca w całej kuchni domowej, tylko prawie nikt jej tak nie nazywa.",
        "Brzmi ona tak: łagodne ciepło robi rzecz w środku, a mocne robi rzecz na powierzchni. To są dwa różne zadania i rzadko da się je załatwić jednym ustawieniem.",
        "Znamy to wszyscy, tylko bez nazwy. Mięso wyjmuje się z lodówki wcześniej, obsmaża mocno, a potem dusi długo i wolno. Warzywa podsmaża się na początku, choć całe danie i tak będzie się gotować godzinę. Ciasto wchodzi do gorącego piekarnika, a potem temperaturę się zmniejsza. Zupę doprowadza się do wrzenia i natychmiast przestawia na mały ogień. Za każdym razem chodzi o to samo: dwie różne rzeczy po kolei, nie jedna naraz.",
        "I stąd najczęstszy błąd, jaki widzę — próba załatwienia obu naraz. Jeden mocny ogień przez cały czas. Wtedy powierzchnia jest gotowa dużo wcześniej niż środek: na talerz trafia coś, co wygląda świetnie, a w środku nie jest tym, czym miało być. Odwrotnie bywa równie często — wszystko robione łagodnie, przez co danie jest miękkie i blade, i nikt nie wie, dlaczego smakuje nijak.",
        "Kolejność nie jest stała i to też warto wiedzieć. Czasem najpierw mocno, żeby się zamknęło, a potem łagodnie, żeby doszło. Czasem odwrotnie — najpierw spokojnie, a mocne ciepło na sam koniec, dla skórki. Decyduje to, czy zależy nam bardziej na wnętrzu, czy na powierzchni.",
        "Najtrudniejsza jest część pomiędzy. Trzeba coś zrobić w konkretnym momencie: przełożyć, zmniejszyć, odkryć, poczekać. I to jest dokładnie ta czynność, o której się zapomina, bo dzieje się w środku innego zajęcia.",
        "Tu akurat urządzenie ma przewagę i mówię to bez owijania. Zmiana temperatury w trakcie gotowania nie wymaga stania przy garnku ani pilnowania minuty — program po prostu przechodzi dalej. Człowiek zapomina zmniejszyć ogień pod zupą; ustawienie nie zapomina. Przy daniach, które potrzebują dwóch etapów, to jest realna różnica, a nie hasło z ulotki.",
        "I od razu druga strona. Mocnego przypieczenia powierzchni Thermomix nie zrobi tak jak patelnia — do tego trzeba suchego, ostrego ciepła i kontaktu z gorącym dnem. Ten pierwszy, najbardziej „ogniowy” etap często i tak robi się osobno, na patelni, a dopiero potem wszystko wędruje do naczynia. To nie jest wada, którą trzeba ukrywać, tylko podział pracy, o którym lepiej wiedzieć wcześniej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lipsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć konkretnie danie dwuetapowe — takie, gdzie coś się najpierw obsmaża, a potem długo dusi — powiedz to przy umawianiu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lipsku"),
    sekcjaRaty("w Lipsku"),
    {
      id: "rodzina",
      heading: "Thermomix dla lipskiej rodziny",
      paragraphs: [
        "Lipsko liczy blisko pięć tysięcy mieszkańców na niespełna szesnastu kilometrach kwadratowych, a cała gmina prawie dziesięć tysięcy osób na stu trzydziestu pięciu kilometrach. Miasto leży nad Krępianką, na dwóch wzgórzach rozdzielonych jej doliną, i jest siedzibą powiatu. W 1589 roku Katarzyna Wolska z Krępskich, właścicielka wsi Lipa, uzyskała od Zygmunta III Wazy przywilej na dwa jarmarki rocznie — 25 stycznia i 13 sierpnia — oraz cotygodniowe targi w soboty. W 1591 roku wieś kupił Mikołaj Oleśnicki, a 18 marca 1613 roku jego dokument określił granice i powinności mieszczan: podatki od ziemi, domów i rzemieślników oraz obowiązek prac przy żniwach, naprawy grobli i gaszenia pożarów. W latach 1599–1614 zbudowano tu kamienny kościół, a herb fundatora, Dębno, stał się herbem miasta. Lipsko leżało na szlaku wołowym prowadzącym z Rusi Czerwonej do Wielkopolski i na Śląsk. Dziś w strukturze zasiewów gminy zboża zajmują ponad trzy czwarte powierzchni, a ziemniaki blisko dwanaście procent; są tu sady truskawkowe i wiśniowe oraz uprawy kapusty i ogórków, a w gminie działają przetwórstwo owocowo-warzywne, mleczarnia, zakład mięsny, sześć piekarni i trzy kaszarnie.",
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

  districtsHeading: "Do których części Lipska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na oba wzgórza po obu stronach doliny Krępianki i do domów przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Lipsko też przyjadę",
  nearbyParagraphs: [
    "Solec nad Wisłą, Ciepielów, Chotcza, Rzeczniów, Sienno, Zwoleń i Iłża są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zwoleń", "Iłża", "Radom", "Ostrowiec Świętokrzyski"],

  about: blokOMnie("do Lipska", "w Lipsku", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lipska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Lipsko nad Krępianką, siedzibę powiatu lipskiego na południu Mazowsza — nie o Lipsk w powiecie augustowskim ani o niemieckie Lipsk.",
    },
    ...faqWspolne("w Lipsku"),
    {
      question: "Dlaczego danie bywa gotowe z wierzchu, a w środku nie?",
      answer:
        "Bo mocne ciepło pracuje na powierzchni, a łagodne w środku — to dwa różne zadania i rzadko da się je załatwić jednym ustawieniem. Jeden mocny ogień przez cały czas zrobi ładną skórkę dużo wcześniej, niż środek zdąży dojść. Dlatego tyle dań ma dwa etapy: najpierw obsmażenie, potem długie duszenie.",
    },
    {
      question: "Czy Thermomix zastąpi patelnię przy obsmażaniu?",
      answer:
        "Nie. Mocne przypieczenie wymaga suchego, ostrego ciepła i kontaktu z gorącym dnem, a tego w naczyniu z mieszadłem nie ma. Pierwszy etap często robi się osobno na patelni. Za to przewaga urządzenia jest w drugiej części: zmiana temperatury w trakcie gotowania dzieje się sama, bez pilnowania momentu.",
    },
  ],

  geo: { lat: 51.1567, lng: 21.6575 },
};
