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
 * BYTOM ODRZAŃSKI — gmina miejsko-wiejska w powiecie
 * nowosolskim.
 * MIASTO 3 880, GMINA 5 071 (GUS 31.12.2024).
 * POWIERZCHNIA GMINY 52,4 km², 10 SOŁECTW: Bodzów, Bonów,
 * Bycz, Drogomil, Królikowice, Małaszowice, Popowo, Sobolice,
 * Tarnów Bycki, Wierzbnica.
 * ⚠⚠ POWIERZCHNI MIASTA NIE PODAJĘ — sprzeczność
 *   (2,3 km² kontra 10 km²).
 * W gminie 16 podmiotów w sektorze rolniczym (GUS 2019).
 *
 * ⚠⚠ HOMONIM KRYTYCZNY: BYTOM ODRZAŃSKI (lubuskie, powiat
 * nowosolski, ok. 3,9 tys. mieszkańców) ≠ BYTOM (śląskie,
 * duże miasto na prawach powiatu). WYSZUKIWARKI PODSTAWIAJĄ
 * ŚLĄSKI BYTOM PRZY KAŻDYM ZAPYTANIU. Nic ze śląskiego
 * Bytomia nie trafia na tę stronę. FAQ to rozróżnia.
 *
 * ⚠⚠ ROKU PRAW MIEJSKICH NIE PODAJĘ — źródła sprzeczne:
 * 1263 (jedno źródło), ogólne „XIII wiek", oraz oczywisty błąd
 * „1602–1609" (to data budowy ratusza). Karty konserwatorskie
 * mówią o LOKACJI W XIII w. Piszę „w XIII wieku".
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW NIE PODAJĘ — nieustalone.
 *
 * HISTORIA: 1005 — pierwsza wzmianka o grodzie. 1175 —
 * wzmianka o kościele św. Szczepana. 1203 — pierwsza wzmianka
 * o kasztelanii. Koniec XII w. — miasto przeniesiono
 * ok. 1,5 km na zachód. Lokacja w XIII w. objęła DUŻY RYNEK
 * i rozległy obszar 17 ha — planowano miasto znacznie większe,
 * a rozwój zahamowało przesunięcie szlaków tranzytowych.
 * 1469 — początek władania miastem przez rody szlacheckie,
 * m.in. SCHÖNAICHÓW (od 1561). 1694 — wielki pożar; układ
 * urbanistyczny zachowany w kształcie po odbudowie.
 * 1697 — status wolnego państwa stanowego. 1871 — kolej.
 * Badania archeologiczne 1984–1996 ustaliły, że gród pełnił
 * m.in. FUNKCJĘ GOSPODARCZĄ (TARG).
 * AKADEMIA SCHÖNAICHIANUM-CAROLATHEUM — gimnazjum akademickie
 * ufundowane przez Georga Schönaicha na początku XVII w.;
 * uczył się w nim m.in. poeta Martin Opitz.
 *
 * GEOGRAFIA: nad ODRĄ. W pobliżu WZGÓRZA DALKOWSKIE.
 * Skarpa odrzańska, port i „URWANY MOST" — 140-metrowy
 * drewniany deptak na palach dawnego mostu, dziś ścieżka
 * spacerowa z tarasami widokowymi.
 *
 * WINNICA W BYCZU (sołectwo gminy) założona w 2006 r.:
 * 1,3 ha, ponad 3 000 krzewów, siedem odmian; powstała
 * z zamiarem przywrócenia lokalnych tradycji winiarskich,
 * KTÓRE NA TYM TERENIE SIĘGAJĄ XVII WIEKU.
 * ⚠ NAZWISK WŁAŚCICIELI I NAZWY WINNICY NIE PODAJĘ.
 * ⚠ WINNICĘ WYMIENIAM JEDNYM ZDANIEM, BEZ ZACHĘTY
 *   DO ALKOHOLU. ⚠ KĄT „winiarski" ZAJĘTY.
 * W mieście działa cukiernia, a w Tarnowie Byckim piekarnia.
 * ⚠ NAZW I DAT NIE PODAJĘ — nieustalone.
 *
 * ⚠⚠ ŻADNEJ CYKLICZNEJ IMPREZY KULINARNEJ, JARMARKU ANI
 * DOŻYNEK W BYTOMIU ODRZAŃSKIM NIE UDOKUMENTOWANO.
 * NIE WYMYŚLAM ŻADNEJ.
 * ⚠ „Jarmarku Bożonarodzeniowego" NIE UŻYWAM — niepotwierdzony.
 * ⚠ BROWARU ANI MŁYNA w tym mieście NIE ZNALEZIONO.
 *
 * ZABYTKI: RATUSZ późnorenesansowy, wzniesiony 1602–1609.
 * KOŚCIÓŁ ŚW. HIERONIMA — początek XVI w., z barokowym
 * wyposażeniem z XVIII w. i krzyżami pokutnymi. Dawny zbór
 * ewangelicki. Hotel „Pod Złotym Lwem" z barokowym wystrojem
 * elewacji z połowy XVII w. Kiosk meteorologiczny na rynku.
 * ⚠ FONTANNY NIE OPISUJĘ — dwie sprzeczne wersje genezy,
 *   a jedna dotyczy utonięcia dziecka. POMIJAM CAŁKOWICIE.
 * ⚠ ZBORU NIE DATUJĘ — jedno źródło (1741).
 * Konserwator zalicza Bytom Odrzański do najcenniejszych
 * zespołów urbanistycznych województwa, a jego panoramę
 * z trzema wieżami do najpiękniejszych w regionie; miasto
 * bywa nazywane „lubuskim Kazimierzem".
 *
 * KĄT: KALAFIOR I BROKUŁ — dwa warzywa, które prawie zawsze
 * są rozgotowane.
 * Kąt od małej gminy o drobnym, lokalnym rolnictwie —
 * i od dwóch warzyw, które w polskich domach bywają
 * traktowane najgorzej ze wszystkich.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kalafior i brokuł mają w Polsce opinię nudnych,
 *   a wynika to wyłącznie ze sposobu przyrządzania,
 * — ŻE OBA PSUJE JEDNO: ZBYT DŁUGIE GOTOWANIE W WODZIE.
 *   Rozpadają się, szarzeją i zaczynają wyraźnie pachnieć,
 * — ŻE TEN ZAPACH NIE JEST ICH NATURALNĄ CECHĄ, tylko
 *   skutkiem przegotowania — im dłużej, tym mocniej,
 * — WNIOSEK: krócej, w mniejszej ilości wody albo na parze
 *   — i wyjąć wcześniej, niż podpowiada odruch, bo dochodzą
 *   po wyjęciu,
 * — ŻE DRUGA DROGA JEST JESZCZE LEPSZA: PIECZENIE.
 *   Upieczone różyczki to zupełnie inne warzywo — brzegi
 *   się karmelizują, smak robi się orzechowy,
 * — ŻE ŁODYGA I GŁĄB SĄ JADALNE I DOBRE, a wyrzuca się
 *   je odruchowo; obrane i pokrojone gotują się równo
 *   z różyczkami,
 * — ŻE RÓŻYCZKI TRZEBA ROBIĆ RÓWNE, bo inaczej jedne
 *   są gotowe, a drugie surowe — to najczęstsza przyczyna
 *   „nierównego" kalafiora,
 * — ŻE OBA ŚWIETNIE ZNOSZĄ TOWARZYSTWO TŁUSZCZU, CZOSNKU
 *   I CZEGOŚ CHRUPIĄCEGO: bułka tarta na maśle, tarty ser,
 *   prażone nasiona,
 * — ŻE ZUPA KREM Z KALAFIORA JEST JEDNYM Z NAJŁATWIEJSZYCH
 *   DAŃ, JAKIE ZNAM, i najlepszym sposobem na dom, w którym
 *   nikt nie chce jeść warzyw,
 * — UCZCIWIE: urządzenie nie upiecze różyczek i nie zrobi
 *   chrupiących brzegów — to zadanie dla piekarnika,
 * — ale gotowanie na parze i zupa krem w jednym naczyniu
 *   to dokładnie te dwie rzeczy, w których te warzywa
 *   wypadają najlepiej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO witamin,
 *   ZERO „warzywa krzyżowe", ZERO błonnika, ZERO diety.
 *   Piszę o SMAKU, ZAPACHU I TEKSTURZE. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO ZACHĘTY DO ALKOHOLU przy wątku winnicy.
 * — ZERO moralizowania o jedzeniu warzyw przez dzieci.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ⚠ ZERO wątku fontanny (utonięcie dziecka).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Warzywa liściaste"
 * (Drezdenko) dotyczą szpinaku i jarmużu oraz problemu
 * objętości. „Szatkowanie warzyw na surowo" dotyczy surówek.
 * „Kolor jedzenia" dotyczy szarzenia warzyw jako zjawiska
 * ogólnego. „Warzywa korzeniowe" dotyczą marchwi i selera.
 * „Wielkość kawałków" dotyczy krojenia jako zasady.
 * „Gotowanie na parze" (Nowogród Bobrzański) dotyczy samej
 * obróbki. Tutaj chodzi o DWA KONKRETNE WARZYWA i o to,
 * dlaczego prawie zawsze trafiają na stół rozgotowane.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku praw miejskich ani powierzchni miasta.
 * — NIE OPISUJĘ fontanny.
 * — NIE DATUJĘ zboru ewangelickiego.
 * — NIE WYMYŚLAM imprezy kulinarnej ani dożynek — nie ma
 *   takich w źródłach.
 * — NIE PISZĘ o browarze ani młynie.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ BYTOMIA ODRZAŃSKIEGO z BYTOMIEM na Śląsku.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko cztery tysiące mieszkańców, cała
 *   gmina ponad pięć tysięcy na 52,4 km², z dziesięcioma
 *   sołectwami,
 * — pierwsza wzmianka o grodzie pochodzi z 1005 r.,
 *   o kościele świętego Szczepana z 1175, a o kasztelanii
 *   z 1203; pod koniec XII w. miasto przeniesiono około
 *   półtora kilometra na zachód, a lokacja w XIII w. objęła
 *   duży rynek i siedemnaście hektarów — planowano miasto
 *   znacznie większe, ale rozwój zahamowało przesunięcie
 *   szlaków tranzytowych; badania archeologiczne prowadzone
 *   w latach 1984–1996 ustaliły, że gród pełnił także funkcję
 *   gospodarczą i targową,
 * — od 1469 r. miastem władały rody szlacheckie, od 1561
 *   Schönaichowie; wielki pożar w 1694 r. przesądził o dzisiejszym
 *   kształcie zabudowy, w 1697 miasto otrzymało status wolnego
 *   państwa stanowego, a w 1871 kolej. Na początku XVII w.
 *   Georg Schönaich ufundował tu akademickie gimnazjum, w którym
 *   uczył się między innymi poeta Martin Opitz,
 * — miasto leży nad Odrą, w pobliżu Wzgórz Dalkowskich;
 *   po dawnym moście został „urwany most” — stumetrowy z górą
 *   drewniany deptak na palach, dziś ścieżka spacerowa
 *   z tarasami widokowymi na rzekę i port,
 * — w Byczu, jednym z sołectw gminy, działa od 2006 r.
 *   winnica o powierzchni 1,3 ha z ponad trzema tysiącami
 *   krzewów i siedmioma odmianami, założona z zamiarem
 *   przywrócenia tradycji winiarskich sięgających tu XVII w.;
 *   w mieście jest cukiernia, a w Tarnowie Byckim piekarnia,
 * — późnorenesansowy ratusz wzniesiono w latach 1602–1609,
 *   kościół świętego Hieronima pochodzi z początku XVI w.
 *   i ma barokowe wyposażenie z XVIII stulecia oraz krzyże
 *   pokutne, a hotel „Pod Złotym Lwem” barokowy wystrój
 *   elewacji z połowy XVII w.; na rynku stoi kiosk
 *   meteorologiczny. Konserwator zalicza Bytom Odrzański
 *   do najcenniejszych zespołów urbanistycznych województwa,
 *   a jego panoramę z trzema wieżami do najpiękniejszych
 *   w regionie — miasto bywa nazywane „lubuskim Kazimierzem”.
 */
