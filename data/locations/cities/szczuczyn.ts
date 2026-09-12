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
 * SZCZUCZYN — gmina miejsko-wiejska w powiecie GRAJEWSKIM.
 * MIASTO 3 123, GMINA 5 676 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 13,2 km², GMINY 115,6 km².
 * 31 MIEJSCOWOŚCI. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 3 400 — ZAWYŻONE.
 * ⚠ Lokalna Grupa Działania podaje 6 607 dla gminy —
 * DANE NIEDATOWANE I WYŻSZE o ok. 930 osób. Trzymam się GUS.
 * Struktura wg LGD: 77% użytki rolne, 10% lasy.
 *
 * ⚠⚠ PRAWA MIEJSKIE 9 LISTOPADA 1692 r., przywilej lokacyjny
 * wydany w ŻÓŁKWI przez króla JANA III SOBIESKIEGO,
 * NA PRAWIE MAGDEBURSKIM. Potwierdzenia: August II
 * i Stanisław August Poniatowski.
 * PRAWA NIGDY NIE UTRACIŁY WAŻNOŚCI.
 * Data potwierdza się arytmetycznie: 330. rocznica w 2022 r.
 * MIASTO JEST FUNDACJĄ I NOSI NAZWISKO STANISŁAWA ANTONIEGO
 * SZCZUKI, PODKANCLERZEGO LITEWSKIEGO.
 *
 * ⚠ PRZYNALEŻNOŚĆ: historycznie ZIEMIA WISKA, MAZOWSZE —
 * NIE Podlasie historyczne, mimo dzisiejszego województwa.
 * Fizycznogeograficznie: Nizina Północnopodlaska,
 * WYSOCZYZNA KOLNEŃSKA. Dawny szlak Warszawa–Augustów.
 * Historyczna nazwa „SZCZUCZYN MAZOWIECKI" odnosi się
 * do TEGO SAMEGO miasta.
 *
 * RZEKI: WISSA i KSIĘŻANKA. Wissa płynie przez miasto
 * W STANIE NIEUREGULOWANYM, Z LICZNYMI MEANDRAMI, i jest
 * DOPŁYWEM BIEBRZY. W sąsiedztwie Biebrzański PN.
 * ⚠ DŁUGOŚCI WISSY NIE PODAJĘ — nie potwierdzono.
 * ⚠ NIE PISZĘ, że gmina leży w Biebrzańskim PN.
 *
 * ⚠⚠ ZABYTKI Z FUNDATORAMI I KWOTAMI — PODSTAWA KĄTA.
 * DWÓR SZCZUKÓW — 1690 r., wskazywany jako najstarszy budynek.
 * RATUSZ DREWNIANY — 1690 r., fundacja Szczuki.
 * ⚠ NIE PISZĘ, że ratusz istnieje — stanu zachowania
 * nie potwierdzono. Podaję tylko rok powstania.
 * KOŚCIÓŁ BAROKOWY NMP — prezbiterium ukończone 1704 r.,
 * całość 1743 r.; fundator Szczuka, Z DOTACJĄ 20 TYS. ZŁ
 * OD JANA III SOBIESKIEGO. Wewnątrz obraz Madonny z XVI w.
 * KLASZTOR PIJARÓW Z KOLEGIUM — 1706 r., fundacja Szczuki,
 * 60 TYS. ZŁ. Zespół pijarski datowany szerzej 1694–1743.
 * ZESPÓŁ POCZTOWY — ok. 1863 r., klasycystyczny.
 * ⚠⚠ OBIE KWOTY (20 tys. i 60 tys. zł) SĄ KLUCZOWE DLA KĄTA.
 * Podaję je JAKO FAKT HISTORYCZNY, bez przeliczania
 * na dzisiejsze pieniądze — takiego przelicznika nie ma.
 *
 * ⚠⚠ GOSPODARKA HISTORYCZNA — NAJMOCNIEJSZY MATERIAŁ:
 * W 1800 r. W SZCZUCZYNIE DZIAŁAŁY 3 MŁYNY WODNE
 * I 27 BROWARÓW.
 * W 1820 r. ODBYWAŁO SIĘ 9 JARMARKÓW ROCZNIE,
 * TRWAJĄCYCH ŁĄCZNIE 15 DNI.
 * Garbarnie, nowoczesny młyn. Rzemiosła: złotnicy, tkacze,
 * siodlarze, grzebieniarze, stelmachowie.
 * ⚠ LICZBA 27 BROWARÓW POCHODZI Z JEDNEGO ŹRÓDŁA
 * SAMORZĄDOWEGO. Nie wiadomo też, czy chodzi o browary
 * komercyjne, czy o domowe prawo propinacji.
 * PODAJĘ Z ZASTRZEŻENIEM „według miejskich opracowań".
 * ⚠ BROWARY WYMIENIAM WYŁĄCZNIE JAKO FAKT GOSPODARCZY.
 * ZERO zachęty do spożycia alkoholu.
 *
 * CENTRUM PRODUKTU LOKALNEGO przy ul. Kościelnej 12,
 * w budynku „SPIŻARNIA POD KLASZTOREM". Czynne wtorek–sobota,
 * 6:00–14:00 — GODZINY TARGOWE, NIE SKLEPOWE.
 * Asortyment: wędliny i potrawy regionalne, swojskie jaja,
 * pieczywo, miody z domowych pasiek, pączki i faworki, dżemy,
 * mąki bezglutenowe, ziemniaki, herbaty.
 * ⚠ ROKU URUCHOMIENIA NIE PODAJĘ.
 * ⚠ NIE PRZYPISUJĘ Szczuczynowi PALCÓWKI BIEBRZAŃSKIEJ —
 * to Szpakowo w gminie Trzcianne.
 * SZCZUCZYN NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: ILE NAPRAWDĘ KOSZTUJE DOMOWY OBIAD — i dlaczego
 * prawie nikt tego nie liczy.
 * Kąt od miasta, którego fundator zapisał w dokumentach
 * dokładne kwoty: 20 tysięcy od króla na kościół,
 * 60 tysięcy własnych na klasztor.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że prawie nikt nie wie, ile kosztuje jego własny obiad,
 *   i że to jedyna kategoria wydatków, której się nie liczy,
 * — DLACZEGO TAK JEST: koszt rozkłada się na wiele zakupów
 *   w różnych dniach, więc nie widać go jako jednej kwoty,
 * — CO NAPRAWDĘ SKŁADA SIĘ NA KOSZT: składniki, ale też
 *   to, co się zmarnowało, i energia,
 * — ⚠ ŻE NAJWIĘKSZĄ POZYCJĄ JEST ZWYKLE TO, CO WYRZUCONO —
 *   nie to, co zjedzono,
 * — że dania tanie w składnikach bywają drogie w czasie
 *   i odwrotnie, i że jedno i drugie jest kosztem,
 * — JAK TO POLICZYĆ BEZ TABELEK: przez tydzień zapisywać,
 *   co wylądowało w koszu. Nic więcej,
 * — że porównywanie „gotowanie kontra jedzenie na mieście"
 *   bez policzenia marnowania jest bezwartościowe,
 * — UCZCIWIE I WPROST: NIE PODAM ŻADNYCH LICZB ANI WYLICZEŃ
 *   ZWROTU. Nie wierzę w tabelki, które pokazują, że sprzęt
 *   „zwraca się po iluś miesiącach" — zależy to od tego,
 *   jak ktoś gotuje, i każdy taki rachunek jest naciągany,
 * — jedyne, co mogę powiedzieć uczciwie: urządzenie pomaga
 *   w jednym miejscu tego rachunku — ułatwia zużycie tego,
 *   co jest, bo z resztek robi się zupę albo pastę bez wysiłku.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH KWOT, CEN, WYLICZEŃ ZWROTU ANI PORÓWNAŃ
 *   „ile zaoszczędzisz". TWARDA GRANICA — cała sekcja
 *   jest o tym, żeby takich liczb NIE podawać.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ANI SIECI SKLEPÓW.
 * — ⚠ ŻADNYCH SUGESTII, ŻE KTOŚ ŹLE GOSPODARUJE PIENIĘDZMI.
 *   Piszę o nawyku, nie o zamożności. Nigdy protekcjonalnie.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów wyznaniowych; klasztor pijarów
 *   wyłącznie jako fundacja i zabytek.
 * — ⚠ ZERO biedy, bezrobocia i wyludniania — szczególnie
 *   przy temacie kosztów. TWARDA GRANICA: sekcja o pieniądzach
 *   nie może w żadnym miejscu sugerować, że czytelnik
 *   ma za mało.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Marnowanie jedzenia"
 * dotyczy tego, co ląduje w koszu, jako tematu samego w sobie.
 * „Resztki" dotyczą tego, co zostało po obiedzie. „Rata,
 * kiedy jutro nie jest pewne" dotyczy finansowania zakupu.
 * „Nadmiar jednego składnika" (Wysokie Mazowieckie) dotyczy
 * rozdysponowania. Tutaj chodzi o RACHUNEK: o to, że koszt
 * obiadu jest wielkością, której się nie zna, i o to,
 * dlaczego nie podaję żadnych wyliczeń zwrotu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ długości Wissy.
 * — NIE PISZĘ, że drewniany ratusz z 1690 r. istnieje.
 * — NIE PODAJĘ roku uruchomienia Centrum Produktu Lokalnego.
 * — NIE PRZYPISUJĘ Szczuczynowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego; palcówka biebrzańska
 *   pochodzi z gminy Trzcianne.
 * — NIE PISZĘ, że gmina leży w Biebrzańskim PN.
 * — NIE MYLĘ Szczuczyna podlaskiego ze SZCZUCZYNEM
 *   NA BIAŁORUSI ani ze wsią Szczuczyn w wielkopolskiem.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 123, gmina 5 676 mieszkańców na 115,6 km²,
 *   31 miejscowości,
 * — prawa miejskie na prawie magdeburskim nadane 9 listopada
 *   1692 r. przywilejem wydanym w Żółkwi przez Jana III
 *   Sobieskiego, potwierdzonym przez Augusta II i Stanisława
 *   Augusta Poniatowskiego; prawa nigdy nie utraciły ważności,
 * — miasto jest fundacją Stanisława Antoniego Szczuki,
 *   podkanclerzego litewskiego, i nosi jego nazwisko,
 * — dwór Szczuków i drewniany ratusz z 1690 r.,
 * — barokowy kościół Najświętszej Maryi Panny: prezbiterium
 *   ukończone w 1704 r., całość w 1743, z dotacją dwudziestu
 *   tysięcy złotych od Jana III Sobieskiego; wewnątrz obraz
 *   Madonny z XVI w.,
 * — klasztor pijarów z kolegium, 1706 r., fundacja Szczuki
 *   za sześćdziesiąt tysięcy złotych,
 * — klasycystyczny zespół pocztowy z około 1863 r.,
 * — według miejskich opracowań w 1800 r. działały tu trzy
 *   młyny wodne i dwadzieścia siedem browarów, a w 1820 r.
 *   odbywało się dziewięć jarmarków rocznie, trwających
 *   łącznie piętnaście dni,
 * — Centrum Produktu Lokalnego w budynku „Spiżarnia pod
 *   Klasztorem" jest czynne od wtorku do soboty w godzinach
 *   6:00–14:00 i sprzedaje m.in. swojskie jaja, pieczywo,
 *   miody z domowych pasiek, dżemy i ziemniaki,
 * — historycznie ziemia wiska na Mazowszu; miasto leży
 *   na Wysoczyźnie Kolneńskiej, nad Wissą, dopływem Biebrzy,
 *   płynącą przez miasto w stanie nieuregulowanym.
 */
