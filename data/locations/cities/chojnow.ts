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
 * CHOJNÓW — powiat legnicki, woj. dolnośląskie.
 * MIASTO JEST SAMODZIELNĄ GMINĄ MIEJSKĄ.
 * MIASTO: 12 289 mieszkańców (GUS 31.12.2024), 5,3 km²,
 *   gęstość 2 310,0 os./km².
 * ⚠⚠⚠ PUŁAPKA: OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA
 *   CHOJNÓW (9 456 osób, 231,0 km², gęstość 41 os./km²),
 *   KTÓRA MIASTA NIE OBEJMUJE. NIE SUMUJĘ TYCH LICZB.
 *   ⚠⚠ GMINA JEST 43,6× WIĘKSZA POWIERZCHNIOWO,
 *   A JEJ GĘSTOŚĆ 56× MNIEJSZA.
 *   ⚠⚠⚠ TEGO ZESTAWIENIA NIE UŻYWAM JAKO KĄTA —
 *   gęstość i przestrzeń to obszar zajęty (Koluszki,
 *   Tychowo, Cedynia, Nowe Warpno). Podaję jako fakt.
 *   TWARDA GRANICA.
 * ⚠ GEO: 51,2700 / 15,9367.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY:
 *   CHOJNÓW ≠ CHOJNICE (pomorskie) — duże miasto,
 *   dominuje w wynikach. ≠ CHOJNA (zachodniopomorskie,
 *   JUŻ OPISANA W TYM SERWISIE). ≠ wieś CHOJNÓW
 *   k. Piaseczna (mazowieckie) — od niej CHOJNOWSKI
 *   PARK KRAJOBRAZOWY, który przejmuje większość
 *   wyników turystycznych. ≠ CHOCIANÓW — miasto
 *   19 km stąd, W TYM SAMYM POWIECIE, mylone lokalnie.
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠ ODMIANA: „w CHOJNOWIE", „do CHOJNOWA".
 *   PRZYMIOTNIK: CHOJNOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny z Chojnowa".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1272 — pierwszy raz nazwany miastem („civitas"),
 *   forma „Haynow".
 * — 1333 — nadanie praw miejskich.
 * — Położony na odnodze Via Regia — stąd ranga handlowa.
 * — XIV w. — rozbudowa związana z eksploatacją złota
 *   i handlem solą.
 * — ⚠⚠⚠ ZNISZCZENIA PRZEZ HUSYTÓW W XV W. („przeżyło
 *   zaledwie kilkunastu mieszczan") NIE UŻYWAM —
 *   wątek militarny i wyznaniowy naraz. TWARDA GRANICA.
 * — 1651 — pożar; odbudowa trwała do 1659 r. (osiem lat).
 *   ⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — „co zostało
 *   po pożarze" zajęte (Polanów).
 * — Koniec XIX w. — cukrownia, papiernia, fabryka
 *   rękawiczek.
 * — Rzeka Skora; wzmiankowana Młynówka i młyny.
 *   ⚠ LICZBY MŁYNÓW NIE USTALONO.
 * — Ulice o nazwach zawodowych: Tkacka, Chmielna.
 *   Fontanna Tkacza na rynku. Najstarsze budowle rynku
 *   z XVI w.
 * — ⚠ ROKU OTWARCIA KOLEI NIE USTALONO. Chojnów leży
 *   na linii nr 275 Wrocław–Legnica–Bolesławiec,
 *   ale roku nie potwierdzono. NIE PODAJĘ.
 * — ⚠ ROKU BUDOWY RATUSZA NIE USTALONO.
 *
 * ZAMEK — FAKTY UŻYTE:
 * — Zbudowany w drugiej połowie XIII w.; przebudowy
 *   XIV/XV w., 1546, koniec XVIII w., połowa XX w.
 * — WIEŻA OGNIOWA z I poł. XVI w., ŚREDNICA 15,8 M.
 * — Przebudowa renesansowa w XVI w.
 * — ⚠⚠ ZERO WĄTKU OBRONNEGO — opisuję jako budowlę.
 *
 * ⚠⚠ KOŚCIÓŁ ŚW. PIOTRA I PAWŁA: budowa od XIV w.;
 *   ołtarz ukończony do 1400; dzwon odlany 1405;
 *   chór 1413; sklepienie nawy głównej 1468;
 *   do 1468 udokumentowanych OSIEM OŁTARZY;
 *   1469 — kaplica południowa ufundowana przez cech
 *   sukienników; 1543 — kaplica północna rodziny
 *   Bożywojów; 1651 — pożar, odbudowa do 1659.
 *   ⚠ WYMIARÓW NIE USTALONO.
 *   ⚠⚠⚠ NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠ KAPLICY CECHU SUKIENNIKÓW NIE UŻYWAM JAKO KĄTA —
 *   „każdy odpowiada za swój kawałek" prowadzi
 *   w obszar podziału obowiązków, a to temat rodzinny,
 *   którego nie chcę ruszać na stronie sprzedażowej.
 *   ⚠⚠ ORGANÓW (1912, 38 głosów, 2 manuały + pedał,
 *   72 piszczałki w prospekcie) NIE UŻYWAM —
 *   wyposażenie kościelne.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — BASZTA TKACZY:
 *   HEŁM BASZTY ODNAWIANO W LATACH 1749, 1843 I 1967.
 *   ⚠⚠ TRZY RENOWACJE W 218 LAT — średnio co
 *   siedemdziesiąt kilka lat, przez całe stulecia.
 *   ⚠ TO JEST MÓJ RACHUNEK Z TRZECH DAT ŹRÓDŁOWYCH —
 *   podaję opisowo („mniej więcej co siedemdziesiąt
 *   lat"), nigdy jako daną ze źródła.
 *   ⚠ Baszta zbudowana ok. 1400 r. (źródło podaje też
 *   I poł. XV w. — rozbieżność w tym samym tekście).
 *   Ośmioboczna nadbudówka: 1651. Muzeum w baszcie
 *   otwarto w 1908 r.
 *   ⚠⚠⚠ WYSOKOŚĆ SPRZECZNA: 17 M albo „blisko 15 M".
 *   PISZĘ „kilkanaście metrów" I NIE PODAJĘ LICZBY.
 *   TO JEST CAŁY KĄT.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NA LIŚCIE MRiRW
 *   NIE MA WPISU ODNOSZĄCEGO SIĘ DO CHOJNOWA
 *   ANI DO POWIATU LEGNICKIEGO.
 *   ⚠⚠⚠ NIE PISZĘ „GMINA NIE MA PRODUKTÓW
 *   TRADYCYJNYCH". TEMAT NIE POJAWIA SIĘ W TEKŚCIE.
 * ⚠ ODLEGŁOŚCI SZACUNKOWE (±3 km): Chocianów ok. 19 km,
 *   Złotoryja ok. 19, Legnica ok. 22, Lubin ok. 27,
 *   Bolesławiec ok. 28, Prochowice ok. 35.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: TRZY RENOWACJE — o tym, że rzeczy nie trwają
 * dlatego, że są dobrze zrobione, tylko dlatego,
 * że ktoś regularnie do nich wraca.
 * Kąt od Baszty Tkaczy: hełm odnawiano w 1749, 1843
 * i 1967 r. — mniej więcej co siedemdziesiąt lat,
 * przez ponad dwa stulecia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Baszta Tkaczy stoi w Chojnowie od około 1400 r.,
 *   a jej hełm odnawiano w 1749, 1843 i 1967 —
 *   mniej więcej co siedemdziesiąt lat,
 * — ŻE POWODEM, DLA KTÓREGO NADAL STOI, NIE JEST
 *   JAKOŚĆ WYKONANIA, TYLKO TRZY POWROTY — to jest
 *   rdzeń. Bez nich nie byłoby o czym pisać,
 * — ⚠⚠ ŻE NA ZAKUPY PATRZYMY ODWROTNIE: pytamy, czy coś
 *   jest solidne, czy „starczy na lata", czy warto
 *   dopłacić za lepszą jakość. I prawie nigdy nie
 *   pytamy, co trzeba będzie z tym robić raz na jakiś
 *   czas, żeby rzeczywiście starczyło,
 * — ⚠⚠ ŻE W KUCHNI TO PYTANIE JEST WYJĄTKOWO KONKRETNE,
 *   bo prawie każda rzecz ma swój cykl powrotu: nóż
 *   trzeba naostrzyć, deskę natłuścić, uszczelkę
 *   wymienić, sitko przeczyścić. Nic z tego nie jest
 *   trudne i prawie nic z tego nie jest robione,
 * — ⚠⚠ ŻE DROGI SPRZĘT BEZ POWROTÓW STARZEJE SIĘ
 *   SZYBCIEJ NIŻ TANI Z POWROTAMI — i to jest jedyny
 *   uczciwy sposób, żeby porównać dwie rzeczy przed
 *   zakupem,
 * — ⚠⚠ ŻE NAJTRUDNIEJSZE W CYKLU NIE JEST SAMO
 *   DZIAŁANIE, TYLKO PAMIĘTANIE — bo odstępy są długie
 *   i nic nie przypomina. W Chojnowie odstęp wynosił
 *   siedemdziesiąt lat i za każdym razem robił to ktoś
 *   inny,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE WSZYSTKO WARTO
 *   UTRZYMYWAĆ. Część rzeczy taniej jest wymienić,
 *   niż obsługiwać — i to jest rozsądna decyzja,
 *   pod warunkiem że się ją podejmuje, a nie odkłada,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie też ma swój cykl
 *   powrotów i nie zamierzam tego pomijać. Ma części,
 *   które się zużywają, i wymaga przeglądu. MÓWIĘ TO
 *   WPROST, bo to jest część kosztu, a nie drobiazg.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAPRAWIĆ CZY WYMIENIĆ — kąt zajęty
 *   (Dziwnów). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o DECYZJĘ: naprawiać czy kupić nowe; TUTAJ o TO,
 *   ŻE TRWAŁOŚĆ JEST FUNKCJĄ REGULARNYCH POWROTÓW.
 *   ⚠⚠ Jedno zdanie o tym, że część rzeczy taniej
 *   wymienić, jest dopuszczalne JAKO ZASTRZEŻENIE,
 *   ale nie rozwijam go i nie robię z tego tematu.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO GĘSTOŚCI I PRZESTRZENI — obszar zajęty
 *   (Koluszki, Tychowo, Cedynia, Nowe Warpno).
 *   Zestawienia 5,3 km² z 231 km² NIE UŻYWAM jako
 *   morału. Podaję liczby wyłącznie w sekcji rodzinnej.
 * — ⚠⚠ ZERO NIE MA KOŃCA, JEST RYTM — kąt zajęty
 *   (Maszewo). ⚠ Tam chodzi o TO, ŻE GOTOWANIA NIE DA
 *   SIĘ SKOŃCZYĆ; TUTAJ o KONSERWACJI PRZEDMIOTÓW.
 *   Nie piszę o gotowaniu jako o cyklu.
 * — ⚠⚠ ZERO OSIADANIA I ROZJEŻDŻANIA SIĘ SYSTEMU —
 *   ten obszar zostawiłem wolny przy Tychowie i teraz
 *   go zajmuję, ale WĄSKO: piszę o PRZEDMIOTACH,
 *   nie o systemie organizacji kuchni.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie piszę o tym, których rzeczy się
 *   używa, tylko o tym, co z nimi robić.
 * — ⚠⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia).
 *   ⚠ Tam chodzi o TO, ŻE MAŁE RZECZY ZASŁUGUJĄ
 *   NA UWAGĘ; TUTAJ o CZĘSTOTLIWOŚCI POWROTÓW.
 *   Nie piszę o rozmiarze przedmiotów.
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty (Kamienna
 *   Góra, ta sama fala).
 * — ⚠ ZERO PUNKTÓW WEJŚCIA — kąt zajęty (Moryń).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO HARMONOGRAMU KONSERWACJI DLA CZYTELNIKA —
 *   wymieniam przykłady czynności, ale NIE PODAJĘ
 *   ODSTĘPÓW ANI CZĘSTOTLIWOŚCI.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ pisząc o czyszczeniu sitka i deski NIE MÓWIĘ
 *   NIC o higienie, bakteriach ani o tym, co jest
 *   bezpieczne. Piszę wyłącznie o trwałości przedmiotu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO HUSYTÓW I ZNISZCZENIA MIASTA W XV W.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY
 *   (poza „Haynow" z 1272 r. jako zapisem źródłowym).
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościoła, ołtarzy,
 *   kaplic i organów nie opisuję.
 * — ⚠⚠ ZERO ZAMKU JAKO TEMATU OBRONNEGO.
 * — ⚠ ZERO POŻARU JAKO WĄTKU EMOCJONALNEGO.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ miasta i gminy wiejskiej o tej samej
 *   nazwie — to dwie odrębne jednostki.
 * — NIE PODAJĘ wysokości Baszty Tkaczy — źródła podają
 *   17 m albo „blisko 15 m".
 * — NIE PODAJĘ odstępu siedemdziesięciu lat jako danej
 *   ze źródła — to mój rachunek z trzech dat.
 * — NIE PODAJĘ roku otwarcia kolei — nie ustalono.
 * — NIE PODAJĘ roku budowy ratusza — nie ustalono.
 * — NIE PODAJĘ liczby młynów ani warsztatów
 *   sukienniczych — nie ustalono.
 * — NIE PODAJĘ wymiarów kościoła.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE OPISUJĘ herbu.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNYCH ODSTĘPÓW KONSERWACJI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chojnów leży w powiecie legnickim, nad Skorą;
 *   miasto liczy 12 289 mieszkańców (GUS, 31.12.2024)
 *   na 5,3 km² i jest samodzielną gminą miejską;
 *   obok istnieje odrębna gmina wiejska o tej samej
 *   nazwie, licząca 9 456 osób na 231,0 km²,
 * — w 1272 r. miejscowość po raz pierwszy nazwano
 *   miastem, zapisując jej nazwę jako „Haynow",
 *   a prawa miejskie nadano w 1333 r.; miasto leżało
 *   na odnodze Via Regia, a w XIV w. rozwijało się
 *   dzięki eksploatacji złota i handlowi solą,
 * — w 1651 r. miasto strawił pożar, po którym odbudowa
 *   trwała do 1659 r.,
 * — Baszta Tkaczy powstała około 1400 r.; ośmioboczną
 *   nadbudówkę dostawiono w 1651 r., a jej hełm
 *   odnawiano w 1749, 1843 i 1967 r.; muzeum w baszcie
 *   otwarto w 1908 r.,
 * — zamek zbudowano w drugiej połowie XIII w.
 *   i przebudowywano w XIV/XV w., w 1546 r., pod koniec
 *   XVIII w. i w połowie XX w.; jego wieża ogniowa
 *   z pierwszej połowy XVI w. ma 15,8 m średnicy,
 * — najstarsze budowle rynku pochodzą z XVI w.,
 *   a na rynku stoi Fontanna Tkacza; ulice noszą nazwy
 *   Tkacka i Chmielna,
 * — pod koniec XIX w. powstały w mieście cukrownia,
 *   papiernia i fabryka rękawiczek.
 */
export const CHOJNOW: CityContent = {
  slug: "chojnow",
  h1: "Thermomix Chojnów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chojnów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Chojnowie (powiat legnicki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chojnów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Chojnowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chojnowa w powiecie legnickim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w okolicy.",

  highlights: highlightyStandardowe("Chojnów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Baszta stoi od 1400 roku. Jej hełm odnawiano trzy razy — w 1749, 1843 i 1967.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chojnowie – jak wygląda prezentacja?",
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
      id: "trzy-renowacje",
      heading: "Trzy daty, dzięki którym to jeszcze stoi",
      paragraphs: [
        "Baszta Tkaczy w Chojnowie ma kilkanaście metrów i stoi mniej więcej od 1400 roku. Ośmioboczną nadbudówkę dostawiono jej w 1651, a muzeum otwarto w niej w 1908.",
        "Najciekawsze są jednak trzy inne daty. Hełm baszty odnawiano w 1749, w 1843 i w 1967 roku — mniej więcej co siedemdziesiąt lat, przez ponad dwa stulecia.",
        "To nie jakość wykonania sprawiła, że ta wieża jeszcze stoi. Sprawiły to trzy powroty. Gdyby któregoś zabrakło, nie byłoby dziś o czym pisać.",
        "Na zakupy patrzymy dokładnie odwrotnie.",
        "Pytamy, czy coś jest solidne. Czy starczy na lata. Czy warto dopłacić za lepszą jakość, bo „na dłużej wyjdzie taniej”. To są sensowne pytania i zadaję je sama. Tylko prawie nigdy nie pada to drugie: co trzeba będzie z tym robić raz na jakiś czas, żeby rzeczywiście starczyło.",
        "W kuchni to pytanie jest zaskakująco konkretne, bo prawie każda rzecz ma swój cykl powrotu.",
        "Nóż trzeba naostrzyć. Drewnianą deskę natłuścić. Uszczelkę wymienić. Sitko przeczyścić na wylot, a nie z wierzchu. Żadna z tych czynności nie jest trudna, żadna nie zajmuje dużo czasu — i prawie żadna nie jest robiona, dopóki coś nie przestanie działać.",
        "Wniosek jest przy tym dość bezlitosny dla marketingu: drogi sprzęt bez powrotów starzeje się szybciej niż tani z powrotami. I to jest chyba jedyny uczciwy sposób, żeby porównać dwie rzeczy przed kupieniem — nie po cenie i nie po materiale, tylko po tym, czy będziecie do tego wracać.",
        "Najtrudniejsze w całym cyklu nie jest zresztą samo działanie. Najtrudniejsze jest pamiętanie, bo odstępy są długie i nic o nich nie przypomina. W Chojnowie odstęp wynosił siedemdziesiąt lat i za każdym razem robił to ktoś zupełnie inny — nikt nie odnawiał tego hełmu dwa razy w życiu.",
        "Uczciwie o drugiej stronie: nie wszystko warto utrzymywać. Część rzeczy taniej jest po prostu wymienić, niż obsługiwać, i to jest zupełnie rozsądna decyzja — pod warunkiem, że się ją podejmuje świadomie, a nie odkłada, aż sprawa rozstrzygnie się sama.",
        "Na koniec o urządzeniu, i akurat tu nie zamierzam niczego pomijać.",
        "Thermomix też ma swój cykl powrotów. Ma części, które się zużywają, i wymaga przeglądu — to jest część kosztu posiadania, a nie drobiazg do przeczytania w instrukcji. Mówię o tym przed zakupem, bo po zakupie mówienie o tym wygląda zupełnie inaczej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Chojnowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie pytania o serwis, części i przeglądy — zapiszcie je sobie przed spotkaniem. To są pytania, na które najlepiej odpowiadać przed zakupem, nie po.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Chojnowie"),
    sekcjaRaty("w Chojnowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chojnowa",
      paragraphs: [
        "Chojnów leży w powiecie legnickim, nad Skorą, i liczy ponad dwanaście tysięcy mieszkańców (GUS, 31.12.2024) na pięciu i trzech dziesiątych kilometra kwadratowego; jest samodzielną gminą miejską, a obok istnieje odrębna gmina wiejska o tej samej nazwie, licząca blisko dziewięć i pół tysiąca osób na dwustu trzydziestu jeden kilometrach. W 1272 roku miejscowość po raz pierwszy nazwano miastem, zapisując nazwę jako „Haynow”, a prawa miejskie nadano w 1333. Miasto leżało na odnodze Via Regia, a w czternastym wieku rozwijało się dzięki eksploatacji złota i handlowi solą. W 1651 strawił je pożar, po którym odbudowa trwała do 1659. Baszta Tkaczy powstała około 1400 roku; ośmioboczną nadbudówkę dostawiono jej w 1651, hełm odnawiano w 1749, 1843 i 1967, a muzeum otwarto w niej w 1908. Zamek zbudowano w drugiej połowie trzynastego wieku i przebudowywano czterokrotnie — jego wieża ogniowa z pierwszej połowy szesnastego wieku ma piętnaście metrów osiemdziesiąt średnicy. Najstarsze budowle rynku pochodzą z szesnastego wieku, stoi tam Fontanna Tkacza, a ulice noszą nazwy Tkacka i Chmielna. Pod koniec dziewiętnastego wieku powstały w mieście cukrownia, papiernia i fabryka rękawiczek.",
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

  districtsHeading: "Do których części Chojnowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi w okolicznej gminie wiejskiej — a jest rozległa, ponad dwieście trzydzieści kilometrów kwadratowych. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Chojnów też przyjadę",
  nearbyParagraphs: [
    "Chocianów i Złotoryja są około dziewiętnastu kilometrów stąd, Legnica dwadzieścia dwa, Lubin dwadzieścia siedem, a Bolesławiec dwadzieścia osiem. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Legnica", "Złotoryja", "Chocianów", "Lubin", "Bolesławiec"],

  about: blokOMnie("do Chojnowa", "w Chojnowie", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chojnowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Chojnów w powiecie legnickim na Dolnym Śląsku — nie o Chojnice w pomorskiem, nie o Chojnę w zachodniopomorskiem i nie o wieś Chojnów pod Piasecznem, od której nazwano Chojnowski Park Krajobrazowy. Lokalnie myli się go też z Chocianowem, oddalonym o dziewiętnaście kilometrów.",
    },
    ...faqWspolne("w Chojnowie"),
    {
      question: "Jak wybrać sprzęt do kuchni, żeby naprawdę długo służył?",
      answer:
        "Patrząc nie tylko na jakość, ale i na to, co trzeba będzie z nim robić raz na jakiś czas. Baszta Tkaczy w Chojnowie stoi od około 1400 roku nie dlatego, że była dobrze zbudowana, tylko dlatego, że jej hełm odnawiano w 1749, 1843 i 1967. Drogi sprzęt, do którego nikt nie wraca, starzeje się szybciej niż tani, o który ktoś dba — nóż trzeba naostrzyć, deskę natłuścić, uszczelkę wymienić.",
    },
    {
      question: "Czy Thermomix wymaga serwisu i wymiany części?",
      answer:
        "Tak — ma części, które się zużywają, i wymaga przeglądu. Mówię o tym przed zakupem, a nie po, bo to jest część kosztu posiadania, a nie drobiazg z instrukcji. Jeśli macie pytania o serwis i części, warto je zapisać przed spotkaniem — odpowiem na wszystkie na miejscu.",
    },
  ],

  geo: { lat: 51.27, lng: 15.9367 },
};
