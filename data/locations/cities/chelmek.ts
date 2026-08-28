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
 * CHEŁMEK — miasto zaprojektowane od zera wokół jednej fabryki, i to
 * miasto nigdy nie dokończone. To jest oś tej strony.
 *
 * Bata rozplanował tu miasto na piętnaście tysięcy ludzi; postawiono
 * około procenta tego planu. Dziś w Chełmku mieszka niecałe osiem i pół
 * tysiąca osób, w bardzo zwartej, gęstej zabudowie — ponad tysiąc osób
 * na kilometr kwadratowy, przy niecałych dwóch stach w sąsiedniej
 * Alwerni. Tekst jest pisany dla mieszkanek tej właśnie zabudowy:
 * blisko wszystkiego, blisko sąsiadów, w kuchniach, które projektował
 * ktoś inny, dawno temu.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 12 283 mieszkańców gminy i 8 376 mieszkańców miasta, GUS,
 *   stan na 31.12.2024 (strona gminy podaje „ok. 13 tys. i ponad 9 tys.” —
 *   to zaokrąglenie sprzed lat, NIE UŻYWAMY go),
 * — cztery jednostki pomocnicze: sołectwa Bobrek i Gorzów oraz osiedla
 *   „Stare Miasto” i „Nowe Miasto” w mieście (chelmek.pl, BIP),
 * — powierzchnia gminy 27,3 km², gęstość ok. 454 os./km²; samo miasto
 *   8,3 km² i ok. 1 013 os./km²; lesistość gminy 39,1%,
 * — Tomáš Baťa rozpoczął budowę fabryki i osiedla w 1931 r., produkcja
 *   ruszyła na początku 1932 r.; Baťa zginął w tym samym roku, dzieło
 *   kontynuował przyrodni brat Jan Antonín,
 * — plan urbanistyczny: František Lydie Gahura (autor układu Zlína)
 *   i Miroslav Drofa; planowano miasto na 15 000 osób, ok. 1500 domów
 *   i 50 budynków fabrycznych — do 1939 r. powstało ok. 10 obiektów
 *   fabrycznych i kilkanaście domów robotniczych,
 * — 1937: ponad 2 000 pracowników, ponad 2,1 mln par butów rocznie,
 * — prawa miejskie: uchwała z 8 czerwca 1968 r., w życie 1 stycznia 1969 r.,
 *   uroczystości 25 stycznia 1969 r.; miasto miało wtedy ok. 4 tys. osób,
 * — Miejska Strefa Aktywności Gospodarczej na 27 ha po terenach fabryki,
 *   działa od 2003 r.; ok. 100 firm i ok. 2 000 miejsc pracy; od 2011 r.
 *   podstrefa Krakowskiej SSE (11,2 ha) (chelmek.pl),
 * — Dom Pamięci Baty przy ul. Stacha 3, otwarty w 2006 r., prowadzi MOKSiR,
 * — Stara Kolonia — zachowany i zamieszkany układ osiedla fabrycznego,
 *   podłączony do ciepła z dawnej kotłowni zakładowej,
 * — „buczek” — fabryczna syrena, do dziś element pamięci zbiorowej,
 * — kolej: linia nr 93, dwie stacje w gminie — Chełmek i Gorzów
 *   Chrzanowski; pociągi Kolei Małopolskich Kraków–Trzebinia–Oświęcim,
 *   cała trasa ok. 60 min,
 * — DW780 Kraków–Chełm Śląski przechodzi przez miasto; przejazd kolejowy
 *   w ciągu ul. Krakowskiej i Piastowskiej to wąskie gardło, ok. 15 tys.
 *   pojazdów na dobę; planowany tunel i rondo,
 * — zabytki Bobrka: zespół pałacowo-parkowy (pałac klasycystyczny z I poł.
 *   XIX w. na miejscu XV-wiecznego zamku), spichlerz z 1779 r., Pomnik
 *   Grunwaldzki z 1910 r. na wzgórzu Skała,
 * — Folklorystyczne Spotkania nad Przemszą — impreza wrześniowa, w 2026 r.
 *   XXVIII edycja; osobne dożynki w Bobrku i w Gorzowie; zespoły śpiewacze
 *   „Bobrowianki”, „Malwa”, „Chełmkowianki”; MOKSiR — ponad 100 imprez
 *   rocznie, kino „Iluzja”,
 * — gmina należy do LGD Dolina Soły (NIE do Doliny Karpia),
 * — nazwa miasta od staropolskiego „chełm” = wzgórze.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zwolnień grupowych w zakładzie motoryzacyjnym i rosnącego bezrobocia
 *   w powiecie. To świeża sprawa, dotycząca konkretnych rodzin. Nie ma
 *   powodu, żeby wracać do niej na stronie handlowej,
 * — miejsca Chełmka w rankingach zamożności gmin i zdań w rodzaju „miasto,
 *   które podupadło”. Ludzie tu mieszkają i nie potrzebują tego czytać,
 * — tematu likwidacji górnictwa. Wielu mieszkańców pracuje w kopalniach
 *   i data zamknięcia jest przedmiotem lęku, nie small talku,
 * — zdania „osiedle Baty wpisane do rejestru zabytków”. W wojewódzkim
 *   rejestrze WUOZ (stan I.2021) NIE MA wpisu dla Chełmka — są wpisy dla
 *   Bobrka. Ochrona układu wynika najpewniej z gminnej ewidencji zabytków
 *   i planu miejscowego. Piszemy „zachowany”, nie „wpisany do rejestru”,
 * — liczby zatrudnionych w PZPS „Chełmek” w czasach PRL. Krążą dwie
 *   (7–8 tys. w zakładzie; blisko 12 tys. z filiami) i żadnej nie da się
 *   podać bez zastrzeżeń. Piszemy o roku 1937, który jest jednoznaczny,
 * — odległości Chełmek–Katowice w kilometrach. Źródła podają 24, 29 i 40 km.
 *   Piszemy opisowo,
 * — czasu przejazdu pociągiem do Krakowa w minutach dla samego Chełmka —
 *   znany jest tylko czas dla całej trasy Kraków–Oświęcim (ok. 60 min),
 * — produktów tradycyjnych „z Chełmka”. Nie ma żadnego. Karp zatorski
 *   i gęś zatorska są z Zatora, czyli z tego samego powiatu, i tak je
 *   opisujemy.
 */
