import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth/admin-auth";
import { kluczPubliczny } from "@/lib/klub/powiadomienia";
import {
  zapiszSubskrypcjePanelu,
  usunSubskrypcjePanelu,
  czyZapisanaWPanelu,
  wyslijProbnePowiadomienie,
} from "@/lib/admin/powiadomienia-zgloszenia";

/**
 * OŚ PLIKU
 * Zgoda na powiadomienia o nowych zgłoszeniach w aplikacji „Aga Panel”.
 *
 * TYLKO DLA ZALOGOWANYCH DO PANELU. proxy.ts pilnuje adresów /admin/*,
 * ale NIE /api/admin/* — dlatego każda metoda sprawdza sesję sama. Bez
 * tego ktokolwiek mógłby dopisać swój telefon do listy i dostawać imię
 * oraz numer telefonu każdej osoby, która wyśle formularz.
 *
 * GET    — klucz publiczny VAPID + czy TO urządzenie ma już zgodę.
 * POST   — zapisuje zgodę tego urządzenia.
 * PUT    — wysyła powiadomienie próbne na to urządzenie.
 * DELETE — cofa zgodę.
 */

const BEZ_PAMIECI = { "Cache-Control": "no-store" };

function odmowa() {
  return NextResponse.json({ ok: false }, { status: 401, headers: BEZ_PAMIECI });
}

async function adresZTresci(request: Request): Promise<string> {
  try {
    const dane = (await request.json()) as { endpoint?: unknown };
    return typeof dane.endpoint === "string" ? dane.endpoint : "";
  } catch {
    return "";
  }
}

export async function GET(request: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) return odmowa();

  const endpoint = new URL(request.url).searchParams.get("endpoint");

  return NextResponse.json(
    {
      ok: true,
      // Brak klucza = na tym serwerze powiadomienia nie są skonfigurowane;
      // interfejs powie to wprost zamiast pokazywać martwy przycisk.
      klucz: kluczPubliczny(),
      zapisana: endpoint ? await czyZapisanaWPanelu(endpoint) : false,
    },
    { headers: BEZ_PAMIECI },
  );
}

export async function POST(request: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) return odmowa();

  let dane: { endpoint?: unknown; p256dh?: unknown; auth?: unknown };
  try {
    dane = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const endpoint = typeof dane.endpoint === "string" ? dane.endpoint : "";
  const p256dh = typeof dane.p256dh === "string" ? dane.p256dh : "";
  const auth = typeof dane.auth === "string" ? dane.auth : "";

  if (!endpoint.startsWith("https://") || endpoint.length > 2000 || !p256dh || !auth) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const zapisano = await zapiszSubskrypcjePanelu(admin.email, { endpoint, p256dh, auth });
  return NextResponse.json({ ok: zapisano }, { status: zapisano ? 200 : 503 });
}

export async function PUT(request: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) return odmowa();

  const endpoint = await adresZTresci(request);
  if (!endpoint) return NextResponse.json({ ok: false }, { status: 400 });

  const wynik = await wyslijProbnePowiadomienie(endpoint);
  return NextResponse.json({ ok: wynik === "wyslane", wynik }, { headers: BEZ_PAMIECI });
}

export async function DELETE(request: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) return odmowa();

  const endpoint = await adresZTresci(request);
  if (!endpoint) return NextResponse.json({ ok: false }, { status: 400 });

  await usunSubskrypcjePanelu(endpoint);
  return NextResponse.json({ ok: true });
}
