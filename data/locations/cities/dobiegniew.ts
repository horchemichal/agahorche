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
 * DOBIEGNIEW — powiat strzelecko-drezdenecki, woj. lubuskie.
 * MIASTO 2 970 (GUS 31.12.2024), 5,7 km².
 * Gmina miejsko-wiejska, 350,99 km², 72 miejscowości.
 *
 * ⚠ HOMONIM: DOBIEGNIEW (miasto, lubuskie) ≠ DOBIEGNIEWO
 * (wieś w kujawsko-pomorskim). FAQ to rozróżnia.
 *
 * HISTORIA GOSPODARCZA — PODSTAWA KĄTA:
 * — 1250 — książę Przemysł I nadał osadę cystersom z Owińskiej;
 *   prawa miejskie ok. 1298 r.,
 * — ⚠⚠ MIASTO UTRZYMYWAŁO SIĘ Z ROLNICTWA, SUKIENNICTWA
 *   I HANDLU. Leżało na szlaku Szczecin–Drezdenko–Poznań,
 *   a kupcy dobiegniewscy byli ZWOLNIENI Z POLSKIEGO CŁA
 *   GRANICZNEGO DO 1660 r.,
 * — ⚠ MIASTO NIGDY NIE ROZWINĘŁO SIĘ PRZEMYSŁOWO — jedynym
 *   zakładem była cegielnia. PISZĘ TO JAKO SUCHY FAKT,
 *   NIGDY JAKO UPADEK ANI BRAK.
 * — ⚠⚠ KLASYCYSTYCZNY SPICHLERZ Z 1. POŁ. XIX w. — KOTWICA.
 *   Budynek do przechowywania suchego ziarna w mieście,
 *   które żyło z rolnictwa.
 *
 * MIERZĘCIN (gmina Dobiegniew): pałac 1861–1863 dla Roberta
 * Friedricha von Waldow; na pocz. XX w. dobudowano gorzelnię
 * i kompleks folwarczny; park pałacowy 15,28 ha z ogrodem
 * ozdobnym, fontanną i częścią japońską; cmentarz rodowy.
 * ⚠ NIE TWIERDZĘ, CO PRZERABIAŁA GORZELNIA — nieustalone.
 * ⚠ WINNICY NIE UŻYWAM — kąt winiarski ZAJĘTY.
 *
 * GEOGRAFIA: jeziora zajmują ok. 6% obszaru gminy —
 * m.in. Osiek, Wielgie Dobiegniewskie, Słowa, Lipie, Łubowo,
 * Ostrowica, Słonowo, Płociczno. Rzeki: Drawa, Mierzęcka
 * Struga, Pokrętna. Obszar Chronionego Krajobrazu Dobiegniew
 * — 29 810 ha.
 * ⚠⚠ PRZYNALEŻNOŚCI GMINY DO DRAWIEŃSKIEGO PARKU NARODOWEGO
 *   NIE POTWIERDZONO — NIE PISZĘ O NIEJ.
 *
 * ⚠⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. Nie znaleziono też gminnej imprezy kulinarnej
 * ani lokalnego przetwórstwa. NIE WYMYŚLAM ŻADNEGO.
 *
 * KĄT: SUCHY ZAPAS — kasze, mąki, strączki, płatki, orzechy:
 * jak je trzymać i po czym poznać, że są już stare.
 * Kąt od klasycystycznego spichlerza z pierwszej połowy
 * XIX wieku — od budynku, którego jedynym zadaniem było
 * utrzymać ziarno suchym i zdatnym do użycia przez rok.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że o suchym zapasie prawie nikt nie myśli, bo „suche
 *   się nie psuje" — a to nieprawda, tylko psuje się inaczej
 *   i wolniej,
 * — ŻE PSUJE SIĘ GŁÓWNIE TŁUSZCZ: im więcej tłuszczu
 *   w produkcie, tym krócej wytrzyma — mąki pełnoziarniste,
 *   płatki, orzechy, siemię i pestki jełczeją najszybciej,
 *   a biały ryż i biała mąka najdłużej,
 * — ŻE POZNAJE SIĘ TO PO ZAPACHU, nie po dacie: zjełczały
 *   tłuszcz pachnie jak stara kredka albo farba olejna,
 *   i ten zapach przechodzi na całe danie,
 * — ŻE STRĄCZKI SIĘ NIE PSUJĄ, TYLKO TWARDNIEJĄ — stara
 *   fasola gotuje się dwa razy dłużej i i tak bywa
 *   niedogotowana; to nie wina przepisu,
 * — ŻE WROGAMI SĄ CZTERY RZECZY: wilgoć, ciepło, światło
 *   i powietrze — dlatego szafka nad piekarnikiem
 *   i parapet to najgorsze miejsca w kuchni,
 * — CO Z TEGO WYNIKA PRAKTYCZNIE: słoiki zamiast otwartych
 *   torebek, najchłodniejsza i najciemniejsza szafka,
 *   orzechy i pełne mąki do lodówki albo zamrażarki,
 * — ŻE WARTO PODPISYWAĆ DATĄ ZAKUPU, nie przydatności —
 *   bo to pierwsza data mówi, jak długo produkt stoi
 *   otwarty,
 * — ŻE KUPOWANIE „NA ZAPAS" W DUŻYCH OPAKOWANIACH OPŁACA
 *   SIĘ TYLKO PRZY PRODUKTACH TRWAŁYCH, a przy orzechach
 *   i pełnych mąkach zwykle się nie opłaca,
 * — ŻE PRZEGLĄD SZAFKI RAZ NA JAKIŚ CZAS jest tańszy niż
 *   wyrzucone ciasto, do którego poszła zjełczała mąka,
 * — UCZCIWIE: urządzenie nie sprawi, że stary produkt będzie
 *   dobry, i nie wykryje jełczenia,
 * — ale robi dwie użyteczne rzeczy: miele świeżo to, co
 *   najszybciej się psuje po zmieleniu, więc można trzymać
 *   ziarno zamiast mąki; i radzi sobie z długim gotowaniem
 *   twardych strączków bez pilnowania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. Nie piszę, że zjełczały
 *   tłuszcz jest szkodliwy ani co robi z organizmem — piszę
 *   wyłącznie o SMAKU I ZAPACHU. TWARDA GRANICA.
 * — ⚠ ŻADNYCH TWIERDZEŃ O PLEŚNIACH, TOKSYNACH I SKAŻENIU
 *   ŻYWNOŚCI. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO straszenia i zero tonu „wyrzuć wszystko".
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ BRAK PRZEMYSŁU PISZĘ JAKO FAKT HISTORYCZNY, NIGDY
 *   JAKO PROBLEM SPOŁECZNY.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Lodówka" dotyczy
 * chłodzenia i produktów świeżych. „Mąka i mielenie" dotyczy
 * przemiału i rodzajów mąki. „Kiszonki" dotyczą fermentacji.
 * „Danie, które może poczekać" dotyczy gotowych potraw.
 * Tutaj chodzi wyłącznie o PRODUKTY SUCHE W SZAFCE — o to,
 * że one też mają swój czas, tylko cichszy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ, co przerabiała gorzelnia w Mierzęcinie.
 * — NIE PRZYPISUJĘ gminie Drawieńskiego Parku Narodowego.
 * — NIE WYMYŚLAM imprezy kulinarnej ani produktu lokalnego.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ DOBIEGNIEWA z DOBIEGNIEWEM w kujawsko-pomorskim.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — w 1250 r. książę Przemysł I nadał osadę cystersom
 *   z Owińskiej, a prawa miejskie Dobiegniew otrzymał
 *   około 1298 r.,
 * — miasto utrzymywało się z rolnictwa, sukiennictwa
 *   i handlu, leżało na szlaku ze Szczecina przez Drezdenko
 *   do Poznania, a tutejsi kupcy byli zwolnieni z polskiego
 *   cła granicznego do 1660 r.,
 * — w mieście stoi klasycystyczny spichlerz z pierwszej
 *   połowy XIX w.,
 * — w Mierzęcinie zachował się pałac z lat 1861–1863
 *   z parkiem o powierzchni ponad piętnastu hektarów,
 *   z ogrodem ozdobnym, fontanną i częścią japońską;
 *   na początku XX w. dobudowano tam gorzelnię i kompleks
 *   folwarczny,
 * — jeziora zajmują około sześciu procent powierzchni gminy
 *   — m.in. Osiek, Wielgie Dobiegniewskie, Słowa, Lipie,
 *   Ostrowica i Płociczno — a przez gminę płyną Drawa,
 *   Mierzęcka Struga i Pokrętna; teren objęty jest Obszarem
 *   Chronionego Krajobrazu Dobiegniew.
 */
