import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * ORLA — ⚠⚠ GMINA WIEJSKA w powiecie bielskim (podlaskie).
 * ORLA NIE JEST DZIŚ MIASTEM — jest WSIĄ i siedzibą gminy.
 * W CAŁEJ TREŚCI PISZĘ „miejscowość" albo „wieś", NIGDY
 * „miasto" w czasie teraźniejszym.
 * GMINA 2 395 mieszkańców (GUS 31.12.2024), powierzchnia
 * 159,9 km², gęstość 16 os./km², 24 MIEJSCOWOŚCI.
 * ⚠ LICZBY MIESZKAŃCÓW SAMEJ WSI ORLA NIE PODAJĘ —
 * nie znaleziono danych GUS.
 * ⚠ Notatka projektowa podawała 1 200 — NIE UŻYWAM.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 *
 * GEOGRAFIA: Orla leży NAD RZEKĄ ORLANKĄ, dopływem NARWI.
 * Nazwa wywodzona od rzeki albo od orłów.
 *
 * HISTORIA — ⚠ SPRZECZNOŚCI:
 * Pierwsza wzmianka: 1507 kontra 1510.
 * Prawa miejskie: 1634 (potwierdzone przez JANUSZA RADZIWIŁŁA)
 * kontra „prawo magdeburskie w 1618 i 1634".
 * Utrata praw miejskich: 1874 kontra 1897.
 * ⚠⚠ NIE ROZSTRZYGAM ŻADNEJ Z TRZECH. W treści piszę:
 * „pierwsza wzmianka na początku XVI wieku", „prawa miejskie
 * w pierwszej połowie XVII wieku", „utraciła je w drugiej
 * połowie XIX wieku".
 * OD 1585 r. dobra orlańskie w rękach RADZIWIŁŁÓW: Katarzyna
 * Olelkowicz poślubiła KRZYSZTOFA „PIORUNA" RADZIWIŁŁA,
 * wnosząc Orlę do linii birżańskiej NA TRZYSTA LAT.
 * Hetman Krzysztof Radziwiłł wzniósł tu ZAMEK (niezachowany).
 *
 * ⚠⚠ ZABYTEK — PODSTAWA KĄTA:
 * CERKIEW PARAFIALNA PW. ŚW. MICHAŁA ARCHANIOŁA:
 * budowa 1796–1797 (po pożarze z 1794 r.), STYL BAROKOWY,
 * PLAN OŚMIOBOCZNY, DREWNIANA, konstrukcja zrębowa
 * na kamiennym fundamencie. W rejestrze zabytków.
 * ⚠⚠ KLUCZOWY KONTEKST: obiekt należy do grupy BAROKOWYCH
 * CERKWI NA PLANIE OŚMIOBOKU, POPULARNYCH NA OBSZARZE
 * MIĘDZY BIELSKIEM PODLASKIM A ORLĄ W 2. POŁ. XVIII w.
 * TO JEST LOKALNY TYP ARCHITEKTONICZNY — występujący
 * na jednym skrawku mapy i nigdzie indziej.
 * Remonty: 1810, 1836, lata 70. XIX w., 1928–1929,
 * 1979–1982 (rekonstrukcja z użyciem oryginalnych materiałów).
 * ⚠ CERKIEW WYŁĄCZNIE JAKO ZABYTEK ARCHITEKTURY.
 * Cerkiew cmentarna Świętych Cyryla i Metodego — 1870 r.
 *
 * RZEMIOSŁO: ⚠ HIPOTEZA TKACKA ZABITA. Potwierdzone
 * rzemiosło Orli to KAFLARNIE, działające w okresie
 * międzywojennym i ZATRUDNIAJĄCE SETKI OSÓB — główny ośrodek
 * produkcyjny miejscowości.
 * ⚠ NIE PISZĘ O TKACTWIE.
 * ORLA NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 * ⚠ NIE PRZYPISUJĘ Orli produktu z Listy Produktów
 * Tradycyjnych — nie ma takiego.
 *
 * KĄT: DANIA, KTÓRE ISTNIEJĄ TYLKO NA MAŁYM OBSZARZE.
 * Kąt od cerkwi należącej do typu architektonicznego,
 * który występuje wyłącznie między Bielskiem Podlaskim a Orlą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że istnieją dania o zasięgu kilkudziesięciu kilometrów
 *   i że to jest zjawisko normalne, nie osobliwość,
 * — że rozpoznaje się je po tym, że NIE MA ICH W KSIĄŻKACH
 *   ani w internecie, a mimo to robi je pół okolicy,
 * — SKĄD SIĘ BIORĄ: z lokalnego surowca, z lokalnego sprzętu
 *   (typ pieca, typ naczynia), z jednej osoby, która zaczęła,
 *   i z tego, że nikt nie miał powodu tego eksportować,
 * — że taki przepis prawie nigdy nie ma spisanej wersji
 *   i istnieje w kilkunastu wariantach naraz,
 * — DLACZEGO GINĄ: nie dlatego, że są niedobre, tylko
 *   dlatego, że nie mają zapisu i wystarczy jedno pokolenie
 *   przerwy,
 * — CO Z TYM ZROBIĆ PRAKTYCZNIE: zapisać. Nie „poprawnie",
 *   tylko dokładnie tak, jak robi to konkretna osoba,
 *   z jej słowami i jej „na oko",
 * — że warto przy tym zanotować RZECZY POZAPRZEPISOWE:
 *   w czym to się robiło, na czym, jak długo mniej więcej
 *   i po czym poznawano, że gotowe,
 * — UCZCIWIE: przeniesienie takiego przepisu do urządzenia
 *   zawsze coś zmienia i lepiej to nazwać niż udawać,
 * — że najrozsądniej zrobić najpierw wersję oryginalną,
 *   żeby wiedzieć, do czego się porównuje.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ NIE WYMYŚLAM ŻADNEGO KONKRETNEGO DANIA lokalnego
 *   dla Orli — nie potwierdzono żadnego. Piszę o zjawisku
 *   ogólnie, na przykładach kategorii, nie nazw.
 *   TWARDA GRANICA.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ⚠ ZERO konfliktów wyznaniowych i narodowościowych.
 *   Orla ma silną historię mniejszościową — cerkwie
 *   wymieniam WYŁĄCZNIE jako zabytki architektury, z datami
 *   i stylem, bez jednego słowa o wyznaniach i relacjach.
 * — ZERO przyczyn utraty praw miejskich.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Składnik zależny
 * od miejsca" (Choroszcz) dotyczy tego, że TEN SAM produkt
 * gdzie indziej smakuje inaczej. „Jak przepis wędruje"
 * (Tykocin) dotyczy zapożyczeń między kuchniami. „Dania,
 * które zniknęły ze stołów" (Czyżew) dotyczą całej kategorii
 * wypadłej z obiegu. „Skąd wiemy, co jedzono dawniej" (Suraż)
 * dotyczy źródeł wiedzy. Tutaj chodzi o DANIA O MAŁYM
 * ZASIĘGU GEOGRAFICZNYM i o ich zapisywanie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠ NIE PISZĘ, że Orla jest dziś miastem.
 * — NIE PODAJĘ liczby mieszkańców samej wsi.
 * — NIE ROZSTRZYGAM dat: pierwszej wzmianki, praw miejskich
 *   ani ich utraty.
 * — NIE PISZĘ O TKACTWIE w Orli — potwierdzone jest
 *   kaflarstwo.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PRZYPISUJĘ Orli produktu z Listy Produktów
 *   Tradycyjnych ani żadnego konkretnego dania lokalnego.
 * — ⚠ NIE MYLĘ ORLI podlaskiej z RZEKĄ ORLĄ w Wielkopolsce
 *   ani ORLANKI z Orlą. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina wiejska Orla liczy 2 395 mieszkańców na 159,9 km²
 *   i obejmuje 24 miejscowości; sama Orla jest wsią
 *   i siedzibą gminy,
 * — leży nad Orlanką, dopływem Narwi; nazwę wywodzi się
 *   od rzeki albo od orłów,
 * — pierwsza wzmianka na początku XVI w.; prawa miejskie
 *   w pierwszej połowie XVII w., utracone w drugiej połowie
 *   XIX w.,
 * — od 1585 r. dobra orlańskie należały do Radziwiłłów —
 *   Katarzyna Olelkowicz wniosła je w małżeństwie
 *   z Krzysztofem „Piorunem" Radziwiłłem do linii birżańskiej
 *   i pozostały w rodzie przez trzysta lat; hetman Krzysztof
 *   Radziwiłł wzniósł tu niezachowany zamek,
 * — drewniana cerkiew świętego Michała Archanioła z lat
 *   1796–1797, barokowa, wzniesiona na planie ośmioboku,
 *   w konstrukcji zrębowej na kamiennym fundamencie; należy
 *   do grupy barokowych cerkwi ośmiobocznych, które
 *   w drugiej połowie XVIII w. budowano wyłącznie na obszarze
 *   między Bielskiem Podlaskim a Orlą; w latach 1979–1982
 *   zrekonstruowana z użyciem oryginalnych materiałów,
 * — cerkiew cmentarna Świętych Cyryla i Metodego z 1870 r.,
 * — w okresie międzywojennym głównym ośrodkiem produkcyjnym
 *   Orli były kaflarnie, zatrudniające setki osób.
 */
