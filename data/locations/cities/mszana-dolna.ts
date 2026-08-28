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
 * MSZANA DOLNA — stolica Zagórzan i jedyne miejsce w całym zestawie
 * z tak dobrze udokumentowaną własną kuchnią. To jest oś tej strony.
 *
 * Bryjka, prażucha, kwaśnica, mieszanica, kołacz, sodra, galas —
 * to nie są nazwy z książki o folklorze, tylko potrawy, które
 * mieszkanki znają z domu. Strona ma być o gotowaniu, a nie o górach.
 *
 * STRUKTURA: to DWIE odrębne jednostki o wspólnej nazwie — miasto
 * Mszana Dolna (7 817 os.) i gmina wiejska Mszana Dolna (17 652 os.),
 * której urząd mieści się w mieście, ale miasto do niej nie należy.
 * Ta strona obsługuje obie i musi mówić o obu, nie myląc ich.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — miasto: 7 817 mieszkańców (GUS 31.12.2024), 27,1 km², gęstość
 *   288 os./km², mediana wieku 40,8 lat, 65+ 18,1%, dzieci 0–14 16,3%,
 *   wzrost o 7,1% od 2002 r., lesistość 31,3%,
 * — gmina wiejska: 17 652 mieszkańców (GUS 31.12.2024), 170,1 km²,
 *   gęstość 104 os./km², mediana wieku 37,8 lat, 65+ 13,8%,
 *   dzieci 0–14 19,3%, lesistość 42,4%,
 * — miasto jest wyraźnie starsze od gminy wiejskiej — to dwie różne
 *   grupy odbiorczyń, i strona to uwzględnia,
 * — 9 sołectw gminy wiejskiej, ewidencja gminna 31.12.2023:
 *   Kasinka Mała 3 739, Kasina Wielka 3 051, Mszana Górna 2 739,
 *   Lubomierz 2 178, Olszówka 1 604, Łostówka 1 439, Łętowe 1 286,
 *   Raba Niżna 1 158, Glisne 325,
 * — miasto NIE MA formalnych osiedli jako jednostek pomocniczych;
 *   mieszkańcy używają nazw przysiółków i „ról” (Zarabie, Słomka,
 *   Marki, Folwark, Podlesie, Zawodzie, Krupciówka, Szklanówka,
 *   Lachówka, Ciernie, Obłazy, Morgi, Rataje) oraz nazw odrodowych
 *   typu Bieńki, Machaje, Nowaki, Wójty,
 * — położenie: kotlina u zbiegu Raby, Mszanki, Porębianki i Słomki,
 *   na styku Beskidu Wyspowego i Gorców; Lubogoszcz 968 m nad miastem,
 *   Luboń Wielki 1 022 m, Szczebel 977 m, Ćwilin 1 072 m,
 *   Śnieżnica ok. 1 006 m (Kasina Wielka — ośrodek narciarski),
 *   Turbacz 1 310 m, Gorc 1 228 m,
 * — gmina wiejska graniczy z Gorczańskim Parkiem Narodowym
 *   (Lubomierz, Łostówka, Mszana Górna),
 * — ZAGÓRZANIE: nazwę zapisał po raz pierwszy Wincenty Pol w 1851 r.;
 *   zasięg — dolina górnej Raby z Porębą, Mszanką i Kasinką; najstarsze
 *   wsie Mszana Górna (1365), Olszówka (1388); gwara mazurząca, typ
 *   jednonosówkowy („gọba”), końcówka -ek („byłek”); strój z hazuką;
 *   granica językowa biegnie między Rabką a Rabą Niżną,
 * — kuchnia zagórzańska (Etnozagroda): bryjka, sapka, prażucha,
 *   zaciarka, kluski kudłate, niemcy/mordonie, żur, kwaśnica,
 *   jucza, mieszanica/diama, krupy i pęczak, kołacz, bukty, placki
 *   żytnie i owsiane; wigilijne kluski ściskane, karpiele, galas;
 *   wielkanocna sodra (chleb, jajka i chrzan w kwaśnym mleku),
 * — zespoły regionalne: „Kasinianie-Zagórzanie” (Kasina Wielka, 1970),
 *   „Dolina Mszanki” (Mszana Górna, 2006), „Mali Rabianie” (2007),
 *   „Olszowianie” (2010), „Mali Łostowianie”,
 * — produkty z Listy Produktów Tradycyjnych: „boczek domowy z Kasinki”
 *   i „kiełbasa swojska tradycyjna z Kasinki”, oba wpisane 29.05.2017,
 *   z Kasinki Małej w gminie wiejskiej,
 * — „Zagórzańskie Lato” — sztandarowa impreza gminy, stadion w Mszanie
 *   Górnej, sierpień, łączona z Festiwalem Kultury Beskidu Wyspowego
 *   „Beskidzkie Rytmy i Smaki”; program „Zagórzańskie Dziedziny”
 *   — znakowanie produktów o regionalnym charakterze,
 * — KGW potwierdzone imiennie: KGW Olszówka, „Paradne Gosposie”
 *   z Kasinki Małej,
 * — gospodarka mikrofirm: 890 podmiotów w mieście, 1 132 w gminie
 *   wiejskiej; brak jednego dużego pracodawcy; branże: handel 26%,
 *   budownictwo 17%, przetwórstwo 11%; branża drzewna i tartaki,
 * — DK28 przechodzi przez środek miasta i krzyżuje się z DW968;
 *   natężenie ok. 18 000 pojazdów na dobę na ul. Kolbego i 15 000
 *   na ul. Orkana (2026); most na Mszance z 1957 r. przeznaczony
 *   do rozbiórki, budowa nowego w latach 2028–2029,
 * — obwodnica NIE ISTNIEJE i nie ma decyzji — ZDW zlecił w 2023 r.
 *   studium komunikacyjne, warianty nieogłoszone,
 * — do Krakowa 59 km / ok. 60 min (DW968 przez Lubień + S7),
 * — kolej: linia 104 w przebudowie, stacja Mszana Dolna
 *   przebudowywana, ruch pasażerski wstrzymany; odcinek Rabka
 *   Zaryte – Mszana Dolna – Fornale (15 km) w realizacji, nowe perony
 *   Raba Niżna i Mszana Dolna Marki; 14.12.2025 otwarto dla pasażerów
 *   stację Rabka Zaryte,
 * — komunikacja zbiorowa: dworzec autobusowy, linie powiatowe do
 *   wszystkich sołectw, kursy tranzytowe Szczawnica – Mszana Dolna –
 *   Kraków.
 *
 * CZEGO TU NIE MA I DLACZEGO — ZASADA BEZWZGLĘDNA:
 * — nie ma i nie będzie ani jednego zdania o zbrodni z 19 sierpnia
 *   1942 r., o wąwozie „Pańskie” ani o cmentarzu żydowskim. To jest
 *   miejsce pamięci i zbiorowa mogiła. Nazwa „Pańskie” funkcjonuje
 *   lokalnie jako nazwa rejonu, ale w treści handlowej nie wystąpi
 *   w żadnej formie,
 * — nie ma tematu smogu. Dodatkowo: teza o „czołówce zanieczyszczenia
 *   w Polsce” NIE ZNAJDUJE POTWIERDZENIA w rankingach Polskiego
 *   Alarmu Smogowego za 2024 r. Nie powtarzam jej nawet w rozmowie,
 * — nie ma powodzi z sierpnia 2014 r. (Kasinka Mała: 70 uszkodzonych
 *   budynków mieszkalnych) ani osuwisk. Region jest osuwiskowy, a dom
 *   to dla klientki inwestycja życia,
 * — nie ma obietnicy powrotu pociągów z datą — nikt jej nie podał,
 * — nie ma liczb o bezrobociu (58% bezrobotnych w gminie wiejskiej
 *   to kobiety) ani o wynagrodzeniach. To kontekst do rozmowy o racie,
 *   nie treść na stronę,
 * — nie ma emigracji zarobkowej — brak wiarygodnych danych,
 * — nie ma „izby regionalnej Zagórzan w Mszanie Dolnej” —
 *   niepotwierdzone. Piszę o Miejskim Ośrodku Kultury i o zespołach.
 *
 * PUŁAPKA NR 1: `mszana.ug.gov.pl` to gmina Mszana w powiecie
 * wodzisławskim na Śląsku, NIE ta. Właściwe adresy: mszana.pl
 * (gmina wiejska) i mszana-dolna.pl (miasto).
 *
 * PUŁAPKA NR 2: Kobielnik NIE należy do tej gminy — to gmina Wiśniowa,
 * powiat myślenicki. Klimkówka i Klupki to przysiółki, nie sołectwa.
 *
 * PUŁAPKA NR 3: Mogielica nie leży w tej gminie. Widać ją stąd,
 * ale jest na styku gmin Słopnice, Dobra i Jurków.
 */
