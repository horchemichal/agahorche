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
 * ALWERNIA — gmina, w której miasto jest najmniejszą częścią samego
 * siebie, i jedyna w tym zestawie bez czynnej kolei pasażerskiej.
 * To są dwie osie tej strony.
 *
 * W mieście mieszka nieco ponad trzy tysiące osób. W samych Regulicach
 * niemal tyle samo, w Kwaczale niewiele mniej. Rozpiętość między
 * największym a najmniejszym sołectwem jest trzynastokrotna. Do tego
 * dwie trzecie gminy leży pod ochroną krajobrazową, a dojazd do Krakowa
 * bywa łatwiejszy niż do własnego powiatu. Tekst jest pisany dla kogoś,
 * kto mieszka w rozproszonej zabudowie i dla kogo „skoczyć po coś do
 * sklepu” nie jest opcją.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 12 330 mieszkańców gminy i 3 232 mieszkańców miasta, GUS,
 *   stan na 31.12.2024 (strona gminy podaje „ok. 12 500” — NIE UŻYWAMY),
 * — miasto + 10 sołectw; liczby sołectw wg NSP 2021: Regulice 1 909,
 *   Kwaczała 1 776, Poręba Żegoty 1 259, Grojec 1 240, Brodła 1 016,
 *   Okleśna 845, Nieporaz 455, Mirów 312, Podłęże 217, Źródła 149,
 * — miasto NIE ma osiedli jako jednostek pomocniczych; ma za to własny
 *   budżet obywatelski (alwernia.pl),
 * — powierzchnia gminy 73,9 km², gęstość ok. 167 os./km²; 56,1% użytków
 *   rolnych i 31,5% lasów; ponad 2/3 gminy pod ochroną krajobrazową;
 *   położenie na Garbie Tenczyńskim i w Dolinie Górnej Wisły,
 * — saldo migracji w 2024 r. dodatnie (+16); spadek ludności w latach
 *   2002–2024 tylko o 1,7%, wyraźnie łagodniejszy niż u sąsiadów,
 * — klasztor Bernardynów: fundator Krzysztof Koryciński postawił krzyż
 *   na wzgórzu Podskale ok. 1616 r.; murowany klasztor 1625–1656,
 *   kościół 1630–1676, dokument fundacyjny 1627; wieża dobudowana
 *   1897–1900; nazwa od włoskiej La Verny,
 * — sanktuarium „Ecce Homo”: obraz Pana Jezusa Cierpiącego trafił do
 *   Alwerni 2 sierpnia 1686 r.; kaplica 1703–1708; odpusty w niedzielę
 *   po Bożym Ciele oraz 17 września (alwernia.bernardyni.pl),
 * — prawa miejskie: 1903, utracone w 1926, przywrócone w 1993,
 * — 1778 — przywilej Stanisława Augusta na 12 jarmarków rocznie,
 * — zakłady chemiczne — dziś ALVENTA S.A.; gmina określa je jako
 *   „najważniejszego pracodawcę w całej gminie”; profil: związki fosforu,
 *   nawozy, związki chromu,
 * — cztery wpisy w wojewódzkim rejestrze zabytków, w tym zespół
 *   architektoniczno-przestrzenny miejscowości (A-454, 16.04.1980),
 * — Małopolskie Muzeum Pożarnictwa — najstarsze tego typu w Polsce,
 *   założone w 1953 r.; wozy konne z lat 1910–1913, Mercedes z 1926,
 *   Fiat 621 L z 1938,
 * — kolej: linia nr 103 otwarta w 1899 r. przez Regulice, Nieporaz,
 *   Alwernię i Okleśną; ruch pasażerski ZAMKNIĘTY w październiku 2002 r.
 *   Dziś na części torowiska działa Lokalna Kolej Drezynowa w Regulicach
 *   (trasy 5, 7, 11,6 i 13,1 km, wyłącznie na rezerwację),
 * — węzeł A4 „Rudno” — część północna rozbudowana i otwarta 9 czerwca
 *   2017 r., co dało Alwerni bezpośredni zjazd,
 * — autobus A44 Kolei Małopolskich przedłużony do Alwerni od połowy
 *   czerwca 2024 r.: przez Grojec, Zalas, Mników, Liszki do Dworca
 *   Głównego; 8 kursów w dni robocze, 4 w weekendy, bilet 9 zł,
 *   przejazd ok. 1 h 15 min,
 * — 7 Kół Gospodyń Wiejskich: Okleśna (1936), Regulice (1949), Kwaczała
 *   (1955), Grojec (1957), Nieporaz (1974), Mirów (1977), Poręba Żegoty
 *   „Porębianie” (2022),
 * — imprezy cykliczne: Dni Gminy Alwernia, Wianki nad Wisłą, Rajd Ułanów,
 *   Biesiada Patriotyczna, Jarmark Świąteczny, koncerty kolęd w Alwerni,
 *   Kwaczale i Grojcu,
 * — arkoza kwaczalska ze skrzemieniałymi araukariami — największy okaz
 *   8 m długości; Kwaczała: biblioteka publiczna ufundowana w 1869 r.
 *   przez Józefa Patelskiego, przypuszczalnie pierwsza wiejska biblioteka
 *   w województwie krakowskim,
 * — Alvernia Planet w Nieporazie — kompleks 13 kopuł, od 2017 r. własność
 *   Gremi Group; pożar w 2021 r. zniszczył największą kopułę.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — składowiska odpadów po zakładach chemicznych i sporu o koszty jego
 *   utrzymania. Temat trudny i lokalnie polityczny; strona handlowa nie
 *   jest miejscem, żeby go dotykać,
 * — sporu o autobus do Chrzanowa i decyzji burmistrz w tej sprawie.
 *   Wspominam sam fakt, że do Krakowa jedzie się łatwiej niż do własnego
 *   powiatu, bez oceniania kogokolwiek,
 * — stanu kanalizacji i zagrożenia deficytem wód podziemnych. Realne,
 *   ale nie moja sprawa i nie ten kontekst,
 * — zdania „jedne z najstarszych zakładów chemicznych w Polsce”.
 *   Nie znalazłam źródła, które by to potwierdzało,
 * — daty założenia zakładów. Źródła podają 1920, 1923/24 i 1926.
 *   Piszę „lata dwudzieste”,
 * — liczby zatrudnionych w Alventa — żadne wiarygodne źródło jej nie podaje,
 * — zdania o pracy zmianowej w Alventa jako o fakcie. To byłby domysł
 *   z profilu produkcji, nie informacja ze źródła,
 * — wysokości Alwerni n.p.m. Źródła podają 265 i 312 m,
 * — dat wpisu karpia zatorskiego i gęsi zatorskiej na Listę Produktów
 *   Tradycyjnych — niepotwierdzone,
 * — Alvernia Planet jako „prężnie działającego centrum”. Wymieniam jako
 *   ciekawostkę, bo taka jest.
 *
 * PUŁAPKA: są dwa Grojce. Ten jest w gminie Alwernia (powiat chrzanowski);
 * drugi w gminie Oświęcim. Wpisy do rejestru zabytków dotyczą tamtego.
 */
