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
 * CZORSZTYN — gmina wiejska, powiat nowotarski. Siedem sołectw,
 * 7 645 mieszkańców (31.12.2019) na 61,72 km².
 * ⚠️ SIEDZIBA GMINY MIEŚCI SIĘ W MANIOWACH, nie w Czorsztynie.
 *
 * OŚ STRONY: WIEŚ ZAPROJEKTOWANA OD ZERA NA DESCE KREŚLARSKIEJ —
 * i spór mieszkańców z projektantami. Stare Maniowy istniały od
 * 1326 r.; przed zalaniem miały ok. 320 gospodarstw i blisko 1900
 * mieszkańców. Nowe zbudowano w latach 70. według narzuconego planu:
 * identyczne domy po pięć w rzędzie, obowiązkowy garaż, brak
 * wodociągu. Mieszkańcy wymusili zmiany.
 *
 * ⚠️ ŚWIADOME ODRÓŻNIENIE OD MUCHARZA (`mucharz.ts`), który opisuje
 * ten sam typ inwestycji. Tam osią jest ZNIKANIE: Skawce pod wodą,
 * Zagórze ze 114 mieszkańców na 25. TUTAJ osią jest BUDOWANIE —
 * co się stawia, gdy trzeba zrobić wieś od nowa. Nie powtarzać
 * narracji o stratach; ta strona jest o projektowaniu i o oporze.
 * ⚠️ Odróżnić też od ZEMBRZYC (`zembrzyce.ts`), gdzie osią jest
 * przełożenie 9 km torów.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — STARE MANIOWY od 1326 r. Przed zalaniem ok. 320 gospodarstw,
 *   blisko 1900 mieszkańców, ok. 60 zabytkowych chałup.
 *   Do przeniesienia przeznaczono 363 z 385 budynków wsi oraz
 *   26 budynków publicznych, cmentarz i 3 kapliczki. W całej strefie
 *   zbiornika wykupiono 501 gospodarstw i 16 400 ha gruntów,
 * — BUDOWA NOWEJ WSI od 1974 r., przyspieszenie wiosną 1975.
 *   Pierwsze osiedle: BORCOK. Projekt narzucał obowiązkowy garaż przy
 *   każdym domu, domy według identycznych planów — MINIMUM PIĘĆ
 *   TAKICH SAMYCH W RZĘDZIE — i brak sieci wodociągowej (woda
 *   z hydrantów ulicznych). Do wyboru cztery minimalnie różniące się
 *   typy domów,
 * — OPÓR MIESZKAŃCÓW, udokumentowany i SKUTECZNY: protestowali
 *   przeciw brakowi miejsca na budynki gospodarcze, co WYMUSIŁO
 *   ZMIANĘ PLANÓW. Projektanci nie przewidzieli kolektora
 *   ściekowego — powstał dopiero w 1991 r. Film z 1978 r. opisał
 *   efekt jako „kamienną, ni to wieś, ni to miasto”,
 * — KOŚCIÓŁ ŚW. MIKOŁAJA: prace od 1977 r., ukończone po dziewięciu
 *   latach. Mieszkańcy uznali, że nowa wieś musi mieć kościół,
 * — OCALAŁA drewniana KAPLICA CMENTARNA ŚW. SEBASTIANA z 1772 r.,
 *   przeniesiona na nowy cmentarz,
 * — OSTATNI MIESZKAŃCY wyprowadzili się w 1995 r.,
 * — ZBIORNIK: projekt 1968, budowa zapory od 1975/76, przełożenie
 *   koryta Dunajca 1988, napełnianie od 1994, rozruch elektrowni
 *   1996, przekazanie do eksploatacji 1997. Zbiornik Czorsztyński
 *   1 226 ha, 231,9 mln m³, długość 10,5 km; zapora 56 m wysokości
 *   i 404 m długości; elektrownia 92 MW. Zbiornik wyrównawczy
 *   Sromowce Wyżne: 88 ha,
 * — PROTESTY: od końca lat 80. protestowała młodzież i ekolodzy;
 *   w 1990 r. blokady dróg dojazdowych, trwające do 1993 r.
 *   Budowy nie wstrzymano,
 * — SOŁECTWA (7), ludność 31.12.2019: Maniowy 2 232 (siedziba,
 *   największa), Kluszkowce 1 897, Sromowce Wyżne 1 311,
 *   Sromowce Niżne 1 071, Mizerna 607, Czorsztyn 401, Huba 126.
 *   Powierzchnia 61,72 km², 46% lasów,
 * — SPŁYW DUNAJCEM ZACZYNA SIĘ W TEJ GMINIE: przystanie Sromowce
 *   Wyżne-Kąty i Sromowce Niżne; kończy w Szczawnicy (18 km)
 *   lub Krościenku (23 km). Operator: Polskie Stowarzyszenie
 *   Flisaków Pienińskich z siedzibą w Sromowcach Wyżnych,
 *   sezon 1.04–31.10,
 * — CZORSZTYN-SKI na górze Wdżar (767 m) w Kluszkowcach: kolej
 *   krzesełkowa, wyciągi orczykowe, tor saneczkowy 1 000 m
 *   z przewyższeniem 84 m, naśnieżanie i oświetlenie,
 * — KGW WE WSZYSTKICH SIEDMIU SOŁECTWACH. Potrawy z XXV Konkursu
 *   Potraw Regionalnych (30–31.07.2022): zupa z lisówek i żołądki
 *   z gęsi (Maniowy), pierogi z kapustą (Kluszkowce), kluski z makiem,
 *   rodzynkami i miodem (Czorsztyn), pierogi z rydzami (Sromowce
 *   Niżne), cukinia faszerowana grzybami (Sromowce Wyżne), łopatka
 *   z kapustą (Huba),
 * — IMPREZY 2026: Transgraniczny Festiwal Kulinarny 26.07
 *   (Sromowce Wyżne), Lato pod Trzema Koronami 2.08, Lato w Mizernej
 *   15.08, Dożynki Gminne w Maniowach 23.08,
 * — DOJAZD: BRAK STACJI KOLEJOWEJ. Samochodem z Krakowa 111–118 km,
 *   ok. 2 h.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOKŁADNEGO ZAKRESU ZALANIA Kluszkowiec, Huby i Mizernej.
 *   Wiadomo, że były dotknięte, ale skala niepotwierdzona,
 * — LICZBY SPŁYWAJĄCYCH DUNAJCEM ROCZNIE. Niepotwierdzona,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ,
 * — NUMERÓW EDYCJI IMPREZ poza konkursem potraw,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak.
 *
 * PUŁAPKI:
 * — ZAMEK W NIEDZICY NIE LEŻY W TEJ GMINIE. Niedzica
 *   i Niedzica-Zamek to sołectwa gminy ŁAPSZE NIŻNE. Do Czorsztyna
 *   należą tylko RUINY ZAMKU CZORSZTYN po drugiej stronie jeziora.
 *   Potoczna nazwa „zapora w Niedzicy” dodatkowo myli,
 * — SIEDZIBA GMINY TO MANIOWY, a wieś Czorsztyn ma 401 mieszkańców.
 *   Nie mylić,
 * — SROMOWCE NIŻNE I WYŻNE SĄ W TEJ GMINIE, to nie osobna gmina,
 * — DĘBNO z drewnianym kościołem z listy UNESCO to gmina NOWY TARG,
 * — TRZY KORONY I PIENIŃSKI PARK NARODOWY — temat gminy KROŚCIENKO.
 *   Tu tylko wzmianka, bez rozwijania,
 * — LUDNOŚĆ z 31.12.2019 — zawsze z datą.
 */

