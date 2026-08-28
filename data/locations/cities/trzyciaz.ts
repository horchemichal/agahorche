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
 * TRZYCIĄŻ — gmina wiejska, 6 876 mieszkańców (GUS BDL, 31.12.2025).
 * Szósta i ostatnia gmina powiatu olkuskiego.
 *
 * OŚ STRONY: Święto Ziemniaka — osiemnaście edycji, konkurs
 * na ziemniaka rekordzistę, stoiska kół gospodyń, degustacje.
 * To najbogatszy materiał kulinarny w całym powiecie olkuskim
 * i jedyna gmina, w której lokalne święto dotyczy wprost jedzenia.
 *
 * DEMOGRAFIA — ODWROTNIE NIŻ W BUKOWNIE I BOLESŁAWIU:
 * średnia wieku 41,8 lat, NAJMŁODSZA gmina powiatu (Bolesław 45,2,
 * Bukowno 46,2). Średnia powierzchnia mieszkania 99,1 m² — największa
 * w powiecie, czyli duże domy jednorodzinne. Spadek ludności
 * 2002–2024 tylko −3,6%, obok Klucz najłagodniejszy.
 * DLATEGO ta strona celuje w rodziny wielopokoleniowe gotujące
 * dla kilku osób, a nie w gospodarstwa jednoosobowe.
 *
 * UWAGA O OGRODZIE: w Olkuszu, Bukownie, Bolesławiu i Kluczach
 * obowiązuje zakaz motywu „warzywa z własnego ogródka” ze względu
 * na skażenie gleb metalami ciężkimi. TRZYCIĄŻ LEŻY PO DRUGIEJ
 * STRONIE POWIATU, na wschodzie, i NIE JEST wymieniany wśród gmin
 * dotkniętych skażeniem ani zanikiem rzek. Gmina sama organizuje
 * konkurs „Najładniejszy ogród letni” i święto ziemniaka.
 * Dlatego tutaj — i tylko tutaj w tym powiecie — mogę pisać
 * o własnych ziemniakach i o ogrodzie. Robię to ostrożnie:
 * w kontekście lokalnej dumy i konkursu, nie w kontekście zdrowotnym.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 13 wsi: Glanów, Imbramowice, Jangrot, Małyszyce, Michałówka,
 *   Milonki, Podchybie, Porąbka, Ściborzyce, Sucha, Trzyciąż,
 *   Zadroże, Zagórowa,
 * — położenie: ok. 15 km na wschód od Olkusza, ok. 35 km drogą
 *   do Krakowa; powierzchnia blisko 100 km² (podawana jako 95,7
 *   albo 96,56 — nie podaję jednej liczby); graniczy z gminami
 *   Gołcza, Olkusz, Skała, Sułoszowa i Wolbrom,
 * — główna droga: DW794 Kraków – Skała – Zadroże – Trzyciąż – Chełm –
 *   Wolbrom. Brak drogi krajowej,
 * — ŚWIĘTO ZIEMNIAKA W GMINIE TRZYCIĄŻ: XVIII edycja 5 października
 *   2025 (XVII — 6 października 2024). Elementy potwierdzone: konkurs
 *   „Ziemniak rekordzista” (w 2025 wygrał okaz 2 874 g — Sebastian
 *   Dobiega), konkurs „Najładniejszy ogród letni” w dwóch kategoriach,
 *   pieczone ziemniaki w ognisku, stoiska degustacyjne prowadzone
 *   przez koła gospodyń z gminy i z obszaru LGD, odznaczenia
 *   „Zasłużony dla Rolnictwa” (w 2025 dziewięcioro rolników),
 *   wypuszczenie gołębi pocztowych, odsłonięcie odrestaurowanej
 *   zabytkowej sikawki strażackiej, zawody wędkarskie,
 * — Nadprzemszański Festiwal Smaku i konkurs „Kryształowy Amonit”
 *   LGD „Nad Białą Przemszą” — finał przy Święcie Ziemniaka;
 *   zgłoszenie z 2024: kopytka z wołowiną w leśnym sosie od KGW
 *   z Suchej (koło nazywa się „Biała Przemsza”),
 * — KLASZTOR NORBERTANEK W IMBRAMOWICACH: fundacja ok. 1222 r. przez
 *   rycerza Imbrama, rozbudowa przez biskupa Iwona Odrowąża; obecny
 *   zespół barokowy; sanktuarium na Szlaku Orlich Gniazd. W 1975 r.
 *   odkryto tam obraz olejny „Madonna w girlandzie” z początku XVII w.,
 *   przypisywany Janowi Brueghelowi starszemu,
 * — Trzyciąż: pierwsze wzmianki XII–XIII w. jako osada leśna;
 *   w latach 20. XIII w. nadany norbertankom z Imbramowic;
 *   1275 przywilej lokacyjny na prawie niemieckim,
 * — krajobraz: Wyżyna Krakowsko-Częstochowska; część Dłubniańskiego
 *   Parku Krajobrazowego; źródła Dłubni; pulsujące źródło Jordan
 *   w Ściborzycach; rezerwaty Michałowiec (rzadkie storczyki)
 *   i Jodły Ostrysz (ciepłolubna buczyna),
 * — największy pracodawca: Zakłady Kablowe BITNER Sp. z o.o.,
 *   ul. Krakowska 2, Trzyciąż — polski producent kabli i przewodów,
 *   ponad 30 lat na rynku. Liczby zatrudnienia i systemu zmianowego
 *   NIE POTWIERDZONE, więc w tekście ich nie ma,
 * — 642 podmioty w REGON.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOCHODY SAMORZĄDU. W rankingu za 2017 r. Trzyciąż miał najniższe
 *   dochody podatkowe na mieszkańca w powiecie — 1 755. miejsce
 *   w Polsce, przy 2. miejscu w Małopolsce dla Bolesławia. Nie
 *   porównuję gmin między sobą pod względem zamożności, w żadną stronę,
 * — BRAK KOLEI I SŁABSZA KOMUNIKACJA PUBLICZNA jako wada. Piszę
 *   pozytywnie: „trzydzieści kilka kilometrów do Krakowa drogą 794”,
 * — OGRZEWANIE. Tylko 67,8% mieszkań z centralnym ogrzewaniem,
 *   co prowadzi wprost do tematu pieców i smogu. Nie dotykam
 *   ogrzewania w ogóle, w żadnym kontekście,
 * — ZNISZCZENIA WOJENNE: najazd 1703 (spalone chałupy, ograbieni
 *   mieszkańcy), przemarsze wojsk pruskich i rosyjskich,
 * — POWSTANIE STYCZNIOWE I GROBY POWSTAŃCZE na cmentarzu
 *   w Imbramowicach — dopuszczalna byłaby neutralna nota o zabytku,
 *   ale nie rozwijam wątku martyrologicznego,
 * — KLASZTOR w sposób, który mógłby zabrzmieć jak wykorzystanie sacrum
 *   do sprzedaży. Wystarcza sama wzmianka, że stoi tu od ośmiuset lat.
 *
 * PUŁAPKA:
 * — TRZYCIĄŻ TO GMINA WIEJSKA BEZ ŻADNEGO MIASTA. Siedziba to wieś
 *   Trzyciąż, nazwa gminy brzmi tak samo,
 * — NIE MA KOLEI. Zero. Najbliższa stacja to Wolbrom. To jedyna gmina
 *   powiatu całkowicie bez kolei,
 * — DW794 przechodzi przez Zadroże i Trzyciąż — to jest droga
 *   do Krakowa. NIE DW773 i NIE DK94,
 * — IMBRAMOWICE W GMINIE TRZYCIĄŻ to nie Imbramowice na Dolnym Śląsku
 *   (gmina Żarów). Wyszukiwarki mieszają te dwie miejscowości;
 *   dolnośląskie mają własne dożynki, niemające nic wspólnego
 *   z powiatem olkuskim,
 * — SUCHA w gminie Trzyciąż to nie Sucha Beskidzka. Tamtejsze koło
 *   gospodyń nazywa się „Biała Przemsza”,
 * — DŁUBNIAŃSKI PARK KRAJOBRAZOWY — gmina obejmuje tylko jego część.
 *   Park Krajobrazowy Orlich Gniazd jest w Kluczach, nie w Trzyciążu,
 * — wsi jest 13.
 */

