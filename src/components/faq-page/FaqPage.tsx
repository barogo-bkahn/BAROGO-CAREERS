import { useMemo, useState } from 'react'
import { Footer } from '../ending'
import { SiteHeader } from '../header'
import { FAQ_CATEGORIES, FAQ_DATA, type FaqCategory } from './data'
import styles from './FaqPage.module.css'

export default function FaqPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<FaqCategory>('전체')
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set())

  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase('ko')
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = category === '전체' || faq.category === category
      const searchable = `${faq.question} ${faq.answer} ${faq.category} ${faq.section}`.toLocaleLowerCase('ko')
      return matchesCategory && (!keyword || searchable.includes(keyword))
    })
  }, [category, query])

  const sections = useMemo(() => {
    return filtered.reduce<Array<{ title: string; items: typeof FAQ_DATA }>>((groups, faq) => {
      const current = groups.at(-1)
      if (current?.title === faq.section) current.items.push(faq)
      else groups.push({ title: faq.section, items: [faq] })
      return groups
    }, [])
  }, [filtered])

  const toggle = (id: number) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <header className={styles.hero}>
          <h1>FAQ</h1>
        </header>

        <div className={styles.content}>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon} aria-hidden="true" />
            <label className="sr-only" htmlFor="faq-search">FAQ 검색</label>
            <input id="faq-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="궁금한 내용을 검색해보세요." />
          </div>

          <div className={styles.filterScroller}>
            <div className={styles.filters} role="group" aria-label="FAQ 카테고리">
              {FAQ_CATEGORIES.map((label) => (
                <button type="button" className={category === label ? styles.filterActive : ''} aria-pressed={category === label} onClick={() => setCategory(label)} key={label}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <p className="sr-only" aria-live="polite">검색 결과 {filtered.length}개</p>

          {sections.length ? (
            <div className={styles.faqGroups}>
              {sections.map((section) => (
                <section className={styles.faqGroup} aria-labelledby={`faq-${section.title}`} key={section.title}>
                  <h2 id={`faq-${section.title}`}>{section.title}</h2>
                  <div className={styles.accordion}>
                    {section.items.map((faq) => {
                      const isOpen = openItems.has(faq.id)
                      const panelId = `faq-answer-${faq.number}`
                      return (
                        <article className={`${styles.item}${isOpen ? ` ${styles.itemOpen}` : ''}`} key={faq.id}>
                          <h3>
                            <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(faq.id)}>
                              <span className={styles.faqNumber}>{faq.number}</span>
                              <span className={styles.question}>{faq.question}</span>
                              <span className={styles.chevron} aria-hidden="true" />
                            </button>
                          </h3>
                          <div id={panelId} className={styles.answerGrid} aria-hidden={!isOpen}>
                            <div>
                              <div className={styles.answer}>
                                <p>{faq.answer}</p>
                                {faq.link && <a href={faq.link.href} tabIndex={isOpen ? 0 : -1}>{faq.link.label}</a>}
                              </div>
                            </div>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className={styles.empty} role="status">검색 결과가 없습니다. 다른 검색어로 확인해 주세요.</div>
          )}
        </div>

        <section className={styles.contact} aria-labelledby="faq-contact-title">
          <h2 id="faq-contact-title">아직 궁금한 점이 있나요?</h2>
          <p>찾고 있는 답변이 없다면 채용팀에 문의해 주세요.<br />지원 중인 포지션이 있다면 공고명과 성함을 함께 남겨주시면 더 빠르게 확인할 수 있습니다.</p>
          <a href="/#ask-barogo">채용팀에 문의하기 ↗</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
