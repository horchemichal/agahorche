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
 * OLKUSZ — największa gmina Małopolski, która do tej pory nie miała
 * własnej strony (44 782 mieszkańców). Pierwsza gmina powiatu olkuskiego.
 *
 * OŚ STRONY: miasto, w którym od 1907 roku robi się garnki.
 * Fabryka naczyń emaliowanych jest tu ciągłością, a nie ciekawostką —
 * i to jest jedyny w całej bazie przypadek, gdzie lokalny przemysł
 * dotyczy dokładnie tego, o czym jest ta strona. Drugi wątek to srebro
 * i gwarkowie, bezpieczny, bo historyczny.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — gmina miejsko-wiejska, 44 782 mieszkańców (GUS BDL, 31.12.2025);
 *   20 sołectw i 10 osiedli miejskich. Uwaga: Przegląd Olkuski za
 *   ewidencją ludności podaje 43 940 (miasto 30 658, wieś 13 282) —
 *   to inna podstawa liczenia. W tekście nie podaję żadnej z tych liczb
 *   jako twardego faktu, opisuję jakościowo,
 * — sołectwa: Bogucin Mały, Braciejówka, Gorenice, Kogutek, Kosmolów,
 *   Niesułowice, Olewin, Osiek, Pazurek, Podlesie Rabsztyńskie,
 *   Rabsztyn, Sieniczno, Troks, Wiśliczka, Witeradów, Zadole
 *   Kosmolowskie, Zawada, Zederman, Zimnodół, Żurada,
 * — osiedla: Śródmieście, Centrum, Pakuska, Czarna Góra, Pomorzany,
 *   Glinianki, Młodych, Wschód, Słowiki, Skalskie,
 * — największe sołectwa (31.12.2025): Osiek 1 956, Zederman 1 352,
 *   Gorenice 1 210, Żurada 1 195,
 * — położenie: ok. 40 km do Krakowa i ok. 40 km do Katowic, przy DK94;
 *   DW791 na Trzebinię i Zawiercie, DW783 na Wolbrom i Miechów,
 * — KOLEJ CZYNNA: linia nr 62, 7 par pociągów Olkusz–Kraków w dni
 *   robocze i 3 pary w weekendy, czas przejazdu ok. 70–80 minut
 *   (rozkład od 14.12.2025, Polregio). To rzadkość w naszej bazie —
 *   większość gmin kolei pasażerskiej nie ma,
 * — krajobraz: Wyżyna Krakowsko-Częstochowska; ok. 44% użytków rolnych,
 *   ok. 45% lasów; przez miasto płynie Baba,
 * — OFNE Emalia SA: fabryka założona w 1907 r. przez Petera Westena,
 *   w 1928 ok. 2 500 pracowników; od 2004 prowadzona przez rodzinę
 *   Cader; produkuje garnki, czajniki, patelnie; logo to czerwony
 *   czajnik z literą „O”. Wyroby wystawiane na Nadprzemszańskim
 *   Festiwalu Smaku,
 * — inni pracodawcy: IMI International (technika hydrauliczna),
 *   PWiK Olkusz, handel i usługi,
 * — cebulorz olkuski: drożdżowy placek z cebulą i kminkiem, pieczony
 *   w piecu chlebowym po wyjęciu chleba; jedzony na ciepło lub zimno,
 *   ze śmietaną, twarogiem, albo zamiast chleba do żuru i barszczu.
 *   Źródło: media lokalne — NIE jest to wpis na Listę Produktów
 *   Tradycyjnych MRiRW,
 * — bazylika św. Andrzeja Apostoła: gotyk XIII/XIV w., rozbudowana
 *   przez Kazimierza Wielkiego; organy Hansa Hummla, budowa rozpoczęta
 *   w 1611 r., zachowany oryginalny mechanizm i większość piszczałek,
 *   konserwacja zakończona w 2016; gotycki poliptyk z XV w. (Jan Wielki
 *   i Stanisław Stary) — jeden z czterech zachowanych w Polsce;
 *   ołowiana chrzcielnica z XVI w., srebrny Krzyż Gwarków z XVII w.,
 * — Srebrny Szlak Gwarków Olkuskich: 18 brązowych figur na cokołach
 *   z czerwonego zlepieńca parczewskiego, autor Jan Siuta,
 * — Muzeum Afrykanistyczne im. Bogdana Szczygła (od 1971), kolekcja
 *   Tuaregów i Dogonów zebrana przez olkuskiego lekarza, ul. Szpitalna,
 * — zamek Rabsztyn na Szlaku Orlich Gniazd, sołectwo Rabsztyn;
 *   prace rekonstrukcyjne od VII.2025,
 * — Święto Srebra – Dni Olkusza, ostatni weekend maja, Rynek,
 * — średni wiek 44,3 lat (powyżej średniej krajowej 42,7).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KOPALNIA „OLKUSZ-POMORZANY”. Wydobycie zakończone w 2020,
 *   likwidacja formalnie zamknięta 31.12.2025. To koniec siedmiuset lat
 *   górnictwa i utrata pracy dla setek rodzin. Temat tożsamościowo
 *   bolesny — ani słowa, także w formie „kiedyś tu wydobywano”.
 *   Historyczne srebro i gwarkowie są bezpieczni, bo to XIV–XVII wiek;
 *   cynk i ołów XX wieku już nie,
 * — SKAŻENIE GLEB METALAMI CIĘŻKIMI. Rejon olkuski to jeden
 *   z klasycznych polskich obszarów badań nad narażeniem dzieci
 *   na ołów. KONSEKWENCJA DLA TREŚCI, NAJWAŻNIEJSZA NA TEJ STRONIE:
 *   na żadnej stronie powiatu olkuskiego nie wolno użyć motywu
 *   „warzywa z własnego ogródka”, „to, co wyrosło za domem”,
 *   „własne przetwory z działki”. To standardowy chwyt w treści
 *   o gotowaniu i tutaj byłby w najlepszym razie nietaktem.
 *   Zamiast tego: warzywa z targu, sezon, zakupy na zapas,
 * — ZAPADLISKA I PUSTKI KRASOWE (ok. 200 zapadlisk w 15 miesięcy
 *   po wyłączeniu pomp; wstrzymana przebudowa DK94). Dokładnie ten sam
 *   mechanizm co zapadliska w Trzebini — dotyka wartości domu,
 * — LEJ DEPRESJI I POWRÓT WODY (300 km², poziom wód podniósł się
 *   o ponad 130 m, podtopienia, „Pojezierze Olkuskie”),
 * — ZAMKNIĘCIE PORODÓWKI. Oddział zawieszony od XI.2024, zamknięty
 *   1.07.2025; kobiety rodzą w Chrzanowie, Miechowie, Dąbrowie
 *   Górniczej i Krakowie. Strona celująca w młode rodziny traci
 *   wiarygodność natychmiast, jeśli tego nie wie — więc nie porusza,
 * — „KRWAWA ŚRODA” 31 lipca 1940 r., masowa akcja niemiecka wobec
 *   mieszkańców. Jak Oświęcim w fali zachodniej: zero wzmianek,
 * — wyludnianie i prognozy GUS (−10,3% w latach 2002–2024),
 * — utrudnienia i korki na DK94 (przebudowa do IX.2026) — mieszkańcy
 *   mają tego dość,
 * — bezrobocie 6,7% i płace na poziomie 86,8% średniej krajowej:
 *   to kontekst rozmowy o racie, nie treść strony.
 *
 * PUŁAPKA:
 * — EMALIA NIE UPADŁA. Upadłość ogłosiła spółka Emalia Olkusz SA;
 *   OFNE Emalia SA działa nieprzerwanie od 1907 r. Napisanie
 *   „fabryka garnków upadła” to natychmiastowa wpadka — Gazeta
 *   Krakowska musiała to prostować w 2022 r.,
 * — „GWARKI” to święto Tarnowskich Gór, nie Olkusza. W Olkuszu jest
 *   Srebrny Szlak Gwarków Olkuskich (szlak z figurami) oraz Święto
 *   Srebra – Dni Olkusza,
 * — Olkusz NIE leży nad Białą Przemszą. Przez miasto płynie Baba,
 * — Rabsztyn to sołectwo gminy Olkusz — zamek nie leży w gminie
 *   Klucze ani w Bolesławiu,
 * — 20 sołectw i 10 osiedli, nie „21 wsi”,
 * — kolej JEST czynna. Nie powtarzać schematu z Alwerni, gdzie trzeba
 *   było pisać „nie dojedziesz pociągiem”.
 */

