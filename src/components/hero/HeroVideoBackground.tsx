import { useCallback, useEffect, useRef, useState } from 'react'
import { HERO_VIDEOS } from './heroVideos'

type Slot = 0 | 1

export default function HeroVideoBackground() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const currentIndex = useRef(0)
  const pendingCut = useRef(false)
  const [activeSlot, setActiveSlot] = useState<Slot>(0)
  const [sources, setSources] = useState<[string, string]>([
    HERO_VIDEOS[0],
    HERO_VIDEOS[1 % HERO_VIDEOS.length],
  ])

  const prepareFollowingVideo = useCallback((slot: Slot, index: number) => {
    setSources((current) => {
      const next: [string, string] = [...current]
      next[slot] = HERO_VIDEOS[index]
      return next
    })
  }, [])

  const cutToNext = useCallback(() => {
    const nextSlot = (activeSlot === 0 ? 1 : 0) as Slot
    const nextVideo = videoRefs.current[nextSlot]

    if (!nextVideo || nextVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      pendingCut.current = true
      return
    }

    pendingCut.current = false
    nextVideo.currentTime = 0
    void nextVideo.play().catch(() => undefined)

    const nextIndex = (currentIndex.current + 1) % HERO_VIDEOS.length
    currentIndex.current = nextIndex
    setActiveSlot(nextSlot)

    const followingIndex = (nextIndex + 1) % HERO_VIDEOS.length
    prepareFollowingVideo(activeSlot, followingIndex)
  }, [activeSlot, prepareFollowingVideo])

  useEffect(() => {
    const firstVideo = videoRefs.current[0]
    if (!firstVideo) return

    void firstVideo.play().catch(() => undefined)
  }, [])

  return (
    <div className="hero-video-background" aria-hidden="true">
      {sources.map((src, slot) => (
        <video
          key={`${slot}-${src}`}
          ref={(element) => { videoRefs.current[slot] = element }}
          className={`hero-video${activeSlot === slot ? ' is-active' : ''}`}
          src={src}
          autoPlay={activeSlot === slot}
          muted
          playsInline
          preload="auto"
          poster={slot === 0 ? './assets/seasonal/spring.webp' : undefined}
          onEnded={activeSlot === slot ? cutToNext : undefined}
          onCanPlay={() => {
            if (pendingCut.current && activeSlot !== slot) cutToNext()
          }}
        />
      ))}
    </div>
  )
}
