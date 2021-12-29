import Layout from '../components/layout';
import Link from 'next/link'

export default function Recipes(){
    return(
        <Layout>
            <h2>Just kidding, no recipes...</h2>
            <div className="backToHome">
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </Layout>
    )

}