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
 * SOKÓŁKA — gmina miejsko-wiejska, siedziba powiatu sokólskiego.
 * MIASTO 16 998, GMINA 23 743 (GUS 31.12.2024).
 * POWIERZCHNIA GMINY 313,6 km².
 * ⚠ Notatka projektowa podawała 18 000 — ZAWYŻONE.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono
 * (ponad 80 miejscowości, ale liczby sołectw brak).
 *
 * PRAWA MIEJSKIE 1609 r., nadał KRÓL ZYGMUNT III WAZA.
 * Wcześniej wieś królewska i dwór myśliwski (XV w.).
 * ⚠ NIE PODAJĘ, na jakim prawie — nie ustalono.
 * ⚠ NIE PODAJĘ, czy prawa były tracone — nie ustalono.
 * SIEDZIBA POWIATU 1807–1975 i ponownie od 1999.
 *
 * ⚠ PRZYNALEŻNOŚĆ: administracyjnie województwo podlaskie,
 * ale historycznie ZIEMIA GRODZIEŃSKA, nie Podlasie właściwe.
 * Geograficznie: WZGÓRZA SOKÓLSKIE, północna część
 * Niziny Podlaskiej.
 *
 * ⚠⚠ RZEKA — SPRZECZNOŚĆ ŹRÓDEŁ. Popularne „Sokółka u źródeł
 * Sokołdy" jest ZAKWESTIONOWANE: źródła Sokołdy są w okolicach
 * wsi Trzcianka, rzeka NIE PŁYNIE przez Sokółkę.
 * NIE PISZĘ O ŻADNEJ RZECE W MIEŚCIE.
 *
 * GEOLOGIA — PODSTAWA KĄTA:
 * WZGÓRZA SOKÓLSKIE ok. 1300 km² po stronie polskiej, od Lipska
 * po Krynki. Moreny czołowe ze ZLODOWACENIA WARTY (ponad
 * 130 tys. lat temu). MATERIAŁ SKALNY POCHODZI ZE WSCHODNIEJ
 * FINLANDII I KARELII.
 * ⚠ NAJWYŻSZEGO PUNKTU NIE PODAJĘ — sprzeczność
 * (239,5 m Góra Wojnowska vs 243 m Podlipki w innej gminie).
 *
 * MŁYNY — DRUGA PODSTAWA KĄTA:
 * Historycznie MŁYNY WODNE, PAROWE I MOTOROWE naraz,
 * a także browary, garbarnie i warsztaty garncarskie.
 * Targi tygodniowe i TRZY JARMARKI ROCZNE.
 * Rozbudowa rzemiosła za ANTONIEGO TYZENHAUZA.
 *
 * PARK KRAJOBRAZOWY PUSZCZY KNYSZYŃSKIEJ im. prof. Witolda
 * Sławińskiego — uchwała z 24 MAJA 1988 r., park 72 860 ha,
 * otulina 53 827 ha. Gmina Sokółka jest jedną z 11 gmin parku.
 * MECZET TATARSKI W BOHONIKACH (wieś w gminie Sokółka) —
 * drewniany, POMNIK HISTORII. ⚠ ROKU NADANIA STATUSU
 * NIE PODAJĘ. ⚠ DATY BUDOWY NIE PODAJĘ (istniał już w 1717,
 * data 1873 z belki nie jest dowodem budowy).
 * KOŚCIÓŁ ŚW. ANTONIEGO PADEWSKIEGO — poł. XIX w.,
 * neoklasycystyczny, od 2009 kolegiata.
 * MUZEUM ZIEMI SOKÓLSKIEJ — trzy ekspozycje stałe,
 * w tym TATARSKA.
 * ETYMOLOGIA: nazwa najprawdopodobniej od HODOWLI SOKOŁÓW.
 * SOKÓŁKA NIE NALEŻY DO CITTASLOW (żadne miasto podlaskiego
 * nie należy).
 *
 * KĄT: ROZDRABNIANIE — TARCIE, SIEKANIE, MIELENIE
 * I MIKSOWANIE TO CZTERY RÓŻNE CZYNNOŚCI.
 * Kąt od miasta, w którym pracowały naraz trzy rodzaje młynów
 * o trzech różnych napędach, i którego wzgórza zbudowane są
 * z kamieni przywiezionych lodowcem z Karelii.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepisy używają tych czterech słów wymiennie,
 *   a one dają zupełnie inne wyniki,
 * — TARCIE: rozrywa komórki, uwalnia sok i skrobię
 *   (ziemniaki, cukinia, jabłka, ser),
 * — SIEKANIE: zostawia strukturę i widoczne kawałki,
 *   nóż tnie, nie zgniata,
 * — MIELENIE: rozbija na jednolitą masę bez powietrza,
 * — MIKSOWANIE: rozdrabnia i JEDNOCZEŚNIE napowietrza,
 * — że najczęstszy błąd to zmiksowanie tego, co miało być
 *   posiekane — i że tego się nie cofa,
 * — że przy ziemniakach różnica jest widoczna natychmiast:
 *   zmiksowane robią się klejem, bo skrobia się uwalnia,
 * — UCZCIWIE: to urządzenie robi wszystkie cztery rzeczy,
 *   ale trzeba wiedzieć, o którą prosicie — bo ono nie zgadnie,
 * — i że zioła sieka się nożem, a nie ostrzem na obrotach.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI PRĘDKOŚCI.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE JEST NAJTRUDNIEJSZYM REGIONEM:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy z Białorusią, przejść, wojska, straży.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO bezrobocia i wyludniania.
 * — MECZET W BOHONIKACH i kuchnia tatarska: wyłącznie jako
 *   żywy zabytek i żywa tradycja kulinarna, z szacunkiem,
 *   bez egzotyzowania i bez kontekstu politycznego.
 * — ⚠ ZERO tzw. cudu eucharystycznego z 2008 r. — temat
 *   dotyczy hostii i nie da się go przywołać przy sprzęcie
 *   kuchennym bez instrumentalizacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mielenie mięsa w domu"
 * dotyczy JEDNEGO surowca i maszynki. „Mąka i mielenie"
 * dotyczy zboża i młyna. „Rodzaje mąki" dotyczą typów.
 * „Konsystencja: gładko czy z kawałkami" (Stryków) dotyczy
 * EFEKTU w gotowym daniu. Tutaj chodzi o TAKSONOMIĘ CZYNNOŚCI:
 * o to, że cztery różne operacje mają w przepisach jedną nazwę.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że przez Sokółkę płynie Sokołda ani żadna rzeka.
 * — NIE PODAJĘ najwyższego punktu Wzgórz Sokólskich.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PRZYPISUJĘ Sokółce PIEREKACZEWNIKA — to Kruszyniany
 *   w gminie Krynki, nie Bohoniki w gminie Sokółka.
 * — NIE PRZYPISUJĘ Sokółce produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ daty budowy meczetu ani roku Pomnika Historii.
 * — NIE MYLĘ Sokółki z SOKOŁAMI (powiat wysokomazowiecki)
 *   ani z SOKOŁOWEM PODLASKIM (mazowieckie). FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 16 998, gmina 23 743 mieszkańców na 313,6 km²,
 * — prawa miejskie nadane w 1609 r. przez Zygmunta III Wazę;
 *   wcześniej wieś królewska z dworem myśliwskim,
 * — nazwa najprawdopodobniej od hodowli sokołów,
 * — historycznie działały tu naraz młyny wodne, parowe
 *   i motorowe, a także browary i garbarnie; targi tygodniowe
 *   i trzy jarmarki w roku,
 * — Wzgórza Sokólskie to moreny czołowe ze zlodowacenia Warty
 *   sprzed ponad 130 tys. lat, a materiał skalny pochodzi
 *   ze wschodniej Finlandii i Karelii,
 * — gmina należy do Parku Krajobrazowego Puszczy Knyszyńskiej
 *   im. prof. Witolda Sławińskiego, powołanego 24 maja 1988 r.
 *   (park 72 860 ha, otulina 53 827 ha),
 * — drewniany meczet tatarski w Bohonikach jest Pomnikiem
 *   Historii,
 * — kościół świętego Antoniego Padewskiego z połowy XIX w.,
 *   od 2009 r. kolegiata,
 * — Muzeum Ziemi Sokólskiej z ekspozycją tatarską.
 */