export const ORLA: CityContent = {
  slug: "orla",
  h1: "Thermomix Orla – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Orla (powiat bielski) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Orli i całej gminie: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Orla — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Orli. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Orli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy, do wszystkich miejscowości.",

  highlights: highlightyStandardowe("Orla i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są dania o zasięgu kilkudziesięciu kilometrów. Nie ma ich w żadnej książce.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Orli – jak wygląda prezentacja?",
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
      id: "dania-o-malym-zasiegu",
      heading: "Forma, która istnieje tylko tutaj — czyli o daniach o zasięgu kilkudziesięciu kilometrów",
      paragraphs: [
        "W Orli stoi drewniana cerkiew świętego Michała Archanioła z lat 1796–1797. Jest barokowa i zbudowana na planie ośmioboku — a to jest szczegół, który ma znaczenie znacznie większe, niż się wydaje. Bo takie ośmioboczne cerkwie budowano w drugiej połowie osiemnastego wieku wyłącznie na jednym niewielkim obszarze: między Bielskiem Podlaskim a Orlą. Nigdzie indziej. Forma architektoniczna o zasięgu kilkudziesięciu kilometrów.",
        "W kuchni jest dokładnie tak samo i to jest zjawisko, o którym prawie się nie mówi. Istnieją dania o zasięgu jednej okolicy.",
        "Rozpoznaje się je po jednej rzeczy: nie ma ich w żadnej książce ani w internecie, a mimo to robi je pół wsi albo pół miasteczka. Kiedy zapytacie kogoś spoza tych kilkudziesięciu kilometrów, nie będzie wiedział, o czym mowa. Kiedy zapytacie kogoś stąd, powie „no przecież każdy tak robi”.",
        "Biorą się z czterech rzeczy, zwykle naraz. Z lokalnego surowca, którego gdzie indziej nie było pod ręką. Z lokalnego sprzętu — typu pieca, kształtu naczynia, tego, czy w okolicy była wędzarnia. Z jednej konkretnej osoby, która kiedyś zaczęła, a sąsiadki podpatrzyły. I z tego, że nikt nigdy nie miał powodu wywieźć tego dalej.",
        "Taki przepis prawie nigdy nie ma spisanej wersji i istnieje w kilkunastu wariantach jednocześnie — każdy dom robi trochę inaczej i każdy uważa swoją wersję za oczywistą. Nie ma tu wersji poprawnej, bo nie ma nikogo, kto by ją ogłosił.",
        "I dlatego takie dania giną. Nie dlatego, że są niedobre ani że ktoś je odrzucił — po prostu nie mają zapisu i wystarczy jedno pokolenie przerwy. Danie, którego nikt nie zrobił przez dwadzieścia lat, przestaje istnieć, choć nikt nie podjął takiej decyzji.",
        "Praktyczny wniosek jest jeden i nudny: zapisać. Ale zapisać dobrze, czyli nie „poprawnie”, tylko dokładnie tak, jak robi to konkretna osoba — z jej słowami, jej „na oko”, jej „aż będzie takie jak trzeba”. Wygładzony przepis traci to, co w nim było najcenniejsze.",
        "Warto przy tym zanotować rzeczy, których w przepisach się nie pisze, a które są tu najważniejsze: w czym to się robiło, na czym, mniej więcej jak długo i po czym poznawano, że gotowe. To zwykle właśnie w tych czterech odpowiedziach siedzi cała różnica między wersją babci a Waszą.",
        "I uczciwie o sprzęcie. Przeniesienie takiego przepisu do urządzenia zawsze coś zmienia — inaczej się miesza, inaczej odparowuje, nic się nie rumieni. Nie zawsze na gorsze, ale zawsze inaczej, i lepiej to nazwać, niż udawać, że różnicy nie ma.",
        "Dlatego radzę zawsze tak samo: jeśli macie taki rodzinny albo okoliczny przepis, zróbcie go najpierw raz w wersji oryginalnej, po staremu. Nie po to, żeby udowodnić, że tak jest lepiej — po to, żeby mieć punkt odniesienia. Bez niego nie ma jak ocenić, czy przeniesienie się udało.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Orli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w Waszej okolicy robi się coś, czego nigdzie indziej nie widziałam — opowiedzcie mi o tym przy umawianiu. Naprawdę mnie to interesuje i zwykle to najciekawsza część spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Orli"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Orla",
      paragraphs: [
        "Gmina Orla liczy blisko dwa tysiące czterysta mieszkańców na niemal stu sześćdziesięciu kilometrach kwadratowych i obejmuje dwadzieścia cztery miejscowości; sama Orla jest wsią i siedzibą gminy. Leży nad Orlanką, dopływem Narwi, a nazwę wywodzi się albo od rzeki, albo od orłów. Pierwsza wzmianka pochodzi z początku szesnastego wieku; prawa miejskie Orla miała od pierwszej połowy siedemnastego stulecia i utraciła je w drugiej połowie dziewiętnastego. Od 1585 roku przez trzysta lat dobra orlańskie należały do Radziwiłłów — wniosła je w małżeństwie z Krzysztofem „Piorunem” Radziwiłłem Katarzyna Olelkowicz, a hetman Krzysztof Radziwiłł wzniósł tu niezachowany zamek. Najcenniejszym zabytkiem jest drewniana cerkiew świętego Michała Archanioła z lat 1796–1797: barokowa, na planie ośmioboku, w konstrukcji zrębowej na kamiennym fundamencie — należy do grupy cerkwi ośmiobocznych, jakie w drugiej połowie osiemnastego wieku budowano wyłącznie między Bielskiem Podlaskim a Orlą. W latach 1979–1982 zrekonstruowano ją z użyciem oryginalnych materiałów. Cerkiew cmentarna Świętych Cyryla i Metodego pochodzi z 1870 roku. W okresie międzywojennym głównym ośrodkiem produkcyjnym Orli były kaflarnie, zatrudniające setki osób.",
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

  districtsHeading: "Do których części gminy Orla dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu czterech miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Orlę też przyjadę",
  nearbyParagraphs: [
    "Bielsk Podlaski, Kleszczele, Hajnówka, Brańsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bielsk Podlaski", "Kleszczele", "Hajnówka", "Brańsk"],

  about: blokOMnie("do Orli", "w Orli i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Orli bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dwudziestu czterech miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa jest myląca: chodzi o Orlę w powiecie bielskim w województwie podlaskim, a nie o rzekę Orlę w Wielkopolsce. Miejscowa rzeka nazywa się Orlanka.",
    },
    ...faqWspolne("w Orli"),
    {
      question: "Czy naprawdę istnieją dania znane tylko w jednej okolicy?",
      answer:
        "Tak i to jest zjawisko zupełnie normalne. Poznaje się je po tym, że nie ma ich w żadnej książce ani w internecie, a mimo to robi je pół wsi. Biorą się z lokalnego surowca, lokalnego sprzętu, jednej osoby, która zaczęła, i z tego, że nikt nie miał powodu wywieźć tego dalej.",
    },
    {
      question: "Jak zapisać rodzinny przepis, żeby czegoś nie zgubić?",
      answer:
        "Zapisać go dokładnie tak, jak robi to konkretna osoba — z jej słowami i jej „na oko”, a nie w wygładzonej, „poprawnej” wersji. Warto zanotować cztery rzeczy, o których przepisy milczą: w czym się to robiło, na czym, mniej więcej jak długo i po czym poznawano, że gotowe.",
    },
    {
      question: "Czy warto przenosić stary przepis do Thermomixa?",
      answer:
        "Warto, ale z otwartymi oczami: inaczej się miesza, inaczej odparowuje i nic się nie rumieni, więc coś zawsze się zmieni — nie zawsze na gorsze, ale zawsze. Dlatego radzę zrobić go najpierw raz po staremu. Bez punktu odniesienia nie ma jak ocenić, czy przeniesienie się udało.",
    },
  ],

  geo: { lat: 52.7008, lng: 23.3244 },
};
