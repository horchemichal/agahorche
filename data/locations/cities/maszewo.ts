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
 * MASZEWO — powiat goleniowski,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 313 mieszkańców (GUS 31.12.2024), 5,5 km²,
 * gęstość 598,0 os./km², 66 M N.P.M.
 * CAŁA GMINA: 8 523 osoby, 210,3 km².
 * ⚠⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródła podają
 *   „około 33" ALBO „około 36". Piszę opisowo.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,4963 / 15,0615.
 * GMINA GRANICZY Z SIEDMIOMA INNYMI: Chociwel, Dobra,
 *   Goleniów, Nowogard, Osina, Stara Dąbrowa, Stargard.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY — NAJWAŻNIEJSZA PUŁAPKA:
 *   W POLSCE JEST CO NAJMNIEJ PIĘĆ MIEJSCOWOŚCI MASZEWO
 *   (m.in. osobna gmina Maszewo w lubuskiem, powiecie
 *   krośnieńskim, a także w gorzowskim, mazowieckiem
 *   i kujawsko-pomorskiem).
 *   ⚠⚠ ZAWSZE PRECYZUJĘ POWIAT GOLENIOWSKI
 *   I WOJEWÓDZTWO. ROZGRANICZAM W FAQ — obowiązkowo.
 *   ⚠⚠ Dodatkowo w TYM SAMYM POWIECIE leżą MARSZEWO
 *   i MASZKOWO — nazwy niemal bliźniacze.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Maszewo".
 *   D. MASZEWA, Ms. W MASZEWIE.
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   w sekcji rodzinnej piszę „dla rodziny z Maszewa".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1233 — pierwsza wzmianka (proboszcz Bertram).
 *   ⚠ PODAJĘ SAM ROK, bez wątku wyznaniowego.
 * — 1278 — PRAWA MIEJSKIE NA PRAWIE MAGDEBURSKIM.
 * — 1286 — PRZYWILEJ NA PRAWIE LUBECKIM oraz prawo
 *   posiadania młynów i połowu ryb.
 *   ⚠⚠ DWA NADANIA W ODSTĘPIE OŚMIU LAT — podaję jako
 *   fakt, bez robienia z tego kąta.
 * — 1334 — sprzedaż części grodu.
 * — ⚠⚠⚠ RDZEŃ KĄTA — MURY MIEJSKIE:
 *   ZBUDOWANE NA PLANIE KOŁA O ŚREDNICY 400 M,
 *   z 25 PÓŁBASZTAMI oraz tzw. BASZTĄ FRANCUSKĄ.
 *   ⚠ OBWÓD KOŁA O TEJ ŚREDNICY TO OKOŁO 1 260 M,
 *   czyli baszta mniej więcej co pięćdziesiąt metrów —
 *   ⚠⚠ TO JEST MOJE WYLICZENIE, NIE DANA ZE ŹRÓDŁA.
 *   Podaję je jako własny rachunek albo pomijam.
 * — RATUSZ z lat 1821–1827; SZPITAL z 1740 r.;
 *   ZAMEK z XVI w.
 * — 1903 — połączenie kolejowe z Goleniowem.
 * — ⚠⚠ EPIDEMII Z 1625 R. I POŻARÓW Z LAT 1628–1639
 *   NIE UŻYWAM.
 * — ⚠⚠ WZROSTU LICZBY LUDNOŚCI O 8 % NIE UŻYWAM —
 *   każda rozmowa o demografii prowadzi do porównań.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy
 *   Maszewo (powiat goleniowski). NIE SUGERUJĘ
 *   ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: NIE MA KOŃCA, JEST RYTM — o tym, że gotowanie nie
 * jest zadaniem, które się kiedyś odhacza.
 * Kąt od murów Maszewa: zbudowano je na planie koła
 * o średnicy czterystu metrów. Idąc wzdłuż takiego muru,
 * nigdy nie dochodzi się do końca — wraca się do punktu
 * wyjścia, nie skręcając ani razu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że mury Maszewa zbudowano na planie koła o średnicy
 *   czterystu metrów, z dwudziestoma pięcioma półbasztami
 *   i Basztą Francuską,
 * — ŻE MUR NA PLANIE KOŁA NIE MA KOŃCA, TYLKO PUNKT
 *   WYJŚCIA — to jest rdzeń,
 * — ⚠⚠ ŻE GOTOWANIE JEST DOKŁADNIE TAKIM MUREM, A MYŚLIMY
 *   O NIM JAK O ODCINKU: jakby dało się „ogarnąć temat
 *   jedzenia", wprowadzić system i mieć spokój.
 *   Nie da się, bo jutro znowu jest obiad,
 * — ⚠⚠ ŻE TO NIE JEST ZŁA WIADOMOŚĆ, TYLKO ZMIANA MIARY:
 *   rzeczy cykliczne ocenia się inaczej niż projekty.
 *   Przy projekcie liczy się ukończenie; przy cyklu
 *   liczy się, czy da się go utrzymać w nieskończoność,
 * — ⚠⚠ ŻE Z TEGO WYNIKA KONKRETNE PYTANIE DO KAŻDEGO
 *   NOWEGO POMYSŁU NA KUCHNIĘ: czy wytrzymam to
 *   w najgorszym tygodniu, jaki mnie czeka.
 *   Nie „czy to dobre", tylko „czy to przetrwa zły
 *   tydzień",
 * — ⚠⚠ ŻE WIĘKSZOŚĆ SYSTEMÓW UPADA NIE DLATEGO, ŻE SĄ
 *   ZŁE, tylko dlatego, że projektuje się je na tydzień
 *   dobry — a takich jest mniej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CYKL NIE ZNACZY, ŻE NIC
 *   SIĘ NIE ZMIENIA. Mur na planie koła też nie stanął
 *   w jeden rok. Chodzi o to, żeby nie oczekiwać
 *   momentu, w którym „będzie już z głowy",
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie kończy cyklu
 *   i nie zdejmuje gotowania z listy. Obniża za to koszt
 *   pojedynczego obiegu — a przy czymś, co powtarza się
 *   bez końca, to jest jedyna rzecz, która w ogóle ma
 *   znaczenie. MÓWIĘ TO WPROST, bo „koniec z gotowaniem"
 *   to obietnica, której nikt nie dotrzyma.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAPROJEKTOWANIA NARAZ KONTRA DOKŁADANIA
 *   PO KOLEI — kąt zajęty (Zamość). ⚠⚠ Koło o średnicy
 *   400 m aż się prosi o ten morał. NIE WCHODZĘ W NIEGO:
 *   nie piszę ani słowa o tym, że miasto zaplanowano
 *   z góry, ani o kompletowaniu wyposażenia kuchni.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ODSTĘPU MIĘDZY BASZTAMI JAKO TEMATU —
 *   kąt zajęty (Kowalewo Pomorskie).
 * — ⚠⚠ ZERO TRZECIEGO TYGODNIA I KOŃCA ZAPAŁU — kąt
 *   zajęty (Konin). ⚠⚠ TO JEST NAJBLIŻSZY KĄT.
 *   Tam chodzi o MOMENT, W KTÓRYM NOWOŚĆ SIĘ KOŃCZY;
 *   TUTAJ o TO, ŻE CYKLU NIE DA SIĘ SKOŃCZYĆ W OGÓLE.
 *   Ani jednego zdania o zapale ani o nowości.
 *   Rozgraniczam wprost.
 * — ⚠⚠ ZERO OKRESU PRÓBNEGO I LICZBY PODEJŚĆ — kąt
 *   zajęty (Sławno).
 * — ⚠⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt zajęty
 *   (Międzyzdroje).
 * — ⚠⚠ ZERO NIERÓWNEGO ROZKŁADU WYSIŁKU NA TYDZIEŃ —
 *   kąt zajęty (Lipiany, ta sama fala). Tam chodzi
 *   o TO, GDZIE WŁOŻYĆ WYSIŁEK W OBRĘBIE TYGODNIA;
 *   TUTAJ o TO, ŻE TYGODNI JEST NIESKOŃCZENIE WIELE.
 * — ⚠ ZERO ZWYKŁEGO DNIA BEZ OKAZJI — kąt zajęty
 *   (Miłakowo).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO KONKRETNEGO SYSTEMU ANI PLANU TYGODNIA —
 *   podaję WYŁĄCZNIE pytanie sprawdzające.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO EPIDEMII Z 1625 R. I POŻARÓW Z LAT 1628–1639.
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO — opisuję je
 *   jako budowlę o kształcie i wymiarach.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠ ZERO WĄTKU WYZNANIOWEGO — proboszcza z 1233 r.
 *   i kościołów nie wprowadzam.
 * — ⚠ ZERO DEMOGRAFII — także wzrostu.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości — źródła podają
 *   33 albo 36.
 * — NIE PODAJĘ obwodu muru jako danej źródłowej —
 *   to mój rachunek z średnicy.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO SYSTEMU NA TYDZIEŃ.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Maszewo leży w powiecie goleniowskim; jest miastem
 *   w gminie miejsko-wiejskiej i liczy 3 313 mieszkańców
 *   (GUS, 31.12.2024) na 5,5 km², sześćdziesiąt sześć
 *   metrów nad poziomem morza, a cała gmina 8 523 osoby
 *   na 210,3 km² i graniczy aż z siedmioma innymi
 *   gminami: Chociwlem, Dobrą, Goleniowem, Nowogardem,
 *   Osiną, Starą Dąbrową i Stargardem,
 * — pierwsza wzmianka o miejscowości pochodzi z 1233 r.,
 *   prawa miejskie na prawie magdeburskim miasto
 *   otrzymało w 1278 r., a w 1286 przywilej na prawie
 *   lubeckim wraz z prawem posiadania młynów i połowu
 *   ryb; w 1334 r. sprzedano część grodu,
 * — mury miejskie zbudowano na planie koła o średnicy
 *   czterystu metrów, z dwudziestoma pięcioma
 *   półbasztami i tak zwaną Basztą Francuską,
 * — szpital wzniesiono w 1740 r., zamek pochodzi
 *   z XVI w., ratusz zbudowano w latach 1821–1827,
 *   a połączenie kolejowe z Goleniowem miasto otrzymało
 *   w 1903 r.
 */