export const SOKOLKA: CityContent = {
  slug: "sokolka",
  h1: "Thermomix Sokółka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sokółka — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Sokółce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sokółka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sokółce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sokółki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Sokółka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Utrzeć, posiekać, zmielić i zmiksować to cztery różne rzeczy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sokółce – jak wygląda prezentacja?",
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
      id: "rozdrabnianie",
      heading: "Trzy rodzaje młynów naraz — czyli cztery różne sposoby rozdrabniania",
      paragraphs: [
        "W dawnej Sokółce pracowały obok siebie młyny wodne, parowe i motorowe. Trzy różne napędy w jednym niedużym mieście, do tej samej z pozoru czynności. Do tego browary, garbarnie i warsztaty garncarskie, targi co tydzień i trzy jarmarki w roku. A same wzgórza, na których miasto stoi, zbudowane są z kamieni, które lodowiec przyniósł tu ze wschodniej Finlandii i Karelii ponad sto trzydzieści tysięcy lat temu — czyli z materiału, z którego przez tysiąclecia robiono żarna.",
        "Skoro więc trafiliśmy do miasta, które rozdrabniało zawodowo, napiszę o czymś, co w przepisach jest źródłem ciągłych nieporozumień.",
        "Utrzeć, posiekać, zmielić i zmiksować to nie są cztery synonimy. To cztery różne czynności, dające cztery różne wyniki, a przepisy używają tych słów wymiennie, jakby to była kwestia stylu.",
        "Tarcie rozrywa komórki i uwalnia to, co w nich było: sok, skrobię, tłuszcz. Dlatego starta cukinia natychmiast puszcza wodę, a starty ser inaczej się topi niż pokrojony w kostkę. To jest czynność, po której składnik jest mokry.",
        "Siekanie tnie i zostawia strukturę. Kawałki są widoczne, mają brzegi, a w daniu wyczuwa się je oddzielnie. Ostry nóż tnie, tępy zgniata — i stąd bierze się różnica między posiekaną cebulą a cebulą zmiażdżoną, która staje się gorzka i wodnista.",
        "Mielenie rozbija na jednolitą masę i wygania z niej powietrze. Efekt jest zwarty i gładki, ale ciężki.",
        "A miksowanie robi dwie rzeczy naraz: rozdrabnia i napowietrza. Dlatego zmiksowana zupa jest lżejsza i jaśniejsza niż ta sama zupa przetarta przez sito. To nie jest ta sama zupa, choć składniki są identyczne.",
        "Najczęstszy błąd, jaki widzę, polega na zmiksowaniu czegoś, co miało być posiekane. I to jest błąd nieodwracalny — z powrotem się nie da. Sałatka jarzynowa, w której warzywa zostały rozbite zamiast pokrojone, jest już tylko pastą. Farsz, który poszedł o kilka sekund za długo, przestaje mieć strukturę.",
        "Najlepiej widać to na ziemniakach i warto o tym wiedzieć, zanim się spróbuje. Ziemniaki zmiksowane robią się klejem — dosłownie, bo skrobia uwalnia się z rozbitych komórek i wiąże wszystko w masę, której nie da się już rozluźnić. Purée robi się tłuczkiem albo przez praskę, nigdy ostrzem na obrotach.",
        "Powiem uczciwie, jak to wygląda przy tym urządzeniu, bo tu jest realna pułapka. Ono potrafi wszystkie cztery rzeczy i robi je szybko. Ale nie zgadnie, o którą z nich prosicie — wykona dokładnie to, co ustawicie, i o kilka sekund za długo zmieni siekanie w miksowanie. Dlatego przy wszystkim, co ma zostać z kawałkami, pracuje się krótko i sprawdza, zamiast ustawić i odejść.",
        "I jedna rzecz, której przy sprzęcie nie robię wcale: ziół nie sieka się ostrzem na obrotach. Delikatne liście — natka, bazylia, koperek — zostają wtedy rozbite, ciemnieją i puszczają sok. Nóż i deska są tu po prostu lepsze i nie ma sensu udawać inaczej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sokółce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest danie, w którym zależy Wam na wyczuwalnych kawałkach — sałatka, farsz, surówka — powiedzcie o tym przy umawianiu. Pokażę, jak pracować krótko i po czym poznać, że to już wystarczy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sokółce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sokólskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko siedemnaście tysięcy mieszkańców, a cała gmina niecałe dwadzieścia cztery tysiące, na ponad trzystu kilometrach kwadratowych. Prawa miejskie nadał Sokółce w 1609 roku król Zygmunt III Waza; wcześniej była wsią królewską z dworem myśliwskim, a sama nazwa wywodzi się najprawdopodobniej od hodowli sokołów. Miasto leży na Wzgórzach Sokólskich — morenach usypanych przez lodowiec ponad sto trzydzieści tysięcy lat temu, z materiału pochodzącego aż z Karelii. Gmina należy do Parku Krajobrazowego Puszczy Knyszyńskiej imienia profesora Witolda Sławińskiego, powołanego 24 maja 1988 roku. We wsi Bohoniki, w granicach gminy, stoi drewniany meczet tatarski uznany za Pomnik Historii, a w mieście działa Muzeum Ziemi Sokólskiej z osobną ekspozycją tatarską. Kościół świętego Antoniego Padewskiego pochodzi z połowy dziewiętnastego wieku i od 2009 roku jest kolegiatą.",
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

  districtsHeading: "Do których części gminy Sokółka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy — a jest ich ponad osiemdziesiąt. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Sokółkę też przyjadę",
  nearbyParagraphs: [
    "Dąbrowa Białostocka, Krynki, Suchowola, Czarna Białostocka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Dąbrowa Białostocka", "Krynki", "Suchowola", "Czarna Białostocka"],

  about: blokOMnie("do Sokółki", "w Sokółce i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sokółki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Sokółka w powiecie sokólskim to nie Sokoły w powiecie wysokomazowieckim ani Sokołów Podlaski, który leży w województwie mazowieckim.",
    },
    ...faqWspolne("w Sokółce"),
    {
      question: "Czym różni się utarcie od posiekania i od zmiksowania?",
      answer:
        "Tarcie rozrywa komórki i uwalnia sok, więc składnik robi się mokry. Siekanie tnie i zostawia widoczne kawałki. Mielenie daje jednolitą, zwartą masę bez powietrza. Miksowanie rozdrabnia i jednocześnie napowietrza — dlatego zmiksowana zupa jest lżejsza niż ta sama zupa przetarta przez sito. Przepisy używają tych słów wymiennie, choć dają cztery różne wyniki.",
    },
    {
      question: "Dlaczego nie należy miksować ziemniaków na purée?",
      answer:
        "Bo skrobia uwalnia się z rozbitych komórek i wiąże wszystko w klej, którego nie da się już rozluźnić. Purée robi się tłuczkiem albo przez praskę. To jeden z niewielu błędów w kuchni, którego naprawdę nie można cofnąć.",
    },
    {
      question: "Czy w Thermomixie da się posiekać, a nie zmiksować?",
      answer:
        "Da się, ale trzeba pracować krótko i sprawdzać, zamiast ustawić i odejść. Urządzenie zrobi dokładnie to, co mu ustawicie, i o kilka sekund za długo zamieni siekanie w miksowanie. Wyjątek, przy którym nie ma sensu go używać: delikatne zioła — natkę, bazylię, koperek — lepiej posiekać nożem, bo ostrze na obrotach rozbija liście i one ciemnieją.",
    },
  ],

  geo: { lat: 53.4056, lng: 23.5028 },
};
