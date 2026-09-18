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
 * MROCZA — powiat nakielski, woj. kujawsko-pomorskie,
 * region etnograficzny KRAJNA,
 * południowo-wschodni kraniec Pojezierza Południowopomorskiego.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 102 mieszkańców (GUS 31.12.2024),
 * 5,0 KM² (⚠ NIE 4,32 km² z en.wikipedia — rozbieżność 16 %,
 *   używam GUS), gęstość 818,8 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 8 812 osób, 150,5 km², 33 WSIE.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ MROCZA.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,2429 / 17,6043 — to CENTROID MIASTA.
 *   NIE 53,2440 / 17,5474 — tamto jest centroid GMINY.
 * ⚠ ODMIANA (POTWIERDZONA W PWN): D. MROCZY, B. MROCZĘ,
 *   Ms. W MROCZY.
 *   ⭐ PWN NOTUJE DWA RÓWNOPRAWNE PRZYMIOTNIKI:
 *   „mrocki" ALBO „mrotecki" — obie formy poprawne.
 *   ⚠⚠ NIE UŻYWAM ŻADNEGO Z NICH W TEKŚCIE — wybór jednej
 *   formy sugerowałby, że druga jest błędna, a nie jest.
 *   Piszę opisowo: „w Mroczy", „rodzina w Mroczy".
 *   ⚠⚠ KĄT „DWIE POPRAWNE NAZWY" JEST ZAJĘTY
 *   (Strzelce Opolskie) — NIE ROBIĘ Z TEGO TEMATU.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *   ⚠⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1288 — pierwsza wzmianka o Mroczy jako wsi
 *   w kasztelanii nakielskiej.
 * — ⚠⚠⚠ RDZEŃ KĄTA — 17 SIERPNIA 1393:
 *   PRAWO MAGDEBURSKIE OD WŁADYSŁAWA JAGIEŁŁY, WYJEDNANE
 *   PRZEZ RYCERZA ARNOLDA Z WAŁDOWA HERBU TOPÓR.
 *   ⭐⭐⭐ DOKUMENT LOKACYJNY NIE TYLKO POZWALA NA TARG —
 *   WYZNACZA MU DZIEŃ TYGODNIA: TARGI COTYGODNIOWE,
 *   W ŚRODY. Dzień zapisany z góry, na zawsze ten sam.
 * — 1493 — wzmiankowany MŁYN w mieście; położenie nad
 *   ROKITKĄ (dopływ Noteci) sprzyjało młynarstwu.
 * — 1523 — DWA JARMARKI ROCZNIE, jeden przypadający
 *   27 WRZEŚNIA. ⚠ UŻYWAM WYŁĄCZNIE JAKO KONTRASTU
 *   SKALI CZASU (tydzień kontra rok), NIE jako wątku
 *   świątecznego — p. rozgraniczenie od Miłakowa.
 * — 18 WRZEŚNIA 1454 — król Kazimierz Jagiellończyk
 *   nocuje w Mroczy z ośmioma rycerzami.
 * — Ratusz pod koniec XVIII w. przeniesiono do kamienicy
 *   kupca Machola.
 * — Szkoła z czerwonej cegły, 1901–1904.
 * — Pierzeje rynku: kamieniczki XVIII-, XIX- i XX-wieczne;
 *   dom neorenesansowy z głową młodzieńca.
 * — ŚRODOWISKO: wysokość średnio 100–110 m n.p.m.,
 *   maksimum 134 m, minimum 97 m; opady 500–550 mm rocznie;
 *   średnia temperatura roczna 7,6 °C; 409 HA WÓD STOJĄCYCH,
 *   w tym 21 JEZIOR powyżej 1 ha — największe Witosławskie
 *   148 ha i Wieleckie 52 ha; Krajeński Park Krajobrazowy
 *   (1998) obejmuje ponad 22 % powierzchni gminy.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Mrocza. Sprawdzono wszystkie dziesięć kategorii
 *   wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PUŁAPKA 1 — „jabłka krajeńskie" (21.08.2025) brzmią
 *   jak produkt Mroczy (miasto leży w KRAJNIE i w Krajeńskim
 *   Parku Krajobrazowym), ale karta wskazuje POBÓRKĘ WIELKĄ
 *   oraz rejony nakielski i pilski. GMINY MROCZA W KARCIE
 *   NIE MA. NIE PRZYPISUJĘ.
 *   ⚠⚠ PUŁAPKA 2 — „karp nakielski" (18.07.2016) to wieś
 *   ŚLESIN koło Nakła, ten sam powiat, inna gmina.
 *   NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: JEDEN STAŁY DZIEŃ W TYGODNIU — dlaczego wpisana
 * z góry środa działa lepiej niż „jak będę miała czas".
 * Kąt od dokumentu z 17 sierpnia 1393 r.: przywilej nie
 * poprzestał na zgodzie na targ, tylko WYZNACZYŁ MU DZIEŃ.
 * Co tydzień, w środy. Bo targ istnieje tylko wtedy, gdy
 * wszyscy przyjdą w tym samym dniu — więc dzień musiał być
 * znany z góry i zawsze ten sam, żeby nikt nie musiał pytać.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przywilej z 1393 r. wyznaczył dzień tygodnia, a nie
 *   tylko dał zgodę na handel — i że to była CAŁA JEGO SIŁA,
 * — ⚠⚠ ŻE W KUCHNI NAJWIĘCEJ DAJE NIE NOWY PRZEPIS, TYLKO
 *   JEDEN STAŁY PUNKT W TYGODNIU NA ROBOTĘ, KTÓRA I TAK
 *   SIĘ POWTARZA — TO JEST RDZEŃ,
 * — ŻE KAŻDY DOM MA INNĄ ROBOTĘ DO WPISANIA: duże zakupy,
 *   przygotowanie na dwa–trzy dni do przodu, pieczenie,
 *   przejrzenie lodówki i zamrażarki,
 * — ⚠⚠ DLACZEGO STAŁY DZIEŃ BIJE „KIEDY BĘDĘ MIAŁA CZAS":
 *   BO DECYZJĘ PODEJMUJE SIĘ RAZ, A NIE CO TYDZIEŃ OD NOWA.
 *   Największy koszt nie jest w robocie, tylko w ciągłym
 *   rozstrzyganiu, kiedy ją zrobić,
 * — ⚠⚠ UCZCIWIE O GRANICACH — OBOWIĄZKOWE: stały dzień
 *   NIE PRZETRWA chorego dziecka ani tygodnia nadgodzin
 *   i NIE O TO CHODZI. Sens jest taki, że po opuszczonym
 *   tygodniu WRACA SIĘ DO TEGO SAMEGO DNIA, zamiast
 *   zaczynać od zera. To miejsce powrotu, nie reguła
 *   do złamania. ⚠⚠ ZERO DYSCYPLINY, ZERO MORALIZOWANIA,
 *   ZERO ROZLICZANIA KOGOKOLWIEK,
 * — ⚠ CZEGO NA TEN DZIEŃ NIE WPYCHAĆ: targ w środy nie
 *   zastąpił młyna, który mielił przez cały tydzień.
 *   Punkt tygodniowy bierze to, co się POWTARZA;
 *   codzienne zostaje codzienne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie NIE TWORZY tego dnia
 *   i nie zrobi zakupów ani nie zdecyduje, co ugotować.
 *   Zmienia jedno: robota, która zajmowała na tym dniu
 *   cztery godziny, może zająć dwie — a to jest różnica
 *   między dniem, który się utrzymuje, a dniem, który
 *   po cichu umiera.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO GOTOWANIA NA ZAPAS I MROŻENIA PORCJI JAKO
 *   TEMATU — kąt zajęty (Stopnica). Wspominam najwyżej
 *   jako JEDNĄ Z MOŻLIWYCH rzeczy do wpisania w dzień,
 *   jednym członem wyliczenia, bez rozwijania.
 * — ⚠⚠ ZERO SUCHEGO ZAPASU I SPIŻARNI — kąt zajęty
 *   (Dobiegniew).
 * — ⚠⚠ ZERO KALENDARZA ROCZNEGO — kąt zajęty (Brwinów).
 *   Tam chodzi o to, co się robi w lutym, a co w sierpniu;
 *   TUTAJ o JEDEN DZIEŃ W SIATCE TYGODNIA. Rozgraniczam.
 * — ⚠⚠ ZERO POWSTAWANIA NAWYKU — kąt zajęty (Żukowo).
 *   Tam chodzi o to, JAK NAWYK SIĘ RODZI; TUTAJ o to,
 *   DLACZEGO ZAPISANY Z GÓRY DZIEŃ DZIAŁA LEPIEJ NIŻ
 *   OTWARTY TERMIN. Rozgraniczam.
 * — ⚠⚠ ZERO GOTOWANIA OD ŚWIĘTA KONTRA CODZIENNIE —
 *   kąt zajęty (Miłakowo). Jarmarki z 1523 r. wolno podać
 *   WYŁĄCZNIE jako kontrast skali czasu, bez słowa
 *   o okazjach i świętowaniu. TWARDA GRANICA.
 * — ⚠ ZERO SYNCHRONIZACJI DWÓCH PROCESÓW — kąt zajęty
 *   (Biała Piska). Targ opisuję jako DZIEŃ W KALENDARZU,
 *   nie jako „trafienie w to samo okno".
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z 1939 R. I ZERO NAZWY OKUPACYJNEJ.
 *   Hasło en.wikipedia o Mroczy mówi wprost o masowych
 *   aresztowaniach i mordach na obywatelach polskich
 *   od października–listopada 1939 r. To jedno z pierwszych
 *   źródeł, jakie zwraca wyszukiwarka na hasło „Mrocza".
 *   ŻADNYCH SŁÓW „okupacja", „aresztowania".
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   ma osobną stronę o Mroczy i wychodzi w pierwszej piątce
 *   wyników. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO WĄTKU OLIMPIJSKIEGO I ZERO NAZWISKA
 *   SZTANGISTY Z TUTEJSZEGO KLUBU. Najbardziej „dumny"
 *   fakt o mieście — wymieniony w en.wikipedia jako
 *   najsłynniejszy mieszkaniec — prowadzi prosto
 *   do potwierdzonej dyskwalifikacji dopingowej, opisywanej
 *   jako „największy skandal w polskim sporcie".
 *   ŻADNEGO SPORTU WYCZYNOWEGO, ŻADNEGO KLUBU, ŻADNEGO
 *   MEDALU. TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO UPOSAŻENIA PARAFII Z 12 LIPCA 1456 R.
 *   (12 miar mąki, połowa kamienia łoju) — wątek wyznaniowy,
 *   a dodatkowo kąt „tłuszcz" jest zajęty.
 * — ⚠⚠ ZERO POSĄGU OWCY I ZERO HERBU — fakt niepotwierdzony
 *   (jedno źródło, blog), a prowadzi do hodowli, wełny
 *   i skór, czyli do zajętego kąta garbarskiego.
 * — ⚠⚠ ZERO „OSTATNIEJ KATEGORII MIAST" W PODATKACH
 *   (przełom XV/XVI w.) — nie robię z miasta biedaka.
 * — ⚠ ZERO RZEŹNIKÓW W ROZWINIĘCIU — ubój.
 * — ZERO NAJAZDÓW 1409 I STARCIA Z 13 LIPCA 1410 —
 *   wątek wojenny.
 * — ZERO KOŚCIOŁÓW jako wątku wyznaniowego; ZERO
 *   neogotyckiego grobowca — wątek śmierci.
 * — ZERO SALDA MIGRACJI (−42), przyrostu naturalnego (−24)
 *   i bezrobocia (10,2 %).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ZWYKŁY WTOREK" (Miłakowo) dotyczy GOTOWANIA BEZ OKAZJI.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ nie ma w ogóle osi
 *   „święto kontra dzień powszedni" — jest wyłącznie
 *   PYTANIE O MIEJSCE W SIATCE TYGODNIA.
 * — „KALENDARZ KUCHENNY NA ROK" (Brwinów) dotyczy MIESIĘCY.
 * — „NAWYK" (Żukowo) dotyczy POWSTAWANIA NAWYKU.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ZAMRAŻARKI.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy SPIŻARNI.
 * TUTAJ chodzi o JEDEN WPISANY Z GÓRY DZIEŃ TYGODNIA
 * I O TO, ŻE JEGO SIŁĄ JEST NIEPODEJMOWANIE DECYZJI
 * OD NOWA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ powierzchni 4,32 km² — to wartość sprzeczna
 *   z GUS.
 * — NIE UŻYWAM przymiotnika od nazwy miasta — PWN notuje
 *   dwie równoprawne formy i nie rozstrzygam.
 * — NIE PODAJĘ nazwy mieszkańca — nie ustalono.
 * — NIE PRZYPISUJĘ Mroczy żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli — nie ustalono.
 * — NIE TWIERDZĘ, ile domów, rzemieślników ani młynów
 *   miało miasto — inwentarza dóbr z 1771 r. nie udało się
 *   odczytać.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mrocza leży na Krajnie, w powiecie nakielskim, na
 *   południowo-wschodnim krańcu Pojezierza
 *   Południowopomorskiego; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 4 102 mieszkańców
 *   (GUS, 31.12.2024) na 5,0 km²; cała gmina ma 8 812 osób
 *   i trzydzieści trzy wsie na 150,5 km²,
 * — pierwsza wzmianka pochodzi z 1288 roku, gdy Mrocza była
 *   wsią w kasztelanii nakielskiej,
 * — 17 sierpnia 1393 roku Władysław Jagiełło nadał
 *   Mroczy prawo magdeburskie, o co wystarał się rycerz
 *   Arnold z Wałdowa herbu Topór; dokument lokacyjny
 *   wyznaczał cotygodniowe targi w środy,
 * — w 1493 roku wzmiankowano w mieście młyn — położenie
 *   nad Rokitką, dopływem Noteci, sprzyjało młynarstwu,
 * — w 1523 roku miasto miało dwa jarmarki rocznie, jeden
 *   przypadający 27 września,
 * — 18 września 1454 roku nocował tu król Kazimierz
 *   Jagiellończyk z ośmioma rycerzami,
 * — pod koniec XVIII wieku ratusz przeniesiono do kamienicy
 *   kupca Machola; przy rynku stoją kamieniczki XVIII-,
 *   XIX- i XX-wieczne, w tym dom neorenesansowy z głową
 *   młodzieńca, a szkołę z czerwonej cegły wzniesiono
 *   w latach 1901–1904,
 * — gmina leży średnio na wysokości od stu do stu
 *   dziesięciu metrów nad poziomem morza, najwyżej
 *   sto trzydzieści cztery, najniżej dziewięćdziesiąt
 *   siedem; rocznie spada tu od pięciuset do pięciuset
 *   pięćdziesięciu milimetrów opadu, a średnia temperatura
 *   roczna wynosi 7,6 stopnia,
 * — wody stojące zajmują 409 hektarów, a jezior większych
 *   niż hektar jest dwadzieścia jeden; największe to
 *   Witosławskie (148 ha) i Wieleckie (52 ha),
 * — Krajeński Park Krajobrazowy, utworzony w 1998 roku,
 *   obejmuje ponad dwadzieścia dwa procent powierzchni
 *   gminy.
 */
