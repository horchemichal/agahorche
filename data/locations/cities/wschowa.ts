import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * WSCHOWA — gmina miejsko-wiejska, siedziba powiatu wschowskiego.
 * MIASTO blisko 13 000 (9,3 km², gęstość 1 394,9 os./km²),
 * GMINA 19 920 (GUS 31.12.2024), 197,5 km².
 * 15 SOŁECTW (GUS 2019).
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — sprzeczność (18 kontra 23).
 *
 * ⚠⚠ PRZYNALEŻNOŚĆ HISTORYCZNA — SPRAWDZONA WPROST:
 * WSCHOWA NALEŻAŁA DO WIELKOPOLSKI, NIE DO ŚLĄSKA, mimo że
 * dziś leży w lubuskiem. 1343 — Kazimierz Wielki włącza ją
 * do Królestwa Polskiego; 1422 — inkorporacja do Wielkopolski.
 * W latach 1975–1999 w województwie leszczyńskim.
 * Położenie „na pograniczu Śląska i Wielkopolski".
 *
 * ⚠ PRAWA MIEJSKIE — TRZY WERSJE: „1273", „druga połowa XIII w.,
 * przed 1273", „około 1250". Dokument z 1.10.1273 nadawał prawo
 * magdeburskie WSI PRZYCZYNA, nie miastu.
 * ⚠⚠ NIE ROZSTRZYGAM — piszę „w drugiej połowie XIII wieku".
 *
 * GEOGRAFIA: teren przeważnie płaski; Wysoczyzna Wschowska
 * i Wzgórza Lgińskie. TRZY JEZIORA: LGIŃSKO (68,6 ha),
 * LGINKO, DĄBIE. Przemęcko-Wschowski Obszar Chronionego
 * Krajobrazu. Lesistość gminy 28,4%.
 *
 * ⚠⚠ RZEMIOSŁO I GOSPODARKA — PODSTAWA KĄTA:
 * W 1781 r. działały tu 32 CECHY RZEMIEŚLNICZE reprezentujące
 * 51 ZAWODÓW; najliczniejszy i najzamożniejszy był cech
 * sukienniczy. W 1635 r. pracowało 230 SUKIENNIKÓW.
 * MŁYNARSTWO było DRUGĄ podstawową gałęzią gospodarki miasta.
 * Mennica czynna od ok. 1330 r. CUKROWNIA założona 1880 r.
 * ⚠ O CUKROWNI PISZĘ TYLKO ROK — nie znam ani twórcy,
 *   ani okresu działania.
 * ⚠ KĄTA MŁYNARSKIEGO NIE UŻYWAM — „mąka i mielenie" ZAJĘTE.
 * ⚠ KĄTA CUKROWEGO NIE UŻYWAM — „cukier i karmel" ZAJĘTE.
 *
 * ⚠⚠ JARMARKI — KOTWICA KĄTA:
 * MIESZCZAŃSKI JARMARK PRODUKTÓW TRADYCYJNYCH, organizator
 * CKiR Wschowa; edycja 30.06–01.07.2018 w Parku 1000-lecia,
 * codziennie 12:00–20:00. Wystawcy: ceramika, naturalne
 * produkty spożywcze, SERY, WĘDLINY STAROPOLSKIE, MIODY,
 * ręcznie robione słodycze, wyroby z drewna.
 * ⚠⚠ KONKURS NA PRODUKT LOKALNY — organizowany przez LGD
 * „Kraina Lasów i Jezior" we współpracy z CKiR. TO JEST KOTWICA.
 * POLSKO-NIEMIECKI JARMARK PRODUKTÓW TRADYCYJNYCH,
 * 24–25 maja 2013 na rynku: POKAZY KULINARNE, WARSZTATY
 * KULINARNE, film o tematyce kulinarnej.
 * ⚠ NUMERÓW EDYCJI NIE PODAJĘ — nieznane.
 * ⚠ RELACJI MIĘDZY OBOMA JARMARKAMI NIE ROZSTRZYGAM.
 * ŚWIĘTO TRUSKAWKI w DĘBOWEJ ŁĘCE — VI edycja w czerwcu 2013.
 * ⚠ NIE PISZĘ, że odbywa się nadal. ⚠ KĄTA TRUSKAWKOWEGO
 *   NIE UŻYWAM — „truskawki i maliny" ZAJĘTE.
 *
 * ZABYTKI: kolegiata św. Stanisława (pierwsza wzmianka 1326),
 * zespół klasztorny franciszkanów (fundacja 1456), ratusz
 * (wzmiankowany 1435), renesansowe kamienice z XVI w.,
 * kolegium jezuickie 1727–1729, STARY CMENTARZ EWANGELICKI
 * — LAPIDARIUM RZEŹBY NAGROBNEJ założone 1609 r., ok. 200
 * epitafiów, jedno z największych lapidariów w Polsce.
 * MUZEUM ZIEMI WSCHOWSKIEJ.
 * ⚠ ŚLUBU KAZIMIERZA WIELKIEGO NIE DATUJĘ — 1364 kontra 1365.
 *
 * KĄT: DANIE NA KONKURS KONTRA DANIE NA CO DZIEŃ.
 * Kąt od Konkursu na Produkt Lokalny i od jarmarków, na których
 * jedzenie jest oceniane.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że jedzenie oceniane i jedzenie jedzone to dwie różne
 *   kategorie, i że mylenie ich psuje wiele domowych obiadów,
 * — CO WYGRYWA KONKURSY: wyrazistość, efekt, coś nietypowego,
 *   wygląd — bo jurorzy jedzą jeden kęs,
 * — CO SPRAWDZA SIĘ W DOMU: powtarzalność, umiar i to,
 *   że po trzeciej porcji nadal się chce,
 * — ŻE DANIE ZAPROJEKTOWANE POD JEDEN KĘS BYWA MĘCZĄCE
 *   PO TALERZU — i odwrotnie: najlepsze codzienne dania
 *   na konkursie wypadają nijako,
 * — dlaczego przepisy z konkursów i programów kulinarnych
 *   często zawodzą w domu: są pisane pod efekt, nie
 *   pod powtarzanie,
 * — CO Z TEGO WZIĄĆ: z konkursowego dania warto ukraść
 *   JEDEN pomysł, nigdy całość,
 * — ŻE PRZY GOTOWANIU DLA GOŚCI NAJCZĘSTSZY BŁĄD TO WŁAŚNIE
 *   PRZEŁĄCZENIE SIĘ NA TRYB KONKURSOWY — robi się coś
 *   nowego i trudnego zamiast czegoś, co się umie,
 * — że to samo dotyczy pierwszego dania robionego na nowym
 *   sprzęcie,
 * — UCZCIWIE: urządzenie nie zrobi z nikogo kucharza
 *   konkursowego i nie wymyśli dania,
 * — ale jest po stronie codzienności, nie po stronie efektu:
 *   daje powtarzalność, a to jest dokładnie ta cecha, która
 *   w konkursie nie liczy się wcale, a w domu decyduje
 *   o wszystkim.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ANI PROGRAMÓW TELEWIZYJNYCH.
 * — ⚠ ZERO WYŚMIEWANIA KUCHNI KONKURSOWEJ I RESTAURACYJNEJ.
 *   Piszę, że to INNA kategoria, nie że gorsza. Ton życzliwy.
 * — ZERO oceniania konkretnych osób i uczestników.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — Lapidarium i kościoły podaję WYŁĄCZNIE jako architekturę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Szczera ocena własnego
 * gotowania" dotyczy proszenia bliskich o opinię. „Jak to
 * wygląda na zdjęciu, a jak na talerzu" dotyczy fotografii
 * jedzenia. „Porady z grup internetowych" dotyczą źródła
 * porad. „Wesele i przyjęcie w domu" dotyczy dużej imprezy.
 * Tutaj chodzi o RÓŻNICĘ MIĘDZY DANIEM, KTÓRE MA WYGRAĆ,
 * A DANIEM, KTÓRE MA BYĆ ZJEDZONE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM roku praw miejskich ani roku ślubu
 *   Kazimierza Wielkiego.
 * — NIE PODAJĘ numerów edycji jarmarków.
 * — NIE PISZĘ, że Święto Truskawki odbywa się nadal.
 * — NIE OPISUJĘ cukrowni ponad rok założenia.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ WSCHOWY z WSCHOWĄ… nazwa jest jedyna, ale
 *   MYLI SIĘ PRZYNALEŻNOŚĆ: to lubuskie, nie wielkopolskie
 *   i nie dolnośląskie. FAQ to prostuje.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko trzynaście tysięcy mieszkańców
 *   na 9,3 km², cała gmina blisko dwadzieścia tysięcy
 *   na 197,5 km², z piętnastoma sołectwami; lesistość gminy
 *   wynosi 28,4%,
 * — prawa miejskie w drugiej połowie XIII wieku; w 1343 r.
 *   Kazimierz Wielki włączył Wschowę do Królestwa Polskiego,
 *   a w 1422 inkorporowano ją do Wielkopolski — historycznie
 *   jest to więc miasto wielkopolskie, dziś w województwie
 *   lubuskim,
 * — teren jest przeważnie płaski, z Wysoczyzną Wschowską
 *   i Wzgórzami Lgińskimi; w gminie leżą trzy jeziora:
 *   Lgińsko o powierzchni 68,6 ha, Lginko i Dąbie, a północ
 *   gminy obejmuje Przemęcko-Wschowski Obszar Chronionego
 *   Krajobrazu,
 * — w 1781 r. działały we Wschowie trzydzieści dwa cechy
 *   rzemieślnicze reprezentujące pięćdziesiąt jeden zawodów,
 *   a najzamożniejszy był cech sukienniczy — w 1635 r.
 *   pracowało tu dwustu trzydziestu sukienników; drugą
 *   podstawową gałęzią gospodarki miasta było młynarstwo,
 *   mennica działała od około 1330 r., a cukrownię założono
 *   w 1880,
 * — Centrum Kultury i Rekreacji organizuje Mieszczański
 *   Jarmark Produktów Tradycyjnych — edycja z 30 czerwca
 *   i 1 lipca 2018 r. odbyła się w Parku 1000-lecia,
 *   z serami, wędlinami staropolskimi, miodami i ceramiką,
 *   a Lokalna Grupa Działania „Kraina Lasów i Jezior”
 *   prowadziła przy nim Konkurs na Produkt Lokalny;
 *   24 i 25 maja 2013 r. odbył się na rynku Polsko-Niemiecki
 *   Jarmark Produktów Tradycyjnych z pokazami i warsztatami
 *   kulinarnymi; w Dębowej Łęce organizowano Święto Truskawki
 *   — szósta edycja przypadła na czerwiec 2013 r.,
 * — kolegiatę świętego Stanisława notowano po raz pierwszy
 *   w 1326 r., klasztor franciszkanów ufundowano w 1456,
 *   ratusz wzmiankowano w 1435, kolegium jezuickie wzniesiono
 *   w latach 1727–1729, a Stary Cmentarz Ewangelicki
 *   — dziś Lapidarium Rzeźby Nagrobnej z około dwustoma
 *   epitafiami — założono w 1609 r.; w renesansowych
 *   kamienicach mieści się Muzeum Ziemi Wschowskiej.
 */
