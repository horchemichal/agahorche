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
 * SZERZYNY — GMINA WIEJSKA w powiecie tarnowskim.
 * 7 491 mieszkańców (GUS, 31.12.2024), 82,0 km², 92 os./km²,
 * −9,7% od 2002 (najgłębszy spadek w czwórce pogórzańskiej),
 * średni wiek 41,3, REGON 529 (462 osoby fizyczne).
 * 5 SOŁECTW: Czermna, Ołpiny, Swoszowa, Szerzyny (siedziba), Żurowa.
 *
 * OŚ STRONY: GMINA, KTÓRA W REFERENDUM ZAGŁOSOWAŁA ZA POWROTEM
 * DO MAŁOPOLSKI — I DO DZIŚ MA PODKARPACKIE KODY POCZTOWE.
 * 31 stycznia 1999 r. odbyło się referendum: frekwencja 59,84%,
 * 79,73% uczestników za przyłączeniem do województwa małopolskiego
 * i powiatu tarnowskiego. Zmiana weszła w życie 1 STYCZNIA 2003.
 * Do 1999 gmina należała do województwa tarnowskiego; reforma z 1999 r.
 * przeniosła ją do powiatu jasielskiego w podkarpackim — wbrew woli
 * mieszkańców. Cztery lata trwał „okres jasielski”.
 * KONSEKWENCJA, KTÓRĄ MIESZKAŃCY WYBRALI ŚWIADOMIE: po zmianie jeździ
 * się ok. 40 km do Tarnowa zamiast 25 km do Jasła.
 * ŚLAD MATERIALNY DO DZIŚ: kody pocztowe Szerzyn (38-246) i Ołpin
 * (38-247) należą do serii 38-xxx, podczas gdy cała reszta powiatu
 * tarnowskiego ma 33-xxx (Ryglice 33-160, Gromnik 33-180, Rzepiennik
 * 33-163). Administracyjnie gmina wróciła, pocztowo została.
 * ⚠️ Że seria 38-xxx jest formalnie „podkarpacka” NIE zostało
 * potwierdzone dokumentem Poczty Polskiej — to wniosek z porównania
 * kodów sąsiadów. W treści podane jako OBSERWACJA, nie jako reguła.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — REFERENDUM I ZMIANA: krakow.eska.pl (frekwencja 59,84%, wynik
 *   79,73%), nowiny24.pl „Szerzyny odchodzą” (data zmiany 1.01.2003,
 *   mechanizm, skutki: powiat jasielski stracił ok. 200–300 tys. zł
 *   rocznie), szerzyny.pl/informacje (oś czasu: 1999–2003 powiat
 *   jasielski, od 2003 powiat tarnowski),
 * — KONSEKWENCJA STATYSTYCZNA: gmina weszła do statystyk województwa
 *   małopolskiego dopiero od 2003 r. — wcześniejsze roczniki liczą ją
 *   do podkarpackiego. Stąd szereg danych GUS zaczyna się dla niej rok
 *   później niż dla sąsiadów,
 * — GRANICA: sąsiedzi to Ryglice i Jodłowa (płn.), Brzyska (wsch.),
 *   Skołyszyn (płd.-wsch.), Biecz (płd.), Rzepiennik Strzyżewski
 *   i Tuchów (zach.). JODŁOWA, BRZYSKA I SKOŁYSZYN LEŻĄ
 *   W WOJEWÓDZTWIE PODKARPACKIM — gmina graniczy z Podkarpaciem
 *   od północy, wschodu i południowego wschodu. Położenie: „pomiędzy
 *   rzekami Białą na zachodzie i Wisłoką na wschodzie” — dwie różne
 *   zlewnie,
 * — OŁPINY WIĘKSZE OD SIEDZIBY: Ołpiny 2 220 (NSP 2021), Szerzyny
 *   2 155. ⚠️ Przewaga tylko 65 osób, czyli 3% — RYGLICE mają ten sam
 *   motyw znacznie mocniej (530 osób, 20%). Tu tylko WZMIANKA, nie oś.
 *   Ołpiny: zmiana 1998–2021 minus 1,6% (łagodniej niż gmina −9,7%),
 *   138 podmiotów REGON (budownictwo 30,2%, przetwórstwo 29,4%),
 *   2 przedszkola (113 dzieci), szkoła podstawowa (167 uczniów),
 *   biblioteka (12 387 woluminów), 7 zabytków w rejestrze, kod 38-247,
 * — HISTORIA (szerzyny.pl): 1288 OŁPINY w immunitecie Leszka Czarnego
 *   jako wieś klasztorna BENEDYKTYNÓW TYNIECKICH; 1348 SZERZYNY
 *   lokowane na prawie niemieckim, uposażenie parafii, 64 łany;
 *   1349 Ołpiny otrzymują prawo magdeburskie; 1360 CZERMNA lokowana
 *   po darowiźnie Kazimierza Wielkiego; ok. 1384 SWOSZOWA jako wieś
 *   królewska; ŻUROWA — wieś królewska dzierżawiona przez starostów
 *   bieckich. Właściciele Szerzyn: Melsztyńscy, Jordanowie, Ocieccy
 *   (XVI w.), Uniatyccy, Stadniccy, Rogawscy (XVIII w.), Kochanowscy
 *   (XIX w.); 1945 utworzenie gminy; 1954–1973 gromadzkie rady;
 *   1973 powrót systemu gminnego,
 * — KOŚCIOŁY DREWNIANE: św. Marcina w CZERMNEJ, wzniesiony 1520;
 *   św. Małgorzaty w ŻUROWEJ, przełom XVI/XVII w. W SIERPNIU 2026
 *   przeprowadzono BADANIA DENDROCHRONOLOGICZNE obu kościołów:
 *   dr Szymon Bijak (SGGW), projekt kierowany przez prof. Marcina
 *   Solarza (UW), we współpracy z Wojewódzkim Urzędem Ochrony Zabytków
 *   w Tarnowie. ⚠️ WYNIKI NIEZNANE — nie podawać żadnych nowych
 *   datowań,
 * — KGW (MODR): CZTERY KOŁA — Szerzyny, Ołpiny, Swoszowa, Czermna.
 *   Potrawy kultywowane, wymienione z nazwy: chleb domowy ze smalcem
 *   i kiszonym ogórkiem, PROZIAKI (słone i słodkie, z masłem), żurek
 *   z kiełbasą i grzybami, pierogi z kapustą i ruskie, CHLEB
 *   Z CZARNUSZKĄ, szarlotka, sernik tradycyjny, ciasto drożdżowe
 *   z owocami, jagodzianki, pączki, placki z kapustą, galaretki
 *   owocowe, kremówki, gofry z dżemem. Finansowanie: ARiMR + Urząd
 *   Wojewódzki. KGW „MARYSIEŃKI” w Szerzynach: projekt „Składnik-
 *   tradycja” / Gala Smaku od 1 listopada 2019, dotacja 5 000 zł
 *   z województwa małopolskiego, przewodnicząca Maria Kędzior;
 *   cel statutowy: „Kultywowanie i pielęgnowanie staropolskich potraw
 *   kulinarnych”. Inny projekt: „Danie Wspólnych Chwil”,
 * — IMPREZA CYKLICZNA: Dni Gminy Szerzyny,
 * — PARK KRAJOBRAZOWY PASMA BRZANKI: utworzony rozporządzeniem
 *   Wojewody Tarnowskiego w listopadzie 1995, powierzchnia 15 278 ha,
 *   obejmuje 5 gmin małopolskich (Gromnik, Ryglice, Rzepiennik
 *   Strzyżewski, Szerzyny, Tuchów) i część podkarpacką (Jodłowa).
 *   LIWOCZ — 562 m n.p.m. Cztery projektowane rezerwaty łącznie
 *   310,5 ha. Lasy 34% parku, 23 gatunki roślin pod ochroną ścisłą,
 * — ROLNICTWO: 2 390 gospodarstw, łącznie 5 881 ha → ŚREDNIA 2,46 HA
 *   (jeszcze mniej niż w Rzepienniku: 3,2 ha). Charakterystyka
 *   ze strategii: „gospodarstwa o małej powierzchni bez
 *   wyspecjalizowanej branży”. Podmioty: rzemiosło budowlane (23),
 *   wyroby z drewna (11), handel (9); dominują małe firmy
 *   usługowo-handlowe, głównie jednoosobowe,
 * — ADRES: Szerzyny 521, 38-246 Szerzyny. Obsługa: UP Szerzyny
 *   + Agencja Pocztowa Żurowa.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ŁEMKÓW I CERKWI. To teren POGÓRZAN, nie Łemkowszczyzna. Historia
 *   osadnictwa wskazuje kolonizację benedyktyńską i królewską.
 *   Żadne źródło nie wspomina o Łemkach. Nie mylić z Sękową i Uściem
 *   Gorlickim,
 * — NAFTY. Nie potwierdzono. To oś LIPINEK,
 * — CMENTARZY WOJENNYCH JAKO OSI. To oś ŁUŻNEJ i MOSZCZENICY,
 * — WYSOKOŚCI NAD POZIOMEM MORZA I KLIMATU JAKO OSI. To oś
 *   JERZMANOWIC-PRZEGINI. Liwocz wspomniany jako punkt w parku,
 * — OŁPIN WIĘKSZYCH OD SIEDZIBY JAKO OSI. Przewaga tylko 3%; RYGLICE
 *   mają ten motyw mocniej (20%). Tu wzmianka,
 * — WYNIKÓW BADAŃ DENDROCHRONOLOGICZNYCH. Nieopublikowane,
 * — NAZWANYCH PRACODAWCÓW. To JEDYNA z czwórki pogórzańskiej bez
 *   żadnego zidentyfikowanego z nazwy prywatnego pracodawcy,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego.
 *   ⚠️ PROZIAKI Z SZERZYN NIE SĄ WPISANE — wpisany jest PROŁZIOK
 *   z Kowalowej w gminie RYGLICE. NIE MYLIĆ,
 * — WSPÓŁRZĘDNYCH URZĘDU Z PEWNEGO ŹRÓDŁA. ⚠️ Użyte są PRZYBLIŻONE,
 * — CMENTARZA ŻYDOWSKIEGO W OŁPINACH. Istnieje, ale stanu zachowania
 *   i historii nie zweryfikowano,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA,
 * — ROZBIEŻNOŚĆ LUDNOŚCI: strona gminy podaje 8 303, strategia z 2009
 *   8 214, GUS 7 491, geoportal 7 472. Użyty GUS.
 *
 * PUŁAPKI:
 * — SERIA KODÓW 38-xxx jako „podkarpacka” to OBSERWACJA z porównania,
 *   nie potwierdzona reguła Poczty Polskiej,
 * — SZERZYNY MAJĄ TEŻ CZĘŚĆ PODKARPACKĄ w opisie Parku Krajobrazowego
 *   Pasma Brzanki — to zaszłość z okresu 1999–2003, myląca w źródłach,
 * — PROZIAKI vs PROŁZIOK: patrz wyżej.
 */

