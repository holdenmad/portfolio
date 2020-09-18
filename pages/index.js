import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Holden Madagame - Junior Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Holden Madagame <span className={utilStyles.ipa}>/mƏ-'da-gƏ-mi/</span>. I'm a junior web developer with a background in opera
          and trans/queer activism.{' '}
        </p>
        <p>
          I am a thoughtful, communicative, and professional young web developer
          who values efficient and structured code. I'm a trained classical
          musician with an eye for perfection, a drive to work for sustainable
          goals and to create beautiful things.
        </p>
        <p>Take a look at <Link href='/portfolio'><a className={utilStyles.link}>my portfolio</a></Link>, and feel free to read more about my activism on <Link href='/portfolio'><a className={utilStyles.link}>my personal blog</a></Link></p>
      </section>
    </Layout>
  );
}
