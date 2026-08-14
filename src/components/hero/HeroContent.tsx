export default function HeroContent() {
  return (
    <>
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
