import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nafis Handoko</title>
        <meta name="description" content="Nafis Handoko portfolio website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
      </Head>

      <header>
        <div className={styles.socialGroup}>
          <a className={styles.socialIcon} href="https://github.com/nafishandoko"><i className="bi bi-github"></i></a>
          <a className={styles.socialIcon} href="#"><i className="bi bi-linkedin"></i></a>
          <a className={styles.socialIcon} href="https://instagram.com/nafishandoko"><i className="bi bi-instagram"></i></a>
          <a className={styles.socialIcon} href="mailto:naffisioner@gmail.com"><i className="bi bi-envelope"></i></a>
        </div>
        <div className={styles.mainHeader}>
          <p>Hi, i am</p>
          <h1>Nafis Handoko</h1>
          <h3>I am a Web Developer</h3>
          <p>
            I am a Frontend Developer and UI Designer that recently learning React and Redux for my current projects. Even though i'm new, i'll keep trying to improve my skills as time goes on. If you need me, feel free to contact me
          </p>
          <a className={styles.cta}>Contact Me</a>
        </div>
      </header>
      <section></section>

      <footer className={styles.footer}>
        <a
          href="https://github.com/nafishandoko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with love by Nafis Handoko
        </a>
      </footer>
    </Layout>
  )
}
