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
 * BABICE — gmina wiejska, powiat chrzanowski, zachodnia Małopolska.
 * 8 988 mieszkańców (31.12.2024, GUS) na 54,3 km², 166 os./km².
 * SIEDEM SOŁECTW.
 *
 * OŚ STRONY: KOŚCIÓŁ, KTÓRY PRZYJECHAŁ. Drewniany kościół w Mętkowie
 * został PRZENIESIONY Z NIEGOWICI w latach 1972–1974, bo władze PRL
 * nie zgadzały się na budowę nowego, a zabytku nie wolno było
 * rozebrać. Pierwsza msza 25 listopada 1973, KONSEKRACJA 1 MAJA 1974
 * PRZEZ KARD. KAROLA WOJTYŁĘ — tego samego, który w Niegowici był
 * wikariuszem w latach 1948–1949.
 *
 * DRUGA OŚ: ZAMEK LIPOWIEC I SKANSEN W WYGIEŁZOWIE — oba leżą
 * w gminie Babice, nie w Chrzanowie.
 *
 * TRZECIA: 40% powierzchni to lasy, dwa parki krajobrazowe, dwa
 * rezerwaty buczyny karpackiej, Wiślana Trasa Rowerowa (ok. 15 km).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 8 988
 *   mieszkańców, 166 os./km², średni wiek 43,0 lat; wzrost o 4,0%
 *   w latach 2002–2024; 56 urodzeń, 93 zgony (−37); SALDO MIGRACJI
 *   +45 — gmina rośnie migracyjnie mimo ujemnego przyrostu,
 * — SOŁECTWA (7, babice.pl): Babice, Jankowice, Mętków, Olszyny,
 *   Rozkochów, Wygiełzów, Zagórze,
 * — KOŚCIÓŁ W MĘTKOWIE (parafiametkow.pl, babice.pl): drewniany,
 *   XVIII w., PRZENIESIONY Z NIEGOWICI w latach 1972–1974; pierwsza
 *   msza 25.11.1973; KONSEKRACJA 1 MAJA 1974 PRZEZ KARD. KAROLA
 *   WOJTYŁĘ, wikariusza w Niegowici w latach 1948–1949; parafia
 *   od 3.04.1982,
 * — ZAMEK LIPOWIEC: w gminnej ewidencji zabytków jako „Ruiny Zamku
 *   Obronnego — Lipowiec, WYGIEŁZÓW, XIV w."; wg opisu gminy wzniesiony
 *   pod koniec XIII w. na wapiennym wzgórzu, więzienie dla duchownych
 *   i wyznawców reformacji, studnia kuta w litej skale, spalony przez
 *   Szwedów w 1655 r., dziś udostępniony turystycznie,
 * — SKANSEN W WYGIEŁZOWIE: gmina używa DWÓCH NAZW — starszej
 *   „Nadwiślański Park Etnograficzny" i nowszej „Muzeum Małopolski
 *   Zachodniej w Wygiełzowie" z „Parkiem Etnograficznym Krakowiaków
 *   Zachodnich". Piszę opisowo: „skansen w Wygiełzowie",
 * — KOŚCIÓŁ W BABICACH: pw. Wszystkich Świętych, 1524 r., wpisany
 *   do rejestru; dzwonnica murowana XVIII/XX w.; gminna ewidencja
 *   zabytków liczy 33 obiekty,
 * — PRZYRODA: lasy ok. 40% powierzchni; Rudniański i Tenczyński Park
 *   Krajobrazowy; Natura 2000 „Dolina Dolnej Skawy"; rezerwaty
 *   Lipowiec (10,80 ha, 1959) i Bukowica (22,76 ha, 1987) — buczyna
 *   karpacka; Wiślana Trasa Rowerowa ok. 15 km,
 * — GOSPODARKA: 949 podmiotów REGON; handel 25,5%, budownictwo 21,7%;
 *   918 mikrofirm, 30 małych, 1 średnia, ZERO DUŻYCH; bezrobocie 6,3%;
 *   SALDO DOJAZDÓW DO PRACY −1 176,
 * — TRANSPORT (babice.pl): DW 780 (Kraków–Chełm Śląski) i DW 781
 *   (Chrzanów–Łękawica); Kraków ok. 38 km, Oświęcim ok. 22 km,
 *   Zator ok. 8,5 km, Wadowice 27 km,
 * — IMPREZY: „Ziemniaczysko" (pierwsza niedziela września), Dożynki
 *   Gminne, „Wilanki", „Zlot Wiedźm i Czarownic"; gmina nazywa siebie
 *   „zagłębiem imprez kulturalnych powiatu chrzanowskiego",
 * — DOŻYNKI GMINNE 2026: sobota 22 sierpnia 2026, ROZKOCHÓW,
 *   organizator GOK w Babicach; udział kół gospodyń,
 * — JUROMANIA 2026 w gminie: 19–20 września 2026 (19.09 skansen
 *   w Wygiełzowie, 20.09 zamek Lipowiec),
 * — GMINA PARTNERSKA: Pischelsdorf (Styria, Austria), od 2005.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — FORMALNEJ LISTY GMIN GRANICZĄCYCH. Nie potwierdzona — piszę
 *   o gminach najbliższych, nie o „graniczy z",
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza ministerialna
 *   niedostępna,
 * — STACJI KOLEJOWEJ I DROGI KRAJOWEJ. Nie potwierdzone,
 * — HISTORII GÓRNICTWA W SAMEJ GMINIE. Nie potwierdzona — powiat
 *   chrzanowski owszem, ale gminy Babice to nie dotyczy w sposób,
 *   który bym sprawdziła,
 * — NAZW KÓŁ GOSPODYŃ I KONKRETNYCH POTRAW. Nie potwierdzone,
 * — ZNANYCH OSÓB. Nie potwierdzone,
 * — TERENÓW INWESTYCYJNYCH. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — TRZY RÓŻNE „BABICE": ta gmina (pow. chrzanowski, małopolskie),
 *   gmina Babice w podkarpackim (Babice nad Sanem) i STARE BABICE
 *   pod Warszawą,
 * — ZAMEK LIPOWIEC JEST W WYGIEŁZOWIE, nie w Babicach. Mówi się
 *   „zamek w gminie Babice" i stąd pomyłka,
 * — NAZWA MUZEUM W WYGIEŁZOWIE JEST W TRAKCIE ZMIANY — nie podawać
 *   jednej wersji jako pewnej,
 * — KOŚCIÓŁ W MĘTKOWIE NIE ZOSTAŁ TAM ZBUDOWANY, tylko przeniesiony
 *   z Niegowici. Datowanie go „na miejscu od XVIII w." to błąd,
 * — LISTA „GMINY W POBLIŻU" z serwisów statystycznych to NIE jest
 *   lista gmin graniczących.
 */

