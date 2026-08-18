import { useEffect, useState } from 'react'
import styles from './BaroWay.module.css'

const principles = [
  { keyword: '본다', description: '본질을 보고, 옳은 답을 선택합니다.' },
  { keyword: '간다', description: '빠르게 움직이고, 끝까지 결과를 만듭니다.' },
  { keyword: '잇다', description: '더 나은 답을 위해 경계를 넘어 연결합니다.' },
  { keyword: '키운다', description: '나의 성장을 넘어, 함께 성장합니다.' },
  { keyword: '남긴다', description: '오늘의 실행을 내일의 기준으로 만듭니다.' },
] as const

export default function BaroWay() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    const timer = window.setInterval(() => {
      setIsResetting(false)
      setActiveIndex((current) => current + 1)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  const handleRollEnd = () => {
    if (activeIndex !== principles.length) return
    setIsResetting(true)
    setActiveIndex(0)
  }

  const rollingPrinciples = [...principles, principles[0]]

  return (
    <section id="baro-way" className={styles.section} aria-labelledby="baro-way-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>BARO WAY</p>
          <h2 id="baro-way-title">
            우리는 더 나은 길을 향해,<br />
            바로 갑니다.
          </h2>
          <p className={styles.lead}>
            거창한 구호보다 매일의 판단과 행동으로,<br />
            바로고다운 일하는 방식을 실천합니다.
          </p>
        </header>

        <div className={styles.rollerFrame} aria-label="바로고의 다섯 가지 일하는 방식">
          <span className={styles.frameBracket} aria-hidden="true">(</span>
          <div className={styles.roller}>
            <div
              className={`${styles.rail}${isResetting ? ` ${styles.railResetting}` : ''}`}
              style={{ transform: `translateY(-${activeIndex * 100}%)` }}
              onTransitionEnd={handleRollEnd}
            >
              {rollingPrinciples.map((principle, index) => (
                <p
                  className={styles.principle}
                  key={`${principle.keyword}-${index}`}
                  aria-hidden={index !== activeIndex || index === principles.length}
                >
                  <strong>바로 <em>{principle.keyword}</em></strong>
                  <span className={styles.dash} aria-hidden="true">—</span>
                  <span>{principle.description}</span>
                </p>
              ))}
            </div>
          </div>
          <span className={styles.frameBracket} aria-hidden="true">)</span>
        </div>

        <footer className={styles.outro}>
          <p>
            좋은 영향이 물드는 생태계를 만드는 바로고의 일하는 방식을 만나보세요!
          </p>
          <a href="#baro-way-detail">
            BARO WAY 더 알아보기 <span aria-hidden="true">→</span>
          </a>
        </footer>
      </div>
    </section>
  )
}
