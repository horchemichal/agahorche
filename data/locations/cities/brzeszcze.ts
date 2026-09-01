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
 * BRZESZCZE — GMINA MIEJSKO-WIEJSKA w powiecie oświęcimskim.
 * 20 306 mieszkańców (GUS, 31.12.2024), 45,6 km², 450 os./km² —
 * NAJWYŻSZA GĘSTOŚĆ w powiecie. −6,2% od 2002, średni wiek 43,5 —
 * NAJSTARSZA z gmin tej fali. Saldo migracji −20 (jedyne ujemne
 * w powiecie oświęcimskim w tej fali). REGON 2 254.
 * 5 SOŁECTW + miasto: Jawiszowice, Przecieszyn, Skidziń, Wilczkowice,
 * Zasole. Prawa miejskie 1962.
 *
 * OŚ STRONY: KOPALNIA ZAJMUJE OBSZAREM GÓRNICZYM PONAD POŁOWĘ GMINY —
 * a gmina jest przy tym najgęściej zaludniona, najstarsza i jako jedyna
 * traci ludzi. Obszar górniczy „Brzeszcze II” to 26,9 km² przy 45,6 km²
 * całej gminy. Zasoby operatywne 47,1 mln ton, wydobycie ok. 1 mln ton
 * rocznie — czyli zasoby są policzone i mają koniec.
 * ⚠️⚠️ DATA 2040 POTWIERDZONA TYLKO JEDNYM SŁABYM ŹRÓDŁEM (Gazeta
 * Krakowska, artykuł o kopalni Janina, w którym Brzeszcze są wątkiem
 * pobocznym). NIE PODAWAĆ ROKU. W treści: zasoby i tempo wydobycia
 * jako liczby, bez wyliczania daty zamknięcia.
 * ⚠️⚠️ ROZDZIELENIE OD CHEŁMKA (bezpośredni sąsiad, oś „miasto
 * zaprojektowane od zera wokół fabryki Baty, nigdy nieukończone”):
 * Chełmek jest o POCZĄTKU i o mieście zbudowanym przez inwestora.
 * Brzeszcze były wsią od XV w., a kopalnia doszła do gotowej wsi
 * w 1903 r. Odwrotna kolejność. NIE SCHODZIĆ na „miasto przemysłowe”.
 * ⚠️⚠️ NIE PISAĆ O SYSTEMIE ZMIANOWYM — to oś miasta Oświęcim
 * („największy zakład w systemie czterobrygadowym”).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KOPALNIA: Zakład Górniczy Brzeszcze, od 2024 w strukturach
 *   Południowego Koncernu Węglowego S.A. KOPALNIA DZIAŁA.
 *   1898–1901 wiercenia dr. Arnolda Chaima de Porada Rapaporta;
 *   1903 drążenie szybu „Andrzej I”; 1907 początek eksploatacji
 *   na głębokości 109 m; 1913 przejęcie przez Austro-Węgry;
 *   3 listopada 1918 przejęcie przez Polską Komisję Likwidacyjną;
 *   1927 Państwowa Kopalnia Węgla Kamiennego; 1993 Nadwiślańska
 *   Spółka Węglowa; 2003 Kompania Węglowa; 2016 TAURON Wydobycie;
 *   2024 PKW. Zatrudnienie 1,3–1,5 tys. osób. Wydobycie ok. 1 mln ton
 *   rocznie. Zasoby operatywne 47,1 mln ton, prawie 39% w pokładzie
 *   510. OBSZAR GÓRNICZY „BRZESZCZE II”: 26,9 km². Złoże
 *   udokumentowane do ok. 1 150 m; główny poziom wydobywczy 640 m,
 *   najgłębszy 900 m. Wzrost historyczny: 1907–1910 z 41 226 do
 *   193 904 ton, zatrudnienie z 446 do 1 225; 1949 — 1 177 tys. ton,
 * — SOŁECTWA I POWIERZCHNIE (brzeszcze.pl): miasto 1 917 ha,
 *   Jawiszowice 1 529 ha, Skidziń 401 ha, Przecieszyn 325 ha,
 *   Zasole 316 ha, Wilczkowice 125 ha; razem 4 613 ha,
 * — PRAWA MIEJSKIE 1962. ⚠️ BRZESZCZE NIE TRACIŁY I NIE ODZYSKIWAŁY
 *   PRAW — były wsią do 1962 r. Kolizja z Czchowem, Skałą, Ryglicami,
 *   Ciężkowicami i Radłowem NIE ZACHODZI,
 * — HISTORIA: 1438 pierwsza wzmianka (⚠️ data 1401 NIE POTWIERDZONA —
 *   nie używać); 1457 Kazimierz Jagiellończyk czyni Brzeszcze
 *   własnością króla polskiego; 1772 zabór austriacki; w czasie
 *   okupacji Niemcy przemianowali wieś na Kohlendorf,
 * — PODOBÓZ JAWISCHOWITZ: 15 sierpnia 1942 utworzenie filii
 *   KL Auschwitz-Birkenau w Jawiszowicach; likwidacja 18 stycznia
 *   1945. UPAMIĘTNIENIE: pomnik proj. Bogdana Rzenno odsłonięty
 *   1 września 1983; zachowany budynek obozowej łaźni i latarnia
 *   w parku miejskim; corocznie obchodzone rocznice,
 * — KGW: KGW w Brzeszczach powstało 10 LISTOPADA 1961, pierwsza
 *   przewodnicząca Maria Senkowska; 60-lecie w 2021. Istnieje też
 *   KGW Brzeszcze-Bór i zespół „Borowianki”. Gmina należy do LGD
 *   „Dolina Soły”,
 * — KOLEJ: stacja Brzeszcze Jawiszowice, linia nr 93 Trzebinia –
 *   Czechowice-Dziedzice. Drogi: DW 933,
 * — WSPÓŁRZĘDNE (UG, ul. Kościelna 4): 49,9821449 / 19,1477780.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY ZAMKNIĘCIA KOPALNI. ⚠️ Rok 2040 ma jedno słabe źródło.
 *   NIE PODANY. W treści zasoby i tempo wydobycia jako liczby,
 *   bez wyciągania daty,
 * — SYSTEMU ZMIANOWEGO. To oś miasta Oświęcim,
 * — „MIASTA PRZEMYSŁOWEGO” JAKO RAMY. To oś Chełmka, sąsiada,
 * — CZTERODNIOWEGO TYGODNIA PRACY I OBNIŻKI WYNAGRODZEŃ w TAURON
 *   Wydobycie. Nie ustalono, czy dotyczy obecnego stanu. NIE UŻYTE,
 * — DATY 1401 jako pierwszej wzmianki. Niepotwierdzona; użyta 1438,
 * — AKTUALNEGO ROZKŁADU KOLEJOWEGO dla stacji Brzeszcze Jawiszowice.
 *   Liczby par pociągów i relacji nie ustalono. NIE PODANE,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — JAKIEJKOLWIEK KONKRETNEJ POTRAWY LOKALNEJ z Brzeszcz. ⚠️ NIE
 *   WYMYŚLAĆ „kuchni górniczej” ani prażonek — brak źródła,
 * — BEZROBOCIA I WYNAGRODZEŃ. 7 492,22 zł i 4,7% to dane POWIATOWE,
 *   identyczne dla wszystkich gmin powiatu oświęcimskiego.
 *
 * PUŁAPKI:
 * — ⚠️ PODOBÓZ JAWISCHOWITZ: fakt udokumentowany, ale NIE OŚ i NIE
 *   akapit rozbudowany. Dopuszczalne: jedno–dwa rzeczowe zdania
 *   w sekcji o sołectwach, z datami i wzmianką o pomniku z 1983 r.
 *   ZAKAZANE: liczby więźniów w nagłówku, zestawianie ich pracy
 *   z dzisiejszą pracą w kopalni, jakiekolwiek sąsiedztwo z treścią
 *   sprzedażową, wzmianka w tytule, opisie meta lub FAQ,
 * — CHEŁMEK JEST BEZPOŚREDNIM SĄSIADEM i ma oś przemysłową.
 *   Teksty muszą się różnić ramą, nie tylko faktami.
 */

