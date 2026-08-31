import type { DistrictContent } from "./typy";

/**
 * DOŁUSZYCE — Osiedle nr 8 miasta Bochnia. Dawna wieś, w granicach
 * miasta od 1 stycznia 1973 r. SZEŚĆ ULIC — najmniejszy wykaz spośród
 * dawnych wsi.
 *
 * OŚ STRONY: TRZYSTA LAT POD PANAMI NA WIŚNICZU. Od 1552 r. własność
 * Kmitów, Barzów, Lubomirskich, Potockich i Sanguszków. INWENTARZ
 * Z 1654 R. opisuje dwór: „dom wielki”, drewniany, podpiwniczony,
 * z dwoma alkierzami, otoczony parkanem, KOLOROWE PIECE KAFLOWE
 * i OKNA Z WENECKIEGO SZKŁA, zabudowania folwarczne, sad i ogród.
 *
 * ⚠️⚠️ ROZDZIELENIE OD POZOSTAŁYCH DAWNYCH WSI: Chodenice mają
 * wodociąg, Kolanów las i solanki, Kurów ród rycerski i wysokość,
 * Smyków autostradę. Tu tezą jest DWÓR I WŁASNOŚĆ MAGNACKA.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (bochenskiedzieje.pl, statut miasta, ZDW):
 * — ⭐ PIERWSZA WZMIANKA 1242 R. — dokument księcia KONRADA
 *   MAZOWIECKIEGO zatwierdzający majętności klasztoru BENEDYKTYNEK
 *   W STANIĄTKACH, w tym część Dołuszyc. Osada powstała prawdopodobnie
 *   na początku XIII w. NAZWA OD IMIENIA DOŁUSZ/DOŁUSZA,
 * — WŁAŚCICIELE: benedyktynki ze Staniątek i cystersi z Wąchocka →
 *   1552 r. klasztor wąchocki nadaje Dołuszyce marszałkowi PIOTROWI
 *   KMICIE Z WIŚNICZA → przez ponad 300 lat własność panów na Wiśniczu
 *   (Kmitowie, Barzowie, Lubomirscy, Potoccy, Sanguszkowie),
 * — ⭐ INWENTARZ Z 1654 R.: „dom wielki”, drewniany, podpiwniczony,
 *   z dwoma alkierzami, otoczony parkanem, kolorowe piece kaflowe,
 *   okna z weneckiego szkła, zabudowania folwarczne, sad i ogród,
 * — W GRANICACH BOCHNI OD 1 STYCZNIA 1973,
 * — ⭐ OSP DOŁUSZYCE: założona w 1928 r. Z INICJATYWY JADWIGI RYDLOWEJ,
 *   która w 1931 r. UFUNDOWAŁA PIERWSZĄ SIKAWKĘ — sikawka do dziś stoi
 *   w remizie, wzniesionej na gruncie podarowanym nieodpłatnie.
 *   Remiza z początku XX w.,
 * — SZKOŁA LUDOWA OD 1903 R., kierownik Stanisław Janiga do 1925 r.;
 *   w 1911 r. założono wypożyczalnię książek. Dziś dzieci należą
 *   do obwodu SP nr 5 przy ul. Kazimierza Wielkiego — POZA osiedlem,
 * — SZEŚĆ ULIC (statut): Dębnik, Dołuszycka (od obwodnicy), Pagórek,
 *   Lucjana Rydla, Strzelecka, Wiśnicka (od obwodnicy do granic miasta),
 * — UL. WIŚNICKA TO DROGA WOJEWÓDZKA NR 965 (Limanowa – Nowy Wiśnicz –
 *   Bochnia – Świniary), zarządzana przez ZDW w Krakowie. W 2020 r.
 *   przebudowywana z dwoma lewoskrętami (Witosa, Strzelecka), zatokami
 *   autobusowymi, przejściami i oświetleniem,
 * — LINIA 9 BZK: przystanki Dołuszyce I, II i III, dalej ul. Rydla-
 *   -Świetlica i ul. Rydla-Magdalenka. Nowy przystanek na Dołuszyckiej
 *   przy skrzyżowaniu ze Strzelecką,
 * — ŚWIETLICA PRZY UL. RYDLA: w maju 2026 podpisano umowę na IV etap
 *   modernizacji za 185 000 zł (instalacje, kocioł, c.o., klimatyzacja,
 *   tynki, posadzki), termin koniec września 2026,
 * — ŚCIEŻKA: projekt z budżetu obywatelskiego 2020 — ok. 250 m ścieżki
 *   rowerowo-spacerowej WZDŁUŻ RZEKI GRÓBKI, „między rzeką Gróbką
 *   a lasem”, łączącej Wiśnicką przez Rydla ze ścieżką w stronę
 *   Pogwizdowa i Kolanowa.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ZWIĄZKU LUCJANA RYDLA-POETY Z TĄ WSIĄ. ⚠️ Ulica nosi jego imię,
 *   a Jadwiga Rydlowa fundowała straż — ale zakresu majątku Rydlów
 *   i pokrewieństwa NIE USTALONO. Jedno słabe źródło twierdzi, że poeta
 *   „często odwiedzał wieś”; NIE UŻYTE,
 * — STRUKTURY ZABUDOWY. NIE USTALONA. W treści wyłącznie to, co wynika
 *   z układu: sześć ulic, brak śladu zabudowy wielorodzinnej.
 *   NIE PISAĆ „same domy jednorodzinne” jako faktu,
 * — ZAKŁADU BOLARUS przy ul. Wiśnickiej 12. Przystanek „ul. Wiśnicka-
 *   -Bolarus” jest PRZED Dołuszycami I — zakład leży poza osiedlem,
 * — ZNACZENIA NAZWY PRZYSTANKU „MAGDALENKA”. Nie ustalone.
 *
 * PUŁAPKI:
 * — ⚠️ Osiedle zaczyna się DOPIERO ZA OBWODNICĄ — tak definiuje je
 *   statut (Dołuszycka i Wiśnicka liczone od obwodnicy). Adresy przed
 *   obwodnicą to inne osiedla,
 * — ⚠️ Pagórek to ulica tego osiedla, ale funkcjonuje też jako nazwa
 *   potoczna części miasta w rejonie Kurowa. Nie mylić.
 */