export const SZERZYNY: CityContent = {
  slug: "szerzyny",
  h1: "Thermomix Szerzyny – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Szerzyny — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Szerzyny: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0,6%. Dojazd do Ołpin, Czermnej i reszty sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Szerzyny — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Szerzyny. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Szerzyn, Ołpin, Czermnej, Żurowej i Swoszowej przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie pięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szerzynach – jak wygląda prezentacja?",
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
      heading: "Gmina, która zagłosowała za powrotem",
      paragraphs: [
        "Reforma administracyjna z tysiąc dziewięćset dziewięćdziesiątego dziewiątego roku przeniosła Szerzyny z województwa tarnowskiego do powiatu jasielskiego w województwie podkarpackim. Mieszkańcy się z tym nie zgodzili.",
        "Trzydziestego pierwszego stycznia tysiąc dziewięćset dziewięćdziesiątego dziewiątego roku odbyło się w gminie referendum. Przyszło blisko sześćdziesiąt procent uprawnionych, a niemal osiemdziesiąt procent głosujących opowiedziało się za przyłączeniem do województwa małopolskiego i powiatu tarnowskiego. Rada Ministrów przychyliła się do tego dopiero po czterech latach — zmiana weszła w życie pierwszego stycznia dwa tysiące trzeciego.",
        "Najciekawsze jest to, co ten wybór oznaczał praktycznie. Do Jasła jest stąd około dwudziestu pięciu kilometrów, do Tarnowa około czterdziestu. Mieszkańcy zagłosowali za dalszą stolicą powiatu, bo bliżej im było do niej pod każdym innym względem.",
        "Ślad po tamtym epizodzie został do dziś i jest zaskakująco materialny. Szerzyny mają kod pocztowy trzydzieści osiem dwieście czterdzieści sześć, Ołpiny trzydzieści osiem dwieście czterdzieści siedem. Cała reszta powiatu tarnowskiego ma kody z trzydziestej trzeciej serii — Ryglice trzydzieści trzy sto sześćdziesiąt, Gromnik trzydzieści trzy sto osiemdziesiąt, Rzepiennik trzydzieści trzy sto sześćdziesiąt trzy. Administracyjnie gmina wróciła dwadzieścia trzy lata temu. Pocztowo została tam, gdzie była.",
        "Ślad widać też w statystyce: szeregi danych dla Szerzyn zaczynają się w małopolskich rocznikach o rok później niż dla sąsiadów, bo wcześniej gmina liczyła się do innego województwa.",
        "To jest zresztą gmina graniczna z natury. Od północy sąsiaduje z Jodłową, od wschodu z Brzyskami, od południowego wschodu ze Skołyszynem — wszystkie trzy leżą już w podkarpackiem. Nawet geograficznie Szerzyny są na granicy: leżą między Białą na zachodzie a Wisłoką na wschodzie, czyli między dwiema różnymi zlewniami.",
        "Historia jest tu za to jednoznacznie małopolska i bardzo stara. Ołpiny pojawiają się w dokumentach w tysiąc dwieście osiemdziesiątym ósmym roku, w immunitecie Leszka Czarnego, jako wieś klasztorna benedyktynów tynieckich; prawo magdeburskie dostały w tysiąc trzysta czterdziestym dziewiątym. Szerzyny lokowano rok wcześniej, w tysiąc trzysta czterdziestym ósmym, na sześćdziesięciu czterech łanach. Czermną lokował Kazimierz Wielki w tysiąc trzysta sześćdziesiątym, a Swoszowa i Żurowa były wsiami królewskimi.",
        "Po tamtych czasach zostały dwa drewniane kościoły: świętego Marcina w Czermnej, wzniesiony w tysiąc pięćset dwudziestym roku, i świętej Małgorzaty w Żurowej, z przełomu szesnastego i siedemnastego wieku. W sierpniu dwa tysiące dwudziestego szóstego roku przeprowadzono w obu badania dendrochronologiczne — wyników jeszcze nie ogłoszono.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Szerzyny?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich pięć: Szerzyny, Ołpiny, Czermna, Swoszowa i Żurowa. Ołpiny są przy tym odrobinę większe od samej siedziby gminy i mają własny kod pocztowy, o jeden numer inny.",
        "Do Tarnowa jest stąd około czterdziestu kilometrów i jest to najdalej wysunięta na wschód gmina powiatu. Trasę planuję z zapasem, więc jeśli macie preferowaną godzinę, powiedzcie ją wprost — dostosuję się.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Szerzyny"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Czterdzieści kilometrów do miasta, czyli spiżarnia",
      paragraphs: [
        "Kiedy do najbliższego dużego miasta jest czterdzieści kilometrów, po zakupy nie jeździ się codziennie. Jeździ się raz w tygodniu albo raz na dwa i przywozi wszystko naraz — a potem trzeba to jakoś rozłożyć na siedem dni.",
        "To zmienia sposób gotowania bardziej, niż się wydaje. Świeże rzeczy trzeba zużyć na początku, resztę tygodnia niosą zapasy, a w piątek w lodówce zostaje zwykle zestaw, z którego trudno ułożyć obiad.",
        "Pierwsza rzecz, która tu pomaga, to gotowanie z zapasem. Zupa, gulasz czy sos zrobione w niedzielę w większej ilości i rozdzielone na porcje stoją potem w zamrażarce i wchodzą w każdy dzień, w którym nie ma czasu. Urządzenie gotuje je bez pilnowania, więc niedzielne przedpołudnie nie zamienia się w dyżur przy kuchni.",
        "Druga to przerabianie tego, co zaczyna się psuć. Warzywa z końcówki tygodnia idą na krem albo na sos, owoce na mus, chleb na bułkę tartą albo grzanki. To brzmi drobiazgowo, ale przy zakupach raz na tydzień decyduje o tym, ile trafia do kosza.",
        "Trzecia dotyczy pieczywa. Ołpiny i Szerzyny mają sklepy, ale świeży chleb nie zawsze jest wtedy, kiedy się go potrzebuje. Ciasto wyrabia się tu w kilka minut zamiast kwadransa ręcznie — i to jest zwykle moment, w którym ludzie zaczynają piec w domu regularnie, a nie od święta.",
        "Czwarta to przetwory, bo tutejsze gospodarstwa są bardzo małe — średnio dwa i pół hektara — i uprawia się na nich głównie na własne potrzeby. Powidła, przeciery i kompoty gotują się bez mieszania i bez przywierania.",
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
    heading: "Szerzyny i gotowanie — cztery koła gospodyń i proziaki",
    paragraphs: [
      "Ta gmina ma jedną z najlepiej udokumentowanych tradycji kulinarnych w całej okolicy, i to nie z rejestru, tylko z żywej praktyki. Działają tu cztery koła gospodyń wiejskich — w Szerzynach, Ołpinach, Swoszowej i Czermnej.",
      "Lista potraw, które kultywują, jest spisana i konkretna: chleb domowy ze smalcem i kiszonym ogórkiem, proziaki w wersji słonej i słodkiej, z masłem, żurek z kiełbasą i grzybami, pierogi z kapustą i ruskie, chleb z czarnuszką, szarlotka, sernik tradycyjny, ciasto drożdżowe z owocami, jagodzianki, pączki, placki z kapustą, galaretki owocowe, kremówki i gofry z dżemem.",
      "Koło ze Szerzyn nazywa się Marysieńki i ma w statucie zapisane wprost: kultywowanie i pielęgnowanie staropolskich potraw kulinarnych. Od listopada dwa tysiące dziewiętnastego prowadzi projekt Składnik-tradycja z Galą Smaku, dofinansowany przez województwo małopolskie.",
      "Jedno sprostowanie, bo łatwo tu o pomyłkę: proziaki wypiekane w tej gminie nie są wpisane na ministerialną Listę Produktów Tradycyjnych. Wpisany jest prołziok z Kowalowej — to sąsiednia gmina Ryglice. Nazwy pochodzą od tego samego słowa, prołza, czyli soda oczyszczona, i wypiek jest pokrewny, ale rejestr zna tylko jeden z nich.",
      "Rolnictwo jest tu drobne jak nigdzie: dwa tysiące trzysta dziewięćdziesiąt gospodarstw na niecałych sześciu tysiącach hektarów, czyli średnio dwa i pół hektara na gospodarstwo. To ziemia, z której się je, a nie z której się żyje.",
      "Dla urządzenia najsensowniejsze są tu ciasto na chleb i placki, gotowanie z zapasem oraz przetwory. Czego nie zrobi, mówię wprost: nie usmaży proziaków na blasze i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i siłą w rękach.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Szerzyny dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu, bez żadnej dopłaty za odległość. Gmina liczy około siedmiu i pół tysiąca mieszkańców na osiemdziesięciu dwóch kilometrach kwadratowych i jest najdalej wysuniętą na wschód gminą powiatu tarnowskiego.",
    "Sołectwa to: Szerzyny, Ołpiny, Czermna, Swoszowa i Żurowa. Ołpiny są odrobinę większe od samej siedziby gminy — mieszka w nich około dwóch tysięcy dwustu dwudziestu osób wobec dwóch tysięcy stu pięćdziesięciu pięciu w Szerzynach.",
    "Gmina graniczy z województwem podkarpackim od północy, wschodu i południowego wschodu — z Jodłową, Brzyskami i Skołyszynem. Leży między Białą na zachodzie a Wisłoką na wschodzie, czyli na granicy dwóch zlewni.",
    "W Czermnej stoi drewniany kościół świętego Marcina z tysiąc pięćset dwudziestego roku, w Żurowej drewniany kościół świętej Małgorzaty z przełomu szesnastego i siedemnastego wieku. Oba były w sierpniu dwa tysiące dwudziestego szóstego roku badane dendrochronologicznie przez zespół z Warszawy.",
    "Część gminy leży w Parku Krajobrazowym Pasma Brzanki, utworzonym w listopadzie tysiąc dziewięćset dziewięćdziesiątego piątego roku. Najwyższym punktem parku jest Liwocz, pięćset sześćdziesiąt dwa metry nad poziomem morza.",
    "Dojazd: kolei w gminie nie ma. Do Tarnowa jest stąd około czterdziestu kilometrów. Kody pocztowe to trzydzieści osiem dwieście czterdzieści sześć dla Szerzyn i trzydzieści osiem dwieście czterdzieści siedem dla Ołpin — pamiątka po czterech latach w powiecie jasielskim.",
  ],
  districts: [
    "Szerzyny",
    "Ołpiny",
    "Czermna",
    "Swoszowa",
    "Żurowa",
  ],

  nearbyHeading: "Ryglice, Rzepiennik i Biecz też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Ryglicami, Rzepiennikiem Strzyżewskim, Tuchowem i Bieczem, a od wschodu już z gminami województwa podkarpackiego. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie kulinarne: prołziok wpisany na Listę Produktów Tradycyjnych pochodzi z Kowalowej w gminie Ryglice. Proziaki wypiekane tutaj to pokrewny wypiek o zbliżonej nazwie — obie wywodzą się od słowa prołza, czyli soda oczyszczona — ale w rejestrze jest tylko jeden z nich.",
  ],
  nearbyTowns: [
    "Ryglice",
    "Rzepiennik Strzyżewski",
    "Tuchów",
    "Biecz",
    "Gromnik",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Szerzyny", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Ołpinach albo w Żurowej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie pięć sołectw traktuję dokładnie tak samo. To najdalej wysunięta na wschód gmina powiatu, więc trasę planuję z zapasem — ale koszt jest ten sam, czyli żaden. Przy umawianiu podaj nazwę wsi.",
    },
    ...faqWspolne("w gminie Szerzyny"),
    {
      question: "Czy zrobisz pokaz dla koła gospodyń?",
      answer:
        "Tak i w tej gminie pytają o to często, bo działają tu aż cztery koła. Takie spotkanie planuję inaczej niż domowe: przywożę więcej składników, dobieram przepisy pod większą liczbę porcji i zostawiam więcej czasu na pytania. Chętnie pokażę też, jak wyrabia się ciasto na chleb i na placki — bo to akurat ta część roboty, którą urządzenie zabiera najbardziej odczuwalnie. Warto uprzedzić o liczbie osób kilka dni wcześniej.",
    },
  ],

  geo: { lat: 49.7906, lng: 21.2686 },
};
