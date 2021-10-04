import { NextPage } from 'next';
import Head from 'next/head';
import LandingHeader from '../components/landing-header';
import SvgIdeoConceptsLogo from '../components/logos/ideoconcepts-logo';
import MeteryxButtonLink from '../components/meteryx-button';
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Application Meteryx</title>
      </Head>
      <div className={styles.container}>
        <LandingHeader className={styles.header} />
        <main className={styles.main}>
            <MeteryxButtonLink 
              route="/" 
              content="Accédez à l'application"
              className={styles.appLink}
             />    
        </main>
        <footer className={styles.footer}>
          <span className={styles.logoText}>par</span>
          <SvgIdeoConceptsLogo
            width={250} 
            color="#00537F"
          />
        </footer>
      </div>
    </>
  )
}

export default Home;