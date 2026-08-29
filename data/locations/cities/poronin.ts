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
 * PORONIN — gmina wiejska, powiat tatrzański. Osiem sołectw,
 * 11 784 mieszkańców na 83,6 km².
 *
 * OŚ STRONY: MUZEUM URZĄDZONE W ZŁYM DOMU. Muzeum Lenina powstało
 * w Poroninie w 1947 r. NA PODSTAWIE BŁĘDNEJ INFORMACJI — Lenin
 * mieszkał w Białym Dunajcu, a do Poronina chodził po pocztę.
 * Przez pół wieku wieś była celem obowiązkowych wycieczek z całego
 * bloku wschodniego, a dziś nie ma po tym śladu. To fakt
 * niepowtarzalny i całkowicie rozłączny z resztą Podhala.
 *
 * ⚠️ TON: to ma być opowiedziane FAKTOGRAFICZNIE, z lekkim dystansem,
 * bez publicystyki politycznej w żadną stronę. Strona sprzedaje
 * urządzenie kuchenne, a ta historia jest tu dlatego, że jest
 * prawdziwa i że pasuje do zasady całego serwisu: sprawdzać, jak było,
 * zamiast powtarzać.
 *
 * Druga oś: ZĄB — najwyżej położona wieś w Polsce, 1013 m n.p.m.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — LENIN na Podhalu: maj–październik 1913 i maj–sierpień 1914.
 *   Mieszkał w WYNAJĘTYM DOMU TERESY SKUPIEŃ W BIAŁYM DUNAJCU;
 *   do Poronina chodził po pocztę i gazety. Aresztowany 8 sierpnia
 *   1914 r. w Nowym Targu, zwolniony 19 sierpnia, wyjechał
 *   do Szwajcarii pod koniec sierpnia,
 * — MUZEUM utworzone w Poroninie w 1947 r. przez Towarzystwo
 *   Przyjaźni Polsko-Radzieckiej, w domu Pawła Guta-Mostowego,
 *   NA PODSTAWIE BŁĘDNEJ INFORMACJI o miejscu pobytu. Po sprostowaniu
 *   budynek przebudowano w 1949 r. i otwarto ponownie 21 stycznia
 *   1950 r.; tego samego dnia uruchomiono filię „Dom Lenina”
 *   w Białym Dunajcu. Dobudowany gmach otwarto 23 lipca 1950 r.,
 * — POMNIK: brąz, autor Dmitrij P. Szwarc, odsłonięty 23 lipca
 *   1950 r., dar robotników Leningradu, wymiary 260 × 120 × 75 cm.
 *   W maju 1999 r. trafił do Muzeum Zamoyskich w Kozłówce,
 *   do plenerowej Galerii Sztuki Socrealizmu; w 2010 r. pokazywany
 *   na biennale w Carrarze,
 * — MUZEUM ZLIKWIDOWANO W 1990 R. W budynku mieści się dziś
 *   Gminny Ośrodek Kultury, ul. Piłsudskiego 2,
 * — 1970: podziemna organizacja „Ruch” (m.in. Stefan Niesiołowski)
 *   planowała na 21 czerwca 1970 r. podpalenie muzeum i wysadzenie
 *   pomnika; SB aresztowała 24 osoby dzień wcześniej. Rekonesans
 *   wykazał przy okazji, że w piwnicy muzeum pracownik handlował
 *   wódką,
 * — SZKOLNE MUZEUM HISTORYCZNO-REGIONALNE w Poroninie, od 2015 r.,
 *   ok. 800 eksponatów, opiekunka Zofia Chowaniec — bez wątku
 *   leninowskiego,
 * — ZĄB: 1013 m n.p.m., najwyżej położona wieś w Polsce, ciągnie się
 *   ok. 3 km grzbietem Gubałowskim. Lokacja 25 kwietnia 1620 r.,
 *   zatwierdzenie Zygmunta III Wazy 3 lutego 1623 r. Stąd pochodzi
 *   Kamil Stoch (ur. w Zakopanem); ponad 15 lat mieszkał tu
 *   kompozytor Henryk Mikołaj Górecki,
 * — SOŁECTWA (8): Poronin, Bustryk, Małe Ciche, Murzasichle,
 *   Nowe Bystre, Stasikówka, Suche, Ząb,
 * — LUDNOŚĆ 11 784, powierzchnia 83,6 km², 141 os./km² (GUS 2024).
 *   Siedziba jest największa,
 * — GOSPODARKA: 1 970 podmiotów REGON (2024). Wśród osób fizycznych:
 *   zakwaterowanie i gastronomia 33,7%, budownictwo 18,8%.
 *   Bezrobocie ok. 8,8%, wynagrodzenie 7 423 zł brutto (86% średniej
 *   krajowej). Gmina podaje ok. 10 000 miejsc noclegowych
 *   i ok. 20 prywatnych wyciągów,
 * — KOLEJ: stacja Poronin, ul. Piłsudskiego 99, linia nr 99
 *   Chabówka–Zakopane. Przez gminę przechodzi DK47 (zakopianka),
 * — 5 KGW: Nowe Bystre, Stasikówka, Poronin, Małe Ciche, Ząb,
 * — PORONIAŃSKIE LATO — 50. jubileuszowa edycja, 18–22 lipca 2025 r.,
 *   w programie 23. konkurs na najpiękniejszy warkocz,
 * — ŚWIĘTO BACOWSKIE — 3 maja, Tarasówka w Małem Cichem,
 *   inauguracja redyku. Numer edycji nieujawniony.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY ZWIEDZAJĄCYCH MUZEUM. Nie znalazłam wiarygodnego źródła
 *   ani rocznego, ani łącznego. NIE UŻYWAĆ ŻADNEJ LICZBY,
 * — LUDNOŚCI POSZCZEGÓLNYCH SOŁECTW jako danych GUS. Szacunki
 *   pochodzą ze strony stowarzyszenia, bez daty. Piszę opisowo,
 * — CZASÓW PRZEJAZDU KOLEJĄ. Dane pochodzą z 2020 r. i są
 *   nieaktualne — odsyłam do rozkładu,
 * — DUŻYCH PRACODAWCÓW i liczby dojeżdżających do pracy.
 *   Niepotwierdzone,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ i ich potraw,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak potwierdzonego.
 *
 * PUŁAPKI:
 * — LENIN MIESZKAŁ W BIAŁYM DUNAJCU, NIE W PORONINIE. Nigdy nie
 *   pisać „dom Lenina w Poroninie”. Poronin miał MUZEUM,
 *   Biały Dunajec miał DOM i filię,
 * — SOŁECTW JEST OSIEM, nie siedem — łatwo pominąć Małe Ciche,
 * — KAMIL STOCH urodził się w ZAKOPANEM, pochodzi z Zębu.
 *   Nie pisać „urodzony w Zębie”,
 * — OSCYPEK, BRYNDZA I REDYKOŁKA są podhalańskie, nie porońskie,
 * — SABAŁA pochodził z Kościeliska, nie stąd.
 */

