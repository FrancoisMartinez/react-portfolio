import React from 'react';
import styles from '../styles/ProjectList.module.css';
import projects from '/public/data/projects.js';
import { useTranslation } from 'react-i18next';


const ProjectList = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.list}>
            {projects.map((project) => (
                <div key={project.id} className={styles.border}>
                    <div className={styles.card}>
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

                    </div>

                </div>
            ))}
        </div>
    );
};

export default ProjectList;
