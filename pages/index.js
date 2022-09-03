import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A 🇰🇷Korean-born-🇨🇦Canadian-raised aspiring Software Developer, with curiosity in Frontend technologies.</p>
        <p>Proud to take on titles of 🍳 occasional chef, 🎒part-time adventurer, ⚽avid football player and lover, 🎮professional casual gamer.</p>
        <p>Find out more about me through:</p>
        <div className={utilStyles.rowSpaceBetween}>
          <Link href='/'>Resume</Link>
          <Link href='/'>Portfolio</Link>
        </div>
      </section>
    </Layout>
  );
}