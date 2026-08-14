import { useEffect, useRef, useState } from 'react'

import { buildingShapes, hiringStages, routeNetworkStages } from './data'
import styles from './HowWeHire.module.css'

const INTRO_DURATION_MS = 2700

export function HowWeHire() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [isMapReady, setIsMapReady] = useState(false)
  const [selectedStage, setSelectedStage] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || hasEntered) return

    if (typeof IntersectionObserver === 'undefined') {
      const fallbackTimer = setTimeout(() => setHasEntered(true), 0)
      return () => clearTimeout(fallbackTimer)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasEntered(true)
        observer.disconnect()
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [hasEntered])

  useEffect(() => {
    if (!hasEntered) return
    const timer = window.setTimeout(() => setIsMapReady(true), INTRO_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [hasEntered])

  const activeRouteCount = selectedStage ?? 0

  return (
    <section
      ref={sectionRef}
      id="career-route"
      className={styles.section}
      data-intro-state={hasEntered ? 'playing' : 'waiting'}
      data-map-ready={isMapReady ? 'true' : 'false'}
      aria-labelledby="route-title"
    >
      <svg
        className={styles.mapOverlay}
        viewBox="0 0 1716 917"
        preserveAspectRatio="xMidYMid slice"
        role="group"
        aria-label="서류 접수부터 입사까지 도로를 따라 이어지는 채용 여정 지도"
      >
        <defs>
          <filter id="route-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="building-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {buildingShapes.map((points, index) => (
            <clipPath id={`building-clip-${index}`} key={`building-clip-${hiringStages[index].number}`}>
              <polygon points={points} />
            </clipPath>
          ))}
        </defs>

        <g className={styles.routeLayer} aria-hidden="true">
          {routeNetworkStages.slice(0, activeRouteCount).map((segment) => (
            <g className={styles.routeSegment} data-route-id={segment.id} key={segment.id}>
              <path className={styles.routeGlow} d={segment.path} pathLength="1" />
              <path className={styles.routeLine} d={segment.path} pathLength="1" />
            </g>
          ))}
        </g>

        <g className={styles.highlightLayer} aria-hidden="true">
          {selectedStage !== null && (
            <image
              className={styles.buildingLiftImage}
              href="/how-we-hire/how-we-hire-top-view.png"
              width="1716"
              height="917"
              clipPath={`url(#building-clip-${selectedStage})`}
              preserveAspectRatio="none"
            />
          )}
          {buildingShapes.map((points, index) => (
            <polygon
              className={`${styles.buildingHighlight} ${selectedStage === index ? styles.buildingHighlightActive : ''}`}
              points={points}
              key={hiringStages[index].number}
            />
          ))}
        </g>

        <g className={styles.badgeLayer}>
          {hiringStages.map((stage, index) => {
            const isSelected = selectedStage === index
            const isReached = selectedStage !== null && index < selectedStage

            return (
              <foreignObject
                className={styles.badgeObject}
                x={stage.badgeX}
                y={stage.badgeY}
                width="140"
                height="48"
                key={stage.number}
              >
                <button
                  type="button"
                  className={`${styles.stageBadge} ${isReached ? styles.stageBadgeReached : ''} ${isSelected ? styles.stageBadgeSelected : ''}`}
                  aria-label={`${stage.number} ${stage.label} 선택`}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedStage(index)}
                >
                  <b>{stage.number}</b>
                  <span>{stage.label}</span>
                </button>
              </foreignObject>
            )
          })}
        </g>
      </svg>

      <div className={styles.intro}>
        <p className={styles.eyebrow}><span>HOW WE HIRE</span></p>
        <h2 id="route-title">
          <span>목적지로 향하는 여정을</span>
          <span>한눈에 확인하세요.</span>
        </h2>
      </div>

      <p className={styles.srStatus} aria-live="polite">
        {selectedStage === null
          ? '전형을 선택해 채용 여정을 확인하세요.'
          : `${hiringStages[selectedStage].label} 단계가 선택되었습니다. ${activeRouteCount}개 이동 구간이 표시되었습니다.`}
      </p>
    </section>
  )
}
