import React from 'react';
import styles from '../styles/ProjectList.module.css';
import projects from '../data/projects.js';
import { useTranslation } from 'react-i18next';
import Card from './Card.jsx'


const ProjectList = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            {projects.map((project) => (
                <Card key={project.id} style={{ flex: '1', minWidth: '14rem', maxWidth: '20rem' }}>
                        {project.image && (
                            <img src={project.image} alt={t(project.titleKey)} className={styles.image} />
                        )}
                        <h2>{t(project.titleKey)}</h2>
                        <p>{t(project.descriptionKey)}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                {t('projects.viewProject')}
                            </a>
                        )}
                </Card>
            ))}
        </div>
    );
};

export default ProjectList;
