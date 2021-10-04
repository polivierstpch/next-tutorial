import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import LandingHeader from '../components/landing-header';
import SvgIdeoConceptsLogo from '../components/logos/ideoconcepts-logo';
import MeteryxButtonLink from '../components/meteryx-button';
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Application Meteryx</title>
      </Head>
      <div className={styles.container}>
        <LandingHeader />
        <main className={styles.main}>
          <div className={styles.row}>
            <MeteryxButtonLink route="/" content="Accédez à l'application" width={500}/>
            <Image
              priority
              src="/images/meteryx-preview.png"
              alt="Téléphone et ordinateur avec Meteryx."
              width={625}
              height={400}
            />
          </div>
          <div className={ `${styles.row} ${styles.center}`}>
            <span className={styles.logoText}>par</span>
            <SvgIdeoConceptsLogo
              width={250} 
              color="#00537F"/>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home;