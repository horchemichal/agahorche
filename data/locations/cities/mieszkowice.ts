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
 * MIESZKOWICE — powiat gryfiński,
 * woj. zachodniopomorskie, około 15 km na wschód od Odry.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 338 mieszkańców (GUS 31.12.2024), 5,3 km²,
 * gęstość 635,8 os./km², 50 M N.P.M.
 * CAŁA GMINA: 6 492 osoby, 238,7 km², 26 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 52,7830 / 14,4830.
 *   ⚠ ŹRÓDŁEM JEST en.wikipedia — nie potwierdzone
 *   drugim źródłem, ale zgodne z położeniem miasta.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA GRANICA TEJ STRONY:
 *   MIESZKOWICE MAJĄ SILNY, DOBRZE UDOKUMENTOWANY
 *   I LOKALNIE EKSPONOWANY WĄTEK ROKU 1945 —
 *   pierwszy słup graniczny i forsowanie Odry.
 *   To jest pierwszy fakt, jaki wypada o tym mieście
 *   w wyszukiwarce, i jest w całości wojenny.
 *   NIE WSPOMINAM ANI JEDNYM SŁOWEM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠⚠ Z TEGO POWODU NIE PISZĘ TEŻ O POCHODZENIU
 *   DZISIEJSZEJ NAZWY MIASTA ANI O POMNIKU MIESZKA I —
 *   oba prowadzą wprost do roku 1945.
 *
 * ⚠ ODMIANA: PLURALE TANTUM, jak Katowice.
 *   D. MIESZKOWIC, Ms. W MIESZKOWICACH.
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   w sekcji rodzinnej piszę „dla rodziny z Mieszkowic".
 * ⚠ HOMONIMY: MIESZKOWICE (zachodniopomorskie)
 *   ≠ MIESZKOWO ≠ Mieszkowice w opolskiem.
 *   ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1295 — pierwsza wzmianka w dokumencie; wcześniej
 *   miasto wchodziło w skład kasztelanii cedyńskiej.
 * — ⚠⚠ PRAWA MIEJSKIE: „koniec XIII w." (pomeranica)
 *   ALBO 1298 r. (en.wikipedia). NIE WYBIERAM ROKU —
 *   piszę „pod koniec XIII wieku", z nadawcą:
 *   margrabia Albrecht III.
 * — 1319 — zmarł tu ostatni margrabia askański Waldemar.
 *   ⚠ PODAJĘ JAKO DATĘ, bez rozwijania.
 * — 1402–1454 — miasto pod panowaniem Zakonu
 *   Krzyżackiego. ⚠⚠ NIE UŻYWAM — wątek podboju
 *   i zakonny.
 * — ⚠⚠⚠ RDZEŃ KĄTA — TRAKTAT Z 1631 R.:
 *   W TYM MIEŚCIE PODPISANO SOJUSZ SZWEDZKO-FRANCUSKI.
 *   Dwie odległe od siebie strony, o różnych interesach,
 *   dogadały się w miasteczku, które i wtedy, i dziś
 *   liczyło kilka tysięcy mieszkańców.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE FAKTU „PODPISANO TU SOJUSZ
 *   DWÓCH STRON". ZERO KONTEKSTU WOJNY TRZYDZIESTOLETNIEJ,
 *   zero stron konfliktu jako wojsk, zero skutków
 *   militarnych. To ma być obraz UZGODNIENIA, nie wojny.
 *   TWARDA GRANICA.
 * — MURY MIEJSKIE: zachowany fragment o długości 1,5 KM,
 *   średnia wysokość 5–7 M; zachowana BASZTA PROCHOWA.
 *   ⚠ BASZTĘ WYMIENIAM Z NAZWY, bez rozwijania,
 *   do czego służyła.
 * — ZABYTKI: średniowieczny kościół Przemienienia
 *   Pańskiego, odbudowany ratusz z początku XIX w.
 *   ⚠ WYMIENIAM JAKO BUDOWLE.
 * — ⚠⚠ RUCHU WALDENSÓW Z XIV W. NIE UŻYWAM —
 *   wątek wyznaniowy.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: WYNIK NEGATYWNY —
 *   nie znaleziono produktu przypisanego do gminy
 *   Mieszkowice. NIE SUGERUJĘ ISTNIENIA TAKIEGO PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: RÓŻNE GUSTA PRZY JEDNYM STOLE — jak się dogadać
 * w domu, w którym każdy je co innego.
 * Kąt od 1631 r.: w tym niedużym mieście podpisano układ
 * między dwiema stronami, które dzieliło wszystko poza
 * jednym wspólnym interesem. Porozumienie nie polegało
 * na tym, że ktoś zmienił zdanie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1631 r. w Mieszkowicach podpisano układ między
 *   dwiema odległymi od siebie stronami — w mieście, które
 *   i wtedy, i dziś liczy kilka tysięcy mieszkańców,
 * — ŻE POROZUMIENIE NIE POLEGAŁO NA TYM, ŻE KTOŚ ZMIENIŁ
 *   ZDANIE — to jest rdzeń. Strony zostały przy swoim
 *   i ustaliły to, co dało się ustalić,
 * — ⚠⚠ ŻE W DOMU, W KTÓRYM KAŻDY JE CO INNEGO, PRÓBUJE
 *   SIĘ ODWROTNIE: doprowadzić do tego, żeby wszyscy
 *   chcieli tego samego. To się nie udaje i kończy
 *   awanturą albo gotowaniem trzech obiadów,
 * — ⚠⚠ ŻE DZIAŁA ZA TO COŚ, CO WYGLĄDA NA USTĘPSTWO,
 *   A JEST PO PROSTU TECHNIKĄ: WSPÓLNA BAZA I OSOBNE
 *   DODATKI. Jedna rzecz robiona dla wszystkich,
 *   a to, co kto do niej dokłada albo odejmuje, zostaje
 *   po stronie jedzącego,
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO PRZYKŁADU DANIA —
 *   to byłaby instrukcja kulinarna,
 * — ⚠⚠ ŻE DRUGA RZECZ JEST JESZCZE WAŻNIEJSZA
 *   I NAJCZĘŚCIEJ POMIJANA: TRZEBA WIEDZIEĆ, CZEGO KTO
 *   NIE JE, I TRAKTOWAĆ TO JAKO INFORMACJĘ, A NIE
 *   JAKO STANOWISKO DO NEGOCJACJI. Lista „czego nie
 *   jemy" jest krótsza, niż się wydaje, i to ona
 *   wyznacza pole,
 * — ⚠⚠⚠ ŻE NIE OCENIAM NICZYICH WYBORÓW ŻYWIENIOWYCH
 *   I NIE WCHODZĘ W POWODY. Powód nie jest mi potrzebny
 *   do tego, żeby dobrać danie. TWARDA GRANICA,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: TO NIE ZNACZY, ŻE KTOŚ
 *   MA GOTOWAĆ OSOBNO DLA KAŻDEGO. Osobne gotowanie
 *   na życzenie jest obciążeniem dla jednej osoby
 *   i szybko się kończy,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie rozstrzygnie
 *   sporu o smak i nikogo nie przekona. Ułatwia jedną
 *   rzecz: zrobienie wspólnej bazy bez stania przy garnku,
 *   więc czas, który zostaje, można przeznaczyć
 *   na dodatki. TO WSZYSTKO — i to jest realne,
 *   ale niewielkie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ROSOŁU, WYWARU I „BAZY, Z KTÓREJ ROBI SIĘ
 *   WSZYSTKO INNE" — kąt zajęty (Gniew). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. Tam chodzi o PODSTAWĘ KULINARNĄ
 *   I O TO, JAK JĄ ROBIĆ; TUTAJ o SPOSÓB DOGADANIA SIĘ
 *   W RODZINIE. Ani jednego zdania o tym, jak bazę
 *   przygotować. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO ZAMIENNIKÓW SKŁADNIKÓW — kąt zajęty
 *   (Kwidzyn).
 * — ⚠⚠ ZERO TRZECH POKOLEŃ POD JEDNYM DACHEM — kąt
 *   zajęty (Kartuzy).
 * — ⚠⚠ ZERO DZIECI, KTÓRE NIE CHCĄ JEŚĆ — ⚠⚠⚠ przy tym
 *   kącie to najkrótsza droga do porad wychowawczych
 *   i żywieniowych. NIE PISZĘ O DZIECIACH W TYM
 *   KONTEKŚCIE ANI RAZU. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO GOTOWANIA DLA WIĘKSZEJ LICZBY OSÓB — kąt
 *   zajęty (Świdwin).
 * — ⚠ ZERO „U KAŻDEGO INACZEJ" — kąt zajęty (Czaplinek).
 *   Tam chodzi o RÓŻNICE W WYKONANIU; TUTAJ o RÓŻNICE
 *   W GUSTACH.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO DANIA Z NAZWY.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ⚠⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, ŻADNYCH DIET
 *   Z NAZWY I ŻADNEJ OCENY CZYICHKOLWIEK WYBORÓW
 *   ŻYWIENIOWYCH. Nie pytam o powody i nie komentuję ich.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE PO WĄTKU 1945.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   ANI O ALERGIACH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ROKU 1945 W JAKIEJKOLWIEK POSTACI: zero
 *   pierwszego słupa granicznego, zero forsowania Odry,
 *   zero pomnika, zero pochodzenia dzisiejszej nazwy
 *   miasta, zero niemieckiej nazwy historycznej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO KONTEKSTU WOJNY TRZYDZIESTOLETNIEJ przy
 *   układzie z 1631 r. — wyłącznie fakt podpisania
 *   porozumienia.
 * — ⚠⚠ ZERO PANOWANIA ZAKONU KRZYŻACKIEGO.
 * — ⚠⚠ ZERO RUCHU WALDENSÓW — wątek wyznaniowy.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI.
 * — ⚠ ZERO BASZTY PROCHOWEJ JAKO OBIEKTU MILITARNEGO —
 *   wymieniam samą nazwę.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ stron układu z 1631 r. jako wojsk
 *   ani kontekstu konfliktu.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE OCENIAM CZYICHKOLWIEK WYBORÓW ŻYWIENIOWYCH
 *   I NIE PYTAM O ICH POWODY.
 * — NIE PODAJĘ ŻADNEGO DANIA Z NAZWY.
 * — NIE SUGERUJĘ istnienia produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mieszkowice leżą w powiecie gryfińskim, około
 *   piętnastu kilometrów na wschód od Odry; są miastem
 *   w gminie miejsko-wiejskiej i liczą 3 338 mieszkańców
 *   (GUS, 31.12.2024) na 5,3 km², pięćdziesiąt metrów
 *   nad poziomem morza, a cała gmina 6 492 osoby
 *   na 238,7 km² w 26 miejscowościach,
 * — pierwsza wzmianka o mieście pochodzi z dokumentu
 *   z 1295 r.; wcześniej należało do kasztelanii
 *   cedyńskiej, a prawa miejskie nadał mu pod koniec
 *   XIII w. margrabia Albrecht III,
 * — w 1319 r. zmarł tu ostatni margrabia askański
 *   Waldemar,
 * — w 1631 r. podpisano w Mieszkowicach układ między
 *   dwiema odległymi od siebie stronami,
 * — z murów miejskich zachował się fragment o długości
 *   półtora kilometra i średniej wysokości od pięciu
 *   do siedmiu metrów oraz Baszta Prochowa; stoją tu
 *   także średniowieczny kościół Przemienienia Pańskiego
 *   i odbudowany ratusz z początku XIX w.
 */
