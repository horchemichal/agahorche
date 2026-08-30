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
 * RYGLICE — GMINA MIEJSKO-WIEJSKA w powiecie tarnowskim.
 * Gmina: 11 165 mieszkańców (GUS, 31.12.2024), 117,1 km², 96 os./km²,
 * −1,8% od 2002, średni wiek 39,8, REGON 892 (762 osoby fizyczne),
 * lesistość ok. 25,7%.
 * Miasto Ryglice: 2 660 mieszkańców, 25,2 km², średni wiek 41,3.
 * 7 SOŁECTW + jednostka pomocnicza „Miasto Ryglice”.
 *
 * OŚ STRONY: STOLICA MNIEJSZA OD WŁASNEJ WSI. Zalasowa ma 3 191
 * mieszkańców (NSP 2021), miasto Ryglice 2 660 (31.12.2024) — różnica
 * ok. 530 osób, czyli 20%. Zalasowa jest też większa powierzchniowo
 * (ponad 26 km² wobec 25,2), młodsza, bliżej Tarnowa o 9 km i ma niemal
 * tyle samo firm (254 wobec 260).
 * ⚠️⚠️ OŚ ŚWIADOMIE OMIJA PRAWA MIEJSKIE. Ryglice mają wzorzec
 * analogiczny do CZCHOWA (1928→2000) i SKAŁY: 1824 → utrata 1934 →
 * odzyskanie 2001. Daty wolno podać w treści, ale NIE budować na nich
 * narracji. Tu osią jest PARADOKS SKALI PO ODZYSKANIU, nie samo
 * odzyskanie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ZALASOWA vs MIASTO: Zalasowa 3 191 (NSP 2021), ponad 26 km²,
 *   254 podmioty REGON, 15 km do Tarnowa, zmiana 1998–2021 minus 1,6%.
 *   Miasto Ryglice 2 660 (31.12.2024), 25,2 km², 260 podmiotów REGON,
 *   24 km do Tarnowa, zmiana 2002–2024 minus 4,5%.
 *   ⚠️ TO NIE SĄ TE SAME DATY ODNIESIENIA (NSP 2021 vs GUS 2024) —
 *   w treści zaznaczone. Różnica 530 osób utrzymuje wniosek przy każdym
 *   realistycznym scenariuszu,
 * — ZALASOWA — HISTORIA (turystyka.ryglice.pl): pierwsza wzmianka 1362
 *   (Rafał z Tarnowa), własność Tarnowskich, od 1742 Sanguszków;
 *   PIERWSZA SZKOŁA 1539, szpital 1665, nowa szkoła 1889; epidemie
 *   cholery 1848 (133 zgony) i 1853 (142 zgony); elektryfikacja 1949.
 *   Dziś szkoła podstawowa (314 uczniów) i przedszkole (91 dzieci),
 * — PRAWA MIEJSKIE: 1824 → utrata 1934 → odzyskanie od 1 stycznia 2001
 *   (archiwum.ryglice.pl). ⚠️ Sprzeczność: strona historyczna gminy
 *   sugeruje też nadanie „za Kazimierza Wielkiego”. Nierozstrzygnięte,
 * — SPICHLERZ: rok 1756, inskrypcja „DIE 21 MAJI ANNO DOMINI 1756”
 *   w obramowaniu drzwi; REJESTR ZABYTKÓW NR A-161, wpis 1978;
 *   remont 2010 przywrócił wygląd z fotografii z 1915 r., dach kryty
 *   gontem. Dziś muzeum etnograficzne: izba wiejska, izba mieszczańska,
 *   SZYNK, galeria na poddaszu. ⚠️ To JEDEN obiekt — spichlerz dworski,
 *   w którym urządzono m.in. karczmę jako część ekspozycji, a nie dwa
 *   osobne zabytki,
 * — ⭐ PRODUKTY TRADYCYJNE — NAJMOCNIEJSZY MATERIAŁ CAŁEJ CZWÓRKI:
 *   GOMÓŁKI KOWALOWSKIE — Lista Produktów Tradycyjnych MRiRW, WPIS
 *   19 SIERPNIA 2013, województwo małopolskie, kategoria produkty
 *   mleczne. Niewielkie okrągłe bryłki sera, barwa kremowo-żółtawa
 *   z CIEMNOZIELONYMI PLAMKAMI, 3–8 cm dł., ok. 3 cm wys., twarda
 *   zwarta konsystencja, SŁONY SMAK SEROWY Z ZAPACHEM MIĘTY. Ser
 *   zarobiony z mlekiem słodkim i miętą, SUSZONY W PIECU CHLEBOWYM.
 *   Nazwa poświadczona w źródłach XVI-wiecznych. 2012: I NAGRODA
 *   w konkursie „Nasze Kulinarne Dziedzictwo — Smaki Regionów”.
 *   Pochodzenie: KOWALOWA w gminie Ryglice (gov.pl/web/rolnictwo).
 *   PROŁZIOK — placki pieczone na blasze z dodatkiem sody oczyszczonej,
 *   nazywanej w okolicy „prołza”, stąd nazwa. Zgłaszający obu produktów:
 *   Pogórzańskie Stowarzyszenie Rozwoju z Tuchowa; pozytywna ocena
 *   Rady ds. Produktów Tradycyjnych maj 2013. ⚠️ DOKŁADNEJ DATY WPISU
 *   PROŁZIOKA nie potwierdzono (dla gomółek: 19.08.2013),
 * — SOŁECTWA (ryglice.pl): Joniny, Kowalowa, Lubcza, Zalasowa,
 *   Bistuszowa, Uniszowa, Wola Lubecka + jednostka „Miasto Ryglice”,
 * — HERB gminy (opracowany przez UJ, przyjęty 26 marca 2001):
 *   atrybuty św. Katarzyny — miecz i koła egzekucyjne; OSIEM KOLCÓW
 *   NA KOŁACH symbolizuje osiem miejscowości gminy,
 * — ZABYTKI W REJESTRZE: zespół dworsko-parkowy Bistuszowa (A-341,
 *   1971), kościół Niepokalanego Serca NMP w Kowalowej (poł. XVII w.,
 *   A-126, 1967), spichlerz Ryglice (A-161, 1978), zespół
 *   pałacowo-parkowy Ryglice 1656 (A-163, 1978), kościół św. Katarzyny
 *   1941 (A-1252/M, 2011), kościół św. Jana Ewangelisty w Zalasowej
 *   1844–1848 z dzwonnicą (A-190, 1970), cmentarze wojenne nr 165
 *   i nr 167,
 * — KOŚCIÓŁ ŚW. KATARZYNY: budowany 1928–1940, projekt JANA
 *   SAS-ZUBRZYCKIEGO, inicjatywa ks. Jakuba Wyrwy. Wewnątrz
 *   CHRZCIELNICA KAMIENNA RENESANSOWA Z 1554 R., ołtarz główny
 *   i ambona rokokowe XVIII w., ołtarze boczne manierystyczne XVI w.,
 * — DOJAZD: Tarnów–Ryglice 24 km, ok. 29 minut przez DW 977 (przez
 *   Tarnowiec, Nowodworze, Porębę Radlną, Zabłędzą, Tuchów).
 *   Sąsiedzi: Jodłowa, Pilzno, Skrzyszów, Szerzyny, Tuchów,
 * — ADRES: Urząd Miejski w Ryglicach, Rynek 9, 33-160 Ryglice.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PRAW MIEJSKICH JAKO OSI. Wzorzec identyczny z Czchowem i Skałą,
 * — WSPÓŁRZĘDNYCH URZĘDU Z PEWNEGO ŹRÓDŁA. ⚠️ Użyte współrzędne są
 *   PRZYBLIŻONE, dla samego miasta. Do zweryfikowania,
 * — ODLEGŁOŚCI DO KRAKOWA. Nie potwierdzona,
 * — NAZWANYCH PRACODAWCÓW. Żadne źródło ich nie podaje,
 * — NAZW KÓŁ GOSPODYŃ. Zgłaszającym produkty było stowarzyszenie
 *   z Tuchowa, nie koło gospodyń z tej gminy,
 * — REZERWATU. Nie potwierdzono istnienia,
 * — DATY WPISU PROŁZIOKA. Podana tylko dla gomółek,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA,
 *   identyczna dla Gromnika, Rzepiennika, Szerzyn i Ryglic co do grosza,
 * — ROZBIEŻNOŚĆ LUDNOŚCI: urząd podaje 11 639, GUS 11 165,
 *   geoportal 11 134. Użyty GUS.
 *
 * PUŁAPKI:
 * — SPICHLERZ: archiwum gminy w tytule podaje 1757, ale inskrypcja
 *   i rejestr dają 1756. Używać 1756,
 * — „PROŁZIOK” z Kowalowej i „proziaki” z gminy Szerzyny to ta sama
 *   rodzina wyrazowa (regionalne placki na sodzie), ale WPISANY NA
 *   LISTĘ jest tylko prołziok z Kowalowej. Nie mylić,
 * — LUBCZA (sołectwo) to nie to samo co gmina Lubcza — takiej nie ma
 *   w Małopolsce, ale nazwa bywa myląca,
 * — SOŁECTWA pochodzą z oficjalnej strony urzędu, nie ze statutu.
 */

