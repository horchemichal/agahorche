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
 * KAMIENNA GÓRA — powiat kamiennogórski,
 * woj. dolnośląskie. REGION_DOLNOSLASKIE.
 * MIASTO JEST SAMODZIELNĄ GMINĄ MIEJSKĄ.
 * MIASTO: 16 942 mieszkańców (GUS 31.12.2024), 18,0 km²,
 *   gęstość 939,1 os./km².
 * ⚠⚠⚠ PUŁAPKA KRYTYCZNA — INNA NIŻ DOTĄD:
 *   OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA KAMIENNA GÓRA
 *   (8 810 osób, 158,1 km²), KTÓRA MIASTA NIE OBEJMUJE.
 *   ⚠⚠⚠ NIE SUMUJĘ TYCH LICZB. 16 942 + 8 810 = 25 752
 *   TO NIE JEST „LUDNOŚĆ KAMIENNEJ GÓRY".
 *   ⚠⚠ W TEKŚCIE PISZĘ WYŁĄCZNIE O MIEŚCIE.
 *   Gminę wiejską wymieniam tylko przy dojazdach,
 *   jako osobną jednostkę. TWARDA GRANICA.
 * ⚠ GEO: 50,7833 / 16,0333 (16°03′E, 50°47′N).
 * ⚠ WYSOKOŚĆ: 435–560 m n.p.m. — miasto rozpięte
 *   na 125 m różnicy wysokości.
 *
 * ⚠⚠ HOMONIM: KAMIENNA GÓRA (Gdynia) — dzielnica
 *   i wzniesienie nad morzem, dominuje w wynikach.
 *   ≠ SKARŻYSKO-KAMIENNA (świętokrzyskie)
 *   ≠ wieś KAMIENNA GÓRA (świętokrzyskie)
 *   ≠ GÓRA KAMIEŃSKA (łódzkie).
 *   ⚠ W Polsce są dziesiątki wzniesień o tej nazwie.
 *   ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠⚠ ODMIANA: ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   „w KAMIENNEJ GÓRZE", „do KAMIENNEJ GÓRY".
 *   ⚠⚠⚠ NIGDY „w Kamienna Górze", „do Kamienna Góry".
 *   PRZYMIOTNIK: KAMIENNOGÓRSKI — jeden wyraz,
 *   bez łącznika.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny z Kamiennej Góry".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ PRAWA MIEJSKIE: ŹRÓDŁA SPRZECZNE.
 *   1232 i 1249 — pierwsze wzmianki; 1249 — zezwolenie
 *   na lokowanie osady; 1292 — PONOWNE nadanie praw
 *   przez Bolka I Surowego.
 *   ⚠⚠⚠ PISZĘ „lokacja sięga 1249 r., prawa miejskie
 *   potwierdzone w 1292 r." I NIE WYBIERAM JEDNEJ DATY.
 *   ⚠ ZAKONU BENEDYKTYNÓW NIE WYMIENIAM — wątek zakonny.
 * — 1294 — kościół św. Piotra i Pawła; gotyckie
 *   prezbiterium XIV w.; przebudowa w XV w. po pożarze.
 *   ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 * — ⚠⚠ KOŚCIOŁA ŁASKI (1709–1720, 5 000 osób, 2 400
 *   siedzących, organy 1724 za 3 100 talarów, ołtarz
 *   1725 za 1 100 talarów, zegar 1766) NIE UŻYWAM
 *   JAKO KĄTA I NIE OPISUJĘ WNĘTRZA — wątek wyznaniowy.
 *   ⚠ Sam fakt jedenastoletniej budowy i pojemności mogę
 *   podać skrótowo w sekcji rodzinnej jako dane
 *   budowlane — i tylko tyle.
 * — 1905 — obecny ratusz; wieża niżej czworoboczna,
 *   wyżej ośmioboczna. ⚠ WYSOKOŚCI NIE USTALONO.
 * — Muzeum Tkactwa: muzeum regionalne z lat 30. XX w.,
 *   nazwa od 1969, budynek restaurowany 2007.
 *   Skarb z Dębrznika: 6 360 srebrnych monet
 *   z XIV–XVI w. Kamienica w XVIII w. należała
 *   do kupca handlującego płótnem lnianym.
 *   ⚠⚠ SKARBU NIE UŻYWAM JAKO KĄTA — „policzyć,
 *   ile masz" prowadzi w obszar zajęty (Dobrzany).
 * — Zalew Kamienna Góra — zbiornik retencyjny oddany
 *   do użytku w 1972 r. ⚠ POWIERZCHNI NIE USTALONO.
 * — Rzeka Bóbr, u ujścia prawego dopływu — Zadrnej.
 * — Wrocław ok. 100 km (zweryfikowane).
 *   ⚠ POZOSTAŁE ODLEGŁOŚCI SZACUNKOWE (±3 km) —
 *   podaję „około": Lubawka ok. 9 km, Marciszów ok. 12,
 *   Boguszów-Gorce ok. 18, Wałbrzych ok. 25,
 *   Kowary ok. 26, Jelenia Góra ok. 36.
 * — ⚠ ROKU OTWARCIA KOLEI NIE USTALONO — nie podaję.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — LISTA PRODUKTÓW TRADYCYJNYCH:
 *   „KAMIENNOGÓRSKI SER PLEŚNIOWY", WPIS 12 SIERPNIA
 *   2010 R., kategoria produkty mleczne.
 *   ⚠⚠ OPIS MRiRW PODAJE WYMIAR: PŁASKI WALEC
 *   O ŚREDNICY OKOŁO 20 CM I WYSOKOŚCI OKOŁO 10 CM,
 *   O MASIE 2,5–3 KG. TO JEST CAŁY KĄT.
 *   ⚠ Obszar pochodzenia w opisie: „Kamienna Góra
 *   i okolice". Tradycje mleczarskie datowane
 *   w opisie na XIII–XIV w.
 *   ⚠⚠ WPISY NA LPT SĄ FORMALNIE REJESTROWANE
 *   NA POZIOMIE WOJEWÓDZTWA, NIE GMINY. Piszę więc
 *   „wpis nazwany od tego miasta", nigdy „produkt
 *   przypisany gminie".
 *   ⚠⚠⚠ ZERO TWIERDZEŃ ZDROWOTNYCH O SERZE.
 *   ⚠⚠⚠ ZERO PORAD O DOJRZEWANIU, PRZECHOWYWANIU
 *   I PODAWANIU. Opisuję WYŁĄCZNIE to, że karta
 *   podaje wymiar.
 *   ⚠⚠ ZERO OPISU SMAKU, SKÓRKI I PLEŚNI — to prowadzi
 *   do porad o żywności. Podaję sam wymiar i masę.
 *
 * KĄT: USTALONY WYMIAR — o tym, że powtarzalny wynik
 * bierze się z jednej ustalonej wielkości, a nie
 * z wprawy ani z talentu.
 * Kąt od karty produktu: opis kamiennogórskiego sera
 * podaje jego wymiary co do centymetra, choć nikt nie
 * musiałby ich podawać, żeby powiedzieć, czym ten ser
 * jest.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że „Kamiennogórski ser pleśniowy" trafił na Listę
 *   Produktów Tradycyjnych 12 sierpnia 2010 r., a opis
 *   podaje jego wymiar: płaski walec o średnicy około
 *   dwudziestu centymetrów, wysokości około dziesięciu
 *   i masie od dwóch i pół do trzech kilogramów,
 * — ŻE TO JEST NIETYPOWE — w opisie produktu można było
 *   poprzestać na tym, z czego i jak się go robi.
 *   Wymiar podano, bo wymiar jest częścią wyniku.
 *   To jest rdzeń,
 * — ⚠⚠ ŻE W DOMOWEJ KUCHNI JEST DOKŁADNIE ODWROTNIE
 *   I WSZYSCY SIĘ Z TEGO ŚMIEJEMY: „na oko", „ile
 *   wejdzie", „w czym akurat jest miejsce". A potem
 *   dziwimy się, że ta sama rzecz raz wychodzi,
 *   a raz nie,
 * — ⚠⚠ ŻE NAJPROSTSZA POPRAWA POLEGA NIE NA MIERZENIU
 *   SKŁADNIKÓW, TYLKO NA USTALENIU JEDNEJ WIELKOŚCI
 *   I NIEZMIENIANIU JEJ: ten sam garnek do tej samej
 *   rzeczy, ta sama blaszka, ta sama grubość krojenia.
 *   Wtedy przestaje się mierzyć, bo naczynie mierzy
 *   za Ciebie,
 * — ⚠⚠ ŻE TO DZIAŁA, BO WIĘKSZOŚĆ DOMOWYCH BŁĘDÓW
 *   NIE WYNIKA Z PROPORCJI, TYLKO Z GRUBOŚCI,
 *   WYSOKOŚCI I ILOŚCI — czyli z wymiaru, a nie
 *   ze składu,
 * — ⚠⚠ ŻE Z TEGO BIERZE SIĘ TEŻ PRAKTYCZNY WNIOSEK
 *   O SPRZĘCIE: dwa podobne naczynia w kuchni są gorsze
 *   niż jedno, bo psują stałą. To nie jest argument
 *   za kupowaniem, tylko za trzymaniem się jednego,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: STAŁY WYMIAR OGRANICZA.
 *   Raz na jakiś czas trzeba zrobić coś innej wielkości
 *   i wtedy wszystkie przyzwyczajenia są nieprzydatne.
 *   Nikt nie mówi, żeby mieć jedno naczynie do
 *   wszystkiego,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma jedno naczynie
 *   o stałych wymiarach i to jest w tym kontekście jego
 *   największa zaleta i największe ograniczenie naraz.
 *   Zaleta, bo wymiar przestaje być zmienną. Ograniczenie,
 *   bo bardzo duże ilości robi się w turach.
 *   MÓWIĘ OBIE STRONY.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, ŻE ROZMIAR ZEWNĘTRZNY NIE MÓWI O WNĘTRZU;
 *   TUTAJ o TO, ŻE STAŁA WIELKOŚĆ DAJE POWTARZALNOŚĆ.
 *   Ani słowa o tym, ile coś mieści, i o przelewaniu
 *   wody. ROZGRANICZAM WPROST.
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM I KUPOWANIA POD
 *   NAJRZADSZY PRZYPADEK — kąt zajęty (Węgorzyno).
 *   Nie piszę, jak dobrać wielkość naczynia do liczby
 *   osób.
 * — ⚠⚠⚠ ZERO SKALOWANIA PORCJI I PRZELICZANIA
 *   PRZEPISU — kąt zajęty (Świdwin).
 * — ⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty (Choszczno).
 *   Piszę o wymiarze jako o STAŁEJ, nigdy o tym,
 *   jak kształt wpływa na gotowanie.
 * — ⚠⚠ ZERO GRUBOŚCI DNA — kąt zajęty (Resko).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie robię przeglądu szafek.
 * — ⚠⚠ ZERO STAŁYCH WARUNKÓW ZAMIAST PILNOWANIA —
 *   kąt zajęty (Kalisz Pomorski).
 * — ⚠⚠ ZERO POLICZENIA, ILE SIĘ MA — kąt zajęty
 *   (Dobrzany). Skarbu z 6 360 monet nie używam.
 * — ⚠ ZERO TEMPA I POŚPIECHU — kąt zajęty (Tuczno).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH WYMIARÓW DLA CZYTELNIKA —
 *   podaję WYŁĄCZNIE zasadę „ustal jedną i nie zmieniaj".
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠⚠ W SZCZEGÓLNOŚCI
 *   ŻADNYCH O SERZE I PLEŚNI. To jest najgroźniejsze
 *   miejsce na tej stronie.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠⚠ ANI SŁOWA O DOJRZEWANIU I PRZECHOWYWANIU SERA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PODZIEMNYCH KOMPLEKSÓW Z OKRESU WOJNY
 *   (Riese, Arado) — to dominujący wątek w wynikach
 *   wyszukiwania dla tego miasta. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I ZAKONNEGO — kościołów
 *   nie opisuję, benedyktynów i cystersów nie wymieniam.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO TWIERDZEŃ O WŁAŚCIWOŚCIACH SERA.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE SUMUJĘ miasta i gminy wiejskiej o tej samej
 *   nazwie — to dwie odrębne jednostki.
 * — NIE PODAJĘ jednej daty praw miejskich.
 * — NIE PODAJĘ wysokości wieży ratuszowej.
 * — NIE PODAJĘ roku otwarcia kolei.
 * — NIE PODAJĘ powierzchni Zalewu Kamienna Góra.
 * — NIE PISZĘ, że produkt jest „przypisany gminie" —
 *   wpisy LPT rejestruje się na poziomie województwa.
 * — NIE MÓWIĘ NIC O WŁAŚCIWOŚCIACH, SMAKU ANI
 *   PRZECHOWYWANIU SERA.
 * — NIE PODAJĘ odległości jako pomiarów drogowych
 *   poza Wrocławiem.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNYCH KONKRETNYCH WYMIARÓW NACZYŃ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kamienna Góra leży w powiecie kamiennogórskim,
 *   nad Bobrem, u ujścia Zadrnej, około stu kilometrów
 *   od Wrocławia; miasto rozpięte jest na wysokości
 *   od 435 do 560 m n.p.m., czyli na stu dwudziestu
 *   pięciu metrach różnicy,
 * — liczy 16 942 mieszkańców (GUS, 31.12.2024)
 *   na 18,0 km² i jest samodzielną gminą miejską;
 *   obok istnieje odrębna gmina wiejska o tej samej
 *   nazwie, licząca 8 810 osób na 158,1 km²,
 * — lokacja miasta sięga 1249 r., a prawa miejskie
 *   potwierdził w 1292 r. Bolko I Surowy; pierwsze
 *   wzmianki pochodzą z 1232 i 1249 r.,
 * — obecny ratusz ukończono w 1905 r.; jego wieża jest
 *   w dolnej części czworoboczna, a wyżej ośmioboczna,
 * — w Muzeum Tkactwa przechowywany jest skarb
 *   z Dębrznika — 6 360 srebrnych monet z XIV–XVI w.;
 *   muzeum regionalne powstało w latach trzydziestych
 *   XX w., a obecną nazwę nosi od 1969 r.,
 * — zbiornik retencyjny Zalew Kamienna Góra oddano
 *   do użytku w 1972 r.,
 * — „Kamiennogórski ser pleśniowy" wpisano na Listę
 *   Produktów Tradycyjnych Ministerstwa Rolnictwa
 *   i Rozwoju Wsi 12 sierpnia 2010 r. w kategorii
 *   produktów mlecznych; opis podaje jego wymiary:
 *   płaski walec o średnicy około 20 cm i wysokości
 *   około 10 cm, o masie od 2,5 do 3 kg.
 */