export const CHELMEK: CityContent = {
  slug: "chelmek",
  h1: "Thermomix Chełmek – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Chełmek — prezentacja i cena",
  seoDescription:
    "Thermomix w Chełmku: bezpłatna prezentacja TM7 u Ciebie w kuchni — Stare Miasto, Nowe Miasto, Bobrek i Gorzów. Dojazd bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Chełmek — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Chełmku, Bobrku i Gorzowie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Chełmka przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do całego miasta oraz do Bobrka i Gorzowa.",

  highlights: highlightyStandardowe("Chełmek, Bobrek i Gorzów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chełmku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu na Nowym Mieście, jak w domu w Bobrku.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Miasto zaprojektowane w całości — i nigdy nie dokończone",
      paragraphs: [
        "Chełmek jest jednym z niewielu polskich miast, które ktoś naprawdę zaprojektował od zera. W 1931 roku czeski przemysłowiec Tomáš Baťa zaczął tu budować fabrykę obuwia i osiedle dla robotników; produkcja ruszyła na początku 1932 roku. Plan zrobili ci sami architekci, którzy rozrysowali Zlin — z rozdzieloną strefą mieszkalną i przemysłową, prostymi ceglanymi budynkami o płaskich dachach i szeroką zieloną osią między fabryką a domami.",
        "Zaplanowano miasto na piętnaście tysięcy ludzi: około półtora tysiąca domów, czterdzieści budynków publicznych, pięćdziesiąt hal. Do wybuchu wojny zdążono postawić kilkanaście domów i garść obiektów fabrycznych — mniej więcej procent założenia. Baťa zginął jeszcze w 1932 roku i miasto już nigdy nie urosło do rozmiaru, dla którego było rozrysowane. Dlatego Chełmek jest taki, jaki jest: bardzo zwarty, bardzo gęsty i skończony w pół zdania.",
        "Fabryka natomiast działała i była wszystkim. W 1937 roku pracowało tu ponad dwa tysiące osób, które robiły ponad dwa miliony par butów rocznie. W czasach PRL zakład ściągał ludzi z całej okolicy, a fabryczna syrena — „buczek” — wyznaczała porę wyjścia i powrotu w połowie gminy. Do dziś starsi mieszkańcy opowiadają dzień przez pryzmat tego dźwięku.",
        "Dziś na dwudziestu siedmiu hektarach po fabryce działa strefa gospodarcza: około stu firm i mniej więcej dwa tysiące miejsc pracy, od opakowań i motoryzacji po drewno i budowlankę. Nie jest to już jeden zakład i jeden rytm — jest kilkadziesiąt różnych grafików, w tym sporo pracy zmianowej. Sporo osób dojeżdża też do Oświęcimia, Libiąża i na Śląsk, a pociągiem z dwóch tutejszych stacji jedzie się do Krakowa.",
        "Praktyczny wniosek dla kuchni jest prosty: w Chełmku obiad rzadko powstaje o siedemnastej dla wszystkich naraz. I bardzo często powstaje w niedużej kuchni w mieszkaniu, którego układ zaprojektowano dziewięćdziesiąt lat temu, kiedy nikt nie zakładał, że na blacie stanie sześć urządzeń.",
        "To akurat argument raczej za: w jednym naczyniu można ugotować, zmiksować i podgrzać, a zupa gotuje się sama, kiedy Ty rozpakowujesz zakupy. Thermomix nie gotuje za nikogo i nie zastąpi wprawy — zabiera tylko konieczność stania obok i pilnowania, żeby się nie przypaliło.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chełmku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, czy jesteś w mieście, w Bobrku czy w Gorzowie, i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać dania i wziąć odpowiednio więcej składników.",
        "Jedna praktyczna uwaga o godzinach: przejazd kolejowy w ciągu Krakowskiej i Piastowskiej potrafi zatrzymać pół miasta, a ruch jest tu spory. Jeśli umawiamy się na porę szczytu, zostawiam sobie kwadrans zapasu — wolę przyjechać chwilę wcześniej i poczekać w samochodzie niż zacząć spotkanie od tłumaczenia się.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chełmku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w niedużej kuchni i w rodzinie na kilka grafików",
      paragraphs: [
        "Najczęstsza sytuacja, jaką tu widzę: dwoje dorosłych pracujących w dwóch różnych miejscach i o różnych porach, dzieci ze szkoły wcześniej, i jedna kuchnia, w której to wszystko ma się zmieścić. Zwykle kończy się tym, że ta sama osoba trzy razy odgrzewa to samo, a czwarty raz robi kanapki.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować wcześniej i po prostu poczekać, a każdy weźmie sobie porcję, kiedy wejdzie. Nie trzeba stać obok, nie trzeba mieszać, urządzenie samo wyłącza się w odpowiednim momencie.",
        "Druga rzecz to miejsce. W mieszkaniach Starej Kolonii i w blokach z lat sześćdziesiątych blaty są krótkie i każdy dodatkowy sprzęt to realny problem. Na prezentacji stawiam urządzenie dokładnie tam, gdzie stałoby na co dzień — od razu widać, czy się mieści i czy nie przeszkadza w otwieraniu szafki. To lepszy sposób na sprawdzenie niż mierzenie taśmą.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — a w domu, gdzie rodzice wracają o różnych porach, to bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Chełmek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — czyli na oba osiedla, Stare Miasto i Nowe Miasto — oraz do obu sołectw, Bobrka i Gorzowa. Bez żadnej dopłaty za odległość i bez znaczenia, czy mieszkasz przy głównej ulicy, czy na końcu wsi.",
    "Chełmek jest jedną z niewielu gmin w okolicy, gdzie miasto ma formalny podział na osiedla z własnymi zarządami — to spadek po sposobie, w jaki je zaplanowano. W praktyce jednak wystarczy podać ulicę; sama się połapię, w którą stronę jechać.",
    "Osobno wymieniam Starą Kolonię, czyli zachowaną część osiedla fabrycznego. To wciąż normalne, zamieszkane domy, tylko ze specyficznym układem wnętrz i niedużymi kuchniami. Jeśli tam mieszkasz, powiedz przy umawianiu — przywożę wtedy trochę mniej rzeczy i ustawiamy się inaczej.",
    "Bobrek i Gorzów to dwie zupełnie różne wsie: Bobrek jest większy, z zespołem pałacowo-parkowym, spichlerzem z osiemnastego wieku i Pomnikiem Grunwaldzkim na wzgórzu Skała; Gorzów ma własną stację kolejową. Do obu mam z centrum kilka minut i jeżdżę tam równie często, co po mieście.",
  ],
  districts: [
    "Stare Miasto",
    "Nowe Miasto",
    "Stara Kolonia",
    "Bobrek",
    "Gorzów",
  ],

  nearbyHeading: "Oświęcim, Libiąż i reszta okolicy też są na mojej trasie",
  nearbyParagraphs: [
    "Chełmek leży między Oświęcimiem a Libiążem i do obu mam stąd kilkanaście minut. Do Chrzanowa, Trzebini, Alwerni i Brzeszcz jeżdżę tak samo — to dla mnie jedna zachodnia pętla, a granice gmin nie zmieniają niczego w warunkach.",
    "Warto wiedzieć, że gmina należy do Doliny Soły, a nie do sąsiedniej Doliny Karpia. Ale karp i tak jest tu produktem lokalnym — stawy hodowlane zaczynają się kilkanaście kilometrów stąd, a zatorski karp ma nawet unijną ochronę nazwy. Na prezentacji przed świętami to zwykle pierwsza rzecz, o którą ktoś pyta.",
  ],
  nearbyTowns: [
    "Oświęcim",
    "Libiąż",
    "Brzeszcze",
    "Chrzanów",
    "Trzebinia",
    "Alwernia",
    "Kęty",
    "Kraków",
  ],

  about: blokOMnie("do Chełmka", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Czy dojeżdżasz do Bobrka i Gorzowa?",
      answer:
        "Tak, do obu sołectw i na dokładnie tych samych warunkach co do miasta. Dojazd jest bezpłatny i nie zależy od odległości — gmina jest niewielka, więc realnie mówimy o kilku minutach różnicy.",
    },
    ...faqWspolne("w Chełmku"),
    {
      question:
        "Mam bardzo małą kuchnię. Czy to urządzenie się w niej zmieści?",
      answer:
        "Zajmuje mniej więcej tyle, co duży czajnik z podstawką. Na prezentacji stawiamy je dokładnie tam, gdzie stałoby na co dzień, i od razu widać, czy nie przeszkadza w otwieraniu szafki nad blatem. W domach na Starej Kolonii i w starszych blokach sprawdzam to zawsze na początku spotkania.",
    },
    {
      question:
        "Pracuję na zmiany. Czy da się umówić rano albo późnym wieczorem?",
      answer:
        "Tak, bez problemu. W strefie pracuje kilkadziesiąt firm i grafiki są w każdej inne, więc nie zakładam z góry żadnej godziny — mówisz, kiedy Ci pasuje, a ja układam wokół tego resztę dnia. Wczesne przedpołudnia i późne wieczory są u mnie równie normalne.",
    },
    {
      question:
        "Czy mogę zaprosić na prezentację sąsiadki albo panie z zespołu?",
      answer:
        "Jak najbardziej i w Chełmku często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 50.0972, lng: 19.2386 },
};
