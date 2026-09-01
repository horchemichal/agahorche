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
 * KONIUSZA — GMINA WIEJSKA w powiecie proszowickim.
 * 9 078 mieszkańców (GUS, 31.12.2024), 88,5 km², 102 os./km²,
 * +5,2% od 2002, średni wiek 40,7. REGON 927 (737 osób fizycznych).
 * ⭐ PRACUJĄCY W ROLNICTWIE 50,9% — TO DANA GMINNA, NIE POWIATOWA
 * (przemysł i budownictwo 9,9%, usługi 16,3%). W gminach
 * oświęcimskich te same cztery liczby powtarzają się dla wszystkich —
 * tam to dane powiatowe; w Koniuszy są własne.
 * 29 SOŁECTW. Siedziba: Koniusza 55 (adres bez ulicy).
 * Wójt: Hubert Wawrzeń.
 *
 * OŚ STRONY: GMINA, KTÓRA UPRAWIA NAJWIĘCEJ KAPUSTY W POLSCE —
 * I NIE KISI Z NIEJ ANI JEDNEJ GŁÓWKI. W Koniuszy NIE MA ANI JEDNEJ
 * KISZARNI ANI ZAKŁADU PRZETWÓRCZEGO; kapusta „wyjeżdża jako świeża,
 * zielona główka”, ok. kilogramowa, przez place targowe, lokalne
 * skupy i bezpośrednio do dużych sklepów. W okolicy działa PIĘĆ
 * DUŻYCH SKUPÓW I 46 MAŁYCH (Dziennik Polski, 15.01.2025).
 * ⚠️⚠️ ROZDZIELENIE OD IGOŁOMI-WAWRZEŃCZYC (oś: „igołomka”,
 * technologia tuneli i wczesność zbiorów): tam TEZĄ JEST TECHNOLOGIA
 * UPRAWY. Tutaj tezą jest SKALA I BRAK PRZETWÓRSTWA.
 * ⚠️⚠️ ROZDZIELENIE OD SŁOMNIK (czosnek galicyjski ChOG, sąsiednia
 * gmina): tam tezą jest CERTYFIKAT. Koniusza nie ma żadnego wpisu.
 * ⚠️ CHARSZNICA (powiat miechowski) ma charsznicką kapustę kwaszoną
 * na LPT od 28.11.2006 — czyli markę i przetwórstwo, przy mniejszym
 * dziś areale. To jest kontrast, na którym stoi cała oś.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PIERWSZE MIEJSCE W POLSCE TRZECI ROK Z RZĘDU (e-warzywnictwo.pl,
 *   dane ARiMR z wniosków o dopłaty): 2022 — 1. miejsce, przed
 *   Charsznicą; 2023 — 1. miejsce, „po raz drugi wyprzedzając
 *   Charsznicę”, dalej Igołomia; 2024 — 1. miejsce, TRZECI ROK
 *   Z RZĘDU, 2. Igołomia-Wawrzeńczyce, 3. Charsznica,
 * — AREAŁ: ~200 ha (2020) → PONAD 800 ha (2024), czyli
 *   CZTEROKROTNY WZROST W CZTERY LATA (Dziennik Polski 15.01.2025,
 *   WP Finanse 17.01.2025). Cała Polska: 13 292 ha kapusty w 2024 —
 *   czyli Koniusza to ok. 6% krajowego areału w jednej gminie.
 *   Intensywność: „co 8 hektar użytków rolnych to kapusta” (2024);
 *   w Igołomi-Wawrzeńczycach co 6.
 *   ⚠️⚠️ LICZBY 762,3 ha NIE UŻYWAĆ — nie udało się jej potwierdzić
 *   w żadnym publicznie dostępnym źródle; e-warzywnictwo sprzedaje
 *   dane hektarowe per gmina za paywallem i w darmowych artykułach
 *   podaje wyłącznie rankingi,
 * — POWIAT PROSZOWICKI: 1 119 ha kapusty (2023), 2. miejsce
 *   w Polsce po sieradzkim (1 313 ha), przed miechowskim (995 ha).
 *   Sama Koniusza to ok. dwie trzecie areału całego powiatu,
 * — 29 SOŁECTW (koniusza.pl/solectwa, potwierdzone przez GUS):
 *   Biórków Mały, Biórków Wielki, Budziejowice, Chorążyce,
 *   Czernichów, Dalewice, Glew, Glewiec, Gnatowice, Górka Jaklińska,
 *   Karwin, Koniusza, Łyszkowice, Muniaczkowice, Niegardów,
 *   Niegardów Kolonia, Piotrkowice Małe, Piotrkowice Wielkie,
 *   Polekarcice, Posądza, Przesławice, Rzędowice, Siedliska,
 *   Szarbia, Wąsów, Wierzbno, Wroniec, Wronin, Zielona.
 *   ⚠️ polskawliczbach podaje 31 — TO BŁĄD. Ufać gminie i GUS: 29,
 * — HISTORIA (studium heraldyczne gminy): 1212 pierwsza wzmianka
 *   o Koniuszy; 1244 fundacja parafii w Niegardowie; 1326 pierwsza
 *   wzmianka o parafii w Koniuszy; 1340 trzy parafie liczyły
 *   2 565 OSÓB — świadectwo bardzo wczesnego, gęstego osadnictwa;
 *   1343–1380 rycerz Wilczko z Birkowa, od 1362 Jan Kolczek herbu
 *   Topór; 1374 pierwsza wzmianka o Biórkowie Wielkim; majątki
 *   należały do klasztorów w Tyńcu, Miechowie i Staniątkach oraz
 *   do kapituły krakowskiej; sierpień 1770 walczy tu dwutysięczny
 *   oddział konfederatów barskich pod KAZIMIERZEM PUŁASKIM;
 *   ⭐ KWIECIEŃ 1794 — TADEUSZ KOŚCIUSZKO OBOZOWAŁ W KONIUSZY PRZEZ
 *   BLISKO DWA DNI PRZED MARSZEM NA RACŁAWICE; zmobilizowano stąd
 *   co najmniej „paruset chłopów”; legenda wiąże BARTOSZA
 *   GŁOWACKIEGO ZE RZĘDOWICAMI; 1795 zabór austriacki;
 *   1815–1914 zabór rosyjski,
 * — ZABYTKI: kościół św. Piotra i Pawła w Koniuszy — drewniany już
 *   przed 1420, murowany przed połową XV w.; DREWNIANA DZWONNICA
 *   w Koniuszy z XVIII w., dzwony z 1759, 1781 i 1812; kościół
 *   św. Jakuba Starszego w Niegardowie — 1605; drewniany kościół
 *   Wniebowzięcia NMP w Biórkowie Wielkim — 1633; kaplica
 *   w Dalewicach — 1652; Izba Pamięci w Szarbi i Izba Pamięci
 *   w Karwinie. Przez gminę przechodzą Małopolski Szlak Insurekcji
 *   Kościuszkowskiej i Szlak Bartosza Głowackiego,
 * — DOJAZD: BRAK LINII KOLEJOWEJ. Droga wojewódzka nr 776
 *   Kraków – Proszowice – Kazimierza Wielka – Busko-Zdrój.
 *   MPK KRAKÓW NIE DOJEŻDŻA. Na trasie Proszowice–Kraków działa
 *   SIEDMIU PRZEWOŹNIKÓW prywatnych (AD, AK bus, PKS Małopolanin,
 *   MAT-BUS, ARO-BUS, Koleje Małopolskie, PEKAES); czas przejazdu
 *   36 min – 1 h 08 min, większość 43–55 min; trasa przewoźnika AD
 *   prowadzi przez Koniuszę. Autobus A37 Małopolskich Linii
 *   Dowozowych obsługuje kierunek Proszowice,
 * — RZEKI: Szreniawa i Ścieklec,
 * — WSPÓŁRZĘDNE (UG, Koniusza 55): 50,1886109 / 20,2142610.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LICZBY 762,3 ha. Nie potwierdzona. Użyte „ponad 800 ha (2024)”
 *   i „ok. 200 ha (2020)”,
 * — TECHNOLOGII UPRAWY POD OSŁONAMI JAKO WĄTKU. To oś
 *   IGOŁOMI-WAWRZEŃCZYC,
 * — CERTYFIKATU. Koniusza NIE MA żadnego wpisu na Liście Produktów
 *   Tradycyjnych. Napisane wprost. Oś certyfikatowa należy
 *   do SŁOMNIK,
 * — LICZBY GOSPODARSTW uprawiających kapustę i pozostałych upraw
 *   warzywniczych gminy. Dane per gmina są płatne,
 * — ŚWIĘTA KAPUŚCIANEGO. ⚠️ NIE ZNALEZIONO żadnej cyklicznej imprezy
 *   kapuścianej w Koniuszy. „Małopolskie Dni Kapusty” to impreza
 *   branżowa, nie tutejsza. TO WZMACNIA OŚ: areał jest, święta nie ma,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Potwierdzone tylko, że GOK Koniusza
 *   organizował w 2019 r. spotkanie dla KGW i osób tworzących
 *   tradycyjne przetwory,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje dla powiatu
 *   proszowickiego 7 459,50 zł (86,4% średniej krajowej) — to dana
 *   POWIATOWA. Bezrobocie 5,5% serwis oznacza jako szacunek.
 *   ⚠️ ALE struktura pracujących (50,9 / 9,9 / 16,3 / 1,0) JEST
 *   GMINNA i można jej użyć — w Koniuszy liczby są inne niż
 *   u sąsiadów.
 *
 * PUŁAPKI:
 * — ⚠️⚠️ SOŁECTWO CZERNICHÓW W TEJ GMINIE to NIE gmina Czernichów
 *   w powiecie krakowskim (najstarsza szkoła rolnicza, kasa
 *   Stefczyka). Dwie różne miejscowości. NIE UMIESZCZAĆ
 *   w nearbyTowns,
 * — ratusz.pl podaje nieaktualnego wójta („Wiesław Rudek”).
 *   Aktualny wg strony gminy: HUBERT WAWRZEŃ,
 * — SIEDZIBA JEST W KONIUSZY — jednym z 29 sołectw i nie
 *   największym. Adres bez ulicy: „Koniusza 55”,
 * — BITWA POD RACŁAWICAMI rozegrała się w gminie Racławice
 *   (powiat miechowski). Tutaj Kościuszko tylko obozował przed
 *   wymarszem — tak samo jak w Luborzycy.
 */

