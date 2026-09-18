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
 * JABŁONOWO POMORSKIE — powiat brodnicki,
 * woj. kujawsko-pomorskie, ZIEMIA CHEŁMIŃSKA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 645 mieszkańców (GUS 31.12.2024),
 * ⚠ 3,4 KM² — NAJMNIEJSZE MIASTO Z TEJ FALI,
 *   za to o NAJWYŻSZEJ GĘSTOŚCI: 1 088,1 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 8 387 osób, 134,8 km²,
 * 20 miejscowości (16 sołectw i dwie wsie niesołeckie).
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ JABŁONOWO POMORSKIE.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE PO STRONIE URZĘDU — POTWIERDZONE, DWIE
 *   POZYCJE: gmina 9 514 wobec 8 387 u GUS (+13,4 %),
 *   miasto 3 893 wobec 3 645 (+6,8 %). UŻYWAM GUS.
 *   ⚠ Urząd podaje też „gęstość linii kolejowych
 *   20,69 km/km²" — liczba fizycznie niemożliwa.
 *   NIE CYTUJĘ JEJ.
 * ⚠ GEO: 53,3919 / 19,1567 — najprecyzyjniejsze
 *   współrzędne w tej fali.
 * ⚠ ODMIANA (POTWIERDZONA W PWN): D. JABŁONOWA
 *   POMORSKIEGO, Ms. W JABŁONOWIE POMORSKIM,
 *   przym. JABŁONOWSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *   ⚠⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 *
 * ⚠⚠⚠ PUŁAPKA ŹRÓDŁOWA NUMER JEDEN — ROZBROJONA:
 *   „KOLEJKA JABŁONOWSKA" TO JABŁONNA POD WARSZAWĄ,
 *   NIE JABŁONOWO POMORSKIE. Artykuł o niej jest pełen
 *   ślicznych, precyzyjnych liczb (pierwszy pociąg
 *   27 listopada 1900 o 13:30, bilet 27 kopiejek,
 *   parowóz 60 KM, zamknięcie 1 lutego 1956) i wychodzi
 *   wysoko w wynikach. ŻADNA Z TYCH LICZB NIE DOTYCZY
 *   TEGO MIASTA. TEST: jeśli w źródle są ruble albo
 *   kopiejki, to zabór rosyjski — a Jabłonowo Pomorskie
 *   było w pruskim. NIE UŻYWAM ANI JEDNEJ Z TYCH DANYCH.
 * ⚠⚠ DRUGA PUŁAPKA: JABŁONOWO-ZAMEK to ODRĘBNA WIEŚ
 *   W TEJ SAMEJ GMINIE. Pałac z lat 1854–1859 stoi TAM,
 *   nie w mieście. NIE PRZYPISUJĘ GO MIASTU.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1222 — pierwsza wzmianka, w formie „Jablovo",
 *   w dokumencie Konrada I Mazowieckiego.
 * — 1403 — pierwsza wzmianka o Sadlinkach.
 * — 1927 — formalne połączenie Jabłonowa i Sadlinka
 *   w jedną miejscowość.
 * — KOLEJ — PEŁNY CIĄG DAT:
 *   ⭐ 20 LISTOPADA 1871 — odcinek Toruń Wschodni –
 *   Jabłonowo (POTWIERDZONE DWOMA ŹRÓDŁAMI);
 *   1872 — Jabłonowo – Ostróda;
 *   1878 — Jabłonowo – Grudziądz;
 *   1899 — Jabłonowo – Prabuty.
 *   Węzeł budowano zatem od 1871 do 1899 — 28 lat.
 * — ⚠⚠⚠ RDZEŃ KĄTA — TRZY LINIE, TRZY RÓŻNE KILOMETRAŻE
 *   W TYM SAMYM MIEJSCU:
 *   linia nr 208 — km 78,560;
 *   linia nr 353 — km 193,940;
 *   ⭐⭐ LINIA NR 232 — KM 0,000. TU ZACZYNA SIĘ LICZENIE.
 *   Zanim postawiono pierwszy słupek, ktoś musiał
 *   zdecydować, GDZIE JEST ZERO.
 * — Stacja: TRZY ZADASZONE PERONY, wieża wodna.
 *   Przy stacji park kolejowy z parowozem Ty2-860,
 *   semaforem dwuramiennym i kozłem oporowym.
 *   ⚠⚠ OPISUJĘ JE JAKO EKSPONATY TECHNICZNE, NIGDY JAKO
 *   POMNIKI — słowo „pomnik" ciągnie w stronę upamiętnień
 *   wojennych. TWARDA GRANICA.
 * — ⭐ 1962 — PRAWA MIEJSKIE. MIASTO JEST O 91 LAT MŁODSZE
 *   NIŻ JEGO WŁASNY DWORZEC.
 *   ⚠ DATY DZIENNEJ NIE USTALONO.
 * — 1866 — ukończenie murowanego kościoła
 *   (⚠ wyłącznie jako architektura albo wcale).
 * — Użytki rolne 103,8 km², lasy 12,58 km² (9,38 %).
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu z gminy
 *   Jabłonowo Pomorskie. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich. NIE WYMYŚLAM ŻADNEGO.
 *   ⚠⚠ PUŁAPKI ROZBROJONE: „mace borowiackie"
 *   (04.03.2008) to KGW w TUCHOLI; „chleb z kminkiem
 *   ze Stolna" (25.06.2009) i „chleb z makiem ze Stolna"
 *   (04.03.2008) to GMINA STOLNO, powiat chełmiński;
 *   „fjut kociewski" (09.05.2023) to KOCIEWIE, a Jabłonowo
 *   leży na ZIEMI CHEŁMIŃSKIEJ; „powidła śliwkowe
 *   z Doliny Dolnej Wisły" i „miody z rejonu Dolnej Wisły"
 *   mają zasięg regionalny i nie wskazują gminy.
 *   NIE PRZYPISUJĘ.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: WSZYSTKO WYJĘTE, ZANIM ZAPALISZ — czyli gdzie
 * naprawdę zaczyna się gotowanie.
 * Kąt od kilometra zerowego: linia nr 232 liczy się
 * od Jabłonowa, od km 0,000. Zanim ktokolwiek położył
 * pierwszy metr toru, trzeba było ustalić, gdzie jest zero
 * — bo od tego punktu mierzy się potem wszystko inne.
 * W kuchni zero prawie zawsze ustawia się w złym miejscu:
 * w momencie zapalenia gazu, a nie w momencie, w którym
 * wszystko jest już wyjęte i odmierzone.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w tej samej stacji zbiegają się trzy linie i każda
 *   ma tu inny kilometraż, a jedna z nich — zerowy,
 * — ⚠⚠ ŻE GOTOWANIE ZACZYNA SIĘ NIE PRZY PALNIKU, TYLKO
 *   W MOMENCIE, GDY WSZYSTKIE SKŁADNIKI SĄ JUŻ WYJĘTE,
 *   ODMIERZONE I W ZASIĘGU RĘKI — TO JEST RDZEŃ,
 * — CO SIĘ DZIEJE, GDY ZERO JEST ŹLE USTAWIONE:
 *   biega się po składniki w trakcie, a wtedy coś stoi
 *   na ogniu bez nadzoru; mąkę odmierza się jedną ręką
 *   nad miską; okazuje się w połowie, że czegoś nie ma,
 * — ⚠⚠ ŻE TO NIE JEST RADA „BĄDŹ BARDZIEJ ZORGANIZOWANA".
 *   To jest przesunięcie CAŁEGO WYSIŁKU W MIEJSCE, W KTÓRYM
 *   NIC SIĘ NIE PALI — bo przed zapaleniem ognia czas jest
 *   Twój, a po zapaleniu należy już do garnka.
 *   ⚠ ZERO MORALIZOWANIA I ZERO ROZLICZANIA,
 * — KONKRETNIE, CO ZNACZY „WYJĘTE": wszystko na blacie
 *   w takiej postaci, w jakiej wejdzie do naczynia —
 *   pokrojone, odmierzone, otwarte. Łącznie z rzeczami,
 *   o których się zapomina: ściereczka, miska na odpadki,
 *   miejsce, gdzie odłożysz gorącą pokrywkę,
 * — ⚠ UCZCIWIE O KOSZCIE: to daje więcej naczyń do umycia.
 *   Nie ukrywam tego. Zysk jest gdzie indziej — w tym,
 *   że przy samym gotowaniu nie trzeba już myśleć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zmienia tu naprawdę
 *   jedną rzecz — pilnuje temperatury i miesza samo, więc
 *   opuszczenie kuchni na minutę przestaje być ryzykiem.
 *   ALE ODMIERZYĆ I WYJĄĆ TRZEBA TAK SAMO, a dania
 *   z kilkoma etapami wręcz WYMAGAJĄ przygotowania
 *   z wyprzedzeniem, bo etapy idą jeden po drugim bez
 *   przerwy na szukanie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO CZASU W PRZEPISIE I MINUT — kąt zajęty (Mońki).
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT LICZBOWY. Nie piszę
 *   „od kiedy liczyć minuty" ani o wiarygodności czasów.
 *   Piszę o TYM, CO MA BYĆ ZROBIONE PRZED. TWARDA GRANICA.
 * — ⚠⚠ ZERO KOLEJNOŚCI DODAWANIA SKŁADNIKÓW — kąt zajęty
 *   (Wolbórz). Tam chodzi o to, CO PO CZYM WPADA
 *   DO NACZYNIA; TUTAJ o to, CO MA LEŻEĆ NA BLACIE,
 *   ZANIM COKOLWIEK WPADNIE.
 * — ⚠⚠ ZERO ZAKUPÓW I LIST ZAKUPÓW — kąty zajęte (Kock,
 *   Czeladź, Opole, Goniądz, Wejherowo). Mówię wyłącznie
 *   o tym, co się dzieje W KUCHNI, gdy zakupy są już
 *   zrobione. TWARDA GRANICA.
 * — ⚠⚠ ZERO SPRAWDZANIA JAKOŚCI SKŁADNIKÓW — to kąt
 *   Kowala z tej samej fali. Odsyłam tam jednym zdaniem.
 * — ⚠ ZERO NARZĘDZI I SZUFLAD — kąt zajęty (Lipno).
 * — ⚠ ZERO WYSOKOŚCI BLATU — kąt zajęty (Piotrków
 *   Kujawski).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z 1939 R. Hasło en.wikipedia
 *   o Jabłonowie mówi o egzekucjach Polaków już
 *   w DRUGIM AKAPICIE, bez potrzeby przewijania strony.
 *   ŻADNYCH SŁÓW „egzekucja", „okupacja".
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO NIEMIECKIEJ NAZWY MIASTA I ZERO OKOLICZNOŚCI
 *   PRZEMIANOWANIA W 1903 R. — wiąże się i ze śmiercią
 *   konkretnej osoby, i z germanizacją.
 * — ⚠⚠ ZERO KONSPIRACJI I ORGANIZACJI WOJSKOWYCH
 *   wymienianych w en.wikipedii.
 * — ⚠⚠ ZERO PRZYMUSOWEJ LICYTACJI MAJĄTKU Z 1832 R.
 *   i kwoty 7 706 talarów — to ruina rodziny.
 * — ⚠⚠ ZERO AREAŁU Z 1832 R. (2 343 morgi, 1 992, 57, 33)
 *   — liczby ładne, ale pochodzą z opisu licytacji,
 *   a poza tym kąt „ubytek przy obróbce" jest zajęty
 *   (Milanówek). NIE UŻYWAM.
 * — ⚠ ZERO PARKU KOLEJOWEGO JAKO „POMNIKÓW" — wyłącznie
 *   eksponaty techniczne.
 * — ⚠ ZERO PAROWOZOWNI I DATY 1945.
 * — ZERO kościoła jako wątku wyznaniowego.
 * — ZERO bezrobocia, salda migracji i przyrostu naturalnego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CZAS W PRZEPISIE" (Mońki) dotyczy MINUT I GOTOWOŚCI.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT — TUTAJ nie ma ani jednej
 *   minuty i ani jednego zdania o tym, kiedy coś jest
 *   gotowe.
 * — „KOLEJNOŚĆ DODAWANIA" (Wolbórz) dotyczy WNĘTRZA
 *   NACZYNIA.
 * — „NAJPIERW ZAKUPY, POTEM PRZEPIS" (Kock) dotyczy SKLEPU.
 * — „KOMORA CELNA" (Kowal, ta sama fala) dotyczy
 *   SPRAWDZANIA, CZY SKŁADNIK JEST DOBRY. Odsyłam wprost.
 * TUTAJ chodzi o STAN BLATU W CHWILI, W KTÓREJ ZACZYNA SIĘ
 * ROBOTA — i o to, że ta chwila jest wcześniej,
 * niż się wydaje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE UŻYWAM danych o kolejce jabłonowskiej — to inna
 *   miejscowość.
 * — NIE PRZYPISUJĘ miastu pałacu z Jabłonowa-Zamku.
 * — NIE PODAJĘ daty dziennej praw miejskich — nie ustalono.
 * — NIE CYTUJĘ gęstości linii kolejowych podawanej
 *   przez urząd — liczba jest niemożliwa.
 * — NIE PRZYPISUJĘ Jabłonowu żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Jabłonowo Pomorskie leży na ziemi chełmińskiej,
 *   w powiecie brodnickim; jest miastem w gminie
 *   miejsko-wiejskiej i liczy 3 645 mieszkańców
 *   (GUS, 31.12.2024) na zaledwie 3,4 km², czyli blisko
 *   tysiąc dziewięćdziesiąt osób na kilometr kwadratowy;
 *   cała gmina ma 8 387 osób i dwadzieścia miejscowości
 *   na 134,8 km²,
 * — pierwsza wzmianka pochodzi z 1222 roku, z dokumentu
 *   Konrada I Mazowieckiego, w formie „Jablovo",
 * — 20 listopada 1871 roku otwarto odcinek kolejowy
 *   z Torunia do Jabłonowa; w 1872 doprowadzono linię
 *   do Ostródy, w 1878 do Grudziądza, a w 1899
 *   do Prabut — węzeł budowano więc dwadzieścia osiem lat,
 * — w jednej stacji zbiegają się trzy linie i każda ma tu
 *   inny kilometraż: linia 208 — 78,560 km, linia 353 —
 *   193,940 km, a linia 232 zaczyna się tutaj, od zera,
 * — stacja ma trzy zadaszone perony i wieżę wodną,
 *   a przy niej stoją eksponaty techniczne: parowóz,
 *   semafor dwuramienny i kozioł oporowy,
 * — prawa miejskie Jabłonowo dostało dopiero w 1962 roku,
 *   czyli dziewięćdziesiąt jeden lat po własnym dworcu,
 * — w 1927 roku połączono Jabłonowo z sąsiednimi
 *   Sadlinkami w jedną miejscowość,
 * — użytki rolne zajmują w gminie 103,8 km², lasy
 *   niecałe dziesięć procent powierzchni.
 */
