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
 * WYRZYSK — powiat pilski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ WYRZYSK NIE MA.
 * MIASTO: 5 071 mieszkańców (GUS 31.12.2024), 4,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 230,8 os./km², iloraz daje 1 236,8. ROZBIEŻNOŚĆ
 *   6,0. NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚĆ: 90 m n.p.m. PODAJĘ.
 *   ⚠⚠⚠ URZĄD PODAJE 5 135 MIESZKAŃCÓW MIASTA,
 *   BEZ DATY — o 64 więcej niż GUS. PODAJĘ TYLKO
 *   LICZBĘ GUS Z DATĄ.
 * CAŁA GMINA: 12 984 osoby (GUS 31.12.2024),
 *   159,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ. Źródło podaje 83,
 *   iloraz z jego własnej ludności daje 81,7 —
 *   ROZBIEŻNOŚĆ 1,3. Drugie źródło podaje 12 939 osób
 *   i gęstość 81,4, co się domyka (81,38), ale to inna
 *   ludność. NIE PODAJĘ ŻADNEJ GĘSTOŚCI GMINY.
 *   ⚠⚠⚠ CZTERY RÓŻNE LICZBY LUDNOŚCI GMINY W OBIEGU:
 *   12 984 (GUS), 12 939 (geoportal), 14 325 (urząd).
 *   ⚠⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM — przyczyna jest
 *   definicyjna (zameldowani na stałe wobec faktycznych),
 *   a figura „spór o liczbę, który jest sporem
 *   o definicję" ZAJĘTA (Szamotuły). PODAJĘ TYLKO GUS
 *   Z DATĄ I MÓWIĘ, ŻE INNE ŹRÓDŁA PODAJĄ INNE LICZBY.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * STRUKTURA GMINY (urząd): LASY 2 031 ha, GRUNTY
 *   ROLNE 11 622 ha. PODAJĘ W HEKTARACH, TAK JAK
 *   W ŹRÓDLE. ⚠ UDZIAŁU PROCENTOWEGO NIE LICZĘ.
 * SOŁECTWA I WSIE: urząd podaje 34 MIEJSCOWOŚCI
 *   i 19 SOŁECTW; polskawliczbach podaje 31
 *   MIEJSCOWOŚCI.
 *   ⚠⚠⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ (rozbieżność).
 *   ⚠⚠ LICZBĘ 19 SOŁECTW PODAJĘ Z ZASTRZEŻENIEM
 *   „według gminy" — jedno źródło.
 *   NAZWY ZE ŹRÓDEŁ: Auguścin, Osiek nad Notecią,
 *   Żuławka, Wyrzysk Skarbowy.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * POŁOŻENIE: Wysoczyzna Krajeńska; Noteć jako granica
 *   południowa gminy, przez gminę płynie ŁOBZONKA.
 *   NAJWYŻSZY PUNKT OKOLICY: DĘBOWA GÓRA, 192 m n.p.m.
 *   ODLEGŁOŚCI (urząd): 37 km do Piły, 55 km
 *   do Bydgoszczy; koleją 39 km i 48 km. PODAJĘ.
 * ⚠ GEO: 53,1524 / 17,2680.
 *
 * ⚠⚠ ODMIANA:
 *   D. do WYRZYSKA · Ms. w WYRZYSKU ·
 *   N. Wyrzyskiem · C. Wyrzyskowi.
 *   Przymiotnik: WYRZYSKI.
 *   ⚠⚠⚠ BŁĄD: miejscownik w funkcji dopełniacza —
 *   „z Wyrzysku", „mieszkańcy Wyrzysku" zamiast
 *   „z Wyrzyska". WSPOMINAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ WYRZYSK SKARBOWY — ODRĘBNA WIEŚ W GMINIE
 *     WYRZYSK, 218 mieszkańców (NSP 2021), kod 89-300,
 *     ok. 1,3 km na północny wschód od miasta.
 *     NAJPOWAŻNIEJSZA PUŁAPKA. WSPOMINAM OBOWIĄZKOWO.
 *   — ⚠⚠⚠ POWIAT WYRZYSKI NIE ISTNIEJE OD 1975 R.
 *     Wyrzysk leży dziś w POWIECIE PILSKIM.
 *     NIE PRZENOSZĘ NAZWY HISTORYCZNEJ DO ZDAŃ
 *     O DZISIEJSZEJ ADMINISTRACJI.
 *   — Innych Wyrzysków nie ustalono [NP].
 *   — OSIEK NAD NOTECIĄ — wieś sołecka w tej gminie.
 *
 * ⚠⚠⚠ DATY USTROJOWE — RDZEŃ KĄTA:
 *   — baza statystyczna: „XV w. Uzyskanie praw
 *     miejskich",
 *   — strona urzędu, JEDEN AKAPIT, DWIE DATY:
 *     „miastem na prawach magdeburskich został
 *     w 1565 roku" ORAZ „ponownego nadania mu praw
 *     miejskich w 1772 roku".
 *   CZYLI PRAWA MIEJSKIE NADANO DWUKROTNIE, W ODSTĘPIE
 *   207 LAT — a trzecie źródło datuje je po prostu
 *   na XV wiek.
 *   ROZSTĘP SKRAJNYCH ODPOWIEDZI PRZEKRACZA 300 LAT.
 *   — PIERWSZA WZMIANKA: 1326 r. PODAJĘ.
 *   — „W latach 1744–1768 istniały w Wyrzysku DWA
 *     PLACE TARGOWE, młyn, tartak i folusz". PODAJĘ.
 *   — SIEDZIBA POWIATU: 1818–1975 (157 lat), od 1999
 *     powiat pilski. PODAJĘ JAKO FAKT WSPIERAJĄCY.
 *     ⚠⚠ NIE ROBIĘ Z TEGO KĄTU — wątek „powiat,
 *     którego już nie ma" pojawił się przy Wieleniu
 *     (poprzednia fala) i przy Odolanowie (ta sama
 *     fala). PODAJĘ JEDNYM ZDANIEM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NADANE DWA RAZY:
 *   Wyrzysk otrzymał prawa miejskie w 1565 r.
 *   I PONOWNIE W 1772 R.
 *   Nie „potwierdzono", nie „odnowiono" — strona
 *   urzędu pisze o PONOWNYM NADANIU.
 *   Dwieście siedem lat między jednym nadaniem
 *   a drugim.
 *   ⚠⚠⚠ PRZYCZYNY DRUGIEGO NADANIA NIE ZNAM I NIE
 *   ZGADUJĘ. MÓWIĘ TO WPROST W TEKŚCIE. Nie twierdzę,
 *   że miasto przestało być miastem — twierdzę tylko,
 *   że dokument wystawiono po raz drugi.
 *
 * KĄT: NADANE DWA RAZY
 * — o tym, że drugi początek tej samej rzeczy jest
 * normalnym zdarzeniem, nie przyznaniem się do porażki
 * pierwszego. Kąt z Wyrzyska: prawa miejskie nadano
 * dwukrotnie, w 1565 i w 1772 roku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że strona urzędu podaje dwa nadania praw miejskich:
 *   1565 i 1772, w odstępie 207 lat, a baza statystyczna
 *   datuje je na XV wiek. TO JEST RDZEŃ,
 * — ⚠⚠ że przyczyny drugiego nadania nie znam
 *   i nie zgaduję,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: drugie podejście
 *   do tego samego — do gotowania w domu, do robienia
 *   zapasów, do jednego dania, które nie wyszło —
 *   jest zwykłym zdarzeniem,
 * — ⚠⚠ ŻE NAJWIĘKSZĄ PRZESZKODĄ W DRUGIM PODEJŚCIU
 *   JEST WSTYD ZA PIERWSZE, a nie trudność samej
 *   rzeczy,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie zaczynaj od
 *   rozliczania pierwszego podejścia. Zacznij od
 *   drugiego,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: jeśli drugie podejście
 *   ma wyglądać dokładnie jak pierwsze, skończy się tak
 *   samo. Coś musi być inne — warunki, skala albo
 *   narzędzie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest zmianą
 *   narzędzia i tylko tym. Jeśli pierwsze podejście
 *   rozbiło się o brak czasu na stanie przy garnku,
 *   zmienia sytuację realnie. Jeśli o coś innego —
 *   nie zmieni nic.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZERWY, KTÓRA NIE KASUJE POCZĄTKU —
 *   kąt zajęty (Trzcianka). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o to, że przerwa nie unieważnia tego, co było
 *   przed nią; TU o to, że drugi start jest
 *   pełnoprawnym zdarzeniem sam z siebie, niezależnie
 *   od tego, co stało się z pierwszym.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERW, KTÓRE ROSNĄ — kąt zajęty
 *   (Węgliniec).
 * — ⚠⚠⚠ ZERO ROCZNICY LICZONEJ OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów, TA SAMA FALA). ⚠⚠⚠ MUSZĘ
 *   UWAŻAĆ: oba miasta mają konflikt dat lokacyjnych.
 *   Tam rzecz w WYBORZE jednej z czterech dat;
 *   tu w tym, że dokument wystawiono DWA RAZY.
 *   NIE MIESZAM.
 * — ⚠⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń, ta sama fala).
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). DLATEGO
 *   CZTERECH LICZB LUDNOŚCI GMINY NIE ROBIĘ KĄTEM.
 * — ⚠⚠ ZERO PODZIAŁU ZNIESIONEGO, A NAZWY, KTÓRA
 *   ZOSTAŁA — kąt zajęty (Wieleń). DLATEGO POWIAT
 *   WYRZYSKI PODAJĘ JEDNYM ZDANIEM.
 * — ⚠⚠ ZERO OCALAŁEGO, KTÓRE DOSTAŁO NAJMNIEJSZĄ
 *   FUNKCJĘ — kąt zajęty (Sieraków).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ SZCZEGÓLNIE:
 *   ANI SŁOWA O TYM, ŻE NIEUDANE PIERWSZE PODEJŚCIE
 *   JEST OBJAWEM CZEGOKOLWIEK.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO MOTYWACYJNEGO TONU. Sekcja mówi
 *   „drugi raz jest normalny", nie „dasz radę".
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO (daty 1772 i 1818 PODAJĘ BEZ
 *   KONTEKSTU POLITYCZNEGO) · ZERO WĄTKU WYZNANIOWEGO ·
 *   ZERO WĄTKU MILITARNEGO · ZERO ALKOHOLU · ZERO
 *   POŻARÓW I POWODZI · ZERO BEZROBOCIA · ZERO HERBU ·
 *   ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta ani gminy.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby miejscowości w gminie.
 * — NIE PODAJĘ liczby 5 135 ani 14 325.
 * — NIE ZNAM przyczyny ponownego nadania praw
 *   w 1772 r.
 * — NIE TWIERDZĘ, że Wyrzysk przestał być miastem
 *   między 1565 a 1772 r.
 * — NIE WYBIERAM między „XV w.", 1565 i 1772.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wyrzysk leży w powiecie pilskim, liczy 5 071
 *   mieszkańców (GUS, 31.12.2024) na 4,1 km² i leży
 *   90 m n.p.m.; cała gmina miejsko-wiejska to 12 984
 *   osoby na 159 km², a inne źródła podają dla gminy
 *   inne liczby ludności,
 * — w strukturze gminy lasy zajmują 2 031 ha,
 *   a grunty rolne 11 622 ha,
 * — pierwsza wzmianka pochodzi z 1326 r.,
 * — według strony urzędu miasto otrzymało prawa
 *   miejskie na prawie magdeburskim w 1565 r.,
 *   a ponownie nadano mu prawa miejskie w 1772 r.;
 *   baza statystyczna datuje je na XV wiek,
 * — w latach 1744–1768 działały w Wyrzysku dwa place
 *   targowe, młyn, tartak i folusz,
 * — od 1818 do 1975 r. Wyrzysk był siedzibą powiatu,
 *   a od 1999 r. należy do powiatu pilskiego,
 * — gmina leży na Wysoczyźnie Krajeńskiej, jej
 *   południową granicę wyznacza Noteć, a przez gminę
 *   płynie Łobzonka; najwyższym punktem okolicy jest
 *   Dębowa Góra — 192 m n.p.m.,
 * — do Piły jest stąd 37 km, do Bydgoszczy 55 km,
 *   a koleją odpowiednio 39 i 48 km,
 * — w gminie leżą m.in. Osiek nad Notecią, Żuławka,
 *   Auguścin i Wyrzysk Skarbowy — odrębna wieś
 *   o 218 mieszkańcach (NSP 2021).
 */
