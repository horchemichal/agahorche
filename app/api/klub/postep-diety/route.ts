import { NextResponse } from "next/server";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { zapiszDzienPlanu } from "@/lib/diets/postep";

/**
 * Zapis „jestem na dniu N planu X" — wywoływane przez
 * components/diets/diet-plan-preview.tsx przy każdym kliknięciu w numer dnia.
 *
 * DLACZEGO TRASA API, A NIE AKCJA SERWEROWA. Podgląd planu jest komponentem
 * klienckim renderowanym także na stronach publicznych (konfigurator diet),
 * gdzie nikt nie jest zalogowany. Zwykły `fetch` w tle jest tu prostszy niż
 * przepychanie akcji przez wszystkie miejsca, w których ten komponent stoi,
 * a przy okazji nie blokuje przełączenia dnia: widok zmienia się od razu,
 * zapis leci obok.
 *
 * KONTO BIERZEMY Z CIASTECZKA SESJI, NIGDY Z TREŚCI ŻĄDANIA. Gdyby `userId`
 * przychodził w JSON-ie, każdy mógłby nadpisać postęp cudzego konta.
 */
export async function POST(request: Request) {
  const client = await getCurrentClient();
  // Niezalogowanym po cichu nic nie zapisujemy. To nie jest błąd, którym
  // trzeba zawracać głowę w konsoli — po prostu nie ma gdzie zapisać.
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  let dane: unknown;
  try {
    dane = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { planId, dzien } = (dane ?? {}) as { planId?: unknown; dzien?: unknown };
  if (typeof planId !== "string" || typeof dzien !== "number") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const zapisano = await zapiszDzienPlanu(client.id, planId, dzien);
  return NextResponse.json({ ok: zapisano }, { status: zapisano ? 200 : 400 });
}
