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
 * DOBRZANY — powiat stargardzki,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 143 mieszkańców (GUS 31.12.2024), 5,3 km²,
 *   gęstość 401,3 os./km².
 * CAŁA GMINA: 4 478 osób, 134,7 km², gęstość 34 os./km².
 *   ⚠ NAJMNIEJSZA GMINA W TEJ FALI.
 * ⚠⚠ RÓŻNICA 2,09×. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 53,3590 / 15,4290.
 * ⚠⚠⚠ LISTY MIEJSCOWOŚCI GMINY NIE PODAJĘ —
 *   pobrana lista zawierała DOLICE, które są OSOBNĄ
 *   GMINĄ w tym samym powiecie. Liczba 15 też niepewna.
 *   Piszę wyłącznie „wsie w gminie".
 *
 * ⚠⚠⚠ ODMIANA — PLURALIA TANTUM:
 *   MIANOWNIK „DOBRZANY" (tylko liczba mnoga).
 *   ⚠⚠⚠ Ms. W DOBRZANACH, D. DO DOBRZAN —
 *   KOŃCÓWKA ZEROWA. NIGDY „DO DOBRZANÓW".
 *   ⚠⚠⚠ CZASOWNIK W LICZBIE MNOGIEJ: „DOBRZANY LEŻĄ",
 *   „DOBRZANY MAJĄ" — NIGDY „DOBRZANY LEŻY".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — wzorzec jak
 *   „do Katowic", „do Siedlec". ⚠ UWAGA na wyjątek
 *   „Tychy → do Tychów", który tu NIE OBOWIĄZUJE.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny z Dobrzan".
 *
 * ⚠⚠⚠ HOMONIM — NAJGORSZE ŚRODOWISKO WYSZUKIWANIA
 *   W CAŁEJ FALI:
 *   ISTNIEJĄ DRUGIE DOBRZANY — W WOJ. DOLNOŚLĄSKIM.
 *   ⚠⚠ Wyszukiwarka na „Dobrzany historia prawa
 *   miejskie" zwróciła w pierwszej piątce Dobrzyń
 *   nad Wisłą, Dobre Miasto, Dobrą i Dębno — i ANI
 *   JEDNEGO trafienia o Dobrzanach.
 *   ⚠⚠⚠ DOBRZANY ≠ DOBRA W POWIECIE ŁOBESKIM —
 *   to samo województwo, ta sama skala. NAJGROŹNIEJSZE.
 *   ≠ DOBRZYŃ NAD WISŁĄ (już opisany w tym serwisie!)
 *   ≠ Dobre Miasto ≠ Dobrzyca ≠ Dobrodzień.
 *   ⚠ ZAWSZE PISZĘ „W POWIECIE STARGARDZKIM"
 *   ALBO „NA POJEZIERZU IŃSKIM". ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — Osadnictwo rozwinęło się w XII w. przy grodzie.
 * — ⚠⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA SPRZECZNE —
 *   „do 1336 r." ALBO 1338. ⚠⚠⚠ PISZĘ
 *   „W LATACH TRZYDZIESTYCH XIV WIEKU"
 *   I NIE WYBIERAM DATY.
 * — ⚠⚠ 1567 — książę Barnim XI nadał prawo do DWÓCH
 *   JARMARKÓW ROCZNIE.
 *   ⚠⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — obszar rytmu
 *   targowego zajęty (Nowy Targ: czwartek i sobota;
 *   Mirosławiec: wtorki i piątki — tam też go pominąłem).
 *   PODAJĘ JAKO FAKT W SEKCJI RODZINNEJ. TWARDA GRANICA.
 * — Kościół zbudowany w 1598 r.
 *   ⚠ NIE OPISUJĘ — wątek wyznaniowy. Podaję sam rok
 *   jako datę budowlaną albo pomijam.
 * — 20 sierpnia 1896 — otwarcie stacji kolejowej,
 *   połączenie w kierunku wsi Kozy.
 *   ⚠ DATA DZIENNA — rzadkość, podaję.
 * — Na początku XX w. działały: tartak, cegielnia,
 *   mleczarnia i fabryka sukna; wcześniej rolnictwo
 *   i młyn.
 *   ⚠⚠ BROWARU NIE WYMIENIAM — alkohol.
 * — ⚠⚠ RZEKA: PĘZINKA, NIE KRĄPIEL — dwa niezależne
 *   źródła. Pęzinka jest dopływem Krąpieli, stąd
 *   częsta pomyłka. ⚠ PISZĘ WYŁĄCZNIE „PĘZINKA".
 * — Dobrzany leżą na POJEZIERZU IŃSKIM, nad północnym
 *   brzegiem jeziora Szadzko.
 * — Stargard ok. 23–26 km, Szczecin ok. 52–55 km.
 *   ⚠⚠ TO SĄ SZACUNKI z odległości wsi Szadzko
 *   (3 km od Dobrzan), NIE POMIARY.
 *   ⚠ PODAJĘ Z „OKOŁO" albo pomijam kilometry.
 * — ⚠⚠ DEMOGRAFII HISTORYCZNEJ (ok. 1 900 osób
 *   na przełomie XIX i XX w.) NIE UŻYWAM —
 *   porównania ludności w czasie to twarda granica.
 * — ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * — ⚠ RATUSZA, POŻARÓW I CECHÓW: ZERO DANYCH.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEZIORO SZADZKO:
 *   GŁĘBOKOŚĆ MAKSYMALNA 2,6 M — ZGODNA W DWÓCH
 *   NIEZALEŻNYCH ŹRÓDŁACH.
 *   ⚠⚠ POWIERZCHNIA PODAWANA JAKO 57,7 HA, 59 HA
 *   ALBO 78,42–79 HA — ROZRZUT 36 %.
 *   ⚠⚠⚠ TO JEST CAŁY KĄT: JEDNĄ LICZBĘ WSZYSCY ZNAJĄ
 *   ZGODNIE, DRUGIEJ NIKT NIE UMIE PODAĆ.
 *   Jezioro skupione w pionie da się zmierzyć;
 *   rozlane w poziomie — nie.
 *   ⚠ PODAJĘ OBIE GRUPY WARTOŚCI UCZCIWIE, jako
 *   „od niecałych sześćdziesięciu do blisko
 *   osiemdziesięciu hektarów, zależnie od źródła".
 *   ⚠ Jezioro leży ok. 1 km na południowy zachód
 *   od Dobrzan; typ karasiowy; brzegi zróżnicowane,
 *   szeroki pas trzcinowisk od południa.
 *   ⚠⚠ GATUNKU DOMINUJĄCEGO NIE PODAJĘ — źródła
 *   sprzeczne (karaś albo leszcz).
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ BRAK DOWODU, NIE DOWÓD BRAKU. TEMAT NIE POJAWIA
 *   SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: CO DA SIĘ POLICZYĆ, A CZEGO NIE — o tym, że
 * w kuchni dokładnie wiemy, ile mamy rzeczy skupionych
 * w jednym miejscu, i nie mamy pojęcia o tych
 * rozrzuconych.
 * Kąt od jeziora Szadzko: jego głębokość maksymalną
 * dwa źródła podają identycznie, a powierzchnię —
 * z rozrzutem ponad jednej trzeciej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jezioro Szadzko leży kilometr od Dobrzan i ma
 *   2,6 m głębokości w najgłębszym miejscu — liczba
 *   zgodna w dwóch niezależnych źródłach,
 * — ŻE JEGO POWIERZCHNIĘ TE SAME ŹRÓDŁA PODAJĄ
 *   OD NIECAŁYCH SZEŚĆDZIESIĘCIU DO BLISKO
 *   OSIEMDZIESIĘCIU HEKTARÓW — to jest rdzeń,
 * — ⚠⚠ ŻE RÓŻNICA BIERZE SIĘ Z KSZTAŁTU POMIARU,
 *   NIE Z NIESTARANNOŚCI: głębokość mierzy się
 *   w jednym punkcie, powierzchnię trzeba obejść
 *   dookoła — a brzeg jeziora z szerokim pasem
 *   trzcinowisk nie ma jednej oczywistej linii,
 * — ⚠⚠ ŻE W KUCHNI JEST DOKŁADNIE TO SAMO I DAJE
 *   DOKŁADNIE TE SAME SKUTKI. Wiadomo co do kilograma,
 *   ile jest mąki, bo mąka jest w jednym worku.
 *   Nie wiadomo nawet w przybliżeniu, ile jest przypraw,
 *   bo przyprawy są w czterech miejscach,
 * — ⚠⚠ ŻE DLATEGO KUPUJE SIĘ TRZECI RAZ TO SAMO.
 *   Nie z roztargnienia — z tego, że rzeczy rozproszone
 *   są niepoliczalne z natury, a nie z lenistwa,
 * — ⚠⚠ ŻE Z TEGO WYNIKA JEDNA PRAKTYCZNA ZASADA:
 *   mierzyć to, co rozproszone, a nie to, co i tak
 *   widać. Przegląd worka z mąką nic nie daje.
 *   Przegląd czterech miejsc z przyprawami daje
 *   od razu konkretną listę,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE WSZYSTKO DA SIĘ
 *   SKUPIĆ W JEDNYM MIEJSCU i nie o to chodzi.
 *   Jezioro nie przestanie być rozlane dlatego,
 *   że ktoś chciałby je łatwiej zmierzyć.
 *   Chodzi wyłącznie o wiedzę, czego się nie wie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie policzy
 *   za Ciebie zapasów i nie ma z tym nic wspólnego.
 *   Zmniejsza za to liczbę rzeczy rozproszonych
 *   po kuchni, bo kilka etapów dzieje się w jednym
 *   naczyniu. MÓWIĘ TO WPROST, żeby nikt nie liczył
 *   na porządek, który przyjeżdża w kartonie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DWÓCH JARMARKÓW I RYTMU ZAKUPÓW —
 *   obszar zajęty (Nowy Targ, Mirosławiec).
 *   Przywilej z 1567 r. podaję WYŁĄCZNIE jako fakt
 *   w sekcji rodzinnej. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Podaję tylko głębokość maksymalną
 *   i nie zestawiam jej ze średnią ani razu.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Piszę o zapasach, nie o sprzęcie.
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo, ta sama fala). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. Tam chodzi o TO, ŻE MIEJSCA
 *   POWINNY MIEĆ FUNKCJE; TUTAJ o TO, ŻE RZECZY
 *   ROZPROSZONYCH NIE DA SIĘ POLICZYĆ.
 *   Ani słowa o przypisywaniu funkcji, o porządkowaniu
 *   i o tym, gdzie co powinno stać. ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO JEDNA POZYCJA ZAJMUJE POŁOWĘ — kąt zajęty
 *   (Pełczyce, ta sama fala). Nie piszę o listach
 *   i o nierównej wadze pozycji.
 * — ⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty (Płoty).
 * — ⚠⚠ ZERO CO PRZETRWAŁO I CZEGO SIĘ UŻYWA — kąt
 *   zajęty (Polanów).
 * — ⚠ ZERO BAŁAGANU I SPRZĄTANIA — kąt zajęty
 *   (Koluszki).
 * — ⚠ ZERO PRZYROSTU WPRAWY I ZMIANY SKOKOWEJ — kąt
 *   zajęty (Chojna). ⚠⚠ Data 20 sierpnia 1896
 *   aż się prosi o morał „coś zmienia się z dnia
 *   na dzień, wprawa nie". NIE WCHODZĘ W NIEGO.
 *   Podaję datę otwarcia stacji jako fakt.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ METODY INWENTARYZACJI — podaję
 *   WYŁĄCZNIE zasadę, co warto policzyć.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠ W SZCZEGÓLNOŚCI: PISZĄC O ZAPASACH NIE MÓWIĘ
 *   ANI SŁOWA O TERMINACH PRZYDATNOŚCI I PSUCIU SIĘ.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła nie opisuję.
 * — ⚠⚠ ZERO BROWARU — alkohol.
 * — ⚠⚠ ZERO DEMOGRAFII HISTORYCZNEJ I PORÓWNAŃ
 *   LUDNOŚCI W CZASIE.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku nadania praw miejskich —
 *   1336 albo 1338.
 * — NIE PODAJĘ jednej powierzchni jeziora Szadzko —
 *   to jest właśnie cały temat sekcji.
 * — NIE PODAJĘ gatunku dominującego w jeziorze —
 *   źródła sprzeczne.
 * — NIE PISZĘ „Krąpiel" — rzeką Dobrzan jest Pęzinka.
 * — NIE PODAJĘ listy miejscowości gminy — pobrana
 *   zawierała błąd.
 * — NIE PODAJĘ odległości jako pomiarów — to szacunki.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNEJ GOTOWEJ METODY LICZENIA ZAPASÓW.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Dobrzany leżą w powiecie stargardzkim, na Pojezierzu
 *   Ińskim, nad Pęzinką i nad północnym brzegiem
 *   jeziora Szadzko; do Stargardu jest stąd około
 *   dwudziestu kilku kilometrów, do Szczecina
 *   około pięćdziesięciu kilku,
 * — miasto liczy 2 143 mieszkańców (GUS, 31.12.2024)
 *   na 5,3 km², a cała gmina 4 478 osób na 134,7 km²,
 *   czyli trzydzieści cztery osoby na kilometr
 *   kwadratowy,
 * — osadnictwo rozwinęło się tu w XII w. przy grodzie,
 *   a prawa miejskie miasto otrzymało w latach
 *   trzydziestych XIV w.,
 * — w 1567 r. książę Barnim XI nadał Dobrzanom prawo
 *   do organizowania dwóch jarmarków rocznie,
 * — stację kolejową otwarto 20 sierpnia 1896 r.,
 *   z połączeniem w kierunku wsi Kozy,
 * — na początku XX w. działały w mieście tartak,
 *   cegielnia, mleczarnia i fabryka sukna, a wcześniej
 *   młyn,
 * — jezioro Szadzko leży około kilometra na południowy
 *   zachód od miasta; jego głębokość maksymalna wynosi
 *   2,6 m, a powierzchnia podawana jest w źródłach
 *   od niecałych sześćdziesięciu do blisko
 *   osiemdziesięciu hektarów; brzegi są zróżnicowane,
 *   od południa z szerokim pasem trzcinowisk,
 *   a po zachodniej stronie wznosi się wzgórze zamkowe.
 */
