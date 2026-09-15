import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * WĄBRZEŹNO — powiat wąbrzeski, woj. kujawsko-pomorskie,
 * ZIEMIA CHEŁMIŃSKA.
 * GMINA MIEJSKA. 12 820 mieszkańców (GUS 31.12.2024),
 * 8,5 km².
 * ⚠⚠⚠ NIE ISTNIEJE „GMINA WIEJSKA WĄBRZEŹNO".
 *   Z DNIEM 1 STYCZNIA 2017 R. OKALAJĄCA GMINA WIEJSKA
 *   ZMIENIŁA NAZWĘ NA GMINĘ RYŃSK (8 302 osoby),
 *   Z SIEDZIBĄ NADAL W WĄBRZEŹNIE.
 *   ⚠ polskawliczbach.pl I CZĘŚĆ SERWISÓW NADAL UŻYWAJĄ
 *   STAREJ ETYKIETY — NIE POWTARZAM JEJ.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ ODMIANA: D. WĄBRZEŹNA, Ms. W WĄBRZEŹNIE,
 *   przym. WĄBRZESKI (powiat wąbrzeski — NIE „wąbrzeźnieński").
 *
 * HISTORIA — FAKTY UŻYTE:
 * — miasto ziemi chełmińskiej, siedziba powiatu wąbrzeskiego,
 *   położone między jeziorami (Zamkowe, Frydek, Sicińskie),
 * — ⚠⚠ RDZEŃ KĄTA — STAN Z 1858 R.:
 *   W MIEŚCIE LICZĄCYM 331 DOMÓW PRACOWAŁO
 *   DZIESIĘĆ WIATRAKÓW.
 *   ⚠ TO JEST NIEZWYKŁA PROPORCJA: jeden wiatrak
 *   na mniej więcej trzydzieści trzy domy.
 *   Mielenie było wąskim gardłem całego łańcucha:
 *   zboże rosło samo, chleb piekło się w każdym domu,
 *   ale ZMIELIĆ mógł tylko młyn — i dlatego młynów
 *   musiało być dziesięć.
 * — ⚠ POD KONIEC XVII W. JEDNO ŹRÓDŁO PODAJE
 *   78 DOMÓW I 29 BROWARÓW. ⚠⚠ LICZBA JEST NIEPEWNA
 *   I POCHODZI Z JEDNEGO ŹRÓDŁA — NIE UŻYWAM JEJ
 *   W TEKŚCIE. TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: nie ustalono produktu
 *   z Wąbrzeźna jako miejscowości pochodzenia.
 *   NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: WĄSKIE GARDŁO — jeden etap, który wstrzymuje
 * cały obiad.
 * Kąt od dziesięciu wiatraków przy 331 domach: miasto
 * zbudowało dziesięć młynów nie dlatego, że lubiło młyny,
 * tylko dlatego, że mielenie było jedynym miejscem,
 * w którym wszystko się korkowało. Każdy obiad ma taki
 * jeden etap.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1858 roku w Wąbrzeźnie liczącym 331 domów
 *   pracowało dziesięć wiatraków — jeden na mniej więcej
 *   trzydzieści trzy domy,
 * — ŻE TO NIE BYŁA MODA, TYLKO ARYTMETYKA: zboże rosło
 *   samo, chleb piekło się w domu, ale zmielić mógł tylko
 *   młyn. Mielenie było wąskim gardłem i dlatego
 *   zwielokrotniono dokładnie ten jeden etap,
 * — ⚠⚠ ŻE KAŻDY OBIAD MA SWOJE WĄSKIE GARDŁO I ŻE PRAWIE
 *   NIKT GO ŚWIADOMIE NIE SZUKA — TO JEST RDZEŃ TEKSTU,
 * — JAK JE ZNALEŹĆ — TEST JEST PROSTY: to ten etap,
 *   na który wszystko inne czeka. Nie ten najdłuższy,
 *   tylko ten, po którym dopiero można ruszyć dalej,
 * — TYPOWE WĄSKIE GARDŁA DOMOWEGO OBIADU, KONKRETNIE:
 *   — KROJENIE, gdy wszystko trzeba pokroić, zanim
 *     cokolwiek trafi do garnka,
 *   — ZAGOTOWANIE DUŻEGO GARNKA WODY, bo makaron
 *     nie ruszy wcześniej,
 *   — ROZGRZANIE PIEKARNIKA, o którym przypominamy sobie
 *     wtedy, gdy blacha już stoi,
 *   — WOLNE MIEJSCE NA BLACIE, które bywa prawdziwym
 *     wąskim gardłem częściej, niż ktokolwiek przyzna,
 * — ⚠⚠ ŻE ROZWIĄZANIEM NIE JEST ROBIENIE TEGO SZYBCIEJ,
 *   TYLKO PRZESUNIĘCIE TEGO NA POCZĄTEK. Woda nastawiona
 *   jako pierwsza rzecz i piekarnik włączony przed
 *   otwarciem lodówki likwidują dwa najczęstsze korki
 *   w domowej kuchni — i nie kosztują ani minuty więcej,
 * — ŻE DRUGIE ROZWIĄZANIE TO ZWIELOKROTNIENIE, dokładnie
 *   jak w mieście z dziesięcioma wiatrakami: dwa garnki
 *   zamiast jednego, dwie deski zamiast jednej,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TU JEST NAJWAŻNIEJSZA
 *   RZECZ TEJ STRONY: Thermomix nie usuwa wąskiego gardła.
 *   On je PRZESUWA. Kiedy urządzenie gotuje samo
 *   i miesza samo, korek przestaje być przy garnku,
 *   a robi się przy naczyniu — bo jest jedno i kolejne
 *   etapy ustawiają się do niego w kolejkę.
 *   ⚠ CO Z TEGO WYNIKA PRAKTYCZNIE: kolejność etapów
 *   zaczyna mieć znaczenie większe niż wcześniej,
 *   a rzeczy suche robi się przed mokrymi.
 *   ⚠ ODSYŁAM DO STRONY O MYCIU MIĘDZY ETAPAMI.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ANI RAZU „GMINA WIEJSKA WĄBRZEŹNO".
 *   Okalająca gmina to GMINA RYŃSK od 1.01.2017.
 * — ⚠⚠ ZERO LICZBY 29 BROWARÓW — źródło niepewne.
 * — ⚠⚠ ZERO PIWA I ZERO ZACHĘTY DO ALKOHOLU.
 * — ⚠ ZERO ROZWIJANIA MŁYNARSTWA JAKO RZEMIOSŁA I ZERO
 *   MĄKI JAKO TEMATU — wiatraki są tu WYŁĄCZNIE
 *   ilustracją wąskiego gardła.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych.
 * — ZERO genezy zamku i ZERO oblężeń.
 * — ZERO bezrobocia i wyludniania.
 * — ZERO nazw firm.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PLANOWANIE TYGODNIA" dotyczy UKŁADANIA MENU
 *   NA KILKA DNI.
 * — „CZY MYĆ NACZYNIE MIĘDZY ETAPAMI" (Susz) dotyczy
 *   MYCIA W TRAKCIE. ⚠ TO JEST NAJBLIŻSZY KĄT —
 *   tam chodzi o MYCIE, tutaj o KOLEJNOŚĆ I O TO,
 *   GDZIE SIĘ KORKUJE. Odsyłam tam wprost.
 * — „SZUFLADA" (Lipno) dotyczy LICZBY NARZĘDZI.
 * — „ZA DUŻE NACZYNIE" (Żnin) dotyczy ROZMIARU NACZYNIA.
 * TUTAJ chodzi o JEDEN ETAP, NA KTÓRY CZEKAJĄ WSZYSTKIE
 * POZOSTAŁE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „gmina wiejska Wąbrzeźno" — to gmina Ryńsk.
 * — NIE PODAJĘ liczby browarów z XVII w.
 * — NIE PODAJĘ produktu z listy tradycyjnej — nie ustalono.
 * — NIE ROZWIJAM młynarstwa ani mąki.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wąbrzeźno jest gminą miejską na ziemi chełmińskiej,
 *   siedzibą powiatu wąbrzeskiego, i liczy 12 820
 *   mieszkańców (GUS, 31.12.2024) na ośmiu i pół kilometra
 *   kwadratowego; miasto leży między jeziorami, a okalająca
 *   je gmina nosi od 1 stycznia 2017 roku nazwę Ryńsk
 *   i ma siedzibę w Wąbrzeźnie,
 * — w 1858 roku w mieście liczącym 331 domów pracowało
 *   dziesięć wiatraków.
 */
export const WABRZEZNO: CityContent = {
  slug: "wabrzezno",
  h1: "Thermomix Wąbrzeźno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wąbrzeźno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Wąbrzeźnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wąbrzeźno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wąbrzeźnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wąbrzeźna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Wąbrzeźno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wąskie gardło to nie najdłuższy etap. To ten, na który czekają wszystkie inne.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wąbrzeźnie – jak wygląda prezentacja?",
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
      id: "waskie-gardlo",
      heading: "Dziesięć wiatraków na trzysta trzydzieści jeden domów",
      paragraphs: [
        "W 1858 roku Wąbrzeźno miało trzysta trzydzieści jeden domów i dziesięć wiatraków. Jeden wiatrak na mniej więcej trzydzieści trzy domy. Kiedy pierwszy raz zobaczyłam tę proporcję, wydała mi się absurdalna — dopóki nie pomyślałam, po co one wszystkie stały.",
        "To nie była moda na wiatraki. To była arytmetyka. Zboże rosło samo, chleb piekło się w każdym domu, ale zmielić mogło tylko jedno miejsce. Mielenie było punktem, w którym cały łańcuch się korkował — i dlatego miasto zwielokrotniło dokładnie ten jeden etap, a nie wszystkie po kolei.",
        "Każdy domowy obiad ma taki punkt. Prawie nikt go świadomie nie szuka.",
        "Test jest prosty: to nie ten etap, który trwa najdłużej, tylko ten, na który wszystko inne czeka. Pieczeń w piekarniku trwa długo, ale nic jej nie blokuje — w tym czasie da się zrobić trzy inne rzeczy. Wąskie gardło to moment, po którym dopiero można ruszyć dalej.",
        "W zwykłej kuchni są to zwykle cztery rzeczy. Krojenie, kiedy wszystko trzeba pokroić, zanim cokolwiek trafi do garnka. Zagotowanie dużego garnka wody, bo makaron nie ruszy ani sekundy wcześniej. Rozgrzanie piekarnika, o którym przypominamy sobie dokładnie wtedy, gdy blacha już stoi na blacie. I wolne miejsce na blacie, które jest prawdziwym wąskim gardłem znacznie częściej, niż ktokolwiek chce przyznać.",
        "A teraz rzecz najważniejsza: rozwiązaniem nie jest robienie tego szybciej. Rozwiązaniem jest przesunięcie tego na początek.",
        "Woda nastawiona jako pierwsza czynność, jeszcze przed otwarciem lodówki. Piekarnik włączony w tej samej minucie. Dwa ruchy, które nie kosztują ani jednej minuty więcej, a likwidują dwa najczęstsze korki w domowym gotowaniu. To nie jest żadna technika kulinarna — to jest po prostu kolejność.",
        "Drugie rozwiązanie jest dokładnie wąbrzeskie: zwielokrotnić właśnie ten jeden etap. Dwie deski zamiast jednej, gdy krojenia jest dużo. Dwa garnki zamiast jednego wielkiego. Miasto z dziesięcioma wiatrakami doszło do tego samego wniosku sto siedemdziesiąt lat temu.",
        "I uczciwie o sprzęcie, bo to jest najciekawsza część i zwykle się o niej nie mówi. Thermomix nie usuwa wąskiego gardła. On je przesuwa.",
        "Kiedy urządzenie gotuje samo i miesza samo, korek przestaje być przy garnku — i robi się przy naczyniu. Bo naczynie jest jedno, a kolejne etapy ustawiają się do niego w kolejkę. To znaczy, że kolejność zaczyna mieć większe znaczenie niż wcześniej: rzeczy suche robi się przed mokrymi, bo wtedy między etapami nie trzeba nic myć. O samym myciu w trakcie gotowania pisałam osobno, ale zasada bierze się właśnie stąd.",
        "Nie jest to wada. Jest to po prostu inne miejsce korka — i lepiej wiedzieć, gdzie ono jest, niż odkrywać to w środę o osiemnastej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wąbrzeźnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, przejdziemy na spotkaniu Twój typowy obiad krok po kroku i poszukamy w nim tego jednego etapu, na który czeka reszta.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wąbrzeźnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wąbrzeskiej rodziny",
      paragraphs: [
        "Wąbrzeźno jest gminą miejską na ziemi chełmińskiej i siedzibą powiatu wąbrzeskiego; liczy blisko trzynaście tysięcy mieszkańców na ośmiu i pół kilometra kwadratowego, a miasto leży między jeziorami. Okalająca je gmina nosi od 1 stycznia 2017 roku nazwę Ryńsk i ma siedzibę w Wąbrzeźnie. W 1858 roku w mieście liczącym trzysta trzydzieści jeden domów pracowało dziesięć wiatraków — jeden na mniej więcej trzydzieści trzy domy.",
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

  districtsHeading: "Do których części Wąbrzeźna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od centrum i okolic jezior po osiedla przy wylotach dróg. Dojeżdżam też do wsi w okolicznej gminie Ryńsk.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Wąbrzeźno też przyjadę",
  nearbyParagraphs: [
    "Kowalewo Pomorskie, Golub-Dobrzyń, Jabłonowo Pomorskie, Radzyń Chełmiński, Chełmża, Brodnica i Chełmno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kowalewo Pomorskie", "Golub-Dobrzyń", "Jabłonowo Pomorskie", "Chełmża"],

  about: blokOMnie("do Wąbrzeźna", "w Wąbrzeźnie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wąbrzeźna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Wąbrzeźno to gmina miejska i siedziba powiatu wąbrzeskiego, a okalająca je gmina nosi od 2017 roku nazwę Ryńsk — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Wąbrzeźnie"),
    {
      question: "Jak znaleźć etap, który wstrzymuje cały obiad?",
      answer:
        "To nie jest ten najdłuższy, tylko ten, na który wszystko inne czeka. Pieczeń w piekarniku trwa długo, ale niczego nie blokuje. Zwykle korkuje się na czterech rzeczach: krojeniu, zagotowaniu dużego garnka wody, rozgrzaniu piekarnika i wolnym miejscu na blacie. Rozwiązaniem nie jest robić to szybciej, tylko przesunąć na sam początek.",
    },
    {
      question: "Czy Thermomix przyspiesza cały obiad?",
      answer:
        "Nie tak, jak się to zwykle przedstawia. On nie usuwa wąskiego gardła, tylko je przesuwa: kiedy urządzenie gotuje i miesza samo, korek przestaje być przy garnku, a robi się przy naczyniu, bo jest jedno i etapy ustawiają się do niego w kolejkę. Dlatego kolejność zaczyna mieć większe znaczenie — rzeczy suche robi się przed mokrymi.",
    },
  ],

  geo: { lat: 53.28, lng: 18.9478 },
};
