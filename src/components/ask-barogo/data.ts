export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    content: '안녕하세요. 바로고입니다!',
  },
]

export function getSampleAnswer(question: string) {
  if (question.includes('채용') || question.includes('과정')) {
    return '직무에 따라 세부 단계는 달라질 수 있지만, 지원서 검토와 인터뷰를 통해 서로의 경험과 일하는 방식을 알아가고 있어요.'
  }

  if (question.includes('문화') || question.includes('일')) {
    return '바로고는 더 나은 방법을 함께 찾고, 서로의 전문성을 존중하며 빠르게 실행하고 배우는 문화를 중요하게 생각해요.'
  }

  if (question.includes('사람') || question.includes('인재')) {
    return '변화를 두려워하지 않고 동료와 솔직하게 소통하며, 맡은 문제를 끝까지 해결해 나가는 분과 함께하고 싶어요.'
  }

  return '좋은 질문이에요. 현재는 체험용 답변을 제공하고 있으며, 추후 실제 BAROGO 채용 AI가 더 자세한 내용을 안내할 예정이에요.'
}
