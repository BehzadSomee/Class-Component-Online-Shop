import React from 'react';
import styles from './Banner.module.css';
import Zamine from '../images/Logo.png';

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={Zamine} alt='Zamine' />
            <div className={styles.textContainer}>
                <h1>Kompany</h1>
                <p> we're learning <span>Kompany</span></p>
            </div>
        </div>
    );
};

export default Banner;