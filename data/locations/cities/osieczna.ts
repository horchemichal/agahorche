import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * OSIECZNA — powiat leszczyński, woj. wielkopolskie.
 * ⚠⚠⚠ ISTNIEJE DRUGA OSIECZNA: GMINA WIEJSKA
 *   W WOJ. POMORSKIM, POWIAT STAROGARDZKI, z siedzibą
 *   we WSI Osieczna. TO RDZEŃ KĄTA.
 *   ⚠⚠⚠ LICZB GMINY POMORSKIEJ NIE PODAJĘ
 *   I NIE PORÓWNUJĘ — porównania liczbowe między
 *   jednostkami mam zajęte (Stęszew). PODAJĘ TYP,
 *   POWIAT, WOJEWÓDZTWO I TO, ŻE SIEDZIBĄ JEST WIEŚ.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ OSIECZNA
 *   W WIELKOPOLSCE NIE MA — starostwo podaje wprost,
 *   że powiat leszczyński tworzy 7 gmin i ma 2 miasta.
 * MIASTO: 2 440 mieszkańców (GUS 31.12.2024), 4,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   512,6 os./km², iloraz z 4,8 km² daje 508,3.
 *   ROZBIEŻNOŚĆ 4,27.
 *   ⚠⚠⚠ POWIERZCHNI ODTWORZONEJ (4,76 km²)
 *   NIE PODAJĘ — to rekonstrukcja, nie cytat.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 9 322 osoby, 128,7 km², gęstość
 *   72 os./km².
 *   ⚠ [ZW — 9 322 / 128,7 = 72,4. Różnica 0,43.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 17 SOŁECTW i 29 MIEJSCOWOŚCI
 *   (GUS Vademecum).
 *   ⚠⚠⚠ INNE REJESTRY PODAJĄ 31 I 28 — RÓŻNIC TYCH
 *   NIE OPISUJĘ, kąt „cztery rejestry, cztery liczby"
 *   ZAJĘTY (Kleczew).
 *   ⚠⚠ OBRĘBÓW (17) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI (część): Kąkolewo, Świerczyna,
 *   Drzeczkowo, Grodzisko, Jeziorki, Kąty, Kleszczewo,
 *   Kopanina, Kowale, Łoniewo, Maciejewo, Miąskowo,
 *   Popowo Wonieskie, Trzebania, Witosław, Wojnowice,
 *   Wolkowo, Nowe Wolkowo, Ziemnice, Berdychowo,
 *   Adamowo, Dobramyśl, Frankowo, Górka, Ustronie.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 22,9 %. PODAJĘ.
 * PRAWA MIEJSKIE: 1370 R. ⚠ NADAWCY I PIERWSZEJ
 *   WZMIANKI NIE USTALONO [NP].
 * ⚠ GEO: 51,9040 / 16,6783 (miasto i gmina identyczne).
 *
 * ⚠⚠⚠ ODMIANA — PRZYMIOTNIKOWA, RODZAJ ŻEŃSKI:
 *   D. do OSIECZNEJ · C. OSIECZNEJ · B. OSIECZNĄ ·
 *   N. OSIECZNĄ · Ms. w OSIECZNEJ.
 *   WZORZEC: zielona → zielonej → zieloną.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: TRAKTOWANIE NAZWY JAK
 *   RZECZOWNIKA RODZAJU NIJAKIEGO — „w Osiecznie",
 *   „o Osiecznie". Forma pochodzi od nieistniejącej
 *   nazwy „Osieczno". WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ BŁĄD DRUGI: „do Osieczny".
 *   ⚠⚠ BŁĄD TRZECI: nieodmienianie — „w Osieczna".
 *   ⚠⚠⚠ ŹRÓDŁA URZĘDOWE UŻYWAJĄ NIEMAL WYŁĄCZNIE
 *   MIANOWNIKA, a jedyna napotkana forma odmieniona
 *   BYŁA BŁĘDNA. ⚠⚠⚠ NIE CYTUJĘ JEJ I NIE WSKAZUJĘ
 *   PALCEM ŹRÓDŁA — podaję samą regułę.
 *   ⚠⚠⚠ PRZYMIOTNIKA OD NAZWY NIE UŻYWAM —
 *   niepotwierdzony [NP], a problem jest głębszy:
 *   sama nazwa jest przymiotnikiem.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDNO POLE TO ZA MAŁO:
 *   Ogólnopolski rejestr prowadzi karty gmin
 *   pod adresami budowanymi z samej nazwy. Dla czterech
 *   miast tej fali wystarczyła nazwa. DLA OSIECZNEJ
 *   TRZEBA BYŁO DOPISAĆ WOJEWÓDZTWO, bo druga gmina
 *   Osieczna leży w pomorskiem.
 *   NAZWA PRZESTAŁA WYSTARCZAĆ JAKO IDENTYFIKATOR.
 *   POTRZEBNE BYŁO DRUGIE POLE.
 *   ⚠⚠ NIE PODAJĘ LICZB GMINY POMORSKIEJ.
 *   ⚠⚠ NIE PODAJĘ ADRESU STRONY REJESTRU ANI JEGO
 *   NAZWY — mówię „ogólnopolski rejestr".
 *
 * KĄT: JEDNO POLE TO ZA MAŁO — o tym, że nazwa bez
 * drugiego wyróżnika nie wystarcza ani w rejestrze,
 * ani na liście zakupów, ani na pojemniku. Kąt
 * z Osiecznej: dwie gminy jednej nazwy w dwóch
 * województwach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że istnieją dwie Osieczne — ta w powiecie
 *   leszczyńskim i gmina wiejska w pomorskiem —
 *   i że rejestr musiał dopisać województwo,
 *   żeby je rozróżnić. TO JEST RDZEŃ,
 * — że sama nazwa przestała wtedy być
 *   identyfikatorem,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „mąka", „ser",
 *   „ta zupa" — jedno pole, które nie rozstrzyga,
 * — ⚠⚠ ŻE KOSZT JEST REALNY: druga wizyta w sklepie,
 *   niepotrzebny zakup, danie zrobione z czegoś
 *   innego, niż miało być,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: dopisać jedno słowo tam,
 *   gdzie nazwa się powtarza. Nie do wszystkiego —
 *   tylko tam, gdzie naprawdę są dwie rzeczy o tej
 *   samej nazwie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie warto podpisywać
 *   wszystkiego. Rzeczy zjadane jutro nie wymagają
 *   opisu; opisu wymaga to, co wraca po tygodniach,
 * — ⚠⚠⚠ O TYM, JAK DŁUGO CO SIĘ PRZECHOWUJE,
 *   NIE PISZĘ W OGÓLE — TO NIE MOJA ROLA. MÓWIĘ
 *   TO WPROST JEDNYM ZDANIEM,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie też nie
 *   odgadnie, co ktoś miał na myśli. Wykona przepis,
 *   który dostanie, i nie sprawdzi, czy chodziło
 *   o inny rodzaj składnika.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ — kąt
 *   zajęty (Sompolno). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam DWIE NAZWY
 *   JEDNEGO MIEJSCA konkurowały; tu JEDNA NAZWA
 *   OPISUJE DWA RÓŻNE MIEJSCA. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NAZWY DLA WTAJEMNICZONYCH — kąt zajęty
 *   (Książ Wielkopolski). Tam nazwa działała TYLKO
 *   DLA SWOICH; tu nie działa DLA NIKOGO bez drugiego
 *   pola. ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO JEDNA LICZBA, DWA RÓŻNE MIASTA — kąt
 *   zajęty (Stęszew). DLATEGO LICZB DRUGIEJ OSIECZNEJ
 *   NIE PODAJĘ.
 * — ⚠⚠ ZERO PRAWA DOSTAŁA MIEJSCOWOŚĆ O INNEJ NAZWIE
 *   — kąt zajęty (Borek Wielkopolski).
 * — ⚠⚠ ZERO OBJAŚNIENIE DOPISANE PÓŹNIEJ — kąt zajęty
 *   (Tuliszków).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   ANI O CZASIE PRZECHOWYWANIA. ⚠⚠⚠ TU RYZYKO JEST
 *   NAJWIĘKSZE W TEJ FALI, BO KĄT DOTYCZY PODPISYWANIA
 *   POJEMNIKÓW. PISZĘ WYŁĄCZNIE O ROZPOZNAWANIU
 *   ZAWARTOŚCI, NIGDY O TRWAŁOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 4,76 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczb gminy Osieczna w pomorskiem.
 * — NIE PODAJĘ nazwy ani adresu rejestru.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PODAJĘ nadawcy praw miejskich ani pierwszej
 *   wzmianki.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PISZĘ o czasie przechowywania żywności.
 * — NIE PODAJĘ największej wsi ani wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Osieczna leży w powiecie leszczyńskim i liczy
 *   2 440 mieszkańców (GUS, 31.12.2024) na 4,8 km²,
 * — cała gmina miejsko-wiejska to 9 322 osoby
 *   na 128,7 km², czyli 72 osoby na kilometr
 *   kwadratowy, przy lesistości 22,9 %,
 * — gmina ma 17 sołectw i 29 miejscowości,
 * — powiat leszczyński tworzy siedem gmin i ma dwa
 *   miasta,
 * — prawa miejskie Osieczna otrzymała w 1370 r.,
 * — druga Osieczna — gmina wiejska z siedzibą we wsi
 *   o tej samej nazwie — leży w powiecie starogardzkim
 *   w województwie pomorskim,
 * — w gminie leżą m.in. Kąkolewo, Świerczyna,
 *   Drzeczkowo, Grodzisko, Jeziorki, Kąty, Łoniewo,
 *   Trzebania, Wolkowo i Nowe Wolkowo.
 */
export const OSIECZNA: CityContent = {
  slug: "osieczna",
  h1: "Thermomix Osieczna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Osieczna — cena i prezentacja",
  seoDescription:
    "Thermomix w Osiecznej w powiecie leszczyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Osieczna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Osiecznej pod Lesznem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Osiecznej w powiecie leszczyńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedemnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Osieczna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sama nazwa nie wystarczyła. Rejestr musiał dopisać województwo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Osiecznej – jak wygląda prezentacja?",
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
      id: "jedno-pole",
      heading: "Jedno pole to za mało",
      paragraphs: [
        "Ogólnopolskie rejestry prowadzą karty gmin pod adresami budowanymi z samej nazwy. Dla większości miast tej okolicy nazwa wystarcza. Dla Osiecznej — nie: do adresu trzeba było dopisać nazwę województwa.",
        "Powód jest prosty. Istnieje druga Osieczna: gmina wiejska w powiecie starogardzkim w województwie pomorskim, z siedzibą we wsi o dokładnie tej samej nazwie. Zdanie „siedzibą gminy Osieczna jest Osieczna” jest prawdziwe w obu przypadkach i nie mówi zupełnie nic. Nazwa przestała być identyfikatorem i potrzebne było drugie pole.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, w którym dwie nazwy jednego miejsca konkurowały ze sobą, aż jedna wygrała. Tutaj jest odwrotnie — jedna nazwa opisuje dwa różne miejsca i żadna z nich nie ustąpi. I drugie rozróżnienie: pisałam też o nazwach, które działają tylko dla wtajemniczonych; ta działa dla wszystkich tak samo źle, dopóki nie dołoży się drugiego słowa.",
        "Piszę o tym, bo w kuchni mamy dokładnie takie nazwy i codziennie nas kosztują.",
        "„Mąka” na liście zakupów. Jaka mąka? W domu są zwykle dwie albo trzy i nie są zamienne. „Ser” — a chodziło o zupełnie inny. „Ta zupa” w rozmowie przez telefon, gdy ktoś stoi już przy półce. „Przyprawa do tego, co robiłaś w niedzielę”. Każda z tych nazw ma jedno pole tam, gdzie potrzebne są dwa.",
        "Koszt jest zupełnie realny i wcale nie symboliczny: druga wizyta w sklepie, produkt kupiony niepotrzebnie, bo taki już w domu leżał, albo danie zrobione z czegoś innego, niż miało być. Nikt się przy tym nie kłóci o nazwy — po prostu wychodzi inaczej.",
        "Ruch jest jeden i polega na dopisaniu jednego słowa tam, gdzie nazwa się powtarza. Nie wszędzie — tylko w tych miejscach, w których naprawdę macie w domu dwie rzeczy o tej samej nazwie. Zwykle takich miejsc jest kilka, nie kilkadziesiąt, i wystarczy raz je wyłapać.",
        "To samo dotyczy pojemników. Podpis „zupa” nie mówi nic, jeśli w tym miesiącu były trzy różne. Warto napisać, co to konkretnie jest i z którego dnia — po to, żeby to rozpoznać bez otwierania, a nie z żadnego innego powodu. O tym, jak długo co się przechowuje, nie piszę w ogóle: to nie jest moja rola i nie będę udawać, że jest.",
        "Uczciwie o drugiej stronie, bo podpisywanie wszystkiego kończy się porzuceniem wszystkiego. Rzeczy, które zjecie jutro, nie wymagają żadnego opisu — opisu wymaga to, co wraca po tygodniach i zdąży wypaść z pamięci. Jeśli system jest większy niż potrzeba, nikt go nie utrzyma, łącznie z osobą, która go wymyśliła.",
        "I uczciwie o sprzęcie, bo tu nie ma cudów. Thermomix wykona przepis, który dostanie, i nie sprawdzi, czy chodziło o inny rodzaj składnika — dla urządzenia „mąka” to po prostu to, co wsypiecie. Precyzja wykonania jest duża, ale zaczyna się dopiero za momentem, w którym ktoś już rozstrzygnął, o co chodziło.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Osiecznej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Osiecznej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Osiecznej",
      paragraphs: [
        "Osieczna leży w powiecie leszczyńskim i liczy 2 440 mieszkańców (GUS, 31.12.2024) na czterech i ośmiu dziesiątych kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 9 322 osoby na stu dwudziestu ośmiu i siedmiu dziesiątych kilometra kwadratowego, czyli siedemdziesiąt dwie osoby na kilometr, przy lesistości dwudziestu dwóch i dziewięciu dziesiątych procenta. Ma siedemnaście sołectw i dwadzieścia dziewięć miejscowości. Powiat leszczyński tworzy siedem gmin i ma dwa miasta, a Osieczna jest jednym z nich; prawa miejskie otrzymała w 1370 roku.",
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

  districtsHeading: "Do których części Osiecznej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemnastu sołectw w gminie. Nazywają się między innymi: Kąkolewo, Świerczyna, Drzeczkowo, Grodzisko, Jeziorki, Kąty, Kleszczewo, Kopanina, Kowale, Łoniewo, Maciejewo, Miąskowo, Popowo Wonieskie, Trzebania, Witosław, Wojnowice, Wolkowo, Nowe Wolkowo i Ziemnice. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza: druga Osieczna — gmina wiejska z siedzibą we wsi o tej samej nazwie — leży w powiecie starogardzkim w województwie pomorskim, więc samo „gmina Osieczna” niczego nie rozstrzyga; przy umawianiu warto powiedzieć „Osieczna pod Lesznem” albo „w powiecie leszczyńskim”. Druga, językowa i ważna: nazwa odmienia się jak przymiotnik, czyli „do Osiecznej”, „w Osiecznej”, „nad Osieczną” — a nie „w Osiecznie”, bo ta forma pochodziłaby od nieistniejącej nazwy „Osieczno”. To najczęstszy błąd przy tej nazwie i zdarza się nawet serwisom, które poza tym odmieniają poprawnie.",
  ],
  districts: [],

  nearbyHeading: "Poza Osieczną też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Leszna, Rydzyny, Śmigla, Kościana, Gostynia i Ponieca — wszędzie bezpłatnie, tak samo jak w samej Osiecznej.",
  ],
  nearbyTowns: ["Leszno", "Rydzyna", "Śmigiel", "Kościan", "Gostyń", "Poniec"],

  about: blokOMnie("do Osiecznej", "w Osiecznej i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Osiecznej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Pierwsza: druga Osieczna, gmina wiejska, leży w powiecie starogardzkim w pomorskiem — warto więc powiedzieć „Osieczna pod Lesznem”. Druga, językowa: nazwa odmienia się jak przymiotnik, czyli „do Osiecznej” i „w Osiecznej”, a nie „w Osiecznie”.",
    },
    ...faqWspolne("w Osiecznej"),
    {
      question: "Ciągle kupuję nie to, co trzeba, albo to samo drugi raz. Jak to naprawić?",
      answer:
        "Najczęściej wystarczy dopisać na liście jedno słowo. Problemem nie jest pamięć, tylko nazwa, która ma jedno pole tam, gdzie potrzeba dwóch: „mąka”, choć w domu są trzy i nie są zamienne, „ser”, choć chodziło o zupełnie inny. Osieczna jest tu dobrym obrazem: ogólnopolski rejestr musiał dopisać do adresu nazwę województwa, bo druga gmina Osieczna leży w pomorskiem — sama nazwa przestała wystarczać. Ruch jest prosty i nie polega na wprowadzaniu systemu: wyłapcie te kilka miejsc, w których naprawdę macie w domu dwie rzeczy o tej samej nazwie, i tam dopiszcie drugie słowo. W pozostałych zostawcie, jak jest — system większy niż potrzeba zawsze upada.",
    },
    {
      question: "Czy warto podpisywać pojemniki z jedzeniem?",
      answer:
        "Warto, ale tylko te, które wracają po dłuższym czasie — po to, żeby rozpoznać zawartość bez otwierania. Podpis „zupa” nie mówi nic, jeśli w tym miesiącu były trzy różne; lepiej napisać, co to konkretnie jest i z którego dnia. Rzeczy, które zjecie jutro, nie wymagają żadnego opisu i podpisywanie wszystkiego kończy się zwykle porzuceniem wszystkiego. Dodam wprost: o tym, jak długo co się przechowuje, nie piszę i nie doradzam — to nie jest moja rola i nie będę udawać, że jest.",
    },
  ],

  geo: { lat: 51.904, lng: 16.6783 },
};