export const DOBIEGNIEW: CityContent = {
  slug: "dobiegniew",
  h1: "Thermomix Dobiegniew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dobiegniew — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Dobiegniewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobiegniew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobiegniewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dobiegniewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Dobiegniew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Suche produkty też mają swój czas — tylko cichszy niż reszta.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobiegniewie – jak wygląda prezentacja?",
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
      id: "suchy-zapas",
      heading: "Spichlerz w środku miasta — czyli o tym, co stoi w Waszej szafce",
      paragraphs: [
        "W Dobiegniewie stoi klasycystyczny spichlerz z pierwszej połowy XIX wieku. To budynek o jednym zadaniu: utrzymać ziarno suchym, chłodnym i zdatnym do użycia przez cały rok, do następnych żniw. Miasto żyło z rolnictwa, sukiennictwa i handlu — leżało na szlaku ze Szczecina przez Drezdenko do Poznania, a tutejsi kupcy byli zwolnieni z polskiego cła granicznego aż do 1660 roku. Suchy zapas był tu więc czymś, o czym myślano zawodowo.",
        "Dziś prawie nikt o nim nie myśli, bo panuje przekonanie, że „suche się nie psuje”. Psuje się — tylko inaczej i wolniej, i prawie zawsze po cichu.",
        "Psuje się przede wszystkim tłuszcz. Zasada jest prosta: im więcej tłuszczu w produkcie, tym krócej wytrzyma. Mąki pełnoziarniste, płatki owsiane, orzechy, siemię, mak, pestki — te rzeczy jełczeją najszybciej. Biały ryż, biała mąka, cukier, sól i kasze drobne wytrzymują najdłużej.",
        "Poznaje się to po zapachu, nie po dacie na opakowaniu. Zjełczały tłuszcz pachnie trochę jak stara kredka świecowa, trochę jak farba olejna — i ten zapach przechodzi na całe danie. Najczęstszy scenariusz wygląda tak: ciasto z orzechami wychodzi „jakieś dziwne”, obwinia się przepis, a winne były orzechy stojące w otwartej torebce od półtora roku.",
        "Osobna sprawa to strączki. Fasola, ciecierzyca i groch się nie psują — one twardnieją. Stara fasola gotuje się dwa razy dłużej i potrafi zostać niedogotowana mimo wszystko. Jeśli więc kiedyś fasola „nie chciała zmięknąć”, to bardzo prawdopodobnie nie był błąd w kuchni, tylko wiek składnika.",
        "Wrogów jest czterech i zawsze tych samych: wilgoć, ciepło, światło i powietrze. Dlatego dwa najpopularniejsze miejsca na produkty sypkie są jednocześnie najgorsze — szafka nad piekarnikiem i parapet. Jedno daje ciepło, drugie światło.",
        "Praktycznie wychodzi z tego kilka rzeczy. Słoiki albo pojemniki zamiast otwartych torebek zwiniętych gumką. Najchłodniejsza i najciemniejsza szafka w kuchni, a nie ta najwygodniejsza. Orzechy i mąki pełnoziarniste — do lodówki albo zamrażarki, bo one zyskują na tym najwięcej.",
        "Warto też podpisywać opakowania datą zakupu, a nie tylko patrzeć na datę przydatności. To pierwsza data mówi rzecz, która naprawdę ma znaczenie: jak długo produkt stoi już otwarty.",
        "I jedna uwaga o kupowaniu na zapas. Duże opakowania opłacają się przy produktach trwałych — ryżu, cukrze, makaronie, kaszy. Przy orzechach, siemieniu i mąkach pełnoziarnistych zwykle się nie opłacają, bo oszczędność jest mniejsza niż to, co się potem wyrzuca.",
        "Przegląd szafki raz na jakiś czas jest po prostu tańszy niż jedno wyrzucone ciasto, do którego poszła zjełczała mąka. Nie chodzi o wielkie porządki, tylko o powąchanie kilku rzeczy.",
        "Teraz uczciwie o sprzęcie. Thermomix nie sprawi, że stary produkt będzie dobry, i nie wykryje, że coś zjełczało. To zostaje w nosie gotującego.",
        "Robi natomiast dwie rzeczy, które przy suchym zapasie mają znaczenie. Po pierwsze miele — więc zamiast trzymać mąkę pełnoziarnistą, która psuje się szybko, można trzymać ziarno, które psuje się wolno, i mleć na bieżąco. Po drugie radzi sobie z długim gotowaniem twardych strączków bez stania przy garnku, a to jest właśnie ten przypadek, w którym cierpliwość bywa potrzebna nie z przepisu, tylko z wieku fasoli.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobiegniewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w szafce worek ziarna albo mąki, o który nie wiecie, co zrobić — powiedzcie przy umawianiu. Chętnie użyję go na prezentacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobiegniewie"),
    sekcjaRaty("w Dobiegniewie"),
    {
      id: "rodzina",
      heading: "Thermomix dla dobiegniewskiej rodziny",
      paragraphs: [
        "Dobiegniew liczy blisko trzy tysiące mieszkańców na niespełna sześciu kilometrach kwadratowych i jest siedzibą rozległej gminy obejmującej ponad siedemdziesiąt miejscowości. W 1250 roku książę Przemysł I nadał tutejszą osadę cystersom z Owińskiej, a prawa miejskie Dobiegniew otrzymał około 1298 roku. Miasto utrzymywało się z rolnictwa, sukiennictwa i handlu: leżało na szlaku ze Szczecina przez Drezdenko do Poznania, a tutejsi kupcy byli zwolnieni z polskiego cła granicznego do 1660 roku. Do dziś stoi w mieście klasycystyczny spichlerz z pierwszej połowy XIX wieku. W Mierzęcinie zachował się pałac z lat 1861–1863 z parkiem o powierzchni ponad piętnastu hektarów — z ogrodem ozdobnym, fontanną i częścią japońską; na początku XX wieku dobudowano tam gorzelnię i kompleks folwarczny. Jeziora zajmują około sześciu procent powierzchni gminy, wśród nich Osiek, Wielgie Dobiegniewskie, Słowa, Lipie, Ostrowica i Płociczno, a przez gminę płyną Drawa, Mierzęcka Struga i Pokrętna; teren objęty jest Obszarem Chronionego Krajobrazu Dobiegniew.",
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

  districtsHeading: "Do których części Dobiegniewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi w gminie — Mierzęcina, Osieka, Ostrowitego, Radęcina, Starego Osieczna, Głuska, Słonowa, Wołogoszczy i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Dobiegniew też przyjadę",
  nearbyParagraphs: [
    "Strzelce Krajeńskie, Drezdenko, Stare Kurowo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Strzelce Krajeńskie", "Drezdenko", "Stare Kurowo", "Gorzów Wielkopolski"],

  about: blokOMnie("do Dobiegniewa", "w Dobiegniewie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dobiegniewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Dobiegniew w powiecie strzelecko-drezdeneckim, a nie o Dobiegniewo w kujawsko-pomorskim.",
    },
    ...faqWspolne("w Dobiegniewie"),
    {
      question: "Które produkty sypkie psują się najszybciej?",
      answer:
        "Te, które mają najwięcej tłuszczu: mąki pełnoziarniste, płatki owsiane, orzechy, siemię, mak i pestki. Biały ryż, biała mąka, cukier, sól i drobne kasze wytrzymują najdłużej. Poznaje się to po zapachu, nie po dacie — zjełczały tłuszcz pachnie trochę jak stara kredka świecowa i ten zapach przechodzi na całe danie.",
    },
    {
      question: "Dlaczego fasola nie chce zmięknąć?",
      answer:
        "Najczęściej dlatego, że jest stara. Strączki się nie psują, tylko twardnieją — leżakowana fasola gotuje się dwa razy dłużej i potrafi zostać niedogotowana mimo wszystko. To zwykle nie błąd w kuchni, tylko wiek składnika.",
    },
    {
      question: "Gdzie trzymać produkty sypkie?",
      answer:
        "W zamkniętych słoikach lub pojemnikach, w najchłodniejszej i najciemniejszej szafce — nie nad piekarnikiem i nie na parapecie, bo wrogami są wilgoć, ciepło, światło i powietrze. Orzechy i mąki pełnoziarniste najlepiej do lodówki albo zamrażarki. Warto podpisywać datą zakupu, bo to ona mówi, jak długo produkt stoi otwarty.",
    },
  ],

  geo: { lat: 52.967, lng: 15.75 },
};
