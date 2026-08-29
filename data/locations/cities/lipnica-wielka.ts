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
 * LIPNICA WIELKA — gmina wiejska, powiat nowotarski, polska Orawa.
 * 6 056 mieszkańców na 67,4 km². Gmina samodzielna dopiero od 1991 r.
 *
 * OŚ STRONY: WIEŚ PRZECIĘTA GRANICĄ PAŃSTWOWĄ — i gazda z Orawy,
 * który pojechał do Paryża się o nią upomnieć. To oś, której
 * Jabłonka użyć nie może, i która NIE KOLIDUJE z Zawoją, bo nie
 * dotyka ani pasterstwa, ani Babiej Góry jako tematu.
 *
 * ⚠️ PODZIAŁ Z JABŁONKĄ (`jablonka.ts`) jest ostry i celowy:
 * JABŁONKA = Orawa jako region, instytucje, skansen, cztery produkty
 * na Liście Produktów Tradycyjnych.
 * LIPNICA WIELKA = historia i granica.
 * Nie przenosić zdań między tymi stronami.
 *
 * ⚠️ KOLIZJA Z ZAWOJĄ (`zawoja.ts`). Najmocniejsze aktywa Lipnicy to
 * Święto Pasterskie i Muzeum Pasterstwa — ale PASTERSTWO I REDYK
 * SĄ OSIĄ ZAWOI. Dlatego Święto Pasterskie pojawia się tu wyłącznie
 * jako FAKT KALENDARZOWY, w jednym miejscu, i nie buduje tożsamości
 * strony. Babia Góra występuje wyłącznie jako TŁO i wyłącznie
 * od strony południowej; ani słowa o rezerwacie biosfery ani o parku
 * narodowym — to Zawoja.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — RADA AMBASADORÓW w Paryżu, 28 lipca 1920 r., przyznała Polsce
 *   15 wsi orawskich. Podział był pospieszny i MECHANICZNIE PRZECIĄŁ
 *   LIPNICĘ WIELKĄ między dwa państwa. Wieś SCALONO DOPIERO W 1924 R.,
 * — ⚠️ PLEBISCYT NA ORAWIE SIĘ NIE ODBYŁ — został odwołany, decyzję
 *   podjęła Rada Ambasadorów. NIE PISAĆ o głosowaniu mieszkańców,
 * — PIOTR BOROWY, ur. 28 maja 1858 r. w Rabczycach (dziś Słowacja),
 *   zm. 18 stycznia 1932 r. w Lipnicy Wielkiej. Zwany „Apostołem
 *   Orawy”, introligator i kolporter książek. Członek delegacji
 *   do Paryża od 19 marca do 15 kwietnia 1919 r., razem z ks.
 *   Ferdynandem Machayem, prof. Kazimierzem Rouppertem i Wojciechem
 *   Halczynem ze Spisza. Podczas audiencji u prezydenta WOODROWA
 *   WILSONA usłyszał: „Jeśli to ode mnie zależy, zrobię to dla was!”.
 *   Po 1920 r. sprzedał gospodarstwo po słowackiej stronie i przeniósł
 *   się na polską Orawę — najpierw do Jabłonki, potem do Lipnicy,
 * — TABLICA dłuta Karola Hukana odsłonięta w 1933 r., ZAGINĘŁA
 *   w 1939 r., nową wmurowano 24 maja 1992 r. W centrum wsi jest
 *   Plac Piotra Borowego z Muralem Niepodległości. Rok 2022 był
 *   w gminie Rokiem Józefiny Mikowej i Piotra Borowego,
 * — GMINA SAMODZIELNA OD 1991 R. — wcześniej część gminy Jabłonka.
 *   To narracyjna odwrotność Jabłonki: „młodsza siostra, która się
 *   usamodzielniła”,
 * — POWIERZCHNIA 67,4 km², ludność 6 056 (6 012 na 31.12.2020),
 *   gęstość 90 os./km², ŚREDNI WIEK 37,0 LAT — bardzo młodo,
 * — MIEJSCOWOŚCI: Kiczory, Lipnica Wielka, Śmietanowa.
 *   ⚠️ Formalna lista sołectw i ich ludność NIEPOTWIERDZONE,
 * — ŚWIĘTO PASTERSKIE — 49. edycja, 3–6 lipca 2025 r., organizator
 *   wójt gminy, współorganizatorzy GOK i Narodowy Instytut Kultury
 *   i Dziedzictwa Wsi. Finał „Odychunek Pasterzy” z konkursami
 *   koszenia siana i strzelania z bata. W gminie działa Muzeum
 *   Pasterstwa,
 * — DOJAZD: BEZ KOLEI. Lipnica leży w ślepej dolinie odbijającej
 *   z DK7 przez Jabłonkę — KAŻDY WYJAZD DO KRAKOWA PROWADZI PRZEZ
 *   JABŁONKĘ, czyli ok. 15–20 min dłużej niż stamtąd.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOKŁADNEGO CZASU I KILOMETRAŻU DO KRAKOWA. Niepotwierdzone —
 *   piszę opisowo, przez Jabłonkę,
 * — WSKAŹNIKÓW GOSPODARCZYCH GUS. Są IDENTYCZNE jak dla Jabłonki
 *   (bezrobocie 4,8%, płaca 6 883 zł), bo to dane powiatowe
 *   podstawiane pod gminę. NIE CYTOWAĆ ich jako faktu lokalnego,
 * — NAZW PRACODAWCÓW. Nie ustalono ani jednego,
 * — NAZW I DAT ZAŁOŻENIA KÓŁ GOSPODYŃ,
 * — LISTY SOŁECTW jako pewnej,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH przypisanego gminie.
 *   Cztery produkty orawskie są REGIONALNE i opisane na stronie
 *   Jabłonki. Tutaj tylko wzmianka.
 *
 * PUŁAPKI:
 * — NIE MYLIĆ z LIPNICĄ WIELKĄ w gminie Korzenna (powiat
 *   nowosądecki) ani z LIPNICĄ MAŁĄ, która jest sołectwem
 *   GMINY JABŁONKA,
 * — PIOTR BOROWY URODZIŁ SIĘ W RABCZYCACH na dzisiejszej Słowacji.
 *   Pisać „zamieszkał i zmarł w Lipnicy Wielkiej”,
 * — NIE PISAĆ „NAJDŁUŻSZA WIEŚ” — to oś Ochotnicy Dolnej,
 *   a długość Lipnicy jest niepotwierdzona,
 * — „JEZIORO ORAWSKIE” widoczne z gminy to zbiornik PO STRONIE
 *   SŁOWACKIEJ — nie przypisywać go gminie,
 * — BABIA GÓRA: wyłącznie jako tło, strona południowa. Rezerwat
 *   biosfery i park narodowy to Zawoja.
 */

