// Project illustrations. Colors come from the theme, so they
// follow the chameleon hue and dark mode.

function Campus() {
  return (
    <svg viewBox="0 0 320 220" className="fig" role="img" aria-label="Campus Connect AI mobile dashboard">
      {/* phone */}
      <rect x="26" y="14" width="118" height="196" rx="18" className="surface lo-stroke" />
      <rect x="36" y="30" width="98" height="164" rx="10" className="well" />
      <rect x="70" y="20" width="30" height="4" rx="2" className="dim" />

      {/* map grid */}
      <path d="M36 70h98M36 110h98M36 150h98M68 30v164M102 30v164" className="grid" />
      <path d="M40 176c20-30 34-14 48-46s30-30 42-60" className="route" />

      {/* pins */}
      <circle cx="88" cy="130" r="13" className="glow" />
      <circle cx="88" cy="130" r="6" className="a" />
      <circle cx="122" cy="74" r="5" className="a2" />
      <circle cx="52" cy="92" r="4" className="dim" />
      <circle cx="58" cy="168" r="4" className="dim" />

      {/* floating stat card */}
      <rect x="160" y="28" width="134" height="64" rx="14" className="surface" />
      <text x="174" y="50" className="label">Study zone</text>
      <text x="174" y="76" className="big">82%</text>
      <text x="232" y="76" className="label">free now</text>

      {/* bar chart card */}
      <rect x="160" y="106" width="134" height="92" rx="14" className="surface" />
      <text x="174" y="126" className="label">Busy hours</text>
      {[18, 30, 46, 38, 56, 26, 14].map((h, i) => (
        <rect key={i} x={176 + i * 16} y={186 - h} width="9" height={h} rx="3" className={i === 4 ? 'a' : 'bar'} />
      ))}
    </svg>
  )
}

function Vision() {
  return (
    <svg viewBox="0 0 320 220" className="fig" role="img" aria-label="VisionVault object detection preview">
      <rect x="16" y="14" width="288" height="192" rx="14" className="surface" />
      <rect x="28" y="26" width="196" height="168" rx="10" className="well" />

      {/* scene: desk, laptop, person, cup */}
      <rect x="28" y="150" width="196" height="44" className="dim-soft" />
      <circle cx="82" cy="78" r="18" className="shape" />
      <path d="M50 150c0-34 14-50 32-50s32 16 32 50z" className="shape" />
      <rect x="132" y="112" width="58" height="38" rx="4" className="shape" />
      <rect x="126" y="148" width="70" height="6" rx="3" className="shape" />
      <rect x="198" y="128" width="14" height="22" rx="3" className="shape" />

      {/* detection boxes */}
      <rect x="44" y="54" width="76" height="98" rx="4" className="box" />
      <rect x="44" y="42" width="66" height="14" rx="3" className="a" />
      <text x="49" y="52" className="tag">person 0.97</text>

      <rect x="124" y="104" width="76" height="54" rx="4" className="box b2" />
      <rect x="124" y="92" width="66" height="14" rx="3" className="a2" />
      <text x="129" y="102" className="tag">laptop 0.91</text>

      <rect x="194" y="122" width="22" height="32" rx="3" className="box" />

      {/* side panel */}
      <text x="236" y="44" className="label">Detected</text>
      {[['person', 97], ['laptop', 91], ['cup', 84]].map(([name, v], i) => (
        <g key={name} transform={`translate(236 ${58 + i * 34})`}>
          <text y="10" className="small">{name}</text>
          <rect y="16" width="56" height="6" rx="3" className="well" />
          <rect y="16" width={(56 * v) / 100} height="6" rx="3" className={i === 1 ? 'a2' : 'a'} />
        </g>
      ))}
      <rect x="236" y="164" width="56" height="20" rx="10" className="a" />
      <text x="264" y="178" className="tag mid">Export</text>
    </svg>
  )
}

