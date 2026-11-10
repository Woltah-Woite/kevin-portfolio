import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Shows just the certificate, drawn from the PDF with pdf.js, over a
// lightly blurred page. No toolbar, no side panels. Click outside or
// press Esc to close. pdf.js is only downloaded when this opens.
export default function CertViewer({ file, title, onClose }) {
  const canvasRef = useRef(null)
  const closeRef = useRef(null)
  const [state, setState] = useState('loading')

  useEffect(() => {
    let cancelled = false
    let task = null

    async function draw() {
      try {
        const pdfjs = await import('pdfjs-dist')
        const worker = await import('pdfjs-dist/build/pdf.worker.min.mjs?url')
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default

        const doc = await pdfjs.getDocument(file).promise
        const page = await doc.getPage(1)
        if (cancelled) return

        // fit the page inside the screen, sharp on high-DPI displays
        const base = page.getViewport({ scale: 1 })
        const fit = Math.min((window.innerWidth * 0.9) / base.width, (window.innerHeight * 0.86) / base.height)
        const ratio = window.devicePixelRatio || 1
        const viewport = page.getViewport({ scale: fit * ratio })

        const canvas = canvasRef.current
        canvas.width = Math.floor(viewport.width)
        canvas.height = Math.floor(viewport.height)
        canvas.style.width = `${Math.floor(viewport.width / ratio)}px`
        canvas.style.height = `${Math.floor(viewport.height / ratio)}px`

        // 'print' draws in one go instead of waiting on animation frames
        task = page.render({ canvasContext: canvas.getContext('2d'), viewport, intent: 'print' })
        await task.promise
        if (!cancelled) setState('ready')
      } catch (err) {
        if (!cancelled && err?.name !== 'RenderingCancelledException') setState('error')
      }
    }

    draw()
    return () => {
      cancelled = true
      task?.cancel()
    }
  }, [file])

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

      {state === 'loading' && <span className="viewer-spinner" aria-label="Loading certificate" />}
      {state === 'error' && (
        <a className="btn btn-accent" href={file} target="_blank" rel="noreferrer">
          Open the PDF instead
        </a>
      )}
      <canvas
        ref={canvasRef}
        className={`cert-canvas ${state === 'ready' ? 'shown' : ''}`}
        aria-label={`${title} certificate`}
        role="img"
      />
    </div>,
    document.body
  )
}
