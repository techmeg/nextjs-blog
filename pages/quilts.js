import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllQuiltsData } from '../lib/posts'

export async function getStaticProps() {
    const allQuiltsData = getAllQuiltsData()
    return {
      props: {
        allQuiltsData
      }
    }
}

export default function QuiltIndex({allQuiltsData}) {
    return (
        <Layout>
            <Head>
                <title>Quilts</title>
            </Head>
            <h1>Quilts</h1>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                    {allQuiltsData.map(({id, blurb, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`quilts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <p>{blurb}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <div className="backToHome">
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </Layout>
    )
  }