import type { DistrictContent } from "./typy";

/**
 * PRĄDNIK CZERWONY (III) — dzielnica ciasna, zwarta i mocno zabudowana,
 * z osiedlami z lat 60.–80. i dużym udziałem nowych plomb.
 *
 * Fakty potwierdzone i użyte:
 * — obszary: Olsza, Olsza II, Ugorek, Rakowice, Prądnik Czerwony,
 *   os. Oświecenia (część), Wieczysta,
 * — Olsza II i Ugorek to typowe osiedla z lat 60. i 70.,
 * — Rakowice i rejon Wieczystej — nowsze inwestycje deweloperskie,
 * — dzielnica nie jest objęta strefą płatnego parkowania, ale graniczy
 *   z Grzegórzkami i Starym Miastem, gdzie strefa obowiązuje — stąd
 *   realny efekt przelewania się aut z sąsiednich dzielnic,
 * — Park Wieczysta i cmentarz Rakowicki jako punkty orientacyjne,
 * — węzeł: rondo Barei, ul. Lublańska, al. 29 Listopada.
 *
 * Świadomie NIE piszę o metrażach mieszkań ani o dostępności wind —
 * nie mam tego potwierdzonego dla tej dzielnicy.
 */
export const KRAKOW_PRADNIK_CZERWONY: DistrictContent = {
  slug: "krakow-pradnik-czerwony",
  urlPath: "/thermomix/krakow/pradnik-czerwony",
  nazwa: "Prądnik Czerwony",
  miejscownik: "Prądniku Czerwonym",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Prądnik Czerwony — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Prądnik Czerwony — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Prądniku Czerwonym: bezpłatna prezentacja TM7 u Ciebie w kuchni — Olsza, Olsza II, Ugorek, Rakowice, Wieczysta. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Olszę, Olszę II, Ugorek, Rakowice i Wieczystą. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "Olsza",
    "Olsza II",
    "Ugorek",
    "Rakowice",
    "Wieczysta",
    "Prądnik Czerwony",
    "os. Oświecenia",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Olsza II i Ugorek kontra nowe plomby przy Wieczystej",
      paragraphs: [
        "Prądnik Czerwony ma dwa zupełnie różne zasoby, wciśnięte na niewielkim obszarze. Olsza II i Ugorek to osiedla z lat sześćdziesiątych i siedemdziesiątych — kuchnia osobna, wąska, blat krótki, grzejnik pod oknem. Rakowice i okolice Wieczystej to nowsze inwestycje, gdzie standardem jest aneks otwarty na salon.",
        "Nie jest to podział geograficzny, do którego dałoby się dojść z mapy, bo nowe budynki są tu dostawiane między stare. Dwa adresy oddalone od siebie o dwieście metrów potrafią oznaczać dwa zupełnie inne spotkania.",
        "Dlatego przy umawianiu pytam o konkretny adres i rok budowy, jeśli go znasz. W starszym bloku planuję część rzeczy przy stole i nie uruchamiam urządzenia równocześnie z czajnikiem czy piekarnikiem — obwód w takich mieszkaniach bywa zabezpieczony na szesnaście amperów, a Thermomix pobiera około tysiąca pięciuset watów. W nowym po prostu gotujemy przy blacie.",
      ],
    },
    {
      id: "parkowanie",
      heading: "Strefy tu nie ma — i właśnie dlatego bywa ciasno",
      paragraphs: [
        "Prądnik Czerwony nie jest objęty strefą płatnego parkowania, ale graniczy z Grzegórzkami i Starym Miastem, gdzie strefa obowiązuje. Efekt jest przewidywalny: część aut, które chcą stanąć bliżej centrum za darmo, ląduje właśnie tutaj.",
        "Dla Ciebie to bez znaczenia, bo za dojazd nie płacisz nigdzie, a postój to mój koszt. Zmienia to natomiast planowanie po mojej stronie: przy adresach na Olszy i Ugorku wyjeżdżam z zapasem, zwłaszcza po piętnastej.",
        "Jeśli masz miejsce postojowe albo garaż pod adresem, powiedz o tym przy umawianiu. To najbardziej użyteczna informacja, jaką możesz mi podać w tej dzielnicy.",
      ],
    },
    {
      id: "rytm",
      heading: "Blisko centrum, ale obiad i tak wypada po pracy",
      paragraphs: [
        "Do Rynku jest stąd kilka przystanków tramwajem, a mimo to codzienny rytm wygląda jak wszędzie: rano wyjazd, wieczorem powrót, obiad w tej gorszej części dnia — po dojeździe, przed resztą obowiązków.",
        "To jest właśnie moment, w którym urządzenie zmienia najwięcej. Nie dlatego, że gotuje szybciej od garnka, tylko dlatego, że nie wymaga, żeby ktoś przy nim stał. Nastawiasz i idziesz zrobić coś innego, a danie samo pilnuje temperatury i miesza.",
        "Na prezentacji gotujemy dokładnie takie rzeczy — obiad na wtorek, a nie efektowny deser. Jeśli masz w domu składniki, z których zwykle coś robisz, powiedz o tym przy umawianiu i ugotujemy z nich.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na Olszę II i Ugorek?",
      answer:
        "Tak, na oba, a także do Rakowic, na Wieczystą i pozostałe części dzielnicy. Dojazd jest bezpłatny, bez względu na to, gdzie dokładnie mieszkasz.",
    },
    {
      question: "Mam kuchnię w bloku z lat siedemdziesiątych. Czy to problem?",
      answer:
        "Nie. Takich kuchni odwiedzam najwięcej. Jeśli przy blacie nie zmieścimy się we dwie, przenosimy się do stołu w pokoju — urządzenie potrzebuje wyłącznie gniazdka.",
    },
    {
      question: "Czy muszę zapewnić miejsce parkingowe?",
      answer:
        "Nie musisz. Jeśli masz — powiedz, bo to skraca mój dojazd. Jeśli nie, wyjeżdżam wcześniej i szukam miejsca sama.",
    },
  ],

  geo: { lat: 50.0847, lng: 19.9639 },
};
