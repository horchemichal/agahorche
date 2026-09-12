import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * JASTARNIA — miasto 2 581 mieszkańców, cała gmina 3 447
 * (31.12.2024, GUS). Brief mówił 3 500 dla miasta — mocno
 * zawyżone; ta liczba dotyczy gminy.
 *
 * STATUS ADMINISTRACYJNY — OBALONA NIEPRAWDA: Jastarnia NIE JEST
 * gminą miejską. Od 1 STYCZNIA 2017 r. jest gminą MIEJSKO-WIEJSKĄ.
 * Przy tej zmianie KUŹNICA i JURATA zostały wydzielone z miasta
 * i mają status OSAD w części wiejskiej gminy. TERYT: 2211023
 * gmina, 2211024 miasto, 2211025 obszar wiejski. Angielska
 * Wikipedia nadal podaje błędnie — nie korzystam z niej.
 * DODATKOWO: KUŹNICA NALEŻY DO GMINY JASTARNIA, a NIE do
 * Władysławowa — to samo napisałam na stronie Władysławowa.
 *
 * PRAWA MIEJSKIE 1 STYCZNIA 1973 r. — powstały z połączenia
 * dwóch wsi: JASTARNI PUCKIEJ i JASTARNI GDAŃSKIEJ zwanej BOREM.
 * Podział sięgał 1526 r., gdy Zygmunt I przekazał Hel Gdańskowi:
 * część zachodnia była królewska i katolicka, wschodnia gdańska
 * i protestancka.
 *
 * PIERWSZA WZMIANKA 1378 r. — osada „Osterna". Nazwa Jastarnia
 * w użyciu od 1678 r., od kaszubskiego jaster = jasny, błyszczący.
 *
 * PORT: budowa 1926–1931, koncepcja JÓZEFA POZNAŃSKIEGO; basen
 * 8 ha usypany z piasku z pogłębiania, łącznie 31,5 ha. W 2026 r.
 * obchodzone jest STULECIE PORTU (uroczystości od 21 kwietnia
 * 2026). OSTROŻNIE: tytuł „pierwszy port II RP" jest nieścisły —
 * najważniejszą inwestycją morską II RP była Gdynia. Poprawnie:
 * PIERWSZA INWESTYCJA PORTOWA II RP ZAPROJEKTOWANA I WYKONANA
 * W CAŁOŚCI POLSKIMI SIŁAMI. Tak też piszę.
 *
 * LATARNIA MORSKA JASTARNIA z 1950 r. — wieża 13,3 m,
 * NAJNIŻSZA LATARNIA W POLSCE, nieudostępniona do zwiedzania.
 *
 * CHATA RYBACKA z 1881 r., ul. Portowa 10.
 *
 * FAKT OSIOWY DLA KĄTA: 72,3% podmiotów w mieście działa
 * w zakwaterowaniu i gastronomii — NAJWYŻSZY UDZIAŁ ZE WSZYSTKICH
 * MIAST TEJ FALI. 737 z 847 podmiotów to osoby fizyczne.
 *
 * KĄT: GOFRY. Nadmorska instytucja i jednocześnie idealny przykład
 * sprzętu jednozadaniowego, którego to urządzenie nie zastępuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie NIE ZROBI GOFRA, bo gofrownica to dwie gorące
 *   płyty, a nie naczynie,
 * — że robi za to ciasto — i to jest cała jego rola,
 * — że ciasto na gofry, naleśniki i placki to w praktyce jedno
 *   zadanie: wszystko razem, jednym uruchomieniem, bez grudek
 *   i bez trzepaczki,
 * — że gofrownicy z kuchni nie wyrzucicie i że dokładnie tak samo
 *   jest z tosterem, frytkownicą i ekspresem,
 * — że sprzedawca, który obiecuje pustą szufladę, kłamie,
 * — i ODMOWA: żadnych porad o cukrze, bitej śmietanie „na zdrowie"
 *   ani o tym, co dziecko powinno jeść.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI ŻYWIENIOWYCH, także
 *   dotyczących dzieci i słodyczy.
 * — ŻADNYCH PORAD O OBSŁUDZE GOFROWNICY — to inne urządzenie
 *   z własną instrukcją.
 * — ŻADNYCH NAZW FIRM ani lokali.
 * — ŻADNYCH PORAD DLA PROWADZĄCYCH GASTRONOMIĘ.
 * — NIE DOTYKAM zbombardowania portu 14 września 1939 r. ani
 *   wysiedleń i represji wobec Kaszubów. To nie jest tło dla
 *   strony o sprzęcie kuchennym.
 * — NIE DOTYKAM cen nieruchomości w Juracie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czego to NIE zastąpi
 * w kuchni. Odwrotność hasła jedno urządzenie…" (inne miasto)
 * to PEŁNA INWENTARYZACJA sprzętów i rozprawa z hasłem
 * marketingowym. „W kuchni stoi już inny robot" dotyczy
 * posiadanego sprzętu i decyzji zakupowej. „Ciasto naleśnikowe
 * — i patelnia" dotyczy naleśników i patelni. Tutaj chodzi
 * o JEDNO KONKRETNE DANIE — gofra — i o ciasto, które jest
 * wspólne dla trzech wypieków. Zakres jest wąski i produktowy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Jastarnia jest gminą miejską. Od 2017 r. jest
 *   miejsko-wiejska.
 * — NIE PISZĘ, że port w Jastarni był pierwszym portem II RP
 *   bez zastrzeżenia o Gdyni.
 * — NIE MYLĘ Jastarni z Jastrzębią Górą (gmina Władysławowo)
 *   ani Chałup (gmina Władysławowo) z gminą Jastarnia.
 * — NIE PODAJĘ nazwy największego pracodawcy — nie ustalono;
 *   737 z 847 podmiotów to osoby fizyczne.
 * — NIE PODAJĘ nazwiska burmistrza — nie potwierdzono.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych — dla
 *   Jastarni nie znaleziono żadnego.
 * — NIE PODAJĘ aktualnej liczby kutrów — najnowsze dane są
 *   sprzed kilku lat.
 * — districts: nie potwierdzono statutowych osiedli ani sołectw;
 *   Jurata i Kuźnica to OSADY w rejestrze TERYT i tak je nazywam.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 581, gmina 3 447 mieszkańców (31.12.2024, GUS),
 * — gmina miejsko-wiejska od 1 stycznia 2017 r.; Jurata i Kuźnica
 *   to osady w części wiejskiej gminy,
 * — prawa miejskie 1 stycznia 1973 r. z połączenia Jastarni
 *   Puckiej i Jastarni Gdańskiej zwanej Borem; podział sięgał
 *   1526 r.,
 * — pierwsza wzmianka 1378 r. jako „Osterna"; nazwa Jastarnia
 *   od 1678 r., od kaszubskiego jaster — jasny,
 * — port budowany 1926–1931 wg koncepcji Józefa Poznańskiego;
 *   pierwsza inwestycja portowa II RP wykonana w całości polskimi
 *   siłami; stulecie obchodzone w 2026 r.,
 * — latarnia z 1950 r., wieża 13,3 m — najniższa w Polsce,
 * — Chata Rybacka z 1881 r.,
 * — 72,3% podmiotów w mieście to zakwaterowanie i gastronomia.
 */
