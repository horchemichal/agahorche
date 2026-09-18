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
 * LEŚNA — powiat lubański, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Leśna — kontrola listy gmin powiatu
 *   lubańskiego przeprowadzona: cztery miasta (Leśna,
 *   Lubań, Olszyna, Świeradów-Zdrój) i pięć gmin
 *   „pozostałych", wśród nich Leśna jako miejsko-wiejska.
 *   ⚠⚠ TA SAMA PUŁAPKA KUBEŁKA co przy Żarowie
 *   i Jaworzynie Śląskiej. NIE ISTNIEJE.
 * MIASTO: 3 965 mieszkańców (GUS 31.12.2024),
 *   gęstość 463,2 os./km².
 *   ⚠⚠ POWIERZCHNIĘ PODAJĘ JAKO 8,56 km², NIE 8,6 —
 *   3 965 / 8,6 = 461,0, a serwis podaje 463,2.
 * CAŁA GMINA: 9 214 osób, 104,6 km², 19 WSI — NIE 20.
 *   ⚠⚠ Serwis zapowiada „20 miejscowości", ale dwudziestą
 *   pozycją jest samo miasto. NIE CYTUJĘ „20 wsi".
 *   Wsie: Bartoszówka, Grabiszyce Dolne, Grabiszyce Górne,
 *   Grabiszyce Średnie, Janówka, Jurków, Kościelniki Górne,
 *   Kościelniki Średnie, Miłoszów, Pobiedna, Smolnik,
 *   Stankowice, Sucha, Szyszkowa, Wolimierz, Zacisze,
 *   Złotniki Lubańskie, Złoty Potok, Świecie.
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 9 214 / 104,6 = 88,1,
 *   a serwis podaje 90. NIE DOMYKA SIĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,0242 / 15,2641.
 *
 * ⚠⚠⚠ PUŁAPKA JĘZYKOWA NAJWYŻSZEJ WAGI W CAŁYM CYKLU:
 *   „LEŚNA" TO JEDNOCZEŚNIE NAZWA MIASTA I NAJZWYKLEJSZY
 *   POLSKI PRZYMIOTNIK w rodzaju żeńskim: droga leśna,
 *   ścieżka leśna, polana leśna, gospodarka leśna.
 *   Różnica w zapisie to wyłącznie wielka litera.
 *   ⚠⚠⚠ W TEKŚCIE O KUCHNI NAJGROŹNIEJSZE SĄ: grzyby
 *   leśne, owoce leśne, runo leśne, miód leśny, zwierzyna
 *   leśna — czyli dokładnie ten zasób słów, który sam
 *   przyszedłby do głowy przy miasteczku pod lasem.
 *   ⚠⚠⚠ W CAŁYM TEKŚCIE NIE UŻYWAM PRZYMIOTNIKA
 *   „LEŚNY / LEŚNA / LEŚNE" W ZNACZENIU POSPOLITYM.
 *   Zamiast „owoce leśne" piszę „jagody i maliny",
 *   zamiast „grzyby leśne" — po prostu „grzyby".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠⚠ NIE ZACZYNAM ZDAŃ OD NAZWY MIASTA — wielka litera
 *   na początku zdania znosi rozróżnienie całkowicie.
 *   ⚠⚠ W PRZYPADKACH ZALEŻNYCH KOLIZJA SŁABNIE („Leśnej")
 *   — KONSTRUUJĘ ZDANIA TAK, ŻEBY NAZWA PADAŁA
 *   W PRZYPADKU ZALEŻNYM.
 *
 * ⚠⚠ ODMIANA — PRZYMIOTNIKOWA, RODZAJ ŻEŃSKI:
 *   D. Leśnej (do Leśnej) · Ms. w Leśnej · B. Leśną
 *   ⭐ PRZYMIOTNIK: LEŚNIAŃSKI — POTWIERDZONY [ZW],
 *   źródło własne gminy. NIE „leśny" — ta forma jest
 *   zajęta przez przymiotnik pospolity.
 *   ⭐ MIESZKAŃCY: LEŚNIANIE — POTWIERDZENI [ZW].
 *   ⚠⚠ TO JEDYNE DWIE FORMY ZWERYFIKOWANE W CAŁEJ FALI —
 *   przy pozostałych czterech miastach nie używam
 *   ani przymiotnika, ani nazwy mieszkańca.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠ LEŚNICA — miasto w opolskim ORAZ osiedle
 *     Wrocławia (to samo województwo). Podwójna kolizja.
 *   — Leśno (pomorskie), Leśna Podlaska (lubelskie),
 *     liczne wsie o nazwie Leśna.
 *   — ⚠⚠ W SAMEJ GMINIE: TRZY GRABISZYCE (Dolne, Średnie,
 *     Górne) i DWA KOŚCIELNIKI (Górne, Średnie —
 *     bez Dolnych!). Przy cytowaniu nazwy wsi ZAWSZE
 *     podaję człon kierunkowy.
 *   — Złotniki Lubańskie (wieś w gminie) kontra Złoty
 *     Potok (inna wieś tej samej gminy).
 *   ⚠⚠ „ŚREDNIE BEZ DOLNYCH" JAKO KĄT — NIE UŻYWAM:
 *   nazwa względna i jej rozjeżdżanie się ociera się
 *   o etykiety (Oborniki Śląskie) i o jedną nazwę
 *   obejmującą kilka miejsc (Szczytna, ta sama fala).
 *   PODAJĘ JAKO FAKT.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ PRAWA MIEJSKIE I PIERWSZA WZMIANKA — ROZDZIELONE:
 *   PIERWSZA WZMIANKA: 1144 r.
 *   PRAWA MIEJSKIE: 1329 r., nadał książę HENRYK I
 *   JAWORSKI. Odstęp 185 lat.
 *   ⚠⚠⚠ SERWIS polskawliczbach WPISUJE 1144 DO RUBRYKI
 *   „rok nadania praw miejskich" — TO BŁĄD ŹRÓDŁA.
 *   1144 to pierwsza wzmianka. NIE POWTARZAM TEGO BŁĘDU.
 *   ⚠⚠⚠ PRZYWRÓCENIA PRAW MIEJSKICH W 1962 R. NIE
 *   WYMIENIAM — kontekst odebrania jest powojenny.
 *   TWARDA GRANICA.
 *   ⚠ RATUSZ: zbudowany 1699, remontowany 1779, kolejna
 *   przebudowa w połowie XIX w. [NP — jedno źródło].
 *   ⚠⚠ KOŚCIOŁÓW I PŁYT NAGROBNYCH NIE OPISUJĘ —
 *   wyznaniowe i pogrzebowe.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — SZEŚĆ TURBIN, DWA ZAKRESY:
 *   Elektrownia wodna uruchomiona w 1907 r. (trzy
 *   turbozespoły; kolejne dwa w 1908) ma SZEŚĆ TURBIN
 *   FRANCISA: PIĘĆ PO 526 kW I JEDNĄ PO 30 kW —
 *   SIEDEMNAŚCIE I PÓŁ RAZA SŁABSZĄ.
 *   ⚠⚠⚠ MAŁA NIE JEST ZAPASEM DUŻYCH. JEST OSOBNYM
 *   URZĄDZENIEM DO MAŁEJ WODY:
 *   pracuje przy przepływie 0,15 m³/s, gdy duże wymagają
 *   2,75 m³/s każda, i kręci się 1 000 obrotów na minutę
 *   zamiast 375. Spad wspólny: 26 m.
 *   Moc łączna: około 2,66 MW. To jest cały kąt.
 *   ⚠⚠ [SP] moc i liczba turbin: operator podaje
 *   5 × 526 kW + 1 × 30 kW i ok. 2 660 kW; źródło
 *   turystyczne 2,78 MW i cztery po 515 kW.
 *   PODAJĘ DANE OPERATORA.
 *   ⚠⚠⚠ NAZWY PRODUCENTA TURBIN NIE PODAJĘ —
 *   ZERO NAZW FIRM I MAREK.
 *
 * ZAPORY — FAKTY (podaję WYŁĄCZNIE parametry techniczne):
 * — ZAPORA W LEŚNEJ: budowa od września 1901, oddana
 *   we wrześniu 1905; kamienno-betonowa, grawitacyjna;
 *   WYSOKOŚĆ 45 m, DŁUGOŚĆ W KORONIE 130 m, SZEROKOŚĆ
 *   W PODSTAWIE 38 m, W KORONIE 8 m; zbiornik 15 mln m³,
 *   lustro wody 140 ha, długość 6 km; km 89+750 Kwisy.
 * — ZAPORA ZŁOTNIKI (przy wsi Złotniki Lubańskie, w tej
 *   samej gminie): elektrownia uruchomiona 20 listopada
 *   1924; WYSOKOŚĆ 36 m, DŁUGOŚĆ W KORONIE 168 m;
 *   zbiornik 10,5 mln m³, lustro ok. 120 ha, długość 9 km;
 *   trzy turbozespoły: 2 105 + 1 582 + 736 kW;
 *   km 95+540 Kwisy.
 * — ⚠ ODLEGŁOŚĆ MIĘDZY ZAPORAMI WZDŁUŻ RZEKI: 5,79 km.
 *   TO MÓJ RACHUNEK z kilometrażu — PODAJĘ OPISOWO
 *   („niecałe sześć kilometrów biegu rzeki").
 * — ⚠⚠ ZESTAWIENIA „WYŻSZA JEST KRÓTSZA" JAKO KĄTA
 *   NIE UŻYWAM — „odwrotne proporcje wskazują na miejsce,
 *   nie na rzecz" ociera się o średnią kontra maksimum
 *   (Węgorzyno) i o sumę kontra ciągłość (Siechnice).
 *   PODAJĘ OBIE ZAPORY JAKO ZESTAW LICZB.
 * — ⚠⚠⚠ O ZAPORACH PISZĘ WYŁĄCZNIE PARAMETRAMI
 *   I DATAMI. ZERO POWODZI, ZERO ROLI PRZECIWPOWODZIOWEJ,
 *   ZERO ZAGROŻENIA. TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ MATERIAŁÓW BUDOWLANYCH (32 t dynamitu) NIE
 *   WYMIENIAM — skojarzenie z wyłączeniem.
 * — ⚠⚠⚠ SUPERLATYWU „pierwsza zawodowa zbiornikowa
 *   elektrownia wodna na ziemiach polskich" NIE CYTUJĘ —
 *   jedno źródło, brak rankingu.
 * — ⚠ NAZWISKA PROJEKTANTA ZAPORY ZŁOTNIKI NIE PODAJĘ
 *   — [NP].
 *
 * KĄT: DUŻE NARZĘDZIE NIE SKALUJE SIĘ W DÓŁ
 * — o tym, że mały sprzęt nie jest luksusem ani duplikatem,
 * tylko jedynym, który obsługuje mały zakres. Kąt
 * od elektrowni w Leśnej: pięć turbin po pięćset
 * dwadzieścia sześć kilowatów i jedna po trzydzieści,
 * do zupełnie innego przepływu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że elektrownia uruchomiona w 1907 r. ma sześć turbin:
 *   pięć po 526 kW i jedną po 30 kW,
 * — że mała pracuje przy przepływie 0,15 m³/s, gdy duże
 *   potrzebują 2,75 m³/s każda, i kręci się 1 000 obrotów
 *   na minutę zamiast 375,
 * — ŻE NIE JEST ZAPASEM DUŻYCH — JEST OSOBNYM
 *   URZĄDZENIEM DO MAŁEJ WODY. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ZAKŁADAMY COŚ ODWROTNEGO: że duże
 *   obsłuży małe, bo „się mieści",
 * — ⚠⚠ ŻE TO NIEPRAWDA I ŻE WIDAĆ TO OD RAZU: garnek
 *   na pięć litrów nie zrobi dobrze jednej porcji sosu —
 *   za duża powierzchnia, za szybkie odparowanie, za mało
 *   kontaktu z dnem. Duża patelnia nie usmaży jednego
 *   jajka tak jak mała. Duża miska nie ubije dwóch białek,
 * — ⚠⚠ ŻE PYTANIE, KTÓRE TO ROZSTRZYGA, BRZMI: jaka jest
 *   Twoja NAJMNIEJSZA typowa porcja — i czy cokolwiek
 *   w tej kuchni jest do niej dopasowane,
 * — ⚠⚠ ŻE PRZY REDUKOWANIU ZESTAWU DO KILKU DUŻYCH RZECZY
 *   ten zakres wypada pierwszy, bo wygląda na obsłużony,
 * — ⚠⚠ ŻE TO NIE JEST TEKST O ZAPASIE ANI O ZASTĘPSTWIE —
 *   ROZGRANICZAM WPROST. Mała turbina nie zastępuje dużej
 *   i nigdy nie miała zastępować,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: mały sprzęt też kosztuje
 *   miejsce i też trzeba go myć. Jeśli najmniejsza typowa
 *   porcja zdarza się u Ciebie dwa razy w roku, duże
 *   naprawdę wystarczy. Pięć dużych turbin do jednej
 *   małej — to jest proporcja, a nie parytet,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma jedno naczynie
 *   i jeden zakres. MÓWIĘ TO WPROST — przy bardzo małych
 *   ilościach bywa za duże, tak samo jak każdy inny garnek
 *   nie na tę miarę.
 *   ⚠⚠⚠ NIE PODAJĘ POJEMNOŚCI ANI ŻADNYCH PARAMETRÓW —
 *   pokazuję na prezentacji.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAPASU I DRUGIEJ DROGI — kąt zajęty
 *   (Chocianów). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I NAJWIĘKSZE
 *   RYZYKO TEGO TEKSTU: tamten tekst mówi, że zapas ma być
 *   INNĄ DROGĄ do tej samej czynności; ten mówi, że małe
 *   urządzenie NIE JEST ZAPASEM, tylko obsługuje INNY
 *   ZAKRES. ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO PRZELICZANIA PRZEPISU I SKALI — kąt zajęty
 *   (Kowary). Nie piszę o zmianie liczby porcji
 *   w przepisie; piszę o dopasowaniu sprzętu do zakresu.
 * — ⚠⚠⚠ ZERO ROZMIARU SPRZĘTU I LICZBY TUR — kąt zajęty
 *   (Ziębice). Tamten tekst mówi o dzieleniu dużej roboty
 *   na partie; ten o obsłudze małej.
 * — ⚠⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie mówię, ile rzeczy mieć; mówię, jaki
 *   zakres sprawdzić.
 * — ⚠⚠ ZERO UNIKATÓW I STAŁYCH ADRESÓW — kąt zajęty
 *   (Lwówek Śląski).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Dlatego zestawienia dwóch zapór
 *   nie używam jako morału.
 * — ⚠⚠ ZERO DWÓCH ODPORNOŚCI — kąt pisany w tej samej
 *   fali (Żarów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW — ⚠⚠⚠ piszę o sosie
 *   i jajku WYŁĄCZNIE jako o ilustracji rozmiaru naczynia,
 *   bez ani jednej liczby kuchennej.
 * — ŻADNEJ LISTY POLECANYCH ROZMIARÓW — podaję WYŁĄCZNIE
 *   pytanie o najmniejszą typową porcję.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PRZYMIOTNIKA „LEŚNY/LEŚNA/LEŚNE"
 *   W ZNACZENIU POSPOLITYM.
 * — ⚠⚠⚠ ZERO POWODZI, ROLI PRZECIWPOWODZIOWEJ
 *   I ZAGROŻENIA — zapory wyłącznie jako parametry.
 * — ⚠⚠⚠ ZERO DYNAMITU I MATERIAŁÓW WYBUCHOWYCH.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO UTRATY I PRZYWRÓCENIA PRAW MIEJSKICH (1962).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I POGRZEBOWEGO.
 * — ⚠ ZERO DEMOGRAFII, WYLUDNIANIA I BEZROBOCIA.
 * — ⚠ ZERO PRZECIĘTNEGO WYNAGRODZENIA — to wartość
 *   powiatowa, nie miejska.
 * — ⚠ ZERO SUPERLATYWÓW O ELEKTROWNI.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ powierzchni miasta jako 8,6 km².
 * — NIE PISZĘ „20 wsi" — jest ich 19.
 * — NIE PODAJĘ roku 1144 jako daty praw miejskich —
 *   to pierwsza wzmianka; prawa miejskie to 1329.
 * — NIE PISZĘ o utracie ani przywróceniu praw miejskich.
 * — NIE PODAJĘ wysokości miasta n.p.m. — nie ustalono.
 * — NIE PODAJĘ nazwy producenta turbin ani projektanta
 *   zapory Złotniki.
 * — NIE CYTUJĘ superlatywu o elektrowni.
 * — NIE PODAJĘ ilości materiałów użytych przy budowie.
 * — NIE PODAJĘ mocy 2,78 MW ani „czterech turbin
 *   po 515 kW" — podaję dane operatora.
 * — NIE PODAJĘ pojemności naczynia urządzenia.
 * — NIE PODAJĘ odległości drogowych do sąsiadów —
 *   nie zweryfikowano żadnej; zweryfikowana jest wyłącznie
 *   trasa z Wrocławia.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Ser zgorzelecki" pochodzi z powiatu
 *   zgorzeleckiego, produkty „z Karkonoszy" dotyczą innego
 *   pasma (Leśna leży u podnóża Gór Izerskich), a „twaróg
 *   sudecki" i miody sudeckie to oznaczenia regionalne.
 *   NIE PRZYPISUJĘ ICH TEJ GMINIE.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto w powiecie lubańskim liczy 3 965 mieszkańców
 *   (GUS, 31.12.2024) na 8,56 km², a cała gmina
 *   miejsko-wiejska 9 214 osób na 104,6 km²,
 *   z dziewiętnastoma wsiami,
 * — pierwsza wzmianka pochodzi z 1144 r., a prawa miejskie
 *   nadał w 1329 książę Henryk I jaworski — sto
 *   osiemdziesiąt pięć lat później; ratusz zbudowano
 *   w 1699 r. i remontowano w 1779,
 * — zaporę na Kwisie budowano od września 1901 do września
 *   1905 r.: kamienno-betonowa, grawitacyjna, ma 45 m
 *   wysokości, 130 m długości w koronie, 38 m szerokości
 *   w podstawie i 8 m w koronie; zbiornik mieści
 *   15 mln m³ wody, ma 140 ha lustra i 6 km długości,
 * — elektrownię wodną uruchomiono w 1907 r. (trzy
 *   turbozespoły) i 1908 (kolejne dwa); pracuje w niej
 *   sześć turbin Francisa: pięć o mocy 526 kW każda
 *   i jedna o mocy 30 kW, przy spadzie 26 m; duże wymagają
 *   przepływu 2,75 m³/s i pracują na 375 obrotach
 *   na minutę, mała — 0,15 m³/s i 1 000 obrotów; moc
 *   łączna to około 2,66 MW,
 * — druga zapora na tej samej rzece, przy wsi Złotniki
 *   Lubańskie w tej samej gminie, ma 36 m wysokości
 *   i 168 m długości w koronie, a jej zbiornik mieści
 *   10,5 mln m³ przy około 120 ha lustra i 9 km długości;
 *   tamtejszą elektrownię z trzema turbozespołami
 *   o mocach 2 105, 1 582 i 736 kW uruchomiono
 *   20 listopada 1924 r.; zapory dzieli niecałe sześć
 *   kilometrów biegu rzeki,
 * — z Wrocławia jest tu od 153 do 173 km, zależnie
 *   od wybranej trasy.
 */
export const LESNA: CityContent = {
  slug: "lesna",
  h1: "Thermomix Leśna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Leśna — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Leśnej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Leśna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Leśnej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Leśnej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dziewiętnastu wsi w gminie.",

  highlights: highlightyStandardowe("Leśna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pięć turbin po pięćset dwadzieścia sześć kilowatów i jedna po trzydzieści — do innej wody.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Leśnej – jak wygląda prezentacja?",
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
      id: "male-i-duze",
      heading: "Duże narzędzie nie skaluje się w dół",
      paragraphs: [
        "W elektrowni wodnej uruchomionej w 1907 roku pod Leśną pracuje sześć turbin. Pięć z nich ma moc pięciuset dwudziestu sześciu kilowatów. Szósta — trzydziestu.",
        "Siedemnaście i pół raza mniej.",
        "I to nie jest turbina zapasowa. Duże potrzebują przepływu dwóch i trzech czwartych metra sześciennego na sekundę każda; mała pracuje przy piętnastu setnych i kręci się tysiąc obrotów na minutę zamiast trzystu siedemdziesięciu pięciu. To osobne urządzenie do małej wody — zbudowane po to, żeby elektrownia produkowała cokolwiek wtedy, gdy rzeka nie wystarcza na uruchomienie żadnej z pozostałych pięciu.",
        "W kuchni zakładamy dokładnie odwrotnie.",
        "Że duże obsłuży małe, bo przecież „się mieści”. Że skoro jest garnek na pięć litrów, to ugotuje się w nim i litr. Że duża patelnia usmaży jedno jajko. Że w dużej misce ubije się dwa białka.",
        "Nie ugotuje, nie usmaży i nie ubije — albo zrobi to źle. Za duża powierzchnia, za szybkie odparowanie, za mało kontaktu z dnem, za płytka warstwa, za mało oporu dla trzepaczki. Naczynie nie tylko mieści; ono też pracuje, a pracuje w zakresie, na który je zaprojektowano.",
        "Pytanie, które to rozstrzyga, jest jedno: jaka jest Twoja najmniejsza typowa porcja — i czy cokolwiek w tej kuchni jest do niej dopasowane.",
        "Nie największa, bo tę wszyscy znają i pod nią kupują. Najmniejsza. Ta z wtorkowego wieczoru, kiedy gotuje się dla jednej osoby albo robi się pół porcji sosu do tego, co zostało.",
        "Przy porządkach ten zakres wypada pierwszy, bo wygląda na obsłużony. Duży garnek stoi, duża patelnia stoi, więc po co mały rondel — i mały rondel wychodzi z kuchni, a potem przez rok robi się w za dużym i przypala.",
        "Dopowiem, bo to leży bardzo blisko innej rzeczy: mała turbina nie jest zapasem dużej i nigdy nie miała nim być. To nie jest tekst o zastępstwie, tylko o zakresie — o tym, że pewnych ilości duży sprzęt po prostu nie obsługuje.",
        "Uczciwie o drugiej stronie: mały sprzęt też kosztuje miejsce i też trzeba go myć. Jeśli Twoja najmniejsza typowa porcja zdarza się dwa razy w roku, duże naprawdę wystarczy i nie ma o czym mówić. Zwróć uwagę na proporcję w tej elektrowni: pięć dużych turbin do jednej małej. To jest proporcja, a nie parytet.",
        "Na koniec o moim urządzeniu, uczciwie.",
        "Thermomix ma jedno naczynie i jeden zakres — przy bardzo małych ilościach bywa po prostu za duży, dokładnie tak samo jak każdy inny garnek nie na tę miarę. Nie napiszę tu pojemności ani żadnych parametrów, bo to rzecz do zobaczenia, a nie do wypisania: na prezentacji gotujemy tyle, ile naprawdę u Was się gotuje, i od razu widać, czy ten zakres się zgadza.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Leśnej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób siada u Was do stołu w najmniejszym typowym dniu — nie w niedzielę, tylko we wtorek. To najbardziej praktyczna liczba przed takim zakupem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Leśnej"),
    sekcjaRaty("w Leśnej"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Leśnej",
      paragraphs: [
        "Miasto w powiecie lubańskim liczy 3 965 mieszkańców (GUS, 31.12.2024) na ośmiu i pół kilometra kwadratowego, a cała gmina miejsko-wiejska 9 214 osób na stu czterech, z dziewiętnastoma wsiami — warto dodać, że dziewiętnastoma, bo serwisy statystyczne zapowiadają dwadzieścia miejscowości i doliczają do nich samo miasto. Pierwsza wzmianka pochodzi z 1144 roku, a prawa miejskie nadał w 1329 książę Henryk I jaworski: sto osiemdziesiąt pięć lat później. To rozróżnienie warto zrobić, bo bazy statystyczne wpisują rok 1144 do rubryki „nadanie praw miejskich”, choć jest to data pierwszej wzmianki. Ratusz zbudowano w 1699 roku i remontowano w 1779. Zaporę na Kwisie budowano od września 1901 do września 1905: kamienno-betonowa, grawitacyjna, ma czterdzieści pięć metrów wysokości, sto trzydzieści metrów długości w koronie, trzydzieści osiem metrów szerokości w podstawie i osiem w koronie; zbiornik mieści piętnaście milionów metrów sześciennych wody, ma sto czterdzieści hektarów lustra i sześć kilometrów długości. Elektrownię wodną uruchomiono w 1907 roku, a dwa kolejne turbozespoły dołączyły w 1908. Pracuje w niej sześć turbin Francisa: pięć o mocy pięciuset dwudziestu sześciu kilowatów każda i jedna o mocy trzydziestu, przy spadzie dwudziestu sześciu metrów; łącznie około dwóch i pół megawata. Druga zapora na tej samej rzece, przy wsi Złotniki Lubańskie w tej samej gminie, ma trzydzieści sześć metrów wysokości i sto sześćdziesiąt osiem metrów długości w koronie, a jej zbiornik mieści dziesięć i pół miliona metrów sześciennych przy około stu dwudziestu hektarach lustra i dziewięciu kilometrach długości; tamtejszą elektrownię z trzema turbozespołami o mocach dwóch tysięcy stu pięciu, tysiąca pięciuset osiemdziesięciu dwóch i siedmiuset trzydziestu sześciu kilowatów uruchomiono 20 listopada 1924 roku. Obie zapory dzieli niecałe sześć kilometrów biegu rzeki. Z Wrocławia jest tu od stu pięćdziesięciu trzech do stu siedemdziesięciu trzech kilometrów, zależnie od wybranej trasy.",
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

  districtsHeading: "Do których części Leśnej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewiętnastu wsi w gminie: Bartoszówki, Grabiszyc Dolnych, Średnich i Górnych, Janówki, Jurkowa, Kościelnik Górnych i Średnich, Miłoszowa, Pobiednej, Smolnika, Stankowic, Suchej, Szyszkowej, Wolimierza, Zacisza, Złotnik Lubańskich, Złotego Potoku i Świecia. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę z członem kierunkowym: Grabiszyce są trzy, a Kościelniki dwa. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Leśną też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Lubania, Olszyny, Gryfowa Śląskiego, Mirska, Świeradowa-Zdroju i Platerówki — wszędzie bezpłatnie, tak samo jak w samym mieście. Z Wrocławia jest tu od stu pięćdziesięciu trzech do stu siedemdziesięciu trzech kilometrów, zależnie od trasy.",
  ],
  nearbyTowns: ["Lubań", "Olszyna", "Gryfów Śląski", "Mirsk", "Świeradów-Zdrój"],

  about: blokOMnie("do Leśnej", "w Leśnej i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Leśnej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewiętnastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto podać pełną nazwę wsi z członem kierunkowym: Grabiszyce są trzy — Dolne, Średnie i Górne — a Kościelniki dwa, Górne i Średnie. Chodzi też o Leśną w powiecie lubańskim, nie o Leśnicę w opolskim ani o wrocławskie osiedle o tej samej nazwie, i nie o Leśną Podlaską.",
    },
    ...faqWspolne("w Leśnej"),
    {
      question: "Mam duży garnek i dużą patelnię. Czy mały sprzęt jest mi do czegoś potrzebny?",
      answer:
        "Zależy od Waszej najmniejszej typowej porcji, nie od największej. W elektrowni wodnej pod Leśną pracuje sześć turbin: pięć po pięćset dwadzieścia sześć kilowatów i jedna po trzydzieści — ta mała nie jest zapasem, tylko osobnym urządzeniem do małej wody, bo duże nie ruszą przy takim przepływie. W kuchni działa to identycznie: za duży garnek na jedną porcję sosu to za duża powierzchnia i za szybkie odparowanie, a w za dużej misce nie ubijesz dwóch białek. Uczciwie: jeśli takie ilości zdarzają się u Was dwa razy w roku, duże wystarczy — zwróćcie uwagę, że dużych turbin jest tam pięć, a mała jedna.",
    },
    {
      question: "Czy Thermomix radzi sobie z małymi ilościami?",
      answer:
        "Ma jedno naczynie i jeden zakres, więc przy bardzo małych ilościach bywa po prostu za duży — dokładnie tak samo jak każdy inny garnek nie na tę miarę. Nie podam tu pojemności ani parametrów, bo to rzecz do zobaczenia: na prezentacji gotujemy tyle, ile naprawdę u Was się gotuje, i od razu widać, czy zakres się zgadza. Jeśli się nie zgadza, powiem to wprost.",
    },
  ],

  geo: { lat: 51.0242, lng: 15.2641 },
};
