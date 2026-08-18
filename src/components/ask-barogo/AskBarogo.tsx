import { useEffect, useRef, useState, type FormEvent } from 'react'
import { getSampleAnswer, initialMessages, type ChatMessage } from './data'
import styles from './AskBarogo.module.css'

export default function AskBarogo() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messageEndRef = useRef<HTMLDivElement>(null)
  const replyTimerRef = useRef<number | null>(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, isTyping])

  useEffect(() => () => {
    if (replyTimerRef.current !== null) window.clearTimeout(replyTimerRef.current)
  }, [])

  function sendMessage(content: string) {
    const question = content.trim()
    if (!question || isTyping) return

    setMessages((current) => [
      ...current,
      { id: `user-${Date.now()}`, role: 'user', content: question },
    ])
    setInput('')
    setIsTyping(true)

    replyTimerRef.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: 'assistant', content: getSampleAnswer(question) },
      ])
      setIsTyping(false)
      replyTimerRef.current = null
    }, 1100)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <section id="ask-barogo" className={styles.section} aria-labelledby="ask-barogo-title">
      <header className={styles.guidance}>
        <h2 id="ask-barogo-title">바로고 채용에 대해 궁금한 점이나 의견이 있다면 자유롭게 남겨주세요 :)</h2>
        <p>여러분의 소중한 의견에 귀 기울여, 더 좋은 모습으로 답하겠습니다.</p>
      </header>

      <div className={styles.chat}>
        <div className={styles.chatHeader}>
          <div className={styles.chatIdentity}>
            <span className={styles.onlineDot} aria-hidden="true" />
            <strong>바로고 채용 봇</strong>
          </div>
        </div>

        <div className={styles.messages} aria-live="polite" aria-label="BAROGO AI 대화 내용">
          {messages.map((message) => (
            <div
              className={`${styles.messageRow} ${message.role === 'user' ? styles.messageRowUser : ''}`}
              key={message.id}
            >
              <p className={`${styles.bubble} ${message.role === 'user' ? styles.userBubble : styles.aiBubble}`}>
                {message.content}
              </p>
            </div>
          ))}

          {isTyping && (
            <div className={styles.messageRow} role="status" aria-label="바로고 채용 봇이 답변을 작성하고 있습니다">
              <div className={`${styles.bubble} ${styles.aiBubble} ${styles.typing}`} aria-hidden="true">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={messageEndRef} />
        </div>

        <div className={styles.composerArea}>
          <form className={styles.composer} onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="barogo-chat-input">바로고 채용 봇에게 질문하기</label>
            <input
              id="barogo-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="바로고 채용에 대해 궁금한 내용을 자유롭게 질문해보세요"
              autoComplete="off"
            />
            <button type="submit" aria-label="메시지 전송" disabled={!input.trim() || isTyping}>
              <span aria-hidden="true">↑</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
