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
 * TUCHÓW — GMINA MIEJSKO-WIEJSKA w powiecie tarnowskim.
 * Miasto: 6 149 mieszkańców (GUS 2024), 18,1 km², średni wiek 42,7,
 * 65+ = 23,5% — bardzo stara struktura wieku.
 * Gmina: 17 916 mieszkańców, 100 km² — ⚠️ TO DANE GUS ZA 2019 R.
 * 13 SOŁECTW + 4 OSIEDLA MIASTA.
 *
 * OŚ STRONY: MIASTO, DO KTÓREGO SIĘ PRZYJEŻDŻA. Rytm roku wyznaczają dwa
 * masowe zjazdy gości: DZIEWIĘCIODNIOWY WIELKI ODPUST TUCHOWSKI na początku
 * lipca w bazylice mniejszej oraz MIĘDZYNARODOWY FESTIWAL WINA TUCHOVINIFEST
 * na początku sierpnia. To odwrotność „gminy sypialni” (Wojnicz) i „gminy,
 * która codziennie wyjeżdża” (Dębno) — tu ludzie przyjeżdżają.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — SANKTUARIUM: bazylika Nawiedzenia NMP, opieka redemptorystów.
 *   KORONACJA OBRAZU MATKI BOŻEJ TUCHOWSKIEJ: 2 PAŹDZIERNIKA 1904
 *   (koronacja papieska). TYTUŁ BAZYLIKI MNIEJSZEJ: 2 PAŹDZIERNIKA 2010,
 *   nadany przez Benedykta XVI — dokładnie w 106. rocznicę koronacji.
 *   Bazylika afiliowana do Santa Maria Maggiore w Rzymie.
 *   WIELKI ODPUST TUCHOWSKI TRWA DZIEWIĘĆ DNI, na początku lipca
 *   (redemptor.pl, sanktuariumtuchow.pl),
 * — TUCHOVINIFEST: Międzynarodowy Festiwal Wina, JUBILEUSZOWA 10. EDYCJA
 *   1–2 SIERPNIA 2026; organizator Urząd Miejski w Tuchowie; program
 *   obejmuje strefę Food & Wine i prezentacje potraw regionalnych
 *   (tuchow.pl, visitmalopolska.pl),
 * — HISTORIA (tuchow.pl, „Zarys historii”): 1125 pierwsza wzmianka o „Tucov”
 *   w przywileju Idziego; koniec XI w. benedyktyni z Tyńca otrzymują dobra;
 *   2 LISTOPADA 1340 LOKACJA MIEJSKA na prawie niemieckim; XV–XVI w.
 *   rozkwit rzemiosła; XVII w. upadek po potopie; 1782 kasata benedyktynów
 *   przez Józefa II; 1789 pożar niszczy 24 domy i kościół św. Jakuba;
 *   1883 straż pożarna; 22–25 GRUDNIA 1914 BITWA POD ŁOWCZÓWKIEM
 *   (Łowczów to sołectwo tej gminy); okupacja — getto, deportacja do Bełżca,
 * — SOŁECTWA (13): Buchcice, Burzyn, Dąbrówka Tuchowska, Jodłówka Tuchowska,
 *   Karwodrza, Lubaszowa, Piotrkowice, Siedliska, Trzemesna, Zabłędza,
 *   Meszna Opacka, Łowczów, Kozłówek. OSIEDLA MIASTA (4): Tuchów-Garbek,
 *   Tuchów-Lewobrzeżny, Tuchów-Prawobrzeżny, KIELANOWICE,
 * — PRACODAWCA: WIMED — producent znaków drogowych i urządzeń
 *   bezpieczeństwa ruchu, założony 28 marca 1988, ul. Tarnowska 48,
 *   PONAD 200 PRACOWNIKÓW, hale powyżej 5 000 m² (wimed.pl).
 *   Tuchowska Strefa Aktywności Gospodarczej,
 * — KOLEJ: stacja Tuchów na linii nr 96 Tarnów–Leluchów, km 20,873
 *   (bazakolejowa.pl),
 * — WSPÓŁRZĘDNE (UM, Rynek 1): 49,8951974 / 21,0534610.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WÓD MINERALNYCH W TUCHOWIE. NIE POTWIERDZONO żadnego złoża, odwiertu
 *   ani statusu wód leczniczych. Potwierdzone jest tylko, że 13 źródeł
 *   mineralnych występuje w Ciężkowicko-Rożnowskim Parku Krajobrazowym —
 *   to inny obszar. NIE PISAĆ O WODACH W TUCHOWIE,
 * — BROWARU I MLECZARNI. Dwa wyszukiwania nie dały żadnego śladu, ani
 *   historycznie, ani współcześnie. Prawdopodobnie mylna teza,
 * — „TUKA TUCHOWSKIEGO” JAKO PRODUKTU TRADYCYJNEGO. To wypiek stworzony
 *   przez jedną piekarnię na 680-lecie miasta (ok. 2020), promowany jako
 *   „produkt lokalny”. TO NIE JEST wpis na ministerialną Listę Produktów
 *   Tradycyjnych. Nie mieszać tych dwóch rzeczy,
 * — LICZBY PIELGRZYMÓW NA ODPUŚCIE. Nie znaleziono w żadnym wiarygodnym
 *   źródle. NIE SZACOWAĆ,
 * — „PRAWA MIEJSKIE NIEPRZERWANIE OD 1340”. Nie potwierdzono, że gminę
 *   ominęła reforma z 1934 r. Użyta sama data lokacji,
 * — NUMERU DROGI przez Tuchów. Niezweryfikowany,
 * — DANYCH GMINY JAKO AKTUALNYCH. 17 916 mieszkańców i 100 km² to GUS
 *   za 2019 r. Oznaczone w treści jako „około osiemnastu tysięcy”,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje dla tej gminy
 *   6 688,26 zł — TĘ SAMĄ KWOTĘ CO DLA WSZYSTKICH GMIN POWIATU
 *   TARNOWSKIEGO, co do grosza. To dane POWIATOWE. Tak samo rolnictwo
 *   31,1%, przemysł 25,2%, usługi 19,6%. NIE UŻYWAĆ jako gminnych.
 *
 * PUŁAPKI:
 * — KIELANOWICE TO OSIEDLE MIASTA, NIE SOŁECTWO. Łatwo o błąd,
 * — PIERWSZA WZMIANKA: polskawliczbach podaje 1105, oficjalny serwis
 *   gminy 1125. Użyta data gminy,
 * — ŁOWCZÓW (sołectwo gminy Tuchów) to nie to samo co ŁOWCZÓWEK
 *   (sołectwo gminy Pleśna, gdzie leży cmentarz legionistów). Bitwa
 *   z 1914 r. nosi nazwę „pod Łowczówkiem”,
 * — SOŁECTWA pochodzą z ogłoszenia wyników wyborów sołtysów na kadencję
 *   2024–2029, nie ze statutu (BIP blokuje roboty).
 */

