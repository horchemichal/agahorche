import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * CHOROSZCZ — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 6 162, GMINA 18 344 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 16,8 km², GMINY 163,8 km².
 * 34 MIEJSCOWOŚCI. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 6 000 — blisko, ale używam GUS.
 * ⚠ Strona urzędu podaje „ponad 14 000" dla gminy —
 * NIEAKTUALNE. GUS: 18 344.
 * GMINA ROSNĄCA — Białystok 12 km.
 *
 * PRAWA MIEJSKIE 1507 r., nadał KRÓL ZYGMUNT I STARY,
 * z nietypowym obciążeniem: OBOWIĄZKIEM DOSTARCZENIA
 * DRUŻYNY ZBROJNEJ (5 KONNYCH) NA WYPADEK WOJNY.
 * Osadnictwo poświadczone archeologicznie od MEZOLITU;
 * nadania ziemskie 1437 r.
 * ⚠ NIE PODAJĘ, czy prawa były tracone i przywracane —
 * w obiegu jest wersja 1950/1993, ale BEZ ŹRÓDŁA.
 * ⚠ NIE PODAJĘ, czy było to prawo magdeburskie.
 * PRZYNALEŻNOŚĆ: RDZENNE PODLASIE.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — „SER NARWIAŃSKI",
 * data wpisu 19 GRUDNIA 2006 r., kategoria produkty mleczne.
 * TO JEST PODSTAWA KĄTA. Z mleka krów RASY POLSKA CZERWONA,
 * wypasanych na NATURALNYCH PASTWISKACH NARWIAŃSKICH.
 * SZEŚĆ Z DZIESIĘCIU wsi wymienionych w opisie to sołectwa
 * gminy Choroszcz: Kruszewo, Żółtki, Rogowo, Rogówek,
 * Zaczerlany, Kościuki.
 * Cechy: gładki, CIEMNOŻÓŁTY, jaśniejszy w przekroju;
 * konsystencja „GĄBCZASTA I BARDZO SPRĘŻYSTA Z LICZNYMI
 * DZIURAMI"; zapach ŚMIETANKOWY; dodatki: CZOSNEK, MAJERANEK,
 * KMINEK.
 *
 * NARWIAŃSKI PARK NARODOWY — Choroszcz LEŻY W OTULINIE.
 * NAREW JEST RZEKĄ ANASTOMOZUJĄCĄ — płynie wieloma korytami,
 * „osobliwość w skali europejskiej", stąd „Polska Amazonia".
 * ⚠ DATY UTWORZENIA ANI POWIERZCHNI PARKU NIE PODAJĘ —
 * sprzeczność źródeł.
 *
 * PAŁAC BRANICKICH — obecny wzniesiony w 1759 r. dla HETMANA
 * WIELKIEGO KORONNEGO JANA KLEMENSA BRANICKIEGO, barokowy.
 * Pierwsza rezydencja 1725–1730, rozebrana 1757.
 * Kompozycję ogrodową projektował płk JAN HENRYK KLEMM.
 * KANAŁ PONAD 400-METROWY ZAŁOŻONY NA PLANIE KRZYŻA,
 * całość na 25 ha. Od 1840 r. przebudowywany na fabrykę,
 * SPALONY 1915, odbudowany w latach 60. XX w. wg projektu
 * STANISŁAWA BUKOWSKIEGO. Dziś MUZEUM WNĘTRZ PAŁACOWYCH.
 * ⚠ TO LETNIA rezydencja — NIE MYLIĆ z pałacem Branickich
 * w Białymstoku.
 *
 * ZESPÓŁ PODOMINIKAŃSKI: 1654 r. MIKOŁAJ STEFAN PAC sprowadził
 * 12 dominikanów. Murowany kościół: stan surowy 29 WRZEŚNIA
 * 1755 r., gotowy 26 PAŹDZIERNIKA 1758 r., późnobarokowy,
 * fundator JAN KLEMENS BRANICKI. W 1832 r. dominikanie
 * przeniesieni do Różanegostoku (gmina Dąbrowa Białostocka).
 * DNI CHOROSZCZY — w 2026 r. 44. edycja.
 * JARMARK DOMINIKAŃSKI — archiwizowany od 1990 r., odbywa się
 * NIEZMIENNIE W PIERWSZĄ NIEDZIELĘ SIERPNIA; rękodzieło,
 * produkty lokalne, dania regionalne i sery.
 * PRZEMYSŁ: w 1840 r. manufaktura tekstylna hrabiny
 * MOSTOWSKIEJ dała początek dużej fabryce sukienniczo-
 * kapeluszniczej.
 * CHOROSZCZ NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: SKŁADNIK, KTÓREGO SMAK ZALEŻY OD MIEJSCA —
 * i co z tego wynika dla przepisu.
 * Kąt od sera narwiańskiego, którego urzędowy opis wymienia
 * konkretne pastwiska i konkretną rasę krów jako część
 * definicji produktu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ten sam składnik z dwóch miejsc to bywa dwa różne
 *   produkty, i że przepisy tego nie uwzględniają,
 * — konkretne przykłady: ser (pastwisko i pasza), masło,
 *   jajka (barwa żółtka), miód, mąka z różnych zbiorów,
 *   pomidory, ziemniaki różnych odmian, woda,
 * — że dlatego przepis przywieziony z wakacji rzadko wychodzi
 *   tak samo w domu — i to nie jest niczyja wina,
 * — że najczęstsza reakcja („zrobiłam coś źle") jest
 *   najczęściej nieprawdziwa,
 * — PRAKTYCZNY WNIOSEK: warto poznać JEDEN swój lokalny
 *   produkt naprawdę dobrze, zamiast gonić za składnikami
 *   z opisu,
 * — i drugi: przepis warto dopasować do tego, co macie,
 *   a nie odwrotnie,
 * — UCZCIWIE: żadne urządzenie tego nie wyrówna. Wsad
 *   decyduje, i to jest granica techniki,
 * — ALE jedna rzecz się poprawia: sprzęt daje POWTARZALNOŚĆ
 *   wykonania, więc gdy coś wyjdzie inaczej, wiadomo,
 *   że zmienił się składnik, a nie ręka. To jest realna
 *   pomoc w diagnozowaniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — NIC o tym, że produkty
 *   lokalne są „zdrowsze".
 * — ŻADNYCH NAZW FIRM ANI GOSPODARSTW.
 * — NIE PODAJĘ receptury sera narwiańskiego.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 *   Fakt, że budynki podominikańskie pełniły od 1865 r.
 *   funkcję cerkwi, POMIJAM — to temat kasat i konwersji.
 * — ⚠⚠ SZPITAL PSYCHIATRYCZNY W CHOROSZCZY — POMIJAM
 *   CAŁKOWICIE. Żadnej wzmianki, w żadnym kontekście,
 *   także historycznym i architektonicznym. TWARDA GRANICA.
 * — ZERO obowiązku wojennego z przywileju 1507 jako wątku
 *   militarnego — podaję go wyłącznie jako ciekawostkę
 *   prawną, jednym zdaniem.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Rodzinny przepis
 * przeniesiony do urządzenia" dotyczy przenoszenia przepisu
 * na sprzęt. „Zamienniki" dotyczą braku składnika.
 * „Składniki, które łatwo pomylić w sklepie" (Zalewo)
 * dotyczą wzięcia niewłaściwej rzeczy. „Rodzaje mąki"
 * (Korsze) dotyczą typów. Tutaj chodzi o TEN SAM składnik
 * o tej samej nazwie, który po prostu jest gdzie indziej inny.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty utworzenia ani powierzchni Narwiańskiego PN.
 * — NIE PISZĘ, że Choroszcz leży w granicach parku — leży
 *   w otulinie.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ, czy i kiedy Choroszcz traciła prawa miejskie.
 * — NIE PODAJĘ roku pierwszej edycji Dni Choroszczy.
 * — NIE PODAJĘ rzeki Horodnianki — niepotwierdzona.
 * — NIE MYLĘ pałacu Branickich w Choroszczy z pałacem
 *   Branickich w Białymstoku. FAQ to rozróżnia.
 * — NIE PRZYPISUJĘ sera narwiańskiego gminie Narew —
 *   nazwa pochodzi od rzeki, nie od tamtej gminy.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 6 162, gmina 18 344 mieszkańców na 163,8 km²,
 *   34 miejscowości; gmina rośnie, Białystok jest 12 km stąd,
 * — prawa miejskie nadane w 1507 r. przez Zygmunta I Starego,
 *   z obowiązkiem wystawienia pięciu konnych; osadnictwo
 *   poświadczone archeologicznie od mezolitu,
 * — „Ser narwiański" na Liście Produktów Tradycyjnych
 *   od 19 grudnia 2006 r.: z mleka krów rasy polska czerwona
 *   wypasanych na pastwiskach narwiańskich, gładki
 *   i ciemnożółty, o konsystencji gąbczastej i bardzo
 *   sprężystej z licznymi dziurami, o śmietankowym zapachu,
 *   czasem z czosnkiem, majerankiem lub kminkiem; sześć
 *   z dziesięciu wsi wymienionych w opisie to sołectwa
 *   gminy Choroszcz,
 * — gmina leży w otulinie Narwiańskiego Parku Narodowego,
 *   a Narew płynie tu wieloma korytami naraz — to osobliwość
 *   w skali europejskiej, stąd nazwa „Polska Amazonia",
 * — barokowy pałac Branickich z 1759 r., letnia rezydencja
 *   hetmana wielkiego koronnego Jana Klemensa Branickiego,
 *   z kompozycją ogrodową projektu płk. Jana Henryka Klemma:
 *   kanałem długim na ponad 400 m założonym na planie krzyża,
 *   na obszarze 25 ha; dziś Muzeum Wnętrz Pałacowych,
 * — późnobarokowy kościół podominikański: stan surowy
 *   29 września 1755 r., ukończony 26 października 1758 r.,
 *   z fundacji Jana Klemensa Branickiego; dominikanów
 *   sprowadził tu w 1654 r. Mikołaj Stefan Pac,
 * — Jarmark Dominikański odbywa się niezmiennie w pierwszą
 *   niedzielę sierpnia, z edycjami archiwizowanymi od 1990 r.,
 * — w 1840 r. manufaktura tekstylna hrabiny Mostowskiej dała
 *   początek dużej fabryce sukienniczo-kapeluszniczej.
 */
export const CHOROSZCZ: CityContent = {
  slug: "choroszcz",
  h1: "Thermomix Choroszcz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Choroszcz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Choroszczy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Choroszcz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Choroszczy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Choroszczy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Choroszcz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ten sam składnik z dwóch miejsc bywa dwoma różnymi produktami.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Choroszczy – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "smak-zalezy-od-miejsca",
      heading: "Ser, którego opis wymienia pastwiska — czyli o składnikach zależnych od miejsca",
      paragraphs: [
        "Na Liście Produktów Tradycyjnych figuruje od 19 grudnia 2006 roku „Ser narwiański”. Jego urzędowy opis jest niezwykły, bo do definicji produktu wchodzą rzeczy, których nie da się kupić: mleko krów rasy polska czerwona i naturalne pastwiska nad Narwią. Wymieniono nawet konkretne wsie, a sześć z dziesięciu to sołectwa gminy Choroszcz — Kruszewo, Żółtki, Rogowo, Rogówek, Zaczerlany i Kościuki. Sam ser jest gładki i ciemnożółty, ma konsystencję gąbczastą i bardzo sprężystą, z licznymi dziurami, i pachnie śmietanką; bywa dodatkowo z czosnkiem, majerankiem albo kminkiem.",
        "To dobry punkt wyjścia do rzeczy, która w kuchni powoduje mnóstwo niepotrzebnego poczucia winy: ten sam składnik z dwóch różnych miejsc bywa dwoma różnymi produktami. A przepisy piszą tak, jakby był jeden.",
        "Ser to najwyraźniejszy przykład, bo pasza i pastwisko widać w nim wprost — w barwie, w zapachu, w tym, jak się zachowuje w cieple. Ale to samo dotyczy masła, które w różnych porach roku ma inną barwę i inną zawartość wody. Jajek, w których żółtko bywa bladożółte albo pomarańczowe i to zmienia kolor każdego ciasta. Miodu, który jest inny z każdego pola. Mąki, która różni się z każdego zbioru, choć na opakowaniu ma tę samą liczbę. Pomidorów, ziemniaków różnych odmian, a nawet wody z kranu, która w jednym mieście robi z herbatą coś innego niż w drugim.",
        "Z tego bierze się zjawisko, które zna każdy: przepis przywieziony z wakacji rzadko wychodzi tak samo w domu. Człowiek jadł coś na miejscu, dostał przepis, wrócił, zrobił dokładnie tak samo — i wyszło inaczej. Pierwsza myśl jest zawsze ta sama: „zrobiłam coś źle”. Najczęściej nieprawda. Zrobiliście dobrze, tylko z innych składników o tych samych nazwach.",
        "Wyciągam z tego dwa całkiem praktyczne wnioski i oba są, moim zdaniem, ważniejsze niż jakakolwiek technika.",
        "Pierwszy: warto poznać jeden swój lokalny produkt naprawdę dobrze — ten ser, to masło, te jajka od konkretnej osoby — zamiast gonić za składnikami z cudzych opisów. Kuchnia zbudowana na tym, co jest pod ręką i co się rozumie, jest po prostu lepsza od kuchni zbudowanej na tęsknocie za czymś, czego się nie dostanie.",
        "Drugi: przepis dopasowuje się do składnika, a nie odwrotnie. Jeśli Wasz twaróg jest bardziej mokry, ciasto potrzebuje mniej płynu. Jeśli jajka mają blade żółtka, krem będzie jaśniejszy i to jest w porządku. To jest ta umiejętność, która odróżnia kogoś, kto gotuje, od kogoś, kto wykonuje instrukcję.",
        "Powiem uczciwie, gdzie w tym wszystkim jest urządzenie, bo nie chcę niczego obiecywać na wyrost. Nie wyrówna tego. Wsad decyduje i to jest twarda granica każdej techniki — z gorszego sera nie zrobi się lepszego, a z bladego żółtka pomarańczowego kremu.",
        "Jedną rzecz jednak daje i jest ona niedoceniana: powtarzalność wykonania. Ręka za każdym razem miesza trochę inaczej, grzeje trochę inaczej, przerywa w innym momencie. Urządzenie robi to samo za każdym razem. Dzięki temu, gdy danie nagle wyjdzie inaczej, wiecie, że zmienił się składnik, a nie Wasze wykonanie. To jest realna pomoc — nie w gotowaniu, ale w zrozumieniu, co się właściwie stało.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Choroszczy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie przepis, który u kogoś wychodzi, a u Was nie — weźcie go na spotkanie. Bardzo często odpowiedź leży w składniku, nie w wykonaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Choroszczy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla choroskiej rodziny",
      paragraphs: [
        "Samo miasto liczy przeszło sześć tysięcy mieszkańców, a cała gmina ponad osiemnaście tysięcy, w trzydziestu czterech miejscowościach — i jest to gmina rosnąca, bo do Białegostoku jest stąd dwanaście kilometrów. Prawa miejskie nadał Choroszczy w 1507 roku król Zygmunt I Stary, z nietypowym obciążeniem: obowiązkiem wystawienia pięciu konnych na wypadek potrzeby. Osadnictwo poświadczono tu archeologicznie już dla mezolitu. Najważniejszym zabytkiem jest barokowy pałac Branickich z 1759 roku — letnia rezydencja hetmana wielkiego koronnego Jana Klemensa Branickiego, z ogrodem projektu pułkownika Jana Henryka Klemma i kanałem długim na ponad czterysta metrów, założonym na planie krzyża, na dwudziestu pięciu hektarach; dziś mieści Muzeum Wnętrz Pałacowych. Późnobarokowy kościół podominikański osiągnął stan surowy 29 września 1755 roku, a ukończono go 26 października 1758; dominikanów sprowadził tu w 1654 roku Mikołaj Stefan Pac. Gmina leży w otulinie Narwiańskiego Parku Narodowego, gdzie Narew płynie wieloma korytami naraz — to osobliwość w skali europejskiej, stąd „Polska Amazonia”. Jarmark Dominikański odbywa się tu niezmiennie w pierwszą niedzielę sierpnia.",
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

  districtsHeading: "Do których części gminy Choroszcz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu czterech miejscowości gminy, w tym do wsi nad Narwią. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Choroszcz też przyjadę",
  nearbyParagraphs: [
    "Białystok, Łapy, Wasilków, Suraż i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Białystok", "Łapy", "Wasilków", "Suraż"],

  about: blokOMnie("do Choroszczy", "w Choroszczy i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Choroszczy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Choroszczy"),
    {
      question: "Dlaczego przepis przywieziony z wakacji nie wychodzi mi w domu?",
      answer:
        "Najczęściej dlatego, że składniki o tych samych nazwach są gdzie indziej inne. Ser zależy od pastwiska, masło od pory roku, jajka od paszy, mąka od zbioru, a nawet woda z kranu robi z herbatą co innego w każdym mieście. Pierwsza myśl, że zrobiliście coś źle, zwykle jest nieprawdziwa.",
    },
    {
      question: "Co z tym zrobić w praktyce?",
      answer:
        "Dopasować przepis do składnika, a nie odwrotnie. Jeśli twaróg jest bardziej mokry, ciasto potrzebuje mniej płynu; jeśli żółtka są blade, krem będzie jaśniejszy i tak ma być. Warto też poznać jeden swój lokalny produkt naprawdę dobrze, zamiast gonić za składnikami z cudzych opisów.",
    },
    {
      question: "Czy Thermomix wyrówna różnice między składnikami?",
      answer:
        "Nie. Wsad decyduje i to jest granica każdej techniki. Daje natomiast coś innego: powtarzalność wykonania. Skoro urządzenie robi za każdym razem to samo, to gdy danie nagle wyjdzie inaczej, wiadomo, że zmienił się składnik, a nie Wasza ręka. To pomaga nie w gotowaniu, tylko w zrozumieniu, co się stało.",
    },
    {
      question: "Czy pałac Branickich w Choroszczy to ten sam co w Białymstoku?",
      answer:
        "Nie, choć obie rezydencje należały do Jana Klemensa Branickiego. Choroski pałac z 1759 roku był letnią rezydencją i mieści dziś Muzeum Wnętrz Pałacowych; ten w Białymstoku był siedzibą główną.",
    },
  ],

  geo: { lat: 53.1442, lng: 22.9908 },
};
