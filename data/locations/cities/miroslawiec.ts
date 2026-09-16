import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * MIROSŁAWIEC — powiat wałecki, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 010 mieszkańców (GUS 31.12.2024), 2,4 km²,
 *   gęstość 1 249,0 os./km².
 * CAŁA GMINA: 5 293 osoby, 203,4 km².
 * ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠⚠⚠ pomeranica.pl podaje „gęstość w gminie 1 442
 *   osoby na km²" — TO JEST EWIDENTNY BŁĄD (5 293 / 203,4
 *   = 26 os./km²). NIE CYTUJĘ. Podaje też 3 072
 *   mieszkańców z 2012 r. — ODRZUCONE.
 * ⚠ GEO: 53,3517 / 16,0836.
 *
 * ⚠⚠ HOMONIM: Mirosławiec ≠ MIROSŁAWICE (dolnośląskie)
 *   ≠ MIROSŁAW (imię — wyszukiwarki podstawiają odmianę
 *   imienia). ROZGRANICZAM W FAQ.
 *
 * ⚠⚠⚠ ODMIANA — NAJTRUDNIEJSZA W CAŁEJ FALI:
 *   E RUCHOME. „w MIROSŁAWCU", „do MIROSŁAWCA".
 *   ⚠⚠⚠ NIGDY „do Mirosławieca" ANI „w Mirosławiecu".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma potwierdzona
 *   pośrednio w nazwach urzędowych (Gmina Mirosławiec,
 *   Nadleśnictwo Mirosławiec).
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Mirosławca".
 *
 * ⚠⚠⚠ ETYKA — TEMAT DOMINUJĄCY, KTÓRY POMIJAM W CAŁOŚCI:
 *   MIROSŁAWIEC JEST W WYNIKACH WYSZUKIWANIA PRZEDE
 *   WSZYSTKIM MIASTEM LOTNISKA WOJSKOWEGO (Mirosławiec
 *   Górny). ⚠⚠⚠ NIE UŻYWAM ANI JEDNEGO FAKTU Z TEGO
 *   OBSZARU. Ani lotniska, ani jednostki, ani osiedla
 *   Mirosławiec Górny. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA SPRZECZNE — 1303
 *   (pomeranica.pl) ALBO 2 LUTEGO 1314 (okwm.pl,
 *   dokument Henryka i Jana von Wedlów, nazwa
 *   „Nuve Vredeland"). ⚠⚠⚠ PISZĘ „NA POCZĄTKU XIV W."
 *   I NIE WYBIERAM DATY.
 * — 1569 — Jerzy von Wedel przekazuje miasto zięciowi
 *   Henrykowi von Blanckenburgowi.
 * — 9 maja 1719 — wielki pożar; spłonęły wszystkie
 *   budynki, zniszczony ratusz i zamek Wedlów.
 *   ⚠ PODAJĘ JAKO FAKT Z DATĄ, bez opisu zniszczeń.
 * — ⚠⚠⚠ RDZEŃ KĄTA — PAŁAC BLANCKENBURGÓW:
 *   BUDOWANY W LATACH 1731–1738, NA PLANIE 12 × 40 M,
 *   POSTAWIONY NA PALACH W GRUNCIE BAGNISTYM.
 *   Mistrz budowlany: Gottfried Mercker;
 *   kierownik: Joachim Rüdiger von der Goltz.
 *   ⚠ 1743–1745 — dobudowa skrzydeł.
 *   ⚠ 1890 — pożar pałacu.
 *   ⚠⚠ BUNTU MIESZCZAN Z 1735 R. NIE UŻYWAM — praca
 *   przymusowa, temat krzywdy. POMIJAM.
 * — 1758 — kolejny pożar miasta.
 * — 1887 — dobudowa neoromańskiej wieży kościelnej.
 *   ⚠ KOŚCIOŁA NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠ KOŚCIOŁA Z 1721 R. TEŻ NIE WPROWADZAM.
 * — 16 grudnia 1946 — nazwa Mirosławiec.
 * — ⚠⚠ TARGÓW WE WTORKI I PIĄTKI NIE UŻYWAM JAKO KĄTA —
 *   obszar rytmu targowego zajęty (Nowy Targ, czwartek
 *   i sobota). WYMIENIAM JE CO NAJWYŻEJ JAKO FAKT.
 * — ⚠⚠ JARMARKU BOŻONARODZENIOWEGO NIE UŻYWAM —
 *   źródło wymienia przy nim alkohol.
 * — Cztery młyny z nazwy: Młyn Zamkowy, Młyn Wilhelma
 *   (przy jeziorze Kosiakowo), Młyn Kupferhammer
 *   (osada Polne), plus drugi młyn Paula Schmidta.
 *   ⚠⚠ CZTERECH MŁYNÓW NIE UŻYWAM JAKO KĄTA — prowadzi
 *   w obszar „jedno urządzenie kontra kilka" (Karlino,
 *   Miastko). Wymieniam co najwyżej jako fakt.
 * — Herb ustalony 30 maja 2003: tarcza czwórdzielna
 *   w krzyż, typu hiszpańskiego; pola błękitne (1 i 4)
 *   ze srebrnymi głowami kozła o złotych rogach,
 *   pola czerwone (2 i 3) z białymi krzyżami maltańskimi;
 *   z herbu rodziny von Blanckenburg.
 *   ⚠⚠ ŹRÓDŁO POŚREDNIE (opracowanie Ośrodka Kultury) —
 *   ⚠⚠⚠ BLAZONU NIE PODAJĘ. NIE OPISUJĘ HERBU.
 * — Jezioro Kosiakowo (Korytnickie): powierzchnia
 *   ponad 43,04 ha, długość 1 120 m, szerokość maks.
 *   478 m, głębokość maks. 6,2 m; ok. 2 km na południowy
 *   zachód od centrum; łączy się ciekiem z Korytnicą.
 * — Na terenie miasta leży też jezioro Stacyjne
 *   (bez parametrów).
 * — Klimat gminy: średnia temperatura roczna 7,1–8,7 °C,
 *   opady ok. 650 mm/rok, wilgotność 81 %, ok. 140 dni
 *   pochmurnych, pokrywa śnieżna średnio 45 dni.
 * — Odległości: Kalisz Pomorski 16 km, Tuczno 21,
 *   Wałcz 28, Czaplinek 29, Drawno 30, Złocieniec 31,
 *   Drawsko Pomorskie 45, Szczecin 135.
 *   ⚠ ŹRÓDŁO: kalkulator tras, wiarygodność średnia —
 *   podaję „około".
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   żaden wpis nie jest przypisany gminie Mirosławiec,
 *   także regionalnie. NIE SUGERUJĘ ISTNIENIA TAKIEGO
 *   PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH NIE PODAJĘ — jedyne znane
 *   to Mirosławiec Górny, którego NIE WYMIENIAM.
 *   districts PUSTE.
 *
 * KĄT: CZEGO NIE WIDAĆ NA TALERZU — o tym, że największa
 * część roboty w kuchni jest niewidoczna i dlatego
 * zawsze źle wyceniana.
 * Kąt od pałacu Blanckenburgów: budynek dwanaście na
 * czterdzieści metrów postawiono na gruncie bagnistym,
 * więc zanim cokolwiek stanęło, trzeba było wbić pale.
 * Tej części nie widać na żadnym zdjęciu pałacu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pałac budowano w latach 1731–1738 na planie
 *   dwanaście na czterdzieści metrów, na gruncie
 *   bagnistym, i że postawiono go na palach,
 * — ŻE PALE SĄ CAŁĄ ROBOTĄ, KTÓREJ NIE WIDAĆ —
 *   to jest rdzeń,
 * — ⚠⚠ ŻE PATRZĄC NA GOTOWY BUDYNEK, LICZY SIĘ WYŁĄCZNIE
 *   TO, CO NAD ZIEMIĄ — siedem lat budowy ocenia się
 *   po fasadzie, bo pali nie widzi nikt, nigdy,
 * — ⚠⚠ ŻE OBIAD DZIAŁA IDENTYCZNIE. Na talerzu widać
 *   dwadzieścia minut. Nie widać zakupów, decyzji, co
 *   w ogóle ugotować, rozmrażania, umytych i odłożonych
 *   naczyń ani tego, że ktoś wcześniej pomyślał
 *   o jutrze,
 * — ⚠⚠ ŻE Z TEGO BIERZE SIĘ KONKRETNA KRZYWDA, NIE TYLKO
 *   NIEPOROZUMIENIE: osoba, która gotuje, ocenia własną
 *   pracę tą samą miarą co wszyscy przy stole — czyli
 *   po tych dwudziestu minutach. I dochodzi do wniosku,
 *   że robi mało, skoro tak mało widać,
 * — ⚠⚠ ŻE DLATEGO PYTANIE „ILE CI TO ZAJĘŁO" PRAWIE
 *   ZAWSZE MA ZŁĄ ODPOWIEDŹ. Uczciwa liczba to nie czas
 *   przy garnku, tylko czas od decyzji do posprzątanego
 *   blatu,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIEWIDOCZNE NIE ZNACZY
 *   ZMARNOWANE. Pale pod pałacem robią dokładnie to,
 *   do czego są — i nie jest ich zadaniem, żeby ktoś je
 *   oglądał. Nie chodzi o to, żeby domagać się uznania
 *   za każdy etap, tylko żeby samemu liczyć uczciwie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie skraca części
 *   widocznej, bo ta i tak jest krótka. Skraca części
 *   niewidoczne — pilnowanie, przekładanie między
 *   naczyniami, zmywanie po kilku z nich. I właśnie
 *   dlatego różnicę trudno pokazać na zdjęciu talerza.
 *   MÓWIĘ TO WPROST, żeby nikt nie liczył zysku
 *   w minutach gotowania.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ROSOŁU, WYWARU I PODSTAWY — kąt zajęty
 *   (Gniew). ⚠⚠ Słowo „podstawa" w znaczeniu kulinarnym
 *   NIE POJAWIA SIĘ ANI RAZU. Pale to fundament budynku,
 *   nie baza dania. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO ROBIENIA MIEJSCA I URZĄDZANIA KUCHNI —
 *   prowadzi w obszar zajęty (Koluszki, Płoty).
 *   Ani jednego zdania o blacie jako przestrzeni,
 *   o szafkach ani o tym, co gdzie postawić.
 * — ⚠⚠ ZERO PRZYGOTOWANIA JAKO SYSTEMU NA TYDZIEŃ —
 *   kąt zajęty (Maszewo, Lipiany).
 * — ⚠⚠ ZERO GRUBOŚCI DNA I MURÓW — kąt zajęty (Resko).
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 *   ⚠⚠ Wymiar 12 × 40 m podaję jako wymiar budynku,
 *   nigdy jako proporcję czegokolwiek w kuchni.
 * — ⚠⚠ ZERO WZMACNIANIA TAM, GDZIE OBCIĄŻENIE — kąt
 *   zajęty (Lipiany, poprzednia fala). Pale to nie jest
 *   rozkład obciążenia, tylko warstwa pod spodem.
 *   ROZGRANICZAM WPROST w komentarzu i nie używam
 *   ani razu słowa „obciążenie".
 * — ⚠⚠ ZERO GRANICY WIĘKSZEJ NIŻ TO, CO OGRADZA — kąt
 *   zajęty (Recz, ta sama fala). Tam chodzi o TO, ILE
 *   ROBOTY JEST WOKÓŁ CZYNNOŚCI; TUTAJ o TO, ŻE CZĘŚĆ
 *   SAMEJ CZYNNOŚCI JEST NIEWIDOCZNA. Nie piszę
 *   o systemach, listach ani planowaniu tygodnia.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów, ta sama fala).
 * — ⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH LICZB MINUT DLA CZYTELNIKA —
 *   podaję WYŁĄCZNIE sposób liczenia.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO LOTNISKA, WOJSKA, JEDNOSTKI I OSIEDLA
 *   MIROSŁAWIEC GÓRNY. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO BUNTU MIESZCZAN Z 1735 R. — praca
 *   przymusowa przy budowie pałacu.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza „Nuve Vredeland", której też NIE UŻYWAM).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów z 1721
 *   i 1887 r. oraz rozbiórki z lat 1543–1549
 *   nie wprowadzam.
 * — ⚠⚠ ZERO WĄTKU LUDNOŚCI ŻYDOWSKIEJ I SYNAGOG.
 * — ⚠ ZERO POŻARÓW JAKO WĄTKU EMOCJONALNEGO — podaję
 *   daty i skutek budowlany.
 * — ⚠ ZERO HERBU — źródło pośrednie.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl, pomeranica.pl
 *   w zakresie liczby ludności i gęstości.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich — 1303
 *   albo 2 lutego 1314.
 * — NIE PODAJĘ gęstości gminy za pomeranicą — błędna.
 * — NIE OPISUJĘ herbu — źródło pośrednie.
 * — NIE PODAJĘ parametrów jeziora Stacyjnego.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ ŻADNYCH KONKRETNYCH LICZB MINUT.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mirosławiec leży w powiecie wałeckim; miasto liczy
 *   3 010 mieszkańców (GUS, 31.12.2024) na 2,4 km²,
 *   co daje 1 249 osób na kilometr kwadratowy, a cała
 *   gmina 5 293 osoby na 203,4 km²,
 * — prawa miejskie miasto otrzymało na początku XIV w.,
 *   a w 1569 r. Jerzy von Wedel przekazał je zięciowi
 *   Henrykowi von Blanckenburgowi,
 * — 9 maja 1719 r. w mieście wybuchł pożar, po którym
 *   nie ocalał żaden budynek; kolejny pożar miał miejsce
 *   w 1758 r.,
 * — w latach 1731–1738 Dionizy Jerzy Joachim von
 *   Blanckenburg wzniósł pałac na planie 12 × 40 m,
 *   postawiony na palach w gruncie bagnistym; mistrzem
 *   budowlanym był Gottfried Mercker, a budową kierował
 *   Joachim Rüdiger von der Goltz; skrzydła dobudowano
 *   w latach 1743–1745, a w 1890 r. pałac spłonął,
 * — w mieście działały cztery młyny wymienione z nazwy:
 *   Młyn Zamkowy, Młyn Wilhelma przy jeziorze Kosiakowo,
 *   Młyn Kupferhammer w osadzie Polne oraz drugi młyn
 *   należący do Paula Schmidta; targi odbywały się
 *   dwa razy w tygodniu, we wtorki i piątki,
 * — jezioro Kosiakowo, zwane też Korytnickim, leży około
 *   dwóch kilometrów na południowy zachód od centrum;
 *   ma ponad 43 ha powierzchni, 1 120 m długości,
 *   478 m maksymalnej szerokości i 6,2 m maksymalnej
 *   głębokości, a z rzeką Korytnicą łączy je niewielki
 *   ciek,
 * — w gminie średnia temperatura roczna wynosi
 *   7,1–8,7 °C, opady około 650 mm rocznie, a pokrywa
 *   śnieżna utrzymuje się średnio 45 dni w roku,
 * — nazwę Mirosławiec miasto nosi od 16 grudnia 1946 r.
 */
