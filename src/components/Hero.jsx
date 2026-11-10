import { profile } from '../data/profile'
import { Github, Linkedin, Facebook, Arrow } from './Icons'

export default function Hero() {
  const { links } = profile

  return (
    <section id="home" data-hue="165" className="section hero">
      <div className="hero-text">
        <span className="pill neu-sm reveal r-up">
          <span className="live-dot" />
          {profile.status}
        </span>

        <h1 className="reveal r-up" style={{ '--d': 1 }}>
          Hi, I'm <span className="grad">{profile.name}</span>
        </h1>
        <p className="role reveal r-left" style={{ '--d': 2 }}>
          <span className="role-line" />
          {profile.role}
        </p>

        <div className="tag-row reveal r-up" style={{ '--d': 3 }}>
          {profile.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <p className="lead reveal r-up" style={{ '--d': 4 }}>{profile.intro}</p>
        <p className="muted reveal r-up" style={{ '--d': 5 }}>{profile.current}</p>

        <div className="btn-row reveal r-up" style={{ '--d': 6 }}>
          <a href="#contact" className="btn btn-accent">
            Send a message <Arrow />
          </a>
          <a href="#portfolio" className="btn">View projects</a>
        </div>

        <div className="socials reveal r-up" style={{ '--d': 7 }}>
          <a href={links.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub"><Github /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn"><Linkedin /></a>
          <a href={links.facebook} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Facebook"><Facebook /></a>
        </div>
      </div>

      <aside className="profile-card neu reveal r-zoom" style={{ '--d': 2 }}>
        <div className="avatar-ring">
          <div className="avatar-well">
            <img src={profile.photo} alt={profile.name} width="160" height="160" fetchpriority="high" />
          </div>
        </div>
        <span className="eyebrow">{profile.card.label}</span>
        <h3>{profile.card.title}</h3>
        <p className="muted">{profile.card.text}</p>
        <div className="card-stats">
          <div className="stat neu-in">
            <strong>4th</strong>
            <span>Year BSIT</span>
          </div>
          <div className="stat neu-in">
            <strong>PM</strong>
            <span>AT-ICE ERP</span>
          </div>
        </div>
      </aside>

      <div className="stats-strip neu reveal r-up" style={{ '--d': 3 }}>
        {profile.stats.map((s) => (
          <div key={s.label} className="strip-item">
            <strong className="grad">{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
