import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * DRAWNO — powiat choszczeński,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 150 mieszkańców (GUS 31.12.2024), 5,0 km²,
 *   gęstość 427,4 os./km².
 * CAŁA GMINA: 4 563 osoby, 320,9 km², gęstość 15 os./km²,
 *   57 miejscowości, 12 sołectw.
 * ⚠⚠ RÓŻNICA 2,12×. NIE MIESZAM TYCH LICZB.
 * ⚠⚠ MIASTO TO 1,6 % POWIERZCHNI GMINY PRZY 47 %
 *   JEJ LUDNOŚCI. ⚠ TO JEST MÓJ RACHUNEK Z DWÓCH
 *   DANYCH ŹRÓDŁOWYCH — podaję opisowo.
 * ⚠ GEO: 53,2198 / 15,7593.
 *
 * ⚠⚠ HOMONIM: DRAWNO ≠ DRAWSKO POMORSKIE (inny powiat,
 *   TO SAMO WOJEWÓDZTWO, już opisane w serwisie)
 *   ≠ DRAWSKO (wielkopolskie) ≠ rzeka DRAWA.
 *   ⚠⚠ Dyrekcja DRAWIEŃSKIEGO PARKU NARODOWEGO mieści
 *   się w Drawnie — częsta pomyłka „park w Drawsku".
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Drawno".
 *   D. DRAWNA, Ms. W DRAWNIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma regularna.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Drawna".
 *   ⚠ Przymiotnik „drawieński" należy do PARKU,
 *   nie do miasta — nie używam go o mieście.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1313 — pierwsza wzmianka nazwy „Wedele".
 * — ⚠⚠ PRAWA MIEJSKIE: PRZEDZIAŁ 1313–1333. Źródło samo
 *   podaje przedział, nie datę. PISZĘ PRZEDZIAŁ.
 * — Przemysł XIX w.: SIEDEM CEGIELNI, kaflarnia,
 *   sieciarnia, tartak parowy, wiatraki i młyny.
 * — ⚠⚠⚠ RDZEŃ KĄTA — FABRYKA CERAMIKI „ETRURIA":
 *   PRODUKOWAŁA SKRZATY OGRODOWE, JEDNE Z PIERWSZYCH
 *   W EUROPIE. To jest cały kąt.
 *   ⚠ NAZWĘ FABRYKI PODAJĘ — to nazwa historyczna
 *   nieistniejącego zakładu, nie marka handlowa.
 * — 1895 — linia kolejowa do Choszczna i Kalisza.
 * — Zamek z XIV w. (ruiny); dworek z XVIII w.
 *   ⚠⚠ KOŚCIOŁA NIE OPISUJĘ — wątek wyznaniowy,
 *   a źródło jest wewnętrznie sprzeczne („gotycki"
 *   i „z XVII wieku" naraz).
 * — Winnogóra 104 m n.p.m.
 *   ⚠⚠⚠ WZNIESIEŃ SREBRNA GÓRA (121,6 M), GARNCARSKA
 *   I RÓWNICA (PO 110 M) NIE PODAJĘ RAZEM Z „NAJWYŻSZYM
 *   PUNKTEM GMINY 109,1 M" — TRZY SZCZYTY SĄ WYŻSZE
 *   OD „NAJWYŻSZEGO PUNKTU". ŹRÓDŁO SPRZECZNE.
 *   ⚠⚠ NIE CYTUJĘ LICZBY 109,1 M ANI RAZU.
 * — ⚠⚠⚠ „DRÓG MIEJSKICH 2018 KM" TO BŁĄD ŹRÓDŁA —
 *   niemożliwe przy 5 km² miasta. NIE UŻYWAM.
 * — Jeziora miejskie: Dubie Północne i Południowe.
 * — Gmina: lesistość 67,1 %, lasy 21 553 ha.
 *   Jeziora z powierzchnią: Dubie 216,0 ha,
 *   Trzebuń 136,0 ha. ⚠ POZOSTAŁYCH JEZIOR PODAJĘ
 *   CO NAJWYŻEJ NAZWY — brak parametrów.
 * — Rzeki: Drawa (prawy dopływ Noteci), Korytnica,
 *   Głęboka, Słopica, Wardynka.
 * — Drawieński Park Narodowy: 11 390,44 ha całkowicie,
 *   1 903,42 ha na terenie gminy.
 * — Ponad 20 pomników przyrody — dęby, lipy, wiązy,
 *   buki, głazy narzutowe. ⚠ BEZ OBWODÓW I WIEKU.
 * — Szczecin ok. 93 km, Choszczno ok. 25 km.
 *   Sąsiednie gminy (odległości w linii prostej):
 *   Kalisz Pomorski 14,5 km, Recz 17,0, Bierzwnik 18,5,
 *   Dobiegniew 21,7, Krzęcin 22,5.
 *   ⚠ PODAJĘ „OKOŁO" — to nie są pomiary drogowe.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ BRAK DOWODU, NIE DOWÓD BRAKU. TEMAT NIE POJAWIA
 *   SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: JEDNA DZIWNA RZECZ ZAMIAST DZIESIĘCIU POPRAWNYCH
 * — o tym, że zapamiętuje się to, co robi się po swojemu,
 * a nie to, co się robi bez zarzutu.
 * Kąt od Drawna: w XIX w. działało tu siedem cegielni,
 * kaflarnia, sieciarnia i tartak parowy — solidny,
 * poprawny przemysł. A zapamiętano fabrykę „Etruria",
 * która robiła skrzaty ogrodowe.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w dziewiętnastowiecznym Drawnie działało siedem
 *   cegielni, kaflarnia, sieciarnia, tartak parowy,
 *   wiatraki i młyny,
 * — ŻE Z TEGO WSZYSTKIEGO ZAPAMIĘTANO FABRYKĘ CERAMIKI
 *   „ETRURIA", KTÓRA PRODUKOWAŁA SKRZATY OGRODOWE,
 *   JEDNE Z PIERWSZYCH W EUROPIE — to jest rdzeń,
 * — ⚠⚠ ŻE SIEDEM CEGIELNI BYŁO PEWNIE WAŻNIEJSZE
 *   GOSPODARCZO, A MIMO TO NIKT ICH DZIŚ NIE WYMIENIA.
 *   Cegła jest poprawna. Skrzat jest jeden taki,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA DOKŁADNIE TA SAMA ZASADA
 *   I ŻE PRAWIE NIKT JEJ NIE WYKORZYSTUJE. Staramy się
 *   robić wszystko poprawnie, a zapamiętywane jest to
 *   jedno, co robimy inaczej niż wszyscy,
 * — ⚠⚠ ŻE TO NIE MUSI BYĆ NIC WIELKIEGO. Zwykle jest
 *   to jedna rzecz, którą się robi trochę nie tak,
 *   jak każe przepis — i której domownicy nie potrafią
 *   zjeść nigdzie indziej,
 * — ⚠⚠ ŻE WARTO WIEDZIEĆ, CO TO U WAS JEST, bo to jest
 *   najtańsza rzecz w całej kuchni: nie wymaga sprzętu,
 *   czasu ani nauki, tylko zauważenia, że już istnieje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CEGIELNIE TEŻ BYŁY
 *   POTRZEBNE. Nie da się żyć z samych skrzatów
 *   i nikt nie proponuje, żeby codzienny obiad był
 *   wydarzeniem. Chodzi o proporcję jeden do siedmiu,
 *   nie o zamianę wszystkiego,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie wymyśli
 *   za Was tej jednej rzeczy i nie robi niczego
 *   „po swojemu". Załatwia za to cegielnie — czyli
 *   powtarzalną, poprawną część tygodnia — a to zwykle
 *   ona zjada czas, którego brakuje na resztę.
 *   MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZEPISÓW RODZINNYCH, ODTWARZANIA
 *   I ZAPISYWANIA — obszar zajęty PIĘCIOKROTNIE
 *   (Golub-Dobrzyń, Kamień Krajeński, Puck, Suraż,
 *   Radziejów). ⚠⚠ „Jedna rzecz robiona po swojemu"
 *   niebezpiecznie ociera się o ten obszar.
 *   ⚠⚠⚠ ANI JEDNEGO ZDANIA o babci, o dziedziczeniu,
 *   o spisywaniu, o tradycji i o tym, skąd ta rzecz
 *   się wzięła. Piszę WYŁĄCZNIE o tym, co jest teraz
 *   i co warto zauważyć. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO WŁASNEGO ZNAKU I WŁASNEJ WERSJI PRZEPISU —
 *   ten sam obszar (Polanów rozgraniczał to samo).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów).
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt
 *   zajęty (Międzyzdroje).
 * — ⚠⚠ ZERO POWTARZANIA TEGO SAMEGO NARZĘDZIA
 *   I TRZECH PODOBNYCH PATELNI — ⚠ siedem cegielni
 *   aż się o to prosi. NIE WCHODZĘ W TEN MORAŁ.
 *   Cegielnie są w tekście przykładem POPRAWNOŚCI,
 *   nigdy przykładem powielania sprzętu.
 * — ⚠⚠ ZERO JEDNA POZYCJA ZAJMUJE POŁOWĘ — kąt zajęty
 *   (Pełczyce).
 * — ⚠⚠ ZERO GĘSTOŚCI I POWIERZCHNI UŻYTKOWEJ — obszar
 *   zajęty (Koluszki, Tychowo). ⚠ Zestawienia „1,6 %
 *   powierzchni, 47 % ludzi" NIE UŻYWAM JAKO MORAŁU.
 * — ⚠⚠ ZERO CHARAKTERU KONTRA KATEGORII — kąt zajęty
 *   (Człopa).
 * — ⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH DAŃ JAKO PRZYKŁADÓW — nie
 *   podpowiadam, co ma być tą jedną rzeczą.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠ „Etruria" to nazwa
 *   historycznego, nieistniejącego zakładu.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza „Wedele" z 1313 r. jako zapisem źródłowym).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła nie opisuję.
 * — ⚠⚠ ZERO ZAMKU JAKO TEMATU OBRONNEGO — wymieniam
 *   wyłącznie jako ruiny z datą.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl; pomeranica.pl
 *   w zakresie długości dróg i najwyższego punktu gminy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ jednego roku nadania praw miejskich —
 *   źródło podaje przedział 1313–1333.
 * — NIE PODAJĘ „najwyższego punktu gminy" — źródło
 *   wewnętrznie sprzeczne.
 * — NIE PODAJĘ długości dróg miejskich — błąd źródła.
 * — NIE OPISUJĘ kościoła — źródło sprzeczne.
 * — NIE PODAJĘ obwodów ani wieku pomników przyrody.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODPOWIADAM, co ma być tą jedną rzeczą.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Drawno leży w powiecie choszczeńskim, około
 *   dwudziestu pięciu kilometrów od Choszczna
 *   i dziewięćdziesięciu trzech od Szczecina;
 *   w mieście mieści się dyrekcja Drawieńskiego Parku
 *   Narodowego,
 * — miasto liczy 2 150 mieszkańców (GUS, 31.12.2024)
 *   na 5,0 km², a cała gmina 4 563 osoby na 320,9 km²
 *   — piętnaście osób na kilometr kwadratowy —
 *   z pięćdziesięcioma siedmioma miejscowościami
 *   i dwunastoma sołectwami,
 * — pierwsza wzmianka o miejscowości pochodzi z 1313 r.,
 *   a prawa miejskie miasto otrzymało między 1313
 *   a 1333 r.,
 * — w XIX w. działało tu siedem cegielni, kaflarnia,
 *   sieciarnia, tartak parowy, wiatraki i młyny,
 *   a fabryka ceramiki „Etruria" produkowała skrzaty
 *   ogrodowe — jedne z pierwszych w Europie,
 * — w 1895 r. otwarto linię kolejową łączącą Drawno
 *   z Choszcznem i Kaliszem,
 * — w mieście zachowały się ruiny zamku z XIV w.
 *   i dworek z XVIII w., a nad miastem wznosi się
 *   Winnogóra — 104 m n.p.m.,
 * — lasy zajmują 67,1 % powierzchni gminy, czyli
 *   21 553 ha; największe jeziora to Dubie (216,0 ha)
 *   i Trzebuń (136,0 ha), a przez gminę płyną Drawa,
 *   Korytnica, Głęboka, Słopica i Wardynka,
 * — Drawieński Park Narodowy liczy 11 390,44 ha,
 *   z czego 1 903,42 ha leży w granicach gminy;
 *   w gminie jest ponad dwadzieścia pomników przyrody —
 *   dęby, lipy, wiązy, buki i głazy narzutowe.
 */
