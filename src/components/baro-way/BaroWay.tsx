import styles from './BaroWay.module.css'
import RollingBanner from './RollingBanner'

const principles = [
  { keyword: '본다', description: '본질을 보고, 옳은 답을 선택합니다.' },
  { keyword: '간다', description: '빠르게 움직이고, 끝까지 결과를 만듭니다.' },
  { keyword: '잇다', description: '더 나은 답을 위해 경계를 넘어 연결합니다.' },
  { keyword: '키운다', description: '나의 성장을 넘어, 함께 성장합니다.' },
  { keyword: '남긴다', description: '오늘의 실행을 내일의 기준으로 만듭니다.' },
] as const

export default function BaroWay() {
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
            거창한 구호보다 매일의 판단과 행동으로, 바로고답게 일하는 방식을 실천합니다.<br />
          </p>
        </header>

        <RollingBanner principles={principles} />

        <footer className={styles.outro}>
          <p>
            좋은 영향이 물드는 생태계를 만드는 바로고의 일하는 방식을 만나보세요!
          </p>
          <a href="/culture">
            BARO WAY 더 알아보기 <span aria-hidden="true">→</span>
          </a>
        </footer>
      </div>
    </section>
  )
}
