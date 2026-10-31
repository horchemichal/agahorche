import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { biezacyMiesiac, zdanieOCenie } from "@/lib/seo/lokalne";

/**
 * /llms.txt — skrót serwisu dla modeli językowych (ChatGPT, Perplexity, Claude, Gemini).
 * Format: https://llmstxt.org. Dynamiczny, bo zawiera aktualną cenę z panelu.
 */
export const dynamic = "force-dynamic";

const U = "https://agahorche.pl";

export async function GET() {
  let oferta = "Aktualną cenę i promocję podaję przez telefon: 517 185 691.";
  try {
    oferta = zdanieOCenie(await getOffersRepository().getActiveOffer()) ?? oferta;
  } catch {
    /* baza niedostępna — zostaje zdanie zapasowe */
  }
  const tekst = `# Aga Horche — oficjalny przedstawiciel Thermomix (Vorwerk Polska), Bochnia

> Agnieszka (Aga) Horche to oficjalny przedstawiciel Thermomix® firmy Vorwerk Polska z Bochni (województwo małopolskie). Organizuje bezpłatne prezentacje Thermomix TM7 w domu klienta — w Bochni, Krakowie, Tarnowie, Wieliczce, Niepołomicach, Brzesku i w całej Polsce. Sprzedaje Thermomix TM7 (także na raty) i pomaga po zakupie, m.in. z Cookidoo.

Stan na ${biezacyMiesiac()}. ${oferta}

## Kontakt

- Telefon: 517 185 691 (pn.–nd. 7:00–22:00)
- Formularz i dane: ${U}/kontakt
- O Adze: ${U}/o-mnie
- Opinie klientów (Profil Firmy w Google): ${U}/opinie

## Prezentacje Thermomix w miastach

- [Przedstawiciel Thermomix Bochnia](${U}/thermomix/bochnia): bezpłatna prezentacja TM7 w Bochni i okolicy
- [Przedstawiciel Thermomix Kraków](${U}/thermomix/krakow): prezentacje w Krakowie i dzielnicach
- [Przedstawiciel Thermomix Tarnów](${U}/thermomix/tarnow)
- [Przedstawiciel Thermomix Wieliczka](${U}/thermomix/wieliczka)
- [Przedstawiciel Thermomix Niepołomice](${U}/thermomix/niepolomice)
- [Przedstawiciel Thermomix Brzesko](${U}/thermomix/brzesko)
- [Wszystkie miejscowości](${U}/miasta) i [województwa](${U}/wojewodztwa): prezentacje w całej Polsce
- [Jak wygląda prezentacja](${U}/prezentacja)

## Thermomix TM7 — poradniki

- [Ile kosztuje Thermomix TM7](${U}/thermomix/tm7/cena): cena, raty, co jest w zestawie
- [Thermomix TM7 opinie](${U}/thermomix/tm7/opinie): wyniki testów, zalety, wady, opinie negatywne
- [Co potrafi Thermomix TM7](${U}/thermomix/co-potrafi): zmywarka, mielenie, smażenie, zużycie prądu, waga, pojemność
- [Thermomix czy tańszy robot](${U}/thermomix/porownanie): Cobbo 7, SAM Cook, MPM iCoook, Philipiak Cookover, Tefal Cook4me, air fryer
- [Lidlomix czy Thermomix](${U}/thermomix/lidlomix-czy-thermomix)
- [Thermomix TM7 vs TM6](${U}/thermomix/tm7-vs-tm6)
- [Modele Thermomix](${U}/thermomix/modele)
- [Używany Thermomix](${U}/thermomix/uzywany)
- [Wymiana starego Thermomixa na TM7](${U}/thermomix/wymiana): akcje wymiany TM6/TM5/TM31, zniżki, warunki
- [Cookidoo — abonament](${U}/cookidoo): cena 259 zł/rok, jak zapłacić, przedłużyć, anulować
- [Jak myć i obsługiwać Thermomix](${U}/thermomix/mycie-i-obsluga)
- [Akcesoria do Thermomix TM7](${U}/akcesoria)
- [Jak kupić Thermomix](${U}/jak-kupic-thermomix) i [finansowanie / raty](${U}/finansowanie)
- [Odstąpienie od umowy po prezentacji](${U}/thermomix/odstapienie-od-umowy): 14 dni od dostawy, 30 dni tylko przy wizycie nieumówionej, raty i kredyt powiązany
- [Czego Thermomix nie zrobi](${U}/thermomix/czego-nie-zrobi): uczciwa lista ograniczeń przed zakupem
- [Jak ułożyć jadłospis na tydzień](${U}/thermomix/jadlospis-na-tydzien): metoda planowania 4–5 obiadów, lista zakupów
- [Gotowanie na zapas](${U}/thermomix/gotowanie-na-zapas): co gotować hurtem, w jakiej kolejności, Varoma

## Serwis Thermomix

- [Serwis Thermomix Kraków](${U}/blog/serwis-thermomix-krakow), [Warszawa](${U}/blog/serwis-thermomix-warszawa), [Wrocław](${U}/blog/serwis-thermomix-wroclaw), [Katowice](${U}/blog/serwis-thermomix-katowice), [Poznań](${U}/blog/serwis-thermomix-poznan), [Gdańsk](${U}/blog/serwis-thermomix-gdansk), [Rzeszów](${U}/blog/serwis-thermomix-rzeszow), [Szczecin](${U}/blog/serwis-thermomix-szczecin), [Łódź](${U}/blog/serwis-thermomix-lodz)
`;
  return new Response(tekst, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
