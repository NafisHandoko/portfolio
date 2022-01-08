import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Portdata from '../data/portfolio.json'
import Portfolio from '../components/Portfolio/index'
import {useEffect, useRef} from 'react'
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
        'Web Developer'
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
      </Head>

      <header>
        <div className={styles.socialGroup}>
          <a className={styles.socialIcon} href="https://github.com/nafishandoko"><i className="bi bi-github"></i></a>
          <a className={styles.socialIcon} href="https://www.linkedin.com/in/nafis-arinda-rizky-putra-handoko-91542a21b/"><i className="bi bi-linkedin"></i></a>
          <a className={styles.socialIcon} href="https://instagram.com/nafishandoko"><i className="bi bi-instagram"></i></a>
          <a className={styles.socialIcon} href="mailto:naffisioner@gmail.com"><i className="bi bi-envelope"></i></a>
        </div>
        <div className={styles.mainHeader}>
          <p>Hi, i am</p>
          <h1><span style={{ whiteSpace: 'pre' }} ref={el}></span></h1>
          {/*<h3>I am a Web Developer</h3>*/}
          <p>
            I am a Frontend Developer and UI Designer that recently learning React and Redux for my current projects. Even though i'm new, i'll keep trying to improve my skills as time goes on. If you need me, feel free to contact me
          </p>
          <a href="#" className={styles.cta}>Contact Me</a>
        </div>
      </header>
      <section className={styles.aboutSkills}>
        <div className={styles.about} id="about" data-aos="fade-right">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id fermentum fermentum nunc. Pellentesque a ante mattis molestie lorem arcu. Scelerisque neque eget ac a. Nunc tortor, donec imperdiet at. Nec amet laoreet nibh in tristique purus, interdum pulvinar sed. Suspendisse eros, at et porttitor accumsan tempor neque sed. Egestas posuere tempus nec elit fringilla pharetra fermentum. Mattis nibh ante in nulla pellentesque sed blandit. Tristique in nunc vulputate sed varius nulla aliquam magna. Tempus in porta aliquet sollicitudin. Vitae arcu magnis amet nascetur proin lacus, facilisis.
          </p>
        </div>
        <div className={styles.skills} id="skills" data-aos="fade-left">
          <h2>My Skills</h2>
          <div className={styles.skillList}>
            <a href="#" className={styles.skill}><i className="devicon-html5-plain-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-css3-plain-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-sass-original colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-bootstrap-plain-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-tailwindcss-plain colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-javascript-plain colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-jquery-plain-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-react-original-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-nextjs-original-wordmark"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-php-plain colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-mysql-plain-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-python-plain-wordmark colored"></i></a>
            <a href="#" className={styles.skill}><i className="devicon-flask-original-wordmark"></i></a>
            <a href="#" className={styles.skill}> <i className="devicon-git-plain-wordmark colored"></i></a>
          </div>
        </div>
      </section>
      <section className={styles.portfolios} id="portfolio">
        <h2 style={{textAlign: 'center'}}>My Portfolio</h2>
        <div className={styles.portList}>
        {Portdata.map(data => (
          <Portfolio img={data.img} title={data.title} shortDesc={data.shortDesc} longDesc={data.longDesc} repo={data.repo} demo={data.demo} />
        ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://github.com/nafishandoko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Nafis Handoko
        </a>
      </footer>
    </Layout>
  )
}
