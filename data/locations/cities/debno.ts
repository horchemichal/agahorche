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
 * DĘBNO — gmina wiejska, powiat brzeski. SIEDZIBA W WOLI DĘBIŃSKIEJ,
 * nie w Dębnie. 14 498 mieszkańców (31.12.2024) na 81,6 km²,
 * gęstość 178 os./km². Trzynaście sołectw.
 *
 * OŚ STRONY: GMINA, KTÓRA CODZIENNIE WYJEŻDŻA. 1 243 osoby dojeżdżają
 * do pracy poza gminę, 357 przyjeżdża — saldo minus osiemset
 * osiemdziesiąt sześć. Do tego dziewięćdziesięciu pracujących
 * na tysiąc mieszkańców. To jest gmina sypialnia z własną stacją
 * kolejową (Biadoliny) i z DK94 przez środek.
 *
 * DRUGA OŚ, ŚWIADOMIE UCZCIWA: NAJSŁYNNIEJSZY ZABYTEK GMINY JEST
 * ZAMKNIĘTY. Zamek w Dębnie nieczynny dla zwiedzających od
 * 1 grudnia 2025 r., planowane otwarcie w II połowie 2028 r.
 * Wszystkie przewodniki wciąż zapraszają do środka. Strona mówi
 * wprost, jak jest.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 14 498
 *   mieszkańców, 81,6 km², 178 os./km², mediana wieku 40,2 lat.
 *   W 2024: 100 urodzeń, 130 zgonów (−30), saldo migracji +20.
 *   Ludność wzrosła o 5,8% w latach 2002–2024,
 * — SIEDZIBA: Wola Dębińska 240, 32-852 Dębno. Wójt Wiesław
 *   Kozłowski (od 2014, reelekcja 07.04.2024),
 * — SOŁECTWA (13, dane gminy na 05.08.2026): Wola Dębińska 2 067,
 *   Sufczyn 1 990, Dębno 1 931, Maszkienice 1 408, Łysa Góra 1 316,
 *   Porąbka Uszewska 1 179, Łoniowa 959, Biadoliny Szlacheckie 907,
 *   Doły 620, Jaworsko 616, Niedźwiedza 582, Jastew 511, Perła 453,
 * — GOSPODARKA (2024): 1 416 podmiotów REGON, 1 187 osób fizycznych;
 *   budownictwo 38,1% wszystkich podmiotów, handel 14,7%.
 *   Bezrobocie rejestrowane 5,7%. Wynagrodzenie 6 953,88 zł brutto.
 *   Pracujących ok. 90 na 1000 mieszkańców (2021),
 * — DOJAZDY DO PRACY: 1 243 wyjeżdża, 357 przyjeżdża, saldo −886.
 *   ⚠️ KIERUNKÓW GUS NIE PODAJE — nie wymieniam miast,
 * — ZAMEK W DĘBNIE: wzniesiony 1470–1480 przez Jakuba z Dębna,
 *   kanclerza wielkiego koronnego; przebudowa renesansowa 1586;
 *   od 1976 r. oddział muzeum w Tarnowie (dziś Muzeum Ziemi
 *   Tarnowskiej). ZAMKNIĘTY DLA ZWIEDZAJĄCYCH OD 1 GRUDNIA 2025,
 *   planowane otwarcie II połowa 2028. Projekt rewaloryzacji:
 *   37 214 431,35 zł, dofinansowanie UE 27 381 861,65 zł
 *   (dzieje.pl 30.11.2025, informatorbrzeski.pl 02.12.2025),
 * — KOŚCIÓŁ ŚW. MAŁGORZATY w Dębnie: budowa od ok. 1470,
 *   konsekracja 1504, ten sam fundator; kamień polny, jednonawowy,
 * — SANKTUARIUM W PORĄBCE USZEWSKIEJ: grota — replika lourdzkiej —
 *   z 1904 r.; kościół św. Andrzeja Apostoła budowany 1910–1918
 *   wg projektu Jana Sasa-Zubrzyckiego; wewnątrz dzwon z 1546 r.,
 * — ŁYSA GÓRA: wieś udokumentowana od 1321 r., po wojnie ośrodek
 *   ceramiki artystycznej (zakład „Kamionka”, szkoła ceramiczna).
 *   Pomnik załogi Liberatora zestrzelonego w nocy 16/17 sierpnia
 *   1944 r. w drodze powrotnej ze zrzutu dla Powstania Warszawskiego,
 * — FOLKLOR: 36. Przegląd „Krakowiaczek” i 15. Święto Łopołki,
 *   7 czerwca 2026, amfiteatr w Łoniowej; region etnograficzny
 *   Krakowiaków Wschodnich. Dożynki gminne 15 sierpnia 2026 w Perle,
 * — TURNIEJ RYCERSKI: „O Złoty Warkocz Tarłówny” od 1995 r.,
 *   od 2018 w lipcu, od 2022 pod nazwą „Międzynarodowe Spotkania
 *   z Dziedzictwem i Historią Wojskowości”,
 * — METRYKI: Dębno — pierwszy dokument 1274; Sufczyn — lokacja 1317
 *   (zgoda Władysława Łokietka); Doły i Łoniowa — 1321; Jaworsko —
 *   akt lokacyjny 1328; Maszkienice — dokument Kazimierza Wielkiego
 *   1336; Perła — początki XV w.,
 * — TRANSPORT: DK94 przez środek gminy na osi wschód–zachód
 *   (dawna DK4). STACJA BIADOLINY w Biadolinach Szlacheckich,
 *   linia nr 91 Kraków–Medyka; dwa perony, przejście podziemne,
 *   BUDYNKU DWORCA I KASY NIE MA. Tarnów ok. 16–17 min, Kraków
 *   Główny ok. 60–70 min. Gmina podaje ok. 50 km do Krakowa
 *   i ok. 20 km do Tarnowa. ⚠️ DWIE Z TRZECH LINII KOMUNIKACJI
 *   GMINNEJ NIE KURSUJĄ OD 1.01.2024 — obie dowozowe do stacji,
 * — DROBIARSTWO: 15.12.2025 cała gmina (12 miejscowości) znalazła się
 *   w obszarze zagrożonym rzekomym pomorem drobiu — potwierdza,
 *   że hodowla drobiu jest tu realną gałęzią,
 * — KGW (7): Biadoliny Szlacheckie, Dębno, Doły, Łoniowa, Łysa Góra,
 *   Porąbka Uszewska, Sufczyn,
 * — SĄSIEDZI (6): Borzęcin, Brzesko, Czchów, Gnojnik, Wojnicz,
 *   Zakliczyn.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ZAPROSZENIA DO ZWIEDZANIA ZAMKU ANI GODZIN OTWARCIA.
 *   Obiekt jest nieczynny do 2028 r. Strona mówi o tym wprost,
 * — KIERUNKÓW DOJAZDÓW DO PRACY. GUS podaje tylko liczbę
 *   wyjeżdżających, nie dokąd. Brzesko, Tarnów i Kraków są
 *   prawdopodobne, ale to nie jest dana,
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   Nie potwierdzono żadnego z tej gminy,
 * — NAZW LOKALNYCH PRODUCENTÓW ŻYWNOŚCI. Nie potwierdzono ani
 *   piekarni, ani masarni, ani mleczarni,
 * — SADOWNICTWA JAKO SPECJALIZACJI GMINY. Żadne źródło tego nie
 *   potwierdza. Nie dopisuję,
 * — SKALI HODOWLI DROBIU W LICZBACH. Nie potwierdzona,
 * — STAŁEGO TERMINU TURNIEJU RYCERSKIEGO. Zmieniał się trzy razy
 *   i zmieniła się nazwa,
 * — AKTUALNEGO STATUSU SPÓŁDZIELNI „KAMIONKA” w Łysej Górze.
 *   Ostatnia informacja to kryzys w 2008 r.,
 * — ODLEGŁOŚCI DROGOWYCH DO BRZESKA I BOCHNI. Nie potwierdzone
 *   źródłowo; podaję tylko te, które podaje sama gmina.
 *
 * PUŁAPKI:
 * — SIEDZIBĄ GMINY JEST WOLA DĘBIŃSKA, nie wieś Dębno. Adres
 *   pocztowy urzędu brzmi jednak „32-852 Dębno”, co myli,
 * — DĘBNA W POLSCE SĄ TRZY. Miasto Dębno w zachodniopomorskim
 *   i Dębno pod Leżajskiem w podkarpackim to nie ta gmina,
 * — „CHLEB DĘBNOWSKI” Z LISTY PRODUKTÓW TRADYCYJNYCH JEST
 *   Z DĘBNA ZACHODNIOPOMORSKIEGO. Nie przypisywać tej gminie,
 * — „ŁOPOŁKA” TO NIE POTRAWA, tylko koszyk pleciony z kory.
 *   Święto Łopołki to festiwal rękodzieła, nie impreza kulinarna.
 *   Nie wciągać do sekcji o jedzeniu,
 * — FASOLA „PIĘKNY JAŚ Z DOLINY DUNAJCA” NIE OBEJMUJE TEJ GMINY.
 *   Z powiatu brzeskiego w obszarze ChNP jest tylko Czchów,
 * — BIADOLINY SZLACHECKIE ≠ BIADOLINY RADŁOWSKIE (gmina Radłów).
 *   Stacja nazywa się po prostu „Biadoliny”,
 * — PORĄBKA USZEWSKA JEST W GMINIE DĘBNO, a Uszew i Zawada Uszewska
 *   w gminie Gnojnik. Nazwy mylące,
 * — „ŁYSA GÓRA” nie ma nic wspólnego ze świętokrzyską.
 */

