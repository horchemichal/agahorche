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
 * NAREWKA — ⚠ GMINA WIEJSKA w powiecie hajnowskim.
 * NAREWKA NIE JEST MIASTEM — jest WSIĄ i siedzibą gminy.
 * W CAŁEJ TREŚCI PISZĘ „miejscowość" albo „wieś", NIGDY
 * „miasto".
 * GMINA 3 096 mieszkańców (GUS 31.12.2024), powierzchnia
 * 339,0 km², GĘSTOŚĆ 9 os./km² — jedna z najrzadziej
 * zaludnionych gmin w Polsce.
 * 23 SOŁECTWA (potwierdzone raportem o stanie gminy za 2023):
 * m.in. Babia Góra, Eliaszuki, Grodzisk, Guszczewina, Janowo,
 * Krynica, Leśna, Lewkowo Nowe, Lewkowo Stare, Michnówka,
 * Nowa Łuka, Olchówka, Planta, Siemianówka, Tarnopol.
 * ⚠ Notatka projektowa podawała 1 400 — to prawdopodobnie
 * liczba dla samej wsi; NIE UŻYWAM, bo nie potwierdzono.
 *
 * ⚠⚠ STRUKTURA UŻYTKOWANIA — PODSTAWA KĄTA:
 * LASY: PONAD 60% powierzchni gminy.
 * Użytki rolne: ok. 20%. Tereny chronione: ponad 11%.
 * Wody: ok. 2%. Drogi i koleje: ok. 2%. Nieużytki: ok. 1%.
 * CAŁA GMINA POŁOŻONA NA OBSZARZE CHRONIONEGO KRAJOBRAZU
 * „PUSZCZA BIAŁOWIESKA".
 *
 * WODY: główna rzeka NAREW. ZBIORNIK SIEMIANÓWKA w północnej
 * części gminy — 3 250 ha, „jeden z największych zbiorników
 * wodnych tego typu w kraju".
 *
 * BIAŁOWIESKI PARK NARODOWY — konkrety:
 * POWIERZCHNIA CAŁKOWITA 10 517,27 ha.
 * ⚠⚠ OBSZAR OCHRONY ŚCISŁEJ 6 059,27 ha — TO JEST
 * ZAKOTWICZENIE KĄTA.
 * Ochrona czynna 4 104,63 ha; ochrona krajobrazowa 353,37 ha;
 * otulina 3 224,26 ha.
 * Daty: 1921 — dwa rezerwaty; 1932 — park narodowy;
 * 1947 — reaktywacja jako BPN.
 * PIERWSZY POLSKI OBIEKT PRZYRODNICZY NA LIŚCIE UNESCO.
 * ⚠ ROKU WPISU NA LISTĘ UNESCO NIE PODAJĘ — nie potwierdzono.
 * ⚠⚠ NIE PISZĘ, że BPN leży w granicach gminy Narewka —
 * park obejmuje głównie gminę Białowieża. Piszę, że gmina
 * leży na obszarze chronionego krajobrazu „Puszcza Białowieska"
 * i sąsiaduje z puszczą.
 *
 * ŻUBRY: OK. 870 OSOBNIKÓW w polskiej części Puszczy
 * Białowieskiej — NAJWIĘKSZA NA ŚWIECIE WOLNO ŻYJĄCA
 * POPULACJA ŻUBRA. Rezerwat Pokazowy Żubrów prezentuje też
 * łosie, jelenie, sarny, dziki, wilki, rysie, koniki typu
 * tarpana i żubronie.
 * ⚠ POWIERZCHNI REZERWATU POKAZOWEGO NIE PODAJĘ.
 *
 * ZABYTEK: CERKIEW PRAWOSŁAWNA PW. ŚW. MIKOŁAJA CUDOTWÓRCY
 * w Narewce — budowa 1860–1870, styl EKLEKTYCZNY, MUROWANA
 * z cegły, w rejestrze zabytków.
 * ⚠ WYŁĄCZNIE JAKO ZABYTEK ARCHITEKTURY.
 *
 * WYDARZENIA CYKLICZNE (raport o stanie gminy 2023):
 * Otwarte Prezentacje Kolędnicze „Kolędujmy Razem" (styczeń);
 * Międzynarodowy Plener Malarski (maj/czerwiec);
 * MIĘDZYNARODOWY FESTIWAL TEATRALNY „WERTEP" (lipiec);
 * minikoncerty „Przy Ławeczce" (lipiec–sierpień).
 * ⚠ LAT PIERWSZYCH EDYCJI NIE PODAJĘ.
 * ⚠ „LIPCA BIAŁOWIESKIEGO" NIE WYMIENIAM — strony gov.pl
 * nie udało się pobrać, status i data rejestracji
 * niepotwierdzone.
 * ⚠ WĄTKU GRZYBOWEGO NIE ROZWIJAM — brak potwierdzenia
 * źródłowego, a „grzyby i jesień" to zajęty kąt.
 * NAREWKA NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 *
 * KĄT: KIEDY NIE ROBIĆ NIC — składniki, w które się
 * nie ingeruje.
 * Kąt od obszaru ochrony ścisłej: sześciu tysięcy hektarów,
 * na których jedyną formą opieki jest niedotykanie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w ochronie przyrody istnieje kategoria „ochrona ścisła",
 *   polegająca wyłącznie na nieingerowaniu — i że w kuchni
 *   też taka kategoria powinna istnieć,
 * — że dominującym odruchem w gotowaniu jest ROBIENIE:
 *   dodać, doprawić, obrobić, ulepszyć — a część składników
 *   traci przez to wszystko,
 * — CO NALEŻY DO „OCHRONY ŚCISŁEJ": dojrzały pomidor
 *   w sezonie, świeży chleb, dobra oliwa, dojrzały ser,
 *   truskawki, świeża ryba, młode warzywa,
 * — że wspólną cechą jest to, że są dobre same z siebie,
 *   a każdy dodatek jest odjęciem,
 * — ŻE NAJTRUDNIEJSZE JEST ROZPOZNANIE, kiedy składnik jest
 *   w tej kategorii, a kiedy nie — i że decyduje jakość
 *   i moment, nie rodzaj,
 * — że ten sam pomidor w sierpniu należy do ochrony ścisłej,
 *   a w lutym wymaga pełnej obróbki,
 * — ŻE UMIEJĘTNOŚĆ NIEROBIENIA JEST TRUDNIEJSZA NIŻ
 *   UMIEJĘTNOŚĆ ROBIENIA, bo nie widać w niej wysiłku,
 * — UCZCIWIE I MOCNO: to jest jedyna strona w serwisie,
 *   na której napiszę, że najlepszym użyciem tego urządzenia
 *   bywa NIEUŻYWANIE go,
 * — że sprzęt kuchenny wytwarza pokusę: skoro stoi, to niech
 *   pracuje — i że warto tej pokusie nie ulegać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności NIC
 *   o tym, że surowe jest „zdrowsze" ani nic o witaminach.
 *   Piszę WYŁĄCZNIE o smaku. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO zachęty do zbierania czegokolwiek dziko rosnącego
 *   ani grzybów.
 * — ⚠ ŻUBRY, DZICZYZNA: żubra wymieniam WYŁĄCZNIE jako
 *   zwierzę chronione i element przyrody. ZERO dziczyzny
 *   jako składnika, ZERO łowiectwa. TWARDA GRANICA.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠⚠ ZERO GRANICY Z BIAŁORUSIĄ — gmina Narewka przylega
 *   do granicy państwa. Żadnej wzmianki, w żadnym kontekście.
 *   ZERO zapory, ZERO służb, ZERO migracji. TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych; cerkiew
 *   wyłącznie jako zabytek z lat 1860–1870.
 * — ZERO sporów o wycinkę Puszczy Białowieskiej — temat
 *   politycznie obciążony. Piszę wyłącznie o liczbach
 *   i o zasadzie ochrony ścisłej, nigdy o konflikcie.
 * — ZERO podziemia, bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Surowe kontra gotowane"
 * (Biała Rawska) dotyczy wyboru między dwiema obróbkami.
 * „Zmysły — jak poznać, że gotowe" dotyczą rozpoznawania
 * gotowości. „Sezon" i „poza sezonem" dotyczą pory roku.
 * „Czego nowe narzędzie NIE zastępuje" dotyczy sprzętu.
 * Tutaj chodzi o DECYZJĘ, ŻEBY NIE ROBIĆ NIC — o kategorię
 * składników, przy których każdy zabieg jest stratą.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠ NIE PISZĘ, że Narewka jest miastem.
 * — NIE PODAJĘ liczby mieszkańców samej wsi.
 * — NIE PISZĘ, że Białowieski PN leży w granicach gminy.
 * — NIE PODAJĘ roku wpisu BPN na listę UNESCO.
 * — NIE PODAJĘ powierzchni Rezerwatu Pokazowego Żubrów
 *   ani nazw rezerwatów w gminie.
 * — NIE WYMIENIAM „lipca białowieskiego".
 * — NIE ROZWIJAM wątku grzybowego.
 * — NIE PODAJĘ lat pierwszych edycji wydarzeń.
 * — ⚠ NIE MYLĘ GMINY NAREWKA z WSIĄ NAREWKA, z RZEKĄ NAREWKĄ
 *   ani z GMINĄ NAREW (sąsiednią, inną gminą tego samego
 *   powiatu). FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina wiejska Narewka liczy 3 096 mieszkańców
 *   na 339 km² — dziewięć osób na kilometr kwadratowy,
 *   jedna z najrzadziej zaludnionych gmin w Polsce —
 *   i dzieli się na 23 sołectwa,
 * — lasy zajmują ponad 60% powierzchni gminy, użytki rolne
 *   około 20%, tereny chronione ponad 11%, wody około 2%;
 *   cała gmina leży na obszarze chronionego krajobrazu
 *   „Puszcza Białowieska",
 * — główną rzeką jest Narew, a w północnej części gminy leży
 *   zbiornik Siemianówka o powierzchni 3 250 ha,
 * — Białowieski Park Narodowy ma 10 517,27 ha, z czego
 *   6 059,27 ha to obszar ochrony ścisłej, 4 104,63 ha
 *   ochrona czynna, a 353,37 ha ochrona krajobrazowa;
 *   otulina liczy 3 224,26 ha. Pierwsze dwa rezerwaty
 *   utworzono w 1921 r., park narodowy w 1932, a reaktywowano
 *   go w 1947; to pierwszy polski obiekt przyrodniczy wpisany
 *   na listę światowego dziedzictwa UNESCO,
 * — w polskiej części Puszczy Białowieskiej żyje około 870
 *   żubrów — największa na świecie wolno żyjąca populacja
 *   tego gatunku,
 * — eklektyczna, murowana cerkiew świętego Mikołaja
 *   Cudotwórcy w Narewce z lat 1860–1870,
 * — w gminie odbywają się m.in. Międzynarodowy Festiwal
 *   Teatralny „Wertep", Międzynarodowy Plener Malarski
 *   i Otwarte Prezentacje Kolędnicze.
 */
