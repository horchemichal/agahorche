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
 * RESZEL — gmina miejsko-wiejska w powiecie kętrzyńskim.
 * MIASTO 4 006, GMINA 6 584 (GUS 31.12.2024) — liczba miasta
 * potwierdzona dwoma niezależnymi źródłami.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE 1337 r., na prawie chełmińskim.
 * ⚠ WYSTAWCY IMIENNIE NIE PODAJĘ — nie potwierdzono.
 * Biskupi warmińscy władali Reszlem od 1281 r.
 * PRZYNALEŻNOŚĆ: WARMIA, dominium biskupów warmińskich.
 * Powiat kętrzyński jest pograniczny, stąd częsta pomyłka
 * z Mazurami.
 *
 * ZAMEK: budowa 1350–1401, zainicjowana przez BISKUPA
 * WARMIŃSKIEGO JANA Z MIŚNI. Wcześniej, od poł. XIII w.,
 * stała tu warownia drewniano-ziemna zakonu.
 * ⚠ OBALONE: „zamek zbudowali Krzyżacy" — murowany zamek
 * gotycki postawili BISKUPI.
 * STAN NA 2026: ZAMEK DZIAŁA — mieści hotel, restaurację
 * i galerię sztuki, po restauracji z 2001 r.
 * ⚠ OBALONE: „zamek to ruina" i „zamek zamknięty".
 * ⚠ NIE PISZĘ, że galeria jest oddziałem Muzeum Warmii
 * i Mazur — nie potwierdzono. Piszę „działa galeria sztuki".
 * ZACHOWANE ELEMENTY ŚREDNIOWIECZNE: zachodnia część bramna,
 * mury północne, dwie wieże zewnętrzne oraz XV-wieczna wieża
 * dawnej wartowni.
 * KOŚCIÓŁ ŚW. PIOTRA I PAWŁA — gotycki, XIV w.
 * ZESPÓŁ POJEZUICKI — XVII w.; kolegium założone 1632 r.
 * KOŚCIÓŁ ŚW. JANA — XV–XVI w.; kościół i klasztor
 * KATARZYNEK — XV–XVI w.; RATUSZ klasycystyczny — XIX w.
 * RZEKA SAJNA.
 * DNI RESZLA 2026 — 10–12 LIPCA 2026 r., amfiteatr i Rynek;
 * w programie VI Warmiński Bieg Uliczny oraz KONKURS
 * KULINARNY Z DEGUSTACJĄ POTRAW REGIONALNYCH.
 * ŚWIĘTA LIPKA leży w gminie Reszel.
 * KAROL ZALEWSKI (ur. 1993) — medalista olimpijski,
 * lekkoatleta, pochodzi z Reszla.
 * RESZEL NALEŻY DO SIECI CITTASLOW. ROKU NIE PODAJĘ.
 * ⚠ „Reszelski Festiwal Piosenki" — NIE POTWIERDZONY
 * po 2016 r. NIE PISZĘ, że trwa.
 *
 * ⚠⚠ ZAKAZ BEZWZGLĘDNY: procesy o czary i egzekucja z 1811 r.
 * NIE PISZĘ O TYM ANI SŁOWA. Zakaz obejmuje też komercyjną
 * eksploatację tego wątku przez sam zamek: NIE WSPOMINAM
 * o lochach, narzędziach tortur ani o zajęciach „o legendach
 * o czarownicach". Bezpieczne są wyłącznie: architektura
 * gotycka, wieża, galeria, Szlak Zamków Gotyckich.
 *
 * KĄT: CIASTO FRANCUSKIE — trzecia i ostatnia strona
 * o ciastach w tym województwie, i jedyna, w której odpowiedź
 * brzmi „nie". Kąt od zamku budowanego pół wieku, warstwa
 * po warstwie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ciasta francuskiego w tym urządzeniu się nie zrobi
 *   i nie udaję inaczej,
 * — dlaczego: bo powstaje przez WIELOKROTNE WAŁKOWANIE
 *   I SKŁADANIE ciasta z warstwą tłuszczu w środku,
 *   a to jest praca płaska, na blacie, nie w naczyniu,
 * — że decyduje w nim jedna rzecz: ZIMNO. Tłuszcz musi
 *   zostać osobną warstwą; gdy się roztopi i wsiąknie,
 *   nie ma już francuskiego,
 * — że urządzenie nie tylko nie pomaga, ale wręcz przeszkadza,
 *   bo sama praca podnosi temperaturę masy,
 * — że jedyne, co realnie przejmuje, to zagniecenie ciasta
 *   podstawowego przed wałkowaniem,
 * — że to trzeci rodzaj ciasta, przy którym urządzenie
 *   zachowuje się inaczej — i że warto znać całą trójkę,
 * — i ODMOWA: nie podaję przepisu, proporcji ani liczby
 *   składań.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI, przepisu ani liczby składań.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ani wytwórni ciasta.
 * — ZERO tematu czarownic, lochów i tortur — patrz zakaz.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i wysiedleń.
 * — ZERO granicy z obwodem kaliningradzkim.
 * — NIE PISZĘ o dwóch znanych duchownych z Reszla — ich
 *   biografie prowadzą do sporów narodowościowych.
 *   Bezpieczny jest lekkoatleta.
 * — Świętą Lipkę wymieniam jako obiekt w gminie, bez
 *   elementów kultowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kruche ciasto"
 * (Braniewo) dotyczy ciasta, w którym urządzenie SZKODZI,
 * jeśli nie wiadomo, kiedy przestać. „Ciasto parzone"
 * (Lubawa) dotyczy ciasta, w którym urządzenie DAJE dużą
 * przewagę. Tutaj chodzi o ciasto, którego NIE ZROBI WCALE
 * — i te trzy strony celowo się do siebie odwołują.
 * „Ciasto drożdżowe" dotyczy wyrabiania i rozczynu.
 * „Sękacz" (Gołdap) dotyczy potrawy wymagającej ognia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ wystawcy praw miejskich z 1337 r.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PISZĘ, że galeria na zamku jest oddziałem muzeum.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow.
 * — NIE PISZĘ o Reszelskim Festiwalu Piosenki.
 * — NIE PODAJĘ numeru edycji Dni Reszla.
 * — NIE PRZYPISUJĘ Reszlowi produktu z Listy Produktów
 *   Tradycyjnych — „dzyndzałki" pochodzą z gminy Kętrzyn,
 *   a miodów z Barcji nie umiem umiejscowić dokładnie.
 * — NIE MYLĘ zamku w Reszlu z zamkiem biskupów warmińskich
 *   w Lidzbarku Warmińskim, który był ich główną rezydencją.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 4 006, gmina 6 584 mieszkańców,
 * — prawa miejskie z 1337 r. na prawie chełmińskim; biskupi
 *   warmińscy władali Reszlem od 1281 r.,
 * — zamek budowano w latach 1350–1401 z inicjatywy biskupa
 *   warmińskiego Jana z Miśni; dziś mieści hotel, restaurację
 *   i galerię sztuki,
 * — zachowały się m.in. zachodnia część bramna, mury północne
 *   i XV-wieczna wieża dawnej wartowni,
 * — gotycki kościół świętych Piotra i Pawła z XIV w.,
 * — zespół pojezuicki z XVII w.; kolegium założono w 1632 r.,
 * — kościół świętego Jana oraz kościół i klasztor katarzynek
 *   z XV–XVI w., klasycystyczny ratusz z XIX w.,
 * — przez miasto płynie Sajna,
 * — Dni Reszla przypadają na 10–12 lipca 2026 r.; w programie
 *   Warmiński Bieg Uliczny i konkurs kulinarny z degustacją
 *   potraw regionalnych,
 * — Święta Lipka leży w gminie Reszel,
 * — z Reszla pochodzi lekkoatleta Karol Zalewski,
 * — miasto należy do międzynarodowej sieci Cittaslow.
 */
