import type { CityContent } from "../city-content";
import {
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
 * BOLESŁAW (powiat olkuski) — gmina wiejska, 7 353 mieszkańców
 * (GUS BDL, 31.12.2025). Piąta gmina powiatu olkuskiego.
 *
 * KOLIZJA NAZW — NAJWAŻNIEJSZA RZECZ NA TEJ STRONIE:
 * w województwie małopolskim są DWIE gminy Bolesław. Ta, wiejska,
 * w powiecie olkuskim (7 353 osoby, gminaboleslaw.pl) oraz druga,
 * też wiejska, w powiecie dąbrowskim koło Dąbrowy Tarnowskiej
 * (2 614 osób, boleslaw.com.pl). Ta strona dostała goły adres
 * /thermomix/boleslaw jako większa; dąbrowska dostanie
 * /thermomix/boleslaw-dabrowski. Na obu stronach musi paść zdanie
 * odsyłające do tej drugiej, inaczej część ruchu trafi pod zły adres.
 *
 * OŚ STRONY: bitwa pod Krzykawką z 5 maja 1863 r. i pomnik pułkownika
 * Francesco Nullo — garibaldczyka, bohatera narodowego Włoch i Polski,
 * który zginął tu, walcząc za Polskę. Rocznica obchodzona co roku
 * pod patronatem Ambasadora Republiki Włoskiej.
 *
 * DEMOGRAFIA I JEJ KONSEKWENCJA: średnia wieku 45,2 lat — najstarsza
 * gmina powiatu. Udział 65+ to 24,8%, dzieci 0–14 lat tylko 12,9%.
 * W 2024 r. urodziło się 36 dzieci w całej gminie. Jak w Bukownie,
 * strona mówi przede wszystkim do gospodarstw jedno- i dwuosobowych
 * oraz do osób po pięćdziesiątce, nie do rodzin z małymi dziećmi.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 12 sołectw: Bolesław, Hutki, Krążek, Krze, Krzykawa, Krzykawka,
 *   Laski, Małobądz, Międzygórze, Podlipie, Ujków Nowy,
 *   Ujków Nowy Kolonia,
 * — powierzchnia 41,42 km² — najmniejsza gmina powiatu; graniczy
 *   z Bukownem, Dąbrową Górniczą, Sławkowem oraz gminami Klucze
 *   i Olkusz; przez gminę przebiega DK94,
 * — wieś Bolesław ok. 7 km na zachód od Olkusza, ok. 43 km
 *   na północny zachód od Krakowa,
 * — BITWA POD KRZYKAWKĄ, 5 maja 1863: powstańcy styczniowi wspierani
 *   przez ochotników włoskich i francuskich przeciw wojskom rosyjskim;
 *   zginął płk Francesco Nullo, garibaldczyk. W Krzykawce stoi
 *   jego pomnik. Krzykawka liczy ok. 830 mieszkańców,
 * — 163. rocznica: 9 maja 2026, pod patronatem honorowym Ambasadora
 *   Republiki Włoskiej w Polsce; orkiestra wojskowa, polonez i tańce
 *   śląskie, prezentacja rzeźbiarza Marko Mazzei, zespół Kantare,
 *   gwiazda Sztywny Pal Azji; współorganizator: krakowski Oddział
 *   Żandarmerii Wojskowej im. płk. Francesco Nullo. Festyn przy
 *   Staropolskim Dworku,
 * — praca: ZGH „Bolesław” w sąsiednim Bukownie, Boltech, dojazdy
 *   do Olkusza, Dąbrowy Górniczej, Sławkowa, Katowic i Krakowa,
 * — 803 podmioty w REGON; spadek ludności 2002–2024: −4,1%,
 * — gmina należy do LGD „Nad Białą Przemszą”.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — LIKWIDACJA KOPALNI „OLKUSZ-POMORZANY”. Gmina Bolesław jest jej
 *   symbolicznym epicentrum, bo nazwa zakładu to nazwa gminy.
 *   Ani słowa, także w formie „kiedyś tu wydobywano”,
 * — OBWODNICA BOLESŁAWIA. Wybudowana w 2022 r. za 7,5 mln zł,
 *   zamknięta w lutym 2023 po powstaniu zapadliska, potem zalana;
 *   spór o odpowiedzialność. Dla mieszkańców symbol zmarnowanych
 *   pieniędzy i bezradności — temat elektryczny, zero wzmianek,
 * — PODTOPIENIA I „POJEZIERZE OLKUSKIE”. Nowe zalewiska zajmują setki
 *   hektarów; w rejonie Hutek poziom wody rósł o 11–27 cm w krótkim
 *   czasie; osuwanie skarp, osiadanie gruntu,
 * — SKAŻENIE GLEB METALAMI CIĘŻKIMI, hałdy i tereny poeksploatacyjne.
 *   Jak w całym powiecie: ŻADNYCH „warzyw z własnego ogródka”,
 *   „przetworów z działki”, „tego, co wyrosło za domem”,
 * — ZANIK RZEK (Sztoła, Baba, Biała, Biała Przemsza),
 * — NAJSTARSZA DEMOGRAFIA i 36 urodzeń rocznie. Adresuję pośrednio,
 *   treścią o gotowaniu dla jednej i dwóch osób, nigdy wprost,
 * — RANKING ZAMOŻNOŚCI. Gmina była 2. w Małopolsce w dochodach
 *   podatkowych na mieszkańca (2017). NIE EKSPONUJĘ: bogata jest kasa
 *   gminy, nie mieszkańcy, a źródło samo to zastrzega. Mieszkańcy
 *   odbierają takie zdania jak kpinę. Nie porównuję też gmin
 *   między sobą pod względem zamożności.
 *
 * PUŁAPKA:
 * — DWIE GMINY BOLESŁAW W MAŁOPOLSCE — patrz wyżej. Sprawdzać,
 *   do której odsyłają dane i linki,
 * — ZGH „BOLESŁAW” NIE MIESZCZĄ SIĘ W GMINIE BOLESŁAW, tylko
 *   w Bukownie. Nazwa zakładu pochodzi od gminy, w której startował,
 *   ale siedziba jest gdzie indziej,
 * — W GMINIE BOLESŁAW NIE MA PUSTYNI BŁĘDOWSKIEJ (to gmina Klucze),
 * — NIE MA CZYNNEJ STACJI KOLEJOWEJ. Najbliższe: Bukowno i Olkusz.
 *   Nie pisać „dojedziesz pociągiem”,
 * — UJKÓW NOWY i UJKÓW NOWY KOLONIA to dwa różne sołectwa. Poprawna
 *   kolejność wyrazów: Ujków Nowy, nie „Nowy Ujków”,
 * — KRZYKAWA i KRZYKAWKA to dwie różne wsie. Bitwa była pod Krzykawką,
 * — sołectw jest 12, nie 11.
 */

export const BOLESLAW: CityContent = {
  slug: "boleslaw",
  h1: "Thermomix Bolesław – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Bolesław (pow. olkuski) — cena",
  seoDescription:
    "Thermomix w gminie Bolesław koło Olkusza: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie 12 sołectw. Dojazd bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Bolesław — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Bolesław w powiecie olkuskim. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead: "Do gminy Bolesław w powiecie olkuskim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwunastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 12 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Bolesław – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w samym Bolesławiu, jak w Krzykawce, Laskach czy Międzygórzu.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Ciebie powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina, w której co roku gra włoska orkiestra",
      paragraphs: [
        "Piątego maja tysiąc osiemset sześćdziesiątego trzeciego roku pod Krzykawką zginął pułkownik Francesco Nullo — Włoch, garibaldczyk, który przyjechał walczyć za Polskę i tu został. W Krzykawce stoi jego pomnik, a rocznicę bitwy obchodzi się co roku, pod patronatem honorowym Ambasadora Republiki Włoskiej.",
        "To nie jest zwykłe gminne święto. Przyjeżdża orkiestra wojskowa, tańczy się poloneza, a jeden z krakowskich oddziałów Żandarmerii Wojskowej nosi imię Nullo i współorganizuje obchody. W gminie liczącej siedem tysięcy mieszkańców to wydarzenie na inną skalę niż wszystko dookoła.",
        "Poza tym gmina Bolesław jest najmniejsza w powiecie — czterdzieści jeden kilometrów kwadratowych — i zarazem jedną z gęściej zabudowanych. Dwanaście sołectw leży blisko siebie, a do Olkusza jest stąd siedem kilometrów, do Bukowna jeszcze mniej.",
        "Praca jest głównie poza gminą: w zakładach w sąsiednim Bukownie, w Olkuszu, w Dąbrowie Górniczej, w Sławkowie, a dla części osób w Katowicach albo w Krakowie. Przez gminę przebiega droga krajowa, więc dojazd samochodem jest wygodny. Kolei tu nie ma — najbliższe stacje to Bukowno i Olkusz.",
        "Wieczór po dojeździe wygląda zwykle podobnie: trzeba coś zjeść, a nie ma już siły stać przy garnku. I to jest cała rzecz, którą pokazuję na prezentacji — nie to, że urządzenie ugotuje coś wymyślnego, tylko że obiad może się gotować sam, kiedy Ty jeszcze wracasz albo dopiero zdejmujesz kurtkę.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy i nie nauczy nikogo gotować z niczego. Zabiera stanie obok garnka i te czynności, przez które gotowanie odkłada się na później — rozdrabnianie, ucieranie, mieszanie, pilnowanie, żeby nie przywarło.",
      ],
    },
    {
      id: "jedna-osoba",
      heading: "Czy Thermomix ma sens, gdy gotuje się dla jednej lub dwóch osób?",
      paragraphs: [
        "To pytanie pada w tej gminie bardzo często i zasługuje na uczciwą odpowiedź, a nie na wykręt. Brzmi ona: ma, ale z innego powodu niż w domu pełnym dzieci. Tam chodzi o ilość. Tutaj o to, żeby w ogóle chciało się ugotować.",
        "Gotowanie dla jednej osoby przegrywa najczęściej nie z brakiem umiejętności, tylko z rachunkiem opłacalności — pół godziny przy garnku i zlew pełen naczyń za jeden talerz. Kiedy nastawienie zupy zajmuje pięć minut, a naczynie jest jedno, ten rachunek wygląda inaczej.",
        "Druga rzecz to porcje. Da się ugotować mało i naprawdę mało, bez kombinowania z przelicznikami i bez wyrzucania połowy. A jeśli akurat wygodniej ugotować więcej i odłożyć na trzy dni, to też jest normalny sposób używania tego urządzenia, a nie rozwiązanie awaryjne.",
        "Trzecia rzecz, o której mówi się rzadziej: przepis prowadzi krok po kroku i pilnuje czasu za Ciebie. Dla wielu osób to jest główny powód zakupu — nie oszczędność czasu, tylko to, że nie trzeba niczego pamiętać ani niczego pilnować przy garnku.",
        "Na prezentacji pokazuję to wprost: gotuję jedną małą porcję, żeby było widać, jak to wygląda naprawdę. Jeśli po tym uznasz, że u Ciebie nie ma to sensu — powiem to samo. Wolę nie sprzedać niż sprzedać coś, co potem stoi w szafce.",
      ],
      links: [
        {
          href: "/thermomix/dla-poczatkujacych",
          label: "Thermomix dla początkujących",
        },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Bolesław?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz. Gmina jest zwarta, ale Ujków Nowy to co innego niż Ujków Nowy Kolonia, a Krzykawa to nie Krzykawka — te nazwy mylą się nawet w internecie, więc lepiej doprecyzować od razu.",
        "Jeśli wolisz spotkanie w ciągu dnia niż wieczorem, po prostu powiedz. Umawiam tu sporo prezentacji na przedpołudnia i zwykle jest to najspokojniejsza pora. Weekendy też są normalnym terminem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/boleslaw-dabrowski",
          label: "Szukasz Bolesławia pod Dąbrową Tarnowską? Tu jest jego strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Bolesław"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy dzieci są dorosłe, a gotuje się nadal dla wszystkich",
      paragraphs: [
        "W tej gminie często trafiam do domów, w których na co dzień mieszkają dwie osoby, ale w niedzielę albo w święta zjeżdża się cała rodzina — dzieci z Olkusza, z Dąbrowy, z Krakowa, czasem z dalszych stron. To dwa zupełnie różne tryby gotowania w jednej kuchni.",
        "W tygodniu chodzi o to, żeby ugotować mało i bez wysiłku. W weekend odwrotnie: nagle trzeba obiad dla ośmiu osób, ciasto i coś, co da się przygotować dzień wcześniej. Praktyczne bywa to, że oba tryby wychodzą tym samym urządzeniem i w tym samym naczyniu.",
        "Przy takich okazjach największą różnicę robią rzeczy najbardziej żmudne: ciasto drożdżowe, którego nie trzeba wyrabiać ręcznie, sosy, których nie trzeba pilnować, i zupa, która gotuje się, kiedy Ty nakrywasz do stołu. To nie jest oszczędność godziny — to różnica między spokojnym przedpołudniem a bieganiem.",
        "Wnukom, jeśli są, najbardziej podoba się zwykle to, że mogą coś zrobić same. Przepis prowadzi krok po kroku, więc dziecko realnie gotuje, a nie tylko miesza łyżką pod nadzorem. Na prezentacji chętnie to pokazuję, jeśli akurat ktoś młodszy jest w domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Przepis prowadzi krok po kroku, więc przy gotowaniu realnie pomaga też ktoś młodszy.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Bolesław dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwunastu sołectw i bez żadnej dopłaty za odległość: Bolesław, Hutki, Krążek, Krze, Krzykawa, Krzykawka, Laski, Małobądz, Międzygórze, Podlipie, Ujków Nowy i Ujków Nowy Kolonia.",
    "Warto od razu doprecyzować dwie pary nazw, bo mylą się nawet w internetowych spisach. Krzykawa i Krzykawka to dwie różne wsie — pomnik Francesco Nullo stoi w tej drugiej. Ujków Nowy i Ujków Nowy Kolonia to również dwa osobne sołectwa, a nie jedno pisane na dwa sposoby.",
    "Gmina jest najmniejsza w powiecie: czterdzieści jeden kilometrów kwadratowych. Wszystko leży blisko siebie, więc dojazd między sołectwami zajmuje minuty. Do Olkusza mam stąd siedem kilometrów, do Bukowna jeszcze mniej.",
    "Dojazd: przez gminę przebiega droga krajowa numer dziewięćdziesiąt cztery, więc samochodem jest tu wygodnie. Kolei w gminie nie ma — najbliższe stacje to Bukowno i Olkusz. Jeśli dojazd pod dom jest trudny, powiedz o tym przy umawianiu, nie jest to problem, o ile wiem wcześniej.",
  ],
  districts: [
    "Bolesław",
    "Krzykawka",
    "Krzykawa",
    "Laski",
    "Hutki",
    "Krążek",
    "Krze",
    "Małobądz",
    "Międzygórze",
    "Podlipie",
    "Ujków Nowy",
    "Ujków Nowy Kolonia",
  ],

  nearbyHeading: "Bukowno, Olkusz i Klucze też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Bolesław leży między Bukownem a Olkuszem i graniczy dodatkowo z Dąbrową Górniczą oraz Sławkowem. Do wszystkich sąsiednich gmin powiatu jadę na tych samych warunkach, bez doliczania kosztu dojazdu.",
    "Na wschód są Klucze i Wolbrom, na południe Trzebinia i Chrzanów, a stamtąd już pierścień krakowski, w którym pracuję od dawna. Jeśli mieszkasz przy granicy gminy i nie masz pewności, po której stronie jesteś — po prostu zapytaj.",
    "Jedna uwaga porządkowa: w Małopolsce są dwie gminy Bolesław. Ta strona dotyczy gminy w powiecie olkuskim, koło Olkusza i Bukowna. Jeśli szukasz gminy Bolesław koło Dąbrowy Tarnowskiej, to inna miejscowość — tam również dojeżdżam, ale ma osobną stronę.",
  ],
  nearbyTowns: [
    "Bukowno",
    "Olkusz",
    "Klucze",
    "Wolbrom",
    "Trzebinia",
    "Chrzanów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Bolesław", "w powiecie olkuskim"),

  faq: [
    {
      question: "Czy to ta gmina Bolesław koło Olkusza, czy ta koło Dąbrowy Tarnowskiej?",
      answer:
        "Ta strona dotyczy gminy Bolesław w powiecie olkuskim — sąsiadującej z Olkuszem, Bukownem i Kluczami. W Małopolsce są dwie gminy o tej nazwie i łatwo je pomylić. Do tej drugiej, w powiecie dąbrowskim, też dojeżdżam, tylko ma osobną stronę.",
    },
    ...faqWspolne("w gminie Bolesław"),
    {
      question: "Mieszkam sama. Czy Thermomix nie jest urządzeniem dla dużych rodzin?",
      answer:
        "Nie tylko. Przy jednej osobie chodzi o co innego niż ilość — o to, żeby w ogóle chciało się ugotować, kiedy rachunek „pół godziny przy garnku za jeden talerz” wypada źle. Da się gotować naprawdę małe porcje, bez kombinowania i bez wyrzucania. Na prezentacji pokazuję to wprost, gotując jedną małą porcję.",
    },
    {
      question: "Mieszkam w Ujkowie Nowym Kolonii. Dojedziesz?",
      answer:
        "Tak, do wszystkich dwunastu sołectw i bez dopłaty za odległość. Ujków Nowy i Ujków Nowy Kolonia to dwie różne miejscowości, więc dobrze, że doprecyzowujesz — przy umawianiu powiedz jeszcze, którędy najwygodniej dojechać pod dom.",
    },
    {
      question: "W niedzielę zjeżdża się cała rodzina. Czy to urządzenie na taki obiad?",
      answer:
        "Tak i akurat przy takich okazjach różnica jest największa. Ciasta nie trzeba wyrabiać ręcznie, sosów pilnować, a zupa gotuje się, kiedy Ty nakrywasz do stołu. Część rzeczy da się przygotować dzień wcześniej. Powiedz przy umawianiu, co zwykle robisz na takie obiady — pokażę to na prezentacji.",
    },
  ],

  geo: { lat: 50.2903, lng: 19.4783 },
};
