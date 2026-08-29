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
 * BUDZÓW — gmina wiejska, powiat suski. Sześć sołectw,
 * ok. 8,8–9,0 tys. mieszkańców na 73,4 km².
 *
 * OŚ STRONY: KLISZCZACY — północna rubież grupy. To gmina leżąca
 * dokładnie na styku góralszczyzny karpackiej i Krakowiaków,
 * a Kliszczacy są najsłabiej znaną z góralskich grup etnograficznych.
 * Dla strony o gotowaniu to znakomity materiał, bo granica grup
 * etnograficznych jest przede wszystkim granicą kuchni.
 *
 * ⚠️ OSTROŻNIE Z SFORMUŁOWANIEM. Granice grupy są sporne między
 * badaczami. Pisać „zaliczana do”, „na pograniczu”, NIGDY
 * „Budzów jest wsią kliszczacką” jako fakt bezdyskusyjny.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KLISZCZACY: Budzów, Bieńkówka, Baczyn i Jachówka wymieniane
 *   wprost jako miejscowości kliszczackie; linia
 *   Budzów–Bieńkówka–Zembrzyce opisywana jako północna rubież grupy.
 *   Źródła: etnozagroda.pl, Narodowy Instytut Kultury i Dziedzictwa Wsi,
 * — OSADNICTWO WOŁOSKIE: Bieńkówka osiedlona w 1564 r. przez ludność
 *   wołoską, Jachówka również (źródło: strona gminy),
 * — SOŁECTWA (6), stan 31.12.2023 wg raportu o stanie gminy:
 *   Budzów 2 921, Bieńkówka 2 260, Palcza 1 313, Jachówka 972,
 *   Baczyn 948, Zachełmna 546,
 * — CIEKAWY SZCZEGÓŁ: Bieńkówka zajmuje 2 046 ha, czyli 28%
 *   powierzchni gminy — jest większa OBSZAROWO niż Budzów,
 *   choć mniejsza ludnościowo,
 * — LUDNOŚĆ: 8 960 (31.12.2023, raport gminy) i 8 834 (31.12.2024,
 *   USC gminy). Powierzchnia 73,4 km² (7 359 ha) = 10,7% powiatu,
 * — DEMOGRAFIA (GUS 2024): przyrost naturalny −16, saldo migracji −12,
 *   mediana wieku 37,9 lat, przeciętna powierzchnia mieszkania
 *   105,3 m², 4,86 izby na mieszkanie, zasób 2 413 mieszkań,
 *   28 nowych mieszkań w 2024 r., bezrobocie rejestrowane 4,4%,
 * — GOSPODARKA: 863 podmioty REGON, w tym 842 mikro i 762 osoby
 *   fizyczne. CEIDG: 583 wpisy, 40 nowych firm w 2023 r.
 *   Branże wiodące: usługi budowlane, przetwórstwo, obróbka drewna,
 *   handel samochodowy, gastronomia,
 * — HISTORIA RZEMIOSŁA: wyrób gontów w Budzowie (źródło gminne),
 * — KGW (6, po jednym na sołectwo): KGW BIEŃKÓWKA założone w 1932 r.,
 *   najstarsze w gminie, 36 członkiń, przewodnicząca Cecylia Polak.
 *   KGW ZACHEŁMNA — 1964/65, reaktywacja 2008; pierwsze miejsca
 *   za wieńce dożynkowe w latach 2009, 2011, 2013, 2014, 2017, 2019;
 *   potrawa: kaczka nadziewana kaszą,
 * — DNI GMINY BUDZÓW: 23–24 sierpnia 2025 r., z Festiwalem Pierogów
 *   przygotowanym przez koła gospodyń. Dożynki są częścią Dni Gminy,
 *   nie osobną imprezą. Numer edycji nieujawniony,
 * — PALCZA: cmentarz konfederatów barskich ze starą lipą,
 * — DOJAZD: brak stacji kolejowej w gminie. Gmina podaje jako
 *   najbliższą Suchą Beskidzką; geograficznie bliżej są Zembrzyce.
 *   Droga wojewódzka 956 Zembrzyce–Budzów–Biertowice, dalej DK52/S52
 *   przez Myślenice.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — POL-GUM Z PALCZY. Wytwórnia wyrobów z lateksu w Palczy figuruje
 *   w ogłoszeniu „konkurs ofert — zakład produkcyjny”, co sugeruje
 *   sprzedaż albo postępowanie upadłościowe. STATUSU NIE
 *   ZWERYFIKOWANO — NIE WOLNO pisać, że zakład działa. Nie wymieniam
 *   go wcale,
 * — GAZYFIKACJI. Jedyny ślad to komunikat z 2018 r. o „koncepcji
 *   rozwojowej”. Nie piszę ani że gmina jest zgazyfikowana,
 *   ani że nie jest,
 * — ODLEGŁOŚCI DO KRAKOWA CO DO KILOMETRA. Dwa dokumenty tej samej
 *   gminy podają 45 i 50 km. Piszę „mniej więcej pięćdziesiąt”,
 * — WIKLINIARSTWA I WYROBÓW Z KORY. Jedyne źródło to strona gminy,
 *   prawdopodobnie tekst sprzed lat, bez potwierdzenia. Nie robię
 *   z tego „słynnego rzemiosła”,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak,
 * — KOSKOWEJ GÓRY. Leży przy Bieńkówce, ale nie ustalono, po której
 *   stronie granicy gminy jest szczyt. Nie przypisuję go Budzowowi.
 *
 * PUŁAPKI:
 * — „POLANY” NIE SĄ SOŁECTWEM. Jedno źródło wymienia siedem
 *   miejscowości; raport gminy zna sześć sołectw,
 * — LUDNOŚĆ: krąży pięć różnych liczb (8 100, 8 790, 8 818, 8 834,
 *   8 960). Zawsze z datą albo opisowo,
 * — POWIERZCHNIA 73,4 vs 73,6 km². Używam 73,4 za raportem gminy,
 * — GRANICE GRUPY KLISZCZACKIEJ SĄ SPORNE — patrz wyżej.
 */

