import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();

    // Language toggle function
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                YourName
            </a>
            <nav className={styles.nav}>
                <Link to="about" smooth={true} duration={500}>
                    {t('header.about')}
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    {t('header.projects')}
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    {t('header.contact')}
                </Link>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    {t('header.downloadCV')}
                </a>
                <button onClick={toggleTheme} className={styles.themeToggle}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                {/* Language Switcher */}
                <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    value={i18n.language}
                    className={styles.languageSwitcher}
                >
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                </select>
            </nav>
        </header>
    );
};

export default Header;
