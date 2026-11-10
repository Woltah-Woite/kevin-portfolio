import { projects } from '../data/profile'

function Preview({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.preview} className="preview-img" />
  }
  // Placeholder mockup until there's a real screenshot
  return (
    <div className="mock" aria-label={project.preview}>
      <div className="mock-bar">
        <i /><i /><i />
      </div>
      <div className="mock-body">
        <div className="mock-side" />
        <div className="mock-main">
          <div className="mock-line w60" />
          <div className="mock-line w40" />
          <div className="mock-cards">
            <div /><div /><div />
          </div>
        </div>
      </div>
      <span className="mock-label">{project.preview}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="portfolio" data-hue="320" className="section">
      <div className="section-head">
        <span className="eyebrow">{projects.eyebrow}</span>
        <h2>{projects.title}</h2>
        <p className="muted">{projects.text}</p>
      </div>

      <div className="project-list">
        {projects.items.map((p, i) => (
          <article key={p.name} className={`project neu ${i % 2 ? 'flip' : ''}`}>
            <div className="project-preview neu-in">
              <Preview project={p} />
            </div>

            <div className="project-info">
              <div className="project-top">
                <span className="chip">{p.year}</span>
                <span className="chip chip-accent">Featured</span>
              </div>
              <h3>{p.name}</h3>
              <div className="tech-row">
                {p.tech.map((t) => (
                  <span key={t} className="tech">{t}</span>
                ))}
              </div>

              <div className="project-cols">
                <div>
                  <span className="eyebrow">Roles</span>
                  <ul>
                    {p.roles.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="eyebrow">Highlights</span>
                  <ul>
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </div>

              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-accent">
                  View project
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
