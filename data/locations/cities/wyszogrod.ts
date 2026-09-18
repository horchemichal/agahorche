import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * WYSZOGRÓD — powiat płocki, woj. mazowieckie.
 * MIASTO 2 393 (GUS 31.12.2024), 13,0 km², 184,5 os./km².
 * Gmina miejsko-wiejska: 5 180 osób, 95,7 km², 16 sołectw.
 * Leży na wysokiej, około trzydziestometrowej skarpie
 * prawego brzegu Wisły.
 *
 * ⚠⚠⚠ REKORDOWE ZAWYŻENIE W CAŁEJ SERII: strona Starostwa
 *   Powiatowego w Płocku podaje dla gminy Wyszogród
 *   „7 411 osób" i 97,9 km² — to ZAWYŻENIE O 43% wobec GUS.
 *   NIE UŻYWAĆ. Obowiązuje 5 180. TWARDA GRANICA.
 * ⚠ Brief podawał „ok. 2,6 tys." dla miasta — też za dużo.
 *   Realnie 2 393.
 *
 * ⚠⚠ HOMONIMY — NAJWIĘCEJ W CAŁEJ SERII. „Wyszogród"
 *   (gród na wyszu, czyli na wysokości) był nazwą typową
 *   dla grodów słowiańskich, stąd ich mnogość:
 * — WYSZOGRÓD — dawny gród i dzisiejsza dzielnica BYDGOSZCZY,
 * — WYSZOGRÓD w woj. DOLNOŚLĄSKIM (gmina Oleśnica),
 * — WYSZOGRÓD w woj. ŚWIĘTOKRZYSKIM,
 * — ⚠ WYSZOGRÓD ≠ WYSZKÓW (powiat wyszkowski, nad Bugiem) —
 *   to zupełnie inne miasto i najczęstszy błąd.
 *   ⚠ ZAWSZE „Wyszogród nad Wisłą" albo „w powiecie
 *   płockim". FAQ TO ROZRÓŻNIA. TWARDA GRANICA.
 * Odmiana: „do Wyszogrodu", „w Wyszogrodzie",
 *   „wyszogrodzki" (potwierdzone nazwą instytucji:
 *   Muzeum Wisły Środkowej i Ziemi Wyszogrodzkiej).
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM JEJ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1065 r. pierwsza wzmianka; PRAWA MIEJSKIE 1398 R.
 *   od księcia Janusza I,
 * — XV–XVI w. złoty wiek: miasto stało się ZNACZĄCYM
 *   OŚRODKIEM SUKIENNICTWA NA MAZOWSZU; około pięćdziesięciu
 *   kupców zajmowało się handlem zbożem; około trzech tysięcy
 *   mieszkańców w XVI w.,
 * — miasto portowe i handlowe; Wisłą spławiano MATERIAŁY
 *   BUDOWLANE, SÓL I ŻELAZO; od połowy XIX w. regularna
 *   komunikacja parowa, pasażerska i towarowa,
 *   ⚠ KĄT „SÓL W GOTOWANIU" JEST ZAJĘTY (inowroclaw.ts) —
 *   sól podaję WYŁĄCZNIE jako towar spławiany,
 * — ⚠⚠ PODSTAWA KĄTA — MIĘDZYWOJNIE: „1112 sklepów
 *   i zakładów rzemieślniczych, CZTERY MŁYNY,
 *   MŁYN-KASZARNIA, browar, tartak i OLEJARNIA".
 *   ⚠ POTWIERDZONE DWOMA NIEZALEŻNYMI ŹRÓDŁAMI.
 *   ⚠ BROWARU NIE WYMIENIAM — ZERO TEMATU ALKOHOLU.
 *   ⚠ KĄT „OLEJE — KTÓRY DO CZEGO" JEST ZAJĘTY
 *   (szepietowo.ts), a „WYTŁOKI" (nasielsk.ts) też —
 *   OLEJARNIĘ PODAJĘ JAKO FAKT. TEMATEM JEST KASZARNIA.
 * — DREWNIANY MOST przez Wisłę: sześćdziesiąt przęseł,
 *   około 1,3 km długości, powstał w latach 1916–1917,
 *   rozebrany w 1999 r. po oddaniu nowego mostu stalowego.
 *   ⚠⚠ MOST POWSTAŁ JAKO INWESTYCJA WOJSKOWA. OPISUJĘ
 *   WYŁĄCZNIE KONSTRUKCJĘ I DŁUGOŚĆ, NIGDY GENEZĘ
 *   ANI BUDOWNICZYCH. TWARDA GRANICA.
 *   ⚠ ROZBIEŻNOŚĆ: 1285 m i 1916 r. kontra „ok. 1300 m"
 *   i 1917 r. PISZĘ „około 1,3 km" i „lata 1916–1917".
 *   ⚠ TEZY, ŻE BYŁ NAJDŁUŻSZYM DREWNIANYM MOSTEM W EUROPIE,
 *   NIE ZWERYFIKOWANO — NIE PODAJĘ JEJ.
 * ⚠ KOMORY CELNEJ NIE POTWIERDZONO mimo ukierunkowanego
 *   szukania — NIE PISZĘ O NIEJ.
 * ⚠ DNI TARGOWYCH I DAT JARMARKÓW NIE USTALONO.
 *
 * ZABYTKI I OBIEKTY: Muzeum Wisły Środkowej i Ziemi
 * Wyszogrodzkiej przy Rynku — zbiory o żegludze, handlu
 * i obyczajach ludzi środkowej Wisły, w tym SIECI RYBACKIE,
 * WIKLINOWE KOSZE i łodzie. Góra Zamkowa — miejsce grodu
 * Konrada Mazowieckiego. Stary Rynek i historyczny układ
 * urbanistyczny, bulwar i umocniona skarpa wiślana.
 * W pobliżu Skansen Osadnictwa Nadwiślańskiego
 * w Wiączeminie Polskim.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: brak wpisu z gminy
 *   Wyszogród. ⚠ PUŁAPKA: „kiełbasa tumska" i „baleron
 *   płocki" (oba 20.09.2023) NIE POCHODZĄ z Wyszogrodu —
 *   Tum to wieś pod Łęczycą, a „płocki" odnosi się do Płocka.
 *   NIE PRZYPISUJĘ ICH. TWARDA GRANICA.
 * ⚠ WYKAZ SOŁECTW POCHODZI Z AGREGATORA, NIE ZE STATUTU —
 *   podaję tylko kilka nazw przykładowo. Osiedli w mieście
 *   nie ustalono — districts PUSTE.
 *
 * KĄT: ŁUSKA I OTRĘBY — co się zdejmuje z ziarna i co przez
 * to znika.
 * Kąt od wyszogrodzkiego młyna-kaszarni. Kaszarnia to zakład,
 * który obtłukuje ziarno z łuski — czyli wykonuje ten jeden
 * etap, o którym w kuchni nikt nie myśli, a który decyduje
 * o wszystkim, co potem robimy z kaszą, ryżem i mąką.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w międzywojennym Wyszogrodzie działały cztery młyny
 *   i osobno młyn-kaszarnia, a obok tartak i olejarnia,
 * — ŻE KASZARNIA TO ZAKŁAD, KTÓRY OBTŁUKUJE ZIARNO Z ŁUSKI —
 *   i że ten etap dzieje się zawsze poza domem, więc nikt
 *   o nim nie myśli,
 * — ⚠⚠ ŻE KAŻDE ZIARNO MA TRZY WARSTWY I TO ONE TŁUMACZĄ
 *   RÓŻNICE, KTÓRYCH NIKT NIE UMIE WYJAŚNIĆ:
 *   — ŁUSKA, twarda i niejadalna, zdejmowana zawsze,
 *   — OTRĘBY, czyli okrywa ziarna — to ona decyduje o barwie
 *     i o tym, ile ziarno pochłania wody,
 *   — ZARODEK, w którym jest tłuszcz.
 *   TO JEST RDZEŃ TEKSTU,
 * — ⚠⚠ ŻE IM WIĘCEJ ZDJĘTO, TYM SZYBCIEJ SIĘ GOTUJE I TYM
 *   DŁUŻEJ DAJE SIĘ PRZECHOWYWAĆ, a im mniej — tym dłużej
 *   się gotuje i tym szybciej jełczeje. Wszystko, co dalej
 *   następuje, jest konsekwencją tego jednego zdania,
 * — ŻE DLATEGO BIAŁY RYŻ I DROBNA KASZA GOTUJĄ SIĘ KRÓTKO,
 *   a ziarno pełne wymaga więcej wody, więcej czasu
 *   i często namoczenia,
 * — ⚠⚠ ŻE MĄKA PEŁNOZIARNISTA I MĄKA RAZOWA JEŁCZEJĄ —
 *   bo mają w sobie tłuszcz z zarodka. Biała mąka leży
 *   w szafce miesiącami, pełnoziarnista nie. TO JEST
 *   NAJBARDZIEJ UŻYTECZNA RZECZ W CAŁYM TEKŚCIE,
 *   bo prawie nikt tego nie wie i prawie każdy ma w domu
 *   starą paczkę,
 * — ŻE POZNAJE SIĘ TO PO ZAPACHU — zjełczała mąka pachnie
 *   ostro i kleisto, jak stare orzechy,
 * — ŻE W WYPIEKACH PEŁNE ZIARNO PIJE WIĘCEJ WODY I DAJE
 *   CIĘŻSZY WYNIK, więc zamiana mąki jeden do jednego
 *   prawie nigdy nie działa ⚠ BEZ PODAWANIA PROPORCJI,
 * — ŻE KASZY NIE PŁUCZE SIĘ Z NAWYKU, TYLKO Z POWODU:
 *   spłukuje się z niej pył i drobiny z obtłukiwania,
 *   przez które gotowana kasza bywa kleista,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix zmieli ziarno na mąkę,
 *   i to jest realna funkcja — ale MIELE CAŁE ZIARNO,
 *   czyli robi mąkę pełnoziarnistą. NIE ODDZIELI OTRĄB
 *   ANI ZARODKA, bo to jest robota młyna z sitami, a nie
 *   noża. Świeżo zmielona mąka ma za to jedną przewagę:
 *   nie leżała.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO o błonniku, o tym, że pełne ziarno jest „zdrowsze",
 *   o indeksie glikemicznym i o dietach. To jest dziedzina
 *   dietetyków. Mówię WYŁĄCZNIE o CZASIE GOTOWANIA,
 *   ILOŚCI WODY, TRWAŁOŚCI I SMAKU. TWARDA GRANICA —
 *   NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ⚠⚠ ZERO TEMATU GLUTENU I DIET BEZGLUTENOWYCH.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZELICZNIKÓW MĄK.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   I O PRZECHOWYWANIU — mówię o ZAPACHU i o tym,
 *   że tłuszcz jełczeje, nie o terminach.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ZERO TEMATU ALKOHOLU (browar).
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO bitwy nad Bzurą i wszystkiego, co z nią
 *   związane. Muzeum ma w zbiorach broń z tej bitwy —
 *   opisując muzeum, wymieniam WYŁĄCZNIE sieci, kosze
 *   i łodzie. TWARDA GRANICA.
 * — ⚠⚠ ZERO genezy mostu drewnianego i jego budowniczych.
 * — ZERO zniszczeń II wojny światowej.
 * — ZERO historii społeczności żydowskiej miasta;
 *   opisując muzeum, NIE piszę, w czyich dawnych
 *   zabudowaniach się mieści.
 * — ZERO zniszczenia zamku w XVII w. i rozbiórki z 1798 r. —
 *   o Górze Zamkowej piszę jako o miejscu dawnego grodu.
 * — ZERO bezrobocia i braku inwestorów.
 * — ZERO spadku liczby ludności.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „KASZA" (Dukla) dotyczy KASZY JAKO SUROWCA W KUCHNI.
 *   TUTAJ chodzi o WARSTWY ZIARNA i o to, co się z nich
 *   zdejmuje — dotyczy tak samo ryżu i mąki.
 * — „MĄKA I MIELENIE" (Tarnogród) dotyczy MIELENIA
 *   JAKO CZYNNOŚCI.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy TRZYMANIA ZAPASÓW.
 * — „OBIERKI, SKÓRKI I ŁODYGI" (Wieruszów) dotyczy WARZYW
 *   I OWOCÓW.
 * — „PĘCZNIENIE" (Mszczonów) dotyczy OBJĘTOŚCI.
 * — „RYŻ" (Małogoszcz) dotyczy PROPORCJI PRZY GOTOWANIU.
 * — „OLEJE" (Szepietowo) i „WYTŁOKI" (Nasielsk) dotyczą
 *   OLEJU.
 * TUTAJ chodzi o TO, CO ZDJĘTO Z ZIARNA, ZANIM TRAFIŁO
 * DO TOREBKI — i co z tego wynika w szafce i w garnku.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE UŻYWAM liczby ludności ze strony starostwa.
 * — NIE MYLĘ Wyszogrodu z Wyszkowem ani z innymi
 *   Wyszogrodami.
 * — NIE PISZĘ o genezie mostu ani o tym, kto go zbudował.
 * — NIE TWIERDZĘ, że był najdłuższym drewnianym mostem
 *   w Europie.
 * — NIE PISZĘ o komorze celnej.
 * — NIE PRZYPISUJĘ Wyszogrodowi kiełbasy tumskiej
 *   ani baleronu płockiego.
 * — NIE ORZEKAM niczego o wartości odżywczej ziarna.
 * — NIE PODAJĘ pełnego wykazu sołectw ani osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wyszogród liczy 2 393 mieszkańców (GUS, 31.12.2024)
 *   na 13 km², a cała gmina miejsko-wiejska 5 180 osób
 *   na 95,7 km²; miasto leży na wysokiej, około
 *   trzydziestometrowej skarpie prawego brzegu Wisły,
 * — pierwsza wzmianka pochodzi z 1065 roku, a prawa miejskie
 *   nadał miastu w 1398 roku książę Janusz I,
 * — w XV i XVI wieku Wyszogród stał się znaczącym ośrodkiem
 *   sukiennictwa na Mazowszu, około pięćdziesięciu tutejszych
 *   kupców zajmowało się handlem zbożem, a miasto liczyło
 *   wtedy około trzech tysięcy mieszkańców; jako port
 *   spławiano stąd Wisłą materiały budowlane, sól i żelazo,
 *   a od połowy XIX wieku kursowała regularna komunikacja
 *   parowa, pasażerska i towarowa,
 * — w okresie międzywojennym działało w mieście tysiąc sto
 *   dwanaście sklepów i zakładów rzemieślniczych, cztery
 *   młyny, osobny młyn-kaszarnia, tartak i olejarnia,
 * — przez Wisłę prowadził drewniany most o sześćdziesięciu
 *   przęsłach i długości około 1,3 kilometra, powstały
 *   w latach 1916–1917 i rozebrany w 1999 roku po oddaniu
 *   nowego mostu stalowego,
 * — przy Rynku działa Muzeum Wisły Środkowej i Ziemi
 *   Wyszogrodzkiej, gromadzące zbiory o żegludze, handlu
 *   i obyczajach ludzi środkowej Wisły, w tym sieci rybackie,
 *   wiklinowe kosze i łodzie; w mieście zachowały się Góra
 *   Zamkowa — miejsce dawnego grodu — Stary Rynek
 *   z historycznym układem urbanistycznym oraz bulwar
 *   i umocniona skarpa wiślana.
 */
