import HeroContent from './HeroContent'
import HeroVideoBackground from './HeroVideoBackground'

export default function SeasonalHero() {
  return (
    <main className="seasonal-hero">
      <HeroVideoBackground />
      <div className="seasonal-hero__scrim" aria-hidden="true" />
      <HeroContent />
    </main>
  )
}
