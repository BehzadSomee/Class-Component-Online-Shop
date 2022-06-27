import React, { Component } from 'react';
import styles from './AboutUs.module.css';

class AboutUs extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>We Are Learning:</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                </ul>
            </div>
        );
    }
}

export default AboutUs;