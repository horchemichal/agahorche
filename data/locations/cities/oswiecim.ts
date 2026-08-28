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
 * OŚWIĘCIM — miasto trzydziestopięciotysięczne, które od czterdziestu lat
 * traci ludzi na rzecz własnej gminy wiejskiej, i w którym największy
 * zakład pracuje w systemie czterobrygadowym. To są dwie osie tej strony.
 *
 * TON. To jest strona o mieście, w którym ludzie mieszkają, pracują
 * i gotują obiad. Piszemy o zamku piastowskim, Sole, Rynku, osiedlu
 * Chemików, zmianach 7:00/15:00/23:00 i o tym, że miasto się starzeje.
 * Nie piszemy o niczym innym — patrz sekcja poniżej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 35 420 mieszkańców miasta, GUS, stan na 31.12.2024; powierzchnia
 *   30,0 km², gęstość ok. 1 180 os./km²,
 * — mediana wieku 45,1 lat; 24,6% mieszkańców w wieku 65+; spadek
 *   liczby ludności o 15,2% w latach 2002–2024, szczyt 45 678 osób
 *   w 1984 r. (GUS; Gazeta Krakowska, 18.01.2025),
 * — gmina wiejska Oświęcim (jednostka odrębna od miasta): 18 971
 *   mieszkańców, 13 sołectw, wzrost o 17,5% w latach 2002–2024,
 * — 12 rad osiedli w mieście (BIP UM Oświęcim); nazwy potoczne używane
 *   przez mieszkańców i pośredników: Chemików, Nowe Stawy, S-Centrum,
 * — osiedle Chemików: ok. 15 000 mieszkańców, zabudowa mieszana —
 *   niskie bloki z lat 50. i wielka płyta z lat 80.; własne przychodnie,
 *   szkoły, dom kultury, basen i lodowisko (Gazeta Krakowska, 04.10.2024),
 * — Synthos S.A., ul. Chemików 1 — grupa zatrudnia blisko 3 600 osób
 *   w sześciu lokalizacjach; produkcja w systemie czterobrygadowym,
 *   trzy zmiany: 7:00–15:00, 15:00–23:00, 23:00–7:00 (ogłoszenie
 *   rekrutacyjne spółki, pracuj.pl),
 * — kolej: linie 93 (Trzebinia–Czechowice), 94 (Kraków Płaszów–Oświęcim,
 *   ruch pasażerski przywrócony 10.12.2023, przystanki m.in. Dwory
 *   i Włosienica, przejazd ok. 90 min) i 138 do Katowic,
 * — drogi: Katowice 36 km / ok. 39 min, Bielsko-Biała 29 km / ok. 36 min,
 *   Kraków 66–70 km / ok. 1 h 15 min, Chrzanów 19 km (conadrogach.pl),
 * — obwodnica Oświęcimia w ciągu DK44 (4,1 km) i odcinek S1
 *   Oświęcim–Brzeszcze (10 km) udostępnione w sierpniu 2025 r. (GDDKiA),
 * — 13 Kół Gospodyń Wiejskich w gminie wiejskiej Oświęcim; cykliczne
 *   „Kulinarne wariacje” w Stawach Monowskich, Przegląd Zespołów
 *   Regionalnych KGW, Regionalny Konkurs Wieńców Dożynkowych,
 * — Święto Miasta pod koniec sierpnia, Rynek Główny, Life Festival,
 * — zamek: gród na wzgórzu wzmiankowany w 1179 r., prawa miejskie ok.
 *   1272, potwierdzone 3 września 1291 r. przez Mieszka I cieszyńskiego;
 *   od 1 stycznia 2010 r. siedziba Muzeum Zamek w Oświęcimiu,
 * — tradycja hokejowa i łyżwiarska wyrosła z zaplecza socjalnego
 *   Zakładów Chemicznych.
 *
 * CZEGO TU NIE MA I DLACZEGO — ZASADA BEZWZGLĘDNA:
 * — nie ma i nie będzie ani jednego zdania o Muzeum Auschwitz-Birkenau,
 *   o obozie, o Zagładzie ani o ruchu turystycznym z tym związanym —
 *   ani w treści, ani w tytule, ani w opisie, ani w atrybutach alt.
 *   Nie istnieje sposób, w jaki miejsce zagłady miliona ludzi mogłoby
 *   wystąpić obok oferty sprzedaży sprzętu kuchennego,
 * — z tego samego powodu NIE WYMIENIAMY dzielnic Zasole i Monowice
 *   ani sołectwa Brzezinka, mimo że formalnie są częścią miasta i gminy.
 *   Nie wymieniamy też Harmęż, Pław i Rajska. Zamiast list piszemy
 *   „całe miasto” i „cała gmina wiejska”,
 * — nie ma historii Zakładów Chemicznych sprzed 1945 r. i nazwy IG Farben.
 *   Osiedle Chemików opisujemy jako rozbudowane po 1945 r. dla
 *   pracowników ściąganych z całej Polski — i to jest prawda ze źródła,
 * — nie używamy hasła „Miasto Pokoju”, którym posługuje się magistrat.
 *   W kontekście handlowym brzmiałoby jak przywłaszczenie,
 * — nie ma zwrotów „mimo trudnej historii”, „miasto, które się podniosło”
 *   i tym podobnych. Każdy z nich przywołuje to, czego unikamy,
 * — nie ma daty 1217 (nie ma potwierdzenia), liczby „37 tys.” (nieaktualna),
 *   liczby zatrudnionych w Oświęcimiu (publicznie znana jest tylko liczba
 *   dla całej grupy) ani liczby dojeżdżających na Śląsk (brak źródła),
 * — produkty z Listy Produktów Tradycyjnych opisujemy jako powiatowe
 *   (Dolina Karpia, Polanka Wielka, Zator), nigdy jako „oświęcimskie”.
 */
