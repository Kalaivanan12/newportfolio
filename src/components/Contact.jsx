import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission logic
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Title */}
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.contactTitle}>
            Get In <span className={styles.accent}>Touch</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Info side (Left) */}
          <div className={`${styles.infoSide} reveal`}>
            <h3 className={styles.connectTitle}>Let's Connect</h3>
            <p className={styles.connectDesc}>
              I'm currently looking for new opportunities. Whether you have a question or
              just want to say hi, I'll try my best to get back to you!
            </p>

            <div className={styles.infoCards}>
              {/* Email Card */}
              <div className={styles.infoCard}>
                <div className={`${styles.iconCircle} ${styles.blueIcon}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:kalaivanankarthi31@gmail.com" className={styles.infoLink}>
                    kalaivanankarthi31@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className={styles.infoCard}>
                <div className={`${styles.iconCircle} ${styles.purpleIcon}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Phone</span>
                  <a href="tel:+918870051316" className={styles.infoLink}>
                    +91 8870051316
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/kalaivanan31/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialCircle}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Kalaivanan12"
                target="_blank"
                rel="noreferrer"
                className={styles.socialCircle}
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Form side (Right) */}
          <div className={`${styles.formSide} reveal`}>
            <div className={styles.formCard}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  {sent ? '✓ Message Sent!' : 'Send Message'}
                  {!sent && (
                    <svg className={styles.sendIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
                {sent && <p className={styles.successMsg}>Thanks! I'll get back to you soon.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
