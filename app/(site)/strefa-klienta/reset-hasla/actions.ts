"use server";

import { poprosOResetHasla, ustawNoweHasloZTokenu, KOMUNIKAT_WYSLANO } from "@/lib/auth/reset-hasla";

export type StanProsby = { blad: string | null; wyslano: string | null };

/** Krok 1 — „zapomniałam hasła": klientka podaje e-mail. */
export async function poprosOResetAction(_poprzedni: StanProsby, dane: FormData): Promise<StanProsby> {
  const email = String(dane.get("email") ?? "");
  const wynik = await poprosOResetHasla(email);

  if (!wynik.ok) return { blad: wynik.blad, wyslano: null };

  /*
   * `KOMUNIKAT_WYSLANO` leci również wtedy, gdy takiego konta nie ma —
   * to nie pomyłka, tylko cała idea: formularz nie może zdradzać, kto ma
   * u Agi konto. Szczegóły w lib/auth/reset-hasla.ts, punkt 1.
   */
  return { blad: null, wyslano: KOMUNIKAT_WYSLANO };
}

export type StanNowegoHasla = { blad: string | null; gotowe: boolean };

/** Krok 3 — zapis nowego hasła z linku. */
export async function ustawNoweHasloAction(
  _poprzedni: StanNowegoHasla,
  dane: FormData,
): Promise<StanNowegoHasla> {
  const token = String(dane.get("token") ?? "");
  const haslo = String(dane.get("haslo") ?? "");
  const powtorzone = String(dane.get("powtorzone") ?? "");

  const wynik = await ustawNoweHasloZTokenu(token, haslo, powtorzone);
  if (!wynik.ok) return { blad: wynik.blad, gotowe: false };

  /*
   * Bez `redirect()`. Chcemy pokazać „hasło zmienione" i dopiero stamtąd
   * dać przycisk do logowania — przerzucenie klientki wprost na formularz
   * logowania wygląda tak, jakby coś nie wyszło.
   */
  return { blad: null, gotowe: true };
}
