// src/pages/MenuPage.js
import React from 'react';
import styles from '../Styles/MenuPage.module.css';
import NavbarMenuPage from '../Components/NavbarMenuPage';

function HeaderMenuPage() {
    return (
        <div>
            <h1>This is the Header of the Menu Page</h1>
        </div>
    );
}

function MenuCategoryPage() {
    return (
        <div>
            <h2>Menu Categories</h2>
            <ul>
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
            </ul>
        </div>
    );
}

function ProductCardPage() {
    return (
        <div>
            <h3>Product Card</h3>
            <p>Product information here</p>
        </div>
    );
}

export default function MenuPage() {
    return (
        <div className={styles.menuPage}>
            <NavbarMenuPage />
            <HeaderMenuPage />
            <MenuCategoryPage />
            <ProductCardPage />
        </div>
    );
}
