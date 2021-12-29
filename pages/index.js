import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='smallp'>Hi, I'm Meg, trying out Next.js.</p>
        <p className='smallp'>(This is a sample site - you can build a site like this on {' '}
          <a href="https://nextjs.org/learn" >this Next.js tutorial</a>.)
        </p>
        <p className='smallp'>Meanwhile, check out some of my quilts and recipes.</p>
      </section>

    </Layout>
   )
}
