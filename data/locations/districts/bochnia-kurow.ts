import type { DistrictContent } from "./typy";

/**
 * KURÓW — Osiedle nr 10 miasta Bochnia. Dawna wieś rycerska,
 * samodzielna miejscowość jeszcze w 1972 r.
 *
 * OŚ STRONY: NAJWYŻEJ POŁOŻONA CZĘŚĆ BOCHNI — 269 m n.p.m. — I GNIAZDO
 * RODU, Z KTÓREGO WYSZEDŁ ARCYBISKUP GNIEŹNIEŃSKI. Wysokość jest
 * jednocześnie faktem tożsamościowym i informacją operacyjną: dojeżdża
 * się pod górę. 20 ULIC — największy wykaz z badanych osiedli.
 *
 * ⚠️⚠️ ROZDZIELENIE OD KRZĘCZKOWA-ŁYCHOWA: tam też jest wzniesienie
 * i panorama, ale osią jest BRAK KOMUNIKACJI MIEJSKIEJ i to, że jest
 * to największe osiedle domów jednorodzinnych. Tu osią jest WYSOKOŚĆ
 * plus HISTORIA RYCERSKA — a autobusy akurat są, i to dwie linie.
 * ⚠️ ROZDZIELENIE OD DOŁUSZYC: tam dwór i własność magnacka
 * (Kmitowie, Lubomirscy). Tu ród RYCERSKI i kariera kościelna.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ PIERWSZE WZMIANKI 1308 I 1310 R., właścicielem rycerz
 *   Siestrzemiła. Ok. 1370 r. wieś nabywa rycerz KLEMENS
 *   Z DROŻEJOWIC, zakłada tu gniazdo rodowe i przyjmuje nazwisko
 *   KUROWSKI. Jego najstarszy syn to MIKOŁAJ KUROWSKI — późniejszy
 *   ARCYBISKUP GNIEŹNIEŃSKI. Ród urósł dzięki położeniu majątku przy
 *   szlaku handlowym na Węgry (mojabochnia.pl),
 * — Atlas Historyczny Miast Polskich potwierdza: Kurów wzmiankowany
 *   od początku XIV w. jako WIEŚ RYCERSKA o wyraźnym układzie
 *   lokacyjnym,
 * — ⚠️ NAZWA WSI JEST WCZEŚNIEJSZA NIŻ NAZWISKO — Klemens „przyjął
 *   nazwisko Kurowski” po nabyciu wsi, nie odwrotnie. Głębsza
 *   etymologia NIE USTALONA,
 * — SAMODZIELNA MIEJSCOWOŚĆ AŻ DO 1973 R.; włączona do Bochni
 *   1 stycznia 1973, równolegle z budową zakładu Stalprodukt
 *   (Studium uwarunkowań miasta),
 * — ⭐ WYSOKOŚĆ 269 m n.p.m. — najwyżej położona z badanych części
 *   miasta. Ok. 2,5 km od bazyliki św. Mikołaja, ok. 3 km od kopalni
 *   soli, ok. 3,5 km od dworca PKP (mapcarta),
 * — KOMUNIKACJA: DWIE LINIE. Linia 9 „Dworzec PKP – Plac Pułaskiego –
 *   Kurów – Partyzantów” (przystanki m.in. ul. Kurów, Wincentego Witosa,
 *   Centrum; kursuje w dni robocze oraz niedziele i święta) oraz
 *   linia 3 „Dworzec PKP – Plac Pułaskiego – Krzyżaki – Stalprodukt”,
 * — 20 ULIC (statut): prof. Franciszka Bujaka, Dąbrówki, Władysława
 *   Grabskiego, Karola Frycza, Kurów, Krzyżaki, Wacława Korty,
 *   Eugeniusza Kwiatkowskiego, Tadeusza Lecha, Ferdynanda Maissa,
 *   Romana Niwickiego, Olszynowa, Przysieki, Macieja Rataja, Władysława
 *   Skoczylasa, Serafińskich, Spiska, Urszuli Wińskiej, Wincentego
 *   Witosa, Michała Żułkiewicza,
 * — FILIA NR 3 Powiatowej i Miejskiej Biblioteki Publicznej przy
 *   ul. Kurów — służy jako miejsce zebrań osiedlowych. ŚWIETLICA
 *   OSIEDLOWA. Plac publiczny przy ul. Kurów z budżetu obywatelskiego,
 * — MIEJSCOWY PLAN ZAGOSPODAROWANIA nosi nazwę „WITOSA”,
 * — ZABUDOWA: jednorodzinna w układzie dawnej wsi. Studium klasyfikuje
 *   tereny dawnych wsi jako „zabudowę jednorodzinną ekstensywną
 *   (układ dawnych wsi – zabudowa pozbawiona kompozycji przestrzennej)”.
 *   Trwa nowe budownictwo (domy w stanie deweloperskim, „działki
 *   widokowe”). Lata zabudowy NIE USTALONE,
 * — POBOCZA: projekt budżetu obywatelskiego „utwardzenie pobocza
 *   drogowego ul. Krzyżaki przy skrzyżowaniu z ulicą Kurów” wskazuje
 *   na NIEUTWARDZONE POBOCZA, czyli drogi wiejskiego typu.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KOŚCIOŁA I PARAFII NA KUROWIE. NIE USTALONO, czy istnieją.
 *   Wyszukiwania trafiały na Kurów w innych województwach.
 *   NIE TWIERDZIĆ, że jest tu kościół,
 * — SZKOŁY PODSTAWOWEJ. Nie ustalono,
 * — GŁĘBSZEJ ETYMOLOGII NAZWY. Brak opracowania,
 * — SZEROKOŚCI ULIC. Nie ustalona z twardego źródła; w treści wyłącznie
 *   to, co wynika z projektu utwardzenia pobocza.
 *
 * PUŁAPKI:
 * — ⚠️ „Pagórek” sąsiaduje z Kurowem jako nazwa potoczna, ale ULICA
 *   Pagórek należy do osiedla DOŁUSZYCE. Nie mylić,
 * — ⚠️ Kurów NIE jest sołectwem gminy wiejskiej Bochnia — sprawdzone
 *   na pełnej liście 31 sołectw.
 */
