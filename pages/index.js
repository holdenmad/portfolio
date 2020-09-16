import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    
      <Layout home>
      <Head>
        <title>Holden Madagame - Junior Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Holden. I'm a junior web developer with a background in opera and trans/queer activism. </p>
        <p>
        I am a thoughtful, communicative, and professional young web developer who values efficient and structured code. I'm a trained classical musician with an eye for perfection, a drive to work for sustainable goals and to create beautiful things.
        </p>
      </section>
    </Layout>
    
  )
}
