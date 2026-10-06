import styles from './About.module.css'

export default function About() {
  const education = [
    {
      degree: 'MSc Computer Science',
      period: '2022 - 2024',
      institution: 'Sri Krishna Arts and Science, Coimbatore',
      extra: 'GPA: 7.5'
    },
    {
      degree: 'BSc Computer Science',
      period: '2019 - 2022',
      institution: 'National College, Tiruchirappalli',
      extra: 'GPA: 9.0 - First Class '
    },
    {
      degree: 'Full Stack Web Development',
      period: 'Certification',
      institution: 'NSCHOOL Academy, Coimbatore',
      extra: 'Specialized training in MERN Stack & Modern Web Technologies'
    }
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.sectionTitle}>
            About <span className={styles.accent}>Me</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.grid}>
          {/* Left Column: Get to know me */}
          <div className={`${styles.textSide} reveal`}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleIcon}>👤</span> Get to know me!
            </h3>
            <p className={styles.body}>
              I'm an <strong className={styles.highlight}>enthusiastic Full Stack Developer</strong> with a strong foundation
              in Computer Science. My journey involves bridging the gap between theoretical concepts and practical, real-world
              applications.
            </p>
            <p className={styles.body}>
              I specialize in the <span className={styles.mernHighlight}>MERN Stack</span> and enjoy building responsive,
              user-friendly web interfaces. Beyond coding, I have experience as a <span className={styles.trainerHighlight}>Software Trainer</span>,
              helping others master web technologies.
            </p>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className={`${styles.timelineSide} reveal`}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleIcon}>🎓</span> Education & Certifications
            </h3>
            
            <div className={styles.timeline}>
              {education.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h4 className={styles.degree}>{item.degree}</h4>
                    <span className={styles.period}>{item.period}</span>
                    <p className={styles.institution}>{item.institution}</p>
                    {item.extra && <p className={styles.extra}>{item.extra}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
