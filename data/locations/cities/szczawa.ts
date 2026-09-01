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
 * SZCZAWA — GMINA WIEJSKA w powiecie limanowskim. TERYT 120713_2.
 * ⚠️⚠️ GMINA ISTNIEJE OD 1 STYCZNIA 2025. Wcześniej była wsią
 * w gminie Kamienica. To NAJMŁODSZA GMINA W MAŁOPOLSCE.
 * 1 830 mieszkańców, 42,39 km². Wójt: Janusz Marek Opyd.
 * Urząd: Szczawa 290, 34-607 Szczawa.
 *
 * OŚ STRONY: GMINA, KTÓRA WŁAŚNIE ZACZĘŁA ISTNIEĆ. Cała chronologia
 * odzyskiwania samodzielności, z wyrokiem Trybunału Konstytucyjnego
 * włącznie. To oś unikalna w skali całego serwisu — żadna inna
 * z 183 gmin Małopolski nie ma takiej historii.
 *
 * ⚠️⚠️⚠️ NIE PISAĆ „JEDYNA NOWA GMINA W POLSCE W 2025 ROKU”.
 * BYŁY DWIE — druga to Grabówka w powiecie białostockim.
 * Poprawna formuła: „jedna z dwóch w Polsce i jedyna w Małopolsce”.
 * ⚠️⚠️ NIE MA STATUSU UZDROWISKA. Ma wody uznane za lecznicze
 * (1974) i STARA SIĘ o status uzdrowiska. Nie mylić tych dwóch rzeczy.
 * ⚠️ KOLIZJA Z KAMIENICĄ: strona Kamienicy stoi na Gorczańskim Parku
 * Narodowym i na „końcu drogi”. TU NIE PISAĆ o odległości, o Gorcach
 * jako osi ani o położeniu na uboczu.
 * ⚠️ NIE OPISYWAĆ sporu z sąsiadami ani szczegółowych wyników
 * konsultacji społecznych. Fakty ustrojowe — tak; konflikt — nie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — CHRONOLOGIA: 2013 referendum, ok. 93% za wydzieleniem →
 *   28.07.2015 pierwsze rozporządzenie RM tworzące gminę →
 *   28.12.2015 RM uchyla własne rozporządzenie →
 *   ⭐ 1.06.2017 WYROK TRYBUNAŁU KONSTYTUCYJNEGO, sygn. U 3/17:
 *   uchylenie było NIEZGODNE Z KONSTYTUCJĄ (brak konsultacji
 *   z mieszkańcami) → rozporządzenie RM z 1 PAŹDZIERNIKA 2024,
 *   Dz.U. 2024 poz. 1453 → 1 STYCZNIA 2025 gmina zaczyna istnieć →
 *   16.03.2025 pierwsze wybory: wójtem JANUSZ MAREK OPYD,
 *   680 głosów (66,34%), frekwencja 68,50%, rada 15 radnych
 *   (Dz.U., TK, PKW),
 * — ⚠️ DRUGĄ GMINĄ UTWORZONĄ 1.01.2025 BYŁA GRABÓWKA (pow.
 *   białostocki). Szczawa jest JEDYNĄ w Małopolsce,
 * — URZĄD: Szczawa 290, 34-607. Siedziba tymczasowa w budynku
 *   ośrodka zdrowia, docelowo w dawnej szkole. NA STARCIE 11 OSÓB.
 *   Budżet ok. 12 mln zł, w tym 1,453 mln zł wsparcia z KPRM,
 *   ⚠️ konflikt kodów pocztowych: urząd podaje 34-607,
 *   parafia 34-608. Użyto 34-607 (źródło urzędowe),
 * — GMINA TO JEDNA MIEJSCOWOŚĆ z kilkudziesięcioma przysiółkami.
 *   ⚠️ CZY POWOŁANO SOŁECTWA — NIEUSTALONE. Nie twierdzić,
 * — WODY: szczawy alkaliczno-żelaziste; ujęcia „Szczawa I”, „Hanna”,
 *   „Dziedzilla”. Wzmianki u Długosza; klasyfikacja 1788–1795;
 *   1924 Towarzystwo „Saturn”; ⭐ 1934 ANTONI GRYZINA-LASEK
 *   rozpoczyna eksploatację; 1938 pijalnia i obszar górniczy;
 *   ⭐ 1974 WODY UZNANE ZA LECZNICZE; jesień 2010 obecna pijalnia,
 * — POŁOŻENIE: 530–1 008 m n.p.m., u zbiegu potoku Głębieniec
 *   i rzeki Kamienicy, przy DW 968,
 * — WSPÓŁRZĘDNE ⚠️ PRZYBLIŻONE: 49,6069 / 20,2975 (kościół, nie urząd),
 * — ⚠️ GUS NIE LICZY JESZCZE TEJ GMINY OSOBNO — brak średniego wieku,
 *   salda migracji i zmiany od 2002. NAPISANE WPROST W TREŚCI.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — SŁOWA „UZDROWISKO” W ZNACZENIU STATUSU. Gmina o niego zabiega,
 *   ale go nie ma,
 * — GORCZAŃSKIEGO PARKU NARODOWEGO I „KOŃCA DROGI”. To oś KAMIENICY,
 * — SPORU Z SĄSIADAMI i wyników konsultacji w gminie Kamienica,
 * — LISTY PRZYSIÓŁKÓW. Nie znaleziono wiarygodnego, pełnego wykazu —
 *   lista wsi zawiera jedną pozycję i tak zostaje,
 * — STATYSTYK GUS. Nie istnieją jeszcze dla tej jednostki,
 * — HISTORII PARTYZANCKIEJ jako tematu. 1 Pułk Strzelców Podhalańskich
 *   AK, Bitwa Szczawska 13.01.1945 i „kościół partyzancki”
 *   (1957–1963) — MAKSYMALNIE JEDNO NEUTRALNE ZDANIE, bez liczb
 *   ofiar, nie przy CTA.
 *
 * PUŁAPKI:
 * — ⚠️ Większość stron w sieci wciąż opisuje Szczawę jako WIEŚ
 *   W GMINIE KAMIENICA. Dane sprzed 2025 r. są nieaktualne,
 * — ⚠️ WODA MINERALNA A URZĄDZENIE: wód mineralnych i leczniczych
 *   NIE WLEWA SIĘ do naczynia — osadzają kamień i psują sprzęt.
 *   To musi paść wprost, bo inaczej sekcja byłaby nieuczciwa,
 * — ⚠️ Współrzędne są przybliżone i wskazują kościół.
 */

