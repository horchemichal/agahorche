import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * RYN — gmina miejsko-wiejska w powiecie giżyckim.
 * MIASTO 2 663, GMINA 5 329 (GUS 31.12.2024). 19 SOŁECTW.
 * Najmniejsze miasto tej fali.
 * ⚠ Wcześniejsza notatka projektowa podawała 3 000 dla
 * miasta — ZAWYŻONE.
 *
 * PRAWA MIEJSKIE 1723 r., nadane przez WŁADZE PRUSKIE.
 * ⚠ OBALONE: „prawa od Krzyżaków" — zamek krzyżacki owszem,
 * od XIV w., ale prawa miejskie prawie 350 lat później.
 * PRZYNALEŻNOŚĆ: MAZURY (Prusy Książęce → Królestwo Prus).
 * Ryn i Biała Piska dostały prawa w tej samej dekadzie
 * (1723 i 1722) i od tej samej władzy.
 *
 * ZAMEK: pierwsza wzmianka 1377 r. (kronika Wiganda
 * z Marburga), budowę zlecił wielki mistrz WINRICH VON
 * KNIPRODE; SIEDZIBA KOMTURSTWA OD 1393 r., pierwszym
 * komturem FRYDERYK VON WALLENROD; 1422 degradacja
 * do prokuratorii.
 * ⚠ OBALONE: „komturem był Konrad Wallenrod" — komturem był
 * jego BRAT Fryderyk. NIE POWTARZAM tego błędu.
 * ⚠ DOKŁADNEJ DATY BUDOWY NIE PODAJĘ — piszę „XIV w.".
 * STAN 2026: ZAMEK DZIAŁA JAKO HOTEL od lipca 2006 r.
 * ⚠ OBALONE: „zamek to ruina" i „zamek to muzeum".
 * Wcześniej: 1853 kupiony przez rejencję, po pożarze 1881
 * przebudowany w stylu neogotyckim.
 * ⚠ NIE PISZĘ o okresie więziennym zamku.
 *
 * PODZIEMNY MUROWANY KANAŁ łączący JEZIORA RYŃSKIE i OŁÓW —
 * ok. 170 M DŁUGOŚCI, wykorzystywał SIEDMIOMETROWĄ RÓŻNICĘ
 * POZIOMÓW do napędu młyna; istnieje do dziś. TO JEST
 * PODSTAWA KĄTA.
 * JEZIORO RYŃSKIE: 6,7 km², głębokość maks. 20,2 m, długość
 * 7,1 km; część Szlaku Wielkich Jezior Mazurskich, tworzy
 * jeden akwen z jeziorem Tałty.
 * CITTASLOW: uchwała Rady Miejskiej 15 MARCA 2012 r.,
 * certyfikat odebrany 21 PAŹDZIERNIKA 2012 r. w Novellarze.
 * DNI RYNU 2026: 16–19 LIPCA 2026 r.
 * ⚠ NUMERU EDYCJI NIE PODAJĘ.
 * FESTIWAL KULTURY ŚREDNIOWIECZA „MASURIA" — impreza
 * cykliczna. TERMINU NIE PODAJĘ.
 *
 * KĄT: WODA PO GOTOWANIU — czy wylewać. Kąt od podziemnego
 * kanału, który wykorzystywał różnicę poziomów między dwoma
 * jeziorami zamiast marnować ją bezużytecznie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że woda po gotowaniu to najczęściej wylewany składnik
 *   w polskiej kuchni i że część tych wylewek to strata,
 * — którą warto zachować: po ziemniakach (skrobia — świetna
 *   do zagęszczenia sosu i do ciasta na chleb), po makaronie
 *   (skrobia i sól — łączy sos z makaronem), po warzywach
 *   i po grzybach (gotowy wywar),
 * — którą trzeba wylać: po roślinach strączkowych, bo bywa
 *   gorzka i ciężkostrawna, oraz po wszystkim mocno
 *   posolonym, bo sól się w niej koncentruje,
 * — że woda po warzywach jest tym cenniejsza, im mniej jej
 *   było — i że stąd wynika praktyczna zasada gotowania
 *   w małej ilości wody,
 * — że w zamkniętym naczyniu ta woda i tak najczęściej
 *   zostaje w daniu, więc problem częściowo znika sam,
 * — że woda po makaronie jest jedyną, którą warto odlewać
 *   z premedytacją, do kubka, zanim się odcedzi,
 * — i ODMOWA: nie doradzam nic o przechowywaniu odlanej wody
 *   ani o twierdzeniach zdrowotnych na jej temat.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI ODŻYWCZYCH — zwłaszcza
 *   żadnych o „witaminach w wodzie po warzywach". ODMOWA
 *   STOI W TEKŚCIE.
 * — ŻADNYCH PORAD o przechowywaniu wywaru.
 * — ŻADNYCH NAZW FIRM ani nazwy hotelu na zamku.
 * — NIE POWTARZAM błędu o Konradzie Wallenrodzie.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta — tym bardziej
 *   że nie została potwierdzona.
 * — ZERO roku 1945 i wysiedleń ludności mazurskiej.
 * — ZERO okresu więziennego zamku.
 * — ZERO pokazu sprzętu wojskowego z programu Dni Rynu.
 * — ZERO plebiscytu 1920.
 * — O zakonie piszę wyłącznie w kontekście architektury,
 *   bez militariów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ile wody naprawdę
 * potrzeba" (Warta) dotyczy ilości wlewanej na starcie.
 * „Zagęszczanie" (Barczewo) dotyczy ratowania rzadkiego
 * dania. „Rosół i wywar" (Gniew) dotyczą wywaru robionego
 * celowo. „Obierki, skórki i łodygi" (Wieruszów) dotyczą
 * części warzyw. Tutaj chodzi o WODĘ, KTÓRA ZOSTAJE
 * PO GOTOWANIU i o to, co z nią zrobić.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnej daty budowy zamku.
 * — NIE PISZĘ, że komturem był Konrad Wallenrod.
 * — NIE PODAJĘ parametrów jeziora Ołów.
 * — NIE PODAJĘ numeru edycji Dni Rynu ani terminu festiwalu
 *   „Masuria".
 * — NIE PODAJĘ numeru wpisu zamku do rejestru zabytków.
 * — NIE PRZYPISUJĘ Rynowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Rynu z rynkiem ani z Rynie. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 663, gmina 5 329 mieszkańców, 19 sołectw,
 * — prawa miejskie z 1723 r. od władz pruskich; Ryn leży
 *   na Mazurach,
 * — zamek wzmiankowany w 1377 r., budowę zlecił wielki mistrz
 *   Winrich von Kniprode; od 1393 r. siedziba komturstwa,
 *   pierwszym komturem był Fryderyk von Wallenrod, brat
 *   późniejszego wielkiego mistrza; od lipca 2006 r. w zamku
 *   działa hotel,
 * — podziemny murowany kanał o długości około 170 m łączy
 *   jeziora Ryńskie i Ołów, wykorzystując siedmiometrową
 *   różnicę poziomów; napędzał kiedyś młyn,
 * — jezioro Ryńskie ma 6,7 km², do 20,2 m głębokości i 7,1 km
 *   długości; należy do Szlaku Wielkich Jezior Mazurskich,
 * — Ryn należy do sieci Cittaslow — uchwała z 15 marca
 *   2012 r., certyfikat odebrany 21 października 2012 r.,
 * — Dni Rynu przypadają w 2026 r. na 16–19 lipca; odbywa się
 *   tu też Festiwal Kultury Średniowiecza „Masuria”.
 */
