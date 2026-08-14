import { useEffect, useRef } from 'react'
import { getSeasonState, HERO_CONFIG } from './heroConfig'

type Props = { startedAt: number }
const TAU = Math.PI * 2

function hash(value: number) {
  const x = Math.sin(value * 91.733) * 43758.5453
  return x - Math.floor(x)
}

function seasonAmount(elapsed: number, season: string) {
  const transitionAlignedElapsed = Math.max(0, elapsed - HERO_CONFIG.seasonTransitionMs)
  const state = getSeasonState(transitionAlignedElapsed)
  if (state.current === season) return 1 - state.blend
  if (state.next === season) return state.blend
  return 0
}

function drawRain(ctx: CanvasRenderingContext2D, width: number, height: number, elapsed: number, amount: number) {
  if (amount < 0.02) return
  ctx.globalAlpha = amount * HERO_CONFIG.rainIntensity * 0.42
  ctx.strokeStyle = '#d4e6e8'
  ctx.lineWidth = 1

  for (let index = 0; index < 62; index += 1) {
    const x = (hash(index + 10) * (width + 80) - elapsed * (0.018 + hash(index) * 0.01)) % (width + 80)
    const y = (hash(index + 40) * height + elapsed * (0.05 + hash(index + 50) * 0.035)) % height
    ctx.beginPath()
    if (hash(index + 70) > 0.56) {
      ctx.ellipse(x, y, 3 + hash(index + 80) * 4, 1.2, 0, 0, TAU)
    } else {
      ctx.moveTo(x - 2, y - 4)
      ctx.lineTo(x + 2, y + 4)
    }
    ctx.stroke()
  }
}

function drawLeaves(ctx: CanvasRenderingContext2D, width: number, height: number, elapsed: number, amount: number) {
  if (amount < 0.02) return
  const colors = ['#c47a28', '#a84722', '#d49b32']
  ctx.globalAlpha = amount * HERO_CONFIG.leavesIntensity * 0.72

  for (let index = 0; index < 28; index += 1) {
    const speed = 0.008 + hash(index + 110) * 0.009
    const x = (hash(index + 120) * (width + 100) - elapsed * speed + width + 100) % (width + 100) - 50
    const y = (hash(index + 140) * height + Math.sin(elapsed * 0.0005 + index) * 18 + height) % height
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(hash(index + 160) * TAU + elapsed * 0.00012)
    ctx.fillStyle = colors[index % colors.length]
    ctx.beginPath()
    ctx.ellipse(0, 0, 3.4, 1.5, 0, 0, TAU)
    ctx.fill()
    ctx.restore()
  }
}

function drawSnow(ctx: CanvasRenderingContext2D, width: number, height: number, elapsed: number, amount: number) {
  if (amount < 0.02) return
  ctx.globalAlpha = amount * HERO_CONFIG.snowIntensity * 0.82
  ctx.fillStyle = '#f5f7f4'

  for (let index = 0; index < 46; index += 1) {
    const fall = elapsed * (0.01 + hash(index + 210) * 0.014)
    const drift = Math.sin(elapsed * 0.00035 + index) * 10
    const x = (hash(index + 220) * (width + 80) + drift + width + 80) % (width + 80) - 40
    const y = (hash(index + 240) * height + fall) % height
    ctx.beginPath()
    ctx.arc(x, y, 0.8 + hash(index + 260) * 1.8, 0, TAU)
    ctx.fill()
  }
}

export default function SeasonalAtmosphere({ startedAt }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionQuery.matches
    let frame = 0
    let width = 0
    let height = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const handleMotionChange = (event: MediaQueryListEvent) => { reducedMotion = event.matches }
    const render = (now: number) => {
      const elapsed = now - startedAt
      ctx.clearRect(0, 0, width, height)

      if (!reducedMotion) {
        drawRain(ctx, width, height, elapsed, seasonAmount(elapsed, 'summer'))
        drawLeaves(ctx, width, height, elapsed, seasonAmount(elapsed, 'autumn'))
        drawSnow(ctx, width, height, elapsed, seasonAmount(elapsed, 'winter'))
      }

      ctx.globalAlpha = 1
      frame = window.requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    motionQuery.addEventListener('change', handleMotionChange)
    frame = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [startedAt])

  return <canvas ref={canvasRef} className="seasonal-atmosphere" aria-hidden="true" />
}