export const BYTOM_ODRZANSKI: CityContent = {
  slug: "bytom-odrzanski",
  h1: "Thermomix Bytom Odrzański – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bytom Odrzański — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bytomiu Odrzańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bytom Odrzański — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bytomiu Odrzańskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bytomia Odrzańskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Bytom Odrzański i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zapach gotowanego kalafiora to skutek przegotowania, nie jego cecha.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bytomiu Odrzańskim – jak wygląda prezentacja?",
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
      id: "kalafior",
      heading: "Małe miasto, drobne rolnictwo — czyli o kalafiorze i brokule",
      paragraphs: [
        "Bytom Odrzański jest mały: blisko cztery tysiące mieszkańców w mieście, ponad pięć w całej gminie, dziesięć sołectw i kilkanaście podmiotów w rolnictwie. A przy tym to jeden z najcenniejszych zespołów urbanistycznych w województwie — bywa nazywany „lubuskim Kazimierzem”, ma późnorenesansowy ratusz z lat 1602–1609 i panoramę z trzema wieżami nad Odrą.",
        "Napiszę o dwóch warzywach, które w takich właśnie okolicach rosną, a w polskich domach są traktowane najgorzej ze wszystkich: o kalafiorze i brokule.",
        "Mają u nas opinię nudnych i wodnistych. Ta opinia nie bierze się jednak z samych warzyw, tylko wyłącznie ze sposobu, w jaki się je przyrządza.",
        "Psuje je jedno i zawsze to samo: zbyt długie gotowanie w wodzie. Rozpadają się, szarzeją i zaczynają wyraźnie pachnieć — tym zapachem, który wielu osobom kojarzy się z kalafiorem na zawsze.",
        "Warto wiedzieć, że ten zapach nie jest ich naturalną cechą. Pojawia się dopiero przy przegotowaniu i im dłużej warzywo siedzi w garnku, tym jest mocniejszy. Kalafior wyjęty w porę pachnie zupełnie inaczej.",
        "Stąd pierwsza zasada: krócej, w mniejszej ilości wody albo na parze — i wyjąć wcześniej, niż podpowiada odruch. Te warzywa dochodzą jeszcze po wyjęciu, więc „prawie gotowe” na talerzu okazuje się gotowe.",
        "Druga droga jest jednak lepsza i polecam ją każdemu, kto twierdzi, że nie lubi brokułów: pieczenie. Upieczone różyczki to po prostu inne warzywo — brzegi się karmelizują, smak robi się orzechowy i słodkawy, a z wodnistości nie zostaje nic.",
        "Drobiazg, który zmienia rachunek ekonomiczny: łodyga brokuła i głąb kalafiora są jadalne i dobre, a wyrzuca się je odruchowo. Obrane z twardej warstwy i pokrojone gotują się równo z różyczkami, a w zupie krem w ogóle nie widać, że tam są.",
        "Rzecz, która rozwiązuje najczęstszy problem: różyczki trzeba robić równe. Nierówne kawałki to jedyna przyczyna, dla której jedne są rozgotowane, a drugie twarde — nie przepis, nie czas, nie odmiana.",
        "Oba warzywa świetnie znoszą towarzystwo tłuszczu, czosnku i czegoś chrupiącego. Bułka tarta podsmażona na maśle, tarty ser, prażone nasiona — to są dodatki, które z nudnego warzywa robią danie, i kosztują grosze.",
        "A zupa krem z kalafiora jest jednym z najłatwiejszych dań, jakie znam, i najlepszym sposobem na dom, w którym nikt nie chce jeść warzyw. Gładka, łagodna, bez kawałków — i nagle okazuje się, że wszyscy jedzą.",
        "Teraz uczciwie o sprzęcie. Thermomix nie upiecze różyczek i nie zrobi chrupiących brzegów — to zadanie dla piekarnika i nic tego nie zastąpi.",
        "Robi natomiast dobrze dwie rzeczy, które przy tych warzywach mają największe znaczenie: gotuje na parze, więc nie leżą w wodzie i nie oddają jej wszystkiego, oraz miksuje na gorąco w tym samym naczyniu, w którym się gotowały. Zupa krem powstaje więc od początku do końca w jednym garnku — a to jest akurat postać, w której kalafior przekonuje do siebie najwięcej osób.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bytomiu Odrzańskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy ktoś w domu wybrzydza na warzywa. Wtedy pokażę zupę krem — działa na większość takich osób.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bytomiu Odrzańskim"),
    sekcjaRaty("w Bytomiu Odrzańskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla bytomskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców, a cała gmina ponad pięć tysięcy na pięćdziesięciu dwóch kilometrach kwadratowych, z dziesięcioma sołectwami. Pierwsza wzmianka o grodzie pochodzi z 1005 roku, o kościele świętego Szczepana z 1175, a o kasztelanii z 1203; pod koniec XII wieku miasto przeniesiono około półtora kilometra na zachód, a lokacja w XIII wieku objęła duży rynek i siedemnaście hektarów — planowano więc miasto znacznie większe, ale rozwój zahamowało przesunięcie szlaków tranzytowych. Badania archeologiczne z lat 1984–1996 ustaliły, że tutejszy gród pełnił także funkcję gospodarczą i targową. Od 1469 roku miastem władały rody szlacheckie, od 1561 Schönaichowie; wielki pożar w 1694 przesądził o dzisiejszym kształcie zabudowy, w 1697 Bytom otrzymał status wolnego państwa stanowego, a w 1871 kolej. Na początku XVII wieku Georg Schönaich ufundował tu akademickie gimnazjum, w którym uczył się między innymi poeta Martin Opitz. Miasto leży nad Odrą, w pobliżu Wzgórz Dalkowskich, a po dawnym moście został „urwany most” — drewniany deptak na palach, dziś ścieżka spacerowa z tarasami widokowymi na rzekę i port. W Byczu, jednym z sołectw gminy, działa od 2006 roku winnica o powierzchni ponad hektara, z ponad trzema tysiącami krzewów, założona z zamiarem przywrócenia tradycji winiarskich sięgających tu XVII wieku. Późnorenesansowy ratusz wzniesiono w latach 1602–1609, kościół świętego Hieronima pochodzi z początku XVI wieku i ma barokowe wyposażenie oraz krzyże pokutne, a hotel „Pod Złotym Lwem” barokowy wystrój elewacji z połowy XVII stulecia; na rynku stoi kiosk meteorologiczny.",
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

  districtsHeading: "Do których części gminy Bytom Odrzański dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Bytom Odrzański też przyjadę",
  nearbyParagraphs: [
    "Nowa Sól, Kożuchów, Głogów, Siedlisko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowa Sól", "Kożuchów", "Głogów", "Siedlisko"],

  about: blokOMnie("do Bytomia Odrzańskiego", "w Bytomiu Odrzańskim i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bytomia Odrzańskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziesięciu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to mylące nawet dla wyszukiwarek: Bytom Odrzański nad Odrą w powiecie nowosolskim to nie Bytom na Śląsku.",
    },
    ...faqWspolne("w Bytomiu Odrzańskim"),
    {
      question: "Dlaczego gotowany kalafior tak pachnie?",
      answer:
        "Bo był za długo gotowany. Ten zapach nie jest naturalną cechą kalafiora — pojawia się przy przegotowaniu i narasta z każdą minutą. Warzywo wyjęte w porę pachnie zupełnie inaczej. Krócej, w mniejszej ilości wody albo na parze, i wyjąć wcześniej, niż podpowiada odruch.",
    },
    {
      question: "Jak przyrządzić brokuła, żeby nie był wodnisty?",
      answer:
        "Upiec. Upieczone różyczki to inne warzywo: brzegi się karmelizują, smak robi się orzechowy i słodkawy. Warto też pamiętać, żeby różyczki były równe — nierówne kawałki to jedyna przyczyna, dla której jedne wychodzą rozgotowane, a drugie twarde.",
    },
    {
      question: "Czy wyrzucać łodygę brokuła i głąb kalafiora?",
      answer:
        "Nie — są jadalne i dobre. Obrane z twardej warstwy i pokrojone gotują się równo z różyczkami, a w zupie krem w ogóle nie widać, że tam są. Sama zupa krem z kalafiora to przy tym najprostszy sposób na dom, w którym nikt nie chce jeść warzyw.",
    },
  ],

  geo: { lat: 51.7292, lng: 15.8194 },
};
