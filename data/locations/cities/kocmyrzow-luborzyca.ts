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
 * KOCMYRZÓW-LUBORZYCA — GMINA WIEJSKA w powiecie krakowskim.
 * 18 516 mieszkańców (GUS, 31.12.2024; ewidencja gminy 16 540 na
 * 31.12.2025), 82,92 km². 25 SOŁECTW, 26 miejscowości.
 * ⚠️⚠️ SIEDZIBA URZĘDU JEST W LUBORZYCY (ul. Jagiellońska 7),
 * NIE W KOCMYRZOWIE — mimo że Kocmyrzów jest pierwszym członem nazwy.
 * Sama gmina pisze: „budynek urzędu gminy znajduje się po stronie
 * Luborzycy”. Google Maps i Waze pokazują ten adres jako „Kocmyrzów”.
 *
 * OŚ STRONY: SZEŚĆSET LAT ROZMOWY WSI Z UNIWERSYTETEM. W 1401 r. biskup
 * Piotr Wysz przekazał beneficjum luborzyckie AKADEMII KRAKOWSKIEJ —
 * dochody z tych pól szły na uniwersytet, a w XV w. działała tu szkoła
 * parafialna. Dziś w PRUSACH stoi Rolnicze Gospodarstwo Doświadczalne
 * Uniwersytetu Rolniczego (rolnictwo precyzyjne, mapowanie plonu),
 * a raz w roku odbywają się DOŻYNKI GMINNO-UNIWERSYTECKIE — osiemnaście
 * kół gospodyń i uczelnia na jednym polu. Wszystko na glebach, z których
 * ok. 75% należy do klas bonitacyjnych I–III.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (o ile nie zaznaczono — UG kocmyrzow-luborzyca.ug.gov.pl):
 * — 1401 — bp PIOTR WYSZ przekazuje beneficjum luborzyckie Akademii
 *   Krakowskiej; w XV w. działa szkoła parafialna,
 * — RGD UR: Rolnicze Gospodarstwo Doświadczalne Uniwersytetu Rolniczego
 *   im. Hugona Kołłątaja, główna siedziba w PRUSACH; łączna powierzchnia
 *   212 ha (Prusy + Mydlniki + Garlica Murowana); uprawy pszenica,
 *   kukurydza, rzepak, buraki cukrowe; RGD powstało w 2010, wcześniej
 *   od 1994 Stacja Doświadczalna; po II wojnie część majątku w Prusach
 *   przeszła na Akademię Rolniczą (Zakład Doświadczalny Hodowli Roślin);
 *   demonstruje rolnictwo precyzyjne, mapowanie plonu, zmienne nawożenie
 *   (CDR — krajowa sieć gospodarstw demonstracyjnych),
 * — DOŻYNKI GMINNO-UNIWERSYTECKIE w Prusach: edycja 2025 w niedzielę
 *   31 sierpnia, TRZECIA z kolei; udział 18 KÓŁ GOSPODYŃ WIEJSKICH
 *   i 2 stowarzyszenia (m.in. KGW Prusy, Łuczyce, Sulechów, Głęboka,
 *   Wilków, Karniów); wieńce, chleby, domowe potrawy, polowa msza,
 * — GLEBY: ok. 75% gruntów to klasy bonitacyjne I–III. Dominują zboża
 *   i ziemniaki, hodowla trzody chlewnej,
 * — HISTORIA: 1218–1229 bp bł. IWO ODROWĄŻ funduje drewniany kościół
 *   w Luborzycy (Podwyższenia Krzyża Świętego), najstarszy zachowany
 *   kościół gminy; 1289 pierwsza wzmianka o Prusach (własność
 *   arcybiskupów gnieźnieńskich); 1367 pierwsza wzmianka o Kocmyrzowie
 *   (sprzedaż domu przez Abrahama Kośmirzowskiego); 28.10.1393 wizyta
 *   WŁADYSŁAWA JAGIEŁŁY w Luborzycy; 2–3.12.1393 wizyta ŚW. JADWIGI;
 *   1–3.04.1794 TADEUSZ KOŚCIUSZKO stacjonuje w Luborzycy i reorganizuje
 *   wojsko, 3 kwietnia wymarsz ku Racławicom, 4 kwietnia BITWA POD
 *   RACŁAWICAMI; 1865 Luborzyca siedzibą gminy; 14.12.1899 otwarcie
 *   kolei Kraków–Kocmyrzów; 1934 utworzenie sołectwa Wysiołek Luborzycki;
 *   1973 połączenie w gminę Kocmyrzów-Luborzyca,
 * — DLACZEGO DWUCZŁONOWA NAZWA: Luborzyca starsza i ważniejsza (parafia
 *   od XIII w., siedziba gminy od 1865); Kocmyrzów nabrał znaczenia
 *   w XIX w. dzięki kolei (stacja, poczta, sklepy, magazyny),
 * — KOLEJ (WZMIANKA, NIE OŚ): (1) Kolej Lokalna Kraków–Kocmyrzów,
 *   NORMALNOTOROWA, otwarta 14.12.1899, 19 km, ruch pasażerski
 *   zakończony 1963, resztki torów usunięto 2006, budynek stacji
 *   wyburzono 2010. (2) Osobna kolej WĄSKOTOROWA Charsznica–Kocmyrzów
 *   (600 mm, potem 750 mm), odcinek do Kocmyrzowa otwarty 1917, ruch
 *   pasażerski Proszowice–Kocmyrzów zamknięty 1971, towarowy 1.02.1993,
 *   likwidacja 1995–1996. Kocmyrzów był węzłem między dwoma rozstawami,
 * — NAJWYŻSZY PUNKT: Goszcza 345 m n.p.m.; najniższy: Krzysztoforzyce
 *   213 m n.p.m.,
 * — 25 SOŁECTW; największe Łuczyce (1 878 mieszkańców) to zaledwie 11,4%
 *   ludności gminy — gmina bez dominującego centrum,
 * — DOJAZD: gmina GRANICZY Z KRAKOWEM (rejon Nowej Huty, najbliżej
 *   Krzysztoforzyce i Dojazdów); DW776 Kraków–Proszowice; 11 dróg
 *   powiatowych; autobusy MPK 202, 212, 222, 232, 242, 250, 262, 271;
 *   węzeł Łuczyce na S7; przez gminę przebiega linia kolejowa
 *   Kraków–Warszawa obsługiwana przez Koleje Małopolskie,
 * — DEMOGRAFIA: +45,2% od 2002; średni wiek 39,3; saldo migracji +389;
 *   2 145 podmiotów REGON,
 * — WSPÓŁRZĘDNE: 50,12889 / 20,12861 (wieś Kocmyrzów; Luborzyca leży
 *   ok. 2 km na północ — DOKŁADNYCH WSPÓŁRZĘDNYCH URZĘDU NIE ZNALEZIONO).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW PRZYSTANKÓW KOLEJOWYCH W GMINIE. Gmina pisze tylko ogólnie
 *   o linii Kraków–Warszawa. NIE WYMIENIAĆ konkretnych przystanków,
 * — KOLEI JAKO OSI. Oś kolejowa należy do ZABIERZOWA. Tu 2–3 zdania
 *   kolorytu,
 * — WZROSTU LUDNOŚCI JAKO OSI. +45,2% to prawda, ale oś demograficzna
 *   należy do ZIELONEK. Nie użyte jako teza,
 * — WINNICY „UNIWERSYTECKIE GRONO” I ŚWIĘTA WINOBRANIA. TE SĄ
 *   W GARLICY MUROWANEJ, GMINA ZIELONKI — nie w Prusach. Opis CDR
 *   wymienia je łącznie jako części jednego gospodarstwa, co łatwo źle
 *   przeczytać. Sad 8 ha też jest w Garlicy,
 * — NAZWANYCH PRACODAWCÓW poza RGD. Brak danych,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — DATY PEŁNEGO OTWARCIA WĘZŁA ŁUCZYCE. Mamy tylko zapowiedź
 *   na 26.07.2025, bez potwierdzenia. Nie podana,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — URZĄD JEST W LUBORZYCY, NIE W KOCMYRZOWIE. Trzy warstwy pomyłki:
 *   (1) pierwszy człon nazwy myli, (2) Google i Waze podają adres jako
 *   Kocmyrzów, (3) kościół i szkoła „w Luborzycy” leżą administracyjnie
 *   w sołectwie WYSIOŁEK LUBORZYCKI po zmianie granic z 1934 r., przez
 *   co część źródeł podaje Wysiołek jako siedzibę gminy. Siedzibą jest
 *   LUBORZYCA,
 * — DWIE RÓŻNE KOLEJE. Normalnotorowa Kraków–Kocmyrzów (1899) i osobna
 *   wąskotorowa z Charsznicy. NIE MYLIĆ — najczęstszy błąd w tekstach
 *   o tej gminie,
 * — BITWA POD RACŁAWICAMI rozegrała się w gminie Racławice (powiat
 *   miechowski). Tutaj Kościuszko tylko stacjonował przed wymarszem,
 * — ROZBIEŻNOŚĆ LUDNOŚCI: GUS 18 516, ewidencja gminy 16 540. Różnica
 *   ok. 2 000 osób (12%) — GUS liczy zamieszkałych, gmina zameldowanych.
 */