export const RESZEL: CityContent = {
  slug: "reszel",
  h1: "Thermomix Reszel – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Reszel (Warmia) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Reszlu na Warmii: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Reszel — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Reszlu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Reszla z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Reszel i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy ciasta, trzy różne odpowiedzi. To jest ta, w której odpowiedź brzmi „nie”.",
  },

  sections: [
    {
      id: "ciasto-francuskie",
      heading: "Zamek budowany pół wieku — czyli o cieście francuskim",
      paragraphs: [
        "Zamek w Reszlu budowano od 1350 do 1401 roku, z inicjatywy biskupa warmińskiego Jana z Miśni. Prostuję od razu rzecz, którą powtarza sporo przewodników: to nie jest zamek krzyżacki. Krzyżacy mieli tu w połowie trzynastego wieku warownię drewniano-ziemną, ale murowaną budowlę gotycką postawili biskupi, którzy władali Reszlem od 1281 roku. To Warmia, choć powiat kętrzyński leży już na pograniczu i stąd bierze się częsta pomyłka z Mazurami. Zamek zresztą nie jest ruiną i nie stoi pusty — po restauracji z 2001 roku mieści hotel, restaurację i galerię sztuki.",
        "Pół wieku budowy, warstwa cegły po warstwie. To jest dobry pretekst, żeby napisać o cieście francuskim — trzecim i ostatnim cieście, o którym piszę w tym regionie, i jedynym, przy którym moja odpowiedź brzmi po prostu „nie”.",
        "Bo ciasta francuskiego w tym urządzeniu nie zrobicie. Nie da się i nie zamierzam udawać inaczej.",
        "Powód jest w samej metodzie. Ciasto francuskie powstaje przez wielokrotne wałkowanie i składanie: między warstwy ciasta wkłada się warstwę tłuszczu, wałkuje, składa, chłodzi i powtarza. Po kilku takich cyklach powstają setki cieniutkich warstw, które w piekarniku rozdzielają się parą — i stąd bierze się cała jego lekkość. To jest praca płaska, na blacie, wałkiem. W zamkniętym naczyniu nie ma dla niej miejsca.",
        "Decyduje przy tym jedna rzecz i jest nią zimno. Tłuszcz musi przez cały czas pozostać osobną warstwą. Kiedy się roztopi i wsiąknie w ciasto, warstwy przestają istnieć i zamiast francuskiego wychodzi coś twardego i tłustego. Dlatego między jednym a drugim wałkowaniem ciasto wraca do lodówki.",
        "I tu jest rzecz, która brzmi paradoksalnie, ale jest uczciwa: urządzenie nie tylko nie pomaga, ono wręcz przeszkadza. Sama praca noża i silnika ogrzewa masę, a ogrzanie to jedyna rzecz, której przy tym cieście chcecie uniknąć.",
        "Jedyne, co realnie przejmuje, to zagniecenie ciasta podstawowego — tego przed wałkowaniem, jeszcze bez warstw tłuszczu. To kilka minut roboty z kilkudziesięciu. Reszta zostaje przy Was, wałku i lodówce.",
        "Warto zapamiętać całą trójkę, bo razem mówią o tym urządzeniu więcej niż jakikolwiek folder. Ciasto parzone: pomaga bardzo, bo wymaga długiego mieszania na gorąco. Ciasto kruche: pomaga, ale łatwo zaszkodzi, bo pracuje zbyt dokładnie. Ciasto francuskie: nie pomaga wcale. Jeden sprzęt, trzy zupełnie różne odpowiedzi — i to jest właśnie sedno tego, jak o nim myśleć.",
        "I granica: nie podam Wam przepisu, proporcji ani liczby składań. Przy tym cieście liczby i temperatury decydują o wszystkim, a ja ich z zasady nie podaję — więc udawanie, że przeprowadzę Was przez to na stronie sprzedawcy, byłoby nieuczciwe.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Reszlu – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Reszlu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pieczecie regularnie — powiedzcie przy umawianiu, co konkretnie. Przy jednym cieście powiem, że urządzenie zrobi robotę za Was, przy innym, że lepiej zostać przy wałku. Wolę to niż jedną odpowiedź na wszystko.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Reszlu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla reszelskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad cztery tysiące mieszkańców, a cała gmina blisko sześć i pół tysiąca. Reszel leży na Warmii — biskupi warmińscy władali nim od 1281 roku, a prawa miejskie na prawie chełmińskim miasto dostało w 1337. Najważniejszy zabytek to zamek z lat 1350–1401, dziś działający jako hotel, restauracja i galeria sztuki. Obok stoją gotycki kościół świętych Piotra i Pawła z czternastego wieku, siedemnastowieczny zespół pojezuicki z kolegium założonym w 1632 roku, kościół świętego Jana oraz kościół i klasztor katarzynek z przełomu piętnastego i szesnastego wieku, a także klasycystyczny ratusz. Przez miasto płynie Sajna, a w granicach gminy leży Święta Lipka. Reszel należy do sieci Cittaslow; Dni Reszla wypadają w 2026 roku od 10 do 12 lipca i mają w programie konkurs kulinarny z degustacją potraw regionalnych.",
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

  districtsHeading: "Do których części gminy Reszel dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy, w tym do Świętej Lipki. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Reszel też przyjadę",
  nearbyParagraphs: [
    "Kętrzyn, Biskupiec, Mrągowo, Bisztynek, Jeziorany i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biskupiec", "Bisztynek", "Jeziorany", "Barczewo"],

  about: blokOMnie("do Reszla", "w Reszlu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Reszla bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy, łącznie ze Świętą Lipką, która leży w gminie Reszel. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Reszel leży na Warmii, w powiecie kętrzyńskim — a sąsiedni Biskupiec bywa nazywany Reszelskim, co potrafi mylić.",
    },
    ...faqWspolne("w Reszlu"),
    {
      question: "Czy zrobię w Thermomixie ciasto francuskie?",
      answer:
        "Nie i nie będę udawać inaczej. Ciasto francuskie powstaje przez wielokrotne wałkowanie i składanie z warstwą tłuszczu w środku — to praca płaska, na blacie, której w zamkniętym naczyniu nie da się wykonać. Urządzenie przejmie najwyżej zagniecenie ciasta podstawowego przed wałkowaniem.",
    },
    {
      question: "Dlaczego przy cieście francuskim urządzenie wręcz przeszkadza?",
      answer:
        "Bo decyduje tu zimno. Tłuszcz musi pozostać osobną warstwą; gdy się roztopi i wsiąknie, warstw już nie będzie. Praca noża i silnika ogrzewa masę, czyli robi dokładnie to, czego przy tym cieście trzeba unikać.",
    },
    {
      question: "To przy jakich ciastach Thermomix pomaga?",
      answer:
        "Warto znać całą trójkę. Ciasto parzone: pomaga bardzo, bo wymaga długiego mieszania na gorąco. Kruche: pomaga, ale łatwo zaszkodzi, bo pracuje zbyt dokładnie i za szybko. Francuskie: nie pomaga wcale. Jeden sprzęt, trzy różne odpowiedzi — przepisu ani proporcji przy żadnym z nich nie podaję.",
    },
  ],

  geo: { lat: 54.0498, lng: 21.1459 },
};
