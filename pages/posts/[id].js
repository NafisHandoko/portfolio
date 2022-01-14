import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
import styles from '../../styles/Posts.module.css'
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

function Post2({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          {/*<Date dateString={postData.date} />*/}
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

function Post({postData}){
  return(
    <>
      <Head>
        <title>{postData.title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
      </Head>
      <header className={styles.postHeader} style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${postData.img})`}}>
        <nav className={styles.postNav}>
          <Link href="/blog">
            <a className={styles.backToIndex} style={{marginRight: 10}}><i className="bi bi-chevron-left"></i>&nbsp;&nbsp;Blog</a>
          </Link>
          <Link href="/">
            <a className={styles.backToIndex}>My Portfolio</a>
          </Link>
        </nav>
        <div className={styles.mainHeader}>
          <h2 className={styles.postH2}>{postData.title}</h2>
          <p>{postData.date}</p>
        </div>
      </header>
      <Layout>
        <article className={styles.postArticle}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    </>
  )
}

export default Post