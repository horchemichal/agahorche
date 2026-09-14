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
 * BIAŁOBRZEGI — powiat białobrzeski, woj. mazowieckie.
 * MIASTO 6 398 (GUS 31.12.2024), 7,5 km², 851,9 os./km².
 * Gmina: 9 756 osób, 77,7 km². Leży nad Pilicą.
 *
 * ⚠⚠ HOMONIMY — POWAŻNE:
 * — BIAŁOBRZEGI to także gmina wiejska w powiecie łańcuckim
 *   (woj. PODKARPACKIE), z myląco podobnym adresem strony,
 * — WSIE o tej nazwie są też w samym mazowieckiem: gmina
 *   CHOTCZA (powiat LIPSKI — czyli tuż obok drugiego miasta
 *   z tej fali), gmina Sterdyń i gmina Bodzanów.
 *   ⚠ FAQ MUSI TO ROZRÓŻNIAĆ. TWARDA GRANICA.
 * Odmiana: „do Białobrzegów", „w Białobrzegach", „białobrzeski".
 *
 * ⚠ DATA LOKACJI — ROZBIEŻNOŚĆ ŹRÓDEŁ:
 *   starostwo i lokalne towarzystwo kulturalne podają
 *   2 WRZEŚNIA 1540 (Zygmunt Stary, prawo magdeburskie,
 *   dla osady BRZEGI), angielska Wikipedia podaje 1541.
 *   ⚠ PISZĘ 1540 — za źródłami lokalnymi, które obchodziły
 *   480-lecie w 2020 r. NIE PODAJĘ DNIA ANI MIESIĄCA.
 *
 * FAKTY UŻYTE — HISTORIA:
 * — przywilej z 1540 r. dał osadzie DWA JARMARKI ROCZNIE
 *   i COTYGODNIOWE TARGI W PONIEDZIAŁKI oraz dwunastoletnie
 *   zwolnienie z podatków miejskich,
 * — w 1613 r. sejm uznał PILICĘ ZA RZEKĘ ŻEGLOWNĄ.
 *
 * DZIŚ: powiat rolniczo-sadowniczo-warzywniczy; w mieście
 * i okolicy przetwórstwo owocowo-warzywne, produkcja napojów
 * i produkcja obuwia damskiego; węzeł S7 z drogą krajową 48.
 * ⚠ POWIAT BIAŁOBRZESKI jest — obok przysuskiego
 *   i radomskiego — jednym z TRZECH NAJWIĘKSZYCH REJONÓW
 *   UPRAWY PAPRYKI POD OSŁONAMI W POLSCE.
 *   ⚠⚠ KĄT „PAPRYKA/OSTROŚĆ" JEST ZAJĘTY
 *   (krosno-odrzanskie.ts). PODAJĘ TO JAKO SUCHY FAKT
 *   W BLOKU O MIEŚCIE. TWARDA GRANICA.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK wpisu z gminy
 *   Białobrzegi. ⚠ PUŁAPKA: „papryka przytycka" (wpis
 *   28.07.2011) pochodzi z gminy PRZYTYK w powiecie
 *   RADOMSKIM — NIE Z BIAŁOBRZEGÓW, mimo że paprykę
 *   uprawia się tu masowo. NIE WYMIENIAM JEJ.
 * ⚠ NAZW OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *   (BIP podaje wyłącznie 10 sołectw gminy.)
 *
 * KĄT: PONIEDZIAŁEK — dzień, w którym plan spotyka się
 * z rzeczywistością.
 * Kąt od przywileju z 1540 r., który wyznaczył tutejszy targ
 * właśnie na poniedziałki. W kuchni poniedziałek jest dniem
 * osobnym: weekendowy zapał już minął, a tydzień dopiero
 * się zaczyna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że poniedziałek jest w kuchni najtrudniejszym dniem
 *   tygodnia i prawie nikt tego nie nazywa,
 * — DLACZEGO: bo w weekend gotuje się z zapałem i z czasem,
 *   a w poniedziałek wraca się później, niż się planowało,
 * — ŻE POSTANOWIENIA ROBI SIĘ W NIEDZIELĘ, A SPRAWDZAJĄ
 *   SIĘ W PONIEDZIAŁEK — i że to jest właściwy test każdego
 *   pomysłu na „od jutra gotujemy inaczej",
 * — ŻE W PONIEDZIAŁEK LODÓWKA JEST NAJPEŁNIEJSZA
 *   I NAJMNIEJ UŻYTECZNA naraz: są resztki z weekendu,
 *   ale nie ma z nich obiadu,
 * — ⚠⚠ PRAKTYCZNIE: ŻE PONIEDZIAŁEK TO NIE JEST DZIEŃ
 *   NA NOWY PRZEPIS. Nowego dania próbuje się w dniu,
 *   w którym można je zepsuć. TO JEST NAJUŻYTECZNIEJSZE
 *   ZDANIE W CAŁYM TEKŚCIE,
 * — ŻE JEDNA RZECZ ZROBIONA W NIEDZIELĘ ZMIENIA CAŁY
 *   PONIEDZIAŁEK: ugotowana baza, umyte i pokrojone
 *   warzywa, jeden zapasowy pojemnik — ale JEDNA, nie pięć,
 *   bo pięć nigdy nie powstaje,
 * — ŻE PONIEDZIAŁKOWY TARG MIAŁ SENS DOKŁADNIE TAKI SAM:
 *   zaopatrzenie na początku tygodnia, a nie na końcu,
 * — UCZCIWIE O SPRZĘCIE: urządzenie nie skraca drogi
 *   z pracy i nie doda energii. Robi jedną rzecz —
 *   pozwala, żeby obiad powstawał, kiedy człowiek
 *   zajmuje się czymś innym. W poniedziałek to jest akurat
 *   ta różnica, która decyduje,
 * — ⚠ ALE MÓWIĘ TEŻ: są poniedziałki, w które nic się nie
 *   ugotuje i to jest normalne. NIE SPRZEDAJĘ POCZUCIA WINY.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH GOTOWYCH PLANÓW TYGODNIA I JADŁOSPISÓW —
 *   kąt „PLANOWANIE TYGODNIA" jest ZAJĘTY
 *   (ostrow-wielkopolski.ts). TUTAJ MOWA O JEDNYM DNIU.
 * — ⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI: ile dni
 *   stoi ugotowane, co wolno odgrzewać. TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ RETORYKI WSTYDU I DYSCYPLINY.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO wątku utraty praw miejskich w 1870 r. i jej
 *   przyczyny; ZERO tematów powstańczych i zaborowych.
 * — ZERO Pilicy jako granicy między zaborcami i jako linii
 *   frontu. TWARDA GRANICA.
 * — ZERO wzmianek o zakładzie produkującym obuwie
 *   dla służb mundurowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PLANOWANIE TYGODNIA" (Ostrów Wielkopolski) dotyczy
 *   UKŁADANIA PLANU. Tutaj chodzi o DZIEŃ, W KTÓRYM PLAN
 *   SIĘ SPRAWDZA ALBO NIE.
 * — „TRZECI TYDZIEŃ" (Konin) dotyczy MOMENTU, W KTÓRYM
 *   MIJA PIERWSZY ZAPAŁ PO ZAKUPIE.
 * — „TARG" (Tuszyn) dotyczy KUPOWANIA NA TARGU.
 * — „DZIEŃ, KTÓRY ZACZYNA SIĘ O CZWARTEJ" (Rzgów) dotyczy
 *   PRACY W HANDLU.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ODKŁADANIA
 *   PORCJI DO ZAMRAŻARKI.
 * TUTAJ chodzi o JEDEN KONKRETNY DZIEŃ TYGODNIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MYLĘ Białobrzegów mazowieckich z podkarpackimi
 *   ani z wsiami o tej nazwie.
 * — NIE PRZYPISUJĘ Białobrzegom papryki przytyckiej.
 * — NIE PODAJĘ dnia i miesiąca lokacji ani daty 1541.
 * — NIE PODAJĘ nazw osiedli.
 * — NIE UKŁADAM jadłospisu na tydzień.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Białobrzegi liczą 6 398 mieszkańców (GUS, 31.12.2024)
 *   na 7,5 km², czyli ponad 850 osób na kilometr
 *   kwadratowy, a cała gmina 9 756 osób na 77,7 km²;
 *   miasto leży nad Pilicą i jest siedzibą powiatu,
 * — w 1540 roku Zygmunt Stary nadał osadzie Brzegi prawa
 *   miejskie na prawie magdeburskim wraz z przywilejem
 *   dwóch jarmarków rocznie i cotygodniowych targów
 *   w poniedziałki oraz dwunastoletnim zwolnieniem
 *   z podatków miejskich,
 * — w 1613 roku sejm uznał Pilicę za rzekę żeglowną,
 * — powiat białobrzeski jest dziś rejonem rolniczym,
 *   sadowniczym i warzywniczym — obok przysuskiego
 *   i radomskiego jednym z trzech największych rejonów
 *   uprawy papryki pod osłonami w Polsce — a w mieście
 *   i okolicy działa przetwórstwo owocowo-warzywne.
 */
