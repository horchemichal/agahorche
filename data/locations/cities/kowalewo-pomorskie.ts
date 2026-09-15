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
 * KOWALEWO POMORSKIE — powiat golubsko-dobrzyński,
 * woj. kujawsko-pomorskie, ZIEMIA CHEŁMIŃSKA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 048 mieszkańców (GUS 31.12.2024), 4,5 km²,
 * gęstość 909,7 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 11 140 osób, 141,2 km²,
 * 33 miejscowości.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ KOWALEWO POMORSKIE.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ ZAWYŻENIE PO STRONIE MATERIAŁÓW URZĘDOWYCH:
 *   prezentacja gminy podaje „niespełna 11,5 tys." wobec
 *   11 140 u GUS — ok. +3,2 %. UŻYWAM GUS.
 * ⚠ GEO: 53,1667 / 18,9000 — to PRZELICZENIE Z ZAPISU
 *   W MINUTACH KĄTOWYCH (53°10′N 18°54′E), nie pomiar.
 *   Najmniej precyzyjne współrzędne w tej fali — ale
 *   mieszczą się w mieście.
 * ⚠ ODMIANA (POTWIERDZONA W PWN, DWA HASŁA):
 *   D. KOWALEWA POMORSKIEGO, Ms. W KOWALEWIE POMORSKIM,
 *   przym. KOWALEWSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *   ⚠⚠ ZAWSZE PEŁNA NAZWA „Kowalewo Pomorskie" ALBO
 *   „Kowalewo" — NIGDY „Kowal". To dwa różne miasta
 *   w tym samym województwie, 130 km od siebie,
 *   i oba są w tej fali. Przymiotnik od Kowala brzmi
 *   „kowalski", od Kowalewa — „kowalewski".
 *   ⚠⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1275 — pierwsza lokacja miasta.
 * — 1298 — PONOWNE ZAŁOŻENIE MIASTA (druga lokacja).
 *   ⚠ DAT DZIENNYCH NIE USTALONO — nie podaję żadnej.
 * — ZAMEK: ok. 1231 pierwszy, drewniano-ziemny;
 *   ok. 1297–1303 początek budowy murowanej; zasadnicze
 *   prace w pierwszej połowie XIV w.
 * — ⚠⚠⚠ RDZEŃ KĄTA — WYMIARY ZAMKU:
 *   DWÓR GÓRNY TO KWADRAT 45 × 45 M,
 *   A DZIEDZINIEC W JEGO ŚRODKU — OK. 19 × 19 M.
 *   WYLICZENIE WŁASNE: 361 m² wewnątrz 2 025 m²,
 *   czyli PUSTE CENTRUM TO 17,8 % POWIERZCHNI.
 *   ⚠ W TEKŚCIE PODAJĘ „niespełna jedną piątą" ALBO
 *   „prawie osiemnaście procent" — liczba jest moja,
 *   więc mówię wprost, że to wyliczenie z dwóch wymiarów.
 * — Cały zespół zamkowy: ok. 300 m na osi północ–południe
 *   i 100–150 m na osi wschód–zachód; przedzamcze
 *   południowe 118 × 58 m.
 * — MURY MIEJSKIE: budowa na początku XIV w., ukończone
 *   przed połową stulecia. Dwie bramy główne — TORUŃSKA
 *   I BRODNICKA — oraz Brama Zamkowa i Brama Wodna.
 *   Na trzech bokach REGULARNIE ROZMIESZCZONE CZWOROBOCZNE
 *   PÓŁBASZTY. Zachowały się fragmenty muru z basztą.
 *   ⚠ GRUBOŚCI, WYSOKOŚCI I OBWODU MURÓW NIE USTALONO.
 *   ⚠ LICZBY PÓŁBASZT NIE USTALONO.
 * — 20 LISTOPADA 1871 — otwarcie odcinka kolejowego
 *   Toruń – Jabłonowo Pomorskie, na którym leży Kowalewo
 *   (km 161,474 linii nr 353, liczącej 381,265 km).
 * — Druga linia: nr 209, km 49,765. Kowalewo jest WĘZŁEM
 *   DWÓCH LINII. Stacja: TRZY PERONY, PIĘĆ KRAWĘDZI
 *   PERONOWYCH, dwie wieże wodne przy budynku dworca.
 * — 1911 — WIEŻA CIŚNIEŃ ZBUDOWANA NA FUNDAMENTACH
 *   ŚREDNIOWIECZNEJ WIEŻY ZAMKOWEJ.
 *   ⚠ WYSOKOŚCI, POJEMNOŚCI I MATERIAŁU NIE USTALONO.
 * — 1883 — otwarcie pierwszego banku w mieście.
 * — Użytki rolne ponad 77 % powierzchni gminy, lasy
 *   poniżej 7 %.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Kowalewo Pomorskie. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PUŁAPKI ROZBROJONE: „chleb z kminkiem ze Stolna"
 *   (25.06.2009) i „chleb z makiem ze Stolna" (04.03.2008)
 *   to GMINA STOLNO, powiat chełmiński — ta sama ziemia
 *   chełmińska, inna gmina i inny powiat. „Mięta pieprzowa
 *   unisławska" (06.08.2018) to UNISŁAW, powiat chełmiński.
 *   „Pierniki z Torunia" (23.02.2021) to TORUŃ — leży
 *   trzydzieści kilometrów stąd i kusi, ale to inne miasto.
 *   „Twaróg z Kujaw i Ziemi Dobrzyńskiej" (31.07.2013) ma
 *   zasięg regionalny i NIE WYMIENIA ŻADNEJ GMINY, a poza
 *   tym Kowalewo leży na ZIEMI CHEŁMIŃSKIEJ — ani na
 *   Kujawach, ani w ziemi dobrzyńskiej. NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: PRZESTRZEŃ MIĘDZY — dlaczego odstęp jest częścią
 * przepisu, choć żaden przepis go nie podaje.
 * Kąt od wymiarów zamku: dwór górny to kwadrat 45 × 45 m,
 * a w jego środku pusty dziedziniec 19 × 19 m. Prawie
 * osiemnaście procent powierzchni, na której nie postawiono
 * nic — i bez której nie dałoby się ani nic wnieść,
 * ani wynieść, ani przewietrzyć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dziedziniec nie był marnowaniem miejsca, tylko
 *   warunkiem działania całej reszty,
 * — ⚠⚠ ŻE W KUCHNI ODSTĘP MIĘDZY KAWAŁKAMI ROBI RÓŻNICĘ
 *   WIĘKSZĄ NIŻ WIĘKSZOŚĆ SKŁADNIKÓW — TO JEST RDZEŃ,
 * — KONKRETNIE, CO SIĘ DZIEJE, GDY ODSTĘPU NIE MA:
 *   kawałki stłoczone na patelni oddają wilgoć szybciej,
 *   niż zdąży ona odparować, więc zamiast się rumienić —
 *   duszą się we własnym soku,
 * — ⚠ ŻE TO SAMO DOTYCZY BLACHY I KOSZA: rzeczy, które
 *   się stykają, sklejają się bokami i w miejscu styku
 *   zostają blade,
 * — ⚠ ŻE ODSTĘP POTRZEBNY JEST TEŻ W LODÓWCE — powietrze
 *   musi mieć którędy krążyć,
 * — PRAKTYCZNE ROZWIĄZANIE, NIE MORAŁ: SMAŻYĆ W DWÓCH
 *   TURACH ZAMIAST W JEDNEJ. Dwie tury z odstępem trwają
 *   krócej niż jedna tura, z której trzeba potem odlewać
 *   płyn i czekać, aż odparuje,
 * — ⚠ UCZCIWIE: ŻE SĄ POTRAWY, W KTÓRYCH STŁOCZENIE JEST
 *   W PORZĄDKU ALBO WRĘCZ POŻĄDANE — wszystko, co i tak
 *   ma się dusić albo gotować w płynie. Zasada dotyczy
 *   RUMIENIENIA, nie każdego gotowania,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie gotujące w jednym
 *   naczyniu NIE ROZWIĄZUJE tego problemu, bo w naczyniu
 *   nie ma miejsca na odstępy. Rozwiązuje inny — mieszanie
 *   bez obecności. Przy rumienieniu na patelni odstęp
 *   trzeba zrobić samemu i tak zostanie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO WYKIPIENIA I PRZEPEŁNIONEGO GARNKA — kąt
 *   zajęty (Skarszewy). Tam chodzi o PŁYN, który ucieka
 *   z naczynia; TUTAJ o ODSTĘPY MIĘDZY KAWAŁKAMI.
 *   Nie piszę o napełnianiu garnka po brzegi.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO POWIERZCHNI STYKU I CIENKIEJ WARSTWY — kąt
 *   zajęty (Konstancin-Jeziorna). Tam chodzi o to, JAK
 *   DUŻA JEST POWIERZCHNIA JEDNEJ RZECZY; TUTAJ o to,
 *   CZY RZECZY DOTYKAJĄ SIEBIE NAWZAJEM. Rozgraniczam.
 * — ⚠⚠ ZERO DRUGIEJ PARTII I PIERWSZEJ BLACHY — kąt
 *   zajęty (Barcin). Piszę o dwóch turach jednym zdaniem,
 *   jako o rozwiązaniu, i nie rozwijam wątku różnicy
 *   między partiami.
 * — ⚠ ZERO WIELKOŚCI KAWAŁKÓW — kąt zajęty (Orzysz).
 *   Piszę o ODLEGŁOŚCI między kawałkami, nie o ich
 *   rozmiarze.
 * — ⚠ ZERO ROZMIARU NACZYNIA — kąt zajęty. Nie doradzam
 *   większej patelni, tylko dwie tury.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI — ⚠⚠
 *   w szczególności przy lodówce piszę WYŁĄCZNIE
 *   o krążeniu powietrza i o równym chłodzeniu,
 *   ZERO o psuciu się, bakteriach i terminach.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKÓW WOJENNYCH. Hasło en.wikipedia
 *   o Kowalewie to w praktyce lista działań zbrojnych:
 *   1410, 1454, 1629, okupacja szwedzka 1655–1657,
 *   1716, rozbiór 1772. ŻADNEJ Z TYCH DAT.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO ZAKONU KRZYŻACKIEGO I KOMTURII (1272–1275).
 *   Zamek opisuję WYŁĄCZNIE jako budowlę o zmierzonych
 *   wymiarach — bez tego, kto go stawiał i przeciw komu.
 * — ⚠⚠⚠ ZERO SPADKU LUDNOŚCI DO 300 OSÓB W 1772 R.
 *   Liczba kusi jako kontrast z dzisiejszymi czterema
 *   tysiącami, ale to wyludnienie.
 * — ⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ — Wirtualny Sztetl
 *   wychodzi wysoko w wynikach o historii miasta.
 * — ⚠⚠ ZERO STRAŻY POŻARNEJ Z 1873 R. I ZERO POŻARÓW —
 *   to pierwszy „miły" fakt infrastrukturalny w wynikach
 *   i jest o katastrofach.
 * — ⚠⚠ ZERO INWENTARZA ZAMKU Z 1436 R. — magazyn prochowy
 *   i warsztat kuszy to wątek zbrojny, a winnica
 *   na dziedzińcu to alkohol.
 * — ⚠⚠ ZERO GDANISKA I JEGO WYMIARÓW — to wieża ustępowa;
 *   nie wymieniam jej wcale.
 * — ⚠ ZERO KOŚCIOŁA JAKO WĄTKU WYZNANIOWEGO — rzeźba
 *   Madonny i polichromia zostają poza tekstem.
 * — ⚠⚠ ŹRÓDŁA ODRZUCONE: nonsa.pl (encyklopedia humoru,
 *   wychodzi wyżej niż strona urzędu), gminya1.pl (domena
 *   przejęta, przekierowuje na stronę hazardową),
 *   superpolonia.info, infodlapolaka.pl.
 * — ZERO bezrobocia, salda migracji i przyrostu naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SKROPLINY I WYKIPIENIE" (Skarszewy) dotyczy PŁYNU
 *   UCIEKAJĄCEGO Z NACZYNIA. ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   TUTAJ nie ma w ogóle wątku przelewania się — jest
 *   wyłącznie ODLEGŁOŚĆ MIĘDZY KAWAŁKAMI.
 * — „POWIERZCHNIA STYKU" (Konstancin-Jeziorna) dotyczy
 *   WIELKOŚCI POWIERZCHNI JEDNEJ RZECZY.
 * — „WIELKOŚĆ KAWAŁKÓW" (Orzysz) dotyczy ROZMIARU.
 * — „DRUGA PARTIA" (Barcin) dotyczy RÓŻNICY MIĘDZY TURAMI.
 * TUTAJ chodzi o PUSTE MIEJSCE MIĘDZY RZECZAMI I O TO,
 * ŻE JEST ONO CZĘŚCIĄ PRZEPISU, CHOĆ NIKT GO NIE ZAPISUJE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty dziennej lokacji — nie ustalono.
 * — NIE PODAJĘ wysokości ani pojemności wieży ciśnień.
 * — NIE PODAJĘ grubości ani obwodu murów, ani liczby
 *   półbaszt — nie ustalono.
 * — NIE PISZĘ, kto budował zamek ani przeciw komu.
 * — NIE PRZYPISUJĘ Kowalewu żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 * — PROCENT 17,8 podaję jako WŁASNE WYLICZENIE z dwóch
 *   zmierzonych wymiarów, nie jako liczbę ze źródła.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kowalewo Pomorskie leży na ziemi chełmińskiej,
 *   w powiecie golubsko-dobrzyńskim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 4 048 mieszkańców
 *   (GUS, 31.12.2024) na 4,5 km²; cała gmina ma 11 140 osób
 *   i trzydzieści trzy miejscowości na 141,2 km²,
 *   a użytki rolne zajmują ponad siedemdziesiąt siedem
 *   procent jej powierzchni,
 * — pierwsza lokacja miasta przypada na 1275 rok,
 *   a w 1298 miasto założono ponownie,
 * — murowany zamek zaczęto stawiać około 1297–1303 roku,
 *   w miejscu starszego, drewniano-ziemnego z około
 *   1231 roku; dwór górny jest kwadratem o boku
 *   czterdziestu pięciu metrów, a dziedziniec w jego środku
 *   ma około dziewiętnastu metrów w każdą stronę; cały
 *   zespół zamkowy ciągnął się na około trzysta metrów,
 * — mury miejskie budowano od początku XIV wieku
 *   i ukończono przed połową stulecia; miały dwie bramy
 *   główne — Toruńską i Brodnicką — a na trzech bokach
 *   regularnie rozmieszczone czworoboczne półbaszty;
 *   do dziś stoją fragmenty muru z basztą,
 * — 20 listopada 1871 roku otwarto odcinek kolejowy
 *   z Torunia do Jabłonowa Pomorskiego, na którym leży
 *   Kowalewo; miasto jest węzłem dwóch linii, a stacja
 *   ma trzy perony i pięć krawędzi peronowych,
 * — w 1911 roku postawiono tu wieżę ciśnień na fundamentach
 *   średniowiecznej wieży zamkowej,
 * — w 1883 roku otwarto w mieście pierwszy bank.
 */
