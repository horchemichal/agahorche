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
 * PRZASNYSZ — powiat przasnyski, woj. mazowieckie.
 * MIASTO 16 282 (GUS 31.12.2024), 25,2 km², 647,1 os./km².
 * ⚠ BRIEF PODAWAŁ ~17 tys. — GUS mówi 16 282. UŻYWAM GUS.
 *
 * ⚠ HOMONIMY: PRZASNYSZ ≠ PRASZKA (opolskie) ≠ PRUSZKÓW.
 *   FAQ to rozróżnia.
 *
 * ⚠⚠ ETYMOLOGIA NAZWY — PODSTAWA KĄTA:
 * Oficjalna strona miasta podaje CZTERY WERSJE:
 * 1. legendę o młynarzu Przaśniku goszczącym Konrada I
 *    Mazowieckiego,
 * 2. wywód OD PRZAŚNEGO CHLEBA,
 * 3. wywód OD PRZAŚNEGO MIODU podbieranego z puszczańskich
 *    barci,
 * 4. stanowisko filologów — od imienia PRZASNY.
 * ⚠⚠ PODAJĘ TO JAKO CZTERY WERSJE, NIGDY JAKO JEDNĄ PRAWDĘ.
 *    Legenda o młynarzu to LEGENDA, nie fakt. TWARDA GRANICA.
 *
 * HISTORIA:
 * — LOKACJA 10 PAŹDZIERNIKA 1427 r. na prawie chełmińskim,
 *   nadana przez księcia Janusza I,
 * — ⚠ LUSTRACJA KRÓLEWSKA Z 1564 r.: 689 DOMÓW, PONAD
 *   500 RZEMIEŚLNIKÓW, W TYM 126 PIWOWARÓW — cztery razy
 *   więcej niż w Warce. Przasnysz był wtedy TRZECIM
 *   OŚRODKIEM MIEJSKIM MAZOWSZA po Warszawie i Płocku,
 *   ok. 5000 mieszkańców.
 *   ⚠ 126 PIWOWARÓW PODAJĘ WYŁĄCZNIE JAKO LICZBĘ
 *     W BLOKU O MIEŚCIE. ZERO TEMATU ALKOHOLU.
 *     ⚠ MIASTO BYŁO PRZEDE WSZYSTKIM OŚRODKIEM
 *       RZEMIEŚLNICZO-HANDLOWYM, nie „browarniczym".
 * — PRZASNYSKI JARMARK STAROPOLSKI — impreza cykliczna,
 *   co najmniej IX edycji (2023),
 * — PRZASNYSKIE DOŻYNKI POWIATOWO-GMINNO-MIEJSKIE —
 *   wspólna impreza trzech samorządów,
 * — zachowany Zespół Szkoły Rolniczej przy ul. Rudej
 *   z przełomu XIX i XX w.
 *
 * GEOGRAFIA: miasto nad rzeką WĘGIERKĄ, na skraju
 * Wysoczyzny Ciechanowskiej; 106 km od Warszawy, 22 km
 * od Ciechanowa, 56 km od Ostrołęki. Na północ Kurpiowska
 * Puszcza Zielona.
 * ⚠ KĄTU ŚLIWKOWEGO NIE UŻYWAM mimo zbieżności nazwy rzeki
 *   — „OWOC W DANIU WYTRAWNYM — jabłko do mięsa, śliwka…"
 *   (Gubin) JEST ZAJĘTY. TWARDA GRANICA.
 * ⚠ KĄTU „WPRAWA" NIE UŻYWAM — ZAJĘTY (Janów Lubelski).
 *
 * ⚠ PRODUKTU Z LISTY PRODUKTÓW TRADYCYJNYCH NIE POTWIERDZONO.
 *   Istnieje notatka GMINY WIEJSKIEJ Przasnysz o własnym
 *   produkcie regionalnym, ale archiwum było niedostępne —
 *   a to i tak byłaby GMINA WIEJSKA, nie miasto.
 *   NIE WYMIENIAM ŻADNEGO PRODUKTU.
 *
 * KĄT: PRZAŚNE — chleby i placki bez zakwasu i bez drożdży.
 * Kąt od nazwy miasta: dwie z czterech wersji jej pochodzenia,
 * podawanych przez urząd miasta, wywodzą ją wprost
 * od PRZAŚNEGO CHLEBA albo PRZAŚNEGO MIODU.
 * ⚠⚠ TEMATEM SĄ PIECZYWA NIEROSNĄCE I ŚRODKI SPULCHNIAJĄCE
 *    (soda, proszek), NIE CHLEB NA ZAKWASIE ANI DROŻDŻACH.
 *    Kąty „chleb", „czerstwy chleb", „KISZONKI I ZAKWAS",
 *    „DROŻDŻE ŚWIEŻE KONTRA SUSZONE" i „ciasto drożdżowe"
 *    SĄ ZAJĘTE. TWARDA GRANICA.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że słowo „przaśny" znaczy dziś potocznie „nijaki",
 *   a pierwotnie znaczyło coś zupełnie konkretnego:
 *   NIEKWASZONY, niepodrośnięty, zrobiony bez czekania,
 * — ŻE PRZAŚNE PIECZYWO JEST NAJSTARSZĄ I NAJSZYBSZĄ
 *   FORMĄ CHLEBA NA ŚWIECIE — i że wciąż jest w użyciu
 *   na wszystkich kontynentach: podpłomyk, tortilla,
 *   chapati, maca, lawasz, pita bez wyrastania,
 * — ⚠⚠ PRAKTYCZNA WARTOŚĆ TEGO TEMATU: to jest pieczywo
 *   NA TERAZ. Kiedy nie ma chleba w domu, nie trzeba
 *   niczego planować ani czekać — mąka, woda, tłuszcz, sól
 *   i patelnia,
 * — ŻE ROBI SIĘ JE NA PATELNI ALBO NA SUCHEJ BLASZE,
 *   nie w formie,
 * — ŻE KLUCZOWE SĄ DWIE RZECZY: ciasto musi odpocząć
 *   (nie wyrosnąć — odpocząć, żeby dało się rozwałkować),
 *   a patelnia musi być dobrze rozgrzana,
 * — ŻE ISTNIEJE DRUGA RODZINA: WYPIEKI NA SODZIE I PROSZKU
 *   DO PIECZENIA — soda brytyjska, babeczki, muffiny,
 *   placki, naleśniki, racuchy,
 * — ⚠⚠ CZYM SIĘ RÓŻNI SODA OD PROSZKU: SODA POTRZEBUJE
 *   CZEGOŚ KWAŚNEGO W CIEŚCIE (maślanka, kefir, jogurt,
 *   ocet, sok), PROSZEK MA KWAS JUŻ W SOBIE. To jest cała
 *   różnica i najczęstsza przyczyna nieudanych ciast
 *   z tej rodziny,
 * — ŻE OBA DZIAŁAJĄ OD RAZU, WIĘC CIASTA NIE ODSTAWIA SIĘ
 *   — idzie prosto do pieca albo na patelnię,
 * — ŻE NADMIAR SODY DAJE MYDLANY POSMAK — i że to jest ten
 *   dziwny smak, którego nikt nie umie nazwać,
 * — ŻE PRZAŚNE NIE ZNACZY GORSZE: znaczy szybkie, cienkie
 *   i do zjedzenia od razu — bo przaśne pieczywo czerstwieje
 *   błyskawicznie,
 * — UCZCIWIE: urządzenie nie usmaży podpłomyka — patelnia
 *   zostaje patelnią,
 * — ale wyrabia ciasto w kilkadziesiąt sekund i to jest
 *   dokładnie ta część, która przy „szybkim chlebie"
 *   decyduje, czy w ogóle się go zrobi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ⚠⚠ ŻADNYCH PROPORCJI I ŻADNEGO PRZEPISU.
 *   Piszę o SKŁADNIKACH i ZASADACH, nigdy o gramaturze.
 *   TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — zero tez o glutenie,
 *   fermentacji, „lekkostrawności" i dietach.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ZERO TEMATU RELIGIJNEGO. Maca pojawia się WYŁĄCZNIE
 *   jako nazwa pieczywa na liście, bez kontekstu. ZERO
 *   opisu obrzędów i świąt religijnych. TWARDA GRANICA.
 * — ⚠ ZERO ALKOHOLU — 126 piwowarów to wyłącznie liczba
 *   historyczna w bloku o mieście.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „chleb" dotyczy CHLEBA WYRASTAJĄCEGO.
 * — „czerstwy chleb" dotyczy DRUGIEGO ŻYCIA BOCHENKA.
 * — „KISZONKI I ZAKWAS" dotyczą FERMENTACJI.
 * — „DROŻDŻE ŚWIEŻE KONTRA SUSZONE" i „ciasto drożdżowe"
 *   dotyczą DROŻDŻY.
 * — „ciasto naleśnikowe" (Cieszanów) dotyczy NALEŚNIKÓW
 *   I PATELNI. ⚠ NALEŚNIKI WYMIENIAM TYLKO JAKO NAZWĘ
 *   NA LIŚCIE, NIE ROZWIJAM.
 * — „KRUCHE CIASTO" dotyczy SPODÓW.
 * TUTAJ chodzi o PIECZYWO I CIASTA, KTÓRE NIE WYRASTAJĄ —
 * o podpłomyki oraz o sodę i proszek do pieczenia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ legendy o młynarzu jako faktu — to jedna
 *   z czterech wersji.
 * — NIE NAZYWAM Przasnysza miastem browarniczym.
 * — NIE WYMIENIAM produktu z Listy Produktów Tradycyjnych.
 * — NIE PODAJĘ przepisu ani proporcji.
 * — NIE MYLĘ PRZASNYSZA z PRASZKĄ ani PRUSZKOWEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Przasnysz lokowano 10 października 1427 r. na prawie
 *   chełmińskim; przywilej nadał książę Janusz I,
 * — urząd miasta podaje cztery wersje pochodzenia nazwy:
 *   legendę o młynarzu Przaśniku goszczącym Konrada I
 *   Mazowieckiego, wywód od przaśnego chleba, wywód
 *   od przaśnego miodu podbieranego z puszczańskich barci
 *   oraz stanowisko filologów wywodzące nazwę od imienia
 *   Przasny,
 * — lustracja królewska z 1564 r. odnotowała tu 689 domów
 *   i ponad 500 rzemieślników, a miasto liczyło około
 *   pięciu tysięcy mieszkańców i było trzecim ośrodkiem
 *   miejskim Mazowsza po Warszawie i Płocku,
 * — miasto leży nad Węgierką, na skraju Wysoczyzny
 *   Ciechanowskiej, 106 km od Warszawy i 22 km od Ciechanowa;
 *   na północ rozciąga się Kurpiowska Puszcza Zielona,
 * — kościół farny Wniebowzięcia NMP jest późnogotycki
 *   i pochodzi z lat 1474–1485; klasztor bernardynów
 *   wzniesiono w latach 1585–1588, a klasztor bernardynek
 *   z kościołem św. Klary i Józefa w latach 1609–1616;
 *   klasycystyczny ratusz pochodzi z końca XVIII w.
 *   i został rozbudowany po 1920 r., a dom klasycystyczny
 *   z 1807 r.; Park Miejski założono w pierwszej połowie
 *   XIX w., zachował się też drewniany budynek stacyjny
 *   kolei wąskotorowej z około 1925 r.,
 * — miasto organizuje Przasnyski Jarmark Staropolski,
 *   a dożynki są wspólną imprezą powiatu, gminy i miasta.
 */
