import { getCurrentClient } from "@/lib/auth/client-auth";
import { PasekKlubuNawigacja } from "./pasek-klubu-nawigacja";

/**
 * OŚ PLIKU
 * Bramka sesji dla paska Aga Club. Sam pasek rysuje
 * `pasek-klubu-nawigacja.tsx` (kliencki, bo potrzebuje bieżącego adresu);
 * ten plik odpowiada na jedno pytanie: czy ta osoba jest zalogowana.
 *
 * DLACZEGO PODZIAŁ NA DWA PLIKI. `getCurrentClient()` czyta ciasteczko
 * sesji po stronie serwera i nie wolno mu trafić do komponentu z
 * "use client". Ten sam wzorzec chodzi już w serwisie dla
 * `ClientSessionBar` i `KlubKontoLink` — layout dostaje gotowy węzeł.
 *
 * NIEZALOGOWANYM NIE RENDERUJEMY NICZEGO. Nie ukrytego diva, nie paska
 * z zamkniętymi linkami — po prostu `null`. Ukryty element i tak jechałby
 * w HTML-u strony, a przy okazji podpowiadałby adresy, których i tak nie
 * da się użyć bez konta.
 *
 * PUŁAPKA: to działa, bo layout publiczny ma `dynamic = "force-dynamic"`
 * (patrz app/(site)/layout.tsx). Gdyby ktoś przywrócił prerenderowanie,
 * pasek zamroziłby się w stanie „niezalogowany" i nikt by go nie zobaczył.
 */
export async function PasekKlubu() {
  const client = await getCurrentClient();
  if (!client) return null;

  return <PasekKlubuNawigacja />;
}