export const SZCZUCZYN: CityContent = {
  slug: "szczuczyn",
  h1: "Thermomix Szczuczyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szczuczyn (podlaskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Szczuczynie w powiecie grajewskim: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczuczyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczuczynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szczuczyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Szczuczyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Największą pozycją w koszcie obiadu jest zwykle to, co wyrzucono.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczuczynie – jak wygląda prezentacja?",
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
      id: "koszt-obiadu",
      heading: "Dwadzieścia tysięcy na kościół, sześćdziesiąt na klasztor — czyli o liczeniu",
      paragraphs: [
        "Szczuczyn jest miastem założonym przez jednego człowieka i noszącym jego nazwisko. Stanisław Antoni Szczuka, podkanclerzy litewski, uzyskał dla niego przywilej lokacyjny na prawie magdeburskim, wydany 9 listopada 1692 roku w Żółkwi przez Jana III Sobieskiego. Ciekawe jest jednak co innego: w źródłach zachowały się konkretne kwoty. Na barokowy kościół król dołożył dwadzieścia tysięcy złotych. Na klasztor pijarów z kolegium, wzniesiony w 1706 roku, Szczuka wyłożył sześćdziesiąt tysięcy własnych. Ktoś to policzył i zapisał.",
        "A w kuchni prawie nikt nic nie liczy — i to jest jedyna kategoria domowych wydatków, o której nie mamy pojęcia.",
        "Zapytajcie kogokolwiek, ile kosztuje jego samochód miesięcznie, a poda liczbę. Zapytajcie o prąd — poda. Zapytajcie, ile kosztuje obiad, który właśnie zjadł, i zapadnie cisza. Nie dlatego, że ludzie są nieuważni. Po prostu ten koszt rozkłada się na dwadzieścia zakupów w różnych dniach i nigdy nie pojawia się jako jedna kwota na jednym paragonie.",
        "Na koszt obiadu składają się trzy rzeczy, a myślimy tylko o pierwszej. Składniki, które w nim wylądowały. Energia, na której się gotował. I to, co przy okazji zostało wyrzucone.",
        "Ta trzecia pozycja jest zwykle największa i to jest rzecz, którą chciałabym, żeby zapamiętał każdy, kto to czyta. Nie płacimy najwięcej za to, co zjedliśmy. Płacimy najwięcej za pół pęczka natki, który zwiądł, za jogurt, o którym zapomniano, za trzy czwarte kapusty kupionej na jedno danie i za chleb, który wysechł. Te rzeczy nie pojawiają się w żadnym rachunku, bo nikt ich nie zapisuje — a to one podnoszą realny koszt jedzenia najbardziej.",
        "Jest też druga strona, o której mówi się jeszcze rzadziej: dania tanie w składnikach bywają drogie w czasie, a drogie w składnikach — szybkie. Zupa z warzyw korzeniowych kosztuje grosze i zajmuje półtorej godziny. Kawałek dobrej ryby kosztuje wielokrotnie więcej i jest gotowy w kilkanaście minut. To są dwa różne koszty i oba są prawdziwe. Kto liczy tylko jeden, liczy źle.",
        "Jak to sprawdzić bez tabelek, arkuszy i aplikacji? Jest jeden sposób i zajmuje tydzień. Przez siedem dni zapisujcie na kartce nie to, co kupiliście, tylko to, co wyrzuciliście. Nic więcej. Ta lista powie Wam o Waszej kuchni więcej niż jakikolwiek budżet, i prawie zawsze zaskakuje.",
        "Z tego wynika też, dlaczego uważam popularne porównania „gotowanie w domu kontra jedzenie na mieście” za mało warte. Prawie wszystkie liczą składniki, które trafiły do dania, a pomijają to, co się przy okazji zmarnowało. Rachunek bez tej pozycji jest po prostu nieprawdziwy.",
        "I teraz rzecz, którą muszę powiedzieć wprost, bo dotyczy mojej pracy. Nie podam Wam żadnych wyliczeń, ile ten sprzęt oszczędza ani po ilu miesiącach się zwraca. Widzę takie tabelki w internecie i nie wierzę w żadną z nich. Zwrot zależy wyłącznie od tego, jak ktoś gotuje i jak często — a to znaczy, że każde takie wyliczenie jest dopasowane do z góry przyjętej odpowiedzi. Wolę tego nie robić.",
        "Jedyne, co mogę powiedzieć uczciwie, jest dużo skromniejsze. Urządzenie pomaga w jednej pozycji tego rachunku — w tej największej, czyli w marnowaniu. Nie dlatego, że jest magiczne, tylko dlatego, że z resztek warzyw robi się w nim zupę albo pastę bez żadnego wysiłku i bez stania nad garnkiem. Rzeczy, które w innej sytuacji poszłyby do kosza, częściej trafiają do dania — bo próg wysiłku jest niższy. To jest cała prawda i nic ponadto.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczuczynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli zastanawiacie się nad zakupem i chcecie policzyć, czy to ma sens — zróbcie wcześniej tamten tygodniowy spis tego, co wyrzucacie. Będziemy mieli o czym rozmawiać na konkretach zamiast na obietnicach.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczuczynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szczuczyńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad trzy tysiące mieszkańców, a cała gmina blisko pięć i pół tysiąca, w trzydziestu jeden miejscowościach. Szczuczyn jest fundacją Stanisława Antoniego Szczuki, podkanclerzego litewskiego, i nosi jego nazwisko; prawa miejskie na prawie magdeburskim otrzymał 9 listopada 1692 roku przywilejem wydanym w Żółkwi przez Jana III Sobieskiego, potwierdzonym później przez Augusta II i Stanisława Augusta Poniatowskiego — i nigdy ich nie utracił. Dwór Szczuków oraz drewniany ratusz pochodzą z 1690 roku, a więc sprzed lokacji. Barokowy kościół Najświętszej Maryi Panny ukończono w prezbiterium w 1704, a w całości w 1743 roku; klasztor pijarów z kolegium powstał w 1706. Zespół pocztowy zbudowano około 1863 roku. Według miejskich opracowań w 1800 roku działały tu trzy młyny wodne, a w 1820 odbywało się dziewięć jarmarków rocznie, trwających łącznie piętnaście dni. Historycznie to ziemia wiska na Mazowszu; miasto leży na Wysoczyźnie Kolneńskiej, nad nieuregulowaną Wissą, dopływem Biebrzy. Przy ulicy Kościelnej działa Centrum Produktu Lokalnego w budynku „Spiżarnia pod Klasztorem”, czynne od wtorku do soboty w godzinach od szóstej do czternastej.",
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

  districtsHeading: "Do których części gminy Szczuczyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Szczuczyn też przyjadę",
  nearbyParagraphs: [
    "Grajewo, Kolno, Stawiski, Rajgród i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grajewo", "Kolno", "Stawiski", "Rajgród"],

  about: blokOMnie("do Szczuczyna", "w Szczuczynie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczuczyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to najczęstsza pomyłka: chodzi o Szczuczyn w powiecie grajewskim, w województwie podlaskim. Historyczna nazwa „Szczuczyn Mazowiecki” odnosi się do tego samego miasta, bo historycznie leżało ono w ziemi wiskiej na Mazowszu.",
    },
    ...faqWspolne("w Szczuczynie"),
    {
      question: "Ile naprawdę kosztuje domowy obiad?",
      answer:
        "Prawie nikt tego nie wie, bo koszt rozkłada się na wiele zakupów w różnych dniach i nigdy nie pojawia się jako jedna kwota. Składają się na niego trzy rzeczy: składniki, energia i to, co przy okazji zostało wyrzucone — a ta ostatnia pozycja jest zwykle największa.",
    },
    {
      question: "Jak to policzyć bez tabelek?",
      answer:
        "Przez tydzień zapisujcie na kartce nie to, co kupiliście, tylko to, co wyrzuciliście. Nic więcej. Ta jedna lista powie o Waszej kuchni więcej niż jakikolwiek domowy budżet i prawie zawsze zaskakuje.",
    },
    {
      question: "Po ilu miesiącach zwraca się Thermomix?",
      answer:
        "Nie podam takiego wyliczenia i powiem wprost dlaczego: nie wierzę w żadną z tabelek, które krążą po internecie. Zwrot zależy wyłącznie od tego, jak ktoś gotuje i jak często, więc każde takie wyliczenie jest dopasowane do z góry przyjętej odpowiedzi. Mogę powiedzieć tylko tyle: urządzenie pomaga w największej pozycji tego rachunku, czyli w marnowaniu, bo z resztek warzyw robi się w nim zupę albo pastę bez wysiłku.",
    },
  ],

  geo: { lat: 53.5606, lng: 22.2925 },
};
