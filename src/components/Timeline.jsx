import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Timeline.module.css';
import Event from './Event.jsx';
import timelineEvents from '../data/timelineEvents.js';

const Timeline = () => {
    const [side, setSide] = useState(2);
    const [dateWidth, setDateWidth] = useState('24rem');
    const [eventWidth, setEventWidth] = useState('24rem');
    const { t } = useTranslation();
    
    useEffect(() => {
        const handleResize = () => {
            setSide(window.innerWidth < 750 ? 0 : 2);

            if (window.innerWidth < 550) {
                setDateWidth('6rem');
                setEventWidth('12rem');
            } else if (window.innerWidth < 650) {
                setDateWidth('6rem');
                setEventWidth('18rem');
            } else if (window.innerWidth < 750) {
                setDateWidth('12rem');
                setEventWidth('24rem');
            } else {
                setDateWidth('24rem');
                setEventWidth('24rem');
            }
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.topEnd} style={{ marginLeft: dateWidth, marginRight: eventWidth }}></div>
            
                {timelineEvents.map((timelineEvent) => (
                    <Event key={timelineEvent.id} style={{ width: '18.75rem' }} side={timelineEvent.id % side == 0 ? 'left' : 'right'} date={t(timelineEvent.dateKey)} dateWidth={dateWidth} eventWidth={eventWidth}>
                            <h2>{t(timelineEvent.titleKey)}</h2>
                            <p>{t(timelineEvent.descriptionKey)}</p>
                    </Event>
                ))}
            <div className={styles.bottomEnd} style={{ marginLeft: dateWidth, marginRight: eventWidth }}></div>
        </div>
    );
}

export default Timeline;