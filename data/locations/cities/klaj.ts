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
 * KŁAJ — gmina wiejska, powiat wielicki, skraj Puszczy Niepołomickiej.
 * 11 218 mieszkańców (31.12.2024, GUS) na ok. 65 km², 171 os./km².
 * DZIEWIĘĆ SOŁECTW.
 *
 * OŚ STRONY: PUSZCZA NIEPOŁOMICKA NAZYWAŁA SIĘ KIEDYŚ „LAS KŁAJ" —
 * nazwa poświadczona w dokumentach od 1242 r. To jest fakt, który
 * odwraca hierarchię: nie Kłaj leży „koło Niepołomic", tylko puszcza
 * nazwana jest dziś od miasta, a kiedyś od tej wsi.
 *
 * DRUGA OŚ: ŻUBRY W POSZYNIE — ośrodek hodowli od 1936 r., dziś ok.
 * 30 sztuk linii białowiesko-kaukaskiej, REZERWAT ŚCISŁY, BEZ WSTĘPU.
 * To trzeba napisać uczciwie: żubry są, ale zobaczyć ich nie można.
 *
 * TRZECIA OŚ: pałac Żeleńskich w Grodkowicach (1902, proj. Teodora
 * Talowskiego) — tam urodził się kompozytor Władysław Żeleński,
 * a jego syn Tadeusz Boy-Żeleński przyjeżdżał na wakacje.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 11 218
 *   mieszkańców, 171 os./km², średni wiek 40,9 lat; wzrost o 2,2%
 *   w latach 2002–2024; 97 urodzeń, 110 zgonów (−13),
 * — POWIERZCHNIA: 6 498 ha (64,98 km²) wg gminy; polskawliczbach
 *   podaje 64,8 km². Lasy 4 340 ha wg gminy,
 * — SOŁECTWA (9, klaj.pl): Brzezie, Dąbrowa, Grodkowice, Gruszki,
 *   Kłaj, Łężkowice, Łysokanie, Szarów, Targowisko. ⚠️ polskawliczbach
 *   wymienia 11 MIEJSCOWOŚCI (dokłada osady leśne Poszyna, Poszynka,
 *   Ptakówka, a gubi Gruszki) — to nie są sołectwa,
 * — „LAS KŁAJ": pierwotna nazwa Puszczy Niepołomickiej, poświadczona
 *   w dokumentach od 1242 r.; obecna nazwa od staropolskiego
 *   „niepołomny" (klaj.pl),
 * — ŻUBRY W POSZYNIE: historia od 1925 r., formalnie od 1936
 *   (36 ha, 5 kwater, początkowo 3 sztuki); dziś ok. 30 żubrów,
 *   wyłącznie linia białowiesko-kaukaska; REZERWAT ŚCISŁY, BEZ
 *   MOŻLIWOŚCI ZWIEDZANIA (klaj.pl),
 * — PAŁAC ŻELEŃSKICH W GRODKOWICACH: 1902, proj. Teodor Talowski,
 *   w miejsce XVII-wiecznego dworu; majątek Żeleńskich od XVII w.;
 *   TU URODZIŁ SIĘ WŁADYSŁAW ŻELEŃSKI, kompozytor; jego syn TADEUSZ
 *   BOY-ŻELEŃSKI przyjeżdżał na wakacje. MAUZOLEUM ŻELEŃSKICH: 1903,
 *   przy kościele w BRZEZIU, proj. Władysław Ekielski,
 * — REZERWATY (klaj.pl): „Długosz Królewski" (1963, 24,2 ha),
 *   „Gibiel" (1961, 29,89 ha). ⚠️ „Dębina" wymieniana przez gminę,
 *   ale przypisywana też gminie Niepołomice — pomijam,
 * — DOJAZDY DO PRACY: wyjeżdża 1 294, przyjeżdża 375, saldo −919,
 * — GOSPODARKA: 1 428 podmiotów REGON; bezrobocie ok. 3,5%
 *   (wartość szacunkowa),
 * — KOMUNIKACJA: dwie stacje/przystanki kolejowe w gminie — KŁAJ
 *   i SZARÓW (klaj.pl); A4 i DK94 przez Targowisko (pośrednio przez
 *   wykaz ZDW: DW 963 to łącznik „Droga 4 /Targowisko/ – Droga 94
 *   /Targowisko/", 2,166 km),
 * — SĄSIEDZI (klaj.pl): Niepołomice, Drwinia, Gdów, Bochnia,
 * — DOŻYNKI: V Dożynki Sołeckie w Gruszkach, 15 sierpnia 2026, msza
 *   w kościele w Brzeziu, wieniec KGW Gruszki. To dożynki SOŁECKIE,
 * — OSP: 5 jednostek (Brzezie, Dąbrowa, Kłaj, Łężkowice, Szarów).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NUMERU LINII KOLEJOWEJ. Nie potwierdzony — piszę „stacja", nie
 *   podaję numeru,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza ministerialna
 *   niedostępna — nie piszę ani że jest, ani że go nie ma,
 * — NAZW PRACODAWCÓW I TERENÓW INWESTYCYJNYCH. Nie potwierdzone,
 * — REZERWATU „DĘBINA". Przypisywany i Kłajowi, i Niepołomicom,
 * — LICZBY OFIAR upamiętnianych pomnikiem w Szarowie. Nie potwierdzona
 *   — piszę o pomniku, nie o liczbach,
 * — GMINY WIELICZKA NA LIŚCIE SĄSIADÓW. Gmina jej nie wymienia.
 *
 * PUŁAPKI:
 * — SOŁECTW JEST 9, NIE 11. Poszyna, Poszynka i Ptakówka to osady
 *   leśne, nie sołectwa; Gruszki są sołectwem i bywają gubione,
 * — ŻUBRÓW NIE MOŻNA ZOBACZYĆ — rezerwat ścisły. Wysłanie kogoś
 *   „na żubry do Kłaja" to wysłanie go pod płot,
 * — ZAMEK KRÓLEWSKI JEST W NIEPOŁOMICACH, nie w Kłaju,
 * — ORGANEM WYKONAWCZYM JEST WÓJT, nie burmistrz (gmina wiejska),
 * — DOŻYNKI W GRUSZKACH SĄ SOŁECKIE, nie gminne,
 * — BRZEZIE, DĄBROWA, GRUSZKI, TARGOWISKO to nazwy w Polsce bardzo
 *   powtarzalne.
 */

export const KLAJ: CityContent = {
  slug: "klaj",
  h1: "Thermomix Kłaj – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kłaj — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Kłaj: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kłaj, Szarów, Targowisko, Brzezie, Grodkowice. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kłaj — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kłaj. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Kłaj przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dziewięciu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 9 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Kłaj – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Kłaju, jak w Szarowie, Targowisku, Brzeziu czy Grodkowicach.",
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
      heading: "Puszcza Niepołomicka nazywała się kiedyś Lasem Kłaj",
      paragraphs: [
        "To jest fakt, który przy tej gminie warto postawić na pierwszym miejscu, bo odwraca całą hierarchię. Puszcza, którą dziś wszyscy nazywają niepołomicką, w dokumentach od tysiąc dwieście czterdziestego drugiego roku występuje jako Las Kłaj. Obecna nazwa przyszła później, od staropolskiego słowa „niepołomny”.",
        "Czyli nie Kłaj leży koło Niepołomic. To puszcza kiedyś nazywała się od tej wsi.",
        "Druga rzecz, o której trzeba powiedzieć uczciwie, to żubry. W Poszynie, na polanie w puszczy, działa ośrodek ich hodowli — historia sięga tysiąc dziewięćset dwudziestego piątego roku, formalnie od trzydziestego szóstego, początkowo trzy sztuki na trzydziestu sześciu hektarach. Dziś jest ich około trzydziestu, wszystkie linii białowiesko-kaukaskiej. I tu uczciwość: to rezerwat ścisły. Żubrów nie można zobaczyć.",
        "Trzecia to Grodkowice. Stoi tam pałac zbudowany w tysiąc dziewięćset drugim roku według projektu Teodora Talowskiego, w miejscu starszego dworu Żeleńskich. W tej rodzinie urodził się kompozytor Władysław Żeleński, a jego syn — Tadeusz Boy-Żeleński — przyjeżdżał tu na wakacje. Mauzoleum rodziny, z tysiąc dziewięćset trzeciego roku, stoi przy kościele w Brzeziu.",
        "Mieszka tu jedenaście tysięcy dwieście osiemnaście osób na dziewięciu sołectwach. Nie na jedenastu — Poszyna, Poszynka i Ptakówka to osady leśne, nie sołectwa, i wiele zestawień je z sobą myli.",
        "Praktycznie gmina jest bardzo dobrze skomunikowana: przez Targowisko przechodzą autostrada i droga krajowa, a w samej gminie są dwie stacje kolejowe, w Kłaju i w Szarowie. Dla mnie to znaczy, że dojeżdżam tu szybko z każdej strony.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kłaj?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo: Kłaj, Szarów, Targowisko, Brzezie, Grodkowice, Łężkowice, Łysokanie, Dąbrowa albo Gruszki. Dopłaty za odległość nie ma w żadnym z nich.",
        "Terminy popołudniowe i sobotnie mam tu najczęściej, bo z gminy wyjeżdża do pracy o dziewięćset dziewiętnaście osób więcej, niż przyjeżdża. Ale mam też godziny przedpołudniowe w dni robocze, jeśli ktoś jest w domu z dzieckiem albo pracuje na zmiany.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kłaj"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Las, tory i dojazdy — dzień w domu pod puszczą",
      paragraphs: [
        "Gmina Kłaj ma około czterech tysięcy trzystu hektarów lasów. To znaczy grzyby, jagody i cały ten rytm końca lata, w którym z lasu przynosi się do domu więcej, niż się planowało. I znaczy też robotę: przebieranie, suszenie, marynowanie, mrożenie, słoiki.",
        "Przy grzybach i owocach leśnych urządzenie robi tę część, która najbardziej męczy: rozdrabnia, gotuje w stałej temperaturze i miesza samo. Marynata, sos grzybowy, zupa, powidła z leśnych owoców — to jest gotowanie, przy którym normalnie stoi się przy garnku i pilnuje, żeby nie przywarło.",
        "Czego nie zrobi: nie przebierze grzybów i nie obierze ich. Ta godzina zostaje po Waszej stronie i nie ma sensu obiecywać inaczej.",
        "Druga rzecz to dojazdy. Bilans wyjazdów do pracy jest tu ujemny o dziewięćset dziewiętnaście osób, a stacje kolejowe w Kłaju i Szarowie oznaczają, że wielu ludzi wsiada rano w pociąg do Krakowa i wraca po siedemnastej. W takim domu obiad wstawiony rano i gotowy o powrocie jest realną zmianą, a nie hasłem reklamowym.",
        "Trzecia to dzieci. Starsze dziecko, które wraca ze szkoły przed rodzicami, może samo wstawić obiad — przepis prowadzi krok po kroku i nie wymaga oceniania, czy już wrze. Przy młodszych najbardziej przydaje się to, że warzywa gotują się na parze i miksują w tym samym naczyniu.",
        "I żeby nie było niespodzianek: nie usmaży, nie upiecze i nie zastąpi piekarnika. Zabierze mieszanie, siekanie, wyrabianie i pilnowanie temperatury.",
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
    heading: "Kłaj i gotowanie — kuchnia spod lasu",
    paragraphs: [
      "Cztery tysiące trzysta hektarów lasu na sześćdziesięciu pięciu kilometrach kwadratowych gminy robią kuchni różnicę, którą widać we wrześniu. Grzyby, jagody, borówki — to jest ta część spiżarni, której się nie kupuje, tylko przynosi.",
      "Do tego zwykła kuchnia podkrakowskiej wsi: ziemniaki, kapusta, mąka, mleko, zupy gotowane w dużym garnku. Bez pretensji do regionalności, za to codzienna i sycąca.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie udało mi się zweryfikować, czy z tej gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych — baza była dla mnie niedostępna. Nie wymyślę więc żadnej „potrawy kłajowskiej”, żeby strona brzmiała bogaciej.",
      "To, co potwierdzone, to koła gospodyń przy pracy. Na piątych dożynkach sołeckich w Gruszkach, piętnastego sierpnia dwa tysiące dwudziestego szóstego roku, wieniec uplotło tamtejsze koło gospodyń, a msza odbyła się w kościele w Brzeziu. Parafie w gminie są cztery, jednostek straży pięć — to jest ta sieć, w której kuchnia bywa robotą zbiorową.",
      "Dla urządzenia najwięcej pracy jest przy przetworach i przy cieście. Sos grzybowy, zupa, marynaty, powidła, dżemy — rozdrabnianie i podgrzewanie w stałej temperaturze, z mieszaniem, którego nie trzeba już pilnować. Ciasto drożdżowe i mielenie maku to druga taka rzecz.",
      "Czego nie zrobi: nie przebierze grzybów, nie ulepi pierogów i nie upiecze. Wyrobi ciasto, zmieli farsz — reszta zostaje przy stole i przy piekarniku.",
    ],
  },

  districtsHeading: "Gdzie w gminie Kłaj dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewięciu sołectw: Kłaja, Szarowa, Targowiska, Brzezia, Grodkowic, Łężkowic, Łysokań, Dąbrowy i Gruszek. Dopłaty za odległość nie ma nigdzie.",
    "Sołectw jest dziewięć, choć w internecie krąży też liczba jedenaście — to dlatego, że część zestawień dolicza osady leśne Poszynę, Poszynkę i Ptakówkę, a gubi Gruszki. Osady to nie sołectwa, a Gruszki mają własne koło gospodyń i własne dożynki.",
    "Gmina leży na skraju Puszczy Niepołomickiej, w dolinie Raby, i zajmuje niecałe sześćdziesiąt pięć kilometrów kwadratowych. Mieszka tu jedenaście tysięcy dwieście osiemnaście osób.",
    "Dojazd mam tu wygodny z każdej strony: przez Targowisko przechodzą autostrada i droga krajowa, a w gminie są dwie stacje kolejowe — w Kłaju i w Szarowie. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Jeśli mieszkacie na przysiółku albo w zabudowie rozrzuconej przy lesie, napiszcie mi punkt orientacyjny w SMS-ie. Dojadę tak samo, tylko trafię szybciej.",
  ],
  districts: [
    "Kłaj",
    "Szarów",
    "Targowisko",
    "Brzezie",
    "Grodkowice",
    "Łężkowice",
    "Łysokanie",
    "Dąbrowa",
    "Gruszki",
  ],

  nearbyHeading: "Niepołomice, Bochnia, Gdów i Drwinia też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Kłaj graniczy z Niepołomicami, Drwinią, Gdowem i gminą Bochnia. Do żadnej z nich nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Kłaj, czy już Niepołomice albo Bochnia — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Niepołomice",
    "Bochnia",
    "Gdów",
    "Drwinia",
    "Wieliczka",
    "Rzezawa",
    "Kraków",
  ],

  about: blokOMnie("do gminy Kłaj", "w powiecie wielickim"),

  faq: [
    {
      question: "Przynosimy z lasu grzyby i jagody. Czy to się przyda?",
      answer:
        "Przy przetworach bardzo. Sos grzybowy, zupa, marynaty, dżemy i powidła to rozdrabnianie plus podgrzewanie w stałej temperaturze z ciągłym mieszaniem — czyli dokładnie to, przy czym normalnie stoi się przy garnku, żeby nie przywarło. Nie przebierze natomiast grzybów ani ich nie obierze; ta godzina zostaje po Waszej stronie i nie będę obiecywać inaczej.",
    },
    ...faqWspolne("w gminie Kłaj"),
    {
      question: "Mieszkam w Gruszkach. Dojedziesz tam tak samo?",
      answer:
        "Dojadę i bez dopłaty. Obsługuję wszystkie dziewięć sołectw gminy. Dopytuję o Gruszki celowo, bo część zestawień w internecie je gubi, dokładając za to osady leśne — a Gruszki są pełnoprawnym sołectwem, z własnym kołem gospodyń i własnymi dożynkami.",
    },
    {
      question: "Dojeżdżamy pociągiem do Krakowa. Kiedy się umawiacie?",
      answer:
        "Najczęściej wieczorem i w soboty — z tej gminy wyjeżdża do pracy o dziewięćset dziewiętnaście osób więcej, niż przyjeżdża, i doskonale wiem, jak wygląda powrót po siedemnastej. Mam też terminy przedpołudniowe w dni robocze. Prezentacja trwa około dwóch godzin.",
    },
  ],

  geo: { lat: 49.9925, lng: 20.299 },
};
