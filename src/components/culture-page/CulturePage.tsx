import { Footer } from '../ending'
import { SiteHeader } from '../header'
import CultureSection from './CultureSection'
import { baroWayItems, benefitItems } from './data'
import styles from './CulturePage.module.css'

export default function CulturePage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <CultureSection id="baro-way" title="BARO WAY" items={baroWayItems} />
        <CultureSection id="benefits" title="BENEFITS" items={benefitItems} />
      </main>
      <Footer />
    </div>
  )
}
