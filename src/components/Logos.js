import React from 'react';
import styles from './Logos.module.css';
import United from '../images/United.webp'


const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={United} alt="Logos" />
                <img src={United} alt="Logos" />
                <img src={United} alt="Logos" />
            </div>
        </div>
    );
};

export default Logos;