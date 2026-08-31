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
 * BOCHNIA — GMINA WIEJSKA w powiecie bocheńskim. TERYT 1201032.
 * ⚠️⚠️ TO ODRĘBNA GMINA OD MIASTA BOCHNIA (TERYT 1201011).
 * 20 857 mieszkańców (GUS, 31.12.2024), 130,9 km², 157 os./km²,
 * ⭐ +24,2% OD 2002 — przy MIEŚCIE, które w tym samym czasie
 * STRACIŁO 3,4% i liczy 28 369 osób. Mediana wieku 39,5
 * (miasto 42,5). Saldo migracji +73. REGON 2 106.
 * Lesistość 20,7%, przeciętne mieszkanie 103 m².
 * 31 SOŁECTW. Wójt: Marek Edward Bzdek (3. kadencja), 20 radnych.
 * Siedziba: ul. Kazimierza Wielkiego 26, 32-700 Bochnia — W MIEŚCIE,
 * do którego gmina nie należy.
 *
 * OŚ STRONY: PARA MIASTO–PIERŚCIEŃ. Dwie gminy o tej samej nazwie,
 * w tym samym powiecie, na tym samym rynku pracy, idą w przeciwne
 * strony: pierścień urósł o ćwierć, rdzeń się skurczył.
 * ⚠️⚠️ TO NIE JEST OŚ „GMINA, KTÓRA ROŚNIE” — taką ma GROMNIK.
 * ⚠️⚠️ TO NIE JEST OŚ „GMINA, KTÓRA SIĘ KURCZY” — taką ma PRZECISZÓW.
 * TU MUSI CHODZIĆ O PARĘ i o to, że jedno jest odwrotnością drugiego.
 * Bez zestawienia obu liczb obok siebie strona wchodzi w cudzą oś.
 * ⚠️⚠️ SÓL I UZDROWISKO W KOPALNI TO OŚ MIASTA BOCHNIA. Nie ruszać
 * poza jednym zdaniem w kontekście historycznym.
 * ⚠️ STALPRODUKT i inni więksi pracodawcy powiatu SĄ W MIEŚCIE,
 * nie w gminie. Nie przypisywać ich gminie wiejskiej.
 * ⚠️ „URZĄD W MIEŚCIE, DO KTÓREGO NIE NALEŻY” to oś GMINY TARNÓW.
 * Fakt wolno podać, ale nie jako tezę.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ LUDNOŚĆ: gmina wiejska 20 857 (31.12.2024), +24,2% od 2002;
 *   MIASTO BOCHNIA 28 369, −3,4% od 2002. Mediana wieku 39,5
 *   kontra 42,5. Saldo migracji gminy +73 (GUS, polskawliczbach),
 * — 31 SOŁECTW (bochnia-gmina.pl): Baczków, Bessów, Bogucice,
 *   Brzeźnica, Buczyna, Cerekiew, Chełm, Cikowice, Damienice,
 *   Dąbrowica, Gawłów, Gierczyce, Gorzków, Grabina, Krzyżanowice,
 *   Łapczyca, Majkowice, Moszczenica, Nieprześnia, Nieszkowice Małe,
 *   Nieszkowice Wielkie, Ostrów Szlachecki, Pogwizdów, Proszówki,
 *   Siedlec, Słomka, Stanisławice, Stradomka, Wola Nieszkowska,
 *   Zatoka, Zawada. ⚠️ polskawliczbach podaje 35 miejscowości —
 *   różnica to przysiółki; SOŁECTW JEST 31,
 * — GEOGRAFIA: północ gminy to KOTLINA SANDOMIERSKA (dolina Raby,
 *   płasko, gleby aluwialne), południe to POGÓRZE WIELICKIE
 *   (wzniesienia, sady i mniejsze pola). Lesistość 20,7%,
 * — DROGI I KOLEJ: magistrala E30 (linia kolejowa nr 91);
 *   WĘZEŁ A4 „BOCHNIA” z łącznikiem do DK94 o długości 1 883 m,
 *   budowany od 28.12.2017 do 31.12.2021. ⚠️ W KTÓRYM SOŁECTWIE
 *   LEŻY WĘZEŁ — NIEUSTALONE, nie podawać,
 * — KULTURA: Gminne Centrum Kultury, Czytelnictwa i Sportu prowadzi
 *   PONAD 20 ŚWIETLIC wiejskich. Orkiestra dęta w Baczkowie,
 *   Zespół Pieśni i Tańca „Siedlecanie”. KGW: Bessów, Brzeźnica,
 *   Nieprześnia, Ostrów Szlachecki,
 * — ⭐ BIESIADA AGROTURYSTYCZNA W SIEDLCU — XXI EDYCJA.
 *   Dożynki gminne co roku w innej wsi,
 * — HISTORIA: ok. 1123–1125 dokument wymienia „Łapczycę z Kolanowem
 *   i solą”; 1136 bulla Innocentego II; 1198 zapis „sal de Bochegna”.
 *   Łapczyca jest dziś sołectwem gminy wiejskiej,
 * — ⚠️ BRAK WPISU GMINY NA LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   „Smaki z Bocheńszczyzny” to marka handlowa/promocyjna,
 *   NIE rejestr ministerialny. NAPISANE WPROST,
 * — WSPÓŁRZĘDNE ⚠️ PRZYBLIŻONE: ~49,9694 / 20,4295. Dokładnych
 *   współrzędnych urzędu nie potwierdzono.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KOPALNI SOLI, TĘŻNI I UZDROWISKA W KOMORZE WAŻYN. To oś MIASTA
 *   Bochnia. Sól pojawia się wyłącznie w jednym zdaniu o dokumencie
 *   z około 1123 r., bo dotyczy Łapczycy — sołectwa TEJ gminy,
 * — NAZWANYCH PRACODAWCÓW. Więksi pracodawcy powiatu mają adresy
 *   w MIEŚCIE,
 * — WPISU NA LPT. Gmina go nie ma i strona mówi to wprost,
 * — SOŁECTWA, W KTÓRYM LEŻY WĘZEŁ A4. Nieustalone,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane w serwisach są powiatowe.
 *
 * PUŁAPKI:
 * — ⚠️ WYSZUKIWARKI MIESZAJĄ MIASTO Z GMINĄ WIEJSKĄ. Miasto Bochnia
 *   to osobna gmina miejska; ul. Kazimierza Wielkiego 26 to adres
 *   urzędu GMINY WIEJSKIEJ, mimo że leży w mieście,
 * — ⚠️ NIESZKOWICE MAŁE i NIESZKOWICE WIELKIE to dwa sołectwa,
 *   podobnie jak Wola Nieszkowska — trzy różne miejscowości
 *   o podobnych nazwach,
 * — ⚠️ 31 SOŁECTW przy 35 miejscowościach w statystykach.
 */

