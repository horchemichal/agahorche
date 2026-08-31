import type { DistrictContent } from "./typy";

/**
 * SŁONECZNE — Osiedle nr 2 miasta Bochnia.
 *
 * OŚ STRONY: TU STANĘŁY PIERWSZE BLOKI W BOCHNI. Zasób z lat 1962–1973,
 * najstarszy w mieście; blok przy Poniatowskiego z 1962 r. to pierwszy
 * budynek spółdzielni. ŚREDNIA POWIERZCHNIA MIESZKANIA 41,2 m²,
 * najmniejsze 38,2 m² — przy średniej miejskiej 76 m². To jest kuchnia
 * osobna, wąska, z jednym blatem i instalacją z epoki, a więc dokładnie
 * ten scenariusz, w którym trzeba zapytać o obwód przed spotkaniem.
 *
 * ⚠️⚠️ ROZDZIELENIE OD WINDAKIEWICZA. Metraż jest tam prawie identyczny
 * (41,7 kontra 41,2 m²) — NIE BUDOWAĆ na metrażu jako różnicy, bo
 * powstaną dwie wersje tego samego tekstu. Tu tezą jest WIEK i to, że
 * były pierwsze; tam — że całe osiedle zamknięto w trzy lata.
 * ⚠️ Druga warstwa różnicująca jest geograficzna: Słoneczne leży przy
 * TORACH I DWORCU, w staromiejskiej parafii św. Mikołaja, i jako jedyne
 * z trzech osiedli blokowych dotyka strefy płatnego parkowania.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (rejestr budynków SM Bochnia):
 * — ⭐ 14 budynków, 603 mieszkania, 24 838 m², LATA 1962–1973.
 *   Kolejność: Poniatowskiego 46 (1962), 44 i 52 (1963), 50 (1964) —
 *   po 18 mieszkań, 1 klatka; św. Leonarda 22 (1965); Kolejowa 3a
 *   (1968); św. Leonarda 61 (1968, 90 mieszkań, 6 klatek); 59 (1969);
 *   63, 65, 67 (1970); 69 (1972, 90 mieszkań, 6 klatek); Pod Lipką 5
 *   (1972); św. Leonarda 53 (1973),
 * — ⭐ ŚREDNIA POWIERZCHNIA 41,2 m² (wyliczenie z rejestru).
 *   Najmniejsze: Pod Lipką 5 — 38,2 m². Średnia miejska: 76 m²,
 * — SPÓŁDZIELNIA MIESZKANIOWA W BOCHNI: zebranie założycielskie
 *   4 kwietnia 1960, rejestracja sądowa październik 1962. Zasób
 *   Słonecznego to jej pierwsza dekada,
 * — PARAFIA ŚW. MIKOŁAJA BISKUPA (pl. św. Kingi) — pradawna parafia
 *   miasta; program kolędy obejmuje św. Leonarda, Poniatowskiego,
 *   Kolejową, Pod Lipką i Więźniów Oświęcimia. To JEDYNE z trzech
 *   osiedli blokowych w tej parafii; pozostałe dwa należą do parafii
 *   św. Pawła, erygowanej w 1984 r.,
 * — DWORZEC PKP: ul. Kolejowa należy do osiedla,
 * — SKLEPY: Lidl przy św. Leonarda 32 — wewnątrz osiedla; Biedronka
 *   i Pepco przy Krzeczowskiej, tuż przy Pod Lipką i Poniatowskiego,
 * — ⚠️ UL. TRUDNA należy administracyjnie do os. Słoneczne i JEST
 *   w strefie płatnego parkowania (pon.–pt. 8:00–17:00). Ulice blokowe
 *   — św. Leonarda, Poniatowskiego, Kolejowa, Pod Lipką — NIE SĄ,
 * — ZABYTKOWA KAPLICZKA przy św. Leonarda 2,
 * — ŻADNA Z PIĘCIU BOCHEŃSKICH SZKÓŁ PODSTAWOWYCH nie ma adresu
 *   na ulicach tego osiedla.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ULICY WIĘŹNIÓW OŚWIĘCIMIA I SPORU O JEJ NAZWĘ Z 2014 R.
 *   (129 zidentyfikowanych ofiar Auschwitz z ziemi bocheńskiej).
 *   Fakt potwierdzony, ale strona sprzedażowa nie jest na to miejscem.
 *   ŚWIADOMIE POMINIĘTE, zgodnie z linią przyjętą przy Brzezince,
 *   Jawiszowicach i pomniku na Uzborni,
 * — LICZBY PIĘTER I WIND. Rejestr SM podaje rok, mieszkania i klatki,
 *   nie kondygnacje. Jedno ogłoszenie mówi o czterech piętrach przy
 *   św. Leonarda — za słabe źródło. NIE PODAWAĆ,
 * — TECHNOLOGII (wielka płyta / cegła). Brak źródła urzędowego,
 * — POCHODZENIA NAZWY „SŁONECZNE”. Nie ustalone.
 *
 * PUŁAPKI:
 * — ⚠️ NIE pisać, że osiedle jest poza strefą płatnego parkowania
 *   w całości — ul. Trudna jest w strefie.
 */
