import { useEffect, useState } from 'react'

export default function SiteHeader() {
  const isHome = window.location.pathname === '/' || window.location.pathname === ''
  const [isOnHero, setIsOnHero] = useState(isHome)

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.seasonal-hero')
    if (!hero) {
      setIsOnHero(false)
      return
    }

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
      <a className="site-header__brand" href="/" aria-label="BAROGO CAREERSs 홈">
        BAROGO <span>CAREERS</span>
      </a>
      <nav className="site-header__nav" aria-label="주요 메뉴">
        <a href="/culture" aria-current={window.location.pathname === '/culture' ? 'page' : undefined}>CULTURE</a>
        <a href="/interview" aria-current={window.location.pathname === '/interview' ? 'page' : undefined}>INTERVIEW</a>
        <a href="/careers" aria-current={window.location.pathname === '/careers' ? 'page' : undefined}>CAREERS</a>
        <a href="/faq" aria-current={window.location.pathname === '/faq' ? 'page' : undefined}>FAQ</a>
      </nav>
    </header>
  )
}
