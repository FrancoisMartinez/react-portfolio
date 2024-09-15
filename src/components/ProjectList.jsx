import React from 'react';
import styles from '../styles/ProjectList.module.css';
import projects from '../data/projects.js';

const ProjectList = () => {
    return (
        <div className={styles.list}>
            {projects.map((project) => (
                <div key={project.id} className={styles.card}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {/* Add more project details or links */}
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
