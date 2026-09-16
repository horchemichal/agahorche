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
 * CZŁOPA — powiat wałecki, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 138 mieszkańców (GUS 31.12.2024), 6,3 km²,
 *   gęstość 341,0 os./km².
 * CAŁA GMINA: 4 508 osób, 349,2 km², gęstość 13 os./km²
 *   — NAJNIŻSZA W TEJ FALI.
 * ⚠⚠ RÓŻNICA 2,11×. NIE MIESZAM TYCH LICZB.
 * ⚠⚠⚠ WŁASNA STRONA GMINY PODAJE NIEAKTUALNE
 *   2 444 / 5 275, a en.wiki 2 277 (2021).
 *   UŻYWAM WYŁĄCZNIE GUS: 2 138 / 4 508.
 *   TWARDA GRANICA.
 * ⚠ GEO: 53,0885 / 16,1211.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ ŻEŃSKI, LICZBA POJEDYNCZA:
 *   „TO JEST CZŁOPA", wzór jak „szopa".
 *   ⚠⚠⚠ Ms. W CZŁOPIE, D. DO CZŁOPY.
 *   NIGDY „w Człopej", NIGDY „do Człopi",
 *   NIGDY „w Człopa".
 *   ⚠⚠⚠ CZASOWNIK W LICZBIE POJEDYNCZEJ RODZAJU
 *   ŻEŃSKIEGO: „CZŁOPA LEŻY", „CZŁOPA MA" —
 *   NIGDY „Człopa leżą". ⚠⚠ TO JEST INNY WZORZEC
 *   NIŻ PEŁCZYCE I DOBRZANY Z TEJ SAMEJ FALI —
 *   tam liczba mnoga, tutaj pojedyncza.
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Człopy".
 *
 * ⚠⚠ HOMONIM: CZŁOPA ≠ CZŁUCHÓW (woj. pomorskie,
 *   ~13 tys.) ≠ CZARNKÓW (wielkopolskie)
 *   ≠ CZOŁPINO ≠ CHŁOPY (wieś rybacka koło Mielna,
 *   TO SAMO WOJEWÓDZTWO).
 *   ⚠⚠ ISTNIEJE WARIANTOWY ZAPIS „CZOŁPA" — spotykany
 *   w źródłach. ROZGRANICZAM W FAQ.
 *   ⚠ Uwaga redakcyjna: w gminie Człopa leży wieś
 *   TRZEBIN — nie mylić z TRZEBIATOWEM, który jest
 *   już opisany w tym serwisie.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠⚠ PRAWA MIEJSKIE: PRZYPISYWANE ROKOWI 1245,
 *   ALE AKT LOKACYJNY SIĘ NIE ZACHOWAŁ (natursport.pl
 *   podaje to wprost: „przypuszczalnie").
 *   ⚠⚠⚠ NIE PISZĘ „W 1245 ROKU CZŁOPA OTRZYMAŁA
 *   PRAWA MIEJSKIE" JAKO FAKTU PEWNEGO. Piszę
 *   „prawa miejskie przypisywane rokowi 1245,
 *   choć akt lokacyjny się nie zachował".
 * — ⚠⚠⚠ RÓŻNICY 356 LAT MIĘDZY 1245 A PIECZĘCIĄ Z 1601
 *   NIE UŻYWAM JAKO KĄTA — prowadzi prosto w obszar
 *   „tradycja kontra dowód / przepis rodzinny",
 *   ZAJĘTY PIĘCIOKROTNIE (Golub-Dobrzyń, Kamień
 *   Krajeński, Puck, Suraż, Radziejów).
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — Najstarszy zachowany wizerunek herbu — na pieczęci
 *   miejskiej z 1601 r.: korona, półksiężyc i trzy
 *   gwiazdy (zgodne w dwóch źródłach).
 *   ⚠ PODAJĘ JAKO FAKT W SEKCJI RODZINNEJ.
 * — ⚠⚠ POŻARÓW (XII w., XVI w.) NIE UŻYWAM —
 *   pożar „w XII w." jest przed domniemaną lokacją
 *   z 1245 r., źródło jest niespójne. POMIJAM.
 * — Ratusz neogotycki z przełomu XIX i XX w.,
 *   pierwotnie mieścił sąd.
 * — Szkoła z lat 1932–1933, projekt Karla Volgera.
 * — Grodzisko słowiańskie z VII–IX w. n.e., kilometr
 *   w dół biegu Cieszynki.
 * — Wyspa Świętych Ptaków na jeziorze Załom —
 *   stanowisko archeologiczne.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠⚠ KONSTRUKCJI SZACHULCOWEJ NIE PRZYPISUJĘ —
 *   źródła mówią o kościele murowanym (1934–38)
 *   i osobnym drewnianym z XVI w.
 * — Przez miasto przechodzi droga krajowa nr 22
 *   i droga wojewódzka nr 177.
 * — ⚠ KOLEJ: „połowa XIX w." to za mało precyzyjnie.
 *   NIE PODAJĘ ROKU. Wspominam co najwyżej kierunek
 *   Krzyż i to, że ruch pasażerski jest zawieszony —
 *   albo pomijam całość.
 * — ⚠⚠⚠ ZERO „VIRITIUM" I PTOLEMEUSZA — identyfikacja
 *   spekulatywna.
 * — ⚠⚠ WIADUKT NA TRASIE TUCZNO–MIROSŁAWIEC (A-294)
 *   NIE JEST ZABYTKIEM CZŁOPY. NIE PRZYPISUJĘ GO.
 *
 * GEOGRAFIA — FAKTY UŻYTE:
 * — Gmina zajmuje 24,7 % powierzchni powiatu wałeckiego
 *   przy 8,3 % jego ludności.
 *   ⚠⚠ TEGO ZESTAWIENIA NIE UŻYWAM JAKO KĄTA —
 *   prowadzi w obszar przestrzeni i powierzchni
 *   użytkowej (Koluszki, Tychowo z tej samej fali).
 *   PODAJĘ JAKO FAKT.
 * — Lasy: ponad 70 % powierzchni gminy — sosna
 *   z domieszką dębu, buka i brzozy.
 * — Położenie: południowo-zachodnia część Pojezierza
 *   Wałeckiego. Miasto leży nad trzema jeziorami.
 * — Jeziora gminy (nazwy, bez parametrów): Szczurzacz,
 *   Trzebin, Załom, Zamieć, Dłusko, Kochlin Duży,
 *   Młyński Staw. ⚠⚠ POWIERZCHNI I GŁĘBOKOŚCI
 *   NIE USTALONO DLA ŻADNEGO — NIE PODAJĘ LICZB.
 *   ⚠ Druga lista (pomeranica) wymienia inne nazwy —
 *   nie łączę obu list.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — RZEKI:
 *   PRZEZ GMINĘ PŁYNĄ CIESZYNKA, DRAWA I PŁOCICZA,
 *   OPISYWANE JAKO RZEKI „W CZĘŚCI O CHARAKTERZE
 *   GÓRSKIM" — MIMO ŻE TO POJEZIERZE WAŁECKIE,
 *   TEREN NIZINNY. Źródło: strona gminy.
 *   ⚠ O charakterze rzeki decyduje SPADEK, nie
 *   wysokość nad poziomem morza. ⚠⚠ TO JEST MOJE
 *   WYJAŚNIENIE FIZYCZNE, nie cytat ze źródła —
 *   formułuję je ostrożnie, jako powszechnie znaną
 *   zasadę, a nie jako dane o tych konkretnych rzekach.
 *   ⚠⚠ SPADKU ANI DŁUGOŚCI TYCH RZEK NIE PODAJĘ —
 *   nie ustalono. TO JEST CAŁY KĄT.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠ Gmina ma własną podstronę o Liście, ale nie
 *   wymienia na niej żadnego swojego produktu —
 *   promuje wyłącznie listę wojewódzką. TO SILNA
 *   POSZLAKA BRAKU WPISU, ALE NIE DOWÓD.
 *   ⚠⚠⚠ NIE PISZĘ, ŻE GMINA NIE MA WPISU.
 *   TEMAT NIE POJAWIA SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ ODLEGŁOŚCI DROGOWE NIEZWERYFIKOWANE — podaję
 *   sąsiednie miasta bez kilometrów.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: CHARAKTER NIE WYNIKA Z NAZWY — o tym, że
 * „prosty przepis" bywa trudny, a „danie dla
 * zaawansowanych" — banalne, i że etykieta nic tu
 * nie mówi.
 * Kąt od rzek gminy Człopa: Cieszynka, Drawa
 * i Płocicza płyną po nizinie, a opisywane są
 * jako rzeki o charakterze górskim.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przez gminę Człopa płyną Cieszynka, Drawa
 *   i Płocicza, opisywane jako rzeki w części
 *   o charakterze górskim, choć to teren nizinny,
 * — ŻE O CHARAKTERZE RZEKI DECYDUJE SPADEK, A NIE
 *   WYSOKOŚĆ NAD POZIOMEM MORZA — to jest rdzeń.
 *   Rzeka nie musi być wysoko, żeby szybko opadać,
 * — ⚠⚠ ŻE W KUCHNI CIĄGLE MYLIMY KATEGORIĘ
 *   Z ZACHOWANIEM. „Prosty przepis" to kategoria.
 *   „Trzy składniki" to kategoria. „Danie dla
 *   zaawansowanych" to kategoria. Żadna z nich nie
 *   mówi, ile to zajmie i czy wyjdzie,
 * — ⚠⚠ ŻE NAJTRUDNIEJSZE DANIA BYWAJĄ NAJKRÓTSZE
 *   NA LIŚCIE SKŁADNIKÓW — bo cała trudność siedzi
 *   nie w liczbie rzeczy, tylko w tym, że jest jeden
 *   moment, którego nie wolno przegapić,
 * — ⚠⚠ ŻE DLATEGO SENSOWNE PYTANIE DO PRZEPISU NIE
 *   BRZMI „CZY TO TRUDNE", TYLKO: ILE JEST W NIM
 *   MOMENTÓW, W KTÓRYCH DA SIĘ COŚ NIEODWRACALNIE
 *   POPSUĆ. Zero takich momentów oznacza danie łatwe,
 *   choćby miało dwadzieścia składników,
 * — ⚠⚠ ŻE TO SAMO DOTYCZY OCENIANIA SIEBIE:
 *   „nie umiem gotować" też jest kategorią i mówi
 *   równie mało, co „rzeka nizinna",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: KATEGORIE NIE SĄ
 *   BEZUŻYTECZNE. „Rzeka nizinna" to prawdziwa
 *   informacja o położeniu, tylko o czym innym niż
 *   o nurcie. Etykieta przy przepisie też coś mówi —
 *   po prostu nie to, o co się pyta,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia
 *   trudności dania, ale zmniejsza liczbę momentów,
 *   w których da się coś nieodwracalnie popsuć —
 *   bo temperatura i mieszanie są ustawione,
 *   a nie pilnowane. MÓWIĘ TO WPROST, bo to jest
 *   jedyna rzecz, którą naprawdę robi w tej sprawie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TRADYCJI KONTRA DOWODU, PRZEPISÓW
 *   RODZINNYCH I ZAPISYWANIA — obszar zajęty
 *   PIĘCIOKROTNIE. ⚠⚠ Prawa miejskie bez zachowanego
 *   aktu i pieczęć z 1601 r. aż się o to proszą.
 *   NIE WCHODZĘ W TEN MORAŁ ANI JEDNYM ZDANIEM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO PRZESTRZENI, POWIERZCHNI UŻYTKOWEJ
 *   I „LASU, KTÓRY NIC NIE ROBI" — obszar zajęty
 *   (Koluszki; Tychowo z tej samej fali). Zestawienia
 *   24,7 % powierzchni do 8,3 % ludności NIE UŻYWAM
 *   JAKO MORAŁU.
 * — ⚠⚠ ZERO NAZWY, KTÓRA NIE MÓWI, CO JEST W ŚRODKU —
 *   kąt zajęty (Borne Sulinowo). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT W CAŁYM SERWISIE. Tam chodzi
 *   o NAZWĘ WŁASNĄ, KTÓRA NIE OPISUJE MIEJSCA;
 *   TUTAJ o KATEGORIĘ, KTÓRA NIE PRZEWIDUJE
 *   ZACHOWANIA. Nie piszę o nazwach własnych,
 *   o nazwach dań ani o tym, że coś się nazywa inaczej,
 *   niż jest. Piszę wyłącznie o etykietach trudności.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO DO CZEGO TO WŁAŚCIWIE SŁUŻY — kąt zajęty
 *   (Karlino).
 * — ⚠⚠ ZERO NAJMNIEJSZEJ DZIAŁAJĄCEJ WERSJI — kąt
 *   zajęty (Międzyzdroje).
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 * — ⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno). ⚠ Piszę o momentach w przepisie,
 *   nie o decyzjach przed gotowaniem.
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec, sąsiednie miasto!).
 * — ⚠⚠ ZERO STAŁYCH WARUNKÓW ZAMIAST PILNOWANIA —
 *   kąt zajęty (Kalisz Pomorski). Słowo „pilnowanie"
 *   pojawia się wyłącznie w akapicie o sprzęcie,
 *   raz, i nie jest tematem sekcji.
 * — ⚠ ZERO INNEJ METODY NA INNYM ETAPIE — kąt zajęty
 *   (Golczewo, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH DAŃ JAKO PRZYKŁADÓW —
 *   piszę wyłącznie ogólnie.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów nie
 *   wprowadzam.
 * — ⚠⚠ ZERO POŻARÓW — źródło niespójne chronologicznie.
 * — ⚠⚠ ZERO VIRITIUM I PTOLEMEUSZA — spekulacja.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl; czlopa.pl
 *   w zakresie liczby ludności (dane nieaktualne).
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy — tu nawet strona
 *   gminy podaje nieaktualne wartości.
 * — NIE PISZĘ, że w 1245 r. Człopa otrzymała prawa
 *   miejskie — akt lokacyjny się nie zachował.
 * — NIE PODAJĘ powierzchni ani głębokości żadnego
 *   z jezior — nie ustalono.
 * — NIE ŁĄCZĘ dwóch różnych list jezior ze źródeł.
 * — NIE PODAJĘ roku otwarcia linii kolejowej.
 * — NIE PISZĘ o konstrukcji szachulcowej kościoła —
 *   niepotwierdzona.
 * — NIE PRZYPISUJĘ Człopie wiaduktu z trasy
 *   Tuczno–Mirosławiec.
 * — NIE PODAJĘ spadku ani długości rzek.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Człopa leży w powiecie wałeckim, w południowo-
 *   -zachodniej części Pojezierza Wałeckiego, nad
 *   trzema jeziorami; przechodzi przez nią droga
 *   krajowa nr 22 i droga wojewódzka nr 177,
 * — miasto liczy 2 138 mieszkańców (GUS, 31.12.2024)
 *   na 6,3 km², a cała gmina 4 508 osób na 349,2 km²,
 *   czyli trzynaście osób na kilometr kwadratowy;
 *   gmina zajmuje 24,7 % powierzchni powiatu przy
 *   8,3 % jego ludności, a lasy — głównie sosnowe,
 *   z domieszką dębu, buka i brzozy — to ponad 70 %
 *   jej terenu,
 * — prawa miejskie przypisywane są rokowi 1245,
 *   choć akt lokacyjny się nie zachował; najstarszy
 *   zachowany wizerunek herbu pochodzi z pieczęci
 *   miejskiej z 1601 r. i przedstawia koronę,
 *   półksiężyc i trzy gwiazdy,
 * — przez gminę płyną Cieszynka, Drawa i Płocicza,
 *   opisywane jako rzeki w części o charakterze
 *   górskim, mimo nizinnego położenia,
 * — kilometr w dół biegu Cieszynki leży grodzisko
 *   słowiańskie z VII–IX w., a na jeziorze Załom —
 *   Wyspa Świętych Ptaków, stanowisko archeologiczne,
 * — neogotycki ratusz pochodzi z przełomu XIX i XX w.
 *   i pierwotnie mieścił sąd, a szkołę wzniesiono
 *   w latach 1932–1933 według projektu Karla Volgera.
 */
export const CZLOPA: CityContent = {
  slug: "czlopa",
  h1: "Thermomix Człopa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Człopa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Człopie (powiat wałecki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Człopa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Człopie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Człopy w powiecie wałeckim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie, także tych w głębi lasu.",

  highlights: highlightyStandardowe("Człopa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rzeki nizinne o charakterze górskim. Decyduje spadek, nie wysokość.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Człopie – jak wygląda prezentacja?",
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
      id: "charakter-a-kategoria",
      heading: "Rzeka nizinna, nurt górski",
      paragraphs: [
        "Przez gminę Człopa płyną Cieszynka, Drawa i Płocicza. Opisuje się je jako rzeki w części o charakterze górskim — mimo że to Pojezierze Wałeckie, teren nizinny, bez żadnych gór w promieniu kilkuset kilometrów.",
        "Sprzeczności w tym nie ma. O charakterze rzeki decyduje spadek, a nie wysokość nad poziomem morza. Rzeka nie musi płynąć wysoko, żeby szybko opadać — wystarczy, że opada na krótkim odcinku.",
        "W kuchni ciągle mylimy jedno z drugim, tylko rzadziej to zauważamy.",
        "„Prosty przepis” to kategoria. „Trzy składniki” to kategoria. „Danie dla zaawansowanych”, „szybkie”, „domowe” — wszystko to są kategorie. I żadna z nich nie mówi tego, o co naprawdę pytamy: ile to zajmie i czy wyjdzie.",
        "Najtrudniejsze dania bywają najkrótsze na liście składników. Cała trudność nie siedzi w liczbie rzeczy do przygotowania, tylko w tym, że gdzieś w środku jest jeden moment, którego nie wolno przegapić — i po którym nie da się już nic naprawić.",
        "Dlatego sensowne pytanie do przepisu nie brzmi „czy to trudne”. Brzmi: ile jest w nim momentów, w których da się coś nieodwracalnie popsuć.",
        "Zero takich momentów oznacza danie łatwe, choćby miało dwadzieścia składników i trzy strony opisu — bo wszystko da się poprawić po drodze. Jeden taki moment oznacza danie wymagające uwagi, choćby składniki dały się policzyć na palcach jednej ręki. To jest pytanie, na które przepis zwykle nie odpowiada wprost, ale odpowiedź zawsze da się z niego wyczytać.",
        "To samo dotyczy zresztą oceniania siebie. „Nie umiem gotować” też jest kategorią i mówi mniej więcej tyle, co „rzeka nizinna” — coś o położeniu, nic o nurcie.",
        "Uczciwie o drugiej stronie: kategorie nie są bezużyteczne i nie chodzi o to, żeby je ignorować. „Rzeka nizinna” to prawdziwa i przydatna informacja, tylko o czym innym niż o tempie wody. Etykieta przy przepisie też coś mówi — po prostu nie to, o co się pyta, gdy się pyta, czy dać radę dziś wieczorem.",
        "Na koniec o urządzeniu, wąsko i bez obietnic.",
        "Ono nie zmienia trudności dania i nie sprawia, że coś skomplikowanego robi się proste. Zmniejsza natomiast liczbę tych momentów, w których da się coś nieodwracalnie popsuć — bo temperatura i mieszanie są ustawione, a nie pilnowane w biegu. To jest dokładnie ta jedna rzecz, którą w tej sprawie robi, i nie powiem, że robi więcej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Człopie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co Wam ostatnio nie wyszło i w którym momencie. To najlepsza wskazówka, co warto razem ugotować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Człopie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Człopy",
      paragraphs: [
        "Człopa leży w powiecie wałeckim, w południowo-zachodniej części Pojezierza Wałeckiego, nad trzema jeziorami; przechodzi przez nią droga krajowa numer dwadzieścia dwa i droga wojewódzka sto siedemdziesiąt siedem. Samo miasto liczy ponad dwa tysiące stu mieszkańców (GUS, 31.12.2024) na sześciu i trzech dziesiątych kilometra kwadratowego, a cała gmina blisko cztery i pół tysiąca osób na trzystu czterdziestu dziewięciu — trzynaście osób na kilometr kwadratowy. Gmina zajmuje niecałą jedną czwartą powierzchni powiatu przy niespełna jednej dwunastej jego ludności, a lasy, głównie sosnowe z domieszką dębu, buka i brzozy, to ponad siedemdziesiąt procent jej terenu. Prawa miejskie przypisywane są rokowi 1245, choć akt lokacyjny się nie zachował; najstarszy zachowany wizerunek herbu pochodzi z pieczęci miejskiej z 1601 roku i przedstawia koronę, półksiężyc i trzy gwiazdy. Przez gminę płyną Cieszynka, Drawa i Płocicza, opisywane jako rzeki w części o charakterze górskim, mimo nizinnego położenia. Kilometr w dół biegu Cieszynki leży grodzisko słowiańskie z siódmego do dziewiątego wieku, a na jeziorze Załom — Wyspa Świętych Ptaków. Neogotycki ratusz pochodzi z przełomu dziewiętnastego i dwudziestego wieku i pierwotnie mieścił sąd, a szkołę wzniesiono w latach 1932–1933 według projektu Karla Volgera.",
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

  districtsHeading: "Do których części Człopy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość — gmina ma blisko trzysta pięćdziesiąt kilometrów kwadratowych, w większości leśnych, więc do najdalszych miejscowości też przyjadę.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Człopę też przyjadę",
  nearbyParagraphs: [
    "Wałcz jest siedzibą powiatu, a Tuczno i Mirosławiec leżą przy drodze wojewódzkiej sto siedemdziesiąt siedem. Do Drawna i Krzyża Wielkopolskiego też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Wałcz", "Tuczno", "Mirosławiec", "Drawno", "Krzyż Wielkopolski"],

  about: blokOMnie("do Człopy", "w Człopie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Człopy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie — a gmina jest duża i w większości leśna. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Człopę w powiecie wałeckim w województwie zachodniopomorskim — nie o Człuchów w pomorskiem ani o Czarnków w wielkopolskiem. Część źródeł zapisuje tę nazwę wariantowo jako „Czołpa”, więc przy umawianiu warto podać powiat.",
    },
    ...faqWspolne("w Człopie"),
    {
      question: "Skąd wiadomo, czy przepis naprawdę jest trudny?",
      answer:
        "Nie z etykiety przy nim. „Prosty”, „szybki”, „dla zaawansowanych” to kategorie i mówią mniej więcej tyle, co „rzeka nizinna” — coś o położeniu, nic o nurcie. Warto zamiast tego policzyć w przepisie momenty, w których da się coś nieodwracalnie popsuć. Zero takich momentów to danie łatwe, choćby miało dwadzieścia składników; jeden — danie wymagające uwagi, nawet przy czterech.",
    },
    {
      question: "Czy Thermomix ułatwia gotowanie komuś, kto się w tym nie czuje pewnie?",
      answer:
        "Nie zmienia trudności samego dania i nie usłyszycie ode mnie inaczej. Zmniejsza natomiast liczbę momentów, w których da się coś nieodwracalnie popsuć — temperatura i mieszanie są ustawione z góry, a nie pilnowane w biegu. Dla kogoś, kto zwykle gotuje w pośpiechu i przy okazji czegoś innego, to jest ta jedna rzecz, która robi realną różnicę.",
    },
  ],

  geo: { lat: 53.0885, lng: 16.1211 },
};
