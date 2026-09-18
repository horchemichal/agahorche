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
 * ŚLESIN — powiat koniński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ ŚLESIN NIE MA.
 * MIASTO: 3 098 mieszkańców (GUS 31.12.2024), 7,2 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   431,5 os./km², iloraz daje 430,3. ROZBIEŻNOŚĆ 1,2.
 *   NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 *   ⚠⚠ W 2006 R. MIASTO LICZYŁO 3 102 OSOBY —
 *   ⚠⚠⚠ RÓŻNICY CZTERECH OSÓB NIE ROBIĘ KĄTEM:
 *   figura „stabilna suma, zmieniona zawartość"
 *   ZAJĘTA (Wąsosz). NIE UŻYWAM TEJ LICZBY WCALE.
 * CAŁA GMINA: 13 926 osób, 145,6 km², gęstość
 *   96 os./km².
 *   ⚠ [ZW — 13 926 / 145,6 = 95,6 → 96. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Gmina to 10,8% ludności i 9,2% powierzchni
 *   powiatu. PODAJĘ.
 *   ⚠ LESISTOŚĆ: 22,0%. PODAJĘ.
 * SOŁECTWA: 26 SOŁECTW i 51 MIEJSCOWOŚCI
 *   (GUS Vademecum) — NAJWIĘCEJ MIEJSCOWOŚCI Z GMIN
 *   TEJ FALI. PODAJĘ OBIE LICZBY.
 *   ⚠⚠ TA SAMA PARA LICZB JEST RDZENIEM KĄTA
 *   W GOŁAŃCZY (25/32, ta sama fala). ⚠⚠⚠ TU NIE
 *   ROBIĘ Z NIEJ KĄTU — podaję liczby i tyle,
 *   a w sekcji kątowej ROZGRANICZAM SIĘ OD GOŁAŃCZY
 *   JEDNYM ZDANIEM.
 *   MIEJSCOWOŚCI (wybór): Biele, Biskupie, Bylew,
 *   Dąbrowa Duża, Florentynowo, Goranin, Helenowo,
 *   Honoratka, Ignacewo, Julia, Kijowiec, Kolebki,
 *   Lubomyśle, Marianowo, Mikorzyn, Niedźwiady,
 *   Ostrowąż, Piotrkowice, Rębowo, Sarnowa, Smolniki,
 *   Szyszyn, Szyszynek, Teodorowo, Tokary, Wierzelin,
 *   Wygoda.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠ GEO: 52,3704 / 18,3065 (miasto). Punkt gminy
 *   52,3727 / 18,3097 — różnica nieistotna, ale
 *   UŻYWAM PUNKTU MIASTA.
 *
 * ⚠⚠ ODMIANA:
 *   D. do ŚLESINA · Ms. w ŚLESINIE ·
 *   N. Ślesinem · C. Ślesinowi.
 *   ⚠ POTWIERDZENIA: „do Ślesina", „w Ślesinie".
 *   Przymiotnik: ŚLESIŃSKI — potwierdzony nazwą
 *   „Jezioro Ślesińskie". UŻYWAM.
 *   ⚠⚠⚠ BŁĄD 1: zapis bez kreski — „Slesin",
 *   „Slesinie".
 *   ⚠⚠ BŁĄD 2: „w Ślesiniu".
 *   ⚠⚠ BŁĄD 3: „ślesinski" zamiast „ślesiński".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW:
 *   — ⚠⚠⚠ BIELE i MARIANOWO to nazwy miejscowości
 *     występujące TAKŻE w sąsiedniej gminie SOMPOLNO,
 *     o której piszę w tej samej fali. NAJGROŹNIEJSZA
 *     PUŁAPKA ADRESOWA. WSPOMINAM OBOWIĄZKOWO.
 *   — SZYSZYN / SZYSZYNEK — para w tej gminie.
 *   — Ślesin w kujawsko-pomorskim (gmina Nakło nad
 *     Notecią): ⚠⚠⚠ NIEZWERYFIKOWANY [NP].
 *     NIE TWIERDZĘ, ŻE ISTNIEJE. Piszę wyłącznie
 *     „warto dopowiedzieć powiat koniński", bez
 *     podawania drugiej lokalizacji.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1231 R.
 *   — PRAWA MIEJSKIE: 1358 R.
 *   — UTRATA 1870, PRZYWRÓCENIE 1921.
 *   ⚠⚠ PODAJĘ JAKO TŁO W CZĘŚCI O RODZINIE.
 *   ⚠⚠⚠ PRZERWY NIE ROZWIJAM — figury zajęte
 *   (Trzcianka, Wyrzysk, Nekla z tej samej fali).
 *   ⚠⚠⚠ ŁUKU Z 1812 R. NIE WYMIENIAM — obiekt
 *   upamiętniający postać polityczno-wojskową.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — POŁĄCZONE W JEDEN UKŁAD:
 *   W GMINIE ŚLESIN LEŻĄ JEZIORA: ŚLESIŃSKIE,
 *   WĄSOWSKO-MIKORZYŃSKIE I LICHEŃSKIE,
 *   POŁĄCZONE KANAŁEM WARTA–GOPŁO.
 *   CZYLI: to nie są trzy osobne zbiorniki, tylko
 *   JEDEN UKŁAD WODNY. Co zrobi się na jednym końcu,
 *   odzywa się na drugim.
 *   ⚠⚠⚠ „JEZIORO LICHEŃSKIE" PODAJĘ WYŁĄCZNIE JAKO
 *   NAZWĘ GEOGRAFICZNĄ ZBIORNIKA. ANI SŁOWA
 *   O MIEJSCOWOŚCI LICHEŃ, PIELGRZYMKACH I WĄTKU
 *   WYZNANIOWYM. OBOWIĄZKOWO.
 *   ⚠⚠⚠ ŻADNEGO WĄTKU WYPOCZYNKOWEGO, PLAŻOWEGO
 *   ANI ZDROWOTNEGO — jeziora podaję jako fakt
 *   geograficzny, nie jako atrakcję.
 *   ⚠⚠ DŁUGOŚCI KANAŁU ANI POWIERZCHNI JEZIOR
 *   NIE ZNAM [NP] — NIE PODAJĘ ŻADNYCH LICZB
 *   O WODACH.
 *
 * KĄT: POŁĄCZONE W JEDEN UKŁAD
 * — o tym, że kuchni nie da się naprawić w oderwaniu
 * od reszty dnia. Kąt ze Ślesina: trzy jeziora gminy
 * są połączone kanałem i tworzą jeden układ wodny.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie leżą trzy jeziora połączone Kanałem
 *   Warta–Gopło, więc tworzą jeden układ. TO JEST
 *   RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: obiad jest
 *   połączony z godzinami pracy, z zakupami, z porą
 *   snu dziecka i z tym, kto po kogo jedzie,
 * — ⚠⚠ ŻE DLATEGO „WEZMĘ SIĘ ZA GOTOWANIE" ROZBIJA
 *   SIĘ TAK CZĘSTO: naprawia się jeden zbiornik
 *   w układzie, w którym reszta została bez zmian,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zamiast planować obiady,
 *   znajdź jedno połączenie, które najbardziej zawodzi
 *   — najczęściej jest to godzina powrotu albo moment
 *   zakupów — i popraw je,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko da się
 *   poprawić. Godzin pracy zwykle się nie zmienia,
 *   i wtedy trzeba zmienić to, co się da — a nie
 *   obwiniać siebie za układ, którego się nie ustawiało,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie działa na jednym
 *   odcinku tego układu — na tym, gdzie trzeba stać
 *   przy garnku. Jeśli u Was wąskim gardłem jest coś
 *   innego, sprzęt tego nie ruszy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRAWIE KAŻDA MIEJSCOWOŚĆ MA SWÓJ GŁOS —
 *   kąt zajęty (Gołańcz, TA SAMA FALA). ⚠⚠⚠ TAM
 *   RDZENIEM JEST PARA LICZB 25/32, A TU MAM PARĘ
 *   26/51. MUSZĘ ROZGRANICZYĆ JAWNIE: tam chodzi o to,
 *   ilu jest decydentów; tu o to, że elementy są
 *   POŁĄCZONE. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO MAŁEJ CAŁOŚCI, DUŻEJ ROZPIĘTOŚCI —
 *   kąt zajęty (Ujście).
 * — ⚠⚠⚠ ZERO STABILNEJ SUMY, ZMIENIONEJ ZAWARTOŚCI —
 *   kąt zajęty (Wąsosz). DLATEGO LICZBY Z 2006 R.
 *   NIE UŻYWAM.
 * — ⚠⚠⚠ ZERO GRANICY, KTÓREJ NIE USTALONO — kąt zajęty
 *   (Okonek).
 * — ⚠⚠ ZERO CO NAPRAWDĘ TRZYMA KONSTRUKCJĘ — kąt
 *   zajęty (Nowy Tomyśl). Tu nie pytam, co niesie
 *   ciężar, tylko co jest z czym połączone.
 * — ⚠⚠ ZERO SZEROKIEGO A PŁYTKIEGO — kąt zajęty
 *   (Pniewy).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OBWINIANIA ZA UKŁAD DNIA, KTÓREGO
 *   SIĘ NIE WYBIERAŁO. Sekcja ma zdejmować winę.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO I PIELGRZYMKOWEGO · ZERO WĄTKU
 *   MILITARNEGO I POSTACI POLITYCZNYCH (ŁUKU Z 1812
 *   NIE WYMIENIAM) · ZERO GÓRNICTWA WĘGLA BRUNATNEGO
 *   I ODKRYWEK · ZERO UZDROWISK, WYPOCZYNKU I WĄTKU
 *   ZDROWOTNEGO · ZERO ALKOHOLU · ZERO POWODZI ·
 *   ZERO BEZROBOCIA · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE PODAJĘ liczby mieszkańców z 2006 r.
 * — NIE PODAJĘ powierzchni jezior ani długości kanału.
 * — NIE PISZĘ nic o miejscowości Licheń.
 * — NIE TWIERDZĘ, że istnieje Ślesin w innym
 *   województwie.
 * — NIE PODAJĘ największej wsi.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Ślesin leży w powiecie konińskim i liczy 3 098
 *   mieszkańców (GUS, 31.12.2024) na 7,2 km²,
 * — cała gmina miejsko-wiejska to 13 926 osób
 *   na 145,6 km², czyli 96 osób na kilometr
 *   kwadratowy; to 10,8% ludności i 9,2% powierzchni
 *   powiatu, a lasy zajmują 22% jej terenu,
 * — gmina obejmuje 26 sołectw i 51 miejscowości —
 *   najwięcej z okolicznych gmin,
 * — w gminie leżą jeziora Ślesińskie,
 *   Wąsowsko-Mikorzyńskie i Licheńskie, połączone
 *   Kanałem Warta–Gopło,
 * — pierwsza wzmianka o Ślesinie pochodzi z 1231 r.,
 *   prawa miejskie miasto otrzymało w 1358, utraciło
 *   w 1870, a odzyskało w 1921,
 * — w gminie leżą m.in. Mikorzyn, Ostrowąż, Goranin,
 *   Piotrkowice, Szyszyn, Szyszynek, Tokary,
 *   Lubomyśle, Biele i Marianowo.
 */
export const SLESIN: CityContent = {
  slug: "slesin",
  h1: "Thermomix Ślesin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ślesin — cena i prezentacja",
  seoDescription:
    "Thermomix w Ślesinie w powiecie konińskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ślesin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ślesinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ślesina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu sześciu sołectw w gminie.",

  highlights: highlightyStandardowe("Ślesin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy jeziora połączone kanałem to jeden układ, nie trzy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ślesinie – jak wygląda prezentacja?",
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
      id: "jeden-uklad",
      heading: "Połączone w jeden układ",
      paragraphs: [
        "W gminie Ślesin leżą trzy jeziora: Ślesińskie, Wąsowsko-Mikorzyńskie i Licheńskie. Na mapie wyglądają jak trzy osobne zbiorniki, każdy z własną nazwą i własnym kształtem.",
        "A są połączone Kanałem Warta–Gopło. To znaczy, że nie są trzema jeziorami, tylko jednym układem wodnym. Co się dzieje na jednym końcu, odzywa się na drugim — i żadnego z nich nie da się rozpatrywać osobno, choćby bardzo chciało się uprościć.",
        "Piszę o tym, bo to jest najczęstszy powód, dla którego postanowienia dotyczące kuchni nie działają.",
        "Obiad nie jest osobnym zbiornikiem. Jest połączony z godzinami pracy, z tym, kto po kogo jedzie, z porą, o której robi się zakupy, z tym, czy w domu jest zamrażalnik, z porą snu dziecka i z tym, o której ktoś realnie wraca. Kiedy ktoś mówi „od poniedziałku biorę się za gotowanie”, próbuje naprawić jeden zbiornik w układzie, w którym wszystko inne zostało bez zmian.",
        "I dlatego to się zwykle rozbija w czwartek — nie z braku silnej woli, tylko dlatego, że układ nie został ruszony.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, przy sąsiedniej gminie, o tym, ilu ludzi ma głos w jednej decyzji. Tu chodzi o coś innego — nie o liczbę decydentów, tylko o to, że elementy są ze sobą połączone i nie da się ruszyć jednego bez drugiego.",
        "Ruch jest jeden i nie dotyczy gotowania. Zamiast planować obiady, znajdźcie jedno połączenie, które najbardziej zawodzi. Najczęściej jest to godzina powrotu albo moment robienia zakupów — i to je warto poprawić, a nie sam obiad. Obiad ułoży się potem sam, bo jest końcem tego ciągu, a nie jego początkiem.",
        "Uczciwie o drugiej stronie, bo nie wszystko da się poprawić i nie zamierzam udawać, że da. Godzin pracy zwykle się nie zmienia. Dojazdów też nie. Gdy tak jest, trzeba zmienić to, co się da — i przestać obwiniać siebie za układ, którego się nie ustawiało. Poczucie winy za to, że obiad nie wychodzi przy dwóch zmianach i trójce dzieci, jest po prostu niesprawiedliwe.",
        "I uczciwie o sprzęcie. Thermomix działa na jednym konkretnym odcinku tego układu: na tym, gdzie trzeba stać przy garnku i pilnować. Tam zmienia dużo, bo danie może się gotować, kiedy Was nie ma w kuchni. Jeśli jednak wąskim gardłem jest u Was coś innego — zakupy, brak pomysłów, godzina powrotu — urządzenie tego nie ruszy i lepiej wiedzieć to przed zakupem.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ślesinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której realnie wracacie do domu i kiedy robicie zakupy. Z tego zwykle wynika, czy sprzęt Wam pomoże, czy nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ślesinie"),
    sekcjaRaty("w Ślesinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Ślesina",
      paragraphs: [
        "Ślesin leży w powiecie konińskim i liczy 3 098 mieszkańców (GUS, 31.12.2024) na 7,2 kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie domyka się z ilorazem. Cała gmina miejsko-wiejska to 13 926 osób na 145,6 kilometra kwadratowego, czyli dziewięćdziesiąt sześć osób na kilometr — to jedna dziesiąta ludności powiatu przy niecałej jednej dziesiątej jego powierzchni. Gmina obejmuje dwadzieścia sześć sołectw i pięćdziesiąt jeden miejscowości, najwięcej z okolicznych gmin, a lasy zajmują dwadzieścia dwa procent jej terenu. Leżą w niej jeziora Ślesińskie, Wąsowsko-Mikorzyńskie i Licheńskie, połączone Kanałem Warta–Gopło. Pierwsza wzmianka o Ślesinie pochodzi z 1231 roku, prawa miejskie miasto otrzymało w 1358, utraciło je w 1870, a odzyskało w 1921. W gminie leżą między innymi Mikorzyn, Ostrowąż, Goranin, Piotrkowice, Szyszyn, Szyszynek, Tokary i Lubomyśle.",
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

  districtsHeading: "Do których części Ślesina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sześciu sołectw w gminie: Mikorzyna, Ostrowąża, Goranina, Piotrkowic, Szyszyna, Szyszynka, Tokar, Lubomyśla, Niedźwiad, Smolnik, Wierzelina, Bylewa, Kijowca i pozostałych. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Ślesina” i „w Ślesinie”, zawsze z kreską nad „S” — zapis „Slesin” jest błędny; przymiotnik brzmi „ślesiński”, jak w nazwie Jeziora Ślesińskiego. I praktyczna: nazwy Biele i Marianowo powtarzają się w sąsiedniej gminie Sompolno, a w samej gminie Ślesin są dwie podobne wsie, Szyszyn i Szyszynek — przy adresie warto podać gminę i powiat koniński.",
  ],
  districts: [],

  nearbyHeading: "Poza Ślesin też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Konina, Sompolna, Kleczewa, Goliny, Kłodawy i Rychwała — wszędzie bezpłatnie, tak samo jak w samym Ślesinie.",
  ],
  nearbyTowns: ["Konin", "Sompolno", "Kleczew", "Golina", "Kłodawa", "Rychwał"],

  about: blokOMnie("do Ślesina", "w Ślesinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ślesina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sześciu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Ślesina” i „w Ślesinie”, zawsze z kreską nad „S”, a przymiotnik brzmi „ślesiński”, jak w nazwie Jeziora Ślesińskiego. I praktyczna: nazwy Biele i Marianowo powtarzają się w sąsiedniej gminie Sompolno, a w samej gminie są Szyszyn i Szyszynek, więc przy adresie warto podać gminę i powiat koniński.",
    },
    ...faqWspolne("w Ślesinie"),
    {
      question: "Ciągle postanawiam, że zacznę normalnie gotować, i po tygodniu odpuszczam. Dlaczego?",
      answer:
        "Bo obiad nie jest osobną sprawą, tylko końcem dłuższego ciągu. Ślesin daje dobry obraz: leżą tu trzy jeziora — Ślesińskie, Wąsowsko-Mikorzyńskie i Licheńskie — które na mapie wyglądają jak trzy osobne zbiorniki, a są połączone Kanałem Warta–Gopło i tworzą jeden układ. Obiad jest tak samo połączony z godzinami pracy, z zakupami, z tym, kto po kogo jedzie, i z porą powrotu. „Od poniedziałku zaczynam gotować” to próba naprawienia jednego zbiornika bez ruszania reszty układu — i dlatego rozbija się w czwartek. Zamiast planować obiady, poprawcie jedno połączenie: najczęściej jest to moment zakupów albo godzina powrotu. I rzecz ważna: jeśli godzin pracy nie da się zmienić, to nie jest Wasza wina.",
    },
    {
      question: "Na którym etapie Thermomix realnie pomaga?",
      answer:
        "Na jednym, konkretnym: tam, gdzie trzeba stać przy garnku i pilnować. Temperaturę i mieszanie prowadzi samo urządzenie, więc danie może się gotować, kiedy Was nie ma w kuchni, a ponieważ wszystko dzieje się w jednym naczyniu, zmywania jest mniej. Nie pomaga natomiast w zakupach, w wymyślaniu, co jeść, ani w tym, że ktoś wraca o dziewiętnastej. Jeśli u Was wąskim gardłem jest właśnie to, urządzenie nie zmieni sytuacji — i wolę powiedzieć to przed zakupem niż po.",
    },
  ],

  geo: { lat: 52.3704, lng: 18.3065 },
};
