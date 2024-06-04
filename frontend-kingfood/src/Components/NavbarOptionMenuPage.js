import React from 'react';
import styles from './NavbarOptionMenuPage.module.css';
import { menuData } from '../Datas/NavbarOptionMenuPageData'; // Import danh sách mục từ file mới tạo

const NavbarMenuPage = () => {
  return (
    <div className={styles.navbar}>
      {menuData.map((option, index) => (
        <div className={styles.navItem} key={index}>
          <div className={`${styles.roundIcon}`}>
            <img src={option.image} alt={option.title} className={`${styles.navIcon} ${styles.largeIcon}`} />
          </div>
          <span className={styles.navTitle}>{option.title}</span>
        </div>
      ))}
    </div>
  );
};

export default NavbarMenuPage;
