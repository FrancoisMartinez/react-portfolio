import React from 'react';
import styles from '../styles/Home.module.css';
import ProjectList from './ProjectList';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <section id="about" className={styles.about}>
                    <h1>{t('home.greeting')}</h1>
                    <p>{t('home.description')}</p>
                </section>
                <section id="projects" className={styles.projects}>
                    <h2>{t('projects.title')}</h2>
                    <ProjectList />
                </section>
                <section id="contact" className={styles.contact}>
                    <h2>{t('contact.title')}</h2>
                    <p>
                        {t('contact.email')}: <a href="mailto:your.email@example.com">your.email@example.com</a>
                    </p>
                    <p>
                        {t('contact.linkedin')}: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
