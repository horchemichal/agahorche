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
 * KOŹMIN WIELKOPOLSKI — powiat krotoszyński,
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA — w powiecie
 *   krotoszyńskim dublet dotyczy SULMIERZYC (gmina
 *   miejska). SPRAWDZONE.
 * MIASTO: 6 091 mieszkańców (GUS 31.12.2024), 5,9 km²,
 *   gęstość 1 034,1 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 5,89 km²]. PODAJĘ.
 *   ⚠⚠ ŹRÓDŁO WTÓRNE PODAJE „OKOŁO 7 TYSIĘCY" —
 *   NIE UŻYWAM.
 * CAŁA GMINA: 12 515 osób, 152,4 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (83 w źródle, 82,12 z dzielenia).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 40.
 * WYSOKOŚĆ: 135 m n.p.m. Rzeka: ORLA.
 *   ⚠⚠⚠ NIE „OBRA" — Obra przepływa przez ZBĄSZYŃ,
 *   opisany W TEJ SAMEJ FALI. A w gminie Koźmin są
 *   wsie STARA OBRA i NOWA OBRA. TO PUŁAPKA WYSOKIEGO
 *   RYZYKA. ROZGRANICZAM W SEKCJI DZIELNIC.
 * ⚠ GEO: 51,8271 / 17,4539.
 *
 * ⚠⚠⚠ ODMIANA — DWA CZŁONY, OBA SIĘ ODMIENIAJĄ:
 *   D. do KOŹMINA WIELKOPOLSKIEGO ·
 *   Ms. w KOŹMINIE WIELKOPOLSKIM ·
 *   N. Koźminem Wielkopolskim.
 *   ⚠⚠⚠ BŁĘDY: „w Koźmin Wielkopolskim", „do Koźmina
 *   Wielkopolski". SKRÓTU „Koźmin Wlkp." W TEKŚCIE
 *   CIĄGŁYM NIE UŻYWAM — rozwijam i odmieniam.
 *   Przymiotnik: KOŹMIŃSKI (Muzeum Ziemi Koźmińskiej).
 *   ⚠ Nie mylić z KOŹMINECKIM (Koźminek, pow. kaliski).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   KOŹMINEK (pow. kaliski, to samo województwo) ·
 *   ⚠⚠⚠ WIEŚ TRZEMESZNO (221 mieszkańców) leży W TYM
 *     SAMYM POWIECIE KROTOSZYŃSKIM, w gminie Rozdrażew
 *     — a TRZEMESZNO to miasto opisane W TEJ SAMEJ
 *     FALI. ROZGRANICZAM W FAQ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1232 r., zapis „Cosmeno".
 *   — PRAWA MIEJSKIE: między 1251 a 1283 r., na prawie
 *     magdeburskim; PIERWSZE POŚWIADCZENIE MIEJSKOŚCI
 *     w dokumencie PRZEMYSŁA II z 1283 r. (dwa zgodne
 *     źródła).
 *     ⚠⚠⚠ WARIANTU „przed 1318 r." NIE UŻYWAM — pochodzi
 *     ze źródła z wykazanym błędem (przypisuje darowiznę
 *     z 1318 r. Kazimierzowi Wielkiemu, który objął tron
 *     w 1333 r.).
 *   — Utraty praw nie ustalono.
 *   — 1793 r. — scalenie trzech ośrodków (patrz RDZEŃ).
 *   ⚠⚠ DAT 1848 I 1919 R. NIE UŻYWAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MIASTO SCALONE Z TRZECH:
 *   Dzisiejszy Koźmin Wielkopolski powstał z TRZECH
 *   osobnych jednostek miejskich:
 *     — KOŹMINA (starego),
 *     — NOWEGO KOŹMINA,
 *     — TRZECIEGO OŚRODKA, znanego też jako LIPOWIEC,
 *       lokowanego w 1775 r. przez ELŻBIETĘ
 *       Z BRANICKICH SAPIEŻYNĘ.
 *   ⚠⚠⚠ DRUGIEJ NAZWY TRZECIEGO OŚRODKA NIE UŻYWAM —
 *   zawiera przymiotnik etniczny. PISZĘ WYŁĄCZNIE
 *   „trzeci ośrodek, zwany Lipowcem".
 *   — SCALENIE W JEDEN ORGANIZM: 1793 r.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1793 − 1775 = 18 LAT
 *   samodzielności najmłodszego; 1793 − 1283 = 510 LAT
 *   miejskości najstarszego. Stosunek 28,3 : 1.
 *   ⚠⚠ DOKŁADNYCH DAT LOKACJI KOŹMINA STAREGO I NOWEGO
 *   NIE USTALONO — NIE PODAJĘ.
 *   ⚠⚠ PRZYCZYN SCALENIA NIE PODAJĘ — prowadzą do
 *   wątku rozbiorowego. PISZĘ SAMĄ DATĘ.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — zamek z pierwszej połowy XIV w., typu „wasserburg"
 *   (zamek na wodzie), dwupiętrowy, z ceglaną
 *   poligonalną wieżą i barokowym hełmem.
 *   ⚠⚠ FUNKCJI OBRONNEJ NIE ROZWIJAM.
 *   ⚠ Bartosz Wezenborg władał nim 1358–1392;
 *     rozbudowa Stanisława Przyjemskiego 1621;
 *     zmiany Sapiehów 1701; adaptacja 1865; pierwsze
 *     badania archeologiczne 1983–85.
 *   ⚠⚠⚠ RÓŻNICY „650 LAT DO PIERWSZYCH BADAŃ" NIE ROBIĘ
 *   KĄTEM — figura zajęta (Zawidów, Puszczykowo).
 *   ⚠ Dziś obiekt mieści szkołę, a źródła wymieniają
 *     też Muzeum Ziemi Koźmińskiej [SP — żadne źródło
 *     nie podaje obu funkcji razem]. PISZĘ TO
 *     Z ZASTRZEŻENIEM.
 *   ⚠⚠ DWÓCH FUNKCJI OBIEKTU NIE ROBIĘ KĄTEM — figura
 *   zajęta (Zbąszyń, ta sama fala).
 * — wiatrak typu koźlak z 1868 r., trójkondygnacyjny,
 *   o konstrukcji słupowo-ryglowej; remont 2024/2025
 *   za około 500 tys. zł.
 * — ⚠⚠ RATUSZA NIE OPISUJĘ — źródła podają dwie daty
 *   budowy różniące się o ok. 70 lat, a figura „spór
 *   o liczbę" jest zajęta (Szamotuły).
 * — ⚠⚠ MIARY ZAMOŻNOŚCI MIASTA Z XV–XVI W. NIE PODAJĘ
 *   — jest nią wielkość kontyngentu wojskowego.
 *   WĄTEK WYKLUCZONY. Sam status zamożności podaję.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO.
 *
 * KĄT: SCALONE Z TRZECH, O RÓŻNYM WIEKU
 * — o kuchni, w której spotykają się trzy sposoby
 * gotowania o bardzo różnym stażu. Kąt z Koźmina:
 * miasto scalono z trzech ośrodków, a najmłodszy
 * przeżył samodzielnie osiemnaście lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dzisiejszy Koźmin Wielkopolski powstał z trzech
 *   osobnych jednostek miejskich, z których trzecią
 *   lokowano w 1775 r., a scalenie nastąpiło w 1793,
 * — ŻE NAJMŁODSZA BYŁA SAMODZIELNA OSIEMNAŚCIE LAT,
 *   A NAJSTARSZA MIAŁA WTEDY ZA SOBĄ CO NAJMNIEJ
 *   PIĘĆSET DZIESIĘĆ LAT MIEJSKOŚCI. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE PRZYCZYN SCALENIA NIE PODAJĘ,
 * — ⚠⚠ ŻE W KAŻDEJ KUCHNI SCALA SIĘ KILKA SPOSOBÓW
 *   GOTOWANIA O BARDZO RÓŻNYM WIEKU: ten po mamie,
 *   ten po partnerze i ten wymyślony przedwczoraj,
 * — ⚠⚠ ŻE NAJMŁODSZY BRONI SIĘ NAJSŁABIEJ, choć często
 *   jest najlepszy — bo nie ma za sobą pięciuset lat
 *   oczywistości,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: przy sporze o sposób
 *   gotowania nazwij, skąd każdy z was go ma. To zdejmuje
 *   z rozmowy pytanie, kto ma rację,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: scalenie zawsze kogoś
 *   kosztuje. Jedna z trzech metod przestaje istnieć
 *   osobno i warto to nazwać, zamiast udawać, że
 *   wszystko zostało,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie wchodzi jako
 *   sposób najmłodszy i dlatego bywa odrzucane
 *   najszybciej. MÓWIĘ WPROST, że nie ma sensu ustawiać
 *   go przeciw metodzie, którą ktoś w domu zna od
 *   trzydziestu lat.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam połączone
 *   części nie zrosły się; tu chodzi o RÓŻNICĘ WIEKU
 *   scalanych części i o to, która z nich broni się
 *   najsłabiej. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO DRUGIE OBOK ZAMIAST NAPRAWY STAREGO — kąt
 *   zajęty (Grodzisk Wielkopolski).
 * — ⚠⚠⚠ ZERO JEDNA RZECZ, DWIE FUNKCJE NARAZ — kąt
 *   zajęty (Zbąszyń, ta sama fala).
 * — ⚠⚠ ZERO NAJSTARSZE LEŻY NA OBRZEŻU — kąt zajęty
 *   (Kępno).
 * — ⚠⚠ ZERO NOWE NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków).
 * — ⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ RODZINY ANI
 *   SUGEROWANIA, ŻE CZYJAŚ METODA JEST GORSZA.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO PRZYMIOTNIKÓW ETNICZNYCH W NAZWACH
 *   HISTORYCZNYCH · ZERO WĄTKU WYZNANIOWEGO
 *   I CMENTARNEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   ROZBIORÓW JAKO WĄTKU · ZERO POŻARÓW JAKO ŻYWIOŁU ·
 *   ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ ludności w wersji „około 7 tysięcy".
 * — NIE PODAJĘ dat lokacji dwóch starszych ośrodków.
 * — NIE UŻYWAM drugiej nazwy trzeciego ośrodka.
 * — NIE PODAJĘ przyczyn scalenia.
 * — NIE OPISUJĘ ratusza.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Koźmin Wielkopolski leży w powiecie krotoszyńskim,
 *   nad Orlą, na wysokości 135 m n.p.m.; miasto liczy
 *   6 091 mieszkańców (GUS, 31.12.2024) na 5,9 km²,
 *   czyli 1 034,1 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 12 515 osób na 152,4 km²
 *   i obejmuje 40 miejscowości,
 * — pierwsza wzmianka pochodzi z 1232 r., w zapisie
 *   „Cosmeno"; prawa miejskie na prawie magdeburskim
 *   miasto otrzymało między 1251 a 1283 r., a pierwsze
 *   poświadczenie jego miejskości znalazło się
 *   w dokumencie Przemysła II z 1283 r.,
 * — dzisiejsze miasto powstało ze scalenia trzech
 *   osobnych ośrodków miejskich: Koźmina, Nowego
 *   Koźmina i trzeciego, zwanego Lipowcem, lokowanego
 *   w 1775 r. przez Elżbietę z Branickich Sapieżynę;
 *   scalenie nastąpiło w 1793 r.,
 * — zamek z pierwszej połowy XIV w. jest budowlą typu
 *   „wasserburg", dwupiętrową, z ceglaną poligonalną
 *   wieżą zwieńczoną barokowym hełmem; Bartosz
 *   Wezenborg władał nim w latach 1358–1392, rozbudowę
 *   przeprowadził Stanisław Przyjemski w 1621 r.,
 *   zmiany Sapiehów pochodzą z 1701 r., adaptacja
 *   z 1865 r., a pierwsze badania archeologiczne
 *   z lat 1983–85,
 * — wiatrak typu koźlak z 1868 r. jest
 *   trójkondygnacyjny, o konstrukcji słupowo-ryglowej;
 *   jego remont w latach 2024–2025 kosztował około
 *   500 tys. zł,
 * — w XV i XVI w. Koźmin był jednym z najbogatszych
 *   miast Wielkopolski.
 */
