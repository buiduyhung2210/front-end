import React from 'react';
import styles from './NavbarMenuPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBeerMugEmpty, faTruck } from '@fortawesome/free-solid-svg-icons';

const NavbarMenuPage = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <div className={`${styles.roundIcon}`}>
          <FontAwesomeIcon icon={faUtensils} className={`${styles.navIcon} ${styles.largeIcon}`} style={{"--fa-primary-color": "#ffa654", "--fa-secondary-color": "#1f2398"}} />
        </div>
        <span className={styles.navTitle}>Ăn Uống</span>
      </div>
      <div className={styles.navItem}>
        <div className={`${styles.roundIcon}`}>
          <FontAwesomeIcon icon={faBeerMugEmpty} className={`${styles.navIcon} ${styles.largeIcon}`} style={{color: "#63E6BE"}} />
        </div>
        <span className={styles.navTitle}>Nightlife</span>
      </div>
      <div className={styles.navItem}>
        <div className={`${styles.roundIcon}`}>
          <FontAwesomeIcon icon={faTruck} className={`${styles.navIcon} ${styles.largeIcon}`} style={{color: "#d73ad9"}} />
        </div>
        <span className={styles.navTitle}>Delivery</span>
      </div>
    </div>
  );
};

export default NavbarMenuPage;
