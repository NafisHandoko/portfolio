import Head from 'next/head'
import Layout from '../components/layout'

export default function Blog(){
  return (
    <Layout blog>
      <Head>
        <title>Blog Post</title>
      </Head>
      <h2>Blog</h2>
    </Layout>
  )
}