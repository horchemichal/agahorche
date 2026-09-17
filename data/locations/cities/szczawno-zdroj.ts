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
 * SZCZAWNO-ZDRÓJ — powiat wałbrzyski, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Brak wsi
 *   i sołectw. Nie piszę „i wsie w gminie".
 * MIASTO/GMINA: 5 241 mieszkańców (GUS 31.12.2024),
 *   14,7 km² (dokładnie 14,74), gęstość 355,6 os./km².
 *   ⚠ DOMYKA SIĘ NAJLEPIEJ Z CAŁEJ FALI:
 *   5 241 / 14,74 = 355,56. PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ NIE PODAJĘ „5 608" ANI „ponad 5,6 tys." —
 *   to dane z 2019 r. WYŁĄCZNIE GUS 31.12.2024.
 * ⚠ WYSOKOŚĆ MIASTA: 400–430 m n.p.m.;
 *   Wzgórze Gedymina: 532 m n.p.m.
 * ⚠ GEO: 50,7994 / 16,2550.
 *
 * ⚠⚠⚠ ODMIANA — PIERWSZY CZŁON RODZAJU NIJAKIEGO,
 *   ŁĄCZNIK OBOWIĄZKOWY:
 *   D. do SZCZAWNA-ZDROJU · Ms. w SZCZAWNIE-ZDROJU ·
 *   N. Szczawnem-Zdrojem.
 *   ⚠⚠⚠ BŁĘDY: „w Szczawno-Zdroju", „w Szczawnie Zdrój",
 *   „w Szczawnie Zdroju" (bez łącznika).
 *   Odmienia się jak „okno", z wymianą n → ni
 *   w miejscowniku. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠⚠ PRZYMIOTNIKA OD NAZWY NIE UŻYWAM — forma
 *   „szczawieński" jest [NP], w źródłach nieobecna.
 *   ZAWSZE KONSTRUKCJA PRZYIMKOWA.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠⚠ SZCZAWNICA (małopolskie, powiat nowotarski) —
 *     miasto, ten sam rdzeń, ta sama kategoria
 *     miejscowości. GŁÓWNA KOLIZJA.
 *   — SZCZAWNO — wsie w kujawsko-pomorskiem oraz
 *     w dolnośląskiem (gmina Krotoszyce), bez członu
 *     „-Zdrój".
 *   — SZCZAWA (małopolskie), SZCZAWIN (mazowieckie).
 *   — ⚠⚠ „szczaw" jako roślina — bardzo silna kolizja
 *     w wyszukiwaniu.
 *   — ⚠⚠ JEDLINA-ZDRÓJ — kolejne miasto z członem
 *     „-Zdrój" W TYM SAMYM POWIECIE; w źródłach bywa
 *     opisywana łącznie ze Szczawnem. SPRAWDZAĆ, DO
 *     KTÓREGO MIASTA ODNOSI SIĘ DANA LICZBA.
 *   — ⚠ WZGÓRZE GEDYMINA — nazwa od księcia litewskiego;
 *     zapytania trafiają w Wieżę Gedymina w Wilnie.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠⚠ CAŁY WĄTEK UZDROWISKOWY JEST WYKLUCZONY.
 *   ZERO WÓD, ZERO PIJALNI, ZERO HALI SPACEROWEJ
 *   (1830–1831 — mimo architektonicznego charakteru
 *   należy do zespołu zdrojowego), ZERO KURACJI,
 *   ZERO SANATORIÓW, ZERO ZABIEGÓW.
 *   Nie piszę nawet, że miasto jest uzdrowiskiem.
 *   TO SAMO ZASTOSOWANO W DUSZNIKACH-ZDROJU,
 *   KUDOWIE-ZDROJU, POLANICY-ZDROJU I LĄDKU-ZDROJU.
 *   ⚠ Człon „-Zdrój" w nazwie własnej ZOSTAJE.
 *
 * ⚠⚠ DATY USTROJOWE — RÓŻNICA 724 LATA:
 *   — PIERWSZA WZMIANKA: 1221 r., nazwa „Salzborn",
 *     w Księdze henrykowskiej [ZW, dwa źródła],
 *   — PRAWA MIEJSKIE: 1945 r. [ZW, trzy źródła].
 *   ⚠⚠⚠ TO NAJWIĘKSZA ROZPIĘTOŚĆ W CAŁYM CYKLU
 *   DOLNOŚLĄSKIM. Serwisy statystyczne wpisują tu
 *   zwykle 1221 w rubrykę „prawa miejskie" — błąd
 *   o siedem wieków. ZAWSZE ROZDZIELAM.
 *   ⚠⚠ ALE KĄTA Z TEGO NIE ROBIĘ — figura zajęta
 *   (Szklarska Poręba). PODAJĘ OBIE DATY JAKO FAKTY.
 *   ⚠⚠ ŁAŃCUCHA ZAPISÓW NAZWY (Salzborn 1221 →
 *   Salzebornew 1318 → Zalczinburn 1335) NIE UŻYWAM:
 *   to wątek nazw niemieckich, a dodatkowo prowadzi
 *   do Nieder/Ober Salzbrunn, czyli do figury „dwie
 *   miejscowości zrosły się w jedną" — ⚠⚠⚠ kąt ZAJĘTY
 *   (Piechowice).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIEŻA NA WZGÓRZU GEDYMINA (2022):
 *   — wysokość: 30 m, konstrukcja stalowo-drewniana,
 *   — dwie platformy widokowe: 16,45 m i 26,85 m
 *     (podane z dokładnością do centymetra),
 *   — wzgórze: 532 m n.p.m.,
 *   — DOJŚCIE: SPIRALNA DREWNIANA POCHYLNIA O DŁUGOŚCI
 *     OK. 300 M,
 *   — wstęp bezpłatny, obiekt dostępny dla osób
 *     na wózkach.
 *   ⚠⚠⚠ 300 M POCHYLNI NA 30 M WYSOKOŚCI = DZIESIĘĆ
 *   METRÓW DROGI NA KAŻDY METR W GÓRĘ. Powód jest
 *   konstrukcyjny, nie ozdobny: żeby wjechał wózek,
 *   nachylenie musi być łagodne, a łagodne nachylenie
 *   kosztuje długość. To jest cały kąt.
 *   ⚠⚠ NIE PODAJĘ nachylenia w procentach — nie zostało
 *   ustalone. Podaję wyłącznie stosunek 300 do 30.
 *   ⚠ Piszę „około 300 m", bo tak podaje źródło.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — WIEŻA ANNY: 1818 r., neogotycka; tarcze zegarowe
 *   dodano w 1835 r. (17 lat później); NAJSTARSZY
 *   ZACHOWANY BUDYNEK W MIEŚCIE — co znaczy, że cała
 *   reszta zabudowy jest od niej młodsza.
 *   ⚠ WYSOKOŚCI NIE USTALONO — NIE PODAJĘ.
 *   ⚠⚠ „NAJSTARSZY BUDYNEK I NAJNOWSZY OBIEKT TO OBIE
 *   WIEŻE" — ciekawe, ale to drugi kąt. PODAJĘ JAKO
 *   FAKT, BEZ MORAŁU.
 *   ⚠⚠ „DOŁOŻONE PO LATACH UŻYWANIA" (zegary w 1835)
 *   — kąt zajęty (Syców). BEZ MORAŁU.
 * — POMNIKI PRZYRODY: ponad 120 drzew pod ochroną
 *   w całym mieście [SP — jedno źródło]. W Parku
 *   Szwedzkim jest ich „tylko kilka", czyli większość
 *   rośnie poza nim.
 *   Zmierzone obwody pni: cypryśnik błotny 300 cm;
 *   miłorząb dwuklapowy 150 cm przy 15 m wysokości;
 *   buki 330, 343 i 426 cm; sosna żółta 236 cm przy 20 m.
 *   ⚠⚠⚠ „PIĘTNAŚCIE EGZEMPLARZY, NIE GATUNKÓW" — kąt
 *   ZAJĘTY (Polanica-Zdrój, TEN SAM POWIAT KŁODZKI —
 *   nie, inny powiat, ale kąt ten sam). ⚠⚠ DLATEGO
 *   POMNIKÓW PRZYRODY NIE ROBIĘ KĄTEM I NIE BUDUJĘ
 *   NA NICH ŻADNEGO MORAŁU. PODAJĘ LICZBY W SEKCJI
 *   „RODZINA".
 *   ⚠⚠ „GRUBOŚĆ I WYSOKOŚĆ NIE ROSNĄ W TYM SAMYM
 *   TEMPIE" — to też byłby kąt, ale ociera się
 *   o „opisuj tą wielkością, która się zmienia"
 *   (Oborniki Śląskie). NIE UŻYWAM.
 * — KOLEJ I TRAMWAJ: linia Wałbrzych – Szczawno –
 *   Boguszów otwarta 1878 r., zelektryfikowana 1914
 *   (36 lat później); tramwaj z Wałbrzycha 1907–1966,
 *   czyli 59 lat; przez 38 lat obie linie działały
 *   równolegle.
 *   ⚠⚠ „ZAPASOWE POWINNO BYĆ INNE" — kąt zajęty
 *   (Chocianów). Dwie równoległe linie ocierają się
 *   o to wprost. PODAJĘ DATY BEZ MORAŁU.
 *   ⚠ ROKU 1945 przy kolei NIE PODAJĘ.
 * — TEATR: pierwszy, drewniany — 1821 r.; budynek
 *   murowany — ⚠ [SP] 1892 albo 1896, PISZĘ „w latach
 *   dziewięćdziesiątych XIX w."; festiwal muzyczny
 *   corocznie od 1966 r.
 *   ⚠ LICZBY MIEJSC I WYMIARÓW SCENY NIE USTALONO.
 * — ODLEGŁOŚĆ [ZW]: Wałbrzych 4 km — NAJKRÓTSZA
 *   ZWERYFIKOWANA ODLEGŁOŚĆ W CAŁYM CYKLU.
 *   POZOSTAŁYCH KIERUNKÓW NIE PODAJĘ.
 *
 * KĄT: DZIESIĘĆ METRÓW DROGI NA METR W GÓRĘ
 * — o tym, że udostępnienie czegoś komuś innemu kosztuje
 * wielokrotnie więcej niż zrobienie tego samemu, i że
 * to jest cena dostępu, a nie marnotrawstwo. Kąt
 * od wieży na Wzgórzu Gedymina: trzydzieści metrów
 * wysokości, trzysta metrów pochylni.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wieża na Wzgórzu Gedymina ma 30 m wysokości,
 *   platformy na 16,45 i 26,85 m, a prowadzi do niej
 *   spiralna pochylnia długa na około 300 m,
 * — ŻE TO DZIESIĘĆ METRÓW DROGI NA KAŻDY METR W GÓRĘ,
 *   I ŻE POWÓD NIE JEST OZDOBNY: schody byłyby dziesięć
 *   razy krótsze i nie wjechałby po nich wózek.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI OBOWIĄZUJE TA SAMA PROPORCJA:
 *   pokazanie komuś, jak zrobić obiad, kosztuje
 *   wielokrotnie więcej niż zrobienie go samemu,
 * — ⚠⚠ ŻE „SZYBCIEJ ZROBIĘ SAMA" JEST PRAWDĄ — I ŻE
 *   WŁAŚNIE DLATEGO JEST TAKĄ ZŁĄ ZASADĄ NA DŁUŻSZĄ
 *   METĘ: prawdziwe zdanie, które zamyka drogę,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I PŁACI SIĘ GO RAZ: przy
 *   jednym daniu, jednym jedynym, zrób wersję z pochylnią
 *   — pokaż, powiedz, gdzie co stoi, zapisz jedną rzecz.
 *   Ten jeden raz będzie kosztował wielokrotnie więcej
 *   niż zwykle i tak ma być,
 * — ⚠⚠ ŻE POCHYLNIĘ BUDUJE SIĘ TAM, GDZIE KTOŚ
 *   NAPRAWDĘ BĘDZIE WCHODZIŁ — przy daniu robionym raz
 *   w roku „szybciej zrobię sama" jest po prostu słuszne,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: pochylnia jest bezużyteczna,
 *   jeśli nikt nie chce iść na górę. Tego nie da się
 *   naprawić żadnym ułatwieniem i nie będę udawać,
 *   że da się,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z przewodnikiem
 *   krok po kroku JEST taką pochylnią — dłuższą drogą,
 *   po której da się wjechać. MÓWIĘ WPROST, że to nie
 *   czyni nikogo kucharzem i że nie zastąpi chęci.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO MOMENTU PRZEKAZANIA — kąt zajęty (Żmigród).
 *   ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO ROZGRANICZYĆ
 *   JAWNIE: tamten tekst mówi o CHWILI, W KTÓREJ RZECZ
 *   PRZECHODZI Z RĄK DO RĄK; ten o KOSZCIE UDOSTĘPNIENIA
 *   i o tym, że płaci się go raz, z góry.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PODZIAŁU OBOWIĄZKÓW MIĘDZY DOMOWNIKÓW
 *   JAKO TEMATU. Nie mówię, kto co ma robić.
 *   ⚠⚠⚠ ŻADNYCH PORAD RELACYJNYCH I PSYCHOLOGICZNYCH —
 *   piszę o koszcie nauczenia kogoś jednej czynności,
 *   NIE o podziale ról w rodzinie. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO PIĘTNASTU EGZEMPLARZY, NIE GATUNKÓW —
 *   kąt zajęty (Polanica-Zdrój). Dlatego pomniki
 *   przyrody nie wchodzą do sekcji kątowej.
 * — ⚠⚠ ZERO OPISYWANIA WIELKOŚCIĄ, KTÓRA SIĘ ZMIENIA —
 *   kąt zajęty (Oborniki Śląskie).
 * — ⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów).
 * — ⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice).
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PLANU NAUKI GOTOWANIA — podaję
 *   WYŁĄCZNIE zasadę: jedno danie, jeden raz, z pełnym
 *   kosztem.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO W CAŁOŚCI.
 * — ⚠⚠ ZERO ROKU 1945 JAKO CEZURY, PRZESIEDLEŃ,
 *   NIEMIECKICH NAZW. Rok 1945 pojawia się WYŁĄCZNIE
 *   jako data nadania praw miejskich, bez kontekstu.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ POLA GOLFOWEGO NIE WYMIENIAM — nie ustalono ani
 *   roku powstania, ani powierzchni.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby mieszkańców sprzed 2024 r.
 * — NIE PODAJĘ wysokości Wieży Anny.
 * — NIE PODAJĘ nachylenia pochylni w procentach.
 * — NIE PODAJĘ jednej daty budowy murowanego teatru —
 *   źródła się różnią.
 * — NIE PISZĘ ANI SŁOWA o uzdrowisku i wodach.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PODAJĘ odległości innych niż Wałbrzych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Szczawno-Zdrój jest gminą miejską w powiecie
 *   wałbrzyskim; liczy 5 241 mieszkańców (GUS,
 *   31.12.2024) na 14,7 km², czyli 355,6 osoby
 *   na kilometr kwadratowy; leży na wysokości
 *   400–430 m n.p.m.,
 * — pierwsza wzmianka pochodzi z 1221 r., z Księgi
 *   henrykowskiej, gdzie miejscowość zapisano jako
 *   „Salzborn"; prawa miejskie miasto otrzymało
 *   w 1945 r. — 724 lata później,
 * — wieża na Wzgórzu Gedymina (532 m n.p.m.), otwarta
 *   w 2022 r., ma 30 m wysokości i dwie platformy
 *   widokowe na 16,45 i 26,85 m; prowadzi do niej
 *   spiralna drewniana pochylnia o długości około 300 m,
 *   wstęp jest bezpłatny, a obiekt dostępny dla osób
 *   na wózkach,
 * — Wieża Anny z 1818 r. jest najstarszym zachowanym
 *   budynkiem miasta; tarcze zegarowe dodano jej
 *   w 1835 r.,
 * — w mieście jest ponad 120 drzew pod ochroną; wśród
 *   zmierzonych są buki o obwodach 330, 343 i 426 cm,
 *   cypryśnik błotny o obwodzie 300 cm, miłorząb
 *   dwuklapowy o obwodzie 150 cm i wysokości 15 m oraz
 *   sosna żółta o obwodzie 236 cm i wysokości 20 m,
 * — linię kolejową Wałbrzych – Szczawno – Boguszów
 *   otwarto w 1878 r. i zelektryfikowano w 1914;
 *   tramwaj z Wałbrzycha kursował w latach 1907–1966,
 *   czyli 59 lat,
 * — pierwszy, drewniany teatr powstał w 1821 r.,
 *   a murowany w latach dziewięćdziesiątych XIX w.;
 *   festiwal muzyczny odbywa się tu corocznie od 1966 r.,
 * — do Wałbrzycha są stąd 4 km.
 */
