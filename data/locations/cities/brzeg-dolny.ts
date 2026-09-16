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
 * BRZEG DOLNY — powiat wołowski, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 12 476 mieszkańców (GUS 31.12.2024), 17,2 km²,
 *   gęstość 725,3 os./km².
 * CAŁA GMINA: 16 050 osób, 94,4 km², 13 wsi.
 * ⚠⚠ NIE MIESZAM TYCH LICZB. TWARDA GRANICA.
 * ⚠ WYSOKOŚĆ: 100–159 m n.p.m.
 * ⚠ GEO: 51,2728 / 16,7086.
 * ⚠⚠ FAKT: W POWIECIE WOŁOWSKIM TO BRZEG DOLNY JEST
 *   NAJWIĘKSZYM MIASTEM (12 476), NIE WOŁÓW (11 947) —
 *   choć siedzibą powiatu jest Wołów.
 *   ⚠ PODAJĘ JAKO FAKT, nie robię z tego kąta.
 *
 * ⚠⚠⚠ ODMIANA — SPRAWDZONA W WIELKIM SŁOWNIKU
 *   ORTOGRAFICZNYM PWN:
 *   D. BRZEGU DOLNEGO, Ms. W BRZEGU DOLNYM.
 *   ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   ⚠⚠⚠ PWN DOPUSZCZA PRZYMIOTNIK „BRZESKI" ALBO
 *   „DOLNOBRZESKI". ⚠⚠⚠ NIGDY NIE UŻYWAM „BRZESKI" —
 *   czyta się jako przymiotnik od Brzegu w opolskim.
 *   NAJLEPIEJ NIE UŻYWAM ŻADNEGO — piszę „w Brzegu
 *   Dolnym", „z Brzegu Dolnego". TWARDA GRANICA.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY:
 *   BRZEG DOLNY ≠ BRZEG (miasto powiatowe
 *   w woj. OPOLSKIM, ok. 35 tys. mieszkańców, nad tą
 *   samą Odrą, ze słynnym zamkiem Piastów śląskich).
 *   ⚠⚠⚠ Każde zapytanie „Brzeg zamek", „Brzeg historia",
 *   „Brzeg Odra" trafia w opolskie. PUŁAPKA PEWNA.
 *   ⚠⚠ STOPIEŃ WODNY „BRZEG DOLNY" LEŻY WE WSI WAŁY,
 *   NIE W BRZEGU DOLNYM — nazwa obiektu myli lokalizację;
 *   elektrownia nazywa się „Wały".
 *   ⚠ W gminie pary bliźniacze: POGALEWO MAŁE
 *   i POGALEWO WIELKIE oraz ŻERKÓW i ŻERKÓWEK.
 *   ⚠ ŻERKÓW w tej gminie ≠ ŻERKÓW (miasto
 *   w wielkopolskim).
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠⚠ PRAWA MIEJSKIE: 1663, PRZYWRÓCONE W 1954 R.
 *   ⚠ To nie jest sprzeczność, tylko dwa zdarzenia.
 *   Baron Georg Abraham von Dyhrn nabył wieś w 1660 r.,
 *   trzy lata przed nadaniem — spójne.
 *   ⚠⚠ LICZBY JARMARKÓW Z PRZYWILEJU NIE USTALONO —
 *   motyw jest, liczby nie ma. NIE PODAJĘ.
 * — 1261 — pierwsza wzmianka o wsi Warzyń.
 * — 1353 — Brzeg wymieniony w Księdze Ziemskiej
 *   Księstwa Wrocławskiego.
 * — ⚠ CMENTARZYSKA Z 88 URNAMI NIE WYMIENIAM — groby.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PROM I MOST:
 *   PROM PRZEZ ODRĘ KURSOWAŁ TU OD 1491 R.
 *   DO 28 PAŹDZIERNIKA 2013 R. — 522 LATA.
 *   ⚠ Dwa niezależne źródła mówią „ponad 500 lat" —
 *   liczba 522 jest zgodna i bezpieczna.
 *   ⚠⚠ MOST KOLEJOWY PRZEZ ODRĘ STANĄŁ OBOK JUŻ
 *   W 1874 R. — 139 LAT WCZEŚNIEJ. Długość 300 m,
 *   dwa przęsła: starsze kratownicowe (od kilkunastu lat
 *   nieużytkowane) i nowsze blachownicowo-kratownicowe.
 *   ⚠⚠ ŹRÓDŁO WSPOMINA O ZNISZCZENIU W 1945 I ODBUDOWIE
 *   W 1948 — ⚠⚠⚠ POMIJAM. Piszę neutralnie:
 *   „dwa przęsła z dwóch różnych epok".
 *   ⚠ Most drogowy nazywa się Most Wolności;
 *   DŁUGOŚCI NIE USTALONO.
 *   ⚠ Inne źródło podaje, że bród i przeprawa istniały
 *   już pod koniec XIV w. — PODAJĘ 1491 jako datę
 *   udokumentowaną promu.
 *   TO JEST CAŁY KĄT.
 *
 * STOPIEŃ WODNY I ŚLUZA — FAKTY UŻYTE:
 * — Budowa 1954–1959. Zlewnia zamykana ok. 26 381 km².
 *   Jaz zasuwowo-klapowy z estakadą; elektrownia wodna
 *   „Wały"; budowla hydrotechniczna II klasy ważności;
 *   ok. 5 km w górę Odry, we wsi Wały.
 * — ŚLUZA: długość komory 225 m, szerokość 12 m,
 *   km 281 Odry.
 *   ⚠⚠ PROPORCJI 18,75:1 NIE UŻYWAM JAKO KĄTA —
 *   „długość ciągu roboczego" to układ kuchni,
 *   obszar zajęty (Tychowo, Płoty, Koluszki).
 *   Podaję wymiary jako fakt.
 *   ⚠ SPADU ŚLUZY, LICZBY PRZĘSEŁ JAZU I MOCY
 *   ELEKTROWNI NIE USTALONO.
 *
 * PARK — FAKTY UŻYTE:
 * — Park miejski (von Hoymów): 67 ha, styl angielski,
 *   projektant Carl Gotthard Langhans — autor Bramy
 *   Brandenburskiej; przebudowa na przełomie XVIII
 *   i XIX w.
 * — Dęby pomnikowe: blisko 400-letnie, obwód pnia
 *   około 5 m.
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — obwody pni to obszar
 *   zajęty (Chojna: co rośnie niezauważalnie;
 *   Jelcz-Laskowice, ta sama fala).
 * — ⚠⚠ GROBOWCA VON HOYMÓW, KAPLICY I DROGI KRZYŻOWEJ
 *   NIE WYMIENIAM — groby i wątek wyznaniowy.
 * — Pałac barokowy nad Odrą, przebudowany
 *   klasycystycznie przez Karla Georga von Hoym
 *   według projektu Langhansa.
 *   ⚠ WYMIARÓW PAŁACU NIE USTALONO.
 *
 * ⚠ KOLEJ: 1874 — budowa stacji Brzeg Dolny na linii
 *   nr 273 (Wrocław Główny – Szczecin), km 30,321.
 *   ⚠ Tabela w źródle podaje przy moście też 1873 —
 *   PISZĘ 1874, zgodnie z rokiem budowy stacji.
 *
 * ⚠⚠⚠ ZAKŁAD CHEMICZNY — POMIJAM W CAŁOŚCI.
 *   Temat środowiskowo sporny. ⚠⚠ ZDOMINUJE KAŻDE
 *   WYSZUKIWANIE HASŁA „BRZEG DOLNY".
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠⚠⚠ PORTU RZECZNEGO W BRZEGU DOLNYM NIE MA —
 *   żadne źródło go nie potwierdza. NIE PISZĘ O PORCIE.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: gmina Brzeg Dolny
 *   NIE MA ani jednego z 52 wpisów dolnośląskich.
 *   ⚠⚠⚠ NIE PISZĘ TEGO W TEKŚCIE. TEMAT NIE POJAWIA SIĘ.
 * ⚠ ODLEGŁOŚCI: Wołów 9,3 km, Oborniki Śląskie 10,4,
 *   Miękinia 11,1, Środa Śląska 16,0, Prusice 19,0.
 *   ⚠ TO ODLEGŁOŚCI MIĘDZY SIEDZIBAMI GMIN.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: STO TRZYDZIEŚCI DZIEWIĘĆ LAT OBOK SIEBIE —
 * o tym, że nowe rozwiązanie nie kasuje starego
 * automatycznie, bo zwykle służą do czegoś innego.
 * Kąt od przepraw w Brzegu Dolnym: most kolejowy stanął
 * w 1874 r., a prom woził dalej — jeszcze przez sto
 * trzydzieści dziewięć lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że prom przez Odrę kursował w Brzegu Dolnym
 *   od 1491 r. do 28 października 2013 r., czyli 522 lata,
 * — ŻE MOST KOLEJOWY PRZEZ TĘ SAMĄ RZEKĘ, W TYM SAMYM
 *   MIEJSCU, STANĄŁ JUŻ W 1874 — i prom woził dalej
 *   przez kolejnych sto trzydzieści dziewięć lat.
 *   To jest rdzeń,
 * — ⚠⚠ ŻE NIE BYŁ TO UPÓR ANI ZANIEDBANIE: most był
 *   kolejowy. Pociąg przejeżdżał nad rzeką od półtora
 *   wieku, a człowiek z wozem dalej potrzebował promu.
 *   Dwie przeprawy służyły do czegoś innego,
 * — ⚠⚠ ŻE PRZY SPRZĘCIE DO KUCHNI ZAKŁADAMY ODWROTNIE
 *   I ROBIMY TO ODRUCHOWO: skoro nowe umie więcej,
 *   to stare jest zbędne. Kupuje się jedno, odkłada
 *   drugie, a po miesiącu okazuje się, że to drugie
 *   jednak wraca na blat,
 * — ⚠⚠ ŻE TO NIE JEST PORAŻKA ZAKUPU. To znaczy tylko
 *   tyle, że dwie rzeczy robią coś innego, choć na
 *   pierwszy rzut oka robią to samo,
 * — ⚠⚠ ŻE PYTANIE, KTÓRE TO ROZSTRZYGA, JEST WĄSKIE:
 *   nie „co z tych dwóch jest lepsze", tylko „w jakiej
 *   sytuacji sięgam po jedno, a w jakiej po drugie".
 *   Jeśli odpowiedź istnieje, obie rzeczy mają sens.
 *   Jeśli nie istnieje — jedna z nich rzeczywiście
 *   jest zbędna,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CZASEM STARE NAPRAWDĘ
 *   TRZEBA ODSTAWIĆ. Prom w końcu przestał kursować
 *   i nikt za nim nie tęskni — most drogowy robi to,
 *   co robił prom, tylko lepiej. Chodzi o to, żeby
 *   rozstrzygnąć to po fakcie, a nie z góry,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zastąpi
 *   wszystkiego i nie twierdzę, że zastąpi. Część
 *   rzeczy zostanie na blacie obok niego i to jest
 *   normalne. MÓWIĘ TO WPROST — sprzedaż, która zaczyna
 *   się od „wyrzucisz resztę", kończy się rozczarowaniem
 *   po miesiącu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU I TEGO, CZEGO SIĘ
 *   UŻYWA — kąt zajęty (Polanów). ⚠⚠ TO JEST NAJBLIŻSZY
 *   KĄT. Tam chodzi o TO, KTÓRYCH RZECZY SIĘ UŻYWA
 *   I ŻE LISTA JEST KRÓTKA; TUTAJ o TO, ŻE DWIE RZECZY
 *   MOGĄ WSPÓŁISTNIEĆ, BO SŁUŻĄ DO CZEGOŚ INNEGO.
 *   Nie robię przeglądu szafek i nie sugeruję niczego
 *   wyrzucać. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO DO CZEGO TO WŁAŚCIWIE SŁUŻY — kąt zajęty
 *   (Karlino). Nie pytam, czym urządzenie jest, tylko
 *   kiedy się po nie sięga.
 * — ⚠⚠⚠ ZERO NAPRAWIĆ CZY WYMIENIĆ — kąt zajęty
 *   (Dziwnów). Nie piszę o decyzji między naprawą
 *   a zakupem.
 * — ⚠⚠ ZERO TRWAŁOŚCI I POWROTÓW — kąt zajęty
 *   (Chojnów, poprzednia fala).
 * — ⚠⚠ ZERO ODLEGŁOŚCI, KTÓRA ZABIJA UŻYCIE — kąt
 *   zajęty (Suchań). Nie piszę o tym, gdzie co stoi.
 * — ⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno).
 * — ⚠⚠ ZERO UKŁADU KUCHNI I DŁUGOŚCI CIĄGU ROBOCZEGO —
 *   obszar zajęty (Tychowo, Płoty, Koluszki).
 *   Wymiarów śluzy NIE UŻYWAM jako morału.
 * — ⚠⚠ ZERO OBWODÓW PNI I TEGO, CO ROŚNIE
 *   NIEZAUWAŻALNIE — kąt zajęty (Chojna,
 *   Jelcz-Laskowice z tej samej fali).
 * — ⚠ ZERO USTALONEGO WYMIARU — kąt zajęty (Kamienna
 *   Góra).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH SPRZĘTÓW JAKO PRZYKŁADÓW —
 *   podaję WYŁĄCZNIE pytanie rozstrzygające.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZAKŁADU CHEMICZNEGO I JEGO HISTORII.
 * — ⚠⚠ ZERO ROKU 1945, ZNISZCZENIA I ODBUDOWY MOSTU
 *   W 1948, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO CMENTARZYSKA Z URNAMI I GROBOWCA VON HOYMÓW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kaplicy i drogi
 *   krzyżowej nie wymieniam.
 * — ⚠ ZERO PORTU RZECZNEGO — nie istnieje.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO PRZYMIOTNIKA „BRZESKI".
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby jarmarków z przywileju z 1663 r.
 * — NIE PODAJĘ długości Mostu Wolności.
 * — NIE PODAJĘ spadu śluzy, liczby przęseł jazu
 *   ani mocy elektrowni.
 * — NIE PODAJĘ wymiarów pałacu.
 * — NIE PISZĘ o porcie rzecznym — nie ma go.
 * — NIE PISZĘ, że stopień wodny leży w Brzegu Dolnym —
 *   leży we wsi Wały.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Brzeg Dolny leży w powiecie wołowskim, nad Odrą,
 *   na wysokości od 100 do 159 m n.p.m.; miasto liczy
 *   12 476 mieszkańców (GUS, 31.12.2024) na 17,2 km²,
 *   a cała gmina 16 050 osób na 94,4 km², z trzynastoma
 *   wsiami — i jest największym miastem swojego powiatu,
 *   choć siedzibą powiatu jest Wołów,
 * — pierwsza wzmianka o wsi Warzyń pochodzi z 1261 r.,
 *   a Brzeg wymieniono w Księdze Ziemskiej Księstwa
 *   Wrocławskiego w 1353 r.; w 1660 r. wieś nabył baron
 *   Georg Abraham von Dyhrn, a prawa miejskie nadano
 *   w 1663 r. i przywrócono w 1954 r.,
 * — prom przez Odrę kursował tu od 1491 r. do
 *   28 października 2013 r., kiedy otwarto Most
 *   Wolności — to 522 lata nieprzerwanej przeprawy;
 *   most kolejowy przez tę samą rzekę zbudowano
 *   w 1874 r., ma 300 m długości i dwa przęsła
 *   z dwóch różnych epok: starsze kratownicowe,
 *   od kilkunastu lat nieużytkowane, i nowsze
 *   blachownicowo-kratownicowe. W tym samym 1874 r.
 *   powstała stacja kolejowa na linii nr 273
 *   z Wrocławia do Szczecina,
 * — pięć kilometrów w górę rzeki, we wsi Wały, stoi
 *   stopień wodny zbudowany w latach 1954–1959:
 *   jaz zasuwowo-klapowy z estakadą, elektrownia wodna
 *   „Wały" i śluza o komorze długiej na 225 m
 *   i szerokiej na 12 m, przy 281 kilometrze Odry;
 *   stopień zamyka zlewnię o powierzchni około
 *   26 381 km²,
 * — park miejski, dawniej von Hoymów, ma 67 ha
 *   i założono go w stylu angielskim; przebudowano go
 *   na przełomie XVIII i XIX w. według projektu Carla
 *   Gottharda Langhansa — tego samego architekta,
 *   który zaprojektował Bramę Brandenburską. Rosną
 *   w nim dęby liczące blisko czterysta lat, o obwodzie
 *   pnia około pięciu metrów. Barokowy pałac nad Odrą
 *   przebudował klasycystycznie Karl Georg von Hoym,
 *   również według projektu Langhansa.
 */
