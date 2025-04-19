import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiAndroid, DiVisualstudio } from 'react-icons/di';
import { SiExpress, SiEclipseide, SiIntellijidea, SiWebstorm, SiPycharm, SiC, SiTypescript, SiStencil, SiExpo, SiPuppeteer, SiJest, SiMocha, SiChai, SiGit, SiReact, SiPython, SiJavascript  } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { BsFiletypeScss } from "react-icons/bs";
import styles from '../styles/Skills.module.css';
import { useTranslation } from 'react-i18next';
import Card from './Card.jsx';


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
        { name: "Azure DevOps", icon: <VscAzureDevops/> }
    ];

    // const methodologies = [
    //     { name: "Agile", icon: <SiAgile /> },
    //     { name: "Scrum", icon: <SiScrum /> },
    // ];

    const programming = [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <SiPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "SCSS", icon: <BsFiletypeScss /> },
        { name: "C", icon: <SiC /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Stencil.js", icon: <SiStencil /> },
        { name: "Expo", icon: <SiExpo /> },
        { name: "Puppeteer", icon: <SiPuppeteer /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Mocha", icon: <SiMocha /> },
        { name: "Chai", icon: <SiChai /> },
        { name: "Git", icon: <SiGit/> },
    ];

    return (
        <Card style={{ width: '60%' }}>

                <h2>{t('skills.app')}</h2>
                <div className={styles.skillsList}>
                    {applications.map((app, index) => (
                        <div key={index} className={styles.skillItem}>
                            {app.icon}
                            <span>{app.name}</span>
                        </div>

                    ))}
                </div>

                {/* <h2 className={styles.sectionTitle}>Methodologies</h2>
                <div className={styles.skillsList}>
                   {methodologies.map((method, index) => (
                           <div key={index} className={styles.skillItem}>
                               {method.icon}
                               <span>{method.name}</span>
                       </div>
                   ))}
                </div> */}

                <h2 className={styles.sectionTitle}>{t('skills.programming')}</h2>
                <div className={styles.skillsList}>
                    {programming.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>

        </Card>

    );
};

export default Skills;
