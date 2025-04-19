import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Timeline.module.css';
import Event from './Event.jsx';
import timelineEvents from '/public/data/timelineEvents.js';

const Timeline = () => {
    const { t } = useTranslation();



    return (
        <div className={styles.container}>
            <div className={styles.topEnd}></div>
            
                {timelineEvents.map((timelineEvent) => (
                    <Event key={timelineEvent.id} style={{ width: '18.75rem' }} side={timelineEvent.id % 2 == 0 ? 'left' : 'right'} date={t(timelineEvent.dateKey)}>
                            <h2>{t(timelineEvent.titleKey)}</h2>
                            <p>{t(timelineEvent.descriptionKey)}</p>
                    </Event>
                ))}
            <div className={styles.bottomEnd}></div>
        </div>
    );
}

export default Timeline;