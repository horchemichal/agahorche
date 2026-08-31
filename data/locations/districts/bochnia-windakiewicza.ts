import type { DistrictContent } from "./typy";

/**
 * WINDAKIEWICZA — Osiedle nr 6 miasta Bochnia. Najmniejsze z trzech
 * bocheńskich osiedli blokowych: 6 budynków SM, 227 mieszkań, 9 474 m².
 *
 * OŚ STRONY: OSIEDLE ZAMKNIĘTE W TRZY LATA. Cała zabudowa spółdzielcza
 * powstała między 1975 a 1977 r. — najciaśniejsze okno budowlane
 * w mieście. Cztery bliźniacze bloki (20, 22, 26, 28) mają po 846,20 m²
 * i po 22 mieszkania, czyli 38,5 m² średnio: NAJMNIEJSZE MIESZKANIA
 * W CAŁYM ZASOBIE SPÓŁDZIELNI. Jeden rocznik, jeden projekt, jedna skala.
 *
 * ⚠️⚠️ ROZDZIELENIE OD SŁONECZNEGO. Średni metraż jest tam praktycznie
 * taki sam (41,2 kontra 41,7 m²) — NIE BUDOWAĆ tezy na „małych
 * mieszkaniach”, bo powstaną dwie wersje tego samego tekstu. Tam osią
 * jest WIEK (pierwsze bloki w mieście, 1962). Tu — JEDNORODNOŚĆ.
 * ⚠️ ROZDZIELENIE OD NIEPODLEGŁOŚCI: tam skala i murale.
 *
 * FAKTY UŻYTE I ŹRÓDŁA (rejestr budynków SM Bochnia):
 * — ⭐ 6 budynków, 227 mieszkań, 9 474 m², LATA 1975–1977:
 *   Windakiewicza 18 (1975, 61 mieszkań, 3 klatki), 20 i 24 (1976 —
 *   22 i 78 mieszkań), 22, 26, 28 (1977, po 22 mieszkania, 1 klatka),
 * — ⭐ CZTERY BLIŹNIACZE BUDYNKI (20, 22, 26, 28) po 846,20 m²
 *   i po 22 mieszkania — 38,5 m² średnio, najmniej w zasobie SM.
 *   Średnia całego osiedla 41,7 m², średnia miejska 76 m²,
 * — GĘSTOŚĆ: 20,6 mieszkania na klatkę — najwyższa z trzech osiedli
 *   (Słoneczne 15,5, Niepodległości 16,2). Spójne z wyższymi budynkami,
 * — ⚠️ BLOKI LEGIONÓW POLSKICH 5, 7, 9, 11 należą do osiedla, ale NIE MA
 *   ich w rejestrze SM — inny właściciel. Ich lata budowy NIE USTALONE,
 * — CMENTARZ KOMUNALNY ŚW. ROZALII przy Zaułku Franciszka Mollo —
 *   trzeci obszar osiedla wg statutu. Groby z I wojny światowej,
 *   zbiorowa mogiła żołnierzy poległych we wrześniu 1939 r.; pochówki
 *   prowadzono do lat 70.,
 * — PUNKTY PRZY JEDNEJ ULICY: Intermarché przy Windakiewicza 16
 *   i Zespół Szkół nr 1 im. Stanisława Staszica przy Windakiewicza 23.
 *   Osiedlowy deptak z zieloną siłownią i stolikiem szachowym,
 * — PARKOWANIE: projekt z Budżetu Obywatelskiego 2020 (55 000 zł)
 *   uzasadniano tym, że TRAWA JEST ZNISZCZONA PRZEZ RUCH POJAZDÓW,
 *   i przewidywał wyznaczenie DWÓCH MIEJSC POSTOJOWYCH NA TŁUCZNIU.
 *   Poza strefą płatnego parkowania,
 * — ODLEGŁOŚĆ: ok. 1,2 km od Rynku. Parafia św. Pawła Apostoła
 *   (erygowana 25 maja 1984); jej wykaz ulic wymienia wprost bloki
 *   Windakiewicza 18, 20, 22, 24, 26, 28.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ROZSTRZYGNIĘCIA, KTÓRY EDWARD WINDAKIEWICZ JEST PATRONEM.
 *   ⚠️ Dwaj kandydaci, obaj związani z solą: c.k. starszy radca górniczy,
 *   który zginął w POŻARZE SALIN BOCHEŃSKICH 3 stycznia 1876 r.
 *   w wieku 49 lat, oraz inżynier górnictwa solnego (1858–1942),
 *   docent AGH, autor pięciotomowego „Solnictwa”, doktor h.c. AGH.
 *   Atrybucji nie rozstrzyga żadne dostępne źródło — w treści podane
 *   jako otwarte pytanie, bo to uczciwsze niż zgadywanie.
 *   ⚠️⚠️ STANISŁAW WINDAKIEWICZ (historyk literatury) to INNA OSOBA
 *   i NIE jest patronem tej ulicy,
 * — LICZBY PIĘTER I WIND. Wikipedia mówi o budynkach 4–5-piętrowych,
 *   ogłoszenie o czterech piętrach przy Windakiewicza 18 — za słabe
 *   źródła. NIE PODAWAĆ,
 * — TECHNOLOGII (wielka płyta / cegła). Brak źródła urzędowego.
 *
 * PUŁAPKI:
 * — ⚠️ Ulica Legionów Polskich biegnie przez DWA osiedla: nieparzyste
 *   5–11 to Windakiewicza, parzyste to Niepodległości,
 * — ⚠️ Statut przypisuje ul. Windakiewicza do Osiedla 1 w zakresie
 *   „domy prywatne”, a bloki spółdzielcze do Osiedla 6. Jedna ulica,
 *   dwa osiedla, granica biegnie po typie zabudowy.
 */
