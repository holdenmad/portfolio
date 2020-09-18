import React from 'react';
import styles from './Contact.module.css';
import utilStyles from '../styles/utils.module.css';


const Contact = ({home}) => {
  return (
    <>
    {home ? (
    <div className={styles.socialmedia}>
      <div ><a className={styles.navLink} href="mailto:holden.madagame@gmail.com">Email</a></div>
      <div ><a className={styles.navLink} href="http://www.github.com/holdenmad">Github</a></div>
      <div ><a className={styles.navLink} href="http://www.linkedin.com/in/holdenmad">LinkedIn</a></div>
    </div>
  ) : (
<>
<div className={styles.socialmediaSmall}>
      <div className={styles.navLinkSmall}><a href="mailto:holden.madagame@gmail.com">Email</a></div>
      <div className={styles.navLinkSmall}><a href="http://www.github.com/holdenmad">Github</a></div>
      <div className={styles.navLinkSmall}><a href="http://www.linkedin.com/in/holdenmad">LinkedIn</a></div>
    </div>
</>
  )}
  </>
  )
};

export default Contact;