export const BOCHNIA_KUROW: DistrictContent = {
  slug: "bochnia-kurow",
  urlPath: "/thermomix/bochnia/kurow",
  nazwa: "Kurów",
  miejscownik: "Kurowie",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Kurów — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Kurów Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na Kurowie w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Kurów, Witosa, Krzyżaki, Bujaka, Rataja. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy na całym Kurowie: Kurów, Witosa, Krzyżaki, Bujaka, Rataja, Spiska i dalej — to dwadzieścia ulic, więc przyda się numer domu. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Kurów",
    "Wincentego Witosa",
    "Krzyżaki",
    "prof. Bujaka",
    "Macieja Rataja",
    "Spiska",
    "Dąbrówki",
    "Grabskiego",
    "Kwiatkowskiego",
    "Olszynowa",
    "Przysieki",
    "Serafińskich",
    "Karola Frycza",
    "Tadeusza Lecha",
  ],

  sections: [
    {
      id: "wysokosc",
      heading: "Najwyżej położona część Bochni",
      paragraphs: [
        "Kurów leży dwieście sześćdziesiąt dziewięć metrów nad poziomem morza i jest najwyżej położoną częścią miasta. Do bazyliki świętego Mikołaja jest stąd około dwóch i pół kilometra, do kopalni trzy, a do dworca kolejowego trzy i pół — ale mierzone w poziomie, bo w pionie różnica też jest wyraźna.",
        "Dla mnie to informacja czysto praktyczna. Dojeżdża się tu pod górę, drogi mają miejscami nieutwardzone pobocza, a ulice są długie. Nic z tego nie stanowi problemu, dopóki wiem, dokąd jadę — dlatego przy umawianiu proszę o numer domu, nie o samą nazwę ulicy. Kurów ma ich dwadzieścia, najwięcej z bocheńskich osiedli.",
        "Wbrew temu, czego można by się spodziewać po peryferiach na wzgórzu, komunikacja miejska tu dojeżdża, i to dwiema liniami. Dziewiątka jedzie z dworca przez plac Pułaskiego na Kurów, z przystankami przy Witosa i w centrum osiedla, i kursuje także w niedziele i święta. Trójka prowadzi przez Krzyżaki do Stalproduktu.",
        "Strefy płatnego parkowania tu nie ma, a zabudowa to domy, więc pod większość adresów podjeżdża się pod samą furtkę.",
      ],
    },
    {
      id: "historia",
      heading: "Wieś rycerska, z której wyszedł arcybiskup gnieźnieński",
      paragraphs: [
        "Kurów pojawia się w dokumentach w tysiąc trzysta ósmym i tysiąc trzysta dziesiątym roku, a jego właścicielem jest wtedy rycerz Siestrzemiła. Około tysiąc trzysta siedemdziesiątego wieś kupuje rycerz Klemens z Drożejowic, zakłada tu gniazdo rodowe i przyjmuje nazwisko Kurowski — od nazwy wsi, nie odwrotnie.",
        "Ród szybko urósł, bo majątek leżał przy szlaku handlowym na Węgry. Najstarszy syn Klemensa, Mikołaj Kurowski, został arcybiskupem gnieźnieńskim — czyli prymasem. Trudno o mocniejszy dowód, że to nie była zwykła podmiejska wieś.",
        "Atlas Historyczny Miast Polskich opisuje Kurów jako wieś rycerską o wyraźnym układzie lokacyjnym i ten układ widać do dziś: zabudowa rozłożona luźno wzdłuż dróg, bez zwartych ciągów, z ogrodami między domami.",
        "Samodzielną miejscowością Kurów pozostał aż do tysiąc dziewięćset siedemdziesiątego drugiego roku. Do Bochni wszedł pierwszego stycznia siedemdziesiątego trzeciego, razem z Chodenicami, Kolanowem i Dołuszycami — sześćset sześćdziesiąt pięć lat po pierwszej wzmiance.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Domy, w których gotuje się dla większej liczby osób",
      paragraphs: [
        "Na Kurowie mieszka się w domach i to zmienia niemal wszystko w porównaniu ze spotkaniem w bloku. Nie pada tu pytanie o miejsce na blacie, bo blat jest długi. Nie pytam też zwykle o obwód elektryczny, bo instalacje są nowsze niż w zabudowie z lat sześćdziesiątych.",
        "Zamiast tego rozmawiamy o skali. W domu przy stole siada zwykle więcej osób, a często mieszkają tu dwa pokolenia obok siebie. Gotowanie na sześć czy osiem porcji to inna praca niż na dwie — i to jest dokładnie ta sytuacja, w której urządzenie daje najwięcej, bo mieszanie, tarcie i pilnowanie garnka nie rosną razem z liczbą porcji.",
        "Druga rzecz to nowe budownictwo, którego jest tu sporo: domy w stanie deweloperskim i działki z widokiem. Kiedy ktoś urządza kuchnię od zera, pytanie brzmi inaczej — nie „gdzie to postawić”, tylko „ile sprzętów w ogóle muszę kupić”. Jedno urządzenie zastępuje blender, malakser i mikser, więc odpowiedź bywa dla ludzi zaskakująca.",
        "Trzecia jest sezonowa. Tam, gdzie są ogrody, jesienią zawsze coś trzeba przerobić — i wtedy najbardziej liczy się to, że powidła czy przecier mieszają się same, przy ustawionej temperaturze, zamiast przywiązywać człowieka do garnka na godzinę.",
      ],
      bullets: [
        "dwadzieścia ulic — przy umawianiu przyda się numer domu",
        "dwie linie autobusowe: dziewiątka i trójka",
        "w domu rozmawiamy o skali, nie o miejscu na blacie",
      ],
    },
  ],

  faq: [
    {
      question: "Kurów jest daleko od centrum i pod górę. Na pewno dojedziesz?",
      answer:
        "Na pewno i bez dopłaty. To najwyżej położona część Bochni, dwieście sześćdziesiąt dziewięć metrów nad poziomem morza, jakieś dwa i pół kilometra od bazyliki — dla mnie to kilka minut jazdy. Proszę tylko o numer domu, bo Kurów ma dwadzieścia ulic i są długie. Strefy płatnego parkowania tu nie ma, więc zwykle staję pod furtką.",
    },
    {
      question: "Urządzam kuchnię w nowym domu. Co warto kupić, a czego nie?",
      answer:
        "To pytanie pada na Kurowie często, bo powstaje tu sporo nowych domów. Odpowiadam tak: jedno urządzenie zastępuje blender kielichowy, malakser, mikser i wagę kuchenną, więc przy planowaniu wyposażenia warto policzyć to razem, a nie osobno. Nie zastąpi za to piekarnika ani patelni — chleba nie upiecze i kotleta nie usmaży, i nigdy nie mówię inaczej. Chętnie przejdę przez to na prezentacji, zanim cokolwiek kupisz.",
    },
  ],

  geo: { lat: 49.9481, lng: 20.4478 },
};