export const DRAWNO: CityContent = {
  slug: "drawno",
  h1: "Thermomix Drawno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Drawno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Drawnie (powiat choszczeński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Drawno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Drawnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Drawna w powiecie choszczeńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Drawno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Siedem cegielni i jedna fabryka skrzatów ogrodowych. Zgadnijcie, co zapamiętano.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Drawnie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "siedem-cegielni",
      heading: "Siedem cegielni i jedna fabryka skrzatów",
      paragraphs: [
        "W dziewiętnastowiecznym Drawnie działało siedem cegielni. Do tego kaflarnia, sieciarnia, tartak parowy, wiatraki i młyny. Solidny, poprawny, potrzebny przemysł w mieście, które nigdy nie było duże.",
        "Działała tu też fabryka ceramiki „Etruria”, która produkowała skrzaty ogrodowe — jedne z pierwszych w Europie.",
        "I to właśnie ją się pamięta.",
        "Siedem cegielni było niemal na pewno ważniejsze gospodarczo. Zatrudniały więcej ludzi, obracały większymi pieniędzmi i budowały wszystko dookoła. A dziś nikt ich nie wymienia z nazwy, bo cegła jest po prostu poprawna. Skrzat jest jeden taki.",
        "W kuchni działa dokładnie ta sama zasada i prawie nikt z niej nie korzysta.",
        "Staramy się robić wszystko porządnie. Żeby obiad był zjedzony, żeby smakowało, żeby nie było uwag. To jest siedem cegielni — potrzebnych, codziennych, wartych szacunku i kompletnie niezapamiętywanych.",
        "A zapamiętywane jest to jedno, co robicie inaczej niż wszyscy.",
        "I zwykle nie jest to nic wielkiego. Zwykle jest to jedna rzecz robiona trochę nie tak, jak każe przepis — dodawana za wcześnie, pomijana wbrew instrukcji, doprawiana czymś, czego nikt inny tam nie wsypuje. Coś, czego domownicy nie potrafią zjeść nigdzie indziej i o co pytają, wracając.",
        "Warto wiedzieć, co to u Was jest.",
        "To jest najtańsza rzecz w całej kuchni. Nie wymaga sprzętu, nie wymaga czasu, nie trzeba się jej uczyć — ona już istnieje i wystarczy ją zauważyć. Jedyne, co można z nią zrobić źle, to uznać ją za dziwactwo i po cichu wyprostować pod przepis.",
        "Uczciwie o drugiej stronie: cegielnie też były potrzebne. Nie da się żyć z samych skrzatów i nikt przy zdrowych zmysłach nie proponuje, żeby codzienny obiad był wydarzeniem. Proporcja w Drawnie wynosiła siedem do jednego i to jest zupełnie rozsądna proporcja.",
        "Na koniec o urządzeniu, wprost. Ono nie wymyśli za Was tej jednej rzeczy i nie robi niczego po swojemu — to nie jest jego zadanie.",
        "Załatwia natomiast cegielnie: powtarzalną, poprawną, obowiązkową część tygodnia. A to zwykle właśnie ona zjada czas, którego potem brakuje na wszystko inne.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Drawnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o co u Was domownicy proszą najczęściej. To zwykle jest ta jedna rzecz i warto ją mieć na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Drawnie"),
    sekcjaRaty("w Drawnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Drawna",
      paragraphs: [
        "Drawno leży w powiecie choszczeńskim, około dwudziestu pięciu kilometrów od Choszczna i dziewięćdziesięciu trzech od Szczecina; w mieście mieści się dyrekcja Drawieńskiego Parku Narodowego. Samo miasto liczy ponad dwa tysiące stu mieszkańców (GUS, 31.12.2024) na pięciu kilometrach kwadratowych, a cała gmina ponad cztery i pół tysiąca osób na trzystu dwudziestu — piętnaście osób na kilometr — z pięćdziesięcioma siedmioma miejscowościami i dwunastoma sołectwami. Pierwsza wzmianka pochodzi z 1313 roku, a prawa miejskie miasto otrzymało między 1313 a 1333. W dziewiętnastym wieku działało tu siedem cegielni, kaflarnia, sieciarnia, tartak parowy, wiatraki i młyny, a fabryka ceramiki „Etruria” produkowała skrzaty ogrodowe — jedne z pierwszych w Europie. W 1895 otwarto linię kolejową do Choszczna i Kalisza. Zachowały się ruiny zamku z czternastego wieku i dworek z osiemnastego, a nad miastem wznosi się Winnogóra, sto cztery metry nad poziomem morza. Lasy zajmują sześćdziesiąt siedem procent powierzchni gminy; największe jeziora to Dubie, dwieście szesnaście hektarów, i Trzebuń, sto trzydzieści sześć. Drawieński Park Narodowy liczy ponad jedenaście tysięcy hektarów, z czego blisko dwa tysiące leżą w granicach gminy, a pomników przyrody jest tu ponad dwadzieścia — dęby, lipy, wiązy, buki i głazy narzutowe.",
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

  districtsHeading: "Do których części Drawna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich pięćdziesięciu siedmiu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość — gmina ma ponad trzysta dwadzieścia kilometrów kwadratowych, w dwóch trzecich leśnych.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Drawno też przyjadę",
  nearbyParagraphs: [
    "Kalisz Pomorski jest około czternastu kilometrów stąd, Recz siedemnaście, Choszczno dwadzieścia pięć. Do Dobiegniewa i Bierzwnika też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Kalisz Pomorski", "Recz", "Choszczno", "Dobiegniew", "Mirosławiec"],

  about: blokOMnie("do Drawna", "w Drawnie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Drawna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie — a jest ich pięćdziesiąt siedem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Drawno w powiecie choszczeńskim, nie o Drawsko Pomorskie, które leży w tym samym województwie, ani o Drawsko w wielkopolskiem. Dyrekcja Drawieńskiego Parku Narodowego mieści się właśnie w Drawnie — to częsty powód pomyłek.",
    },
    ...faqWspolne("w Drawnie"),
    {
      question: "Co właściwie zapamiętują domownicy z tego, co gotuję?",
      answer:
        "Zwykle nie to, co zrobione najporządniej, tylko to jedno, co robicie inaczej niż wszyscy. W dziewiętnastowiecznym Drawnie działało siedem cegielni i jedna fabryka skrzatów ogrodowych — i pamięta się tę drugą. Warto wiedzieć, co jest tą jedną rzeczą u Was: nie wymaga sprzętu ani czasu, bo już istnieje, a łatwo ją niechcący wyprostować pod przepis.",
    },
    {
      question: "Czy Thermomix zmienia smak tego, co gotuję po swojemu?",
      answer:
        "Nie wymyśla niczego za Was i nie ma na to wpływu — przyprawiacie tak samo jak dotąd. Przejmuje natomiast tę powtarzalną, obowiązkową część tygodnia, która zwykle zjada czas potrzebny na resztę. To jest jego rola i nie udaję, że jest inna.",
    },
  ],

  geo: { lat: 53.2198, lng: 15.7593 },
};