export const RYN: CityContent = {
  slug: "ryn",
  h1: "Thermomix Ryn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ryn (Mazury, pow. giżycki) — przedstawiciel",
  seoDescription:
    "Thermomix w Rynie na Mazurach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ryn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rynu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Ryn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Woda po gotowaniu to najczęściej wylewany składnik w polskiej kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rynie – jak wygląda prezentacja?",
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
      id: "woda-po-gotowaniu",
      heading: "Podziemny kanał między dwoma jeziorami — czyli co zrobić z wodą po gotowaniu",
      paragraphs: [
        "W Rynie zachował się podziemny murowany kanał o długości około stu siedemdziesięciu metrów, łączący jeziora Ryńskie i Ołów. Zbudowano go po to, żeby wykorzystać siedmiometrową różnicę poziomów między nimi — spadek wody napędzał młyn. Ktoś zauważył, że coś, co i tak istnieje, może wykonać pracę, zamiast marnować się bez pożytku. Miasto ma prawa miejskie od 1723 roku, nadane przez władze pruskie; zamek jest znacznie starszy, wzmiankowany w 1377, i wbrew popularnej wersji jego pierwszym komturem był Fryderyk von Wallenrod, brat Konrada, a nie sam Konrad. Zamek nie jest zresztą ruiną — od 2006 roku działa w nim hotel.",
        "Kanał, który wykorzystuje to, co i tak jest, pasuje mi do najczęściej wylewanego składnika w polskiej kuchni: wody po gotowaniu.",
        "Bo to jest rzecz, którą robimy odruchowo. Ziemniaki gotowe — do zlewu. Makaron odcedzony — do zlewu. Warzywa ugotowane — do zlewu. A część tych wylewek to zwyczajna strata, i to nie z powodów, o których myślicie.",
        "Woda po ziemniakach jest gęsta od skrobi. Zagęszcza sos bez mąki i bez śmietany, a w cieście na chleb daje miękki, wilgotny miękisz. To jeden z tych domowych trików, które w piekarniach są oczywistością, a w domach prawie nie istnieją.",
        "Woda po makaronie to skrobia plus sól i jest jedyną z całej listy, którą warto odlać z premedytacją. Kubek zachowany zanim odcedzicie makaron, dolany potem do sosu, sprawia, że sos przestaje spływać z makaronu i zaczyna się go trzymać. To jest różnica, którą widać na talerzu od razu.",
        "Woda po warzywach i po grzybach to po prostu gotowy wywar. Nie trzeba go robić osobno — on już powstał, tylko zwykle ląduje w odpływie. Z wody po pieczarkach albo po suszonych grzybach da się zbudować całą zupę.",
        "Są też wody, które trzeba wylać i to bez żalu. Po roślinach strączkowych — bywa gorzka i ciężka. I po wszystkim mocno posolonym, bo sól się w niej koncentruje, a danie zrobione na takiej wodzie wyjdzie nie do uratowania.",
        "Z tego wynika zasada praktyczna, która jest zresztą dobra sama w sobie: im mniej wody użyjecie do gotowania warzyw, tym cenniejsza jest ta, która zostanie. Rozcieńczony wywar nie jest wart zachodu. A w tym urządzeniu problem częściowo znika sam, bo przy zamkniętym naczyniu woda i tak najczęściej zostaje w daniu — nie ma czego odlewać, bo wszystko jest już w środku.",
        "I granica: nie doradzę Wam, jak długo można trzymać odlaną wodę ani w czym. To pytanie o bezpieczeństwo żywności, nie o technikę. Nie napiszę też ani słowa o tym, co się w tej wodzie rzekomo znajduje i czy to zdrowe — mówię wyłącznie o skrobi, soli i o tym, jak to działa w sosie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć różnicę na czymś zwyczajnym — powiedzcie przy umawianiu. Sos dolany wodą po makaronie i ten sam sos bez niej to najprostszy pokaz, jaki znam, i nie wymaga żadnego sprzętu, żeby go zrozumieć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ryńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwa i pół tysiąca mieszkańców, a cała gmina ponad pięć, w dziewiętnastu sołectwach — to najmniejsze miasto w tej części Mazur. Prawa miejskie Ryn dostał w 1723 roku od władz pruskich, choć zamek wzmiankowany jest już w 1377; od 1393 roku była tu siedziba komturstwa, a pierwszym komturem został Fryderyk von Wallenrod. Dziś w zamku działa hotel. Miasto leży nad jeziorem Ryńskim, które ma sześć i siedem dziesiątych kilometra kwadratowego, ponad dwadzieścia metrów głębokości i należy do Szlaku Wielkich Jezior Mazurskich. Zachował się tu też podziemny murowany kanał łączący jeziora Ryńskie i Ołów, który wykorzystywał siedmiometrową różnicę poziomów do napędu młyna. Ryn należy do sieci Cittaslow od 2012 roku, a Dni Rynu przypadają w 2026 na połowę lipca.",
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

  districtsHeading: "Do których części gminy Ryn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewiętnastu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Ryn też przyjadę",
  nearbyParagraphs: [
    "Giżycko, Mikołajki, Mrągowo, Węgorzewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Giżycko", "Mrągowo", "Węgorzewo", "Ruciane-Nida"],

  about: blokOMnie("do Rynu", "w Rynie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Rynu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewiętnastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo krótka nazwa myli wyszukiwarki: chodzi o miasto Ryn w powiecie giżyckim, na Mazurach — nie o rynek i nie o wieś Rynie.",
    },
    ...faqWspolne("w Rynie"),
    {
      question: "Której wody po gotowaniu nie wylewać?",
      answer:
        "Po ziemniakach — jest gęsta od skrobi, zagęszcza sos bez mąki i daje miękki miękisz w chlebie. Po makaronie — skrobia z solą sprawia, że sos trzyma się makaronu zamiast z niego spływać. I po warzywach oraz grzybach, bo to po prostu gotowy wywar.",
    },
    {
      question: "A którą trzeba wylać?",
      answer:
        "Po roślinach strączkowych, bo bywa gorzka i ciężka, oraz po wszystkim mocno posolonym — sól się w niej koncentruje i danie zrobione na takiej wodzie wyjdzie nie do uratowania.",
    },
    {
      question: "Czy w Thermomixie też trzeba o tym pamiętać?",
      answer:
        "W mniejszym stopniu, bo przy zamkniętym naczyniu woda najczęściej i tak zostaje w daniu — nie ma czego odlewać. Warto natomiast pamiętać, że im mniej wody użyjecie, tym cenniejsza jest ta, która zostanie. Ile taka woda może stać i co się w niej rzekomo znajduje — tego nie rozstrzygam.",
    },
  ],

  geo: { lat: 53.9381, lng: 21.5463 },
};
