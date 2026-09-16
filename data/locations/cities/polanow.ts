import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * POLANÓW — powiat koszaliński, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 819 mieszkańców (GUS 31.12.2024), 7,4 km²,
 *   gęstość 382,5 os./km².
 * CAŁA GMINA: 7 962 osoby, 393,4 km², gęstość 21 os./km².
 * ⚠⚠⚠ NAJWIĘKSZA PUŁAPKA MIASTO/GMINA W CAŁEJ FALI:
 *   GMINA MA PRAWIE TRZY RAZY WIĘCEJ LUDZI NIŻ MIASTO
 *   (+182 %). NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠⚠ pomeranica.pl podaje 3 101 / 9 407 — DANE
 *   PRZESTARZAŁE, ODRZUCONE. Obowiązuje GUS 31.12.2024.
 * ⚠ GEO: 54,1181 / 16,6822 (54°07'N, 16°41'E).
 *
 * ⚠⚠ HOMONIM: Polanów ≠ POLANICA-ZDRÓJ (dolnośląskie)
 *   ≠ POŁANIEC (świętokrzyskie) ≠ Polanowice.
 *   ⚠ Wyszukiwarki podstawiają Polanicę przy zapytaniach
 *   o kościół — sprawdzone. ROZGRANICZAM W FAQ.
 *
 * ⚠ ODMIANA: „w POLANOWIE", „do POLANOWA".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma regularna.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Polanowa".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA SPRZECZNE — 1313
 *   (polanow.pl) ALBO 1319 (pomeranica.pl, starostwo).
 *   ⚠⚠⚠ PISZĘ „NA POCZĄTKU XIV W." I NIE WYBIERAM DATY.
 * — 1436 — miasto przechodzi pod władzę książęcą.
 * — ⚠⚠⚠ RDZEŃ KĄTA — POŻAR 1656 R.:
 *   OCALAŁO ZALEDWIE PIĘĆ DOMÓW, KOŚCIÓŁ, MŁYN I ZAMEK.
 *   ⚠⚠ MŁYN JEST NA TEJ LIŚCIE. To jest cały kąt.
 * — 1609 — pożar; po nim Glasenappowie zezwolili
 *   mieszczanom na pieczęć z gryfem i na ratusz.
 *   ⚠ pomeranica datuje zgodę na 1617 — rozbieżność
 *   ośmiu lat. PODAJĘ SAM FAKT POŻARU Z 1609 R.,
 *   bez daty zgody. ⚠⚠ PIECZĘCI I RATUSZA JAKO TEMATU
 *   NIE ROZWIJAM — patrz TWARDE GRANICE.
 * — 1736 — pożar w Wielką Sobotę; po odbudowie zakaz
 *   krycia strzechą w centrum.
 *   ⚠ „WIELKĄ SOBOTĘ" POMIJAM — wątek wyznaniowy.
 *   Piszę sam rok.
 * — 1843 — powstaje cegielnia.
 * — Lata 90. XIX w. — pierwsza linia kolejowa.
 * — 1908 — prąd elektryczny; 1910 — pierwszy samochód.
 *   ⚠⚠ DWA LATA ODSTĘPU — ładny fakt, podaję.
 * — ⚠⚠ LICZBY 2 445 OBYWATELI NIE PODAJĘ — jedno źródło
 *   przypisuje ją 1900 r., drugie 1800 r.
 * — Kościół z XVIII w. z zachowaną późnogotycką wieżą
 *   po poprzedniej budowli; rozbudowa 1850.
 *   ⚠ OPISUJĘ GO WYŁĄCZNIE JAKO BUDOWLĘ — i to skrótowo.
 *   ⚠⚠ ZERO WNĘTRZA, EPITAFIÓW I HERBÓW RODOWYCH.
 * — Święta Góra (Polanowska) 156 m n.p.m., ok. 1,5 km
 *   na południowy zachód od centrum; Góra Warblewska
 *   170 m n.p.m. Miasto leży u podnóża obu.
 *   ⚠⚠ KAPLICY NA ŚWIĘTEJ GÓRZE I RUCHU PĄTNICZEGO NIE
 *   UŻYWAM — wątek wyznaniowy. Podaję samą wysokość.
 * — Rzeka Grabowa; od południa Zalew Polanowski.
 * — Koszalin 37 km (dwa źródła zgodne).
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   żaden wpis nie jest przypisany gminie Polanów, także
 *   regionalnie. NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ HERB: wiadomo tylko o gryfie na pieczęci; blazonu
 *   i barw NIE USTALONO — NIE OPISUJĘ HERBU.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: KRÓTKA LISTA, KTÓRA UŁOŻYŁA SIĘ SAMA — o tym, że
 * lista rzeczy naprawdę używanych w kuchni jest krótsza,
 * niż się wydaje.
 * Kąt od pożaru z 1656 r.: ocalało pięć domów, kościół,
 * młyn i zamek. Nikt tej listy nie układał — ułożyła się
 * sama, a mimo to jest bardzo konkretna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że po pożarze z 1656 r. w Polanowie stało pięć domów,
 *   kościół, młyn i zamek,
 * — ŻE NA TEJ LIŚCIE JEST MŁYN — czyli jedno urządzenie
 *   do przerabiania jedzenia — to jest rdzeń,
 * — ⚠⚠ ŻE TAKIEJ LISTY NIKT NIE UŁOŻYŁ. Nie wybrano, co
 *   ma zostać; zostało to, co było najsolidniej zrobione
 *   i najbardziej oddzielone od reszty. Lista sama się
 *   wybrała,
 * — ⚠⚠ ŻE W KAŻDEJ KUCHNI ISTNIEJE DOKŁADNIE TAKA LISTA
 *   I NIKT JEJ NIE ZNA. Gdyby z szafek zostało pięć
 *   przedmiotów, byłyby to te same pięć co miesiąc
 *   i co rok — tylko nigdy nie sprawdzamy które,
 * — ⚠⚠ ŻE DA SIĘ TO SPRAWDZIĆ BEZ POŻARU, jednym prostym
 *   ruchem: przez tydzień odkładać na osobną półkę
 *   wszystko, czego się faktycznie użyło. Po tygodniu
 *   półka jest listą, a reszta szafki odpowiedzią,
 * — ⚠⚠ ŻE Z TEGO WYNIKA COŚ NIEOCZYWISTEGO O KUPOWANIU:
 *   sprzęt dokupuje się zwykle do rzeczy, których się
 *   nie używa — bo to one wyglądają na brakujące ogniwo.
 *   Rzeczy używane codziennie nie wołają o uzupełnienie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: KRÓTKA LISTA NIE ZNACZY,
 *   ŻE RESZTĘ NALEŻY WYRZUCIĆ. Zamek i kościół też
 *   ocalały, a nie służyły codziennie. Chodzi o to, żeby
 *   wiedzieć, co jest czym — a nie o to, żeby robić
 *   porządki,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie wielofunkcyjne ma
 *   sens dokładnie wtedy, gdy zastępuje rzeczy z krótkiej
 *   listy, a nie wtedy, gdy zastępuje te z końca szafki.
 *   MÓWIĘ TO WPROST, także dlatego, że to jest pytanie,
 *   które warto zadać przede mną, a nie po mnie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZEPISÓW RODZINNYCH, ODTWARZANIA
 *   I ZAPISYWANIA — obszar zajęty PIĘCIOKROTNIE
 *   (Golub-Dobrzyń, Kamień Krajeński, Puck, Suraż,
 *   Radziejów). Ani jednego zdania.
 * — ⚠⚠⚠ ZERO WŁASNEGO ZNAKU, PIECZĘCI I WŁASNEJ WERSJI
 *   PRZEPISU — prowadzi prosto w obszar powyżej.
 *   PIECZĘĆ Z GRYFEM WYMIENIAM CO NAJWYŻEJ JAKO FAKT
 *   HISTORYCZNY W SEKCJI RODZINNEJ, NIGDY JAKO MORAŁ.
 *   ⚠⚠ W SEKCJI KĄTOWEJ NIE POJAWIA SIĘ W OGÓLE.
 * — ⚠⚠ ZERO GARNKÓW ODZIEDZICZONYCH — kąt zajęty
 *   (Krośniewice).
 * — ⚠⚠ ZERO ZAPROJEKTOWANIA NARAZ KONTRA DOKŁADANIA PO
 *   KOLEI — kąt zajęty (Zamość). Nie piszę o odbudowie
 *   jako o planowaniu.
 * — ⚠⚠ ZERO WYMIANY PO JEDNEJ SZTUCE — kąt zajęty
 *   (Brześć Kujawski).
 * — ⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty (Płoty).
 *   ⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi o TO, GDZIE
 *   RZECZ TRZYMAĆ; TUTAJ o TO, KTÓRYCH RZECZY W OGÓLE
 *   SIĘ UŻYWA. Ani słowa o umiejscowieniu, szufladach
 *   ani zasięgu ręki. ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt zajęty
 *   (Międzyzdroje).
 * — ⚠⚠ ZERO DO CZEGO TO WŁAŚCIWIE SŁUŻY — kąt zajęty
 *   (Karlino).
 * — ⚠ ZERO BAŁAGANU I SPRZĄTANIA — kąt zajęty (Koluszki).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY SPRZĘTU DLA CZYTELNIKA — podaję
 *   WYŁĄCZNIE sposób, w jaki może ją sobie zrobić.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kaplicy na Świętej
 *   Górze, ruchu pątniczego, cystersów, biskupów
 *   i Wielkiej Soboty nie wprowadzam.
 * — ⚠⚠ POŻARY OPISUJĘ JAKO ZDARZENIA Z DATĄ I SKUTKIEM
 *   BUDOWLANYM. Zero opisu zniszczeń, zero ofiar,
 *   zero dramatyzowania.
 * — ⚠ ZERO DEMOGRAFII HISTORYCZNEJ — źródła sprzeczne.
 * — ⚠ ZERO HUTY SZKŁA I CEGIELNI JAKO WĄTKU — data 1843
 *   niepewna w zestawieniu, pomijam całość.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl, pomeranica.pl
 *   w zakresie liczby ludności.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy — tu pułapka jest
 *   największa w całym województwie.
 * — NIE PODAJĘ roku nadania praw miejskich — źródła
 *   podają 1313 albo 1319.
 * — NIE PODAJĘ daty zgody na pieczęć i ratusz — 1609
 *   albo 1617.
 * — NIE PODAJĘ liczby 2 445 obywateli.
 * — NIE OPISUJĘ herbu — blazon nieustalony.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ ŻADNEJ GOTOWEJ LISTY SPRZĘTU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Polanów leży w powiecie koszalińskim, trzydzieści
 *   siedem kilometrów od Koszalina, u podnóża dwóch
 *   wzniesień: Świętej Góry (156 m n.p.m., około
 *   półtora kilometra na południowy zachód od centrum)
 *   i Góry Warblewskiej (170 m n.p.m.),
 * — miasto liczy 2 819 mieszkańców (GUS, 31.12.2024)
 *   na 7,4 km², a cała gmina 7 962 osoby na 393,4 km²,
 *   czyli dwadzieścia jeden osób na kilometr kwadratowy,
 * — prawa miejskie miasto otrzymało na początku XIV w.,
 *   a w 1436 r. przeszło pod władzę książęcą,
 * — po pożarze z 1656 r. ocalało pięć domów, kościół,
 *   młyn i zamek; wcześniejszy pożar miał miejsce
 *   w 1609 r., a po pożarze z 1736 r. wprowadzono
 *   w centrum zakaz krycia strzechą,
 * — prąd elektryczny doprowadzono w 1908 r., a pierwszy
 *   samochód pojawił się w mieście dwa lata później;
 *   pierwsza linia kolejowa powstała w latach
 *   dziewięćdziesiątych XIX w.,
 * — najstarszy obiekt w mieście pochodzi z XVIII w.
 *   i zachował późnogotycką wieżę po poprzedniej
 *   budowli; znacznie rozbudowano go w 1850 r.,
 * — przez okolicę płynie rzeka Grabowa, a od południa
 *   gmina graniczy z Zalewem Polanowskim.
 */
