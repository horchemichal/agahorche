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
 * PRUSICE — powiat trzebnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 125 mieszkańców (GUS 31.12.2024), 10,9 km²,
 *   gęstość 194,2 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 9 287 osób, 158,0 km², gęstość 59 os./km²
 *   [ZW — DOMYKA SIĘ. PODAJĘ]. Najludniejsza gmina
 *   tej fali.
 *   ⚠ Miasto to tylko 22,9 % ludności gminy — najniższy
 *   udział w fali. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE W GMINIE: 27.
 * WYSOKOŚĆ: 96–153 m n.p.m.
 * ⚠ GEO: 51,3704 / 16,9606.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM (LICZBA MNOGA):
 *   M. PRUSICE SĄ (nigdy „Prusice jest") ·
 *   D. do PRUSIC (nie „Prusicy") · Ms. w PRUSICACH ·
 *   N. Prusicami.
 *   ⚠⚠⚠ ORZECZENIE ZAWSZE W LICZBIE MNOGIEJ.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: PRUSICKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ BŁĄD W ŹRÓDLE: anglojęzyczna Wikipedia podaje
 *   „7 km od Wrocławia". TO NIEPRAWDA.
 *   ⚠⚠⚠ ŻADNYCH ODLEGŁOŚCI OD WROCŁAWIA.
 *   ANI JEDNEJ LICZBY KILOMETRÓW W CAŁYM PLIKU.
 *
 * ⚠ KOLIZJA WEWNĘTRZNA FALI: wieś ŚWIERZÓW w gminie
 *   Prusice ≠ ŚWIERZAWA (miasto opisane w tej samej
 *   fali). NIE MYLIĆ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1253 r. — w akcie lokacyjnym
 *     ŻMIGRODU (miasto opisane w tym cyklu).
 *   — PRAWA MIEJSKIE: 1283 albo 1287 r., Henryk IV
 *     Probus. ⚠⚠⚠ DOKUMENT SIĘ NIE ZACHOWAŁ. PISZĘ
 *     „1283 lub 1287" I MÓWIĘ, ŻE DOKUMENTU NIE MA.
 *   — UTRATA PRAW: formalnie 2 marca 1951 r.
 *     ⚠⚠⚠ ROKU 1945 NIE PODAJĘ ANI RAZU — wykluczony
 *     w całym cyklu. PISZĘ WYŁĄCZNIE O DACIE FORMALNEJ.
 *   — PRZYWRÓCENIE PRAW: rozporządzenie z 21 grudnia
 *     1999 r., ze skutkiem od 1 stycznia 2000 r.
 *   ⚠⚠ UTRATY I ODZYSKANIA NIE ROBIĘ KĄTEM — figura
 *   zajęta (Szklarska Poręba, Wąsosz i Świerzawa
 *   w tej samej fali).
 *   — OBWODNICA DK5: od 1980 r. ⚠⚠ WYŁĄCZNIE DATA
 *     W TLE — kąt drogowy zajęty (Pieńsk).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — POŁOWA PARY BEZ DRUGIEJ POŁOWY:
 *   W gminie są PARY KOMPLETNE:
 *     — Krościna Mała i Krościna Wielka,
 *     — Ligota Strupińska i Ligotka,
 *     — Borów i Borówek.
 *   I JEST PIETROWICE MAŁE — BEZ „WIELKICH".
 *   ⚠⚠⚠ NAZWA NIESIE PORÓWNANIE DO CZEGOŚ, CZEGO
 *   W GMINIE NIE MA. To jest cały kąt.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE „WIELKIE" KIEDYKOLWIEK
 *   ISTNIAŁY ANI ŻE ZNIKNĘŁY. NIE WIEM. Opisuję stan
 *   dzisiejszej mapy gminy i tylko jego.
 *   ⚠⚠ NIE WYPROWADZAM ETYMOLOGII.
 *
 * KĄT: MAŁE BEZ DUŻEGO
 * — o przymiotnikach, które kiedyś coś odróżniały,
 * a dziś tylko zostały. Kąt z mapy gminy Prusice:
 * Krościna Mała ma Wielką, Borówek ma Borów,
 * a Pietrowice Małe nie mają „Wielkich".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie są komplety: Krościna Mała i Wielka,
 *   Ligota Strupińska i Ligotka, Borów i Borówek,
 * — ŻE PIETROWICE MAŁE NIE MAJĄ SWOICH „WIELKICH".
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE WIEM, CZY KIEDYKOLWIEK ISTNIAŁY, I TEGO
 *   NIE ZGADUJĘ — interesuje mnie samo określenie, które
 *   zostało bez drugiej połowy,
 * — ⚠⚠ ŻE W KUCHNI MAMY TEGO PEŁNO: „szybki obiad",
 *   „zwykłe gotowanie", „coś na szybko" — wszystkie
 *   te słowa zakładają, że istnieje druga połowa,
 * — ⚠⚠ ŻE KIEDY DRUGIEJ POŁOWY NIE MA, przymiotnik
 *   przestaje odróżniać, a zaczyna oceniać —
 *   i najczęściej ocenia nas samych,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: gdy złapiesz się na
 *   przymiotniku, zapytaj, co jest tą drugą połową.
 *   Jeśli jej nie ma, skreśl przymiotnik. Zostaje
 *   „obiad" — i razem z przymiotnikiem znika poczucie,
 *   że to było byle jakie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem druga połowa
 *   istnieje, tylko rzadko. Wtedy przymiotnik jest
 *   uczciwy i warto go zostawić,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie bywa sprzedawane
 *   jako coś, co kasuje różnicę między „na szybko"
 *   a „porządnie". MÓWIĘ WPROST, ŻE NIE KASUJE JEJ
 *   DO KOŃCA — są dania, których nie zrobi, i dni,
 *   w których nikt nic nie ugotuje.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt
 *   zajęty (Szklarska Poręba). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam wiele nazw
 *   opisywało jedną rzecz; tu jedna nazwa zapowiada
 *   drugą rzecz, której nie ma.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski).
 * — ⚠⚠ ZERO KIEDY TO JEST JESZCZE TO SAMO — kąt zajęty
 *   (Świeradów-Zdrój).
 * — ⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice).
 * — ⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEJ OCENY „zdrowszego" ani „lepszego"
 *   jedzenia — kąt dotyczy słów, nie wartości posiłków.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU ·
 *   ZERO HERBU · ZERO OCENIANIA CZYJEGOŚ GOTOWANIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE TWIERDZĘ, że „Pietrowice Wielkie" istniały
 *   albo zniknęły.
 * — NIE WYPROWADZAM etymologii nazw wsi.
 * — NIE PODAJĘ roku nadania praw jako pewnego —
 *   piszę „1283 lub 1287" i mówię, że dokumentu nie ma.
 * — NIE PODAJĘ roku faktycznej utraty praw.
 * — NIE PODAJĘ ŻADNEJ ODLEGŁOŚCI W KILOMETRACH.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Prusice leżą w powiecie trzebnickim, na wysokości
 *   96–153 m n.p.m.; miasto liczy 2 125 mieszkańców
 *   (GUS, 31.12.2024) na 10,9 km², czyli 194,2 osoby
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   9 287 osób na 158,0 km², czyli 59 osób na kilometr,
 * — gmina obejmuje dwadzieścia siedem wsi, wśród nich
 *   Krościnę Małą i Wielką, Ligotę Strupińską
 *   i Ligotkę, Borów i Borówek oraz Pietrowice Małe,
 * — pierwsza wzmianka pochodzi z 1253 r. i znalazła się
 *   w akcie lokacyjnym Żmigrodu,
 * — prawa miejskie nadał Henryk IV Probus w 1283 lub
 *   1287 r.; dokument się nie zachował,
 * — miasto utraciło prawa formalnie 2 marca 1951 r.,
 *   a przywróciło je rozporządzenie z 21 grudnia 1999 r.
 *   ze skutkiem od 1 stycznia 2000 r.,
 * — obwodnica w ciągu drogi krajowej nr 5 działa
 *   od 1980 r.
 */
