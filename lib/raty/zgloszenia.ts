import "server-only";
import webpush from "web-push";
import { isPostgresConfigured, getPostgresPool } from "@/lib/database/postgres";
import { przygotujWysylke } from "@/lib/klub/powiadomienia";
import { OKRES_PRZECHOWYWANIA_GODZ, type DaneRaty } from "@/lib/raty/pola";

/**
 * OŚ MODUŁU
 * Wnioski „Raty 0%” z ukrytej strony /ratyagnieszka.
 *
 * DANE ŻYJĄ 24 GODZINY. Każdy wiersz ma `wygasa_at`; wszystkie odczyty
 * pomijają wygasłe, a każdy zapis i każde otwarcie listy w panelu fizycznie
 * kasuje to, co wygasło. Klientka widzi tę informację na stronie.
 *
 * Osobna tabela (nie `leads`): PESEL i dochody nie mogą trafić do CRM,
 * n8n ani maila z formularza kontaktowego, które trzymają dane bez końca.
 *
 * Powiadomienie push idzie na urządzenia z włączonymi powiadomieniami
 * Aga Panel (ta sama tabela zgód co dla zgłoszeń) i zawiera TYLKO imię
 * i nazwisko — PESEL ani dochód nigdy nie wychodzą poza serwer.
 */

function pula() {
  return isPostgresConfigured() ? getPostgresPool() : null;
}

let tabelaGotowa: Promise<void> | null = null;

function przygotujTabele(): Promise<void> {
  const p = pula();
  if (!p) return Promise.reject(new Error("Brak bazy danych"));
  if (!tabelaGotowa) {
    tabelaGotowa = p
      .query(
        `create table if not exists raty_wnioski (
           id uuid primary key default gen_random_uuid(),
           dane jsonb not null,
           created_at timestamptz not null default now(),
           wygasa_at timestamptz not null
         )`,
      )
      .then(() => undefined)
      .catch((blad) => {
        tabelaGotowa = null;
        throw blad;
      });
  }
  return tabelaGotowa;
}

async function usunWygasle(): Promise<void> {
  const p = pula();
  if (!p) return;
  await p.query("delete from raty_wnioski where wygasa_at < now()");
}

export interface WniosekRaty {
  id: string;
  dane: DaneRaty;
  createdAt: string;
  wygasaAt: string;
}

export async function zapiszWniosekRaty(dane: DaneRaty): Promise<string> {
  await przygotujTabele();
  const p = pula()!;
  await usunWygasle();
  const w = await p.query<{ id: string }>(
    `insert into raty_wnioski (dane, wygasa_at)
     values ($1::jsonb, now() + make_interval(hours => $2::int))
     returning id`,
    [JSON.stringify(dane), OKRES_PRZECHOWYWANIA_GODZ],
  );
  return w.rows[0].id;
}

export async function pobierzWnioskiRaty(): Promise<WniosekRaty[]> {
  if (!pula()) return [];
  await przygotujTabele();
  await usunWygasle();
  const w = await pula()!.query<{ id: string; dane: DaneRaty; created_at: Date; wygasa_at: Date }>(
    `select id, dane, created_at, wygasa_at from raty_wnioski
      where wygasa_at >= now()
      order by created_at desc`,
  );
  return w.rows.map((r) => ({
    id: r.id,
    dane: r.dane,
    createdAt: new Date(r.created_at).toISOString(),
    wygasaAt: new Date(r.wygasa_at).toISOString(),
  }));
}

export async function usunWniosekRaty(id: string): Promise<void> {
  if (!pula()) return;
  await przygotujTabele();
  await pula()!.query("delete from raty_wnioski where id = $1", [id]);
}

/** Nigdy nie rzuca — nieudane powiadomienie nie może zepsuć zapisu wniosku. */
export async function powiadomONowymWniosku(id: string, imieNazwisko: string): Promise<void> {
  try {
    if (!przygotujWysylke()) return;
    const p = pula();
    if (!p) return;
    const odbiorcy = await p
      .query<{ endpoint: string; p256dh: string; auth: string }>(
        "select endpoint, p256dh, auth from admin_push_subscriptions",
      )
      .catch(() => null); // tabela zgód może jeszcze nie istnieć
    if (!odbiorcy || (odbiorcy.rowCount ?? 0) === 0) return;

    const tresc = JSON.stringify({
      tytul: "Nowy wniosek o raty 0%",
      tresc: `${imieNazwisko.slice(0, 80)} · dane znikną po ${OKRES_PRZECHOWYWANIA_GODZ} h`,
      adres: "/admin/raty",
      tag: `raty-${id}`,
      ikona: "/ikony/panel-192.png",
    });

    const martwe: string[] = [];
    await Promise.all(
      odbiorcy.rows.map(async (w) => {
        try {
          await webpush.sendNotification(
            { endpoint: w.endpoint, keys: { p256dh: w.p256dh, auth: w.auth } },
            tresc,
            { TTL: 60 * 60 * 24, urgency: "high" },
          );
        } catch (blad) {
          const kod = (blad as { statusCode?: number })?.statusCode;
          if (kod === 404 || kod === 410) martwe.push(w.endpoint);
          else console.error("[raty/push] wysyłka nieudana", kod ?? blad);
        }
      }),
    );
    if (martwe.length > 0) {
      await p.query("delete from admin_push_subscriptions where endpoint = any($1)", [martwe]);
    }
  } catch (blad) {
    console.error("[raty/push] powiadomienie nieudane", blad);
  }
}
