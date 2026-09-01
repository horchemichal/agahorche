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
 * SĘKOWA — GMINA WIEJSKA w powiecie gorlickim.
 * 4 909 mieszkańców (31.12.2024), 194,9 km² — druga co do wielkości
 * w powiecie. GĘSTOŚĆ 25 OS./KM² — ślad wyludnienia po akcji „Wisła”.
 * 479 podmiotów REGON.
 *
 * OŚ STRONY: DWA RAZY UNESCO, Z DWÓCH RÓŻNYCH LIST.
 * ⚠️⚠️ KLUCZOWE ODRÓŻNIENIE OD UŚCIA GORLICKIEGO
 * (`uscie-gorlickie.ts`): tam DWIE CERKWIE Z JEDNEGO WPISU 2013.
 * Tutaj JEDEN KOŚCIÓŁ RZYMSKOKATOLICKI Z WPISU 2003 i JEDNA CERKIEW
 * ŁEMKOWSKA Z WPISU 2013 — dwa NIEZALEŻNE dobra światowego
 * dziedzictwa, dziesięć lat od siebie, dwie różne tradycje
 * wyznaniowe i architektoniczne. NIE ODWRACAĆ TEGO PODZIAŁU.
 * ⚠️ NIE FORMUŁOWAĆ, że to jedyna taka gmina wiejska w Małopolsce —
 * NIE POTWIERDZONO.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ KOŚCIÓŁ ŚŚ. FILIPA I JAKUBA APOSTOŁÓW W SĘKOWEJ —
 *   WPIS UNESCO 2003, w ramach dobra „Drewniane kościoły południowej
 *   Małopolski” (razem z BINAROWĄ w gminie Biecz, Dębnem, Lipnicą
 *   Murowaną, Blizne i Haczowem). Wcześniej, w 1994 R., otrzymał
 *   NAGRODĘ PRIX EUROPA NOSTRA za konserwację. Restauracja 1948–1949,
 * — ⭐ CERKIEW OPIEKI BOGURODZICY W OWCZARACH — 1653 R., typ
 *   ZACHODNIOŁEMKOWSKI, trójdzielna, wieża słupowo-ramowa nad
 *   przedsionkiem. WPIS UNESCO 2013 w ramach transgranicznego dobra
 *   „Drewniane cerkwie regionu karpackiego w Polsce i na Ukrainie”
 *   (16 obiektów: 8 w Polsce, 8 na Ukrainie). NAGRODA EUROPA NOSTRA
 *   1995 za renowację. Ikonostas XVIII w., ikona Chrystusa z 1664.
 *   Obecnie UŻYTKOWANA WSPÓLNIE: parafia rzymskokatolicka
 *   (msze niedz. 12:00) i greckokatolicka (nabożeństwa niedz. 8:30).
 *   TRZECIA NAJSTARSZA DREWNIANA ŚWIĄTYNIA ŁEMKOWSKA W POLSCE —
 *   starsze tylko Powroźnik (gm. Muszyna) i Kwiatoń (gm. Uście),
 * — ⚠️ SOŁECTWA — 11, NIE 15. Oficjalna strona gminy: Bartne,
 *   Bodaki, Krzywa, Małastów, Męcina Mała, Męcina Wielka, Owczary,
 *   Ropica Górna, Sękowa, Siary, Wapienne. SOŁECTWO KRZYWA OBEJMUJE
 *   CZTERY MIEJSCOWOŚCI: Czarne, Nieznajowa, Radocyna, Wołowiec.
 *   Piętnaście to liczba MIEJSCOWOŚCI, nie sołectw,
 * — SIARY — ROPA NAFTOWA: ⚠️ „pierwsza na świecie przemysłowa
 *   kopalnia ropy naftowej”, założona przez księcia STANISŁAWA
 *   JABŁONOWSKIEGO (1799–1878) w 1852 r. „w Pustym lesie” —
 *   TO TWIERDZENIE LOKALNE, NIE FAKT BEZSPORNY. Konkuruje z Bóbrką
 *   (1854). Podawać z atrybucją.
 *   ⚠️⚠️ SZYBU O NAZWIE „STANISŁAW” NIE POTWIERDZONO. Źródło wymienia
 *   szyby „BARBARA” (132 m) i „JÓZEF” (112 m). NIE PISAĆ
 *   O SZYBIE „STANISŁAW”.
 *   Wzmianka z 1695 w Księdze gromadzkiej wsi Siary o terenie
 *   „ku ropie” — wycieki naturalne od średniowiecza.
 *   SKALA: pod koniec XIX w. 156 SZYBÓW i destylarnia; na początku
 *   XX w. OK. 400 SZYBÓW,
 * — PAŁAC DŁUGOSZÓW W SIARACH — zbudowany przez WŁADYSŁAWA DŁUGOSZA
 *   (1864–1937), przedsiębiorcę naftowego, ministra dla Galicji
 *   przed I wojną, posła do parlamentu wiedeńskiego i SENATORA II RP.
 *   ⚠️ ROZBIEŻNOŚĆ: jedno źródło podaje przebudowę ok. 1898 i styl
 *   neobarokowy, drugie budowę 1900 i styl secesyjny. Architekt
 *   niepewny. BEZPIECZNIE: „przełom XIX i XX w., rezydencja
 *   naftowego magnata”.
 *   ⭐ PARK PROJEKTU ARNOLDA RÖHRINGA, twórcy Parku Stryjskiego
 *   we Lwowie — pergola, fontanna, rzeźby, starodrzew.
 *   W latach 1950–1994 obiekt należał do Stadniny Koni.
 *   ⚠️ DOSTĘPNOŚĆ DO ZWIEDZANIA NIE POTWIERDZONA — nie zachęcać,
 * — SIARY lokowane w XIV w. na prawie niemieckim, OD XVII W.
 *   W STAROSTWIE NIEGRODOWYM W LIPINKACH (ładne spięcie z sąsiednią
 *   gminą), w 2. poł. XVIII w. własność Kuropatnickich,
 * — WAPIENNE — uzdrowisko. ⚠️ FRAZA „NAJMNIEJSZE W POLSCE
 *   UZDROWISKO” — twierdzenie powtarzane przez gminę i portale,
 *   STATUSU PRAWNEGO NIE ZWERYFIKOWANO. Podawać z zastrzeżeniem.
 *   Wieś założona 1546. Właściwości lecznicze wód znane od XVII w.
 *   Dwa ujęcia: „MARTA” i „KAMILA”. ⭐ W 1812 R. W TUTEJSZYM
 *   ZAKŁADZIE KĄPIELOWYM LECZYLI RANY ŻOŁNIERZE NAPOLEONA.
 *   Borowiny, tężnia solankowa, wieża widokowa na górze Ferdel.
 *   ⚠️ RODZAJU WÓD (siarczkowe) NIE POTWIERDZONO WPROST,
 * — BARTNE — KAMIENIARSTWO ŁEMKOWSKIE. ⚠️ POTWIERDZONE TYLKO
 *   POŚREDNIO, przez opis Wapiennego na stronie gminy: mieszkańcy-
 *   Łemkowie „zajmowali się głównie kamieniarstwem, wytwarzając
 *   ŻARNA, PŁYTY PODŁOGOWE I NAGROBKI”. Cerkiew śś. Kosmy i Damiana
 *   w Bartnem jest FILIĄ ZAGRODY MAZIARSKIEJ W ŁOSIU (gmina Ropa),
 *   udostępniana po telefonicznym zgłoszeniu.
 *   ⚠️ LEGENDA o zbudowaniu wsi przez kamieniarzy — TO LEGENDA,
 * — WSIE OPUSZCZONE: NIEZNAJOWA, RADOCYNA, CZARNE — pusta dolina
 *   Wisłoki po akcji „Wisła”,
 * — Południowo-wschodnia część gminy to MAGURSKI PARK NARODOWY.
 *   Granica ze Słowacją na południu,
 * — CMENTARZ WOJENNY NA PRZEŁĘCZY MAŁASTOWSKIEJ,
 * — DW 977 przez gminę (Małastów). KOLEJ: BRAK.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️ PRZEJŚCIA GRANICZNEGO KONIECZNA. Leży w GMINIE UŚCIE
 *   GORLICKIE, nie tutaj,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł).
 */