export const DOBRZANY: CityContent = {
  slug: "dobrzany",
  h1: "Thermomix Dobrzany – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dobrzany — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Dobrzanach (powiat stargardzki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobrzany — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobrzanach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dobrzan w powiecie stargardzkim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Dobrzany"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Głębokość jeziora Szadzko znają wszyscy zgodnie. Powierzchni nikt nie umie podać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobrzanach – jak wygląda prezentacja?",
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
      id: "co-da-sie-policzyc",
      heading: "Dwa i sześć — i nie wiadomo ile hektarów",
      paragraphs: [
        "Kilometr na południowy zachód od Dobrzan leży jezioro Szadzko. Jego głębokość maksymalna to dwa metry sześćdziesiąt — tę liczbę dwa niezależne źródła podają identycznie, co do dziesięciu centymetrów.",
        "Jego powierzchnię te same źródła podają od niecałych sześćdziesięciu do blisko osiemdziesięciu hektarów. Rozrzut ponad jednej trzeciej.",
        "To nie jest niestaranność. To jest kształt samego pomiaru.",
        "Głębokość mierzy się w jednym punkcie: wypływa się na środek, opuszcza sondę i ma się liczbę. Powierzchnię trzeba obejść dookoła — a brzeg jeziora z szerokim pasem trzcinowisk od południa nie ma jednej oczywistej linii. Gdzie kończy się woda, a zaczyna mokra łąka, zależy od tego, kto i kiedy patrzył.",
        "W kuchni jest dokładnie to samo i przynosi dokładnie te same skutki.",
        "Wiadomo co do kilograma, ile jest mąki. Mąka jest w jednym worku, w jednym miejscu, i jedno spojrzenie wystarczy. Nie wiadomo nawet w przybliżeniu, ile jest przypraw — bo przyprawy są w szufladzie, w szafce, w koszyku na blacie i jeszcze dwie stoją koło kuchenki.",
        "Dlatego kupuje się trzeci raz to samo. Nie z roztargnienia i nie dlatego, że komuś się nie chce sprawdzić. Rzeczy rozproszone są niepoliczalne z natury — sprawdzenie ich nie polega na zajrzeniu w jedno miejsce, tylko na obejściu czterech, i dlatego nie zdarza się prawie nigdy.",
        "Wynika z tego jedna zasada, którą da się stosować od razu: mierzyć to, co rozproszone, a nie to, co i tak widać.",
        "Przegląd worka z mąką nic nie daje, bo mąkę widać. Przegląd czterech miejsc z przyprawami — albo z olejami, albo z kaszami, jeśli to one się u Was rozłażą — daje w kwadrans konkretną listę i zwykle spore zaskoczenie. To jest jedyny przegląd, który cokolwiek wnosi.",
        "Uczciwie o drugiej stronie: nie wszystko da się skupić w jednym miejscu i wcale nie o to chodzi. Jezioro Szadzko nie przestanie być rozlane dlatego, że ktoś wolałby je łatwiej zmierzyć. Chodzi wyłącznie o to, żeby wiedzieć, czego się nie wie — bo wtedy przynajmniej się to sprawdza przed wyjściem do sklepu.",
        "Na koniec o urządzeniu i o tym, czego ono nie robi.",
        "Nie policzy za Was zapasów i nie ma z tym nic wspólnego — żeby było jasne. Zmniejsza natomiast liczbę rzeczy, które się po kuchni rozpraszają, bo kilka etapów jednego dania dzieje się w tym samym naczyniu, a nie w czterech. To jest efekt uboczny, nie funkcja, i tak go przedstawiam. Porządek nie przyjeżdża w kartonie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobrzanach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was najczęściej kupuje się drugi raz przez pomyłkę — to zwykle najlepszy trop, czego użyć na prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobrzanach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Dobrzan",
      paragraphs: [
        "Dobrzany leżą w powiecie stargardzkim, na Pojezierzu Ińskim, nad Pęzinką i nad północnym brzegiem jeziora Szadzko; do Stargardu jest stąd około dwudziestu kilku kilometrów, do Szczecina około pięćdziesięciu kilku. Samo miasto liczy ponad dwa tysiące stu mieszkańców (GUS, 31.12.2024) na pięciu i trzech dziesiątych kilometra kwadratowego, a cała gmina blisko cztery i pół tysiąca osób na stu trzydziestu czterech — trzydzieści cztery osoby na kilometr. Osadnictwo rozwinęło się tu w dwunastym wieku przy grodzie, a prawa miejskie miasto otrzymało w latach trzydziestych czternastego. W 1567 roku książę Barnim XI nadał Dobrzanom prawo do organizowania dwóch jarmarków rocznie. Stację kolejową otwarto 20 sierpnia 1896 roku, z połączeniem w kierunku wsi Kozy. Na początku dwudziestego wieku działały tu tartak, cegielnia, mleczarnia i fabryka sukna, a wcześniej młyn. Jezioro Szadzko ma dwa metry sześćdziesiąt w najgłębszym miejscu, brzegi zróżnicowane, od południa z szerokim pasem trzcinowisk, a po zachodniej stronie wznosi się wzgórze zamkowe.",
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

  districtsHeading: "Do których części Dobrzan dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Dobrzany też przyjadę",
  nearbyParagraphs: [
    "Stargard jest około dwudziestu kilku kilometrów stąd, Szczecin mniej więcej dwa razy dalej. Do Chociwla, Ińska, Suchania i Węgorzyna też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Stargard", "Chociwel", "Ińsko", "Suchań", "Węgorzyno"],

  about: blokOMnie("do Dobrzan", "w Dobrzanach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dobrzan bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzowanie jest tu potrzebne bardziej niż gdzie indziej: chodzi o Dobrzany w powiecie stargardzkim, na Pojezierzu Ińskim — nie o Dobrzany na Dolnym Śląsku i nie o Dobrą w powiecie łobeskim, która leży w tym samym województwie i jest podobnej wielkości.",
    },
    ...faqWspolne("w Dobrzanach"),
    {
      question: "Dlaczego ciągle kupuję to samo po raz trzeci?",
      answer:
        "Bo rzeczy rozproszone są niepoliczalne z natury, a nie z roztargnienia. Ile jest mąki, wiadomo — jest w jednym worku. Ile jest przypraw, nie wiadomo, bo są w czterech miejscach i sprawdzenie ich wymaga obejścia całej kuchni. Warto więc robić przegląd tego, co rozrzucone, a nie tego, co i tak widać: kwadrans na przyprawy albo oleje daje konkretną listę.",
    },
    {
      question: "Czy Thermomix pomaga zapanować nad bałaganem w kuchni?",
      answer:
        "Nie liczy zapasów i nie robi porządków — żeby było jasne. Zmniejsza natomiast liczbę rzeczy, które rozłażą się po kuchni w trakcie gotowania, bo kilka etapów jednego dania dzieje się w tym samym naczyniu zamiast w czterech. To efekt uboczny, nie funkcja, i tak go przedstawiam.",
    },
  ],

  geo: { lat: 53.359, lng: 15.429 },
};
