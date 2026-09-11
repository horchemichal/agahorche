import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * DUKLA — miasto w powiecie krośnieńskim, 1 952 mieszkańców
 * (31.12.2024, GUS), cała gmina 13 814. Trzy wpisy na Liście
 * Produktów Tradycyjnych MRiRW, wszystkie z 29 marca 2006 r.
 * i wszystkie masarskie: SALCESON DUKIELSKI, KISZKA PASZTETOWA
 * DUKIELSKA, KISZKA KASZANA REGIONALNA DUKIELSKA.
 *
 * KĄT: kasza. Jedyne miejsce w serwisie, gdzie ten surowiec jest
 * tematem. Kotwica jest mocna i sprawdzona: jeden z trzech
 * ministerialnych wpisów tego miasta zbudowany jest na kaszy.
 * Samego wyrobu NIE opisuję (patrz odmowa niżej) — biorę z niego
 * tylko składnik i piszę o nim po swojemu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kasza to jest dokładnie ten rodzaj gotowania, przy którym
 *   urządzenie pracuje za człowieka: nie przywiera i nie wykipi,
 *   bo temperatura jest trzymana, a naczynie zamknięte,
 * — że kasza z tego urządzenia wychodzi BARDZIEJ ZWARTA niż
 *   z garnka — komu to odpowiada, a komu nie,
 * — że nie zrobi kaszy podprażonej na tłuszczu ani zapiekanej,
 * — i uczciwie: przy jednej torebce kaszy garnek jest prostszy.
 *
 * TWARDA ODMOWA — SEDNO TEJ STRONY:
 * — NIE OPISUJĘ, NIE PODAJĘ RECEPTUR I NIE DORADZAM NIC
 *   W SPRAWIE SALCESONU, KISZKI PASZTETOWEJ ANI KASZANEJ.
 *   Dwa powody, oba wiążące. Po pierwsze: to są wyroby z podrobów
 *   i krwi, czyli najbardziej wrażliwy surowiec, jaki bywa
 *   w kuchni — ta sama rodzina odmów co flaki w Piaskach, surowe
 *   mięso w Modliborzycach, przetwory w Hrubieszowie i wędzenie
 *   w Zambrowie. Po drugie: to są wyroby konkretnych ludzi z tego
 *   miasta, wpisane na ministerialną listę, i nie moja rzecz je
 *   rozdawać ani podrabiać.
 *
 * POZOSTAŁE TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI PROPORCJI WODY.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o kaszach (błonnik, indeks,
 *   „lżejsze"). To nie jest strona dietetyczna.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU kaszy ani gotowanych potraw.
 * — ŻADNEJ KRYTYKI kasz w torebkach ani producentów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mąka i mielenie" (miasto
 * z młynem) dotyczy ZIARNA ZMIELONEGO NA MĄKĘ. Tu chodzi o ziarno
 * gotowane w całości — inny produkt, inna obróbka. „Ziemniaki"
 * (Nowa Sarzyna) to inny surowiec podstawowy. „Flaki" (Piaski)
 * i „mielenie mięsa" (Modliborzyce) dotyczą mięsa — i do nich
 * odsyła odmowa powyżej. „Makaron" (Radymno) dotyczy innego
 * produktu zbożowego i tam problemem jest pojemność.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — OPERACJA KARPACKO-DUKIELSKA jesienią 1944 r. (rozpoczęta
 *   8 września, trwała blisko dwa miesiące; straty liczone
 *   w dziesiątkach tysięcy; 85–90% zabudowy Dukli zniszczone).
 *   To jedna z największych i najkrwawszych bitew II wojny
 *   światowej na ziemiach polskich. Fakty sprawdzone. NIE UŻYWAM
 *   ICH — nie ma zdania, którym dałoby się to przyzwoicie wpleść
 *   w stronę o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ ROKU NADANIA PRAW MIEJSKICH JAKO PEWNIKA. Słownik
 *   historyczno-geograficzny IHPAN PAN mówi wprost, że DOKUMENT
 *   LOKACYJNY SIĘ NIE ZACHOWAŁ, a datę „ok. 1380" wyprowadza się
 *   pośrednio z aktu z 1402 r. Krążąca data 1373 nie ma
 *   potwierdzenia w źródłach naukowych. W tekście piszę
 *   „w czternastym wieku" i tyle,
 * — Dukla NIE TRACIŁA praw miejskich — sprawdzone,
 * — NIE PISZĘ, że Zakład Mięsny „Jasiołka" jest największym
 *   pracodawcą gminy. Nie ma na to źródła. Potwierdzone jest
 *   natomiast, że wyrób z listy nadal się produkuje, i to jest
 *   w tekście — bez nazwy firmy, bo nie reklamuję cudzych
 *   działalności,
 * — NIE PODAJĘ liczby pielgrzymów do sanktuarium. Nie ustalono.
 *   Podaję tylko daty życia i kanonizacji św. Jana z Dukli,
 * — NIE PISZĘ o ruchu na przejściu w Barwinku. Kontroli granicznej
 *   nie ma od wejścia do strefy Schengen w 2007 r., a natężenia
 *   ruchu na 2026 r. nie ustalono,
 * — NIE PODAJĘ organu prowadzącego Muzeum Historyczne — Pałac
 *   w Dukli. Nie ustalono. Piszę tylko, że muzeum działa,
 * — NIE wymyślam osiedli. Brak wykazu w BIP. districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — trzy wpisy na Liście Produktów Tradycyjnych MRiRW z 29 marca
 *   2006 r.; jeden z nich zbudowany jest na kaszy,
 * — wyrób z listy (salceson dukielski) jest nadal produkowany,
 * — św. Jan z Dukli, ok. 1414 – 29 września 1484, kanonizowany
 *   10 czerwca 1997 r. w Krośnie przez Jana Pawła II,
 * — Przełęcz Dukielska, 500–502 m n.p.m., najniższa w głównym
 *   grzbiecie Karpat; Barwinek jest sołectwem gminy Dukla,
 * — fragment Magurskiego Parku Narodowego (1 136,6 ha, 3,4%
 *   powierzchni gminy) leży w granicach gminy; ok. 90% gminy
 *   to obszary chronione lub ich otulina,
 * — pałac Mniszchów mieści dziś muzeum historyczne, czynne,
 * — 1 952 mieszkańców miasta, 13 814 cała gmina (31.12.2024).
 */
