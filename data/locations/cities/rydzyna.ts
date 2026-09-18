import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * RYDZYNA — powiat leszczyński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ RYDZYNA NIE MA.
 *   ⚠ RYDZYNA I OSIECZNA TO DWA MIASTA POWIATU
 *   LESZCZYŃSKIEGO. LESZNO DO POWIATU NIE NALEŻY.
 * MIASTO: 2 860 mieszkańców (GUS 31.12.2024),
 *   2,2 km², gęstość 1 300,0 os./km².
 *   ⚠ [ZW — 2 860 / 2,2 = 1 300,0. Różnica 0,0.
 *   DOMKNIĘCIE IDEALNE. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA — ⚠⚠⚠ UŻYWAM PARY Z GEOPORTALU
 *   KRAJOWEGO: 10 706 osób, 136 km², gęstość
 *   78,9 os./km².
 *   ⚠ [ZW — 10 706 / 136 = 78,7. Różnica 0,2.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠⚠ PARY 10 639 / 135,6 / 77 NIE UŻYWAM —
 *   iloraz daje 78,5, ROZBIEŻNOŚĆ 1,5. ODRZUCONA.
 *   ⚠⚠ NIE MIESZAM OBU ZESTAWÓW.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * UDZIAŁ MIASTA: 2 860 z 10 706 to niespełna
 *   27 procent. ⚠ OBLICZENIE WŁASNE Z PARY, KTÓREJ
 *   UŻYWAM. PODAJĘ OPISOWO.
 * SOŁECTWA: 16 SOŁECTW i 23 MIEJSCOWOŚCI
 *   (GUS Vademecum).
 *   MIEJSCOWOŚCI: Augustowo, Dąbcze, Izbiska,
 *   Jabłonna, Junoszyn, Kaczkowo, Kłoda, Lasotki,
 *   Maruszewo, Moraczewo, Nowa Wieś, Nowy Świat,
 *   Pomykowo, Przybiń, Robczysko, Rojęczyn, Rydzyna,
 *   Tarnowa Łąka, Tworzanice, Tworzanki.
 *   ⚠⚠ DĄBCZE I ROBCZYSKO WYSTĘPUJĄ PODWÓJNIE —
 *   jako wieś i jako osada leśna.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 24,4 %. PODAJĘ.
 * WZROST LUDNOŚCI GMINY: +34,5 % W LATACH 2002–2024.
 *   TO RDZEŃ KĄTA.
 * ⚠ GEO: 51,7865 / 16,6676 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — RODZAJ ŻEŃSKI:
 *   D. do RYDZYNY · B. RYDZYNĘ · Ms. w RYDZYNIE ·
 *   N. Rydzyną · C. Rydzynie.
 *   ⚠ POTWIERDZENIA: „w północno-wschodniej części
 *   Rydzyny", „Historia Rydzyny", „Rynek w Rydzynie".
 *   ⚠⚠⚠ BŁĄD: ODMIANA PRZYMIOTNIKOWA — „w Rydzynej",
 *   „do Rydzynej". WSPOMINAM.
 *   PRZYMIOTNIK: RYDZYŃSKI — potwierdzony („Rynek
 *   Rydzyński", „rydzyńskiego ratusza"). UŻYWAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ PUŁAPKA NAZWISKOWA:
 *   Przymiotnik „rydzyński" bywa mylony z nazwiskiem
 *   rodowym RYDZYŃSCY.
 *   ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — kąt „nazwisko
 *   od miejsca, nie miejsce od nazwiska" ZAJĘTY
 *   (Miłosław). ⚠⚠⚠ NAZWISKA W TEKŚCIE NIE
 *   WYMIENIAM W OGÓLE. Wystarczy, że nie używam
 *   zwrotów dwuznacznych.
 *
 * ⚠⚠ DATY I OBIEKTY:
 *   — POMNIK HISTORII: zespół rezydencjonalno-
 *     -urbanistyczny uznany rozporządzeniem
 *     z 15 MARCA 2017 R. (Dz.U. 2017 poz. 662).
 *     ⚠⚠⚠ PUŁAPKA ŹRÓDŁOWA: JEDEN SERWIS TURYSTYCZNY
 *     PODAJE ROK 2007. TO BŁĄD. PODAJĘ 2017
 *     I MÓWIĘ WPROST, ŻE ROZBIEŻNOŚĆ ISTNIEJE.
 *   — RATUSZ: 1761 R. PODAJĘ.
 *     ⚠⚠ PROJEKTANTA NIE WYMIENIAM.
 *   — NAJSTARSZE ZACHOWANE KAMIENICE PRZY RYNKU:
 *     1708, 1731, 1734. PODAJĘ.
 *     ⚠⚠⚠ FIGURY „NAJMŁODSZY PRZY RYNKU" NIE ROBIĘ —
 *     kąt ZAJĘTY (Szamocin).
 *   — RYNEK POWSTAŁ NA POCZĄTKU XV W. PODAJĘ.
 *   ⚠⚠⚠ DAT ZAŁOŻENIA MIASTA NIE PODAJĘ — źródła
 *     są niezgodne (płyta nagrobna z 1422 r. opisuje
 *     „założyciela miasta", inne źródło przypisuje
 *     tej samej osobie budowę zamku w XV w.). [NP]
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ FIGURY TRÓJCY ŚWIĘTEJ NIE WYMIENIAM —
 *     ZERO WĄTKU WYZNANIOWEGO.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ROŚNIE TO, CO WOKÓŁ, A NIE ŚRODEK:
 *   W LATACH 2002–2024 LUDNOŚĆ GMINY RYDZYNA WZROSŁA
 *   O 34,5 %. Gmina liczy dziś 10 706 osób na 136 km².
 *   A SAMO MIASTO MIEŚCI Z TEGO NIESPEŁNA 27 PROCENT —
 *   2 860 osób na 2,2 km².
 *   Przyrost dokonał się więc GŁÓWNIE POZA MIASTEM:
 *   gmina urosła o ponad jedną trzecią, a miasto
 *   zostało małe i bardzo gęste (1 300 os./km²).
 *   ⚠⚠ NIE TWIERDZĘ, KTÓRE WSIE UROSŁY — rozkładu
 *   przyrostu nie ustalono [NP].
 *   ⚠⚠ NIE PODAJĘ PRZYCZYN WZROSTU — nie ustalono.
 *
 * KĄT: ROŚNIE TO, CO WOKÓŁ, A ŚRODEK ZOSTAJE TAKI SAM
 * — o tym, że w domu przybywa ludzi przy stole, a nie
 * przybywa kuchni. Kąt z Rydzyny: gmina +34,5 procent,
 * miasto niespełna 27 procent gminy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gmina urosła w latach 2002–2024 o 34,5 procent,
 *   a miasto mieści niespełna 27 procent jej
 *   mieszkańców. TO JEST RDZEŃ,
 * — że nie wiem, które wsie urosły ani dlaczego,
 *   i że tego nie zmyślam,
 * — ⚠⚠ ŻE W DOMU DZIAŁA TO SAMO: dzieci rosną, dochodzą
 *   partnerzy, wnuki, goście — a kuchnia ma te same
 *   metry i ten sam blat co dziesięć lat temu,
 * — ⚠⚠ ŻE ODPOWIEDŹ „ROBIĘ TO SAMO, TYLKO WIĘCEJ"
 *   przestaje działać, bo garnek ma pojemność,
 *   a doba ma godziny,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy większej liczbie osób
 *   zmienia się nie rozmiar kuchni, tylko częstotliwość.
 *   Gotować rzadziej i większymi partiami, zamiast
 *   codziennie odrobinę więcej,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie każdy wzrost wymaga
 *   systemu. Dwie osoby więcej raz w miesiącu to nie
 *   powód, żeby przestawiać całe życie kuchenne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie ma pojemność
 *   i przy dużej rodzinie robi się kilka partii.
 *   MÓWIĘ TO WPROST, BO TO REALNE OGRANICZENIE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NIELICZONE JEST WIĘKSZE OD LICZONEGO —
 *   kąt zajęty (Pyzdry). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o PROPORCJĘ W JEDNYM MOMENCIE; tu o ZMIANĘ
 *   W CZASIE. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DUŻO MIEJSCA, MAŁO ZAGĘSZCZENIA — kąt
 *   zajęty (Sulmierzyce, ta sama fala). ⚠⚠⚠ TAM
 *   GĘSTOŚĆ JEST NISKA, TU NAJWYŻSZA. NIE ROBIĘ
 *   Z TEGO PORÓWNANIA MIĘDZY MIASTAMI.
 * — ⚠⚠ ZERO NAJMŁODSZY PRZY RYNKU — kąt zajęty
 *   (Szamocin). DLATEGO DATY KAMIENIC PODAJĘ
 *   BEZ FIGURY.
 * — ⚠⚠ ZERO NAZWISKO OD MIEJSCA — kąt zajęty
 *   (Miłosław).
 * — ⚠⚠ ZERO JEDNA LICZBA, DWA RÓŻNE MIASTA — kąt
 *   zajęty (Stęszew).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ pary 10 639 / 135,6 / 77.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ roku 2007 przy Pomniku Historii.
 * — NIE PODAJĘ daty założenia miasta.
 * — NIE WYMIENIAM nazwisk ani projektantów.
 * — NIE TWIERDZĘ, które wsie urosły ani dlaczego.
 * — NIE PODAJĘ największej wsi ani wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Rydzyna leży w powiecie leszczyńskim i liczy
 *   2 860 mieszkańców (GUS, 31.12.2024) na 2,2 km²,
 *   czyli 1 300 osób na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 10 706 osób
 *   na 136 km², czyli 78,9 osoby na kilometr
 *   kwadratowy, przy lesistości 24,4 %,
 * — w latach 2002–2024 liczba mieszkańców gminy
 *   wzrosła o 34,5 %,
 * — miasto mieści niespełna 27 procent mieszkańców
 *   gminy,
 * — gmina ma 16 sołectw i 23 miejscowości,
 * — rynek powstał na początku XV w., ratusz pochodzi
 *   z 1761 r., a najstarsze zachowane kamienice
 *   przy rynku z lat 1708, 1731 i 1734,
 * — zespół rezydencjonalno-urbanistyczny uznano
 *   za Pomnik Historii rozporządzeniem z 15 marca
 *   2017 r.,
 * — w gminie leżą m.in. Dąbcze, Kłoda, Kaczkowo,
 *   Jabłonna, Tworzanice, Tworzanki, Nowa Wieś
 *   i Nowy Świat.
 */
export const RYDZYNA: CityContent = {
  slug: "rydzyna",
  h1: "Thermomix Rydzyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rydzyna — cena i prezentacja",
  seoDescription:
    "Thermomix w Rydzynie w powiecie leszczyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rydzyna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rydzynie pod Lesznem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rydzyny w powiecie leszczyńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich szesnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Rydzyna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gmina urosła o ponad jedną trzecią. Miasto zostało małe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rydzynie – jak wygląda prezentacja?",
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
      id: "rosnie-wokol",
      heading: "Rośnie to, co wokół, a środek zostaje taki sam",
      paragraphs: [
        "W latach 2002–2024 liczba mieszkańców gminy Rydzyna wzrosła o trzydzieści cztery i pół procent. Dziś gmina liczy 10 706 osób na stu trzydziestu sześciu kilometrach kwadratowych.",
        "A samo miasto mieści z tego niespełna dwadzieścia siedem procent: 2 860 osób na dwóch i dwóch dziesiątych kilometra kwadratowego. Przyrost dokonał się więc głównie poza miastem. Gmina urosła o ponad jedną trzecią, a miasto zostało małe i bardzo gęste — tysiąc trzysta osób na kilometr kwadratowy. Które wsie urosły i dlaczego, nie ustaliłam i nie będę zgadywać.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o gminie, w której to, czego się nie liczy, okazało się większe od tego, co się liczy — tam chodziło o proporcję uchwyconą w jednym momencie. Tu chodzi o zmianę rozłożoną na dwadzieścia dwa lata.",
        "Piszę o tym, bo w domu dzieje się dokładnie to samo i prawie nikt tego nie zauważa na czas.",
        "Dzieci rosną i zaczynają jeść jak dorośli. Potem przyprowadzają partnerów. Potem są wnuki. Rodzice zaczynają jadać u Was w niedziele. Liczba osób przy stole rośnie latami — powoli, po jednej osobie, nigdy skokowo. A kuchnia ma te same metry, ten sam blat i tę samą lodówkę co dziesięć lat temu.",
        "I przez pewien czas działa odpowiedź „robię to samo, tylko więcej”. Do momentu, w którym przestaje: bo garnek ma pojemność, piekarnik ma jedną blachę, a doba ma tyle godzin, ile ma. Wtedy zaczyna się gotowanie w dwóch turach, odgrzewanie po kolei i wrażenie, że kuchnia jest za mała, choć nic się w niej nie zmieniło.",
        "Ruch jest jeden i dotyczy nie rozmiaru, tylko częstotliwości. Przy większej liczbie osób opłaca się gotować rzadziej i większymi partiami, a nie codziennie odrobinę więcej. Dwa gotowania w tygodniu po większej porcji zajmują mniej czasu łącznie niż siedem małych i zostawiają dni, w których w kuchni nic się nie dzieje.",
        "Uczciwie o drugiej stronie, bo nie każdy wzrost wymaga systemu. Jeśli raz w miesiącu są dwie osoby więcej, to nie jest powód, żeby przestawiać całe życie kuchenne. Wtedy wystarczy jeden większy garnek i spokój. System ma sens dopiero wtedy, gdy większa liczba osób jest stanem normalnym, a nie wyjątkiem.",
        "I uczciwie o sprzęcie, bo to realne ograniczenie. Naczynie Thermomixa ma swoją pojemność i przy dużej rodzinie część dań robi się w dwóch partiach — to nie jest urządzenie, które gotuje w garze na dwanaście osób. Zaletą jest to, że obie partie wychodzą tak samo i że w czasie drugiej można robić co innego. Ale jeśli szukacie czegoś, co jednym ruchem obsłuży duże przyjęcie, to nie jest to.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rydzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób najczęściej siada u Was do stołu. Przy większej rodzinie inaczej dobieram to, co gotujemy na prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rydzynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Rydzyny",
      paragraphs: [
        "Rydzyna leży w powiecie leszczyńskim i liczy 2 860 mieszkańców (GUS, 31.12.2024) na dwóch i dwóch dziesiątych kilometra kwadratowego, czyli tysiąc trzysta osób na kilometr kwadratowy. Cała gmina miejsko-wiejska to 10 706 osób na stu trzydziestu sześciu kilometrach kwadratowych, czyli siedemdziesiąt osiem i dziewięć dziesiątych osoby na kilometr, przy lesistości dwudziestu czterech i czterech dziesiątych procenta; w latach 2002–2024 liczba mieszkańców gminy wzrosła o trzydzieści cztery i pół procent. Gmina ma szesnaście sołectw i dwadzieścia trzy miejscowości. Rynek powstał na początku XV wieku, ratusz pochodzi z 1761 roku, a najstarsze zachowane kamienice przy rynku z lat 1708, 1731 i 1734. Zespół rezydencjonalno-urbanistyczny uznano za Pomnik Historii rozporządzeniem z 15 marca 2017 roku — i warto o tym pamiętać, bo część opisów turystycznych podaje przy tym rok 2007, co jest pomyłką.",
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

  districtsHeading: "Do których części Rydzyny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu sołectw w gminie. Nazywają się między innymi: Dąbcze, Kłoda, Kaczkowo, Jabłonna, Rojęczyn, Przybiń, Moraczewo, Maruszewo, Tarnowa Łąka, Tworzanice, Tworzanki, Nowa Wieś i Nowy Świat. Wszędzie bez dopłaty.",
    "Dwie uwagi praktyczne. Pierwsza, adresowa: w gminie są osobno Tworzanice i Tworzanki, a także Nowa Wieś i Nowy Świat — warto podać pełną nazwę, a przy Dąbczu i Robczysku dopowiedzieć, czy chodzi o wieś, czy o osadę leśną, bo obie nazwy występują podwójnie. Druga, językowa: nazwa odmienia się jak rzeczownik żeński, więc mówi się „do Rydzyny” i „w Rydzynie”, a nie „do Rydzynej” ani „w Rydzynej”.",
  ],
  districts: [],

  nearbyHeading: "Poza Rydzynę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Leszna, Ponieca, Bojanowa, Rawicza, Krobi i Gostynia — wszędzie bezpłatnie, tak samo jak w samej Rydzynie.",
  ],
  nearbyTowns: ["Leszno", "Poniec", "Bojanowo", "Rawicz", "Krobia", "Gostyń"],

  about: blokOMnie("do Rydzyny", "w Rydzynie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rydzyny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: w gminie są osobno Tworzanice i Tworzanki oraz Nowa Wieś i Nowy Świat, a Dąbcze i Robczysko występują podwójnie — jako wieś i jako osada leśna. Językowa: mówi się „do Rydzyny” i „w Rydzynie”, a nie „do Rydzynej”.",
    },
    ...faqWspolne("w Rydzynie"),
    {
      question: "Przy stole jest u nas coraz więcej osób, a kuchnia się nie powiększyła. Co z tym zrobić?",
      answer:
        "Zmienić nie rozmiar, tylko częstotliwość. Rydzyna jest tu dobrym obrazem: gmina urosła w latach 2002–2024 o trzydzieści cztery i pół procent, a samo miasto mieści niespełna dwadzieścia siedem procent jej mieszkańców — przyrost dokonał się wokół, a środek został taki sam. W domu jest identycznie: dzieci rosną, dochodzą partnerzy i wnuki, a blat i lodówka są te same co dziesięć lat temu. Odpowiedź „robię to samo, tylko więcej” działa do momentu, w którym garnek okazuje się za mały, a doba za krótka. Wtedy opłaca się gotować rzadziej i większymi partiami: dwa gotowania w tygodniu po większej porcji zajmują łącznie mniej czasu niż siedem małych. Ale jeśli większa liczba osób zdarza się raz w miesiącu, nie przestawiajcie niczego — wystarczy jeden większy garnek.",
    },
    {
      question: "Czy Thermomix poradzi sobie przy dużej rodzinie?",
      answer:
        "Poradzi, tylko trzeba wiedzieć jak. Naczynie ma swoją pojemność, więc przy dużej rodzinie część dań robi się w dwóch partiach — to nie jest urządzenie do gotowania w garze na dwanaście osób i wolę powiedzieć to wprost. Zaletą jest to, że obie partie wychodzą tak samo, bez pilnowania, i że w trakcie drugiej można zająć się czymś innym. Jeśli natomiast szukacie czegoś, co jednym ruchem obsłuży duże przyjęcie, to nie jest to i nie będę udawać, że jest inaczej. Na prezentacji zwykle gotuję w takiej ilości, w jakiej naprawdę gotujecie u siebie, żeby to było widać.",
    },
  ],

  geo: { lat: 51.7865, lng: 16.6676 },
};
