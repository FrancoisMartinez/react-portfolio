import React from 'react';
import styles from '../styles/Home.module.css';
import ProjectList from './ProjectList';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <section id="about" className={styles.about}>
                    <h1>Hi, I'm YourName</h1>
                    <p>
                        I'm a [Your Profession] specializing in [Your Specialization]. Passionate about creating impactful solutions through technology.
                    </p>
                </section>
                <section id="projects" className={styles.projects}>
                    <h2>Projects</h2>
                    <ProjectList />
                </section>
                <section id="contact" className={styles.contact}>
                    <h2>Contact Me</h2>
                    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
                    {/* Add more contact methods if desired */}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
