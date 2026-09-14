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
 * GRÓJEC — powiat grójecki, woj. mazowieckie.
 * MIASTO 16 782 (GUS 31.12.2024), 8,6 km², 1958,2 os./km²
 * — najgęściej zaludnione miasto tej fali.
 *
 * ⚠ HOMONIMY: GRÓJEC (mazowieckie) ≠ GRODZIEC ≠ GRODZISK
 *   ≠ GRÓDEK ≠ GROJEC (małopolskie) ≠ Grójec w świętokrzyskim
 *   i kujawsko-pomorskim. FAQ to rozróżnia.
 *
 * HISTORIA:
 * — pierwsza wzmianka 1234 jako „Groze"; PRAWA MIEJSKIE 1419,
 * — ⚠⚠ W 1564 r. GRÓJEC, SIEDZIBA STAROSTWA, LICZYŁ OK. 200
 *   DOMÓW I 1000 MIESZKAŃCÓW, A PRODUKOWAŁ PIWO I STRUNY
 *   DO LUTNI. To świetne zdanie i używam go jako detalu.
 *   ⚠ ZERO TEMATU ALKOHOLU i ZERO tematu strun z jelit
 *     (kolizja z kątami „podroby" i „flaki"). Podaję
 *     wyłącznie jako fakt gospodarczy w bloku o mieście.
 * — po potopie szwedzkim zostało 16 domów; 1862 — 2825
 *   mieszkańców; 1867 — siedziba powiatu; do 1914 — 7500
 *   mieszkańców; w tym okresie zbudowano kolej wąskotorową
 *   z Warszawy,
 * — ⚠ SADOWNICTWO TO WARSTWA PÓŹNIEJSZA — miasto NIE było
 *   ośrodkiem sadowniczym od średniowiecza. NIE TWIERDZĘ TEGO.
 * — przez miasto przepływa rzeka MOLNICA,
 * — w 1976 r. nazwano imieniem Grójca krater na Marsie.
 *
 * ⚠⚠ ZAGŁĘBIE SADOWNICZE — KONTEKST, NIE TEMAT:
 * — JABŁKA GRÓJECKIE: wpis na Listę Produktów Tradycyjnych
 *   2008; rejestracja jako Chronione Oznaczenie Geograficzne
 *   w UE 5 PAŹDZIERNIKA 2011,
 * — specyfikacja ChOG: 27 zarejestrowanych odmian; gleby
 *   piaszczyste; ok. 600 mm opadu rocznie; okres wegetacyjny
 *   ok. 200 dni; TEMPERATURY NOCNE BLISKO 0°C we wrześniu
 *   i na początku października, co podnosi stosunek cukru
 *   do kwasu; KWASOWOŚĆ O 5% WYŻSZA niż średnia dla odmiany;
 *   region dostarcza OK. 40% POLSKIEJ PRODUKCJI JABŁEK,
 * — 54,9 TYS. HA SADÓW JABŁONIOWYCH (dane ARiMR),
 * ⚠⚠ KĄTY „jabłko", „soki", „kompoty i musy", „składniki
 *   prosto z gospodarstwa", „działka", „odmiany" SĄ ZAJĘTE.
 *   JABŁKO NIE JEST TEMATEM — jest kontekstem gospodarczym
 *   w bloku o mieście. TWARDA GRANICA.
 *
 * ⚠⚠ PRZECHOWALNICTWO — PODSTAWA KĄTA:
 * — chłodnia z atmosferą modyfikowaną (MA): tlen 15–16%,
 *   CO₂ 5–6%,
 * — atmosfera kontrolowana (KA): tlen 3%, CO₂ 5%,
 * — ⚠⚠ ULO (Ultra Low Oxygen): TLEN 1–2%, CO₂ 2%,
 * — temperatura przechowywania 0,5–2°C; miąższ schłodzony
 *   do ok. 4°C w pierwszej dobie,
 * — w systemie MA tlen spada samoistnie, bo owoce zużywają
 *   go w oddychaniu.
 * TO JEST KOTWICA: zbiór największego obszaru sadowniczego
 * w Europie przeżywa do lata nie dzięki zimnu, tylko dzięki
 * ODCIĘCIU TLENU.
 * ⚠ LICZBY CHŁODNI I POJEMNOŚCI W TONACH NIE PODAJĘ —
 *   nieustalone.
 *
 * KĄT: POWIETRZE — dlaczego napoczęte psuje się szybciej
 * niż całe.
 * Kąt od komór ULO w zagłębiu grójeckim, w których tlen
 * obniża się do jednego–dwóch procent, żeby owoc przestał
 * oddychać i doczekał do lata.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że o przechowywaniu myślimy w kategoriach zimna,
 *   a przemysł od dawna wie, że co najmniej równie ważne
 *   jest POWIETRZE,
 * — ŻE TO TŁUMACZY RZECZ, KTÓRĄ WSZYSCY ZNAJĄ, A MAŁO KTO
 *   UMIE WYJAŚNIĆ: napoczęte psuje się znacznie szybciej
 *   niż to samo w całości — nie dlatego, że „ktoś dotknął",
 *   tylko dlatego, że powietrze dostało się do środka,
 * — CO Z TEGO WYNIKA PRAKTYCZNIE — LISTA RZECZY, KTÓRE
 *   NAPRAWDĘ DZIAŁAJĄ:
 *   — FOLIA DOCIŚNIĘTA DO POWIERZCHNI, a nie naciągnięta
 *     na brzegi miski — to ta sama sztuczka co przy kożuchu,
 *     tylko z innego powodu,
 *   — ZALANIE TŁUSZCZEM ALBO WYWAREM — pasta pod warstwą
 *     oliwy, mięso pod warstwą tłuszczu, to najstarsza
 *     metoda odcinania powietrza, jaką znamy,
 *   — WYCIŚNIĘCIE POWIETRZA Z WORECZKA przed zamknięciem,
 *     zwłaszcza przed mrożeniem,
 *   — NAPEŁNIENIE SŁOIKA PO BRZEGI zamiast do połowy,
 *   — PRZEŁOŻENIE DO MNIEJSZEGO NACZYNIA, kiedy zostaje
 *     resztka — pół litra sosu w dużym garnku ma nad sobą
 *     całą resztę powietrza,
 * — ŻE DLATEGO MROŻENIE W PŁASKIEJ TOREBCE BIJE POJEMNIK:
 *   mniej powietrza i mniej szronu,
 * — ŻE OWOCE I WARZYWA ODDYCHAJĄ RÓWNIEŻ PO ZERWANIU
 *   — to nie metafora, tylko powód, dla którego chłodnie
 *   w ogóle odcinają im tlen,
 * — ŻE POWIETRZE ODPOWIADA TEŻ ZA JEŁCZENIE TŁUSZCZU
 *   ⚠ ODSYŁAM DO STRONY O SUCHYM ZAPASIE, NIE ROZWIJAM,
 * — ⚠⚠ CZEGO NIE ROBIĆ: nie zalewać olejem czosnku ani ziół
 *   i nie trzymać takich słoików poza lodówką.
 *   ⚠ PISZĘ TO JEDNYM ZDANIEM, BEZ TEZ MIKROBIOLOGICZNYCH
 *     I BEZ NAZYWANIA ZAGROŻEŃ. TWARDA GRANICA.
 * — UCZCIWIE: urządzenie nie pakuje próżniowo i powietrza
 *   nie odcina,
 * — ale robi rzecz, która z tego wynika: przerabia resztki
 *   na gładką masę, którą da się przelać do małego, pełnego
 *   pojemnika — a pełny mały pojemnik to najprostsza forma
 *   odcięcia powietrza, jaką ma się w domu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR W KUCHNI.
 *   ⚠ Parametry chłodni (tlen 1–2%, 0,5–2°C) podaję jako
 *     FAKT PRZEMYSŁOWY z kotwicy, nie jako instrukcję.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, SANITARNYCH
 *   I MIKROBIOLOGICZNYCH. ZERO nazywania bakterii, zatruć
 *   i chorób. ZERO instrukcji, jak rozpoznać zepsute
 *   jedzenie. Piszę WYŁĄCZNIE o TRWAŁOŚCI I SMAKU.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU JABŁKA JAKO SKŁADNIKA — kąt ZAJĘTY.
 * — ⚠ ZERO ALKOHOLU.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych (również potopu jako zniszczenia
 *   — liczbę 16 domów podaję neutralnie, jako fakt
 *   demograficzny).
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu cen skupu i sytuacji sadowników.
 *   TWARDA GRANICA — to temat gospodarczo-polityczny.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „LODÓWKA" (Witnica) dotyczy UKŁADU PÓŁEK I STREF.
 * — „CO PSUJE SIĘ NAJPIERW" (Łomianki) dotyczy KOLEJNOŚCI
 *   ZJADANIA ZAKUPÓW.
 * — „SUCHY ZAPAS" (Dobiegniew) dotyczy PRODUKTÓW SYPKICH.
 * — „WARZYWA POZA LODÓWKĄ" (Trzciel) dotyczy PRODUKTÓW,
 *   KTÓRYM CHŁÓD SZKODZI.
 * — „MARYNATY I ZALEWY" (Pisz) dotyczą KONSERWOWANIA
 *   W OCCIE.
 * — „gotowanie na zapas i odkładanie porcji do zamrażarki"
 *   dotyczy GOTOWYCH DAŃ.
 * TUTAJ chodzi o JEDEN MECHANIZM — o tlen i o to, że
 * odcięcie powietrza jest osobnym narzędziem obok chłodu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROBIĘ TEMATU z jabłka ani z odmian.
 * — NIE PODAJĘ liczby chłodni ani pojemności w tonach.
 * — NIE PODAJĘ powierzchni sadów samej gminy Grójec.
 * — NIE PISZĘ o cenach skupu ani o sytuacji sadowników.
 * — NIE NAZYWAM zagrożeń mikrobiologicznych.
 * — NIE MYLĘ GRÓJCA z GRODZISKIEM, GRÓDKIEM ani z Grojcem
 *   w małopolskim.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Grójcu pochodzi z 1234 r., a prawa
 *   miejskie miasto otrzymało w 1419 r.; w 1564 r., jako
 *   siedziba starostwa, liczyło około dwustu domów i tysiąca
 *   mieszkańców, a produkowało piwo i struny do lutni,
 * — w 1867 r. Grójec został siedzibą powiatu, a do 1914 r.
 *   urósł do siedmiu i pół tysiąca mieszkańców; w tym okresie
 *   zbudowano kolej wąskotorową z Warszawy,
 * — jabłka grójeckie wpisano na Listę Produktów Tradycyjnych
 *   w 2008 r., a 5 października 2011 r. zarejestrowano
 *   je w Unii Europejskiej jako Chronione Oznaczenie
 *   Geograficzne; specyfikacja obejmuje 27 odmian, a region
 *   dostarcza około czterdziestu procent polskiej produkcji
 *   jabłek przy blisko pięćdziesięciu pięciu tysiącach
 *   hektarów sadów,
 * — w specyfikacji zapisano, że smak bierze się z nocnych
 *   temperatur bliskich zeru we wrześniu i na początku
 *   października, a kwasowość owoców jest o pięć procent
 *   wyższa niż średnia dla odmiany,
 * — jabłka przechowuje się w chłodniach z kontrolowaną
 *   atmosferą: w systemie ULO poziom tlenu obniża się
 *   do jednego–dwóch procent przy dwóch procentach
 *   dwutlenku węgla i temperaturze od pół stopnia do dwóch,
 * — kościół św. Mikołaja wzniesiono w latach 1520–1530,
 *   a drewniana dzwonnica pochodzi z 1889 r.; klasycystyczny
 *   ratusz na Placu Wolności zbudowano w 1821 r. i wpisano
 *   do rejestru zabytków w 1962 r.; zachowały się też
 *   klasycystyczny budynek poczty, XIX-wieczny szpital
 *   i cmentarz żydowski z XVIII w.,
 * — przez miasto przepływa Molnica, a w 1976 r. imieniem
 *   Grójca nazwano krater na Marsie.
 */
