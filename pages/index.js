import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Portdata from '../data/portfolio.json'
import Portfolio from '../components/Portfolio/index'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Nafis Handoko',
        'Software Developer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Nafis Handoko</title>
        <meta name="description" content="Nafis Handoko portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
      </Head>
      <nav className={styles.indexNav}>
        <ul className={styles.indexUl}>
          <li className={styles.indexLi}><a href="#about">About</a></li>
          <li className={styles.indexLi}><a href="#skills">Skills</a></li>
          <li className={styles.indexLi}><a href="#portfolio">Portfolio</a></li>
          <li className={styles.indexLi}><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </nav>
      <header className={styles.indexHeader}>
        <div className={styles.socialGroup}>
          <a className={styles.socialIcon} href="https://github.com/nafishandoko"><i className="bi bi-github"></i></a>
          <a className={styles.socialIcon} href="https://www.linkedin.com/in/nafishandoko"><i className="bi bi-linkedin"></i></a>
          <a className={styles.socialIcon} href="https://instagram.com/nafishandoko"><i className="bi bi-instagram"></i></a>
          <a className={styles.socialIcon} href="mailto:naffisioner@gmail.com"><i className="bi bi-envelope"></i></a>
          <a className={styles.socialIcon} href="https://dribbble.com/nafishandoko"><i className="bi bi-dribbble"></i></a>
        </div>
        <div className={styles.mainHeader}>
          <p>Hi, i am</p>
          <h1><span style={{ whiteSpace: 'normal', wordWrap: 'break-word' }} ref={el}></span></h1>
          {/*<h3>I am a Web Developer</h3>*/}
          <p>
            I&apos;m a computer science student who is passionate about learning programming. Now i am using ReactJS and Nextjs for my recent project. Even though i&apos;m new, i&apos;ll keep trying to improve my skills as time goes on. Please get in touch with me if you need or want to collaborate with me.
          </p>
          <a href="mailto:naffisioner@gmail.com" className={styles.cta}>Contact Me</a>
        </div>
      </header>
      <section className={styles.aboutSkills}>
        <div className={styles.about} id="about" data-aos="fade-right" data-aos-offset="250">
          <h2>About Me</h2>
          <p>
            My journey in the IT world started when I was 14. I was curious about how to make games and found that Python was suitable and the easiest one to learn. I used Pygame at that time. After a while, I became interested in Cyber Security and used Python for automation. I also learned about Web Exploitation and that&apos;s when I started to dive into Web Development, I started with PHP, after that I became interested in learning Frontend Development and now i am trying to master it. I started by using Vanilla CSS and JS, then learned some frameworks and libraries like Bootstrap, Tailwindcss, jQuery, and Reactjs, and now I&apos;m learning Jamstack using Nextjs for my personal projects.
          </p>
        </div>
        <div className={styles.skills} id="skills" data-aos="fade-left" data-aos-offset="250">
          <h2>My Skills</h2>
          <div className={styles.skillList}>
            <a href="https://html.com/html5/" className={styles.skill}><i className="devicon-html5-plain-wordmark colored"></i></a>
            <a href="https://css3.com/" className={styles.skill}><i className="devicon-css3-plain-wordmark colored"></i></a>
            <a href="https://sass-lang.com/" className={styles.skill}><i className="devicon-sass-original colored"></i></a>
            {/*<a href="https://getbootstrap.com/" className={styles.skill}><i className="devicon-bootstrap-plain-wordmark colored"></i></a>*/}
            {/*<a href="https://tailwindcss.com/" className={styles.skill}><i className="devicon-tailwindcss-plain colored"></i></a>*/}
            <a href="https://www.javascript.com/" className={styles.skill}><i className="devicon-javascript-plain colored"></i></a>
            <a href="https://jquery.com/" className={styles.skill}><i className="devicon-jquery-plain-wordmark colored"></i></a>
            <a href="https://reactjs.org/" className={styles.skill}><i className="devicon-react-original-wordmark colored"></i></a>
            <a href="https://nextjs.org/" className={styles.skill}><i className="devicon-nextjs-original-wordmark"></i></a>
            {/*<a href="https://www.php.net/" className={styles.skill}><i className="devicon-php-plain colored"></i></a>*/}
            {/*<a href="https://www.mysql.com/" className={styles.skill}><i className="devicon-mysql-plain-wordmark colored"></i></a>*/}
            <a href="https://www.python.org/" className={styles.skill}><i className="devicon-python-plain-wordmark colored"></i></a>
            {/*<a href="http://flask.palletsprojects.com/" className={styles.skill}><i className="devicon-flask-original-wordmark"></i></a>*/}
            <a href="https://git-scm.com/" className={styles.skill}> <i className="devicon-git-plain-wordmark colored"></i></a>
          </div>
        </div>
      </section>
      <section className={styles.portfolios} id="portfolio">
        <h2 style={{ textAlign: 'center' }}>My Portfolio</h2>
        <div className={styles.portList}>
          {Portdata.map((data, index) => (
            <Portfolio key={index} img={data.img} title={data.title} shortDesc={data.shortDesc} longDesc={data.longDesc} repo={data.repo} demo={data.demo} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