export const SEKOWA: CityContent = {
  slug: "sekowa",
  h1: "Thermomix Sękowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Sękowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Sękowa: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sękowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Sękowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Sękowej, Siar, Owczar, Bartnego, Wapiennego i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Sękowa – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
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
      heading: "Kościół z dwa tysiące trzeciego i cerkiew z dwa tysiące trzynastego",
      paragraphs: [
        "W tej gminie stoją dwa obiekty z Listy Światowego Dziedzictwa UNESCO — i to jest fakt, który wymaga precyzji, bo łatwo go pomylić z sytuacją sąsiadów.",
        "Pierwszy to drewniany kościół świętych Filipa i Jakuba Apostołów w Sękowej, wpisany w dwa tysiące trzecim roku w grupie „Drewniane kościoły południowej Małopolski”. W tej samej grupie jest kościół w Binarowej w sąsiedniej gminie Biecz, a także Dębno Podhalańskie i Lipnica Murowana. Jeszcze przed wpisem, w tysiąc dziewięćset dziewięćdziesiątym czwartym roku, kościół dostał nagrodę Europa Nostra za konserwację.",
        "Drugi to cerkiew Opieki Bogurodzicy w Owczarach z tysiąc sześćset pięćdziesiątego trzeciego roku, wpisana dziesięć lat później, w dwa tysiące trzynastym, w zupełnie innej grupie: „Drewniane cerkwie regionu karpackiego w Polsce i na Ukrainie”, obejmującej szesnaście obiektów po obu stronach granicy. Ona również dostała nagrodę Europa Nostra, w dziewięćdziesiątym piątym.",
        "Różnica jest zasadnicza i warto ją nazwać. Sąsiednia gmina Uście Gorlickie ma dwie cerkwie z tego samego wpisu z dwa tysiące trzynastego. Sękowa ma dwa niezależne dobra światowego dziedzictwa, oddalone od siebie o dekadę, z dwóch różnych tradycji wyznaniowych i budowlanych. To nie jest więcej tego samego — to dwie różne rzeczy naraz.",
        "Cerkiew w Owczarach jest przy tym trzecią najstarszą drewnianą świątynią łemkowską w Polsce; starsze są tylko Powroźnik i Kwiatoń. Ma osiemnastowieczny ikonostas i ikonę Chrystusa z tysiąc sześćset sześćdziesiątego czwartego roku. Dziś służy równocześnie dwóm parafiom: rzymskokatolickiej i greckokatolickiej, które mają w niej nabożeństwa o różnych godzinach.",
        "Gmina ma też historię naftową, starszą niż gorlicka lampa. W Siarach książę Stanisław Jabłonowski założył w tysiąc osiemset pięćdziesiątym drugim roku kopalnię, którą miejscowe źródła nazywają pierwszą przemysłową na świecie. Podaję to jako twierdzenie lokalne, bo konkuruje z Bóbrką i nie jest rozstrzygnięte. Pewna jest skala: pod koniec dziewiętnastego wieku było tu sto pięćdziesiąt sześć szybów i destylarnia, a na początku dwudziestego około czterystu.",
        "Z tamtych pieniędzy powstał pałac Władysława Długosza — przedsiębiorcy naftowego, ministra dla Galicji i późniejszego senatora Drugiej Rzeczypospolitej. Otacza go park zaprojektowany przez Arnolda Röhringa, tego samego, który stworzył Park Stryjski we Lwowie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Sękowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Koniecznie podaj sołectwo. Gmina ma sto dziewięćdziesiąt pięć kilometrów kwadratowych i jedenaście sołectw rozciągniętych aż po granicę ze Słowacją — jazda do Bartnego to zupełnie co innego niż do Siar. Na cenę to nie wpływa.",
        "Jeśli mieszkasz w Krzywej, powiedz, o którą miejscowość chodzi. To sołectwo obejmuje aż cztery: Czarne, Nieznajową, Radocynę i Wołowiec.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Sękowa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dwadzieścia pięć osób na kilometr i puste doliny",
      paragraphs: [
        "Sękowa zajmuje blisko dwieście kilometrów kwadratowych, a mieszka w niej niecałe pięć tysięcy osób. To dwadzieścia pięć osób na kilometr kwadratowy — i ta liczba nie jest przypadkiem, tylko skutkiem historii. Po akcji „Wisła” część dolin opustoszała zupełnie: Nieznajowa, Radocyna i Czarne to dziś wsie, których praktycznie nie ma.",
        "Dla mieszkańców oznacza to bardzo konkretne warunki codzienne. Sąsiad bywa kilka kilometrów dalej, do większego sklepu jedzie się kilkanaście, a zimą droga przez przełęcz potrafi być trudna. Zarejestrowanych podmiotów gospodarczych jest tu czterysta siedemdziesiąt dziewięć i są to niemal wyłącznie małe działalności.",
        "Kuchnia w takim miejscu musi być planowana i nikt nie musi tego nikomu tłumaczyć. Kupuje się rzadziej i większymi partiami, gotuje z zapasem, a zamrażarka jest sprzętem podstawowym, nie luksusowym.",
        "Najbardziej opłaca się przy tym gotowanie jednogarnkowe. Zupa albo duszone mięso gotuje się bez pilnowania, samo się wyłącza i czeka; jedna duża porcja podzielona na pojemniki obsługuje pół tygodnia. Przy dwóch godzinach duszenia to realna różnica.",
        "Druga rzecz to serie robione wtedy, kiedy jest czas. Zupy, sosy, pasty, ciasto na pierogi, chleb, przetwory z lasu i ogrodu — wszystko w jednym naczyniu, jednego popołudnia, a odbierane przez kolejne tygodnie.",
        "Trzecia dotyczy dojazdów. W gminie tak rozległej dzieci często dojeżdżają do szkoły, a dorośli do pracy w Gorlicach. Przepis prowadzi krok po kroku, więc obiad może przygotować ten, kto wraca pierwszy — i to nie musi być dorosły.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Sękowa i gotowanie — kuchnia, która została po dwóch tradycjach",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Nie będę więc dopisywać Sękowej kulinarnego dorobku, którego nie umiem wskazać źródłem.",
      "To, co jest tu pewne, wynika z tego samego, co dwa wpisy UNESCO. W tej gminie stały obok siebie kościół katolicki i cerkiew łemkowska, a w domach gotowano na dwa sposoby. Po akcji „Wisła” jedna z tych tradycji w dużej mierze zniknęła razem z ludźmi, ale nie całkiem — w Owczarach cerkiew do dziś służy dwóm parafiom naraz.",
      "Kuchnia jest więc tutaj mieszana i górska zarazem: ziemniaki w kilkunastu postaciach, kapusta, fasola, kwaśne zupy na mące i zakwasie, ser, grzyby, mięso rzadko i długo duszone. Do tego to, co daje las — a lasu jest tu bardzo dużo, bo południowo-wschodni skrawek gminy leży w Magurskim Parku Narodowym.",
      "Ciekawostka o tutejszym rzemiośle: w Bartnem mieszkali kamieniarze, którzy wytwarzali żarna, płyty podłogowe i nagrobki. Żarna to sprzęt kuchenny — najstarszy młynek do mielenia, jaki człowiek wymyślił. To dość ładna klamra, jeśli pomyśleć, co robi dziś urządzenie stojące na blacie.",
      "Bo właśnie mielenie i rozdrabnianie jest tym, co maszyna przejmuje najpełniej — obok długiego duszenia w niskiej temperaturze, którego wymagają tutejsze zupy i mięsa. Czego nie zrobi, mówię wprost: nie znajdzie grzyba w lesie i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i siłą rąk.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Sękowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu, bez żadnej dopłaty za odległość. Gmina zajmuje blisko dwieście kilometrów kwadratowych i liczy niecałe pięć tysięcy mieszkańców — dwadzieścia pięć osób na kilometr kwadratowy.",
    "Sołectwa to: Bartne, Bodaki, Krzywa, Małastów, Męcina Mała, Męcina Wielka, Owczary, Ropica Górna, Sękowa, Siary i Wapienne. Uwaga na jedno: sołectwo Krzywa obejmuje aż cztery miejscowości — Czarne, Nieznajową, Radocynę i Wołowiec — z których trzy pierwsze są dziś praktycznie opuszczone.",
    "Dwa obiekty w tej gminie mają status światowego dziedzictwa. Drewniany kościół świętych Filipa i Jakuba w Sękowej wpisano na Listę UNESCO w dwa tysiące trzecim roku, a drewnianą cerkiew Opieki Bogurodzicy z tysiąc sześćset pięćdziesiątego trzeciego w Owczarach — w dwa tysiące trzynastym, w zupełnie innej grupie obiektów. Oba dostały wcześniej nagrody Europa Nostra za konserwację.",
    "W Siarach stoi pałac Władysława Długosza, naftowego przedsiębiorcy i senatora Drugiej Rzeczypospolitej, z przełomu dziewiętnastego i dwudziestego wieku, otoczony parkiem projektu Arnolda Röhringa. Nie zachęcam do wycieczki, bo dostępności obiektu do zwiedzania nie udało mi się potwierdzić.",
    "Wapienne to niewielkie uzdrowisko z dwoma ujęciami wód, nazwanymi Marta i Kamila; wieś założono w tysiąc pięćset czterdziestym szóstym roku, a właściwości lecznicze wód znane są od siedemnastego wieku. W tysiąc osiemset dwunastym leczyli się tu żołnierze Napoleona. Bywa nazywane najmniejszym uzdrowiskiem w Polsce, ale tego akurat nie zweryfikowałam.",
    "Dojazd: kolei w gminie nie ma. Prowadzi tędy droga wojewódzka z Tarnowa przez Gorlice do granicy słowackiej, przez Małastów, gdzie na przełęczy leży cmentarz wojenny. Przejście graniczne w Koniecznej należy już do sąsiedniej gminy Uście Gorlickie.",
  ],
  districts: [
    "Sękowa",
    "Siary",
    "Owczary",
    "Wapienne",
    "Bartne i Bodaki",
    "Małastów",
    "Męcina Mała i Wielka",
    "Ropica Górna i Krzywa",
  ],

  nearbyHeading: "Gorlice, Uście Gorlickie i Lipinki też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Gorlicami, gminą wiejską Gorlice, Uściem Gorlickim, Ropą i Lipinkami, a od południa ze Słowacją. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo dotyczy tego samego dziedzictwa: sąsiednie Uście Gorlickie ma dwie cerkwie z jednego wpisu UNESCO z dwa tysiące trzynastego roku. Tutaj są dwa różne wpisy — kościół z dwa tysiące trzeciego i cerkiew z dwa tysiące trzynastego.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Uście Gorlickie",
    "Ropa",
    "Lipinki",
    "Biecz",
    "Nowy Sącz",
  ],

  about: blokOMnie("do gminy Sękowa", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Bartnem albo Wołowcu. Dojedziesz tak daleko?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. To najdalsze części gminy, ale traktuję je dokładnie tak samo jak Sękową czy Siary. Przy umawianiu podaj nazwę miejscowości — gmina ma prawie dwieście kilometrów kwadratowych i chodzi wyłącznie o zaplanowanie trasy.",
    },
    ...faqWspolne("w gminie Sękowa"),
    {
      question: "Do sklepu mam kilkanaście kilometrów. Czy to coś zmienia?",
      answer:
        "Zmienia i akurat na korzyść. Kiedy kupuje się rzadziej i większymi partiami, opłaca się gotować z zapasem — a to jest właśnie ten tryb, w którym urządzenie daje najwięcej. Jedna duża porcja zupy, sos na kilka dni, pasty i ciasto zrobione jednego popołudnia w jednym naczyniu. Na prezentacji chętnie pokażę to na Waszych produktach.",
    },
  ],

  geo: { lat: 49.5624, lng: 21.277 },
};
