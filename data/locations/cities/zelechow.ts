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
 * ŻELECHÓW — powiat garwoliński, woj. mazowieckie.
 * MIASTO 3 704 (GUS 31.12.2024), 12,1 km², 305,4 os./km².
 * Gmina miejsko-wiejska: 7 756 osób, 87,5 km², 18 sołectw.
 * ⚠⚠ URZĄD MIEJSKI PODAJE 8 572 (gmina) i 4 148 (miasto),
 *   ALE SĄ TO DANE MELDUNKOWE NA 31.12.2014, SPRZED DEKADY.
 *   NIE UŻYWAĆ. Obowiązuje GUS 31.12.2024. TWARDA GRANICA.
 *
 * ⚠⚠ HOMONIMY — WYJĄTKOWO GĘSTO:
 * — ŻELECHOWA to OSIEDLE SZCZECINA (rodzaj żeński, inna
 *   odmiana) — bardzo łatwo trafić w wyszukiwarce,
 * — TRZY WSIE ŻELECHÓW w samym mazowieckiem: w gminie
 *   TARCZYN (⚠ opisuję Tarczyn w tej samej fali!),
 *   w gminie Żabia Wola i w gminie Chynów,
 * — wieś ŻELECHÓW w gminie Łagów, woj. lubuskie.
 *   ⚠ FAQ MUSI ROZRÓŻNIAĆ. TWARDA GRANICA.
 * Odmiana: „do Żelechowa", „w Żelechowie", „żelechowski".
 *
 * HISTORIA — PRZYWILEJE Z DNIAMI TYGODNIA:
 * — 1282 pierwsza wzmianka,
 * — 1447 — Kazimierz Jagiellończyk nadaje prawa miejskie,
 *   cotygodniowe targi we WTOREK i jarmark na św. Stanisława;
 *   kupcy zwolnieni z ceł w całym królestwie,
 * — 1516 — Zygmunt Stary przenosi targi na PONIEDZIAŁKI,
 * — 1556 — Zygmunt August wprowadza targi we WTORKI I PIĄTKI,
 * — 1703 — August II zwiększa liczbę jarmarków do sześciu,
 * — 1761 — August III podnosi do ośmiu.
 *   ⚠ KĄT „PONIEDZIAŁEK" WŁAŚNIE ZAJĘŁAM (bialobrzegi.ts),
 *   a „PLANOWANIE TYGODNIA" jest zajęte (ostrow-wielkopolski).
 *   DNI TARGOWE PODAJĘ WYŁĄCZNIE JAKO FAKT. TWARDA GRANICA.
 *
 * RZEMIOSŁO — PODSTAWA KĄTA:
 * — hodowla bydła i owiec dała rozwój obróbki skór:
 *   GARBARSTWA, KUŚNIERSTWA, RYMARSTWA I SZEWSTWA,
 * — ⚠⚠ 1788 — POWSTAJE CECH SZEWCÓW,
 * — 1823 — udokumentowana działalność CECHU STOLARSKIEGO;
 *   stolarze wykonywali m.in. ołtarze do kościoła,
 * — lata 20. XX w. — Żelechów słynie z obuwia i otrzymuje
 *   zamówienia zagraniczne,
 * — DZIŚ w mieście nadal działają zakłady obuwnicze.
 *   ⚠ KĄT „KOŻUCH" (garwolin.ts) I „MIASTO KRAWCÓW"
 *   (brzeziny.ts) SĄ ZAJĘTE. NIE PISZĘ O SKÓRACH
 *   ANI O SZYCIU NA MIARĘ.
 *
 * RYNEK — DRUGI FILAR FAKTOGRAFII:
 * — Nowy Rynek wytyczony 1792–1795 przez Ignacego Wyssogotę
 *   Zakrzewskiego, właściciela Żelechowa i PIERWSZEGO
 *   PREZYDENTA WARSZAWY,
 * — RYNEK TO KWADRAT O BOKU 114 METRÓW — jeden
 *   z największych w Europie,
 * — RATUSZ w środku rynku: kwadrat o boku 27 METRÓW,
 *   wpis do rejestru zabytków 1955,
 * — 1913 — pozwolenie na budowę około pięćdziesięciu kramów
 *   wokół ratusza,
 * — rynek z przyległymi kwartałami wpisany do rejestru 1998,
 * — zespół pałacowo-parkowy 1762–1794 (fundacja Jerzego
 *   Ignacego Lubomirskiego), park krajobrazowy,
 * — zespół folwarczny: osiem murowanych budynków z końca
 *   XIX w., w tym spichrze,
 * — dwie huty szkła w okolicy: 1811 i 1827, obie zakończyły
 *   działalność około 1850 r. z powodu wyczerpania drewna.
 *
 * ROLNICTWO: 1 790 gospodarstw indywidualnych, w tym 328
 * w samym mieście; średnia wielkość 4,4 ha; gleby przeważnie
 * słabe. W powiecie garwolińskim 63% powierzchni to użytki
 * rolne; główne uprawy zboża i ziemniaki.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK wpisu z gminy
 *   Żelechów. ⚠ PUŁAPKA: „kiełbasa ojcowa z Sobień Jezior"
 *   (12.06.2007) pochodzi z powiatu OTWOCKIEGO, nie
 *   garwolińskiego. ⚠ DRUGA: twarogi OSM Garwolin mają znak
 *   „Jakość Tradycja", a TO NIE JEST Lista Produktów
 *   Tradycyjnych — to inny rejestr. NIE MYLĘ ICH
 *   I NIE WYMIENIAM ŻADNEGO. TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: FORMA — dlaczego to samo ciasto w innym naczyniu
 * wychodzi inaczej.
 * Kąt od szewskiego kopyta: cech szewców powstał w Żelechowie
 * w 1788 r., a buty szyje się tu do dziś. Kopyto to forma,
 * na której buduje się but — i cała rzecz polega na tym,
 * że kształt formy przesądza o wyniku, zanim zacznie się
 * praca.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Żelechów jest miastem szewskim — cech od 1788 r.,
 *   zakłady obuwnicze do dziś — i że narzędziem, bez którego
 *   nie ma buta, jest KOPYTO, czyli forma,
 * — ŻE W KUCHNI DZIAŁA TO TAK SAMO, a prawie nikt się
 *   nad tym nie zastanawia: to samo ciasto w innej formie
 *   to inne ciasto,
 * — ⚠⚠ ŻE DECYDUJE GŁĘBOKOŚĆ, NIE ŚREDNICA. Ta sama masa
 *   rozlana szeroko i płytko upiecze się szybciej i będzie
 *   bardziej sucha; wlana w wąską i wysoką formę będzie
 *   piekła się długo, a środek zostanie wilgotny.
 *   TO JEST NAJUŻYTECZNIEJSZA RZECZ W CAŁYM TEKŚCIE,
 * — ŻE STĄD BIERZE SIĘ NAJCZĘŚTSZA PORAŻKA: ktoś piecze
 *   według przepisu, ale w innej formie, i dziwi się,
 *   że „przepis jest zły",
 * — ŻE FORMA Z KOMINEM ISTNIEJE Z POWODU, KTÓRY MAŁO KTO
 *   ZNA: komin doprowadza ciepło do środka, więc gęste
 *   ciasto piecze się równo,
 * — ŻE KOLOR I GRUBOŚĆ ŚCIANKI TEŻ ZMIENIAJĄ WYNIK —
 *   ciemna i cienka forma daje mocniejsze brzegi,
 *   jasna i gruba łagodniejsze
 *   ⚠ ODSYŁAM DO STRONY O NACZYNIACH DO PIECZENIA,
 *   NIE ROZWIJAM MATERIAŁU,
 * — ŻE FORMY NIE NAPEŁNIA SIĘ PO BRZEGI — ciasto rośnie
 *   i to jest jedyny moment, w którym decyzja jest
 *   nieodwracalna,
 * — ŻE JEDNA DOBRA FORMA JEST WARTA WIĘCEJ NIŻ PIĘĆ
 *   PRZYPADKOWYCH, bo do niej dopasowuje się przepisy,
 *   a nie odwrotnie,
 * — ⚠⚠ UCZCIWIE O SPRZĘCIE: THERMOMIX NIE PIECZE.
 *   Robi ciasto, ale piecze piekarnik — i to piekarnik
 *   oraz forma decydują o tym, co wyjdzie. Kupowanie tego
 *   urządzenia z myślą o wypiekach bez zrozumienia tej
 *   granicy kończy się rozczarowaniem. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR PIECZENIA.
 * — ŻADNYCH PRZEPISÓW I PROPORCJI.
 * — ŻADNYCH PRZELICZNIKÓW MIĘDZY FORMAMI — to wymaga
 *   liczenia objętości i zależy od ciasta; NIE PODAJĘ
 *   ŻADNYCH LICZB. TWARDA GRANICA.
 * — ŻADNYCH PORAD O POWŁOKACH NIEPRZYWIERAJĄCYCH
 *   I O BEZPIECZEŃSTWIE NACZYŃ.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO tematów wojennych i wyznaniowych.
 * — ZERO bezrobocia, słabych gleb jako problemu
 *   i wyludniania.
 * — ZERO nazw i profili obecnych zakładów przemysłowych
 *   poza ogólnym „zakłady obuwnicze".
 * — ZERO wątku upadku hut szkła jako katastrofy — podaję
 *   jako suchy fakt o wyczerpaniu drewna.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „NACZYNIA DO PIECZENIA — GLINA, SZKŁO, METAL"
 *   (Czarna Białostocka) dotyczy MATERIAŁU. TUTAJ chodzi
 *   o KSZTAŁT I GŁĘBOKOŚĆ. To jest inna oś tego samego
 *   przedmiotu i strony wprost się do siebie odsyłają.
 * — „DNO NACZYNIA" (Dobre Miasto) dotyczy PRZYWIERANIA.
 * — „GARNKI I NACZYNIA ODZIEDZICZONE" (Krośniewice)
 *   dotyczy TEGO, CO ZOSTAJE PO KIMŚ.
 * — „SKALA I POJEMNOŚĆ" (Gniezno) dotyczy ILOŚCI.
 * — „CIASTO DROŻDŻOWE" (Wołczyn) dotyczy WYRASTANIA.
 * — „MIASTO KRAWCÓW" (Brzeziny) dotyczy SZYCIA NA MIARĘ.
 * — „KOŻUCH" (Garwolin) dotyczy SKÓR.
 * TUTAJ chodzi o KSZTAŁT FORMY i o to, że przesądza
 * on o wyniku, zanim cokolwiek trafi do piekarnika.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE UŻYWAM liczby ludności ze strony urzędu.
 * — NIE MYLĘ Żelechowa z Żelechową w Szczecinie ani
 *   ze wsiami Żelechów, w tym tą w gminie Tarczyn.
 * — NIE PODAJĘ przeliczników między formami.
 * — NIE WYMIENIAM produktu tradycyjnego ani znaku
 *   „Jakość Tradycja".
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Żelechów liczy 3 704 mieszkańców (GUS, 31.12.2024)
 *   na 12,1 km², a cała gmina miejsko-wiejska 7 756 osób
 *   na 87,5 km² i dzieli się na osiemnaście sołectw,
 * — pierwsza wzmianka pochodzi z 1282 roku; w 1447 roku
 *   Kazimierz Jagiellończyk nadał miastu prawa miejskie,
 *   cotygodniowe targi we wtorek i jarmark na świętego
 *   Stanisława, zwalniając tutejszych kupców z ceł w całym
 *   królestwie; w 1516 roku Zygmunt Stary przeniósł targi
 *   na poniedziałki, w 1556 Zygmunt August wprowadził
 *   wtorki i piątki, w 1703 August II zwiększył liczbę
 *   jarmarków do sześciu, a w 1761 August III do ośmiu,
 * — hodowla bydła i owiec dała tu rozwój obróbki skór:
 *   garbarstwa, kuśnierstwa, rymarstwa i szewstwa;
 *   w 1788 roku powstał cech szewców, w 1823 udokumentowano
 *   cech stolarski, a w latach dwudziestych XX wieku
 *   Żelechów słynął z obuwia i otrzymywał zamówienia
 *   zagraniczne — zakłady obuwnicze działają w mieście
 *   do dziś,
 * — Nowy Rynek wytyczył w latach 1792–1795 Ignacy Wyssogota
 *   Zakrzewski, właściciel Żelechowa i pierwszy prezydent
 *   Warszawy; rynek jest kwadratem o boku stu czternastu
 *   metrów, jednym z największych w Europie, a stojący
 *   w jego środku ratusz ma plan kwadratu o boku
 *   dwudziestu siedmiu metrów i od 1955 roku figuruje
 *   w rejestrze zabytków; w 1913 roku wydano pozwolenie
 *   na budowę około pięćdziesięciu kramów wokół ratusza,
 *   a w 1998 roku do rejestru wpisano rynek z przyległymi
 *   kwartałami zabudowy,
 * — w mieście zachował się zespół pałacowo-parkowy z lat
 *   1762–1794 z parkiem krajobrazowym oraz zespół folwarczny
 *   złożony z ośmiu murowanych budynków z końca XIX wieku,
 *   w tym spichrzów; w okolicy działały dwie huty szkła,
 *   założone w 1811 i 1827 roku, które zakończyły pracę
 *   około 1850 roku, gdy wyczerpały się zasoby drewna,
 * — w gminie jest tysiąc siedemset dziewięćdziesiąt
 *   gospodarstw indywidualnych, z czego trzysta dwadzieścia
 *   osiem w samym mieście, a ich średnia wielkość to
 *   4,4 hektara.
 */
