import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * PONIATOWA — 8 173 mieszkańców (31.12.2024), spadek o 19,9% w latach
 * 2002–2024. Miasto zbudowane wokół fabryki, która przez dekady
 * produkowała SPRZĘT DO DOMU: pralki i sokowirówki („Predom-EDA").
 * Zakład upadł latem 1998 r.
 *
 * KĄT: trwałość — i czego NIE obiecam. Jedyne miasto w serwisie,
 * w którym mogę uczciwie napisać o tym, ile taki sprzęt wytrzymuje,
 * bo tutejsi ludzie takie sprzęty robili i mają je jeszcze w piwnicach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że NIE podam liczby lat i nikt uczciwy jej nie poda,
 * — dlaczego pytanie „ile to wytrzyma" jest ważniejsze przy tej cenie
 *   niż przy czajniku — i dlatego zasługuje na odpowiedź, a nie
 *   na slogan,
 * — co realnie decyduje o żywotności: intensywność używania i to,
 *   czy sprzęt jest serwisowany, a nie „jakość" jako hasło,
 * — że najczęstszy koniec takiego zakupu nie jest awarią, tylko
 *   zapomnieniem — i to jest ryzyko, o którym warto pomyśleć
 *   przed, nie po.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH OBIETNIC LICZBOWYCH: ani „dziesięć lat", ani „na całe
 *   życie", ani „u mojej klientki działa od 2009". Pojedynczy
 *   przypadek nie jest dowodem na trwałość i tak jest w tekście
 *   napisane.
 * — ŻADNYCH WARUNKÓW GWARANCJI, terminów ani zakresu — to zmienia
 *   się w czasie i zależy od umowy; w tekście jest odesłanie
 *   do rozmowy, nie konkret, który się zdezaktualizuje.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO KOMENTARZA do upadku EDA jako czyjejś winy, żadnej
 *   polityki i żadnego żerowania na tym, że ludzie stracili pracę.
 *   Fabryka pojawia się jako fakt z historii miasta i jako powód,
 *   dla którego akurat tu ten temat ma sens — nic więcej.
 *
 * ROZGRANICZENIE — TU SZCZEGÓLNIE WAŻNE, BO SĄSIEDZTWO JEST GĘSTE:
 * — kąt „co robić, gdy się zepsuje" (miasto montujące elektronikę)
 *   jest ZAJĘTY — tam chodzi o procedurę po awarii,
 * — kąt „o co zapytać o serwis PRZED zakupem" jest ZAJĘTY — tam jest
 *   lista pytań do przedstawiciela,
 * — kąt „kupowanie używanego" jest ZAJĘTY.
 * Ta strona odpowiada na TRZECIE pytanie, którego żaden z tych trzech
 * nie zadaje: ile to w ogóle żyje i dlaczego nie da się tego
 * obiecać. Tekst ani razu nie wchodzi w procedurę serwisową.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję jednej liczby zatrudnionych w EDA. Źródła podają
 *   ok. 4 500 i ok. 5 000 — w tekście jest „blisko pięć tysięcy",
 *   jako przedział opisowy, bez fałszywej precyzji,
 * — NIE piszę „sypialnia Lublina". Saldo dojazdów do pracy jest
 *   ujemne (650 wyjeżdża, 303 przyjeżdża), ale NIE MA rozbicia
 *   kierunkowego — równie dobrze może chodzić o Opole Lubelskie,
 *   które jest bliżej. W tekście jest sam fakt salda,
 * — NIE mylę daty uruchomienia fabryki (15 sierpnia 1939, w ramach
 *   COP) z datą praw miejskich (18 lipca 1962). Dzieli je 23 lata
 *   i większość popularnych opisów je zlewa,
 * — NIE podaję liczby mieszkań wybudowanych przez zakład dla załogi.
 *   Osiedle przyzakładowe od 1937 r. jest potwierdzone, liczby NIE —
 *   więc jest „osiedle dla załogi", bez cyfr,
 * — miasto NIE publikuje potwierdzonego wykazu osiedli (lista z portalu
 *   turystycznego to nie BIP), więc districts to PUSTA TABLICA,
 * — obóz w Poniatowej NIE pojawia się w treści ani razu. To ta sama
 *   decyzja co przy Soldau w Działdowie i przy szczeciniarstwie
 *   w Międzyrzecu.
 *
 * ODRZUCONY KĄT: barszcz czereśniowy — jest na ministerialnej Liście
 * Produktów Tradycyjnych, wpisany 14 marca 2018 r. i co rzadkie,
 * przypisany do SAMEJ Poniatowej, a nie do sąsiedniej gminy. Mimo to
 * odpada: kąty „owoc, który nie poszedł do skupu" i „soki i moszcze"
 * są już zajęte przez inne miasta. Wspominam o nim w tekście jednym
 * zdaniem, jako o miejscowym daniu — i zgodnie ze stałą zasadą
 * NIE PODAJĘ przepisu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — fabryka ruszyła 15 sierpnia 1939 r. w ramach COP; po wojnie jako
 *   Zakłady Wytwórcze Sprzętu Instalacyjnego (1949), potem „EDA"
 *   / „Predom-EDA" — pralki i sokowirówki,
 * — prawa miejskie 18 lipca 1962 r.,
 * — upadłość EDA S.A. latem 1998 r.; z blisko pięciu tysięcy miejsc
 *   pracy zostało około czterystu w kilku spółkach,
 * — 8 173 mieszkańców na 31.12.2024, spadek o 19,9% od 2002 r.,
 * — saldo dojazdów do pracy ujemne: 650 wyjeżdża, 303 przyjeżdża,
 * — z Lublina 43–45 km, około pięćdziesięciu minut,
 * — barszcz czereśniowy na Liście Produktów Tradycyjnych od 2018 r.
 */
export const PONIATOWA: CityContent = {
  slug: "poniatowa",
  h1: "Thermomix Poniatowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Poniatowa — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Poniatowej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Poniatowa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Poniatowej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Poniatowej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Poniatowa i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Ile to wytrzyma?” — pytanie, na które nie dostaniecie ode mnie liczby.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Poniatowej – jak wygląda prezentacja?",
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
      id: "trwalosc",
      heading: "Miasto, które robiło pralki i sokowirówki — więc porozmawiajmy o tym, ile sprzęt wytrzymuje",
      paragraphs: [
        "Poniatowa jest miastem, które powstało wokół fabryki. Zakład ruszył z produkcją piętnastego sierpnia 1939 roku, w ramach Centralnego Okręgu Przemysłowego; prawa miejskie miasto dostało dopiero dwadzieścia trzy lata później, w lipcu 1962. Przez większość powojennych dekad ta fabryka — znana jako EDA — robiła sprzęt do domu: pralki i sokowirówki. Latem 1998 roku ogłoszono upadłość i z blisko pięciu tysięcy miejsc pracy zostało jakieś czterysta.",
        "Piszę o tym, bo to jedyne miasto w całym serwisie, w którym rozmowa o trwałości sprzętu AGD nie jest ogólnikiem. Tutaj ludzie takie rzeczy robili. Wiedzą, z czego to się składa i jak się psuje — i akurat im nie sprzedam sloganu.",
        "Więc powiem od razu rzecz, która brzmi jak unik, a jest jedyną uczciwą odpowiedzią: nie podam Wam liczby lat. Ani ja, ani nikt inny nie jest w stanie powiedzieć, ile wytrzyma konkretne urządzenie w konkretnym domu, a każda liczba rzucona przy stole na prezentacji jest liczbą wymyśloną.",
        "Nie zrobię też czegoś, co w tej branży słyszy się co chwila: nie opowiem Wam o klientce, u której ten sprzęt działa od kilkunastu lat. Może i działa. Ale jeden przypadek nie jest dowodem na nic — tak samo jak jeden sprzęt, który padł po dwóch latach, nie dowodzi, że są słabe. Opowiadanie takich historyjek jako argumentu to jest po prostu nieuczciwe i wolę tego nie robić.",
        "Co mogę powiedzieć sensownie? Że o żywotności decydują dwie rzeczy, a żadna z nich nie nazywa się „jakość”. Pierwsza to intensywność — sprzęt używany codziennie przez rodzinę pracuje inaczej niż taki, który wychodzi z szafki na święta. Druga to serwisowanie: czy jest do kogo zadzwonić i czy części są dostępne. To są pytania, które warto zadać przed zakupem, i chętnie na nie odpowiem przy spotkaniu, konkretnie i bez ogólników — ale wypisywanie tu warunków i terminów nie ma sensu, bo takie rzeczy się zmieniają, a strona zostaje.",
        "I jeszcze jedno, bo to jest ryzyko, o którym mało kto mówi, a widuję je częściej niż awarie. Najczęstszy koniec takiego zakupu nie jest awarią. Jest zapomnieniem — sprzęt trafia do szafki, bo nie znalazł miejsca na blacie albo nikt się nim nie zajął przez pierwszy miesiąc. Wtedy nie ma znaczenia, ile by wytrzymał. Dlatego przyjeżdżam do Was do domu, zamiast pokazywać to w salonie: żeby od razu było wiadomo, gdzie to stanie i czy naprawdę będzie używane.",
        "Na koniec drobiazg z zupełnie innej beczki, ale miejscowy: barszcz czereśniowy jest wpisany na ministerialną Listę Produktów Tradycyjnych i przypisany do Poniatowej — co jest rzadkie, bo takie wpisy zwykle należą do sąsiednich wsi, nie do miasta. Przepisu nie podam, bo to nie mój wyrób. Ale jeśli ktoś u Was go robi, chętnie zobaczę, jak wychodzi.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Poniatowej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie konkretne pytania o serwis, części albo warunki — zapiszcie je sobie przed spotkaniem i zadajcie na miejscu. Odpowiem na wszystkie, a jeśli czegoś nie będę wiedzieć, powiem, że nie wiem, i sprawdzę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Poniatowej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla poniatowskiej rodziny",
      paragraphs: [
        "Poniatowa liczy nieco ponad osiem tysięcy mieszkańców i od 2002 roku straciła blisko jedną piątą ludności. Więcej osób wyjeżdża stąd do pracy, niż do niej przyjeżdża — sześćset pięćdziesiąt wobec trzystu trzech. To znaczy, że w wielu domach obiad powstaje po powrocie, w oknie między jednym a drugim.",
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

  districtsHeading: "Do których części Poniatowej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości w gminie, bez dopłaty za dojazd.",
    "Nie znalazłam oficjalnego wykazu osiedli publikowanego przez miasto, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Poniatową też przyjadę",
  nearbyParagraphs: [
    "Opole Lubelskie, Bełżyce, Chodel, Karczmiska, Wąwolnica i Wojciechów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opole Lubelskie", "Bełżyce", "Chodel", "Karczmiska", "Nałęczów", "Kazimierz Dolny"],

  about: blokOMnie("do Poniatowej", "w Poniatowej i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Poniatowej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Poniatowej"),
    {
      question: "Ile lat wytrzyma takie urządzenie?",
      answer:
        "Nie podam liczby i nikt uczciwy jej nie poda — nie da się przewidzieć, ile wytrzyma konkretny sprzęt w konkretnym domu. Nie będę też opowiadać o klientce, u której działa od kilkunastu lat, bo jeden przypadek niczego nie dowodzi. Realnie decyduje intensywność używania i to, czy jest do kogo zadzwonić i skąd wziąć części — o to warto zapytać przy spotkaniu.",
    },
    {
      question: "Co jest największym ryzykiem przy takim zakupie?",
      answer:
        "Z mojego doświadczenia nie awaria, tylko to, że sprzęt trafia do szafki i przestaje być używany — zwykle dlatego, że nie znalazł miejsca na blacie albo nikt się nim nie zajął przez pierwszy miesiąc. Dlatego przyjeżdżam do Was do domu, a nie zapraszam do salonu.",
    },
  ],

  geo: { lat: 51.1783, lng: 22.0783 },
};
