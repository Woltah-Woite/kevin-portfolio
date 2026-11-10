import { useEffect, useState } from 'react'

function readSaved(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // storage blocked, just skip it
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = readSaved('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    save('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}

// Each section has its own hue. The page takes on the color of
// whatever section you're looking at, like a chameleon.
export function useChameleon() {
  const [active, setActive] = useState('home')
  const [cycling, setCycling] = useState(() => readSaved('cycle') === 'on')

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[data-hue]')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          setActive(el.id)
          document.documentElement.style.setProperty('--hue', el.dataset.hue)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('cycling', cycling)
    save('cycle', cycling ? 'on' : 'off')
  }, [cycling])

  return { active, cycling, toggleCycle: () => setCycling((c) => !c) }
}
