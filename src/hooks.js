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

// Plays each .reveal element's entrance when it scrolls into view,
// and resets it when it leaves so the slides animate again on the way back.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('js-reveal')

    const items = [...document.querySelectorAll('.reveal')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.12) {
            entry.target.classList.add('in')
          } else if (!entry.isIntersecting) {
            entry.target.classList.remove('in')
          }
        })
      },
      { threshold: [0, 0.12] }
    )
    items.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      root.classList.remove('js-reveal')
    }
  }, [])
}

// How far down the page we are, from 0 to 1
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return progress
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