export const TUCHOW: CityContent = {
  slug: "tuchow",
  h1: "Thermomix Tuchów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Tuchów — prezentacja i cena",
  seoDescription:
    "Thermomix w Tuchowie i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Tuchów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Tuchowie i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Tuchowa, Siedlisk, Burzyna, Jodłówki Tuchowskiej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tuchowie – jak wygląda prezentacja?",
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
      heading: "Miasto, do którego się przyjeżdża",
      paragraphs: [
        "Większość gmin w tej części Małopolski opisuje się przez wyjazdy: ile osób dojeżdża do Tarnowa, jak daleko do Krakowa, o której trzeba wstać. W Tuchowie ciekawsze jest to, co dzieje się w drugą stronę — bo dwa razy w roku miasto zapełnia się ludźmi z zewnątrz.",
        "Pierwszy raz na początku lipca. Wielki Odpust Tuchowski trwa dziewięć dni i odbywa się w bazylice Nawiedzenia Najświętszej Marii Panny, którą od pokoleń prowadzą redemptoryści. Obraz Matki Bożej Tuchowskiej koronowano drugiego października tysiąc dziewięćset czwartego roku, a dokładnie sto sześć lat później, tego samego dnia, papież Benedykt Szesnasty nadał świątyni tytuł bazyliki mniejszej. Bazylika jest afiliowana do rzymskiej Santa Maria Maggiore.",
        "Drugi raz na początku sierpnia — i to już zupełnie inna publiczność. Międzynarodowy Festiwal Wina Tuchovinifest ma w dwa tysiące dwudziestym szóstym roku jubileuszową dziesiątą edycję, pierwszego i drugiego sierpnia. Obok prezentacji polskich winnic i win z całego świata działa tam strefa Food and Wine z pokazami potraw regionalnych.",
        "To dość niezwykłe połączenie jak na miasteczko liczące nieco ponad sześć tysięcy mieszkańców: dziewięciodniowy odpust i festiwal wina, w odstępie miesiąca. Jedno i drugie oznacza to samo dla domów w okolicy — trzeba ugotować dla większej liczby osób, niż zwykle siada do stołu.",
        "Sama historia miasta jest zresztą znacznie starsza od obu tych tradycji. Pierwsza wzmianka o Tuchowie pochodzi z tysiąc sto dwudziestego piątego roku, a lokacja miejska na prawie niemieckim odbyła się drugiego listopada tysiąc trzysta czterdziestego. Wcześniej dobra należały do benedyktynów z Tyńca; zakon skasował dopiero Józef Drugi w tysiąc siedemset osiemdziesiątym drugim.",
        "Nad miastem wisi też cień pierwszej wojny. W Boże Narodzenie tysiąc dziewięćset czternastego roku, między dwudziestym drugim a dwudziestym piątym grudnia, toczyła się nieopodal bitwa pod Łowczówkiem — Łowczów jest jednym z sołectw tej gminy.",
        "A poza sanktuarium i winem Tuchów ma jeszcze jedną rzecz, o której się rzadziej mówi: firmę Wimed, produkującą od tysiąc dziewięćset osiemdziesiątego ósmego roku znaki drogowe i urządzenia bezpieczeństwa ruchu, zatrudniającą ponad dwieście osób. Znaki na drogach w połowie Polski wyjechały stąd.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Tuchów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość. Gmina ma trzynaście sołectw i cztery osiedla w samym mieście, a rozciąga się na stu kilometrach kwadratowych — z Jodłówki Tuchowskiej do Kielanowic jedzie się zauważalnie dłużej niż przez rynek.",
        "Jeśli macie w domu gości albo przygotowujecie się do odpustu czy festiwalu, powiedzcie od razu. Wtedy najczęściej ma sens rozmowa o gotowaniu w większych ilościach, a nie o obiedzie na cztery osoby — i pokazuję inne rzeczy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tuchowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gotować dla ludzi, którzy przyjechali",
      paragraphs: [
        "W mieście, do którego dwa razy w roku zjeżdżają tłumy, umiejętność ugotowania dla dwudziestu osób nie jest talentem wyjątkowym, tylko normalną kompetencją domową. Rodzina z drugiego końca Polski na odpust, znajomi na festiwal, sąsiedzi po mszy — stół rozkłada się tu częściej niż gdzie indziej.",
        "Przy takim gotowaniu problemem nie jest przepis, tylko harmonogram. Wszystko musi być gotowe mniej więcej na tę samą godzinę, a kuchnia jest jedna i palników cztery.",
        "Tu najbardziej pomaga rzecz banalna: urządzenie gotuje bez nadzoru i samo się wyłącza. Można nastawić zupę albo drugie danie i w tym czasie zająć się czymś, co naprawdę wymaga rąk — pierogami, sałatką, nakrywaniem.",
        "Druga rzecz to robienie z wyprzedzeniem. Sosy, pasty, ciasto na drożdżówkę czy zupa krem powstają dzień wcześniej i tylko czekają na odgrzanie. Przy dwudziestu osobach to różnica między spokojnym przedpołudniem a bieganiem od garnka do garnka.",
        "Trzecia dotyczy ilości. W przepisach z internetu wszystko jest na cztery porcje i przeliczanie na dwadzieścia bywa źródłem pomyłek. Wbudowana waga i odmierzanie prosto do naczynia usuwają połowę tych błędów — nie trzeba brudzić trzech misek, żeby sprawdzić, ile już poszło.",
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
    heading: "Tuchów i gotowanie — odpust, wino i stół dla przyjezdnych",
    paragraphs: [
      "Zacznę od sprostowania, bo w internecie krąży inaczej: nie potwierdziłam żadnego wpisu z gminy Tuchów na ministerialnej Liście Produktów Tradycyjnych. Tuk tuchowski, o którym można przeczytać, to wypiek stworzony przez miejscową piekarnię na sześćsetlecie osiemdziesiąte miasta i promowany jako produkt lokalny — to co innego niż wpis do rejestru i nie będę tego mieszać.",
      "Za to dwa wydarzenia, które organizują tu rok kulinarny, są jak najbardziej prawdziwe. Wielki Odpust Tuchowski trwa dziewięć dni na początku lipca i ściąga do bazyliki pielgrzymów, których trzeba przyjąć i nakarmić. A na początku sierpnia odbywa się Międzynarodowy Festiwal Wina Tuchovinifest — w dwa tysiące dwudziestym szóstym roku po raz dziesiąty — ze strefą Food and Wine i prezentacjami potraw regionalnych.",
      "Sanktuarium i winnica w jednym mieście to zestawienie, jakiego nie ma nigdzie indziej w tej części Małopolski. I wcale nie jest tak sprzeczne, jak brzmi: jedno i drugie zakłada, że przy stole siedzi więcej osób, niż mieszka w domu.",
      "Poza tym gotuje się tu jak w całym powiecie tarnowskim: rosół, ziemniaki, kapusta, zupy na kościach, ciasto drożdżowe na niedzielę, przetwory z ogrodu.",
      "Dla urządzenia najsensowniejsze są tu duże porcje robione bez stania przy garnku, sosy i pasty przygotowane dzień wcześniej oraz ciasto wyrabiane w kilka minut zamiast kwadransa ręcznie. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Tuchów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu i do samego miasta, bez żadnej dopłaty za odległość. Gmina liczy około osiemnastu tysięcy mieszkańców na stu kilometrach kwadratowych, z czego w mieście mieszka nieco ponad sześć tysięcy.",
    "Sołectwa to: Buchcice, Burzyn, Dąbrówka Tuchowska, Jodłówka Tuchowska, Karwodrza, Lubaszowa, Piotrkowice, Siedliska, Trzemesna, Zabłędza, Meszna Opacka, Łowczów i Kozłówek. Samo miasto dzieli się na cztery osiedla: Garbek, Lewobrzeżny, Prawobrzeżny i Kielanowice.",
    "Warto wiedzieć, że Kielanowice są osiedlem miasta, a nie osobnym sołectwem — to rozróżnienie myli nawet niektóre opracowania.",
    "W mieście, na wzgórzu nad rzeką Białą, stoi bazylika Nawiedzenia Najświętszej Marii Panny prowadzona przez redemptorystów. Obraz Matki Bożej Tuchowskiej koronowano w tysiąc dziewięćset czwartym roku, a tytuł bazyliki mniejszej świątynia otrzymała w dwa tysiące dziesiątym.",
    "Dojazd: przez gminę przechodzi linia kolejowa numer dziewięćdziesiąt sześć z Tarnowa do Leluchowa, ze stacją w samym Tuchowie. To akurat w tej części powiatu rzadkość.",
  ],
  districts: [
    "Tuchów",
    "Siedliska",
    "Burzyn",
    "Jodłówka Tuchowska",
    "Piotrkowice",
    "Lubaszowa",
    "Karwodrza",
    "Buchcice",
    "Trzemesna",
    "Zabłędza",
    "Dąbrówka Tuchowska",
    "Łowczów",
    "Meszna Opacka",
    "Kozłówek",
  ],

  nearbyHeading: "Gromnik, Ryglice i Pleśna też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Gromnikiem, Ryglicami, Pleśną, Szerzynami, Rzepiennikiem Strzyżewskim i Ciężkowicami. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu; blisko jest też do Tarnowa.",
    "Jedno rozróżnienie dla porządku: Łowczów to sołectwo gminy Tuchów, a Łowczówek z cmentarzem legionistów leży w sąsiedniej gminie Pleśna. Bitwa z grudnia tysiąc dziewięćset czternastego roku nosi nazwę od tej drugiej miejscowości.",
  ],
  nearbyTowns: [
    "Gromnik",
    "Ryglice",
    "Pleśna",
    "Szerzyny",
    "Rzepiennik Strzyżewski",
    "Ciężkowice",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Tuchów", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Siedliskach albo w Jodłówce Tuchowskiej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie trzynaście sołectw traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w Tuchowie"),
    {
      question: "Czy Thermomix pomaga, kiedy gotuje się dla dwudziestu osób?",
      answer:
        "Tak i to jest jedno z tych zastosowań, o których rzadko się mówi w folderach. Naczynie ma ograniczoną pojemność, więc dużej zupy nie ugotujecie w nim za jednym razem — ale to nie tam jest zysk. Zysk polega na tym, że urządzenie pracuje bez nadzoru i samo się wyłącza, więc przy jednej kuchni i czterech palnikach zwalnia Wam ręce i uwagę na rzeczy, które trzeba zrobić osobiście. Do tego sosy, pasty i ciasta da się przygotować dzień wcześniej. Przy odpuście albo festiwalu to realna różnica w harmonogramie, a nie ciekawostka.",
    },
  ],

  geo: { lat: 49.8951974, lng: 21.053461 },
};
