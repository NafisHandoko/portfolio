import styles from './index.module.css'

function Portfolio2(props){
  return (
    <div className={styles.portItem}>
      <div className={styles.portImgDiv}>
        <img className={styles.portImg} src="https://via.placeholder.com/150/FCDAB7/1D2D50?Text=Digital.com" />
      </div>
      <div className={styles.portDesc}>
        <h3>{props.title}</h3>
        <p>
          {props.desc} 
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
    <div className={styles.portItem2}>
      <figure className={styles.portFigure}>
        <img className={styles.portImg2} src="https://via.placeholder.com/1920x1280/FCDAB7/1D2D50?Text=Digital.com" />
        <figcaption className={styles.portFigcaption}>
          <h4>{props.title}</h4>
          <p className={styles.portDesc}>{props.desc}</p>
          <div className={styles.portDemo}>
            <a className={styles.demoIcon} href={props.repo}><i className="bi bi-github"></i></a>
            <a className={styles.demoIcon} href={props.demo}><i className="bi bi-box-arrow-up-right"></i></a>
          </div>
        </figcaption>
        <div className={styles.overlay}></div>
      </figure>
    </div>
  )
}

export default Portfolio;