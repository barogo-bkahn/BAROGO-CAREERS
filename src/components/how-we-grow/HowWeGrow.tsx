import { useEffect, useRef, useState } from 'react'
import { benefits } from './data'
import styles from './HowWeGrow.module.css'

export default function HowWeGrow() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const lastIndex = benefits.length - visibleCount

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextCount = window.innerWidth <= 600 ? 1 : window.innerWidth <= 960 ? 2 : 3
      setVisibleCount(nextCount)
      setActiveIndex((current) => Math.min(current, benefits.length - nextCount))
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const moveTo = (nextIndex: number) => {
    const track = trackRef.current
    if (!track) return
    const index = Math.max(0, Math.min(nextIndex, lastIndex))
    const card = track.children[index] as HTMLElement | undefined
    track.scrollTo({ left: card?.offsetLeft ?? 0, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const syncActiveIndex = () => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.children) as HTMLElement[]
    const nearest = cards.reduce((result, card, index) => {
      const distance = Math.abs(card.offsetLeft - track.scrollLeft)
      return distance < result.distance ? { index, distance } : result
    }, { index: 0, distance: Number.POSITIVE_INFINITY })
    setActiveIndex(Math.min(nearest.index, lastIndex))
  }

  return (
    <section id="how-we-grow" className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.visual}>
        <img
          className={styles.people}
          src="./images/benefits/benefits-people.png"
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <div className={styles.scrim} aria-hidden="true" />
        <h2 id="benefits-title">Benefits</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.carousel}>
          <button type="button" className={`${styles.control} ${styles.previous}`} onClick={() => moveTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="이전 복리후생 보기">
            <span aria-hidden="true">‹</span>
          </button>
          <div className={styles.track} ref={trackRef} onScroll={syncActiveIndex}>
            {benefits.map((benefit) => (
              <article className={styles.card} key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
          <button type="button" className={`${styles.control} ${styles.next}`} onClick={() => moveTo(activeIndex + 1)} disabled={activeIndex === lastIndex} aria-label="다음 복리후생 보기">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  )
}
