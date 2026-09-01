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
 * MIECHÓW — gmina miejsko-wiejska, stolica powiatu miechowskiego.
 * Miasto ok. 10,9 tys., cała gmina ok. 18,6 tys. na 148,3 km²,
 * 34 sołectwa.
 *
 * OŚ STRONY: BOŻOGROBCY. Zakon Kanoników Regularnych Stróżów Grobu
 * Bożego, sprowadzony tu w 1163 r., uczynił z Miechowa swój dom
 * macierzysty i główny ośrodek w tej części Europy. Po zdobyciu
 * Jerozolimy przez Saladyna w 1187 r. miasto przejęło rolę celu
 * pielgrzymek — do repliki Grobu Bożego.
 *
 * Druga oś: MACIEJ Z MIECHOWA (Miechowita), 1457–1523 — profesor
 * medycyny, ośmiokrotny rektor Akademii Krakowskiej, autor pierwszego
 * drukowanego opisu geograficznego Europy Wschodniej (1517).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — FUNDACJA 1163 r.: zakon sprowadził z Ziemi Świętej JAKSA
 *   z rodu Gryfitów, darując mu osadę i dwie sąsiednie wsie,
 * — REPLIKA GROBU BOŻEGO przy bazylice — potwierdzona.
 *   ⚠️ Ziemia przywieziona z Jerozolimy i rozsypana w miejscu budowy
 *   to WEDŁUG TRADYCJI, nie fakt udokumentowany. Tak to formułuję,
 * — KASATA ZAKONU 1819 r., dekretem władz Królestwa Polskiego;
 *   kościół stał się parafialnym. W 1996 r. Jan Paweł II nadał
 *   tytuł bazyliki mniejszej,
 * — BAZYLIKA: gotycka, trzynawowa (XIV–XV w.), przebudowa
 *   późnobarokowa po pożarze w 1745 r.,
 * — MACIEJ Z MIECHOWA (1457–1523): profesor medycyny Akademii
 *   Krakowskiej od 1500 r., ośmiokrotny rektor; autor
 *   „Tractatus de duabus Sarmatiis” (1517) — pierwszego drukowanego
 *   opisu geograficznego Europy Wschodniej,
 * — SZPITALNICTWO: opieka szpitalna sięga bożogrobców; budowa
 *   Szpitala św. Anny od 1874 r., pawilony 1875 r.; nowy obiekt
 *   otwarty 17 lipca 1984 r., 417 łóżek,
 * — DEMOGRAFIA (31.12.2024): gmina 18 640 mieszk., 148,3 km²,
 *   127 os./km²; miasto 10 903 mieszk., 15,5 km², 704 os./km².
 *   Miasto straciło 7,8% ludności od 2002 r.,
 * — 34 SOŁECTWA (nie mylić z 43 miejscowościami),
 * — KOLEJ: linia nr 8 (Warszawa–Kraków), stacja czynna.
 *   Druga linia SKA (Kraków Gł.–Miechów–Sędziszów) uruchomiona
 *   13 grudnia 2015 r., operator Koleje Małopolskie, ok. 40 min
 *   do Krakowa Głównego,
 * — DROGA: DK7, ok. 40 km od Krakowa. Odcinek S7 Moczydło–Miechów
 *   (18,7 km) otwarty 5 września 2023 r., kończy się węzłem Miechów.
 *   Miasto ma obwodnicę północną w ciągu DW 783,
 * — GOSPODARKA: 2 857 podmiotów REGON (31.12.2024), w tym 2 217 osób
 *   fizycznych. Bezrobocie rejestrowane w gminie 5,2%, w powiecie
 *   5,3% (wobec 4,2% w Małopolsce). Pracujących 220 na 1000
 *   mieszkańców gminy, 140 na 1000 w powiecie,
 * — 11 ORGANIZACJI GOSPODYŃ wymienionych przez CKiS,
 * — DNI MIECHOWA 2026: 11–14 czerwca.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA „JEDYNA SIEDZIBA BOŻOGROBCÓW W POLSCE”. To fałsz:
 *   do 1774 r. zakon miał 31 klasztorów. Miechów był PIERWSZĄ
 *   i GŁÓWNĄ placówką, domem macierzystym, siedzibą prepozyta
 *   generalnego — i tak to piszę,
 * — NAZW NAJWIĘKSZYCH PRACODAWCÓW. Nie zweryfikowano żadnej firmy
 *   prywatnej w KRS. Piszę o szpitalu i administracji, bo to
 *   instytucje publiczne, a nie wymieniam spółek,
 * — TWIERDZENIA, ŻE S7 ŁĄCZY MIECHÓW Z KRAKOWEM. Potwierdzony jest
 *   odcinek Moczydło–Miechów. Stan odcinka na południe od Miechowa
 *   nie został przeze mnie zweryfikowany,
 * — NUMERU EDYCJI DNI MIECHOWA. Nieustalony,
 * — LICZBY KURSÓW SKA. Dane z 2015 r. są nieaktualne,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak.
 *
 * PUŁAPKI:
 * — CHARSZNICKA KAPUSTA KWASZONA TO NIE PRODUKT GMINY MIECHÓW.
 *   To sąsiednia gmina Charsznica, ten sam powiat. Najczęstszy błąd
 *   w tekstach o Miechowie. Strona mówi o tym wprost,
 * — ZIEMIA Z JEROZOLIMY: tradycja, nie fakt. Formułować „według
 *   tradycji”,
 * — POTRAWY Z FESTIWALU SMAKU (żeberka po cygańsku, kociołek
 *   z chlebkiem czosnkowym, kluski na łoju z rosołem) to potrawy
 *   KONKURSOWE kół gospodyń, nie „dania regionalne Miechowa”,
 * — 34 SOŁECTWA ≠ 43 MIEJSCOWOŚCI. Nie mieszać,
 * — „Kasztanka Piłsudskiego” pojawia się w kontekście atrakcji
 *   Miechowa — niezweryfikowane, nie używać.
 */

