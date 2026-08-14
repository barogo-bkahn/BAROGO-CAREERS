import SeasonalHero from './components/hero/SeasonalHero'
import { SiteHeader } from './components/header'
import { BaroWay } from './components/baro-way'
import { Interview } from './components/interview'
import { HowWeGrow } from './components/how-we-grow'
import { AskBarogo } from './components/ask-barogo'
import { ApplyCta, Footer } from './components/ending'

export default function App() {
  return (
    <div id="home-snap-page">
      <SiteHeader />
      <SeasonalHero />
      <BaroWay />
      <Interview />
      <HowWeGrow />
      <AskBarogo />
      <ApplyCta />
      <Footer />
    </div>
  )
}
