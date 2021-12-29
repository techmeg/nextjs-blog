import Layout from '../../components/layout'
import { getAllQuiltIds, getQuiltData } from '../../lib/quilts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Quilt({ quiltData }) {
    return(
        <Layout>
            <Head>
                <title>{quiltData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXLQ}>{quiltData.title}</h1>
                <Image 
                    priority
                    src={quiltData.img}
                    width={500}
                    height={400}
                    alt={quiltData.alt}
                />
                <div dangerouslySetInnerHTML={{ __html: quiltData.contentHtml }} />
            </article>
            <div className="backToHome">
                <Link href="/quilts">
                    <a>← Back to all Quilts</a>
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = getAllQuiltIds()
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
  const quiltData = await getQuiltData(params.id)
  return {
    props: {
      quiltData
    }
  }
}