export const RYGLICE: CityContent = {
  slug: "ryglice",
  h1: "Thermomix Ryglice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Ryglice — prezentacja i cena",
  seoDescription:
    "Thermomix w Ryglicach i Zalasowej: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ryglice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Ryglice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Ryglic, Zalasowej, Kowalowej, Lubczy i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ryglicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Miasto mniejsze od własnej wsi",
      paragraphs: [
        "Ryglice są siedzibą gminy i mają prawa miejskie. Ale największą miejscowością tej gminy nie są — jest nią Zalasowa.",
        "W Zalasowej mieszka około trzech tysięcy dwustu osób, w samych Ryglicach około dwóch tysięcy sześciuset pięćdziesięciu. Różnica to jakieś pięćset trzydzieści osób, czyli jedna piąta. Zaznaczę uczciwie, że obie liczby pochodzą z różnych momentów — jedna ze spisu powszechnego, druga z bieżącej statystyki — ale różnica jest na tyle duża, że przy żadnym realnym scenariuszu się nie odwraca.",
        "I na tym nie koniec. Zalasowa jest też większa powierzchniowo, ma niemal tyle samo zarejestrowanych firm co miasto i leży o dziewięć kilometrów bliżej Tarnowa. Kiedy się z niej wyjeżdża do pracy, do Tarnowa jest piętnaście kilometrów; z Ryglic dwadzieścia cztery.",
        "To nie jest wieś bez historii, która nagle urosła. Pierwsza wzmianka o Zalasowej pochodzi z tysiąc trzysta sześćdziesiątego drugiego roku, szkoła działała tu już w tysiąc pięćset trzydziestym dziewiątym, a szpital od tysiąc sześćset sześćdziesiątego piątego. Przez dwa wieki wieś należała do Tarnowskich, a od tysiąc siedemset czterdziestego drugiego do Sanguszków.",
        "Bywało tu ciężko: w tysiąc osiemset czterdziestym ósmym cholera zabrała sto trzydzieści trzy osoby, pięć lat później kolejnych sto czterdzieści dwie. Prąd doprowadzono dopiero w tysiąc dziewięćset czterdziestym dziewiątym.",
        "Same Ryglice też mają swoje. Na rynku stoi spichlerz z tysiąc siedemset pięćdziesiątego szóstego roku — data jest wyryta w obramowaniu drzwi, z dokładnością do dnia: dwudziestego pierwszego maja. Wpisano go do rejestru zabytków w tysiąc dziewięćset siedemdziesiątym ósmym, a w dwa tysiące dziesiątym wyremontowano tak, żeby wyglądał jak na fotografii z tysiąc dziewięćset piętnastego roku, z dachem krytym gontem. Dziś mieści się w nim muzeum: izba wiejska, izba mieszczańska, szynk i galeria na poddaszu.",
        "W kościele świętej Katarzyny, budowanym w latach trzydziestych według projektu Jana Sas-Zubrzyckiego, stoi kamienna renesansowa chrzcielnica z tysiąc pięćset pięćdziesiątego czwartego roku — o kilkaset lat starsza od świątyni, w której się znajduje.",
        "Jest jeszcze detal, który mówi wszystko o strukturze tej gminy. W herbie, opracowanym przez Uniwersytet Jagielloński i przyjętym w dwa tysiące pierwszym roku, są atrybuty świętej Katarzyny: miecz i koła. Kolców na tych kołach jest osiem — po jednym na każdą miejscowość gminy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Ryglice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość. Gmina rozciąga się na stu siedemnastu kilometrach kwadratowych pogórza, a z Zalasowej do Jonin trasa wygląda zupełnie inaczej niż przez rynek w Ryglicach. Kosztu to nie zmienia.",
        "Jeśli mieszkacie w Zalasowej i wracacie z Tarnowa, wieczorne terminy sprawdzają się najlepiej — jest stamtąd bliżej niż z samego miasta i nie trzeba nadkładać drogi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Ryglice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Ser z miętą i placki na sodzie",
      paragraphs: [
        "Ta gmina ma coś, czego nie ma żadna sąsiednia: dwa własne produkty na ministerialnej Liście Produktów Tradycyjnych, oba z Kowalowej. I oba są rzeczami, które robi się w domu, a nie kupuje.",
        "Pierwszy to gomółki kowalowskie, wpisane dziewiętnastego sierpnia dwa tysiące trzynastego roku. To niewielkie bryłki sera, długie na trzy do ośmiu centymetrów, kremowo-żółtawe, z ciemnozielonymi plamkami mięty. Smak jest słony i serowy, zapach miętowy. Robi się je z sera zarobionego ze słodkim mlekiem i miętą, a potem suszy w piecu chlebowym. Nazwa pojawia się w źródłach już w szesnastym wieku, a w dwa tysiące dwunastym gomółki dostały pierwszą nagrodę w konkursie Nasze Kulinarne Dziedzictwo.",
        "Drugi to prołziok — placek pieczony na blasze, z sodą oczyszczoną, którą w tej okolicy nazywa się prołzą. Stąd nazwa.",
        "Przy takiej kuchni urządzenie przydaje się w bardzo konkretnych miejscach. Twaróg na gomółki robi się z mleka w jednym naczyniu, bez pilnowania temperatury na oko — a przy serze temperatura jest wszystkim. Miętę rozdrabnia się w kilka sekund, równo, bez siekania nożem.",
        "Przy plackach na sodzie zysk jest inny: ciasto trzeba wymieszać szybko i użyć od razu, bo soda działa natychmiast. Wymieszanie w kilkanaście sekund zamiast dwóch minut łyżką realnie zmienia to, jak placek wyrasta.",
        "Trzecia rzecz jest już zupełnie codzienna. W gminie z tak rozproszoną zabudową i dwudziestoczterokilometrowym dojazdem do Tarnowa dania jednogarnkowe, które gotują się same i czekają, są tym, co ratuje wieczory. Nastawia się przed wyjazdem, wraca do gotowego.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Ryglice i gotowanie — gomółki kowalowskie i prołziok",
    paragraphs: [
      "To jedna z niewielu gmin w powiecie tarnowskim, która ma potwierdzone wpisy na ministerialnej Liście Produktów Tradycyjnych — i to dwa, oba z Kowalowej.",
      "Gomółki kowalowskie wpisano dziewiętnastego sierpnia dwa tysiące trzynastego roku, w kategorii produktów mlecznych. Opis z rejestru jest bardzo konkretny: niewielkie okrągłe bryłki sera, barwa kremowo-żółtawa z ciemnozielonymi plamkami, długość od trzech do ośmiu centymetrów, wysokość około trzech, konsystencja twarda i zwarta, smak słony serowy z zapachem mięty. Ser zarabia się ze słodkim mlekiem i miętą, a potem suszy w piecu chlebowym. Sama nazwa jest poświadczona w źródłach szesnastowiecznych, a w dwa tysiące dwunastym gomółki zdobyły pierwszą nagrodę w konkursie Nasze Kulinarne Dziedzictwo — Smaki Regionów.",
      "Drugi wpis to prołziok — placek pieczony na blasze z dodatkiem sody oczyszczonej, którą w tej okolicy nazywa się prołzą. Oba produkty zgłosiło Pogórzańskie Stowarzyszenie Rozwoju z Tuchowa, a Rada do spraw Produktów Tradycyjnych oceniła je pozytywnie w maju dwa tysiące trzynastego.",
      "Warto przy tym jedno rozróżnienie: proziaki wypiekane przez koła gospodyń w sąsiednich Szerzynach to ta sama rodzina wyrazowa i pokrewny wypiek, ale na liście ministerialnej figuruje prołziok z Kowalowej. To nie to samo i nie należy tego mieszać.",
      "Poza tym kuchnia jest tu pogórzańska: ziemniaki, kapusta, fasola, gęste zupy, kluski, ciasto drożdżowe, przetwory z jesieni.",
      "Dla urządzenia najsensowniejszy jest tu domowy twaróg robiony z pilnowaniem temperatury, szybkie mieszanie ciasta na sodzie i dania jednogarnkowe gotowane bez nadzoru. Czego nie zrobi, mówię wprost: nie wysuszy gomółek w piecu chlebowym i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Ryglice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu, bez żadnej dopłaty za odległość. Gmina liczy ponad jedenaście tysięcy mieszkańców na stu siedemnastu kilometrach kwadratowych, z czego w mieście mieszka około dwóch tysięcy sześciuset pięćdziesięciu.",
    "Sołectwa to: Zalasowa, Kowalowa, Lubcza, Joniny, Bistuszowa, Uniszowa i Wola Lubecka. Samo miasto jest ósmą jednostką pomocniczą gminy — i stąd osiem kolców na kołach w herbie.",
    "Największą miejscowością nie jest miasto, tylko Zalasowa, w której mieszka około trzech tysięcy dwustu osób. Ma też własny kościół z lat czterdziestych dziewiętnastego wieku, wpisany do rejestru zabytków razem z dzwonnicą.",
    "W Ryglicach warto zobaczyć spichlerz z tysiąc siedemset pięćdziesiątego szóstego roku, dziś muzeum etnograficzne z izbą wiejską, izbą mieszczańską i szynkiem, oraz kościół świętej Katarzyny z renesansową chrzcielnicą z tysiąc pięćset pięćdziesiątego czwartego. W Kowalowej stoi kościół z połowy siedemnastego wieku, a w Bistuszowej zespół dworsko-parkowy.",
    "Dojazd: kolei w gminie nie ma. Główną osią jest droga wojewódzka dziewięćset siedemdziesiąt siedem — do Tarnowa dwadzieścia cztery kilometry, mniej więcej pół godziny, przez Tuchów.",
  ],
  districts: [
    "Ryglice",
    "Zalasowa",
    "Kowalowa",
    "Lubcza",
    "Joniny",
    "Bistuszowa",
    "Uniszowa",
    "Wola Lubecka",
  ],

  nearbyHeading: "Tuchów, Szerzyny i Skrzyszów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Tuchowem, Szerzynami, Skrzyszowem oraz z Jodłową i Pilznem, już w województwie podkarpackim. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie kulinarne: prołziok, wpisany na Listę Produktów Tradycyjnych, pochodzi z Kowalowej w tej gminie. Proziaki wypiekane w sąsiednich Szerzynach to pokrewny wypiek o zbliżonej nazwie, ale bez wpisu do rejestru.",
  ],
  nearbyTowns: [
    "Tuchów",
    "Szerzyny",
    "Skrzyszów",
    "Rzepiennik Strzyżewski",
    "Gromnik",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Ryglice", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Zalasowej albo w Kowalowej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa traktuję tak samo jak samo miasto — a Zalasowa jest zresztą największą miejscowością gminy, większą od Ryglic. Przy umawianiu podaj nazwę wsi, potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Ryglice"),
    {
      question: "Czy da się zrobić w tym domowy twaróg na gomółki?",
      answer:
        "Da się i to jest jedno z tych zastosowań, w których urządzenie naprawdę pomaga, a nie tylko wyręcza. Przy serze wszystko zależy od temperatury — za gorąco i twaróg wyjdzie gumowaty, za zimno i się nie zetnie. Tu ustawia się konkretną temperaturę i urządzenie ją trzyma, więc wynik jest powtarzalny. Miętę rozdrobni w kilka sekund, równo. Czego nie zrobi: nie wysuszy gotowych gomółek — do tego potrzebny jest piec chlebowy albo przynajmniej piekarnik z bardzo niską temperaturą.",
    },
  ],

  geo: { lat: 49.8869, lng: 21.1425 },
};