export const KOWALEWO_POMORSKIE: CityContent = {
  slug: "kowalewo-pomorskie",
  h1: "Thermomix Kowalewo Pomorskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kowalewo Pomorskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Kowalewie Pomorskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kowalewo Pomorskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kowalewie Pomorskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kowalewa Pomorskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kowalewo Pomorskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Odstęp między kawałkami jest częścią przepisu, choć nikt go nie zapisuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kowalewie Pomorskim – jak wygląda prezentacja?",
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
      id: "przestrzen-miedzy",
      heading: "Dziewiętnaście metrów pustego środka",
      paragraphs: [
        "Zamek w Kowalewie Pomorskim zaczęto murować na przełomie XIII i XIV wieku, na miejscu starszego, drewniano-ziemnego. Jego główna część to kwadrat o boku czterdziestu pięciu metrów, a w samym środku — dziedziniec mniej więcej dziewiętnaście na dziewiętnaście.",
        "Policzyłam to z dwóch podanych wymiarów, więc traktuj tę liczbę jako moje wyliczenie, nie jako cytat: puste centrum zajmuje niecałe osiemnaście procent powierzchni. Prawie jedna piąta budowli, na której nie postawiono nic.",
        "I nie było to marnowanie miejsca, tylko warunek działania całej reszty. Bez dziedzińca nie dałoby się nic wnieść, nic wynieść ani przewietrzyć — pełny kwadrat byłby bryłą, do której nie ma jak wejść.",
        "W kuchni jest dokładnie tak samo, a odstęp między kawałkami robi różnicę większą niż połowa składników, które dokładamy do przepisu.",
        "Weź patelnię z mięsem ułożonym ciasno, kawałek przy kawałku. Każdy z nich oddaje wilgoć, a ta wilgoć nie ma dokąd uciec, bo nad blachą stoi ścianą. W efekcie temperatura przy powierzchni spada i zamiast rumienić się, mięso zaczyna się dusić we własnym soku. Nie zrobiłaś nic źle — po prostu nie zostawiłaś parze drogi wyjścia.",
        "Na blasze dzieje się to samo w innej postaci: rzeczy, które się stykają, sklejają się bokami, a w miejscu styku zostają blade i wilgotne. Cała reszta jest zrumieniona, a jedna ścianka wygląda, jakby w ogóle nie była w piekarniku.",
        "Odstęp przydaje się też w lodówce. Zimne powietrze musi mieć którędy krążyć, a półka zapchana od ściany do ściany chłodzi nierówno — jedne rzeczy za mocno, inne wcale.",
        "Rozwiązanie jest banalne i wszyscy go unikamy: usmażyć w dwóch turach zamiast w jednej. Wygląda to jak strata czasu, a zwykle nią nie jest. Dwie tury z odstępem trwają krócej niż jedna tura, z której trzeba potem odlewać płyn i stać nad patelnią, czekając, aż wszystko odparuje i w końcu zacznie się rumienić.",
        "Uczciwie: to nie jest reguła na każdą okazję. Potrawy, które i tak mają się dusić albo gotować w płynie, można upychać do woli — im ciaśniej, tym lepiej trzymają wilgoć. Zasada dotyczy wyłącznie rumienienia, czyli tego momentu, w którym chcesz suchej, gorącej powierzchni.",
        "I uczciwie o sprzęcie, bo tu łatwo obiecać nie to. Urządzenie gotujące w jednym naczyniu tego problemu nie rozwiązuje — w naczyniu nie ma miejsca na odstępy i nie o to w nim chodzi. Rozwiązuje inny: mieszanie i pilnowanie temperatury bez Twojej obecności. Ale kiedy chcesz zrumienić coś na patelni, odstęp musisz zrobić sama i tak już zostanie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kowalewie Pomorskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was najczęściej wychodzi blade zamiast zrumienione — to zwykle da się rozwiązać na miejscu i bez kupowania czegokolwiek.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kowalewie Pomorskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kowalewskiej rodziny",
      paragraphs: [
        "Kowalewo Pomorskie leży na ziemi chełmińskiej, w powiecie golubsko-dobrzyńskim; jest miastem w gminie miejsko-wiejskiej i liczy ponad cztery tysiące mieszkańców na czterech i pół kilometra kwadratowego, a cała gmina — ponad jedenaście tysięcy osób w trzydziestu trzech miejscowościach, przy czym użytki rolne zajmują ponad siedemdziesiąt siedem procent jej powierzchni. Pierwsza lokacja miasta przypada na 1275 rok, a w 1298 założono je ponownie. Murowany zamek zaczęto stawiać na przełomie XIII i XIV wieku, w miejscu starszego, drewniano-ziemnego: dwór górny jest kwadratem o boku czterdziestu pięciu metrów, dziedziniec w jego środku ma około dziewiętnastu metrów w każdą stronę, a cały zespół zamkowy ciągnął się na jakieś trzysta metrów. Mury miejskie budowano od początku XIV wieku i ukończono przed połową stulecia — miały dwie bramy główne, Toruńską i Brodnicką, a na trzech bokach regularnie rozmieszczone czworoboczne półbaszty; do dziś stoją fragmenty muru z basztą. 20 listopada 1871 roku otwarto odcinek kolejowy z Torunia do Jabłonowa Pomorskiego, na którym leży Kowalewo; miasto jest węzłem dwóch linii, a stacja ma trzy perony i pięć krawędzi peronowych. W 1883 roku otwarto pierwszy bank, a w 1911 postawiono wieżę ciśnień — na fundamentach średniowiecznej wieży zamkowej.",
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

  districtsHeading: "Do których części Kowalewa Pomorskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — ma cztery i pół kilometra kwadratowego, więc wszędzie jest blisko. Dojeżdżam też do wszystkich trzydziestu trzech miejscowości w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kowalewo Pomorskie też przyjadę",
  nearbyParagraphs: [
    "Golub-Dobrzyń, Chełmża, Wąbrzeźno, Toruń i Brodnica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Golub-Dobrzyń", "Chełmża", "Wąbrzeźno", "Toruń"],

  about: blokOMnie("do Kowalewa Pomorskiego", "w Kowalewie Pomorskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kowalewa Pomorskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Kowalewo Pomorskie jest miastem w gminie miejsko-wiejskiej w powiecie golubsko-dobrzyńskim — i nie należy go mylić z Kowalem, który leży sto trzydzieści kilometrów dalej.",
    },
    ...faqWspolne("w Kowalewie Pomorskim"),
    {
      question: "Dlaczego mięso na patelni się nie rumieni, tylko puszcza sok?",
      answer:
        "Najczęściej dlatego, że kawałki leżą zbyt ciasno. Każdy oddaje wilgoć, a ta nie ma dokąd uciec, więc temperatura przy powierzchni spada i zamiast rumienienia dostajesz duszenie we własnym soku. Rozwiązanie brzmi nudno, ale działa: usmażyć w dwóch turach, z odstępem między kawałkami. Zwykle wychodzi to szybciej niż jedna tura, z której trzeba potem odlewać płyn.",
    },
    {
      question: "Czy to znaczy, że nigdy nie wolno upychać jedzenia w naczyniu?",
      answer:
        "Nie, to zasada wyłącznie o rumienieniu. Wszystko, co ma się dusić albo gotować w płynie, można układać ciasno — tam wilgoć jest potrzebna i im ciaśniej, tym lepiej się ją trzyma. Odstęp ma znaczenie tylko wtedy, gdy zależy Ci na suchej, gorącej powierzchni.",
    },
  ],

  geo: { lat: 53.1667, lng: 18.9 },
};
