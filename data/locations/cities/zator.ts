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
 * ZATOR — GMINA MIEJSKO-WIEJSKA w powiecie oświęcimskim.
 * 9 082 mieszkańców (GUS, 31.12.2024), 51,6 km², 177 os./km² —
 * najniższa gęstość w powiecie. +1,6% od 2002, średni wiek 41,4 —
 * najmłodsza z gmin oświęcimskich tej fali. Saldo migracji −30.
 * REGON 994. Miasto Zator ok. 4 000 mieszkańców, 11,5 km².
 * 9 SOŁECTW + miasto.
 *
 * OŚ STRONY: NA PAŃSTWOWĄ LISTĘ TRAFIŁA NIE TYLKO RYBA, ALE I TRZY
 * PRZEPISY NA NIĄ. Zator ma pięć wpisów na Liście Produktów
 * Tradycyjnych, z czego TRZY TO GOTOWE POTRAWY, NIE SUROWIEC:
 * karp w zalewie octowej (24.04.2013), fileciki karpiowe w pomidorach
 * (14.10.2016), pulpeciki z karpia w zalewie octowej (14.10.2016).
 * Uzasadnienia wpisów mówią, że przyrządza się je w Dolinie Karpia
 * „od ponad 40 lat” i „od ponad 70 lat” — to kuchnia dwóch–trzech
 * pokoleń, wciąż robiona w domach.
 * ⚠️⚠️ ROZDZIELENIE OD SŁOMNIK (oś: „nasz produkt ma unijną ochronę”,
 * czosnek galicyjski ChOG): tam TEZĄ JEST CERTYFIKAT. Tutaj ChNP jest
 * JEDNYM ZDANIEM DOWODOWYM, a tezą są PRZEPISY. Kolejność odwrócona:
 * nie „mamy ochronę, więc mamy dobrą rybę”, tylko „gotuje się to tu
 * tak długo, że urzędnicy spisali sposób”.
 * ⚠️ ROZDZIELENIE OD WIERZCHOSŁAWIC (tam ryba w sekcji rodzina:
 * para, pasta z resztek, wywar): tutaj TECHNIKI SĄ INNE — marynata
 * w zalewie octowej, sos pomidorowy, mielenie na pulpety.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — LISTA PRODUKTÓW TRADYCYJNYCH, pięć wpisów z Doliny Karpia
 *   (malopolska.pl/malopolskismak): karp zatorski, karp zatorski
 *   wędzony, karp w zalewie octowej (24.04.2013), fileciki karpiowe
 *   w pomidorach (14.10.2016), pulpeciki z karpia w zalewie octowej
 *   (14.10.2016). ⚠️ DATA WPISU SAMEGO KARPIA ZATORSKIEGO SPORNA:
 *   dolinakarpia.eu podaje 2005, malopolska.pl 25.08.2011.
 *   NIE PODAWAĆ. Daty trzech potraw są zgodne i tylko ich używam,
 * — CYTATY Z UZASADNIEŃ LPT: fileciki karpiowe w pomidorach —
 *   „potrawa znana i chętnie przyrządzana na terenie Doliny Karpia
 *   od ponad 40 lat”; pulpeciki z karpia w zalewie octowej —
 *   „od ponad 70 lat”,
 * — KARP ZATORSKI: ⚠️⚠️ TO ChNP (CHRONIONA NAZWA POCHODZENIA),
 *   NIE ChOG. Rozporządzenie wykonawcze Komisji (UE) nr 485/2011
 *   z 18 maja 2011, publikacja 20 maja 2011. Drugi polski produkt
 *   z ChNP. Wnioskodawca: Lokalna Grupa Producencka Karpia
 *   Zatorskiego. OBSZAR: TRZY GMINY — Zator i Przeciszów (powiat
 *   oświęcimski) oraz Spytkowice (powiat wadowicki), łącznie 134 km².
 *   ⚠️ Obszar ChNP jest ponad dwukrotnie większy niż sama gmina
 *   (51,6 km²) — NIE PISAĆ, że ChNP „obejmuje gminę Zator”.
 *   ⚠️ dolinakarpia.eu podaje BŁĘDNIE ChOG i pięć gmin — złe źródło,
 * — STAWY (specyfikacja ChNP): kompleksy Rybackiego Zakładu
 *   Doświadczalnego — Przeręb 461,02 ha, Spytkowice 444,20 ha,
 *   Bugaj 186,60 ha, Laskowa 41,20 ha; razem 1 156 ha ogroblowanej,
 *   z czego 800–850 ha produkcyjnych,
 * — TECHNOLOGIA (specyfikacja): system dwuletni. Rok pierwszy
 *   60–150 g, przeżywalność 86%. Rok drugi 1 100–1 800 g — masa
 *   handlowa. KARMIENIE WYŁĄCZNIE PASZAMI ZBOŻOWYMI (pszenica,
 *   jęczmień, pszenżyto, kukurydza), MINIMUM 70% Z OBSZARU
 *   GEOGRAFICZNEGO. Białko 17,0–19,3%, tłuszcz 3,2–5,9%. Kolor
 *   oliwkowy lub oliwkowo-niebieski. Sprzedawany żywy, świeży,
 *   nieprzetworzony,
 * — HISTORIA STAWÓW: 1291 książę Mieszko zezwala na trzy młyny
 *   na Skawie i inicjuje gospodarkę rybną; XIV w. początek rybactwa;
 *   1468 pierwsza pisemna dokumentacja; 1493 książę Janusz IV pozwala
 *   mieszczanom wykopać dwa stawy; XVI w. szczyt — 291–443 tony
 *   rocznie, w 1569 trzyletnie karpie („piątniki”) po 2–3 złote;
 *   2. poł. XIX w. Zator największym przedsiębiorstwem rybackim
 *   kraju, w Niemczech nazywany „galizische Karpfen-Race”;
 *   1946 przejęcie przez UNIWERSYTET JAGIELLOŃSKI; lata 80.–90.
 *   produkcja średnio 489,3 tony,
 * — HISTORIA MIASTA: ok. 1179 gródek graniczny; 1228 pierwsza
 *   wzmianka; 10 LISTOPADA 1292 Mieszko cieszyński nadaje prawa
 *   miejskie; 1445 powstanie KSIĘSTWA ZATORSKIEGO, Zator stolicą;
 *   1456 hołd złożony Polsce; 1494 ostatni książę Janusz sprzedaje
 *   księstwo Janowi Olbrachtowi; 1513 inkorporacja przez Sejm Walny,
 * — ENERGYLANDIA: otwarcie 2014, założyciele Agata i Marek Goczałowie;
 *   powierzchnia 26 ha (2014) → 43 ha (2021) → 70 ha (2024);
 *   133 atrakcje, 7 stref; Hyperion — najwyższy mega coaster
 *   w Europie, 77 m, 142 km/h; Zadra — najwyższy i najszybszy
 *   hybrydowy hypercoaster na świecie, 121 km/h; 2 MLN GOŚCI
 *   w sezonie 2024, 15 mln od otwarcia; zatrudnienie ok. 350 osób
 *   na stałe, 1 500–2 000 w szczycie sezonu,
 * — 9 SOŁECTW: Graboszyce, Grodzisko, Laskowa, Łowiczki, Palczowice,
 *   Podolsze, Rudze, Smolice, Trzebieńczyce,
 * — DOJAZD: linia kolejowa nr 94 Kraków Płaszów – Oświęcim,
 *   zelektryfikowana; DWIE STACJE W GMINIE — Zator oraz ZATOR PARK
 *   ROZRYWKI, osobny przystanek zbudowany pod park. Ponad 75 odjazdów
 *   na dobę, do Krakowa Głównego co 20–30 minut w ciągu dnia,
 *   czas przejazdu ok. 1 h 6 min; przewoźnik Koleje Małopolskie.
 *   Drogi: DK 44, DK 28, DW 781. Kraków ok. 55 km,
 * — WSPÓŁRZĘDNE (UM, Plac Marszałka Józefa Piłsudskiego 1):
 *   49,9960808 / 19,4372372.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PRAW MIEJSKICH JAKO OSI. ⚠️ SPRZECZNOŚĆ: UM Zator twierdzi,
 *   że miasto nigdy nie straciło praw; lista nadań po 1900 r.
 *   wymienia Zator z datą 13 lipca 1934 (reforma administracyjna
 *   Galicji). Prawdopodobnie chodzi o podniesienie z „miasteczka”
 *   do pełnego statusu, a nie o odzyskanie. NIEROZSTRZYGNIĘTE —
 *   w treści tylko data 1292 i księstwo zatorskie, BEZ wątku 1934,
 * — DATY WPISU KARPIA ZATORSKIEGO NA LPT. Sprzeczność 2005 vs 2011,
 * — ENERGYLANDII JAKO OSI. To wariant zapasowy; użyta jako element.
 *   ⚠️ NIE ŁĄCZYĆ obu osi w jednym tekście — powstanie folder
 *   turystyczny,
 * — LICZBY OBIEKTÓW NOCLEGOWYCH. GUS 2019 podaje trzy przy 2 mln
 *   turystów — liczba mówiąca, ale przestarzała. Nie użyta,
 * — DATY EDYCJI ŚWIĘTA KARPIA. Nie potwierdzona,
 * — STARSZYCH DANYCH O ENERGYLANDII (26 ha, 70 atrakcji, 1,5 mln
 *   gości) — pochodzą z lat 2018–2019,
 * — BEZROBOCIA I WYNAGRODZEŃ. 7 492,22 zł i 4,7% to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — ⚠️ ChNP ≠ ChOG. Karp zatorski ma ChNP — ochronę ostrzejszą,
 *   wymagającą, by cały proces zachodził na obszarze,
 * — OBSZAR ChNP TO TRZY GMINY, nie jedna,
 * — ZASIĘG MARKI „DOLINA KARPIA” (Stowarzyszenie liczy 11 gmin)
 *   to CO INNEGO niż obszar ChNP (3 gminy). Nie mylić,
 * — KARP OSIECKI z sąsiedniego Osieka to OSOBNY wpis na LPT,
 *   nie ten sam produkt.
 */

