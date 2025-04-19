import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ children, style }) => {

    return (
        <div className={styles.card} style={style}>
            {children}
        </div>
    )
}

export default Card;