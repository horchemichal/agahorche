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
 * ŁAPSZE NIŻNE — GMINA WIEJSKA w powiecie nowotarskim.
 * Ok. 9,2 tys. mieszkańców, ok. 125 km² (8,5% powierzchni powiatu).
 *
 * OŚ STRONY: SZEŚĆSET LAT PO WĘGIERSKIEJ STRONIE. Zastaw spiski 1412,
 * komora celna na zamku Dunajec, piwnice na węgierskie wino
 * we Frydmanie, kościół św. Elżbiety WĘGIERSKIEJ w Trybszu,
 * kuchnia spiska z własnymi nazwami potraw.
 *
 * ⚠️ ROZŁĄCZNOŚĆ: gmina wiejska Nowy Targ ma oś „obwarzanek bez
 * stolicy, Podhale + Spisz” i wymienia tam SAM FAKT spiskości trzech
 * wsi. Tutaj oś jest inna: nie „Spisz w ogóle”, tylko konkretny wątek
 * WĘGIERSKI. Czorsztyn ma zaporę — NIE dawać Łapszom osi zalewu,
 * mimo że leżą nad Jeziorem Czorsztyńskim.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — JEDYNA GMINA W POLSCE LEŻĄCA W CAŁOŚCI NA SPISZU. Pozostałe
 *   spiskie wsie rozdzielone są między gminy mieszane: Bukowinę
 *   Tatrzańską (Czarna Góra, Rzepiska, Jurgów) i Nowy Targ (Dursztyn,
 *   Krempachy, Nowa Biała), a obie leżą głównie na Podhalu,
 * — 9 SOŁECTW: Falsztyn, Frydman, Kacwin, Łapszanka, Łapsze Niżne,
 *   Łapsze Wyżne, Niedzica, NIEDZICA-ZAMEK, Trybsz.
 *   ⚠️ NIEDZICA-ZAMEK TO ODDZIELNE SOŁECTWO — częsty błąd,
 * — 1412 — ZASTAW SPISKI: Władysław Jagiełło pożycza pieniądze
 *   Zygmuntowi Luksemburskiemu, w zastaw 13 miast spiskich; polska
 *   administracja przez ponad 350 lat, do zajęcia przez Austrię,
 * — 28 LIPCA 1920 R. — Rada Ambasadorów w Spa przyznaje Polsce
 *   14 wsi spiskich, w tym wszystkie dzisiejsze sołectwa tej gminy,
 * — ZAMEK DUNAJEC W NIEDZICY LEŻY W TEJ GMINIE (sołectwo
 *   Niedzica-Zamek), NIE w gminie Czorsztyn — zamek czorsztyński
 *   stoi naprzeciwko, po drugiej stronie. Budowa przełom XIII/XIV w.,
 *   pierwsza wzmianka 1325, bracia Jan i Kokosz Berzeviczy;
 *   ok. 1327 Wilhelm Drugeth. Funkcja: warownia graniczna
 *   i KOMORA CELNA na szlaku Buda – Koszyce – dolina Popradu –
 *   Stary Sącz – Kraków. Studnia kuta w skale 60 m,
 *   ⚠️ „TESTAMENT INKÓW” TO LEGENDA, NIE FAKT — jeśli w ogóle,
 *   to wyłącznie jako podanie,
 * — PIWNICE WINNE WE FRYDMANIE: zbudowane najprawdopodobniej w 1820 r.
 *   z inicjatywy hr. Horvátha Palocsaya. Dwa poziomy, każdy 96 m
 *   długości, 7 m szerokości, 4 m wysokości; wejścia przez ośmioboczne
 *   kamienne pawilony nazywane przez miejscowych kapliczkami. Miały
 *   służyć na WINA WĘGIERSKIE wożone szlakiem handlowym — wilgoć
 *   niszczyła wino, projekt się nie udał. Później magazyn spirytusu,
 *   ziemniaków, próby pieczarkarni. Dziś w złym stanie.
 *   ⚠️ WE FRYDMANIE NIGDY NIE UPRAWIANO WINOROŚLI. NIE PISAĆ
 *   O „SPISKICH WINNICACH”,
 * — FRYDMAN: lokacja 1308–1320 przez rycerza Kokosza Berzewiczego;
 *   1589 Jerzy Horváth Palocsay buduje kasztel; kościół
 *   św. Stanisława, późnorenesansowa attyka wieży; zachowany
 *   XIV-wieczny układ wsi z „ulicą stodolną”,
 * — TRYBSZ: kościół św. Elżbiety Węgierskiej, drewniany, 1567 r.;
 *   polichromia ok. 1647 (fundacja proboszcza Jana Ratułowskiego)
 *   zawiera NAJSTARSZĄ ZACHOWANĄ PANORAMĘ TATR,
 * — KACWIN: zabytkowe SYPAŃCE (spichlerze), skansen sypańców,
 *   wodospad na Kacwiniance przy granicy,
 * — ŁAPSZE NIŻNE: pierwsza wzmianka 1340; kościół św. Kwiryna
 *   z pocz. XIV w.; Kalwaria Spiska,
 * — KUCHNIA SPISKA (nazwy ze strony gminy): juha, baranina, fizoły
 *   ze śliwkami, sałata na kwaśnym mlyku, randula, chytre mjyso,
 *   kiska grulano, bufty, rogi, derkliki,
 * — ALBUM „ŚPISKIE SMAKI” — 27 przepisów zebranych przez uczennice
 *   w projekcie „Skarby naszych przodków”,
 * — „ŚPISKIE ZWYKI” — 36. edycja, 13–15 lutego 2026 r.; eliminacje
 *   na Zamku Dunajec, część główna w GOK w Niedzicy.
 *   ⚠️ TO PRZEGLĄD FOLKLORYSTYCZNY, NIE KULINARNY,
 * — MNIEJSZOŚĆ SŁOWACKA: koło Towarzystwa Słowaków w Polsce,
 *   nauka języka słowackiego, słowackie nazwy miejscowości,
 * — ZESPÓŁ ELEKTROWNI WODNYCH NIEDZICA S.A., ul. Widokowa 1,
 *   34-441 Niedzica — czyli w tej gminie. Zapora ziemna 56 m
 *   wysokości, 404 m długości,
 * — REGON: 751 podmiotów (2024), głównie mikro,
 * — REZERWAT NIEBIESKA DOLINA w Łapszance, utworzony w 1963 r.,
 *   chroni buczynę karpacką,
 * — PRZEJŚCIA GRANICZNE: Niedzica – Lysá nad Dunajcom, Kacwin –
 *   Veľká Franková, Łapszanka – Osturňa. Kontrole zniesione
 *   po wejściu do strefy Schengen.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZW KGW. Żadnej nie potwierdzono. ⚠️ ZESPOŁY REGIONALNE
 *   (Spiszacy, Czardasz, Śpisoki) TO NIE KOŁA GOSPODYŃ,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — DANYCH SPISU 2021 O MNIEJSZOŚCI SŁOWACKIEJ. Nie potwierdzone —
 *   nie podawać liczb,
 * — BEZROBOCIA I STRUKTURY BRANŻ. Dane POWIATOWE, nie gminne,
 * — LICZBY ZATRUDNIONYCH W ZEW NIEDZICA. Nie potwierdzona,
 * — NUMERÓW DRÓG WOJEWÓDZKICH. Nie potwierdzone.
 */

