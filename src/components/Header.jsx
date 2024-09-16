import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const handleOpenPDF = () => {
        const pdfUrl = i18n.language === 'en' ? '/Martinez_F_CV_En.pdf' : '/Martinez_F_CV_Fr.pdf';
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };


    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
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
                    <FaBars/>
                </button>
            </div>

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
                <a onClick={handleOpenPDF}>
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
            <nav className={`${styles.navMobile} ${isMenuOpen ? styles.navOpen : ''}`}>
                <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
                    {t('header.about')}
                </Link>
                <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
                    {t('header.projects')}
                </Link>
                <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                    {t('header.contact')}
                </Link>
                <a onClick={handleOpenPDF}>
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
