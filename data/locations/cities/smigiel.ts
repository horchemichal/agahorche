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
 * ŚMIGIEL — powiat kościański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ ŚMIGIEL NIE MA.
 * MIASTO: 5 628 mieszkańców (GUS 31.12.2024), 5,3 km²,
 *   gęstość 1 061,9 os./km².
 *   ⚠ [ZW — 5 628 / 5,3 = 1 061,9. ZGODNOŚĆ CO DO
 *   DZIESIĄTEJ, JEDYNA IDEALNA W TEJ FALI. PODAJĘ
 *   OBIE LICZBY OBOK SIEBIE.]
 *   ⚠ MIASTO UROSŁO O +4,6% W LATACH 2002–2024.
 *   PODAJĘ — liczba ze źródła, nie moje przeliczenie.
 *   ⚠ DRUGIE ŹRÓDŁO PODAJE 5,2 km². PODAJĘ TYLKO
 *   LICZBĘ GUS.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 17 022 osoby, 189,8 km², gęstość
 *   90 os./km².
 *   ⚠ [ZW — 17 022 / 189,8 = 89,7 → 90. DOMYKA SIĘ.
 *   PODAJĘ.]
 *   ⚠ Gmina to 21,5% ludności i 26,3% powierzchni
 *   powiatu kościańskiego. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠⚠ NAJWIĘKSZA LUDNOŚCIOWO GMINA TEJ FALI.
 * WSIE: wykaz GUS wymienia 51 wsi i osad — NAJWIĘCEJ
 *   Z GMIN TEJ FALI. Znane nazwy: Bielawy, Bronikowo,
 *   Bruszczewo, Czacz, Chełkowo, Nowa Wieś.
 *   ⚠⚠⚠ PEŁNEJ LISTY NIE MAM, więc LICZBY 51 NIE
 *   PODAJĘ JAKO PEWNEJ — piszę „wszystkie wsie
 *   w gminie". ⚠ MOGĘ POWIEDZIEĆ, ŻE WSI JEST
 *   W TEJ GMINIE WIĘCEJ NIŻ W OKOLICZNYCH, BEZ LICZBY.
 *   ⚠⚠ SOŁECTW NIE USTALONO [NP].
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 *   ⚠ BRONIKOWO LEŻY W GMINIE ŚMIGIEL — potwierdzone.
 *     KLUCZEWO — [NP], NIE TWIERDZĘ, GDZIE LEŻY.
 * ⚠ GEO: 52,0092 / 16,5186.
 *
 * ⚠⚠⚠ ODMIANA — NAJWIĘKSZA PUŁAPKA W CAŁEJ FALI.
 *   RUCHOME „E" WYPADA Z RZECZOWNIKA:
 *   D. do ŚMIGLA (NIE „Śmigiela") ·
 *   Ms. w ŚMIGLU (NIE „Śmiegielu") ·
 *   C. Śmiglowi · N. Śmiglem · B. Śmigiel.
 *   ⚠⚠⚠ POTWIERDZENIE: strona urzędu nosi tytuł
 *   „Metryka Śmigla".
 *   ⚠⚠⚠ ALE W PRZYMIOTNIKU „E" WRACA: ŚMIGIELSKI
 *   („Ziemia Śmigielska", „Śmigielska Kolej
 *   Dojazdowa").
 *   ⚠⚠ NAZWA MIESZKAŃCA: ŚMIGIELANIN — potwierdzona
 *   cytatem z tytułu tekstu ośrodka kultury.
 *   ⚠⚠⚠ TO JEDYNE MIASTO TEGO CYKLU, GDZIE NAZWĘ
 *   MIESZKAŃCA MAM Z CYTATU, A NIE Z REKONSTRUKCJI.
 *   MOGĘ JEJ UŻYĆ — ale użyję OSZCZĘDNIE.
 *   ⚠ RODZAJ MĘSKI. NIE jest plurale tantum
 *   i NIE jest rodzaju nijakiego.
 *   ⚠⚠ WZÓR DO ZAPAMIĘTANIA: rzeczownik traci „e"
 *   (Śmigiel → Śmigla → w Śmiglu), przymiotnik
 *   i nazwa mieszkańca „e" zachowują (śmigielski,
 *   śmigielanin). MÓWIĘ TO WPROST W FAQ.
 *
 * ⚠⚠ KOLIZJE NAZW — ONOMASTYCZNE, NIE GEOGRAFICZNE:
 *   — Innej miejscowości Śmigiel w Polsce nie
 *     potwierdzono [NP].
 *   — „Śmigiel" i „Szmigiel" to rozpowszechnione
 *     POLSKIE NAZWISKA z hasłami w słownikach.
 *     WSPOMINAM — przy wyszukiwaniu to realna
 *     przeszkoda.
 *   — PUŁAPKA SŁOWOTWÓRCZA: nazwa brzmi jak zdrobnienie
 *     od „śmigło" i bywa odmieniana jak rzeczownik
 *     nijaki. WSPOMINAM.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: TRZY KONKURENCYJNE DATY —
 *     1388 (badania części historyków), ok. 1400
 *     (data zwyczajowa) i 1415 (data dokumentu
 *     lokacyjnego). ROZRZUT 27 LAT.
 *     ODNOWIENIE: 1460 r., Kazimierz Jagiellończyk.
 *     ⚠⚠⚠ PODAJĘ WSZYSTKIE TRZY I MÓWIĘ, ŻE NIE
 *     WYBIERAM. ⚠⚠ ALE NIE ROBIĘ Z TEGO KĄTU —
 *     rdzeń jest w liczbie wiatraków, nie w datach.
 *   — Utraty praw nie ustalono [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — LEGENDA LICZY WIĘCEJ NIŻ REJESTR:
 *   ŚMIGIEL nazywany jest „miastem wiatraków".
 *   LEGENDA głosi, że stało ich 99, a setnego nigdy
 *   nie udało się zbudować.
 *   REJESTRY podają zupełnie inne liczby:
 *     1415 — 1
 *     1580 — 5
 *     koniec XVII w. — 50 (MAKSIMUM UDOKUMENTOWANE)
 *     1860 — 42
 *     1892 — 48 (na mapie policzono wtedy 41)
 *     1913 — 28
 *     1925 — 20
 *     1936 — 16
 *   ⚠⚠⚠ SERIĘ URYWAM NA 1936 R. Liczb z 1940 r.
 *   I Z OKRESU PO 1945 NIE PODAJĘ — wątek wykluczony.
 *   MÓWIĘ WPROST, ŻE URYWAM SERIĘ, BEZ PODAWANIA
 *   PRZYCZYNY.
 *   DZIŚ STOJĄ DWA: SERWACY I PANKRACY —
 *   OBA PRZYWIEZIONE, z Bronikowa i z Kluczewa.
 *   Ostatni śmigielski rozebrano około 1970 r.;
 *   po jednym został „jedynie murowany fundament".
 *   ⚠⚠ DAT POSTAWIENIA SERWACEGO I PANKRACEGO NIE
 *   PODAJĘ — dwa źródła podają 1978 i 1980.
 *   MÓWIĘ, ŻE SĄ DWIE WERSJE.
 *   ⚠ Oba pochodzą z początku XIX w., a w jednym
 *   jest belka z datą 1726. PODAJĘ.
 *
 * KĄT: LEGENDA LICZY WIĘCEJ NIŻ REJESTR
 * — o tym, że pamięć zawyża liczby w jedną stronę,
 * i że winę mierzymy wobec liczby zawyżonej.
 * Kąt ze Śmigla: legenda mówi o dziewięćdziesięciu
 * dziewięciu wiatrakach, a udokumentowane maksimum
 * to pięćdziesiąt.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Śmigiel nazywany jest miastem wiatraków,
 *   a legenda mówi o 99 i o setnym, którego nie udało
 *   się zbudować,
 * — że rejestry podają 1 (1415), 5 (1580), 50
 *   (koniec XVII w., maksimum), 42 (1860), 48 (1892),
 *   28 (1913), 20 (1925), 16 (1936). TO JEST RDZEŃ,
 * — ⚠⚠ że serię urywam na 1936 r. i mówię to wprost,
 * — że dziś stoją dwa i oba zostały przywiezione
 *   z innych wsi, a ostatni miejscowy rozebrano
 *   około 1970 r.,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „kiedyś wszystko
 *   robiło się od zera", „babcia gotowała codziennie
 *   po kilka dań" — to liczby z legendy, nie
 *   z rejestru,
 * — ⚠⚠ ŻE NAJGORSZE JEST TO, ŻE WINĘ MIERZYMY
 *   WOBEC TEJ ZAWYŻONEJ LICZBY,
 * — ⚠⚠ ŻE PAMIĘĆ MYLI SIĘ W JEDNĄ STRONĘ: zapamiętuje
 *   szczyt i święta, nie zwykłe wtorki,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zamiast „kiedyś" spytaj
 *   konkretnie — ile dań, w który dzień, ile osób
 *   pomagało,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: legenda nie jest
 *   kłamstwem i nie każę jej wyrzucać. Jest dobra jako
 *   opowieść i zła jako punkt odniesienia dla siebie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie przywróci
 *   żadnej dawnej liczby dań i nie będę tego obiecywać.
 *   Zdejmuje stanie przy garnku, a nie potrzebę
 *   rozliczania się z wyobrażeniem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły). ⚠⚠⚠ TO
 *   NAJBLIŻSZY SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE:
 *   tam dwie liczby były obie prawdziwe, bo mierzyły
 *   różne rzeczy; TU jedna liczba jest z opowieści,
 *   a druga z rejestru, i to nie jest spór o definicję.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ, KTÓRA OPISUJE CIĄG, KTÓREGO
 *   NIE BYŁO — kąt zajęty (Oborniki). NIE LICZĘ TU
 *   ŻADNEJ ŚREDNIEJ Z SERII.
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ, KTÓRA NIE JEST SPISEM
 *   — kąt zajęty (Mosina).
 * — ⚠⚠⚠ ZERO OPISANYCH TYLKO NAJWIĘKSZYCH — kąt
 *   zajęty (Wronki).
 * — ⚠⚠⚠ ZERO „DOMOWE NAZYWA ZŁOŻENIE, NIE POCHODZENIE"
 *   — kąt zajęty (Buk). ⚠⚠⚠ DWA PRZYWIEZIONE WIATRAKI
 *   LEŻĄ BARDZO BLISKO TEJ FIGURY. DLATEGO PODAJĘ JE
 *   JAKO FAKT ZAMYKAJĄCY, A NIE JAKO MORAŁ, I NIE
 *   WYCIĄGAM Z NICH WNIOSKU O „POCHODZENIU CZĘŚCI".
 * — ⚠⚠ ZERO WIĘCEJ TABLIC NIŻ PRZYSTANKÓW — kąt
 *   zajęty (Złotów).
 * — ⚠⚠ ZERO ZGADZANIA SIĘ CO DO TEGO, CZEGO NIE WIDAĆ
 *   — kąt zajęty (Trzemeszno).
 * — ⚠⚠ ZERO DRUGIEGO OBOK ZAMIAST NAPRAWY STAREGO —
 *   kąt zajęty (Grodzisk Wielkopolski). DLATEGO WĄTKU
 *   „kolej wąskotorowa zamiast ominiętej magistrali"
 *   NIE ROZWIJAM — podaję kolej jako fakt w części
 *   o rodzinie.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OŚMIESZANIA DAWNEGO GOTOWANIA ANI
 *   BABĆ. Sekcja zdejmuje winę, nie odbiera szacunku.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I OKRESU PO NIM · ZERO
 *   PRZESIEDLEŃ I NIEMIECKICH NAZW · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   ALKOHOLU I MŁYNARSTWA JAKO PRZEMYSŁU SPOŻYWCZEGO
 *   Z TWIERDZENIAMI O JAKOŚCI · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA · ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczb wiatraków po 1936 r.
 * — NIE PODAJĘ przyczyny urwania serii.
 * — NIE PODAJĘ daty postawienia Serwacego i Pankracego.
 * — NIE TWIERDZĘ, gdzie leży Kluczewo.
 * — NIE PODAJĘ liczby wsi ani sołectw.
 * — NIE WYBIERAM między 1388, ok. 1400 i 1415.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ dzisiejszej długości czynnej trasy
 *   kolei wąskotorowej.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE TWIERDZĘ, że legenda o 99 wiatrakach jest
 *   kłamstwem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Śmigiel leży w powiecie kościańskim, liczy 5 628
 *   mieszkańców (GUS, 31.12.2024) na 5,3 km², czyli
 *   1 061,9 osoby na kilometr kwadratowy, i urósł
 *   o 4,6% w latach 2002–2024,
 * — cała gmina miejsko-wiejska to 17 022 osoby na
 *   189,8 km², czyli 90 osób na kilometr kwadratowy;
 *   to 21,5% ludności i 26,3% powierzchni powiatu,
 * — prawa miejskie podawane są pod trzema datami:
 *   1388, około 1400 i 1415 (data dokumentu
 *   lokacyjnego); odnowił je w 1460 r. Kazimierz
 *   Jagiellończyk,
 * — Śmigiel nazywany jest miastem wiatraków; legenda
 *   mówi o 99 i o setnym, którego nie udało się
 *   zbudować,
 * — rejestry podają: 1 wiatrak w 1415 r., 5 w 1580 r.,
 *   50 pod koniec XVII w. (udokumentowane maksimum),
 *   42 w 1860 r., 48 w 1892 r. (na mapie policzono
 *   wtedy 41), 28 w 1913 r., 20 w 1925 r., 16
 *   w 1936 r.,
 * — dziś stoją dwa wiatraki, Serwacy i Pankracy, oba
 *   przywiezione — z Bronikowa i z Kluczewa; oba
 *   pochodzą z początku XIX w., a w jednym jest belka
 *   z datą 1726; ostatni śmigielski wiatrak rozebrano
 *   około 1970 r. i został po nim murowany fundament,
 * — wieża ciśnień ma 49 m i pochodzi z okresu budowy
 *   wodociągów w latach 1912–1916,
 * — pierwszy odcinek kolei wąskotorowej, Krzywiń –
 *   Stare Bojanowo, oddano 17 września 1900 r.;
 *   pierwotny rozstaw szyn wynosił 1000 mm, a decyzję
 *   o przekuciu na 750 mm podjęto w 1952 r., prace
 *   trwały do 1953 r.; dziś czynna jest relacja
 *   Stare Bojanowo – Śmigiel – Nowa Wieś,
 * — w gminie leżą m.in. Bronikowo, Czacz, Bruszczewo,
 *   Chełkowo, Bielawy i Nowa Wieś.
 */
export const SMIGIEL: CityContent = {
  slug: "smigiel",
  h1: "Thermomix Śmigiel – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Śmigiel — cena i prezentacja",
  seoDescription:
    "Thermomix w Śmiglu w powiecie kościańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Śmigiel — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Śmiglu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Śmigla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Śmigiel"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Legenda mówi dziewięćdziesiąt dziewięć. Rejestr — pięćdziesiąt.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Śmiglu – jak wygląda prezentacja?",
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
      id: "legenda-i-rejestr",
      heading: "Legenda liczy więcej niż rejestr",
      paragraphs: [
        "Śmigiel nazywa się miastem wiatraków. Legenda mówi, że stało ich dziewięćdziesiąt dziewięć, a setnego nigdy nie udało się zbudować.",
        "Rejestry podają inne liczby. W 1415 roku — jeden. W 1580 — pięć. Pod koniec siedemnastego wieku — pięćdziesiąt, i to jest udokumentowane maksimum. W 1860 — czterdzieści dwa. W 1892 — czterdzieści osiem, choć na ówczesnej mapie policzono ich czterdzieści jeden. W 1913 — dwadzieścia osiem. W 1925 — dwadzieścia. W 1936 — szesnaście. Serię urywam tutaj świadomie, bo dalsze lata wchodzą w tematy, których na tej stronie nie ruszam.",
        "Pięćdziesiąt to dużo. To naprawdę dużo wiatraków na jedno miasto i nikt tego nie kwestionuje. Ale nie jest to dziewięćdziesiąt dziewięć — a w opowieści zostało dziewięćdziesiąt dziewięć.",
        "Piszę o tym, bo w kuchni mierzymy się dokładnie z taką liczbą.",
        "„Kiedyś wszystko robiło się od zera.” „Babcia codziennie gotowała po kilka dań.” „Dawniej nikt nie kupował gotowego.” To są liczby z legendy, nie z rejestru. Zawyżone — nie ze złej woli, tylko dlatego, że pamięć myli się w jedną stronę. Zapamiętuje szczyt, święta, przyjazd rodziny, stół zastawiony na osiemnaście osób. Nie zapamiętuje zwykłego wtorku, kiedy była zupa z wczoraj i chleb ze sklepu.",
        "I najgorsze jest to, co robimy z tą liczbą dalej: rozliczamy się z niej. Poczucie, że „nie daję rady tak jak kiedyś”, jest mierzone wobec dziewięćdziesięciu dziewięciu wiatraków, których nigdy nie było.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch liczbach, z których obie były prawdziwe, bo mierzyły dwie różne rzeczy. Tu jest inaczej i prościej. Jedna liczba jest z opowieści, druga z rejestru, i nie ma między nimi żadnego sporu o definicję — jest zwyczajna różnica między tym, co się pamięta, a tym, co zapisano.",
        "Ruch jest jeden i jest prawie niewygodny w swojej prostocie. Kiedy pojawi się „kiedyś”, dopytaj o konkret. Ile dań. W który dzień tygodnia. Ile osób pomagało w kuchni. Czy mieszkało się wtedy z babcią, ciotką i sąsiadką pod jednym dachem. Jak daleko był sklep i co w nim było. Po czterech takich pytaniach liczba z legendy zwykle zjeżdża do rejestru — i wtedy okazuje się, że robicie mniej więcej tyle samo albo więcej, tylko bez czterech par rąk.",
        "Uczciwie o drugiej stronie, bo nie każę nikomu wyrzucać legendy. Ona nie jest kłamstwem — jest opowieścią i jako opowieść jest świetna; miasto ma dzięki niej nazwę, którą zna cała okolica. Jest zła w jednym, konkretnym zastosowaniu: jako miara dla siebie. Opowiadajcie ją dalej. Tylko nie liczcie się z nią.",
        "Na koniec fakt, który tę historię zamyka i który lubię najbardziej. W Śmiglu stoją dziś dwa wiatraki, Serwacy i Pankracy. Oba zostały przywiezione — z Bronikowa i z Kluczewa. Oba pochodzą z początku dziewiętnastego wieku, a w jednym znajduje się belka z datą 1726. Ostatni śmigielski wiatrak rozebrano około 1970 roku; został po nim murowany fundament. Miasto wiatraków ma dwa i żaden nie jest stąd — a nazwa trzyma się dobrze.",
        "I uczciwie o sprzęcie, na wypadek gdyby ktoś czytał to jako obietnicę. Thermomix nie przywróci żadnej dawnej liczby dań i nie po to się go kupuje. Zdejmuje jedną rzecz: konieczność stania przy garnku, bo temperaturę i mieszanie prowadzi sam. Nie zdejmuje potrzeby rozliczania się z wyobrażeniem — to trzeba zrobić samemu i najlepiej przed zakupem, nie po.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Śmiglu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile dań realnie powstaje u Was w zwykłym tygodniu. Nie w najlepszym — w zwykłym.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Śmiglu"),
    sekcjaRaty("w Śmiglu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Śmigla",
      paragraphs: [
        "Śmigiel leży w powiecie kościańskim i liczy 5 628 mieszkańców (GUS, 31.12.2024) na 5,3 kilometra kwadratowego, czyli tysiąc sześćdziesiąt dwie osoby na kilometr — to jedyne miasto, o jakim pisałam w tej okolicy, gdzie liczba ze źródła zgadza się z ilorazem co do dziesiątej części, więc podaję obie bez zastrzeżeń. W latach 2002–2024 miasto urosło o 4,6 procent. Cała gmina miejsko-wiejska to 17 022 osoby na 189,8 kilometra kwadratowego, czyli dziewięćdziesiąt osób na kilometr, i obejmuje jedną czwartą powierzchni powiatu. Prawa miejskie podawane są pod trzema datami — 1388, około 1400 i 1415, rokiem dokumentu lokacyjnego — i nie wybieram między nimi; odnowił je w 1460 roku Kazimierz Jagiellończyk. Wieża ciśnień ma czterdzieści dziewięć metrów i pochodzi z okresu budowy wodociągów w latach 1912–1916. Pierwszy odcinek kolei wąskotorowej, Krzywiń – Stare Bojanowo, oddano 17 września 1900 roku; szyny miały wtedy rozstaw tysiąca milimetrów, a decyzję o przekuciu na siedemset pięćdziesiąt podjęto w 1952 roku i prace trwały do 1953. Dziś czynna jest relacja Stare Bojanowo – Śmigiel – Nowa Wieś. W gminie leżą między innymi Bronikowo, Czacz, Bruszczewo, Chełkowo i Bielawy — wsi jest tu więcej niż w okolicznych gminach.",
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

  districtsHeading: "Do których części Śmigla dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Bronikowa, Czacza, Bruszczewa, Chełkowa, Bielaw, Nowej Wsi i pozostałych. Wsi jest w tej gminie więcej niż w okolicznych i wszędzie dojeżdżam bez dopłaty.",
    "Jedna uwaga językowa, bo to najtrudniejsza nazwa w okolicy: „e” wypada z odmiany rzeczownika. Mówi się „do Śmigla” i „w Śmiglu”, nie „do Śmigiela”. Za to przymiotnik „e” zachowuje — „śmigielski”, jak w nazwie Śmigielskiej Kolei Dojazdowej.",
  ],
  districts: [],

  nearbyHeading: "Poza Śmigiel też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Kościana, Czempinia, Wolsztyna, Rakoniewic, Krzywinia i Grodziska Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samym Śmiglu.",
  ],
  nearbyTowns: ["Kościan", "Czempiń", "Wolsztyn", "Rakoniewice", "Krzywiń", "Grodzisk Wielkopolski"],

  about: blokOMnie("do Śmigla", "w Śmiglu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Śmigla bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga językowa, bo nazwa jest podstępna: „e” wypada z odmiany rzeczownika, więc mówi się „do Śmigla” i „w Śmiglu”, a nie „do Śmigiela”. W przymiotniku „e” wraca — „śmigielski” — i tak samo w nazwie mieszkańca, czyli „śmigielanin”. Dodatkowa przeszkoda jest przy wyszukiwaniu: Śmigiel i Szmigiel to rozpowszechnione polskie nazwiska, więc warto dopisać powiat kościański.",
    },
    ...faqWspolne("w Śmiglu"),
    {
      question: "Mam poczucie, że kiedyś w domach gotowano znacznie więcej niż ja. To prawda?",
      answer:
        "Częściowo — i mniej, niż podpowiada pamięć. Śmigiel jest tu najlepszym argumentem, jaki znam. Nazywa się miastem wiatraków i legenda mówi o dziewięćdziesięciu dziewięciu, a rejestry podają: jeden w 1415 roku, pięć w 1580, pięćdziesiąt pod koniec siedemnastego wieku, czterdzieści dwa w 1860, dwadzieścia osiem w 1913, dwadzieścia w 1925, szesnaście w 1936. Pięćdziesiąt to dużo, ale to nie dziewięćdziesiąt dziewięć. Tak samo działa „kiedyś wszystko robiło się od zera”: pamięć zapamiętuje szczyt i święta, nie zwykły wtorek z zupą z wczoraj. Przy następnym „kiedyś” dopytajcie o konkret — ile dań, w który dzień, ile osób pomagało w kuchni, jak daleko był sklep. Liczba zwykle zjeżdża, a przy okazji okazuje się, że robicie tyle samo albo więcej, tylko bez czterech par rąk.",
    },
    {
      question: "Czy Thermomix sprawi, że zacznę gotować tak jak kiedyś w rodzinie?",
      answer:
        "Nie i nie chcę tego obiecywać. Żadne urządzenie nie przywraca dawnej liczby dań ani dawnego składu domu, w którym te dania powstawały. Thermomix zdejmuje jedną konkretną rzecz: konieczność stania przy garnku, bo temperaturę i mieszanie prowadzi sam, a danie powstaje w jednym naczyniu. Dla wielu osób to wystarcza, żeby gotować częściej, ale powód jest prozaiczny — mniej pilnowania i mniej zmywania, nie powrót do przeszłości.",
    },
  ],

  geo: { lat: 52.0092, lng: 16.5186 },
};
