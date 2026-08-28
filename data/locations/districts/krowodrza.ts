import type { DistrictContent } from "./typy";

/**
 * KROWODRZA (V) — dzielnica młoda i mała metrażowo. 32% mieszkańców
 * poniżej 34 lat, Miasteczko Studenckie AGH, przewaga kamienic i małych
 * mieszkań adresowanych do singli.
 *
 * Fakty potwierdzone i użyte:
 * — sześć jednostek: Cichy Kącik, Czarna Wieś, Krowodrza, Łobzów,
 *   Miasteczko Studenckie AGH, Nowa Wieś,
 * — mieszkania są raczej małe, adresowane do singli, nie do rosnących
 *   rodzin — i to jest bezpośrednia przyczyna niskiego udziału dzieci
 *   w dzielnicy (potwierdzone jakościowo),
 * — kamienice, zwłaszcza na Czarnej Wsi, mają przestronne wnętrza,
 * — dzielnica objęta strefą płatnego parkowania (podstrefy A3, B10, B30,
 *   C8, C9),
 * — stacja kolejowa Kraków Łobzów, tramwaje 4, 13, 14, 20, 64,
 * — korki: al. Mickiewicza, al. Słowackiego, most Dębnicki.
 */
export const KRAKOW_KROWODRZA: DistrictContent = {
  slug: "krakow-krowodrza",
  urlPath: "/thermomix/krakow/krowodrza",
  nazwa: "Krowodrza",
  miejscownik: "Krowodrzy",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Krowodrza — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Krowodrza — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Krowodrzy: bezpłatna prezentacja TM7 u Ciebie w kuchni — Łobzów, Czarna Wieś, Cichy Kącik, Nowa Wieś. Bez dopłat. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Łobzów, Czarną Wieś, Nową Wieś i Cichy Kącik. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni — także wtedy, gdy ta kuchnia jest bardzo mała. Prezentacja jest bezpłatna.",

  osiedla: [
    "Łobzów",
    "Czarna Wieś",
    "Nowa Wieś",
    "Cichy Kącik",
    "Krowodrza",
    "Miasteczko Studenckie AGH",
  ],

  sections: [
    {
      id: "male-mieszkania",
      heading: "Dzielnica małych mieszkań — i to zmienia rozmowę",
      paragraphs: [
        "Krowodrza jest młoda: co trzeci mieszkaniec nie ma trzydziestu pięciu lat, a AGH z Miasteczkiem Studenckim mocno kształtuje tutejszą demografię. Mieszkania są w większości niewielkie, adresowane raczej do jednej czy dwóch osób niż do rodziny, która się powiększa.",
        "Dla prezentacji to znaczy dwie rzeczy. Po pierwsze, pytanie „czy to się w ogóle u mnie zmieści” pada tu częściej niż gdziekolwiek indziej — i odpowiedź brzmi tak, bo urządzenie zajmuje mniej więcej tyle, co większy czajnik z podstawką, a zastępuje kilka sprzętów, które już stoją na blacie.",
        "Po drugie, w małej kuchni liczy się nie tyle miejsce, ile liczba naczyń do umycia. Gotowanie i miksowanie w jednym naczyniu, bez przekładania gorących rzeczy do blendera, jest tu realniejszą korzyścią niż przy dużym blacie w domu jednorodzinnym.",
      ],
    },
    {
      id: "kamienice",
      heading: "Kamienice na Czarnej Wsi to inna historia",
      paragraphs: [
        "Obok małych mieszkań stoją tu kamienice z przestronnymi wnętrzami i osobnymi, często dużymi kuchniami. To zupełnie inne warunki: miejsca jest pod dostatkiem, za to instalacja bywa w bardzo różnym stanie.",
        "Thermomix pobiera około tysiąca pięciuset watów. W mieszkaniu po remoncie nie ma o czym mówić; w takim ze starszą instalacją po prostu nie uruchamiam go równocześnie z czajnikiem i piekarnikiem. Jeśli wiesz, że u Ciebie z prądem bywa różnie, powiedz o tym przy umawianiu — to jedyne, co muszę wiedzieć.",
      ],
    },
    {
      id: "dojazd",
      heading: "Strefa płatnego parkowania — ale to mój problem",
      paragraphs: [
        "Krowodrza jest objęta strefą płatnego parkowania i miejsc bywa mało, zwłaszcza w rejonie kampusu. Dla Ciebie to bez znaczenia: za dojazd nie płacisz, a postój to mój koszt organizacyjny.",
        "Zmienia to natomiast planowanie. Przy adresach w tej dzielnicy rezerwuję więcej czasu na dojazd, bo do centrum jest wprawdzie blisko, ale aleje Mickiewicza i Słowackiego w szczycie potrafią zamienić cztery kilometry w pół godziny.",
        "Jeśli masz miejsce postojowe albo garaż pod adresem, powiedz o tym — to jedyna informacja, która realnie skraca mój dojazd.",
      ],
    },
  ],

  faq: [
    {
      question: "Mam kawalerkę z małą kuchnią. Czy prezentacja ma sens?",
      answer:
        "Ma, i takich spotkań mam na Krowodrzy najwięcej. Zobaczysz dokładnie, ile miejsca urządzenie zajmuje na Twoim blacie i co z tego blatu może zniknąć — bo zastępuje kilka sprzętów naraz.",
    },
    {
      question: "Czy doliczasz coś za parkowanie w strefie?",
      answer:
        "Nie. Prezentacja i dojazd są bezpłatne, a opłata za postój to mój koszt.",
    },
    {
      question: "Czy dojeżdżasz do Miasteczka Studenckiego?",
      answer:
        "Tak, dojeżdżam wszędzie w tej dzielnicy. W akademiku warto tylko wcześniej sprawdzić, czy w kuchni jest wolne gniazdko i kawałek blatu — poza tym nic się nie zmienia.",
    },
  ],

  geo: { lat: 50.0714, lng: 19.9147 },
};