export const DUKLA: CityContent = {
  slug: "dukla",
  h1: "Thermomix Dukla – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dukla — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dukli: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dukla — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dukli. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dukli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Dukla i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy wpisy na ministerialnej liście. O żadnym nie będę doradzać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dukli – jak wygląda prezentacja?",
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
      id: "kasza",
      heading: "Trzy wpisy na ministerialnej liście — i jedyny, o którym mogę pisać",
      paragraphs: [
        "Dukla ma na Liście Produktów Tradycyjnych ministerstwa rolnictwa trzy wpisy, wszystkie z dwudziestego dziewiątego marca 2006 roku, i wszystkie masarskie: salceson dukielski, kiszkę pasztetową dukielską i kiszkę kaszaną regionalną dukielską. Jak na miasto liczące niecałe dwa tysiące mieszkańców, to dużo. Co więcej, to nie są martwe wpisy — przynajmniej jeden z tych wyrobów nadal się tutaj produkuje.",
        "I teraz muszę powiedzieć rzecz, która na stronie sprzedażowej wygląda dziwnie: o żadnym z tych trzech nie będę doradzać. Ani receptury, ani „jak zrobić to w domu”, ani nawet ogólnych wskazówek.",
        "Dwa powody i oba są dla mnie wiążące. Pierwszy: to są wyroby z podrobów i krwi, czyli najbardziej wrażliwy surowiec, jaki w ogóle bywa w kuchni. Jestem przedstawicielką handlową, nie technologiem żywności, i amatorska podpowiedź w tej dziedzinie może kogoś realnie skrzywdzić. Drugi: to są wyroby konkretnych ludzi z tego miasta, wpisane na listę ministerialną. Nie moja rzecz je rozdawać.",
        "Wezmę z nich natomiast jedną rzecz, która jest moja i o której mogę napisać uczciwie: kaszę.",
        "Kasza to jest dokładnie ten rodzaj gotowania, przy którym urządzenie pracuje za człowieka, i to z bardzo prostego powodu. Kasza przywiera do dna i kipi — a to są dwie awarie, które biorą się z tego, że ktoś odszedł od garnka. W zamkniętym naczyniu z trzymaną temperaturą po prostu nie mają jak się wydarzyć. Nastawiacie i wychodzicie z kuchni. Przy gryczanej, jęczmiennej i pęczaku różnica jest odczuwalna od pierwszego razu.",
        "Uczciwie o tym, co wychodzi inaczej: kasza z tego urządzenia jest bardziej zwarta niż z garnka. Ziarna mniej się od siebie oddzielają. Komu zależy na sypkiej kaszy, w której każde ziarno jest osobno, ten może być rozczarowany — i lepiej, żeby wiedział to teraz. Komu kasza ma się trzymać kupy, bo idzie do farszu albo pod sos, ten dostanie dokładnie to, czego chce.",
        "Czego nie zrobi: kaszy podprażonej na tłuszczu przed gotowaniem ani zapiekanej. Urządzenie nie rumieni — pisałam o tym przy innych miastach i tu jest tak samo.",
        "I skala, jak zawsze: przy jednej torebce kaszy na obiad zwykły garnek jest prostszy. Sens pojawia się wtedy, gdy nie chcecie przy niej stać, albo gdy równolegle w tym samym naczyniu ma powstać coś jeszcze.",
        "Czego nie doradzę poza tym: niczego o przechowywaniu ugotowanych potraw. To jest dziedzina bezpieczeństwa żywności, nie moja.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dukli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was kasza jest daniem cotygodniowym, zróbmy ją na prezentacji. Zobaczycie od razu, czy ta bardziej zwarta wersja Wam odpowiada — to jest rzecz do sprawdzenia, a nie do uwierzenia mi na słowo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dukli"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dukielskiej rodziny",
      paragraphs: [
        "Dukla liczy niecałe dwa tysiące mieszkańców, a cała gmina blisko czternaście tysięcy. Miasto lokowano w czternastym wieku — dokument się nie zachował, więc dokładnej daty nikt nie zna. Stąd pochodzi święty Jan z Dukli, żyjący od około 1414 do 1484 roku, kanonizowany w Krośnie przez Jana Pawła II dziesiątego czerwca 1997. Przełęcz Dukielska, leżąca w tej gminie, jest najniższą przełęczą w głównym grzbiecie Karpat, a około dziewięćdziesięciu procent powierzchni gminy to obszary chronione albo ich otulina — z fragmentem Magurskiego Parku Narodowego włącznie. W pałacu Mniszchów działa muzeum.",
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

  districtsHeading: "Do których części Dukli dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — łącznie z Barwinkiem, Jasionką, Tylawą i pozostałymi — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Duklę też przyjadę",
  nearbyParagraphs: [
    "Krosno, Rymanów, Iwonicz-Zdrój, Jaśliska i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krosno", "Rymanów", "Iwonicz-Zdrój", "Jedlicze", "Sanok", "Jasło"],

  about: blokOMnie("do Dukli", "w Dukli i okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dukli bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dukli"),
    {
      question: "Zrobię w tym salceson albo kiszkę dukielską?",
      answer:
        "Nie będę o tym doradzać i wolę powiedzieć wprost dlaczego. To są wyroby z podrobów i krwi — najbardziej wrażliwy surowiec, jaki bywa w kuchni — a ja jestem przedstawicielką handlową, nie technologiem żywności. Do tego są to wyroby konkretnych ludzi z tego miasta, wpisane na ministerialną Listę Produktów Tradycyjnych, i nie moja rzecz je rozdawać. Po tę wiedzę idźcie do miejscowego masarza.",
    },
    {
      question: "Jak wychodzi kasza?",
      answer:
        "Bardzo dobrze, jeśli chodzi o wygodę: nie przywrze i nie wykipi, bo naczynie jest zamknięte, a temperatura trzymana — można nastawić i wyjść z kuchni. Wychodzi natomiast bardziej zwarta niż z garnka, ziarna mniej się oddzielają. Kto lubi kaszę sypką, może woleć garnek; kto robi farsz albo kaszę pod sos, dostanie dokładnie to, czego chce. Podprażonej na tłuszczu ani zapiekanej urządzenie nie zrobi — nie rumieni.",
    },
  ],

  geo: { lat: 49.5586, lng: 21.6833 },
};
