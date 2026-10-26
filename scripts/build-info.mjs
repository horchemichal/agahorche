import { writeFileSync } from "node:fs";
// Data wdrożenia — widoczna „Aktualizacja strony” i dateModified na stronach miast.
writeFileSync("lib/build-info.generated.ts", `export const BUILD_AT = "${new Date().toISOString()}";\n`);