export const SZCZAWNO_ZDROJ: CityContent = {
  slug: "szczawno-zdroj",
  h1: "Thermomix Szczawno-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szczawno-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Szczawnie-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczawno-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczawnie-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szczawna-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Szczawno-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzydzieści metrów w górę. Trzysta metrów drogi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczawnie-Zdroju – jak wygląda prezentacja?",
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
      id: "dziesiec-metrow-na-metr",
      heading: "Dziesięć metrów drogi na metr w górę",
      paragraphs: [
        "Wieża na Wzgórzu Gedymina, otwarta w 2022 roku, ma trzydzieści metrów wysokości. Platformy widokowe są na szesnastu metrach czterdziestu pięciu centymetrach i na dwudziestu sześciu osiemdziesięciu pięciu — z taką właśnie dokładnością podają to źródła.",
        "Prowadzi do niej spiralna drewniana pochylnia o długości około trzystu metrów.",
        "Trzysta metrów drogi na trzydzieści metrów w górę. Dziesięć do jednego.",
        "Schody byłyby dziesięć razy krótsze. I nie wjechałby po nich wózek — a po pochylni wjeżdża, bo nachylenie jest łagodne, a łagodne nachylenie kosztuje dokładnie tyle: długość. Ta pochylnia nie jest ozdobą. Jest ceną za to, że wieża jest dla wszystkich.",
        "W kuchni obowiązuje ta sama proporcja i mniej więcej ta sama liczba.",
        "Pokazanie komuś, jak zrobić obiad, kosztuje wielokrotnie więcej niż zrobienie tego obiadu samej. Trzeba mówić, czekać, poprawiać, tłumaczyć, gdzie co stoi, i patrzeć, jak ktoś robi to wolniej i inaczej.",
        "„Szybciej zrobię sama” jest prawdą. Właśnie dlatego jest tak złą zasadą — to prawdziwe zdanie, które na stałe zamyka drogę.",
        "Ruch jest jeden i płaci się go raz. Przy jednym daniu, jednym jedynym, zrób wersję z pochylnią: pokaż, powiedz na głos, gdzie co stoi, zapisz jedną rzecz, której nikt nie zapamięta. Ten jeden raz będzie kosztował wielokrotnie więcej niż zwykle. Tak ma być — to nie jest oznaka, że coś idzie źle.",
        "Pochylnię buduje się tam, gdzie ktoś naprawdę będzie wchodził. Przy daniu robionym raz w roku „szybciej zrobię sama” jest po prostu słuszne i nie ma powodu udawać inaczej.",
        "Dopowiem, bo to leży blisko: nie chodzi o chwilę, w której coś przechodzi z rąk do rąk. To osobna sprawa. Tutaj chodzi o koszt samego udostępnienia — o to, że płaci się go w całości i z góry.",
        "Uczciwie o drugiej stronie: pochylnia jest bezużyteczna, jeśli nikt nie chce iść na górę. Żadne ułatwienie tego nie naprawi i nie będę udawać, że naprawi. To zupełnie inny problem niż trudność.",
        "I uczciwie o sprzęcie. Thermomix z przewodnikiem krok po kroku jest właśnie taką pochylnią — dłuższą drogą, po której da się wjechać, bo kolejność i tempo są na ekranie. Nie czyni nikogo kucharzem i nie zastępuje chęci. Sprawia tylko, że próg jest niżej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczawnie-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy ktoś jeszcze w domu chciałby gotować, ale nie umie. Wtedy dobiorę danie tak, żeby dało się je przy nim pokazać od zera.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczawnie-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Szczawna-Zdroju",
      paragraphs: [
        "Szczawno-Zdrój jest gminą miejską w powiecie wałbrzyskim — miasto jest tu całą gminą, bez wsi. Liczy 5 241 mieszkańców (GUS, 31.12.2024) na czternastu i siedmiu dziesiątych kilometra kwadratowego, czyli trzysta pięćdziesiąt sześć osób na kilometr; podaję tę liczbę, bo w starszych zestawieniach krąży wyższa, sprzed kilku lat. Miasto leży między czterystu a czterystu trzydziestoma metrami nad poziomem morza. Pierwsza wzmianka pochodzi z 1221 roku, z Księgi henrykowskiej, gdzie miejscowość zapisano jako „Salzborn”, a prawa miejskie otrzymało dopiero w 1945 — siedemset dwadzieścia cztery lata później, i to największa taka różnica, na jaką trafiłam w tym województwie. Wieża na Wzgórzu Gedymina, leżącym na pięciuset trzydziestu dwóch metrach, została otwarta w 2022 roku: trzydzieści metrów wysokości, platformy na szesnastu i dwudziestu sześciu metrach, spiralna drewniana pochylnia długa na około trzysta metrów, wstęp bezpłatny, obiekt dostępny dla osób na wózkach. Wieża Anny z 1818 roku jest najstarszym zachowanym budynkiem miasta — co znaczy, że cała reszta zabudowy Szczawna jest od niej młodsza; tarcze zegarowe dostała siedemnaście lat po zbudowaniu, w 1835. W mieście rośnie ponad sto dwadzieścia drzew pod ochroną, a wśród zmierzonych są trzy buki o obwodach trzystu trzydziestu, trzystu czterdziestu trzech i czterystu dwudziestu sześciu centymetrów, cypryśnik błotny o obwodzie trzystu centymetrów, miłorząb dwuklapowy — sto pięćdziesiąt centymetrów obwodu przy piętnastu metrach wysokości — i sosna żółta, dwieście trzydzieści sześć centymetrów przy dwudziestu metrach. Linię kolejową do Wałbrzycha i Boguszowa otwarto w 1878 roku i zelektryfikowano w 1914, a tramwaj z Wałbrzycha kursował w latach 1907–1966, czyli pięćdziesiąt dziewięć lat. Pierwszy, drewniany teatr powstał w 1821 roku, murowany w latach dziewięćdziesiątych dziewiętnastego wieku; festiwal muzyczny odbywa się tu corocznie od 1966. Do Wałbrzycha są stąd cztery kilometry — najkrótsza odległość, jaką podałam na którejkolwiek z tych stron.",
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

  districtsHeading: "Do których części Szczawna-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — Szczawno-Zdrój jest gminą miejską bez wsi, więc sprawa jest prosta: gdziekolwiek mieszkasz w granicach miasta, dojazd jest bezpłatny.",
    "Miasto jest mocno pofałdowane, więc przy umawianiu warto powiedzieć, czy podjazd pod dom bywa stromy i gdzie da się zatrzymać.",
  ],
  districts: [],

  nearbyHeading: "Poza Szczawno-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Do Wałbrzycha są stąd cztery kilometry. Dojeżdżam też do Świdnicy, Boguszowa-Gorc, Jedliny-Zdroju i Głuszycy — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Wałbrzych", "Świdnica", "Boguszów-Gorce", "Jedlina-Zdrój", "Głuszyca"],

  about: blokOMnie("do Szczawna-Zdroju", "w Szczawnie-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczawna-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: pierwszy człon jest rodzaju nijakiego i odmienia się jak „okno” — mówi się „do Szczawna-Zdroju” i „w Szczawnie-Zdroju”, a nie „w Szczawno-Zdroju”, i łącznik jest obowiązkowy. I uwaga na podobne nazwy: Szczawnica to miasto w Małopolsce, a Jedlina-Zdrój to osobne miasto w tym samym powiecie, często opisywane razem ze Szczawnem.",
    },
    ...faqWspolne("w Szczawnie-Zdroju"),
    {
      question: "Chcę nauczyć kogoś w domu gotować, ale zawsze kończy się na tym, że robię sama. Co z tym zrobić?",
      answer:
        "Przyjąć, że to ma kosztować dużo więcej, i zapłacić ten koszt raz. Wieża na Wzgórzu Gedymina ma trzydzieści metrów wysokości i trzysta metrów pochylni — dziesięć metrów drogi na każdy metr w górę. Pochylnia nie jest ozdobą; jest ceną za to, że wjedzie po niej wózek. „Szybciej zrobię sama” jest prawdą i właśnie dlatego jest złą zasadą. Wybierz jedno danie, jedno jedyne, i zrób przy nim wersję z pochylnią: pokaż, powiedz na głos, gdzie co stoi, zapisz jedną rzecz. Ten jeden raz potrwa wielokrotnie dłużej i tak ma być.",
    },
    {
      question: "Czy Thermomix pomoże komuś, kto zupełnie nie umie gotować?",
      answer:
        "Obniża próg i tyle obiecuję. Przewodnik krok po kroku pokazuje kolejność i tempo na ekranie, więc obiad może zacząć ktoś, kto nigdy nie gotował — to jest właśnie ta dłuższa droga, po której da się wjechać. Nie czyni nikogo kucharzem i nie zastępuje chęci: jeśli ktoś po prostu nie chce gotować, żadne ułatwienie tego nie zmieni. Na prezentacji chętnie oddam sterowanie tej osobie, która w domu gotuje najmniej — wtedy widać, ile ten próg realnie spadł.",
    },
  ],

  geo: { lat: 50.7994, lng: 16.255 },
};
