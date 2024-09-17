import React from 'react';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiAndroid, DiGit, DiVisualstudio } from 'react-icons/di';
import { SiExpress, SiEclipseide, SiIntellijidea, SiWebstorm, SiPycharm, SiC } from 'react-icons/si';
import styles from '../styles/Skills.module.css';
import { useTranslation } from 'react-i18next';


const Skills = () => {
    const { t } = useTranslation();


    const applications = [
        { name: "Visual Studio Code", icon: <DiVisualstudio /> },
        { name: "Eclipse", icon: <SiEclipseide /> },
        { name: "IntelliJ", icon: <SiIntellijidea /> },
        { name: "WebStorm", icon: <SiWebstorm /> },
        { name: "PyCharm", icon: <SiPycharm /> },
        { name: "Android Studio", icon: <DiAndroid /> },
        { name: "GitHub", icon: <FaGithub /> },
    ];

    const methodologies = [
        // { name: "Agile", icon: <SiAgile /> },
        // { name: "Scrum", icon: <SiScrum /> },
    ];

    const programming = [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        // { name: "C (beginner)", icon: <SiC /> },
    ];

    return (
        <div className={styles.skillBorder}>
            <div className={styles.skillsContainer}>

                <h2 className={styles.sectionTitle}>{t('skills.app')}</h2>
                <div className={styles.skillsList}>
                    {applications.map((app, index) => (
                        <div key={index} className={styles.skillItem}>
                            {app.icon}
                            <span>{app.name}</span>
                        </div>

                    ))}
                </div>

                {/*<h2 className={styles.sectionTitle}>Methodologies</h2>*/}
                {/*<div className={styles.skillsList}>*/}
                {/*    {methodologies.map((method, index) => (*/}
                {/*            <div key={index} className={styles.skillItem}>*/}
                {/*                {method.icon}*/}
                {/*                <span>{method.name}</span>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <h2 className={styles.sectionTitle}>{t('skills.programming')}</h2>
                <div className={styles.skillsList}>
                    {programming.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
};

export default Skills;
