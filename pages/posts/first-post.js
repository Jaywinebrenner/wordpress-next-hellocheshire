import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

const FirstPost = () => {
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
            <h1>Hi, I am First Post</h1>
            <Link href="/">Back Home</Link>
        </Layout>
    )

}

export default FirstPost;