function UiKit() {
  return (
    <svg viewBox="0 0 320 220" className="fig" role="img" aria-label="Pulse UI Kit component tiles">
      {/* button tile */}
      <rect x="16" y="16" width="140" height="58" rx="14" className="surface" />
      <rect x="32" y="31" width="76" height="28" rx="10" className="a" />
      <text x="70" y="49" className="tag mid">Button</text>
      <circle cx="132" cy="45" r="12" className="well" />

      {/* toggle tile */}
      <rect x="164" y="16" width="140" height="58" rx="14" className="surface" />
      <rect x="180" y="34" width="44" height="22" rx="11" className="a" />
      <circle cx="213" cy="45" r="8" className="knob" />
      <rect x="236" y="34" width="44" height="22" rx="11" className="well" />
      <circle cx="247" cy="45" r="8" className="surface" />

      {/* slider tile */}
      <rect x="16" y="84" width="140" height="58" rx="14" className="surface" />
      <rect x="32" y="110" width="108" height="8" rx="4" className="well" />
      <rect x="32" y="110" width="68" height="8" rx="4" className="a" />
      <circle cx="100" cy="114" r="10" className="surface lo-stroke" />

      {/* checkbox tile */}
      <rect x="164" y="84" width="140" height="58" rx="14" className="surface" />
      <rect x="180" y="102" width="22" height="22" rx="6" className="a" />
      <path d="M185 113l4 4 8-9" className="check-mark" />
      <rect x="210" y="108" width="50" height="8" rx="4" className="dim" />
      <rect x="268" y="102" width="22" height="22" rx="6" className="well" />

      {/* card tile */}
      <rect x="16" y="152" width="288" height="54" rx="14" className="surface" />
      <circle cx="44" cy="179" r="14" className="a2" />
      <rect x="68" y="168" width="92" height="8" rx="4" className="dim" />
      <rect x="68" y="182" width="60" height="7" rx="3.5" className="dim-soft" />
      <rect x="220" y="166" width="68" height="26" rx="10" className="well" />
      <text x="254" y="183" className="small mid">Dark / Light</text>
    </svg>
  )
}

// A night scene from the game: the moon, the Bakunawa and the HUD
function Bathala() {
  const stars = [[40, 30], [92, 18], [140, 44], [214, 22], [262, 52], [298, 26], [180, 70], [64, 78]]
  const tiles = Array.from({ length: 16 }, (_, i) => i)
  return (
    <svg viewBox="0 0 320 220" className="fig" role="img" aria-label="Bathala's Shadow game scene">
      <defs>
        <linearGradient id="bs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1030" />
          <stop offset="1" stopColor="#2a1d4e" />
        </linearGradient>
        <linearGradient id="bs-serpent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5b4bd6" />
          <stop offset="1" stopColor="#2fc6c9" />
        </linearGradient>
        <clipPath id="bs-frame"><rect x="12" y="10" width="296" height="200" rx="12" /></clipPath>
        <mask id="bs-crescent">
          <rect x="200" y="30" width="70" height="70" fill="#fff" />
          <circle cx="248" cy="54" r="24" fill="#000" />
        </mask>
      </defs>

      <g clipPath="url(#bs-frame)">
        <rect x="12" y="10" width="296" height="200" fill="url(#bs-sky)" />
        {stars.map(([x, y]) => <rect key={x} x={x} y={y} width="3" height="3" fill="#e9e6ff" opacity="0.8" />)}

        {/* the moon the Bakunawa wants to eat */}
        <circle cx="236" cy="62" r="26" fill="#f6efc8" mask="url(#bs-crescent)" />

        {/* Bakunawa */}
        <path d="M24 132c34-40 62 8 96-22s52-46 86-18 40 6 58-6" fill="none" stroke="url(#bs-serpent)" strokeWidth="13" strokeLinecap="round" />
        <path d="M24 132c34-40 62 8 96-22s52-46 86-18 40 6 58-6" fill="none" stroke="#0d1030" strokeWidth="2" strokeDasharray="2 9" opacity="0.6" />
        <circle cx="264" cy="86" r="10" fill="#2fc6c9" />
        <rect x="266" y="81" width="4" height="4" fill="#ff5d73" />

        {/* pixel ground */}
        {tiles.map((i) => (
          <rect key={i} x={12 + i * 19} y={176} width="19" height="34" fill={i % 2 ? '#2f6b45' : '#357a4e'} />
        ))}
        <rect x="12" y="172" width="296" height="6" fill="#4f9a5f" />

        {/* player */}
        <rect x="150" y="150" width="12" height="22" fill="#e9e6ff" />
        <rect x="150" y="146" width="12" height="8" fill="#ffcf6b" />
        <rect x="162" y="156" width="10" height="3" fill="#2fc6c9" />

        {/* HUD */}
        <rect x="22" y="20" width="96" height="40" rx="6" fill="#0d1030" opacity="0.75" />
        <text x="30" y="34" fill="#e9e6ff" fontSize="9" fontWeight="700" fontFamily="JetBrains Mono, monospace">LV 12  BAKUNAWA</text>
        <rect x="30" y="39" width="80" height="6" rx="3" fill="#3a2f5f" />
        <rect x="30" y="39" width="58" height="6" rx="3" fill="#ff5d73" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={30 + i * 21} y="49" width="17" height="5" rx="2" fill={i < 2 ? '#ffcf6b' : '#3a2f5f'} />
        ))}
      </g>
      <rect x="12" y="10" width="296" height="200" rx="12" fill="none" className="lo-stroke" />
    </svg>
  )
}

const figures = { campus: Campus, vision: Vision, uikit: UiKit, bathala: Bathala }

export default function Figure({ name }) {
  const Fig = figures[name]
  return Fig ? <Fig /> : null
}
