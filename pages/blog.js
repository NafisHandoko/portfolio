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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo non nullam egestas vel lorem arcu.</p>
        </div>
      </header>
      <Layout>
        <article class={styles.blogList}>
        {allPostsData.map(({ id, date, title, img }) => (
          <Blogs key={id} id={id} date={date} title={title} img={img}></Blogs>
        ))}
        </article>
      </Layout>
    </>
  )
}

// https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80