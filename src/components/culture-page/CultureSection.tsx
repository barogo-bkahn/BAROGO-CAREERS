import type { CultureItem } from './data'
import styles from './CulturePage.module.css'

type CultureSectionProps = {
  id: string
  title: string
  items: CultureItem[]
}

export default function CultureSection({ id, title, items }: CultureSectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHero}>
        <h1 id={`${id}-title`}>{title}</h1>
      </header>

      <ol className={styles.list}>
        {items.map((item, index) => {
          const number = String(index + 1).padStart(2, '0')
          return (
            <li id={`${id}-${number}`} className={styles.row} key={item.title}>
              <span className={styles.number} aria-hidden="true">{number}</span>
              <div className={styles.copy}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
