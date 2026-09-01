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
 * BOCHNIA — wersja 2 (sierpień 2026). Rozbudowa z ~1150 do ~3000 słów.
 *
 * DLACZEGO AKURAT TA STRONA. Konkurencja (thermoprzedstawiciel.pl) ma 118
 * podstron miast, ale realnie wygrywa na dwóch: stronie głównej i Bochni.
 * Jej Bochnia to ~2900 słów, 17 nazw osiedli i 14 pytań FAQ. To jedyne
 * miasto poza Krakowem, gdzie trzeba nadrobić objętość — ale nadrabiamy ją
 * treścią, której ona nie ma, a nie przepisaniem tego samego innymi słowami.
 *
 * CZEGO ONA NIE MA, A MY MAMY:
 * — osiedla opisane, a nie wymienione po przecinku (u niej to jedno zdanie),
 * — dwa układy nazw: 14 oficjalnych osiedli i nazwy potoczne, których ludzie
 *   naprawdę używają przy umawianiu (ona miesza jedne z drugimi i nie widzi
 *   różnicy),
 * — targowisko Mój Rynek z konkretnymi dniami i godzinami,
 * — kasza pęcak z Siedlca z ministerialnej listy jako punkt wyjścia do
 *   rozmowy o obiedzie w środku tygodnia,
 * — żywa cena z panelu zamiast kwoty wpisanej w tekst na sztywno,
 * — kalkulator rat i formularz kontaktowy (ona ma tylko telefon i mail).
 *
 * FAKTY POTWIERDZONE I UŻYTE (źródła sprawdzone 2026-08-27):
 * — miasto ma 14 osiedli z własnymi zarządami: Śródmieście-Campi, Słoneczne,
 *   Krzęczków-Łychów, Uzbornia, Niepodległości, Windakiewicza, Kolanów,
 *   Dołuszyce, Chodenice, Kurów, Św. Jana-Murowianka, Smyków,
 *   Karolina-Krzeczowska, Proszowskie (bochnia.eu/pl/samorzad/zarzady-osiedli),
 * — obok tego funkcjonuje druga, starsza siatka nazw potocznych: Trynitatis,
 *   Wygoda, Podedworze, Wójtostwo, Krakowskie Przedmieście, Czerwieniec,
 *   Nowy Świat, Pagórek, Karosek i inne,
 * — Trynitatis: dawna osada włączona do Bochni w 1973 r., zabudowa
 *   jednorodzinna, starsza; szyb solny z 1908 r.,
 * — zasoby mieszkaniowe miasta: 10 813 mieszkań, przeciętna powierzchnia
 *   użytkowa 76 m² (GUS, portret gminy),
 * — Kopalnia Soli Bochnia: najstarsza kopalnia soli kamiennej w Polsce,
 *   na liście UNESCO od 23 czerwca 2013 r., wydobycie zakończone w 1990 r.,
 * — targowisko „Mój Rynek” przy ul. Partyzantów: czwartki i soboty,
 *   277 stanowisk, od 4:00 (lato) / 5:00 (zima) do 14:00,
 * — powiat bocheński ma najniższą stopę bezrobocia wśród powiatów ziemskich
 *   Małopolski (2,6%, dane PUP Bochnia),
 * — gmina wiejska Bochnia to ODRĘBNA jednostka: 31 sołectw, ok. 132 km²,
 * — Kraków: ok. 42 km, autem ok. 45 minut, pociągiem na linii E30 zwykle
 *   30–45 minut,
 * — kasza pęcak z kapustą z Siedlca (Koło Gospodyń Wiejskich) JEST na
 *   ministerialnej Liście Produktów Tradycyjnych — potwierdzone bezpośrednio
 *   na gov.pl/web/rolnictwo/kasza-pecak-z-kapusta.
 *
 * PUŁAPKA, W KTÓRĄ JUŻ RAZ WPADŁEM I KTÓRA JEST TU OPISANA, ŻEBY NIE WPAŚĆ
 * PONOWNIE: polędwica wołowa pieczona w soli figuruje na liście „Smak
 * powiatu” prowadzonej przez starostwo — a to NIE JEST ministerialna Lista
 * Produktów Tradycyjnych. Nie znalazłem jej w rejestrze MRiRW. Dlatego
 * w treści jest opisana jako danie serwowane w bocheńskich restauracjach,
 * a słowa „lista ministerialna” dotyczą wyłącznie kaszy pęcak.
 *
 * CZEGO TU NIE MA I DLACZEGO — to są rzeczy, które w poprzedniej wersji tej
 * strony BYŁY albo się prosiły, a nie mają pokrycia w źródłach:
 * — „niska gęstość zaludnienia i przewaga zabudowy jednorodzinnej”: gęstość
 *   Bochni to ok. 950–1000 os./km², co nie jest wartością niską, a udziału
 *   zabudowy jednorodzinnej nie potwierdza żadne źródło. Usunięte.
 *   Zostaje tylko to, co jest w GUS: przeciętne mieszkanie ma 76 m².
 * — „Stalprodukt największym pracodawcą miasta”: nie znalazłem źródła, które
 *   by to stwierdzało. Usunięte; zostaje potwierdzone niskie bezrobocie.
 * — podziemne uzdrowisko jako działająca atrakcja: działalność lecznicza
 *   została zawieszona w 2017 r. i nie potwierdziłem jej wznowienia.
 *   Nie ma o niej ani słowa.
 * — liczba połączeń kolejowych dziennie: nie da się jej podać z jednego
 *   wiarygodnego źródła, więc podaję tylko czas przejazdu.
 */