export const MIESZKOWICE: CityContent = {
  slug: "mieszkowice",
  h1: "Thermomix Mieszkowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mieszkowice — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Mieszkowicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mieszkowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mieszkowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mieszkowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Mieszkowice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Porozumienie nie polega na tym, że ktoś zmienia zdanie. Przy stole też nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mieszkowicach – jak wygląda prezentacja?",
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
      id: "rozne-gusta",
      heading: "Układ z 1631 roku",
      paragraphs: [
        "W 1631 roku w Mieszkowicach podpisano układ między dwiema odległymi od siebie stronami. W mieście, które i wtedy, i dziś liczyło kilka tysięcy mieszkańców.",
        "Najciekawsze jest w tym to, czego się nie stało. Żadna ze stron nie zmieniła zdania. Nie doszło do tego, żeby obie nagle zaczęły chcieć tego samego. Zostały przy swoim — i ustaliły dokładnie to, co dało się ustalić.",
        "W domu, w którym każdy je co innego, próbuje się zwykle odwrotnie i stąd bierze się cała awantura.",
        "Próbuje się doprowadzić do tego, żeby wszyscy chcieli tego samego obiadu. To się nie udaje nigdy i kończy się na dwa sposoby: albo kłótnią przy stole, albo gotowaniem trzech różnych rzeczy przez jedną osobę.",
        "Działa za to coś, co z zewnątrz wygląda na ustępstwo, a jest po prostu techniką: wspólna baza i osobne dodatki. Jedna rzecz robiona dla wszystkich, a to, co kto do niej dokłada albo z niej wyjmuje, zostaje po stronie jedzącego.",
        "Nie podam przykładów — to byłaby instrukcja kulinarna, a od tego nie jestem. Zasada jest ważniejsza od przykładu i działa w każdej kuchni, w której ktoś ją zastosuje.",
        "Druga rzecz jest jeszcze ważniejsza i najczęściej się ją pomija. Trzeba wiedzieć, czego kto nie je — i traktować to jako informację, a nie jako stanowisko do negocjacji. Lista „czego nie jemy” jest w większości domów zaskakująco krótka i to właśnie ona wyznacza całe pole, na którym da się cokolwiek ustalić.",
        "Nie oceniam przy tym niczyich wyborów i nie pytam o powody. Powód nie jest mi do niczego potrzebny — do dobrania dania wystarczy sama informacja, a reszta to nie moja sprawa.",
        "Uczciwie o drugiej stronie, bo to nie jest zachęta do kapitulacji. „Wspólna baza i osobne dodatki” nie znaczy, że jedna osoba ma gotować osobno dla każdego. Gotowanie na życzenie jest obciążeniem, które spada zawsze na tę samą osobę, i dlatego kończy się po kilku tygodniach — a potem wraca kłótnia, tylko z większym zmęczeniem.",
        "Na koniec o urządzeniu i bez przesady. Ono nie rozstrzygnie sporu o smak i nikogo nie przekona do niczego.",
        "Ułatwia dokładnie jedną rzecz: zrobienie wspólnej bazy bez stania przy garnku. Czas, który przez to zostaje, można przeznaczyć na to, co przy takim stole naprawdę robi różnicę — czyli na dodatki. To wszystko. Realne, ale niewielkie, i wolę tak to nazwać.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mieszkowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was ktoś nie je. Wystarczy sama lista — o powody nie pytam i nie są mi potrzebne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mieszkowicach"),
    sekcjaRaty("w Mieszkowicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mieszkowic",
      paragraphs: [
        "Mieszkowice leżą w powiecie gryfińskim, około piętnastu kilometrów na wschód od Odry, i są miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad trzy tysiące trzystu mieszkańców na pięciu i trzech dziesiątych kilometra kwadratowego, pięćdziesiąt metrów nad poziomem morza, a cała gmina blisko sześć i pół tysiąca osób na dwustu trzydziestu ośmiu kilometrach kwadratowych, w dwudziestu sześciu miejscowościach. Pierwsza wzmianka o mieście pochodzi z dokumentu z 1295 roku; wcześniej należało do kasztelanii cedyńskiej, a prawa miejskie nadał mu pod koniec trzynastego wieku margrabia Albrecht III. W 1319 roku zmarł tu ostatni margrabia askański Waldemar, a w 1631 podpisano w Mieszkowicach układ między dwiema odległymi od siebie stronami. Z murów miejskich zachował się fragment o długości półtora kilometra i średniej wysokości od pięciu do siedmiu metrów oraz Baszta Prochowa; stoją tu także średniowieczny kościół Przemienienia Pańskiego i odbudowany ratusz z początku dziewiętnastego wieku.",
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

  districtsHeading: "Do których części Mieszkowic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — w obrębie dawnych murów i poza nimi — i do wszystkich dwudziestu sześciu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Mieszkowice też przyjadę",
  nearbyParagraphs: [
    "Chojna i Myślibórz są tuż obok, a Gryfino i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chojna", "Myślibórz", "Gryfino", "Szczecin"],

  about: blokOMnie("do Mieszkowic", "w Mieszkowicach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mieszkowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sześciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Mieszkowice w powiecie gryfińskim w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Mieszkowicach"),
    {
      question: "Jak ugotować jeden obiad, gdy w domu każdy je co innego?",
      answer:
        "Nie przez doprowadzenie do tego, żeby wszyscy chcieli tego samego — to się nie udaje nigdy. Działa wspólna baza i osobne dodatki: jedna rzecz robiona dla wszystkich, a to, co kto do niej dokłada albo z niej wyjmuje, zostaje po stronie jedzącego. Ważniejsza jest jednak lista tego, czego kto nie je — warto traktować ją jako informację, a nie stanowisko do negocjacji.",
    },
    {
      question: "Czy pytasz, dlaczego ktoś czegoś nie je?",
      answer:
        "Nie. Wystarczy mi sama lista i nie oceniam niczyich wyborów. Powód nie jest mi do niczego potrzebny — do dobrania dania wystarczy informacja, a reszta to nie moja sprawa. Proszę tylko, żeby powiedzieć o tym przy umawianiu, a nie w progu, bo składniki przywożę ze sobą.",
    },
  ],

  geo: { lat: 52.783, lng: 14.483 },
};
