// src/pages/MenuPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import styles from '../Styles/MenuPage.module.css';
import NavbarMenuPage from '../Components/NavbarMenuPage';
import CardProductMenuPage from '../Components/CardProductMenuPage'; // Sửa đường dẫn import
import NavbarOptionMenuPage from '../Components/NavbarOptionMenuPage'; // Import
import Navbar1 from '../Components/Navbar1';

export default function MenuPage() {
    return (
        <div className={styles.menuPage}>
            <Navbar1 />
            <NavbarMenuPage />
            <NavbarOptionMenuPage />
            <CardProductMenuPage /> {/* Chỉ render component này một lần */}
            <Footer />
        </div>
    );
}
