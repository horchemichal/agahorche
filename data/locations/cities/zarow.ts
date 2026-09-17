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
 * ŻARÓW — powiat świdnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ. ⚠ NIE MA odrębnej
 *   gminy wiejskiej Żarów.
 *   ⚠⚠ PUŁAPKA ŹRÓDŁOWA: polskawliczbach wrzuca gminy
 *   miejsko-wiejskie do kubełka „pozostałe gminy" obok
 *   wiejskich, co fałszywie sugeruje osobną gminę wiejską.
 *   NIE ISTNIEJE.
 * MIASTO: 6 389 mieszkańców (GUS 31.12.2024),
 *   gęstość 844,0 os./km².
 *   ⚠⚠ POWIERZCHNIĘ PODAJĘ JAKO 7,57 km², NIE 7,6 —
 *   6 389 / 7,6 = 840,7, a serwis podaje 844,0.
 *   NIE WOLNO MNOŻYĆ 7,6 × 844.
 * CAŁA GMINA: 12 068 osób, 87,9 km², 18 wsi — Bożanów,
 *   Buków, Gołaszyce, Imbramowice, Kalno, Kruków,
 *   Marcinowiczki, Mielęcin, Mikoszowa, Mrowiny,
 *   Pożarzysko, Przyłęgów, Pyszczyn, Siedlimowice,
 *   Tarnawa, Wierzbna, Zastruże, Łażany.
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 12 068 / 87,9 = 137,3,
 *   a serwis podaje 139. NIE DOMYKA SIĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚĆ: ok. 190–215 m n.p.m. ⚠ GEO: 50,9408 / 16,4947.
 *
 * ⚠⚠⚠ PUŁAPKA NAJWYŻSZEJ WAGI W TEKŚCIE O KUCHNI:
 *   nazwa miasta zawiera rdzeń „żar". W tekście o gotowaniu
 *   słowa „żar", „żarzyć się", „żarówka" pojawiłyby się
 *   naturalnie i czytają się jak literówka albo jak gra
 *   słów, której nie planowałam.
 *   ⚠⚠⚠ W CAŁYM TEKŚCIE NIE UŻYWAM SŁOWA „ŻAR" ANI
 *   ŻADNEJ JEGO FORMY. Piszę „ogień", „wysoka temperatura",
 *   „piekarnik". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ PRZYMIOTNIKA „ŻAROWSKI" UŻYWAM OSZCZĘDNIE —
 *   forma niepotwierdzona urzędowo [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie ustalono.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE: Żarów ≠ ŻARY (lubuskie, miasto
 *   ok. 37 tys., zupełnie inne województwo) ≠ Żarki
 *   (śląskie) ≠ Żarnów (łódzkie) ≠ Żarnowiec.
 *   ⚠ Bliskość Jaworzyny Śląskiej (kilka kilometrów)
 *   i wspólne dane powiatowe powodują, że statystyki
 *   jednego miasta bywają przypisywane drugiemu.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ PIERWSZA WZMIANKA I PRAWA MIEJSKIE — ROZDZIELONE:
 *   PIERWSZA PEWNA WZMIANKA: 1308 r., zapis „Sarowicze".
 *   ⚠⚠⚠ WCZEŚNIEJSZYCH IDENTYFIKACJI („Scharino"
 *   1198–1201, „Soraw") NIE PODAJĘ — są sporne i sam autor
 *   źródła je kwestionuje. NIE PISZĘ, że Żarów istnieje
 *   od XII wieku.
 *   PRAWA MIEJSKIE: 7 października 1954 r. [NP — jedno
 *   źródło]. ⚠⚠ NADAWCY NIE USTALONO — NIE PODAJĘ GO.
 *   ⚠ ODSTĘP: 646 lat — najdłuższy w tej fali.
 *   PODAJĘ JAKO FAKT.
 * ⚠ DZIEWIĘĆ HISTORYCZNYCH ZAPISÓW NAZWY: Scharino, Sarow,
 *   Sarowicze, Zarow, Saraw, Sara, Saar, Saarau, Żarów.
 *   ⚠⚠ PODAJĘ JAKO FAKT, NIE ROBIĘ Z TEGO KĄTA —
 *   „jedna forma zapisu" ociera się o etykiety
 *   (Oborniki Śląskie) i o ustaloną procedurę
 *   (Środa Śląska). TWARDA GRANICA.
 *
 * ⚠⚠⚠ PRZEMYSŁ — ROZSTRZYGNIĘCIE I OGRANICZENIE:
 *   Sprawdzono wprost: ŻADEN Z ZAKŁADÓW ŻAROWA NIE BYŁ
 *   WYTWÓRNIĄ UZBROJENIA, AMUNICJI ANI MATERIAŁÓW
 *   WYBUCHOWYCH. Wątek nie odpada w całości.
 *   🟢 BEZPIECZNE I UŻYTE: cegielnia (1842), fabryka cegieł
 *      szamotowych (1850) — cegły OGNIOTRWAŁE
 *      I KWASOODPORNE, ok. 700 pracowników w latach 80.
 *      XIX w.; huta szkła i odlewnia (lata 40. XIX w.);
 *      młyn przemysłowy (1916, ok. 35 osób) — mąka, płatki
 *      owsiane, kasza perłowa.
 *   🟡 ⚠⚠⚠ ZAKŁADÓW CHEMICZNYCH (1858) NIE WYMIENIAM ANI
 *      RAZU. Profil był cywilny, ale samo źródło spekuluje,
 *      że pracowały na potrzeby armii. TWARDA GRANICA —
 *      wątek w strefie ryzyka, więc odpada.
 *   🔴 ⚠⚠⚠ NAZW WŁASNYCH ZAKŁADÓW NIE PODAJĘ —
 *      ZERO NAZW FIRM I MAREK. Opisuję profilem.
 *   ⚠ PRZETWÓRNI ZIEMNIACZANEJ (1940) NIE PODAJĘ — data
 *      w okresie wykluczonym.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWIE ODPORNOŚCI JEDNEJ CEGŁY:
 *   Fabryka założona w 1850 r. wypalała dwa różne wyroby:
 *   cegłę OGNIOTRWAŁĄ i cegłę KWASOODPORNĄ.
 *   Jeden zakład, jeden surowiec, dwie osobne odporności —
 *   I ANI JEDNA Z TYCH CEGIEŁ NIE ZASTĘPOWAŁA DRUGIEJ.
 *   W latach 80. XIX w. pracowało tam ok. 700 osób, przy
 *   864 mieszkańcach całej miejscowości w 1871 r.
 *   To jest cały kąt.
 *
 * LUDNOŚĆ HISTORYCZNA — FAKT DODATKOWY:
 *   lata 40. XIX w. — 172 · 1871 — 864 · 1885 — 1 502 ·
 *   1900 — 2 725 · 1905 — 3 380.
 *   ⚠⚠ „SKUTEK NIE POJAWIA SIĘ W MOMENCIE ZMIANY" JAKO KĄT
 *   — NIE UŻYWAM: ociera się o dołożone po okresie
 *   używania (Syców) i o czas odtworzenia (Góra).
 *   PODAJĘ JAKO CIĄG LICZB.
 *   ⚠⚠ DANYCH PO 1905 R. NIE PODAJĘ — ciąg schodzi
 *   w demografię i w rok 1939 [SP].
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — 7 lipca 1867 — powstanie ochotniczej straży pożarnej.
 * — 1877 — pierwsza gazeta lokalna.
 * — 1880 — utworzenie rady gminy.
 * — Budynek stacji istniał przed 1865 r., murowany
 *   wzniesiono na początku XX w.
 * — ⚠⚠ KOŚCIOŁA (1909–1910) NIE OPISUJĘ — wyznaniowe.
 * — ⚠⚠ CMENTARZA (1865) NIE WYMIENIAM — pogrzebowe.
 * — ⚠⚠ POŻARU Z 1870 R. NIE WYMIENIAM — żywioł, a przy
 *   tym mieście podwójnie niewskazany.
 *
 * KĄT: ODPORNA NA OGIEŃ TO NIE TO SAMO CO ODPORNA NA KWAS
 * — o tym, że „odporny" nie jest jedną cechą, tylko zestawem
 * osobnych, i że producent zwykle podaje jedną z nich,
 * a w kuchni potrzebne bywają dwie naraz. Kąt od żarowskiej
 * fabryki z 1850 r.: z tej samej gliny wypalano cegłę
 * ogniotrwałą i cegłę kwasoodporną, i jedna nie zastępowała
 * drugiej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że fabryka założona w Żarowie w 1850 r. wypalała dwa
 *   osobne wyroby — cegłę ogniotrwałą i kwasoodporną —
 *   z tego samego surowca, i że zatrudniała ok. 700 osób,
 *   gdy całą miejscowość zamieszkiwało 864,
 * — ŻE TO DWIE RÓŻNE ODPORNOŚCI I ŻADNA NIE ZASTĘPUJE
 *   DRUGIEJ. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI CZYTAMY „ODPORNY" JAK JEDNĄ CECHĘ:
 *   naczynie „odporne" wydaje się odporne na wszystko,
 * — ⚠⚠ ŻE ODPORNOŚCI JEST KILKA I SĄ NIEZALEŻNE: na wysoką
 *   temperaturę, na kwas, na zarysowanie, na nagłą zmianę
 *   temperatury, na zmywarkę. Naczynie może mieć trzy
 *   z nich i nie mieć czwartej,
 * — ⚠⚠ ŻE PRODUCENT PODAJE ZWYKLE TĘ JEDNĄ, KTÓRA JEST
 *   NAJMOCNIEJSZA — a w kuchni potrzebne bywają dwie naraz,
 *   bo kwaśny sos wchodzi do piekarnika, a zimne naczynie
 *   trafia pod gorącą wodę,
 * — ⚠⚠ ŻE PRAKTYCZNY RUCH JEST JEDEN: zanim postawisz coś
 *   w nowym dla tego przedmiotu miejscu, wypisz, jakie
 *   dwie odporności są tam potrzebne jednocześnie.
 *   Zwykle wystarczy chwila, a różnica bywa nieodwracalna,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest argument
 *   za kupowaniem osobnego naczynia do każdej sytuacji.
 *   Chodzi o sprawdzenie, a nie o mnożenie sprzętu.
 *   Fabryka robiła dwa rodzaje cegły, nie dziesięć,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie urządzenia i jego
 *   części też mają swoje odporności, i też nie są jedną
 *   cechą. MÓWIĘ TO WPROST.
 *   ⚠⚠⚠ NIE PODAJĘ ŻADNYCH TEMPERATUR, CZASÓW ANI
 *   PARAMETRÓW — ani dla urządzenia, ani dla naczyń.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TWARDSZEGO MATERIAŁU I ZUŻYCIA NARZĘDZI —
 *   kąt zajęty (Strzelin). ⚠⚠ TO JEST NAJBLIŻSZY OBSZAR:
 *   tamten tekst mówi, że twardszy materiał szybciej
 *   zużywa narzędzie; ten mówi, że „odporny" to kilka
 *   niezależnych cech naraz. ROZGRANICZAM JAWNIE,
 *   JEDNYM ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO LICZENIA CZĘŚCI I SZWÓW — kąt zajęty
 *   (Pieszyce).
 * — ⚠⚠⚠ ZERO ETYKIET, OPISYWANIA I JEDNEJ FORMY ZAPISU —
 *   kąt zajęty (Oborniki Śląskie). Dlatego dziewięciu
 *   zapisów nazwy NIE UŻYWAM jako morału.
 * — ⚠⚠ ZERO USTALONEGO WYMIARU — kąt zajęty
 *   (Kamienna Góra).
 * — ⚠⚠ ZERO USTALONEJ PROCEDURY — kąt zajęty
 *   (Środa Śląska).
 * — ⚠⚠ ZERO DOKŁADANIA PO OKRESIE UŻYWANIA I ZERO CZASU
 *   ODTWORZENIA — kąty zajęte (Syców, Góra). Dlatego ciąg
 *   ludnościowy podaję bez morału.
 * — ⚠⚠ ZERO ZAPASU I DRUGIEJ DROGI — kąt zajęty
 *   (Chocianów). Nie piszę o zastępowaniu.
 * — ⚠⚠ ZERO METODY PRZED NARZĘDZIEM — kąt pisany w tej
 *   samej fali (Duszniki-Zdrój).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEJ LISTY POLECANYCH NACZYŃ ANI MATERIAŁÓW —
 *   podaję WYŁĄCZNIE zasadę: sprawdź, które dwie
 *   odporności są potrzebne naraz.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠⚠ pisząc o kwasie
 *   i naczyniach NIE MÓWIĘ NIC o przenikaniu substancji,
 *   zdrowiu ani bezpieczeństwie. Piszę WYŁĄCZNIE
 *   o uszkodzeniu przedmiotu.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SŁOWA „ŻAR" I JEGO FORM.
 * — ⚠⚠⚠ ZERO ZAKŁADÓW CHEMICZNYCH I ZERO WĄTKU
 *   ZBROJENIOWEGO.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH NAZW
 *   POZA WYKAZEM HISTORYCZNYCH ZAPISÓW NAZWY MIASTA.
 * — ⚠⚠ ZERO POŻARU JAKO ŻYWIOŁU.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I POGRZEBOWEGO.
 * — ⚠ ZERO DEMOGRAFII PO 1905 R. I ZERO BEZROBOCIA.
 * — ⚠ ZERO PRZECIĘTNEGO WYNAGRODZENIA — ⚠⚠ to wartość
 *   POWIATOWA, identyczna dla Żarowa i Jaworzyny Śląskiej.
 *   NIE WOLNO PISAĆ „w Żarowie zarabia się…".
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ powierzchni miasta jako 7,6 km².
 * — NIE TWIERDZĘ, że miejscowość istnieje od XII wieku —
 *   najstarsze zapisy są sporne.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE WYMIENIAM zakładów chemicznych.
 * — NIE PODAJĘ nazw własnych żadnego z zakładów.
 * — NIE PODAJĘ zatrudnienia w cegielni, hucie szkła
 *   ani w odlewni — nie ustalono.
 * — NIE PODAJĘ odległości drogowych — ani jednej
 *   nie zweryfikowano.
 * — NIE PODAJĘ przeciętnego wynagrodzenia.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Kiełbasa z Przedgórza Sudeckiego"
 *   to oznaczenie regionalne, produkty niemczańskie
 *   pochodzą z gminy Niemcza w powiecie dzierżoniowskim,
 *   a ślężańskie z rejonu Ślęży. NIE PRZYPISUJĘ ICH
 *   ŻAROWOWI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Żarów leży w powiecie świdnickim, na wysokości
 *   od około 190 do 215 m n.p.m.; miasto liczy 6 389
 *   mieszkańców (GUS, 31.12.2024) na 7,57 km², a cała
 *   gmina miejsko-wiejska 12 068 osób na 87,9 km²,
 *   z osiemnastoma wsiami,
 * — pierwsza pewna wzmianka pochodzi z 1308 r. i zapisuje
 *   nazwę jako „Sarowicze"; prawa miejskie miejscowość
 *   otrzymała dopiero 7 października 1954 r. — po ponad
 *   sześciu i pół wieku; w dokumentach nazwa występuje
 *   w dziewięciu postaciach: Scharino, Sarow, Sarowicze,
 *   Zarow, Saraw, Sara, Saar, Saarau i Żarów,
 * — cegielnię uruchomiono tu w 1842 r., a w 1850 powstała
 *   fabryka cegieł szamotowych wypalająca cegły ogniotrwałe
 *   i kwasoodporne; w latach 80. XIX w. pracowało w niej
 *   około 700 osób. W latach czterdziestych XIX w. ruszyły
 *   też huta szkła i odlewnia, a w 1916 r. młyn przemysłowy
 *   z załogą około trzydziestu pięciu osób, produkujący
 *   mąkę, płatki owsiane i kaszę perłową,
 * — liczba mieszkańców rosła od 172 w latach czterdziestych
 *   XIX w. przez 864 w 1871 r., 1 502 w 1885 i 2 725
 *   w 1900 do 3 380 w 1905,
 * — ochotnicza straż pożarna powstała 7 lipca 1867 r.,
 *   pierwsza gazeta lokalna w 1877, a rada gminy w 1880;
 *   budynek stacji istniał już przed 1865 r., a murowany
 *   wzniesiono na początku XX w.
 */
export const ZAROW: CityContent = {
  slug: "zarow",
  h1: "Thermomix Żarów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żarów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Żarowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żarów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żarowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żarowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich osiemnastu wsi w gminie.",

  highlights: highlightyStandardowe("Żarów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedna glina, jeden piec, dwie osobne odporności — i żadna nie zastępowała drugiej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żarowie – jak wygląda prezentacja?",
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
      id: "dwie-odpornosci",
      heading: "Odporna na ogień to nie to samo co odporna na kwas",
      paragraphs: [
        "Fabryka założona w Żarowie w 1850 roku wypalała z tego samego surowca dwa różne wyroby: cegłę ogniotrwałą i cegłę kwasoodporną. Jeden zakład, jedna glina, jeden piec.",
        "I żadna z tych cegieł nie zastępowała drugiej.",
        "To nie było marnotrawstwo ani dzielenie włosa na czworo. Ogień i kwas niszczą w zupełnie inny sposób, więc odporność na jedno nie mówi nic o odporności na drugie. W latach osiemdziesiątych dziewiętnastego wieku pracowało tam około siedmiuset osób — przy ośmiuset sześćdziesięciu czterech mieszkańcach całej miejscowości w 1871 roku.",
        "W kuchni czytamy „odporny” jak jedną cechę i prawie zawsze się na tym przejeżdżamy.",
        "Naczynie opisane jako odporne wydaje się odporne po prostu. A odporności jest kilka i są od siebie niezależne: na wysoką temperaturę, na kwas, na zarysowanie, na nagłą zmianę temperatury, na zmywarkę. Przedmiot może mieć trzy z nich i nie mieć czwartej — i dowiadujesz się o tym w momencie, w którym już jest za późno.",
        "Producent podaje zwykle tę jedną, która wypada najlepiej. Bo ona sprzedaje.",
        "A w kuchni prawie zawsze potrzebne są dwie naraz. Kwaśny sos wchodzi do piekarnika. Zimne naczynie trafia pod gorącą wodę. Ostry nóż pracuje na powierzchni, którą ktoś reklamował jako niezniszczalną, ale w innym sensie niż ten, który akurat jest potrzebny.",
        "Ruch, który to rozstrzyga, zajmuje chwilę: zanim postawisz coś w miejscu, w którym ten przedmiot dotąd nie stał, wypisz w głowie, jakie dwie odporności są tam potrzebne jednocześnie.",
        "Zwykle wystarczy kilka sekund. A różnica bywa nieodwracalna, bo pęknięcia i wypaczenia się nie cofa.",
        "Dopowiem, bo to leży blisko innej rzeczy: nie chodzi o to, że twardsze zużywa szybciej narzędzia. Chodzi o coś prostszego — o to, że słowo „odporny” opisuje zestaw osobnych cech, a nie jedną.",
        "Uczciwie o drugiej stronie: to nie jest argument za kupowaniem osobnego naczynia do każdej sytuacji. Chodzi o sprawdzenie, nie o mnożenie sprzętu. Żarowska fabryka robiła dwa rodzaje cegły, nie dziesięć — bo dwa wystarczały.",
        "Na koniec o urządzeniu, i to samo dotyczy jego.",
        "Naczynie Thermomixa i jego części też mają swoje odporności, i też nie są jedną cechą. Nie wypiszę tu żadnych liczb ani parametrów, bo nie zamierzam podawać z pamięci czegoś, co da się przeczytać w instrukcji i pokazać na miejscu. Na prezentacji mówię o tym wprost, razem z tym, czego w tym urządzeniu robić nie warto.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żarowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy któreś naczynie ostatnio Wam pękło albo się wypaczyło. To zwykle najkrótsza droga do rozmowy o tym, co w tej kuchni jest naprawdę potrzebne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żarowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Żarowa",
      paragraphs: [
        "Żarów leży w powiecie świdnickim, na wysokości od mniej więcej stu dziewięćdziesięciu do dwustu piętnastu metrów nad poziomem morza. Samo miasto liczy 6 389 mieszkańców (GUS, 31.12.2024) na siedmiu i pół kilometra kwadratowego, a cała gmina miejsko-wiejska ponad dwanaście tysięcy osób na osiemdziesięciu ośmiu, z osiemnastoma wsiami. Pierwsza pewna wzmianka pochodzi z 1308 roku i zapisuje nazwę jako „Sarowicze”; starsze zapisy bywają wiązane z tą miejscowością, ale historycy się co do nich nie zgadzają, więc nie będę tu twierdzić, że miasto istnieje od dwunastego wieku. Prawa miejskie Żarów otrzymał dopiero 7 października 1954 roku — sześćset czterdzieści sześć lat po pierwszej wzmiance. W dokumentach nazwa występuje w dziewięciu postaciach: Scharino, Sarow, Sarowicze, Zarow, Saraw, Sara, Saar, Saarau i Żarów. Cegielnię uruchomiono tu w 1842 roku, a w 1850 powstała fabryka cegieł szamotowych wypalająca cegły ogniotrwałe i kwasoodporne — w latach osiemdziesiątych dziewiętnastego wieku pracowało w niej około siedmiuset osób. W latach czterdziestych dziewiętnastego wieku ruszyły też huta szkła i odlewnia, a w 1916 roku młyn przemysłowy z załogą około trzydziestu pięciu osób, produkujący mąkę, płatki owsiane i kaszę perłową. Liczba mieszkańców rosła od stu siedemdziesięciu dwóch w latach czterdziestych dziewiętnastego wieku przez osiemset sześćdziesiąt cztery w 1871, tysiąc pięćset dwa w 1885 i dwa tysiące siedemset dwadzieścia pięć w 1900 do trzech tysięcy trzystu osiemdziesięciu w 1905. Ochotnicza straż pożarna powstała 7 lipca 1867 roku, pierwsza gazeta lokalna w 1877, a rada gminy w 1880; budynek stacji istniał już przed 1865 rokiem, a murowany wzniesiono na początku dwudziestego wieku.",
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

  districtsHeading: "Do których części Żarowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich osiemnastu wsi w gminie: Bożanowa, Bukowa, Gołaszyc, Imbramowic, Kalna, Krukowa, Marcinowiczek, Mielęcina, Mikoszowej, Mrowin, Pożarzyska, Przyłęgowa, Pyszczyna, Siedlimowic, Tarnawy, Wierzbnej, Zastruża i Łażan. Wszędzie bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Żarów też przyjadę",
  nearbyParagraphs: [
    "Jaworzyna Śląska jest stąd kilka kilometrów, Strzegom i Świdnica niewiele dalej. Dojeżdżam też do Mietkowa, Marcinowic i Sobótki — wszędzie bezpłatnie, tak samo jak w samym mieście.",
  ],
  nearbyTowns: ["Jaworzyna Śląska", "Strzegom", "Świdnica", "Sobótka", "Mietków"],

  about: blokOMnie("do Żarowa", "w Żarowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żarowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich osiemnastu wsi w gminie, łącznie z Imbramowicami, Mrowinami, Wierzbną i Łażanami. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Żarów w powiecie świdnickim — nie o Żary w lubuskiem, nie o Żarki w śląskiem i nie o Żarnów w łódzkiem. Warto też pamiętać, że Żarów i sąsiednia Jaworzyna Śląska mają wspólne dane powiatowe, więc statystyki jednego miasta bywają przypisywane drugiemu.",
    },
    ...faqWspolne("w Żarowie"),
    {
      question: "Naczynie było opisane jako odporne, a jednak się zniszczyło. Jak to możliwe?",
      answer:
        "Bo „odporny” to nie jedna cecha, tylko kilka niezależnych: na wysoką temperaturę, na kwas, na zarysowanie, na nagłą zmianę temperatury, na zmywarkę. Przedmiot może mieć trzy z nich i nie mieć czwartej. Żarowska fabryka z 1850 roku wypalała z tej samej gliny dwie osobne cegły — ogniotrwałą i kwasoodporną — bo ogień i kwas niszczą w zupełnie inny sposób i jedna odporność nie mówi nic o drugiej. Producent podaje zwykle tę, która wypada najlepiej. Zanim postawisz coś w nowym dla tego przedmiotu miejscu, sprawdź, jakie dwie odporności są tam potrzebne naraz.",
    },
    {
      question: "Czego nie warto robić w Thermomixie?",
      answer:
        "Jest kilka takich rzeczy i mówię o nich na prezentacji wprost, razem z odpornościami naczynia i części. Nie wypiszę ich tutaj z parametrami, bo nie chcę podawać z pamięci liczb, które da się przeczytać w instrukcji i pokazać na miejscu — a wolę, żeby to była rozmowa przy urządzeniu niż lista na stronie.",
    },
  ],

  geo: { lat: 50.9408, lng: 16.4947 },
};
