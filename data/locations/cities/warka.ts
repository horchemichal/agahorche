import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * WARKA — powiat grójecki, woj. mazowieckie.
 * MIASTO 11 867 (GUS 31.12.2024), 26,8 km², 443,3 os./km².
 * Ludność +7,6% w latach 2002–2024.
 *
 * ⚠ HOMONIMY: WARKA (mazowieckie, nad Pilicą) ≠ WARTA
 *   (łódzkie, nad Wartą). FAQ to rozróżnia.
 *
 * ⚠⚠ SADOWNICTWO — PODSTAWA KĄTA:
 * GMINA WARKA MA NAJWIĘCEJ SADÓW JABŁONIOWYCH W CAŁEJ POLSCE
 * — 6 966,79 ha (dane 2025, z wniosków o płatności
 * bezpośrednie ARiMR). Za nią Błędów (6 182,68 ha) i Biała
 * Rawska (5 738,28 ha); sama gmina Grójec dopiero
 * na 16. miejscu (2 157,81 ha).
 * ⚠⚠ KĄTY „jabłko", „odmiany", „soki", „kompoty i musy",
 *   „składniki prosto z gospodarstwa", „działka" SĄ ZAJĘTE.
 *   SADOWNICTWO JEST TU KONTEKSTEM, NIE TEMATEM.
 *   TWARDA GRANICA.
 *
 * HISTORIA:
 * — 1375 r. — Warka miała już Radę Miejską i Sąd Miejski;
 *   położenie nad Pilicą blisko ujścia do Wisły dawało
 *   dogodną przeprawę i szlak handlowy,
 * — ⚠ HISTORYCZNIE MIASTO ŻYŁO Z RZEMIOSŁA I HANDLU,
 *   GŁÓWNIE SZEWSTWA I PIWOWARSTWA (rozkwit XV–XVI w.).
 *   SADOWNICTWO TO WARSTWA PÓŹNIEJSZA — NIE TWIERDZĘ,
 *   że miasto było sadownicze od zawsze. TWARDA GRANICA.
 * — 1478 r. — książę mazowiecki Bolesław V wydał przywilej
 *   na wyłączną sprzedaż piwa wareckiego; 1483 r. —
 *   pozwolenie dla mieszczan Starej Warszawy na jego sprzedaż;
 *   XVI w. — lustracja odnotowuje 30 piwowarów; surowce:
 *   żyto, pszenica i jęczmień albo orkisz; chmielnik przy
 *   browarze na Winiarach; beczki spławiano barkami po Pilicy
 *   i Wiśle; piwowarzy oddawali staroście po beczce z każdego
 *   waru,
 *   ⚠⚠ ZERO PROMOCJI ALKOHOLU. Podaję to WYŁĄCZNIE jako suche
 *     fakty gospodarcze w bloku o mieście. NAZW MAREK
 *     NIE PODAJĘ. TWARDA GRANICA.
 * — nowy browar: decyzja 1971, uruchomienie 1975,
 *   prywatyzacja 1994; browar rzemieślniczy 2016
 *   ⚠ TYLKO JAKO SUCHE DATY, BEZ NAZW.
 * — ⚠ NAZWA DZIELNICY WINIARY sugeruje winnice, ale źródło
 *   potwierdza tam CHMIELNIK przy browarze. WINNIC
 *   NIE POTWIERDZONO — NIE PISZĘ O NICH.
 *
 * ZABYTKI: kościół farny św. Mikołaja Biskupa (budowa
 * rozpoczęta na pocz. XVI w.); kościół i klasztor
 * pofranciszkański pw. Matki Bożej Szkaplerznej (franciszkanie
 * osiedli na pocz. XVII w.; w podziemiach spoczywają szczątki
 * książąt mazowieckich — Trojdena, Ziemowita III, księżnej
 * Anny Danuty); PAŁAC W WARCE-WINIARACH z 1689 r., dla
 * Stanisława Antoniego Szczuki, projekt prawdopodobnie
 * Augustyna Wincentego Locciego, park krajobrazowy 15 ha;
 * Muzeum im. Kazimierza Pułaskiego otwarte w 1967 r., pomnik
 * przy wjeździe 1979, renowacja 2007–2013; ratusz
 * klasycystyczny z pocz. XIX w., modernizacja zakończona 2018.
 * ⚠ DOKŁADNEJ DATY BUDOWY RATUSZA NIE PODAJĘ — nieustalona.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH (weryfikacja niepełna).
 *
 * KĄT: PORA DNIA — dlaczego te same czynności wychodzą
 * lepiej rano, a inne wieczorem.
 * Kąt od sadownictwa o skali Warki: zbiór prowadzi się
 * wczesnym rankiem, zanim owoc się nagrzeje, bo ciepły owoc
 * gorzej znosi transport i przechowywanie. W kuchni pora dnia
 * też nie jest obojętna, tylko nikt o tym nie mówi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepis podaje, CO i JAK, ale nigdy KIEDY — a to
 *   bywa decydujące,
 * — CO WYCHODZI LEPIEJ RANO:
 *   — WSZYSTKO, CO WYMAGA CHŁODU: ciasto kruche, ciasto
 *     francuskie, praca z masłem, ubijanie śmietany —
 *     bo kuchnia jest wtedy najzimniejsza w całej dobie,
 *   — KROJENIE I PRZYGOTOWANIE ZAPASU na resztę dnia,
 *   — DECYZJE: co dziś ugotować, ustala się rano, a nie
 *     o osiemnastej przed otwartą lodówką,
 * — CO WYCHODZI LEPIEJ WIECZOREM ALBO W NOCY, SAMO:
 *   — WOLNE WYRASTANIE CIASTA w chłodzie
 *     ⚠ ODSYŁAM DO STRONY O DROŻDŻACH, JEDNYM ZDANIEM,
 *   — MARYNOWANIE I NAMACZANIE STRĄCZKÓW,
 *   — DANIA, KTÓRE ZYSKUJĄ NA ODSTANIU — gulasze, bigos,
 *     sosy, zupy,
 * — ŻE NAJGORSZA PORA NA GOTOWANIE TO TA, W KTÓREJ WSZYSCY
 *   GOTUJĄ: krótkie okno tuż przed kolacją, kiedy wszyscy
 *   są głodni i zmęczeni,
 * — ŻE DLATEGO PRZESUNIĘCIE JEDNEJ CZYNNOŚCI O KILKA GODZIN
 *   DO PRZODU daje więcej niż jakakolwiek sztuczka
 *   przyspieszająca,
 * — ŻE POCZUCIE SMAKU ZMIENIA SIĘ W CIĄGU DNIA — rano to samo
 *   danie wydaje się mniej słone niż wieczorem; dlatego
 *   doprawia się je tuż przed podaniem, a nie rano
 *   ⚠ PISZĘ TO JAKO OBSERWACJĘ KULINARNĄ, BEZ TEZ
 *     FIZJOLOGICZNYCH I ZDROWOTNYCH. TWARDA GRANICA,
 * — ŻE ZAKUPY ROBIONE PO PRACY, GŁODNYM, WYGLĄDAJĄ INACZEJ
 *   NIŻ ROBIONE RANO — to nie przesąd, tylko obserwacja,
 *   którą każdy może sprawdzić na własnym paragonie,
 * — ŻE ŚWIEŻE PRODUKTY SEZONOWE KUPUJE SIĘ RANO, bo to, co
 *   leży na słońcu od południa, to już inny towar,
 * — UCZCIWIE: urządzenie nie zmienia pory dnia i nie ugotuje
 *   za nikogo o siódmej rano,
 * — ale robi jedną rzecz, która tu ma znaczenie: pozwala
 *   rozdzielić pracę i pilnowanie. Danie nastawione rano
 *   nie wymaga stania przy nim, więc przesunięcie roboty
 *   na wcześniej przestaje kosztować cały poranek.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, DIETETYCZNYCH
 *   I FIZJOLOGICZNYCH. ZERO tez o porach posiłków,
 *   metabolizmie, rytmie dobowym i „jedzeniu po osiemnastej".
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO PROMOCJI ALKOHOLU. Piwowarstwo wyłącznie jako
 *   fakt historyczny w bloku o mieście, bez nazw marek.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU JABŁEK I ODMIAN — kąty ZAJĘTE.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu cen skupu i sytuacji sadowników.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „planowanie tygodnia" (Ostrów Wielkopolski) dotyczy
 *   SKALI TYGODNIOWEJ.
 * — „KALENDARZ KUCHENNY NA ROK" (Brwinów) dotyczy SKALI
 *   ROCZNEJ.
 * — „czego nie da się przyspieszyć" (Namysłów) dotyczy
 *   PROCESÓW TRWAJĄCYCH DNI.
 * — „WSZYSTKO PRZYGOTOWANE PRZED STARTEM" dotyczy
 *   PORZĄDKU PRACY BEZPOŚREDNIO PRZED GOTOWANIEM.
 * — „dzień, który zaczyna się o czwartej" (Rzgów) dotyczy
 *   RYTMU PRACY KONKRETNEJ GRUPY ZAWODOWEJ.
 * — „DOPRAWIANIE" dotyczy TECHNIKI KORYGOWANIA SMAKU.
 * TUTAJ chodzi o PORĘ DNIA JAKO CZYNNIK — o to, że ta sama
 * czynność wykonana rano i wieczorem daje inny wynik.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że Warka była sadownicza od zawsze.
 * — NIE PISZĘ o winnicach na Winiarach — było tam chmielnik.
 * — NIE PODAJĘ nazw marek ani firm.
 * — NIE PODAJĘ dokładnej daty budowy ratusza.
 * — NIE STAWIAM TEZ O PORACH POSIŁKÓW I ZDROWIU.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE MYLĘ WARKI z WARTĄ w łódzkiem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — już w 1375 r. Warka miała Radę Miejską i Sąd Miejski,
 *   a położenie nad Pilicą blisko ujścia do Wisły dawało jej
 *   dogodną przeprawę i szlak handlowy,
 * — historycznie miasto żyło z rzemiosła i handlu, głównie
 *   ze szewstwa i piwowarstwa, których rozkwit przypadł
 *   na XV i XVI w.; w 1478 r. książę Bolesław V wydał
 *   przywilej na wyłączną sprzedaż piwa wareckiego, w 1483 r.
 *   pozwolenie na jego sprzedaż otrzymali mieszczanie Starej
 *   Warszawy, a szesnastowieczna lustracja odnotowała
 *   trzydziestu piwowarów; surowcem były żyto, pszenica
 *   i jęczmień albo orkisz, przy browarze na Winiarach
 *   znajdował się chmielnik, a beczki spławiano barkami
 *   po Pilicy i Wiśle,
 * — dziś gmina Warka ma największą powierzchnię sadów
 *   jabłoniowych w całej Polsce — blisko siedem tysięcy
 *   hektarów według danych z wniosków o płatności
 *   bezpośrednie; wyprzedza Błędów i Białą Rawską,
 * — pałac w Warce-Winiarach wzniesiono w 1689 r. dla
 *   Stanisława Antoniego Szczuki, prawdopodobnie według
 *   projektu Augustyna Wincentego Locciego; otacza go park
 *   krajobrazowy o powierzchni piętnastu hektarów,
 *   a od 1967 r. mieści się tam Muzeum imienia Kazimierza
 *   Pułaskiego, odnowione w latach 2007–2013,
 * — kościół farny św. Mikołaja Biskupa zaczęto budować
 *   na początku XVI w., a franciszkanie osiedli tu na początku
 *   XVII w.; w podziemiach klasztoru spoczywają szczątki
 *   książąt mazowieckich — Trojdena, Ziemowita III i księżnej
 *   Anny Danuty,
 * — klasycystyczny ratusz pochodzi z początku XIX w.,
 *   a jego modernizację zakończono w 2018 r.
 */