export const BOCHNIA_SLONECZNE: DistrictContent = {
  slug: "bochnia-sloneczne",
  urlPath: "/thermomix/bochnia/sloneczne",
  nazwa: "Słoneczne",
  miejscownik: "Słonecznym",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix osiedle Słoneczne — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Słoneczne Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na osiedlu Słonecznym w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — św. Leonarda, Poniatowskiego, Pod Lipką, Kolejowa. Tel. 517 185 691.",

  lead:
    "Dojeżdżam pod bloki przy świętego Leonarda, Poniatowskiego, Pod Lipką i Kolejowej. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni — także w tej najmniejszej, bo takich jest tu najwięcej. Prezentacja jest bezpłatna.",

  osiedla: [
    "św. Leonarda",
    "Poniatowskiego",
    "Pod Lipką",
    "Kolejowa",
    "Więźniów Oświęcimia",
    "Trudna",
  ],

  sections: [
    {
      id: "pierwsze-bloki",
      heading: "Tu stanął pierwszy blok w mieście",
      paragraphs: [
        "Bocheńska spółdzielnia mieszkaniowa zaczęła się w tysiąc dziewięćset sześćdziesiątym roku, a jej pierwszy blok stanął dwa lata później przy ulicy Poniatowskiego. Osiemnaście mieszkań, jedna klatka. Potem, przez kolejne jedenaście lat, dobudowano trzynaście następnych — najpierw resztę Poniatowskiego, potem świętego Leonarda, Kolejową i Pod Lipką. Ostatni jest z tysiąc dziewięćset siedemdziesiątego trzeciego.",
        "To znaczy, że Słoneczne jest najstarszym osiedlem blokowym w Bochni i jedynym, którego cały zasób powstał jeszcze w latach sześćdziesiątych i na początku siedemdziesiątych. Kiedy na Niepodległości wbijano pierwszą łopatę, tutaj ludzie mieszkali już od piętnastu lat.",
        "Dla mnie to nie jest ciekawostka, tylko informacja o tym, co zastanę za drzwiami. Przeciętne mieszkanie ma tu czterdzieści jeden metrów, a najmniejsze bloki schodzą do trzydziestu ośmiu — przy średniej dla całego miasta wynoszącej siedemdziesiąt sześć. Kuchnia jest więc osobna, wąska i ma jeden blat, na którym zwykle stoi już czajnik.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Czterdzieści metrów to nie przeszkoda, ale zmienia rozmowę",
      paragraphs: [
        "W kuchni tej wielkości pierwsze pytanie brzmi zawsze tak samo: gdzie to postawić. Odpowiedź jest prostsza, niż się wydaje — urządzenie zajmuje mniej więcej tyle miejsca co czajnik z podstawką, a zastępuje blender, malakser i mikser. U większości moich klientek po zakupie z blatu coś znika, a nie przybywa.",
        "Druga rzecz dotyczy prądu i akurat tutaj pytam o to zawsze. Urządzenie pobiera około tysiąca pięciuset watów. W blokach z lat sześćdziesiątych i siedemdziesiątych bywa, że kuchnia siedzi na jednym obwodzie z resztą mieszkania, więc nie uruchamiam go równocześnie z piekarnikiem i czajnikiem. Nigdy nie było z tego problemu, ale wolę wiedzieć wcześniej niż w połowie gotowania.",
        "Trzecia jest o zmywaniu i to jest argument, który w małej kuchni przekonuje najbardziej. Zupa, sos i krem powstają w jednym naczyniu, bez przelewania gorącego do blendera i z powrotem. Przy zlewie, przy którym ledwo mieści się suszarka, to realna różnica każdego wieczoru.",
        "I czwarta, praktyczna przy mniejszym gospodarstwie: gotowanie na dwie osoby ma tu sens tak samo jak na sześć. Zupa na dwa dni zamiast garnka na tydzień, który pod koniec już nikogo nie cieszy — wysiłek jest ten sam, czyli żaden.",
      ],
      bullets: [
        "urządzenie zajmuje tyle co czajnik z podstawką",
        "w blokach z lat sześćdziesiątych pytam o obwód elektryczny",
        "zupa i krem w jednym naczyniu, bez przelewania",
      ],
    },
    {
      id: "dojazd",
      heading: "Osiedle przy torach i przy starym mieście",
      paragraphs: [
        "Słoneczne leży inaczej niż dwa pozostałe osiedla blokowe Bochni. Jest bliżej starego miasta i bliżej kolei — ulica Kolejowa z dworcem należy do osiedla, a do Rynku idzie się stąd pieszo.",
        "Widać to też w rzeczach, których nie widać na mapie. To jedyne z trzech bocheńskich osiedli blokowych, które należy do staromiejskiej parafii świętego Mikołaja; Windakiewicza i Niepodległości obsługuje parafia świętego Pawła, założona dopiero w latach osiemdziesiątych dla nowych bloków.",
        "Zakupy robi się na miejscu: Lidl stoi przy świętego Leonarda, w środku osiedla, a Biedronka tuż obok, przy Krzeczowskiej. Szkoły podstawowej na osiedlu nie ma — żadna z pięciu bocheńskich nie ma tu adresu.",
        "Parkowanie jest łatwe, z jednym wyjątkiem: ulica Trudna należy administracyjnie do Słonecznego i leży w strefie płatnego parkowania. Ulice blokowe — świętego Leonarda, Poniatowskiego, Kolejowa i Pod Lipką — są poza strefą, więc pod klatkę zwykle po prostu się podjeżdża. Opłata w strefie i tak jest moim kosztem, nie Twoim.",
      ],
    },
  ],

  faq: [
    {
      question: "Mam czterdzieści metrów i malutką kuchnię. Czy to ma sens?",
      answer:
        "Ma i to jest najczęstsze pytanie na tym osiedlu, bo czterdzieści metrów to tutaj średnia, nie wyjątek. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser i mikser — czyli po zakupie zwykle robi się na blacie luźniej. Zupa i krem powstają w jednym naczyniu, więc mniej naczyń idzie do zlewu. Chętnie pokażę dokładny wymiar na miejscu, żeby to była decyzja na podstawie centymetrów, a nie zdjęcia z folderu.",
    },
    {
      question: "Mieszkam w bloku z lat sześćdziesiątych. Czy instalacja to wytrzyma?",
      answer:
        "Wytrzyma i nigdy nie miałam z tym problemu, ale w tej zabudowie pytam o to zawsze. Urządzenie pobiera około tysiąca pięciuset watów, a w blokach z tamtych lat kuchnia bywa na jednym obwodzie z resztą mieszkania. W praktyce znaczy to tyle, że nie uruchamiam go równocześnie z piekarnikiem i czajnikiem. Jeśli wiesz, że u Ciebie z prądem bywa różnie, powiedz przy umawianiu — ułożymy spotkanie tak, żeby nic nie wyskoczyło w połowie gotowania.",
    },
  ],

  geo: { lat: 49.9756, lng: 20.435 },
};
