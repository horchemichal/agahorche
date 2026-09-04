import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { pobierzAnalitykePanelu } from "@/lib/admin/analityka";
import { PanelHeader, ErrorState } from "@/components/admin/panel-states";
import { StatCard } from "@/components/admin/stat-card";
import { Card } from "@/components/ui/card";
import { RankingPoziomy, WykresTygodni, Lejek } from "@/components/admin/analityka-widoki";

export const metadata: Metadata = {
  title: "Analityka — Aga Admin",
  robots: { index: false, follow: false },
};

const NAZWY_ZRODEL: Record<string, string> = {
  homepage: "Strona główna",
  "thermomix-page": "Strony o Thermomiksie",
  "city-page": "Strony miast",
  "district-page": "Strony dzielnic",
  "voivodeship-page": "Strony województw",
  "presentation-page": "Strony o prezentacji",
  blog: "Blog",
  "aga-club": "Aga Club",
  other: "Inne",
};

/**
 * OŚ STRONY
 * Analityka liczona z danych własnych witryny — patrz lib/admin/analityka.ts.
 *
 * Do 4.09.2026 ta strona była zapowiedzią („podgląd danych z Search Console
 * pojawi się w kolejnym etapie"). Zapowiedź stała tu od premiery i nic za
 * nią nie przyszło, bo wymaga podłączenia API Google. Zamiast trzymać pustą
 * obietnicę, strona pokazuje teraz to, co witryna wie o sobie sama, i mówi
 * wprost, czego nie wie.
 */
export default async function AdminAnalitykaPage() {
  await requireAdmin();
  const a = await pobierzAnalitykePanelu();

  if (!a.dane) {
    return (
      <>
        <PanelHeader title="Analityka" />
        <ErrorState description="Nie udało się odczytać zgłoszeń z bazy. Liczby pojawią się, gdy połączenie wróci — celowo nie pokazuję tu zer, bo wyglądałyby jak prawdziwy wynik." />
      </>
    );
  }

  const zmiana = a.zmiana30Dni;

  return (
    <>
      <PanelHeader
        title="Analityka"
        description={
          a.odKiedy
            ? `Policzone ze zgłoszeń zebranych od ${a.odKiedy}.`
            : "Nie ma jeszcze żadnego zgłoszenia — liczby pojawią się z pierwszym."
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Zgłoszenia łącznie" value={a.zgloszeniaRazem} tone="brand" />
        <StatCard
          label="Ostatnie 30 dni"
          value={a.zgloszeniaOstatnie30Dni}
          hint={
            zmiana === null
              ? "brak poprzedniego okresu do porównania"
              : `${zmiana >= 0 ? "+" : ""}${zmiana}% wobec poprzednich 30 dni (${a.zgloszeniaPoprzednie30Dni})`
          }
        />
        <StatCard
          label="Skuteczność"
          value={a.skutecznosc === null ? "—" : `${a.skutecznosc}%`}
          hint={a.skutecznosc === null ? "brak zamkniętych spraw" : "sprzedaż wśród spraw zamkniętych"}
        />
        <StatCard label="Aga Club" value={a.klubCzlonkowie} hint="zapisanych osób" />
      </div>

      <div className="mt-6">
        <WykresTygodni tygodnie={a.tygodnie} />
      </div>

      <div className="mt-6">
        <Lejek etapy={a.lejek} skutecznosc={a.skutecznosc} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RankingPoziomy
          tytul="Które strony przynoszą zgłoszenia"
          opis="Adres, na którym klientka wypełniła formularz."
          pozycje={a.wgStrony}
          pusteGdy="Za mało zgłoszeń, żeby cokolwiek uszeregować."
        />
        <RankingPoziomy
          tytul="Z jakich miast piszą"
          opis="Miasto wpisane w formularzu — nie lokalizacja z adresu IP."
          pozycje={a.wgMiasta}
          pusteGdy="Za mało zgłoszeń, żeby cokolwiek uszeregować."
        />
        <RankingPoziomy
          tytul="Rodzaj strony"
          opis="Czy zgłoszenia biorą się ze stron miast, dzielnic, bloga czy strony głównej."
          pozycje={a.wgZrodla}
          pusteGdy="Za mało zgłoszeń, żeby cokolwiek uszeregować."
          formatujKlucz={(k) => NAZWY_ZRODEL[k] ?? k}
        />
        <RankingPoziomy
          tytul="Kampanie (UTM)"
          opis={`Dane UTM miało ${a.zUtm} z ${a.zgloszeniaRazem} zgłoszeń.`}
          pozycje={a.wgUtm}
          pusteGdy="Żadne zgłoszenie nie przyszło z linku z oznaczeniem UTM. Pojawi się tu, gdy podlinkujesz stronę np. z posta na Facebooku z dopiskiem ?utm_source=facebook."
        />
      </div>

      <Card className="mt-6">
        <h3 className="font-semibold text-neutral-900">Czego tu nie ma</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Nie ma odsłon, wejść z Google, pozycji fraz ani czasu na stronie. To dane, które
          siedzą w Google Analytics i Search Console — żeby je tu pokazać, trzeba podłączyć
          ich API, a to osobna robota i osobna zgoda. Wszystko powyżej policzyłem
          z formularzy na Twojej stronie, więc mówi o czymś innym niż ruch:{" "}
          <strong className="text-neutral-900">ile osób faktycznie napisało i co z tego wyszło</strong>.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Statystyki wyświetleń w Google sprawdzisz na razie w{" "}
          <Link
            href="https://search.google.com/search-console?resource_id=https%3A%2F%2Fagahorche.pl%2F"
            className="text-brand-700 underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Search Console
          </Link>
          .
        </p>
      </Card>
    </>
  );
}