export const ZATOR: CityContent = {
  slug: "zator",
  h1: "Thermomix Zator – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Zator — prezentacja i cena",
  seoDescription:
    "Thermomix w Zatorze i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Zator — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Zatorze i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Zatora, Podolsza, Graboszyc, Palczowic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie dziewięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zatorze – jak wygląda prezentacja?",
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
      heading: "Na państwowej liście są nie tylko ryby, ale i przepisy na nie",
      paragraphs: [
        "Ministerialna Lista Produktów Tradycyjnych zwykle rejestruje surowce: ser, chleb, wędlinę, warzywo. Zator jest jednym z bardzo niewielu miejsc w Polsce, gdzie na tę listę trafiły całe potrawy — czyli sposób, w jaki się tu gotuje.",
        "Karp w zalewie octowej wpisano dwudziestego czwartego kwietnia dwa tysiące trzynastego roku. Fileciki karpiowe w pomidorach i pulpeciki z karpia w zalewie octowej — czternastego października dwa tysiące szesnastego.",
        "Najciekawsze są uzasadnienia. Przy filecikach ministerstwo napisało, że to potrawa znana i chętnie przyrządzana w Dolinie Karpia od ponad czterdziestu lat. Przy pulpecikach — od ponad siedemdziesięciu. To nie jest kuchnia muzealna ani odtworzona z książki. To są rzeczy, które robią tu babcie i mamy, i które ktoś w końcu spisał, zanim przepadną.",
        "Skąd bierze się ryba, też jest opisane, i to bardzo szczegółowo. Karp zatorski ma od dwa tysiące jedenastego roku Chronioną Nazwę Pochodzenia — czyli najostrzejszą kategorię unijnej ochrony, wymagającą, by cały proces zachodził na wskazanym obszarze. Obszar to trzy gminy: Zator, Przeciszów i Spytkowice, razem sto trzydzieści cztery kilometry kwadratowe.",
        "Specyfikacja jest tak konkretna, że czyta się ją jak przepis. Ryba rośnie w systemie dwuletnim: w pierwszym roku osiąga od sześćdziesięciu do stu pięćdziesięciu gramów, w drugim od tysiąca stu do tysiąca ośmiuset — i to jest masa handlowa. Karmi się ją wyłącznie paszami zbożowymi, przy czym co najmniej siedemdziesiąt procent zboża musi pochodzić z tego samego obszaru. Białka ma od siedemnastu do dziewiętnastu procent, tłuszczu od trzech do sześciu.",
        "Stawy mają razem tysiąc sto pięćdziesiąt sześć hektarów, z czego produkcyjnych osiemset do osiemset pięćdziesiąt. Największy kompleks, Przeręb, liczy czterysta sześćdziesiąt jeden hektarów. Od tysiąc dziewięćset czterdziestego szóstego roku należą do Uniwersytetu Jagiellońskiego.",
        "Hoduje się tu ryby od czternastego wieku. Pierwsza pisemna wzmianka pochodzi z tysiąc czterysta sześćdziesiątego ósmego roku, a w tysiąc czterysta dziewięćdziesiątym trzecim książę Janusz Czwarty pozwolił mieszczanom wykopać dwa stawy. W szesnastym wieku produkcja sięgała czterystu ton rocznie, a w drugiej połowie dziewiętnastego Zator był największym przedsiębiorstwem rybackim w kraju — w Niemczech mówiono wtedy o galicyjskiej rasie karpia.",
        "Samo miasto jest jeszcze starsze: prawa miejskie dostało dziesiątego listopada tysiąc dwieście dziewięćdziesiątego drugiego roku, a od tysiąc czterysta czterdziestego piątego było stolicą osobnego księstwa zatorskiego, wcielonego do Polski dopiero w tysiąc pięćset trzynastym.",
        "Dziś obok stawów działa jeszcze jedna rzecz, o skali trudnej do przeoczenia: Energylandia, otwarta w dwa tysiące czternastym roku, dziś siedemdziesiąt hektarów i sto trzydzieści trzy atrakcje, z dwoma milionami gości w sezonie dwa tysiące dwudziestym czwartym. Ma nawet własny przystanek kolejowy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Zator?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość: samo miasto czy jedno z dziewięciu sołectw. Gmina jest najrzadziej zaludniona w powiecie, więc odległości bywają większe, niż się wydaje po liczbie mieszkańców.",
        "Jeśli pracujecie przy stawach albo w parku rozrywki, powiedzcie o tym przy umawianiu. Oba te zajęcia mają bardzo wyraźne sezony i wolę zaproponować termin poza szczytem, niż zabierać komuś dwie godziny w najgorszym możliwym tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zatorze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Trzy przepisy z rejestru, po kolei",
      paragraphs: [
        "Ponieważ w tej gminie państwo spisało trzy sposoby przyrządzania karpia, warto powiedzieć wprost, co przy każdym z nich urządzenie robi, a czego nie.",
        "Pierwszy to karp w zalewie octowej. Cała trudność siedzi w zalewie: ocet, woda, cukier, cebula, ziele angielskie, liść laurowy — i to musi się zagotować, przestygnąć i mieć właściwą proporcję kwasu, bo od niej zależy, czy ryba się zamarynuje, czy rozpadnie. Zalewa gotuje się tu bez pilnowania, przy ustawionej temperaturze, a cebulę kroi się w kilka sekund równo, co przy marynatach ma znaczenie, bo grube kawałki się nie przegryzą.",
        "Drugi to fileciki karpiowe w pomidorach. Tu robota jest w sosie: pomidory trzeba zetrzeć albo zmiksować, dusić z cebulą i marchewką i doprowadzić do gęstości, która nie spłynie z ryby. Sos powstaje w jednym naczyniu, bez przelewania do blendera i bez mieszania, żeby nie przywarł — a przy pomidorach przywiera bardzo chętnie.",
        "Trzeci to pulpeciki. Ryba musi zostać zmielona razem z namoczoną bułką i cebulą, i to jest jedyny moment, w którym maszynka do mięsa naprawdę się przydaje — a tu zastępuje ją kilka sekund pracy noża. Masa wychodzi jednolita i da się od razu doprawić w tym samym naczyniu.",
        "Czego nie zrobi, mówię wprost: nie oprawi karpia, nie wybierze ości i nie usmaży go po wigilijnemu na patelni. Te trzy rzeczy zostają przy człowieku i przy nożu.",
        "Poza karpiem gotuje się tu jak w całej zachodniej Małopolsce — ziemniaki, kapusta, zupy, ciasto drożdżowe. Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Zator i gotowanie — pięć wpisów na liście, z czego trzy to potrawy",
    paragraphs: [
      "Na ministerialnej Liście Produktów Tradycyjnych figuruje z Doliny Karpia pięć pozycji: karp zatorski, karp zatorski wędzony, karp w zalewie octowej, fileciki karpiowe w pomidorach i pulpeciki z karpia w zalewie octowej. Trzy ostatnie to gotowe potrawy, nie surowiec — a to w tym rejestrze rzadkość.",
      "Uzasadnienia wpisów mówią o czasie: fileciki w pomidorach przyrządza się tu od ponad czterdziestu lat, pulpeciki od ponad siedemdziesięciu. To znaczy, że opisano nie zwyczaj z dziewiętnastego wieku, tylko rzeczy, które ktoś jadł u swojej babci.",
      "Osobno karp zatorski ma od dwa tysiące jedenastego roku Chronioną Nazwę Pochodzenia. Warto wiedzieć, że to co innego niż Chronione Oznaczenie Geograficzne, które ma na przykład czosnek galicyjski ze Słomnik: przy nazwie pochodzenia cały proces produkcji musi zachodzić na wskazanym obszarze, a nie tylko jego część. Obszar to trzy gminy — Zator, Przeciszów i Spytkowice — czyli sto trzydzieści cztery kilometry kwadratowe, ponad dwa razy więcej niż sama gmina Zator.",
      "Ryba rośnie dwa lata, karmiona wyłącznie paszami zbożowymi, z których co najmniej siedemdziesiąt procent musi pochodzić z tego samego obszaru. Sprzedaje się ją żywą i nieprzetworzoną, przez cały rok, z nasileniem przed świętami.",
      "Stawy mają razem tysiąc sto pięćdziesiąt sześć hektarów i od tysiąc dziewięćset czterdziestego szóstego roku należą do Uniwersytetu Jagiellońskiego. Hoduje się tu też liny, jazie, tołpygi, amury, karasie, szczupaki, sumy, okonie i jesiotry.",
      "Dla urządzenia najsensowniejsze są tu właśnie te trzy zarejestrowane przepisy: zalewa octowa gotowana bez pilnowania, sos pomidorowy bez przywierania, masa na pulpety zmielona w kilka sekund. Czego nie zrobi, mówię wprost: nie oprawi ryby i nie wybierze ości. Zabiera tę część roboty, która jest wyłącznie czasem i mieszaniem.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Zator dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy nieco ponad dziewięć tysięcy mieszkańców na pięćdziesięciu dwóch kilometrach kwadratowych, z czego w mieście mieszka około czterech tysięcy.",
    "Sołectwa to: Graboszyce, Grodzisko, Laskowa, Łowiczki, Palczowice, Podolsze, Rudze, Smolice i Trzebieńczyce.",
    "Stawy karpiowe zajmują w gminie i okolicy ponad tysiąc sto hektarów. Największe kompleksy to Przeręb i Spytkowice; od tysiąc dziewięćset czterdziestego szóstego roku gospodaruje na nich Uniwersytet Jagielloński.",
    "Zator był od tysiąc czterysta czterdziestego piątego roku stolicą osobnego księstwa zatorskiego, wcielonego do Polski dopiero w tysiąc pięćset trzynastym. Prawa miejskie ma od dziesiątego listopada tysiąc dwieście dziewięćdziesiątego drugiego.",
    "Od dwa tysiące czternastego roku działa tu Energylandia — dziś siedemdziesiąt hektarów i sto trzydzieści trzy atrakcje, z dwoma milionami gości w sezonie dwa tysiące dwudziestym czwartym. Zatrudnia około trzystu pięćdziesięciu osób na stałe i do dwóch tysięcy w szczycie sezonu.",
    "Dojazd: przez gminę biegnie zelektryfikowana linia kolejowa numer dziewięćdziesiąt cztery z Krakowa Płaszowa do Oświęcimia, z dwiema stacjami — Zator oraz Zator Park Rozrywki. Do Krakowa Głównego jedzie się nieco ponad godzinę, pociągi kursują co dwadzieścia do trzydziestu minut w ciągu dnia. Drogami: DK czterdzieści cztery, DK dwadzieścia osiem i DW siedemset osiemdziesiąt jeden.",
  ],
  districts: [
    "Zator",
    "Podolsze",
    "Graboszyce",
    "Palczowice",
    "Łowiczki",
    "Smolice",
    "Grodzisko",
    "Laskowa",
    "Rudze",
    "Trzebieńczyce",
  ],

  nearbyHeading: "Przeciszów, Spytkowice i Polanka Wielka też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Przeciszowem, Spytkowicami, Brzeźnicą, Polanką Wielką, Osiekiem i Tomicami. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu; blisko jest też do Wadowic i Chrzanowa.",
    "Dwa rozróżnienia dla porządku. Obszar chroniony karpia zatorskiego obejmuje trzy gminy — tę, Przeciszów i Spytkowice — a nie samą gminę Zator. A marka Dolina Karpia to zasięg jeszcze szerszy, obejmujący jedenaście gmin; to co innego niż obszar objęty unijną ochroną.",
  ],
  nearbyTowns: [
    "Przeciszów",
    "Spytkowice",
    "Brzeźnica",
    "Polanka Wielka",
    "Osiek",
    "Tomice",
  ],

  about: blokOMnie("do gminy Zator", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Mieszkam w Podolszu albo w Graboszycach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dziewięć sołectw traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w Zatorze"),
    {
      question: "Czy da się w tym zrobić karpia po zatorsku?",
      answer:
        "Częściowo i powiem uczciwie, w której części. Zalewa octowa gotuje się tu bez pilnowania i przy dokładnej temperaturze, co przy marynatach jest ważniejsze, niż się wydaje. Sos pomidorowy do filecików powstaje w jednym naczyniu i nie przywiera, bo mieszanie jest ciągłe. Masę na pulpeciki urządzenie zmieli razem z bułką i cebulą w kilka sekund, bez maszynki. Czego nie zrobi: nie oprawi ryby, nie wybierze ości i nie usmaży jej na patelni. Te trzy rzeczy zostają przy Was.",
    },
  ],

  geo: { lat: 49.9960808, lng: 19.4372372 },
};
