import styles from './Experience.module.css'

export default function Experience() {
  const experiences = [
    {
      role: 'Software Trainer',
      period: 'Sept 2024 – Mar 2026',
      company: 'Vivid Trans Tech Solutions Private Limited, Chennai (TASMAC E2E)',
      points: [
        'Conducted end-to-end training programs for government staff, focusing on the adoption and effective use of digital systems.',
        'Designed and delivered structured sessions that integrated theoretical concepts with practical applications to streamline workflows and improve operational efficiency.',
        'Guided staff through real-time case studies, hands-on exercises, and process-oriented applications tailored to government requirements.',
        'Provided continuous support to ensure smooth adoption of new technologies and strengthened problem-solving capabilities in digital platforms.',
        'Enhanced the technical readiness of government teams and developed key expertise in training delivery, curriculum design, and large-scale digital transformation initiatives.'
      ]
    }
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.sectionTitle}>
            Work <span className={styles.accent}>Experience</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={`${styles.timelineItem} reveal`}>
              <div className={styles.timelineHeader}>
                <div className={styles.roleInfo}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <ul className={styles.points}>
                {exp.points.map((pt, i) => (
                  <li key={i} className={styles.point}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