export const BUDZOW: CityContent = {
  slug: "budzow",
  h1: "Thermomix Budzów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Budzów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Budzów: bezpłatna prezentacja TM7 u Ciebie w kuchni — Budzów, Bieńkówka, Palcza, Jachówka, Baczyn. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Budzów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Budzów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Budzów przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sześciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie sześć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Budzów – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Budzowie, jak w Bieńkówce, Palczy czy Zachełmnej.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
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
      heading: "Gmina na granicy dwóch światów",
      paragraphs: [
        "Budzów, Bieńkówka, Baczyn i Jachówka wymieniane są wśród miejscowości kliszczackich, a linia biegnąca stąd w stronę Zembrzyc opisywana jest jako północna rubież tej grupy. Kliszczacy to najsłabiej znana z góralskich grup karpackich — nie mają swojego Zakopanego, nie sprzedają się w folderach i mało kto poza etnografami umie ich umiejscowić.",
        "Muszę od razu zaznaczyć, że granice tej grupy są między badaczami sporne, więc piszę „zaliczana do”, a nie „jest”. Ale sam fakt, że przebiega tędy jakaś granica, jest bezdyskusyjny: dalej na północ zaczynają się już Krakowiacy, dalej na południe robi się góralsko na dobre.",
        "Osadnictwo ma tu zresztą wołoski rodowód. Bieńkówka została osiedlona w tysiąc pięćset sześćdziesiątym czwartym roku przez ludność wołoską, podobnie Jachówka. To ci sami pasterze, którzy szli łukiem Karpat i zostawili po sobie nazwy, sposób gospodarowania i sery.",
        "Granica etnograficzna brzmi jak temat dla muzeum, ale ma bardzo konkretne przełożenie na to, co stoi na stole. Bo granica grup to przede wszystkim granica kuchni: gdzie kończy się owies, a zaczyna pszenica, gdzie kwaśne mleko ustępuje śmietanie, gdzie zamiast placka z blachy pojawia się ciasto drożdżowe. Piszę o tym osobno, niżej.",
        "Co do dnia dzisiejszego: to gmina, w której mieszka blisko dziewięć tysięcy osób, a mediana wieku wynosi niecałe trzydzieści osiem lat — czyli młodo. Przeciętne mieszkanie ma ponad sto pięć metrów i prawie pięć izb, co oznacza dom jednorodzinny, nierzadko wielopokoleniowy. W dwa tysiące dwudziestym czwartym roku oddano tu do użytku dwadzieścia osiem nowych mieszkań.",
        "Od razu uczciwie, czego urządzenie nie zrobi: nie zastąpi wprawy i nie ugotuje bez Ciebie. Zabiera siekanie, ucieranie, mieszanie i pilnowanie, żeby nie przywarło — czyli te czynności, przez które gotowanie dla większego stołu odkłada się na dzień, w którym będzie czas.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Budzów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa i podaj punkt orientacyjny. Bieńkówka zajmuje ponad jedną czwartą powierzchni całej gminy i jest rozciągnięta na kilka kilometrów — sam numer domu bywa tam mylący. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli w domu jest gospodarstwo albo warsztat, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Budzów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Sto pięć metrów, prawie pięć izb, kilka pokoleń",
      paragraphs: [
        "Przeciętne mieszkanie w gminie Budzów ma ponad sto pięć metrów kwadratowych i blisko pięć izb. Za tymi liczbami stoi konkretny sposób życia: dom jednorodzinny, często z rodzicami albo teściami, i obiad, do którego siada więcej osób, niż wynikałoby ze statystyki gospodarstwa domowego.",
        "Mediana wieku to niecałe trzydzieści osiem lat, więc są tu dzieci — i to sporo. Gmina nie rośnie, bo przyrost naturalny i saldo migracji są lekko ujemne, ale nie jest też stara. To znaczy tyle, że jeżdżę tu do domów, w których gotuje się codziennie i dla kilku osób naraz.",
        "Gotowanie dla takiego stołu ma inną skalę. To nie są dwie porcje, tylko garnek. I to jest właśnie ta sytuacja, w której najbardziej przeszkadza konieczność stania w kuchni: pół przedpołudnia przy jednym daniu, kiedy dookoła jest dziesięć innych rzeczy do zrobienia.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe gotuje się, kiedy Ty jesteś przy zwierzętach, w ogrodzie albo z dziećmi, i samo się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie i mieszanie dzieją się bez Twojej obecności.",
        "Druga rzecz to zapasy i przetwory. Ciasto na pierogi, sosy, zupy do zamrożenia, pasty kanapkowe, powidła, chleb — da się to robić seriami, w jednym naczyniu. W domu, w którym i tak gotuje się większymi partiami, ta różnica jest odczuwalna od pierwszego tygodnia.",
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
    heading: "Kuchnia z pogranicza — i pierogi, których robi się setki",
    paragraphs: [
      "Kuchnia na granicy grup etnograficznych jest zawsze ciekawsza niż w ich środku, bo bierze z obu stron. Od południa przychodzą tu rzeczy góralskie: kwaśne mleko, ser, kasza, ziemniak, placek z blachy. Od północy, od strony Krakowiaków — mąka pszenna, ciasto drożdżowe, śmietana, mięso na niedzielę. Budzów leży dokładnie na tym styku i nie da się jego kuchni przypisać do jednej strony.",
      "Konkretna potrawa, którą mogę wskazać ze źródłem, to kaczka nadziewana kaszą — danie koła gospodyń z Zachełmnej. To koło ma zresztą imponującą listę pierwszych miejsc za wieńce dożynkowe: dwa tysiące dziewiąty, jedenasty, trzynasty, czternasty, siedemnasty i dziewiętnasty rok. Najstarsze koło w gminie działa jednak w Bieńkówce i istnieje od tysiąc dziewięćset trzydziestego drugiego roku.",
      "Jest tu też coś, co lubię najbardziej, bo jest zupełnie pozbawione patosu: Festiwal Pierogów. Robią go koła gospodyń podczas Dni Gminy w sierpniu. Nie „widowisko obrzędowe”, tylko pierogi — w liczbach, których w domu nikt nie robi.",
      "I właśnie przy tych pierogach urządzenie pokazuje, co potrafi, a czego nie. Lepienia nie przejmie — to trzeba zrobić rękami i tak zostanie. Ale ciasto wyrabia się samo, farsz miele się i miesza bez tarki i bez maszynki, a masa serowa powstaje bez ucierania. Przy dziesięciu pierogach nie ma to znaczenia. Przy trzystu ma ogromne.",
      "Muszę jeszcze dodać uczciwe zastrzeżenie, które powtarzam na każdej takiej stronie: nie znalazłam żadnego wpisu z gminy Budzów na ministerialnej Liście Produktów Tradycyjnych. Kaczka z kaszą jest tutejsza, ale to nie to samo co wpis prawny.",
    ],
  },

  districtsHeading: "Gdzie w gminie Budzów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu sołectw, bez żadnej dopłaty za odległość: Budzowa, Bieńkówki, Palczy, Jachówki, Baczyna i Zachełmnej.",
    "Warto znać jeden nieoczywisty szczegół tej gminy. Budzów jest największą miejscowością ludnościowo — blisko trzy tysiące osób, czyli jedna trzecia gminy. Ale największa obszarowo jest Bieńkówka: ponad dwa tysiące hektarów, czyli dwadzieścia osiem procent powierzchni gminy. To znaczy, że Bieńkówka jest bardziej rozciągnięta i przy umawianiu potrzebuję tam dokładniejszej wskazówki niż nazwa wsi.",
    "Cała gmina zajmuje siedemdziesiąt trzy kilometry kwadratowe, czyli mniej więcej jedną dziesiątą powiatu suskiego. Historycznie robiono tu gonty, a Bieńkówka i Jachówka zostały osiedlone w szesnastym wieku przez ludność wołoską. W Palczy zachował się cmentarz konfederatów barskich ze starą lipą.",
    "O dojeździe uczciwie: w gminie Budzów nie ma stacji ani przystanku kolejowego. Gmina wskazuje jako najbliższą stację Suchą Beskidzką, choć geograficznie bliżej są Zembrzyce, gdzie pociągi kursują. Drogą jedzie się tu wojewódzką z Zembrzyc przez Budzów do Biertowic, a dalej drogą krajową przez Myślenice. Do Krakowa jest stąd mniej więcej pięćdziesiąt kilometrów — dokumenty gminy podają czterdzieści pięć i pięćdziesiąt, więc podaję to z zastrzeżeniem.",
  ],
  districts: [
    "Budzów",
    "Bieńkówka",
    "Palcza",
    "Jachówka",
    "Baczyn",
    "Zachełmna",
  ],

  nearbyHeading: "Zembrzyce, Sucha Beskidzka i Maków też są na mojej trasie",
  nearbyParagraphs: [
    "Do Zembrzyc mam stąd najbliżej, dalej są Sucha Beskidzka, Maków Podhalański i Stryszawa. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Budzów leży na skraju powiatu, więc jeśli mieszkasz w Baczynie albo Zachełmnej, bliżej Ci bywa do Myślenic niż do Suchej. Dla umówienia terminu to bez znaczenia — dojeżdżam tak samo, a po drodze mam też gminy powiatu myślenickiego.",
  ],
  nearbyTowns: [
    "Zembrzyce",
    "Sucha Beskidzka",
    "Maków Podhalański",
    "Stryszawa",
    "Mucharz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Budzów", "w powiecie suskim"),

  faq: [
    {
      question: "Mieszkam w Bieńkówce, daleko od centrum wsi. Trafisz?",
      answer:
        "Trafię, ale poproszę o punkt orientacyjny obok adresu. Bieńkówka zajmuje ponad dwa tysiące hektarów, czyli ponad jedną czwartą powierzchni gminy, i jest rozciągnięta na kilka kilometrów — sam numer domu bywa tam mylący. Dojazd jest oczywiście bez dopłaty, niezależnie od odległości.",
    },
    ...faqWspolne("w gminie Budzów"),
    {
      question: "Czy do Budzowa dojadę pociągiem?",
      answer:
        "Nie, w gminie nie ma stacji ani przystanku kolejowego. Najbliższe czynne pociągi zatrzymują się w Zembrzycach i w Suchej Beskidzkiej, skąd trzeba dojechać dalej. Drogą prowadzi tu wojewódzka z Zembrzyc do Biertowic. Piszę to wprost, bo wolę, żebyś wiedziała wcześniej.",
    },
    {
      question: "Robimy pierogi na dużą imprezę. Czy to pomoże?",
      answer:
        "Pomoże przy wszystkim poza lepieniem — i wolę powiedzieć to uczciwie. Ciasto wyrabia się samo, farsz miele się i miesza bez maszynki, masa serowa powstaje bez ucierania. Samo lepienie zostaje rękami i tak już zostanie. Przy dziesięciu pierogach różnicy nie ma, przy trzystu jest ogromna — a w tej gminie akurat trzysta to nie jest przesada.",
    },
  ],

  geo: { lat: 49.8069, lng: 19.7458 },
};