export const KAMIENNA_GORA: CityContent = {
  slug: "kamienna-gora",
  h1: "Thermomix Kamienna Góra – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kamienna Góra — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kamiennej Górze: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kamienna Góra — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kamiennej Górze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kamiennej Góry z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w okolicy.",

  highlights: highlightyStandardowe("Kamienna Góra"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia centymetrów średnicy, dziesięć wysokości. Wymiar zapisano, bo jest częścią wyniku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kamiennej Górze – jak wygląda prezentacja?",
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
      id: "ustalony-wymiar",
      heading: "Dwadzieścia centymetrów na dziesięć",
      paragraphs: [
        "Na krajowej Liście Produktów Tradycyjnych jest wpis nazwany od tego miasta: „Kamiennogórski ser pleśniowy”, wpisany 12 sierpnia 2010 roku.",
        "Ciekawe jest to, co stoi w jego opisie. Płaski walec o średnicy około dwudziestu centymetrów, wysokości około dziesięciu, o masie od dwóch i pół do trzech kilogramów.",
        "Można było tego nie podawać. Do opisania, czym ten ser jest, wystarczyłoby powiedzieć, z czego się go robi i jak. A jednak wymiar zapisano — bo wymiar jest częścią wyniku, nie dodatkiem do niego.",
        "W domowej kuchni robimy dokładnie odwrotnie i sami się z tego śmiejemy.",
        "Na oko. Ile wejdzie. W czym akurat jest miejsce. Raz w tej blaszce, raz w tamtej, bo tamta była brudna. Raz grubiej, raz cieniej, bo się spieszyło. A potem dziwimy się, że ta sama rzecz raz wychodzi, a raz nie — i szukamy przyczyny w przepisie.",
        "Najprostsza poprawa nie polega przy tym na mierzeniu składników. Polega na ustaleniu jednej wielkości i nietrzymaniu się jej po części, tylko całkiem.",
        "Ten sam garnek do tej samej rzeczy. Ta sama blaszka. Ta sama grubość krojenia. Kiedy naczynie jest zawsze to samo, przestaje się mierzyć — bo naczynie mierzy za Was. To jest cała sztuczka i nie kosztuje nic.",
        "Działa, bo większość domowych niepowodzeń nie bierze się ze składu. Bierze się z grubości, z wysokości i z ilości — czyli z wymiaru. Proporcje w przepisach są zwykle w porządku; to, co się zmienia z razu na raz, to naczynie i grubość.",
        "Wynika z tego coś jeszcze, i akurat to jest argument przeciwko kupowaniu: dwa podobne naczynia są w kuchni gorsze niż jedno. Nie dlatego, że zajmują miejsce, tylko dlatego, że psują stałą. Skoro raz używa się jednego, a raz drugiego, wymiar znowu jest zmienną.",
        "Uczciwie o drugiej stronie: stały wymiar ogranicza i czasem trzeba go złamać. Raz na jakiś czas robi się coś zupełnie innej wielkości i wtedy wszystkie przyzwyczajenia są nic niewarte. Nikt tu nie namawia, żeby mieć jedno naczynie do wszystkiego.",
        "Na koniec o urządzeniu, w obie strony — bo w tym akurat kontekście jedno i drugie wynika z tej samej cechy.",
        "Thermomix ma jedno naczynie o stałych wymiarach. To jest jego duża zaleta, bo wymiar przestaje być zmienną: to, co robicie w nim dziś, ma tę samą wielkość co to sprzed miesiąca. I to jest jego ograniczenie, bo przy naprawdę dużych ilościach robi się w turach. Obie rzeczy biorą się dokładnie z tego samego i nie da się mieć jednej bez drugiej.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kamiennej Górze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, w czym najczęściej gotujecie — w jednym garnku czy w kilku na zmianę. To zaskakująco dużo mówi o tym, co warto pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kamiennej Górze"),
    sekcjaRaty("w Kamiennej Górze"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kamiennej Góry",
      paragraphs: [
        "Kamienna Góra leży w powiecie kamiennogórskim, nad Bobrem, u ujścia Zadrnej, około stu kilometrów od Wrocławia. Miasto jest rozpięte na wysokości od czterystu trzydziestu pięciu do pięciuset sześćdziesięciu metrów nad poziomem morza — to sto dwadzieścia pięć metrów różnicy w granicach jednej miejscowości. Liczy blisko siedemnaście tysięcy mieszkańców (GUS, 31.12.2024) na osiemnastu kilometrach kwadratowych i jest samodzielną gminą miejską; obok istnieje odrębna gmina wiejska o tej samej nazwie, licząca ponad osiem tysięcy osób na stu pięćdziesięciu ośmiu kilometrach. Lokacja miasta sięga 1249 roku, a prawa miejskie potwierdził w 1292 Bolko I Surowy; pierwsze wzmianki pochodzą z 1232 i 1249. Obecny ratusz ukończono w 1905 — jego wieża jest w dolnej części czworoboczna, a wyżej ośmioboczna. W Muzeum Tkactwa przechowywany jest skarb z Dębrznika: sześć tysięcy trzysta sześćdziesiąt srebrnych monet z czternastego do szesnastego wieku. Zbiornik retencyjny Zalew Kamienna Góra oddano do użytku w 1972 roku.",
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

  districtsHeading: "Do których części Kamiennej Góry dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest rozłożone na stu dwudziestu pięciu metrach różnicy wysokości, więc bywa rozciągnięte — i do wsi w okolicznej gminie wiejskiej. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kamienną Górę też przyjadę",
  nearbyParagraphs: [
    "Lubawka jest około dziewięciu kilometrów stąd, Marciszów dwanaście, Boguszów-Gorce osiemnaście, Wałbrzych dwadzieścia pięć, a Kowary dwadzieścia sześć. Do każdego z nich dojeżdżam bezpłatnie.",
  ],
  nearbyTowns: ["Lubawka", "Boguszów-Gorce", "Wałbrzych", "Kowary", "Jelenia Góra"],

  about: blokOMnie("do Kamiennej Góry", "w Kamiennej Górze", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kamiennej Góry bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Chodzi o Kamienną Górę w powiecie kamiennogórskim na Dolnym Śląsku — nie o Kamienną Górę w Gdyni, która jest dzielnicą, ani o Skarżysko-Kamienną. Nazwę tę nosi w Polsce także kilkadziesiąt wzniesień.",
    },
    ...faqWspolne("w Kamiennej Górze"),
    {
      question: "Dlaczego ta sama rzecz raz mi wychodzi, a raz nie?",
      answer:
        "Najczęściej dlatego, że zmienia się wymiar, a nie skład. Proporcje w przepisach są zwykle w porządku — to, co różni się z razu na raz, to naczynie, grubość krojenia i ilość. Najprostsza poprawa nie polega na dokładniejszym mierzeniu składników, tylko na ustaleniu jednej wielkości i trzymaniu się jej: ten sam garnek do tej samej rzeczy, ta sama blaszka, ta sama grubość. Wtedy naczynie mierzy za Was.",
    },
    {
      question: "Czy Thermomix ma jedno naczynie i czy to problem?",
      answer:
        "Ma jedno naczynie o stałych wymiarach — i w praktyce jest to jednocześnie jego zaleta i ograniczenie. Zaleta, bo wymiar przestaje być zmienną: to, co zrobicie dziś, ma tę samą wielkość co to sprzed miesiąca. Ograniczenie, bo przy naprawdę dużych ilościach robi się w turach. Obie rzeczy wynikają z tej samej cechy i nie da się mieć jednej bez drugiej.",
    },
  ],

  geo: { lat: 50.7833, lng: 16.0333 },
};