export const BABICE: CityContent = {
  slug: "babice",
  h1: "Thermomix Babice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Babice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Babice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Babice, Wygiełzów, Mętków, Jankowice, Rozkochów. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Babice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Babice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Babice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 7 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Babice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Babicach, jak w Wygiełzowie, Mętkowie, Jankowicach czy Rozkochowie.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "To jest zachodni kraniec obszaru, który obsługuję — od Nowego Wiśnicza mam tu daleko. Ale przyjeżdżam i za dojazd nie liczę ani złotówki, bo takie same zasady mam w całej Małopolsce.",
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
      heading: "Kościół, który tu przyjechał, i zamek, który stoi od siedmiu wieków",
      paragraphs: [
        "W Mętkowie stoi drewniany kościół z osiemnastego wieku, który nie został tam zbudowany. Został przeniesiony — z Niegowici, w latach tysiąc dziewięćset siedemdziesiąt dwa–siedemdziesiąt cztery. Powód był bardzo peerelowski: władze nie zgadzały się na budowę nowego kościoła, a zabytku nie wolno było rozebrać. Zgodzono się więc na przeprowadzkę.",
        "Pierwszą mszę odprawiono w nim dwudziestego piątego listopada tysiąc dziewięćset siedemdziesiątego trzeciego roku, a konsekrował go pierwszego maja siedemdziesiątego czwartego kardynał Karol Wojtyła — ten sam, który w Niegowici, skąd kościół przyjechał, był wikariuszem w latach czterdziestych. Parafia powstała tu w osiemdziesiątym drugim.",
        "Druga rzecz, którą trzeba w tej gminie rozstrzygnąć od razu: zamek Lipowiec leży w Wygiełzowie, czyli w gminie Babice. Wzniesiony pod koniec trzynastego wieku na wapiennym wzgórzu, przez lata służył jako więzienie dla duchownych i wyznawców reformacji, ma studnię kutą w litej skale, spłonął od Szwedów w tysiąc sześćset pięćdziesiątym piątym i dziś jest udostępniony turystom.",
        "Pod zamkiem, też w Wygiełzowie, stoi skansen z drewnianą architekturą z siedemnastego i osiemnastego wieku. Uczciwie powiem, że jego nazwa jest właśnie w trakcie zmiany — gmina używa równolegle starszej i nowszej — więc mówię po prostu: skansen w Wygiełzowie.",
        "Czterdzieści procent powierzchni gminy to lasy. Są tu dwa parki krajobrazowe, obszar Natura dwa tysiące w dolinie dolnej Skawy i dwa rezerwaty buczyny karpackiej: Lipowiec i Bukowica. Przez gminę biegnie też około piętnastu kilometrów Wiślanej Trasy Rowerowej.",
        "A gmina, która sama o sobie mówi „zagłębie imprez kulturalnych powiatu chrzanowskiego”, ma na to argumenty: „Ziemniaczysko” w pierwszą niedzielę września, dożynki, „Wilanki” i „Zlot Wiedźm i Czarownic”. Na osiem tysięcy dziewięćset osiemdziesiąt osiem osób to naprawdę gęsty kalendarz.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Babice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo: Babice, Wygiełzów, Mętków, Jankowice, Rozkochów, Olszyny albo Zagórze. Dopłaty za odległość nie ma w żadnym z nich — i nie ma jej też dlatego, że to zachodni kraniec obszaru, który obsługuję.",
        "Terminy wieczorne i sobotnie mam tu w pierwszej kolejności, bo saldo dojazdów do pracy wynosi w tej gminie minus tysiąc sto siedemdziesiąt sześć osób. Mam też godziny przedpołudniowe, jeśli ktoś pracuje na zmiany.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Babice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, z którego się wyjeżdża, i weekend, w którym się gotuje",
      paragraphs: [
        "Bilans dojazdów do pracy jest tu ujemny o tysiąc sto siedemdziesiąt sześć osób. W gminie działa dziewięćset czterdzieści dziewięć firm, ale prawie wszystkie to mikroprzedsiębiorstwa — trzydzieści małych, jedna średnia, żadnej dużej. Praca jest w Chrzanowie, Oświęcimiu i w Krakowie, a mieszka się tutaj.",
        "To znaczy dom, w którym po siedemnastej trzeba postawić obiad, i w którym w tygodniu na gotowanie po prostu nie ma godziny. Urządzenie gotujące bez obecności przesuwa tę godzinę na rano: wstawiacie zupę albo danie jednogarnkowe, wychodzicie, a ono gotuje się samo, wyłącza i czeka.",
        "Druga rzecz to weekend. W gminie, z której się codziennie wyjeżdża, sobota i niedziela są jedynymi dniami, kiedy gotuje się porządnie i na zapas. Trzy zupy i dwa dania robi się jedno po drugim, bez pilnowania — a potem wystarczy odgrzać.",
        "Trzecia to las. Czterdzieści procent powierzchni gminy to lasy, więc grzyby i owoce leśne są tu częścią spiżarni, a nie ciekawostką. Marynaty, sosy, powidła, dżemy — to jest rozdrabnianie i podgrzewanie w stałej temperaturze, z mieszaniem, którego nie trzeba pilnować. Przebierania i obierania nie zabierze.",
        "Czwarta to święta i przyjęcia, bo tu naprawdę dużo się dzieje. „Ziemniaczysko”, dożynki, „Wilanki” — a przy każdej takiej okazji ktoś w domu piecze. Ciasto drożdżowe i mielenie maku to dwie rzeczy, przy których urządzenie zdejmuje z rąk najwięcej roboty.",
        "I uczciwie: nie usmaży, nie upiecze i nie zastąpi piekarnika. Zrobi ciasto, zrobi masę, ugotuje i zmiksuje — blacha i patelnia zostają po Waszej stronie.",
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
    heading: "Babice i gotowanie — kuchnia z ziemniaka, lasu i odpustu",
    paragraphs: [
      "Gmina, która ma własne święto ziemniaka — „Ziemniaczysko”, w pierwszą niedzielę września — mówi o swojej kuchni więcej niż niejeden folder. To jest kuchnia z ziemniaka, kapusty, mąki i mleka, robiona na co dzień, w dużych garnkach.",
      "Do tego las, bo zajmuje czterdzieści procent gminy. Grzyby i owoce leśne to tutaj część spiżarni, a nie wyprawa raz w roku. Marynaty, sosy, dżemy i powidła robi się we wrześniu seriami.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie udało mi się zweryfikować, czy z tej gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych — baza ministerialna była dla mnie niedostępna. Nie wymyślę więc nazwy żadnej „potrawy babickiej”.",
      "To, co potwierdzone, to bardzo gęsty kalendarz. Dożynki gminne dwa tysiące dwudziestego szóstego roku odbyły się dwudziestego drugiego sierpnia w Rozkochowie, z udziałem kół gospodyń. We wrześniu przyszła Juromania — dziewiętnastego w skansenie w Wygiełzowie, dwudziestego na zamku Lipowiec, z degustacjami kuchni tradycyjnej. Do tego „Wilanki” i „Zlot Wiedźm i Czarownic”.",
      "Kto piecze na taką imprezę, ten wie, ile godzin idzie na samo ciasto. I tu urządzenie robi najwięcej: wyrobi ciasto drożdżowe, zmieli mak, zrobi kruszonkę, farsze i pasty do kanapek, ugotuje kapustę bez pilnowania.",
      "Czego nie zrobi: nie upiecze i nie usmaży. Blacha idzie do piekarnika, placki ziemniaczane na patelnię — zetrze ziemniaki, ale smażyć trzeba samemu. Nie ma sensu obiecywać czegoś innego.",
    ],
  },

  districtsHeading: "Gdzie w gminie Babice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw: Babic, Wygiełzowa, Mętkowa, Jankowic, Rozkochowa, Olszyn i Zagórza. Dopłaty za odległość nie ma nigdzie.",
    "Gmina zajmuje pięćdziesiąt cztery kilometry kwadratowe i liczy osiem tysięcy dziewięćset osiemdziesiąt osiem osób. Czterdzieści procent powierzchni to lasy, są tu dwa parki krajobrazowe i dwa rezerwaty — Lipowiec i Bukowica.",
    "Przez gminę biegną dwie drogi wojewódzkie: siedemset osiemdziesiąta z Krakowa w stronę Chełmu Śląskiego i siedemset osiemdziesiąta pierwsza z Chrzanowa. Do Krakowa jest stąd około trzydziestu ośmiu kilometrów, do Oświęcimia dwadzieścia dwa, do Zatora niecałe dziewięć.",
    "To jest zachodni kraniec obszaru, który obsługuję. Przyjeżdżam tu samochodem i za dojazd nie liczę nic — tak samo jak wszędzie indziej w Małopolsce.",
    "I jedno rozstrzygnięcie, bo bywa mylone: zamek Lipowiec i skansen leżą w Wygiełzowie, czyli w tej gminie. Do Wygiełzowa dojeżdżam dokładnie tak samo jak do Babic.",
  ],
  districts: [
    "Babice",
    "Wygiełzów",
    "Mętków",
    "Jankowice",
    "Rozkochów",
    "Olszyny",
    "Zagórze",
  ],

  nearbyHeading: "Chrzanów, Libiąż, Alwernia i Spytkowice też są na mojej trasie",
  nearbyParagraphs: [
    "Najbliżej stąd do Alwerni, Chrzanowa, Libiąża i Spytkowic. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy gminy i nie masz pewności, czy to jeszcze Babice, czy już Alwernia albo Libiąż — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Chrzanów",
    "Alwernia",
    "Libiąż",
    "Spytkowice",
    "Trzebinia",
    "Skawina",
    "Kraków",
  ],

  about: blokOMnie("do gminy Babice", "w powiecie chrzanowskim"),

  faq: [
    {
      question: "To daleko od Nowego Wiśnicza. Naprawdę dojedziesz bez dopłaty?",
      answer:
        "Dojadę i naprawdę bez dopłaty. Gmina Babice to zachodni kraniec obszaru, który obsługuję, i owszem — mam tu kawał drogi. Ale zasadę mam jedną w całej Małopolsce: dojazd nic nie kosztuje, niezależnie od kilometrów. Umawiam się tu zwykle na konkretny dzień z kilkoma wizytami w okolicy, więc czasem proszę o odrobinę elastyczności przy godzinie.",
    },
    ...faqWspolne("w gminie Babice"),
    {
      question: "Mieszkam w Wygiełzowie, przy zamku. Dojedziesz tam?",
      answer:
        "Dojadę, bez dopłat, tak samo jak do Babic. Wygiełzów to jedno z siedmiu sołectw tej gminy — i to właśnie w nim leżą zamek Lipowiec i skansen, choć mówi się o nich zwykle „w gminie Babice”, przez co bywają przypisywane samym Babicom.",
    },
    {
      question: "Wracamy z pracy późno. Kiedy się umawiacie?",
      answer:
        "Najczęściej wieczorem i w soboty. Z gminy Babice wyjeżdża do pracy o tysiąc sto siedemdziesiąt sześć osób więcej, niż przyjeżdża, więc terminy popołudniowe są tu podstawą, a nie wyjątkiem. Mam też godziny przedpołudniowe w dni robocze, jeśli ktoś pracuje na zmiany.",
    },
  ],

  geo: { lat: 50.0688, lng: 19.4491 },
};
