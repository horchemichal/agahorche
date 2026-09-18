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
 * RADZYMIN — powiat wołomiński, woj. mazowieckie.
 * MIASTO 15 199 (GUS 31.12.2024), 23,4 km², 649,8 os./km²,
 * 88 m n.p.m. Gmina 130,93 km², 27 sołectw.
 * ⚠ Ludność miasta wzrosła o ok. 102% w latach 2002–2024
 *   — podwoiła się.
 *
 * ⚠⚠ HOMONIMY — KLUCZOWE:
 * RADZYMIN (powiat wołomiński) ≠ RADZYŃ PODLASKI
 * ≠ RADZYŃ CHEŁMIŃSKI ≠ RADOMIN ≠ RADZANOWO.
 * FAQ MUSI TO ROZRÓŻNIAĆ — mylenie z Radzyniem Podlaskim
 * jest bardzo częste. TWARDA GRANICA.
 *
 * ⚠⚠⚠ ETYKA — NAJWAŻNIEJSZE PRZY TYM MIEŚCIE:
 * RADZYMIN JEST W ŹRÓDŁACH ZDOMINOWANY PRZEZ TEMAT
 * WYDARZEŃ Z 1920 ROKU. ⚠⚠ NIE WSPOMINAM O NICH ANI RAZU.
 * ZERO cmentarza, zero bitwy, zero rocznic, zero pomników
 * z tym związanych. TWARDA GRANICA ABSOLUTNA.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — 1440 — pierwsza wzmianka (ks. Bolesław IV nadaje
 *   Janowi Hornuchowi); 1475 — ks. Bolesław V nadaje pełne
 *   prawa miejskie; miasto liczyło wtedy 38 BUDYNKÓW
 *   I 387 MIESZKAŃCÓW,
 * — 1483–1485 — przywileje na budowę młyna na rzece Czarnej,
 *   staw rybny, prawo poboru drewna i korzystania z pastwisk;
 *   w 1584 r. miasto miało dwa młyny, zajazd i dwie karczmy,
 *   ⚠ KĄTY „mąka i mielenie", „ryba", „grzyby", „dziczyzna",
 *     „drewno w kuchni" SĄ ZAJĘTE — to tylko fakty w bloku.
 * — 1635 — Władysław IV nadaje przywilej czterech jarmarków
 *   rocznie; 1785 — Stanisław August Poniatowski potwierdza
 *   TARGI ŚRODOWE i cztery jarmarki; TRADYCJA ŚRODOWEGO TARGU
 *   PRZETRWAŁA DO DZIŚ,
 *   ⚠ KĄT „targ" ZAJĘTY — podaję jako detal.
 * — ⚠⚠ KOŚCIÓŁ MUROWANY 1773–1780, WG PROJEKTU ARCHITEKTA
 *   KRÓLEWSKIEGO JANA CHRYSTIANA KAMSETZERA; konsekracja
 *   10 czerwca 1781; obok klasycystyczna dzwonnica z 1781 r.
 *   z czterema dzwonami, z których jeden podarował król
 *   Stanisław August. TO JEST PIERWSZA CZĘŚĆ KOTWICY.
 * — ⚠⚠ KSIĘŻNA ELEONORA CZARTORYSKA zbudowała tu
 *   klasycystyczną letnią rezydencję ze SŁYNNYM W CAŁEJ POLSCE
 *   PARKIEM KRAJOBRAZOWYM; w 1779 r. zorganizowała PIERWSZĄ
 *   NA TYM TERENIE SZKOŁĘ ELEMENTARNĄ oraz przytułek; wydała
 *   regulacje porządkujące stosunki targowe między dworem
 *   a mieszczanami. TO JEST DRUGA CZĘŚĆ KOTWICY.
 * — ⚠⚠ GMACH INSTYTUTU NAUCZYCIELI, 1843–1845, WG PROJEKTU
 *   ANTONIA CORAZZIEGO — tego samego, który projektował
 *   Teatr Wielki w Warszawie. TRZECIA CZĘŚĆ KOTWICY.
 * — XIX w.: zakłady wyrobów żelaznych, browar, tartak i kilka
 *   cegielni (do dziś jedno z sołectw nazywa się Cegielnia),
 *   ⚠ ZERO TEMATU ALKOHOLU.
 * — 1900 — Towarzystwo Pożyczkowo-Oszczędnościowe; 1902 —
 *   pierwsza w powiecie Ochotnicza Straż Pożarna,
 * — Park Czartoryskiej i DWOREK OGRODNIKA — XVIII-wieczny
 *   zespół; dworek odrestaurowano w 2019 r. i mieści dziś
 *   restaurację oraz galerię.
 *
 * PRZYRODA: rzeki Czarna / Czarna Struga, Rządza, Bug,
 * Stary Bug, Narew; Lasy Drewnickie; rezerwaty Puszcza
 * Słupecka, Łęgi Czarnej Strugi, Jadwisin, Dzierżenińska;
 * pomniki przyrody Dęby Gajowego, Dęby Mocarze, Dąb Jana
 * Kazimierza; Zalew Zegrzyński.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠ ŚWIĄT KULINARNYCH ANI KGW W GMINIE NIE POTWIERDZONO —
 *   wyszukiwania zwracały homonimiczny Radzyń Podlaski.
 *   NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: GOTOWAĆ DOBRZE, KIEDY NIKT NIE PATRZY.
 * Kąt od tego, że w miasteczku liczącym kilka tysięcy
 * mieszkańców kościół zaprojektował architekt królewski
 * Jan Chrystian Kamsetzer, szkołę — Antonio Corazzi, autor
 * Teatru Wielkiego, a księżna Czartoryska założyła park
 * słynny w całej Polsce. Nikt tego od Radzymina nie wymagał.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w kuchni istnieje ciche założenie, że staranność
 *   należy się okazjom: świętom, gościom, niedzieli —
 *   a wtorkowy obiad „dla siebie" może być byle jaki,
 * — ŻE „TO TYLKO DLA MNIE" JEST NAJGORSZYM ARGUMENTEM,
 *   JAKI ZNAM, i że warto go sobie raz odebrać,
 * — ŻE NIE CHODZI O WYSIŁEK ANI O DEKOROWANIE — chodzi
 *   o kilka drobiazgów, które nie kosztują nic:
 *   — ZJEŚĆ Z TALERZA, A NIE Z GARNKA ALBO Z PATELNI,
 *   — USIĄŚĆ, a nie jeść na stojąco przy blacie,
 *   — DOPRAWIĆ DO KOŃCA, nawet jeśli nikt inny tego nie oceni,
 *   — WYŁĄCZYĆ EKRAN NA TE DWADZIEŚCIA MINUT,
 * — ŻE POSIŁEK ZJEDZONY NA STOJĄCO NIE ZOSTAJE W PAMIĘCI
 *   JAKO POSIŁEK — i dlatego po nim wciąż czegoś się szuka
 *   ⚠ BEZ ŻADNYCH TEZ ZDROWOTNYCH, DIETETYCZNYCH ANI
 *     O UWAŻNOŚCI JAKO METODZIE. TWARDA GRANICA,
 * — ŻE GOTOWANIE DLA JEDNEJ OSOBY MA SWOJE REALNE
 *   TRUDNOŚCI — opakowania są za duże, przepisy na cztery
 *   porcje — i że to jest prawdziwy problem, nie wymówka
 *   ⚠ ODSYŁAM DO STRONY O MNIEJSZYCH PORCJACH, NIE ROZWIJAM,
 * — ŻE DOBRE NAKRYCIE DLA SIEBIE NIE JEST PRÓŻNOŚCIĄ:
 *   to jest po prostu uznanie, że własny czas też się liczy,
 * — ŻE TO DZIAŁA W DRUGĄ STRONĘ PRZY GOTOWANIU DLA INNYCH:
 *   dom, w którym codzienny obiad jest porządny, nie musi
 *   robić przedstawienia, kiedy ktoś przyjdzie,
 * — ⚠⚠ ŻE NIE CHODZI O TO, ŻEBY CODZIENNIE GOTOWAĆ WIĘCEJ.
 *   Kanapka zjedzona przy stole z talerza też jest
 *   porządnym posiłkiem. TWARDA GRANICA TONU —
 *   ZERO MORALIZOWANIA I ZERO WYRZUTÓW SUMIENIA.
 * — UCZCIWIE: urządzenie nie sprawi, że komukolwiek zacznie
 *   zależeć — to jest decyzja, nie funkcja,
 * — ale obniża próg: skoro porządny obiad dla jednej osoby
 *   nie wymaga trzech garnków i zmywania, „nie chce mi się"
 *   przestaje być rozstrzygające, a to zwykle jedyna
 *   przeszkoda.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, DIETETYCZNYCH
 *   I PSYCHOLOGICZNYCH. ZERO tez o uważnym jedzeniu jako
 *   metodzie, o trawieniu, o sytości i o samotności jako
 *   problemie. TWARDA GRANICA.
 * — ⚠⚠ ZERO TONU MORALIZATORSKIEGO. Nie piszę, że ktoś
 *   „powinien" o siebie dbać. TWARDA GRANICA TONU.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO ALKOHOLU.
 *
 * ⚠⚠⚠ ETYKA — RADZYMIN:
 * — ZERO WYDARZEŃ Z 1920 ROKU. ANI SŁOWA.
 * — ZERO tematów wojennych w ogóle.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ PODWOJENIE LUDNOŚCI PODAJĘ NEUTRALNIE, jako fakt
 *   demograficzny, bez wchodzenia w temat suburbanizacji
 *   i cen mieszkań.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „święta", „wigilia", „duża uroczystość rodzinna",
 *   „wesele i przyjęcie w domu", „niedzielne popołudnie",
 *   „goście bez zapowiedzi" dotyczą OKAZJI.
 *   ⚠⚠ TUTAJ CHODZI DOKŁADNIE O ICH BRAK.
 * — „gotowanie mniejszych porcji, niż podaje przepis"
 *   dotyczy SKALOWANIA PRZEPISU.
 * — „TALERZ" dotyczy NACZYNIA I PODANIA.
 *   ⚠ DLATEGO O TALERZU PISZĘ JEDNYM ZDANIEM, JAKO
 *     O DROBIAZGU NA LIŚCIE, BEZ ROZWIJANIA.
 * — „DOPRAWIANIE" dotyczy TECHNIKI KORYGOWANIA SMAKU.
 * — „STAŁE MENU" dotyczy POWTARZALNOŚCI DAŃ.
 * TUTAJ chodzi o STARANNOŚĆ W ZWYKŁY DZIEŃ — o to,
 * że codzienny posiłek zasługuje na tyle samo co odświętny.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE WSPOMINAM O WYDARZENIACH Z 1920 R.
 * — NIE WYMYŚLAM produktu lokalnego, święta ani KGW.
 * — NIE PISZĘ o cenach mieszkań ani o suburbanizacji.
 * — NIE STAWIAM TEZ ZDROWOTNYCH ANI PSYCHOLOGICZNYCH.
 * — NIE MYLĘ RADZYMINA z RADZYNIEM PODLASKIM ani
 *   RADZYNIEM CHEŁMIŃSKIM.
 * — districts: miasto zwarte, brak wykazu. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Radzyminie pochodzi z 1440 r.,
 *   a pełne prawa miejskie nadał mu w 1475 r. książę
 *   Bolesław V; miasto liczyło wtedy trzydzieści osiem
 *   budynków i trzystu osiemdziesięciu siedmiu mieszkańców,
 * — w latach 1483–1485 otrzymało przywileje na budowę młyna
 *   na rzece Czarnej, staw rybny oraz prawo poboru drewna
 *   i korzystania z pastwisk; w 1584 r. miało dwa młyny,
 *   zajazd i dwie karczmy,
 * — w 1635 r. Władysław IV nadał przywilej czterech jarmarków
 *   rocznie, a w 1785 r. Stanisław August Poniatowski
 *   potwierdził targi środowe i cztery jarmarki; tradycja
 *   środowego targu przetrwała do dziś,
 * — murowany kościół wzniesiono w latach 1773–1780 według
 *   projektu architekta królewskiego Jana Chrystiana
 *   Kamsetzera i konsekrowano 10 czerwca 1781 r.; obok stoi
 *   klasycystyczna dzwonnica z 1781 r. z czterema dzwonami,
 *   z których jeden podarował król Stanisław August,
 * — księżna Eleonora Czartoryska zbudowała tu klasycystyczną
 *   letnią rezydencję ze słynnym w całej Polsce parkiem
 *   krajobrazowym, a w 1779 r. zorganizowała pierwszą na tym
 *   terenie szkołę elementarną oraz przytułek i wydała
 *   regulacje porządkujące stosunki targowe między dworem
 *   a mieszczanami,
 * — gmach Instytutu Nauczycieli powstał w latach 1843–1845
 *   według projektu Antonia Corazziego, autora Teatru
 *   Wielkiego w Warszawie,
 * — w XIX w. działały w mieście zakłady wyrobów żelaznych,
 *   tartak i kilka cegielni — do dziś jedno z sołectw gminy
 *   nosi nazwę Cegielnia; w 1900 r. powstało Towarzystwo
 *   Pożyczkowo-Oszczędnościowe, a w 1902 r. pierwsza
 *   w powiecie Ochotnicza Straż Pożarna,
 * — XVIII-wieczny Dworek Ogrodnika w Parku Czartoryskiej
 *   odrestaurowano w 2019 r.; mieści dziś restaurację
 *   i galerię,
 * — przez gminę płyną Czarna Struga, Rządza, Bug i Narew,
 *   leżą tu Lasy Drewnickie oraz rezerwaty Puszcza Słupecka,
 *   Łęgi Czarnej Strugi, Jadwisin i Dzierżenińska, a także
 *   pomniki przyrody: Dęby Gajowego, Dęby Mocarze i Dąb Jana
 *   Kazimierza; w pobliżu leży Zalew Zegrzyński.
 */
