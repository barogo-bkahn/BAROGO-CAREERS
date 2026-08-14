import { useEffect, useRef, useState, type CSSProperties } from 'react'
import DeliveryScooter from './DeliveryScooter'
import HeroContent from './HeroContent'
import SeasonalAtmosphere from './SeasonalAtmosphere'
import SeasonalPhotoBackground from './SeasonalPhotoBackground'
import { HERO_CONFIG, SEASONS, type Season } from './heroConfig'

export default function SeasonalHero() {
  const startedAt = useRef(performance.now())
  const [season, setSeason] = useState<Season>('spring')
  const heroStyle = {
    '--season-transition-ms': `${HERO_CONFIG.seasonTransitionMs}ms`,
    '--background-scale': HERO_CONFIG.backgroundScale,
    '--background-drift-seconds': `${HERO_CONFIG.backgroundDriftSeconds}s`,
  } as CSSProperties

  useEffect(() => {
    const timer = window.setInterval(() => {
      const index = Math.floor((performance.now() - startedAt.current) / HERO_CONFIG.seasonDurationMs) % SEASONS.length
      setSeason(SEASONS[index])
    }, 150)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="seasonal-hero" data-season={season} style={heroStyle}>
      <SeasonalPhotoBackground activeSeason={season} />
      <SeasonalAtmosphere startedAt={startedAt.current} />
      <DeliveryScooter />
      <div className="seasonal-hero__scrim" aria-hidden="true" />
      <HeroContent season={season} />
    </main>
  )
}
