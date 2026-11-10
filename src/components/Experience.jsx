import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" data-hue="290" data-num="04" className="section">
      <div className="section-head reveal r-up">
        <span className="eyebrow">{experience.eyebrow}</span>
        <h2>{experience.title}</h2>
      </div>

      <div className="exp-grid">
        <div className="timeline">
          {experience.jobs.map((job, i) => (
            <article key={job.role} className="job neu reveal r-left" style={{ '--d': i + 1 }}>
              <span className="job-dot" />
              <div className="job-top">
                <div>
                  <h3>{job.role}</h3>
                  <p className="meta">{job.place}</p>
                </div>
                <span className="chip">{job.years}</span>
              </div>
              <ul>
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <aside className="seminars neu reveal r-right" style={{ '--d': 2 }}>
          <span className="eyebrow">Seminars attended</span>
          <ul>
            {experience.seminars.map((s) => (
              <li key={s.title} className="neu-in">
                <strong>{s.title}</strong>
                <span className="muted small">{s.place}</span>
                <span className="chip chip-accent">{s.date}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
