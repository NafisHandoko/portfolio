import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({children, blog}){
  return(
    <div className={styles.container}>
      <nav className={styles.nav}>
      {blog ? (
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
        </ul>
      ) : (
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      )}
      </nav>
      {children}
    </div>
  )
}