export const BRZESZCZE: CityContent = {
  slug: "brzeszcze",
  h1: "Thermomix Brzeszcze – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Brzeszcze — prezentacja i cena",
  seoDescription:
    "Thermomix w Brzeszczach i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Brzeszcze — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Brzeszczach i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Brzeszcz, Jawiszowic, Skidzinia, Przecieszyna i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie pięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brzeszczach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Ponad połowa gminy leży nad kopalnią",
      paragraphs: [
        "Obszar górniczy Brzeszcze Drugie zajmuje dwadzieścia sześć i dziewięć dziesiątych kilometra kwadratowego. Cała gmina ma czterdzieści pięć i sześć dziesiątych. Czyli ponad połowa jej powierzchni to teren, pod którym się fedruje.",
        "Kopalnia działa — dziś w strukturach Południowego Koncernu Węglowego, do którego trafiła w dwa tysiące dwudziestym czwartym roku. Zatrudnia od tysiąca trzystu do tysiąca pięciuset osób i wydobywa około miliona ton węgla rocznie. Zasoby operatywne wynoszą czterdzieści siedem milionów ton, z czego prawie dwie piąte leży w jednym pokładzie, oznaczonym numerem pięćset dziesięć.",
        "Te liczby są policzone i to jest w nich najważniejsze. Nie będę podawać roku, w którym kopalnia się skończy, bo nie znalazłam na to wiarygodnego źródła. Ale różnica między zasobem a tempem wydobycia jest tu wielkością znaną wszystkim, a nie abstrakcją.",
        "Trzy inne liczby mówią zresztą to samo, tylko o ludziach. Od dwa tysiące drugiego roku gmina straciła sześć procent mieszkańców. Średni wiek wynosi czterdzieści trzy i pół roku — najwięcej w powiecie. Saldo migracji w dwa tysiące dwudziestym czwartym było ujemne, minus dwadzieścia osób.",
        "A przy tym Brzeszcze są najgęściej zaludnioną gminą powiatu: czterysta pięćdziesiąt osób na kilometr kwadratowy. Mniejszy obszar, więcej ludzi na nim, i mniej ich z roku na rok.",
        "Warto przy tym wiedzieć, że kolejność wydarzeń była tu odwrotna niż w sąsiednim Chełmku, gdzie najpierw powstała fabryka, a potem miasto. Brzeszcze były wsią co najmniej od tysiąc czterysta trzydziestego ósmego roku, a w tysiąc czterysta pięćdziesiątym siódmym Kazimierz Jagiellończyk uczynił je własnością króla polskiego. Wiercenia doktora Arnolda Rapaporta zaczęły się dopiero w tysiąc osiemset dziewięćdziesiątym ósmym, szyb Andrzej Pierwszy drążono od tysiąc dziewięćset trzeciego, a pierwszy węgiel wyjechał na powierzchnię w tysiąc dziewięćset siódmym. Kopalnia doszła do gotowej wsi, a nie odwrotnie.",
        "Prawa miejskie Brzeszcze dostały późno, bo dopiero w tysiąc dziewięćset sześćdziesiątym drugim roku — i nigdy wcześniej ich nie miały ani nie traciły.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Brzeszcze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość: samo miasto czy jedno z pięciu sołectw — Jawiszowice, Przecieszyn, Skidziń, Wilczkowice albo Zasole. Gmina jest zwarta, więc różnice w trasie są niewielkie, a w cenie żadnych.",
        "Jeśli mieszkacie w bloku i martwicie się o miejsce na blacie, powiedzcie to od razu. To akurat pytanie, na które odpowiada się najlepiej wymiarem, a nie zdjęciem — chętnie pokażę na miejscu, ile urządzenie realnie zajmuje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brzeszczach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Jedno urządzenie zamiast pięciu",
      paragraphs: [
        "Czterysta pięćdziesiąt osób na kilometr kwadratowy to najwyższa gęstość zaludnienia w powiecie — a w praktyce znaczy to, że duża część tutejszych domów to mieszkania, a duża część kuchni jest niewielka.",
        "W małej kuchni problemem nie jest to, czego brakuje, tylko to, co już stoi. Blender, malakser, mikser ręczny, robot do ciasta, czajnik — pięć sprzętów, z których każdy używany jest raz na jakiś czas, a miejsce zajmuje przez cały rok.",
        "To jest chyba najbardziej prozaiczny argument za takim urządzeniem i jednocześnie najczęściej powtarzany przez moje klientki. Zajmuje mniej więcej tyle co czajnik z podstawką, a robi to, co robiły tamte cztery. Po zakupie zwykle coś z blatu znika, a nie przybywa.",
        "Druga rzecz dotyczy zmywania. Sos, zupa i krem powstają w jednym naczyniu, bez przelewania do blendera i z powrotem. W kuchni bez zmywarki albo z małą zmywarką to jest różnica, którą czuje się codziennie.",
        "Trzecia jest o hałasie i zapachu, co w bloku ma znaczenie inne niż w domu. Naczynie jest zamknięte i izolowane, więc gotowanie nie zaparowuje kuchni tak jak otwarty garnek, a przy zupach nie roznosi zapachu po całej klatce.",
        "Czwarta, praktyczna w gminie o najstarszej strukturze wieku w powiecie: gotowanie mniejszych porcji ma tu sens częściej niż gdzie indziej. Zupa na dwa dni dla dwóch osób, a nie garnek na tydzień, który potem nudzi albo się marnuje.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Brzeszcze i gotowanie — koło gospodyń od tysiąc dziewięćset sześćdziesiątego pierwszego",
    paragraphs: [
      "Zacznę uczciwie, i będzie to dłuższe zastrzeżenie niż zwykle. Nie potwierdziłam żadnego wpisu z gminy Brzeszcze na ministerialnej Liście Produktów Tradycyjnych ani żadnej konkretnej potrawy opisanej jako tutejsza. Krąży po internecie pojęcie kuchni górniczej, ale nie znalazłam dla tej gminy ani jednego źródła, które by je wypełniło treścią — i nie zamierzam go wymyślać.",
      "To, co potwierdzone, dotyczy ludzi, a nie przepisów. Koło Gospodyń Wiejskich w Brzeszczach powstało dziesiątego listopada tysiąc dziewięćset sześćdziesiątego pierwszego roku, a jego pierwszą przewodniczącą była Maria Senkowska; sześćdziesięciolecie obchodzono w dwa tysiące dwudziestym pierwszym. Działa też koło w Brzeszczach-Borze oraz zespół Borowianki, który występuje przy dożynkach gminnych.",
      "Sześćdziesiąt kilka lat nieprzerwanej działalności jednego koła to więcej niż większość instytucji w tej okolicy. Gmina należy też do Lokalnej Grupy Działania Dolina Soły, obejmującej pięć gmin powiatu.",
      "Kuchnia jest tu taka jak w całej zachodniej Małopolsce: rosół, ziemniaki, kapusta, kluski, kotlety, ciasto drożdżowe na niedzielę. Z jedną poprawką, którą warto powiedzieć wprost: w gminie o najwyższej średniej wieku w powiecie coraz częściej gotuje się dla dwóch osób, a nie dla sześciu, i to zmienia więcej niż jakikolwiek przepis.",
      "Dla urządzenia najsensowniejsze są tu mniejsze porcje robione bez wysiłku, zupy i kremy w jednym naczyniu oraz to, że jeden sprzęt zastępuje kilka na ciasnym blacie. Czego nie zrobi, mówię wprost: nie usmaży kotleta i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Brzeszcze dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy ponad dwadzieścia tysięcy mieszkańców na czterdziestu sześciu kilometrach kwadratowych i jest najgęściej zaludnioną gminą powiatu oświęcimskiego.",
    "Sołectwa to: Jawiszowice, Przecieszyn, Skidziń, Wilczkowice i Zasole. Największe z nich, Jawiszowice, zajmuje ponad tysiąc pięćset hektarów; najmniejsze, Wilczkowice, sto dwadzieścia pięć.",
    "Obszar górniczy Zakładu Górniczego Brzeszcze obejmuje blisko dwadzieścia siedem kilometrów kwadratowych, czyli ponad połowę powierzchni gminy. Kopalnia działa od tysiąc dziewięćset siódmego roku, a od dwa tysiące dwudziestego czwartego należy do Południowego Koncernu Węglowego.",
    "W Jawiszowicach od sierpnia tysiąc dziewięćset czterdziestego drugiego do stycznia tysiąc dziewięćset czterdziestego piątego roku działał podobóz KL Auschwitz-Birkenau. Miejsce upamiętnia pomnik odsłonięty pierwszego września tysiąc dziewięćset osiemdziesiątego trzeciego roku; zachował się też budynek obozowej łaźni.",
    "Dojazd: stacja Brzeszcze Jawiszowice leży na linii kolejowej numer dziewięćdziesiąt trzy z Trzebini do Czechowic-Dziedzic. Przez gminę biegnie też droga wojewódzka dziewięćset trzydzieści trzy.",
  ],
  districts: [
    "Brzeszcze",
    "Jawiszowice",
    "Skidziń",
    "Przecieszyn",
    "Zasole",
    "Wilczkowice",
  ],

  nearbyHeading: "Oświęcim, Kęty i Chełmek też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z gminą wiejską Oświęcim, Kętami i Chełmkiem, a od zachodu z gminami województwa śląskiego. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie historyczne: w Chełmku najpierw powstała fabryka, a potem miasto wokół niej. W Brzeszczach było odwrotnie — wieś istniała co najmniej od tysiąc czterysta trzydziestego ósmego roku, a kopalnia doszła do niej dopiero na początku dwudziestego wieku.",
  ],
  nearbyTowns: [
    "Oświęcim gmina",
    "Kęty",
    "Chełmek",
    "Oświęcim",
    "Osiek",
  ],

  about: blokOMnie("do gminy Brzeszcze", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Mieszkam w Jawiszowicach albo w Skidziniu. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie pięć sołectw traktuję tak samo jak samo miasto. Gmina jest zwarta, więc różnice w trasie są niewielkie — przy umawianiu wystarczy nazwa miejscowości.",
    },
    ...faqWspolne("w Brzeszczach"),
    {
      question: "Mam małą kuchnię w bloku. Czy to się w ogóle zmieści?",
      answer:
        "Zmieści się i to jest pytanie, które w tej gminie pada najczęściej. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką — a zastępuje blender, malakser, mikser i część garnków. U większości moich klientek po zakupie z blatu coś znika, a nie przybywa. Chętnie pokażę na prezentacji dokładny wymiar, żeby to była decyzja na podstawie centymetrów, a nie zdjęcia z folderu. Warto też wiedzieć, że naczynie jest zamknięte i izolowane, więc gotowanie nie zaparowuje kuchni tak jak otwarty garnek.",
    },
  ],

  geo: { lat: 49.9821449, lng: 19.147778 },
};
