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
 * SZPROTAWA — gmina miejsko-wiejska w powiecie żagańskim.
 * MIASTO 10 454, GMINA 18 846 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 11,0 km², GMINY 232,3 km², 17 SOŁECTW.
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — sprzeczność (22 kontra 19).
 * ⚠ LESISTOŚCI NIE PODAJĘ — sprzeczność (31,45% kontra 35,4%).
 * ⚠⚠ STRONA URZĘDU PODAJE „ok. 23 000 mieszkańców" — DANE
 *   MOCNO PRZESTARZAŁE. NIE CYTUJĘ.
 * UŻYTKI ROLNE 12 798 ha, czyli 55,09% powierzchni gminy.
 * Gmina rolniczo-przemysłowa: północ typowo rolnicza,
 * południe z dużymi kompleksami leśnymi.
 *
 * ⚠⚠ HOMONIM POTRÓJNY: SZPROTAWA to MIASTO, RZEKA (57,5 km,
 * prawy dopływ Bobru, wpada do Bobru w mieście) i — jako
 * „SZPROTAWKA" — potoczna nazwa tej rzeki, WIEŚ I SOŁECTWO
 * w gminie oraz nazwa leśnictwa. FAQ to rozróżnia.
 *
 * PRAWA MIEJSKIE ok. 1260 r., od KONRADA I GŁOGOWSKIEGO
 * (potwierdzone dwoma źródłami).
 * ⚠⚠ 1304 r. — PRZYWILEJE: PRAWO SKŁADU SOLI, PRAWO WŁASNYCH
 * MIAR I WAG oraz PRAWO MENNICZE. Bito KWARTNIKI.
 * ⚠ KĄTA SOLNEGO ANI MIAROWEGO NIE UŻYWAM — „sól w gotowaniu",
 *   „kilogramy zamiast porcji" i „przepisy w cudzych miarach"
 *   są ZAJĘTE. Podaję jako fakty.
 * Szprotawa była miastem powiatowym w latach 1950–1975.
 *
 * GEOGRAFIA: U ZBIEGU SZPROTAWY I BOBRU. Na południu BORY
 * DOLNOŚLĄSKIE, na północy WAŁ TRZEBNICKI.
 * PRZYNALEŻNOŚĆ HISTORYCZNA: DOLNY ŚLĄSK (1331 lenno czeskie,
 * 1742 Prusy). ⚠ TO ODRÓŻNIA JĄ OD WSCHOWY (Wielkopolska).
 * Osiem obszarów chronionych, rezerwat BUCZYNA SZPROTAWSKA.
 *
 * ⚠⚠ HANDEL BYDŁEM — PODSTAWA KĄTA:
 * Średniowieczne bogactwo Szprotawy opierało się na handlu
 * — GŁÓWNIE BYDŁEM, SOLĄ I ZBOŻEM — między Śląskiem
 * a państwami niemieckimi. TO JEST KOTWICA.
 * Klasztor magdalenek (1314) był największym właścicielem
 * ziemskim miasta.
 *
 * ⚠⚠ O BROWARACH, MŁYNACH I CECHACH SZPROTAWY NIE PISZĘ NIC
 * — strona urzędu wprost nie zawiera takich informacji,
 * a innych źródeł brak.
 * ⚠⚠ FESTIWAL „ZIEMIA I PIEŚŃ" — 34. edycja w 2026 r.,
 * organizator Szprotawski Dom Kultury, ponad 700 artystów
 * rocznie, korowód ulicami miasta. ⚠ ŹRÓDŁO NIE PODAJE
 * ŻADNEGO ELEMENTU KULINARNEGO — NIE ZAKŁADAM stoisk
 * z jedzeniem. ⚠ ROKU POWSTANIA FESTIWALU NIE LICZĘ WSTECZ.
 * ŚWIĘTO SZPROTAWY 3–5 lipca 2026, wpisane w festiwal.
 * ⚠⚠ „DOLNOŚLĄSKIE ŚWIĘTO MIODU I WINA" JEST W PRZEMKOWIE
 * (dolnośląskie) — NIE PRZYPISUJĘ GO SZPROTAWIE.
 *
 * DĄB CHROBRY — najstarszy dąb szypułkowy w Polsce, obwód
 * 992 cm, kiełkowanie ok. 1250 r.; wiosną 2020 po raz pierwszy
 * nie wypuścił liści. Żołędzie poświęcone przez Jana Pawła II
 * w 2004 r., 500 sadzonek rozdano po Polsce.
 * ⚠⚠ GMINA SPORNA: jedno źródło umieszcza go w gminie
 * PRZEMKÓW (dolnośląskie), inne w gminie Szprotawa.
 * NIE PISZĘ JEDNOZNACZNIE „w gminie Szprotawa" — piszę
 * „w okolicy, przy granicy województw", i to ostrożnie.
 * ⚠ PODPALENIA DĘBU NIE OPISUJĘ.
 * ⚠ SKRZYDŁORZECHA KAUKASKIEGO NIE WYMIENIAM — jedno źródło.
 *
 * ZABYTKI: kościół romański św. Andrzeja i kościół
 * Wniebowzięcia NMP z XIII w., renesansowy ratusz,
 * średniowieczne mury obronne, MUZEUM ZIEMI SZPROTAWSKIEJ
 * założone w 2000 r. (kufry posagowe z XVIII w., kronika
 * z XVIII w.). Klasztor magdalenek 1314 r.
 *
 * KĄT: WOŁOWINA — MIĘSO, KTÓREGO W POLSKICH DOMACH
 * PRAWIE SIĘ NIE GOTUJE.
 * Kąt od miasta, które przez wieki bogaciło się na handlu
 * bydłem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wołowina zniknęła z polskich kuchni domowych i wróciła
 *   tylko jako burger i stek, czyli w najdroższej i najbardziej
 *   wymagającej postaci,
 * — ŻE PRZYCZYNĄ JEST NIEPOROZUMIENIE: ludzie kupują nie ten
 *   kawałek, co trzeba, potem robią z niego nie to, co trzeba,
 *   i uznają, że wołowina „im nie wychodzi",
 * — PODZIAŁ, KTÓRY WYSTARCZY ZNAĆ: kawałki do krótkiego
 *   smażenia i kawałki do długiego duszenia — i że tych
 *   drugich jest znacznie więcej i są znacznie tańsze,
 * — ŻE TANI KAWAŁEK POTRZEBUJE CZASU, A NIE UMIEJĘTNOŚCI
 *   — to jest dobra wiadomość dla każdego,
 * — ŻE WOŁOWINA DUSZONA JEST DANIEM ŁATWYM, tylko powolnym,
 *   i że nie da się tego procesu skrócić,
 * — o mielonej wołowinie: że jest inna niż wieprzowa i że
 *   dobrze znosi wyraziste przyprawy,
 * — ŻE ROSÓŁ I WYWAR NA WOŁOWINIE MAJĄ ZUPEŁNIE INNY
 *   CHARAKTER niż drobiowe — mocniejszy, ciemniejszy,
 * — CZEGO NIE ROBIĆ: nie kupować najtańszego kawałka
 *   na szybką patelnię i nie oczekiwać, że zmięknie,
 * — UCZCIWIE: urządzenie nie zrobi steku i nie przyrumieni
 *   mięsa tak jak patelnia — a przy wołowinie to jest różnica
 *   widoczna,
 * — ale wolne duszenie pod przykryciem, z pilnowaną
 *   temperaturą i bez pilnowania przez człowieka, to
 *   dokładnie ten proces, którego wołowina wymaga
 *   — i którego brak czasu zabił w polskich domach.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ PRZY MIĘSIE
 *   PODWÓJNIE. Zero „ile godzin", zero stopni.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ZERO TEMATÓW BEZPIECZEŃSTWA ŻYWNOŚCI I ZDROWIA.
 *   Zero surowego mięsa jako zagrożenia, zero „stopni
 *   wysmażenia" w liczbach, zero żelaza i białka jako
 *   argumentu żywieniowego. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI NAZW HANDLOWYCH KAWAŁKÓW MIĘSA
 *   Z KONKRETNYCH SIECI.
 * — ZERO tematów hodowli przemysłowej i etyki jedzenia mięsa.
 * — ZERO porównań cen w złotówkach.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kurczak" (Kostrzyn
 * nad Odrą) dotyczy innego gatunku. „Tłuste kontra chude"
 * dotyczy zawartości tłuszczu jako zasady. „Mielone mięso"
 * i „mielenie mięsa w domu" dotyczą jednej czynności.
 * „Dziczyzna" dotyczy innego mięsa. „Duszenie" dotyczy
 * techniki w oderwaniu od produktu. „Rosół i wywar" dotyczą
 * podstawy. Tutaj chodzi o WOŁOWINĘ jako o produkt, który
 * z polskich domów wypadł, i o powód, dla którego wypadł.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby miejscowości ani lesistości.
 * — NIE CYTUJĘ przestarzałych danych ludnościowych z urzędu.
 * — NIE PISZĘ o browarach, młynach ani cechach Szprotawy.
 * — NIE ZAKŁADAM stoisk kulinarnych na festiwalu.
 * — NIE PRZYPISUJĘ Szprotawie Święta Miodu i Wina.
 * — NIE UMIESZCZAM dębu Chrobry jednoznacznie w gminie.
 * — NIE WYMIENIAM skrzydłorzecha kaukaskiego.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE MYLĘ MIASTA SZPROTAWA z RZEKĄ SZPROTAWĄ ani ze WSIĄ
 *   SZPROTAWKA.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad dziesięć tysięcy mieszkańców na 11 km²,
 *   cała gmina blisko dziewiętnaście tysięcy na 232,3 km²,
 *   z siedemnastoma sołectwami; użytki rolne zajmują 12 798 ha,
 *   czyli ponad połowę powierzchni gminy, a północ gminy jest
 *   typowo rolnicza,
 * — prawa miejskie około 1260 r. od Konrada I głogowskiego;
 *   w 1304 miasto otrzymało prawo składu soli, prawo własnych
 *   miar i wag oraz prawo mennicze i biło monety zwane
 *   kwartnikami; w latach 1950–1975 było miastem powiatowym,
 * — leży u zbiegu Szprotawy i Bobru, między Borami
 *   Dolnośląskimi na południu a Wałem Trzebnickim na północy;
 *   historycznie należy do Dolnego Śląska, a w gminie jest
 *   osiem obszarów chronionych, w tym rezerwat Buczyna
 *   Szprotawska,
 * — średniowieczne bogactwo miasta opierało się na handlu
 *   bydłem, solą i zbożem między Śląskiem a państwami
 *   niemieckimi, a największym właścicielem ziemskim był
 *   klasztor magdalenek założony w 1314 r.,
 * — Międzynarodowy Festiwal Folkloru „Ziemia i Pieśń”
 *   organizuje Szprotawski Dom Kultury; przyjeżdża nań ponad
 *   siedmiuset artystów rocznie, a trzydziesta czwarta edycja
 *   przypada na 2026 r., razem ze Świętem Szprotawy
 *   zaplanowanym na 3–5 lipca,
 * — w mieście stoją romański kościół świętego Andrzeja
 *   i kościół Wniebowzięcia NMP z XIII w., renesansowy ratusz
 *   oraz średniowieczne mury obronne, w których od 2000 r.
 *   mieści się Muzeum Ziemi Szprotawskiej z kuframi posagowymi
 *   i kroniką z XVIII w.,
 * — w okolicy, przy granicy województw, rośnie dąb Chrobry
 *   — najstarszy dąb szypułkowy w Polsce, o obwodzie blisko
 *   dziesięciu metrów, którego kiełkowanie datuje się na około
 *   1250 r.; w 2004 r. jego żołędzie poświęcił Jan Paweł II,
 *   a pięćset wyrosłych z nich sadzonek rozdano po kraju;
 *   wiosną 2020 drzewo po raz pierwszy nie wypuściło liści.
 */
