import { NextResponse, after } from "next/server";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { pobierzWiadomosci, wyslijWiadomosc, MAX_ZNAKOW } from "@/lib/klub/czat";
import { powiadomONowejWiadomosci } from "@/lib/klub/powiadomienia";
import { storeUploadedFile, MediaUploadError } from "@/lib/admin/media-upload";

/**
 * OŚ PLIKU
 * Czat Aga Club — odczyt (GET) i wysyłanie (POST).
 *
 * TYLKO DLA ZALOGOWANYCH KLUBOWICZEK. Konto bierzemy z ciasteczka sesji,
 * nigdy z treści żądania — gdyby `userId` przychodził w formularzu, każdy
 * mógłby napisać jako ktokolwiek.
 *
 * ZDJĘCIA PRZECHODZĄ PRZEZ TEN SAM MŁYNEK CO RESZTA SERWISU
 * (lib/admin/media-upload.ts: sharp, obrót wg EXIF, WebP), ale w wymiarze
 * pod telefon, nie pod zdjęcie główne strony. Przeglądarka zmniejsza plik
 * jeszcze przed wysłaniem (lib/klub/zmniejsz-obraz.ts) — to oszczędza
 * transfer klientki. Serwer i tak robi swoje, bo zmniejszaniu po stronie
 * przeglądarki nie wolno ufać: wystarczy wysłać żądanie z pominięciem
 * strony i zdjęcie przyjdzie w oryginale.
 */

/** Wymiar zdjęcia w czacie. Telefon w pionie ma ~400 px logicznych, 1280 starcza z zapasem na retinę. */
const MAX_WYMIAR_ZDJECIA = 1280;
const JAKOSC_ZDJECIA = 78;

export async function GET() {
  const client = await getCurrentClient();
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  const wiadomosci = await pobierzWiadomosci(client.id);
  return NextResponse.json(
    { ok: true, wiadomosci },
    // Czat bez świeżych danych nie jest czatem — żadnego cache'owania
    // po drodze, nawet gdyby coś stało między przeglądarką a serwerem.
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const client = await getCurrentClient();
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  let dane: FormData;
  try {
    dane = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, blad: "Nie udało się odczytać wiadomości." }, { status: 400 });
  }

  const tresc = String(dane.get("tresc") ?? "");
  if (tresc.length > MAX_ZNAKOW * 2) {
    // Gruby filtr, zanim cokolwiek trafi do bazy — dokładny limit
    // sprawdza wyslijWiadomosc() po przycięciu białych znaków.
    return NextResponse.json({ ok: false, blad: "Wiadomość jest za długa." }, { status: 400 });
  }

  let obrazUrl: string | undefined;
  let obrazPlik: string | undefined;

  const plik = dane.get("obraz");
  if (plik instanceof File && plik.size > 0) {
    try {
      const zapisany = await storeUploadedFile(plik, {
        maxWymiar: MAX_WYMIAR_ZDJECIA,
        jakosc: JAKOSC_ZDJECIA,
      });
      obrazUrl = zapisany.url;
      obrazPlik = zapisany.fileName;
    } catch (blad) {
      const komunikat =
        blad instanceof MediaUploadError
          ? blad.message
          : "Nie udało się wczytać zdjęcia. Spróbuj z innym.";
      return NextResponse.json({ ok: false, blad: komunikat }, { status: 400 });
    }
  }

  const wynik = await wyslijWiadomosc({ userId: client.id, tresc, obrazUrl, obrazPlik });
  if (!wynik.ok) return NextResponse.json({ ok: false, blad: wynik.blad }, { status: 400 });

  /*
   * Powiadomienia idą PO odesłaniu odpowiedzi (`after`). Rozsyłka do
   * kilkudziesięciu urządzeń to kilkadziesiąt żądań HTTP do Google
   * i Apple — gdyby klientka czekała na nie z wciśniętym „Wyślij",
   * czat byłby wolniejszy dokładnie o tyle, ilu ma uczestników.
   * Powiadomienie ma dodawać wartość, a nie spowalniać rozmowę.
   */
  after(() =>
    powiadomONowejWiadomosci({
      autorId: client.id,
      autorImie: client.displayName.split(" ")[0],
      tresc,
      zeZdjeciem: Boolean(obrazUrl),
    }),
  );

  return NextResponse.json({ ok: true });
}