export const PORONIN: CityContent = {
  slug: "poronin",
  h1: "Thermomix Poronin – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Poronin — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Poronin: bezpłatna prezentacja TM7 u Ciebie w kuchni — Poronin, Ząb, Murzasichle, Suche. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Poronin — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Poronin. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Poronin przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich ośmiu sołectw, także do Zębu, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie osiem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Poronin – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Poroninie, jak w Zębie, Murzasichlu czy Małem Cichem.",
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
      heading: "Muzeum urządzone w niewłaściwym domu",
      paragraphs: [
        "W tysiąc dziewięćset czterdziestym siódmym roku otwarto w Poroninie muzeum Lenina. Powód był prosty: Lenin spędził tu dwa sezony przed pierwszą wojną, w tysiąc dziewięćset trzynastym i czternastym. Urządzono je w domu Pawła Guta-Mostowego i przez lata zwożono tam wycieczki z całej Polski i z zagranicy.",
        "Był jeden problem: Lenin w tym domu nie mieszkał. Nie mieszkał zresztą w Poroninie w ogóle — wynajmował dom Teresy Skupień w sąsiednim Białym Dunajcu, a do Poronina chodził po pocztę i gazety. Muzeum powstało na podstawie błędnej informacji.",
        "Kiedy pomyłkę sprostowano, muzeum nie przeniesiono. Budynek przebudowano w tysiąc dziewięćset czterdziestym dziewiątym i otwarto ponownie w styczniu pięćdziesiątego, a tego samego dnia uruchomiono filię w Białym Dunajcu — tam, gdzie Lenin faktycznie mieszkał. W lipcu tego samego roku dobudowano duży gmach, a przed nim stanął pomnik z brązu, dar robotników Leningradu, dwa i pół metra wysokości.",
        "Historia ma jeszcze dwa epizody, które warto znać. W tysiąc dziewięćset siedemdziesiątym podziemna organizacja „Ruch” planowała podpalić muzeum i wysadzić pomnik; służba bezpieczeństwa aresztowała dwadzieścia cztery osoby dzień przed planowaną akcją. Przy okazji rekonesansu wyszło na jaw, że w piwnicy muzeum jeden z pracowników handlował wódką.",
        "Muzeum zlikwidowano w tysiąc dziewięćset dziewięćdziesiątym. Pomnik pojechał w maju dziewięćdziesiątego dziewiątego do Kozłówki na Lubelszczyźnie, do plenerowej galerii sztuki socrealizmu, gdzie stoi do dziś. W budynku po muzeum mieści się Gminny Ośrodek Kultury.",
        "Opowiadam to na stronie o urządzeniu kuchennym z jednego powodu: bo to jest przypowieść o sprawdzaniu faktów. Przez ponad czterdzieści lat autokary przyjeżdżały pod niewłaściwy adres, bo raz zapisano coś niedokładnie i nikt nie miał interesu, żeby to poprawić. Na tych stronach staram się robić odwrotnie i dlatego regularnie prostuję rzeczy, które brzmią dobrze, ale nie mają pokrycia.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Poronin?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa. Jest ich osiem i różnią się mocno: od Poronina przy zakopiance po Ząb, który leży na tysiąc trzynastu metrach i ciągnie się trzy kilometry grzbietem. Zimą uprzedź mnie, jeśli podjazd bywa trudny — wtedy wyjeżdżam wcześniej.",
        "Jeśli prowadzisz noclegi albo pracujesz w gastronomii, powiedz to od razu. W tej gminie jest około dziesięciu tysięcy miejsc noclegowych na niecałe dwanaście tysięcy mieszkańców, więc sezon rządzi tu wszystkim. Przedpołudnie w dzień roboczy poza sezonem bywa najlepszym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Poronin"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dziesięć tysięcy miejsc noclegowych na dwanaście tysięcy ludzi",
      paragraphs: [
        "Ta gmina ma według własnych danych około dziesięciu tysięcy miejsc noclegowych, przy niecałych dwunastu tysiącach mieszkańców. Prawie jedno łóżko na mieszkańca. Co trzeci przedsiębiorca prowadzi tu działalność w zakwaterowaniu albo gastronomii, a co piąty w budownictwie.",
        "To znaczy, że w bardzo wielu domach kuchnia pracuje na dwa fronty: dla własnej rodziny i dla gości. Śniadanie dla ośmiu osób z noclegu, a zaraz potem obiad dla swoich. Sezon, w którym przez kilka miesięcy gotuje się dwa razy więcej, i martwe miesiące, kiedy nagle jest czas.",
        "Praktycznie najbardziej przydaje się to, że danie można wstawić i wyjść. Zupa gotuje się sama i sama się wyłącza, kiedy Ty ścielisz pokoje, odbierasz kogoś z parkingu albo odśnieżasz podjazd. Nie trzeba wracać co dziesięć minut zamieszać, a przy dwóch równoległych zestawach obowiązków to jest różnica odczuwalna od pierwszego dnia.",
        "Druga rzecz to powtarzalność. Ciasto na chleb, ciasto na kluski, sos, dżem — robione seriami, zawsze tak samo. Kiedy karmi się nie tylko rodzinę, powtarzalność przestaje być wygodą, a zaczyna być warunkiem, żeby dało się to utrzymać przez cały sezon.",
        "Trzecia rzecz dotyczy tego, co dzieje się poza sezonem, i o tym mówi się najmniej. W listopadzie i kwietniu jest tu nagle spokój — i to jest właśnie moment na zrobienie zapasów, przetworów i mrożonek na następny sezon. Seriami, w jednym naczyniu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a w domu, w którym rodzice w sezonie pracują do późna, to bywa realnie potrzebne.",
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
    heading: "Poronin i gotowanie — pięć kół gospodyń i uczciwe zastrzeżenie",
    paragraphs: [
      "Zacznę od zastrzeżenia, które powtarzam na każdej podhalańskiej stronie, bo jest ważne. Oscypek, bryndza podhalańska i redykołka mają chronione nazwy pochodzenia w Unii Europejskiej, ale obszar tej ochrony obejmuje całe Podhale i część Śląska. To nie są produkty gminy Poronin — Zakopane, Kościelisko i Bukowina mają do nich dokładnie takie samo prawo. Wpisu przypisanego wprost tej gminie na ministerialnej Liście Produktów Tradycyjnych nie znalazłam.",
      "To, co tu naprawdę jest, to pięć kół gospodyń wiejskich — w Poroninie, Zębie, Nowem Bystrem, Stasikówce i Małem Cichem. Na osiem sołectw to sporo. I jest jeszcze jedna rzecz, którą lubię bardziej niż niejeden festiwal: Święto Bacowskie w Małem Cichem, trzeciego maja, będące inauguracją redyku. Nie inscenizacja dla turystów, tylko początek sezonu wypasowego.",
      "Latem odbywa się tu Poroniańskie Lato, które w dwa tysiące dwudziestym piątym roku obchodziło pięćdziesiątą edycję. W programie jest między innymi konkurs na najpiękniejszy warkocz, rozgrywany po raz dwudziesty trzeci. To jest ten rodzaj ciągłości, którego nie da się wymyślić w gabinecie.",
      "Co z tego wynika dla urządzenia? Rzecz uczciwa: przy kuchni pasterskiej niewiele. Sera nie zrobi, moskola trzeba upiec na blasze, a kwaśnica potrzebuje przede wszystkim dobrej kapusty i czasu. Za to wszystko wokół — rozdrabnianie, wyrabianie ciasta, sosy, pasty, zupy gotowane bez pilnowania — to jest dokładnie jego robota. A w gminie, w której gotuje się sezonowo dla gości i przez cały rok dla siebie, tych czynności jest dużo więcej niż odświętnych.",
    ],
  },

  districtsHeading: "Gdzie w gminie Poronin dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu sołectw, bez żadnej dopłaty za odległość: Poronina, Zębu, Murzasichla, Nowego Bystrego, Suchego, Bustryka, Stasikówki i Małego Cichego.",
    "Warto wiedzieć o Zębie, bo to sołectwo wyjątkowe: leży na tysiąc trzynastu metrach nad poziomem morza i jest najwyżej położoną wsią w Polsce. Ciągnie się około trzech kilometrów grzbietem Gubałowskim. Lokowano ją dwudziestego piątego kwietnia tysiąc sześćset dwudziestego roku, a Zygmunt III Waza zatwierdził lokację trzy lata później. Stąd pochodzi Kamil Stoch — urodzony w Zakopanem, ale zębiański — a ponad piętnaście lat mieszkał tu kompozytor Henryk Mikołaj Górecki.",
    "Cała gmina zajmuje osiemdziesiąt trzy i pół kilometra kwadratowego i liczy blisko dwanaście tysięcy mieszkańców. Poronin jest największym sołectwem. W budynku po dawnym muzeum działa dziś Gminny Ośrodek Kultury, a w szkole od dwa tysiące piętnastego roku zbierane jest Szkolne Muzeum Historyczno-Regionalne z ośmiuset eksponatami.",
    "Dojazd: przez gminę przechodzi zakopianka, a na linii z Chabówki do Zakopanego działa stacja Poronin przy ulicy Piłsudskiego. Świadomie nie podaję czasów przejazdu — dane, do których dotarłam, pochodzą sprzed kilku lat i po remontach linii są nieaktualne. Sprawdź rozkład przed podróżą.",
  ],
  districts: [
    "Poronin",
    "Ząb",
    "Murzasichle",
    "Nowe Bystre",
    "Suche",
    "Bustryk",
    "Stasikówka",
    "Małe Ciche",
  ],

  nearbyHeading: "Biały Dunajec, Zakopane i Bukowina też są na mojej trasie",
  nearbyParagraphs: [
    "Do Białego Dunajca, Zakopanego, Bukowiny Tatrzańskiej i Szaflar mam stąd po kilkanaście minut. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Skoro już o Białym Dunajcu mowa: to właśnie tam Lenin faktycznie mieszkał, a Poronin dostał muzeum przez pomyłkę. Obie gminy są na mojej trasie i, jak widać, warto je rozróżniać.",
  ],
  nearbyTowns: [
    "Biały Dunajec",
    "Zakopane",
    "Bukowina Tatrzańska",
    "Szaflary",
    "Kościelisko",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do gminy Poronin", "w powiecie tatrzańskim"),

  faq: [
    {
      question: "Mieszkam w Zębie, wysoko. Dojedziesz zimą?",
      answer:
        "Dojadę i bez dopłaty. Ząb leży na tysiąc trzynastu metrach i jest najwyżej położoną wsią w Polsce, więc proszę o uprzedzenie, jeśli podjazd bywa trudny — wtedy po prostu wyjeżdżam wcześniej. Wieś ciągnie się trzy kilometry grzbietem, więc przyda się też punkt orientacyjny obok adresu.",
    },
    ...faqWspolne("w gminie Poronin"),
    {
      question: "Czy Lenin mieszkał w Poroninie?",
      answer:
        "Nie — mieszkał w sąsiednim Białym Dunajcu, a do Poronina chodził po pocztę. Muzeum urządzono jednak w Poroninie, w tysiąc dziewięćset czterdziestym siódmym roku, na podstawie błędnej informacji. Zlikwidowano je w dziewięćdziesiątym, a w budynku działa dziś Gminny Ośrodek Kultury. Pomnik stoi od dwudziestu kilku lat w Kozłówce na Lubelszczyźnie.",
    },
    {
      question: "Prowadzę pokoje gościnne. Czy to się nada do śniadań dla gości?",
      answer:
        "Do śniadań, wypieków, past, zup i sosów tak, i to bardzo częsty scenariusz w tej gminie. Powiem jednak uczciwie: to nie jest urządzenie gastronomiczne i przy większej liczbie gości gotuje się partiami. Na prezentacji policzę to na Waszych realnych ilościach, nie na przepisie dla czterech osób, żebyś wiedziała, na czym stoisz.",
    },
  ],

  geo: { lat: 49.3417, lng: 20.0111 },
};
