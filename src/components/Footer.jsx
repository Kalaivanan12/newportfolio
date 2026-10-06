import styles from './Footer.module.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>KK</div>
        <p className={styles.copy}>
          ⚡ Designed & Built by <span className={styles.name}>Kalaivanan K</span> · {new Date().getFullYear()}
        </p>
        <button className={styles.toTop} onClick={scrollTop} title="Back to top">
          ↑
        </button>
      </div>
    </footer>
  )
}
