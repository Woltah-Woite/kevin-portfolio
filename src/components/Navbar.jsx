import { useState } from 'react'
import { Sun, Moon, Palette, Menu, Close } from './Icons'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'tech-stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active, theme, onTheme, cycling, onCycle }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav neu">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-dot" />
          <span>kevin<span className="accent">.abad</span></span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-tools">
          <button
            className={`icon-btn ${cycling ? 'pressed' : ''}`}
            onClick={onCycle}
            title={cycling ? 'Stop color shifting' : 'Chameleon mode: shift colors'}
            aria-label="Toggle chameleon mode"
            aria-pressed={cycling}
          >
            <Palette />
          </button>
          <button
            className="icon-btn"
            onClick={onTheme}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