export const RADZYMIN: CityContent = {
  slug: "radzymin",
  h1: "Thermomix Radzymin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radzymin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Radzyminie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radzymin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radzyminie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radzymina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Radzymin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„To tylko dla mnie” jest najgorszym argumentem w całej kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radzyminie – jak wygląda prezentacja?",
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
      id: "nikt-nie-patrzy",
      heading: "Kamsetzer i Corazzi w małym mieście — czyli o zwykłym wtorku",
      paragraphs: [
        "Radzymin w XVIII wieku był miasteczkiem, które zaczynało od trzydziestu ośmiu budynków i przez stulecia pozostawało małe. A jednak murowany kościół zaprojektował mu w latach 1773–1780 Jan Chrystian Kamsetzer — architekt królewski. Gmach Instytutu Nauczycieli postawiono w latach 1843–1845 według projektu Antonia Corazziego, tego samego, który projektował Teatr Wielki w Warszawie. A księżna Eleonora Czartoryska założyła tu park krajobrazowy słynny w całej Polsce i w 1779 roku pierwszą na tym terenie szkołę elementarną.",
        "Nikt tego od Radzymina nie wymagał. Dla miasteczka tej wielkości wystarczyłby przyzwoity murarz z sąsiedniego powiatu i nikt by nie zauważył różnicy.",
        "To jest dokładnie ta myśl, o której chcę napisać — bo w kuchni działa cichy i bardzo powszechny mechanizm: staranność należy się okazjom. Świętom. Gościom. Niedzieli. A wtorkowy obiad, zjedzony samemu, może być byle jaki, bo „to tylko dla mnie”.",
        "Moim zdaniem to najgorszy argument w całej kuchni i warto go sobie raz odebrać. Nie dlatego, że trzeba więcej gotować — o tym za chwilę — tylko dlatego, że jest nieprawdziwy. Dni, w których nikt nie patrzy, jest w roku około trzystu. Okazji kilkanaście.",
        "Przy czym nie chodzi o wysiłek ani o dekorowanie talerza. Chodzi o cztery drobiazgi, które nie kosztują nic. Zjeść z talerza, a nie z garnka albo prosto z patelni. Usiąść, zamiast jeść na stojąco przy blacie. Doprawić do końca, nawet jeśli nikt inny tego nie oceni. I wyłączyć ekran na te dwadzieścia minut.",
        "Szczególnie warto zwrócić uwagę na jedzenie na stojąco. Posiłek zjedzony przy blacie, między jedną rzeczą a drugą, po prostu nie zostaje w pamięci jako posiłek — i dlatego pół godziny później człowiek znowu czegoś szuka w lodówce. To nie jest kwestia ilości; to kwestia tego, że nie było momentu, w którym coś się skończyło.",
        "Muszę tu jednak od razu powiedzieć rzecz uczciwą: gotowanie dla jednej osoby ma swoje prawdziwe trudności. Opakowania są za duże, przepisy pisane na cztery porcje, a połowa warzyw sprzedawana w ilościach, których się nie zdąży zużyć. To jest realny problem, a nie wymówka — pisałam o mniejszych porcjach osobno.",
        "Chcę też jasno powiedzieć, czego tu nie ma: nie ma tezy, że trzeba codziennie gotować więcej ani lepiej. Kanapka zjedzona przy stole, z talerza, w ciszy, jest porządnym posiłkiem. Zupa z zamrażarki odgrzana i zjedzona na siedząco też. Nie chodzi o menu.",
        "Warto dodać, że to działa też w drugą stronę — i to jest chyba najbardziej praktyczny wniosek z całej tej historii. Dom, w którym codzienny obiad jest zwyczajnie porządny, nie musi robić przedstawienia, kiedy ktoś przyjdzie. Nie ma paniki, nie ma zakupów w ostatniej chwili, nie ma sprzątania pod gości. Staranność rozłożona na sto zwykłych dni kosztuje mniej niż jeden wielki wysiłek raz na kwartał.",
        "Teraz uczciwie o sprzęcie. Thermomix nie sprawi, że komukolwiek zacznie zależeć. To jest decyzja, a nie funkcja, i żadne urządzenie jej nie podejmie za nikogo.",
        "Obniża natomiast próg — i akurat tutaj to ma znaczenie, bo przeszkodą prawie nigdy nie jest brak umiejętności, tylko zdanie „nie chce mi się”. Kiedy porządny obiad dla jednej osoby nie wymaga trzech garnków, pilnowania i zmywania na pół godziny, to zdanie przestaje rozstrzygać. A wtedy okazuje się, że zwykły wtorek też da się zjeść po ludzku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radzyminie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli gotujecie na jedną albo dwie osoby — powiedzcie przy umawianiu. Dobiorę dania pod taką skalę, bo to zupełnie inna kuchnia niż gotowanie dla pięciu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radzyminie"),
    sekcjaRaty("w Radzyminie"),
    {
      id: "rodzina",
      heading: "Thermomix dla radzymińskiej rodziny",
      paragraphs: [
        "Radzymin liczy ponad piętnaście tysięcy mieszkańców na dwudziestu trzech kilometrach kwadratowych i jest siedzibą gminy o powierzchni stu trzydziestu kilometrów z dwudziestoma siedmioma sołectwami; ludność miasta podwoiła się w ciągu ostatnich dwóch dekad. Pierwsza wzmianka pochodzi z 1440 roku, a pełne prawa miejskie nadał mu w 1475 książę Bolesław V — miasto liczyło wtedy trzydzieści osiem budynków i trzystu osiemdziesięciu siedmiu mieszkańców. W latach 1483–1485 otrzymało przywileje na budowę młyna na rzece Czarnej, staw rybny oraz prawo poboru drewna i korzystania z pastwisk, a w 1584 miało dwa młyny, zajazd i dwie karczmy. W 1635 Władysław IV nadał przywilej czterech jarmarków rocznie, a w 1785 Stanisław August Poniatowski potwierdził targi środowe — tradycja środowego targu przetrwała tu do dziś. Murowany kościół wzniesiono w latach 1773–1780 według projektu architekta królewskiego Jana Chrystiana Kamsetzera i konsekrowano 10 czerwca 1781; obok stoi klasycystyczna dzwonnica z tego samego roku, z czterema dzwonami, z których jeden podarował król. Księżna Eleonora Czartoryska zbudowała tu klasycystyczną letnią rezydencję ze słynnym w całej Polsce parkiem krajobrazowym, a w 1779 zorganizowała pierwszą na tym terenie szkołę elementarną i przytułek. Gmach Instytutu Nauczycieli powstał w latach 1843–1845 według projektu Antonia Corazziego, autora Teatru Wielkiego w Warszawie. W XIX wieku działały w mieście zakłady wyrobów żelaznych, tartak i kilka cegielni — do dziś jedno z sołectw nosi nazwę Cegielnia; w 1900 powstało Towarzystwo Pożyczkowo-Oszczędnościowe, a w 1902 pierwsza w powiecie Ochotnicza Straż Pożarna. Osiemnastowieczny Dworek Ogrodnika w Parku Czartoryskiej odrestaurowano w 2019 roku. Przez gminę płyną Czarna Struga, Rządza, Bug i Narew, leżą tu Lasy Drewnickie oraz rezerwaty Puszcza Słupecka, Łęgi Czarnej Strugi, Jadwisin i Dzierżenińska, a także pomniki przyrody: Dęby Gajowego, Dęby Mocarze i Dąb Jana Kazimierza.",
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

  districtsHeading: "Do których części Radzymina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic rynku i Parku Czartoryskiej po nowe osiedla na obrzeżach. Dojeżdżam też do sołectw gminy: Słupna, Nadmy, Ciemnego, Zwierzyńca, Cegielni, Mokrego, Starego i Nowego Jankowa, Starych i Nowych Załubic, Arciechowa i Zawad.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Radzymin też przyjadę",
  nearbyParagraphs: [
    "Wołomin, Kobyłka, Marki, Serock, Nieporęt i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wołomin", "Kobyłka", "Marki", "Serock"],

  about: blokOMnie("do Radzymina", "w Radzyminie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Radzymina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy — Słupna, Nadmy, Ciemnego, Załubic i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Radzymin w powiecie wołomińskim pod Warszawą, a nie o Radzyń Podlaski czy Radzyń Chełmiński.",
    },
    ...faqWspolne("w Radzyminie"),
    {
      question: "Czy warto się starać, gotując tylko dla siebie?",
      answer:
        "Moim zdaniem tak, i nie chodzi o wysiłek ani o dekorowanie. Wystarczą cztery drobiazgi, które nie kosztują nic: zjeść z talerza zamiast z garnka, usiąść zamiast jeść na stojąco, doprawić do końca i wyłączyć ekran na te dwadzieścia minut. Dni, w których nikt nie patrzy, jest w roku około trzystu.",
    },
    {
      question: "Dlaczego po posiłku zjedzonym na stojąco wciąż czegoś szukam?",
      answer:
        "Bo posiłek zjedzony przy blacie, między jedną rzeczą a drugą, nie zostaje w pamięci jako posiłek — nie było momentu, w którym coś się skończyło. To nie kwestia ilości, tylko tego, że jedzenie nie miało własnego miejsca w dniu.",
    },
    {
      question: "Czy to znaczy, że trzeba codziennie gotować więcej?",
      answer:
        "Nie. Kanapka zjedzona przy stole, z talerza, jest porządnym posiłkiem; odgrzana zupa z zamrażarki też. Nie chodzi o menu, tylko o to, że staranność rozłożona na sto zwykłych dni kosztuje mniej niż jeden wielki wysiłek raz na kwartał — i że dom, w którym codzienny obiad jest zwyczajnie porządny, nie musi robić przedstawienia, kiedy ktoś przyjdzie.",
    },
  ],

  geo: { lat: 52.4175, lng: 21.1804 },
};
