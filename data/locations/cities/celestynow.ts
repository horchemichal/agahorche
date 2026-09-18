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
 * CELESTYNÓW — powiat otwocki, woj. mazowieckie.
 *
 * ⚠⚠⚠ NAJWAŻNIEJSZA RZECZ NA TEJ STRONIE:
 *   CELESTYNÓW NIE JEST MIASTEM. To WIEŚ — siedziba GMINY
 *   WIEJSKIEJ Celestynów. NIGDY nie miał praw miejskich.
 *   ⚠ PUŁAPKA: serwis PTTK ma tę stronę pod adresem
 *   zawierającym słowo „miasto", ale w treści prostuje,
 *   że to wieś. ADRES KŁAMIE, TREŚĆ PROSTUJE.
 *   ⚠⚠ NIE WOLNO NAPISAĆ: „miasto Celestynów",
 *   „mieszkańcy miasta", „rynek", „ratusz", „prawa miejskie".
 *   POPRAWNIE: wieś Celestynów, miejscowość, siedziba gminy.
 *   TWARDA GRANICA — SPRAWDZIĆ KAŻDE ZDANIE.
 *
 * LUDNOŚĆ:
 * — WIEŚ CELESTYNÓW: 4 786 osób, ale to NARODOWY SPIS
 *   POWSZECHNY 2021, nie 31.12.2024 — ⚠ GUS nie publikuje
 *   corocznych danych dla pojedynczych wsi. Kontrola drugim
 *   źródłem: ok. 4 781 (2023) — zbieżne.
 *   ⚠ W TEKŚCIE PISZĘ „blisko pięć tysięcy", BEZ DATY
 *   I BEZ UDAWANIA, ŻE TO DANE ROCZNE.
 * — GMINA CELESTYNÓW: 11 630 osób (GUS 31.12.2024),
 *   88,9 km², 131 os./km².
 * ⚠ CIEKAWE: strona gminy podaje „ponad 11 000" i 89 km² —
 *   TU STRONA GMINY JEST ZGODNA Z GUS, nie zawyża.
 *   Odnotowuję to, bo to wyjątek w całej serii.
 * ⚠ Wieś urosła o 19,4% w latach 1998–2021 — DOBRY FAKT.
 *
 * ⚠ HOMONIM: CELESTYNÓW istnieje też w woj. wielkopolskim.
 *   Jest też miejscowość CELESTYNY. FAQ TO ROZRÓŻNIA.
 * Odmiana: „do Celestynowa", „w Celestynowie",
 *   „celestynowski" (urzędowo: rezerwat Celestynowski Grąd).
 *   ⚠ NAZWY MIESZKAŃCA NIE POTWIERDZONO — NIE UŻYWAM JEJ.
 *
 * HISTORIA — MATERIAŁ UBOGI, ALE UCZCIWY:
 * — 1833 — Leopold Radziński kupuje dobra zapisane
 *   jako „Radzin",
 * — dwór wznoszono w latach 1872–1875 — najstarszy budynek
 *   we wsi,
 * — ⚠⚠ PODSTAWA KĄTA: przy dobrach działała CEGIELNIA,
 *   po której zachowały się PIECE I DOŁY PO WYDOBYCIU GLINY,
 * — nazwa: od karczmarza imieniem Celestyn albo
 *   od Celestyny Polakiewiczówny, córki właściciela majątku.
 *   ⚠ PODAJĘ OBIE WERSJE, NIE ROZSTRZYGAM,
 * — 1877 — otwarcie Kolei Nadwiślańskiej; STACJĘ URUCHOMIONO
 *   W 1900 R., GDY STAŁO TU ZALEDWIE OSIEM DOMÓW.
 *   To kolej zrobiła z Celestynowa miejscowość,
 * — zachował się DREWNIANY DWORZEC Z 1900 R. — jeden
 *   z nielicznych w kraju w pierwotnej formie,
 * — po I wojnie miejscowość nabrała charakteru letniskowego.
 *   ⚠⚠ ŹRÓDŁO ŁĄCZY TO Z „LECZNICZYMI WŁAŚCIWOŚCIAMI"
 *   LASÓW — NIE PISZĘ O LECZENIU ANI SŁOWA. ZERO TREŚCI
 *   ZDROWOTNYCH. Piszę „letniska" i „sosnowe powietrze",
 *   bez żadnych twierdzeń. TWARDA GRANICA.
 * ⚠ NIE POTWIERDZONO: cechów, młynów, olejarni, przywilejów
 *   targowych — i NIE MOGŁO ICH BYĆ, bo to osada kolejowa
 *   z przełomu XIX i XX w. NIE ZMYŚLAM ICH.
 *
 * DZIŚ: lesistość 56% powierzchni gminy, w tym ponad 86%
 * to bory sosnowe; niemal cała gmina leży w Mazowieckim
 * Parku Krajobrazowym. Nadleśnictwo Celestynów obejmuje
 * 8 936 ha i od 2005 r. należy do Leśnego Kompleksu
 * Promocyjnego „Lasy Warszawskie". W gminie wytyczono
 * 77 km szlaków konnych. Gleby piaszczyste, rolnictwo
 * marginalne. Około 40 km od centrum Warszawy, na linii
 * kolejowej do Otwocka i Dęblina.
 * Bagno Całowanie — około 1 200 ha torfowiska niskiego.
 * ⚠ NIE POTWIERDZONO, by w gminie wydobywano torf na opał —
 *   NIE PISZĘ O TYM.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: nie znaleziono produktu
 *   z gminy Celestynów. NIE WYMIENIAM ŻADNEGO.
 * ⚠ SOŁECTW NIE POTWIERDZONO STATUTEM (15 vs 17) —
 *   wymieniam tylko te, które są pewne jako miejscowości.
 *   districts PUSTE.
 *
 * KĄT: BEZWŁADNOŚĆ CIEPLNA — dlaczego ciężkie naczynie
 * zachowuje się inaczej niż cienkie.
 * Kąt od celestynowskiej cegielni, po której zostały piece
 * i doły po glinie. Piec ceglany jest urządzeniem, które
 * z założenia trzyma ciepło i oddaje je powoli — a w kuchni
 * ta sama właściwość naczynia decyduje o wyniku częściej,
 * niż ktokolwiek przypuszcza.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy dawnych dobrach działała tu cegielnia i że
 *   zostały po niej piece oraz doły po wydobyciu gliny,
 * — ŻE PIEC CEGLANY MA JEDNĄ CECHĘ, KTÓRA PRZENOSI SIĘ
 *   WPROST DO KUCHNI: jest ciężki, więc długo się nagrzewa
 *   i długo oddaje ciepło,
 * — ⚠⚠ ŻE TO SAMO DOTYCZY NACZYŃ, I ŻE JEST TO NAJCZĘŚCIEJ
 *   POMIJANY POWÓD, DLA KTÓREGO TO SAMO DANIE WYCHODZI RAZ
 *   TAK, A RAZ INACZEJ. TO JEST RDZEŃ TEKSTU,
 * — CO SIĘ DZIEJE W PRAKTYCE: cienka patelnia traci
 *   temperaturę w momencie, w którym trafia na nią zimne
 *   jedzenie — i przez chwilę nie smaży, tylko gotuje.
 *   Ciężka trzyma swoje i nic się nie zmienia,
 * — ŻE DLATEGO PRZY CIENKIM NACZYNIU SMAŻY SIĘ W TURACH,
 *   a przy ciężkim można pozwolić sobie na więcej naraz,
 * — ŻE CIĘŻKIE NACZYNIE MA TEŻ WADĘ, O KTÓREJ SIĘ NIE MÓWI:
 *   nie da się go szybko schłodzić. Zdjęcie z ognia niczego
 *   nie zatrzymuje, bo naczynie dalej grzeje. Przy czymś,
 *   co łatwo przegotować, to jest realny problem,
 * — ŻE CIENKIE NACZYNIE JEST ZA TO STEROWALNE — reaguje
 *   natychmiast i na zmniejszenie ognia, i na zwiększenie,
 * — ŻE STĄD PROSTA REGUŁA: co ma się rumienić i długo
 *   pracować, lubi ciężkie; co wymaga reagowania z minuty
 *   na minutę, lubi cienkie,
 * — ŻE NAGRZEWANIE CIĘŻKIEGO NACZYNIA TRWA DŁUŻEJ,
 *   NIŻ SIĘ WYDAJE, i że wrzucenie jedzenia za wcześnie
 *   niweczy całą jego przewagę,
 * — ⚠ ODSYŁAM DO STRON O NACZYNIACH DO PIECZENIA
 *   I O DNIE NACZYNIA, NIE ROZWIJAM MATERIAŁÓW
 *   ANI PRZYWIERANIA,
 * — ⚠ UCZCIWIE O SPRZĘCIE: naczynie Thermomixa jest
 *   ze stali i nie jest ciężkie w tym sensie — nie ma
 *   bezwładności ciężkiego garnka i nie zachowuje się
 *   jak on. Nadrabia czym innym: pilnuje temperatury
 *   czujnikiem i dogrzewa na bieżąco, więc nie musi
 *   magazynować ciepła, żeby je utrzymać. To są dwa różne
 *   sposoby na ten sam problem i warto rozumieć, który
 *   ma się w ręku.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE NACZYŃ, POWŁOKACH
 *   I O TYM, CZEGO NIE WOLNO STAWIAĆ NA JAKIEJ PŁYCIE.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM, MAREK I MODELI NACZYŃ.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności
 *   ZERO o „leczniczych właściwościach" sosnowego lasu.
 *   TWARDA GRANICA.
 * — ŻADNYCH PORAD ELEKTRYCZNYCH I O RODZAJACH PŁYT.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO „Akcji pod Celestynowem" z 1943 r. To jest
 *   najbardziej znany fakt o tej miejscowości, obecny
 *   w herbie gminy i w nazwie ulicy — i jest to wątek
 *   obozowy. KATEGORYCZNIE OMIJAM, RÓWNIEŻ POŚREDNIO.
 *   NIE OPISUJĘ TEŻ HERBU GMINY. TWARDA GRANICA.
 * — ZERO wykolejenia pociągu i bombardowania z 1939 r.
 * — ZERO napadu na pociąg z 1906 r.
 * — ⚠⚠ ZERO sanatoryjnej przeszłości okolic Otwocka
 *   i leczenia chorób. Można pisać o letniskach
 *   i o sosnowym powietrzu — ale ani słowa o sanatoriach.
 *   TWARDA GRANICA.
 * — ZERO dewastacji lasów przez okupantów.
 * — ZERO tematów wyznaniowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CIEPŁO, KTÓRE ZOSTAJE" (Błaszki) dotyczy TEGO,
 *   ŻE DANIE DOCHODZI PO WYŁĄCZENIU — czyli ciepła
 *   W JEDZENIU. TUTAJ chodzi o ciepło W NACZYNIU.
 * — „NACZYNIA DO PIECZENIA" (Czarna Białostocka) dotyczy
 *   MATERIAŁU FORM DO PIEKARNIKA.
 * — „DNO NACZYNIA" (Dobre Miasto) dotyczy PRZYWIERANIA
 *   I PRZYPALANIA.
 * — „FORMA" (Żelechów) dotyczy KSZTAŁTU I GŁĘBOKOŚCI.
 * — „ŻELIWO" (Stąporków) dotyczy KONKRETNEGO MATERIAŁU
 *   i tego, czego urządzenie nie zastąpi.
 * — „RUMIENIENIE" (Iłża) dotyczy KOLORU I SUCHEJ
 *   POWIERZCHNI.
 * — „PĘCZNIENIE" (Mszczonów) dotyczy OBJĘTOŚCI.
 * TUTAJ chodzi o MASĘ NACZYNIA i o to, co się dzieje,
 * gdy trafia na nie zimne jedzenie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Celestynów jest miastem.
 * — NIE PODAJĘ liczby mieszkańców wsi jako danych
 *   na 31.12.2024.
 * — NIE ROZSTRZYGAM pochodzenia nazwy.
 * — NIE PISZĘ o leczniczych właściwościach lasu.
 * — NIE TWIERDZĘ, że wydobywano tu torf na opał.
 * — NIE PODAJĘ nazw sołectw jako pewnego wykazu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Celestynów jest wsią i siedzibą gminy wiejskiej
 *   w powiecie otwockim; mieszka w nim blisko pięć tysięcy
 *   osób, a w całej gminie 11 630 (GUS, 31.12.2024)
 *   na 88,9 km²; liczba mieszkańców wsi wzrosła
 *   o ponad jedną piątą od końca lat dziewięćdziesiątych,
 * — w 1833 roku Leopold Radziński kupił tutejsze dobra,
 *   zapisane jako „Radzin", a dwór wznoszono w latach
 *   1872–1875 i jest on najstarszym budynkiem w miejscowości;
 *   przy dobrach działała cegielnia, po której zachowały się
 *   piece i doły po wydobyciu gliny,
 * — nazwę wywodzi się albo od karczmarza imieniem Celestyn,
 *   albo od Celestyny Polakiewiczówny, córki właściciela
 *   majątku,
 * — Kolej Nadwiślańską otwarto w 1877 roku, a stację
 *   uruchomiono w 1900, kiedy stało tu zaledwie osiem domów;
 *   drewniany dworzec z tamtego roku zachował się w formie
 *   pierwotnej i jest jednym z nielicznych takich obiektów
 *   w kraju,
 * — lasy zajmują pięćdziesiąt sześć procent powierzchni
 *   gminy, a ponad osiemdziesiąt sześć procent z nich
 *   to bory sosnowe; niemal cała gmina leży w Mazowieckim
 *   Parku Krajobrazowym, Nadleśnictwo Celestynów obejmuje
 *   blisko dziewięć tysięcy hektarów i od 2005 roku należy
 *   do Leśnego Kompleksu Promocyjnego „Lasy Warszawskie",
 *   a w gminie wytyczono siedemdziesiąt siedem kilometrów
 *   szlaków konnych,
 * — w gminie leży Bagno Całowanie — około tysiąca dwustu
 *   hektarów torfowiska niskiego.
 */
