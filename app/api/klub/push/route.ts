import { NextResponse } from "next/server";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { kluczPubliczny, zapiszSubskrypcje, usunSubskrypcje, czyZapisana } from "@/lib/klub/powiadomienia";

/**
 * OŚ PLIKU
 * Zgoda na powiadomienia push — założenie, sprawdzenie i cofnięcie.
 *
 * TYLKO DLA ZALOGOWANYCH. Bez tego dowolna osoba mogłaby zapisać swój
 * adres push do cudzego konta i dostawać powiadomienia o rozmowie, do
 * której nie ma wstępu.
 *
 * GET  — oddaje klucz publiczny VAPID i informację, czy TO urządzenie ma
 *        już zgodę (po adresie push przekazanym w zapytaniu).
 * POST — zapisuje zgodę tego urządzenia.
 * DELETE — cofa ją.
 *
 * ADRES PUSH NIE JEST TAJEMNICĄ, ale jest identyfikatorem urządzenia,
 * więc kasować wolno wyłącznie w obrębie własnej sesji — stąd sprawdzenie
 * konta także przy DELETE.
 */

export async function GET(request: Request) {
  const client = await getCurrentClient();
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  const klucz = kluczPubliczny();
  const endpoint = new URL(request.url).searchParams.get("endpoint");

  return NextResponse.json(
    {
      ok: true,
      // Brak klucza znaczy „na tym serwerze powiadomienia nie są
      // skonfigurowane" — interfejs po prostu nie pokaże przełącznika,
      // zamiast pokazywać przycisk, który nic nie robi.
      klucz,
      zapisana: endpoint ? await czyZapisana(endpoint) : false,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const client = await getCurrentClient();
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  let dane: { endpoint?: unknown; p256dh?: unknown; auth?: unknown };
  try {
    dane = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const endpoint = typeof dane.endpoint === "string" ? dane.endpoint : "";
  const p256dh = typeof dane.p256dh === "string" ? dane.p256dh : "";
  const auth = typeof dane.auth === "string" ? dane.auth : "";

  // Adresy push dostawców potrafią mieć ponad 300 znaków, ale nie kilka
  // tysięcy — górna granica chroni bazę przed wpisem wklejonym ręcznie.
  if (!endpoint.startsWith("https://") || endpoint.length > 2000 || !p256dh || !auth) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const zapisano = await zapiszSubskrypcje(client.id, { endpoint, p256dh, auth });
  return NextResponse.json({ ok: zapisano }, { status: zapisano ? 200 : 503 });
}

export async function DELETE(request: Request) {
  const client = await getCurrentClient();
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  let dane: { endpoint?: unknown };
  try {
    dane = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const endpoint = typeof dane.endpoint === "string" ? dane.endpoint : "";
  if (!endpoint) return NextResponse.json({ ok: false }, { status: 400 });

  await usunSubskrypcje(endpoint);
  return NextResponse.json({ ok: true });
}