export const MIECHOW: CityContent = {
  slug: "miechow",
  h1: "Thermomix Miechów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Miechów — prezentacja i cena",
  seoDescription:
    "Thermomix w Miechowie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojeżdżam do całej gminy. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Miechów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Miechowie i całej gminie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Miechowa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich sołectw gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("miasto i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miechowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieście, jak w Nasiechowicach, Jaksicach czy Pojałowicach.",
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
      heading: "Miasteczko, do którego jeżdżono zamiast do Jerozolimy",
      paragraphs: [
        "W tysiąc sto sześćdziesiątym trzecim roku możny z rodu Gryfitów, Jaksa, sprowadził tu z Ziemi Świętej zakon Kanoników Regularnych Stróżów Grobu Bożego i podarował mu osadę oraz dwie sąsiednie wsie. Miechów stał się ich domem macierzystym i siedzibą prepozyta generalnego — stąd zresztą zakonników zaczęto w Polsce nazywać miechowitami.",
        "Zaraz sprostuję rzecz, którą powtarza wiele tekstów: to nie była jedyna placówka bożogrobców w Polsce. Do rozbiorów mieli ich trzydzieści jeden. Miechów był pierwszy i główny, i to zupełnie wystarczy — nie trzeba tego podkręcać.",
        "Najważniejsze wydarzyło się w tysiąc sto osiemdziesiątym siódmym roku, i to półtora tysiąca kilometrów stąd: Saladyn zdobył Jerozolimę. Pielgrzymka do Grobu Bożego przestała być możliwa. Wtedy Miechów, w którym stała jego replika, przejął tę rolę dla Polski i sporej części Europy Środkowej. Według tradycji Jaksa przywiózł stamtąd ziemię i rozsypał ją w miejscu budowy — dodaję „według tradycji”, bo to jest przekaz, nie dokument.",
        "Zakon skasowano w tysiąc osiemset dziewiętnastym roku, kościół stał się parafialnym, a w tysiąc dziewięćset dziewięćdziesiątym szóstym Jan Paweł II nadał mu tytuł bazyliki mniejszej. Sam budynek jest gotycki, trzynawowy, przebudowany po pożarze z tysiąc siedemset czterdziestego piątego roku.",
        "Drugą rzeczą, którą to miasto dało światu, jest człowiek. Maciej z Miechowa, żyjący w latach tysiąc czterysta pięćdziesiąt siedem–tysiąc pięćset dwadzieścia trzy, był profesorem medycyny i ośmiokrotnym rektorem Akademii Krakowskiej. W tysiąc pięćset siedemnastym roku wydał pierwszy drukowany opis geograficzny Europy Wschodniej — czyli opisał części świata, o których w Europie Zachodniej krążyły wtedy głównie zmyślenia.",
        "Piszę o tym na stronie o urządzeniu kuchennym, bo lubię ten wzorzec: obie te historie są o tym samym, czyli o sprawdzaniu, jak jest naprawdę, zamiast powtarzaniu. Do tego się zresztą jeszcze odwołam, kiedy dojdziemy do kapusty.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miechowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy to miasto, czy sołectwo. Gmina jest duża — sto czterdzieści osiem kilometrów kwadratowych i trzydzieści cztery sołectwa — więc trasę planuję inaczej dla Miechowa, a inaczej dla Zarogowa czy Kaliny Małej. Dopłaty nie ma żadnej.",
        "Jeśli pracujesz w szpitalu albo w administracji i masz nietypowe godziny, powiedz od razu. Przedpołudnie w dzień roboczy jest dla mnie równie normalnym terminem jak wieczór.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miechowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Czterdzieści minut pociągiem i co z tego wynika",
      paragraphs: [
        "Od grudnia dwa tysiące piętnastego roku Miechów ma połączenie Szybkiej Kolei Aglomeracyjnej z Krakowem. Przejazd trwa około czterdziestu minut. To zmieniło tutaj więcej niż jakakolwiek inwestycja w samym mieście, bo nagle praca w Krakowie przestała oznaczać przeprowadzkę.",
        "Widać to w liczbach zatrudnienia. W gminie na tysiąc mieszkańców przypada dwieście dwadzieścia osób pracujących na miejscu, a w całym powiecie tylko sto czterdzieści. To bardzo mało. Praca jest w Krakowie, a Miechów jest miejscem, w którym się mieszka i wraca na wieczór.",
        "Dla kuchni oznacza to konkretny kształt dnia: wyjście przed siódmą, powrót po siedemnastej albo osiemnastej, i pytanie, kto ugotuje obiad. Praktyczna korzyść jest prosta — danie jednogarnkowe można wstawić i wyjść albo wstawić po powrocie i zająć się czymś innym. Gotuje się bez pilnowania i samo wyłącza.",
        "Druga rzecz to gotowanie na zapas w weekend. Podwójna porcja zupy, sos na kilka dni, ciasto na pierogi, pasty kanapkowe, chleb — w jednym naczyniu, seriami. W domu, z którego dwie osoby dojeżdżają, zapas w lodówce jest wart więcej niż codzienne świeże gotowanie, na które i tak nie ma czasu.",
        "Jeśli mieszkasz w sołectwie, a nie w mieście, dochodzi jeszcze jedno: dojazd do dworca. Wtedy dzień jest rozciągnięty jeszcze bardziej i argument o obiedzie, który powstaje bez nikogo, robi się mocniejszy, nie słabszy.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a gdy oboje rodzice wracają wieczorem, to bywa realnie potrzebne.",
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
    heading: "Miechów i gotowanie — z jednym sprostowaniem",
    paragraphs: [
      "Zacznę od sprostowania, bo to najczęstszy błąd w tekstach o tym mieście. Charsznicka kapusta kwaszona, jedyny produkt z tej okolicy wpisany na ministerialną Listę Produktów Tradycyjnych, nie pochodzi z Miechowa. Pochodzi z gminy Charsznica — sąsiedniej, w tym samym powiecie, kilkanaście kilometrów stąd. Wpis obejmuje osiemnaście miejscowości tamtej gminy i tylko je.",
      "Z samego Miechowa nie znalazłam żadnego wpisu. Mogłabym w to miejsce wstawić coś ogólnego i pewnie nikt by nie sprawdził. Nie zrobię tego — zwłaszcza w mieście, którego najsłynniejszy mieszkaniec zasłynął tym, że opisał świat takim, jaki jest, zamiast powtarzać cudze zmyślenia.",
      "To, co tu naprawdę jest, to jedenaście działających kół gospodyń i stowarzyszeń, od Pojałowic i Nasiechowic po Bukowską Wolę i Dziewięcioły. Na miejscowym Festiwalu Smaku nagradzano ich potrawy: żeberka po cygańsku, kociołek z chlebkiem czosnkowym, kluski na łoju z rosołem. To są dania konkursowe, robione przez tutejsze gospodynie — nie „regionalna kuchnia miechowska”, bo takiej nikt nie skodyfikował.",
      "Co z tego wynika dla urządzenia? Popatrzmy na te kluski na łoju. Ciasto trzeba wyrobić, rosół ugotować, a przy jednym i drugim po prostu stać. Żadna z tych czynności nie jest trudna, wszystkie trwają. Urządzenie zabiera dokładnie tę część — wyrabianie, rozdrabnianie, mieszanie i pilnowanie, żeby się nie przypaliło. Smaku ani przepisu nie zabiera, bo nie ma jak.",
    ],
  },

  districtsHeading: "Gdzie w gminie Miechów dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich trzydziestu czterech sołectw, bez żadnej dopłaty za odległość. Gmina jest rozległa — sto czterdzieści osiem kilometrów kwadratowych — a jej sołectwa rozłożone są po lessowych wzgórzach Wyżyny Miechowskiej.",
    "Samo miasto liczy blisko jedenaście tysięcy mieszkańców na piętnastu i pół kilometra kwadratowego, cała gmina ponad osiemnaście i pół tysiąca. Miasto powoli się kurczy: od dwa tysiące drugiego roku ubyło tu prawie osiem procent ludności.",
    "W mieście stoi bazylika z repliką Grobu Bożego oraz szpital powiatowy — instytucja z niezwykle długą metryką, bo opieka szpitalna sięga tu jeszcze czasów bożogrobców, a obecny budynek otwarto w tysiąc dziewięćset osiemdziesiątym czwartym roku.",
    "Dojazd jest tu wyjątkowo dobry jak na powiat tej wielkości. Stacja leży na linii z Warszawy do Krakowa, a od grudnia dwa tysiące piętnastego roku kursuje stąd Szybka Kolej Aglomeracyjna do Krakowa Głównego — przejazd zajmuje około czterdziestu minut. Samochodem jest około czterdziestu kilometrów drogą krajową numer siedem; we wrześniu dwa tysiące dwudziestego trzeciego roku otwarto odcinek ekspresówki kończący się węzłem Miechów. Miasto ma też własną obwodnicę północną.",
  ],
  districts: [
    "Miechów (miasto)",
    "Biskupice",
    "Brzuchania",
    "Bukowska Wola",
    "Celiny Przesławickie",
    "Dziewięcioły",
    "Falniów",
    "Falniów-Wysiółek",
    "Glinica",
    "Jaksice",
    "Kalina Lisiniec",
    "Kalina Mała",
    "Kalina-Rędziny",
    "Kamieńczyce",
    "Komorów",
    "Nasiechowice",
    "Parkoszowice",
    "Podleśna Wola",
    "Podmiejska Wola",
    "Pojałowice",
    "Poradów",
    "Przesławice",
    "Pstroszyce Pierwsze",
    "Pstroszyce Drugie",
    "Siedliska",
    "Sławice Szlacheckie",
    "Strzeżów Pierwszy",
    "Strzeżów Drugi",
    "Szczepanowice",
    "Widnica",
    "Wielki Dół",
    "Wymysłów",
    "Zagorzyce",
    "Zapustka",
    "Zarogów",
  ],

  nearbyHeading: "Charsznica, Racławice i Książ Wielki też są na mojej trasie",
  nearbyParagraphs: [
    "Miechów jest stolicą powiatu i naturalnym punktem, z którego rozjeżdżam się po okolicy. Do Charsznicy, Racławic, Książa Wielkiego, Kozłowa, Gołczy i Słaboszowa mam stąd po kilkanaście–dwadzieścia kilka minut. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Miechowski dworzec jest zresztą dla całego powiatu punktem przesiadkowym — z Racławic, Słaboszowa czy Książa Wielkiego, gdzie kolei nie ma, do pociągu jeździ się właśnie tutaj.",
  ],
  nearbyTowns: [
    "Charsznica",
    "Racławice",
    "Książ Wielki",
    "Kozłów",
    "Gołcza",
    "Słaboszów",
    "Słomniki",
    "Kraków",
  ],

  about: blokOMnie("do Miechowa", "w powiecie miechowskim"),

  faq: [
    {
      question: "Czy charsznicka kapusta pochodzi z Miechowa?",
      answer:
        "Nie, i to częste nieporozumienie. Charsznicka kapusta kwaszona ma wpis na ministerialną Listę Produktów Tradycyjnych, ale dotyczy on osiemnastu miejscowości gminy Charsznica — sąsiedniej gminy w tym samym powiecie, kilkanaście kilometrów od Miechowa. Z samego Miechowa nie ma żadnego wpisu na tej liście.",
    },
    ...faqWspolne("w Miechowie"),
    {
      question: "Mieszkam w sołectwie, nie w Miechowie. Dojedziesz?",
      answer:
        "Dojadę do każdego z trzydziestu czterech sołectw i bez dopłaty. Gmina jest duża, więc proszę tylko o nazwę sołectwa i jakiś punkt orientacyjny — nazwy bywają tu podobne, bo są dwa Pstroszyce, dwa Strzeżowy i trzy Kaliny. Wolę zapytać raz, niż szukać na miejscu.",
    },
    {
      question: "Dojeżdżam do Krakowa pociągiem. Zdążymy wieczorem?",
      answer:
        "Zdążymy. Prezentacja trwa około dwóch godzin, a Szybka Kolej Aglomeracyjna pokonuje trasę z Krakowa do Miechowa w mniej więcej czterdzieści minut, więc jeśli wracasz po siedemnastej, umawiamy się na osiemnastą albo później. To bardzo typowy scenariusz w tej gminie i mam go rozpracowany.",
    },
  ],

  geo: { lat: 50.3578, lng: 20.0286 },
};
