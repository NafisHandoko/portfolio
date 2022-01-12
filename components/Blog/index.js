import styles from './index.module.css'
import Link from 'next/link'

function Blog(props){
  return (
    <article class={styles.blogItem}>
      <div className={styles.blogHead}>
        <Link href={`/posts/${props.id}`}>
          <a className={styles.blogImgLink}></a>
        </Link>
        <img src={props.img} className={styles.blogImg} />
      </div>
      <div className={styles.blogDesc}>
        <Link href={`/posts/${props.id}`}>
          <a className={styles.blogDescLink}>
            <h5>{props.title}</h5>
            <span>{props.date}</span>
          </a>
        </Link>
      </div>
    </article>
  )
}

function Blog2(){}

export default Blog