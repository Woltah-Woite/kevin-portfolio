import { useState } from 'react'
import { contact, profile } from '../data/profile'
import { Mail, Pin, Phone, Arrow } from './Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend yet, so this opens the visitor's email app with the message filled in
  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" data-hue="28" className="section">
      <div className="contact-grid neu">
        <div className="contact-info">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p className="muted">{contact.text}</p>

          <ul className="contact-list">
            <li>
              <span className="icon-btn static"><Mail /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="icon-btn static"><Pin /></span>
              <div>
                <small>Location</small>
                <span>{contact.location}</span>
              </div>
            </li>
            <li>
              <span className="icon-btn static"><Phone /></span>
              <div>
                <small>Phone</small>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={send}>
          <label>
            <span>Name <span className="req">*</span></span>
            <input name="name" value={form.name} onChange={update} required placeholder="Juan Dela Cruz" />
          </label>
          <label>
            <span>Email <span className="req">*</span></span>
            <input name="email" type="email" value={form.email} onChange={update} required placeholder="juan@email.com" />
          </label>
          <label>
            <span>Message <span className="req">*</span></span>
            <textarea name="message" rows="5" value={form.message} onChange={update} required placeholder={`Hi ${profile.firstName}, I'd like to talk about...`} />
          </label>
          <button type="submit" className="btn btn-accent">
            Send message <Arrow />
          </button>
        </form>
      </div>
    </section>
  )
}
