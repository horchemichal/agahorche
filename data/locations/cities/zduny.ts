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
 * ZDUNY — powiat krotoszyński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ ZDUNY W POWIECIE
 *   KROTOSZYŃSKIM NIE MA.
 *   ⚠⚠⚠ ALE ISTNIEJE CAŁKOWICIE ODRĘBNA GMINA WIEJSKA
 *   ZDUNY W WOJEWÓDZTWIE ŁÓDZKIM, POWIAT ŁOWICKI.
 *   TO NAJWAŻNIEJSZA KOLIZJA. WSPOMINAM OBOWIĄZKOWO.
 * MIASTO: 4 290 mieszkańców (GUS 31.12.2024), 6,2 km²,
 *   gęstość 691,9 os./km².
 *   ⚠ [ZW — 4 290 / 6,2 = 691,9. ZGODNOŚĆ CO DO
 *   SETNEJ (0,04) — NAJLEPSZA W TEJ FALI. PODAJĘ
 *   OBIE LICZBY OBOK SIEBIE.]
 *   ⚠ POWÓD ZGODNOŚCI: 6,2 km² to największa
 *   powierzchnia miejska w tej fali, więc zaokrąglenie
 *   waży najmniej. MOGĘ TO POWIEDZIEĆ.
 *   ⚠⚠ WYSOKOŚĆ PODANA JAKO PRZEDZIAŁ 119–158 m n.p.m.
 *   PODAJĘ JAKO PRZEDZIAŁ ALBO POMIJAM.
 * CAŁA GMINA: 7 597 osób, 85,0 km², gęstość
 *   90 os./km².
 *   ⚠ [ZW — 7 597 / 85,0 = 89,4 → 90. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠⚠ PUŁAPKA ŹRÓDŁOWA 1: strona geoportalu nosi
 *   tytuł „miasto Zduny", A PUBLIKUJE DANE GMINY
 *   (7 569 / 85 km² / 89,1). NIE MYLIĆ.
 *   ⚠⚠⚠ PUŁAPKA ŹRÓDŁOWA 2: polskawliczbach wymienia
 *   dla powiatu krotoszyńskiego „10 gmin", w tym Zduny
 *   dwa razy — jako gminę miejską i jako gminę wiejską.
 *   TO ARTEFAKT STATYSTYCZNY (GUS dzieli gminę
 *   miejsko-wiejską na część miejską i obszar wiejski).
 *   REALNIE POWIAT MA 6 GMIN. NIE PRZEPISUJĘ „10 GMIN".
 * SOŁECTWA: 6 SOŁECTW i 19 MIEJSCOWOŚCI (GUS
 *   Vademecum — jedno źródło, ale autorytatywne
 *   i wewnętrznie spójne).
 *   ⚠⚠ NAJMNIEJ SOŁECTW Z GMIN TEJ FALI.
 *   PODAJĘ LICZBĘ 6.
 *   ⚠⚠⚠ NAZW SOŁECTW NIE MAM [NP] — strona gminy
 *   zablokowana. NIE ZGADUJĘ, KTÓRE Z 19 MIEJSCOWOŚCI
 *   SĄ SOŁECTWAMI.
 *   MIEJSCOWOŚCI (polskawliczbach, 18 nazw): Baszków,
 *   Bestwin, Chachalnia, Dziewiąte, Helenopol,
 *   Katarzynów, Konarzew, Lila, Ostatni Grosz,
 *   Perzyce, Piaski, Rochy, Ruda, Siejew, Trzaski,
 *   Zielony Dąb.
 *   ⚠ 19 wobec 18 wymienionych — LICZBY MIEJSCOWOŚCI
 *   PODAJĘ ZA VADEMECUM, ale nazwy wymieniam
 *   przykładowo, ze słowem „między innymi".
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP]. Największą
 *   jednostką gminy jest samo miasto: 4 290 z 7 597.
 * ⚠ GEO: 51,6468 / 17,3782.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM, POTWIERDZONE
 *   CYTATAMI:
 *   M. ZDUNY · D. ZDUN (⚠⚠⚠ NIE „Zdunów"!) ·
 *   Ms. w ZDUNACH · N. Zdunami · C. Zdunom.
 *   Rodzaj niemęskoosobowy.
 *   ⚠⚠⚠ BŁĄD 1: dopełniacz „Zdunów" — przez analogię
 *   do „zdunów", czyli rzemieślników stawiających
 *   piece. NAJCZĘSTSZY. WSPOMINAM.
 *   ⚠⚠⚠ BŁĄD 2: traktowanie jako liczby pojedynczej —
 *   „do Zdunu", „w Zdunie", „miasto Zduna".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — formy „zduński"
 *   nie potwierdziłam cytatem [NP]. PISZĘ „w gminie
 *   Zduny" i „mieszkańcy Zdun".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ POCHODZENIE NAZWY — WBREW POWSZECHNEMU
 *   PRZEKONANIU:
 *   „nazwę miasta należy wiązać z imieniem ZDUNEK,
 *   a jej pierwotny zapis brzmiał Sdunki, Zdunków";
 *   „od XV w. używana jest obecna nazwa Zduny, wtedy
 *   w zapisie Sduny".
 *   CZYLI NAZWA NIE POCHODZI OD ZDUNÓW-GARNCARZY.
 *   PODAJĘ — ale ⚠⚠ NIE ROBIĘ Z TEGO KĄTU (figury
 *   nazewnicze zajęte: Kłodawa, Międzychód, Kostrzyn).
 *   MIEJSCE: część o dojazdach i FAQ językowe.
 *
 * ⚠⚠ KOLIZJE NAZW — NAJWIĘCEJ W TEJ FALI:
 *   — GMINA WIEJSKA ZDUNY, POWIAT ŁOWICKI, WOJ.
 *     ŁÓDZKIE — potwierdzone.
 *   — Zduny w mazowieckim: [NP], NIE TWIERDZĘ.
 *   — ⚠⚠ ZDUNY STARE, ZDUNY NOWE i SIENIUTOWO —
 *     trzy historyczne osiedla w obrębie dzisiejszego
 *     miasta. FAKTY OPISYWANE JAKO „w Zdunach
 *     Niemieckich" DOTYCZĄ CZĘŚCI MIASTA.
 *     ⚠⚠⚠ NAZWY „ZDUNY NIEMIECKIE" NIE UŻYWAM —
 *     wątek narodowościowy wykluczony. Piszę „trzy
 *     osiedla" i wymieniam wyłącznie ZDUNY STARE,
 *     ZDUNY NOWE i SIENIUTOWO.
 *   — PUŁAPKA NAZWY POSPOLITEJ: „zduny" to liczba
 *     mnoga od „zdun" — rzemieślnika stawiającego
 *     piece. Wyszukiwanie zwraca oferty kominkowe.
 *     WSPOMINAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — DWIE LOKACJE: 9 listopada 1261 r. (nieudana)
 *     i 1267 r. na prawie średzkim.
 *     ⚠⚠⚠ FIGURY „przerwa nie kasuje początku"
 *     (Trzcianka) I „nadane dwa razy" (Wyrzysk, TA SAMA
 *     FALA) ZAJĘTE. ⚠⚠⚠ DWÓCH LOKACJI NIE ROBIĘ KĄTEM
 *     ANI NIE ROZWIJAM — podaję obie daty jednym
 *     zdaniem w części o rodzinie i NIC Z NICH
 *     NIE WYCIĄGAM.
 *   — SCALENIE TRZECH OSIEDLI: dwie wersje roku —
 *     1761 (dwa źródła) i 1772 (dwa źródła), różnica
 *     11 lat. Wcześniej, w 1684 r., połączono dwa
 *     z nich.
 *     ⚠⚠⚠ FIGURA „scalone z trzech, o różnym wieku"
 *     ZAJĘTA (Koźmin Wielkopolski). PODAJĘ FAKT
 *     SCALENIA JEDNYM ZDANIEM, Z OBIEMA DATAMI,
 *     I NIE BUDUJĘ NA NIM KĄTU.
 *   — JARMARKI USTANOWIONE W 1518 R.
 *     ⚠⚠ DAT ŚWIĄT PATRONALNYCH NIE PODAJĘ — wątek
 *     wyznaniowy. Podaję tylko rok i to, że
 *     ustanowiono dwa jarmarki.
 *   — Utraty praw miejskich nie ustalono [NP].
 *   ⚠⚠⚠ RATUSZA (ok. 1684) NIE ROBIĘ KĄTEM — figura
 *     „instytucja młodsza od swoich ścian" zajęta
 *     (Puszczykowo). MOGĘ PODAĆ DATĘ.
 *   ⚠⚠⚠ CUKROWNI (1882–2003) NIE PODAJĘ — niepotrzebna,
 *     a wchodzi w wątek przemysłu spożywczego.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDNO MIEJSCE SKUPIŁO WIĘKSZOŚĆ
 *   JEDNEGO ZAJĘCIA:
 *   Pod koniec XVIII w. w Zdunach pracowało
 *   OK. 429 TKACZY, przy szacowanych OK. 600 W CAŁEJ
 *   WIELKOPOLSCE. W tym samym opracowaniu: 54 SZEWCÓW,
 *   a w 1772 r. „blisko 4000 dusz".
 *   ⚠⚠⚠ PROCENTU NIE LICZĘ I NIE PODAJĘ — liczba 600
 *   jest SZACUNKIEM z tego samego opracowania, więc
 *   iloraz dwóch liczb, z których jedna jest szacunkiem,
 *   dałby fałszywą precyzję. PODAJĘ OBIE LICZBY OBOK
 *   SIEBIE I MÓWIĘ WPROST, ŻE DRUGA JEST SZACUNKIEM.
 *   ⚠⚠ OBIE LICZBY POCHODZĄ Z JEDNEGO ŹRÓDŁA.
 *   MÓWIĘ TO W TEKŚCIE.
 *   FAKT WSPIERAJĄCY: „największy w Wielkopolsce zespół
 *   zabudowy małomiasteczkowej, składający się
 *   z 60 BAROKOWYCH DOMÓW" z XVII–XIX w. PODAJĘ.
 *
 * KĄT: JEDNO MIEJSCE SKUPIŁO WIĘKSZOŚĆ JEDNEGO
 * ZAJĘCIA
 * — o tym, że wąska specjalizacja jest pełnoprawną
 * umiejętnością, a nie brakiem szerokości. Kąt ze Zdun:
 * ok. 429 tkaczy w jednym miasteczku przy szacowanych
 * ok. 600 w całej Wielkopolsce.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pod koniec XVIII w. w Zdunach pracowało około
 *   429 tkaczy, przy szacowanych około 600 w całej
 *   Wielkopolsce, a miasto liczyło wtedy blisko
 *   4000 osób. TO JEST RDZEŃ,
 * — ⚠⚠ że obie liczby są z jednego opracowania,
 *   a druga jest szacunkiem, więc procentu nie liczę,
 * — że w tym samym mieście było wtedy 54 szewców,
 *   czyli ośmiokrotnie mniej niż tkaczy,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: repertuar dwóch
 *   albo trzech dań, robionych często i dobrze, jest
 *   umiejętnością, nie ubóstwem,
 * — ⚠⚠ ŻE PORÓWNUJEMY SIĘ DO SZEROKOŚCI, A NIE
 *   DO GŁĘBOKOŚCI — i to jedna z najbardziej
 *   niesprawiedliwych miar w kuchni,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz, co robisz częściej
 *   niż raz w miesiącu. To jest Twój zawód, nie brak
 *   pomysłów,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: skupienie ma koszt.
 *   Kiedy jedna rzecz przestaje działać — nie ma
 *   smaku, nie ma czasu, ktoś przestaje to jeść —
 *   nie ma czym jej podmienić. Dlatego jedno albo dwa
 *   dania „na zapas" są rozsądne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie poszerza
 *   repertuaru samo z siebie. Obniża koszt spróbowania
 *   trzeciej rzeczy, jeśli ktoś tego chce — a jeśli nie
 *   chce, dwa dania robione dobrze to zupełnie dość.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LINII BOCZNEJ — czy w ogóle mieć sprzęt
 *   do jednej rzeczy — kąt zajęty (Łasin). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam pytanie dotyczyło NARZĘDZIA do jednej czynności;
 *   tu chodzi o REPERTUAR — o to, ile różnych rzeczy
 *   trzeba umieć, żeby uznać, że się gotuje.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OPISANYCH TYLKO NAJWIĘKSZYCH — kąt zajęty
 *   (Wronki).
 * — ⚠⚠⚠ ZERO JEDNEJ POZYCJI, KTÓRA WAŻY WIĘCEJ NIŻ
 *   TRZY POZOSTAŁE — kąt zajęty (Jastrowie).
 *   ⚠⚠⚠ TO DRUGI BLISKI SĄSIAD: tam jedna pozycja
 *   w zestawieniu przeważała resztę; tu jedno miejsce
 *   skupiło większość jednego zajęcia w całym regionie.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO SCALONEGO Z TRZECH, O RÓŻNYM WIEKU —
 *   kąt zajęty (Koźmin Wielkopolski). DLATEGO SCALENIE
 *   TRZECH OSIEDLI PODAJĘ JEDNYM ZDANIEM.
 * — ⚠⚠⚠ ZERO NADANEGO DWA RAZY — kąt zajęty (Wyrzysk,
 *   TA SAMA FALA). DLATEGO DWÓCH LOKACJI 1261/1267
 *   NIE ROZWIJAM.
 * — ⚠⚠ ZERO INSTYTUCJI MŁODSZEJ OD SWOICH ŚCIAN —
 *   kąt zajęty (Puszczykowo).
 * — ⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR —
 *   kąt zajęty (Śmigiel). ⚠ UWAGA: tu też mam szacunek
 *   obok liczby twardej, ale NIE przeciwstawiam ich —
 *   obie są z jednego opracowania i obie traktuję
 *   ostrożnie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO SUGEROWANIA, ŻE WĄSKI REPERTUAR
 *   TO PROBLEM DO NAPRAWIENIA ZAKUPEM.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   NARODOWOŚCIOWEGO (nazwy „Zduny Niemieckie"
 *   NIE UŻYWAM) · ZERO WĄTKU WYZNANIOWEGO I ŚWIĘTYCH
 *   PATRONALNYCH · ZERO WĄTKU MILITARNEGO · ZERO
 *   ALKOHOLU · ZERO POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE LICZĘ procentu tkaczy w regionie.
 * — NIE TWIERDZĘ, że liczba 600 jest pewna.
 * — NIE PODAJĘ nazw sołectw.
 * — NIE PODAJĘ przymiotnika od nazwy miasta.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że nazwa pochodzi od zdunów-
 *   -garncarzy.
 * — NIE ROZSTRZYGAM, czy scalenie nastąpiło w 1761
 *   czy 1772 r.
 * — NIE TWIERDZĘ, że w mazowieckim są Zduny.
 * — NIE PRZEPISUJĘ „10 gmin" w powiecie krotoszyńskim.
 * — NIE PODAJĘ obiektów sakralnych ani cukrowni.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Zduny leżą w powiecie krotoszyńskim, liczą 4 290
 *   mieszkańców (GUS, 31.12.2024) na 6,2 km², czyli
 *   691,9 osoby na kilometr kwadratowy; cała gmina
 *   miejsko-wiejska to 7 597 osób na 85 km², czyli
 *   90 osób na kilometr, i obejmuje 6 sołectw
 *   oraz 19 miejscowości,
 * — pod koniec XVIII w. pracowało w Zdunach około
 *   429 tkaczy przy szacowanych około 600 w całej
 *   Wielkopolsce; było tam wtedy także 54 szewców,
 *   a w 1772 r. miasto liczyło blisko 4000 osób,
 * — w Zdunach zachował się największy w Wielkopolsce
 *   zespół zabudowy małomiasteczkowej — 60 barokowych
 *   domów z XVII–XIX w.,
 * — miasto lokowano dwukrotnie: 9 listopada 1261 r.
 *   i w 1267 r. na prawie średzkim,
 * — dzisiejsze miasto powstało ze scalenia trzech
 *   osiedli — Zdun Starych, Zdun Nowych i Sieniutowa;
 *   źródła podają dwie daty scalenia, 1761 i 1772 r.,
 *   a dwa z osiedli połączono już w 1684 r.,
 * — jarmarki ustanowiono w 1518 r., ratusz pochodzi
 *   z około 1684 r.,
 * — nazwa miasta wiąże się z imieniem Zdunek, a jej
 *   pierwotny zapis brzmiał Sdunki i Zdunków; dzisiejsza
 *   forma jest używana od XV w.,
 * — w gminie leżą m.in. Baszków, Konarzew, Perzyce,
 *   Chachalnia, Bestwin, Ruda, Rochy, Piaski,
 *   Katarzynów, Helenopol i Zielony Dąb,
 * — odrębna gmina wiejska Zduny leży w województwie
 *   łódzkim, w powiecie łowickim.
 */
