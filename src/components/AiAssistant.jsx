import { useState, useEffect, useRef } from 'react'
import styles from './AiAssistant.module.css'

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [thinkingStep, setThinkingStep] = useState(0)
  const [matrixActive, setMatrixActive] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: '[KUTTY CO-PILOT v1.1- Status: ONLINE]\nNeural link established. I am Kalaivanan K\'s AI portfolio guide. Ask me about his experience, technical stack, or type \'help\' to see commands.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])

  const screenRef = useRef(null)
  const canvasRef = useRef(null)
  const inputRef = useRef(null)

  // Auto scroll to bottom
  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight
    }
  }, [messages, isThinking, thinkingStep])

  // Matrix Rain Canvas Effect
  useEffect(() => {
    if (!matrixActive || !isOpen) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()

    const fontSize = 13
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$@#&%*+=-/\\|'

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#39ff14'
      ctx.font = `${fontSize}px monospace`
      ctx.shadowColor = '#39ff14'
      ctx.shadowBlur = 4

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      ctx.shadowBlur = 0
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
    }
  }, [matrixActive, isOpen])

  // Focus input when console opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 150)
    }
  }, [isOpen])

  const thinkingMessages = [
    '[SCAN] Decrypting neural query packet...',
    '[INDEX] Accessing portfolio database core...',
    '[COMPILE] Synthesizing response envelope...',
  ]

  // NLP matching logic
  const getAIResponse = (query) => {
    const q = query.toLowerCase().trim()

    if (q === 'help' || q === 'commands') {
      return `[SYSTEM] Supported directives:
- 'skills' : View full technical stack
- 'projects' : Explore featured creations
- 'resume' : Download professional PDF
- 'contact' : Get email and social handles
- 'matrix' : Toggle green override grid
- 'clear' : Reset console history`
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('technolog') || q.includes('languages') || q.includes('framework')) {
      return `[DATABASE] Kalaivanan K's Tech Arsenal:

✦ FRONTEND: React.js, TypeScript, Next.js, HTML5, CSS3/Tailwind CSS
✦ BACKEND: Node.js (Express), Python (FastAPI, Django), WebSockets
✦ DATABASES: MongoDB (Mongoose), PostgreSQL, MySQL, Redis
✦ DEVOPS/CLOUD: Docker, AWS (EC2, S3, Lambda), Git/GitHub Actions, Nginx`
    }

    if (q.includes('react') || q.includes('node') || q.includes('python') || q.includes('mongo') || q.includes('typescript') || q.includes('docker') || q.includes('aws')) {
      return `[QUERY: MATCH FOUND] 
Kalaivanan K has core experience in these fields:
- React/TypeScript: Custom state managers, animations, scalable folder architectures.
- Node.js & MongoDB: API development with authentication, rate limiting, and multi-tenant security.
- Python: Machine Learning modeling, task pipelines, and FastAPI integrations.
- DevOps: Containerized pipelines with Docker, deploying to AWS servers, and automated GitHub workflows.`
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built')) {
      return `[DATABASE] Featured Projects Synthesized:

1. ✦ E-Commerce Platform
   Tech: React, Node.js, MongoDB, Stripe.
   Features: Real-time stock counts, admin panel.

2. ✦ Smart Task Manager
   Tech: React, FastAPI, PostgreSQL, OpenAI.
   Features: GPT-based prioritization, smart schedules.

3. ✦ Analytics Dashboard
   Tech: React, Redux, PostgreSQL, Chart.js.
   Features: Dynamic graphs, WS feeds, PDF exports.

4. ✦ LMS Platform
   Tech: Next.js, MySQL, AWS S3, Stripe.
   Features: Subscriptions, video encoding, certification.`
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `[ASSEMBLER] Resume download links compiled:

✦ Click here to download: [📄 Kalai_Resume.pdf](/kalai_resume.pdf)
✦ File format: PDF
✦ Last updated: June 2026

Let me know if you want details about his work experience!`
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('job') || q.includes('social') || q.includes('phone')) {
      return `[DATABASE] Transmission channels open:

✦ Email: kalaivanankarthi31@gmail.com
✦ Location: Tamil Nadu, India
✦ GitHub: [github.com/Kalaivanan12](https://github.com/Kalaivanan12)
✦ LinkedIn: linkedin.com

Feel free to write a message in the contact form below, and he'll respond in real-time!`
    }

    if (q === 'matrix') {
      setMatrixActive(true)
      return `[OVERRIDE APPROVED] Matrix rain protocol initialized. Output streams visual grid. Type 'exit' to restore standard parameters.`
    }

    if (q === 'exit') {
      if (matrixActive) {
        setMatrixActive(false)
        return `[SYSTEM] Terminal reset. Disabling visual grid overlay. Returning to standard shell...`
      }
      return `[SYSTEM] Already in standard shell mode.`
    }

    if (q === 'clear') {
      setTimeout(() => {
        setMessages([
          {
            sender: 'ai',
            text: '[A.S.T.R.A. v1.1 - Status: ONLINE]\nPurge complete. Shell memory cleared. How can I help you?',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ])
      }, 50)
      return null
    }

    if (q.includes('joke') || q.includes('funny') || q.includes('laugh')) {
      const jokes = [
        "Why do programmers wear glasses? Because they can't C#!",
        "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "Why did the database administrator leave his wife? She had one-to-many relationships.",
        "What is a programmer's favorite hangout place? Foo Bar!",
      ]
      return `[JOKE ENGINE] ${jokes[Math.floor(Math.random() * jokes.length)]}`
    }

    if (q.includes('about') || q.includes('who') || q.includes('name') || q.includes('kalaivanan')) {
      return `[SYNTHESIS] Kalaivanan K is a pro-level Full Stack Developer who transforms ambitious designs into high-performance websites. He builds secure APIs, immersive frontends, and automates server deployment.

Type 'skills' or 'projects' to learn more about his code capabilities!`
    }

    // Default response
    return `[ASTRA] Query processed. I detected keywords that can be addressed.
Type:
- 'skills' to view his full tech stack
- 'projects' to check out his recent products
- 'resume' to download his PDF
- 'contact' to get his email link`
  }

  const handleSend = (textToSend) => {
    const text = textToSend || input
    if (!text.trim()) return

    // Add user message
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg = { sender: 'user', text, timestamp }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    // Start thinking animation
    setIsThinking(true)
    setThinkingStep(0)

    const stepInterval = setInterval(() => {
      setThinkingStep((prev) => prev + 1)
    }, 450)

    setTimeout(() => {
      clearInterval(stepInterval)
      setIsThinking(false)
      const aiResponse = getAIResponse(text)
      
      if (aiResponse) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: aiResponse,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ])
      }
    }, 1350)
  }

  const handleSuggestion = (suggestedText) => {
    handleSend(suggestedText)
  }

  // Pre-configured options
  const suggestions = [
    { label: 'Tech Stack ⚡', text: 'skills' },
    { label: 'Projects 📂', text: 'projects' },
    { label: 'Download Resume 📄', text: 'resume' },
    { label: 'Contact Info ✉️', text: 'contact' },
    { label: 'Matrix Mode 🕶️', text: 'matrix' },
  ]

  // Render markdown links helper
  const formatMsgText = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index))
      }
      parts.push(
        <a key={match[2]} href={match[2]} target="_blank" rel="noreferrer">
          {match[1]}
        </a>
      )
      lastIndex = linkRegex.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <div className={styles.aiWidget}>
      {/* Floating Orb Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.orbBtn} ${isOpen ? styles.orbActive : ''}`}
        title="Toggle AI Companion"
        aria-label="Toggle AI Companion"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Console Window */}
      {isOpen && (
        <div className={`${styles.console} ${matrixActive ? styles.matrixActive : ''}`}>
          {/* Top Bar */}
          <div className={styles.windowBar}>
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <div className={styles.title}>
              {matrixActive ? 'GRID-OVERRIDE // A.S.T.R.A.' : 'KUTTY CO-PILOT v1.1'}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
              title="Minimize"
            >
              _
            </button>
          </div>

          {/* Messages Area */}
          <div className={styles.screen} ref={screenRef}>
            {matrixActive && <canvas ref={canvasRef} className={styles.matrixCanvas} />}

            {messages.map((m, idx) => (
              <div key={idx} className={styles.msgRow}>
                <span
                  className={`${styles.meta} ${
                    m.sender === 'user'
                      ? styles.metaUser
                      : matrixActive
                      ? styles.metaMatrix
                      : styles.metaAi
                  }`}
                >
                  {m.sender === 'user' ? '✦ USER' : matrixActive ? '✦ ASTRA@GRID' : '✦ ASTRA'} · {m.timestamp}
                </span>
                <div
                  className={`${styles.msgText} ${
                    m.sender === 'user'
                      ? styles.msgUser
                      : matrixActive
                      ? styles.msgMatrix
                      : styles.msgAi
                  }`}
                >
                  {formatMsgText(m.text)}
                </div>
              </div>
            ))}

            {/* Simulated thinking logs */}
            {isThinking && (
              <div className={styles.thinking}>
                <span>{thinkingMessages[Math.min(thinkingStep, 2)]}</span>
                <span className={styles.thinkingDot}>█</span>
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className={styles.suggestions}>
            {suggestions
              .filter((s) => (matrixActive ? s.text !== 'matrix' : true))
              .concat(matrixActive ? [{ label: 'Exit Matrix ✖️', text: 'exit' }] : [])
              .map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestion(s.text)}
                  className={`${styles.chip} ${matrixActive ? styles.chipMatrix : ''}`}
                >
                  {s.label}
                </button>
              ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className={styles.inputForm}
          >
            <span className={`${styles.prefix} ${matrixActive ? styles.prefixMatrix : ''}`}>&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`${styles.input} ${matrixActive ? styles.inputMatrix : ''}`}
              placeholder={matrixActive ? "Type command..." : "Ask me anything... (e.g. 'skills')"}
            />
            <button
              type="submit"
              className={`${styles.sendBtn} ${matrixActive ? styles.sendBtnMatrix : ''}`}
              aria-label="Send query"
            >
              ↵
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
