import styles from './Ending.module.css'

export default function ApplyCta() {
  return (
    <section id="careers" className={styles.apply} aria-labelledby="apply-title">
      <h2 id="apply-title">바로고 지원하기</h2>
      <a href="#careers" aria-label="채용 바로가기">채용 바로가기</a>
    </section>
  )
}

