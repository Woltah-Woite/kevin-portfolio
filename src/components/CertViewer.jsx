import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Shows just the certificate over a lightly blurred page.
// No toolbar, no side panels. Click outside or press Esc to close.
export default function CertViewer({ image, title, onClose }) {
  const closeRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    closeRef.current?.focus()
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
    <div
      className="cert-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} certificate`}
      onPointerDown={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* only visible to keyboard users */}
      <button ref={closeRef} type="button" className="sr-only-focusable" onClick={onClose}>
        Close certificate
      </button>

      {!ready && <span className="viewer-spinner" aria-hidden="true" />}
      <img
        src={image}
        alt={`${title} certificate`}
        className={`cert-canvas ${ready ? 'shown' : ''}`}
        onLoad={() => setReady(true)}
        decoding="async"
      />
    </div>,
    document.body
  )
}
