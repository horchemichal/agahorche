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
 * PEŁCZYCE — powiat choszczeński,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 383 mieszkańców (GUS 31.12.2024), 13,1 km²,
 *   gęstość 182,3 os./km².
 * CAŁA GMINA: 7 128 osób, 200,7 km², gęstość 36 os./km².
 * ⚠⚠⚠ RÓŻNICA 2,99× — NAJWIĘKSZA W TEJ FALI.
 *   ⚠⚠ pomeranica podaje 8 045 (2012) — ODRZUCONE.
 *   ⚠⚠⚠ NIGDY „Pełczyce to ponad siedem tysięcy" —
 *   to liczba GMINY. TWARDA GRANICA.
 * ⚠⚠ MIASTO MA NAJWIĘKSZĄ POWIERZCHNIĘ W TEJ FALI
 *   (13,1 km²) PRZY NIEMAL NAJMNIEJSZEJ LUDNOŚCI.
 * ⚠ GEO: 53,0431 / 15,3049.
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródła podają
 *   33 ALBO „30 miejscowości i 19 sołectw".
 *
 * ⚠⚠⚠ ODMIANA — PLURALIA TANTUM, PRZYPADEK TRUDNY:
 *   MIANOWNIK „PEŁCZYCE" (tylko liczba mnoga).
 *   ⚠⚠⚠ Ms. W PEŁCZYCACH, D. DO PEŁCZYC —
 *   KOŃCÓWKA ZEROWA. NIGDY „DO PEŁCZYCÓW".
 *   ⚠⚠⚠ CZASOWNIK ZAWSZE W LICZBIE MNOGIEJ:
 *   „PEŁCZYCE LEŻĄ", „PEŁCZYCE MAJĄ" —
 *   NIGDY „PEŁCZYCE LEŻY".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — wzorzec jak
 *   „do Katowic", „do Kielc".
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny z Pełczyc".
 *
 * ⚠⚠ HOMONIM: PEŁCZYCE ≠ PYRZYCE — oba w tym samym
 *   województwie, oba pluralia tantum, obie nazwy
 *   ośmioliterowe. NAJGROŹNIEJSZA PUŁAPKA.
 *   ≠ Pełcznica (Dolny Śląsk) ≠ Pełczyska ≠ Pilczyce.
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠ PRAWA MIEJSKIE: 17 MARCA 1290 R., lokacja przez
 *   margrabiego Albrechta III. ⚠ JEDNO ŹRÓDŁO, ale data
 *   dzienna sugeruje dostęp do dokumentu. PODAJĘ
 *   Z ZASTRZEŻENIEM „według Encyklopedii Pomorza
 *   Zachodniego".
 * — 1675 — pożar miasta; ocalało jedno skrzydło
 *   klasztorne.
 *   ⚠⚠⚠ TEGO NIE UŻYWAM JAKO KĄTA — kąt „co zostało
 *   po pożarze" zajęty (Polanów, poprzednia fala).
 *   PODAJĘ SAM FAKT Z DATĄ W SEKCJI RODZINNEJ.
 * — Kościół z XIII w., pocysterski; klasztor z pierwszej
 *   połowy XIV w. ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠ ZAKONU, CYSTERSÓW I ŻYCIA KLASZTORNEGO
 *   NIE WPROWADZAM. Wymieniam wyłącznie jako budowlę
 *   z datą.
 * — Herb: dąb, niedźwiedź i pagórek; zatwierdzony
 *   uchwałą nr XI/56/95 z 23 czerwca 1995 r.
 *   ⚠ ŹRÓDŁO PEWNE (numer uchwały + data dzienna).
 *   PODAJĘ.
 * — Wzniesienie Niedziałek — 112,9 m n.p.m.
 *   Wzgórze Chramowe i Wzgórze Zamkowe w Pełczycach —
 *   ⚠ BEZ WYSOKOŚCI, podaję same nazwy albo pomijam.
 * — Lesistość gminy 19 % — najniższa w tej fali;
 *   użytki rolne 70 %.
 *
 * JEZIORO PEŁCZ — FAKTY UŻYTE:
 * — ⚠⚠ POWIERZCHNI NIE PODAJĘ JAKO JEDNEJ LICZBY —
 *   źródła podają 266,6 ha ALBO 257 ha (różnica 3,7 %).
 *   Piszę „ponad dwieście pięćdziesiąt hektarów".
 * — Długość maksymalna 7 600 m; szerokość maksymalna
 *   660 m; linia brzegowa misy 19 650 m; lustro wody
 *   76,2 m n.p.m.; klasa czystości II.
 * — Głębokość maksymalna 31,0 m, średnia 12,2 m
 *   (zgodne w dwóch źródłach).
 *   ⚠⚠⚠ GŁĘBOKOŚCI NIE UŻYWAM JAKO KĄTA — kąt „średnia
 *   kontra maksimum" zajęty (Węgorzyno).
 *   ⚠⚠ PODAJĘ TYLKO GŁĘBOKOŚĆ MAKSYMALNĄ, RAZ,
 *   w sekcji rodzinnej, bez zestawiania ze średnią.
 * — ⚠⚠⚠ PROPORCJI 7,6 KM DO 660 M NIE UŻYWAM JAKO KĄTA —
 *   prowadzi prosto w „kształt naczynia" (Choszczno),
 *   a Choszczno jest siedzibą TEGO SAMEGO POWIATU.
 *   TWARDA GRANICA.
 * — ⚠⚠⚠ DŁUGOŚCI LINII BRZEGOWEJ NIE UŻYWAM JAKO KĄTA —
 *   prowadzi w „granica większa niż to, co ogradza"
 *   (Recz, ta sama fala, ten sam powiat).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEZIORA GMINY:
 *   W GMINIE JEST 21 JEZIOR O ŁĄCZNEJ POWIERZCHNI 500 HA.
 *   SAM PEŁCZ MA PONAD 250 HA — CZYLI PONAD POŁOWĘ
 *   WSZYSTKICH WÓD GMINY. NA POZOSTAŁE DWADZIEŚCIA
 *   ZOSTAJE MNIEJ NIŻ POŁOWA.
 *   ⚠ TO JEST ZESTAWIENIE DWÓCH DANYCH ŹRÓDŁOWYCH,
 *   podaję je opisowo jako „ponad połowę", nigdy
 *   jako wyliczony procent.
 *   ⚠⚠ NIE PISZĘ „21 jezior po 24 ha każde" —
 *   to byłby fałsz. TO JEST CAŁY KĄT.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ BRAK DOWODU, NIE DOWÓD BRAKU. TEMAT NIE POJAWIA
 *   SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ JEZIORA PANIEŃSKIEGO NIE OPISUJĘ — w Polsce są
 *   co najmniej trzy jeziora o tej nazwie, a parametry
 *   tego pełczyckiego nieustalone.
 * ⚠ ODLEGŁOŚCI DROGOWE NIEZWERYFIKOWANE — podaję
 *   sąsiednie miasta bez kilometrów.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: JEDNO ZAJMUJE POŁOWĘ — o tym, że uwagę
 * rozkładamy równo na wszystkie pozycje, choć jedna
 * zabiera tyle, co cała reszta razem.
 * Kąt od jezior gminy Pełczyce: jest ich dwadzieścia
 * jeden, razem pięćset hektarów, a sam Pełcz to ponad
 * połowa tego. Dwadzieścia jezior dzieli między siebie
 * mniej niż jedno.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie Pełczyce jest dwadzieścia jeden jezior
 *   o łącznej powierzchni pięciuset hektarów, a sam
 *   Pełcz ma ponad dwieście pięćdziesiąt,
 * — ŻE JEDNO JEZIORO WAŻY WIĘCEJ NIŻ DWADZIEŚCIA
 *   POZOSTAŁYCH RAZEM — to jest rdzeń,
 * — ⚠⚠ ŻE PATRZĄC NA LISTĘ DWUDZIESTU JEDNU NAZW,
 *   ODRUCHOWO ZAKŁADAMY, ŻE SĄ MNIEJ WIĘCEJ RÓWNE.
 *   Lista wygląda na listę rzeczy tej samej wagi,
 *   bo pozycje stoją jedna pod drugą,
 * — ⚠⚠ ŻE KAŻDA LISTA W KUCHNI WYGLĄDA TAK SAMO
 *   I TAK SAMO KŁAMIE. Lista zakupów, lista rzeczy
 *   do zrobienia przed obiadem, lista etapów przepisu —
 *   wszystkie pozycje mają ten sam rozmiar czcionki
 *   i zupełnie różną wagę,
 * — ⚠⚠ ŻE SKUTEK JEST KONKRETNY: planujemy czas równo,
 *   a potem jedna pozycja zjada połowę i wszystko się
 *   sypie. Nie dlatego, że coś poszło źle — dlatego,
 *   że od początku była nierówna,
 * — ⚠⚠ ŻE ZAMIAST PLANOWAĆ DOKŁADNIEJ, WARTO ZROBIĆ
 *   COŚ PROSTSZEGO: znaleźć na liście tę jedną pozycję
 *   i zapytać, czy da się ją zacząć najwcześniej.
 *   Nie skrócić, nie pominąć — zacząć pierwszą,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE ZAWSZE DA SIĘ TĘ
 *   POZYCJĘ WSKAZAĆ Z GÓRY, a czasem jest ich dwie.
 *   Wtedy pierwsze rozpoznanie robi się dopiero
 *   po fakcie i to jest normalne — Pełcz też ktoś
 *   kiedyś zmierzył po raz pierwszy,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmienia
 *   proporcji na liście i nie sprawia, że wszystkie
 *   pozycje robią się równe. Skraca za to najczęściej
 *   właśnie tę największą, bo to zwykle ona wymaga
 *   stania i pilnowania. MÓWIĘ TO WPROST, bo różnica
 *   liczy się tam, gdzie leży ciężar, a nie równo
 *   wszędzie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KSZTAŁTU NACZYNIA I PROPORCJI DŁUGOŚĆ
 *   DO SZEROKOŚCI — kąt zajęty (Choszczno, siedziba
 *   TEGO SAMEGO POWIATU). Jezioro Pełcz jest 11,5 raza
 *   dłuższe niż szersze i aż się o to prosi.
 *   NIE ZESTAWIAM TYCH DWÓCH LICZB. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Podaję wyłącznie głębokość maksymalną.
 * — ⚠⚠⚠ ZERO GRANICY WIĘKSZEJ NIŻ TO, CO OGRADZA —
 *   kąt zajęty (Recz, ta sama fala, ten sam powiat).
 *   Nie używam długości linii brzegowej jako morału.
 * — ⚠⚠ ZERO CO ZOSTAŁO PO POŻARZE — kąt zajęty
 *   (Polanów). Jedno ocalałe skrzydło z 1675 r.
 *   podaję wyłącznie jako fakt w sekcji rodzinnej.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, KTÓRYCH RZECZY SIĘ UŻYWA; TUTAJ o TO,
 *   ŻE POZYCJE NA LIŚCIE MAJĄ RÓŻNĄ WAGĘ.
 *   Ani słowa o szafkach, półkach i sprzęcie.
 *   ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo, ta sama fala).
 * — ⚠⚠ ZERO PRZESTRZENI, GĘSTOŚCI I ROZLANEGO MIASTA —
 *   prowadzi w obszar zajęty (Koluszki, Człopa z tej
 *   samej fali). Gęstości 182,3 os./km² NIE UŻYWAM
 *   JAKO MORAŁU.
 * — ⚠⚠ ZERO NIERÓWNEGO ROZKŁADU WYSIŁKU NA TYDZIEŃ —
 *   kąt zajęty (Lipiany). ⚠ Tam chodzi o DNI TYGODNIA;
 *   TUTAJ o POZYCJE NA JEDNEJ LIŚCIE. Nie piszę
 *   o tygodniu ani razu.
 * — ⚠ ZERO INNEJ METODY NA INNYM ETAPIE — kąt zajęty
 *   (Golczewo, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ GOTOWEJ LISTY ANI PLANU — podaję WYŁĄCZNIE
 *   pytanie, które warto zadać własnej liście.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I ZAKONNEGO — kościół
 *   i klasztor wymieniam wyłącznie jako budowle z datą.
 * — ⚠ ZERO POŻARU JAKO WĄTKU EMOCJONALNEGO — podaję
 *   rok i skutek budowlany.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl; pomeranica.pl
 *   w zakresie liczby ludności.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy — tu pułapka
 *   jest największa w tej fali.
 * — NIE PODAJĘ powierzchni jeziora Pełcz jako jednej
 *   liczby — 257 ha albo 266,6 ha.
 * — NIE PODAJĘ procentu, jaki Pełcz stanowi w wodach
 *   gminy — piszę „ponad połowa".
 * — NIE PISZĘ, że dwadzieścia jeden jezior ma po tyle
 *   samo hektarów.
 * — NIE OPISUJĘ Jeziora Panieńskiego — trzy jeziora
 *   o tej nazwie w Polsce, parametry nieustalone.
 * — NIE PODAJĘ odległości drogowych — niezweryfikowane.
 * — NIE PODAJĘ liczby miejscowości w gminie.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNEJ GOTOWEJ LISTY ANI PLANU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pełczyce leżą w powiecie choszczeńskim, między
 *   Barlinkiem a Choszcznem; miasto liczy 2 383
 *   mieszkańców (GUS, 31.12.2024) na 13,1 km², a cała
 *   gmina 7 128 osób na 200,7 km², z czego lasy
 *   stanowią 19 %, a użytki rolne 70 %,
 * — prawa miejskie miasto otrzymało 17 marca 1290 r.
 *   z rąk margrabiego Albrechta III (wg Encyklopedii
 *   Pomorza Zachodniego), a w 1675 r. pożar strawił
 *   miasto, z którego ocalało jedno skrzydło klasztorne,
 * — kościół pochodzi z XIII w., a klasztor z pierwszej
 *   połowy XIV w.,
 * — herb miasta przedstawia dąb, niedźwiedzia i pagórek;
 *   zatwierdzono go uchwałą nr XI/56/95 z 23 czerwca
 *   1995 r.,
 * — w gminie jest dwadzieścia jeden jezior o łącznej
 *   powierzchni pięciuset hektarów; największe z nich,
 *   Pełcz, ma ponad dwieście pięćdziesiąt hektarów,
 *   7 600 m długości, 660 m maksymalnej szerokości,
 *   31 m głębokości w najgłębszym miejscu, lustro wody
 *   76,2 m n.p.m. i drugą klasę czystości; żyją w nim
 *   leszcze, płocie, liny, szczupaki i okonie,
 * — najwyższe wzniesienie w gminie, Niedziałek, ma
 *   112,9 m n.p.m.
 */
export const PELCZYCE: CityContent = {
  slug: "pelczyce",
  h1: "Thermomix Pełczyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pełczyce — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pełczycach (powiat choszczeński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pełczyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pełczycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pełczyc w powiecie choszczeńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Pełczyce"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia jeden jezior. Jedno z nich to ponad połowa wszystkich.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pełczycach – jak wygląda prezentacja?",
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
      id: "jedno-zajmuje-polowe",
      heading: "Dwadzieścia jeden jezior, z czego jedno",
      paragraphs: [
        "W gminie Pełczyce jest dwadzieścia jeden jezior o łącznej powierzchni pięciuset hektarów. Brzmi jak równo rozłożona liczba — dwadzieścia jeden pozycji, pięćset hektarów.",
        "Tylko że sam Pełcz ma ponad dwieście pięćdziesiąt. Jedno jezioro waży więcej niż dwadzieścia pozostałych razem wzięte.",
        "Patrząc na listę dwudziestu jeden nazw, odruchowo zakładamy, że są mniej więcej równe. Lista wygląda na listę rzeczy tej samej wagi — bo pozycje stoją jedna pod drugą, tym samym krojem pisma, w tej samej odległości od siebie. Forma listy to sugeruje, choć nic o tym nie mówi.",
        "Każda lista w kuchni wygląda tak samo i tak samo kłamie.",
        "Lista zakupów. Lista rzeczy do zrobienia przed obiadem. Lista etapów przepisu, wypunktowana od jednego do ośmiu. Wszystkie pozycje mają ten sam rozmiar, ten sam myślnik z przodu i zupełnie różną wagę. Osiem punktów, z czego siódmy trwa tyle, co siedem pozostałych.",
        "Skutek jest bardzo konkretny i wszyscy go znamy.",
        "Planuje się czas równo — trzy rzeczy, po dwadzieścia minut, godzina. Potem jedna pozycja zjada połowę i cała reszta się sypie. I nie dlatego, że coś poszło źle. Dlatego, że lista była nierówna od pierwszej sekundy, a my odczytaliśmy ją jako równą.",
        "Zamiast planować dokładniej, warto zrobić coś prostszego. Znaleźć na liście tę jedną pozycję — tę, która jest Pełczem — i zadać jej jedno pytanie: czy da się ją zacząć najwcześniej. Nie skrócić, nie pominąć, nie zoptymalizować. Zacząć pierwszą. To zwykle wystarcza, żeby reszta się zmieściła, bo reszta jest mała.",
        "Uczciwie o drugiej stronie: nie zawsze da się tę pozycję wskazać z góry, a czasem są dwie. Wtedy rozpoznanie przychodzi dopiero po fakcie i to jest normalne — Pełcz też ktoś kiedyś zmierzył po raz pierwszy i dopiero wtedy było wiadomo, jak się ma do pozostałych.",
        "Na koniec o urządzeniu, wprost.",
        "Ono nie zmienia proporcji na liście i nie sprawia, że wszystkie pozycje robią się równe. Skraca natomiast najczęściej właśnie tę największą — bo to zwykle ona wymaga stania, mieszania i pilnowania, a nie ta, która polega na otwarciu słoika. Różnica liczy się więc tam, gdzie leży ciężar, a nie równo wszędzie. I to jest jedyny uczciwy sposób, żeby ją policzyć przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pełczycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, która czynność w Waszej kuchni trwa najdłużej. Pod nią dobiorę dania, bo tylko tam widać prawdziwą różnicę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pełczycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pełczyc",
      paragraphs: [
        "Pełczyce leżą w powiecie choszczeńskim, między Barlinkiem a Choszcznem. Samo miasto liczy ponad dwa tysiące trzystu mieszkańców (GUS, 31.12.2024) na trzynastu kilometrach kwadratowych, a cała gmina ponad siedem tysięcy osób na dwustu — lasy to tylko dziewiętnaście procent jej powierzchni, użytki rolne aż siedemdziesiąt. Prawa miejskie Pełczyce otrzymały 17 marca 1290 roku z rąk margrabiego Albrechta III, jak podaje Encyklopedia Pomorza Zachodniego, a w 1675 pożar strawił miasto — ocalało jedno skrzydło klasztorne. Kościół pochodzi z trzynastego wieku, klasztor z pierwszej połowy czternastego. Herb, przedstawiający dąb, niedźwiedzia i pagórek, zatwierdzono uchwałą z 23 czerwca 1995 roku. W gminie jest dwadzieścia jeden jezior o łącznej powierzchni pięciuset hektarów; największe z nich, Pełcz, ma ponad dwieście pięćdziesiąt hektarów, siedem kilometrów sześćset metrów długości, sześćset sześćdziesiąt metrów największej szerokości i trzydzieści jeden metrów w najgłębszym miejscu, przy drugiej klasie czystości — żyją w nim leszcze, płocie, liny, szczupaki i okonie. Najwyższe wzniesienie gminy, Niedziałek, ma sto dwanaście metrów dziewięćdziesiąt nad poziomem morza.",
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

  districtsHeading: "Do których części Pełczyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość — samo miasto ma trzynaście kilometrów kwadratowych, a gmina dwieście, więc rozciąga się szeroko.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Pełczyce też przyjadę",
  nearbyParagraphs: [
    "Choszczno jest siedzibą powiatu, Barlinek leży po drugiej stronie. Do Recza, Myśliborza i Dobiegniewa też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Choszczno", "Barlinek", "Recz", "Myślibórz", "Dobiegniew"],

  about: blokOMnie("do Pełczyc", "w Pełczycach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pełczyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Pełczyce w powiecie choszczeńskim — nie o Pyrzyce, które leżą w tym samym województwie i mają bardzo podobnie brzmiącą nazwę. To najczęstsza pomyłka przy tej miejscowości.",
      },
    ...faqWspolne("w Pełczycach"),
    {
      question: "Dlaczego plan obiadu tak często się nie mieści w czasie?",
      answer:
        "Bo lista punktów wygląda na równą, a prawie nigdy taka nie jest. W gminie Pełczyce jest dwadzieścia jeden jezior, a jedno z nich to ponad połowa wszystkich wód — i tak samo wygląda większość list w kuchni. Zamiast planować dokładniej, warto znaleźć tę jedną pozycję, która waży najwięcej, i zacząć od niej najwcześniej. Reszta zwykle się zmieści, bo reszta jest mała.",
    },
    {
      question: "Gdzie Thermomix daje największą różnicę w czasie?",
      answer:
        "Tam, gdzie leży ciężar, a nie równo we wszystkim. Najbardziej skraca te etapy, które wymagają stania przy garnku, mieszania i pilnowania — a nie te, które polegają na otwarciu słoika. Dlatego przed zakupem warto policzyć nie „ile zajmuje obiad”, tylko „ile zajmuje ta jedna najdłuższa czynność”.",
    },
  ],

  geo: { lat: 53.0431, lng: 15.3049 },
};
