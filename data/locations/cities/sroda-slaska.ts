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
 * ŚRODA ŚLĄSKA — powiat średzki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Środa Śląska.
 * MIASTO: 9 526 mieszkańców (GUS 31.12.2024), 14,9 km²,
 *   gęstość 637,6 os./km².
 * CAŁA GMINA: 19 785 osób, 215,1 km², 28 wsi.
 *   ⚠ KONTROLA: 19 785 / 215,1 = 92,0 — DOMYKA SIĘ
 *   IDEALNIE z podaną gęstością gminy.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Poza miastem mieszka 10 259 osób — więcej niż
 *   w samym mieście.
 * ⚠ GEO: 51,1667 / 16,6.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI — KOLIZJA Z DNIEM TYGODNIA.
 *   „Środa" jest rzeczownikiem pospolitym o bardzo wysokiej
 *   frekwencji. KAŻDE ZDANIE TYPU „w Środzie odbędzie
 *   się…" JEST DWUZNACZNE.
 *   ⚠⚠⚠ ZASADA BEZWZGLĘDNA: ZAWSZE PISZĘ PEŁNĄ NAZWĘ
 *   „ŚRODA ŚLĄSKA", W KAŻDYM PRZYPADKU, BEZ WYJĄTKU.
 *   NIGDY SAMEGO „w Środzie", „do Środy", „ze Środy".
 *   ⚠⚠ DODATKOWO UNIKAM W TEKŚCIE SŁOWA „ŚRODA" JAKO
 *   DNIA TYGODNIA — nawet przy umawianiu prezentacji.
 *   Piszę „w tygodniu", „w weekend", nie wymieniam dni.
 *   TWARDA GRANICA.
 *
 * ⚠⚠ ODMIANA — OBA CZŁONY:
 *   D. do Środy Śląskiej · Ms. w Środzie Śląskiej
 *   N. Środą Śląską · B. Środę Śląską
 *   ⚠⚠⚠ „DO ŚRODA ŚLĄSKIEJ" I „W ŚRODZIE ŚLĄSKA"
 *   SĄ BŁĘDAMI.
 *   ⚠⚠⚠ PRZYMIOTNIK: ŚREDZKI — NIEOCZYWISTY.
 *   NIE „środzki", NIE „środowy". Forma urzędowa
 *   (powiat średzki, prawo średzkie, skarb średzki).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠⚠ DRUGA PUŁAPKA — ŚRODA WIELKOPOLSKA.
 *   POWIAT ŚREDZKI ISTNIEJE W OBU WOJEWÓDZTWACH,
 *   A PRZYMIOTNIK „ŚREDZKI" JEST WSPÓLNY.
 *   Człon „Śląska" dodano w 1946 r. WŁAŚNIE DLATEGO —
 *   pułapka homonimiczna jest wpisana w nazwę urzędową.
 *   ⚠ Prawo średzkie i skarb średzki pochodzą wyłącznie
 *   od Środy ŚLĄSKIEJ, ale bywają wiązane z wielkopolską.
 *   ⚠ Cesarzowice — wieś w gminie; są też Cesarzowice
 *   w gminie Kąty Wrocławskie.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * PRAWA MIEJSKIE — ⚠⚠ ŹRÓDŁA ROZBIEŻNE:
 *   „przed 1233" (Henryk Brodaty) / prawo flamandzkie
 *   na początku XIII w., zastąpione magdeburskim w 1235 /
 *   1238 jako pierwsza wzmianka o Środzie Śląskiej
 *   jako o mieście.
 *   ⚠⚠⚠ NIE PODAJĘ JEDNEJ DATY JAKO PEWNEJ.
 *   Piszę: „prawa miejskie przed 1233 rokiem, a od 1235
 *   prawo magdeburskie".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PRAWO ŚREDZKIE:
 *   Około 1235 r. powstała tu lokalna odmiana prawa
 *   magdeburskiego — PRAWO ŚREDZKIE (ius Sredense).
 *   OD XIII DO XIV W. STAŁO SIĘ WZOREM, NA KTÓRYM
 *   LOKOWANO 115 MIAST na Śląsku, w Wielkopolsce
 *   i w Małopolsce — m.in. Opole, Kalisz, Wieliczkę
 *   i Radom.
 *   Nikt nie wymyślał reguł dla każdego z nich osobno.
 *   TO JEST CAŁY KĄT.
 *   ⚠ Liczba 115 pojawia się identycznie w dwóch źródłach
 *   (urząd miasta i starostwo) — prawdopodobnie wspólne
 *   źródło pierwotne, ale zgodność jest pełna.
 *   ⚠ PEŁNEJ LISTY 115 MIAST NIE USTALONO — podaję
 *   cztery przykłady i mówię, że to przykłady.
 *
 * MURY MIEJSKIE — FAKTY:
 * — Wysokość około 4,5 m, grubość 1,2 m.
 * — 45 baszt, 8 wież, z czego 4 pełniły funkcję bram.
 * — Fosy: kilkanaście metrów szerokości, 5–6 m głębokości.
 * — Obwód około 1 700 m [NP] — jedno źródło turystyczne.
 * — 1341 — król Jan Luksemburski przyznaje dziesięcioletnie
 *   zwolnienie podatkowe na finansowanie budowy.
 * — ⚠⚠ PRZELICZNIKA „baszta co 38 m" NIE PODAJĘ —
 *   to mój rachunek na liczbie [NP].
 * — ⚠⚠ MURÓW NIE UŻYWAM JAKO KĄTA — obszar zajęty
 *   (Recz, Moryń, Resko).
 *
 * DZWONNICA (dziś wieża widokowa) — FAKTY:
 * — Połowa XIV w.; podstawa 9 × 9 m; mur 2,6 m u podstawy
 *   i 1,2 m u góry; 140 stopni; ponad 30 m wysokości
 *   (źródła: 32 albo około 33 m — PODAJĘ „PONAD 30");
 *   hełm w kształcie piramidy o wysokości 11 m.
 *   Wolno stojąca.
 * — ⚠ Przy podstawie 9 × 9 m mur o grubości 2,6 m po obu
 *   stronach zajmuje 5,2 z 9 m — PONAD POŁOWA RZUTU
 *   TO MUR. ⚠⚠⚠ TEGO ZESTAWIENIA NIE UŻYWAM JAKO KĄTA:
 *   „podstawa jako koszt konstrukcji" ociera się o miejsce
 *   celowo puste (Wołów) i o pojemność kontra gabaryt
 *   (Nowe Warpno). PODAJĘ JAKO FAKT Z WYMIARAMI.
 *   ⚠ Rachunek 5,2 z 9 m jest MÓJ — podaję opisowo.
 *
 * SKARB ŚREDZKI — FAKTY:
 * — Odkrycia: 8 czerwca 1985 i 24 maja 1988, w tym samym
 *   miejscu, trzy lata po sobie.
 * — Blisko 7 700 srebrnych monet.
 *   ⚠⚠ NIE SUMUJĘ: 3 771 + 3 924 = 7 695, a podana suma
 *   to 7 691. ARYTMETYKA SIĘ NIE DOMYKA — PISZĘ
 *   „BLISKO SIEDEM TYSIĘCY SIEDEMSET".
 * — 39 złotych florenów.
 * — KORONA: waga 587 g, wysokość 62 mm, średnica
 *   wewnętrzna 160 mm, zewnętrzna około 210 mm,
 *   10 segmentów, 195 kamieni pierwotnie — zachowało się
 *   112. Przypisywana Blance de Valois.
 * — ⚠⚠⚠ WYCENY NIE PODAJĘ. Źródła podają 250 mln zł
 *   albo 50 i 100 mln USD w różnych latach —
 *   PRZELICZENIA SIĘ NIE ZGADZAJĄ. TWARDA GRANICA.
 * — ⚠ Rozdziału zbioru między muzea NIE PODAJĘ
 *   w tekście — liczby cząstkowe nie domykają się
 *   ze składnikami.
 * — ⚠⚠ SKARBU NIE UŻYWAM JAKO KĄTA — „brakujące
 *   osiemdziesiąt trzy kamienie" ociera się o czego nie
 *   widać na talerzu (Mirosławiec). PODAJĘ JAKO FAKT.
 *
 * RZEMIOSŁO I PRZEMYSŁ — FAKTY:
 * — 1732: 220 warsztatów rzemieślniczych w 38 branżach.
 * — 1840: około 4 000 mieszkańców.
 * — Około 1711 fabryka tytoniu, 1742 fabryka porcelany,
 *   1750 fabryka jedwabiu.
 * — Wzmianki średniowieczne: 1266 zamek, 1283 Dom Kupców,
 *   do 1307 jatka, po 1348 kramy kupieckie.
 *   ⚠⚠ JATKI NIE WYMIENIAM — wątek mięsny i sanitarny.
 * — ⚠⚠ ZESTAWIENIA „220 WARSZTATÓW W 38 BRANŻACH" NIE
 *   UŻYWAM JAKO KĄTA — „narzędzie wąskie kontra
 *   uniwersalne" ociera się o liczenie części (Pieszyce,
 *   ta sama fala) i o krótką listę (Polanów).
 *   PODAJĘ JAKO FAKT.
 * — ⚠⚠ KOŚCIOŁA ŚW. ANDRZEJA NIE OPISUJĘ jako obiektu
 *   kultu — wymieniam wyłącznie dzwonnicę jako budowlę
 *   z wymiarami. ⚠ WYMIARÓW KOŚCIOŁA NIE USTALONO.
 * — ⚠ KLASZTORU (wzmianka 1318) NIE WYMIENIAM.
 *
 * KĄT: JEDNA PROCEDURA POWIELONA STO PIĘTNAŚCIE RAZY
 * — o tym, że oszczędność w kuchni bierze się z decyzji
 * podjętych RAZ, a nie z pomysłowości przy każdej okazji.
 * Kąt od prawa średzkiego: jedna lokalna odmiana przepisów
 * stała się wzorem dla stu piętnastu miast.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że około 1235 roku w Środzie Śląskiej powstała lokalna
 *   odmiana prawa magdeburskiego i że przez dwa stulecia
 *   lokowano na niej 115 miast — od Opola przez Kalisz
 *   po Wieliczkę i Radom,
 * — ŻE NIKT NIE WYMYŚLAŁ REGUŁ DLA KAŻDEGO Z NICH OSOBNO
 *   — brano gotowy wzór i powtarzano. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DECYDUJEMY ZA KAŻDYM RAZEM OD NOWA:
 *   od czego zacząć zmywanie, gdzie odłożyć brudny nóż,
 *   w jakiej kolejności wstawiać, jak podpisać, w jakim
 *   porządku pisać listę zakupów,
 * — ⚠⚠ ŻE KAŻDA TAKA DECYZJA JEST MAŁA, ALE ZAPADA
 *   KILKADZIESIĄT RAZY W TYGODNIU I ZA KAŻDYM RAZEM
 *   KOSZTUJE TROCHĘ UWAGI. Zmęczenie kuchnią bierze się
 *   częściej z liczby drobnych decyzji niż z pracy,
 * — ⚠⚠ ŻE ROZWIĄZANIEM JEST USTALIĆ RAZ, PORZĄDNIE,
 *   I PRZESTAĆ O TYM MYŚLEĆ — a cała oszczędność bierze
 *   się właśnie z tego, że decyzja zapadła raz,
 * — ⚠⚠ ŻE PROCEDURA NIE MUSI BYĆ NAJLEPSZA Z MOŻLIWYCH.
 *   Musi być USTALONA. Prawo średzkie nie było najlepszym
 *   prawem w Europie — było gotowe i sprawdzone,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: procedury się starzeją.
 *   Wzór dobry przez dwa stulecia w końcu przestał
 *   wystarczać. Warto co jakiś czas sprawdzić, czy ta,
 *   którą masz, wciąż pasuje — ale sprawdzać rzadko,
 *   a nie przy każdym użyciu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z przepisami
 *   prowadzącymi krok po kroku jest właśnie taką gotową
 *   procedurą — i to jest jego realna zaleta.
 *   ⚠⚠ MÓWIĘ TEŻ WPROST, ŻE MA TO CENĘ: kto gotuje
 *   wyłącznie z prowadzenia, ten nie ćwiczy własnych
 *   decyzji. To uczciwy zarzut i go nie omijam.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO METODY, KOLEJNOŚCI CZYNNOŚCI I HARMONOGRAMU
 *   GOTOWANIA — kąt zajęty (Milicz, poprzednia fala).
 *   ⚠⚠⚠ TO JEST NAJBLIŻSZY OBSZAR: tamten tekst mówi
 *   „zanim dokupisz, sprawdź kolejność"; ten mówi
 *   „ustal raz i przestań decydować".
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM W TEKŚCIE.
 *   ⚠⚠ NIE PODAJĘ ŻADNEJ KONKRETNEJ KOLEJNOŚCI
 *   CZYNNOŚCI — wymieniam wyłącznie PRZYKŁADY DECYZJI
 *   DO USTALENIA, bez rozstrzygania ich za czytelnika.
 * — ⚠⚠⚠ ZERO USTALONEGO WYMIARU I JEDNEJ MIARY —
 *   kąt zajęty (Kamienna Góra).
 * — ⚠⚠⚠ ZERO PROGU USTALONEGO Z GÓRY — kąt zajęty
 *   (Mielno).
 * — ⚠⚠ ZERO MURÓW, OBWODU I PUNKTÓW WEJŚCIA — kąty zajęte
 *   (Recz, Moryń).
 * — ⚠⚠ ZERO MIEJSCA CELOWO PUSTEGO — kąt zajęty (Wołów).
 *   Dlatego NIE UŻYWAM rzutu dzwonnicy jako morału.
 * — ⚠⚠ ZERO CZEGO NIE WIDAĆ NA TALERZU — kąt zajęty
 *   (Mirosławiec). Dlatego NIE UŻYWAM brakujących
 *   kamieni w koronie.
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI I DOBORU NARZĘDZI — kąt
 *   pisany w tej samej fali (Pieszyce).
 * — ⚠⚠ ZERO ETYKIET — kąt pisany w tej samej fali
 *   (Oborniki Śląskie).
 * — ⚠⚠ ZERO PUNKTÓW STAŁYCH — kąt pisany w tej samej
 *   fali (Kudowa-Zdrój).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ PROCEDURY — podaję WYŁĄCZNIE zasadę,
 *   że procedurę trzeba ustalić, i przykłady decyzji.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o zmywaniu i odkładaniu noża NIE MÓWIĘ
 *   NIC o higienie ani o bakteriach.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SŁOWA „ŚRODA" JAKO DNIA TYGODNIA.
 * — ⚠⚠⚠ ZERO WYCENY SKARBU — liczby sprzeczne.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — dzwonnicę opisuję
 *   jako wolno stojącą budowlę z wymiarami.
 * — ⚠⚠ ZERO JATEK I WĄTKU MIĘSNEGO.
 * — ⚠⚠ ZERO MURÓW JAKO TEMATU OBRONNEGO — podaję
 *   wyłącznie wymiary i rok zwolnienia podatkowego.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ jednej daty praw miejskich jako pewnej.
 * — NIE SUMUJĘ monet ze skarbu — arytmetyka źródeł
 *   się nie domyka.
 * — NIE PODAJĘ wyceny skarbu.
 * — NIE PODAJĘ rozdziału zbioru między muzea.
 * — NIE PODAJĘ pełnej listy 115 miast — tylko cztery
 *   przykłady, i mówię, że to przykłady.
 * — NIE PODAJĘ wysokości dzwonnicy co do metra —
 *   źródła podają 32 albo około 33 m.
 * — NIE PODAJĘ obwodu murów jako liczby pewnej.
 * — NIE PODAJĘ wymiarów kościoła — nie ustalono.
 * — NIE TWIERDZĘ, że prawo średzkie było najlepsze —
 *   twierdzę, że było gotowe i powtarzalne.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Tłoczony sok jabłkowy z Lutyni"
 *   pochodzi z gminy Miękinia — TEN SAM POWIAT ŚREDZKI,
 *   INNA GMINA. NIE PRZYPISUJĘ.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Środa Śląska jest siedzibą powiatu średzkiego;
 *   miasto liczy 9 526 mieszkańców (GUS, 31.12.2024)
 *   na 14,9 km², a cała gmina miejsko-wiejska 19 785 osób
 *   na 215,1 km², z dwudziestoma ośmioma wsiami; człon
 *   „Śląska" dodano do nazwy w 1946 r., żeby odróżnić
 *   miasto od Środy Wielkopolskiej,
 * — prawa miejskie miasto otrzymało przed 1233 r.,
 *   a od 1235 obowiązywało w nim prawo magdeburskie;
 *   około tego roku powstała lokalna odmiana — prawo
 *   średzkie — na której od XIII do XIV w. lokowano
 *   115 miast, między innymi Opole, Kalisz, Wieliczkę
 *   i Radom,
 * — mury miejskie miały około 4,5 m wysokości i 1,2 m
 *   grubości, 45 baszt i 8 wież, z których cztery pełniły
 *   funkcję bram, a fosy — kilkanaście metrów szerokości
 *   i 5–6 m głębokości; w 1341 r. król Jan Luksemburski
 *   przyznał miastu dziesięcioletnie zwolnienie podatkowe
 *   na finansowanie budowy,
 * — wolno stojąca dzwonnica z połowy XIV w. ma podstawę
 *   9 × 9 m, mur grubości 2,6 m u dołu i 1,2 m u góry,
 *   140 stopni, ponad 30 m wysokości i hełm w kształcie
 *   piramidy wysoki na 11 m,
 * — 8 czerwca 1985 r. i ponownie 24 maja 1988, w tym samym
 *   miejscu, odkryto tu skarb: blisko 7 700 srebrnych
 *   monet, 39 złotych florenów i koronę ważącą 587 g,
 *   wysoką na 62 mm, o średnicy wewnętrznej 160 mm,
 *   złożoną z 10 segmentów, pierwotnie z 195 kamieniami,
 *   z których zachowały się 112; koronę przypisuje się
 *   Blance de Valois,
 * — w 1732 r. działało w mieście 220 warsztatów
 *   rzemieślniczych w 38 branżach, a w 1840 mieszkało
 *   tu około 4 000 osób; fabrykę tytoniu założono około
 *   1711 r., porcelany w 1742, jedwabiu w 1750; zamek
 *   odnotowano w 1266 r., a Dom Kupców w 1283.
 */
