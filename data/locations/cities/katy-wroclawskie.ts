import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * KĄTY WROCŁAWSKIE — powiat wrocławski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Kąty Wrocławskie.
 * MIASTO: 7 157 mieszkańców (GUS 31.12.2024), 8,6 km²,
 *   gęstość 831,2 os./km² (domyka się, 0,1 %).
 * CAŁA GMINA: 30 478 osób, 176,7 km², 45 wsi i osad.
 *   ⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 30 478 / 176,7 = 172,5,
 *   a serwis podaje 168 — rozbieżność 2,7 %. Wskaźnik
 *   nie nadąża za przyrostem w gminie podmiejskiej.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Miasto to 23,5 % ludności gminy — najniższy udział
 *   w tej fali — i 4,9 % jej powierzchni.
 *   ⚠⚠ PODAJĘ JAKO FAKT, NIE ROBIĘ Z TEGO KĄTA.
 * ⚠ 20 km na zachód od Wrocławia. ⚠ GEO: 51,0333 / 16,7667.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI — „KĄT" JAKO RZECZOWNIK
 *   POSPOLITY O BARDZO WYSOKIEJ FREKWENCJI. Formy
 *   przypadkowe nazwy pokrywają się z wyrażeniami:
 *     w Kątach / w kątach, w kącie
 *     do Kątów / do kątów
 *     pod Kątami / POD KĄTEM („pod kątem czegoś")
 *     Kąty / kąt prosty, kąt nachylenia, kąt ostrza
 *   ⚠⚠⚠ NAJGROŹNIEJSZE W TEKŚCIE O KUCHNI SĄ „POD KĄTEM"
 *   I „KĄT OSTRZA" — oba padłyby naturalnie.
 *   ⚠⚠⚠ ZASADA BEZWZGLĘDNA: NIGDY NIE SKRACAM DO SAMYCH
 *   „KĄTÓW". ZAWSZE PEŁNA NAZWA „KĄTY WROCŁAWSKIE",
 *   W KAŻDYM PRZYPADKU, TAKŻE W POWTÓRZENIACH.
 *   ⚠⚠⚠ W CAŁYM TEKŚCIE NIE UŻYWAM WYRAŻENIA „POD KĄTEM"
 *   ANI SŁOWA „KĄT" W ZNACZENIU GEOMETRYCZNYM.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *
 * ⚠⚠ ODMIANA — PLURALE TANTUM, OBA CZŁONY:
 *   M. Kąty Wrocławskie (te) · D. KĄTÓW WROCŁAWSKICH
 *   ⚠⚠⚠ TU KOŃCÓWKA JEST -ÓW, nie zerowa!
 *   ⚠⚠⚠ UWAGA NA RÓŻNICĘ Z SIECHNICAMI (ta sama fala)
 *   I Z KOWARAMI: do Siechnic, do Kowar — zerowa;
 *   do Kątów Wrocławskich — -ów. SPRAWDZIĆ KAŻDE
 *   WYSTĄPIENIE OSOBNO.
 *   Ms. w Kątach Wrocławskich · N. Kątami Wrocławskimi
 *   ⚠⚠⚠ ORZECZENIE W LICZBIE MNOGIEJ: „Kąty Wrocławskie
 *   LEŻĄ", „SĄ", „ZOSTAŁY lokowane", „TE Kąty
 *   Wrocławskie".
 *   ⚠⚠⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE MA — forma
 *   powiatowa („wrocławski") jest zajęta przez Wrocław,
 *   a „kącki" ani „kątowski" nie są udokumentowane.
 *   NIE TWORZĘ GO NA WŁASNĄ RĘKĘ. Operuję pełną nazwą.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie znaleziono.
 *
 * ⚠⚠ POZOSTAŁE PUŁAPKI:
 *   — ⚠⚠⚠ MYLENIE Z WROCŁAWIEM: człon „Wrocławskie",
 *     powiat wrocławski i 20 km odległości sprawiają,
 *     że miasto bywa brane za przedmieście. TO ODRĘBNE
 *     MIASTO I SIEDZIBA GMINY LICZĄCEJ PONAD TRZYDZIEŚCI
 *     TYSIĘCY MIESZKAŃCÓW. ⚠ Wrocław nie należy
 *     do powiatu wrocławskiego, choć jest jego siedzibą.
 *   — ⚠⚠ TRZY MIASTA Z TEJ FALI LEŻĄ W POWIECIE
 *     WROCŁAWSKIM: Kąty Wrocławskie, Siechnice i Sobótka.
 *     NIGDY NIE PISZĘ SAMEGO „W POWIECIE".
 *   — ⚠⚠ WIEŚ KĄTY LEŻY W GMINIE CHOCIANÓW — też pisanej
 *     w tej fali.
 *   — ⚠ Inne „Kąty": Kąty Bystrzyckie (dolnośląskie),
 *     Kąty Opolskie, Kąty Rybackie, liczne wsie Kąty,
 *     a także wieś Kątki w dolnośląskiem.
 *   — ⚠ Cesarzowice są zarówno w gminie Kąty Wrocławskie,
 *     jak i w gminie Środa Śląska (opisanej wcześniej).
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * LOKACJA — ⚠⚠ ŹRÓDŁA ROZBIEŻNE (jak w Sycowie):
 *   dwa źródła podają 1297 jako rok NADANIA prawa lokacji
 *   przez księcia Bolka I Surowego; urząd miasta podaje
 *   1298 jako datę pierwszego dokumentu, w którym miasto
 *   występuje jako „in castro nostro Kanth", i mówi
 *   ostrożnie „nie później niż 1298".
 *   ⚠⚠⚠ PODAJĘ OBA FAKTY ROZDZIELNIE, jako nadanie
 *   i jako wzmiankę. NIE ŁĄCZĘ ICH W JEDNĄ DATĘ.
 *   ⚠ Rok 1297 i Bolko I Surowy łączą Kąty Wrocławskie
 *   z Chocianowem (ta sama fala) — PODAJĘ JAKO FAKT,
 *   nie robię z tego morału.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PRZEDMURZE:
 *   Mur główny miał 0,75–0,80 m grubości.
 *   STOJĄCE PRZED NIM PRZEDMURZE — DRUGA LINIA —
 *   MIAŁO 0,40 m, czyli mniej więcej o połowę mniej.
 *   NIE BYŁO MOCNIEJSZE. NIE MIAŁO BYĆ.
 *   MIAŁO BYĆ PIERWSZE NA DRODZE. To jest cały kąt.
 *   ⚠ Szacunkowa wysokość muru: około 3,5 m; szczerby
 *   strzelnicze wysokie na 0,60 m, rozstawione
 *   co najwyżej co 2,25 m; dwie bramy główne — Dolna
 *   i Górna — oraz furta zamkowa; wieże bramne
 *   trzykondygnacyjne; najstarszy odcinek z początku XV w.
 *   ⚠⚠ DŁUGOŚCI MURÓW, LICZBY BASZT ANI POWIERZCHNI
 *   OBWAROWANEJ NIE USTALONO — NIE PODAJĘ.
 *   ⚠⚠⚠ OPISUJĘ MUR WYŁĄCZNIE JAKO KONSTRUKCJĘ
 *   O GRUBOŚCIACH. ZERO WĄTKU OBRONNEGO, ZERO WOJNY,
 *   ZERO OBLĘŻEŃ. Słowo „obrona" pada wyłącznie
 *   w opisie funkcji warstwy, bez rozwinięcia.
 *   TWARDA GRANICA.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — 1302 — dziedziczny wójt Gerhard.
 * — 1310 — uruchomienie komory celnej.
 * — 1340 — początek dorocznego jarmarku.
 * — 1613 — WIEŻA RATUSZOWA, wysokość 36 m, u podstawy
 *   na planie prostokątnym, wyżej przechodząca
 *   w ośmiobok; zegar z tego samego roku.
 * — 1879 — RATUSZ MIEJSKI (budynek).
 *   ⚠ WIEŻA JEST O 266 LAT STARSZA OD RATUSZA, DO KTÓREGO
 *   PRZYLEGA. ⚠⚠ PODAJĘ JAKO FAKT, NIE ROBIĘ Z TEGO
 *   KĄTA — „stare i nowe obok siebie" zajęte (Brzeg Dolny),
 *   a „dołożone po okresie używania" zajęte (Syców).
 * — 1624 — pożar, w którym spłonęło 165 domów.
 *   ⚠ Kolejne pożary 1660 i 1752. PODAJĘ JAKO DATY.
 * — 1818 — ostatni remont murów, wyłącznie przy bramach.
 * — ok. 1820 — rozbiórka murów i wież.
 * — 1843 — uruchomienie kolei.
 * — 1855–1856 — zasypanie fos, około 35 lat po rozbiórce
 *   murów. ⚠⚠ PODAJĘ JAKO FAKT — „skasuj infrastrukturę
 *   po usuniętym przedmiocie" to osobny, bardzo dobry kąt,
 *   ale JEDEN TEKST TO JEDEN KĄT. NIE ROZWIJAM.
 * — ZAMEK: zachowany zarys 60 × 38 m.
 * — GMINA: pałac w Krobielowicach 1570–1580, odbudowany
 *   w latach 1992–1996, 3 km od miasta; pałac
 *   w Samotworze 1776–1781; pałac w Zabrodziu 1872–1873
 *   z parkiem o powierzchni 4 ha; drewniana wiata peronowa
 *   na dworcu ma 50 m długości; zielony szlak z rynku
 *   do Sośnicy liczy 800 m.
 * — ⚠⚠⚠ FABRYKI PROCHU (1896–1920) NIE WYMIENIAM —
 *   zbrojeniówka. TWARDA GRANICA.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wątek wyznaniowy.
 *   Wysokości wieży kościelnej (45 m) NIE PODAJĘ.
 * — ⚠⚠ SPLĄDROWANIA PRZEZ HUSYTÓW (1428, 1432)
 *   NIE WYMIENIAM — wątek wojenny.
 * — ⚠ LUDNOŚCI HISTORYCZNEJ (1610, 1794, 1845)
 *   NIE PODAJĘ — ciąg zsuwa się w demografię.
 *
 * KĄT: CIENKIE, ALE PIERWSZE
 * — o tym, że w kuchni najwięcej ratują rzeczy tanie
 * i lekkie, których jedyną zaletą jest to, że stoją
 * wcześniej. Kąt od murów Kątów Wrocławskich: przedmurze
 * miało czterdzieści centymetrów przy murze głównym
 * grubym na osiemdziesiąt.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że mur główny miał od siedemdziesięciu pięciu
 *   do osiemdziesięciu centymetrów grubości, a stojące
 *   przed nim przedmurze — czterdzieści,
 * — ŻE DRUGA WARSTWA NIE BYŁA MOCNIEJSZA I NIE MIAŁA
 *   BYĆ. MIAŁA BYĆ PIERWSZA NA DRODZE. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI CHRONIMY RZECZY SIŁĄ: grubsza deska,
 *   cięższy garnek, droższa patelnia, twardszy blat,
 * — ⚠⚠ ŻE NAJWIĘCEJ RATUJĄ RZECZY TANIE, CIENKIE
 *   I LEKKIE, KTÓRYCH JEDYNĄ ZALETĄ JEST KOLEJNOŚĆ:
 *   ściereczka pod deską, żeby nie jechała; talerzyk
 *   na łyżkę; taca pod butelką oleju; miska na obierki
 *   postawiona ZANIM zaczniesz obierać, a nie w trakcie,
 * — ⚠⚠ ŻE ŻADNA Z TYCH RZECZY NIE JEST SOLIDNA
 *   I WSZYSTKIE DZIAŁAJĄ WYŁĄCZNIE DLATEGO, ŻE SĄ
 *   PIERWSZE,
 * — ⚠⚠ ŻE PYTANIE, KTÓRE WARTO SOBIE ZADAĆ, BRZMI NIE
 *   „CZYM TO WZMOCNIĆ", TYLKO „CO POSTAWIĆ O KROK
 *   WCZEŚNIEJ",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: warstwa postawiona
 *   wcześniej sama wymaga ruchu — trzeba ją wyjąć,
 *   ustawić i potem umyć. Jeśli ten ruch jest większy
 *   niż szkoda, przed którą chroni, nie warto.
 *   Przedmurze też kosztowało, tylko mniej niż mur,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie przenosi część
 *   pracy z blatu do jednego naczynia, więc mniej rzeczy
 *   w ogóle dociera do miejsc, które trzeba chronić.
 *   MÓWIĘ WPROST, że to skutek uboczny, a nie powód
 *   zakupu — i że nie zastępuje ściereczki pod deską.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MURÓW JAKO GRANICY, OBWODU I PUNKTÓW
 *   WEJŚCIA — kąty zajęte (Recz, Moryń, Resko).
 *   ⚠⚠⚠ PISZĘ WYŁĄCZNIE O DWÓCH GRUBOŚCIACH I ICH
 *   KOLEJNOŚCI. Nie o tym, co mur ogradza, co przez
 *   niego wchodzi ani jak długi jest obwód.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO TWARDSZEGO MATERIAŁU I ZUŻYCIA NARZĘDZI —
 *   kąt zajęty (Strzelin). ⚠⚠ TO NAJBLIŻSZY OBSZAR:
 *   tamten tekst mówi, że twardsze zużywa narzędzie;
 *   ten mówi, że cienkie postawione wcześniej ratuje
 *   więcej niż grube. ROZGRANICZAM.
 * — ⚠⚠⚠ ZERO MIEJSCA CELOWO PUSTEGO — kąt zajęty
 *   (Wołów).
 * — ⚠⚠ ZERO ZAPASU I DRUGIEJ DROGI — kąt pisany w tej
 *   samej fali (Chocianów). Tamten mówi o zastępstwie,
 *   ten o kolejności warstw. ROZGRANICZAM.
 * — ⚠⚠ ZERO POD RĘKĄ KONTRA SCHOWANE — kąt zajęty
 *   (Płoty).
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno).
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI — kąt zajęty (Pieszyce).
 * — ⚠⚠ ZERO STAREGO I NOWEGO OBOK SIEBIE — kąt zajęty
 *   (Brzeg Dolny). Dlatego wieżę z 1613 r. przy ratuszu
 *   z 1879 podaję JAKO FAKT.
 * — ⚠⚠ ZERO SUMY I CIĄGŁOŚCI — kąt pisany w tej samej
 *   fali (Siechnice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY ZALECANYCH AKCESORIÓW — podaję cztery
 *   przykłady i zasadę, nie katalog.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o ściereczce, desce i obierkach NIE MÓWIĘ
 *   NIC o higienie, bakteriach ani o tym, czego na czym
 *   wolno kroić.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZBROJENIÓWKI — fabryki prochu nie wymieniam.
 * — ⚠⚠⚠ ZERO WYRAŻENIA „POD KĄTEM" I SŁOWA „KĄT"
 *   W ZNACZENIU GEOMETRYCZNYM.
 * — ⚠⚠ ZERO WĄTKU OBRONNEGO, OBLĘŻEŃ I HUSYTÓW.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów nie opisuję.
 * — ⚠⚠ ZERO POŻARU JAKO ŻYWIOŁU — rok 1624 i liczbę
 *   165 domów podaję jako punkt na osi czasu.
 * — ⚠ ZERO DEMOGRAFII HISTORYCZNEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ jednej daty lokacji — 1297 to rok nadania
 *   prawa lokacji, 1298 rok pierwszej wzmianki. To dwa
 *   różne fakty.
 * — NIE PODAJĘ długości murów, liczby baszt ani
 *   powierzchni obwarowanej — nie ustalono.
 * — NIE PODAJĘ wysokości wieży kościelnej.
 * — NIE PODAJĘ ludności historycznej.
 * — NIE TWORZĘ przymiotnika od nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, że Kąty Wrocławskie są częścią Wrocławia.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pierogi ruskie z Chrząstawy"
 *   pochodzą z innej gminy tego samego powiatu;
 *   kapusta i ogórki „ślężańskie" to oznaczenie masywu.
 *   NIE PRZYPISUJĘ ICH TEMU MIASTU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kąty Wrocławskie leżą w powiecie wrocławskim,
 *   20 km na zachód od Wrocławia; miasto liczy 7 157
 *   mieszkańców (GUS, 31.12.2024) na 8,6 km², a cała
 *   gmina miejsko-wiejska 30 478 osób na 176,7 km²,
 *   z czterdziestoma pięcioma wsiami i osadami,
 * — prawo założenia miasta nadał książę Bolko I Surowy
 *   w 1297 r., a dokument z 1298 jest pierwszym, w którym
 *   miejscowość występuje pod nazwą Kanth; w 1302
 *   odnotowano dziedzicznego wójta Gerharda, w 1310
 *   uruchomiono komorę celną, a w 1340 ruszył doroczny
 *   jarmark,
 * — mur miejski miał od 0,75 do 0,80 m grubości,
 *   a stojące przed nim przedmurze 0,40 m; całą
 *   konstrukcję szacuje się na około 3,5 m wysokości,
 *   szczerby strzelnicze miały 0,60 m i rozstawiono
 *   je co najwyżej co 2,25 m; bramy główne były dwie —
 *   Dolna i Górna — a wieże bramne miały trzy
 *   kondygnacje; najstarszy odcinek pochodzi z początku
 *   XV w.,
 * — wieżę ratuszową wzniesiono w 1613 r.: ma 36 m,
 *   u podstawy jest na planie prostokątnym, a wyżej
 *   przechodzi w ośmiobok; zegar pochodzi z tego samego
 *   roku, a sam ratusz z 1879 — czyli o 266 lat później,
 * — w pożarze z 1624 r. spłonęło 165 domów; ostatni
 *   remont murów przeprowadzono w 1818 i objął wyłącznie
 *   fragmenty przy bramach, mury i wieże rozebrano około
 *   1820, kolej uruchomiono w 1843, a fosy zasypano
 *   w latach 1855–1856; z zamku zachował się zarys
 *   o wymiarach 60 × 38 m,
 * — w gminie stoją pałace: w Krobielowicach z lat
 *   1570–1580, odbudowany w latach 1992–1996, 3 km
 *   od miasta; w Samotworze z lat 1776–1781;
 *   w Zabrodziu z lat 1872–1873, z parkiem o powierzchni
 *   4 ha. Drewniana wiata peronowa na dworcu ma 50 m
 *   długości, a zielony szlak z rynku do Sośnicy 800 m.
 */
export const KATY_WROCLAWSKIE: CityContent = {
  slug: "katy-wroclawskie",
  h1: "Thermomix Kąty Wrocławskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kąty Wrocławskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Kątach Wrocławskich: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kąty Wrocławskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kątach Wrocławskich. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kątów Wrocławskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu pięciu wsi i osad w gminie.",

  highlights: highlightyStandardowe("Kąty Wrocławskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czterdzieści centymetrów przed osiemdziesięcioma robi więcej niż sto dwadzieścia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kątach Wrocławskich – jak wygląda prezentacja?",
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
      id: "cienkie-ale-pierwsze",
      heading: "Cienkie, ale pierwsze",
      paragraphs: [
        "Mur miejski w Kątach Wrocławskich miał od siedemdziesięciu pięciu do osiemdziesięciu centymetrów grubości.",
        "Stojące przed nim przedmurze — druga, zewnętrzna warstwa — miało czterdzieści centymetrów. Mniej więcej o połowę mniej.",
        "Nie było mocniejsze i nie miało być. Miało być pierwsze na drodze.",
        "Zaznaczę od razu, żeby nie było nieporozumienia: nie piszę tu o tym, co mur ogradzał ani którędy się przez niego wchodziło. Piszę wyłącznie o dwóch grubościach i o ich kolejności.",
        "Bo w kuchni chronimy rzeczy siłą, a prawie nigdy kolejnością.",
        "Grubsza deska. Cięższy garnek. Droższa patelnia. Blat odporny na wszystko. Każdy z tych zakupów jest wzmocnieniem tej pierwszej, grubej warstwy — i każdy kosztuje odpowiednio do tego.",
        "A najwięcej ratują rzeczy tanie, cienkie i lekkie, których jedyną zaletą jest to, że stoją wcześniej.",
        "Ściereczka pod deską, żeby deska nie jechała. Talerzyk odłożony na łyżkę, żeby nie leżała na blacie. Taca pod butelką oleju. Miska na obierki postawiona, zanim zaczniesz obierać, a nie w połowie, kiedy wszystko już leży.",
        "Żadna z tych rzeczy nie jest solidna. Wszystkie działają wyłącznie dlatego, że są pierwsze.",
        "Pytanie, które warto sobie zadać przy blacie, brzmi więc nie „czym to wzmocnić”, tylko „co postawić o krok wcześniej”. Czterdzieści centymetrów przed osiemdziesięcioma robi więcej niż sto dwadzieścia.",
        "Dopowiem, bo to leży blisko innej rzeczy: nie chodzi o trwałość materiału ani o to, co czym się zużywa. Chodzi wyłącznie o kolejność warstw.",
        "Uczciwie o drugiej stronie: warstwa postawiona wcześniej sama wymaga ruchu. Trzeba ją wyjąć, ustawić, a potem umyć albo odłożyć. Jeśli ten ruch jest większy niż szkoda, przed którą chroni, to się nie opłaca i nie ma sensu udawać, że jest inaczej. Przedmurze też kosztowało — po prostu mniej niż mur.",
        "Na koniec o urządzeniu, i to jest skutek uboczny, a nie powód zakupu.",
        "Thermomix przenosi część pracy z blatu do jednego naczynia, więc mniej rzeczy w ogóle dociera do miejsc, które trzeba chronić. Mniej desek, mniej misek, mniej rozlanego. To realne, ale nie zastępuje ściereczki pod deską i nie chcę tego sprzedawać jako rozwiązanie problemu, który rozwiązuje kawałek materiału za dwa złote.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kątach Wrocławskich?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was w kuchni najczęściej się rozlewa albo przesuwa. Zwykle wystarczy postawić tam coś wcześniej — i zwykle jest to rzecz, którą już macie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kątach Wrocławskich"),
    sekcjaRaty("w Kątach Wrocławskich"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kątów Wrocławskich",
      paragraphs: [
        "Kąty Wrocławskie leżą w powiecie wrocławskim, dwadzieścia kilometrów na zachód od Wrocławia — to odrębne miasto i siedziba gminy liczącej ponad trzydzieści tysięcy mieszkańców, nie przedmieście, choć nazwa i odległość skłaniają do takiego skrótu. Samo miasto liczy 7 157 osób (GUS, 31.12.2024) na niecałych dziewięciu kilometrach kwadratowych, a cała gmina miejsko-wiejska 30 478 osób na stu siedemdziesięciu siedmiu, z czterdziestoma pięcioma wsiami i osadami. Prawo założenia miasta nadał książę Bolko I Surowy w 1297 roku, a dokument z 1298 jest pierwszym, w którym miejscowość występuje pod nazwą Kanth — to dwa różne fakty i nie zamierzam ich zlepiać w jedną datę. W 1302 odnotowano dziedzicznego wójta Gerharda, w 1310 uruchomiono komorę celną, a w 1340 ruszył doroczny jarmark. Mur miejski miał od siedemdziesięciu pięciu do osiemdziesięciu centymetrów grubości, a stojące przed nim przedmurze czterdzieści; całą konstrukcję szacuje się na około trzy i pół metra wysokości, szczerby strzelnicze mierzyły sześćdziesiąt centymetrów i rozstawiono je co najwyżej co dwa metry dwadzieścia pięć. Bramy główne były dwie, Dolna i Górna, a wieże bramne miały po trzy kondygnacje. Wieżę ratuszową wzniesiono w 1613 roku: ma trzydzieści sześć metrów, u podstawy jest na planie prostokątnym i wyżej przechodzi w ośmiobok, a zegar pochodzi z tego samego roku — sam ratusz jest od niej o dwieście sześćdziesiąt sześć lat młodszy, z 1879. W pożarze z 1624 roku spłonęło sto sześćdziesiąt pięć domów. Ostatni remont murów przeprowadzono w 1818 i objął wyłącznie fragmenty przy bramach, mury rozebrano około 1820, kolej uruchomiono w 1843, a fosy zasypano dopiero w latach 1855–1856. Z zamku zachował się zarys o wymiarach sześćdziesiąt na trzydzieści osiem metrów. W gminie stoją pałace: w Krobielowicach z lat 1570–1580, odbudowany w latach 1992–1996, trzy kilometry od miasta; w Samotworze z lat 1776–1781; w Zabrodziu z lat 1872–1873, z czterohektarowym parkiem. Drewniana wiata peronowa na dworcu ma pięćdziesiąt metrów długości, a zielony szlak z rynku do Sośnicy osiemset.",
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

  districtsHeading: "Do których części Kątów Wrocławskich dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu pięciu wsi i osad w gminie — a jest ich najwięcej z całej okolicy. Do Krobielowic, Samotworu, Zabrodzia, Smolca, Sośnic i Bogdaszowic też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kąty Wrocławskie też przyjadę",
  nearbyParagraphs: [
    "Do Wrocławia jest stąd dwadzieścia kilometrów. Dojeżdżam też do Kobierzyc, Sobótki, Środy Śląskiej, Siechnic, Mietkowa i Żórawiny — wszędzie bezpłatnie.",
  ],
  nearbyTowns: ["Wrocław", "Kobierzyce", "Sobótka", "Środa Śląska", "Siechnice"],

  about: blokOMnie("do Kątów Wrocławskich", "w Kątach Wrocławskich i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kątów Wrocławskich bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu pięciu wsi i osad w gminie, łącznie z Krobielowicami, Samotworem, Zabrodziem, Smolcem i Bogdaszowicami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ważne przy umawianiu: chodzi o Kąty Wrocławskie w powiecie wrocławskim — to odrębne miasto i siedziba gminy liczącej ponad trzydzieści tysięcy mieszkańców, a nie przedmieście Wrocławia; sam Wrocław zresztą do tego powiatu nie należy. Nie chodzi też o wieś Kąty w gminie Chocianów, o Kąty Bystrzyckie ani o Kąty Opolskie. Cesarzowice są zarówno tutaj, jak i w gminie Środa Śląska, więc przy tej wsi warto dodać gminę.",
    },
    ...faqWspolne("w Kątach Wrocławskich"),
    {
      question: "Co zrobić, żeby mniej rzeczy w kuchni się niszczyło i rozlewało?",
      answer:
        "Zamiast wzmacniać, postaw coś o krok wcześniej. Mur miejski w Kątach Wrocławskich miał od siedemdziesięciu pięciu do osiemdziesięciu centymetrów grubości, a przedmurze przed nim czterdzieści — druga warstwa nie była mocniejsza, miała być pierwsza na drodze. W kuchni najwięcej ratują rzeczy tanie i lekkie: ściereczka pod deską, talerzyk na łyżkę, taca pod butelką oleju, miska na obierki postawiona przed obieraniem, a nie w połowie. Żadna z nich nie jest solidna; wszystkie działają, bo są wcześniej. Uczciwie: taka warstwa sama wymaga ruchu, więc jeśli ten ruch jest większy niż szkoda, przed którą chroni, nie warto.",
    },
    {
      question: "Czy Thermomix ogranicza bałagan na blacie?",
      answer:
        "Częściowo tak: przenosi część pracy do jednego naczynia, więc mniej desek, misek i rozlanego w ogóle dociera do blatu. To realne, ale traktuję to jako skutek uboczny, a nie powód zakupu — problemu, który rozwiązuje ściereczka za dwa złote, nie rozwiązuje się urządzeniem. Najlepiej zobaczyć to na własnej kuchni: przyjeżdżam, gotujemy i po wszystkim widać, ile naczyń faktycznie wyszło na blat.",
    },
  ],

  geo: { lat: 51.0333, lng: 16.7667 },
};
