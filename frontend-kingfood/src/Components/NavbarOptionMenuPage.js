import React from 'react';
import styles from './NavbarOptionMenuPage.module.css';

const NavbarOptionMenuPage = ({ image, title }) => {
  return (
    <div className={styles.navbar}>
        <img src={image} alt={title} className={`${styles.navIcon} ${styles.largeIcon}`} />
        <span className={styles.navTitle}>{title}</span>
    </div>
  );
};

export default NavbarOptionMenuPage;
