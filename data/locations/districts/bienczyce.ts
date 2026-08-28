import type { DistrictContent } from "./typy";

/**
 * BIEŃCZYCE (XVI) — najgęściej zaludniona i najmniejsza powierzchniowo
 * dzielnica Krakowa (3,7 km², ok. 11 600 os./km²), zbudowana w latach
 * 1959–1979. To oznacza najstarszy i najciaśniejszy zasób mieszkaniowy
 * z całego miasta — i strona mówi o tym wprost, zamiast udawać, że
 * wszędzie jest tak samo.
 *
 * Fakty potwierdzone i użyte:
 * — zespół projektowany dla ok. 30 tys. mieszkańców, każde osiedle na
 *   ok. 5,5 tys., wokół centralnego założenia zieleni (Planty Bieńczyckie),
 * — planowano zabudowę czterokondygnacyjną, zrealizowano bloki 5- i
 *   11-kondygnacyjne — układy, które potem powielano w całym Krakowie,
 * — os. Na Lotnisku (1963–1967): trzy wieżowce 10-piętrowe i siedem
 *   bloków 4-piętrowych,
 * — Arka Pana i Dom Towarowy „Wanda” jako punkty orientacyjne,
 * — brak strefy płatnego parkowania, ale realny deficyt miejsc.
 *
 * Metraże mieszkań w Bieńczycach są NIEPOTWIERDZONE, więc nie padają —
 * mówię o ciasnocie jakościowo, nie liczbowo.
 */
export const KRAKOW_BIENCZYCE: DistrictContent = {
  slug: "krakow-bienczyce",
  urlPath: "/thermomix/krakow/bienczyce",
  nazwa: "Bieńczyce",
  miejscownik: "Bieńczycach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Bieńczyce — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Bieńczyce — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Bieńczycach: bezpłatna prezentacja TM7 u Ciebie w kuchni — os. Jagiellońskie, Kalinowe, Na Lotnisku, Przy Arce. Bez dopłat. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na wszystkie bieńczyckie osiedla — Jagiellońskie, Kazimierzowskie, Kalinowe, Na Lotnisku, Przy Arce i pozostałe. Przywożę Thermomix TM7 i gotujemy u Ciebie. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "os. Jagiellońskie",
    "os. Kazimierzowskie",
    "os. Kościuszkowskie",
    "os. Albertyńskie",
    "os. Kalinowe",
    "os. Złotej Jesieni",
    "os. Niepodległości",
    "os. Wysokie",
    "os. Na Lotnisku",
    "os. Strusia",
    "os. Przy Arce",
    "Bieńczyce (dawna wieś)",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Mała kuchnia to tu norma — i nie jest przeszkodą",
      paragraphs: [
        "Bieńczyce to najstarszy blokowy zasób w tej części Krakowa: osiedla budowano od tysiąc dziewięćset pięćdziesiątego dziewiątego roku, a większość powstała w latach sześćdziesiątych. Kuchnie z tego okresu są osobne, wąskie i mają krótki blat roboczy. Nowego budownictwa praktycznie nie ma, bo to najmniejsza dzielnica Krakowa i wolnych terenów zwyczajnie brakuje.",
        "Mówię to otwarcie, bo wiele osób stąd zaczyna rozmowę od zdania „u mnie się to nie zmieści”. Zmieści. Urządzenie zajmuje mniej więcej tyle, co większy czajnik, i zastępuje kilka sprzętów, które teraz stoją na tym blacie — miksuje, gotuje, waży i wyrabia ciasto w jednym naczyniu. Po prezentacji często okazuje się, że na blacie robi się więcej miejsca, nie mniej.",
        "Przy naprawdę ciasnych kuchniach po prostu przenosimy się do pokoju. Urządzenie potrzebuje wyłącznie gniazdka i kawałka stołu, więc to żaden kompromis — a przy stole i tak siedzi się wygodniej przez dwie godziny.",
      ],
    },
    {
      id: "prad",
      heading: "Bezpiecznik w bloku z lat sześćdziesiątych",
      paragraphs: [
        "W zasobie z tego okresu instalacja bywa aluminiowa, a obwód kuchenny zabezpieczony na szesnaście amperów. Thermomix pobiera około tysiąca pięciuset watów — sam z siebie nie jest problemem, ale razem z czajnikiem i piekarnikiem na jednym obwodzie potrafi wybić korek.",
        "Znam to i po prostu nie włączam wszystkiego naraz. Piszę o tym dlatego, że to jedyna rzecz, która potrafi przerwać spotkanie w starszym bloku, a jest całkowicie do przewidzenia.",
      ],
    },
    {
      id: "dojazd",
      heading: "Parkowanie: bezpłatnie, ale lepiej przed południem",
      paragraphs: [
        "Strefy płatnego parkowania w Bieńczycach nie ma. Jest za to najgęstsza zabudowa w całym Krakowie, zaprojektowana w czasach, gdy samochód w rodzinie był rzadkością. Po południu i wieczorem wolne miejsce bywa trudne do znalezienia.",
        "Dlatego jeśli masz wybór, terminy przed piętnastą są dla mnie znacznie łatwiejsze — a to znaczy, że przyjadę spokojnie i punktualnie, zamiast krążyć wokół bloku. Jeśli pasuje Ci tylko wieczór, to też się umówimy; po prostu wyjeżdżam wtedy z większym zapasem czasu.",
        "Przy umawianiu wystarczy nazwa osiedla i numer bloku — „os. Kalinowe 12” jest kompletną informacją. Przyda się jeszcze piętro i to, czy w budynku jest winda.",
      ],
    },
  ],

  faq: [
    {
      question: "Mam bardzo małą kuchnię. Czy da się u mnie zrobić prezentację?",
      answer:
        "Tak, i robię to w Bieńczycach regularnie. Jeśli przy blacie nie zmieścimy się we dwie, przenosimy się do pokoju — urządzenie potrzebuje tylko gniazdka i kawałka stołu. Przy okazji zobaczysz, ile miejsca realnie zajmuje w Twojej kuchni.",
    },
    {
      question: "Czy dojeżdżasz na wszystkie osiedla?",
      answer:
        "Tak — Jagiellońskie, Kazimierzowskie, Kościuszkowskie, Albertyńskie, Kalinowe, Złotej Jesieni, Niepodległości, Wysokie, Na Lotnisku, Strusia i Przy Arce. Dojazd jest bezpłatny.",
    },
    {
      question: "Czy nie wybije mi korków?",
      answer:
        "Nie, jeśli nie uruchomimy wszystkiego naraz — i o to akurat dbam. W starszych blokach obwód kuchenny bywa zabezpieczony na szesnaście amperów, więc po prostu nie włączam urządzenia równocześnie z czajnikiem i piekarnikiem.",
    },
  ],

  geo: { lat: 50.0836, lng: 20.0083 },
};