export const DEBNO: CityContent = {
  slug: "debno",
  h1: "Thermomix Dębno – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Dębno — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Dębno: bezpłatna prezentacja TM7 u Ciebie w kuchni — Wola Dębińska, Sufczyn, Łysa Góra, Porąbka Uszewska. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dębno — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Dębno. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Dębno przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich trzynastu sołectw, tak samo do Woli Dębińskiej, jak do Perły czy Jastwi.",

  highlights: highlightyStandardowe("wszystkie trzynaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Dębno – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Woli Dębińskiej, jak w Sufczynie, Maszkienicach, Łysej Górze czy Biadolinach Szlacheckich.",
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
      heading: "Gmina, z której codziennie wyjeżdża tysiąc dwieście osób",
      paragraphs: [
        "Zacznę od liczby, która o tej gminie mówi najwięcej. Tysiąc dwieście czterdzieści trzy osoby dojeżdżają stąd do pracy poza gminę, a trzysta pięćdziesiąt siedem przyjeżdża tu z zewnątrz. Pracujących na miejscu jest dziewięćdziesięciu na tysiąc mieszkańców — jeden z najniższych wskaźników, jakie widziałam, pisząc te strony.",
        "To nie jest zarzut, tylko opis. Gmina Dębno leży na drodze krajowej numer dziewięćdziesiąt cztery, ma własną stację kolejową w Biadolinach Szlacheckich na linii z Krakowa do Tarnowa i mieszka w niej czternaście i pół tysiąca ludzi. Sama gmina podaje, że do Tarnowa jest stąd około dwudziestu kilometrów, a do Krakowa około pięćdziesięciu. Ludzie tu mieszkają, a pracują gdzie indziej — i to kształtuje każdy dzień.",
        "Uczciwie dodam rzecz, o której gminne rozkłady jazdy milczą: z trzech linii komunikacji gminnej dwie nie kursują od pierwszego stycznia dwa tysiące dwudziestego czwartego roku. Obie były dowozowe do stacji kolejowej. Sam dworzec w Biadolinach też już nie istnieje jako budynek — zostały perony i przejście podziemne. Kto stąd dojeżdża, ten najczęściej jedzie własnym samochodem.",
        "Muszę też powiedzieć wprost coś, czego nie powiedzą przewodniki. Zamek w Dębnie, najsłynniejszy zabytek gminy i jeden z najładniejszych późnogotyckich dworów obronnych w Polsce, jest zamknięty dla zwiedzających od pierwszego grudnia dwa tysiące dwudziestego piątego roku. Trwa rewaloryzacja za ponad trzydzieści siedem milionów złotych, a ponowne otwarcie planowane jest na drugą połowę dwa tysiące dwudziestego ósmego. Wszystkie starsze materiały wciąż zapraszają do środka — nie dajcie się nabrać.",
        "Sam zamek został wzniesiony w latach tysiąc czterysta siedemdziesiąt–osiemdziesiąt przez Jakuba z Dębna, kanclerza wielkiego koronnego, i ten sam człowiek ufundował stojący kilkaset metrów dalej kościół świętej Małgorzaty, konsekrowany w tysiąc pięćset czwartym roku. Do tego dochodzi sanktuarium w Porąbce Uszewskiej z grotą będącą repliką tej z Lourdes, wybudowaną w tysiąc dziewięćset czwartym roku.",
        "Gmina jest przy tym rozłożona bardzo nierówno. Największa Wola Dębińska liczy ponad dwa tysiące mieszkańców, najmniejsza Perła — czterysta pięćdziesiąt trzy. Między nimi jest jeszcze jedenaście sołectw, a jedno z nich, Łysa Góra, było po wojnie ośrodkiem ceramiki artystycznej ze szkołą i zakładem eksportującym za granicę.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Dębno?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa: Wola Dębińska, Dębno, Sufczyn, Maszkienice, Łysa Góra, Porąbka Uszewska, Łoniowa, Biadoliny Szlacheckie, Doły, Jaworsko, Niedźwiedza, Jastew albo Perła. Dojeżdżam do wszystkich i nigdzie nie doliczam za odległość.",
        "Jeśli dojeżdżasz do pracy, powiedz to od razu. W tej gminie to sytuacja domyślna, nie wyjątek — wieczór w tygodniu i sobotnie przedpołudnie są tu najczęściej wybieranymi terminami i nie umawiam nikogo na porę, o której i tak jest w drodze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Dębno"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym obiad musi się ugotować sam",
      paragraphs: [
        "W gminie, z której codziennie wyjeżdża tysiąc dwieście osób, wieczór wygląda podobnie w bardzo wielu domach. Wraca się po siedemnastej, czasem po osiemnastej, z drogi, a nie z pracy tuż za rogiem. Gotowanie od zera przegrywa wtedy z odgrzaniem czegokolwiek — i tak powstaje dom, w którym je się przypadkowo.",
        "Zmienia to jedna konkretna rzecz: gotowanie bez obecności. Wstawiasz zupę albo danie jednogarnkowe, wychodzisz, urządzenie prowadzi przepis samo, wyłącza się i czeka. Wracasz i jest ciepły obiad. Nie „szybszy obiad” — obiad zamiast kanapki, i to jest cała różnica.",
        "Druga rzecz to niedziela liczona na cały tydzień. Podwójna porcja zupy, sos na kilka dni, pasty kanapkowe, ciasto, chleb — robione seriami w jednym naczyniu w niedzielę po południu. W domu, z którego wszyscy dojeżdżają, to działa lepiej niż codzienne stanie przy garnku o dziewiętnastej.",
        "Trzecia rzecz dotyczy dzieci. Gmina Dębno przez dwie dekady rosła i ma sporo młodych rodzin, a w domu, w którym oboje rodzice dojeżdżają, nastolatek zostaje po szkole sam na kilka godzin. Przy prowadzeniu krok po kroku jest w stanie wstawić obiad bez otwartego ognia i bez rozgrzanej patelni. Dla wielu rodziców to jest właściwy powód zakupu, nie przepisy.",
        "Warto też powiedzieć o hodowli. Że drobiarstwo jest tu realną gałęzią, wiadomo choćby stąd, że w grudniu dwa tysiące dwudziestego piątego roku cała gmina znalazła się w obszarze zagrożonym pomorem drobiu. W gospodarstwie dzień układa się wokół obrządku, a nie wokół pory obiadowej — i wtedy urządzenie, które gotuje bez nadzoru, ma zupełnie inny sens niż w mieszkaniu w bloku.",
        "Nie będę natomiast obiecywać, że to zastąpi Wam gotowanie na duże okazje. Przy dożynkach w Perle czy przy weselu i tak stoi się w kuchni w kilka osób. Urządzenie zabiera z tego siekanie, ucieranie i mieszanie — czyli tę część, która zjada godziny po cichu.",
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
    heading: "Dębno i gotowanie — łopołka nie jest potrawą",
    paragraphs: [
      "Zacznę od sprostowania, bo pomyłka jest tu wyjątkowo łatwa. Święto Łopołki, które gmina organizuje w Łoniowej razem z przeglądem „Krakowiaczek”, brzmi jak impreza kulinarna, a nią nie jest. Łopołka to koszyk pleciony z kory — dawne rzemiosło tej wsi — a święto jest festiwalem rękodzieła z warsztatami plecionkarskimi. Z jedzeniem nie ma wspólnego nic poza tym, że na festynie zawsze coś się je.",
      "Nie znalazłam też żadnego wpisu z gminy Dębno na ministerialnej Liście Produktów Tradycyjnych. I tu drugie sprostowanie: „chleb dębnowski”, który na tej liście jest, pochodzi z Dębna w województwie zachodniopomorskim. To zupełnie inna gmina, kilkaset kilometrów stąd. Nie przypiszę go tutejszym piekarzom, bo to byłoby zwyczajne kłamstwo.",
      "Nie potwierdziłam również ani jednej działającej w gminie piekarni, masarni czy mleczarni z nazwy. Mogłabym coś wpisać i pewnie nikt by nie sprawdził — nie zrobię tego. Piszę tylko o tym, co da się potwierdzić.",
      "To, co w tej gminie naprawdę jest, to hodowla drobiu i siedem kół gospodyń wiejskich: w Biadolinach Szlacheckich, Dębnie, Dołach, Łoniowej, Łysej Górze, Porąbce Uszewskiej i Sufczynie. To one gotują na dożynkach i na przeglądach folklorystycznych, i to jest realne życie kulinarne tej gminy, a nie wymyślona „tradycja regionalna”.",
      "Co z tego wynika dla urządzenia? Rzecz przyziemna. Przy gotowaniu na dużą liczbę osób — a koła gospodyń robią to kilka razy w roku — najbardziej boli nie trudność, tylko powtarzalność: posiekać, utrzeć, wymieszać, i tak dwadzieścia razy. Urządzenie zabiera dokładnie tę część roboty. Przepisu, wprawy ani rąk do pracy nie zastąpi.",
    ],
  },

  districtsHeading: "Gdzie w gminie Dębno dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu sołectw, bez żadnej dopłaty za odległość: Woli Dębińskiej, Dębna, Sufczyna, Maszkienic, Łysej Góry, Porąbki Uszewskiej, Łoniowej, Biadolin Szlacheckich, Dołów, Jaworska, Niedźwiedzy, Jastwi i Perły.",
    "Gmina zajmuje osiemdziesiąt jeden kilometrów kwadratowych i liczy czternaście i pół tysiąca mieszkańców. Rozłożona jest bardzo nierówno: Wola Dębińska ma ponad dwa tysiące osób, Perła czterysta pięćdziesiąt trzy. Przez środek biegnie droga krajowa numer dziewięćdziesiąt cztery, dawna czwórka, historycznie trakt z Krakowa na Ruś.",
    "Jedna rzecz, która myli przy umawianiu: siedzibą gminy jest Wola Dębińska, a nie wieś Dębno — mimo że adres urzędu to „32-852 Dębno”. Podobnie łatwo pomylić Biadoliny Szlacheckie z Biadolinami Radłowskimi, które leżą już w gminie Radłów. Tutejsza stacja kolejowa nazywa się po prostu Biadoliny.",
    "O kolei uczciwie: stacja w Biadolinach Szlacheckich leży na linii Kraków–Tarnów i stąd jedzie się do Tarnowa kwadrans, a do Krakowa Głównego około godziny. Ale budynku dworca i kasy już nie ma, a dwie z trzech linii komunikacji gminnej — obie dowozowe właśnie do tej stacji — nie kursują od stycznia dwa tysiące dwudziestego czwartego roku. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "I rzecz, której nie powiedzą przewodniki: zamek w Dębnie jest zamknięty dla zwiedzających od grudnia dwa tysiące dwudziestego piątego roku, a ponowne otwarcie planowane jest na drugą połowę dwa tysiące dwudziestego ósmego. Trwa rewaloryzacja za ponad trzydzieści siedem milionów złotych.",
  ],
  districts: [
    "Wola Dębińska",
    "Dębno",
    "Sufczyn",
    "Maszkienice",
    "Łysa Góra",
    "Porąbka Uszewska",
    "Łoniowa",
    "Biadoliny Szlacheckie",
    "Doły",
    "Jaworsko",
    "Niedźwiedza",
    "Jastew",
    "Perła",
  ],

  nearbyHeading: "Brzesko, Czchów, Gnojnik i Wojnicz też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Dębno graniczy z sześcioma gminami: Brzeskiem, Borzęcinem, Czchowem, Gnojnikiem, Wojniczem i Zakliczynem. Do każdej z nich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Dębno, czy już Brzesko albo Wojnicz — po prostu zapytaj. Dla mnie to jedna trasa wzdłuż dziewięćdziesiątki czwórki i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Brzesko",
    "Borzęcin",
    "Czchów",
    "Gnojnik",
    "Wojnicz",
    "Zakliczyn",
    "Bochnia",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Dębno", "w powiecie brzeskim"),

  faq: [
    {
      question: "Codziennie dojeżdżam do pracy. Kiedy da się umówić?",
      answer:
        "Wieczorem w tygodniu albo w sobotę przed południem. W tej gminie to jest sytuacja domyślna, nie wyjątek — tysiąc dwieście czterdzieści trzy osoby dojeżdżają stąd do pracy poza gminę, a pracujących na miejscu jest dziewięćdziesięciu na tysiąc mieszkańców. Powiedz po prostu, o której masz spokojne dwie godziny, a resztę dopasuję.",
    },
    ...faqWspolne("w gminie Dębno"),
    {
      question: "Mieszkam w Perle. To najmniejsze sołectwo — dojedziesz?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Woli Dębińskiej. Obsługuję wszystkie trzynaście sołectw i cała gmina mieści się w promieniu kilkunastu minut jazdy, więc odległość naprawdę nie ma tu znaczenia. Proszę tylko o nazwę miejscowości i punkt orientacyjny przy umawianiu.",
    },
    {
      question: "Czy przy okazji prezentacji da się zwiedzić zamek w Dębnie?",
      answer:
        "Niestety nie i wolę powiedzieć to wprost, bo starsze przewodniki wciąż zapraszają do środka. Zamek jest zamknięty dla zwiedzających od pierwszego grudnia dwa tysiące dwudziestego piątego roku — trwa rewaloryzacja za ponad trzydzieści siedem milionów złotych, a planowane ponowne otwarcie to druga połowa dwa tysiące dwudziestego ósmego roku.",
    },
  ],

  geo: { lat: 49.9614, lng: 20.7178 },
};
