import "server-only";

/**
 * Prosty limit prób w pamięci kontenera (na IP): chroni hasło przed
 * zgadywaniem i formularz przed zalewem. Restart kontenera go zeruje —
 * to wystarcza dla jednej ukrytej strony.
 */

const proby = new Map<string, number[]>();

export function ipZadania(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  return (xff?.split(",")[0] || request.headers.get("x-real-ip") || "nieznane").trim();
}

export function przekroczonyLimit(klucz: string, maks: number, oknoMs: number): boolean {
  const teraz = Date.now();
  const lista = (proby.get(klucz) ?? []).filter((t) => teraz - t < oknoMs);
  lista.push(teraz);
  proby.set(klucz, lista);
  if (proby.size > 5000) proby.clear();
  return lista.length > maks;
}
