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
 * BOREK WIELKOPOLSKI — powiat gostyński, woj. wielkopolskie.
 * ⚠⚠⚠ NIGDY NIE PISZĘ SAMEGO „BOREK" — „Borek"
 *   i „Borki" to jedne z najpospolitszych podstaw
 *   nazewniczych w Polsce (m.in. gmina Borki,
 *   Olszewo-Borki). ZAWSZE PEŁNA NAZWA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA.
 * MIASTO: 2 428 mieszkańców (GUS 31.12.2024),
 *   6,3 km², gęstość 386,0 os./km².
 *   ⚠ [ZW — 2 428 / 6,3 = 385,4. Różnica 0,6.
 *   DOMYKA SIĘ. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP] — jedyne
 *   miasto tej fali bez tej danej.
 * CAŁA GMINA: 6 993 osoby, 127,58 km² (12 758 ha —
 *   liczba zgodna w czterech rejestrach), gęstość
 *   55 os./km².
 *   ⚠ [ZW — 6 993 / 127,58 = 54,8. Różnica 0,2.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠⚠ LICZBY „PRAWIE 7900 MIESZKAŃCÓW" ZE STRONY
 *   GMINY NIE UŻYWAM — różni się od GUS o 907 osób.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 22 SOŁECTWA i 35 MIEJSCOWOŚCI.
 *   ⚠⚠ OBRĘBÓW EWIDENCYJNYCH (19) NIE PODAJĘ —
 *   kąt „samorząd dzieli drobniej niż kataster"
 *   ZAJĘTY (Lwówek).
 *   SOŁECTWA: Bolesławów, Bruczków, Celestynów,
 *   Dąbrówka, Głoginin, Grodnica, Jawory, Jeżewo,
 *   Karolew, Koszkowo, Leonów, Maksymilianów,
 *   Siedmiorogów Pierwszy, Siedmiorogów Drugi,
 *   Skoków, Skokówko, Strumiany, Studzianna,
 *   Trzecianów, Wycisłowo, Zalesie, Zimnowoda.
 *   ⚠⚠⚠ FIGURY „PARA BEZ NAZWY WYJŚCIOWEJ"
 *   (Siedmiorogów Pierwszy i Drugi bez samego
 *   „Siedmiorogowa") NIE ROBIĘ — to LUSTRO KĄTA
 *   KSIĄŻA WIELKOPOLSKIEGO Z TEJ SAMEJ FALI.
 *   WYMIENIAM OBIE NAZWY W WYLICZENIU, BEZ KOMENTARZA.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 14,7 %. PODAJĘ.
 * RZEKI: POGONIA I DĄBRÓWKA. PODAJĘ.
 *   ⚠⚠ RZEKA DĄBRÓWKA I WIEŚ DĄBRÓWKA MAJĄ TĘ SAMĄ
 *   NAZWĘ W JEDNEJ GMINIE. WSPOMINAM W SEKCJI
 *   ADRESOWEJ.
 * RATUSZ: pierwsza wiadomość o istnieniu ratusza
 *   z 1463 r., obecny gmach z 1855 r.
 *   PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ FIGURY Z RÓŻNICY 392 LAT NIE ROBIĘ —
 *   sąsiaduje z zajętymi kątami „instytucja młodsza
 *   od swoich ścian" i „narzędzie trwalsze od ścian"
 *   (Poniec, poprzednia fala).
 * ⚠ GEO: 51,9167 / 17,2410 (punkt miasta).
 *
 * ⚠⚠ ODMIANA — „E" RUCHOME WYPADA:
 *   D. do BORKU WIELKOPOLSKIEGO ·
 *   Ms. w BORKU WIELKOPOLSKIM ·
 *   N. Borkiem Wielkopolskim · C. Borkowi
 *   Wielkopolskiemu.
 *   ⚠ POTWIERDZENIA: „Urząd Miejski w Borku Wlkp.",
 *   „Ratusz w Borku Wielkopolskim", „informacje
 *   o Borku Wielkopolskim".
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: ZACHOWANIE „E" —
 *   „do Boreka", „w Boreku", „Borekiem". WSZYSTKIE
 *   BŁĘDNE. WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ BŁĄD DRUGI: nieodmienianie członu —
 *   „w Borku Wielkopolski".
 *   ⚠ SKRÓT URZĘDOWY: „Borek Wlkp.".
 *   ⚠⚠⚠ PRZYMIOTNIKA „BORECKI" NIE UŻYWAM —
 *   niepotwierdzony [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — PRAWA MIEJSKIE DOSTAŁA
 *   MIEJSCOWOŚĆ O INNEJ NAZWIE:
 *   — 1392 R. — prawa miejskie otrzymuje ZDZIEŻ,
 *     wcześniejsza nazwa tego miasta.
 *   — 1 POŁ. XV W. — lokacja pod nazwą BOREK.
 *   — 1958 R. — oficjalna zmiana nazwy na
 *     BOREK WIELKOPOLSKI.
 *   AKT, OD KTÓREGO LICZY SIĘ MIEJSKOŚĆ, DOTYCZY
 *   JEDNOSTKI O NAZWIE, KTÓREJ DZIŚ NIE MA
 *   W ŻADNYM WYKAZIE MIEJSCOWOŚCI GMINY.
 *   CIĄGŁOŚĆ PRAW TRWA, NAZWA ZMIENIŁA SIĘ DWA RAZY.
 *   ⚠⚠ NIE PODAJĘ, DLACZEGO NAZWA SIĘ ZMIENIŁA —
 *   nie ustalono [NP].
 *   ⚠⚠ NIE ROBIĘ RACHUNKU PROCENTOWEGO Z LAT
 *   („89,3 % historii") — to liczenie wywiedzione,
 *   nie cytat.
 *
 * KĄT: CIĄGŁOŚĆ SIEDZI W ROBIENIU, NIE W NAZWIE
 * — o tym, że w domu nazywamy „tradycją" rzeczy młode
 * i przypisujemy dawne nazwy czemuś, co już nic z tamtego
 * nie ma. Kąt z Borku: prawa dla Zdzieży, nazwa Borek,
 * człon „Wielkopolski" dopiero w 1958.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że prawa miejskie z 1392 r. dostała Zdzież,
 *   nazwa Borek przyszła w XV w., a człon
 *   „Wielkopolski" w 1958 r., i że Zdzieży nie ma
 *   dziś w wykazach. TO JEST RDZEŃ,
 * — że ciągłość praw nie została przerwana ani razu,
 * — ⚠⚠ ŻE W DOMU DZIAŁA TO SAMO W OBIE STRONY:
 *   mówimy „u nas zawsze się tak robiło" o czymś,
 *   co robimy od trzech lat, i mówimy „przepis babci"
 *   o czymś, z czego nic babcinego nie zostało,
 * — ⚠⚠ ŻE TO NIE JEST OSZUKIWANIE — tak działa pamięć
 *   rodzinna i nie ma w tym nic złego,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: rozdzielić dwie rzeczy —
 *   co naprawdę trwa (że siadacie razem, że ktoś
 *   gotuje w niedzielę) od tego, jak to nazywamy.
 *   Wtedy zmiana przepisu przestaje być zdradą
 *   tradycji,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nazwy mają realną
 *   wartość, bo to je zapamiętują dzieci. Nie chodzi
 *   o to, żeby je porzucać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zmienia sposób,
 *   a nie danie. Jeśli ktoś w domu uzna, że „to już
 *   nie to samo", warto to potraktować poważnie,
 *   a nie zbyć. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ — kąt
 *   zajęty (Sompolno). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam ŚCIERAŁY SIĘ
 *   DWIE NAZWY NARAZ, jedna urzędowa i jedna
 *   używana; tu nazwy NASTĘPOWAŁY PO SOBIE,
 *   a każda była urzędowa w swoim czasie.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OBJAŚNIENIE DOPISANE PÓŹNIEJ — kąt
 *   zajęty (Tuliszków). Tam dopisano OBJAŚNIENIE
 *   do istniejącej nazwy; tu wymieniono CAŁĄ NAZWĘ.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO WZIĘTE Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA — kąt
 *   zajęty (Krzyż Wielkopolski).
 * — ⚠⚠ ZERO AKT DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń). Tam akt dotyczył INNEJ, ISTNIEJĄCEJ
 *   DO DZIŚ miejscowości; tu tej samej, tylko pod
 *   nazwą, która zniknęła.
 * — ⚠⚠ ZERO DRUGIE OBOK ZAMIAST WIĘKSZEGO — kąt
 *   zajęty (Bojanowo).
 * — ⚠⚠ ZERO PARY BEZ NAZWY WYJŚCIOWEJ — to lustro
 *   kąta Książa Wielkopolskiego z tej samej fali.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   RODZINNYCH ZWYCZAJÓW.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO LAT 1793,
 *   1807–1815 I 1919 (wątki polityczne i militarne).
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby ludności ze strony gminy.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE PODAJĘ, dlaczego zmieniono nazwę.
 * — NIE LICZĘ, jaki procent historii przypada
 *   na dzisiejszą nazwę.
 * — NIE ROBIĘ FIGURY z dat ratusza.
 * — NIE UŻYWAM przymiotnika „borecki".
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Borek Wielkopolski leży w powiecie gostyńskim,
 *   liczy 2 428 mieszkańców (GUS, 31.12.2024)
 *   na 6,3 km², czyli 386 osób na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 6 993 osoby
 *   na 127,58 km² (12 758 ha), czyli 55 osób
 *   na kilometr kwadratowy, przy lesistości 14,7 %,
 * — gmina ma 22 sołectwa i 35 miejscowości,
 * — prawa miejskie w 1392 r. otrzymała Zdzież —
 *   wcześniejsza nazwa tego miasta; lokacja pod nazwą
 *   Borek nastąpiła w 1 poł. XV w., a oficjalna zmiana
 *   nazwy na Borek Wielkopolski w 1958 r.,
 * — Zdzież nie figuruje dziś w wykazach miejscowości
 *   gminy,
 * — najstarsza wiadomość o ratuszu pochodzi z 1463 r.,
 *   a obecny gmach stanął w 1855 r.,
 * — przez gminę płyną Pogonia i Dąbrówka,
 * — w gminie leżą m.in. Zimnowoda, Koszkowo, Jeżewo,
 *   Grodnica, Bruczków, Siedmiorogów Pierwszy
 *   i Siedmiorogów Drugi, Skoków, Skokówko, Zalesie
 *   i Dąbrówka.
 */
export const BOREK_WIELKOPOLSKI: CityContent = {
  slug: "borek-wielkopolski",
  h1: "Thermomix Borek Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Borek Wielkopolski — cena i prezentacja",
  seoDescription:
    "Thermomix w Borku Wielkopolskim w powiecie gostyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Borek Wielkopolski — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Borku Wielkopolskim pod Gostyniem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Borku Wielkopolskiego w powiecie gostyńskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie.",

  highlights: highlightyStandardowe("Borek Wielkopolski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prawa miejskie z 1392 roku dostała Zdzież. Nazwa zmieniła się dwa razy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Borku Wielkopolskim – jak wygląda prezentacja?",
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
      id: "ciaglosc-i-nazwa",
      heading: "Ciągłość siedzi w robieniu, nie w nazwie",
      paragraphs: [
        "Prawa miejskie w 1392 roku otrzymała Zdzież. To wcześniejsza nazwa tego samego miasta. W pierwszej połowie XV wieku pojawiła się lokacja pod nazwą Borek, a człon „Wielkopolski” dopisano oficjalnie dopiero w 1958 roku.",
        "Wychodzi z tego rzecz, która wygląda dziwnie, a jest zupełnie zwyczajna: akt, od którego liczy się miejskość Borku Wielkopolskiego, dotyczy jednostki o nazwie, której dziś nie ma w żadnym wykazie miejscowości gminy. Prawa trwają nieprzerwanie od 1392 roku. Nazwa zmieniła się po drodze dwa razy. Dlaczego — tego nie ustaliłam.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, w którym nazwa nadana urzędowo przegrała z nazwą używaną — tam dwie nazwy istniały równolegle i konkurowały. Tutaj nazwy następowały po sobie i każda była urzędowa w swoim czasie. I drugie rozróżnienie: pisałam też o mieście, do którego nazwy dopisano później objaśnienie — tam nazwa została ta sama, tu wymieniono ją w całości.",
        "Piszę o tym, bo w domu robimy dokładnie to samo, tylko w obie strony naraz.",
        "W jedną stronę: „u nas zawsze się tak robiło” — o czymś, co robicie od trzech lat. Ktoś raz przyniósł to na święta, spodobało się, i po dwóch powtórzeniach zrobiło się „zawsze”. W drugą stronę: „to przepis babci” — o daniu, w którym z babcinego sposobu nie zostało już nic poza nazwą, bo składniki są inne, sprzęt inny i kolejność inna.",
        "I to nie jest oszukiwanie. Tak działa pamięć rodzinna: nazwa okazuje się trwalsza od zawartości i to ona niesie poczucie, że coś jest nasze. Miasto może mieć nieprzerwane prawa od 1392 roku pod trzema kolejnymi nazwami; rodzina może mieć nieprzerwaną niedzielę pod jedną nazwą i trzema różnymi przepisami.",
        "Ruch jest jeden i polega na rozdzieleniu dwóch rzeczy, które zwykle sklejamy. Osobno to, co naprawdę trwa: że siadacie razem, że ktoś w niedzielę gotuje, że jest jedno danie, na które wszyscy czekają. I osobno to, jak to nazywamy. Kiedy się to rozdzieli, zmiana przepisu przestaje być zdradą tradycji, a staje się tym, czym jest — zmianą przepisu.",
        "Uczciwie o drugiej stronie, bo nazwy nie są tu przeszkodą i nie namawiam, żeby je porzucać. To właśnie nazwy zapamiętują dzieci: nie recepturę, tylko „zupa babci” i „ta zapiekanka od cioci”. Nazwa jest tym, co zostanie, gdy szczegóły się zatrą — dokładnie tak jak z miastem, które przez sześćset lat zmieniło nazwę dwa razy i wciąż jest tym samym miastem.",
        "I uczciwie o sprzęcie, bo tu bywa spór. Thermomix zmienia sposób, a nie danie — to samo jedzenie powstaje inaczej. Ale jeśli ktoś w rodzinie powie „to już nie to samo”, warto to potraktować poważnie, a nie zbyć. Czasem chodzi o smak i da się to poprawić. Czasem chodzi o to, że komuś zabrano czynność, którą lubił robić rękami, i wtedy żadne urządzenie nie jest odpowiedzią.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Borku Wielkopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Borku Wielkopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Borku Wielkopolskiego",
      paragraphs: [
        "Borek Wielkopolski leży w powiecie gostyńskim i liczy 2 428 mieszkańców (GUS, 31.12.2024) na sześciu i trzech dziesiątych kilometra kwadratowego, czyli trzysta osiemdziesiąt sześć osób na kilometr kwadratowy. Cała gmina miejsko-wiejska to 6 993 osoby na stu dwudziestu siedmiu i pięćdziesięciu ośmiu setnych kilometra kwadratowego — czyli na dwunastu tysiącach siedmiuset pięćdziesięciu ośmiu hektarach, liczbie zgodnej w czterech różnych rejestrach — co daje pięćdziesiąt pięć osób na kilometr, przy lesistości czternastu i siedmiu dziesiątych procenta. Gmina ma dwadzieścia dwa sołectwa i trzydzieści pięć miejscowości, a płyną przez nią Pogonia i Dąbrówka. Prawa miejskie w 1392 roku otrzymała Zdzież, czyli wcześniejsza nazwa tego miasta; lokacja pod nazwą Borek nastąpiła w pierwszej połowie XV wieku, a dzisiejsza nazwa obowiązuje od 1958 roku. Najstarsza wiadomość o ratuszu pochodzi z 1463 roku, a obecny gmach stanął w 1855.",
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

  districtsHeading: "Do których części Borku Wielkopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie. Nazywają się: Bolesławów, Bruczków, Celestynów, Dąbrówka, Głoginin, Grodnica, Jawory, Jeżewo, Karolew, Koszkowo, Leonów, Maksymilianów, Siedmiorogów Pierwszy, Siedmiorogów Drugi, Skoków, Skokówko, Strumiany, Studzianna, Trzecianów, Wycisłowo, Zalesie i Zimnowoda. Wszędzie bez dopłaty.",
    "Trzy uwagi praktyczne. Pierwsza: nigdy nie warto mówić samego „Borek”, bo Borków i Borek jest w Polsce bardzo dużo — przy umawianiu najlepiej „Borek Wielkopolski w powiecie gostyńskim”. Druga, językowa: „e” wypada z odmiany, więc mówi się „do Borku Wielkopolskiego” i „w Borku Wielkopolskim”, a nie „do Boreka” ani „w Boreku”. Trzecia, adresowa: w gminie są osobno Skoków i Skokówko oraz Siedmiorogów Pierwszy i Drugi, a nazwa Dąbrówka należy jednocześnie do wsi i do rzeki, więc „nad Dąbrówką” bywa dwuznaczne. Jest też osada leśna Stawiszyn — o nazwie identycznej z miastem w powiecie kaliskim, w tym samym województwie.",
  ],
  districts: [],

  nearbyHeading: "Poza Borek Wielkopolski też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gostynia, Koźmina Wielkopolskiego, Jarocina, Krobi, Kobylina i Krotoszyna — wszędzie bezpłatnie, tak samo jak w samym Borku Wielkopolskim.",
  ],
  nearbyTowns: ["Gostyń", "Koźmin Wielkopolski", "Jarocin", "Krobia", "Kobylin", "Krotoszyn"],

  about: blokOMnie("do Borku Wielkopolskiego", "w Borku Wielkopolskim i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Borku Wielkopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Pierwsza: lepiej nie mówić samego „Borek”, bo Borków jest w Polsce bardzo dużo — najlepiej „Borek Wielkopolski w powiecie gostyńskim”. Druga, językowa: „e” wypada z odmiany, więc poprawnie jest „do Borku Wielkopolskiego” i „w Borku Wielkopolskim”, a nie „do Boreka”.",
    },
    ...faqWspolne("w Borku Wielkopolskim"),
    {
      question: "Mąż mówi, że po zmianie sposobu gotowania „to już nie to samo”. Jak to rozwiązać?",
      answer:
        "Najpierw sprawdzić, o co naprawdę chodzi, bo to zdanie znaczy dwie różne rzeczy. Czasem chodzi o smak — wtedy da się poprawić i warto się tym zająć. A czasem chodzi o to, że komuś zniknęła czynność, którą lubił robić rękami, i wtedy żadne urządzenie nie jest odpowiedzią; odpowiedzią jest zostawienie tej czynności jemu. Pomaga też rozdzielenie dwóch rzeczy, które zwykle sklejamy: osobno to, co naprawdę trwa — że siadacie razem, że jest danie, na które wszyscy czekają — i osobno to, jak to nazywamy. Borek Wielkopolski jest tu dobrym obrazem: prawa miejskie z 1392 roku dostała Zdzież, potem miasto nazywało się Borek, a dzisiejszą nazwę ma od 1958 roku. Ciągłość trwa nieprzerwanie, choć nazwa zmieniła się dwa razy.",
    },
    {
      question: "Czy muszę zrezygnować z tradycyjnych przepisów, jeśli kupię Thermomix?",
      answer:
        "Nie. Urządzenie zmienia sposób przygotowania, a nie samo danie — te same rzeczy powstają inaczej, zwykle w jednym naczyniu i bez pilnowania. Część przepisów przenosi się niemal bez zmian, część wymaga innej kolejności, a niektórych po prostu nie warto przenosić i mówię o tym wprost, zamiast udawać, że wszystko wychodzi lepiej. Na prezentacji chętnie gotuję właśnie coś, co robicie u siebie od lat, bo to najuczciwszy test — lepiej sprawdzić to przed zakupem niż po.",
    },
  ],

  geo: { lat: 51.9167, lng: 17.241 },
};