export const CELESTYNOW: CityContent = {
  slug: "celestynow",
  h1: "Thermomix Celestynów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Celestynów — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Celestynowie: bezpłatna prezentacja TM7 u Ciebie w domu, cała miejscowość i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Celestynów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Celestynowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Celestynowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej miejscowości i do wsi w gminie.",

  highlights: highlightyStandardowe("Celestynów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cienka patelnia traci temperaturę, gdy trafia na nią zimne jedzenie. Ciężka trzyma swoje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Celestynowie – jak wygląda prezentacja?",
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
      id: "bezwladnosc",
      heading: "Ciężkie czy cienkie — co naczynie robi z ciepłem",
      paragraphs: [
        "Przy dawnych dobrach, które Leopold Radziński kupił tu w 1833 roku, działała cegielnia. Zostały po niej piece i doły po wydobyciu gliny — do dziś widoczne w terenie.",
        "Piec ceglany ma jedną cechę, która przenosi się wprost do kuchni, choć nikt tego tak nie ustawia. Jest ciężki. Przez to nagrzewa się długo, ale kiedy już się nagrzeje, oddaje ciepło powoli i równo — i nie obchodzi go, co się do niego włoży.",
        "Naczynia zachowują się dokładnie tak samo, a ich masa jest chyba najczęściej pomijanym powodem, dla którego to samo danie wychodzi raz tak, a raz inaczej.",
        "Rzecz widać najlepiej w jednym momencie: kiedy zimne jedzenie trafia na rozgrzaną patelnię. Cienka patelnia natychmiast traci temperaturę — i przez następne pół minuty czy minutę nic nie smaży, tylko gotuje, bo z jedzenia wychodzi woda, a ciepła zabrakło. Ciężka patelnia w tym samym momencie nie zauważa niczego: ma w sobie tyle zmagazynowanego ciepła, że oddaje je bez zmiany temperatury.",
        "Stąd praktyczna zasada: przy cienkim naczyniu smaży się w turach i z przerwami na ponowne nagrzanie, a przy ciężkim można pozwolić sobie na więcej naraz.",
        "Ale ciężkie naczynie ma też wadę i mało kto o niej mówi, bo ciężki garnek ma dobrą prasę. Nie da się go szybko schłodzić. Zdjęcie z ognia niczego nie zatrzymuje — masa naczynia dalej oddaje ciepło jeszcze długo po wyłączeniu palnika. Przy czymś, co łatwo przegotować albo przypalić, to jest realny problem, a nie drobiazg.",
        "Cienkie naczynie jest za to sterowalne. Reaguje od razu — i na zmniejszenie ognia, i na zwiększenie. Jeśli trzeba pilnować czegoś z minuty na minutę, ta cecha jest warta więcej niż cała bezwładność ciężkiego garnka.",
        "Reguła robi się z tego prosta: co ma się rumienić i długo pracować, lubi ciężkie naczynie. Co wymaga reagowania, lubi cienkie.",
        "I jedna rzecz, na której wszyscy się przejeżdżają: nagrzewanie ciężkiego naczynia trwa znacznie dłużej, niż się wydaje. Patelnia, która jest gorąca w środku, przy brzegach bywa jeszcze letnia. Wrzucenie jedzenia za wcześnie niweczy całą przewagę, za którą się tej patelni zapłaciło — i wtedy zachowuje się dokładnie jak cienka, tylko jest cięższa w myciu. O samych materiałach i o przywieraniu do dna pisałam osobno.",
        "Teraz uczciwie o sprzęcie. Naczynie Thermomixa jest ze stali i nie jest ciężkie w tym sensie, o którym cały czas mówimy. Nie ma bezwładności żeliwnego garnka i nie zachowuje się jak on.",
        "Nadrabia jednak czym innym i warto to rozumieć: pilnuje temperatury czujnikiem i dogrzewa na bieżąco, więc nie musi magazynować ciepła, żeby je utrzymać. Ciężki garnek trzyma temperaturę masą, urządzenie trzyma ją sterowaniem. To są dwa różne rozwiązania tego samego problemu — i warto wiedzieć, które z nich ma się akurat w ręku, bo od tego zależy, czy wolno odejść od kuchni.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Celestynowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz sprawdzić, czy to urządzenie ma sens obok garnków, które już masz — powiedz to przy umawianiu. Właśnie o tym najlepiej rozmawia się na żywo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Celestynowie"),
    sekcjaRaty("w Celestynowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla celestynowskiej rodziny",
      paragraphs: [
        "Celestynów jest wsią i siedzibą gminy wiejskiej w powiecie otwockim; mieszka w nim blisko pięć tysięcy osób, a w całej gminie ponad jedenaście i pół tysiąca na blisko dziewięćdziesięciu kilometrach kwadratowych — liczba mieszkańców samej miejscowości wzrosła o ponad jedną piątą od końca lat dziewięćdziesiątych. W 1833 roku Leopold Radziński kupił tutejsze dobra, zapisane jako „Radzin”, a dwór wznoszono w latach 1872–1875 i jest on najstarszym budynkiem w miejscowości; przy dobrach działała cegielnia, po której zachowały się piece i doły po wydobyciu gliny. Nazwę wywodzi się albo od karczmarza imieniem Celestyn, albo od Celestyny Polakiewiczówny, córki właściciela majątku. Kolej Nadwiślańską otwarto w 1877 roku, a stację uruchomiono w 1900, kiedy stało tu zaledwie osiem domów — drewniany dworzec z tamtego roku zachował się w formie pierwotnej i jest jednym z nielicznych takich obiektów w kraju. Lasy zajmują pięćdziesiąt sześć procent powierzchni gminy, a ponad osiemdziesiąt sześć procent z nich to bory sosnowe; niemal cała gmina leży w Mazowieckim Parku Krajobrazowym, Nadleśnictwo Celestynów obejmuje blisko dziewięć tysięcy hektarów i od 2005 roku należy do Leśnego Kompleksu Promocyjnego „Lasy Warszawskie”, a w gminie wytyczono siedemdziesiąt siedem kilometrów szlaków konnych. Leży tu też Bagno Całowanie — około tysiąca dwustu hektarów torfowiska niskiego.",
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

  districtsHeading: "Do których części Celestynowa dojeżdżam?",
  districtsParagraphs: [
    "Do całej miejscowości — od okolic drewnianego dworca po domy przy drogach wylotowych i na skraju lasu. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Celestynów też przyjadę",
  nearbyParagraphs: [
    "Otwock, Karczew, Osieck, Kołbiel, Pilawa, Józefów i Garwolin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Otwock", "Karczew", "Pilawa", "Józefów"],

  about: blokOMnie("do Celestynowa", "w Celestynowie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Celestynowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całej miejscowości i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Celestynów w powiecie otwockim — wieś i siedzibę gminy wiejskiej, nie miasto — a nie o Celestynów w Wielkopolsce.",
    },
    ...faqWspolne("w Celestynowie"),
    {
      question: "Dlaczego to samo danie wychodzi raz tak, a raz inaczej?",
      answer:
        "Bardzo często decyduje masa naczynia. Cienka patelnia traci temperaturę w chwili, gdy trafia na nią zimne jedzenie, i przez moment gotuje zamiast smażyć; ciężka tego nie zauważa, bo ma w sobie zapas ciepła. Dlatego przy cienkim naczyniu smaży się w turach, a przy ciężkim można pozwolić sobie na więcej naraz.",
    },
    {
      question: "Czy ciężki garnek jest zawsze lepszy?",
      answer:
        "Nie. Ma wadę, o której rzadko się mówi: nie da się go szybko schłodzić — zdjęcie z ognia niczego nie zatrzymuje, bo masa dalej oddaje ciepło. Przy czymś, co łatwo przegotować, to realny problem. Cienkie naczynie reaguje natychmiast i tam, gdzie trzeba pilnować z minuty na minutę, wypada lepiej.",
    },
    {
      question: "Czy naczynie Thermomixa trzyma ciepło jak żeliwo?",
      answer:
        "Nie — jest ze stali i nie ma bezwładności ciężkiego garnka. Utrzymuje temperaturę inaczej: pilnuje jej czujnikiem i dogrzewa na bieżąco, więc nie musi jej magazynować. To dwa różne rozwiązania tego samego problemu i warto wiedzieć, które ma się akurat w ręku.",
    },
  ],

  geo: { lat: 52.0578, lng: 21.3828 },
};
