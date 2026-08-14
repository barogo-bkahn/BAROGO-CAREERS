import SeasonalHero from './components/hero/SeasonalHero'
import { BaroWay } from './components/baro-way'
import { Interview } from './components/interview'
import { HowWeGrow } from './components/how-we-grow'
import { AskBarogo } from './components/ask-barogo'
import { ApplyCta, Footer } from './components/ending'

export default function App() {
  return (
    <div id="home-snap-page">
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
