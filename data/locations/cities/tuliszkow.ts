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
 * TULISZKÓW — powiat turecki, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ TULISZKÓW NIE MA.
 * MIASTO: 3 005 mieszkańców (GUS 31.12.2024), 7,0 km²,
 *   gęstość 429,3 os./km².
 *   ⚠ [ZW — 3 005 / 7,0 = 429,3. ZGODNOŚĆ IDEALNA
 *   (0,0) — JEDYNA TAKA W TEJ FALI. PODAJĘ OBIE
 *   LICZBY BEZ ZASTRZEŻEŃ.]
 *   ⚠⚠ NAJMNIEJSZE LUDNOŚCIOWO MIASTO TEJ FALI.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 10 125 osób, 149,7 km², gęstość
 *   68 os./km².
 *   ⚠ [ZW — 10 125 / 149,7 = 67,6 → 68. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ INNE ŹRÓDŁA PODAJĄ 10 011 i 10 678 osób oraz
 *   powierzchnie 149,64 i 149,44 km². PODAJĘ TYLKO
 *   GUS Z DATĄ. ⚠⚠ RÓŻNIC NIE ROBIĘ KĄTEM — figura
 *   „cztery rejestry, cztery liczby" zajęta (Kleczew).
 * SOŁECTWA: 15 — ⚠⚠⚠ JEDNO ŹRÓDŁO WTÓRNE, GUS
 *   VADEMECUM DLA TULISZKOWA NIE POZYSKANE.
 *   PODAJĘ Z FORMUŁĄ „według dostępnych wykazów"
 *   ALBO NIE PODAJĘ WCALE. ⚠ DECYZJA: NIE PODAJĘ
 *   LICZBY SOŁECTW. Piszę „wszystkie wsie w gminie".
 *   ⚠⚠ LICZBY MIEJSCOWOŚCI (23 wg ewidencji) TEŻ
 *   NIE PODAJĘ — źródło wtórne formułuje to sprzecznie.
 *   WSIE: Dryja, Gadowskie Holendry, Grabowiec,
 *   Grzymiszew, Kiszewy, Krępa, Nowy Świat,
 *   Ogorzelczyn, Piętno, Ruda, Sarbicko, Smaszew,
 *   Tarnowa, Wielopole, Wróblina, Zadworna.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,0765 / 18,2956. Punkt gminy praktycznie
 *   identyczny — nie ma tu ryzyka pomyłki.
 *
 * ⚠⚠ ODMIANA:
 *   D. do TULISZKOWA · Ms. w TULISZKOWIE ·
 *   N. Tuliszkowem · C. Tuliszkowowi.
 *   ⚠ POTWIERDZENIA: „do Tuliszkowa",
 *   „w Tuliszkowie".
 *   Przymiotnik: TULISZKOWSKI — potwierdzony nazwą
 *   „Tuliszkowski Budżet Obywatelski". UŻYWAM.
 *   ⚠⚠⚠ BŁĄD 1: „do Tuliszkowu".
 *   ⚠⚠ BŁĄD 2: „tuliszkówski" z „ó" — w przymiotniku
 *   „ó" WYPADA.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — Innych Tuliszkowów w Polsce NIE USTALONO [NP].
 *   — W gminie: GADOWSKIE HOLENDRY — typ nazwy
 *     „Holendry" powtarza się w okolicy. WSPOMINAM.
 *   — NOWY ŚWIAT i TARNOWA — nazwy bardzo pospolite
 *     w skali kraju. WSPOMINAM.
 *
 * ⚠⚠ DATY:
 *   — NAJSTARSZY ZAPIS NAZWY: OK. 1362 R.
 *   — PRAWA MIEJSKIE: 1458 R.
 *   ⚠⚠⚠ KOŚCIOŁA Z OK. 1450 R. NIE WYMIENIAM —
 *     wątek wyznaniowy, a figura „instytucja młodsza
 *     od swoich ścian" ZAJĘTA (Puszczykowo).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — OBJAŚNIENIE DOPISANE PÓŹNIEJ:
 *   Nazwa TULISZKÓW bywa objaśniana ludowo jako
 *   „TU LIS CHOWA".
 *   NAJSTARSZY ZAPIS NAZWY — OK. 1362 R. — TEJ WERSJI
 *   NIE POTWIERDZA.
 *   Samo objaśnienie jest poświadczone dopiero
 *   OD KOŃCA XVIII WIEKU — czyli ponad czterysta lat
 *   po pierwszym zapisie nazwy.
 *   CZYLI: wyjaśnienie powstało PO fakcie, dopasowane
 *   do brzmienia, i przyjęło się lepiej niż zapis
 *   źródłowy.
 *   ⚠⚠⚠ HERBU NIE WYMIENIAM ANI NIE OPISUJĘ — to
 *   nośnik tego objaśnienia, ale heraldyka jest
 *   wykluczona w całym cyklu. PISZĘ WYŁĄCZNIE
 *   „objaśnienie poświadczone od końca XVIII wieku".
 *   ⚠⚠⚠ NIE PODAJĘ WŁASNEJ ETYMOLOGII NAZWY —
 *   nie znam jej i nie zgaduję. MÓWIĘ WPROST, ŻE
 *   PRAWDZIWEGO POCHODZENIA NIE ZNAM.
 *
 * KĄT: OBJAŚNIENIE DOPISANE PÓŹNIEJ
 * — o tym, że powód, który podajemy dla własnych
 * nawyków, zwykle powstał po nich. Kąt z Tuliszkowa:
 * ludowe objaśnienie nazwy jest o ponad czterysta lat
 * młodsze od najstarszego zapisu tej nazwy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nazwa bywa objaśniana jako „tu lis chowa",
 * — że najstarszy zapis nazwy pochodzi z około 1362 r.
 *   i tej wersji nie potwierdza, a samo objaśnienie
 *   jest poświadczone dopiero od końca XVIII wieku —
 *   ponad czterysta lat później. TO JEST RDZEŃ,
 * — ⚠⚠ że prawdziwego pochodzenia nazwy nie znam
 *   i nie zgaduję,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: powody, które
 *   podajemy dla swoich kuchennych nawyków, powstają
 *   zwykle po nawyku, nie przed nim,
 * — ⚠⚠ ŻE „ROBIĘ TAK, BO WYCHODZI LEPIEJ" BYWA
 *   WYJAŚNIENIEM DOPASOWANYM DO CZEGOŚ, CO ZACZĘŁO
 *   SIĘ ZUPEŁNIE PRZYPADKIEM — od tego, co było
 *   pod ręką,
 * — ⚠⚠ ŻE TO NIE ZNACZY, ŻE NAWYK JEST ZŁY. Znaczy
 *   tylko, że powód nie jest dowodem,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy jednym nawyku spróbuj
 *   raz inaczej i zobacz, czy naprawdę wychodzi gorzej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część takich objaśnień
 *   jest trafna — ludzie często wiedzą więcej, niż
 *   umieją nazwać. Sprawdzenie rozstrzyga, a nie
 *   podważanie z góry,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie rozstrzyga
 *   sporów o metodę i nie jest dowodem na nic. Robi
 *   tylko to, co mu ustawicie — ale robi to powtarzalnie,
 *   więc łatwiej porównać dwa sposoby.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR
 *   — kąt zajęty (Śmigiel). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam opowieść
 *   ZAWYŻAŁA LICZBĘ; TU opowieść DOKŁADA POWÓD tam,
 *   gdzie go nie było. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DATY PRZYJĘTEJ, NIE ZNALEZIONEJ — kąt
 *   zajęty (Krobia). Tam przyjęto DATĘ z braku
 *   dokumentu; tu dopisano POWÓD do istniejącej nazwy.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń).
 * — ⚠⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠⚠ ZERO NAZWY NADANEJ, KTÓRA PRZEGRAŁA
 *   Z UŻYWANĄ — kąt zajęty (Sompolno, TA SAMA FALA).
 *   ⚠⚠⚠ MUSZĘ UWAŻAĆ: tam ścierały się DWIE NAZWY;
 *   tu jest JEDNA NAZWA i dopisane do niej objaśnienie.
 *   NIE MIESZAM.
 * — ⚠⚠ ZERO NAZWISKA OD MIEJSCA — kąt zajęty
 *   (Miłosław).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠⚠ UWAGA: to sekcja o metodach kuchennych.
 *   WOLNO MI MÓWIĆ, ŻE WARTO SPRÓBOWAĆ INACZEJ,
 *   ALE NIE WOLNO PODAĆ ŻADNEJ KONKRETNEJ METODY,
 *   PROPORCJI ANI CZASU.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠⚠ SZCZEGÓLNIE: NIE PODWAŻAM ŻADNEGO NAWYKU,
 *   KTÓRY MÓGŁBY MIEĆ PODŁOŻE BEZPIECZEŃSTWA
 *   (mycie, chłodzenie, terminy). Piszę o nawykach
 *   smakowych i kolejnościowych.
 * — ⚠⚠⚠ ŻADNEGO OŚMIESZANIA LUDOWYCH OBJAŚNIEŃ
 *   ANI OSÓB, KTÓRE JE POWTARZAJĄ.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO
 *   HERALDYKI I HERBU · ZERO WĄTKU WYZNANIOWEGO
 *   I OBIEKTÓW SAKRALNYCH · ZERO WĄTKU MILITARNEGO ·
 *   ZERO ALKOHOLU · ZERO POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ etymologii nazwy.
 * — NIE TWIERDZĘ, że ludowe objaśnienie jest fałszywe
 *   — twierdzę tylko, że najstarszy zapis go nie
 *   potwierdza i że jest od niego o wieki młodsze.
 * — NIE PODAJĘ liczby sołectw ani miejscowości.
 * — NIE PODAJĘ największej wsi.
 * — NIE WYMIENIAM herbu ani obiektów sakralnych.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczb ludności gminy z innych źródeł
 *   niż GUS.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Tuliszków leży w powiecie tureckim, liczy 3 005
 *   mieszkańców (GUS, 31.12.2024) na 7,0 km², czyli
 *   429,3 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 10 125 osób
 *   na 149,7 km², czyli 68 osób na kilometr
 *   kwadratowy,
 * — nazwa Tuliszków bywa objaśniana ludowo jako
 *   „tu lis chowa"; najstarszy zapis nazwy pochodzi
 *   z około 1362 r. i tej wersji nie potwierdza,
 *   a samo objaśnienie jest poświadczone dopiero
 *   od końca XVIII wieku,
 * — prawa miejskie Tuliszków otrzymał w 1458 r.,
 * — w gminie leżą m.in. Grzymiszew, Sarbicko, Piętno,
 *   Kiszewy, Ogorzelczyn, Tarnowa, Wielopole, Krępa,
 *   Ruda, Smaszew, Grabowiec i Gadowskie Holendry.
 */
