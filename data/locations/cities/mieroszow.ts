import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * MIEROSZÓW — powiat wałbrzyski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 3 708 mieszkańców (GUS 31.12.2024), 10,3 km²,
 *   gęstość 359,7 os./km² [ZW — domyka się: 3 708 / 10,3
 *   = 360,0]. PODAJĘ.
 * CAŁA GMINA: 6 164 osoby, 76,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 6 164 / 76,0 = 81,1,
 *   a serwis podaje 83. NIE DOMYKA SIĘ.
 *   ⚠ OSIEM WSI [ZW, źródła zgodne co do listy]: Golińsk,
 *   Kowalowa, Nowe Siodło, Rybnica Leśna, Różana,
 *   Sokołowsko, Unisław Śląski, Łączna.
 *   ⚠⚠⚠ SOKOŁOWSKO WYMIENIAM WYŁĄCZNIE JAKO NAZWĘ WSI
 *   NA LIŚCIE. ANI SŁOWA O TYM, Z CZEGO JEST ZNANE —
 *   wątek uzdrowiskowy wykluczony w całym cyklu.
 *   ⚠ Miasto to 13,6 % powierzchni gminy i 60,2 % jej
 *   ludności. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 50,6659 / 16,1888.
 *
 * ⚠ ODMIANA — REGULARNA:
 *   D. do Mieroszowa · Ms. w MIEROSZOWIE · N. Mieroszowem.
 *   ⚠⚠ BŁĄD: „w Mieroszowiu". Celownika „Mieroszowowi"
 *   unikam przez przeformułowanie — brzmi niezręcznie.
 *   Przymiotnik: MIEROSZOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE: MIEROSZYN i MIERZESZYN (pomorskie),
 *   MIERONICE (świętokrzyskie), ⚠ MIROSZOWICE
 *   (dolnośląskie, okolice Lubina — kolizja wewnątrz
 *   województwa). ⚠ Nazwisko „Mieroszewski" zaśmieca
 *   wyszukiwanie. ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1326 r. [ZW wg serwisu gminy];
 *     NADAWCA NIEUSTALONY [NP].
 *   — ⚠⚠⚠ PIERWSZEJ WZMIANKI NIE PODAJĘ: trzy wersje
 *     w dwóch serwisach tej samej gminy (XII w. / 1350 /
 *     „lata 50. XIV w."). ⚠⚠ Co więcej, prawa miejskie
 *     (1326) są WCZEŚNIEJSZE niż najstarsza konkretnie
 *     datowana wzmianka (1350) — PISZĘ TO WPROST jako
 *     powód, dla którego daty nie podaję.
 *   ⚠ Sąsiednie wsie mają starsze daty niż miasto:
 *     Rybnica Leśna 1289, Różana 1389.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — RATUSZ, KTÓREGO NIE MA:
 *   — 1326 — prawa miejskie,
 *   — 1554 — wzniesiono ratusz DREWNIANY (228 lat
 *     po nadaniu praw),
 *   — ok. 1600 — ratusz MUROWANY,
 *   — 1649 — przystąpienie do ODBUDOWY,
 *   — 1880 — ROZBIÓRKA.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1554−1326 = 228 lat
 *   miasta bez ratusza; 1880−1554 = 326 lat z ratuszem
 *   (w trzech kolejnych wcieleniach); od 1880 r.
 *   do dziś ponad 140 lat znowu bez. RAZEM BEZ RATUSZA:
 *   ponad 370 lat, czyli WIĘCEJ NIŻ Z NIM.
 *   To jest cały kąt.
 *   ⚠⚠⚠ „X LAT BEZ STATUSU MIEJSKIEGO" — kąt ZAJĘTY
 *   (Szklarska Poręba). ⚠⚠ TU CHODZI O BUDYNEK, NIE
 *   O STATUS. Pilnować, żeby się nie zsunęło.
 *   ⚠⚠ PRZYCZYNY ROZBIÓRKI Z 1880 R. NIE PODAJĘ —
 *   nieustalona. NIE SPEKULUJĘ.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — RYNEK: 1791 — pierwsze lipy; 1797 — pierwsze
 *   wybrukowanie rynku; 1799 — wybrukowanie ulic.
 *   ⚠ Zieleń wyprzedziła bruk o sześć lat.
 *   ⚠⚠ PODAJĘ JAKO FAKT, BEZ MORAŁU — „najpierw droga,
 *   potem ruch" to kąt ZAJĘTY (Pieńsk).
 * — WIEŻA WIDOKOWA na Górze Parkowej: 16 m wysokości,
 *   na 561 m n.p.m., otwarta w 2015 r., drewniana,
 *   wstęp bezpłatny. Założenie parkowe na tym stoku
 *   powstało już w latach 30. XIX w.
 *   ⚠⚠ O BLIŹNIACZEJ WIEŻY W BOGUSZOWIE-GORCACH
 *   NIE WSPOMINAM — tamto miasto ma własną stronę.
 * — ⚠⚠ SPISÓW Z 1711 I 1817 R. NIE UŻYWAM — rozbicie
 *   na kategorie posiadania to kąt ZAJĘTY (Bierutów).
 * — ⚠⚠ KOŚCIOŁA I WIEŻY KOŚCIELNEJ NIE OPISUJĘ —
 *   wyznaniowe.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: DŁUŻEJ BEZ NIŻ Z
 * — o tym, że rzecz uznawana za niezbędną bywa nieobecna
 * przez większą część historii. Kąt od mieroszowskiego
 * ratusza: miasto istniało 228 lat, zanim go postawiło,
 * i istnieje od ponad stu czterdziestu bez niego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Mieroszów ma prawa miejskie od 1326 r., a ratusz
 *   postawił dopiero w 1554 — drewniany; około 1600
 *   zastąpił go murowanym, w 1649 przystąpił
 *   do odbudowy, a w 1880 rozebrał,
 * — ŻE BEZ RATUSZA MIASTO PRZEŻYŁO WIĘCEJ LAT NIŻ Z NIM:
 *   228 przed i ponad 140 po, wobec 326 z nim.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI MAMY RZECZY, KTÓRYCH BRAK ODCZUWAMY
 *   JAK AWARIĘ: zepsuty sprzęt, patelnia w zmywarce,
 *   zamknięty sklep, w którym kupuje się TO jedno,
 * — ⚠⚠ ŻE PRAWIE ZAWSZE RADZILIŚCIE SOBIE BEZ TEGO
 *   DŁUŻEJ, NIŻ Z TYM — i że warto to sobie przypomnieć,
 *   zanim się przestawi cały wieczór,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ZAJMUJE CHWILĘ: zanim uznasz,
 *   że bez czegoś się nie da, policz, od kiedy to masz.
 *   Zwykle wychodzi mniej lat, niż się wydaje,
 * — ⚠⚠⚠ UCZCIWIE, DRUGA STRONA — I TO MUSI PAŚĆ MOCNO:
 *   „radziłaś sobie wcześniej" jest jednocześnie
 *   NAJGORSZYM argumentem przeciwko kupowaniu czegokolwiek.
 *   „Radziłam sobie" bardzo często znaczy po prostu
 *   „robiłam to ciężej". Jedno i drugie jest prawdą
 *   i trzeba je rozdzielić,
 * — ⚠ UCZCIWIE O SPRZĘCIE: dotyczy to także mojego.
 *   MÓWIĘ WPROST, że wszyscy gotowali bez Thermomixa
 *   i dalej da się bez niego gotować. Pytanie nie brzmi,
 *   czy dacie radę bez — dacie. Brzmi: co zrobicie
 *   z czasem, który wróci.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO X LAT BEZ STATUSU MIEJSKIEGO — kąt zajęty
 *   (Szklarska Poręba). ⚠⚠ TO NAJBLIŻSZY OBSZAR:
 *   tam chodziło o STATUS, tu o BUDYNEK.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice).
 * — ⚠⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO OSIEMNASTU LAT MIESZKANIA, TRZECH LAT ROBOTY
 *   — kąt zajęty (Lądek-Zdrój).
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk). Dlatego lipy przed brukiem zostają faktem.
 * — ⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt zajęty
 *   (Bierutów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNEGO ZNIECHĘCANIA DO ZAKUPU ANI NAMAWIANIA —
 *   podaję OBIE strony i zostawiam decyzję. To jest
 *   granica uczciwości, nie retoryki.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO WĄTKU UZDROWISKOWEGO (Sokołowsko).
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WĄTKU GRANICZNEGO.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ daty pierwszej wzmianki — trzy wersje.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE PODAJĘ przyczyny rozbiórki ratusza.
 * — NIE PISZĘ, z czego znane jest Sokołowsko.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Mieroszów leży w powiecie wałbrzyskim; miasto liczy
 *   3 708 mieszkańców (GUS, 31.12.2024) na 10,3 km²,
 *   czyli 359,7 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 6 164 osoby na 76 km²,
 *   z ośmioma wsiami,
 * — prawa miejskie miasto otrzymało w 1326 r.,
 * — ratusz wzniesiono w 1554 r. jako drewniany, około
 *   1600 zastąpiono murowanym, w 1649 przystąpiono
 *   do odbudowy, a w 1880 rozebrano,
 * — w 1791 r. posadzono na rynku pierwsze lipy, w 1797
 *   rynek po raz pierwszy wybrukowano, a w 1799
 *   wybrukowano ulice,
 * — na Górze Parkowej, na wysokości 561 m n.p.m., stoi
 *   od 2015 r. drewniana wieża widokowa wysoka na 16 m;
 *   założenie parkowe na tym stoku powstało w latach 30.
 *   XIX w.,
 * — wsie Rybnica Leśna i Różana mają starsze daty
 *   niż samo miasto: 1289 i 1389.
 */
export const MIEROSZOW: CityContent = {
  slug: "mieroszow",
  h1: "Thermomix Mieroszów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mieroszów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Mieroszowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mieroszów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mieroszowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mieroszowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich ośmiu wsi w gminie.",

  highlights: highlightyStandardowe("Mieroszów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miasto bez ratusza przeżyło więcej lat niż z nim.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mieroszowie – jak wygląda prezentacja?",
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
      id: "dluzej-bez-niz-z",
      heading: "Dłużej bez niż z",
      paragraphs: [
        "Mieroszów ma prawa miejskie od 1326 roku. Ratusz postawił dopiero w 1554 — i był to ratusz drewniany.",
        "Około 1600 roku zastąpiono go murowanym. W 1649 przystąpiono do odbudowy. W 1880 rozebrano go całkiem i od tamtej pory miasto ratusza nie ma.",
        "Policzmy. Dwieście dwadzieścia osiem lat miasta bez ratusza na początku. Trzysta dwadzieścia sześć lat z ratuszem, w kolejnych wcieleniach. I ponad sto czterdzieści lat znowu bez.",
        "Razem bez ratusza wychodzi więcej niż z nim. Budynek, który w każdym mieście uchodzi za rzecz oczywistą, był tu przez większość historii nieobecny — i nikt tego nie odnotował jako kryzysu.",
        "Doprecyzuję od razu, bo to bliska, ale inna sprawa: nie chodzi o to, jak długo miejscowość czekała na prawa miejskie. Chodzi o budynek, nie o status.",
        "W kuchni mamy dokładnie takie rzeczy i ich brak odczuwamy jak awarię.",
        "Zepsuty sprzęt. Patelnia, która akurat stoi w zmywarce. Zamknięty sklep, w którym kupuje się to jedno. Blender oddany komuś i nieoddany z powrotem. W pierwszej chwili wygląda to na koniec wieczoru.",
        "Ruch jest jeden i zajmuje chwilę. Zanim uznasz, że bez czegoś się nie da, policz, od kiedy to masz. Zwykle wychodzi mniej lat, niż się wydaje — a przez cały czas przedtem obiady jakoś powstawały.",
        "I teraz rzecz, którą muszę powiedzieć uczciwie, choć osłabia wszystko powyżej.",
        "„Radziłam sobie wcześniej” jest jednocześnie najgorszym argumentem przeciwko kupowaniu czegokolwiek. Bo „radziłam sobie” bardzo często znaczy po prostu „robiłam to ciężej”. Ludzie prali też ręcznie i radzili sobie. Jedno i drugie jest prawdą i warto je trzymać osobno: brak czegoś nie jest katastrofą, ale to nie znaczy, że nie warto tego mieć.",
        "I uczciwie o moim sprzęcie, bo dotyczy go dokładnie to samo. Wszyscy gotowali bez Thermomixa i dalej da się bez niego gotować — nie będę udawać inaczej. Pytanie nie brzmi, czy dacie radę bez. Dacie. Brzmi: co zrobicie z czasem, który wróci, i czy to jest warte tych pieniędzy. Na to odpowiedzi nie znam za Was.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mieroszowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile czasu zajmuje Wam zwykle obiad w tygodniu. To liczba, o którą opieram wszystko, co mówię o sensie zakupu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mieroszowie"),
    sekcjaRaty("w Mieroszowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Mieroszowa",
      paragraphs: [
        "Mieroszów leży w powiecie wałbrzyskim. Samo miasto liczy 3 708 mieszkańców (GUS, 31.12.2024) na dziesięciu i trzech dziesiątych kilometra kwadratowego, czyli blisko trzysta sześćdziesiąt osób na kilometr, a cała gmina miejsko-wiejska 6 164 osoby na siedemdziesięciu sześciu. Do gminy należy osiem wsi: Golińsk, Kowalowa, Nowe Siodło, Rybnica Leśna, Różana, Sokołowsko, Unisław Śląski i Łączna. W mieście mieszka sześćdziesiąt procent ludności gminy na niecałych czternastu procentach jej powierzchni. Prawa miejskie miasto otrzymało w 1326 roku. Daty pierwszej wzmianki nie podaję i powiem dlaczego: dwa serwisy tej samej gminy dają trzy różne wersje, a do tego najstarsza konkretnie datowana wzmianka o mieście pochodzi z 1350 roku — czyli z czasu późniejszego niż nadanie praw miejskich. Ciekawostka: dwie wsie w tej gminie mają starsze poświadczone daty niż samo miasto, Rybnica Leśna 1289, a Różana 1389. Ratusz wzniesiono w 1554 roku jako drewniany, około 1600 zastąpiono go murowanym, w 1649 przystąpiono do odbudowy, a w 1880 rozebrano. W 1791 roku posadzono na rynku pierwsze lipy, a rynek po raz pierwszy wybrukowano dopiero sześć lat później, w 1797; ulice doczekały się nawierzchni w 1799. Na Górze Parkowej, na wysokości pięciuset sześćdziesięciu jeden metrów nad poziomem morza, stoi od 2015 roku drewniana wieża widokowa wysoka na szesnaście metrów — przy czym samo założenie parkowe na tym stoku urządzano już w latach trzydziestych dziewiętnastego wieku.",
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

  districtsHeading: "Do których części Mieroszowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich ośmiu wsi w gminie: Golińska, Kowalowej, Nowego Siodła, Rybnicy Leśnej, Różanej, Sokołowska, Unisławia Śląskiego i Łącznej. Wszędzie bez dopłaty.",
    "Gmina ma siedemdziesiąt sześć kilometrów kwadratowych i jest rozrzucona po dolinach, więc przy umawianiu warto podać nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Mieroszów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wałbrzycha, Kamiennej Góry, Boguszowa-Gorc, Głuszycy i Jedliny-Zdroju — wszędzie bezpłatnie, tak samo jak w samym Mieroszowie.",
  ],
  nearbyTowns: ["Wałbrzych", "Kamienna Góra", "Boguszów-Gorce", "Głuszyca", "Jedlina-Zdrój"],

  about: blokOMnie("do Mieroszowa", "w Mieroszowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mieroszowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich ośmiu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga nazewnicza: mówi się „w Mieroszowie”, a nie „w Mieroszowiu”. I uwaga na podobne nazwy — Miroszowice leżą w tym samym województwie, w okolicach Lubina, a Mieroszyn i Mierzeszyn w pomorskiem.",
    },
    ...faqWspolne("w Mieroszowie"),
    {
      question: "Zepsuł mi się sprzęt kuchenny i mam wrażenie, że bez niego nie da się ugotować obiadu. Co z tym zrobić?",
      answer:
        "Policzyć, od kiedy go macie. Mieroszów ma prawa miejskie od 1326 roku, ratusz postawił w 1554, a rozebrał w 1880 — razem bez ratusza przeżył więcej lat niż z nim, i nikt tego nie odnotował jako kryzysu. W kuchni jest podobnie: rzecz, bez której „się nie da”, zwykle pojawiła się później, niż się wydaje. Zastrzeżenie, i uczciwe: „radziłam sobie wcześniej” bardzo często znaczy „robiłam to ciężej”. Brak czegoś nie jest katastrofą, ale to nie to samo co argument, że nie warto tego mieć.",
    },
    {
      question: "Czy bez Thermomixa da się gotować tak samo dobrze?",
      answer:
        "Da się i nie będę udawać inaczej — wszyscy przez lata gotowali bez niego. Pytanie nie brzmi, czy dacie radę bez, tylko co zrobicie z czasem, który wróci, i czy to jest warte tych pieniędzy. Na to nie odpowiem za Was i nie próbuję. Dlatego przy umawianiu pytam, ile czasu zajmuje Wam zwykle obiad w tygodniu — bo od tego, a nie od funkcji urządzenia, zależy cała odpowiedź.",
    },
  ],

  geo: { lat: 50.6659, lng: 16.1888 },
};