export const NAREWKA: CityContent = {
  slug: "narewka",
  h1: "Thermomix Narewka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Narewka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Narewka: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie sołectwa. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Narewka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Narewce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Narewki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dwudziestu trzech sołectw gminy.",

  highlights: highlightyStandardowe("Narewka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Umiejętność nierobienia jest trudniejsza niż umiejętność robienia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Narewce – jak wygląda prezentacja?",
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
      id: "kiedy-nie-robic-nic",
      heading: "Sześć tysięcy hektarów, których się nie dotyka — czyli kiedy nie robić nic",
      paragraphs: [
        "Gmina Narewka to trzysta trzydzieści dziewięć kilometrów kwadratowych, na których mieszka trzy tysiące osób — dziewięć na kilometr, jedna z najrzadziej zaludnionych gmin w Polsce. Ponad sześćdziesiąt procent tej powierzchni to las, a cała gmina leży na obszarze chronionego krajobrazu „Puszcza Białowieska”. W samym Białowieskim Parku Narodowym, który ma 10 517 hektarów, ponad sześć tysięcy — dokładnie 6 059 — to obszar ochrony ścisłej.",
        "Zatrzymajmy się przy tej nazwie, bo jest niezwykła. Ochrona ścisła oznacza, że jedyną formą opieki nad tym terenem jest niedotykanie go. Nie sadzi się, nie tnie, nie porządkuje, nie ulepsza. Sześć tysięcy hektarów, na których najlepszym możliwym działaniem jest brak działania.",
        "Uważam, że w kuchni powinna istnieć dokładnie taka kategoria — i że jej brak jest jednym z najczęstszych powodów, dla których dobre składniki wychodzą gorzej, niż weszły.",
        "Bo dominującym odruchem w gotowaniu jest robienie. Dodać. Doprawić. Obrobić. Ulepszyć. Zmiksować, bo jest mikser. Posypać, bo mamy zioła. A część składników przez to wszystko po prostu traci.",
        "Do kuchennej „ochrony ścisłej” należą rzeczy, które są dobre same z siebie i przy których każdy dodatek jest odjęciem. Dojrzały pomidor w sezonie — z solą i oliwą, i to wszystko. Świeży chleb prosto z piekarni. Naprawdę dobra oliwa. Dojrzały ser. Truskawki w czerwcu. Świeża ryba. Młode warzywa, pierwsze w roku.",
        "Najtrudniejsze jest rozpoznanie, kiedy składnik jest w tej kategorii, a kiedy nie — i tu leży cała umiejętność. Bo nie decyduje rodzaj, tylko jakość i moment. Ten sam pomidor w sierpniu należy do ochrony ścisłej i wystarcza mu szczypta soli; ten sam pomidor w lutym wymaga pełnej obróbki, długiego duszenia i pomocy w postaci czosnku, cukru i ziół, żeby w ogóle miał smak.",
        "Innymi słowy: im lepszy składnik, tym mniej należy z nim robić. Im gorszy, tym więcej trzeba mu dołożyć. To jest, moim zdaniem, najbardziej użyteczna zasada w całym gotowaniu i jednocześnie najrzadziej wypowiadana.",
        "Rzecz w tym, że umiejętność nierobienia jest trudniejsza niż umiejętność robienia. Nie widać w niej wysiłku, nie ma czym się pochwalić, nikt nie powie „ale się napracowałaś”. Podanie pomidorów z solą wymaga pewności siebie, której podanie skomplikowanej sałatki nie wymaga wcale.",
        "I teraz muszę napisać coś, czego nie napiszę na żadnej innej stronie w tym serwisie, choć sprzedaję ten sprzęt: bywa, że najlepszym użyciem tego urządzenia jest nieużywanie go.",
        "Sprzęt kuchenny wytwarza pokusę i widzę to u klientek regularnie, zwłaszcza w pierwszych miesiącach. Skoro stoi na blacie, to niech pracuje. Skoro potrafi zmiksować, to zmiksujmy. Skoro ma trzydzieści funkcji, to szkoda ich nie użyć. A czasem najlepsze, co można zrobić z dobrym składnikiem, to pokroić go nożem i położyć na talerzu.",
        "Nie odradzam przez to zakupu — urządzenie ma bardzo dużo do zrobienia i pisałam o tym na kilkuset innych stronach. Chodzi mi tylko o to, żeby nie stało się jedynym pomysłem na kuchnię. Sześć tysięcy hektarów obok Was radzi sobie doskonale bez żadnej pomocy i to też jest jakaś nauka.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Narewce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Gmina jest bardzo rozległa, więc przy umawianiu warto od razu podać sołectwo — trasę układam pod kilka wizyt naraz i wtedy łatwiej dopasować godzinę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Narewce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Narewka",
      paragraphs: [
        "Gmina Narewka liczy nieco ponad trzy tysiące mieszkańców na trzystu trzydziestu dziewięciu kilometrach kwadratowych — dziewięć osób na kilometr, jedna z najrzadziej zaludnionych gmin w Polsce — i dzieli się na dwadzieścia trzy sołectwa. Ponad sześćdziesiąt procent jej powierzchni zajmują lasy, użytki rolne około dwudziestu procent, a cała gmina leży na obszarze chronionego krajobrazu „Puszcza Białowieska”. Główną rzeką jest Narew, a w północnej części gminy rozciąga się zbiornik Siemianówka o powierzchni trzech tysięcy dwustu pięćdziesięciu hektarów. Sąsiedni Białowieski Park Narodowy ma ponad dziesięć i pół tysiąca hektarów, z czego ponad sześć tysięcy to obszar ochrony ścisłej; pierwsze rezerwaty utworzono tu w 1921 roku, park narodowy w 1932, a reaktywowano go w 1947 — to pierwszy polski obiekt przyrodniczy wpisany na listę światowego dziedzictwa UNESCO. W polskiej części puszczy żyje około ośmiuset siedemdziesięciu żubrów, największa na świecie wolno żyjąca populacja tego gatunku. W samej Narewce stoi eklektyczna, murowana cerkiew świętego Mikołaja Cudotwórcy z lat 1860–1870. W gminie odbywają się Międzynarodowy Festiwal Teatralny „Wertep”, plener malarski i zimowe prezentacje kolędnicze.",
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

  districtsHeading: "Do których części gminy Narewka dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu trzech sołectw gminy — od Lewkowa i Planty po Siemianówkę i Tarnopol. Dojazd jest wszędzie bezpłatny, także do najdalszych.",
    "Przy umawianiu wystarczy podać miejscowość i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Narewkę też przyjadę",
  nearbyParagraphs: [
    "Hajnówka, Michałowo, Kleszczele, Bielsk Podlaski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Hajnówka", "Michałowo", "Kleszczele", "Bielsk Podlaski"],

  about: blokOMnie("do Narewki", "w Narewce i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Narewki bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dwudziestu trzech sołectw gminy, także tych najdalszych — gmina jest bardzo rozległa. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy się mylą: gmina Narewka to nie gmina Narew, choć obie leżą w powiecie hajnowskim, a Narewka to również nazwa rzeki.",
    },
    ...faqWspolne("w Narewce"),
    {
      question: "Kiedy lepiej nic nie robić ze składnikiem?",
      answer:
        "Wtedy, gdy jest naprawdę dobry i we właściwym momencie. Dojrzały pomidor w sierpniu, świeży chleb, dobra oliwa, dojrzały ser, truskawki w czerwcu, świeża ryba — przy nich każdy dodatek jest odjęciem. Ten sam pomidor w lutym wymaga za to pełnej obróbki, żeby w ogóle miał smak.",
    },
    {
      question: "Jaka jest najbardziej uniwersalna zasada w gotowaniu?",
      answer:
        "Moim zdaniem ta: im lepszy składnik, tym mniej należy z nim robić; im gorszy, tym więcej trzeba mu dołożyć. Rzecz w tym, że umiejętność nierobienia jest trudniejsza — nie widać w niej wysiłku i nie ma czym się pochwalić.",
    },
    {
      question: "Czy zdarza się, że Thermomixa lepiej nie używać?",
      answer:
        "Tak i mówię to wprost, choć go sprzedaję. Sprzęt na blacie wytwarza pokusę: skoro stoi, to niech pracuje. A czasem najlepsze, co można zrobić z dobrym składnikiem, to pokroić go nożem i położyć na talerzu. To nie jest powód, żeby nie kupować — to powód, żeby urządzenie nie stało się jedynym pomysłem na kuchnię.",
    },
  ],

  geo: { lat: 52.8383, lng: 23.755 },
};
