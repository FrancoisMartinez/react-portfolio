import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`${styles.header} ${styles[theme]}`}>
            <div className={styles.logo}>YourName</div>
            <nav className={styles.nav}>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV
                </a>
                <button onClick={toggleTheme} className={styles.themeToggle}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </nav>
        </header>
    );
};

export default Header;
