import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { stack } from '../data/profile'
import { Close } from './Icons'

const CARD_W = 440
const GAP = 16

// Tech tiles. Clicking one opens a floating card right next to it.
function TechGrid() {
  const [open, setOpen] = useState(null)
  const [pos, setPos] = useState(null)
  const gridRef = useRef(null)
  const cardRef = useRef(null)
  const tileRefs = useRef([])

  // place the card beside the tile: right if it fits, else left, else below
  useLayoutEffect(() => {
    if (open === null) return
    const place = () => {
      const grid = gridRef.current.getBoundingClientRect()
      const tile = tileRefs.current[open].getBoundingClientRect()
      const left = tile.left - grid.left
      const right = tile.right - grid.left
      const top = tile.top - grid.top
      if (right + GAP + CARD_W <= grid.width) {
        setPos({ left: right + GAP, top, side: 'right' })
      } else if (left - GAP - CARD_W >= 0) {
        setPos({ left: left - GAP - CARD_W, top, side: 'left' })
      } else {
        setPos({ left: 0, top: tile.bottom - grid.top + GAP, side: 'below', full: true })
      }
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [open])

  // close on Esc or a click outside, and give focus back to the tile
  useEffect(() => {
    if (open === null) return
    cardRef.current?.focus({ preventScroll: true })
    const tile = tileRefs.current[open]
    const onKey = (e) => e.key === 'Escape' && close()
    const onDown = (e) => {
      if (cardRef.current?.contains(e.target)) return
      if (tileRefs.current.some((t) => t?.contains(e.target))) return
      setOpen(null)
    }
    const close = () => {
      setOpen(null)
      tile?.focus()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  // once the card has its final spot, scroll so all of it sits between
  // the sticky navbar and the bottom of the screen
  useEffect(() => {
    if (open === null || !pos || !cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    const nav = document.querySelector('.nav-wrap')?.getBoundingClientRect().bottom ?? 0
    const top = nav + GAP
    const bottom = window.innerHeight - GAP
    let move = 0
    if (r.top < top) move = r.top - top // hidden under the navbar: scroll up
    else if (r.bottom > bottom) move = Math.min(r.bottom - bottom, r.top - top) // cut off below: scroll down
    if (move) window.scrollBy({ top: move, behavior: 'instant' })
  }, [open, pos])

  const item = open !== null ? stack.items[open] : null

  return (
    <div className="stack-grid" ref={gridRef}>
      {stack.items.map((s, i) => (
        <button
          key={s.name}
          type="button"
          ref={(el) => (tileRefs.current[i] = el)}
          className={`stack-tile neu reveal r-pop ${open === i ? 'selected' : ''}`}
          style={{ '--d': i % 5 }}
          onClick={() => setOpen(open === i ? null : i)}
          aria-expanded={open === i}
          aria-controls="tech-card"
        >
          <span className="stack-icon neu-in">
            <img src={s.icon} alt="" width="38" height="38" loading="lazy" decoding="async" />
          </span>
          <strong>{s.name}</strong>
          <span className="muted">{s.role}</span>
        </button>
      ))}

      {item && pos && (
        <div
          id="tech-card"
          ref={cardRef}
          role="dialog"
          aria-label={`${item.name} details`}
          tabIndex={-1}
          className={`tech-card neu side-${pos.side}`}
          style={{ left: pos.left, top: pos.top, width: pos.full ? '100%' : CARD_W }}
        >
          <div className="tech-card-head">
            <span className="stack-icon neu-in small-icon">
              <img src={item.icon} alt="" width="30" height="30" />
            </span>
            <div>
              <h3>{item.name}</h3>
              <span className="chip chip-accent">{item.role}</span>
              <span className="muted small since">{item.since}</span>
            </div>
            <button type="button" className="icon-btn close-btn" onClick={() => setOpen(null)} aria-label="Close">
              <Close />
            </button>
          </div>

          <div className="tech-block">
            <span className="eyebrow">Definition</span>
            <p>{item.definition}</p>
          </div>
          <div className="tech-block">
            <span className="eyebrow">Background</span>
            <p className="muted">{item.background}</p>
          </div>
          <div className="tech-block neu-in usage">
            <span className="eyebrow">How I use it</span>
            <ul>
              {item.usage.map((u) => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Stack() {
  return (
    <section id="tech-stack" data-hue="205" className="section">
      <div className="stack-head">
        <div className="section-head reveal r-left">
          <span className="eyebrow">{stack.eyebrow}</span>
          <h2>{stack.title}</h2>
          <p className="muted">{stack.text}</p>
        </div>

        <div className="code-card neu reveal r-flip" style={{ '--d': 2 }}>
          <div className="code-bar">
            <i /><i /><i />
            <span>developer.js</span>
          </div>
          <pre className="code neu-in">
<span className="k">const</span> <span className="v">developer</span> = {'{'}
{'\n'}  name: <span className="s">'Kevin O. Abad'</span>,
{'\n'}  role: <span className="s">'Full Stack Developer'</span>,
{'\n'}  frontend: [<span className="s">'React'</span>, <span className="s">'JavaScript'</span>],
{'\n'}  backend: [<span className="s">'Laravel'</span>, <span className="s">'REST APIs'</span>],
{'\n'}  data: [<span className="s">'MySQL'</span>, <span className="s">'Redis'</span>],
{'\n'}  leading: <span className="s">'AT-ICE ERP'</span>,
{'\n'}  openToWork: <span className="k">true</span>,
{'\n'}{'}'}
          </pre>
        </div>
      </div>

      <TechGrid />
      <p className="stack-hint muted small">Tap a card to see what it is and how I use it.</p>

      <div className="more-skills reveal r-up">
        <span className="eyebrow">Also skilled in</span>
        <div className="tag-row">
          {stack.more.map((m) => (
            <span key={m} className="chip">{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
