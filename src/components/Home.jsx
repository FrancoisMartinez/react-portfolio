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
                    <div className={styles.border}>
                        <img className={styles.img}
                             src="https://media.licdn.com/dms/image/v2/D4E03AQGh1dq2UpTucw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708543250116?e=1732147200&v=beta&t=ZTIUivSoIzct7D1dpkQFGzj002_Agt9JfdrZ6cBRmF0"
                             alt="Francois Martinez"/>

                    </div>
                    <p>{t('home.description')}</p>
                </section>
                <section id="projects" className={styles.projects}>
                    <h2>{t('projects.title')}</h2>
                    <ProjectList/>
                </section>
                <section id="contact" className={styles.contact}>
                    <h2>{t('contact.title')}</h2>
                    <p>
                        Email: <a
                        href="mailto:francoisjmartinez07@gmail.com">francoisjmartinez07@gmail.com</a>
                    </p>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/francois-j-martinez/"
                                                    target="_blank"
                                                    rel="noopener noreferrer">www.linkedin.com/in/francois-j-martinez</a>
                    </p>
                    <p>
                        GitHub: <a href="https://github.com/FrancoisMartinez"
                                                    target="_blank"
                                                    rel="noopener noreferrer">FrancoisMartinez</a>
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