export const SZCZAWA: CityContent = {
  slug: "szczawa",
  h1: "Thermomix Szczawa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Szczawa — prezentacja",
  seoDescription:
    "Thermomix w Szczawie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd na wszystkie przysiółki bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczawa — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Szczawie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Szczawy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam na wszystkie przysiółki, bez dopłat za odległość.",

  highlights: highlightyStandardowe("cała gmina i jej przysiółki, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczawie – jak wygląda prezentacja?",
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
      heading: "Najmłodsza gmina w Małopolsce — istnieje od stycznia dwa tysiące dwudziestego piątego",
      paragraphs: [
        "Szczawa jest gminą dopiero od pierwszego stycznia dwa tysiące dwudziestego piątego roku. Wcześniej, przez całą swoją historię, była wsią — najpierw w gminie Kamienica. To jedna z dwóch gmin utworzonych w Polsce tego dnia i jedyna w Małopolsce.",
        "Droga do tego trwała dwanaście lat i jest w polskich realiach wyjątkowa. W dwa tysiące trzynastym mieszkańcy poszli do referendum i około dziewięćdziesięciu trzech procent głosujących opowiedziało się za wydzieleniem. Dwudziestego ósmego lipca dwa tysiące piętnastego Rada Ministrów wydała rozporządzenie tworzące gminę. Pięć miesięcy później, dwudziestego ósmego grudnia, to samo rozporządzenie uchyliła.",
        "Pierwszego czerwca dwa tysiące siedemnastego roku Trybunał Konstytucyjny orzekł w sprawie o sygnaturze U trzy łamane przez siedemnaście, że uchylenie było niezgodne z Konstytucją — bo zapadło bez konsultacji z mieszkańcami. Na wykonanie tego wyroku trzeba było czekać jeszcze siedem lat. Rozporządzenie z pierwszego października dwa tysiące dwudziestego czwartego, opublikowane w Dzienniku Ustaw pod pozycją tysiąc czterysta pięćdziesiąt trzy, przywróciło gminę do życia z dniem pierwszego stycznia.",
        "Szesnastego marca dwa tysiące dwudziestego piątego roku odbyły się pierwsze wybory. Wójtem został Janusz Marek Opyd, który dostał sześćset osiemdziesiąt głosów, czyli sześćdziesiąt sześć procent z hakiem. Frekwencja wyniosła sześćdziesiąt osiem i pół procenta — to bardzo dużo jak na wybory samorządowe. Rada liczy piętnastu radnych.",
        "Urząd zaczynał pracę w jedenaście osób, w tymczasowej siedzibie w budynku ośrodka zdrowia; docelowo ma się przenieść do dawnej szkoły. Budżet na pierwszy rok to około dwunastu milionów złotych, w tym milion czterysta pięćdziesiąt trzy tysiące wsparcia z Kancelarii Prezesa Rady Ministrów na sam start.",
        "Gmina liczy tysiąc osiemset trzydziestu mieszkańców i czterdzieści dwa i cztery dziesiąte kilometra kwadratowego. Jest jedną miejscowością z kilkudziesięcioma przysiółkami rozrzuconymi między pięciuset trzydziestoma a tysiącem ośmioma metrami nad poziomem morza, u zbiegu potoku Głębieniec i rzeki Kamienicy, przy drodze wojewódzkiej dziewięćset sześćdziesiąt osiem.",
        "Jednej rzeczy nie napiszę, bo jej nie ma: statystyki Głównego Urzędu Statystycznego dla tej gminy jeszcze nie istnieją. Nie podam więc średniego wieku mieszkańca, salda migracji ani zmiany liczby ludności od dwa tysiące drugiego roku, tak jak podaję je przy innych gminach. Jednostka jest po prostu za młoda, żeby mieć własne serie danych.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj numer domu i nazwę przysiółka. Cała gmina to jedna miejscowość z numeracją ciągnącą się przez kilkadziesiąt przysiółków i kilkaset metrów różnicy wysokości, więc sam numer bez orientacyjnego punktu bywa dla nawigacji za mało.",
        "Jeśli mapa albo formularz w internecie wciąż pokazują Szczawę jako część gminy Kamienica, to nie pomyłka z Twojej strony — dane sprzed dwa tysiące dwudziestego piątego roku jeszcze się nie wszędzie zaktualizowały.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Woda, która ma tu własną historię — i czego z nią nie robić",
      paragraphs: [
        "Szczawa nazywa się tak od wód, które z niej biją: szczaw alkaliczno-żelazistych. Wzmiankował o nich już Jan Długosz, a naukowo opisano je w latach osiemdziesiątych osiemnastego wieku. Eksploatację na poważnie zaczął Antoni Gryzina-Lasek w tysiąc dziewięćset trzydziestym czwartym roku, cztery lata później stanęła pierwsza pijalnia i wyznaczono obszar górniczy. W tysiąc dziewięćset siedemdziesiątym czwartym wody uznano za lecznicze. Obecna pijalnia działa od jesieni dwa tysiące dziesiątego roku, a ujęcia noszą nazwy Szczawa pierwsza, Hanna i Dziedzilla.",
        "Warto od razu wyjaśnić jedną rzecz, bo status uzdrowiska i wody uznane za lecznicze to nie to samo. Szczawa ma to drugie i o to pierwsze się stara.",
        "A teraz rzecz praktyczna, o którą nikt nie pyta, dopóki nie jest za późno: wody mineralnej ani leczniczej nie wlewa się do Thermomixa. Ani do gotowania, ani do gotowania na parze. Wysoka mineralizacja osadza kamień na czujniku temperatury i na dnie naczynia znacznie szybciej niż zwykła woda z kranu, a przy wodach żelazistych dochodzi jeszcze przebarwienie stali. Do urządzenia idzie woda kranowa albo przefiltrowana, kropka.",
        "To wcale nie znaczy, że lokalna woda nie ma z gotowaniem nic wspólnego — po prostu jej miejsce jest w szklance, a nie w naczyniu.",
        "Do czego urządzenie przydaje się tutaj naprawdę? Po pierwsze, do zup i dań jednogarnkowych po dniu spędzonym na dworze — bo w gminie rozciągniętej pionowo na kilkaset metrów wysokości nikt nie wraca do domu o tej samej godzinie. Zupa gotuje się bez pilnowania i czeka ciepła.",
        "Po drugie, do napojów, które zabiera się ze sobą: herbaty z imbirem, kompotu, mleka na kakao dla dzieci. Temperatura jest odmierzona, więc nie ma zgadywania przy nalewaniu do termosu.",
        "Po trzecie, do przetworów. Tam, gdzie rośnie las i ogród, jesienią zawsze coś trzeba przerobić — powidła, przeciery, soki. Mieszanie i podgrzewanie dzieje się samo, a to jest cała robota, przez którą ludzie odpuszczają przetwory po pierwszym sezonie.",
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
    heading: "Szczawa i gotowanie — wody lecznicze i kuchnia po dniu w górach",
    paragraphs: [
      "Nazwa gminy pochodzi od szczaw — wód alkaliczno-żelazistych, które biją tu z kilku ujęć noszących nazwy Szczawa pierwsza, Hanna i Dziedzilla. Pisał o nich Długosz, opisano je naukowo pod koniec osiemnastego wieku, a w tysiąc dziewięćset trzydziestym czwartym roku Antoni Gryzina-Lasek rozpoczął ich eksploatację. Od tysiąc dziewięćset siedemdziesiątego czwartego wody mają status leczniczych; pijalnia w obecnym kształcie działa od jesieni dwa tysiące dziesiątego roku. Statusu uzdrowiska gmina jeszcze nie ma i o niego zabiega.",
      "Od razu praktyczna uwaga, bo pytanie pada często: wody mineralnej i leczniczej nie wlewa się do Thermomixa. Osadza kamień na czujniku temperatury i na dnie naczynia dużo szybciej niż woda kranowa, a wody żelaziste dodatkowo przebarwiają stal. Do urządzenia idzie woda z kranu albo filtrowana — lokalna woda jest do picia.",
      "Kuchnia jest tu górska i sezonowa, bo gmina rozciąga się od pięciuset trzydziestu do tysiąca ośmiu metrów nad poziomem morza. To znaczy: gęste zupy, dania jednogarnkowe, ciepłe napoje do termosu i jesienne przetwory z tego, co da ogród i las.",
      "Warto rozdzielić dwie okolice, choć leżą obok siebie: potrawy zagórzańskie w wersji z bryjką i prażuchą opisuję przy Mszanie Dolnej, a Gorce i park narodowy przy Kamienicy, do której Szczawa należała do końca dwa tysiące dwudziestego czwartego roku.",
      "Dla urządzenia najsensowniejsze jest tu więc gotowanie zup bez pilnowania, przygotowanie ciepłych napojów z odmierzoną temperaturą i całe mieszanie przy przetworach. Czego nie zrobi, mówię wprost: nie upiecze chleba, bo potrzebny jest piekarnik, i nie powinien mieć kontaktu z wodą mineralną.",
    ],
  },

  districtsHeading: "Gdzie w gminie Szczawa dojeżdżam?",
  districtsParagraphs: [
    "Wszędzie, bez żadnej dopłaty za odległość. Gmina Szczawa jest szczególna także pod tym względem: składa się z jednej miejscowości. Nie ma tu dzielnic ani odrębnych wsi — jest Szczawa i kilkadziesiąt jej przysiółków, rozrzuconych między pięciuset trzydziestoma a tysiącem ośmioma metrami nad poziomem morza.",
    "Nie wypisuję ich listą, bo nie znalazłam wykazu, za którego kompletność mogłabym ręczyć, a wolę nie zgadywać. Przy umawianiu wystarczy, że podasz numer domu i nazwę przysiółka albo najbliższy punkt orientacyjny — pijalnię, kościół, drogę wojewódzką dziewięćset sześćdziesiąt osiem.",
    "Gmina liczy tysiąc osiemset trzydziestu mieszkańców i czterdzieści dwa i cztery dziesiąte kilometra kwadratowego. Urząd mieści się pod adresem Szczawa dwieście dziewięćdziesiąt, tymczasowo w budynku ośrodka zdrowia — docelowo ma się przenieść do dawnej szkoły. Zaczynał pracę w jedenaście osób.",
    "Cała gmina istnieje dopiero od pierwszego stycznia dwa tysiące dwudziestego piątego roku, więc część map i wyszukiwarek wciąż pokazuje Szczawę jako wieś w gminie Kamienica. To nie jest błąd po Twojej stronie — po prostu dane jeszcze się nie zaktualizowały.",
    "Wieś leży u zbiegu potoku Głębieniec i rzeki Kamienicy, przy drodze wojewódzkiej dziewięćset sześćdziesiąt osiem. W czasie wojny działał tu pierwszy Pułk Strzelców Podhalańskich Armii Krajowej; pamiątką tamtych lat jest kościół zbudowany w latach tysiąc dziewięćset pięćdziesiątym siódmym do sześćdziesiątego trzeciego, nazywany partyzanckim.",
  ],
  districts: ["Szczawa"],

  nearbyHeading: "Kamienica, Mszana Dolna i Niedźwiedź też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Kamienicą, gminą wiejską Mszana Dolna, Niedźwiedziem, Ochotnicą Dolną i Słopnicami. Dojeżdżam do wszystkich gmin powiatu limanowskiego i nowotarskiego bez doliczania kosztu dojazdu.",
    "Uwaga na dane: do końca dwa tysiące dwudziestego czwartego roku Szczawa była wsią w gminie Kamienica i wiele serwisów wciąż tak ją opisuje. Od pierwszego stycznia dwa tysiące dwudziestego piątego to samodzielna gmina z własnym wójtem i własną radą.",
  ],
  nearbyTowns: [
    "Kamienica",
    "Mszana Dolna gmina",
    "Niedźwiedź",
    "Ochotnica Dolna",
    "Słopnice",
  ],

  about: blokOMnie("do Szczawy", "w powiecie limanowskim"),

  faq: [
    {
      question: "Mieszkam na przysiółku wysoko nad wsią. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Gmina rozciąga się od pięciuset trzydziestu do tysiąca ośmiu metrów nad poziomem morza i cała jest jedną miejscowością, więc przy umawianiu podaj numer domu plus nazwę przysiółka albo najbliższy punkt orientacyjny. Sam numer bez tego bywa dla nawigacji za mało — ale to wyłącznie kwestia zaplanowania trasy, nie kosztu.",
    },
    ...faqWspolne("w Szczawie"),
    {
      question: "Czy do Thermomixa mogę wlewać naszą wodę mineralną?",
      answer:
        "Nie i to jest ważne, żeby powiedzieć wprost. Wody mineralne i lecznicze mają wysoką mineralizację, przez co osadzają kamień na czujniku temperatury i na dnie naczynia znacznie szybciej niż woda z kranu, a wody żelaziste potrafią dodatkowo przebarwić stal. Dotyczy to tak samo gotowania, jak gotowania na parze. Do urządzenia leje się wodę kranową albo przefiltrowaną — miejscowa woda jest do picia, nie do naczynia. To akurat pytanie, które w Szczawie pada częściej niż gdziekolwiek indziej i wolę odpowiedzieć na nie zawczasu.",
    },
  ],

  geo: { lat: 49.6069, lng: 20.2975 },
};