export const KOCMYRZOW_LUBORZYCA: CityContent = {
  slug: "kocmyrzow-luborzyca",
  h1: "Thermomix Kocmyrzów-Luborzyca – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kocmyrzów-Luborzyca — prezentacja",
  seoDescription:
    "Thermomix w gminie Kocmyrzów-Luborzyca: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0,6%. Dojazd do wszystkich 25 sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Kocmyrzów-Luborzyca — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kocmyrzów-Luborzyca. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łuczyc, Luborzycy, Kocmyrzowa, Prus, Dojazdowa i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia pięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Kocmyrzów-Luborzyca – jak wygląda prezentacja?",
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
      heading: "Sześćset lat rozmowy wsi z uniwersytetem",
      paragraphs: [
        "W tysiąc czterysta pierwszym roku biskup Piotr Wysz przekazał beneficjum luborzyckie Akademii Krakowskiej. Mówiąc prościej: dochody z tutejszych pól zaczęły iść na uniwersytet. W piętnastym wieku działała tu szkoła parafialna, a związek wsi z krakowską uczelnią trwał przez kolejne stulecia.",
        "Sześćset lat później ta rozmowa nadal się toczy, tylko odwrotnie: to uniwersytet uczy się na tutejszych polach. W Prusach mieści się główna siedziba Rolniczego Gospodarstwa Doświadczalnego Uniwersytetu Rolniczego imienia Hugona Kołłątaja, obejmującego łącznie dwieście dwanaście hektarów. Uprawia się tam pszenicę, kukurydzę, rzepak i buraki cukrowe, a gospodarstwo należy do krajowej sieci gospodarstw demonstracyjnych i pokazuje rolnictwo precyzyjne: mapowanie plonu i nawożenie zmienne w zależności od tego, co pokazują czujniki na konkretnym kawałku pola.",
        "Raz w roku obie strony spotykają się dosłownie. Dożynki w tej gminie nazywają się gminno-uniwersyteckimi i odbywają się na terenie gospodarstwa w Prusach — w dwa tysiące dwudziestym piątym roku po raz trzeci, w ostatnią niedzielę sierpnia. Udział bierze osiemnaście kół gospodyń wiejskich i dwa stowarzyszenia, z wieńcami, chlebami i domowymi potrawami, a msza jest polowa.",
        "Osiemnaście kół to bardzo dużo, ale w tej gminie ma to swoją logikę. Sołectw jest dwadzieścia pięć, a największe z nich, Łuczyce, skupia zaledwie jedenaście procent mieszkańców. Nie ma tu jednego centrum, do którego wszyscy jadą — jest dwadzieścia pięć wsi, z których każda ma swoje.",
        "Rolnictwo nie jest tu zresztą przypadkiem. Około trzech czwartych gruntów w gminie należy do najlepszych klas bonitacyjnych, od pierwszej do trzeciej. To jedne z najlepszych gleb w Małopolsce i to one tłumaczą, dlaczego uniwersytet postawił gospodarstwo doświadczalne akurat tutaj.",
        "Historia jest tu gęsta i pełna nazwisk. Najstarszy zachowany kościół gminy, w Luborzycy, ufundował biskup błogosławiony Iwo Odrowąż w latach dwudziestych trzynastego wieku. W tysiąc trzysta dziewięćdziesiątym trzecim odwiedził Luborzycę Władysław Jagiełło, a półtora miesiąca później święta Jadwiga. Na początku kwietnia tysiąc siedemset dziewięćdziesiątego czwartego roku stacjonował tu Tadeusz Kościuszko, reorganizując wojsko; trzeciego kwietnia wyruszył stąd na Racławice, a dzień później stoczył tam bitwę.",
        "Na koniec drobiazg, który wyjaśnia dwuczłonową nazwę. Luborzyca była starsza i ważniejsza — parafia od trzynastego wieku, siedziba gminy od tysiąc osiemset sześćdziesiątego piątego. Kocmyrzów urósł w dziewiętnastym wieku dzięki kolei: czternastego grudnia tysiąc osiemset dziewięćdziesiątego dziewiątego roku otwarto tu linię z Krakowa, a przy stacji pojawiły się poczta, sklepy i magazyny. Torów już nie ma; ostatnie usunięto w dwa tysiące szóstym, budynek stacji rozebrano cztery lata później.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kocmyrzów-Luborzyca?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Jest ich dwadzieścia pięć i żadne nie dominuje — Łuczyce, największe, skupiają zaledwie jedenaście procent mieszkańców gminy. Bez nazwy wsi nie da się zaplanować trasy, choć kosztu to nie zmienia.",
        "Jeśli chodzi o spotkanie dla koła gospodyń, powiedz od razu. W tej gminie działa ich osiemnaście, więc takie pytanie pada regularnie i planuję wtedy spotkanie inaczej: więcej porcji, inny dobór przepisów, więcej czasu na pytania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kocmyrzów-Luborzyca"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "To samo, co na polu: powtarzalność",
      paragraphs: [
        "Rolnictwo precyzyjne, które pokazuje się w Prusach, sprowadza się do jednej idei: mierzyć zamiast zgadywać, żeby wynik dało się powtórzyć. Ta sama zasada działa w kuchni i jest jedyną rzeczą, którą urządzenie robi naprawdę lepiej od człowieka.",
        "Bo Thermomix nie gotuje smaczniej. On gotuje tak samo — za każdym razem. Ta sama temperatura, ten sam czas, ta sama waga składników, bo waga jest wbudowana i odmierza się prosto do naczynia. Krem, który raz wyszedł dobrze, wyjdzie tak samo za miesiąc, także wtedy, gdy robi go ktoś inny w domu.",
        "Brzmi to prozaicznie, ale w domu, w którym gotuje się codziennie, właśnie to jest różnicą. Znika ta część roboty, która polega na pilnowaniu, próbowaniu i ratowaniu — a zostaje decyzja, co się je.",
        "Druga rzecz to planowanie tygodnia, które przy powtarzalności staje się realne. Dwie, trzy większe rzeczy zrobione w niedzielę — zupa, sos, ciasto na chleb, pasta do kanapek — wystarczają na kilka dni, bo wiadomo, ile czego wyszło i na ile porcji.",
        "Trzecia dotyczy tego, co rośnie za oknem. Na glebach klasy pierwszej i drugiej dużo osób ma warzywnik albo bierze ziemniaki i warzywa od sąsiada workami. Krem, przecier i mrożone porcje robi się z tego bez stania nad garnkiem, a przy większych ilościach to jest różnica między popołudniem a całym dniem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Kocmyrzów-Luborzyca i gotowanie — osiemnaście kół i dożynki na polu uczelni",
    paragraphs: [
      "Nie znalazłam wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych i nie będę udawać, że jest. Za to mało która gmina w powiecie ma tak liczną i tak widoczną sieć kół gospodyń — na dożynkach gminno-uniwersyteckich w dwa tysiące dwudziestym piątym roku było ich osiemnaście, plus dwa stowarzyszenia.",
      "Same dożynki są zresztą osobliwe i chyba jedyne takie w Małopolsce. Odbywają się na terenie gospodarstwa doświadczalnego Uniwersytetu Rolniczego w Prusach, z polową mszą, wieńcami, chlebami i stoiskami kół z domowymi potrawami i wypiekami. Trudno o czytelniejszy obraz tego, jak wygląda tutaj związek między nauką a jedzeniem.",
      "Uprawia się tu przede wszystkim zboża i ziemniaki, hoduje trzodę chlewną, a gospodarstwo uczelniane dokłada do tego pszenicę, kukurydzę, rzepak i buraki cukrowe. Około trzech czwartych gruntów w gminie należy do najlepszych klas bonitacyjnych — od pierwszej do trzeciej.",
      "To znaczy, że kuchnia jest tu solidna i zbożowo-ziemniaczana: chleb, kluski, placki, zupy na wywarze, kapusta, ciasto drożdżowe. Nic egzotycznego i nic, czego trzeba by szukać poza gminą.",
      "Dla urządzenia najsensowniejsze są tu trzy rzeczy: ciasto na chleb i drożdżówkę wyrabiane w kilka minut zamiast kwadransa, gotowanie w większych ilościach na spotkania koła oraz przerabianie warzyw z własnej grządki. Czego nie zrobi, mówię wprost: nie upiecze chleba, bo do tego potrzebny jest piekarnik, i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Kocmyrzów-Luborzyca dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu pięciu, bez żadnej dopłaty za odległość. Gmina liczy około osiemnastu tysięcy mieszkańców na osiemdziesięciu trzech kilometrach kwadratowych i graniczy z Krakowem od strony Nowej Huty.",
    "Sołectwa to: Łuczyce, Kocmyrzów, Dojazdów, Baranówka, Luborzyca, Krzysztoforzyce, Prusy, Goszcza, Wysiołek Luborzycki, Wilków, Goszyce, Karniów, Zastów, Sulechów, Skrzeszowice, Pietrzejowice, Głęboka, Maciejowice, Czulice, Rawałowice, Marszowice, Wola Luborzycka, Wiktorowice, Sadowie i Łososkowice.",
    "Rzecz, która myli nawet nawigację: urząd gminy stoi w Luborzycy przy ulicy Jagiellońskiej, a nie w Kocmyrzowie — mimo że to Kocmyrzów jest pierwszym członem nazwy. Sama gmina pisze o tym wprost, ale mapy internetowe potrafią pokazywać ten adres jako Kocmyrzów.",
    "Żadna wieś nie dominuje: największe Łuczyce liczą niecałe dwa tysiące mieszkańców, czyli jedenaście procent gminy. Najwyższy punkt to Goszcza, trzysta czterdzieści pięć metrów nad poziomem morza, najniższy Krzysztoforzyce, dwieście trzynaście.",
    "Dojazd: przez gminę biegnie droga wojewódzka siedemset siedemdziesiąt sześć z Krakowa do Proszowic, a w Łuczycach jest węzeł drogi ekspresowej S7. Kursuje tu wiele krakowskich linii podmiejskich. Przez teren gminy przechodzi też linia kolejowa z Krakowa do Warszawy, obsługiwana przez Koleje Małopolskie.",
  ],
  districts: [
    "Łuczyce",
    "Kocmyrzów",
    "Luborzyca",
    "Dojazdów",
    "Baranówka",
    "Krzysztoforzyce",
    "Prusy",
    "Goszcza",
    "Wysiołek Luborzycki",
    "Wilków",
    "Goszyce",
    "Karniów",
    "Zastów",
    "Sulechów",
    "Skrzeszowice",
    "Pietrzejowice",
    "Głęboka",
    "Maciejowice",
    "Czulice",
    "Rawałowice",
    "Marszowice",
    "Wola Luborzycka",
    "Wiktorowice",
    "Sadowie",
    "Łososkowice",
  ],

  nearbyHeading: "Igołomia-Wawrzeńczyce, Michałowice i Słomniki też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Krakowem, Michałowicami, Słomnikami, Iwanowicami, Koniuszą i Igołomią-Wawrzeńczycami. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie historyczne, bo bywa skracane: Kościuszko stacjonował w Luborzycy przez trzy pierwsze dni kwietnia tysiąc siedemset dziewięćdziesiątego czwartego roku i stąd wyruszył, ale sama bitwa pod Racławicami rozegrała się w gminie Racławice, w dzisiejszym powiecie miechowskim.",
  ],
  nearbyTowns: [
    "Igołomia-Wawrzeńczyce",
    "Michałowice",
    "Słomniki",
    "Iwanowice",
    "Kraków",
    "Proszowice",
  ],

  about: blokOMnie("do gminy Kocmyrzów-Luborzyca", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Prusach albo w Czulicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwadzieścia pięć sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Kocmyrzów-Luborzyca"),
    {
      question: "Czy urząd gminy jest w Kocmyrzowie?",
      answer:
        "Nie i to jedna z częstszych pomyłek w tej gminie. Urząd mieści się w Luborzycy, przy ulicy Jagiellońskiej, mimo że Kocmyrzów jest pierwszym członem nazwy — sama gmina pisze o tym wprost. Mapy internetowe potrafią jednak pokazywać ten adres jako Kocmyrzów. Dla umówienia prezentacji nie ma to znaczenia, bo przyjeżdżam pod Twój adres, a nie do urzędu, ale warto wiedzieć, gdyby ktoś się kiedyś tam wybierał.",
    },
  ],

  geo: { lat: 50.12889, lng: 20.12861 },
};
