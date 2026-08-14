export const HERO_CONFIG = {
  seasonDurationMs: 1500,
  seasonTransitionMs: 500,
  scooterX: 0.49,
  scooterY: 0.49,
  scooterScale: 1,
  rainIntensity: 0.35,
  leavesIntensity: 0.25,
  snowIntensity: 0.35,
  backgroundScale: 1.055,
  backgroundDriftSeconds: 18,
} as const

export const SEASONS = ['spring', 'summer', 'autumn', 'winter'] as const
export type Season = (typeof SEASONS)[number]

export const SEASON_LABELS: Record<Season, string> = {
  spring: '봄',
  summer: '여름',
  autumn: '가을',
  winter: '겨울',
}

export const SEASON_ASSETS: Record<Season, string> = {
  spring: '/assets/seasonal/spring.webp',
  summer: '/assets/seasonal/summer.webp',
  autumn: '/assets/seasonal/autumn.webp',
  winter: '/assets/seasonal/winter.webp',
}

export function getSeasonState(elapsedMs: number) {
  const cycle = HERO_CONFIG.seasonDurationMs * SEASONS.length
  const withinCycle = ((elapsedMs % cycle) + cycle) % cycle
  const index = Math.floor(withinCycle / HERO_CONFIG.seasonDurationMs)
  const withinSeason = withinCycle % HERO_CONFIG.seasonDurationMs
  const blendStart = HERO_CONFIG.seasonDurationMs - HERO_CONFIG.seasonTransitionMs
  const rawBlend = Math.max(0, (withinSeason - blendStart) / HERO_CONFIG.seasonTransitionMs)
  const blend = rawBlend * rawBlend * (3 - 2 * rawBlend)

  return {
    current: SEASONS[index],
    next: SEASONS[(index + 1) % SEASONS.length],
    blend,
  }
}
