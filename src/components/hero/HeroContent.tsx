export default function HeroContent() {
  return (
    <>
      <header className="hero-header">
        <a className="hero-header__brand" href="#home-snap-page" aria-label="BAROGO Careers 홈">
          BAROGO <span>CAREERS</span>
        </a>
        <nav className="hero-header__nav" aria-label="주요 메뉴">
          <a href="#culture">CULTURE</a>
          <a href="#interview">INTERVIEW</a>
          <a href="#careers">CAREERS</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero-content" aria-labelledby="hero-title">
        <h1 id="hero-title">
          <span className="hero-content__headline-primary">배달을 넘어</span>
          <span className="hero-content__headline-primary">사람과 가치를 잇는 일</span>
          <span className="hero-content__headline-secondary">그 가슴 뛰는 여정에 합류하세요!</span>
        </h1>
        <a className="hero-content__cta" href="#careers" aria-label="채용 포지션 살펴보기">
          <span>Explore Careers</span>
          <span className="hero-content__cta-arrow" aria-hidden="true">→</span>
        </a>
      </section>

      <a className="hero-scroll" href="#baro-way" aria-label="다음 바로 웨이 섹션으로 이동">
        <span>Scroll</span>
        <span aria-hidden="true">⌄</span>
      </a>
    </>
  )
}