export const BRZEG_DOLNY: CityContent = {
  slug: "brzeg-dolny",
  h1: "Thermomix Brzeg Dolny – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brzeg Dolny — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Brzegu Dolnym (powiat wołowski): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brzeg Dolny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brzegu Dolnym. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brzegu Dolnego w powiecie wołowskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich trzynastu wsi w gminie.",

  highlights: highlightyStandardowe("Brzeg Dolny"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Most stanął w 1874. Prom woził dalej — jeszcze przez sto trzydzieści dziewięć lat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brzegu Dolnym – jak wygląda prezentacja?",
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
      id: "prom-i-most",
      heading: "Sto trzydzieści dziewięć lat obok siebie",
      paragraphs: [
        "Prom przez Odrę kursował w Brzegu Dolnym od 1491 roku. Przestał 28 października 2013, kiedy otwarto Most Wolności. To pięćset dwadzieścia dwa lata tej samej przeprawy.",
        "Ale most przez tę rzekę stanął tu znacznie wcześniej — w 1874 roku, trzysta metrów konstrukcji na dwóch przęsłach.",
        "I prom woził dalej. Jeszcze przez sto trzydzieści dziewięć lat.",
        "Nie był to upór ani zaniedbanie. Most z 1874 roku był kolejowy. Pociąg przejeżdżał nad rzeką od półtora wieku, a człowiek z wozem — a potem z samochodem — dalej potrzebował promu. Dwie przeprawy stały obok siebie, bo służyły do czegoś innego, choć obie przenosiły na drugi brzeg.",
        "Przy sprzęcie do kuchni zakładamy dokładnie odwrotnie i robimy to zupełnie odruchowo.",
        "Skoro nowe umie więcej, to stare jest zbędne. Kupuje się jedno, odkłada drugie do dolnej szafki — a po miesiącu okazuje się, że to drugie jednak wróciło na blat. I wtedy pojawia się nieprzyjemne uczucie, że coś poszło nie tak z zakupem.",
        "Nie poszło. To znaczy tylko tyle, że dwie rzeczy robią coś innego, choć na pierwszy rzut oka robią to samo.",
        "Pytanie, które to rozstrzyga, jest bardzo wąskie i warto je zadać zamiast ogólnego „co jest lepsze”. Brzmi: w jakiej sytuacji sięgam po jedno, a w jakiej po drugie. Jeśli odpowiedź istnieje i da się ją powiedzieć na głos — obie rzeczy mają sens i obie zostają. Jeśli nie istnieje, to jedna z nich rzeczywiście jest zbędna i dopiero wtedy warto ją odstawić.",
        "Uczciwie o drugiej stronie: czasem stare naprawdę trzeba odstawić. Prom w końcu przestał kursować i nikt za nim specjalnie nie tęskni, bo most drogowy robi dokładnie to, co robił prom, tylko bez czekania. Chodzi wyłącznie o to, żeby tę decyzję podjąć po fakcie, na podstawie tego, jak się rzeczy używa — a nie z góry, w dniu zakupu.",
        "Na koniec o urządzeniu, i to jest rzecz, którą wolę powiedzieć przed sprzedażą niż po.",
        "Thermomix nie zastąpi wszystkiego i nie będę twierdzić, że zastąpi. Część rzeczy zostanie na blacie obok niego, i to jest zupełnie normalne — tak samo jak prom przy moście. Rozmowa, która zaczyna się od „wyrzucisz całą resztę”, kończy się rozczarowaniem po miesiącu, a ja wolę rozmawiać z ludźmi także po miesiącu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brzegu Dolnym?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, z czego w kuchni korzystacie codziennie — nie po to, żebym proponowała to zastąpić, tylko żeby porównanie miało sens.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brzegu Dolnym"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Brzegu Dolnego",
      paragraphs: [
        "Brzeg Dolny leży w powiecie wołowskim, nad Odrą, na wysokości od stu do stu pięćdziesięciu dziewięciu metrów nad poziomem morza. Samo miasto liczy ponad dwanaście tysięcy mieszkańców (GUS, 31.12.2024) na siedemnastu kilometrach kwadratowych, a cała gmina ponad szesnaście tysięcy osób na dziewięćdziesięciu czterech, z trzynastoma wsiami — i jest największym miastem swojego powiatu, choć siedzibą powiatu jest Wołów. Pierwsza wzmianka o wsi Warzyń pochodzi z 1261 roku, a Brzeg wymieniono w Księdze Ziemskiej Księstwa Wrocławskiego w 1353; w 1660 wieś nabył baron Georg Abraham von Dyhrn, prawa miejskie nadano w 1663, a przywrócono w 1954. Prom przez Odrę kursował tu od 1491 roku do 28 października 2013, kiedy otwarto Most Wolności. Most kolejowy przez tę samą rzekę zbudowano już w 1874 — ma trzysta metrów długości i dwa przęsła z dwóch różnych epok; w tym samym roku powstała stacja kolejowa na linii z Wrocławia do Szczecina. Pięć kilometrów w górę rzeki, we wsi Wały, stoi stopień wodny z lat 1954–1959: jaz z estakadą, elektrownia wodna i śluza o komorze długiej na dwieście dwadzieścia pięć metrów i szerokiej na dwanaście. Park miejski ma sześćdziesiąt siedem hektarów i przebudowano go na przełomie osiemnastego i dziewiętnastego wieku według projektu Carla Gottharda Langhansa — tego samego architekta, który zaprojektował Bramę Brandenburską. Rosną w nim dęby liczące blisko czterysta lat, o obwodzie pnia około pięciu metrów.",
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

  districtsHeading: "Do których części Brzegu Dolnego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzynastu wsi w gminie — także do Wałów, gdzie stoi stopień wodny. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Brzeg Dolny też przyjadę",
  nearbyParagraphs: [
    "Wołów jest około dziewięciu kilometrów stąd, Oborniki Śląskie dziesięć, Środa Śląska szesnaście, a Prusice dziewiętnaście. Do Wrocławia też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Wołów", "Oborniki Śląskie", "Środa Śląska", "Prusice", "Wrocław"],

  about: blokOMnie("do Brzegu Dolnego", "w Brzegu Dolnym", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brzegu Dolnego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzynastu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto używać pełnej nazwy: Brzeg Dolny leży w powiecie wołowskim na Dolnym Śląsku i nie jest tym samym co Brzeg w województwie opolskim, który stoi nad tą samą Odrą i jest trzy razy większy. W samej gminie są też pary Pogalewo Małe i Pogalewo Wielkie oraz Żerków i Żerkówek.",
    },
    ...faqWspolne("w Brzegu Dolnym"),
    {
      question: "Czy po zakupie Thermomiksa mogę pozbyć się reszty sprzętu?",
      answer:
        "Nie radzę i nie będę tak mówić, żeby sprzedać. Część rzeczy zostanie na blacie obok, bo robi coś innego, choć na pierwszy rzut oka robi to samo. W Brzegu Dolnym most kolejowy stanął w 1874 roku, a prom woził jeszcze przez sto trzydzieści dziewięć lat — bo służyły do czegoś innego. Warto zadać sobie pytanie „w jakiej sytuacji sięgam po jedno, a w jakiej po drugie” i rozstrzygnąć to po kilku tygodniach używania, a nie w dniu zakupu.",
    },
    {
      question: "Jak sprawdzić, czy dwa podobne sprzęty mają obok siebie sens?",
      answer:
        "Nie pytając, który jest lepszy. Sensowne pytanie brzmi: w jakiej sytuacji sięgam po jedno, a w jakiej po drugie. Jeśli potrafisz to powiedzieć na głos, obie rzeczy mają sens i obie zostają. Jeśli nie potrafisz — jedna rzeczywiście jest zbędna, i dopiero wtedy warto ją odstawić.",
    },
  ],

  geo: { lat: 51.2728, lng: 16.7086 },
};
