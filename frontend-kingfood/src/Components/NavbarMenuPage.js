import React from 'react';
import styles from './NavbarMenuPage.module.css';
import { MdLocalDining } from "react-icons/md";
import { CiDeliveryTruck, CiBeerMugFull } from "react-icons/ci";

const NavbarMenuPage = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <div className={`${styles.roundIcon}`}>
          <MdLocalDining className={`${styles.navIcon} ${styles.largeIcon} ${styles.icon1}`} />
        </div>
        <span className={styles.navTitle}>Ăn Uống</span>
      </div>
      <div className={styles.navItem}>
        <div className={`${styles.roundIcon}`}>
          <CiBeerMugFull className={`${styles.navIcon} ${styles.largeIcon} ${styles.icon2}`} />
        </div>
        <span className={styles.navTitle}>Nightlife</span>
      </div>
      <div className={styles.navItem}>
        <div className={`${styles.roundIcon}`}>
          <CiDeliveryTruck className={`${styles.navIcon} ${styles.largeIcon} ${styles.icon3}`} />
        </div>
        <span className={styles.navTitle}>Delivery</span>
      </div>
    </div>
  );
};

export default NavbarMenuPage;