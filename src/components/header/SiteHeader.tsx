import { useEffect, useState } from 'react'

export default function SiteHeader() {
  const [isOnHero, setIsOnHero] = useState(true)

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.seasonal-hero')
    if (!hero) return

    const updateHeader = () => {
      const headerHeight = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--site-header-height'),
      ) || 76
      setIsOnHero(hero.getBoundingClientRect().bottom > headerHeight)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    window.addEventListener('resize', updateHeader)
    return () => {
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('resize', updateHeader)
    }
  }, [])

  return (
    <header className={`site-header${isOnHero ? ' site-header--hero' : ''}`}>
      <a className="site-header__brand" href="#home-snap-page" aria-label="BAROGO Careers 홈">
        BAROGO <span>CAREERS</span>
      </a>
      <nav className="site-header__nav" aria-label="주요 메뉴">
        <a href="#baro-way">CULTURE</a>
        <a href="#interview">INTERVIEW</a>
        <a href="#careers">CAREERS</a>
        <a href="#ask-barogo">FAQ</a>
      </nav>
    </header>
  )
}
