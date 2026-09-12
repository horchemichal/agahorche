import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * BRAŃSK — gmina MIEJSKA w powiecie bielskim (podlaskie).
 * MIASTO 3 467 (GUS 31.12.2024), powierzchnia 32,4 km²,
 * gęstość tylko 106,9 os./km² — bardzo nisko jak na miasto.
 * ⚠ Notatka projektowa podawała 3 700 — ZAWYŻONE.
 * ⚠ GMINA WIEJSKA BRAŃSK TO ODRĘBNA JEDNOSTKA
 * z siedzibą w mieście. NIE SUMOWAĆ.
 * Dane samorządowe z 30.06.2016: obszar 3 243 ha,
 * w tym 875 ha lasu.
 *
 * ⚠⚠ PRAWA MIEJSKIE 18 STYCZNIA 1493 r., W WILNIE, z rąk
 * wielkiego księcia litewskiego ALEKSANDRA JAGIELLOŃCZYKA.
 * PEŁNE MIEJSKIE PRAWO MAGDEBURSKIE.
 * Data potwierdza się arytmetycznie: 530-lecie w 2023 r.,
 * 533-lecie w 2026 r.
 * ⚠ NIE POWTARZAM twierdzenia, że Brańsk był PIERWSZYM
 * miastem Podlasia z prawem magdeburskim — pochodzi wyłącznie
 * ze strony samorządu, brak niezależnego potwierdzenia,
 * a Bielsk Podlaski i Drohiczyn uzyskiwały je w podobnym czasie.
 * PRZYNALEŻNOŚĆ: WIELKIE KSIĘSTWO LITEWSKIE od XIV w.,
 * ZIEMIA BIELSKA, region PODLASIE; po unii lubelskiej 1569 —
 * Korona.
 * ⚠ NIE PODAJĘ, czy Brańsk tracił prawa miejskie.
 *
 * PRZYRODA: nad NURCEM, przy trasie Warszawa–Białowieża.
 * GRODZISKO „ZAMCZYSKO" z X/XI w. — U ZBIEGU NURCA I BRONKI,
 * potocznie Góra Zamkowa.
 * ZBIORNIK RETENCYJNY (zalew) na Nurcu — ⚠ ROKU OTWARCIA
 * NIE PODAJĘ.
 *
 * ZABYTKI:
 * ⚠⚠ SZPITAL ŚW. DUCHA — FUNDACJA KRÓLOWEJ BONY, 1550 r.
 * KOŚCIÓŁ WNIEBOWZIĘCIA NMP — 1862 r.
 * DREWNIANA CERKIEW — XIX w. ⚠ WYŁĄCZNIE JAKO ZABYTEK.
 * Cmentarz katolicki 1852, prawosławny 1803.
 *
 * ⚠⚠ GOSPODARKA HISTORYCZNA — PODSTAWA KĄTA.
 * MŁYNY WODNE, BROWAR, SŁODOWNIE.
 * CECHY RZEMIEŚLNICZE: SZEWCÓW, GARBARZY I GARNCARZY.
 * TARGI PONIEDZIAŁKOWE I CZTERY DOROCZNE JARMARKI.
 * Handel drewnem i zbożem z Gdańskiem oraz handel końmi.
 * Nowsza specjalność: WYRÓB DYWANÓW DWUOSNOWOWYCH.
 *
 * BRAŃSKIE DNI KULTURY — 42. edycja w 2023 r., 45. w 2026 r.
 * ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ — wyliczony.
 * W programie 2023 była INSCENIZACJA AKTU NADANIA PRAW
 * MIEJSKICH.
 * BRAŃSK NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: PODZIAŁ PRACY W KUCHNI — kto co robi, gdy gotuje
 * więcej niż jedna osoba.
 * Kąt od miasta cechów: szewców, garbarzy i garncarzy —
 * miejsca zorganizowanego wokół tego, że każdy robi swoje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w większości domów gotuje jedna osoba, a reszta
 *   „pomaga" — i że to jest najgorszy możliwy układ,
 * — DLACZEGO: pomoc bez przydzielonego zadania wymaga
 *   ciągłego instruowania, więc kosztuje więcej niż daje,
 * — że rozwiązanie polega na PRZYDZIELENIU CAŁYCH ZADAŃ,
 *   a nie fragmentów: nie „pokrój cebulę", tylko „sałatka
 *   jest twoja",
 * — PODZIAŁ, KTÓRY DZIAŁA: jedna osoba planuje i pilnuje
 *   całości, reszta ma własne dania od początku do końca,
 * — że zmywanie w trakcie jest osobnym zadaniem i warto je
 *   komuś oddać, bo inaczej ląduje na osobie gotującej,
 * — że dzieci potrafią przejąć całe zadania wcześniej,
 *   niż się zakłada — pod warunkiem, że dostaną zadanie,
 *   a nie polecenie,
 * — że kuchnia ma ograniczoną liczbę stanowisk: zlew, blat,
 *   kuchenka — i więcej niż trzy osoby zwykle przeszkadzają
 *   sobie nawzajem,
 * — UCZCIWIE: to urządzenie nie jest dodatkową parą rąk,
 *   choć bywa tak reklamowane. Zajmuje stanowisko na blacie
 *   i wymaga obsługi,
 * — ALE jedną rzecz robi: przejmuje zadanie, które trzeba
 *   PILNOWAĆ — a pilnowanie jest tym, czego nie da się
 *   oddelegować drugiej osobie bez tłumaczenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ŻADNYCH SUGESTII, KTO W RODZINIE POWINIEN GOTOWAĆ.
 *   Piszę „osoba gotująca", nigdy nie przypisuję ról płciom.
 *   TWARDA GRANICA.
 * — ⚠ ZERO porad o bezpieczeństwie dzieci przy nożach
 *   i ogniu — to nie moja rola.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — CERKIEW wyłącznie jako zabytek. ZERO wątku
 *   prawosławno-katolickiego, ZERO porównywania cmentarzy
 *   dwóch wyznań jako tematu.
 * — ZERO biedy, bezrobocia i wyludniania (miasto straciło
 *   10% ludności od 2002 r. — NIE PISZĘ O TYM).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie w kilka osób"
 * (Uniejów) dotyczy sytuacji, gdy przy jednym daniu stoi
 * kilka osób naraz. „Gotowanie dla ekipy" dotyczy liczby
 * jedzących. „Duża uroczystość rodzinna" dotyczy okazji.
 * „Rodzina ustawiona wokół treningów" dotyczy harmonogramu.
 * Tutaj chodzi o STAŁY PODZIAŁ OBOWIĄZKÓW: kto w domu
 * odpowiada za co, na co dzień.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Brańsk był pierwszym miastem Podlasia
 *   z prawem magdeburskim.
 * — NIE PODAJĘ, czy tracił prawa miejskie.
 * — NIE PODAJĘ roku otwarcia zalewu.
 * — NIE PODAJĘ roku pierwszej edycji Brańskich Dni Kultury.
 * — NIE PRZYPISUJĘ Brańskowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PISZĘ o skansenie ani muzeum — nie potwierdzono.
 * — NIE MYLĘ Brańska z BRANIEWEM (warmińsko-mazurskie)
 *   ani z BRAŃSZCZYKIEM. FAQ to rozróżnia.
 * — NIE MYLĘ powiatu bielskiego w podlaskiem z powiatem
 *   bielskim w śląskiem.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 467 mieszkańców na 32,4 km² — jak na miasto
 *   bardzo rozległe, z niską gęstością zaludnienia; w jego
 *   granicach jest 875 ha lasu,
 * — prawa miejskie nadane 18 stycznia 1493 r. w Wilnie przez
 *   wielkiego księcia litewskiego Aleksandra Jagiellończyka,
 *   jako pełne miejskie prawo magdeburskie; miasto obchodziło
 *   530-lecie w 2023 r.,
 * — historycznie Wielkie Księstwo Litewskie i ziemia bielska;
 *   po unii lubelskiej 1569 r. Korona,
 * — grodzisko „Zamczysko" z X/XI w. u zbiegu Nurca i Bronki,
 * — szpital świętego Ducha z fundacji królowej Bony, 1550 r.,
 * — kościół Wniebowzięcia NMP z 1862 r. i drewniana cerkiew
 *   z XIX w.,
 * — w dawnym Brańsku pracowały młyny wodne, browar
 *   i słodownie, a rzemiosło zorganizowane było w cechach
 *   szewców, garbarzy i garncarzy; odbywały się targi
 *   poniedziałkowe i cztery doroczne jarmarki, prowadzono
 *   handel zbożem i drewnem z Gdańskiem oraz handel końmi,
 * — nowsza specjalność miasta to wyrób dywanów dwuosnowowych,
 * — Brańskie Dni Kultury: 42. edycja w 2023 r., 45. w 2026 r.
 */
