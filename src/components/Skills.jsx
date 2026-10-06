import styles from './Skills.module.css'

const skillsList = [
  {
    name: 'HTML5',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#E34F26">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.4 6.1H7.8l.2 2.6h8.1l-.3 3.3-3.8 1.3-3.8-1.3-.2-2.3H5.4l.5 5.5 6.1 2 6.1-2 .7-7.7.1-1.1z" />
      </svg>
    )
  },
  {
    name: 'CSS3',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#1572B6">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zM12 18.2l4.5-1.5.5-5.6H8.7l-.2-2.6h8.6l.2-2.6H6l.7 8.2h6.8l-.2 2.6-2.3.8-2.3-.8-.1-1.5H6.2l.2 2.6 5.6 2z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36">
        <rect width="24" height="24" rx="3" fill="#f7df1e" />
        <text x="11" y="20" fill="#000" fontSize="12" fontFamily="sans-serif" fontWeight="900">JS</text>
      </svg>
    )
  },
  {
    name: 'React.js',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#61DAFB" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: 'Bootstrap',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#7952B3">
        <path d="M22.5 0h-21C.675 0 0 .675 0 1.5v21c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5zm-5.475 12.3c0 2.25-1.5 3.3-3.9 3.3H7.65V6h5.025c2.175 0 3.6 1.05 3.6 2.925 0 1.35-.9 2.175-1.875 2.475.975.3 2.1.9 2.1 2.4v1.5H17.025zM12.9 8.7c0-.975-.675-1.275-1.725-1.275H9.6v2.55h1.575c1.05 0 1.725-.3 1.725-1.275zm.3 4.95c0-1.125-.75-1.425-1.875-1.425H9.6v2.85h1.725c1.125 0 1.875-.3 1.875-1.425z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#339933">
        <path d="M12 2.75L4 7.25v9.5l8 4.5 8-4.5v-9.5zM12 4.5l6.5 3.75V15.75L12 19.5 5.5 15.75V8.25zM12 6.5A4.5 4.5 0 007.5 11h2A2.5 2.5 0 0112 8.5v-2zm0 5A2.5 2.5 0 019.5 14h-2A4.5 4.5 0 0012 18.5v-7zm0-5h2A4.5 4.5 0 0118.5 11h-2A2.5 2.5 0 0012 8.5v2z" />
      </svg>
    )
  },
  {
    name: 'Express.js',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#ffffff">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.1 16.5h-2.2l-2.4-3.5-2.4 3.5H5.9l3.5-5-3.2-4.5h2.2l2.1 3.1 2.1-3.1h2.2l-3.2 4.5 3.5 5z" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#47A248">
        <path d="M12 .5c-.3 0-.5.2-.6.4L9.5 6.3c-.6 1.4-.9 3-.9 4.7 0 3.3 1.3 6.1 3.1 7.8.2.2.3.2.4 0 1.8-1.7 3.1-4.5 3.1-7.8 0-1.7-.3-3.3-.9-4.7L12.6.9c-.1-.2-.3-.4-.6-.4zm0 2.2l1.9 4.1c.4 1 .7 2.1.7 3.2 0 2.3-.9 4.3-2.1 5.6-1.2-1.3-2.1-3.3-2.1-5.6 0-1.1.3-2.2.7-3.2l1.9-4.1zm0 15.3c-.2 0-.3.1-.3.3v4.2c0 .4.4.8.8.8s.8-.4.8-.8v-4.2c0-.2-.2-.3-.5-.3h-.8z" />
      </svg>
    )
  },
  {
    name: 'Git/GitHub',
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#F05032">
        <path d="M23.3 10.9L13.1.7C12.7.3 12.1.3 11.7.7L9.4 3l3.2 3.2c.4-.1.8-.1 1.2.1.6.4.8 1.1.5 1.7L16 9.7c.6-.3 1.3-.1 1.7.5.5.6.5 1.5-.1 2-.6.5-1.5.5-2-.1-.4-.4-.5-1-.2-1.5L13.7 9c.1-.4.1-.8-.1-1.2l-3.2-3.2-7.7 7.7c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.2-10.2c.4-.4.4-1.1 0-1.5z" />
      </svg>
    )
  }
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.sectionTitle}>
            Technical <span className={styles.accent}>Skills</span>
          </h2>
          <div className={styles.underline} />
          <p className={styles.subtitle}>
            My tech stack for building scalable and efficient applications.
          </p>
        </div>

        <div className={styles.grid}>
          {skillsList.map((skill, index) => (
            <div
              key={skill.name}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className={styles.iconWrapper}>{skill.svg}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
