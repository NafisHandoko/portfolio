import styles from './index.module.css'
import Image from 'next/image'
function Portfolio2(props){
  return (
    <div className={styles.portItem}>
      <div className={styles.portImgDiv}>
        <img className={styles.portImg} src="https://via.placeholder.com/150/FCDAB7/1D2D50?Text=Digital.com" />
      </div>
      <div className={styles.portDesc}>
        <h3>{props.title}</h3>
        <p>
          {props.longDesc} 
        </p>
        <div className={styles.portDemo}>
          <a className={styles.demoIcon} href={props.repo}><i className="bi bi-github"></i></a>
          <a className={styles.demoIcon} href={props.demo}><i className="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
    </div>
  )
}

function Portfolio(props){
  return (
    <div className={styles.portItem2} data-aos="flip-left" data-aos-duration="3500" data-aos-offset="100">
      <figure className={styles.portFigure}>
        {/*<img className={styles.portImg2} src="https://via.placeholder.com/1366x768/FCDAB7/1D2D50?Text=halo" />*/}
        <img src={props.img} className={styles.portImg2}/>
        <figcaption className={styles.portFigcaption}>
          <h4>{props.title}</h4>
          <p className={styles.portDesc2}>{props.shortDesc}</p>
          <div className={styles.portDemo}>
            <a className={styles.demoIcon} href={props.repo} target="_blank"><i className="bi bi-github"></i></a>
            <a className={styles.demoIcon} href={props.demo} target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
          </div>
        </figcaption>
        <div className={styles.overlay}></div>
      </figure>
    </div>
  )
}

export default Portfolio;