export const JABLONOWO_POMORSKIE: CityContent = {
  slug: "jablonowo-pomorskie",
  h1: "Thermomix Jabłonowo Pomorskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jabłonowo Pomorskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Jabłonowie Pomorskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jabłonowo Pomorskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jabłonowie Pomorskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jabłonowa Pomorskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Jabłonowo Pomorskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przed zapaleniem ognia czas jest Twój. Potem należy już do garnka.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jabłonowie Pomorskim – jak wygląda prezentacja?",
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
      id: "kilometr-zero",
      heading: "Kilometr zerowy",
      paragraphs: [
        "W Jabłonowie Pomorskim zbiegają się trzy linie kolejowe i każda ma w tym samym miejscu inny kilometraż. Dla jednej to kilometr siedemdziesiąty ósmy, dla drugiej sto dziewięćdziesiąty trzeci, a dla trzeciej — zerowy. Ta trzecia właśnie tutaj się zaczyna.",
        "Zanim ktokolwiek położył pierwszy metr toru, ktoś musiał zdecydować, gdzie jest zero. Od tego punktu mierzy się potem wszystko inne, a wybrać go trzeba było na papierze, przed robotą.",
        "W kuchni ten punkt też istnieje i prawie zawsze ustawiamy go w złym miejscu. Zero nie jest wtedy, gdy zapalasz gaz. Zero jest wtedy, gdy wszystkie składniki leżą już na blacie — wyjęte, pokrojone, odmierzone, otwarte — i nic więcej nie trzeba szukać.",
        "Kiedy zero jest ustawione przy palniku, gotowanie wygląda znajomo. Coś stoi na ogniu, a Ty biegniesz po przyprawę. Odmierzasz mąkę jedną ręką nad miską, drugą mieszając. W połowie dania okazuje się, że jednej rzeczy w ogóle nie ma i trzeba coś wymyślać. Nic z tego nie jest efektem braku umiejętności — to skutek tego, że praca przygotowawcza dzieje się w tym samym czasie co praca przy ogniu.",
        "I chcę to powiedzieć jasno, bo to nie jest rada w stylu „bądź bardziej zorganizowana”. To jest przesunięcie wysiłku w miejsce, w którym nic się nie pali. Przed zapaleniem ognia czas jest Twój i możesz przerwać, kiedy chcesz. Po zapaleniu czas należy do garnka i to on decyduje, na co jest chwila.",
        "„Wyjęte” znaczy konkretnie: wszystko na blacie w takiej postaci, w jakiej wejdzie do naczynia. Cebula już posiekana, a nie cebula w siatce. Przyprawy odkręcone. Do tego rzeczy, o których zawsze się zapomina — ściereczka, miska na obierki i wolne miejsce, na którym odłożysz gorącą pokrywkę.",
        "Uczciwie o koszcie: to daje więcej naczyń do umycia. Miseczki, w których czekają odmierzone składniki, trzeba potem zmyć i nie będę udawać, że jest inaczej. Zysk jest gdzie indziej — w tym, że przy samym gotowaniu nie trzeba już nic wymyślać, a to jest ta część, która męczy najbardziej.",
        "Osobna sprawa to jakość tego, co wyjmujesz — czy jajko jest dobre, czy mleko nadaje się do wlania. O tym pisałam przy innym mieście, bo to inna decyzja niż ta tutaj.",
        "Uczciwie o sprzęcie. Urządzenie zmienia w tej sprawie jedną rzecz, za to istotną: pilnuje temperatury i miesza samo, więc wyjście z kuchni na minutę przestaje być ryzykowne. To realnie zdejmuje presję.",
        "Ale odmierzyć i wyjąć trzeba dokładnie tak samo. A przy daniach z kilkoma etapami przygotowanie z wyprzedzeniem staje się wręcz konieczne, bo etapy idą jeden po drugim, bez przerwy na szukanie czegokolwiek.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jabłonowie Pomorskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, przy którym daniu najczęściej zaczyna się bieganina — ugotujemy właśnie takie i zobaczysz, ile z tego znika, gdy wszystko leży na blacie od początku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jabłonowie Pomorskim"),
    sekcjaRaty("w Jabłonowie Pomorskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla jabłonowskiej rodziny",
      paragraphs: [
        "Jabłonowo Pomorskie leży na ziemi chełmińskiej, w powiecie brodnickim; jest miastem w gminie miejsko-wiejskiej i liczy ponad trzy i pół tysiąca mieszkańców na zaledwie trzech i czterech dziesiątych kilometra kwadratowego — blisko tysiąc dziewięćdziesiąt osób na kilometr, najgęściej w okolicy; cała gmina ma ponad osiem tysięcy osób w dwudziestu miejscowościach. Pierwsza wzmianka pochodzi z 1222 roku, z dokumentu Konrada I Mazowieckiego, w formie „Jablovo”. 20 listopada 1871 roku otwarto odcinek kolejowy z Torunia do Jabłonowa, w 1872 doprowadzono linię do Ostródy, w 1878 do Grudziądza, a w 1899 do Prabut — węzeł budowano więc dwadzieścia osiem lat. W jednej stacji zbiegają się trzy linie i każda ma tu inny kilometraż: dla jednej to kilometr siedemdziesiąty ósmy, dla drugiej sto dziewięćdziesiąty trzeci, a trzecia zaczyna się tutaj, od zera. Stacja ma trzy zadaszone perony i wieżę wodną, a przy niej stoją eksponaty techniczne: parowóz, semafor dwuramienny i kozioł oporowy. W 1927 roku połączono Jabłonowo z sąsiednimi Sadlinkami w jedną miejscowość, a prawa miejskie miasto dostało dopiero w 1962 roku — dziewięćdziesiąt jeden lat po własnym dworcu. Użytki rolne zajmują w gminie sto trzy i osiem dziesiątych kilometra kwadratowego, lasy niecałe dziesięć procent powierzchni.",
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

  districtsHeading: "Do których części Jabłonowa Pomorskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest bardzo zwarte, niecałe trzy i pół kilometra kwadratowego, więc wszędzie jest blisko. Dojeżdżam też do wszystkich dwudziestu miejscowości w gminie, w tym do Jabłonowa-Zamku.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Jabłonowo Pomorskie też przyjadę",
  nearbyParagraphs: [
    "Brodnica, Grudziądz, Wąbrzeźno, Nowe Miasto Lubawskie, Lubawa i Golub-Dobrzyń są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Brodnica", "Grudziądz", "Wąbrzeźno", "Nowe Miasto Lubawskie"],

  about: blokOMnie("do Jabłonowa Pomorskiego", "w Jabłonowie Pomorskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jabłonowa Pomorskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu miejscowości w gminie, w tym do Jabłonowa-Zamku. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Jabłonowo Pomorskie jest miastem w gminie miejsko-wiejskiej w powiecie brodnickim.",
    },
    ...faqWspolne("w Jabłonowie Pomorskim"),
    {
      question: "Co znaczy, że wszystko ma być przygotowane przed gotowaniem?",
      answer:
        "Że w chwili, gdy zapalasz ogień, wszystkie składniki leżą już na blacie w takiej postaci, w jakiej wejdą do naczynia — pokrojone, odmierzone, otwarte. Łącznie ze ściereczką, miską na obierki i wolnym miejscem na gorącą pokrywkę. Brzmi to jak drobiazg, a jest różnicą między gotowaniem a bieganiną, bo przed zapaleniem ognia czas jest Twój, a potem należy do garnka.",
    },
    {
      question: "Czy to nie znaczy więcej naczyń do umycia?",
      answer:
        "Znaczy i nie będę tego ukrywać — miseczki z odmierzonymi składnikami trzeba potem zmyć. Zysk jest gdzie indziej: przy samym gotowaniu nie trzeba już nic wymyślać ani szukać, a to jest ta część, która męczy najbardziej. Przy daniach z kilkoma etapami to zresztą przestaje być wyborem, bo etapy idą jeden po drugim.",
    },
  ],

  geo: { lat: 53.3919, lng: 19.1567 },
};
