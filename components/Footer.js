import React from 'react'
import styles from './Footer.module.css';
import utilStyles from '../styles/utils.module.css';



const Footer = () => {
    return (
        <div className={styles.footerContainer}>
        <div className={styles.footerItem}>Portfolio</div> / <div className={styles.footerItem}>CV</div>
        </div>
    )
}

export default Footer