export const BOCHNIA: CityContent = {
  slug: "bochnia",
  h1: "Thermomix Bochnia – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Bochnia — prezentacja i cena",
  seoDescription:
    "Thermomix w Bochni: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Wszystkie osiedla i gmina wiejska. Cena, raty 0,6%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bochnia — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bochni lub okolicy. Bez dopłat za dojazd, bez zobowiązania. Ratę liczymy na miejscu.",

  lead:
    "Do Bochni i całej gminy dojeżdżam bez dopłaty za dojazd — na każde osiedle i do każdego sołectwa. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Bochnia, gmina wiejska i okoliczne gminy, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bochni – jak wygląda prezentacja?",
      paragraphs: [
        "Przywożę urządzenie i wszystkie produkty, a jeśli trzeba — także naczynia. Ty przygotowujesz dokładnie dwie rzeczy: wolny kawałek blatu i gniazdko. Niczego nie kupujesz z wyprzedzeniem i niczego nie musisz mieć w domu.",
        "Dalej po prostu gotujemy: obiad, coś słodkiego i zwykle jeszcze coś z Twojej lodówki, bo to najuczciwszy sprawdzian. Uprzedź mnie wcześniej, ile osób jada w domu i czego nie jecie — ułożę spotkanie pod to, a nie pod gotowy scenariusz.",
        "Spotkanie trwa około dwóch godzin i nie ma w nim etapu, w którym oglądasz slajdy albo słuchasz o firmie. Jeśli w połowie stwierdzisz, że to nie dla Ciebie, powiedz wprost — skończymy wcześniej i nikt nie będzie miał o to pretensji.",
        "Liczby zostawiam na koniec i podaję je wprost: cena, aktualna promocja, rata przy różnych okresach spłaty. Nic nie musi się rozstrzygnąć tego wieczoru — za spotkanie i tak nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Wieczór po powrocie z Krakowa",
      paragraphs: [
        "Bochnia leży mniej więcej w pół drogi między Krakowem a Tarnowem, ale ciąży wyraźnie ku Krakowowi. Do Krakowa jest stąd około czterdziestu kilometrów, autem zwykle czterdzieści pięć minut, pociągiem na linii E30 od trzydziestu do czterdziestu pięciu. Dla wielu bochnian to oznacza pracę w Krakowie i dom w Bochni.",
        "Powiat bocheński ma przy tym najniższe bezrobocie spośród powiatów ziemskich w Małopolsce. Brzmi jak sucha statystyka, a znaczy rzecz bardzo konkretną: prawie wszyscy w domu pracują, więc obiad wypada w tej gorszej części dnia — po dojeździe, przed resztą obowiązków.",
        "Problem nie brzmi „nie umiem gotować”. Brzmi „wracam o osiemnastej i nie mam już siły stać przy garnku”. Wtedy albo powstaje coś naprędce, albo zamawia się jedzenie, albo obiad zjada cały wieczór.",
        "Thermomix zmienia w tym jedną rzecz, ale zasadniczą: obiad nie wymaga obecności. Wrzucasz składniki, ustawiasz i idziesz zrobić coś innego — urządzenie miesza samo i pilnuje temperatury. Wieczór przestaje być wyborem między jedzeniem a odpoczynkiem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bochni?",
      paragraphs: [
        "Najszybciej telefonem albo SMS-em — zwykle wystarczy jedna wiadomość, żeby ustalić termin. Możesz też wypełnić formularz na dole strony i wpisać godzinę, o której wygodnie Ci odebrać.",
        "Powiedz od razu, w którym rejonie mieszkasz i ile osób będzie na spotkaniu. Nazwa potoczna wystarczy — „na Wygodzie”, „za torami”, „koło Trynitatis” mówi mi więcej niż numer osiedla.",
        "Jeśli wracasz z Krakowa, podaj po prostu, o której realnie jesteś w domu. Wieczorne terminy są w Bochni najczęściej wybierane i staram się je układać tak, żeby nikt nie musiał się śpieszyć — spotkanie o dziewiętnastej nie jest dla mnie problemem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bochni"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Bochni",
      paragraphs: [
        "Przeciętne mieszkanie w Bochni ma według danych GUS siedemdziesiąt sześć metrów kwadratowych, a całe miasto liczy niecałe jedenaście tysięcy mieszkań. To dużo jak na przeciętną — i widać to na spotkaniach: kuchnia rzadko bywa tu wąskim gardłem tak, jak w krakowskiej wielkiej płycie. Miejsca na blacie zwykle jest.",
        "Co innego jest tu wąskim gardłem: czas i sezon. W tygodniu obiad trzeba zrobić po powrocie z pracy, a latem i jesienią dochodzi do tego to, co przychodzi z ogrodu albo z targu naraz i w dużej ilości. Jedno i drugie to ta sama robota — pilnowanie garnka.",
        "Thermomix obsługuje oba przypadki tym samym mechanizmem: ustawiona temperatura, ustawiony czas, mieszanie bez przywierania. Przy obiedzie to znaczy, że można nastawić i wyjść z kuchni. Przy przecierach i dżemach — że nie trzeba stać nad garnkiem przez czterdzieści minut i pilnować, żeby nie przypaliło się dno.",
        "Trzecia rzecz to małe dzieci. Varoma pozwala przygotować posiłek dla dziecka na parze równolegle z obiadem dla reszty domu, w jednym urządzeniu i bez pilnowania dwóch garnków. Jeśli masz w domu niemowlę albo dwulatka, powiedz o tym przy umawianiu — pokażę dokładnie to, zamiast standardowego zestawu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla reszty domu mogą powstawać naraz.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  costs: {
    heading: "Domowy obiad czy jedzenie na mieście w Bochni – co się bardziej opłaca?",
    paragraphs: [
      "To pytanie słyszę na prezentacjach częściej niż jakiekolwiek pytanie o funkcje urządzenia. Jednej liczby na nie nie ma i nie będę takiej podawać — ale sam rachunek da się zrobić w pięć minut, na Twoich cenach.",
      "W Bochni ten rachunek ma jeszcze jeden składnik, którego nie ma w Krakowie: część obiadów „na mieście” zjada się w rzeczywistości w Krakowie, po pracy, przed powrotem. To bywa najdroższa pozycja w miesiącu, bo nikt jej nie liczy jako wydatku na jedzenie.",
      "Poniżej sam szkielet, policzony dla czteroosobowego domu. Wpisz w niego własne kwoty — chodzi o to, żebyś zobaczyła metodę, a nie żebym ja podawała, ile co kosztuje.",
    ],
    rows: [
      { label: "Obiad w środku tygodnia (4 osoby)", home: "koszt składników", out: "4 × cena dania na mieście" },
      { label: "Lunch w pracy w Krakowie (1 osoba, 5 dni)", home: "resztki z obiadu, koszt bliski zeru", out: "5 × cena lunchu" },
      { label: "Zupa na dwa dni", home: "warzywa z targu, ok. 2 zł/porcja", out: "zwykle nie zamawia się na zapas" },
      { label: "Czas Twojej obecności w kuchni", home: "ustawiasz i wychodzisz", out: "dojazd, kolejka, powrót" },
      { label: "Kontrola nad składem", home: "pełna — wiesz, co włożyłaś", out: "zerowa" },
    ],
    note: "Cen lokali nie podaję, bo zmieniają się co kwartał i różnią się między Bochnią a Krakowem. Wstaw swoje — chodzi o metodę, nie o moją tabelkę.",
    closing:
      "Uczciwie: sam zakup urządzenia się z tego nie zwróci w miesiąc i nie będę tego twierdzić. Zwraca się co innego — obiad w domu przestaje wymagać wysiłku, więc przestaje przegrywać z gotowym jedzeniem. Oszczędność bierze się z tej zmiany, a nie z samego sprzętu.",
  },

  culinary: {
    heading: "Sól bocheńska i kasza pęcak — dwie rzeczy, które da się tu ugotować",
    paragraphs: [
      "Kopalnia Soli Bochnia jest najstarszą kopalnią soli kamiennej w Polsce i od dwa tysiące trzynastego roku figuruje na liście UNESCO. Wydobycie skończyło się w tysiąc dziewięćset dziewięćdziesiątym, ale sól w tutejszej kuchni została — bocheńskie restauracje serwują polędwicę wołową pieczoną w soli, podawaną z konfiturą cebulową.",
      "Powiem wprost, bo to uczciwsze niż udawanie: przy samej polędwicy Thermomix nie jest do niczego potrzebny. To danie od święta, robi się je w piekarniku i cała robota polega na cierpliwości. Konfitura cebulowa to inna sprawa — długie smażenie cebuli z pilnowaniem, żeby się nie przypaliła, to dokładnie ten rodzaj czynności, którą urządzenie przejmuje w całości.",
      "Bliżej codzienności jest to, co gmina wiejska Bochnia ma na ministerialnej Liście Produktów Tradycyjnych: kasza pęcak z kapustą z Siedlca, przygotowywana przez tamtejsze Koło Gospodyń Wiejskich. Jęczmień, biała kapusta, cebula, czosnek, kawałek słoniny albo podgardla. Potrawa z dawnej kuchni wiejskiej — tania, sycąca i taka, którą można zrobić w środę.",
      "I to jest danie, przy którym urządzenie robi realną różnicę: kaszę trzeba ugotować, kapustę udusić, a całość ma nie przywrzeć do dna. Ustawiona temperatura i mieszanie prowadzone przez urządzenie załatwiają dokładnie ten problem. Jeśli chcesz, na prezentacji zrobimy pęcak zamiast standardowego zestawu — powiedz przy umawianiu, wezmę składniki.",
    ],
  },

  districtsHeading: "Gdzie w Bochni umówisz prezentację?",
  districtsParagraphs: [
    "Dojeżdżam na wszystkie osiedla miasta i do sołectw gminy wiejskiej Bochnia. Za dojazd nie doliczam ani złotówki — bez znaczenia, czy mieszkasz w Śródmieściu, na Kurowie, czy w Łapczycy.",
    "Bochnia ma dwa równoległe układy nazw i warto o tym wiedzieć, zanim zadzwonisz. Oficjalnie miasto dzieli się na czternaście osiedli z własnymi zarządami: Śródmieście-Campi, Słoneczne, Krzęczków-Łychów, Uzbornia, Niepodległości, Windakiewicza, Kolanów, Dołuszyce, Chodenice, Kurów, Św. Jana-Murowianka, Smyków, Karolina-Krzeczowska i Proszowskie. Tych nazw używa urząd.",
    "Mieszkańcy używają drugiej siatki, starszej i znacznie gęstszej: Trynitatis, Wygoda, Podedworze, Wójtostwo, Krakowskie Przedmieście, Czerwieniec, Nowy Świat, Pagórek, Karosek. To są nazwy dawnych osad i przysiółków, które miasto wchłonęło — Trynitatis na przykład było austriacką kolonią górniczą z końca osiemnastego wieku, przez lata osobną gminą, przyłączoną do Chodenic w tysiąc dziewięćset trzydziestym pierwszym roku, a razem z nimi do Bochni w siedemdziesiątym trzecim.",
    "Dla mnie to bez różnicy i nie musisz się zastanawiać, której nazwy użyć. Mówisz „na Wygodzie” — wiem, gdzie to jest. Przy umawianiu i tak proszę o ulicę i numer, bo to jedyna informacja, która realnie skraca dojazd.",
    "Co się z tego przekłada na samo spotkanie: bloki są w Bochni skupione głównie na osiedlach Niepodległości, Windakiewicza i Słonecznym, a większość pozostałych rejonów — Kolanów, Dołuszyce, Chodenice, Smyków, Trynitatis — to zabudowa jednorodzinna, w dużej części starsza. W domu rozmowa idzie zwykle o gotowaniu dla większej liczby osób i o przetworach. W bloku o miejscu na blacie i liczbie naczyń do umycia. Oba spotkania są sensowne, tylko przygotowuję się do nich inaczej.",
    "W starszej zabudowie warto pamiętać o jednym, choć nigdy nie było z tego problemu: urządzenie pobiera około tysiąca pięciuset watów, więc nie uruchamiam go równocześnie z czajnikiem i piekarnikiem na tym samym obwodzie. Jeśli wiesz, że u Ciebie z prądem bywa różnie, wystarczy, że powiesz o tym wcześniej.",
  ],
  districts: [
    "Śródmieście-Campi",
    "Słoneczne",
    "Krzęczków-Łychów",
    "Uzbornia",
    "Niepodległości",
    "Windakiewicza",
    "Kolanów",
    "Dołuszyce",
    "Chodenice",
    "Kurów",
    "Św. Jana-Murowianka",
    "Smyków",
    "Karolina-Krzeczowska",
    "Proszowskie",
    "Trynitatis",
    "Wygoda",
    "Podedworze",
    "Wójtostwo",
    "Krakowskie Przedmieście",
    "Czerwieniec",
  ],

  nearbyHeading: "Gmina wiejska i okolica też",
  nearbyParagraphs: [
    "Bochnia to formalnie dwie osobne gminy: miasto i otaczająca je gmina wiejska. Ta druga ma trzydzieści jeden sołectw i sto trzydzieści kilka kilometrów kwadratowych — Łapczyca, Proszówki, Cikowice, Stanisławice, Gierczyce, Bogucice, Damienice, Gawłów, Krzyżanowice, Nieszkowice Wielkie i Małe, Siedlec, Stradomka, Zawada i pozostałe. Dojeżdżam do wszystkich.",
    "Przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia — to jedyny powód, dla którego przy pierwszym telefonie pytam o miejscowość. Nie po to, żeby cokolwiek doliczyć, tylko żeby zaproponować termin, którego potem nie trzeba przekładać.",
    "Bochnia leży na trasie, którą jeżdżę regularnie do Brzeska, Nowego Wiśnicza i Krakowa, więc okolicę obsługuję przy okazji. Jeśli Twojej miejscowości nie ma na liście poniżej, po prostu zapytaj.",
  ],
  nearbyTowns: [
    "Nowy Wiśnicz",
    "Rzezawa",
    "Brzesko",
    "Gdów",
    "Niepołomice",
    "Wieliczka",
    "Łapanów",
    "Trzciana",
    "Lipnica Murowana",
    "Drwinia",
    "Kłaj",
    "Kraków",
  ],

  about: blokOMnie("do Bochni", "w Bochni, Brzesku i Nowym Wiśniczu"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Bochni bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Bochni i okolicznych gmin jest bezpłatny, tak samo jak sama prezentacja. Nie ma znaczenia, na którym osiedlu mieszkasz ani jak daleko od centrum.",
    },
    ...faqWspolne("w Bochni"),
    {
      question: "Czy dojeżdżasz też do gminy wiejskiej Bochnia?",
      answer:
        "Tak — do wszystkich trzydziestu jeden sołectw. Łapczyca, Proszówki, Cikowice, Stanisławice, Gierczyce, Bogucice, Siedlec i pozostałe. To osobna gmina od miasta, ale dla umówienia spotkania nie ma to żadnego znaczenia.",
    },
    {
      question: "Wracam z pracy w Krakowie dopiero wieczorem. Da się umówić późno?",
      answer:
        "Tak i w Bochni to najczęściej wybierany wariant. Podaj godzinę, o której realnie jesteś w domu — układam trasę tak, żeby spotkanie nie zaczynało się w biegu. Dziewiętnasta to normalna pora, nie wyjątek.",
    },
    {
      question: "Nie wiem, jak nazywa się moje osiedle. Czy to problem?",
      answer:
        "Nie, i pytają o to częściej, niż mogłoby się wydawać. W Bochni funkcjonują dwa układy nazw — czternaście oficjalnych osiedli i znacznie starsza siatka nazw potocznych. Podaj tę, której używasz na co dzień, albo po prostu ulicę i numer.",
    },
    {
      question: "Mieszkam w bloku na Niepodległości. Czy zmieścimy się w kuchni?",
      answer:
        "Zwykle tak, a jeśli nie — przenosimy część spotkania do stołu w pokoju. Urządzenie potrzebuje wyłącznie gniazdka i kawałka blatu, więc nic na tym nie tracimy, a siedzi się wygodniej.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów?",
      answer:
        "Tak, i w Bochni pytają o to głównie osoby z ogrodem oraz te, które kupują na targu przy Partyzantów. Przeciery, dżemy i powidła powstają przy ustawionej temperaturze, z mieszaniem prowadzonym przez urządzenie — czyli bez stania nad garnkiem i bez ryzyka, że coś przywrze do dna.",
    },
    {
      question: "Robię zakupy na targu. Czy da się ugotować coś z tego, co przyniosę?",
      answer:
        "Jak najbardziej i wolę tak pracować. Targowisko Mój Rynek przy Partyzantów działa w czwartki i soboty od wczesnego rana, więc jeśli umawiamy się w takim dniu, powiedz po prostu, co kupiłaś — ugotujemy z tego zamiast ze standardowego zestawu.",
    },
    {
      question: "Ile osób może być na prezentacji?",
      answer:
        "Od jednej do kilku — decydujesz Ty. Jeśli chcesz zaprosić siostrę, sąsiadkę czy koleżankę, powiedz przy umawianiu, ile osób będzie. Wezmę więcej składników i dobiorę dania pod tę liczbę.",
    },
    {
      question: "Czy muszę coś kupić przed prezentacją?",
      answer:
        "Nie. Przywożę urządzenie, składniki i w razie potrzeby naczynia. Po Twojej stronie zostaje wolne gniazdko i kawałek blatu albo stołu.",
    },
  ],

  geo: { lat: 49.9685, lng: 20.4303 },
};