export const WARKA: CityContent = {
  slug: "warka",
  h1: "Thermomix Warka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Warka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Warce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Warka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Warce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Warki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Warka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis mówi, co i jak. Nigdy nie mówi kiedy — a to bywa decydujące.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Warce – jak wygląda prezentacja?",
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
      id: "pora-dnia",
      heading: "Zbiór o świcie — czyli o porze dnia w kuchni",
      paragraphs: [
        "Gmina Warka ma największą powierzchnię sadów jabłoniowych w całej Polsce — blisko siedem tysięcy hektarów, więcej niż Błędów i Biała Rawska. Przy takiej skali pewne rzeczy przestają być kwestią zwyczaju. Jedną z nich jest pora zbioru: zbiera się wczesnym rankiem, zanim owoc się nagrzeje, bo ciepły gorzej znosi transport i przechowywanie. Nikt tego nie robi z sentymentu do poranków.",
        "W kuchni domowej pora dnia też nie jest obojętna — tylko nikt o tym nie mówi, bo przepis podaje zawsze co i jak, a nigdy kiedy. A bywa, że właśnie to jest decydujące.",
        "Rano wychodzi lepiej wszystko, co wymaga chłodu. Kruche ciasto, ciasto francuskie, każda praca z zimnym masłem, ubijanie śmietany. Powód jest prozaiczny: kuchnia jest o siódmej rano najzimniejsza w całej dobie. Ta sama osoba, ten sam przepis i to samo masło o dziewiętnastej, po dniu gotowania, dadzą inny wynik — ciasto będzie się kleiło, a śmietana nie zechce się ubić.",
        "Rano dobrze wychodzi też przygotowanie zapasu na resztę dnia: obranie, pokrojenie, nastawienie czegoś, co potem tylko czeka. I — rzecz najbardziej niedoceniana — decyzja. Co dzisiaj ugotować, ustala się rano, a nie o osiemnastej przed otwartą lodówką. Decyzja podjęta o siódmej kosztuje minutę; ta sama decyzja o osiemnastej kosztuje pół godziny i zwykle kończy się czymś innym, niż się chciało.",
        "Są za to rzeczy, które robią się same wieczorem albo w nocy i tylko marnują dzień, jeśli je robić na bieżąco. Wolne wyrastanie ciasta w chłodzie — pisałam o tym osobno. Marynowanie. Namaczanie strączków. I cała rodzina dań, które zyskują na odstaniu: gulasze, bigos, gęste sosy, wiele zup. One naprawdę są lepsze następnego dnia i nie jest to legenda.",
        "Najgorsza pora na gotowanie to ta, w której wszyscy gotują: wąskie okno tuż przed kolacją, kiedy wszyscy są głodni, zmęczeni i patrzą na garnek. Wtedy każda czynność trwa dłużej, a cierpliwości jest najmniej. Dlatego przesunięcie jednej czynności o kilka godzin do przodu daje więcej niż jakakolwiek sztuczka przyspieszająca — i to jest chyba najtańsza zmiana, jaką można w kuchni wprowadzić.",
        "Warto też wiedzieć rzecz, która zaskakuje: poczucie smaku zmienia się w ciągu dnia. Rano to samo danie wydaje się mniej słone niż wieczorem. Dlatego zupę ugotowaną rano doprawia się tuż przed podaniem, a nie od razu — inaczej wieczorem okaże się przesolona, choć rano smakowała dobrze.",
        "Podobnie z zakupami. Lista zrobiona rano i lista zrobiona po pracy, na głodnego, to dwie różne listy — i widać to na paragonie. Nie trzeba w to wierzyć; wystarczy raz porównać. A świeże produkty sezonowe kupuje się rano z tego samego powodu, dla którego zbiera się je o świcie: to, co leży na straganie w słońcu od południa, jest już innym towarem.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zmieni pory dnia i nie ugotuje za nikogo o siódmej rano. Jeśli o tej porze nikogo nie ma w kuchni, to nic się nie wydarzy.",
        "Robi natomiast jedną rzecz, która akurat tutaj ma znaczenie: rozdziela pracę od pilnowania. Danie nastawione rano nie wymaga stania przy nim ani zaglądania, więc przesunięcie roboty na wcześniej przestaje kosztować cały poranek — kosztuje tyle, ile zajmuje wrzucenie składników. A to zwykle jedyny powód, dla którego ludzie tego nie robią.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Warce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, o której realnie gotujecie w tygodniu — dobiorę dania pod tę porę, a nie pod wolne popołudnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Warce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wareckiej rodziny",
      paragraphs: [
        "Warka liczy blisko dwanaście tysięcy mieszkańców na dwudziestu siedmiu kilometrach kwadratowych i leży nad Pilicą, niedaleko jej ujścia do Wisły. Już w 1375 roku miała Radę Miejską i Sąd Miejski, a położenie przy przeprawie dawało jej dogodny szlak handlowy. Historycznie żyła z rzemiosła i handlu — głównie ze szewstwa i piwowarstwa, których rozkwit przypadł na XV i XVI wiek: w 1478 roku książę Bolesław V wydał przywilej na wyłączną sprzedaż piwa wareckiego, w 1483 pozwolenie na jego sprzedaż otrzymali mieszczanie Starej Warszawy, a szesnastowieczna lustracja odnotowała trzydziestu piwowarów; surowcem były żyto, pszenica i jęczmień albo orkisz, przy browarze na Winiarach znajdował się chmielnik, a beczki spławiano barkami po Pilicy i Wiśle. Sadownictwo przyszło tu znacznie później, ale dziś gmina Warka ma największą powierzchnię sadów jabłoniowych w całej Polsce — blisko siedem tysięcy hektarów, więcej niż Błędów i Biała Rawska. Pałac w Warce-Winiarach wzniesiono w 1689 roku dla Stanisława Antoniego Szczuki, prawdopodobnie według projektu Augustyna Wincentego Locciego; otacza go park krajobrazowy o powierzchni piętnastu hektarów, a od 1967 roku mieści się tam Muzeum imienia Kazimierza Pułaskiego, odnowione w latach 2007–2013. Kościół farny świętego Mikołaja Biskupa zaczęto budować na początku XVI wieku, a franciszkanie osiedli tu na początku XVII — w podziemiach klasztoru spoczywają szczątki książąt mazowieckich: Trojdena, Ziemowita III i księżnej Anny Danuty. Klasycystyczny ratusz pochodzi z początku XIX wieku, a jego modernizację zakończono w 2018 roku.",
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

  districtsHeading: "Do których części Warki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum przy Rynku, na Winiary, do Nowej Wsi i zabudowy nad Pilicą. Dojeżdżam też do miejscowości w gminie: Ostrołęki, Michałowa, Konar, Gąskowa i Palczewa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Winiary", "Nowa Wieś"],

  nearbyHeading: "Poza Warkę też przyjadę",
  nearbyParagraphs: [
    "Grójec, Góra Kalwaria, Białobrzegi, Chynów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grójec", "Góra Kalwaria", "Białobrzegi"],

  about: blokOMnie("do Warki", "w Warce", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Warki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie z Winiarami i Nową Wsią — oraz do miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Warkę nad Pilicą w powiecie grójeckim, a nie o Wartę w łódzkiem.",
    },
    ...faqWspolne("w Warce"),
    {
      question: "Co w kuchni wychodzi lepiej rano?",
      answer:
        "Wszystko, co wymaga chłodu: kruche ciasto, ciasto francuskie, praca z zimnym masłem, ubijanie śmietany — bo kuchnia jest rano najzimniejsza w całej dobie. Rano warto też przygotować zapas na resztę dnia i podjąć decyzję, co ugotować; ta sama decyzja o osiemnastej kosztuje pół godziny.",
    },
    {
      question: "Co zostawić na wieczór albo na noc?",
      answer:
        "Wolne wyrastanie ciasta w chłodzie, marynowanie, namaczanie strączków oraz dania, które zyskują na odstaniu — gulasze, bigos, gęste sosy i wiele zup. One naprawdę są lepsze następnego dnia i nie jest to legenda.",
    },
    {
      question: "Dlaczego zupa ugotowana rano wieczorem wydaje się przesolona?",
      answer:
        "Bo poczucie smaku zmienia się w ciągu dnia — rano to samo danie wydaje się mniej słone niż wieczorem. Dlatego zupę gotowaną z wyprzedzeniem doprawia się tuż przed podaniem, a nie od razu po ugotowaniu.",
    },
  ],

  geo: { lat: 51.784, lng: 21.1909 },
};