export const JASTARNIA: CityContent = {
  slug: "jastarnia",
  h1: "Thermomix Jastarnia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jastarnia (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Jastarni: bezpłatna prezentacja TM7 u Ciebie w domu, miasto oraz Jurata i Kuźnica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jastarnia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jastarni. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jastarni z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta oraz do Juraty i Kuźnicy.",

  highlights: highlightyStandardowe("Jastarnia, Jurata i Kuźnica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gofrownicy nie wyrzucicie. I dobrze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jastarni – jak wygląda prezentacja?",
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
      id: "gofry",
      heading: "Siedemdziesiąt dwa procent firm to gastronomia — czyli o gofrze i gofrownicy",
      paragraphs: [
        "W Jastarni siedemdziesiąt dwa procent zarejestrowanych firm to zakwaterowanie i gastronomia — najwyższy taki udział ze wszystkich miast, o których pisałam. W praktyce znaczy to, że nadmorski gofr jest tu instytucją, i to instytucją, którą zna każde dziecko na półwyspie.",
        "Więc napiszę o gofrze — a przy okazji o czymś ważniejszym niż gofr.",
        "Thermomix nie zrobi gofra. Nie ma takiej funkcji, nie ma nakładki, nie ma sposobu. Gofrownica to dwie gorące płyty, które dociskają ciasto z obu stron i wypiekają wzór — a to jest zupełnie inna fizyka niż naczynie z podgrzewanym dnem. Kto Wam mówi inaczej, ten nie wie, o czym mówi.",
        "Robi natomiast ciasto — i tu jest cała jego rola przy tym daniu, ale jest ona uczciwie użyteczna. Mąka, jajka, mleko, tłuszcz, cukier, proszek: wszystko naraz do naczynia, jedno uruchomienie i po ciasto się nie wraca. Bez grudek, bez trzepaczki, bez przesiewania, bez trzech misek.",
        "I to jest to samo ciasto, o które chodzi przy naleśnikach i przy plackach. W praktyce jedno zadanie obsługuje trzy różne niedzielne poranki, więc jeśli ktoś w domu robi gofry regularnie, to akurat ta rzecz naprawdę wchodzi do rutyny i zostaje.",
        "A teraz zdanie, dla którego w ogóle piszę tę stronę. Gofrownicy nie wyrzucicie. I dokładnie tak samo nie wyrzucicie tostera, frytkownicy, ekspresu do kawy ani patelni. Sprzedawca, który obiecuje Wam, że po zakupie opróżnicie szufladę i szafkę, mówi nieprawdę — przekonacie się o tym w pierwszym miesiącu, a wtedy zawód będzie większy niż powinien. To urządzenie zastępuje sporo rzeczy, ale sprzęty jednozadaniowe, które robią coś przez kontakt z gorącą powierzchnią, zostają. Wolę Wam to powiedzieć przed zakupem.",
        "I granica: nie napiszę Wam nic o cukrze, o tym, ile słodkiego może zjeść dziecko, ani o tym, że coś jest zdrowsze od czegoś. To nie jest moja dziedzina i nie zamierzam w nią wchodzić przy okazji sprzedaży sprzętu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jastarni?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przyjeżdżam do miasta oraz do Juraty i Kuźnicy — obie należą do gminy Jastarnia, choć Kuźnica bywa w internecie przypisywana do Władysławowa. Poza sezonem umawiamy się swobodniej; w lipcu i sierpniu nikomu tu nie zawracam głowy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jastarni"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jastarnickiej rodziny",
      paragraphs: [
        "Jastarnia liczy nieco ponad dwa i pół tysiąca mieszkańców, a cała gmina blisko trzy i pół. Od 1 stycznia 2017 roku jest gminą miejsko-wiejską, a Jurata i Kuźnica mają w niej status osad. Miasto powstało 1 stycznia 1973 roku z połączenia dwóch wsi: Jastarni Puckiej i Jastarni Gdańskiej zwanej Borem — podzielonych jeszcze w 1526 roku, gdy Zygmunt I przekazał Hel Gdańskowi. Pierwsza wzmianka o osadzie pochodzi z 1378 roku, a dzisiejsza nazwa, od kaszubskiego jaster czyli jasny, jest w użyciu od 1678. Tutejszy port budowano w latach 1926–1931 według koncepcji Józefa Poznańskiego; to była pierwsza inwestycja portowa Drugiej Rzeczypospolitej zaprojektowana i wykonana w całości polskimi siłami, a w 2026 roku obchodzone jest jego stulecie. Stoi tu też najniższa latarnia morska w Polsce — jej wieża ma trzynaście metrów — i zabytkowa chata rybacka z 1881 roku.",
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

  districtsHeading: "Do których części gminy Jastarnia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, w tym do dawnej części zwanej Borem, oraz do Juraty i Kuźnicy — obie należą do gminy Jastarnia. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Jastarnię też przyjadę",
  nearbyParagraphs: [
    "Hel, Władysławowo, Chałupy, Puck, Reda i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Hel", "Władysławowo", "Puck", "Reda", "Rumia"],

  about: blokOMnie("do Jastarni", "w Jastarni, Juracie i Kuźnicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Juraty i Kuźnicy?",
      answer:
        "Tak — obie należą do gminy Jastarnia i mają status osad, choć Kuźnica bywa w internecie błędnie przypisywana do Władysławowa. Dojazd wszędzie jest bezpłatny, tak samo jak sama prezentacja. Dla porządku: Jastarnia to nie Jastrzębia Góra, a Chałupy należą do gminy Władysławowo.",
    },
    ...faqWspolne("w Jastarni"),
    {
      question: "Czy Thermomix zrobi gofry?",
      answer:
        "Nie. Gofrownica to dwie gorące płyty, które dociskają ciasto z obu stron — to zupełnie inna fizyka niż naczynie z podgrzewanym dnem. Nie ma na to funkcji ani nakładki.",
    },
    {
      question: "To co robi przy gofrach?",
      answer:
        "Ciasto. Mąka, jajka, mleko, tłuszcz, cukier i proszek naraz do naczynia, jedno uruchomienie, bez grudek, bez trzepaczki i bez trzech misek. To samo ciasto obsługuje naleśniki i placki, więc jedno zadanie wystarcza na trzy różne niedzielne poranki.",
    },
    {
      question: "Które sprzęty naprawdę zostaną w kuchni?",
      answer:
        "Wszystkie, które robią coś przez kontakt z gorącą powierzchnią: gofrownica, toster, frytkownica, patelnia, ekspres. Sprzedawca, który obiecuje pustą szufladę po zakupie, mówi nieprawdę — i lepiej usłyszeć to ode mnie teraz niż przekonać się w pierwszym miesiącu.",
    },
  ],

  geo: { lat: 54.7014, lng: 18.6714 },
};