export const BIALOBRZEGI: CityContent = {
  slug: "bialobrzegi",
  h1: "Thermomix Białobrzegi – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Białobrzegi — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Białobrzegach nad Pilicą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Białobrzegi — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białobrzegach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białobrzegów z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Białobrzegi"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Poniedziałek to nie jest dzień na nowy przepis.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białobrzegach – jak wygląda prezentacja?",
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
      id: "poniedzialek",
      heading: "Poniedziałek — dzień, w którym plan spotyka się z rzeczywistością",
      paragraphs: [
        "Przywilej z 1540 roku, którym Zygmunt Stary nadał osadzie Brzegi prawa miejskie, dał jej dwa jarmarki rocznie i cotygodniowe targi — w poniedziałki. Nie w sobotę, nie w piątek. Na początku tygodnia, kiedy zaopatrzenie ma sens, a nie na jego końcu, kiedy trzeba już tylko przetrwać.",
        "Mówię o tym, bo poniedziałek jest w kuchni dniem osobnym i najtrudniejszym, a prawie nikt tego głośno nie nazywa.",
        "W weekend gotuje się inaczej. Jest czas, jest zapał, jest ochota na coś nowego i zwykle ktoś, komu chce się to zjeść. W niedzielę wieczorem rodzi się postanowienie, że od jutra będzie porządek. A w poniedziałek wraca się do domu później, niż się planowało, i cały pomysł zderza się z prawdziwą godziną, prawdziwym zmęczeniem i prawdziwą lodówką.",
        "Lodówka jest w poniedziałek najpełniejsza i najmniej użyteczna naraz. Są w niej resztki z weekendu, ale nie ma z nich obiadu. Jest pół czegoś, ćwiartka czegoś innego i słoik, którego nikt nie otworzy.",
        "Stąd najbardziej praktyczna rzecz, jaką mam tu do powiedzenia: poniedziałek to nie jest dzień na nowy przepis. Nowego dania próbuje się wtedy, kiedy można je zepsuć i nikomu nic się nie stanie. Robienie pierwszy raz czegoś nieznanego w najgorszy dzień tygodnia to najkrótsza droga do wniosku, że „to nie dla mnie” — choć tak naprawdę nie o danie chodziło, tylko o dzień.",
        "Druga rzecz: jedna czynność zrobiona w niedzielę zmienia cały poniedziałek. Ugotowana baza, umyte i pokrojone warzywa, jeden odłożony pojemnik. Ale jedna, nie pięć. Plany na pięć rzeczy nigdy nie powstają, a potem służą wyłącznie do tego, żeby mieć o sobie gorsze zdanie.",
        "I trzecia, mniej oczywista: jeśli coś w domu ma się zmienić na stałe, to poniedziałek jest właściwym sprawdzianem. Nie niedziela, kiedy wszystko jest łatwe. Pomysł, który działa w poniedziałek, działa w ogóle.",
        "Teraz uczciwie o sprzęcie, bo tu nie ma miejsca na obietnice. Thermomix nie skróci drogi z pracy i nie doda nikomu energii. Nie zrobi zakupów i nie wymyśli, co ugotować.",
        "Robi jedną rzecz i akurat w poniedziałek jest to ta właściwa: pozwala, żeby obiad powstawał, kiedy człowiek zajmuje się czymś innym. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc te czterdzieści minut, w których normalnie trzeba by stać przy garnku, można spędzić z dzieckiem, z praniem albo siedząc. To nie jest rewolucja, tylko przesunięcie uwagi — ale w najgorszy dzień tygodnia przesunięcie uwagi jest dokładnie tym, czego brakuje.",
        "I na koniec rzecz, której nie powie żadna reklama: są poniedziałki, w które nic się nie ugotuje. Zdarza się to wszystkim i nie oznacza niczego poza tym, że był ciężki dzień. Nie mam zamiaru sprzedawać nikomu poczucia winy razem z urządzeniem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białobrzegach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy zrobiły coś, co realnie da się powtórzyć w tygodniu, a nie danie od święta — powiedz to przy umawianiu. Chętnie tak poprowadzę spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białobrzegach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla białobrzeskiej rodziny",
      paragraphs: [
        "Białobrzegi liczą blisko sześć i pół tysiąca mieszkańców na siedmiu i pół kilometrach kwadratowych, czyli ponad osiemset pięćdziesiąt osób na kilometr — gęsto jak na miasto tej wielkości. Cała gmina to niespełna dziesięć tysięcy osób na niemal osiemdziesięciu kilometrach. Miasto leży nad Pilicą i jest siedzibą powiatu. W 1540 roku Zygmunt Stary nadał osadzie Brzegi prawa miejskie na prawie magdeburskim wraz z przywilejem dwóch jarmarków rocznie i cotygodniowych targów w poniedziałki oraz dwunastoletnim zwolnieniem z podatków miejskich, a w 1613 roku sejm uznał Pilicę za rzekę żeglowną. Dziś powiat białobrzeski jest rejonem rolniczym, sadowniczym i warzywniczym — obok przysuskiego i radomskiego jednym z trzech największych rejonów uprawy papryki pod osłonami w Polsce — a w mieście i okolicy działa przetwórstwo owocowo-warzywne.",
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

  districtsHeading: "Do których części Białobrzegów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od placu Zygmunta Starego po osiedla przy wylotach dróg i domy nad Pilicą. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Białobrzegi też przyjadę",
  nearbyParagraphs: [
    "Wyśmierzyce, Stromiec, Stara Błotnica, Promna, Radzanów, Warka i Grójec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Warka", "Grójec", "Radom", "Kozienice"],

  about: blokOMnie("do Białobrzegów", "w Białobrzegach", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Białobrzegów bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Białobrzegi nad Pilicą, siedzibę powiatu białobrzeskiego — nie o gminę Białobrzegi w podkarpackiem ani o wsie tej nazwy w innych częściach Mazowsza.",
    },
    ...faqWspolne("w Białobrzegach"),
    {
      question: "Od czego zacząć, jeśli w tygodniu brakuje czasu na gotowanie?",
      answer:
        "Od jednej rzeczy zrobionej wcześniej, nie od pięciu. Jedna ugotowana baza albo jeden pojemnik warzyw umytych i pokrojonych w niedzielę zmienia cały poniedziałek. Plany na pięć rzeczy zwykle nie powstają i służą już tylko do tego, żeby mieć o sobie gorsze zdanie.",
    },
    {
      question: "Kiedy najlepiej próbować nowego przepisu?",
      answer:
        "Nie w poniedziałek i w ogóle nie w najgorszy dzień tygodnia. Nowego dania próbuje się wtedy, kiedy można je zepsuć bez konsekwencji. Pierwszy raz robiony pod presją czasu kończy się zwykle wnioskiem, że „to nie dla mnie” — choć zawiniło nie danie, tylko wybrany moment.",
    },
  ],

  geo: { lat: 51.65, lng: 20.95 },
};