export const OSWIECIM: CityContent = {
  slug: "oswiecim",
  h1: "Thermomix Oświęcim – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Oświęcim — prezentacja i cena",
  seoDescription:
    "Thermomix w Oświęcimiu: bezpłatna prezentacja TM7 u Ciebie w kuchni — całe miasto i gmina. Terminy także po zmianie i w weekend. Tel. 517 185 691.",
  ogTitle: "Thermomix Oświęcim — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Oświęcimiu i okolicznych sołectwach. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Oświęcimia przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do całego miasta i do wszystkich sołectw gminy wiejskiej.",

  highlights: highlightyStandardowe("całe miasto i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Oświęcimiu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu na Chemików, jak w domu na Starych Stawach.",
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
      heading: "Miasto, które chodzi na trzy zmiany i patrzy w stronę Śląska",
      paragraphs: [
        "Oświęcim jest miastem trzydziestopięciotysięcznym, zwartym i gęsto zabudowanym — trzydzieści kilometrów kwadratowych, w większości zajętych. Rozłożył się nad Sołą, wokół wzgórza z zamkiem, o którym pierwsza wzmianka pochodzi z dwunastego wieku, i wokół Rynku, na którym pod koniec sierpnia odbywa się Święto Miasta. To normalny, stary ośrodek z własną historią i własnym rytmem.",
        "Ten rytm wyznaczają dziś przede wszystkim zakłady chemiczne. Produkcja idzie tam w systemie czterobrygadowym, na trzy zmiany: siódma–piętnasta, piętnasta–dwudziesta trzecia, dwudziesta trzecia–siódma. Kto pracuje w takim cyklu, ten wie, że co kilka dni zmienia się nie tylko jego dzień, ale i dzień całej rodziny. Śniadanie o wpół do szóstej, obiad w porze, w której inni jedzą podwieczorek, i kolacja robiona po dwudziestej trzeciej, kiedy reszta domu śpi.",
        "Druga rzecz, którą widać w liczbach: miasto się starzeje i kurczy. Mieszkańców jest o kilkanaście procent mniej niż na początku wieku, a co czwarty ma powyżej sześćdziesięciu pięciu lat. W tym samym czasie sąsiadująca gmina wiejska urosła o prawie jedną piątą — ludzie wyprowadzają się z bloków do domów w Grojcu, Zaborzu czy Porębie Wielkiej i dalej pracują w mieście. To bardzo konkretna zmiana: te same rodziny, inne kuchnie.",
        "Trzecia — kierunek. Do Katowic jest stąd trzydzieści kilka kilometrów i niecałe czterdzieści minut, do Bielska-Białej niecałe trzydzieści. Do Krakowa ponad siedemdziesiąt i godzina z kwadransem. Oświęcim leży w Małopolsce, ale codziennie ciąży ku Śląskowi, i to widać po godzinach, o których ludzie wychodzą z domu.",
        "Od ubiegłego roku doszła jeszcze jedna zmiana, o której mówi tu każdy: obwodnica w ciągu krajowej czterdziestki czwórki i nowy odcinek ekspresówki w stronę Brzeszcz. Przez lata tranzyt szedł środkiem miasta. Teraz nie idzie — i o siedemnastej po prostu się jedzie.",
        "Dla kuchni wnioski są dwa. Pierwszy: obiad w tym mieście rzadko powstaje o jednej porze dla wszystkich. Drugi: nikt nie ma siły stać przy garnku po dwunastu godzinach poza domem. Thermomix nie gotuje za nikogo i nie zastąpi wprawy — zabiera tylko konieczność stania obok i pilnowania. Zupa może się gotować, kiedy Ty rozpakowujesz zakupy albo bierzesz prysznic po zmianie, i sama się wyłączy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Oświęcimiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w której części miasta albo w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać dania i wziąć odpowiednio więcej składników.",
        "Jeśli ktoś w domu pracuje zmianowo, powiedz o tym wprost. Umawiam się w Oświęcimiu na przedpołudnia równie często jak na wieczory i naprawdę nie ma dla mnie znaczenia, czy jest dziesiąta rano, czy dziewiętnasta. Ma znaczenie, żeby nikt nie musiał dla mnie rezygnować ze snu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Oświęcimiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym każdy je o innej porze",
      paragraphs: [
        "W rodzinie pracującej w cyklu czterobrygadowym obiad nigdy nie jest jeden. Jest obiad dla dzieci po szkole, coś dla wracającego o piętnastej dwadzieścia i coś dla tego, kto wchodzi o siódmej rano po nocce. Najczęściej kończy się tym, że jedna osoba odgrzewa to samo cztery razy, a i tak ktoś zjada kanapkę na stojąco.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować wcześniej i po prostu poczekać. Każdy nakłada sobie porcję, kiedy wchodzi. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie — także wtedy, gdy w domu ktoś już śpi.",
        "Dużo osób na osiedlu Chemików mieszka w blokach z niedużymi kuchniami, w których nie ma gdzie postawić trzech garnków obok siebie. To akurat argument raczej za niż przeciw: w jednym naczyniu można ugotować, zmiksować i podgrzać, a na Varomie równocześnie zrobić warzywa na parze. Zlew po takim obiedzie wygląda inaczej niż po klasycznym gotowaniu.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — a w domu, gdzie jedno z rodziców jest akurat na popołudniówce, to bywa realną pomocą, nie ciekawostką.",
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
      heading: "A jeśli gotuję dla jednej albo dwóch osób?",
      paragraphs: [
        "W Oświęcimiu to pytanie pada częściej niż gdzie indziej i ma to swoje uzasadnienie: mediana wieku wynosi tu ponad czterdzieści pięć lat, a co czwarty mieszkaniec przekroczył sześćdziesiątkę piątkę. Bardzo dużo mieszkań to dziś gospodarstwa jedno- lub dwuosobowe — dzieci wyprowadziły się do gminy albo dalej, a w kuchni zostały garnki na sześć osób.",
        "Odpowiadam uczciwie: przy jednej porcji Thermomix nie oszczędza dużo czasu. Zupę na jeden talerz da się ugotować w rondlu równie szybko. Zmienia natomiast dwie inne rzeczy i to one decydują.",
        "Pierwsza to fizyczny wysiłek. Nie trzeba nic siekać, trzeć ani ucierać, nie trzeba przelewać gorących garnków ani unosić ciężkich naczyń. Dla kogoś, komu nie służą już nadgarstki albo kolana, to jest realna różnica, a nie wygoda.",
        "Druga to porcjowanie i mrożenie. Wygodnie ugotować raz większą ilość, rozłożyć na pojemniki i mieć obiady na kilka dni — bo najczęstszym powodem, dla którego ktoś przestaje gotować dla siebie, nie jest brak umiejętności, tylko poczucie, że „nie opłaca się rozkręcać kuchni dla jednej osoby”. Pokazuję to na prezentacji wprost i nie namawiam nikogo, komu to naprawdę nie będzie służyć.",
      ],
      links: [
        {
          href: "/thermomix/wady-i-zalety",
          label: "Wady i zalety Thermomixa — bez lukru",
        },
      ],
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w Oświęcimiu i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — bez wyjątków i bez żadnej dopłaty za odległość. Największym skupiskiem mieszkańców jest osiedle Chemików, gdzie mieszka około piętnastu tysięcy osób; oprócz niego jeżdżę na Stare Miasto, Błonie, Stare Stawy, Nowe Stawy, Pod Borem, Południe i do Dworów, a także na wszystkie pozostałe osiedla.",
    "Osiedle Chemików to zresztą kawałek historii miasta sam w sobie: rozbudowało się po 1945 roku dla pracowników Zakładów Chemicznych, którzy przyjeżdżali tu z całej Polski. Stąd jego zabudowa jest mieszana — niskie, ceglane bloki z lat pięćdziesiątych i wielka płyta z osiemdziesiątych — i stąd ma własne szkoły, przychodnie, dom kultury, basen i lodowisko. Tutejsza tradycja hokejowa i łyżwiarska wyrosła właśnie z tego zaplecza.",
    "Dojeżdżam też do całej gminy wiejskiej Oświęcim, która jest osobną jednostką i w ostatnich dwóch dekadach mocno urosła: do Grojca, Zaborza, Poręby Wielkiej, Włosienicy, Babic, Broszkowic, Łazów, Dworów Drugich, Stawów Monowskich i pozostałych sołectw. Warunki są dokładnie te same co w mieście.",
    "Praktyczna uwaga: w mieście funkcjonują równolegle nazwy oficjalnych rad osiedli i nazwy potoczne, których w dokumentach nie ma. Nie trzeba tego rozstrzygać — przy umawianiu wystarczy ulica albo nazwa, której używacie na co dzień.",
  ],
  districts: [
    "Chemików",
    "Stare Miasto",
    "Błonie",
    "Stare Stawy",
    "Nowe Stawy",
    "Pod Borem",
    "Południe",
    "Dwory",
    "Grojec",
    "Zaborze",
    "Poręba Wielka",
    "Włosienica",
    "Babice",
    "Broszkowice",
    "Łazy",
    "Dwory Drugie",
    "Stawy Monowskie",
  ],

  nearbyHeading: "Cały powiat oświęcimski i zachodnia Małopolska",
  nearbyParagraphs: [
    "Oświęcim jest środkiem mojej zachodniej trasy. Do Chełmka i Libiąża mam stąd kilkanaście minut, do Brzeszcz i Kęt podobnie, do Chrzanowa i Trzebini niecałe pół godziny. Do żadnej z tych gmin nie doliczam dojazdu.",
    "Warto wiedzieć, że najciekawsze kulinarnie rzeczy w tym powiecie dzieją się wokół Doliny Karpia — stawy hodowlane ciągną się od Zatora aż tutaj, a w samej gminie wiejskiej działa trzynaście kół gospodyń, z corocznymi konkursami i przeglądami. Jeśli umawiacie się grupą z koła albo z sąsiadkami, powiedzcie od razu: przy większej liczbie osób gotuję po prostu więcej porcji.",
  ],
  nearbyTowns: [
    "Chełmek",
    "Libiąż",
    "Brzeszcze",
    "Kęty",
    "Zator",
    "Chrzanów",
    "Trzebinia",
    "Alwernia",
    "Kraków",
  ],

  about: blokOMnie("do Oświęcimia", "w powiecie oświęcimskim"),

  faq: [
    {
      question:
        "Czy dojeżdżasz do sołectw gminy wiejskiej, czy tylko do miasta?",
      answer:
        "Do jednego i drugiego, na tych samych warunkach. Gmina wiejska Oświęcim to trzynaście sołectw — Grojec, Zaborze, Poręba Wielka, Włosienica i pozostałe — i dojeżdżam do wszystkich bez dopłaty za odległość.",
    },
    ...faqWspolne("w Oświęcimiu"),
    {
      question:
        "Pracuję na trzy zmiany. Czy da się umówić rano albo w środku dnia?",
      answer:
        "Tak. W cyklu czterobrygadowym i tak nie ma jednej stałej pory, więc pytam wprost, który to tydzień: po nocce najlepiej sprawdza się późne przedpołudnie, po popołudniówce — dzień następny przed czternastą. Wolne soboty też wchodzą w grę.",
    },
    {
      question: "Mieszkam sama. Czy Thermomix ma sens przy jednej osobie?",
      answer:
        "Czasem tak, czasem nie i mówię to wprost. Czasu przy jednej porcji oszczędza niewiele. Zdejmuje natomiast wysiłek fizyczny — siekanie, tarcie, przelewanie gorących garnków — i bardzo ułatwia ugotowanie raz na kilka dni z porcjowaniem. Na prezentacji pokazuję to na konkretnym obiedzie, a nie na deklaracjach.",
    },
    {
      question: "Czy mogę zaprosić koleżanki albo panie z koła gospodyń?",
      answer:
        "Jak najbardziej i w tej okolicy zdarza się to często. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników — przy grupie potrzebuję też trochę więcej miejsca na blacie.",
    },
  ],

  geo: { lat: 50.0344, lng: 19.2098 },
};
