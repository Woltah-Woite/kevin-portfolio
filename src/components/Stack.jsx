import { stack } from '../data/profile'

export default function Stack() {
  return (
    <section id="tech-stack" data-hue="205" className="section">
      <div className="stack-head">
        <div className="section-head reveal r-left">
          <span className="eyebrow">{stack.eyebrow}</span>
          <h2>{stack.title}</h2>
          <p className="muted">{stack.text}</p>
        </div>

        <div className="code-card neu reveal r-flip" style={{ '--d': 2 }}>
          <div className="code-bar">
            <i /><i /><i />
            <span>developer.js</span>
          </div>
          <pre className="code neu-in">
<span className="k">const</span> <span className="v">developer</span> = {'{'}
{'\n'}  name: <span className="s">'Kevin O. Abad'</span>,
{'\n'}  role: <span className="s">'Full Stack Developer'</span>,
{'\n'}  frontend: [<span className="s">'React'</span>, <span className="s">'JavaScript'</span>],
{'\n'}  backend: [<span className="s">'Laravel'</span>, <span className="s">'REST APIs'</span>],
{'\n'}  data: [<span className="s">'MySQL'</span>, <span className="s">'Redis'</span>],
{'\n'}  leading: <span className="s">'AT-ICE ERP'</span>,
{'\n'}  openToWork: <span className="k">true</span>,
{'\n'}{'}'}
          </pre>
        </div>
      </div>

      <div className="stack-grid">
        {stack.items.map((s, i) => (
          <div key={s.name} className="stack-tile neu reveal r-pop" style={{ '--d': i % 5 }}>
            <div className="stack-icon neu-in">
              <img src={s.icon} alt="" width="38" height="38" loading="lazy" decoding="async" />
            </div>
            <strong>{s.name}</strong>
            <span className="muted">{s.role}</span>
          </div>
        ))}
      </div>

      <div className="more-skills reveal r-up">
        <span className="eyebrow">Also skilled in</span>
        <div className="tag-row">
          {stack.more.map((m) => (
            <span key={m} className="chip">{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