export const POLANOW: CityContent = {
  slug: "polanow",
  h1: "Thermomix Polanów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Polanów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Polanowie (powiat koszaliński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Polanów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Polanowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Polanowa w powiecie koszalińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie, także tych najdalszych.",

  highlights: highlightyStandardowe("Polanów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pięć domów, kościół, młyn i zamek. Tej listy nikt nie układał.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Polanowie – jak wygląda prezentacja?",
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
      id: "co-zostalo",
      heading: "Pięć domów, kościół, młyn i zamek",
      paragraphs: [
        "Polanów palił się kilka razy. Po pożarze z 1656 roku w mieście stało dokładnie tyle: pięć domów, kościół, młyn i zamek. Taka jest cała lista.",
        "Zwraca uwagę, co na niej jest. Młyn — czyli jedno urządzenie do przerabiania jedzenia — przetrwał razem z zamkiem i kościołem, a nie razem z domami.",
        "I najważniejsze: tej listy nikt nie układał.",
        "Nie było narady, na której zdecydowano, co ma zostać. Zostało to, co było najsolidniej zrobione i najbardziej oddzielone od reszty zabudowy. Lista wybrała się sama — i właśnie dlatego jest wiarygodna.",
        "W każdej kuchni istnieje dokładnie taka sama lista. I prawie nikt jej nie zna.",
        "Gdyby z Waszych szafek miało zostać pięć przedmiotów, byłyby to te same pięć w styczniu i w lipcu, w tygodniu spokojnym i w tym najgorszym. Ta lista jest stabilna, konkretna i krótka. Tylko nigdy jej nie sprawdzamy, bo nie ma po co — dopóki wszystko stoi na miejscu, pytanie się nie pojawia.",
        "A sprawdzić da się bez pożaru, jednym ruchem. Przez tydzień odkładaj na osobną półkę albo do osobnej szuflady wszystko, czego faktycznie użyłaś. Nie planuj niczego, nie oceniaj — po prostu odkładaj. Po siedmiu dniach ta półka jest Twoją listą, a reszta szafki odpowiedzią na pytanie, którego nikt nie zadał.",
        "Z tego wynika rzecz nieoczywista o kupowaniu. Sprzęt dokupuje się zwykle do rzeczy, których się nie używa — bo to właśnie one wyglądają na brakujące ogniwo. Coś stoi, coś nie działa tak, jak miało, więc wydaje się, że brakuje jeszcze jednego elementu i wtedy ruszy. Rzeczy z krótkiej listy nigdy nie wołają o uzupełnienie. One po prostu pracują.",
        "Uczciwie o drugiej stronie: krótka lista nie znaczy, że resztę trzeba wyrzucić. W Polanowie ocalał też zamek i kościół, a nie służyły przecież codziennie. Nie chodzi o robienie porządków ani o pozbywanie się rzeczy. Chodzi o to, żeby wiedzieć, co jest czym — bo inaczej ocenia się każdy zakup tą samą miarą.",
        "Na koniec o urządzeniu, wprost. Sprzęt wielofunkcyjny ma sens dokładnie wtedy, gdy wchodzi na krótką listę i zastępuje rzeczy, które na niej są. Nie wtedy, gdy zastępuje to, co leży z tyłu szafki i tak by tam leżało dalej.",
        "Mówię to przed spotkaniem, nie po nim, bo to jest pytanie, które warto sobie zadać wcześniej. Jeśli po tygodniu odkładania na półkę wyjdzie, że Thermomix trafiłby w środek tej listy — rozmowa ma sens. Jeśli wyjdzie inaczej, też Wam to powiem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Polanowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, z czego w kuchni korzystacie najczęściej — pod to dobiorę dania, bo tylko wtedy zobaczycie prawdziwe porównanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Polanowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Polanowa",
      paragraphs: [
        "Polanów leży w powiecie koszalińskim, trzydzieści siedem kilometrów od Koszalina, u podnóża dwóch wzniesień: Świętej Góry, która ma sto pięćdziesiąt sześć metrów nad poziomem morza i leży półtora kilometra na południowy zachód od centrum, oraz Góry Warblewskiej — sto siedemdziesiąt metrów. Samo miasto liczy ponad dwa tysiące ośmiuset mieszkańców (GUS, 31.12.2024) na siedmiu i czterech dziesiątych kilometra kwadratowego, a cała gmina blisko osiem tysięcy osób na prawie czterystu kilometrach kwadratowych, czyli dwadzieścia jeden osób na kilometr. Prawa miejskie Polanów otrzymał na początku czternastego wieku, a w 1436 roku przeszedł pod władzę książęcą. Po pożarze z 1656 ocalało pięć domów, kościół, młyn i zamek; wcześniejszy pożar był w 1609, a po tym z 1736 wprowadzono w centrum zakaz krycia strzechą. Prąd doprowadzono w 1908 roku, a pierwszy samochód pojawił się dwa lata później. Najstarszy obiekt w mieście pochodzi z osiemnastego wieku i zachował późnogotycką wieżę po poprzedniej budowli. Przez okolicę płynie Grabowa, a od południa gmina graniczy z Zalewem Polanowskim.",
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

  districtsHeading: "Do których części Polanowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie — a gmina Polanów jest duża: prawie czterysta kilometrów kwadratowych przy dwudziestu jeden osobach na kilometr. Do najdalszych miejscowości też dojeżdżam bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Polanów też przyjadę",
  nearbyParagraphs: [
    "Koszalin jest trzydzieści siedem kilometrów stąd. Do Sławna, Bobolic, Sianowa i Miastka też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Koszalin", "Sławno", "Bobolice", "Sianów", "Miastko"],

  about: blokOMnie("do Polanowa", "w Polanowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Polanowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie, także tych najdalszych — gmina ma prawie czterysta kilometrów kwadratowych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Polanów w powiecie koszalińskim w województwie zachodniopomorskim, nie o Polanicę-Zdrój na Dolnym Śląsku ani o Połaniec w świętokrzyskiem — wyszukiwarki dość często to mylą.",
    },
    ...faqWspolne("w Polanowie"),
    {
      question: "Skąd wiedzieć, czy Thermomix rzeczywiście mi się przyda?",
      answer:
        "Najprostszy sprawdzian trwa tydzień i nic nie kosztuje: odkładaj na osobną półkę wszystko, czego w kuchni faktycznie użyłaś. Po siedmiu dniach ta półka jest listą rzeczy, z których korzystasz naprawdę — zwykle jest krótsza, niż się wydaje. Urządzenie wielofunkcyjne ma sens wtedy, gdy zastępuje coś z tej listy, a nie coś, co leży z tyłu szafki.",
    },
    {
      question: "Czy Thermomix zastępuje resztę sprzętu w kuchni?",
      answer:
        "Nie zastępuje wszystkiego i nie warto tak do tego podchodzić. Robi za to sporą część codziennej pracy w jednym naczyniu — miksowanie, gotowanie z mieszaniem, gotowanie na parze w Varomie — więc pytanie brzmi nie „co wyrzucę”, tylko „co z tego, czego używam codziennie, przejmie”. Odpowiedź jest inna w każdej kuchni i dlatego gotujemy na prezentacji naprawdę.",
    },
  ],

  geo: { lat: 54.1181, lng: 16.6822 },
};