export const GROJEC: CityContent = {
  slug: "grojec",
  h1: "Thermomix Grójec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Grójec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Grójcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Grójec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Grójcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Grójca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Grójec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Napoczęte psuje się szybciej nie przez dotyk, tylko przez powietrze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Grójcu – jak wygląda prezentacja?",
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
      id: "powietrze",
      heading: "Komory z odciętym tlenem — czyli o powietrzu, które psuje jedzenie",
      paragraphs: [
        "Grójec leży w środku największego obszaru sadowniczego w tej części Europy — region dostarcza około czterdziestu procent polskiej produkcji jabłek przy blisko pięćdziesięciu pięciu tysiącach hektarów sadów. Ale nie o jabłkach chcę tu napisać, tylko o tym, co się z nimi robi po zbiorze, bo to jest znacznie ciekawsze i przekłada się wprost na domową lodówkę.",
        "Zbiór, który trwa kilka tygodni jesienią, trzeba jakoś doprowadzić do następnego lata. I robi się to nie samym zimnem. W chłodniach z kontrolowaną atmosferą obniża się poziom tlenu — w systemie ULO do jednego czy dwóch procent, przy temperaturze od pół stopnia do dwóch. Owoc w takich warunkach niemal przestaje oddychać. To jest w istocie uśpienie, a nie schłodzenie.",
        "A teraz rzecz, którą wszyscy znają z domu, a mało kto umie wytłumaczyć: napoczęte psuje się znacznie szybciej niż to samo w całości. Otwarta śmietana, napoczęta wędlina, przekrojone awokado, nadgryzione jabłko, otwarty sok. Powszechne wyjaśnienie brzmi „bo ktoś dotknął” albo „bo się nagrzało”. Prawdziwy powód jest prostszy: do środka dostało się powietrze.",
        "Z tego wynika lista rzeczy, które naprawdę działają — i są to rzeczy nie kosztujące nic.",
        "Folia dociśnięta do powierzchni, a nie naciągnięta na brzegi miski. Ta sama sztuczka, którą stosuje się przeciw kożuchowi na budyniu, tylko z innego powodu: chodzi o to, żeby między jedzeniem a folią nie było warstwy powietrza.",
        "Zalanie tłuszczem albo wywarem. Pasta pod warstwą oliwy, mięso pod warstwą tłuszczu z pieczenia, ser pod oliwą — to najstarsza metoda odcinania powietrza, jaką ludzie wymyślili, i nadal działa lepiej niż większość pojemników.",
        "Wyciśnięcie powietrza z woreczka przed zamknięciem, zwłaszcza przed mrożeniem. Tu różnica jest największa i widać ją gołym okiem: to powietrze zamyka się w torebce i osadza jako szron na powierzchni jedzenia.",
        "Napełnienie słoika po brzegi zamiast do połowy. I — rzecz najczęściej pomijana — przełożenie resztki do mniejszego naczynia. Pół litra sosu w dużym garnku ma nad sobą litr powietrza; ten sam sos w małym słoiczku prawie żadnego.",
        "Stąd też bierze się przewaga mrożenia w płaskiej torebce nad pojemnikiem: mniej powietrza w środku i mniej szronu na powierzchni.",
        "Warto przy okazji wiedzieć, że owoce i warzywa oddychają również po zerwaniu. To nie jest przenośnia, tylko dokładnie ten powód, dla którego chłodnie odcinają im tlen — zużywają go nadal i nadal dojrzewają, tylko wolniej. Powietrze odpowiada też za jełczenie tłuszczu w orzechach i mąkach, ale o suchym zapasie pisałam osobno.",
        "Jedno zdanie o tym, czego nie robić: nie zalewa się olejem czosnku ani świeżych ziół i nie trzyma takich słoików poza lodówką.",
        "Teraz uczciwie o sprzęcie. Thermomix nie pakuje próżniowo, nie ma pompy i powietrza nie odcina. Gdyby ktoś szukał urządzenia do tego, to jest zupełnie inna maszyna.",
        "Robi natomiast rzecz, która z tego tematu wynika w praktyce. Przerabia resztki na gładką masę — przecier, pastę, zupę krem — a taką masę da się przelać do małego, wypełnionego po brzegi pojemnika. I to jest, jak na domowe warunki, najprostsza forma odcięcia powietrza, jaką się ma: nie zostaje ani przestrzeni nad jedzeniem, ani zakamarków między kawałkami. Pół kilograma pieczonych warzyw w dużym pudełku stoi w powietrzu; ten sam przecier w pełnym słoiczku — nie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Grójcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie owoce albo warzywa, które trzeba szybko przerobić — powiedzcie przy umawianiu. Chętnie zrobię z nich przecier albo pastę zamiast przywozić swoje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Grójcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla grójeckiej rodziny",
      paragraphs: [
        "Grójec liczy blisko siedemnaście tysięcy mieszkańców na zaledwie ośmiu i pół kilometra kwadratowego, co czyni go jednym z najgęściej zaludnionych miast Mazowsza. Pierwsza wzmianka pochodzi z 1234 roku, prawa miejskie miasto otrzymało w 1419, a w 1564 roku — już jako siedziba starostwa — liczyło około dwustu domów i tysiąca mieszkańców i produkowało piwo oraz struny do lutni. W 1867 roku został siedzibą powiatu, a do 1914 urósł do siedmiu i pół tysiąca mieszkańców; w tym okresie zbudowano kolej wąskotorową z Warszawy. Dziś Grójec leży w środku największego zagłębia sadowniczego w tej części Europy: jabłka grójeckie wpisano na Listę Produktów Tradycyjnych w 2008 roku, a 5 października 2011 zarejestrowano je w Unii Europejskiej jako Chronione Oznaczenie Geograficzne; specyfikacja obejmuje dwadzieścia siedem odmian, a region dostarcza około czterdziestu procent polskiej produkcji jabłek przy blisko pięćdziesięciu pięciu tysiącach hektarów sadów. W unijnym opisie zapisano, że smak bierze się z nocnych temperatur bliskich zeru we wrześniu i na początku października, a kwasowość owoców jest o pięć procent wyższa niż średnia dla odmiany. Kościół świętego Mikołaja wzniesiono w latach 1520–1530, drewniana dzwonnica pochodzi z 1889, a klasycystyczny ratusz na Placu Wolności zbudowano w 1821 roku i wpisano do rejestru zabytków w 1962; zachowały się też klasycystyczny budynek poczty, dziewiętnastowieczny szpital i cmentarz żydowski z XVIII wieku. Przez miasto przepływa Molnica, a w 1976 roku imieniem Grójca nazwano krater na Marsie.",
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

  districtsHeading: "Do których części Grójca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od Placu Wolności po osiedla na obrzeżach. Dojeżdżam też do sołectw gminy: Częstoniewa i Częstoniewa-Kolonii, Lesznowoli, Kobylina, Pabierowic, Worowa i Wólki Grójeckiej.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Grójec też przyjadę",
  nearbyParagraphs: [
    "Warka, Belsk Duży, Jasieniec, Tarczyn, Piaseczno i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Warka", "Tarczyn", "Piaseczno", "Mogielnica"],

  about: blokOMnie("do Grójca", "w Grójcu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Grójca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy — Częstoniewa, Lesznowoli, Kobylina, Worowa i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Grójec w powiecie grójeckim na Mazowszu, a nie o Grodzisk, Gródek czy Grojec w Małopolsce.",
    },
    ...faqWspolne("w Grójcu"),
    {
      question: "Dlaczego napoczęte produkty psują się szybciej?",
      answer:
        "Bo do środka dostało się powietrze — nie dlatego, że ktoś ich dotknął. Ten sam mechanizm wykorzystują chłodnie sadownicze, tylko odwrotnie: obniżają poziom tlenu do jednego czy dwóch procent, żeby owoce niemal przestały oddychać i doczekały do lata.",
    },
    {
      question: "Jak odciąć jedzenie od powietrza w domu?",
      answer:
        "Docisnąć folię do powierzchni zamiast naciągać ją na brzegi miski, zalać pastę oliwą albo mięso tłuszczem, wycisnąć powietrze z woreczka przed zamknięciem, napełniać słoik po brzegi i przekładać resztki do mniejszego naczynia. Pół litra sosu w dużym garnku ma nad sobą litr powietrza.",
    },
    {
      question: "Dlaczego w zamrażarce robi się szron na jedzeniu?",
      answer:
        "Bo w torebce albo pojemniku zostało powietrze — jego wilgoć osadza się na powierzchni produktu. Dlatego mrożenie w płaskiej torebce z wyciśniętym powietrzem wypada lepiej niż w dużym pojemniku, w którym nad jedzeniem zostaje wolna przestrzeń.",
    },
  ],

  geo: { lat: 51.8655, lng: 20.8666 },
};
