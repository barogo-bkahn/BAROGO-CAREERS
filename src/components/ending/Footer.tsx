import type { MouseEvent } from 'react'
import styles from './Ending.module.css'

const footerLinks = ['SNS', 'PRIVACY', 'TERMS'] as const

export default function Footer() {
  function keepPlaceholderOnPage(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
  }

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerBrand}>
        <strong>BAROGO Careers</strong>
        <small>© 2026 BAROGO. All rights reserved.</small>
      </div>
      <nav className={styles.footerLinks} aria-label="푸터 메뉴">
        {footerLinks.map((label) => (
          <a href="#" key={label} onClick={keepPlaceholderOnPage} aria-label={`${label} 링크 준비 중`}>
            {label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

