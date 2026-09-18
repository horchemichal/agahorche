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
 * CZERNIEJEWO — powiat gnieźnieński, woj. wielkopolskie.
 * ⚠⚠ NAZWA BYWA MYLONA Z PODOBNYMI NAZWAMI
 *   NA „CZERN-". ⚠ KONKRETNYCH MIEJSCOWOŚCI
 *   NIE WYMIENIAM — nie zweryfikowano [NP].
 *   MÓWIĘ OGÓLNIE I ZALECAM DOPISYWANIE POWIATU.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA.
 * MIASTO: 2 554 mieszkańców (GUS 31.12.2024),
 *   10,2 km², gęstość 250,6 os./km², 110 m n.p.m.
 *   ⚠ [ZW — 2 554 / 10,2 = 250,4. Różnica 0,2.
 *   DOMYKA SIĘ. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 * CAŁA GMINA: 7 237 osób, 111,87 km², gęstość
 *   65 os./km².
 *   ⚠ [ZW — 7 237 / 111,87 = 64,7. Różnica 0,3.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ POWIERZCHNI 112,01 km² (en.wikipedia)
 *   NIE UŻYWAM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 16 SOŁECTW i 27 MIEJSCOWOŚCI
 *   (GUS Vademecum, zgodnie z TERYT).
 *   ⚠⚠⚠ OBRĘBÓW EWIDENCYJNYCH JEST 17, CZYLI WIĘCEJ
 *   NIŻ SOŁECTW. ⚠⚠⚠ LICZBY TEJ NIE PODAJĘ —
 *   kąt „samorząd dzieli drobniej niż kataster"
 *   ZAJĘTY (Lwówek), a Margonin wykorzystał już
 *   proporcję odwrotną. ZERO TEGO WĄTKU.
 *   MIEJSCOWOŚCI (część): Czeluścin, Gębarzewo,
 *   Gębarzewko, Golimowo, Goraniec, Goranin, Graby,
 *   Kąpiel, Kosmowo, Kosowo, Nidom, Nowy Las,
 *   Pakszyn, Pakszynek, Pawłowo, Rakowo,
 *   Szczytniki Czerniejewskie.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 30,9 %. PODAJĘ.
 *   ⚠⚠⚠ POWIERZCHNI LASÓW NIE PRZELICZAM I NIE
 *   PORÓWNUJĘ Z MIASTEM ANI Z SĄSIEDNIĄ GMINĄ —
 *   porównania między jednostkami mam zajęte
 *   (Stęszew).
 * ⚠ GEO: 52,4262 / 17,4891 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI, TEMAT NA -w-:
 *   D. do CZERNIEJEWA · Ms. w CZERNIEJEWIE ·
 *   N. Czerniejewem · C. Czerniejewu.
 *   ⚠ POTWIERDZENIA: „nazwa Czerniejewa", „właścicielka
 *   Czerniejewa", „w Czerniejewie", „ożywienia
 *   Czerniejewem" — KOMPLET PIĘCIU FORM.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: NIEODMIENIANIE
 *   W KONTEKSTACH KATALOGOWYCH — „historia
 *   Czerniejewo", „zabytki Czerniejewo". Nazwa kończy
 *   się na -o i bywa brana za nieodmienną, a nie jest.
 *   WSPOMINAM.
 *   ⚠⚠ BŁĄD DRUGI: „w Czerniejewiu", „w Czerniejewu".
 *   ⚠⚠ BŁĄD TRZECI: „czerniejowski" zamiast
 *   CZERNIEJEWSKI.
 *   PRZYMIOTNIK: CZERNIEJEWSKI — POTWIERDZONY
 *   URZĘDOWO. UŻYWAM.
 *   ⚠⚠⚠ NIE TŁUMACZĘ, ŻE DOWODZI GO NAZWA WSI
 *   SZCZYTNIKI CZERNIEJEWSKIE — kąt „dowód leży
 *   w sąsiedniej nazwie" ZAJĘTY (Skoki). NAZWĘ WSI
 *   WYMIENIAM W WYLICZENIU, BEZ KOMENTARZA.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PRAWA MIEJSKIE: PRZED 1390 R., DOKŁADNA DATA
 *     NIEZNANA. PODAJĘ TAK, JAK JEST.
 *     ⚠⚠⚠ FIGURY Z MNOGOŚCI DATOWAŃ NIE ROBIĘ —
 *     kąty „cztery rejestry, cztery liczby" (Kleczew)
 *     i „data przyjęta, nie znaleziona" (Krobia)
 *     ZAJĘTE.
 *   — PAŁAC: WZNIESIONY W LATACH 1771–1775
 *     NA FUNDAMENTACH DAWNEGO ZAMKU.
 *   — PORTYK: „JUŻ W LATACH DZIEWIĘĆDZIESIĄTYCH
 *     XVIII WIEKU". TO RDZEŃ KĄTA.
 *     ⚠⚠ ŹRÓDŁO NIE PODAJE ROKU DZIENNEGO ANI
 *     ROCZNEGO — PISZĘ „w latach dziewięćdziesiątych
 *     XVIII wieku", NIE WYMYŚLAM DATY.
 *     ⚠⚠ ODSTĘP OKREŚLAM OSTROŻNIE: „najwyżej
 *     dwadzieścia lat po ukończeniu budynku".
 *   ⚠⚠⚠ WŁAŚCICIELI I FUNDATORA NIE WYMIENIAM
 *     Z NAZWISKA ANI ZE STOPNIA WOJSKOWEGO —
 *     ZERO POSTACI I ZERO WĄTKU MILITARNEGO.
 *   ⚠⚠⚠ ETYMOLOGII OD IMIENIA ZAŁOŻYCIELA NIE
 *     ROZWIJAM — legendarna, a kąt „nazwisko
 *     od miejsca" ZAJĘTY (Miłosław).
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠ RZEKI, JEZIORA, RATUSZA I RYNKU NIE USTALONO
 *     [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TO, CO NAJBARDZIEJ RZUCA SIĘ
 *   W OCZY, DOBUDOWANO PÓŹNIEJ:
 *   PAŁAC W CZERNIEJEWIE WZNIESIONO W LATACH
 *   1771–1775. PORTYK — czyli ta część fasady, którą
 *   widać pierwszą i którą się ten budynek zapamiętuje
 *   — POWSTAŁ DOPIERO W LATACH DZIEWIĘĆDZIESIĄTYCH
 *   XVIII W., NAJWYŻEJ DWADZIEŚCIA LAT PÓŹNIEJ.
 *   BUDYNEK BYŁ SKOŃCZONY I UŻYWANY, A JEGO
 *   NAJBARDZIEJ ROZPOZNAWALNY ELEMENT JESZCZE NIE
 *   ISTNIAŁ.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE BYŁO TO ZAPLANOWANE
 *   OD POCZĄTKU ANI ŻE NIE BYŁO — nie ustalono.
 *
 * KĄT: NIC NIE JEST SKOŃCZONE W DNIU ODBIORU
 * — o tym, że najlepsze rozwiązania w kuchni przychodzą
 * po roku używania, a nie w dniu montażu. Kąt
 * z Czerniejewa: pałac 1771–1775, portyk dwadzieścia
 * lat później.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pałac zbudowano w latach 1771–1775, a portyk
 *   dostawiono w latach dziewięćdziesiątych XVIII w.
 *   TO JEST RDZEŃ,
 * — że to element, po którym budynek się rozpoznaje,
 *   a jednak nie było go na starcie,
 * — ⚠⚠ ŻE W KUCHNI JEST TAK SAMO: w dniu montażu
 *   nikt nie wie, gdzie naprawdę będzie stał czajnik
 *   i po której stronie zlewu suszy się naczynia,
 * — ⚠⚠ ŻE TEJ WIEDZY NIE DA SIĘ MIEĆ WCZEŚNIEJ —
 *   bierze się z używania, nie z planowania,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie urządzać wszystkiego
 *   naraz. Zostawić część decyzji i część budżetu
 *   na „za rok", kiedy będzie już wiadomo, czego
 *   brakuje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: odkładanie w
 *   nieskończoność też nie działa. „Za rok" ma sens
 *   tylko wtedy, gdy ktoś ustali, kiedy do tego
 *   wraca,
 * — ⚠ UCZCIWIE O SPRZĘCIE: nie warto kupować
 *   wszystkich akcesoriów na starcie. Najpierw używać,
 *   potem dokupić to, czego naprawdę brakuje.
 *   MÓWIĘ TO WPROST, CHOĆ DZIAŁA PRZECIWKO MNIE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAJMŁODSZY PRZY RYNKU — kąt zajęty
 *   (Szamocin). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam porównywano
 *   RÓŻNE BUDYNKI MIĘDZY SOBĄ; tu chodzi o JEDEN
 *   BUDYNEK I JEGO WŁASNĄ CZĘŚĆ. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NARZĘDZIE TRWALSZE OD ŚCIAN — kąt
 *   zajęty (Poniec). Tam PRZEDMIOT był starszy
 *   od budynku; tu CZĘŚĆ BUDYNKU jest od niego
 *   młodsza. ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO INSTYTUCJA MŁODSZA OD SWOICH ŚCIAN —
 *   kąt zajęty.
 * — ⚠⚠ ZERO OBJAŚNIENIE DOPISANE PÓŹNIEJ — kąt zajęty
 *   (Tuliszków).
 * — ⚠⚠ ZERO SAMORZĄD DZIELI DROBNIEJ NIŻ KATASTER —
 *   kąt zajęty (Lwówek). DLATEGO LICZBY OBRĘBÓW
 *   NIE PODAJĘ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO NAMAWIANIA NA REMONT ANI OCENIANIA
 *   CZYJEJŚ KUCHNI. ⚠⚠⚠ TU RYZYKO JEST PODWYŻSZONE,
 *   BO KĄT DOTYCZY URZĄDZANIA. PISZĘ WYŁĄCZNIE
 *   O KOLEJNOŚCI DECYZJI I O TYM, ŻEBY NIE KUPOWAĆ
 *   WSZYSTKIEGO NARAZ — CZYLI PRZECIW WYDAWANIU,
 *   NIE ZA NIM.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO KOMENTARZY
 *   DO NAZW MIEJSCOWOŚCI O ETNICZNYM BRZMIENIU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PRZELICZAM powierzchni lasów.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ dokładnej daty praw miejskich.
 * — NIE PODAJĘ roku powstania portyku — tylko
 *   dziesięciolecie za źródłem.
 * — NIE TWIERDZĘ, czy portyk planowano od początku.
 * — NIE WYMIENIAM właścicieli ani fundatora.
 * — NIE ROZWIJAM etymologii nazwy.
 * — NIE PODAJĘ największej wsi, rzeki ani jeziora.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Czerniejewo leży w powiecie gnieźnieńskim, liczy
 *   2 554 mieszkańców (GUS, 31.12.2024) na 10,2 km²,
 *   czyli 250,6 osoby na kilometr kwadratowy, i leży
 *   110 m n.p.m.,
 * — cała gmina miejsko-wiejska to 7 237 osób
 *   na 111,87 km², czyli 65 osób na kilometr
 *   kwadratowy, przy lesistości 30,9 %,
 * — gmina ma 16 sołectw i 27 miejscowości,
 * — prawa miejskie miasto uzyskało przed 1390 r.,
 *   a dokładna data nie jest znana,
 * — pałac wzniesiono w latach 1771–1775
 *   na fundamentach dawnego zamku, a portyk dostawiono
 *   w latach dziewięćdziesiątych XVIII w.,
 * — w gminie leżą m.in. Goraniec i Goranin, Kosowo
 *   i Kosmowo, Gębarzewo i Gębarzewko, Pakszyn
 *   i Pakszynek, Kąpiel, Nowy Las oraz Szczytniki
 *   Czerniejewskie.
 */
export const CZERNIEJEWO: CityContent = {
  slug: "czerniejewo",
  h1: "Thermomix Czerniejewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czerniejewo — cena i prezentacja",
  seoDescription:
    "Thermomix w Czerniejewie w powiecie gnieźnieńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czerniejewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czerniejewie pod Gnieznem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czerniejewa w powiecie gnieźnieńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Czerniejewo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Budynek z lat 1771–1775. To, po czym się go poznaje, dostawiono później.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czerniejewie – jak wygląda prezentacja?",
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
      id: "nic-nie-jest-skonczone",
      heading: "Nic nie jest skończone w dniu odbioru",
      paragraphs: [
        "Pałac w Czerniejewie wzniesiono w latach 1771–1775, na fundamentach wcześniejszego zamku. Portyk — czyli ta część fasady, którą widzi się pierwszą i po której ten budynek się w ogóle zapamiętuje — powstał dopiero w latach dziewięćdziesiątych XVIII wieku.",
        "Najwyżej dwadzieścia lat później. Przez te dwadzieścia lat budynek był skończony, odebrany i używany, a jego najbardziej rozpoznawalnego elementu jeszcze nie było. Czy planowano go od początku i tylko dołożono z opóźnieniem, czy pomysł przyszedł po latach — tego nie ustaliłam.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o budynku, który przy rynku okazał się najmłodszy z sąsiadów — tam porównywałam różne budynki między sobą. Tutaj chodzi o jeden budynek i jego własną część. I drugie rozróżnienie: pisałam też o przedmiocie starszym od ścian, w których stoi; tu jest odwrotnie — to ściany są starsze od tego, co je zdobi.",
        "Piszę o tym, bo w kuchni dzieje się dokładnie to samo i nikt nas na to nie przygotowuje.",
        "W dniu montażu wszystko jest ustalone: szafki tu, blat tam, gniazdka według projektu. I nikt jeszcze nie wie rzeczy najważniejszych. Gdzie naprawdę będzie stał czajnik. Po której stronie zlewu suszą się naczynia, bo tak jest wygodniej lewej ręce. Że górna półka nad płytą jest bezużyteczna, bo nie da się na nią sięgnąć z garnkiem. Że najczęściej otwierana szuflada jest akurat ta, która wchodzi w drzwi.",
        "Tej wiedzy nie da się mieć wcześniej. Nie bierze się z planowania ani z oglądania zdjęć — bierze się z używania. Po roku gotowania wiadomo o własnej kuchni więcej niż po trzech miesiącach jej projektowania, i nie ma na to skrótu.",
        "Ruch jest jeden i polega na kolejności, nie na pieniądzach: nie urządzać wszystkiego naraz. Zostawić część decyzji — i część budżetu — na „za rok”, kiedy będzie już wiadomo, czego naprawdę brakuje. Wtedy kupuje się jedną rzecz, która rozwiązuje realny problem, zamiast pięciu, które miały rozwiązać problemy wyobrażone.",
        "Uczciwie o drugiej stronie, bo odkładanie w nieskończoność to nie jest cnota. „Za rok” działa tylko wtedy, gdy ktoś powie, kiedy dokładnie do tego wraca — inaczej kuchnia zostaje niedokończona na dziesięć lat i wszyscy się do niej przyzwyczajają. Termin jest tu ważniejszy od planu.",
        "I uczciwie o sprzęcie, choć ta rada działa przeciwko mnie. Nie warto kupować wszystkich akcesoriów na starcie. Najpierw używać przez kilka miesięcy, zobaczyć, co naprawdę gotujecie, a dopiero potem dokupić to jedno, czego brakuje. Zestaw kupiony „żeby było” zwykle w większości leży nieużywany — i wolę to powiedzieć teraz niż udawać, że komplet od pierwszego dnia jest komukolwiek potrzebny.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czerniejewie?",
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
    sekcjaCena("w Czerniejewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Czerniejewa",
      paragraphs: [
        "Czerniejewo leży w powiecie gnieźnieńskim, liczy 2 554 mieszkańców (GUS, 31.12.2024) na dziesięciu i dwóch dziesiątych kilometra kwadratowego, czyli dwieście pięćdziesiąt i sześć dziesiątych osoby na kilometr kwadratowy, i leży sto dziesięć metrów nad poziomem morza. Cała gmina miejsko-wiejska to 7 237 osób na stu jedenastu i osiemdziesięciu siedmiu setnych kilometra kwadratowego, czyli sześćdziesiąt pięć osób na kilometr, przy lesistości trzydziestu i dziewięciu dziesiątych procenta. Ma szesnaście sołectw i dwadzieścia siedem miejscowości. Prawa miejskie miasto uzyskało przed 1390 rokiem, a dokładna data nie jest znana. Pałac wzniesiono w latach 1771–1775 na fundamentach wcześniejszego zamku, a portyk dostawiono w latach dziewięćdziesiątych XVIII wieku.",
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

  districtsHeading: "Do których części Czerniejewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu sołectw w gminie. Nazywają się między innymi: Czeluścin, Gębarzewo, Gębarzewko, Golimowo, Goraniec, Goranin, Graby, Kąpiel, Kosmowo, Kosowo, Nidom, Nowy Las, Pakszyn, Pakszynek, Pawłowo, Rakowo i Szczytniki Czerniejewskie. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa i wyjątkowo ostra: w tej jednej gminie leżą osobno Goraniec i Goranin oraz osobno Kosowo i Kosmowo. To nie są zdrobnienia ani warianty tej samej nazwy, tylko cztery różne wsie, a odróżnia je jedna albo dwie litery — przy umawianiu warto powtórzyć nazwę na głos. Do tego dochodzą pary Gębarzewo i Gębarzewko oraz Pakszyn i Pakszynek. Druga, językowa: nazwa miasta kończy się na „o” i bywa brana za nieodmienną, a nie jest — mówi się „do Czerniejewa” i „w Czerniejewie”, nie „historia Czerniejewo”. Warto też dopisywać powiat, bo nazw zaczynających się na „Czern-” jest w Polsce sporo.",
  ],
  districts: [],

  nearbyHeading: "Poza Czerniejewo też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gniezna, Wrześni, Kłecka, Pobiedzisk, Nekli i Środy Wielkopolskiej — wszędzie bezpłatnie, tak samo jak w samym Czerniejewie.",
  ],
  nearbyTowns: ["Gniezno", "Września", "Kłecko", "Pobiedziska", "Nekla", "Środa Wielkopolska"],

  about: blokOMnie("do Czerniejewa", "w Czerniejewie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czerniejewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa, za to istotna: w gminie leżą osobno Goraniec i Goranin oraz osobno Kosowo i Kosmowo — cztery różne wsie, które dzieli jedna albo dwie litery, więc warto powtórzyć nazwę na głos. Językowo: „do Czerniejewa” i „w Czerniejewie”, bo nazwa się odmienia, mimo końcówki „o”.",
    },
    ...faqWspolne("w Czerniejewie"),
    {
      question: "Urządzam kuchnię od zera. Co kupić od razu, a z czym poczekać?",
      answer:
        "Od razu tylko to, bez czego nie da się gotować. Z resztą warto poczekać, bo w dniu montażu nie wiecie jeszcze rzeczy najważniejszych: gdzie naprawdę stanie czajnik, po której stronie zlewu suszą się naczynia i która półka okaże się bezużyteczna. Tej wiedzy nie da się mieć wcześniej — bierze się z używania, nie z planowania. Czerniejewo jest tu dobrym obrazem: pałac zbudowano w latach 1771–1775, a portyk, po którym ten budynek się w ogóle rozpoznaje, dostawiono dopiero w latach dziewięćdziesiątych XVIII wieku. Ruch jest prosty: zostawcie część decyzji i część budżetu na „za rok”. Z jednym zastrzeżeniem — „za rok” działa tylko wtedy, gdy ktoś ustali konkretny termin powrotu do tematu.",
    },
    {
      question: "Czy warto od razu kupić wszystkie akcesoria?",
      answer:
        "Nie warto i mówię to, choć działa przeciwko mnie. Najpierw używajcie przez kilka miesięcy tego, co jest w zestawie, i zobaczcie, co naprawdę gotujecie — a dopiero potem dokupcie to jedno, czego brakuje. Akcesoria kupione „żeby było” zwykle w większości leżą nieużywane i to są pieniądze wyrzucone dokładnie tak samo jak przy każdym innym sprzęcie. Na prezentacji też nie namawiam na komplet: pokazuję to, co jest w standardzie, i mówię wprost, kiedy coś dodatkowego ma sens, a kiedy nie.",
    },
  ],

  geo: { lat: 52.4262, lng: 17.4891 },
};
