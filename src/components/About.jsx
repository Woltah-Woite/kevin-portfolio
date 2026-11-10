import { about } from '../data/profile'
import { Check } from './Icons'

export default function About() {
  const { capstone, education, building } = about

  return (
    <section id="about" data-hue="262" className="section">
      <div className="about-grid">
        <div className="about-main neu">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          <p className="muted">{about.text}</p>
          <ul className="focus-list">
            {about.focus.map((f) => (
              <li key={f} className="neu-in">
                <span className="check"><Check /></span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-side">
          <div className="info-card neu building">
            <div className="logo-well neu-in">
              <img src={building.logo} alt="AT-ICE logo" />
            </div>
            <div>
              <span className="eyebrow">{building.label}</span>
              <h3>{building.title}</h3>
              <p className="muted">{building.text}</p>
            </div>
          </div>

          <div className="info-card neu">
            <span className="eyebrow">{education.label}</span>
            <h3>{education.degree}</h3>
            <p className="school">
              {education.school} <span className="chip">{education.year}</span>
            </p>
            <p className="muted small">{education.focus}</p>
          </div>

          <div className="info-card neu">
            <span className="eyebrow">{capstone.label}</span>
            <h3>{capstone.title}</h3>
            <p className="meta">{capstone.meta}</p>
            <p className="muted small">{capstone.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
