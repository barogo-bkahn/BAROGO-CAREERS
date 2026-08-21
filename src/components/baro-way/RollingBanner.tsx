import { useEffect, useRef, useState } from 'react'
import styles from './RollingBanner.module.css'

type Principle = {
  keyword: string
  description: string
}

type RollingBannerProps = {
  principles: readonly Principle[]
}

const AUTOPLAY_MS = 3200

type RollLineProps = {
  text: string
  prevText: string
  transitionId: number
  reducedMotion: boolean
  className?: string
}

function RollLine({ text, prevText, transitionId, reducedMotion, className = '' }: RollLineProps) {
  if (reducedMotion) {
    return (
      <span className={`${styles.rollWindow} ${className}`}>
        <span className={styles.rollItem}>{text}</span>
      </span>
    )
  }

  return (
    <span className={`${styles.rollWindow} ${className}`}>
      <span key={transitionId} className={styles.rollTrack}>
        <span className={styles.rollItem}>{prevText}</span>
        <span className={styles.rollItem}>{text}</span>
      </span>
    </span>
  )
}

export default function RollingBanner({ principles }: RollingBannerProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const prevIndexRef = useRef(0)
  const transitionIdRef = useRef(0)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const handleChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (paused) return

    const timer = window.setInterval(() => {
      setIndex((current) => {
        prevIndexRef.current = current
        transitionIdRef.current += 1
        return (current + 1) % principles.length
      })
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [paused, principles.length])

  const current = principles[index]
  const previous = principles[prevIndexRef.current]

  return (
    <div
      className={styles.board}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.display} aria-hidden="true">
        <div className={styles.keywordRow}>
          <span className={styles.fixedWord}>바로</span>
          <RollLine
            text={current.keyword}
            prevText={previous.keyword}
            transitionId={transitionIdRef.current}
            reducedMotion={reducedMotion}
            className={styles.keywordWindow}
          />
        </div>

        <RollLine
          text={current.description}
          prevText={previous.description}
          transitionId={transitionIdRef.current}
          reducedMotion={reducedMotion}
          className={styles.descWindow}
        />
      </div>

      <ul className="sr-only">
        {principles.map((principle) => (
          <li key={principle.keyword}>
            <strong>바로 {principle.keyword}.</strong> {principle.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
