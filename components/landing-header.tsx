import React, { useState } from 'react';
import styles from '../styles/landing-header.module.css';
import HamburgerButton from './hamburger-button';
import SvgMeteryxLogo from "./logos/meteryx-logo"

interface ILandingHeaderProps {
    className: string;
}

const LandingHeader = ({ className }: ILandingHeaderProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <header className={`${className} ${styles.header}`}>
            <div className={styles.logo}>
                <SvgMeteryxLogo width={250} color="#00537F" />
                <span>Un écosystème connecté sur mesure</span>
            </div>
            <HamburgerButton
                width={50}
                onClick={() => setActive(!active)} 
                className={styles.hamburger}
            />
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