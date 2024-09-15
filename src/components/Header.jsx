import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>YourName</div>
            <nav className={styles.nav}>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                {/*<a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>*/}
            </nav>
        </header>
    );
};

export default Header;