export const PRUSICE: CityContent = {
  slug: "prusice",
  h1: "Thermomix Prusice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Prusice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Prusicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Prusice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Prusicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Prusic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu siedmiu wsi w gminie.",

  highlights: highlightyStandardowe("Prusice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Krościna Mała ma Wielką. Pietrowice Małe nie mają nikogo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Prusicach – jak wygląda prezentacja?",
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
      id: "male-bez-duzego",
      heading: "Małe bez dużego",
      paragraphs: [
        "Na mapie gminy Prusice pary są prawie wszystkie kompletne. Krościna Mała i Krościna Wielka. Ligota Strupińska i Ligotka. Borów i Borówek.",
        "I są Pietrowice Małe. Bez „Wielkich”.",
        "Nie wiem, czy kiedykolwiek istniały, i nie zamierzam tego zgadywać. Interesuje mnie samo określenie, które zostało bez drugiej połowy — nazwa, która obiecuje porównanie, a porównać się nie ma z czym.",
        "W kuchni takich nazw mamy pełno i większość z nich nosimy latami.",
        "„Szybki obiad”. „Zwykłe gotowanie”. „Coś na szybko”. „Byle co”. Każde z tych określeń zakłada, że gdzieś obok istnieje druga połowa: obiad wolny, gotowanie niezwykłe, coś porządnego.",
        "A kiedy tej drugiej połowy nie ma — bo od trzech lat każdy obiad w Waszym domu powstaje w pół godziny po pracy — przymiotnik przestaje odróżniać. Zaczyna oceniać. I ocenia nie jedzenie, tylko osobę, która je zrobiła.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o rzeczy, która ma siedem różnych nazw. Tam wiele słów opisywało jeden przedmiot. Tu jest odwrotnie — jedno słowo zapowiada drugi przedmiot, którego nie ma.",
        "Ruch jest jeden i zajmuje sekundę. Kiedy złapiesz się na przymiotniku, zapytaj, co jest tą drugą połową. Jeśli w Waszym domu jej nie ma, skreśl przymiotnik. Zostaje „obiad”. I razem z przymiotnikiem znika kawałek poczucia, że to było byle jakie.",
        "Uczciwie o drugiej stronie: czasem druga połowa naprawdę istnieje, tylko rzadko — raz w miesiącu, kiedy przyjeżdżają wszyscy. Wtedy „na szybko” jest uczciwym rozróżnieniem i nie ma po co go kasować. Rzecz w tym, żeby wiedzieć, który przypadek jest u Was.",
        "I uczciwie o sprzęcie. Thermomix bywa sprzedawany jako coś, co kasuje różnicę między „na szybko” a „porządnie”. Częściowo tak jest — sporo dań, na które dotąd nie było czasu w tygodniu, staje się wykonalnych. Ale do końca jej nie kasuje. Są rzeczy, których to urządzenie nie zrobi, i są dni, w których nikt w tym domu niczego nie ugotuje, i żaden sprzęt tego nie zmieni.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Prusicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jak wygląda u Was zwykły wtorek. Nie od święta — zwykły wtorek, bo to pod niego dobieram dania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Prusicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Prusic",
      paragraphs: [
        "Prusice leżą w powiecie trzebnickim, na wysokości od dziewięćdziesięciu sześciu do stu pięćdziesięciu trzech metrów nad poziomem morza. Samo miasto liczy 2 125 mieszkańców (GUS, 31.12.2024) na 10,9 kilometra kwadratowego, czyli sto dziewięćdziesiąt cztery osoby na kilometr, a cała gmina miejsko-wiejska 9 287 osób na stu pięćdziesięciu ośmiu kilometrach, czyli pięćdziesiąt dziewięć osób na kilometr, i obejmuje dwadzieścia siedem wsi. Pierwsza wzmianka o Prusicach pochodzi z 1253 roku i znalazła się w akcie lokacyjnym Żmigrodu. Prawa miejskie nadał Henryk IV Probus w 1283 lub 1287 roku — dokument się nie zachował, więc pewnej daty nie ma. Miasto utraciło je formalnie 2 marca 1951 roku, a przywróciło rozporządzenie z 21 grudnia 1999 ze skutkiem od 1 stycznia 2000. Obwodnica w ciągu piątki działa od 1980 roku.",
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

  districtsHeading: "Do których części Prusic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu siedmiu wsi w gminie: Krościny Małej i Wielkiej, Ligoty Strupińskiej i Ligotki, Borowa i Borówka, Pietrowic Małych, Świerzowa i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać pełną nazwę, bo kilka miejscowości występuje w parach Mała i Wielka. Świerzów w gminie Prusice to też nie Świerzawa — Świerzawa jest osobnym miastem w powiecie złotoryjskim.",
  ],
  districts: [],

  nearbyHeading: "Poza Prusice też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Trzebnicy, Żmigrodu, Wołowa, Obornik Śląskich i Brzegu Dolnego — wszędzie bezpłatnie, tak samo jak w samych Prusicach.",
  ],
  nearbyTowns: ["Trzebnica", "Żmigród", "Wołów", "Oborniki Śląskie", "Brzeg Dolny"],

  about: blokOMnie("do Prusic", "w Prusicach i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Prusic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu siedmiu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: Prusice są w liczbie mnogiej, więc mówimy „Prusice są”, „do Prusic” i „w Prusicach”. I warto podawać pełną nazwę wsi, bo kilka z nich występuje w parach Mała i Wielka.",
    },
    ...faqWspolne("w Prusicach"),
    {
      question: "Wstydzę się, że gotuję tylko „na szybko”. Czy to źle?",
      answer:
        "Najpierw sprawdziłabym, czy to określenie jeszcze cokolwiek odróżnia. W gminie Prusice są Krościna Mała i Wielka, Borów i Borówek — pary kompletne — i są Pietrowice Małe, które nie mają swoich „Wielkich”. Przymiotnik został, choć nie ma go z czym porównać. „Szybki obiad” działa tak samo: jeśli w Waszym domu od lat każdy obiad powstaje w pół godziny, to nie jest szybki obiad, tylko po prostu obiad. Wtedy warto skreślić przymiotnik — razem z nim znika spora część poczucia winy.",
    },
    {
      question: "Czy Thermomix sprawi, że codzienne obiady będą jak od święta?",
      answer:
        "Częściowo i tylko częściowo. Sporo dań, na które w tygodniu nie było czasu, staje się wykonalnych, bo urządzenie pracuje bez Waszej obecności. Ale są rzeczy, których nie zrobi, i są dni, w których nikt niczego nie ugotuje — i żaden sprzęt tego nie zmieni. Obiecywać, że różnica zniknie do końca, byłoby nieuczciwe. Na prezentacji pokazuję, gdzie realnie się przesuwa.",
    },
  ],

  geo: { lat: 51.3704, lng: 16.9606 },
};