export const SZPROTAWA: CityContent = {
  slug: "szprotawa",
  h1: "Thermomix Szprotawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szprotawa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Szprotawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szprotawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szprotawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szprotawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Szprotawa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tani kawałek wołowiny potrzebuje czasu, nie umiejętności.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szprotawie – jak wygląda prezentacja?",
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
      id: "wolowina",
      heading: "Miasto, które bogaciło się na handlu bydłem — czyli o wołowinie",
      paragraphs: [
        "Średniowieczne bogactwo Szprotawy brało się z handlu: bydłem, solą i zbożem, prowadzonego między Śląskiem a państwami niemieckimi. W 1304 roku miasto dostało do tego prawo składu soli, prawo własnych miar i wag oraz prawo mennicze i biło własne monety. Do dziś ponad połowę powierzchni gminy zajmują użytki rolne, a północna jej część jest typowo rolnicza.",
        "Skoro bydło — napiszę o mięsie, które z polskich kuchni domowych praktycznie zniknęło. Wołowina wróciła do nas głównie jako burger i stek, czyli w najdroższej i najbardziej wymagającej postaci, jaka istnieje. To trochę tak, jakby ktoś wrócił do pieczenia, zaczynając od tortu weselnego.",
        "U podstaw leży jedno nieporozumienie. Ludzie kupują nie ten kawałek, co trzeba, robią z niego nie to, co trzeba, dostają coś twardego i suchego — i wyciągają wniosek, że wołowina im „nie wychodzi”. A wychodzi każdemu, tylko trzeba wiedzieć jedną rzecz.",
        "Ta jedna rzecz to podział: są kawałki do krótkiego smażenia i kawałki do długiego duszenia. I to jest cała wiedza, jakiej potrzeba na start. Tych drugich jest przy tym znacznie więcej i są znacznie tańsze — łopatka, karkówka wołowa, pręga, mostek.",
        "Najlepsza wiadomość jest taka, że tani kawałek potrzebuje czasu, a nie umiejętności. Nie trzeba nic umieć. Trzeba dać mu długo się dusić, a on sam zrobi resztę: twarda tkanka rozejdzie się w miękkość i w sos, którego z drogiego kawałka nie da się w ogóle uzyskać.",
        "Wołowina duszona jest więc daniem łatwym — tylko powolnym. I tego się nie da obejść. Nie ma sposobu, przyprawy ani sprzętu, który zrobi to w dwadzieścia minut, i każdy, kto twierdzi inaczej, mija się z prawdą.",
        "Wołowina mielona to osobny temat i warto ją znać, bo zachowuje się inaczej niż wieprzowa: jest bardziej wyrazista i lepiej znosi mocne przyprawy, które w wieprzowinie by ją przykryły. Dobrze wychodzi wszędzie tam, gdzie ma być wyczuwalna.",
        "Zupełnie inny jest też wywar na wołowinie. Ma mocniejszy, ciemniejszy charakter niż drobiowy — nie jest ani lepszy, ani gorszy, tylko po prostu do innych zup i innych sosów. Kto raz go zrobi, zwykle zaczyna go traktować jako oddzielną kategorię.",
        "Czego nie robić: nie kupować najtańszego kawałka na szybką patelnię, licząc, że zmięknie. Nie zmięknie i to jest jedyny naprawdę kosztowny błąd w całej tej historii — nie dlatego, że mięso było drogie, tylko dlatego, że po takim doświadczeniu ludzie odpuszczają wołowinę na lata.",
        "Teraz uczciwie o sprzęcie. Thermomix nie zrobi steku i nie przyrumieni mięsa tak jak rozgrzana patelnia. Przy wołowinie to jest różnica widoczna i słyszalna, więc jeśli marzy Ci się stek — to zadanie dla patelni i nic tego nie zmieni.",
        "Robi natomiast dokładnie to, czego wołowina wymaga: wolno dusi pod przykryciem, w temperaturze, która nie skacze, i bez konieczności, żeby ktoś przy tym stał. A to jest ważne, bo wołowina nie zniknęła z polskich domów przez smak ani przez cenę — zniknęła przez czas. Danie, które gotuje się samo przez trzy godziny, jest w praktyce zupełnie inną propozycją niż danie, przy którym trzeba przez trzy godziny być.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szprotawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy jadacie dania duszone. Jeśli tak — pokażę je, bo to jest ta część, w której sprzęt daje najwięcej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szprotawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szprotawskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad dziesięć tysięcy mieszkańców na jedenastu kilometrach kwadratowych, a cała gmina blisko dziewiętnaście tysięcy na dwustu trzydziestu dwóch, z siedemnastoma sołectwami; użytki rolne zajmują tu ponad połowę powierzchni, a północna część gminy jest typowo rolnicza. Prawa miejskie Szprotawa otrzymała około 1260 roku od Konrada I głogowskiego, a w 1304 doszły do tego prawo składu soli, prawo własnych miar i wag oraz prawo mennicze — bito tu monety zwane kwartnikami; w latach 1950–1975 miasto było siedzibą powiatu. Leży u zbiegu Szprotawy i Bobru, między Borami Dolnośląskimi na południu a Wałem Trzebnickim na północy, i historycznie należy do Dolnego Śląska; w gminie jest osiem obszarów chronionych, w tym rezerwat Buczyna Szprotawska. Średniowieczne bogactwo miasta opierało się na handlu bydłem, solą i zbożem, a największym właścicielem ziemskim był klasztor magdalenek założony w 1314 roku. Szprotawski Dom Kultury organizuje Międzynarodowy Festiwal Folkloru „Ziemia i Pieśń”, na który przyjeżdża ponad siedmiuset artystów rocznie — trzydziesta czwarta edycja przypada na 2026 rok, razem ze Świętem Szprotawy zaplanowanym na 3–5 lipca. W mieście stoją romański kościół świętego Andrzeja i kościół Wniebowzięcia NMP z XIII wieku, renesansowy ratusz i średniowieczne mury obronne, w których od 2000 roku mieści się Muzeum Ziemi Szprotawskiej. W okolicy, przy samej granicy województw, rośnie dąb Chrobry — najstarszy dąb szypułkowy w Polsce, o obwodzie blisko dziesięciu metrów, którego kiełkowanie datuje się na około 1250 rok; w 2004 roku jego żołędzie poświęcił Jan Paweł II, a pięćset wyrosłych z nich sadzonek rozdano po kraju.",
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

  districtsHeading: "Do których części gminy Szprotawa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemnastu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Szprotawę też przyjadę",
  nearbyParagraphs: [
    "Żagań, Małomice, Kożuchów, Nowogród Bobrzański i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żagań", "Małomice", "Kożuchów", "Nowogród Bobrzański"],

  about: blokOMnie("do Szprotawy", "w Szprotawie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szprotawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemnastu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy się tu powielają: Szprotawa to i miasto, i rzeka wpadająca w nim do Bobru, a Szprotawka to wieś i sołectwo w tej samej gminie — przyjeżdżam wszędzie.",
    },
    ...faqWspolne("w Szprotawie"),
    {
      question: "Dlaczego wołowina wychodzi twarda?",
      answer:
        "Bo najczęściej trafia nie tam, gdzie trzeba. Są kawałki do krótkiego smażenia i kawałki do długiego duszenia — i to jest cała wiedza, jakiej potrzeba. Tych drugich jest więcej i są tańsze: łopatka, pręga, mostek. Potrzebują czasu, a nie umiejętności.",
    },
    {
      question: "Czy da się przyspieszyć duszenie wołowiny?",
      answer:
        "Nie. Wołowina duszona jest daniem łatwym, ale powolnym, i nie ma przyprawy ani sprzętu, który zrobi to w dwadzieścia minut. Można natomiast sprawić, żeby ten czas nie wymagał Twojej obecności — i to jest realna różnica.",
    },
    {
      question: "Czym różni się wywar na wołowinie od drobiowego?",
      answer:
        "Ma mocniejszy, ciemniejszy charakter — nie lepszy ani gorszy, tylko do innych zup i innych sosów. Podobnie wołowina mielona jest bardziej wyrazista niż wieprzowa i lepiej znosi mocne przyprawy.",
    },
  ],

  geo: { lat: 51.5628, lng: 15.5378 },
};