export const BOCHNIA_WINDAKIEWICZA: DistrictContent = {
  slug: "bochnia-windakiewicza",
  urlPath: "/thermomix/bochnia/windakiewicza",
  nazwa: "Windakiewicza",
  miejscownik: "osiedlu Windakiewicza",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix osiedle Windakiewicza — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Windakiewicza Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na osiedlu Windakiewicza w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Windakiewicza, Legionów Polskich, Zaułek Mollo. Tel. 517 185 691.",

  lead:
    "Dojeżdżam pod wszystkie bloki przy Windakiewicza i Legionów Polskich — to najmniejsze osiedle blokowe w Bochni, więc trasa jest krótka. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Windakiewicza",
    "Legionów Polskich",
    "Zaułek Franciszka Mollo",
  ],

  sections: [
    {
      id: "trzy-lata",
      heading: "Całe osiedle zbudowano w trzy lata",
      paragraphs: [
        "Sześć bloków, dwieście dwadzieścia siedem mieszkań i trzy roczniki: tysiąc dziewięćset siedemdziesiąty piąty, szósty i siódmy. Tyle. To najciaśniejsze okno budowlane w całej Bochni — dla porównania osiedle Niepodległości stawiano trzynaście lat, a Słoneczne jedenaście.",
        "W praktyce znaczy to, że tutaj wszystko jest z jednej epoki. Ta sama technologia, ten sam projekt, te same rozwiązania w kuchni. Kiedy wchodzę do mieszkania przy Windakiewicza, wiem, czego się spodziewać, zanim zdejmę kurtkę — i to jest rzecz, której nie mogę powiedzieć o żadnym innym bocheńskim osiedlu.",
        "Cztery z sześciu bloków są wręcz bliźniacze: każdy ma po dwadzieścia dwa mieszkania i dokładnie taką samą powierzchnię. Średnio wychodzi trzydzieści osiem i pół metra na mieszkanie, czyli najmniej w całym zasobie tutejszej spółdzielni.",
        "Nie piszę tego jako zarzutu. Piszę, bo to zmienia jedną praktyczną rzecz: przy takim metrażu nie ma sensu udawać, że blat jest długi. Jest krótki i trzeba to po prostu wziąć pod uwagę przy planowaniu spotkania.",
      ],
      bullets: [
        "sześć bloków, trzy roczniki: siedemdziesiąty piąty, szósty i siódmy",
        "cztery bliźniacze budynki po dwadzieścia dwa mieszkania",
        "trzydzieści osiem i pół metra średnio — najmniej w spółdzielni",
      ],
    },
    {
      id: "kuchnia",
      heading: "Krótki blat i jedna rzecz, o którą zawsze pytam",
      paragraphs: [
        "Przy trzydziestu ośmiu metrach kuchnia jest osobna i wąska. To nie przeszkadza w prezentacji, bo urządzenie zajmuje mniej więcej tyle miejsca co czajnik z podstawką — potrzebuję kawałka blatu, gniazdka i miejsca, żeby stanąć obok.",
        "Pytam natomiast zawsze o jedno: co jeszcze pracuje na tym samym obwodzie. Urządzenie pobiera około tysiąca pięciuset watów, a w zabudowie z połowy lat siedemdziesiątych kuchnia bywa podpięta razem z resztą mieszkania. Wystarczy, że nie włączymy w tym samym momencie piekarnika i czajnika — i sprawa jest załatwiona.",
        "Największy zysk w takiej kuchni to nie oszczędność czasu, tylko liczba naczyń. Sos, zupa i krem powstają w jednym pojemniku, bez przelewania gorącego do blendera i z powrotem. Kiedy zlew jest mały, a suszarka ledwo się mieści, czuje się to każdego wieczoru.",
        "Druga rzecz to miejsce w szafce. Jedno urządzenie zastępuje blender, malakser i mikser, więc po zakupie zwykle coś z blatu znika, a nie przybywa. W czterdziestometrowym mieszkaniu to konkretna decyzja, a nie hasło z folderu.",
      ],
    },
    {
      id: "dojazd",
      heading: "Wszystko przy jednej ulicy — łącznie z dwoma miejscami na tłuczniu",
      paragraphs: [
        "To osiedle jest małe i wszystko ma pod ręką, przy tej samej ulicy: sklep Intermarché, technikum imienia Staszica i osiedlowy deptak z zieloną siłownią oraz stolikiem szachowym. Do Rynku jest stąd niewiele ponad kilometr.",
        "Od zachodu osiedle domyka cmentarz świętej Rozalii przy Zaułku Franciszka Mollo, który według statutu też do niego należy. Są tam groby z pierwszej wojny światowej i zbiorowa mogiła żołnierzy poległych we wrześniu trzydziestego dziewiątego; chowano tu do lat siedemdziesiątych. Takiego sąsiedztwa nie ma żadne inne bocheńskie osiedle blokowe.",
        "Strefy płatnego parkowania tu nie ma, ale miejsca bywa mało i najlepiej widać to po jednej historii. Kilka lat temu mieszkańcy przeznaczyli pieniądze z budżetu obywatelskiego na zagospodarowanie terenu przy skrzyżowaniu Windakiewicza — w uzasadnieniu napisano wprost, że trawnik jest rozjeżdżony przez samochody. Projekt przewidywał wyznaczenie dwóch miejsc postojowych na tłuczniu. Dwóch.",
        "Dlatego przy popołudniowych terminach wyjeżdżam z zapasem. Ciebie to nie kosztuje ani minuty — po prostu przyjeżdżam wcześniej.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam przy Legionów Polskich. To Windakiewicza czy Niepodległości?",
      answer:
        "Zależy od numeru i to jest w Bochni klasyczna pułapka. Numery nieparzyste od piątego do jedenastego należą do osiedla Windakiewicza, parzyste — do Niepodległości. Dla dojazdu nie ma to znaczenia, bo jeżdżę na oba bez dopłaty, ale dzięki numerowi bloku i klatce trafiam pod właściwe drzwi za pierwszym razem.",
    },
    {
      question: "Mam mieszkanie trzydzieści osiem metrów. Czy w takiej kuchni da się w ogóle gotować z Tobą razem?",
      answer:
        "Da się i tak wygląda większość moich spotkań na tym osiedlu, bo trzydzieści osiem metrów to tutaj standard, nie wyjątek. Potrzebuję kawałka blatu, gniazdka i miejsca, żeby stanąć obok — urządzenie jest wielkości czajnika z podstawką. Przy takim metrażu najbardziej doceniane jest zresztą co innego niż miejsce: to, że zupa, sos i krem powstają w jednym naczyniu, więc do zlewu idzie mniej rzeczy.",
    },
    {
      question: "Kim był Windakiewicz, od którego nazwano ulicę?",
      answer:
        "Powiem uczciwie: nie wiem na pewno i nie chcę zgadywać. Kandydatów jest dwóch i obaj byli ludźmi od soli. Pierwszy to cesarsko-królewski radca górniczy Edward Windakiewicz, który zginął w pożarze bocheńskich salin w tysiąc osiemset siedemdziesiątym szóstym roku, mając czterdzieści dziewięć lat. Drugi to inżynier górnictwa solnego o tym samym imieniu i nazwisku, żyjący w latach tysiąc osiemset pięćdziesiątym ósmym do tysiąc dziewięćset czterdziestego drugiego, wykładowca krakowskiej Akademii Górniczej i autor pięciotomowego dzieła o solnictwie. Rozstrzygnęłaby uchwała o nadaniu nazwy, do której nie dotarłam. Na pewno nie chodzi o Stanisława Windakiewicza, historyka literatury — to inna osoba.",
    },
  ],

  geo: { lat: 49.9658, lng: 20.4181 },
};
