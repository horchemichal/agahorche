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
 * POLANKA WIELKA — GMINA WIEJSKA w powiecie oświęcimskim.
 * TERYT 1213072, kod 32-607.
 * 4 300 mieszkańców (GUS, 31.12.2024: 2 153 kobiety / 2 147 mężczyzn),
 * 23,9 km², 181 os./km², +4,1% od 2002, średni wiek 40,4,
 * REGON 418 (358 osób fizycznych). Mieszkania: 1 213, średnio 114 m².
 * Wysokości 245–285 m n.p.m. Wójt: Grzegorz Gałgan.
 * DWIE MIEJSCOWOŚCI: Polanka Wielka i Pasternik.
 *
 * OŚ STRONY: GMINA, KTÓRA JEST JEDNĄ WSIĄ — I RAZ W ROKU GOŚCI CAŁE
 * WOJEWÓDZTWO. Cała gmina to jedna miejscowość z przysiółkiem: jeden
 * urząd, jedna parafia, jeden adres. A w sierpniu 2024 ta jedna wieś
 * przyjęła XXVI DOŻYNKI WOJEWÓDZTWA MAŁOPOLSKIEGO — 44 grupy wieńcowe,
 * 30 wieńców tradycyjnych i 14 współczesnych.
 * ⚠️⚠️ TO NIE JEST OŚ „NAJMNIEJSZA GMINA POWIATU” — ta należy
 * do WIETRZYCHOWIC. Tu chodzi o NIEPODZIELNOŚĆ, nie o rozmiar.
 * ⚠️ NIE POTWIERDZONO zresztą, że Polanka jest najmniejsza
 * w powiecie — polskawliczbach nie podaje rozbicia powierzchni.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — XXVI DOŻYNKI WOJEWÓDZTWA MAŁOPOLSKIEGO, sierpień 2024,
 *   w Dworskim Parku Rekreacyjnym w Polance Wielkiej: 44 GRUPY
 *   WIEŃCOWE, 30 wieńców tradycyjnych i 14 współczesnych, stoiska
 *   kół gospodyń wiejskich. Starostowie dożynek: Iwona i Daniel
 *   Gałganowie (oswiecimonline.pl, 26.08.2024),
 * — ⚠️⚠️ SOŁECTWA — NIEPOTWIERDZONE. Nie znaleziono ANI JEDNEGO
 *   dowodu na istnienie sołectw w tej gminie. Poszlaki: GUS podaje
 *   2 miejscowości, a rubrykę „liczba sołectw” zostawia PUSTĄ
 *   (dla Koniuszy w tym samym formacie podaje 29); strona gminy
 *   NIE MA sekcji „Sołectwa” ani „Sołtys”, podczas gdy Osiek
 *   i Koniusza mają je z nazwiskami; menu „Organy gminy” obejmuje
 *   wyłącznie Wójta i Radę Gminy. Statut leży na bip.malopolska.pl
 *   i w edziennik.malopolska.uw.gov.pl — OBA BLOKUJĄ POBIERANIE.
 *   ⚠️ W TREŚCI NIE PISAĆ „jedno sołectwo” ani „dwa sołectwa”.
 *   Formuła bezpieczna: „gmina obejmuje jedną wieś, Polankę Wielką,
 *   z przysiółkiem Pasternik”,
 * — PASTERNIK: GUS traktuje jako osobną miejscowość, ale statusu
 *   (wieś / część wsi / przysiółek) NIE POTWIERDZONO,
 * — ZESPÓŁ PAŁACOWO-PARKOWY (polanka-wielka.pl/historia):
 *   1600–1630 Aleksander Myszkowski buduje najstarszą część;
 *   1769 Kacper Cieński kończy rozbudowę, powstają dwie oficyny
 *   z łamanym dachem polskim; 1850 Apolinary Cieński ujednolica
 *   elewację w stylu klasycystycznym; 1909 Wysoccy dobudowują
 *   galerie z kolumnami i witrażami. Wg Starostwa: willa w typie
 *   włoskim z połowy XVII w. W CZASIE II WOJNY MIEŚCIŁ SIĘ TU SZTAB
 *   LUFTWAFFE, potem magazyn nawozów, w latach 70. konserwacja
 *   i adaptacja na cele hotelowe. ⚠️ Numeru i daty wpisu do rejestru
 *   zabytków NIE USTALONO,
 * — HISTORIA: VII w. osada na terenie dzisiejszej Polanki Dolnej
 *   (⚠️ datowanie ze strony gminy, traktować ostrożnie);
 *   1326 PIERWSZA WZMIANKA PISANA jako „Polenka”, własność książęca,
 *   dokument papieski wymienia parafię jako już istniejącą;
 *   1317 część Księstwa Oświęcimskiego; 1457 sprzedaż księstwa
 *   Polsce; 1550 kościół św. Mikołaja zamieniony na ZBÓR KALWIŃSKI,
 *   1598 przywrócony katolikom; 1564 ostateczna inkorporacja
 *   do Korony; 1772 I rozbiór, Galicja; 1918 powrót do Polski;
 *   1981 kościół Niepokalanego Serca NMP w Polance Górnej;
 *   1991 nowy kościół parafialny Narodzenia NMP,
 * — RADA GMINY: 15 radnych; KWW Wspólnota Polanki Wielkiej
 *   13 mandatów (60,89%) w wyborach 2024,
 * — DOŻYNKI GMINNE w Polance Wielkiej; przynależność do Doliny Karpia
 *   (Stowarzyszenie liczy 11 gmin),
 * — WSPÓŁRZĘDNE (UG, ul. Długa 61): 49,9818510 / 19,3108590.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — „NAJMNIEJSZEJ GMINY POWIATU” JAKO OSI ani jako faktu.
 *   To oś WIETRZYCHOWIC, a poza tym NIEPOTWIERDZONE dla Polanki,
 * — LICZBY SOŁECTW. Patrz wyżej — nie ustalona,
 * — STATUSU MIEJSCOWOŚCI PASTERNIK,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Nie ustalono, mimo że stoiska KGW
 *   są potwierdzone przy dożynkach wojewódzkich,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — PLANOWANEJ KOPALNI. ⚠️ Koncesja „Oświęcim-Polanka 1” dotyczy
 *   tej gminy i Przeciszowa; istnieje społeczny sprzeciw, a status
 *   projektu jest nieustalony. TEMAT ŚWIADOMIE POMINIĘTY — to spór
 *   o szkody górnicze i wartość domów, nie miejsce na stronie
 *   sprzedażowej,
 * — NAZWANYCH PRACODAWCÓW. Nie potwierdzono żadnego,
 * — BEZROBOCIA I WYNAGRODZEŃ. 7 492,22 zł i 4,7% to dane POWIATOWE,
 *   identyczne dla wszystkich gmin powiatu oświęcimskiego.
 *
 * PUŁAPKI:
 * — POLANKA WIELKA to nie Polanka Hallera (gmina Skawina, powiat
 *   krakowski) ani Polanki w mazowieckiem czy dolnośląskiem.
 *   Sprawdzać TERYT 1213072 i kod 32-607,
 * — ŚREDNIA POWIERZCHNIA MIESZKANIA 114 m² jest tu wysoka, ale
 *   ⚠️ metraż mieszkań to oś MICHAŁOWIC. Nie eksponować.
 */

