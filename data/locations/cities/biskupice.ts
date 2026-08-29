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
 * BISKUPICE — gmina wiejska, powiat wielicki, Pogórze Wielickie.
 * SIEDZIBA W TOMASZKOWICACH, NIE W BISKUPICACH (Tomaszkowice 455,
 * 32-020 Wieliczka). 11 842 mieszkańców (31.12.2024, GUS) na 41,1 km²,
 * 281 os./km². DWANAŚCIE SOŁECTW, ALE JEDENAŚCIE MIEJSCOWOŚCI.
 *
 * OŚ STRONY: GMINA, KTÓRA URODŁA O CZTERDZIEŚCI PROCENT. +39,9%
 * ludności w latach 2002–2024, przy średnim wieku 38,5 lat i saldzie
 * migracji +194. Przyrost naturalny jest przy tym ujemny (−3) —
 * czyli gmina rośnie WYŁĄCZNIE tym, że ludzie się tu wprowadzają.
 * Saldo dojazdów do pracy −1 080: mieszka się tu, pracuje w Krakowie.
 *
 * DRUGA OŚ: SCHOWEK NA MONSTRANCJĘ WYDRĄŻONY W PNIU DĘBU (1586)
 * w kościele w Łazanach — gmina określa go jako unikatowy.
 *
 * TRZECIA: NAJWIĘKSZĄ MIEJSCOWOŚCIĄ SĄ TRĄBKI (1 691), NIE BISKUPICE
 * (1 086). Gmina, w której ani siedziba, ani największa wieś nie
 * nazywają się tak jak ona sama.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 11 842
 *   mieszkańców, 281 os./km², średni wiek 38,5 lat; WZROST O 39,9%
 *   w latach 2002–2024; 95 urodzeń, 98 zgonów (−3); SALDO MIGRACJI
 *   WEWNĘTRZNYCH +194. ⚠️ Gmina podaje 10 982 na 31.12.2025 (ewidencja
 *   meldunkowa) — używam liczby GUS z datą,
 * — SIEDZIBA: Tomaszkowice 455, 32-020 Wieliczka (biskupice.pl),
 * — SOŁECTWA (12, biskupice.pl): Biskupice, Bodzanów, Jawczyce,
 *   Łazany, Przebieczany, Sławkowice, Sułów, Szczygłów, Tomaszkowice,
 *   Trąbki, Zabłocie, ZBORÓWEK. MIEJSCOWOŚCI JEST 11 — Zborówek jest
 *   sołectwem, ale nie odrębną miejscowością,
 * — LUDNOŚĆ SOŁECTW (31.12.2025, gmina): Trąbki 1 691, Bodzanów 1 602,
 *   Przebieczany 1 447, Biskupice 1 086, Łazany 1 039, Sławkowice
 *   1 024, Tomaszkowice 719, Sułów 682, Zabłocie 602, Jawczyce 546,
 *   Szczygłów 544,
 * — DOJAZDY DO PRACY: saldo −1 080,
 * — GOSPODARKA: 1 414 podmiotów REGON; bezrobocie ok. 3,5%;
 *   STREFA AKTYWNOŚCI GOSPODARCZEJ 57,24 ha W BODZANOWIE, ok. 12 km
 *   od węzła Wieliczka na A4,
 * — ROLNICTWO: ok. 87% powierzchni to użytki rolne; lasy tylko 9,6%;
 *   silne rozdrobnienie (742 gospodarstwa 1–2 ha); gleby klas II i III,
 * — ŁAZANY: kościół Znalezienia Krzyża Świętego, fundacja XVI w.
 *   (Jakub i Stanisław Lubomirscy); SCHOWEK NA MONSTRANCJĘ WYDRĄŻONY
 *   W PNIU DĘBU, 1586 — gmina nazywa go unikatowym; nagrobek fundatorów
 *   1619; chrzcielnica koniec XVI w.,
 * — BODZANÓW: drewniany kościół św. Apostołów Piotra i Pawła z 1765 r.,
 *   trzecia świątynia w tym miejscu, rokokowe ołtarze,
 * — BISKUPICE: kościół św. Marcina — drewniany przed 1223 r., gotycki
 *   murowany po 1480 r., XV-wieczny kamienny portal, wieża 1888,
 * — PRZEBIECZANY: szyb solny należący do zakonu Bożogrobców
 *   z Miechowa; mieszkańcy zajmowali się warzeniem soli,
 * — METRYKA: najstarszy zapis 1044 r. — darowizna Kazimierza
 *   Odnowiciela dla benedyktynów z Tyńca, dotycząca Bodzanowa,
 * — JAWCZYCE: dwór z 1935 r., jedyna posiadłość w gminie
 *   nieznacjonalizowana w 1946 r.; ok. 200-letni buk amerykański
 *   — pomnik przyrody,
 * — KAPLICZKI: ponad 70 kapliczek i krzyży przydrożnych,
 * — HERB (uchwała z 3 grudnia 2003): św. Marcin na koniu, dwa
 *   skrzyżowane klucze, krzyż — od trzech parafii,
 * — KGW: Bodzanów, „Nowe Horyzonty" Przebieczany, Szczygłów,
 * — DOŻYNKI 2026: msza dożynkowa 30 sierpnia 2026, godz. 12.00,
 *   parafia Świętych Apostołów Piotra i Pawła w Bodzanowie,
 * — TRANSPORT: gmina ok. 20 km na południowy wschód od Krakowa;
 *   autobusy gminne BIS1, BIS2, BIS3; linia aglomeracyjna 274.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LISTY GMIN GRANICZĄCYCH. Gmina jej nie podaje; potwierdzone jest
 *   tylko, że KŁAJ NIE GRANICZY z Biskupicami. Piszę więc o gminach
 *   najbliższych, nie o „graniczy z",
 * — NUMERU DROGI KRAJOWEJ. Gmina podaje przestarzałe „nr 4" —
 *   nie powielam,
 * — STACJI KOLEJOWEJ W GMINIE. Nie potwierdzona ani jej obecność,
 *   ani brak — nie piszę o niej,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza niedostępna,
 * — LOKALNYCH POTRAW I NAZWANYCH FESTIWALI. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — SIEDZIBĄ GMINY SĄ TOMASZKOWICE, NIE BISKUPICE. Urząd ma adres
 *   Tomaszkowice 455,
 * — KOD POCZTOWY URZĘDU TO 32-020 WIELICZKA — to nie znaczy, że urząd
 *   leży w gminie Wieliczka,
 * — 12 SOŁECTW, ALE 11 MIEJSCOWOŚCI. Zborówek jest sołectwem bez
 *   odrębnej miejscowości,
 * — NAJWIĘKSZĄ WSIĄ SĄ TRĄBKI (1 691), NIE BISKUPICE (1 086),
 * — GMINA KŁAJ NIE GRANICZY Z BISKUPICAMI, mimo wspólnego powiatu,
 * — BISKUPICE TO BARDZO CZĘSTA NAZWA W POLSCE (śląskie, wielkopolskie,
 *   lubelskie) — zawsze doprecyzowywać powiat wielicki,
 * — POGÓRZE WIELICKIE, NIE WIŚNICKIE,
 * — KOŚCIÓŁ W BODZANOWIE JEST DREWNIANY (1765), W BISKUPICACH
 *   MUROWANY GOTYCKI — łatwo zamienić,
 * — STREFA INWESTYCYJNA LEŻY W BODZANOWIE.
 */

