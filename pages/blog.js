import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import Blogs from '../components/Blog/index'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({allPostsData}){
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        <title>Blog Post</title>
      </Head>
      <header className={styles.blogHeader}>
        <nav className={styles.blogNav}>
          <Link href="/">
            <a className={styles.backToIndex}><i className="bi bi-chevron-left"></i>&nbsp;&nbsp;My Portfolio</a>
          </Link>
        </nav>
        <div className={styles.mainHeader}>
          <h2 className={styles.blogH2}>Nafis Blog</h2>
          <p>This is the place where i share my knowledge about computer science stuff</p>
        </div>
      </header>
      <Layout>
        <article className={styles.blogList}>
        {allPostsData.map(({ id, date, title, img }) => (
          <Blogs key={id} id={id} date={date} title={title} img={img}></Blogs>
        ))}
        </article>
      </Layout>
    </>
  )
}
