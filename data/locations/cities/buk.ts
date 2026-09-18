import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * BUK — powiat poznański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ BUK NIE MA.
 * MIASTO: 5 502 mieszkańców (GUS 31.12.2024), 3,0 km²,
 *   gęstość 1 858,8 os./km²
 *   ⚠⚠ [ZW — domyka się po cofnięciu zaokrąglenia
 *   do 2,96 km², potwierdzone niezależnie. UWAGA:
 *   TO NAJWIĘKSZA PUŁAPKA ZAOKRĄGLENIA W CYKLU —
 *   przy 3,0 km² rozbieżność gęstości to 25 os./km².
 *   NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ]. PODAJĘ.
 *   ⚠ NAJMNIEJSZE OBSZAROWO I NAJGĘŚCIEJ ZALUDNIONE
 *   MIASTO TEJ FALI.
 * CAŁA GMINA: 12 944 osoby, 90,6 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   I ODWROTNIE NIŻ ZWYKLE: 142,87 z dzielenia wobec
 *   141 w źródle. Podana liczba odpowiada ludności
 *   o ok. 169 osób mniejszej. To gmina podpoznańska,
 *   która rośnie, a wskaźnik pochodzi ze starszego
 *   rocznika.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE: 15 (wykaz GUS) — Cieśle, Dakowy Suche,
 *   Dobieżyn, Dobra, Kalwy, Niepruszewo, Otusz,
 *   Pawłówko, Szewce, Sznyfin, Wielka Wieś, Wiktorowo,
 *   Wygoda, Wysoczka, Żegowo.
 *   ⚠ Wykaz gminny podaje 11 sołectw i 19 innych
 *   miejscowości. ⚠⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM —
 *   figury zajęte (Mosina, Kostrzyn). PODAJĘ LICZBĘ GUS.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ RZEKI NIE USTALONO — NIE PODAJĘ. Jeziora
 *   Niepruszewskiego NIE WYMIENIAM [NP].
 * ⚠ GEO: 52,3554 / 16,5196.
 *
 * ⚠⚠⚠ ODMIANA — NAZWA JEDNOSYLABOWA, HOMONIMICZNA
 *   Z RZECZOWNIKIEM POSPOLITYM:
 *   D. do BUKU · Ms. w BUKU · N. Bukiem.
 *   ⚠⚠⚠ BŁĄD: „w Buk" (nieodmienianie).
 *   Przymiotnik: BUKOWSKI (historyczny powiat bukowski).
 *   ⚠⚠⚠ PRZYMIOTNIK „BUKOWY" ZNACZY „Z DREWNA BUKA"
 *   I NIE JEST PRZYMIOTNIKIEM OD NAZWY MIASTA.
 *   ⚠ Nie mylić z BUKOWIŃSKIM ani BUKOWIECKIM.
 *   ⚠⚠⚠ „Jadę do Buku" i „podszedłem do buku" różnią się
 *   WYŁĄCZNIE WIELKĄ LITERĄ. PRZY PIERWSZYM UŻYCIU
 *   DOPRECYZOWUJĘ: „Buk pod Poznaniem" albo „Buk
 *   w powiecie poznańskim". OBOWIĄZKOWO.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW — NAJPOSPOLITSZA NAZWA W CYKLU:
 *   wsie BUK w kilku województwach [NP] · rodzina nazw
 *   Bukowiec, Bukowo, Bukowina, Bukównica, Buczek.
 *   ⚠ POWIAT BUKOWSKI (1815) TO JEDNOSTKA HISTORYCZNA,
 *   DZIŚ NIEISTNIEJĄCA — Buk leży w powiecie poznańskim.
 *   NIE PRZENOSZĘ NAZWY HISTORYCZNEJ DO ZDAŃ
 *   O DZISIEJSZEJ ADMINISTRACJI.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — WZMIANKA LEGENDARNA: 963 r. ⚠ PODAJĘ JAKO
 *     LEGENDĘ, NIE JAKO DATĘ.
 *   — PIERWSZA WZMIANKA UDOKUMENTOWANA: 1257 r.
 *   — PRAWA MIEJSKIE: 1289 r., PRAWO MAGDEBURSKIE,
 *     nadał książę PRZEMYSŁ II.
 *     ⚠ TRZY NIEZALEŻNE ŹRÓDŁA ZGODNE — NAJLEPIEJ
 *     UDOKUMENTOWANA DATA LOKACYJNA W TEJ FALI.
 *     ⚠ Wariant „przed 1296" jest z tym zgodny, ale
 *     mniej precyzyjny. NIE UŻYWAM.
 *   — XIV–XVIII w.: własność biskupów poznańskich.
 *     ⚠⚠ WĄTEK WŁASNOŚCIOWY, NIE KULTOWY — podaję
 *     jednym zdaniem albo pomijam.
 *   — Utraty praw nie ustalono.
 *   ⚠⚠⚠ DANYCH POWIATU BUKOWSKIEGO Z 1815 R.
 *     („58 000 osób na 130 km²") NIE UŻYWAM —
 *     ARYTMETYCZNIE NIEMOŻLIWE.
 *   ⚠⚠ DAT 1793, 1807–1815 I 1918 NIE UŻYWAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDEN OBIEKT, CZTERECH WYKONAWCÓW:
 *   RATUSZ W BUKU, zbudowany w latach 1897–1898,
 *   trójkondygnacyjny, na planie wydłużonego prostokąta
 *   ze ściętym narożnikiem, z płaskim dachem i zegarem
 *   na jednym ze szczytów; dziś mieści Urząd Miasta
 *   i Gminy.
 *   POWSTAŁ Z PRACY CZTERECH ODRĘBNYCH WYKONAWCÓW:
 *     — PROJEKTANTA (firma budowlana),
 *     — MURARZA — jedynego MIEJSCOWEGO majstra,
 *     — CIEŚLI,
 *     — ZEGARMISTRZA, którego firma działała w Berlinie.
 *   ⚠⚠⚠ NAZWISK I NAZW FIRM NIE PODAJĘ — trzy z czterech
 *   są niemieckie, a nazwy firm są wykluczone.
 *   PISZĘ WYŁĄCZNIE ROLE. To nie osłabia kąta:
 *   CZTERECH WYKONAWCÓW, TRZECH Z ZEWNĄTRZ, JEDEN
 *   MIEJSCOWY — i budynek nazywa się ratuszem w Buku.
 *   ⚠⚠⚠ CZTERDZIESTOLETNIEJ LUKI BEZ RATUSZA
 *   (1858 → 1897) NIE UŻYWAM — figura „rozebrane, zanim
 *   powstało nowe" zajęta (Opalenica, poprzednia fala),
 *   a przyczyna zniszczenia jest wątkiem wykluczonym.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — PLAC PRZEMYSŁAWA zachowuje zarys centralnego placu
 *   wytyczonego przy lokacji w 1289 r., na planie
 *   kwadratu; PIERWOTNY POZIOM RYNKU LEŻY OKOŁO 1,5 M
 *   PONIŻEJ DZISIEJSZEGO. Plac nosi imię księcia, który
 *   go wytyczył.
 *   ⚠⚠ TEMPA NAROSTU NIE LICZĘ — figura „podziel przez
 *   tempo" zajęta (Stronie Śląskie).
 * — remont placu: 20,5 mln zł, w tym 16,3 mln
 *   z funduszy europejskich.
 *   ⚠⚠ KWOTY NA MIESZKAŃCA NIE LICZĘ.
 * — ludność miasta: 1733 r. — 140 osób; 1793 r. —
 *   847; 2024 r. — 5 502.
 *   ⚠⚠ KROTNOŚCI NIE LICZĘ I PRZYCZYN ZAPAŚCI
 *   Z 1733 R. NIE PODAJĘ (wojny i epidemie — wątki
 *   wykluczone).
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO.
 *
 * KĄT: JEDEN OBIEKT, CZTERECH WYKONAWCÓW
 * — o tym, że „domowe" nazywa złożenie, nie pochodzenie
 * każdej części. Kąt z ratusza w Buku: cztery odrębne
 * wykonawstwa, z których tylko jedno było miejscowe.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ratusz z lat 1897–1898 powstał z pracy czterech
 *   odrębnych wykonawców: projektanta, murarza, cieśli
 *   i zegarmistrza,
 * — ŻE TYLKO MURARZ BYŁ MIEJSCOWY, A ZEGAR PRZYJECHAŁ
 *   Z DALEKA — I BUDYNEK MIMO TO JEST RATUSZEM W BUKU.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NAZWISK I FIRM NIE PODAJĘ,
 * — ⚠⚠ ŻE „DOMOWY OBIAD" DZIAŁA IDENTYCZNIE: chleb
 *   z piekarni, warzywa ze sklepu, wywar z kostki,
 *   a złożenie i decyzja Twoje,
 * — ⚠⚠ ŻE SŁOWO „DOMOWE" NAZYWA ZŁOŻENIE, NIE
 *   POCHODZENIE KAŻDEJ CZĘŚCI — i że to nie jest
 *   oszustwo,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przestań liczyć, co zrobiłaś
 *   od zera. Licz, co zdecydowałaś i złożyłaś,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: granica istnieje.
 *   Jeśli wszystko tylko się rozpakowuje i podgrzewa,
 *   to nie jest gotowanie. ROZRÓŻNIK: czy podjęłaś
 *   decyzje, które zmieniły wynik,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest jednym
 *   z czterech wykonawców, nie kucharzem. MÓWIĘ WPROST,
 *   że robi mieszanie i pilnowanie, a decyzje zostają
 *   po Waszej stronie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt
 *   zajęty (Nowy Tomyśl). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam pytanie
 *   brzmiało, CO niesie ciężar; tu chodzi o to, KTO
 *   wykonał kolejne części — i o prawo do nazwania
 *   całości swoją. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NOWE NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków).
 * — ⚠⚠⚠ ZERO ROZEBRANE, ZANIM POWSTAŁO NOWE — kąt
 *   zajęty (Opalenica). DLATEGO NIE UŻYWAM LUKI
 *   1858–1897.
 * — ⚠⚠ ZERO SKRÓT ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn).
 * — ⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód). ⚠⚠ „DOMOWE" TRAKTUJĘ JAKO SŁOWO
 *   O ZŁOŻENIU, NIE JAKO ETYKIETĘ, KTÓRA ZAWYŻA.
 * — ⚠⚠ ZERO JEDNA RZECZ, DWIE FUNKCJE NARAZ — kąt
 *   zajęty (Zbąszyń, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK I NAZWISK WYKONAWCÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O TYM, ŻE COŚ KUPIONEGO JEST GORSZE
 *   ALBO LEPSZE DLA ZDROWIA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA, ŻE KTOŚ „NIE GOTUJE
 *   PRAWDZIWIE". Sekcja ma zdejmować poczucie winy,
 *   nie dokładać.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO ALKOHOLU I PIWOWARSTWA · ZERO
 *   POŻARÓW JAKO ŻYWIOŁU · ZERO EPIDEMII · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ nazwisk ani firm wykonawców ratusza.
 * — NIE PODAJĘ danych powiatu bukowskiego z 1815 r.
 * — NIE PODAJĘ przyczyn zapaści ludnościowej z 1733 r.
 * — NIE PODAJĘ rzeki ani wysokości n.p.m.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Buk leży w powiecie poznańskim; miasto liczy 5 502
 *   mieszkańców (GUS, 31.12.2024) na 3,0 km², czyli
 *   1 858,8 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 12 944 osoby na 90,6 km² i obejmuje
 *   15 wsi,
 * — pierwsza udokumentowana wzmianka pochodzi z 1257 r.,
 *   a prawa miejskie na prawie magdeburskim nadał
 *   w 1289 r. książę Przemysł II; od XIV do XVIII w.
 *   miasto było własnością biskupów poznańskich,
 * — Plac Przemysława zachowuje zarys centralnego placu
 *   wytyczonego przy lokacji w 1289 r., na planie
 *   kwadratu, a pierwotny poziom rynku leży około
 *   1,5 m poniżej dzisiejszego; remont placu kosztował
 *   20,5 mln zł, w tym 16,3 mln z funduszy europejskich,
 * — ratusz zbudowano w latach 1897–1898; jest
 *   trójkondygnacyjny, na planie wydłużonego prostokąta
 *   ze ściętym narożnikiem, ma płaski dach i zegar
 *   na jednym ze szczytów, a dziś mieści Urząd Miasta
 *   i Gminy. Powstał z pracy czterech odrębnych
 *   wykonawców: projektanta, murarza, cieśli
 *   i zegarmistrza — z których tylko murarz był
 *   miejscowy, a zegar wykonała firma działająca
 *   w Berlinie,
 * — w 1733 r. mieszkało w Buku 140 osób, w 1793 r. —
 *   847.
 */
export const BUK: CityContent = {
  slug: "buk",
  h1: "Thermomix Buk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Buk pod Poznaniem — cena i prezentacja",
  seoDescription:
    "Thermomix w Buku w powiecie poznańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Buk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Buku pod Poznaniem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Buku pod Poznaniem z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich piętnastu wsi w gminie.",

  highlights: highlightyStandardowe("Buk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czterech wykonawców. Jeden miejscowy. Ratusz w Buku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Buku – jak wygląda prezentacja?",
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
      id: "czterech-wykonawcow",
      heading: "Jeden obiekt, czterech wykonawców",
      paragraphs: [
        "Ratusz w Buku zbudowano w latach 1897–1898. Jest trójkondygnacyjny, stoi na planie wydłużonego prostokąta ze ściętym narożnikiem, ma płaski dach i zegar na jednym ze szczytów. Dziś mieści Urząd Miasta i Gminy.",
        "Powstał z pracy czterech odrębnych wykonawców. Projekt przygotowała firma budowlana. Mury stawiał miejscowy majster. Ciesielkę wykonał ktoś inny. Zegar zrobiła firma działająca w Berlinie.",
        "Czterech wykonawców, z których miejscowy był jeden. Zegar przyjechał z bardzo daleka do budynku, którego ściany stawiał człowiek z Buku. I mimo tego wszystkiego budynek nazywa się ratuszem w Buku — nie ratuszem czterech firm.",
        "Piszę o tym, bo w kuchni to samo słowo powoduje najwięcej niepotrzebnego wstydu.",
        "„Domowy obiad”. Chleb jest z piekarni. Warzywa ze sklepu. Wywar z kostki albo z gotowego bulionu. Mięso od rzeźnika, przyprawy z torebki, śmietana z kubka. A złożenie, kolejność, doprawienie i decyzja, że dziś jest właśnie to — Twoje.",
        "Słowo „domowe” nazywa złożenie, nie pochodzenie każdej części. Dokładnie jak „ratusz w Buku” nazywa budynek, a nie to, kto odlał w nim zegar. To nie jest oszustwo ani ściąganie — to normalny sposób, w jaki nazywa się rzeczy złożone z wielu wkładów.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, co naprawdę niesie ciężar konstrukcji, i o tym, że nośne bywa niewidoczne. Tam pytanie brzmiało, CO niesie. Tu brzmi inaczej: kto wykonał którą część — i kto ma prawo nazwać całość swoją.",
        "Ruch jest jeden i jest ulgą. Przestań liczyć, co zrobiłaś od zera. Policz, co zdecydowałaś i złożyłaś. Ta druga liczba jest zwykle znacznie większa, a to ona opisuje, co się naprawdę wydarzyło.",
        "Uczciwie o drugiej stronie, bo granica istnieje. Jeśli wszystko tylko się rozpakowuje i podgrzewa, to nie jest gotowanie i nie będę udawać, że jest. Rozróżnik jest jeden: czy podjęłaś decyzje, które zmieniły wynik. Dosypanie czegoś, skrócenie czasu, zamiana jednego składnika na drugi, połączenie dwóch rzeczy, których producent nie przewidział. Jedna taka decyzja wystarczy — ale musi być.",
        "I uczciwie o sprzęcie. Thermomix jest jednym z tych czterech wykonawców, nie kucharzem. Robi mieszanie i pilnowanie, czasem mielenie i ważenie. Decyzje zostają po Waszej stronie i to się nie zmieni. Kto kupuje urządzenie w nadziei, że przejmie także decydowanie, kupuje z niewłaściwym oczekiwaniem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Buku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was znaczy „domowy obiad”. Pytam serio — u każdego znaczy co innego i pod to dobieram dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Buku"),
    sekcjaRaty("w Buku"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Buku",
      paragraphs: [
        "Buk leży w powiecie poznańskim i jest jednym z najmniejszych obszarowo, a zarazem najgęściej zaludnionych miast, o jakich pisałam: 5 502 mieszkańców (GUS, 31.12.2024) na trzech kilometrach kwadratowych, czyli tysiąc osiemset pięćdziesiąt dziewięć osób na kilometr. Cała gmina miejsko-wiejska to 12 944 osoby na 90,6 kilometra i piętnaście wsi; gęstości dla gminy nie podaję, bo liczba ze źródła pochodzi ze starszego stanu ludności i nie domyka się z dzisiejszymi danymi. Pierwsza udokumentowana wzmianka pochodzi z 1257 roku, a prawa miejskie na prawie magdeburskim nadał w 1289 książę Przemysł II — to najlepiej udokumentowana data lokacyjna w tej okolicy, zgodna w trzech niezależnych źródłach. Od czternastego do osiemnastego wieku miasto było własnością biskupów poznańskich. Plac Przemysława zachowuje zarys centralnego placu wytyczonego przy lokacji, na planie kwadratu — a pierwotny poziom rynku leży około półtora metra poniżej dzisiejszego; remont placu kosztował 20,5 miliona złotych, z czego 16,3 miliona pochodziło z funduszy europejskich. Dla skali historycznej: w 1733 roku mieszkało tu sto czterdzieści osób, w 1793 — osiemset czterdzieści siedem.",
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

  districtsHeading: "Do których części Buku dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich piętnastu wsi w gminie: Niepruszewa, Dobieżyna, Wielkiej Wsi, Otusza, Szewc, Cieśli, Kalw, Dakowów Suchych, Wysoczki, Żegowa, Wygody i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto powiedzieć „Buk pod Poznaniem” albo „Buk w powiecie poznańskim”. Nazwa jest jednosylabowa i identyczna z nazwą drzewa, a wsi o nazwie Buk jest w Polsce kilka.",
  ],
  districts: [],

  nearbyHeading: "Poza Buk też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Opalenicy, Stęszewa, Dopiewa, Grodziska Wielkopolskiego i Poznania — wszędzie bezpłatnie, tak samo jak w samym Buku.",
  ],
  nearbyTowns: ["Opalenica", "Stęszew", "Dopiewo", "Grodzisk Wielkopolski", "Poznań"],

  about: blokOMnie("do Buku", "w Buku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Buku bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich piętnastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: mówi się „do Buku” i „w Buku”, a przymiotnik od nazwy miasta brzmi „bukowski” — „bukowy” znaczy „z drewna buka”. I praktyczna: warto dopowiedzieć „Buk pod Poznaniem”, bo wsi o tej nazwie jest w Polsce kilka, a sama nazwa jest identyczna z nazwą drzewa.",
    },
    ...faqWspolne("w Buku"),
    {
      question: "Czy obiad z kupnym chlebem i bulionem z kostki to jeszcze „domowy obiad”?",
      answer:
        "Tak — i ratusz w Buku jest tu dobrym argumentem. Zbudowano go w latach 1897–1898 z pracy czterech odrębnych wykonawców: projektanta, murarza, cieśli i zegarmistrza, z których miejscowy był tylko murarz, a zegar przyjechał z Berlina. Budynek i tak nazywa się ratuszem w Buku. Słowo „domowe” nazywa złożenie, nie pochodzenie każdej części. Granica jest jedna: czy podjęłaś decyzje, które zmieniły wynik. Jedna wystarczy.",
    },
    {
      question: "Czy Thermomix gotuje za mnie?",
      answer:
        "Nie. Jest jednym z wykonawców, nie kucharzem: robi mieszanie, pilnowanie, czasem mielenie i ważenie. Decyzje — co, dla kogo, ile i czy już wystarczy — zostają po Waszej stronie i to się nie zmieni. Kto kupuje z nadzieją, że urządzenie przejmie także decydowanie, kupuje z niewłaściwym oczekiwaniem, i wolę to powiedzieć przed zakupem. Za to część pracy, przy której trzeba stać i patrzeć, znika prawie w całości.",
    },
  ],

  geo: { lat: 52.3554, lng: 16.5196 },
};
