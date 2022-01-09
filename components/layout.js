import styles from './layout.module.css'

export default function Layout({children, blog}){
  return(
    <div className={styles.container}>
      {children}
      <footer className={styles.footer}>
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