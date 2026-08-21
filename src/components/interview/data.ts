export type InterviewProfile = {
  name: string
  team: string
  role: string
  image: string
  description: string
  interviewTitle: string
  href: string
  objectPosition: string
}

export const interviews: readonly InterviewProfile[] = [
  {
    name: '진명희',
    team: '피플팀',
    role: 'People Team',
    image: './images/interview/people-editorial.png',
    description: '사람이 모이고, 함께 일하고, 성장하는 모든 순간을 고민합니다. 구성원의 경험과 조직의 방향이 자연스럽게 이어질 수 있도록 바로고만의 일하는 환경을 만들어가고 있습니다.',
    interviewTitle: '한 직무에서 지속 성장한 케이스',
    href: '#interview',
    objectPosition: 'center',
  },
  {
    name: '김민구',
    team: '물류OS개발센터',
    role: 'Legal Team',
    image: './images/interview/legal-editorial.png',
    description: '새로운 사업과 빠른 의사결정이 안전하게 앞으로 나아갈 수 있도록 함께 답을 찾습니다. 규정을 지키는 것에서 그치지 않고 비즈니스가 더 나은 선택을 할 수 있도록 돕습니다.',
    interviewTitle: '인턴부터 리더까지',
    href: '#interview',
    objectPosition: 'center',
  },
  {
    name: '심항보',
    team: '현장통합사업팀',
    role: 'Integrated Operations Team',
    image: './images/interview/operations-editorial.png',
    description: '수많은 주문과 현장의 움직임이 매끄럽게 연결될 수 있도록 운영의 구조를 만들고 개선합니다. 작은 비효율 하나까지 발견하고 더 나은 흐름으로 바꾸는 일을 합니다.',
    interviewTitle: '장기근속자 케이스',
    href: '#interview',
    objectPosition: 'center',
  },
  {
    name: '박소은',
    team: '물류운영사업부',
    role: 'QA Team',
    image: './images/interview/qa-editorial.png',
    description: '고객과 라이더, 상점이 안정적으로 서비스를 사용할 수 있도록 제품의 완성도를 끊임없이 검증합니다. 문제가 발생하기 전에 발견하고 더 나은 사용자 경험을 만들어갑니다.',
    interviewTitle: '직무가 변환된 케이스',
    href: '#interview',
    objectPosition: 'center',
  },
  {
    name: '조보현',
    team: '4륜사업본부',
    role: 'Accounting Team',
    image: './images/interview/accounting-editorial.png',
    description: '숫자를 통해 회사의 현재를 정확하게 기록하고 다음 의사결정을 위한 기반을 만듭니다. 빠르게 변화하는 사업 속에서도 신뢰할 수 있는 재무 정보를 만드는 것이 우리의 역할입니다.',
    interviewTitle: '바로고의 또 다른 사업모델',
    href: '#interview',
    objectPosition: 'center',
  },
]