export const MSZANA_DOLNA: CityContent = {
  slug: "mszana-dolna",
  h1: "Thermomix Mszana Dolna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Mszana Dolna — prezentacja i cena",
  seoDescription:
    "Thermomix w Mszanie Dolnej: bezpłatna prezentacja TM7 u Ciebie w kuchni — miasto oraz Kasinka Mała, Kasina Wielka, Mszana Górna i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Mszana Dolna — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Mszanie Dolnej i w całej gminie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Mszany Dolnej przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do całego miasta i do wszystkich dziewięciu sołectw gminy wiejskiej.",

  highlights: highlightyStandardowe("miasto i cała gmina wiejska, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mszanie Dolnej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w mieszkaniu w mieście, jak w domu na końcu Łętowego.",
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
      heading: "Miasto, które ma własną kuchnię i własne słowa na nią",
      paragraphs: [
        "Mszana Dolna jest stolicą Zagórzan i to nie jest tytuł honorowy. Nazwę tej grupy zapisał po raz pierwszy Wincenty Pol w 1851 roku, a granica gwary biegnie do dziś między Rabką a Rabą Niżną — czyli tuż przy granicy gminy. Mazurzenie, „gọba” zamiast „gęba”, „byłek” zamiast „byłem”. To wciąż żywy język, a nie zapis z archiwum.",
        "Razem z językiem przetrwała kuchnia — i to jest rzecz, której nie ma żadna inna miejscowość w moim obszarze w takiej postaci. Bryjka, sapka i prażucha z mąki. Kluski kudłate z tartych ziemniaków, niemcy, mordonie. Kwaśnica na soku spod kapusty, żur na kościach, jucza z serwatki. Mieszanica — kiszona kapusta z tłuczonymi ziemniakami i kwaśną śmietaną. Kołacz na święta, z serem słodkim albo ze słoną bryndzą. Sodra na Wielkanoc i galas, czyli kompot z suszu, na Wigilię. Każda z tych nazw jest tu rozumiana bez tłumaczenia.",
        "Druga rzecz to układ miejsca. Mszana Dolna to w istocie dwie jednostki o tej samej nazwie: miasto na niecałych ośmiu tysiącach mieszkańców i osobna gmina wiejska na siedemnastu i pół tysiąca, której urząd stoi w mieście, ale która miasta nie obejmuje. Profile są różne: miasto jest wyraźnie starsze — co piąty mieszkaniec przekroczył sześćdziesiątkę piątkę — a gmina wiejska młodsza, z dużą liczbą dzieci. Piszę o tym wprost, bo to znaczy, że w jednej kuchni gotuje się dla dwóch osób, a w drugiej dla pięciu.",
        "Trzecia to praca. Nie ma tu jednego dużego zakładu — jest ponad dwa tysiące mikrofirm w mieście i gminie razem, handel, budowlanka, przetwórstwo, tartaki. Do tego dojazdy: do Krakowa godzina przez Lubień i ekspresówkę, do Rabki kwadrans, do Limanowej i Nowego Sącza dalej. Miasto leży w kotlinie u zbiegu czterech rzek i przez sam jego środek przechodzi krajowa dwudziestka ósma — osiemnaście tysięcy pojazdów na dobę, bez obwodnicy, bo tej wciąż nie ma nawet w wariantach.",
        "Dla kuchni wnioski są dwa i są dość praktyczne. Pierwszy: obiad powstaje tu późno i po drodze, bo dużo osób wraca z daleka albo stoi w mieście w korku. Drugi: nikt tu nie potrzebuje, żeby mu tłumaczyć, jak się gotuje.",
        "Dlatego mówię wprost, czego to urządzenie nie robi. Nie ugotuje za Was, nie zastąpi wprawy i nie zrobi prażuchy lepiej niż babcia. Zabiera dwie rzeczy: konieczność stania obok garnka i te czynności, przez które tradycyjne dania odkłada się na niedzielę — tarcie ziemniaków, ucieranie, mieszanie, żeby nie przywarło. Kluski kudłate przestają być całym popołudniem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mszanie Dolnej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, czy chodzi o miasto, czy o którąś ze wsi — i którą. Gmina wiejska ma dziewięć sołectw rozłożonych po dolinach, a od Kasinki Małej do Lubomierza czy Łętowego to zupełnie inne trasy. W samym mieście wystarczy ulica albo nazwa rejonu, której używacie na co dzień; formalnych osiedli tu nie ma, więc nie trzeba niczego sprawdzać.",
        "Jedna praktyczna uwaga o godzinach: przez środek miasta idzie krajowa dwudziestka ósma i o siedemnastej potrafi stać. Jeśli umawiamy się na porę szczytu, zostawiam sobie kwadrans zapasu — wolę przyjechać chwilę wcześniej i poczekać w samochodzie niż zacząć spotkanie od tłumaczenia się.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mszanie Dolnej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix a kuchnia zagórzańska — co się da, a czego nie",
      paragraphs: [
        "Najczęstsze pytanie, jakie tu słyszę, brzmi: czy tym da się zrobić to, co się u nas naprawdę je. Odpowiadam konkretnie, bo ogólniki w tej sprawie są nic niewarte. Zupy — kwaśnica, żur, jucza — wychodzą bardzo dobrze i to jest chyba najmocniejsza strona urządzenia: gotują się same, pilnują temperatury i nie przywierają. Mieszanica, czyli kapusta z tłuczonymi ziemniakami, też, bo całą pracę robi tu rozdrabnianie.",
        "Kluski kudłate i mordonie to głównie tarcie ziemniaków — i to akurat urządzenie zdejmuje z głowy w kilkanaście sekund zamiast w kwadrans na tarce. Ciasto na kołacz i na bukty wyrabia się w naczyniu, bez oprószonego mąką blatu. Powidła, musy i galas z suszonych owoców robi się partiami, bez stania nad garnkiem.",
        "A czego nie zrobi: prażuchy w tym sensie, w jakim robiło się ją na blasze, nie zastąpi, bo tam chodzi o kontakt z gorącym żeliwem. Placków żytnich i owsianych też nie usmaży. Jeśli ktoś przyjdzie na prezentację z nadzieją, że urządzenie zrobi wszystko, powiem to samo, co piszę tutaj — nie zrobi.",
        "W praktyce najczęściej wygląda to tak, że garnki zostają, a znika stanie przy nich. W domu, gdzie ktoś wraca z Krakowa po osiemnastej albo gdzie mieszkają dwie osoby i szkoda rozkręcać kuchnię, to jest różnica między obiadem a kanapką. Rodzicom najmłodszych dzieci przydaje się poza tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy.",
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
    {
      id: "jedna-osoba",
      heading: "A jeśli gotuję dla jednej albo dwóch osób?",
      paragraphs: [
        "W samym mieście to pytanie pada częściej niż na wsiach wokół i ma to swoje uzasadnienie: mediana wieku w Mszanie Dolnej przekracza czterdzieści lat, a osób po sześćdziesiątym piątym roku życia jest tu blisko co piąta — wyraźnie więcej niż w gminie wiejskiej. Sporo mieszkań to dziś gospodarstwa jedno- albo dwuosobowe.",
        "Odpowiadam uczciwie: przy jednej porcji urządzenie nie oszczędza dużo czasu. Zupę na jeden talerz da się ugotować w rondlu równie szybko. Zmienia natomiast dwie inne rzeczy i to one zwykle decydują.",
        "Pierwsza to wysiłek. Nie trzeba nic tarć ani ucierać, nie trzeba przelewać gorących garnków ani dźwigać ciężkich naczyń. Dla kogoś, komu nie służą już nadgarstki albo kolana, to nie jest wygoda, tylko realna różnica — a tarcie ziemniaków na kluski kudłate jest tu dobrym przykładem.",
        "Druga to porcjowanie. Wygodnie ugotować raz większy garnek, rozłożyć na pojemniki i mieć obiady na kilka dni — bo najczęstszym powodem, dla którego ktoś przestaje gotować dla siebie, nie jest brak umiejętności, tylko poczucie, że nie opłaca się rozkręcać kuchni dla jednej osoby. Pokazuję to na prezentacji wprost i nie namawiam nikogo, komu to naprawdę nie posłuży.",
      ],
      links: [
        {
          href: "/thermomix/wady-i-zalety",
          label: "Wady i zalety Thermomixa — bez lukru",
        },
      ],
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w Mszanie Dolnej i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewięciu sołectw gminy wiejskiej: Kasinki Małej, Kasiny Wielkiej, Mszany Górnej, Lubomierza, Olszówki, Łostówki, Łętowego, Raby Niżnej i Glisnego. Bez żadnej dopłaty za odległość i bez znaczenia, po której stronie granicy administracyjnej mieszkasz.",
    "Miasto nie ma formalnych osiedli, więc przy umawianiu wystarczy ulica. W praktyce mieszkańcy posługują się nazwami przysiółków i rodowych ról — Zarabie, Słomka, Marki, Podlesie, Krupciówka, Lachówka, Ciernie, Morgi, a także nazwiskami: Bieńki, Machaje, Nowaki, Wójty. Jeśli tak Wam wygodniej, mówcie tak samo do mnie: połapię się.",
    "Największe sołectwa to Kasinka Mała i Kasina Wielka, obie po ponad trzy tysiące mieszkańców — czyli każda z nich jest ludniejsza niż niejedna okoliczna gmina. To z Kasinki Małej pochodzą zresztą oba tutejsze produkty z ministerialnej Listy Produktów Tradycyjnych: boczek domowy i kiełbasa swojska. Na drugim krańcu jest Glisne, gdzie mieszka nieco ponad trzysta osób — i tam też dojeżdżam.",
    "Lubomierz, Łostówka i Mszana Górna sąsiadują z Gorczańskim Parkiem Narodowym, a Kasina Wielka leży pod Śnieżnicą, przy ośrodku narciarskim. Do tych sołectw jedzie się dłużej i inaczej niż do miasta, więc przy umawianiu proszę o nazwę wsi — od niej zależy, którego dnia w ogóle jestem w tamtej części gminy.",
  ],
  districts: [
    "Mszana Dolna (miasto)",
    "Zarabie",
    "Słomka",
    "Marki",
    "Podlesie",
    "Kasinka Mała",
    "Kasina Wielka",
    "Mszana Górna",
    "Lubomierz",
    "Olszówka",
    "Łostówka",
    "Łętowe",
    "Raba Niżna",
    "Glisne",
  ],

  nearbyHeading: "Dobra, Kamienica i Limanowa też są na mojej trasie",
  nearbyParagraphs: [
    "Mszana Dolna jest węzłem — i dla mnie też. Do Dobrej mam stąd kilkanaście minut przez Przełęcz Gruszowiec, do Limanowej pół godziny, do Kamienicy tyle samo drogą wojewódzką przez dolinę. Do żadnej z tych gmin nie doliczam dojazdu.",
    "Warto wiedzieć, że w sierpniu w Mszanie Górnej odbywa się „Zagórzańskie Lato” z Festiwalem Kultury Beskidu Wyspowego — z zespołami regionalnymi i degustacjami tutejszej kuchni. Jeśli umawiamy się w tym terminie, powiedzcie od razu: wtedy dobieram godzinę tak, żeby nie kolidowała.",
  ],
  nearbyTowns: [
    "Dobra",
    "Kamienica",
    "Limanowa",
    "Tymbark",
    "Słopnice",
    "Jodłownik",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do Mszany Dolnej", "w powiecie limanowskim"),

  faq: [
    {
      question:
        "Mieszkam w gminie wiejskiej, nie w mieście. Dojeżdżasz tak samo?",
      answer:
        "Tak, na dokładnie tych samych warunkach. To dwie odrębne jednostki o tej samej nazwie, ale dla mnie to jedna trasa — dojeżdżam do wszystkich dziewięciu sołectw, od Kasinki Małej po Glisne, i dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w Mszanie Dolnej"),
    {
      question: "Czy da się tym zrobić kluski kudłate, kwaśnicę albo kołacz?",
      answer:
        "Zupy — kwaśnica, żur, jucza — wychodzą bardzo dobrze, bo gotują się same i nie przywierają. Przy kluskach kudłatych i mordoniach cała praca to tarcie ziemniaków i to akurat urządzenie robi w kilkanaście sekund. Ciasto na kołacz i bukty wyrabia się w naczyniu. Prażuchy z blachy nie zastąpi i mówię to wprost — na prezentacji pokazuję jedno i drugie.",
    },
    {
      question: "Mieszkam sama. Czy Thermomix ma sens przy jednej osobie?",
      answer:
        "Czasem tak, czasem nie i mówię to uczciwie. Czasu przy jednej porcji oszczędza niewiele. Zdejmuje natomiast wysiłek — tarcie, ucieranie, przelewanie gorących garnków — i bardzo ułatwia ugotowanie raz na kilka dni z porcjowaniem. Na prezentacji pokazuję to na konkretnym obiedzie, a nie na deklaracjach.",
    },
    {
      question:
        "Czy możemy się umówić w weekend, poza korkiem na dwudziestce ósmej?",
      answer:
        "Tak, sobotnie przedpołudnia to jeden z najczęściej wybieranych terminów w Mszanie. W tygodniu też się umawiam, tylko wtedy zostawiam sobie kwadrans zapasu na dojazd — przez środek miasta przechodzi droga krajowa i o siedemnastej potrafi stać.",
    },
  ],

  geo: { lat: 49.6739, lng: 20.0806 },
};