export const MROCZA: CityContent = {
  slug: "mrocza",
  h1: "Thermomix Mrocza – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mrocza — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mroczy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mrocza — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mroczy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mroczy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mrocza"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Stały dzień w tygodniu jest miejscem powrotu, a nie regułą do złamania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mroczy – jak wygląda prezentacja?",
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
      id: "staly-dzien",
      heading: "Środa wpisana do dokumentu",
      paragraphs: [
        "17 sierpnia 1393 roku Władysław Jagiełło nadał Mroczy prawo magdeburskie. Przywilej wystarał się rycerz Arnold z Wałdowa herbu Topór — i nie poprzestał na zgodzie na handel. Dokument wyznaczał targom dzień: co tydzień, w środy.",
        "To wcale nie jest drobiazg redakcyjny. Targ istnieje wyłącznie wtedy, gdy wszyscy przyjdą w tym samym dniu. Sama zgoda na handel nie zrobiłaby nic; dzień musiał być znany z góry i zawsze ten sam, żeby nikt nie musiał pytać, kiedy warto zaprząc konia.",
        "I to jest rzecz, która w kuchni daje więcej niż jakikolwiek nowy przepis: jeden stały punkt w tygodniu na robotę, która i tak się powtarza.",
        "Co konkretnie na ten dzień trafia, jest w każdym domu inne. U jednych duże zakupy. U innych przygotowanie na dwa–trzy dni do przodu, pieczenie albo po prostu przejrzenie lodówki i zamrażarki, żeby wiedzieć, co się ma. Rzecz nie w tym, co się wpisze, tylko że się wpisze.",
        "Bo najdroższe w tej robocie nie jest samo jej wykonanie. Najdroższe jest rozstrzyganie co tydzień od nowa, kiedy ją zrobić — a „jak będę miała czas” to nie jest termin, tylko pytanie zadawane siedem razy w tygodniu. Wpisany z góry dzień odpowiada na nie raz.",
        "Powiem teraz rzecz, którą trzeba powiedzieć, bo inaczej całe to zdanie o stałym dniu byłoby nieuczciwe. Stały dzień nie przetrwa chorego dziecka ani tygodnia nadgodzin i nie o to w nim chodzi.",
        "Sens jest taki, że po opuszczonym tygodniu wraca się do tego samego dnia, zamiast zaczynać wszystko od początku. To miejsce powrotu, nie reguła do złamania — i nie mam zamiaru nikogo z niego rozliczać.",
        "Warto też wiedzieć, czego na ten dzień nie wpychać. Targ w środy nie zastąpił młyna, który — wzmiankowany w 1493 roku, nad Rokitką — mielił przez cały tydzień. Punkt tygodniowy bierze to, co się powtarza w tygodniowym rytmie; codzienne zostaje codzienne. Zresztą skala bywa jeszcze rzadsza: jarmarki miasto miało w 1523 roku dwa na rok.",
        "Uczciwie o sprzęcie, bo tu łatwo obiecać za dużo. Urządzenie tego dnia nie stworzy. Nie zrobi zakupów i nie zdecyduje, co ugotować — to zostaje po Twojej stronie i zostanie tam na zawsze.",
        "Zmienia jedno, za to konkretnie: robota, która na tym dniu zajmowała cztery godziny, potrafi zająć dwie. A to jest dokładnie różnica między dniem, który się utrzymuje przez rok, a dniem, który po trzech tygodniach po cichu umiera.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mroczy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, który dzień tygodnia bywa u Was najspokojniejszy — dobiorę na spotkanie dania z tych, które realnie dałoby się na taki dzień wpisać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mroczy"),
    sekcjaRaty("w Mroczy"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny w Mroczy",
      paragraphs: [
        "Mrocza leży na Krajnie, w powiecie nakielskim, na południowo-wschodnim krańcu Pojezierza Południowopomorskiego; jest miastem w gminie miejsko-wiejskiej i liczy ponad cztery tysiące mieszkańców na pięciu kilometrach kwadratowych, a cała gmina — blisko dziewięć tysięcy osób w trzydziestu trzech wsiach. Pierwsza wzmianka pochodzi z 1288 roku, gdy była to wieś w kasztelanii nakielskiej. 17 sierpnia 1393 roku Władysław Jagiełło nadał miastu prawo magdeburskie, o co wystarał się rycerz Arnold z Wałdowa herbu Topór, a dokument lokacyjny wyznaczał cotygodniowe targi w środy. W 1493 roku wzmiankowano tu młyn — położenie nad Rokitką, dopływem Noteci, sprzyjało młynarstwu. W 1523 roku miasto miało dwa jarmarki rocznie, jeden przypadający 27 września, a 18 września 1454 roku nocował tu król Kazimierz Jagiellończyk z ośmioma rycerzami. Pod koniec XVIII wieku ratusz przeniesiono do kamienicy kupca Machola; przy rynku stoją kamieniczki XVIII-, XIX- i XX-wieczne, w tym dom neorenesansowy z głową młodzieńca, a szkołę z czerwonej cegły wzniesiono w latach 1901–1904. Gmina leży średnio na wysokości od stu do stu dziesięciu metrów nad poziomem morza, najwyżej sto trzydzieści cztery; rocznie spada tu od pięciuset do pięciuset pięćdziesięciu milimetrów opadu, a średnia temperatura roczna wynosi 7,6 stopnia. Wody stojące zajmują czterysta dziewięć hektarów, a jezior większych niż hektar jest dwadzieścia jeden — największe to Witosławskie i Wieleckie. Krajeński Park Krajobrazowy, utworzony w 1998 roku, obejmuje ponad dwadzieścia dwa procent powierzchni gminy.",
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

  districtsHeading: "Do których części Mroczy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma pięć kilometrów kwadratowych, więc wszędzie jest blisko. Dojeżdżam też do wszystkich trzydziestu trzech wsi w gminie, bez wyjątku.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mroczę też przyjadę",
  nearbyParagraphs: [
    "Nakło nad Notecią, Więcbork, Sępólno Krajeńskie, Kcynia, Szubin i Bydgoszcz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nakło nad Notecią", "Więcbork", "Sępólno Krajeńskie", "Kcynia"],

  about: blokOMnie("do Mroczy", "w Mroczy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mroczy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu trzech wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Mrocza jest miastem w gminie miejsko-wiejskiej w powiecie nakielskim.",
    },
    ...faqWspolne("w Mroczy"),
    {
      question: "Co warto wpisać w jeden stały dzień tygodnia?",
      answer:
        "To zależy od domu i nie ma tu jednej dobrej odpowiedzi. U jednych będą to duże zakupy, u innych przygotowanie na dwa–trzy dni do przodu, pieczenie albo samo przejrzenie lodówki i zamrażarki. Ważniejsze od tego, co się wpisze, jest to, że dzień jest ustalony z góry — wtedy decyzję podejmuje się raz, a nie co tydzień od nowa.",
    },
    {
      question: "A jak wypadnie tydzień, w którym się nie da?",
      answer:
        "To normalne i nie psuje sprawy. Sens stałego dnia nie polega na tym, żeby go nigdy nie opuścić, tylko na tym, żeby po opuszczonym tygodniu wrócić do tego samego dnia zamiast zaczynać wszystko od początku. To miejsce powrotu, nie reguła do złamania.",
    },
  ],

  geo: { lat: 53.2429, lng: 17.6043 },
};
