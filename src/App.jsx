import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import About from './components/About'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SlideNav from './components/SlideNav'
import { useTheme, useChameleon, useReveal } from './hooks'
import { profile } from './data/profile'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const { active, cycling, toggleCycle } = useChameleon()
  useReveal()

  return (
    <>
      <SlideNav active={active} />
      <Navbar
        active={active}
        theme={theme}
        onTheme={toggleTheme}
        cycling={cycling}
        onCycle={toggleCycle}
      />
      <main>
        <Hero />
        <Stack />
        <About />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}
