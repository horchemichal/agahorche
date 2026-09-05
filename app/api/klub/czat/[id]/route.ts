import { NextResponse } from "next/server";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { usunWiadomosc } from "@/lib/klub/czat";

/**
 * Usunięcie własnej wiadomości przez klubowiczkę.
 *
 * `client.id` idzie do `usunWiadomosc` jako właściciel, więc zapytanie
 * kasuje wyłącznie wiersz należący do tej osoby. Bez tego wystarczyłoby
 * znać cudze `id`, żeby skasować cudzą wiadomość — a `id` widać w kodzie
 * strony.
 *
 * Moderacja Agi jest osobno, w panelu (app/admin/(panel)/aga-club/czat),
 * bo panel ma własną sesję i własne konto — patrz lib/auth/client-auth.ts.
 */
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const client = await getCurrentClient();
  if (!client) return NextResponse.json({ ok: false }, { status: 401 });

  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const usunieto = await usunWiadomosc(id, client.email, client.id);
  return NextResponse.json({ ok: usunieto }, { status: usunieto ? 200 : 404 });
}
