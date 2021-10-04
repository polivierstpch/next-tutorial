import React, { useState } from 'react';
import styles from '../styles/landing-header.module.css';
import SvgMeteryxLogo from "./logos/meteryx-logo"

const LandingHeader = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <SvgMeteryxLogo width={250} color="#00537F" />
                <span>Un écosystème connecté sur mesure</span>
            </div>
            <button
                onClick={() => setActive(!active)}
                className={styles.hamburger}>
                HAM
            </button>
            <nav className={active ? `${styles.nav} ${styles.active}` : `${styles.nav}`}>
                <a href="https://ideoconcepts.ca/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setActive(false)}>
                    IDeo Concepts
                </a>
                <a
                    href="#"
                    onClick={() => setActive(false)}>
                    Nous contacter
                </a>
            </nav>
        </header>
    );
}

export default LandingHeader;