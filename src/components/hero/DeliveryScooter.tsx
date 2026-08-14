import type { CSSProperties } from 'react'
import DeliveryBoxLogo from './DeliveryBoxLogo'
import { HERO_CONFIG } from './heroConfig'

export default function DeliveryScooter() {
  const style = {
    '--scooter-x': `${HERO_CONFIG.scooterX * 100}%`,
    '--scooter-y': `${HERO_CONFIG.scooterY * 100}%`,
    '--scooter-scale': HERO_CONFIG.scooterScale,
  } as CSSProperties
  return (
    <div className="delivery-scooter" style={style} aria-label="오른쪽으로 계속 달리는 BAROGO 배달 스쿠터" role="img">
      <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orangeBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff7a32" /><stop offset="1" stopColor="#d94412" /></linearGradient>
          <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#99b8bd" /><stop offset="1" stopColor="#26383b" /></linearGradient>
          <filter id="scooterShadow" x="-20%" y="-30%" width="150%" height="170%"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <ellipse cx="125" cy="64" rx="98" ry="34" fill="#101615" opacity=".34" filter="url(#scooterShadow)" />
        <g className="scooter-running-group">
          <rect x="51" y="46" width="16" height="30" rx="7" fill="#121716" />
          <rect x="183" y="47" width="17" height="28" rx="8" fill="#111615" />
          <path d="M71 47 C98 35 141 37 184 51 L185 70 C141 83 98 84 70 72 Z" fill="url(#orangeBody)" />
          <path d="M82 51 C104 44 129 44 150 49 L145 72 C121 78 99 76 82 69 Z" fill="#202726" />
          <path d="M155 49 L182 53 L182 67 L155 72 C162 64 162 57 155 49Z" fill="#d84d19" />
          <path d="M171 43 L176 56 M171 77 L176 65" stroke="#1b211f" strokeWidth="4" strokeLinecap="round" />
          <path d="M169 43 L181 39 M169 77 L181 81" stroke="#222927" strokeWidth="3" strokeLinecap="round" />
          <circle cx="130" cy="60" r="24" fill="#151b1b" /><circle cx="130" cy="60" r="20" fill="#f06425" />
          <path d="M119 49 C130 40 145 47 148 59 C140 56 131 54 119 55Z" fill="url(#visor)" />
          <path d="M111 45 C103 49 98 54 95 61 M111 75 C102 72 98 68 95 61" stroke="#252c2a" strokeWidth="8" strokeLinecap="round" />
          <rect x="19" y="37" width="62" height="46" rx="7" fill="#1c2322" stroke="#46504d" strokeWidth="2" />
          <path d="M25 43 H74" stroke="#64706c" strokeWidth="2" opacity=".45" />
          <DeliveryBoxLogo />
          <path d="M83 59 H94" stroke="#0e1312" strokeWidth="6" strokeLinecap="round" />
          <circle className="wheel-hub" cx="59" cy="61" r="4" fill="#89938f" /><circle className="wheel-hub wheel-hub--front" cx="192" cy="61" r="4" fill="#89938f" />
          <path d="M197 51 L209 55 L209 67 L197 71Z" fill="#dfe4d8" opacity=".9" />
        </g>
      </svg>
    </div>
  )
}