export const ZDUNY: CityContent = {
  slug: "zduny",
  h1: "Thermomix Zduny – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zduny — cena i prezentacja",
  seoDescription:
    "Thermomix w Zdunach w powiecie krotoszyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zduny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zdunach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zdun z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Zduny"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Czterystu dwudziestu dziewięciu tkaczy w jednym miasteczku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zdunach – jak wygląda prezentacja?",
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
      id: "jedno-zajecie",
      heading: "Jedno miejsce skupiło większość jednego zajęcia",
      paragraphs: [
        "Pod koniec osiemnastego wieku w Zdunach pracowało około czterystu dwudziestu dziewięciu tkaczy. W całej Wielkopolsce szacuje się ich wtedy na około sześciuset. Miasto liczyło w 1772 roku blisko cztery tysiące osób.",
        "Zaznaczę od razu dwie rzeczy, bo inaczej byłoby nieuczciwie. Obie liczby pochodzą z jednego opracowania, a ta druga jest szacunkiem — dlatego nie dzielę jednej przez drugą i nie podam Wam procentu. Fałszywa precyzja jest gorsza niż jej brak. Ale nawet bez procentu obraz jest wyraźny: niespełna czterotysięczne miasteczko trzymało większą część jednego rzemiosła w całym regionie.",
        "Dla porównania, z tego samego opracowania: szewców było wtedy w Zdunach pięćdziesięciu czterech. Ośmiokrotnie mniej niż tkaczy. To miasto nie robiło wszystkiego po trochu. Robiło jedną rzecz i robiło jej bardzo dużo.",
        "Ślad został do dziś, tylko w innym materiale: w Zdunach zachował się największy w Wielkopolsce zespół zabudowy małomiasteczkowej — sześćdziesiąt barokowych domów z siedemnastego do dziewiętnastego wieku.",
        "Piszę o tym, bo w kuchni ocenia się nas po szerokości, a nie po głębokości — i to jest jedna z najbardziej niesprawiedliwych miar, jakie znam.",
        "„Ja umiem tylko kilka rzeczy.” Słyszę to co tydzień, prawie zawsze z zażenowaniem. I prawie zawsze chodzi o cztery, pięć dań, robionych od lat, wychodzących za każdym razem, znanych na pamięć, dopracowanych pod konkretny dom i konkretnych ludzi. To nie jest „tylko”. To jest zawód wykonywany od dziesięciu lat.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, czy warto mieć narzędzie do jednej czynności, i osobno o zestawieniu, w którym jedna pozycja ważyła więcej niż wszystkie pozostałe. Tu chodzi o coś trzeciego — o repertuar. O to, ile różnych rzeczy trzeba umieć, żeby uznać, że się w ogóle gotuje.",
        "Ruch jest jeden i zajmuje minutę. Wypisz, co robisz częściej niż raz w miesiącu. Nie co potrafisz — co faktycznie robisz. Ta lista jest krótka i ma być krótka. To Wasze rzemiosło, a nie dowód braku pomysłów.",
        "Uczciwie o drugiej stronie, bo skupienie ma cenę i Zduny ją w pewnym momencie zapłaciły. Kiedy jedna rzecz przestaje działać — znudziła się, zabrakło czasu, ktoś w domu przestał to jeść — nie ma czym jej podmienić i cały tydzień się zatrzymuje. Dlatego jedno albo dwa dania „na zapas”, robione rzadko, ale znane, są rozsądnym zabezpieczeniem. Nie dla szerokości. Dla spokoju.",
        "I uczciwie o sprzęcie. Thermomix nie poszerzy repertuaru sam z siebie i nie po to jest. Obniża koszt spróbowania trzeciej albo czwartej rzeczy, jeśli ktoś tego chce — bo nie trzeba przy tym stać, a danie powstaje w jednym naczyniu. Jeśli ktoś nie chce, dwa dania robione dobrze to zupełnie dość, i nie będę udawać, że jest inaczej, żeby sprzedać urządzenie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zdunach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, które dwa albo trzy dania robicie najczęściej. Zaczynamy od nich — a nie od czegoś, co ma zrobić wrażenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zdunach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Zdun",
      paragraphs: [
        "Zduny leżą w powiecie krotoszyńskim, liczą 4 290 mieszkańców (GUS, 31.12.2024) na 6,2 kilometra kwadratowego, czyli sześćset dziewięćdziesiąt dwie osoby na kilometr — i obie liczby podaję bez zastrzeżeń, bo zgadzają się z ilorazem co do setnej części; przy największej powierzchni miejskiej w tej okolicy zaokrąglenie waży najmniej. Cała gmina miejsko-wiejska to 7 597 osób na osiemdziesięciu pięciu kilometrach kwadratowych, czyli dziewięćdziesiąt osób na kilometr, i obejmuje sześć sołectw oraz dziewiętnaście miejscowości — najmniej sołectw z gmin, o jakich pisałam w tej okolicy. Miasto lokowano dwukrotnie: 9 listopada 1261 roku i w 1267 na prawie średzkim. Dzisiejsze Zduny powstały ze scalenia trzech osiedli — Zdun Starych, Zdun Nowych i Sieniutowa — a źródła podają dwie daty tego scalenia, 1761 i 1772 rok; dwa z osiedli połączono już w 1684. Jarmarki ustanowiono w 1518 roku, a ratusz pochodzi z około 1684. W gminie leżą między innymi Baszków, Konarzew, Perzyce, Chachalnia, Bestwin, Ruda, Rochy i Piaski.",
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

  districtsHeading: "Do których części Zdun dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — także do części dawniej odrębnych, czyli Zdun Starych, Zdun Nowych i Sieniutowa — i do wszystkich wsi w gminie: Baszkowa, Konarzewa, Perzyc, Chachalni, Bestwina, Rudy, Rochów, Piasków, Katarzynowa, Helenopola i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa, bo nazwa jest podstępna: Zduny występują tylko w liczbie mnogiej, a dopełniacz brzmi „Zdun”, nie „Zdunów” — mówi się „do Zdun” i „w Zdunach”. Nazwa nie pochodzi przy tym od zdunów stawiających piece, choć tak się powszechnie sądzi: wiąże się z imieniem Zdunek, a najstarsze zapisy brzmiały Sdunki i Zdunków. I praktyczna: odrębna gmina Zduny jest też w województwie łódzkim, w powiecie łowickim, więc przy umawianiu warto dopowiedzieć powiat krotoszyński.",
  ],
  districts: [],

  nearbyHeading: "Poza Zduny też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Krotoszyna, Sulmierzyc, Kobylina, Odolanowa, Milicza i Rawicza — wszędzie bezpłatnie, tak samo jak w samych Zdunach.",
  ],
  nearbyTowns: ["Krotoszyn", "Sulmierzyce", "Kobylin", "Odolanów", "Milicz", "Rawicz"],

  about: blokOMnie("do Zdun", "w Zdunach i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zdun bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: nazwa występuje tylko w liczbie mnogiej, a dopełniacz brzmi „Zdun”, nie „Zdunów” — poprawnie jest „do Zdun” i „w Zdunach”, a nie „do Zdunu” ani „w Zdunie”. I praktyczna: odrębna gmina Zduny leży też w województwie łódzkim, w powiecie łowickim, więc przy umawianiu warto dopowiedzieć powiat krotoszyński. Przymiotnika od nazwy miasta świadomie nie używam, bo nie udało mi się go potwierdzić w żadnym źródle.",
    },
    ...faqWspolne("w Zdunach"),
    {
      question: "Umiem zrobić tylko kilka dań. Czy to znaczy, że nie umiem gotować?",
      answer:
        "Nie, i Zduny są tu dobrym argumentem. Pod koniec osiemnastego wieku pracowało w nich około czterystu dwudziestu dziewięciu tkaczy, przy szacowanych około sześciuset w całej Wielkopolsce — a szewców było wtedy w mieście pięćdziesięciu czterech, ośmiokrotnie mniej. Obie liczby są z jednego opracowania i ta o regionie jest szacunkiem, więc nie liczę z nich procentu, ale obraz jest jasny: niespełna czterotysięczne miasteczko nie robiło wszystkiego po trochu, tylko jedną rzecz i bardzo dużo. Cztery czy pięć dań robionych od lat, wychodzących za każdym razem i dopasowanych do konkretnego domu to rzemiosło, nie „tylko”. Jedno zastrzeżenie: skupienie ma koszt — kiedy jedna rzecz przestaje działać, nie ma czym jej podmienić, więc jedno danie „na zapas” jest rozsądne.",
    },
    {
      question: "Czy Thermomix sprawi, że będę gotować większą różnorodność?",
      answer:
        "Może, ale nie sam z siebie i nie dlatego, że tak obiecuję. Robi jedno: obniża koszt spróbowania czegoś nowego, bo przy gotowaniu nie trzeba stać i pilnować, a danie powstaje w jednym naczyniu, więc nieudana próba kosztuje mniej wysiłku i mniej zmywania. Jeśli macie ochotę na trzecie i czwarte danie, to realnie pomaga. Jeśli nie macie — dwa dania robione dobrze to zupełnie dość i nie widzę powodu, żeby przekonywać Was inaczej.",
    },
  ],

  geo: { lat: 51.6468, lng: 17.3782 },
};
