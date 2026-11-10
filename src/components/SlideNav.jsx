import { links } from './Navbar'
import { useScrollProgress } from '../hooks'

// Slide counter on the right side plus a progress bar at the top
export default function SlideNav({ active }) {
  const progress = useScrollProgress()
  const index = Math.max(0, links.findIndex((l) => l.id === active))
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <>
      <div className="progress-bar" style={{ transform: `scaleX(${progress})` }} />

      <nav className="slide-nav" aria-label="Slides">
        <span className="slide-count">
          <strong>{pad(index + 1)}</strong>
          <span>/ {pad(links.length)}</span>
        </span>
        <ul>
          {links.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={i === index ? 'active' : ''}
                aria-label={l.label}
                aria-current={i === index ? 'true' : undefined}
              >
                <span className="slide-label">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
