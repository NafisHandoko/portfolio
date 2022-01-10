import styles from './index.module.css'

function Blog(){
  return (
    <article class={styles.blogItem}>
      <div className={styles.blogHead}>
        <a href="#" className={styles.blogImgLink}></a>
        <img src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fGxpbnV4fGVufDB8fHx8MTYzNDQ5MzcxMA&ixlib=rb-1.2.1&q=80&w=2000" className={styles.blogImg} />
      </div>
      <div className={styles.blogDesc}>
        <a href="#" className={styles.blogDescLink}>
          <h5>Menggunakan Debian Package / PPA daripada Snap Package</h5>
          <span>12 Mei 2021</span>
        </a>
      </div>
    </article>
  )
}

function Blog2(){}

export default Blog