export const BISKUPICE: CityContent = {
  slug: "biskupice",
  h1: "Thermomix Biskupice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Biskupice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Biskupice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Tomaszkowice, Trąbki, Bodzanów, Przebieczany, Łazany. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biskupice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Biskupice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Biskupice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwunastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 12 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Biskupice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Tomaszkowicach, jak w Trąbkach, Bodzanowie, Przebieczanach czy Łazanach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "Prawie wszystkie prezentacje mam tu wieczorami i w soboty. To nie jest wyjątek, tylko norma w gminie, z której rano się wyjeżdża.",
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
      heading: "Gmina, która w dwadzieścia lat urosła o czterdzieści procent",
      paragraphs: [
        "Od dwa tysiące drugiego do dwa tysiące dwudziestego czwartego roku ludność gminy Biskupice wzrosła o niecałe czterdzieści procent. To nie jest literówka i nie jest to typowa gmina wiejska — dziś mieszka tu jedenaście tysięcy osiemset czterdzieści dwie osoby na czterdziestu jeden kilometrach kwadratowych, czyli dwieście osiemdziesiąt jeden na kilometr. Średni wiek: trzydzieści osiem i pół roku.",
        "Ciekawsze jest, skąd ten wzrost. Przyrost naturalny jest tu ujemny — dziewięćdziesiąt pięć urodzeń przy dziewięćdziesięciu ośmiu zgonach. Gmina nie rośnie dziećmi, tylko przeprowadzkami: saldo migracji wynosi plus sto dziewięćdziesiąt cztery osoby rocznie. A bilans dojazdów do pracy to minus tysiąc osiemdziesiąt. Mieszka się tu i wyjeżdża do Krakowa.",
        "Są w tej gminie trzy rzeczy, które przy pierwszym kontakcie zaskakują. Pierwsza: urząd nie stoi w Biskupicach, tylko w Tomaszkowicach. Druga: największą wsią nie są Biskupice, tylko Trąbki — tysiąc sześćset dziewięćdziesiąt jeden osób wobec tysiąca osiemdziesięciu sześciu. Trzecia: sołectw jest dwanaście, a miejscowości jedenaście, bo Zborówek jest sołectwem bez odrębnej miejscowości.",
        "Historia jest tu znacznie starsza, niż sugeruje nowa zabudowa. Najstarszy zapis pochodzi z tysiąc czterdziestego czwartego roku — darowizna Kazimierza Odnowiciela dla benedyktynów z Tyńca, dotycząca Bodzanowa. W Przebieczanach działał szyb solny należący do miechowskich Bożogrobców, a mieszkańcy warzyli sól. Wieliczka jest obok, ale sól była i tutaj.",
        "Rzecz, którą sama gmina nazywa unikatową: w kościele w Łazanach zachował się schowek na monstrancję wydrążony w pniu dębu, z tysiąc pięćset osiemdziesiątego szóstego roku. Kościół ufundowali w szesnastym wieku Jakub i Stanisław Lubomirscy, jest tam ich nagrobek z tysiąc sześćset dziewiętnastego roku i chrzcielnica z końca szesnastego wieku.",
        "Drewniany kościół świętych Apostołów Piotra i Pawła w Bodzanowie pochodzi z tysiąc siedemset sześćdziesiątego piątego roku i jest trzecią świątynią w tym miejscu. Kościół świętego Marcina w Biskupicach — murowany, gotycki, po tysiąc czterysta osiemdziesiątym roku, z kamiennym portalem z piętnastego wieku. A po całej gminie stoi ponad siedemdziesiąt kapliczek i krzyży przydrożnych.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Biskupice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, bo jest ich tu dwanaście: Biskupice, Bodzanów, Jawczyce, Łazany, Przebieczany, Sławkowice, Sułów, Szczygłów, Tomaszkowice, Trąbki, Zabłocie albo Zborówek. Dopłaty za odległość nie ma w żadnym z nich.",
        "Terminy wieczorne i sobotnie mam tu w pierwszej kolejności. Jeśli mieszkacie w nowej zabudowie, której nawigacja jeszcze nie zna — a przy takim tempie wzrostu to się zdarza — dopiszcie punkt orientacyjny albo przypnijcie lokalizację.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Biskupice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Nowy dom, stara wieś i obiad po dziewiętnastej",
      paragraphs: [
        "Czterdzieści procent wzrostu w dwadzieścia lat oznacza, że w tej gminie obok siebie mieszkają dwa rodzaje domów: te, które stoją od pokoleń, i te, które postawiono w ostatniej dekadzie. W kuchni to widać i to jest ciekawe, bo problem obu jest ten sam — czas.",
        "Bilans dojazdów minus tysiąc osiemdziesiąt osób znaczy, że w większości domów oboje dorosłych wyjeżdża rano i wraca po siedemnastej. Do tego przedszkole albo szkoła po drodze. Pytanie „co dziś na kolację” pada w kuchni, w kurtce, o dziewiętnastej — i wtedy najczęściej wygrywa dowóz.",
        "Urządzenie gotujące bez obecności rozwiązuje dokładnie ten moment. Zupa albo danie jednogarnkowe wstawione rano jest gotowe wtedy, kiedy wracacie, i nie wymaga, żeby ktoś stał obok. To nie jest szybsze gotowanie — to jest gotowanie przesunięte na porę, o której jesteście w stanie je zacząć.",
        "Druga rzecz to weekendowe gotowanie na zapas. Trzy zupy i dwa dania robi się jedno po drugim, bez pilnowania, a potem wystarczy odgrzać. W domu, z którego oboje dorosłych wyjeżdża, niedzielne popołudnie jest jedynym momentem, kiedy to jest realne.",
        "Trzecia to małe dzieci, których w nowej zabudowie jest tu dużo, bo średni wiek w gminie to trzydzieści osiem i pół roku. Kaszki i przeciery: warzywa gotują się na parze i miksują w tym samym naczyniu, bez przelewania gorących rzeczy między garnkiem a blenderem.",
        "I rzecz dla tych domów, które mają jeszcze kawałek pola — użytki rolne to prawie dziewięćdziesiąt procent powierzchni gminy, a gospodarstwa są drobne, po jednym–dwa hektary. Przy przetworach z własnych warzyw i owoców urządzenie zabiera mieszanie i pilnowanie temperatury. Nie obierze i nie wydryluje.",
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
    heading: "Biskupice i gotowanie — wieś rolnicza, która stała się przedmieściem",
    paragraphs: [
      "Prawie dziewięćdziesiąt procent powierzchni tej gminy to wciąż użytki rolne, a lasy zajmują niecałe dziesięć. Gleby są tu dobre — klasy druga i trzecia — ale gospodarstwa drobne: siedemset czterdzieści dwa z nich mają od hektara do dwóch. To jest rolnictwo domowe, nie towarowe.",
      "Kuchnia takiego miejsca jest kuchnią pogórza: ziemniaki, kapusta, mleko, mąka, zupy w dużym garnku, ciasto drożdżowe na odpust. Z tą różnicą, że obok rodziny gospodarującej od pokoleń mieszka dziś rodzina, która wprowadziła się z Krakowa pięć lat temu — i w kuchniach obu domów gotuje się inaczej.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie udało mi się zweryfikować, czy z tej gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych — baza ministerialna była dla mnie niedostępna. Nie wymyślę więc żadnej „potrawy biskupickiej”, żeby strona brzmiała bogaciej.",
      "To, co potwierdzone, to koła gospodyń, i to trzy: w Bodzanowie, w Przebieczanach — pod nazwą „Nowe Horyzonty” — i w Szczygłowie. I rytm roku wyznaczany przez parafie: msza dożynkowa dwa tysiące dwudziestego szóstego roku odbyła się trzydziestego sierpnia w Bodzanowie, w kościele świętych Apostołów Piotra i Pawła.",
      "Dla urządzenia najwięcej roboty jest przy cieście i przy przetworach. Ciasto drożdżowe, mak, kruszonka, farsze, pasty — wyrabianie i mielenie to dwie rzeczy, przy których w domowej kuchni najbardziej boli ręka. Przy przetworach z własnego ogrodu: rozdrabnianie plus podgrzewanie w stałej temperaturze, bez stania przy garnku.",
      "Czego nie zrobi: nie upiecze i nie usmaży. Blacha idzie do piekarnika, placki na patelnię. Zrobi ciasto, zrobi masę — reszta zostaje przy Was.",
    ],
  },

  districtsHeading: "Gdzie w gminie Biskupice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwunastu sołectw: Biskupic, Bodzanowa, Jawczyc, Łazan, Przebieczan, Sławkowic, Sułowa, Szczygłowa, Tomaszkowic, Trąbek, Zabłocia i Zborówka. Dopłaty za odległość nie ma nigdzie.",
    "Warto wiedzieć, że sołectw jest dwanaście, a miejscowości jedenaście — Zborówek jest sołectwem, ale nie odrębną miejscowością. Przy umawianiu i tak wygodniej podać sołectwo.",
    "Dwie rzeczy, które w tej gminie mylą najczęściej. Siedziba urzędu jest w Tomaszkowicach, nie w Biskupicach. A największą wsią są Trąbki — tysiąc sześćset dziewięćdziesiąt jeden osób — a nie Biskupice, gdzie mieszka tysiąc osiemdziesiąt sześć.",
    "Gmina leży na Pogórzu Wielickim, około dwudziestu kilometrów na południowy wschód od Krakowa, między Wieliczką, Gdowem i Dobczycami. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Nowej zabudowy jest tu sporo, bo gmina w dwadzieścia lat urosła o czterdzieści procent. Jeśli nawigacja nie zna Waszego adresu, napiszcie mi punkt orientacyjny — sklep, kościół, skrzyżowanie — albo przypnijcie lokalizację.",
  ],
  districts: [
    "Tomaszkowice",
    "Trąbki",
    "Bodzanów",
    "Przebieczany",
    "Biskupice",
    "Łazany",
    "Sławkowice",
    "Sułów",
    "Zabłocie",
    "Jawczyce",
    "Szczygłów",
    "Zborówek",
  ],

  nearbyHeading: "Wieliczka, Gdów, Dobczyce i Kraków też są na mojej trasie",
  nearbyParagraphs: [
    "Najbliżej jest stąd do Wieliczki — niecałe pięć kilometrów — potem do Gdowa, Dobczyc, Niepołomic i Świątnik Górnych. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy gminy i nie masz pewności, czy to jeszcze Biskupice, czy już Wieliczka albo Gdów — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Wieliczka",
    "Gdów",
    "Dobczyce",
    "Niepołomice",
    "Świątniki Górne",
    "Siepraw",
    "Kraków",
  ],

  about: blokOMnie("do gminy Biskupice", "w powiecie wielickim"),

  faq: [
    {
      question: "Oboje pracujemy w Krakowie. Da się umówić po pracy?",
      answer:
        "Da się i tak wygląda tu większość moich prezentacji. Z gminy Biskupice wyjeżdża do pracy o tysiąc osiemdziesiąt osób więcej, niż przyjeżdża, więc terminy wieczorne i sobotnie traktuję jako podstawowe, a nie jako wyjątek. Prezentacja trwa około dwóch godzin.",
    },
    ...faqWspolne("w gminie Biskupice"),
    {
      question: "Mieszkam w Tomaszkowicach. To jeszcze gmina Biskupice?",
      answer:
        "To nie tylko gmina Biskupice — to jej siedziba. Urząd Gminy Biskupice mieści się właśnie w Tomaszkowicach, choć adres pocztowy ma z Wieliczki. Dojeżdżam tam bez dopłat, tak samo jak do wszystkich pozostałych sołectw.",
    },
    {
      question: "Nawigacja nie zna naszej ulicy. Trafisz?",
      answer:
        "Trafię, tylko napiszcie mi punkt orientacyjny albo przypnijcie lokalizację w wiadomości. W tej gminie zdarza się to często, bo w dwadzieścia lat przybyło tu czterdzieści procent mieszkańców i nowych adresów jest sporo. Nie doliczam za to nic.",
    },
  ],

  geo: { lat: 49.9792, lng: 20.0997 },
};