export const WSCHOWA: CityContent = {
  slug: "wschowa",
  h1: "Thermomix Wschowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wschowa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix we Wschowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wschowa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Wschowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wschowy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Wschowa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jurorzy jedzą jeden kęs. Rodzina zjada cały talerz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Wschowie – jak wygląda prezentacja?",
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
      id: "konkurs",
      heading: "Konkurs na Produkt Lokalny — czyli danie, które ma wygrać, i danie, które ma być zjedzone",
      paragraphs: [
        "Przy wschowskim Mieszczańskim Jarmarku Produktów Tradycyjnych — z serami, wędlinami staropolskimi, miodami i ceramiką — Lokalna Grupa Działania prowadzi Konkurs na Produkt Lokalny. Kilka lat wcześniej, w maju 2013 roku, na rynku odbył się Polsko-Niemiecki Jarmark Produktów Tradycyjnych z pokazami i warsztatami kulinarnymi. Miasto ma zresztą do rzemiosła głowę od dawna: w 1781 roku działały tu trzydzieści dwa cechy reprezentujące pięćdziesiąt jeden zawodów.",
        "Konkurs kulinarny to dobry pretekst, żeby napisać o różnicy, której prawie nikt nie nazywa po imieniu. Jedzenie oceniane i jedzenie jedzone to dwie różne kategorie, a mylenie ich psuje bardzo wiele domowych obiadów.",
        "Konkursy wygrywa wyrazistość. Coś nietypowego, mocny akcent, efekt, ładny wygląd — bo jurorzy jedzą jeden kęs i muszą go zapamiętać spośród trzydziestu innych. To zupełnie sensowne kryterium i nie mam do niego żadnych zastrzeżeń.",
        "Tylko że w domu sprawdza się co innego: powtarzalność, umiar i to, żeby po trzeciej porcji nadal się chciało. Danie zaprojektowane pod jeden kęs po całym talerzu bywa po prostu męczące.",
        "Działa to też w drugą stronę i to jest mniej oczywiste. Najlepsze codzienne dania na konkursie wypadłyby nijako. Dobra zupa, porządne pierogi, mięso duszone tak, jak trzeba — nic z tego nie zrobi wrażenia na jurorze, a właśnie po to gotujemy przez cały rok.",
        "Stąd bierze się rozczarowanie przepisami z konkursów, festiwali i programów kulinarnych. One nie są złe — są po prostu pisane pod efekt, a nie pod powtarzanie. Robi się je raz, robi wrażenie i odkłada, a potem człowiek myśli, że coś jest nie tak z nim.",
        "Praktyczny wniosek, który sama stosuję: z dania konkursowego warto ukraść jeden pomysł, a nigdy całość. Jeden nietypowy dodatek, jedno połączenie, jeden sposób podania. Cała reszta niech zostanie tam, gdzie powstała.",
        "Przy gotowaniu dla gości popełniamy dokładnie ten błąd. Przełączamy się na tryb konkursowy i robimy coś nowego i trudnego, zamiast czegoś, co umiemy zrobić z zamkniętymi oczami. Goście i tak wolą danie udane niż danie ambitne, a gospodarz zestresowany nieudanym eksperymentem to najgorsza możliwa część przyjęcia.",
        "To samo dotyczy pierwszego dania robionego na nowym sprzęcie. Warto zrobić na nim coś, co się już zna — żeby porównać wynik z czymś znajomym, zamiast oceniać naraz nowy przepis i nowe urządzenie.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zrobi z nikogo kucharza konkursowego. Nie wymyśli dania, nie doda pomysłu i nie zastąpi wyobraźni — te rzeczy zostają całkowicie po Twojej stronie.",
        "Jest natomiast całym sobą po stronie codzienności, a nie efektu. Daje powtarzalność: to samo danie wychodzi tak samo w środę i za trzy tygodnie, niezależnie od tego, czy jesteś skupiona, czy zmęczona. W konkursie ta cecha nie liczy się zupełnie. W domu decyduje właściwie o wszystkim.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Wschowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jakie dania powtarzają się u Was najczęściej. Te chcę pokazać — nie te najbardziej efektowne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Wschowie"),
    sekcjaRaty("we Wschowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla wschowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko trzynaście tysięcy mieszkańców na dziewięciu kilometrach kwadratowych, a cała gmina blisko dwadzieścia tysięcy na stu dziewięćdziesięciu siedmiu, z piętnastoma sołectwami; lasy zajmują niecałe trzydzieści procent powierzchni. Prawa miejskie Wschowa otrzymała w drugiej połowie XIII wieku, w 1343 roku Kazimierz Wielki włączył ją do Królestwa Polskiego, a w 1422 inkorporowano ją do Wielkopolski — historycznie jest to więc miasto wielkopolskie, dziś leżące w województwie lubuskim. Teren jest przeważnie płaski, z Wysoczyzną Wschowską i Wzgórzami Lgińskimi; w gminie leżą trzy jeziora — Lgińsko o powierzchni blisko siedemdziesięciu hektarów, Lginko i Dąbie — a północ obejmuje Przemęcko-Wschowski Obszar Chronionego Krajobrazu. W 1781 roku działały tu trzydzieści dwa cechy rzemieślnicze reprezentujące pięćdziesiąt jeden zawodów, a najzamożniejszy był cech sukienniczy: w 1635 roku pracowało we Wschowie dwustu trzydziestu sukienników. Drugą podstawową gałęzią gospodarki było młynarstwo, mennica działała od około 1330 roku, a cukrownię założono w 1880. Kolegiatę świętego Stanisława notowano od 1326 roku, klasztor franciszkanów ufundowano w 1456, ratusz wzmiankowano w 1435, kolegium jezuickie wzniesiono w latach 1727–1729, a założony w 1609 roku Stary Cmentarz Ewangelicki jest dziś Lapidarium Rzeźby Nagrobnej z około dwustoma epitafiami. W renesansowych kamienicach mieści się Muzeum Ziemi Wschowskiej.",
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

  districtsHeading: "Do których części gminy Wschowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Wschowę też przyjadę",
  nearbyParagraphs: [
    "Sława, Szlichtyngowa, Leszno, Góra i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sława", "Szlichtyngowa", "Leszno", "Góra"],

  about: blokOMnie("do Wschowy", "we Wschowie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wschowy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo bywa z tym zamieszanie: Wschowa leży dziś w województwie lubuskim, choć historycznie jest miastem wielkopolskim.",
    },
    ...faqWspolne("we Wschowie"),
    {
      question: "Dlaczego przepisy z programów i konkursów kulinarnych zawodzą w domu?",
      answer:
        "Bo są pisane pod efekt, a nie pod powtarzanie. Konkurs wygrywa wyrazistość, bo juror je jeden kęs i musi go zapamiętać. W domu sprawdza się co innego: powtarzalność, umiar i to, żeby po trzeciej porcji nadal się chciało. Z dania konkursowego warto ukraść jeden pomysł, nigdy całość.",
    },
    {
      question: "Co ugotować, gdy przychodzą goście?",
      answer:
        "Coś, co się umie. Najczęstszy błąd to przełączenie się w tryb konkursowy i zrobienie czegoś nowego i trudnego — a goście i tak wolą danie udane niż ambitne, a zestresowany gospodarz to najgorsza część przyjęcia.",
    },
    {
      question: "Co ugotować jako pierwsze danie na nowym sprzęcie?",
      answer:
        "Coś, co już znasz. Wtedy porównujesz wynik z czymś znajomym, zamiast oceniać naraz nowy przepis i nowe urządzenie. Na eksperymenty przyjdzie czas w drugim tygodniu.",
    },
  ],

  geo: { lat: 51.8039, lng: 16.3175 },
};
