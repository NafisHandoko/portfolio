import styles from './layout.module.css'

export default function Layout({children}){
  return(
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li><a>About</a></li>
          <li><a>Skills</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Blog</a></li>
        </ul>
      </nav>
      {children}
    </div>
  )
}