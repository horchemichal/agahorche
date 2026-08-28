import type { InternalLink } from "@/types/seo";
import type { Location } from "@/types/location";

/**
 * Internal linking engine (spec §12). Encodes the approved link graph as
 * small, explicit builder functions rather than "link everything to
 * everything" — every function returns a capped, purposeful set of links
 * for one relationship at a time. Callers compose only the groups relevant
 * to the current page type.
 *
 * Anchor text rule: always the real entity name ("Thermomix Kraków",
 * "Małopolskie"), never stuffed/generic anchors like "kliknij tutaj" or
 * repeated exact-match spam variants.
 */

const MAX_NEARBY_LINKS = 6;

export function hierarchyUpLinks(location: Location, wojewodztwo: Location | null): InternalLink[] {
  const links: InternalLink[] = [];
  if (wojewodztwo) {
    links.push({
      href: wojewodztwo.urlPath,
      label: `Thermomix ${wojewodztwo.name}`,
      group: "hierarchy-up",
    });
  }
  links.push({ href: "/thermomix", label: "Thermomix — strona główna produktu", group: "hierarchy-up" });
  return links;
}

export function nearbyLocationLinks(location: Location, neighbors: Location[]): InternalLink[] {
  return neighbors.slice(0, MAX_NEARBY_LINKS).map((n) => ({
    href: n.urlPath,
    label: `Thermomix ${n.name}`,
    group: "nearby",
  }));
}

export function conversionLinks(): InternalLink[] {
  return [
    { href: "/prezentacja", label: "Umów bezpłatną prezentację", group: "conversion" },
    { href: "/aga-club", label: "Poznaj Aga Club", group: "conversion" },
  ];
}

export function productClusterLinks(): InternalLink[] {
  return [
    { href: "/thermomix/tm7", label: "TM7", group: "related-content" },
    { href: "/thermomix/tm7-vs-tm6", label: "TM7 vs TM6", group: "related-content" },
    { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja", group: "related-content" },
  ];
}

/**
 * Links a blog post should surface, per spec §12 (Blog → lokalne strony,
 * Thermomix, prezentacja). `relatedLocation` is only present for posts in
 * the "thermomix-miasto" cluster.
 */
export function blogRelatedLinks(relatedLocation?: Location | null): InternalLink[] {
  const links: InternalLink[] = [
    { href: "/thermomix", label: "Thermomix", group: "related-content" },
    { href: "/prezentacja", label: "Umów prezentację", group: "conversion" },
  ];
  if (relatedLocation) {
    links.unshift({
      href: relatedLocation.urlPath,
      label: `Thermomix ${relatedLocation.name}`,
      group: "related-content",
    });
  }
  return links;
}

/** Caps + dedupes a combined set of link groups before rendering. */
export function composeLinks(groups: InternalLink[][], max = 12): InternalLink[] {
  const seen = new Set<string>();
  const flat = groups.flat();
  const deduped = flat.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
  return deduped.slice(0, max);
}