export const KOZMIN_WIELKOPOLSKI: CityContent = {
  slug: "kozmin-wielkopolski",
  h1: "Thermomix Koźmin Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Koźmin Wielkopolski — cena i prezentacja",
  seoDescription:
    "Thermomix w Koźminie Wielkopolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Koźmin Wielkopolski — prezentacja w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Koźminie Wielkopolskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Koźmina Wielkopolskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu miejscowości w gminie.",

  highlights: highlightyStandardowe("Koźmin Wielkopolski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy miasta scalone w jedno. Najmłodsze miało osiemnaście lat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koźminie Wielkopolskim – jak wygląda prezentacja?",
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
      id: "scalone-z-trzech",
      heading: "Scalone z trzech, o różnym wieku",
      paragraphs: [
        "Dzisiejszy Koźmin Wielkopolski nie jest jednym miastem, tylko trzema, które kiedyś scalono.",
        "Był Koźmin — ten stary, poświadczony jako miasto w dokumencie Przemysła II z 1283 roku. Był Nowy Koźmin. I był trzeci ośrodek, zwany Lipowcem, lokowany dopiero w 1775 roku przez Elżbietę z Branickich Sapieżynę.",
        "Scalono je w jeden organizm w 1793 roku. Przyczyn nie podaję.",
        "Policzmy, bo tu jest sedno: najmłodsze z tych trzech miast było samodzielne osiemnaście lat. Najstarsze miało wtedy za sobą co najmniej pięćset dziesięć lat miejskości. Różnica dwudziestoośmiokrotna — i scalono je jako równorzędne części jednego miasta.",
        "W każdej kuchni dzieje się dokładnie to samo, tylko szybciej.",
        "Bo w jednej kuchni spotykają się trzy sposoby gotowania o bardzo różnym wieku. Ten po mamie, mający czterdzieści lat i status rzeczy oczywistej. Ten, który partner przyniósł ze swojego domu, mający lat trzydzieści i taki sam status — tylko inny. I ten wymyślony przedwczoraj, z filmu albo z rozmowy w pracy, mający dwa dni.",
        "Najmłodszy broni się najsłabiej. Nie dlatego, że jest gorszy — często jest najlepszy — ale dlatego, że nie ma za sobą czterdziestu lat oczywistości. Wystarczy jedno „u nas się tak nie robi” i przestaje istnieć.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o dwóch częściach, które połączono administracyjnie i które się nie zrosły. Tam problemem było samo zrastanie. Tu chodzi o różnicę wieku scalanych części — i o to, która z nich przy pierwszym sporze przegrywa.",
        "Ruch jest jeden i rozbraja większość kuchennych kłótni. Przy sporze o sposób gotowania nazwij, skąd każdy z was go ma. „To po mojej babci”, „to widziałem u kolegi”, „to wyczytałam w środę”. Zdejmuje to z rozmowy pytanie, kto ma rację, i zostawia pytanie, co faktycznie działa u was.",
        "Uczciwie o drugiej stronie: scalenie zawsze kogoś kosztuje. Jedna z trzech metod przestaje istnieć osobno i warto to nazwać, zamiast udawać, że wszystko zostało. W Koźminie zostało jedno miasto, nie trzy.",
        "I uczciwie o sprzęcie. Thermomix wchodzi do domu jako sposób najmłodszy — ma zero lat oczywistości i dlatego bywa odrzucany najszybciej. Nie ma najmniejszego sensu ustawiać go przeciw metodzie, którą ktoś zna od trzydziestu lat i lubi. Ma sens tam, gdzie żadna stara metoda nie działa dobrze: przy rzeczach męczących, powtarzalnych i pilnowanych. Od tego zaczynam na każdej prezentacji.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Koźminie Wielkopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy w domu gotuje więcej niż jedna osoba i czy każda po swojemu. To zmienia całe spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Koźminie Wielkopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Koźmina Wielkopolskiego",
      paragraphs: [
        "Koźmin Wielkopolski leży w powiecie krotoszyńskim, nad Orlą, na wysokości stu trzydziestu pięciu metrów nad poziomem morza. Samo miasto liczy 6 091 mieszkańców (GUS, 31.12.2024) na 5,9 kilometra kwadratowego, czyli tysiąc trzydzieści cztery osoby na kilometr, a cała gmina miejsko-wiejska 12 515 osób na 152,4 kilometra i obejmuje czterdzieści miejscowości. Gęstości dla gminy nie podaję, bo liczba ze źródła się nie domyka. Pierwsza wzmianka pochodzi z 1232 roku, w zapisie „Cosmeno”; prawa miejskie na prawie magdeburskim miasto otrzymało między 1251 a 1283 rokiem, a pierwsze poświadczenie jego miejskości znalazło się w dokumencie Przemysła II z 1283. W piętnastym i szesnastym wieku Koźmin był jednym z najbogatszych miast Wielkopolski. Zamek z pierwszej połowy czternastego wieku jest budowlą typu wasserburg — na wodzie — dwupiętrową, z ceglaną poligonalną wieżą zwieńczoną barokowym hełmem; Bartosz Wezenborg władał nim w latach 1358–1392, rozbudowę przeprowadził Stanisław Przyjemski w 1621, zmiany Sapiehów pochodzą z 1701, adaptacja z 1865, a pierwsze badania archeologiczne z lat 1983–85. Dziś mieści szkołę, a źródła wymieniają też Muzeum Ziemi Koźmińskiej — żadne nie podaje obu funkcji razem. Wiatrak typu koźlak z 1868 roku jest trójkondygnacyjny, o konstrukcji słupowo-ryglowej; jego remont w latach 2024–2025 kosztował około pięciuset tysięcy złotych.",
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

  districtsHeading: "Do których części Koźmina Wielkopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu miejscowości w gminie: Borzęcic, Mokronosa, Staniewa, Skałowa, Gościejewa, Kaniewa, Szymanowa, Suśni, Dębiogóry, Tatarów oraz Starej i Nowej Obry. Wszędzie bez dopłaty.",
    "Dwie uwagi praktyczne. Stara Obra i Nowa Obra to wsie w tej gminie, a Obra to jednocześnie rzeka — tylko nie tutejsza: przez Koźmin płynie Orla. I warto podawać pełną nazwę miasta z członem „Wielkopolski”, bo w tym samym województwie jest Koźminek.",
  ],
  districts: [],

  nearbyHeading: "Poza Koźmin Wielkopolski też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Krotoszyna, Kobylina, Zdun, Dobrzycy i Borku Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samym Koźminie Wielkopolskim.",
  ],
  nearbyTowns: ["Krotoszyn", "Kobylin", "Zduny", "Dobrzyca", "Borek Wielkopolski"],

  about: blokOMnie("do Koźmina Wielkopolskiego", "w Koźminie Wielkopolskim i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Koźmina Wielkopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: odmieniają się oba członki nazwy — „do Koźmina Wielkopolskiego”, „w Koźminie Wielkopolskim”. I praktyczna: w tym samym powiecie krotoszyńskim leży wieś Trzemeszno, a Trzemeszno to także miasto w powiecie gnieźnieńskim — przy podawaniu adresu warto to rozróżnić.",
    },
    ...faqWspolne("w Koźminie Wielkopolskim"),
    {
      question: "W domu gotują dwie osoby i każda po swojemu. Jak to pogodzić?",
      answer:
        "Zaczynając od nazwania, skąd każdy ma swój sposób. Koźmin Wielkopolski scalono w 1793 roku z trzech osobnych miast, z których najmłodsze było samodzielne osiemnaście lat, a najstarsze miało za sobą pięćset dziesięć. W kuchni jest podobnie: spotykają się metody o bardzo różnym stażu, a najmłodsza broni się najsłabiej — nie dlatego, że gorsza, tylko dlatego, że nie ma za sobą lat oczywistości. Powiedzenie „to po mojej babci”, „to wyczytałam w środę” zdejmuje z rozmowy pytanie, kto ma rację.",
    },
    {
      question: "Czy Thermomix nie wejdzie w konflikt z tym, jak gotujemy od lat?",
      answer:
        "Wejdzie, jeśli się go do tego ustawi — i dlatego odradzam. Urządzenie ma w domu zero lat oczywistości i przy pierwszym sporze przegrywa z metodą znaną od trzydziestu lat. Ma sens tam, gdzie żadna stara metoda nie działa dobrze: przy rzeczach męczących, powtarzalnych i wymagających stania przy garnku. Od tego zaczynam na prezentacji, a rzeczy, które ktoś w domu lubi robić ręcznie, zostawiam w spokoju.",
    },
  ],

  geo: { lat: 51.8271, lng: 17.4539 },
};
