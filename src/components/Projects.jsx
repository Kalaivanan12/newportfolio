import { useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    tag: 'AI Agent',
    category: 'AI/ML',
    name: 'Autonomous Code Agent Suite',
    desc: 'Self-correcting AI engineering agent leveraging LangChain and vector databases. Automatically parses repositories, identifies bugs, writes test suites, and applies secure patches.',
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'OpenAI', 'ChromaDB'],
    color: '#00f3ff',
    link: '#',
    github: 'https://github.com/Kalaivanan12',
  },
  {
    tag: 'Web App',
    category: 'Web Apps',
    name: 'Real-Time E-Commerce Engine',
    desc: 'Premium storefront with a glassmorphic dashboard, micro-interactions, instantaneous Stripe checkout flow, and live inventory websocket alerts.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux Toolkit', 'Socket.io'],
    color: '#8b5cf6',
    link: '#',
    github: 'https://github.com/Kalaivanan12',
  },
  {
    tag: 'AI Vision',
    category: 'AI/ML',
    name: 'Industrial Edge Vision System',
    desc: 'Edge-based computer vision platform utilizing custom YOLO object detection models for assembly line QA testing, backed by real-time analytics graphs.',
    tech: ['React', 'Python', 'PyTorch', 'YOLOv8', 'PostgreSQL', 'Docker'],
    color: '#f0c040',
    link: '#',
    github: 'https://github.com/Kalaivanan12',
  },
  {
    tag: 'Dashboard',
    category: 'Web Apps',
    name: 'Telemetry & Analytics Console',
    desc: 'High-throughput visual analytics console designed for sub-second data streaming, custom timeseries aggregation query builders, and PDF report engines.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Chart.js', 'WebSockets', 'Redis'],
    color: '#8b5cf6',
    link: '#',
    github: 'https://github.com/Kalaivanan12',
  },
  {
    tag: 'AI Assistant',
    category: 'AI/ML',
    name: 'Predictive Medical Diagnostic App',
    desc: 'Clinical decision support system utilizing deep learning classification algorithms to analyze medical imaging data and present risk-factor alerts.',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI', 'AWS S3', 'MongoDB'],
    color: '#00f3ff',
    link: '#',
    github: 'https://github.com/Kalaivanan12',
  },
  {
    tag: 'Fullstack',
    category: 'Fullstack',
    name: 'Enterprise LMS Portal',
    desc: 'Secure learning management server with video encoding queues, user progress telemetry hooks, quiz evaluations, and automatic PDF certificate rewards.',
    tech: ['Next.js', 'Node.js', 'MySQL', 'AWS S3', 'Docker', 'Redis'],
    color: '#f0c040',
    link: '#',
    github: 'https://github.com/Kalaivanan12',
  },
]

const categories = ['All', 'AI/ML', 'Fullstack', 'Web Apps']

export default function Projects() {
  const [activeCat, setActiveCat] = useState('All')

  const filteredProjects = activeCat === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCat)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <p className="section-label">// my creations</p>
          <h2 className="section-title">Featured Creations</h2>
          <div className="star-divider" />
        </div>

        {/* Category Filter Bar */}
        <div className={`${styles.filterBar} reveal reveal-delay-1`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`${styles.filterBtn} ${activeCat === cat ? styles.activeBtn : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  return (
    <div
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div 
        className={styles.cardGlow} 
        style={{ 
          background: `radial-gradient(circle at top left, ${p.color}20, transparent 75%)` 
        }} 
      />

      <div className={styles.cardTop}>
        <span 
          className={styles.tag} 
          style={{ 
            color: p.color, 
            borderColor: p.color + '44', 
            background: p.color + '12' 
          }}
        >
          {p.tag}
        </span>
        <div className={styles.cardLinks}>
          <a href={p.github} className={styles.iconLink} title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href={p.link} className={styles.iconLink} title="Live Demo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>

      <h3 className={styles.name}>{p.name}</h3>
      <p className={styles.desc}>{p.desc}</p>

      <div className={styles.tech}>
        {p.tech.map((t) => (
          <span key={t} className={styles.techBadge}>{t}</span>
        ))}
      </div>
    </div>
  )
}