export const CZORSZTYN: CityContent = {
  slug: "czorsztyn",
  h1: "Thermomix gmina Czorsztyn – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Czorsztyn — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Czorsztyn: bezpłatna prezentacja TM7 u Ciebie w kuchni — Maniowy, Kluszkowce, Sromowce. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czorsztyn — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Czorsztyn. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Czorsztyn przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Czorsztyn – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Maniowach, jak w Kluszkowcach, Sromowcach czy Mizernej.",
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
      heading: "Wieś zaprojektowana od zera — i mieszkańcy, którzy zmienili plany",
      paragraphs: [
        "Maniowy istniały od tysiąc trzysta dwudziestego szóstego roku. Przed zalaniem miały około trzystu dwudziestu gospodarstw, blisko tysiąca dziewięciuset mieszkańców i jakieś sześćdziesiąt zabytkowych chałup. Do przeniesienia przeznaczono trzysta sześćdziesiąt trzy budynki z trzystu osiemdziesięciu pięciu, a razem z nimi szkołę, cmentarz i trzy kapliczki.",
        "Nowe Maniowy zaczęto budować w tysiąc dziewięćset siedemdziesiątym czwartym roku, na desce kreślarskiej. I tu zaczyna się rzecz, która mnie w tej historii najbardziej interesuje: plan był narzucony. Każdy dom musiał mieć garaż. Domy stawiano według identycznych projektów, co najmniej pięć takich samych w jednym rzędzie. Do wyboru były cztery typy, różniące się między sobą minimalnie. Wodociągu nie przewidziano wcale — wodę miano brać z hydrantów ulicznych.",
        "Mieszkańcy zaprotestowali. Nie przeciw samej przeprowadzce, bo tej nie dało się już zatrzymać, tylko przeciw temu, że w projekcie zabrakło miejsca na budynki gospodarcze. Czyli na to, bez czego wieś przestaje być wsią. I protest zadziałał — plany zmieniono.",
        "Innych rzeczy nie udało się wymóc od razu. Kolektora ściekowego projektanci nie przewidzieli i powstał dopiero w tysiąc dziewięćset dziewięćdziesiątym pierwszym. Film dokumentalny z siedemdziesiątego ósmego opisał to, co powstało, jako „kamienną, ni to wieś, ni to miasto”. Kościół zaczęto stawiać w siedemdziesiątym siódmym, a skończono po dziewięciu latach — bo mieszkańcy uznali, że nowa wieś musi mieć kościół, choćby go nikt nie zaplanował.",
        "Jedna rzecz przetrwała w całości: drewniana kaplica cmentarna świętego Sebastiana z tysiąc siedemset siedemdziesiątego drugiego roku. Rozebrano ją i postawiono na nowym cmentarzu. Ostatni mieszkańcy starej wsi wyprowadzili się w tysiąc dziewięćset dziewięćdziesiątym piątym, a zbiornik zaczęto napełniać rok wcześniej.",
        "Opowiadam to na stronie o urządzeniu kuchennym, bo jest w tym coś, co dotyczy każdej kuchni. Można komuś zaprojektować dom według czterech dopuszczonych typów, ale nie da się zaprojektować tego, jak ludzie w nim będą żyli. Miejsce na budynki gospodarcze trzeba było wywalczyć — i tak samo każdy urządza sobie kuchnię pod to, co naprawdę w niej robi.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Czorsztyn?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa i uważaj na dwie rzeczy. Po pierwsze, siedziba gminy jest w Maniowach, a wieś Czorsztyn to osobna, znacznie mniejsza miejscowość. Po drugie, Sromowce są dwoje: Wyżne i Niżne. Dojazd wszędzie jest bez dopłaty.",
        "Jeśli pracujesz sezonowo przy spływie albo w ośrodku narciarskim, powiedz to od razu. Listopad i kwiecień są tu najspokojniejsze i wtedy najłatwiej o dwie godziny bez telefonów.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Czorsztyn"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, który ktoś kiedyś zaprojektował za Ciebie",
      paragraphs: [
        "W Maniowach spora część domów pochodzi z jednej serii — cztery dopuszczone typy, stawiane po pięć takich samych w rzędzie. To znaczy, że w wielu tutejszych domach kuchnie mają zbliżony układ i zbliżone ograniczenia. Ktoś je narysował w latach siedemdziesiątych, pod ówczesne wyobrażenie o tym, jak się gotuje.",
        "Przez pięćdziesiąt lat te kuchnie przerabiano, dostawiano, przenoszono w nich lodówki i zmywarki. Ale metraż i rozkład zostały. Dlatego przy urządzeniu kuchennym pytanie „czy się zmieści” pada tu częściej niż gdzie indziej — i odpowiadam na nie na końcu strony, w pytaniach.",
        "Praktycznie największą zaletą jest to, że jedno naczynie zastępuje kilka sprzętów: blender, malakser, mikser i część garnków. W kuchni zaprojektowanej pod inny styl życia to zwykle zwalnia blat, zamiast go zajmować.",
        "Druga rzecz to gotowanie bez obecności. Danie jednogarnkowe wstawia się i wychodzi — gotuje się samo, samo się wyłącza i nie przypala. W gminie, w której sporo osób pracuje sezonowo przy spływie Dunajcem albo w ośrodku narciarskim, dzień bywa nieregularny i obiad musi umieć poczekać.",
        "Trzecia rzecz to zapasy i przetwory. Zupy do zamrożenia, sosy, pasty kanapkowe, powidła, ciasto na pierogi robione seriami. Poza sezonem, kiedy jest czas, na sezon, kiedy go nie będzie.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku.",
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
    heading: "Siedem sołectw, siedem kół gospodyń, siedem potraw",
    paragraphs: [
      "Ta gmina ma koło gospodyń w każdym z siedmiu sołectw i doroczny konkurs potraw regionalnych, który doczekał się już dwudziestu pięciu edycji. To rzadkość: zwykle w takich konkursach startuje kilka kół z całego powiatu, a tutaj każda wieś wystawia własną potrawę.",
      "Z jednej z edycji mam pełną listę i warto ją przytoczyć, bo pokazuje, jak różne bywają kuchnie siedmiu sąsiadujących wsi. Maniowy wystawiły zupę z lisówek i żołądki z gęsi. Kluszkowce — pierogi z kapustą. Czorsztyn — kluski z makiem, rodzynkami i miodem. Sromowce Niżne — pierogi z rydzami. Sromowce Wyżne — cukinię faszerowaną grzybami. Huba — łopatkę z kapustą.",
      "Muszę dodać uczciwe zastrzeżenie, które powtarzam na każdej takiej stronie: to są potrawy konkursowe, a nie wpisy na ministerialną Listę Produktów Tradycyjnych. Żadnego wpisu z gminy Czorsztyn nie znalazłam. Różnica jest realna i wolę ją nazwać, niż zatrzeć.",
      "Rzuca się w oczy jedno: cztery z siedmiu potraw są grzybowe albo z runa leśnego. Lisówki, rydze, grzyby do cukinii. To nie przypadek — lasy zajmują tu czterdzieści sześć procent powierzchni gminy. Kuchnia idzie za tym, co jest za oknem.",
      "Co z tego wynika dla urządzenia? Przy grzybach najwięcej pracy jest przed gotowaniem: czyszczenie, siekanie, a przy pierogach jeszcze wyrabianie ciasta i miażdżenie farszu. Czyszczenia grzybów nikt za Ciebie nie zrobi. Siekanie, farsz i ciasto — owszem. Zupa z lisówek gotuje się potem sama, w stałej temperaturze, bez pilnowania, żeby nie wykipiała.",
    ],
  },

  districtsHeading: "Gdzie w gminie Czorsztyn dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Maniów, Kluszkowiec, Sromowiec Wyżnych, Sromowiec Niżnych, Mizernej, Czorsztyna i Huby.",
    "Warto wiedzieć, że siedziba gminy mieści się w Maniowach, największej wsi, liczącej ponad dwa tysiące dwustu mieszkańców. Sam Czorsztyn to osobna, znacznie mniejsza miejscowość — czterysta jeden osób — a najmniejsza jest Huba ze stu dwudziestoma sześcioma. Cała gmina zajmuje niecałe sześćdziesiąt dwa kilometry kwadratowe, z czego prawie połowę stanowią lasy.",
    "Warto też wiedzieć, co do tej gminy nie należy, bo pomyłka jest bardzo częsta. Zamek w Niedzicy leży w gminie Łapsze Niżne, po drugiej stronie jeziora — do Czorsztyna należą tylko ruiny zamku Czorsztyn. Mylące bywa też potoczne określenie „zapora w Niedzicy”, bo sama zapora spina obie gminy.",
    "Za to spływ Dunajcem zaczyna się właśnie tutaj: przystanie są w Sromowcach Wyżnych-Kątach i w Sromowcach Niżnych, a stowarzyszenie flisaków ma siedzibę w Sromowcach Wyżnych. Kończy się w Szczawnicy po osiemnastu kilometrach albo w Krościenku po dwudziestu trzech. W Kluszkowcach działa ośrodek narciarski na górze Wdżar z torem saneczkowym o długości kilometra. Kolei w gminie nie ma; samochodem z Krakowa jest tu jakieś sto piętnaście kilometrów, czyli około dwóch godzin.",
  ],
  districts: [
    "Maniowy",
    "Kluszkowce",
    "Sromowce Wyżne",
    "Sromowce Niżne",
    "Mizerna",
    "Czorsztyn",
    "Huba",
  ],

  nearbyHeading: "Krościenko, Szczawnica i Łapsze Niżne też są na mojej trasie",
  nearbyParagraphs: [
    "Do Krościenka nad Dunajcem i Szczawnicy mam stąd blisko — to zresztą tam kończy się spływ. Po drugiej stronie jeziora leżą Łapsze Niżne z zamkiem w Niedzicy. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w Sromowcach i bliżej Ci przez granicę na Słowację niż do Nowego Targu, to nic nie szkodzi — dla umówienia prezentacji nie ma to znaczenia. Przyjeżdżam tak samo.",
  ],
  nearbyTowns: [
    "Krościenko",
    "Szczawnica",
    "Łapsze Niżne",
    "Nowy Targ",
    "Ochotnica Dolna",
    "Kraków",
  ],

  about: blokOMnie("do gminy Czorsztyn", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mam kuchnię z lat siedemdziesiątych, niedużą. Zmieści się?",
      answer:
        "Zmieści — a w tej gminie to pytanie pada często, bo sporo domów w Maniowach powstało według czterech dopuszczonych typów projektowych i kuchnie mają w nich zbliżony układ. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków, więc zwykle zwalnia blat, zamiast go zajmować. Na prezentacji zobaczysz to na własnym blacie.",
    },
    ...faqWspolne("w gminie Czorsztyn"),
    {
      question: "Czy zamek w Niedzicy jest w gminie Czorsztyn?",
      answer:
        "Nie — Niedzica i Niedzica-Zamek to sołectwa gminy Łapsze Niżne, po drugiej stronie jeziora. Do gminy Czorsztyn należą ruiny zamku Czorsztyn. Myli dodatkowo potoczna nazwa „zapora w Niedzicy”, bo sama zapora spina obie gminy. Dojeżdżam zresztą i tu, i tam.",
    },
    {
      question: "Gdzie właściwie jest urząd gminy Czorsztyn?",
      answer:
        "W Maniowach, przy ulicy Gorczańskiej — a nie we wsi Czorsztyn, która jest osobną i znacznie mniejszą miejscowością, liczącą około czterystu osób. Maniowy są największą wsią gminy, z ponad dwoma tysiącami mieszkańców. To częste zaskoczenie dla przyjezdnych.",
    },
  ],

  geo: { lat: 49.4419, lng: 20.3122 },
};
