import type { CityContent } from "../city-content";
import {
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
 * SIEPRAW — gmina wiejska, powiat myślenicki, Pogórze Wielickie.
 * 9 667 mieszkańców. CZTERY SOŁECTWA: Siepraw, Zakliczyn, Czechówka,
 * Łyczanka.
 *
 * OŚ STRONY: GMINA, KTÓRA PUCHNIE. +28,2% ludności w latach
 * 2002–2024, saldo migracji +70, a jednocześnie tylko 95 pracujących
 * na 1000 mieszkańców — prawie trzykrotnie mniej niż średnia krajowa.
 * To jest podręcznikowa sypialnia Krakowa: tu się mieszka, pracuje
 * gdzie indziej.
 *
 * DRUGA OŚ: BŁ. ANIELA SALAWA, urodzona tu 9 września 1881 r.,
 * od 2004 r. sanktuarium, od 10 września 2022 r. patronka gminy.
 * TRZECIA: SZCZOTKARSTWO — rzemiosło uprawiane tu od końca XIX w.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA: 9 667 mieszkańców; WZROST O 28,2% w latach 2002–2024;
 *   saldo migracji +70,
 * — PRACUJĄCY: 95 na 1000 mieszkańców — ok. 2,7 raza mniej niż średnia
 *   krajowa. Klasyczna gmina sypialniana,
 * — SOŁECTWA (4): Siepraw, Zakliczyn, Czechówka, Łyczanka,
 * — BŁ. ANIELA SALAWA: ur. 9 września 1881 r. w Sieprawiu; kościół
 *   w Sieprawiu jest sanktuarium jej imienia OD 2004 R.; PATRONKA GMINY
 *   OD 10 WRZEŚNIA 2022 R.,
 * — SZCZOTKARSTWO: tradycja wyrobu szczotek i pędzli w Sieprawiu
 *   od KOŃCA XIX W.,
 * — SIEPRAW-SKI: wyciąg narciarski — jedyny na Pogórzu Wielickim,
 * — LGD „TURYSTYCZNA PODKOWA": SIEDZIBA STOWARZYSZENIA JEST
 *   W SIEPRAWIU; należą do niego Dobczyce, Lubień, Pcim,
 *   Raciechowice, Siepraw, Tokarnia i Wiśniowa,
 * — POŁOŻENIE: Pogórze Wielickie, między Krakowem, Wieliczką,
 *   Myślenicami i Dobczycami.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — SPORU O PRZEBIEG NOWEJ TRASY KRAKÓW–MYŚLENICE. Sprawa jest żywa,
 *   dotyczy wyburzeń domów i była przedmiotem protestów w listopadzie
 *   i grudniu 2025 r. Komercyjna strona lokalna NIE MA PRAWA zajmować
 *   w tym stanowiska ani wykorzystywać cudzego nieszczęścia jako tła
 *   marketingowego. Świadomie nie piszę o tym ani słowa,
 * — DAT ZAŁOŻENIA ZAKŁADÓW SZCZOTKARSKICH, ICH NAZW I LICZBY.
 *   Nie potwierdzone,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza ministerialna
 *   niedostępna — nie piszę ani że jest, ani że go nie ma,
 * — DATY BEATYFIKACJI ANIELI SALAWY ANI SZCZEGÓŁÓW JEJ BIOGRAFII
 *   poza datą i miejscem urodzenia. Nie zweryfikowane u źródła,
 * — HISTORII ŚREDNIOWIECZNEJ, DAT LOKACJI, ZABYTKÓW. Nie potwierdzone,
 * — LICZBY TRAS I PARAMETRÓW WYCIĄGU SIEPRAW-SKI. Nie potwierdzone,
 * — CZASÓW PRZEJAZDU DO KRAKOWA I NUMERÓW LINII. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — ZAKLICZYN W GMINIE SIEPRAW ≠ ZAKLICZYN NAD DUNAJCEM (miasto
 *   w powiecie tarnowskim, osobna gmina, osobna strona). To jest
 *   najgroźniejsza pomyłka na tej stronie,
 * — CZECHÓWKA to sołectwo gminy Siepraw, ale tak nazywa się też potok
 *   w Krakowie,
 * — SIEPRAW ODMIENIA SIĘ „w Sieprawiu", „do Sieprawia",
 * — GMINA JEST WIEJSKA — Siepraw nie jest miastem.
 */

export const SIEPRAW: CityContent = {
  slug: "siepraw",
  h1: "Thermomix Siepraw – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Siepraw — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Siepraw: bezpłatna prezentacja TM7 u Ciebie w kuchni — Siepraw, Zakliczyn, Czechówka, Łyczanka. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Siepraw — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Siepraw. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Siepraw przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Sieprawia, Zakliczyna, Czechówki i Łyczanki, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 4 sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Siepraw – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Sieprawiu, jak w Zakliczynie, Czechówce i Łyczance.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "Bardzo dużo prezentacji mam tu wieczorami i w soboty, bo to jest gmina, z której rano się wyjeżdża. Nie traktuję tego jak wyjątku — po prostu tak układam kalendarz.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina, która w dwadzieścia lat urosła o ponad jedną czwartą",
      paragraphs: [
        "Od dwa tysiące drugiego do dwa tysiące dwudziestego czwartego roku liczba mieszkańców gminy Siepraw wzrosła o dwadzieścia osiem procent. Saldo migracji jest dodatnie — siedemdziesiąt osób na plus. Dziś mieszka tu dziewięć tysięcy sześćset sześćdziesiąt siedem osób, na czterech sołectwach.",
        "Jednocześnie pracujących na miejscu jest dziewięćdziesiąt pięć na tysiąc mieszkańców. Średnia krajowa jest prawie trzy razy wyższa. Te dwie liczby czytane razem mówią wszystko: ludzie się tu wprowadzają, budują domy i wyjeżdżają rano do Krakowa, Wieliczki albo Myślenic.",
        "Ja to widzę po godzinach prezentacji. W Sieprawiu prawie nie umawiam się w środku dnia roboczego — umawiam się o osiemnastej, o dziewiętnastej i w soboty, bo wcześniej po prostu nikogo nie ma w domu.",
        "Gmina leży na Pogórzu Wielickim, między Krakowem, Wieliczką, Myślenicami i Dobczycami, i ma jedną rzecz, której na tym pogórzu nie ma nikt inny: własny wyciąg narciarski, Siepraw-Ski. Jedyny na Pogórzu Wielickim.",
        "Tu też urodziła się dziewiątego września tysiąc osiemset osiemdziesiątego pierwszego roku błogosławiona Aniela Salawa. Miejscowy kościół jest jej sanktuarium od dwa tysiące czwartego roku, a od dziesiątego września dwa tysiące dwudziestego drugiego jest ona patronką gminy.",
        "I rzecz mniej oczywista, a dla mnie zawodowo ciekawa: w Sieprawiu ma siedzibę Lokalna Grupa Działania „Turystyczna Podkowa”, do której należą też Dobczyce, Lubień, Pcim, Raciechowice, Tokarnia i Wiśniowa. Czyli mniej więcej ta sama okolica, którą i ja obsługuję.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Siepraw?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo: Siepraw, Zakliczyn, Czechówka albo Łyczanka. Przy Zakliczynie warto dodać „ten w gminie Siepraw”, bo Zakliczyn nad Dunajcem to zupełnie inne miejsce, sto kilometrów stąd, i dojeżdżam tam osobno.",
        "Terminy wieczorne i sobotnie mam tu w pierwszej kolejności, bo to jest gmina dojeżdżająca. Dopłaty za odległość nie ma w żadnym z czterech sołectw.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Siepraw"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Nowy dom, dwa etaty w Krakowie i obiad po dziewiętnastej",
      paragraphs: [
        "To jest gmina nowych domów i młodych rodzin — dwadzieścia osiem procent więcej ludzi niż dwadzieścia lat temu nie bierze się z niczego innego. I jest to gmina, w której oboje dorosłych zwykle pracuje poza nią.",
        "Dzień wygląda więc podobnie w bardzo wielu domach: wyjazd przed siódmą, powrót po siedemnastej, po drodze przedszkole albo szkoła, a potem pytanie, co dziś na kolację, zadawane w kuchni, w kurtce, o dziewiętnastej. To jest ten moment, w którym najczęściej wygrywa dowóz.",
        "Urządzenie gotujące bez obecności rozwiązuje dokładnie ten moment. Zupa albo danie jednogarnkowe wstawione rano jest gotowe wtedy, kiedy wracacie, i nie wymaga, żeby ktoś stał obok. To nie jest „szybsze gotowanie” — to jest przesunięcie gotowania na porę, o której jesteście w stanie je zacząć.",
        "Druga rzecz to weekend. W gminie, z której się codziennie wyjeżdża, sobota i niedziela są jedynymi dniami, kiedy gotuje się porządnie i na zapas. Trzy zupy i dwa dania na tydzień to jest niedzielne popołudnie, które przy jednym naczyniu robi się seryjnie, jedno po drugim, bez pilnowania.",
        "Trzecia to małe dzieci, których w nowej zabudowie jest tu dużo. Kaszki, przeciery, warzywa gotowane na parze i miksowane w tym samym naczyniu, bez przelewania gorących rzeczy — to jest ta grupa zastosowań, przy której najczęściej słyszę, że urządzenie zwróciło się „samym spokojem”.",
        "I uczciwie: nie zastąpi piekarnika ani patelni. Nie usmaży kotletów i nie upiecze blachy ciasta. Zabierze mieszanie, pilnowanie i mycie trzech garnków zamiast jednego naczynia.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Siepraw i gotowanie — kuchnia rzemieślnicza, nie folklorystyczna",
    paragraphs: [
      "Siepraw nie jest gminą, która sprzedaje się kuchnią regionalną, i nie będę udawać, że jest. To jest gmina rzemieślnicza i podmiejska — wyrób szczotek i pędzli uprawia się tu od końca dziewiętnastego wieku, a dziś większość mieszkańców pracuje poza gminą.",
      "Kuchnia takiego miejsca jest kuchnią pogórza: ziemniaki, kapusta, mąka, mleko, zupy gotowane w dużym garnku. Z jedną różnicą wobec wsi bardziej odległych — tu obok siebie mieszkają rodziny z dziada pradziada i rodziny, które sprowadziły się z Krakowa pięć lat temu, i w kuchni to widać.",
      "Powiem od razu, czego nie napiszę. Nie sprawdziłam, czy z tej gminy pochodzi jakikolwiek wpis na ministerialnej Liście Produktów Tradycyjnych — baza była dla mnie niedostępna. Nie wymyślę więc żadnej „potrawy sieprawskiej”, żeby strona wyglądała bogaciej.",
      "To, co potwierdzone i co dla kuchni ma znaczenie, to rytm roku wyznaczany przez parafię. Kościół w Sieprawiu jest od dwa tysiące czwartego roku sanktuarium błogosławionej Anieli Salawy, urodzonej tutaj dziewiątego września tysiąc osiemset osiemdziesiątego pierwszego roku, a od dwa tysiące dwudziestego drugiego roku jest ona patronką gminy. Odpust to jest dzień, w którym w bardzo wielu domach piecze się i gotuje dla gości.",
      "I tu urządzenie pracuje najciężej: ciasto drożdżowe, mak, kruszonka, farsze, sałatki, pasty do kanapek. Wyrabianie ciasta i mielenie maku to są dwie rzeczy, przy których zwykle boli ręka albo trzeba pożyczać maszynkę od sąsiadki.",
      "Czego nie zrobi: nie upiecze. Blacha idzie do piekarnika i tego się nie obejdzie. Zrobi ciasto, zrobi masę, zrobi lukier — resztę robi piekarnik i Wy.",
    ],
  },

  districtsHeading: "Gdzie w gminie Siepraw dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czterech sołectw: Sieprawia, Zakliczyna, Czechówki i Łyczanki. Dopłaty za odległość nie ma nigdzie.",
    "Gmina leży na Pogórzu Wielickim, między Krakowem, Wieliczką, Myślenicami i Dobczycami, i jest z każdej z tych stron dobrze dostępna. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Mieszka tu dziewięć tysięcy sześćset sześćdziesiąt siedem osób, o dwadzieścia osiem procent więcej niż dwadzieścia lat temu. Nowej zabudowy jest sporo, a nowa zabudowa to nowe ulice i adresy, których nawigacja czasem jeszcze nie zna — jeśli tak jest u Was, napiszcie mi to w SMS-ie.",
    "Terminy wieczorne i weekendowe mam tu w pierwszej kolejności. To gmina, z której się rano wyjeżdża do pracy, i nie ma sensu udawać, że da się umówić prezentację o jedenastej w środę.",
    "I rzecz, którą powtarzam przy każdym telefonie: Zakliczyn w gminie Siepraw to nie jest Zakliczyn nad Dunajcem w powiecie tarnowskim. Do obu dojeżdżam, ale to dwie zupełnie różne trasy.",
  ],
  districts: ["Siepraw", "Zakliczyn", "Czechówka", "Łyczanka"],

  nearbyHeading: "Dobczyce, Myślenice, Wieliczka i Kraków też są na mojej trasie",
  nearbyParagraphs: [
    "Siepraw leży między Krakowem, Wieliczką, Myślenicami i Dobczycami — do każdej z tych stron mam stąd blisko i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy gminy i nie masz pewności, czy to jeszcze Siepraw, czy już Dobczyce albo Świątniki Górne — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Dobczyce",
    "Myślenice",
    "Wieliczka",
    "Świątniki Górne",
    "Gdów",
    "Kraków",
    "Raciechowice",
  ],

  about: blokOMnie("do gminy Siepraw", "w powiecie myślenickim"),

  faq: [
    {
      question: "Oboje pracujemy w Krakowie. Da się umówić po pracy?",
      answer:
        "Da się i tak wygląda większość moich prezentacji w tej gminie. Umawiam się o osiemnastej, o dziewiętnastej i w soboty — w Sieprawiu na miejscu pracuje tylko dziewięćdziesiąt pięć osób na tysiąc mieszkańców, więc doskonale wiem, że w środku dnia roboczego nikogo nie ma w domu. Prezentacja trwa około dwóch godzin.",
    },
    ...faqWspolne("w gminie Siepraw"),
    {
      question: "Mieszkam w Zakliczynie. O który Zakliczyn chodzi?",
      answer:
        "O to właśnie zawsze dopytuję. Zakliczyn w gminie Siepraw to jedno z czterech tutejszych sołectw i dojeżdżam tam bez dopłat. Zakliczyn nad Dunajcem to miasto w powiecie tarnowskim, sto kilometrów stąd — tam też dojeżdżam, ale to zupełnie inna trasa i inny termin. Wystarczy dopisać w SMS-ie „gmina Siepraw”.",
    },
    {
      question: "Wprowadziliśmy się niedawno i nawigacja nie zna naszego adresu.",
      answer:
        "To się tu zdarza często, bo gmina w dwadzieścia lat urosła o ponad jedną czwartą i nowych ulic jest sporo. Napiszcie mi w SMS-ie punkt orientacyjny — sklep, kościół, skrzyżowanie — albo przypnijcie lokalizację. Znajdę i nie doliczę za to nic.",
    },
  ],

  geo: { lat: 49.9089, lng: 19.9678 },
};
