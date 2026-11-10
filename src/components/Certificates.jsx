import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { certificates } from '../data/profile'
import { Close, Arrow } from './Icons'

// Simple medal mark used on every certificate card
function Medal() {
  return (
    <svg viewBox="0 0 64 64" className="medal" aria-hidden="true">
      <path d="M22 4h8l6 18h-8zM42 4h-8l-6 18h8z" className="ribbon" />
      <circle cx="32" cy="38" r="20" className="disc" />
      <circle cx="32" cy="38" r="14" className="ring" />
      <path d="M32 29l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2-4.5-4.4 6.2-.9z" className="star" />
    </svg>
  )
}

function CertModal({ cert, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <div className="modal-backdrop" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} className="cert-modal neu" role="dialog" aria-modal="true" aria-label={cert.title} tabIndex={-1}>
        <button type="button" className="icon-btn close-btn modal-close" onClick={onClose} aria-label="Close">
          <Close />
        </button>

        <div className="cert-hero neu-in">
          <Medal />
          <span className="eyebrow">{cert.award}</span>
          <h3>{cert.title}</h3>
          <p className="muted small">{cert.issuer}</p>
        </div>

        <p>{cert.summary}</p>

        <dl className="cert-facts">
          <div><dt>Issued by</dt><dd>{cert.issuer}</dd></div>
          <div><dt>Awarded</dt><dd>{cert.awarded}</dd></div>
          <div><dt>Course</dt><dd>{cert.course}</dd></div>
          <div><dt>Term</dt><dd>{cert.term}</dd></div>
        </dl>

        <div className="tag-row">
          {cert.skills.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>

        {cert.file && (
          <a href={cert.file} target="_blank" rel="noreferrer" className="btn btn-accent">
            View certificate <Arrow />
          </a>
        )}
      </div>
    </div>,
    document.body
  )
}

export default function Certificates() {
  const [open, setOpen] = useState(null)
  const lastTile = useRef(null)

  const close = useCallback(() => {
    setOpen(null)
    lastTile.current?.focus()
  }, [])

  return (
    <section id="certificates" data-hue="45" data-num="05" className="section">
      <div className="section-head reveal r-up">
        <span className="eyebrow">{certificates.eyebrow}</span>
        <h2>{certificates.title}</h2>
        <p className="muted">{certificates.text}</p>
      </div>

      <div className="cert-grid">
        {certificates.items.map((c, i) => (
          <button
            key={c.title}
            type="button"
            className="cert-card neu reveal r-pop"
            style={{ '--d': i }}
            onClick={(e) => {
              lastTile.current = e.currentTarget
              setOpen(i)
            }}
          >
            <span className="cert-preview neu-in">
              <span className="cert-frame">
                <Medal />
                <span className="cert-lines"><i /><i /><i /></span>
              </span>
            </span>
            <span className="cert-body">
              <span className="cert-top">
                <span className="chip chip-accent">{c.issuer}</span>
                <span className="muted small">{c.awarded}</span>
              </span>
              <strong>{c.title}</strong>
              <span className="muted small">{c.course} · {c.term}</span>
              <span className="cert-open">
                View details <Arrow />
              </span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && <CertModal cert={certificates.items[open]} onClose={close} />}
    </section>
  )
}