export const BOCHNIA_GMINA: CityContent = {
  slug: "bochnia-gmina",
  h1: "Thermomix gmina Bochnia – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Bochnia — prezentacja",
  seoDescription:
    "Thermomix w gminie wiejskiej Bochnia: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich trzydziestu jeden sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix gmina Bochnia — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Bochnia. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łapczycy, Proszówek, Stanisławic, Nieszkowic, Siedlca i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie trzydzieści jeden sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Bochnia – jak wygląda prezentacja?",
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
      heading: "Dwie gminy o tej samej nazwie, idące w przeciwne strony",
      paragraphs: [
        "Bochnia to dwie odrębne gminy: miasto i otaczająca je gmina wiejska. Mają tę samą nazwę, ten sam powiat, ten sam rynek pracy i ten sam urząd pocztowy. Od dwa tysiące drugiego roku poszły jednak w dokładnie przeciwne strony.",
        "Gmina wiejska urosła o dwadzieścia cztery i dwie dziesiąte procenta i liczy dziś dwadzieścia tysięcy osiemset pięćdziesiąt siedem osób. Miasto w tym samym czasie straciło trzy i cztery dziesiąte procenta i ma dwadzieścia osiem tysięcy trzysta sześćdziesiąt dziewięć.",
        "Za tymi dwiema liczbami stoi jedna prosta rzecz: to w większości ci sami ludzie. Nikt nie wyjechał z powiatu — przeprowadził się o siedem kilometrów, na działkę w Łapczycy albo w Stanisławicach, i dalej pracuje tam, gdzie pracował.",
        "Widać to w drugiej parze liczb. Mediana wieku w gminie wiejskiej wynosi trzydzieści dziewięć i pół roku, w mieście czterdzieści dwa i pół. Trzy lata różnicy między sąsiadującymi jednostkami to bardzo dużo i biorą się dokładnie stąd, że wyprowadzają się przede wszystkim ludzie w wieku, w którym buduje się dom. Saldo migracji gminy wynosi plus siedemdziesiąt trzy osoby rocznie.",
        "I trzecia liczba, chyba najbardziej wymowna: przeciętne mieszkanie w gminie wiejskiej ma sto trzy metry kwadratowe. To nie jest mieszkanie, tylko dom.",
        "Dla mnie ma to bardzo praktyczne przełożenie. Przyjeżdżam tu głównie do kuchni w nowych domach — dużych, z wyspą albo z długim blatem, urządzanych od zera przez ludzi, którzy właśnie skończyli budowę i mają świeżo w pamięci każdą złotówkę. To zupełnie inna rozmowa niż w mieszkaniu w bloku, gdzie pierwsze pytanie brzmi „gdzie ja to postawię”.",
        "Gmina ma trzydzieści jeden sołectw i dwa różne krajobrazy. Północ leży w Kotlinie Sandomierskiej, w dolinie Raby — płasko, z żyznymi glebami aluwialnymi. Południe to już Pogórze Wielickie, ze wzniesieniami, sadami i mniejszymi polami. Lasy zajmują dwadzieścia i siedem dziesiątych procenta powierzchni.",
        "Przez gminę biegnie magistrala kolejowa E trzydzieści, czyli linia numer dziewięćdziesiąt jeden, a od końca dwa tysiące dwudziestego pierwszego roku działa węzeł autostrady A cztery o nazwie Bochnia z prawie dwukilometrowym łącznikiem do drogi krajowej dziewięćdziesiąt cztery. Budowano go równo cztery lata.",
        "Historia gminy jest przy tym starsza niż miasta. Dokument z około tysiąc sto dwudziestego trzeciego roku wymienia Łapczycę z Kolanowem i solą — a Łapczyca jest dziś sołectwem tej właśnie gminy wiejskiej. Nazwa Bochnia pojawia się w źródłach później, w tysiąc sto dziewięćdziesiątym ósmym, jako sal de Bochegna.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Bochnia?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj nazwę sołectwa. Gmina ma ich trzydzieści jeden i rozciąga się od doliny Raby na północy po pogórze na południu, więc to realna różnica w trasie — choć nie w cenie, bo dojazd jest bez dopłat wszędzie.",
        "Przy Nieszkowicach dodaj, czy chodzi o Małe, czy o Wielkie; jest jeszcze osobna Wola Nieszkowska. Trzy podobne nazwy w jednej gminie potrafią zmylić nawigację.",
        "I jedna rzecz, która myli najczęściej: urząd gminy wiejskiej ma adres przy ulicy Kazimierza Wielkiego w Bochni, czyli w mieście, które do gminy nie należy i jest odrębną gminą miejską.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Bochnia"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dwa krajobrazy, dwa ogrody, dwie różne jesienie",
      paragraphs: [
        "Ta gmina ma na swoim terenie dwie różne krainy i widać to w tym, co ludzie przynoszą z własnego pola. Na północy, w dolinie Raby, jest płasko i żyznie: warzywa, ziemniaki, zboża, duże grządki. Na południu, na Pogórzu Wielickim, są wzniesienia, sady i mniejsze pola.",
        "W praktyce znaczy to, że jesienią w jednej części gminy przerabia się głównie warzywa, a w drugiej głównie owoce. I że pytanie „co z tym wszystkim zrobić” pada tu naprawdę często, bo domy są duże, działki też, a plony potrafią przyjść naraz.",
        "Po stronie warzywnej urządzenie zdejmuje z rąk najgorszą robotę: siekanie cebuli i pora, tarcie marchewki i selera, mielenie ziemniaków na placki. Zupa krem z dyni albo z pomidorów gotuje się i miksuje w jednym naczyniu, bez przelewania gorącego do blendera — a to jest ten moment, przy którym w kuchni najczęściej dochodzi do poparzeń.",
        "Po stronie owocowej najwięcej daje mieszanie. Powidła, przeciery, mus jabłkowy — wszystko, co trzeba pilnować przez godzinę, żeby się nie przypaliło, dzieje się tu samo, z ustawioną temperaturą i obrotami. Przetwory zwykle odpuszcza się nie dlatego, że są trudne, tylko dlatego, że przywiązują człowieka do garnka.",
        "Trzecia rzecz jest wspólna dla obu części gminy i wynika z tego, ile osób siedzi przy stole. W domach po budowie mieszkają często trzy pokolenia albo dwie rodziny obok siebie, a przeciętne mieszkanie ma tu sto trzy metry. Gotowanie na sześć czy osiem osób to inna skala niż na dwie — i wtedy najbardziej liczy się to, że można zaprogramować obiad i wyjść z kuchni.",
        "I czwarta, bardzo lokalna: gmina spotyka się na dożynkach, które co roku odbywają się w innej wsi, i na Biesiadzie Agroturystycznej w Siedlcu — ta miała już dwadzieścia jeden edycji. Ciasta, pasty i sałatki na taki stół robi się w większych ilościach niż na co dzień, a to jest dokładnie ta sytuacja, w której urządzenie zarabia na siebie w jeden weekend.",
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
    heading: "Gmina Bochnia i gotowanie — świetlice, dożynki i Biesiada w Siedlcu",
    paragraphs: [
      "Zacznę od uczciwego zastrzeżenia, bo łatwo tu o nadinterpretację: gmina wiejska Bochnia nie ma żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych. Marka Smaki z Bocheńszczyzny, na którą można się natknąć, jest inicjatywą promocyjną, a nie rejestrem. Wolę to napisać wprost, niż udawać, że jest inaczej.",
      "Życie kulinarne toczy się tu więc nie wokół rejestru, tylko wokół świetlic. Gminne Centrum Kultury, Czytelnictwa i Sportu prowadzi ponad dwadzieścia świetlic wiejskich — to w nich zbierają się koła gospodyń, między innymi z Bessowa, Brzeźnicy, Nieprześni i Ostrowa Szlacheckiego.",
      "Do tego dwie imprezy, na których widać, ile się w tej gminie gotuje. Biesiada Agroturystyczna w Siedlcu ma za sobą dwadzieścia jeden edycji, a dożynki gminne odbywają się co roku w innej wsi. Grają na nich orkiestra dęta z Baczkowa i Zespół Pieśni i Tańca Siedlecanie.",
      "Warto też rozdzielić gminę od miasta, bo nazwa jest ta sama. Sól, kopalnia i podziemne uzdrowisko należą do miasta Bochnia i opisuję je przy tamtej stronie. Gmina wiejska ma w tej historii swój ślad tylko o tyle, że dokument z około tysiąc sto dwudziestego trzeciego roku wymienia Łapczycę — dziś jej sołectwo — razem z solą.",
      "Dla urządzenia najsensowniejsze jest tu wszystko, co robi się z własnych plonów i w większych ilościach: zupy krem gotowane i miksowane w jednym naczyniu, tarcie i mielenie warzyw, mieszanie powideł i przecierów bez stania nad garnkiem, ciasta i pasty na stół dla kilkunastu osób. Czego nie zrobi, mówię wprost: nie upiecze ciasta ani chleba, bo do tego potrzebny jest piekarnik.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Bochnia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzydziestu jeden, bez żadnej dopłaty za odległość. Gmina liczy prawie dwadzieścia jeden tysięcy mieszkańców na stu trzydziestu kilometrach kwadratowych i od dwa tysiące drugiego roku urosła o dwadzieścia cztery procent — podczas gdy sąsiadujące z nią miasto w tym samym czasie się skurczyło.",
    "Sołectwa to: Baczków, Bessów, Bogucice, Brzeźnica, Buczyna, Cerekiew, Chełm, Cikowice, Damienice, Dąbrowica, Gawłów, Gierczyce, Gorzków, Grabina, Krzyżanowice, Łapczyca, Majkowice, Moszczenica, Nieprześnia, Nieszkowice Małe, Nieszkowice Wielkie, Ostrów Szlachecki, Pogwizdów, Proszówki, Siedlec, Słomka, Stanisławice, Stradomka, Wola Nieszkowska, Zatoka i Zawada. W statystykach pojawia się liczba trzydziestu pięciu miejscowości — różnicę robią przysiółki.",
    "Uwaga na nazwy: Nieszkowice Małe, Nieszkowice Wielkie i Wola Nieszkowska to trzy odrębne sołectwa.",
    "Gmina rozkłada się na dwóch krainach. Północ, z doliną Raby, należy do Kotliny Sandomierskiej — jest płaska i żyzna. Południe to Pogórze Wielickie, ze wzniesieniami i sadami. Lasy zajmują dwadzieścia procent powierzchni.",
    "Urząd gminy mieści się przy ulicy Kazimierza Wielkiego w Bochni — w mieście, które do gminy nie należy i stanowi odrębną gminę miejską. Wójtem jest Marek Edward Bzdek, rada liczy dwudziestu radnych.",
    "Dojazd: przez gminę biegnie magistrala kolejowa E trzydzieści, czyli linia numer dziewięćdziesiąt jeden, a od końca dwa tysiące dwudziestego pierwszego roku działa węzeł autostrady A cztery Bochnia z łącznikiem do drogi krajowej dziewięćdziesiąt cztery o długości tysiąca ośmiuset osiemdziesięciu trzech metrów.",
  ],
  districts: [
    "Łapczyca",
    "Proszówki",
    "Stanisławice",
    "Siedlec",
    "Nieszkowice Wielkie",
    "Nieszkowice Małe",
    "Wola Nieszkowska",
    "Baczków",
    "Bessów",
    "Bogucice",
    "Brzeźnica",
    "Buczyna",
    "Cerekiew",
    "Chełm",
    "Cikowice",
    "Damienice",
    "Dąbrowica",
    "Gawłów",
    "Gierczyce",
    "Gorzków",
    "Grabina",
    "Krzyżanowice",
    "Majkowice",
    "Moszczenica",
    "Nieprześnia",
    "Ostrów Szlachecki",
    "Pogwizdów",
    "Słomka",
    "Stradomka",
    "Zatoka",
    "Zawada",
  ],

  nearbyHeading: "Bochnia, Rzezawa i Łapanów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina otacza miasto Bochnia i sąsiaduje z Rzezawą, Łapanowem, Kłajem, Gdowem, Nowym Wiśniczem, Trzcianą i Drwinią. Dojeżdżam do wszystkich gmin powiatu bocheńskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: gmina wiejska Bochnia to odrębna jednostka od miasta Bochnia, choć mieści w nim swój urząd. Kopalnia soli, tężnia i podziemne uzdrowisko leżą w mieście — opisuję je przy stronie miasta.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Rzezawa",
    "Łapanów",
    "Kłaj",
    "Gdów",
    "Nowy Wiśnicz",
    "Trzciana",
    "Drwinia",
  ],

  about: blokOMnie("do gminy Bochnia", "w powiecie bocheńskim"),

  faq: [
    {
      question: "Mieszkam w Łapczycy albo w Stanisławicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie trzydzieści jeden sołectw traktuję dokładnie tak samo. Przy umawianiu przyda się nazwa sołectwa, bo gmina rozciąga się od doliny Raby po pogórze — a przy Nieszkowicach warto dodać, czy chodzi o Małe, Wielkie, czy o Wolę Nieszkowską.",
    },
    ...faqWspolne("w gminie Bochnia"),
    {
      question: "Mam dużą kuchnię w nowym domu. Czy Thermomix nie będzie zbędny?",
      answer:
        "To pytanie pada w tej gminie częściej niż gdziekolwiek indziej, bo przeciętne mieszkanie ma tu sto trzy metry i kuchnie są duże. Odpowiadam tak: miejsce na blacie nie jest tu problemem, więc pytanie sprowadza się do tego, ile osób siada do stołu i jak często gotujesz od zera. Przy dwóch osobach i gotowaniu raz na kilka dni urządzenie zwraca się wolno i mówię o tym wprost. Przy sześciu czy ośmiu osobach, przy własnych warzywach z ogrodu i przy przetworach zwraca się w jeden sezon — bo najwięcej daje nie w samym gotowaniu, tylko w mieszaniu, tarciu i pilnowaniu, których przy większych ilościach jest najwięcej.",
    },
  ],

  geo: { lat: 49.9694, lng: 20.4295 },
};