export const WYSZOGROD: CityContent = {
  slug: "wyszogrod",
  h1: "Thermomix Wyszogród – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wyszogród — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Wyszogrodzie nad Wisłą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wyszogród — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wyszogrodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wyszogrodu nad Wisłą z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Wyszogród"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mąka pełnoziarnista jełczeje. Biała leży miesiącami — i to nie przypadek.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wyszogrodzie – jak wygląda prezentacja?",
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
      id: "luska",
      heading: "Co zdjęto z ziarna, zanim trafiło do torebki",
      paragraphs: [
        "W międzywojennym Wyszogrodzie działały cztery młyny — i osobno od nich młyn-kaszarnia. Obok tartak i olejarnia, a w całym mieście tysiąc sto dwanaście sklepów i zakładów rzemieślniczych.",
        "Kaszarnia to zakład, który obtłukuje ziarno z łuski. Zwróciłam na nią uwagę, bo to jest ten jeden etap, który zawsze dzieje się poza domem — i o którym przez to nikt w kuchni nie myśli, choć decyduje o niemal wszystkim, co potem robimy z kaszą, ryżem i mąką.",
        "Rzecz wygląda tak. Ziarno ma trzy warstwy. Na zewnątrz łuskę — twardą i niejadalną, zdejmowaną zawsze. Pod nią otręby, czyli okrywę ziarna, która odpowiada za ciemniejszą barwę i za to, ile ziarno pobiera wody. I w środku zarodek, w którym jest tłuszcz.",
        "Z tego wynika jedno zdanie, z którego bierze się cała reszta: im więcej z ziarna zdjęto, tym szybciej się gotuje i tym dłużej daje się przechowywać. Im mniej zdjęto, tym dłużej się gotuje i tym szybciej jełczeje.",
        "Dlatego biały ryż i drobna kasza są gotowe w kilkanaście minut, a ziarno pełne potrzebuje więcej wody, więcej czasu, a często też wcześniejszego namoczenia. To nie jest kwestia gatunku ani ceny — to kwestia tego, ile warstw zostało.",
        "A teraz rzecz, którą uważam za najbardziej użyteczną na tej stronie, bo prawie nikt jej nie wie, a prawie każdy ma w domu tę jedną starą paczkę.",
        "Mąka pełnoziarnista i mąka razowa jełczeją. Mają w sobie tłuszcz z zarodka, a tłuszcz się psuje. Biała mąka leży w szafce miesiącami i nic jej nie jest, bo tego tłuszczu w niej po prostu nie ma — został zmielony osobno i odsiany. To dlatego ciasto z dawno kupionej razówki potrafi mieć dziwny, gorzkawy posmak, którego nie da się z niczym powiązać.",
        "Poznaje się to po zapachu. Zjełczała mąka pachnie ostro i trochę kleiście — jak stare orzechy. Warto powąchać paczkę, zanim się ją wsypie, bo po upieczeniu jest już za późno.",
        "Przy wypiekach jest jeszcze jedna konsekwencja: pełne ziarno pije więcej wody i daje cięższy wynik. Zamiana białej mąki na pełnoziarnistą jeden do jednego prawie nigdy nie działa — ciasto wychodzi suche i zbite, a wina zwykle spada na przepis.",
        "I ostatnia rzecz, drobna, ale praktyczna: kaszy nie płucze się z nawyku ani dla czystości. Spłukuje się z niej pył i drobiny powstałe przy obtłukiwaniu — czyli dokładnie to, co zostaje po pracy kaszarni. To one sprawiają, że gotowana kasza bywa kleista, choć wszystko inne zrobiono dobrze.",
        "Na koniec o sprzęcie. Thermomix zmieli suche ziarno na mąkę i jest to realna, działająca funkcja — nie chwyt reklamowy.",
        "Warto tylko wiedzieć, co dokładnie z tego wychodzi: urządzenie miele całe ziarno, więc robi mąkę pełnoziarnistą. Nie oddzieli otrąb ani zarodka, bo to jest robota młyna z sitami, a nie noża, który wszystko rozbija na drobno. Świeżo zmielona mąka ma za to jedną przewagę, której nie kupi się w sklepie: nie leżała.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wyszogrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć mielenie ziarna na mąkę na żywo — powiedz to przy umawianiu. To jedna z tych funkcji, o których lepiej zobaczyć, niż przeczytać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wyszogrodzie"),
    sekcjaRaty("w Wyszogrodzie"),
    {
      id: "rodzina",
      heading: "Thermomix dla wyszogrodzkiej rodziny",
      paragraphs: [
        "Wyszogród liczy blisko dwa i pół tysiąca mieszkańców na trzynastu kilometrach kwadratowych, a cała gmina miejsko-wiejska ponad pięć tysięcy osób na dziewięćdziesięciu sześciu kilometrach. Miasto leży na wysokiej, około trzydziestometrowej skarpie prawego brzegu Wisły. Pierwsza wzmianka pochodzi z 1065 roku, a prawa miejskie nadał mu w 1398 roku książę Janusz I. W XV i XVI wieku Wyszogród stał się znaczącym ośrodkiem sukiennictwa na Mazowszu, około pięćdziesięciu tutejszych kupców zajmowało się handlem zbożem, a miasto liczyło wtedy około trzech tysięcy mieszkańców; jako port spławiano stąd Wisłą materiały budowlane, sól i żelazo, a od połowy XIX wieku kursowała regularna komunikacja parowa. W okresie międzywojennym działało tu tysiąc sto dwanaście sklepów i zakładów rzemieślniczych, cztery młyny, osobny młyn-kaszarnia, tartak i olejarnia. Przez Wisłę prowadził drewniany most o sześćdziesięciu przęsłach i długości około 1,3 kilometra, powstały w latach 1916–1917 i rozebrany w 1999 roku po oddaniu nowego mostu stalowego. Przy Rynku działa Muzeum Wisły Środkowej i Ziemi Wyszogrodzkiej, gromadzące zbiory o żegludze, handlu i obyczajach ludzi środkowej Wisły — w tym sieci rybackie, wiklinowe kosze i łodzie. Zachowały się też Góra Zamkowa, miejsce dawnego grodu, Stary Rynek z historycznym układem urbanistycznym oraz bulwar i umocniona skarpa wiślana.",
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

  districtsHeading: "Do których części Wyszogrodu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od Starego Rynku i okolic Góry Zamkowej po domy przy skarpie i wylotach dróg. Dojeżdżam też do wsi w gminie, w tym do Rębowa, Kobylnik i Drwał.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Wyszogród też przyjadę",
  nearbyParagraphs: [
    "Płock, Czerwińsk nad Wisłą, Bodzanów, Mała Wieś, Sochaczew i Płońsk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Płock", "Sochaczew", "Płońsk", "Gąbin"],

  about: blokOMnie("do Wyszogrodu", "w Wyszogrodzie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wyszogrodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Wyszogród nad Wisłą w powiecie płockim — nie o Wyszków nad Bugiem i nie o inne Wyszogrody, których w Polsce jest kilka.",
    },
    ...faqWspolne("w Wyszogrodzie"),
    {
      question: "Dlaczego mąka pełnoziarnista psuje się szybciej niż biała?",
      answer:
        "Bo ma w sobie tłuszcz z zarodka ziarna, a tłuszcz jełczeje. Biała mąka tego tłuszczu nie ma — został odsiany razem z otrębami — więc leży w szafce miesiącami. Zjełczałą mąkę poznaje się po zapachu: jest ostry i trochę kleisty, jak stare orzechy. Warto powąchać paczkę przed użyciem, bo po upieczeniu jest za późno.",
    },
    {
      question: "Dlaczego jedne kasze gotują się krótko, a inne długo?",
      answer:
        "Decyduje to, ile warstw zdjęto z ziarna. Im więcej usunięto łuski i otrąb, tym szybciej się gotuje i tym dłużej daje się przechowywać; im mniej, tym dłużej trzeba gotować i tym więcej wody ziarno pobiera. Warto też płukać kaszę — nie dla czystości, tylko żeby spłukać pył po obtłukiwaniu, przez który bywa kleista.",
    },
    {
      question: "Czy Thermomix zmieli ziarno na mąkę?",
      answer:
        "Tak i jest to realna funkcja. Trzeba tylko wiedzieć, co z niej wychodzi: urządzenie miele całe ziarno, więc robi mąkę pełnoziarnistą. Nie oddzieli otrąb ani zarodka, bo to robota młyna z sitami, a nie noża. Świeżo zmielona mąka ma za to przewagę, której nie kupi się w sklepie — nie leżała.",
    },
  ],

  geo: { lat: 52.3918, lng: 20.1901 },
};
