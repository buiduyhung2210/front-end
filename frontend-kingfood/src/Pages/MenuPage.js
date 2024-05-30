// src/pages/MenuPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Styles/MenuPage.module.css';
import NavbarMenuPage from '../Components/NavbarMenuPage';
import CardProductMenuPage from '../Components/CardProductMenuPage'; // Sửa đường dẫn import
import products from '../Datas/CardProductMenuPageData'; // Import đối tượng sản phẩm từ file products.js



export default function MenuPage() {
    return (
        <div className={styles.menuPage}>
            <NavbarMenuPage />
            {/* Sử dụng map để hiển thị tất cả các sản phẩm */}
            {products.map(product => (
                <CardProductMenuPage key={product.id} product={product} />
            ))}
        </div>
    );
}