export const KONIUSZA: CityContent = {
  slug: "koniusza",
  h1: "Thermomix Koniusza – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Koniusza — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Koniusza: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich 29 sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Koniusza — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Koniusza. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Koniuszy, Biórkowa Wielkiego, Posądzy, Niegardowa i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia dziewięć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koniuszy – jak wygląda prezentacja?",
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
      heading: "Najwięcej kapusty w Polsce i ani jednej kiszarni",
      paragraphs: [
        "Koniusza jest gminą o największym areale kapusty w Polsce. I nie raz — trzeci rok z rzędu. W dwa tysiące dwudziestym drugim wyprzedziła Charsznicę, w dwa tysiące dwudziestym trzecim powtórzyła to samo, a w dwa tysiące dwudziestym czwartym utrzymała pierwsze miejsce, mając za sobą Igołomię-Wawrzeńczyce i dopiero potem Charsznicę.",
        "Tempo tej zmiany jest zresztą trudne do uwierzenia. W dwa tysiące dwudziestym roku kapustę uprawiano tu na mniej więcej dwustu hektarach. Cztery lata później na ponad ośmiuset. Czterokrotnie więcej w cztery lata.",
        "Żeby to zważyć: w całej Polsce kapusty jest trzynaście tysięcy dwieście dziewięćdziesiąt dwa hektary. Jedna gmina w powiecie proszowickim to około sześciu procent krajowego areału. Branżowa prasa opisuje to prosto: co ósmy hektar użytków rolnych w Koniuszy to kapusta.",
        "A teraz najciekawsze. W tej gminie nie ma ani jednej kiszarni. Ani jednego zakładu przetwórczego. Kapusta wyjeżdża stąd taka, jaka wyrosła — świeża, zielona główka, mniej więcej kilogramowa — przez place targowe, przez pięć dużych i czterdzieści sześć małych skupów działających w okolicy, i bezpośrednio do dużych sklepów.",
        "To jest dokładna odwrotność sytuacji w Charsznicy, trzydzieści kilometrów stąd. Tam charsznicka kapusta kwaszona jest na ministerialnej Liście Produktów Tradycyjnych od dwa tysiące szóstego roku, jest marka, jest przetwórstwo i jest święto. Charsznica straciła pierwsze miejsce w areale, ale zachowała wszystko, co się wokół kapusty buduje.",
        "Koniusza ma areał. Nie ma marki, nie ma wpisu do rejestru i — sprawdzałam — nie ma nawet dorocznego święta kapusty. Kiszenie odbywa się tu w domach, nie w zakładach.",
        "Rolnictwo jest w tej gminie zresztą wszystkim: pracuje w nim pięćdziesiąt jeden procent zatrudnionych, przy dziesięciu procentach w przemyśle i budownictwie. To liczba gminna, nie powiatowa, i naprawdę wyjątkowa w skali Małopolski.",
        "Historia jest tu równie rolnicza i bardzo stara. Pierwsza wzmianka o Koniuszy pochodzi z tysiąc dwieście dwunastego roku, a już w tysiąc trzysta czterdziestym trzy tutejsze parafie liczyły dwa tysiące pięciuset sześćdziesięciu pięciu wiernych — na ówczesne czasy osadnictwo wyjątkowo gęste. W kwietniu tysiąc siedemset dziewięćdziesiątego czwartego roku obozował tu przez blisko dwa dni Tadeusz Kościuszko przed wymarszem na Racławice; stąd zmobilizowano co najmniej kilkuset chłopów, a miejscowa tradycja wiąże Bartosza Głowackiego ze Rzędowicami.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Koniusza?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Jest ich dwadzieścia dziewięć — więcej niż w niejednej gminie miejsko-wiejskiej — a gmina zajmuje osiemdziesiąt osiem kilometrów kwadratowych przy bardzo niskiej gęstości zaludnienia. Bez nazwy wsi nie da się zaplanować trasy.",
        "Jeśli macie gospodarstwo, powiedzcie, w jakim jesteście momencie sezonu. Przy kapuście najgorętszy jest wrzesień i październik, a wtedy nie ma sensu umawiać się na środek dnia — wieczór albo niedziela sprawdzają się lepiej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Koniusza"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiszenie zostało w domach",
      paragraphs: [
        "Skoro w gminie z największym areałem kapusty w Polsce nie ma ani jednej kiszarni, to znaczy, że kiszenie nie zniknęło — po prostu odbywa się tam, gdzie zawsze się odbywało. W kuchniach i w piwnicach.",
        "I to jest jedno z najbardziej sensownych zastosowań tego urządzenia, o którym prawie się nie mówi w folderach.",
        "Pierwsza rzecz to szatkowanie. Przy jednej główce nie ma problemu, ale przy dziesięciu czy dwudziestu to jest godzina roboty nożem albo szatkownicą, z ryzykiem dla palców. Tu kapusta idzie na plastry w kilkanaście sekund, równo — a równa grubość ma znaczenie, bo od niej zależy, czy wszystko ukisi się w tym samym tempie.",
        "Druga to zalewa i przyprawy. Solankę odmierza się z dokładnością do grama, prosto do naczynia, na wbudowanej wadze — a proporcja soli do kapusty to jedyna rzecz, przy której naprawdę nie wolno się pomylić. Marchew, kminek i liść laurowy rozdrabnia się w tym samym naczyniu.",
        "Trzecia dotyczy tego, co powstaje z kapusty potem. Bigos, kapuśniak, gołąbki, farsz do pierogów, surówka — wszystko robi się z tego samego surowca, a przy dużych ilościach różnica polega na tym, że urządzenie gotuje bez pilnowania i samo się wyłącza. Bigos, który tradycyjnie trzeba mieszać, żeby nie przywarł, tu mieszany jest sam z siebie.",
        "Czwarta jest o kiszonkach w mniejszej skali: ogórki, buraki na zakwas, kimchi z pekińskiej. Zalewy i pasty przyprawowe powstają w kilka minut, a to zwykle jedyny etap, przez który ludzie tego nie robią.",
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
    heading: "Koniusza i gotowanie — sześć procent polskiej kapusty",
    paragraphs: [
      "Zacznę uczciwie: gmina Koniusza nie ma żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych. Nie ma też dorocznego święta kapusty ani lokalnej marki — sprawdzałam i nie znalazłam. Przy pierwszym miejscu w Polsce pod względem areału to zaskakujące, ale tak jest.",
      "Areał jest za to bezsporny. Trzeci rok z rzędu Koniusza uprawia najwięcej kapusty w kraju, wyprzedzając Igołomię-Wawrzeńczyce i Charsznicę. Powierzchnia wzrosła z około dwustu hektarów w dwa tysiące dwudziestym roku do ponad ośmiuset w dwa tysiące dwudziestym czwartym — czyli czterokrotnie w cztery lata. To około sześciu procent całego polskiego areału kapusty w jednej gminie.",
      "Cały powiat proszowicki jest drugi w Polsce z tysiącem stu dziewiętnastoma hektarami, a Koniusza to jakieś dwie trzecie tej powierzchni.",
      "Kapusta wyjeżdża stąd świeża. W gminie nie ma ani jednej kiszarni ani zakładu przetwórczego; sprzedaż idzie przez place targowe, przez pięć dużych i czterdzieści sześć małych skupów w okolicy oraz bezpośrednio do sieci handlowych. To znaczy, że kiszenie odbywa się w domach — i że w tej gminie prawie każdy wie, jak się to robi.",
      "Rolnictwo daje tu ponad połowę zatrudnienia: pięćdziesiąt jeden procent, przy dziesięciu procentach w przemyśle i budownictwie. To dane gminne, nie powiatowe, i w skali Małopolski wyjątkowe.",
      "Dla urządzenia najsensowniejsze jest tu szatkowanie w większych ilościach, odmierzanie solanki co do grama oraz wszystko, co z kapusty powstaje później: bigos, kapuśniak, farsze, gołąbki. Czego nie zrobi, mówię wprost: nie ugniecie kapusty w beczce i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i pracą rąk.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Koniusza dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu dziewięciu, bez żadnej dopłaty za odległość. Gmina liczy ponad dziewięć tysięcy mieszkańców na osiemdziesięciu ośmiu kilometrach kwadratowych, przy bardzo niskiej gęstości — sto dwie osoby na kilometr kwadratowy.",
    "Sołectwa to: Biórków Mały, Biórków Wielki, Budziejowice, Chorążyce, Czernichów, Dalewice, Glew, Glewiec, Gnatowice, Górka Jaklińska, Karwin, Koniusza, Łyszkowice, Muniaczkowice, Niegardów, Niegardów Kolonia, Piotrkowice Małe, Piotrkowice Wielkie, Polekarcice, Posądza, Przesławice, Rzędowice, Siedliska, Szarbia, Wąsów, Wierzbno, Wroniec, Wronin i Zielona.",
    "Urząd gminy mieści się w Koniuszy pod adresem bez nazwy ulicy — po prostu Koniusza pięćdziesiąt pięć. Sama Koniusza jest jednym z dwudziestu dziewięciu sołectw i nie największym.",
    "W Koniuszy stoi kościół świętych Piotra i Pawła, murowany jeszcze przed połową piętnastego wieku, oraz drewniana dzwonnica z osiemnastego stulecia z dzwonami z tysiąc siedemset pięćdziesiątego dziewiątego, tysiąc siedemset osiemdziesiątego pierwszego i tysiąc osiemset dwunastego roku. W Biórkowie Wielkim jest drewniany kościół z tysiąc sześćset trzydziestego trzeciego, w Niegardowie murowany z tysiąc sześćset piątego, a w Dalewicach kaplica z tysiąc sześćset pięćdziesiątego drugiego.",
    "Przez gminę przechodzą Małopolski Szlak Insurekcji Kościuszkowskiej i Szlak Bartosza Głowackiego. Izby pamięci działają w Szarbi i w Karwinie.",
    "Dojazd: kolei w gminie nie ma i krakowskie MPK tu nie dojeżdża. Główną osią jest droga wojewódzka siedemset siedemdziesiąt sześć z Krakowa przez Proszowice do Kazimierzy Wielkiej. Na trasie z Proszowic do Krakowa kursuje siedmiu przewoźników prywatnych; przejazd zajmuje najczęściej od czterdziestu trzech do pięćdziesięciu pięciu minut.",
  ],
  districts: [
    "Koniusza",
    "Biórków Wielki",
    "Posądza",
    "Niegardów",
    "Piotrkowice Wielkie",
    "Piotrkowice Małe",
    "Glew",
    "Dalewice",
    "Wierzbno",
    "Szarbia",
    "Rzędowice",
    "Karwin",
    "Muniaczkowice",
    "Wronin",
    "Zielona",
    "Przesławice",
    "Siedliska",
    "Polekarcice",
    "Biórków Mały",
    "Budziejowice",
    "Chorążyce",
    "Gnatowice",
    "Glewiec",
    "Górka Jaklińska",
    "Łyszkowice",
    "Niegardów Kolonia",
    "Wąsów",
    "Wroniec",
  ],

  nearbyHeading: "Proszowice, Słomniki i Igołomia-Wawrzeńczyce też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Proszowicami, Słomnikami, Kocmyrzowem-Luborzycą, Igołomią-Wawrzeńczycami i Pałecznicą. Dojeżdżam do wszystkich gmin powiatu proszowickiego i krakowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylące: Czernichów w tej gminie to sołectwo, a nie gmina Czernichów w powiecie krakowskim, znana z najstarszej szkoły rolniczej w Polsce. To dwie różne miejscowości o tej samej nazwie.",
  ],
  nearbyTowns: [
    "Proszowice",
    "Słomniki",
    "Kocmyrzów-Luborzyca",
    "Igołomia-Wawrzeńczyce",
    "Pałecznica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Koniusza", "w powiecie proszowickim"),

  faq: [
    {
      question: "Mieszkam w Biórkowie Wielkim albo w Posądzy. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwadzieścia dziewięć sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — gmina jest rozległa i rzadko zaludniona, więc nazwa jest potrzebna do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Koniusza"),
    {
      question: "Czy Thermomix pomaga przy kiszeniu kapusty?",
      answer:
        "Pomaga i w tej gminie to akurat pytanie najbardziej na miejscu. Szatkuje kapustę w kilkanaście sekund zamiast godziny nożem, i to równo — a równa grubość decyduje o tym, czy wszystko ukisi się w tym samym tempie. Solankę odmierzysz na wbudowanej wadze co do grama, a proporcja soli do kapusty to jedyna rzecz, przy której naprawdę nie wolno się pomylić. Marchew i przyprawy rozdrobni w tym samym naczyniu. Czego nie zrobi: nie ugniecie kapusty w beczce ani nie przypilnuje fermentacji w piwnicy — to zostaje przy Was.",
    },
  ],

  geo: { lat: 50.1886109, lng: 20.214261 },
};