export const TRZYCIAZ: CityContent = {
  slug: "trzyciaz",
  h1: "Thermomix Trzyciąż – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Trzyciąż — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Trzyciąż: bezpłatna prezentacja TM7 u Ciebie w kuchni — wszystkie 13 wsi. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Trzyciąż — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Trzyciąż. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Trzyciąż przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich trzynastu wsi, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 13 wsi, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Trzyciąż – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Trzyciążu, jak w Jangrocie, Imbramowicach czy Zagórowej.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz pod ręką. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Jedyna gmina powiatu, która patrzy na Kraków",
      paragraphs: [
        "Cały powiat olkuski ciąży ku Śląskowi — Olkusz leży w połowie drogi między Krakowem a Katowicami, Bukowno i Bolesław jeszcze bliżej Dąbrowy Górniczej. Trzyciąż jest wyjątkiem. Leży na wschodnim krańcu powiatu, a drogą wojewódzką przez Zadroże i Skałę do Krakowa jest stąd trzydzieści kilka kilometrów. Do Olkusza dalej niż do wielu dzielnic Krakowa.",
        "To gmina rolnicza i najmłodsza wiekiem w całym powiecie. Domy są tu duże — średnia powierzchnia mieszkania jest największa w okolicy — a mieszka się w nich często wielopokoleniowo. Kuchnia w takim domu pracuje inaczej niż w mieszkaniu: gotuje się dla kilku osób naraz i codziennie, a nie od święta.",
        "Praca rozkłada się na trzy strony. Rolnictwo, zakład produkujący kable i przewody z siedzibą w samym Trzyciążu, oraz dojazdy — najczęściej do Krakowa, rzadziej do Olkusza i Wolbromia. Kolei w gminie nie ma wcale, więc jeździ się samochodem albo autobusem.",
        "Dzień w takim układzie zaczyna się wcześnie i kończy późno. Kto dojeżdża do Krakowa, wyjeżdża przed siódmą i wraca po siedemnastej; kto pracuje w gospodarstwie, ma najwięcej roboty dokładnie wtedy, kiedy trzeba by gotować obiad. Jedno i drugie prowadzi do tego samego: posiłek trzeba przygotować w czasie, którego nie ma.",
        "I to jest cała rzecz, którą pokazuję na prezentacji. Nie to, że urządzenie ugotuje coś wymyślnego, tylko że zupa może się gotować sama, kiedy Ty jesteś w polu albo jeszcze w drodze, i sama się wyłączy. Że da się nastawić obiad rano i zastać go gotowego.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. W gminie, która od osiemnastu lat organizuje własne święto kulinarne, tej wprawy akurat nie brakuje. Zabiera stanie obok garnka i te czynności, przez które gotowanie na zapas odkłada się na później.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Trzyciąż?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której wsi mieszkasz. Gmina zajmuje blisko sto kilometrów kwadratowych i rozciąga się od Zadroża przy drodze na Kraków po Jangrot i Zagórową — to zupełnie różne kierunki dojazdu, więc od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Jeśli w gospodarstwie są godziny, o których na pewno nie da się usiąść, po prostu powiedz. Łatwiej mi ustawić spotkanie wokół Waszego dnia niż odwrotnie. Weekendy są tu równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Trzyciąż"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, w którym gotuje się codziennie dla kilku osób",
      paragraphs: [
        "W gminie, gdzie domy są duże i często mieszka w nich więcej niż jedno pokolenie, obiad to nie jest jeden talerz. To garnek na pięć, sześć albo osiem osób, codziennie, plus coś dla tych, którzy wrócą później. Przy takiej skali różnicę robią rzeczy, które w mniejszym domu są drobiazgiem.",
        "Najbardziej odczuwalne jest to, że garnek nie wymaga pilnowania. Zupa albo danie jednogarnkowe gotuje się, kiedy Ty jesteś przy zwierzętach, w ogrodzie albo z dziećmi, i sama się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać, żeby nie przywarło.",
        "Druga rzecz to przetwory i zapasy. W gospodarstwie robi się je i tak, tylko zwykle kosztem całego dnia. Rozdrabnianie, ucieranie, gotowanie w kilku turach — to wszystko da się zrobić partiami w jednym naczyniu, a to zmienia weekend z wyczerpującego w normalny.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w domu, gdzie jest miejsce i gdzie ktoś dorosły zwykle jest w pobliżu, popołudnie realnie na to pozwala.",
        "Babciom i dziadkom, jeśli mieszkają razem, najbardziej podoba się zwykle to, że nie trzeba dźwigać ciężkich garnków ani stać przy kuchni. To rzadko pada jako argument przy zakupie, a bardzo często jako pierwsza rzecz, którą chwalą po pół roku.",
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
    heading: "Trzyciąż i gotowanie — osiemnaście lat Święta Ziemniaka",
    paragraphs: [
      "Gmina Trzyciąż organizuje własne Święto Ziemniaka od osiemnastu lat i jest to najpoważniejsze wydarzenie kulinarne w całym powiecie olkuskim. Odbywa się na początku października, po wykopkach, i ściąga gości także z sąsiednich powiatów.",
      "Program mówi o gminie więcej niż jakikolwiek opis. Jest konkurs na ziemniaka rekordzistę — w dwa tysiące dwudziestym piątym roku wygrał okaz ważący prawie trzy kilogramy. Jest konkurs na najładniejszy ogród, osobno przy gospodarstwie i przy domu. Są pieczone ziemniaki z ogniska, stoiska degustacyjne kół gospodyń, odznaczenia „Zasłużony dla Rolnictwa” i zawody wędkarskie.",
      "Przy tej samej okazji rozstrzyga się konkurs kulinarny lokalnej grupy działania. Koło gospodyń z Suchej — noszące nazwę „Biała Przemsza” — zgłosiło do niego kopytka z wołowiną w leśnym sosie. To jest dokładnie ten rodzaj potrawy, przy którym urządzenie pomaga w części żmudnej, a całą resztę zostawia osobie, która gotuje.",
      "Bo tak to wygląda w praktyce. Ciasto na kopytka trzeba wyrobić — i to akurat da się zrobić w kilka minut, bez wysiłku w rękach. Ale ile mąki dosypać, żeby były miękkie, a nie gumowe, to wiedza, której żadne urządzenie nie zastąpi i nie ma takiego zamiaru.",
      "Jedno zastrzeżenie, bo lubię, gdy rzeczy są nazwane dokładnie: żadna gmina powiatu olkuskiego, łącznie z Trzyciążem, nie ma wpisu na ministerialnej Liście Produktów Tradycyjnych. Święto Ziemniaka i konkursy to żywa lokalna tradycja, ale nie rejestr — i nie zamierzam tych dwóch rzeczy mylić.",
    ],
  },

  districtsHeading: "Gdzie w gminie Trzyciąż dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu wsi i bez żadnej dopłaty za odległość: Glanów, Imbramowice, Jangrot, Małyszyce, Michałówka, Milonki, Podchybie, Porąbka, Ściborzyce, Sucha, Trzyciąż, Zadroże i Zagórowa.",
    "W Imbramowicach stoi klasztor sióstr norbertanek, ufundowany około tysiąc dwieście dwudziestego drugiego roku — osiemset lat w jednym miejscu. To także sanktuarium na Szlaku Orlich Gniazd. Warto wiedzieć, że to nie te Imbramowice, które wyskakują w wyszukiwarce: dolnośląskie mają tę samą nazwę i zupełnie nic wspólnego z powiatem olkuskim.",
    "Gmina leży na Wyżynie Krakowsko-Częstochowskiej i obejmuje część Dłubniańskiego Parku Krajobrazowego. Tu biją źródła Dłubni, a w Ściborzycach jest pulsujące źródło Jordan — rzadkość w tej części Polski. Są też dwa rezerwaty: jeden ze storczykami, drugi z ciepłolubną buczyną.",
    "Dojazd: przez gminę biegnie droga wojewódzka z Krakowa przez Skałę i Zadroże do Wolbromia. Do Krakowa jest stąd trzydzieści kilka kilometrów, do Olkusza piętnaście. Kolei w gminie nie ma — najbliższa stacja to Wolbrom — więc przy umawianiu warto powiedzieć, którędy najwygodniej trafić pod dom.",
  ],
  districts: [
    "Trzyciąż",
    "Jangrot",
    "Imbramowice",
    "Zadroże",
    "Glanów",
    "Sucha",
    "Zagórowa",
    "Ściborzyce",
    "Michałówka",
    "Małyszyce",
    "Milonki",
    "Podchybie",
    "Porąbka",
  ],

  nearbyHeading: "Wolbrom, Olkusz i Skała też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Trzyciąż graniczy z Gołczą, Olkuszem, Skałą, Sułoszową i Wolbromiem, więc trasy układam stąd we wszystkie strony. Do Wolbromia i Olkusza jadę regularnie, do żadnej z tych gmin nie doliczając kosztu dojazdu.",
    "Na południe droga prowadzi przez Skałę wprost do Krakowa, a po drodze mijam gminy, w których pracuję od dawna — Zielonki i Michałowice. Jeśli mieszkasz przy granicy gminy i nie masz pewności, po której stronie jesteś, po prostu zapytaj: wszędzie tam jeżdżę tak samo.",
  ],
  nearbyTowns: [
    "Wolbrom",
    "Olkusz",
    "Klucze",
    "Zielonki",
    "Michałowice",
    "Kraków",
  ],

  about: blokOMnie("do gminy Trzyciąż", "w powiecie olkuskim"),

  faq: [
    {
      question: "Gotuję codziennie dla sześciu osób. Czy to urządzenie na taką kuchnię?",
      answer:
        "Tak i przy takiej skali różnica jest największa. Garnek nie wymaga pilnowania — zupa gotuje się, kiedy Ty jesteś przy zwierzętach albo w ogrodzie, i sama się wyłącza. Do tego przetwory i zapasy da się robić partiami w jednym naczyniu, zamiast poświęcać na to cały dzień. Na prezentacji pokazuję to na realnej ilości, nie na porcji pokazowej.",
    },
    ...faqWspolne("w gminie Trzyciąż"),
    {
      question: "Mieszkam w Imbramowicach. To te koło klasztoru?",
      answer:
        "Tak, te w gminie Trzyciąż, z klasztorem norbertanek stojącym tu od ośmiuset lat. Dopytuję, bo w Polsce są jeszcze jedne Imbramowice, na Dolnym Śląsku, i wyszukiwarki notorycznie je mieszają. Dojeżdżam oczywiście bez dopłaty za odległość.",
    },
    {
      question: "Czy mogę zaprosić panie z koła gospodyń?",
      answer:
        "Jak najbardziej i w tej gminie to bardzo wygodna forma — koła są tu aktywne, prowadzą stoiska na Święcie Ziemniaka i startują w konkursach kulinarnych. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
    {
      question: "Dojeżdżam do Krakowa i wracam po siedemnastej. Zdążymy?",
      answer:
        "Spokojnie — prezentacja trwa około dwóch godzin, a wieczorne spotkania są tu codziennością, bo sporo osób jeździ tą samą drogą do Krakowa. Powiedz, o której realnie jesteś w domu, a ja ułożę resztę dnia wokół tego.",
    },
  ],

  geo: { lat: 50.3167, lng: 19.7333 },
};
