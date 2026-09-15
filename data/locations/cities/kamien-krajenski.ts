import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * KAMIEŃ KRAJEŃSKI — powiat sępoleński,
 * woj. kujawsko-pomorskie, KRAJNA, w środkowej części
 * Wysoczyzny Krajeńskiej, przy drodze krajowej nr 25.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 318 mieszkańców (GUS 31.12.2024), 3,7 km²,
 * gęstość 635,1 os./km², 139 m n.p.m.
 * CAŁA GMINA MIEJSKO-WIEJSKA: 6 478 osób, 163,3 km²,
 * 40 os./km².
 * ⚠ LICZBY MIEJSCOWOŚCI I SOŁECTW NIE USTALONO —
 *   NIE PODAJĘ ŻADNEJ. Piszę „wsie w gminie".
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ KAMIEŃ KRAJEŃSKI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ✅ URZĄD NIE ZAWYŻA: BIP podaje 2 308 mieszkańców
 *   miasta na 31.12.2021 wobec 2 318 u GUS na 31.12.2024,
 *   czyli o 0,4 % MNIEJ — i to przy danych o trzy lata
 *   starszych. NIE PISZĘ O ZAWYŻANIU.
 * ⚠ GEO: 53,5333 / 17,5214 (polskawliczbach).
 *   en.wikipedia podaje 53,53194 / 17,52861 — różnica
 *   ok. 480 m, największa w tej fali. Używam
 *   polskawliczbach.
 * ⚠ ODMIANA: D. KAMIENIA KRAJEŃSKIEGO,
 *   Ms. W KAMIENIU KRAJEŃSKIM, przym. KAMIEŃSKI.
 *   ⚠⚠ UWAGA NA DOPEŁNIACZ PIERWSZEGO CZŁONU:
 *   „KAMIENIA", NIE „KAMIENU". To częsty błąd.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — hasła nie ma w słowniku;
 *   przymiotnik „kamieński" potwierdzony w utrwalonej
 *   nazwie historycznej i w nazwie parafii.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠⚠⚠ RYZYKA POMYLENIA — CZTERY KAMIENIE I KRAJENKA:
 *   KAMIEŃ POMORSKI to miasto w zachodniopomorskim
 *   I UZDROWISKO — podwójne ryzyko, bo wątek uzdrowiskowy
 *   jest wyłączony. KAMIEŃ ŚLĄSKI to wieś w opolskim.
 *   KRAJENKA to miasto w wielkopolskim o nazwie niemal
 *   identycznej z przydawką „Krajeński".
 *   ⚠⚠ SĘPÓLNO KRAJEŃSKIE to siedziba TEGO SAMEGO
 *   POWIATU — ta sama przydawka, ten sam powiat.
 *   ZAWSZE PEŁNA NAZWA „KAMIEŃ KRAJEŃSKI".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1107 — pierwsza wzmianka o osadzie. [1 ŹRÓDŁO]
 * — 1359 — NADANIE PRAW MIEJSKICH przez arcybiskupa
 *   Jarosława Bogorię Skotnickiego (TRZY ŹRÓDŁA ZGODNE).
 *   W tym samym roku rozpoczęto budowę zamku.
 *   ⚠ DATY DZIENNEJ NIE USTALONO.
 * — ⚠⚠⚠ RDZEŃ KĄTA — 7 KWIETNIA 1385:
 *   ARCYBISKUP BODZĘTA, PRZEBYWAJĄC W DUŻEJ CERKWICY,
 *   NA PROŚBĘ WÓJTA MIASTA HERMANA TEMPLINA ODNAWIA
 *   PRZYWILEJ LOKACYJNY DLA KAMIENIA.
 *   ⭐ JEDYNA DATA DZIENNA W CAŁEJ TEJ FALI. [1 ŹRÓDŁO]
 *   ⚠ To prośba wójta, nie decyzja z góry — i to jest
 *   w tym fakcie najważniejsze.
 * — 1910 — spis wykazał 1 547 mieszkańców.
 *   ⚠⚠⚠ SAMA LICZBA. ŹRÓDŁO PODAJE PRZY NIEJ ROZBICIE
 *   NARODOWOŚCIOWE — NIGDY GO NIE CYTUJĘ. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — Ok. 2000 — wstrzymanie ruchu pasażerskiego na linii
 *   kolejowej nr 281; 2023 — WZNOWIENIE PO 23 LATACH.
 * — Zasoby mieszkaniowe gminy: 2 105 mieszkań, czyli
 *   326 mieszkań na tysiąc mieszkańców.
 * — Jeden kod pocztowy na całe miasto.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Kamień Krajeński. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠⚠ PUŁAPKA GŁÓWNA: „JABŁKA KRAJEŃSKIE" (21.08.2025,
 *   Warzywa i owoce) brzmią, jakby pochodziły z Kamienia
 *   KRAJEŃSKIEGO. NIE POCHODZĄ. Karta wskazuje południowy
 *   stok Krajny w rejonach nakielskim i pilskim,
 *   konkretnie Pobórkę Wielką, i NIE WYMIENIA ANI
 *   KAMIENIA, ANI POWIATU SĘPOLEŃSKIEGO. To dokładnie ten
 *   typ błędu: przymiotnik regionalny nie oznacza gminy.
 *   NIE PRZYPISUJĘ.
 *   ⚠⚠ „CIASTKA KRÓLEWSKIE Z SOSNA KRÓLEWSKIEGO"
 *   (22.12.2014) to JEDYNY produkt z powiatu sępoleńskiego
 *   — ale z GMINY SOSNO, nie z Kamienia. NIE PRZYPISUJĘ.
 *   ⚠ „Karp nakielski", „piwo nakielskie", „mace
 *   borowiackie" i „piołunówka tucholska" też nie są stąd.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: ZAPISZ WERSJĘ, KTÓRĄ NAPRAWDĘ WYKONUJESZ.
 * Kąt od 7 kwietnia 1385 r.: Kamień Krajeński miał prawa
 * miejskie od 1359 roku i wszystko działało. Dwadzieścia
 * sześć lat później wójt miasta poprosił, żeby przywilej
 * lokacyjny spisano od nowa — i arcybiskup to zrobił.
 * Nikt nie kwestionował praw miasta. Po prostu ktoś
 * na miejscu uznał, że warto mieć je zapisane jeszcze raz,
 * własnymi słowami swojego czasu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 7 kwietnia 1385 r. przywilej odnowiono NA PROŚBĘ
 *   WÓJTA, choć miasto działało od dwudziestu sześciu lat,
 * — ⚠⚠ ŻE DANIE ROBIONE OD LAT Z GŁOWY NIE ISTNIEJE
 *   NIGDZIE POZA TWOJĄ GŁOWĄ — I ŻE TO DZIAŁA ŚWIETNIE
 *   DOKŁADNIE DO TRZECH MOMENTÓW. TO JEST RDZEŃ:
 *   gdy wracasz do niego po roku, gdy prosi o nie ktoś
 *   inny, i gdy gotujesz w cudzej kuchni,
 * — ⚠⚠ ŻE CHODZI O WERSJĘ, KTÓRĄ NAPRAWDĘ WYKONUJESZ —
 *   z Twoimi ilościami, Twoimi skrótami, Twoją kolejnością
 *   — A NIE O TĘ Z KSIĄŻKI, OD KTÓREJ DAWNO ODESZŁAŚ.
 *   Przepisanie przepisu z książki nic nie daje,
 * — KIEDY TO ZROBIĆ, KONKRETNIE: PRZY NAJBLIŻSZYM UDANYM
 *   WYKONANIU, ZANIM SPRZĄTNIESZ. To jedyny moment,
 *   w którym masz naraz gotowy efekt i świeżą pamięć
 *   kroków. Dzień później zostaje tylko efekt,
 * — CO ZAPISAĆ POZA SKŁADNIKAMI — i to jest część,
 *   którą wszyscy pomijają: CO ZMIENIŁAŚ WOBEC ORYGINAŁU,
 *   DLACZEGO, I CO POSZŁO NIE TAK POPRZEDNIM RAZEM.
 *   Sama lista składników tego nie utrzyma,
 * — ⚠ ŻE TO ZAJMUJE TRZY MINUTY RAZ i jest różnicą między
 *   umiejętnością a wspomnieniem umiejętności,
 * — ⚠ UCZCIWIE O SPRZĘCIE: przepisy zapisane w urządzeniu
 *   to też CZYJAŚ WERSJA, nie Twoja. Urządzenie nie
 *   odnotuje, co zmieniłaś ani dlaczego. Za to zapisana
 *   własna wersja jest jedyną rzeczą, którą DA SIĘ
 *   PRZENIEŚĆ — do urządzenia, do córki, do cudzej kuchni.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO LISTY ZEBRANYCH, NIEUGOTOWANYCH PRZEPISÓW —
 *   to kąt Skępego z tej samej fali. Tam chodzi o CUDZE
 *   przepisy, które się zbiera i nigdy nie robi;
 *   TUTAJ o WŁASNE danie, które się robi od lat i nigdy
 *   nie zapisało. Przeciwne kierunki. Rozgraniczam wprost.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO SMAKU Z PAMIĘCI — kąt zajęty (Gozdnica).
 *   Tam chodzi o to, DLACZEGO DANIE NIE SMAKUJE TAK JAK
 *   KIEDYŚ; TUTAJ o to, ŻE NIE JEST NIGDZIE ZAPISANE.
 *   Nie piszę o dryfowaniu smaku ani o wspomnieniach.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO DAWNYCH MIAR W PRZEPISACH — kąt zajęty
 *   (Radziejów).
 * — ⚠⚠ ZERO NIEPRECYZYJNEGO JĘZYKA PRZEPISÓW — kąt zajęty
 *   (Pelplin). Nie robię wykładu o „szczypcie" i „do smaku".
 * — ⚠ ZERO MINUT I POZNAWANIA GOTOWOŚCI — kąt zajęty
 *   (Mońki, Poddębice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW — ⚠⚠ na tej stronie
 *   szczególnie łatwo o wpadkę, bo temat jest o zapisywaniu
 *   przepisów. PISZĘ O TYM, CO ZAPISAĆ, NIGDY NIE PODAJĄC
 *   ŻADNEGO PRZEPISU.
 * — ŻADNYCH NAZW FIRM, MAREK I APLIKACJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ROZBICIA NARODOWOŚCIOWEGO ZE SPISU 1910 R.
 *   i ZERO liczb granicznych z 1920 r. Cały akapit
 *   historyczny en.wikipedii o Kamieniu to dane
 *   narodowościowe. PODAJĘ WYŁĄCZNIE SUMĘ 1 547.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO ZAMKU JAKO OPOWIEŚCI. Jedyna „historia"
 *   tego miasta w polskich źródłach to trzykrotne zdobycie
 *   warowni (1383, 1409, 1414) i jej zburzenie — w całości
 *   wojenna. Wspominam WYŁĄCZNIE, że budowę rozpoczęto
 *   w 1359 r., i nic więcej. ⚠ Dodatkowo źródła są
 *   sprzeczne co do losów zamku (1422 kontra 1721),
 *   więc i tak nie ma czego twierdzić.
 * — ⚠⚠ ZERO ARCHIDIAKONATU (1512–1822) I ZERO KOLEGIATY
 *   (1964) — instytucje kościelne, wątek wyznaniowy.
 *   Arcybiskupów wymieniam WYŁĄCZNIE jako osoby nadające
 *   i odnawiające przywilej, bez rozwijania.
 * — ⚠⚠ ZERO TWIERDZENIA, ŻE RYNEK KAMIENIA KRAJEŃSKIEGO
 *   JEST JEDNYM Z NAJWIĘKSZYCH W POLSCE. To popularna
 *   teza, której NIE UDAŁO SIĘ POTWIERDZIĆ ŻADNYM
 *   ŹRÓDŁEM. NIE PISZĘ JEJ.
 * — ⚠⚠ ŹRÓDŁO Z CZARNEJ LISTY: infodlapolaka.pl wypłynął
 *   NA PIERWSZEJ STRONIE WYNIKÓW dla tego miasta.
 *   NIE CYTUJĘ. Tak samo superpolonia.info, gminya1.pl,
 *   nonsa.pl.
 * — ⚠ ZERO UZDROWISKOWYCH SKOJARZEŃ Z KAMIENIEM POMORSKIM.
 * — ZERO bezrobocia, salda migracji, przyrostu naturalnego
 *   i porównań liczby mieszkańców między latami.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SZEŚĆDZIESIĄT SZEŚĆ PLACÓW" (Skępe, ta sama fala)
 *   dotyczy CUDZYCH PRZEPISÓW ZEBRANYCH I NIEUGOTOWANYCH.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi o odwrotność:
 *   WŁASNE DANIE GOTOWANE OD LAT I NIGDZIE NIEZAPISANE.
 *   Odsyłam tam wprost.
 * — „SMAK Z PAMIĘCI" (Gozdnica) dotyczy TEGO, ŻE DANIE
 *   NIE SMAKUJE JAK KIEDYŚ.
 * — „GARNIEC, BECZKA I FUNT" (Radziejów) dotyczy DAWNYCH
 *   MIAR.
 * — „NIEPRECYZYJNY JĘZYK PRZEPISÓW" (Pelplin) dotyczy
 *   SŁÓW TYPU „SZCZYPTA".
 * TUTAJ chodzi o ODNOWIENIE ZAPISU RZECZY, KTÓRA DZIAŁA —
 * I O TO, ŻE ROBI SIĘ TO NIE DLATEGO, ŻE COŚ JEST NIE TAK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości w gminie — nie ustalono.
 * — NIE PODAJĘ daty dziennej praw miejskich z 1359 r.
 * — NIE PISZĘ, co stało się z zamkiem — źródła sprzeczne.
 * — NIE PODAJĘ rozbicia narodowościowego ze spisu 1910 r.
 * — NIE TWIERDZĘ nic o wielkości rynku.
 * — NIE PRZYPISUJĘ Kamieniowi „jabłek krajeńskich"
 *   ani żadnego innego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kamień Krajeński leży na Krajnie, w środkowej części
 *   Wysoczyzny Krajeńskiej, w powiecie sępoleńskim, przy
 *   drodze krajowej nr 25; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 2 318 mieszkańców
 *   (GUS, 31.12.2024) na 3,7 km², sto trzydzieści dziewięć
 *   metrów nad poziomem morza; cała gmina ma 6 478 osób
 *   na 163,3 km²,
 * — pierwsza wzmianka o osadzie pochodzi z 1107 roku,
 * — prawa miejskie nadał miastu w 1359 roku arcybiskup
 *   Jarosław Bogoria Skotnicki; w tym samym roku
 *   rozpoczęto budowę zamku,
 * — 7 kwietnia 1385 roku arcybiskup Bodzęta, przebywając
 *   w Dużej Cerkwicy, odnowił przywilej lokacyjny dla
 *   Kamienia — na prośbę tutejszego wójta, Hermana
 *   Templina,
 * — spis z 1910 roku wykazał w mieście 1 547 mieszkańców,
 * — ruch pasażerski na przechodzącej tędy linii kolejowej
 *   wstrzymano około 2000 roku i wznowiono w 2023,
 *   po dwudziestu trzech latach,
 * — w gminie jest 2 105 mieszkań, czyli trzysta
 *   dwadzieścia sześć na tysiąc mieszkańców, a całe miasto
 *   ma jeden kod pocztowy.
 */
export const KAMIEN_KRAJENSKI: CityContent = {
  slug: "kamien-krajenski",
  h1: "Thermomix Kamień Krajeński – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kamień Krajeński — prezentacja i cena",
  seoDescription:
    "Thermomix w Kamieniu Krajeńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kamień Krajeński — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kamieniu Krajeńskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kamienia Krajeńskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kamień Krajeński"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Danie robione od lat z głowy nie istnieje nigdzie poza Twoją głową.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kamieniu Krajeńskim – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "spisane-od-nowa",
      heading: "Siódmy kwietnia 1385: spiszcie to jeszcze raz",
      paragraphs: [
        "Kamień Krajeński dostał prawa miejskie w 1359 roku. Dwadzieścia sześć lat później, 7 kwietnia 1385, arcybiskup Bodzęta odnowił przywilej lokacyjny — na prośbę tutejszego wójta, Hermana Templina.",
        "Warto się przy tym zatrzymać, bo to nie była interwencja z góry. Miasto działało, targ działał, nikt praw Kamienia nie kwestionował. Po prostu ktoś na miejscu uznał, że warto mieć je zapisane jeszcze raz, własnymi słowami swojego czasu — i poprosił.",
        "Myślę o tym za każdym razem, gdy ktoś mówi mi, że swojego najlepszego dania nie ma zapisanego, bo „przecież robi je od lat”.",
        "Danie robione od lat z głowy nie istnieje nigdzie poza Twoją głową. I działa to świetnie — dokładnie do trzech momentów. Do chwili, gdy wracasz do niego po roku przerwy. Gdy prosi o nie ktoś inny. I gdy gotujesz w cudzej kuchni, bez swoich garnków i bez swojej ręki do proporcji.",
        "Ważne jest przy tym coś, co się nagminnie myli: chodzi o wersję, którą naprawdę wykonujesz. Z Twoimi ilościami, Twoimi skrótami, Twoją kolejnością. Nie o tę z książki, od której dawno odeszłaś. Przepisanie przepisu z książki nie daje nic, bo to nie jest to danie.",
        "Moment na to jest właściwie jeden: przy najbliższym udanym wykonaniu, zanim posprzątasz. Wtedy masz naraz gotowy efekt i świeżą pamięć kroków. Dzień później zostaje już tylko efekt, a kroki się wygładzają.",
        "I jeszcze część, którą wszyscy pomijają, a która decyduje o tym, czy zapisek się do czegoś przyda. Poza składnikami zapisz, co zmieniłaś wobec oryginału i dlaczego. Oraz — to najcenniejsze — co poszło nie tak poprzednim razem. Sama lista składników tego nie utrzyma, a to właśnie te zdania ratują danie za rok.",
        "Zajmuje to trzy minuty raz. I jest różnicą między umiejętnością a wspomnieniem umiejętności.",
        "Co innego lista przepisów zebranych od innych i nigdy nieugotowanych — o niej pisałam osobno, bo to dokładnie odwrotny problem.",
        "Uczciwie o sprzęcie. Przepisy zapisane w urządzeniu to też czyjaś wersja, nie Twoja, i urządzenie nie odnotuje, co zmieniłaś ani dlaczego.",
        "Za to zapisana własna wersja jest jedyną rzeczą, którą da się przenieść — do urządzenia, do córki, do cudzej kuchni. Dopóki siedzi w głowie, nie ma czego przenosić.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kamieniu Krajeńskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie robisz najczęściej z głowy — spróbujemy je razem rozpisać na kroki, a to zwykle okazuje się ciekawsze, niż brzmi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kamieniu Krajeńskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kamieńskiej rodziny",
      paragraphs: [
        "Kamień Krajeński leży na Krajnie, w środkowej części Wysoczyzny Krajeńskiej, w powiecie sępoleńskim, przy drodze krajowej numer 25; jest miastem w gminie miejsko-wiejskiej i liczy ponad dwa tysiące trzysta mieszkańców na trzech i siedmiu dziesiątych kilometra kwadratowego, sto trzydzieści dziewięć metrów nad poziomem morza. Cała gmina ma blisko sześć i pół tysiąca osób na stu sześćdziesięciu trzech kilometrach kwadratowych. Pierwsza wzmianka o osadzie pochodzi z 1107 roku, a prawa miejskie nadał jej w 1359 arcybiskup Jarosław Bogoria Skotnicki — w tym samym roku rozpoczęto budowę zamku. 7 kwietnia 1385 roku arcybiskup Bodzęta, przebywając w Dużej Cerkwicy, odnowił przywilej lokacyjny dla Kamienia na prośbę tutejszego wójta, Hermana Templina. Spis z 1910 roku wykazał w mieście tysiąc pięćset czterdzieści siedem osób. Ruch pasażerski na przechodzącej tędy linii kolejowej wstrzymano około 2000 roku i wznowiono w 2023, po dwudziestu trzech latach. W gminie jest dwa tysiące sto pięć mieszkań, czyli trzysta dwadzieścia sześć na tysiąc mieszkańców, a całe miasto obsługuje jeden kod pocztowy.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Kamienia Krajeńskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma niecałe cztery kilometry kwadratowe i jeden kod pocztowy, więc wszędzie jest blisko. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kamień Krajeński też przyjadę",
  nearbyParagraphs: [
    "Sępólno Krajeńskie, Więcbork, Tuchola, Nakło nad Notecią i Chojnice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sępólno Krajeńskie", "Więcbork", "Tuchola", "Nakło nad Notecią"],

  about: blokOMnie("do Kamienia Krajeńskiego", "w Kamieniu Krajeńskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kamienia Krajeńskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Kamień Krajeński jest miastem w gminie miejsko-wiejskiej w powiecie sępoleńskim — i to zupełnie inne miasto niż Kamień Pomorski czy Krajenka.",
    },
    ...faqWspolne("w Kamieniu Krajeńskim"),
    {
      question: "Po co zapisywać przepis, który robię od lat z głowy?",
      answer:
        "Bo dopóki jest w głowie, nie istnieje nigdzie indziej — a to przestaje wystarczać w trzech momentach: gdy wracasz do dania po roku przerwy, gdy prosi o nie ktoś inny i gdy gotujesz w cudzej kuchni. Zapisuje się przy tym wersję, którą naprawdę wykonujesz, z własnymi ilościami i skrótami, a nie tę z książki. Najlepiej zaraz po udanym wykonaniu, zanim posprzątasz.",
    },
    {
      question: "Co zapisać poza składnikami?",
      answer:
        "To, co zmieniłaś wobec oryginału i dlaczego — oraz co poszło nie tak poprzednim razem. To są zdania, które za rok naprawdę ratują danie, a sama lista składników ich nie utrzyma. I ta sama notatka jest jedyną rzeczą, którą da się potem przenieść: do urządzenia, do córki, do cudzej kuchni.",
    },
  ],

  geo: { lat: 53.5333, lng: 17.5214 },
};