export const OLKUSZ: CityContent = {
  slug: "olkusz",
  h1: "Thermomix Olkusz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Olkusz — prezentacja i cena",
  seoDescription:
    "Thermomix w Olkuszu: bezpłatna prezentacja TM7 u Ciebie w kuchni — miasto i wszystkie sołectwa. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Olkusz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Olkuszu i okolicznych sołectwach. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Olkusza przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam na wszystkie osiedla i do wszystkich dwudziestu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("Olkusz i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Olkuszu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu na Słowikach, jak w domu w Zedermanie.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Miasto, w którym od 1907 roku robi się garnki",
      paragraphs: [
        "Olkusz jest jedynym miejscem w całej okolicy, gdzie rozmowa o gotowaniu zahacza o lokalny przemysł. Fabryka naczyń emaliowanych działa tu od tysiąc dziewięćset siódmego roku — założył ją Peter Westen, w latach dwudziestych pracowało w niej około dwóch i pół tysiąca osób, a dziś prowadzi ją rodzina Cader. Czerwony czajnik z literą „O” zna w tym mieście każdy.",
        "Piszę o tym nie dla ozdoby. W Olkuszu trafiam do kuchni, w których stoją garnki zrobione kilka ulic dalej, i do domów, gdzie ktoś w tej fabryce pracował albo pracuje. To zmienia rozmowę: nie muszę tłumaczyć, czym różni się porządne naczynie od byle jakiego, bo to jest wiedza, którą się tu ma z domu.",
        "Druga rzecz to układ dnia. Część osób pracuje na miejscu — w przemyśle, w handlu, w usługach — a część dojeżdża, i to w dwie strony naraz: do Krakowa i na Śląsk, po czterdzieści kilometrów w każdą. Olkusz jest dokładnie pośrodku, co brzmi wygodnie, dopóki nie policzy się godzin.",
        "Tu przydaje się rzecz, o której warto wiedzieć: z Olkusza jeździ pociąg do Krakowa. Od grudniowej korekty rozkładu jest siedem par w dni robocze i trzy w weekendy, a przejazd zajmuje około siedemdziesięciu, osiemdziesięciu minut. W okolicy, gdzie większość gmin kolei pasażerskiej nie ma wcale, to spora różnica — i dla wielu osób oznacza, że wraca się o stałej porze, ale późno.",
        "Wieczór po takim dniu wygląda zwykle podobnie: trzeba coś zjeść, a nie ma już siły stać przy garnku. I to jest cała rzecz, którą pokazuję na prezentacji — nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam, kiedy Ty jeszcze jesteś w drodze albo dopiero zdejmujesz kurtkę.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy i nie nauczy nikogo gotować z niczego. Zabiera stanie obok garnka i te czynności, przez które gotowanie odkłada się na później — rozdrabnianie, ucieranie, mieszanie, pilnowanie, żeby nie przywarło.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Olkuszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, gdzie mieszkasz: na którym osiedlu w mieście albo w którym sołectwie. Do Osieka, Zedermanu czy Gorenic jedzie się inaczej niż do Śródmieścia, a do Braciejówki czy Pazurka jeszcze inaczej — od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Jeśli wracasz z pracy pociągiem albo o stałej porze, powiedz o tym przy umawianiu. Prościej mi ustawić spotkanie pod Twój rozkład niż odwrotnie. Weekendy są tu równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Olkuszu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy dwie osoby wracają o różnych porach",
      paragraphs: [
        "W Olkuszu bardzo częsty jest układ, w którym jedna osoba pracuje na miejscu i wraca wcześniej, a druga dojeżdża i wraca dwie godziny później. Do tego dochodzą zmiany, bo część zakładów pracuje na więcej niż jedną. Efekt jest taki, że wspólny obiad o jednej porze zdarza się głównie w weekend.",
        "Praktyczne bywa tu przede wszystkim to, że jedno gotowanie może obsłużyć obie pory. Garnek nastawiony po południu stoi ciepły albo odgrzewa się w kilka minut, bez wysychania i bez smaku odgrzewanego po raz trzeci. To banalna rzecz, a rozwiązuje najczęstszy problem takiego domu.",
        "Druga rzecz to zapasy. Przy dojazdach zakupy robi się rzadziej i większe, więc spiżarnia jest realnym elementem gospodarstwa. Chleb, ciasto na pierogi, pasty kanapkowe, sosy, zupy do zamrożenia — to wszystko da się robić partiami, w jednym naczyniu, w niedzielne przedpołudnie zamiast przez cały tydzień po kawałku.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i to jest zwykle pierwsza rzecz, którą rodzice zauważają po miesiącu.",
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
    {
      id: "jedna-osoba",
      heading: "Czy Thermomix ma sens, gdy gotuje się dla jednej lub dwóch osób?",
      paragraphs: [
        "To pytanie słyszę w Olkuszu częściej niż gdzie indziej i jest ono uczciwe. Odpowiedź brzmi: ma, ale z innego powodu niż w domu z czwórką dzieci. Tam chodzi o ilość. Tutaj o to, żeby w ogóle chciało się gotować.",
        "Gotowanie dla jednej osoby najczęściej przegrywa nie z brakiem umiejętności, tylko z rachunkiem opłacalności — pół godziny przy garnku i góra naczyń dla jednego talerza. Kiedy nastawienie zupy zajmuje pięć minut, a naczynie jest jedno, ten rachunek się zmienia.",
        "Druga rzecz to porcje. Da się ugotować mało i naprawdę mało, bez kombinowania i bez wyrzucania. A jeśli akurat wygodniej ugotować więcej i odłożyć na trzy dni, to też jest normalny sposób używania tego urządzenia, a nie awaryjny.",
        "Na prezentacji pokazuję to wprost: gotuję jedną małą porcję, żeby było widać, jak to wygląda w praktyce, a nie na zdjęciu z książki kucharskiej. Jeśli po tym uznasz, że nie ma sensu — powiem to samo i nie będę przekonywać.",
      ],
      links: [
        {
          href: "/thermomix/dla-poczatkujacych",
          label: "Thermomix dla początkujących",
        },
      ],
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Olkusz i gotowanie — cebulorz, srebro i czerwony czajnik",
    paragraphs: [
      "Olkuska rzecz, o której warto wiedzieć, nazywa się cebulorz. To drożdżowy placek z cebulą i kminkiem, pieczony dawniej w piecu chlebowym zaraz po wyjęciu chleba, kiedy piec jeszcze trzymał ciepło. Jadło się go na ciepło albo na zimno, ze śmietaną, z twarogiem, albo zamiast chleba do żuru i barszczu.",
      "Uczciwie: cebulorz nie jest wpisany na ministerialną Listę Produktów Tradycyjnych — żadna z gmin powiatu olkuskiego nie ma na niej swojego produktu. To tradycja opisana lokalnie, nie zarejestrowana. Piszę o tym, bo lubię, gdy rzeczy są nazwane dokładnie, a nie awansowane na potrzeby ładniejszego zdania.",
      "Ciasto drożdżowe to zresztą dobry przykład tego, co Thermomix realnie zmienia. Wyrabianie przestaje być kwestią siły w rękach i czasu, a wyrastanie da się prowadzić w tym samym naczyniu. Nie zastąpi to wyczucia, ile cebuli i jak drobno — to zostaje po stronie osoby, która piecze.",
      "I jeszcze jedno, czego nie ma nigdzie indziej w Małopolsce: w Olkuszu robi się naczynia. Fabryka emalii działa od tysiąc dziewięćset siódmego roku i jej wyroby stają na festiwalach smaku obok jedzenia, a nie obok sprzętu. W mieście, które produkuje garnki, rozmowa o kuchni zaczyna się od innego miejsca — i to jest wygodne dla nas obu.",
    ],
  },

  districtsHeading: "Gdzie w gminie Olkusz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw, bez żadnej dopłaty za odległość. W mieście to Śródmieście, Centrum, Pakuska, Czarna Góra, Pomorzany, Glinianki, osiedle Młodych, Wschód, Słowiki i Skalskie.",
    "Na terenach wiejskich największe są Osiek, Zederman, Gorenice i Żurada — każde po tysiąc kilkaset osób, czyli tyle co niejedna samodzielna wieś w okolicy. Dalej Braciejówka, Kosmolów, Niesułowice, Olewin, Pazurek, Podlesie Rabsztyńskie, Rabsztyn, Sieniczno, Troks, Wiśliczka, Witeradów, Zadole Kosmolowskie, Zawada, Zimnodół, Bogucin Mały i Kogutek.",
    "Gmina leży na Wyżynie Krakowsko-Częstochowskiej i prawie połowę jej powierzchni zajmują lasy. Przez miasto płynie Baba — nie Biała Przemsza, jak czasem można przeczytać. W sołectwie Rabsztyn stoi zamek na Szlaku Orlich Gniazd, od dwa tysiące dwudziestego piątego roku znów w rękach konserwatorów.",
    "Dojazd jest tu wygodniejszy niż w większości gmin, do których jeżdżę: przez Olkusz biegnie droga krajowa numer dziewięćdziesiąt cztery, a stąd rozchodzą się drogi wojewódzkie na Trzebinię, Zawiercie, Wolbrom i Miechów. Do niektórych sołectw jedzie się już wąsko i wolno, więc przy umawianiu warto powiedzieć, którędy najlepiej trafić.",
  ],
  districts: [
    "Śródmieście",
    "Centrum",
    "Pakuska",
    "Czarna Góra",
    "Pomorzany",
    "Glinianki",
    "Osiedle Młodych",
    "Wschód",
    "Słowiki",
    "Skalskie",
    "Osiek",
    "Zederman",
    "Gorenice",
    "Żurada",
    "Rabsztyn",
    "Witeradów",
    "Kosmolów",
    "Zimnodół",
  ],

  nearbyHeading: "Bukowno, Bolesław, Klucze i Wolbrom też są na mojej trasie",
  nearbyParagraphs: [
    "Olkusz jest środkiem powiatu, więc układam stąd trasy we wszystkie strony. Do Bukowna i Bolesławia mam kwadrans, do Klucz niewiele więcej, do Wolbromia i Trzyciąża pół godziny. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Dalej na południe zaczyna się pierścień krakowski, w którym pracuję od dawna: Krzeszowice, Zabierzów, a stamtąd już sam Kraków. Na zachód Trzebinia i Chrzanów. Jeśli mieszkasz na granicy powiatu i nie wiesz, po której stronie jesteś — po prostu zapytaj, wszędzie tam jeżdżę tak samo.",
  ],
  nearbyTowns: [
    "Bukowno",
    "Bolesław",
    "Klucze",
    "Wolbrom",
    "Trzyciąż",
    "Trzebinia",
    "Chrzanów",
    "Krzeszowice",
    "Kraków",
  ],

  about: blokOMnie("do Olkusza", "w powiecie olkuskim"),

  faq: [
    {
      question: "Dojeżdżasz też do sołectw, czy tylko do samego Olkusza?",
      answer:
        "Do wszystkich dwudziestu sołectw i bez dopłaty za odległość — od Osieka i Zedermanu po Braciejówkę, Pazurek i Bogucin Mały. Powiedz przy umawianiu, gdzie dokładnie mieszkasz i którędy najwygodniej dojechać, bo do części sołectw jedzie się wąsko i wolno.",
    },
    ...faqWspolne("w Olkuszu"),
    {
      question: "Wracam z Krakowa pociągiem po osiemnastej. Zdążymy?",
      answer:
        "Spokojnie. Prezentacja trwa około dwóch godzin, więc wieczorne spotkania są tu codziennością — z Olkusza jeździ sporo osób do Krakowa i większość wraca właśnie o tej porze. Powiedz, którym pociągiem wracasz, to ustawię godzinę tak, żebyś nie musiał się spieszyć.",
    },
    {
      question: "Gotuję głównie dla siebie. Czy to nie jest urządzenie dla dużej rodziny?",
      answer:
        "Nie tylko. Przy jednej czy dwóch osobach chodzi o co innego niż ilość — o to, żeby w ogóle chciało się ugotować, kiedy rachunek „pół godziny przy garnku za jeden talerz” wypada źle. Da się gotować małe porcje bez kombinowania. Na prezentacji pokazuję to wprost, gotując jedną małą porcję.",
    },
    {
      question: "Czy Thermomix nadaje się do ciasta na cebulorza?",
      answer:
        "Tak, ciasto drożdżowe to jedna z tych rzeczy, przy których różnica jest największa — wyrabianie przestaje zależeć od siły w rękach, a wyrastanie prowadzi się w tym samym naczyniu. Ile cebuli i jak drobno pokrojonej, to już zostaje po Twojej stronie i dobrze, żeby zostało.",
    },
  ],

  geo: { lat: 50.2811, lng: 19.5653 },
};