export const TULISZKOW: CityContent = {
  slug: "tuliszkow",
  h1: "Thermomix Tuliszków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tuliszków — cena i prezentacja",
  seoDescription:
    "Thermomix w Tuliszkowie w powiecie tureckim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tuliszków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tuliszkowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tuliszkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Tuliszków"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Objaśnienie nazwy jest od niej o czterysta lat młodsze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tuliszkowie – jak wygląda prezentacja?",
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
      id: "objasnienie-pozniej",
      heading: "Objaśnienie dopisane później",
      paragraphs: [
        "Nazwę Tuliszków objaśnia się czasem ludowo: „tu lis chowa”. Brzmi ładnie i pasuje do brzmienia nazwy niemal idealnie.",
        "Tylko że najstarszy zapis tej nazwy pochodzi z około 1362 roku i tej wersji nie potwierdza. Samo objaśnienie jest poświadczone dopiero od końca osiemnastego wieku — ponad czterysta lat po pierwszym zapisie. Prawdziwego pochodzenia nazwy nie znam i nie zamierzam go zgadywać; wiem tylko tyle, że wyjaśnienie powstało po fakcie, dopasowane do brzmienia, i przyjęło się lepiej niż to, co jest w źródle.",
        "Piszę o tym, bo w kuchni robimy to samo ze swoimi nawykami — i robimy to wszyscy.",
        "„Zawsze dodaję to na końcu, bo wychodzi lepiej.” „Kroję w tę stronę, bo tak się lepiej trzyma.” „Muszę to zrobić w tej kolejności, inaczej się nie uda.” Powód brzmi rzeczowo. Ale bardzo często nawyk zaczął się zupełnie inaczej: od tego, co akurat było pod ręką, od kuchni, w której było mało miejsca, od jednego dnia, kiedy coś wyszło i nikt już nie sprawdzał, czy z tego powodu.",
        "I zaraz dodam, co z tego NIE wynika. Nie wynika, że nawyk jest zły. Wynika tylko tyle, że powód nie jest dowodem — bo powstał po, a nie przed.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, w którym opowieść zawyżała liczbę wobec rejestrów. Tu opowieść niczego nie zawyża — ona dokłada powód tam, gdzie go w źródle nie ma. I osobno: pisałam też o dacie przyjętej z braku dokumentów; tam brakowało daty, a tu nazwa jest, tylko dorobiono jej wyjaśnienie.",
        "Ruch jest jeden i jest tani. Weźcie jeden taki nawyk i raz zróbcie inaczej. Nie po to, żeby go porzucić — po to, żeby zobaczyć, czy naprawdę wychodzi gorzej. W połowie przypadków nic się nie zmieni i to też jest wynik.",
        "Uczciwie o drugiej stronie, bo nie chcę podważać cudzej praktyki z góry. Część takich objaśnień jest trafna: ludzie często wiedzą o gotowaniu więcej, niż umieją nazwać, i wymyślają dla swojej wiedzy powody, które tylko brzmią naiwnie. Rozstrzyga sprawdzenie, a nie podejrzliwość. Dotyczy to zwłaszcza wszystkiego, co mogło się wziąć z ostrożności — takich nawyków nie ruszam i nie namawiam nikogo, żeby ruszał.",
        "I uczciwie o sprzęcie. Thermomix nie rozstrzyga sporów o metodę i nie jest dowodem na nic. Robi dokładnie to, co mu ustawicie — ale robi to za każdym razem tak samo, a przy porównywaniu dwóch sposobów powtarzalność jest jedyną rzeczą, która naprawdę pomaga.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tuliszkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co robicie „zawsze w ten sposób”. Nie po to, żeby to podważać — po to, żeby przy prezentacji nie robić tego inaczej bez uprzedzenia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tuliszkowie"),
    sekcjaRaty("w Tuliszkowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Tuliszkowa",
      paragraphs: [
        "Tuliszków leży w powiecie tureckim i liczy 3 005 mieszkańców (GUS, 31.12.2024) na siedmiu kilometrach kwadratowych, czyli czterystu dwudziestu dziewięciu na kilometr — to jedyne miasto w tej okolicy, w którym liczba ze źródła zgadza się z ilorazem co do dziesiątej części, więc podaję obie bez żadnych zastrzeżeń. Cała gmina miejsko-wiejska to 10 125 osób na 149,7 kilometra kwadratowego, czyli sześćdziesiąt osiem osób na kilometr. Liczby sołectw nie podaję, bo mam ją tylko z jednego źródła wtórnego i nie udało mi się jej potwierdzić. Najstarszy zapis nazwy pochodzi z około 1362 roku, a prawa miejskie Tuliszków otrzymał w 1458. W gminie leżą między innymi Grzymiszew, Sarbicko, Piętno, Kiszewy, Ogorzelczyn, Tarnowa, Wielopole, Krępa i Ruda.",
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

  districtsHeading: "Do których części Tuliszkowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie. Nazywają się: Dryja, Gadowskie Holendry, Grabowiec, Grzymiszew, Kiszewy, Krępa, Nowy Świat, Ogorzelczyn, Piętno, Ruda, Sarbicko, Smaszew, Tarnowa, Wielopole, Wróblina i Zadworna. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Tuliszkowa” i „w Tuliszkowie”, a nie „do Tuliszkowu”; przymiotnik brzmi „tuliszkowski” — bez „ó”, które wypada z odmiany. I praktyczna: w gminie są nazwy bardzo pospolite w skali kraju, jak Nowy Świat i Tarnowa, więc przy adresie warto podać gminę.",
  ],
  districts: [],

  nearbyHeading: "Poza Tuliszków też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Turku, Konina, Rychwała, Dobrej, Goliny i Stawiszyna — wszędzie bezpłatnie, tak samo jak w samym Tuliszkowie.",
  ],
  nearbyTowns: ["Turek", "Konin", "Rychwał", "Dobra", "Golina", "Stawiszyn"],

  about: blokOMnie("do Tuliszkowa", "w Tuliszkowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tuliszkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Tuliszkowa” i „w Tuliszkowie”, a nie „do Tuliszkowu”; przymiotnik brzmi „tuliszkowski”, bez „ó”. I praktyczna: w gminie są nazwy pospolite w skali kraju, jak Nowy Świat czy Tarnowa, więc przy adresie warto dopisać gminę.",
    },
    ...faqWspolne("w Tuliszkowie"),
    {
      question: "Mam w kuchni nawyki, których nie umiem uzasadnić. Czy warto je zmieniać?",
      answer:
        "Warto je sprawdzić, niekoniecznie zmieniać — a Tuliszków dobrze pokazuje, skąd biorą się uzasadnienia. Nazwę tego miasta objaśnia się czasem jako „tu lis chowa”; najstarszy zapis nazwy pochodzi z około 1362 roku i tej wersji nie potwierdza, a samo objaśnienie jest poświadczone dopiero od końca osiemnastego wieku, czyli ponad czterysta lat później. Wyjaśnienie powstało po fakcie i przyjęło się lepiej niż źródło. Z kuchennymi nawykami bywa tak samo: „dodaję na końcu, bo wychodzi lepiej” to często powód dorobiony do czegoś, co zaczęło się przypadkiem. To nie znaczy, że nawyk jest zły — znaczy, że powód nie jest dowodem. Weźcie jeden i raz zróbcie inaczej. Zastrzeżenie: nawyków, które mogły się wziąć z ostrożności, nie ruszam.",
    },
    {
      question: "Czy Thermomix zrobi to tak samo dobrze jak ja ręcznie?",
      answer:
        "W jednych rzeczach tak, w innych nie, i wolę to rozróżnić. Tam, gdzie liczy się utrzymanie temperatury i równe mieszanie przez dłuższy czas, urządzenie jest po prostu dokładniejsze od człowieka, bo nie odchodzi od garnka. Tam, gdzie liczy się przyrumienienie, zapieczenie albo wyczucie w dłoni, patelnia i piekarnik dalej wygrywają i nie będę twierdzić inaczej. Jedną rzecz urządzenie daje zawsze: powtarzalność — a to jedyne, co naprawdę pomaga, gdy chcecie porównać dwa sposoby robienia tego samego.",
    },
  ],

  geo: { lat: 52.0765, lng: 18.2956 },
};
