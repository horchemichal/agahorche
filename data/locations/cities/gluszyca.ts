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
 * GŁUSZYCA — powiat wałbrzyski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 882 mieszkańców (GUS 31.12.2024), 16,2 km²,
 *   gęstość 362,9 os./km² [ZW, domyka się: 5 882 / 16,2
 *   = 363,1]. PODAJĘ.
 * CAŁA GMINA: 8 011 osób, 62,2 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 8 011 / 62,2 = 128,8,
 *   a serwis podaje 131. NIE DOMYKA SIĘ.
 *   ⚠ Miasto skupia 73,4 % ludności gminy na 26,0 % jej
 *   powierzchni [przeliczenie własne z GUS]. PODAJĘ,
 *   ale ⚠⚠ NIE ROBIĘ Z TEGO KĄTA — ta sama figura
 *   („mało ziemi, dużo ludzi") wypada w Pieńsku
 *   W TEJ SAMEJ FALI.
 *   ⚠⚠⚠ LICZBY SOŁECTW NIE PODAJĘ JAKO URZĘDOWEJ.
 *   Wykaz GUS wymienia pięć wsi: Grzmiąca, Głuszyca
 *   Górna, Kolce, Sierpnica, Łomnica — i TAK TO PISZĘ
 *   („wymieniane w wykazie GUS"), a nie „pięć sołectw".
 *   Źródła historyczne wspominają jeszcze Rybnicę Małą,
 *   Zimną Wodę i Nową Głuszycę.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 50,683 / 16,367.
 *
 * ⚠ ODMIANA — REGULARNA, rzeczownik żeński na -yca:
 *   D. do Głuszycy · Ms. w Głuszycy · B. Głuszycę.
 *   Przymiotnik: GŁUSZYCKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠⚠ PUŁAPKA WEWNĘTRZNA — NAJWAŻNIEJSZA W TYM PLIKU:
 *   GŁUSZYCA GÓRNA TO OSOBNA WIEŚ W GMINIE, NIE CZĘŚĆ
 *   MIASTA. ⚠⚠⚠ WIADUKT I STACJA KOLEJOWA LEŻĄ
 *   W GŁUSZYCY GÓRNEJ. NIGDY nie piszę „wiadukt
 *   w Głuszycy" ani „głuszycki wiadukt" — ZAWSZE
 *   „w Głuszycy Górnej, wsi w tej samej gminie".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — GŁUBCZYCE (opolskie, miasto powiatowe) — bardzo
 *     podobne brzmienie i długość. GŁÓWNA KOLIZJA.
 *   — GŁUSZYNA — dzielnica Poznania oraz wieś w opolskiem.
 *   — GŁUSZYNO — wieś w pomorskiem.
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠⚠⚠ NIE PISZĘ, ŻE „GŁUSZYCA TO SAMICA GŁUSZCA" —
 *   TO NIEPRAWDA (samica głuszca to głuszka).
 *   ⚠⚠ NIE TWIERDZĘ, że polska nazwa jest tłumaczeniem
 *   niemieckiej — [NP], mimo kuszącej zbieżności sensu.
 *   NAZW NIEMIECKICH NIE WYMIENIAM W OGÓLE.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — POCZĄTKI OSADY: XIII/XIV WIEK [ZW dla okresu].
 *   — 1413 — pierwsza data z nazwiskiem: CHRISTIAN
 *     HOFMANN stawia młyn wodny w widłach Bystrzycy
 *     i Złotej Wody. ⚠⚠ NIE PISZĘ „pierwsza wzmianka
 *     1413" — źródła się różnią. PISZĘ, CZYM TA DATA
 *     JEST.
 *   — PRAWA MIEJSKIE: 7 LIPCA 1962 r. [ZW, data dzienna].
 *   ⚠⚠ RÓŻNICY (ok. 550–650 lat) NIE ROBIĘ KĄTEM.
 *   ⚠⚠ POWODU NADANIA PRAW (przekroczenie 6 000
 *   mieszkańców, 3 000 zatrudnionych we włókiennictwie)
 *   NIE PODAJĘ — jedno źródło, a wątek prowadzi wprost
 *   do upadku przemysłu. WYKLUCZONE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WIADUKT W DWÓCH POŁOWACH:
 *   Most kolejowy nad doliną Otłuczyny w GŁUSZYCY GÓRNEJ,
 *   linia nr 286.
 *   — 1880: 15 m wysokości, 149 m długości, TRZY
 *     PIASKOWCOWE FILARY, JEDEN TOR,
 *   — 1906–1910: dobudowa DRUGIEGO TORU, z przęsłami
 *     o PARABOLICZNYCH PASACH DOLNYCH — INNA KONSTRUKCJA
 *     niż pierwsza połowa.
 *   ⚠⚠⚠ JEDEN MOST, DWIE POŁOWY ZBUDOWANE W ODSTĘPIE
 *   26–30 LAT I WYGLĄDAJĄCE INACZEJ. OBIE NIOSĄ.
 *   To jest cały kąt.
 *   ⚠⚠⚠ MORAŁ BUDUJĘ WYŁĄCZNIE NA TYM, ŻE JEDNOLITY
 *   WYGLĄD NIE JEST WARUNKIEM DZIAŁANIA. NIE na tym,
 *   że coś dobudowano po latach (Syców), i NIE na tym,
 *   że rezerwa ma być inna od podstawy (Chocianów).
 *   ⚠⚠ NIE TWIERDZĘ, że fundamenty z 1880 r. przygotowano
 *   pod drugi tor — źródło tego nie mówi.
 *   ⚠ [SP] — jedno źródło. PISZĘ „według opracowania
 *   krajoznawczego" przy szczegółach konstrukcyjnych.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — STACJA GŁUSZYCA GÓRNA: uruchomiona 1880 r.
 *   na wysokości 496 m n.p.m.; budynek dworca powstał
 *   dopiero w latach 1902–1913.
 *   ⚠⚠ „FUNKCJA DZIAŁAŁA PRZED BUDYNKIEM" JAKO KĄT —
 *   NIE UŻYWAM: ociera się o „najpierw droga, potem
 *   ruch" (Pieńsk, TA SAMA FALA). PODAJĘ JAKO FAKT.
 * — WŁÓKIENNICTWO: 1768 — wykańczalnia płótna
 *   zatrudniająca 200 robotników [ZW]; 1840 — 40
 *   rzemieślników [ZW]; 1852 — pierwsza tkalnia
 *   mechaniczna [ZW]; 1880 — kolej [ZW].
 *   ⚠⚠⚠ LICZB „200" I „40" NIE ZESTAWIAM. To zatrudnieni
 *   w przedsiębiorstwie kontra samodzielni rzemieślnicy —
 *   DWIE RÓŻNE KATEGORIE. Zestawienie sugerowałoby
 *   spadek, którego nie ma. ⚠⚠ Figura „dwie liczby
 *   mierzące co innego" JEST ZAJĘTA (Twardogóra) —
 *   podwójny powód, żeby tego nie robić.
 *   ⚠⚠⚠ PODAJĘ TYLKO 1768 I 1852. Liczby 40 z 1840 r.
 *   NIE PODAJĘ W OGÓLE — bez niej nie ma czego zestawić.
 * — ZAMEK ROGOWIEC: w gminie Głuszyca, 870 m n.p.m.
 *   ⚠⚠ SUPERLATYWU „najwyżej położony zamek w Polsce"
 *   NIE POWTARZAM — nieweryfikowany. PODAJĘ WYSOKOŚĆ.
 * — STAWY: w gminie kompleks pięciu stawów rozmieszczonych
 *   kaskadowo [SP — jedno źródło]. PODAJĘ Z „według
 *   opracowania krajoznawczego".
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. ANI JEDNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: NIE MUSI WYGLĄDAĆ JEDNOLICIE, ŻEBY DZIAŁAĆ
 * — o tym, że zgodność wyglądu nie jest warunkiem
 * działania. Kąt od mostu nad Otłuczyną: jedna połowa
 * z 1880 roku, druga z lat 1906–1910, inna konstrukcja,
 * inny wygląd — i od stu lat obie niosą pociągi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że most kolejowy w Głuszycy Górnej powstał w 1880 r.:
 *   piętnaście metrów wysokości, sto czterdzieści dziewięć
 *   długości, trzy piaskowcowe filary — pod jeden tor,
 * — że drugi tor dobudowano w latach 1906–1910, z przęsłami
 *   o innej konstrukcji, więc jedna połowa mostu
 *   po prostu wygląda inaczej niż druga. I OBIE NIOSĄ.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE KUCHNIE SKŁADAMY PRZEZ LATA I DOKŁADNIE TAK
 *   WYGLĄDAJĄ: garnki z trzech kompletów, deski
 *   z czterech okazji, jedna szafka po babci,
 * — ⚠⚠ ŻE PRESJA NA UJEDNOLICENIE TEGO JEST OGROMNA
 *   i kosztuje realne pieniądze, a nie zmienia niczego
 *   w tym, jak się gotuje,
 * — ⚠⚠ ŻE JEDYNE, CO NAPRAWDĘ MA BYĆ ZGODNE, TO WYMIARY
 *   STYKAJĄCYCH SIĘ RZECZY: czy pokrywka pasuje,
 *   czy naczynie wchodzi na półkę, czy deska mieści się
 *   w zlewie. Reszta to wygląd,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim wymienisz coś, co działa,
 *   sprawdź, czy przeszkadza Ci jego DZIAŁANIE, czy jego
 *   WYGLĄD. To dwa różne powody i tylko jeden z nich jest
 *   pilny,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: wygląd kuchni ma znaczenie
 *   i nie będę udawać, że nie ma. Chodzi tylko o to,
 *   żeby nazwać powód po imieniu — „bo brzydkie" jest
 *   uczciwym powodem, „bo nie działa" bywa wymówką,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PADAĆ WPROST:
 *   Thermomix NIE ujednolici kuchni. To kolejny przedmiot,
 *   który nie będzie pasował do reszty, i to nie jest
 *   argument ani za, ani przeciw. Kupuje się go dla tego,
 *   co robi, nie dla tego, jak wygląda blat.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tamten tekst mówi, że REZERWA
 *   MA SIĘ RÓŻNIĆ OD PODSTAWY, bo inaczej zawiedzie razem
 *   z nią; ten mówi, że RÓŻNY WYGLĄD NIE JEST WADĄ.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE W TEKŚCIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców). Drugi tor ociera się o to wprost.
 *   MORAŁ NIE MOŻE DOTYCZYĆ DOKŁADANIA.
 * — ⚠⚠⚠ ZERO DWÓCH LICZB MIERZĄCYCH CO INNEGO — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠ ZERO CIENKIE, ALE PIERWSZE — kąt zajęty (Kąty
 *   Wrocławskie).
 * — ⚠⚠ ZERO EGZEMPLARZA KONTRA KATEGORII — kąt zajęty
 *   (Polanica-Zdrój).
 * — ⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH ZALECEŃ ZAKUPOWYCH — nie mówię,
 *   co kupić ani czego nie. Podaję WYŁĄCZNIE pytanie
 *   rozstrzygające: działanie czy wygląd.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠⚠ ZERO PODZIEMI GÓR SOWICH I KOMPLEKSU RIESE.
 *   CAŁKOWICIE. To najgłośniejszy temat gminy i nie jest
 *   nasz: praca przymusowa, wojna. TO SAMO ZASTOSOWANO
 *   W PIESZYCACH.
 * — ⚠⚠⚠ ZERO NAJAZDÓW HUSYCKICH (1428) I JAKICHKOLWIEK
 *   DZIAŁAŃ ZBROJNYCH.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO UPADKU PRZEMYSŁU LEKKIEGO, BEZROBOCIA
 *   I WYLUDNIENIA.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO (kościoły w Sierpnicy
 *   i Grzmiącej — pomijam mimo pewnych dat).
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ liczby sołectw jako urzędowej.
 * — NIE PRZYPISUJĘ MIASTU wiaduktu ani stacji — leżą
 *   w Głuszycy Górnej, osobnej wsi w gminie.
 * — NIE TWIERDZĘ, że fundamenty z 1880 r. przygotowano
 *   pod drugi tor.
 * — NIE PODAJĘ liczby rzemieślników z 1840 r. — nie ma
 *   jej z czym uczciwie zestawić.
 * — NIE POWTARZAM superlatywu o zamku Rogowiec.
 * — NIE PISZĘ, że nazwa miasta ma coś wspólnego
 *   z głuszcem ani że jest tłumaczeniem.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Głuszyca leży w powiecie wałbrzyskim; miasto liczy
 *   5 882 mieszkańców (GUS, 31.12.2024) na 16,2 km²,
 *   czyli 363 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 8 011 osób na 62,2 km²; wykaz GUS
 *   wymienia w niej pięć wsi: Grzmiącą, Głuszycę Górną,
 *   Kolce, Sierpnicę i Łomnicę; w mieście mieszka 73 %
 *   ludności gminy na 26 % jej powierzchni,
 * — początki osady sięgają przełomu XIII i XIV w.,
 *   a z 1413 r. pochodzi pierwsza zapisana z nazwiskiem
 *   data: Christian Hofmann postawił wtedy młyn wodny
 *   w widłach Bystrzycy i Złotej Wody; prawa miejskie
 *   nadano 7 lipca 1962 r.,
 * — most kolejowy nad doliną Otłuczyny w Głuszycy Górnej
 *   zbudowano w 1880 r.: 15 m wysokości, 149 m długości,
 *   trzy piaskowcowe filary, jeden tor; drugi tor
 *   dobudowano w latach 1906–1910, z przęsłami o innej
 *   konstrukcji,
 * — stację Głuszyca Górna uruchomiono w 1880 r.
 *   na wysokości 496 m n.p.m., a budynek dworca powstał
 *   dopiero w latach 1902–1913,
 * — w 1768 r. działała tu wykańczalnia płótna
 *   zatrudniająca 200 robotników, a w 1852 r. uruchomiono
 *   pierwszą tkalnię mechaniczną,
 * — w gminie leży zamek Rogowiec na wysokości
 *   870 m n.p.m. oraz kompleks pięciu stawów
 *   rozmieszczonych kaskadowo.
 */
export const GLUSZYCA: CityContent = {
  slug: "gluszyca",
  h1: "Thermomix Głuszyca – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Głuszyca — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Głuszycy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Głuszyca — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Głuszycy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Głuszycy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Głuszyca"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedna połowa z 1880, druga z 1908. Obie niosą.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Głuszycy – jak wygląda prezentacja?",
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
      id: "nie-musi-wygladac-jednolicie",
      heading: "Nie musi wyglądać jednolicie, żeby działać",
      paragraphs: [
        "W Głuszycy Górnej — to wieś w tej samej gminie, nie część miasta — stoi most kolejowy nad doliną Otłuczyny. Zbudowano go w 1880 roku: piętnaście metrów wysokości, sto czterdzieści dziewięć metrów długości, trzy piaskowcowe filary. Pod jeden tor.",
        "Drugi tor dobudowano dopiero w latach 1906–1910. Według opracowania krajoznawczego jego przęsła mają inną konstrukcję niż te z pierwszej połowy.",
        "Czyli: jeden most, dwie połowy, robione w odstępie blisko trzydziestu lat, wyglądające inaczej. I od ponad stu lat obie niosą pociągi.",
        "Kuchnie składamy dokładnie tak samo i dokładnie tak wyglądają.",
        "Garnki z trzech różnych kompletów. Deski z czterech okazji. Jedna szafka po babci, która nie pasuje do niczego. Sztućce, w których połowa jest z jednego wzoru, a reszta dobrana przez lata.",
        "Presja, żeby to ujednolicić, jest ogromna i kosztuje realne pieniądze. A w tym, jak się gotuje, nie zmienia nic.",
        "Jedyne, co naprawdę musi do siebie pasować, to wymiary rzeczy, które się stykają. Czy pokrywka siedzi na garnku. Czy naczynie wchodzi na półkę. Czy deska mieści się w zlewie. Czy blacha wjeżdża do piekarnika. Cała reszta to wygląd.",
        "Ruch jest jeden i sprowadza się do pytania. Zanim wymienisz coś, co działa, sprawdź, czy przeszkadza Ci jego działanie, czy jego wygląd. To dwa różne powody i tylko jeden z nich jest pilny.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, żeby rzecz zapasowa różniła się od podstawowej. To zupełnie inna sprawa. Tu chodzi wyłącznie o to, że różny wygląd sam w sobie nie jest wadą.",
        "Uczciwie o drugiej stronie: wygląd kuchni ma znaczenie i nie będę udawać, że nie ma. Chodzi tylko o nazwanie powodu po imieniu. „Bo brzydkie” jest uczciwym powodem i można na nim oprzeć decyzję. „Bo nie działa” bywa wymówką, którą sobie podkładamy, żeby ten pierwszy powód brzmiał poważniej.",
        "I uczciwie o sprzęcie, bo to akurat działa przeciwko mnie. Thermomix nie ujednolici Wam kuchni. To kolejny przedmiot, który nie będzie pasował do reszty — duży, biały, stojący na blacie. Kupuje się go dla tego, co robi, a nie dla tego, jak wygląda blat. Jeśli ktoś sprzedaje Wam go jako element wystroju, to sprzedaje coś innego, niż to jest.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Głuszycy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile wolnego blatu realnie macie w kuchni. To jedyny wymiar, który przy tym urządzeniu naprawdę trzeba sprawdzić wcześniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Głuszycy"),
    sekcjaRaty("w Głuszycy"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Głuszycy",
      paragraphs: [
        "Głuszyca leży w powiecie wałbrzyskim. Samo miasto liczy 5 882 mieszkańców (GUS, 31.12.2024) na szesnastu kilometrach kwadratowych z okładem, czyli trzysta sześćdziesiąt trzy osoby na kilometr, a cała gmina miejsko-wiejska 8 011 osób na sześćdziesięciu dwóch. Wykaz GUS wymienia w gminie pięć wsi: Grzmiącą, Głuszycę Górną, Kolce, Sierpnicę i Łomnicę — piszę „wymienia”, bo źródła historyczne dorzucają jeszcze kilka osad i urzędowej liczby sołectw nie podaję. W samym mieście mieszka siedemdziesiąt trzy procent ludności gminy na dwudziestu sześciu procentach jej powierzchni. Początki osady sięgają przełomu trzynastego i czternastego wieku, a z 1413 roku pochodzi pierwsza data zapisana z nazwiskiem: Christian Hofmann postawił wtedy młyn wodny w widłach Bystrzycy i Złotej Wody. Prawa miejskie nadano 7 lipca 1962 roku. Most kolejowy nad doliną Otłuczyny w Głuszycy Górnej zbudowano w 1880 roku — piętnaście metrów wysokości, sto czterdzieści dziewięć długości, trzy piaskowcowe filary pod jeden tor; drugi tor dobudowano w latach 1906–1910, z przęsłami o innej konstrukcji. Stację Głuszyca Górna uruchomiono również w 1880 roku, na wysokości czterystu dziewięćdziesięciu sześciu metrów nad poziomem morza, a budynek dworca postawiono dopiero w latach 1902–1913. W 1768 działała tu wykańczalnia płótna zatrudniająca dwustu robotników, a w 1852 uruchomiono pierwszą tkalnię mechaniczną. W gminie leży zamek Rogowiec na wysokości ośmiuset siedemdziesięciu metrów oraz — według opracowania krajoznawczego — kompleks pięciu stawów rozmieszczonych kaskadowo.",
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

  districtsHeading: "Do których części Głuszycy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Grzmiącej, Głuszycy Górnej, Kolców, Sierpnicy i Łomnicy. Wszędzie bez dopłaty.",
    "Przy umawianiu warto powiedzieć wyraźnie, czy chodzi o Głuszycę, czy o Głuszycę Górną — to dwie różne miejscowości w jednej gminie i mylą się regularnie.",
  ],
  districts: [],

  nearbyHeading: "Poza Głuszycę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Wałbrzycha, Nowej Rudy, Świdnicy, Boguszowa-Gorc i Kłodzka — wszędzie bezpłatnie, tak samo jak w samej Głuszycy.",
  ],
  nearbyTowns: ["Wałbrzych", "Nowa Ruda", "Świdnica", "Boguszów-Gorce", "Kłodzko"],

  about: blokOMnie("do Głuszycy", "w Głuszycy i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Głuszycy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie — Grzmiącej, Głuszycy Górnej, Kolców, Sierpnicy i Łomnicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: Głuszyca Górna to osobna wieś, nie część miasta, więc warto powiedzieć, o którą chodzi. I uwaga na podobne nazwy — Głubczyce leżą w województwie opolskim, a Głuszyna to dzielnica Poznania i osobna wieś w opolskiem.",
    },
    ...faqWspolne("w Głuszycy"),
    {
      question: "Mam kuchnię poskładaną z różnych rzeczy i nic do siebie nie pasuje. Warto to ujednolicić?",
      answer:
        "Zależy, co Ci przeszkadza. Most kolejowy w Głuszycy Górnej ma jedną połowę z 1880 roku i drugą z lat 1906–1910, o innej konstrukcji — wygląda niejednolicie i od ponad stu lat obie połowy niosą pociągi. W kuchni naprawdę musi pasować tylko to, co się styka: pokrywka do garnka, naczynie do półki, blacha do piekarnika. Reszta to wygląd. Przed wymianą czegoś, co działa, warto uczciwie sprawdzić, czy powodem jest działanie, czy wygląd — oba są dopuszczalne, ale to nie to samo.",
    },
    {
      question: "Czy Thermomix pasuje do każdej kuchni?",
      answer:
        "Do wystroju — nie i nie będę tego obiecywać. To duże, białe urządzenie stojące na blacie i do niczego nie będzie pasowało. Wymiarowo natomiast warto sprawdzić dwie rzeczy przed zakupem: czy jest wolny kawałek blatu, na którym może stać na stałe, i czy ma nad sobą dość miejsca, żeby otwierać pokrywę. Na prezentacji sprawdzimy to u Was przy okazji gotowania, bez mierzenia centymetrem.",
    },
  ],

  geo: { lat: 50.683, lng: 16.367 },
};
