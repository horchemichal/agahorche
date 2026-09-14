import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * JASIEŃ — gmina miejsko-wiejska w powiecie żarskim.
 * MIASTO 4 008, GMINA 6 662 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 4,8 km², GMINY 126,8 km², 17 WSI:
 * Bieszków, Budziechów, Bronice, Golin, Guzów, Jabłoniec,
 * Jaryszów, Jasionna, Jurzyn, Lisia Góra, Lipsk Żarski,
 * Mirkowice, Roztoki, Świbna, Wicina, Zabłocie, Zieleniec.
 * ⚠ Źródła opisowe podają zawyżone liczby ludności („blisko
 *   5 000", „ok. 7 600") — NIE CYTUJĘ. Trzymam się GUS.
 *
 * ⚠ HOMONIMY: JASIEŃ (miasto, lubuskie, powiat żarski)
 * ≠ liczne WSIE o nazwie Jasień (m.in. pomorskie, małopolskie)
 * ≠ JASIENICA ≠ JASIONKA. FAQ to rozróżnia.
 *
 * ⚠⚠ PRAWA MIEJSKIE 24 STYCZNIA 1660 r. — nadał je książę
 * CHRISTIAN I SASKO-MERSEBURSKI, po zabiegach RUDOLFA
 * VON BÜNAU. Potwierdzone drugim źródłem (bez dnia).
 * Powodem starań było zaludnienie wsi po wojnie trzydziestoletniej.
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW NIE PODAJĘ — nieustalone.
 * ⚠⚠ PIERWSZEJ WZMIANKI NIE PODAJĘ — TRZY SPRZECZNE WERSJE
 * RÓŻNIĄCE SIĘ O TRZY STULECIA: 1 maja 1000 r. (Akwizgran),
 * 1321 r., „początek XIV w.". NIE ROZSTRZYGAM I NIE UŻYWAM.
 *
 * HISTORIA: 1731 — pożar niszczący większość zabudowy.
 * 1846 — kolej. 1850 — pierwsza przędzalnia wełny.
 * 1854 — pierwszy samorząd miejski. 1881–1945 — barokowy
 * pałac pełnił funkcję ratusza. 1947 — nadanie obecnej nazwy.
 * W XIX w. rozwinęły się WŁÓKIENNICTWO, CERAMIKA i BUDOWA
 * MASZYN; działały też MŁYNY WODNE i dwie cegielnie.
 * ⚠ O MŁYNACH brak konkretów (nazw, dat, lokalizacji) —
 *   wymieniam je jednym zdaniem. ⚠ KĄT MŁYNARSKI ZAJĘTY.
 *
 * GEOGRAFIA: gmina leży na HISTORYCZNYCH ŁUŻYCACH. Przez
 * gminę płynie LUBSZA, dopływ Nysy Łużyckiej; mniejsze cieki
 * to Makówka, Ług, Widunia, Szyszyna, Korzenna.
 * NAJWIĘKSZE ZALESIENIE W POWIECIE ŻARSKIM.
 * ⚠ KĄTA GRZYBOWEGO NIE UŻYWAM — ZAJĘTY TRZYKROTNIE.
 * REZERWAT TORFOWISKOWY 117 ha we wsi GUZÓW.
 * ⚠ NAZWY I DATY REZERWATU NIE PODAJĘ — jedno źródło.
 * ⚠⚠ PRZEZ TEREN MIĘDZY JASIENIEM A BUDZIECHOWEM PRZEBIEGA
 * POŁUDNIK 15°E — podstawa czasu środkowoeuropejskiego;
 * w mieście stoi kamień symbolizujący 15. południk.
 * Miasta partnerskie: Döbern i Spreetal; gmina należy
 * do Euroregionu Sprewa–Nysa–Bóbr.
 *
 * ⚠⚠ POTRAW Z LISTY LGD GRUPA ŁUŻYCKA (tygiec, osuchy,
 * bobalki, borowianki, racuchy) NIE PRZYPISUJĘ JASIENIOWI —
 * to opis kulinarny CAŁEGO obszaru kilku gmin łużyckich.
 * NIE UŻYWAM ICH JAKO MIEJSCOWYCH SPECJAŁÓW.
 * ⚠ PSZCZELARSTWO: jedno źródło (LGD) wymienia gminę Jasień
 *   wśród największych skupisk producentów miodu. NIE ZNALEZIONO
 *   ANI JEDNEJ KONKRETNEJ PASIEKI. ⚠ KĄT MIODOWY ZAJĘTY.
 *   Podaję to zdaniem ostrożnym albo wcale.
 * ⚠ WINIARSTWA gminie NIE PRZYPISUJĘ — źródło mówi
 *   o „północnej części obszaru LGD".
 * ⚠ NIE ZNALEZIONO w gminie zakładu przetwórstwa spożywczego,
 *   piekarni ani gospodarstwa rybackiego.
 *
 * IMPREZY: „WSPÓLNE ŚWIĘTO PLONÓW" — największa impreza roku
 * w gminie, współtworzona przez sołectwa i koła gospodyń
 * wiejskich, z lokalnymi wystawcami i sprzedawcami; łączy
 * miasto ze wsiami i gminę z partnerskim Spreetal. Osobne
 * dożynki odbywają się w Jaryszowie.
 * DNI JASIENIA — edycja 12–13 czerwca 2026 r., z polsko-
 * -niemieckimi warsztatami tanecznymi i wokalnymi; wśród
 * atrakcji wymieniono wprost SPRZEDAWCÓW JEDZENIA
 * I WYSTAWCÓW. ⚠ NUMERU EDYCJI NIE PODAJĘ.
 *
 * ZABYTKI: barokowy KOŚCIÓŁ MATKI BOŻEJ RÓŻAŃCOWEJ
 * z lat 1733–1734; BAROKOWY PAŁAC; TRÓJKĄTNY RYNEK przy
 * drodze Żary–Lubsko, z zabudową w zwartych pierzejach
 * i spójnym krajobrazem miejskim XIX i początku XX w.;
 * kościół w Budziechowie udokumentowany od 1346 r.
 * ⚠ KRZYŻA POKUTNEGO (37 cm, z kamienia młyńskiego, 1813)
 *   jako „najmniejszego w Polsce" NIE NAZYWAM — jedno źródło.
 *   Wspominam bez superlatywu albo wcale.
 * WICINA — wieś z bogatym stanowiskiem archeologicznym,
 * grodem kultury łużyckiej; wykopaliska od 1920 r.,
 * systematyczne badania od lat 60. XX w.
 * ⚠ MUZEUM przechowującego zabytki NIE WSKAZUJĘ — sprzeczne
 *   lokalizacje.
 *
 * KĄT: PIZZA W DOMOWYM PIEKARNIKU — dlaczego nie wychodzi
 * taka jak z pizzerii i co z tym zrobić.
 * Kąt od Dni Jasienia, imprezy z jedzeniem na stojąco,
 * i od miasta, które żyje w rytmie wyznaczonym przez
 * przebiegający obok 15. południk.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pizza to danie, które prawie każdy zamawia, a mało kto
 *   robi w domu — i że ci, którzy próbowali, zwykle raz
 *   i z rozczarowaniem,
 * — ŻE PRZYCZYNA JEST JEDNA I BRUTALNIE PROSTA: TEMPERATURA.
 *   Piec w pizzerii osiąga temperaturę, której domowy
 *   piekarnik nie osiągnie — i to nie jest kwestia
 *   umiejętności ani przepisu,
 * — CO Z TEGO WYNIKA: w domu ciasto piecze się dłużej,
 *   więc wysycha zamiast błyskawicznie wyrosnąć,
 * — ŻE ROZWIĄZANIEM JEST ZMIANA CELU: zamiast gonić za pizzą
 *   neapolitańską, robić pizzę grubszą, blaszaną, która
 *   w domowym piekarniku wychodzi znakomicie,
 * — ŻE BLACHA ROZGRZANA WCZEŚNIEJ ROBI OGROMNĄ RÓŻNICĘ,
 *   bo spód zaczyna się piec od pierwszej sekundy,
 * — ŻE DRUGIM BŁĘDEM JEST NADMIAR: za dużo sosu i za dużo
 *   dodatków wypuszcza wodę, a ciasto robi się mokre
 *   w środku,
 * — ŻE SOS NA PIZZĘ NIE POWINIEN BYĆ GOTOWANY — surowy,
 *   przetarty pomidor z solą wystarczy, bo i tak upiecze
 *   się na wierzchu,
 * — ŻE CIASTO POTRZEBUJE CZASU, A NIE WYSIŁKU: długi,
 *   powolny wyrost daje smak, którego nie da się uzyskać
 *   pośpiechem,
 * — ŻE TO JEST DANIE IDEALNE DLA DOMU Z DZIEĆMI, bo każdy
 *   układa swoją i nikt nie marudzi na składniki,
 * — UCZCIWIE: urządzenie nie upiecze pizzy i nie zastąpi
 *   piekarnika ani kamienia,
 * — ale robi dwie rzeczy z trzech, z których pizza się składa:
 *   wyrabia ciasto i przygotowuje sos, a to właśnie te dwie
 *   części zniechęcają ludzi najbardziej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ PRZY PIZZY
 *   TO TRUDNE, BO CAŁY TEMAT JEST O TEMPERATURZE — piszę
 *   JAKOŚCIOWO: „znacznie wyższa niż w domowym piekarniku",
 *   „maksymalna, jaką ma Twój piekarnik". ZERO STOPNI, ZERO
 *   MINUT. TWARDA GRANICA.
 * — ŻADNYCH PROPORCJI ANI GRAMATUR CIASTA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM, PIZZERII ANI SIECI.
 * — ⚠ ZERO WYŚMIEWANIA PIZZY Z DOSTAWY. Piszę, że to inne
 *   danie, nie gorsze.
 * — ZERO egzotyzowania kuchni włoskiej i zero sporów
 *   o „prawdziwą" pizzę.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Dania z obcych kuchni
 * robione w polskim domu" dotyczą kategorii jako takiej.
 * „Ciasto drożdżowe — wyrabianie i rozczyn" dotyczy wypieków
 * słodkich. „Brak piekarnika" dotyczy tego, czego urządzenie
 * nie upiecze. „Smażenie w głębokim tłuszczu" (Sulęcin)
 * dotyczy innej techniki. „Jedzenie na wynos" dotyczy
 * zamawiania. Tutaj chodzi o JEDNO KONKRETNE DANIE i o to,
 * dlaczego w domu wychodzi inaczej niż w pizzerii.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ pierwszej wzmianki o Jasieniu.
 * — NIE PRZYPISUJĘ gminie potraw z listy LGD.
 * — NIE WSKAZUJĘ konkretnej pasieki.
 * — NIE PRZYPISUJĘ gminie winiarstwa.
 * — NIE NAZYWAM krzyża pokutnego najmniejszym w Polsce.
 * — NIE PODAJĘ nazwy rezerwatu w Guzowie.
 * — NIE WSKAZUJĘ muzeum ze zbiorami z Wiciny.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy około czterech tysięcy mieszkańców na 4,8 km²,
 *   cała gmina blisko siedem tysięcy na 126,8 km²,
 *   z siedemnastoma wsiami,
 * — prawa miejskie nadał Jasieniowi 24 stycznia 1660 r.
 *   książę Christian I sasko-merseburski, po zabiegach
 *   Rudolfa von Bünau; starania wzięły się stąd, że wieś
 *   zaludniła się po wojnie trzydziestoletniej,
 * — pożar z 1731 r. zniszczył większość zabudowy; kolej
 *   dotarła tu w 1846, pierwsza przędzalnia wełny powstała
 *   w 1850, pierwszy samorząd miejski w 1854, a w latach
 *   1881–1945 funkcję ratusza pełnił barokowy pałac; obecną
 *   nazwę miasto otrzymało w 1947 r. W XIX w. rozwinęły się
 *   tu włókiennictwo, ceramika i budowa maszyn, działały też
 *   młyny wodne i dwie cegielnie,
 * — gmina leży na historycznych Łużycach; płynie przez nią
 *   Lubsza, dopływ Nysy Łużyckiej, a także Makówka, Ług,
 *   Widunia i Szyszyna; ma najwyższe zalesienie w powiecie
 *   żarskim i rezerwat torfowiskowy o powierzchni stu
 *   siedemnastu hektarów we wsi Guzów. Między Jasieniem
 *   a Budziechowem przebiega piętnasty południk — podstawa
 *   czasu środkowoeuropejskiego — a w mieście stoi
 *   upamiętniający go kamień; gmina współpracuje z Döbern
 *   i Spreetal i należy do Euroregionu Sprewa–Nysa–Bóbr,
 * — największą imprezą roku jest „Wspólne Święto Plonów”,
 *   współtworzone przez sołectwa i koła gospodyń wiejskich,
 *   z lokalnymi wystawcami; osobne dożynki odbywają się
 *   w Jaryszowie, a Dni Jasienia — 12 i 13 czerwca 2026 r.
 *   — obejmują polsko-niemieckie warsztaty taneczne i wokalne
 *   oraz stoiska ze sprzedawcami jedzenia,
 * — z zabytków: barokowy kościół Matki Bożej Różańcowej
 *   z lat 1733–1734, barokowy pałac oraz trójkątny rynek przy
 *   dawnej drodze z Żar do Lubska, z zabudową w zwartych
 *   pierzejach; w Budziechowie kościół udokumentowany
 *   od 1346 r., a w Wicinie bogate stanowisko archeologiczne
 *   — gród kultury łużyckiej badany od 1920 r., a systematycznie
 *   od lat sześćdziesiątych.
 */
