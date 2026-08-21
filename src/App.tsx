import SeasonalHero from './components/hero/SeasonalHero'
import { SiteHeader } from './components/header'
import { BaroWay } from './components/baro-way'
import { Interview } from './components/interview'
import { Benefit } from './components/benefit'
import { AskBarogo } from './components/ask-barogo'
import { ApplyCta, Footer } from './components/ending'
import { DetailPage } from './components/detail-page'
import { CulturePage } from './components/culture-page'
import { FaqPage } from './components/faq-page'

const detailPages = {
  '/interview': {
    eyebrow: 'INTERVIEW',
    title: '바로고를 만드는\n사람들의 이야기',
    description: '바로고 구성원들의 다양한 경험과 성장 이야기를 전합니다.',
    sections: ['ALL INTERVIEWS'],
  },
  '/careers': {
    eyebrow: 'CAREERS',
    title: '새로운 길을\n함께 만들어가요.',
    description: '바로고의 채용 공고와 직무별 상세 정보를 만나보세요.',
    sections: ['OPEN POSITIONS'],
  },
} as const

function HomePage() {
  return (
    <div id="home-snap-page">
      <SiteHeader />
      <SeasonalHero />
      <BaroWay />
      <Benefit />
      <Interview />
      <AskBarogo />
      <ApplyCta />
      <Footer />
    </div>
  )
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'

  if (pathname === '/culture') return <CulturePage />
  if (pathname === '/faq') return <FaqPage />

  const page = detailPages[pathname as keyof typeof detailPages]

  return page ? <DetailPage {...page} /> : <HomePage />
}
