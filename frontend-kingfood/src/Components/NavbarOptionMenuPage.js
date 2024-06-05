import React from 'react';
import styles from './NavbarOptionMenuPage.module.css';
import { NavbarOptionMenuPageData } from '../Datas/NavbarOptionMenuPageData';

const NavbarOptionMenuPage = () => {
  return (
    <div className={styles.navbar}>
      {NavbarOptionMenuPageData.map((item) => (
        <div key={item.id} className={styles.navItem}>
          <img src={item.image} alt={item.title} className={`${styles.navIcon} ${styles.largeIcon}`} />
          <span className={styles.navTitle}>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default NavbarOptionMenuPage;
