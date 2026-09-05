"use client";

/**
 * OŚ PLIKU
 * Zmniejszenie zdjęcia W PRZEGLĄDARCE, zanim poleci na serwer.
 *
 * PO CO, SKORO SERWER I TAK ZMNIEJSZA. Bo to nie to samo oszczędza.
 * Serwer chroni dysk i szybkość wyświetlania czatu; ten plik chroni
 * transfer i cierpliwość klientki. Zdjęcie z telefonu to dziś 3–6 MB —
 * wysyłanie tego przez zwykłą komórkową transmisję trwa kilkanaście
 * sekund i zjada pakiet. Po przejściu przez ten kod idzie zwykle
 * 150–400 kB, czyli kilkanaście razy mniej.
 *
 * SERWER MIMO TO ROBI SWOJE i tak ma zostać. Zmniejszaniu w przeglądarce
 * nie wolno ufać: wystarczy pominąć stronę i wysłać żądanie wprost, żeby
 * przyszedł oryginał. To jest wygoda dla klientki, nie zabezpieczenie.
 *
 * DLACZEGO JPEG, A NIE WEBP. `canvas.toBlob` obsługuje WebP w Chrome,
 * ale w starszych Safari potrafi po cichu oddać PNG — a PNG ze zdjęcia
 * potrafi być WIĘKSZY niż oryginalny JPEG i cała oszczędność znika.
 * JPEG działa wszędzie tak samo, a i tak serwer przerobi to na WebP.
 */

/** Dłuższy bok po zmniejszeniu. Zgodny z tym, co robi potem serwer. */
const MAX_BOK = 1600;
const JAKOSC = 0.82;

/** Poniżej tego rozmiaru nie ma czego zmniejszać — szkoda jakości. */
const PROG_BAJTOW = 300 * 1024;

export async function zmniejszObraz(plik: File): Promise<File> {
  // HEIC z iPhone'a i inne formaty, których canvas nie umie narysować,
  // przepuszczamy bez zmian — serwerowy sharp poradzi sobie lepiej.
  if (!plik.type.startsWith("image/") || plik.type === "image/heic" || plik.type === "image/heif") {
    return plik;
  }
  if (plik.size <= PROG_BAJTOW) return plik;

  try {
    const bitmapa = await createImageBitmap(plik);
    const skala = Math.min(1, MAX_BOK / Math.max(bitmapa.width, bitmapa.height));

    // Zdjęcie i tak jest małe w wymiarach — samo przekodowanie zwykle
    // nic nie da, a może pogorszyć.
    if (skala === 1 && plik.size <= PROG_BAJTOW * 3) {
      bitmapa.close();
      return plik;
    }

    const szer = Math.round(bitmapa.width * skala);
    const wys = Math.round(bitmapa.height * skala);

    const plotno = document.createElement("canvas");
    plotno.width = szer;
    plotno.height = wys;
    const kontekst = plotno.getContext("2d");
    if (!kontekst) {
      bitmapa.close();
      return plik;
    }
    kontekst.drawImage(bitmapa, 0, 0, szer, wys);
    bitmapa.close();

    const blob = await new Promise<Blob | null>((zwroc) =>
      plotno.toBlob(zwroc, "image/jpeg", JAKOSC),
    );
    if (!blob) return plik;

    // Gdyby po całej operacji wyszło większe — oddajemy oryginał.
    // Zdarza się przy grafikach z dużymi płaskimi płaszczyznami.
    if (blob.size >= plik.size) return plik;

    const nazwa = plik.name.replace(/\.[^.]+$/, "") || "zdjecie";
    return new File([blob], `${nazwa}.jpg`, { type: "image/jpeg" });
  } catch {
    /*
     * Cokolwiek poszło nie tak (brak pamięci przy ogromnym zdjęciu, format
     * nieobsługiwany przez przeglądarkę) — oddajemy oryginał. Serwer go
     * przyjmie i zmniejszy sam. Lepiej wysłać duży plik niż nie wysłać nic.
     */
    return plik;
  }
}
