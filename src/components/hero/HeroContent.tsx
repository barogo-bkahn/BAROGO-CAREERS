import { SEASON_LABELS, type Season } from './heroConfig'

export default function HeroContent({ season }: { season: Season }) {
  return (
    <section className="hero-content" aria-labelledby="hero-title">
      <div className="hero-content__brand">BAROGO CAREERS</div>
      <h1 id="hero-title">모든 변화의 순간에도<span>우리는 앞으로 갑니다.</span></h1>
      <a className="hero-content__cta" href="#careers" aria-label="채용 포지션 살펴보기">
        Explore Careers <span aria-hidden="true">→</span>
      </a>
      <p className="sr-only" aria-live="polite">현재 배경 계절은 {SEASON_LABELS[season]}입니다.</p>
    </section>
  )
}