export const SRODA_SLASKA: CityContent = {
  slug: "sroda-slaska",
  h1: "Thermomix Środa Śląska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Środa Śląska — prezentacja i cena",
  seoDescription:
    "Thermomix w Środzie Śląskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Środa Śląska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Środzie Śląskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Środy Śląskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu ośmiu wsi w gminie.",

  highlights: highlightyStandardowe("Środa Śląska"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jeden wzór ustalony raz i powtórzony w stu piętnastu miastach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Środzie Śląskiej – jak wygląda prezentacja?",
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
      id: "jedna-procedura",
      heading: "Jedna procedura powielona sto piętnaście razy",
      paragraphs: [
        "Około 1235 roku Środa Śląska przerobiła prawo magdeburskie na własną odmianę. Nazwano ją prawem średzkim.",
        "Przez kolejne dwa stulecia lokowano na niej sto piętnaście miast — na Śląsku, w Wielkopolsce i w Małopolsce. Między innymi Opole, Kalisz, Wieliczkę i Radom; to tylko przykłady, pełnej listy nikt dziś wygodnie nie poda.",
        "Sto piętnaście razy nie wymyślano reguł od nowa. Brano gotowy, sprawdzony wzór i powtarzano.",
        "W kuchni robimy odwrotnie i to jest najcichszy z kosztów.",
        "Za każdym razem decydujemy od nowa. Od czego zacząć zmywanie. Gdzie odłożyć brudny nóż, żeby nie leżał na desce. Z której strony podpisać pojemnik. W jakiej kolejności wstawiać do zmywarki. W jakim porządku pisać listę zakupów — działami sklepu czy działami w głowie.",
        "Każda z tych decyzji jest mikroskopijna. Żadna nie zasługuje na to, żeby o niej myśleć. Ale zapada kilkadziesiąt razy w tygodniu i za każdym razem zabiera trochę uwagi — a zmęczenie kuchnią bierze się z liczby drobnych decyzji częściej niż z samej pracy.",
        "Rozwiązanie jest nudne i dlatego działa: ustal raz, porządnie, i przestań o tym myśleć.",
        "Cała oszczędność bierze się właśnie stąd, że decyzja zapadła raz. Nie z tego, że była genialna.",
        "I tu rzecz najważniejsza, bo najczęściej się ją myli: procedura nie musi być najlepsza z możliwych. Musi być ustalona. Prawo średzkie nie było najlepszym prawem w ówczesnej Europie — było gotowe, spisane i sprawdzone w praktyce, i to wystarczyło na sto piętnaście miast.",
        "Dopowiem, żeby nie było nieporozumienia: nie chodzi o to, w jakiej kolejności gotować ani jak ułożyć tydzień. Nie podam tu żadnej konkretnej kolejności, bo to Wasza kuchnia i Wasze decyzje. Chodzi o to, żeby te decyzje zapadły raz, a nie codziennie.",
        "Uczciwie o drugiej stronie: procedury się starzeją. Wzór, który wystarczał przez dwa stulecia, w końcu przestał wystarczać. Warto co jakiś czas sprawdzić, czy ta, którą masz, wciąż pasuje do tego, jak teraz gotujecie — ale sprawdzać rzadko, przy zmianie, a nie przy każdym użyciu. Sprawdzanie przy każdym użyciu to dokładnie to, od czego uciekamy.",
        "Na koniec o urządzeniu, i powiem obie strony.",
        "Thermomix prowadzi przez przepis krok po kroku — i to właśnie jest gotowa procedura, taka, przy której nie decydujesz o kolejności, bo ktoś zdecydował wcześniej. To jego realna zaleta i nie ma co jej umniejszać. Ma to jednak cenę, którą trzeba powiedzieć wprost: kto gotuje wyłącznie z prowadzenia, ten nie ćwiczy własnych decyzji i po roku może się okazać, że bez ekranu czuje się w kuchni niepewnie. To uczciwy zarzut wobec mojego urządzenia i nie zamierzam go omijać.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Środzie Śląskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Terminy w tygodniu wieczorem i w weekend przed południem są najczęściej wybierane. Powiedz przy umawianiu, która pora Wam pasuje, a dopasuję się.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Środzie Śląskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Środy Śląskiej",
      paragraphs: [
        "Środa Śląska jest siedzibą powiatu średzkiego. Samo miasto liczy 9 526 mieszkańców (GUS, 31.12.2024) na niecałych piętnastu kilometrach kwadratowych, a cała gmina miejsko-wiejska blisko dwadzieścia tysięcy osób na dwustu piętnastu, z dwudziestoma ośmioma wsiami. Człon „Śląska” dodano do nazwy w 1946 roku, żeby odróżnić miasto od Środy Wielkopolskiej. Prawa miejskie miasto otrzymało przed 1233 rokiem, a od 1235 obowiązywało w nim prawo magdeburskie; mniej więcej wtedy powstała lokalna odmiana — prawo średzkie — na której od trzynastego do czternastego wieku lokowano sto piętnaście miast, między innymi Opole, Kalisz, Wieliczkę i Radom. Mury miejskie miały około czterech i pół metra wysokości i metr dwadzieścia grubości, czterdzieści pięć baszt i osiem wież, z których cztery pełniły funkcję bram; fosy miały kilkanaście metrów szerokości i pięć do sześciu metrów głębokości, a w 1341 roku król Jan Luksemburski przyznał miastu dziesięcioletnie zwolnienie podatkowe na sfinansowanie budowy. Wolno stojąca dzwonnica z połowy czternastego wieku ma podstawę dziewięć na dziewięć metrów, mur grubości dwóch metrów i sześćdziesięciu centymetrów u dołu, a metra dwudziestu u góry, sto czterdzieści stopni, ponad trzydzieści metrów wysokości i hełm w kształcie piramidy wysoki na jedenaście metrów. 8 czerwca 1985 roku, a potem ponownie 24 maja 1988, w tym samym miejscu odkryto tu skarb: blisko siedem tysięcy siedemset srebrnych monet, trzydzieści dziewięć złotych florenów i koronę ważącą pięćset osiemdziesiąt siedem gramów, wysoką na sześćdziesiąt dwa milimetry, złożoną z dziesięciu segmentów, pierwotnie ze stu dziewięćdziesięcioma pięcioma kamieniami, z których zachowało się sto dwanaście. W 1732 roku działało tu dwieście dwadzieścia warsztatów rzemieślniczych w trzydziestu ośmiu branżach, a w 1840 mieszkało w mieście około czterech tysięcy osób. Fabrykę tytoniu założono około 1711 roku, porcelany w 1742, jedwabiu w 1750; zamek odnotowano w 1266, a Dom Kupców w 1283.",
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

  districtsHeading: "Do których części Środy Śląskiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu ośmiu wsi w gminie — a gmina ma ponad dwieście piętnaście kilometrów kwadratowych i mieszka w niej więcej ludzi poza miastem niż w nim. Do Brodna, Bukówka, Cesarzowic, Chwalimierza i Ciechowa też przyjadę, bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Środę Śląską też przyjadę",
  nearbyParagraphs: [
    "Miękinia jest stąd około czternastu kilometrów, Prochowice i Brzeg Dolny po dwadzieścia, Kąty Wrocławskie dwadzieścia pięć, Legnica i Wrocław po trzydzieści z okładem. Wszędzie dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Wrocław", "Legnica", "Prochowice", "Kąty Wrocławskie", "Brzeg Dolny"],

  about: blokOMnie("do Środy Śląskiej", "w Środzie Śląskiej i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Środy Śląskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu ośmiu wsi w gminie, łącznie z Brodnem, Bukówkiem, Cesarzowicami, Chwalimierzem i Ciechowem. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto podać pełną nazwę z członem „Śląska”: powiat średzki istnieje zarówno na Dolnym Śląsku, jak i w Wielkopolsce, a Środa Wielkopolska to zupełnie inne miasto — człon dodano w 1946 roku właśnie po to, żeby je rozróżnić. Cesarzowice są też w gminie Kąty Wrocławskie, więc przy tej wsi warto dodać gminę.",
    },
    ...faqWspolne("w Środzie Śląskiej"),
    {
      question: "Kuchnia mnie męczy, choć nie gotuję dużo. Skąd to się bierze?",
      answer:
        "Często nie z pracy, tylko z liczby drobnych decyzji. Od czego zacząć zmywanie, gdzie odłożyć brudny nóż, z której strony podpisać pojemnik, w jakim porządku pisać listę — każda jest mikroskopijna, ale zapada kilkadziesiąt razy w tygodniu. W Środzie Śląskiej około 1235 roku spisano lokalną odmianę prawa magdeburskiego i przez dwa stulecia lokowano na niej sto piętnaście miast: nikt nie wymyślał reguł osobno dla każdego. Najważniejsze jest przy tym to, że procedura nie musi być najlepsza — musi być ustalona. Warto ją sprawdzać przy zmianach, a nie przy każdym użyciu.",
    },
    {
      question: "Czy gotowanie z prowadzeniem krok po kroku ma jakieś wady?",
      answer:
        "Ma jedną i powiem ją wprost, choć działa przeciwko mnie: kto gotuje wyłącznie z prowadzenia, ten nie ćwiczy własnych decyzji, i po roku może się czuć niepewnie bez ekranu. Zaleta jest realna — to gotowa procedura, przy której nie decydujesz o kolejności, bo ktoś zdecydował wcześniej. Najuczciwiej jest używać obu trybów: przepisów z prowadzeniem wtedy, gdy zależy na wyniku bez myślenia, i własnego gotowania wtedy, gdy jest czas.",
    },
  ],

  geo: { lat: 51.1667, lng: 16.6 },
};
