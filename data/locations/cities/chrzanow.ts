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
 * CHRZANÓW — jedyne miasto w tym zestawie leżące w ZACHODNIEJ Małopolsce,
 * na granicy z Górnym Śląskiem. To zmienia całą treść: teksty o „szybkim
 * dojeździe do Krakowa”, które pasują do Bochni czy Wieliczki, tutaj byłyby
 * połową prawdy — z Chrzanowa dojeżdża się w dwie strony, do Krakowa
 * i na Śląsk, i to drugie bywa bliżej.
 *
 * FAKTY UŻYTE W TEKŚCIE I SKĄD POCHODZĄ:
 * — 10 osiedli jako jednostki pomocnicze gminy: Północ-Tysiąclecie,
 *   Rospontowa, Kościelec, Stella, Kąty, Borowiec, Niepodległości,
 *   Młodości, Stara Huta, Śródmieście (chrzanow.pl, „Jednostki pomocnicze
 *   / Osiedla”),
 * — 6 sołectw gminy Chrzanów: Balin, Luszowice, Płaza, Pogorzyce, Źrebce,
 *   Okradziejówka (to samo źródło, osobna kategoria),
 * — Chrzanów jest siedzibą powiatu chrzanowskiego; pozostałe gminy powiatu
 *   to Trzebinia, Libiąż, Alwernia i Babice,
 * — gmina graniczy z Jaworznem, czyli z województwem śląskim,
 * — miasto leży przy autostradzie A4 i przy linii kolejowej
 *   Kraków — Katowice,
 * — Fablok (Pierwsza Fabryka Lokomotyw w Polsce) jako historyczna
 *   tożsamość przemysłowa miasta — dziś obiekt muzealny i szlak
 *   turystyczny, nie zakład produkcyjny,
 * — Muzeum w Chrzanowie im. Ireny i Mieczysława Mazarakich.
 *
 * CZEGO TU ŚWIADOMIE NIE MA:
 * — liczby mieszkańców (GUS podaje ok. 33,7 tys. na koniec 2024, ale liczba
 *   spada i szybko się zestarzeje; na stronie sprzedażowej nie wnosi nic),
 * — nazwiska największego pracodawcy — nie mam tego potwierdzonego dla
 *   Chrzanowa, a takie zdanie już raz musiałam usuwać z Bochni,
 * — roku założenia Fabloku i losów zakładu — pamiętam liczby z grubsza,
 *   a „z grubsza” nie wystarczy, żeby to napisać,
 * — cen dań w chrzanowskich lokalach (patrz `costs.note`).
 *
 * PUŁAPKA DO ZAPAMIĘTANIA: na oficjalnej stronie gminy osiedle Rospontowa
 * jest zapisane z literówką („Rosponotwa”). Poprawna forma to Rospontowa
 * i tak jest w Wikipedii oraz w nazwach ulic.
 */
