import React from 'react';
import styles from '../styles/Event.module.css';
import Card from './Card.jsx';

const Event = ({ children, side }) => {
    
    const timeline = (
        <div className={styles.timeline}>
            <div className={styles.topLine}></div>
            <div className={styles.dot}></div>
            <div className={styles.bottomLine}></div>
        </div>
    )

    return (
        <>
            {side === 'left' && 
                <div className={styles.event}>
                    <Card style={{ width: '18.75rem', margin: '1rem 0' }}>{children}</Card>
                    {timeline}
                    <div className={styles.date} style={{ textAlign: 'start' }}><p>Date</p></div>
                </div>
            }
            {side === 'right' &&
                <div className={styles.event}>
                    <div className={styles.date} style={{ textAlign: 'end' }}><p>Date</p></div>
                    {timeline}
                    <Card style={{ width: '18.75rem', margin: '1rem 0' }}>{children}</Card>
                </div>
            }
        </>

        

    )
}

export default Event;