export const JASIEN: CityContent = {
  slug: "jasien",
  h1: "Thermomix Jasień – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jasień — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Jasieniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jasień — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jasieniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jasienia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Jasień i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Domowa pizza nie przegrywa z pizzerią umiejętnościami — przegrywa temperaturą.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jasieniu – jak wygląda prezentacja?",
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
      id: "pizza",
      heading: "Dni Jasienia i jedzenie na stojąco — czyli o pizzy w domowym piekarniku",
      paragraphs: [
        "Dni Jasienia to dwa dni z warsztatami, koncertami i — jak zapowiada gmina wprost — ze sprzedawcami jedzenia. Miasto ma zresztą ciekawe położenie: między Jasieniem a Budziechowem przebiega piętnasty południk, ten sam, na którym oparty jest czas środkowoeuropejski, a w mieście stoi upamiętniający go kamień.",
        "Napiszę o daniu, które prawie każdy zamawia, a mało kto robi w domu: o pizzy. A ci, którzy próbowali, zwykle robili to raz i z rozczarowaniem.",
        "Przyczyna jest jedna i brutalnie prosta: temperatura. Piec w pizzerii osiąga temperaturę, której domowy piekarnik po prostu nie osiągnie. To nie jest kwestia umiejętności, przepisu ani mąki — to jest kwestia sprzętu i nic na to nie poradzimy.",
        "Konsekwencja jest natychmiastowa. W piecu pizza piecze się błyskawicznie, więc ciasto gwałtownie wyrasta i nie zdąży wyschnąć. W domu piecze się dłużej, więc zamiast wyrosnąć — wysycha. Stąd ta znajoma domowa pizza: twarda, sucha i jakby nie taka.",
        "Rozwiązanie nie polega jednak na walce ze sprzętem, tylko na zmianie celu. Zamiast gonić za cienką pizzą neapolitańską, której domowy piekarnik nie zrobi, warto robić pizzę grubszą — blaszaną, wyrośniętą, z chrupiącym spodem. Ta w domu wychodzi znakomicie i nikomu nie trzeba jej wybaczać.",
        "Jedna rzecz robi przy tym ogromną różnicę: blacha rozgrzana wcześniej, razem z piekarnikiem. Ciasto nałożone na gorącą blachę zaczyna się piec od spodu w pierwszej sekundzie, zamiast powoli dochodzić razem z nią. To jest najbliższa domowa imitacja tego, co robi kamień w piecu.",
        "Drugi klasyczny błąd to nadmiar. Za dużo sosu i za dużo dodatków — zwłaszcza warzyw — wypuszcza wodę, która nie ma dokąd odparować. Ciasto robi się wtedy mokre w środku, niezależnie od tego, jak długo piecze.",
        "Przy sosie warto znać jeszcze jedną rzecz: nie powinien być gotowany. Wystarczy przetarty surowy pomidor z solą, bo sos i tak upiecze się na wierzchu pizzy. Gotowany wcześniej traci świeżość i robi się ciężki.",
        "Ciasto z kolei potrzebuje czasu, a nie wysiłku — i to jest dobra wiadomość dla każdego. Długi, powolny wyrost daje smak, którego nie da się uzyskać żadnym pośpiechem ani dodatkiem. Ciasto zrobione wieczorem na następny dzień jest po prostu lepsze niż to z tej samej godziny.",
        "I rzecz, dla której naprawdę warto: to jest danie idealne dla domu z dziećmi. Każdy układa swoją, każdy wybiera, co na niej będzie, i nagle znika cały problem z marudzeniem na składniki. Obiad robi się przy okazji zabawą.",
        "Teraz uczciwie o sprzęcie. Thermomix nie upiecze pizzy. Nie zastąpi piekarnika ani kamienia i nigdy nie będzie miał z tym nic wspólnego.",
        "Robi natomiast dwie z trzech rzeczy, z których pizza się składa: wyrabia ciasto i przygotowuje sos. A to są akurat te dwie części, które zniechęcają ludzi najbardziej — wyrabianie, bo klei się do rąk, i sos, bo wydaje się dodatkową robotą. Pieczenie zostaje przy piekarniku, a układanie przy dzieciach.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jasieniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu są dzieci i w jakim wieku. Przy młodszych pokażę rzeczy, które można robić razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jasieniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jasieńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy około czterech tysięcy mieszkańców na niecałych pięciu kilometrach kwadratowych, a cała gmina blisko siedem tysięcy na stu dwudziestu siedmiu, z siedemnastoma wsiami. Prawa miejskie nadał Jasieniowi 24 stycznia 1660 roku książę Christian I sasko-merseburski, po zabiegach Rudolfa von Bünau — starania wzięły się stąd, że wieś zaludniła się po wojnie trzydziestoletniej. Pożar z 1731 roku zniszczył większość zabudowy; kolej dotarła tu w 1846, pierwsza przędzalnia wełny powstała w 1850, pierwszy samorząd miejski w 1854, a w latach 1881–1945 funkcję ratusza pełnił barokowy pałac. Obecną nazwę miasto otrzymało w 1947 roku. W XIX wieku rozwinęły się tu włókiennictwo, ceramika i budowa maszyn, działały też młyny wodne i dwie cegielnie. Gmina leży na historycznych Łużycach; płynie przez nią Lubsza, dopływ Nysy Łużyckiej, a także Makówka, Ług, Widunia i Szyszyna. Ma najwyższe zalesienie w powiecie żarskim i rezerwat torfowiskowy o powierzchni stu siedemnastu hektarów we wsi Guzów. Między Jasieniem a Budziechowem przebiega piętnasty południk — podstawa czasu środkowoeuropejskiego — a w mieście stoi upamiętniający go kamień; gmina współpracuje z Döbern i Spreetal. Największą imprezą roku jest „Wspólne Święto Plonów”, współtworzone przez sołectwa i koła gospodyń wiejskich, a osobne dożynki odbywają się w Jaryszowie. Z zabytków zostały barokowy kościół Matki Bożej Różańcowej z lat 1733–1734, barokowy pałac i trójkątny rynek przy dawnej drodze z Żar do Lubska; w Budziechowie stoi kościół udokumentowany od 1346 roku, a w Wicinie jest bogate stanowisko archeologiczne — gród kultury łużyckiej badany od 1920 roku.",
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

  districtsHeading: "Do których części gminy Jasień dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Jasień też przyjadę",
  nearbyParagraphs: [
    "Lubsko, Żary, Lipinki Łużyckie, Tuplice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lubsko", "Żary", "Lipinki Łużyckie", "Tuplice"],

  about: blokOMnie("do Jasienia", "w Jasieniu i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jasienia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo ta nazwa powtarza się w Polsce: chodzi o Jasień-miasto w powiecie żarskim, a nie o wsie o tej samej nazwie w innych województwach.",
    },
    ...faqWspolne("w Jasieniu"),
    {
      question: "Dlaczego domowa pizza nie wychodzi taka jak z pizzerii?",
      answer:
        "Przez temperaturę. Piec w pizzerii osiąga temperaturę, której domowy piekarnik nie osiągnie — więc tam ciasto wyrasta błyskawicznie, a w domu piecze się dłużej i zamiast wyrosnąć, wysycha. To nie jest kwestia umiejętności ani przepisu.",
    },
    {
      question: "Jak zrobić dobrą pizzę w domu?",
      answer:
        "Zmienić cel: zamiast cienkiej neapolitańskiej robić grubszą, blaszaną, z chrupiącym spodem — ta w domu wychodzi znakomicie. Ogromną różnicę robi blacha rozgrzana wcześniej razem z piekarnikiem, bo spód zaczyna się piec od pierwszej sekundy.",
    },
    {
      question: "Dlaczego ciasto jest mokre w środku?",
      answer:
        "Bo było za dużo sosu albo za dużo dodatków — zwłaszcza warzyw, które wypuszczają wodę. Warto też wiedzieć, że sos na pizzę nie powinien być gotowany: wystarczy przetarty surowy pomidor z solą, bo i tak upiecze się na wierzchu.",
    },
  ],

  geo: { lat: 51.7583, lng: 15.0111 },
};