export const LAPSZE_NIZNE: CityContent = {
  slug: "lapsze-nizne",
  h1: "Thermomix Łapsze Niżne – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łapsze Niżne — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Łapsze Niżne: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łapsze Niżne — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łapsze Niżne. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łapsz Niżnych, Niedzicy, Frydmana, Kacwina i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łapszach Niżnych – jak wygląda prezentacja?",
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
      heading: "Sześćset lat po drugiej stronie granicy",
      paragraphs: [
        "Łapsze Niżne to jedyna gmina w Polsce, która leży w całości na Spiszu. Pozostałe spiskie wsie są porozrzucane po gminach mieszanych — Bukowina Tatrzańska ma Jurgów i Rzepiska, gmina wiejska Nowy Targ Krempachy i Nową Białą — ale obie te gminy są przede wszystkim podhalańskie. Tutaj Spisz to nie fragment, tylko całość.",
        "A Spisz przez sześćset lat ciążył na południe. W tysiąc czterysta dwunastym roku Władysław Jagiełło pożyczył pieniądze Zygmuntowi Luksemburskiemu i wziął w zastaw trzynaście spiskich miast. Zastaw nigdy nie został wykupiony, więc polska administracja trwała tu ponad trzysta pięćdziesiąt lat — ale formalnie ziemia pozostawała częścią Królestwa Węgier, aż do zajęcia przez Austrię.",
        "Ślady tego są tu wszędzie i są bardzo konkretne. Zamek Dunajec w Niedzicy, budowany na przełomie trzynastego i czternastego wieku przez braci Berzeviczych, był warownią graniczną i komorą celną na szlaku z Budy przez Koszyce i dolinę Popradu do Starego Sącza i Krakowa. Drewniany kościół w Trybszu z tysiąc pięćset sześćdziesiątego siódmego roku nosi wezwanie świętej Elżbiety Węgierskiej — a jego polichromia z około tysiąc sześćset czterdziestego siódmego zawiera najstarszą zachowaną panoramę Tatr.",
        "Najciekawszy jest jednak Frydman i jego piwnice. Około tysiąc osiemset dwudziestego roku hrabia Horváth Palocsay kazał wydrążyć tam dwa poziomy piwnic, każdy dziewięćdziesiąt sześć metrów długi, siedem szeroki i cztery wysokie, z wejściami przez ośmioboczne kamienne pawilony, które miejscowi nazywają kapliczkami. Miały służyć do przechowywania win węgierskich wożonych tędy szlakiem handlowym.",
        "Nie udało się. Wilgoć niszczyła wino i pomysł upadł. Potem trzymano tam spirytus, ziemniaki wojska, produkty rolne, próbowano hodować pieczarki. Dziś obiekt jest w złym stanie. Warto tylko wiedzieć, że we Frydmanie nigdy nie było winnic — wino tu przywożono, a nie uprawiano.",
        "Polska granica przyszła tu dopiero dwudziestego ósmego lipca tysiąc dziewięćset dwudziestego roku, decyzją Rady Ambasadorów w Spa, która przyznała Polsce czternaście wsi spiskich. Wszystkie dzisiejsze sołectwa tej gminy były wśród nich.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łapsze Niżne?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma dziewięć jednostek rozrzuconych na stu dwudziestu pięciu kilometrach kwadratowych, a Niedzica i Niedzica-Zamek to dwie różne — o czym się często zapomina. Na cenę to nie wpływa, tylko na trasę.",
        "Jeśli prowadzisz kwatery albo pracujesz sezonowo przy ruchu turystycznym nad Jeziorem Czorsztyńskim, powiedz to od razu. Lipiec i sierpień są u Was zwykle zajęte od rana do wieczora, a wiosna i jesień zupełnie spokojne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łapsze Niżne"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Wieś, w której mówi się dwoma językami",
      paragraphs: [
        "W gminie mieszka około dziewięciu tysięcy dwustu osób w dziewięciu wsiach, a zarejestrowanych podmiotów gospodarczych jest siedemset pięćdziesiąt — prawie wyłącznie mikrofirm. Największym pracodawcą jest Zespół Elektrowni Wodnych z siedzibą w Niedzicy.",
        "Jest tu też coś, czego nie ma w większości polskich gmin: żywa mniejszość słowacka, koło Towarzystwa Słowaków w Polsce, nauka języka słowackiego w szkołach i miejscowości mające dwie nazwy. W wielu domach starsze pokolenie mówi po spisku, dzieci po polsku, a granica jest o kilka kilometrów.",
        "Dla kuchni ma to jedno bardzo praktyczne przełożenie. W domu wielopokoleniowym gotuje się jednocześnie dla kilku pokoleń i kilku przyzwyczajeń: babcia chce tego, co zawsze, dzieci czegoś prostszego, a wszystko musi wyjść z jednej kuchni w tej samej godzinie.",
        "Najbardziej opłaca się tu gotowanie jednogarnkowe. Zupa albo duszone mięso na sześć osób gotuje się bez pilnowania, samo się wyłącza i czeka. Nikt nie musi stać przy garnku ani wracać, żeby zamieszać — a to w domu, z którego jedni wyjeżdżają do pracy, a drudzy wracają ze szkoły, robi realną różnicę.",
        "Druga rzecz to gotowanie z zapasem, sensowne zwłaszcza zimą, kiedy do najbliższego większego sklepu jedzie się do Nowego Targu. Jedna duża porcja podzielona na pojemniki, sos na kilka dni, pasty, ciasto — robione seriami, w jednym naczyniu.",
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
    heading: "Kuchnia spiska — juha, fizoły i kiska grulano",
    paragraphs: [
      "To jedna z niewielu gmin, o których pisałam, gdzie kuchnia ma własne nazwy — i to takie, których nie zrozumie nikt spoza Spisza. Urząd gminy wymienia między innymi juhę, baraninę, fizoły ze śliwkami, sałatę na kwaśnym mlyku, randulę, chytre mjyso, kiskę grulano, bufty, rogi i derkliki.",
      "To nie jest lista z folderu turystycznego. Uczennice z tutejszych szkół zebrały w projekcie „Skarby naszych przodków” dwadzieścia siedem przepisów i wydały je w albumie „Śpiskie Smaki”. Przepisy pochodziły od babć, nie z internetu — i to jest chyba najlepsza rzecz, jaką można powiedzieć o kondycji tutejszej kuchni.",
      "Powiem uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie ani nazwy żadnego koła gospodyń. Działa tu za to sporo zespołów regionalnych — Spiszacy, Czardasz, Śpisoki, Trybskie Dzieci — ale zespół to nie koło gospodyń i nie będę tego mylić.",
      "Ciekawe jest to, jak ta kuchnia wygląda składnikowo. Fizoły, czyli fasola, ze śliwkami. Kiszona zupa na mące. Ziemniaki w kilkunastu postaciach. Baranina duszona godzinami. To wszystko są dania długie i wymagające pilnowania — i akurat w tej części urządzenie zdejmuje najwięcej roboty, bo duszenie w niskiej temperaturze przez dwie godziny prowadzi bez człowieka.",
      "Czego nie zrobi, mówię wprost: nie nauczy się przepisu babci i nie zastąpi wprawy. Nie ulepi pierogów i nie doprawi zupy tak, jak Wy ją doprawiacie. Zabiera tę część, która jest wyłącznie czasem — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Łapsze Niżne dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewięciu, bez żadnej dopłaty za odległość. Gmina zajmuje około stu dwudziestu pięciu kilometrów kwadratowych — to blisko dziewięć procent powierzchni całego powiatu nowotarskiego.",
    "Sołectwa to: Falsztyn, Frydman, Kacwin, Łapszanka, Łapsze Niżne, Łapsze Wyżne, Niedzica, Niedzica-Zamek i Trybsz. Niedzica i Niedzica-Zamek to dwie osobne jednostki, co bardzo często się myli.",
    "Warto wiedzieć, gdzie co leży, bo tutejsze zabytki bywają przypisywane sąsiadom. Zamek Dunajec stoi w tej gminie, w sołectwie Niedzica-Zamek — zamek czorsztyński, ten naprzeciwko, jest już w gminie Czorsztyn. Piwnice na wino są we Frydmanie, sypańce, czyli zabytkowe spichlerze, w Kacwinie, a najstarsza panorama Tatr w drewnianym kościele w Trybszu. W Łapszance jest rezerwat Niebieska Dolina z buczyną karpacką, chroniony od tysiąc dziewięćset sześćdziesiątego trzeciego roku.",
    "Dojazd: kolei w gminie nie ma. Ze Słowacją łączą gminę trzy przejścia — w Niedzicy, Kacwinie i Łapszance. Od wejścia do strefy Schengen nie ma na nich kontroli.",
  ],
  districts: [
    "Łapsze Niżne",
    "Łapsze Wyżne",
    "Niedzica",
    "Niedzica-Zamek",
    "Frydman",
    "Kacwin",
    "Trybsz",
    "Falsztyn",
    "Łapszanka",
  ],

  nearbyHeading: "Czorsztyn, Nowy Targ i Bukowina też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Czorsztynem, Bukowiną Tatrzańską, gminą wiejską Nowy Targ, a od południa ze Słowacją. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "W okolicy są też Krościenko nad Dunajcem i Szczawnica. Przy umawianiu wystarczy, że podasz sołectwo — resztę zaplanuję sama.",
  ],
  nearbyTowns: [
    "Czorsztyn",
    "Nowy Targ",
    "Bukowina Tatrzańska",
    "Krościenko",
    "Szczawnica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Łapsze Niżne", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w Niedzicy-Zamku. To to samo co Niedzica?",
      answer:
        "Nie, to dwa osobne sołectwa tej samej gminy i dlatego przy umawianiu warto powiedzieć, o które chodzi. Dojeżdżam do obu tak samo, bez żadnej dopłaty — różnica jest wyłącznie w planowaniu trasy.",
    },
    ...faqWspolne("w gminie Łapsze Niżne"),
    {
      question: "W domu gotuje się po spisku. Czy to urządzenie się do tego nadaje?",
      answer:
        "Nadaje, bo nie narzuca przepisów. Możesz w nim zrobić juhę, fizoły ze śliwkami czy kiskę dokładnie tak, jak robi się je u Was — tyle że bez godziny stania przy garnku. Najbardziej pomaga przy tym, co trzeba długo dusić albo mieszać. Na prezentacji chętnie ugotuję z Wami coś z Waszego repertuaru, a nie z folderu.",
    },
  ],

  geo: { lat: 49.3978, lng: 20.2396 },
};
