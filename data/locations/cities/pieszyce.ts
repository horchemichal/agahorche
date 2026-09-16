import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * PIESZYCE — powiat dzierżoniowski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Pieszyce.
 * MIASTO: 6 753 mieszkańców (GUS 31.12.2024), 17,7 km².
 * CAŁA GMINA: 8 888 osób, 63,6 km², 4 wsie — Bratoszów,
 *   Kamionki, Piskorzów, Rościszów.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Poza miastem mieszka 2 135 osób.
 * ⚠⚠ GĘSTOŚCI NIE PODAJĘ CO DO DZIESIĘTNEJ — rachunek
 *   nie domyka się z serwisem: gmina 8 888 / 63,6 = 139,7,
 *   a serwis podaje 141. PISZĘ „OKOŁO STU CZTERDZIESTU".
 * ⚠⚠ DATY PRZEKSZTAŁCENIA GMINY MIEJSKIEJ W MIEJSKO-
 *   -WIEJSKĄ NIE USTALONO — NIE PODAJĘ ROKU.
 * ⚠ WYSOKOŚĆ: 296 m n.p.m. ⚠ GEO: 50,7167 / 16,5833.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM:
 *   M. Pieszyce (te Pieszyce) · D. PIESZYC (do Pieszyc)
 *   ⚠⚠⚠ „DO PIESZYCÓW" JEST BŁĘDEM — KOŃCÓWKA ZEROWA.
 *   C. Pieszycom · N. Pieszycami · Ms. w Pieszycach
 *   ⚠⚠⚠ ORZECZENIE W LICZBIE MNOGIEJ: „Pieszyce LEŻĄ",
 *   „Pieszyce SĄ", „TE Pieszyce".
 *   Przymiotnik: PIESZYCKI [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ PUŁAPKI HOMONIMICZNE:
 *   — WIEŚ PIESZYCE w gminie Świecie (kujawsko-pomorskie)
 *     — nazwa identyczna, potwierdzona.
 *   — ⚠⚠⚠ PIECHOWICE (dolnośląskie, powiat karkonoski) —
 *     też małe podgórskie miasto, nazwa bardzo bliska.
 *     NAJSILNIEJSZA PUŁAPKA W OBRĘBIE WOJEWÓDZTWA.
 *   — Bielawa i Dzierżoniów, 4–5 km stąd, w treściach
 *     o Górach Sowich stale zamieniane z Pieszycami.
 *   — Srebrna Góra (gmina Stoszowice) — końcówka dawnej
 *     linii kolejowej, przejmuje wyniki.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠ NOTA ETYCZNA: zapytania o Wielką Sowę i Góry Sowie
 *   masowo prowadzą do GMINY WALIM i wątku podziemi
 *   z lat czterdziestych. ⚠⚠⚠ TEGO WĄTKU NIE DOTYKAM
 *   ANI RAZU — wojskowy i wojenny, a przy tym dotyczy
 *   innej gminy. TWARDA GRANICA BEZWZGLĘDNA.
 *   Wielką Sowę i wieżę opisuję WYŁĄCZNIE jako szczyt
 *   i budowlę z wymiarami.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — Pierwsza wzmianka 1258 (forma „Peterswald").
 * — Prawa miejskie 1962. ⚠ AKTU PRAWNEGO ANI DNIA
 *   NIE USTALONO — podaję sam rok.
 * — ⚠⚠ ROZPIĘTOŚĆ „704 lata jako wieś, 64 jako miasto"
 *   PODAJĘ JAKO FAKT, ALE NIE ROBIĘ Z NIEJ KĄTA —
 *   „charakter nie wynika z nazwy" jest zajęte (Człopa).
 * — PAŁAC: 1336 udokumentowana curia murata (rycerz
 *   Arnold von Peterswalde); 1580–1582 Hans von
 *   Peterswalde buduje podpiwniczony dom mieszkalny
 *   o wymiarach 32,5 × 11,5 m; 1615–1617 Friedrich von
 *   Gellhorn wznosi pałac trójskrzydłowy, trzykondygnacyjny,
 *   z wieżą na osi fasady; ok. 1710 barokizacja (dachy
 *   mansardowe, pilastry); 1818 przebudowa budynku
 *   dworskiego; przed 1881 zamiana ogrodów regularnych
 *   na park krajobrazowy.
 *   ⚠ PODZAMCZE OTOCZONE FOSĄ: około 70 × 65–70 m.
 *   ⚠⚠ FOSY I MURÓW Z BASTEJAMI NIE ROZWIJAM — wątek
 *   obronny, a mury jako kąt są zajęte (Recz, Moryń).
 *   ⚠ WYMIARÓW PAŁACU PO 1617 R. NIE USTALONO.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWADZIEŚCIA OSIEM SZCZYTÓW:
 *   Zespół pałacowy wzniesiony w latach 1615–1617 miał
 *   28 SZCZYTÓW na trzech skrzydłach, a do tego
 *   boniowanie z naprzemiennych kwadratów i prostokątów.
 *   Dwadzieścia osiem szczytów to dwadzieścia osiem
 *   miejsc, w których dach styka się sam ze sobą —
 *   czyli tyle samo miejsc do obrobienia przy każdym
 *   remoncie. TO JEST CAŁY KĄT.
 *   ⚠ Parter: jadalnia, cztery pokoje, sień ze schodami.
 *
 * WIELKA SOWA — FAKTY DODATKOWE:
 * — Szczyt: 1 014,8 m n.p.m., najwyższy w Górach Sowich,
 *   leży w gminie Pieszyce.
 * — Wieża drewniana stała w latach 1885–1904, około 30 m
 *   na południe od obecnej.
 * — Obecna wieża kamienno-żelbetowa: 1906, wysokość 25 m,
 *   średnica 8 m u podstawy i 4 m w koronie — zwężenie
 *   dokładnie o połowę.
 * — ⚠ LICZBY STOPNI NIE USTALONO — trzy źródła
 *   niedostępne (429, błąd certyfikatu). NIE PODAJĘ.
 * — ⚠ ROKU ZAKOŃCZENIA REMONTU NIE PODAJĘ — źródła
 *   podają 2005 albo 2008.
 * — ⚠⚠ „NAJPIERW DREWNIANA, POTEM KAMIENNA" JAKO KĄT —
 *   ⚠⚠⚠ NIE UŻYWAM. To dokładnie kąt Sycowa z poprzedniej
 *   fali („dołożone po okresie używania"). TWARDA GRANICA.
 *   Obie wieże podaję jako fakty z datami i wymiarami.
 * — ⚠⚠ ZWĘŻENIA 8 → 4 m NIE UŻYWAM JAKO KĄTA — w tej
 *   samej fali piszę o dzwonnicy w Środzie Śląskiej,
 *   gdzie mur zwęża się identycznie. PODAJĘ JAKO FAKT.
 *
 * KOLEJ SOWIOGÓRSKA:
 * — 1900 — doprowadzona z Dzierżoniowa przez Bielawę
 *   do Srebrnej Góry; 1902–1903 przedłużenie;
 *   1974 zamknięcie; 1978 rozbiórka.
 *   ⚠⚠ ODSTĘPU CZTERECH LAT MIĘDZY ZAMKNIĘCIEM
 *   A ROZBIÓRKĄ NIE UŻYWAM JAKO KĄTA — ociera się
 *   o krótką listę sprzętu (Polanów) i o czas
 *   odtworzenia (Góra). PODAJĘ JAKO FAKT.
 *
 * ⚠⚠ TKACTWA I PRZEMYSŁU WŁÓKIENNICZEGO NIE ROZWIJAM —
 *   źródło potwierdza istnienie, ale NIE PODAJE ANI
 *   JEDNEJ LICZBY. To luka, nie temat.
 *
 * KĄT: LICZ SZWY, NIE FUNKCJE
 * — o tym, że przy wyborze sprzętu kuchennego liczy się
 * liczba miejsc do obsłużenia, a nie liczba rzeczy,
 * które urządzenie umie. Kąt od pieszyckiego pałacu:
 * dwadzieścia osiem szczytów to dwadzieścia osiem
 * styków dachu z samym sobą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pałac z lat 1615–1617 miał dwadzieścia osiem
 *   szczytów na trzech skrzydłach,
 * — ŻE KAŻDY SZCZYT TO MIEJSCE, W KTÓRYM DACH STYKA SIĘ
 *   SAM ZE SOBĄ — czyli miejsce do obrobienia,
 *   uszczelnienia i sprawdzenia. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI KUPUJEMY PO LICZBIE FUNKCJI,
 *   A PŁACIMY PO LICZBIE CZĘŚCI: ile trzeba rozkręcić,
 *   ile uszczelek, ile załamań, w które wchodzi tłuszcz,
 *   ile rzeczy trzeba złożyć z powrotem, żeby dało się
 *   użyć następnym razem,
 * — ⚠⚠ ŻE URZĄDZENIE Z PIĘCIOMA FUNKCJAMI
 *   I OSIEMNASTOMA CZĘŚCIAMI PRZEGRYWA Z JEDNOFUNKCYJNYM
 *   O TRZECH — nie dlatego, że mniej umie, tylko
 *   dlatego, że częściej stoi nieużywane,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN I ROBI SIĘ GO
 *   W SKLEPIE: policz części, które trzeba zdjąć,
 *   żeby to umyć. Nie funkcje z pudełka,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: liczba części nie jest
 *   jedynym kryterium. Czasem jedna dodatkowa część
 *   zastępuje całe osobne urządzenie i wtedy rachunek
 *   wychodzi na jej korzyść. Chodzi o to, żeby ją
 *   policzyć, a nie o to, żeby jej unikać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix też ma swoje
 *   szwy — naczynie, pokrywę, uszczelkę, nóż, koszyk,
 *   nasadkę do gotowania na parze. MÓWIĘ TO WPROST
 *   I WYMIENIAM.
 *   ⚠⚠⚠ NIE PODAJĘ LICZBY CZĘŚCI ANI SPOSOBU MYCIA —
 *   pokazuję to na prezentacji, nie zmyślam w tekście.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TWARDSZEGO MATERIAŁU I ZUŻYCIA NARZĘDZI —
 *   kąt zajęty (Strzelin, poprzednia fala).
 *   ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR: tamten tekst mówi
 *   „materiał zużywa narzędzie", ten mówi „liczba części
 *   decyduje o tym, czy w ogóle sięgniesz".
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO CYKLI RENOWACJI I POWROTÓW DO NAPRAWY —
 *   kąt zajęty (Chojnów). Piszę o LICZBIE MIEJSC,
 *   nigdy o harmonogramie ani powtarzalności.
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie mówię, ile rzeczy mieć.
 * — ⚠⚠ ZERO DOKŁADANIA PO OKRESIE UŻYWANIA — kąt zajęty
 *   (Syców). Dlatego NIE UŻYWAM dwóch wież na Wielkiej
 *   Sowie jako morału.
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra).
 * — ⚠⚠ ZERO PRZELICZANIA I SKALI — kąt zajęty (Kowary).
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH I PLANOWANIA KUCHNI —
 *   kąt pisany w tej samej fali (Kudowa-Zdrój).
 * — ⚠⚠ ZERO ETYKIET — kąt pisany w tej samej fali
 *   (Oborniki Śląskie).
 * — ⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY POLECANEGO SPRZĘTU — podaję WYŁĄCZNIE
 *   zasadę: policz części do zdjęcia.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o częściach i tłuszczu w załamaniach
 *   NIE MÓWIĘ NIC o higienie, bakteriach ani sposobie
 *   mycia. Piszę WYŁĄCZNIE o liczbie miejsc.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PODZIEMI, WOJSKA I LAT CZTERDZIESTYCH
 *   W GÓRACH SOWICH — bez wzmianki, bez aluzji.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza formą „Peterswald" z 1258 r. jako zapisem
 *   pierwszej wzmianki).
 * — ⚠⚠ ZERO WĄTKU OBRONNEGO — fosy i bastei nie
 *   rozwijam; podzamcze podaję jako wymiar.
 * — ⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO UPADKU PRZEMYSŁU I BEZROBOCIA.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości co do dziesiętnej — rachunek
 *   nie domyka się z serwisem.
 * — NIE PODAJĘ roku przekształcenia gminy.
 * — NIE PODAJĘ aktu prawnego praw miejskich z 1962 r.
 * — NIE PODAJĘ liczby stopni na wieży na Wielkiej Sowie.
 * — NIE PODAJĘ roku zakończenia remontu wieży —
 *   źródła podają 2005 albo 2008.
 * — NIE PODAJĘ wymiarów pałacu po przebudowie z 1617 r.
 * — NIE PODAJĘ liczby krosien ani zatrudnienia
 *   w zakładach włókienniczych — ani jednej liczby
 *   nie ustalono.
 * — NIE PODAJĘ liczby części Thermomixa.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ Sześć wpisów niemczańskich pochodzi
 *   z gminy Niemcza — TEN SAM POWIAT DZIERŻONIOWSKI,
 *   INNA GMINA. „Kiełbasa w słoiku z Przedgórza
 *   Sudeckiego" to oznaczenie regionalne.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pieszyce leżą w powiecie dzierżoniowskim, na wysokości
 *   296 m n.p.m.; miasto liczy 6 753 mieszkańców
 *   (GUS, 31.12.2024) na 17,7 km², a cała gmina
 *   miejsko-wiejska 8 888 osób na 63,6 km², z czterema
 *   wsiami: Bratoszowem, Kamionkami, Piskorzowem
 *   i Rościszowem,
 * — pierwsza wzmianka pochodzi z 1258 r., w formie
 *   „Peterswald"; prawa miejskie miejscowość otrzymała
 *   dopiero w 1962 r. — po ponad siedmiu wiekach jako wieś,
 * — w 1336 r. udokumentowano tu dwór murowany rycerza
 *   Arnolda von Peterswalde; w latach 1580–1582 Hans
 *   von Peterswalde wzniósł podpiwniczony dom mieszkalny
 *   o wymiarach 32,5 × 11,5 m; w latach 1615–1617
 *   Friedrich von Gellhorn zbudował pałac trójskrzydłowy
 *   i trzykondygnacyjny, z wieżą na osi fasady, o 28
 *   szczytach i boniowaniu z naprzemiennych kwadratów
 *   i prostokątów; na parterze mieściły się jadalnia,
 *   cztery pokoje i sień ze schodami, a podzamcze miało
 *   około 70 × 65–70 m; około 1710 r. założenie
 *   zbarokizowano, w 1818 przebudowano budynek dworski,
 *   a przed 1881 r. regularne ogrody zamieniono na park
 *   krajobrazowy,
 * — w gminie leży Wielka Sowa, najwyższy szczyt Gór
 *   Sowich, 1 014,8 m n.p.m.; drewniana wieża stała tam
 *   w latach 1885–1904, około 30 m na południe od obecnej,
 *   a kamienno-żelbetową wzniesiono w 1906 r.: ma 25 m
 *   wysokości, 8 m średnicy u podstawy i 4 m w koronie,
 * — Kolej Sowiogórską doprowadzono z Dzierżoniowa przez
 *   Bielawę do Srebrnej Góry w 1900 r., przedłużono
 *   w latach 1902–1903, zamknięto w 1974 i rozebrano
 *   w 1978.
 */
export const PIESZYCE: CityContent = {
  slug: "pieszyce",
  h1: "Thermomix Pieszyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pieszyce — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pieszycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pieszyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pieszycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pieszyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do czterech wsi w gminie.",

  highlights: highlightyStandardowe("Pieszyce"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia osiem szczytów to dwadzieścia osiem miejsc do obrobienia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pieszycach – jak wygląda prezentacja?",
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
      id: "licz-szwy",
      heading: "Licz szwy, nie funkcje",
      paragraphs: [
        "Pałac w Pieszycach, wzniesiony w latach 1615–1617, miał dwadzieścia osiem szczytów na trzech skrzydłach. Do tego boniowanie z naprzemiennych kwadratów i prostokątów na całej elewacji.",
        "Dwadzieścia osiem szczytów to dwadzieścia osiem miejsc, w których dach styka się sam ze sobą. Dwadzieścia osiem obróbek, dwadzieścia osiem rzeczy do sprawdzenia, dwadzieścia osiem pozycji w każdym kosztorysie remontu przez czterysta lat.",
        "Z pudełka od sprzętu kuchennego czyta się zupełnie inną liczbę.",
        "Czyta się liczbę funkcji: sieka, miksuje, ubija, gotuje na parze, kroi w plastry, ściera. Sześć rzeczy za jedną cenę, brzmi dobrze. A płaci się potem za coś innego — za liczbę części.",
        "Ile trzeba zdjąć, żeby to umyć. Ile uszczelek wychodzi i ile wraca. Ile załamań, rowków i szpar, w które wchodzi tłuszcz. Ile elementów trzeba złożyć z powrotem, żeby dało się użyć jutro. To są szwy tego urządzenia i to one decydują, ile razy naprawdę po nie sięgniesz.",
        "Urządzenie z pięcioma funkcjami i osiemnastoma częściami przegrywa z jednofunkcyjnym o trzech — nie dlatego, że mniej umie, tylko dlatego, że częściej stoi w szafce. Rozłożenie go na czternaście kawałków jest droższe niż zrobienie tej jednej rzeczy ręcznie, więc się go nie wyjmuje.",
        "Ruch, który to rozstrzyga, robi się w sklepie i trwa minutę: policz części, które trzeba zdjąć, żeby to umyć. Nie funkcje z opakowania. Części.",
        "Dopowiem, bo temat leży blisko innego: to nie jest kwestia trwałości ani tego, jak szybko materiał zużywa narzędzia. To kwestia liczby miejsc, które trzeba obsłużyć po każdym użyciu — i tego, że ta liczba w praktyce decyduje o tym, czy w ogóle sięgasz.",
        "Uczciwie o drugiej stronie: liczba części nie jest jedynym kryterium i czasem wychodzi na odwrót. Jedna dodatkowa część potrafi zastąpić całe osobne urządzenie — i wtedy rachunek jest po jej stronie. Chodzi o to, żeby ją policzyć, a nie o to, żeby jej unikać.",
        "Na koniec o moim urządzeniu, uczciwie.",
        "Thermomix też ma swoje szwy: naczynie, pokrywę, uszczelkę, nóż, koszyk, nasadkę do gotowania na parze. Nie napiszę tu, ile to dokładnie części ani jak się je myje, bo to jest rzecz do pokazania, nie do opisania — i dlatego na prezentacji rozkładam urządzenie przy Was i możecie policzyć sami. To zresztą jedyne uczciwe miejsce, żeby tę liczbę zobaczyć.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pieszycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, który sprzęt stoi u Was nieużywany. To najlepszy punkt wyjścia do rozmowy o tym, czy kolejny ma sens.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pieszycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pieszyc",
      paragraphs: [
        "Pieszyce leżą w powiecie dzierżoniowskim, na wysokości dwustu dziewięćdziesięciu sześciu metrów nad poziomem morza. Samo miasto liczy 6 753 mieszkańców (GUS, 31.12.2024) na niecałych osiemnastu kilometrach kwadratowych, a cała gmina miejsko-wiejska blisko dziewięć tysięcy osób na sześćdziesięciu czterech, z czterema wsiami: Bratoszowem, Kamionkami, Piskorzowem i Rościszowem. Pierwsza wzmianka pochodzi z 1258 roku, a prawa miejskie miejscowość otrzymała dopiero w 1962 — po ponad siedmiu wiekach jako wieś. W 1336 roku udokumentowano tu dwór murowany rycerza Arnolda von Peterswalde, w latach 1580–1582 Hans von Peterswalde wzniósł podpiwniczony dom mieszkalny o wymiarach trzydzieści dwa i pół na jedenaście i pół metra, a w latach 1615–1617 Friedrich von Gellhorn zbudował pałac trójskrzydłowy i trzykondygnacyjny, z wieżą na osi fasady, o dwudziestu ośmiu szczytach; na parterze mieściły się jadalnia, cztery pokoje i sień ze schodami, a podzamcze miało około siedemdziesięciu na sześćdziesiąt pięć metrów. Około 1710 roku założenie zbarokizowano, w 1818 przebudowano budynek dworski, a przed 1881 regularne ogrody zamieniono na park krajobrazowy. W gminie leży Wielka Sowa, najwyższy szczyt Gór Sowich, tysiąc czternaście i osiem dziesiątych metra nad poziomem morza; drewniana wieża stała tam w latach 1885–1904, około trzydziestu metrów na południe od obecnej, a kamienno-żelbetową wzniesiono w 1906 roku — ma dwadzieścia pięć metrów wysokości, osiem metrów średnicy u podstawy i cztery w koronie. Kolej Sowiogórską doprowadzono z Dzierżoniowa przez Bielawę do Srebrnej Góry w 1900 roku, przedłużono w latach 1902–1903, zamknięto w 1974 i rozebrano w 1978.",
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

  districtsHeading: "Do których części Pieszyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterech wsi w gminie: Bratoszowa, Kamionek, Piskorzowa i Rościszowa. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Pieszyce też przyjadę",
  nearbyParagraphs: [
    "Dzierżoniów jest stąd kilka kilometrów, Bielawa podobnie, Piława Górna około jedenastu, Świdnica dwadzieścia dwa, a Wrocław pięćdziesiąt pięć. Wszędzie dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Dzierżoniów", "Bielawa", "Piława Górna", "Świdnica", "Nowa Ruda"],

  about: blokOMnie("do Pieszyc", "w Pieszycach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pieszyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterech wsi w gminie — Bratoszowa, Kamionek, Piskorzowa i Rościszowa. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Pieszyce w powiecie dzierżoniowskim, u stóp Gór Sowich — nie o Piechowice w powiecie karkonoskim, z którymi nazwa bywa mylona, ani o wieś Pieszyce w gminie Świecie na Pomorzu.",
    },
    ...faqWspolne("w Pieszycach"),
    {
      question: "Jak wybrać sprzęt kuchenny, żeby potem naprawdę go używać?",
      answer:
        "Licz części, nie funkcje. Pałac w Pieszycach miał dwadzieścia osiem szczytów, czyli dwadzieścia osiem miejsc, w których dach styka się sam ze sobą — i tyle samo pozycji w każdym kosztorysie remontu przez czterysta lat. Ze sprzętem jest identycznie: z pudełka czyta się liczbę funkcji, a płaci się liczbą części, które trzeba zdjąć po każdym użyciu. Urządzenie z pięcioma funkcjami i osiemnastoma częściami przegrywa z jednofunkcyjnym o trzech, bo po prostu rzadziej się po nie sięga. W sklepie zajmuje to minutę: policz, ile elementów trzeba rozłożyć.",
    },
    {
      question: "Ile części ma Thermomix?",
      answer:
        "Nie podam liczby w tekście, bo to rzecz do pokazania, a nie do opisania — na prezentacji rozkładam urządzenie przy Was i możecie policzyć sami. Wymienię, co wchodzi w grę: naczynie, pokrywa, uszczelka, nóż, koszyk i nasadka do gotowania na parze. Jeśli po policzeniu uznacie, że to za dużo jak na Waszą kuchnię, to też jest odpowiedź i nie będę z nią dyskutować.",
    },
  ],

  geo: { lat: 50.7167, lng: 16.5833 },
};