export const MIROSLAWIEC: CityContent = {
  slug: "miroslawiec",
  h1: "Thermomix Mirosławiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mirosławiec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mirosławcu (powiat wałecki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mirosławiec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mirosławcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mirosławca w powiecie wałeckim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mirosławiec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pali pod pałacem nie widać na żadnym zdjęciu. A bez nich nic by nie stało.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mirosławcu – jak wygląda prezentacja?",
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
      id: "czego-nie-widac",
      heading: "Pale pod pałacem",
      paragraphs: [
        "W latach 1731–1738 Dionizy Jerzy Joachim von Blanckenburg postawił w Mirosławcu pałac na planie dwanaście na czterdzieści metrów. Mistrzem budowlanym był Gottfried Mercker, budową kierował Joachim Rüdiger von der Goltz. Skrzydła dobudowano w latach 1743–1745.",
        "Grunt był bagnisty, więc budynek postawiono na palach.",
        "I to jest ta część roboty, której nie widać na żadnym zdjęciu pałacu. Ani na rysunku, ani na pocztówce, ani wtedy, gdy się przed nim stało. Siedem lat budowy ocenia się po fasadzie, bo pali nie zobaczył nikt — poza ludźmi, którzy je wbijali.",
        "Obiad działa dokładnie tak samo.",
        "Na talerzu widać dwadzieścia minut. Nie widać zakupów. Nie widać decyzji, co w ogóle ugotować — a to bywa najdłuższa część dnia. Nie widać wyjętego rano mięsa, namoczonych kasz, umytych i odłożonych naczyń, ani tego, że ktoś już wczoraj pomyślał o dzisiaj.",
        "Z tego bierze się coś gorszego niż nieporozumienie przy stole.",
        "Osoba, która gotuje, ocenia własną pracę tą samą miarą co wszyscy pozostali — czyli po tym, co widać. I wychodzi jej, że robi niewiele, skoro tak niewiele widać. To jest rachunek fałszywy od początku, a robi się go samemu sobie, codziennie.",
        "Dlatego pytanie „ile ci to zajęło” prawie zawsze dostaje złą odpowiedź. Uczciwa liczba to nie czas przy garnku. To czas od momentu, w którym padła decyzja, co jecie, do momentu, w którym blat jest czysty. Wszystko pomiędzy jest tą samą robotą, tylko rozłożoną na kilka pór dnia i przez to niepoliczalną na oko.",
        "Uczciwie o drugiej stronie: niewidoczne nie znaczy zmarnowane. Pale pod pałacem robią dokładnie to, do czego zostały wbite, i nie jest ich zadaniem, żeby ktoś je oglądał. Nie chodzi o to, żeby domagać się uznania za każdy etap ani żeby wyliczać domownikom, ile trwało rozmrażanie. Chodzi o to, żeby samemu liczyć uczciwie — bo inaczej człowiek dochodzi do wniosku, że jest wolny, podczas gdy jest po prostu niewidzialny.",
        "Na koniec o urządzeniu i o tym, dlaczego trudno to pokazać.",
        "Thermomix nie skraca części widocznej, bo ta i tak jest krótka. Skraca części niewidoczne: pilnowanie, przekładanie między naczyniami, mycie kilku z nich zamiast jednego, stanie i mieszanie wtedy, gdy trzeba by robić coś innego. Czyli dokładnie to, czego nie widać na zdjęciu talerza — i dlatego nie próbuję pokazywać różnicy na zdjęciach. Pokazuję ją, gotując u Was naprawdę, od decyzji do posprzątanego blatu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja krok po kroku" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mirosławcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która część obiadu zajmuje u Was najwięcej czasu — bo rzadko jest to samo gotowanie. Pod to dobiorę dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mirosławcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mirosławca",
      paragraphs: [
        "Mirosławiec leży w powiecie wałeckim i jest miastem gęsto zabudowanym: ponad trzy tysiące mieszkańców (GUS, 31.12.2024) na dwóch i czterech dziesiątych kilometra kwadratowego, czyli tysiąc dwieście czterdzieści dziewięć osób na kilometr — podczas gdy cała gmina to ponad pięć tysięcy osób na dwustu trzech kilometrach. Prawa miejskie miasto otrzymało na początku czternastego wieku, a w 1569 roku Jerzy von Wedel przekazał je zięciowi Henrykowi von Blanckenburgowi. 9 maja 1719 wybuchł pożar, po którym nie ocalał żaden budynek; kolejny był w 1758. W latach 1731–1738 stanął pałac na planie dwanaście na czterdzieści metrów, postawiony na palach w gruncie bagnistym — skrzydła dobudowano w latach 1743–1745, a w 1890 pałac spłonął. Działały tu cztery młyny wymienione z nazwy: Zamkowy, Wilhelma przy jeziorze Kosiakowo, Kupferhammer w osadzie Polne i drugi młyn Paula Schmidta; targi odbywały się dwa razy w tygodniu, we wtorki i piątki. Jezioro Kosiakowo, zwane też Korytnickim, leży dwa kilometry na południowy zachód od centrum: ponad czterdzieści trzy hektary, tysiąc sto dwadzieścia metrów długości, czterysta siedemdziesiąt osiem szerokości i sześć metrów dwadzieścia głębokości. Nazwę Mirosławiec miasto nosi od 16 grudnia 1946 roku.",
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

  districtsHeading: "Do których części Mirosławca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość — gmina ma ponad dwieście kilometrów kwadratowych, więc do najdalszych miejscowości też przyjadę.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mirosławiec też przyjadę",
  nearbyParagraphs: [
    "Kalisz Pomorski jest około szesnastu kilometrów stąd, Tuczno dwadzieścia jeden, Wałcz dwadzieścia osiem, Czaplinek dwadzieścia dziewięć, a Złocieniec trzydzieści jeden. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Kalisz Pomorski", "Tuczno", "Wałcz", "Czaplinek", "Złocieniec"],

  about: blokOMnie("do Mirosławca", "w Mirosławcu", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mirosławca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Mirosławiec w powiecie wałeckim w województwie zachodniopomorskim — nie o Mirosławice na Dolnym Śląsku. Wyszukiwarki mylą też tę nazwę z imieniem Mirosław, więc przy umawianiu warto podać powiat.",
    },
    ...faqWspolne("w Mirosławcu"),
    {
      question: "Ile czasu naprawdę zajmuje ugotowanie obiadu?",
      answer:
        "Znacznie więcej, niż widać na talerzu — i to jest źródło sporego nieporozumienia, także z samym sobą. Uczciwa liczba to nie czas przy garnku, tylko czas od decyzji, co jecie, do momentu, w którym blat jest czysty. Zakupy, wyjęcie mięsa rano, namoczenie kaszy, mycie naczyń — to jest ta sama robota, tylko rozłożona na kilka pór dnia i dlatego nie do policzenia na oko.",
    },
    {
      question: "Na czym konkretnie oszczędza się czas przy Thermomixie?",
      answer:
        "Nie na samym gotowaniu, bo ta część i tak jest krótka. Na pilnowaniu, przekładaniu między naczyniami, myciu kilku z nich zamiast jednego i na staniu przy garnku wtedy, gdy trzeba by robić coś innego. Różnicy nie da się pokazać na zdjęciu talerza — dlatego na prezentacji gotujemy naprawdę, od początku do posprzątanego blatu.",
    },
  ],

  geo: { lat: 53.3517, lng: 16.0836 },
};