export const ALWERNIA: CityContent = {
  slug: "alwernia",
  h1: "Thermomix Alwernia – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Alwernia — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Alwernia: bezpłatna prezentacja TM7 u Ciebie w kuchni — Regulice, Kwaczała, Poręba Żegoty, Brodła i reszta gminy. Tel. 517 185 691.",
  ogTitle: "Thermomix Alwernia — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Alwerni i we wszystkich sołectwach gminy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Alwernia przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich dziesięciu sołectw.",

  highlights: highlightyStandardowe("cała gmina Alwernia, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Alwerni – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu przy alwernijskim Rynku, jak na końcu Kwaczały.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Gmina, w której miasto jest najmniejszą częścią samego siebie",
      paragraphs: [
        "Alwernia jest jednym z najmniejszych miast w Polsce — mieszka tu nieco ponad trzy tysiące osób. Za to w Regulicach mieszka prawie tyle samo, a w Kwaczale niewiele mniej. Cała gmina liczy ponad dwanaście tysięcy ludzi rozrzuconych po siedemdziesięciu czterech kilometrach kwadratowych, więc gęstość zaludnienia jest tu prawie trzy razy niższa niż w sąsiednim Chełmku. To zupełnie inny sposób mieszkania: dalej do sklepu, dalej do sąsiada, dalej do wszystkiego.",
        "Miasto samo w sobie jest stare i osobliwe. Wyrosło u stóp klasztoru Bernardynów, który zaczął się od krzyża postawionego na wzgórzu Podskale około 1616 roku, a nazwę wziął od włoskiej La Verny. Do dziś przyjeżdżają tu pielgrzymi do obrazu, który trafił do Alwerni w 1686 roku, a odpusty — w niedzielę po Bożym Ciele i siedemnastego września — układają kalendarz połowie gminy. Cały układ przestrzenny miejscowości jest wpisany do rejestru zabytków od 1980 roku, co w tej okolicy jest rzadkością.",
        "Rzecz, którą trzeba wiedzieć przed umawianiem: w tej gminie nie ma kolei pasażerskiej. Linia przez Regulice, Nieporaz i Alwernię działała od 1899 roku, ale ruch pasażerski zamknięto w 2002 i już nie wrócił — dziś na części torowiska jeżdżą drezyny, i to na rezerwację, jako atrakcja, a nie transport. Zostają samochód, autostrada i autobus.",
        "Z autostradą akurat jest tu lepiej niż u sąsiadów: węzeł Rudno rozbudowano w 2017 roku właśnie po to, żeby dało się z Alwerni wjechać w obie strony. A od 2024 roku jeździ stąd autobus prosto do Krakowa — osiem kursów w dni robocze, godzina z kwadransem, dziewięć złotych. Powstała przez to sytuacja, o której mówi się tu z przekąsem: do Krakowa dojedzie się łatwiej niż do własnego powiatu.",
        "Dla kuchni najważniejsze jest jednak co innego. W rozproszonej zabudowie „skoczyć po coś do sklepu” nie istnieje jako opcja — zakupy robi się raz, dużo i z listą. Gotuje się z tego, co jest w domu, i planuje na kilka dni do przodu. To zupełnie inny sposób prowadzenia kuchni niż w mieście, gdzie sklep jest na dole.",
        "I to jest kontekst, w którym Thermomix ma tu sens albo go nie ma. Nie gotuje za nikogo i nie zastąpi wprawy. Pomaga w dwóch konkretnych rzeczach: ugotować raz większą ilość i porcjować, oraz zrobić z podstawowych składników — mąki, mleka, warzyw z ogródka — rzeczy, po które inaczej trzeba by pojechać. Chleb, pasty, sosy, przetwory. W gminie, w której do najbliższego dużego sklepu jest kwadrans jazdy, to nie jest wygoda, tylko oszczędność wyjazdów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Alwernia?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, w którym sołectwie mieszkasz. W tej gminie to nie jest formalność: Okleśna leży nad Wisłą, Mirów wysoko na wapiennych wzgórzach, Kwaczała po drugiej stronie od Poręby Żegoty. Od nazwy miejscowości zależy nie tylko czas dojazdu, ale i to, którego dnia w ogóle jestem w tej okolicy.",
        "Przy większych spotkaniach — a w Alwerni często umawiają się całe koła gospodyń — powiedz od razu, ile osób będzie. Dobiorę wtedy przepisy i wezmę więcej składników, a przy grupie potrzebuję też trochę więcej miejsca na blacie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Alwernia"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym gotuje się z zapasu",
      paragraphs: [
        "W gminie takiej jak ta kuchnia działa inaczej niż w mieście. Zakupy robi się rzadziej i większe, w spiżarni stoją słoiki, a w zamrażarce leżą rzeczy z ogródka. Pytanie nie brzmi „co dziś zamówimy”, tylko „co da się zrobić z tego, co mamy”.",
        "Praktyczne bywa tu przede wszystkim gotowanie na zapas. Większy garnek zupy albo dania jednogarnkowego, rozłożony na pojemniki, wystarcza na kilka dni — a że wszystko dzieje się w jednym naczyniu, sprzątanie po tym trwa moment. Nie trzeba stać obok i mieszać; urządzenie samo wyłącza się w odpowiednim momencie.",
        "Druga rzecz to podstawy. Chleb, bułki, ciasto na pierogi, pasty kanapkowe, sosy, mleka roślinne, przetwory z tego, co akurat obrodziło. To są dokładnie te produkty, dla których inaczej trzeba by wsiąść w samochód. W domach, gdzie do sklepu jest kwadrans, ta lista robi większą różnicę niż jakakolwiek funkcja z ulotki.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w gminie, w której autobus do szkoły i z powrotem wyznacza cały dzień, samodzielny podwieczorek bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Alwernia dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich dziesięciu sołectw, bez żadnej dopłaty za odległość: Regulic, Kwaczały, Poręby Żegoty, Grojca, Brodeł, Okleśnej, Nieporazu, Mirowa, Podłęża i Źródeł.",
    "Rozpiętość między nimi jest tu naprawdę duża — od Regulic, gdzie mieszka prawie dwa tysiące osób, po Źródła, gdzie niecałe sto pięćdziesiąt. Trzy największe sołectwa mają razem więcej mieszkańców niż samo miasto. Dlatego przy umawianiu proszę o nazwę miejscowości, a nie o samą „Alwernię”: to od niej zależy, którego dnia tygodnia jestem w Waszej części gminy.",
    "Ukształtowanie terenu też robi różnicę. Północ i wschód to Garb Tenczyński — wapienne wzgórza, w Mirowie sięgające ponad trzystu metrów, z wąskimi drogami i długimi podjazdami. Zachód i południe schodzą do Doliny Górnej Wisły; Okleśna leży już praktycznie nad rzeką. Ponad dwie trzecie gminy jest pod ochroną krajobrazową, co widać za oknem samochodu przez całą drogę.",
    "Jeśli umawiamy się w dniu odpustu albo dużej imprezy — Dni Gminy, Wianków nad Wisłą, wrześniowego odpustu u Bernardynów — powiedzcie o tym od razu. Wtedy dobieram godzinę tak, żeby nie kolidowała, i zostawiam sobie zapas na dojazd.",
  ],
  districts: [
    "Alwernia",
    "Regulice",
    "Kwaczała",
    "Poręba Żegoty",
    "Grojec",
    "Brodła",
    "Okleśna",
    "Nieporaz",
    "Mirów",
    "Podłęże",
    "Źródła",
  ],

  nearbyHeading: "Chrzanów, Krzeszowice i Kraków też są na mojej trasie",
  nearbyParagraphs: [
    "Alwernia leży na styku trzech kierunków: do Chrzanowa jest stąd kilkanaście kilometrów, do Krzeszowic podobnie, a do Krakowa około trzydziestu — autostradą albo autobusem spod urzędu. Do Trzebini, Libiąża i Chełmka też dojeżdżam, bez dopłaty i bez względu na granicę powiatu.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim — a przy tak rozrzuconej zabudowie jak tutaj to naprawdę pomaga.",
  ],
  nearbyTowns: [
    "Chrzanów",
    "Krzeszowice",
    "Trzebinia",
    "Libiąż",
    "Chełmek",
    "Zabierzów",
    "Skawina",
    "Kraków",
  ],

  about: blokOMnie("do Alwerni", "w powiecie chrzanowskim"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Alwernia?",
      answer:
        "Tak — do wszystkich dziesięciu, od Regulic i Kwaczały po Źródła, Podłęże i Mirów. Dojazd jest bezpłatny i nie zależy od tego, jak daleko od głównej drogi mieszkasz ani jak stromy jest podjazd.",
    },
    ...faqWspolne("w gminie Alwernia"),
    {
      question: "Mieszkam na wsi, do sklepu mam kawałek. Czy to coś zmienia?",
      answer:
        "Zmienia i to na plus. Największą różnicę robią tu rzeczy, po które inaczej trzeba by pojechać: chleb, ciasto na pierogi, pasty, sosy, przetwory z własnego ogródka. Na prezentacji pokazuję to na czymś, co realnie u Was powstaje, a nie na przepisie dobranym pod pokaz.",
    },
    {
      question: "Czy przyjedziesz do nas na spotkanie koła gospodyń?",
      answer:
        "Tak i w tej gminie robię tak często — kół jest tu siedem, a najstarsze działa od 1936 roku. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie, żebym dobrała przepisy, wzięła więcej składników i wiedziała, na jakim blacie pracujemy.",
    },
    {
      question:
        "Nie mam czym dojechać do Krakowa po urządzenie. Czy to problem?",
      answer:
        "Nie, bo nigdzie nie musisz jechać. Przywożę urządzenie do Ciebie na prezentację, a jeśli zdecydujesz się na zakup, dostawa też idzie pod Twój adres. Pomagam potem przy pierwszym uruchomieniu i przy koncie Cookidoo — również telefonicznie.",
    },
  ],

  geo: { lat: 50.0667, lng: 19.5167 },
};