export const CHRZANOW: CityContent = {
  slug: "chrzanow",
  h1: "Thermomix Chrzanów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Chrzanów — prezentacja i cena",
  seoDescription:
    "Thermomix w Chrzanowie: bezpłatna prezentacja TM7 u Ciebie w kuchni — wszystkie osiedla, sołectwa i powiat. Cena, raty 0,6%, pomoc po zakupie. Tel. 517 185 691.",
  ogTitle: "Thermomix Chrzanów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Chrzanowie — od Śródmieścia po Kościelec i sołectwa. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Do Chrzanowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam na wszystkie osiedla i do sołectw gminy.",

  highlights: highlightyStandardowe("Chrzanów i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chrzanowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam do Ciebie z całym wyposażeniem: z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Działa to identycznie w bloku na Północy, jak w domu w Kościelcu czy w Balinie.",
        "Potem po prostu gotujemy. Zwykle coś na obiad, coś słodkiego i, jeśli chcesz, coś z tego, co masz akurat w lodówce — bo to najlepiej pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje. Powiedz mi wcześniej, ile osób jest w domu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec siadamy do liczb: aktualna cena, promocja, która akurat obowiązuje, i rata przy różnych okresach spłaty. Niczego nie domykam tego samego dnia. „Przemyślę” to odpowiedź, którą słyszę często i która nic nie kosztuje — ani Ciebie, ani mnie.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Chrzanów dojeżdża w dwie strony — i to widać w kuchni",
      paragraphs: [
        "Chrzanów leży dokładnie pomiędzy: autostrada A4 i linia kolejowa Kraków — Katowice przechodzą tędy, a granica z Jaworznem, czyli z województwem śląskim, biegnie tuż obok. Skutek jest taki, że mieszkańcy dojeżdżają do pracy w obie strony — jedni na wschód do Krakowa, drudzy na zachód na Śląsk. Prawie żadne inne miasto w Małopolsce nie ma takiego układu.",
        "Dla kuchni oznacza to jedną, bardzo konkretną rzecz: obiad rzadko powstaje o stałej porze. Kiedy wyjeżdża się przed siódmą i wraca po siedemnastej, a druga osoba w domu wraca o zupełnie innej godzinie, nie ma momentu, w którym wszyscy siedzą razem przy stole. Gotowanie „na świeżo, na teraz” po prostu przestaje wychodzić.",
        "I tutaj urządzenie realnie pomaga, choć nie w sposób, który dobrze wygląda w reklamie. Potrawa ugotowana rano czeka i odgrzewa się w tym samym naczyniu, w którym powstała — bez brudzenia kolejnych garnków. Większy garnek zrobiony raz rozkłada się na dwa dni tak, żeby drugiego dnia nie było poczucia jedzenia resztek. A samo gotowanie nie wymaga stania obok, więc mieści się w czasie, w którym i tak robisz coś innego.",
        "Jeśli w domu ktoś pracuje zmianowo — a w tej części Małopolski to nadal częste — dochodzi jeszcze jedno: TM7 pracuje ciszej od poprzedniego modelu. Przy kimś, kto śpi po nocce, bywa to ważniejsze niż wszystkie funkcje razem wzięte.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chrzanowie?",
      paragraphs: [
        "Najprościej zadzwonić — zwykle wystarczy jedna krótka rozmowa, żeby ustalić dzień i godzinę. Jeśli nie lubisz rozmawiać przez telefon, napisz SMS albo zostaw kontakt w formularzu na dole strony; wtedy podaj porę, o której mogę oddzwonić, żebym nie trafiła akurat w zebranie albo w drogę powrotną z pracy.",
        "Powiedz od razu dwie rzeczy: na którym osiedlu albo w której miejscowości mieszkasz i ile osób będzie na spotkaniu. Pierwsza pozwala mi ułożyć trasę, druga — dobrać, co ugotujemy i ile składników wziąć. Jeśli pracujesz na zmiany, wystarczy, że podasz, które dni odpadają; łatwiej mi ułożyć trasę wokół Twojego grafiku niż Tobie dopasować się do mojego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chrzanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chrzanowa",
      paragraphs: [
        "Chrzanów jest miastem o dwóch bardzo różnych twarzach i widać to od progu. Osiedla takie jak Północ-Tysiąclecie, Młodości czy Niepodległości to zabudowa blokowa z kuchnią jako osobnym, niedużym pomieszczeniem — takim, w którym na blacie mieści się dokładnie jedna deska. Kościelec, Borowiec, Stara Huta i sołectwa to w większości domy jednorodzinne z kuchnią większą niż niejeden pokój w bloku.",
        "W bloku najczęstsza obiekcja brzmi „nie mam gdzie tego postawić”. Odpowiedź nie jest marketingowa, tylko arytmetyczna: urządzenie zajmuje miejsce jednego większego sprzętu, a zastępuje kilka — miksuje, gotuje, waży, wyrabia ciasto i gotuje na parze w jednym naczyniu. Na prezentacji stawiamy je na Twoim blacie i po prostu widać, ile realnie zajmuje.",
        "W domu z ogrodem rozmowa idzie w zupełnie inną stronę: na pierwszy plan wychodzi Varoma i przetwory, czyli co zrobić z warzywami i owocami, kiedy przychodzą naraz i wszystkie w tym samym tygodniu. Konfitury i przeciery gotują się z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć — bez stania nad garnkiem przez godzinę.",
        "Wąskie gardło jest w obu przypadkach to samo: obiad dla kilku osób, który trzeba zrobić po pracy. Thermomix ugotuje i zmiksuje w jednym naczyniu, bez przekładania gorących rzeczy, a na parze zrobi równolegle porcję dla dziecka.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  costs: {
    heading: "Obiad w domu czy na mieście – jak to policzyć w Chrzanowie",
    paragraphs: [
      "W Chrzanowie ta rachuba wygląda inaczej niż w dużym mieście, bo tutaj obiad „na mieście” najczęściej nie oznacza wyjścia do lokalu wieczorem. Oznacza coś zjedzonego w pracy w Krakowie albo na Śląsku, albo kupionego po drodze do domu, bo wracasz o osiemnastej i nie masz już siły zaczynać od obierania.",
      "Dlatego licz nie tylko restauracje. Policz też te wszystkie „coś po drodze”, które w miesiącu sumują się w kwotę, o której nikt nie myśli, bo rozkłada się na dwadzieścia drobnych paragonów. Poniżej szkielet dla czteroosobowej rodziny — podstaw własne liczby.",
    ],
    rows: [
      { label: "Obiad w środku tygodnia (4 osoby)", home: "koszt składników", out: "4 × cena dania na mieście" },
      { label: "Jedzenie kupione po drodze z pracy", home: "—", out: "policz paragony z ostatniego miesiąca" },
      { label: "Ile razy w miesiącu", home: "policz swoje dni", out: "policz swoje dni" },
      { label: "Czas przygotowania", home: "gotuje bez pilnowania", out: "postój po drodze albo czekanie na dowóz" },
    ],
    note:
      "Nie wpisuję tu kwot za dania w chrzanowskich lokalach ani cen zestawów na wynos. Zmieniają się z miesiąca na miesiąc, a cena podana „na sztywno” po pół roku byłaby po prostu nieprawdą — i nie chcę, żeby to była pierwsza nieprawda, jaką u mnie przeczytasz.",
    closing:
      "Nie obiecuję, że urządzenie „zwróci się po X miesiącach”, bo nie znam Twoich nawyków i każda taka liczba byłaby zmyślona. To, co widzę u swoich klientek, to zmiana nawyku: kiedy obiad przestaje wymagać stania przy garnku, znikają te wieczory, w które kupowało się coś po drodze z bezradności, a nie z ochoty.",
  },

  culinary: {
    heading: "Kuchnia z pogranicza — Małopolska i Śląsk przy jednym stole",
    paragraphs: [
      "Chrzanów leży na styku dwóch kuchni i to jedna z ciekawszych rzeczy w tym mieście. Gmina graniczy z Jaworznem, czyli z województwem śląskim, a przez pokolenia ludzie przenosili się tu w obie strony za pracą. Efekt jest taki, że w jednym chrzanowskim domu na niedzielny obiad robi się roladę z kluskami śląskimi i modrą kapustą, a w domu obok rosół i schabowego — i nikomu nie przychodzi do głowy, żeby uznać to za coś dziwnego.",
      "Co ciekawe, akurat te potrawy są dobrym testem dla urządzenia, bo wszystkie wymagają nie umiejętności, tylko czasu i cierpliwości. Rolada potrzebuje długiego, spokojnego duszenia. Modra kapusta tym dłużej, im lepiej ma smakować. Kluski śląskie zaczynają się od ziemniaków ugniecionych naprawdę gładko — a to jest dokładnie ta praca, którą Thermomix przejmuje w całości, razem z pilnowaniem temperatury i mieszaniem, żeby nic nie przywarło.",
      "Na co dzień gotuje się tu oczywiście to samo, co wszędzie: zupa na dwa dni, coś z mielonym, naleśniki, kiedy trzeba szybko. Jeśli powiesz mi wcześniej, na czym Ci zależy, chętnie ugotuję na spotkaniu coś z Waszej półki zamiast kolejnego smoothie. To zwykle o wiele uczciwszy test.",
    ],
  },

  districtsHeading: "Gdzie w Chrzanowie i gminie umówisz prezentację?",
  districtsParagraphs: [
    "Dojeżdżam na wszystkie osiedla Chrzanowa i do wszystkich sołectw gminy — bez dopłat i bez różnicy, czy mieszkasz w Śródmieściu, na Stelli, czy w Płazie.",
    "Warto wiedzieć, że gmina Chrzanów dzieli się formalnie na dwa rodzaje jednostek i nazwy z obu kategorii bywają mieszane w rozmowie. Miasto ma dziesięć osiedli z własnymi radami: Śródmieście, Północ-Tysiąclecie, Rospontowa, Kościelec, Stella, Kąty, Borowiec, Niepodległości, Młodości i Stara Huta. Poza granicami miasta jest sześć sołectw: Balin, Luszowice, Płaza, Pogorzyce, Źrebce i Okradziejówka.",
    "Dla samej prezentacji ten podział nie ma żadnego znaczenia — wszędzie potrzebny jest blat i gniazdko. Ma za to znaczenie dla trasy i dla tego, ile czasu rezerwuję, więc przy umawianiu podaj po prostu nazwę osiedla albo miejscowości, a nie „Chrzanów”. Do sołectw dojazd jest tak samo bezpłatny jak do centrum.",
    "Chrzanów jest też siedzibą powiatu, więc naturalnie jeżdżę stąd dalej — do Trzebini, Libiąża, Alwerni i Babic. Jeśli umawiasz się z sąsiadką albo siostrą z innej gminy powiatu, często da się ustawić oba spotkania jednego dnia.",
  ],
  districts: [
    "Śródmieście",
    "Północ-Tysiąclecie",
    "Rospontowa",
    "Kościelec",
    "Stella",
    "Kąty",
    "Borowiec",
    "Niepodległości",
    "Młodości",
    "Stara Huta",
    "Balin",
    "Luszowice",
    "Płaza",
    "Pogorzyce",
    "Źrebce",
    "Okradziejówka",
  ],

  nearbyHeading: "Powiat chrzanowski i okolice też obsługuję",
  nearbyParagraphs: [
    "Chrzanów jest dla mnie punktem, z którego rozchodzą się trasy po zachodniej Małopolsce. Do pozostałych gmin powiatu — Trzebini, Libiąża, Alwerni i Babic — dojeżdżam normalnie i bez dopłat.",
    "Przy dalszych kierunkach umawiam zwykle kilka spotkań w jednym rejonie tego samego dnia. Dlatego zdarza mi się zaproponować termin kilka dni później niż najbliższy wolny — za to taki, w którym mam spokojnie czas i nie patrzę na zegarek.",
  ],
  nearbyTowns: [
    "Trzebinia",
    "Libiąż",
    "Alwernia",
    "Babice",
    "Chełmek",
    "Oświęcim",
    "Jaworzno",
    "Krzeszowice",
    "Olkusz",
    "Skawina",
    "Kraków",
  ],

  about: blokOMnie("do Chrzanowa", "w Chrzanowie, Trzebini i Libiążu"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Chrzanowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Chrzanowa i do całego powiatu chrzanowskiego jest bezpłatny, tak samo jak sama prezentacja. Nie ma dopłaty za odległość od Krakowa — obsługuję całą Małopolskę i zachodnia część nie jest tu żadnym wyjątkiem.",
    },
    ...faqWspolne("w Chrzanowie"),
    {
      question: "Czy dojeżdżasz do sołectw — Balina, Luszowic, Płazy, Pogorzyc?",
      answer:
        "Tak, do wszystkich sześciu sołectw gminy, łącznie ze Źrebcami i Okradziejówką. Dojazd jest bezpłatny i nie zależy od tego, jak daleko od centrum Chrzanowa mieszkasz.",
    },
    {
      question: "Pracuję na Śląsku i wracam późno. Da się umówić na nietypową porę?",
      answer:
        "Tak i w Chrzanowie zdarza się to bardzo często — połowa moich spotkań w tym rejonie zaczyna się po osiemnastej. Podaj przy umawianiu, które dni albo godziny odpadają, a ułożę trasę wokół Twojego grafiku.",
    },
    {
      question: "Mam małą kuchnię w bloku na osiedlu. Czy Thermomix się zmieści?",
      answer:
        "Zajmuje miejsce mniej więcej jednego większego urządzenia, a zastępuje kilka — miksuje, gotuje, waży, wyrabia ciasto i gotuje na parze. Na prezentacji stawiamy go na Twoim blacie i od razu widać, ile realnie zajmuje i czy zostaje miejsce na deskę.",
    },
    {
      question: "Czy w Thermomixie zrobię kluski śląskie i modrą kapustę?",
      answer:
        "Tak i to akurat dobry przykład. Ziemniaki na kluski da się ugnieść naprawdę gładko, a modra kapusta i rolada potrzebują długiego duszenia z ustawioną temperaturą i mieszaniem — czyli dokładnie tego, co urządzenie robi bez pilnowania. Jeśli chcesz, ugotujemy coś takiego na spotkaniu.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki albo rodzinę?",
      answer:
        "Jak najbardziej i w mniejszych miastach często tak to wygląda. Powiedz tylko przy umawianiu, ile osób będzie, żebym wzięła więcej składników i dobrała przepisy pod większą grupę.",
    },
  ],

  geo: { lat: 50.1356, lng: 19.4014 },
};