export const BRANSK: CityContent = {
  slug: "bransk",
  h1: "Thermomix Brańsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brańsk (podlaskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Brańsku w powiecie bielskim: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brańsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brańsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brańska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Brańsk i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pomoc bez przydzielonego zadania kosztuje więcej, niż daje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brańsku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "podzial-pracy",
      heading: "Miasto szewców, garbarzy i garncarzy — czyli kto co robi w kuchni",
      paragraphs: [
        "Brańsk dostał pełne prawo magdeburskie 18 stycznia 1493 roku, w Wilnie, z rąk wielkiego księcia litewskiego Aleksandra Jagiellończyka — miasto obchodziło niedawno pięćset trzydziestą rocznicę. Rzemiosło zorganizowane było tu w trzech cechach: szewców, garbarzy i garncarzy. Pracowały młyny wodne, browar i słodownie, a w poniedziałki odbywał się targ. Cała ta konstrukcja opierała się na jednej zasadzie: każdy robi swoje, w całości, i odpowiada za wynik.",
        "W kuchni tej zasady prawie nikt nie stosuje i to jest, moim zdaniem, powód, dla którego wspólne gotowanie tak często kończy się zdenerwowaniem.",
        "W większości domów, które znam, gotuje jedna osoba, a reszta „pomaga”. To jest najgorszy z możliwych układów. Pomoc bez przydzielonego zadania wymaga ciągłego instruowania: co teraz, gdzie to jest, ile tego, czy już wystarczy. Osoba gotująca wykonuje wtedy dwie prace naraz — swoją i zarządzanie cudzą — i wychodzi na tym gorzej niż gdyby robiła wszystko sama. Stąd zdanie, które słyszałam dziesiątki razy: „szybciej zrobię to sama”. Ono jest prawdziwe, tylko problem leży gdzie indziej.",
        "Rozwiązanie jest proste i polega na przydzielaniu całych zadań, a nie fragmentów. Nie „pokrój cebulę”, tylko „sałatka jest twoja”. Nie „wymieszaj to”, tylko „zajmij się ziemniakami od początku do końca”. Różnica jest zasadnicza: całe zadanie ma właściciela, który sam decyduje i sam widzi, kiedy skończył. Fragment wymaga nadzoru.",
        "Podział, który sprawdza się najlepiej, wygląda tak: jedna osoba trzyma całość — planuje, pilnuje kolejności i tego, żeby wszystko było gotowe mniej więcej naraz — a każda z pozostałych ma własne danie albo własny element. To jest dokładnie to, co robił cech: mistrz od butów nie doradzał garncarzowi.",
        "Osobna sprawa, o której się nie mówi: zmywanie w trakcie jest zadaniem samodzielnym i trzeba je komuś oddać wprost. Jeśli się tego nie zrobi, ląduje na osobie gotującej, bo to ona stoi przy zlewie. To najczęściej pomijany element podziału pracy w kuchni.",
        "Dzieci potrafią przejąć całe zadania znacznie wcześniej, niż większość z nas zakłada — pod warunkiem, że dostają zadanie, a nie polecenie. „Zrób sałatkę” działa; „podaj mi miskę” nie uczy niczego. To jest ta sama zasada, tylko w innej skali.",
        "Warto też pamiętać o czymś banalnym: kuchnia ma ograniczoną liczbę stanowisk. Zlew, blat, kuchenka. Więcej niż trzy osoby zwykle nie zwiększają tempa, tylko sobie przeszkadzają — i to nie jest wina ludzi, tylko metrażu.",
        "Powiem teraz uczciwie o sprzęcie, bo bywa reklamowany jako „dodatkowa para rąk” i to jest nieprawda. To urządzenie nie jest dodatkową osobą. Zajmuje stanowisko na blacie, trzeba je obsłużyć, załadować i umyć — czyli generuje też własną pracę.",
        "Jedną rzecz jednak przejmuje i akurat ta jest wyjątkowo trudna do oddelegowania człowiekowi: pilnowanie. Można komuś powiedzieć „zrób sałatkę”, ale „pilnuj, żeby się nie przypaliło i mieszaj co dwie minuty” to zadanie, którego prawie nikt nie chce, a przekazanie go wymaga więcej tłumaczenia niż wykonania. Urządzenie robi to bez tłumaczenia i bez pretensji — i szczerze mówiąc, to jest jego najbardziej niedoceniana funkcja.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brańsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu gotuje więcej niż jedna osoba, zaproście je na spotkanie. To jedna z tych rzeczy, które lepiej ustalić razem niż potem przekazywać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brańsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla brańskiej rodziny",
      paragraphs: [
        "Miasto liczy blisko trzy i pół tysiąca mieszkańców, ale zajmuje ponad trzydzieści dwa kilometry kwadratowe — jak na miasto tej wielkości bardzo dużo, a w jego granicach mieści się osiemset siedemdziesiąt pięć hektarów lasu. Prawa miejskie, i to od razu pełne prawo magdeburskie, Brańsk otrzymał 18 stycznia 1493 roku w Wilnie z rąk wielkiego księcia litewskiego Aleksandra Jagiellończyka; historycznie należał do Wielkiego Księstwa Litewskiego i ziemi bielskiej, a po unii lubelskiej 1569 roku do Korony. Nad Nurcem, u jego zbiegu z Bronką, zachowało się grodzisko „Zamczysko” z dziesiątego lub jedenastego wieku. Szpital świętego Ducha ufundowała w 1550 roku królowa Bona; kościół Wniebowzięcia Najświętszej Maryi Panny pochodzi z 1862 roku, a drewniana cerkiew z dziewiętnastego wieku. Miasto słynęło z młynów wodnych, browaru i słodowni, a rzemiosło skupiały cechy szewców, garbarzy i garncarzy; targi odbywały się w poniedziałki, a jarmarki cztery razy w roku. Nowszą specjalnością są dywany dwuosnowowe. Brańskie Dni Kultury miały w 2026 roku czterdziestą piątą edycję.",
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

  districtsHeading: "Do których części Brańska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest rozległe — i do okolicznych wsi. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Brańsk też przyjadę",
  nearbyParagraphs: [
    "Bielsk Podlaski, Ciechanowiec, Suraż, Wysokie Mazowieckie i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bielsk Podlaski", "Ciechanowiec", "Suraż", "Wysokie Mazowieckie"],

  about: blokOMnie("do Brańska", "w Brańsku i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brańska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Brańsk w powiecie bielskim w województwie podlaskim to nie Braniewo w warmińsko-mazurskim ani Brańszczyk na Mazowszu. Osobną jednostką jest też gmina wiejska Brańsk — do niej również dojeżdżam.",
    },
    ...faqWspolne("w Brańsku"),
    {
      question: "Dlaczego wspólne gotowanie tak często się nie udaje?",
      answer:
        "Bo pomoc bez przydzielonego zadania wymaga ciągłego instruowania i kosztuje więcej, niż daje. Osoba gotująca wykonuje wtedy dwie prace naraz: swoją i zarządzanie cudzą. Stąd bierze się zdanie „szybciej zrobię to sama” — ono jest prawdziwe, tylko problem leży w organizacji.",
    },
    {
      question: "Jak sensownie podzielić pracę w kuchni?",
      answer:
        "Przydzielając całe zadania, a nie fragmenty. Nie „pokrój cebulę”, tylko „sałatka jest twoja”. Jedna osoba trzyma całość i pilnuje kolejności, każda z pozostałych ma własne danie od początku do końca. Warto też komuś wprost oddać zmywanie w trakcie, bo inaczej zawsze ląduje na osobie gotującej.",
    },
    {
      question: "Czy Thermomix zastępuje dodatkową parę rąk?",
      answer:
        "Nie i to jest reklamowe uproszczenie. Zajmuje stanowisko na blacie, trzeba go obsłużyć i umyć, więc generuje też własną pracę. Przejmuje natomiast pilnowanie — zadanie, którego prawie nikt nie chce i którego przekazanie drugiej osobie wymaga więcej tłumaczenia niż wykonania.",
    },
  ],

  geo: { lat: 52.7458, lng: 22.8383 },
};