export const ZELECHOW: CityContent = {
  slug: "zelechow",
  h1: "Thermomix Żelechów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żelechów — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Żelechowie w powiecie garwolińskim: bezpłatna prezentacja TM7 u Ciebie w domu. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żelechów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żelechowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żelechowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Żelechów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To samo ciasto w innej formie to inne ciasto. Decyduje głębokość.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żelechowie – jak wygląda prezentacja?",
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
      id: "forma",
      heading: "Kopyto i forma — czyli dlaczego to samo ciasto wychodzi inaczej",
      paragraphs: [
        "Żelechów jest miastem szewskim. Hodowla bydła i owiec dała tu rozwój obróbki skór, w 1788 roku powstał cech szewców, w latach dwudziestych XX wieku miasto słynęło z obuwia i przyjmowało zamówienia zagraniczne, a zakłady obuwnicze działają tu do dziś.",
        "Narzędziem, bez którego nie ma buta, jest kopyto. Kopyto to forma — bryła, na której but się buduje. Od niej zależy kształt, dopasowanie i to, czy noga będzie się w środku dobrze czuła. Szewc nie zaczyna od skóry, tylko od wyboru kopyta.",
        "W kuchni działa to dokładnie tak samo, tylko prawie nikt się nad tym nie zastanawia. To samo ciasto w innej formie to inne ciasto.",
        "I rzecz najważniejsza: decyduje głębokość, nie średnica. Ta sama masa rozlana szeroko i płytko upiecze się szybciej, będzie bardziej sucha i będzie miała więcej brzegów. Ta sama masa wlana w formę wąską i wysoką będzie się piekła znacznie dłużej, a środek ma prawo zostać wilgotny, choć wierzch wygląda na gotowy.",
        "Stąd bierze się jedna z najczęstszych porażek przy pieczeniu. Ktoś piecze dokładnie według przepisu, ale w formie, którą akurat ma — i wyciąga coś zupełnie innego, niż na zdjęciu. Wniosek zwykle brzmi „przepis jest zły”, a winne było naczynie. Przepisy są pisane pod konkretną formę, tylko rzadko to piszą.",
        "Przy okazji wyjaśnia się rzecz, o którą nikt nie pyta: po co formie komin. Komin nie jest ozdobą ani modą z lat siedemdziesiątych. On doprowadza ciepło do środka masy, dzięki czemu gęste, ciężkie ciasto piecze się równo, zamiast być spalone przy ściance i surowe w rdzeniu.",
        "Znaczenie ma też kolor i grubość ścianki — ciemna i cienka forma daje mocniejsze, bardziej rumiane brzegi, jasna i gruba łagodniejsze. O samych materiałach form pisałam osobno i tu nie będę powtarzać.",
        "I jedna rzecz praktyczna, przy której decyzja jest nieodwracalna: formy nie napełnia się po brzegi. Ciasto rośnie, a nadmiar nie ma dokąd pójść. To jedyny moment całego pieczenia, którego nie da się później naprawić.",
        "Wniosek z tego wszystkiego jest taki, że jedna dobra forma jest warta więcej niż pięć przypadkowych. Do jednej, dobrze znanej, dopasowuje się przepisy — a nie odwrotnie.",
        "Teraz uczciwie o sprzęcie i to jest zdanie, które wolę powiedzieć przed zakupem, a nie po. Thermomix nie piecze.",
        "Robi ciasto — wyrabia, ubija, miesza, odmierza — i robi to dobrze, oszczędzając sporo ręcznej roboty. Ale piecze piekarnik, a o wyniku decydują piekarnik i forma. Jeśli ktoś kupuje to urządzenie z myślą wyłącznie o wypiekach, spodziewając się, że ciasta zaczną wychodzić same, będzie rozczarowany. Ta granica jest ostra i nie ma sensu jej zamazywać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żelechowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczesz i chcesz wiedzieć, którą część roboty to urządzenie realnie zdejmuje z rąk, a której nie — powiedz to przy umawianiu. Pokażę dokładnie ten podział.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żelechowie"),
    sekcjaRaty("w Żelechowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla żelechowskiej rodziny",
      paragraphs: [
        "Żelechów liczy ponad trzy i pół tysiąca mieszkańców na dwunastu kilometrach kwadratowych, a cała gmina miejsko-wiejska blisko osiem tysięcy osób na osiemdziesięciu siedmiu kilometrach i dzieli się na osiemnaście sołectw. Pierwsza wzmianka pochodzi z 1282 roku. W 1447 roku Kazimierz Jagiellończyk nadał miastu prawa miejskie, cotygodniowe targi we wtorek i jarmark na świętego Stanisława, zwalniając tutejszych kupców z ceł w całym królestwie; w 1516 roku Zygmunt Stary przeniósł targi na poniedziałki, w 1556 Zygmunt August wprowadził wtorki i piątki, w 1703 August II zwiększył liczbę jarmarków do sześciu, a w 1761 August III do ośmiu. Hodowla bydła i owiec dała tu rozwój obróbki skór — garbarstwa, kuśnierstwa, rymarstwa i szewstwa; w 1788 roku powstał cech szewców, w 1823 udokumentowano cech stolarski, a w latach dwudziestych XX wieku miasto słynęło z obuwia. Nowy Rynek wytyczył w latach 1792–1795 Ignacy Wyssogota Zakrzewski, właściciel Żelechowa i pierwszy prezydent Warszawy — jest kwadratem o boku stu czternastu metrów, jednym z największych w Europie, a stojący w jego środku ratusz ma plan kwadratu o boku dwudziestu siedmiu metrów i od 1955 roku figuruje w rejestrze zabytków. W 1913 roku wydano pozwolenie na budowę około pięćdziesięciu kramów wokół ratusza, a w 1998 roku do rejestru wpisano rynek z przyległymi kwartałami zabudowy. Zachował się też zespół pałacowo-parkowy z lat 1762–1794 z parkiem krajobrazowym oraz zespół folwarczny złożony z ośmiu murowanych budynków z końca XIX wieku, w tym spichrzów. W okolicy działały dwie huty szkła, założone w 1811 i 1827 roku, które zakończyły pracę około 1850 roku, gdy wyczerpały się zasoby drewna. W gminie jest tysiąc siedemset dziewięćdziesiąt gospodarstw indywidualnych, z czego trzysta dwadzieścia osiem w samym mieście, o średniej wielkości czterech i pół hektara.",
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

  districtsHeading: "Do których części Żelechowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od wielkiego rynku z ratuszem po domy przy wylotach dróg i okolice parku. Dojeżdżam też do wsi w gminie, w tym do Woli Żelechowskiej, Sokolnik i Huty Żelechowskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Żelechów też przyjadę",
  nearbyParagraphs: [
    "Garwolin, Łaskarzew, Stoczek Łukowski, Sobolew, Trojanów, Ryki i Adamów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Garwolin", "Stoczek Łukowski", "Łaskarzew", "Ryki"],

  about: blokOMnie("do Żelechowa", "w Żelechowie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żelechowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto Żelechów w powiecie garwolińskim — nie o Żelechową w Szczecinie ani o wsie Żelechów w gminach Tarczyn, Żabia Wola i Chynów.",
    },
    ...faqWspolne("w Żelechowie"),
    {
      question: "Dlaczego to samo ciasto wychodzi różnie w różnych formach?",
      answer:
        "Bo decyduje głębokość, nie średnica. Ta sama masa rozlana szeroko i płytko upiecze się szybciej i będzie bardziej sucha; w formie wąskiej i wysokiej będzie się piekła znacznie dłużej, a środek ma prawo zostać wilgotny. Przepisy są pisane pod konkretną formę, tylko rzadko to piszą — stąd wniosek „przepis jest zły”, gdy winne było naczynie.",
    },
    {
      question: "Czy Thermomix piecze ciasta?",
      answer:
        "Nie. Robi ciasto — wyrabia, ubija, miesza i odmierza, oszczędzając sporo ręcznej roboty — ale piecze piekarnik, a o wyniku decydują piekarnik i forma. Jeśli ktoś kupuje urządzenie wyłącznie z myślą o wypiekach, spodziewając się, że ciasta zaczną wychodzić same, będzie rozczarowany. Wolę to powiedzieć przed zakupem niż po.",
    },
  ],

  geo: { lat: 51.8105, lng: 21.8974 },
};
