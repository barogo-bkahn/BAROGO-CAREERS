import { Footer } from '../ending'
import { SiteHeader } from '../header'
import styles from './DetailPage.module.css'

type DetailPageProps = {
  eyebrow: string
  title: string
  description: string
  sections: readonly string[]
}

export default function DetailPage({ eyebrow, title, description, sections }: DetailPageProps) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <header className={styles.hero}>
          <p>{eyebrow}</p>
          <h1>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.sections} aria-label={`${eyebrow} 콘텐츠`}>
          {sections.map((section) => (
            <section id={section.toLowerCase().replaceAll(' ', '-')} className={styles.placeholder} key={section}>
              <h2>{section}</h2>
              <p>상세 콘텐츠가 이 영역에 추가될 예정입니다.</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