export const LIPNICA_WIELKA: CityContent = {
  slug: "lipnica-wielka",
  h1: "Thermomix Lipnica Wielka – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Lipnica Wielka — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Lipnica Wielka na Orawie: bezpłatna prezentacja TM7 u Ciebie w kuchni. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lipnica Wielka — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Lipnica Wielka. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Lipnica Wielka przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam w całą dolinę, aż po Kiczory, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina, aż po Kiczory, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Lipnica Wielka – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Lipnicy Wielkiej, jak w Kiczorach czy na Śmietanowej.",
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
      heading: "Wieś przecięta granicą i gazda, który pojechał do Paryża",
      paragraphs: [
        "Dwudziestego ósmego lipca tysiąc dziewięćset dwudziestego roku Rada Ambasadorów w Paryżu przyznała Polsce piętnaście wsi orawskich. Decyzję podjęto w pośpiechu, a granicę poprowadzono tak, że przecięła Lipnicę Wielką na pół — jedna część została w Polsce, druga po stronie czechosłowackiej. Wieś scalono dopiero cztery lata później.",
        "Warto od razu sprostować, bo to częsty błąd: plebiscytu na Orawie nie było. Zapowiedziano go, ale odwołano, i o przynależności zdecydowali dyplomaci nad mapą, a nie mieszkańcy przy urnie.",
        "Właśnie dlatego rok wcześniej pojechał do Paryża Piotr Borowy. Był introligatorem i kolporterem książek, człowiekiem bez wykształcenia dyplomatycznego i bez tytułu — zwykłym gazdą z Orawy. W delegacji, która od marca do kwietnia tysiąc dziewięćset dziewiętnastego roku upominała się o Spisz i Orawę, znaleźli się razem z nim ksiądz, profesor uniwersytetu i drugi gospodarz, ze Spisza.",
        "Przyjęto ich na audiencji u prezydenta Stanów Zjednoczonych Woodrowa Wilsona. Ten powiedział im: „Jeśli to ode mnie zależy, zrobię to dla was”. Nie zależało wyłącznie od niego i wynik był połowiczny, ale sam fakt, że rolnik z górskiej wsi tłumaczył amerykańskiemu prezydentowi, gdzie leży jego dolina, wart jest zapamiętania.",
        "Sam Borowy urodził się w Rabczycach, po drugiej stronie dzisiejszej granicy. Po podziale sprzedał tamtejsze gospodarstwo i przeniósł się na polską Orawę, ostatecznie do Lipnicy Wielkiej, gdzie zmarł w tysiąc dziewięćset trzydziestym drugim. Tablicę ku jego pamięci odsłonięto rok później; zaginęła w trzydziestym dziewiątym, a nową wmurowano dopiero w dziewięćdziesiątym drugim. W centrum wsi jest dziś plac jego imienia z muralem.",
        "Sama gmina jest zresztą młoda: usamodzielniła się dopiero w tysiąc dziewięćset dziewięćdziesiątym pierwszym roku, wcześniej należała do Jabłonki. I jest też młoda w innym sensie — średni wiek mieszkańca wynosi tu równo trzydzieści siedem lat, wyraźnie mniej niż w większości gmin, do których jeżdżę.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Lipnica Wielka?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której części doliny mieszkasz, i dodaj punkt orientacyjny. Zabudowa ciągnie się tu wzdłuż drogi, a Kiczory leżą już wysoko, pod samą granicą. Dojazd wszędzie jest bez dopłaty.",
        "Zimą uprzedź mnie, jeśli podjazd bywa trudny — wtedy po prostu wyjeżdżam wcześniej. Dojeżdżam tu zawsze przez Jabłonkę, bo dolina jest ślepa, i mam to policzone.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Lipnica Wielka"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Najmłodsza gmina, do której jeżdżę",
      paragraphs: [
        "Średni wiek mieszkańca gminy Lipnica Wielka to trzydzieści siedem lat. Dla porównania: w Zakopanem i w większości gmin miechowskich jest to ponad czterdzieści, a w niektórych blisko czterdzieści pięć. To znaczy, że jeżdżę tu do domów, w których są małe dzieci — i to często kilkoro.",
        "Gmina liczy nieco ponad sześć tysięcy osób na sześćdziesięciu siedmiu kilometrach kwadratowych, więc jest niewielka i zwarta. Dolina jest ślepa: wjeżdża się i wyjeżdża tą samą drogą, przez Jabłonkę. To ma swoje konsekwencje dla codzienności, bo po każdą rzecz, której nie ma na miejscu, jedzie się kawałek.",
        "W takim domu — młodym, z dziećmi, z daleka do sklepu — najbardziej praktyczne jest to, że sporo rzeczy da się zrobić u siebie zamiast kupować. Chleb, pasty kanapkowe, jogurt, mleko roślinne, przeciery dla niemowlaka, zupy do zamrożenia. Nie z ideologii, tylko dlatego, że to po prostu wygodniejsze niż jechać.",
        "Druga rzecz to gotowanie równolegle. Posiłek dla najmłodszego dziecka może powstawać w tym samym czasie co obiad dla reszty domu, w jednym naczyniu, bez przelewania gorących rzeczy między garnkami. Przy dwójce czy trójce dzieci w różnym wieku to jest realna oszczędność, a nie hasło z folderu.",
        "Trzecia rzecz to danie, które gotuje się bez nikogo. Wstawiasz i idziesz do dzieci, do zwierząt albo po prostu robisz coś innego. Samo się wyłącza i nie przypala. Nie trzeba wracać co dziesięć minut zamieszać.",
        "Powiem też uczciwie, czego nie zrobi: nie zastąpi wprawy i nie ugotuje bez Ciebie. Zabiera siekanie, ucieranie, mieszanie i pilnowanie — czyli te czynności, które trwają, a nie te, które trzeba umieć.",
      ],
      links: [
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
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
    heading: "Kuchnia po obu stronach granicy",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost gminie Lipnica Wielka. Cztery orawskie produkty, które na tej liście są — sałata po orawsku, krzonówka, zawijańce weselne i chleb pieczony na liściu kapusty — są regionalne, a nie gminne. Piszę o nich szerzej przy Jabłonce.",
      "Za to jest tu coś, czego nie ma żadna inna gmina w tym serwisie, i wynika wprost z historii opisanej wyżej. Przez cztery lata granica państwowa szła środkiem tej wsi. Ludzie mieli rodzinę po obu jej stronach, a po scaleniu wsi w tysiąc dziewięćset dwudziestym czwartym granica przesunęła się kilka kilometrów dalej — i tam została do dziś.",
      "Kuchnia w takim miejscu nigdy nie jest czysta. Bierze z obu stron, bo z obu stron przychodzili ludzie, przepisy i produkty. To samo dotyczy zresztą całej Orawy, która przez wieki należała do Węgier, potem do Czechosłowacji, a do Polski wróciła dopiero po pierwszej wojnie.",
      "Raz do roku odbywa się tu Święto Pasterskie, które w dwa tysiące dwudziestym piątym miało czterdziestą dziewiątą edycję — czyli za dwa lata wypada półwiecze. W programie są konkursy koszenia siana i strzelania z bata, a w gminie działa Muzeum Pasterstwa.",
      "Co z tego wynika dla urządzenia? Tyle, co przy każdej kuchni opartej na mące, ziemniaku i nabiale: najwięcej pracy jest przed gotowaniem. Ciasto trzeba wyrobić, ziemniaki zetrzeć, masę utrzeć, sos zabielić tak, żeby się nie zwarzył. Żadna z tych czynności nie jest trudna — wszystkie wymagają stania w kuchni. I dokładnie to urządzenie zabiera, nie ruszając ani smaku, ani przepisu.",
    ],
  },

  districtsHeading: "Gdzie w gminie Lipnica Wielka dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy, bez żadnej dopłaty za odległość: do Lipnicy Wielkiej, Kiczor i Śmietanowej.",
    "Gmina jest niewielka — sześćdziesiąt siedem kilometrów kwadratowych i nieco ponad sześć tysięcy mieszkańców — ale leży w ślepej dolinie, więc wjeżdża się tu i wyjeżdża tą samą drogą, przez Jabłonkę. Kiczory leżą wysoko, blisko granicy ze Słowacją.",
    "W centrum wsi jest plac Piotra Borowego z muralem, a w gminie działa Muzeum Pasterstwa. Od strony południowej podchodzi się stąd pod Babią Górę — szlakami znacznie mniej uczęszczanymi niż te od północy, z Zawoi.",
    "O dojeździe uczciwie: kolei w gminie nie ma, a każdy wyjazd w stronę Krakowa prowadzi przez Jabłonkę, więc trzeba doliczyć kwadrans do dwudziestu minut w porównaniu z tamtą gminą. Dokładnego czasu przejazdu świadomie nie podaję, bo nie mam go z wiarygodnego źródła. Ja tę drogę pokonuję i nie doliczam za nią ani złotówki.",
  ],
  districts: [
    "Lipnica Wielka",
    "Kiczory",
    "Śmietanowa",
  ],

  nearbyHeading: "Jabłonka, Zawoja i Czarny Dunajec też są na mojej trasie",
  nearbyParagraphs: [
    "Do Jabłonki mam stąd najbliżej — droga do wszystkiego innego i tak przez nią prowadzi. Dalej są Czarny Dunajec i Nowy Targ, a przez Babią Górę sąsiaduje z tą gminą Zawoja, choć drogą jest do niej sporo naokoło. Do żadnej z nich nie doliczam kosztu dojazdu.",
    "Warto wiedzieć, że Lipnica Mała, mimo mylącej nazwy, nie należy do tej gminy — jest sołectwem Jabłonki. A Lipnica Wielka w powiecie nowosądeckim to jeszcze inna miejscowość, kilkadziesiąt kilometrów stąd.",
  ],
  nearbyTowns: [
    "Jabłonka",
    "Czarny Dunajec",
    "Zawoja",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do gminy Lipnica Wielka", "na Orawie"),

  faq: [
    {
      question: "Czy to ta Lipnica Wielka koło Nowego Sącza?",
      answer:
        "Nie — ta jest na Orawie, w powiecie nowotarskim, przy granicy ze Słowacją. Lipnica Wielka w gminie Korzenna leży w powiecie nowosądeckim, kilkadziesiąt kilometrów stąd. Jest też Lipnica Mała, ale to z kolei sołectwo sąsiedniej gminy Jabłonka. Nazwy w tej okolicy potrafią mylić, więc prostuję.",
    },
    ...faqWspolne("w gminie Lipnica Wielka"),
    {
      question: "Mieszkam w Kiczorach, wysoko przy granicy. Dojedziesz zimą?",
      answer:
        "Dojadę i bez dopłaty. Kiczory leżą wysoko, więc proszę o uprzedzenie, jeśli podjazd bywa trudny — wtedy wyjeżdżam wcześniej. Dolina jest ślepa i jadę tu zawsze przez Jabłonkę, więc mam tę trasę policzoną.",
    },
    {
      question: "Mam małe dzieci i daleko do sklepu. Co to realnie zmienia?",
      answer:
        "Najwięcej zmienia to, że sporo rzeczy przestaje wymagać wyjazdu: chleb, pasty kanapkowe, jogurt, mleko roślinne, przeciery dla niemowlaka. Do tego posiłek dla najmłodszego może powstawać równolegle z obiadem dla reszty domu, w jednym naczyniu i bez przelewania gorących rzeczy. W gminie leżącej w ślepej dolinie to bywa argument mocniejszy niż oszczędność czasu.",
    },
  ],

  geo: { lat: 49.5089, lng: 19.6333 },
};
