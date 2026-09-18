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
 * KRZYWIŃ — powiat kościański, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3011044 / 3011043). W powiecie dubluje się
 *   wyłącznie Kościan.
 * MIASTO: 1 653 mieszkańców (GUS 31.12.2024),
 *   2,3 km², 79 m n.p.m.
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   728,2 os./km², iloraz z 2,3 km² daje 718,7.
 *   ROZBIEŻNOŚĆ 9,5.
 *   ⚠⚠⚠ POWIERZCHNI ODTWORZONEJ (2,27 km²) NIE PODAJĘ
 *   — to rekonstrukcja, nie cytat.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 * CAŁA GMINA: 9 452 osoby, 179,0 km², gęstość
 *   53 os./km².
 *   ⚠ [ZW — 9 452 / 179,0 = 52,8. Różnica 0,20.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠ POWIERZCHNIA POTWIERDZONA TRZEMA REJESTRAMI
 *   W PASMIE DZIEWIĘCIU HEKTARÓW.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 23 SOŁECTWA i 34 MIEJSCOWOŚCI.
 *   ⚠⚠ OBRĘBÓW (24) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   ⚠⚠⚠ FAKTU, ŻE „JURKOWO" WYSTĘPUJE W WYKAZIE
 *   TRZY RAZY (wieś, osada leśna, przysiółek
 *   Jurkowo-Huby), A „MOŚCISZKI" DWA — NIE ROBIĘ
 *   FIGURĄ: kąty „jedno pole to za mało" (Osieczna)
 *   i „zgadza się suma, nie zgadza się skład"
 *   (Grabów nad Prosną, ta sama fala) ZAJĘTE.
 *   WSPOMINAM W SEKCJI ADRESOWEJ.
 *   MIEJSCOWOŚCI (część): Jurkowo, Mościszki, Lubiń,
 *   Rąbiń, Rąbinek, Rogaczewo Małe, Rogaczewo Wielkie,
 *   Zbęchy, Zbęchy-Pole, Bieżyń, Cichowo, Łagowo,
 *   Świniec, Wieszkowo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 16,5 %. PODAJĘ.
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1237 R.
 *   — PRAWA MIEJSKIE: 1257 R. (rejestr podaje goły rok).
 *     ⚠⚠ NADAWCY NIE WYMIENIAM — ZERO POSTACI
 *     POLITYCZNYCH.
 *   — RATUSZ: 1905 R. PODAJĘ.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 * WIATRAKI KOŹLAKI: TRZY ZACHOWANE — DWA W MIEŚCIE,
 *   Z 1698 I 1803 R., ORAZ JEDEN W ŁAGOWIE Z 1819 R.
 *   ROZSTAW SKRAJNYCH DAT: 121 LAT. TO RDZEŃ KĄTA.
 *   ⚠⚠⚠ ZAWSZE PISZĘ „WIATRAK KOŹLAK" W PEŁNEJ
 *   POSTACI — samo „koźlak" jest też nazwą napoju
 *   alkoholowego. ZERO ALKOHOLU, TAKŻE PRZEZ
 *   PRZYPADEK.
 *   ⚠⚠ NIE PODAJĘ, CZY DZIŚ DZIAŁAJĄ — nie ustalono
 *   [NP]. PISZĘ, ŻE SĄ ZACHOWANE.
 * ⚠ GEO: 51,9630 / 16,8199 (miasto i gmina identyczne).
 *
 * ⚠⚠ ODMIANA — NAJLEPIEJ UDOKUMENTOWANA W TEJ FALI:
 *   D. do KRZYWINIA · Ms. w KRZYWINIU ·
 *   N. Krzywiniem · C. Krzywiniowi.
 *   PRZYMIOTNIK: KRZYWIŃSKI. UŻYWAM.
 *   ⚠ POTWIERDZENIE: „Rada Miejska Krzywinia".
 *   ⚠⚠ BŁĘDY: „do Krzywina", „do Krzywinu",
 *   „w Krzywinie". WSPOMINAM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TA SAMA FORMA PRZEZ STO
 *   DWADZIEŚCIA JEDEN LAT:
 *   W GMINIE ZACHOWAŁY SIĘ TRZY WIATRAKI KOŹLAKI:
 *   DWA W SAMYM MIEŚCIE, Z 1698 I 1803 R., ORAZ
 *   JEDEN W ŁAGOWIE, Z 1819 R.
 *   MIĘDZY NAJSTARSZYM A NAJMŁODSZYM JEST 121 LAT —
 *   A WSZYSTKIE TRZY TO TEN SAM TYP KONSTRUKCJI.
 *   PRZEZ PONAD STULECIE BUDOWANO JE TAK SAMO,
 *   BO ROZWIĄZANIE DZIAŁAŁO.
 *   ⚠⚠ NIE OPISUJĘ BUDOWY ANI MECHANIZMU — nie
 *   ustalono szczegółów, a to nie jest potrzebne.
 *
 * KĄT: ROZWIĄZANIE, KTÓRE DZIAŁA, NIE ZMIENIA SIĘ
 * PRZEZ STULECIA — o tym, że kształt garnka, noża
 * i drewnianej łyżki nie zmienił się od pokoleń,
 * bo problem się nie zmienił. Kąt z Krzywinia:
 * trzy wiatraki koźlaki, 121 lat, jedna forma.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że trzy zachowane wiatraki koźlaki dzieli 121 lat,
 *   a wszystkie są tego samego typu. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: garnek, nóż
 *   i drewniana łyżka mają dziś kształt, który mieli
 *   nasi pradziadkowie, bo zadanie się nie zmieniło,
 * — ⚠⚠ ŻE Z TEGO WYNIKA PRAKTYCZNY WNIOSEK: jeśli
 *   coś ma niezmienioną formę od bardzo dawna,
 *   to prawdopodobnie ta forma jest dobra, a nie
 *   zacofana,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie wymieniać tego, co
 *   działa, tylko dlatego, że istnieje nowsza wersja.
 *   Wymieniać wtedy, gdy coś realnie przeszkadza,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: „zawsze tak było"
 *   nie jest argumentem samo w sobie. Część rzeczy
 *   naprawdę dało się poprawić i szkoda się przy nich
 *   upierać,
 * — ⚠⚠⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE MA ZASTĘPOWAĆ
 *   CZYNNOŚCI, NIE DOBRE NARZĘDZIA. Nie namawiam
 *   na wyrzucanie garnków ani noży — MÓWIĘ TO WPROST,
 *   choć działa przeciwko mnie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NARZĘDZIE TRWALSZE OD ŚCIAN — kąt zajęty
 *   (Poniec). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam JEDEN PRZEDMIOT przeżył
 *   budynki; tu TRZY RÓŻNE PRZEDMIOTY Z RÓŻNYCH EPOK
 *   mają tę samą formę. JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO LEGENDA LICZY WIĘCEJ NIŻ REJESTR — kąt
 *   zajęty (Śmigiel), a tam też chodziło o wiatraki.
 *   ⚠⚠⚠ ROZGRANICZAM DRUGIM ZDANIEM — OBOWIĄZKOWO,
 *   bo czytelnik może zestawić oba teksty. Tam liczba
 *   z pamięci ZAWYŻAŁA rejestr; tu liczby są trzy
 *   i wszystkie udokumentowane.
 * — ⚠⚠ ZERO CZYNNE, NIE TYLKO ZACHOWANE — kąt zajęty
 *   (Krajenka). DLATEGO NIE TWIERDZĘ, ŻE WIATRAKI
 *   DZIAŁAJĄ.
 * — ⚠⚠ ZERO TO, CO RZUCA SIĘ W OCZY, DOBUDOWANO
 *   PÓŹNIEJ — kąt zajęty (Czerniejewo).
 * — ⚠⚠ ZERO JEDNO POLE TO ZA MAŁO — kąt zajęty
 *   (Osieczna). DLATEGO TRZY „JURKOWA" SĄ TYLKO
 *   UWAGĄ ADRESOWĄ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEGOŚ WYPOSAŻENIA
 *   ANI NAMAWIANIA NA WYMIANĘ SPRZĘTU.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 2,27 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE TWIERDZĘ, że wiatraki dziś działają.
 * — NIE OPISUJĘ ich budowy ani mechanizmu.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE WYMIENIAM nadawcy praw miejskich.
 * — NIE PODAJĘ największej wsi.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Krzywiń leży w powiecie kościańskim, liczy 1 653
 *   mieszkańców (GUS, 31.12.2024) na 2,3 km² i leży
 *   79 m n.p.m.,
 * — cała gmina miejsko-wiejska to 9 452 osoby
 *   na 179 km², czyli 53 osoby na kilometr kwadratowy,
 *   przy lesistości 16,5 %,
 * — gmina ma 23 sołectwa i 34 miejscowości,
 * — pierwsza wzmianka pochodzi z 1237 r., prawa
 *   miejskie miasto otrzymało w 1257 r., a ratusz
 *   pochodzi z 1905 r.,
 * — w gminie zachowały się trzy wiatraki koźlaki:
 *   dwa w mieście, z 1698 i 1803 r., oraz jeden
 *   w Łagowie, z 1819 r.,
 * — w wykazie miejscowości nazwa Jurkowo występuje
 *   trzy razy, a Mościszki dwa,
 * — w gminie leżą m.in. Lubiń, Rąbiń, Rąbinek,
 *   Rogaczewo Małe, Rogaczewo Wielkie, Zbęchy,
 *   Zbęchy-Pole, Bieżyń i Cichowo.
 */
export const KRZYWIN: CityContent = {
  slug: "krzywin",
  h1: "Thermomix Krzywiń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krzywiń — cena i prezentacja",
  seoDescription:
    "Thermomix w Krzywiniu w powiecie kościańskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krzywiń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krzywiniu pod Kościanem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krzywinia w powiecie kościańskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie.",

  highlights: highlightyStandardowe("Krzywiń"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy wiatraki, sto dwadzieścia jeden lat różnicy, jedna forma.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krzywiniu – jak wygląda prezentacja?",
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
      id: "ta-sama-forma",
      heading: "Rozwiązanie, które działa, nie zmienia się przez stulecia",
      paragraphs: [
        "W gminie Krzywiń zachowały się trzy wiatraki koźlaki. Dwa stoją w samym mieście i pochodzą z 1698 oraz 1803 roku, trzeci jest w Łagowie i pochodzi z 1819. Między najstarszym a najmłodszym jest sto dwadzieścia jeden lat.",
        "I przez te sto dwadzieścia jeden lat budowano je tak samo. To ten sam typ konstrukcji — nie kolejne pokolenia rozwiązania, tylko jedno rozwiązanie powtórzone trzy razy w odstępie ponad stulecia. Czy któryś z nich dziś pracuje, nie sprawdzałam; piszę tylko, że się zachowały.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o przedmiocie, który okazał się trwalszy od ścian, w których stoi — tam chodziło o jedną rzecz, która przetrwała. Tutaj chodzi o coś innego: o trzy różne rzeczy z trzech różnych epok, które mają tę samą formę. I jeszcze jedno rozróżnienie, bo o wiatrakach pisałam już raz: tam liczba zapamiętana przez ludzi była znacznie wyższa niż liczba w rejestrze. Tutaj liczby są trzy i wszystkie udokumentowane — nie ma sporu, jest powtórzenie.",
        "Piszę o tym, bo w kuchni mamy dokładnie takie przedmioty i zwykle ich nie zauważamy.",
        "Garnek ma dziś kształt, który miał sto lat temu. Drewniana łyżka wygląda tak samo jak u naszych prababek. Nóż kuchenny, deska, durszlak, tłuczek do ziemniaków — wszystkie te rzeczy przeszły przez sto lat wynalazków i wyszły z tego niezmienione. Nie dlatego, że nikt nie próbował ich poprawić. Dlatego, że zadanie, które wykonują, się nie zmieniło.",
        "Wynika z tego wniosek, który warto mieć w głowie przy każdym zakupie do kuchni: jeśli coś ma niezmienioną formę od bardzo dawna, to prawdopodobnie ta forma jest dobra, a nie zacofana. Nowsza wersja czegoś, co działa, bywa po prostu inną wersją — i to jest w porządku, tylko nie jest powodem do wymiany.",
        "Ruch jest więc jeden i oszczędza pieniądze: nie wymieniać tego, co działa, tylko dlatego, że istnieje coś nowszego. Wymieniać wtedy, gdy stara rzecz realnie przeszkadza — jest tępa, nieszczelna, za mała, niewygodna w ręce. To są powody. „Jest stary” powodem nie jest.",
        "Uczciwie o drugiej stronie, bo „zawsze tak było” też nie jest argumentem samo w sobie. Część rzeczy naprawdę udało się poprawić i szkoda się przy nich upierać — są sprzęty, które kiedyś wymagały pilnowania, a dziś nie wymagają, i trzymanie się starego sposobu bywa po prostu stratą czasu. Rzecz w tym, żeby rozróżniać: to, co nie zmieniło formy przez trzysta lat, i to, co zmieniło ją dwa razy w ostatniej dekadzie, to dwie różne kategorie.",
        "I uczciwie o sprzęcie, choć to działa przeciwko mnie. Thermomix ma zastępować czynności, a nie dobre narzędzia. Nie namawiam nikogo na wyrzucenie garnków, noży ani drewnianych łyżek — one zostaną w Waszej kuchni tak samo jak zostały te wiatraki, a urządzenie ma sens wtedy, gdy zdejmuje z Was pilnowanie i mieszanie, nie wtedy, gdy zastępuje rzeczy, które i tak sprawdzają się od pokoleń.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krzywiniu?",
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
    sekcjaCena("w Krzywiniu"),
    sekcjaRaty("w Krzywiniu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Krzywinia",
      paragraphs: [
        "Krzywiń leży w powiecie kościańskim, liczy 1 653 mieszkańców (GUS, 31.12.2024) na dwóch i trzech dziesiątych kilometra kwadratowego i leży siedemdziesiąt dziewięć metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 9 452 osoby na stu siedemdziesięciu dziewięciu kilometrach kwadratowych, czyli pięćdziesiąt trzy osoby na kilometr, przy lesistości szesnastu i pięciu dziesiątych procenta. Ma dwadzieścia trzy sołectwa i trzydzieści cztery miejscowości. Pierwsza wzmianka pochodzi z 1237 roku, prawa miejskie miasto otrzymało w 1257, a ratusz pochodzi z 1905. W gminie zachowały się trzy wiatraki koźlaki: dwa w mieście, z 1698 i 1803 roku, oraz jeden w Łagowie, z 1819.",
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

  districtsHeading: "Do których części gminy Krzywiń dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. W gminie leżą między innymi: Jurkowo, Mościszki, Lubiń, Rąbiń, Rąbinek, Rogaczewo Małe, Rogaczewo Wielkie, Zbęchy, Zbęchy-Pole, Bieżyń, Cichowo, Łagowo, Świniec i Wieszkowo. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: nazwa Jurkowo pojawia się w urzędowym wykazie trzy razy — jako wieś, jako osada leśna i w postaci Jurkowo-Huby — a Mościszki dwa razy, więc samo „Jurkowo” nie wystarcza i warto dopowiedzieć, o które chodzi. Podobnie osobno są Rąbiń i Rąbinek, Rogaczewo Małe i Wielkie oraz Zbęchy i Zbęchy-Pole. Druga, językowa: mówi się „do Krzywinia” i „w Krzywiniu”, a nie „do Krzywina” ani „w Krzywinie”; przymiotnik brzmi „krzywiński”.",
  ],
  districts: [],

  nearbyHeading: "Poza Krzywiń też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Kościana, Śmigla, Dolska, Gostynia, Śremu i Osiecznej — wszędzie bezpłatnie, tak samo jak w samym Krzywiniu.",
  ],
  nearbyTowns: ["Kościan", "Śmigiel", "Dolsk", "Gostyń", "Śrem", "Osieczna"],

  about: blokOMnie("do Krzywinia", "w Krzywiniu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krzywinia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga adresowa: nazwa Jurkowo występuje w wykazie trzy razy — jako wieś, jako osada leśna i jako Jurkowo-Huby — więc warto dopowiedzieć, o które chodzi; osobno są też Rąbiń i Rąbinek. Językowo: „do Krzywinia” i „w Krzywiniu”, nie „do Krzywina”.",
    },
    ...faqWspolne("w Krzywiniu"),
    {
      question: "Czy warto wymieniać stare garnki i noże na nowsze?",
      answer:
        "Tylko wtedy, gdy realnie przeszkadzają — bo są tępe, nieszczelne, za małe albo niewygodne w ręce. „Jest stary” powodem nie jest. Krzywiń jest tu dobrym obrazem: zachowały się w tej gminie trzy wiatraki koźlaki, z 1698, 1803 i 1819 roku, i przez te sto dwadzieścia jeden lat budowano je tak samo, bo zadanie się nie zmieniło. W kuchni jest identycznie — garnek, drewniana łyżka i deska mają dziś kształt sprzed stulecia nie dlatego, że nikt nie próbował go poprawić, tylko dlatego, że nie było czego poprawiać. Warto jednak rozróżniać: to, co nie zmieniło formy przez trzysta lat, i to, co zmieniło ją dwa razy w ostatniej dekadzie, to dwie różne kategorie.",
    },
    {
      question: "Czy po zakupie Thermomixa trzeba pozbyć się reszty sprzętu?",
      answer:
        "Nie i nie będę do tego namawiać, choć to działa przeciwko mnie. Urządzenie ma zastępować czynności, a nie dobre narzędzia: zdejmuje z Was pilnowanie, mieszanie i część mycia, ale garnki, noże i drewniane łyżki zostaną w kuchni i dobrze. Realnie z blatu i szafek znika zwykle kilka rzeczy — mikser, waga, czasem parowar — i o tym mówię wprost na prezentacji, bo jeśli u Was nie zniknie nic, to jest argument przeciwko zakupowi, a nie za nim.",
    },
  ],

  geo: { lat: 51.963, lng: 16.8199 },
};