export const WYRZYSK: CityContent = {
  slug: "wyrzysk",
  h1: "Thermomix Wyrzysk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wyrzysk — cena i prezentacja",
  seoDescription:
    "Thermomix w Wyrzysku w powiecie pilskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wyrzysk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wyrzysku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wyrzyska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Wyrzysk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prawa miejskie nadane dwa razy. W odstępie dwustu siedmiu lat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wyrzysku – jak wygląda prezentacja?",
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
      id: "nadane-dwa-razy",
      heading: "Nadane dwa razy",
      paragraphs: [
        "Na stronie urzędu w Wyrzysku, w jednym akapicie, stoją dwie rzeczy: że miasto „na prawach magdeburskich” powstało w 1565 roku, i że w 1772 roku nastąpiło „ponowne nadanie mu praw miejskich”. Nie potwierdzenie, nie odnowienie — ponowne nadanie. Dwieście siedem lat między jednym dokumentem a drugim. Baza statystyczna, dla porządku, datuje prawa miejskie Wyrzyska po prostu na piętnasty wiek.",
        "Dlaczego trzeba było wystawić dokument po raz drugi — nie wiem i nie będę zgadywać. Nie twierdzę też, że miasto w tym czasie przestało być miastem. Wiem tylko tyle, ile jest zapisane: nadano dwa razy.",
        "Piszę o tym, bo w kuchni drugie podejście jest najtrudniejszą rzeczą, jaką znam — i najbardziej niesłusznie obciążoną.",
        "Drugie podejście do gotowania po długiej przerwie. Drugie podejście do robienia zapasów, bo pierwszy raz skończył się wyrzuconym jedzeniem. Drugie podejście do jednego dania, które trzy razy nie wyszło. Drugie podejście do sprzętu, który stał rok w szafce.",
        "I zawsze przeszkodą nie jest sama rzecz. Przeszkodą jest wstyd za pierwsze podejście. Poczucie, że skoro raz nie wyszło, to zaczynanie od nowa jest przyznaniem się do czegoś. Że trzeba by najpierw wytłumaczyć — sobie albo domownikom — dlaczego wtedy się nie udało.",
        "Nie trzeba. W Wyrzysku po prostu wystawiono dokument drugi raz i miasto istnieje dalej, a nikt dziś nie pyta, co działo się w międzyczasie.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że przerwa nie unieważnia tego, co było przed nią. Tu chodzi o coś trochę innego — o to, że drugi start jest pełnoprawnym zdarzeniem sam z siebie, niezależnie od tego, jak skończył się pierwszy.",
        "Ruch jest jeden. Nie zaczynaj od rozliczania pierwszego podejścia. Zacznij od drugiego. Rozliczanie można zrobić kiedykolwiek albo nigdy, a od zaczynania od niego zwykle nie zaczyna się już nic.",
        "Uczciwie o drugiej stronie, bo to jest ważne i mówię to każdej osobie, która do mnie dzwoni. Jeśli drugie podejście ma wyglądać dokładnie tak jak pierwsze, skończy się tak samo. Coś musi być inne: skala — mniejsza, nie większa; warunki — inna pora dnia, inny dzień tygodnia; albo narzędzie. Samo postanowienie nie jest zmianą.",
        "I uczciwie o sprzęcie, bo tu mam interes. Thermomix jest zmianą narzędzia i tylko tym. Jeśli pierwsze podejście rozbiło się o to, że nie było kiedy stać przy garnku i pilnować, to zmienia sytuację naprawdę — temperaturę i mieszanie prowadzi sam, a wszystko dzieje się w jednym naczyniu. Jeśli rozbiło się o coś innego — o brak pomysłów, o to, że nikt w domu nie jada tego samego, o zmęczenie, które nie mija — urządzenie nie zmieni nic, i lepiej ustalić to przed zakupem.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wyrzysku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy to pierwsze podejście, czy kolejne. Przy kolejnym pytam tylko o jedno: co wtedy było najtrudniejsze — i to omijamy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wyrzysku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wyrzyska",
      paragraphs: [
        "Wyrzysk leży w powiecie pilskim, liczy 5 071 mieszkańców (GUS, 31.12.2024) na 4,1 kilometra kwadratowego i leży dziewięćdziesiąt metrów nad poziomem morza; gęstości nie podaję ani dla miasta, ani dla gminy, bo liczby ze źródeł nie zgadzają się z ilorazami. Cała gmina miejsko-wiejska to 12 984 osoby na stu pięćdziesięciu dziewięciu kilometrach kwadratowych — i tu uczciwie: inne źródła podają dla gminy inne liczby ludności, więc trzymam się GUS-u z datą. Lasy zajmują dwa tysiące trzydzieści jeden hektarów, a grunty rolne jedenaście tysięcy sześćset dwadzieścia dwa. Gmina leży na Wysoczyźnie Krajeńskiej, jej południową granicę wyznacza Noteć, a przez środek płynie Łobzonka; najwyższym punktem okolicy jest Dębowa Góra — sto dziewięćdziesiąt dwa metry. Pierwsza wzmianka o Wyrzysku pochodzi z 1326 roku, a w latach 1744–1768 działały tu dwa place targowe, młyn, tartak i folusz. Od 1818 do 1975 roku miasto było siedzibą powiatu; od 1999 należy do powiatu pilskiego. Do Piły jest trzydzieści siedem kilometrów, do Bydgoszczy pięćdziesiąt pięć.",
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

  districtsHeading: "Do których części Wyrzyska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — gmina podaje dziewiętnaście sołectw, między innymi Osiek nad Notecią, Żuławkę i Auguścin. Wszędzie bez dopłaty.",
    "Dwie uwagi. Praktyczna: obok miasta leży odrębna wieś Wyrzysk Skarbowy, około półtora kilometra dalej i z tym samym kodem pocztowym, więc przy umawianiu warto powiedzieć, o które z nich chodzi. I językowa: mówi się „do Wyrzyska” i „w Wyrzysku” — forma „z Wyrzysku” jest błędna, bo to miejscownik użyty w funkcji dopełniacza.",
  ],
  districts: [],

  nearbyHeading: "Poza Wyrzysk też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Piły, Ujścia, Łobżenicy, Szamocina, Gołańczy i Nakła nad Notecią — wszędzie bezpłatnie, tak samo jak w samym Wyrzysku.",
  ],
  nearbyTowns: ["Piła", "Ujście", "Łobżenica", "Szamocin", "Gołańcz", "Nakło nad Notecią"],

  about: blokOMnie("do Wyrzyska", "w Wyrzysku i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wyrzyska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie — gmina podaje dziewiętnaście sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Praktyczna: obok miasta leży odrębna wieś Wyrzysk Skarbowy z tym samym kodem pocztowym, więc przy umawianiu warto to rozróżnić. I językowa: poprawnie jest „do Wyrzyska” i „w Wyrzysku”, a nie „z Wyrzysku”; przymiotnik brzmi „wyrzyski”, ale powiat wyrzyski to jednostka historyczna — dziś Wyrzysk należy do powiatu pilskiego.",
    },
    ...faqWspolne("w Wyrzysku"),
    {
      question: "Raz już próbowałam zmienić sposób gotowania i nie wyszło. Czy jest sens próbować drugi raz?",
      answer:
        "Jest, i Wyrzysk jest tu dobrym argumentem. Strona urzędu podaje w jednym akapicie, że miasto na prawach magdeburskich powstało w 1565 roku i że w 1772 nastąpiło „ponowne nadanie praw miejskich” — dwieście siedem lat między jednym dokumentem a drugim. Dlaczego trzeba było wystawić go po raz drugi, nie wiadomo, i nikt dziś o to nie pyta. Przeszkodą w drugim podejściu rzadko jest sama rzecz; zwykle jest nią wstyd za pierwsze. Nie trzeba go rozliczać przed startem. Ale jedno warto: jeśli drugie podejście ma wyglądać dokładnie jak pierwsze, skończy się tak samo — coś musi być inne, najlepiej mniejsza skala albo inna pora dnia.",
    },
    {
      question: "Czy Thermomix rozwiąże problem, o który rozbiło się moje poprzednie podejście?",
      answer:
        "Zależy, o co się rozbiło, i wolę to ustalić przed zakupem. Jeśli przeszkodą było to, że nie ma kiedy stać przy garnku i pilnować — to zmienia sytuację naprawdę, bo temperaturę i mieszanie urządzenie prowadzi samo, a danie powstaje w jednym naczyniu, więc i zmywania jest mniej. Jeśli przeszkodą był brak pomysłów, to, że każdy w domu jada inaczej, albo zmęczenie, które nie mija — urządzenie tego nie ruszy i nie będę udawać, że ruszy. Dlatego przy umawianiu pytam wprost, co wtedy było najtrudniejsze.",
    },
  ],

  geo: { lat: 53.1524, lng: 17.268 },
};