export const BOCHNIA_DOLUSZYCE: DistrictContent = {
  slug: "bochnia-doluszyce",
  urlPath: "/thermomix/bochnia/doluszyce",
  nazwa: "Dołuszyce",
  miejscownik: "Dołuszycach",
  przyimek: "w",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Dołuszyce — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Dołuszyce Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix w Dołuszycach w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Dołuszycka, Rydla, Strzelecka, Wiśnicka, Dębnik. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy w całych Dołuszycach: Dołuszycka, Rydla, Strzelecka, Dębnik, Pagórek i Wiśnicka za obwodnicą. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "Dołuszycka",
    "Lucjana Rydla",
    "Strzelecka",
    "Dębnik",
    "Pagórek",
    "Wiśnicka",
  ],

  sections: [
    {
      id: "dwor",
      heading: "Dwór z weneckimi szybami i kolorowymi piecami",
      paragraphs: [
        "Zachował się inwentarz Dołuszyc z tysiąc sześćset pięćdziesiątego czwartego roku i czyta się go jak opis mieszkania na sprzedaż. Stał tu dom wielki, drewniany, podpiwniczony, z dwoma alkierzami, otoczony parkanem. W środku kolorowe piece kaflowe, a w oknach — szkło weneckie. Do tego zabudowania folwarczne, sad i ogród.",
        "Nie był to dwór byle czyj. Od tysiąc pięćset pięćdziesiątego drugiego roku, kiedy klasztor cystersów z Wąchocka nadał Dołuszyce marszałkowi Piotrowi Kmicie z Wiśnicza, wieś przez ponad trzysta lat należała do panów na Wiśniczu: Kmitów, Barzów, Lubomirskich, Potockich i Sanguszków.",
        "Jeszcze wcześniej byli tu zakonnicy. Pierwsza wzmianka pochodzi z tysiąc dwieście czterdziestego drugiego roku, z dokumentu księcia Konrada Mazowieckiego, który zatwierdzał majętności benedyktynek ze Staniątek — a wśród nich część Dołuszyc. Sama nazwa wywodzi się od imienia Dołusz.",
        "Do Bochni Dołuszyce weszły pierwszego stycznia tysiąc dziewięćset siedemdziesiątego trzeciego roku, razem z Chodenicami, Kolanowem i Kurowem. Siedemset trzydzieści jeden lat po pierwszej wzmiance.",
      ],
    },
    {
      id: "sikawka",
      heading: "Sikawka pani Rydlowej stoi w remizie do dziś",
      paragraphs: [
        "Najładniejsza tutejsza historia jest znacznie młodsza od dworu. Ochotnicza straż pożarna w Dołuszycach powstała w tysiąc dziewięćset dwudziestym ósmym roku z inicjatywy Jadwigi Rydlowej. Trzy lata później ta sama osoba ufundowała jednostce pierwszą sikawkę — i ta sikawka stoi w remizie do dziś. Sama remiza, z początku dwudziestego wieku, stanęła na gruncie podarowanym nieodpłatnie.",
        "Głównej ulicy osiedla patronuje Lucjan Rydel. Uczciwie dodam, że jak dokładnie Rydlowie z Dołuszyc mieli się do poety z Bronowic, nie udało mi się ustalić — i wolę tego nie zgadywać, choć nazwisko kusi.",
        "Szkoła ludowa działała tu od tysiąc dziewięćset trzeciego roku, a od tysiąc dziewięćset jedenastego także wypożyczalnia książek. Dziś szkoły na osiedlu nie ma — dzieci należą do obwodu podstawówki przy Kazimierza Wielkiego, czyli po drugiej stronie miasta.",
        "Życie osiedla toczy się natomiast wokół świetlicy przy ulicy Rydla, którą właśnie remontuje się czwarty raz z rzędu: instalacje, ogrzewanie, klimatyzacja, tynki i posadzki. Autobus ma tu nawet przystanek o nazwie „ulica Rydla — Świetlica”.",
      ],
    },
    {
      id: "dojazd",
      heading: "Sześć ulic, wszystkie za obwodnicą",
      paragraphs: [
        "Dołuszyce to najmniejsze pod względem liczby ulic z bocheńskich osiedli dawnych wsi: Dołuszycka, Rydla, Strzelecka, Dębnik, Pagórek i Wiśnicka. Statut miasta definiuje je dość nietypowo — osiedle zaczyna się dopiero za obwodnicą i sięga granicy miasta.",
        "Wiśnicka to droga wojewódzka numer dziewięćset sześćdziesiąt pięć, prowadząca z Bochni na Nowy Wiśnicz i dalej w stronę Limanowej. Kilka lat temu przebudowano ją z dwoma lewoskrętami, zatokami autobusowymi i oświetleniem, więc dojazd jest tu wygodniejszy, niż bywał.",
        "Autobus dziewiątka zatrzymuje się kolejno jako Dołuszyce pierwsze, drugie i trzecie, a potem skręca w Rydla, do świetlicy. Dla mnie to najprostszy sposób opisania trasy — kiedy mówisz, przy którym z tych przystanków mieszkasz, wiem dokładnie, gdzie jechać.",
        "Strefy płatnego parkowania tu nie ma. Osiedle leży między rzeką Gróbką a lasem, w stronę Pogwizdowa i Kolanowa, więc jest tu cicho i zwykle da się podjechać pod dom. Proszę tylko o numer, bo ulice są długie.",
      ],
      bullets: [
        "osiedle zaczyna się za obwodnicą",
        "Wiśnicka to droga wojewódzka na Nowy Wiśnicz",
        "autobus dziewiątka: Dołuszyce pierwsze, drugie, trzecie",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam przy Wiśnickiej. To już Dołuszyce czy jeszcze centrum?",
      answer:
        "Granicę wyznacza obwodnica. Ulica Wiśnicka należy do Dołuszyc dopiero od obwodnicy w stronę granicy miasta; przed obwodnicą to już inne osiedle. Dla dojazdu nie ma to najmniejszego znaczenia, bo jeżdżę na oba bez dopłaty — pytam tylko o numer domu, żeby trafić za pierwszym razem.",
    },
    {
      question: "Jesteśmy tu trochę na uboczu. Naprawdę przyjedziesz bez dopłaty?",
      answer:
        "Naprawdę i nie ma w tym żadnego haczyka. Dojazd wliczam w swoją pracę, tak samo do Dołuszyc, jak na Rynek w Bochni czy do Krakowa. Osiedle leży między Gróbką a lasem, przy drodze na Nowy Wiśnicz, i dojeżdża się tu bez problemu. Spotkanie trwa około dwóch godzin i możemy je ustawić na wieczór albo weekend, jak Ci wygodniej.",
    },
  ],

  geo: { lat: 49.9508, lng: 20.4244 },
};
