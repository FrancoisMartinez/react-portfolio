import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    // Language toggle function
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                FrançoisMartinez
            </a>
            <button
                className={styles.menuToggle}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
            >
                <FaBars />
            </button>
            <nav
                id="primary-navigation"
                className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
                ref={navRef}
            >
                <Link to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                    {t('header.about')}
                </Link>
                <Link to="projects" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                    {t('header.projects')}
                </Link>
                <Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                    {t('header.contact')}
                </Link>
                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {t('header.downloadCV')}
                </a>
                <button onClick={toggleTheme} className={styles.themeToggle}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                <button
                    onClick={() => {
                        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
                        changeLanguage(newLanguage);
                    }}
                    className={styles.languageSwitcher}
                >
                    {i18n.language === 'en' ? 'Fr' : 'En'}
                </button>
            </nav>
        </header>
    );
};

export default Header;
