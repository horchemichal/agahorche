import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { getCityContent } from "@/data/locations/city-content";

/**
 * „Serwis i naprawa" na stronie miasta (22.10.2026).
 *
 * Dlaczego sekcja, a nie 940 wpisow „Serwis Thermomix <miasto>": autoryzowanych
 * punktow Vorwerk jest dziewiec, a poza tymi miastami fraza „serwis thermomix <miasto>"
 * ma 0–30 wyszukiwan miesiecznie (Google Ads, 21.10.2026). Osobne strony mowilyby
 * wszedzie to samo — Google traktuje to jako masowo generowane strony-przejscia.
 * Tu kazde miasto dostaje jeden prawdziwy, rozny fakt: ktory punkt jest najblizej
 * i jak daleko — plus link do wpisu z adresem i instrukcja zgloszenia.
 *
 * Dane punktow: lista Vorwerk (vorwerk.com/pl, „Punkty serwisowe"), odczyt 21.10.2026.
 * Wspolrzedne miast biore z plikow tresci miast (content.geo), nie wpisuje recznie.
 */
const PUNKTY = [
  { slug: "warszawa", nazwa: "Warszawa", wMiescie: "w Warszawie", adres: "ul. Ryżowa 49, Warszawa" },
  { slug: "krakow", nazwa: "Kraków", wMiescie: "w Krakowie", adres: "ul. Siostry Faustyny 20, Kraków" },
  { slug: "wroclaw", nazwa: "Wrocław", wMiescie: "we Wrocławiu", adres: "ul. Inżynierska 41/U14, Wrocław" },
  { slug: "katowice", nazwa: "Katowice", wMiescie: "w Katowicach", adres: "ul. Kołobrzeska 24, Katowice" },
  { slug: "poznan", nazwa: "Poznań", wMiescie: "w Poznaniu", adres: "os. Stare Żegrze 14, Poznań" },
  { slug: "gdansk", nazwa: "Gdańsk", wMiescie: "w Gdańsku", adres: "ul. Długie Ogrody 11, Gdańsk" },
  { slug: "rzeszow", nazwa: "Rzeszów", wMiescie: "w Rzeszowie", adres: "al. Krzyżanowskiego 12a, Rzeszów" },
  { slug: "szczecin", nazwa: "Szczecin", wMiescie: "w Szczecinie", adres: "ul. Mariacka 10a, Szczecin" },
  { slug: "lodz", nazwa: "Łódź", wMiescie: "w Łodzi", adres: "ul. B. Limanowskiego 41/43, Łódź" },
] as const;

function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const r = (x: number) => (x * Math.PI) / 180;
  const dLat = r(b.lat - a.lat);
  const dLng = r(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

function najblizszy(geo: { lat: number; lng: number }) {
  let best: { p: (typeof PUNKTY)[number]; d: number } | null = null;
  for (const p of PUNKTY) {
    const g = getCityContent(p.slug)?.geo;
    if (!g) continue;
    const d = km(geo, g);
    if (!best || d < best.d) best = { p, d };
  }
  return best;
}

const LINK = "font-medium text-brand-700 underline underline-offset-4";

export function SerwisNajblizszy({
  slug,
  nazwa,
  wMiescie,
  geo,
}: {
  slug: string;
  nazwa: string | null;
  wMiescie: string;
  geo?: { lat: number; lng: number } | null;
}) {
  const wlasny = PUNKTY.find((p) => p.slug === slug);
  const wynik = wlasny ? { p: wlasny, d: 0 } : geo ? najblizszy(geo) : null;
  if (!wynik) return null;
  const { p, d } = wynik;
  const wpis = `/blog/serwis-thermomix-${p.slug}`;
  const odleglosc = d < 15 ? "kilkanaście kilometrów" : `ok. ${Math.round(d / 5) * 5} km w linii prostej`;

  return (
    <Section>
      <Heading as="h2" size="md" className="mb-3">
        Serwis Thermomix — {nazwa ?? "Twoja okolica"}
      </Heading>
      <div className="max-w-2xl space-y-4 text-neutral-700 leading-relaxed">
        {wlasny ? (
          <p>
            {p.wMiescie.charAt(0).toUpperCase() + p.wMiescie.slice(1)} działa autoryzowany punkt serwisowy Vorwerk: {p.adres}.
            Telefon, godziny i to, jak zgłosić naprawę, opisałam we wpisie{" "}
            <Link href={wpis} className={LINK}>serwis Thermomix {p.nazwa}</Link>.
          </p>
        ) : (
          <p>
            Jeśli mieszkasz {wMiescie}, najbliższy autoryzowany punkt serwisowy Vorwerk jest {p.wMiescie} ({p.adres}) — {odleglosc}.
            Nie trzeba tam jechać: w formularzu serwisowym Vorwerk wybierasz odbiór kurierem spod domu.
            Adres, telefon, godziny i jak zgłosić naprawę:{" "}
            <Link href={wpis} className={LINK}>serwis Thermomix {p.nazwa}</Link>.
          </p>
        )}
        <p className="text-sm text-muted">
          Lista punktów pochodzi ze strony Vorwerk. Jeśli kupujesz Thermomixa u mnie, pomagam też przy zgłoszeniu serwisowym.
        </p>
      </div>
    </Section>
  );
}
