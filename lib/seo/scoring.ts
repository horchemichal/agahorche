import type { SeoScoreInputs, SeoScoreResult } from "@/types/seo";

/**
 * SEO SCORE 0-100 (spec §26).
 *
 * This is a deliberately transparent, editable weighted-sum model rather
 * than a black box — every factor and its weight is named so a human can
 * sanity-check or retune it once real Search Console data starts flowing
 * in (see /app/api/n8n/seo for where that data will eventually arrive).
 *
 * Weights sum to 100. Factors we don't have data for yet (Search Console,
 * organic sessions) simply contribute 0 rather than being guessed — the
 * score is honestly lower until real data exists, which is the point: it's
 * meant to prioritize WHERE to invest next, not to flatter unbuilt pages.
 */

const WEIGHTS = {
  population: 15,
  tier: 15,
  content: 15,
  internalLinks: 10,
  searchConsolePerformance: 20,
  organicTraffic: 15,
  competitionInverse: 10,
} as const;

function scorePopulation(population?: number): number {
  if (!population) return 0;
  // Log-scaled: a 20k town and a 1.8M capital shouldn't be 90x apart.
  const capped = Math.min(population, 2_000_000);
  const value = Math.log10(capped) / Math.log10(2_000_000);
  return Math.round(value * WEIGHTS.population);
}

function scoreTier(tier: SeoScoreInputs["tier"]): number {
  const map: Record<SeoScoreInputs["tier"], number> = {
    A: 1,
    B: 0.7,
    C: 0.4,
    "long-tail": 0.15,
  };
  return Math.round(map[tier] * WEIGHTS.tier);
}

function scoreContent(hasDedicatedContent: boolean): number {
  return hasDedicatedContent ? WEIGHTS.content : 0;
}

function scoreInternalLinks(count?: number): number {
  if (!count) return 0;
  const value = Math.min(count / 10, 1); // 10+ internal links = full marks
  return Math.round(value * WEIGHTS.internalLinks);
}

function scoreSearchConsole(sc?: SeoScoreInputs["searchConsole"]): number {
  if (!sc) return 0;
  const ctrScore = Math.min(sc.ctr / 0.08, 1); // 8% CTR treated as excellent
  const positionScore = sc.avgPosition <= 0 ? 0 : Math.max(0, 1 - (sc.avgPosition - 1) / 30);
  const impressionsScore = Math.min(sc.impressions / 1000, 1);
  const blended = ctrScore * 0.4 + positionScore * 0.4 + impressionsScore * 0.2;
  return Math.round(blended * WEIGHTS.searchConsolePerformance);
}

function scoreOrganicTraffic(sessions?: number): number {
  if (!sessions) return 0;
  const value = Math.min(sessions / 500, 1); // 500+ monthly sessions = full marks
  return Math.round(value * WEIGHTS.organicTraffic);
}

function scoreCompetitionInverse(competition?: number): number {
  if (competition === undefined) return Math.round(WEIGHTS.competitionInverse * 0.5); // neutral
  const value = 1 - Math.min(Math.max(competition, 0), 100) / 100;
  return Math.round(value * WEIGHTS.competitionInverse);
}

export function computeSeoScore(inputs: SeoScoreInputs): SeoScoreResult {
  const breakdown = {
    population: scorePopulation(inputs.population),
    tier: scoreTier(inputs.tier),
    content: scoreContent(inputs.hasDedicatedContent),
    internalLinks: scoreInternalLinks(inputs.internalLinksCount),
    searchConsolePerformance: scoreSearchConsole(inputs.searchConsole),
    organicTraffic: scoreOrganicTraffic(inputs.organicSessions),
    competitionInverse: scoreCompetitionInverse(inputs.competitionEstimate),
  };

  const score = Object.values(breakdown).reduce((sum, v) => sum + v, 0);

  let recommendation: SeoScoreResult["recommendation"];
  if (!inputs.hasDedicatedContent && score >= 40) recommendation = "build";
  else if (inputs.hasDedicatedContent && score < 35) recommendation = "hold";
  else if (inputs.hasDedicatedContent && score < 60) recommendation = "optimize";
  else recommendation = "expand";

  return { score: Math.min(score, 100), breakdown, recommendation };
}