export const PRZASNYSZ: CityContent = {
  slug: "przasnysz",
  h1: "Thermomix Przasnysz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Przasnysz — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Przasnyszu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przasnysz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Przasnyszu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Przasnysza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Przasnysz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Przaśny” nie znaczy nijaki. Znaczy: zrobiony bez czekania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przasnyszu – jak wygląda prezentacja?",
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
      id: "przasne",
      heading: "Skąd nazwa miasta — czyli o pieczywie, które nie wyrasta",
      paragraphs: [
        "Urząd Miasta Przasnysza podaje cztery wersje pochodzenia nazwy. Jedna to legenda o młynarzu Przaśniku, który miał gościć Konrada Mazowieckiego. Druga wywodzi ją od przaśnego chleba. Trzecia od przaśnego miodu podbieranego z puszczańskich barci. Czwarta, filologiczna, od imienia Przasny. Nie wiadomo, która jest prawdziwa — ale to jedno z niewielu polskich miast, którego nazwę urzędowe źródło łączy wprost ze sposobem wypieku chleba.",
        "A słowo „przaśny” zrobiło w polszczyźnie ciekawą karierę w dół. Dziś znaczy potocznie „nijaki”, „siermiężny”, „bez wyrazu”. Pierwotnie znaczyło coś zupełnie konkretnego i wcale nie pejoratywnego: niekwaszony. Zrobiony bez czekania, bez zakwasu, bez drożdży.",
        "Przaśne pieczywo jest przy tym najstarszą i najszybszą formą chleba, jaką zna człowiek, i wciąż jest w codziennym użyciu na wszystkich kontynentach. Podpłomyk, tortilla, chapati, lawasz, maca — wszystko to jedna rodzina. Różnią się mąką i grubością, nie zasadą.",
        "Jego praktyczna wartość w dzisiejszej kuchni jest bardzo konkretna: to jest pieczywo na teraz. Kiedy okazuje się, że nie ma chleba, a jest zupa albo pasta, nie trzeba niczego planować ani czekać do jutra. Mąka, woda, odrobina tłuszczu, sól — i patelnia. Kwadrans zamiast doby.",
        "Robi się je na patelni albo na suchej blasze, nie w formie. Dwie rzeczy są przy tym ważne. Ciasto musi chwilę odpocząć — nie wyrosnąć, tylko odpocząć, żeby dało się je cienko rozwałkować, bo świeżo wyrobione kurczy się pod wałkiem. I patelnia musi być naprawdę rozgrzana: podpłomyk ma się upiec w kilkadziesiąt sekund, a nie powoli wyschnąć.",
        "Obok tej rodziny jest druga, o której myśli się w kuchni znacznie częściej, choć rzadko wprost: wypieki na sodzie i proszku do pieczenia. Placki, babeczki, muffiny, racuchy, szybkie chleby typu soda bread. Też nie wyrastają w tradycyjnym sensie — spulchniają się w piekarniku.",
        "I tu jest różnica, która odpowiada za większość nieudanych ciast z tej grupy. Soda potrzebuje w cieście czegoś kwaśnego — maślanki, kefiru, jogurtu, octu, soku z cytryny. Bez tego nie zadziała i ciasto zostanie zbite. Proszek do pieczenia ma kwas już w sobie, więc działa w każdym cieście. To wszystko; cała reszta to szczegóły. Jeśli przepis mówi „soda” i jednocześnie „maślanka”, to nie przypadek.",
        "Obie rzeczy działają od razu, więc takiego ciasta się nie odstawia. Idzie prosto do pieca albo na patelnię. Ciasto na muffiny, które postało pół godziny na blacie, nie urośnie już tak jak powinno — a to kolejny częsty powód rozczarowania.",
        "Warto też wiedzieć o jednej pułapce: nadmiar sody daje mydlany, gorzkawy posmak. To jest ten dziwny smak w domowych babeczkach, którego nikt nie umie nazwać, a który wraca uparcie przy „dosypaniu na oko”.",
        "I rzecz, dla której w ogóle o tym piszę: przaśne nie znaczy gorsze. Znaczy szybkie, cienkie i do zjedzenia od razu — bo przaśne pieczywo czerstwieje błyskawicznie i nie nadaje się na zapas. To nie wada, tylko inna funkcja. Chleb na zakwasie jest na tydzień, podpłomyk na kwadrans.",
        "Teraz uczciwie o sprzęcie. Thermomix nie usmaży podpłomyka i nie upiecze muffinów. Patelnia zostaje patelnią, piekarnik piekarnikiem.",
        "Wyrabia natomiast ciasto w kilkadziesiąt sekund — i akurat przy „szybkim chlebie” to jest ta część, która decyduje, czy w ogóle się go zrobi. Bo cała przewaga podpłomyka nad chlebem polega na tym, że nie trzeba na niego czekać; jeśli więc samo wyrabianie zajmuje kwadrans i brudzi miskę, przewaga znika. Kiedy zajmuje chwilę, rzecz staje się realną alternatywą dla wyprawy do sklepu.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Przasnyszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć, ile trwa zrobienie pieczywa od zera — powiedzcie przy umawianiu. To jedna z rzeczy, które najbardziej zaskakują.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Przasnyszu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla przasnyskiej rodziny",
      paragraphs: [
        "Przasnysz liczy ponad szesnaście tysięcy mieszkańców na dwudziestu pięciu kilometrach kwadratowych i leży nad Węgierką, na skraju Wysoczyzny Ciechanowskiej — sto sześć kilometrów od Warszawy i dwadzieścia dwa od Ciechanowa, a na północ rozciąga się Kurpiowska Puszcza Zielona. Miasto lokowano 10 października 1427 roku na prawie chełmińskim przywilejem księcia Janusza I. Lustracja królewska z 1564 roku odnotowała tu sześćset osiemdziesiąt dziewięć domów i ponad pięciuset rzemieślników; miasto liczyło wtedy około pięciu tysięcy mieszkańców i było trzecim ośrodkiem miejskim Mazowsza po Warszawie i Płocku. Urząd miasta podaje cztery wersje pochodzenia nazwy: legendę o młynarzu Przaśniku goszczącym Konrada Mazowieckiego, wywód od przaśnego chleba, wywód od przaśnego miodu podbieranego z puszczańskich barci oraz stanowisko filologów wywodzące ją od imienia Przasny. Kościół farny Wniebowzięcia Najświętszej Marii Panny jest późnogotycki i pochodzi z lat 1474–1485; klasztor bernardynów wzniesiono w latach 1585–1588, a klasztor bernardynek z kościołem świętej Klary i Józefa w latach 1609–1616. Klasycystyczny ratusz pochodzi z końca XVIII wieku i został rozbudowany po 1920 roku, dom klasycystyczny z 1807, Park Miejski założono w pierwszej połowie XIX wieku, a przy dawnej kolei wąskotorowej zachował się drewniany budynek stacyjny z około 1925 roku. Miasto organizuje Przasnyski Jarmark Staropolski, a dożynki są wspólną imprezą powiatu, gminy i miasta.",
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

  districtsHeading: "Do których części Przasnysza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — okolic Rynku, Zawodzia, Rudy, dzielnicy klasztornej i osiedli przy ulicach 3 Maja oraz świętego Stanisława Kostki. Dojeżdżam też do wsi w okolicy: Karwacza, Bogatego i Rostkowa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Zawodzie", "Ruda"],

  nearbyHeading: "Poza Przasnysz też przyjadę",
  nearbyParagraphs: [
    "Ciechanów, Maków Mazowiecki, Chorzele, Ostrołęka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ciechanów", "Maków Mazowiecki", "Chorzele", "Ostrołęka"],

  about: blokOMnie("do Przasnysza", "w Przasnyszu", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Przasnysza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Przasnysz nad Węgierką w powiecie przasnyskim, a nie o Praszkę czy Pruszków.",
    },
    ...faqWspolne("w Przasnyszu"),
    {
      question: "Co to jest pieczywo przaśne?",
      answer:
        "Takie, które nie wyrasta — bez zakwasu i bez drożdży. To najstarsza i najszybsza forma chleba: podpłomyk, tortilla, chapati, lawasz. Robi się je na patelni albo suchej blasze z mąki, wody, odrobiny tłuszczu i soli, w kwadrans zamiast doby.",
    },
    {
      question: "Czym różni się soda od proszku do pieczenia?",
      answer:
        "Soda potrzebuje w cieście czegoś kwaśnego — maślanki, kefiru, jogurtu, octu, soku z cytryny — a bez tego nie zadziała i ciasto zostanie zbite. Proszek ma kwas już w sobie, więc działa w każdym cieście. Jeśli przepis wymienia sodę i jednocześnie maślankę, to nie przypadek.",
    },
    {
      question: "Skąd mydlany posmak w domowych babeczkach?",
      answer:
        "Najczęściej z nadmiaru sody. To ten dziwny, lekko gorzkawy smak, którego nikt nie umie nazwać, a który wraca przy dosypywaniu na oko. Warto też pamiętać, że ciasta na sodzie i proszku nie odstawia się — idą prosto do pieca, bo spulchnianie zaczyna się od razu.",
    },
  ],

  geo: { lat: 53.019, lng: 20.8804 },
};
