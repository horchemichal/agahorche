import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CIASTKO_RATY, maDostepDoRat } from "@/lib/raty/dostep";
import { ipZadania, przekroczonyLimit } from "@/lib/raty/limit";
import { walidujRaty } from "@/lib/raty/pola";
import { zapiszWniosekRaty, powiadomONowymWniosku } from "@/lib/raty/zgloszenia";

/**
 * POST — zapis wniosku „Raty 0%”. Tylko z ciasteczkiem dostępu (hasło).
 * Dane NIE idą do leadów, CRM, n8n ani maila — tylko do tabeli raty_wnioski,
 * z której znikają po 24 h.
 */
export async function POST(request: Request) {
  const sklep = await cookies();
  if (!maDostepDoRat(sklep.get(CIASTKO_RATY)?.value)) {
    return NextResponse.json({ ok: false, blad: "Sesja wygasła. Odśwież stronę i podaj hasło." }, { status: 401 });
  }
  if (przekroczonyLimit(`wniosek:${ipZadania(request)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: false, blad: "Za dużo wysyłek. Spróbuj za kilka minut." }, { status: 429 });
  }

  const wynik = walidujRaty(await request.json().catch(() => null));
  if (!wynik.ok) {
    return NextResponse.json({ ok: false, blad: "Popraw zaznaczone pola.", bledy: wynik.bledy }, { status: 400 });
  }

  try {
    const id = await zapiszWniosekRaty(wynik.dane);
    void powiadomONowymWniosku(id, wynik.dane.imieNazwisko ?? "");
    return NextResponse.json({ ok: true });
  } catch (blad) {
    console.error("[api/raty] zapis wniosku nieudany", blad);
    return NextResponse.json(
      { ok: false, blad: "Nie udało się wysłać. Spróbuj ponownie albo zadzwoń." },
      { status: 500 },
    );
  }
}
