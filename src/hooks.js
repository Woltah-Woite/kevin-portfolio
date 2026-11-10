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

// Animates each .reveal element in when it scrolls into view and out
// when it is about to leave. data-dir tells the CSS which way we're
// scrolling, so things come in from and go out toward the right edge.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('js-reveal')

    let lastY = window.scrollY
    let dir = 'down'
    const onScroll = () => {
      const y = window.scrollY
      if (y !== lastY) dir = y > lastY ? 'down' : 'up'
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const SHOW = 0.15
    const observer = new IntersectionObserver(
      (entries) => {
        // state lives in data-reveal, not in className, because React
        // rewrites className whenever a component re-renders
        entries.forEach(({ target: el, isIntersecting, intersectionRatio }) => {
          const shown = el.dataset.reveal === 'in'
          if (isIntersecting && intersectionRatio >= SHOW && !shown) {
            el.dataset.dir = dir
            el.dataset.reveal = 'in'
          } else if (isIntersecting && intersectionRatio < SHOW && shown) {
            el.dataset.dir = dir
            el.dataset.reveal = 'out'
          } else if (!isIntersecting) {
            delete el.dataset.reveal
          }
        })
      },
      { threshold: [0, SHOW, 0.3] }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
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
