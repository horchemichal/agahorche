import type { CityContent } from "../city-content";
import {
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
 * MAKÓW PODHALAŃSKI — gmina miejsko-wiejska, powiat suski.
 * Ok. 15,7 tys. mieszkańców na 108,7 km², osiem jednostek pomocniczych.
 *
 * OŚ STRONY: HAFT MAKOWSKI, a dokładniej SZKOŁA HAFCIARSKA.
 * Nie „lokalne rękodzieło” jako ozdobnik, tylko instytucja: krajowa
 * szkoła zawodowa utrzymywana z pieniędzy publicznych, założona
 * pod koniec XIX w. po to, żeby kobiety w górskim miasteczku miały
 * z czego żyć. To jest historia o pracy, nie o folklorze — i dlatego
 * daje uczciwe przejście do tematu czasu spędzanego rękami.
 *
 * Druga oś, wspierająca: DOJAZD. Maków ma najlepsze połączenie kolejowe
 * z Krakowem w całym powiecie — najszybszy pociąg jedzie 1 h 01 min.
 * To lepiej niż z Suchej Beskidzkiej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KRAJOWA SZKOŁA HAFCIARSKA: regulamin z 3 lipca 1896 r., po
 *   uchwaleniu funduszy przez Sejm Krajowy. Budynek przy Rynku 8
 *   ofiarowała Maria Tarkowa. Pierwsza kierowniczka Ewa Antonowicz,
 *   nadzór techniczny Leona Bierkowska,
 * — TECHNIKA: biały haft płaski nićmi lnianymi lub bawełnianymi
 *   na białym lnie; ściegi łańcuszkowy, sznureczkowy, atłaskowy,
 *   elementy ażurowe i „toledo”. Haftuje się bez liczenia nitek,
 * — SPÓŁDZIELNIA „MAKOWIANKA” zał. 1950; w latach 1971–1974
 *   przeszkoliła ok. 400 hafciarek. UWAGA: KRS 0000139061 —
 *   spółdzielnia jest W LIKWIDACJI. NIE WOLNO pisać o niej
 *   w czasie teraźniejszym jako o działającej,
 * — ANNA KOZIANIE (1933–2022) — znana makowska hafciarka,
 * — 23 maja 2025 r. odsłonięto tablicę pamiątkową szkoły hafciarskiej,
 * — na rynku stoi FONTANNA Z FIGURĄ HAFCIARKI,
 * — dziś haft podtrzymują Miejska Biblioteka Publiczna
 *   i Stowarzyszenie STIM-ART; wydano wzornik haftów makowskich,
 * — JEDNOSTKI POMOCNICZE (8): osiedla Maków Centrum i Maków Dolny
 *   oraz sołectwa Białka, Grzechynia, Juszczyn, Kojszówka, Wieprzec,
 *   Żarnówka,
 * — LUDNOŚĆ MIEJSCOWOŚCI (dane meldunkowe, 31.12.2025): Maków
 *   Podhalański 5 365, Białka 2 655, Juszczyn 2 497, Grzechynia 2 470,
 *   Żarnówka 1 227, Kojszówka 876, Wieprzec 395,
 * — LUDNOŚĆ GMINY 15 693 (GUS, 31.12.2024), powierzchnia 108,7 km²,
 * — KOLEJ: ok. 9 połączeń bezpośrednich dziennie z Krakowa Głównego,
 *   najszybsze 1 h 01 min; Polregio, Koleje Śląskie, PKP Intercity,
 * — SAMOCHODEM 66–71 km, ok. 1 h 16 min, głównie DK28,
 * — SANKTUARIUM: kościół 1697–1701, obraz Pani Makowskiej z końca
 *   XVI w., koronowany przez Jana Pawła II w 1979 r.,
 * — HISTORIA GOSPODARCZA: wyrób beczek na sól w średniowieczu,
 *   huta żelaza „Maurycy” czynna ok. 19 lat od 1844 r.,
 *   stacja kolejowa od 1884 r.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NUMERU LINII KOLEJOWEJ. Nie udało się go potwierdzić w źródle
 *   przewoźnika. Piszę o połączeniach i czasie przejazdu, bez numeru,
 * — TWIERDZENIA, ŻE HAFT JEST NA LIŚCIE DZIEDZICTWA. Nie jest.
 *   W czerwcu 2024 r. odbyły się dopiero konsultacje społeczne
 *   w sprawie starań o wpis na krajową listę niematerialnego
 *   dziedzictwa kulturowego. Pisanie o UNESCO byłoby błędem,
 * — DATY 1890 ANI 1892 przy szkole hafciarskiej. Krążą trzy wersje;
 *   najlepiej udokumentowana jest 1896 i tylko ona pada w tekście,
 * — NAZW PRACODAWCÓW. Nie udało się potwierdzić żadnej listy
 *   działających zakładów. Nie wymieniam ani jednej firmy,
 * — LICZBY HAFCIAREK „BLISKO TYSIĄCA”. Krążą dwie wersje;
 *   używam wyłącznie udokumentowanych 400 z lat 1971–1974,
 * — POTRAWY LOKALNEJ. Brak wpisu na Liście Produktów Tradycyjnych
 *   i brak udokumentowanego dania wyłącznie makowskiego.
 *
 * PUŁAPKI:
 * — MAKÓW PODHALAŃSKI NIE LEŻY NA PODHALU. Mimo nazwy gmina leży
 *   w BESKIDZIE MAKOWSKIM. Przypisywanie jej oscypka, kwaśnicy
 *   czy „kuchni góralskiej Podhala” to błąd merytoryczny.
 *   Strona mówi o tym wprost,
 * — TO NIE MAKÓW MAZOWIECKI,
 * — GMINA MA OSIEDLA I SOŁECTWA, nie same sołectwa,
 * — WIEPRZEC MA 395 MIESZKAŃCÓW, Maków 5 365. Różnica trzynastokrotna
 *   — nie opisywać jednostek jako równorzędnych,
 * — SPÓŁDZIELNIA W LIKWIDACJI (patrz wyżej). Haft podtrzymują dziś
 *   biblioteka i stowarzyszenie, nie spółdzielnia.
 */

export const MAKOW_PODHALANSKI: CityContent = {
  slug: "makow-podhalanski",
  h1: "Thermomix Maków Podhalański – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Maków Podhalański — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Maków Podhalański: bezpłatna prezentacja TM7 u Ciebie w kuchni — Maków, Białka, Juszczyn, Grzechynia. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Maków Podhalański — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Maków Podhalański. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Maków Podhalański przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Maków Podhalański – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Makowie, jak w Białce, Juszczynie czy Grzechyni.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Miasteczko, które kiedyś uczyło kobiety haftu jako zawodu",
      paragraphs: [
        "W tysiąc osiemset dziewięćdziesiątym szóstym roku galicyjski Sejm Krajowy uchwalił pieniądze na szkołę hafciarską w Makowie. Regulamin podpisano trzeciego lipca. Budynek przy rynku oddała na ten cel mieszkanka miasta, Maria Tarkowa. Pierwszą kierowniczką została Ewa Antonowicz.",
        "To nie było koło zainteresowań. To była publiczna szkoła zawodowa, założona z bardzo praktycznego powodu: w górskim miasteczku, gdzie ziemi było mało i była kiepska, kobiety potrzebowały fachu, z którego da się żyć. Haft makowski jest biały na białym — nici lniane albo bawełniane na lnianym płótnie, ściegi łańcuszkowy, sznureczkowy i atłaskowy, elementy ażurowe. Haftuje się bez liczenia nitek, czyli trzeba prowadzić wzór z głowy i z wprawy.",
        "Po wojnie fach zorganizowano w spółdzielnię, założoną w tysiąc dziewięćset pięćdziesiątym roku. Tylko w latach siedemdziesiątych przeszkoliła około czterystu hafciarek. Spółdzielni już nie ma — jest w likwidacji — ale sam haft przetrwał: prowadzą go dziś biblioteka miejska i lokalne stowarzyszenie, wydano wzornik, a w maju dwa tysiące dwudziestego piątego roku odsłonięto tablicę upamiętniającą szkołę. Na rynku stoi fontanna z figurą hafciarki.",
        "Piszę o tym na stronie o urządzeniu kuchennym z premedytacją, bo to ta sama sprawa widziana z drugiej strony. Haft jest robotą, w której liczy się czas spędzony rękami — i właśnie dlatego przestał być zawodem, gdy ten czas zaczął być za drogi. Gotowanie poszło tą samą drogą, tylko wolniej.",
        "Nie zamierzam z tego robić morału, że kiedyś było lepiej. Powiem raczej tak: w domu, w którym ktoś siada wieczorem do roboty ręcznej — obojętnie, czy to haft, szydełko, czy poprawianie czegoś po dzieciach — godzina odzyskana z kuchni idzie na coś konkretnego. To jest cały argument.",
        "I od razu uczciwie, czego to urządzenie nie zrobi: nie zastąpi wprawy i nie ugotuje bez Ciebie. Zabiera siekanie, ucieranie, mieszanie i pilnowanie, żeby nie przywarło — czyli te czynności, które trwają, a nie wymagają umiejętności.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Maków Podhalański?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której miejscowości mieszkasz. Gmina jest rozciągnięta na ponad sto kilometrów kwadratowych i różnice są spore: Juszczyn, Grzechynia i Białka to duże wsie po dwa i pół tysiąca mieszkańców, a Wieprzec liczy niecałe czterysta osób. Dojazd wszędzie jest bez dopłaty, ale trasę planuję inaczej.",
        "Wieczory w tygodniu i sobotnie przedpołudnia są tu najczęściej wybieranymi terminami. Jeśli dojeżdżasz do pracy pociągiem do Krakowa, powiedz o której wracasz — dopasuję się.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Maków Podhalański"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Godzina w pociągu w jedną stronę",
      paragraphs: [
        "Maków ma najlepsze połączenie kolejowe z Krakowem w całym powiecie suskim. Najszybszy pociąg pokonuje tę trasę w godzinę i minutę, a bezpośrednich połączeń jest dziewięć dziennie. Dla porównania: samochodem to około siedemdziesięciu kilometrów i zwykle ponad godzina piętnaście, a to przy dobrym ruchu.",
        "To znaczy, że mieszka tu sporo osób pracujących w Krakowie i wracających wieczorem. Godzina w jedną stronę jest do wytrzymania, ale dwie godziny dziennie z życia znikają — i to widać właśnie w kuchni, bo znikają dokładnie z tej pory, o której powinien powstawać obiad.",
        "W takim domu praktyczna jest przede wszystkim ta rzecz, że danie może się gotować bez nikogo. Wstawiasz i wychodzisz. Albo odwrotnie: wracasz, wstawiasz, idziesz się przebrać i zająć dziećmi, a obiad w tym czasie się robi i sam wyłącza. Nie trzeba stać ani wracać zamieszać.",
        "Druga rzecz to gotowanie na zapas w niedzielę. Podwójna porcja zupy, sos na kilka dni, ciasto na pierogi, pasty kanapkowe do lodówki, chleb. W jednym naczyniu, seriami. W domu, w którym dwie osoby dojeżdżają, zapas jest wart więcej niż codzienne świeże gotowanie, na które i tak nie ma czasu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają coś robić, bo przepis prowadzi krok po kroku — a gdy rodzic wraca o osiemnastej, to bywa realnie potrzebne.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Maków Podhalański i gotowanie — bez oscypka, bo to nie Podhale",
    paragraphs: [
      "Zacznę od prostowania nazwy, bo prowadzi ona na manowce wielu tekstów o tej gminie. Maków Podhalański nie leży na Podhalu. Leży w Beskidzie Makowskim, a przymiotnik w nazwie to sprawa administracyjna, nie etnograficzna. Dlatego nie znajdziesz tu oscypka ani kwaśnicy jako dania miejscowego i nie będę udawać, że jest inaczej.",
      "Nie znalazłam też żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych. Mogłabym w to miejsce wstawić jakieś ogólne danie górskie i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "To, co tu naprawdę jest, to zwykła kuchnia beskidzkiego podgórza: ziemniaki, kapusta, mleko i to, co daje własny ogród. Kuchnia oszczędna, oparta na kilku produktach i na czasie. Zupa, kluski, placki, kiszonki, ciasto drożdżowe na niedzielę. Nic z tego nie jest trudne — wszystko wymaga stania w kuchni.",
      "I dokładnie na tym polega różnica, którą robi urządzenie. Ciasto drożdżowe wyrabia się samo. Zupa gotuje się bez pilnowania. Placki ziemniaczane wciąż trzeba usmażyć na patelni, ale ziemniaki nie idą już na tarce, tylko do naczynia. To nie jest zmiana kuchni — to jest zmiana tego, ile czasu przy niej stoisz.",
    ],
  },

  districtsHeading: "Gdzie w gminie Maków Podhalański dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich miejscowości gminy, bez żadnej dopłaty za odległość: Makowa Podhalańskiego wraz z Makowem Dolnym, Białki, Grzechyni, Juszczyna, Kojszówki, Wieprzca i Żarnówki.",
    "Warto wiedzieć, jak ta gmina jest zbudowana, bo to nie jest miasteczko z kilkoma przysiółkami. Sam Maków ma około pięciu i pół tysiąca mieszkańców, ale Białka, Juszczyn i Grzechynia to duże wsie liczące po dwa i pół tysiąca osób każda. Wieprzec dla odmiany ma niecałe czterysta. Cała gmina zajmuje ponad sto osiem kilometrów kwadratowych.",
    "Dojazd koleją jest tu naprawdę dobry. Bezpośrednich pociągów z Krakowa Głównego jest około dziewięciu dziennie, a najszybszy pokonuje trasę w godzinę i minutę — to najlepszy wynik w powiecie. Obsługują je Polregio, Koleje Śląskie i PKP Intercity. Sama stacja działa tu od tysiąc osiemset osiemdziesiątego czwartego roku.",
    "Samochodem z Krakowa jest około siedemdziesięciu kilometrów drogą krajową numer dwadzieścia osiem, czyli mniej więcej godzina i kwadrans. W praktyce, jeśli jedziesz sam(a), pociąg bywa szybszy.",
  ],
  districts: [
    "Maków Podhalański",
    "Maków Dolny",
    "Białka",
    "Juszczyn",
    "Grzechynia",
    "Żarnówka",
    "Kojszówka",
    "Wieprzec",
  ],

  nearbyHeading: "Sucha Beskidzka, Zawoja i Budzów też są na mojej trasie",
  nearbyParagraphs: [
    "Do Suchej Beskidzkiej mam stąd kilkanaście minut, do Zawoi, Budzowa i Stryszawy trochę dalej, ale wciąż w tym samym powiecie. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Maków jest dla wielu okolicznych wsi naturalną stacją przesiadkową — także dosłownie, bo do pociągu do Krakowa jeździ się tu z Zawoi i z okolicy. Jeśli mieszkasz na granicy gmin i nie masz pewności, po której stronie, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Sucha Beskidzka",
    "Zawoja",
    "Budzów",
    "Stryszawa",
    "Zembrzyce",
    "Kraków",
  ],

  about: blokOMnie("do gminy Maków Podhalański", "w powiecie suskim"),

  faq: [
    {
      question: "Mieszkam w Juszczynie, nie w samym Makowie. Dojedziesz?",
      answer:
        "Oczywiście i bez żadnej dopłaty. Juszczyn, Białka i Grzechynia to duże wsie po około dwa i pół tysiąca mieszkańców — jeżdżę tam tak samo często jak do Makowa. Powiedz tylko przy umawianiu, w której części wsi mieszkasz, bo są rozciągnięte i wolę trafić za pierwszym razem.",
    },
    ...faqWspolne("w gminie Maków Podhalański"),
    {
      question: "Czy Maków Podhalański leży na Podhalu?",
      answer:
        "Nie, mimo nazwy. Gmina leży w Beskidzie Makowskim, a przymiotnik w nazwie to kwestia administracyjna. Piszę to wprost, bo z tego nieporozumienia biorą się teksty przypisujące Makowowi oscypka i kuchnię podhalańską, które nie mają tu nic do rzeczy.",
    },
    {
      question: "Dojeżdżam do pracy do Krakowa. Czy zdążymy wieczorem?",
      answer:
        "Zdążymy. Prezentacja trwa około dwóch godzin, więc jeśli wracasz pociągiem po siedemnastej, spokojnie umawiamy się na osiemnastą albo później. Sporo osób w tej gminie dojeżdża do Krakowa — najszybszy pociąg jedzie godzinę i minutę — więc to bardzo typowy scenariusz i mam go rozpracowany.",
    },
  ],

  geo: { lat: 49.7297, lng: 19.6789 },
};