export const MASZEWO: CityContent = {
  slug: "maszewo",
  h1: "Thermomix Maszewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Maszewo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Maszewie (powiat goleniowski): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Maszewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Maszewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Maszewa w powiecie goleniowskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Maszewo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Idąc wzdłuż muru na planie koła, nie dochodzi się do końca. Wraca się do początku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Maszewie – jak wygląda prezentacja?",
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
      id: "nie-ma-konca",
      heading: "Mur na planie koła",
      paragraphs: [
        "Mury Maszewa zbudowano na planie koła o średnicy czterystu metrów, z dwudziestoma pięcioma półbasztami i tak zwaną Basztą Francuską. Niecały kilometr trzysta metrów obwodu, jeśli to przeliczyć.",
        "Idąc wzdłuż takiego muru, nie dochodzi się do żadnego końca. Nie ma ostatniej baszty ani punktu, w którym mur się urywa. Wraca się do miejsca, z którego się wyszło, nie skręcając po drodze ani razu.",
        "I to jest dokładnie kształt gotowania, choć myślimy o nim zupełnie inaczej.",
        "Myślimy o nim jak o odcinku. Jakby dało się w końcu „ogarnąć temat jedzenia”: wprowadzić system, zrobić zapas, ustawić tydzień i mieć spokój. A potem jest jutro i znowu jest obiad.",
        "To nie jest zła wiadomość. To jest po prostu inna miara i warto ją zmienić świadomie.",
        "Przy projekcie liczy się ukończenie: było ciężko, ale się skończyło. Przy cyklu ukończenie nie istnieje, więc liczy się coś innego — czy da się to utrzymać w nieskończoność. To jedyne kryterium, które przy czymś powtarzalnym w ogóle działa.",
        "Stąd pytanie, które warto zadać każdemu nowemu pomysłowi na kuchnię, zanim się go wprowadzi: czy wytrzymam to w najgorszym tygodniu, jaki mnie czeka. Nie „czy to dobry pomysł”. Nie „czy dam radę teraz”. Tylko: czy to przetrwa zły tydzień.",
        "Bo większość domowych systemów nie upada dlatego, że były złe. Upada dlatego, że projektowano je na tydzień dobry — a takich jest w roku po prostu mniej. System wymyślony w niedzielę wieczorem zwykle nie przewiduje środy, w której wszystko się posypało.",
        "Uczciwie o drugiej stronie: cykl nie znaczy, że nic się nie zmienia i że wszystko jest z góry przesądzone. Mur na planie koła też nie stanął w jeden rok. Chodzi wyłącznie o to, żeby przestać czekać na moment, w którym „będzie już z głowy” — bo ten moment nie nadejdzie i czekanie na niego męczy bardziej niż samo gotowanie.",
        "Na koniec o urządzeniu, wprost i bez obietnic. Ono nie kończy cyklu. Nie zdejmuje gotowania z listy i nikt, kto je kupi, nie przestanie gotować.",
        "Robi coś innego: obniża koszt jednego obiegu. A przy czymś, co powtarza się bez końca, to jest w zasadzie jedyna rzecz, która ma znaczenie — bo nawet mała różnica przemnożona przez wszystkie przyszłe środy robi się duża. „Koniec z gotowaniem” to natomiast obietnica, której nikt nie dotrzyma, i nie usłyszycie jej ode mnie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Maszewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jak wygląda u Was najgorszy tydzień w miesiącu — pod taki dobiorę dania, bo tylko one mają szansę zostać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Maszewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Maszewa",
      paragraphs: [
        "Maszewo leży w powiecie goleniowskim i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad trzy tysiące trzystu mieszkańców na pięciu i pięciu dziesiątych kilometra kwadratowego, sześćdziesiąt sześć metrów nad poziomem morza, a cała gmina ponad osiem i pół tysiąca osób na dwustu dziesięciu kilometrach kwadratowych — i graniczy aż z siedmioma innymi gminami: Chociwlem, Dobrą, Goleniowem, Nowogardem, Osiną, Starą Dąbrową i Stargardem. Pierwsza wzmianka o miejscowości pochodzi z 1233 roku, prawa miejskie na prawie magdeburskim miasto otrzymało w 1278, a w 1286 przywilej na prawie lubeckim wraz z prawem posiadania młynów i połowu ryb; w 1334 sprzedano część grodu. Mury miejskie zbudowano tu na planie koła o średnicy czterystu metrów, z dwudziestoma pięcioma półbasztami i tak zwaną Basztą Francuską. Szpital wzniesiono w 1740 roku, zamek pochodzi z szesnastego wieku, ratusz zbudowano w latach 1821–1827, a połączenie kolejowe z Goleniowem miasto otrzymało w 1903.",
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

  districtsHeading: "Do których części Maszewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w obrębie dawnego okręgu murów i poza nim — i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Maszewo też przyjadę",
  nearbyParagraphs: [
    "Goleniów jest około dwudziestu kilometrów stąd, Stargard i Nowogard niewiele dalej, a Szczecin mieści się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Goleniów", "Stargard", "Nowogard", "Szczecin"],

  about: blokOMnie("do Maszewa", "w Maszewie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Maszewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzowanie jest tu wyjątkowo potrzebne, bo w Polsce jest co najmniej pięć miejscowości o tej nazwie: chodzi o Maszewo w powiecie goleniowskim w województwie zachodniopomorskim — nie o gminę Maszewo w lubuskiem. W tym samym powiecie leżą zresztą także Marszewo i Maszkowo, więc przy umawianiu warto podać powiat.",
    },
    ...faqWspolne("w Maszewie"),
    {
      question: "Dlaczego domowe systemy na gotowanie tak szybko upadają?",
      answer:
        "Bo projektuje się je na tydzień dobry, a takich jest w roku mniej. Gotowanie nie jest projektem, który się kończy — jest cyklem, więc nie liczy się w nim ukończenie, tylko to, czy da się je utrzymać w nieskończoność. Warto zadać każdemu nowemu pomysłowi jedno pytanie: czy wytrzymam to w najgorszym tygodniu, jaki mnie czeka.",
    },
    {
      question: "Czy po zakupie Thermomixa przestanę się zajmować gotowaniem?",
      answer:
        "Nie i nie usłyszycie ode mnie takiej obietnicy. Urządzenie nie kończy cyklu i nie zdejmuje gotowania z listy. Obniża koszt jednego obiegu — a przy czymś, co powtarza się bez końca, to właściwie jedyna rzecz, która ma znaczenie, bo nawet mała różnica przemnożona przez wszystkie przyszłe środy robi się duża.",
    },
  ],

  geo: { lat: 53.4963, lng: 15.0615 },
};
