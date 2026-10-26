import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders the CMS's "prosty edytor treści" (spec §7/§9) output. The editor
 * itself is just a plain textarea — content is stored as plain text with
 * blank-line-separated paragraphs. Rendering it this way (mapping to real
 * <p> tags) instead of dangerouslySetInnerHTML means there is no HTML/XSS
 * surface to sanitize: whatever an admin types can never inject markup.
 *
 * Proste znaczniki (21–22.10.2026), nadal bez HTML-a:
 * - akapit zaczynający się od „## " to nagłówek H2 (z kotwicą do spisu treści), „### " to H3,
 * - akapit, w którym każda linia zaczyna się od „- ", to lista,
 * - akapit, w którym każda linia zaczyna się od „|", to tabela (pierwszy wiersz = nagłówek,
 *   wiersze „|---|" są pomijane),
 * - [tekst](/sciezka) to link — WYŁĄCZNIE wewnętrzny (ścieżka od „/"),
 * - **tekst** to pogrubienie.
 */
const ZNACZNIK = /\[([^\]]+)\]\((\/[^)\s]*)\)|\*\*([^*]+)\*\*/g;
const LINK = "font-medium text-brand-700 underline underline-offset-4";

export function kotwica(tekst: string): string {
  return tekst
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function zZnacznikami(tekst: string, klucz: string): ReactNode[] {
  const wynik: ReactNode[] = [];
  let ostatni = 0;
  let i = 0;
  for (const m of tekst.matchAll(ZNACZNIK)) {
    const start = m.index ?? 0;
    if (start > ostatni) wynik.push(tekst.slice(ostatni, start));
    const k = klucz + "-" + i++;
    if (m[1] !== undefined) {
      wynik.push(
        <Link key={k} href={m[2]} className={LINK}>
          {m[1]}
        </Link>,
      );
    } else {
      wynik.push(
        <strong key={k} className="font-semibold text-neutral-900">
          {m[3]}
        </strong>,
      );
    }
    ostatni = start + m[0].length;
  }
  if (ostatni < tekst.length) wynik.push(tekst.slice(ostatni));
  return wynik;
}

function komorki(linia: string): string[] {
  return linia.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

export function SimpleContent({ content, className }: { content: string; className?: string }) {
  const bloki = content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (bloki.length === 0) return null;

  return (
    <div className={className}>
      {bloki.map((blok, index) => {
        if (blok.startsWith("## ")) {
          const t = blok.slice(3);
          return (
            <h2 key={index} id={kotwica(t)} className="mb-3 mt-10 scroll-mt-28 font-display text-2xl text-neutral-900 first:mt-0">
              {zZnacznikami(t, "h" + index)}
            </h2>
          );
        }
        if (blok.startsWith("### ")) {
          return (
            <h3 key={index} className="mb-2 mt-6 font-display text-lg font-semibold text-neutral-900">
              {zZnacznikami(blok.slice(4), "h" + index)}
            </h3>
          );
        }
        const linie = blok.split("\n");
        if (linie.every((l) => l.trim().startsWith("|"))) {
          const wiersze = linie.filter((l) => !/^\s*\|\s*:?-{2,}/.test(l)).map(komorki);
          const [glowka, ...reszta] = wiersze;
          return (
            <div key={index} className="mb-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    {glowka.map((c, j) => (
                      <th key={j} scope="col" className="border-b border-border px-4 py-3 font-semibold text-neutral-900">
                        {zZnacznikami(c, "t" + index + "-" + j)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reszta.map((w, r) => (
                    <tr key={r} className="even:bg-neutral-50/60">
                      {w.map((c, j) => (
                        <td key={j} className="border-b border-border px-4 py-3 align-top text-neutral-700">
                          {zZnacznikami(c, "c" + index + "-" + r + "-" + j)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (linie.every((l) => l.startsWith("- "))) {
          return (
            <ul key={index} className="mb-4 list-disc space-y-1.5 pl-5 text-neutral-700 leading-relaxed">
              {linie.map((l, j) => (
                <li key={j}>{zZnacznikami(l.slice(2), "l" + index + "-" + j)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="mb-4 text-neutral-700 leading-relaxed last:mb-0">
            {linie.map((line, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {zZnacznikami(line, "p" + index + "-" + j)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
