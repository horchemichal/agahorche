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
 * SZCZUROWA — gmina wiejska, powiat brzeski, w widłach Wisły i Raby,
 * Kotlina Sandomierska. 9 080 mieszkańców (31.12.2024) na 135 km²,
 * gęstość 68 os./km². DWADZIEŚCIA JEDEN SOŁECTW.
 *
 * OŚ STRONY: WODA. To NAJWIĘKSZA POWIERZCHNIOWO i NAJRZADZIEJ
 * ZALUDNIONA gmina powiatu brzeskiego — 23% jego powierzchni
 * przy gęstości pięciokrotnie niższej niż Brzesko. Płaska
 * (różnica wysokości między północą a południem to 25 m),
 * z 85 km rzek i potoków, z 78% powierzchni pod użytkami rolnymi.
 * 21 maja 2010 r. POD WODĄ BYŁO 70% TERENÓW GMINY.
 *
 * DRUGA OŚ: Uście Solne — dawne miasto królewskie na szlaku solnym
 * z Bochni, prawa miejskie od Kazimierza Wielkiego 18 maja 1360 r.,
 * utracone w 1934 r. Dziś wieś licząca ok. 950 osób.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 9 080
 *   mieszkańców, 135 km², 68 os./km², wiek średni 41,9 lat.
 *   W 2024: 68 urodzeń, 100 zgonów (−32), saldo migracji
 *   wewnętrznych −24, zagranicznych +2. Spadek z ok. 9 900 (2002)
 *   do 9 080 (2024) = −8,3% w 22 lata,
 * — POWIERZCHNIA W POWIECIE: powiat brzeski 591 km²; Szczurowa
 *   135 km² (ok. 23%), Borzęcin 102,8, Brzesko 102,7. Gęstość
 *   gminy Brzesko: 347 os./km²,
 * — SOŁECTWA (21): Barczków, Dąbrówka Morska, Dołęga, Górka,
 *   Kopacze Wielkie, Księże Kopacze, Kwików, Niedzieliska, Pojawie,
 *   Popędzyna, Rajsko, Rudy-Rysie, Rylowa, Rząchowa, Strzelce Małe,
 *   Strzelce Wielkie, Szczurowa, Uście Solne, Wola Przemykowska,
 *   Wrzępia, Zaborów,
 * — GOSPODARKA (2024): 748 podmiotów REGON (603 w 2019 — wzrost
 *   o ok. 24% w 5 lat), 82 podmioty na 1000 mieszkańców.
 *   Bezrobocie 5,0%. Wynagrodzenie 6 953,88 zł brutto.
 *   Pracujących 92 na 1000 mieszkańców,
 * — DOJAZDY DO PRACY: 413 osób wyjeżdża, 118 przyjeżdża,
 *   saldo −295. ⚠️ KIERUNKÓW NIE POTWIERDZONO — nie wymieniam miast,
 * — UŻYTKOWANIE GRUNTÓW: użytki rolne 78,13%, lasy 9,55%,
 *   tereny zabudowane 3,67%, wody 1,12%,
 * — HYDROGRAFIA: ok. 85 km rzek i potoków, wszystko w dorzeczu Wisły;
 *   przez gminę płynie też Uszwica. Uście Solne leży u ujścia Raby
 *   do Wisły. Różnica wysokości północ–południe: 25 m,
 * — POWÓDŹ 21 MAJA 2010: pod wodą 70% terenów gminy, ok. 8–9 tys. ha.
 *   Przerwany wał Uszwicy w dwóch miejscach — 50 m w Księżych
 *   Kopaczach i 80 m w Kwikowie. Całkowicie zalane: Wola
 *   Przemykowska, Księże Kopacze, Kwików. Ewakuowano ok. 1 500 osób
 *   (Gazeta Krakowska). Do 4.01.2023 Wody Polskie zakończyły remont
 *   zabezpieczeń za 2 mln zł: lewy wał Uszewki na ok. 4 km
 *   i murek oporowy na prawym wale Wisły w Woli Przemykowskiej,
 * — SUCHY ZBIORNIK KOSZYCE–SZCZUROWA („Bezpieczna Wisła"): planowana
 *   pojemność 206 mln m³, powierzchnia ok. 2 888 ha; do wysiedlenia
 *   ok. 750–800 osób. Konsultacje i protesty na przełomie 2024/2025.
 *   ⚠️ STATUSU NA 2026 R. NIE POTWIERDZONO — na stronie wspominam
 *   krótko, bez opowiadania się po żadnej stronie,
 * — UŚCIE SOLNE: prawa miejskie magdeburskie od Kazimierza Wielkiego
 *   18 maja 1360 r.; port rzeczny obsługiwał sól z Bochni spławianą
 *   Rabą i Wisłą; upadek po potopie szwedzkim 1655–1660; utrata praw
 *   miejskich w 1934 r. Pochodziło stąd trzech rektorów Uniwersytetu
 *   Jagiellońskiego. Najstarszy cech — krawiecki, XIV w. Dziś
 *   ok. 950 mieszkańców,
 * — PAŁAC KĘPIŃSKICH w Szczurowej: neogotycki, 1854–1860, projekt
 *   Filipa Pokutyńskiego; w parku odbywa się „Krakowski Wianek",
 * — DWÓR W DOŁĘDZE: XIX-wieczny zespół (dwór, park, spichlerz,
 *   chałupa), oddział muzeum w Tarnowie od ok. 40 lat, ekspozycja
 *   wsi ok. 1900 r.,
 * — „KRAKOWSKI WIANEK" — Przegląd Zespołów Regionalnych, Kapel,
 *   Grup Śpiewaczych i Śpiewaków Ludowych im. Jędrzeja Cierniaka.
 *   OD 1991 R. NA STAŁE W PARKU KĘPIŃSKICH W SZCZUROWEJ (wcześniej
 *   w Tarnowie). Ok. 800 wykonawców rocznie. 43. edycja
 *   15–16 maja 2026 r. Patron JĘDRZEJ CIERNIAK ur. 15.10.1886
 *   w ZABOROWIE w rodzinie chłopskiej, pedagog i twórca teatru
 *   ludowego, założyciel Zaborowskiego Domu Ludowego,
 * — MOST GÓRKA–SOKOŁOWICE przez Wisłę, otwarty ok. 2002 r.,
 *   23 maja 2018 r. nadano mu imię marszałka Marka Nawary.
 *   Zlikwidował konieczność korzystania z płatnych promów,
 * — DROGI: DW964 (Fornale–Dobczyce–Wieliczka–Niepołomice–Szczurowa–
 *   Biskupice Radłowskie) i DW768 (Jędrzejów–Koszyce–Brzesko,
 *   wschodnia obwodnica Szczurowej) krzyżują się w gminie.
 *   Przez gminę biegną VeloRaba i Wiślana Trasa Rowerowa,
 * — STREFA AKTYWNOŚCI GOSPODARCZEJ: 20 ha przy DW768, uzbrojona,
 *   objęta MPZP,
 * — OBSZARY CHRONIONEGO KRAJOBRAZU: ok. 70% powierzchni gminy —
 *   Doliny Wisły (848,39 ha), Radłowsko-Wierzchosławicki (1 980,91 ha),
 *   Bratucicki (4 885,97 ha), Koszycki (2,92 ha),
 * — SĄSIEDZI (8): Bochnia, Borzęcin, Brzesko, Drwinia, Koszyce,
 *   Radłów, Rzezawa, Wietrzychowice. WSZYSTKIE W MAŁOPOLSCE.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   Nie potwierdzono żadnego z tej gminy ani z powiatu brzeskiego
 *   poza kukiełką uszewską (gmina Gnojnik),
 * — NAZW PRODUCENTÓW ŻYWNOŚCI. Jedyna potwierdzona firma
 *   z branży okołorolnej produkuje preparaty do budynków
 *   inwentarskich, nie żywność dla ludzi. Nie wymieniam nazw,
 * — STRUKTURY UPRAW (fasola, ziemniaki, zboża, warzywa).
 *   Nie potwierdzona żadnym źródłem,
 * — LISTY KÓŁ GOSPODYŃ Z NAZWAMI. KGW istnieją i są aktywne,
 *   ale pełnej listy nie ustalono,
 * — ODLEGŁOŚCI I CZASÓW DO BOCHNI I TARNOWA oraz do najbliższej
 *   stacji kolejowej. Potwierdzono tylko: ok. 17 km na północ
 *   od Brzeska i ok. 52 km na wschód od Krakowa,
 * — SZCZEGÓŁÓW POWODZI 1997 W TEJ GMINIE. Potwierdzona jest
 *   tylko powódź 2010,
 * — DAT ŻYCIA JĘDRZEJA CIERNIAKA POZA DATĄ URODZENIA. Źródło gminne
 *   podaje śmierć 2.03.1942 i aresztowanie 24.04.1942, czyli PO
 *   śmierci — jedna z dat jest błędna. Nie podaję żadnej,
 * — OBSZARÓW NATURA 2000. NIE POTWIERDZONO ŻADNEGO w granicach
 *   gminy — to obszary chronionego krajobrazu, co jest inną
 *   i słabszą formą ochrony. Nie mylić pojęć.
 *
 * PUŁAPKI:
 * — GMINA SZCZUROWA NIE GRANICZY ZE ŚWIĘTOKRZYSKIM. Za Wisłą leżą
 *   Koszyce i Drwinia — obie małopolskie,
 * — REZERWAT „WIŚLISKO KOBYLE" leży w gminie Drwinia, nie tutaj,
 * — UŚCIE SOLNE TO DZIŚ WIEŚ, nie miasteczko. „Dawne miasto
 *   królewskie" jest poprawne,
 * — „KRAKOWSKI WIANEK" ODBYWA SIĘ W SZCZUROWEJ, nie w Krakowie;
 *   nazwa odnosi się do regionu etnograficznego Krakowiaków.
 *   Do 1991 r. był organizowany w Tarnowie — nie przypisywać
 *   Szczurowej całej historii jako lokalizacji,
 * — DWÓR W DOŁĘDZE JEST W GMINIE SZCZUROWA, ale zarządza nim
 *   muzeum w Tarnowie, więc bywa opisywany jako „tarnowski",
 * — KSIĘŻE KOPACZE ≠ KOPACZE WIELKIE — dwa różne sołectwa,
 * — ZABORÓW — w Polsce jest ich kilka; ten jest w gminie Szczurowa,
 * — POWIAT BRZESKI JEST DWUZNACZNY — istnieje też powiat brzeski
 *   w opolskim (Brzeg),
 * — MASAKRA ROMÓW W SZCZUROWEJ (3 lipca 1943, 93 ofiary) jest
 *   faktem tej gminy, ale to nie jest treść na stronę o gotowaniu
 *   i świadomie jej tu nie wykorzystuję.
 */

export const SZCZUROWA: CityContent = {
  slug: "szczurowa",
  h1: "Thermomix Szczurowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Szczurowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Szczurowa: bezpłatna prezentacja TM7 u Ciebie w kuchni — Szczurowa, Uście Solne, Zaborów, Strzelce Wielkie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczurowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Szczurowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Szczurowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. To najrozleglejsza gmina powiatu i dojeżdżam do wszystkich dwudziestu jeden sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 21 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Szczurowa – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Szczurowej, jak w Uściu Solnym, Zaborowie, Strzelcach Wielkich czy Woli Przemykowskiej.",
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
      heading: "Największa gmina powiatu, w której mieszka najmniej ludzi na kilometr",
      paragraphs: [
        "Szczurowa zajmuje sto trzydzieści pięć kilometrów kwadratowych, czyli blisko jedną czwartą całego powiatu brzeskiego, a mieszka w niej dziewięć tysięcy osiemdziesiąt osób. To sześćdziesiąt osiem osób na kilometr kwadratowy — pięć razy mniej niż w gminie Brzesko. Jednocześnie sołectw jest tu dwadzieścia jeden, czyli więcej niż w jakiejkolwiek innej gminie, o której pisałam w tym powiecie.",
        "Teren jest płaski w stopniu, który trudno sobie wyobrazić, jeśli zna się resztę Małopolski: różnica wysokości między północnym a południowym krańcem gminy wynosi dwadzieścia pięć metrów. Siedemdziesiąt osiem procent powierzchni to użytki rolne, lasów jest niecałe dziesięć procent, a przez gminę płynie osiemdziesiąt pięć kilometrów rzek i potoków — wszystko w dorzeczu Wisły.",
        "Ta woda jest tu tematem, a nie tłem. Dwudziestego pierwszego maja dwa tysiące dziesiątego roku pod wodą było siedemdziesiąt procent terenów gminy, czyli osiem do dziewięciu tysięcy hektarów. Wał Uszwicy pękł w dwóch miejscach — na pięćdziesięciu metrach w Księżych Kopaczach i na osiemdziesięciu w Kwikowie. Całkowicie zalane zostały Wola Przemykowska, Księże Kopacze i Kwików, ewakuowano około tysiąca pięciuset osób. Do stycznia dwa tysiące dwudziestego trzeciego roku wyremontowano tu wały za dwa miliony złotych.",
        "Jest też sprawa, o której w tej gminie mówi się od dwóch lat: planowany suchy zbiornik przeciwpowodziowy Koszyce–Szczurowa, największa taka inwestycja w Polsce, z wysiedleniem kilkuset osób. Wspominam o niej, bo byłoby dziwne udawać, że jej nie ma, ale nie jest moją rolą zajmować w tej sprawie stanowisko i nie znam jej dzisiejszego statusu.",
        "Historia daje tej gminie coś, czego nie ma żadna sąsiednia. Uście Solne, dziś wieś licząca około dziewięciuset pięćdziesięciu mieszkańców, było miastem królewskim — prawa magdeburskie nadał mu Kazimierz Wielki osiemnastego maja tysiąc trzysta sześćdziesiątego roku. Leży dokładnie u ujścia Raby do Wisły i miało port rzeczny, przez który szła sól z Bochni. Podupadło po potopie szwedzkim, a prawa miejskie straciło w tysiąc dziewięćset trzydziestym czwartym roku.",
        "Do dziś gmina jest ośrodkiem folkloru krakowskiego. Od tysiąc dziewięćset dziewięćdziesiątego pierwszego roku w parku przy neogotyckim pałacu Kępińskich odbywa się „Krakowski Wianek” — przegląd zespołów regionalnych, kapel i śpiewaków ludowych imienia Jędrzeja Cierniaka, który urodził się w tutejszym Zaborowie w chłopskiej rodzinie. Zjeżdża tu co roku około ośmiuset wykonawców; w maju dwa tysiące dwudziestego szóstego roku odbyła się czterdziesta trzecia edycja.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Szczurowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Nazwa sołectwa jest tu ważniejsza niż gdziekolwiek indziej, bo gmina ma dwadzieścia jeden miejscowości rozrzuconych na stu trzydziestu pięciu kilometrach kwadratowych. Powiedz, czy to Szczurowa, Uście Solne, Zaborów, Strzelce Wielkie czy Wola Przemykowska — dopłaty za odległość i tak nie ma nigdzie, ale trasę układam z wyprzedzeniem.",
        "Jeśli macie gospodarstwo, powiedzcie po prostu, o której macie spokojną godzinę. Dopasowuję się do obrządku i do prac polowych, nie odwrotnie — a w gminie, w której trzy czwarte powierzchni to pole, to jest sytuacja domyślna.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Szczurowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Trzy czwarte gminy to pole, a do sklepu jest kawałek",
      paragraphs: [
        "W gminie Szczurowa siedemdziesiąt osiem procent powierzchni to użytki rolne, a pracujących na miejscu jest dziewięćdziesięciu dwóch na tysiąc mieszkańców. Czterysta trzynaście osób wyjeżdża do pracy poza gminę, sto osiemnaście przyjeżdża. To znaczy, że typowy dom łączy tu dwie rzeczy: ziemię i pracę gdzie indziej.",
        "Dzień w takim domu nie ma wyraźnej pory obiadowej. Jest przerwa wtedy, kiedy da się ją zrobić, a w żniwa albo przy zbiorze nie ma jej wcale. Gotowanie musi się do tego dopasować, a nie odwrotnie — i to jest najprostszy argument, jaki mam.",
        "Wstawiasz danie jednogarnkowe i wychodzisz. Gotuje się bez nikogo, samo się wyłącza, nie przypala i czeka. Wracasz o dowolnej porze i jest ciepły obiad. To nie jest oszczędność czasu, tylko różnica między obiadem ugotowanym a obiadem odpuszczonym.",
        "Druga rzecz wynika z rozległości gminy. Przy dwudziestu jeden sołectwach na stu trzydziestu pięciu kilometrach kwadratowych do sklepu nie skoczy się na dół — jedzie się. Gotowanie z zapasem ma tu więc podwójny sens: zupa na kilka dni, sos, pasty kanapkowe, mrożonki i ciasto robione seriami w jednym naczyniu oszczędzają nie tylko czas przy garnku, ale i kursy samochodem.",
        "Trzecia rzecz to przetwory, bo w gminie z takim udziałem pola i ogrodów one po prostu są. Przeciery, powidła, dżemy, kiszonki, mrożonki i zupy do zamrożenia — urządzenie miesza samo, w stałej temperaturze i nie pozwala się przypalić. W tej robocie nie ma trudności, jest tylko liczba godzin przy blacie, i akurat tę część zabiera.",
        "I rzecz, którą powiem wprost, bo gmina się kurczy: ludności ubyło tu ponad osiem procent w dwie dekady, a średni wiek to blisko czterdzieści dwa lata. To znaczy, że jeżdżę tu do wielu domów, w których mieszkają dwie osoby, a dzieci przyjeżdżają na niedzielę. Przy gotowaniu dla dwojga nie zaoszczędzicie godziny dziennie — zmienia się co innego: łatwiej ugotować porządnie przy mniejszym wysiłku, a na niedzielę da się zrobić duży obiad bez spędzenia przy nim całego przedpołudnia.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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
    heading: "Szczurowa i gotowanie — folklor jest, produktu tradycyjnego nie ma",
    paragraphs: [
      "Powiem to od razu, żeby nie udawać: nie znalazłam żadnego wpisu z gminy Szczurowa na ministerialnej Liście Produktów Tradycyjnych. Szukałam po nazwach sołectw i po kategoriach, które w gminie nadwiślańskiej byłyby oczywiste — fasola, ziemniaki, warzywa. Nic. Nie potwierdziłam też ani jednej działającej tu piekarni, masarni czy mleczarni z nazwy.",
      "Mogłabym w to miejsce wpisać coś ogólnie małopolskiego i pewnie nikt by nie sprawdził. Nie zrobię tego. Wolę powiedzieć, czego nie ma, niż wymyślić „lokalny przysmak”, którego nikt tu nie zna.",
      "Jest za to coś, czego nie ma prawie żadna gmina w okolicy: żywy, doroczny ośrodek folkloru krakowskiego. Od tysiąc dziewięćset dziewięćdziesiątego pierwszego roku w parku przy pałacu Kępińskich odbywa się „Krakowski Wianek”, na który zjeżdża około ośmiuset wykonawców — zespoły regionalne, kapele, grupy śpiewacze i śpiewacy ludowi. Impreza nosi imię Jędrzeja Cierniaka, urodzonego w tutejszym Zaborowie w tysiąc osiemset osiemdziesiątym szóstym roku pedagoga i twórcy teatru ludowego.",
      "Drugim takim miejscem jest dwór w Dołędze — dziewiętnastowieczny zespół dworski z parkiem, spichlerzem i chałupą, od czterdziestu lat oddział muzeum, z ekspozycją pokazującą, jak wyglądała wieś około tysiąc dziewięćsetnego roku. To jest, jeśli chcecie, tutejszy odpowiednik książki kucharskiej: nie przepis, tylko obraz domu, w którym się gotowało.",
      "A koła gospodyń w gminie są i gotują — na dożynkach, na przeglądach, na biesiadach. Nie ustaliłam pełnej listy z nazwami i dlatego żadnej nie wymieniam, choć bardzo bym chciała.",
      "Co z tego wynika dla urządzenia? Tyle, co zawsze przy gotowaniu na dużą okazję, a takich jest tu kilka w roku. Różnica nie leży w trudności, tylko w liczbie godzin przy blacie: ciasto trzeba wyrobić, farsz posiekać, masę utrzeć — po wielokroć. Urządzenie zabiera dokładnie tę część roboty. Przepisu ani wprawy nie zabiera, bo nie ma jak.",
    ],
  },

  districtsHeading: "Gdzie w gminie Szczurowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu jeden sołectw, bez żadnej dopłaty za odległość: Szczurowej, Uścia Solnego, Zaborowa, Strzelec Wielkich i Małych, Woli Przemykowskiej, Dołęgi, Niedzielisk, Rylowej, Rząchowej, Rudów-Rysia, Rajska, Pojawia, Popędzyny, Kwikowa, Kopaczy Wielkich, Księżych Kopaczy, Górki, Wrzępi, Barczkowa i Dąbrówki Morskiej.",
    "To najrozleglejsza gmina powiatu brzeskiego — sto trzydzieści pięć kilometrów kwadratowych, blisko jedna czwarta powierzchni całego powiatu — i najrzadziej zaludniona: sześćdziesiąt osiem osób na kilometr kwadratowy. Właśnie dlatego przy umawianiu proszę o nazwę miejscowości; trasę i tak przejadę, ale wolę ją ułożyć z wyprzedzeniem.",
    "Leżymy w widłach Wisły i Raby, w Kotlinie Sandomierskiej. Teren jest wyjątkowo płaski — dwadzieścia pięć metrów różnicy wysokości między północą a południem gminy — a około siedemdziesięciu procent powierzchni objęte jest ochroną krajobrazową: doliny Wisły, radłowsko-wierzchosławicką, bratucicką i koszycką. To obszary chronionego krajobrazu, nie Natura dwa tysiące, i nie będę tych pojęć mieszać.",
    "Przez gminę krzyżują się dwie drogi wojewódzkie: dziewięćset sześćdziesiąt cztery z Wieliczki i Niepołomic oraz siedemset sześćdziesiąt osiem z Koszyc do Brzeska, biegnąca wschodnią obwodnicą Szczurowej. Przez Wisłę prowadzi most z Górki do Sokołowic, otwarty na początku wieku i noszący od dwa tysiące osiemnastego roku imię marszałka Marka Nawary — wcześniej jeździło się tędy płatnym promem.",
    "Kolei w gminie nie ma. Do Brzeska jest stąd około siedemnastu kilometrów na południe, do Krakowa około pięćdziesięciu dwóch na zachód. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje. I jedno sprostowanie: gmina nie graniczy z województwem świętokrzyskim — za Wisłą leżą Koszyce i Drwinia, obie małopolskie.",
  ],
  districts: [
    "Szczurowa",
    "Uście Solne",
    "Zaborów",
    "Strzelce Wielkie",
    "Strzelce Małe",
    "Wola Przemykowska",
    "Dołęga",
    "Niedzieliska",
    "Rylowa",
    "Rząchowa",
    "Rudy-Rysie",
    "Rajsko",
    "Pojawie",
    "Popędzyna",
    "Kwików",
    "Kopacze Wielkie",
    "Księże Kopacze",
    "Górka",
    "Wrzępia",
    "Barczków",
    "Dąbrówka Morska",
  ],

  nearbyHeading: "Brzesko, Bochnia, Rzezawa i Drwinia też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Szczurowa graniczy aż z ośmioma gminami: Bochnią, Borzęcinem, Brzeskiem, Drwinią, Koszycami, Radłowem, Rzezawą i Wietrzychowicami. Do każdej z nich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Szczurowa, czy już Rzezawa albo Borzęcin — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Brzesko",
    "Bochnia",
    "Rzezawa",
    "Drwinia",
    "Borzęcin",
    "Niepołomice",
    "Nowy Wiśnicz",
  ],

  about: blokOMnie("do gminy Szczurowa", "w powiecie brzeskim"),

  faq: [
    {
      question: "Mieszkam w Woli Przemykowskiej, na drugim końcu gminy. Dojedziesz?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Szczurowej. To najrozleglejsza gmina powiatu brzeskiego — sto trzydzieści pięć kilometrów kwadratowych i dwadzieścia jeden sołectw — więc odległości są tu realne, ale na cenę nie wpływają w żaden sposób. Proszę tylko o nazwę miejscowości i punkt orientacyjny, żebym mogła ułożyć trasę z wyprzedzeniem.",
    },
    ...faqWspolne("w gminie Szczurowa"),
    {
      question: "Mamy gospodarstwo. Kiedy najlepiej się umówić?",
      answer:
        "Wtedy, kiedy Wam pasuje — łącznie z przedpołudniem w dzień roboczy i z porą po obrządku. W gminie, w której trzy czwarte powierzchni to użytki rolne, to jest sytuacja domyślna, a nie wyjątek. Powiedzcie po prostu, kiedy macie spokojne dwie godziny; w żniwa i przy zbiorze sama proponuję przełożenie na spokojniejszy tydzień.",
    },
    {
      question: "Czy w gminie Szczurowa jest jakiś produkt tradycyjny?",
      answer:
        "Nie znalazłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych i wolę powiedzieć to wprost, zamiast coś wymyślać. Jest za to żywy folklor: od tysiąc dziewięćset dziewięćdziesiątego pierwszego roku w parku przy pałacu Kępińskich odbywa się „Krakowski Wianek”, doroczny przegląd zespołów regionalnych i śpiewaków ludowych, na który zjeżdża około ośmiuset wykonawców.",
    },
  ],

  geo: { lat: 50.1189, lng: 20.6375 },
};
