import styles from './layout.module.css'

export default function Layout({children, blog}){
  return(
    <div className={styles.container}>
      {children}
      <footer className={styles.footer}>
        <div className={styles.socialGroup}>
          <a className={styles.socialIcon} href="https://github.com/nafishandoko"><i className="bi bi-github"></i></a>
          <a className={styles.socialIcon} href="https://www.linkedin.com/in/nafishandoko"><i className="bi bi-linkedin"></i></a>
          <a className={styles.socialIcon} href="https://instagram.com/nafishandoko"><i className="bi bi-instagram"></i></a>
          <a className={styles.socialIcon} href="mailto:naffisioner@gmail.com"><i className="bi bi-envelope"></i></a>
        </div>
        <a
          href="https://github.com/nafishandoko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Nafis Handoko
        </a>
      </footer>
    </div>
  )
}