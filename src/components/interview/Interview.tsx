import { useState } from 'react'
import { interviews } from './data'
import styles from './Interview.module.css'

export default function Interview() {
  const [active, setActive] = useState(0)
  const selected = interviews[active]

  return (
    <section id="interview" className={styles.section} aria-label="인터뷰">
      <div className={styles.portraits}>
        {interviews.map((profile, index) => (
          <img
            key={profile.name}
            className={`${styles.portrait} ${index === active ? styles.portraitActive : ''}`}
            src={profile.image}
            alt={index === active ? `${profile.name} ${profile.team}` : ''}
            aria-hidden={index !== active}
            style={{ objectPosition: profile.objectPosition }}
          />
        ))}
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.top}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>INTERVIEW</p>
        </div>
        <div className={styles.description} key={`description-${active}`}>
          <p className={styles.role}>{selected.role}</p>
          <blockquote className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <span>{selected.description}</span>
            <span className={styles.quoteMark} aria-hidden="true">”</span>
          </blockquote>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.avatarScroller}>
          <div className={styles.avatars} role="group" aria-label="인터뷰 대상 선택">
            {interviews.map((profile, index) => (
              <button
                type="button"
                className={styles.avatarButton}
                key={profile.name}
                aria-label={`${profile.name} 인터뷰 보기`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                <span className={`${styles.indicator} ${index === active ? styles.indicatorActive : ''}`} />
                <img src={profile.image} alt={`${profile.name} ${profile.team}`} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.meta} key={`meta-${active}`}>
          <strong>{selected.name}</strong>
          <span className={styles.team}>{selected.team}</span>
          <span className={styles.title}>{selected.interviewTitle}</span>
          <a href="/interview">INTERVIEW 보기 <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