export const POLANKA_WIELKA: CityContent = {
  slug: "polanka-wielka",
  h1: "Thermomix Polanka Wielka – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Polanka Wielka — prezentacja",
  seoDescription:
    "Thermomix w Polance Wielkiej: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd bez dopłat, cała gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Polanka Wielka — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Polance Wielkiej. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Polanki Wielkiej i Pasternika przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Polance Wielkiej – jak wygląda prezentacja?",
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
      heading: "Jedna wieś, która przyjęła całe województwo",
      paragraphs: [
        "Polanka Wielka jest gminą, ale w praktyce jest jedną wsią. Nie ma tu kilkunastu sołectw ani sieci osobnych wspólnot — jest jeden urząd, jedna parafia i jeden adres, do którego wszyscy się odnoszą. Obok leży jeszcze Pasternik, w statystyce liczony osobno.",
        "Cztery tysiące trzysta osób na dwudziestu czterech kilometrach kwadratowych. Niepodzielona.",
        "I właśnie ta jedna wieś zorganizowała w sierpniu dwa tysiące dwudziestego czwartego roku dwudzieste szóste Dożynki Województwa Małopolskiego. W Dworskim Parku Rekreacyjnym stanęły czterdzieści cztery grupy wieńcowe z całego regionu — trzydzieści wieńców tradycyjnych i czternaście współczesnych — plus stoiska kół gospodyń. Starostami dożynek byli Iwona i Daniel Gałganowie.",
        "Warto to sobie przeliczyć. Województwo małopolskie ma sto osiemdziesiąt trzy gminy. Święto plonów dla nich wszystkich odbyło się we wsi liczącej cztery tysiące trzysta mieszkańców.",
        "Miejscem, w którym to się rozegrało, jest park przy dworze — i sam dwór ma historię dłuższą niż niejedno miasto w okolicy. Najstarszą część postawił między tysiąc sześćsetnym a tysiąc sześćset trzydziestym rokiem Aleksander Myszkowski. W tysiąc siedemset sześćdziesiątym dziewiątym Kacper Cieński dokończył rozbudowę, dodając dwie oficyny z łamanym dachem polskim. W tysiąc osiemset pięćdziesiątym Apolinary Cieński ujednolicił elewację w duchu klasycystycznym, a w tysiąc dziewięćset dziewiątym Wysoccy dobudowali galerie z kolumnami i witrażami.",
        "W czasie drugiej wojny mieścił się w nim sztab Luftwaffe, potem magazyn nawozów. Dopiero w latach siedemdziesiątych przeprowadzono konserwację i przystosowano budynek do celów hotelowych.",
        "Sama wieś pojawia się w dokumentach w tysiąc trzysta dwudziestym szóstym roku, jako Polenka — wtedy własność książęca, a dokument papieski wymienia tutejszą parafię jako już istniejącą. Od tysiąc trzysta siedemnastego należała do Księstwa Oświęcimskiego, sprzedanego Polsce w tysiąc czterysta pięćdziesiątym siódmym. W tysiąc pięćset pięćdziesiątym tutejszy kościół świętego Mikołaja zamieniono na zbór kalwiński; katolikom wrócił po czterdziestu ośmiu latach, w tysiąc pięćset dziewięćdziesiątym ósmym.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Polance Wielkiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Wystarczy adres z numerem domu. Gmina jest jedną wsią, więc nie ma tu sołectw do rozróżniania ani nazw, które mogłyby zmylić nawigację.",
        "Jedno zastrzeżenie: to Polanka Wielka w powiecie oświęcimskim, a nie Polanka Hallera pod Skawiną. Nazwy bywają mylone przy wpisywaniu w mapy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Polance Wielkiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Jedna parafia, jeden kalendarz",
      paragraphs: [
        "W gminie, która jest jedną wsią z jedną parafią, rok domowy ma bardzo wyraźny rytm — i wyznaczają go święta, a nie kalendarz szkolny czy grafik pracy. Wszyscy przygotowują to samo mniej więcej w tym samym tygodniu.",
        "Najlepiej widać to przed Wielkanocą. Święconka, żurek, biała kiełbasa, chrzan, ćwikła, mazurek, sernik i babka — wszystko w ciągu dwóch dni, w jednej kuchni, przy czym połowa tych rzeczy wymaga tarcia, ucierania albo pilnowania.",
        "Tu urządzenie zdejmuje dokładnie te czynności. Chrzan i ćwikła to kilka sekund zamiast kwadransa nad tarką i bez łez. Masa na sernik i na mazurka uciera się w jednym naczyniu, bez zmieniania końcówek. Ciasto drożdżowe na babkę wyrabia się w kilka minut zamiast kwadransa ręcznie.",
        "Druga rzecz to grudzień, który w takim domu jest jeszcze gęstszy. Barszcz, uszka, kompot z suszu, makowiec, pierniki, ryba. Farsze i masy powstają w tym samym naczyniu jeden po drugim, a wywar gotuje się bez pilnowania, kiedy robi się coś innego.",
        "Trzecia jest o odpuście i o sytuacjach, kiedy do domu przychodzi więcej ludzi, niż w nim mieszka. Wtedy najbardziej pomaga to, że sosy, pasty i ciasta da się przygotować dzień wcześniej, a urządzenie pracuje bez nadzoru i samo się wyłącza.",
        "Poza świętami gotuje się tu zwyczajnie: rosół, ziemniaki, kotlety, zupy, przetwory z ogrodu. Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Polanka Wielka i gotowanie — czterdzieści cztery wieńce w jednej wsi",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń. Nie będę więc wymieniać rzeczy, których nie sprawdziłam.",
      "Potwierdzone jest za to coś, co mówi o tej wsi więcej niż jakikolwiek rejestr. W sierpniu dwa tysiące dwudziestego czwartego roku Polanka Wielka przyjęła dwudzieste szóste Dożynki Województwa Małopolskiego: czterdzieści cztery grupy wieńcowe z całego regionu, trzydzieści wieńców tradycyjnych i czternaście współczesnych, do tego stoiska kół gospodyń. Wieś licząca cztery tysiące trzysta osób zorganizowała święto plonów dla stu osiemdziesięciu trzech gmin.",
      "Odbyło się to w Dworskim Parku Rekreacyjnym, przy dworze, którego najstarszą część postawiono jeszcze za Myszkowskich, w pierwszej połowie siedemnastego wieku.",
      "Gmina należy też do Stowarzyszenia Dolina Karpia, obejmującego jedenaście gmin — więc rybactwo jest tu obecne, choć własnego wpisu na liście produktów Polanka nie ma.",
      "Poza tym kuchnia jest tu zachodniomałopolska i bardzo domowa, a jej rytm wyznacza jedna parafia: te same przygotowania w tych samych tygodniach, u wszystkich naraz.",
      "Dla urządzenia najsensowniejsze jest tu wszystko, co robi się przed świętami: chrzan i ćwikła bez łez, masy na ciasta w jednym naczyniu, ciasto drożdżowe wyrabiane w kilka minut, wywar gotowany bez pilnowania. Czego nie zrobi, mówię wprost: nie ulepi uszek i nie upiecze mazurka. Zabiera tę część roboty, która jest wyłącznie czasem i pracą rąk.",
    ],
  },

  districtsHeading: "Do których części gminy Polanka Wielka dojeżdżam?",
  districtsParagraphs: [
    "Do całej, bez żadnej dopłaty za odległość. Gmina obejmuje jedną wieś, Polankę Wielką, z przysiółkiem Pasternik, i liczy cztery tysiące trzysta mieszkańców na dwudziestu czterech kilometrach kwadratowych.",
    "To nietypowa struktura jak na Małopolskę: nie ma tu sołectw do rozróżniania, nie ma kilku parafii ani kilku szkół. Jest jeden urząd przy ulicy Długiej i jeden adres, do którego wszyscy się odnoszą.",
    "W centrum wsi stoi zespół pałacowo-parkowy, którego najstarszą część zbudował Aleksander Myszkowski w pierwszej połowie siedemnastego wieku, a kolejne pokolenia właścicieli rozbudowywały go w tysiąc siedemset sześćdziesiątym dziewiątym, tysiąc osiemset pięćdziesiątym i tysiąc dziewięćset dziewiątym roku. W czasie drugiej wojny mieścił się w nim sztab Luftwaffe.",
    "Przy dworze jest Dworski Park Rekreacyjny — to tam w sierpniu dwa tysiące dwudziestego czwartego roku odbyły się Dożynki Województwa Małopolskiego z czterdziestoma czterema grupami wieńcowymi.",
    "Gmina leży na wysokości od dwustu czterdziestu pięciu do dwustu osiemdziesięciu pięciu metrów nad poziomem morza — czterdzieści metrów różnicy na całym obszarze. Należy do Stowarzyszenia Dolina Karpia.",
    "Dojazd: kolei w gminie nie ma. Sąsiaduje z Osiekiem, Przeciszowem, gminą wiejską Oświęcim i Zatorem.",
  ],
  districts: ["Polanka Wielka", "Pasternik"],

  nearbyHeading: "Osiek, Przeciszów i Zator też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Osiekiem, Przeciszowem, gminą wiejską Oświęcim i Zatorem. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: to Polanka Wielka w powiecie oświęcimskim, a nie Polanka Hallera w gminie Skawina. Obie nazwy bywają mylone przy wpisywaniu w mapy.",
  ],
  nearbyTowns: [
    "Osiek",
    "Przeciszów",
    "Oświęcim gmina",
    "Zator",
    "Kęty",
  ],

  about: blokOMnie("do Polanki Wielkiej", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Ile jest sołectw w gminie i które podać przy umawianiu?",
      answer:
        "Żadnego nie trzeba podawać i to jest tu rzecz nietypowa. Gmina obejmuje jedną wieś, Polankę Wielką, z przysiółkiem Pasternik — nie ma tu podziału na sołectwa, jaki znają sąsiedzi. Przy umawianiu wystarczy adres z numerem domu. Uczciwie dodam, że w statucie gminy tej kwestii nie sprawdziłam, bo dokument jest niedostępny w internecie; opieram się na tym, że urząd nigdzie nie publikuje listy sołtysów, a statystyka publiczna wymienia dwie miejscowości.",
    },
    ...faqWspolne("w Polance Wielkiej"),
    {
      question: "Czy zrobisz pokaz dla większej grupy?",
      answer:
        "Tak i w tej gminie ma to szczególny sens, bo wszystko dzieje się tu w jednym miejscu. Takie spotkanie planuję inaczej niż domowe: przywożę więcej składników, dobieram przepisy pod większą liczbę porcji i zostawiam więcej czasu na pytania. Chętnie pokażę też rzeczy, które robi się przed świętami — chrzan, ćwikłę, masy na ciasta — bo tam różnica w czasie jest największa. Warto uprzedzić o liczbie osób kilka dni wcześniej.",
    },
  ],

  geo: { lat: 49.981851, lng: 19.310859 },
};
